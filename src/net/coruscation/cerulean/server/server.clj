(ns net.coruscation.cerulean.server.server
  (:require
   [clojure.core.async :as a]
   [clojure.tools.logging :as logging]
   [net.coruscation.cerulean.check :as check]
   [net.coruscation.cerulean.common.pages :as pages]
   [net.coruscation.cerulean.config :as config]
   [net.coruscation.cerulean.orgx.orgx :as orgx]
   [net.coruscation.cerulean.render.render :as render]
   [net.coruscation.cerulean.server.assets :as assets :refer [fetch-all]]
   [net.coruscation.cerulean.server.slash-pages :as slash-pages]
   [net.coruscation.cerulean.server.watch-service :as watch-service]
   [reitit.ring :as ring]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.content-type :refer [wrap-content-type]]
   [ring.middleware.cors :as cors]
   [ring.middleware.file :refer [wrap-file]]
   [ring.middleware.json :refer
    [wrap-json-params wrap-json-response]]
   [ring.util.http-response :as resp]
   [shadow.cljs.devtools.api :as api]))

(defn wrap-restful-response [handler]
  (fn [request]
    (let [result (handler request)]
      (if result
        (resp/ok (handler request))
        (resp/not-found)))))

(defn client-render-wrapper [{uri :uri}]
  (resp/header (resp/ok (render/render uri))
               "Content-Type"
               "text/html"))

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
      slash-pages/resource-route]])))

(def app (-> #'router
             (wrap-file "./public")
             (wrap-content-type)
             (cors/wrap-cors :access-control-allow-origin [#"http://localhost:8080" #"http://localhost:8000"]
                             :access-control-allow-methods [:get :put :post :delete])
             wrap-json-params))


(def jetty (atom nil))

(defn generate-all-orgx! []
  (doseq [blog (fetch-all)]
    (when (:blog/orgx blog)
      (orgx/generate-cljc-from-blog blog))))

(defonce maybe-init-orgx-watch!
  (memoize
   (fn []
     (let [service (watch-service/watch config/*blog-dir*)
           [resp _] service]
       {:service service
        :future (future
                  (loop [event (a/<!! resp)]
                    (when (not (nil? event))
                      (try (generate-all-orgx!)
                           (catch Throwable t
                             (logging/warn "Generated orgx file failed" t)))
                      (recur (a/<!! resp)))))}))))

(defn stop-orgx-watch! []
  (let [[_ cancel] (:service (maybe-init-orgx-watch!))]
    (a/>!! cancel true)))

(defn start-server! []
  (maybe-init-orgx-watch!)
  (check/environment-check)
  (reset! jetty (jetty/run-jetty #'app {:port 3001 :join? false})))

