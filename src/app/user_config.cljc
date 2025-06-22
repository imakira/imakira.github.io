(ns app.user-config
  (:require
   #?@(:clj [[clojure.edn :as edn]])
   [clojure.string :as str])
  #?(:cljs (:require-macros [app.user-config :refer [read-config]])))


(defn remove-tailing-slash [str]
  (if (str/ends-with? str "/")
    (subs str 0 (- (count str) 1))
    str))

#?(:clj (defmacro read-config []
          (edn/read-string (slurp "./config.edn"))))

(def config (read-config))

(def title (:title config))
(def root-url (remove-tailing-slash (:root-url config)))
(def author (:author config))

(def links (:links config))

(def navigation (:navigation config))

(def special-pages (:special-pages config))


