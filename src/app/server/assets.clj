(ns app.server.assets
  (:require [malli.generator :as mg]
            [app.models :as models]
            [app.server.blog-gen :as blog-gen]
            [ring.util.http-response :as resp]))

(def _mocked-blogs (mg/generate [:vector models/Blog]))
(def _mocked-blogs
  (->> [{:id "1"
         :title "Thoughts on the True Estimation of Living Forces"
         :content (:content (blog-gen/org-file->html "blogs/demo.org"))}
        {:id "2"
         :title "Universal Natural History and Theory of the Heavens"}
        {:id "3"
         :title "Brief Outline of Certain Meditations on Fire"}
        {:id "4"
         :title "\"What does it mean to orient oneself in thinking?\""}
        {:id "5"
         :title "Anthropology from a Pragmatic Point of View"}
        {:id "6"
         :title "Anthropology from a Pragmatic Point of View"}
        {:id "7"
         :title "Anthropology from a Pragmatic Point of View"}
        {:id "8"
         :title "Anthropology from a Pragmatic Point of View"}
        {:id "9"
         :title "Anthropology from a Pragmatic Point of View"}
        {:id "10"
         :title "Anthropology from a Pragmatic Point of View"}
        {:id "12"
         :title "Anthropology from a Pragmatic Point of View"}]
       (map (fn [blog]
              (merge (mg/generate models/Blog)
                     blog)))
       (into [])))

(defn fetch-blog [{{id :id} :path-params}]
  (first (filter #(= id (:id %))
                 _mocked-blogs)))

(defn fetch-blogs [_]
  (map #(dissoc % :body) _mocked-blogs))

(defn- extract-ids [blogs]
  (map (fn [item]
         {:id (:id item)})
       blogs))

(def assets-route
  ["/assets"
   ["/blogs"  {:name ::blogs
               :handler #'fetch-blogs}]
   ["/blog/:id"  {:name ::blog
                  :handler #'fetch-blog
                  :depends
                  {:route ::blogs
                   :gen-params-list
                   extract-ids}}]])

