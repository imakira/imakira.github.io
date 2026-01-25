import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
goog.provide('shadow.cljs.devtools.client.console');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__53934 = cljs.core.seq(item);
var chunk__53935 = null;
var count__53936 = (0);
var i__53937 = (0);
while(true){
if((i__53937 < count__53936)){
var it = chunk__53935.cljs$core$IIndexed$_nth$arity$2(null,i__53937);
arr.push(it);


var G__54326 = seq__53934;
var G__54327 = chunk__53935;
var G__54328 = count__53936;
var G__54329 = (i__53937 + (1));
seq__53934 = G__54326;
chunk__53935 = G__54327;
count__53936 = G__54328;
i__53937 = G__54329;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53934);
if(temp__5825__auto__){
var seq__53934__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53934__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__53934__$1);
var G__54334 = cljs.core.chunk_rest(seq__53934__$1);
var G__54335 = c__5673__auto__;
var G__54336 = cljs.core.count(c__5673__auto__);
var G__54337 = (0);
seq__53934 = G__54334;
chunk__53935 = G__54335;
count__53936 = G__54336;
i__53937 = G__54337;
continue;
} else {
var it = cljs.core.first(seq__53934__$1);
arr.push(it);


var G__54341 = cljs.core.next(seq__53934__$1);
var G__54342 = null;
var G__54343 = (0);
var G__54344 = (0);
seq__53934 = G__54341;
chunk__53935 = G__54342;
count__53936 = G__54343;
i__53937 = G__54344;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if((obj == null)){
return null;
} else {
return ["object",({"object": obj})];
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53953){
var vec__53958 = p__53953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53958,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+";");
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.array_QMARK_(struct))){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__53975 = struct;
var seq__53976 = cljs.core.seq(vec__53975);
var first__53977 = cljs.core.first(seq__53976);
var seq__53976__$1 = cljs.core.next(seq__53976);
var tag = first__53977;
var first__53977__$1 = cljs.core.first(seq__53976__$1);
var seq__53976__$2 = cljs.core.next(seq__53976__$1);
var attrs = first__53977__$1;
var children = seq__53976__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__53984_54362 = cljs.core.seq(children);
var chunk__53985_54363 = null;
var count__53986_54364 = (0);
var i__53987_54365 = (0);
while(true){
if((i__53987_54365 < count__53986_54364)){
var child_54370 = chunk__53985_54363.cljs$core$IIndexed$_nth$arity$2(null,i__53987_54365);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_54370) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_54370)));


var G__54376 = seq__53984_54362;
var G__54377 = chunk__53985_54363;
var G__54378 = count__53986_54364;
var G__54379 = (i__53987_54365 + (1));
seq__53984_54362 = G__54376;
chunk__53985_54363 = G__54377;
count__53986_54364 = G__54378;
i__53987_54365 = G__54379;
continue;
} else {
var temp__5825__auto___54380 = cljs.core.seq(seq__53984_54362);
if(temp__5825__auto___54380){
var seq__53984_54382__$1 = temp__5825__auto___54380;
if(cljs.core.chunked_seq_QMARK_(seq__53984_54382__$1)){
var c__5673__auto___54387 = cljs.core.chunk_first(seq__53984_54382__$1);
var G__54388 = cljs.core.chunk_rest(seq__53984_54382__$1);
var G__54389 = c__5673__auto___54387;
var G__54390 = cljs.core.count(c__5673__auto___54387);
var G__54391 = (0);
seq__53984_54362 = G__54388;
chunk__53985_54363 = G__54389;
count__53986_54364 = G__54390;
i__53987_54365 = G__54391;
continue;
} else {
var child_54393 = cljs.core.first(seq__53984_54382__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_54393) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_54393)));


var G__54395 = cljs.core.next(seq__53984_54382__$1);
var G__54396 = null;
var G__54397 = (0);
var G__54398 = (0);
seq__53984_54362 = G__54395;
chunk__53985_54363 = G__54396;
count__53986_54364 = G__54397;
i__53987_54365 = G__54398;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))+" [count: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj))+"]")], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$console$iter__54073(s__54074){
return (new cljs.core.LazySeq(null,(function (){
var s__54074__$1 = s__54074;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54074__$1);
if(temp__5825__auto__){
var s__54074__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54074__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54074__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54080 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54079 = (0);
while(true){
if((i__54079 < size__5627__auto__)){
var value = cljs.core._nth(c__5626__auto__,i__54079);
cljs.core.chunk_append(b__54080,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__54423 = (i__54079 + (1));
i__54079 = G__54423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54080),shadow$cljs$devtools$client$console$iter__54073(cljs.core.chunk_rest(s__54074__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54080),null);
}
} else {
var value = cljs.core.first(s__54074__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__54073(cljs.core.rest(s__54074__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))+" [count: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj))+"]")], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$console$iter__54181(s__54182){
return (new cljs.core.LazySeq(null,(function (){
var s__54182__$1 = s__54182;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54182__$1);
if(temp__5825__auto__){
var s__54182__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54182__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54182__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54184 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54183 = (0);
while(true){
if((i__54183 < size__5627__auto__)){
var key = cljs.core._nth(c__5626__auto__,i__54183);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__54184,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__54441 = (i__54183 + (1));
i__54183 = G__54441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54184),shadow$cljs$devtools$client$console$iter__54181(cljs.core.chunk_rest(s__54182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54184),null);
}
} else {
var key = cljs.core.first(s__54182__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__54181(cljs.core.rest(s__54182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e54211){var e = e54211;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--sys-color-token-keyword, var(--theme-highlight-pink, rgb(136, 19, 145)))"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,(""+"@DEREF "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5825__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
var G__54298 = f;
G__54298.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__54298.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__54298.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__54298.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__54298.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__54298;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54305_SHARP_){
return goog.object.get(p1__54305_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
