import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./meta_merge.core.js";
import "./reitit.exception.js";
import "./reitit.trie.js";
goog.provide('reitit.impl');
reitit.impl._match = (function reitit$impl$_match(path,path_map){
var match = (function reitit$impl$_match_$_match(x,f){
if(cljs.core.fn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,f);
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__75845){
var vec__75849 = p__75845;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75849,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75849,(1),null);
if((((cljs.core.count(path) >= cljs.core.count(ps))) && (cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(match,path,ps))))){
return cljs.core.reduced(f);
} else {
return null;
}
}),null,path_map);
});
reitit.impl._path_vals = (function reitit$impl$_path_vals(m,path_map){
var _path_vals = (function reitit$impl$_path_vals_$__path_vals(l,p,m__$1){
return cljs.core.reduce_kv((function (l__$1,k,v){
var p_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k);
var f = reitit.impl._match(p_SINGLEQUOTE_,path_map);
if(cljs.core.truth_(f)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_SINGLEQUOTE_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));
} else {
if(((cljs.core.map_QMARK_(v)) && ((((!(cljs.core.record_QMARK_(v)))) && (cljs.core.seq(v)))))){
return reitit$impl$_path_vals_$__path_vals(l__$1,p_SINGLEQUOTE_,v);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_SINGLEQUOTE_,v], null));

}
}
}),l,m__$1);
});
return _path_vals(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});
reitit.impl._copy_meta = (function reitit$impl$_copy_meta(to,from){
var _with_meta = (function reitit$impl$_copy_meta_$__with_meta(x,m){
try{return cljs.core.with_meta(x,m);
}catch (e75897){if((e75897 instanceof Error)){
var _ = e75897;
return x;
} else {
throw e75897;

}
}});
var _copy = (function reitit$impl$_copy_meta_$__copy(l,p,m){
return cljs.core.reduce_kv((function (l__$1,k,v){
var p_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k);
var m_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(cljs.core.meta(v)))?cljs.core.meta(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(from,p_SINGLEQUOTE_)):null);
if(cljs.core.truth_(m_SINGLEQUOTE_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(l__$1,p_SINGLEQUOTE_,_with_meta,m_SINGLEQUOTE_);
} else {
if(((cljs.core.map_QMARK_(v)) && ((((!(cljs.core.record_QMARK_(v)))) && (cljs.core.seq(v)))))){
return reitit$impl$_copy_meta_$__copy(l__$1,p_SINGLEQUOTE_,v);
} else {
return l__$1;

}
}
}),l,m);
});
return _copy(to,cljs.core.PersistentVector.EMPTY,to);
});
reitit.impl._assoc_in_path_vals = (function reitit$impl$_assoc_in_path_vals(c){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.assoc_in),cljs.core.PersistentArrayMap.EMPTY,c);
});
reitit.impl.path_update = (function reitit$impl$path_update(m,path_map){
return reitit.impl._copy_meta(reitit.impl._assoc_in_path_vals(reitit.impl._path_vals(m,path_map)),m);
});
reitit.impl.accumulator_QMARK_ = (function reitit$impl$accumulator_QMARK_(x){
return new cljs.core.Keyword("reitit.impl","accumulator","reitit.impl/accumulator",1345422212).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
});
reitit.impl.accumulate = (function reitit$impl$accumulate(var_args){
var G__75934 = arguments.length;
switch (G__75934) {
case 1:
return reitit.impl.accumulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.impl.accumulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.impl.accumulate.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.not(reitit.impl.accumulator_QMARK_(x))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("reitit.impl","accumulator","reitit.impl/accumulator",1345422212),true], null));
} else {
return x;
}
}));

(reitit.impl.accumulate.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(reitit.impl.accumulate.cljs$core$IFn$_invoke$arity$1(x),y);
}));

(reitit.impl.accumulate.cljs$lang$maxFixedArity = 2);

reitit.impl.parse = (function reitit$impl$parse(path,opts){
var path__$1 = reitit.trie.normalize(path,opts);
var path_parts = reitit.trie.split_path(path__$1,opts);
var path_params = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,path_parts)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null);
});
reitit.impl.wild_path_QMARK_ = (function reitit$impl$wild_path_QMARK_(path,opts){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
reitit.impl.__GT_wild_route_QMARK_ = (function reitit$impl$__GT_wild_route_QMARK_(opts){
return (function (p__75950){
var vec__75951 = p__75950;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75951,(0),null);
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5827__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5827__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5827__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__75980){
var map__75981 = p__75980;
var map__75981__$1 = cljs.core.__destructure_map(map__75981);
var opts = map__75981__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75981__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75981__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75981__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75981__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__75970_SHARP_,p2__75972_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__75970_SHARP_,walk_one(p,m,p2__75972_SHARP_));
}),cljs.core.PersistentVector.EMPTY,r);
});
var walk_one = (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__76025 = routes__$1;
var seq__76026 = cljs.core.seq(vec__76025);
var first__76027 = cljs.core.first(seq__76026);
var seq__76026__$1 = cljs.core.next(seq__76026);
var path__$1 = first__76027;
var vec__76028 = seq__76026__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76028,(0),null);
var args = vec__76028;
var vec__76031 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76031,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76031,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)),macc__$1], null)], null);
}
} else {
return null;
}
}
});
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__76056){
var vec__76057 = p__76056;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76057,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76057,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p,ds) : f.call(null,p,ds))], null);
}),routes);
});
reitit.impl.meta_merge = (function reitit$impl$meta_merge(left,right,p__76069){
var map__76070 = p__76069;
var map__76070__$1 = cljs.core.__destructure_map(map__76070);
var meta_merge__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76070__$1,new cljs.core.Keyword(null,"meta-merge","meta-merge",638856199));
var update_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76070__$1,new cljs.core.Keyword(null,"update-paths","update-paths",-813404599));
var update = (cljs.core.truth_(update_paths)?(function (p1__76064_SHARP_){
return reitit.impl.path_update(p1__76064_SHARP_,update_paths);
}):cljs.core.identity);
var merge = (function (){var or__5142__auto__ = meta_merge__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return meta_merge.core.meta_merge;
}
})();
var G__76076 = (update.cljs$core$IFn$_invoke$arity$1 ? update.cljs$core$IFn$_invoke$arity$1(left) : update.call(null,left));
var G__76077 = (update.cljs$core$IFn$_invoke$arity$1 ? update.cljs$core$IFn$_invoke$arity$1(right) : update.call(null,right));
return (merge.cljs$core$IFn$_invoke$arity$2 ? merge.cljs$core$IFn$_invoke$arity$2(G__76076,G__76077) : merge.call(null,G__76076,G__76077));
});
reitit.impl.merge_data = (function reitit$impl$merge_data(opts,p,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__76081){
var vec__76083 = p__76081;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76083,(1),null);
try{return reitit.impl.meta_merge(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),opts);
}catch (e76090){if((e76090 instanceof Error)){
var e = e76090;
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e76090;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__76095){
var map__76096 = p__76095;
var map__76096__$1 = cljs.core.__destructure_map(map__76096);
var opts = map__76096__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76096__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__76097 = reitit.impl.map_data((function (p1__76092_SHARP_,p2__76093_SHARP_){
return reitit.impl.merge_data(opts,p1__76092_SHARP_,p2__76093_SHARP_);
}),reitit.impl.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__76094_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__76094_SHARP_,opts) : coerce.call(null,p1__76094_SHARP_,opts));
})),G__76097);
} else {
return G__76097;
}
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes,opts){
var parts_and_routes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__76099){
var vec__76100 = p__76099;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76100,(0),null);
var r = vec__76100;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.split_path(s,opts),r], null);
}),routes);
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,p__76104){
var vec__76105 = p__76104;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76105,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76105,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__76108){
var vec__76110 = p__76108;
var p_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76110,(0),null);
var r_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76110,(1),null);
if(reitit.trie.conflicting_parts_QMARK_(p,p_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,r_SINGLEQUOTE_);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(parts_and_routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),parts_and_routes));
});
reitit.impl.unresolved_conflicts = (function reitit$impl$unresolved_conflicts(path_conflicting){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__76129){
var vec__76130 = p__76129;
var vec__76133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76130,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76133,(0),null);
var route_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76133,(1),null);
var conflicts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76130,(1),null);
var and__5140__auto__ = new cljs.core.Keyword(null,"conflicting","conflicting",2003828416).cljs$core$IFn$_invoke$arity$1(route_data);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conflicting","conflicting",2003828416),cljs.core.second),conflicts);
} else {
return and__5140__auto__;
}
})),path_conflicting));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5628__auto__ = (function reitit$impl$conflicting_paths_$_iter__76152(s__76153){
return (new cljs.core.LazySeq(null,(function (){
var s__76153__$1 = s__76153;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__76153__$1);
if(temp__5825__auto__){
var s__76153__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76153__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__76153__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__76155 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__76154 = (0);
while(true){
if((i__76154 < size__5627__auto__)){
var vec__76158 = cljs.core._nth(c__5626__auto__,i__76154);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76158,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76158,(1),null);
cljs.core.chunk_append(b__76155,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__76336 = (i__76154 + (1));
i__76154 = G__76336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76155),reitit$impl$conflicting_paths_$_iter__76152(cljs.core.chunk_rest(s__76153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76155),null);
}
} else {
var vec__76162 = cljs.core.first(s__76153__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76162,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76162,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$impl$conflicting_paths_$_iter__76152(cljs.core.rest(s__76153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__76167 = routes;
var G__76167__$1 = (((G__76167 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__76167));
var G__76167__$2 = (((G__76167__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__76167__$1));
var G__76167__$3 = (((G__76167__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__76167__$2));
var G__76167__$4 = (((G__76167__$3 == null))?null:cljs.core.seq(G__76167__$3));
var G__76167__$5 = (((G__76167__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__76170){
var vec__76173 = p__76170;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76173,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
}),G__76167__$4));
if((G__76167__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__76167__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__76183_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__76183_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__76187,p__76188){
var vec__76189 = p__76187;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76189,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76189,(1),null);
var route = vec__76189;
var map__76192 = p__76188;
var map__76192__$1 = cljs.core.__destructure_map(map__76192);
var opts = map__76192__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76192__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__76200_SHARP_){
return reitit.impl.compile_route(p1__76200_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5823__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
} else {
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5823__auto__)){
var p = temp__5823__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5823__auto__)){
var parts = temp__5823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
var missing = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__76247_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,p1__76247_SHARP_);
}),required));
if(cljs.core.empty_QMARK_(missing)){
return null;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((""+"missing path-params for route "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__5142__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

var reitit$impl$IntoString$into_string$dyn_76348 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (reitit.impl.into_string[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (reitit.impl.into_string["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
});
reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
return reitit$impl$IntoString$into_string$dyn_76348(_);
}
});

(reitit.impl.IntoString["string"] = true);

(reitit.impl.into_string["string"] = (function (this$){
return this$;
}));

(cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?"/":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(this$__$1)));
}));

(reitit.impl.IntoString["boolean"] = true);

(reitit.impl.into_string["boolean"] = (function (this$){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$));
}));

(reitit.impl.IntoString["number"] = true);

(reitit.impl.into_string["number"] = (function (this$){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$));
}));

(reitit.impl.IntoString["object"] = true);

(reitit.impl.into_string["object"] = (function (this$){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$));
}));

(reitit.impl.IntoString["null"] = true);

(reitit.impl.into_string["null"] = (function (_){
return null;
}));
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__76295_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__76295_SHARP_));
}),params);
});
reitit.impl.query_parameter = (function reitit$impl$query_parameter(k,v){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(v))));
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__76305){
var vec__76306 = p__76305;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76306,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76306,(1),null);
if(((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
if(cljs.core.seq(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$3(reitit.impl.query_parameter,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(k),v));
} else {
return reitit.impl.query_parameter(k,"");
}
} else {
return reitit.impl.query_parameter(k,v);
}
}),params));
});

//# sourceMappingURL=reitit.impl.js.map
