(ns app.server.blog-gen
  (:require [clojure.java.shell :refer [sh]]
            [cheshire.core :refer [parse-string]]
            [app.common.code-highlight :as code-highlight]
            [clojure.zip :as zip]
            [hickory.core :as hk]
            [hickory.render :as hr]
            [hickory.select :as hs]
            [hickory.zip :as hz]
            [clojure.string :as str]
            [app.server.utils :as su]))

(defn org->html-process [html-string]
  (->> html-string
       hk/parse
       hk/as-hickory
       (hs/select (hs/tag :h1))
       su/extract-string))

(defn get-code-code [hickory-tree]
  (let [class (as-> hickory-tree %
                (:attrs %)
                (:class %)
                (str/split % #" ")
                (filter (fn [class]
                          (str/starts-with? class "src-"))
                        %)
                (first %))]
    (and class (subs class 4))))

(defn wrap-in-pre-code [hickory-tree lang]
  {:type :element,
   :attrs {:class "cr-highlighted"},
   :tag :pre,
   :content
   [{:type :element,
     :attrs {:class (str "lang-" lang)},
     :tag :code,
     :content [hickory-tree]}]})

(defn html-code-highlight [hickory-tree]
  (let [select-fn (hs/and (hs/tag :pre)
                          (hs/not (hs/class :cr-highlighted)))]
    (if-let [loc (hs/select-next-loc select-fn
                                     (hz/hickory-zip hickory-tree))]
      (loop [loc loc]
        (let [lang (get-code-code (first loc))
              result (zip/replace loc
                                  (-> (code-highlight/highlight
                                       (-> loc
                                           first
                                           :content
                                           first)
                                       lang)
                                      hk/parse
                                      hk/as-hickory
                                      (wrap-in-pre-code lang)))]
          (if-let [loc (hs/select-next-loc
                        select-fn
                        result)]
            (recur loc)
            (zip/root result))))
      hickory-tree)))

(defn wrap-in-self-reference [element]
  {:type :element,
   :attrs {:href (str "#" (-> element
                              :attrs
                              :id))}
   :tag :a,
   :content
   [(update-in element [:attrs :class] (fn [classes] (str "cr-self-reference " classes)))]})

(defn html-header-self-reference [hickory-tree]
  (let [select-fn (hs/and (apply hs/or (map hs/tag [:h1 :h2 :h3 :h4 :h5]))
                          (hs/not (hs/class :cr-self-reference)))]
    (if-let [loc (hs/select-next-loc select-fn
                                     (hz/hickory-zip hickory-tree))]
      (loop [loc loc]
        (let [result (zip/replace loc (wrap-in-self-reference (first loc)))]
          (if-let [new-loc (hs/select-next-loc select-fn
                                               result)]
	    (recur new-loc)
            (zip/root result))))
      hickory-tree)))


(defn org-file->html [path]
  (let [{:keys [content title category tags email language author] :as result}
        (-> (sh "emacs" "--batch" "-q" "-l" "init.el"
                "--eval" (str "(org->html-to-stdout \"" path "\")")
                :dir (System/getProperty "user.dir"))
            :out
            (parse-string true))

        hickory-tree (->> content
                          hk/parse
                          hk/as-hickory
                          html-code-highlight
                          html-header-self-reference)]
    {:id (str/lower-case (str/replace title #"[^\p{IsAlphabetic}]" "-"))
     :content (hr/hickory-to-html hickory-tree)
     :title title
     :category category
     :tags (if tags (str/split tags #" ") [])
     :email email
     :language language
     :author author}))

;; (def ^:dynamic *demo* (org-file->html "./blogs/demo.org"))
