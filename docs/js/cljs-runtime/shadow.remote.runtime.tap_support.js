import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.remote.runtime.api.js";
import "./shadow.remote.runtime.shared.js";
import "./shadow.remote.runtime.obj_support.js";
goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__57404,p__57405){
var map__57406 = p__57404;
var map__57406__$1 = cljs.core.__destructure_map(map__57406);
var svc = map__57406__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57406__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57406__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57406__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__57407 = p__57405;
var map__57407__$1 = cljs.core.__destructure_map(map__57407);
var msg = map__57407__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57407__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57407__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57407__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57407__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__57450,p__57451){
var map__57452 = p__57450;
var map__57452__$1 = cljs.core.__destructure_map(map__57452);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57452__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__57453 = p__57451;
var map__57453__$1 = cljs.core.__destructure_map(map__57453);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57453__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__57459,p__57460){
var map__57461 = p__57459;
var map__57461__$1 = cljs.core.__destructure_map(map__57461);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57461__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57461__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__57462 = p__57460;
var map__57462__$1 = cljs.core.__destructure_map(map__57462);
var msg = map__57462__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57462__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__57465,tid){
var map__57468 = p__57465;
var map__57468__$1 = cljs.core.__destructure_map(map__57468);
var svc = map__57468__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57468__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__57489 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__57490 = null;
var count__57491 = (0);
var i__57492 = (0);
while(true){
if((i__57492 < count__57491)){
var vec__57507 = chunk__57490.cljs$core$IIndexed$_nth$arity$2(null,i__57492);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57507,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57507,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57522 = seq__57489;
var G__57523 = chunk__57490;
var G__57524 = count__57491;
var G__57525 = (i__57492 + (1));
seq__57489 = G__57522;
chunk__57490 = G__57523;
count__57491 = G__57524;
i__57492 = G__57525;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57489);
if(temp__5825__auto__){
var seq__57489__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57489__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__57489__$1);
var G__57527 = cljs.core.chunk_rest(seq__57489__$1);
var G__57528 = c__5673__auto__;
var G__57529 = cljs.core.count(c__5673__auto__);
var G__57530 = (0);
seq__57489 = G__57527;
chunk__57490 = G__57528;
count__57491 = G__57529;
i__57492 = G__57530;
continue;
} else {
var vec__57515 = cljs.core.first(seq__57489__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57515,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57515,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57531 = cljs.core.next(seq__57489__$1);
var G__57532 = null;
var G__57533 = (0);
var G__57534 = (0);
seq__57489 = G__57531;
chunk__57490 = G__57532;
count__57491 = G__57533;
i__57492 = G__57534;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__57477_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__57477_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__57478_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__57478_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__57479_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__57479_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__57480_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__57480_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__57518){
var map__57519 = p__57518;
var map__57519__$1 = cljs.core.__destructure_map(map__57519);
var svc = map__57519__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57519__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57519__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
