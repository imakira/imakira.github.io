(ns app.server.static-generator
  (:require
   [app.common.pages :as pages]
   [app.config :as config]
   [app.server.assets :as assets]
   [app.server.check :as check]
   [app.server.render :as render]
   [babashka.fs :as fs]
   [cheshire.core :as json]
   [clojure.java.io :as io]
   [reitit.core :as r]
   [shadow.cljs.devtools.api :as shadow]
   [app.user-config :as user-config]))

(defn- derive-routes [routes]
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
                            params-list-fn :params-list-fn}
                :depends} arguments]
           (if (nil? depend-route)
             (conj res (assoc-in (first routes)
                                 [1 :match]
                                 (r/match-by-path router (first (first routes)))))
             (do
               (assert name (str "This route  " path " must have a name."))
               (let [params-list (params-list-fn)]
                 (concat res
                         (for [params params-list]
                           (let [match (r/match-by-name router
                                                        name
                                                        params)]
                             [(:path match)
                              (-> arguments
                                  (dissoc :depends)
                                  (assoc :match match))]))))))))))))

(defn- render-wrapper [{path :path :as match}]
  (render/render path))

(defn- get-all-routes []
  (derive-routes [""
                  assets/json-assets-route
                  assets/resource-route
                  ["" {:handler render-wrapper} pages/routes]]))



(defn build [& _]
  (check/environment-check)

  (fs/create-dirs config/*output*)
  (assets/refresh-blogs)
  (fs/copy-tree config/*blog-dir*
                (str config/*output* "/" "blogs")
                {:replace-existing true})
  (fs/copy-tree (str (System/getProperty "user.dir")
                     "/public")
                config/*output*
                {:replace-existing true})
  (when user-config/cname
    (spit (str config/*output* "/CNAME")
          user-config/cname))
  (doseq [[path {handler :handler match :match}] (get-all-routes)]
    (when path
      (let [file (io/file (str config/*output*  (if (= path "/")
                                                  "/index.html"
                                                  path)))]
        (.mkdirs (.getParentFile file))
        (with-open [file-writer (io/writer file)]
          (.write file-writer (let [result (handler match)]
                                (if (string? result)
                                  result
                                  (json/generate-string result)))))))))

(defn build-full [& _]
  (fs/delete-tree config/*output*)
  (fs/delete-tree "./public/js/cljs-runtime")
  (shadow/release :app)
  (build))
