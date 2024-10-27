(ns app.server.assets
  (:require [malli.generator :as mg]
            [clojure.java.shell :refer [sh]]
            [clojure.string :as str]
            [app.models :as models]
            [app.server.blog-gen :as blog-gen]
            [ring.util.http-response :as resp]
            [app.config :as config]
            [taoensso.timbre :as timbre]))

(def ^:dynamic *blogs* (atom []))

(defn assert-file-exist [path]
  (assert (.exists (clojure.java.io/file path)) (str "File " path " doesn't exist"))
  (assert (.isFile (clojure.java.io/file path)) (str "Path " path " is a directory")))

(defn file-first-commit-date [path]
  (assert-file-exist path)
  (if-let [date-str (some->
                     (sh "/usr/bin/env" "git" "log" "--reverse" "--format=%ct" path)
                     :out
                     (str/split #"\n")
                     first
                     str/trim)]
    (java.lang.Long/parseLong date-str)
    nil))

(defn file-last-commit-date [path]
  (assert-file-exist path)
  (if-let [date-str (some->
                     (sh "/usr/bin/env" "git" "log" "--format=%ct" path)
                     :out
                     (str/split #"\n")
                     first
                     str/trim)]
    (java.lang.Long/parseLong date-str)
    nil))

(defn file-last-modified-date [path]
  (assert-file-exist path)
  (quot (.lastModified (clojure.java.io/file path))
        1000))

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
    (merge temp
           {:language (or (:language temp)
                          "en_US")
            :published-date (or (:published-date
                                 temp)
                                (file-first-commit-date path)
                                (file-last-modified-date path))
            :modified-date (or (:modified-date temp)
                               (file-last-modified-date path))})))

(defn refresh-blogs []
  (->> (get-blogs-files)
       (map get-blog-from-path)
       (reset! *blogs*)))

(defn fetch-blog [{{id :id} :path-params}]
  (first (filter #(= id (:id %))
                 @*blogs*)))

(defn fetch-blogs [_]
  (map #(dissoc % :body) @*blogs*))

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
                   ;; TODO, make depends/:route only check if is modified
                   ;; let gen-params-list do all the heavy lifting
                   ;; and give it a better name
                   :gen-params-list
                   extract-ids}}]])

