(ns net.coruscation.cerulean.server.assets
  (:require
   [cljc.java-time.zoned-date-time :as zoned-date-time]
   [clojure.data.xml :as xml]
   [com.wsscode.pathom3.interface.eql :as p.eql]
   [net.coruscation.cerulean.common.commons :as commons]
   [net.coruscation.cerulean.server.resolver :refer [blog-eql env]]
   [net.coruscation.cerulean.user-config :as user-config]))

(defonce ^:dynamic *blogs* (atom []))

(defn fetch-all [& rest]
  (p.eql/process-one env
                     :blog.query/all))

(defn fetch-all-blogs [& rest]
  (p.eql/process-one env
                     :blog.query/all-visible-desc))

(defn fetch-blog [{{id :blog/id} :path-params}]
  (p.eql/process env
                 {:blog/id id}
                 blog-eql))

(defn fetch-blogs [& rest]
  (p.eql/process-one env
                     :blog.query/home-page-desc))

(defn fetch-blog-ids [& rest]
  (p.eql/process-one env
                     {:blog.query/all-visible-desc
                      [:blog/id]}))

(def json-assets-route
  ["/assets"
   ["/blogs"  {:name ::blogs
               :handler #'fetch-blogs}]
   ["/blog/{blog/id}"  {:name ::blog
                        :handler #'fetch-blog
                        :depends
                        {:route ::blogs
                         :params-list-fn
                         #'fetch-blog-ids}}]
   ])
