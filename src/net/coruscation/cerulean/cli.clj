(ns net.coruscation.cerulean.cli
  (:require
   [clojure.java.io :as io]
   [clojure.tools.cli :refer [parse-opts]]
   [net.coruscation.cerulean.config :refer [*blog-dir* *workspace*
                                            join-workspace-path]]
   [net.coruscation.cerulean.server.server :as server :refer [*in-cli?*]]
   [net.coruscation.cerulean.server.static-generator :as static-generator]
   [net.coruscation.cerulean.server.utils :refer [path-join]]
   [shadow.cljs.devtools.api :as shadow]
   [shadow.cljs.devtools.server :as shadow.server])
  (:gen-class))

(defonce config-file-name "config.edn")


(defn init-workspace [& _]
  (let [config-file (io/file (join-workspace-path config-file-name))]
    (assert (not (.exists config-file))
            {:text "configuration already eixsts, do not initialize"
             :states {:workspace *workspace*
                      :blog-dir *blog-dir*}})
    (.mkdirs (io/file *workspace*))
    (.mkdirs (io/file (path-join *workspace* "public")))
    (print "Copying default configuration file")
    (spit (join-workspace-path config-file-name)
          (slurp (io/resource "config.edn")))
    (print "Copying demonstration blog")
    (.mkdirs (io/file *blog-dir*))
    (spit (path-join *blog-dir* "demo.org")
          (slurp (io/resource "demo.org")))))


(defn build-workspace [& _]
  (static-generator/build-full))

(defn watch-workspace [& _]
  (server/start-server!)
  (shadow.server/start!)
  (shadow/watch :app))

(def cli-options-root [])

(defn -main [& args]
  (let [cl (.getContextClassLoader (Thread/currentThread))]
    (.setContextClassLoader (Thread/currentThread) (clojure.lang.DynamicClassLoader. cl)))
  (let [{:keys [arguments]} (parse-opts args cli-options-root)
        [subcmd & subcmd-args] arguments]
    (binding [*in-cli?* true]
      (apply (case (keyword subcmd)
               :init init-workspace
               :build build-workspace
               :watch watch-workspace)
             subcmd-args))))


(defn -build [& _]
  (-main "build"))

(defn -watch [& _]
  (-main "watch"))
