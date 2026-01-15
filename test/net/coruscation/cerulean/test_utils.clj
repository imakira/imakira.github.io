(ns net.coruscation.cerulean.test-utils
  (:require
   [babashka.fs :as fs]
   [clojure.java.io :as io]
   [net.coruscation.cerulean.config :refer [with-workspace *workspace* *cache* *blog-dir* *output*]]))

(defmacro with-temp-workspace [& children]
  `(let [~'tmp-workspace (.toString (java.nio.file.Files/createTempDirectory "cerulean-tmp-workspace" (into-array java.nio.file.attribute.FileAttribute [])))]
     (try
       (with-workspace (io/file ~'tmp-workspace)
         (.mkdirs (io/file *cache*))
         (.mkdirs (io/file *blog-dir*))
         (.mkdirs (io/file *output*))
         ~@children)
       (finally (fs/delete-tree ~'tmp-workspace)))))

(defn temp-workspace-fixture [test-run]
  (with-temp-workspace
    (test-run)))
