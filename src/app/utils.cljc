(ns app.utils
  (:require [uix.dom.server :as dom.server]
            [clojure.core.async :as a]
            [malli.core :as m]
            [malli.generator :as mg]
            [clojure.walk :as walk]
            #?@(:cljs [["axios" :as axios]
                       [uix.core :refer [use-state use-effect]]
                       [goog.object :as goog.object]])
            #?@(:clj [[app.assets :as assets]
                      [reitit.core :as r]]))
  #?(:cljs (:require-macros [app.utils :refer [use-context context-binding defcontext if-cljs]])))

(def SERVER_PATH "http://localhost:3001/")

(defn fetch-asset [path]
  (let [chan (a/chan 1)]
    (a/go #?(:clj (->>
                   (let [routing (r/match-by-path
                                  (r/router assets/assets-route)
                                  (str "/assets/" path))]
                     ((-> routing
                          :data
                          :handler)
                      routing))
                   (a/>! chan))
             :cljs (-> (axios/get (str SERVER_PATH "assets/" path))
                       (.then (fn [resp]
                                (a/go (a/>! chan (:data (js->clj resp :keywordize-keys true))))))
                       (.catch (fn [error]
                                 (a/go (a/>! chan (js->clj error :keywordize-keys)))))))
          (a/<! chan))))

(defn use-asset [path]
  #?(:cljs
     (or (js->clj (aget js/globalThis path)
                  :keywordize-keys true)
         (let [[asset set-asset!]
               (use-state {})]
           (use-effect (fn []
                         (a/go (set-asset! (a/<! (fetch-asset path)))))
                       [path])
           asset))
     :clj
     (let [asset (a/<!! (fetch-asset path))]

       (swap! (var-get (resolve 'app.server/*serialized-assets*) ) conj
              [path asset])
       asset)))

;; (defmacro case [& {:keys [cljd cljs clj]}]
;;   (cond
;;     (contains? &env '&env)
;;     `(cond (:ns ~'&env) ~cljs (:nses ~'&env) ~cljd :else ~clj)
;;     #?(:clj (:ns &env) :cljs true) cljs
;;     #?(:clj (:nses &env) :cljd true) cljd
;;     :else clj))

(defn cljs-env?
  "Take the &env from a macro, and tell whether we are expanding into cljs."
  [env]
  (boolean (:ns env)))

#?(:clj (defmacro if-cljs
          "Return then if we are generating cljs code and else for Clojure code.

  https://groups.google.com/d/msg/clojurescript/iBY5HaQda4A/w1lAQi9_AwsJ"
          [then else]
          (if (cljs-env? &env) then else)))

#?(:clj (defmacro defcontext
          [name default-value]
          (if (cljs-env? &env)
            ;; setting as dynamic just for suppressing the naming warning
            `(def ~(with-meta name {:dynamic true}) (uix.core/create-context ~default-value))
            `(def ~(with-meta name {:dynamic true})  ~default-value))))

(defn- do-cljs-bindings [bindings body]
  (if (empty? bindings)
    body
    (let [binding (first bindings)]
      `(uix.core/$ (.-Provider ~(first binding)) {:value ~(second binding)}
                   ~@(if (empty? (rest bindings))
                       body
                       (list (do-cljs-bindings (rest bindings) body)))))))

(defn- do-clj-bindings [bindings body]
  `(letfn [(wrap-fn# [f#]
             (fn [& args#]
               (binding ~bindings
                 (walk/postwalk (fn [item#]
                                  (if (fn? item#)
                                    (wrap-fn# item#)
                                    item#))
                                (apply f# args#)))))]
     ((wrap-fn#
       (fn []
         (do ~@body))))))

(def ^:dynamic *a* 1)


#?(:clj (defmacro context-binding [bindings & body]
          (if (cljs-env? &env)
            (do-cljs-bindings (partition 2 bindings) body)
            (do-clj-bindings bindings body)
            #_`(binding ~bindings ~@body))))

#?(:clj (defmacro use-context [context]
          (if (cljs-env? &env)
            `(uix.core/use-context ~context)
            `~context)))

#?(:clj
   (defmacro $ [& body]
     (if (cljs-env? &env)
       `(uix.core/$ ~@body)
       `(map (fn [item#]
               (if (fn? item#)
                 (bound-fn* item#)
                 item#))
             (uix.core/$ ~@body)))))

#?(:cljs (defn obj->clj
           [obj]
           (-> (fn [result key]
                 (let [v (goog.object/get obj key)]
                   (if (= "function" (goog/typeOf v))
                     result
                     (assoc result key v))))
               (reduce {} (goog.object/getKeys obj)))))

#?(:cljs (defn recur-obj->clj
           [obj]
           (if (goog.isObject obj)
             (-> (fn [result key]
                   (let [v (goog.object/get obj key)]
                     (if (= "function" (goog/typeOf v))
                       result
                       (assoc result key (obj->clj v)))))
                 (reduce {} (goog.object/getKeys obj)))
             obj)))
