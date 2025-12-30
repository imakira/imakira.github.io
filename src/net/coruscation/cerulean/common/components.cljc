(ns net.coruscation.cerulean.common.components
  (:require
   [uix.core :refer [$ defui]])
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

(def default-exports '[note info warn error])
