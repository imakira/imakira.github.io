(ns net.coruscation.cerulean.config
  (:require
   [net.coruscation.cerulean.server.utils :refer [path-join]]))

(def ^:private blog-dir "/blogs")
(def ^:private cache-dir "/.cache")
(def ^:private output-dir "/docs")

(def ^:dynamic *workspace* (or (System/getProperty "net.coruscation.cerulean")
                               (System/getenv "CERULEAN_WORKSPACE")
                               (System/getProperty "user.dir")))

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
