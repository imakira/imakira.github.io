(ns net.coruscation.cerulean.config
  (:require
   [clojure.java.io :as io]
   [net.coruscation.cerulean.server.utils :refer [path-join]]))

(defonce running-as-jar-resource-stub "net.coruscation.cerulean.running_as_jar")

(defn running-as-jar? []
  (io/resource running-as-jar-resource-stub))

(def ^:private blog-dir "/blogs")
(def ^:private cache-dir "/.cache")
(def ^:private output-dir "/docs")

(def ^:dynamic *workspace* (or (System/getProperty "net.coruscation.cerulean")
                               (System/getenv "CERULEAN_WORKSPACE")
                               (path-join (System/getProperty "user.dir")
                                          "workspace")))

(def ^:dynamic *blog-dir*
  (path-join *workspace*
             blog-dir))

(def ^:dynamic *output* (path-join *workspace*
                                   output-dir))

(def ^:dynamic *cache* (path-join *workspace*
                                  cache-dir))

(defn join-workspace-path [& paths]
  (apply path-join *workspace* paths))

(defmacro with-workspace [workspace & body]
  `(binding [*workspace* ~workspace
             *blog-dir* (path-join ~workspace ~blog-dir)
             *output* (path-join ~workspace ~output-dir)
             *cache* (path-join ~workspace ~cache-dir)]
     ~@body))
