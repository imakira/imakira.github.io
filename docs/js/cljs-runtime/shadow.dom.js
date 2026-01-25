import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.dom.dom.js";
import "./goog.dom.forms.js";
import "./goog.dom.classlist.js";
import "./goog.style.style.js";
import "./goog.string.string.js";
import "./clojure.string.js";
goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_55717 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_55717(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_55724 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_55724(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__54002 = coll;
var G__54003 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__54002,G__54003) : shadow.dom.lazy_native_coll_seq.call(null,G__54002,G__54003));
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
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
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
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__54121 = arguments.length;
switch (G__54121) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__54146 = arguments.length;
switch (G__54146) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__54157 = arguments.length;
switch (G__54157) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__54187 = arguments.length;
switch (G__54187) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__54222 = arguments.length;
switch (G__54222) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__54252 = arguments.length;
switch (G__54252) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e54263){if((e54263 instanceof Object)){
var e = e54263;
return console.log("didnt support attachEvent",el,e);
} else {
throw e54263;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__54282 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__54283 = null;
var count__54284 = (0);
var i__54285 = (0);
while(true){
if((i__54285 < count__54284)){
var el = chunk__54283.cljs$core$IIndexed$_nth$arity$2(null,i__54285);
var handler_55766__$1 = ((function (seq__54282,chunk__54283,count__54284,i__54285,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54282,chunk__54283,count__54284,i__54285,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_55766__$1);


var G__55767 = seq__54282;
var G__55768 = chunk__54283;
var G__55769 = count__54284;
var G__55770 = (i__54285 + (1));
seq__54282 = G__55767;
chunk__54283 = G__55768;
count__54284 = G__55769;
i__54285 = G__55770;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__54282);
if(temp__5825__auto__){
var seq__54282__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54282__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__54282__$1);
var G__55771 = cljs.core.chunk_rest(seq__54282__$1);
var G__55772 = c__5673__auto__;
var G__55773 = cljs.core.count(c__5673__auto__);
var G__55774 = (0);
seq__54282 = G__55771;
chunk__54283 = G__55772;
count__54284 = G__55773;
i__54285 = G__55774;
continue;
} else {
var el = cljs.core.first(seq__54282__$1);
var handler_55776__$1 = ((function (seq__54282,chunk__54283,count__54284,i__54285,el,seq__54282__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54282,chunk__54283,count__54284,i__54285,el,seq__54282__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_55776__$1);


var G__55780 = cljs.core.next(seq__54282__$1);
var G__55781 = null;
var G__55782 = (0);
var G__55783 = (0);
seq__54282 = G__55780;
chunk__54283 = G__55781;
count__54284 = G__55782;
i__54285 = G__55783;
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
var G__54319 = arguments.length;
switch (G__54319) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var seq__54347 = cljs.core.seq(events);
var chunk__54348 = null;
var count__54349 = (0);
var i__54350 = (0);
while(true){
if((i__54350 < count__54349)){
var vec__54399 = chunk__54348.cljs$core$IIndexed$_nth$arity$2(null,i__54350);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54399,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__55795 = seq__54347;
var G__55796 = chunk__54348;
var G__55797 = count__54349;
var G__55798 = (i__54350 + (1));
seq__54347 = G__55795;
chunk__54348 = G__55796;
count__54349 = G__55797;
i__54350 = G__55798;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__54347);
if(temp__5825__auto__){
var seq__54347__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54347__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__54347__$1);
var G__55799 = cljs.core.chunk_rest(seq__54347__$1);
var G__55800 = c__5673__auto__;
var G__55801 = cljs.core.count(c__5673__auto__);
var G__55802 = (0);
seq__54347 = G__55799;
chunk__54348 = G__55800;
count__54349 = G__55801;
i__54350 = G__55802;
continue;
} else {
var vec__54416 = cljs.core.first(seq__54347__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54416,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54416,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__55805 = cljs.core.next(seq__54347__$1);
var G__55806 = null;
var G__55807 = (0);
var G__55808 = (0);
seq__54347 = G__55805;
chunk__54348 = G__55806;
count__54349 = G__55807;
i__54350 = G__55808;
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
var seq__54425 = cljs.core.seq(styles);
var chunk__54426 = null;
var count__54427 = (0);
var i__54428 = (0);
while(true){
if((i__54428 < count__54427)){
var vec__54442 = chunk__54426.cljs$core$IIndexed$_nth$arity$2(null,i__54428);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54442,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__55812 = seq__54425;
var G__55813 = chunk__54426;
var G__55814 = count__54427;
var G__55815 = (i__54428 + (1));
seq__54425 = G__55812;
chunk__54426 = G__55813;
count__54427 = G__55814;
i__54428 = G__55815;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__54425);
if(temp__5825__auto__){
var seq__54425__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54425__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__54425__$1);
var G__55817 = cljs.core.chunk_rest(seq__54425__$1);
var G__55818 = c__5673__auto__;
var G__55819 = cljs.core.count(c__5673__auto__);
var G__55820 = (0);
seq__54425 = G__55817;
chunk__54426 = G__55818;
count__54427 = G__55819;
i__54428 = G__55820;
continue;
} else {
var vec__54447 = cljs.core.first(seq__54425__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54447,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__55822 = cljs.core.next(seq__54425__$1);
var G__55823 = null;
var G__55824 = (0);
var G__55825 = (0);
seq__54425 = G__55822;
chunk__54426 = G__55823;
count__54427 = G__55824;
i__54428 = G__55825;
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
var G__54452_55826 = key;
var G__54452_55827__$1 = (((G__54452_55826 instanceof cljs.core.Keyword))?G__54452_55826.fqn:null);
switch (G__54452_55827__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

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
var ks_55833 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_55833,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_55833,"aria-");
}
})())){
el.setAttribute(ks_55833,value);
} else {
(el[ks_55833] = value);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
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
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__54496){
var map__54498 = p__54496;
var map__54498__$1 = cljs.core.__destructure_map(map__54498);
var props = map__54498__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54498__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__54501 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54501,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54501,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54501,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__54506 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__54506,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__54506;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__54510 = arguments.length;
switch (G__54510) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
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
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__54521){
var vec__54523 = p__54521;
var seq__54524 = cljs.core.seq(vec__54523);
var first__54525 = cljs.core.first(seq__54524);
var seq__54524__$1 = cljs.core.next(seq__54524);
var nn = first__54525;
var first__54525__$1 = cljs.core.first(seq__54524__$1);
var seq__54524__$2 = cljs.core.next(seq__54524__$1);
var np = first__54525__$1;
var nc = seq__54524__$2;
var node = vec__54523;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54537 = nn;
var G__54538 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54537,G__54538) : create_fn.call(null,G__54537,G__54538));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54541 = nn;
var G__54542 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54541,G__54542) : create_fn.call(null,G__54541,G__54542));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__54545 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54545,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54545,(1),null);
var seq__54554_55858 = cljs.core.seq(node_children);
var chunk__54555_55859 = null;
var count__54556_55860 = (0);
var i__54557_55861 = (0);
while(true){
if((i__54557_55861 < count__54556_55860)){
var child_struct_55862 = chunk__54555_55859.cljs$core$IIndexed$_nth$arity$2(null,i__54557_55861);
var children_55863 = shadow.dom.dom_node(child_struct_55862);
if(cljs.core.seq_QMARK_(children_55863)){
var seq__54619_55864 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55863));
var chunk__54621_55865 = null;
var count__54622_55866 = (0);
var i__54623_55867 = (0);
while(true){
if((i__54623_55867 < count__54622_55866)){
var child_55868 = chunk__54621_55865.cljs$core$IIndexed$_nth$arity$2(null,i__54623_55867);
if(cljs.core.truth_(child_55868)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55868);


var G__55869 = seq__54619_55864;
var G__55870 = chunk__54621_55865;
var G__55871 = count__54622_55866;
var G__55872 = (i__54623_55867 + (1));
seq__54619_55864 = G__55869;
chunk__54621_55865 = G__55870;
count__54622_55866 = G__55871;
i__54623_55867 = G__55872;
continue;
} else {
var G__55873 = seq__54619_55864;
var G__55874 = chunk__54621_55865;
var G__55875 = count__54622_55866;
var G__55876 = (i__54623_55867 + (1));
seq__54619_55864 = G__55873;
chunk__54621_55865 = G__55874;
count__54622_55866 = G__55875;
i__54623_55867 = G__55876;
continue;
}
} else {
var temp__5825__auto___55877 = cljs.core.seq(seq__54619_55864);
if(temp__5825__auto___55877){
var seq__54619_55878__$1 = temp__5825__auto___55877;
if(cljs.core.chunked_seq_QMARK_(seq__54619_55878__$1)){
var c__5673__auto___55879 = cljs.core.chunk_first(seq__54619_55878__$1);
var G__55880 = cljs.core.chunk_rest(seq__54619_55878__$1);
var G__55881 = c__5673__auto___55879;
var G__55882 = cljs.core.count(c__5673__auto___55879);
var G__55883 = (0);
seq__54619_55864 = G__55880;
chunk__54621_55865 = G__55881;
count__54622_55866 = G__55882;
i__54623_55867 = G__55883;
continue;
} else {
var child_55884 = cljs.core.first(seq__54619_55878__$1);
if(cljs.core.truth_(child_55884)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55884);


var G__55885 = cljs.core.next(seq__54619_55878__$1);
var G__55886 = null;
var G__55887 = (0);
var G__55888 = (0);
seq__54619_55864 = G__55885;
chunk__54621_55865 = G__55886;
count__54622_55866 = G__55887;
i__54623_55867 = G__55888;
continue;
} else {
var G__55889 = cljs.core.next(seq__54619_55878__$1);
var G__55890 = null;
var G__55891 = (0);
var G__55892 = (0);
seq__54619_55864 = G__55889;
chunk__54621_55865 = G__55890;
count__54622_55866 = G__55891;
i__54623_55867 = G__55892;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55863);
}


var G__55893 = seq__54554_55858;
var G__55894 = chunk__54555_55859;
var G__55895 = count__54556_55860;
var G__55896 = (i__54557_55861 + (1));
seq__54554_55858 = G__55893;
chunk__54555_55859 = G__55894;
count__54556_55860 = G__55895;
i__54557_55861 = G__55896;
continue;
} else {
var temp__5825__auto___55897 = cljs.core.seq(seq__54554_55858);
if(temp__5825__auto___55897){
var seq__54554_55898__$1 = temp__5825__auto___55897;
if(cljs.core.chunked_seq_QMARK_(seq__54554_55898__$1)){
var c__5673__auto___55899 = cljs.core.chunk_first(seq__54554_55898__$1);
var G__55900 = cljs.core.chunk_rest(seq__54554_55898__$1);
var G__55901 = c__5673__auto___55899;
var G__55902 = cljs.core.count(c__5673__auto___55899);
var G__55903 = (0);
seq__54554_55858 = G__55900;
chunk__54555_55859 = G__55901;
count__54556_55860 = G__55902;
i__54557_55861 = G__55903;
continue;
} else {
var child_struct_55904 = cljs.core.first(seq__54554_55898__$1);
var children_55905 = shadow.dom.dom_node(child_struct_55904);
if(cljs.core.seq_QMARK_(children_55905)){
var seq__54639_55906 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55905));
var chunk__54641_55907 = null;
var count__54642_55908 = (0);
var i__54643_55909 = (0);
while(true){
if((i__54643_55909 < count__54642_55908)){
var child_55910 = chunk__54641_55907.cljs$core$IIndexed$_nth$arity$2(null,i__54643_55909);
if(cljs.core.truth_(child_55910)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55910);


var G__55911 = seq__54639_55906;
var G__55912 = chunk__54641_55907;
var G__55913 = count__54642_55908;
var G__55914 = (i__54643_55909 + (1));
seq__54639_55906 = G__55911;
chunk__54641_55907 = G__55912;
count__54642_55908 = G__55913;
i__54643_55909 = G__55914;
continue;
} else {
var G__55915 = seq__54639_55906;
var G__55916 = chunk__54641_55907;
var G__55917 = count__54642_55908;
var G__55918 = (i__54643_55909 + (1));
seq__54639_55906 = G__55915;
chunk__54641_55907 = G__55916;
count__54642_55908 = G__55917;
i__54643_55909 = G__55918;
continue;
}
} else {
var temp__5825__auto___55919__$1 = cljs.core.seq(seq__54639_55906);
if(temp__5825__auto___55919__$1){
var seq__54639_55920__$1 = temp__5825__auto___55919__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54639_55920__$1)){
var c__5673__auto___55921 = cljs.core.chunk_first(seq__54639_55920__$1);
var G__55922 = cljs.core.chunk_rest(seq__54639_55920__$1);
var G__55923 = c__5673__auto___55921;
var G__55924 = cljs.core.count(c__5673__auto___55921);
var G__55925 = (0);
seq__54639_55906 = G__55922;
chunk__54641_55907 = G__55923;
count__54642_55908 = G__55924;
i__54643_55909 = G__55925;
continue;
} else {
var child_55926 = cljs.core.first(seq__54639_55920__$1);
if(cljs.core.truth_(child_55926)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55926);


var G__55927 = cljs.core.next(seq__54639_55920__$1);
var G__55928 = null;
var G__55929 = (0);
var G__55930 = (0);
seq__54639_55906 = G__55927;
chunk__54641_55907 = G__55928;
count__54642_55908 = G__55929;
i__54643_55909 = G__55930;
continue;
} else {
var G__55931 = cljs.core.next(seq__54639_55920__$1);
var G__55932 = null;
var G__55933 = (0);
var G__55934 = (0);
seq__54639_55906 = G__55931;
chunk__54641_55907 = G__55932;
count__54642_55908 = G__55933;
i__54643_55909 = G__55934;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55905);
}


var G__55935 = cljs.core.next(seq__54554_55898__$1);
var G__55936 = null;
var G__55937 = (0);
var G__55938 = (0);
seq__54554_55858 = G__55935;
chunk__54555_55859 = G__55936;
count__54556_55860 = G__55937;
i__54557_55861 = G__55938;
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
var seq__54669 = cljs.core.seq(node);
var chunk__54670 = null;
var count__54671 = (0);
var i__54672 = (0);
while(true){
if((i__54672 < count__54671)){
var n = chunk__54670.cljs$core$IIndexed$_nth$arity$2(null,i__54672);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55939 = seq__54669;
var G__55940 = chunk__54670;
var G__55941 = count__54671;
var G__55942 = (i__54672 + (1));
seq__54669 = G__55939;
chunk__54670 = G__55940;
count__54671 = G__55941;
i__54672 = G__55942;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__54669);
if(temp__5825__auto__){
var seq__54669__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54669__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__54669__$1);
var G__55943 = cljs.core.chunk_rest(seq__54669__$1);
var G__55944 = c__5673__auto__;
var G__55945 = cljs.core.count(c__5673__auto__);
var G__55946 = (0);
seq__54669 = G__55943;
chunk__54670 = G__55944;
count__54671 = G__55945;
i__54672 = G__55946;
continue;
} else {
var n = cljs.core.first(seq__54669__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55947 = cljs.core.next(seq__54669__$1);
var G__55948 = null;
var G__55949 = (0);
var G__55950 = (0);
seq__54669 = G__55947;
chunk__54670 = G__55948;
count__54671 = G__55949;
i__54672 = G__55950;
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
var G__54685 = arguments.length;
switch (G__54685) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__54699 = arguments.length;
switch (G__54699) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__54709 = arguments.length;
switch (G__54709) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___55965 = arguments.length;
var i__5877__auto___55966 = (0);
while(true){
if((i__5877__auto___55966 < len__5876__auto___55965)){
args__5882__auto__.push((arguments[i__5877__auto___55966]));

var G__55967 = (i__5877__auto___55966 + (1));
i__5877__auto___55966 = G__55967;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__54737_55970 = cljs.core.seq(nodes);
var chunk__54738_55971 = null;
var count__54739_55972 = (0);
var i__54740_55973 = (0);
while(true){
if((i__54740_55973 < count__54739_55972)){
var node_55975 = chunk__54738_55971.cljs$core$IIndexed$_nth$arity$2(null,i__54740_55973);
fragment.appendChild(shadow.dom._to_dom(node_55975));


var G__55976 = seq__54737_55970;
var G__55977 = chunk__54738_55971;
var G__55978 = count__54739_55972;
var G__55979 = (i__54740_55973 + (1));
seq__54737_55970 = G__55976;
chunk__54738_55971 = G__55977;
count__54739_55972 = G__55978;
i__54740_55973 = G__55979;
continue;
} else {
var temp__5825__auto___55980 = cljs.core.seq(seq__54737_55970);
if(temp__5825__auto___55980){
var seq__54737_55981__$1 = temp__5825__auto___55980;
if(cljs.core.chunked_seq_QMARK_(seq__54737_55981__$1)){
var c__5673__auto___55983 = cljs.core.chunk_first(seq__54737_55981__$1);
var G__55985 = cljs.core.chunk_rest(seq__54737_55981__$1);
var G__55986 = c__5673__auto___55983;
var G__55987 = cljs.core.count(c__5673__auto___55983);
var G__55988 = (0);
seq__54737_55970 = G__55985;
chunk__54738_55971 = G__55986;
count__54739_55972 = G__55987;
i__54740_55973 = G__55988;
continue;
} else {
var node_55989 = cljs.core.first(seq__54737_55981__$1);
fragment.appendChild(shadow.dom._to_dom(node_55989));


var G__55990 = cljs.core.next(seq__54737_55981__$1);
var G__55991 = null;
var G__55992 = (0);
var G__55993 = (0);
seq__54737_55970 = G__55990;
chunk__54738_55971 = G__55991;
count__54739_55972 = G__55992;
i__54740_55973 = G__55993;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq54732){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54732));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54758_55996 = cljs.core.seq(scripts);
var chunk__54759_55997 = null;
var count__54760_55998 = (0);
var i__54761_55999 = (0);
while(true){
if((i__54761_55999 < count__54760_55998)){
var vec__54770_56000 = chunk__54759_55997.cljs$core$IIndexed$_nth$arity$2(null,i__54761_55999);
var script_tag_56001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770_56000,(0),null);
var script_body_56002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770_56000,(1),null);
eval(script_body_56002);


var G__56003 = seq__54758_55996;
var G__56004 = chunk__54759_55997;
var G__56005 = count__54760_55998;
var G__56006 = (i__54761_55999 + (1));
seq__54758_55996 = G__56003;
chunk__54759_55997 = G__56004;
count__54760_55998 = G__56005;
i__54761_55999 = G__56006;
continue;
} else {
var temp__5825__auto___56007 = cljs.core.seq(seq__54758_55996);
if(temp__5825__auto___56007){
var seq__54758_56009__$1 = temp__5825__auto___56007;
if(cljs.core.chunked_seq_QMARK_(seq__54758_56009__$1)){
var c__5673__auto___56010 = cljs.core.chunk_first(seq__54758_56009__$1);
var G__56012 = cljs.core.chunk_rest(seq__54758_56009__$1);
var G__56013 = c__5673__auto___56010;
var G__56014 = cljs.core.count(c__5673__auto___56010);
var G__56015 = (0);
seq__54758_55996 = G__56012;
chunk__54759_55997 = G__56013;
count__54760_55998 = G__56014;
i__54761_55999 = G__56015;
continue;
} else {
var vec__54776_56016 = cljs.core.first(seq__54758_56009__$1);
var script_tag_56017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54776_56016,(0),null);
var script_body_56018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54776_56016,(1),null);
eval(script_body_56018);


var G__56019 = cljs.core.next(seq__54758_56009__$1);
var G__56020 = null;
var G__56021 = (0);
var G__56022 = (0);
seq__54758_55996 = G__56019;
chunk__54759_55997 = G__56020;
count__54760_55998 = G__56021;
i__54761_55999 = G__56022;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__54780){
var vec__54782 = p__54780;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54782,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54782,(1),null);
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
var G__54797 = arguments.length;
switch (G__54797) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
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
var seq__54817 = cljs.core.seq(style_keys);
var chunk__54818 = null;
var count__54819 = (0);
var i__54820 = (0);
while(true){
if((i__54820 < count__54819)){
var it = chunk__54818.cljs$core$IIndexed$_nth$arity$2(null,i__54820);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56026 = seq__54817;
var G__56027 = chunk__54818;
var G__56028 = count__54819;
var G__56029 = (i__54820 + (1));
seq__54817 = G__56026;
chunk__54818 = G__56027;
count__54819 = G__56028;
i__54820 = G__56029;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__54817);
if(temp__5825__auto__){
var seq__54817__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54817__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__54817__$1);
var G__56030 = cljs.core.chunk_rest(seq__54817__$1);
var G__56031 = c__5673__auto__;
var G__56032 = cljs.core.count(c__5673__auto__);
var G__56033 = (0);
seq__54817 = G__56030;
chunk__54818 = G__56031;
count__54819 = G__56032;
i__54820 = G__56033;
continue;
} else {
var it = cljs.core.first(seq__54817__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56034 = cljs.core.next(seq__54817__$1);
var G__56035 = null;
var G__56036 = (0);
var G__56037 = (0);
seq__54817 = G__56034;
chunk__54818 = G__56035;
count__54819 = G__56036;
i__54820 = G__56037;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k54846,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__54860 = k54846;
var G__54860__$1 = (((G__54860 instanceof cljs.core.Keyword))?G__54860.fqn:null);
switch (G__54860__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54846,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__54863){
var vec__54864 = p__54863;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54864,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54864,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54845){
var self__ = this;
var G__54845__$1 = this;
return (new cljs.core.RecordIter((0),G__54845__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54847,other54848){
var self__ = this;
var this54847__$1 = this;
return (((!((other54848 == null)))) && ((((this54847__$1.constructor === other54848.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54847__$1.x,other54848.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54847__$1.y,other54848.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54847__$1.__extmap,other54848.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k54846){
var self__ = this;
var this__5455__auto____$1 = this;
var G__54886 = k54846;
var G__54886__$1 = (((G__54886 instanceof cljs.core.Keyword))?G__54886.fqn:null);
switch (G__54886__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54846);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__54845){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__54897 = cljs.core.keyword_identical_QMARK_;
var expr__54898 = k__5457__auto__;
if(cljs.core.truth_((pred__54897.cljs$core$IFn$_invoke$arity$2 ? pred__54897.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__54898) : pred__54897.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__54898)))){
return (new shadow.dom.Coordinate(G__54845,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54897.cljs$core$IFn$_invoke$arity$2 ? pred__54897.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__54898) : pred__54897.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__54898)))){
return (new shadow.dom.Coordinate(self__.x,G__54845,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__54845),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__54845){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54845,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54854){
var extmap__5490__auto__ = (function (){var G__54936 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54854,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54854)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54936);
} else {
return G__54936;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54854),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54854),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k54961,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__55034 = k54961;
var G__55034__$1 = (((G__55034 instanceof cljs.core.Keyword))?G__55034.fqn:null);
switch (G__55034__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54961,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__55044){
var vec__55045 = p__55044;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55045,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55045,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54960){
var self__ = this;
var G__54960__$1 = this;
return (new cljs.core.RecordIter((0),G__54960__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54962,other54963){
var self__ = this;
var this54962__$1 = this;
return (((!((other54963 == null)))) && ((((this54962__$1.constructor === other54963.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54962__$1.w,other54963.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54962__$1.h,other54963.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54962__$1.__extmap,other54963.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k54961){
var self__ = this;
var this__5455__auto____$1 = this;
var G__55148 = k54961;
var G__55148__$1 = (((G__55148 instanceof cljs.core.Keyword))?G__55148.fqn:null);
switch (G__55148__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54961);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__54960){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__55152 = cljs.core.keyword_identical_QMARK_;
var expr__55153 = k__5457__auto__;
if(cljs.core.truth_((pred__55152.cljs$core$IFn$_invoke$arity$2 ? pred__55152.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__55153) : pred__55152.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__55153)))){
return (new shadow.dom.Size(G__54960,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55152.cljs$core$IFn$_invoke$arity$2 ? pred__55152.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__55153) : pred__55152.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__55153)))){
return (new shadow.dom.Size(self__.w,G__54960,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__54960),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__54960){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54960,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54965){
var extmap__5490__auto__ = (function (){var G__55203 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54965,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54965)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55203);
} else {
return G__55203;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54965),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54965),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__56090 = (i + (1));
var G__56091 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__56090;
ret = G__56091;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55387){
var vec__55388 = p__55387;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55388,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__55399 = arguments.length;
switch (G__55399) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
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
var G__56126 = ps;
var G__56127 = (i + (1));
el__$1 = G__56126;
i = G__56127;
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
var vec__55493 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55493,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55493,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55493,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__55497_56145 = cljs.core.seq(props);
var chunk__55498_56146 = null;
var count__55499_56147 = (0);
var i__55500_56148 = (0);
while(true){
if((i__55500_56148 < count__55499_56147)){
var vec__55522_56149 = chunk__55498_56146.cljs$core$IIndexed$_nth$arity$2(null,i__55500_56148);
var k_56150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55522_56149,(0),null);
var v_56151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55522_56149,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_56150);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56150),v_56151);


var G__56152 = seq__55497_56145;
var G__56153 = chunk__55498_56146;
var G__56154 = count__55499_56147;
var G__56155 = (i__55500_56148 + (1));
seq__55497_56145 = G__56152;
chunk__55498_56146 = G__56153;
count__55499_56147 = G__56154;
i__55500_56148 = G__56155;
continue;
} else {
var temp__5825__auto___56156 = cljs.core.seq(seq__55497_56145);
if(temp__5825__auto___56156){
var seq__55497_56157__$1 = temp__5825__auto___56156;
if(cljs.core.chunked_seq_QMARK_(seq__55497_56157__$1)){
var c__5673__auto___56158 = cljs.core.chunk_first(seq__55497_56157__$1);
var G__56159 = cljs.core.chunk_rest(seq__55497_56157__$1);
var G__56160 = c__5673__auto___56158;
var G__56161 = cljs.core.count(c__5673__auto___56158);
var G__56162 = (0);
seq__55497_56145 = G__56159;
chunk__55498_56146 = G__56160;
count__55499_56147 = G__56161;
i__55500_56148 = G__56162;
continue;
} else {
var vec__55527_56163 = cljs.core.first(seq__55497_56157__$1);
var k_56164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55527_56163,(0),null);
var v_56165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55527_56163,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_56164);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56164),v_56165);


var G__56166 = cljs.core.next(seq__55497_56157__$1);
var G__56167 = null;
var G__56168 = (0);
var G__56169 = (0);
seq__55497_56145 = G__56166;
chunk__55498_56146 = G__56167;
count__55499_56147 = G__56168;
i__55500_56148 = G__56169;
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
var vec__55554 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55554,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55554,(1),null);
var seq__55557_56172 = cljs.core.seq(node_children);
var chunk__55559_56173 = null;
var count__55560_56175 = (0);
var i__55561_56176 = (0);
while(true){
if((i__55561_56176 < count__55560_56175)){
var child_struct_56177 = chunk__55559_56173.cljs$core$IIndexed$_nth$arity$2(null,i__55561_56176);
if((!((child_struct_56177 == null)))){
if(typeof child_struct_56177 === 'string'){
var text_56178 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56178)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_56177)));
} else {
var children_56179 = shadow.dom.svg_node(child_struct_56177);
if(cljs.core.seq_QMARK_(children_56179)){
var seq__55626_56180 = cljs.core.seq(children_56179);
var chunk__55628_56181 = null;
var count__55629_56182 = (0);
var i__55630_56183 = (0);
while(true){
if((i__55630_56183 < count__55629_56182)){
var child_56184 = chunk__55628_56181.cljs$core$IIndexed$_nth$arity$2(null,i__55630_56183);
if(cljs.core.truth_(child_56184)){
node.appendChild(child_56184);


var G__56185 = seq__55626_56180;
var G__56186 = chunk__55628_56181;
var G__56187 = count__55629_56182;
var G__56188 = (i__55630_56183 + (1));
seq__55626_56180 = G__56185;
chunk__55628_56181 = G__56186;
count__55629_56182 = G__56187;
i__55630_56183 = G__56188;
continue;
} else {
var G__56189 = seq__55626_56180;
var G__56190 = chunk__55628_56181;
var G__56191 = count__55629_56182;
var G__56192 = (i__55630_56183 + (1));
seq__55626_56180 = G__56189;
chunk__55628_56181 = G__56190;
count__55629_56182 = G__56191;
i__55630_56183 = G__56192;
continue;
}
} else {
var temp__5825__auto___56193 = cljs.core.seq(seq__55626_56180);
if(temp__5825__auto___56193){
var seq__55626_56194__$1 = temp__5825__auto___56193;
if(cljs.core.chunked_seq_QMARK_(seq__55626_56194__$1)){
var c__5673__auto___56195 = cljs.core.chunk_first(seq__55626_56194__$1);
var G__56196 = cljs.core.chunk_rest(seq__55626_56194__$1);
var G__56197 = c__5673__auto___56195;
var G__56198 = cljs.core.count(c__5673__auto___56195);
var G__56199 = (0);
seq__55626_56180 = G__56196;
chunk__55628_56181 = G__56197;
count__55629_56182 = G__56198;
i__55630_56183 = G__56199;
continue;
} else {
var child_56201 = cljs.core.first(seq__55626_56194__$1);
if(cljs.core.truth_(child_56201)){
node.appendChild(child_56201);


var G__56202 = cljs.core.next(seq__55626_56194__$1);
var G__56203 = null;
var G__56204 = (0);
var G__56205 = (0);
seq__55626_56180 = G__56202;
chunk__55628_56181 = G__56203;
count__55629_56182 = G__56204;
i__55630_56183 = G__56205;
continue;
} else {
var G__56206 = cljs.core.next(seq__55626_56194__$1);
var G__56207 = null;
var G__56208 = (0);
var G__56209 = (0);
seq__55626_56180 = G__56206;
chunk__55628_56181 = G__56207;
count__55629_56182 = G__56208;
i__55630_56183 = G__56209;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56179);
}
}


var G__56210 = seq__55557_56172;
var G__56211 = chunk__55559_56173;
var G__56212 = count__55560_56175;
var G__56213 = (i__55561_56176 + (1));
seq__55557_56172 = G__56210;
chunk__55559_56173 = G__56211;
count__55560_56175 = G__56212;
i__55561_56176 = G__56213;
continue;
} else {
var G__56216 = seq__55557_56172;
var G__56217 = chunk__55559_56173;
var G__56218 = count__55560_56175;
var G__56219 = (i__55561_56176 + (1));
seq__55557_56172 = G__56216;
chunk__55559_56173 = G__56217;
count__55560_56175 = G__56218;
i__55561_56176 = G__56219;
continue;
}
} else {
var temp__5825__auto___56220 = cljs.core.seq(seq__55557_56172);
if(temp__5825__auto___56220){
var seq__55557_56223__$1 = temp__5825__auto___56220;
if(cljs.core.chunked_seq_QMARK_(seq__55557_56223__$1)){
var c__5673__auto___56224 = cljs.core.chunk_first(seq__55557_56223__$1);
var G__56225 = cljs.core.chunk_rest(seq__55557_56223__$1);
var G__56226 = c__5673__auto___56224;
var G__56227 = cljs.core.count(c__5673__auto___56224);
var G__56228 = (0);
seq__55557_56172 = G__56225;
chunk__55559_56173 = G__56226;
count__55560_56175 = G__56227;
i__55561_56176 = G__56228;
continue;
} else {
var child_struct_56229 = cljs.core.first(seq__55557_56223__$1);
if((!((child_struct_56229 == null)))){
if(typeof child_struct_56229 === 'string'){
var text_56230 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56230)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_56229)));
} else {
var children_56231 = shadow.dom.svg_node(child_struct_56229);
if(cljs.core.seq_QMARK_(children_56231)){
var seq__55676_56232 = cljs.core.seq(children_56231);
var chunk__55678_56233 = null;
var count__55679_56234 = (0);
var i__55680_56235 = (0);
while(true){
if((i__55680_56235 < count__55679_56234)){
var child_56236 = chunk__55678_56233.cljs$core$IIndexed$_nth$arity$2(null,i__55680_56235);
if(cljs.core.truth_(child_56236)){
node.appendChild(child_56236);


var G__56237 = seq__55676_56232;
var G__56238 = chunk__55678_56233;
var G__56239 = count__55679_56234;
var G__56240 = (i__55680_56235 + (1));
seq__55676_56232 = G__56237;
chunk__55678_56233 = G__56238;
count__55679_56234 = G__56239;
i__55680_56235 = G__56240;
continue;
} else {
var G__56241 = seq__55676_56232;
var G__56242 = chunk__55678_56233;
var G__56243 = count__55679_56234;
var G__56244 = (i__55680_56235 + (1));
seq__55676_56232 = G__56241;
chunk__55678_56233 = G__56242;
count__55679_56234 = G__56243;
i__55680_56235 = G__56244;
continue;
}
} else {
var temp__5825__auto___56245__$1 = cljs.core.seq(seq__55676_56232);
if(temp__5825__auto___56245__$1){
var seq__55676_56247__$1 = temp__5825__auto___56245__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55676_56247__$1)){
var c__5673__auto___56248 = cljs.core.chunk_first(seq__55676_56247__$1);
var G__56249 = cljs.core.chunk_rest(seq__55676_56247__$1);
var G__56250 = c__5673__auto___56248;
var G__56251 = cljs.core.count(c__5673__auto___56248);
var G__56252 = (0);
seq__55676_56232 = G__56249;
chunk__55678_56233 = G__56250;
count__55679_56234 = G__56251;
i__55680_56235 = G__56252;
continue;
} else {
var child_56253 = cljs.core.first(seq__55676_56247__$1);
if(cljs.core.truth_(child_56253)){
node.appendChild(child_56253);


var G__56256 = cljs.core.next(seq__55676_56247__$1);
var G__56257 = null;
var G__56258 = (0);
var G__56259 = (0);
seq__55676_56232 = G__56256;
chunk__55678_56233 = G__56257;
count__55679_56234 = G__56258;
i__55680_56235 = G__56259;
continue;
} else {
var G__56260 = cljs.core.next(seq__55676_56247__$1);
var G__56261 = null;
var G__56262 = (0);
var G__56263 = (0);
seq__55676_56232 = G__56260;
chunk__55678_56233 = G__56261;
count__55679_56234 = G__56262;
i__55680_56235 = G__56263;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56231);
}
}


var G__56266 = cljs.core.next(seq__55557_56223__$1);
var G__56267 = null;
var G__56268 = (0);
var G__56269 = (0);
seq__55557_56172 = G__56266;
chunk__55559_56173 = G__56267;
count__55560_56175 = G__56268;
i__55561_56176 = G__56269;
continue;
} else {
var G__56270 = cljs.core.next(seq__55557_56223__$1);
var G__56271 = null;
var G__56272 = (0);
var G__56273 = (0);
seq__55557_56172 = G__56270;
chunk__55559_56173 = G__56271;
count__55560_56175 = G__56272;
i__55561_56176 = G__56273;
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
var args__5882__auto__ = [];
var len__5876__auto___56274 = arguments.length;
var i__5877__auto___56275 = (0);
while(true){
if((i__5877__auto___56275 < len__5876__auto___56274)){
args__5882__auto__.push((arguments[i__5877__auto___56275]));

var G__56276 = (i__5877__auto___56275 + (1));
i__5877__auto___56275 = G__56276;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq55697){
var G__55698 = cljs.core.first(seq55697);
var seq55697__$1 = cljs.core.next(seq55697);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55698,seq55697__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
