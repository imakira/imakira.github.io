(ns app.config)

#?(:clj (def ^:dynamic *blog-dir*
          (str (System/getProperty "user.dir")
               "/blogs")))

#?(:clj (def ^:dynamic *output* (str (System/getProperty "user.dir")
                                     "/docs")))

#?(:clj (def ^:dynamic *cache* (str (System/getProperty "user.dir")
                                    "/.cache")))

