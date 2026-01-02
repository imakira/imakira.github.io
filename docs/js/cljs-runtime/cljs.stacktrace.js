import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.string.string.js";
import "./clojure.string.js";
goog.provide('cljs.stacktrace');
if((typeof cljs !== 'undefined') && (typeof cljs.stacktrace !== 'undefined') && (typeof cljs.stacktrace.parse_stacktrace !== 'undefined')){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__5746__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5750__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67745 = cljs.core.get_global_hierarchy;
return (fexpr__67745.cljs$core$IFn$_invoke$arity$0 ? fexpr__67745.cljs$core$IFn$_invoke$arity$0() : fexpr__67745.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),(function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5750__auto__,method_table__5746__auto__,prefer_table__5747__auto__,method_cache__5748__auto__,cached_hierarchy__5749__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__5141__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__67765 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__67774,p__67775){
var vec__67779 = p__67774;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67779,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67779,(1),null);
var vec__67782 = p__67775;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67782,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67782,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67765,(0),null);
var vec__67768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67765,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67768,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67768,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67798 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__67798,"(","");
} else {
return G__67798;
}
})(),cljs.stacktrace.parse_int((function (){var G__67799 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__67799,")","");
} else {
return G__67799;
}
})()),cljs.stacktrace.parse_int((function (){var G__67802 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__67802,")","");
} else {
return G__67802;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__67834,file,p__67835){
var map__67839 = p__67834;
var map__67839__$1 = cljs.core.__destructure_map(map__67839);
var repl_env = map__67839__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__67840 = p__67835;
var map__67840__$1 = cljs.core.__destructure_map(map__67840);
var opts = map__67840__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67840__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex((""+"http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5141__auto__ = host_port;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return port;
}
})())+"/")):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex((""+"^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5141__auto__ = (function (){var and__5139__auto__ = asset_path;
if(cljs.core.truth_(and__5139__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__5139__auto__;
}
})();
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})())+"/")),"");
} else {
var temp__5821__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5821__auto__)){
var asset_root = temp__5821__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Could not relativize URL "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__67864 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67864,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67864,(1),null);
var vec__67867 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67867,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67867,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67867,(2),null);
if(cljs.core.truth_((function (){var and__5139__auto__ = file;
if(cljs.core.truth_(and__5139__auto__)){
var and__5139__auto____$1 = function$;
if(cljs.core.truth_(and__5139__auto____$1)){
var and__5139__auto____$2 = line;
if(cljs.core.truth_(and__5139__auto____$2)){
return column;
} else {
return and__5139__auto____$2;
}
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace(function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace(function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67880_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__67880_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__67879_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_(p1__67879_SHARP_,"    at eval")));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__67878_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__67878_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__67913 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67913,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67913,(1),null);
var vec__67916 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67916,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67916,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67916,(2),null);
if(cljs.core.truth_((function (){var and__5139__auto__ = file;
if(cljs.core.truth_(and__5139__auto__)){
var and__5139__auto____$1 = function$;
if(cljs.core.truth_(and__5139__auto____$1)){
var and__5139__auto____$2 = line;
if(cljs.core.truth_(and__5139__auto____$2)){
return column;
} else {
return and__5139__auto____$2;
}
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim(function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim(function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67938_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__67938_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__67937_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_(p1__67937_SHARP_,"eval code")));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__67935_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__67935_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__67968 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67968,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67968,(1),null);
var vec__67971 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67971,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67971,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67971,(2),null);
if(cljs.core.truth_((function (){var and__5139__auto__ = file;
if(cljs.core.truth_(and__5139__auto__)){
var and__5139__auto____$1 = function$;
if(cljs.core.truth_(and__5139__auto____$1)){
var and__5139__auto____$2 = line;
if(cljs.core.truth_(and__5139__auto____$2)){
return column;
} else {
return and__5139__auto____$2;
}
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function(function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function(function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68039_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__68039_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__68037_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__68037_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__68036_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__68036_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__68063){
var map__68064 = p__68063;
var map__68064__$1 = cljs.core.__destructure_map(map__68064);
var opts = map__68064__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68064__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__5139__auto__ = x;
if(cljs.core.truth_(and__5139__auto__)){
return (!(clojure.string.blank_QMARK_(x)));
} else {
return and__5139__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
});
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var vec__68120 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68120,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68120,(1),null);
var vec__68123 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68123,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68123,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68123,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__68126 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__68126,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir)+"/"),"");
} else {
return G__68126;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info(line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info(col_part)], null);
}
}
});
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__5141__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68137_SHARP_){
return (p1__68137_SHARP_ <= (column__$1 - (1)));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});
var adjust = (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__68138_SHARP_,p2__68139_SHARP_){
return (p1__68138_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__68138_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__68139_SHARP_) : p1__68138_SHARP_.call(null,p2__68139_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__5821__auto__)){
var columns = temp__5821__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__68186,sms,opts){
var map__68188 = p__68186;
var map__68188__$1 = cljs.core.__destructure_map(map__68188);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68188__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68188__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68188__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68188__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__68195 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68195,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68195,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68195,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3))))+".cljs"):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?(""+"NO_SOURCE_FILE"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)):null))):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__68213 = arguments.length;
switch (G__68213) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__68205_SHARP_){
return cljs.stacktrace.mapped_frame(p1__68205_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68206_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__68206_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
}),mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
}));

(cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3);

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__68238 = arguments.length;
switch (G__68238) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__5794__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__68247_68419 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__68248_68420 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__68250_68421 = true;
var _STAR_print_fn_STAR__temp_val__68251_68422 = (function (x__5795__auto__){
return sb__5794__auto__.append(x__5795__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68250_68421);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68251_68422);

try{var seq__68255_68425 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__68256_68426 = null;
var count__68257_68427 = (0);
var i__68258_68428 = (0);
while(true){
if((i__68258_68428 < count__68257_68427)){
var map__68281_68429 = chunk__68256_68426.cljs$core$IIndexed$_nth$arity$2(null,i__68258_68428);
var map__68281_68430__$1 = cljs.core.__destructure_map(map__68281_68429);
var function_68431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281_68430__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_68432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281_68430__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_68433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281_68430__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281_68430__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_68431)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_68431)+" "):null))+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_68432)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_68433)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68433)):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_68434)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68434)):null))+")")], 0));


var G__68439 = seq__68255_68425;
var G__68440 = chunk__68256_68426;
var G__68441 = count__68257_68427;
var G__68442 = (i__68258_68428 + (1));
seq__68255_68425 = G__68439;
chunk__68256_68426 = G__68440;
count__68257_68427 = G__68441;
i__68258_68428 = G__68442;
continue;
} else {
var temp__5823__auto___68444 = cljs.core.seq(seq__68255_68425);
if(temp__5823__auto___68444){
var seq__68255_68445__$1 = temp__5823__auto___68444;
if(cljs.core.chunked_seq_QMARK_(seq__68255_68445__$1)){
var c__5672__auto___68446 = cljs.core.chunk_first(seq__68255_68445__$1);
var G__68447 = cljs.core.chunk_rest(seq__68255_68445__$1);
var G__68448 = c__5672__auto___68446;
var G__68449 = cljs.core.count(c__5672__auto___68446);
var G__68450 = (0);
seq__68255_68425 = G__68447;
chunk__68256_68426 = G__68448;
count__68257_68427 = G__68449;
i__68258_68428 = G__68450;
continue;
} else {
var map__68288_68453 = cljs.core.first(seq__68255_68445__$1);
var map__68288_68454__$1 = cljs.core.__destructure_map(map__68288_68453);
var function_68455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68288_68454__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_68456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68288_68454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_68457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68288_68454__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68288_68454__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_68455)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_68455)+" "):null))+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_68456)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_68457)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68457)):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_68458)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68458)):null))+")")], 0));


var G__68462 = cljs.core.next(seq__68255_68445__$1);
var G__68463 = null;
var G__68464 = (0);
var G__68465 = (0);
seq__68255_68425 = G__68462;
chunk__68256_68426 = G__68463;
count__68257_68427 = G__68464;
i__68258_68428 = G__68465;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68248_68420);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68247_68419);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5794__auto__));
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.stacktrace.js.map
