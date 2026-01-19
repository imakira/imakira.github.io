(ns net.coruscation.cerulean.server.tools
  (:require
   [babashka.process :as process]
   [clojure.tools.logging :as logging]))

(defn watch-css! []
  (process/process "npx @tailwindcss/cli -m -i ./resources/main.css -o ./public/main.css --watch"
                   {:out (logging/log-stream :info 'net.coruscation.cerulean.server.tools)
                    :err (logging/log-stream :info 'net.coruscation.cerulean.server.tools)}))

(defn release-css! []
  (process/process "npx @tailwindcss/cli -m -i ./resources/main.css -o ./public/main.css"
                   {:out (logging/log-stream :info 'net.coruscation.cerulean.server.tools)
                    :err (logging/log-stream :info 'net.coruscation.cerulean.server.tools)}))
