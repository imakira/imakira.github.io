(ns net.coruscation.cerulean.server.assets
  (:require
   [cljc.java-time.zoned-date-time :as zoned-date-time]
   [clojure.data.xml :as xml]
   [com.wsscode.pathom3.interface.eql :as p.eql]
   [net.coruscation.cerulean.common.commons :as commons]
   [net.coruscation.cerulean.server.blogs :refer [special-page?]]
   [net.coruscation.cerulean.server.resolver :refer [blog-eql env]]
   [net.coruscation.cerulean.user-config :as user-config]))

(defonce ^:dynamic *blogs* (atom []))

(defn fetch-blog [{{id :id} :path-params}]
  (p.eql/process env
                 {:blog/id id}
                 blog-eql))

(defn fetch-all-blogs [& rest]
  (p.eql/process-one env
                     :blog-query/all-blogs))

(defn fetch-blogs [& rest]
  (into [] (filter (comp not special-page?)
                   (fetch-all-blogs))))

(defn fetch-blog-ids [& rest]
  (into [] (map (fn [item]
                  {:id (:id item)})
                (fetch-blogs nil))))

(defn fetch-categories [& _]
  (->> (fetch-blogs)
       (map (fn [item] {:category (:category item)}))
       (sort (fn [a b]
               (compare (:category a)
                        (:category b))))
       dedupe))

(defn fetch-blog-by-category [{{category :category} :path-params}]
  (into [] (filter (fn [item]
                     (= category
                        (:category item)))
                   (fetch-blogs))))

(def json-assets-route
  ["/assets"
   ["/blogs"  {:name ::blogs
               :handler #'fetch-blogs}]
   ["/blog/:id"  {:name ::blog
                  :handler #'fetch-blog
                  :depends
                  {:route ::blogs
                   :params-list-fn
                   fetch-blog-ids}}]
   ["/categories" {:name ::categories
                   :handler #'fetch-categories}]
   ["/category/:category" {:name ::category
                           :handler #'fetch-blog-by-category
                           :depends
                           {:route ::categories
                            :params-list-fn #'fetch-categories}}]])

(defn- site-last-modified []
  (->> (fetch-all-blogs)
       (map :modified-date)
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
                                 (let [href (str user-config/root-url "/blogs/" (:id blog) ".html")]
                                   (xml/element :entry {}
                                                (xml/element :title {:type "html"}
                                                             (:title blog))
                                                (xml/element :link {:href href})
                                                (xml/element :updated {}
                                                             (:modified-date blog))
                                                (xml/element :id {}
                                                             href)
                                                (xml/element :content {:type "html"}
                                                             (:content (fetch-blog {:path-params {:id (:id blog)}})))))))))

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
                                                           (str user-config/root-url "/blogs/" (:id blog) ".html"))
                                              (xml/element :lastmod {}
                                                           (:modified-date blog)))))))

(def resource-route
  [""
   ["/atom.xml" {:name :rss
                 :handler #'generate-rss}]
   ["/sitemap.xml" {:name :sitemap
                    :handler #'generate-sitemap}]])
