(ns net.coruscation.cerulean.server.resolver
  (:require
   [cljc.java-time.zoned-date-time :as zoned-date-time]
   [clojure.java.io :as io]
   [com.wsscode.pathom3.connect.built-in.resolvers :as pbir]
   [com.wsscode.pathom3.connect.indexes :as pci]
   [com.wsscode.pathom3.connect.operation :as pco]
   [net.coruscation.cerulean.common.commons :as commons]
   [net.coruscation.cerulean.config :as config]
   [net.coruscation.cerulean.server.blog-gen :as blog-gen]
   [net.coruscation.cerulean.server.blogs :refer [file-first-commit-date
                                                  file-last-commit-date
                                                  file-last-modified-date
                                                  special-page?]]
   [net.coruscation.cerulean.user-config :as user-config])
  (:import
   [com.google.common.io Files]))


(def blog-from-file-cache (atom {}))

(defn wrapped-keys-in-ns [m ns-str]
  (into {} (map (fn [[k v]]
                  [(keyword (symbol ns-str (name k)))
                   v])
                m)))

(def blog-short-eql
  [:blog/id
   :blog/title
   :blog/language
   :blog/author
   :blog/orgx
   :blog/orgx-require
   :blog/published-date
   :blog/modified-date
   :blog/category
   :blog/unlisted
   ])

(def blog-eql (->> (concat
                    blog-short-eql
                    [:blog/content
                     :blog/tags
                     :blog/email
                     :blog/description
                     :blog/show-toc?
                     :blog/language
                     :blog/file-path
                     ])
                   (into [])))


#_{:clj-kondo/ignore [:unused-binding]}
(pco/defresolver blog-from-path [{:file/keys
                                  [file-path
                                   ;; we use this to invalid cache when blog file changes
                                   file-last-modified-time]}]
  {::pco/cache-store ::blog-from-file-cache
   ::pco/output
   [{:blog.fetch/by-path blog-eql}]}

  {:blog.fetch/by-path
   (wrapped-keys-in-ns
    (let [temp (blog-gen/org-file->html file-path)]
      (as-> temp blog
        (merge blog {:file-path file-path
                     :id (:id temp)
                     :language (or (:language temp)
                                   "en_US")
                     :published-date (or (:published-date temp)
                                         (file-first-commit-date file-path)
                                         (file-last-modified-date file-path))
                     :modified-date (or (:modified-date temp)
                                        (file-last-commit-date file-path)
                                        (file-last-modified-date file-path))})
        (merge blog {:id (if (special-page? blog)
                           (str (Files/getNameWithoutExtension file-path)
                                ".html")
                           (:id blog))
                     :show-toc? (not (special-page? blog))})))
    "blog")})

(pco/defresolver blog-files []
  {::pco/output
   [{:blog/blog-files [:file/file-path]}]}
  {:blog/blog-files
   (let [blog-dir (io/file config/*blog-dir*)]
     (when-not (.isDirectory blog-dir)
       (throw (ex-info "Blog directory doesn't exist"
                       {:id :blog-dir-nonexistent})))
     (let [files (->> (.listFiles blog-dir)
                      (filter (fn [file]
                                (and (.isFile file)
                                     (re-matches #".*\.org$" (.getAbsolutePath file)))))
                      (map (fn [file] (.getAbsolutePath file))))]
       (mapv (fn [file]
               {:file/file-path file}) files)))})

(pco/defresolver blog-special-page? [{:blog/keys [id]}]
  {:blog/special-page? (boolean (some (fn [name]
                                        (= name id))
                                      user-config/special-pages))})

(pco/defresolver file-last-modified-time [{:file/keys [file-path]}]
  {::pco/output
   [:file/file-last-modified-time]}
  {:file/file-last-modified-time
   (file-last-modified-date file-path)})

(pco/defresolver blog-table [{:blog/keys [blog-files]}]
  {::pco/input [{:blog/blog-files
                 [:blog.fetch/by-path]}]
   ::pco/output [{:blog.query/tables blog-eql}]}
  {:blog.query/tables
   (into {} (map (fn [{:blog.fetch/keys [by-path]}]
                   [(:blog/id by-path)
                    by-path])
                 blog-files))})

(pco/defresolver all-including-unlisted [{:blog.query/keys [tables]}]
  {::pco/output [{:blog.query/all blog-eql}]}
  {:blog.query/all (->> (vals tables)
                        (into []))})

(pco/defresolver all-blogs-desc [{:blog.query/keys [tables]}]
  {::pco/output [{:blog.query/all-visible-desc blog-eql}]}
  {:blog.query/all-visible-desc
   (->> (vals tables)
        (filter (fn [blog] (not (:blog/unlisted blog))))
        (sort (fn [a b]
                (zoned-date-time/compare-to
                 (commons/parse-iso8601 (:blog/published-date a))
                 (commons/parse-iso8601 (:blog/published-date b)))))
        (reverse)
        (into []))})

(pco/defresolver home-page-blogs-desc [{:blog.query/keys [all-visible-desc]}]
  {::pco/output [{:blog.query/home-page-desc (into [] (concat [:blog/special-page?] blog-eql))}]}
  {:blog.query/home-page-desc
   (into []
         (filter (fn [blog] (not (:blog/special-page? blog)))
                 all-visible-desc))})

(pco/defresolver blog-ids [{:blog.query/keys [all-visible-desc]}]
  {:blog.query/blog-ids
   (mapv :blog/id all-visible-desc)})

(def blog-by-id
  (pbir/attribute-table-resolver :blog.query/tables
                                 :blog/id
                                 blog-eql))

(def env
  (-> (pci/register [blog-files
                     blog-from-path
                     blog-special-page?
                     file-last-modified-time
                     blog-by-id
                     blog-table
                     all-blogs-desc
                     home-page-blogs-desc
                     blog-ids
                     ])
      (assoc ::blog-from-file-cache blog-from-file-cache)))


