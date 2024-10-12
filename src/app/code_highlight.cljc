(ns app.code-highlight
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
         (.build)))
   (.eval *js-context*
          (-> (Source/newBuilder
               "js"
               (str "let hljs  = require(\"highlight.js/lib/common\"); ")
               "placeholder.js")
              .build))
   (def highlight-wrapper (.eval *js-context* "js"
                                 (str "(function highlight_wrapper(code, lang)"
                                      "{"
                                      "return hljs.highlight(code, {language: lang}).value;"
                                      "})")))
   (.asString (.execute highlight-wrapper (into-array Object ["<h1></h1>" "xml"])))
   (defn highlight [code lang]
     (.asString (.execute highlight-wrapper (into-array Object [code lang])))))

#?(:clj (highlight "<h1></h1>" "xml"))
