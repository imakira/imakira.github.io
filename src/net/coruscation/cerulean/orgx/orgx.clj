(ns net.coruscation.cerulean.orgx.orgx
  (:require
   [clojure.edn :as edn]
   [clojure.string :as str]
   [clojure.zip :as zip]
   [hickory.core :refer [as-hiccup]]
   [net.coruscation.cerulean.orgx.orgx-commons :refer :all]
   [uix.dev :refer [from-hiccup]])
  (:import
   [java.nio.file Path]
   [org.apache.commons.text StringEscapeUtils]))

(defn unescape-contents [hiccup]
  (loop [zip (zip/vector-zip hiccup)]
    (if (zip/end? zip)
      (zip/node zip)
      (recur (zip/next
              (zip/replace zip
                           (if (string? (zip/node zip))
                             (StringEscapeUtils/unescapeHtml4 (zip/node zip))
                             (zip/node zip))))))))

(defn unwrap-clj-code [uix-sexp]
  (loop [loc (zip/seq-zip uix-sexp)]
    (if (zip/end? loc)
      (zip/node loc)
      (let [node (zip/node loc)]
        (if
            (and (seq? node)
                 (= (first node)
                    '$)
                 (= (second node)
                    :pre)
                 (= (:class (nth node 2))
                    "uix"))
          (recur (zip/next (zip/replace loc
                                        (edn/read-string (last node)))))
          (recur (zip/next loc)))))))

(defn remove-extra-newline [hiccup]
  (loop [loc (zip/vector-zip hiccup)]
    (if (zip/end? loc)
      (zip/node loc)
      (recur (zip/next
              (if (and (string? (zip/node loc))
                       (= (str/trim-newline (zip/node loc))
                          ""))
                (zip/remove loc)
                loc))))))

(defn from-html [html]
  (->> (hickory.core/parse-fragment html)
       (map as-hiccup)
       (into [])
       remove-extra-newline
       (map unescape-contents)
       (map from-hiccup)
       (map unwrap-clj-code)))

(defn blog->cljc [{:keys [id content orgx-require]}]
  (->> (concat
        `((~'ns ~(symbol (str orgx-base-ns "." id))
           (:require [uix.core :as ~'uix :refer
                      [~'defui ~'use-state ~'use-effect ~'use-context ~'$]]
                     ~@orgx-require)))
        `((~'defui ~(symbol orgx-default-component-name) []
           (~'$ :<> ~@(from-html content)))))
       (str/join "\n")))

(defn generate-cljc-from-blog [{:keys [id] :as blog}]
  (spit (.toString (Path/of orgx-dest-dir
                            (into-array String
                                        [(str (str/replace id "-" "_")
                                              ".cljc")])))
        (blog->cljc blog)))
