(ns app.config)

(def ^:dynamic *blog-dir*
  (str (System/getProperty "user.dir")
       "/blogs"))

(def ^:dynamic *output* (str (System/getProperty "user.dir")
                             "/out"))


