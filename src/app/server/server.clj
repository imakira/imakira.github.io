(ns app.server.server
  (:require [clojure.string :as str]
            [uix.dom.server :as dom.server]
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
            [app.utils :as utils]
            [app.router :as router]
            [app.config :as config]
            [app.common.pages :as pages]
            [hiccup.util :as ht]
            [app.server.check :as check]
            [app.server.render :as render]))

(defn wrap-restful-response [handler]
  (fn [request]
    (let [result (handler request)]
      (if result
        (resp/ok (handler request))
        (resp/not-found)))))

(defn client-render-wrapper [{uri :uri :as request}]
  (resp/ok (render/render uri)))

(def router
  (ring/ring-handler
   (ring/router
    [["" {:handler #'client-render-wrapper}
      pages/routes]
     ["" {:middleware [wrap-restful-response]}
      assets/assets-route]])))

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World"})

(def app (-> #'router
             (wrap-file "./public")
             (cors/wrap-cors :access-control-allow-origin [#"http://localhost:8080" #"http://localhost:8000"]
                             :access-control-allow-methods [:get :put :post :delete])
             wrap-json-response
             wrap-json-params))

(check/environment-check)
(assets/refresh-blogs)
(def ^:dynamic *jetty* (jetty/run-jetty #'app {:port 3001 :join? false}))
