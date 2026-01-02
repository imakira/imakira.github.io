import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.remote.runtime.api.js";
goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__71998){
var map__72000 = p__71998;
var map__72000__$1 = cljs.core.__destructure_map(map__72000);
var runtime = map__72000__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72000__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5141__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_72342 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_72342)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__72015 = runtime;
var G__72016 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_72342);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__72015,G__72016) : shadow.remote.runtime.shared.process.call(null,G__72015,G__72016));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__72026,res){
var map__72029 = p__72026;
var map__72029__$1 = cljs.core.__destructure_map(map__72029);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72029__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72029__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__72035 = res;
var G__72035__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72035,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__72035);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72035__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__72035__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__72047 = arguments.length;
switch (G__72047) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__72063,msg,handlers,timeout_after_ms){
var map__72065 = p__72063;
var map__72065__$1 = cljs.core.__destructure_map(map__72065);
var runtime = map__72065__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72065__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5881__auto__ = [];
var len__5875__auto___72357 = arguments.length;
var i__5876__auto___72358 = (0);
while(true){
if((i__5876__auto___72358 < len__5875__auto___72357)){
args__5881__auto__.push((arguments[i__5876__auto___72358]));

var G__72361 = (i__5876__auto___72358 + (1));
i__5876__auto___72358 = G__72361;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((2) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5882__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__72091,ev,args){
var map__72093 = p__72091;
var map__72093__$1 = cljs.core.__destructure_map(map__72093);
var runtime = map__72093__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__72095 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__72099 = null;
var count__72100 = (0);
var i__72101 = (0);
while(true){
if((i__72101 < count__72100)){
var ext = chunk__72099.cljs$core$IIndexed$_nth$arity$2(null,i__72101);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__72365 = seq__72095;
var G__72366 = chunk__72099;
var G__72367 = count__72100;
var G__72368 = (i__72101 + (1));
seq__72095 = G__72365;
chunk__72099 = G__72366;
count__72100 = G__72367;
i__72101 = G__72368;
continue;
} else {
var G__72369 = seq__72095;
var G__72370 = chunk__72099;
var G__72371 = count__72100;
var G__72372 = (i__72101 + (1));
seq__72095 = G__72369;
chunk__72099 = G__72370;
count__72100 = G__72371;
i__72101 = G__72372;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__72095);
if(temp__5823__auto__){
var seq__72095__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72095__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__72095__$1);
var G__72375 = cljs.core.chunk_rest(seq__72095__$1);
var G__72376 = c__5672__auto__;
var G__72377 = cljs.core.count(c__5672__auto__);
var G__72378 = (0);
seq__72095 = G__72375;
chunk__72099 = G__72376;
count__72100 = G__72377;
i__72101 = G__72378;
continue;
} else {
var ext = cljs.core.first(seq__72095__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__72380 = cljs.core.next(seq__72095__$1);
var G__72381 = null;
var G__72382 = (0);
var G__72383 = (0);
seq__72095 = G__72380;
chunk__72099 = G__72381;
count__72100 = G__72382;
i__72101 = G__72383;
continue;
} else {
var G__72385 = cljs.core.next(seq__72095__$1);
var G__72386 = null;
var G__72387 = (0);
var G__72389 = (0);
seq__72095 = G__72385;
chunk__72099 = G__72386;
count__72100 = G__72387;
i__72101 = G__72389;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq72084){
var G__72085 = cljs.core.first(seq72084);
var seq72084__$1 = cljs.core.next(seq72084);
var G__72086 = cljs.core.first(seq72084__$1);
var seq72084__$2 = cljs.core.next(seq72084__$1);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72085,G__72086,seq72084__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__72140,p__72141){
var map__72142 = p__72140;
var map__72142__$1 = cljs.core.__destructure_map(map__72142);
var runtime = map__72142__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72142__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__72143 = p__72141;
var map__72143__$1 = cljs.core.__destructure_map(map__72143);
var msg = map__72143__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72143__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__72147 = cljs.core.deref(state_ref);
var map__72147__$1 = cljs.core.__destructure_map(map__72147);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72147__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72147__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__72160,msg){
var map__72164 = p__72160;
var map__72164__$1 = cljs.core.__destructure_map(map__72164);
var runtime = map__72164__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72164__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__72182,key,p__72183){
var map__72184 = p__72182;
var map__72184__$1 = cljs.core.__destructure_map(map__72184);
var state = map__72184__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72184__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__72185 = p__72183;
var map__72185__$1 = cljs.core.__destructure_map(map__72185);
var spec = map__72185__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72185__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72185__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__72193,key,spec){
var map__72194 = p__72193;
var map__72194__$1 = cljs.core.__destructure_map(map__72194);
var runtime = map__72194__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72194__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___72430 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___72430 == null)){
} else {
var on_welcome_72433 = temp__5827__auto___72430;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_72433.cljs$core$IFn$_invoke$arity$0 ? on_welcome_72433.cljs$core$IFn$_invoke$arity$0() : on_welcome_72433.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__72199_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__72199_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__72200_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__72200_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__72201_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__72201_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__72202_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__72202_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__72203_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__72203_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__72209,key){
var map__72210 = p__72209;
var map__72210__$1 = cljs.core.__destructure_map(map__72210);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__72218,msg){
var map__72219 = p__72218;
var map__72219__$1 = cljs.core.__destructure_map(map__72219);
var runtime = map__72219__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72219__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__72220,p__72221){
var map__72223 = p__72220;
var map__72223__$1 = cljs.core.__destructure_map(map__72223);
var runtime = map__72223__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72223__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__72224 = p__72221;
var map__72224__$1 = cljs.core.__destructure_map(map__72224);
var msg = map__72224__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72224__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72224__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__72268 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__72270 = null;
var count__72271 = (0);
var i__72272 = (0);
while(true){
if((i__72272 < count__72271)){
var map__72319 = chunk__72270.cljs$core$IIndexed$_nth$arity$2(null,i__72272);
var map__72319__$1 = cljs.core.__destructure_map(map__72319);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72319__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__72480 = seq__72268;
var G__72481 = chunk__72270;
var G__72482 = count__72271;
var G__72483 = (i__72272 + (1));
seq__72268 = G__72480;
chunk__72270 = G__72481;
count__72271 = G__72482;
i__72272 = G__72483;
continue;
} else {
var G__72484 = seq__72268;
var G__72485 = chunk__72270;
var G__72486 = count__72271;
var G__72487 = (i__72272 + (1));
seq__72268 = G__72484;
chunk__72270 = G__72485;
count__72271 = G__72486;
i__72272 = G__72487;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__72268);
if(temp__5823__auto__){
var seq__72268__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72268__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__72268__$1);
var G__72493 = cljs.core.chunk_rest(seq__72268__$1);
var G__72494 = c__5672__auto__;
var G__72495 = cljs.core.count(c__5672__auto__);
var G__72496 = (0);
seq__72268 = G__72493;
chunk__72270 = G__72494;
count__72271 = G__72495;
i__72272 = G__72496;
continue;
} else {
var map__72326 = cljs.core.first(seq__72268__$1);
var map__72326__$1 = cljs.core.__destructure_map(map__72326);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72326__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__72500 = cljs.core.next(seq__72268__$1);
var G__72501 = null;
var G__72502 = (0);
var G__72503 = (0);
seq__72268 = G__72500;
chunk__72270 = G__72501;
count__72271 = G__72502;
i__72272 = G__72503;
continue;
} else {
var G__72504 = cljs.core.next(seq__72268__$1);
var G__72505 = null;
var G__72506 = (0);
var G__72507 = (0);
seq__72268 = G__72504;
chunk__72270 = G__72505;
count__72271 = G__72506;
i__72272 = G__72507;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
