(ns net.coruscation.cerulean.server.code-highlight
  (:require
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [net.coruscation.cerulean.config :as config]
   [net.coruscation.cerulean.server.utils :refer [path-join]])
  (:import
   [java.nio.file Files ]
   [java.nio.file.attribute FileAttribute]
   (java.util HashMap)
   (org.graalvm.polyglot Context)))


(def  graaljs-node-modules-directory "node_modules")
(def  graaljs-node-modules ["highlight.js"])
(def  extra-files ["wrapper.js"])

(def graaljs-declaration-file-name "graaljs-files.edn")

(defn graaljs-files []
  (->> (for [module graaljs-node-modules]
         (let [node-modules-path (.toAbsolutePath (.toPath (io/file graaljs-node-modules-directory)))
               module-dir (io/file (path-join graaljs-node-modules-directory module))]
           (assert (.exists module-dir))
           (mapv (fn [file]
                   (let [path (.toString (.relativize (.toAbsolutePath (.toPath (io/file ""))) (.toPath file)))]
                     (if (.isDirectory file)
                       (str path "/")
                       path)))
                 (file-seq (io/file module-dir)))))
       (apply concat extra-files)
       (into [])))

(defn write-graaljs-files! []
  (spit (io/file (path-join "./resources" graaljs-declaration-file-name)) (pr-str (graaljs-files))))

(def node-modules-directory
  (delay
    (if (config/running-as-jar?)
      (let [dir (Files/createTempDirectory "cerulean-runtime-resources" (into-array FileAttribute []))
            graaljs-files (edn/read-string (slurp (io/resource graaljs-declaration-file-name)))]
        (doseq [path graaljs-files]
          (if (and (.endsWith path "/")
                   (not (= path "/")))
            (.mkdirs (io/file (path-join dir path)))
            (let [dst (io/file (path-join dir path))]
              (when (.getParentFile dst)
                (.mkdirs (.getParentFile dst)))
              (spit dst
                    (slurp (io/resource path))))))
        (.toString dir))
      "")))

(def ^:dynamic *js-context*
  (delay (-> (Context/newBuilder (into-array String ["js"]))
             (.allowExperimentalOptions true)
             (.options (HashMap.
                        {"js.commonjs-require" "true"
                         "js.commonjs-require-cwd" @node-modules-directory}))
             (.allowIO true)
             (.build))))

(defn get-wrapper-module []
  (locking @*js-context* (.eval @*js-context*
                                "js"
                                "require('./wrapper.js')")))

(defn add-language-alias! [alias code]
  (locking @*js-context* (.execute (.getMember (get-wrapper-module) "language_alias_wrapper")
                                   (into-array Object [alias code]))))

(defn highlight [code lang]
  (locking @*js-context* (.asString (.execute (.getMember (get-wrapper-module)  "highlight_wrapper") (into-array Object [code lang])))))
