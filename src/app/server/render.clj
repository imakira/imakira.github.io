(ns app.server.render
  (:require [hiccup2.core :as h]
            [hiccup.util :refer [raw-string]]
            [clojure.string :as str]
            [cheshire.core :as json]
            [uix.dom.server :as dom.server]
            [uix.core :refer [defui $]]
            [app.common.pages :as pages]
            [app.user-config :as user-config]))

(defn template [inner serialized-assets & {:keys [ssr? server-url description title]
                                           :or {ssr? false
                                                server-url "http://localhost:3001/"}}]
  (str
   "<!DOCTYPE html>"
   (h/html
       [:html.no-js {:lang "en"}
        [:head
         [:meta {:charset "utf-8"}]
         [:meta {:http-equiv "x-ua-compatible" :content "ie=edge"}]
         [:meta {:name "description" :content (if (seq description) description title)}]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
         [:title (or title user-config/title)]
         [:link {:rel "preconnect", :href "https://fonts.googleapis.com"}]
         [:link
          {:rel "preconnect",
           :href "https://fonts.gstatic.com",
           :crossorigin ""}]
         [:link
          {:href "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap",
           :rel "stylesheet"}]
         [:link
          {:rel "stylesheet",
           :href "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=keyboard_arrow_down"}]
         [:link {:rel "stylesheet" :href (str "/main.css?v=" (System/currentTimeMillis))}]
         [:link
          {:rel "alternate",
           :type "application/rss+xml",
           :title user-config/title,
           :href (str user-config/root-url "/atom.xml")}]]
        [:body
         [:div#root (raw-string inner)]
         [:script (raw-string (str "window.__server_path = \"" server-url \"))]
         (when ssr? (list [:script "window.__cerulean_rehydrate = true;"]
                          [:script (raw-string
                                    (str/join "\n"
                                              (map (fn [[key value]]
                                                     (str "globalThis[\"" key "\"] = "
                                                          (json/generate-string value)
                                                          ";"))
                                                   serialized-assets)))]))
         [:script {:src "/js/main.js"}]]])))

(def ^:dynamic *serialized-assets* (atom {}))

(defn spa-template []
  (template nil nil))

(defn render [path]
  (binding [*serialized-assets* (atom {})]
    (let [inner (->
                 ($ pages/app {:initial-route path})
                 (dom.server/render-to-string))
          {:keys [description title]} @*serialized-assets*]
      (template inner @*serialized-assets*
                :ssr? true :server-url "/"
                :description description
                :title title))))

(defn dev-template [{:keys [uri http-roots http-config] :as req}]
  {:status 200
   :body (template nil nil)})

