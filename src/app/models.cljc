(ns app.models
  (:require [malli.core :as m]
            [malli.generator :as mg]))

(def BlogPreview
  [:map
   [:id :string]
   [:author :string]
   [:title :string]
   [:subtitle :string]
   [:submmit-date :string]
   [:modified-date :string]
   [:tags [:vector :string]]
   [:category :string]])

(def Blog
  (->> [[:content :string]]
       (concat BlogPreview)
       (into [])))
