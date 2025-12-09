(ns app.server.blog-gen-test
  (:require
   [clojure.java.io :as io]
   [clojure.test :refer [deftest is testing]]
   [hickory.core :as core]
   [net.coruscation.cerulean.server.blog-gen :as subject :refer [org-file->html]]))


(deftest relative-path?-test
  (is (= false (subject/relative-path? "https://example.com")))
  (is (= false (subject/relative-path? "http://example.com")))
  (is (= false (subject/relative-path? "/path")))
  (is (= true (subject/relative-path? "path/item")))
  (is (= true (subject/relative-path? "./path/item"))))

(deftest get-img-dimension-test
  (is (= {:height 368
          :width 550}
         (subject/get-img-dimension "./test/resource/1.webp")))
  (is (= {:height 368
          :width 550}
         (subject/get-img-dimension "./test/resource/1.jpg")))

  (is (= {:height 368
          :width 550}
         (subject/get-img-dimension "https://www.gstatic.com/webp/gallery/1.jpg")))

  (is (= {}
         (subject/get-img-dimension "./test/resource/1.svg")))
  (is (= {}
         (subject/get-img-dimension "./nonexistence"))))

(deftest cache-image-if-remote-test
  (let [sample-remote "https://www.gstatic.com/webp/gallery/1.jpg"
        sample-remote-cache (str @subject/image-cache-dir
                                 "/"
                                 (subject/sanitize-filename sample-remote))
        sample-remote-nonexistence "https://nonexistence/.jpg"]
    (.delete (io/file sample-remote-cache))
    (is (= "./non-existence"
           (subject/cache-image-if-remote "./non-existence")))
    (is (= sample-remote-cache
           (subject/cache-image-if-remote sample-remote)))
    (is (.exists (io/file sample-remote-cache)))
    (is (thrown? Exception
                 (subject/cache-image-if-remote sample-remote-nonexistence)))
    (.delete (io/file sample-remote-cache))))

(deftest optimize-img-tag-test
  (let [sample-img-html-jpg "<img src=\"./imgs/1.jpg\"></img>"
        sample-img-html-jpg-dimension "<img src=\"./imgs/1.jpg\" width=\"100\" height=\"100\"></img>"
        sample-img-html-svg "<img src=\"./imgs/1.svg\"></img>"
        sample-img-html-nonexistence "<img src=\"./nonexistence.jpg\"></img>"
        sample-img-html-remote "<img src=\"https://www.gstatic.com/webp/gallery/1.jpg\"></img>"
        sample-img-html-remote-nonexistence  "<img src=\"https://nonexistence/nonexistence\"></img>"
        to-hickory (fn [html]
                     (-> html
                         core/parse-fragment
                         first
                         core/as-hickory))]
    (to-hickory sample-img-html-jpg-dimension)
    (subject/get-image-src (to-hickory sample-img-html-jpg-dimension))

    (is (= (subject/set-img-dimension-if-not-exist (to-hickory sample-img-html-jpg)
                                                   {:height "368"
                                                    :width "550"})
           (subject/optimize-img-tag (to-hickory sample-img-html-jpg))))

    (is (= (to-hickory sample-img-html-jpg-dimension)
           (subject/optimize-img-tag (to-hickory sample-img-html-jpg-dimension))))

    (is (= (to-hickory sample-img-html-svg)
           (subject/optimize-img-tag (to-hickory sample-img-html-svg))))

    (is (= (to-hickory sample-img-html-nonexistence)
           (subject/optimize-img-tag (to-hickory sample-img-html-nonexistence))))

    (is (= (subject/set-img-dimension-if-not-exist (to-hickory sample-img-html-remote)
                                                   {:height "368"
                                                    :width "550"})
           (subject/optimize-img-tag (to-hickory sample-img-html-remote))))

    (is (= (to-hickory sample-img-html-remote-nonexistence)
           (subject/optimize-img-tag (to-hickory sample-img-html-remote-nonexistence))))))


(deftest orgx-test
  (testing ""
    (let [demo (org-file->html "./blogs/demo.org")]
      (is (= (:orgx-require demo)
             [['net.coruscation.cerulean.components :as 'comp]]))
      (is (true? (:orgx demo))))))

