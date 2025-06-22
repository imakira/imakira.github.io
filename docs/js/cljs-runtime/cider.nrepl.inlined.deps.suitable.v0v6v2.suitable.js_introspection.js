goog.provide('cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection');
goog.scope(function(){
  cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__69019 = Object.getPrototypeOf(obj__$1);
var G__69020 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__69019;
protos = G__69020;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$property_names_and_types(var_args){
var G__69006 = arguments.length;
switch (G__69006) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var iter__5503__auto__ = (function cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__69007(s__69008){
return (new cljs.core.LazySeq(null,(function (){
var s__69008__$1 = s__69008;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__69008__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var vec__69013 = cljs.core.first(xs__6383__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69013,(0),null);
var map__69016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69013,(1),null);
var map__69016__$1 = cljs.core.__destructure_map(map__69016);
var _obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69016__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69016__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5499__auto__ = ((function (s__69008__$1,vec__69013,i,map__69016,map__69016__$1,_obj,props,xs__6383__auto__,temp__5823__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__69007_$_iter__69009(s__69010){
return (new cljs.core.LazySeq(null,((function (s__69008__$1,vec__69013,i,map__69016,map__69016__$1,_obj,props,xs__6383__auto__,temp__5823__auto__,seen){
return (function (){
var s__69010__$1 = s__69010;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__69010__$1);
if(temp__5823__auto____$1){
var s__69010__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69010__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__69010__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__69012 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__69011 = (0);
while(true){
if((i__69011 < size__5502__auto__)){
var key = cljs.core._nth(c__5501__auto__,i__69011);
if((function (){var and__5023__auto__ = cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seen),key));
if(and__5023__auto__){
var and__5023__auto____$1 = (cljs.core.truth_((function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[object String]",Object.prototype.toString.call(js_obj));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return Array.isArray(js_obj);
}
})())?cljs.core.not(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(props,key),"enumerable")):true);
if(and__5023__auto____$1){
return ((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})()){
cljs.core.chunk_append(b__69012,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(props,key);
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5821__auto__ = (function (){var or__5025__auto__ = cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var value = temp__5821__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e69017){if((e69017 instanceof Error)){
var _e = e69017;
return "var";
} else {
throw e69017;

}
}})()], null);
})());

var G__69022 = (i__69011 + (1));
i__69011 = G__69022;
continue;
} else {
var G__69023 = (i__69011 + (1));
i__69011 = G__69023;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69012),cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__69007_$_iter__69009(cljs.core.chunk_rest(s__69010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69012),null);
}
} else {
var key = cljs.core.first(s__69010__$2);
if((function (){var and__5023__auto__ = cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seen),key));
if(and__5023__auto__){
var and__5023__auto____$1 = (cljs.core.truth_((function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[object String]",Object.prototype.toString.call(js_obj));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return Array.isArray(js_obj);
}
})())?cljs.core.not(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(props,key),"enumerable")):true);
if(and__5023__auto____$1){
return ((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})()){
return cljs.core.cons((function (){var prop = cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(props,key);
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5821__auto__ = (function (){var or__5025__auto__ = cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var value = temp__5821__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e69018){if((e69018 instanceof Error)){
var _e = e69018;
return "var";
} else {
throw e69018;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__69007_$_iter__69009(cljs.core.rest(s__69010__$2)));
} else {
var G__69024 = cljs.core.rest(s__69010__$2);
s__69010__$1 = G__69024;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__69008__$1,vec__69013,i,map__69016,map__69016__$1,_obj,props,xs__6383__auto__,temp__5823__auto__,seen))
,null,null));
});})(s__69008__$1,vec__69013,i,map__69016,map__69016__$1,_obj,props,xs__6383__auto__,temp__5823__auto__,seen))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(cljs.core.js_keys(props)));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__69007(cljs.core.rest(s__69008__$1)));
} else {
var G__69025 = cljs.core.rest(s__69008__$1);
s__69008__$1 = G__69025;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.js.map
