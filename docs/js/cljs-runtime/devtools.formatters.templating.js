import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.walk.js";
import "./devtools.util.js";
import "./devtools.protocols.js";
import "./devtools.formatters.helpers.js";
import "./devtools.formatters.state.js";
import "./clojure.string.js";
goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x72574_73017 = value;
(x72574_73017.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x72589_73020 = value;
(x72589_73020.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x72592_73022 = value;
(x72592_73022.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__5881__auto__ = [];
var len__5875__auto___73026 = arguments.length;
var i__5876__auto___73027 = (0);
while(true){
if((i__5876__auto___73027 < len__5875__auto___73026)){
args__5881__auto__.push((arguments[i__5876__auto___73027]));

var G__73028 = (i__5876__auto___73027 + (1));
i__5876__auto___73027 = G__73028;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__72610_73031 = cljs.core.seq(items);
var chunk__72611_73032 = null;
var count__72612_73033 = (0);
var i__72613_73034 = (0);
while(true){
if((i__72613_73034 < count__72612_73033)){
var item_73035 = chunk__72611_73032.cljs$core$IIndexed$_nth$arity$2(null,i__72613_73034);
if((!((item_73035 == null)))){
if(cljs.core.coll_QMARK_(item_73035)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_73035)));
} else {
group.push(devtools.formatters.helpers.pref(item_73035));
}
} else {
}


var G__73037 = seq__72610_73031;
var G__73038 = chunk__72611_73032;
var G__73039 = count__72612_73033;
var G__73040 = (i__72613_73034 + (1));
seq__72610_73031 = G__73037;
chunk__72611_73032 = G__73038;
count__72612_73033 = G__73039;
i__72613_73034 = G__73040;
continue;
} else {
var temp__5823__auto___73041 = cljs.core.seq(seq__72610_73031);
if(temp__5823__auto___73041){
var seq__72610_73042__$1 = temp__5823__auto___73041;
if(cljs.core.chunked_seq_QMARK_(seq__72610_73042__$1)){
var c__5672__auto___73043 = cljs.core.chunk_first(seq__72610_73042__$1);
var G__73047 = cljs.core.chunk_rest(seq__72610_73042__$1);
var G__73048 = c__5672__auto___73043;
var G__73049 = cljs.core.count(c__5672__auto___73043);
var G__73050 = (0);
seq__72610_73031 = G__73047;
chunk__72611_73032 = G__73048;
count__72612_73033 = G__73049;
i__72613_73034 = G__73050;
continue;
} else {
var item_73051 = cljs.core.first(seq__72610_73042__$1);
if((!((item_73051 == null)))){
if(cljs.core.coll_QMARK_(item_73051)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_73051)));
} else {
group.push(devtools.formatters.helpers.pref(item_73051));
}
} else {
}


var G__73052 = cljs.core.next(seq__72610_73042__$1);
var G__73053 = null;
var G__73054 = (0);
var G__73055 = (0);
seq__72610_73031 = G__73052;
chunk__72611_73032 = G__73053;
count__72612_73033 = G__73054;
i__72613_73034 = G__73055;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq72608){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72608));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__5881__auto__ = [];
var len__5875__auto___73056 = arguments.length;
var i__5876__auto___73057 = (0);
while(true){
if((i__5876__auto___73057 < len__5875__auto___73056)){
args__5881__auto__.push((arguments[i__5876__auto___73057]));

var G__73058 = (i__5876__auto___73057 + (1));
i__5876__auto___73057 = G__73058;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((2) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5882__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__72704_73059 = cljs.core.seq(children);
var chunk__72705_73060 = null;
var count__72706_73061 = (0);
var i__72707_73062 = (0);
while(true){
if((i__72707_73062 < count__72706_73061)){
var child_73063 = chunk__72705_73060.cljs$core$IIndexed$_nth$arity$2(null,i__72707_73062);
if((!((child_73063 == null)))){
if(cljs.core.coll_QMARK_(child_73063)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_73063))));
} else {
var temp__5821__auto___73064 = devtools.formatters.helpers.pref(child_73063);
if(cljs.core.truth_(temp__5821__auto___73064)){
var child_value_73066 = temp__5821__auto___73064;
template.push(child_value_73066);
} else {
}
}
} else {
}


var G__73071 = seq__72704_73059;
var G__73072 = chunk__72705_73060;
var G__73073 = count__72706_73061;
var G__73074 = (i__72707_73062 + (1));
seq__72704_73059 = G__73071;
chunk__72705_73060 = G__73072;
count__72706_73061 = G__73073;
i__72707_73062 = G__73074;
continue;
} else {
var temp__5823__auto___73075 = cljs.core.seq(seq__72704_73059);
if(temp__5823__auto___73075){
var seq__72704_73077__$1 = temp__5823__auto___73075;
if(cljs.core.chunked_seq_QMARK_(seq__72704_73077__$1)){
var c__5672__auto___73079 = cljs.core.chunk_first(seq__72704_73077__$1);
var G__73080 = cljs.core.chunk_rest(seq__72704_73077__$1);
var G__73081 = c__5672__auto___73079;
var G__73082 = cljs.core.count(c__5672__auto___73079);
var G__73083 = (0);
seq__72704_73059 = G__73080;
chunk__72705_73060 = G__73081;
count__72706_73061 = G__73082;
i__72707_73062 = G__73083;
continue;
} else {
var child_73084 = cljs.core.first(seq__72704_73077__$1);
if((!((child_73084 == null)))){
if(cljs.core.coll_QMARK_(child_73084)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_73084))));
} else {
var temp__5821__auto___73090 = devtools.formatters.helpers.pref(child_73084);
if(cljs.core.truth_(temp__5821__auto___73090)){
var child_value_73091 = temp__5821__auto___73090;
template.push(child_value_73091);
} else {
}
}
} else {
}


var G__73092 = cljs.core.next(seq__72704_73077__$1);
var G__73093 = null;
var G__73094 = (0);
var G__73095 = (0);
seq__72704_73059 = G__73092;
chunk__72705_73060 = G__73093;
count__72706_73061 = G__73094;
i__72707_73062 = G__73095;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq72695){
var G__72696 = cljs.core.first(seq72695);
var seq72695__$1 = cljs.core.next(seq72695);
var G__72697 = cljs.core.first(seq72695__$1);
var seq72695__$2 = cljs.core.next(seq72695__$1);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72696,G__72697,seq72695__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__5881__auto__ = [];
var len__5875__auto___73096 = arguments.length;
var i__5876__auto___73097 = (0);
while(true){
if((i__5876__auto___73097 < len__5875__auto___73096)){
args__5881__auto__.push((arguments[i__5876__auto___73097]));

var G__73098 = (i__5876__auto___73097 + (1));
i__5876__auto___73097 = G__73098;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq72745){
var G__72746 = cljs.core.first(seq72745);
var seq72745__$1 = cljs.core.next(seq72745);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72746,seq72745__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__5881__auto__ = [];
var len__5875__auto___73106 = arguments.length;
var i__5876__auto___73108 = (0);
while(true){
if((i__5876__auto___73108 < len__5875__auto___73106)){
args__5881__auto__.push((arguments[i__5876__auto___73108]));

var G__73111 = (i__5876__auto___73108 + (1));
i__5876__auto___73108 = G__73111;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq72764){
var G__72765 = cljs.core.first(seq72764);
var seq72764__$1 = cljs.core.next(seq72764);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72765,seq72764__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__72792 = arguments.length;
switch (G__72792) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj72810 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__5141__auto__ = start_index;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return (0);
}
})()});
return obj72810;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__5881__auto__ = [];
var len__5875__auto___73137 = arguments.length;
var i__5876__auto___73138 = (0);
while(true){
if((i__5876__auto___73138 < len__5875__auto___73137)){
args__5881__auto__.push((arguments[i__5876__auto___73138]));

var G__73139 = (i__5876__auto___73138 + (1));
i__5876__auto___73138 = G__73139;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__72878){
var vec__72880 = p__72878;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72880,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__72895 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__72895) : state_override_fn.call(null,G__72895));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq72871){
var G__72872 = cljs.core.first(seq72871);
var seq72871__$1 = cljs.core.next(seq72871);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72872,seq72871__$1);
}));

devtools.formatters.templating.make_annotation = (function devtools$formatters$templating$make_annotation(data,markups){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_group,"annotation",cljs.core.clj__GT_js(data),markups);
});
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__72909 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__72910 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__72910);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__72909);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)+"\n"+"Render path: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_))+"\n"+"Render stack:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_))))+"\n"+"false")));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__72945 = name;
switch (G__72945) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
case "annotation":
var data = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return devtools.formatters.templating.make_annotation(data,converted_args);

break;
default:
return devtools.formatters.templating.assert_markup_error((""+"no matching special tag name: '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"'"));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(cljs.core.truth_((function (){var or__5141__auto__ = cljs.core.seqable_QMARK_(v);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = cljs.core.array_QMARK_(v);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
return typeof v === 'string';
}
}
})())){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__72985 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72985,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72985,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__72993 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__72994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__72994);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error((""+"invalid json-ml markup at "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup))+":"));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__72993);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__73000 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__73001 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__73002 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__73003 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__73002);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__73003);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__73001);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__73000);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"result of markup rendering must be a template,\n"+"resolved to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))+"initial value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0)))))+"\n"+"false")));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__73188 = initial_value;
var G__73189 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__73188;
value = G__73189;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__73190 = initial_value;
var G__73191 = devtools.formatters.helpers.pref(value);
initial_value = G__73190;
value = G__73191;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__73192 = initial_value;
var G__73193 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__73192;
value = G__73193;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});

//# sourceMappingURL=devtools.formatters.templating.js.map
