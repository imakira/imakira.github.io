import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.spec.alpha.js";
import "./clojure.edn.js";
import "./uix.core.js";
import "./uix.dom.js";
import "./net.coruscation.cerulean.common.pages.js";
import "./cljs.core.async.js";
goog.provide('net.coruscation.cerulean.client');
if((typeof net !== 'undefined') && (typeof net.coruscation !== 'undefined') && (typeof net.coruscation.cerulean !== 'undefined') && (typeof net.coruscation.cerulean.client !== 'undefined') && (typeof net.coruscation.cerulean.client.root !== 'undefined')){
} else {
net.coruscation.cerulean.client.root = (new cljs.core.Delay((function (){
return uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("root"));
}),null));
}
net.coruscation.cerulean.client.render = (function net$coruscation$cerulean$client$render(){
return uix.dom.render_root(uix.compiler.alpha.component_element(net.coruscation.cerulean.common.pages.app,[null],[]),cljs.core.deref(net.coruscation.cerulean.client.root));
});
net.coruscation.cerulean.client.init = (function net$coruscation$cerulean$client$init(){
if(cljs.core.truth_(window.__cerulean_rehydrate)){
return uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$2(document.getElementById("root"),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.pages.app,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),location.pathname], null)],[]));
} else {
return net.coruscation.cerulean.client.render();
}
});
goog.exportSymbol('net.coruscation.cerulean.client.init', net.coruscation.cerulean.client.init);

//# sourceMappingURL=net.coruscation.cerulean.client.js.map
