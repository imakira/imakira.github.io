(ns net.coruscation.cerulean.render.context-commons)

(defn extra-script-global-this-name [module]
  (str "__" module))
