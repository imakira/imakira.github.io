(ns net.coruscation.cerulean.common.components
  (:require
   [uix.core :refer [$ defui use-state]])
  #?(:cljs (:require-macros [net.coruscation.cerulean.common.components :refer [define-markup]])))

(defmacro define-markup
  {:clj-kondo/lint-as 'clojure.core/def}
  [name extra-class text]
  (let [children-sym 'children]
    `(defui ~name [{:keys [~children-sym]}]
       ($ :div
          ($ :div {:class ~(str "bg-stone-50 pl-4 py-2 border-l-3  my-4 " extra-class)}
             ($ :div {:class "font-semibold mb-1 text-gray-700"} ~text)
             ~children-sym)))))

(define-markup info "border-lime-500" "Info")
(define-markup note "border-sky-500" "Note")
(define-markup warn "border-rose-500" "Warn")
(define-markup error "border-red-600" "Error")

(defui tabs [{:keys [tab-list default-table]}]
  (let [[selected-tab set-selected-tab!] (use-state (or default-table
                                                        (:name (first tab-list))))]
    ($ :div.my-4.relative.border-sky-300
       ($ :div.my-0.flex.relative
          (map (fn [{:keys [name]}]
                 ($ :button.font-medium.text-neutral-700.bg-neutral-50.py-1.px-2.border-l-2.border-neutral-50.min-w-28.bg-neutral-50
                    {:key name
                     :class (when (= name selected-tab)
                              " text-sky-800 border-sky-400 bg-sky-100")
                     :on-click (fn []
                                 #?(:cljs
                                    (set-selected-tab! name)))}
                    name))
               tab-list))
       ($ :div.my-0.bg-neutral-50.overflow-hidden.px-2
          ($ (:component (first (filter (fn [{:keys [name]}]
                                          (= name selected-tab))
                                        tab-list))))))))

(def default-exports '[note info warn error tabs])
