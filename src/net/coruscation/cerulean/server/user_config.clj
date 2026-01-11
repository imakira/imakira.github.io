(ns net.coruscation.cerulean.server.user-config 
  (:require
   [clojure.edn :as edn]
   [clojure.string :as str]
   [net.coruscation.cerulean.config :refer [join-workspace-path]]))

(defn- remove-trailing-slash [str]
  (if (str/ends-with? str "/")
    (subs str 0 (- (count str) 1))
    str))

(defn read-user-config []
  (let [tmp (edn/read-string (slurp (join-workspace-path "config.edn")))]
    (update tmp :root-url
            remove-trailing-slash)))

(defn get-user-config [id]
  (id (read-user-config)))
