(ns net.coruscation.cerulean.build
  (:require
   [babashka.process :as process]
   [net.coruscation.cerulean.orgx.orgx :as orgx]
   [net.coruscation.cerulean.server.assets :as assets :refer [fetch-all-blogs]]
   [shadow.build.targets.esm :as esm]))

(defn build-css-hook {:shadow.build/stage :compile-prepare}
  [build-state & _]
  (process/shell "npm run styles-release")
  build-state)

(defn orgx-hook {:shadow.build/stage :configure}
  [build-state & _]
  (let [modules (merge (get-in build-state [:shadow.build/config :modules])
                       #_{:demonstration
                          {:entries
                           ['orgx.demonstration]
                           :depends-on #{:default}
                           :exports {'component
                                     'orgx.demonstration/component}}}
                       (->> (fetch-all-blogs)
                            (map (fn [blog]
                                   (when (:blog/orgx blog)
                                     (orgx/generate-cljc-from-blog blog)
                                     [(keyword (str "orgx." (:blog/id blog)))
                                      {:entries
                                       [(symbol (str "orgx." (:blog/id blog)))]
                                       :depends-on #{:default}
                                       :exports {(symbol "component")
                                                 (symbol (str "orgx." (:blog/id blog))
                                                         "component")}}])))
                            (remove nil?)
                            (into {})))]
    (esm/configure-modules (-> build-state
                               (assoc-in [:shadow.build/config
                                          :modules]
                                         modules)))))
