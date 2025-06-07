(ns app.router
  (:require
   [uix.core :as uix :refer
    [defui use-state use-ref use-effect use-memo $]]
   [reitit.core :as r]
   [app.utils :as utils :refer [use-context]]
   #?@(:cljs [[reitit.frontend.easy :as rfe]
              [reitit.frontend.controllers :as rfc]])))


(utils/defcontext *router* nil)

(defui router [{:keys [routes initial-route children]}]
  (let [reitit-router (use-memo (fn [& args]
                                  (r/router routes))
                                [routes])

        [route set-route!] (use-state #?(:clj (or initial-route "/index.html")
                                         :cljs (or initial-route js/location.pathname)))
        [routing-state set-routing-state!] (use-state {})
        old-routers (use-ref nil)

        {{:keys [component ]} :data :as routing-data}
        (use-memo (fn []
                    (r/match-by-path reitit-router route))
                  [reitit-router route])]
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

    (use-effect (fn []
                  #?(:cljs
                     (reset! old-routers
                             (rfc/apply-controllers
                              @old-routers
                              (update-in routing-data [:data]
                                         (fn [data]
                                           (merge data {:routing-state routing-state
                                                        :set-routing-state! set-routing-state!})))))))
                [routing-data routing-state ])

    (utils/context-binding
        [*router* {:route route
                   :set-route! set-route!
                   :reitit-router reitit-router
                   :routing-data routing-data
                   :component component
                   :routing-state routing-state
                   :set-routing-state! set-routing-state!}]
      ($ :<>
         children))))


(defui router-outlet [{:keys [hook]}]
  (let [{:keys [component routing-data] :as router-data} (utils/use-context *router*)]
    (when hook
      (hook))
    ($ component (merge-with into
                             (-> routing-data :data :extra-data)
                             routing-data))))

(defn navigate-to! [href]
  #?(:clj (throw (UnsupportedOperationException. "Operation navigate-to! isn't supported in CLJ."))
     :cljs (do
             (if (re-matches #"^https?://.*$" href)
               (set! (.. js/window -location -href) 
                     href)
               (do (js/history.pushState js/undefined js/undefined href)
                   (js/dispatchEvent (js/PopStateEvent. "popstate", js/undefined)))))))

(defui link [{:keys [href children style class]}]
  (let [onclick (fn [e]
                  #?(:clj :default
                     :cljs
                     (do
                       (.preventDefault e)
                       (navigate-to! href))))]
    ($ :a {:on-click onclick :style style :href href :class class}
       children)))
