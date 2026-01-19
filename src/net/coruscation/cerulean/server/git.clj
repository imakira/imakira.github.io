(ns net.coruscation.cerulean.server.git
  (:require
   [babashka.process :as process]
   [clojure.java.shell :as sh]
   [clojure.string :as str]
   [clojure.tools.logging :as logging]
   [net.coruscation.cerulean.server.utils :refer [assert-file-exist]]))


(defn file-first-commit-date [dir path]
  (assert-file-exist path)
  (if-let [date-str (some->
                     (process/sh {:dir dir
                                  :err (logging/log-stream :debug (ns-name (:ns (meta #'file-first-commit-date))))}
                                 "/usr/bin/env" "git" "log" "--reverse" "--format=%aI" path)
                     :out
                     (str/split #"\n")
                     first
                     str/trim
                     not-empty)]
    date-str
    nil))

(defn file-last-commit-date [dir path]
  (assert-file-exist path)
  (if-let [date-str (some->
                     (process/sh {:dir dir
                                  :err (logging/log-stream :debug (ns-name (:ns (meta #'file-last-commit-date))))}
                                 "/usr/bin/env" "git" "log" "--format=%aI" path)
                     :out
                     (str/split #"\n")
                     first
                     str/trim
                     not-empty)]
    date-str
    nil))


(defn git-init [dir]
  (process/sh {:dir dir
               :out (logging/log-stream :debug (ns-name (:ns (meta #'file-last-commit-date))))
               :err (logging/log-stream :debug (ns-name (:ns (meta #'file-last-commit-date))))}
              "/usr/bin/env" "git" "init"))

(defn git-add [dir & paths]
  (apply process/sh {:dir dir
                     :out (logging/log-stream :debug (ns-name (:ns (meta #'file-last-commit-date))))
                     :err (logging/log-stream :debug (ns-name (:ns (meta #'file-last-commit-date))))}
         "/usr/bin/env" "git" "add" paths))

(defn git-commit [dir message]
  (apply process/sh {:dir dir
                     :out (logging/log-stream :debug (ns-name (:ns (meta #'file-last-commit-date))))
                     :err (logging/log-stream :debug (ns-name (:ns (meta #'file-last-commit-date))))}
         "/usr/bin/env" "git" "commit" "-m" message))
