(ns net.coruscation.cerulean.cli-test
  (:require
   [babashka.fs :as fs]
   [clojure.java.io :as io]
   [clojure.test :refer [deftest is testing]]
   [net.coruscation.cerulean.cli :refer [init-workspace]]
   [net.coruscation.cerulean.config :refer [with-workspace]]
   [net.coruscation.cerulean.server.static-generator :refer [build-full]]
   [net.coruscation.cerulean.server.utils :refer [path-join]]
   [net.coruscation.cerulean.test-utils :refer [verify-build-results]]))

(defonce ^:dynamic *test-dir* (path-join (System/getProperty "user.dir")
                                         "test/resource"))


(deftest workspace-init-test
  (testing ""
    (let [workspace (path-join *test-dir* "init-test")]
      (with-workspace workspace
        (try (init-workspace)
             (is (.exists (io/file (path-join workspace "config.edn"))))
             (is (.exists (io/file (path-join workspace "blogs/demo.org"))))
             (finally
               (fs/delete-tree workspace)))))))

(deftest workspace-build-test
  (testing ""
    (let [workspace (path-join *test-dir* "basic-test")]
      (with-workspace workspace
	    (init-workspace)
        (let [cl (.getContextClassLoader (Thread/currentThread))]
          (.setContextClassLoader (Thread/currentThread) (clojure.lang.DynamicClassLoader. cl)))
        (try (build-full)
             (verify-build-results workspace)
             (finally
               (fs/delete-tree workspace)))))))
