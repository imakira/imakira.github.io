(ns net.coruscation.cerulean.build
  (:require
   [babashka.process :as process]
   [net.coruscation.cerulean.server.assets :as assets]
   [net.coruscation.cerulean.orgx.orgx :as orgx]
   [shadow.build.targets.esm :as esm]))

(defn build-css-hook {:shadow.build/stage :compile-prepare}
  [build-state & _]
  (process/shell "npm run styles-release")
  build-state)

(defn orgx-hook {:shadow.build/stage :configure}
  [build-state & _]
  (assets/refresh-blogs-once!)
  (let [modules (merge (get-in build-state [:shadow.build/config :modules])
                       #_{:demonstration
                          {:entries
                           ['orgx.demonstration]
                           :depends-on #{:default}
                           :exports {'component
                                     'orgx.demonstration/component}}}
                       (->> @assets/*blogs*
                            (map (fn [blog]
                                   (when (:orgx blog)
                                     (orgx/generate-cljc-from-blog blog)
                                     [(keyword (str "orgx." (:id blog)))
                                      {:entries
                                       [(symbol (str "orgx." (:id blog)))]
                                       :depends-on #{:default}
                                       :exports {(symbol "component")
                                                 (symbol (str "orgx." (:id blog))
                                                         "component")}}])))
                            (remove nil?)
                            (into {})))]
    (esm/configure-modules (-> build-state
                               (assoc-in [:shadow.build/config
                                          :modules]
                                         modules)))))
