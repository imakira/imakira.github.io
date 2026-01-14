(ns net.coruscation.cerulean.server.emacs-ipc
  (:require
   [cheshire.core :as cheshire]
   [clojure.core.async :as a]
   [clojure.java.io :as io]
   [clojure.java.process :as java.process]
   [clojure.tools.logging :as logging]
   [net.coruscation.cerulean.server.utils :refer [path-join]]))


(defonce ^:dynamic *emacs* (atom nil))
(defonce ^:dynamic *debug* (atom false))

(defn- launch-emacs []
  (let [init-file-location (path-join (java.nio.file.Files/createTempDirectory "cerulean-elisp" (into-array java.nio.file.attribute.FileAttribute [])) "init.el")]
    (spit (io/file init-file-location) (slurp (io/resource "init.el")))
    (java.process/start "emacs" "--batch" "-q" "-l" init-file-location
                        "--eval" "(main)")))

(defn- generate-request [method params id]
  {:json-rpc "2.0"
   :method (name method)
   :params (or params [])
   :id id})

(defn- send-request [method params id emacs]
  (let [req (generate-request method params id)
        req-str (cheshire/generate-string req)
        emacs (or emacs @*emacs*)
        writer (java.io.PrintWriter. (.getOutputStream emacs))]
    (.write writer req-str)
    (.write writer "\n")
    (when @*debug*
      (logging/debug "sending request to emacs" {:request req-str}))
    (.flush writer)))

(defn emacs-initialize []
  (let [emacs (launch-emacs)
        req-in (a/chan 100)
        shutdown (a/chan 1)
        resp-message (a/chan 100)
        stderr-message (a/chan 1000)
        process-sevant-chan (a/chan 1)
        resp-chans (atom {})
        error-chans (atom {})
        id (atom 0)
        break? (atom false)]
    (let [process-servant
          (future
            (.setName (java.lang.Thread/currentThread) (str "emacs-servant-" (.pid emacs)))
            (.waitFor emacs)
            (a/>!! process-sevant-chan
                   {:exit-code (.exitValue emacs)}))
          stdout-future
          (future
            (.setName (java.lang.Thread/currentThread) (str "emacs-stdout-" (.pid emacs)))
            (let [stdout (java.io.BufferedReader. (java.io.InputStreamReader.
                                                   (.getInputStream emacs)
                                                   java.nio.charset.StandardCharsets/UTF_8))]
              (while (and (.isAlive emacs) (not @break?))
                (try (let [resp-str (.readLine stdout)
                           _ (when @*debug*
                               (logging/debug "received message from emacs: " {:message resp-str}))
                           result (cheshire/parse-string resp-str true)]

                       (when result
                         (a/>!! resp-message result)))
                     (catch Throwable e
                       (logging/error "Unexcepted Error: " {:error e})))))
            (logging/debug  "stdout reader exiting..."))

          stderr-future
          (future
            (.setName (java.lang.Thread/currentThread) (str "emacs-stderr-" (.pid emacs) ))
            (let [stderr (java.io.BufferedReader. (java.io.InputStreamReader.
                                                   (.getErrorStream emacs)
                                                   java.nio.charset.StandardCharsets/UTF_8))]
              (while (and (.isAlive emacs) (not @break?))
                (let [result (.readLine stderr)]
                  (when result
                    (a/>!! stderr-message result)))))

            (logging/debug "stderr reader exiting..."))

          worker-future
          (future
            (.setName (java.lang.Thread/currentThread) (str "worker-" (.pid emacs) ))
            (while (not @break?)
              (a/alt!! shutdown ([_]
                                 (reset! break? true))
                       process-sevant-chan ([{:keys [exit-code]}]
                                            (when (not @break?)
                                              (logging/error "Emacs process unexpected closed" {:keys
                                                                                                [exit-code]})
                                              (reset! break? true)))
                       req-in ([{:keys [method params resp-chan error-chan]}]
                               (send-request method params (swap! id (partial + 1)) emacs)
                               (swap! resp-chans assoc @id resp-chan)
                               (swap! error-chans assoc @id error-chan))

                       resp-message ([{:keys [result
                                              id]}]
                                     (let [resp-chan (get @resp-chans id)
                                           error-chan (get @error-chans id)]
                                       (if (nil? resp-chan)
                                         (logging/error "Unexpected response id" {:message-id id
                                                                                  :result result})
                                         (do
                                           (cond (contains? result :result)
                                                 (a/>!! resp-chan (:result result))

                                                 (contains? result :error)
                                                 (a/>!! error-chan (ex-info (str "Elisp error: " (:message (:error result)))
                                                                            {:type :elisp-error
                                                                             :error (:error result)}))
                                                 :else
                                                 (do
                                                   (logging/error "Response Invalid" {:message-id id})
                                                   (a/>!! error-chan (ex-info "Response Invalid" {:type :response-invalid
                                                                                                  :message-id id
                                                                                                  :result result}))))
                                           (swap! resp-chans dissoc id)
                                           (swap! error-chans dissoc id)))))

                       stderr-message ([error-str]
                                       (binding [*out* *err*]
                                         (logging/warn error-str)))))
            (.destroy emacs)
            (logging/debug "main worker exiting..."))]

      {:request-chan req-in
       :shutdown-chan shutdown
       :debug {:stdout stdout-future
               :stderr stderr-future
               :worker worker-future
               :process-servant process-servant
               :emacs emacs
               :resp-chans resp-chans
               :error-chans error-chans
               :id id}})))

(defn init-emacs! []
  (when (not @*emacs*)
    (reset! *emacs* (emacs-initialize))))

(defn shutdown-emacs! [& [emacs]]
  (let [emacs (or emacs @*emacs*)]
    (when emacs
      (a/>!! (:shutdown-chan emacs) true)))
  (when (not emacs)
    (reset! *emacs* nil)))

(defn elisp-funcall [method & params]
  (let [resp-chan (a/chan 1)
        error-chan (a/chan 1)]
    (a/>!! (:request-chan @*emacs*) {:method method :params params :resp-chan resp-chan :error-chan error-chan})
    [resp-chan error-chan]))

(defn elisp-funcall! [method & params]
  (let [[resp-chan error-chan] (apply elisp-funcall method params)]
    (a/alt!! resp-chan ([resp]
                        resp)
             error-chan ([error]
                         (throw error)))))

(defn emacs-reload-init
  "For develop purpose only"
  []
  (elisp-funcall! "cerulean--reload-init"))
