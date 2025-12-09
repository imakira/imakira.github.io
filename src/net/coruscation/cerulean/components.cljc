(ns net.coruscation.cerulean.components
  (:require
   [uix.core :as uix :refer
    [$ defui]]
   ))

(defui btn-wrapper [{:keys [children class bg-class]}]
  ($ :div.relative.group  {:class class}
     ($ :div.absolute.w-0.h-full.group-hover:bg-sky-200.group-hover:bg-opacity-70.group-hover:w-full.group-hover:h-full.transition-all.duration-300 {:class bg-class})
     ($ :div.relative.w-full.h-full
        children)))
