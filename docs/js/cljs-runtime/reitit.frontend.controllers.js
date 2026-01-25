import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__76014,match){
var map__76015 = p__76014;
var map__76015__$1 = cljs.core.__destructure_map(map__76015);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76015__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76015__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76015__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5140__auto__ = identity;
if(cljs.core.truth_(and__5140__auto__)){
return parameters;
} else {
return and__5140__auto__;
}
})())){
} else {
throw (new Error((""+"Assert failed: "+"Use either :identity or :parameters for controller, not both."+"\n"+"(not (and identity parameters))")));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__76019(s__76020){
return (new cljs.core.LazySeq(null,(function (){
var s__76020__$1 = s__76020;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__76020__$1);
if(temp__5825__auto__){
var s__76020__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76020__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__76020__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__76022 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__76021 = (0);
while(true){
if((i__76021 < size__5627__auto__)){
var vec__76041 = cljs.core._nth(c__5626__auto__,i__76021);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76041,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76041,(1),null);
cljs.core.chunk_append(b__76022,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__76171 = (i__76021 + (1));
i__76021 = G__76171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76022),reitit$frontend$controllers$get_identity_$_iter__76019(cljs.core.chunk_rest(s__76020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76022),null);
}
} else {
var vec__76051 = cljs.core.first(s__76020__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76051,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76051,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__76019(cljs.core.rest(s__76020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
var G__76068 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__76068) : f.call(null,G__76068));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__76086_76194 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__76087_76195 = null;
var count__76088_76196 = (0);
var i__76089_76197 = (0);
while(true){
if((i__76089_76197 < count__76088_76196)){
var controller_76199 = chunk__76087_76195.cljs$core$IIndexed$_nth$arity$2(null,i__76089_76197);
reitit.frontend.controllers.apply_controller(controller_76199,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__76201 = seq__76086_76194;
var G__76202 = chunk__76087_76195;
var G__76203 = count__76088_76196;
var G__76204 = (i__76089_76197 + (1));
seq__76086_76194 = G__76201;
chunk__76087_76195 = G__76202;
count__76088_76196 = G__76203;
i__76089_76197 = G__76204;
continue;
} else {
var temp__5825__auto___76205 = cljs.core.seq(seq__76086_76194);
if(temp__5825__auto___76205){
var seq__76086_76206__$1 = temp__5825__auto___76205;
if(cljs.core.chunked_seq_QMARK_(seq__76086_76206__$1)){
var c__5673__auto___76207 = cljs.core.chunk_first(seq__76086_76206__$1);
var G__76209 = cljs.core.chunk_rest(seq__76086_76206__$1);
var G__76210 = c__5673__auto___76207;
var G__76211 = cljs.core.count(c__5673__auto___76207);
var G__76212 = (0);
seq__76086_76194 = G__76209;
chunk__76087_76195 = G__76210;
count__76088_76196 = G__76211;
i__76089_76197 = G__76212;
continue;
} else {
var controller_76213 = cljs.core.first(seq__76086_76206__$1);
reitit.frontend.controllers.apply_controller(controller_76213,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__76214 = cljs.core.next(seq__76086_76206__$1);
var G__76215 = null;
var G__76216 = (0);
var G__76217 = (0);
seq__76086_76194 = G__76214;
chunk__76087_76195 = G__76215;
count__76088_76196 = G__76216;
i__76089_76197 = G__76217;
continue;
}
} else {
}
}
break;
}

var seq__76115_76218 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__76116_76219 = null;
var count__76117_76220 = (0);
var i__76118_76221 = (0);
while(true){
if((i__76118_76221 < count__76117_76220)){
var controller_76222 = chunk__76116_76219.cljs$core$IIndexed$_nth$arity$2(null,i__76118_76221);
reitit.frontend.controllers.apply_controller(controller_76222,new cljs.core.Keyword(null,"start","start",-355208981));


var G__76225 = seq__76115_76218;
var G__76226 = chunk__76116_76219;
var G__76227 = count__76117_76220;
var G__76228 = (i__76118_76221 + (1));
seq__76115_76218 = G__76225;
chunk__76116_76219 = G__76226;
count__76117_76220 = G__76227;
i__76118_76221 = G__76228;
continue;
} else {
var temp__5825__auto___76229 = cljs.core.seq(seq__76115_76218);
if(temp__5825__auto___76229){
var seq__76115_76230__$1 = temp__5825__auto___76229;
if(cljs.core.chunked_seq_QMARK_(seq__76115_76230__$1)){
var c__5673__auto___76231 = cljs.core.chunk_first(seq__76115_76230__$1);
var G__76232 = cljs.core.chunk_rest(seq__76115_76230__$1);
var G__76233 = c__5673__auto___76231;
var G__76234 = cljs.core.count(c__5673__auto___76231);
var G__76235 = (0);
seq__76115_76218 = G__76232;
chunk__76116_76219 = G__76233;
count__76117_76220 = G__76234;
i__76118_76221 = G__76235;
continue;
} else {
var controller_76237 = cljs.core.first(seq__76115_76230__$1);
reitit.frontend.controllers.apply_controller(controller_76237,new cljs.core.Keyword(null,"start","start",-355208981));


var G__76238 = cljs.core.next(seq__76115_76230__$1);
var G__76239 = null;
var G__76240 = (0);
var G__76241 = (0);
seq__76115_76218 = G__76238;
chunk__76116_76219 = G__76239;
count__76117_76220 = G__76240;
i__76118_76221 = G__76241;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
