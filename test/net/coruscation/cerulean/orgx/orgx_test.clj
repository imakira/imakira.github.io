(ns net.coruscation.cerulean.orgx.orgx-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [net.coruscation.cerulean.orgx.orgx :as sut]))

(deftest from-html-test
  (testing
      (let [[[ele] toplevels] (sut/from-html "<pre class=\"orgx\">  ($ :button {:on-click (fn [&amp; _] (js/alert &quot;clicked!&quot;))} &quot;Click Me&quot;) </pre>")]
        (is (= (str ele)
               "($ :button {:on-click (fn [& _] (js/alert \"clicked!\"))} \"Click Me\")"))
        (is (not (seq toplevels))))))

(deftest toplevesl-test
  (testing
      (let [[_ toplevels] (sut/from-html "<pre class=\"orgx\" data-toplevel> (defui demo []) </pre> ")]
        (is (= (str toplevels)
               (str '((defui demo []))))))))
