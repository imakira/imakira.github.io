goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__5025__auto__ = elem.textContent;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__104714 = arguments.length;
switch (G__104714) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5821__auto__ = elem.classList;
if(cljs.core.truth_(temp__5821__auto__)){
var class_list = temp__5821__auto__;
return class_list.contains(c__$1);
} else {
var temp__5823__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5823__auto__)){
var class_name = temp__5823__auto__;
var temp__5823__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5823__auto____$1)){
var i = temp__5823__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__104757 = arguments.length;
switch (G__104757) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__104761 = arguments.length;
switch (G__104761) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__104759_SHARP_){
return (!((p1__104759_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___105401 = arguments.length;
var i__5750__auto___105402 = (0);
while(true){
if((i__5750__auto___105402 < len__5749__auto___105401)){
args__5755__auto__.push((arguments[i__5750__auto___105402]));

var G__105403 = (i__5750__auto___105402 + (1));
i__5750__auto___105402 = G__105403;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__104784_105404 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__104785_105405 = null;
var count__104786_105406 = (0);
var i__104787_105407 = (0);
while(true){
if((i__104787_105407 < count__104786_105406)){
var vec__104801_105408 = chunk__104785_105405.cljs$core$IIndexed$_nth$arity$2(null,i__104787_105407);
var k_105409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104801_105408,(0),null);
var v_105410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104801_105408,(1),null);
style.setProperty(dommy.utils.as_str(k_105409),v_105410);


var G__105411 = seq__104784_105404;
var G__105412 = chunk__104785_105405;
var G__105413 = count__104786_105406;
var G__105414 = (i__104787_105407 + (1));
seq__104784_105404 = G__105411;
chunk__104785_105405 = G__105412;
count__104786_105406 = G__105413;
i__104787_105407 = G__105414;
continue;
} else {
var temp__5823__auto___105415 = cljs.core.seq(seq__104784_105404);
if(temp__5823__auto___105415){
var seq__104784_105416__$1 = temp__5823__auto___105415;
if(cljs.core.chunked_seq_QMARK_(seq__104784_105416__$1)){
var c__5548__auto___105417 = cljs.core.chunk_first(seq__104784_105416__$1);
var G__105418 = cljs.core.chunk_rest(seq__104784_105416__$1);
var G__105419 = c__5548__auto___105417;
var G__105420 = cljs.core.count(c__5548__auto___105417);
var G__105421 = (0);
seq__104784_105404 = G__105418;
chunk__104785_105405 = G__105419;
count__104786_105406 = G__105420;
i__104787_105407 = G__105421;
continue;
} else {
var vec__104804_105422 = cljs.core.first(seq__104784_105416__$1);
var k_105423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104804_105422,(0),null);
var v_105424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104804_105422,(1),null);
style.setProperty(dommy.utils.as_str(k_105423),v_105424);


var G__105425 = cljs.core.next(seq__104784_105416__$1);
var G__105426 = null;
var G__105427 = (0);
var G__105428 = (0);
seq__104784_105404 = G__105425;
chunk__104785_105405 = G__105426;
count__104786_105406 = G__105427;
i__104787_105407 = G__105428;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq104773){
var G__104774 = cljs.core.first(seq104773);
var seq104773__$1 = cljs.core.next(seq104773);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104774,seq104773__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___105432 = arguments.length;
var i__5750__auto___105433 = (0);
while(true){
if((i__5750__auto___105433 < len__5749__auto___105432)){
args__5755__auto__.push((arguments[i__5750__auto___105433]));

var G__105434 = (i__5750__auto___105433 + (1));
i__5750__auto___105433 = G__105434;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__104812_105435 = cljs.core.seq(keywords);
var chunk__104813_105436 = null;
var count__104814_105437 = (0);
var i__104815_105438 = (0);
while(true){
if((i__104815_105438 < count__104814_105437)){
var kw_105440 = chunk__104813_105436.cljs$core$IIndexed$_nth$arity$2(null,i__104815_105438);
style.removeProperty(dommy.utils.as_str(kw_105440));


var G__105441 = seq__104812_105435;
var G__105442 = chunk__104813_105436;
var G__105443 = count__104814_105437;
var G__105444 = (i__104815_105438 + (1));
seq__104812_105435 = G__105441;
chunk__104813_105436 = G__105442;
count__104814_105437 = G__105443;
i__104815_105438 = G__105444;
continue;
} else {
var temp__5823__auto___105445 = cljs.core.seq(seq__104812_105435);
if(temp__5823__auto___105445){
var seq__104812_105446__$1 = temp__5823__auto___105445;
if(cljs.core.chunked_seq_QMARK_(seq__104812_105446__$1)){
var c__5548__auto___105447 = cljs.core.chunk_first(seq__104812_105446__$1);
var G__105448 = cljs.core.chunk_rest(seq__104812_105446__$1);
var G__105449 = c__5548__auto___105447;
var G__105450 = cljs.core.count(c__5548__auto___105447);
var G__105451 = (0);
seq__104812_105435 = G__105448;
chunk__104813_105436 = G__105449;
count__104814_105437 = G__105450;
i__104815_105438 = G__105451;
continue;
} else {
var kw_105452 = cljs.core.first(seq__104812_105446__$1);
style.removeProperty(dommy.utils.as_str(kw_105452));


var G__105453 = cljs.core.next(seq__104812_105446__$1);
var G__105454 = null;
var G__105455 = (0);
var G__105456 = (0);
seq__104812_105435 = G__105453;
chunk__104813_105436 = G__105454;
count__104814_105437 = G__105455;
i__104815_105438 = G__105456;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq104808){
var G__104809 = cljs.core.first(seq104808);
var seq104808__$1 = cljs.core.next(seq104808);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104809,seq104808__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___105457 = arguments.length;
var i__5750__auto___105458 = (0);
while(true){
if((i__5750__auto___105458 < len__5749__auto___105457)){
args__5755__auto__.push((arguments[i__5750__auto___105458]));

var G__105459 = (i__5750__auto___105458 + (1));
i__5750__auto___105458 = G__105459;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__104823_105460 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__104824_105461 = null;
var count__104825_105462 = (0);
var i__104826_105463 = (0);
while(true){
if((i__104826_105463 < count__104825_105462)){
var vec__104842_105464 = chunk__104824_105461.cljs$core$IIndexed$_nth$arity$2(null,i__104826_105463);
var k_105465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104842_105464,(0),null);
var v_105466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104842_105464,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_105465,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_105466),"px"].join('')], 0));


var G__105467 = seq__104823_105460;
var G__105468 = chunk__104824_105461;
var G__105469 = count__104825_105462;
var G__105470 = (i__104826_105463 + (1));
seq__104823_105460 = G__105467;
chunk__104824_105461 = G__105468;
count__104825_105462 = G__105469;
i__104826_105463 = G__105470;
continue;
} else {
var temp__5823__auto___105471 = cljs.core.seq(seq__104823_105460);
if(temp__5823__auto___105471){
var seq__104823_105472__$1 = temp__5823__auto___105471;
if(cljs.core.chunked_seq_QMARK_(seq__104823_105472__$1)){
var c__5548__auto___105473 = cljs.core.chunk_first(seq__104823_105472__$1);
var G__105474 = cljs.core.chunk_rest(seq__104823_105472__$1);
var G__105475 = c__5548__auto___105473;
var G__105476 = cljs.core.count(c__5548__auto___105473);
var G__105477 = (0);
seq__104823_105460 = G__105474;
chunk__104824_105461 = G__105475;
count__104825_105462 = G__105476;
i__104826_105463 = G__105477;
continue;
} else {
var vec__104845_105478 = cljs.core.first(seq__104823_105472__$1);
var k_105479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104845_105478,(0),null);
var v_105480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104845_105478,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_105479,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_105480),"px"].join('')], 0));


var G__105483 = cljs.core.next(seq__104823_105472__$1);
var G__105484 = null;
var G__105485 = (0);
var G__105486 = (0);
seq__104823_105460 = G__105483;
chunk__104824_105461 = G__105484;
count__104825_105462 = G__105485;
i__104826_105463 = G__105486;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq104818){
var G__104819 = cljs.core.first(seq104818);
var seq104818__$1 = cljs.core.next(seq104818);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104819,seq104818__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__104857 = arguments.length;
switch (G__104857) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___105488 = arguments.length;
var i__5750__auto___105489 = (0);
while(true){
if((i__5750__auto___105489 < len__5749__auto___105488)){
args_arr__5774__auto__.push((arguments[i__5750__auto___105489]));

var G__105490 = (i__5750__auto___105489 + (1));
i__5750__auto___105489 = G__105490;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__104862 = elem;
(G__104862[k__$1] = v);

return G__104862;
} else {
var G__104863 = elem;
G__104863.setAttribute(k__$1,v);

return G__104863;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__104864_105492 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__104865_105493 = null;
var count__104866_105494 = (0);
var i__104867_105495 = (0);
while(true){
if((i__104867_105495 < count__104866_105494)){
var vec__104874_105496 = chunk__104865_105493.cljs$core$IIndexed$_nth$arity$2(null,i__104867_105495);
var k_105497__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104874_105496,(0),null);
var v_105498__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104874_105496,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_105497__$1,v_105498__$1);


var G__105499 = seq__104864_105492;
var G__105500 = chunk__104865_105493;
var G__105501 = count__104866_105494;
var G__105502 = (i__104867_105495 + (1));
seq__104864_105492 = G__105499;
chunk__104865_105493 = G__105500;
count__104866_105494 = G__105501;
i__104867_105495 = G__105502;
continue;
} else {
var temp__5823__auto___105503 = cljs.core.seq(seq__104864_105492);
if(temp__5823__auto___105503){
var seq__104864_105504__$1 = temp__5823__auto___105503;
if(cljs.core.chunked_seq_QMARK_(seq__104864_105504__$1)){
var c__5548__auto___105505 = cljs.core.chunk_first(seq__104864_105504__$1);
var G__105506 = cljs.core.chunk_rest(seq__104864_105504__$1);
var G__105507 = c__5548__auto___105505;
var G__105508 = cljs.core.count(c__5548__auto___105505);
var G__105509 = (0);
seq__104864_105492 = G__105506;
chunk__104865_105493 = G__105507;
count__104866_105494 = G__105508;
i__104867_105495 = G__105509;
continue;
} else {
var vec__104878_105510 = cljs.core.first(seq__104864_105504__$1);
var k_105511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104878_105510,(0),null);
var v_105512__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104878_105510,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_105511__$1,v_105512__$1);


var G__105513 = cljs.core.next(seq__104864_105504__$1);
var G__105514 = null;
var G__105515 = (0);
var G__105516 = (0);
seq__104864_105492 = G__105513;
chunk__104865_105493 = G__105514;
count__104866_105494 = G__105515;
i__104867_105495 = G__105516;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq104853){
var G__104854 = cljs.core.first(seq104853);
var seq104853__$1 = cljs.core.next(seq104853);
var G__104855 = cljs.core.first(seq104853__$1);
var seq104853__$2 = cljs.core.next(seq104853__$1);
var G__104856 = cljs.core.first(seq104853__$2);
var seq104853__$3 = cljs.core.next(seq104853__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104854,G__104855,G__104856,seq104853__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__104885 = arguments.length;
switch (G__104885) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___105521 = arguments.length;
var i__5750__auto___105522 = (0);
while(true){
if((i__5750__auto___105522 < len__5749__auto___105521)){
args_arr__5774__auto__.push((arguments[i__5750__auto___105522]));

var G__105523 = (i__5750__auto___105522 + (1));
i__5750__auto___105522 = G__105523;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_105524__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__104886 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__104886.cljs$core$IFn$_invoke$arity$1 ? fexpr__104886.cljs$core$IFn$_invoke$arity$1(k_105524__$1) : fexpr__104886.call(null,k_105524__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_105524__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__104888_105526 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__104889_105527 = null;
var count__104890_105528 = (0);
var i__104891_105529 = (0);
while(true){
if((i__104891_105529 < count__104890_105528)){
var k_105531__$1 = chunk__104889_105527.cljs$core$IIndexed$_nth$arity$2(null,i__104891_105529);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_105531__$1);


var G__105532 = seq__104888_105526;
var G__105533 = chunk__104889_105527;
var G__105534 = count__104890_105528;
var G__105535 = (i__104891_105529 + (1));
seq__104888_105526 = G__105532;
chunk__104889_105527 = G__105533;
count__104890_105528 = G__105534;
i__104891_105529 = G__105535;
continue;
} else {
var temp__5823__auto___105536 = cljs.core.seq(seq__104888_105526);
if(temp__5823__auto___105536){
var seq__104888_105537__$1 = temp__5823__auto___105536;
if(cljs.core.chunked_seq_QMARK_(seq__104888_105537__$1)){
var c__5548__auto___105538 = cljs.core.chunk_first(seq__104888_105537__$1);
var G__105539 = cljs.core.chunk_rest(seq__104888_105537__$1);
var G__105540 = c__5548__auto___105538;
var G__105541 = cljs.core.count(c__5548__auto___105538);
var G__105542 = (0);
seq__104888_105526 = G__105539;
chunk__104889_105527 = G__105540;
count__104890_105528 = G__105541;
i__104891_105529 = G__105542;
continue;
} else {
var k_105543__$1 = cljs.core.first(seq__104888_105537__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_105543__$1);


var G__105544 = cljs.core.next(seq__104888_105537__$1);
var G__105545 = null;
var G__105546 = (0);
var G__105547 = (0);
seq__104888_105526 = G__105544;
chunk__104889_105527 = G__105545;
count__104890_105528 = G__105546;
i__104891_105529 = G__105547;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq104882){
var G__104883 = cljs.core.first(seq104882);
var seq104882__$1 = cljs.core.next(seq104882);
var G__104884 = cljs.core.first(seq104882__$1);
var seq104882__$2 = cljs.core.next(seq104882__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104883,G__104884,seq104882__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__104897 = arguments.length;
switch (G__104897) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__104904 = arguments.length;
switch (G__104904) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___105559 = arguments.length;
var i__5750__auto___105560 = (0);
while(true){
if((i__5750__auto___105560 < len__5749__auto___105559)){
args_arr__5774__auto__.push((arguments[i__5750__auto___105560]));

var G__105561 = (i__5750__auto___105560 + (1));
i__5750__auto___105560 = G__105561;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5821__auto___105563 = elem.classList;
if(cljs.core.truth_(temp__5821__auto___105563)){
var class_list_105564 = temp__5821__auto___105563;
var seq__104909_105565 = cljs.core.seq(classes__$1);
var chunk__104910_105566 = null;
var count__104911_105567 = (0);
var i__104912_105568 = (0);
while(true){
if((i__104912_105568 < count__104911_105567)){
var c_105569 = chunk__104910_105566.cljs$core$IIndexed$_nth$arity$2(null,i__104912_105568);
class_list_105564.add(c_105569);


var G__105570 = seq__104909_105565;
var G__105571 = chunk__104910_105566;
var G__105572 = count__104911_105567;
var G__105573 = (i__104912_105568 + (1));
seq__104909_105565 = G__105570;
chunk__104910_105566 = G__105571;
count__104911_105567 = G__105572;
i__104912_105568 = G__105573;
continue;
} else {
var temp__5823__auto___105578 = cljs.core.seq(seq__104909_105565);
if(temp__5823__auto___105578){
var seq__104909_105579__$1 = temp__5823__auto___105578;
if(cljs.core.chunked_seq_QMARK_(seq__104909_105579__$1)){
var c__5548__auto___105580 = cljs.core.chunk_first(seq__104909_105579__$1);
var G__105581 = cljs.core.chunk_rest(seq__104909_105579__$1);
var G__105582 = c__5548__auto___105580;
var G__105583 = cljs.core.count(c__5548__auto___105580);
var G__105584 = (0);
seq__104909_105565 = G__105581;
chunk__104910_105566 = G__105582;
count__104911_105567 = G__105583;
i__104912_105568 = G__105584;
continue;
} else {
var c_105585 = cljs.core.first(seq__104909_105579__$1);
class_list_105564.add(c_105585);


var G__105586 = cljs.core.next(seq__104909_105579__$1);
var G__105587 = null;
var G__105588 = (0);
var G__105589 = (0);
seq__104909_105565 = G__105586;
chunk__104910_105566 = G__105587;
count__104911_105567 = G__105588;
i__104912_105568 = G__105589;
continue;
}
} else {
}
}
break;
}
} else {
var seq__104915_105590 = cljs.core.seq(classes__$1);
var chunk__104916_105591 = null;
var count__104917_105592 = (0);
var i__104918_105593 = (0);
while(true){
if((i__104918_105593 < count__104917_105592)){
var c_105594 = chunk__104916_105591.cljs$core$IIndexed$_nth$arity$2(null,i__104918_105593);
var class_name_105595 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_105595,c_105594))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_105595 === ""))?c_105594:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_105595)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_105594)].join('')));
}


var G__105596 = seq__104915_105590;
var G__105597 = chunk__104916_105591;
var G__105598 = count__104917_105592;
var G__105599 = (i__104918_105593 + (1));
seq__104915_105590 = G__105596;
chunk__104916_105591 = G__105597;
count__104917_105592 = G__105598;
i__104918_105593 = G__105599;
continue;
} else {
var temp__5823__auto___105600 = cljs.core.seq(seq__104915_105590);
if(temp__5823__auto___105600){
var seq__104915_105601__$1 = temp__5823__auto___105600;
if(cljs.core.chunked_seq_QMARK_(seq__104915_105601__$1)){
var c__5548__auto___105602 = cljs.core.chunk_first(seq__104915_105601__$1);
var G__105603 = cljs.core.chunk_rest(seq__104915_105601__$1);
var G__105604 = c__5548__auto___105602;
var G__105605 = cljs.core.count(c__5548__auto___105602);
var G__105606 = (0);
seq__104915_105590 = G__105603;
chunk__104916_105591 = G__105604;
count__104917_105592 = G__105605;
i__104918_105593 = G__105606;
continue;
} else {
var c_105607 = cljs.core.first(seq__104915_105601__$1);
var class_name_105608 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_105608,c_105607))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_105608 === ""))?c_105607:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_105608)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_105607)].join('')));
}


var G__105611 = cljs.core.next(seq__104915_105601__$1);
var G__105612 = null;
var G__105613 = (0);
var G__105614 = (0);
seq__104915_105590 = G__105611;
chunk__104916_105591 = G__105612;
count__104917_105592 = G__105613;
i__104918_105593 = G__105614;
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

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__104928_105617 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__104929_105618 = null;
var count__104930_105619 = (0);
var i__104931_105620 = (0);
while(true){
if((i__104931_105620 < count__104930_105619)){
var c_105621 = chunk__104929_105618.cljs$core$IIndexed$_nth$arity$2(null,i__104931_105620);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_105621);


var G__105622 = seq__104928_105617;
var G__105623 = chunk__104929_105618;
var G__105624 = count__104930_105619;
var G__105625 = (i__104931_105620 + (1));
seq__104928_105617 = G__105622;
chunk__104929_105618 = G__105623;
count__104930_105619 = G__105624;
i__104931_105620 = G__105625;
continue;
} else {
var temp__5823__auto___105626 = cljs.core.seq(seq__104928_105617);
if(temp__5823__auto___105626){
var seq__104928_105627__$1 = temp__5823__auto___105626;
if(cljs.core.chunked_seq_QMARK_(seq__104928_105627__$1)){
var c__5548__auto___105628 = cljs.core.chunk_first(seq__104928_105627__$1);
var G__105629 = cljs.core.chunk_rest(seq__104928_105627__$1);
var G__105630 = c__5548__auto___105628;
var G__105631 = cljs.core.count(c__5548__auto___105628);
var G__105632 = (0);
seq__104928_105617 = G__105629;
chunk__104929_105618 = G__105630;
count__104930_105619 = G__105631;
i__104931_105620 = G__105632;
continue;
} else {
var c_105635 = cljs.core.first(seq__104928_105627__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_105635);


var G__105636 = cljs.core.next(seq__104928_105627__$1);
var G__105637 = null;
var G__105638 = (0);
var G__105639 = (0);
seq__104928_105617 = G__105636;
chunk__104929_105618 = G__105637;
count__104930_105619 = G__105638;
i__104931_105620 = G__105639;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq104899){
var G__104900 = cljs.core.first(seq104899);
var seq104899__$1 = cljs.core.next(seq104899);
var G__104901 = cljs.core.first(seq104899__$1);
var seq104899__$2 = cljs.core.next(seq104899__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104900,G__104901,seq104899__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__104938 = arguments.length;
switch (G__104938) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___105644 = arguments.length;
var i__5750__auto___105645 = (0);
while(true){
if((i__5750__auto___105645 < len__5749__auto___105644)){
args_arr__5774__auto__.push((arguments[i__5750__auto___105645]));

var G__105646 = (i__5750__auto___105645 + (1));
i__5750__auto___105645 = G__105646;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5821__auto___105653 = elem.classList;
if(cljs.core.truth_(temp__5821__auto___105653)){
var class_list_105654 = temp__5821__auto___105653;
class_list_105654.remove(c__$1);
} else {
var class_name_105655 = dommy.core.class$(elem);
var new_class_name_105656 = dommy.utils.remove_class_str(class_name_105655,c__$1);
if((class_name_105655 === new_class_name_105656)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_105656);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__104946 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__104947 = null;
var count__104948 = (0);
var i__104949 = (0);
while(true){
if((i__104949 < count__104948)){
var c = chunk__104947.cljs$core$IIndexed$_nth$arity$2(null,i__104949);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__105660 = seq__104946;
var G__105661 = chunk__104947;
var G__105662 = count__104948;
var G__105663 = (i__104949 + (1));
seq__104946 = G__105660;
chunk__104947 = G__105661;
count__104948 = G__105662;
i__104949 = G__105663;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__104946);
if(temp__5823__auto__){
var seq__104946__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__104946__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__104946__$1);
var G__105664 = cljs.core.chunk_rest(seq__104946__$1);
var G__105665 = c__5548__auto__;
var G__105666 = cljs.core.count(c__5548__auto__);
var G__105667 = (0);
seq__104946 = G__105664;
chunk__104947 = G__105665;
count__104948 = G__105666;
i__104949 = G__105667;
continue;
} else {
var c = cljs.core.first(seq__104946__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__105668 = cljs.core.next(seq__104946__$1);
var G__105669 = null;
var G__105670 = (0);
var G__105671 = (0);
seq__104946 = G__105668;
chunk__104947 = G__105669;
count__104948 = G__105670;
i__104949 = G__105671;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq104935){
var G__104936 = cljs.core.first(seq104935);
var seq104935__$1 = cljs.core.next(seq104935);
var G__104937 = cljs.core.first(seq104935__$1);
var seq104935__$2 = cljs.core.next(seq104935__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104936,G__104937,seq104935__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__104957 = arguments.length;
switch (G__104957) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5821__auto___105676 = elem.classList;
if(cljs.core.truth_(temp__5821__auto___105676)){
var class_list_105680 = temp__5821__auto___105676;
class_list_105680.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__104961 = arguments.length;
switch (G__104961) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__104966 = arguments.length;
switch (G__104966) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__104975 = arguments.length;
switch (G__104975) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___105687 = arguments.length;
var i__5750__auto___105688 = (0);
while(true){
if((i__5750__auto___105688 < len__5749__auto___105687)){
args_arr__5774__auto__.push((arguments[i__5750__auto___105688]));

var G__105689 = (i__5750__auto___105688 + (1));
i__5750__auto___105688 = G__105689;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__104976 = parent;
G__104976.appendChild(child);

return G__104976;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__104979_105690 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__104980_105691 = null;
var count__104981_105692 = (0);
var i__104982_105693 = (0);
while(true){
if((i__104982_105693 < count__104981_105692)){
var c_105694 = chunk__104980_105691.cljs$core$IIndexed$_nth$arity$2(null,i__104982_105693);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_105694);


var G__105696 = seq__104979_105690;
var G__105697 = chunk__104980_105691;
var G__105698 = count__104981_105692;
var G__105699 = (i__104982_105693 + (1));
seq__104979_105690 = G__105696;
chunk__104980_105691 = G__105697;
count__104981_105692 = G__105698;
i__104982_105693 = G__105699;
continue;
} else {
var temp__5823__auto___105701 = cljs.core.seq(seq__104979_105690);
if(temp__5823__auto___105701){
var seq__104979_105702__$1 = temp__5823__auto___105701;
if(cljs.core.chunked_seq_QMARK_(seq__104979_105702__$1)){
var c__5548__auto___105703 = cljs.core.chunk_first(seq__104979_105702__$1);
var G__105704 = cljs.core.chunk_rest(seq__104979_105702__$1);
var G__105705 = c__5548__auto___105703;
var G__105706 = cljs.core.count(c__5548__auto___105703);
var G__105707 = (0);
seq__104979_105690 = G__105704;
chunk__104980_105691 = G__105705;
count__104981_105692 = G__105706;
i__104982_105693 = G__105707;
continue;
} else {
var c_105708 = cljs.core.first(seq__104979_105702__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_105708);


var G__105709 = cljs.core.next(seq__104979_105702__$1);
var G__105710 = null;
var G__105711 = (0);
var G__105712 = (0);
seq__104979_105690 = G__105709;
chunk__104980_105691 = G__105710;
count__104981_105692 = G__105711;
i__104982_105693 = G__105712;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq104972){
var G__104973 = cljs.core.first(seq104972);
var seq104972__$1 = cljs.core.next(seq104972);
var G__104974 = cljs.core.first(seq104972__$1);
var seq104972__$2 = cljs.core.next(seq104972__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104973,G__104974,seq104972__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__104994 = arguments.length;
switch (G__104994) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___105719 = arguments.length;
var i__5750__auto___105720 = (0);
while(true){
if((i__5750__auto___105720 < len__5749__auto___105719)){
args_arr__5774__auto__.push((arguments[i__5750__auto___105720]));

var G__105721 = (i__5750__auto___105720 + (1));
i__5750__auto___105720 = G__105721;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__104995 = parent;
G__104995.insertBefore(child,parent.firstChild);

return G__104995;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__104996_105722 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__104997_105723 = null;
var count__104998_105724 = (0);
var i__104999_105725 = (0);
while(true){
if((i__104999_105725 < count__104998_105724)){
var c_105726 = chunk__104997_105723.cljs$core$IIndexed$_nth$arity$2(null,i__104999_105725);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_105726);


var G__105727 = seq__104996_105722;
var G__105728 = chunk__104997_105723;
var G__105729 = count__104998_105724;
var G__105730 = (i__104999_105725 + (1));
seq__104996_105722 = G__105727;
chunk__104997_105723 = G__105728;
count__104998_105724 = G__105729;
i__104999_105725 = G__105730;
continue;
} else {
var temp__5823__auto___105732 = cljs.core.seq(seq__104996_105722);
if(temp__5823__auto___105732){
var seq__104996_105734__$1 = temp__5823__auto___105732;
if(cljs.core.chunked_seq_QMARK_(seq__104996_105734__$1)){
var c__5548__auto___105735 = cljs.core.chunk_first(seq__104996_105734__$1);
var G__105736 = cljs.core.chunk_rest(seq__104996_105734__$1);
var G__105737 = c__5548__auto___105735;
var G__105738 = cljs.core.count(c__5548__auto___105735);
var G__105739 = (0);
seq__104996_105722 = G__105736;
chunk__104997_105723 = G__105737;
count__104998_105724 = G__105738;
i__104999_105725 = G__105739;
continue;
} else {
var c_105740 = cljs.core.first(seq__104996_105734__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_105740);


var G__105741 = cljs.core.next(seq__104996_105734__$1);
var G__105742 = null;
var G__105743 = (0);
var G__105744 = (0);
seq__104996_105722 = G__105741;
chunk__104997_105723 = G__105742;
count__104998_105724 = G__105743;
i__104999_105725 = G__105744;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq104991){
var G__104992 = cljs.core.first(seq104991);
var seq104991__$1 = cljs.core.next(seq104991);
var G__104993 = cljs.core.first(seq104991__$1);
var seq104991__$2 = cljs.core.next(seq104991__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104992,G__104993,seq104991__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5821__auto___105745 = other.nextSibling;
if(cljs.core.truth_(temp__5821__auto___105745)){
var next_105746 = temp__5821__auto___105745;
dommy.core.insert_before_BANG_(elem,next_105746);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__105016 = arguments.length;
switch (G__105016) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__105020 = p;
G__105020.removeChild(elem);

return G__105020;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__105022){
var vec__105023 = p__105022;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105023,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105023,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__5025__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = related_target;
if(cljs.core.truth_(and__5023__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__5023__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_target;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__5023__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__5025__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___105755 = arguments.length;
var i__5750__auto___105756 = (0);
while(true){
if((i__5750__auto___105756 < len__5749__auto___105755)){
args__5755__auto__.push((arguments[i__5750__auto___105756]));

var G__105757 = (i__5750__auto___105756 + (1));
i__5750__auto___105756 = G__105757;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq105030){
var G__105031 = cljs.core.first(seq105030);
var seq105030__$1 = cljs.core.next(seq105030);
var G__105032 = cljs.core.first(seq105030__$1);
var seq105030__$2 = cljs.core.next(seq105030__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105031,G__105032,seq105030__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___105758 = arguments.length;
var i__5750__auto___105759 = (0);
while(true){
if((i__5750__auto___105759 < len__5749__auto___105758)){
args__5755__auto__.push((arguments[i__5750__auto___105759]));

var G__105760 = (i__5750__auto___105759 + (1));
i__5750__auto___105759 = G__105760;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__105045_105761 = dommy.core.elem_and_selector(elem_sel);
var elem_105762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105045_105761,(0),null);
var selector_105763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105045_105761,(1),null);
var seq__105048_105764 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__105055_105765 = null;
var count__105056_105766 = (0);
var i__105057_105767 = (0);
while(true){
if((i__105057_105767 < count__105056_105766)){
var vec__105147_105768 = chunk__105055_105765.cljs$core$IIndexed$_nth$arity$2(null,i__105057_105767);
var orig_type_105769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105147_105768,(0),null);
var f_105770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105147_105768,(1),null);
var seq__105058_105771 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_105769,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_105769,cljs.core.identity])));
var chunk__105060_105772 = null;
var count__105061_105773 = (0);
var i__105062_105774 = (0);
while(true){
if((i__105062_105774 < count__105061_105773)){
var vec__105175_105775 = chunk__105060_105772.cljs$core$IIndexed$_nth$arity$2(null,i__105062_105774);
var actual_type_105776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105175_105775,(0),null);
var factory_105777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105175_105775,(1),null);
var canonical_f_105778 = (function (){var G__105179 = (factory_105777.cljs$core$IFn$_invoke$arity$1 ? factory_105777.cljs$core$IFn$_invoke$arity$1(f_105770) : factory_105777.call(null,f_105770));
var fexpr__105178 = (cljs.core.truth_(selector_105763)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_105762,selector_105763):cljs.core.identity);
return (fexpr__105178.cljs$core$IFn$_invoke$arity$1 ? fexpr__105178.cljs$core$IFn$_invoke$arity$1(G__105179) : fexpr__105178.call(null,G__105179));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_105762,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_105763,actual_type_105776,f_105770], null),canonical_f_105778], 0));

if(cljs.core.truth_(elem_105762.addEventListener)){
elem_105762.addEventListener(cljs.core.name(actual_type_105776),canonical_f_105778);
} else {
elem_105762.attachEvent(cljs.core.name(actual_type_105776),canonical_f_105778);
}


var G__105779 = seq__105058_105771;
var G__105780 = chunk__105060_105772;
var G__105781 = count__105061_105773;
var G__105782 = (i__105062_105774 + (1));
seq__105058_105771 = G__105779;
chunk__105060_105772 = G__105780;
count__105061_105773 = G__105781;
i__105062_105774 = G__105782;
continue;
} else {
var temp__5823__auto___105783 = cljs.core.seq(seq__105058_105771);
if(temp__5823__auto___105783){
var seq__105058_105784__$1 = temp__5823__auto___105783;
if(cljs.core.chunked_seq_QMARK_(seq__105058_105784__$1)){
var c__5548__auto___105785 = cljs.core.chunk_first(seq__105058_105784__$1);
var G__105786 = cljs.core.chunk_rest(seq__105058_105784__$1);
var G__105787 = c__5548__auto___105785;
var G__105788 = cljs.core.count(c__5548__auto___105785);
var G__105789 = (0);
seq__105058_105771 = G__105786;
chunk__105060_105772 = G__105787;
count__105061_105773 = G__105788;
i__105062_105774 = G__105789;
continue;
} else {
var vec__105180_105790 = cljs.core.first(seq__105058_105784__$1);
var actual_type_105791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105180_105790,(0),null);
var factory_105792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105180_105790,(1),null);
var canonical_f_105793 = (function (){var G__105184 = (factory_105792.cljs$core$IFn$_invoke$arity$1 ? factory_105792.cljs$core$IFn$_invoke$arity$1(f_105770) : factory_105792.call(null,f_105770));
var fexpr__105183 = (cljs.core.truth_(selector_105763)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_105762,selector_105763):cljs.core.identity);
return (fexpr__105183.cljs$core$IFn$_invoke$arity$1 ? fexpr__105183.cljs$core$IFn$_invoke$arity$1(G__105184) : fexpr__105183.call(null,G__105184));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_105762,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_105763,actual_type_105791,f_105770], null),canonical_f_105793], 0));

if(cljs.core.truth_(elem_105762.addEventListener)){
elem_105762.addEventListener(cljs.core.name(actual_type_105791),canonical_f_105793);
} else {
elem_105762.attachEvent(cljs.core.name(actual_type_105791),canonical_f_105793);
}


var G__105794 = cljs.core.next(seq__105058_105784__$1);
var G__105795 = null;
var G__105796 = (0);
var G__105797 = (0);
seq__105058_105771 = G__105794;
chunk__105060_105772 = G__105795;
count__105061_105773 = G__105796;
i__105062_105774 = G__105797;
continue;
}
} else {
}
}
break;
}

var G__105798 = seq__105048_105764;
var G__105799 = chunk__105055_105765;
var G__105800 = count__105056_105766;
var G__105801 = (i__105057_105767 + (1));
seq__105048_105764 = G__105798;
chunk__105055_105765 = G__105799;
count__105056_105766 = G__105800;
i__105057_105767 = G__105801;
continue;
} else {
var temp__5823__auto___105802 = cljs.core.seq(seq__105048_105764);
if(temp__5823__auto___105802){
var seq__105048_105803__$1 = temp__5823__auto___105802;
if(cljs.core.chunked_seq_QMARK_(seq__105048_105803__$1)){
var c__5548__auto___105804 = cljs.core.chunk_first(seq__105048_105803__$1);
var G__105805 = cljs.core.chunk_rest(seq__105048_105803__$1);
var G__105806 = c__5548__auto___105804;
var G__105807 = cljs.core.count(c__5548__auto___105804);
var G__105808 = (0);
seq__105048_105764 = G__105805;
chunk__105055_105765 = G__105806;
count__105056_105766 = G__105807;
i__105057_105767 = G__105808;
continue;
} else {
var vec__105193_105809 = cljs.core.first(seq__105048_105803__$1);
var orig_type_105810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105193_105809,(0),null);
var f_105811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105193_105809,(1),null);
var seq__105049_105812 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_105810,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_105810,cljs.core.identity])));
var chunk__105051_105813 = null;
var count__105052_105814 = (0);
var i__105053_105815 = (0);
while(true){
if((i__105053_105815 < count__105052_105814)){
var vec__105210_105816 = chunk__105051_105813.cljs$core$IIndexed$_nth$arity$2(null,i__105053_105815);
var actual_type_105817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105210_105816,(0),null);
var factory_105818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105210_105816,(1),null);
var canonical_f_105819 = (function (){var G__105214 = (factory_105818.cljs$core$IFn$_invoke$arity$1 ? factory_105818.cljs$core$IFn$_invoke$arity$1(f_105811) : factory_105818.call(null,f_105811));
var fexpr__105213 = (cljs.core.truth_(selector_105763)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_105762,selector_105763):cljs.core.identity);
return (fexpr__105213.cljs$core$IFn$_invoke$arity$1 ? fexpr__105213.cljs$core$IFn$_invoke$arity$1(G__105214) : fexpr__105213.call(null,G__105214));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_105762,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_105763,actual_type_105817,f_105811], null),canonical_f_105819], 0));

if(cljs.core.truth_(elem_105762.addEventListener)){
elem_105762.addEventListener(cljs.core.name(actual_type_105817),canonical_f_105819);
} else {
elem_105762.attachEvent(cljs.core.name(actual_type_105817),canonical_f_105819);
}


var G__105821 = seq__105049_105812;
var G__105822 = chunk__105051_105813;
var G__105823 = count__105052_105814;
var G__105824 = (i__105053_105815 + (1));
seq__105049_105812 = G__105821;
chunk__105051_105813 = G__105822;
count__105052_105814 = G__105823;
i__105053_105815 = G__105824;
continue;
} else {
var temp__5823__auto___105825__$1 = cljs.core.seq(seq__105049_105812);
if(temp__5823__auto___105825__$1){
var seq__105049_105826__$1 = temp__5823__auto___105825__$1;
if(cljs.core.chunked_seq_QMARK_(seq__105049_105826__$1)){
var c__5548__auto___105827 = cljs.core.chunk_first(seq__105049_105826__$1);
var G__105828 = cljs.core.chunk_rest(seq__105049_105826__$1);
var G__105829 = c__5548__auto___105827;
var G__105830 = cljs.core.count(c__5548__auto___105827);
var G__105831 = (0);
seq__105049_105812 = G__105828;
chunk__105051_105813 = G__105829;
count__105052_105814 = G__105830;
i__105053_105815 = G__105831;
continue;
} else {
var vec__105216_105832 = cljs.core.first(seq__105049_105826__$1);
var actual_type_105833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105216_105832,(0),null);
var factory_105834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105216_105832,(1),null);
var canonical_f_105835 = (function (){var G__105221 = (factory_105834.cljs$core$IFn$_invoke$arity$1 ? factory_105834.cljs$core$IFn$_invoke$arity$1(f_105811) : factory_105834.call(null,f_105811));
var fexpr__105220 = (cljs.core.truth_(selector_105763)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_105762,selector_105763):cljs.core.identity);
return (fexpr__105220.cljs$core$IFn$_invoke$arity$1 ? fexpr__105220.cljs$core$IFn$_invoke$arity$1(G__105221) : fexpr__105220.call(null,G__105221));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_105762,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_105763,actual_type_105833,f_105811], null),canonical_f_105835], 0));

if(cljs.core.truth_(elem_105762.addEventListener)){
elem_105762.addEventListener(cljs.core.name(actual_type_105833),canonical_f_105835);
} else {
elem_105762.attachEvent(cljs.core.name(actual_type_105833),canonical_f_105835);
}


var G__105836 = cljs.core.next(seq__105049_105826__$1);
var G__105837 = null;
var G__105838 = (0);
var G__105839 = (0);
seq__105049_105812 = G__105836;
chunk__105051_105813 = G__105837;
count__105052_105814 = G__105838;
i__105053_105815 = G__105839;
continue;
}
} else {
}
}
break;
}

var G__105840 = cljs.core.next(seq__105048_105803__$1);
var G__105841 = null;
var G__105842 = (0);
var G__105843 = (0);
seq__105048_105764 = G__105840;
chunk__105055_105765 = G__105841;
count__105056_105766 = G__105842;
i__105057_105767 = G__105843;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq105039){
var G__105040 = cljs.core.first(seq105039);
var seq105039__$1 = cljs.core.next(seq105039);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105040,seq105039__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___105844 = arguments.length;
var i__5750__auto___105845 = (0);
while(true){
if((i__5750__auto___105845 < len__5749__auto___105844)){
args__5755__auto__.push((arguments[i__5750__auto___105845]));

var G__105846 = (i__5750__auto___105845 + (1));
i__5750__auto___105845 = G__105846;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__105228_105847 = dommy.core.elem_and_selector(elem_sel);
var elem_105848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105228_105847,(0),null);
var selector_105849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105228_105847,(1),null);
var seq__105231_105850 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__105238_105851 = null;
var count__105239_105852 = (0);
var i__105240_105853 = (0);
while(true){
if((i__105240_105853 < count__105239_105852)){
var vec__105297_105854 = chunk__105238_105851.cljs$core$IIndexed$_nth$arity$2(null,i__105240_105853);
var orig_type_105855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105297_105854,(0),null);
var f_105856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105297_105854,(1),null);
var seq__105241_105857 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_105855,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_105855,cljs.core.identity])));
var chunk__105243_105858 = null;
var count__105244_105859 = (0);
var i__105245_105860 = (0);
while(true){
if((i__105245_105860 < count__105244_105859)){
var vec__105306_105861 = chunk__105243_105858.cljs$core$IIndexed$_nth$arity$2(null,i__105245_105860);
var actual_type_105862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105306_105861,(0),null);
var __105863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105306_105861,(1),null);
var keys_105864 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_105849,actual_type_105862,f_105856], null);
var canonical_f_105865 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_105848),keys_105864);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_105848,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_105864], 0));

if(cljs.core.truth_(elem_105848.removeEventListener)){
elem_105848.removeEventListener(cljs.core.name(actual_type_105862),canonical_f_105865);
} else {
elem_105848.detachEvent(cljs.core.name(actual_type_105862),canonical_f_105865);
}


var G__105866 = seq__105241_105857;
var G__105867 = chunk__105243_105858;
var G__105868 = count__105244_105859;
var G__105869 = (i__105245_105860 + (1));
seq__105241_105857 = G__105866;
chunk__105243_105858 = G__105867;
count__105244_105859 = G__105868;
i__105245_105860 = G__105869;
continue;
} else {
var temp__5823__auto___105870 = cljs.core.seq(seq__105241_105857);
if(temp__5823__auto___105870){
var seq__105241_105871__$1 = temp__5823__auto___105870;
if(cljs.core.chunked_seq_QMARK_(seq__105241_105871__$1)){
var c__5548__auto___105872 = cljs.core.chunk_first(seq__105241_105871__$1);
var G__105873 = cljs.core.chunk_rest(seq__105241_105871__$1);
var G__105874 = c__5548__auto___105872;
var G__105875 = cljs.core.count(c__5548__auto___105872);
var G__105876 = (0);
seq__105241_105857 = G__105873;
chunk__105243_105858 = G__105874;
count__105244_105859 = G__105875;
i__105245_105860 = G__105876;
continue;
} else {
var vec__105312_105877 = cljs.core.first(seq__105241_105871__$1);
var actual_type_105878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105312_105877,(0),null);
var __105879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105312_105877,(1),null);
var keys_105880 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_105849,actual_type_105878,f_105856], null);
var canonical_f_105881 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_105848),keys_105880);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_105848,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_105880], 0));

if(cljs.core.truth_(elem_105848.removeEventListener)){
elem_105848.removeEventListener(cljs.core.name(actual_type_105878),canonical_f_105881);
} else {
elem_105848.detachEvent(cljs.core.name(actual_type_105878),canonical_f_105881);
}


var G__105888 = cljs.core.next(seq__105241_105871__$1);
var G__105889 = null;
var G__105890 = (0);
var G__105891 = (0);
seq__105241_105857 = G__105888;
chunk__105243_105858 = G__105889;
count__105244_105859 = G__105890;
i__105245_105860 = G__105891;
continue;
}
} else {
}
}
break;
}

var G__105892 = seq__105231_105850;
var G__105893 = chunk__105238_105851;
var G__105894 = count__105239_105852;
var G__105895 = (i__105240_105853 + (1));
seq__105231_105850 = G__105892;
chunk__105238_105851 = G__105893;
count__105239_105852 = G__105894;
i__105240_105853 = G__105895;
continue;
} else {
var temp__5823__auto___105898 = cljs.core.seq(seq__105231_105850);
if(temp__5823__auto___105898){
var seq__105231_105903__$1 = temp__5823__auto___105898;
if(cljs.core.chunked_seq_QMARK_(seq__105231_105903__$1)){
var c__5548__auto___105906 = cljs.core.chunk_first(seq__105231_105903__$1);
var G__105911 = cljs.core.chunk_rest(seq__105231_105903__$1);
var G__105912 = c__5548__auto___105906;
var G__105913 = cljs.core.count(c__5548__auto___105906);
var G__105914 = (0);
seq__105231_105850 = G__105911;
chunk__105238_105851 = G__105912;
count__105239_105852 = G__105913;
i__105240_105853 = G__105914;
continue;
} else {
var vec__105318_105920 = cljs.core.first(seq__105231_105903__$1);
var orig_type_105921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105318_105920,(0),null);
var f_105922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105318_105920,(1),null);
var seq__105232_105927 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_105921,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_105921,cljs.core.identity])));
var chunk__105234_105928 = null;
var count__105235_105929 = (0);
var i__105236_105930 = (0);
while(true){
if((i__105236_105930 < count__105235_105929)){
var vec__105329_105937 = chunk__105234_105928.cljs$core$IIndexed$_nth$arity$2(null,i__105236_105930);
var actual_type_105938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105329_105937,(0),null);
var __105939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105329_105937,(1),null);
var keys_105946 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_105849,actual_type_105938,f_105922], null);
var canonical_f_105947 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_105848),keys_105946);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_105848,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_105946], 0));

if(cljs.core.truth_(elem_105848.removeEventListener)){
elem_105848.removeEventListener(cljs.core.name(actual_type_105938),canonical_f_105947);
} else {
elem_105848.detachEvent(cljs.core.name(actual_type_105938),canonical_f_105947);
}


var G__105956 = seq__105232_105927;
var G__105957 = chunk__105234_105928;
var G__105958 = count__105235_105929;
var G__105959 = (i__105236_105930 + (1));
seq__105232_105927 = G__105956;
chunk__105234_105928 = G__105957;
count__105235_105929 = G__105958;
i__105236_105930 = G__105959;
continue;
} else {
var temp__5823__auto___105964__$1 = cljs.core.seq(seq__105232_105927);
if(temp__5823__auto___105964__$1){
var seq__105232_105965__$1 = temp__5823__auto___105964__$1;
if(cljs.core.chunked_seq_QMARK_(seq__105232_105965__$1)){
var c__5548__auto___105966 = cljs.core.chunk_first(seq__105232_105965__$1);
var G__105967 = cljs.core.chunk_rest(seq__105232_105965__$1);
var G__105968 = c__5548__auto___105966;
var G__105969 = cljs.core.count(c__5548__auto___105966);
var G__105970 = (0);
seq__105232_105927 = G__105967;
chunk__105234_105928 = G__105968;
count__105235_105929 = G__105969;
i__105236_105930 = G__105970;
continue;
} else {
var vec__105332_105971 = cljs.core.first(seq__105232_105965__$1);
var actual_type_105972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105332_105971,(0),null);
var __105973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105332_105971,(1),null);
var keys_105975 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_105849,actual_type_105972,f_105922], null);
var canonical_f_105976 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_105848),keys_105975);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_105848,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_105975], 0));

if(cljs.core.truth_(elem_105848.removeEventListener)){
elem_105848.removeEventListener(cljs.core.name(actual_type_105972),canonical_f_105976);
} else {
elem_105848.detachEvent(cljs.core.name(actual_type_105972),canonical_f_105976);
}


var G__105977 = cljs.core.next(seq__105232_105965__$1);
var G__105978 = null;
var G__105979 = (0);
var G__105980 = (0);
seq__105232_105927 = G__105977;
chunk__105234_105928 = G__105978;
count__105235_105929 = G__105979;
i__105236_105930 = G__105980;
continue;
}
} else {
}
}
break;
}

var G__105984 = cljs.core.next(seq__105231_105903__$1);
var G__105985 = null;
var G__105986 = (0);
var G__105987 = (0);
seq__105231_105850 = G__105984;
chunk__105238_105851 = G__105985;
count__105239_105852 = G__105986;
i__105240_105853 = G__105987;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq105224){
var G__105225 = cljs.core.first(seq105224);
var seq105224__$1 = cljs.core.next(seq105224);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105225,seq105224__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___105988 = arguments.length;
var i__5750__auto___105989 = (0);
while(true){
if((i__5750__auto___105989 < len__5749__auto___105988)){
args__5755__auto__.push((arguments[i__5750__auto___105989]));

var G__105990 = (i__5750__auto___105989 + (1));
i__5750__auto___105989 = G__105990;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__105340_105991 = dommy.core.elem_and_selector(elem_sel);
var elem_105992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105340_105991,(0),null);
var selector_105993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105340_105991,(1),null);
var seq__105343_105994 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__105344_105995 = null;
var count__105345_105996 = (0);
var i__105346_105997 = (0);
while(true){
if((i__105346_105997 < count__105345_105996)){
var vec__105358_105998 = chunk__105344_105995.cljs$core$IIndexed$_nth$arity$2(null,i__105346_105997);
var type_105999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105358_105998,(0),null);
var f_106000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105358_105998,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_105999,((function (seq__105343_105994,chunk__105344_105995,count__105345_105996,i__105346_105997,vec__105358_105998,type_105999,f_106000,vec__105340_105991,elem_105992,selector_105993){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_105999,dommy$core$this_fn], 0));

return (f_106000.cljs$core$IFn$_invoke$arity$1 ? f_106000.cljs$core$IFn$_invoke$arity$1(e) : f_106000.call(null,e));
});})(seq__105343_105994,chunk__105344_105995,count__105345_105996,i__105346_105997,vec__105358_105998,type_105999,f_106000,vec__105340_105991,elem_105992,selector_105993))
], 0));


var G__106002 = seq__105343_105994;
var G__106003 = chunk__105344_105995;
var G__106004 = count__105345_105996;
var G__106005 = (i__105346_105997 + (1));
seq__105343_105994 = G__106002;
chunk__105344_105995 = G__106003;
count__105345_105996 = G__106004;
i__105346_105997 = G__106005;
continue;
} else {
var temp__5823__auto___106006 = cljs.core.seq(seq__105343_105994);
if(temp__5823__auto___106006){
var seq__105343_106007__$1 = temp__5823__auto___106006;
if(cljs.core.chunked_seq_QMARK_(seq__105343_106007__$1)){
var c__5548__auto___106008 = cljs.core.chunk_first(seq__105343_106007__$1);
var G__106009 = cljs.core.chunk_rest(seq__105343_106007__$1);
var G__106010 = c__5548__auto___106008;
var G__106011 = cljs.core.count(c__5548__auto___106008);
var G__106012 = (0);
seq__105343_105994 = G__106009;
chunk__105344_105995 = G__106010;
count__105345_105996 = G__106011;
i__105346_105997 = G__106012;
continue;
} else {
var vec__105362_106013 = cljs.core.first(seq__105343_106007__$1);
var type_106014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105362_106013,(0),null);
var f_106015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105362_106013,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_106014,((function (seq__105343_105994,chunk__105344_105995,count__105345_105996,i__105346_105997,vec__105362_106013,type_106014,f_106015,seq__105343_106007__$1,temp__5823__auto___106006,vec__105340_105991,elem_105992,selector_105993){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_106014,dommy$core$this_fn], 0));

return (f_106015.cljs$core$IFn$_invoke$arity$1 ? f_106015.cljs$core$IFn$_invoke$arity$1(e) : f_106015.call(null,e));
});})(seq__105343_105994,chunk__105344_105995,count__105345_105996,i__105346_105997,vec__105362_106013,type_106014,f_106015,seq__105343_106007__$1,temp__5823__auto___106006,vec__105340_105991,elem_105992,selector_105993))
], 0));


var G__106016 = cljs.core.next(seq__105343_106007__$1);
var G__106017 = null;
var G__106018 = (0);
var G__106019 = (0);
seq__105343_105994 = G__106016;
chunk__105344_105995 = G__106017;
count__105345_105996 = G__106018;
i__105346_105997 = G__106019;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq105335){
var G__105336 = cljs.core.first(seq105335);
var seq105335__$1 = cljs.core.next(seq105335);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105336,seq105335__$1);
}));


//# sourceMappingURL=dommy.core.js.map
