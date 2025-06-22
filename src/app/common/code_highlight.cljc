(ns app.common.code-highlight
  #?(:clj
     (:import (org.graalvm.polyglot Context Source)
              (java.util HashMap))))

#?(:clj
   (def ^:dynamic *js-context*
     (-> (Context/newBuilder (into-array String ["js"]))
         (.allowExperimentalOptions true)
         (.options (HashMap.
                    {"js.commonjs-require" "true"
                     "js.commonjs-require-cwd" (str (System/getProperty "user.dir")
                                                    "/node_modules")}))
         (.allowIO true)
         (.build))))

#?(:clj
   (def ^:dynamic *module* (.eval *js-context* "js" "require('../wrapper')")))

#?(:clj (defn add-language-alias! [alias code]
          (.execute (.getMember *module* "language_alias_wrapper")
                    (into-array Object [alias code]))))

#?(:clj
   (defn highlight [code lang]
     (.asString (.execute (.getMember *module*  "highlight_wrapper") (into-array Object [code lang])))))

(highlight "<h1></h1>" "cljc")
