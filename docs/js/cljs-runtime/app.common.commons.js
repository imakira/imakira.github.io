goog.provide('app.common.commons');
app.common.commons.index_by = (function app$common$commons$index_by(f,coll){
return cljs.core.first(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__77080){
var vec__77081 = p__77080;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77081,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77081,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll))));
});
app.common.commons.parse_iso8601 = (function app$common$commons$parse_iso8601(timestr){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2(timestr,cljc.java_time.format.date_time_formatter.iso_offset_date_time);
});

//# sourceMappingURL=app.common.commons.js.map
