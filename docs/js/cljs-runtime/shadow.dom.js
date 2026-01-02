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

var shadow$dom$IElement$_to_dom$dyn_69714 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_69714(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_69715 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_69715(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__68740 = coll;
var G__68741 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__68740,G__68741) : shadow.dom.lazy_native_coll_seq.call(null,G__68740,G__68741));
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
var or__5141__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"shadow.dom/NativeColl");
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
var G__68765 = arguments.length;
switch (G__68765) {
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
var G__68781 = arguments.length;
switch (G__68781) {
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
var G__68789 = arguments.length;
switch (G__68789) {
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
var G__68798 = arguments.length;
switch (G__68798) {
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
var G__68817 = arguments.length;
switch (G__68817) {
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
var G__68830 = arguments.length;
switch (G__68830) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5141__auto__ = (!((typeof document !== 'undefined')));
if(or__5141__auto__){
return or__5141__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e68837){if((e68837 instanceof Object)){
var e = e68837;
return console.log("didnt support attachEvent",el,e);
} else {
throw e68837;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5141__auto__ = (!((typeof document !== 'undefined')));
if(or__5141__auto__){
return or__5141__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__68848 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__68849 = null;
var count__68850 = (0);
var i__68851 = (0);
while(true){
if((i__68851 < count__68850)){
var el = chunk__68849.cljs$core$IIndexed$_nth$arity$2(null,i__68851);
var handler_69756__$1 = ((function (seq__68848,chunk__68849,count__68850,i__68851,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68848,chunk__68849,count__68850,i__68851,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69756__$1);


var G__69758 = seq__68848;
var G__69759 = chunk__68849;
var G__69760 = count__68850;
var G__69761 = (i__68851 + (1));
seq__68848 = G__69758;
chunk__68849 = G__69759;
count__68850 = G__69760;
i__68851 = G__69761;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__68848);
if(temp__5823__auto__){
var seq__68848__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68848__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__68848__$1);
var G__69762 = cljs.core.chunk_rest(seq__68848__$1);
var G__69763 = c__5672__auto__;
var G__69764 = cljs.core.count(c__5672__auto__);
var G__69765 = (0);
seq__68848 = G__69762;
chunk__68849 = G__69763;
count__68850 = G__69764;
i__68851 = G__69765;
continue;
} else {
var el = cljs.core.first(seq__68848__$1);
var handler_69767__$1 = ((function (seq__68848,chunk__68849,count__68850,i__68851,el,seq__68848__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68848,chunk__68849,count__68850,i__68851,el,seq__68848__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69767__$1);


var G__69768 = cljs.core.next(seq__68848__$1);
var G__69769 = null;
var G__69770 = (0);
var G__69771 = (0);
seq__68848 = G__69768;
chunk__68849 = G__69769;
count__68850 = G__69770;
i__68851 = G__69771;
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
var G__68895 = arguments.length;
switch (G__68895) {
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
var seq__68922 = cljs.core.seq(events);
var chunk__68923 = null;
var count__68924 = (0);
var i__68925 = (0);
while(true){
if((i__68925 < count__68924)){
var vec__68936 = chunk__68923.cljs$core$IIndexed$_nth$arity$2(null,i__68925);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68936,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69777 = seq__68922;
var G__69778 = chunk__68923;
var G__69779 = count__68924;
var G__69780 = (i__68925 + (1));
seq__68922 = G__69777;
chunk__68923 = G__69778;
count__68924 = G__69779;
i__68925 = G__69780;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__68922);
if(temp__5823__auto__){
var seq__68922__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68922__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__68922__$1);
var G__69781 = cljs.core.chunk_rest(seq__68922__$1);
var G__69782 = c__5672__auto__;
var G__69783 = cljs.core.count(c__5672__auto__);
var G__69784 = (0);
seq__68922 = G__69781;
chunk__68923 = G__69782;
count__68924 = G__69783;
i__68925 = G__69784;
continue;
} else {
var vec__68940 = cljs.core.first(seq__68922__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68940,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69785 = cljs.core.next(seq__68922__$1);
var G__69786 = null;
var G__69787 = (0);
var G__69788 = (0);
seq__68922 = G__69785;
chunk__68923 = G__69786;
count__68924 = G__69787;
i__68925 = G__69788;
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
var seq__68943 = cljs.core.seq(styles);
var chunk__68944 = null;
var count__68945 = (0);
var i__68946 = (0);
while(true){
if((i__68946 < count__68945)){
var vec__68954 = chunk__68944.cljs$core$IIndexed$_nth$arity$2(null,i__68946);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68954,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68954,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69794 = seq__68943;
var G__69795 = chunk__68944;
var G__69796 = count__68945;
var G__69797 = (i__68946 + (1));
seq__68943 = G__69794;
chunk__68944 = G__69795;
count__68945 = G__69796;
i__68946 = G__69797;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__68943);
if(temp__5823__auto__){
var seq__68943__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68943__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__68943__$1);
var G__69799 = cljs.core.chunk_rest(seq__68943__$1);
var G__69800 = c__5672__auto__;
var G__69801 = cljs.core.count(c__5672__auto__);
var G__69802 = (0);
seq__68943 = G__69799;
chunk__68944 = G__69800;
count__68945 = G__69801;
i__68946 = G__69802;
continue;
} else {
var vec__68958 = cljs.core.first(seq__68943__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68958,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69808 = cljs.core.next(seq__68943__$1);
var G__69809 = null;
var G__69810 = (0);
var G__69811 = (0);
seq__68943 = G__69808;
chunk__68944 = G__69809;
count__68945 = G__69810;
i__68946 = G__69811;
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
var G__68961_69812 = key;
var G__68961_69813__$1 = (((G__68961_69812 instanceof cljs.core.Keyword))?G__68961_69812.fqn:null);
switch (G__68961_69813__$1) {
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
var ks_69821 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5141__auto__ = goog.string.startsWith(ks_69821,"data-");
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return goog.string.startsWith(ks_69821,"aria-");
}
})())){
el.setAttribute(ks_69821,value);
} else {
(el[ks_69821] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__69003){
var map__69004 = p__69003;
var map__69004__$1 = cljs.core.__destructure_map(map__69004);
var props = map__69004__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69004__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__69005 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69005,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69005,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69005,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__69014 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__69014,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__69014;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__69026 = arguments.length;
switch (G__69026) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__69041){
var vec__69042 = p__69041;
var seq__69043 = cljs.core.seq(vec__69042);
var first__69044 = cljs.core.first(seq__69043);
var seq__69043__$1 = cljs.core.next(seq__69043);
var nn = first__69044;
var first__69044__$1 = cljs.core.first(seq__69043__$1);
var seq__69043__$2 = cljs.core.next(seq__69043__$1);
var np = first__69044__$1;
var nc = seq__69043__$2;
var node = vec__69042;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69045 = nn;
var G__69046 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__69045,G__69046) : create_fn.call(null,G__69045,G__69046));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69047 = nn;
var G__69048 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__69047,G__69048) : create_fn.call(null,G__69047,G__69048));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__69055 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69055,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69055,(1),null);
var seq__69058_69856 = cljs.core.seq(node_children);
var chunk__69059_69857 = null;
var count__69060_69858 = (0);
var i__69061_69859 = (0);
while(true){
if((i__69061_69859 < count__69060_69858)){
var child_struct_69860 = chunk__69059_69857.cljs$core$IIndexed$_nth$arity$2(null,i__69061_69859);
var children_69861 = shadow.dom.dom_node(child_struct_69860);
if(cljs.core.seq_QMARK_(children_69861)){
var seq__69099_69863 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69861));
var chunk__69101_69864 = null;
var count__69103_69865 = (0);
var i__69104_69866 = (0);
while(true){
if((i__69104_69866 < count__69103_69865)){
var child_69868 = chunk__69101_69864.cljs$core$IIndexed$_nth$arity$2(null,i__69104_69866);
if(cljs.core.truth_(child_69868)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69868);


var G__69869 = seq__69099_69863;
var G__69870 = chunk__69101_69864;
var G__69871 = count__69103_69865;
var G__69872 = (i__69104_69866 + (1));
seq__69099_69863 = G__69869;
chunk__69101_69864 = G__69870;
count__69103_69865 = G__69871;
i__69104_69866 = G__69872;
continue;
} else {
var G__69875 = seq__69099_69863;
var G__69876 = chunk__69101_69864;
var G__69877 = count__69103_69865;
var G__69880 = (i__69104_69866 + (1));
seq__69099_69863 = G__69875;
chunk__69101_69864 = G__69876;
count__69103_69865 = G__69877;
i__69104_69866 = G__69880;
continue;
}
} else {
var temp__5823__auto___69888 = cljs.core.seq(seq__69099_69863);
if(temp__5823__auto___69888){
var seq__69099_69889__$1 = temp__5823__auto___69888;
if(cljs.core.chunked_seq_QMARK_(seq__69099_69889__$1)){
var c__5672__auto___69890 = cljs.core.chunk_first(seq__69099_69889__$1);
var G__69893 = cljs.core.chunk_rest(seq__69099_69889__$1);
var G__69894 = c__5672__auto___69890;
var G__69895 = cljs.core.count(c__5672__auto___69890);
var G__69896 = (0);
seq__69099_69863 = G__69893;
chunk__69101_69864 = G__69894;
count__69103_69865 = G__69895;
i__69104_69866 = G__69896;
continue;
} else {
var child_69897 = cljs.core.first(seq__69099_69889__$1);
if(cljs.core.truth_(child_69897)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69897);


var G__69898 = cljs.core.next(seq__69099_69889__$1);
var G__69899 = null;
var G__69900 = (0);
var G__69901 = (0);
seq__69099_69863 = G__69898;
chunk__69101_69864 = G__69899;
count__69103_69865 = G__69900;
i__69104_69866 = G__69901;
continue;
} else {
var G__69902 = cljs.core.next(seq__69099_69889__$1);
var G__69903 = null;
var G__69904 = (0);
var G__69905 = (0);
seq__69099_69863 = G__69902;
chunk__69101_69864 = G__69903;
count__69103_69865 = G__69904;
i__69104_69866 = G__69905;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69861);
}


var G__69906 = seq__69058_69856;
var G__69907 = chunk__69059_69857;
var G__69908 = count__69060_69858;
var G__69909 = (i__69061_69859 + (1));
seq__69058_69856 = G__69906;
chunk__69059_69857 = G__69907;
count__69060_69858 = G__69908;
i__69061_69859 = G__69909;
continue;
} else {
var temp__5823__auto___69910 = cljs.core.seq(seq__69058_69856);
if(temp__5823__auto___69910){
var seq__69058_69911__$1 = temp__5823__auto___69910;
if(cljs.core.chunked_seq_QMARK_(seq__69058_69911__$1)){
var c__5672__auto___69912 = cljs.core.chunk_first(seq__69058_69911__$1);
var G__69914 = cljs.core.chunk_rest(seq__69058_69911__$1);
var G__69915 = c__5672__auto___69912;
var G__69916 = cljs.core.count(c__5672__auto___69912);
var G__69917 = (0);
seq__69058_69856 = G__69914;
chunk__69059_69857 = G__69915;
count__69060_69858 = G__69916;
i__69061_69859 = G__69917;
continue;
} else {
var child_struct_69920 = cljs.core.first(seq__69058_69911__$1);
var children_69922 = shadow.dom.dom_node(child_struct_69920);
if(cljs.core.seq_QMARK_(children_69922)){
var seq__69128_69923 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69922));
var chunk__69130_69924 = null;
var count__69131_69925 = (0);
var i__69132_69926 = (0);
while(true){
if((i__69132_69926 < count__69131_69925)){
var child_69928 = chunk__69130_69924.cljs$core$IIndexed$_nth$arity$2(null,i__69132_69926);
if(cljs.core.truth_(child_69928)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69928);


var G__69930 = seq__69128_69923;
var G__69931 = chunk__69130_69924;
var G__69932 = count__69131_69925;
var G__69933 = (i__69132_69926 + (1));
seq__69128_69923 = G__69930;
chunk__69130_69924 = G__69931;
count__69131_69925 = G__69932;
i__69132_69926 = G__69933;
continue;
} else {
var G__69937 = seq__69128_69923;
var G__69938 = chunk__69130_69924;
var G__69939 = count__69131_69925;
var G__69940 = (i__69132_69926 + (1));
seq__69128_69923 = G__69937;
chunk__69130_69924 = G__69938;
count__69131_69925 = G__69939;
i__69132_69926 = G__69940;
continue;
}
} else {
var temp__5823__auto___69942__$1 = cljs.core.seq(seq__69128_69923);
if(temp__5823__auto___69942__$1){
var seq__69128_69944__$1 = temp__5823__auto___69942__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69128_69944__$1)){
var c__5672__auto___69945 = cljs.core.chunk_first(seq__69128_69944__$1);
var G__69946 = cljs.core.chunk_rest(seq__69128_69944__$1);
var G__69947 = c__5672__auto___69945;
var G__69948 = cljs.core.count(c__5672__auto___69945);
var G__69949 = (0);
seq__69128_69923 = G__69946;
chunk__69130_69924 = G__69947;
count__69131_69925 = G__69948;
i__69132_69926 = G__69949;
continue;
} else {
var child_69950 = cljs.core.first(seq__69128_69944__$1);
if(cljs.core.truth_(child_69950)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69950);


var G__69951 = cljs.core.next(seq__69128_69944__$1);
var G__69952 = null;
var G__69953 = (0);
var G__69954 = (0);
seq__69128_69923 = G__69951;
chunk__69130_69924 = G__69952;
count__69131_69925 = G__69953;
i__69132_69926 = G__69954;
continue;
} else {
var G__69956 = cljs.core.next(seq__69128_69944__$1);
var G__69957 = null;
var G__69958 = (0);
var G__69959 = (0);
seq__69128_69923 = G__69956;
chunk__69130_69924 = G__69957;
count__69131_69925 = G__69958;
i__69132_69926 = G__69959;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69922);
}


var G__69960 = cljs.core.next(seq__69058_69911__$1);
var G__69961 = null;
var G__69962 = (0);
var G__69963 = (0);
seq__69058_69856 = G__69960;
chunk__69059_69857 = G__69961;
count__69060_69858 = G__69962;
i__69061_69859 = G__69963;
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
var seq__69170 = cljs.core.seq(node);
var chunk__69172 = null;
var count__69173 = (0);
var i__69174 = (0);
while(true){
if((i__69174 < count__69173)){
var n = chunk__69172.cljs$core$IIndexed$_nth$arity$2(null,i__69174);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69970 = seq__69170;
var G__69971 = chunk__69172;
var G__69972 = count__69173;
var G__69973 = (i__69174 + (1));
seq__69170 = G__69970;
chunk__69172 = G__69971;
count__69173 = G__69972;
i__69174 = G__69973;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__69170);
if(temp__5823__auto__){
var seq__69170__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69170__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__69170__$1);
var G__69977 = cljs.core.chunk_rest(seq__69170__$1);
var G__69978 = c__5672__auto__;
var G__69979 = cljs.core.count(c__5672__auto__);
var G__69980 = (0);
seq__69170 = G__69977;
chunk__69172 = G__69978;
count__69173 = G__69979;
i__69174 = G__69980;
continue;
} else {
var n = cljs.core.first(seq__69170__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69981 = cljs.core.next(seq__69170__$1);
var G__69982 = null;
var G__69983 = (0);
var G__69984 = (0);
seq__69170 = G__69981;
chunk__69172 = G__69982;
count__69173 = G__69983;
i__69174 = G__69984;
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
var G__69194 = arguments.length;
switch (G__69194) {
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
var G__69200 = arguments.length;
switch (G__69200) {
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
var G__69210 = arguments.length;
switch (G__69210) {
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
var or__5141__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
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
var args__5881__auto__ = [];
var len__5875__auto___70014 = arguments.length;
var i__5876__auto___70015 = (0);
while(true){
if((i__5876__auto___70015 < len__5875__auto___70014)){
args__5881__auto__.push((arguments[i__5876__auto___70015]));

var G__70017 = (i__5876__auto___70015 + (1));
i__5876__auto___70015 = G__70017;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__69232_70019 = cljs.core.seq(nodes);
var chunk__69233_70020 = null;
var count__69234_70021 = (0);
var i__69235_70022 = (0);
while(true){
if((i__69235_70022 < count__69234_70021)){
var node_70023 = chunk__69233_70020.cljs$core$IIndexed$_nth$arity$2(null,i__69235_70022);
fragment.appendChild(shadow.dom._to_dom(node_70023));


var G__70026 = seq__69232_70019;
var G__70027 = chunk__69233_70020;
var G__70028 = count__69234_70021;
var G__70029 = (i__69235_70022 + (1));
seq__69232_70019 = G__70026;
chunk__69233_70020 = G__70027;
count__69234_70021 = G__70028;
i__69235_70022 = G__70029;
continue;
} else {
var temp__5823__auto___70030 = cljs.core.seq(seq__69232_70019);
if(temp__5823__auto___70030){
var seq__69232_70033__$1 = temp__5823__auto___70030;
if(cljs.core.chunked_seq_QMARK_(seq__69232_70033__$1)){
var c__5672__auto___70034 = cljs.core.chunk_first(seq__69232_70033__$1);
var G__70035 = cljs.core.chunk_rest(seq__69232_70033__$1);
var G__70036 = c__5672__auto___70034;
var G__70037 = cljs.core.count(c__5672__auto___70034);
var G__70038 = (0);
seq__69232_70019 = G__70035;
chunk__69233_70020 = G__70036;
count__69234_70021 = G__70037;
i__69235_70022 = G__70038;
continue;
} else {
var node_70039 = cljs.core.first(seq__69232_70033__$1);
fragment.appendChild(shadow.dom._to_dom(node_70039));


var G__70040 = cljs.core.next(seq__69232_70033__$1);
var G__70041 = null;
var G__70042 = (0);
var G__70043 = (0);
seq__69232_70019 = G__70040;
chunk__69233_70020 = G__70041;
count__69234_70021 = G__70042;
i__69235_70022 = G__70043;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq69224){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69224));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__69251_70053 = cljs.core.seq(scripts);
var chunk__69252_70054 = null;
var count__69253_70055 = (0);
var i__69254_70056 = (0);
while(true){
if((i__69254_70056 < count__69253_70055)){
var vec__69270_70060 = chunk__69252_70054.cljs$core$IIndexed$_nth$arity$2(null,i__69254_70056);
var script_tag_70061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69270_70060,(0),null);
var script_body_70062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69270_70060,(1),null);
eval(script_body_70062);


var G__70063 = seq__69251_70053;
var G__70064 = chunk__69252_70054;
var G__70065 = count__69253_70055;
var G__70066 = (i__69254_70056 + (1));
seq__69251_70053 = G__70063;
chunk__69252_70054 = G__70064;
count__69253_70055 = G__70065;
i__69254_70056 = G__70066;
continue;
} else {
var temp__5823__auto___70067 = cljs.core.seq(seq__69251_70053);
if(temp__5823__auto___70067){
var seq__69251_70068__$1 = temp__5823__auto___70067;
if(cljs.core.chunked_seq_QMARK_(seq__69251_70068__$1)){
var c__5672__auto___70070 = cljs.core.chunk_first(seq__69251_70068__$1);
var G__70071 = cljs.core.chunk_rest(seq__69251_70068__$1);
var G__70072 = c__5672__auto___70070;
var G__70073 = cljs.core.count(c__5672__auto___70070);
var G__70074 = (0);
seq__69251_70053 = G__70071;
chunk__69252_70054 = G__70072;
count__69253_70055 = G__70073;
i__69254_70056 = G__70074;
continue;
} else {
var vec__69277_70077 = cljs.core.first(seq__69251_70068__$1);
var script_tag_70078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69277_70077,(0),null);
var script_body_70079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69277_70077,(1),null);
eval(script_body_70079);


var G__70082 = cljs.core.next(seq__69251_70068__$1);
var G__70083 = null;
var G__70084 = (0);
var G__70085 = (0);
seq__69251_70053 = G__70082;
chunk__69252_70054 = G__70083;
count__69253_70055 = G__70084;
i__69254_70056 = G__70085;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__69281){
var vec__69282 = p__69281;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69282,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69282,(1),null);
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
var G__69292 = arguments.length;
switch (G__69292) {
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0)))+"px");
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
var seq__69314 = cljs.core.seq(style_keys);
var chunk__69315 = null;
var count__69316 = (0);
var i__69317 = (0);
while(true){
if((i__69317 < count__69316)){
var it = chunk__69315.cljs$core$IIndexed$_nth$arity$2(null,i__69317);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__70098 = seq__69314;
var G__70099 = chunk__69315;
var G__70100 = count__69316;
var G__70101 = (i__69317 + (1));
seq__69314 = G__70098;
chunk__69315 = G__70099;
count__69316 = G__70100;
i__69317 = G__70101;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__69314);
if(temp__5823__auto__){
var seq__69314__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69314__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__69314__$1);
var G__70102 = cljs.core.chunk_rest(seq__69314__$1);
var G__70103 = c__5672__auto__;
var G__70104 = cljs.core.count(c__5672__auto__);
var G__70105 = (0);
seq__69314 = G__70102;
chunk__69315 = G__70103;
count__69316 = G__70104;
i__69317 = G__70105;
continue;
} else {
var it = cljs.core.first(seq__69314__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__70106 = cljs.core.next(seq__69314__$1);
var G__70107 = null;
var G__70108 = (0);
var G__70109 = (0);
seq__69314 = G__70106;
chunk__69315 = G__70107;
count__69316 = G__70108;
i__69317 = G__70109;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k69361,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__69377 = k69361;
var G__69377__$1 = (((G__69377 instanceof cljs.core.Keyword))?G__69377.fqn:null);
switch (G__69377__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69361,else__5450__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__69378){
var vec__69379 = p__69378;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69379,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69379,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69360){
var self__ = this;
var G__69360__$1 = this;
return (new cljs.core.RecordIter((0),G__69360__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this69362,other69363){
var self__ = this;
var this69362__$1 = this;
return (((!((other69363 == null)))) && ((((this69362__$1.constructor === other69363.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69362__$1.x,other69363.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69362__$1.y,other69363.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69362__$1.__extmap,other69363.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k69361){
var self__ = this;
var this__5454__auto____$1 = this;
var G__69388 = k69361;
var G__69388__$1 = (((G__69388 instanceof cljs.core.Keyword))?G__69388.fqn:null);
switch (G__69388__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k69361);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__69360){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__69390 = cljs.core.keyword_identical_QMARK_;
var expr__69391 = k__5456__auto__;
if(cljs.core.truth_((pred__69390.cljs$core$IFn$_invoke$arity$2 ? pred__69390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__69391) : pred__69390.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__69391)))){
return (new shadow.dom.Coordinate(G__69360,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69390.cljs$core$IFn$_invoke$arity$2 ? pred__69390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__69391) : pred__69390.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__69391)))){
return (new shadow.dom.Coordinate(self__.x,G__69360,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__69360),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__69360){
var self__ = this;
var this__5446__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__69360,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__69368){
var extmap__5489__auto__ = (function (){var G__69404 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69368,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__69368)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__69404);
} else {
return G__69404;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__69368),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__69368),null,cljs.core.not_empty(extmap__5489__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k69410,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__69415 = k69410;
var G__69415__$1 = (((G__69415 instanceof cljs.core.Keyword))?G__69415.fqn:null);
switch (G__69415__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69410,else__5450__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__69416){
var vec__69417 = p__69416;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69417,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69417,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#shadow.dom.Size{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69409){
var self__ = this;
var G__69409__$1 = this;
return (new cljs.core.RecordIter((0),G__69409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this69411,other69412){
var self__ = this;
var this69411__$1 = this;
return (((!((other69412 == null)))) && ((((this69411__$1.constructor === other69412.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69411__$1.w,other69412.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69411__$1.h,other69412.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69411__$1.__extmap,other69412.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k69410){
var self__ = this;
var this__5454__auto____$1 = this;
var G__69427 = k69410;
var G__69427__$1 = (((G__69427 instanceof cljs.core.Keyword))?G__69427.fqn:null);
switch (G__69427__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k69410);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__69409){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__69428 = cljs.core.keyword_identical_QMARK_;
var expr__69429 = k__5456__auto__;
if(cljs.core.truth_((pred__69428.cljs$core$IFn$_invoke$arity$2 ? pred__69428.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__69429) : pred__69428.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__69429)))){
return (new shadow.dom.Size(G__69409,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69428.cljs$core$IFn$_invoke$arity$2 ? pred__69428.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__69429) : pred__69428.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__69429)))){
return (new shadow.dom.Size(self__.w,G__69409,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__69409),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__69409){
var self__ = this;
var this__5446__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__69409,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__69413){
var extmap__5489__auto__ = (function (){var G__69432 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69413,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__69413)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__69432);
} else {
return G__69432;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__69413),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__69413),null,cljs.core.not_empty(extmap__5489__auto__),null));
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
var a__5737__auto__ = opts;
var l__5738__auto__ = a__5737__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5738__auto__)){
var G__70173 = (i + (1));
var G__70174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__70173;
ret = G__70174;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69460){
var vec__69463 = p__69460;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69463,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__69471 = arguments.length;
switch (G__69471) {
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
var G__70183 = ps;
var G__70184 = (i + (1));
el__$1 = G__70183;
i = G__70184;
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
var vec__69517 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69517,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69517,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69517,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__69523_70188 = cljs.core.seq(props);
var chunk__69524_70189 = null;
var count__69525_70190 = (0);
var i__69526_70191 = (0);
while(true){
if((i__69526_70191 < count__69525_70190)){
var vec__69546_70192 = chunk__69524_70189.cljs$core$IIndexed$_nth$arity$2(null,i__69526_70191);
var k_70193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69546_70192,(0),null);
var v_70194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69546_70192,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_70193);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_70193),v_70194);


var G__70197 = seq__69523_70188;
var G__70198 = chunk__69524_70189;
var G__70199 = count__69525_70190;
var G__70200 = (i__69526_70191 + (1));
seq__69523_70188 = G__70197;
chunk__69524_70189 = G__70198;
count__69525_70190 = G__70199;
i__69526_70191 = G__70200;
continue;
} else {
var temp__5823__auto___70201 = cljs.core.seq(seq__69523_70188);
if(temp__5823__auto___70201){
var seq__69523_70202__$1 = temp__5823__auto___70201;
if(cljs.core.chunked_seq_QMARK_(seq__69523_70202__$1)){
var c__5672__auto___70203 = cljs.core.chunk_first(seq__69523_70202__$1);
var G__70204 = cljs.core.chunk_rest(seq__69523_70202__$1);
var G__70205 = c__5672__auto___70203;
var G__70206 = cljs.core.count(c__5672__auto___70203);
var G__70207 = (0);
seq__69523_70188 = G__70204;
chunk__69524_70189 = G__70205;
count__69525_70190 = G__70206;
i__69526_70191 = G__70207;
continue;
} else {
var vec__69576_70208 = cljs.core.first(seq__69523_70202__$1);
var k_70209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69576_70208,(0),null);
var v_70210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69576_70208,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_70209);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_70209),v_70210);


var G__70211 = cljs.core.next(seq__69523_70202__$1);
var G__70212 = null;
var G__70213 = (0);
var G__70214 = (0);
seq__69523_70188 = G__70211;
chunk__69524_70189 = G__70212;
count__69525_70190 = G__70213;
i__69526_70191 = G__70214;
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
var vec__69625 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69625,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69625,(1),null);
var seq__69632_70215 = cljs.core.seq(node_children);
var chunk__69635_70216 = null;
var count__69636_70217 = (0);
var i__69637_70218 = (0);
while(true){
if((i__69637_70218 < count__69636_70217)){
var child_struct_70219 = chunk__69635_70216.cljs$core$IIndexed$_nth$arity$2(null,i__69637_70218);
if((!((child_struct_70219 == null)))){
if(typeof child_struct_70219 === 'string'){
var text_70223 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_70223)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_70219)));
} else {
var children_70224 = shadow.dom.svg_node(child_struct_70219);
if(cljs.core.seq_QMARK_(children_70224)){
var seq__69672_70227 = cljs.core.seq(children_70224);
var chunk__69675_70228 = null;
var count__69676_70230 = (0);
var i__69677_70231 = (0);
while(true){
if((i__69677_70231 < count__69676_70230)){
var child_70232 = chunk__69675_70228.cljs$core$IIndexed$_nth$arity$2(null,i__69677_70231);
if(cljs.core.truth_(child_70232)){
node.appendChild(child_70232);


var G__70234 = seq__69672_70227;
var G__70235 = chunk__69675_70228;
var G__70236 = count__69676_70230;
var G__70237 = (i__69677_70231 + (1));
seq__69672_70227 = G__70234;
chunk__69675_70228 = G__70235;
count__69676_70230 = G__70236;
i__69677_70231 = G__70237;
continue;
} else {
var G__70240 = seq__69672_70227;
var G__70241 = chunk__69675_70228;
var G__70242 = count__69676_70230;
var G__70244 = (i__69677_70231 + (1));
seq__69672_70227 = G__70240;
chunk__69675_70228 = G__70241;
count__69676_70230 = G__70242;
i__69677_70231 = G__70244;
continue;
}
} else {
var temp__5823__auto___70245 = cljs.core.seq(seq__69672_70227);
if(temp__5823__auto___70245){
var seq__69672_70246__$1 = temp__5823__auto___70245;
if(cljs.core.chunked_seq_QMARK_(seq__69672_70246__$1)){
var c__5672__auto___70248 = cljs.core.chunk_first(seq__69672_70246__$1);
var G__70249 = cljs.core.chunk_rest(seq__69672_70246__$1);
var G__70250 = c__5672__auto___70248;
var G__70251 = cljs.core.count(c__5672__auto___70248);
var G__70252 = (0);
seq__69672_70227 = G__70249;
chunk__69675_70228 = G__70250;
count__69676_70230 = G__70251;
i__69677_70231 = G__70252;
continue;
} else {
var child_70256 = cljs.core.first(seq__69672_70246__$1);
if(cljs.core.truth_(child_70256)){
node.appendChild(child_70256);


var G__70257 = cljs.core.next(seq__69672_70246__$1);
var G__70258 = null;
var G__70259 = (0);
var G__70260 = (0);
seq__69672_70227 = G__70257;
chunk__69675_70228 = G__70258;
count__69676_70230 = G__70259;
i__69677_70231 = G__70260;
continue;
} else {
var G__70264 = cljs.core.next(seq__69672_70246__$1);
var G__70265 = null;
var G__70266 = (0);
var G__70267 = (0);
seq__69672_70227 = G__70264;
chunk__69675_70228 = G__70265;
count__69676_70230 = G__70266;
i__69677_70231 = G__70267;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_70224);
}
}


var G__70269 = seq__69632_70215;
var G__70270 = chunk__69635_70216;
var G__70271 = count__69636_70217;
var G__70272 = (i__69637_70218 + (1));
seq__69632_70215 = G__70269;
chunk__69635_70216 = G__70270;
count__69636_70217 = G__70271;
i__69637_70218 = G__70272;
continue;
} else {
var G__70273 = seq__69632_70215;
var G__70274 = chunk__69635_70216;
var G__70275 = count__69636_70217;
var G__70276 = (i__69637_70218 + (1));
seq__69632_70215 = G__70273;
chunk__69635_70216 = G__70274;
count__69636_70217 = G__70275;
i__69637_70218 = G__70276;
continue;
}
} else {
var temp__5823__auto___70279 = cljs.core.seq(seq__69632_70215);
if(temp__5823__auto___70279){
var seq__69632_70281__$1 = temp__5823__auto___70279;
if(cljs.core.chunked_seq_QMARK_(seq__69632_70281__$1)){
var c__5672__auto___70282 = cljs.core.chunk_first(seq__69632_70281__$1);
var G__70283 = cljs.core.chunk_rest(seq__69632_70281__$1);
var G__70284 = c__5672__auto___70282;
var G__70285 = cljs.core.count(c__5672__auto___70282);
var G__70286 = (0);
seq__69632_70215 = G__70283;
chunk__69635_70216 = G__70284;
count__69636_70217 = G__70285;
i__69637_70218 = G__70286;
continue;
} else {
var child_struct_70287 = cljs.core.first(seq__69632_70281__$1);
if((!((child_struct_70287 == null)))){
if(typeof child_struct_70287 === 'string'){
var text_70288 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_70288)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_70287)));
} else {
var children_70289 = shadow.dom.svg_node(child_struct_70287);
if(cljs.core.seq_QMARK_(children_70289)){
var seq__69685_70290 = cljs.core.seq(children_70289);
var chunk__69687_70291 = null;
var count__69688_70292 = (0);
var i__69689_70293 = (0);
while(true){
if((i__69689_70293 < count__69688_70292)){
var child_70295 = chunk__69687_70291.cljs$core$IIndexed$_nth$arity$2(null,i__69689_70293);
if(cljs.core.truth_(child_70295)){
node.appendChild(child_70295);


var G__70298 = seq__69685_70290;
var G__70299 = chunk__69687_70291;
var G__70300 = count__69688_70292;
var G__70301 = (i__69689_70293 + (1));
seq__69685_70290 = G__70298;
chunk__69687_70291 = G__70299;
count__69688_70292 = G__70300;
i__69689_70293 = G__70301;
continue;
} else {
var G__70302 = seq__69685_70290;
var G__70303 = chunk__69687_70291;
var G__70304 = count__69688_70292;
var G__70305 = (i__69689_70293 + (1));
seq__69685_70290 = G__70302;
chunk__69687_70291 = G__70303;
count__69688_70292 = G__70304;
i__69689_70293 = G__70305;
continue;
}
} else {
var temp__5823__auto___70308__$1 = cljs.core.seq(seq__69685_70290);
if(temp__5823__auto___70308__$1){
var seq__69685_70309__$1 = temp__5823__auto___70308__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69685_70309__$1)){
var c__5672__auto___70310 = cljs.core.chunk_first(seq__69685_70309__$1);
var G__70311 = cljs.core.chunk_rest(seq__69685_70309__$1);
var G__70312 = c__5672__auto___70310;
var G__70313 = cljs.core.count(c__5672__auto___70310);
var G__70314 = (0);
seq__69685_70290 = G__70311;
chunk__69687_70291 = G__70312;
count__69688_70292 = G__70313;
i__69689_70293 = G__70314;
continue;
} else {
var child_70315 = cljs.core.first(seq__69685_70309__$1);
if(cljs.core.truth_(child_70315)){
node.appendChild(child_70315);


var G__70316 = cljs.core.next(seq__69685_70309__$1);
var G__70317 = null;
var G__70318 = (0);
var G__70319 = (0);
seq__69685_70290 = G__70316;
chunk__69687_70291 = G__70317;
count__69688_70292 = G__70318;
i__69689_70293 = G__70319;
continue;
} else {
var G__70320 = cljs.core.next(seq__69685_70309__$1);
var G__70321 = null;
var G__70322 = (0);
var G__70323 = (0);
seq__69685_70290 = G__70320;
chunk__69687_70291 = G__70321;
count__69688_70292 = G__70322;
i__69689_70293 = G__70323;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_70289);
}
}


var G__70324 = cljs.core.next(seq__69632_70281__$1);
var G__70325 = null;
var G__70326 = (0);
var G__70327 = (0);
seq__69632_70215 = G__70324;
chunk__69635_70216 = G__70325;
count__69636_70217 = G__70326;
i__69637_70218 = G__70327;
continue;
} else {
var G__70328 = cljs.core.next(seq__69632_70281__$1);
var G__70329 = null;
var G__70330 = (0);
var G__70331 = (0);
seq__69632_70215 = G__70328;
chunk__69635_70216 = G__70329;
count__69636_70217 = G__70330;
i__69637_70218 = G__70331;
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
var args__5881__auto__ = [];
var len__5875__auto___70350 = arguments.length;
var i__5876__auto___70351 = (0);
while(true){
if((i__5876__auto___70351 < len__5875__auto___70350)){
args__5881__auto__.push((arguments[i__5876__auto___70351]));

var G__70352 = (i__5876__auto___70351 + (1));
i__5876__auto___70351 = G__70352;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq69694){
var G__69695 = cljs.core.first(seq69694);
var seq69694__$1 = cljs.core.next(seq69694);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69695,seq69694__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
