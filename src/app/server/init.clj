(ns app.server.init
  (:require [clojure.java.io :as io]
            [app.config :as config])
  (:import [java.nio.file Path]
           [java.io File]))

(defn init []
  (.mkdirs (io/file config/*blog-dir*))
  (.mkdirs (io/file config/*cache*))
  (.mkdirs (io/file config/*output*)))
