(ns app.common.pages
  (:require
   [clojure.core.async :as a]
   [clojure.string :as str]
   [uix.core :as uix :refer
    [defui use-state use-effect $ use-ref use-memo]]
   [app.router :as router]
   [app.utils :refer [use-asset defcontext context-binding  use-context] :as utils]
   [reitit.core :as r]
   [stylefy.core :as stylefy :refer [use-style]]
   [app.components :refer [btn-wrapper]]
   #?@(:clj [[app.server.assets :as assets]
             [hickory.core :as hc]
             [hickory.select :as hs]
             [app.server.utils :as su]
             [cheshire.core :as json]])
   #?@(:cljs [[uix.core :refer [create-context]]
              [app.utils :refer [obj->clj]]])))

(defcontext *header-context* nil)



(defn- header-to-level [tag]
  (case tag
    :h2 1
    :h3 2
    :h4 3
    :h5 4
    (throw (ex-info (str "tag " tag " isn't suported")
                    {}))))

#?(:clj (defn- generate-toc-from-html-string [raw-html]
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

(defui toc [{:keys [toc-content]}]
  ($ :div
     (for [toc-item toc-content]
       ($ :div {:key (:id toc-item)}
          ($ :a {:href (str "#" (:id toc-item))}
             (:content toc-item))))))

(defui blog [{{{:keys [id]} :path-params}
              :routing-data :as routing-data}]
  (let [{:keys [content title] :as blog-asset} (use-asset (str "blog/" id))
        toc-content (use-memo (fn []
                                #?(:cljs (let [dummy (.createElement js/document "html")]
                                           (set! (.-innerHTML dummy)
                                                 content)
                                           (generate-toc-from-element dummy))
                                   :clj (generate-toc-from-html-string content)))

                              [content])]
    ($ :div.mt-20.pt-4.flex.flex-col.items-center.justify-center
       ($ :div.mt-4
          ($ :h1.text-5xl title)
          ($ :hr.border-t-1.border-slate-500.w-full.my-4))
       ($ :div.flex
          ($ :div.cr-document {:dangerouslySetInnerHTML {:__html content}})
          ($ :div {}
             ($ toc {:toc-content toc-content}))))))

(defui blog-item [{:keys [preview onclick]}]
  (let [{:keys [title id tags published-date modified-date author]} preview]
    ($ :div.blog-item {:class ""}
       ($ :div.relative.group
          ($ btn-wrapper
             ($ :div.flex.items-center.gap-4.p-4
                ($ :div
                   ($ :span.text-xl.text-slate-600
                      "Mar 5"))
                ($ :div {:class ""}
                   ($ router/link {:href (str "blogs/" id)
                                   :class "text-3xl text-sky-950"} ($ :h1 title)))))))))

(def temp-links [{:href "/" :text "HOME"}
                 {:href "/about" :text "ABOUT"}
                 {:href "/projects" :text "PROJECTS"}])

(defui header []
  ($ :div.w-full.h-full.bg-opacity-100.flex.justify-between.items-center.px-4 {:class "bg-[#0260B3]"}
     ($ router/link {:href "/"}
        ($ :div.text-5xl.text-cyan-50.opacity-80.relative.-top-1
           "Coruscation"))
     ($ :div.flex.items-end.flex-col
        ($ :div.navigator-bar.flex.gap-3.text-xl.text-slate-50.opacity-80
           (for [{:keys [href text]} temp-links]
             ($ btn-wrapper {:key href :bg-class "group-hover:bg-yellow-400"}
                ($ :div.px-1.group-hover:text-cyan-50 {:key href}
                   ($ router/link {:href href}
                      text))))))))

(defui home [_]
  (let [blogs  (use-asset "blogs")
        [show-header? set-header!] (use-context *header-context*)

        landscape-ref (use-ref nil)]
    (use-effect
     (fn []
       #?(:cljs
          (let [scroll-listener
                (fn [_]
                  (let [{:keys [bottom] :as rect}
                        (obj->clj (.getBoundingClientRect @landscape-ref)
                                  :keywordize-keys true)]
                    (if (>(* 4 16) bottom)
                      (set-header! true)
                      (set-header! false))))]
            (js/addEventListener "scroll" scroll-listener)
            (fn []
              (js/removeEventListener "scroll" scroll-listener)))))
     [set-header!])
    ($ :div.flex.flex-col.justify-center.items-center
       ($ :div.py-14.w-full.flex.justify-center.items-center.relative.cr-landscape.h-96
          {:ref landscape-ref}
          ($ :div
             ($ :div.title.text-9xl.text-cyan-50.text-opacity-80.relative
                ($ :span "Coruscation"))
             ($ :div.flex.items-end.flex-col.mt-3
                ($ :div.navigator-bar.flex.gap-3.text-xl.text-sky-900
                   (for [{:keys [href text]} temp-links]
                     ($ btn-wrapper {:key href}
                        ($ :div.px-1 {:key href}
                           ($ router/link {:href href}
                              text))))))))
       ($ :div.flex.flex-col.justify-center.items-center {:class "w-7/12"}
          ($ :div
             ($ :div.mb-8 {:class "px-3.5"}
                ($ :span.text-4xl "Latest Articles"))
             ($ :div.flex.justify-center.flex-col.gap-2.bg-opacity-100
                (for [blog blogs]
                  ($ blog-item {:preview blog
                                :key (:id blog)}))))))))

(def routes
  ["" {:controllers [{:start (fn [_]
                               (tap> [:start _]))
                      :stop (fn [_]
                              (tap> [:stop _]))}]}
   ["/index.html" {:component home}]
   ["/home.html" {:component home}]
   ["/" {:component home}]
   ["/template.html" {:component home}]
   ["/blogs/:id" {:component blog
                  :name ::blog
                  :depends #?(:clj {:route :assets/blogs
                                    :params-list-fn
                                    assets/fetch-blog-ids}
                              :cljs nil)}]
   ;; ["/about"]
   ])

(defui app [{:keys [initial-route]}]
  (let [[show-header? set-header!]
        (use-state
         (some #(= % initial-route)
               ["/" "/home.html" "/template.html"
                "/index.html"]))]
    (context-binding [*header-context* [show-header? set-header!]]
      ($ :div.app.h-full.w-full
         ($ :div.w-screen.h-screen.fixed.-z-50.bg-cyan-50.fixed)
         ($ :div.w-screen.h-20.z-50.fixed.transition-all {:class
                                                          (if show-header? "top-0" "-top-20")}
            ($ header))
         ($ router/router {:routes routes :initial-route initial-route}
            (let [{:keys [component] :as ctx} (use-context router/*router*)]
              ($ router/router-outlet
                 {:hook #?(:cljs (fn []
                                   (let [{:keys [component] :as router} (use-context router/*router*)]
                                     (use-effect
                                      (fn []
                                        (set-header! (not (= component home))))
                                      [component])))
                           :clj nil)})))))))
