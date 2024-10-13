(ns app.server.blog-gen
  (:require [clojure.java.shell :refer [sh]]
            [cheshire.core :refer [parse-string]]))

(defn org-file->html [path]
  (-> (sh "emacs" "--batch" "-q" "-l" "init.el"
          "--eval" (str "(org->html-to-stdout \"" path "\")")
          :dir (System/getProperty "user.dir"))
      :out
      (parse-string true)))
(org-file->html "./blogs/demo.org")
