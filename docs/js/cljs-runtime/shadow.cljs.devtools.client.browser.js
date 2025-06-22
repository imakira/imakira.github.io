goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___102789 = arguments.length;
var i__5750__auto___102790 = (0);
while(true){
if((i__5750__auto___102790 < len__5749__auto___102789)){
args__5755__auto__.push((arguments[i__5750__auto___102790]));

var G__102792 = (i__5750__auto___102790 + (1));
i__5750__auto___102790 = G__102792;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq101878){
var G__101879 = cljs.core.first(seq101878);
var seq101878__$1 = cljs.core.next(seq101878);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101879,seq101878__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__101894 = cljs.core.seq(sources);
var chunk__101895 = null;
var count__101896 = (0);
var i__101897 = (0);
while(true){
if((i__101897 < count__101896)){
var map__101915 = chunk__101895.cljs$core$IIndexed$_nth$arity$2(null,i__101897);
var map__101915__$1 = cljs.core.__destructure_map(map__101915);
var src = map__101915__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101915__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101915__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101915__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101915__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e101921){var e_102799 = e101921;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_102799);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_102799.message)].join('')));
}

var G__102800 = seq__101894;
var G__102801 = chunk__101895;
var G__102802 = count__101896;
var G__102803 = (i__101897 + (1));
seq__101894 = G__102800;
chunk__101895 = G__102801;
count__101896 = G__102802;
i__101897 = G__102803;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__101894);
if(temp__5823__auto__){
var seq__101894__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__101894__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__101894__$1);
var G__102804 = cljs.core.chunk_rest(seq__101894__$1);
var G__102805 = c__5548__auto__;
var G__102806 = cljs.core.count(c__5548__auto__);
var G__102807 = (0);
seq__101894 = G__102804;
chunk__101895 = G__102805;
count__101896 = G__102806;
i__101897 = G__102807;
continue;
} else {
var map__101927 = cljs.core.first(seq__101894__$1);
var map__101927__$1 = cljs.core.__destructure_map(map__101927);
var src = map__101927__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101927__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101927__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101927__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101927__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e101941){var e_102808 = e101941;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_102808);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_102808.message)].join('')));
}

var G__102810 = cljs.core.next(seq__101894__$1);
var G__102811 = null;
var G__102812 = (0);
var G__102813 = (0);
seq__101894 = G__102810;
chunk__101895 = G__102811;
count__101896 = G__102812;
i__101897 = G__102813;
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
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
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
var seq__101955 = cljs.core.seq(js_requires);
var chunk__101956 = null;
var count__101957 = (0);
var i__101958 = (0);
while(true){
if((i__101958 < count__101957)){
var js_ns = chunk__101956.cljs$core$IIndexed$_nth$arity$2(null,i__101958);
var require_str_102815 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_102815);


var G__102817 = seq__101955;
var G__102818 = chunk__101956;
var G__102819 = count__101957;
var G__102820 = (i__101958 + (1));
seq__101955 = G__102817;
chunk__101956 = G__102818;
count__101957 = G__102819;
i__101958 = G__102820;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__101955);
if(temp__5823__auto__){
var seq__101955__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__101955__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__101955__$1);
var G__102821 = cljs.core.chunk_rest(seq__101955__$1);
var G__102822 = c__5548__auto__;
var G__102823 = cljs.core.count(c__5548__auto__);
var G__102824 = (0);
seq__101955 = G__102821;
chunk__101956 = G__102822;
count__101957 = G__102823;
i__101958 = G__102824;
continue;
} else {
var js_ns = cljs.core.first(seq__101955__$1);
var require_str_102825 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_102825);


var G__102826 = cljs.core.next(seq__101955__$1);
var G__102827 = null;
var G__102828 = (0);
var G__102829 = (0);
seq__101955 = G__102826;
chunk__101956 = G__102827;
count__101957 = G__102828;
i__101958 = G__102829;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__101984){
var map__101985 = p__101984;
var map__101985__$1 = cljs.core.__destructure_map(map__101985);
var msg = map__101985__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101985__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101985__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__101986(s__101987){
return (new cljs.core.LazySeq(null,(function (){
var s__101987__$1 = s__101987;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__101987__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__101997 = cljs.core.first(xs__6383__auto__);
var map__101997__$1 = cljs.core.__destructure_map(map__101997);
var src = map__101997__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101997__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101997__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__101987__$1,map__101997,map__101997__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__101985,map__101985__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__101986_$_iter__101988(s__101989){
return (new cljs.core.LazySeq(null,((function (s__101987__$1,map__101997,map__101997__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__101985,map__101985__$1,msg,info,reload_info){
return (function (){
var s__101989__$1 = s__101989;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__101989__$1);
if(temp__5823__auto____$1){
var s__101989__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__101989__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__101989__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__101991 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__101990 = (0);
while(true){
if((i__101990 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__101990);
cljs.core.chunk_append(b__101991,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__102833 = (i__101990 + (1));
i__101990 = G__102833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__101991),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__101986_$_iter__101988(cljs.core.chunk_rest(s__101989__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__101991),null);
}
} else {
var warning = cljs.core.first(s__101989__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__101986_$_iter__101988(cljs.core.rest(s__101989__$2)));
}
} else {
return null;
}
break;
}
});})(s__101987__$1,map__101997,map__101997__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__101985,map__101985__$1,msg,info,reload_info))
,null,null));
});})(s__101987__$1,map__101997,map__101997__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__101985,map__101985__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__101986(cljs.core.rest(s__101987__$1)));
} else {
var G__102838 = cljs.core.rest(s__101987__$1);
s__101987__$1 = G__102838;
continue;
}
} else {
var G__102839 = cljs.core.rest(s__101987__$1);
s__101987__$1 = G__102839;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__102020_102840 = cljs.core.seq(warnings);
var chunk__102021_102841 = null;
var count__102022_102842 = (0);
var i__102023_102843 = (0);
while(true){
if((i__102023_102843 < count__102022_102842)){
var map__102045_102846 = chunk__102021_102841.cljs$core$IIndexed$_nth$arity$2(null,i__102023_102843);
var map__102045_102847__$1 = cljs.core.__destructure_map(map__102045_102846);
var w_102848 = map__102045_102847__$1;
var msg_102849__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102045_102847__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_102850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102045_102847__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_102851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102045_102847__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_102852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102045_102847__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_102852)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_102850),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_102851),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_102849__$1)].join(''));


var G__102862 = seq__102020_102840;
var G__102863 = chunk__102021_102841;
var G__102864 = count__102022_102842;
var G__102865 = (i__102023_102843 + (1));
seq__102020_102840 = G__102862;
chunk__102021_102841 = G__102863;
count__102022_102842 = G__102864;
i__102023_102843 = G__102865;
continue;
} else {
var temp__5823__auto___102866 = cljs.core.seq(seq__102020_102840);
if(temp__5823__auto___102866){
var seq__102020_102870__$1 = temp__5823__auto___102866;
if(cljs.core.chunked_seq_QMARK_(seq__102020_102870__$1)){
var c__5548__auto___102871 = cljs.core.chunk_first(seq__102020_102870__$1);
var G__102872 = cljs.core.chunk_rest(seq__102020_102870__$1);
var G__102873 = c__5548__auto___102871;
var G__102874 = cljs.core.count(c__5548__auto___102871);
var G__102875 = (0);
seq__102020_102840 = G__102872;
chunk__102021_102841 = G__102873;
count__102022_102842 = G__102874;
i__102023_102843 = G__102875;
continue;
} else {
var map__102048_102877 = cljs.core.first(seq__102020_102870__$1);
var map__102048_102878__$1 = cljs.core.__destructure_map(map__102048_102877);
var w_102879 = map__102048_102878__$1;
var msg_102880__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102048_102878__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_102881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102048_102878__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_102882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102048_102878__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_102883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102048_102878__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_102883)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_102881),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_102882),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_102880__$1)].join(''));


var G__102884 = cljs.core.next(seq__102020_102870__$1);
var G__102885 = null;
var G__102886 = (0);
var G__102887 = (0);
seq__102020_102840 = G__102884;
chunk__102021_102841 = G__102885;
count__102022_102842 = G__102886;
i__102023_102843 = G__102887;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__101977_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__101977_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__102099 = node_uri;
G__102099.setQuery(null);

G__102099.setPath(new$);

return G__102099;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__102110){
var map__102112 = p__102110;
var map__102112__$1 = cljs.core.__destructure_map(map__102112);
var msg = map__102112__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102112__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102112__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__102118 = cljs.core.seq(updates);
var chunk__102120 = null;
var count__102121 = (0);
var i__102122 = (0);
while(true){
if((i__102122 < count__102121)){
var path = chunk__102120.cljs$core$IIndexed$_nth$arity$2(null,i__102122);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__102399_102897 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__102403_102898 = null;
var count__102404_102899 = (0);
var i__102405_102900 = (0);
while(true){
if((i__102405_102900 < count__102404_102899)){
var node_102901 = chunk__102403_102898.cljs$core$IIndexed$_nth$arity$2(null,i__102405_102900);
if(cljs.core.not(node_102901.shadow$old)){
var path_match_102902 = shadow.cljs.devtools.client.browser.match_paths(node_102901.getAttribute("href"),path);
if(cljs.core.truth_(path_match_102902)){
var new_link_102903 = (function (){var G__102470 = node_102901.cloneNode(true);
G__102470.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_102902),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__102470;
})();
(node_102901.shadow$old = true);

(new_link_102903.onload = ((function (seq__102399_102897,chunk__102403_102898,count__102404_102899,i__102405_102900,seq__102118,chunk__102120,count__102121,i__102122,new_link_102903,path_match_102902,node_102901,path,map__102112,map__102112__$1,msg,updates,reload_info){
return (function (e){
var seq__102475_102904 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__102477_102905 = null;
var count__102478_102906 = (0);
var i__102479_102907 = (0);
while(true){
if((i__102479_102907 < count__102478_102906)){
var map__102493_102908 = chunk__102477_102905.cljs$core$IIndexed$_nth$arity$2(null,i__102479_102907);
var map__102493_102909__$1 = cljs.core.__destructure_map(map__102493_102908);
var task_102910 = map__102493_102909__$1;
var fn_str_102911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102493_102909__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_102912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102493_102909__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_102913 = goog.getObjectByName(fn_str_102911,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_102912)].join(''));

(fn_obj_102913.cljs$core$IFn$_invoke$arity$2 ? fn_obj_102913.cljs$core$IFn$_invoke$arity$2(path,new_link_102903) : fn_obj_102913.call(null,path,new_link_102903));


var G__102914 = seq__102475_102904;
var G__102915 = chunk__102477_102905;
var G__102916 = count__102478_102906;
var G__102917 = (i__102479_102907 + (1));
seq__102475_102904 = G__102914;
chunk__102477_102905 = G__102915;
count__102478_102906 = G__102916;
i__102479_102907 = G__102917;
continue;
} else {
var temp__5823__auto___102918 = cljs.core.seq(seq__102475_102904);
if(temp__5823__auto___102918){
var seq__102475_102919__$1 = temp__5823__auto___102918;
if(cljs.core.chunked_seq_QMARK_(seq__102475_102919__$1)){
var c__5548__auto___102920 = cljs.core.chunk_first(seq__102475_102919__$1);
var G__102921 = cljs.core.chunk_rest(seq__102475_102919__$1);
var G__102922 = c__5548__auto___102920;
var G__102923 = cljs.core.count(c__5548__auto___102920);
var G__102924 = (0);
seq__102475_102904 = G__102921;
chunk__102477_102905 = G__102922;
count__102478_102906 = G__102923;
i__102479_102907 = G__102924;
continue;
} else {
var map__102499_102925 = cljs.core.first(seq__102475_102919__$1);
var map__102499_102926__$1 = cljs.core.__destructure_map(map__102499_102925);
var task_102927 = map__102499_102926__$1;
var fn_str_102928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102499_102926__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_102929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102499_102926__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_102930 = goog.getObjectByName(fn_str_102928,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_102929)].join(''));

(fn_obj_102930.cljs$core$IFn$_invoke$arity$2 ? fn_obj_102930.cljs$core$IFn$_invoke$arity$2(path,new_link_102903) : fn_obj_102930.call(null,path,new_link_102903));


var G__102932 = cljs.core.next(seq__102475_102919__$1);
var G__102933 = null;
var G__102934 = (0);
var G__102935 = (0);
seq__102475_102904 = G__102932;
chunk__102477_102905 = G__102933;
count__102478_102906 = G__102934;
i__102479_102907 = G__102935;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_102901);
});})(seq__102399_102897,chunk__102403_102898,count__102404_102899,i__102405_102900,seq__102118,chunk__102120,count__102121,i__102122,new_link_102903,path_match_102902,node_102901,path,map__102112,map__102112__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_102902], 0));

goog.dom.insertSiblingAfter(new_link_102903,node_102901);


var G__102939 = seq__102399_102897;
var G__102940 = chunk__102403_102898;
var G__102941 = count__102404_102899;
var G__102942 = (i__102405_102900 + (1));
seq__102399_102897 = G__102939;
chunk__102403_102898 = G__102940;
count__102404_102899 = G__102941;
i__102405_102900 = G__102942;
continue;
} else {
var G__102946 = seq__102399_102897;
var G__102947 = chunk__102403_102898;
var G__102948 = count__102404_102899;
var G__102949 = (i__102405_102900 + (1));
seq__102399_102897 = G__102946;
chunk__102403_102898 = G__102947;
count__102404_102899 = G__102948;
i__102405_102900 = G__102949;
continue;
}
} else {
var G__102950 = seq__102399_102897;
var G__102951 = chunk__102403_102898;
var G__102952 = count__102404_102899;
var G__102953 = (i__102405_102900 + (1));
seq__102399_102897 = G__102950;
chunk__102403_102898 = G__102951;
count__102404_102899 = G__102952;
i__102405_102900 = G__102953;
continue;
}
} else {
var temp__5823__auto___102954 = cljs.core.seq(seq__102399_102897);
if(temp__5823__auto___102954){
var seq__102399_102955__$1 = temp__5823__auto___102954;
if(cljs.core.chunked_seq_QMARK_(seq__102399_102955__$1)){
var c__5548__auto___102956 = cljs.core.chunk_first(seq__102399_102955__$1);
var G__102957 = cljs.core.chunk_rest(seq__102399_102955__$1);
var G__102958 = c__5548__auto___102956;
var G__102959 = cljs.core.count(c__5548__auto___102956);
var G__102960 = (0);
seq__102399_102897 = G__102957;
chunk__102403_102898 = G__102958;
count__102404_102899 = G__102959;
i__102405_102900 = G__102960;
continue;
} else {
var node_102963 = cljs.core.first(seq__102399_102955__$1);
if(cljs.core.not(node_102963.shadow$old)){
var path_match_102965 = shadow.cljs.devtools.client.browser.match_paths(node_102963.getAttribute("href"),path);
if(cljs.core.truth_(path_match_102965)){
var new_link_102969 = (function (){var G__102515 = node_102963.cloneNode(true);
G__102515.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_102965),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__102515;
})();
(node_102963.shadow$old = true);

(new_link_102969.onload = ((function (seq__102399_102897,chunk__102403_102898,count__102404_102899,i__102405_102900,seq__102118,chunk__102120,count__102121,i__102122,new_link_102969,path_match_102965,node_102963,seq__102399_102955__$1,temp__5823__auto___102954,path,map__102112,map__102112__$1,msg,updates,reload_info){
return (function (e){
var seq__102516_102972 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__102518_102973 = null;
var count__102519_102974 = (0);
var i__102520_102975 = (0);
while(true){
if((i__102520_102975 < count__102519_102974)){
var map__102551_102976 = chunk__102518_102973.cljs$core$IIndexed$_nth$arity$2(null,i__102520_102975);
var map__102551_102977__$1 = cljs.core.__destructure_map(map__102551_102976);
var task_102978 = map__102551_102977__$1;
var fn_str_102979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102551_102977__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_102980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102551_102977__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_102983 = goog.getObjectByName(fn_str_102979,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_102980)].join(''));

(fn_obj_102983.cljs$core$IFn$_invoke$arity$2 ? fn_obj_102983.cljs$core$IFn$_invoke$arity$2(path,new_link_102969) : fn_obj_102983.call(null,path,new_link_102969));


var G__102984 = seq__102516_102972;
var G__102985 = chunk__102518_102973;
var G__102986 = count__102519_102974;
var G__102987 = (i__102520_102975 + (1));
seq__102516_102972 = G__102984;
chunk__102518_102973 = G__102985;
count__102519_102974 = G__102986;
i__102520_102975 = G__102987;
continue;
} else {
var temp__5823__auto___102988__$1 = cljs.core.seq(seq__102516_102972);
if(temp__5823__auto___102988__$1){
var seq__102516_102989__$1 = temp__5823__auto___102988__$1;
if(cljs.core.chunked_seq_QMARK_(seq__102516_102989__$1)){
var c__5548__auto___102990 = cljs.core.chunk_first(seq__102516_102989__$1);
var G__102991 = cljs.core.chunk_rest(seq__102516_102989__$1);
var G__102992 = c__5548__auto___102990;
var G__102993 = cljs.core.count(c__5548__auto___102990);
var G__102994 = (0);
seq__102516_102972 = G__102991;
chunk__102518_102973 = G__102992;
count__102519_102974 = G__102993;
i__102520_102975 = G__102994;
continue;
} else {
var map__102560_102995 = cljs.core.first(seq__102516_102989__$1);
var map__102560_102996__$1 = cljs.core.__destructure_map(map__102560_102995);
var task_102997 = map__102560_102996__$1;
var fn_str_102998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102560_102996__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_102999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102560_102996__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_103000 = goog.getObjectByName(fn_str_102998,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_102999)].join(''));

(fn_obj_103000.cljs$core$IFn$_invoke$arity$2 ? fn_obj_103000.cljs$core$IFn$_invoke$arity$2(path,new_link_102969) : fn_obj_103000.call(null,path,new_link_102969));


var G__103001 = cljs.core.next(seq__102516_102989__$1);
var G__103002 = null;
var G__103003 = (0);
var G__103004 = (0);
seq__102516_102972 = G__103001;
chunk__102518_102973 = G__103002;
count__102519_102974 = G__103003;
i__102520_102975 = G__103004;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_102963);
});})(seq__102399_102897,chunk__102403_102898,count__102404_102899,i__102405_102900,seq__102118,chunk__102120,count__102121,i__102122,new_link_102969,path_match_102965,node_102963,seq__102399_102955__$1,temp__5823__auto___102954,path,map__102112,map__102112__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_102965], 0));

goog.dom.insertSiblingAfter(new_link_102969,node_102963);


var G__103005 = cljs.core.next(seq__102399_102955__$1);
var G__103006 = null;
var G__103007 = (0);
var G__103008 = (0);
seq__102399_102897 = G__103005;
chunk__102403_102898 = G__103006;
count__102404_102899 = G__103007;
i__102405_102900 = G__103008;
continue;
} else {
var G__103009 = cljs.core.next(seq__102399_102955__$1);
var G__103010 = null;
var G__103011 = (0);
var G__103012 = (0);
seq__102399_102897 = G__103009;
chunk__102403_102898 = G__103010;
count__102404_102899 = G__103011;
i__102405_102900 = G__103012;
continue;
}
} else {
var G__103013 = cljs.core.next(seq__102399_102955__$1);
var G__103014 = null;
var G__103015 = (0);
var G__103016 = (0);
seq__102399_102897 = G__103013;
chunk__102403_102898 = G__103014;
count__102404_102899 = G__103015;
i__102405_102900 = G__103016;
continue;
}
}
} else {
}
}
break;
}


var G__103017 = seq__102118;
var G__103018 = chunk__102120;
var G__103019 = count__102121;
var G__103020 = (i__102122 + (1));
seq__102118 = G__103017;
chunk__102120 = G__103018;
count__102121 = G__103019;
i__102122 = G__103020;
continue;
} else {
var G__103021 = seq__102118;
var G__103022 = chunk__102120;
var G__103023 = count__102121;
var G__103024 = (i__102122 + (1));
seq__102118 = G__103021;
chunk__102120 = G__103022;
count__102121 = G__103023;
i__102122 = G__103024;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__102118);
if(temp__5823__auto__){
var seq__102118__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__102118__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__102118__$1);
var G__103026 = cljs.core.chunk_rest(seq__102118__$1);
var G__103027 = c__5548__auto__;
var G__103028 = cljs.core.count(c__5548__auto__);
var G__103029 = (0);
seq__102118 = G__103026;
chunk__102120 = G__103027;
count__102121 = G__103028;
i__102122 = G__103029;
continue;
} else {
var path = cljs.core.first(seq__102118__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__102575_103030 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__102579_103031 = null;
var count__102580_103032 = (0);
var i__102581_103033 = (0);
while(true){
if((i__102581_103033 < count__102580_103032)){
var node_103034 = chunk__102579_103031.cljs$core$IIndexed$_nth$arity$2(null,i__102581_103033);
if(cljs.core.not(node_103034.shadow$old)){
var path_match_103035 = shadow.cljs.devtools.client.browser.match_paths(node_103034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_103035)){
var new_link_103037 = (function (){var G__102650 = node_103034.cloneNode(true);
G__102650.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_103035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__102650;
})();
(node_103034.shadow$old = true);

(new_link_103037.onload = ((function (seq__102575_103030,chunk__102579_103031,count__102580_103032,i__102581_103033,seq__102118,chunk__102120,count__102121,i__102122,new_link_103037,path_match_103035,node_103034,path,seq__102118__$1,temp__5823__auto__,map__102112,map__102112__$1,msg,updates,reload_info){
return (function (e){
var seq__102652_103039 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__102654_103040 = null;
var count__102655_103041 = (0);
var i__102656_103042 = (0);
while(true){
if((i__102656_103042 < count__102655_103041)){
var map__102662_103043 = chunk__102654_103040.cljs$core$IIndexed$_nth$arity$2(null,i__102656_103042);
var map__102662_103044__$1 = cljs.core.__destructure_map(map__102662_103043);
var task_103045 = map__102662_103044__$1;
var fn_str_103046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102662_103044__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_103047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102662_103044__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_103048 = goog.getObjectByName(fn_str_103046,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_103047)].join(''));

(fn_obj_103048.cljs$core$IFn$_invoke$arity$2 ? fn_obj_103048.cljs$core$IFn$_invoke$arity$2(path,new_link_103037) : fn_obj_103048.call(null,path,new_link_103037));


var G__103049 = seq__102652_103039;
var G__103050 = chunk__102654_103040;
var G__103051 = count__102655_103041;
var G__103052 = (i__102656_103042 + (1));
seq__102652_103039 = G__103049;
chunk__102654_103040 = G__103050;
count__102655_103041 = G__103051;
i__102656_103042 = G__103052;
continue;
} else {
var temp__5823__auto___103053__$1 = cljs.core.seq(seq__102652_103039);
if(temp__5823__auto___103053__$1){
var seq__102652_103054__$1 = temp__5823__auto___103053__$1;
if(cljs.core.chunked_seq_QMARK_(seq__102652_103054__$1)){
var c__5548__auto___103055 = cljs.core.chunk_first(seq__102652_103054__$1);
var G__103056 = cljs.core.chunk_rest(seq__102652_103054__$1);
var G__103057 = c__5548__auto___103055;
var G__103058 = cljs.core.count(c__5548__auto___103055);
var G__103059 = (0);
seq__102652_103039 = G__103056;
chunk__102654_103040 = G__103057;
count__102655_103041 = G__103058;
i__102656_103042 = G__103059;
continue;
} else {
var map__102664_103060 = cljs.core.first(seq__102652_103054__$1);
var map__102664_103061__$1 = cljs.core.__destructure_map(map__102664_103060);
var task_103062 = map__102664_103061__$1;
var fn_str_103063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102664_103061__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_103064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102664_103061__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_103065 = goog.getObjectByName(fn_str_103063,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_103064)].join(''));

(fn_obj_103065.cljs$core$IFn$_invoke$arity$2 ? fn_obj_103065.cljs$core$IFn$_invoke$arity$2(path,new_link_103037) : fn_obj_103065.call(null,path,new_link_103037));


var G__103066 = cljs.core.next(seq__102652_103054__$1);
var G__103067 = null;
var G__103068 = (0);
var G__103069 = (0);
seq__102652_103039 = G__103066;
chunk__102654_103040 = G__103067;
count__102655_103041 = G__103068;
i__102656_103042 = G__103069;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_103034);
});})(seq__102575_103030,chunk__102579_103031,count__102580_103032,i__102581_103033,seq__102118,chunk__102120,count__102121,i__102122,new_link_103037,path_match_103035,node_103034,path,seq__102118__$1,temp__5823__auto__,map__102112,map__102112__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_103035], 0));

goog.dom.insertSiblingAfter(new_link_103037,node_103034);


var G__103073 = seq__102575_103030;
var G__103074 = chunk__102579_103031;
var G__103075 = count__102580_103032;
var G__103076 = (i__102581_103033 + (1));
seq__102575_103030 = G__103073;
chunk__102579_103031 = G__103074;
count__102580_103032 = G__103075;
i__102581_103033 = G__103076;
continue;
} else {
var G__103077 = seq__102575_103030;
var G__103078 = chunk__102579_103031;
var G__103079 = count__102580_103032;
var G__103080 = (i__102581_103033 + (1));
seq__102575_103030 = G__103077;
chunk__102579_103031 = G__103078;
count__102580_103032 = G__103079;
i__102581_103033 = G__103080;
continue;
}
} else {
var G__103081 = seq__102575_103030;
var G__103082 = chunk__102579_103031;
var G__103083 = count__102580_103032;
var G__103084 = (i__102581_103033 + (1));
seq__102575_103030 = G__103081;
chunk__102579_103031 = G__103082;
count__102580_103032 = G__103083;
i__102581_103033 = G__103084;
continue;
}
} else {
var temp__5823__auto___103085__$1 = cljs.core.seq(seq__102575_103030);
if(temp__5823__auto___103085__$1){
var seq__102575_103086__$1 = temp__5823__auto___103085__$1;
if(cljs.core.chunked_seq_QMARK_(seq__102575_103086__$1)){
var c__5548__auto___103087 = cljs.core.chunk_first(seq__102575_103086__$1);
var G__103088 = cljs.core.chunk_rest(seq__102575_103086__$1);
var G__103089 = c__5548__auto___103087;
var G__103090 = cljs.core.count(c__5548__auto___103087);
var G__103091 = (0);
seq__102575_103030 = G__103088;
chunk__102579_103031 = G__103089;
count__102580_103032 = G__103090;
i__102581_103033 = G__103091;
continue;
} else {
var node_103092 = cljs.core.first(seq__102575_103086__$1);
if(cljs.core.not(node_103092.shadow$old)){
var path_match_103096 = shadow.cljs.devtools.client.browser.match_paths(node_103092.getAttribute("href"),path);
if(cljs.core.truth_(path_match_103096)){
var new_link_103097 = (function (){var G__102675 = node_103092.cloneNode(true);
G__102675.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_103096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__102675;
})();
(node_103092.shadow$old = true);

(new_link_103097.onload = ((function (seq__102575_103030,chunk__102579_103031,count__102580_103032,i__102581_103033,seq__102118,chunk__102120,count__102121,i__102122,new_link_103097,path_match_103096,node_103092,seq__102575_103086__$1,temp__5823__auto___103085__$1,path,seq__102118__$1,temp__5823__auto__,map__102112,map__102112__$1,msg,updates,reload_info){
return (function (e){
var seq__102679_103106 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__102681_103107 = null;
var count__102682_103108 = (0);
var i__102683_103109 = (0);
while(true){
if((i__102683_103109 < count__102682_103108)){
var map__102702_103110 = chunk__102681_103107.cljs$core$IIndexed$_nth$arity$2(null,i__102683_103109);
var map__102702_103111__$1 = cljs.core.__destructure_map(map__102702_103110);
var task_103112 = map__102702_103111__$1;
var fn_str_103113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102702_103111__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_103114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102702_103111__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_103115 = goog.getObjectByName(fn_str_103113,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_103114)].join(''));

(fn_obj_103115.cljs$core$IFn$_invoke$arity$2 ? fn_obj_103115.cljs$core$IFn$_invoke$arity$2(path,new_link_103097) : fn_obj_103115.call(null,path,new_link_103097));


var G__103116 = seq__102679_103106;
var G__103117 = chunk__102681_103107;
var G__103118 = count__102682_103108;
var G__103119 = (i__102683_103109 + (1));
seq__102679_103106 = G__103116;
chunk__102681_103107 = G__103117;
count__102682_103108 = G__103118;
i__102683_103109 = G__103119;
continue;
} else {
var temp__5823__auto___103120__$2 = cljs.core.seq(seq__102679_103106);
if(temp__5823__auto___103120__$2){
var seq__102679_103121__$1 = temp__5823__auto___103120__$2;
if(cljs.core.chunked_seq_QMARK_(seq__102679_103121__$1)){
var c__5548__auto___103122 = cljs.core.chunk_first(seq__102679_103121__$1);
var G__103126 = cljs.core.chunk_rest(seq__102679_103121__$1);
var G__103127 = c__5548__auto___103122;
var G__103128 = cljs.core.count(c__5548__auto___103122);
var G__103129 = (0);
seq__102679_103106 = G__103126;
chunk__102681_103107 = G__103127;
count__102682_103108 = G__103128;
i__102683_103109 = G__103129;
continue;
} else {
var map__102715_103130 = cljs.core.first(seq__102679_103121__$1);
var map__102715_103131__$1 = cljs.core.__destructure_map(map__102715_103130);
var task_103132 = map__102715_103131__$1;
var fn_str_103133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102715_103131__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_103134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102715_103131__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_103135 = goog.getObjectByName(fn_str_103133,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_103134)].join(''));

(fn_obj_103135.cljs$core$IFn$_invoke$arity$2 ? fn_obj_103135.cljs$core$IFn$_invoke$arity$2(path,new_link_103097) : fn_obj_103135.call(null,path,new_link_103097));


var G__103136 = cljs.core.next(seq__102679_103121__$1);
var G__103137 = null;
var G__103138 = (0);
var G__103139 = (0);
seq__102679_103106 = G__103136;
chunk__102681_103107 = G__103137;
count__102682_103108 = G__103138;
i__102683_103109 = G__103139;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_103092);
});})(seq__102575_103030,chunk__102579_103031,count__102580_103032,i__102581_103033,seq__102118,chunk__102120,count__102121,i__102122,new_link_103097,path_match_103096,node_103092,seq__102575_103086__$1,temp__5823__auto___103085__$1,path,seq__102118__$1,temp__5823__auto__,map__102112,map__102112__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_103096], 0));

goog.dom.insertSiblingAfter(new_link_103097,node_103092);


var G__103141 = cljs.core.next(seq__102575_103086__$1);
var G__103142 = null;
var G__103143 = (0);
var G__103144 = (0);
seq__102575_103030 = G__103141;
chunk__102579_103031 = G__103142;
count__102580_103032 = G__103143;
i__102581_103033 = G__103144;
continue;
} else {
var G__103145 = cljs.core.next(seq__102575_103086__$1);
var G__103146 = null;
var G__103147 = (0);
var G__103148 = (0);
seq__102575_103030 = G__103145;
chunk__102579_103031 = G__103146;
count__102580_103032 = G__103147;
i__102581_103033 = G__103148;
continue;
}
} else {
var G__103149 = cljs.core.next(seq__102575_103086__$1);
var G__103150 = null;
var G__103151 = (0);
var G__103152 = (0);
seq__102575_103030 = G__103149;
chunk__102579_103031 = G__103150;
count__102580_103032 = G__103151;
i__102581_103033 = G__103152;
continue;
}
}
} else {
}
}
break;
}


var G__103153 = cljs.core.next(seq__102118__$1);
var G__103154 = null;
var G__103155 = (0);
var G__103156 = (0);
seq__102118 = G__103153;
chunk__102120 = G__103154;
count__102121 = G__103155;
i__102122 = G__103156;
continue;
} else {
var G__103158 = cljs.core.next(seq__102118__$1);
var G__103159 = null;
var G__103160 = (0);
var G__103161 = (0);
seq__102118 = G__103158;
chunk__102120 = G__103159;
count__102121 = G__103160;
i__102122 = G__103161;
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
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__102726 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__102726) : success.call(null,G__102726));
}catch (e102725){var e = e102725;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__102728,success,fail){
var map__102729 = p__102728;
var map__102729__$1 = cljs.core.__destructure_map(map__102729);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102729__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__102731 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__102731) : success.call(null,G__102731));
}catch (e102730){var e = e102730;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__102733,done,error){
var map__102734 = p__102733;
var map__102734__$1 = cljs.core.__destructure_map(map__102734);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102734__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__102742,done,error){
var map__102743 = p__102742;
var map__102743__$1 = cljs.core.__destructure_map(map__102743);
var msg = map__102743__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102743__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102743__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102743__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__102744){
var map__102745 = p__102744;
var map__102745__$1 = cljs.core.__destructure_map(map__102745);
var src = map__102745__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102745__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__102753 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__102753) : done.call(null,G__102753));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__102755){
var map__102756 = p__102755;
var map__102756__$1 = cljs.core.__destructure_map(map__102756);
var msg__$1 = map__102756__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102756__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e102757){var ex = e102757;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__102763){
var map__102764 = p__102763;
var map__102764__$1 = cljs.core.__destructure_map(map__102764);
var env = map__102764__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102764__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
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

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__102774){
var map__102775 = p__102774;
var map__102775__$1 = cljs.core.__destructure_map(map__102775);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102775__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102775__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__102778){
var map__102779 = p__102778;
var map__102779__$1 = cljs.core.__destructure_map(map__102779);
var svc = map__102779__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102779__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
