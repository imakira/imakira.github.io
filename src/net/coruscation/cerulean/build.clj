(ns net.coruscation.cerulean.build
  (:require
   [babashka.process :as process]
   [clojure.core.async :as a]
   [clojure.tools.logging :as logging]
   [net.coruscation.cerulean.config :as config]
   [net.coruscation.cerulean.orgx.orgx :as orgx]
   [net.coruscation.cerulean.orgx.orgx-commons :as orgx-commons]
   [net.coruscation.cerulean.server.assets :as assets :refer [fetch-all
                                                              fetch-all-blogs]]
   [net.coruscation.cerulean.server.watch-service :as watch-service]
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
                                     (let [blog-ns (str "orgx." (:blog/id blog))
                                           qualified-component-sym (symbol blog-ns
                                                                           orgx-commons/orgx-default-component-name)]
                                       [(keyword blog-ns)
                                        {:entries
                                         [(symbol blog-ns)]
                                         :depends-on #{:default :shared}
                                         :exports {(symbol "default")
                                                   qualified-component-sym
                                                   orgx-commons/orgx-default-component-name
                                                   qualified-component-sym}}]))))
                            (remove nil?)
                            (into {})))]
    (esm/configure-modules (-> build-state
                               (assoc-in [:shadow.build/config
                                          :modules]
                                         modules)))))
