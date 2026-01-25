import "./cljs_env.js";
import "./cljs.core.js";
import "./uix.core.js";
import "./reitit.core.js";
import "./net.coruscation.cerulean.utils.js";
import "./reitit.frontend.easy.js";
import "./reitit.frontend.controllers.js";
goog.provide('net.coruscation.cerulean.router');
net.coruscation.cerulean.router._STAR_router_STAR_ = uix.core.create_context.cljs$core$IFn$_invoke$arity$1(null);
net.coruscation.cerulean.router.router = (function net$coruscation$cerulean$router$router(props__41206__auto__){
var props134145 = uix.core.glue_args(props__41206__auto__);
var map__134163 = props134145;
var map__134163__$1 = cljs.core.__destructure_map(map__134163);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134163__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var initial_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134163__$1,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var ___41205__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props134145);
var f__41207__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___134212 = net.coruscation.cerulean.router.router.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___134212)){
var f__41121__auto___134213 = temp__5825__auto___134212;
(f__41121__auto___134213.cljs$core$IFn$_invoke$arity$0 ? f__41121__auto___134213.cljs$core$IFn$_invoke$arity$0() : f__41121__auto___134213.call(null));
} else {
}
} else {
}

var reitit_router = uix.hooks.alpha.use_memo((function() { 
var G__134214__delegate = function (args){
return reitit.core.router.cljs$core$IFn$_invoke$arity$1(routes);
};
var G__134214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__134215__i = 0, G__134215__a = new Array(arguments.length -  0);
while (G__134215__i < G__134215__a.length) {G__134215__a[G__134215__i] = arguments[G__134215__i + 0]; ++G__134215__i;}
  args = new cljs.core.IndexedSeq(G__134215__a,0,null);
} 
return G__134214__delegate.call(this,args);};
G__134214.cljs$lang$maxFixedArity = 0;
G__134214.cljs$lang$applyTo = (function (arglist__134216){
var args = cljs.core.seq(arglist__134216);
return G__134214__delegate(args);
});
G__134214.cljs$core$IFn$_invoke$arity$variadic = G__134214__delegate;
return G__134214;
})()
,[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes], null))]);
var vec__134165 = uix.core.use_state((function (){var or__5142__auto__ = initial_route;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return location.pathname;
}
})());
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134165,(0),null);
var set_route_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134165,(1),null);
var vec__134168 = uix.core.use_state(cljs.core.PersistentArrayMap.EMPTY);
var routing_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134168,(0),null);
var set_routing_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134168,(1),null);
var old_routers = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var map__134171 = uix.hooks.alpha.use_memo((function (){
return reitit.core.match_by_path(reitit_router,route);
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit_router,route], null))]);
var map__134171__$1 = cljs.core.__destructure_map(map__134171);
var routing_data = map__134171__$1;
var map__134172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134171__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__134172__$1 = cljs.core.__destructure_map(map__134172);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134172__$1,new cljs.core.Keyword(null,"component","component",1555936782));
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

return uix.compiler.alpha.component_element(net.coruscation.cerulean.router._STAR_router_STAR_.Provider,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"set-route!","set-route!",-1476951058),set_route_BANG_,new cljs.core.Keyword(null,"reitit-router","reitit-router",370296850),reitit_router,new cljs.core.Keyword(null,"routing-data","routing-data",-1393758098),routing_data,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"routing-state","routing-state",1886805218),routing_state,new cljs.core.Keyword(null,"set-routing-state!","set-routing-state!",1954874108),set_routing_state_BANG_], null)], null)],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(children,[],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__134175 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__134176 = net.coruscation.cerulean.router.router;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__134176);

try{if(((cljs.core.map_QMARK_(props134145)) || ((props134145 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props134145)))+"\n"+"(clojure.core/or (clojure.core/map? props134145) (clojure.core/nil? props134145))")));
}

return f__41207__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__134175);
}} else {
return f__41207__auto__();
}
});

(net.coruscation.cerulean.router.router.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.router.router,"net.coruscation.cerulean.router/router");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41130__auto___134223 = globalThis.uix.dev.signature_BANG_();
(sig__41130__auto___134223.cljs$core$IFn$_invoke$arity$4 ? sig__41130__auto___134223.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.router.router,"(use-memo (fn [& args] (r/router routes)) [routes])(use-state (or initial-route js/location.pathname))(use-state {})(use-ref nil)(use-memo (fn [] (r/match-by-path reitit-router route)) [reitit-router route])(use-effect (fn [] (let [history-listener (fn [_] (set-route! js/location.pathname))] (js/addEventListener \"popstate\" history-listener) (fn [] (js/removeEventListener \"popstate\" history-listener)))) [])(use-effect (fn [] (reset! old-routers (rfc/apply-controllers (clojure.core/deref old-routers) (update-in routing-data [:data] (fn [data] (merge data {:routing-state routing-state, :set-routing-state! set-routing-state!})))))) [routing-data routing-state])",null,null) : sig__41130__auto___134223.call(null,net.coruscation.cerulean.router.router,"(use-memo (fn [& args] (r/router routes)) [routes])(use-state (or initial-route js/location.pathname))(use-state {})(use-ref nil)(use-memo (fn [] (r/match-by-path reitit-router route)) [reitit-router route])(use-effect (fn [] (let [history-listener (fn [_] (set-route! js/location.pathname))] (js/addEventListener \"popstate\" history-listener) (fn [] (js/removeEventListener \"popstate\" history-listener)))) [])(use-effect (fn [] (reset! old-routers (rfc/apply-controllers (clojure.core/deref old-routers) (update-in routing-data [:data] (fn [data] (merge data {:routing-state routing-state, :set-routing-state! set-routing-state!})))))) [routing-data routing-state])",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.router.router,net.coruscation.cerulean.router.router.displayName);

(net.coruscation.cerulean.router.router.fast_refresh_signature = sig__41130__auto___134223);
} else {
}
} else {
}

net.coruscation.cerulean.router.router_outlet = (function net$coruscation$cerulean$router$router_outlet(props__41206__auto__){
var props134184 = uix.core.glue_args(props__41206__auto__);
var map__134185 = props134184;
var map__134185__$1 = cljs.core.__destructure_map(map__134185);
var hook = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134185__$1,new cljs.core.Keyword(null,"hook","hook",750265408));
var ___41205__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props134184);
var f__41207__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___134224 = net.coruscation.cerulean.router.router_outlet.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___134224)){
var f__41121__auto___134225 = temp__5825__auto___134224;
(f__41121__auto___134225.cljs$core$IFn$_invoke$arity$0 ? f__41121__auto___134225.cljs$core$IFn$_invoke$arity$0() : f__41121__auto___134225.call(null));
} else {
}
} else {
}

var map__134188 = uix.core.use_context(net.coruscation.cerulean.router._STAR_router_STAR_);
var map__134188__$1 = cljs.core.__destructure_map(map__134188);
var router_data = map__134188__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134188__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var routing_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134188__$1,new cljs.core.Keyword(null,"routing-data","routing-data",-1393758098));
if(cljs.core.truth_(hook)){
(hook.cljs$core$IFn$_invoke$arity$0 ? hook.cljs$core$IFn$_invoke$arity$0() : hook.call(null));
} else {
}

return uix.compiler.alpha.component_element(component,uix.compiler.attributes.interpret_props(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra-data","extra-data",915012813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(routing_data)),routing_data], 0))),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__134189 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__134190 = net.coruscation.cerulean.router.router_outlet;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__134190);

try{if(((cljs.core.map_QMARK_(props134184)) || ((props134184 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props134184)))+"\n"+"(clojure.core/or (clojure.core/map? props134184) (clojure.core/nil? props134184))")));
}

return f__41207__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__134189);
}} else {
return f__41207__auto__();
}
});

(net.coruscation.cerulean.router.router_outlet.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.router.router_outlet,"net.coruscation.cerulean.router/router-outlet");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41130__auto___134228 = globalThis.uix.dev.signature_BANG_();
(sig__41130__auto___134228.cljs$core$IFn$_invoke$arity$4 ? sig__41130__auto___134228.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.router.router_outlet,"(utils/use-context *router*)",null,null) : sig__41130__auto___134228.call(null,net.coruscation.cerulean.router.router_outlet,"(utils/use-context *router*)",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.router.router_outlet,net.coruscation.cerulean.router.router_outlet.displayName);

(net.coruscation.cerulean.router.router_outlet.fast_refresh_signature = sig__41130__auto___134228);
} else {
}
} else {
}

net.coruscation.cerulean.router.navigate_to_BANG_ = (function net$coruscation$cerulean$router$navigate_to_BANG_(href){
if(cljs.core.truth_(cljs.core.re_matches(/^https?:\/\/.*$/,href))){
return (window.location.href = href);
} else {
history.pushState(undefined,undefined,href);

return dispatchEvent((new PopStateEvent("popstate",undefined)));
}
});
net.coruscation.cerulean.router.link = (function net$coruscation$cerulean$router$link(props__41206__auto__){
var props134200 = uix.core.glue_args(props__41206__auto__);
var map__134201 = props134200;
var map__134201__$1 = cljs.core.__destructure_map(map__134201);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134201__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134201__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134201__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var external_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134201__$1,new cljs.core.Keyword(null,"external?","external?",579765478));
var ___41205__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props134200);
var f__41207__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___134231 = net.coruscation.cerulean.router.link.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___134231)){
var f__41121__auto___134232 = temp__5825__auto___134231;
(f__41121__auto___134232.cljs$core$IFn$_invoke$arity$0 ? f__41121__auto___134232.cljs$core$IFn$_invoke$arity$0() : f__41121__auto___134232.call(null));
} else {
}
} else {
}

var onclick = (function (e){
if(cljs.core.not(external_QMARK_)){
e.preventDefault();

return net.coruscation.cerulean.router.navigate_to_BANG_(href);
} else {
return null;
}
});
return uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,class$),'onClick':onclick,'style':uix.compiler.attributes.convert_props(style,[],true),'href':uix.compiler.attributes.keyword__GT_string(href)}],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__134204 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__134205 = net.coruscation.cerulean.router.link;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__134205);

try{if(((cljs.core.map_QMARK_(props134200)) || ((props134200 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props134200)))+"\n"+"(clojure.core/or (clojure.core/map? props134200) (clojure.core/nil? props134200))")));
}

return f__41207__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__134204);
}} else {
return f__41207__auto__();
}
});

(net.coruscation.cerulean.router.link.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.router.link,"net.coruscation.cerulean.router/link");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41130__auto___134233 = globalThis.uix.dev.signature_BANG_();
(sig__41130__auto___134233.cljs$core$IFn$_invoke$arity$4 ? sig__41130__auto___134233.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.router.link,"",null,null) : sig__41130__auto___134233.call(null,net.coruscation.cerulean.router.link,"",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.router.link,net.coruscation.cerulean.router.link.displayName);

(net.coruscation.cerulean.router.link.fast_refresh_signature = sig__41130__auto___134233);
} else {
}
} else {
}


//# sourceMappingURL=net.coruscation.cerulean.router.js.map
