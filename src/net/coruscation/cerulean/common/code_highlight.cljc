(ns net.coruscation.cerulean.common.code-highlight
  #?(:clj
     (:import (org.graalvm.polyglot Context Source)
              (java.util HashMap))))

#?(:clj
   (def ^:dynamic *js-context*
     (delay (-> (Context/newBuilder (into-array String ["js"]))
                (.allowExperimentalOptions true)
                (.options (HashMap.
                           {"js.commonjs-require" "true"
                            "js.commonjs-require-cwd" (str (System/getProperty "user.dir")
                                                           "/node_modules")}))
                (.allowIO true)
                (.build)))))

#?(:clj
   (defn get-wrapper-module []
     (locking @*js-context* (.eval @*js-context* "js" "require('../wrapper')"))))

#?(:clj (defn add-language-alias! [alias code]
          (locking @*js-context* (.execute (.getMember (get-wrapper-module) "language_alias_wrapper")
                                           (into-array Object [alias code])))))

#?(:clj
   (defn highlight [code lang]
     (locking @*js-context* (.asString (.execute (.getMember (get-wrapper-module)  "highlight_wrapper") (into-array Object [code lang]))))))
