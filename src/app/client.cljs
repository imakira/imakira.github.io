(ns app.client
  (:require
   [cljs.spec.alpha :as s]
   [clojure.edn :as edn]
   [uix.core :as uix :refer [defui $ use-state use-effect]]
   [uix.dom :as dom]
   [app.common.pages :as pages]
   [clojure.core.async :as a]))

(defonce root
  (delay (uix.dom/create-root (js/document.getElementById "root"))))

(defn render []
  (uix.dom/render-root ($ pages/app) @root))

(defn ^:export init []
  (if js/window.__cerulean_rehydrate
    (dom/hydrate-root (js/document.getElementById "root")
                      ($ pages/app {:initial-route js/location.pathname}))
    (render)))
