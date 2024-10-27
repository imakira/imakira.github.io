(ns app.server.tools
  (:require [reitit.core :as r]))

(defn derive-routes [routes]
  (let [router (r/router routes)
        routes (r/routes router)]
    (loop [routes routes
           res []]
      (if (empty? routes)
        (into [] res)
        (recur
         (rest routes)
         (let [[path arguments] (first routes)
               {name :name {depend-route :route
                            params-list-fn :gen-params-list} :depends} arguments]
           (if (nil? depend-route)
             (conj res (first routes))
             (let [params-list (params-list-fn
                                ((-> (r/match-by-name router depend-route)
                                     :data
                                     :handler)
                                 nil))]
               (concat res (map (fn [params]
                                  [(-> (r/match-by-name router
                                                        name
                                                        params)
                                       :path)
                                   (-> arguments
                                       (dissoc :route :params-list)
                                       (assoc :path-params params))])
                                params-list))))))))))
