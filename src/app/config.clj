(ns app.config)

(def ^:dynamic *blog-dir*
  (str (System/getProperty "user.dir")
       "/blogs"))
