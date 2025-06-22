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
cljs.core.async.t_cljs$core$async94387 = (function (f,blockable,meta94388){
this.f = f;
this.blockable = blockable;
this.meta94388 = meta94388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async94387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_94389,meta94388__$1){
var self__ = this;
var _94389__$1 = this;
return (new cljs.core.async.t_cljs$core$async94387(self__.f,self__.blockable,meta94388__$1));
}));

(cljs.core.async.t_cljs$core$async94387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_94389){
var self__ = this;
var _94389__$1 = this;
return self__.meta94388;
}));

(cljs.core.async.t_cljs$core$async94387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async94387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async94387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async94387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async94387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta94388","meta94388",-2066574138,null)], null);
}));

(cljs.core.async.t_cljs$core$async94387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async94387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async94387");

(cljs.core.async.t_cljs$core$async94387.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async94387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async94387.
 */
cljs.core.async.__GT_t_cljs$core$async94387 = (function cljs$core$async$__GT_t_cljs$core$async94387(f,blockable,meta94388){
return (new cljs.core.async.t_cljs$core$async94387(f,blockable,meta94388));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__94372 = arguments.length;
switch (G__94372) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async94387(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__94494 = arguments.length;
switch (G__94494) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__94572 = arguments.length;
switch (G__94572) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__94615 = arguments.length;
switch (G__94615) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_97978 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_97978) : fn1.call(null,val_97978));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_97978) : fn1.call(null,val_97978));
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
var G__94659 = arguments.length;
switch (G__94659) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var n__5616__auto___97983 = n;
var x_97984 = (0);
while(true){
if((x_97984 < n__5616__auto___97983)){
(a[x_97984] = x_97984);

var G__97986 = (x_97984 + (1));
x_97984 = G__97986;
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
cljs.core.async.t_cljs$core$async94677 = (function (flag,meta94678){
this.flag = flag;
this.meta94678 = meta94678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async94677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_94679,meta94678__$1){
var self__ = this;
var _94679__$1 = this;
return (new cljs.core.async.t_cljs$core$async94677(self__.flag,meta94678__$1));
}));

(cljs.core.async.t_cljs$core$async94677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_94679){
var self__ = this;
var _94679__$1 = this;
return self__.meta94678;
}));

(cljs.core.async.t_cljs$core$async94677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async94677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async94677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async94677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async94677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta94678","meta94678",1884151384,null)], null);
}));

(cljs.core.async.t_cljs$core$async94677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async94677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async94677");

(cljs.core.async.t_cljs$core$async94677.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async94677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async94677.
 */
cljs.core.async.__GT_t_cljs$core$async94677 = (function cljs$core$async$__GT_t_cljs$core$async94677(flag,meta94678){
return (new cljs.core.async.t_cljs$core$async94677(flag,meta94678));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async94677(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async94689 = (function (flag,cb,meta94690){
this.flag = flag;
this.cb = cb;
this.meta94690 = meta94690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async94689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_94691,meta94690__$1){
var self__ = this;
var _94691__$1 = this;
return (new cljs.core.async.t_cljs$core$async94689(self__.flag,self__.cb,meta94690__$1));
}));

(cljs.core.async.t_cljs$core$async94689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_94691){
var self__ = this;
var _94691__$1 = this;
return self__.meta94690;
}));

(cljs.core.async.t_cljs$core$async94689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async94689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async94689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async94689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async94689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta94690","meta94690",740161267,null)], null);
}));

(cljs.core.async.t_cljs$core$async94689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async94689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async94689");

(cljs.core.async.t_cljs$core$async94689.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async94689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async94689.
 */
cljs.core.async.__GT_t_cljs$core$async94689 = (function cljs$core$async$__GT_t_cljs$core$async94689(flag,cb,meta94690){
return (new cljs.core.async.t_cljs$core$async94689(flag,cb,meta94690));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async94689(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_97994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_97994)){
if((!(((port_97994.cljs$core$IFn$_invoke$arity$1 ? port_97994.cljs$core$IFn$_invoke$arity$1((1)) : port_97994.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__97995 = (i + (1));
i = G__97995;
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
return (function (p1__94705_SHARP_){
var G__94720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__94705_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__94720) : fret.call(null,G__94720));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__94706_SHARP_){
var G__94728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__94706_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__94728) : fret.call(null,G__94728));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__98009 = (i + (1));
i = G__98009;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
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
var args__5755__auto__ = [];
var len__5749__auto___98017 = arguments.length;
var i__5750__auto___98018 = (0);
while(true){
if((i__5750__auto___98018 < len__5749__auto___98017)){
args__5755__auto__.push((arguments[i__5750__auto___98018]));

var G__98020 = (i__5750__auto___98018 + (1));
i__5750__auto___98018 = G__98020;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__94772){
var map__94773 = p__94772;
var map__94773__$1 = cljs.core.__destructure_map(map__94773);
var opts = map__94773__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq94733){
var G__94734 = cljs.core.first(seq94733);
var seq94733__$1 = cljs.core.next(seq94733);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94734,seq94733__$1);
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
var G__94851 = arguments.length;
switch (G__94851) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37805__auto___98033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_94901){
var state_val_94902 = (state_94901[(1)]);
if((state_val_94902 === (7))){
var inst_94897 = (state_94901[(2)]);
var state_94901__$1 = state_94901;
var statearr_94907_98039 = state_94901__$1;
(statearr_94907_98039[(2)] = inst_94897);

(statearr_94907_98039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (1))){
var state_94901__$1 = state_94901;
var statearr_94909_98044 = state_94901__$1;
(statearr_94909_98044[(2)] = null);

(statearr_94909_98044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (4))){
var inst_94880 = (state_94901[(7)]);
var inst_94880__$1 = (state_94901[(2)]);
var inst_94881 = (inst_94880__$1 == null);
var state_94901__$1 = (function (){var statearr_94910 = state_94901;
(statearr_94910[(7)] = inst_94880__$1);

return statearr_94910;
})();
if(cljs.core.truth_(inst_94881)){
var statearr_94911_98046 = state_94901__$1;
(statearr_94911_98046[(1)] = (5));

} else {
var statearr_94915_98049 = state_94901__$1;
(statearr_94915_98049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (13))){
var state_94901__$1 = state_94901;
var statearr_94917_98051 = state_94901__$1;
(statearr_94917_98051[(2)] = null);

(statearr_94917_98051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (6))){
var inst_94880 = (state_94901[(7)]);
var state_94901__$1 = state_94901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_94901__$1,(11),to,inst_94880);
} else {
if((state_val_94902 === (3))){
var inst_94899 = (state_94901[(2)]);
var state_94901__$1 = state_94901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94901__$1,inst_94899);
} else {
if((state_val_94902 === (12))){
var state_94901__$1 = state_94901;
var statearr_94919_98055 = state_94901__$1;
(statearr_94919_98055[(2)] = null);

(statearr_94919_98055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (2))){
var state_94901__$1 = state_94901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94901__$1,(4),from);
} else {
if((state_val_94902 === (11))){
var inst_94890 = (state_94901[(2)]);
var state_94901__$1 = state_94901;
if(cljs.core.truth_(inst_94890)){
var statearr_94920_98060 = state_94901__$1;
(statearr_94920_98060[(1)] = (12));

} else {
var statearr_94921_98061 = state_94901__$1;
(statearr_94921_98061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (9))){
var state_94901__$1 = state_94901;
var statearr_94925_98062 = state_94901__$1;
(statearr_94925_98062[(2)] = null);

(statearr_94925_98062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (5))){
var state_94901__$1 = state_94901;
if(cljs.core.truth_(close_QMARK_)){
var statearr_94926_98063 = state_94901__$1;
(statearr_94926_98063[(1)] = (8));

} else {
var statearr_94927_98064 = state_94901__$1;
(statearr_94927_98064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (14))){
var inst_94895 = (state_94901[(2)]);
var state_94901__$1 = state_94901;
var statearr_94928_98065 = state_94901__$1;
(statearr_94928_98065[(2)] = inst_94895);

(statearr_94928_98065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (10))){
var inst_94887 = (state_94901[(2)]);
var state_94901__$1 = state_94901;
var statearr_94929_98070 = state_94901__$1;
(statearr_94929_98070[(2)] = inst_94887);

(statearr_94929_98070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94902 === (8))){
var inst_94884 = cljs.core.async.close_BANG_(to);
var state_94901__$1 = state_94901;
var statearr_94930_98071 = state_94901__$1;
(statearr_94930_98071[(2)] = inst_94884);

(statearr_94930_98071[(1)] = (10));


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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_94931 = [null,null,null,null,null,null,null,null];
(statearr_94931[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_94931[(1)] = (1));

return statearr_94931;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_94901){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_94901);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e94935){var ex__37735__auto__ = e94935;
var statearr_94936_98072 = state_94901;
(statearr_94936_98072[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_94901[(4)]))){
var statearr_94937_98073 = state_94901;
(statearr_94937_98073[(1)] = cljs.core.first((state_94901[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98076 = state_94901;
state_94901 = G__98076;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_94901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_94901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_94939 = f__37806__auto__();
(statearr_94939[(6)] = c__37805__auto___98033);

return statearr_94939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
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
var process__$1 = (function (p__94945){
var vec__94949 = p__94945;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94949,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94949,(1),null);
var job = vec__94949;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37805__auto___98079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_94956){
var state_val_94957 = (state_94956[(1)]);
if((state_val_94957 === (1))){
var state_94956__$1 = state_94956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_94956__$1,(2),res,v);
} else {
if((state_val_94957 === (2))){
var inst_94953 = (state_94956[(2)]);
var inst_94954 = cljs.core.async.close_BANG_(res);
var state_94956__$1 = (function (){var statearr_94958 = state_94956;
(statearr_94958[(7)] = inst_94953);

return statearr_94958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_94956__$1,inst_94954);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0 = (function (){
var statearr_94959 = [null,null,null,null,null,null,null,null];
(statearr_94959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__);

(statearr_94959[(1)] = (1));

return statearr_94959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1 = (function (state_94956){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_94956);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e94960){var ex__37735__auto__ = e94960;
var statearr_94961_98085 = state_94956;
(statearr_94961_98085[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_94956[(4)]))){
var statearr_94962_98086 = state_94956;
(statearr_94962_98086[(1)] = cljs.core.first((state_94956[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98087 = state_94956;
state_94956 = G__98087;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = function(state_94956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1.call(this,state_94956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_94963 = f__37806__auto__();
(statearr_94963[(6)] = c__37805__auto___98079);

return statearr_94963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__94967){
var vec__94968 = p__94967;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94968,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94968,(1),null);
var job = vec__94968;
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
var n__5616__auto___98094 = n;
var __98096 = (0);
while(true){
if((__98096 < n__5616__auto___98094)){
var G__94972_98099 = type;
var G__94972_98100__$1 = (((G__94972_98099 instanceof cljs.core.Keyword))?G__94972_98099.fqn:null);
switch (G__94972_98100__$1) {
case "compute":
var c__37805__auto___98103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__98096,c__37805__auto___98103,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async){
return (function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = ((function (__98096,c__37805__auto___98103,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async){
return (function (state_94988){
var state_val_94989 = (state_94988[(1)]);
if((state_val_94989 === (1))){
var state_94988__$1 = state_94988;
var statearr_94996_98105 = state_94988__$1;
(statearr_94996_98105[(2)] = null);

(statearr_94996_98105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94989 === (2))){
var state_94988__$1 = state_94988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94988__$1,(4),jobs);
} else {
if((state_val_94989 === (3))){
var inst_94986 = (state_94988[(2)]);
var state_94988__$1 = state_94988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94988__$1,inst_94986);
} else {
if((state_val_94989 === (4))){
var inst_94978 = (state_94988[(2)]);
var inst_94979 = process__$1(inst_94978);
var state_94988__$1 = state_94988;
if(cljs.core.truth_(inst_94979)){
var statearr_94997_98113 = state_94988__$1;
(statearr_94997_98113[(1)] = (5));

} else {
var statearr_94998_98118 = state_94988__$1;
(statearr_94998_98118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94989 === (5))){
var state_94988__$1 = state_94988;
var statearr_94999_98119 = state_94988__$1;
(statearr_94999_98119[(2)] = null);

(statearr_94999_98119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94989 === (6))){
var state_94988__$1 = state_94988;
var statearr_95000_98120 = state_94988__$1;
(statearr_95000_98120[(2)] = null);

(statearr_95000_98120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94989 === (7))){
var inst_94984 = (state_94988[(2)]);
var state_94988__$1 = state_94988;
var statearr_95001_98125 = state_94988__$1;
(statearr_95001_98125[(2)] = inst_94984);

(statearr_95001_98125[(1)] = (3));


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
});})(__98096,c__37805__auto___98103,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async))
;
return ((function (__98096,switch__37731__auto__,c__37805__auto___98103,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0 = (function (){
var statearr_95005 = [null,null,null,null,null,null,null];
(statearr_95005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__);

(statearr_95005[(1)] = (1));

return statearr_95005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1 = (function (state_94988){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_94988);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95008){var ex__37735__auto__ = e95008;
var statearr_95009_98130 = state_94988;
(statearr_95009_98130[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_94988[(4)]))){
var statearr_95010_98131 = state_94988;
(statearr_95010_98131[(1)] = cljs.core.first((state_94988[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98132 = state_94988;
state_94988 = G__98132;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = function(state_94988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1.call(this,state_94988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__;
})()
;})(__98096,switch__37731__auto__,c__37805__auto___98103,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async))
})();
var state__37807__auto__ = (function (){var statearr_95011 = f__37806__auto__();
(statearr_95011[(6)] = c__37805__auto___98103);

return statearr_95011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
});})(__98096,c__37805__auto___98103,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async))
);


break;
case "async":
var c__37805__auto___98134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__98096,c__37805__auto___98134,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async){
return (function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = ((function (__98096,c__37805__auto___98134,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async){
return (function (state_95027){
var state_val_95028 = (state_95027[(1)]);
if((state_val_95028 === (1))){
var state_95027__$1 = state_95027;
var statearr_95029_98137 = state_95027__$1;
(statearr_95029_98137[(2)] = null);

(statearr_95029_98137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95028 === (2))){
var state_95027__$1 = state_95027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95027__$1,(4),jobs);
} else {
if((state_val_95028 === (3))){
var inst_95025 = (state_95027[(2)]);
var state_95027__$1 = state_95027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95027__$1,inst_95025);
} else {
if((state_val_95028 === (4))){
var inst_95014 = (state_95027[(2)]);
var inst_95018 = async(inst_95014);
var state_95027__$1 = state_95027;
if(cljs.core.truth_(inst_95018)){
var statearr_95030_98141 = state_95027__$1;
(statearr_95030_98141[(1)] = (5));

} else {
var statearr_95031_98142 = state_95027__$1;
(statearr_95031_98142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95028 === (5))){
var state_95027__$1 = state_95027;
var statearr_95032_98144 = state_95027__$1;
(statearr_95032_98144[(2)] = null);

(statearr_95032_98144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95028 === (6))){
var state_95027__$1 = state_95027;
var statearr_95033_98145 = state_95027__$1;
(statearr_95033_98145[(2)] = null);

(statearr_95033_98145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95028 === (7))){
var inst_95023 = (state_95027[(2)]);
var state_95027__$1 = state_95027;
var statearr_95034_98147 = state_95027__$1;
(statearr_95034_98147[(2)] = inst_95023);

(statearr_95034_98147[(1)] = (3));


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
});})(__98096,c__37805__auto___98134,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async))
;
return ((function (__98096,switch__37731__auto__,c__37805__auto___98134,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0 = (function (){
var statearr_95036 = [null,null,null,null,null,null,null];
(statearr_95036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__);

(statearr_95036[(1)] = (1));

return statearr_95036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1 = (function (state_95027){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_95027);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95037){var ex__37735__auto__ = e95037;
var statearr_95038_98151 = state_95027;
(statearr_95038_98151[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_95027[(4)]))){
var statearr_95039_98156 = state_95027;
(statearr_95039_98156[(1)] = cljs.core.first((state_95027[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98158 = state_95027;
state_95027 = G__98158;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = function(state_95027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1.call(this,state_95027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__;
})()
;})(__98096,switch__37731__auto__,c__37805__auto___98134,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async))
})();
var state__37807__auto__ = (function (){var statearr_95042 = f__37806__auto__();
(statearr_95042[(6)] = c__37805__auto___98134);

return statearr_95042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
});})(__98096,c__37805__auto___98134,G__94972_98099,G__94972_98100__$1,n__5616__auto___98094,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__94972_98100__$1)].join('')));

}

var G__98160 = (__98096 + (1));
__98096 = G__98160;
continue;
} else {
}
break;
}

var c__37805__auto___98161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_95067){
var state_val_95068 = (state_95067[(1)]);
if((state_val_95068 === (7))){
var inst_95061 = (state_95067[(2)]);
var state_95067__$1 = state_95067;
var statearr_95069_98162 = state_95067__$1;
(statearr_95069_98162[(2)] = inst_95061);

(statearr_95069_98162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95068 === (1))){
var state_95067__$1 = state_95067;
var statearr_95070_98163 = state_95067__$1;
(statearr_95070_98163[(2)] = null);

(statearr_95070_98163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95068 === (4))){
var inst_95045 = (state_95067[(7)]);
var inst_95045__$1 = (state_95067[(2)]);
var inst_95046 = (inst_95045__$1 == null);
var state_95067__$1 = (function (){var statearr_95071 = state_95067;
(statearr_95071[(7)] = inst_95045__$1);

return statearr_95071;
})();
if(cljs.core.truth_(inst_95046)){
var statearr_95072_98168 = state_95067__$1;
(statearr_95072_98168[(1)] = (5));

} else {
var statearr_95073_98169 = state_95067__$1;
(statearr_95073_98169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95068 === (6))){
var inst_95045 = (state_95067[(7)]);
var inst_95050 = (state_95067[(8)]);
var inst_95050__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_95052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95053 = [inst_95045,inst_95050__$1];
var inst_95054 = (new cljs.core.PersistentVector(null,2,(5),inst_95052,inst_95053,null));
var state_95067__$1 = (function (){var statearr_95074 = state_95067;
(statearr_95074[(8)] = inst_95050__$1);

return statearr_95074;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_95067__$1,(8),jobs,inst_95054);
} else {
if((state_val_95068 === (3))){
var inst_95063 = (state_95067[(2)]);
var state_95067__$1 = state_95067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95067__$1,inst_95063);
} else {
if((state_val_95068 === (2))){
var state_95067__$1 = state_95067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95067__$1,(4),from);
} else {
if((state_val_95068 === (9))){
var inst_95058 = (state_95067[(2)]);
var state_95067__$1 = (function (){var statearr_95077 = state_95067;
(statearr_95077[(9)] = inst_95058);

return statearr_95077;
})();
var statearr_95078_98177 = state_95067__$1;
(statearr_95078_98177[(2)] = null);

(statearr_95078_98177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95068 === (5))){
var inst_95048 = cljs.core.async.close_BANG_(jobs);
var state_95067__$1 = state_95067;
var statearr_95079_98178 = state_95067__$1;
(statearr_95079_98178[(2)] = inst_95048);

(statearr_95079_98178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95068 === (8))){
var inst_95050 = (state_95067[(8)]);
var inst_95056 = (state_95067[(2)]);
var state_95067__$1 = (function (){var statearr_95080 = state_95067;
(statearr_95080[(10)] = inst_95056);

return statearr_95080;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_95067__$1,(9),results,inst_95050);
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
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0 = (function (){
var statearr_95081 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_95081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__);

(statearr_95081[(1)] = (1));

return statearr_95081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1 = (function (state_95067){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_95067);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95085){var ex__37735__auto__ = e95085;
var statearr_95086_98187 = state_95067;
(statearr_95086_98187[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_95067[(4)]))){
var statearr_95087_98189 = state_95067;
(statearr_95087_98189[(1)] = cljs.core.first((state_95067[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98192 = state_95067;
state_95067 = G__98192;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = function(state_95067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1.call(this,state_95067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_95088 = f__37806__auto__();
(statearr_95088[(6)] = c__37805__auto___98161);

return statearr_95088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));


var c__37805__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_95130){
var state_val_95132 = (state_95130[(1)]);
if((state_val_95132 === (7))){
var inst_95126 = (state_95130[(2)]);
var state_95130__$1 = state_95130;
var statearr_95136_98197 = state_95130__$1;
(statearr_95136_98197[(2)] = inst_95126);

(statearr_95136_98197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (20))){
var state_95130__$1 = state_95130;
var statearr_95142_98200 = state_95130__$1;
(statearr_95142_98200[(2)] = null);

(statearr_95142_98200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (1))){
var state_95130__$1 = state_95130;
var statearr_95155_98204 = state_95130__$1;
(statearr_95155_98204[(2)] = null);

(statearr_95155_98204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (4))){
var inst_95095 = (state_95130[(7)]);
var inst_95095__$1 = (state_95130[(2)]);
var inst_95096 = (inst_95095__$1 == null);
var state_95130__$1 = (function (){var statearr_95174 = state_95130;
(statearr_95174[(7)] = inst_95095__$1);

return statearr_95174;
})();
if(cljs.core.truth_(inst_95096)){
var statearr_95175_98208 = state_95130__$1;
(statearr_95175_98208[(1)] = (5));

} else {
var statearr_95176_98210 = state_95130__$1;
(statearr_95176_98210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (15))){
var inst_95108 = (state_95130[(8)]);
var state_95130__$1 = state_95130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_95130__$1,(18),to,inst_95108);
} else {
if((state_val_95132 === (21))){
var inst_95121 = (state_95130[(2)]);
var state_95130__$1 = state_95130;
var statearr_95185_98212 = state_95130__$1;
(statearr_95185_98212[(2)] = inst_95121);

(statearr_95185_98212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (13))){
var inst_95123 = (state_95130[(2)]);
var state_95130__$1 = (function (){var statearr_95189 = state_95130;
(statearr_95189[(9)] = inst_95123);

return statearr_95189;
})();
var statearr_95190_98216 = state_95130__$1;
(statearr_95190_98216[(2)] = null);

(statearr_95190_98216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (6))){
var inst_95095 = (state_95130[(7)]);
var state_95130__$1 = state_95130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95130__$1,(11),inst_95095);
} else {
if((state_val_95132 === (17))){
var inst_95116 = (state_95130[(2)]);
var state_95130__$1 = state_95130;
if(cljs.core.truth_(inst_95116)){
var statearr_95191_98217 = state_95130__$1;
(statearr_95191_98217[(1)] = (19));

} else {
var statearr_95192_98218 = state_95130__$1;
(statearr_95192_98218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (3))){
var inst_95128 = (state_95130[(2)]);
var state_95130__$1 = state_95130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95130__$1,inst_95128);
} else {
if((state_val_95132 === (12))){
var inst_95105 = (state_95130[(10)]);
var state_95130__$1 = state_95130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95130__$1,(14),inst_95105);
} else {
if((state_val_95132 === (2))){
var state_95130__$1 = state_95130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95130__$1,(4),results);
} else {
if((state_val_95132 === (19))){
var state_95130__$1 = state_95130;
var statearr_95193_98220 = state_95130__$1;
(statearr_95193_98220[(2)] = null);

(statearr_95193_98220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (11))){
var inst_95105 = (state_95130[(2)]);
var state_95130__$1 = (function (){var statearr_95194 = state_95130;
(statearr_95194[(10)] = inst_95105);

return statearr_95194;
})();
var statearr_95195_98226 = state_95130__$1;
(statearr_95195_98226[(2)] = null);

(statearr_95195_98226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (9))){
var state_95130__$1 = state_95130;
var statearr_95197_98230 = state_95130__$1;
(statearr_95197_98230[(2)] = null);

(statearr_95197_98230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (5))){
var state_95130__$1 = state_95130;
if(cljs.core.truth_(close_QMARK_)){
var statearr_95198_98233 = state_95130__$1;
(statearr_95198_98233[(1)] = (8));

} else {
var statearr_95199_98234 = state_95130__$1;
(statearr_95199_98234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (14))){
var inst_95108 = (state_95130[(8)]);
var inst_95110 = (state_95130[(11)]);
var inst_95108__$1 = (state_95130[(2)]);
var inst_95109 = (inst_95108__$1 == null);
var inst_95110__$1 = cljs.core.not(inst_95109);
var state_95130__$1 = (function (){var statearr_95200 = state_95130;
(statearr_95200[(8)] = inst_95108__$1);

(statearr_95200[(11)] = inst_95110__$1);

return statearr_95200;
})();
if(inst_95110__$1){
var statearr_95201_98238 = state_95130__$1;
(statearr_95201_98238[(1)] = (15));

} else {
var statearr_95202_98239 = state_95130__$1;
(statearr_95202_98239[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (16))){
var inst_95110 = (state_95130[(11)]);
var state_95130__$1 = state_95130;
var statearr_95203_98242 = state_95130__$1;
(statearr_95203_98242[(2)] = inst_95110);

(statearr_95203_98242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (10))){
var inst_95102 = (state_95130[(2)]);
var state_95130__$1 = state_95130;
var statearr_95204_98244 = state_95130__$1;
(statearr_95204_98244[(2)] = inst_95102);

(statearr_95204_98244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (18))){
var inst_95113 = (state_95130[(2)]);
var state_95130__$1 = state_95130;
var statearr_95205_98247 = state_95130__$1;
(statearr_95205_98247[(2)] = inst_95113);

(statearr_95205_98247[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95132 === (8))){
var inst_95099 = cljs.core.async.close_BANG_(to);
var state_95130__$1 = state_95130;
var statearr_95206_98249 = state_95130__$1;
(statearr_95206_98249[(2)] = inst_95099);

(statearr_95206_98249[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0 = (function (){
var statearr_95207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_95207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__);

(statearr_95207[(1)] = (1));

return statearr_95207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1 = (function (state_95130){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_95130);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95208){var ex__37735__auto__ = e95208;
var statearr_95209_98263 = state_95130;
(statearr_95209_98263[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_95130[(4)]))){
var statearr_95211_98265 = state_95130;
(statearr_95211_98265[(1)] = cljs.core.first((state_95130[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98268 = state_95130;
state_95130 = G__98268;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__ = function(state_95130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1.call(this,state_95130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_95217 = f__37806__auto__();
(statearr_95217[(6)] = c__37805__auto__);

return statearr_95217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));

return c__37805__auto__;
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
var G__95222 = arguments.length;
switch (G__95222) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__95228 = arguments.length;
switch (G__95228) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__95231 = arguments.length;
switch (G__95231) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37805__auto___98306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_95259){
var state_val_95260 = (state_95259[(1)]);
if((state_val_95260 === (7))){
var inst_95255 = (state_95259[(2)]);
var state_95259__$1 = state_95259;
var statearr_95264_98309 = state_95259__$1;
(statearr_95264_98309[(2)] = inst_95255);

(statearr_95264_98309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (1))){
var state_95259__$1 = state_95259;
var statearr_95271_98314 = state_95259__$1;
(statearr_95271_98314[(2)] = null);

(statearr_95271_98314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (4))){
var inst_95236 = (state_95259[(7)]);
var inst_95236__$1 = (state_95259[(2)]);
var inst_95237 = (inst_95236__$1 == null);
var state_95259__$1 = (function (){var statearr_95272 = state_95259;
(statearr_95272[(7)] = inst_95236__$1);

return statearr_95272;
})();
if(cljs.core.truth_(inst_95237)){
var statearr_95273_98319 = state_95259__$1;
(statearr_95273_98319[(1)] = (5));

} else {
var statearr_95274_98320 = state_95259__$1;
(statearr_95274_98320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (13))){
var state_95259__$1 = state_95259;
var statearr_95275_98323 = state_95259__$1;
(statearr_95275_98323[(2)] = null);

(statearr_95275_98323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (6))){
var inst_95236 = (state_95259[(7)]);
var inst_95242 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_95236) : p.call(null,inst_95236));
var state_95259__$1 = state_95259;
if(cljs.core.truth_(inst_95242)){
var statearr_95276_98327 = state_95259__$1;
(statearr_95276_98327[(1)] = (9));

} else {
var statearr_95277_98328 = state_95259__$1;
(statearr_95277_98328[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (3))){
var inst_95257 = (state_95259[(2)]);
var state_95259__$1 = state_95259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95259__$1,inst_95257);
} else {
if((state_val_95260 === (12))){
var state_95259__$1 = state_95259;
var statearr_95278_98332 = state_95259__$1;
(statearr_95278_98332[(2)] = null);

(statearr_95278_98332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (2))){
var state_95259__$1 = state_95259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95259__$1,(4),ch);
} else {
if((state_val_95260 === (11))){
var inst_95236 = (state_95259[(7)]);
var inst_95246 = (state_95259[(2)]);
var state_95259__$1 = state_95259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_95259__$1,(8),inst_95246,inst_95236);
} else {
if((state_val_95260 === (9))){
var state_95259__$1 = state_95259;
var statearr_95291_98338 = state_95259__$1;
(statearr_95291_98338[(2)] = tc);

(statearr_95291_98338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (5))){
var inst_95239 = cljs.core.async.close_BANG_(tc);
var inst_95240 = cljs.core.async.close_BANG_(fc);
var state_95259__$1 = (function (){var statearr_95294 = state_95259;
(statearr_95294[(8)] = inst_95239);

return statearr_95294;
})();
var statearr_95295_98344 = state_95259__$1;
(statearr_95295_98344[(2)] = inst_95240);

(statearr_95295_98344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (14))){
var inst_95253 = (state_95259[(2)]);
var state_95259__$1 = state_95259;
var statearr_95296_98349 = state_95259__$1;
(statearr_95296_98349[(2)] = inst_95253);

(statearr_95296_98349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (10))){
var state_95259__$1 = state_95259;
var statearr_95297_98356 = state_95259__$1;
(statearr_95297_98356[(2)] = fc);

(statearr_95297_98356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95260 === (8))){
var inst_95248 = (state_95259[(2)]);
var state_95259__$1 = state_95259;
if(cljs.core.truth_(inst_95248)){
var statearr_95299_98358 = state_95259__$1;
(statearr_95299_98358[(1)] = (12));

} else {
var statearr_95300_98359 = state_95259__$1;
(statearr_95300_98359[(1)] = (13));

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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_95301 = [null,null,null,null,null,null,null,null,null];
(statearr_95301[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_95301[(1)] = (1));

return statearr_95301;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_95259){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_95259);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95302){var ex__37735__auto__ = e95302;
var statearr_95305_98365 = state_95259;
(statearr_95305_98365[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_95259[(4)]))){
var statearr_95308_98366 = state_95259;
(statearr_95308_98366[(1)] = cljs.core.first((state_95259[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98367 = state_95259;
state_95259 = G__98367;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_95259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_95259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_95309 = f__37806__auto__();
(statearr_95309[(6)] = c__37805__auto___98306);

return statearr_95309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
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
var c__37805__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_95340){
var state_val_95341 = (state_95340[(1)]);
if((state_val_95341 === (7))){
var inst_95336 = (state_95340[(2)]);
var state_95340__$1 = state_95340;
var statearr_95346_98369 = state_95340__$1;
(statearr_95346_98369[(2)] = inst_95336);

(statearr_95346_98369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95341 === (1))){
var inst_95315 = init;
var inst_95316 = inst_95315;
var state_95340__$1 = (function (){var statearr_95348 = state_95340;
(statearr_95348[(7)] = inst_95316);

return statearr_95348;
})();
var statearr_95353_98372 = state_95340__$1;
(statearr_95353_98372[(2)] = null);

(statearr_95353_98372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95341 === (4))){
var inst_95320 = (state_95340[(8)]);
var inst_95320__$1 = (state_95340[(2)]);
var inst_95321 = (inst_95320__$1 == null);
var state_95340__$1 = (function (){var statearr_95356 = state_95340;
(statearr_95356[(8)] = inst_95320__$1);

return statearr_95356;
})();
if(cljs.core.truth_(inst_95321)){
var statearr_95357_98377 = state_95340__$1;
(statearr_95357_98377[(1)] = (5));

} else {
var statearr_95358_98379 = state_95340__$1;
(statearr_95358_98379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95341 === (6))){
var inst_95316 = (state_95340[(7)]);
var inst_95320 = (state_95340[(8)]);
var inst_95324 = (state_95340[(9)]);
var inst_95324__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_95316,inst_95320) : f.call(null,inst_95316,inst_95320));
var inst_95325 = cljs.core.reduced_QMARK_(inst_95324__$1);
var state_95340__$1 = (function (){var statearr_95362 = state_95340;
(statearr_95362[(9)] = inst_95324__$1);

return statearr_95362;
})();
if(inst_95325){
var statearr_95369_98390 = state_95340__$1;
(statearr_95369_98390[(1)] = (8));

} else {
var statearr_95370_98391 = state_95340__$1;
(statearr_95370_98391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95341 === (3))){
var inst_95338 = (state_95340[(2)]);
var state_95340__$1 = state_95340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95340__$1,inst_95338);
} else {
if((state_val_95341 === (2))){
var state_95340__$1 = state_95340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95340__$1,(4),ch);
} else {
if((state_val_95341 === (9))){
var inst_95324 = (state_95340[(9)]);
var inst_95316 = inst_95324;
var state_95340__$1 = (function (){var statearr_95373 = state_95340;
(statearr_95373[(7)] = inst_95316);

return statearr_95373;
})();
var statearr_95374_98392 = state_95340__$1;
(statearr_95374_98392[(2)] = null);

(statearr_95374_98392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95341 === (5))){
var inst_95316 = (state_95340[(7)]);
var state_95340__$1 = state_95340;
var statearr_95379_98393 = state_95340__$1;
(statearr_95379_98393[(2)] = inst_95316);

(statearr_95379_98393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95341 === (10))){
var inst_95334 = (state_95340[(2)]);
var state_95340__$1 = state_95340;
var statearr_95382_98395 = state_95340__$1;
(statearr_95382_98395[(2)] = inst_95334);

(statearr_95382_98395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95341 === (8))){
var inst_95324 = (state_95340[(9)]);
var inst_95327 = cljs.core.deref(inst_95324);
var state_95340__$1 = state_95340;
var statearr_95387_98396 = state_95340__$1;
(statearr_95387_98396[(2)] = inst_95327);

(statearr_95387_98396[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__37732__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37732__auto____0 = (function (){
var statearr_95388 = [null,null,null,null,null,null,null,null,null,null];
(statearr_95388[(0)] = cljs$core$async$reduce_$_state_machine__37732__auto__);

(statearr_95388[(1)] = (1));

return statearr_95388;
});
var cljs$core$async$reduce_$_state_machine__37732__auto____1 = (function (state_95340){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_95340);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95393){var ex__37735__auto__ = e95393;
var statearr_95394_98400 = state_95340;
(statearr_95394_98400[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_95340[(4)]))){
var statearr_95395_98401 = state_95340;
(statearr_95395_98401[(1)] = cljs.core.first((state_95340[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98403 = state_95340;
state_95340 = G__98403;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37732__auto__ = function(state_95340){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37732__auto____1.call(this,state_95340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37732__auto____0;
cljs$core$async$reduce_$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37732__auto____1;
return cljs$core$async$reduce_$_state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_95398 = f__37806__auto__();
(statearr_95398[(6)] = c__37805__auto__);

return statearr_95398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));

return c__37805__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37805__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_95406){
var state_val_95407 = (state_95406[(1)]);
if((state_val_95407 === (1))){
var inst_95400 = cljs.core.async.reduce(f__$1,init,ch);
var state_95406__$1 = state_95406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95406__$1,(2),inst_95400);
} else {
if((state_val_95407 === (2))){
var inst_95403 = (state_95406[(2)]);
var inst_95404 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_95403) : f__$1.call(null,inst_95403));
var state_95406__$1 = state_95406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95406__$1,inst_95404);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37732__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37732__auto____0 = (function (){
var statearr_95414 = [null,null,null,null,null,null,null];
(statearr_95414[(0)] = cljs$core$async$transduce_$_state_machine__37732__auto__);

(statearr_95414[(1)] = (1));

return statearr_95414;
});
var cljs$core$async$transduce_$_state_machine__37732__auto____1 = (function (state_95406){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_95406);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95416){var ex__37735__auto__ = e95416;
var statearr_95417_98408 = state_95406;
(statearr_95417_98408[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_95406[(4)]))){
var statearr_95418_98411 = state_95406;
(statearr_95418_98411[(1)] = cljs.core.first((state_95406[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98413 = state_95406;
state_95406 = G__98413;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37732__auto__ = function(state_95406){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37732__auto____1.call(this,state_95406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37732__auto____0;
cljs$core$async$transduce_$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37732__auto____1;
return cljs$core$async$transduce_$_state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_95419 = f__37806__auto__();
(statearr_95419[(6)] = c__37805__auto__);

return statearr_95419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));

return c__37805__auto__;
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
var G__95422 = arguments.length;
switch (G__95422) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37805__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_95454){
var state_val_95455 = (state_95454[(1)]);
if((state_val_95455 === (7))){
var inst_95436 = (state_95454[(2)]);
var state_95454__$1 = state_95454;
var statearr_95456_98419 = state_95454__$1;
(statearr_95456_98419[(2)] = inst_95436);

(statearr_95456_98419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (1))){
var inst_95430 = cljs.core.seq(coll);
var inst_95431 = inst_95430;
var state_95454__$1 = (function (){var statearr_95457 = state_95454;
(statearr_95457[(7)] = inst_95431);

return statearr_95457;
})();
var statearr_95462_98421 = state_95454__$1;
(statearr_95462_98421[(2)] = null);

(statearr_95462_98421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (4))){
var inst_95431 = (state_95454[(7)]);
var inst_95434 = cljs.core.first(inst_95431);
var state_95454__$1 = state_95454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_95454__$1,(7),ch,inst_95434);
} else {
if((state_val_95455 === (13))){
var inst_95448 = (state_95454[(2)]);
var state_95454__$1 = state_95454;
var statearr_95463_98422 = state_95454__$1;
(statearr_95463_98422[(2)] = inst_95448);

(statearr_95463_98422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (6))){
var inst_95439 = (state_95454[(2)]);
var state_95454__$1 = state_95454;
if(cljs.core.truth_(inst_95439)){
var statearr_95470_98426 = state_95454__$1;
(statearr_95470_98426[(1)] = (8));

} else {
var statearr_95471_98427 = state_95454__$1;
(statearr_95471_98427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (3))){
var inst_95452 = (state_95454[(2)]);
var state_95454__$1 = state_95454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95454__$1,inst_95452);
} else {
if((state_val_95455 === (12))){
var state_95454__$1 = state_95454;
var statearr_95472_98431 = state_95454__$1;
(statearr_95472_98431[(2)] = null);

(statearr_95472_98431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (2))){
var inst_95431 = (state_95454[(7)]);
var state_95454__$1 = state_95454;
if(cljs.core.truth_(inst_95431)){
var statearr_95479_98432 = state_95454__$1;
(statearr_95479_98432[(1)] = (4));

} else {
var statearr_95480_98433 = state_95454__$1;
(statearr_95480_98433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (11))){
var inst_95445 = cljs.core.async.close_BANG_(ch);
var state_95454__$1 = state_95454;
var statearr_95481_98435 = state_95454__$1;
(statearr_95481_98435[(2)] = inst_95445);

(statearr_95481_98435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (9))){
var state_95454__$1 = state_95454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_95486_98437 = state_95454__$1;
(statearr_95486_98437[(1)] = (11));

} else {
var statearr_95487_98438 = state_95454__$1;
(statearr_95487_98438[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (5))){
var inst_95431 = (state_95454[(7)]);
var state_95454__$1 = state_95454;
var statearr_95490_98440 = state_95454__$1;
(statearr_95490_98440[(2)] = inst_95431);

(statearr_95490_98440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (10))){
var inst_95450 = (state_95454[(2)]);
var state_95454__$1 = state_95454;
var statearr_95491_98441 = state_95454__$1;
(statearr_95491_98441[(2)] = inst_95450);

(statearr_95491_98441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95455 === (8))){
var inst_95431 = (state_95454[(7)]);
var inst_95441 = cljs.core.next(inst_95431);
var inst_95431__$1 = inst_95441;
var state_95454__$1 = (function (){var statearr_95504 = state_95454;
(statearr_95504[(7)] = inst_95431__$1);

return statearr_95504;
})();
var statearr_95505_98442 = state_95454__$1;
(statearr_95505_98442[(2)] = null);

(statearr_95505_98442[(1)] = (2));


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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_95506 = [null,null,null,null,null,null,null,null];
(statearr_95506[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_95506[(1)] = (1));

return statearr_95506;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_95454){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_95454);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95507){var ex__37735__auto__ = e95507;
var statearr_95508_98451 = state_95454;
(statearr_95508_98451[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_95454[(4)]))){
var statearr_95514_98456 = state_95454;
(statearr_95514_98456[(1)] = cljs.core.first((state_95454[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98457 = state_95454;
state_95454 = G__98457;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_95454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_95454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_95517 = f__37806__auto__();
(statearr_95517[(6)] = c__37805__auto__);

return statearr_95517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));

return c__37805__auto__;
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
var G__95519 = arguments.length;
switch (G__95519) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_98461 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_98461(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_98463 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_98463(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_98466 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_98466(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_98471 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_98471(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async95544 = (function (ch,cs,meta95545){
this.ch = ch;
this.cs = cs;
this.meta95545 = meta95545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async95544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_95546,meta95545__$1){
var self__ = this;
var _95546__$1 = this;
return (new cljs.core.async.t_cljs$core$async95544(self__.ch,self__.cs,meta95545__$1));
}));

(cljs.core.async.t_cljs$core$async95544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_95546){
var self__ = this;
var _95546__$1 = this;
return self__.meta95545;
}));

(cljs.core.async.t_cljs$core$async95544.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async95544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async95544.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async95544.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async95544.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async95544.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async95544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta95545","meta95545",1629426254,null)], null);
}));

(cljs.core.async.t_cljs$core$async95544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async95544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async95544");

(cljs.core.async.t_cljs$core$async95544.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async95544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async95544.
 */
cljs.core.async.__GT_t_cljs$core$async95544 = (function cljs$core$async$__GT_t_cljs$core$async95544(ch,cs,meta95545){
return (new cljs.core.async.t_cljs$core$async95544(ch,cs,meta95545));
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
var m = (new cljs.core.async.t_cljs$core$async95544(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37805__auto___98477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_95707){
var state_val_95708 = (state_95707[(1)]);
if((state_val_95708 === (7))){
var inst_95703 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95713_98479 = state_95707__$1;
(statearr_95713_98479[(2)] = inst_95703);

(statearr_95713_98479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (20))){
var inst_95595 = (state_95707[(7)]);
var inst_95609 = cljs.core.first(inst_95595);
var inst_95610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_95609,(0),null);
var inst_95611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_95609,(1),null);
var state_95707__$1 = (function (){var statearr_95720 = state_95707;
(statearr_95720[(8)] = inst_95610);

return statearr_95720;
})();
if(cljs.core.truth_(inst_95611)){
var statearr_95721_98480 = state_95707__$1;
(statearr_95721_98480[(1)] = (22));

} else {
var statearr_95723_98482 = state_95707__$1;
(statearr_95723_98482[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (27))){
var inst_95640 = (state_95707[(9)]);
var inst_95642 = (state_95707[(10)]);
var inst_95649 = (state_95707[(11)]);
var inst_95563 = (state_95707[(12)]);
var inst_95649__$1 = cljs.core._nth(inst_95640,inst_95642);
var inst_95656 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_95649__$1,inst_95563,done);
var state_95707__$1 = (function (){var statearr_95724 = state_95707;
(statearr_95724[(11)] = inst_95649__$1);

return statearr_95724;
})();
if(cljs.core.truth_(inst_95656)){
var statearr_95725_98489 = state_95707__$1;
(statearr_95725_98489[(1)] = (30));

} else {
var statearr_95726_98490 = state_95707__$1;
(statearr_95726_98490[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (1))){
var state_95707__$1 = state_95707;
var statearr_95727_98494 = state_95707__$1;
(statearr_95727_98494[(2)] = null);

(statearr_95727_98494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (24))){
var inst_95595 = (state_95707[(7)]);
var inst_95617 = (state_95707[(2)]);
var inst_95618 = cljs.core.next(inst_95595);
var inst_95573 = inst_95618;
var inst_95574 = null;
var inst_95575 = (0);
var inst_95576 = (0);
var state_95707__$1 = (function (){var statearr_95728 = state_95707;
(statearr_95728[(13)] = inst_95617);

(statearr_95728[(14)] = inst_95573);

(statearr_95728[(15)] = inst_95574);

(statearr_95728[(16)] = inst_95575);

(statearr_95728[(17)] = inst_95576);

return statearr_95728;
})();
var statearr_95741_98495 = state_95707__$1;
(statearr_95741_98495[(2)] = null);

(statearr_95741_98495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (39))){
var state_95707__$1 = state_95707;
var statearr_95750_98496 = state_95707__$1;
(statearr_95750_98496[(2)] = null);

(statearr_95750_98496[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (4))){
var inst_95563 = (state_95707[(12)]);
var inst_95563__$1 = (state_95707[(2)]);
var inst_95565 = (inst_95563__$1 == null);
var state_95707__$1 = (function (){var statearr_95751 = state_95707;
(statearr_95751[(12)] = inst_95563__$1);

return statearr_95751;
})();
if(cljs.core.truth_(inst_95565)){
var statearr_95752_98502 = state_95707__$1;
(statearr_95752_98502[(1)] = (5));

} else {
var statearr_95753_98503 = state_95707__$1;
(statearr_95753_98503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (15))){
var inst_95576 = (state_95707[(17)]);
var inst_95573 = (state_95707[(14)]);
var inst_95574 = (state_95707[(15)]);
var inst_95575 = (state_95707[(16)]);
var inst_95591 = (state_95707[(2)]);
var inst_95592 = (inst_95576 + (1));
var tmp95746 = inst_95574;
var tmp95747 = inst_95575;
var tmp95748 = inst_95573;
var inst_95573__$1 = tmp95748;
var inst_95574__$1 = tmp95746;
var inst_95575__$1 = tmp95747;
var inst_95576__$1 = inst_95592;
var state_95707__$1 = (function (){var statearr_95754 = state_95707;
(statearr_95754[(18)] = inst_95591);

(statearr_95754[(14)] = inst_95573__$1);

(statearr_95754[(15)] = inst_95574__$1);

(statearr_95754[(16)] = inst_95575__$1);

(statearr_95754[(17)] = inst_95576__$1);

return statearr_95754;
})();
var statearr_95755_98514 = state_95707__$1;
(statearr_95755_98514[(2)] = null);

(statearr_95755_98514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (21))){
var inst_95621 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95762_98520 = state_95707__$1;
(statearr_95762_98520[(2)] = inst_95621);

(statearr_95762_98520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (31))){
var inst_95649 = (state_95707[(11)]);
var inst_95660 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_95649);
var state_95707__$1 = state_95707;
var statearr_95763_98522 = state_95707__$1;
(statearr_95763_98522[(2)] = inst_95660);

(statearr_95763_98522[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (32))){
var inst_95642 = (state_95707[(10)]);
var inst_95639 = (state_95707[(19)]);
var inst_95640 = (state_95707[(9)]);
var inst_95641 = (state_95707[(20)]);
var inst_95662 = (state_95707[(2)]);
var inst_95663 = (inst_95642 + (1));
var tmp95756 = inst_95639;
var tmp95757 = inst_95641;
var tmp95758 = inst_95640;
var inst_95639__$1 = tmp95756;
var inst_95640__$1 = tmp95758;
var inst_95641__$1 = tmp95757;
var inst_95642__$1 = inst_95663;
var state_95707__$1 = (function (){var statearr_95765 = state_95707;
(statearr_95765[(21)] = inst_95662);

(statearr_95765[(19)] = inst_95639__$1);

(statearr_95765[(9)] = inst_95640__$1);

(statearr_95765[(20)] = inst_95641__$1);

(statearr_95765[(10)] = inst_95642__$1);

return statearr_95765;
})();
var statearr_95766_98531 = state_95707__$1;
(statearr_95766_98531[(2)] = null);

(statearr_95766_98531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (40))){
var inst_95676 = (state_95707[(22)]);
var inst_95680 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_95676);
var state_95707__$1 = state_95707;
var statearr_95775_98532 = state_95707__$1;
(statearr_95775_98532[(2)] = inst_95680);

(statearr_95775_98532[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (33))){
var inst_95667 = (state_95707[(23)]);
var inst_95669 = cljs.core.chunked_seq_QMARK_(inst_95667);
var state_95707__$1 = state_95707;
if(inst_95669){
var statearr_95776_98533 = state_95707__$1;
(statearr_95776_98533[(1)] = (36));

} else {
var statearr_95781_98534 = state_95707__$1;
(statearr_95781_98534[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (13))){
var inst_95585 = (state_95707[(24)]);
var inst_95588 = cljs.core.async.close_BANG_(inst_95585);
var state_95707__$1 = state_95707;
var statearr_95782_98536 = state_95707__$1;
(statearr_95782_98536[(2)] = inst_95588);

(statearr_95782_98536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (22))){
var inst_95610 = (state_95707[(8)]);
var inst_95614 = cljs.core.async.close_BANG_(inst_95610);
var state_95707__$1 = state_95707;
var statearr_95789_98539 = state_95707__$1;
(statearr_95789_98539[(2)] = inst_95614);

(statearr_95789_98539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (36))){
var inst_95667 = (state_95707[(23)]);
var inst_95671 = cljs.core.chunk_first(inst_95667);
var inst_95672 = cljs.core.chunk_rest(inst_95667);
var inst_95673 = cljs.core.count(inst_95671);
var inst_95639 = inst_95672;
var inst_95640 = inst_95671;
var inst_95641 = inst_95673;
var inst_95642 = (0);
var state_95707__$1 = (function (){var statearr_95793 = state_95707;
(statearr_95793[(19)] = inst_95639);

(statearr_95793[(9)] = inst_95640);

(statearr_95793[(20)] = inst_95641);

(statearr_95793[(10)] = inst_95642);

return statearr_95793;
})();
var statearr_95795_98543 = state_95707__$1;
(statearr_95795_98543[(2)] = null);

(statearr_95795_98543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (41))){
var inst_95667 = (state_95707[(23)]);
var inst_95682 = (state_95707[(2)]);
var inst_95683 = cljs.core.next(inst_95667);
var inst_95639 = inst_95683;
var inst_95640 = null;
var inst_95641 = (0);
var inst_95642 = (0);
var state_95707__$1 = (function (){var statearr_95798 = state_95707;
(statearr_95798[(25)] = inst_95682);

(statearr_95798[(19)] = inst_95639);

(statearr_95798[(9)] = inst_95640);

(statearr_95798[(20)] = inst_95641);

(statearr_95798[(10)] = inst_95642);

return statearr_95798;
})();
var statearr_95799_98544 = state_95707__$1;
(statearr_95799_98544[(2)] = null);

(statearr_95799_98544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (43))){
var state_95707__$1 = state_95707;
var statearr_95800_98545 = state_95707__$1;
(statearr_95800_98545[(2)] = null);

(statearr_95800_98545[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (29))){
var inst_95691 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95801_98546 = state_95707__$1;
(statearr_95801_98546[(2)] = inst_95691);

(statearr_95801_98546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (44))){
var inst_95700 = (state_95707[(2)]);
var state_95707__$1 = (function (){var statearr_95802 = state_95707;
(statearr_95802[(26)] = inst_95700);

return statearr_95802;
})();
var statearr_95803_98548 = state_95707__$1;
(statearr_95803_98548[(2)] = null);

(statearr_95803_98548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (6))){
var inst_95631 = (state_95707[(27)]);
var inst_95630 = cljs.core.deref(cs);
var inst_95631__$1 = cljs.core.keys(inst_95630);
var inst_95632 = cljs.core.count(inst_95631__$1);
var inst_95633 = cljs.core.reset_BANG_(dctr,inst_95632);
var inst_95638 = cljs.core.seq(inst_95631__$1);
var inst_95639 = inst_95638;
var inst_95640 = null;
var inst_95641 = (0);
var inst_95642 = (0);
var state_95707__$1 = (function (){var statearr_95804 = state_95707;
(statearr_95804[(27)] = inst_95631__$1);

(statearr_95804[(28)] = inst_95633);

(statearr_95804[(19)] = inst_95639);

(statearr_95804[(9)] = inst_95640);

(statearr_95804[(20)] = inst_95641);

(statearr_95804[(10)] = inst_95642);

return statearr_95804;
})();
var statearr_95810_98552 = state_95707__$1;
(statearr_95810_98552[(2)] = null);

(statearr_95810_98552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (28))){
var inst_95639 = (state_95707[(19)]);
var inst_95667 = (state_95707[(23)]);
var inst_95667__$1 = cljs.core.seq(inst_95639);
var state_95707__$1 = (function (){var statearr_95811 = state_95707;
(statearr_95811[(23)] = inst_95667__$1);

return statearr_95811;
})();
if(inst_95667__$1){
var statearr_95813_98553 = state_95707__$1;
(statearr_95813_98553[(1)] = (33));

} else {
var statearr_95814_98554 = state_95707__$1;
(statearr_95814_98554[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (25))){
var inst_95642 = (state_95707[(10)]);
var inst_95641 = (state_95707[(20)]);
var inst_95645 = (inst_95642 < inst_95641);
var inst_95646 = inst_95645;
var state_95707__$1 = state_95707;
if(cljs.core.truth_(inst_95646)){
var statearr_95815_98555 = state_95707__$1;
(statearr_95815_98555[(1)] = (27));

} else {
var statearr_95818_98556 = state_95707__$1;
(statearr_95818_98556[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (34))){
var state_95707__$1 = state_95707;
var statearr_95819_98557 = state_95707__$1;
(statearr_95819_98557[(2)] = null);

(statearr_95819_98557[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (17))){
var state_95707__$1 = state_95707;
var statearr_95822_98558 = state_95707__$1;
(statearr_95822_98558[(2)] = null);

(statearr_95822_98558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (3))){
var inst_95705 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95707__$1,inst_95705);
} else {
if((state_val_95708 === (12))){
var inst_95626 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95827_98559 = state_95707__$1;
(statearr_95827_98559[(2)] = inst_95626);

(statearr_95827_98559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (2))){
var state_95707__$1 = state_95707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95707__$1,(4),ch);
} else {
if((state_val_95708 === (23))){
var state_95707__$1 = state_95707;
var statearr_95829_98561 = state_95707__$1;
(statearr_95829_98561[(2)] = null);

(statearr_95829_98561[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (35))){
var inst_95689 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95830_98562 = state_95707__$1;
(statearr_95830_98562[(2)] = inst_95689);

(statearr_95830_98562[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (19))){
var inst_95595 = (state_95707[(7)]);
var inst_95600 = cljs.core.chunk_first(inst_95595);
var inst_95602 = cljs.core.chunk_rest(inst_95595);
var inst_95603 = cljs.core.count(inst_95600);
var inst_95573 = inst_95602;
var inst_95574 = inst_95600;
var inst_95575 = inst_95603;
var inst_95576 = (0);
var state_95707__$1 = (function (){var statearr_95831 = state_95707;
(statearr_95831[(14)] = inst_95573);

(statearr_95831[(15)] = inst_95574);

(statearr_95831[(16)] = inst_95575);

(statearr_95831[(17)] = inst_95576);

return statearr_95831;
})();
var statearr_95832_98567 = state_95707__$1;
(statearr_95832_98567[(2)] = null);

(statearr_95832_98567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (11))){
var inst_95573 = (state_95707[(14)]);
var inst_95595 = (state_95707[(7)]);
var inst_95595__$1 = cljs.core.seq(inst_95573);
var state_95707__$1 = (function (){var statearr_95834 = state_95707;
(statearr_95834[(7)] = inst_95595__$1);

return statearr_95834;
})();
if(inst_95595__$1){
var statearr_95835_98568 = state_95707__$1;
(statearr_95835_98568[(1)] = (16));

} else {
var statearr_95836_98569 = state_95707__$1;
(statearr_95836_98569[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (9))){
var inst_95628 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95837_98570 = state_95707__$1;
(statearr_95837_98570[(2)] = inst_95628);

(statearr_95837_98570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (5))){
var inst_95571 = cljs.core.deref(cs);
var inst_95572 = cljs.core.seq(inst_95571);
var inst_95573 = inst_95572;
var inst_95574 = null;
var inst_95575 = (0);
var inst_95576 = (0);
var state_95707__$1 = (function (){var statearr_95838 = state_95707;
(statearr_95838[(14)] = inst_95573);

(statearr_95838[(15)] = inst_95574);

(statearr_95838[(16)] = inst_95575);

(statearr_95838[(17)] = inst_95576);

return statearr_95838;
})();
var statearr_95839_98571 = state_95707__$1;
(statearr_95839_98571[(2)] = null);

(statearr_95839_98571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (14))){
var state_95707__$1 = state_95707;
var statearr_95840_98572 = state_95707__$1;
(statearr_95840_98572[(2)] = null);

(statearr_95840_98572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (45))){
var inst_95697 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95841_98574 = state_95707__$1;
(statearr_95841_98574[(2)] = inst_95697);

(statearr_95841_98574[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (26))){
var inst_95631 = (state_95707[(27)]);
var inst_95693 = (state_95707[(2)]);
var inst_95694 = cljs.core.seq(inst_95631);
var state_95707__$1 = (function (){var statearr_95848 = state_95707;
(statearr_95848[(29)] = inst_95693);

return statearr_95848;
})();
if(inst_95694){
var statearr_95853_98575 = state_95707__$1;
(statearr_95853_98575[(1)] = (42));

} else {
var statearr_95854_98576 = state_95707__$1;
(statearr_95854_98576[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (16))){
var inst_95595 = (state_95707[(7)]);
var inst_95597 = cljs.core.chunked_seq_QMARK_(inst_95595);
var state_95707__$1 = state_95707;
if(inst_95597){
var statearr_95860_98577 = state_95707__$1;
(statearr_95860_98577[(1)] = (19));

} else {
var statearr_95861_98578 = state_95707__$1;
(statearr_95861_98578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (38))){
var inst_95686 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95864_98579 = state_95707__$1;
(statearr_95864_98579[(2)] = inst_95686);

(statearr_95864_98579[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (30))){
var state_95707__$1 = state_95707;
var statearr_95865_98580 = state_95707__$1;
(statearr_95865_98580[(2)] = null);

(statearr_95865_98580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (10))){
var inst_95574 = (state_95707[(15)]);
var inst_95576 = (state_95707[(17)]);
var inst_95584 = cljs.core._nth(inst_95574,inst_95576);
var inst_95585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_95584,(0),null);
var inst_95586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_95584,(1),null);
var state_95707__$1 = (function (){var statearr_95866 = state_95707;
(statearr_95866[(24)] = inst_95585);

return statearr_95866;
})();
if(cljs.core.truth_(inst_95586)){
var statearr_95867_98581 = state_95707__$1;
(statearr_95867_98581[(1)] = (13));

} else {
var statearr_95868_98582 = state_95707__$1;
(statearr_95868_98582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (18))){
var inst_95624 = (state_95707[(2)]);
var state_95707__$1 = state_95707;
var statearr_95872_98583 = state_95707__$1;
(statearr_95872_98583[(2)] = inst_95624);

(statearr_95872_98583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (42))){
var state_95707__$1 = state_95707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95707__$1,(45),dchan);
} else {
if((state_val_95708 === (37))){
var inst_95667 = (state_95707[(23)]);
var inst_95676 = (state_95707[(22)]);
var inst_95563 = (state_95707[(12)]);
var inst_95676__$1 = cljs.core.first(inst_95667);
var inst_95677 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_95676__$1,inst_95563,done);
var state_95707__$1 = (function (){var statearr_95877 = state_95707;
(statearr_95877[(22)] = inst_95676__$1);

return statearr_95877;
})();
if(cljs.core.truth_(inst_95677)){
var statearr_95878_98584 = state_95707__$1;
(statearr_95878_98584[(1)] = (39));

} else {
var statearr_95882_98585 = state_95707__$1;
(statearr_95882_98585[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95708 === (8))){
var inst_95576 = (state_95707[(17)]);
var inst_95575 = (state_95707[(16)]);
var inst_95578 = (inst_95576 < inst_95575);
var inst_95579 = inst_95578;
var state_95707__$1 = state_95707;
if(cljs.core.truth_(inst_95579)){
var statearr_95883_98588 = state_95707__$1;
(statearr_95883_98588[(1)] = (10));

} else {
var statearr_95884_98589 = state_95707__$1;
(statearr_95884_98589[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__37732__auto__ = null;
var cljs$core$async$mult_$_state_machine__37732__auto____0 = (function (){
var statearr_95885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_95885[(0)] = cljs$core$async$mult_$_state_machine__37732__auto__);

(statearr_95885[(1)] = (1));

return statearr_95885;
});
var cljs$core$async$mult_$_state_machine__37732__auto____1 = (function (state_95707){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_95707);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e95887){var ex__37735__auto__ = e95887;
var statearr_95888_98592 = state_95707;
(statearr_95888_98592[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_95707[(4)]))){
var statearr_95889_98594 = state_95707;
(statearr_95889_98594[(1)] = cljs.core.first((state_95707[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98597 = state_95707;
state_95707 = G__98597;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37732__auto__ = function(state_95707){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37732__auto____1.call(this,state_95707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37732__auto____0;
cljs$core$async$mult_$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37732__auto____1;
return cljs$core$async$mult_$_state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_95890 = f__37806__auto__();
(statearr_95890[(6)] = c__37805__auto___98477);

return statearr_95890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
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
var G__95895 = arguments.length;
switch (G__95895) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var cljs$core$async$Mix$admix_STAR_$dyn_98599 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_98599(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_98602 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_98602(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_98605 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_98605(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_98608 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_98608(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_98611 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_98611(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___98614 = arguments.length;
var i__5750__auto___98615 = (0);
while(true){
if((i__5750__auto___98615 < len__5749__auto___98614)){
args__5755__auto__.push((arguments[i__5750__auto___98615]));

var G__98616 = (i__5750__auto___98615 + (1));
i__5750__auto___98615 = G__98616;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__95963){
var map__95964 = p__95963;
var map__95964__$1 = cljs.core.__destructure_map(map__95964);
var opts = map__95964__$1;
var statearr_95965_98617 = state;
(statearr_95965_98617[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_95966_98618 = state;
(statearr_95966_98618[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_95970_98620 = state;
(statearr_95970_98620[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq95955){
var G__95956 = cljs.core.first(seq95955);
var seq95955__$1 = cljs.core.next(seq95955);
var G__95957 = cljs.core.first(seq95955__$1);
var seq95955__$2 = cljs.core.next(seq95955__$1);
var G__95958 = cljs.core.first(seq95955__$2);
var seq95955__$3 = cljs.core.next(seq95955__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95956,G__95957,G__95958,seq95955__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async96002 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta96003){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta96003 = meta96003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96004,meta96003__$1){
var self__ = this;
var _96004__$1 = this;
return (new cljs.core.async.t_cljs$core$async96002(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta96003__$1));
}));

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96004){
var self__ = this;
var _96004__$1 = this;
return self__.meta96003;
}));

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async96002.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async96002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta96003","meta96003",1405876521,null)], null);
}));

(cljs.core.async.t_cljs$core$async96002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async96002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async96002");

(cljs.core.async.t_cljs$core$async96002.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async96002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async96002.
 */
cljs.core.async.__GT_t_cljs$core$async96002 = (function cljs$core$async$__GT_t_cljs$core$async96002(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta96003){
return (new cljs.core.async.t_cljs$core$async96002(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta96003));
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
var m = (new cljs.core.async.t_cljs$core$async96002(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__37805__auto___98630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_96110){
var state_val_96111 = (state_96110[(1)]);
if((state_val_96111 === (7))){
var inst_96069 = (state_96110[(2)]);
var state_96110__$1 = state_96110;
if(cljs.core.truth_(inst_96069)){
var statearr_96114_98631 = state_96110__$1;
(statearr_96114_98631[(1)] = (8));

} else {
var statearr_96115_98632 = state_96110__$1;
(statearr_96115_98632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (20))){
var inst_96056 = (state_96110[(7)]);
var state_96110__$1 = state_96110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96110__$1,(23),out,inst_96056);
} else {
if((state_val_96111 === (1))){
var inst_96038 = calc_state();
var inst_96039 = cljs.core.__destructure_map(inst_96038);
var inst_96040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_96039,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_96041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_96039,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_96042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_96039,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_96043 = inst_96038;
var state_96110__$1 = (function (){var statearr_96121 = state_96110;
(statearr_96121[(8)] = inst_96040);

(statearr_96121[(9)] = inst_96041);

(statearr_96121[(10)] = inst_96042);

(statearr_96121[(11)] = inst_96043);

return statearr_96121;
})();
var statearr_96122_98637 = state_96110__$1;
(statearr_96122_98637[(2)] = null);

(statearr_96122_98637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (24))){
var inst_96046 = (state_96110[(12)]);
var inst_96043 = inst_96046;
var state_96110__$1 = (function (){var statearr_96126 = state_96110;
(statearr_96126[(11)] = inst_96043);

return statearr_96126;
})();
var statearr_96127_98638 = state_96110__$1;
(statearr_96127_98638[(2)] = null);

(statearr_96127_98638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (4))){
var inst_96056 = (state_96110[(7)]);
var inst_96063 = (state_96110[(13)]);
var inst_96054 = (state_96110[(2)]);
var inst_96056__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_96054,(0),null);
var inst_96057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_96054,(1),null);
var inst_96063__$1 = (inst_96056__$1 == null);
var state_96110__$1 = (function (){var statearr_96132 = state_96110;
(statearr_96132[(7)] = inst_96056__$1);

(statearr_96132[(14)] = inst_96057);

(statearr_96132[(13)] = inst_96063__$1);

return statearr_96132;
})();
if(cljs.core.truth_(inst_96063__$1)){
var statearr_96135_98640 = state_96110__$1;
(statearr_96135_98640[(1)] = (5));

} else {
var statearr_96137_98641 = state_96110__$1;
(statearr_96137_98641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (15))){
var inst_96047 = (state_96110[(15)]);
var inst_96084 = (state_96110[(16)]);
var inst_96084__$1 = cljs.core.empty_QMARK_(inst_96047);
var state_96110__$1 = (function (){var statearr_96138 = state_96110;
(statearr_96138[(16)] = inst_96084__$1);

return statearr_96138;
})();
if(inst_96084__$1){
var statearr_96143_98642 = state_96110__$1;
(statearr_96143_98642[(1)] = (17));

} else {
var statearr_96145_98643 = state_96110__$1;
(statearr_96145_98643[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (21))){
var inst_96046 = (state_96110[(12)]);
var inst_96043 = inst_96046;
var state_96110__$1 = (function (){var statearr_96158 = state_96110;
(statearr_96158[(11)] = inst_96043);

return statearr_96158;
})();
var statearr_96161_98644 = state_96110__$1;
(statearr_96161_98644[(2)] = null);

(statearr_96161_98644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (13))){
var inst_96076 = (state_96110[(2)]);
var inst_96078 = calc_state();
var inst_96043 = inst_96078;
var state_96110__$1 = (function (){var statearr_96170 = state_96110;
(statearr_96170[(17)] = inst_96076);

(statearr_96170[(11)] = inst_96043);

return statearr_96170;
})();
var statearr_96171_98645 = state_96110__$1;
(statearr_96171_98645[(2)] = null);

(statearr_96171_98645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (22))){
var inst_96104 = (state_96110[(2)]);
var state_96110__$1 = state_96110;
var statearr_96180_98646 = state_96110__$1;
(statearr_96180_98646[(2)] = inst_96104);

(statearr_96180_98646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (6))){
var inst_96057 = (state_96110[(14)]);
var inst_96067 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_96057,change);
var state_96110__$1 = state_96110;
var statearr_96185_98647 = state_96110__$1;
(statearr_96185_98647[(2)] = inst_96067);

(statearr_96185_98647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (25))){
var state_96110__$1 = state_96110;
var statearr_96186_98649 = state_96110__$1;
(statearr_96186_98649[(2)] = null);

(statearr_96186_98649[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (17))){
var inst_96048 = (state_96110[(18)]);
var inst_96057 = (state_96110[(14)]);
var inst_96086 = (inst_96048.cljs$core$IFn$_invoke$arity$1 ? inst_96048.cljs$core$IFn$_invoke$arity$1(inst_96057) : inst_96048.call(null,inst_96057));
var inst_96087 = cljs.core.not(inst_96086);
var state_96110__$1 = state_96110;
var statearr_96188_98652 = state_96110__$1;
(statearr_96188_98652[(2)] = inst_96087);

(statearr_96188_98652[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (3))){
var inst_96108 = (state_96110[(2)]);
var state_96110__$1 = state_96110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96110__$1,inst_96108);
} else {
if((state_val_96111 === (12))){
var state_96110__$1 = state_96110;
var statearr_96192_98653 = state_96110__$1;
(statearr_96192_98653[(2)] = null);

(statearr_96192_98653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (2))){
var inst_96043 = (state_96110[(11)]);
var inst_96046 = (state_96110[(12)]);
var inst_96046__$1 = cljs.core.__destructure_map(inst_96043);
var inst_96047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_96046__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_96048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_96046__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_96049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_96046__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_96110__$1 = (function (){var statearr_96196 = state_96110;
(statearr_96196[(12)] = inst_96046__$1);

(statearr_96196[(15)] = inst_96047);

(statearr_96196[(18)] = inst_96048);

return statearr_96196;
})();
return cljs.core.async.ioc_alts_BANG_(state_96110__$1,(4),inst_96049);
} else {
if((state_val_96111 === (23))){
var inst_96095 = (state_96110[(2)]);
var state_96110__$1 = state_96110;
if(cljs.core.truth_(inst_96095)){
var statearr_96198_98655 = state_96110__$1;
(statearr_96198_98655[(1)] = (24));

} else {
var statearr_96199_98656 = state_96110__$1;
(statearr_96199_98656[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (19))){
var inst_96090 = (state_96110[(2)]);
var state_96110__$1 = state_96110;
var statearr_96204_98657 = state_96110__$1;
(statearr_96204_98657[(2)] = inst_96090);

(statearr_96204_98657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (11))){
var inst_96057 = (state_96110[(14)]);
var inst_96073 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_96057);
var state_96110__$1 = state_96110;
var statearr_96226_98658 = state_96110__$1;
(statearr_96226_98658[(2)] = inst_96073);

(statearr_96226_98658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (9))){
var inst_96047 = (state_96110[(15)]);
var inst_96057 = (state_96110[(14)]);
var inst_96081 = (state_96110[(19)]);
var inst_96081__$1 = (inst_96047.cljs$core$IFn$_invoke$arity$1 ? inst_96047.cljs$core$IFn$_invoke$arity$1(inst_96057) : inst_96047.call(null,inst_96057));
var state_96110__$1 = (function (){var statearr_96230 = state_96110;
(statearr_96230[(19)] = inst_96081__$1);

return statearr_96230;
})();
if(cljs.core.truth_(inst_96081__$1)){
var statearr_96234_98659 = state_96110__$1;
(statearr_96234_98659[(1)] = (14));

} else {
var statearr_96235_98661 = state_96110__$1;
(statearr_96235_98661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (5))){
var inst_96063 = (state_96110[(13)]);
var state_96110__$1 = state_96110;
var statearr_96240_98662 = state_96110__$1;
(statearr_96240_98662[(2)] = inst_96063);

(statearr_96240_98662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (14))){
var inst_96081 = (state_96110[(19)]);
var state_96110__$1 = state_96110;
var statearr_96249_98666 = state_96110__$1;
(statearr_96249_98666[(2)] = inst_96081);

(statearr_96249_98666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (26))){
var inst_96100 = (state_96110[(2)]);
var state_96110__$1 = state_96110;
var statearr_96260_98667 = state_96110__$1;
(statearr_96260_98667[(2)] = inst_96100);

(statearr_96260_98667[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (16))){
var inst_96092 = (state_96110[(2)]);
var state_96110__$1 = state_96110;
if(cljs.core.truth_(inst_96092)){
var statearr_96279_98668 = state_96110__$1;
(statearr_96279_98668[(1)] = (20));

} else {
var statearr_96284_98669 = state_96110__$1;
(statearr_96284_98669[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (10))){
var inst_96106 = (state_96110[(2)]);
var state_96110__$1 = state_96110;
var statearr_96285_98671 = state_96110__$1;
(statearr_96285_98671[(2)] = inst_96106);

(statearr_96285_98671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (18))){
var inst_96084 = (state_96110[(16)]);
var state_96110__$1 = state_96110;
var statearr_96286_98673 = state_96110__$1;
(statearr_96286_98673[(2)] = inst_96084);

(statearr_96286_98673[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96111 === (8))){
var inst_96056 = (state_96110[(7)]);
var inst_96071 = (inst_96056 == null);
var state_96110__$1 = state_96110;
if(cljs.core.truth_(inst_96071)){
var statearr_96287_98674 = state_96110__$1;
(statearr_96287_98674[(1)] = (11));

} else {
var statearr_96292_98675 = state_96110__$1;
(statearr_96292_98675[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__37732__auto__ = null;
var cljs$core$async$mix_$_state_machine__37732__auto____0 = (function (){
var statearr_96301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_96301[(0)] = cljs$core$async$mix_$_state_machine__37732__auto__);

(statearr_96301[(1)] = (1));

return statearr_96301;
});
var cljs$core$async$mix_$_state_machine__37732__auto____1 = (function (state_96110){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_96110);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e96305){var ex__37735__auto__ = e96305;
var statearr_96307_98676 = state_96110;
(statearr_96307_98676[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_96110[(4)]))){
var statearr_96308_98677 = state_96110;
(statearr_96308_98677[(1)] = cljs.core.first((state_96110[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98678 = state_96110;
state_96110 = G__98678;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37732__auto__ = function(state_96110){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37732__auto____1.call(this,state_96110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37732__auto____0;
cljs$core$async$mix_$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37732__auto____1;
return cljs$core$async$mix_$_state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_96311 = f__37806__auto__();
(statearr_96311[(6)] = c__37805__auto___98630);

return statearr_96311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_98679 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_98679(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_98680 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_98680(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_98681 = (function() {
var G__98682 = null;
var G__98682__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__98682__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__98682 = function(p,v){
switch(arguments.length){
case 1:
return G__98682__1.call(this,p);
case 2:
return G__98682__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__98682.cljs$core$IFn$_invoke$arity$1 = G__98682__1;
G__98682.cljs$core$IFn$_invoke$arity$2 = G__98682__2;
return G__98682;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__96375 = arguments.length;
switch (G__96375) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_98681(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_98681(p,v);
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
cljs.core.async.t_cljs$core$async96389 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta96390){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta96390 = meta96390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96391,meta96390__$1){
var self__ = this;
var _96391__$1 = this;
return (new cljs.core.async.t_cljs$core$async96389(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta96390__$1));
}));

(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96391){
var self__ = this;
var _96391__$1 = this;
return self__.meta96390;
}));

(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async96389.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async96389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta96390","meta96390",-1934922560,null)], null);
}));

(cljs.core.async.t_cljs$core$async96389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async96389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async96389");

(cljs.core.async.t_cljs$core$async96389.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async96389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async96389.
 */
cljs.core.async.__GT_t_cljs$core$async96389 = (function cljs$core$async$__GT_t_cljs$core$async96389(ch,topic_fn,buf_fn,mults,ensure_mult,meta96390){
return (new cljs.core.async.t_cljs$core$async96389(ch,topic_fn,buf_fn,mults,ensure_mult,meta96390));
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
var G__96386 = arguments.length;
switch (G__96386) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__96384_SHARP_){
if(cljs.core.truth_((p1__96384_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__96384_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__96384_SHARP_.call(null,topic)))){
return p1__96384_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__96384_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async96389(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__37805__auto___98686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_96469){
var state_val_96470 = (state_96469[(1)]);
if((state_val_96470 === (7))){
var inst_96465 = (state_96469[(2)]);
var state_96469__$1 = state_96469;
var statearr_96472_98690 = state_96469__$1;
(statearr_96472_98690[(2)] = inst_96465);

(statearr_96472_98690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (20))){
var state_96469__$1 = state_96469;
var statearr_96474_98691 = state_96469__$1;
(statearr_96474_98691[(2)] = null);

(statearr_96474_98691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (1))){
var state_96469__$1 = state_96469;
var statearr_96476_98695 = state_96469__$1;
(statearr_96476_98695[(2)] = null);

(statearr_96476_98695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (24))){
var inst_96448 = (state_96469[(7)]);
var inst_96457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_96448);
var state_96469__$1 = state_96469;
var statearr_96481_98696 = state_96469__$1;
(statearr_96481_98696[(2)] = inst_96457);

(statearr_96481_98696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (4))){
var inst_96399 = (state_96469[(8)]);
var inst_96399__$1 = (state_96469[(2)]);
var inst_96400 = (inst_96399__$1 == null);
var state_96469__$1 = (function (){var statearr_96484 = state_96469;
(statearr_96484[(8)] = inst_96399__$1);

return statearr_96484;
})();
if(cljs.core.truth_(inst_96400)){
var statearr_96485_98701 = state_96469__$1;
(statearr_96485_98701[(1)] = (5));

} else {
var statearr_96486_98702 = state_96469__$1;
(statearr_96486_98702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (15))){
var inst_96442 = (state_96469[(2)]);
var state_96469__$1 = state_96469;
var statearr_96487_98703 = state_96469__$1;
(statearr_96487_98703[(2)] = inst_96442);

(statearr_96487_98703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (21))){
var inst_96462 = (state_96469[(2)]);
var state_96469__$1 = (function (){var statearr_96490 = state_96469;
(statearr_96490[(9)] = inst_96462);

return statearr_96490;
})();
var statearr_96491_98707 = state_96469__$1;
(statearr_96491_98707[(2)] = null);

(statearr_96491_98707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (13))){
var inst_96424 = (state_96469[(10)]);
var inst_96426 = cljs.core.chunked_seq_QMARK_(inst_96424);
var state_96469__$1 = state_96469;
if(inst_96426){
var statearr_96492_98708 = state_96469__$1;
(statearr_96492_98708[(1)] = (16));

} else {
var statearr_96493_98709 = state_96469__$1;
(statearr_96493_98709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (22))){
var inst_96454 = (state_96469[(2)]);
var state_96469__$1 = state_96469;
if(cljs.core.truth_(inst_96454)){
var statearr_96495_98710 = state_96469__$1;
(statearr_96495_98710[(1)] = (23));

} else {
var statearr_96496_98711 = state_96469__$1;
(statearr_96496_98711[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (6))){
var inst_96399 = (state_96469[(8)]);
var inst_96448 = (state_96469[(7)]);
var inst_96450 = (state_96469[(11)]);
var inst_96448__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_96399) : topic_fn.call(null,inst_96399));
var inst_96449 = cljs.core.deref(mults);
var inst_96450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_96449,inst_96448__$1);
var state_96469__$1 = (function (){var statearr_96499 = state_96469;
(statearr_96499[(7)] = inst_96448__$1);

(statearr_96499[(11)] = inst_96450__$1);

return statearr_96499;
})();
if(cljs.core.truth_(inst_96450__$1)){
var statearr_96503_98712 = state_96469__$1;
(statearr_96503_98712[(1)] = (19));

} else {
var statearr_96504_98713 = state_96469__$1;
(statearr_96504_98713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (25))){
var inst_96459 = (state_96469[(2)]);
var state_96469__$1 = state_96469;
var statearr_96510_98714 = state_96469__$1;
(statearr_96510_98714[(2)] = inst_96459);

(statearr_96510_98714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (17))){
var inst_96424 = (state_96469[(10)]);
var inst_96433 = cljs.core.first(inst_96424);
var inst_96434 = cljs.core.async.muxch_STAR_(inst_96433);
var inst_96435 = cljs.core.async.close_BANG_(inst_96434);
var inst_96436 = cljs.core.next(inst_96424);
var inst_96409 = inst_96436;
var inst_96410 = null;
var inst_96411 = (0);
var inst_96412 = (0);
var state_96469__$1 = (function (){var statearr_96511 = state_96469;
(statearr_96511[(12)] = inst_96435);

(statearr_96511[(13)] = inst_96409);

(statearr_96511[(14)] = inst_96410);

(statearr_96511[(15)] = inst_96411);

(statearr_96511[(16)] = inst_96412);

return statearr_96511;
})();
var statearr_96515_98720 = state_96469__$1;
(statearr_96515_98720[(2)] = null);

(statearr_96515_98720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (3))){
var inst_96467 = (state_96469[(2)]);
var state_96469__$1 = state_96469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96469__$1,inst_96467);
} else {
if((state_val_96470 === (12))){
var inst_96444 = (state_96469[(2)]);
var state_96469__$1 = state_96469;
var statearr_96521_98721 = state_96469__$1;
(statearr_96521_98721[(2)] = inst_96444);

(statearr_96521_98721[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (2))){
var state_96469__$1 = state_96469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96469__$1,(4),ch);
} else {
if((state_val_96470 === (23))){
var state_96469__$1 = state_96469;
var statearr_96525_98723 = state_96469__$1;
(statearr_96525_98723[(2)] = null);

(statearr_96525_98723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (19))){
var inst_96450 = (state_96469[(11)]);
var inst_96399 = (state_96469[(8)]);
var inst_96452 = cljs.core.async.muxch_STAR_(inst_96450);
var state_96469__$1 = state_96469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96469__$1,(22),inst_96452,inst_96399);
} else {
if((state_val_96470 === (11))){
var inst_96409 = (state_96469[(13)]);
var inst_96424 = (state_96469[(10)]);
var inst_96424__$1 = cljs.core.seq(inst_96409);
var state_96469__$1 = (function (){var statearr_96531 = state_96469;
(statearr_96531[(10)] = inst_96424__$1);

return statearr_96531;
})();
if(inst_96424__$1){
var statearr_96533_98727 = state_96469__$1;
(statearr_96533_98727[(1)] = (13));

} else {
var statearr_96535_98728 = state_96469__$1;
(statearr_96535_98728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (9))){
var inst_96446 = (state_96469[(2)]);
var state_96469__$1 = state_96469;
var statearr_96537_98730 = state_96469__$1;
(statearr_96537_98730[(2)] = inst_96446);

(statearr_96537_98730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (5))){
var inst_96406 = cljs.core.deref(mults);
var inst_96407 = cljs.core.vals(inst_96406);
var inst_96408 = cljs.core.seq(inst_96407);
var inst_96409 = inst_96408;
var inst_96410 = null;
var inst_96411 = (0);
var inst_96412 = (0);
var state_96469__$1 = (function (){var statearr_96539 = state_96469;
(statearr_96539[(13)] = inst_96409);

(statearr_96539[(14)] = inst_96410);

(statearr_96539[(15)] = inst_96411);

(statearr_96539[(16)] = inst_96412);

return statearr_96539;
})();
var statearr_96542_98734 = state_96469__$1;
(statearr_96542_98734[(2)] = null);

(statearr_96542_98734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (14))){
var state_96469__$1 = state_96469;
var statearr_96547_98735 = state_96469__$1;
(statearr_96547_98735[(2)] = null);

(statearr_96547_98735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (16))){
var inst_96424 = (state_96469[(10)]);
var inst_96428 = cljs.core.chunk_first(inst_96424);
var inst_96429 = cljs.core.chunk_rest(inst_96424);
var inst_96430 = cljs.core.count(inst_96428);
var inst_96409 = inst_96429;
var inst_96410 = inst_96428;
var inst_96411 = inst_96430;
var inst_96412 = (0);
var state_96469__$1 = (function (){var statearr_96550 = state_96469;
(statearr_96550[(13)] = inst_96409);

(statearr_96550[(14)] = inst_96410);

(statearr_96550[(15)] = inst_96411);

(statearr_96550[(16)] = inst_96412);

return statearr_96550;
})();
var statearr_96554_98738 = state_96469__$1;
(statearr_96554_98738[(2)] = null);

(statearr_96554_98738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (10))){
var inst_96410 = (state_96469[(14)]);
var inst_96412 = (state_96469[(16)]);
var inst_96409 = (state_96469[(13)]);
var inst_96411 = (state_96469[(15)]);
var inst_96418 = cljs.core._nth(inst_96410,inst_96412);
var inst_96419 = cljs.core.async.muxch_STAR_(inst_96418);
var inst_96420 = cljs.core.async.close_BANG_(inst_96419);
var inst_96421 = (inst_96412 + (1));
var tmp96544 = inst_96409;
var tmp96545 = inst_96410;
var tmp96546 = inst_96411;
var inst_96409__$1 = tmp96544;
var inst_96410__$1 = tmp96545;
var inst_96411__$1 = tmp96546;
var inst_96412__$1 = inst_96421;
var state_96469__$1 = (function (){var statearr_96557 = state_96469;
(statearr_96557[(17)] = inst_96420);

(statearr_96557[(13)] = inst_96409__$1);

(statearr_96557[(14)] = inst_96410__$1);

(statearr_96557[(15)] = inst_96411__$1);

(statearr_96557[(16)] = inst_96412__$1);

return statearr_96557;
})();
var statearr_96561_98743 = state_96469__$1;
(statearr_96561_98743[(2)] = null);

(statearr_96561_98743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (18))){
var inst_96439 = (state_96469[(2)]);
var state_96469__$1 = state_96469;
var statearr_96563_98744 = state_96469__$1;
(statearr_96563_98744[(2)] = inst_96439);

(statearr_96563_98744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96470 === (8))){
var inst_96412 = (state_96469[(16)]);
var inst_96411 = (state_96469[(15)]);
var inst_96415 = (inst_96412 < inst_96411);
var inst_96416 = inst_96415;
var state_96469__$1 = state_96469;
if(cljs.core.truth_(inst_96416)){
var statearr_96565_98748 = state_96469__$1;
(statearr_96565_98748[(1)] = (10));

} else {
var statearr_96566_98750 = state_96469__$1;
(statearr_96566_98750[(1)] = (11));

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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_96574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_96574[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_96574[(1)] = (1));

return statearr_96574;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_96469){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_96469);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e96575){var ex__37735__auto__ = e96575;
var statearr_96576_98752 = state_96469;
(statearr_96576_98752[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_96469[(4)]))){
var statearr_96577_98753 = state_96469;
(statearr_96577_98753[(1)] = cljs.core.first((state_96469[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98756 = state_96469;
state_96469 = G__98756;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_96469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_96469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_96587 = f__37806__auto__();
(statearr_96587[(6)] = c__37805__auto___98686);

return statearr_96587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
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
var G__96590 = arguments.length;
switch (G__96590) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__96607 = arguments.length;
switch (G__96607) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__96618 = arguments.length;
switch (G__96618) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__37805__auto___98771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_96684){
var state_val_96689 = (state_96684[(1)]);
if((state_val_96689 === (7))){
var state_96684__$1 = state_96684;
var statearr_96694_98775 = state_96684__$1;
(statearr_96694_98775[(2)] = null);

(statearr_96694_98775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (1))){
var state_96684__$1 = state_96684;
var statearr_96695_98776 = state_96684__$1;
(statearr_96695_98776[(2)] = null);

(statearr_96695_98776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (4))){
var inst_96636 = (state_96684[(7)]);
var inst_96635 = (state_96684[(8)]);
var inst_96639 = (inst_96636 < inst_96635);
var state_96684__$1 = state_96684;
if(cljs.core.truth_(inst_96639)){
var statearr_96699_98778 = state_96684__$1;
(statearr_96699_98778[(1)] = (6));

} else {
var statearr_96700_98779 = state_96684__$1;
(statearr_96700_98779[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (15))){
var inst_96665 = (state_96684[(9)]);
var inst_96670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_96665);
var state_96684__$1 = state_96684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96684__$1,(17),out,inst_96670);
} else {
if((state_val_96689 === (13))){
var inst_96665 = (state_96684[(9)]);
var inst_96665__$1 = (state_96684[(2)]);
var inst_96666 = cljs.core.some(cljs.core.nil_QMARK_,inst_96665__$1);
var state_96684__$1 = (function (){var statearr_96702 = state_96684;
(statearr_96702[(9)] = inst_96665__$1);

return statearr_96702;
})();
if(cljs.core.truth_(inst_96666)){
var statearr_96704_98783 = state_96684__$1;
(statearr_96704_98783[(1)] = (14));

} else {
var statearr_96705_98784 = state_96684__$1;
(statearr_96705_98784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (6))){
var state_96684__$1 = state_96684;
var statearr_96706_98785 = state_96684__$1;
(statearr_96706_98785[(2)] = null);

(statearr_96706_98785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (17))){
var inst_96673 = (state_96684[(2)]);
var state_96684__$1 = (function (){var statearr_96709 = state_96684;
(statearr_96709[(10)] = inst_96673);

return statearr_96709;
})();
var statearr_96710_98787 = state_96684__$1;
(statearr_96710_98787[(2)] = null);

(statearr_96710_98787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (3))){
var inst_96682 = (state_96684[(2)]);
var state_96684__$1 = state_96684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96684__$1,inst_96682);
} else {
if((state_val_96689 === (12))){
var _ = (function (){var statearr_96711 = state_96684;
(statearr_96711[(4)] = cljs.core.rest((state_96684[(4)])));

return statearr_96711;
})();
var state_96684__$1 = state_96684;
var ex96707 = (state_96684__$1[(2)]);
var statearr_96712_98791 = state_96684__$1;
(statearr_96712_98791[(5)] = ex96707);


if((ex96707 instanceof Object)){
var statearr_96713_98792 = state_96684__$1;
(statearr_96713_98792[(1)] = (11));

(statearr_96713_98792[(5)] = null);

} else {
throw ex96707;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (2))){
var inst_96632 = cljs.core.reset_BANG_(dctr,cnt);
var inst_96635 = cnt;
var inst_96636 = (0);
var state_96684__$1 = (function (){var statearr_96714 = state_96684;
(statearr_96714[(11)] = inst_96632);

(statearr_96714[(8)] = inst_96635);

(statearr_96714[(7)] = inst_96636);

return statearr_96714;
})();
var statearr_96716_98794 = state_96684__$1;
(statearr_96716_98794[(2)] = null);

(statearr_96716_98794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (11))){
var inst_96641 = (state_96684[(2)]);
var inst_96642 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_96684__$1 = (function (){var statearr_96725 = state_96684;
(statearr_96725[(12)] = inst_96641);

return statearr_96725;
})();
var statearr_96730_98797 = state_96684__$1;
(statearr_96730_98797[(2)] = inst_96642);

(statearr_96730_98797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (9))){
var inst_96636 = (state_96684[(7)]);
var _ = (function (){var statearr_96732 = state_96684;
(statearr_96732[(4)] = cljs.core.cons((12),(state_96684[(4)])));

return statearr_96732;
})();
var inst_96650 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_96636) : chs__$1.call(null,inst_96636));
var inst_96651 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_96636) : done.call(null,inst_96636));
var inst_96653 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_96650,inst_96651);
var ___$1 = (function (){var statearr_96733 = state_96684;
(statearr_96733[(4)] = cljs.core.rest((state_96684[(4)])));

return statearr_96733;
})();
var state_96684__$1 = state_96684;
var statearr_96735_98800 = state_96684__$1;
(statearr_96735_98800[(2)] = inst_96653);

(statearr_96735_98800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (5))){
var inst_96663 = (state_96684[(2)]);
var state_96684__$1 = (function (){var statearr_96736 = state_96684;
(statearr_96736[(13)] = inst_96663);

return statearr_96736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96684__$1,(13),dchan);
} else {
if((state_val_96689 === (14))){
var inst_96668 = cljs.core.async.close_BANG_(out);
var state_96684__$1 = state_96684;
var statearr_96740_98804 = state_96684__$1;
(statearr_96740_98804[(2)] = inst_96668);

(statearr_96740_98804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (16))){
var inst_96680 = (state_96684[(2)]);
var state_96684__$1 = state_96684;
var statearr_96744_98805 = state_96684__$1;
(statearr_96744_98805[(2)] = inst_96680);

(statearr_96744_98805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (10))){
var inst_96636 = (state_96684[(7)]);
var inst_96656 = (state_96684[(2)]);
var inst_96657 = (inst_96636 + (1));
var inst_96636__$1 = inst_96657;
var state_96684__$1 = (function (){var statearr_96745 = state_96684;
(statearr_96745[(14)] = inst_96656);

(statearr_96745[(7)] = inst_96636__$1);

return statearr_96745;
})();
var statearr_96748_98807 = state_96684__$1;
(statearr_96748_98807[(2)] = null);

(statearr_96748_98807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96689 === (8))){
var inst_96661 = (state_96684[(2)]);
var state_96684__$1 = state_96684;
var statearr_96751_98808 = state_96684__$1;
(statearr_96751_98808[(2)] = inst_96661);

(statearr_96751_98808[(1)] = (5));


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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_96757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_96757[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_96757[(1)] = (1));

return statearr_96757;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_96684){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_96684);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e96761){var ex__37735__auto__ = e96761;
var statearr_96766_98812 = state_96684;
(statearr_96766_98812[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_96684[(4)]))){
var statearr_96769_98814 = state_96684;
(statearr_96769_98814[(1)] = cljs.core.first((state_96684[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98815 = state_96684;
state_96684 = G__98815;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_96684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_96684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_96773 = f__37806__auto__();
(statearr_96773[(6)] = c__37805__auto___98771);

return statearr_96773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
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
var G__96781 = arguments.length;
switch (G__96781) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37805__auto___98821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_96818){
var state_val_96820 = (state_96818[(1)]);
if((state_val_96820 === (7))){
var inst_96796 = (state_96818[(7)]);
var inst_96797 = (state_96818[(8)]);
var inst_96796__$1 = (state_96818[(2)]);
var inst_96797__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_96796__$1,(0),null);
var inst_96799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_96796__$1,(1),null);
var inst_96800 = (inst_96797__$1 == null);
var state_96818__$1 = (function (){var statearr_96827 = state_96818;
(statearr_96827[(7)] = inst_96796__$1);

(statearr_96827[(8)] = inst_96797__$1);

(statearr_96827[(9)] = inst_96799);

return statearr_96827;
})();
if(cljs.core.truth_(inst_96800)){
var statearr_96829_98825 = state_96818__$1;
(statearr_96829_98825[(1)] = (8));

} else {
var statearr_96833_98826 = state_96818__$1;
(statearr_96833_98826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96820 === (1))){
var inst_96786 = cljs.core.vec(chs);
var inst_96787 = inst_96786;
var state_96818__$1 = (function (){var statearr_96840 = state_96818;
(statearr_96840[(10)] = inst_96787);

return statearr_96840;
})();
var statearr_96842_98828 = state_96818__$1;
(statearr_96842_98828[(2)] = null);

(statearr_96842_98828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96820 === (4))){
var inst_96787 = (state_96818[(10)]);
var state_96818__$1 = state_96818;
return cljs.core.async.ioc_alts_BANG_(state_96818__$1,(7),inst_96787);
} else {
if((state_val_96820 === (6))){
var inst_96814 = (state_96818[(2)]);
var state_96818__$1 = state_96818;
var statearr_96849_98835 = state_96818__$1;
(statearr_96849_98835[(2)] = inst_96814);

(statearr_96849_98835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96820 === (3))){
var inst_96816 = (state_96818[(2)]);
var state_96818__$1 = state_96818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96818__$1,inst_96816);
} else {
if((state_val_96820 === (2))){
var inst_96787 = (state_96818[(10)]);
var inst_96789 = cljs.core.count(inst_96787);
var inst_96790 = (inst_96789 > (0));
var state_96818__$1 = state_96818;
if(cljs.core.truth_(inst_96790)){
var statearr_96853_98838 = state_96818__$1;
(statearr_96853_98838[(1)] = (4));

} else {
var statearr_96854_98839 = state_96818__$1;
(statearr_96854_98839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96820 === (11))){
var inst_96787 = (state_96818[(10)]);
var inst_96807 = (state_96818[(2)]);
var tmp96851 = inst_96787;
var inst_96787__$1 = tmp96851;
var state_96818__$1 = (function (){var statearr_96861 = state_96818;
(statearr_96861[(11)] = inst_96807);

(statearr_96861[(10)] = inst_96787__$1);

return statearr_96861;
})();
var statearr_96862_98844 = state_96818__$1;
(statearr_96862_98844[(2)] = null);

(statearr_96862_98844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96820 === (9))){
var inst_96797 = (state_96818[(8)]);
var state_96818__$1 = state_96818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96818__$1,(11),out,inst_96797);
} else {
if((state_val_96820 === (5))){
var inst_96812 = cljs.core.async.close_BANG_(out);
var state_96818__$1 = state_96818;
var statearr_96871_98848 = state_96818__$1;
(statearr_96871_98848[(2)] = inst_96812);

(statearr_96871_98848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96820 === (10))){
var inst_96810 = (state_96818[(2)]);
var state_96818__$1 = state_96818;
var statearr_96874_98849 = state_96818__$1;
(statearr_96874_98849[(2)] = inst_96810);

(statearr_96874_98849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96820 === (8))){
var inst_96787 = (state_96818[(10)]);
var inst_96796 = (state_96818[(7)]);
var inst_96797 = (state_96818[(8)]);
var inst_96799 = (state_96818[(9)]);
var inst_96802 = (function (){var cs = inst_96787;
var vec__96792 = inst_96796;
var v = inst_96797;
var c = inst_96799;
return (function (p1__96775_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__96775_SHARP_);
});
})();
var inst_96803 = cljs.core.filterv(inst_96802,inst_96787);
var inst_96787__$1 = inst_96803;
var state_96818__$1 = (function (){var statearr_96881 = state_96818;
(statearr_96881[(10)] = inst_96787__$1);

return statearr_96881;
})();
var statearr_96882_98858 = state_96818__$1;
(statearr_96882_98858[(2)] = null);

(statearr_96882_98858[(1)] = (2));


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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_96884 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_96884[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_96884[(1)] = (1));

return statearr_96884;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_96818){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_96818);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e96885){var ex__37735__auto__ = e96885;
var statearr_96886_98863 = state_96818;
(statearr_96886_98863[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_96818[(4)]))){
var statearr_96887_98864 = state_96818;
(statearr_96887_98864[(1)] = cljs.core.first((state_96818[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98865 = state_96818;
state_96818 = G__98865;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_96818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_96818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_96890 = f__37806__auto__();
(statearr_96890[(6)] = c__37805__auto___98821);

return statearr_96890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
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
var G__96898 = arguments.length;
switch (G__96898) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37805__auto___98872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_96929){
var state_val_96930 = (state_96929[(1)]);
if((state_val_96930 === (7))){
var inst_96906 = (state_96929[(7)]);
var inst_96906__$1 = (state_96929[(2)]);
var inst_96907 = (inst_96906__$1 == null);
var inst_96908 = cljs.core.not(inst_96907);
var state_96929__$1 = (function (){var statearr_96931 = state_96929;
(statearr_96931[(7)] = inst_96906__$1);

return statearr_96931;
})();
if(inst_96908){
var statearr_96932_98876 = state_96929__$1;
(statearr_96932_98876[(1)] = (8));

} else {
var statearr_96933_98877 = state_96929__$1;
(statearr_96933_98877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96930 === (1))){
var inst_96901 = (0);
var state_96929__$1 = (function (){var statearr_96934 = state_96929;
(statearr_96934[(8)] = inst_96901);

return statearr_96934;
})();
var statearr_96935_98879 = state_96929__$1;
(statearr_96935_98879[(2)] = null);

(statearr_96935_98879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96930 === (4))){
var state_96929__$1 = state_96929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96929__$1,(7),ch);
} else {
if((state_val_96930 === (6))){
var inst_96919 = (state_96929[(2)]);
var state_96929__$1 = state_96929;
var statearr_96938_98881 = state_96929__$1;
(statearr_96938_98881[(2)] = inst_96919);

(statearr_96938_98881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96930 === (3))){
var inst_96921 = (state_96929[(2)]);
var inst_96922 = cljs.core.async.close_BANG_(out);
var state_96929__$1 = (function (){var statearr_96943 = state_96929;
(statearr_96943[(9)] = inst_96921);

return statearr_96943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_96929__$1,inst_96922);
} else {
if((state_val_96930 === (2))){
var inst_96901 = (state_96929[(8)]);
var inst_96903 = (inst_96901 < n);
var state_96929__$1 = state_96929;
if(cljs.core.truth_(inst_96903)){
var statearr_96944_98885 = state_96929__$1;
(statearr_96944_98885[(1)] = (4));

} else {
var statearr_96945_98886 = state_96929__$1;
(statearr_96945_98886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96930 === (11))){
var inst_96901 = (state_96929[(8)]);
var inst_96911 = (state_96929[(2)]);
var inst_96912 = (inst_96901 + (1));
var inst_96901__$1 = inst_96912;
var state_96929__$1 = (function (){var statearr_96951 = state_96929;
(statearr_96951[(10)] = inst_96911);

(statearr_96951[(8)] = inst_96901__$1);

return statearr_96951;
})();
var statearr_96954_98888 = state_96929__$1;
(statearr_96954_98888[(2)] = null);

(statearr_96954_98888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96930 === (9))){
var state_96929__$1 = state_96929;
var statearr_96960_98889 = state_96929__$1;
(statearr_96960_98889[(2)] = null);

(statearr_96960_98889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96930 === (5))){
var state_96929__$1 = state_96929;
var statearr_96966_98894 = state_96929__$1;
(statearr_96966_98894[(2)] = null);

(statearr_96966_98894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96930 === (10))){
var inst_96916 = (state_96929[(2)]);
var state_96929__$1 = state_96929;
var statearr_96969_98898 = state_96929__$1;
(statearr_96969_98898[(2)] = inst_96916);

(statearr_96969_98898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96930 === (8))){
var inst_96906 = (state_96929[(7)]);
var state_96929__$1 = state_96929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96929__$1,(11),out,inst_96906);
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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_96978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_96978[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_96978[(1)] = (1));

return statearr_96978;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_96929){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_96929);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e96979){var ex__37735__auto__ = e96979;
var statearr_96980_98900 = state_96929;
(statearr_96980_98900[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_96929[(4)]))){
var statearr_96981_98902 = state_96929;
(statearr_96981_98902[(1)] = cljs.core.first((state_96929[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98905 = state_96929;
state_96929 = G__98905;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_96929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_96929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_96985 = f__37806__auto__();
(statearr_96985[(6)] = c__37805__auto___98872);

return statearr_96985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
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
cljs.core.async.t_cljs$core$async97020 = (function (f,ch,meta96991,_,fn1,meta97021){
this.f = f;
this.ch = ch;
this.meta96991 = meta96991;
this._ = _;
this.fn1 = fn1;
this.meta97021 = meta97021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async97020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97022,meta97021__$1){
var self__ = this;
var _97022__$1 = this;
return (new cljs.core.async.t_cljs$core$async97020(self__.f,self__.ch,self__.meta96991,self__._,self__.fn1,meta97021__$1));
}));

(cljs.core.async.t_cljs$core$async97020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97022){
var self__ = this;
var _97022__$1 = this;
return self__.meta97021;
}));

(cljs.core.async.t_cljs$core$async97020.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async97020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async97020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__96989_SHARP_){
var G__97041 = (((p1__96989_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__96989_SHARP_) : self__.f.call(null,p1__96989_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__97041) : f1.call(null,G__97041));
});
}));

(cljs.core.async.t_cljs$core$async97020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta96991","meta96991",2053827267,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async96990","cljs.core.async/t_cljs$core$async96990",-1385957924,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta97021","meta97021",-769913357,null)], null);
}));

(cljs.core.async.t_cljs$core$async97020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async97020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async97020");

(cljs.core.async.t_cljs$core$async97020.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async97020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async97020.
 */
cljs.core.async.__GT_t_cljs$core$async97020 = (function cljs$core$async$__GT_t_cljs$core$async97020(f,ch,meta96991,_,fn1,meta97021){
return (new cljs.core.async.t_cljs$core$async97020(f,ch,meta96991,_,fn1,meta97021));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async96990 = (function (f,ch,meta96991){
this.f = f;
this.ch = ch;
this.meta96991 = meta96991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96992,meta96991__$1){
var self__ = this;
var _96992__$1 = this;
return (new cljs.core.async.t_cljs$core$async96990(self__.f,self__.ch,meta96991__$1));
}));

(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96992){
var self__ = this;
var _96992__$1 = this;
return self__.meta96991;
}));

(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async97020(self__.f,self__.ch,self__.meta96991,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__97061 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__97061) : self__.f.call(null,G__97061));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async96990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta96991","meta96991",2053827267,null)], null);
}));

(cljs.core.async.t_cljs$core$async96990.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async96990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async96990");

(cljs.core.async.t_cljs$core$async96990.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async96990");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async96990.
 */
cljs.core.async.__GT_t_cljs$core$async96990 = (function cljs$core$async$__GT_t_cljs$core$async96990(f,ch,meta96991){
return (new cljs.core.async.t_cljs$core$async96990(f,ch,meta96991));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async96990(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async97092 = (function (f,ch,meta97094){
this.f = f;
this.ch = ch;
this.meta97094 = meta97094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async97092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97095,meta97094__$1){
var self__ = this;
var _97095__$1 = this;
return (new cljs.core.async.t_cljs$core$async97092(self__.f,self__.ch,meta97094__$1));
}));

(cljs.core.async.t_cljs$core$async97092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97095){
var self__ = this;
var _97095__$1 = this;
return self__.meta97094;
}));

(cljs.core.async.t_cljs$core$async97092.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async97092.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async97092.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async97092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta97094","meta97094",677879751,null)], null);
}));

(cljs.core.async.t_cljs$core$async97092.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async97092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async97092");

(cljs.core.async.t_cljs$core$async97092.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async97092");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async97092.
 */
cljs.core.async.__GT_t_cljs$core$async97092 = (function cljs$core$async$__GT_t_cljs$core$async97092(f,ch,meta97094){
return (new cljs.core.async.t_cljs$core$async97092(f,ch,meta97094));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async97092(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async97176 = (function (p,ch,meta97177){
this.p = p;
this.ch = ch;
this.meta97177 = meta97177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97178,meta97177__$1){
var self__ = this;
var _97178__$1 = this;
return (new cljs.core.async.t_cljs$core$async97176(self__.p,self__.ch,meta97177__$1));
}));

(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97178){
var self__ = this;
var _97178__$1 = this;
return self__.meta97177;
}));

(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async97176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta97177","meta97177",-2098911530,null)], null);
}));

(cljs.core.async.t_cljs$core$async97176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async97176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async97176");

(cljs.core.async.t_cljs$core$async97176.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async97176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async97176.
 */
cljs.core.async.__GT_t_cljs$core$async97176 = (function cljs$core$async$__GT_t_cljs$core$async97176(p,ch,meta97177){
return (new cljs.core.async.t_cljs$core$async97176(p,ch,meta97177));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async97176(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__97209 = arguments.length;
switch (G__97209) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37805__auto___98932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_97240){
var state_val_97241 = (state_97240[(1)]);
if((state_val_97241 === (7))){
var inst_97236 = (state_97240[(2)]);
var state_97240__$1 = state_97240;
var statearr_97246_98938 = state_97240__$1;
(statearr_97246_98938[(2)] = inst_97236);

(statearr_97246_98938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97241 === (1))){
var state_97240__$1 = state_97240;
var statearr_97248_98939 = state_97240__$1;
(statearr_97248_98939[(2)] = null);

(statearr_97248_98939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97241 === (4))){
var inst_97218 = (state_97240[(7)]);
var inst_97218__$1 = (state_97240[(2)]);
var inst_97219 = (inst_97218__$1 == null);
var state_97240__$1 = (function (){var statearr_97250 = state_97240;
(statearr_97250[(7)] = inst_97218__$1);

return statearr_97250;
})();
if(cljs.core.truth_(inst_97219)){
var statearr_97251_98942 = state_97240__$1;
(statearr_97251_98942[(1)] = (5));

} else {
var statearr_97252_98943 = state_97240__$1;
(statearr_97252_98943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97241 === (6))){
var inst_97218 = (state_97240[(7)]);
var inst_97227 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_97218) : p.call(null,inst_97218));
var state_97240__$1 = state_97240;
if(cljs.core.truth_(inst_97227)){
var statearr_97260_98947 = state_97240__$1;
(statearr_97260_98947[(1)] = (8));

} else {
var statearr_97262_98948 = state_97240__$1;
(statearr_97262_98948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97241 === (3))){
var inst_97238 = (state_97240[(2)]);
var state_97240__$1 = state_97240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97240__$1,inst_97238);
} else {
if((state_val_97241 === (2))){
var state_97240__$1 = state_97240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97240__$1,(4),ch);
} else {
if((state_val_97241 === (11))){
var inst_97230 = (state_97240[(2)]);
var state_97240__$1 = state_97240;
var statearr_97264_98950 = state_97240__$1;
(statearr_97264_98950[(2)] = inst_97230);

(statearr_97264_98950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97241 === (9))){
var state_97240__$1 = state_97240;
var statearr_97267_98952 = state_97240__$1;
(statearr_97267_98952[(2)] = null);

(statearr_97267_98952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97241 === (5))){
var inst_97225 = cljs.core.async.close_BANG_(out);
var state_97240__$1 = state_97240;
var statearr_97268_98956 = state_97240__$1;
(statearr_97268_98956[(2)] = inst_97225);

(statearr_97268_98956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97241 === (10))){
var inst_97233 = (state_97240[(2)]);
var state_97240__$1 = (function (){var statearr_97269 = state_97240;
(statearr_97269[(8)] = inst_97233);

return statearr_97269;
})();
var statearr_97271_98958 = state_97240__$1;
(statearr_97271_98958[(2)] = null);

(statearr_97271_98958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97241 === (8))){
var inst_97218 = (state_97240[(7)]);
var state_97240__$1 = state_97240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97240__$1,(11),out,inst_97218);
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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_97274 = [null,null,null,null,null,null,null,null,null];
(statearr_97274[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_97274[(1)] = (1));

return statearr_97274;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_97240){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_97240);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e97276){var ex__37735__auto__ = e97276;
var statearr_97278_98960 = state_97240;
(statearr_97278_98960[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_97240[(4)]))){
var statearr_97280_98962 = state_97240;
(statearr_97280_98962[(1)] = cljs.core.first((state_97240[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98966 = state_97240;
state_97240 = G__98966;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_97240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_97240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_97283 = f__37806__auto__();
(statearr_97283[(6)] = c__37805__auto___98932);

return statearr_97283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__97294 = arguments.length;
switch (G__97294) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__37805__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_97432){
var state_val_97433 = (state_97432[(1)]);
if((state_val_97433 === (7))){
var inst_97424 = (state_97432[(2)]);
var state_97432__$1 = state_97432;
var statearr_97438_98975 = state_97432__$1;
(statearr_97438_98975[(2)] = inst_97424);

(statearr_97438_98975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (20))){
var inst_97364 = (state_97432[(7)]);
var inst_97390 = (state_97432[(2)]);
var inst_97391 = cljs.core.next(inst_97364);
var inst_97338 = inst_97391;
var inst_97339 = null;
var inst_97340 = (0);
var inst_97341 = (0);
var state_97432__$1 = (function (){var statearr_97439 = state_97432;
(statearr_97439[(8)] = inst_97390);

(statearr_97439[(9)] = inst_97338);

(statearr_97439[(10)] = inst_97339);

(statearr_97439[(11)] = inst_97340);

(statearr_97439[(12)] = inst_97341);

return statearr_97439;
})();
var statearr_97443_98977 = state_97432__$1;
(statearr_97443_98977[(2)] = null);

(statearr_97443_98977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (1))){
var state_97432__$1 = state_97432;
var statearr_97444_98980 = state_97432__$1;
(statearr_97444_98980[(2)] = null);

(statearr_97444_98980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (4))){
var inst_97322 = (state_97432[(13)]);
var inst_97322__$1 = (state_97432[(2)]);
var inst_97323 = (inst_97322__$1 == null);
var state_97432__$1 = (function (){var statearr_97451 = state_97432;
(statearr_97451[(13)] = inst_97322__$1);

return statearr_97451;
})();
if(cljs.core.truth_(inst_97323)){
var statearr_97453_98984 = state_97432__$1;
(statearr_97453_98984[(1)] = (5));

} else {
var statearr_97454_98985 = state_97432__$1;
(statearr_97454_98985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (15))){
var state_97432__$1 = state_97432;
var statearr_97460_98988 = state_97432__$1;
(statearr_97460_98988[(2)] = null);

(statearr_97460_98988[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (21))){
var state_97432__$1 = state_97432;
var statearr_97461_98989 = state_97432__$1;
(statearr_97461_98989[(2)] = null);

(statearr_97461_98989[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (13))){
var inst_97341 = (state_97432[(12)]);
var inst_97338 = (state_97432[(9)]);
var inst_97339 = (state_97432[(10)]);
var inst_97340 = (state_97432[(11)]);
var inst_97353 = (state_97432[(2)]);
var inst_97355 = (inst_97341 + (1));
var tmp97457 = inst_97339;
var tmp97458 = inst_97338;
var tmp97459 = inst_97340;
var inst_97338__$1 = tmp97458;
var inst_97339__$1 = tmp97457;
var inst_97340__$1 = tmp97459;
var inst_97341__$1 = inst_97355;
var state_97432__$1 = (function (){var statearr_97462 = state_97432;
(statearr_97462[(14)] = inst_97353);

(statearr_97462[(9)] = inst_97338__$1);

(statearr_97462[(10)] = inst_97339__$1);

(statearr_97462[(11)] = inst_97340__$1);

(statearr_97462[(12)] = inst_97341__$1);

return statearr_97462;
})();
var statearr_97467_98994 = state_97432__$1;
(statearr_97467_98994[(2)] = null);

(statearr_97467_98994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (22))){
var state_97432__$1 = state_97432;
var statearr_97468_98996 = state_97432__$1;
(statearr_97468_98996[(2)] = null);

(statearr_97468_98996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (6))){
var inst_97322 = (state_97432[(13)]);
var inst_97335 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_97322) : f.call(null,inst_97322));
var inst_97336 = cljs.core.seq(inst_97335);
var inst_97338 = inst_97336;
var inst_97339 = null;
var inst_97340 = (0);
var inst_97341 = (0);
var state_97432__$1 = (function (){var statearr_97476 = state_97432;
(statearr_97476[(9)] = inst_97338);

(statearr_97476[(10)] = inst_97339);

(statearr_97476[(11)] = inst_97340);

(statearr_97476[(12)] = inst_97341);

return statearr_97476;
})();
var statearr_97481_99000 = state_97432__$1;
(statearr_97481_99000[(2)] = null);

(statearr_97481_99000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (17))){
var inst_97364 = (state_97432[(7)]);
var inst_97374 = cljs.core.chunk_first(inst_97364);
var inst_97376 = cljs.core.chunk_rest(inst_97364);
var inst_97381 = cljs.core.count(inst_97374);
var inst_97338 = inst_97376;
var inst_97339 = inst_97374;
var inst_97340 = inst_97381;
var inst_97341 = (0);
var state_97432__$1 = (function (){var statearr_97495 = state_97432;
(statearr_97495[(9)] = inst_97338);

(statearr_97495[(10)] = inst_97339);

(statearr_97495[(11)] = inst_97340);

(statearr_97495[(12)] = inst_97341);

return statearr_97495;
})();
var statearr_97507_99005 = state_97432__$1;
(statearr_97507_99005[(2)] = null);

(statearr_97507_99005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (3))){
var inst_97426 = (state_97432[(2)]);
var state_97432__$1 = state_97432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97432__$1,inst_97426);
} else {
if((state_val_97433 === (12))){
var inst_97404 = (state_97432[(2)]);
var state_97432__$1 = state_97432;
var statearr_97518_99008 = state_97432__$1;
(statearr_97518_99008[(2)] = inst_97404);

(statearr_97518_99008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (2))){
var state_97432__$1 = state_97432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97432__$1,(4),in$);
} else {
if((state_val_97433 === (23))){
var inst_97415 = (state_97432[(2)]);
var state_97432__$1 = state_97432;
var statearr_97522_99010 = state_97432__$1;
(statearr_97522_99010[(2)] = inst_97415);

(statearr_97522_99010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (19))){
var inst_97399 = (state_97432[(2)]);
var state_97432__$1 = state_97432;
var statearr_97523_99012 = state_97432__$1;
(statearr_97523_99012[(2)] = inst_97399);

(statearr_97523_99012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (11))){
var inst_97338 = (state_97432[(9)]);
var inst_97364 = (state_97432[(7)]);
var inst_97364__$1 = cljs.core.seq(inst_97338);
var state_97432__$1 = (function (){var statearr_97528 = state_97432;
(statearr_97528[(7)] = inst_97364__$1);

return statearr_97528;
})();
if(inst_97364__$1){
var statearr_97530_99013 = state_97432__$1;
(statearr_97530_99013[(1)] = (14));

} else {
var statearr_97532_99016 = state_97432__$1;
(statearr_97532_99016[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (9))){
var inst_97406 = (state_97432[(2)]);
var inst_97408 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_97432__$1 = (function (){var statearr_97539 = state_97432;
(statearr_97539[(15)] = inst_97406);

return statearr_97539;
})();
if(cljs.core.truth_(inst_97408)){
var statearr_97540_99021 = state_97432__$1;
(statearr_97540_99021[(1)] = (21));

} else {
var statearr_97541_99022 = state_97432__$1;
(statearr_97541_99022[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (5))){
var inst_97329 = cljs.core.async.close_BANG_(out);
var state_97432__$1 = state_97432;
var statearr_97542_99024 = state_97432__$1;
(statearr_97542_99024[(2)] = inst_97329);

(statearr_97542_99024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (14))){
var inst_97364 = (state_97432[(7)]);
var inst_97368 = cljs.core.chunked_seq_QMARK_(inst_97364);
var state_97432__$1 = state_97432;
if(inst_97368){
var statearr_97546_99025 = state_97432__$1;
(statearr_97546_99025[(1)] = (17));

} else {
var statearr_97550_99026 = state_97432__$1;
(statearr_97550_99026[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (16))){
var inst_97402 = (state_97432[(2)]);
var state_97432__$1 = state_97432;
var statearr_97551_99029 = state_97432__$1;
(statearr_97551_99029[(2)] = inst_97402);

(statearr_97551_99029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97433 === (10))){
var inst_97339 = (state_97432[(10)]);
var inst_97341 = (state_97432[(12)]);
var inst_97350 = cljs.core._nth(inst_97339,inst_97341);
var state_97432__$1 = state_97432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97432__$1,(13),out,inst_97350);
} else {
if((state_val_97433 === (18))){
var inst_97364 = (state_97432[(7)]);
var inst_97388 = cljs.core.first(inst_97364);
var state_97432__$1 = state_97432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97432__$1,(20),out,inst_97388);
} else {
if((state_val_97433 === (8))){
var inst_97341 = (state_97432[(12)]);
var inst_97340 = (state_97432[(11)]);
var inst_97344 = (inst_97341 < inst_97340);
var inst_97345 = inst_97344;
var state_97432__$1 = state_97432;
if(cljs.core.truth_(inst_97345)){
var statearr_97552_99034 = state_97432__$1;
(statearr_97552_99034[(1)] = (10));

} else {
var statearr_97553_99035 = state_97432__$1;
(statearr_97553_99035[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__37732__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37732__auto____0 = (function (){
var statearr_97563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_97563[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37732__auto__);

(statearr_97563[(1)] = (1));

return statearr_97563;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37732__auto____1 = (function (state_97432){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_97432);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e97564){var ex__37735__auto__ = e97564;
var statearr_97566_99037 = state_97432;
(statearr_97566_99037[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_97432[(4)]))){
var statearr_97567_99038 = state_97432;
(statearr_97567_99038[(1)] = cljs.core.first((state_97432[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99039 = state_97432;
state_97432 = G__99039;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37732__auto__ = function(state_97432){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37732__auto____1.call(this,state_97432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37732__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37732__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_97568 = f__37806__auto__();
(statearr_97568[(6)] = c__37805__auto__);

return statearr_97568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));

return c__37805__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__97574 = arguments.length;
switch (G__97574) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__97577 = arguments.length;
switch (G__97577) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__97613 = arguments.length;
switch (G__97613) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37805__auto___99049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_97643){
var state_val_97644 = (state_97643[(1)]);
if((state_val_97644 === (7))){
var inst_97638 = (state_97643[(2)]);
var state_97643__$1 = state_97643;
var statearr_97650_99050 = state_97643__$1;
(statearr_97650_99050[(2)] = inst_97638);

(statearr_97650_99050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97644 === (1))){
var inst_97614 = null;
var state_97643__$1 = (function (){var statearr_97651 = state_97643;
(statearr_97651[(7)] = inst_97614);

return statearr_97651;
})();
var statearr_97652_99053 = state_97643__$1;
(statearr_97652_99053[(2)] = null);

(statearr_97652_99053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97644 === (4))){
var inst_97622 = (state_97643[(8)]);
var inst_97622__$1 = (state_97643[(2)]);
var inst_97623 = (inst_97622__$1 == null);
var inst_97624 = cljs.core.not(inst_97623);
var state_97643__$1 = (function (){var statearr_97654 = state_97643;
(statearr_97654[(8)] = inst_97622__$1);

return statearr_97654;
})();
if(inst_97624){
var statearr_97655_99054 = state_97643__$1;
(statearr_97655_99054[(1)] = (5));

} else {
var statearr_97657_99055 = state_97643__$1;
(statearr_97657_99055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97644 === (6))){
var state_97643__$1 = state_97643;
var statearr_97659_99056 = state_97643__$1;
(statearr_97659_99056[(2)] = null);

(statearr_97659_99056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97644 === (3))){
var inst_97640 = (state_97643[(2)]);
var inst_97641 = cljs.core.async.close_BANG_(out);
var state_97643__$1 = (function (){var statearr_97660 = state_97643;
(statearr_97660[(9)] = inst_97640);

return statearr_97660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_97643__$1,inst_97641);
} else {
if((state_val_97644 === (2))){
var state_97643__$1 = state_97643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97643__$1,(4),ch);
} else {
if((state_val_97644 === (11))){
var inst_97622 = (state_97643[(8)]);
var inst_97632 = (state_97643[(2)]);
var inst_97614 = inst_97622;
var state_97643__$1 = (function (){var statearr_97661 = state_97643;
(statearr_97661[(10)] = inst_97632);

(statearr_97661[(7)] = inst_97614);

return statearr_97661;
})();
var statearr_97662_99062 = state_97643__$1;
(statearr_97662_99062[(2)] = null);

(statearr_97662_99062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97644 === (9))){
var inst_97622 = (state_97643[(8)]);
var state_97643__$1 = state_97643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97643__$1,(11),out,inst_97622);
} else {
if((state_val_97644 === (5))){
var inst_97622 = (state_97643[(8)]);
var inst_97614 = (state_97643[(7)]);
var inst_97627 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_97622,inst_97614);
var state_97643__$1 = state_97643;
if(inst_97627){
var statearr_97666_99066 = state_97643__$1;
(statearr_97666_99066[(1)] = (8));

} else {
var statearr_97667_99067 = state_97643__$1;
(statearr_97667_99067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97644 === (10))){
var inst_97635 = (state_97643[(2)]);
var state_97643__$1 = state_97643;
var statearr_97668_99068 = state_97643__$1;
(statearr_97668_99068[(2)] = inst_97635);

(statearr_97668_99068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97644 === (8))){
var inst_97614 = (state_97643[(7)]);
var tmp97665 = inst_97614;
var inst_97614__$1 = tmp97665;
var state_97643__$1 = (function (){var statearr_97669 = state_97643;
(statearr_97669[(7)] = inst_97614__$1);

return statearr_97669;
})();
var statearr_97670_99070 = state_97643__$1;
(statearr_97670_99070[(2)] = null);

(statearr_97670_99070[(1)] = (2));


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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_97672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_97672[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_97672[(1)] = (1));

return statearr_97672;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_97643){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_97643);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e97678){var ex__37735__auto__ = e97678;
var statearr_97679_99072 = state_97643;
(statearr_97679_99072[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_97643[(4)]))){
var statearr_97680_99073 = state_97643;
(statearr_97680_99073[(1)] = cljs.core.first((state_97643[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99074 = state_97643;
state_97643 = G__99074;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_97643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_97643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_97684 = f__37806__auto__();
(statearr_97684[(6)] = c__37805__auto___99049);

return statearr_97684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__97689 = arguments.length;
switch (G__97689) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37805__auto___99079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_97738){
var state_val_97740 = (state_97738[(1)]);
if((state_val_97740 === (7))){
var inst_97734 = (state_97738[(2)]);
var state_97738__$1 = state_97738;
var statearr_97746_99080 = state_97738__$1;
(statearr_97746_99080[(2)] = inst_97734);

(statearr_97746_99080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (1))){
var inst_97694 = (new Array(n));
var inst_97695 = inst_97694;
var inst_97696 = (0);
var state_97738__$1 = (function (){var statearr_97749 = state_97738;
(statearr_97749[(7)] = inst_97695);

(statearr_97749[(8)] = inst_97696);

return statearr_97749;
})();
var statearr_97751_99084 = state_97738__$1;
(statearr_97751_99084[(2)] = null);

(statearr_97751_99084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (4))){
var inst_97699 = (state_97738[(9)]);
var inst_97699__$1 = (state_97738[(2)]);
var inst_97701 = (inst_97699__$1 == null);
var inst_97702 = cljs.core.not(inst_97701);
var state_97738__$1 = (function (){var statearr_97756 = state_97738;
(statearr_97756[(9)] = inst_97699__$1);

return statearr_97756;
})();
if(inst_97702){
var statearr_97757_99085 = state_97738__$1;
(statearr_97757_99085[(1)] = (5));

} else {
var statearr_97758_99086 = state_97738__$1;
(statearr_97758_99086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (15))){
var inst_97728 = (state_97738[(2)]);
var state_97738__$1 = state_97738;
var statearr_97769_99087 = state_97738__$1;
(statearr_97769_99087[(2)] = inst_97728);

(statearr_97769_99087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (13))){
var state_97738__$1 = state_97738;
var statearr_97775_99088 = state_97738__$1;
(statearr_97775_99088[(2)] = null);

(statearr_97775_99088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (6))){
var inst_97696 = (state_97738[(8)]);
var inst_97722 = (inst_97696 > (0));
var state_97738__$1 = state_97738;
if(cljs.core.truth_(inst_97722)){
var statearr_97780_99089 = state_97738__$1;
(statearr_97780_99089[(1)] = (12));

} else {
var statearr_97781_99090 = state_97738__$1;
(statearr_97781_99090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (3))){
var inst_97736 = (state_97738[(2)]);
var state_97738__$1 = state_97738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97738__$1,inst_97736);
} else {
if((state_val_97740 === (12))){
var inst_97695 = (state_97738[(7)]);
var inst_97724 = cljs.core.vec(inst_97695);
var state_97738__$1 = state_97738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97738__$1,(15),out,inst_97724);
} else {
if((state_val_97740 === (2))){
var state_97738__$1 = state_97738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97738__$1,(4),ch);
} else {
if((state_val_97740 === (11))){
var inst_97716 = (state_97738[(2)]);
var inst_97717 = (new Array(n));
var inst_97695 = inst_97717;
var inst_97696 = (0);
var state_97738__$1 = (function (){var statearr_97782 = state_97738;
(statearr_97782[(10)] = inst_97716);

(statearr_97782[(7)] = inst_97695);

(statearr_97782[(8)] = inst_97696);

return statearr_97782;
})();
var statearr_97784_99094 = state_97738__$1;
(statearr_97784_99094[(2)] = null);

(statearr_97784_99094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (9))){
var inst_97695 = (state_97738[(7)]);
var inst_97713 = cljs.core.vec(inst_97695);
var state_97738__$1 = state_97738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97738__$1,(11),out,inst_97713);
} else {
if((state_val_97740 === (5))){
var inst_97695 = (state_97738[(7)]);
var inst_97696 = (state_97738[(8)]);
var inst_97699 = (state_97738[(9)]);
var inst_97708 = (state_97738[(11)]);
var inst_97704 = (inst_97695[inst_97696] = inst_97699);
var inst_97708__$1 = (inst_97696 + (1));
var inst_97709 = (inst_97708__$1 < n);
var state_97738__$1 = (function (){var statearr_97785 = state_97738;
(statearr_97785[(12)] = inst_97704);

(statearr_97785[(11)] = inst_97708__$1);

return statearr_97785;
})();
if(cljs.core.truth_(inst_97709)){
var statearr_97788_99095 = state_97738__$1;
(statearr_97788_99095[(1)] = (8));

} else {
var statearr_97789_99096 = state_97738__$1;
(statearr_97789_99096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (14))){
var inst_97731 = (state_97738[(2)]);
var inst_97732 = cljs.core.async.close_BANG_(out);
var state_97738__$1 = (function (){var statearr_97792 = state_97738;
(statearr_97792[(13)] = inst_97731);

return statearr_97792;
})();
var statearr_97793_99097 = state_97738__$1;
(statearr_97793_99097[(2)] = inst_97732);

(statearr_97793_99097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (10))){
var inst_97720 = (state_97738[(2)]);
var state_97738__$1 = state_97738;
var statearr_97794_99098 = state_97738__$1;
(statearr_97794_99098[(2)] = inst_97720);

(statearr_97794_99098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97740 === (8))){
var inst_97695 = (state_97738[(7)]);
var inst_97708 = (state_97738[(11)]);
var tmp97791 = inst_97695;
var inst_97695__$1 = tmp97791;
var inst_97696 = inst_97708;
var state_97738__$1 = (function (){var statearr_97798 = state_97738;
(statearr_97798[(7)] = inst_97695__$1);

(statearr_97798[(8)] = inst_97696);

return statearr_97798;
})();
var statearr_97799_99099 = state_97738__$1;
(statearr_97799_99099[(2)] = null);

(statearr_97799_99099[(1)] = (2));


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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_97801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_97801[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_97801[(1)] = (1));

return statearr_97801;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_97738){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_97738);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e97802){var ex__37735__auto__ = e97802;
var statearr_97804_99101 = state_97738;
(statearr_97804_99101[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_97738[(4)]))){
var statearr_97809_99102 = state_97738;
(statearr_97809_99102[(1)] = cljs.core.first((state_97738[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99103 = state_97738;
state_97738 = G__99103;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_97738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_97738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_97810 = f__37806__auto__();
(statearr_97810[(6)] = c__37805__auto___99079);

return statearr_97810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__97822 = arguments.length;
switch (G__97822) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37805__auto___99107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37806__auto__ = (function (){var switch__37731__auto__ = (function (state_97873){
var state_val_97874 = (state_97873[(1)]);
if((state_val_97874 === (7))){
var inst_97869 = (state_97873[(2)]);
var state_97873__$1 = state_97873;
var statearr_97876_99108 = state_97873__$1;
(statearr_97876_99108[(2)] = inst_97869);

(statearr_97876_99108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (1))){
var inst_97828 = [];
var inst_97829 = inst_97828;
var inst_97831 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_97873__$1 = (function (){var statearr_97877 = state_97873;
(statearr_97877[(7)] = inst_97829);

(statearr_97877[(8)] = inst_97831);

return statearr_97877;
})();
var statearr_97878_99109 = state_97873__$1;
(statearr_97878_99109[(2)] = null);

(statearr_97878_99109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (4))){
var inst_97834 = (state_97873[(9)]);
var inst_97834__$1 = (state_97873[(2)]);
var inst_97835 = (inst_97834__$1 == null);
var inst_97836 = cljs.core.not(inst_97835);
var state_97873__$1 = (function (){var statearr_97879 = state_97873;
(statearr_97879[(9)] = inst_97834__$1);

return statearr_97879;
})();
if(inst_97836){
var statearr_97880_99110 = state_97873__$1;
(statearr_97880_99110[(1)] = (5));

} else {
var statearr_97881_99111 = state_97873__$1;
(statearr_97881_99111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (15))){
var inst_97829 = (state_97873[(7)]);
var inst_97861 = cljs.core.vec(inst_97829);
var state_97873__$1 = state_97873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97873__$1,(18),out,inst_97861);
} else {
if((state_val_97874 === (13))){
var inst_97856 = (state_97873[(2)]);
var state_97873__$1 = state_97873;
var statearr_97886_99112 = state_97873__$1;
(statearr_97886_99112[(2)] = inst_97856);

(statearr_97886_99112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (6))){
var inst_97829 = (state_97873[(7)]);
var inst_97858 = inst_97829.length;
var inst_97859 = (inst_97858 > (0));
var state_97873__$1 = state_97873;
if(cljs.core.truth_(inst_97859)){
var statearr_97887_99113 = state_97873__$1;
(statearr_97887_99113[(1)] = (15));

} else {
var statearr_97888_99115 = state_97873__$1;
(statearr_97888_99115[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (17))){
var inst_97866 = (state_97873[(2)]);
var inst_97867 = cljs.core.async.close_BANG_(out);
var state_97873__$1 = (function (){var statearr_97890 = state_97873;
(statearr_97890[(10)] = inst_97866);

return statearr_97890;
})();
var statearr_97894_99116 = state_97873__$1;
(statearr_97894_99116[(2)] = inst_97867);

(statearr_97894_99116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (3))){
var inst_97871 = (state_97873[(2)]);
var state_97873__$1 = state_97873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97873__$1,inst_97871);
} else {
if((state_val_97874 === (12))){
var inst_97829 = (state_97873[(7)]);
var inst_97849 = cljs.core.vec(inst_97829);
var state_97873__$1 = state_97873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97873__$1,(14),out,inst_97849);
} else {
if((state_val_97874 === (2))){
var state_97873__$1 = state_97873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97873__$1,(4),ch);
} else {
if((state_val_97874 === (11))){
var inst_97829 = (state_97873[(7)]);
var inst_97834 = (state_97873[(9)]);
var inst_97838 = (state_97873[(11)]);
var inst_97846 = inst_97829.push(inst_97834);
var tmp97895 = inst_97829;
var inst_97829__$1 = tmp97895;
var inst_97831 = inst_97838;
var state_97873__$1 = (function (){var statearr_97897 = state_97873;
(statearr_97897[(12)] = inst_97846);

(statearr_97897[(7)] = inst_97829__$1);

(statearr_97897[(8)] = inst_97831);

return statearr_97897;
})();
var statearr_97898_99117 = state_97873__$1;
(statearr_97898_99117[(2)] = null);

(statearr_97898_99117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (9))){
var inst_97831 = (state_97873[(8)]);
var inst_97842 = cljs.core.keyword_identical_QMARK_(inst_97831,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_97873__$1 = state_97873;
var statearr_97899_99118 = state_97873__$1;
(statearr_97899_99118[(2)] = inst_97842);

(statearr_97899_99118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (5))){
var inst_97834 = (state_97873[(9)]);
var inst_97838 = (state_97873[(11)]);
var inst_97831 = (state_97873[(8)]);
var inst_97839 = (state_97873[(13)]);
var inst_97838__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_97834) : f.call(null,inst_97834));
var inst_97839__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_97838__$1,inst_97831);
var state_97873__$1 = (function (){var statearr_97900 = state_97873;
(statearr_97900[(11)] = inst_97838__$1);

(statearr_97900[(13)] = inst_97839__$1);

return statearr_97900;
})();
if(inst_97839__$1){
var statearr_97901_99119 = state_97873__$1;
(statearr_97901_99119[(1)] = (8));

} else {
var statearr_97902_99120 = state_97873__$1;
(statearr_97902_99120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (14))){
var inst_97834 = (state_97873[(9)]);
var inst_97838 = (state_97873[(11)]);
var inst_97851 = (state_97873[(2)]);
var inst_97852 = [];
var inst_97853 = inst_97852.push(inst_97834);
var inst_97829 = inst_97852;
var inst_97831 = inst_97838;
var state_97873__$1 = (function (){var statearr_97904 = state_97873;
(statearr_97904[(14)] = inst_97851);

(statearr_97904[(15)] = inst_97853);

(statearr_97904[(7)] = inst_97829);

(statearr_97904[(8)] = inst_97831);

return statearr_97904;
})();
var statearr_97906_99121 = state_97873__$1;
(statearr_97906_99121[(2)] = null);

(statearr_97906_99121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (16))){
var state_97873__$1 = state_97873;
var statearr_97908_99122 = state_97873__$1;
(statearr_97908_99122[(2)] = null);

(statearr_97908_99122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (10))){
var inst_97844 = (state_97873[(2)]);
var state_97873__$1 = state_97873;
if(cljs.core.truth_(inst_97844)){
var statearr_97909_99124 = state_97873__$1;
(statearr_97909_99124[(1)] = (11));

} else {
var statearr_97910_99125 = state_97873__$1;
(statearr_97910_99125[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (18))){
var inst_97863 = (state_97873[(2)]);
var state_97873__$1 = state_97873;
var statearr_97911_99126 = state_97873__$1;
(statearr_97911_99126[(2)] = inst_97863);

(statearr_97911_99126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97874 === (8))){
var inst_97839 = (state_97873[(13)]);
var state_97873__$1 = state_97873;
var statearr_97912_99128 = state_97873__$1;
(statearr_97912_99128[(2)] = inst_97839);

(statearr_97912_99128[(1)] = (10));


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
var cljs$core$async$state_machine__37732__auto__ = null;
var cljs$core$async$state_machine__37732__auto____0 = (function (){
var statearr_97916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_97916[(0)] = cljs$core$async$state_machine__37732__auto__);

(statearr_97916[(1)] = (1));

return statearr_97916;
});
var cljs$core$async$state_machine__37732__auto____1 = (function (state_97873){
while(true){
var ret_value__37733__auto__ = (function (){try{while(true){
var result__37734__auto__ = switch__37731__auto__(state_97873);
if(cljs.core.keyword_identical_QMARK_(result__37734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37734__auto__;
}
break;
}
}catch (e97918){var ex__37735__auto__ = e97918;
var statearr_97920_99129 = state_97873;
(statearr_97920_99129[(2)] = ex__37735__auto__);


if(cljs.core.seq((state_97873[(4)]))){
var statearr_97923_99130 = state_97873;
(statearr_97923_99130[(1)] = cljs.core.first((state_97873[(4)])));

} else {
throw ex__37735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99131 = state_97873;
state_97873 = G__99131;
continue;
} else {
return ret_value__37733__auto__;
}
break;
}
});
cljs$core$async$state_machine__37732__auto__ = function(state_97873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37732__auto____1.call(this,state_97873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37732__auto____0;
cljs$core$async$state_machine__37732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37732__auto____1;
return cljs$core$async$state_machine__37732__auto__;
})()
})();
var state__37807__auto__ = (function (){var statearr_97927 = f__37806__auto__();
(statearr_97927[(6)] = c__37805__auto___99107);

return statearr_97927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37807__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
