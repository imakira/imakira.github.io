(ns app.pages
  (:require
   [clojure.core.async :as a]
   [uix.core :as uix :refer
    [defui use-state use-effect use-context $]]
   [app.router :as router]
   [app.utils :refer [use-asset] :as utils]
   [reitit.core :as r]
   [stylefy.core :as stylefy :refer [use-style]]
   #?@(:cljs [[uix.core :refer [create-context]]])))


(defui blog [{{{:keys [id]} :path-params}
              :routing-data :as routing-data}]
  (let [blog-asset (use-asset (str "blog/" id))]
    ($ :div
       (:body blog-asset))))

(defui blog-item [{:keys [preview onclick]}]
  (let [{:keys [title id tags submmit-date modified-date author]} preview]
    ($ :div.blog-item {:class ""}
       ($ :div.relative.group
          ($ :div.absolute.w-0.h-full.group-hover:bg-amber-200.group-hover:bg-opacity-70.group-hover:w-full.group-hover:h-full.transition-all.duration-300)
          ($ :div.relative.flex.items-center.gap-4.p-4
             ($ :div
                ($ :span.text-xl.text-slate-600
                   "Mar 5"))
             ($ :div {:class ""}
                ($ router/link {:href (str "blogs/" id)
                                :class "text-3xl text-sky-950"} ($ :h1 title))))))))

(def temp-links [{:href "home" :text "HOME"}
                 {:href "about" :text "ABOUT"}
                 {:href "PROJECTS" :text "PROJECTS"}])

(defui home [_]
  (let [blogs  (use-asset "blogs")]
    ($ :div.flex.flex-col.justify-center.items-center
       ($ :div.flex.flex-col.justify-center.items-center {:class "w-7/12"}
          ($ :div.header.my-12
             ($ :div.title.text-9xl.text-cyan-50.text-opacity-80
                ($ :span "Cerulean"))
             ($ :div.flex.items-end.flex-col.mt-2
                ($ :div.navigator-bar.flex.gap-3.text-xl.text-sky-900
                   (for [{:keys [href text]} temp-links]
                     ($ router/link {:href href :key href}
                        text)))))
          ($ :div
             ($ :div.mb-8 {:class "px-3.5"}
                ($ :span.text-4xl "Latest Articles"))
             ($ :div.flex.justify-center.flex-col.gap-2.bg-opacity-100
                (for [blog blogs]
                  ($ blog-item {:preview blog
                                :key (:id blog)}))))))))

(def routes
  [["/index.html" {:component home}]
   ["/home.html" {:component home}]
   ["/" {:component home}]
   ["/template.html" {:component home}]
   ["/blogs/:id" {:component blog}]
   ["/about"]])

(defui app [{:keys [initial-route]}]
  ($ :div.app.h-full.w-full
     ($ :div.w-screen.h-screen.fixed.cr-gradient.-z-50)
     ($ router/router {:routes routes :initial-route initial-route}
        ($ router/router-outlet))))
