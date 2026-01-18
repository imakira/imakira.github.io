(ns net.coruscation.cerulean.server.static-generator
  (:require
   [babashka.fs :as fs]
   [cheshire.core :as json]
   [clojure.java.io :as io]
   [net.coruscation.cerulean.check :as check]
   [net.coruscation.cerulean.common.pages :as pages]
   [net.coruscation.cerulean.config :as config]
   [net.coruscation.cerulean.orgx.orgx :as orgx]
   [net.coruscation.cerulean.render.render :as render]
   [net.coruscation.cerulean.server.assets :as assets :refer [fetch-all]]
   [net.coruscation.cerulean.server.slash-pages :as slash-pages]
   [net.coruscation.cerulean.server.tools :as tools]
   [net.coruscation.cerulean.server.user-config :refer [get-user-config]]
   [reitit.core :as r]
   [shadow.cljs.devtools.api :as shadow]))

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
                  slash-pages/resource-route
                  ["" {:handler render-wrapper} pages/routes]]))



(defn build [& _]
  (check/environment-check)

  (fs/create-dirs config/*output*)
  (fs/copy-tree config/*blog-dir*
                (str config/*output* "/" "blogs")
                {:replace-existing true})
  (fs/copy-tree (str (System/getProperty "user.dir")
                     "/public")
                config/*output*
                {:replace-existing true})
  (when (get-user-config :cname)
    (spit (str config/*output* "/CNAME")
          (get-user-config :cname)))
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

(defn generate-all-orgx! []
  (doseq [blog (fetch-all)]
    (when (:blog/orgx blog)
      (orgx/generate-cljc-from-blog blog))))

(defn build-full [& _]
  (generate-all-orgx!)
  (tools/release-css!)
  (doseq [f (rest (file-seq (io/file config/*output*)))]
    (.delete f))
  (fs/delete-tree  "./public/js/cljs-runtime")
  (shadow/release :app)
  (build))
