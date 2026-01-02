(ns net.coruscation.cerulean.common.components
  (:require
   [uix.core :refer [$ defui use-state]])
  #?(:cljs (:require-macros [net.coruscation.cerulean.common.components :refer [define-markup]])))

(defmacro define-markup
  {:clj-kondo/lint-as 'clojure.core/def}
  [name extra-class text]
  (let [children-sym 'children
        class-sym 'class]
    `(defui ~name [{:keys [~children-sym ~class-sym]}]
       ($ :div {:class ~class-sym}
          ($ :div {:class ~(str "bg-stone-50 pl-4 py-2 border-l-3  my-4 " extra-class)}
             ($ :div {:class "font-semibold mb-1 text-gray-700"} ~text)
             ~children-sym)))))

(define-markup info "border-lime-500" "Info")
(define-markup note "border-sky-500" "Note")
(define-markup warn "border-rose-500" "Warning")
(define-markup warning "border-rose-500" "Warning")
(define-markup error "border-red-600" "Error")

(defui tabs [{:keys [tab-list default-table class]}]
  (let [[selected-tab set-selected-tab!] (use-state (or default-table
                                                        (:name (first tab-list))))]
    ($ :div.my-4.relative.border-sky-300.border-l-2.border-l-neutral-100 {:class class}
       ($ :div.my-0.flex.relative.bg-neutral-100
          (map (fn [{:keys [name]}]
                 ($ :button.font-medium.text-neutral-700.bg-neutral-50.py-1.px-2.border-t-2.border-neutral-50.min-w-28.bg-neutral-50.border-t-neutral-100
                    {:key name
                     :class (when (= name selected-tab)
                              " text-sky-800 border-sky-400 bg-sky-100 border-t-sky-400")
                     :on-click (fn []
                                 #?(:cljs
                                    (set-selected-tab! name)))}
                    name))
               tab-list))
       ($ :div.my-0.bg-neutral-50.overflow-hidden.px-2.h-full
          (:content (first (filter (fn [{:keys [name]}]
                                     (= name selected-tab))
                                   tab-list)))))))
(defui split-layout [{[left right] :children class :class}]
  ($ :div.grid.overflow-hidden {:class (str "grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 " class)}
     left
     right))

(defui showcase [{[left right] :children class :class showcase-name :showcase-name}]
  ($ split-layout {:class class}
     left
     ($ tabs {:tab-list [{:name (or showcase-name "Result")
                          :content right}]})))

(def default-exports '[note info warn warning error tabs split-layout showcase])
