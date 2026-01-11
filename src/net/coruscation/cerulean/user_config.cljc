(ns net.coruscation.cerulean.user-config
  (:require
   #?@(:clj [[clojure.edn :as edn]
             [net.coruscation.cerulean.config :refer [join-workspace-path]]])
   [clojure.string :as str])
  #?(:cljs (:require-macros [net.coruscation.cerulean.user-config :refer [read-config]])))


(defn remove-tailing-slash [str]
  (if (str/ends-with? str "/")
    (subs str 0 (- (count str) 1))
    str))

#?(:clj (def ^:dynamic *config-file-path* "config.edn"))

#?(:clj (defmacro read-config []
          (edn/read-string (slurp (join-workspace-path *config-file-path*)))))


(def config (read-config))

(def title (:title config))
(def root-url (remove-tailing-slash (:root-url config)))
(def author (:author config))

(def links (:links config))

(def navigation (:navigation config))

(def special-pages (:special-pages config))

(def cname (:cname config))
