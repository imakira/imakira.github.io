(ns net.coruscation.cerulean.server.server
  (:require
   [net.coruscation.cerulean.common.pages :as pages]
   [net.coruscation.cerulean.server.assets :as assets]
   [net.coruscation.cerulean.check :as check]
   [net.coruscation.cerulean.server.render :as render]
   [reitit.ring :as ring]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.cors :as cors]
   [ring.middleware.file :refer [wrap-file]]
   [ring.middleware.json :refer
    [wrap-json-params wrap-json-response]]
   [ring.util.http-response :as resp]))

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
     ["" {:middleware [wrap-json-response
                       wrap-json-params
                       wrap-restful-response]}
      assets/json-assets-route]
     ["" {:middleware [wrap-restful-response]}
      assets/resource-route]])))

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World"})

(def app (-> #'router
             (wrap-file "./public")
             (cors/wrap-cors :access-control-allow-origin [#"http://localhost:8080" #"http://localhost:8000"]
                             :access-control-allow-methods [:get :put :post :delete])
             wrap-json-params))

(check/environment-check)
(assets/refresh-blogs)
(def ^:dynamic *jetty* (jetty/run-jetty #'app {:port 3001 :join? false}))

#_(do
    (.stop *jetty*)
    (.start *jetty*))

