(ns app.server.check
  (:require [clojure.string :as str]))


;; credit: https://gist.github.com/sogaiu/0c542ee238858adfe33f1200e3a86634
(defn which
  [bin-name]
  (let [paths (str/split (or (System/getenv "PATH") "")
                         (re-pattern (System/getProperty "path.separator")))
        ;; for windows
        pathexts (str/split (or (System/getenv "PATHEXT") "")
                            (re-pattern (System/getProperty "path.separator")))]
    ;; adapted work by taylorwood
    (first
     (for [path (distinct paths)
           pathext pathexts
           :let [exe-file (clojure.java.io/file path (str bin-name pathext))]
           :when (.exists exe-file)]
       (.getAbsolutePath exe-file)))))

(defn environment-check []
  (assert (which "emacs") "emacs is not installed in this system.")
  (assert (which "git") "git is not installed in this system."))
