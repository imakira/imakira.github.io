(ns net.coruscation.cerulean.cli
  (:require
   [clojure.java.io :as io]
   [net.coruscation.cerulean.config :refer [*blog-dir* *workspace*
                                            join-workspace-path]]
   [net.coruscation.cerulean.server.static-generator :as static-generator]
   [net.coruscation.cerulean.server.utils :refer [path-join]]
   [net.coruscation.cerulean.server.server :as server]
   [clojure.tools.cli :refer [parse-opts]])
  (:gen-class))

(defonce config-file-name "config.edn")


(defn init-workspace [& _]
  (let [config-file (io/file (join-workspace-path config-file-name))]
    (assert (not (.exists config-file))
            "configuration already eixsts, do not initialize")
    (.mkdirs (io/file *workspace*))
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
  (server/start-server!))

(def cli-options-root [])

(defn -main [& args]
  (let [{:keys [arguments]} (parse-opts args cli-options-root)
        [subcmd & subcmd-args] arguments]
    (apply (case (keyword subcmd)
             :init init-workspace
             :build build-workspace
             :watch watch-workspace)
           subcmd-args)))
