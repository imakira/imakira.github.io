import "./cljs_env.js";
import "./cljs.core.js";
import "./cljc.java_time.format.date_time_formatter.js";
import "./cljc.java_time.local_date.js";
import "./cljc.java_time.local_date_time.js";
import "./cljc.java_time.local_time.js";
import "./cljc.java_time.zone_id.js";
import "./cljc.java_time.zoned_date_time.js";
goog.provide('net.coruscation.cerulean.common.commons');
net.coruscation.cerulean.common.commons.index_by = (function net$coruscation$cerulean$common$commons$index_by(f,coll){
return cljs.core.first(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__57463){
var vec__57464 = p__57463;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57464,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57464,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll))));
});
net.coruscation.cerulean.common.commons.parse_iso8601 = (function net$coruscation$cerulean$common$commons$parse_iso8601(timestr){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2(timestr,cljc.java_time.format.date_time_formatter.iso_offset_date_time);
});
/**
 * Parse org timestamp inserted with `org-timestamp`, example: <2026-01-24 Sat>
 *   Throw an Exception if not supported
 */
net.coruscation.cerulean.common.commons.parse_org_timestamp = (function net$coruscation$cerulean$common$commons$parse_org_timestamp(timestr){
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2(cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2(timestr,cljc.java_time.format.date_time_formatter.of_pattern.cljs$core$IFn$_invoke$arity$1("<yyyy-MM-dd EEE>")),cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3((0),(0),(0))),cljc.java_time.zone_id.system_default());
});
/**
 * Supporting two format:
 *   1. org-mode timestamp inserted using `org-timestamp`, example: <2026-01-24 Sat>
 *   2. iso8601 timestamp
 */
net.coruscation.cerulean.common.commons.parse_timestamp = (function net$coruscation$cerulean$common$commons$parse_timestamp(timestr){
try{return net.coruscation.cerulean.common.commons.parse_iso8601(timestr);
}catch (e57467){if((e57467 instanceof Error)){
var _ = e57467;
try{return net.coruscation.cerulean.common.commons.parse_org_timestamp(timestr);
}catch (e57468){if((e57468 instanceof Error)){
var ___$1 = e57468;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can not parse timestamp: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestr], null));
} else {
throw e57468;

}
}} else {
throw e57467;

}
}});
net.coruscation.cerulean.common.commons.to_iso8601 = (function net$coruscation$cerulean$common$commons$to_iso8601(zdt){
return cljc.java_time.zoned_date_time.format(zdt,cljc.java_time.format.date_time_formatter.iso_offset_date_time);
});
net.coruscation.cerulean.common.commons.call_once_BANG_ = (function net$coruscation$cerulean$common$commons$call_once_BANG_(f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__57469__delegate = function (args){
var temp__5823__auto__ = cljs.core.find(cljs.core.deref(mem),args);
if(cljs.core.truth_(temp__5823__auto__)){
var e = temp__5823__auto__;
return cljs.core.val(e);
} else {
var temp__5823__auto____$1 = cljs.core.find(cljs.core.deref(mem),args);
if(cljs.core.truth_(temp__5823__auto____$1)){
var e = temp__5823__auto____$1;
return cljs.core.val(e);
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
}
}
};
var G__57469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57470__i = 0, G__57470__a = new Array(arguments.length -  0);
while (G__57470__i < G__57470__a.length) {G__57470__a[G__57470__i] = arguments[G__57470__i + 0]; ++G__57470__i;}
  args = new cljs.core.IndexedSeq(G__57470__a,0,null);
} 
return G__57469__delegate.call(this,args);};
G__57469.cljs$lang$maxFixedArity = 0;
G__57469.cljs$lang$applyTo = (function (arglist__57471){
var args = cljs.core.seq(arglist__57471);
return G__57469__delegate(args);
});
G__57469.cljs$core$IFn$_invoke$arity$variadic = G__57469__delegate;
return G__57469;
})()
;
});

//# sourceMappingURL=net.coruscation.cerulean.common.commons.js.map
