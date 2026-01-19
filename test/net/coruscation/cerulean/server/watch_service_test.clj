(ns net.coruscation.cerulean.server.watch-service-test
  (:require
   [clojure.core.async :as a]
   [clojure.java.io :as io]
   [clojure.java.shell :as sh]
   [clojure.test :refer [deftest is testing]]
   [net.coruscation.cerulean.server.watch-service :as subject])
  (:import
   [java.nio.file Path]))

(def ^:dynamic *test-dir* "test/resource/watch_service_test")

(.mkdirs (io/file *test-dir*))

(deftest watch-test
  (testing "simple test"
    (dotimes [n 5]
      (let [simple-file (str *test-dir* "/demo")]
        (.delete (io/file simple-file))
        (let [result (subject/watch *test-dir*)
              [resp-chan cancel-chan] result]
          (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 100)
          (sh/sh "touch" simple-file)
          (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 100)
          (let [event (a/poll! resp-chan)]
            (is (= (:kind event)
                   :entry-create))
            (is (= (-> event :path  Path/.toString)
                   simple-file)))

          (a/>!! cancel-chan false)
          (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 100)
          (is (not (future-cancelled? (-> result
                                          meta
                                          :debug
                                          :worker))))

          (a/>!! cancel-chan true)
          (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 100)
          (is (true? (future-done? (-> result
                                       meta
                                       :debug
                                       :worker))))
          (is (true? (future-done? (-> result
                                       meta
                                       :debug
                                       :sentinel))))
          (is (true? @(-> result
                          meta
                          :debug
                          :stopped?))))))))

(deftest wach_service_example
  (testing ""
    (let [test-dir (str *test-dir* "/example")]
      (.mkdirs (io/file test-dir))
      (let [[resp cancel] (subject/watch test-dir)
            worker (future
                     (loop [event (a/<!! resp)
                            result (transient [])]
                       (if (not (nil? event))
                         (recur (a/<!! resp)
                                (conj! result
                                       {:kind (:kind event)
                                        :path (.toString (:path event))}))
                         (persistent! result))))]

        (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 200)
        (.mkdirs (io/file (str test-dir "/s1/s2")))
        (.createNewFile (io/file (str test-dir "/s1/s2/file")))
        ;; We can't delete the files too quickly after they are created,
        ;;    otherwise we will receive no event.
        (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 200)
        (doseq [f (reverse (rest (file-seq (io/file test-dir))))]
          (.delete f))
        (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 200)
        (a/>!! cancel true)
        (is (= [{:kind :entry-create,
		         :path "test/resource/watch_service_test/example/s1"}
		        {:kind :entry-create,
		         :path "test/resource/watch_service_test/example/s1/s2"}
		        {:kind :entry-create,
		         :path "test/resource/watch_service_test/example/s1/s2/file"}
		        {:kind :entry-delete,
		         :path "test/resource/watch_service_test/example/s1/s2/file"}
		        {:kind :entry-delete,
		         :path "test/resource/watch_service_test/example/s1/s2"}
		        {:kind :entry-delete,
		         :path "test/resource/watch_service_test/example/s1"}]
               @worker))))))

(deftest watch-subdir-test
  (testing
      (let [test-dir (str *test-dir* "/subdir-test")]
        (.mkdirs (io/file test-dir))
        (let [[resp cancel] (subject/watch test-dir)]
          (try
            (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 200)
            (.mkdirs (io/file (str test-dir "/s1/s2/s3")))
            (.createNewFile (io/file (str test-dir "/s1/s2/s3/file")))
            (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 200)

            (a/>!! cancel true)

            (is (= (.toString (:path (last (a/<!! (a/into [] resp)))))
                   "test/resource/watch_service_test/subdir-test/s1/s2/s3/file"))
            (finally
              (doseq [file (reverse (file-seq (io/file test-dir)))]
                (.delete file))
              (a/>!! cancel true)))))))

(deftest ^:slow watch-test2
  (testing "(kinda) heavier test"
    (let [test-dir (str *test-dir* "/test2")]
      (.mkdirs (io/file test-dir))
      (doseq [f (reverse (rest (file-seq (io/file test-dir))))]
        (.delete f))
      (try (let [[resp cancel] (subject/watch test-dir)
                 cancel-receiver (a/chan 1)
                 results-future (future
                                  (loop [end? false
                                         results (transient [])]
                                    (if end?
                                      (persistent! results)
                                      (a/alt!!
                                        resp ([value](recur false (conj! results value)))
                                        cancel-receiver ([_] (recur true results))))))
                 simple-file (str test-dir "/demo")]
             (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 100)
             (doseq [i (range 0 10000)]
               (is (true? (.createNewFile (io/file (str simple-file i))))))
             (.sleep java.util.concurrent.TimeUnit/MILLISECONDS 1000)
             (a/>!! cancel-receiver true)
             (= 10000 (count @results-future)))
           (finally
             (doseq [f (rest (file-seq (io/file test-dir)))]
               (.delete f)))))))
