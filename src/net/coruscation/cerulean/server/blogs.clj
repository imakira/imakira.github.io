(ns net.coruscation.cerulean.server.blogs
  (:require
   [clojure.java.io :as io]
   [net.coruscation.cerulean.server.user-config :refer [get-user-config]]
   [net.coruscation.cerulean.server.utils :refer [assert-file-exist]])
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


(defn file-last-modified-date [path]
  (assert-file-exist path)
  (-> (Instant/ofEpochMilli
       (.lastModified (io/file path)))
      (ZonedDateTime/ofInstant (ZoneId/systemDefault))
      (.truncatedTo ChronoUnit/SECONDS)
      (.format DateTimeFormatter/ISO_OFFSET_DATE_TIME)))
