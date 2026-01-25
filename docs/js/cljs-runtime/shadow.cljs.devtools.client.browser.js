import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./goog.dom.dom.js";
import "./goog.useragent.useragent.js";
import "./goog.useragent.product.js";
import "./goog.uri.uri.js";
import "./shadow.json.js";
import "./shadow.cljs.devtools.client.env.js";
import "./shadow.cljs.devtools.client.console.js";
import "./shadow.cljs.devtools.client.hud.js";
import "./shadow.cljs.devtools.client.websocket.js";
import "./shadow.cljs.devtools.client.shared.js";
import "./shadow.remote.runtime.api.js";
import "./shadow.remote.runtime.shared.js";
goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___58603 = arguments.length;
var i__5877__auto___58604 = (0);
while(true){
if((i__5877__auto___58604 < len__5876__auto___58603)){
args__5882__auto__.push((arguments[i__5877__auto___58604]));

var G__58605 = (i__5877__auto___58604 + (1));
i__5877__auto___58604 = G__58605;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq58163){
var G__58164 = cljs.core.first(seq58163);
var seq58163__$1 = cljs.core.next(seq58163);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58164,seq58163__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__58165 = cljs.core.seq(sources);
var chunk__58166 = null;
var count__58167 = (0);
var i__58168 = (0);
while(true){
if((i__58168 < count__58167)){
var map__58175 = chunk__58166.cljs$core$IIndexed$_nth$arity$2(null,i__58168);
var map__58175__$1 = cljs.core.__destructure_map(map__58175);
var src = map__58175__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e58176){var e_58606 = e58176;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_58606);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58606.message))));
}

var G__58607 = seq__58165;
var G__58608 = chunk__58166;
var G__58609 = count__58167;
var G__58610 = (i__58168 + (1));
seq__58165 = G__58607;
chunk__58166 = G__58608;
count__58167 = G__58609;
i__58168 = G__58610;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58165);
if(temp__5825__auto__){
var seq__58165__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58165__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__58165__$1);
var G__58611 = cljs.core.chunk_rest(seq__58165__$1);
var G__58612 = c__5673__auto__;
var G__58613 = cljs.core.count(c__5673__auto__);
var G__58614 = (0);
seq__58165 = G__58611;
chunk__58166 = G__58612;
count__58167 = G__58613;
i__58168 = G__58614;
continue;
} else {
var map__58177 = cljs.core.first(seq__58165__$1);
var map__58177__$1 = cljs.core.__destructure_map(map__58177);
var src = map__58177__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58177__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58177__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58177__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e58178){var e_58615 = e58178;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_58615);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58615.message))));
}

var G__58616 = cljs.core.next(seq__58165__$1);
var G__58617 = null;
var G__58618 = (0);
var G__58619 = (0);
seq__58165 = G__58616;
chunk__58166 = G__58617;
count__58167 = G__58618;
i__58168 = G__58619;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__58182 = cljs.core.seq(js_requires);
var chunk__58183 = null;
var count__58184 = (0);
var i__58185 = (0);
while(true){
if((i__58185 < count__58184)){
var js_ns = chunk__58183.cljs$core$IIndexed$_nth$arity$2(null,i__58185);
var require_str_58620 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_58620);


var G__58621 = seq__58182;
var G__58622 = chunk__58183;
var G__58623 = count__58184;
var G__58624 = (i__58185 + (1));
seq__58182 = G__58621;
chunk__58183 = G__58622;
count__58184 = G__58623;
i__58185 = G__58624;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58182);
if(temp__5825__auto__){
var seq__58182__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58182__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__58182__$1);
var G__58625 = cljs.core.chunk_rest(seq__58182__$1);
var G__58626 = c__5673__auto__;
var G__58627 = cljs.core.count(c__5673__auto__);
var G__58628 = (0);
seq__58182 = G__58625;
chunk__58183 = G__58626;
count__58184 = G__58627;
i__58185 = G__58628;
continue;
} else {
var js_ns = cljs.core.first(seq__58182__$1);
var require_str_58629 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_58629);


var G__58630 = cljs.core.next(seq__58182__$1);
var G__58631 = null;
var G__58632 = (0);
var G__58633 = (0);
seq__58182 = G__58630;
chunk__58183 = G__58631;
count__58184 = G__58632;
i__58185 = G__58633;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__58188){
var map__58190 = p__58188;
var map__58190__$1 = cljs.core.__destructure_map(map__58190);
var msg = map__58190__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58192(s__58193){
return (new cljs.core.LazySeq(null,(function (){
var s__58193__$1 = s__58193;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58193__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__58198 = cljs.core.first(xs__6385__auto__);
var map__58198__$1 = cljs.core.__destructure_map(map__58198);
var src = map__58198__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__58193__$1,map__58198,map__58198__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__58190,map__58190__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58192_$_iter__58194(s__58195){
return (new cljs.core.LazySeq(null,((function (s__58193__$1,map__58198,map__58198__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__58190,map__58190__$1,msg,info,reload_info){
return (function (){
var s__58195__$1 = s__58195;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__58195__$1);
if(temp__5825__auto____$1){
var s__58195__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58195__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__58195__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__58197 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__58196 = (0);
while(true){
if((i__58196 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__58196);
cljs.core.chunk_append(b__58197,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58634 = (i__58196 + (1));
i__58196 = G__58634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58197),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58192_$_iter__58194(cljs.core.chunk_rest(s__58195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58197),null);
}
} else {
var warning = cljs.core.first(s__58195__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58192_$_iter__58194(cljs.core.rest(s__58195__$2)));
}
} else {
return null;
}
break;
}
});})(s__58193__$1,map__58198,map__58198__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__58190,map__58190__$1,msg,info,reload_info))
,null,null));
});})(s__58193__$1,map__58198,map__58198__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__58190,map__58190__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58192(cljs.core.rest(s__58193__$1)));
} else {
var G__58635 = cljs.core.rest(s__58193__$1);
s__58193__$1 = G__58635;
continue;
}
} else {
var G__58636 = cljs.core.rest(s__58193__$1);
s__58193__$1 = G__58636;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__58202_58637 = cljs.core.seq(warnings);
var chunk__58203_58638 = null;
var count__58204_58639 = (0);
var i__58205_58640 = (0);
while(true){
if((i__58205_58640 < count__58204_58639)){
var map__58208_58641 = chunk__58203_58638.cljs$core$IIndexed$_nth$arity$2(null,i__58205_58640);
var map__58208_58642__$1 = cljs.core.__destructure_map(map__58208_58641);
var w_58643 = map__58208_58642__$1;
var msg_58644__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208_58642__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208_58642__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208_58642__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208_58642__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58647)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58645)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58646)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58644__$1)));


var G__58648 = seq__58202_58637;
var G__58649 = chunk__58203_58638;
var G__58650 = count__58204_58639;
var G__58651 = (i__58205_58640 + (1));
seq__58202_58637 = G__58648;
chunk__58203_58638 = G__58649;
count__58204_58639 = G__58650;
i__58205_58640 = G__58651;
continue;
} else {
var temp__5825__auto___58652 = cljs.core.seq(seq__58202_58637);
if(temp__5825__auto___58652){
var seq__58202_58653__$1 = temp__5825__auto___58652;
if(cljs.core.chunked_seq_QMARK_(seq__58202_58653__$1)){
var c__5673__auto___58654 = cljs.core.chunk_first(seq__58202_58653__$1);
var G__58655 = cljs.core.chunk_rest(seq__58202_58653__$1);
var G__58656 = c__5673__auto___58654;
var G__58657 = cljs.core.count(c__5673__auto___58654);
var G__58658 = (0);
seq__58202_58637 = G__58655;
chunk__58203_58638 = G__58656;
count__58204_58639 = G__58657;
i__58205_58640 = G__58658;
continue;
} else {
var map__58212_58659 = cljs.core.first(seq__58202_58653__$1);
var map__58212_58660__$1 = cljs.core.__destructure_map(map__58212_58659);
var w_58661 = map__58212_58660__$1;
var msg_58662__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212_58660__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212_58660__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212_58660__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212_58660__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58665)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58663)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58664)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58662__$1)));


var G__58666 = cljs.core.next(seq__58202_58653__$1);
var G__58667 = null;
var G__58668 = (0);
var G__58669 = (0);
seq__58202_58637 = G__58666;
chunk__58203_58638 = G__58667;
count__58204_58639 = G__58668;
i__58205_58640 = G__58669;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__58187_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__58187_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__58227 = node_uri;
G__58227.setQuery(null);

G__58227.setPath(new$);

return G__58227;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__58228){
var map__58229 = p__58228;
var map__58229__$1 = cljs.core.__destructure_map(map__58229);
var msg = map__58229__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__58230 = cljs.core.seq(updates);
var chunk__58232 = null;
var count__58233 = (0);
var i__58234 = (0);
while(true){
if((i__58234 < count__58233)){
var path = chunk__58232.cljs$core$IIndexed$_nth$arity$2(null,i__58234);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58380_58670 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58384_58671 = null;
var count__58385_58672 = (0);
var i__58386_58673 = (0);
while(true){
if((i__58386_58673 < count__58385_58672)){
var node_58674 = chunk__58384_58671.cljs$core$IIndexed$_nth$arity$2(null,i__58386_58673);
if(cljs.core.not(node_58674.shadow$old)){
var path_match_58675 = shadow.cljs.devtools.client.browser.match_paths(node_58674.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58675)){
var new_link_58676 = (function (){var G__58449 = node_58674.cloneNode(true);
G__58449.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58675)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__58449;
})();
(node_58674.shadow$old = true);

(new_link_58676.onload = ((function (seq__58380_58670,chunk__58384_58671,count__58385_58672,i__58386_58673,seq__58230,chunk__58232,count__58233,i__58234,new_link_58676,path_match_58675,node_58674,path,map__58229,map__58229__$1,msg,updates,reload_info){
return (function (e){
var seq__58453_58677 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__58455_58678 = null;
var count__58456_58679 = (0);
var i__58457_58680 = (0);
while(true){
if((i__58457_58680 < count__58456_58679)){
var map__58470_58681 = chunk__58455_58678.cljs$core$IIndexed$_nth$arity$2(null,i__58457_58680);
var map__58470_58682__$1 = cljs.core.__destructure_map(map__58470_58681);
var task_58683 = map__58470_58682__$1;
var fn_str_58684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470_58682__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470_58682__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58686 = goog.getObjectByName(fn_str_58684,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58685)));

(fn_obj_58686.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58686.cljs$core$IFn$_invoke$arity$2(path,new_link_58676) : fn_obj_58686.call(null,path,new_link_58676));


var G__58687 = seq__58453_58677;
var G__58688 = chunk__58455_58678;
var G__58689 = count__58456_58679;
var G__58690 = (i__58457_58680 + (1));
seq__58453_58677 = G__58687;
chunk__58455_58678 = G__58688;
count__58456_58679 = G__58689;
i__58457_58680 = G__58690;
continue;
} else {
var temp__5825__auto___58691 = cljs.core.seq(seq__58453_58677);
if(temp__5825__auto___58691){
var seq__58453_58692__$1 = temp__5825__auto___58691;
if(cljs.core.chunked_seq_QMARK_(seq__58453_58692__$1)){
var c__5673__auto___58693 = cljs.core.chunk_first(seq__58453_58692__$1);
var G__58694 = cljs.core.chunk_rest(seq__58453_58692__$1);
var G__58695 = c__5673__auto___58693;
var G__58696 = cljs.core.count(c__5673__auto___58693);
var G__58697 = (0);
seq__58453_58677 = G__58694;
chunk__58455_58678 = G__58695;
count__58456_58679 = G__58696;
i__58457_58680 = G__58697;
continue;
} else {
var map__58476_58698 = cljs.core.first(seq__58453_58692__$1);
var map__58476_58699__$1 = cljs.core.__destructure_map(map__58476_58698);
var task_58700 = map__58476_58699__$1;
var fn_str_58701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58476_58699__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58476_58699__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58703 = goog.getObjectByName(fn_str_58701,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58702)));

(fn_obj_58703.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58703.cljs$core$IFn$_invoke$arity$2(path,new_link_58676) : fn_obj_58703.call(null,path,new_link_58676));


var G__58704 = cljs.core.next(seq__58453_58692__$1);
var G__58705 = null;
var G__58706 = (0);
var G__58707 = (0);
seq__58453_58677 = G__58704;
chunk__58455_58678 = G__58705;
count__58456_58679 = G__58706;
i__58457_58680 = G__58707;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_58674);
});})(seq__58380_58670,chunk__58384_58671,count__58385_58672,i__58386_58673,seq__58230,chunk__58232,count__58233,i__58234,new_link_58676,path_match_58675,node_58674,path,map__58229,map__58229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58675], 0));

goog.dom.insertSiblingAfter(new_link_58676,node_58674);


var G__58708 = seq__58380_58670;
var G__58709 = chunk__58384_58671;
var G__58710 = count__58385_58672;
var G__58711 = (i__58386_58673 + (1));
seq__58380_58670 = G__58708;
chunk__58384_58671 = G__58709;
count__58385_58672 = G__58710;
i__58386_58673 = G__58711;
continue;
} else {
var G__58712 = seq__58380_58670;
var G__58713 = chunk__58384_58671;
var G__58714 = count__58385_58672;
var G__58715 = (i__58386_58673 + (1));
seq__58380_58670 = G__58712;
chunk__58384_58671 = G__58713;
count__58385_58672 = G__58714;
i__58386_58673 = G__58715;
continue;
}
} else {
var G__58716 = seq__58380_58670;
var G__58717 = chunk__58384_58671;
var G__58718 = count__58385_58672;
var G__58719 = (i__58386_58673 + (1));
seq__58380_58670 = G__58716;
chunk__58384_58671 = G__58717;
count__58385_58672 = G__58718;
i__58386_58673 = G__58719;
continue;
}
} else {
var temp__5825__auto___58720 = cljs.core.seq(seq__58380_58670);
if(temp__5825__auto___58720){
var seq__58380_58721__$1 = temp__5825__auto___58720;
if(cljs.core.chunked_seq_QMARK_(seq__58380_58721__$1)){
var c__5673__auto___58722 = cljs.core.chunk_first(seq__58380_58721__$1);
var G__58723 = cljs.core.chunk_rest(seq__58380_58721__$1);
var G__58724 = c__5673__auto___58722;
var G__58725 = cljs.core.count(c__5673__auto___58722);
var G__58726 = (0);
seq__58380_58670 = G__58723;
chunk__58384_58671 = G__58724;
count__58385_58672 = G__58725;
i__58386_58673 = G__58726;
continue;
} else {
var node_58727 = cljs.core.first(seq__58380_58721__$1);
if(cljs.core.not(node_58727.shadow$old)){
var path_match_58728 = shadow.cljs.devtools.client.browser.match_paths(node_58727.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58728)){
var new_link_58729 = (function (){var G__58484 = node_58727.cloneNode(true);
G__58484.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58728)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__58484;
})();
(node_58727.shadow$old = true);

(new_link_58729.onload = ((function (seq__58380_58670,chunk__58384_58671,count__58385_58672,i__58386_58673,seq__58230,chunk__58232,count__58233,i__58234,new_link_58729,path_match_58728,node_58727,seq__58380_58721__$1,temp__5825__auto___58720,path,map__58229,map__58229__$1,msg,updates,reload_info){
return (function (e){
var seq__58485_58730 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__58487_58731 = null;
var count__58488_58732 = (0);
var i__58489_58733 = (0);
while(true){
if((i__58489_58733 < count__58488_58732)){
var map__58500_58734 = chunk__58487_58731.cljs$core$IIndexed$_nth$arity$2(null,i__58489_58733);
var map__58500_58735__$1 = cljs.core.__destructure_map(map__58500_58734);
var task_58736 = map__58500_58735__$1;
var fn_str_58737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500_58735__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500_58735__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58739 = goog.getObjectByName(fn_str_58737,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58738)));

(fn_obj_58739.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58739.cljs$core$IFn$_invoke$arity$2(path,new_link_58729) : fn_obj_58739.call(null,path,new_link_58729));


var G__58740 = seq__58485_58730;
var G__58741 = chunk__58487_58731;
var G__58742 = count__58488_58732;
var G__58743 = (i__58489_58733 + (1));
seq__58485_58730 = G__58740;
chunk__58487_58731 = G__58741;
count__58488_58732 = G__58742;
i__58489_58733 = G__58743;
continue;
} else {
var temp__5825__auto___58744__$1 = cljs.core.seq(seq__58485_58730);
if(temp__5825__auto___58744__$1){
var seq__58485_58745__$1 = temp__5825__auto___58744__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58485_58745__$1)){
var c__5673__auto___58746 = cljs.core.chunk_first(seq__58485_58745__$1);
var G__58747 = cljs.core.chunk_rest(seq__58485_58745__$1);
var G__58748 = c__5673__auto___58746;
var G__58749 = cljs.core.count(c__5673__auto___58746);
var G__58750 = (0);
seq__58485_58730 = G__58747;
chunk__58487_58731 = G__58748;
count__58488_58732 = G__58749;
i__58489_58733 = G__58750;
continue;
} else {
var map__58503_58751 = cljs.core.first(seq__58485_58745__$1);
var map__58503_58752__$1 = cljs.core.__destructure_map(map__58503_58751);
var task_58753 = map__58503_58752__$1;
var fn_str_58754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58503_58752__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58503_58752__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58756 = goog.getObjectByName(fn_str_58754,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58755)));

(fn_obj_58756.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58756.cljs$core$IFn$_invoke$arity$2(path,new_link_58729) : fn_obj_58756.call(null,path,new_link_58729));


var G__58757 = cljs.core.next(seq__58485_58745__$1);
var G__58758 = null;
var G__58759 = (0);
var G__58760 = (0);
seq__58485_58730 = G__58757;
chunk__58487_58731 = G__58758;
count__58488_58732 = G__58759;
i__58489_58733 = G__58760;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_58727);
});})(seq__58380_58670,chunk__58384_58671,count__58385_58672,i__58386_58673,seq__58230,chunk__58232,count__58233,i__58234,new_link_58729,path_match_58728,node_58727,seq__58380_58721__$1,temp__5825__auto___58720,path,map__58229,map__58229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58728], 0));

goog.dom.insertSiblingAfter(new_link_58729,node_58727);


var G__58761 = cljs.core.next(seq__58380_58721__$1);
var G__58762 = null;
var G__58763 = (0);
var G__58764 = (0);
seq__58380_58670 = G__58761;
chunk__58384_58671 = G__58762;
count__58385_58672 = G__58763;
i__58386_58673 = G__58764;
continue;
} else {
var G__58765 = cljs.core.next(seq__58380_58721__$1);
var G__58766 = null;
var G__58767 = (0);
var G__58768 = (0);
seq__58380_58670 = G__58765;
chunk__58384_58671 = G__58766;
count__58385_58672 = G__58767;
i__58386_58673 = G__58768;
continue;
}
} else {
var G__58769 = cljs.core.next(seq__58380_58721__$1);
var G__58770 = null;
var G__58771 = (0);
var G__58772 = (0);
seq__58380_58670 = G__58769;
chunk__58384_58671 = G__58770;
count__58385_58672 = G__58771;
i__58386_58673 = G__58772;
continue;
}
}
} else {
}
}
break;
}


var G__58773 = seq__58230;
var G__58774 = chunk__58232;
var G__58775 = count__58233;
var G__58776 = (i__58234 + (1));
seq__58230 = G__58773;
chunk__58232 = G__58774;
count__58233 = G__58775;
i__58234 = G__58776;
continue;
} else {
var G__58777 = seq__58230;
var G__58778 = chunk__58232;
var G__58779 = count__58233;
var G__58780 = (i__58234 + (1));
seq__58230 = G__58777;
chunk__58232 = G__58778;
count__58233 = G__58779;
i__58234 = G__58780;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58230);
if(temp__5825__auto__){
var seq__58230__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58230__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__58230__$1);
var G__58781 = cljs.core.chunk_rest(seq__58230__$1);
var G__58782 = c__5673__auto__;
var G__58783 = cljs.core.count(c__5673__auto__);
var G__58784 = (0);
seq__58230 = G__58781;
chunk__58232 = G__58782;
count__58233 = G__58783;
i__58234 = G__58784;
continue;
} else {
var path = cljs.core.first(seq__58230__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58513_58785 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58517_58786 = null;
var count__58518_58787 = (0);
var i__58519_58788 = (0);
while(true){
if((i__58519_58788 < count__58518_58787)){
var node_58789 = chunk__58517_58786.cljs$core$IIndexed$_nth$arity$2(null,i__58519_58788);
if(cljs.core.not(node_58789.shadow$old)){
var path_match_58790 = shadow.cljs.devtools.client.browser.match_paths(node_58789.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58790)){
var new_link_58791 = (function (){var G__58555 = node_58789.cloneNode(true);
G__58555.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58790)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__58555;
})();
(node_58789.shadow$old = true);

(new_link_58791.onload = ((function (seq__58513_58785,chunk__58517_58786,count__58518_58787,i__58519_58788,seq__58230,chunk__58232,count__58233,i__58234,new_link_58791,path_match_58790,node_58789,path,seq__58230__$1,temp__5825__auto__,map__58229,map__58229__$1,msg,updates,reload_info){
return (function (e){
var seq__58556_58792 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__58559_58793 = null;
var count__58560_58794 = (0);
var i__58561_58795 = (0);
while(true){
if((i__58561_58795 < count__58560_58794)){
var map__58568_58796 = chunk__58559_58793.cljs$core$IIndexed$_nth$arity$2(null,i__58561_58795);
var map__58568_58797__$1 = cljs.core.__destructure_map(map__58568_58796);
var task_58798 = map__58568_58797__$1;
var fn_str_58799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58568_58797__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58568_58797__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58801 = goog.getObjectByName(fn_str_58799,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58800)));

(fn_obj_58801.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58801.cljs$core$IFn$_invoke$arity$2(path,new_link_58791) : fn_obj_58801.call(null,path,new_link_58791));


var G__58802 = seq__58556_58792;
var G__58803 = chunk__58559_58793;
var G__58804 = count__58560_58794;
var G__58805 = (i__58561_58795 + (1));
seq__58556_58792 = G__58802;
chunk__58559_58793 = G__58803;
count__58560_58794 = G__58804;
i__58561_58795 = G__58805;
continue;
} else {
var temp__5825__auto___58806__$1 = cljs.core.seq(seq__58556_58792);
if(temp__5825__auto___58806__$1){
var seq__58556_58807__$1 = temp__5825__auto___58806__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58556_58807__$1)){
var c__5673__auto___58808 = cljs.core.chunk_first(seq__58556_58807__$1);
var G__58809 = cljs.core.chunk_rest(seq__58556_58807__$1);
var G__58810 = c__5673__auto___58808;
var G__58811 = cljs.core.count(c__5673__auto___58808);
var G__58812 = (0);
seq__58556_58792 = G__58809;
chunk__58559_58793 = G__58810;
count__58560_58794 = G__58811;
i__58561_58795 = G__58812;
continue;
} else {
var map__58569_58813 = cljs.core.first(seq__58556_58807__$1);
var map__58569_58814__$1 = cljs.core.__destructure_map(map__58569_58813);
var task_58815 = map__58569_58814__$1;
var fn_str_58816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58569_58814__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58569_58814__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58818 = goog.getObjectByName(fn_str_58816,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58817)));

(fn_obj_58818.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58818.cljs$core$IFn$_invoke$arity$2(path,new_link_58791) : fn_obj_58818.call(null,path,new_link_58791));


var G__58819 = cljs.core.next(seq__58556_58807__$1);
var G__58820 = null;
var G__58821 = (0);
var G__58822 = (0);
seq__58556_58792 = G__58819;
chunk__58559_58793 = G__58820;
count__58560_58794 = G__58821;
i__58561_58795 = G__58822;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_58789);
});})(seq__58513_58785,chunk__58517_58786,count__58518_58787,i__58519_58788,seq__58230,chunk__58232,count__58233,i__58234,new_link_58791,path_match_58790,node_58789,path,seq__58230__$1,temp__5825__auto__,map__58229,map__58229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58790], 0));

goog.dom.insertSiblingAfter(new_link_58791,node_58789);


var G__58823 = seq__58513_58785;
var G__58824 = chunk__58517_58786;
var G__58825 = count__58518_58787;
var G__58826 = (i__58519_58788 + (1));
seq__58513_58785 = G__58823;
chunk__58517_58786 = G__58824;
count__58518_58787 = G__58825;
i__58519_58788 = G__58826;
continue;
} else {
var G__58827 = seq__58513_58785;
var G__58828 = chunk__58517_58786;
var G__58829 = count__58518_58787;
var G__58830 = (i__58519_58788 + (1));
seq__58513_58785 = G__58827;
chunk__58517_58786 = G__58828;
count__58518_58787 = G__58829;
i__58519_58788 = G__58830;
continue;
}
} else {
var G__58831 = seq__58513_58785;
var G__58832 = chunk__58517_58786;
var G__58833 = count__58518_58787;
var G__58834 = (i__58519_58788 + (1));
seq__58513_58785 = G__58831;
chunk__58517_58786 = G__58832;
count__58518_58787 = G__58833;
i__58519_58788 = G__58834;
continue;
}
} else {
var temp__5825__auto___58835__$1 = cljs.core.seq(seq__58513_58785);
if(temp__5825__auto___58835__$1){
var seq__58513_58836__$1 = temp__5825__auto___58835__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58513_58836__$1)){
var c__5673__auto___58837 = cljs.core.chunk_first(seq__58513_58836__$1);
var G__58838 = cljs.core.chunk_rest(seq__58513_58836__$1);
var G__58839 = c__5673__auto___58837;
var G__58840 = cljs.core.count(c__5673__auto___58837);
var G__58841 = (0);
seq__58513_58785 = G__58838;
chunk__58517_58786 = G__58839;
count__58518_58787 = G__58840;
i__58519_58788 = G__58841;
continue;
} else {
var node_58842 = cljs.core.first(seq__58513_58836__$1);
if(cljs.core.not(node_58842.shadow$old)){
var path_match_58843 = shadow.cljs.devtools.client.browser.match_paths(node_58842.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58843)){
var new_link_58844 = (function (){var G__58570 = node_58842.cloneNode(true);
G__58570.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58843)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__58570;
})();
(node_58842.shadow$old = true);

(new_link_58844.onload = ((function (seq__58513_58785,chunk__58517_58786,count__58518_58787,i__58519_58788,seq__58230,chunk__58232,count__58233,i__58234,new_link_58844,path_match_58843,node_58842,seq__58513_58836__$1,temp__5825__auto___58835__$1,path,seq__58230__$1,temp__5825__auto__,map__58229,map__58229__$1,msg,updates,reload_info){
return (function (e){
var seq__58571_58845 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__58573_58846 = null;
var count__58574_58847 = (0);
var i__58575_58848 = (0);
while(true){
if((i__58575_58848 < count__58574_58847)){
var map__58579_58849 = chunk__58573_58846.cljs$core$IIndexed$_nth$arity$2(null,i__58575_58848);
var map__58579_58850__$1 = cljs.core.__destructure_map(map__58579_58849);
var task_58851 = map__58579_58850__$1;
var fn_str_58852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579_58850__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579_58850__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58854 = goog.getObjectByName(fn_str_58852,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58853)));

(fn_obj_58854.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58854.cljs$core$IFn$_invoke$arity$2(path,new_link_58844) : fn_obj_58854.call(null,path,new_link_58844));


var G__58855 = seq__58571_58845;
var G__58856 = chunk__58573_58846;
var G__58857 = count__58574_58847;
var G__58858 = (i__58575_58848 + (1));
seq__58571_58845 = G__58855;
chunk__58573_58846 = G__58856;
count__58574_58847 = G__58857;
i__58575_58848 = G__58858;
continue;
} else {
var temp__5825__auto___58859__$2 = cljs.core.seq(seq__58571_58845);
if(temp__5825__auto___58859__$2){
var seq__58571_58860__$1 = temp__5825__auto___58859__$2;
if(cljs.core.chunked_seq_QMARK_(seq__58571_58860__$1)){
var c__5673__auto___58861 = cljs.core.chunk_first(seq__58571_58860__$1);
var G__58862 = cljs.core.chunk_rest(seq__58571_58860__$1);
var G__58863 = c__5673__auto___58861;
var G__58864 = cljs.core.count(c__5673__auto___58861);
var G__58865 = (0);
seq__58571_58845 = G__58862;
chunk__58573_58846 = G__58863;
count__58574_58847 = G__58864;
i__58575_58848 = G__58865;
continue;
} else {
var map__58580_58866 = cljs.core.first(seq__58571_58860__$1);
var map__58580_58867__$1 = cljs.core.__destructure_map(map__58580_58866);
var task_58868 = map__58580_58867__$1;
var fn_str_58869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580_58867__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580_58867__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58871 = goog.getObjectByName(fn_str_58869,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58870)));

(fn_obj_58871.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58871.cljs$core$IFn$_invoke$arity$2(path,new_link_58844) : fn_obj_58871.call(null,path,new_link_58844));


var G__58872 = cljs.core.next(seq__58571_58860__$1);
var G__58873 = null;
var G__58874 = (0);
var G__58875 = (0);
seq__58571_58845 = G__58872;
chunk__58573_58846 = G__58873;
count__58574_58847 = G__58874;
i__58575_58848 = G__58875;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_58842);
});})(seq__58513_58785,chunk__58517_58786,count__58518_58787,i__58519_58788,seq__58230,chunk__58232,count__58233,i__58234,new_link_58844,path_match_58843,node_58842,seq__58513_58836__$1,temp__5825__auto___58835__$1,path,seq__58230__$1,temp__5825__auto__,map__58229,map__58229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58843], 0));

goog.dom.insertSiblingAfter(new_link_58844,node_58842);


var G__58876 = cljs.core.next(seq__58513_58836__$1);
var G__58877 = null;
var G__58878 = (0);
var G__58879 = (0);
seq__58513_58785 = G__58876;
chunk__58517_58786 = G__58877;
count__58518_58787 = G__58878;
i__58519_58788 = G__58879;
continue;
} else {
var G__58880 = cljs.core.next(seq__58513_58836__$1);
var G__58881 = null;
var G__58882 = (0);
var G__58883 = (0);
seq__58513_58785 = G__58880;
chunk__58517_58786 = G__58881;
count__58518_58787 = G__58882;
i__58519_58788 = G__58883;
continue;
}
} else {
var G__58884 = cljs.core.next(seq__58513_58836__$1);
var G__58885 = null;
var G__58886 = (0);
var G__58887 = (0);
seq__58513_58785 = G__58884;
chunk__58517_58786 = G__58885;
count__58518_58787 = G__58886;
i__58519_58788 = G__58887;
continue;
}
}
} else {
}
}
break;
}


var G__58888 = cljs.core.next(seq__58230__$1);
var G__58889 = null;
var G__58890 = (0);
var G__58891 = (0);
seq__58230 = G__58888;
chunk__58232 = G__58889;
count__58233 = G__58890;
i__58234 = G__58891;
continue;
} else {
var G__58892 = cljs.core.next(seq__58230__$1);
var G__58893 = null;
var G__58894 = (0);
var G__58895 = (0);
seq__58230 = G__58892;
chunk__58232 = G__58893;
count__58233 = G__58894;
i__58234 = G__58895;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__58582 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__58582) : success.call(null,G__58582));
}catch (e58581){var e = e58581;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__58583,success,fail){
var map__58584 = p__58583;
var map__58584__$1 = cljs.core.__destructure_map(map__58584);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__58586 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__58586) : success.call(null,G__58586));
}catch (e58585){var e = e58585;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__58587,done,error){
var map__58588 = p__58587;
var map__58588__$1 = cljs.core.__destructure_map(map__58588);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__58589,done,error){
var map__58590 = p__58589;
var map__58590__$1 = cljs.core.__destructure_map(map__58590);
var msg = map__58590__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58591){
var map__58592 = p__58591;
var map__58592__$1 = cljs.core.__destructure_map(map__58592);
var src = map__58592__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__58593 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__58593) : done.call(null,G__58593));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__58594){
var map__58595 = p__58594;
var map__58595__$1 = cljs.core.__destructure_map(map__58595);
var msg__$1 = map__58595__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e58596){var ex = e58596;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__58597){
var map__58598 = p__58597;
var map__58598__$1 = cljs.core.__destructure_map(map__58598);
var env = map__58598__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__58599){
var map__58600 = p__58599;
var map__58600__$1 = cljs.core.__destructure_map(map__58600);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58600__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58600__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__58601){
var map__58602 = p__58601;
var map__58602__$1 = cljs.core.__destructure_map(map__58602);
var svc = map__58602__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58602__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
