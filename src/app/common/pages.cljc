(ns app.common.pages
  (:require
   [clojure.core.async :as a]
   [clojure.string :as str]
   [uix.core :as uix :refer
    [defui use-state use-effect $ use-ref use-memo]]
   [app.router :as router]
   [app.user-config :as user-config]
   [app.utils :refer [use-asset defcontext context-binding  use-context] :as utils]
   [reitit.core :as r]
   [app.components :refer [btn-wrapper]]
   [app.common.commons :as commons]
   [cljc.java-time.format.date-time-formatter :as date-time-formatter]
   [cljc.java-time.zoned-date-time :as zoned-date-time]
   [cljc.java-time.zone-id :as zone-id]
   [uix-fontawesome.brands :as brands]
   [uix-fontawesome.regular :as regular]
   [uix-fontawesome.solid :as solid]
   #?@(:clj [[app.server.assets :as assets]
             [hickory.core :as hc]
             [hickory.select :as hs]
             [app.server.utils :as su]
             [cheshire.core :as json]])
   #?@(:cljs [[uix.core :refer [create-context]]
              [app.utils :refer [obj->clj]]
              ["@js-joda/locale_en-us" :as js-joda-locale]])))


(defn date-time-to-readable-string [zoned-date-time]
  (.format zoned-date-time (-> "LLL dd, yyyy"
                               (date-time-formatter/of-pattern)
                               (date-time-formatter/with-locale
                                 #?(:cljs js-joda-locale/Locale.US
                                    :clj java.util.Locale/US)))))

(def icons {:github brands/_github
            :hackernews brands/_square-hacker-news
            :linkedin brands/_linkedin
            :rss solid/_square-rss
            :reddit brands/_reddit})

(defn- header-to-level [tag]
  (case tag
    :h2 1
    :h3 2
    :h4 3
    :h5 4
    (throw (ex-info (str "tag " tag " isn't suported")
                    {}))))



#?(:clj
   (defn- generate-toc-from-html-string [raw-html]
     (let [headers (->> raw-html
                        hc/parse
                        hc/as-hickory
                        (hs/select (hs/or (hs/tag :h2)
                                          (hs/tag :h3)
                                          (hs/tag :h4)
                                          (hs/tag :h5))))]
       (into [] (for [header headers]
                  {:level (header-to-level (:tag header))
                   :content (su/extract-string header)
                   :id (:id (:attrs header))})))))

#?(:cljs (defn- generate-toc-from-element [element]
           (let [headers (array-seq (.querySelectorAll element "h2,h3,h4,h5"))]
             (into [] (for [header headers]
                        {:level (header-to-level (keyword
                                                  (str/lower-case (.-tagName header))))
                         :content (.-innerText header)
                         :id (.-id header)})))))

(defui toc-mobile [{:keys [toc-content current-header-id]}]
  (let [toc-item-active-classes "text-[#0260B3]"
        toc-header-ref (use-ref nil)
        toc-mobile-control (use-ref nil)
        toc-mobile-content (use-ref nil)
        toc-mobile-label (use-ref nil)
        [toc-stuck? set-toc-stuck!] (use-state false)
        current-header-index (if (and current-header-id
                                      toc-content)
                               (commons/index-by (fn [item]
                                                   (= current-header-id
                                                      (:id item)))
                                                 toc-content))
        escape-string (fn [s]
                        (str "\""
                             (-> s
                                 (str/replace "\\" "\\\\")
                                 (str/replace "\"" "\\\""))
                             "\""))
        [toc-open? set-toc-open!] (use-state false)]

    #?(:cljs (use-effect (fn []
                           (let [callback (fn [[e]]
                                            (set-toc-stuck! (not (.-isIntersecting e))))
                                 observer (js/IntersectionObserver. callback
                                                                    #js {:rootMargin "-1px 0px 0px 0px"
                                                                         :threshold #js [1]})]
                             (if @toc-header-ref (.observe observer @toc-header-ref)) 
                             (fn []
                               (if @toc-header-ref (.unobserve observer @toc-header-ref)))))
                         []))
    #?(:cljs (use-effect (fn []
                           (if toc-stuck?
                             (utils/set-css-variable! "--toc-mobile-offset"
                                                      (str "-"
                                                           (* 2 (+ 1 current-header-index))
                                                           "rem")))
                           (fn []
                             (utils/set-css-variable! "--toc-mobile-offset" "initial")))
                         [current-header-index toc-stuck?]))

    #?(:cljs (use-effect (fn []
                           (if @toc-mobile-control
                             (set! (.-checked @toc-mobile-control)
                                   toc-open?))
                           (fn []))
                         [toc-open?]))

    #?(:cljs
       (use-effect (fn []
                     (let [callback
                           (fn [e]
                             (if (and toc-open?
                                      @toc-mobile-content
                                      @toc-mobile-label
                                      (not (.contains @toc-mobile-label
                                                      (.-srcElement e)))
                                      (not (.contains @toc-mobile-content
                                                      (.-srcElement e))))
                               (set-toc-open! false)))]
                       (js/addEventListener "click" callback)
                       (fn []
                         (js/removeEventListener "click" callback))))
                   [toc-open?]))


    ($ :<>
       ($ :div {:ref toc-header-ref})
       ($ :input.hidden {:type "checkbox"
                         :id "toc-mobile-control"
                         :ref toc-mobile-control})
       ($ :label
          {:for "toc-mobile-control"
           :class (str " toc-header cursor-pointer select-none block text-sky-700 border-1 pl-2 "
                       " flex justify-between items-center mt-3 bg-white sticky top-0 h-8 pr-1 "
           	       " md:hidden ml-[1px] relative ")
           :on-click (fn [e]
                       (.preventDefault e)
                       (set-toc-open! (not toc-open?)))
           :ref toc-mobile-label}
          ($ :div.relative.h-full.w-full.overflow-hidden
             ($ :div.text-lg.toc-header-text.relative
                {:class (str " w-full transition-all ")}
                ($ :div.h-8.w-96 {:key "TOC"} "Table Of Content")
                (for [toc-item toc-content]
                  ($ :div.h-8.w-96 {:key (:id toc-item)}
                     (:content toc-item)))))
          ($ :span.material-symbols-outlined.checked:rotate-180.transition-all.dropdown-icon
             "keyboard_arrow_down"))
       ($ :div.toc-mobile-wrapper2.h-1.sticky.top-8
          ($ :div.grid.toc-mobile-wrapper.transition-all.border-neutral-400.border-l-1.bg-white
             {:class  "md:hidden ml-[1px] "}
             ($ :ul.toc-mobile-content
                {:class "text-[1.05rem] 2xl:text-lg "
                 :ref toc-mobile-content}
                (for [{:keys [content id level] :as toc-item} toc-content]
                  ($ :li.my-1.list-inside.text-neutral-600
                     {:key id}
                     ;; to make tailwindcss-cli happy
                     ;; "pl-0 pl-4 pl-8 pl-12 pl-16 pl-20"
                     ($ btn-wrapper
                        ($ :div.group.w-full.h-full
                           ($ :a.h-12.transition-all.w-full.h-full.inline-block.flex.flex-col.justify-center
                              {:class (str "group-hover:text-[#0260B3] "
                                           (str "pl-" (* 4 level))
                                           (if (= current-header-id id)
                                             (str " " toc-item-active-classes)
                                             ""))
                               :href (str "#" id)
                               :on-click (fn [_] (set-toc-open! false))}
                              ($ :span content))))))))))))

(defui toc [{:keys [toc-content class current-header-id]}]
  (let [toc-item-active-classes "text-[#0260B3]"]
    ($ :div.border-neutral-400.border-l-2 {:class (str "text-[1.05rem] 2xl:text-lg " class)}
       ($ :ul
          (for [{:keys [content id level] :as toc-item} toc-content]
            ($ :li.my-1.list-inside.text-neutral-600  {:key id}
               ;; to make tailwindcss-cli happy
               ;; "pl-0 pl-4 pl-8 pl-12 pl-16 pl-20"
               ($ btn-wrapper
                  ($ :div.group.w-full.h-full
                     ($ :a.h-12.transition-all.w-full.h-full.inline-block.flex.flex-col.justify-center
                        {:class (str "group-hover:text-[#0260B3] "
                                     (str "pl-" (* 4 level))
                                     (if (= current-header-id id)
                                       (str " " toc-item-active-classes)
                                       ""))
                         :href (str "#" id)}
                        ($ :span content))))))))))

(defui blog [{{:keys [id]} :path-params :as data}]
  (let [{:keys [content title show-toc? category tags modified-date published-date description] :as blog-asset} (use-asset (str "blog/" id))
        toc-content (use-memo
                     (fn []
                       #?(:cljs (if show-toc? (let [dummy (.createElement js/document "html")]
                                                (set! (.-innerHTML dummy)
                                                      content)
                                                (generate-toc-from-element dummy))
                                    nil)
                          :clj (generate-toc-from-html-string content)))
                     [content show-toc?])
        doc-ref (use-ref nil)
        [current-header-id set-current-header-id!] (use-state nil)]
    (utils/set-title! (str title " | " user-config/title))
    (utils/set-description! description)
    #?(:cljs
       (use-effect (fn []
                     (let [scroll-event
                           (fn [_]
                             (let [headers (.querySelectorAll @doc-ref "h1,h2,h3,h4,h5")

                                   current-header (or (some->> headers
                                                               (take-while
                                                                (fn [header]
                                                                  (< (.-top (.getBoundingClientRect header))
                                                                     2)))
                                                               last)
                                                      (first headers))]
                               (when current-header
                                 (set-current-header-id! (.-id current-header)))))]
                       (js/addEventListener "scroll" scroll-event)
                       (fn []
                         (js/removeEventListener "scroll" scroll-event))))
                   []))
    (if (seq blog-asset)
      ($ :div.px-4.relative
         ($ :div
            ($ :h1.font-medium.text-neutral-700.leading-tight {:class "text-2xl sm:text-[2rem]"} title)
            ($ :hr.border-t-1.border-slate-500.w-full {:class "my-3"})
            ($ :div.text-base.grid.items-center.text-gray-700 {:class "pl-[1px] grid-cols-[7rem_1fr]"}
               ($ :div.text-sky-700.border-l-2.pl-2.text-lg
                  (str category))
               ($ :div.text-base
                  (date-time-to-readable-string (commons/parse-iso8601 modified-date)))))
         (when show-toc?
           ($ toc-mobile {:class ""
                          :toc-content toc-content
                          :current-header-id current-header-id}))

         ($ :div.gap-8.w-full.h-full {:class
	                                  (str "md:grid md:grid-cols-[minmax(0px,7fr)_minmax(17rem,17rem)] "
                                           "2xl:grid-cols-[minmax(0px,7fr)_minmax(20rem,20rem)]")}
            ($ :div.cr-document {:ref doc-ref
                                 :dangerouslySetInnerHTML {:__html content}})
            ($ :div.mt-4
               (when show-toc?
                 ($ toc {:class (str "w-78 fixed right-0 top-[13.5rem] z-200 max-h-[80vh] "
                                     "overflow-y-auto select-none hidden md:block xl:top-36  "
                                     "2xl:w-96")
                         :toc-content toc-content
                         :current-header-id current-header-id}))))))))


(defui blog-item [{:keys [preview onclick class]}]
  (let [{:keys [title id tags published-date modified-date author category]} preview]
    ($ :div.blog-item {:class class}
       ($ :div.relative.group
          ($ :div
             ($ :div
                ($ :span.text-lg.text-slate-600
                   (date-time-to-readable-string (commons/parse-iso8601 published-date)))
                ($ :span " / ")
                ($ :span.text-lg.text-slate-600
                   category))
             ($ :div {:class ""}
                ($ router/link {:href (str "blogs/" id ".html")
                                :class "text-2xl text-sky-950 hover:text-[#0260B3] transition-all duration-300"} ($ :h1 title))))))))



(defui home [_]
  (let [blogs  (use-asset "blogs")

        landscape-ref (use-ref nil)]
    (use-effect
     (fn []
       #?(:cljs
          (let [scroll-listener
                (fn [_]
                  (let [{:keys [bottom] :as rect}
                        (obj->clj (.getBoundingClientRect @landscape-ref)
                                  :keywordize-keys true)]))]
            (js/addEventListener "scroll" scroll-listener)
            (fn []
              (js/removeEventListener "scroll" scroll-listener)))))
     [])
    (utils/set-title! (str "HOME | " user-config/title))
    (utils/set-description! "")
    ($ :div.flex.flex-col
       ($ :div.flex.flex-col.justify-center.items-center {:class "xl:w-[1100px]"}
          ($ :div.w-full
             ($ :div.flex.justify-center.flex-col.gap-6.bg-opacity-100.w-full
                (for [blog blogs]
                  ($ :div.w-full {:key (:id blog)}
                     ($ blog-item {:preview blog
                                   :key (:id blog)
                                   :class "w-full"})
                     ($ :hr {:class "mt-2 border-gray-500"})))))))))

(defui header []
  (let [{:keys [component] :as ctx} (use-context router/*router*)
        home-page? (= component home)]
    ($ :<>
       ($ :div.bg-opacity-100.px-4.relative
          {:class (str "bg-[#0260B3] sm:flex sm:justify-between block gap-4 "
                       (if home-page?
                         "md:grid md:grid-cols-[2fr_3fr] md:h-dvh md:fixed md:w-[20rem]"
                         "xl:grid xl:grid-cols-[2fr_3fr] xl:h-dvh xl:fixed xl:w-[20rem]"))}
          ($ router/link {:href "/" :class "flex justify-center block"}
             ($ :span.text-3xl.text-cyan-50.pt-4
                {:class (str "sm:py-6 "
                             (if home-page?
                               "md:sideways-lr md:text-6xl md:pb-8"
                               "xl:sideways-lr xl:text-6xl xl:pb-8"))}
                user-config/title))

          ($ :div.flex.justify-center
             ($ :div.flex.flex-col.items-center.justify-end.py-1.relative
                {:class (str "left-[0.275rem] sm:items-end "
                             (if home-page?
                               "md:justify-between"
                               "xl:justify-between"))}
                ($ :div.navigator-bar.gap-3.text-base.text-slate-50.opacity-80.flex.px-5.my-2
                   {:class (if home-page?
                             "md:text-2xl md:flex-col md:pt-6"
                             "xl:text-2xl xl:flex-col xl:pt-6")}
                   (for [[key {:keys [text href]}] user-config/navigation]
                     ($ btn-wrapper {:key key :bg-class "group-hover:bg-yellow-400"}
                        ($ :div.px-1.group-hover:text-cyan-50 {:key href :class "text-lg"}
                           ($ router/link {:href href}
                              text)))))

                ($ :div.justify-center.w-full.mb-8.relative.hidden
                   {:class  (if home-page?
                              "md:flex"
                              "xl:flex")}
                   ($ :div.flex.relative
                      (for [[key {:keys [href external?]}] user-config/links]
                        ($ router/link {:href href
                                        :key key
                                        :external? external?}
                           ($ (key icons))))))))))))

(def routes
  ["" {:controllers [{:identity identity
                      :start (fn [_])
                      :stop (fn [_])}]}
   ["/index.html" {:component home}]
   ["/home.html" {:component home}]
   ["/" {:component home
         :controllers [{:identity identity
                        :start (fn [{{:keys [routing-state set-routing-state!] :as data}:data}]
                                 (set-routing-state! (assoc-in routing-state [:home-page?] true))
                                 (tap> "called"))
                        :stop (fn [{{:keys [routing-state set-routing-state!]} :data}]
                                (set-routing-state! (assoc-in routing-state [:home-page?] false)))}]}]
   ["/blogs/{id}.html" {:component blog
                        :name ::blog
                        :depends #?(:clj {:route :assets/blogs
                                          :params-list-fn
                                          assets/fetch-blog-ids}
                                    :cljs nil)}]
   ;; TODO: make this configurable
   ["/about.html" {:component blog
                   :extra-data {:path-params {:id "about.html"}}}]
   ])

(defui main [_]
  (let [{:keys [component] :as ctx} (use-context router/*router*)
        home-page? (= component home)]
    ($ :div.app.h-dvh.w-full
       {:class (if home-page?
                 "md:grid md:grid-cols-[20rem_9fr]"
                 "xl:grid xl:grid-cols-[20rem_9fr]")}
       ;; ($ :div.w-full.h-full.fixed.-z-50.bg-cyan-50.fixed.top-0)
       ($ :<>
          ($ :div.transition-all
             ($ header))
          ($ :div.pt-5.px-2 {:class "sm:px-4 xl:pt-7 xl:px-8"}
             ($ router/router-outlet))))))

(defui app [{:keys [initial-route]}]
  ($ router/router {:routes routes :initial-route initial-route}
     ($ main {})))
