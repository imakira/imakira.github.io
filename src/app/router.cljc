(ns app.router
  (:require
   [uix.core :as uix :refer
    [defui use-state use-effect use-memo $]]
   [reitit.core :as r]
   [app.utils :as utils]
   #?@(:cljs [[reitit.frontend.easy :as rfe]
              [app.utils :refer [obj->clj recur-obj->clj]]])))


(utils/defcontext *router* nil)

(defui router [{:keys [routes initial-route children]}]
  (let [reitit-router (use-memo (fn [& args]
                                  (r/router routes))
                                [routes])

        [route set-route!] (use-state #?(:clj (or initial-route "/index.html")
                                         :cljs (or initial-route js/location.pathname)))]
    (use-effect
     (fn []
       #?(:cljs (let [history-listener (fn [_]
                                         (set-route! js/location.pathname))]
                  (js/addEventListener "popstate"
                                       history-listener)
                  (fn []
                    (js/removeEventListener "popstate"
                                            history-listener)))))
     [])
    (utils/context-binding [*router* {:route route
                                      :set-route! set-route!
                                      :reitit-router reitit-router}]
      ($ :<>
         children))))

(defui router-outlet []
  (let [{:keys [route set-route! reitit-router]} (utils/use-context *router*)

        {{:keys [component]} :data :as routing-data}
        (r/match-by-path reitit-router route)]
    ($ component {:routing-data routing-data})))

(defn navigate-to! [href]
  #?(:clj nil
     :cljs (do (js/history.pushState js/undefined js/undefined href)
               (js/dispatchEvent (js/PopStateEvent. "popstate", js/undefined)))))

(defui link [{:keys [href children style class]}]
  (let [onclick (fn [e]
                  #?(:clj :default
                     :cljs
                     (do
                       (.preventDefault e)
                       (navigate-to! href))))]
    ($ :a {:on-click onclick :style style :href href :class class}
       children)))
