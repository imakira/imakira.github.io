(ns app.components
  (:require
   [clojure.core.async :as a]
   [uix.core :as uix :refer
    [defui use-state use-effect use-context $]]
   [app.router :as router]
   [app.utils :refer [use-asset] :as utils]
   [reitit.core :as r]
   [stylefy.core :as stylefy :refer [use-style]]
   #?@(:cljs [[uix.core :refer [create-context]]])))

(defui btn-wrapper [{:keys [children class bg-class]}]
  ($ :div.relative.group  {:class class}
     ($ :div.absolute.w-0.h-full.group-hover:bg-sky-200.group-hover:bg-opacity-70.group-hover:w-full.group-hover:h-full.transition-all.duration-300 {:class bg-class})
     ($ :div.relative.w-full.h-full
        children)))
