(ns app.build
  (:require
   [babashka.process :as process]))

(defn build-css-hook {:shadow.build/stage :compile-prepare}
  [build-state & _]
  (process/shell "npm run styles-release")
  build-state)

