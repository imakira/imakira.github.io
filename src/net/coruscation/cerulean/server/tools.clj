(ns net.coruscation.cerulean.server.tools
  (:require
   [babashka.process :as process]
   [clojure.tools.logging :as logging]))

(defn watch-css! []
  (process/process {:out (logging/log-stream :info 'net.coruscation.cerulean.server.tools)
                    :err (logging/log-stream :info 'net.coruscation.cerulean.server.tools)}
                   "npx @tailwindcss/cli -m -i ./resources/main.css -o ./public/main.css --watch"))

(defn release-css! []
  (process/process {:out (logging/log-stream :info 'net.coruscation.cerulean.server.tools)
                    :err (logging/log-stream :info 'net.coruscation.cerulean.server.tools)}
                   "npx @tailwindcss/cli -m -i ./resources/main.css -o ./public/main.css"
                   ))
