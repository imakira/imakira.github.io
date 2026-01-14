(ns net.coruscation.cerulean.server.utils
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str])
  (:import
   [java.lang.reflect Method]
   [java.net URL]
   (java.nio.file Path)))

(defn extract-string [hickory-elements & {:keys [spacer]
                                          :or {spacer " "}}]
  (letfn [(inner [hickory-elements]
            (->> (cond
                   (string? hickory-elements) hickory-elements
                   (map? hickory-elements) (inner (:content hickory-elements))
                   true    (map inner hickory-elements))))]
    (->> (inner hickory-elements)
         (conj [])
         flatten
         (remove #(= "" (str/trim %)))
         (str/join spacer)
         str/trim)))

(defn path-join [& paths]
  (let [paths (mapv (fn [path]
                      (cond (instance? java.nio.file.Path path)
                            (.toString path)
		                    (instance? java.io.File path)
                            (.toString path)
                            :else
                            path))
                    paths)]
    (->> (rest paths)
         (into-array String)
         (java.nio.file.Path/of (first paths))
         (.normalize)
         (.toAbsolutePath)
         (.toString))))

(def add-to-classpath
  (memoize (fn [path]
             (let [path (-> (Path/of path (into-array String []))
                            (.normalize)
                            (.toAbsolutePath)
                            (.toString))
                   url (-> path (io/file) (.toURI) (.toURL))
                   shadow-property-name "java.class.path"]
               (add-classpath url)
               (if (nil? (System/getProperty shadow-property-name))
                 (System/setProperty shadow-property-name path)
                 (System/setProperty shadow-property-name
                                     (str path ":" (System/getProperty shadow-property-name))))))))

(defn take-until
  [pred coll]
  (lazy-seq
   (when-let [[f & r] (seq coll)]
     (if (pred f)
       (cons f (take-until pred r))
       [f]))))
