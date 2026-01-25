import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.core.async.impl.protocols.js";
import "./cljs.core.async.impl.channels.js";
import "./cljs.core.async.impl.buffers.js";
import "./cljs.core.async.impl.timers.js";
import "./cljs.core.async.impl.dispatch.js";
import "./cljs.core.async.impl.ioc_helpers.js";
import "./goog.array.array.js";
goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72071 = (function (f,blockable,meta72072){
this.f = f;
this.blockable = blockable;
this.meta72072 = meta72072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72073,meta72072__$1){
var self__ = this;
var _72073__$1 = this;
return (new cljs.core.async.t_cljs$core$async72071(self__.f,self__.blockable,meta72072__$1));
}));

(cljs.core.async.t_cljs$core$async72071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72073){
var self__ = this;
var _72073__$1 = this;
return self__.meta72072;
}));

(cljs.core.async.t_cljs$core$async72071.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async72071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async72071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta72072","meta72072",-1114662723,null)], null);
}));

(cljs.core.async.t_cljs$core$async72071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72071");

(cljs.core.async.t_cljs$core$async72071.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async72071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72071.
 */
cljs.core.async.__GT_t_cljs$core$async72071 = (function cljs$core$async$__GT_t_cljs$core$async72071(f,blockable,meta72072){
return (new cljs.core.async.t_cljs$core$async72071(f,blockable,meta72072));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__72068 = arguments.length;
switch (G__72068) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async72071(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__72103 = arguments.length;
switch (G__72103) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__72120 = arguments.length;
switch (G__72120) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__72129 = arguments.length;
switch (G__72129) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_75283 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_75283) : fn1.call(null,val_75283));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_75283) : fn1.call(null,val_75283));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__72151 = arguments.length;
switch (G__72151) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___75285 = n;
var x_75286 = (0);
while(true){
if((x_75286 < n__5741__auto___75285)){
(a[x_75286] = x_75286);

var G__75287 = (x_75286 + (1));
x_75286 = G__75287;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72164 = (function (flag,meta72165){
this.flag = flag;
this.meta72165 = meta72165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72166,meta72165__$1){
var self__ = this;
var _72166__$1 = this;
return (new cljs.core.async.t_cljs$core$async72164(self__.flag,meta72165__$1));
}));

(cljs.core.async.t_cljs$core$async72164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72166){
var self__ = this;
var _72166__$1 = this;
return self__.meta72165;
}));

(cljs.core.async.t_cljs$core$async72164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async72164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async72164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta72165","meta72165",-1435512686,null)], null);
}));

(cljs.core.async.t_cljs$core$async72164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72164");

(cljs.core.async.t_cljs$core$async72164.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async72164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72164.
 */
cljs.core.async.__GT_t_cljs$core$async72164 = (function cljs$core$async$__GT_t_cljs$core$async72164(flag,meta72165){
return (new cljs.core.async.t_cljs$core$async72164(flag,meta72165));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async72164(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72193 = (function (flag,cb,meta72194){
this.flag = flag;
this.cb = cb;
this.meta72194 = meta72194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72195,meta72194__$1){
var self__ = this;
var _72195__$1 = this;
return (new cljs.core.async.t_cljs$core$async72193(self__.flag,self__.cb,meta72194__$1));
}));

(cljs.core.async.t_cljs$core$async72193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72195){
var self__ = this;
var _72195__$1 = this;
return self__.meta72194;
}));

(cljs.core.async.t_cljs$core$async72193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async72193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async72193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta72194","meta72194",-1256653160,null)], null);
}));

(cljs.core.async.t_cljs$core$async72193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72193");

(cljs.core.async.t_cljs$core$async72193.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async72193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72193.
 */
cljs.core.async.__GT_t_cljs$core$async72193 = (function cljs$core$async$__GT_t_cljs$core$async72193(flag,cb,meta72194){
return (new cljs.core.async.t_cljs$core$async72193(flag,cb,meta72194));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async72193(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_75297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_75297)){
if((!(((port_75297.cljs$core$IFn$_invoke$arity$1 ? port_75297.cljs$core$IFn$_invoke$arity$1((1)) : port_75297.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__75299 = (i + (1));
i = G__75299;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__72217_SHARP_){
var G__72229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72217_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__72229) : fret.call(null,G__72229));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__72218_SHARP_){
var G__72230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72218_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__72230) : fret.call(null,G__72230));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__75308 = (i + (1));
i = G__75308;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___75313 = arguments.length;
var i__5877__auto___75314 = (0);
while(true){
if((i__5877__auto___75314 < len__5876__auto___75313)){
args__5882__auto__.push((arguments[i__5877__auto___75314]));

var G__75317 = (i__5877__auto___75314 + (1));
i__5877__auto___75314 = G__75317;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__72253){
var map__72254 = p__72253;
var map__72254__$1 = cljs.core.__destructure_map(map__72254);
var opts = map__72254__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq72246){
var G__72247 = cljs.core.first(seq72246);
var seq72246__$1 = cljs.core.next(seq72246);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72247,seq72246__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__72271 = arguments.length;
switch (G__72271) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__59922__auto___75360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_72317){
var state_val_72318 = (state_72317[(1)]);
if((state_val_72318 === (7))){
var inst_72313 = (state_72317[(2)]);
var state_72317__$1 = state_72317;
var statearr_72321_75370 = state_72317__$1;
(statearr_72321_75370[(2)] = inst_72313);

(statearr_72321_75370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (1))){
var state_72317__$1 = state_72317;
var statearr_72322_75372 = state_72317__$1;
(statearr_72322_75372[(2)] = null);

(statearr_72322_75372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (4))){
var inst_72286 = (state_72317[(7)]);
var inst_72286__$1 = (state_72317[(2)]);
var inst_72287 = (inst_72286__$1 == null);
var state_72317__$1 = (function (){var statearr_72335 = state_72317;
(statearr_72335[(7)] = inst_72286__$1);

return statearr_72335;
})();
if(cljs.core.truth_(inst_72287)){
var statearr_72336_75376 = state_72317__$1;
(statearr_72336_75376[(1)] = (5));

} else {
var statearr_72337_75377 = state_72317__$1;
(statearr_72337_75377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (13))){
var state_72317__$1 = state_72317;
var statearr_72338_75378 = state_72317__$1;
(statearr_72338_75378[(2)] = null);

(statearr_72338_75378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (6))){
var inst_72286 = (state_72317[(7)]);
var state_72317__$1 = state_72317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72317__$1,(11),to,inst_72286);
} else {
if((state_val_72318 === (3))){
var inst_72315 = (state_72317[(2)]);
var state_72317__$1 = state_72317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72317__$1,inst_72315);
} else {
if((state_val_72318 === (12))){
var state_72317__$1 = state_72317;
var statearr_72340_75379 = state_72317__$1;
(statearr_72340_75379[(2)] = null);

(statearr_72340_75379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (2))){
var state_72317__$1 = state_72317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72317__$1,(4),from);
} else {
if((state_val_72318 === (11))){
var inst_72306 = (state_72317[(2)]);
var state_72317__$1 = state_72317;
if(cljs.core.truth_(inst_72306)){
var statearr_72341_75385 = state_72317__$1;
(statearr_72341_75385[(1)] = (12));

} else {
var statearr_72342_75387 = state_72317__$1;
(statearr_72342_75387[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (9))){
var state_72317__$1 = state_72317;
var statearr_72343_75389 = state_72317__$1;
(statearr_72343_75389[(2)] = null);

(statearr_72343_75389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (5))){
var state_72317__$1 = state_72317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72347_75392 = state_72317__$1;
(statearr_72347_75392[(1)] = (8));

} else {
var statearr_72348_75393 = state_72317__$1;
(statearr_72348_75393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (14))){
var inst_72311 = (state_72317[(2)]);
var state_72317__$1 = state_72317;
var statearr_72349_75395 = state_72317__$1;
(statearr_72349_75395[(2)] = inst_72311);

(statearr_72349_75395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (10))){
var inst_72303 = (state_72317[(2)]);
var state_72317__$1 = state_72317;
var statearr_72352_75396 = state_72317__$1;
(statearr_72352_75396[(2)] = inst_72303);

(statearr_72352_75396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72318 === (8))){
var inst_72300 = cljs.core.async.close_BANG_(to);
var state_72317__$1 = state_72317;
var statearr_72354_75397 = state_72317__$1;
(statearr_72354_75397[(2)] = inst_72300);

(statearr_72354_75397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_72355 = [null,null,null,null,null,null,null,null];
(statearr_72355[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_72355[(1)] = (1));

return statearr_72355;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_72317){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72317);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72356){var ex__59460__auto__ = e72356;
var statearr_72357_75398 = state_72317;
(statearr_72357_75398[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72317[(4)]))){
var statearr_72360_75403 = state_72317;
(statearr_72360_75403[(1)] = cljs.core.first((state_72317[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75404 = state_72317;
state_72317 = G__75404;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_72317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_72317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_72361 = f__59924__auto__();
(statearr_72361[(6)] = c__59922__auto___75360);

return statearr_72361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__72377){
var vec__72378 = p__72377;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72378,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72378,(1),null);
var job = vec__72378;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__59922__auto___75411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_72385){
var state_val_72387 = (state_72385[(1)]);
if((state_val_72387 === (1))){
var state_72385__$1 = state_72385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72385__$1,(2),res,v);
} else {
if((state_val_72387 === (2))){
var inst_72382 = (state_72385[(2)]);
var inst_72383 = cljs.core.async.close_BANG_(res);
var state_72385__$1 = (function (){var statearr_72397 = state_72385;
(statearr_72397[(7)] = inst_72382);

return statearr_72397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72385__$1,inst_72383);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0 = (function (){
var statearr_72399 = [null,null,null,null,null,null,null,null];
(statearr_72399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__);

(statearr_72399[(1)] = (1));

return statearr_72399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1 = (function (state_72385){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72385);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72400){var ex__59460__auto__ = e72400;
var statearr_72401_75414 = state_72385;
(statearr_72401_75414[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72385[(4)]))){
var statearr_72403_75415 = state_72385;
(statearr_72403_75415[(1)] = cljs.core.first((state_72385[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75417 = state_72385;
state_72385 = G__75417;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = function(state_72385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1.call(this,state_72385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_72406 = f__59924__auto__();
(statearr_72406[(6)] = c__59922__auto___75411);

return statearr_72406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__72411){
var vec__72413 = p__72411;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72413,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72413,(1),null);
var job = vec__72413;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___75422 = n;
var __75423 = (0);
while(true){
if((__75423 < n__5741__auto___75422)){
var G__72419_75425 = type;
var G__72419_75426__$1 = (((G__72419_75425 instanceof cljs.core.Keyword))?G__72419_75425.fqn:null);
switch (G__72419_75426__$1) {
case "compute":
var c__59922__auto___75428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75423,c__59922__auto___75428,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async){
return (function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = ((function (__75423,c__59922__auto___75428,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async){
return (function (state_72436){
var state_val_72437 = (state_72436[(1)]);
if((state_val_72437 === (1))){
var state_72436__$1 = state_72436;
var statearr_72441_75431 = state_72436__$1;
(statearr_72441_75431[(2)] = null);

(statearr_72441_75431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72437 === (2))){
var state_72436__$1 = state_72436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72436__$1,(4),jobs);
} else {
if((state_val_72437 === (3))){
var inst_72433 = (state_72436[(2)]);
var state_72436__$1 = state_72436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72436__$1,inst_72433);
} else {
if((state_val_72437 === (4))){
var inst_72424 = (state_72436[(2)]);
var inst_72425 = process__$1(inst_72424);
var state_72436__$1 = state_72436;
if(cljs.core.truth_(inst_72425)){
var statearr_72442_75435 = state_72436__$1;
(statearr_72442_75435[(1)] = (5));

} else {
var statearr_72443_75439 = state_72436__$1;
(statearr_72443_75439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72437 === (5))){
var state_72436__$1 = state_72436;
var statearr_72444_75441 = state_72436__$1;
(statearr_72444_75441[(2)] = null);

(statearr_72444_75441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72437 === (6))){
var state_72436__$1 = state_72436;
var statearr_72449_75442 = state_72436__$1;
(statearr_72449_75442[(2)] = null);

(statearr_72449_75442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72437 === (7))){
var inst_72431 = (state_72436[(2)]);
var state_72436__$1 = state_72436;
var statearr_72454_75444 = state_72436__$1;
(statearr_72454_75444[(2)] = inst_72431);

(statearr_72454_75444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__75423,c__59922__auto___75428,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async))
;
return ((function (__75423,switch__59456__auto__,c__59922__auto___75428,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0 = (function (){
var statearr_72459 = [null,null,null,null,null,null,null];
(statearr_72459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__);

(statearr_72459[(1)] = (1));

return statearr_72459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1 = (function (state_72436){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72436);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72462){var ex__59460__auto__ = e72462;
var statearr_72463_75450 = state_72436;
(statearr_72463_75450[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72436[(4)]))){
var statearr_72465_75451 = state_72436;
(statearr_72465_75451[(1)] = cljs.core.first((state_72436[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75452 = state_72436;
state_72436 = G__75452;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = function(state_72436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1.call(this,state_72436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__;
})()
;})(__75423,switch__59456__auto__,c__59922__auto___75428,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async))
})();
var state__59925__auto__ = (function (){var statearr_72468 = f__59924__auto__();
(statearr_72468[(6)] = c__59922__auto___75428);

return statearr_72468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
});})(__75423,c__59922__auto___75428,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async))
);


break;
case "async":
var c__59922__auto___75453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75423,c__59922__auto___75453,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async){
return (function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = ((function (__75423,c__59922__auto___75453,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async){
return (function (state_72481){
var state_val_72482 = (state_72481[(1)]);
if((state_val_72482 === (1))){
var state_72481__$1 = state_72481;
var statearr_72486_75454 = state_72481__$1;
(statearr_72486_75454[(2)] = null);

(statearr_72486_75454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72482 === (2))){
var state_72481__$1 = state_72481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72481__$1,(4),jobs);
} else {
if((state_val_72482 === (3))){
var inst_72479 = (state_72481[(2)]);
var state_72481__$1 = state_72481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72481__$1,inst_72479);
} else {
if((state_val_72482 === (4))){
var inst_72471 = (state_72481[(2)]);
var inst_72472 = async(inst_72471);
var state_72481__$1 = state_72481;
if(cljs.core.truth_(inst_72472)){
var statearr_72488_75456 = state_72481__$1;
(statearr_72488_75456[(1)] = (5));

} else {
var statearr_72489_75457 = state_72481__$1;
(statearr_72489_75457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72482 === (5))){
var state_72481__$1 = state_72481;
var statearr_72499_75459 = state_72481__$1;
(statearr_72499_75459[(2)] = null);

(statearr_72499_75459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72482 === (6))){
var state_72481__$1 = state_72481;
var statearr_72500_75462 = state_72481__$1;
(statearr_72500_75462[(2)] = null);

(statearr_72500_75462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72482 === (7))){
var inst_72477 = (state_72481[(2)]);
var state_72481__$1 = state_72481;
var statearr_72501_75463 = state_72481__$1;
(statearr_72501_75463[(2)] = inst_72477);

(statearr_72501_75463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__75423,c__59922__auto___75453,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async))
;
return ((function (__75423,switch__59456__auto__,c__59922__auto___75453,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0 = (function (){
var statearr_72506 = [null,null,null,null,null,null,null];
(statearr_72506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__);

(statearr_72506[(1)] = (1));

return statearr_72506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1 = (function (state_72481){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72481);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72509){var ex__59460__auto__ = e72509;
var statearr_72510_75468 = state_72481;
(statearr_72510_75468[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72481[(4)]))){
var statearr_72512_75469 = state_72481;
(statearr_72512_75469[(1)] = cljs.core.first((state_72481[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75470 = state_72481;
state_72481 = G__75470;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = function(state_72481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1.call(this,state_72481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__;
})()
;})(__75423,switch__59456__auto__,c__59922__auto___75453,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async))
})();
var state__59925__auto__ = (function (){var statearr_72516 = f__59924__auto__();
(statearr_72516[(6)] = c__59922__auto___75453);

return statearr_72516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
});})(__75423,c__59922__auto___75453,G__72419_75425,G__72419_75426__$1,n__5741__auto___75422,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72419_75426__$1))));

}

var G__75475 = (__75423 + (1));
__75423 = G__75475;
continue;
} else {
}
break;
}

var c__59922__auto___75476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_72543){
var state_val_72544 = (state_72543[(1)]);
if((state_val_72544 === (7))){
var inst_72539 = (state_72543[(2)]);
var state_72543__$1 = state_72543;
var statearr_72551_75477 = state_72543__$1;
(statearr_72551_75477[(2)] = inst_72539);

(statearr_72551_75477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72544 === (1))){
var state_72543__$1 = state_72543;
var statearr_72553_75478 = state_72543__$1;
(statearr_72553_75478[(2)] = null);

(statearr_72553_75478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72544 === (4))){
var inst_72523 = (state_72543[(7)]);
var inst_72523__$1 = (state_72543[(2)]);
var inst_72524 = (inst_72523__$1 == null);
var state_72543__$1 = (function (){var statearr_72554 = state_72543;
(statearr_72554[(7)] = inst_72523__$1);

return statearr_72554;
})();
if(cljs.core.truth_(inst_72524)){
var statearr_72555_75480 = state_72543__$1;
(statearr_72555_75480[(1)] = (5));

} else {
var statearr_72556_75481 = state_72543__$1;
(statearr_72556_75481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72544 === (6))){
var inst_72523 = (state_72543[(7)]);
var inst_72528 = (state_72543[(8)]);
var inst_72528__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_72530 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72531 = [inst_72523,inst_72528__$1];
var inst_72532 = (new cljs.core.PersistentVector(null,2,(5),inst_72530,inst_72531,null));
var state_72543__$1 = (function (){var statearr_72561 = state_72543;
(statearr_72561[(8)] = inst_72528__$1);

return statearr_72561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72543__$1,(8),jobs,inst_72532);
} else {
if((state_val_72544 === (3))){
var inst_72541 = (state_72543[(2)]);
var state_72543__$1 = state_72543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72543__$1,inst_72541);
} else {
if((state_val_72544 === (2))){
var state_72543__$1 = state_72543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72543__$1,(4),from);
} else {
if((state_val_72544 === (9))){
var inst_72536 = (state_72543[(2)]);
var state_72543__$1 = (function (){var statearr_72565 = state_72543;
(statearr_72565[(9)] = inst_72536);

return statearr_72565;
})();
var statearr_72567_75490 = state_72543__$1;
(statearr_72567_75490[(2)] = null);

(statearr_72567_75490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72544 === (5))){
var inst_72526 = cljs.core.async.close_BANG_(jobs);
var state_72543__$1 = state_72543;
var statearr_72575_75492 = state_72543__$1;
(statearr_72575_75492[(2)] = inst_72526);

(statearr_72575_75492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72544 === (8))){
var inst_72528 = (state_72543[(8)]);
var inst_72534 = (state_72543[(2)]);
var state_72543__$1 = (function (){var statearr_72577 = state_72543;
(statearr_72577[(10)] = inst_72534);

return statearr_72577;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72543__$1,(9),results,inst_72528);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0 = (function (){
var statearr_72578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__);

(statearr_72578[(1)] = (1));

return statearr_72578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1 = (function (state_72543){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72543);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72579){var ex__59460__auto__ = e72579;
var statearr_72581_75494 = state_72543;
(statearr_72581_75494[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72543[(4)]))){
var statearr_72583_75498 = state_72543;
(statearr_72583_75498[(1)] = cljs.core.first((state_72543[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75505 = state_72543;
state_72543 = G__75505;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = function(state_72543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1.call(this,state_72543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_72586 = f__59924__auto__();
(statearr_72586[(6)] = c__59922__auto___75476);

return statearr_72586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


var c__59922__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_72629){
var state_val_72630 = (state_72629[(1)]);
if((state_val_72630 === (7))){
var inst_72623 = (state_72629[(2)]);
var state_72629__$1 = state_72629;
var statearr_72636_75510 = state_72629__$1;
(statearr_72636_75510[(2)] = inst_72623);

(statearr_72636_75510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (20))){
var state_72629__$1 = state_72629;
var statearr_72637_75513 = state_72629__$1;
(statearr_72637_75513[(2)] = null);

(statearr_72637_75513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (1))){
var state_72629__$1 = state_72629;
var statearr_72639_75514 = state_72629__$1;
(statearr_72639_75514[(2)] = null);

(statearr_72639_75514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (4))){
var inst_72589 = (state_72629[(7)]);
var inst_72589__$1 = (state_72629[(2)]);
var inst_72593 = (inst_72589__$1 == null);
var state_72629__$1 = (function (){var statearr_72641 = state_72629;
(statearr_72641[(7)] = inst_72589__$1);

return statearr_72641;
})();
if(cljs.core.truth_(inst_72593)){
var statearr_72646_75518 = state_72629__$1;
(statearr_72646_75518[(1)] = (5));

} else {
var statearr_72647_75520 = state_72629__$1;
(statearr_72647_75520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (15))){
var inst_72605 = (state_72629[(8)]);
var state_72629__$1 = state_72629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72629__$1,(18),to,inst_72605);
} else {
if((state_val_72630 === (21))){
var inst_72618 = (state_72629[(2)]);
var state_72629__$1 = state_72629;
var statearr_72648_75521 = state_72629__$1;
(statearr_72648_75521[(2)] = inst_72618);

(statearr_72648_75521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (13))){
var inst_72620 = (state_72629[(2)]);
var state_72629__$1 = (function (){var statearr_72649 = state_72629;
(statearr_72649[(9)] = inst_72620);

return statearr_72649;
})();
var statearr_72650_75522 = state_72629__$1;
(statearr_72650_75522[(2)] = null);

(statearr_72650_75522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (6))){
var inst_72589 = (state_72629[(7)]);
var state_72629__$1 = state_72629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72629__$1,(11),inst_72589);
} else {
if((state_val_72630 === (17))){
var inst_72613 = (state_72629[(2)]);
var state_72629__$1 = state_72629;
if(cljs.core.truth_(inst_72613)){
var statearr_72652_75527 = state_72629__$1;
(statearr_72652_75527[(1)] = (19));

} else {
var statearr_72653_75528 = state_72629__$1;
(statearr_72653_75528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (3))){
var inst_72626 = (state_72629[(2)]);
var state_72629__$1 = state_72629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72629__$1,inst_72626);
} else {
if((state_val_72630 === (12))){
var inst_72602 = (state_72629[(10)]);
var state_72629__$1 = state_72629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72629__$1,(14),inst_72602);
} else {
if((state_val_72630 === (2))){
var state_72629__$1 = state_72629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72629__$1,(4),results);
} else {
if((state_val_72630 === (19))){
var state_72629__$1 = state_72629;
var statearr_72656_75532 = state_72629__$1;
(statearr_72656_75532[(2)] = null);

(statearr_72656_75532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (11))){
var inst_72602 = (state_72629[(2)]);
var state_72629__$1 = (function (){var statearr_72657 = state_72629;
(statearr_72657[(10)] = inst_72602);

return statearr_72657;
})();
var statearr_72658_75536 = state_72629__$1;
(statearr_72658_75536[(2)] = null);

(statearr_72658_75536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (9))){
var state_72629__$1 = state_72629;
var statearr_72659_75538 = state_72629__$1;
(statearr_72659_75538[(2)] = null);

(statearr_72659_75538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (5))){
var state_72629__$1 = state_72629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72660_75540 = state_72629__$1;
(statearr_72660_75540[(1)] = (8));

} else {
var statearr_72661_75541 = state_72629__$1;
(statearr_72661_75541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (14))){
var inst_72605 = (state_72629[(8)]);
var inst_72607 = (state_72629[(11)]);
var inst_72605__$1 = (state_72629[(2)]);
var inst_72606 = (inst_72605__$1 == null);
var inst_72607__$1 = cljs.core.not(inst_72606);
var state_72629__$1 = (function (){var statearr_72663 = state_72629;
(statearr_72663[(8)] = inst_72605__$1);

(statearr_72663[(11)] = inst_72607__$1);

return statearr_72663;
})();
if(inst_72607__$1){
var statearr_72664_75545 = state_72629__$1;
(statearr_72664_75545[(1)] = (15));

} else {
var statearr_72665_75546 = state_72629__$1;
(statearr_72665_75546[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (16))){
var inst_72607 = (state_72629[(11)]);
var state_72629__$1 = state_72629;
var statearr_72670_75548 = state_72629__$1;
(statearr_72670_75548[(2)] = inst_72607);

(statearr_72670_75548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (10))){
var inst_72599 = (state_72629[(2)]);
var state_72629__$1 = state_72629;
var statearr_72671_75551 = state_72629__$1;
(statearr_72671_75551[(2)] = inst_72599);

(statearr_72671_75551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (18))){
var inst_72610 = (state_72629[(2)]);
var state_72629__$1 = state_72629;
var statearr_72674_75553 = state_72629__$1;
(statearr_72674_75553[(2)] = inst_72610);

(statearr_72674_75553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72630 === (8))){
var inst_72596 = cljs.core.async.close_BANG_(to);
var state_72629__$1 = state_72629;
var statearr_72675_75555 = state_72629__$1;
(statearr_72675_75555[(2)] = inst_72596);

(statearr_72675_75555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0 = (function (){
var statearr_72676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__);

(statearr_72676[(1)] = (1));

return statearr_72676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1 = (function (state_72629){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72629);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72677){var ex__59460__auto__ = e72677;
var statearr_72678_75557 = state_72629;
(statearr_72678_75557[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72629[(4)]))){
var statearr_72679_75558 = state_72629;
(statearr_72679_75558[(1)] = cljs.core.first((state_72629[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75559 = state_72629;
state_72629 = G__75559;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__ = function(state_72629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1.call(this,state_72629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_72680 = f__59924__auto__();
(statearr_72680[(6)] = c__59922__auto__);

return statearr_72680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));

return c__59922__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__72683 = arguments.length;
switch (G__72683) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__72688 = arguments.length;
switch (G__72688) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__72702 = arguments.length;
switch (G__72702) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__59922__auto___75582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_72737){
var state_val_72738 = (state_72737[(1)]);
if((state_val_72738 === (7))){
var inst_72733 = (state_72737[(2)]);
var state_72737__$1 = state_72737;
var statearr_72744_75583 = state_72737__$1;
(statearr_72744_75583[(2)] = inst_72733);

(statearr_72744_75583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (1))){
var state_72737__$1 = state_72737;
var statearr_72745_75584 = state_72737__$1;
(statearr_72745_75584[(2)] = null);

(statearr_72745_75584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (4))){
var inst_72706 = (state_72737[(7)]);
var inst_72706__$1 = (state_72737[(2)]);
var inst_72711 = (inst_72706__$1 == null);
var state_72737__$1 = (function (){var statearr_72746 = state_72737;
(statearr_72746[(7)] = inst_72706__$1);

return statearr_72746;
})();
if(cljs.core.truth_(inst_72711)){
var statearr_72747_75585 = state_72737__$1;
(statearr_72747_75585[(1)] = (5));

} else {
var statearr_72748_75586 = state_72737__$1;
(statearr_72748_75586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (13))){
var state_72737__$1 = state_72737;
var statearr_72749_75587 = state_72737__$1;
(statearr_72749_75587[(2)] = null);

(statearr_72749_75587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (6))){
var inst_72706 = (state_72737[(7)]);
var inst_72716 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_72706) : p.call(null,inst_72706));
var state_72737__$1 = state_72737;
if(cljs.core.truth_(inst_72716)){
var statearr_72752_75589 = state_72737__$1;
(statearr_72752_75589[(1)] = (9));

} else {
var statearr_72753_75590 = state_72737__$1;
(statearr_72753_75590[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (3))){
var inst_72735 = (state_72737[(2)]);
var state_72737__$1 = state_72737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72737__$1,inst_72735);
} else {
if((state_val_72738 === (12))){
var state_72737__$1 = state_72737;
var statearr_72754_75591 = state_72737__$1;
(statearr_72754_75591[(2)] = null);

(statearr_72754_75591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (2))){
var state_72737__$1 = state_72737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72737__$1,(4),ch);
} else {
if((state_val_72738 === (11))){
var inst_72706 = (state_72737[(7)]);
var inst_72724 = (state_72737[(2)]);
var state_72737__$1 = state_72737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72737__$1,(8),inst_72724,inst_72706);
} else {
if((state_val_72738 === (9))){
var state_72737__$1 = state_72737;
var statearr_72755_75597 = state_72737__$1;
(statearr_72755_75597[(2)] = tc);

(statearr_72755_75597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (5))){
var inst_72713 = cljs.core.async.close_BANG_(tc);
var inst_72714 = cljs.core.async.close_BANG_(fc);
var state_72737__$1 = (function (){var statearr_72757 = state_72737;
(statearr_72757[(8)] = inst_72713);

return statearr_72757;
})();
var statearr_72758_75599 = state_72737__$1;
(statearr_72758_75599[(2)] = inst_72714);

(statearr_72758_75599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (14))){
var inst_72731 = (state_72737[(2)]);
var state_72737__$1 = state_72737;
var statearr_72759_75600 = state_72737__$1;
(statearr_72759_75600[(2)] = inst_72731);

(statearr_72759_75600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (10))){
var state_72737__$1 = state_72737;
var statearr_72760_75601 = state_72737__$1;
(statearr_72760_75601[(2)] = fc);

(statearr_72760_75601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72738 === (8))){
var inst_72726 = (state_72737[(2)]);
var state_72737__$1 = state_72737;
if(cljs.core.truth_(inst_72726)){
var statearr_72770_75602 = state_72737__$1;
(statearr_72770_75602[(1)] = (12));

} else {
var statearr_72771_75603 = state_72737__$1;
(statearr_72771_75603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_72774 = [null,null,null,null,null,null,null,null,null];
(statearr_72774[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_72774[(1)] = (1));

return statearr_72774;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_72737){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72737);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72779){var ex__59460__auto__ = e72779;
var statearr_72780_75605 = state_72737;
(statearr_72780_75605[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72737[(4)]))){
var statearr_72781_75606 = state_72737;
(statearr_72781_75606[(1)] = cljs.core.first((state_72737[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75607 = state_72737;
state_72737 = G__75607;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_72737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_72737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_72783 = f__59924__auto__();
(statearr_72783[(6)] = c__59922__auto___75582);

return statearr_72783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__59922__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_72806){
var state_val_72807 = (state_72806[(1)]);
if((state_val_72807 === (7))){
var inst_72802 = (state_72806[(2)]);
var state_72806__$1 = state_72806;
var statearr_72814_75613 = state_72806__$1;
(statearr_72814_75613[(2)] = inst_72802);

(statearr_72814_75613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72807 === (1))){
var inst_72785 = init;
var inst_72786 = inst_72785;
var state_72806__$1 = (function (){var statearr_72815 = state_72806;
(statearr_72815[(7)] = inst_72786);

return statearr_72815;
})();
var statearr_72816_75615 = state_72806__$1;
(statearr_72816_75615[(2)] = null);

(statearr_72816_75615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72807 === (4))){
var inst_72789 = (state_72806[(8)]);
var inst_72789__$1 = (state_72806[(2)]);
var inst_72790 = (inst_72789__$1 == null);
var state_72806__$1 = (function (){var statearr_72819 = state_72806;
(statearr_72819[(8)] = inst_72789__$1);

return statearr_72819;
})();
if(cljs.core.truth_(inst_72790)){
var statearr_72821_75616 = state_72806__$1;
(statearr_72821_75616[(1)] = (5));

} else {
var statearr_72824_75617 = state_72806__$1;
(statearr_72824_75617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72807 === (6))){
var inst_72786 = (state_72806[(7)]);
var inst_72789 = (state_72806[(8)]);
var inst_72793 = (state_72806[(9)]);
var inst_72793__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_72786,inst_72789) : f.call(null,inst_72786,inst_72789));
var inst_72794 = cljs.core.reduced_QMARK_(inst_72793__$1);
var state_72806__$1 = (function (){var statearr_72826 = state_72806;
(statearr_72826[(9)] = inst_72793__$1);

return statearr_72826;
})();
if(inst_72794){
var statearr_72827_75622 = state_72806__$1;
(statearr_72827_75622[(1)] = (8));

} else {
var statearr_72828_75623 = state_72806__$1;
(statearr_72828_75623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72807 === (3))){
var inst_72804 = (state_72806[(2)]);
var state_72806__$1 = state_72806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72806__$1,inst_72804);
} else {
if((state_val_72807 === (2))){
var state_72806__$1 = state_72806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72806__$1,(4),ch);
} else {
if((state_val_72807 === (9))){
var inst_72793 = (state_72806[(9)]);
var inst_72786 = inst_72793;
var state_72806__$1 = (function (){var statearr_72832 = state_72806;
(statearr_72832[(7)] = inst_72786);

return statearr_72832;
})();
var statearr_72833_75625 = state_72806__$1;
(statearr_72833_75625[(2)] = null);

(statearr_72833_75625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72807 === (5))){
var inst_72786 = (state_72806[(7)]);
var state_72806__$1 = state_72806;
var statearr_72834_75626 = state_72806__$1;
(statearr_72834_75626[(2)] = inst_72786);

(statearr_72834_75626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72807 === (10))){
var inst_72800 = (state_72806[(2)]);
var state_72806__$1 = state_72806;
var statearr_72838_75627 = state_72806__$1;
(statearr_72838_75627[(2)] = inst_72800);

(statearr_72838_75627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72807 === (8))){
var inst_72793 = (state_72806[(9)]);
var inst_72796 = cljs.core.deref(inst_72793);
var state_72806__$1 = state_72806;
var statearr_72839_75628 = state_72806__$1;
(statearr_72839_75628[(2)] = inst_72796);

(statearr_72839_75628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__59457__auto__ = null;
var cljs$core$async$reduce_$_state_machine__59457__auto____0 = (function (){
var statearr_72851 = [null,null,null,null,null,null,null,null,null,null];
(statearr_72851[(0)] = cljs$core$async$reduce_$_state_machine__59457__auto__);

(statearr_72851[(1)] = (1));

return statearr_72851;
});
var cljs$core$async$reduce_$_state_machine__59457__auto____1 = (function (state_72806){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72806);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72853){var ex__59460__auto__ = e72853;
var statearr_72854_75632 = state_72806;
(statearr_72854_75632[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72806[(4)]))){
var statearr_72861_75633 = state_72806;
(statearr_72861_75633[(1)] = cljs.core.first((state_72806[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75634 = state_72806;
state_72806 = G__75634;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__59457__auto__ = function(state_72806){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__59457__auto____1.call(this,state_72806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__59457__auto____0;
cljs$core$async$reduce_$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__59457__auto____1;
return cljs$core$async$reduce_$_state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_72866 = f__59924__auto__();
(statearr_72866[(6)] = c__59922__auto__);

return statearr_72866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));

return c__59922__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__59922__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_72877){
var state_val_72878 = (state_72877[(1)]);
if((state_val_72878 === (1))){
var inst_72872 = cljs.core.async.reduce(f__$1,init,ch);
var state_72877__$1 = state_72877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72877__$1,(2),inst_72872);
} else {
if((state_val_72878 === (2))){
var inst_72874 = (state_72877[(2)]);
var inst_72875 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_72874) : f__$1.call(null,inst_72874));
var state_72877__$1 = state_72877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72877__$1,inst_72875);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__59457__auto__ = null;
var cljs$core$async$transduce_$_state_machine__59457__auto____0 = (function (){
var statearr_72886 = [null,null,null,null,null,null,null];
(statearr_72886[(0)] = cljs$core$async$transduce_$_state_machine__59457__auto__);

(statearr_72886[(1)] = (1));

return statearr_72886;
});
var cljs$core$async$transduce_$_state_machine__59457__auto____1 = (function (state_72877){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72877);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72891){var ex__59460__auto__ = e72891;
var statearr_72892_75639 = state_72877;
(statearr_72892_75639[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72877[(4)]))){
var statearr_72894_75640 = state_72877;
(statearr_72894_75640[(1)] = cljs.core.first((state_72877[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75641 = state_72877;
state_72877 = G__75641;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__59457__auto__ = function(state_72877){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__59457__auto____1.call(this,state_72877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__59457__auto____0;
cljs$core$async$transduce_$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__59457__auto____1;
return cljs$core$async$transduce_$_state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_72899 = f__59924__auto__();
(statearr_72899[(6)] = c__59922__auto__);

return statearr_72899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));

return c__59922__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__72903 = arguments.length;
switch (G__72903) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__59922__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_72946){
var state_val_72948 = (state_72946[(1)]);
if((state_val_72948 === (7))){
var inst_72927 = (state_72946[(2)]);
var state_72946__$1 = state_72946;
var statearr_72949_75643 = state_72946__$1;
(statearr_72949_75643[(2)] = inst_72927);

(statearr_72949_75643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (1))){
var inst_72919 = cljs.core.seq(coll);
var inst_72920 = inst_72919;
var state_72946__$1 = (function (){var statearr_72953 = state_72946;
(statearr_72953[(7)] = inst_72920);

return statearr_72953;
})();
var statearr_72954_75644 = state_72946__$1;
(statearr_72954_75644[(2)] = null);

(statearr_72954_75644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (4))){
var inst_72920 = (state_72946[(7)]);
var inst_72925 = cljs.core.first(inst_72920);
var state_72946__$1 = state_72946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72946__$1,(7),ch,inst_72925);
} else {
if((state_val_72948 === (13))){
var inst_72940 = (state_72946[(2)]);
var state_72946__$1 = state_72946;
var statearr_72959_75645 = state_72946__$1;
(statearr_72959_75645[(2)] = inst_72940);

(statearr_72959_75645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (6))){
var inst_72931 = (state_72946[(2)]);
var state_72946__$1 = state_72946;
if(cljs.core.truth_(inst_72931)){
var statearr_72960_75646 = state_72946__$1;
(statearr_72960_75646[(1)] = (8));

} else {
var statearr_72961_75647 = state_72946__$1;
(statearr_72961_75647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (3))){
var inst_72944 = (state_72946[(2)]);
var state_72946__$1 = state_72946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72946__$1,inst_72944);
} else {
if((state_val_72948 === (12))){
var state_72946__$1 = state_72946;
var statearr_72967_75648 = state_72946__$1;
(statearr_72967_75648[(2)] = null);

(statearr_72967_75648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (2))){
var inst_72920 = (state_72946[(7)]);
var state_72946__$1 = state_72946;
if(cljs.core.truth_(inst_72920)){
var statearr_72969_75649 = state_72946__$1;
(statearr_72969_75649[(1)] = (4));

} else {
var statearr_72970_75650 = state_72946__$1;
(statearr_72970_75650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (11))){
var inst_72937 = cljs.core.async.close_BANG_(ch);
var state_72946__$1 = state_72946;
var statearr_72971_75651 = state_72946__$1;
(statearr_72971_75651[(2)] = inst_72937);

(statearr_72971_75651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (9))){
var state_72946__$1 = state_72946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72972_75652 = state_72946__$1;
(statearr_72972_75652[(1)] = (11));

} else {
var statearr_72973_75653 = state_72946__$1;
(statearr_72973_75653[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (5))){
var inst_72920 = (state_72946[(7)]);
var state_72946__$1 = state_72946;
var statearr_72974_75654 = state_72946__$1;
(statearr_72974_75654[(2)] = inst_72920);

(statearr_72974_75654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (10))){
var inst_72942 = (state_72946[(2)]);
var state_72946__$1 = state_72946;
var statearr_72975_75655 = state_72946__$1;
(statearr_72975_75655[(2)] = inst_72942);

(statearr_72975_75655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72948 === (8))){
var inst_72920 = (state_72946[(7)]);
var inst_72933 = cljs.core.next(inst_72920);
var inst_72920__$1 = inst_72933;
var state_72946__$1 = (function (){var statearr_72976 = state_72946;
(statearr_72976[(7)] = inst_72920__$1);

return statearr_72976;
})();
var statearr_72977_75656 = state_72946__$1;
(statearr_72977_75656[(2)] = null);

(statearr_72977_75656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_72983 = [null,null,null,null,null,null,null,null];
(statearr_72983[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_72983[(1)] = (1));

return statearr_72983;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_72946){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_72946);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e72984){var ex__59460__auto__ = e72984;
var statearr_72985_75659 = state_72946;
(statearr_72985_75659[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_72946[(4)]))){
var statearr_72987_75660 = state_72946;
(statearr_72987_75660[(1)] = cljs.core.first((state_72946[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75661 = state_72946;
state_72946 = G__75661;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_72946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_72946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_72992 = f__59924__auto__();
(statearr_72992[(6)] = c__59922__auto__);

return statearr_72992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));

return c__59922__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__73004 = arguments.length;
switch (G__73004) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_75664 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_75664(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_75668 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_75668(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_75672 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_75672(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_75673 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_75673(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73052 = (function (ch,cs,meta73053){
this.ch = ch;
this.cs = cs;
this.meta73053 = meta73053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73054,meta73053__$1){
var self__ = this;
var _73054__$1 = this;
return (new cljs.core.async.t_cljs$core$async73052(self__.ch,self__.cs,meta73053__$1));
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73054){
var self__ = this;
var _73054__$1 = this;
return self__.meta73053;
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async73052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta73053","meta73053",1949837933,null)], null);
}));

(cljs.core.async.t_cljs$core$async73052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73052");

(cljs.core.async.t_cljs$core$async73052.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async73052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73052.
 */
cljs.core.async.__GT_t_cljs$core$async73052 = (function cljs$core$async$__GT_t_cljs$core$async73052(ch,cs,meta73053){
return (new cljs.core.async.t_cljs$core$async73052(ch,cs,meta73053));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async73052(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__59922__auto___75680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_73210){
var state_val_73211 = (state_73210[(1)]);
if((state_val_73211 === (7))){
var inst_73201 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73217_75683 = state_73210__$1;
(statearr_73217_75683[(2)] = inst_73201);

(statearr_73217_75683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (20))){
var inst_73092 = (state_73210[(7)]);
var inst_73109 = cljs.core.first(inst_73092);
var inst_73110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73109,(0),null);
var inst_73111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73109,(1),null);
var state_73210__$1 = (function (){var statearr_73221 = state_73210;
(statearr_73221[(8)] = inst_73110);

return statearr_73221;
})();
if(cljs.core.truth_(inst_73111)){
var statearr_73222_75684 = state_73210__$1;
(statearr_73222_75684[(1)] = (22));

} else {
var statearr_73223_75686 = state_73210__$1;
(statearr_73223_75686[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (27))){
var inst_73141 = (state_73210[(9)]);
var inst_73143 = (state_73210[(10)]);
var inst_73148 = (state_73210[(11)]);
var inst_73061 = (state_73210[(12)]);
var inst_73148__$1 = cljs.core._nth(inst_73141,inst_73143);
var inst_73149 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_73148__$1,inst_73061,done);
var state_73210__$1 = (function (){var statearr_73227 = state_73210;
(statearr_73227[(11)] = inst_73148__$1);

return statearr_73227;
})();
if(cljs.core.truth_(inst_73149)){
var statearr_73228_75694 = state_73210__$1;
(statearr_73228_75694[(1)] = (30));

} else {
var statearr_73229_75695 = state_73210__$1;
(statearr_73229_75695[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (1))){
var state_73210__$1 = state_73210;
var statearr_73234_75700 = state_73210__$1;
(statearr_73234_75700[(2)] = null);

(statearr_73234_75700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (24))){
var inst_73092 = (state_73210[(7)]);
var inst_73117 = (state_73210[(2)]);
var inst_73118 = cljs.core.next(inst_73092);
var inst_73070 = inst_73118;
var inst_73071 = null;
var inst_73072 = (0);
var inst_73073 = (0);
var state_73210__$1 = (function (){var statearr_73240 = state_73210;
(statearr_73240[(13)] = inst_73117);

(statearr_73240[(14)] = inst_73070);

(statearr_73240[(15)] = inst_73071);

(statearr_73240[(16)] = inst_73072);

(statearr_73240[(17)] = inst_73073);

return statearr_73240;
})();
var statearr_73241_75710 = state_73210__$1;
(statearr_73241_75710[(2)] = null);

(statearr_73241_75710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (39))){
var state_73210__$1 = state_73210;
var statearr_73245_75712 = state_73210__$1;
(statearr_73245_75712[(2)] = null);

(statearr_73245_75712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (4))){
var inst_73061 = (state_73210[(12)]);
var inst_73061__$1 = (state_73210[(2)]);
var inst_73062 = (inst_73061__$1 == null);
var state_73210__$1 = (function (){var statearr_73246 = state_73210;
(statearr_73246[(12)] = inst_73061__$1);

return statearr_73246;
})();
if(cljs.core.truth_(inst_73062)){
var statearr_73247_75718 = state_73210__$1;
(statearr_73247_75718[(1)] = (5));

} else {
var statearr_73249_75719 = state_73210__$1;
(statearr_73249_75719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (15))){
var inst_73073 = (state_73210[(17)]);
var inst_73070 = (state_73210[(14)]);
var inst_73071 = (state_73210[(15)]);
var inst_73072 = (state_73210[(16)]);
var inst_73088 = (state_73210[(2)]);
var inst_73089 = (inst_73073 + (1));
var tmp73242 = inst_73070;
var tmp73243 = inst_73072;
var tmp73244 = inst_73071;
var inst_73070__$1 = tmp73242;
var inst_73071__$1 = tmp73244;
var inst_73072__$1 = tmp73243;
var inst_73073__$1 = inst_73089;
var state_73210__$1 = (function (){var statearr_73250 = state_73210;
(statearr_73250[(18)] = inst_73088);

(statearr_73250[(14)] = inst_73070__$1);

(statearr_73250[(15)] = inst_73071__$1);

(statearr_73250[(16)] = inst_73072__$1);

(statearr_73250[(17)] = inst_73073__$1);

return statearr_73250;
})();
var statearr_73251_75724 = state_73210__$1;
(statearr_73251_75724[(2)] = null);

(statearr_73251_75724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (21))){
var inst_73121 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73255_75725 = state_73210__$1;
(statearr_73255_75725[(2)] = inst_73121);

(statearr_73255_75725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (31))){
var inst_73148 = (state_73210[(11)]);
var inst_73152 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_73148);
var state_73210__$1 = state_73210;
var statearr_73256_75726 = state_73210__$1;
(statearr_73256_75726[(2)] = inst_73152);

(statearr_73256_75726[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (32))){
var inst_73143 = (state_73210[(10)]);
var inst_73140 = (state_73210[(19)]);
var inst_73141 = (state_73210[(9)]);
var inst_73142 = (state_73210[(20)]);
var inst_73154 = (state_73210[(2)]);
var inst_73155 = (inst_73143 + (1));
var tmp73252 = inst_73140;
var tmp73253 = inst_73141;
var tmp73254 = inst_73142;
var inst_73140__$1 = tmp73252;
var inst_73141__$1 = tmp73253;
var inst_73142__$1 = tmp73254;
var inst_73143__$1 = inst_73155;
var state_73210__$1 = (function (){var statearr_73257 = state_73210;
(statearr_73257[(21)] = inst_73154);

(statearr_73257[(19)] = inst_73140__$1);

(statearr_73257[(9)] = inst_73141__$1);

(statearr_73257[(20)] = inst_73142__$1);

(statearr_73257[(10)] = inst_73143__$1);

return statearr_73257;
})();
var statearr_73258_75730 = state_73210__$1;
(statearr_73258_75730[(2)] = null);

(statearr_73258_75730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (40))){
var inst_73171 = (state_73210[(22)]);
var inst_73175 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_73171);
var state_73210__$1 = state_73210;
var statearr_73262_75731 = state_73210__$1;
(statearr_73262_75731[(2)] = inst_73175);

(statearr_73262_75731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (33))){
var inst_73158 = (state_73210[(23)]);
var inst_73160 = cljs.core.chunked_seq_QMARK_(inst_73158);
var state_73210__$1 = state_73210;
if(inst_73160){
var statearr_73264_75735 = state_73210__$1;
(statearr_73264_75735[(1)] = (36));

} else {
var statearr_73265_75736 = state_73210__$1;
(statearr_73265_75736[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (13))){
var inst_73082 = (state_73210[(24)]);
var inst_73085 = cljs.core.async.close_BANG_(inst_73082);
var state_73210__$1 = state_73210;
var statearr_73268_75737 = state_73210__$1;
(statearr_73268_75737[(2)] = inst_73085);

(statearr_73268_75737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (22))){
var inst_73110 = (state_73210[(8)]);
var inst_73114 = cljs.core.async.close_BANG_(inst_73110);
var state_73210__$1 = state_73210;
var statearr_73269_75742 = state_73210__$1;
(statearr_73269_75742[(2)] = inst_73114);

(statearr_73269_75742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (36))){
var inst_73158 = (state_73210[(23)]);
var inst_73162 = cljs.core.chunk_first(inst_73158);
var inst_73163 = cljs.core.chunk_rest(inst_73158);
var inst_73164 = cljs.core.count(inst_73162);
var inst_73140 = inst_73163;
var inst_73141 = inst_73162;
var inst_73142 = inst_73164;
var inst_73143 = (0);
var state_73210__$1 = (function (){var statearr_73270 = state_73210;
(statearr_73270[(19)] = inst_73140);

(statearr_73270[(9)] = inst_73141);

(statearr_73270[(20)] = inst_73142);

(statearr_73270[(10)] = inst_73143);

return statearr_73270;
})();
var statearr_73271_75743 = state_73210__$1;
(statearr_73271_75743[(2)] = null);

(statearr_73271_75743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (41))){
var inst_73158 = (state_73210[(23)]);
var inst_73180 = (state_73210[(2)]);
var inst_73181 = cljs.core.next(inst_73158);
var inst_73140 = inst_73181;
var inst_73141 = null;
var inst_73142 = (0);
var inst_73143 = (0);
var state_73210__$1 = (function (){var statearr_73274 = state_73210;
(statearr_73274[(25)] = inst_73180);

(statearr_73274[(19)] = inst_73140);

(statearr_73274[(9)] = inst_73141);

(statearr_73274[(20)] = inst_73142);

(statearr_73274[(10)] = inst_73143);

return statearr_73274;
})();
var statearr_73275_75747 = state_73210__$1;
(statearr_73275_75747[(2)] = null);

(statearr_73275_75747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (43))){
var state_73210__$1 = state_73210;
var statearr_73277_75748 = state_73210__$1;
(statearr_73277_75748[(2)] = null);

(statearr_73277_75748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (29))){
var inst_73189 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73280_75749 = state_73210__$1;
(statearr_73280_75749[(2)] = inst_73189);

(statearr_73280_75749[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (44))){
var inst_73198 = (state_73210[(2)]);
var state_73210__$1 = (function (){var statearr_73282 = state_73210;
(statearr_73282[(26)] = inst_73198);

return statearr_73282;
})();
var statearr_73283_75753 = state_73210__$1;
(statearr_73283_75753[(2)] = null);

(statearr_73283_75753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (6))){
var inst_73132 = (state_73210[(27)]);
var inst_73131 = cljs.core.deref(cs);
var inst_73132__$1 = cljs.core.keys(inst_73131);
var inst_73133 = cljs.core.count(inst_73132__$1);
var inst_73134 = cljs.core.reset_BANG_(dctr,inst_73133);
var inst_73139 = cljs.core.seq(inst_73132__$1);
var inst_73140 = inst_73139;
var inst_73141 = null;
var inst_73142 = (0);
var inst_73143 = (0);
var state_73210__$1 = (function (){var statearr_73285 = state_73210;
(statearr_73285[(27)] = inst_73132__$1);

(statearr_73285[(28)] = inst_73134);

(statearr_73285[(19)] = inst_73140);

(statearr_73285[(9)] = inst_73141);

(statearr_73285[(20)] = inst_73142);

(statearr_73285[(10)] = inst_73143);

return statearr_73285;
})();
var statearr_73286_75754 = state_73210__$1;
(statearr_73286_75754[(2)] = null);

(statearr_73286_75754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (28))){
var inst_73140 = (state_73210[(19)]);
var inst_73158 = (state_73210[(23)]);
var inst_73158__$1 = cljs.core.seq(inst_73140);
var state_73210__$1 = (function (){var statearr_73287 = state_73210;
(statearr_73287[(23)] = inst_73158__$1);

return statearr_73287;
})();
if(inst_73158__$1){
var statearr_73288_75759 = state_73210__$1;
(statearr_73288_75759[(1)] = (33));

} else {
var statearr_73289_75760 = state_73210__$1;
(statearr_73289_75760[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (25))){
var inst_73143 = (state_73210[(10)]);
var inst_73142 = (state_73210[(20)]);
var inst_73145 = (inst_73143 < inst_73142);
var inst_73146 = inst_73145;
var state_73210__$1 = state_73210;
if(cljs.core.truth_(inst_73146)){
var statearr_73293_75761 = state_73210__$1;
(statearr_73293_75761[(1)] = (27));

} else {
var statearr_73294_75762 = state_73210__$1;
(statearr_73294_75762[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (34))){
var state_73210__$1 = state_73210;
var statearr_73295_75763 = state_73210__$1;
(statearr_73295_75763[(2)] = null);

(statearr_73295_75763[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (17))){
var state_73210__$1 = state_73210;
var statearr_73296_75764 = state_73210__$1;
(statearr_73296_75764[(2)] = null);

(statearr_73296_75764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (3))){
var inst_73203 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73210__$1,inst_73203);
} else {
if((state_val_73211 === (12))){
var inst_73126 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73299_75765 = state_73210__$1;
(statearr_73299_75765[(2)] = inst_73126);

(statearr_73299_75765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (2))){
var state_73210__$1 = state_73210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73210__$1,(4),ch);
} else {
if((state_val_73211 === (23))){
var state_73210__$1 = state_73210;
var statearr_73301_75766 = state_73210__$1;
(statearr_73301_75766[(2)] = null);

(statearr_73301_75766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (35))){
var inst_73187 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73304_75770 = state_73210__$1;
(statearr_73304_75770[(2)] = inst_73187);

(statearr_73304_75770[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (19))){
var inst_73092 = (state_73210[(7)]);
var inst_73097 = cljs.core.chunk_first(inst_73092);
var inst_73099 = cljs.core.chunk_rest(inst_73092);
var inst_73100 = cljs.core.count(inst_73097);
var inst_73070 = inst_73099;
var inst_73071 = inst_73097;
var inst_73072 = inst_73100;
var inst_73073 = (0);
var state_73210__$1 = (function (){var statearr_73308 = state_73210;
(statearr_73308[(14)] = inst_73070);

(statearr_73308[(15)] = inst_73071);

(statearr_73308[(16)] = inst_73072);

(statearr_73308[(17)] = inst_73073);

return statearr_73308;
})();
var statearr_73309_75771 = state_73210__$1;
(statearr_73309_75771[(2)] = null);

(statearr_73309_75771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (11))){
var inst_73070 = (state_73210[(14)]);
var inst_73092 = (state_73210[(7)]);
var inst_73092__$1 = cljs.core.seq(inst_73070);
var state_73210__$1 = (function (){var statearr_73312 = state_73210;
(statearr_73312[(7)] = inst_73092__$1);

return statearr_73312;
})();
if(inst_73092__$1){
var statearr_73314_75775 = state_73210__$1;
(statearr_73314_75775[(1)] = (16));

} else {
var statearr_73315_75776 = state_73210__$1;
(statearr_73315_75776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (9))){
var inst_73128 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73316_75777 = state_73210__$1;
(statearr_73316_75777[(2)] = inst_73128);

(statearr_73316_75777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (5))){
var inst_73068 = cljs.core.deref(cs);
var inst_73069 = cljs.core.seq(inst_73068);
var inst_73070 = inst_73069;
var inst_73071 = null;
var inst_73072 = (0);
var inst_73073 = (0);
var state_73210__$1 = (function (){var statearr_73318 = state_73210;
(statearr_73318[(14)] = inst_73070);

(statearr_73318[(15)] = inst_73071);

(statearr_73318[(16)] = inst_73072);

(statearr_73318[(17)] = inst_73073);

return statearr_73318;
})();
var statearr_73319_75778 = state_73210__$1;
(statearr_73319_75778[(2)] = null);

(statearr_73319_75778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (14))){
var state_73210__$1 = state_73210;
var statearr_73321_75779 = state_73210__$1;
(statearr_73321_75779[(2)] = null);

(statearr_73321_75779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (45))){
var inst_73195 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73322_75780 = state_73210__$1;
(statearr_73322_75780[(2)] = inst_73195);

(statearr_73322_75780[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (26))){
var inst_73132 = (state_73210[(27)]);
var inst_73191 = (state_73210[(2)]);
var inst_73192 = cljs.core.seq(inst_73132);
var state_73210__$1 = (function (){var statearr_73326 = state_73210;
(statearr_73326[(29)] = inst_73191);

return statearr_73326;
})();
if(inst_73192){
var statearr_73329_75781 = state_73210__$1;
(statearr_73329_75781[(1)] = (42));

} else {
var statearr_73331_75783 = state_73210__$1;
(statearr_73331_75783[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (16))){
var inst_73092 = (state_73210[(7)]);
var inst_73094 = cljs.core.chunked_seq_QMARK_(inst_73092);
var state_73210__$1 = state_73210;
if(inst_73094){
var statearr_73332_75784 = state_73210__$1;
(statearr_73332_75784[(1)] = (19));

} else {
var statearr_73333_75785 = state_73210__$1;
(statearr_73333_75785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (38))){
var inst_73184 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73334_75787 = state_73210__$1;
(statearr_73334_75787[(2)] = inst_73184);

(statearr_73334_75787[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (30))){
var state_73210__$1 = state_73210;
var statearr_73350_75788 = state_73210__$1;
(statearr_73350_75788[(2)] = null);

(statearr_73350_75788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (10))){
var inst_73071 = (state_73210[(15)]);
var inst_73073 = (state_73210[(17)]);
var inst_73081 = cljs.core._nth(inst_73071,inst_73073);
var inst_73082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73081,(0),null);
var inst_73083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73081,(1),null);
var state_73210__$1 = (function (){var statearr_73372 = state_73210;
(statearr_73372[(24)] = inst_73082);

return statearr_73372;
})();
if(cljs.core.truth_(inst_73083)){
var statearr_73382_75789 = state_73210__$1;
(statearr_73382_75789[(1)] = (13));

} else {
var statearr_73388_75790 = state_73210__$1;
(statearr_73388_75790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (18))){
var inst_73124 = (state_73210[(2)]);
var state_73210__$1 = state_73210;
var statearr_73389_75791 = state_73210__$1;
(statearr_73389_75791[(2)] = inst_73124);

(statearr_73389_75791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (42))){
var state_73210__$1 = state_73210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73210__$1,(45),dchan);
} else {
if((state_val_73211 === (37))){
var inst_73158 = (state_73210[(23)]);
var inst_73171 = (state_73210[(22)]);
var inst_73061 = (state_73210[(12)]);
var inst_73171__$1 = cljs.core.first(inst_73158);
var inst_73172 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_73171__$1,inst_73061,done);
var state_73210__$1 = (function (){var statearr_73391 = state_73210;
(statearr_73391[(22)] = inst_73171__$1);

return statearr_73391;
})();
if(cljs.core.truth_(inst_73172)){
var statearr_73395_75792 = state_73210__$1;
(statearr_73395_75792[(1)] = (39));

} else {
var statearr_73397_75793 = state_73210__$1;
(statearr_73397_75793[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73211 === (8))){
var inst_73073 = (state_73210[(17)]);
var inst_73072 = (state_73210[(16)]);
var inst_73075 = (inst_73073 < inst_73072);
var inst_73076 = inst_73075;
var state_73210__$1 = state_73210;
if(cljs.core.truth_(inst_73076)){
var statearr_73399_75795 = state_73210__$1;
(statearr_73399_75795[(1)] = (10));

} else {
var statearr_73401_75796 = state_73210__$1;
(statearr_73401_75796[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__59457__auto__ = null;
var cljs$core$async$mult_$_state_machine__59457__auto____0 = (function (){
var statearr_73405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73405[(0)] = cljs$core$async$mult_$_state_machine__59457__auto__);

(statearr_73405[(1)] = (1));

return statearr_73405;
});
var cljs$core$async$mult_$_state_machine__59457__auto____1 = (function (state_73210){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_73210);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e73408){var ex__59460__auto__ = e73408;
var statearr_73410_75798 = state_73210;
(statearr_73410_75798[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_73210[(4)]))){
var statearr_73412_75799 = state_73210;
(statearr_73412_75799[(1)] = cljs.core.first((state_73210[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75800 = state_73210;
state_73210 = G__75800;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__59457__auto__ = function(state_73210){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__59457__auto____1.call(this,state_73210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__59457__auto____0;
cljs$core$async$mult_$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__59457__auto____1;
return cljs$core$async$mult_$_state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_73422 = f__59924__auto__();
(statearr_73422[(6)] = c__59922__auto___75680);

return statearr_73422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__73437 = arguments.length;
switch (G__73437) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_75802 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_75802(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_75807 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_75807(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_75809 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_75809(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_75811 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_75811(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_75814 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_75814(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___75815 = arguments.length;
var i__5877__auto___75816 = (0);
while(true){
if((i__5877__auto___75816 < len__5876__auto___75815)){
args__5882__auto__.push((arguments[i__5877__auto___75816]));

var G__75817 = (i__5877__auto___75816 + (1));
i__5877__auto___75816 = G__75817;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__73501){
var map__73502 = p__73501;
var map__73502__$1 = cljs.core.__destructure_map(map__73502);
var opts = map__73502__$1;
var statearr_73503_75819 = state;
(statearr_73503_75819[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_73504_75820 = state;
(statearr_73504_75820[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_73505_75822 = state;
(statearr_73505_75822[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq73493){
var G__73494 = cljs.core.first(seq73493);
var seq73493__$1 = cljs.core.next(seq73493);
var G__73495 = cljs.core.first(seq73493__$1);
var seq73493__$2 = cljs.core.next(seq73493__$1);
var G__73496 = cljs.core.first(seq73493__$2);
var seq73493__$3 = cljs.core.next(seq73493__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73494,G__73495,G__73496,seq73493__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73519 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta73520){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta73520 = meta73520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73521,meta73520__$1){
var self__ = this;
var _73521__$1 = this;
return (new cljs.core.async.t_cljs$core$async73519(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta73520__$1));
}));

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73521){
var self__ = this;
var _73521__$1 = this;
return self__.meta73520;
}));

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73519.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta73520","meta73520",598251587,null)], null);
}));

(cljs.core.async.t_cljs$core$async73519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73519");

(cljs.core.async.t_cljs$core$async73519.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async73519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73519.
 */
cljs.core.async.__GT_t_cljs$core$async73519 = (function cljs$core$async$__GT_t_cljs$core$async73519(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta73520){
return (new cljs.core.async.t_cljs$core$async73519(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta73520));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async73519(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__59922__auto___75831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_73627){
var state_val_73628 = (state_73627[(1)]);
if((state_val_73628 === (7))){
var inst_73580 = (state_73627[(2)]);
var state_73627__$1 = state_73627;
if(cljs.core.truth_(inst_73580)){
var statearr_73632_75834 = state_73627__$1;
(statearr_73632_75834[(1)] = (8));

} else {
var statearr_73633_75835 = state_73627__$1;
(statearr_73633_75835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (20))){
var inst_73572 = (state_73627[(7)]);
var state_73627__$1 = state_73627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73627__$1,(23),out,inst_73572);
} else {
if((state_val_73628 === (1))){
var inst_73552 = calc_state();
var inst_73553 = cljs.core.__destructure_map(inst_73552);
var inst_73554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_73555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_73556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_73557 = inst_73552;
var state_73627__$1 = (function (){var statearr_73639 = state_73627;
(statearr_73639[(8)] = inst_73554);

(statearr_73639[(9)] = inst_73555);

(statearr_73639[(10)] = inst_73556);

(statearr_73639[(11)] = inst_73557);

return statearr_73639;
})();
var statearr_73640_75836 = state_73627__$1;
(statearr_73640_75836[(2)] = null);

(statearr_73640_75836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (24))){
var inst_73563 = (state_73627[(12)]);
var inst_73557 = inst_73563;
var state_73627__$1 = (function (){var statearr_73641 = state_73627;
(statearr_73641[(11)] = inst_73557);

return statearr_73641;
})();
var statearr_73642_75837 = state_73627__$1;
(statearr_73642_75837[(2)] = null);

(statearr_73642_75837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (4))){
var inst_73572 = (state_73627[(7)]);
var inst_73575 = (state_73627[(13)]);
var inst_73571 = (state_73627[(2)]);
var inst_73572__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73571,(0),null);
var inst_73573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73571,(1),null);
var inst_73575__$1 = (inst_73572__$1 == null);
var state_73627__$1 = (function (){var statearr_73643 = state_73627;
(statearr_73643[(7)] = inst_73572__$1);

(statearr_73643[(14)] = inst_73573);

(statearr_73643[(13)] = inst_73575__$1);

return statearr_73643;
})();
if(cljs.core.truth_(inst_73575__$1)){
var statearr_73647_75841 = state_73627__$1;
(statearr_73647_75841[(1)] = (5));

} else {
var statearr_73649_75842 = state_73627__$1;
(statearr_73649_75842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (15))){
var inst_73564 = (state_73627[(15)]);
var inst_73596 = (state_73627[(16)]);
var inst_73596__$1 = cljs.core.empty_QMARK_(inst_73564);
var state_73627__$1 = (function (){var statearr_73650 = state_73627;
(statearr_73650[(16)] = inst_73596__$1);

return statearr_73650;
})();
if(inst_73596__$1){
var statearr_73651_75847 = state_73627__$1;
(statearr_73651_75847[(1)] = (17));

} else {
var statearr_73652_75848 = state_73627__$1;
(statearr_73652_75848[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (21))){
var inst_73563 = (state_73627[(12)]);
var inst_73557 = inst_73563;
var state_73627__$1 = (function (){var statearr_73653 = state_73627;
(statearr_73653[(11)] = inst_73557);

return statearr_73653;
})();
var statearr_73654_75852 = state_73627__$1;
(statearr_73654_75852[(2)] = null);

(statearr_73654_75852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (13))){
var inst_73589 = (state_73627[(2)]);
var inst_73590 = calc_state();
var inst_73557 = inst_73590;
var state_73627__$1 = (function (){var statearr_73655 = state_73627;
(statearr_73655[(17)] = inst_73589);

(statearr_73655[(11)] = inst_73557);

return statearr_73655;
})();
var statearr_73656_75853 = state_73627__$1;
(statearr_73656_75853[(2)] = null);

(statearr_73656_75853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (22))){
var inst_73619 = (state_73627[(2)]);
var state_73627__$1 = state_73627;
var statearr_73657_75854 = state_73627__$1;
(statearr_73657_75854[(2)] = inst_73619);

(statearr_73657_75854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (6))){
var inst_73573 = (state_73627[(14)]);
var inst_73578 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73573,change);
var state_73627__$1 = state_73627;
var statearr_73658_75855 = state_73627__$1;
(statearr_73658_75855[(2)] = inst_73578);

(statearr_73658_75855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (25))){
var state_73627__$1 = state_73627;
var statearr_73659_75856 = state_73627__$1;
(statearr_73659_75856[(2)] = null);

(statearr_73659_75856[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (17))){
var inst_73565 = (state_73627[(18)]);
var inst_73573 = (state_73627[(14)]);
var inst_73601 = (inst_73565.cljs$core$IFn$_invoke$arity$1 ? inst_73565.cljs$core$IFn$_invoke$arity$1(inst_73573) : inst_73565.call(null,inst_73573));
var inst_73602 = cljs.core.not(inst_73601);
var state_73627__$1 = state_73627;
var statearr_73664_75857 = state_73627__$1;
(statearr_73664_75857[(2)] = inst_73602);

(statearr_73664_75857[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (3))){
var inst_73624 = (state_73627[(2)]);
var state_73627__$1 = state_73627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73627__$1,inst_73624);
} else {
if((state_val_73628 === (12))){
var state_73627__$1 = state_73627;
var statearr_73666_75862 = state_73627__$1;
(statearr_73666_75862[(2)] = null);

(statearr_73666_75862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (2))){
var inst_73557 = (state_73627[(11)]);
var inst_73563 = (state_73627[(12)]);
var inst_73563__$1 = cljs.core.__destructure_map(inst_73557);
var inst_73564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73563__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_73565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73563__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_73566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73563__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_73627__$1 = (function (){var statearr_73667 = state_73627;
(statearr_73667[(12)] = inst_73563__$1);

(statearr_73667[(15)] = inst_73564);

(statearr_73667[(18)] = inst_73565);

return statearr_73667;
})();
return cljs.core.async.ioc_alts_BANG_(state_73627__$1,(4),inst_73566);
} else {
if((state_val_73628 === (23))){
var inst_73610 = (state_73627[(2)]);
var state_73627__$1 = state_73627;
if(cljs.core.truth_(inst_73610)){
var statearr_73668_75864 = state_73627__$1;
(statearr_73668_75864[(1)] = (24));

} else {
var statearr_73669_75865 = state_73627__$1;
(statearr_73669_75865[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (19))){
var inst_73605 = (state_73627[(2)]);
var state_73627__$1 = state_73627;
var statearr_73670_75866 = state_73627__$1;
(statearr_73670_75866[(2)] = inst_73605);

(statearr_73670_75866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (11))){
var inst_73573 = (state_73627[(14)]);
var inst_73586 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_73573);
var state_73627__$1 = state_73627;
var statearr_73671_75867 = state_73627__$1;
(statearr_73671_75867[(2)] = inst_73586);

(statearr_73671_75867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (9))){
var inst_73564 = (state_73627[(15)]);
var inst_73573 = (state_73627[(14)]);
var inst_73593 = (state_73627[(19)]);
var inst_73593__$1 = (inst_73564.cljs$core$IFn$_invoke$arity$1 ? inst_73564.cljs$core$IFn$_invoke$arity$1(inst_73573) : inst_73564.call(null,inst_73573));
var state_73627__$1 = (function (){var statearr_73672 = state_73627;
(statearr_73672[(19)] = inst_73593__$1);

return statearr_73672;
})();
if(cljs.core.truth_(inst_73593__$1)){
var statearr_73673_75868 = state_73627__$1;
(statearr_73673_75868[(1)] = (14));

} else {
var statearr_73674_75869 = state_73627__$1;
(statearr_73674_75869[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (5))){
var inst_73575 = (state_73627[(13)]);
var state_73627__$1 = state_73627;
var statearr_73676_75870 = state_73627__$1;
(statearr_73676_75870[(2)] = inst_73575);

(statearr_73676_75870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (14))){
var inst_73593 = (state_73627[(19)]);
var state_73627__$1 = state_73627;
var statearr_73677_75871 = state_73627__$1;
(statearr_73677_75871[(2)] = inst_73593);

(statearr_73677_75871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (26))){
var inst_73615 = (state_73627[(2)]);
var state_73627__$1 = state_73627;
var statearr_73678_75872 = state_73627__$1;
(statearr_73678_75872[(2)] = inst_73615);

(statearr_73678_75872[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (16))){
var inst_73607 = (state_73627[(2)]);
var state_73627__$1 = state_73627;
if(cljs.core.truth_(inst_73607)){
var statearr_73680_75874 = state_73627__$1;
(statearr_73680_75874[(1)] = (20));

} else {
var statearr_73681_75875 = state_73627__$1;
(statearr_73681_75875[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (10))){
var inst_73622 = (state_73627[(2)]);
var state_73627__$1 = state_73627;
var statearr_73682_75876 = state_73627__$1;
(statearr_73682_75876[(2)] = inst_73622);

(statearr_73682_75876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (18))){
var inst_73596 = (state_73627[(16)]);
var state_73627__$1 = state_73627;
var statearr_73683_75877 = state_73627__$1;
(statearr_73683_75877[(2)] = inst_73596);

(statearr_73683_75877[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73628 === (8))){
var inst_73572 = (state_73627[(7)]);
var inst_73583 = (inst_73572 == null);
var state_73627__$1 = state_73627;
if(cljs.core.truth_(inst_73583)){
var statearr_73684_75878 = state_73627__$1;
(statearr_73684_75878[(1)] = (11));

} else {
var statearr_73685_75879 = state_73627__$1;
(statearr_73685_75879[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__59457__auto__ = null;
var cljs$core$async$mix_$_state_machine__59457__auto____0 = (function (){
var statearr_73687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73687[(0)] = cljs$core$async$mix_$_state_machine__59457__auto__);

(statearr_73687[(1)] = (1));

return statearr_73687;
});
var cljs$core$async$mix_$_state_machine__59457__auto____1 = (function (state_73627){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_73627);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e73688){var ex__59460__auto__ = e73688;
var statearr_73689_75880 = state_73627;
(statearr_73689_75880[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_73627[(4)]))){
var statearr_73690_75881 = state_73627;
(statearr_73690_75881[(1)] = cljs.core.first((state_73627[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75882 = state_73627;
state_73627 = G__75882;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__59457__auto__ = function(state_73627){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__59457__auto____1.call(this,state_73627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__59457__auto____0;
cljs$core$async$mix_$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__59457__auto____1;
return cljs$core$async$mix_$_state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_73692 = f__59924__auto__();
(statearr_73692[(6)] = c__59922__auto___75831);

return statearr_73692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_75883 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_75883(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_75884 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_75884(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_75886 = (function() {
var G__75887 = null;
var G__75887__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__75887__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__75887 = function(p,v){
switch(arguments.length){
case 1:
return G__75887__1.call(this,p);
case 2:
return G__75887__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75887.cljs$core$IFn$_invoke$arity$1 = G__75887__1;
G__75887.cljs$core$IFn$_invoke$arity$2 = G__75887__2;
return G__75887;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__73709 = arguments.length;
switch (G__73709) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_75886(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_75886(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73754 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta73755){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta73755 = meta73755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73756,meta73755__$1){
var self__ = this;
var _73756__$1 = this;
return (new cljs.core.async.t_cljs$core$async73754(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta73755__$1));
}));

(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73756){
var self__ = this;
var _73756__$1 = this;
return self__.meta73755;
}));

(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async73754.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async73754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta73755","meta73755",1226221836,null)], null);
}));

(cljs.core.async.t_cljs$core$async73754.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73754");

(cljs.core.async.t_cljs$core$async73754.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async73754");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73754.
 */
cljs.core.async.__GT_t_cljs$core$async73754 = (function cljs$core$async$__GT_t_cljs$core$async73754(ch,topic_fn,buf_fn,mults,ensure_mult,meta73755){
return (new cljs.core.async.t_cljs$core$async73754(ch,topic_fn,buf_fn,mults,ensure_mult,meta73755));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__73732 = arguments.length;
switch (G__73732) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__73723_SHARP_){
if(cljs.core.truth_((p1__73723_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__73723_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__73723_SHARP_.call(null,topic)))){
return p1__73723_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__73723_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async73754(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__59922__auto___75900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_73864){
var state_val_73865 = (state_73864[(1)]);
if((state_val_73865 === (7))){
var inst_73856 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
var statearr_73889_75902 = state_73864__$1;
(statearr_73889_75902[(2)] = inst_73856);

(statearr_73889_75902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (20))){
var state_73864__$1 = state_73864;
var statearr_73895_75903 = state_73864__$1;
(statearr_73895_75903[(2)] = null);

(statearr_73895_75903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (1))){
var state_73864__$1 = state_73864;
var statearr_73896_75906 = state_73864__$1;
(statearr_73896_75906[(2)] = null);

(statearr_73896_75906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (24))){
var inst_73839 = (state_73864[(7)]);
var inst_73848 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_73839);
var state_73864__$1 = state_73864;
var statearr_73897_75907 = state_73864__$1;
(statearr_73897_75907[(2)] = inst_73848);

(statearr_73897_75907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (4))){
var inst_73786 = (state_73864[(8)]);
var inst_73786__$1 = (state_73864[(2)]);
var inst_73787 = (inst_73786__$1 == null);
var state_73864__$1 = (function (){var statearr_73900 = state_73864;
(statearr_73900[(8)] = inst_73786__$1);

return statearr_73900;
})();
if(cljs.core.truth_(inst_73787)){
var statearr_73901_75910 = state_73864__$1;
(statearr_73901_75910[(1)] = (5));

} else {
var statearr_73902_75911 = state_73864__$1;
(statearr_73902_75911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (15))){
var inst_73833 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
var statearr_73906_75912 = state_73864__$1;
(statearr_73906_75912[(2)] = inst_73833);

(statearr_73906_75912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (21))){
var inst_73853 = (state_73864[(2)]);
var state_73864__$1 = (function (){var statearr_73907 = state_73864;
(statearr_73907[(9)] = inst_73853);

return statearr_73907;
})();
var statearr_73908_75913 = state_73864__$1;
(statearr_73908_75913[(2)] = null);

(statearr_73908_75913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (13))){
var inst_73815 = (state_73864[(10)]);
var inst_73817 = cljs.core.chunked_seq_QMARK_(inst_73815);
var state_73864__$1 = state_73864;
if(inst_73817){
var statearr_73909_75914 = state_73864__$1;
(statearr_73909_75914[(1)] = (16));

} else {
var statearr_73910_75915 = state_73864__$1;
(statearr_73910_75915[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (22))){
var inst_73845 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
if(cljs.core.truth_(inst_73845)){
var statearr_73911_75916 = state_73864__$1;
(statearr_73911_75916[(1)] = (23));

} else {
var statearr_73916_75918 = state_73864__$1;
(statearr_73916_75918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (6))){
var inst_73786 = (state_73864[(8)]);
var inst_73839 = (state_73864[(7)]);
var inst_73841 = (state_73864[(11)]);
var inst_73839__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_73786) : topic_fn.call(null,inst_73786));
var inst_73840 = cljs.core.deref(mults);
var inst_73841__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73840,inst_73839__$1);
var state_73864__$1 = (function (){var statearr_73928 = state_73864;
(statearr_73928[(7)] = inst_73839__$1);

(statearr_73928[(11)] = inst_73841__$1);

return statearr_73928;
})();
if(cljs.core.truth_(inst_73841__$1)){
var statearr_73934_75921 = state_73864__$1;
(statearr_73934_75921[(1)] = (19));

} else {
var statearr_73935_75922 = state_73864__$1;
(statearr_73935_75922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (25))){
var inst_73850 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
var statearr_73940_75923 = state_73864__$1;
(statearr_73940_75923[(2)] = inst_73850);

(statearr_73940_75923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (17))){
var inst_73815 = (state_73864[(10)]);
var inst_73824 = cljs.core.first(inst_73815);
var inst_73825 = cljs.core.async.muxch_STAR_(inst_73824);
var inst_73826 = cljs.core.async.close_BANG_(inst_73825);
var inst_73827 = cljs.core.next(inst_73815);
var inst_73796 = inst_73827;
var inst_73797 = null;
var inst_73798 = (0);
var inst_73799 = (0);
var state_73864__$1 = (function (){var statearr_73941 = state_73864;
(statearr_73941[(12)] = inst_73826);

(statearr_73941[(13)] = inst_73796);

(statearr_73941[(14)] = inst_73797);

(statearr_73941[(15)] = inst_73798);

(statearr_73941[(16)] = inst_73799);

return statearr_73941;
})();
var statearr_73942_75924 = state_73864__$1;
(statearr_73942_75924[(2)] = null);

(statearr_73942_75924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (3))){
var inst_73858 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73864__$1,inst_73858);
} else {
if((state_val_73865 === (12))){
var inst_73835 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
var statearr_73943_75925 = state_73864__$1;
(statearr_73943_75925[(2)] = inst_73835);

(statearr_73943_75925[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (2))){
var state_73864__$1 = state_73864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73864__$1,(4),ch);
} else {
if((state_val_73865 === (23))){
var state_73864__$1 = state_73864;
var statearr_73947_75927 = state_73864__$1;
(statearr_73947_75927[(2)] = null);

(statearr_73947_75927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (19))){
var inst_73841 = (state_73864[(11)]);
var inst_73786 = (state_73864[(8)]);
var inst_73843 = cljs.core.async.muxch_STAR_(inst_73841);
var state_73864__$1 = state_73864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73864__$1,(22),inst_73843,inst_73786);
} else {
if((state_val_73865 === (11))){
var inst_73796 = (state_73864[(13)]);
var inst_73815 = (state_73864[(10)]);
var inst_73815__$1 = cljs.core.seq(inst_73796);
var state_73864__$1 = (function (){var statearr_73953 = state_73864;
(statearr_73953[(10)] = inst_73815__$1);

return statearr_73953;
})();
if(inst_73815__$1){
var statearr_73954_75928 = state_73864__$1;
(statearr_73954_75928[(1)] = (13));

} else {
var statearr_73955_75929 = state_73864__$1;
(statearr_73955_75929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (9))){
var inst_73837 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
var statearr_73957_75930 = state_73864__$1;
(statearr_73957_75930[(2)] = inst_73837);

(statearr_73957_75930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (5))){
var inst_73793 = cljs.core.deref(mults);
var inst_73794 = cljs.core.vals(inst_73793);
var inst_73795 = cljs.core.seq(inst_73794);
var inst_73796 = inst_73795;
var inst_73797 = null;
var inst_73798 = (0);
var inst_73799 = (0);
var state_73864__$1 = (function (){var statearr_73964 = state_73864;
(statearr_73964[(13)] = inst_73796);

(statearr_73964[(14)] = inst_73797);

(statearr_73964[(15)] = inst_73798);

(statearr_73964[(16)] = inst_73799);

return statearr_73964;
})();
var statearr_73968_75931 = state_73864__$1;
(statearr_73968_75931[(2)] = null);

(statearr_73968_75931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (14))){
var state_73864__$1 = state_73864;
var statearr_73972_75933 = state_73864__$1;
(statearr_73972_75933[(2)] = null);

(statearr_73972_75933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (16))){
var inst_73815 = (state_73864[(10)]);
var inst_73819 = cljs.core.chunk_first(inst_73815);
var inst_73820 = cljs.core.chunk_rest(inst_73815);
var inst_73821 = cljs.core.count(inst_73819);
var inst_73796 = inst_73820;
var inst_73797 = inst_73819;
var inst_73798 = inst_73821;
var inst_73799 = (0);
var state_73864__$1 = (function (){var statearr_73976 = state_73864;
(statearr_73976[(13)] = inst_73796);

(statearr_73976[(14)] = inst_73797);

(statearr_73976[(15)] = inst_73798);

(statearr_73976[(16)] = inst_73799);

return statearr_73976;
})();
var statearr_73977_75935 = state_73864__$1;
(statearr_73977_75935[(2)] = null);

(statearr_73977_75935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (10))){
var inst_73797 = (state_73864[(14)]);
var inst_73799 = (state_73864[(16)]);
var inst_73796 = (state_73864[(13)]);
var inst_73798 = (state_73864[(15)]);
var inst_73808 = cljs.core._nth(inst_73797,inst_73799);
var inst_73809 = cljs.core.async.muxch_STAR_(inst_73808);
var inst_73810 = cljs.core.async.close_BANG_(inst_73809);
var inst_73811 = (inst_73799 + (1));
var tmp73969 = inst_73796;
var tmp73970 = inst_73797;
var tmp73971 = inst_73798;
var inst_73796__$1 = tmp73969;
var inst_73797__$1 = tmp73970;
var inst_73798__$1 = tmp73971;
var inst_73799__$1 = inst_73811;
var state_73864__$1 = (function (){var statearr_73983 = state_73864;
(statearr_73983[(17)] = inst_73810);

(statearr_73983[(13)] = inst_73796__$1);

(statearr_73983[(14)] = inst_73797__$1);

(statearr_73983[(15)] = inst_73798__$1);

(statearr_73983[(16)] = inst_73799__$1);

return statearr_73983;
})();
var statearr_73984_75936 = state_73864__$1;
(statearr_73984_75936[(2)] = null);

(statearr_73984_75936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (18))){
var inst_73830 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
var statearr_73985_75937 = state_73864__$1;
(statearr_73985_75937[(2)] = inst_73830);

(statearr_73985_75937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (8))){
var inst_73799 = (state_73864[(16)]);
var inst_73798 = (state_73864[(15)]);
var inst_73805 = (inst_73799 < inst_73798);
var inst_73806 = inst_73805;
var state_73864__$1 = state_73864;
if(cljs.core.truth_(inst_73806)){
var statearr_73987_75938 = state_73864__$1;
(statearr_73987_75938[(1)] = (10));

} else {
var statearr_73988_75939 = state_73864__$1;
(statearr_73988_75939[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_73995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73995[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_73995[(1)] = (1));

return statearr_73995;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_73864){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_73864);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e73996){var ex__59460__auto__ = e73996;
var statearr_73997_75940 = state_73864;
(statearr_73997_75940[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_73864[(4)]))){
var statearr_73998_75941 = state_73864;
(statearr_73998_75941[(1)] = cljs.core.first((state_73864[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75942 = state_73864;
state_73864 = G__75942;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_73864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_73864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_73999 = f__59924__auto__();
(statearr_73999[(6)] = c__59922__auto___75900);

return statearr_73999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__74004 = arguments.length;
switch (G__74004) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__74015 = arguments.length;
switch (G__74015) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__74024 = arguments.length;
switch (G__74024) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__59922__auto___75947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_74070){
var state_val_74071 = (state_74070[(1)]);
if((state_val_74071 === (7))){
var state_74070__$1 = state_74070;
var statearr_74072_75948 = state_74070__$1;
(statearr_74072_75948[(2)] = null);

(statearr_74072_75948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (1))){
var state_74070__$1 = state_74070;
var statearr_74073_75949 = state_74070__$1;
(statearr_74073_75949[(2)] = null);

(statearr_74073_75949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (4))){
var inst_74029 = (state_74070[(7)]);
var inst_74028 = (state_74070[(8)]);
var inst_74031 = (inst_74029 < inst_74028);
var state_74070__$1 = state_74070;
if(cljs.core.truth_(inst_74031)){
var statearr_74076_75954 = state_74070__$1;
(statearr_74076_75954[(1)] = (6));

} else {
var statearr_74077_75955 = state_74070__$1;
(statearr_74077_75955[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (15))){
var inst_74056 = (state_74070[(9)]);
var inst_74061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_74056);
var state_74070__$1 = state_74070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74070__$1,(17),out,inst_74061);
} else {
if((state_val_74071 === (13))){
var inst_74056 = (state_74070[(9)]);
var inst_74056__$1 = (state_74070[(2)]);
var inst_74057 = cljs.core.some(cljs.core.nil_QMARK_,inst_74056__$1);
var state_74070__$1 = (function (){var statearr_74079 = state_74070;
(statearr_74079[(9)] = inst_74056__$1);

return statearr_74079;
})();
if(cljs.core.truth_(inst_74057)){
var statearr_74080_75957 = state_74070__$1;
(statearr_74080_75957[(1)] = (14));

} else {
var statearr_74081_75958 = state_74070__$1;
(statearr_74081_75958[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (6))){
var state_74070__$1 = state_74070;
var statearr_74082_75960 = state_74070__$1;
(statearr_74082_75960[(2)] = null);

(statearr_74082_75960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (17))){
var inst_74063 = (state_74070[(2)]);
var state_74070__$1 = (function (){var statearr_74084 = state_74070;
(statearr_74084[(10)] = inst_74063);

return statearr_74084;
})();
var statearr_74085_75961 = state_74070__$1;
(statearr_74085_75961[(2)] = null);

(statearr_74085_75961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (3))){
var inst_74068 = (state_74070[(2)]);
var state_74070__$1 = state_74070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74070__$1,inst_74068);
} else {
if((state_val_74071 === (12))){
var _ = (function (){var statearr_74087 = state_74070;
(statearr_74087[(4)] = cljs.core.rest((state_74070[(4)])));

return statearr_74087;
})();
var state_74070__$1 = state_74070;
var ex74083 = (state_74070__$1[(2)]);
var statearr_74091_75962 = state_74070__$1;
(statearr_74091_75962[(5)] = ex74083);


if((ex74083 instanceof Object)){
var statearr_74092_75963 = state_74070__$1;
(statearr_74092_75963[(1)] = (11));

(statearr_74092_75963[(5)] = null);

} else {
throw ex74083;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (2))){
var inst_74027 = cljs.core.reset_BANG_(dctr,cnt);
var inst_74028 = cnt;
var inst_74029 = (0);
var state_74070__$1 = (function (){var statearr_74094 = state_74070;
(statearr_74094[(11)] = inst_74027);

(statearr_74094[(8)] = inst_74028);

(statearr_74094[(7)] = inst_74029);

return statearr_74094;
})();
var statearr_74100_75964 = state_74070__$1;
(statearr_74100_75964[(2)] = null);

(statearr_74100_75964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (11))){
var inst_74033 = (state_74070[(2)]);
var inst_74034 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_74070__$1 = (function (){var statearr_74102 = state_74070;
(statearr_74102[(12)] = inst_74033);

return statearr_74102;
})();
var statearr_74103_75966 = state_74070__$1;
(statearr_74103_75966[(2)] = inst_74034);

(statearr_74103_75966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (9))){
var inst_74029 = (state_74070[(7)]);
var _ = (function (){var statearr_74106 = state_74070;
(statearr_74106[(4)] = cljs.core.cons((12),(state_74070[(4)])));

return statearr_74106;
})();
var inst_74040 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_74029) : chs__$1.call(null,inst_74029));
var inst_74041 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_74029) : done.call(null,inst_74029));
var inst_74042 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_74040,inst_74041);
var ___$1 = (function (){var statearr_74118 = state_74070;
(statearr_74118[(4)] = cljs.core.rest((state_74070[(4)])));

return statearr_74118;
})();
var state_74070__$1 = state_74070;
var statearr_74119_75971 = state_74070__$1;
(statearr_74119_75971[(2)] = inst_74042);

(statearr_74119_75971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (5))){
var inst_74052 = (state_74070[(2)]);
var state_74070__$1 = (function (){var statearr_74120 = state_74070;
(statearr_74120[(13)] = inst_74052);

return statearr_74120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74070__$1,(13),dchan);
} else {
if((state_val_74071 === (14))){
var inst_74059 = cljs.core.async.close_BANG_(out);
var state_74070__$1 = state_74070;
var statearr_74121_75975 = state_74070__$1;
(statearr_74121_75975[(2)] = inst_74059);

(statearr_74121_75975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (16))){
var inst_74066 = (state_74070[(2)]);
var state_74070__$1 = state_74070;
var statearr_74122_75977 = state_74070__$1;
(statearr_74122_75977[(2)] = inst_74066);

(statearr_74122_75977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (10))){
var inst_74029 = (state_74070[(7)]);
var inst_74045 = (state_74070[(2)]);
var inst_74046 = (inst_74029 + (1));
var inst_74029__$1 = inst_74046;
var state_74070__$1 = (function (){var statearr_74123 = state_74070;
(statearr_74123[(14)] = inst_74045);

(statearr_74123[(7)] = inst_74029__$1);

return statearr_74123;
})();
var statearr_74124_75978 = state_74070__$1;
(statearr_74124_75978[(2)] = null);

(statearr_74124_75978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74071 === (8))){
var inst_74050 = (state_74070[(2)]);
var state_74070__$1 = state_74070;
var statearr_74125_75979 = state_74070__$1;
(statearr_74125_75979[(2)] = inst_74050);

(statearr_74125_75979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_74137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74137[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_74137[(1)] = (1));

return statearr_74137;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_74070){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_74070);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e74139){var ex__59460__auto__ = e74139;
var statearr_74143_75982 = state_74070;
(statearr_74143_75982[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_74070[(4)]))){
var statearr_74144_75983 = state_74070;
(statearr_74144_75983[(1)] = cljs.core.first((state_74070[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75984 = state_74070;
state_74070 = G__75984;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_74070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_74070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_74155 = f__59924__auto__();
(statearr_74155[(6)] = c__59922__auto___75947);

return statearr_74155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__74167 = arguments.length;
switch (G__74167) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59922__auto___75989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_74218){
var state_val_74219 = (state_74218[(1)]);
if((state_val_74219 === (7))){
var inst_74193 = (state_74218[(7)]);
var inst_74194 = (state_74218[(8)]);
var inst_74193__$1 = (state_74218[(2)]);
var inst_74194__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74193__$1,(0),null);
var inst_74196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74193__$1,(1),null);
var inst_74197 = (inst_74194__$1 == null);
var state_74218__$1 = (function (){var statearr_74249 = state_74218;
(statearr_74249[(7)] = inst_74193__$1);

(statearr_74249[(8)] = inst_74194__$1);

(statearr_74249[(9)] = inst_74196);

return statearr_74249;
})();
if(cljs.core.truth_(inst_74197)){
var statearr_74251_75992 = state_74218__$1;
(statearr_74251_75992[(1)] = (8));

} else {
var statearr_74254_75993 = state_74218__$1;
(statearr_74254_75993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74219 === (1))){
var inst_74180 = cljs.core.vec(chs);
var inst_74181 = inst_74180;
var state_74218__$1 = (function (){var statearr_74259 = state_74218;
(statearr_74259[(10)] = inst_74181);

return statearr_74259;
})();
var statearr_74260_75994 = state_74218__$1;
(statearr_74260_75994[(2)] = null);

(statearr_74260_75994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74219 === (4))){
var inst_74181 = (state_74218[(10)]);
var state_74218__$1 = state_74218;
return cljs.core.async.ioc_alts_BANG_(state_74218__$1,(7),inst_74181);
} else {
if((state_val_74219 === (6))){
var inst_74214 = (state_74218[(2)]);
var state_74218__$1 = state_74218;
var statearr_74266_76007 = state_74218__$1;
(statearr_74266_76007[(2)] = inst_74214);

(statearr_74266_76007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74219 === (3))){
var inst_74216 = (state_74218[(2)]);
var state_74218__$1 = state_74218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74218__$1,inst_74216);
} else {
if((state_val_74219 === (2))){
var inst_74181 = (state_74218[(10)]);
var inst_74183 = cljs.core.count(inst_74181);
var inst_74184 = (inst_74183 > (0));
var state_74218__$1 = state_74218;
if(cljs.core.truth_(inst_74184)){
var statearr_74272_76008 = state_74218__$1;
(statearr_74272_76008[(1)] = (4));

} else {
var statearr_74273_76009 = state_74218__$1;
(statearr_74273_76009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74219 === (11))){
var inst_74181 = (state_74218[(10)]);
var inst_74206 = (state_74218[(2)]);
var tmp74267 = inst_74181;
var inst_74181__$1 = tmp74267;
var state_74218__$1 = (function (){var statearr_74275 = state_74218;
(statearr_74275[(11)] = inst_74206);

(statearr_74275[(10)] = inst_74181__$1);

return statearr_74275;
})();
var statearr_74277_76010 = state_74218__$1;
(statearr_74277_76010[(2)] = null);

(statearr_74277_76010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74219 === (9))){
var inst_74194 = (state_74218[(8)]);
var state_74218__$1 = state_74218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74218__$1,(11),out,inst_74194);
} else {
if((state_val_74219 === (5))){
var inst_74212 = cljs.core.async.close_BANG_(out);
var state_74218__$1 = state_74218;
var statearr_74289_76011 = state_74218__$1;
(statearr_74289_76011[(2)] = inst_74212);

(statearr_74289_76011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74219 === (10))){
var inst_74209 = (state_74218[(2)]);
var state_74218__$1 = state_74218;
var statearr_74292_76012 = state_74218__$1;
(statearr_74292_76012[(2)] = inst_74209);

(statearr_74292_76012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74219 === (8))){
var inst_74181 = (state_74218[(10)]);
var inst_74193 = (state_74218[(7)]);
var inst_74194 = (state_74218[(8)]);
var inst_74196 = (state_74218[(9)]);
var inst_74201 = (function (){var cs = inst_74181;
var vec__74186 = inst_74193;
var v = inst_74194;
var c = inst_74196;
return (function (p1__74160_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__74160_SHARP_);
});
})();
var inst_74202 = cljs.core.filterv(inst_74201,inst_74181);
var inst_74181__$1 = inst_74202;
var state_74218__$1 = (function (){var statearr_74299 = state_74218;
(statearr_74299[(10)] = inst_74181__$1);

return statearr_74299;
})();
var statearr_74300_76013 = state_74218__$1;
(statearr_74300_76013[(2)] = null);

(statearr_74300_76013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_74302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74302[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_74302[(1)] = (1));

return statearr_74302;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_74218){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_74218);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e74307){var ex__59460__auto__ = e74307;
var statearr_74308_76016 = state_74218;
(statearr_74308_76016[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_74218[(4)]))){
var statearr_74309_76017 = state_74218;
(statearr_74309_76017[(1)] = cljs.core.first((state_74218[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76018 = state_74218;
state_74218 = G__76018;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_74218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_74218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_74310 = f__59924__auto__();
(statearr_74310[(6)] = c__59922__auto___75989);

return statearr_74310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__74321 = arguments.length;
switch (G__74321) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59922__auto___76034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_74353){
var state_val_74354 = (state_74353[(1)]);
if((state_val_74354 === (7))){
var inst_74334 = (state_74353[(7)]);
var inst_74334__$1 = (state_74353[(2)]);
var inst_74336 = (inst_74334__$1 == null);
var inst_74337 = cljs.core.not(inst_74336);
var state_74353__$1 = (function (){var statearr_74388 = state_74353;
(statearr_74388[(7)] = inst_74334__$1);

return statearr_74388;
})();
if(inst_74337){
var statearr_74389_76036 = state_74353__$1;
(statearr_74389_76036[(1)] = (8));

} else {
var statearr_74390_76037 = state_74353__$1;
(statearr_74390_76037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74354 === (1))){
var inst_74328 = (0);
var state_74353__$1 = (function (){var statearr_74391 = state_74353;
(statearr_74391[(8)] = inst_74328);

return statearr_74391;
})();
var statearr_74392_76038 = state_74353__$1;
(statearr_74392_76038[(2)] = null);

(statearr_74392_76038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74354 === (4))){
var state_74353__$1 = state_74353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74353__$1,(7),ch);
} else {
if((state_val_74354 === (6))){
var inst_74348 = (state_74353[(2)]);
var state_74353__$1 = state_74353;
var statearr_74398_76040 = state_74353__$1;
(statearr_74398_76040[(2)] = inst_74348);

(statearr_74398_76040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74354 === (3))){
var inst_74350 = (state_74353[(2)]);
var inst_74351 = cljs.core.async.close_BANG_(out);
var state_74353__$1 = (function (){var statearr_74399 = state_74353;
(statearr_74399[(9)] = inst_74350);

return statearr_74399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74353__$1,inst_74351);
} else {
if((state_val_74354 === (2))){
var inst_74328 = (state_74353[(8)]);
var inst_74330 = (inst_74328 < n);
var state_74353__$1 = state_74353;
if(cljs.core.truth_(inst_74330)){
var statearr_74401_76045 = state_74353__$1;
(statearr_74401_76045[(1)] = (4));

} else {
var statearr_74402_76046 = state_74353__$1;
(statearr_74402_76046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74354 === (11))){
var inst_74328 = (state_74353[(8)]);
var inst_74340 = (state_74353[(2)]);
var inst_74341 = (inst_74328 + (1));
var inst_74328__$1 = inst_74341;
var state_74353__$1 = (function (){var statearr_74404 = state_74353;
(statearr_74404[(10)] = inst_74340);

(statearr_74404[(8)] = inst_74328__$1);

return statearr_74404;
})();
var statearr_74405_76047 = state_74353__$1;
(statearr_74405_76047[(2)] = null);

(statearr_74405_76047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74354 === (9))){
var state_74353__$1 = state_74353;
var statearr_74408_76048 = state_74353__$1;
(statearr_74408_76048[(2)] = null);

(statearr_74408_76048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74354 === (5))){
var state_74353__$1 = state_74353;
var statearr_74410_76050 = state_74353__$1;
(statearr_74410_76050[(2)] = null);

(statearr_74410_76050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74354 === (10))){
var inst_74345 = (state_74353[(2)]);
var state_74353__$1 = state_74353;
var statearr_74411_76054 = state_74353__$1;
(statearr_74411_76054[(2)] = inst_74345);

(statearr_74411_76054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74354 === (8))){
var inst_74334 = (state_74353[(7)]);
var state_74353__$1 = state_74353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74353__$1,(11),out,inst_74334);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_74412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74412[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_74412[(1)] = (1));

return statearr_74412;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_74353){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_74353);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e74413){var ex__59460__auto__ = e74413;
var statearr_74414_76060 = state_74353;
(statearr_74414_76060[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_74353[(4)]))){
var statearr_74417_76061 = state_74353;
(statearr_74417_76061[(1)] = cljs.core.first((state_74353[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76062 = state_74353;
state_74353 = G__76062;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_74353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_74353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_74420 = f__59924__auto__();
(statearr_74420[(6)] = c__59922__auto___76034);

return statearr_74420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74443 = (function (f,ch,meta74424,_,fn1,meta74444){
this.f = f;
this.ch = ch;
this.meta74424 = meta74424;
this._ = _;
this.fn1 = fn1;
this.meta74444 = meta74444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74445,meta74444__$1){
var self__ = this;
var _74445__$1 = this;
return (new cljs.core.async.t_cljs$core$async74443(self__.f,self__.ch,self__.meta74424,self__._,self__.fn1,meta74444__$1));
}));

(cljs.core.async.t_cljs$core$async74443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74445){
var self__ = this;
var _74445__$1 = this;
return self__.meta74444;
}));

(cljs.core.async.t_cljs$core$async74443.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async74443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async74443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__74421_SHARP_){
var G__74455 = (((p1__74421_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__74421_SHARP_) : self__.f.call(null,p1__74421_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__74455) : f1.call(null,G__74455));
});
}));

(cljs.core.async.t_cljs$core$async74443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74424","meta74424",706900023,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async74423","cljs.core.async/t_cljs$core$async74423",1884013852,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta74444","meta74444",-1612874346,null)], null);
}));

(cljs.core.async.t_cljs$core$async74443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74443");

(cljs.core.async.t_cljs$core$async74443.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async74443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74443.
 */
cljs.core.async.__GT_t_cljs$core$async74443 = (function cljs$core$async$__GT_t_cljs$core$async74443(f,ch,meta74424,_,fn1,meta74444){
return (new cljs.core.async.t_cljs$core$async74443(f,ch,meta74424,_,fn1,meta74444));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74423 = (function (f,ch,meta74424){
this.f = f;
this.ch = ch;
this.meta74424 = meta74424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74425,meta74424__$1){
var self__ = this;
var _74425__$1 = this;
return (new cljs.core.async.t_cljs$core$async74423(self__.f,self__.ch,meta74424__$1));
}));

(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74425){
var self__ = this;
var _74425__$1 = this;
return self__.meta74424;
}));

(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async74443(self__.f,self__.ch,self__.meta74424,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__74463 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__74463) : self__.f.call(null,G__74463));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async74423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74424","meta74424",706900023,null)], null);
}));

(cljs.core.async.t_cljs$core$async74423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74423");

(cljs.core.async.t_cljs$core$async74423.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async74423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74423.
 */
cljs.core.async.__GT_t_cljs$core$async74423 = (function cljs$core$async$__GT_t_cljs$core$async74423(f,ch,meta74424){
return (new cljs.core.async.t_cljs$core$async74423(f,ch,meta74424));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async74423(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74482 = (function (f,ch,meta74483){
this.f = f;
this.ch = ch;
this.meta74483 = meta74483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74484,meta74483__$1){
var self__ = this;
var _74484__$1 = this;
return (new cljs.core.async.t_cljs$core$async74482(self__.f,self__.ch,meta74483__$1));
}));

(cljs.core.async.t_cljs$core$async74482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74484){
var self__ = this;
var _74484__$1 = this;
return self__.meta74483;
}));

(cljs.core.async.t_cljs$core$async74482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async74482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async74482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74483","meta74483",226896731,null)], null);
}));

(cljs.core.async.t_cljs$core$async74482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74482");

(cljs.core.async.t_cljs$core$async74482.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async74482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74482.
 */
cljs.core.async.__GT_t_cljs$core$async74482 = (function cljs$core$async$__GT_t_cljs$core$async74482(f,ch,meta74483){
return (new cljs.core.async.t_cljs$core$async74482(f,ch,meta74483));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async74482(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74505 = (function (p,ch,meta74506){
this.p = p;
this.ch = ch;
this.meta74506 = meta74506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74507,meta74506__$1){
var self__ = this;
var _74507__$1 = this;
return (new cljs.core.async.t_cljs$core$async74505(self__.p,self__.ch,meta74506__$1));
}));

(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74507){
var self__ = this;
var _74507__$1 = this;
return self__.meta74506;
}));

(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74505.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async74505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74506","meta74506",-426938351,null)], null);
}));

(cljs.core.async.t_cljs$core$async74505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74505");

(cljs.core.async.t_cljs$core$async74505.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async74505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74505.
 */
cljs.core.async.__GT_t_cljs$core$async74505 = (function cljs$core$async$__GT_t_cljs$core$async74505(p,ch,meta74506){
return (new cljs.core.async.t_cljs$core$async74505(p,ch,meta74506));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async74505(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__74521 = arguments.length;
switch (G__74521) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59922__auto___76109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_74553){
var state_val_74554 = (state_74553[(1)]);
if((state_val_74554 === (7))){
var inst_74547 = (state_74553[(2)]);
var state_74553__$1 = state_74553;
var statearr_74565_76113 = state_74553__$1;
(statearr_74565_76113[(2)] = inst_74547);

(statearr_74565_76113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74554 === (1))){
var state_74553__$1 = state_74553;
var statearr_74566_76114 = state_74553__$1;
(statearr_74566_76114[(2)] = null);

(statearr_74566_76114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74554 === (4))){
var inst_74531 = (state_74553[(7)]);
var inst_74531__$1 = (state_74553[(2)]);
var inst_74532 = (inst_74531__$1 == null);
var state_74553__$1 = (function (){var statearr_74568 = state_74553;
(statearr_74568[(7)] = inst_74531__$1);

return statearr_74568;
})();
if(cljs.core.truth_(inst_74532)){
var statearr_74573_76119 = state_74553__$1;
(statearr_74573_76119[(1)] = (5));

} else {
var statearr_74575_76120 = state_74553__$1;
(statearr_74575_76120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74554 === (6))){
var inst_74531 = (state_74553[(7)]);
var inst_74536 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_74531) : p.call(null,inst_74531));
var state_74553__$1 = state_74553;
if(cljs.core.truth_(inst_74536)){
var statearr_74577_76124 = state_74553__$1;
(statearr_74577_76124[(1)] = (8));

} else {
var statearr_74579_76128 = state_74553__$1;
(statearr_74579_76128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74554 === (3))){
var inst_74551 = (state_74553[(2)]);
var state_74553__$1 = state_74553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74553__$1,inst_74551);
} else {
if((state_val_74554 === (2))){
var state_74553__$1 = state_74553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74553__$1,(4),ch);
} else {
if((state_val_74554 === (11))){
var inst_74540 = (state_74553[(2)]);
var state_74553__$1 = state_74553;
var statearr_74588_76139 = state_74553__$1;
(statearr_74588_76139[(2)] = inst_74540);

(statearr_74588_76139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74554 === (9))){
var state_74553__$1 = state_74553;
var statearr_74589_76143 = state_74553__$1;
(statearr_74589_76143[(2)] = null);

(statearr_74589_76143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74554 === (5))){
var inst_74534 = cljs.core.async.close_BANG_(out);
var state_74553__$1 = state_74553;
var statearr_74591_76147 = state_74553__$1;
(statearr_74591_76147[(2)] = inst_74534);

(statearr_74591_76147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74554 === (10))){
var inst_74543 = (state_74553[(2)]);
var state_74553__$1 = (function (){var statearr_74593 = state_74553;
(statearr_74593[(8)] = inst_74543);

return statearr_74593;
})();
var statearr_74594_76151 = state_74553__$1;
(statearr_74594_76151[(2)] = null);

(statearr_74594_76151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74554 === (8))){
var inst_74531 = (state_74553[(7)]);
var state_74553__$1 = state_74553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74553__$1,(11),out,inst_74531);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_74595 = [null,null,null,null,null,null,null,null,null];
(statearr_74595[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_74595[(1)] = (1));

return statearr_74595;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_74553){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_74553);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e74596){var ex__59460__auto__ = e74596;
var statearr_74598_76156 = state_74553;
(statearr_74598_76156[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_74553[(4)]))){
var statearr_74599_76157 = state_74553;
(statearr_74599_76157[(1)] = cljs.core.first((state_74553[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76161 = state_74553;
state_74553 = G__76161;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_74553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_74553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_74601 = f__59924__auto__();
(statearr_74601[(6)] = c__59922__auto___76109);

return statearr_74601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__74607 = arguments.length;
switch (G__74607) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__59922__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_74687){
var state_val_74688 = (state_74687[(1)]);
if((state_val_74688 === (7))){
var inst_74683 = (state_74687[(2)]);
var state_74687__$1 = state_74687;
var statearr_74690_76168 = state_74687__$1;
(statearr_74690_76168[(2)] = inst_74683);

(statearr_74690_76168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (20))){
var inst_74652 = (state_74687[(7)]);
var inst_74664 = (state_74687[(2)]);
var inst_74665 = cljs.core.next(inst_74652);
var inst_74634 = inst_74665;
var inst_74635 = null;
var inst_74636 = (0);
var inst_74637 = (0);
var state_74687__$1 = (function (){var statearr_74692 = state_74687;
(statearr_74692[(8)] = inst_74664);

(statearr_74692[(9)] = inst_74634);

(statearr_74692[(10)] = inst_74635);

(statearr_74692[(11)] = inst_74636);

(statearr_74692[(12)] = inst_74637);

return statearr_74692;
})();
var statearr_74695_76169 = state_74687__$1;
(statearr_74695_76169[(2)] = null);

(statearr_74695_76169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (1))){
var state_74687__$1 = state_74687;
var statearr_74697_76176 = state_74687__$1;
(statearr_74697_76176[(2)] = null);

(statearr_74697_76176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (4))){
var inst_74623 = (state_74687[(13)]);
var inst_74623__$1 = (state_74687[(2)]);
var inst_74624 = (inst_74623__$1 == null);
var state_74687__$1 = (function (){var statearr_74699 = state_74687;
(statearr_74699[(13)] = inst_74623__$1);

return statearr_74699;
})();
if(cljs.core.truth_(inst_74624)){
var statearr_74700_76182 = state_74687__$1;
(statearr_74700_76182[(1)] = (5));

} else {
var statearr_74702_76184 = state_74687__$1;
(statearr_74702_76184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (15))){
var state_74687__$1 = state_74687;
var statearr_74709_76185 = state_74687__$1;
(statearr_74709_76185[(2)] = null);

(statearr_74709_76185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (21))){
var state_74687__$1 = state_74687;
var statearr_74710_76186 = state_74687__$1;
(statearr_74710_76186[(2)] = null);

(statearr_74710_76186[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (13))){
var inst_74637 = (state_74687[(12)]);
var inst_74634 = (state_74687[(9)]);
var inst_74635 = (state_74687[(10)]);
var inst_74636 = (state_74687[(11)]);
var inst_74645 = (state_74687[(2)]);
var inst_74646 = (inst_74637 + (1));
var tmp74703 = inst_74634;
var tmp74704 = inst_74635;
var tmp74705 = inst_74636;
var inst_74634__$1 = tmp74703;
var inst_74635__$1 = tmp74704;
var inst_74636__$1 = tmp74705;
var inst_74637__$1 = inst_74646;
var state_74687__$1 = (function (){var statearr_74711 = state_74687;
(statearr_74711[(14)] = inst_74645);

(statearr_74711[(9)] = inst_74634__$1);

(statearr_74711[(10)] = inst_74635__$1);

(statearr_74711[(11)] = inst_74636__$1);

(statearr_74711[(12)] = inst_74637__$1);

return statearr_74711;
})();
var statearr_74712_76193 = state_74687__$1;
(statearr_74712_76193[(2)] = null);

(statearr_74712_76193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (22))){
var state_74687__$1 = state_74687;
var statearr_74713_76198 = state_74687__$1;
(statearr_74713_76198[(2)] = null);

(statearr_74713_76198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (6))){
var inst_74623 = (state_74687[(13)]);
var inst_74632 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_74623) : f.call(null,inst_74623));
var inst_74633 = cljs.core.seq(inst_74632);
var inst_74634 = inst_74633;
var inst_74635 = null;
var inst_74636 = (0);
var inst_74637 = (0);
var state_74687__$1 = (function (){var statearr_74714 = state_74687;
(statearr_74714[(9)] = inst_74634);

(statearr_74714[(10)] = inst_74635);

(statearr_74714[(11)] = inst_74636);

(statearr_74714[(12)] = inst_74637);

return statearr_74714;
})();
var statearr_74715_76208 = state_74687__$1;
(statearr_74715_76208[(2)] = null);

(statearr_74715_76208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (17))){
var inst_74652 = (state_74687[(7)]);
var inst_74657 = cljs.core.chunk_first(inst_74652);
var inst_74658 = cljs.core.chunk_rest(inst_74652);
var inst_74659 = cljs.core.count(inst_74657);
var inst_74634 = inst_74658;
var inst_74635 = inst_74657;
var inst_74636 = inst_74659;
var inst_74637 = (0);
var state_74687__$1 = (function (){var statearr_74718 = state_74687;
(statearr_74718[(9)] = inst_74634);

(statearr_74718[(10)] = inst_74635);

(statearr_74718[(11)] = inst_74636);

(statearr_74718[(12)] = inst_74637);

return statearr_74718;
})();
var statearr_74723_76224 = state_74687__$1;
(statearr_74723_76224[(2)] = null);

(statearr_74723_76224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (3))){
var inst_74685 = (state_74687[(2)]);
var state_74687__$1 = state_74687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74687__$1,inst_74685);
} else {
if((state_val_74688 === (12))){
var inst_74673 = (state_74687[(2)]);
var state_74687__$1 = state_74687;
var statearr_74728_76236 = state_74687__$1;
(statearr_74728_76236[(2)] = inst_74673);

(statearr_74728_76236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (2))){
var state_74687__$1 = state_74687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74687__$1,(4),in$);
} else {
if((state_val_74688 === (23))){
var inst_74681 = (state_74687[(2)]);
var state_74687__$1 = state_74687;
var statearr_74730_76242 = state_74687__$1;
(statearr_74730_76242[(2)] = inst_74681);

(statearr_74730_76242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (19))){
var inst_74668 = (state_74687[(2)]);
var state_74687__$1 = state_74687;
var statearr_74731_76243 = state_74687__$1;
(statearr_74731_76243[(2)] = inst_74668);

(statearr_74731_76243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (11))){
var inst_74634 = (state_74687[(9)]);
var inst_74652 = (state_74687[(7)]);
var inst_74652__$1 = cljs.core.seq(inst_74634);
var state_74687__$1 = (function (){var statearr_74732 = state_74687;
(statearr_74732[(7)] = inst_74652__$1);

return statearr_74732;
})();
if(inst_74652__$1){
var statearr_74733_76245 = state_74687__$1;
(statearr_74733_76245[(1)] = (14));

} else {
var statearr_74734_76246 = state_74687__$1;
(statearr_74734_76246[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (9))){
var inst_74675 = (state_74687[(2)]);
var inst_74676 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_74687__$1 = (function (){var statearr_74736 = state_74687;
(statearr_74736[(15)] = inst_74675);

return statearr_74736;
})();
if(cljs.core.truth_(inst_74676)){
var statearr_74739_76249 = state_74687__$1;
(statearr_74739_76249[(1)] = (21));

} else {
var statearr_74740_76250 = state_74687__$1;
(statearr_74740_76250[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (5))){
var inst_74626 = cljs.core.async.close_BANG_(out);
var state_74687__$1 = state_74687;
var statearr_74742_76252 = state_74687__$1;
(statearr_74742_76252[(2)] = inst_74626);

(statearr_74742_76252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (14))){
var inst_74652 = (state_74687[(7)]);
var inst_74655 = cljs.core.chunked_seq_QMARK_(inst_74652);
var state_74687__$1 = state_74687;
if(inst_74655){
var statearr_74746_76253 = state_74687__$1;
(statearr_74746_76253[(1)] = (17));

} else {
var statearr_74748_76254 = state_74687__$1;
(statearr_74748_76254[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (16))){
var inst_74671 = (state_74687[(2)]);
var state_74687__$1 = state_74687;
var statearr_74752_76255 = state_74687__$1;
(statearr_74752_76255[(2)] = inst_74671);

(statearr_74752_76255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (10))){
var inst_74635 = (state_74687[(10)]);
var inst_74637 = (state_74687[(12)]);
var inst_74643 = cljs.core._nth(inst_74635,inst_74637);
var state_74687__$1 = state_74687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74687__$1,(13),out,inst_74643);
} else {
if((state_val_74688 === (18))){
var inst_74652 = (state_74687[(7)]);
var inst_74662 = cljs.core.first(inst_74652);
var state_74687__$1 = state_74687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74687__$1,(20),out,inst_74662);
} else {
if((state_val_74688 === (8))){
var inst_74637 = (state_74687[(12)]);
var inst_74636 = (state_74687[(11)]);
var inst_74639 = (inst_74637 < inst_74636);
var inst_74640 = inst_74639;
var state_74687__$1 = state_74687;
if(cljs.core.truth_(inst_74640)){
var statearr_74753_76256 = state_74687__$1;
(statearr_74753_76256[(1)] = (10));

} else {
var statearr_74754_76257 = state_74687__$1;
(statearr_74754_76257[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__59457__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__59457__auto____0 = (function (){
var statearr_74755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74755[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__59457__auto__);

(statearr_74755[(1)] = (1));

return statearr_74755;
});
var cljs$core$async$mapcat_STAR__$_state_machine__59457__auto____1 = (function (state_74687){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_74687);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e74756){var ex__59460__auto__ = e74756;
var statearr_74757_76263 = state_74687;
(statearr_74757_76263[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_74687[(4)]))){
var statearr_74758_76266 = state_74687;
(statearr_74758_76266[(1)] = cljs.core.first((state_74687[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76267 = state_74687;
state_74687 = G__76267;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__59457__auto__ = function(state_74687){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__59457__auto____1.call(this,state_74687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__59457__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__59457__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_74760 = f__59924__auto__();
(statearr_74760[(6)] = c__59922__auto__);

return statearr_74760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));

return c__59922__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__74767 = arguments.length;
switch (G__74767) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__74784 = arguments.length;
switch (G__74784) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__74812 = arguments.length;
switch (G__74812) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59922__auto___76272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_74854){
var state_val_74855 = (state_74854[(1)]);
if((state_val_74855 === (7))){
var inst_74849 = (state_74854[(2)]);
var state_74854__$1 = state_74854;
var statearr_74862_76274 = state_74854__$1;
(statearr_74862_76274[(2)] = inst_74849);

(statearr_74862_76274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74855 === (1))){
var inst_74828 = null;
var state_74854__$1 = (function (){var statearr_74864 = state_74854;
(statearr_74864[(7)] = inst_74828);

return statearr_74864;
})();
var statearr_74867_76275 = state_74854__$1;
(statearr_74867_76275[(2)] = null);

(statearr_74867_76275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74855 === (4))){
var inst_74832 = (state_74854[(8)]);
var inst_74832__$1 = (state_74854[(2)]);
var inst_74835 = (inst_74832__$1 == null);
var inst_74836 = cljs.core.not(inst_74835);
var state_74854__$1 = (function (){var statearr_74870 = state_74854;
(statearr_74870[(8)] = inst_74832__$1);

return statearr_74870;
})();
if(inst_74836){
var statearr_74874_76276 = state_74854__$1;
(statearr_74874_76276[(1)] = (5));

} else {
var statearr_74878_76277 = state_74854__$1;
(statearr_74878_76277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74855 === (6))){
var state_74854__$1 = state_74854;
var statearr_74883_76278 = state_74854__$1;
(statearr_74883_76278[(2)] = null);

(statearr_74883_76278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74855 === (3))){
var inst_74851 = (state_74854[(2)]);
var inst_74852 = cljs.core.async.close_BANG_(out);
var state_74854__$1 = (function (){var statearr_74888 = state_74854;
(statearr_74888[(9)] = inst_74851);

return statearr_74888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74854__$1,inst_74852);
} else {
if((state_val_74855 === (2))){
var state_74854__$1 = state_74854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74854__$1,(4),ch);
} else {
if((state_val_74855 === (11))){
var inst_74832 = (state_74854[(8)]);
var inst_74843 = (state_74854[(2)]);
var inst_74828 = inst_74832;
var state_74854__$1 = (function (){var statearr_74893 = state_74854;
(statearr_74893[(10)] = inst_74843);

(statearr_74893[(7)] = inst_74828);

return statearr_74893;
})();
var statearr_74894_76280 = state_74854__$1;
(statearr_74894_76280[(2)] = null);

(statearr_74894_76280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74855 === (9))){
var inst_74832 = (state_74854[(8)]);
var state_74854__$1 = state_74854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74854__$1,(11),out,inst_74832);
} else {
if((state_val_74855 === (5))){
var inst_74832 = (state_74854[(8)]);
var inst_74828 = (state_74854[(7)]);
var inst_74838 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74832,inst_74828);
var state_74854__$1 = state_74854;
if(inst_74838){
var statearr_74905_76281 = state_74854__$1;
(statearr_74905_76281[(1)] = (8));

} else {
var statearr_74906_76283 = state_74854__$1;
(statearr_74906_76283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74855 === (10))){
var inst_74846 = (state_74854[(2)]);
var state_74854__$1 = state_74854;
var statearr_74907_76284 = state_74854__$1;
(statearr_74907_76284[(2)] = inst_74846);

(statearr_74907_76284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74855 === (8))){
var inst_74828 = (state_74854[(7)]);
var tmp74901 = inst_74828;
var inst_74828__$1 = tmp74901;
var state_74854__$1 = (function (){var statearr_74911 = state_74854;
(statearr_74911[(7)] = inst_74828__$1);

return statearr_74911;
})();
var statearr_74912_76285 = state_74854__$1;
(statearr_74912_76285[(2)] = null);

(statearr_74912_76285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_74917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74917[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_74917[(1)] = (1));

return statearr_74917;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_74854){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_74854);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e74918){var ex__59460__auto__ = e74918;
var statearr_74919_76287 = state_74854;
(statearr_74919_76287[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_74854[(4)]))){
var statearr_74920_76289 = state_74854;
(statearr_74920_76289[(1)] = cljs.core.first((state_74854[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76291 = state_74854;
state_74854 = G__76291;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_74854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_74854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_74929 = f__59924__auto__();
(statearr_74929[(6)] = c__59922__auto___76272);

return statearr_74929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__74937 = arguments.length;
switch (G__74937) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59922__auto___76297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_74995){
var state_val_74996 = (state_74995[(1)]);
if((state_val_74996 === (7))){
var inst_74990 = (state_74995[(2)]);
var state_74995__$1 = state_74995;
var statearr_75001_76299 = state_74995__$1;
(statearr_75001_76299[(2)] = inst_74990);

(statearr_75001_76299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (1))){
var inst_74951 = (new Array(n));
var inst_74952 = inst_74951;
var inst_74953 = (0);
var state_74995__$1 = (function (){var statearr_75002 = state_74995;
(statearr_75002[(7)] = inst_74952);

(statearr_75002[(8)] = inst_74953);

return statearr_75002;
})();
var statearr_75003_76301 = state_74995__$1;
(statearr_75003_76301[(2)] = null);

(statearr_75003_76301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (4))){
var inst_74958 = (state_74995[(9)]);
var inst_74958__$1 = (state_74995[(2)]);
var inst_74960 = (inst_74958__$1 == null);
var inst_74961 = cljs.core.not(inst_74960);
var state_74995__$1 = (function (){var statearr_75005 = state_74995;
(statearr_75005[(9)] = inst_74958__$1);

return statearr_75005;
})();
if(inst_74961){
var statearr_75009_76303 = state_74995__$1;
(statearr_75009_76303[(1)] = (5));

} else {
var statearr_75014_76304 = state_74995__$1;
(statearr_75014_76304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (15))){
var inst_74984 = (state_74995[(2)]);
var state_74995__$1 = state_74995;
var statearr_75018_76309 = state_74995__$1;
(statearr_75018_76309[(2)] = inst_74984);

(statearr_75018_76309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (13))){
var state_74995__$1 = state_74995;
var statearr_75020_76310 = state_74995__$1;
(statearr_75020_76310[(2)] = null);

(statearr_75020_76310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (6))){
var inst_74953 = (state_74995[(8)]);
var inst_74980 = (inst_74953 > (0));
var state_74995__$1 = state_74995;
if(cljs.core.truth_(inst_74980)){
var statearr_75023_76311 = state_74995__$1;
(statearr_75023_76311[(1)] = (12));

} else {
var statearr_75024_76312 = state_74995__$1;
(statearr_75024_76312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (3))){
var inst_74992 = (state_74995[(2)]);
var state_74995__$1 = state_74995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74995__$1,inst_74992);
} else {
if((state_val_74996 === (12))){
var inst_74952 = (state_74995[(7)]);
var inst_74982 = cljs.core.vec(inst_74952);
var state_74995__$1 = state_74995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74995__$1,(15),out,inst_74982);
} else {
if((state_val_74996 === (2))){
var state_74995__$1 = state_74995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74995__$1,(4),ch);
} else {
if((state_val_74996 === (11))){
var inst_74974 = (state_74995[(2)]);
var inst_74975 = (new Array(n));
var inst_74952 = inst_74975;
var inst_74953 = (0);
var state_74995__$1 = (function (){var statearr_75033 = state_74995;
(statearr_75033[(10)] = inst_74974);

(statearr_75033[(7)] = inst_74952);

(statearr_75033[(8)] = inst_74953);

return statearr_75033;
})();
var statearr_75034_76313 = state_74995__$1;
(statearr_75034_76313[(2)] = null);

(statearr_75034_76313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (9))){
var inst_74952 = (state_74995[(7)]);
var inst_74972 = cljs.core.vec(inst_74952);
var state_74995__$1 = state_74995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74995__$1,(11),out,inst_74972);
} else {
if((state_val_74996 === (5))){
var inst_74952 = (state_74995[(7)]);
var inst_74953 = (state_74995[(8)]);
var inst_74958 = (state_74995[(9)]);
var inst_74965 = (state_74995[(11)]);
var inst_74964 = (inst_74952[inst_74953] = inst_74958);
var inst_74965__$1 = (inst_74953 + (1));
var inst_74966 = (inst_74965__$1 < n);
var state_74995__$1 = (function (){var statearr_75043 = state_74995;
(statearr_75043[(12)] = inst_74964);

(statearr_75043[(11)] = inst_74965__$1);

return statearr_75043;
})();
if(cljs.core.truth_(inst_74966)){
var statearr_75046_76314 = state_74995__$1;
(statearr_75046_76314[(1)] = (8));

} else {
var statearr_75047_76315 = state_74995__$1;
(statearr_75047_76315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (14))){
var inst_74987 = (state_74995[(2)]);
var inst_74988 = cljs.core.async.close_BANG_(out);
var state_74995__$1 = (function (){var statearr_75053 = state_74995;
(statearr_75053[(13)] = inst_74987);

return statearr_75053;
})();
var statearr_75054_76316 = state_74995__$1;
(statearr_75054_76316[(2)] = inst_74988);

(statearr_75054_76316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (10))){
var inst_74978 = (state_74995[(2)]);
var state_74995__$1 = state_74995;
var statearr_75055_76317 = state_74995__$1;
(statearr_75055_76317[(2)] = inst_74978);

(statearr_75055_76317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74996 === (8))){
var inst_74952 = (state_74995[(7)]);
var inst_74965 = (state_74995[(11)]);
var tmp75052 = inst_74952;
var inst_74952__$1 = tmp75052;
var inst_74953 = inst_74965;
var state_74995__$1 = (function (){var statearr_75056 = state_74995;
(statearr_75056[(7)] = inst_74952__$1);

(statearr_75056[(8)] = inst_74953);

return statearr_75056;
})();
var statearr_75057_76318 = state_74995__$1;
(statearr_75057_76318[(2)] = null);

(statearr_75057_76318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_75060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75060[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_75060[(1)] = (1));

return statearr_75060;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_74995){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_74995);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e75067){var ex__59460__auto__ = e75067;
var statearr_75068_76320 = state_74995;
(statearr_75068_76320[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_74995[(4)]))){
var statearr_75069_76321 = state_74995;
(statearr_75069_76321[(1)] = cljs.core.first((state_74995[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76322 = state_74995;
state_74995 = G__76322;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_74995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_74995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_75074 = f__59924__auto__();
(statearr_75074[(6)] = c__59922__auto___76297);

return statearr_75074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__75089 = arguments.length;
switch (G__75089) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59922__auto___76324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59924__auto__ = (function (){var switch__59456__auto__ = (function (state_75157){
var state_val_75158 = (state_75157[(1)]);
if((state_val_75158 === (7))){
var inst_75151 = (state_75157[(2)]);
var state_75157__$1 = state_75157;
var statearr_75166_76325 = state_75157__$1;
(statearr_75166_76325[(2)] = inst_75151);

(statearr_75166_76325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (1))){
var inst_75102 = [];
var inst_75103 = inst_75102;
var inst_75104 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_75157__$1 = (function (){var statearr_75173 = state_75157;
(statearr_75173[(7)] = inst_75103);

(statearr_75173[(8)] = inst_75104);

return statearr_75173;
})();
var statearr_75179_76326 = state_75157__$1;
(statearr_75179_76326[(2)] = null);

(statearr_75179_76326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (4))){
var inst_75107 = (state_75157[(9)]);
var inst_75107__$1 = (state_75157[(2)]);
var inst_75108 = (inst_75107__$1 == null);
var inst_75109 = cljs.core.not(inst_75108);
var state_75157__$1 = (function (){var statearr_75180 = state_75157;
(statearr_75180[(9)] = inst_75107__$1);

return statearr_75180;
})();
if(inst_75109){
var statearr_75181_76327 = state_75157__$1;
(statearr_75181_76327[(1)] = (5));

} else {
var statearr_75182_76328 = state_75157__$1;
(statearr_75182_76328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (15))){
var inst_75103 = (state_75157[(7)]);
var inst_75143 = cljs.core.vec(inst_75103);
var state_75157__$1 = state_75157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75157__$1,(18),out,inst_75143);
} else {
if((state_val_75158 === (13))){
var inst_75138 = (state_75157[(2)]);
var state_75157__$1 = state_75157;
var statearr_75184_76329 = state_75157__$1;
(statearr_75184_76329[(2)] = inst_75138);

(statearr_75184_76329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (6))){
var inst_75103 = (state_75157[(7)]);
var inst_75140 = inst_75103.length;
var inst_75141 = (inst_75140 > (0));
var state_75157__$1 = state_75157;
if(cljs.core.truth_(inst_75141)){
var statearr_75185_76330 = state_75157__$1;
(statearr_75185_76330[(1)] = (15));

} else {
var statearr_75187_76331 = state_75157__$1;
(statearr_75187_76331[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (17))){
var inst_75148 = (state_75157[(2)]);
var inst_75149 = cljs.core.async.close_BANG_(out);
var state_75157__$1 = (function (){var statearr_75191 = state_75157;
(statearr_75191[(10)] = inst_75148);

return statearr_75191;
})();
var statearr_75193_76332 = state_75157__$1;
(statearr_75193_76332[(2)] = inst_75149);

(statearr_75193_76332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (3))){
var inst_75153 = (state_75157[(2)]);
var state_75157__$1 = state_75157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75157__$1,inst_75153);
} else {
if((state_val_75158 === (12))){
var inst_75103 = (state_75157[(7)]);
var inst_75127 = cljs.core.vec(inst_75103);
var state_75157__$1 = state_75157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75157__$1,(14),out,inst_75127);
} else {
if((state_val_75158 === (2))){
var state_75157__$1 = state_75157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75157__$1,(4),ch);
} else {
if((state_val_75158 === (11))){
var inst_75103 = (state_75157[(7)]);
var inst_75107 = (state_75157[(9)]);
var inst_75112 = (state_75157[(11)]);
var inst_75124 = inst_75103.push(inst_75107);
var tmp75194 = inst_75103;
var inst_75103__$1 = tmp75194;
var inst_75104 = inst_75112;
var state_75157__$1 = (function (){var statearr_75195 = state_75157;
(statearr_75195[(12)] = inst_75124);

(statearr_75195[(7)] = inst_75103__$1);

(statearr_75195[(8)] = inst_75104);

return statearr_75195;
})();
var statearr_75196_76333 = state_75157__$1;
(statearr_75196_76333[(2)] = null);

(statearr_75196_76333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (9))){
var inst_75104 = (state_75157[(8)]);
var inst_75118 = cljs.core.keyword_identical_QMARK_(inst_75104,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_75157__$1 = state_75157;
var statearr_75197_76334 = state_75157__$1;
(statearr_75197_76334[(2)] = inst_75118);

(statearr_75197_76334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (5))){
var inst_75107 = (state_75157[(9)]);
var inst_75112 = (state_75157[(11)]);
var inst_75104 = (state_75157[(8)]);
var inst_75113 = (state_75157[(13)]);
var inst_75112__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_75107) : f.call(null,inst_75107));
var inst_75113__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75112__$1,inst_75104);
var state_75157__$1 = (function (){var statearr_75199 = state_75157;
(statearr_75199[(11)] = inst_75112__$1);

(statearr_75199[(13)] = inst_75113__$1);

return statearr_75199;
})();
if(inst_75113__$1){
var statearr_75200_76335 = state_75157__$1;
(statearr_75200_76335[(1)] = (8));

} else {
var statearr_75201_76337 = state_75157__$1;
(statearr_75201_76337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (14))){
var inst_75107 = (state_75157[(9)]);
var inst_75112 = (state_75157[(11)]);
var inst_75129 = (state_75157[(2)]);
var inst_75130 = [];
var inst_75131 = inst_75130.push(inst_75107);
var inst_75103 = inst_75130;
var inst_75104 = inst_75112;
var state_75157__$1 = (function (){var statearr_75202 = state_75157;
(statearr_75202[(14)] = inst_75129);

(statearr_75202[(15)] = inst_75131);

(statearr_75202[(7)] = inst_75103);

(statearr_75202[(8)] = inst_75104);

return statearr_75202;
})();
var statearr_75206_76338 = state_75157__$1;
(statearr_75206_76338[(2)] = null);

(statearr_75206_76338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (16))){
var state_75157__$1 = state_75157;
var statearr_75208_76339 = state_75157__$1;
(statearr_75208_76339[(2)] = null);

(statearr_75208_76339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (10))){
var inst_75120 = (state_75157[(2)]);
var state_75157__$1 = state_75157;
if(cljs.core.truth_(inst_75120)){
var statearr_75209_76341 = state_75157__$1;
(statearr_75209_76341[(1)] = (11));

} else {
var statearr_75210_76342 = state_75157__$1;
(statearr_75210_76342[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (18))){
var inst_75145 = (state_75157[(2)]);
var state_75157__$1 = state_75157;
var statearr_75211_76343 = state_75157__$1;
(statearr_75211_76343[(2)] = inst_75145);

(statearr_75211_76343[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75158 === (8))){
var inst_75113 = (state_75157[(13)]);
var state_75157__$1 = state_75157;
var statearr_75220_76344 = state_75157__$1;
(statearr_75220_76344[(2)] = inst_75113);

(statearr_75220_76344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59457__auto__ = null;
var cljs$core$async$state_machine__59457__auto____0 = (function (){
var statearr_75229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75229[(0)] = cljs$core$async$state_machine__59457__auto__);

(statearr_75229[(1)] = (1));

return statearr_75229;
});
var cljs$core$async$state_machine__59457__auto____1 = (function (state_75157){
while(true){
var ret_value__59458__auto__ = (function (){try{while(true){
var result__59459__auto__ = switch__59456__auto__(state_75157);
if(cljs.core.keyword_identical_QMARK_(result__59459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59459__auto__;
}
break;
}
}catch (e75232){var ex__59460__auto__ = e75232;
var statearr_75233_76345 = state_75157;
(statearr_75233_76345[(2)] = ex__59460__auto__);


if(cljs.core.seq((state_75157[(4)]))){
var statearr_75234_76346 = state_75157;
(statearr_75234_76346[(1)] = cljs.core.first((state_75157[(4)])));

} else {
throw ex__59460__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76347 = state_75157;
state_75157 = G__76347;
continue;
} else {
return ret_value__59458__auto__;
}
break;
}
});
cljs$core$async$state_machine__59457__auto__ = function(state_75157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59457__auto____1.call(this,state_75157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59457__auto____0;
cljs$core$async$state_machine__59457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59457__auto____1;
return cljs$core$async$state_machine__59457__auto__;
})()
})();
var state__59925__auto__ = (function (){var statearr_75236 = f__59924__auto__();
(statearr_75236[(6)] = c__59922__auto___76324);

return statearr_75236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59925__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
