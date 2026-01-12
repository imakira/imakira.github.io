(ns net.coruscation.cerulean.cli-test
  (:require
   [babashka.fs :as fs]
   [clojure.java.io :as io]
   [clojure.test :refer [deftest is testing]]
   [net.coruscation.cerulean.cli :refer [init-workspace]]
   [net.coruscation.cerulean.config :refer [*blog-dir* join-workspace-path
                                            with-workspace]]
   [net.coruscation.cerulean.server.static-generator :refer [build-full]]
   [net.coruscation.cerulean.server.utils :refer [path-join]]))

(defonce ^:dynamic *test-dir* (path-join (System/getProperty "user.dir")
                                         "test/resource"))


(deftest workspace-init-test
  (testing
      (let [workspace (path-join *test-dir* "init-test")]
        (with-workspace workspace
          (try (init-workspace)
               (is (.exists (io/file (path-join workspace "config.edn"))))
               (is (.exists (io/file (path-join workspace "blogs/demo.org"))))
               (finally
                 (fs/delete-tree workspace)))))))

(deftest workspace-build-test
  (testing
      (let [workspace (path-join *test-dir* "basic-test")]
        (with-workspace workspace
	      (init-workspace)
          (try (build-full)
               (is (.exists (io/file (path-join workspace
                                                "docs"
                                                "index.html"))))
               (is (= "example.com" (slurp (io/file (path-join workspace
                                                               "docs"
                                                               "CNAME")))))
               (finally
                 (fs/delete-tree workspace)))))))
