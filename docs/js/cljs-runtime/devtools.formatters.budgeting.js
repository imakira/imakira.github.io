import "./cljs_env.js";
import "./cljs.core.js";
import "./devtools.formatters.templating.js";
import "./devtools.formatters.state.js";
import "./devtools.formatters.helpers.js";
import "./devtools.formatters.markup.js";
goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__61488__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61488__auto__["add"]).call(o__61488__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__61488__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61488__auto__["delete"]).call(o__61488__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__61488__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61488__auto__["has"]).call(o__61488__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.truth_(cljs.core.array_QMARK_(json_ml))){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.truth_(cljs.core.array_QMARK_(json_ml))){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__74198 = data;
var target__61493__auto__ = G__74198;
if(cljs.core.truth_(target__61493__auto__)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"unable to locate object path "+" in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74198)))+"\n"+"target__61493__auto__")));
}

(target__61493__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__74198;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.truth_(cljs.core.array_QMARK_(json_ml))){
var new_depth_budget_74266 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_74266);
} else {
var seq__74211_74268 = cljs.core.seq(json_ml);
var chunk__74212_74269 = null;
var count__74213_74270 = (0);
var i__74214_74271 = (0);
while(true){
if((i__74214_74271 < count__74213_74270)){
var item_74275 = chunk__74212_74269.cljs$core$IIndexed$_nth$arity$2(null,i__74214_74271);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_74275,new_depth_budget_74266) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_74275,new_depth_budget_74266));


var G__74278 = seq__74211_74268;
var G__74279 = chunk__74212_74269;
var G__74280 = count__74213_74270;
var G__74281 = (i__74214_74271 + (1));
seq__74211_74268 = G__74278;
chunk__74212_74269 = G__74279;
count__74213_74270 = G__74280;
i__74214_74271 = G__74281;
continue;
} else {
var temp__5823__auto___74282 = cljs.core.seq(seq__74211_74268);
if(temp__5823__auto___74282){
var seq__74211_74283__$1 = temp__5823__auto___74282;
if(cljs.core.chunked_seq_QMARK_(seq__74211_74283__$1)){
var c__5672__auto___74285 = cljs.core.chunk_first(seq__74211_74283__$1);
var G__74286 = cljs.core.chunk_rest(seq__74211_74283__$1);
var G__74287 = c__5672__auto___74285;
var G__74288 = cljs.core.count(c__5672__auto___74285);
var G__74289 = (0);
seq__74211_74268 = G__74286;
chunk__74212_74269 = G__74287;
count__74213_74270 = G__74288;
i__74214_74271 = G__74289;
continue;
} else {
var item_74291 = cljs.core.first(seq__74211_74283__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_74291,new_depth_budget_74266) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_74291,new_depth_budget_74266));


var G__74292 = cljs.core.next(seq__74211_74283__$1);
var G__74293 = null;
var G__74294 = (0);
var G__74295 = (0);
seq__74211_74268 = G__74292;
chunk__74212_74269 = G__74293;
count__74213_74270 = G__74294;
i__74214_74271 = G__74295;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5821__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5821__auto__)){
var initial_hierarchy_depth_budget = temp__5821__auto__;
var remaining_depth_budget = (function (){var or__5141__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
