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
var args__5881__auto__ = [];
var len__5875__auto___78894 = arguments.length;
var i__5876__auto___78895 = (0);
while(true){
if((i__5876__auto___78895 < len__5875__auto___78894)){
args__5881__auto__.push((arguments[i__5876__auto___78895]));

var G__78896 = (i__5876__auto___78895 + (1));
i__5876__auto___78895 = G__78896;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq77902){
var G__77903 = cljs.core.first(seq77902);
var seq77902__$1 = cljs.core.next(seq77902);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77903,seq77902__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__77911 = cljs.core.seq(sources);
var chunk__77912 = null;
var count__77913 = (0);
var i__77914 = (0);
while(true){
if((i__77914 < count__77913)){
var map__77930 = chunk__77912.cljs$core$IIndexed$_nth$arity$2(null,i__77914);
var map__77930__$1 = cljs.core.__destructure_map(map__77930);
var src = map__77930__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77930__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77930__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77930__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77930__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e77933){var e_78903 = e77933;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_78903);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_78903.message))));
}

var G__78905 = seq__77911;
var G__78906 = chunk__77912;
var G__78907 = count__77913;
var G__78908 = (i__77914 + (1));
seq__77911 = G__78905;
chunk__77912 = G__78906;
count__77913 = G__78907;
i__77914 = G__78908;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__77911);
if(temp__5823__auto__){
var seq__77911__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77911__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__77911__$1);
var G__78909 = cljs.core.chunk_rest(seq__77911__$1);
var G__78910 = c__5672__auto__;
var G__78911 = cljs.core.count(c__5672__auto__);
var G__78912 = (0);
seq__77911 = G__78909;
chunk__77912 = G__78910;
count__77913 = G__78911;
i__77914 = G__78912;
continue;
} else {
var map__77940 = cljs.core.first(seq__77911__$1);
var map__77940__$1 = cljs.core.__destructure_map(map__77940);
var src = map__77940__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77940__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77940__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77940__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77940__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e77943){var e_78919 = e77943;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_78919);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_78919.message))));
}

var G__78920 = cljs.core.next(seq__77911__$1);
var G__78921 = null;
var G__78922 = (0);
var G__78923 = (0);
seq__77911 = G__78920;
chunk__77912 = G__78921;
count__77913 = G__78922;
i__77914 = G__78923;
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
var seq__77952 = cljs.core.seq(js_requires);
var chunk__77953 = null;
var count__77954 = (0);
var i__77955 = (0);
while(true){
if((i__77955 < count__77954)){
var js_ns = chunk__77953.cljs$core$IIndexed$_nth$arity$2(null,i__77955);
var require_str_78929 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_78929);


var G__78930 = seq__77952;
var G__78931 = chunk__77953;
var G__78932 = count__77954;
var G__78933 = (i__77955 + (1));
seq__77952 = G__78930;
chunk__77953 = G__78931;
count__77954 = G__78932;
i__77955 = G__78933;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__77952);
if(temp__5823__auto__){
var seq__77952__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77952__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__77952__$1);
var G__78934 = cljs.core.chunk_rest(seq__77952__$1);
var G__78935 = c__5672__auto__;
var G__78936 = cljs.core.count(c__5672__auto__);
var G__78937 = (0);
seq__77952 = G__78934;
chunk__77953 = G__78935;
count__77954 = G__78936;
i__77955 = G__78937;
continue;
} else {
var js_ns = cljs.core.first(seq__77952__$1);
var require_str_78938 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_78938);


var G__78939 = cljs.core.next(seq__77952__$1);
var G__78940 = null;
var G__78941 = (0);
var G__78942 = (0);
seq__77952 = G__78939;
chunk__77953 = G__78940;
count__77954 = G__78941;
i__77955 = G__78942;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__77969){
var map__77970 = p__77969;
var map__77970__$1 = cljs.core.__destructure_map(map__77970);
var msg = map__77970__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77970__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77970__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5627__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77972(s__77973){
return (new cljs.core.LazySeq(null,(function (){
var s__77973__$1 = s__77973;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__77973__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__77981 = cljs.core.first(xs__6383__auto__);
var map__77981__$1 = cljs.core.__destructure_map(map__77981);
var src = map__77981__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77981__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77981__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5623__auto__ = ((function (s__77973__$1,map__77981,map__77981__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__77970,map__77970__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77972_$_iter__77974(s__77975){
return (new cljs.core.LazySeq(null,((function (s__77973__$1,map__77981,map__77981__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__77970,map__77970__$1,msg,info,reload_info){
return (function (){
var s__77975__$1 = s__77975;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__77975__$1);
if(temp__5823__auto____$1){
var s__77975__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__77975__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__77975__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__77977 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__77976 = (0);
while(true){
if((i__77976 < size__5626__auto__)){
var warning = cljs.core._nth(c__5625__auto__,i__77976);
cljs.core.chunk_append(b__77977,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__78948 = (i__77976 + (1));
i__77976 = G__78948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77977),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77972_$_iter__77974(cljs.core.chunk_rest(s__77975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77977),null);
}
} else {
var warning = cljs.core.first(s__77975__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77972_$_iter__77974(cljs.core.rest(s__77975__$2)));
}
} else {
return null;
}
break;
}
});})(s__77973__$1,map__77981,map__77981__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__77970,map__77970__$1,msg,info,reload_info))
,null,null));
});})(s__77973__$1,map__77981,map__77981__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__77970,map__77970__$1,msg,info,reload_info))
;
var fs__5624__auto__ = cljs.core.seq(iterys__5623__auto__(warnings));
if(fs__5624__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5624__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77972(cljs.core.rest(s__77973__$1)));
} else {
var G__78953 = cljs.core.rest(s__77973__$1);
s__77973__$1 = G__78953;
continue;
}
} else {
var G__78954 = cljs.core.rest(s__77973__$1);
s__77973__$1 = G__78954;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__77987_78955 = cljs.core.seq(warnings);
var chunk__77988_78956 = null;
var count__77989_78957 = (0);
var i__77990_78958 = (0);
while(true){
if((i__77990_78958 < count__77989_78957)){
var map__77996_78959 = chunk__77988_78956.cljs$core$IIndexed$_nth$arity$2(null,i__77990_78958);
var map__77996_78960__$1 = cljs.core.__destructure_map(map__77996_78959);
var w_78961 = map__77996_78960__$1;
var msg_78962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77996_78960__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_78963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77996_78960__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_78964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77996_78960__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_78965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77996_78960__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_78965)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_78963)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_78964)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_78962__$1)));


var G__78967 = seq__77987_78955;
var G__78968 = chunk__77988_78956;
var G__78969 = count__77989_78957;
var G__78970 = (i__77990_78958 + (1));
seq__77987_78955 = G__78967;
chunk__77988_78956 = G__78968;
count__77989_78957 = G__78969;
i__77990_78958 = G__78970;
continue;
} else {
var temp__5823__auto___78971 = cljs.core.seq(seq__77987_78955);
if(temp__5823__auto___78971){
var seq__77987_78975__$1 = temp__5823__auto___78971;
if(cljs.core.chunked_seq_QMARK_(seq__77987_78975__$1)){
var c__5672__auto___78976 = cljs.core.chunk_first(seq__77987_78975__$1);
var G__78977 = cljs.core.chunk_rest(seq__77987_78975__$1);
var G__78978 = c__5672__auto___78976;
var G__78979 = cljs.core.count(c__5672__auto___78976);
var G__78980 = (0);
seq__77987_78955 = G__78977;
chunk__77988_78956 = G__78978;
count__77989_78957 = G__78979;
i__77990_78958 = G__78980;
continue;
} else {
var map__78006_78981 = cljs.core.first(seq__77987_78975__$1);
var map__78006_78982__$1 = cljs.core.__destructure_map(map__78006_78981);
var w_78983 = map__78006_78982__$1;
var msg_78984__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78006_78982__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_78985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78006_78982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_78986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78006_78982__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_78987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78006_78982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_78987)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_78985)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_78986)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_78984__$1)));


var G__78988 = cljs.core.next(seq__77987_78975__$1);
var G__78989 = null;
var G__78990 = (0);
var G__78991 = (0);
seq__77987_78955 = G__78988;
chunk__77988_78956 = G__78989;
count__77989_78957 = G__78990;
i__77990_78958 = G__78991;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__77966_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__77966_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5139__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5139__auto__){
var and__5139__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5139__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__78025 = node_uri;
G__78025.setQuery(null);

G__78025.setPath(new$);

return G__78025;
})()));
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__78037){
var map__78041 = p__78037;
var map__78041__$1 = cljs.core.__destructure_map(map__78041);
var msg = map__78041__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78041__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78041__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__78043 = cljs.core.seq(updates);
var chunk__78045 = null;
var count__78046 = (0);
var i__78047 = (0);
while(true){
if((i__78047 < count__78046)){
var path = chunk__78045.cljs$core$IIndexed$_nth$arity$2(null,i__78047);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__78490_78992 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__78494_78993 = null;
var count__78495_78994 = (0);
var i__78496_78995 = (0);
while(true){
if((i__78496_78995 < count__78495_78994)){
var node_78996 = chunk__78494_78993.cljs$core$IIndexed$_nth$arity$2(null,i__78496_78995);
if(cljs.core.not(node_78996.shadow$old)){
var path_match_78997 = shadow.cljs.devtools.client.browser.match_paths(node_78996.getAttribute("href"),path);
if(cljs.core.truth_(path_match_78997)){
var new_link_78998 = (function (){var G__78575 = node_78996.cloneNode(true);
G__78575.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_78997)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__78575;
})();
(node_78996.shadow$old = true);

(new_link_78998.onload = ((function (seq__78490_78992,chunk__78494_78993,count__78495_78994,i__78496_78995,seq__78043,chunk__78045,count__78046,i__78047,new_link_78998,path_match_78997,node_78996,path,map__78041,map__78041__$1,msg,updates,reload_info){
return (function (e){
var seq__78577_78999 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__78579_79000 = null;
var count__78580_79001 = (0);
var i__78581_79002 = (0);
while(true){
if((i__78581_79002 < count__78580_79001)){
var map__78597_79003 = chunk__78579_79000.cljs$core$IIndexed$_nth$arity$2(null,i__78581_79002);
var map__78597_79004__$1 = cljs.core.__destructure_map(map__78597_79003);
var task_79005 = map__78597_79004__$1;
var fn_str_79006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78597_79004__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_79007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78597_79004__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_79008 = goog.getObjectByName(fn_str_79006,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_79007)));

(fn_obj_79008.cljs$core$IFn$_invoke$arity$2 ? fn_obj_79008.cljs$core$IFn$_invoke$arity$2(path,new_link_78998) : fn_obj_79008.call(null,path,new_link_78998));


var G__79010 = seq__78577_78999;
var G__79011 = chunk__78579_79000;
var G__79012 = count__78580_79001;
var G__79013 = (i__78581_79002 + (1));
seq__78577_78999 = G__79010;
chunk__78579_79000 = G__79011;
count__78580_79001 = G__79012;
i__78581_79002 = G__79013;
continue;
} else {
var temp__5823__auto___79017 = cljs.core.seq(seq__78577_78999);
if(temp__5823__auto___79017){
var seq__78577_79018__$1 = temp__5823__auto___79017;
if(cljs.core.chunked_seq_QMARK_(seq__78577_79018__$1)){
var c__5672__auto___79019 = cljs.core.chunk_first(seq__78577_79018__$1);
var G__79020 = cljs.core.chunk_rest(seq__78577_79018__$1);
var G__79021 = c__5672__auto___79019;
var G__79022 = cljs.core.count(c__5672__auto___79019);
var G__79023 = (0);
seq__78577_78999 = G__79020;
chunk__78579_79000 = G__79021;
count__78580_79001 = G__79022;
i__78581_79002 = G__79023;
continue;
} else {
var map__78607_79025 = cljs.core.first(seq__78577_79018__$1);
var map__78607_79026__$1 = cljs.core.__destructure_map(map__78607_79025);
var task_79027 = map__78607_79026__$1;
var fn_str_79028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78607_79026__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_79029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78607_79026__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_79031 = goog.getObjectByName(fn_str_79028,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_79029)));

(fn_obj_79031.cljs$core$IFn$_invoke$arity$2 ? fn_obj_79031.cljs$core$IFn$_invoke$arity$2(path,new_link_78998) : fn_obj_79031.call(null,path,new_link_78998));


var G__79034 = cljs.core.next(seq__78577_79018__$1);
var G__79035 = null;
var G__79036 = (0);
var G__79037 = (0);
seq__78577_78999 = G__79034;
chunk__78579_79000 = G__79035;
count__78580_79001 = G__79036;
i__78581_79002 = G__79037;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_78996);
});})(seq__78490_78992,chunk__78494_78993,count__78495_78994,i__78496_78995,seq__78043,chunk__78045,count__78046,i__78047,new_link_78998,path_match_78997,node_78996,path,map__78041,map__78041__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_78997], 0));

goog.dom.insertSiblingAfter(new_link_78998,node_78996);


var G__79038 = seq__78490_78992;
var G__79039 = chunk__78494_78993;
var G__79040 = count__78495_78994;
var G__79041 = (i__78496_78995 + (1));
seq__78490_78992 = G__79038;
chunk__78494_78993 = G__79039;
count__78495_78994 = G__79040;
i__78496_78995 = G__79041;
continue;
} else {
var G__79042 = seq__78490_78992;
var G__79043 = chunk__78494_78993;
var G__79044 = count__78495_78994;
var G__79045 = (i__78496_78995 + (1));
seq__78490_78992 = G__79042;
chunk__78494_78993 = G__79043;
count__78495_78994 = G__79044;
i__78496_78995 = G__79045;
continue;
}
} else {
var G__79046 = seq__78490_78992;
var G__79047 = chunk__78494_78993;
var G__79048 = count__78495_78994;
var G__79049 = (i__78496_78995 + (1));
seq__78490_78992 = G__79046;
chunk__78494_78993 = G__79047;
count__78495_78994 = G__79048;
i__78496_78995 = G__79049;
continue;
}
} else {
var temp__5823__auto___79050 = cljs.core.seq(seq__78490_78992);
if(temp__5823__auto___79050){
var seq__78490_79051__$1 = temp__5823__auto___79050;
if(cljs.core.chunked_seq_QMARK_(seq__78490_79051__$1)){
var c__5672__auto___79052 = cljs.core.chunk_first(seq__78490_79051__$1);
var G__79053 = cljs.core.chunk_rest(seq__78490_79051__$1);
var G__79054 = c__5672__auto___79052;
var G__79055 = cljs.core.count(c__5672__auto___79052);
var G__79056 = (0);
seq__78490_78992 = G__79053;
chunk__78494_78993 = G__79054;
count__78495_78994 = G__79055;
i__78496_78995 = G__79056;
continue;
} else {
var node_79057 = cljs.core.first(seq__78490_79051__$1);
if(cljs.core.not(node_79057.shadow$old)){
var path_match_79058 = shadow.cljs.devtools.client.browser.match_paths(node_79057.getAttribute("href"),path);
if(cljs.core.truth_(path_match_79058)){
var new_link_79059 = (function (){var G__78621 = node_79057.cloneNode(true);
G__78621.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_79058)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__78621;
})();
(node_79057.shadow$old = true);

(new_link_79059.onload = ((function (seq__78490_78992,chunk__78494_78993,count__78495_78994,i__78496_78995,seq__78043,chunk__78045,count__78046,i__78047,new_link_79059,path_match_79058,node_79057,seq__78490_79051__$1,temp__5823__auto___79050,path,map__78041,map__78041__$1,msg,updates,reload_info){
return (function (e){
var seq__78624_79064 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__78626_79065 = null;
var count__78627_79066 = (0);
var i__78628_79067 = (0);
while(true){
if((i__78628_79067 < count__78627_79066)){
var map__78647_79068 = chunk__78626_79065.cljs$core$IIndexed$_nth$arity$2(null,i__78628_79067);
var map__78647_79069__$1 = cljs.core.__destructure_map(map__78647_79068);
var task_79070 = map__78647_79069__$1;
var fn_str_79071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78647_79069__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_79072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78647_79069__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_79074 = goog.getObjectByName(fn_str_79071,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_79072)));

(fn_obj_79074.cljs$core$IFn$_invoke$arity$2 ? fn_obj_79074.cljs$core$IFn$_invoke$arity$2(path,new_link_79059) : fn_obj_79074.call(null,path,new_link_79059));


var G__79075 = seq__78624_79064;
var G__79076 = chunk__78626_79065;
var G__79077 = count__78627_79066;
var G__79078 = (i__78628_79067 + (1));
seq__78624_79064 = G__79075;
chunk__78626_79065 = G__79076;
count__78627_79066 = G__79077;
i__78628_79067 = G__79078;
continue;
} else {
var temp__5823__auto___79079__$1 = cljs.core.seq(seq__78624_79064);
if(temp__5823__auto___79079__$1){
var seq__78624_79080__$1 = temp__5823__auto___79079__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78624_79080__$1)){
var c__5672__auto___79081 = cljs.core.chunk_first(seq__78624_79080__$1);
var G__79082 = cljs.core.chunk_rest(seq__78624_79080__$1);
var G__79083 = c__5672__auto___79081;
var G__79084 = cljs.core.count(c__5672__auto___79081);
var G__79085 = (0);
seq__78624_79064 = G__79082;
chunk__78626_79065 = G__79083;
count__78627_79066 = G__79084;
i__78628_79067 = G__79085;
continue;
} else {
var map__78678_79086 = cljs.core.first(seq__78624_79080__$1);
var map__78678_79087__$1 = cljs.core.__destructure_map(map__78678_79086);
var task_79088 = map__78678_79087__$1;
var fn_str_79089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78678_79087__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_79090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78678_79087__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_79091 = goog.getObjectByName(fn_str_79089,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_79090)));

(fn_obj_79091.cljs$core$IFn$_invoke$arity$2 ? fn_obj_79091.cljs$core$IFn$_invoke$arity$2(path,new_link_79059) : fn_obj_79091.call(null,path,new_link_79059));


var G__79092 = cljs.core.next(seq__78624_79080__$1);
var G__79093 = null;
var G__79094 = (0);
var G__79095 = (0);
seq__78624_79064 = G__79092;
chunk__78626_79065 = G__79093;
count__78627_79066 = G__79094;
i__78628_79067 = G__79095;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_79057);
});})(seq__78490_78992,chunk__78494_78993,count__78495_78994,i__78496_78995,seq__78043,chunk__78045,count__78046,i__78047,new_link_79059,path_match_79058,node_79057,seq__78490_79051__$1,temp__5823__auto___79050,path,map__78041,map__78041__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_79058], 0));

goog.dom.insertSiblingAfter(new_link_79059,node_79057);


var G__79098 = cljs.core.next(seq__78490_79051__$1);
var G__79099 = null;
var G__79100 = (0);
var G__79101 = (0);
seq__78490_78992 = G__79098;
chunk__78494_78993 = G__79099;
count__78495_78994 = G__79100;
i__78496_78995 = G__79101;
continue;
} else {
var G__79102 = cljs.core.next(seq__78490_79051__$1);
var G__79103 = null;
var G__79104 = (0);
var G__79105 = (0);
seq__78490_78992 = G__79102;
chunk__78494_78993 = G__79103;
count__78495_78994 = G__79104;
i__78496_78995 = G__79105;
continue;
}
} else {
var G__79106 = cljs.core.next(seq__78490_79051__$1);
var G__79107 = null;
var G__79108 = (0);
var G__79109 = (0);
seq__78490_78992 = G__79106;
chunk__78494_78993 = G__79107;
count__78495_78994 = G__79108;
i__78496_78995 = G__79109;
continue;
}
}
} else {
}
}
break;
}


var G__79110 = seq__78043;
var G__79111 = chunk__78045;
var G__79112 = count__78046;
var G__79113 = (i__78047 + (1));
seq__78043 = G__79110;
chunk__78045 = G__79111;
count__78046 = G__79112;
i__78047 = G__79113;
continue;
} else {
var G__79114 = seq__78043;
var G__79115 = chunk__78045;
var G__79116 = count__78046;
var G__79117 = (i__78047 + (1));
seq__78043 = G__79114;
chunk__78045 = G__79115;
count__78046 = G__79116;
i__78047 = G__79117;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__78043);
if(temp__5823__auto__){
var seq__78043__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78043__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__78043__$1);
var G__79118 = cljs.core.chunk_rest(seq__78043__$1);
var G__79119 = c__5672__auto__;
var G__79120 = cljs.core.count(c__5672__auto__);
var G__79121 = (0);
seq__78043 = G__79118;
chunk__78045 = G__79119;
count__78046 = G__79120;
i__78047 = G__79121;
continue;
} else {
var path = cljs.core.first(seq__78043__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__78689_79124 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__78693_79125 = null;
var count__78694_79126 = (0);
var i__78695_79127 = (0);
while(true){
if((i__78695_79127 < count__78694_79126)){
var node_79128 = chunk__78693_79125.cljs$core$IIndexed$_nth$arity$2(null,i__78695_79127);
if(cljs.core.not(node_79128.shadow$old)){
var path_match_79129 = shadow.cljs.devtools.client.browser.match_paths(node_79128.getAttribute("href"),path);
if(cljs.core.truth_(path_match_79129)){
var new_link_79130 = (function (){var G__78808 = node_79128.cloneNode(true);
G__78808.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_79129)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__78808;
})();
(node_79128.shadow$old = true);

(new_link_79130.onload = ((function (seq__78689_79124,chunk__78693_79125,count__78694_79126,i__78695_79127,seq__78043,chunk__78045,count__78046,i__78047,new_link_79130,path_match_79129,node_79128,path,seq__78043__$1,temp__5823__auto__,map__78041,map__78041__$1,msg,updates,reload_info){
return (function (e){
var seq__78810_79133 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__78812_79134 = null;
var count__78813_79135 = (0);
var i__78814_79136 = (0);
while(true){
if((i__78814_79136 < count__78813_79135)){
var map__78822_79137 = chunk__78812_79134.cljs$core$IIndexed$_nth$arity$2(null,i__78814_79136);
var map__78822_79138__$1 = cljs.core.__destructure_map(map__78822_79137);
var task_79139 = map__78822_79138__$1;
var fn_str_79140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78822_79138__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_79141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78822_79138__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_79143 = goog.getObjectByName(fn_str_79140,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_79141)));

(fn_obj_79143.cljs$core$IFn$_invoke$arity$2 ? fn_obj_79143.cljs$core$IFn$_invoke$arity$2(path,new_link_79130) : fn_obj_79143.call(null,path,new_link_79130));


var G__79144 = seq__78810_79133;
var G__79145 = chunk__78812_79134;
var G__79146 = count__78813_79135;
var G__79147 = (i__78814_79136 + (1));
seq__78810_79133 = G__79144;
chunk__78812_79134 = G__79145;
count__78813_79135 = G__79146;
i__78814_79136 = G__79147;
continue;
} else {
var temp__5823__auto___79148__$1 = cljs.core.seq(seq__78810_79133);
if(temp__5823__auto___79148__$1){
var seq__78810_79149__$1 = temp__5823__auto___79148__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78810_79149__$1)){
var c__5672__auto___79150 = cljs.core.chunk_first(seq__78810_79149__$1);
var G__79151 = cljs.core.chunk_rest(seq__78810_79149__$1);
var G__79152 = c__5672__auto___79150;
var G__79153 = cljs.core.count(c__5672__auto___79150);
var G__79154 = (0);
seq__78810_79133 = G__79151;
chunk__78812_79134 = G__79152;
count__78813_79135 = G__79153;
i__78814_79136 = G__79154;
continue;
} else {
var map__78825_79155 = cljs.core.first(seq__78810_79149__$1);
var map__78825_79156__$1 = cljs.core.__destructure_map(map__78825_79155);
var task_79157 = map__78825_79156__$1;
var fn_str_79158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78825_79156__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_79159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78825_79156__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_79160 = goog.getObjectByName(fn_str_79158,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_79159)));

(fn_obj_79160.cljs$core$IFn$_invoke$arity$2 ? fn_obj_79160.cljs$core$IFn$_invoke$arity$2(path,new_link_79130) : fn_obj_79160.call(null,path,new_link_79130));


var G__79161 = cljs.core.next(seq__78810_79149__$1);
var G__79162 = null;
var G__79163 = (0);
var G__79164 = (0);
seq__78810_79133 = G__79161;
chunk__78812_79134 = G__79162;
count__78813_79135 = G__79163;
i__78814_79136 = G__79164;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_79128);
});})(seq__78689_79124,chunk__78693_79125,count__78694_79126,i__78695_79127,seq__78043,chunk__78045,count__78046,i__78047,new_link_79130,path_match_79129,node_79128,path,seq__78043__$1,temp__5823__auto__,map__78041,map__78041__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_79129], 0));

goog.dom.insertSiblingAfter(new_link_79130,node_79128);


var G__79165 = seq__78689_79124;
var G__79166 = chunk__78693_79125;
var G__79167 = count__78694_79126;
var G__79168 = (i__78695_79127 + (1));
seq__78689_79124 = G__79165;
chunk__78693_79125 = G__79166;
count__78694_79126 = G__79167;
i__78695_79127 = G__79168;
continue;
} else {
var G__79169 = seq__78689_79124;
var G__79170 = chunk__78693_79125;
var G__79171 = count__78694_79126;
var G__79172 = (i__78695_79127 + (1));
seq__78689_79124 = G__79169;
chunk__78693_79125 = G__79170;
count__78694_79126 = G__79171;
i__78695_79127 = G__79172;
continue;
}
} else {
var G__79173 = seq__78689_79124;
var G__79174 = chunk__78693_79125;
var G__79175 = count__78694_79126;
var G__79176 = (i__78695_79127 + (1));
seq__78689_79124 = G__79173;
chunk__78693_79125 = G__79174;
count__78694_79126 = G__79175;
i__78695_79127 = G__79176;
continue;
}
} else {
var temp__5823__auto___79177__$1 = cljs.core.seq(seq__78689_79124);
if(temp__5823__auto___79177__$1){
var seq__78689_79178__$1 = temp__5823__auto___79177__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78689_79178__$1)){
var c__5672__auto___79180 = cljs.core.chunk_first(seq__78689_79178__$1);
var G__79181 = cljs.core.chunk_rest(seq__78689_79178__$1);
var G__79182 = c__5672__auto___79180;
var G__79183 = cljs.core.count(c__5672__auto___79180);
var G__79184 = (0);
seq__78689_79124 = G__79181;
chunk__78693_79125 = G__79182;
count__78694_79126 = G__79183;
i__78695_79127 = G__79184;
continue;
} else {
var node_79185 = cljs.core.first(seq__78689_79178__$1);
if(cljs.core.not(node_79185.shadow$old)){
var path_match_79187 = shadow.cljs.devtools.client.browser.match_paths(node_79185.getAttribute("href"),path);
if(cljs.core.truth_(path_match_79187)){
var new_link_79188 = (function (){var G__78826 = node_79185.cloneNode(true);
G__78826.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_79187)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__78826;
})();
(node_79185.shadow$old = true);

(new_link_79188.onload = ((function (seq__78689_79124,chunk__78693_79125,count__78694_79126,i__78695_79127,seq__78043,chunk__78045,count__78046,i__78047,new_link_79188,path_match_79187,node_79185,seq__78689_79178__$1,temp__5823__auto___79177__$1,path,seq__78043__$1,temp__5823__auto__,map__78041,map__78041__$1,msg,updates,reload_info){
return (function (e){
var seq__78828_79190 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__78830_79191 = null;
var count__78831_79192 = (0);
var i__78832_79193 = (0);
while(true){
if((i__78832_79193 < count__78831_79192)){
var map__78842_79194 = chunk__78830_79191.cljs$core$IIndexed$_nth$arity$2(null,i__78832_79193);
var map__78842_79195__$1 = cljs.core.__destructure_map(map__78842_79194);
var task_79196 = map__78842_79195__$1;
var fn_str_79197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78842_79195__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_79198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78842_79195__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_79200 = goog.getObjectByName(fn_str_79197,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_79198)));

(fn_obj_79200.cljs$core$IFn$_invoke$arity$2 ? fn_obj_79200.cljs$core$IFn$_invoke$arity$2(path,new_link_79188) : fn_obj_79200.call(null,path,new_link_79188));


var G__79202 = seq__78828_79190;
var G__79203 = chunk__78830_79191;
var G__79204 = count__78831_79192;
var G__79205 = (i__78832_79193 + (1));
seq__78828_79190 = G__79202;
chunk__78830_79191 = G__79203;
count__78831_79192 = G__79204;
i__78832_79193 = G__79205;
continue;
} else {
var temp__5823__auto___79206__$2 = cljs.core.seq(seq__78828_79190);
if(temp__5823__auto___79206__$2){
var seq__78828_79207__$1 = temp__5823__auto___79206__$2;
if(cljs.core.chunked_seq_QMARK_(seq__78828_79207__$1)){
var c__5672__auto___79208 = cljs.core.chunk_first(seq__78828_79207__$1);
var G__79209 = cljs.core.chunk_rest(seq__78828_79207__$1);
var G__79210 = c__5672__auto___79208;
var G__79211 = cljs.core.count(c__5672__auto___79208);
var G__79212 = (0);
seq__78828_79190 = G__79209;
chunk__78830_79191 = G__79210;
count__78831_79192 = G__79211;
i__78832_79193 = G__79212;
continue;
} else {
var map__78844_79213 = cljs.core.first(seq__78828_79207__$1);
var map__78844_79214__$1 = cljs.core.__destructure_map(map__78844_79213);
var task_79215 = map__78844_79214__$1;
var fn_str_79216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78844_79214__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_79217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78844_79214__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_79218 = goog.getObjectByName(fn_str_79216,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_79217)));

(fn_obj_79218.cljs$core$IFn$_invoke$arity$2 ? fn_obj_79218.cljs$core$IFn$_invoke$arity$2(path,new_link_79188) : fn_obj_79218.call(null,path,new_link_79188));


var G__79219 = cljs.core.next(seq__78828_79207__$1);
var G__79220 = null;
var G__79221 = (0);
var G__79222 = (0);
seq__78828_79190 = G__79219;
chunk__78830_79191 = G__79220;
count__78831_79192 = G__79221;
i__78832_79193 = G__79222;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_79185);
});})(seq__78689_79124,chunk__78693_79125,count__78694_79126,i__78695_79127,seq__78043,chunk__78045,count__78046,i__78047,new_link_79188,path_match_79187,node_79185,seq__78689_79178__$1,temp__5823__auto___79177__$1,path,seq__78043__$1,temp__5823__auto__,map__78041,map__78041__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_79187], 0));

goog.dom.insertSiblingAfter(new_link_79188,node_79185);


var G__79223 = cljs.core.next(seq__78689_79178__$1);
var G__79224 = null;
var G__79225 = (0);
var G__79226 = (0);
seq__78689_79124 = G__79223;
chunk__78693_79125 = G__79224;
count__78694_79126 = G__79225;
i__78695_79127 = G__79226;
continue;
} else {
var G__79227 = cljs.core.next(seq__78689_79178__$1);
var G__79228 = null;
var G__79229 = (0);
var G__79230 = (0);
seq__78689_79124 = G__79227;
chunk__78693_79125 = G__79228;
count__78694_79126 = G__79229;
i__78695_79127 = G__79230;
continue;
}
} else {
var G__79231 = cljs.core.next(seq__78689_79178__$1);
var G__79232 = null;
var G__79233 = (0);
var G__79234 = (0);
seq__78689_79124 = G__79231;
chunk__78693_79125 = G__79232;
count__78694_79126 = G__79233;
i__78695_79127 = G__79234;
continue;
}
}
} else {
}
}
break;
}


var G__79235 = cljs.core.next(seq__78043__$1);
var G__79236 = null;
var G__79237 = (0);
var G__79238 = (0);
seq__78043 = G__79235;
chunk__78045 = G__79236;
count__78046 = G__79237;
i__78047 = G__79238;
continue;
} else {
var G__79239 = cljs.core.next(seq__78043__$1);
var G__79240 = null;
var G__79241 = (0);
var G__79242 = (0);
seq__78043 = G__79239;
chunk__78045 = G__79240;
count__78046 = G__79241;
i__78047 = G__79242;
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
try{var G__78855 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__78855) : success.call(null,G__78855));
}catch (e78854){var e = e78854;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__78856,success,fail){
var map__78857 = p__78856;
var map__78857__$1 = cljs.core.__destructure_map(map__78857);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78857__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__78859 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__78859) : success.call(null,G__78859));
}catch (e78858){var e = e78858;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__78860,done,error){
var map__78861 = p__78860;
var map__78861__$1 = cljs.core.__destructure_map(map__78861);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78861__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__78866,done,error){
var map__78867 = p__78866;
var map__78867__$1 = cljs.core.__destructure_map(map__78867);
var msg = map__78867__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78867__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78867__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78867__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__78870){
var map__78871 = p__78870;
var map__78871__$1 = cljs.core.__destructure_map(map__78871);
var src = map__78871__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78871__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5139__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5139__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5139__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__78872 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__78872) : done.call(null,G__78872));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__78873){
var map__78874 = p__78873;
var map__78874__$1 = cljs.core.__destructure_map(map__78874);
var msg__$1 = map__78874__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78874__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e78875){var ex = e78875;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__78877){
var map__78878 = p__78877;
var map__78878__$1 = cljs.core.__destructure_map(map__78878);
var env = map__78878__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78878__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__78884){
var map__78885 = p__78884;
var map__78885__$1 = cljs.core.__destructure_map(map__78885);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78885__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78885__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__78887){
var map__78888 = p__78887;
var map__78888__$1 = cljs.core.__destructure_map(map__78888);
var svc = map__78888__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78888__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
