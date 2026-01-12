(ns net.coruscation.cerulean.cli
  (:require
   [clojure.java.io :as io]
   [net.coruscation.cerulean.config :refer [*blog-dir* *workspace*
                                            join-workspace-path]]
   [net.coruscation.cerulean.server.utils :refer [path-join]]))

(defonce config-file-name "config.edn")

(defn init-workspace []
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
