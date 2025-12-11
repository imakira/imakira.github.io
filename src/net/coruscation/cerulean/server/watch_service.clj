(ns net.coruscation.cerulean.server.watch-service
  (:require
   [clojure.core.async :as a])
  (:import
   [java.io File]
   [java.nio.file
    Path
    StandardWatchEventKinds
    WatchEvent
    WatchEvent$Kind
    WatchService]))

(def ^:dynamic *chan-size* 512)

(defn register [^Path path ^WatchService watch-service]
  (.register path
             watch-service
             (into-array WatchEvent$Kind
                         [StandardWatchEventKinds/ENTRY_CREATE
                          StandardWatchEventKinds/ENTRY_DELETE
                          StandardWatchEventKinds/ENTRY_MODIFY
                          StandardWatchEventKinds/OVERFLOW])))

(defn watch [& paths]
  (let [resp-chan (a/chan *chan-size*)
        cancel-chan (a/chan 1)
        stopped? (atom false)

        worker
        (future
          (let [paths (map (fn [p]
                             (Path/of p (into-array String [])))
                           paths)
                watch-service (-> (java.nio.file.FileSystems/getDefault)
                                  (.newWatchService))]
            (doseq [path paths]
              (doseq [^File subpath-path (file-seq (.toFile path))]
                (when (.isDirectory subpath-path)
                  (register (.toPath subpath-path)
                            watch-service))))

            (try
              (while (not @stopped?)
                (let [watch-key (.take watch-service)
                      events (.pollEvents watch-key)
                      ^Path parent-dir (.watchable watch-key)]
                  (doseq [^WatchEvent event events]
                    (let [^WatchEvent$Kind kind (.kind event)
                          ^Path event-path (.context event)
                          ^Path resolved-path (.resolve parent-dir event-path)]

                      (a/>!! resp-chan
                             {:kind (case (.name kind)
                                      "ENTRY_CREATE" :entry-create
                                      "ENTRY_MODIFY" :entry-modify
                                      "ENTRY_DELETE" :entry-delete
                                      "OVERFLOW" :overflow)
                              :path resolved-path})

	                  (when (and (= kind StandardWatchEventKinds/ENTRY_CREATE)
                                 (.isDirectory (.toFile resolved-path)))

                        (register resolved-path
                                  watch-service)

                        (doseq [^File subpath-file (rest (file-seq (.toFile resolved-path)))]
                          (when (.isDirectory subpath-file)
                            (register (.toPath subpath-file)
                                      watch-service))
                          ;; without it
                          ;; `watch-subdir-test` would fail
                          (a/>!! resp-chan
                                 {:kind :entry-create
                                  :path (.toPath subpath-file)})))
                      (.reset watch-key)))))
              (catch InterruptedException _)
              (finally
                (.close watch-service)))))

        sentinel (future
                   (while (not (a/<!! cancel-chan)))
                   (reset! stopped? true)
                   (future-cancel worker)
                   (a/close! resp-chan)
                   (a/close! cancel-chan))]
    (with-meta [resp-chan cancel-chan]
      {:debug {:worker worker
               :sentinel sentinel
               :stopped? stopped?}})))
