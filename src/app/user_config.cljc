(ns app.user-config
  (:require
   #?@(:clj [[clojure.edn :as edn]])
   [app.utils :as utils])
  #?(:cljs (:require-macros [app.user-config :refer [read-config]])))

#?(:clj (defmacro read-config []
          (edn/read-string (slurp "./config.edn"))))

(def config (read-config))

(def title (:title config))
(def root-url (utils/remove-tailing-slash (:root-url config)))
(def author (:author config))

(def links (:links config))

(def navigation (:navigation config))

(def special-pages (:special-pages config))


