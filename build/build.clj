(ns build
  (:require
   [clojure.edn :as edn]
   [clojure.tools.build.api :as b]
   [net.coruscation.cerulean.config :refer [running-as-jar-resource-stub]]
   [net.coruscation.cerulean.server.code-highlight :refer [graaljs-files
                                                           write-graaljs-files!]]
   [net.coruscation.cerulean.server.utils :refer [path-join]]))

(def project (-> (edn/read-string (slurp "deps.edn"))
                 :aliases :neil :project))
(def lib (or (:name project) 'my/lib1))

;; use neil project set version 1.2.0 to update the version in deps.edn

(def version (or (:version project)
                 "1.2.0"))
(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"}))
(def uber-file (format "target/%s-%s-standalone.jar" (name lib) version))
(def jar-file (format "target/%s-%s.jar" (name lib) version))

(defn clean [_]
  (b/delete {:path "target"}))

(defn jar [_]
  (b/write-pom {:class-dir class-dir
                :lib lib
                :version version
                :basis basis
                :src-dirs ["src"]})
  (b/copy-dir {:src-dirs ["src" "resources"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))

(defn install [_]
  (jar {})
  (b/install {:basis basis
              :lib lib
              :version version
              :jar-file jar-file
              :class-dir class-dir}))


(defn uber [&  _]
  (clean nil)
  (write-graaljs-files!)
  (b/copy-dir {:src-dirs ["src" "resources" "dev"]
               :target-dir class-dir})

  (doseq [f (graaljs-files)]
    (when (not (.endsWith f "/"))
      (b/copy-file {:src (path-join f)
                    :target (path-join class-dir f)})))

  (b/write-file {:path (path-join class-dir running-as-jar-resource-stub)
                 :content "true"})

  (b/compile-clj {:basis basis
                  :src-dirs ["src"]
                  :class-dir class-dir})
  (b/uber {:class-dir class-dir
           :uber-file uber-file
           :basis basis
           :exclude [#"lib/reflect.js" #"lib/goog.js" #"lib/base.js"]
           :main 'net.coruscation.cerulean.cli
           :conflict-handlers {#".*" :warn}}))

(defn deploy [opts]
  (jar opts)
  ((requiring-resolve 'deps-deploy.deps-deploy/deploy)
   (merge {:installer :remote
           :artifact jar-file
           :pom-file (b/pom-path {:lib lib :class-dir class-dir})}
          opts))
  opts)
