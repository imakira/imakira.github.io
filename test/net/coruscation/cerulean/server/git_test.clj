(ns net.coruscation.cerulean.server.git-test
  (:require
   [babashka.process :as process]
   [cljc.java-time.format.date-time-formatter :as date-time-formatter]
   [cljc.java-time.temporal.chrono-unit :as chrono-unit]
   [cljc.java-time.zoned-date-time :as zoned-date-time]
   [clojure.test :refer [deftest is]]
   [clojure.tools.logging :as logging]
   [net.coruscation.cerulean.server.git :as git]
   [net.coruscation.cerulean.server.utils :refer [path-join]])
  (:import
   [java.nio.file Files]))

(deftest file-first-commit-date-test
  (let [dir (Files/createTempDirectory "cr-test" (into-array java.nio.file.attribute.FileAttribute []))
        demo-file-name (path-join dir "demo.txt")
        first-commit-time (zoned-date-time/truncated-to (zoned-date-time/minus-hours (zoned-date-time/now) 1)
                                                        chrono-unit/seconds)
        first-commit-time-str (zoned-date-time/format first-commit-time
                                                      date-time-formatter/iso-offset-date-time)
        second-commit-time (zoned-date-time/truncated-to (zoned-date-time/now)
                                                         chrono-unit/seconds)
        second-commit-time-str (zoned-date-time/format second-commit-time
                                                       date-time-formatter/iso-offset-date-time)]
    (print "hello")
    (process/shell {:dir (.toString dir)
                    :out (logging/log-stream :info 'git-test)
                    :err (logging/log-stream :info 'git-test)} "git" "init")
    (spit demo-file-name "hello")
    (process/shell {:dir (.toString dir)
                    :out (logging/log-stream :info 'git-test)
                    :err (logging/log-stream :info 'git-test)} "git" "add" "./")
    (process/shell {:dir (.toString dir)
                    :out (logging/log-stream :info 'git-test)
                    :err (logging/log-stream :info 'git-test)} "git" "commit" "--date" first-commit-time-str "-m" "demo")

    (spit demo-file-name "hello hello")
    (process/shell {:dir (.toString dir)
                    :out (logging/log-stream :info 'git-test)
                    :err (logging/log-stream :info 'git-test)} "git" "add" "./")
    (process/shell {:dir (.toString dir)
                    :out (logging/log-stream :info 'git-test)
                    :err (logging/log-stream :info 'git-test)} "git" "commit" "--date" second-commit-time-str "-m" "demo")
    (is (= first-commit-time-str
           (git/file-first-commit-date (.toString dir) demo-file-name)))
    (is (= second-commit-time-str
           (git/file-last-commit-date (.toString dir) demo-file-name)))))
