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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__103168,match){
var map__103169 = p__103168;
var map__103169__$1 = cljs.core.__destructure_map(map__103169);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103169__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103169__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103169__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5023__auto__ = identity;
if(cljs.core.truth_(and__5023__auto__)){
return parameters;
} else {
return and__5023__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__103172(s__103173){
return (new cljs.core.LazySeq(null,(function (){
var s__103173__$1 = s__103173;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__103173__$1);
if(temp__5823__auto__){
var s__103173__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__103173__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__103173__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__103175 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__103174 = (0);
while(true){
if((i__103174 < size__5502__auto__)){
var vec__103182 = cljs.core._nth(c__5501__auto__,i__103174);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103182,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103182,(1),null);
cljs.core.chunk_append(b__103175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__103238 = (i__103174 + (1));
i__103174 = G__103238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__103175),reitit$frontend$controllers$get_identity_$_iter__103172(cljs.core.chunk_rest(s__103173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__103175),null);
}
} else {
var vec__103186 = cljs.core.first(s__103173__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103186,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103186,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__103172(cljs.core.rest(s__103173__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(parameters);
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
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var G__103195 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103195) : f.call(null,G__103195));
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
var seq__103211_103248 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__103212_103249 = null;
var count__103213_103250 = (0);
var i__103214_103251 = (0);
while(true){
if((i__103214_103251 < count__103213_103250)){
var controller_103252 = chunk__103212_103249.cljs$core$IIndexed$_nth$arity$2(null,i__103214_103251);
reitit.frontend.controllers.apply_controller(controller_103252,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__103254 = seq__103211_103248;
var G__103255 = chunk__103212_103249;
var G__103256 = count__103213_103250;
var G__103257 = (i__103214_103251 + (1));
seq__103211_103248 = G__103254;
chunk__103212_103249 = G__103255;
count__103213_103250 = G__103256;
i__103214_103251 = G__103257;
continue;
} else {
var temp__5823__auto___103258 = cljs.core.seq(seq__103211_103248);
if(temp__5823__auto___103258){
var seq__103211_103259__$1 = temp__5823__auto___103258;
if(cljs.core.chunked_seq_QMARK_(seq__103211_103259__$1)){
var c__5548__auto___103260 = cljs.core.chunk_first(seq__103211_103259__$1);
var G__103261 = cljs.core.chunk_rest(seq__103211_103259__$1);
var G__103262 = c__5548__auto___103260;
var G__103263 = cljs.core.count(c__5548__auto___103260);
var G__103264 = (0);
seq__103211_103248 = G__103261;
chunk__103212_103249 = G__103262;
count__103213_103250 = G__103263;
i__103214_103251 = G__103264;
continue;
} else {
var controller_103265 = cljs.core.first(seq__103211_103259__$1);
reitit.frontend.controllers.apply_controller(controller_103265,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__103266 = cljs.core.next(seq__103211_103259__$1);
var G__103267 = null;
var G__103268 = (0);
var G__103269 = (0);
seq__103211_103248 = G__103266;
chunk__103212_103249 = G__103267;
count__103213_103250 = G__103268;
i__103214_103251 = G__103269;
continue;
}
} else {
}
}
break;
}

var seq__103220_103270 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__103221_103271 = null;
var count__103222_103272 = (0);
var i__103223_103273 = (0);
while(true){
if((i__103223_103273 < count__103222_103272)){
var controller_103274 = chunk__103221_103271.cljs$core$IIndexed$_nth$arity$2(null,i__103223_103273);
reitit.frontend.controllers.apply_controller(controller_103274,new cljs.core.Keyword(null,"start","start",-355208981));


var G__103275 = seq__103220_103270;
var G__103276 = chunk__103221_103271;
var G__103277 = count__103222_103272;
var G__103278 = (i__103223_103273 + (1));
seq__103220_103270 = G__103275;
chunk__103221_103271 = G__103276;
count__103222_103272 = G__103277;
i__103223_103273 = G__103278;
continue;
} else {
var temp__5823__auto___103279 = cljs.core.seq(seq__103220_103270);
if(temp__5823__auto___103279){
var seq__103220_103280__$1 = temp__5823__auto___103279;
if(cljs.core.chunked_seq_QMARK_(seq__103220_103280__$1)){
var c__5548__auto___103281 = cljs.core.chunk_first(seq__103220_103280__$1);
var G__103282 = cljs.core.chunk_rest(seq__103220_103280__$1);
var G__103283 = c__5548__auto___103281;
var G__103284 = cljs.core.count(c__5548__auto___103281);
var G__103285 = (0);
seq__103220_103270 = G__103282;
chunk__103221_103271 = G__103283;
count__103222_103272 = G__103284;
i__103223_103273 = G__103285;
continue;
} else {
var controller_103286 = cljs.core.first(seq__103220_103280__$1);
reitit.frontend.controllers.apply_controller(controller_103286,new cljs.core.Keyword(null,"start","start",-355208981));


var G__103287 = cljs.core.next(seq__103220_103280__$1);
var G__103288 = null;
var G__103289 = (0);
var G__103290 = (0);
seq__103220_103270 = G__103287;
chunk__103221_103271 = G__103288;
count__103222_103272 = G__103289;
i__103223_103273 = G__103290;
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
