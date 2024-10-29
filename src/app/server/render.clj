(ns app.server.render
  (:require [hiccup2.core :as h]
            [hiccup.util :refer [raw-string]]
            [clojure.string :as str]
            [cheshire.core :as json]
            [uix.dom.server :as dom.server]
            [uix.core :refer [defui $]]
            [app.common.pages :as pages]
            ))

(defn template [inner serialized-assets]
  (str
   "<!DOCTYPE html>"
   (h/html
       [:html.no-js {:lang "en"}
        [:head
         [:meta {:charset "utf-8"}]
         [:meta {:http-equiv "x-ua-compatible" :content "ie=edge"}]
         [:meta {:name "description" :content ""}]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
         [:title "SSR"]
         [:link {:rel "stylesheet" :href (str "/main.css?v=" (System/currentTimeMillis))}]
         ;; [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"] ; Generated CSS will be inserted here
         ;; [:style {:id "_stylefy-constant-styles_"}]
         ;; [:style {:id "_stylefy-styles_"}]
         ]
        [:body
         [:div#root (raw-string inner)]
         [:script "window.__cerulean_rehydrate = true;"]
         [:script (raw-string
                   (str/join "\n"
                             (map (fn [[key value]]
                                    (str "globalThis[\"" key "\"] = "
                                         (json/generate-string value)
                                         ";"))
                                  serialized-assets)))]
         [:script {:src "/js/main.js"}]]])))


(def ^:dynamic *serialized-assets* (atom []))

(defn render [path]
  (binding [*serialized-assets* (atom [])]
    (->
     ($ pages/app {:initial-route path})
     (dom.server/render-to-string)
     (template @*serialized-assets*))))
