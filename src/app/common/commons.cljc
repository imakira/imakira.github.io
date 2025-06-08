(ns app.common.commons
  (:require [cljc.java-time.format.date-time-formatter :as date-time-formatter]
            [cljc.java-time.zoned-date-time :as zoned-date-time]))


(defn index-by
  [f coll]
  (first (first (filter (fn [[index item]]
                          (f item))
                        (map-indexed vector coll)))))

(defn parse-iso8601 [timestr]
  (zoned-date-time/parse timestr date-time-formatter/iso-offset-date-time))
