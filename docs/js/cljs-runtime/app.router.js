goog.provide('app.router');
app.router._STAR_router_STAR_ = uix.core.create_context.cljs$core$IFn$_invoke$arity$1(null);
app.router.router = (function app$router$router(props__11048__auto__){
var props47651 = uix.core.glue_args(props__11048__auto__);
var vec__47652 = [props47651];
var map__47655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47652,(0),null);
var map__47655__$1 = cljs.core.__destructure_map(map__47655);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var initial_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var ___11047__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props47651);
var f__11049__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___47696 = app.router.router.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___47696)){
var f__10960__auto___47697 = temp__5823__auto___47696;
(f__10960__auto___47697.cljs$core$IFn$_invoke$arity$0 ? f__10960__auto___47697.cljs$core$IFn$_invoke$arity$0() : f__10960__auto___47697.call(null));
} else {
}
} else {
}

var reitit_router = uix.hooks.alpha.use_memo((function() { 
var G__47698__delegate = function (args){
return reitit.core.router.cljs$core$IFn$_invoke$arity$1(routes);
};
var G__47698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47699__i = 0, G__47699__a = new Array(arguments.length -  0);
while (G__47699__i < G__47699__a.length) {G__47699__a[G__47699__i] = arguments[G__47699__i + 0]; ++G__47699__i;}
  args = new cljs.core.IndexedSeq(G__47699__a,0,null);
} 
return G__47698__delegate.call(this,args);};
G__47698.cljs$lang$maxFixedArity = 0;
G__47698.cljs$lang$applyTo = (function (arglist__47700){
var args = cljs.core.seq(arglist__47700);
return G__47698__delegate(args);
});
G__47698.cljs$core$IFn$_invoke$arity$variadic = G__47698__delegate;
return G__47698;
})()
,[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes], null))]);
var vec__47659 = uix.core.use_state((function (){var or__5025__auto__ = initial_route;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return location.pathname;
}
})());
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47659,(0),null);
var set_route_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47659,(1),null);
var vec__47662 = uix.core.use_state(cljs.core.PersistentArrayMap.EMPTY);
var routing_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47662,(0),null);
var set_routing_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47662,(1),null);
var old_routers = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var map__47665 = uix.hooks.alpha.use_memo((function (){
return reitit.core.match_by_path(reitit_router,route);
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit_router,route], null))]);
var map__47665__$1 = cljs.core.__destructure_map(map__47665);
var routing_data = map__47665__$1;
var map__47666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47665__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47666__$1 = cljs.core.__destructure_map(map__47666);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47666__$1,new cljs.core.Keyword(null,"component","component",1555936782));
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var history_listener = (function (_){
return (set_route_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_route_BANG_.cljs$core$IFn$_invoke$arity$1(location.pathname) : set_route_BANG_.call(null,location.pathname));
});
addEventListener("popstate",history_listener);

return (function (){
return removeEventListener("popstate",history_listener);
});
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return cljs.core.reset_BANG_(old_routers,reitit.frontend.controllers.apply_controllers(cljs.core.deref(old_routers),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(routing_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),(function (data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routing-state","routing-state",1886805218),routing_state,new cljs.core.Keyword(null,"set-routing-state!","set-routing-state!",1954874108),set_routing_state_BANG_], null)], 0));
}))));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routing_data,routing_state], null))]);

return uix.compiler.alpha.component_element(app.router._STAR_router_STAR_.Provider,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"set-route!","set-route!",-1476951058),set_route_BANG_,new cljs.core.Keyword(null,"reitit-router","reitit-router",370296850),reitit_router,new cljs.core.Keyword(null,"routing-data","routing-data",-1393758098),routing_data,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"routing-state","routing-state",1886805218),routing_state,new cljs.core.Keyword(null,"set-routing-state!","set-routing-state!",1954874108),set_routing_state_BANG_], null)], null)],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(children,[],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__47676 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__47677 = app.router.router;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__47677);

try{if(((cljs.core.map_QMARK_(props47651)) || ((props47651 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props47651)].join(''),"\n","(clojure.core/or (clojure.core/map? props47651) (clojure.core/nil? props47651))"].join('')));
}

return f__11049__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__47676);
}} else {
return f__11049__auto__();
}
});

(app.router.router.uix_component_QMARK_ = true);

uix.core.set_display_name(app.router.router,"app.router/router");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__10969__auto___47701 = window.uix.dev.signature_BANG_();
(sig__10969__auto___47701.cljs$core$IFn$_invoke$arity$4 ? sig__10969__auto___47701.cljs$core$IFn$_invoke$arity$4(app.router.router,"(use-memo (fn [& args] (r/router routes)) [routes])(use-state (or initial-route js/location.pathname))(use-state {})(use-ref nil)(use-memo (fn [] (r/match-by-path reitit-router route)) [reitit-router route])(use-effect (fn [] (let [history-listener (fn [_] (set-route! js/location.pathname))] (js/addEventListener \"popstate\" history-listener) (fn [] (js/removeEventListener \"popstate\" history-listener)))) [])(use-effect (fn [] (reset! old-routers (rfc/apply-controllers (clojure.core/deref old-routers) (update-in routing-data [:data] (fn [data] (merge data {:routing-state routing-state, :set-routing-state! set-routing-state!})))))) [routing-data routing-state])",null,null) : sig__10969__auto___47701.call(null,app.router.router,"(use-memo (fn [& args] (r/router routes)) [routes])(use-state (or initial-route js/location.pathname))(use-state {})(use-ref nil)(use-memo (fn [] (r/match-by-path reitit-router route)) [reitit-router route])(use-effect (fn [] (let [history-listener (fn [_] (set-route! js/location.pathname))] (js/addEventListener \"popstate\" history-listener) (fn [] (js/removeEventListener \"popstate\" history-listener)))) [])(use-effect (fn [] (reset! old-routers (rfc/apply-controllers (clojure.core/deref old-routers) (update-in routing-data [:data] (fn [data] (merge data {:routing-state routing-state, :set-routing-state! set-routing-state!})))))) [routing-data routing-state])",null,null));

window.uix.dev.register_BANG_(app.router.router,app.router.router.displayName);

(app.router.router.fast_refresh_signature = sig__10969__auto___47701);
} else {
}
} else {
}

app.router.router_outlet = (function app$router$router_outlet(props__11048__auto__){
var props47680 = uix.core.glue_args(props__11048__auto__);
var vec__47681 = [props47680];
var map__47684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47681,(0),null);
var map__47684__$1 = cljs.core.__destructure_map(map__47684);
var hook = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47684__$1,new cljs.core.Keyword(null,"hook","hook",750265408));
var ___11047__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props47680);
var f__11049__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___47702 = app.router.router_outlet.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___47702)){
var f__10960__auto___47703 = temp__5823__auto___47702;
(f__10960__auto___47703.cljs$core$IFn$_invoke$arity$0 ? f__10960__auto___47703.cljs$core$IFn$_invoke$arity$0() : f__10960__auto___47703.call(null));
} else {
}
} else {
}

var map__47685 = uix.core.use_context(app.router._STAR_router_STAR_);
var map__47685__$1 = cljs.core.__destructure_map(map__47685);
var router_data = map__47685__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47685__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var routing_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47685__$1,new cljs.core.Keyword(null,"routing-data","routing-data",-1393758098));
if(cljs.core.truth_(hook)){
(hook.cljs$core$IFn$_invoke$arity$0 ? hook.cljs$core$IFn$_invoke$arity$0() : hook.call(null));
} else {
}

return uix.compiler.alpha.component_element(component,uix.compiler.attributes.interpret_props(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra-data","extra-data",915012813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(routing_data)),routing_data], 0))),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__47686 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__47687 = app.router.router_outlet;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__47687);

try{if(((cljs.core.map_QMARK_(props47680)) || ((props47680 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props47680)].join(''),"\n","(clojure.core/or (clojure.core/map? props47680) (clojure.core/nil? props47680))"].join('')));
}

return f__11049__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__47686);
}} else {
return f__11049__auto__();
}
});

(app.router.router_outlet.uix_component_QMARK_ = true);

uix.core.set_display_name(app.router.router_outlet,"app.router/router-outlet");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__10969__auto___47704 = window.uix.dev.signature_BANG_();
(sig__10969__auto___47704.cljs$core$IFn$_invoke$arity$4 ? sig__10969__auto___47704.cljs$core$IFn$_invoke$arity$4(app.router.router_outlet,"(utils/use-context *router*)",null,null) : sig__10969__auto___47704.call(null,app.router.router_outlet,"(utils/use-context *router*)",null,null));

window.uix.dev.register_BANG_(app.router.router_outlet,app.router.router_outlet.displayName);

(app.router.router_outlet.fast_refresh_signature = sig__10969__auto___47704);
} else {
}
} else {
}

app.router.navigate_to_BANG_ = (function app$router$navigate_to_BANG_(href){
if(cljs.core.truth_(cljs.core.re_matches(/^https?:\/\/.*$/,href))){
return (window.location.href = href);
} else {
history.pushState(undefined,undefined,href);

return dispatchEvent((new PopStateEvent("popstate",undefined)));
}
});
app.router.link = (function app$router$link(props__11048__auto__){
var props47689 = uix.core.glue_args(props__11048__auto__);
var vec__47690 = [props47689];
var map__47693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47690,(0),null);
var map__47693__$1 = cljs.core.__destructure_map(map__47693);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47693__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47693__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47693__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var ___11047__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props47689);
var f__11049__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___47705 = app.router.link.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___47705)){
var f__10960__auto___47706 = temp__5823__auto___47705;
(f__10960__auto___47706.cljs$core$IFn$_invoke$arity$0 ? f__10960__auto___47706.cljs$core$IFn$_invoke$arity$0() : f__10960__auto___47706.call(null));
} else {
}
} else {
}

var onclick = (function (e){
e.preventDefault();

return app.router.navigate_to_BANG_(href);
});
return uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,class$),'onClick':onclick,'style':uix.compiler.attributes.convert_props(style,[],true),'href':uix.compiler.attributes.keyword__GT_string(href)}],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__47694 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__47695 = app.router.link;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__47695);

try{if(((cljs.core.map_QMARK_(props47689)) || ((props47689 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props47689)].join(''),"\n","(clojure.core/or (clojure.core/map? props47689) (clojure.core/nil? props47689))"].join('')));
}

return f__11049__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__47694);
}} else {
return f__11049__auto__();
}
});

(app.router.link.uix_component_QMARK_ = true);

uix.core.set_display_name(app.router.link,"app.router/link");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__10969__auto___47707 = window.uix.dev.signature_BANG_();
(sig__10969__auto___47707.cljs$core$IFn$_invoke$arity$4 ? sig__10969__auto___47707.cljs$core$IFn$_invoke$arity$4(app.router.link,"",null,null) : sig__10969__auto___47707.call(null,app.router.link,"",null,null));

window.uix.dev.register_BANG_(app.router.link,app.router.link.displayName);

(app.router.link.fast_refresh_signature = sig__10969__auto___47707);
} else {
}
} else {
}


//# sourceMappingURL=app.router.js.map
