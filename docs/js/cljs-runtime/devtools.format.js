import "./cljs_env.js";
import "./cljs.core.js";
import "./devtools.context.js";
goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_69378 = (function (value){
var x__5498__auto__ = (((value == null))?null:value);
var m__5499__auto__ = (devtools.format._header[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5499__auto__.call(null,value));
} else {
var m__5497__auto__ = (devtools.format._header["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5497__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_69378(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_69380 = (function (value){
var x__5498__auto__ = (((value == null))?null:value);
var m__5499__auto__ = (devtools.format._has_body[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5499__auto__.call(null,value));
} else {
var m__5497__auto__ = (devtools.format._has_body["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5497__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_69380(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_69382 = (function (value){
var x__5498__auto__ = (((value == null))?null:value);
var m__5499__auto__ = (devtools.format._body[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5499__auto__.call(null,value));
} else {
var m__5497__auto__ = (devtools.format._body["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5497__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_69382(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o69200 = temp__5823__auto__;
var temp__5823__auto____$1 = (o69200["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o69201 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o69201["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o69202 = temp__5823__auto____$2;
return (o69202["make_template"]);
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

devtools.format.make_group_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o69207 = temp__5823__auto__;
var temp__5823__auto____$1 = (o69207["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o69208 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o69208["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o69209 = temp__5823__auto____$2;
return (o69209["make_group"]);
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

devtools.format.make_reference_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o69215 = temp__5823__auto__;
var temp__5823__auto____$1 = (o69215["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o69216 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o69216["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o69217 = temp__5823__auto____$2;
return (o69217["make_reference"]);
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

devtools.format.make_surrogate_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o69228 = temp__5823__auto__;
var temp__5823__auto____$1 = (o69228["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o69229 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o69229["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o69231 = temp__5823__auto____$2;
return (o69231["make_surrogate"]);
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

devtools.format.render_markup_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o69236 = temp__5823__auto__;
var temp__5823__auto____$1 = (o69236["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o69237 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o69237["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o69238 = temp__5823__auto____$2;
return (o69238["render_markup"]);
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

devtools.format._LT_header_GT__fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o69239 = temp__5823__auto__;
var temp__5823__auto____$1 = (o69239["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o69240 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o69240["markup"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o69241 = temp__5823__auto____$2;
return (o69241["_LT_header_GT_"]);
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o69246 = temp__5823__auto__;
var temp__5823__auto____$1 = (o69246["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o69247 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o69247["markup"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o69248 = temp__5823__auto____$2;
return (o69248["_LT_standard_body_GT_"]);
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
var args__5882__auto__ = [];
var len__5876__auto___69394 = arguments.length;
var i__5877__auto___69395 = (0);
while(true){
if((i__5877__auto___69395 < len__5876__auto___69394)){
args__5882__auto__.push((arguments[i__5877__auto___69395]));

var G__69396 = (i__5877__auto___69395 + (1));
i__5877__auto___69395 = G__69396;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq69252){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69252));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69399 = arguments.length;
var i__5877__auto___69400 = (0);
while(true){
if((i__5877__auto___69400 < len__5876__auto___69399)){
args__5882__auto__.push((arguments[i__5877__auto___69400]));

var G__69401 = (i__5877__auto___69400 + (1));
i__5877__auto___69400 = G__69401;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq69261){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69261));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69403 = arguments.length;
var i__5877__auto___69404 = (0);
while(true){
if((i__5877__auto___69404 < len__5876__auto___69403)){
args__5882__auto__.push((arguments[i__5877__auto___69404]));

var G__69405 = (i__5877__auto___69404 + (1));
i__5877__auto___69404 = G__69405;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq69276){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69276));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69408 = arguments.length;
var i__5877__auto___69409 = (0);
while(true){
if((i__5877__auto___69409 < len__5876__auto___69408)){
args__5882__auto__.push((arguments[i__5877__auto___69409]));

var G__69410 = (i__5877__auto___69409 + (1));
i__5877__auto___69409 = G__69410;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq69290){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69290));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69413 = arguments.length;
var i__5877__auto___69414 = (0);
while(true){
if((i__5877__auto___69414 < len__5876__auto___69413)){
args__5882__auto__.push((arguments[i__5877__auto___69414]));

var G__69415 = (i__5877__auto___69414 + (1));
i__5877__auto___69414 = G__69415;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq69298){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69298));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69417 = arguments.length;
var i__5877__auto___69418 = (0);
while(true){
if((i__5877__auto___69418 < len__5876__auto___69417)){
args__5882__auto__.push((arguments[i__5877__auto___69418]));

var G__69419 = (i__5877__auto___69418 + (1));
i__5877__auto___69418 = G__69419;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq69308){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69308));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69422 = arguments.length;
var i__5877__auto___69423 = (0);
while(true){
if((i__5877__auto___69423 < len__5876__auto___69422)){
args__5882__auto__.push((arguments[i__5877__auto___69423]));

var G__69426 = (i__5877__auto___69423 + (1));
i__5877__auto___69423 = G__69426;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq69323){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69323));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69427 = arguments.length;
var i__5877__auto___69428 = (0);
while(true){
if((i__5877__auto___69428 < len__5876__auto___69427)){
args__5882__auto__.push((arguments[i__5877__auto___69428]));

var G__69430 = (i__5877__auto___69428 + (1));
i__5877__auto___69428 = G__69430;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__69344){
var vec__69345 = p__69344;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69345,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__69332_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__69332_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq69335){
var G__69336 = cljs.core.first(seq69335);
var seq69335__$1 = cljs.core.next(seq69335);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69336,seq69335__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__69355 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__69356 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__69357 = (function (){var G__69358 = new cljs.core.Keyword(null,"li","li",723558921);
var G__69359 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__69360 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__69358,G__69359,G__69360) : devtools.format.make_template_fn.call(null,G__69358,G__69359,G__69360));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__69355,G__69356,G__69357) : devtools.format.make_template_fn.call(null,G__69355,G__69356,G__69357));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69439 = arguments.length;
var i__5877__auto___69440 = (0);
while(true){
if((i__5877__auto___69440 < len__5876__auto___69439)){
args__5882__auto__.push((arguments[i__5877__auto___69440]));

var G__69441 = (i__5877__auto___69440 + (1));
i__5877__auto___69440 = G__69441;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq69362){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69362));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69447 = arguments.length;
var i__5877__auto___69448 = (0);
while(true){
if((i__5877__auto___69448 < len__5876__auto___69447)){
args__5882__auto__.push((arguments[i__5877__auto___69448]));

var G__69450 = (i__5877__auto___69448 + (1));
i__5877__auto___69448 = G__69450;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
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
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq69369){
var G__69370 = cljs.core.first(seq69369);
var seq69369__$1 = cljs.core.next(seq69369);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69370,seq69369__$1);
}));


//# sourceMappingURL=devtools.format.js.map
