goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_94318 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_94318(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_94326 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_94326(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__93183 = coll;
var G__93184 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__93183,G__93184) : shadow.dom.lazy_native_coll_seq.call(null,G__93183,G__93184));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__93219 = arguments.length;
switch (G__93219) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__93229 = arguments.length;
switch (G__93229) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__93250 = arguments.length;
switch (G__93250) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__93260 = arguments.length;
switch (G__93260) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__93269 = arguments.length;
switch (G__93269) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__93301 = arguments.length;
switch (G__93301) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e93327){if((e93327 instanceof Object)){
var e = e93327;
return console.log("didnt support attachEvent",el,e);
} else {
throw e93327;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__93341 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__93342 = null;
var count__93343 = (0);
var i__93344 = (0);
while(true){
if((i__93344 < count__93343)){
var el = chunk__93342.cljs$core$IIndexed$_nth$arity$2(null,i__93344);
var handler_94371__$1 = ((function (seq__93341,chunk__93342,count__93343,i__93344,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__93341,chunk__93342,count__93343,i__93344,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_94371__$1);


var G__94373 = seq__93341;
var G__94374 = chunk__93342;
var G__94375 = count__93343;
var G__94376 = (i__93344 + (1));
seq__93341 = G__94373;
chunk__93342 = G__94374;
count__93343 = G__94375;
i__93344 = G__94376;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__93341);
if(temp__5823__auto__){
var seq__93341__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93341__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__93341__$1);
var G__94377 = cljs.core.chunk_rest(seq__93341__$1);
var G__94378 = c__5548__auto__;
var G__94379 = cljs.core.count(c__5548__auto__);
var G__94380 = (0);
seq__93341 = G__94377;
chunk__93342 = G__94378;
count__93343 = G__94379;
i__93344 = G__94380;
continue;
} else {
var el = cljs.core.first(seq__93341__$1);
var handler_94381__$1 = ((function (seq__93341,chunk__93342,count__93343,i__93344,el,seq__93341__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__93341,chunk__93342,count__93343,i__93344,el,seq__93341__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_94381__$1);


var G__94382 = cljs.core.next(seq__93341__$1);
var G__94383 = null;
var G__94384 = (0);
var G__94385 = (0);
seq__93341 = G__94382;
chunk__93342 = G__94383;
count__93343 = G__94384;
i__93344 = G__94385;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__93384 = arguments.length;
switch (G__93384) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__93402 = cljs.core.seq(events);
var chunk__93403 = null;
var count__93404 = (0);
var i__93405 = (0);
while(true){
if((i__93405 < count__93404)){
var vec__93427 = chunk__93403.cljs$core$IIndexed$_nth$arity$2(null,i__93405);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93427,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__94395 = seq__93402;
var G__94396 = chunk__93403;
var G__94397 = count__93404;
var G__94398 = (i__93405 + (1));
seq__93402 = G__94395;
chunk__93403 = G__94396;
count__93404 = G__94397;
i__93405 = G__94398;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__93402);
if(temp__5823__auto__){
var seq__93402__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93402__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__93402__$1);
var G__94399 = cljs.core.chunk_rest(seq__93402__$1);
var G__94400 = c__5548__auto__;
var G__94401 = cljs.core.count(c__5548__auto__);
var G__94402 = (0);
seq__93402 = G__94399;
chunk__93403 = G__94400;
count__93404 = G__94401;
i__93405 = G__94402;
continue;
} else {
var vec__93435 = cljs.core.first(seq__93402__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93435,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__94404 = cljs.core.next(seq__93402__$1);
var G__94405 = null;
var G__94406 = (0);
var G__94407 = (0);
seq__93402 = G__94404;
chunk__93403 = G__94405;
count__93404 = G__94406;
i__93405 = G__94407;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__93441 = cljs.core.seq(styles);
var chunk__93442 = null;
var count__93443 = (0);
var i__93444 = (0);
while(true){
if((i__93444 < count__93443)){
var vec__93464 = chunk__93442.cljs$core$IIndexed$_nth$arity$2(null,i__93444);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93464,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__94409 = seq__93441;
var G__94410 = chunk__93442;
var G__94411 = count__93443;
var G__94412 = (i__93444 + (1));
seq__93441 = G__94409;
chunk__93442 = G__94410;
count__93443 = G__94411;
i__93444 = G__94412;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__93441);
if(temp__5823__auto__){
var seq__93441__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93441__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__93441__$1);
var G__94413 = cljs.core.chunk_rest(seq__93441__$1);
var G__94414 = c__5548__auto__;
var G__94415 = cljs.core.count(c__5548__auto__);
var G__94416 = (0);
seq__93441 = G__94413;
chunk__93442 = G__94414;
count__93443 = G__94415;
i__93444 = G__94416;
continue;
} else {
var vec__93473 = cljs.core.first(seq__93441__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93473,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__94418 = cljs.core.next(seq__93441__$1);
var G__94419 = null;
var G__94420 = (0);
var G__94421 = (0);
seq__93441 = G__94418;
chunk__93442 = G__94419;
count__93443 = G__94420;
i__93444 = G__94421;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__93481_94422 = key;
var G__93481_94423__$1 = (((G__93481_94422 instanceof cljs.core.Keyword))?G__93481_94422.fqn:null);
switch (G__93481_94423__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_94428 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_94428,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_94428,"aria-");
}
})())){
el.setAttribute(ks_94428,value);
} else {
(el[ks_94428] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__93499){
var map__93502 = p__93499;
var map__93502__$1 = cljs.core.__destructure_map(map__93502);
var props = map__93502__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93502__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__93504 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93504,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93504,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93504,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__93510 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__93510,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__93510;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__93518 = arguments.length;
switch (G__93518) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__93529){
var vec__93533 = p__93529;
var seq__93534 = cljs.core.seq(vec__93533);
var first__93535 = cljs.core.first(seq__93534);
var seq__93534__$1 = cljs.core.next(seq__93534);
var nn = first__93535;
var first__93535__$1 = cljs.core.first(seq__93534__$1);
var seq__93534__$2 = cljs.core.next(seq__93534__$1);
var np = first__93535__$1;
var nc = seq__93534__$2;
var node = vec__93533;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__93546 = nn;
var G__93547 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__93546,G__93547) : create_fn.call(null,G__93546,G__93547));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__93554 = nn;
var G__93555 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__93554,G__93555) : create_fn.call(null,G__93554,G__93555));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__93570 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93570,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93570,(1),null);
var seq__93574_94458 = cljs.core.seq(node_children);
var chunk__93575_94459 = null;
var count__93576_94460 = (0);
var i__93577_94461 = (0);
while(true){
if((i__93577_94461 < count__93576_94460)){
var child_struct_94462 = chunk__93575_94459.cljs$core$IIndexed$_nth$arity$2(null,i__93577_94461);
var children_94463 = shadow.dom.dom_node(child_struct_94462);
if(cljs.core.seq_QMARK_(children_94463)){
var seq__93622_94464 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_94463));
var chunk__93624_94465 = null;
var count__93625_94466 = (0);
var i__93626_94467 = (0);
while(true){
if((i__93626_94467 < count__93625_94466)){
var child_94468 = chunk__93624_94465.cljs$core$IIndexed$_nth$arity$2(null,i__93626_94467);
if(cljs.core.truth_(child_94468)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_94468);


var G__94469 = seq__93622_94464;
var G__94470 = chunk__93624_94465;
var G__94471 = count__93625_94466;
var G__94472 = (i__93626_94467 + (1));
seq__93622_94464 = G__94469;
chunk__93624_94465 = G__94470;
count__93625_94466 = G__94471;
i__93626_94467 = G__94472;
continue;
} else {
var G__94473 = seq__93622_94464;
var G__94474 = chunk__93624_94465;
var G__94475 = count__93625_94466;
var G__94476 = (i__93626_94467 + (1));
seq__93622_94464 = G__94473;
chunk__93624_94465 = G__94474;
count__93625_94466 = G__94475;
i__93626_94467 = G__94476;
continue;
}
} else {
var temp__5823__auto___94477 = cljs.core.seq(seq__93622_94464);
if(temp__5823__auto___94477){
var seq__93622_94480__$1 = temp__5823__auto___94477;
if(cljs.core.chunked_seq_QMARK_(seq__93622_94480__$1)){
var c__5548__auto___94481 = cljs.core.chunk_first(seq__93622_94480__$1);
var G__94483 = cljs.core.chunk_rest(seq__93622_94480__$1);
var G__94484 = c__5548__auto___94481;
var G__94485 = cljs.core.count(c__5548__auto___94481);
var G__94486 = (0);
seq__93622_94464 = G__94483;
chunk__93624_94465 = G__94484;
count__93625_94466 = G__94485;
i__93626_94467 = G__94486;
continue;
} else {
var child_94488 = cljs.core.first(seq__93622_94480__$1);
if(cljs.core.truth_(child_94488)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_94488);


var G__94490 = cljs.core.next(seq__93622_94480__$1);
var G__94491 = null;
var G__94492 = (0);
var G__94493 = (0);
seq__93622_94464 = G__94490;
chunk__93624_94465 = G__94491;
count__93625_94466 = G__94492;
i__93626_94467 = G__94493;
continue;
} else {
var G__94495 = cljs.core.next(seq__93622_94480__$1);
var G__94496 = null;
var G__94497 = (0);
var G__94498 = (0);
seq__93622_94464 = G__94495;
chunk__93624_94465 = G__94496;
count__93625_94466 = G__94497;
i__93626_94467 = G__94498;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_94463);
}


var G__94499 = seq__93574_94458;
var G__94500 = chunk__93575_94459;
var G__94501 = count__93576_94460;
var G__94502 = (i__93577_94461 + (1));
seq__93574_94458 = G__94499;
chunk__93575_94459 = G__94500;
count__93576_94460 = G__94501;
i__93577_94461 = G__94502;
continue;
} else {
var temp__5823__auto___94503 = cljs.core.seq(seq__93574_94458);
if(temp__5823__auto___94503){
var seq__93574_94504__$1 = temp__5823__auto___94503;
if(cljs.core.chunked_seq_QMARK_(seq__93574_94504__$1)){
var c__5548__auto___94505 = cljs.core.chunk_first(seq__93574_94504__$1);
var G__94506 = cljs.core.chunk_rest(seq__93574_94504__$1);
var G__94507 = c__5548__auto___94505;
var G__94508 = cljs.core.count(c__5548__auto___94505);
var G__94509 = (0);
seq__93574_94458 = G__94506;
chunk__93575_94459 = G__94507;
count__93576_94460 = G__94508;
i__93577_94461 = G__94509;
continue;
} else {
var child_struct_94510 = cljs.core.first(seq__93574_94504__$1);
var children_94511 = shadow.dom.dom_node(child_struct_94510);
if(cljs.core.seq_QMARK_(children_94511)){
var seq__93641_94513 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_94511));
var chunk__93643_94514 = null;
var count__93644_94515 = (0);
var i__93645_94516 = (0);
while(true){
if((i__93645_94516 < count__93644_94515)){
var child_94517 = chunk__93643_94514.cljs$core$IIndexed$_nth$arity$2(null,i__93645_94516);
if(cljs.core.truth_(child_94517)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_94517);


var G__94519 = seq__93641_94513;
var G__94520 = chunk__93643_94514;
var G__94521 = count__93644_94515;
var G__94522 = (i__93645_94516 + (1));
seq__93641_94513 = G__94519;
chunk__93643_94514 = G__94520;
count__93644_94515 = G__94521;
i__93645_94516 = G__94522;
continue;
} else {
var G__94523 = seq__93641_94513;
var G__94524 = chunk__93643_94514;
var G__94525 = count__93644_94515;
var G__94526 = (i__93645_94516 + (1));
seq__93641_94513 = G__94523;
chunk__93643_94514 = G__94524;
count__93644_94515 = G__94525;
i__93645_94516 = G__94526;
continue;
}
} else {
var temp__5823__auto___94527__$1 = cljs.core.seq(seq__93641_94513);
if(temp__5823__auto___94527__$1){
var seq__93641_94528__$1 = temp__5823__auto___94527__$1;
if(cljs.core.chunked_seq_QMARK_(seq__93641_94528__$1)){
var c__5548__auto___94529 = cljs.core.chunk_first(seq__93641_94528__$1);
var G__94530 = cljs.core.chunk_rest(seq__93641_94528__$1);
var G__94531 = c__5548__auto___94529;
var G__94532 = cljs.core.count(c__5548__auto___94529);
var G__94533 = (0);
seq__93641_94513 = G__94530;
chunk__93643_94514 = G__94531;
count__93644_94515 = G__94532;
i__93645_94516 = G__94533;
continue;
} else {
var child_94534 = cljs.core.first(seq__93641_94528__$1);
if(cljs.core.truth_(child_94534)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_94534);


var G__94535 = cljs.core.next(seq__93641_94528__$1);
var G__94536 = null;
var G__94537 = (0);
var G__94538 = (0);
seq__93641_94513 = G__94535;
chunk__93643_94514 = G__94536;
count__93644_94515 = G__94537;
i__93645_94516 = G__94538;
continue;
} else {
var G__94539 = cljs.core.next(seq__93641_94528__$1);
var G__94540 = null;
var G__94541 = (0);
var G__94542 = (0);
seq__93641_94513 = G__94539;
chunk__93643_94514 = G__94540;
count__93644_94515 = G__94541;
i__93645_94516 = G__94542;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_94511);
}


var G__94545 = cljs.core.next(seq__93574_94504__$1);
var G__94546 = null;
var G__94547 = (0);
var G__94548 = (0);
seq__93574_94458 = G__94545;
chunk__93575_94459 = G__94546;
count__93576_94460 = G__94547;
i__93577_94461 = G__94548;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__93659 = cljs.core.seq(node);
var chunk__93660 = null;
var count__93661 = (0);
var i__93662 = (0);
while(true){
if((i__93662 < count__93661)){
var n = chunk__93660.cljs$core$IIndexed$_nth$arity$2(null,i__93662);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__94554 = seq__93659;
var G__94555 = chunk__93660;
var G__94556 = count__93661;
var G__94557 = (i__93662 + (1));
seq__93659 = G__94554;
chunk__93660 = G__94555;
count__93661 = G__94556;
i__93662 = G__94557;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__93659);
if(temp__5823__auto__){
var seq__93659__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93659__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__93659__$1);
var G__94559 = cljs.core.chunk_rest(seq__93659__$1);
var G__94560 = c__5548__auto__;
var G__94561 = cljs.core.count(c__5548__auto__);
var G__94562 = (0);
seq__93659 = G__94559;
chunk__93660 = G__94560;
count__93661 = G__94561;
i__93662 = G__94562;
continue;
} else {
var n = cljs.core.first(seq__93659__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__94563 = cljs.core.next(seq__93659__$1);
var G__94564 = null;
var G__94565 = (0);
var G__94566 = (0);
seq__93659 = G__94563;
chunk__93660 = G__94564;
count__93661 = G__94565;
i__93662 = G__94566;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__93669 = arguments.length;
switch (G__93669) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__93674 = arguments.length;
switch (G__93674) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__93683 = arguments.length;
switch (G__93683) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___94589 = arguments.length;
var i__5750__auto___94590 = (0);
while(true){
if((i__5750__auto___94590 < len__5749__auto___94589)){
args__5755__auto__.push((arguments[i__5750__auto___94590]));

var G__94591 = (i__5750__auto___94590 + (1));
i__5750__auto___94590 = G__94591;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__93720_94593 = cljs.core.seq(nodes);
var chunk__93721_94594 = null;
var count__93722_94595 = (0);
var i__93723_94596 = (0);
while(true){
if((i__93723_94596 < count__93722_94595)){
var node_94597 = chunk__93721_94594.cljs$core$IIndexed$_nth$arity$2(null,i__93723_94596);
fragment.appendChild(shadow.dom._to_dom(node_94597));


var G__94598 = seq__93720_94593;
var G__94599 = chunk__93721_94594;
var G__94600 = count__93722_94595;
var G__94601 = (i__93723_94596 + (1));
seq__93720_94593 = G__94598;
chunk__93721_94594 = G__94599;
count__93722_94595 = G__94600;
i__93723_94596 = G__94601;
continue;
} else {
var temp__5823__auto___94602 = cljs.core.seq(seq__93720_94593);
if(temp__5823__auto___94602){
var seq__93720_94603__$1 = temp__5823__auto___94602;
if(cljs.core.chunked_seq_QMARK_(seq__93720_94603__$1)){
var c__5548__auto___94604 = cljs.core.chunk_first(seq__93720_94603__$1);
var G__94605 = cljs.core.chunk_rest(seq__93720_94603__$1);
var G__94606 = c__5548__auto___94604;
var G__94607 = cljs.core.count(c__5548__auto___94604);
var G__94608 = (0);
seq__93720_94593 = G__94605;
chunk__93721_94594 = G__94606;
count__93722_94595 = G__94607;
i__93723_94596 = G__94608;
continue;
} else {
var node_94609 = cljs.core.first(seq__93720_94603__$1);
fragment.appendChild(shadow.dom._to_dom(node_94609));


var G__94610 = cljs.core.next(seq__93720_94603__$1);
var G__94611 = null;
var G__94612 = (0);
var G__94613 = (0);
seq__93720_94593 = G__94610;
chunk__93721_94594 = G__94611;
count__93722_94595 = G__94612;
i__93723_94596 = G__94613;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq93712){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq93712));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__93733_94616 = cljs.core.seq(scripts);
var chunk__93734_94617 = null;
var count__93735_94619 = (0);
var i__93736_94620 = (0);
while(true){
if((i__93736_94620 < count__93735_94619)){
var vec__93756_94621 = chunk__93734_94617.cljs$core$IIndexed$_nth$arity$2(null,i__93736_94620);
var script_tag_94622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93756_94621,(0),null);
var script_body_94623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93756_94621,(1),null);
eval(script_body_94623);


var G__94624 = seq__93733_94616;
var G__94625 = chunk__93734_94617;
var G__94626 = count__93735_94619;
var G__94627 = (i__93736_94620 + (1));
seq__93733_94616 = G__94624;
chunk__93734_94617 = G__94625;
count__93735_94619 = G__94626;
i__93736_94620 = G__94627;
continue;
} else {
var temp__5823__auto___94630 = cljs.core.seq(seq__93733_94616);
if(temp__5823__auto___94630){
var seq__93733_94631__$1 = temp__5823__auto___94630;
if(cljs.core.chunked_seq_QMARK_(seq__93733_94631__$1)){
var c__5548__auto___94632 = cljs.core.chunk_first(seq__93733_94631__$1);
var G__94633 = cljs.core.chunk_rest(seq__93733_94631__$1);
var G__94634 = c__5548__auto___94632;
var G__94635 = cljs.core.count(c__5548__auto___94632);
var G__94636 = (0);
seq__93733_94616 = G__94633;
chunk__93734_94617 = G__94634;
count__93735_94619 = G__94635;
i__93736_94620 = G__94636;
continue;
} else {
var vec__93765_94637 = cljs.core.first(seq__93733_94631__$1);
var script_tag_94638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93765_94637,(0),null);
var script_body_94639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93765_94637,(1),null);
eval(script_body_94639);


var G__94643 = cljs.core.next(seq__93733_94631__$1);
var G__94644 = null;
var G__94645 = (0);
var G__94646 = (0);
seq__93733_94616 = G__94643;
chunk__93734_94617 = G__94644;
count__93735_94619 = G__94645;
i__93736_94620 = G__94646;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__93773){
var vec__93774 = p__93773;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93774,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93774,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__93790 = arguments.length;
switch (G__93790) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__93805 = cljs.core.seq(style_keys);
var chunk__93806 = null;
var count__93807 = (0);
var i__93808 = (0);
while(true){
if((i__93808 < count__93807)){
var it = chunk__93806.cljs$core$IIndexed$_nth$arity$2(null,i__93808);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__94660 = seq__93805;
var G__94661 = chunk__93806;
var G__94662 = count__93807;
var G__94663 = (i__93808 + (1));
seq__93805 = G__94660;
chunk__93806 = G__94661;
count__93807 = G__94662;
i__93808 = G__94663;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__93805);
if(temp__5823__auto__){
var seq__93805__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93805__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__93805__$1);
var G__94664 = cljs.core.chunk_rest(seq__93805__$1);
var G__94665 = c__5548__auto__;
var G__94666 = cljs.core.count(c__5548__auto__);
var G__94667 = (0);
seq__93805 = G__94664;
chunk__93806 = G__94665;
count__93807 = G__94666;
i__93808 = G__94667;
continue;
} else {
var it = cljs.core.first(seq__93805__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__94668 = cljs.core.next(seq__93805__$1);
var G__94669 = null;
var G__94670 = (0);
var G__94671 = (0);
seq__93805 = G__94668;
chunk__93806 = G__94669;
count__93807 = G__94670;
i__93808 = G__94671;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k93810,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__93817 = k93810;
var G__93817__$1 = (((G__93817 instanceof cljs.core.Keyword))?G__93817.fqn:null);
switch (G__93817__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k93810,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__93818){
var vec__93819 = p__93818;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93819,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93819,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__93809){
var self__ = this;
var G__93809__$1 = this;
return (new cljs.core.RecordIter((0),G__93809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this93811,other93812){
var self__ = this;
var this93811__$1 = this;
return (((!((other93812 == null)))) && ((((this93811__$1.constructor === other93812.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93811__$1.x,other93812.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93811__$1.y,other93812.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93811__$1.__extmap,other93812.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k93810){
var self__ = this;
var this__5330__auto____$1 = this;
var G__93837 = k93810;
var G__93837__$1 = (((G__93837 instanceof cljs.core.Keyword))?G__93837.fqn:null);
switch (G__93837__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k93810);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__93809){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__93838 = cljs.core.keyword_identical_QMARK_;
var expr__93839 = k__5332__auto__;
if(cljs.core.truth_((pred__93838.cljs$core$IFn$_invoke$arity$2 ? pred__93838.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__93839) : pred__93838.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__93839)))){
return (new shadow.dom.Coordinate(G__93809,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93838.cljs$core$IFn$_invoke$arity$2 ? pred__93838.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__93839) : pred__93838.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__93839)))){
return (new shadow.dom.Coordinate(self__.x,G__93809,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__93809),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__93809){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__93809,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__93813){
var extmap__5365__auto__ = (function (){var G__93858 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__93813,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__93813)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__93858);
} else {
return G__93858;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__93813),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__93813),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k93864,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__93871 = k93864;
var G__93871__$1 = (((G__93871 instanceof cljs.core.Keyword))?G__93871.fqn:null);
switch (G__93871__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k93864,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__93877){
var vec__93878 = p__93877;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93878,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93878,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__93863){
var self__ = this;
var G__93863__$1 = this;
return (new cljs.core.RecordIter((0),G__93863__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this93865,other93866){
var self__ = this;
var this93865__$1 = this;
return (((!((other93866 == null)))) && ((((this93865__$1.constructor === other93866.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93865__$1.w,other93866.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93865__$1.h,other93866.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93865__$1.__extmap,other93866.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k93864){
var self__ = this;
var this__5330__auto____$1 = this;
var G__93912 = k93864;
var G__93912__$1 = (((G__93912 instanceof cljs.core.Keyword))?G__93912.fqn:null);
switch (G__93912__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k93864);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__93863){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__93917 = cljs.core.keyword_identical_QMARK_;
var expr__93918 = k__5332__auto__;
if(cljs.core.truth_((pred__93917.cljs$core$IFn$_invoke$arity$2 ? pred__93917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__93918) : pred__93917.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__93918)))){
return (new shadow.dom.Size(G__93863,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93917.cljs$core$IFn$_invoke$arity$2 ? pred__93917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__93918) : pred__93917.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__93918)))){
return (new shadow.dom.Size(self__.w,G__93863,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__93863),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__93863){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__93863,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__93870){
var extmap__5365__auto__ = (function (){var G__93940 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__93870,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__93870)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__93940);
} else {
return G__93940;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__93870),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__93870),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__94711 = (i + (1));
var G__94712 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__94711;
ret = G__94712;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__93986){
var vec__93988 = p__93986;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93988,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93988,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__94000 = arguments.length;
switch (G__94000) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__94731 = ps;
var G__94732 = (i + (1));
el__$1 = G__94731;
i = G__94732;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__94093 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94093,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94093,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94093,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__94097_94735 = cljs.core.seq(props);
var chunk__94098_94736 = null;
var count__94099_94737 = (0);
var i__94100_94738 = (0);
while(true){
if((i__94100_94738 < count__94099_94737)){
var vec__94117_94739 = chunk__94098_94736.cljs$core$IIndexed$_nth$arity$2(null,i__94100_94738);
var k_94740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94117_94739,(0),null);
var v_94741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94117_94739,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_94740);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_94740),v_94741);


var G__94742 = seq__94097_94735;
var G__94743 = chunk__94098_94736;
var G__94744 = count__94099_94737;
var G__94745 = (i__94100_94738 + (1));
seq__94097_94735 = G__94742;
chunk__94098_94736 = G__94743;
count__94099_94737 = G__94744;
i__94100_94738 = G__94745;
continue;
} else {
var temp__5823__auto___94746 = cljs.core.seq(seq__94097_94735);
if(temp__5823__auto___94746){
var seq__94097_94747__$1 = temp__5823__auto___94746;
if(cljs.core.chunked_seq_QMARK_(seq__94097_94747__$1)){
var c__5548__auto___94748 = cljs.core.chunk_first(seq__94097_94747__$1);
var G__94761 = cljs.core.chunk_rest(seq__94097_94747__$1);
var G__94762 = c__5548__auto___94748;
var G__94763 = cljs.core.count(c__5548__auto___94748);
var G__94764 = (0);
seq__94097_94735 = G__94761;
chunk__94098_94736 = G__94762;
count__94099_94737 = G__94763;
i__94100_94738 = G__94764;
continue;
} else {
var vec__94124_94765 = cljs.core.first(seq__94097_94747__$1);
var k_94766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94124_94765,(0),null);
var v_94767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94124_94765,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_94766);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_94766),v_94767);


var G__94768 = cljs.core.next(seq__94097_94747__$1);
var G__94769 = null;
var G__94770 = (0);
var G__94771 = (0);
seq__94097_94735 = G__94768;
chunk__94098_94736 = G__94769;
count__94099_94737 = G__94770;
i__94100_94738 = G__94771;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__94133 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94133,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94133,(1),null);
var seq__94136_94774 = cljs.core.seq(node_children);
var chunk__94138_94775 = null;
var count__94139_94776 = (0);
var i__94140_94777 = (0);
while(true){
if((i__94140_94777 < count__94139_94776)){
var child_struct_94778 = chunk__94138_94775.cljs$core$IIndexed$_nth$arity$2(null,i__94140_94777);
if((!((child_struct_94778 == null)))){
if(typeof child_struct_94778 === 'string'){
var text_94779 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_94779),child_struct_94778].join(''));
} else {
var children_94780 = shadow.dom.svg_node(child_struct_94778);
if(cljs.core.seq_QMARK_(children_94780)){
var seq__94197_94781 = cljs.core.seq(children_94780);
var chunk__94199_94782 = null;
var count__94200_94783 = (0);
var i__94201_94784 = (0);
while(true){
if((i__94201_94784 < count__94200_94783)){
var child_94785 = chunk__94199_94782.cljs$core$IIndexed$_nth$arity$2(null,i__94201_94784);
if(cljs.core.truth_(child_94785)){
node.appendChild(child_94785);


var G__94786 = seq__94197_94781;
var G__94787 = chunk__94199_94782;
var G__94788 = count__94200_94783;
var G__94789 = (i__94201_94784 + (1));
seq__94197_94781 = G__94786;
chunk__94199_94782 = G__94787;
count__94200_94783 = G__94788;
i__94201_94784 = G__94789;
continue;
} else {
var G__94790 = seq__94197_94781;
var G__94791 = chunk__94199_94782;
var G__94792 = count__94200_94783;
var G__94793 = (i__94201_94784 + (1));
seq__94197_94781 = G__94790;
chunk__94199_94782 = G__94791;
count__94200_94783 = G__94792;
i__94201_94784 = G__94793;
continue;
}
} else {
var temp__5823__auto___94794 = cljs.core.seq(seq__94197_94781);
if(temp__5823__auto___94794){
var seq__94197_94795__$1 = temp__5823__auto___94794;
if(cljs.core.chunked_seq_QMARK_(seq__94197_94795__$1)){
var c__5548__auto___94796 = cljs.core.chunk_first(seq__94197_94795__$1);
var G__94797 = cljs.core.chunk_rest(seq__94197_94795__$1);
var G__94798 = c__5548__auto___94796;
var G__94799 = cljs.core.count(c__5548__auto___94796);
var G__94800 = (0);
seq__94197_94781 = G__94797;
chunk__94199_94782 = G__94798;
count__94200_94783 = G__94799;
i__94201_94784 = G__94800;
continue;
} else {
var child_94803 = cljs.core.first(seq__94197_94795__$1);
if(cljs.core.truth_(child_94803)){
node.appendChild(child_94803);


var G__94806 = cljs.core.next(seq__94197_94795__$1);
var G__94807 = null;
var G__94808 = (0);
var G__94809 = (0);
seq__94197_94781 = G__94806;
chunk__94199_94782 = G__94807;
count__94200_94783 = G__94808;
i__94201_94784 = G__94809;
continue;
} else {
var G__94810 = cljs.core.next(seq__94197_94795__$1);
var G__94811 = null;
var G__94812 = (0);
var G__94813 = (0);
seq__94197_94781 = G__94810;
chunk__94199_94782 = G__94811;
count__94200_94783 = G__94812;
i__94201_94784 = G__94813;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_94780);
}
}


var G__94814 = seq__94136_94774;
var G__94815 = chunk__94138_94775;
var G__94816 = count__94139_94776;
var G__94817 = (i__94140_94777 + (1));
seq__94136_94774 = G__94814;
chunk__94138_94775 = G__94815;
count__94139_94776 = G__94816;
i__94140_94777 = G__94817;
continue;
} else {
var G__94818 = seq__94136_94774;
var G__94819 = chunk__94138_94775;
var G__94820 = count__94139_94776;
var G__94821 = (i__94140_94777 + (1));
seq__94136_94774 = G__94818;
chunk__94138_94775 = G__94819;
count__94139_94776 = G__94820;
i__94140_94777 = G__94821;
continue;
}
} else {
var temp__5823__auto___94822 = cljs.core.seq(seq__94136_94774);
if(temp__5823__auto___94822){
var seq__94136_94823__$1 = temp__5823__auto___94822;
if(cljs.core.chunked_seq_QMARK_(seq__94136_94823__$1)){
var c__5548__auto___94824 = cljs.core.chunk_first(seq__94136_94823__$1);
var G__94825 = cljs.core.chunk_rest(seq__94136_94823__$1);
var G__94826 = c__5548__auto___94824;
var G__94827 = cljs.core.count(c__5548__auto___94824);
var G__94828 = (0);
seq__94136_94774 = G__94825;
chunk__94138_94775 = G__94826;
count__94139_94776 = G__94827;
i__94140_94777 = G__94828;
continue;
} else {
var child_struct_94829 = cljs.core.first(seq__94136_94823__$1);
if((!((child_struct_94829 == null)))){
if(typeof child_struct_94829 === 'string'){
var text_94830 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_94830),child_struct_94829].join(''));
} else {
var children_94831 = shadow.dom.svg_node(child_struct_94829);
if(cljs.core.seq_QMARK_(children_94831)){
var seq__94223_94832 = cljs.core.seq(children_94831);
var chunk__94225_94833 = null;
var count__94226_94834 = (0);
var i__94227_94835 = (0);
while(true){
if((i__94227_94835 < count__94226_94834)){
var child_94836 = chunk__94225_94833.cljs$core$IIndexed$_nth$arity$2(null,i__94227_94835);
if(cljs.core.truth_(child_94836)){
node.appendChild(child_94836);


var G__94837 = seq__94223_94832;
var G__94838 = chunk__94225_94833;
var G__94839 = count__94226_94834;
var G__94840 = (i__94227_94835 + (1));
seq__94223_94832 = G__94837;
chunk__94225_94833 = G__94838;
count__94226_94834 = G__94839;
i__94227_94835 = G__94840;
continue;
} else {
var G__94844 = seq__94223_94832;
var G__94845 = chunk__94225_94833;
var G__94846 = count__94226_94834;
var G__94847 = (i__94227_94835 + (1));
seq__94223_94832 = G__94844;
chunk__94225_94833 = G__94845;
count__94226_94834 = G__94846;
i__94227_94835 = G__94847;
continue;
}
} else {
var temp__5823__auto___94848__$1 = cljs.core.seq(seq__94223_94832);
if(temp__5823__auto___94848__$1){
var seq__94223_94850__$1 = temp__5823__auto___94848__$1;
if(cljs.core.chunked_seq_QMARK_(seq__94223_94850__$1)){
var c__5548__auto___94852 = cljs.core.chunk_first(seq__94223_94850__$1);
var G__94853 = cljs.core.chunk_rest(seq__94223_94850__$1);
var G__94854 = c__5548__auto___94852;
var G__94855 = cljs.core.count(c__5548__auto___94852);
var G__94856 = (0);
seq__94223_94832 = G__94853;
chunk__94225_94833 = G__94854;
count__94226_94834 = G__94855;
i__94227_94835 = G__94856;
continue;
} else {
var child_94857 = cljs.core.first(seq__94223_94850__$1);
if(cljs.core.truth_(child_94857)){
node.appendChild(child_94857);


var G__94858 = cljs.core.next(seq__94223_94850__$1);
var G__94859 = null;
var G__94860 = (0);
var G__94861 = (0);
seq__94223_94832 = G__94858;
chunk__94225_94833 = G__94859;
count__94226_94834 = G__94860;
i__94227_94835 = G__94861;
continue;
} else {
var G__94862 = cljs.core.next(seq__94223_94850__$1);
var G__94863 = null;
var G__94864 = (0);
var G__94865 = (0);
seq__94223_94832 = G__94862;
chunk__94225_94833 = G__94863;
count__94226_94834 = G__94864;
i__94227_94835 = G__94865;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_94831);
}
}


var G__94866 = cljs.core.next(seq__94136_94823__$1);
var G__94867 = null;
var G__94868 = (0);
var G__94869 = (0);
seq__94136_94774 = G__94866;
chunk__94138_94775 = G__94867;
count__94139_94776 = G__94868;
i__94140_94777 = G__94869;
continue;
} else {
var G__94870 = cljs.core.next(seq__94136_94823__$1);
var G__94871 = null;
var G__94872 = (0);
var G__94873 = (0);
seq__94136_94774 = G__94870;
chunk__94138_94775 = G__94871;
count__94139_94776 = G__94872;
i__94140_94777 = G__94873;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___94875 = arguments.length;
var i__5750__auto___94876 = (0);
while(true){
if((i__5750__auto___94876 < len__5749__auto___94875)){
args__5755__auto__.push((arguments[i__5750__auto___94876]));

var G__94877 = (i__5750__auto___94876 + (1));
i__5750__auto___94876 = G__94877;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq94261){
var G__94262 = cljs.core.first(seq94261);
var seq94261__$1 = cljs.core.next(seq94261);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94262,seq94261__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
