goog.provide('app.components');
app.components.btn_wrapper = (function app$components$btn_wrapper(props__11048__auto__){
var props47709 = uix.core.glue_args(props__11048__auto__);
var vec__47710 = [props47709];
var map__47713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47710,(0),null);
var map__47713__$1 = cljs.core.__destructure_map(map__47713);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47713__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var bg_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47713__$1,new cljs.core.Keyword(null,"bg-class","bg-class",-817462195));
var ___11047__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props47709);
var f__11049__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___47716 = app.components.btn_wrapper.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___47716)){
var f__10960__auto___47717 = temp__5823__auto___47716;
(f__10960__auto___47717.cljs$core$IFn$_invoke$arity$0 ? f__10960__auto___47717.cljs$core$IFn$_invoke$arity$0() : f__10960__auto___47717.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("relative group",class$)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("absolute w-0 h-full group-hover:bg-sky-200 group-hover:bg-opacity-70 group-hover:w-full group-hover:h-full transition-all duration-300",bg_class)}],[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(children,["div",null,"relative w-full h-full",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__47714 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__47715 = app.components.btn_wrapper;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__47715);

try{if(((cljs.core.map_QMARK_(props47709)) || ((props47709 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props47709)].join(''),"\n","(clojure.core/or (clojure.core/map? props47709) (clojure.core/nil? props47709))"].join('')));
}

return f__11049__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__47714);
}} else {
return f__11049__auto__();
}
});

(app.components.btn_wrapper.uix_component_QMARK_ = true);

uix.core.set_display_name(app.components.btn_wrapper,"app.components/btn-wrapper");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__10969__auto___47718 = window.uix.dev.signature_BANG_();
(sig__10969__auto___47718.cljs$core$IFn$_invoke$arity$4 ? sig__10969__auto___47718.cljs$core$IFn$_invoke$arity$4(app.components.btn_wrapper,"",null,null) : sig__10969__auto___47718.call(null,app.components.btn_wrapper,"",null,null));

window.uix.dev.register_BANG_(app.components.btn_wrapper,app.components.btn_wrapper.displayName);

(app.components.btn_wrapper.fast_refresh_signature = sig__10969__auto___47718);
} else {
}
} else {
}


//# sourceMappingURL=app.components.js.map
