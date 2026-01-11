(ns net.coruscation.cerulean.server.blogs
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as sh]
   [clojure.string :as str]
   [net.coruscation.cerulean.server.user-config :refer [get-user-config]])
  (:import
   [com.google.common.io Files]
   [java.time Instant ZoneId ZonedDateTime]
   [java.time.format DateTimeFormatter]
   [java.time.temporal ChronoUnit]))

;;TODO
(defn special-page? [blog]
  (some (fn [name]
          (= name (Files/getNameWithoutExtension
                   (or (:file-path blog)
                       (:id blog)
                       (:blog/file-path blog) (:blog/id blog)))))
        (get-user-config :special-pages)))

(defn assert-file-exist [path]
  (assert (.exists (io/file path)) (str "File " path " doesn't exist"))
  (assert (.isFile (io/file path)) (str "Path " path " is a directory")))

(defn file-first-commit-date [path]
  (assert-file-exist path)
  (if-let [date-str (some->
                     (sh/sh "/usr/bin/env" "git" "log" "--reverse" "--format=%aI" path)
                     :out
                     (str/split #"\n")
                     first
                     str/trim
                     not-empty)]
    date-str
    nil))

(defn file-last-commit-date [path]
  (assert-file-exist path)
  (if-let [date-str (some->
                     (sh/sh "/usr/bin/env" "git" "log" "--format=%aI" path)
                     :out
                     (str/split #"\n")
                     first
                     str/trim
                     not-empty)]
    date-str
    nil))

(defn file-last-modified-date [path]
  (assert-file-exist path)
  (-> (Instant/ofEpochMilli
       (.lastModified (io/file path)))
      (ZonedDateTime/ofInstant (ZoneId/systemDefault))
      (.truncatedTo ChronoUnit/SECONDS)
      (.format DateTimeFormatter/ISO_OFFSET_DATE_TIME)))
