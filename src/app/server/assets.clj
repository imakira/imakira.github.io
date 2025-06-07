(ns app.server.assets
  (:require [malli.generator :as mg]
            [clojure.java.shell :refer [sh]]
            [clojure.string :as str]
            [app.models :as models]
            [app.server.blog-gen :as blog-gen]
            [ring.util.http-response :as resp]
            [app.config :as config]
            [taoensso.timbre :as timbre]
            [app.common.constants :as constants])
  (:import (com.google.common.io Files)
           (java.time Instant ZonedDateTime ZoneId)
           (java.time.temporal ChronoUnit)
           (java.time.format DateTimeFormatter)))

(def ^:dynamic *blogs* (atom []))

(defn- special-page? [blog]
  (some (fn [name]
          (= name (Files/getNameWithoutExtension
                   (or (:file-path blog) (:id blog)))))
        constants/special-pages))

(defn assert-file-exist [path]
  (assert (.exists (clojure.java.io/file path)) (str "File " path " doesn't exist"))
  (assert (.isFile (clojure.java.io/file path)) (str "Path " path " is a directory")))

(defn file-first-commit-date [path]
  (assert-file-exist path)
  (if-let [date-str (some->
                     (sh "/usr/bin/env" "git" "log" "--reverse" "--format=%aI" path)
                     :out
                     (str/split #"\n")
                     first
                     str/trim)]
    date-str 
    nil))

(defn file-last-commit-date [path]
  (assert-file-exist path)
  (if-let [date-str (some->
                     (sh "/usr/bin/env" "git" "log" "--format=%aI" path)
                     :out
                     (str/split #"\n")
                     first
                     str/trim)]
    date-str
    nil))

(defn file-last-modified-date [path]
  (assert-file-exist path)
  (-> (Instant/ofEpochMilli (.lastModified (clojure.java.io/file path)))
      (ZonedDateTime/ofInstant (ZoneId/systemDefault))
      (.truncatedTo ChronoUnit/SECONDS)
      (.format DateTimeFormatter/ISO_OFFSET_DATE_TIME)))

(defn- get-blogs-files []
  (let [blog-dir (clojure.java.io/file config/*blog-dir*)]
    (when-not (.isDirectory blog-dir)
      (throw (ex-info "Blog directory doesn't exist"
                      {:id :blog-dir-nonexistent})))
    (let [files (->> (.listFiles blog-dir)
                     (filter (fn [file]
                               (and (.isFile file)
                                    (re-matches #".*\.org$" (.getAbsolutePath file)))))
                     (map (fn [file] (.getAbsolutePath file))))]
      (into [] files))))

(defn- get-blog-from-path [path]
  (let [temp (blog-gen/org-file->html path)]
    (as-> temp blog
      (merge blog {:file-path path
                   :id (str (:id temp) ".html")
                   :language (or (:language temp)
                                 "en_US")
                   :published-date (or (:published-date
                                        temp)
                                       (file-first-commit-date path)
                                       (file-last-modified-date path))
                   :modified-date (or (:modified-date temp)
                                      (file-last-modified-date path))})
      (merge blog {:id (if (special-page? blog)
                         (str (Files/getNameWithoutExtension path)
                              ".html")
                         (:id blog))
                   :show-toc? (not (special-page? blog))}))))


(defn refresh-blogs []
  (->> (get-blogs-files)
       (map get-blog-from-path)
       (into [])
       (reset! *blogs*)))

(defn fetch-blog [{{id :id} :path-params}]
  (first (filter #(= id (:id %))
                 @*blogs*)))

(defn fetch-all-blogs [& rest]
  (into [] (map #(dissoc % :content) @*blogs*)))

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
       sort
       dedupe))

(defn fetch-blog-by-category [{{category :category} :path-params}]
  (into [] (filter (fn [item]
                     (= category
                        (:category item)))
                   (fetch-blogs))))

(def assets-route
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
