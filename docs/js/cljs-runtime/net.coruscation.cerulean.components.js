import "./cljs_env.js";
import "./cljs.core.js";
import "./uix.core.js";
goog.provide('net.coruscation.cerulean.components');
net.coruscation.cerulean.components.btn_wrapper = (function net$coruscation$cerulean$components$btn_wrapper(props__33561__auto__){
var props65990 = uix.core.glue_args(props__33561__auto__);
var map__65991 = props65990;
var map__65991__$1 = cljs.core.__destructure_map(map__65991);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65991__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var bg_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65991__$1,new cljs.core.Keyword(null,"bg-class","bg-class",-817462195));
var ___33560__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props65990);
var f__33562__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___65994 = net.coruscation.cerulean.components.btn_wrapper.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___65994)){
var f__33076__auto___65995 = temp__5823__auto___65994;
(f__33076__auto___65995.cljs$core$IFn$_invoke$arity$0 ? f__33076__auto___65995.cljs$core$IFn$_invoke$arity$0() : f__33076__auto___65995.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("relative group",class$)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("absolute w-0 h-full group-hover:bg-sky-200 group-hover:bg-opacity-70 group-hover:w-full group-hover:h-full transition-all duration-300",bg_class)}],[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(children,["div",null,"relative w-full h-full",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__65992 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__65993 = net.coruscation.cerulean.components.btn_wrapper;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__65993);

try{if(((cljs.core.map_QMARK_(props65990)) || ((props65990 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props65990)))+"\n"+"(clojure.core/or (clojure.core/map? props65990) (clojure.core/nil? props65990))")));
}

return f__33562__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__65992);
}} else {
return f__33562__auto__();
}
});

(net.coruscation.cerulean.components.btn_wrapper.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.components.btn_wrapper,"net.coruscation.cerulean.components/btn-wrapper");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__33085__auto___65996 = globalThis.uix.dev.signature_BANG_();
(sig__33085__auto___65996.cljs$core$IFn$_invoke$arity$4 ? sig__33085__auto___65996.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.components.btn_wrapper,"",null,null) : sig__33085__auto___65996.call(null,net.coruscation.cerulean.components.btn_wrapper,"",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.components.btn_wrapper,net.coruscation.cerulean.components.btn_wrapper.displayName);

(net.coruscation.cerulean.components.btn_wrapper.fast_refresh_signature = sig__33085__auto___65996);
} else {
}
} else {
}


//# sourceMappingURL=net.coruscation.cerulean.components.js.map
