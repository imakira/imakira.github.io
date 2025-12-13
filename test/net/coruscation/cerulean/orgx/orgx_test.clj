(ns net.coruscation.cerulean.orgx.orgx-test
  (:require
   [clojure.test :refer [deftest is]]
   [net.coruscation.cerulean.orgx.orgx :as sut]))

(deftest from-html-test
  (is (= (str (sut/from-html "<pre class=\"uix\">  ($ :button {:on-click (fn [&amp; _] (js/alert &quot;clicked!&quot;))} &quot;Click Me&quot;) </pre>"))
         "[($ :button {:on-click (fn [& _] (js/alert \"clicked!\"))} \"Click Me\")]"))

  (is (= (str (sut/from-html "<pre class=\"uix\">  ($ :button {:on-click (fn [&amp; _] #?(:cljs (js/alert &quot;clicked!&quot;)))} &quot;Click Me&quot;)</pre>"))
         "[($ :button {:on-click (fn [& _] #?(:cljs (js/alert \"clicked!\")))} \"Click Me\")]")))
