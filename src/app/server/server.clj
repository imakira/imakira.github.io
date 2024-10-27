(ns app.server.server
  (:require [clojure.string :as str]
            [uix.core :refer [defui $]]
            [uix.dom.server :as dom.server]
            [hiccup2.core :as h]
            [hiccup.util :refer [raw-string]]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.cors :as cors]
            [ring.util.http-response :as resp]
            [ring.middleware.json :refer
             [wrap-json-params wrap-json-response]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file :refer [wrap-file]]
            [cheshire.core :as json]
            [reitit.core :as r]
            [reitit.ring :as ring]
            [app.server.assets :as assets]
            [app.pages :as pages]
            [app.utils :as utils]
            [app.router :as router]
            [app.config :as config]
            [hiccup.util :as ht]
            [stylefy.core :as stylefy]
            [app.server.check :as check]))

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
         [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"] ; Generated CSS will be inserted here
         [:style {:id "_stylefy-constant-styles_"}]
         [:style {:id "_stylefy-styles_"}]]
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

(defn index [{uri :uri :as request}]
  (binding [*serialized-assets* (atom [])]
    (resp/ok (stylefy/query-with-styles
              (fn []
                (->
                 ($ pages/app {:initial-route uri})
                 (dom.server/render-to-string)
                 (template @*serialized-assets*)))))))

(defn wrap-restful-response [handler]
  (fn [request]
    (resp/ok (handler request))))

(def router
(ring/ring-handler
 (ring/router
  [["" {:get #'index}
    pages/routes]
   ["" {:middleware [wrap-restful-response]}
    assets/assets-route]])))

(defn handler [request]
{:status 200
 :headers {"Content-Type" "text/html"}
 :body "Hello World"})

(def app (-> #'router
             (wrap-file "./public")
             (cors/wrap-cors :access-control-allow-origin [#"http://localhost:8080"]
                             :access-control-allow-methods [:get :put :post :delete])
             wrap-json-response
             wrap-json-params))

(check/environment-check)
(assets/refresh-blogs)
(stylefy/init)
(jetty/run-jetty #'app {:port 3001 :join? false})
