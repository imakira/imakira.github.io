(ns net.coruscation.cerulean.server.assets
  (:require
   [cljc.java-time.zoned-date-time :as zoned-date-time]
   [clojure.data.xml :as xml]
   [com.wsscode.pathom3.interface.eql :as p.eql]
   [net.coruscation.cerulean.common.commons :as commons]
   [net.coruscation.cerulean.server.resolver :refer [blog-eql env]]
   [net.coruscation.cerulean.user-config :as user-config]))

(defonce ^:dynamic *blogs* (atom []))

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

(defn- site-last-modified []
  (->> (fetch-all-blogs)
       (map :blog/modified-date)
       (map commons/parse-iso8601)
       (sort (fn [a b]
               (zoned-date-time/compare-to a b)))
       reverse
       first
       (#(.toString %))))

(defn generate-rss [& _]
  (xml/indent-str (xml/element :feed  {:xmlns "http://www.w3.org/2005/Atom"}
                               (xml/element :title {} user-config/title)
                               (xml/element :link {:href user-config/root-url})
                               (xml/element :updated {}
                                            (site-last-modified))
                               (xml/element :author {} user-config/author)
                               (xml/element :id {} user-config/root-url)

                               (for [blog (fetch-blogs)]
                                 (let [href (str user-config/root-url "/blogs/" (:blog/id blog) ".html")]
                                   (xml/element :entry {}
                                                (xml/element :title {:type "html"}
                                                             (:blog/title blog))
                                                (xml/element :link {:href href})
                                                (xml/element :updated {}
                                                             (:blog/modified-date blog))
                                                (xml/element :id {}
                                                             href)
                                                (xml/element :content {:type "html"}
                                                             (:blog/content (fetch-blog {:path-params {:blog/id (:blog/id blog)}})))))))))

(defn generate-sitemap [& _]
  (xml/indent-str (xml/element :urlset {:xmlns "http://www.sitemaps.org/schemas/sitemap/0.9"}
                               (xml/element :url {}
                                            (xml/element :loc {}
                                                         user-config/root-url)
                                            (xml/element :lastmod {}
                                                         (site-last-modified)))
                               (for [blog (fetch-all-blogs)]
                                 (xml/element :url {}
                                              (xml/element :loc {}
                                                           (str user-config/root-url "/blogs/" (:blog/id blog) ".html"))
                                              (xml/element :lastmod {}
                                                           (:blog/modified-date blog)))))))

(def resource-route
  [""
   ["/atom.xml" {:name :rss
                 :handler #'generate-rss}]
   ["/sitemap.xml" {:name :sitemap
                    :handler #'generate-sitemap}]])
