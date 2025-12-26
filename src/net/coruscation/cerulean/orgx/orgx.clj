(ns net.coruscation.cerulean.orgx.orgx
  (:require
   [clojure.edn :as edn]
   [clojure.string :as str]
   [clojure.zip :as zip]
   [com.wsscode.pathom3.interface.eql :refer [process-one]]
   [hickory.core :refer [as-hiccup]]
   [net.coruscation.cerulean.orgx.orgx-commons :refer :all]
   [net.coruscation.cerulean.server.resolver :refer [env]]
   [uix.dev :refer [from-hiccup]])
  (:import
   [java.nio.file Path]
   [org.apache.commons.text StringEscapeUtils]))

(deftype CljCode [^String s]
  Object
  (^String toString [_] s)
  (^boolean equals [_ other]
   (and (instance? CljCode other)
        (= s  (.toString other)))))

(defmethod print-method CljCode [this writer]
  (.write writer (.toString this)))

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
                 (or (= (second node)
                        :pre)
                     (= (second node)
                        :code))
                 (= (:class (nth node 2))
                    "orgx"))
          (recur
           (zip/next (zip/replace loc
                                  (CljCode. (str/trim (last node))))))
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
       (mapv unwrap-clj-code)))

(defn blog->cljc [{:blog/keys [id content orgx-require] :as blog-asset}]
  (->> (concat
        `((~'ns ~(symbol (str orgx-base-ns "." id))
           (:require [uix.core :as ~'uix :refer
                      [~'defui ~'use-state ~'use-effect ~'use-context ~'$]]
                     ~@orgx-require)))
        `((~'defui ~'_comp [~'props]
           (~'$ :<> ~@(from-html content))))
        `((~'defui ~(symbol orgx-default-component-name) [~'props]
           (~'$ ~'_comp (~'merge (~'quote ~blog-asset)
                         ~'props)))))
       (map str)
       (str/join "\n")))

(defn generate-cljc-from-blog [{:blog/keys [id] :as blog}]
  (binding [*print-namespace-maps* false]
    (spit (.toString (Path/of orgx-dest-dir
                              (into-array String
                                          [(str (str/replace id "-" "_")
                                                ".cljc")])))
          (blog->cljc blog))))
