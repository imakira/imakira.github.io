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
cljs.core.async.t_cljs$core$async70057 = (function (f,blockable,meta70058){
this.f = f;
this.blockable = blockable;
this.meta70058 = meta70058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70059,meta70058__$1){
var self__ = this;
var _70059__$1 = this;
return (new cljs.core.async.t_cljs$core$async70057(self__.f,self__.blockable,meta70058__$1));
}));

(cljs.core.async.t_cljs$core$async70057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70059){
var self__ = this;
var _70059__$1 = this;
return self__.meta70058;
}));

(cljs.core.async.t_cljs$core$async70057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async70057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async70057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta70058","meta70058",-122209695,null)], null);
}));

(cljs.core.async.t_cljs$core$async70057.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70057");

(cljs.core.async.t_cljs$core$async70057.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async70057");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70057.
 */
cljs.core.async.__GT_t_cljs$core$async70057 = (function cljs$core$async$__GT_t_cljs$core$async70057(f,blockable,meta70058){
return (new cljs.core.async.t_cljs$core$async70057(f,blockable,meta70058));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__70024 = arguments.length;
switch (G__70024) {
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
return (new cljs.core.async.t_cljs$core$async70057(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__70162 = arguments.length;
switch (G__70162) {
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
var G__70172 = arguments.length;
switch (G__70172) {
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
var G__70196 = arguments.length;
switch (G__70196) {
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
var val_73849 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_73849) : fn1.call(null,val_73849));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_73849) : fn1.call(null,val_73849));
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
var G__70332 = arguments.length;
switch (G__70332) {
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
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
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
var n__5740__auto___73854 = n;
var x_73855 = (0);
while(true){
if((x_73855 < n__5740__auto___73854)){
(a[x_73855] = x_73855);

var G__73856 = (x_73855 + (1));
x_73855 = G__73856;
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
cljs.core.async.t_cljs$core$async70363 = (function (flag,meta70364){
this.flag = flag;
this.meta70364 = meta70364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70365,meta70364__$1){
var self__ = this;
var _70365__$1 = this;
return (new cljs.core.async.t_cljs$core$async70363(self__.flag,meta70364__$1));
}));

(cljs.core.async.t_cljs$core$async70363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70365){
var self__ = this;
var _70365__$1 = this;
return self__.meta70364;
}));

(cljs.core.async.t_cljs$core$async70363.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async70363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async70363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta70364","meta70364",-2120732603,null)], null);
}));

(cljs.core.async.t_cljs$core$async70363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70363");

(cljs.core.async.t_cljs$core$async70363.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async70363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70363.
 */
cljs.core.async.__GT_t_cljs$core$async70363 = (function cljs$core$async$__GT_t_cljs$core$async70363(flag,meta70364){
return (new cljs.core.async.t_cljs$core$async70363(flag,meta70364));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async70363(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70380 = (function (flag,cb,meta70381){
this.flag = flag;
this.cb = cb;
this.meta70381 = meta70381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70382,meta70381__$1){
var self__ = this;
var _70382__$1 = this;
return (new cljs.core.async.t_cljs$core$async70380(self__.flag,self__.cb,meta70381__$1));
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70382){
var self__ = this;
var _70382__$1 = this;
return self__.meta70381;
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async70380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta70381","meta70381",-1951966315,null)], null);
}));

(cljs.core.async.t_cljs$core$async70380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70380");

(cljs.core.async.t_cljs$core$async70380.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async70380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70380.
 */
cljs.core.async.__GT_t_cljs$core$async70380 = (function cljs$core$async$__GT_t_cljs$core$async70380(flag,cb,meta70381){
return (new cljs.core.async.t_cljs$core$async70380(flag,cb,meta70381));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async70380(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_73861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_73861)){
if((!(((port_73861.cljs$core$IFn$_invoke$arity$1 ? port_73861.cljs$core$IFn$_invoke$arity$1((1)) : port_73861.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__73863 = (i + (1));
i = G__73863;
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
return (function (p1__70396_SHARP_){
var G__70414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70396_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__70414) : fret.call(null,G__70414));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__70397_SHARP_){
var G__70415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70397_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__70415) : fret.call(null,G__70415));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5141__auto__ = wport;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return port;
}
})()], null));
} else {
var G__73866 = (i + (1));
i = G__73866;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5141__auto__ = ret;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5139__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5139__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5139__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
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
var args__5881__auto__ = [];
var len__5875__auto___73867 = arguments.length;
var i__5876__auto___73868 = (0);
while(true){
if((i__5876__auto___73868 < len__5875__auto___73867)){
args__5881__auto__.push((arguments[i__5876__auto___73868]));

var G__73869 = (i__5876__auto___73868 + (1));
i__5876__auto___73868 = G__73869;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__70425){
var map__70426 = p__70425;
var map__70426__$1 = cljs.core.__destructure_map(map__70426);
var opts = map__70426__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq70418){
var G__70419 = cljs.core.first(seq70418);
var seq70418__$1 = cljs.core.next(seq70418);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70419,seq70418__$1);
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
var G__70442 = arguments.length;
switch (G__70442) {
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
var c__63208__auto___73874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_70513){
var state_val_70517 = (state_70513[(1)]);
if((state_val_70517 === (7))){
var inst_70500 = (state_70513[(2)]);
var state_70513__$1 = state_70513;
var statearr_70526_73875 = state_70513__$1;
(statearr_70526_73875[(2)] = inst_70500);

(statearr_70526_73875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (1))){
var state_70513__$1 = state_70513;
var statearr_70527_73876 = state_70513__$1;
(statearr_70527_73876[(2)] = null);

(statearr_70527_73876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (4))){
var inst_70469 = (state_70513[(7)]);
var inst_70469__$1 = (state_70513[(2)]);
var inst_70477 = (inst_70469__$1 == null);
var state_70513__$1 = (function (){var statearr_70533 = state_70513;
(statearr_70533[(7)] = inst_70469__$1);

return statearr_70533;
})();
if(cljs.core.truth_(inst_70477)){
var statearr_70534_73877 = state_70513__$1;
(statearr_70534_73877[(1)] = (5));

} else {
var statearr_70535_73878 = state_70513__$1;
(statearr_70535_73878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (13))){
var state_70513__$1 = state_70513;
var statearr_70539_73879 = state_70513__$1;
(statearr_70539_73879[(2)] = null);

(statearr_70539_73879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (6))){
var inst_70469 = (state_70513[(7)]);
var state_70513__$1 = state_70513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70513__$1,(11),to,inst_70469);
} else {
if((state_val_70517 === (3))){
var inst_70504 = (state_70513[(2)]);
var state_70513__$1 = state_70513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70513__$1,inst_70504);
} else {
if((state_val_70517 === (12))){
var state_70513__$1 = state_70513;
var statearr_70546_73882 = state_70513__$1;
(statearr_70546_73882[(2)] = null);

(statearr_70546_73882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (2))){
var state_70513__$1 = state_70513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70513__$1,(4),from);
} else {
if((state_val_70517 === (11))){
var inst_70491 = (state_70513[(2)]);
var state_70513__$1 = state_70513;
if(cljs.core.truth_(inst_70491)){
var statearr_70566_73883 = state_70513__$1;
(statearr_70566_73883[(1)] = (12));

} else {
var statearr_70576_73884 = state_70513__$1;
(statearr_70576_73884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (9))){
var state_70513__$1 = state_70513;
var statearr_70583_73885 = state_70513__$1;
(statearr_70583_73885[(2)] = null);

(statearr_70583_73885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (5))){
var state_70513__$1 = state_70513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70584_73886 = state_70513__$1;
(statearr_70584_73886[(1)] = (8));

} else {
var statearr_70591_73887 = state_70513__$1;
(statearr_70591_73887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (14))){
var inst_70497 = (state_70513[(2)]);
var state_70513__$1 = state_70513;
var statearr_70595_73888 = state_70513__$1;
(statearr_70595_73888[(2)] = inst_70497);

(statearr_70595_73888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (10))){
var inst_70488 = (state_70513[(2)]);
var state_70513__$1 = state_70513;
var statearr_70596_73889 = state_70513__$1;
(statearr_70596_73889[(2)] = inst_70488);

(statearr_70596_73889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (8))){
var inst_70485 = cljs.core.async.close_BANG_(to);
var state_70513__$1 = state_70513;
var statearr_70597_73890 = state_70513__$1;
(statearr_70597_73890[(2)] = inst_70485);

(statearr_70597_73890[(1)] = (10));


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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_70598 = [null,null,null,null,null,null,null,null];
(statearr_70598[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_70598[(1)] = (1));

return statearr_70598;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_70513){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_70513);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e70600){var ex__63091__auto__ = e70600;
var statearr_70601_73891 = state_70513;
(statearr_70601_73891[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_70513[(4)]))){
var statearr_70602_73892 = state_70513;
(statearr_70602_73892[(1)] = cljs.core.first((state_70513[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73893 = state_70513;
state_70513 = G__73893;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_70513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_70513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_70606 = f__63209__auto__();
(statearr_70606[(6)] = c__63208__auto___73874);

return statearr_70606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
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
var process__$1 = (function (p__70607){
var vec__70608 = p__70607;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70608,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70608,(1),null);
var job = vec__70608;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__63208__auto___73898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_70615){
var state_val_70616 = (state_70615[(1)]);
if((state_val_70616 === (1))){
var state_70615__$1 = state_70615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70615__$1,(2),res,v);
} else {
if((state_val_70616 === (2))){
var inst_70612 = (state_70615[(2)]);
var inst_70613 = cljs.core.async.close_BANG_(res);
var state_70615__$1 = (function (){var statearr_70619 = state_70615;
(statearr_70619[(7)] = inst_70612);

return statearr_70619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70615__$1,inst_70613);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0 = (function (){
var statearr_70622 = [null,null,null,null,null,null,null,null];
(statearr_70622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__);

(statearr_70622[(1)] = (1));

return statearr_70622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1 = (function (state_70615){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_70615);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e70625){var ex__63091__auto__ = e70625;
var statearr_70626_73899 = state_70615;
(statearr_70626_73899[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_70615[(4)]))){
var statearr_70627_73900 = state_70615;
(statearr_70627_73900[(1)] = cljs.core.first((state_70615[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73902 = state_70615;
state_70615 = G__73902;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = function(state_70615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1.call(this,state_70615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_70628 = f__63209__auto__();
(statearr_70628[(6)] = c__63208__auto___73898);

return statearr_70628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__70632){
var vec__70633 = p__70632;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70633,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70633,(1),null);
var job = vec__70633;
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
var n__5740__auto___73907 = n;
var __73908 = (0);
while(true){
if((__73908 < n__5740__auto___73907)){
var G__70636_73909 = type;
var G__70636_73910__$1 = (((G__70636_73909 instanceof cljs.core.Keyword))?G__70636_73909.fqn:null);
switch (G__70636_73910__$1) {
case "compute":
var c__63208__auto___73912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__73908,c__63208__auto___73912,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async){
return (function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = ((function (__73908,c__63208__auto___73912,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async){
return (function (state_70650){
var state_val_70651 = (state_70650[(1)]);
if((state_val_70651 === (1))){
var state_70650__$1 = state_70650;
var statearr_70652_73913 = state_70650__$1;
(statearr_70652_73913[(2)] = null);

(statearr_70652_73913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (2))){
var state_70650__$1 = state_70650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70650__$1,(4),jobs);
} else {
if((state_val_70651 === (3))){
var inst_70648 = (state_70650[(2)]);
var state_70650__$1 = state_70650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70650__$1,inst_70648);
} else {
if((state_val_70651 === (4))){
var inst_70639 = (state_70650[(2)]);
var inst_70641 = process__$1(inst_70639);
var state_70650__$1 = state_70650;
if(cljs.core.truth_(inst_70641)){
var statearr_70656_73914 = state_70650__$1;
(statearr_70656_73914[(1)] = (5));

} else {
var statearr_70657_73915 = state_70650__$1;
(statearr_70657_73915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (5))){
var state_70650__$1 = state_70650;
var statearr_70659_73916 = state_70650__$1;
(statearr_70659_73916[(2)] = null);

(statearr_70659_73916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (6))){
var state_70650__$1 = state_70650;
var statearr_70661_73917 = state_70650__$1;
(statearr_70661_73917[(2)] = null);

(statearr_70661_73917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (7))){
var inst_70646 = (state_70650[(2)]);
var state_70650__$1 = state_70650;
var statearr_70662_73919 = state_70650__$1;
(statearr_70662_73919[(2)] = inst_70646);

(statearr_70662_73919[(1)] = (3));


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
});})(__73908,c__63208__auto___73912,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async))
;
return ((function (__73908,switch__63087__auto__,c__63208__auto___73912,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0 = (function (){
var statearr_70663 = [null,null,null,null,null,null,null];
(statearr_70663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__);

(statearr_70663[(1)] = (1));

return statearr_70663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1 = (function (state_70650){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_70650);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e70666){var ex__63091__auto__ = e70666;
var statearr_70667_73920 = state_70650;
(statearr_70667_73920[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_70650[(4)]))){
var statearr_70670_73921 = state_70650;
(statearr_70670_73921[(1)] = cljs.core.first((state_70650[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73922 = state_70650;
state_70650 = G__73922;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = function(state_70650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1.call(this,state_70650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__;
})()
;})(__73908,switch__63087__auto__,c__63208__auto___73912,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async))
})();
var state__63210__auto__ = (function (){var statearr_70671 = f__63209__auto__();
(statearr_70671[(6)] = c__63208__auto___73912);

return statearr_70671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
});})(__73908,c__63208__auto___73912,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async))
);


break;
case "async":
var c__63208__auto___73923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__73908,c__63208__auto___73923,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async){
return (function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = ((function (__73908,c__63208__auto___73923,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async){
return (function (state_70688){
var state_val_70689 = (state_70688[(1)]);
if((state_val_70689 === (1))){
var state_70688__$1 = state_70688;
var statearr_70690_73924 = state_70688__$1;
(statearr_70690_73924[(2)] = null);

(statearr_70690_73924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70689 === (2))){
var state_70688__$1 = state_70688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70688__$1,(4),jobs);
} else {
if((state_val_70689 === (3))){
var inst_70686 = (state_70688[(2)]);
var state_70688__$1 = state_70688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70688__$1,inst_70686);
} else {
if((state_val_70689 === (4))){
var inst_70678 = (state_70688[(2)]);
var inst_70679 = async(inst_70678);
var state_70688__$1 = state_70688;
if(cljs.core.truth_(inst_70679)){
var statearr_70691_73925 = state_70688__$1;
(statearr_70691_73925[(1)] = (5));

} else {
var statearr_70692_73926 = state_70688__$1;
(statearr_70692_73926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70689 === (5))){
var state_70688__$1 = state_70688;
var statearr_70693_73927 = state_70688__$1;
(statearr_70693_73927[(2)] = null);

(statearr_70693_73927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70689 === (6))){
var state_70688__$1 = state_70688;
var statearr_70694_73928 = state_70688__$1;
(statearr_70694_73928[(2)] = null);

(statearr_70694_73928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70689 === (7))){
var inst_70684 = (state_70688[(2)]);
var state_70688__$1 = state_70688;
var statearr_70695_73929 = state_70688__$1;
(statearr_70695_73929[(2)] = inst_70684);

(statearr_70695_73929[(1)] = (3));


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
});})(__73908,c__63208__auto___73923,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async))
;
return ((function (__73908,switch__63087__auto__,c__63208__auto___73923,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0 = (function (){
var statearr_70696 = [null,null,null,null,null,null,null];
(statearr_70696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__);

(statearr_70696[(1)] = (1));

return statearr_70696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1 = (function (state_70688){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_70688);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e70700){var ex__63091__auto__ = e70700;
var statearr_70701_73930 = state_70688;
(statearr_70701_73930[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_70688[(4)]))){
var statearr_70704_73931 = state_70688;
(statearr_70704_73931[(1)] = cljs.core.first((state_70688[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73932 = state_70688;
state_70688 = G__73932;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = function(state_70688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1.call(this,state_70688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__;
})()
;})(__73908,switch__63087__auto__,c__63208__auto___73923,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async))
})();
var state__63210__auto__ = (function (){var statearr_70713 = f__63209__auto__();
(statearr_70713[(6)] = c__63208__auto___73923);

return statearr_70713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
});})(__73908,c__63208__auto___73923,G__70636_73909,G__70636_73910__$1,n__5740__auto___73907,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70636_73910__$1))));

}

var G__73933 = (__73908 + (1));
__73908 = G__73933;
continue;
} else {
}
break;
}

var c__63208__auto___73934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_70738){
var state_val_70739 = (state_70738[(1)]);
if((state_val_70739 === (7))){
var inst_70734 = (state_70738[(2)]);
var state_70738__$1 = state_70738;
var statearr_70741_73938 = state_70738__$1;
(statearr_70741_73938[(2)] = inst_70734);

(statearr_70741_73938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70739 === (1))){
var state_70738__$1 = state_70738;
var statearr_70742_73939 = state_70738__$1;
(statearr_70742_73939[(2)] = null);

(statearr_70742_73939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70739 === (4))){
var inst_70716 = (state_70738[(7)]);
var inst_70716__$1 = (state_70738[(2)]);
var inst_70717 = (inst_70716__$1 == null);
var state_70738__$1 = (function (){var statearr_70743 = state_70738;
(statearr_70743[(7)] = inst_70716__$1);

return statearr_70743;
})();
if(cljs.core.truth_(inst_70717)){
var statearr_70744_73940 = state_70738__$1;
(statearr_70744_73940[(1)] = (5));

} else {
var statearr_70747_73942 = state_70738__$1;
(statearr_70747_73942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70739 === (6))){
var inst_70716 = (state_70738[(7)]);
var inst_70721 = (state_70738[(8)]);
var inst_70721__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_70725 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70726 = [inst_70716,inst_70721__$1];
var inst_70727 = (new cljs.core.PersistentVector(null,2,(5),inst_70725,inst_70726,null));
var state_70738__$1 = (function (){var statearr_70748 = state_70738;
(statearr_70748[(8)] = inst_70721__$1);

return statearr_70748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70738__$1,(8),jobs,inst_70727);
} else {
if((state_val_70739 === (3))){
var inst_70736 = (state_70738[(2)]);
var state_70738__$1 = state_70738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70738__$1,inst_70736);
} else {
if((state_val_70739 === (2))){
var state_70738__$1 = state_70738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70738__$1,(4),from);
} else {
if((state_val_70739 === (9))){
var inst_70731 = (state_70738[(2)]);
var state_70738__$1 = (function (){var statearr_70753 = state_70738;
(statearr_70753[(9)] = inst_70731);

return statearr_70753;
})();
var statearr_70754_73943 = state_70738__$1;
(statearr_70754_73943[(2)] = null);

(statearr_70754_73943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70739 === (5))){
var inst_70719 = cljs.core.async.close_BANG_(jobs);
var state_70738__$1 = state_70738;
var statearr_70756_73944 = state_70738__$1;
(statearr_70756_73944[(2)] = inst_70719);

(statearr_70756_73944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70739 === (8))){
var inst_70721 = (state_70738[(8)]);
var inst_70729 = (state_70738[(2)]);
var state_70738__$1 = (function (){var statearr_70758 = state_70738;
(statearr_70758[(10)] = inst_70729);

return statearr_70758;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70738__$1,(9),results,inst_70721);
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
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0 = (function (){
var statearr_70760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__);

(statearr_70760[(1)] = (1));

return statearr_70760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1 = (function (state_70738){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_70738);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e70761){var ex__63091__auto__ = e70761;
var statearr_70762_73945 = state_70738;
(statearr_70762_73945[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_70738[(4)]))){
var statearr_70763_73946 = state_70738;
(statearr_70763_73946[(1)] = cljs.core.first((state_70738[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73947 = state_70738;
state_70738 = G__73947;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = function(state_70738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1.call(this,state_70738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_70767 = f__63209__auto__();
(statearr_70767[(6)] = c__63208__auto___73934);

return statearr_70767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));


var c__63208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_70813){
var state_val_70814 = (state_70813[(1)]);
if((state_val_70814 === (7))){
var inst_70809 = (state_70813[(2)]);
var state_70813__$1 = state_70813;
var statearr_70817_73948 = state_70813__$1;
(statearr_70817_73948[(2)] = inst_70809);

(statearr_70817_73948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (20))){
var state_70813__$1 = state_70813;
var statearr_70818_73949 = state_70813__$1;
(statearr_70818_73949[(2)] = null);

(statearr_70818_73949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (1))){
var state_70813__$1 = state_70813;
var statearr_70819_73950 = state_70813__$1;
(statearr_70819_73950[(2)] = null);

(statearr_70819_73950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (4))){
var inst_70773 = (state_70813[(7)]);
var inst_70773__$1 = (state_70813[(2)]);
var inst_70774 = (inst_70773__$1 == null);
var state_70813__$1 = (function (){var statearr_70824 = state_70813;
(statearr_70824[(7)] = inst_70773__$1);

return statearr_70824;
})();
if(cljs.core.truth_(inst_70774)){
var statearr_70828_73951 = state_70813__$1;
(statearr_70828_73951[(1)] = (5));

} else {
var statearr_70829_73952 = state_70813__$1;
(statearr_70829_73952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (15))){
var inst_70791 = (state_70813[(8)]);
var state_70813__$1 = state_70813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70813__$1,(18),to,inst_70791);
} else {
if((state_val_70814 === (21))){
var inst_70804 = (state_70813[(2)]);
var state_70813__$1 = state_70813;
var statearr_70830_73953 = state_70813__$1;
(statearr_70830_73953[(2)] = inst_70804);

(statearr_70830_73953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (13))){
var inst_70806 = (state_70813[(2)]);
var state_70813__$1 = (function (){var statearr_70831 = state_70813;
(statearr_70831[(9)] = inst_70806);

return statearr_70831;
})();
var statearr_70832_73954 = state_70813__$1;
(statearr_70832_73954[(2)] = null);

(statearr_70832_73954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (6))){
var inst_70773 = (state_70813[(7)]);
var state_70813__$1 = state_70813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70813__$1,(11),inst_70773);
} else {
if((state_val_70814 === (17))){
var inst_70799 = (state_70813[(2)]);
var state_70813__$1 = state_70813;
if(cljs.core.truth_(inst_70799)){
var statearr_70833_73956 = state_70813__$1;
(statearr_70833_73956[(1)] = (19));

} else {
var statearr_70834_73958 = state_70813__$1;
(statearr_70834_73958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (3))){
var inst_70811 = (state_70813[(2)]);
var state_70813__$1 = state_70813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70813__$1,inst_70811);
} else {
if((state_val_70814 === (12))){
var inst_70783 = (state_70813[(10)]);
var state_70813__$1 = state_70813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70813__$1,(14),inst_70783);
} else {
if((state_val_70814 === (2))){
var state_70813__$1 = state_70813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70813__$1,(4),results);
} else {
if((state_val_70814 === (19))){
var state_70813__$1 = state_70813;
var statearr_70843_73962 = state_70813__$1;
(statearr_70843_73962[(2)] = null);

(statearr_70843_73962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (11))){
var inst_70783 = (state_70813[(2)]);
var state_70813__$1 = (function (){var statearr_70844 = state_70813;
(statearr_70844[(10)] = inst_70783);

return statearr_70844;
})();
var statearr_70845_73963 = state_70813__$1;
(statearr_70845_73963[(2)] = null);

(statearr_70845_73963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (9))){
var state_70813__$1 = state_70813;
var statearr_70847_73964 = state_70813__$1;
(statearr_70847_73964[(2)] = null);

(statearr_70847_73964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (5))){
var state_70813__$1 = state_70813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70848_73965 = state_70813__$1;
(statearr_70848_73965[(1)] = (8));

} else {
var statearr_70849_73966 = state_70813__$1;
(statearr_70849_73966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (14))){
var inst_70791 = (state_70813[(8)]);
var inst_70793 = (state_70813[(11)]);
var inst_70791__$1 = (state_70813[(2)]);
var inst_70792 = (inst_70791__$1 == null);
var inst_70793__$1 = cljs.core.not(inst_70792);
var state_70813__$1 = (function (){var statearr_70850 = state_70813;
(statearr_70850[(8)] = inst_70791__$1);

(statearr_70850[(11)] = inst_70793__$1);

return statearr_70850;
})();
if(inst_70793__$1){
var statearr_70856_73968 = state_70813__$1;
(statearr_70856_73968[(1)] = (15));

} else {
var statearr_70857_73970 = state_70813__$1;
(statearr_70857_73970[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (16))){
var inst_70793 = (state_70813[(11)]);
var state_70813__$1 = state_70813;
var statearr_70859_73972 = state_70813__$1;
(statearr_70859_73972[(2)] = inst_70793);

(statearr_70859_73972[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (10))){
var inst_70780 = (state_70813[(2)]);
var state_70813__$1 = state_70813;
var statearr_70860_73973 = state_70813__$1;
(statearr_70860_73973[(2)] = inst_70780);

(statearr_70860_73973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (18))){
var inst_70796 = (state_70813[(2)]);
var state_70813__$1 = state_70813;
var statearr_70863_73974 = state_70813__$1;
(statearr_70863_73974[(2)] = inst_70796);

(statearr_70863_73974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70814 === (8))){
var inst_70777 = cljs.core.async.close_BANG_(to);
var state_70813__$1 = state_70813;
var statearr_70867_73978 = state_70813__$1;
(statearr_70867_73978[(2)] = inst_70777);

(statearr_70867_73978[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0 = (function (){
var statearr_70868 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__);

(statearr_70868[(1)] = (1));

return statearr_70868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1 = (function (state_70813){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_70813);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e70873){var ex__63091__auto__ = e70873;
var statearr_70874_73979 = state_70813;
(statearr_70874_73979[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_70813[(4)]))){
var statearr_70875_73980 = state_70813;
(statearr_70875_73980[(1)] = cljs.core.first((state_70813[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73981 = state_70813;
state_70813 = G__73981;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__ = function(state_70813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1.call(this,state_70813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_70878 = f__63209__auto__();
(statearr_70878[(6)] = c__63208__auto__);

return statearr_70878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));

return c__63208__auto__;
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
var G__70884 = arguments.length;
switch (G__70884) {
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
var G__70902 = arguments.length;
switch (G__70902) {
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
var G__70918 = arguments.length;
switch (G__70918) {
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
var c__63208__auto___73997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_70952){
var state_val_70953 = (state_70952[(1)]);
if((state_val_70953 === (7))){
var inst_70947 = (state_70952[(2)]);
var state_70952__$1 = state_70952;
var statearr_70955_74000 = state_70952__$1;
(statearr_70955_74000[(2)] = inst_70947);

(statearr_70955_74000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (1))){
var state_70952__$1 = state_70952;
var statearr_70956_74003 = state_70952__$1;
(statearr_70956_74003[(2)] = null);

(statearr_70956_74003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (4))){
var inst_70928 = (state_70952[(7)]);
var inst_70928__$1 = (state_70952[(2)]);
var inst_70929 = (inst_70928__$1 == null);
var state_70952__$1 = (function (){var statearr_70958 = state_70952;
(statearr_70958[(7)] = inst_70928__$1);

return statearr_70958;
})();
if(cljs.core.truth_(inst_70929)){
var statearr_70962_74005 = state_70952__$1;
(statearr_70962_74005[(1)] = (5));

} else {
var statearr_70963_74006 = state_70952__$1;
(statearr_70963_74006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (13))){
var state_70952__$1 = state_70952;
var statearr_70971_74008 = state_70952__$1;
(statearr_70971_74008[(2)] = null);

(statearr_70971_74008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (6))){
var inst_70928 = (state_70952[(7)]);
var inst_70934 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_70928) : p.call(null,inst_70928));
var state_70952__$1 = state_70952;
if(cljs.core.truth_(inst_70934)){
var statearr_70974_74010 = state_70952__$1;
(statearr_70974_74010[(1)] = (9));

} else {
var statearr_70976_74012 = state_70952__$1;
(statearr_70976_74012[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (3))){
var inst_70949 = (state_70952[(2)]);
var state_70952__$1 = state_70952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70952__$1,inst_70949);
} else {
if((state_val_70953 === (12))){
var state_70952__$1 = state_70952;
var statearr_70982_74015 = state_70952__$1;
(statearr_70982_74015[(2)] = null);

(statearr_70982_74015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (2))){
var state_70952__$1 = state_70952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70952__$1,(4),ch);
} else {
if((state_val_70953 === (11))){
var inst_70928 = (state_70952[(7)]);
var inst_70938 = (state_70952[(2)]);
var state_70952__$1 = state_70952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70952__$1,(8),inst_70938,inst_70928);
} else {
if((state_val_70953 === (9))){
var state_70952__$1 = state_70952;
var statearr_70990_74041 = state_70952__$1;
(statearr_70990_74041[(2)] = tc);

(statearr_70990_74041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (5))){
var inst_70931 = cljs.core.async.close_BANG_(tc);
var inst_70932 = cljs.core.async.close_BANG_(fc);
var state_70952__$1 = (function (){var statearr_70996 = state_70952;
(statearr_70996[(8)] = inst_70931);

return statearr_70996;
})();
var statearr_70997_74046 = state_70952__$1;
(statearr_70997_74046[(2)] = inst_70932);

(statearr_70997_74046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (14))){
var inst_70945 = (state_70952[(2)]);
var state_70952__$1 = state_70952;
var statearr_70998_74049 = state_70952__$1;
(statearr_70998_74049[(2)] = inst_70945);

(statearr_70998_74049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (10))){
var state_70952__$1 = state_70952;
var statearr_70999_74052 = state_70952__$1;
(statearr_70999_74052[(2)] = fc);

(statearr_70999_74052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70953 === (8))){
var inst_70940 = (state_70952[(2)]);
var state_70952__$1 = state_70952;
if(cljs.core.truth_(inst_70940)){
var statearr_71004_74053 = state_70952__$1;
(statearr_71004_74053[(1)] = (12));

} else {
var statearr_71005_74054 = state_70952__$1;
(statearr_71005_74054[(1)] = (13));

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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_71010 = [null,null,null,null,null,null,null,null,null];
(statearr_71010[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_71010[(1)] = (1));

return statearr_71010;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_70952){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_70952);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e71014){var ex__63091__auto__ = e71014;
var statearr_71016_74058 = state_70952;
(statearr_71016_74058[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_70952[(4)]))){
var statearr_71021_74062 = state_70952;
(statearr_71021_74062[(1)] = cljs.core.first((state_70952[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74065 = state_70952;
state_70952 = G__74065;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_70952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_70952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_71025 = f__63209__auto__();
(statearr_71025[(6)] = c__63208__auto___73997);

return statearr_71025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
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
var c__63208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_71061){
var state_val_71064 = (state_71061[(1)]);
if((state_val_71064 === (7))){
var inst_71057 = (state_71061[(2)]);
var state_71061__$1 = state_71061;
var statearr_71068_74074 = state_71061__$1;
(statearr_71068_74074[(2)] = inst_71057);

(statearr_71068_74074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71064 === (1))){
var inst_71026 = init;
var inst_71027 = inst_71026;
var state_71061__$1 = (function (){var statearr_71069 = state_71061;
(statearr_71069[(7)] = inst_71027);

return statearr_71069;
})();
var statearr_71074_74076 = state_71061__$1;
(statearr_71074_74076[(2)] = null);

(statearr_71074_74076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71064 === (4))){
var inst_71034 = (state_71061[(8)]);
var inst_71034__$1 = (state_71061[(2)]);
var inst_71035 = (inst_71034__$1 == null);
var state_71061__$1 = (function (){var statearr_71077 = state_71061;
(statearr_71077[(8)] = inst_71034__$1);

return statearr_71077;
})();
if(cljs.core.truth_(inst_71035)){
var statearr_71078_74082 = state_71061__$1;
(statearr_71078_74082[(1)] = (5));

} else {
var statearr_71082_74084 = state_71061__$1;
(statearr_71082_74084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71064 === (6))){
var inst_71027 = (state_71061[(7)]);
var inst_71034 = (state_71061[(8)]);
var inst_71047 = (state_71061[(9)]);
var inst_71047__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_71027,inst_71034) : f.call(null,inst_71027,inst_71034));
var inst_71048 = cljs.core.reduced_QMARK_(inst_71047__$1);
var state_71061__$1 = (function (){var statearr_71085 = state_71061;
(statearr_71085[(9)] = inst_71047__$1);

return statearr_71085;
})();
if(inst_71048){
var statearr_71087_74087 = state_71061__$1;
(statearr_71087_74087[(1)] = (8));

} else {
var statearr_71094_74089 = state_71061__$1;
(statearr_71094_74089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71064 === (3))){
var inst_71059 = (state_71061[(2)]);
var state_71061__$1 = state_71061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71061__$1,inst_71059);
} else {
if((state_val_71064 === (2))){
var state_71061__$1 = state_71061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71061__$1,(4),ch);
} else {
if((state_val_71064 === (9))){
var inst_71047 = (state_71061[(9)]);
var inst_71027 = inst_71047;
var state_71061__$1 = (function (){var statearr_71105 = state_71061;
(statearr_71105[(7)] = inst_71027);

return statearr_71105;
})();
var statearr_71107_74095 = state_71061__$1;
(statearr_71107_74095[(2)] = null);

(statearr_71107_74095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71064 === (5))){
var inst_71027 = (state_71061[(7)]);
var state_71061__$1 = state_71061;
var statearr_71110_74096 = state_71061__$1;
(statearr_71110_74096[(2)] = inst_71027);

(statearr_71110_74096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71064 === (10))){
var inst_71055 = (state_71061[(2)]);
var state_71061__$1 = state_71061;
var statearr_71114_74100 = state_71061__$1;
(statearr_71114_74100[(2)] = inst_71055);

(statearr_71114_74100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71064 === (8))){
var inst_71047 = (state_71061[(9)]);
var inst_71051 = cljs.core.deref(inst_71047);
var state_71061__$1 = state_71061;
var statearr_71117_74104 = state_71061__$1;
(statearr_71117_74104[(2)] = inst_71051);

(statearr_71117_74104[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__63088__auto__ = null;
var cljs$core$async$reduce_$_state_machine__63088__auto____0 = (function (){
var statearr_71123 = [null,null,null,null,null,null,null,null,null,null];
(statearr_71123[(0)] = cljs$core$async$reduce_$_state_machine__63088__auto__);

(statearr_71123[(1)] = (1));

return statearr_71123;
});
var cljs$core$async$reduce_$_state_machine__63088__auto____1 = (function (state_71061){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_71061);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e71130){var ex__63091__auto__ = e71130;
var statearr_71131_74110 = state_71061;
(statearr_71131_74110[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_71061[(4)]))){
var statearr_71132_74112 = state_71061;
(statearr_71132_74112[(1)] = cljs.core.first((state_71061[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74115 = state_71061;
state_71061 = G__74115;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__63088__auto__ = function(state_71061){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__63088__auto____1.call(this,state_71061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__63088__auto____0;
cljs$core$async$reduce_$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__63088__auto____1;
return cljs$core$async$reduce_$_state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_71135 = f__63209__auto__();
(statearr_71135[(6)] = c__63208__auto__);

return statearr_71135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));

return c__63208__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__63208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_71150){
var state_val_71151 = (state_71150[(1)]);
if((state_val_71151 === (1))){
var inst_71145 = cljs.core.async.reduce(f__$1,init,ch);
var state_71150__$1 = state_71150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71150__$1,(2),inst_71145);
} else {
if((state_val_71151 === (2))){
var inst_71147 = (state_71150[(2)]);
var inst_71148 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_71147) : f__$1.call(null,inst_71147));
var state_71150__$1 = state_71150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71150__$1,inst_71148);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__63088__auto__ = null;
var cljs$core$async$transduce_$_state_machine__63088__auto____0 = (function (){
var statearr_71154 = [null,null,null,null,null,null,null];
(statearr_71154[(0)] = cljs$core$async$transduce_$_state_machine__63088__auto__);

(statearr_71154[(1)] = (1));

return statearr_71154;
});
var cljs$core$async$transduce_$_state_machine__63088__auto____1 = (function (state_71150){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_71150);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e71157){var ex__63091__auto__ = e71157;
var statearr_71158_74128 = state_71150;
(statearr_71158_74128[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_71150[(4)]))){
var statearr_71159_74132 = state_71150;
(statearr_71159_74132[(1)] = cljs.core.first((state_71150[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74134 = state_71150;
state_71150 = G__74134;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__63088__auto__ = function(state_71150){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__63088__auto____1.call(this,state_71150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__63088__auto____0;
cljs$core$async$transduce_$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__63088__auto____1;
return cljs$core$async$transduce_$_state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_71165 = f__63209__auto__();
(statearr_71165[(6)] = c__63208__auto__);

return statearr_71165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));

return c__63208__auto__;
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
var G__71167 = arguments.length;
switch (G__71167) {
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
var c__63208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_71220){
var state_val_71221 = (state_71220[(1)]);
if((state_val_71221 === (7))){
var inst_71201 = (state_71220[(2)]);
var state_71220__$1 = state_71220;
var statearr_71253_74145 = state_71220__$1;
(statearr_71253_74145[(2)] = inst_71201);

(statearr_71253_74145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (1))){
var inst_71191 = cljs.core.seq(coll);
var inst_71196 = inst_71191;
var state_71220__$1 = (function (){var statearr_71254 = state_71220;
(statearr_71254[(7)] = inst_71196);

return statearr_71254;
})();
var statearr_71255_74147 = state_71220__$1;
(statearr_71255_74147[(2)] = null);

(statearr_71255_74147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (4))){
var inst_71196 = (state_71220[(7)]);
var inst_71199 = cljs.core.first(inst_71196);
var state_71220__$1 = state_71220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71220__$1,(7),ch,inst_71199);
} else {
if((state_val_71221 === (13))){
var inst_71214 = (state_71220[(2)]);
var state_71220__$1 = state_71220;
var statearr_71256_74151 = state_71220__$1;
(statearr_71256_74151[(2)] = inst_71214);

(statearr_71256_74151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (6))){
var inst_71204 = (state_71220[(2)]);
var state_71220__$1 = state_71220;
if(cljs.core.truth_(inst_71204)){
var statearr_71257_74153 = state_71220__$1;
(statearr_71257_74153[(1)] = (8));

} else {
var statearr_71259_74154 = state_71220__$1;
(statearr_71259_74154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (3))){
var inst_71218 = (state_71220[(2)]);
var state_71220__$1 = state_71220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71220__$1,inst_71218);
} else {
if((state_val_71221 === (12))){
var state_71220__$1 = state_71220;
var statearr_71261_74158 = state_71220__$1;
(statearr_71261_74158[(2)] = null);

(statearr_71261_74158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (2))){
var inst_71196 = (state_71220[(7)]);
var state_71220__$1 = state_71220;
if(cljs.core.truth_(inst_71196)){
var statearr_71264_74161 = state_71220__$1;
(statearr_71264_74161[(1)] = (4));

} else {
var statearr_71265_74163 = state_71220__$1;
(statearr_71265_74163[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (11))){
var inst_71211 = cljs.core.async.close_BANG_(ch);
var state_71220__$1 = state_71220;
var statearr_71266_74165 = state_71220__$1;
(statearr_71266_74165[(2)] = inst_71211);

(statearr_71266_74165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (9))){
var state_71220__$1 = state_71220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71267_74166 = state_71220__$1;
(statearr_71267_74166[(1)] = (11));

} else {
var statearr_71268_74167 = state_71220__$1;
(statearr_71268_74167[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (5))){
var inst_71196 = (state_71220[(7)]);
var state_71220__$1 = state_71220;
var statearr_71269_74172 = state_71220__$1;
(statearr_71269_74172[(2)] = inst_71196);

(statearr_71269_74172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (10))){
var inst_71216 = (state_71220[(2)]);
var state_71220__$1 = state_71220;
var statearr_71275_74175 = state_71220__$1;
(statearr_71275_74175[(2)] = inst_71216);

(statearr_71275_74175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71221 === (8))){
var inst_71196 = (state_71220[(7)]);
var inst_71207 = cljs.core.next(inst_71196);
var inst_71196__$1 = inst_71207;
var state_71220__$1 = (function (){var statearr_71292 = state_71220;
(statearr_71292[(7)] = inst_71196__$1);

return statearr_71292;
})();
var statearr_71294_74177 = state_71220__$1;
(statearr_71294_74177[(2)] = null);

(statearr_71294_74177[(1)] = (2));


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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_71299 = [null,null,null,null,null,null,null,null];
(statearr_71299[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_71299[(1)] = (1));

return statearr_71299;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_71220){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_71220);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e71306){var ex__63091__auto__ = e71306;
var statearr_71312_74184 = state_71220;
(statearr_71312_74184[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_71220[(4)]))){
var statearr_71320_74186 = state_71220;
(statearr_71320_74186[(1)] = cljs.core.first((state_71220[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74187 = state_71220;
state_71220 = G__74187;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_71220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_71220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_71331 = f__63209__auto__();
(statearr_71331[(6)] = c__63208__auto__);

return statearr_71331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));

return c__63208__auto__;
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
var G__71354 = arguments.length;
switch (G__71354) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_74203 = (function (_){
var x__5497__auto__ = (((_ == null))?null:_);
var m__5498__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5498__auto__.call(null,_));
} else {
var m__5496__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5496__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_74203(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_74220 = (function (m,ch,close_QMARK_){
var x__5497__auto__ = (((m == null))?null:m);
var m__5498__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5498__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5496__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5496__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_74220(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_74221 = (function (m,ch){
var x__5497__auto__ = (((m == null))?null:m);
var m__5498__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5498__auto__.call(null,m,ch));
} else {
var m__5496__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5496__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_74221(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_74237 = (function (m){
var x__5497__auto__ = (((m == null))?null:m);
var m__5498__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5498__auto__.call(null,m));
} else {
var m__5496__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5496__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_74237(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71423 = (function (ch,cs,meta71424){
this.ch = ch;
this.cs = cs;
this.meta71424 = meta71424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71425,meta71424__$1){
var self__ = this;
var _71425__$1 = this;
return (new cljs.core.async.t_cljs$core$async71423(self__.ch,self__.cs,meta71424__$1));
}));

(cljs.core.async.t_cljs$core$async71423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71425){
var self__ = this;
var _71425__$1 = this;
return self__.meta71424;
}));

(cljs.core.async.t_cljs$core$async71423.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71423.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71423.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async71423.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async71423.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async71423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta71424","meta71424",-1317766280,null)], null);
}));

(cljs.core.async.t_cljs$core$async71423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71423");

(cljs.core.async.t_cljs$core$async71423.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async71423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71423.
 */
cljs.core.async.__GT_t_cljs$core$async71423 = (function cljs$core$async$__GT_t_cljs$core$async71423(ch,cs,meta71424){
return (new cljs.core.async.t_cljs$core$async71423(ch,cs,meta71424));
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
var m = (new cljs.core.async.t_cljs$core$async71423(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__63208__auto___74247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_71578){
var state_val_71579 = (state_71578[(1)]);
if((state_val_71579 === (7))){
var inst_71574 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71580_74250 = state_71578__$1;
(statearr_71580_74250[(2)] = inst_71574);

(statearr_71580_74250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (20))){
var inst_71475 = (state_71578[(7)]);
var inst_71487 = cljs.core.first(inst_71475);
var inst_71488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71487,(0),null);
var inst_71489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71487,(1),null);
var state_71578__$1 = (function (){var statearr_71581 = state_71578;
(statearr_71581[(8)] = inst_71488);

return statearr_71581;
})();
if(cljs.core.truth_(inst_71489)){
var statearr_71582_74253 = state_71578__$1;
(statearr_71582_74253[(1)] = (22));

} else {
var statearr_71584_74258 = state_71578__$1;
(statearr_71584_74258[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (27))){
var inst_71518 = (state_71578[(9)]);
var inst_71520 = (state_71578[(10)]);
var inst_71527 = (state_71578[(11)]);
var inst_71444 = (state_71578[(12)]);
var inst_71527__$1 = cljs.core._nth(inst_71518,inst_71520);
var inst_71528 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_71527__$1,inst_71444,done);
var state_71578__$1 = (function (){var statearr_71594 = state_71578;
(statearr_71594[(11)] = inst_71527__$1);

return statearr_71594;
})();
if(cljs.core.truth_(inst_71528)){
var statearr_71595_74260 = state_71578__$1;
(statearr_71595_74260[(1)] = (30));

} else {
var statearr_71596_74262 = state_71578__$1;
(statearr_71596_74262[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (1))){
var state_71578__$1 = state_71578;
var statearr_71597_74263 = state_71578__$1;
(statearr_71597_74263[(2)] = null);

(statearr_71597_74263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (24))){
var inst_71475 = (state_71578[(7)]);
var inst_71495 = (state_71578[(2)]);
var inst_71496 = cljs.core.next(inst_71475);
var inst_71453 = inst_71496;
var inst_71454 = null;
var inst_71455 = (0);
var inst_71456 = (0);
var state_71578__$1 = (function (){var statearr_71602 = state_71578;
(statearr_71602[(13)] = inst_71495);

(statearr_71602[(14)] = inst_71453);

(statearr_71602[(15)] = inst_71454);

(statearr_71602[(16)] = inst_71455);

(statearr_71602[(17)] = inst_71456);

return statearr_71602;
})();
var statearr_71603_74277 = state_71578__$1;
(statearr_71603_74277[(2)] = null);

(statearr_71603_74277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (39))){
var state_71578__$1 = state_71578;
var statearr_71615_74284 = state_71578__$1;
(statearr_71615_74284[(2)] = null);

(statearr_71615_74284[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (4))){
var inst_71444 = (state_71578[(12)]);
var inst_71444__$1 = (state_71578[(2)]);
var inst_71445 = (inst_71444__$1 == null);
var state_71578__$1 = (function (){var statearr_71620 = state_71578;
(statearr_71620[(12)] = inst_71444__$1);

return statearr_71620;
})();
if(cljs.core.truth_(inst_71445)){
var statearr_71621_74296 = state_71578__$1;
(statearr_71621_74296[(1)] = (5));

} else {
var statearr_71623_74297 = state_71578__$1;
(statearr_71623_74297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (15))){
var inst_71456 = (state_71578[(17)]);
var inst_71453 = (state_71578[(14)]);
var inst_71454 = (state_71578[(15)]);
var inst_71455 = (state_71578[(16)]);
var inst_71471 = (state_71578[(2)]);
var inst_71472 = (inst_71456 + (1));
var tmp71604 = inst_71453;
var tmp71605 = inst_71454;
var tmp71606 = inst_71455;
var inst_71453__$1 = tmp71604;
var inst_71454__$1 = tmp71605;
var inst_71455__$1 = tmp71606;
var inst_71456__$1 = inst_71472;
var state_71578__$1 = (function (){var statearr_71625 = state_71578;
(statearr_71625[(18)] = inst_71471);

(statearr_71625[(14)] = inst_71453__$1);

(statearr_71625[(15)] = inst_71454__$1);

(statearr_71625[(16)] = inst_71455__$1);

(statearr_71625[(17)] = inst_71456__$1);

return statearr_71625;
})();
var statearr_71630_74301 = state_71578__$1;
(statearr_71630_74301[(2)] = null);

(statearr_71630_74301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (21))){
var inst_71499 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71635_74305 = state_71578__$1;
(statearr_71635_74305[(2)] = inst_71499);

(statearr_71635_74305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (31))){
var inst_71527 = (state_71578[(11)]);
var inst_71531 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_71527);
var state_71578__$1 = state_71578;
var statearr_71640_74310 = state_71578__$1;
(statearr_71640_74310[(2)] = inst_71531);

(statearr_71640_74310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (32))){
var inst_71520 = (state_71578[(10)]);
var inst_71517 = (state_71578[(19)]);
var inst_71518 = (state_71578[(9)]);
var inst_71519 = (state_71578[(20)]);
var inst_71534 = (state_71578[(2)]);
var inst_71535 = (inst_71520 + (1));
var tmp71631 = inst_71519;
var tmp71632 = inst_71518;
var tmp71633 = inst_71517;
var inst_71517__$1 = tmp71633;
var inst_71518__$1 = tmp71632;
var inst_71519__$1 = tmp71631;
var inst_71520__$1 = inst_71535;
var state_71578__$1 = (function (){var statearr_71644 = state_71578;
(statearr_71644[(21)] = inst_71534);

(statearr_71644[(19)] = inst_71517__$1);

(statearr_71644[(9)] = inst_71518__$1);

(statearr_71644[(20)] = inst_71519__$1);

(statearr_71644[(10)] = inst_71520__$1);

return statearr_71644;
})();
var statearr_71645_74311 = state_71578__$1;
(statearr_71645_74311[(2)] = null);

(statearr_71645_74311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (40))){
var inst_71547 = (state_71578[(22)]);
var inst_71551 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_71547);
var state_71578__$1 = state_71578;
var statearr_71646_74313 = state_71578__$1;
(statearr_71646_74313[(2)] = inst_71551);

(statearr_71646_74313[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (33))){
var inst_71538 = (state_71578[(23)]);
var inst_71540 = cljs.core.chunked_seq_QMARK_(inst_71538);
var state_71578__$1 = state_71578;
if(inst_71540){
var statearr_71651_74316 = state_71578__$1;
(statearr_71651_74316[(1)] = (36));

} else {
var statearr_71656_74317 = state_71578__$1;
(statearr_71656_74317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (13))){
var inst_71465 = (state_71578[(24)]);
var inst_71468 = cljs.core.async.close_BANG_(inst_71465);
var state_71578__$1 = state_71578;
var statearr_71661_74318 = state_71578__$1;
(statearr_71661_74318[(2)] = inst_71468);

(statearr_71661_74318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (22))){
var inst_71488 = (state_71578[(8)]);
var inst_71492 = cljs.core.async.close_BANG_(inst_71488);
var state_71578__$1 = state_71578;
var statearr_71667_74319 = state_71578__$1;
(statearr_71667_74319[(2)] = inst_71492);

(statearr_71667_74319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (36))){
var inst_71538 = (state_71578[(23)]);
var inst_71542 = cljs.core.chunk_first(inst_71538);
var inst_71543 = cljs.core.chunk_rest(inst_71538);
var inst_71544 = cljs.core.count(inst_71542);
var inst_71517 = inst_71543;
var inst_71518 = inst_71542;
var inst_71519 = inst_71544;
var inst_71520 = (0);
var state_71578__$1 = (function (){var statearr_71671 = state_71578;
(statearr_71671[(19)] = inst_71517);

(statearr_71671[(9)] = inst_71518);

(statearr_71671[(20)] = inst_71519);

(statearr_71671[(10)] = inst_71520);

return statearr_71671;
})();
var statearr_71672_74321 = state_71578__$1;
(statearr_71672_74321[(2)] = null);

(statearr_71672_74321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (41))){
var inst_71538 = (state_71578[(23)]);
var inst_71553 = (state_71578[(2)]);
var inst_71554 = cljs.core.next(inst_71538);
var inst_71517 = inst_71554;
var inst_71518 = null;
var inst_71519 = (0);
var inst_71520 = (0);
var state_71578__$1 = (function (){var statearr_71673 = state_71578;
(statearr_71673[(25)] = inst_71553);

(statearr_71673[(19)] = inst_71517);

(statearr_71673[(9)] = inst_71518);

(statearr_71673[(20)] = inst_71519);

(statearr_71673[(10)] = inst_71520);

return statearr_71673;
})();
var statearr_71677_74325 = state_71578__$1;
(statearr_71677_74325[(2)] = null);

(statearr_71677_74325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (43))){
var state_71578__$1 = state_71578;
var statearr_71681_74326 = state_71578__$1;
(statearr_71681_74326[(2)] = null);

(statearr_71681_74326[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (29))){
var inst_71562 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71686_74327 = state_71578__$1;
(statearr_71686_74327[(2)] = inst_71562);

(statearr_71686_74327[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (44))){
var inst_71571 = (state_71578[(2)]);
var state_71578__$1 = (function (){var statearr_71687 = state_71578;
(statearr_71687[(26)] = inst_71571);

return statearr_71687;
})();
var statearr_71689_74331 = state_71578__$1;
(statearr_71689_74331[(2)] = null);

(statearr_71689_74331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (6))){
var inst_71509 = (state_71578[(27)]);
var inst_71508 = cljs.core.deref(cs);
var inst_71509__$1 = cljs.core.keys(inst_71508);
var inst_71510 = cljs.core.count(inst_71509__$1);
var inst_71511 = cljs.core.reset_BANG_(dctr,inst_71510);
var inst_71516 = cljs.core.seq(inst_71509__$1);
var inst_71517 = inst_71516;
var inst_71518 = null;
var inst_71519 = (0);
var inst_71520 = (0);
var state_71578__$1 = (function (){var statearr_71695 = state_71578;
(statearr_71695[(27)] = inst_71509__$1);

(statearr_71695[(28)] = inst_71511);

(statearr_71695[(19)] = inst_71517);

(statearr_71695[(9)] = inst_71518);

(statearr_71695[(20)] = inst_71519);

(statearr_71695[(10)] = inst_71520);

return statearr_71695;
})();
var statearr_71696_74335 = state_71578__$1;
(statearr_71696_74335[(2)] = null);

(statearr_71696_74335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (28))){
var inst_71517 = (state_71578[(19)]);
var inst_71538 = (state_71578[(23)]);
var inst_71538__$1 = cljs.core.seq(inst_71517);
var state_71578__$1 = (function (){var statearr_71702 = state_71578;
(statearr_71702[(23)] = inst_71538__$1);

return statearr_71702;
})();
if(inst_71538__$1){
var statearr_71703_74336 = state_71578__$1;
(statearr_71703_74336[(1)] = (33));

} else {
var statearr_71704_74337 = state_71578__$1;
(statearr_71704_74337[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (25))){
var inst_71520 = (state_71578[(10)]);
var inst_71519 = (state_71578[(20)]);
var inst_71522 = (inst_71520 < inst_71519);
var inst_71523 = inst_71522;
var state_71578__$1 = state_71578;
if(cljs.core.truth_(inst_71523)){
var statearr_71705_74338 = state_71578__$1;
(statearr_71705_74338[(1)] = (27));

} else {
var statearr_71706_74339 = state_71578__$1;
(statearr_71706_74339[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (34))){
var state_71578__$1 = state_71578;
var statearr_71707_74340 = state_71578__$1;
(statearr_71707_74340[(2)] = null);

(statearr_71707_74340[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (17))){
var state_71578__$1 = state_71578;
var statearr_71710_74341 = state_71578__$1;
(statearr_71710_74341[(2)] = null);

(statearr_71710_74341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (3))){
var inst_71576 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71578__$1,inst_71576);
} else {
if((state_val_71579 === (12))){
var inst_71504 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71711_74343 = state_71578__$1;
(statearr_71711_74343[(2)] = inst_71504);

(statearr_71711_74343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (2))){
var state_71578__$1 = state_71578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71578__$1,(4),ch);
} else {
if((state_val_71579 === (23))){
var state_71578__$1 = state_71578;
var statearr_71716_74346 = state_71578__$1;
(statearr_71716_74346[(2)] = null);

(statearr_71716_74346[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (35))){
var inst_71560 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71717_74349 = state_71578__$1;
(statearr_71717_74349[(2)] = inst_71560);

(statearr_71717_74349[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (19))){
var inst_71475 = (state_71578[(7)]);
var inst_71479 = cljs.core.chunk_first(inst_71475);
var inst_71480 = cljs.core.chunk_rest(inst_71475);
var inst_71481 = cljs.core.count(inst_71479);
var inst_71453 = inst_71480;
var inst_71454 = inst_71479;
var inst_71455 = inst_71481;
var inst_71456 = (0);
var state_71578__$1 = (function (){var statearr_71719 = state_71578;
(statearr_71719[(14)] = inst_71453);

(statearr_71719[(15)] = inst_71454);

(statearr_71719[(16)] = inst_71455);

(statearr_71719[(17)] = inst_71456);

return statearr_71719;
})();
var statearr_71723_74353 = state_71578__$1;
(statearr_71723_74353[(2)] = null);

(statearr_71723_74353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (11))){
var inst_71453 = (state_71578[(14)]);
var inst_71475 = (state_71578[(7)]);
var inst_71475__$1 = cljs.core.seq(inst_71453);
var state_71578__$1 = (function (){var statearr_71731 = state_71578;
(statearr_71731[(7)] = inst_71475__$1);

return statearr_71731;
})();
if(inst_71475__$1){
var statearr_71732_74354 = state_71578__$1;
(statearr_71732_74354[(1)] = (16));

} else {
var statearr_71733_74355 = state_71578__$1;
(statearr_71733_74355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (9))){
var inst_71506 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71734_74356 = state_71578__$1;
(statearr_71734_74356[(2)] = inst_71506);

(statearr_71734_74356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (5))){
var inst_71451 = cljs.core.deref(cs);
var inst_71452 = cljs.core.seq(inst_71451);
var inst_71453 = inst_71452;
var inst_71454 = null;
var inst_71455 = (0);
var inst_71456 = (0);
var state_71578__$1 = (function (){var statearr_71737 = state_71578;
(statearr_71737[(14)] = inst_71453);

(statearr_71737[(15)] = inst_71454);

(statearr_71737[(16)] = inst_71455);

(statearr_71737[(17)] = inst_71456);

return statearr_71737;
})();
var statearr_71738_74360 = state_71578__$1;
(statearr_71738_74360[(2)] = null);

(statearr_71738_74360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (14))){
var state_71578__$1 = state_71578;
var statearr_71739_74361 = state_71578__$1;
(statearr_71739_74361[(2)] = null);

(statearr_71739_74361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (45))){
var inst_71568 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71744_74363 = state_71578__$1;
(statearr_71744_74363[(2)] = inst_71568);

(statearr_71744_74363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (26))){
var inst_71509 = (state_71578[(27)]);
var inst_71564 = (state_71578[(2)]);
var inst_71565 = cljs.core.seq(inst_71509);
var state_71578__$1 = (function (){var statearr_71753 = state_71578;
(statearr_71753[(29)] = inst_71564);

return statearr_71753;
})();
if(inst_71565){
var statearr_71756_74364 = state_71578__$1;
(statearr_71756_74364[(1)] = (42));

} else {
var statearr_71757_74365 = state_71578__$1;
(statearr_71757_74365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (16))){
var inst_71475 = (state_71578[(7)]);
var inst_71477 = cljs.core.chunked_seq_QMARK_(inst_71475);
var state_71578__$1 = state_71578;
if(inst_71477){
var statearr_71758_74372 = state_71578__$1;
(statearr_71758_74372[(1)] = (19));

} else {
var statearr_71759_74373 = state_71578__$1;
(statearr_71759_74373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (38))){
var inst_71557 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71762_74374 = state_71578__$1;
(statearr_71762_74374[(2)] = inst_71557);

(statearr_71762_74374[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (30))){
var state_71578__$1 = state_71578;
var statearr_71763_74376 = state_71578__$1;
(statearr_71763_74376[(2)] = null);

(statearr_71763_74376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (10))){
var inst_71454 = (state_71578[(15)]);
var inst_71456 = (state_71578[(17)]);
var inst_71464 = cljs.core._nth(inst_71454,inst_71456);
var inst_71465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71464,(0),null);
var inst_71466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71464,(1),null);
var state_71578__$1 = (function (){var statearr_71765 = state_71578;
(statearr_71765[(24)] = inst_71465);

return statearr_71765;
})();
if(cljs.core.truth_(inst_71466)){
var statearr_71766_74377 = state_71578__$1;
(statearr_71766_74377[(1)] = (13));

} else {
var statearr_71767_74380 = state_71578__$1;
(statearr_71767_74380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (18))){
var inst_71502 = (state_71578[(2)]);
var state_71578__$1 = state_71578;
var statearr_71772_74382 = state_71578__$1;
(statearr_71772_74382[(2)] = inst_71502);

(statearr_71772_74382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (42))){
var state_71578__$1 = state_71578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71578__$1,(45),dchan);
} else {
if((state_val_71579 === (37))){
var inst_71538 = (state_71578[(23)]);
var inst_71547 = (state_71578[(22)]);
var inst_71444 = (state_71578[(12)]);
var inst_71547__$1 = cljs.core.first(inst_71538);
var inst_71548 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_71547__$1,inst_71444,done);
var state_71578__$1 = (function (){var statearr_71783 = state_71578;
(statearr_71783[(22)] = inst_71547__$1);

return statearr_71783;
})();
if(cljs.core.truth_(inst_71548)){
var statearr_71785_74384 = state_71578__$1;
(statearr_71785_74384[(1)] = (39));

} else {
var statearr_71786_74385 = state_71578__$1;
(statearr_71786_74385[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71579 === (8))){
var inst_71456 = (state_71578[(17)]);
var inst_71455 = (state_71578[(16)]);
var inst_71458 = (inst_71456 < inst_71455);
var inst_71459 = inst_71458;
var state_71578__$1 = state_71578;
if(cljs.core.truth_(inst_71459)){
var statearr_71788_74388 = state_71578__$1;
(statearr_71788_74388[(1)] = (10));

} else {
var statearr_71789_74389 = state_71578__$1;
(statearr_71789_74389[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__63088__auto__ = null;
var cljs$core$async$mult_$_state_machine__63088__auto____0 = (function (){
var statearr_71790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71790[(0)] = cljs$core$async$mult_$_state_machine__63088__auto__);

(statearr_71790[(1)] = (1));

return statearr_71790;
});
var cljs$core$async$mult_$_state_machine__63088__auto____1 = (function (state_71578){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_71578);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e71799){var ex__63091__auto__ = e71799;
var statearr_71804_74394 = state_71578;
(statearr_71804_74394[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_71578[(4)]))){
var statearr_71809_74395 = state_71578;
(statearr_71809_74395[(1)] = cljs.core.first((state_71578[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74397 = state_71578;
state_71578 = G__74397;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__63088__auto__ = function(state_71578){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__63088__auto____1.call(this,state_71578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__63088__auto____0;
cljs$core$async$mult_$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__63088__auto____1;
return cljs$core$async$mult_$_state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_71810 = f__63209__auto__();
(statearr_71810[(6)] = c__63208__auto___74247);

return statearr_71810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
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
var G__71813 = arguments.length;
switch (G__71813) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_74401 = (function (m,ch){
var x__5497__auto__ = (((m == null))?null:m);
var m__5498__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5498__auto__.call(null,m,ch));
} else {
var m__5496__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5496__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_74401(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_74402 = (function (m,ch){
var x__5497__auto__ = (((m == null))?null:m);
var m__5498__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5498__auto__.call(null,m,ch));
} else {
var m__5496__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5496__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_74402(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_74411 = (function (m){
var x__5497__auto__ = (((m == null))?null:m);
var m__5498__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5498__auto__.call(null,m));
} else {
var m__5496__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5496__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_74411(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_74415 = (function (m,state_map){
var x__5497__auto__ = (((m == null))?null:m);
var m__5498__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5498__auto__.call(null,m,state_map));
} else {
var m__5496__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5496__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_74415(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_74419 = (function (m,mode){
var x__5497__auto__ = (((m == null))?null:m);
var m__5498__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5498__auto__.call(null,m,mode));
} else {
var m__5496__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5496__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_74419(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5881__auto__ = [];
var len__5875__auto___74427 = arguments.length;
var i__5876__auto___74428 = (0);
while(true){
if((i__5876__auto___74428 < len__5875__auto___74427)){
args__5881__auto__.push((arguments[i__5876__auto___74428]));

var G__74429 = (i__5876__auto___74428 + (1));
i__5876__auto___74428 = G__74429;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((3) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5882__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__71872){
var map__71873 = p__71872;
var map__71873__$1 = cljs.core.__destructure_map(map__71873);
var opts = map__71873__$1;
var statearr_71874_74430 = state;
(statearr_71874_74430[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_71877_74433 = state;
(statearr_71877_74433[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_71878_74434 = state;
(statearr_71878_74434[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq71865){
var G__71867 = cljs.core.first(seq71865);
var seq71865__$1 = cljs.core.next(seq71865);
var G__71868 = cljs.core.first(seq71865__$1);
var seq71865__$2 = cljs.core.next(seq71865__$1);
var G__71869 = cljs.core.first(seq71865__$2);
var seq71865__$3 = cljs.core.next(seq71865__$2);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71867,G__71868,G__71869,seq71865__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71891 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta71892){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta71892 = meta71892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71893,meta71892__$1){
var self__ = this;
var _71893__$1 = this;
return (new cljs.core.async.t_cljs$core$async71891(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta71892__$1));
}));

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71893){
var self__ = this;
var _71893__$1 = this;
return self__.meta71892;
}));

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta71892","meta71892",-752881900,null)], null);
}));

(cljs.core.async.t_cljs$core$async71891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71891");

(cljs.core.async.t_cljs$core$async71891.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async71891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71891.
 */
cljs.core.async.__GT_t_cljs$core$async71891 = (function cljs$core$async$__GT_t_cljs$core$async71891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta71892){
return (new cljs.core.async.t_cljs$core$async71891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta71892));
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
var m = (new cljs.core.async.t_cljs$core$async71891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__63208__auto___74449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_71987){
var state_val_71988 = (state_71987[(1)]);
if((state_val_71988 === (7))){
var inst_71943 = (state_71987[(2)]);
var state_71987__$1 = state_71987;
if(cljs.core.truth_(inst_71943)){
var statearr_71992_74450 = state_71987__$1;
(statearr_71992_74450[(1)] = (8));

} else {
var statearr_71993_74451 = state_71987__$1;
(statearr_71993_74451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (20))){
var inst_71936 = (state_71987[(7)]);
var state_71987__$1 = state_71987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71987__$1,(23),out,inst_71936);
} else {
if((state_val_71988 === (1))){
var inst_71917 = calc_state();
var inst_71918 = cljs.core.__destructure_map(inst_71917);
var inst_71919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71918,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71918,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71918,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_71924 = inst_71917;
var state_71987__$1 = (function (){var statearr_71995 = state_71987;
(statearr_71995[(8)] = inst_71919);

(statearr_71995[(9)] = inst_71920);

(statearr_71995[(10)] = inst_71923);

(statearr_71995[(11)] = inst_71924);

return statearr_71995;
})();
var statearr_71996_74457 = state_71987__$1;
(statearr_71996_74457[(2)] = null);

(statearr_71996_74457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (24))){
var inst_71927 = (state_71987[(12)]);
var inst_71924 = inst_71927;
var state_71987__$1 = (function (){var statearr_71997 = state_71987;
(statearr_71997[(11)] = inst_71924);

return statearr_71997;
})();
var statearr_71999_74458 = state_71987__$1;
(statearr_71999_74458[(2)] = null);

(statearr_71999_74458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (4))){
var inst_71936 = (state_71987[(7)]);
var inst_71938 = (state_71987[(13)]);
var inst_71935 = (state_71987[(2)]);
var inst_71936__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71935,(0),null);
var inst_71937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71935,(1),null);
var inst_71938__$1 = (inst_71936__$1 == null);
var state_71987__$1 = (function (){var statearr_72006 = state_71987;
(statearr_72006[(7)] = inst_71936__$1);

(statearr_72006[(14)] = inst_71937);

(statearr_72006[(13)] = inst_71938__$1);

return statearr_72006;
})();
if(cljs.core.truth_(inst_71938__$1)){
var statearr_72007_74459 = state_71987__$1;
(statearr_72007_74459[(1)] = (5));

} else {
var statearr_72009_74460 = state_71987__$1;
(statearr_72009_74460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (15))){
var inst_71928 = (state_71987[(15)]);
var inst_71959 = (state_71987[(16)]);
var inst_71959__$1 = cljs.core.empty_QMARK_(inst_71928);
var state_71987__$1 = (function (){var statearr_72017 = state_71987;
(statearr_72017[(16)] = inst_71959__$1);

return statearr_72017;
})();
if(inst_71959__$1){
var statearr_72018_74461 = state_71987__$1;
(statearr_72018_74461[(1)] = (17));

} else {
var statearr_72022_74462 = state_71987__$1;
(statearr_72022_74462[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (21))){
var inst_71927 = (state_71987[(12)]);
var inst_71924 = inst_71927;
var state_71987__$1 = (function (){var statearr_72031 = state_71987;
(statearr_72031[(11)] = inst_71924);

return statearr_72031;
})();
var statearr_72032_74463 = state_71987__$1;
(statearr_72032_74463[(2)] = null);

(statearr_72032_74463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (13))){
var inst_71952 = (state_71987[(2)]);
var inst_71953 = calc_state();
var inst_71924 = inst_71953;
var state_71987__$1 = (function (){var statearr_72037 = state_71987;
(statearr_72037[(17)] = inst_71952);

(statearr_72037[(11)] = inst_71924);

return statearr_72037;
})();
var statearr_72038_74464 = state_71987__$1;
(statearr_72038_74464[(2)] = null);

(statearr_72038_74464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (22))){
var inst_71980 = (state_71987[(2)]);
var state_71987__$1 = state_71987;
var statearr_72049_74465 = state_71987__$1;
(statearr_72049_74465[(2)] = inst_71980);

(statearr_72049_74465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (6))){
var inst_71937 = (state_71987[(14)]);
var inst_71941 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71937,change);
var state_71987__$1 = state_71987;
var statearr_72056_74466 = state_71987__$1;
(statearr_72056_74466[(2)] = inst_71941);

(statearr_72056_74466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (25))){
var state_71987__$1 = state_71987;
var statearr_72066_74467 = state_71987__$1;
(statearr_72066_74467[(2)] = null);

(statearr_72066_74467[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (17))){
var inst_71929 = (state_71987[(18)]);
var inst_71937 = (state_71987[(14)]);
var inst_71961 = (inst_71929.cljs$core$IFn$_invoke$arity$1 ? inst_71929.cljs$core$IFn$_invoke$arity$1(inst_71937) : inst_71929.call(null,inst_71937));
var inst_71962 = cljs.core.not(inst_71961);
var state_71987__$1 = state_71987;
var statearr_72079_74468 = state_71987__$1;
(statearr_72079_74468[(2)] = inst_71962);

(statearr_72079_74468[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (3))){
var inst_71984 = (state_71987[(2)]);
var state_71987__$1 = state_71987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71987__$1,inst_71984);
} else {
if((state_val_71988 === (12))){
var state_71987__$1 = state_71987;
var statearr_72083_74469 = state_71987__$1;
(statearr_72083_74469[(2)] = null);

(statearr_72083_74469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (2))){
var inst_71924 = (state_71987[(11)]);
var inst_71927 = (state_71987[(12)]);
var inst_71927__$1 = cljs.core.__destructure_map(inst_71924);
var inst_71928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71927__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71927__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71927__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_71987__$1 = (function (){var statearr_72090 = state_71987;
(statearr_72090[(12)] = inst_71927__$1);

(statearr_72090[(15)] = inst_71928);

(statearr_72090[(18)] = inst_71929);

return statearr_72090;
})();
return cljs.core.async.ioc_alts_BANG_(state_71987__$1,(4),inst_71930);
} else {
if((state_val_71988 === (23))){
var inst_71970 = (state_71987[(2)]);
var state_71987__$1 = state_71987;
if(cljs.core.truth_(inst_71970)){
var statearr_72096_74470 = state_71987__$1;
(statearr_72096_74470[(1)] = (24));

} else {
var statearr_72104_74471 = state_71987__$1;
(statearr_72104_74471[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (19))){
var inst_71965 = (state_71987[(2)]);
var state_71987__$1 = state_71987;
var statearr_72107_74472 = state_71987__$1;
(statearr_72107_74472[(2)] = inst_71965);

(statearr_72107_74472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (11))){
var inst_71937 = (state_71987[(14)]);
var inst_71949 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_71937);
var state_71987__$1 = state_71987;
var statearr_72118_74473 = state_71987__$1;
(statearr_72118_74473[(2)] = inst_71949);

(statearr_72118_74473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (9))){
var inst_71928 = (state_71987[(15)]);
var inst_71937 = (state_71987[(14)]);
var inst_71956 = (state_71987[(19)]);
var inst_71956__$1 = (inst_71928.cljs$core$IFn$_invoke$arity$1 ? inst_71928.cljs$core$IFn$_invoke$arity$1(inst_71937) : inst_71928.call(null,inst_71937));
var state_71987__$1 = (function (){var statearr_72122 = state_71987;
(statearr_72122[(19)] = inst_71956__$1);

return statearr_72122;
})();
if(cljs.core.truth_(inst_71956__$1)){
var statearr_72124_74474 = state_71987__$1;
(statearr_72124_74474[(1)] = (14));

} else {
var statearr_72126_74475 = state_71987__$1;
(statearr_72126_74475[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (5))){
var inst_71938 = (state_71987[(13)]);
var state_71987__$1 = state_71987;
var statearr_72127_74476 = state_71987__$1;
(statearr_72127_74476[(2)] = inst_71938);

(statearr_72127_74476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (14))){
var inst_71956 = (state_71987[(19)]);
var state_71987__$1 = state_71987;
var statearr_72129_74477 = state_71987__$1;
(statearr_72129_74477[(2)] = inst_71956);

(statearr_72129_74477[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (26))){
var inst_71975 = (state_71987[(2)]);
var state_71987__$1 = state_71987;
var statearr_72133_74478 = state_71987__$1;
(statearr_72133_74478[(2)] = inst_71975);

(statearr_72133_74478[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (16))){
var inst_71967 = (state_71987[(2)]);
var state_71987__$1 = state_71987;
if(cljs.core.truth_(inst_71967)){
var statearr_72134_74479 = state_71987__$1;
(statearr_72134_74479[(1)] = (20));

} else {
var statearr_72135_74480 = state_71987__$1;
(statearr_72135_74480[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (10))){
var inst_71982 = (state_71987[(2)]);
var state_71987__$1 = state_71987;
var statearr_72138_74481 = state_71987__$1;
(statearr_72138_74481[(2)] = inst_71982);

(statearr_72138_74481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (18))){
var inst_71959 = (state_71987[(16)]);
var state_71987__$1 = state_71987;
var statearr_72139_74482 = state_71987__$1;
(statearr_72139_74482[(2)] = inst_71959);

(statearr_72139_74482[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71988 === (8))){
var inst_71936 = (state_71987[(7)]);
var inst_71947 = (inst_71936 == null);
var state_71987__$1 = state_71987;
if(cljs.core.truth_(inst_71947)){
var statearr_72144_74483 = state_71987__$1;
(statearr_72144_74483[(1)] = (11));

} else {
var statearr_72145_74484 = state_71987__$1;
(statearr_72145_74484[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__63088__auto__ = null;
var cljs$core$async$mix_$_state_machine__63088__auto____0 = (function (){
var statearr_72149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72149[(0)] = cljs$core$async$mix_$_state_machine__63088__auto__);

(statearr_72149[(1)] = (1));

return statearr_72149;
});
var cljs$core$async$mix_$_state_machine__63088__auto____1 = (function (state_71987){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_71987);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e72150){var ex__63091__auto__ = e72150;
var statearr_72153_74485 = state_71987;
(statearr_72153_74485[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_71987[(4)]))){
var statearr_72155_74486 = state_71987;
(statearr_72155_74486[(1)] = cljs.core.first((state_71987[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74487 = state_71987;
state_71987 = G__74487;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__63088__auto__ = function(state_71987){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__63088__auto____1.call(this,state_71987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__63088__auto____0;
cljs$core$async$mix_$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__63088__auto____1;
return cljs$core$async$mix_$_state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_72159 = f__63209__auto__();
(statearr_72159[(6)] = c__63208__auto___74449);

return statearr_72159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_74488 = (function (p,v,ch,close_QMARK_){
var x__5497__auto__ = (((p == null))?null:p);
var m__5498__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5498__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5496__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5496__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_74488(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_74489 = (function (p,v,ch){
var x__5497__auto__ = (((p == null))?null:p);
var m__5498__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5498__auto__.call(null,p,v,ch));
} else {
var m__5496__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5496__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_74489(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_74490 = (function() {
var G__74491 = null;
var G__74491__1 = (function (p){
var x__5497__auto__ = (((p == null))?null:p);
var m__5498__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5498__auto__.call(null,p));
} else {
var m__5496__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5496__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__74491__2 = (function (p,v){
var x__5497__auto__ = (((p == null))?null:p);
var m__5498__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5498__auto__.call(null,p,v));
} else {
var m__5496__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5496__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__74491 = function(p,v){
switch(arguments.length){
case 1:
return G__74491__1.call(this,p);
case 2:
return G__74491__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__74491.cljs$core$IFn$_invoke$arity$1 = G__74491__1;
G__74491.cljs$core$IFn$_invoke$arity$2 = G__74491__2;
return G__74491;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__72197 = arguments.length;
switch (G__72197) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_74490(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_74490(p,v);
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
cljs.core.async.t_cljs$core$async72212 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta72213){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta72213 = meta72213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72214,meta72213__$1){
var self__ = this;
var _72214__$1 = this;
return (new cljs.core.async.t_cljs$core$async72212(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta72213__$1));
}));

(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72214){
var self__ = this;
var _72214__$1 = this;
return self__.meta72213;
}));

(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async72212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async72212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta72213","meta72213",-189022846,null)], null);
}));

(cljs.core.async.t_cljs$core$async72212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72212");

(cljs.core.async.t_cljs$core$async72212.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async72212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72212.
 */
cljs.core.async.__GT_t_cljs$core$async72212 = (function cljs$core$async$__GT_t_cljs$core$async72212(ch,topic_fn,buf_fn,mults,ensure_mult,meta72213){
return (new cljs.core.async.t_cljs$core$async72212(ch,topic_fn,buf_fn,mults,ensure_mult,meta72213));
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
var G__72207 = arguments.length;
switch (G__72207) {
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
var or__5141__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__72205_SHARP_){
if(cljs.core.truth_((p1__72205_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__72205_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__72205_SHARP_.call(null,topic)))){
return p1__72205_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__72205_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async72212(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__63208__auto___74497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_72314){
var state_val_72316 = (state_72314[(1)]);
if((state_val_72316 === (7))){
var inst_72307 = (state_72314[(2)]);
var state_72314__$1 = state_72314;
var statearr_72317_74498 = state_72314__$1;
(statearr_72317_74498[(2)] = inst_72307);

(statearr_72317_74498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (20))){
var state_72314__$1 = state_72314;
var statearr_72320_74499 = state_72314__$1;
(statearr_72320_74499[(2)] = null);

(statearr_72320_74499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (1))){
var state_72314__$1 = state_72314;
var statearr_72325_74500 = state_72314__$1;
(statearr_72325_74500[(2)] = null);

(statearr_72325_74500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (24))){
var inst_72288 = (state_72314[(7)]);
var inst_72299 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_72288);
var state_72314__$1 = state_72314;
var statearr_72328_74501 = state_72314__$1;
(statearr_72328_74501[(2)] = inst_72299);

(statearr_72328_74501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (4))){
var inst_72231 = (state_72314[(8)]);
var inst_72231__$1 = (state_72314[(2)]);
var inst_72232 = (inst_72231__$1 == null);
var state_72314__$1 = (function (){var statearr_72329 = state_72314;
(statearr_72329[(8)] = inst_72231__$1);

return statearr_72329;
})();
if(cljs.core.truth_(inst_72232)){
var statearr_72330_74502 = state_72314__$1;
(statearr_72330_74502[(1)] = (5));

} else {
var statearr_72331_74503 = state_72314__$1;
(statearr_72331_74503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (15))){
var inst_72282 = (state_72314[(2)]);
var state_72314__$1 = state_72314;
var statearr_72333_74504 = state_72314__$1;
(statearr_72333_74504[(2)] = inst_72282);

(statearr_72333_74504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (21))){
var inst_72304 = (state_72314[(2)]);
var state_72314__$1 = (function (){var statearr_72335 = state_72314;
(statearr_72335[(9)] = inst_72304);

return statearr_72335;
})();
var statearr_72337_74505 = state_72314__$1;
(statearr_72337_74505[(2)] = null);

(statearr_72337_74505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (13))){
var inst_72255 = (state_72314[(10)]);
var inst_72260 = cljs.core.chunked_seq_QMARK_(inst_72255);
var state_72314__$1 = state_72314;
if(inst_72260){
var statearr_72338_74506 = state_72314__$1;
(statearr_72338_74506[(1)] = (16));

} else {
var statearr_72339_74507 = state_72314__$1;
(statearr_72339_74507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (22))){
var inst_72296 = (state_72314[(2)]);
var state_72314__$1 = state_72314;
if(cljs.core.truth_(inst_72296)){
var statearr_72340_74508 = state_72314__$1;
(statearr_72340_74508[(1)] = (23));

} else {
var statearr_72341_74509 = state_72314__$1;
(statearr_72341_74509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (6))){
var inst_72231 = (state_72314[(8)]);
var inst_72288 = (state_72314[(7)]);
var inst_72292 = (state_72314[(11)]);
var inst_72288__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_72231) : topic_fn.call(null,inst_72231));
var inst_72291 = cljs.core.deref(mults);
var inst_72292__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72291,inst_72288__$1);
var state_72314__$1 = (function (){var statearr_72346 = state_72314;
(statearr_72346[(7)] = inst_72288__$1);

(statearr_72346[(11)] = inst_72292__$1);

return statearr_72346;
})();
if(cljs.core.truth_(inst_72292__$1)){
var statearr_72348_74510 = state_72314__$1;
(statearr_72348_74510[(1)] = (19));

} else {
var statearr_72349_74511 = state_72314__$1;
(statearr_72349_74511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (25))){
var inst_72301 = (state_72314[(2)]);
var state_72314__$1 = state_72314;
var statearr_72351_74512 = state_72314__$1;
(statearr_72351_74512[(2)] = inst_72301);

(statearr_72351_74512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (17))){
var inst_72255 = (state_72314[(10)]);
var inst_72267 = cljs.core.first(inst_72255);
var inst_72274 = cljs.core.async.muxch_STAR_(inst_72267);
var inst_72275 = cljs.core.async.close_BANG_(inst_72274);
var inst_72276 = cljs.core.next(inst_72255);
var inst_72241 = inst_72276;
var inst_72242 = null;
var inst_72243 = (0);
var inst_72244 = (0);
var state_72314__$1 = (function (){var statearr_72354 = state_72314;
(statearr_72354[(12)] = inst_72275);

(statearr_72354[(13)] = inst_72241);

(statearr_72354[(14)] = inst_72242);

(statearr_72354[(15)] = inst_72243);

(statearr_72354[(16)] = inst_72244);

return statearr_72354;
})();
var statearr_72355_74513 = state_72314__$1;
(statearr_72355_74513[(2)] = null);

(statearr_72355_74513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (3))){
var inst_72309 = (state_72314[(2)]);
var state_72314__$1 = state_72314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72314__$1,inst_72309);
} else {
if((state_val_72316 === (12))){
var inst_72284 = (state_72314[(2)]);
var state_72314__$1 = state_72314;
var statearr_72356_74514 = state_72314__$1;
(statearr_72356_74514[(2)] = inst_72284);

(statearr_72356_74514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (2))){
var state_72314__$1 = state_72314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72314__$1,(4),ch);
} else {
if((state_val_72316 === (23))){
var state_72314__$1 = state_72314;
var statearr_72364_74516 = state_72314__$1;
(statearr_72364_74516[(2)] = null);

(statearr_72364_74516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (19))){
var inst_72292 = (state_72314[(11)]);
var inst_72231 = (state_72314[(8)]);
var inst_72294 = cljs.core.async.muxch_STAR_(inst_72292);
var state_72314__$1 = state_72314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72314__$1,(22),inst_72294,inst_72231);
} else {
if((state_val_72316 === (11))){
var inst_72241 = (state_72314[(13)]);
var inst_72255 = (state_72314[(10)]);
var inst_72255__$1 = cljs.core.seq(inst_72241);
var state_72314__$1 = (function (){var statearr_72373 = state_72314;
(statearr_72373[(10)] = inst_72255__$1);

return statearr_72373;
})();
if(inst_72255__$1){
var statearr_72374_74518 = state_72314__$1;
(statearr_72374_74518[(1)] = (13));

} else {
var statearr_72379_74519 = state_72314__$1;
(statearr_72379_74519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (9))){
var inst_72286 = (state_72314[(2)]);
var state_72314__$1 = state_72314;
var statearr_72388_74520 = state_72314__$1;
(statearr_72388_74520[(2)] = inst_72286);

(statearr_72388_74520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (5))){
var inst_72238 = cljs.core.deref(mults);
var inst_72239 = cljs.core.vals(inst_72238);
var inst_72240 = cljs.core.seq(inst_72239);
var inst_72241 = inst_72240;
var inst_72242 = null;
var inst_72243 = (0);
var inst_72244 = (0);
var state_72314__$1 = (function (){var statearr_72392 = state_72314;
(statearr_72392[(13)] = inst_72241);

(statearr_72392[(14)] = inst_72242);

(statearr_72392[(15)] = inst_72243);

(statearr_72392[(16)] = inst_72244);

return statearr_72392;
})();
var statearr_72396_74521 = state_72314__$1;
(statearr_72396_74521[(2)] = null);

(statearr_72396_74521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (14))){
var state_72314__$1 = state_72314;
var statearr_72400_74522 = state_72314__$1;
(statearr_72400_74522[(2)] = null);

(statearr_72400_74522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (16))){
var inst_72255 = (state_72314[(10)]);
var inst_72262 = cljs.core.chunk_first(inst_72255);
var inst_72263 = cljs.core.chunk_rest(inst_72255);
var inst_72264 = cljs.core.count(inst_72262);
var inst_72241 = inst_72263;
var inst_72242 = inst_72262;
var inst_72243 = inst_72264;
var inst_72244 = (0);
var state_72314__$1 = (function (){var statearr_72402 = state_72314;
(statearr_72402[(13)] = inst_72241);

(statearr_72402[(14)] = inst_72242);

(statearr_72402[(15)] = inst_72243);

(statearr_72402[(16)] = inst_72244);

return statearr_72402;
})();
var statearr_72404_74523 = state_72314__$1;
(statearr_72404_74523[(2)] = null);

(statearr_72404_74523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (10))){
var inst_72242 = (state_72314[(14)]);
var inst_72244 = (state_72314[(16)]);
var inst_72241 = (state_72314[(13)]);
var inst_72243 = (state_72314[(15)]);
var inst_72249 = cljs.core._nth(inst_72242,inst_72244);
var inst_72250 = cljs.core.async.muxch_STAR_(inst_72249);
var inst_72251 = cljs.core.async.close_BANG_(inst_72250);
var inst_72252 = (inst_72244 + (1));
var tmp72397 = inst_72241;
var tmp72398 = inst_72243;
var tmp72399 = inst_72242;
var inst_72241__$1 = tmp72397;
var inst_72242__$1 = tmp72399;
var inst_72243__$1 = tmp72398;
var inst_72244__$1 = inst_72252;
var state_72314__$1 = (function (){var statearr_72406 = state_72314;
(statearr_72406[(17)] = inst_72251);

(statearr_72406[(13)] = inst_72241__$1);

(statearr_72406[(14)] = inst_72242__$1);

(statearr_72406[(15)] = inst_72243__$1);

(statearr_72406[(16)] = inst_72244__$1);

return statearr_72406;
})();
var statearr_72407_74525 = state_72314__$1;
(statearr_72407_74525[(2)] = null);

(statearr_72407_74525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (18))){
var inst_72279 = (state_72314[(2)]);
var state_72314__$1 = state_72314;
var statearr_72410_74526 = state_72314__$1;
(statearr_72410_74526[(2)] = inst_72279);

(statearr_72410_74526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72316 === (8))){
var inst_72244 = (state_72314[(16)]);
var inst_72243 = (state_72314[(15)]);
var inst_72246 = (inst_72244 < inst_72243);
var inst_72247 = inst_72246;
var state_72314__$1 = state_72314;
if(cljs.core.truth_(inst_72247)){
var statearr_72412_74527 = state_72314__$1;
(statearr_72412_74527[(1)] = (10));

} else {
var statearr_72413_74528 = state_72314__$1;
(statearr_72413_74528[(1)] = (11));

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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_72423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72423[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_72423[(1)] = (1));

return statearr_72423;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_72314){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_72314);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e72428){var ex__63091__auto__ = e72428;
var statearr_72431_74533 = state_72314;
(statearr_72431_74533[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_72314[(4)]))){
var statearr_72435_74534 = state_72314;
(statearr_72435_74534[(1)] = cljs.core.first((state_72314[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74535 = state_72314;
state_72314 = G__74535;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_72314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_72314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_72452 = f__63209__auto__();
(statearr_72452[(6)] = c__63208__auto___74497);

return statearr_72452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
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
var G__72471 = arguments.length;
switch (G__72471) {
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
var G__72497 = arguments.length;
switch (G__72497) {
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
var G__72515 = arguments.length;
switch (G__72515) {
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
var c__63208__auto___74542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_72677){
var state_val_72678 = (state_72677[(1)]);
if((state_val_72678 === (7))){
var state_72677__$1 = state_72677;
var statearr_72681_74547 = state_72677__$1;
(statearr_72681_74547[(2)] = null);

(statearr_72681_74547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (1))){
var state_72677__$1 = state_72677;
var statearr_72684_74549 = state_72677__$1;
(statearr_72684_74549[(2)] = null);

(statearr_72684_74549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (4))){
var inst_72602 = (state_72677[(7)]);
var inst_72601 = (state_72677[(8)]);
var inst_72604 = (inst_72602 < inst_72601);
var state_72677__$1 = state_72677;
if(cljs.core.truth_(inst_72604)){
var statearr_72687_74553 = state_72677__$1;
(statearr_72687_74553[(1)] = (6));

} else {
var statearr_72688_74554 = state_72677__$1;
(statearr_72688_74554[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (15))){
var inst_72662 = (state_72677[(9)]);
var inst_72667 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_72662);
var state_72677__$1 = state_72677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72677__$1,(17),out,inst_72667);
} else {
if((state_val_72678 === (13))){
var inst_72662 = (state_72677[(9)]);
var inst_72662__$1 = (state_72677[(2)]);
var inst_72663 = cljs.core.some(cljs.core.nil_QMARK_,inst_72662__$1);
var state_72677__$1 = (function (){var statearr_72694 = state_72677;
(statearr_72694[(9)] = inst_72662__$1);

return statearr_72694;
})();
if(cljs.core.truth_(inst_72663)){
var statearr_72698_74555 = state_72677__$1;
(statearr_72698_74555[(1)] = (14));

} else {
var statearr_72699_74565 = state_72677__$1;
(statearr_72699_74565[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (6))){
var state_72677__$1 = state_72677;
var statearr_72700_74566 = state_72677__$1;
(statearr_72700_74566[(2)] = null);

(statearr_72700_74566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (17))){
var inst_72669 = (state_72677[(2)]);
var state_72677__$1 = (function (){var statearr_72702 = state_72677;
(statearr_72702[(10)] = inst_72669);

return statearr_72702;
})();
var statearr_72703_74567 = state_72677__$1;
(statearr_72703_74567[(2)] = null);

(statearr_72703_74567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (3))){
var inst_72674 = (state_72677[(2)]);
var state_72677__$1 = state_72677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72677__$1,inst_72674);
} else {
if((state_val_72678 === (12))){
var _ = (function (){var statearr_72709 = state_72677;
(statearr_72709[(4)] = cljs.core.rest((state_72677[(4)])));

return statearr_72709;
})();
var state_72677__$1 = state_72677;
var ex72701 = (state_72677__$1[(2)]);
var statearr_72712_74568 = state_72677__$1;
(statearr_72712_74568[(5)] = ex72701);


if((ex72701 instanceof Object)){
var statearr_72713_74569 = state_72677__$1;
(statearr_72713_74569[(1)] = (11));

(statearr_72713_74569[(5)] = null);

} else {
throw ex72701;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (2))){
var inst_72600 = cljs.core.reset_BANG_(dctr,cnt);
var inst_72601 = cnt;
var inst_72602 = (0);
var state_72677__$1 = (function (){var statearr_72714 = state_72677;
(statearr_72714[(11)] = inst_72600);

(statearr_72714[(8)] = inst_72601);

(statearr_72714[(7)] = inst_72602);

return statearr_72714;
})();
var statearr_72719_74570 = state_72677__$1;
(statearr_72719_74570[(2)] = null);

(statearr_72719_74570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (11))){
var inst_72622 = (state_72677[(2)]);
var inst_72623 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_72677__$1 = (function (){var statearr_72722 = state_72677;
(statearr_72722[(12)] = inst_72622);

return statearr_72722;
})();
var statearr_72723_74571 = state_72677__$1;
(statearr_72723_74571[(2)] = inst_72623);

(statearr_72723_74571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (9))){
var inst_72602 = (state_72677[(7)]);
var _ = (function (){var statearr_72725 = state_72677;
(statearr_72725[(4)] = cljs.core.cons((12),(state_72677[(4)])));

return statearr_72725;
})();
var inst_72642 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_72602) : chs__$1.call(null,inst_72602));
var inst_72643 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_72602) : done.call(null,inst_72602));
var inst_72644 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_72642,inst_72643);
var ___$1 = (function (){var statearr_72726 = state_72677;
(statearr_72726[(4)] = cljs.core.rest((state_72677[(4)])));

return statearr_72726;
})();
var state_72677__$1 = state_72677;
var statearr_72727_74573 = state_72677__$1;
(statearr_72727_74573[(2)] = inst_72644);

(statearr_72727_74573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (5))){
var inst_72658 = (state_72677[(2)]);
var state_72677__$1 = (function (){var statearr_72730 = state_72677;
(statearr_72730[(13)] = inst_72658);

return statearr_72730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72677__$1,(13),dchan);
} else {
if((state_val_72678 === (14))){
var inst_72665 = cljs.core.async.close_BANG_(out);
var state_72677__$1 = state_72677;
var statearr_72731_74574 = state_72677__$1;
(statearr_72731_74574[(2)] = inst_72665);

(statearr_72731_74574[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (16))){
var inst_72672 = (state_72677[(2)]);
var state_72677__$1 = state_72677;
var statearr_72732_74575 = state_72677__$1;
(statearr_72732_74575[(2)] = inst_72672);

(statearr_72732_74575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (10))){
var inst_72602 = (state_72677[(7)]);
var inst_72647 = (state_72677[(2)]);
var inst_72648 = (inst_72602 + (1));
var inst_72602__$1 = inst_72648;
var state_72677__$1 = (function (){var statearr_72733 = state_72677;
(statearr_72733[(14)] = inst_72647);

(statearr_72733[(7)] = inst_72602__$1);

return statearr_72733;
})();
var statearr_72734_74579 = state_72677__$1;
(statearr_72734_74579[(2)] = null);

(statearr_72734_74579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72678 === (8))){
var inst_72656 = (state_72677[(2)]);
var state_72677__$1 = state_72677;
var statearr_72735_74580 = state_72677__$1;
(statearr_72735_74580[(2)] = inst_72656);

(statearr_72735_74580[(1)] = (5));


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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_72739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72739[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_72739[(1)] = (1));

return statearr_72739;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_72677){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_72677);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e72740){var ex__63091__auto__ = e72740;
var statearr_72741_74581 = state_72677;
(statearr_72741_74581[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_72677[(4)]))){
var statearr_72742_74582 = state_72677;
(statearr_72742_74582[(1)] = cljs.core.first((state_72677[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74587 = state_72677;
state_72677 = G__74587;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_72677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_72677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_72744 = f__63209__auto__();
(statearr_72744[(6)] = c__63208__auto___74542);

return statearr_72744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
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
var G__72750 = arguments.length;
switch (G__72750) {
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
var c__63208__auto___74593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_72786){
var state_val_72787 = (state_72786[(1)]);
if((state_val_72787 === (7))){
var inst_72763 = (state_72786[(7)]);
var inst_72766 = (state_72786[(8)]);
var inst_72763__$1 = (state_72786[(2)]);
var inst_72766__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72763__$1,(0),null);
var inst_72767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72763__$1,(1),null);
var inst_72768 = (inst_72766__$1 == null);
var state_72786__$1 = (function (){var statearr_72791 = state_72786;
(statearr_72791[(7)] = inst_72763__$1);

(statearr_72791[(8)] = inst_72766__$1);

(statearr_72791[(9)] = inst_72767);

return statearr_72791;
})();
if(cljs.core.truth_(inst_72768)){
var statearr_72793_74594 = state_72786__$1;
(statearr_72793_74594[(1)] = (8));

} else {
var statearr_72794_74595 = state_72786__$1;
(statearr_72794_74595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72787 === (1))){
var inst_72753 = cljs.core.vec(chs);
var inst_72754 = inst_72753;
var state_72786__$1 = (function (){var statearr_72795 = state_72786;
(statearr_72795[(10)] = inst_72754);

return statearr_72795;
})();
var statearr_72796_74596 = state_72786__$1;
(statearr_72796_74596[(2)] = null);

(statearr_72796_74596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72787 === (4))){
var inst_72754 = (state_72786[(10)]);
var state_72786__$1 = state_72786;
return cljs.core.async.ioc_alts_BANG_(state_72786__$1,(7),inst_72754);
} else {
if((state_val_72787 === (6))){
var inst_72782 = (state_72786[(2)]);
var state_72786__$1 = state_72786;
var statearr_72798_74601 = state_72786__$1;
(statearr_72798_74601[(2)] = inst_72782);

(statearr_72798_74601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72787 === (3))){
var inst_72784 = (state_72786[(2)]);
var state_72786__$1 = state_72786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72786__$1,inst_72784);
} else {
if((state_val_72787 === (2))){
var inst_72754 = (state_72786[(10)]);
var inst_72756 = cljs.core.count(inst_72754);
var inst_72757 = (inst_72756 > (0));
var state_72786__$1 = state_72786;
if(cljs.core.truth_(inst_72757)){
var statearr_72801_74603 = state_72786__$1;
(statearr_72801_74603[(1)] = (4));

} else {
var statearr_72802_74604 = state_72786__$1;
(statearr_72802_74604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72787 === (11))){
var inst_72754 = (state_72786[(10)]);
var inst_72775 = (state_72786[(2)]);
var tmp72799 = inst_72754;
var inst_72754__$1 = tmp72799;
var state_72786__$1 = (function (){var statearr_72803 = state_72786;
(statearr_72803[(11)] = inst_72775);

(statearr_72803[(10)] = inst_72754__$1);

return statearr_72803;
})();
var statearr_72804_74615 = state_72786__$1;
(statearr_72804_74615[(2)] = null);

(statearr_72804_74615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72787 === (9))){
var inst_72766 = (state_72786[(8)]);
var state_72786__$1 = state_72786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72786__$1,(11),out,inst_72766);
} else {
if((state_val_72787 === (5))){
var inst_72780 = cljs.core.async.close_BANG_(out);
var state_72786__$1 = state_72786;
var statearr_72805_74616 = state_72786__$1;
(statearr_72805_74616[(2)] = inst_72780);

(statearr_72805_74616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72787 === (10))){
var inst_72778 = (state_72786[(2)]);
var state_72786__$1 = state_72786;
var statearr_72806_74617 = state_72786__$1;
(statearr_72806_74617[(2)] = inst_72778);

(statearr_72806_74617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72787 === (8))){
var inst_72754 = (state_72786[(10)]);
var inst_72763 = (state_72786[(7)]);
var inst_72766 = (state_72786[(8)]);
var inst_72767 = (state_72786[(9)]);
var inst_72770 = (function (){var cs = inst_72754;
var vec__72759 = inst_72763;
var v = inst_72766;
var c = inst_72767;
return (function (p1__72748_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__72748_SHARP_);
});
})();
var inst_72771 = cljs.core.filterv(inst_72770,inst_72754);
var inst_72754__$1 = inst_72771;
var state_72786__$1 = (function (){var statearr_72807 = state_72786;
(statearr_72807[(10)] = inst_72754__$1);

return statearr_72807;
})();
var statearr_72808_74618 = state_72786__$1;
(statearr_72808_74618[(2)] = null);

(statearr_72808_74618[(1)] = (2));


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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_72812 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72812[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_72812[(1)] = (1));

return statearr_72812;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_72786){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_72786);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e72813){var ex__63091__auto__ = e72813;
var statearr_72814_74619 = state_72786;
(statearr_72814_74619[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_72786[(4)]))){
var statearr_72815_74620 = state_72786;
(statearr_72815_74620[(1)] = cljs.core.first((state_72786[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74623 = state_72786;
state_72786 = G__74623;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_72786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_72786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_72816 = f__63209__auto__();
(statearr_72816[(6)] = c__63208__auto___74593);

return statearr_72816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
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
var G__72825 = arguments.length;
switch (G__72825) {
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
var c__63208__auto___74625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_72857){
var state_val_72860 = (state_72857[(1)]);
if((state_val_72860 === (7))){
var inst_72837 = (state_72857[(7)]);
var inst_72837__$1 = (state_72857[(2)]);
var inst_72838 = (inst_72837__$1 == null);
var inst_72839 = cljs.core.not(inst_72838);
var state_72857__$1 = (function (){var statearr_72861 = state_72857;
(statearr_72861[(7)] = inst_72837__$1);

return statearr_72861;
})();
if(inst_72839){
var statearr_72862_74626 = state_72857__$1;
(statearr_72862_74626[(1)] = (8));

} else {
var statearr_72863_74627 = state_72857__$1;
(statearr_72863_74627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72860 === (1))){
var inst_72826 = (0);
var state_72857__$1 = (function (){var statearr_72866 = state_72857;
(statearr_72866[(8)] = inst_72826);

return statearr_72866;
})();
var statearr_72867_74628 = state_72857__$1;
(statearr_72867_74628[(2)] = null);

(statearr_72867_74628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72860 === (4))){
var state_72857__$1 = state_72857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72857__$1,(7),ch);
} else {
if((state_val_72860 === (6))){
var inst_72850 = (state_72857[(2)]);
var state_72857__$1 = state_72857;
var statearr_72873_74629 = state_72857__$1;
(statearr_72873_74629[(2)] = inst_72850);

(statearr_72873_74629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72860 === (3))){
var inst_72852 = (state_72857[(2)]);
var inst_72853 = cljs.core.async.close_BANG_(out);
var state_72857__$1 = (function (){var statearr_72877 = state_72857;
(statearr_72877[(9)] = inst_72852);

return statearr_72877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72857__$1,inst_72853);
} else {
if((state_val_72860 === (2))){
var inst_72826 = (state_72857[(8)]);
var inst_72830 = (inst_72826 < n);
var state_72857__$1 = state_72857;
if(cljs.core.truth_(inst_72830)){
var statearr_72879_74630 = state_72857__$1;
(statearr_72879_74630[(1)] = (4));

} else {
var statearr_72884_74631 = state_72857__$1;
(statearr_72884_74631[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72860 === (11))){
var inst_72826 = (state_72857[(8)]);
var inst_72842 = (state_72857[(2)]);
var inst_72843 = (inst_72826 + (1));
var inst_72826__$1 = inst_72843;
var state_72857__$1 = (function (){var statearr_72890 = state_72857;
(statearr_72890[(10)] = inst_72842);

(statearr_72890[(8)] = inst_72826__$1);

return statearr_72890;
})();
var statearr_72894_74632 = state_72857__$1;
(statearr_72894_74632[(2)] = null);

(statearr_72894_74632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72860 === (9))){
var state_72857__$1 = state_72857;
var statearr_72896_74633 = state_72857__$1;
(statearr_72896_74633[(2)] = null);

(statearr_72896_74633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72860 === (5))){
var state_72857__$1 = state_72857;
var statearr_72898_74650 = state_72857__$1;
(statearr_72898_74650[(2)] = null);

(statearr_72898_74650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72860 === (10))){
var inst_72847 = (state_72857[(2)]);
var state_72857__$1 = state_72857;
var statearr_72899_74651 = state_72857__$1;
(statearr_72899_74651[(2)] = inst_72847);

(statearr_72899_74651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72860 === (8))){
var inst_72837 = (state_72857[(7)]);
var state_72857__$1 = state_72857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72857__$1,(11),out,inst_72837);
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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_72902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72902[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_72902[(1)] = (1));

return statearr_72902;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_72857){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_72857);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e72905){var ex__63091__auto__ = e72905;
var statearr_72906_74657 = state_72857;
(statearr_72906_74657[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_72857[(4)]))){
var statearr_72907_74658 = state_72857;
(statearr_72907_74658[(1)] = cljs.core.first((state_72857[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74659 = state_72857;
state_72857 = G__74659;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_72857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_72857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_72914 = f__63209__auto__();
(statearr_72914[(6)] = c__63208__auto___74625);

return statearr_72914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
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
cljs.core.async.t_cljs$core$async72937 = (function (f,ch,meta72920,_,fn1,meta72938){
this.f = f;
this.ch = ch;
this.meta72920 = meta72920;
this._ = _;
this.fn1 = fn1;
this.meta72938 = meta72938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72939,meta72938__$1){
var self__ = this;
var _72939__$1 = this;
return (new cljs.core.async.t_cljs$core$async72937(self__.f,self__.ch,self__.meta72920,self__._,self__.fn1,meta72938__$1));
}));

(cljs.core.async.t_cljs$core$async72937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72939){
var self__ = this;
var _72939__$1 = this;
return self__.meta72938;
}));

(cljs.core.async.t_cljs$core$async72937.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async72937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__72916_SHARP_){
var G__72943 = (((p1__72916_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__72916_SHARP_) : self__.f.call(null,p1__72916_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__72943) : f1.call(null,G__72943));
});
}));

(cljs.core.async.t_cljs$core$async72937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72920","meta72920",-1011187585,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async72919","cljs.core.async/t_cljs$core$async72919",763949517,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta72938","meta72938",-342942898,null)], null);
}));

(cljs.core.async.t_cljs$core$async72937.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72937");

(cljs.core.async.t_cljs$core$async72937.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async72937");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72937.
 */
cljs.core.async.__GT_t_cljs$core$async72937 = (function cljs$core$async$__GT_t_cljs$core$async72937(f,ch,meta72920,_,fn1,meta72938){
return (new cljs.core.async.t_cljs$core$async72937(f,ch,meta72920,_,fn1,meta72938));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72919 = (function (f,ch,meta72920){
this.f = f;
this.ch = ch;
this.meta72920 = meta72920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72921,meta72920__$1){
var self__ = this;
var _72921__$1 = this;
return (new cljs.core.async.t_cljs$core$async72919(self__.f,self__.ch,meta72920__$1));
}));

(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72921){
var self__ = this;
var _72921__$1 = this;
return self__.meta72920;
}));

(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async72937(self__.f,self__.ch,self__.meta72920,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5139__auto__ = ret;
if(cljs.core.truth_(and__5139__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5139__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__72982 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__72982) : self__.f.call(null,G__72982));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async72919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72920","meta72920",-1011187585,null)], null);
}));

(cljs.core.async.t_cljs$core$async72919.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72919");

(cljs.core.async.t_cljs$core$async72919.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async72919");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72919.
 */
cljs.core.async.__GT_t_cljs$core$async72919 = (function cljs$core$async$__GT_t_cljs$core$async72919(f,ch,meta72920){
return (new cljs.core.async.t_cljs$core$async72919(f,ch,meta72920));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async72919(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72995 = (function (f,ch,meta72996){
this.f = f;
this.ch = ch;
this.meta72996 = meta72996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72997,meta72996__$1){
var self__ = this;
var _72997__$1 = this;
return (new cljs.core.async.t_cljs$core$async72995(self__.f,self__.ch,meta72996__$1));
}));

(cljs.core.async.t_cljs$core$async72995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72997){
var self__ = this;
var _72997__$1 = this;
return self__.meta72996;
}));

(cljs.core.async.t_cljs$core$async72995.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72995.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72995.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72995.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async72995.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72995.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async72995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72996","meta72996",-1333223454,null)], null);
}));

(cljs.core.async.t_cljs$core$async72995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72995");

(cljs.core.async.t_cljs$core$async72995.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async72995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72995.
 */
cljs.core.async.__GT_t_cljs$core$async72995 = (function cljs$core$async$__GT_t_cljs$core$async72995(f,ch,meta72996){
return (new cljs.core.async.t_cljs$core$async72995(f,ch,meta72996));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async72995(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73007 = (function (p,ch,meta73008){
this.p = p;
this.ch = ch;
this.meta73008 = meta73008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73009,meta73008__$1){
var self__ = this;
var _73009__$1 = this;
return (new cljs.core.async.t_cljs$core$async73007(self__.p,self__.ch,meta73008__$1));
}));

(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73009){
var self__ = this;
var _73009__$1 = this;
return self__.meta73008;
}));

(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async73007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73008","meta73008",736624342,null)], null);
}));

(cljs.core.async.t_cljs$core$async73007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73007");

(cljs.core.async.t_cljs$core$async73007.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"cljs.core.async/t_cljs$core$async73007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73007.
 */
cljs.core.async.__GT_t_cljs$core$async73007 = (function cljs$core$async$__GT_t_cljs$core$async73007(p,ch,meta73008){
return (new cljs.core.async.t_cljs$core$async73007(p,ch,meta73008));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async73007(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__73078 = arguments.length;
switch (G__73078) {
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
var c__63208__auto___74705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_73126){
var state_val_73127 = (state_73126[(1)]);
if((state_val_73127 === (7))){
var inst_73122 = (state_73126[(2)]);
var state_73126__$1 = state_73126;
var statearr_73132_74706 = state_73126__$1;
(statearr_73132_74706[(2)] = inst_73122);

(statearr_73132_74706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73127 === (1))){
var state_73126__$1 = state_73126;
var statearr_73133_74707 = state_73126__$1;
(statearr_73133_74707[(2)] = null);

(statearr_73133_74707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73127 === (4))){
var inst_73103 = (state_73126[(7)]);
var inst_73103__$1 = (state_73126[(2)]);
var inst_73105 = (inst_73103__$1 == null);
var state_73126__$1 = (function (){var statearr_73136 = state_73126;
(statearr_73136[(7)] = inst_73103__$1);

return statearr_73136;
})();
if(cljs.core.truth_(inst_73105)){
var statearr_73140_74708 = state_73126__$1;
(statearr_73140_74708[(1)] = (5));

} else {
var statearr_73141_74709 = state_73126__$1;
(statearr_73141_74709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73127 === (6))){
var inst_73103 = (state_73126[(7)]);
var inst_73112 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_73103) : p.call(null,inst_73103));
var state_73126__$1 = state_73126;
if(cljs.core.truth_(inst_73112)){
var statearr_73142_74710 = state_73126__$1;
(statearr_73142_74710[(1)] = (8));

} else {
var statearr_73143_74711 = state_73126__$1;
(statearr_73143_74711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73127 === (3))){
var inst_73124 = (state_73126[(2)]);
var state_73126__$1 = state_73126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73126__$1,inst_73124);
} else {
if((state_val_73127 === (2))){
var state_73126__$1 = state_73126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73126__$1,(4),ch);
} else {
if((state_val_73127 === (11))){
var inst_73116 = (state_73126[(2)]);
var state_73126__$1 = state_73126;
var statearr_73148_74713 = state_73126__$1;
(statearr_73148_74713[(2)] = inst_73116);

(statearr_73148_74713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73127 === (9))){
var state_73126__$1 = state_73126;
var statearr_73150_74714 = state_73126__$1;
(statearr_73150_74714[(2)] = null);

(statearr_73150_74714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73127 === (5))){
var inst_73109 = cljs.core.async.close_BANG_(out);
var state_73126__$1 = state_73126;
var statearr_73151_74715 = state_73126__$1;
(statearr_73151_74715[(2)] = inst_73109);

(statearr_73151_74715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73127 === (10))){
var inst_73119 = (state_73126[(2)]);
var state_73126__$1 = (function (){var statearr_73156 = state_73126;
(statearr_73156[(8)] = inst_73119);

return statearr_73156;
})();
var statearr_73164_74716 = state_73126__$1;
(statearr_73164_74716[(2)] = null);

(statearr_73164_74716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73127 === (8))){
var inst_73103 = (state_73126[(7)]);
var state_73126__$1 = state_73126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73126__$1,(11),out,inst_73103);
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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_73175 = [null,null,null,null,null,null,null,null,null];
(statearr_73175[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_73175[(1)] = (1));

return statearr_73175;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_73126){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_73126);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e73180){var ex__63091__auto__ = e73180;
var statearr_73182_74717 = state_73126;
(statearr_73182_74717[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_73126[(4)]))){
var statearr_73183_74719 = state_73126;
(statearr_73183_74719[(1)] = cljs.core.first((state_73126[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74720 = state_73126;
state_73126 = G__74720;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_73126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_73126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_73187 = f__63209__auto__();
(statearr_73187[(6)] = c__63208__auto___74705);

return statearr_73187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__73195 = arguments.length;
switch (G__73195) {
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
var c__63208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_73295){
var state_val_73296 = (state_73295[(1)]);
if((state_val_73296 === (7))){
var inst_73290 = (state_73295[(2)]);
var state_73295__$1 = state_73295;
var statearr_73301_74747 = state_73295__$1;
(statearr_73301_74747[(2)] = inst_73290);

(statearr_73301_74747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (20))){
var inst_73253 = (state_73295[(7)]);
var inst_73270 = (state_73295[(2)]);
var inst_73271 = cljs.core.next(inst_73253);
var inst_73230 = inst_73271;
var inst_73231 = null;
var inst_73232 = (0);
var inst_73233 = (0);
var state_73295__$1 = (function (){var statearr_73303 = state_73295;
(statearr_73303[(8)] = inst_73270);

(statearr_73303[(9)] = inst_73230);

(statearr_73303[(10)] = inst_73231);

(statearr_73303[(11)] = inst_73232);

(statearr_73303[(12)] = inst_73233);

return statearr_73303;
})();
var statearr_73304_74752 = state_73295__$1;
(statearr_73304_74752[(2)] = null);

(statearr_73304_74752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (1))){
var state_73295__$1 = state_73295;
var statearr_73305_74754 = state_73295__$1;
(statearr_73305_74754[(2)] = null);

(statearr_73305_74754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (4))){
var inst_73219 = (state_73295[(13)]);
var inst_73219__$1 = (state_73295[(2)]);
var inst_73220 = (inst_73219__$1 == null);
var state_73295__$1 = (function (){var statearr_73312 = state_73295;
(statearr_73312[(13)] = inst_73219__$1);

return statearr_73312;
})();
if(cljs.core.truth_(inst_73220)){
var statearr_73315_74755 = state_73295__$1;
(statearr_73315_74755[(1)] = (5));

} else {
var statearr_73316_74756 = state_73295__$1;
(statearr_73316_74756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (15))){
var state_73295__$1 = state_73295;
var statearr_73321_74757 = state_73295__$1;
(statearr_73321_74757[(2)] = null);

(statearr_73321_74757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (21))){
var state_73295__$1 = state_73295;
var statearr_73322_74758 = state_73295__$1;
(statearr_73322_74758[(2)] = null);

(statearr_73322_74758[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (13))){
var inst_73233 = (state_73295[(12)]);
var inst_73230 = (state_73295[(9)]);
var inst_73231 = (state_73295[(10)]);
var inst_73232 = (state_73295[(11)]);
var inst_73242 = (state_73295[(2)]);
var inst_73244 = (inst_73233 + (1));
var tmp73318 = inst_73230;
var tmp73319 = inst_73231;
var tmp73320 = inst_73232;
var inst_73230__$1 = tmp73318;
var inst_73231__$1 = tmp73319;
var inst_73232__$1 = tmp73320;
var inst_73233__$1 = inst_73244;
var state_73295__$1 = (function (){var statearr_73324 = state_73295;
(statearr_73324[(14)] = inst_73242);

(statearr_73324[(9)] = inst_73230__$1);

(statearr_73324[(10)] = inst_73231__$1);

(statearr_73324[(11)] = inst_73232__$1);

(statearr_73324[(12)] = inst_73233__$1);

return statearr_73324;
})();
var statearr_73328_74761 = state_73295__$1;
(statearr_73328_74761[(2)] = null);

(statearr_73328_74761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (22))){
var state_73295__$1 = state_73295;
var statearr_73329_74762 = state_73295__$1;
(statearr_73329_74762[(2)] = null);

(statearr_73329_74762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (6))){
var inst_73219 = (state_73295[(13)]);
var inst_73228 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_73219) : f.call(null,inst_73219));
var inst_73229 = cljs.core.seq(inst_73228);
var inst_73230 = inst_73229;
var inst_73231 = null;
var inst_73232 = (0);
var inst_73233 = (0);
var state_73295__$1 = (function (){var statearr_73332 = state_73295;
(statearr_73332[(9)] = inst_73230);

(statearr_73332[(10)] = inst_73231);

(statearr_73332[(11)] = inst_73232);

(statearr_73332[(12)] = inst_73233);

return statearr_73332;
})();
var statearr_73334_74764 = state_73295__$1;
(statearr_73334_74764[(2)] = null);

(statearr_73334_74764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (17))){
var inst_73253 = (state_73295[(7)]);
var inst_73260 = cljs.core.chunk_first(inst_73253);
var inst_73261 = cljs.core.chunk_rest(inst_73253);
var inst_73263 = cljs.core.count(inst_73260);
var inst_73230 = inst_73261;
var inst_73231 = inst_73260;
var inst_73232 = inst_73263;
var inst_73233 = (0);
var state_73295__$1 = (function (){var statearr_73337 = state_73295;
(statearr_73337[(9)] = inst_73230);

(statearr_73337[(10)] = inst_73231);

(statearr_73337[(11)] = inst_73232);

(statearr_73337[(12)] = inst_73233);

return statearr_73337;
})();
var statearr_73338_74765 = state_73295__$1;
(statearr_73338_74765[(2)] = null);

(statearr_73338_74765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (3))){
var inst_73292 = (state_73295[(2)]);
var state_73295__$1 = state_73295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73295__$1,inst_73292);
} else {
if((state_val_73296 === (12))){
var inst_73279 = (state_73295[(2)]);
var state_73295__$1 = state_73295;
var statearr_73339_74766 = state_73295__$1;
(statearr_73339_74766[(2)] = inst_73279);

(statearr_73339_74766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (2))){
var state_73295__$1 = state_73295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73295__$1,(4),in$);
} else {
if((state_val_73296 === (23))){
var inst_73288 = (state_73295[(2)]);
var state_73295__$1 = state_73295;
var statearr_73341_74767 = state_73295__$1;
(statearr_73341_74767[(2)] = inst_73288);

(statearr_73341_74767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (19))){
var inst_73274 = (state_73295[(2)]);
var state_73295__$1 = state_73295;
var statearr_73343_74768 = state_73295__$1;
(statearr_73343_74768[(2)] = inst_73274);

(statearr_73343_74768[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (11))){
var inst_73230 = (state_73295[(9)]);
var inst_73253 = (state_73295[(7)]);
var inst_73253__$1 = cljs.core.seq(inst_73230);
var state_73295__$1 = (function (){var statearr_73344 = state_73295;
(statearr_73344[(7)] = inst_73253__$1);

return statearr_73344;
})();
if(inst_73253__$1){
var statearr_73345_74770 = state_73295__$1;
(statearr_73345_74770[(1)] = (14));

} else {
var statearr_73346_74771 = state_73295__$1;
(statearr_73346_74771[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (9))){
var inst_73281 = (state_73295[(2)]);
var inst_73282 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_73295__$1 = (function (){var statearr_73347 = state_73295;
(statearr_73347[(15)] = inst_73281);

return statearr_73347;
})();
if(cljs.core.truth_(inst_73282)){
var statearr_73348_74772 = state_73295__$1;
(statearr_73348_74772[(1)] = (21));

} else {
var statearr_73349_74773 = state_73295__$1;
(statearr_73349_74773[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (5))){
var inst_73222 = cljs.core.async.close_BANG_(out);
var state_73295__$1 = state_73295;
var statearr_73351_74774 = state_73295__$1;
(statearr_73351_74774[(2)] = inst_73222);

(statearr_73351_74774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (14))){
var inst_73253 = (state_73295[(7)]);
var inst_73258 = cljs.core.chunked_seq_QMARK_(inst_73253);
var state_73295__$1 = state_73295;
if(inst_73258){
var statearr_73354_74777 = state_73295__$1;
(statearr_73354_74777[(1)] = (17));

} else {
var statearr_73355_74778 = state_73295__$1;
(statearr_73355_74778[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (16))){
var inst_73277 = (state_73295[(2)]);
var state_73295__$1 = state_73295;
var statearr_73356_74779 = state_73295__$1;
(statearr_73356_74779[(2)] = inst_73277);

(statearr_73356_74779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73296 === (10))){
var inst_73231 = (state_73295[(10)]);
var inst_73233 = (state_73295[(12)]);
var inst_73239 = cljs.core._nth(inst_73231,inst_73233);
var state_73295__$1 = state_73295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73295__$1,(13),out,inst_73239);
} else {
if((state_val_73296 === (18))){
var inst_73253 = (state_73295[(7)]);
var inst_73268 = cljs.core.first(inst_73253);
var state_73295__$1 = state_73295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73295__$1,(20),out,inst_73268);
} else {
if((state_val_73296 === (8))){
var inst_73233 = (state_73295[(12)]);
var inst_73232 = (state_73295[(11)]);
var inst_73235 = (inst_73233 < inst_73232);
var inst_73236 = inst_73235;
var state_73295__$1 = state_73295;
if(cljs.core.truth_(inst_73236)){
var statearr_73359_74782 = state_73295__$1;
(statearr_73359_74782[(1)] = (10));

} else {
var statearr_73360_74783 = state_73295__$1;
(statearr_73360_74783[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__63088__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__63088__auto____0 = (function (){
var statearr_73361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73361[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__63088__auto__);

(statearr_73361[(1)] = (1));

return statearr_73361;
});
var cljs$core$async$mapcat_STAR__$_state_machine__63088__auto____1 = (function (state_73295){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_73295);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e73363){var ex__63091__auto__ = e73363;
var statearr_73364_74784 = state_73295;
(statearr_73364_74784[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_73295[(4)]))){
var statearr_73365_74785 = state_73295;
(statearr_73365_74785[(1)] = cljs.core.first((state_73295[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74786 = state_73295;
state_73295 = G__74786;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__63088__auto__ = function(state_73295){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__63088__auto____1.call(this,state_73295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__63088__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__63088__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_73367 = f__63209__auto__();
(statearr_73367[(6)] = c__63208__auto__);

return statearr_73367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));

return c__63208__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__73370 = arguments.length;
switch (G__73370) {
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
var G__73375 = arguments.length;
switch (G__73375) {
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
var G__73386 = arguments.length;
switch (G__73386) {
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
var c__63208__auto___74790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_73432){
var state_val_73433 = (state_73432[(1)]);
if((state_val_73433 === (7))){
var inst_73423 = (state_73432[(2)]);
var state_73432__$1 = state_73432;
var statearr_73440_74801 = state_73432__$1;
(statearr_73440_74801[(2)] = inst_73423);

(statearr_73440_74801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73433 === (1))){
var inst_73405 = null;
var state_73432__$1 = (function (){var statearr_73444 = state_73432;
(statearr_73444[(7)] = inst_73405);

return statearr_73444;
})();
var statearr_73445_74802 = state_73432__$1;
(statearr_73445_74802[(2)] = null);

(statearr_73445_74802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73433 === (4))){
var inst_73408 = (state_73432[(8)]);
var inst_73408__$1 = (state_73432[(2)]);
var inst_73409 = (inst_73408__$1 == null);
var inst_73410 = cljs.core.not(inst_73409);
var state_73432__$1 = (function (){var statearr_73447 = state_73432;
(statearr_73447[(8)] = inst_73408__$1);

return statearr_73447;
})();
if(inst_73410){
var statearr_73450_74803 = state_73432__$1;
(statearr_73450_74803[(1)] = (5));

} else {
var statearr_73451_74804 = state_73432__$1;
(statearr_73451_74804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73433 === (6))){
var state_73432__$1 = state_73432;
var statearr_73452_74806 = state_73432__$1;
(statearr_73452_74806[(2)] = null);

(statearr_73452_74806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73433 === (3))){
var inst_73425 = (state_73432[(2)]);
var inst_73426 = cljs.core.async.close_BANG_(out);
var state_73432__$1 = (function (){var statearr_73453 = state_73432;
(statearr_73453[(9)] = inst_73425);

return statearr_73453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73432__$1,inst_73426);
} else {
if((state_val_73433 === (2))){
var state_73432__$1 = state_73432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73432__$1,(4),ch);
} else {
if((state_val_73433 === (11))){
var inst_73408 = (state_73432[(8)]);
var inst_73417 = (state_73432[(2)]);
var inst_73405 = inst_73408;
var state_73432__$1 = (function (){var statearr_73458 = state_73432;
(statearr_73458[(10)] = inst_73417);

(statearr_73458[(7)] = inst_73405);

return statearr_73458;
})();
var statearr_73459_74811 = state_73432__$1;
(statearr_73459_74811[(2)] = null);

(statearr_73459_74811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73433 === (9))){
var inst_73408 = (state_73432[(8)]);
var state_73432__$1 = state_73432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73432__$1,(11),out,inst_73408);
} else {
if((state_val_73433 === (5))){
var inst_73408 = (state_73432[(8)]);
var inst_73405 = (state_73432[(7)]);
var inst_73412 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73408,inst_73405);
var state_73432__$1 = state_73432;
if(inst_73412){
var statearr_73462_74812 = state_73432__$1;
(statearr_73462_74812[(1)] = (8));

} else {
var statearr_73463_74813 = state_73432__$1;
(statearr_73463_74813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73433 === (10))){
var inst_73420 = (state_73432[(2)]);
var state_73432__$1 = state_73432;
var statearr_73466_74817 = state_73432__$1;
(statearr_73466_74817[(2)] = inst_73420);

(statearr_73466_74817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73433 === (8))){
var inst_73405 = (state_73432[(7)]);
var tmp73460 = inst_73405;
var inst_73405__$1 = tmp73460;
var state_73432__$1 = (function (){var statearr_73468 = state_73432;
(statearr_73468[(7)] = inst_73405__$1);

return statearr_73468;
})();
var statearr_73469_74818 = state_73432__$1;
(statearr_73469_74818[(2)] = null);

(statearr_73469_74818[(1)] = (2));


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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_73470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73470[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_73470[(1)] = (1));

return statearr_73470;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_73432){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_73432);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e73471){var ex__63091__auto__ = e73471;
var statearr_73472_74819 = state_73432;
(statearr_73472_74819[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_73432[(4)]))){
var statearr_73473_74820 = state_73432;
(statearr_73473_74820[(1)] = cljs.core.first((state_73432[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74821 = state_73432;
state_73432 = G__74821;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_73432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_73432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_73474 = f__63209__auto__();
(statearr_73474[(6)] = c__63208__auto___74790);

return statearr_73474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__73482 = arguments.length;
switch (G__73482) {
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
var c__63208__auto___74829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_73552){
var state_val_73560 = (state_73552[(1)]);
if((state_val_73560 === (7))){
var inst_73546 = (state_73552[(2)]);
var state_73552__$1 = state_73552;
var statearr_73565_74830 = state_73552__$1;
(statearr_73565_74830[(2)] = inst_73546);

(statearr_73565_74830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (1))){
var inst_73496 = (new Array(n));
var inst_73497 = inst_73496;
var inst_73498 = (0);
var state_73552__$1 = (function (){var statearr_73566 = state_73552;
(statearr_73566[(7)] = inst_73497);

(statearr_73566[(8)] = inst_73498);

return statearr_73566;
})();
var statearr_73567_74835 = state_73552__$1;
(statearr_73567_74835[(2)] = null);

(statearr_73567_74835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (4))){
var inst_73505 = (state_73552[(9)]);
var inst_73505__$1 = (state_73552[(2)]);
var inst_73507 = (inst_73505__$1 == null);
var inst_73508 = cljs.core.not(inst_73507);
var state_73552__$1 = (function (){var statearr_73572 = state_73552;
(statearr_73572[(9)] = inst_73505__$1);

return statearr_73572;
})();
if(inst_73508){
var statearr_73573_74840 = state_73552__$1;
(statearr_73573_74840[(1)] = (5));

} else {
var statearr_73574_74841 = state_73552__$1;
(statearr_73574_74841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (15))){
var inst_73532 = (state_73552[(2)]);
var state_73552__$1 = state_73552;
var statearr_73578_74842 = state_73552__$1;
(statearr_73578_74842[(2)] = inst_73532);

(statearr_73578_74842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (13))){
var state_73552__$1 = state_73552;
var statearr_73580_74844 = state_73552__$1;
(statearr_73580_74844[(2)] = null);

(statearr_73580_74844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (6))){
var inst_73498 = (state_73552[(8)]);
var inst_73528 = (inst_73498 > (0));
var state_73552__$1 = state_73552;
if(cljs.core.truth_(inst_73528)){
var statearr_73584_74845 = state_73552__$1;
(statearr_73584_74845[(1)] = (12));

} else {
var statearr_73586_74846 = state_73552__$1;
(statearr_73586_74846[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (3))){
var inst_73548 = (state_73552[(2)]);
var state_73552__$1 = state_73552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73552__$1,inst_73548);
} else {
if((state_val_73560 === (12))){
var inst_73497 = (state_73552[(7)]);
var inst_73530 = cljs.core.vec(inst_73497);
var state_73552__$1 = state_73552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73552__$1,(15),out,inst_73530);
} else {
if((state_val_73560 === (2))){
var state_73552__$1 = state_73552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73552__$1,(4),ch);
} else {
if((state_val_73560 === (11))){
var inst_73522 = (state_73552[(2)]);
var inst_73523 = (new Array(n));
var inst_73497 = inst_73523;
var inst_73498 = (0);
var state_73552__$1 = (function (){var statearr_73598 = state_73552;
(statearr_73598[(10)] = inst_73522);

(statearr_73598[(7)] = inst_73497);

(statearr_73598[(8)] = inst_73498);

return statearr_73598;
})();
var statearr_73599_74847 = state_73552__$1;
(statearr_73599_74847[(2)] = null);

(statearr_73599_74847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (9))){
var inst_73497 = (state_73552[(7)]);
var inst_73520 = cljs.core.vec(inst_73497);
var state_73552__$1 = state_73552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73552__$1,(11),out,inst_73520);
} else {
if((state_val_73560 === (5))){
var inst_73497 = (state_73552[(7)]);
var inst_73498 = (state_73552[(8)]);
var inst_73505 = (state_73552[(9)]);
var inst_73511 = (state_73552[(11)]);
var inst_73510 = (inst_73497[inst_73498] = inst_73505);
var inst_73511__$1 = (inst_73498 + (1));
var inst_73512 = (inst_73511__$1 < n);
var state_73552__$1 = (function (){var statearr_73609 = state_73552;
(statearr_73609[(12)] = inst_73510);

(statearr_73609[(11)] = inst_73511__$1);

return statearr_73609;
})();
if(cljs.core.truth_(inst_73512)){
var statearr_73611_74848 = state_73552__$1;
(statearr_73611_74848[(1)] = (8));

} else {
var statearr_73612_74849 = state_73552__$1;
(statearr_73612_74849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (14))){
var inst_73535 = (state_73552[(2)]);
var inst_73543 = cljs.core.async.close_BANG_(out);
var state_73552__$1 = (function (){var statearr_73617 = state_73552;
(statearr_73617[(13)] = inst_73535);

return statearr_73617;
})();
var statearr_73618_74866 = state_73552__$1;
(statearr_73618_74866[(2)] = inst_73543);

(statearr_73618_74866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (10))){
var inst_73526 = (state_73552[(2)]);
var state_73552__$1 = state_73552;
var statearr_73619_74867 = state_73552__$1;
(statearr_73619_74867[(2)] = inst_73526);

(statearr_73619_74867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73560 === (8))){
var inst_73497 = (state_73552[(7)]);
var inst_73511 = (state_73552[(11)]);
var tmp73615 = inst_73497;
var inst_73497__$1 = tmp73615;
var inst_73498 = inst_73511;
var state_73552__$1 = (function (){var statearr_73620 = state_73552;
(statearr_73620[(7)] = inst_73497__$1);

(statearr_73620[(8)] = inst_73498);

return statearr_73620;
})();
var statearr_73621_74868 = state_73552__$1;
(statearr_73621_74868[(2)] = null);

(statearr_73621_74868[(1)] = (2));


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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_73629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73629[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_73629[(1)] = (1));

return statearr_73629;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_73552){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_73552);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e73633){var ex__63091__auto__ = e73633;
var statearr_73635_74872 = state_73552;
(statearr_73635_74872[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_73552[(4)]))){
var statearr_73639_74873 = state_73552;
(statearr_73639_74873[(1)] = cljs.core.first((state_73552[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74874 = state_73552;
state_73552 = G__74874;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_73552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_73552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_73646 = f__63209__auto__();
(statearr_73646[(6)] = c__63208__auto___74829);

return statearr_73646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__73661 = arguments.length;
switch (G__73661) {
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
var c__63208__auto___74876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63209__auto__ = (function (){var switch__63087__auto__ = (function (state_73747){
var state_val_73752 = (state_73747[(1)]);
if((state_val_73752 === (7))){
var inst_73740 = (state_73747[(2)]);
var state_73747__$1 = state_73747;
var statearr_73758_74877 = state_73747__$1;
(statearr_73758_74877[(2)] = inst_73740);

(statearr_73758_74877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (1))){
var inst_73689 = [];
var inst_73691 = inst_73689;
var inst_73692 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_73747__$1 = (function (){var statearr_73759 = state_73747;
(statearr_73759[(7)] = inst_73691);

(statearr_73759[(8)] = inst_73692);

return statearr_73759;
})();
var statearr_73760_74878 = state_73747__$1;
(statearr_73760_74878[(2)] = null);

(statearr_73760_74878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (4))){
var inst_73698 = (state_73747[(9)]);
var inst_73698__$1 = (state_73747[(2)]);
var inst_73703 = (inst_73698__$1 == null);
var inst_73704 = cljs.core.not(inst_73703);
var state_73747__$1 = (function (){var statearr_73763 = state_73747;
(statearr_73763[(9)] = inst_73698__$1);

return statearr_73763;
})();
if(inst_73704){
var statearr_73764_74879 = state_73747__$1;
(statearr_73764_74879[(1)] = (5));

} else {
var statearr_73765_74880 = state_73747__$1;
(statearr_73765_74880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (15))){
var inst_73691 = (state_73747[(7)]);
var inst_73731 = cljs.core.vec(inst_73691);
var state_73747__$1 = state_73747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73747__$1,(18),out,inst_73731);
} else {
if((state_val_73752 === (13))){
var inst_73726 = (state_73747[(2)]);
var state_73747__$1 = state_73747;
var statearr_73767_74911 = state_73747__$1;
(statearr_73767_74911[(2)] = inst_73726);

(statearr_73767_74911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (6))){
var inst_73691 = (state_73747[(7)]);
var inst_73728 = inst_73691.length;
var inst_73729 = (inst_73728 > (0));
var state_73747__$1 = state_73747;
if(cljs.core.truth_(inst_73729)){
var statearr_73769_74912 = state_73747__$1;
(statearr_73769_74912[(1)] = (15));

} else {
var statearr_73773_74913 = state_73747__$1;
(statearr_73773_74913[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (17))){
var inst_73737 = (state_73747[(2)]);
var inst_73738 = cljs.core.async.close_BANG_(out);
var state_73747__$1 = (function (){var statearr_73777 = state_73747;
(statearr_73777[(10)] = inst_73737);

return statearr_73777;
})();
var statearr_73778_74914 = state_73747__$1;
(statearr_73778_74914[(2)] = inst_73738);

(statearr_73778_74914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (3))){
var inst_73742 = (state_73747[(2)]);
var state_73747__$1 = state_73747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73747__$1,inst_73742);
} else {
if((state_val_73752 === (12))){
var inst_73691 = (state_73747[(7)]);
var inst_73719 = cljs.core.vec(inst_73691);
var state_73747__$1 = state_73747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73747__$1,(14),out,inst_73719);
} else {
if((state_val_73752 === (2))){
var state_73747__$1 = state_73747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73747__$1,(4),ch);
} else {
if((state_val_73752 === (11))){
var inst_73691 = (state_73747[(7)]);
var inst_73698 = (state_73747[(9)]);
var inst_73706 = (state_73747[(11)]);
var inst_73716 = inst_73691.push(inst_73698);
var tmp73780 = inst_73691;
var inst_73691__$1 = tmp73780;
var inst_73692 = inst_73706;
var state_73747__$1 = (function (){var statearr_73781 = state_73747;
(statearr_73781[(12)] = inst_73716);

(statearr_73781[(7)] = inst_73691__$1);

(statearr_73781[(8)] = inst_73692);

return statearr_73781;
})();
var statearr_73782_74918 = state_73747__$1;
(statearr_73782_74918[(2)] = null);

(statearr_73782_74918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (9))){
var inst_73692 = (state_73747[(8)]);
var inst_73712 = cljs.core.keyword_identical_QMARK_(inst_73692,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_73747__$1 = state_73747;
var statearr_73786_74919 = state_73747__$1;
(statearr_73786_74919[(2)] = inst_73712);

(statearr_73786_74919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (5))){
var inst_73698 = (state_73747[(9)]);
var inst_73706 = (state_73747[(11)]);
var inst_73692 = (state_73747[(8)]);
var inst_73707 = (state_73747[(13)]);
var inst_73706__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_73698) : f.call(null,inst_73698));
var inst_73707__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73706__$1,inst_73692);
var state_73747__$1 = (function (){var statearr_73788 = state_73747;
(statearr_73788[(11)] = inst_73706__$1);

(statearr_73788[(13)] = inst_73707__$1);

return statearr_73788;
})();
if(inst_73707__$1){
var statearr_73789_74920 = state_73747__$1;
(statearr_73789_74920[(1)] = (8));

} else {
var statearr_73790_74921 = state_73747__$1;
(statearr_73790_74921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (14))){
var inst_73698 = (state_73747[(9)]);
var inst_73706 = (state_73747[(11)]);
var inst_73721 = (state_73747[(2)]);
var inst_73722 = [];
var inst_73723 = inst_73722.push(inst_73698);
var inst_73691 = inst_73722;
var inst_73692 = inst_73706;
var state_73747__$1 = (function (){var statearr_73795 = state_73747;
(statearr_73795[(14)] = inst_73721);

(statearr_73795[(15)] = inst_73723);

(statearr_73795[(7)] = inst_73691);

(statearr_73795[(8)] = inst_73692);

return statearr_73795;
})();
var statearr_73800_74928 = state_73747__$1;
(statearr_73800_74928[(2)] = null);

(statearr_73800_74928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (16))){
var state_73747__$1 = state_73747;
var statearr_73805_74929 = state_73747__$1;
(statearr_73805_74929[(2)] = null);

(statearr_73805_74929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (10))){
var inst_73714 = (state_73747[(2)]);
var state_73747__$1 = state_73747;
if(cljs.core.truth_(inst_73714)){
var statearr_73806_74930 = state_73747__$1;
(statearr_73806_74930[(1)] = (11));

} else {
var statearr_73807_74931 = state_73747__$1;
(statearr_73807_74931[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (18))){
var inst_73733 = (state_73747[(2)]);
var state_73747__$1 = state_73747;
var statearr_73809_74932 = state_73747__$1;
(statearr_73809_74932[(2)] = inst_73733);

(statearr_73809_74932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73752 === (8))){
var inst_73707 = (state_73747[(13)]);
var state_73747__$1 = state_73747;
var statearr_73814_74933 = state_73747__$1;
(statearr_73814_74933[(2)] = inst_73707);

(statearr_73814_74933[(1)] = (10));


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
var cljs$core$async$state_machine__63088__auto__ = null;
var cljs$core$async$state_machine__63088__auto____0 = (function (){
var statearr_73815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73815[(0)] = cljs$core$async$state_machine__63088__auto__);

(statearr_73815[(1)] = (1));

return statearr_73815;
});
var cljs$core$async$state_machine__63088__auto____1 = (function (state_73747){
while(true){
var ret_value__63089__auto__ = (function (){try{while(true){
var result__63090__auto__ = switch__63087__auto__(state_73747);
if(cljs.core.keyword_identical_QMARK_(result__63090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63090__auto__;
}
break;
}
}catch (e73816){var ex__63091__auto__ = e73816;
var statearr_73817_74934 = state_73747;
(statearr_73817_74934[(2)] = ex__63091__auto__);


if(cljs.core.seq((state_73747[(4)]))){
var statearr_73818_74935 = state_73747;
(statearr_73818_74935[(1)] = cljs.core.first((state_73747[(4)])));

} else {
throw ex__63091__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74936 = state_73747;
state_73747 = G__74936;
continue;
} else {
return ret_value__63089__auto__;
}
break;
}
});
cljs$core$async$state_machine__63088__auto__ = function(state_73747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63088__auto____1.call(this,state_73747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63088__auto____0;
cljs$core$async$state_machine__63088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63088__auto____1;
return cljs$core$async$state_machine__63088__auto__;
})()
})();
var state__63210__auto__ = (function (){var statearr_73819 = f__63209__auto__();
(statearr_73819[(6)] = c__63208__auto___74876);

return statearr_73819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63210__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
