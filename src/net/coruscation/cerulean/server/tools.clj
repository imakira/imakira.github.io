(ns net.coruscation.cerulean.server.tools
  (:require
   [babashka.process :as process]
   [clojure.tools.logging :as logging]))

(defn watch-css! []
  (process/process "make styles-dev"
                   {:out (logging/log-stream :info *ns*)
                    :err (logging/log-stream :info *ns*)}))

(defn release-css! []
  (process/process "make styles-release"
                   {:out (logging/log-stream :info *ns*)
                    :err (logging/log-stream :info *ns*)}))
