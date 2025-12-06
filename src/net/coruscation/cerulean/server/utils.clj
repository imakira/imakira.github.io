(ns net.coruscation.cerulean.server.utils
  (:require [clojure.string :as str]))

(defn extract-string [hickory-elements & {:keys [spacer]
                                          :or {spacer " "}}]
  (letfn [(inner [hickory-elements]
            (->> (cond
                   (string? hickory-elements) hickory-elements
                   (map? hickory-elements) (inner (:content hickory-elements))
                   true    (map inner hickory-elements))))]
    (->> (inner hickory-elements)
         (conj [])
         flatten
         (remove #(= "" (str/trim %)))
         (str/join spacer)
         str/trim)))


(defn take-until
  [pred coll]
  (lazy-seq
   (when-let [[f & r] (seq coll)]
     (if (pred f)
       (cons f (take-until pred r))
       [f]))))
