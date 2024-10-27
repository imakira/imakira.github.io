(ns app.models
  (:require [malli.core :as m]
            [malli.generator :as mg]))

(def BlogPreview
  [:map
   [:id :string]
   [:author :string]
   [:title :string]
   [:subtitle :string]
   [:published-date :int]
   [:modified-date :int]
   [:tags [:vector :string]]
   [:category :string]])

(def Blog
  (->> [[:content :string]
        [:email :string]
        [:language :string]]
       (concat BlogPreview)
       (into [])))
