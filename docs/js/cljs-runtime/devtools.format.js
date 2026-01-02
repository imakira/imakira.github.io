import "./cljs_env.js";
import "./cljs.core.js";
import "./devtools.context.js";
goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_67836 = (function (value){
var x__5497__auto__ = (((value == null))?null:value);
var m__5498__auto__ = (devtools.format._header[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5498__auto__.call(null,value));
} else {
var m__5496__auto__ = (devtools.format._header["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5496__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_67836(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_67850 = (function (value){
var x__5497__auto__ = (((value == null))?null:value);
var m__5498__auto__ = (devtools.format._has_body[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5498__auto__.call(null,value));
} else {
var m__5496__auto__ = (devtools.format._has_body["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5496__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_67850(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_67877 = (function (value){
var x__5497__auto__ = (((value == null))?null:value);
var m__5498__auto__ = (devtools.format._body[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5498__auto__.call(null,value));
} else {
var m__5496__auto__ = (devtools.format._body["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5496__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_67877(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o67633 = temp__5821__auto__;
var temp__5821__auto____$1 = (o67633["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o67635 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o67635["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o67636 = temp__5821__auto____$2;
return (o67636["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o67640 = temp__5821__auto__;
var temp__5821__auto____$1 = (o67640["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o67641 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o67641["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o67642 = temp__5821__auto____$2;
return (o67642["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o67649 = temp__5821__auto__;
var temp__5821__auto____$1 = (o67649["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o67650 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o67650["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o67651 = temp__5821__auto____$2;
return (o67651["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o67657 = temp__5821__auto__;
var temp__5821__auto____$1 = (o67657["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o67658 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o67658["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o67659 = temp__5821__auto____$2;
return (o67659["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o67661 = temp__5821__auto__;
var temp__5821__auto____$1 = (o67661["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o67662 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o67662["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o67663 = temp__5821__auto____$2;
return (o67663["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o67665 = temp__5821__auto__;
var temp__5821__auto____$1 = (o67665["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o67666 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o67666["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o67667 = temp__5821__auto____$2;
return (o67667["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o67668 = temp__5821__auto__;
var temp__5821__auto____$1 = (o67668["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o67669 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o67669["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o67670 = temp__5821__auto____$2;
return (o67670["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5881__auto__ = [];
var len__5875__auto___67984 = arguments.length;
var i__5876__auto___67985 = (0);
while(true){
if((i__5876__auto___67985 < len__5875__auto___67984)){
args__5881__auto__.push((arguments[i__5876__auto___67985]));

var G__67986 = (i__5876__auto___67985 + (1));
i__5876__auto___67985 = G__67986;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq67683){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67683));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68000 = arguments.length;
var i__5876__auto___68001 = (0);
while(true){
if((i__5876__auto___68001 < len__5875__auto___68000)){
args__5881__auto__.push((arguments[i__5876__auto___68001]));

var G__68002 = (i__5876__auto___68001 + (1));
i__5876__auto___68001 = G__68002;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq67688){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67688));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68005 = arguments.length;
var i__5876__auto___68006 = (0);
while(true){
if((i__5876__auto___68006 < len__5875__auto___68005)){
args__5881__auto__.push((arguments[i__5876__auto___68006]));

var G__68007 = (i__5876__auto___68006 + (1));
i__5876__auto___68006 = G__68007;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq67703){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67703));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68023 = arguments.length;
var i__5876__auto___68024 = (0);
while(true){
if((i__5876__auto___68024 < len__5875__auto___68023)){
args__5881__auto__.push((arguments[i__5876__auto___68024]));

var G__68079 = (i__5876__auto___68024 + (1));
i__5876__auto___68024 = G__68079;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq67709){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67709));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68080 = arguments.length;
var i__5876__auto___68081 = (0);
while(true){
if((i__5876__auto___68081 < len__5875__auto___68080)){
args__5881__auto__.push((arguments[i__5876__auto___68081]));

var G__68090 = (i__5876__auto___68081 + (1));
i__5876__auto___68081 = G__68090;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq67713){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67713));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68096 = arguments.length;
var i__5876__auto___68097 = (0);
while(true){
if((i__5876__auto___68097 < len__5875__auto___68096)){
args__5881__auto__.push((arguments[i__5876__auto___68097]));

var G__68098 = (i__5876__auto___68097 + (1));
i__5876__auto___68097 = G__68098;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq67722){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67722));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68117 = arguments.length;
var i__5876__auto___68118 = (0);
while(true){
if((i__5876__auto___68118 < len__5875__auto___68117)){
args__5881__auto__.push((arguments[i__5876__auto___68118]));

var G__68119 = (i__5876__auto___68118 + (1));
i__5876__auto___68118 = G__68119;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq67747){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67747));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68129 = arguments.length;
var i__5876__auto___68130 = (0);
while(true){
if((i__5876__auto___68130 < len__5875__auto___68129)){
args__5881__auto__.push((arguments[i__5876__auto___68130]));

var G__68131 = (i__5876__auto___68130 + (1));
i__5876__auto___68130 = G__68131;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__67758){
var vec__67759 = p__67758;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67759,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__67751_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__67751_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq67752){
var G__67753 = cljs.core.first(seq67752);
var seq67752__$1 = cljs.core.next(seq67752);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67753,seq67752__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__67776 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__67777 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__67778 = (function (){var G__67785 = new cljs.core.Keyword(null,"li","li",723558921);
var G__67786 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__67787 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__67785,G__67786,G__67787) : devtools.format.make_template_fn.call(null,G__67785,G__67786,G__67787));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__67776,G__67777,G__67778) : devtools.format.make_template_fn.call(null,G__67776,G__67777,G__67778));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68144 = arguments.length;
var i__5876__auto___68145 = (0);
while(true){
if((i__5876__auto___68145 < len__5875__auto___68144)){
args__5881__auto__.push((arguments[i__5876__auto___68145]));

var G__68147 = (i__5876__auto___68145 + (1));
i__5876__auto___68145 = G__68147;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq67788){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67788));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5881__auto__ = [];
var len__5875__auto___68152 = arguments.length;
var i__5876__auto___68153 = (0);
while(true){
if((i__5876__auto___68153 < len__5875__auto___68152)){
args__5881__auto__.push((arguments[i__5876__auto___68153]));

var G__68156 = (i__5876__auto___68153 + (1));
i__5876__auto___68153 = G__68156;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq67805){
var G__67806 = cljs.core.first(seq67805);
var seq67805__$1 = cljs.core.next(seq67805);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67806,seq67805__$1);
}));


//# sourceMappingURL=devtools.format.js.map
