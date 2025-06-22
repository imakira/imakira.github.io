goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__97011){
var map__97018 = p__97011;
var map__97018__$1 = cljs.core.__destructure_map(map__97018);
var runtime = map__97018__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97018__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_97302 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_97302)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__97031 = runtime;
var G__97032 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_97302);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__97031,G__97032) : shadow.remote.runtime.shared.process.call(null,G__97031,G__97032));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__97035,res){
var map__97037 = p__97035;
var map__97037__$1 = cljs.core.__destructure_map(map__97037);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97037__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97037__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__97038 = res;
var G__97038__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__97038,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__97038);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__97038__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__97038__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__97047 = arguments.length;
switch (G__97047) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__97049,msg,handlers,timeout_after_ms){
var map__97052 = p__97049;
var map__97052__$1 = cljs.core.__destructure_map(map__97052);
var runtime = map__97052__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var args__5755__auto__ = [];
var len__5749__auto___97346 = arguments.length;
var i__5750__auto___97348 = (0);
while(true){
if((i__5750__auto___97348 < len__5749__auto___97346)){
args__5755__auto__.push((arguments[i__5750__auto___97348]));

var G__97349 = (i__5750__auto___97348 + (1));
i__5750__auto___97348 = G__97349;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__97068,ev,args){
var map__97069 = p__97068;
var map__97069__$1 = cljs.core.__destructure_map(map__97069);
var runtime = map__97069__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97069__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__97070 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__97073 = null;
var count__97074 = (0);
var i__97075 = (0);
while(true){
if((i__97075 < count__97074)){
var ext = chunk__97073.cljs$core$IIndexed$_nth$arity$2(null,i__97075);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__97377 = seq__97070;
var G__97378 = chunk__97073;
var G__97379 = count__97074;
var G__97380 = (i__97075 + (1));
seq__97070 = G__97377;
chunk__97073 = G__97378;
count__97074 = G__97379;
i__97075 = G__97380;
continue;
} else {
var G__97384 = seq__97070;
var G__97385 = chunk__97073;
var G__97386 = count__97074;
var G__97387 = (i__97075 + (1));
seq__97070 = G__97384;
chunk__97073 = G__97385;
count__97074 = G__97386;
i__97075 = G__97387;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__97070);
if(temp__5823__auto__){
var seq__97070__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__97070__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__97070__$1);
var G__97392 = cljs.core.chunk_rest(seq__97070__$1);
var G__97393 = c__5548__auto__;
var G__97394 = cljs.core.count(c__5548__auto__);
var G__97395 = (0);
seq__97070 = G__97392;
chunk__97073 = G__97393;
count__97074 = G__97394;
i__97075 = G__97395;
continue;
} else {
var ext = cljs.core.first(seq__97070__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__97419 = cljs.core.next(seq__97070__$1);
var G__97420 = null;
var G__97421 = (0);
var G__97422 = (0);
seq__97070 = G__97419;
chunk__97073 = G__97420;
count__97074 = G__97421;
i__97075 = G__97422;
continue;
} else {
var G__97427 = cljs.core.next(seq__97070__$1);
var G__97429 = null;
var G__97430 = (0);
var G__97431 = (0);
seq__97070 = G__97427;
chunk__97073 = G__97429;
count__97074 = G__97430;
i__97075 = G__97431;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq97063){
var G__97064 = cljs.core.first(seq97063);
var seq97063__$1 = cljs.core.next(seq97063);
var G__97065 = cljs.core.first(seq97063__$1);
var seq97063__$2 = cljs.core.next(seq97063__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97064,G__97065,seq97063__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__97149,p__97150){
var map__97151 = p__97149;
var map__97151__$1 = cljs.core.__destructure_map(map__97151);
var runtime = map__97151__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97151__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__97153 = p__97150;
var map__97153__$1 = cljs.core.__destructure_map(map__97153);
var msg = map__97153__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97153__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__97157 = cljs.core.deref(state_ref);
var map__97157__$1 = cljs.core.__destructure_map(map__97157);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97157__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97157__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__97164,msg){
var map__97165 = p__97164;
var map__97165__$1 = cljs.core.__destructure_map(map__97165);
var runtime = map__97165__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97165__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__97179,key,p__97180){
var map__97182 = p__97179;
var map__97182__$1 = cljs.core.__destructure_map(map__97182);
var state = map__97182__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97182__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__97183 = p__97180;
var map__97183__$1 = cljs.core.__destructure_map(map__97183);
var spec = map__97183__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97183__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97183__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__97186,key,spec){
var map__97187 = p__97186;
var map__97187__$1 = cljs.core.__destructure_map(map__97187);
var runtime = map__97187__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97187__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___97455 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___97455 == null)){
} else {
var on_welcome_97456 = temp__5827__auto___97455;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_97456.cljs$core$IFn$_invoke$arity$0 ? on_welcome_97456.cljs$core$IFn$_invoke$arity$0() : on_welcome_97456.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__97191_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__97191_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__97192_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__97192_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__97193_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__97193_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__97194_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__97194_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__97195_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__97195_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__97206,key){
var map__97208 = p__97206;
var map__97208__$1 = cljs.core.__destructure_map(map__97208);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97208__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__97214,msg){
var map__97215 = p__97214;
var map__97215__$1 = cljs.core.__destructure_map(map__97215);
var runtime = map__97215__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97215__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__97242,p__97243){
var map__97244 = p__97242;
var map__97244__$1 = cljs.core.__destructure_map(map__97244);
var runtime = map__97244__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97244__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__97245 = p__97243;
var map__97245__$1 = cljs.core.__destructure_map(map__97245);
var msg = map__97245__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97245__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97245__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__97253 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__97255 = null;
var count__97256 = (0);
var i__97257 = (0);
while(true){
if((i__97257 < count__97256)){
var map__97270 = chunk__97255.cljs$core$IIndexed$_nth$arity$2(null,i__97257);
var map__97270__$1 = cljs.core.__destructure_map(map__97270);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97270__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__97482 = seq__97253;
var G__97483 = chunk__97255;
var G__97484 = count__97256;
var G__97485 = (i__97257 + (1));
seq__97253 = G__97482;
chunk__97255 = G__97483;
count__97256 = G__97484;
i__97257 = G__97485;
continue;
} else {
var G__97486 = seq__97253;
var G__97487 = chunk__97255;
var G__97488 = count__97256;
var G__97489 = (i__97257 + (1));
seq__97253 = G__97486;
chunk__97255 = G__97487;
count__97256 = G__97488;
i__97257 = G__97489;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__97253);
if(temp__5823__auto__){
var seq__97253__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__97253__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__97253__$1);
var G__97490 = cljs.core.chunk_rest(seq__97253__$1);
var G__97491 = c__5548__auto__;
var G__97492 = cljs.core.count(c__5548__auto__);
var G__97493 = (0);
seq__97253 = G__97490;
chunk__97255 = G__97491;
count__97256 = G__97492;
i__97257 = G__97493;
continue;
} else {
var map__97275 = cljs.core.first(seq__97253__$1);
var map__97275__$1 = cljs.core.__destructure_map(map__97275);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97275__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__97499 = cljs.core.next(seq__97253__$1);
var G__97500 = null;
var G__97501 = (0);
var G__97502 = (0);
seq__97253 = G__97499;
chunk__97255 = G__97500;
count__97256 = G__97501;
i__97257 = G__97502;
continue;
} else {
var G__97503 = cljs.core.next(seq__97253__$1);
var G__97504 = null;
var G__97505 = (0);
var G__97506 = (0);
seq__97253 = G__97503;
chunk__97255 = G__97504;
count__97256 = G__97505;
i__97257 = G__97506;
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
