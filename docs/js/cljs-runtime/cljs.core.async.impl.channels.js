import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.core.async.impl.protocols.js";
import "./cljs.core.async.impl.dispatch.js";
import "./cljs.core.async.impl.buffers.js";
goog.provide('cljs.core.async.impl.channels');

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399 = (function (val,meta69400){
this.val = val;
this.meta69400 = meta69400;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69401,meta69400__$1){
var self__ = this;
var _69401__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399(self__.val,meta69400__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69401){
var self__ = this;
var _69401__$1 = this;
return self__.meta69400;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta69400","meta69400",1895880060,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels69399");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels69399");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels69399.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels69399 = (function cljs$core$async$impl$channels$__GT_t_cljs$core$async$impl$channels69399(val,meta69400){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399(val,meta69400));
});


cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels69399(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_69512 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_69512(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_69534 = self__.puts.pop();
if((putter_69534 == null)){
} else {
var put_handler_69535 = putter_69534.handler;
var val_69536 = putter_69534.val;
if(put_handler_69535.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_69537 = put_handler_69535.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_69537,put_handler_69535,val_69536,putter_69534,this$__$1){
return (function (){
return (put_cb_69537.cljs$core$IFn$_invoke$arity$1 ? put_cb_69537.cljs$core$IFn$_invoke$arity$1(true) : put_cb_69537.call(null,true));
});})(put_cb_69537,put_handler_69535,val_69536,putter_69534,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error((""+"Assert failed: "+"Can't put nil on a channel"+"\n"+"(not (nil? val))")));
}

var closed__$1 = self__.closed;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(closed__$1){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

return cljs.core.async.impl.channels.box(false);
} else {
if(cljs.core.truth_((function (){var and__5139__auto__ = self__.buf;
if(cljs.core.truth_(and__5139__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__5139__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__69544 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__69544;
continue;
} else {
var G__69545 = takers;
takers = G__69545;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__69423_69549 = cljs.core.seq(take_cbs);
var chunk__69424_69550 = null;
var count__69425_69551 = (0);
var i__69426_69552 = (0);
while(true){
if((i__69426_69552 < count__69425_69551)){
var f_69553 = chunk__69424_69550.cljs$core$IIndexed$_nth$arity$2(null,i__69426_69552);
cljs.core.async.impl.dispatch.run(f_69553);


var G__69554 = seq__69423_69549;
var G__69555 = chunk__69424_69550;
var G__69556 = count__69425_69551;
var G__69557 = (i__69426_69552 + (1));
seq__69423_69549 = G__69554;
chunk__69424_69550 = G__69555;
count__69425_69551 = G__69556;
i__69426_69552 = G__69557;
continue;
} else {
var temp__5823__auto___69558 = cljs.core.seq(seq__69423_69549);
if(temp__5823__auto___69558){
var seq__69423_69559__$1 = temp__5823__auto___69558;
if(cljs.core.chunked_seq_QMARK_(seq__69423_69559__$1)){
var c__5672__auto___69560 = cljs.core.chunk_first(seq__69423_69559__$1);
var G__69561 = cljs.core.chunk_rest(seq__69423_69559__$1);
var G__69562 = c__5672__auto___69560;
var G__69563 = cljs.core.count(c__5672__auto___69560);
var G__69564 = (0);
seq__69423_69549 = G__69561;
chunk__69424_69550 = G__69562;
count__69425_69551 = G__69563;
i__69426_69552 = G__69564;
continue;
} else {
var f_69565 = cljs.core.first(seq__69423_69559__$1);
cljs.core.async.impl.dispatch.run(f_69565);


var G__69566 = cljs.core.next(seq__69423_69559__$1);
var G__69567 = null;
var G__69568 = (0);
var G__69569 = (0);
seq__69423_69549 = G__69566;
chunk__69424_69550 = G__69567;
count__69425_69551 = G__69568;
i__69426_69552 = G__69569;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))+" pending puts are allowed on a single channel."+" Consider using a windowed buffer."))+"\n"+"(< (.-length puts) impl/MAX-QUEUE-SIZE)")));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5821__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5821__auto__)){
var take_cb = temp__5821__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__69433 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__5139__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__5139__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5139__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))))){
var G__69588 = cbs__$1;
cbs = G__69588;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69433,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69433,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__69441_69591 = cljs.core.seq(cbs);
var chunk__69442_69592 = null;
var count__69443_69593 = (0);
var i__69444_69594 = (0);
while(true){
if((i__69444_69594 < count__69443_69593)){
var cb_69596 = chunk__69442_69592.cljs$core$IIndexed$_nth$arity$2(null,i__69444_69594);
cljs.core.async.impl.dispatch.run(((function (seq__69441_69591,chunk__69442_69592,count__69443_69593,i__69444_69594,cb_69596,val,vec__69433,done_QMARK_,cbs,take_cb,temp__5821__auto__,this$__$1){
return (function (){
return (cb_69596.cljs$core$IFn$_invoke$arity$1 ? cb_69596.cljs$core$IFn$_invoke$arity$1(true) : cb_69596.call(null,true));
});})(seq__69441_69591,chunk__69442_69592,count__69443_69593,i__69444_69594,cb_69596,val,vec__69433,done_QMARK_,cbs,take_cb,temp__5821__auto__,this$__$1))
);


var G__69597 = seq__69441_69591;
var G__69598 = chunk__69442_69592;
var G__69599 = count__69443_69593;
var G__69600 = (i__69444_69594 + (1));
seq__69441_69591 = G__69597;
chunk__69442_69592 = G__69598;
count__69443_69593 = G__69599;
i__69444_69594 = G__69600;
continue;
} else {
var temp__5823__auto___69601 = cljs.core.seq(seq__69441_69591);
if(temp__5823__auto___69601){
var seq__69441_69605__$1 = temp__5823__auto___69601;
if(cljs.core.chunked_seq_QMARK_(seq__69441_69605__$1)){
var c__5672__auto___69606 = cljs.core.chunk_first(seq__69441_69605__$1);
var G__69607 = cljs.core.chunk_rest(seq__69441_69605__$1);
var G__69608 = c__5672__auto___69606;
var G__69609 = cljs.core.count(c__5672__auto___69606);
var G__69610 = (0);
seq__69441_69591 = G__69607;
chunk__69442_69592 = G__69608;
count__69443_69593 = G__69609;
i__69444_69594 = G__69610;
continue;
} else {
var cb_69614 = cljs.core.first(seq__69441_69605__$1);
cljs.core.async.impl.dispatch.run(((function (seq__69441_69591,chunk__69442_69592,count__69443_69593,i__69444_69594,cb_69614,seq__69441_69605__$1,temp__5823__auto___69601,val,vec__69433,done_QMARK_,cbs,take_cb,temp__5821__auto__,this$__$1){
return (function (){
return (cb_69614.cljs$core$IFn$_invoke$arity$1 ? cb_69614.cljs$core$IFn$_invoke$arity$1(true) : cb_69614.call(null,true));
});})(seq__69441_69591,chunk__69442_69592,count__69443_69593,i__69444_69594,cb_69614,seq__69441_69605__$1,temp__5823__auto___69601,val,vec__69433,done_QMARK_,cbs,take_cb,temp__5821__auto__,this$__$1))
);


var G__69615 = cljs.core.next(seq__69441_69605__$1);
var G__69616 = null;
var G__69617 = (0);
var G__69618 = (0);
seq__69441_69591 = G__69615;
chunk__69442_69592 = G__69616;
count__69443_69593 = G__69617;
i__69444_69594 = G__69618;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__5139__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5139__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5139__auto__;
}
})())){
var has_val = (function (){var and__5139__auto__ = self__.buf;
if(cljs.core.truth_(and__5139__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5139__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))+" pending takes are allowed on a single channel."))+"\n"+"(< (.-length takes) impl/MAX-QUEUE-SIZE)")));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__5139__auto__ = self__.buf;
if(cljs.core.truth_(and__5139__auto__)){
return (self__.puts.length === (0));
} else {
return and__5139__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_69642 = self__.takes.pop();
if((taker_69642 == null)){
} else {
if(taker_69642.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_69649 = taker_69642.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_69650 = (cljs.core.truth_((function (){var and__5139__auto__ = self__.buf;
if(cljs.core.truth_(and__5139__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5139__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_69649,val_69650,taker_69642,this$__$1){
return (function (){
return (take_cb_69649.cljs$core$IFn$_invoke$arity$1 ? take_cb_69649.cljs$core$IFn$_invoke$arity$1(val_69650) : take_cb_69649.call(null,val_69650));
});})(take_cb_69649,val_69650,taker_69642,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__69486 = (function (){var or__5141__auto__ = exh;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__69486.cljs$core$IFn$_invoke$arity$1 ? fexpr__69486.cljs$core$IFn$_invoke$arity$1(t) : fexpr__69486.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__69491 = arguments.length;
switch (G__69491) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__69655 = null;
var G__69655__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e69506){var t = e69506;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__69655__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e69507){var t = e69507;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__69655 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__69655__1.call(this,buf__$1);
case 2:
return G__69655__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69655.cljs$core$IFn$_invoke$arity$1 = G__69655__1;
G__69655.cljs$core$IFn$_invoke$arity$2 = G__69655__2;
return G__69655;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
