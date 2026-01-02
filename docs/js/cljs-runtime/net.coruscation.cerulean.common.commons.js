import "./cljs_env.js";
import "./cljs.core.js";
import "./cljc.java_time.format.date_time_formatter.js";
import "./cljc.java_time.zoned_date_time.js";
goog.provide('net.coruscation.cerulean.common.commons');
net.coruscation.cerulean.common.commons.index_by = (function net$coruscation$cerulean$common$commons$index_by(f,coll){
return cljs.core.first(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__83680){
var vec__83681 = p__83680;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83681,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83681,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll))));
});
net.coruscation.cerulean.common.commons.parse_iso8601 = (function net$coruscation$cerulean$common$commons$parse_iso8601(timestr){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2(timestr,cljc.java_time.format.date_time_formatter.iso_offset_date_time);
});

//# sourceMappingURL=net.coruscation.cerulean.common.commons.js.map
