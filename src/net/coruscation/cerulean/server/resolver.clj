(ns net.coruscation.cerulean.server.resolver
  (:require
   [clojure.java.io :as io]
   [com.wsscode.pathom3.connect.indexes :as pci]
   [com.wsscode.pathom3.connect.operation :as pco]
   [com.wsscode.pathom3.error :as p.error]
   [com.wsscode.pathom3.interface.eql :as p.eql]
   [net.coruscation.cerulean.config :as config]
   [net.coruscation.cerulean.server.blog-gen :as blog-gen]
   [net.coruscation.cerulean.server.blogs :refer [file-first-commit-date
                                                  file-last-commit-date
                                                  file-last-modified-date
                                                  special-page?]])
  (:import
   [com.google.common.io Files]))


(defonce blog-from-file-cache (atom {}))

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
   :blog/modified-date])

(def blog-eql (->> (concat
                    blog-short-eql
                    [:blog/content
                     :blog/tags
                     :blog/email
                     :blog/description
                     :blog/show-toc?
                     :blog/language
                     :blog/file-path])
                   (into [])))


#_{:clj-kondo/ignore [:unused-binding]}
(pco/defresolver blog-from-path [{:blog/keys
                                  [file-path
                                   ;; we use this to invalid cache when blog file changes
                                   file-last-modified-time]}]
  {::pco/cache-store ::blog-from-file-cache
   ::pco/output
   blog-eql}
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
   "blog"))

(pco/defresolver blog-files []
  {::pco/output
   [{:blog/blog-files [:blog/file-path]}]}
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
               {:blog/file-path file}) files)))})

(pco/defresolver file-last-modified-time [{:blog/keys [file-path]}]
  {::pco/output
   [:blog/file-last-modified-time]}
  {:blog/file-last-modified-time
   (file-last-modified-date file-path)})

(pco/defresolver blogs [{:blog/keys [blog-files]}]
  {::pco/input [{:blog/blog-files
                 blog-eql}]}
  {:blog/blogs blog-files})


(pco/defresolver blog-by-id [{:blog/keys [blogs id]}]
  {::pco/output
   blog-eql}
  (first (filter (fn [blog]
                   (= id (:blog/id blog)))
                 blogs)))


(pco/defresolver query-all-blogs [{:blog/keys [blog-files]}]
  {::pco/input [{:blog/blog-files
                 blog-short-eql}]}
  {:blog-query/all-blogs
   blog-files})

(pco/defresolver query-blogs [{:blog-query/keys [all-blogs]}]
  {:blog-query/blogs
   (into [] (filter (comp not special-page?)
                    all-blogs))})

(pco/defresolver query-blog-by-id [{:blog-query/keys [all-blogs id]}]
  {::pco/output blog-short-eql}
  (first (filter (fn [blog]
                   (= id (:blog/id blog)))
                 all-blogs)))

(pco/defresolver query-blog-ids [{:blog-query/keys [all-blogs]}]
  {:blog-query/ids (map :blog/id all-blogs)})

(def env
  (-> (pci/register [blog-files
                     blogs
                     blog-from-path
                     file-last-modified-time
                     blog-by-id

                     query-all-blogs
                     query-blogs
                     query-blog-ids
                     query-blog-by-id])
      (assoc ::blog-from-file-cache blog-from-file-cache)))
