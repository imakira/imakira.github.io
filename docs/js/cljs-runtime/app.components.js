goog.provide('app.components');
app.components.btn_wrapper = (function app$components$btn_wrapper(props__31932__auto__){
var props63572 = uix.core.glue_args(props__31932__auto__);
var vec__63573 = [props63572];
var map__63576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63573,(0),null);
var map__63576__$1 = cljs.core.__destructure_map(map__63576);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63576__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var bg_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63576__$1,new cljs.core.Keyword(null,"bg-class","bg-class",-817462195));
var ___31931__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props63572);
var f__31933__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___63579 = app.components.btn_wrapper.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63579)){
var f__31844__auto___63580 = temp__5823__auto___63579;
(f__31844__auto___63580.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63580.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63580.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("relative group",class$)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("absolute w-0 h-full group-hover:bg-sky-200 group-hover:bg-opacity-70 group-hover:w-full group-hover:h-full transition-all duration-300",bg_class)}],[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(children,["div",null,"relative w-full h-full",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63577 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63578 = app.components.btn_wrapper;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63578);

try{if(((cljs.core.map_QMARK_(props63572)) || ((props63572 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props63572)].join(''),"\n","(clojure.core/or (clojure.core/map? props63572) (clojure.core/nil? props63572))"].join('')));
}

return f__31933__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63577);
}} else {
return f__31933__auto__();
}
});

(app.components.btn_wrapper.uix_component_QMARK_ = true);

uix.core.set_display_name(app.components.btn_wrapper,"app.components/btn-wrapper");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63581 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63581.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63581.cljs$core$IFn$_invoke$arity$4(app.components.btn_wrapper,"",null,null) : sig__31853__auto___63581.call(null,app.components.btn_wrapper,"",null,null));

window.uix.dev.register_BANG_(app.components.btn_wrapper,app.components.btn_wrapper.displayName);

(app.components.btn_wrapper.fast_refresh_signature = sig__31853__auto___63581);
} else {
}
} else {
}


//# sourceMappingURL=app.components.js.map
