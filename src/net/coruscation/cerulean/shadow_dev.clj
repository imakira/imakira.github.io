(ns net.coruscation.cerulean.shadow-dev
  (:require
   [net.coruscation.cerulean.orgx.orgx-commons :as orgx-commons]
   [net.coruscation.cerulean.server.assets :as assets :refer [fetch-all-blogs]]
   [net.coruscation.cerulean.server.server :refer [start-server!]]
   [net.coruscation.cerulean.server.tools :as tools]
   [shadow.build.targets.esm :as esm]
   [shadow.cljs.devtools.api :as shadow]
   [shadow.cljs.devtools.server :as server]))

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

(defn cljs-repl
  "Connects to a given build-id. Defaults to `:app`."
  ([]
   (cljs-repl :app))
  ([build-id]
   (start-server!)
   (tools/watch-css!)
   (server/start!)
   (shadow/watch build-id)
   (shadow/nrepl-select build-id)))
