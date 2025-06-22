goog.provide('app.utils');
goog.scope(function(){
  app.utils.goog$module$goog$object = goog.module.get('goog.object');
  app.utils.goog$module$goog$async$Throttle = goog.module.get('goog.async.Throttle');
});
var module$node_modules$axios$dist$browser$axios_cjs=shadow.js.require("module$node_modules$axios$dist$browser$axios_cjs", {});
app.utils.SERVER_PATH = window.__server_path;
app.utils.fetch_asset = (function app$utils$fetch_asset(path){
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__46456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46457__auto__ = (function (){var switch__46382__auto__ = (function (state_47514){
var state_val_47515 = (state_47514[(1)]);
if((state_val_47515 === (1))){
var inst_47505 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.utils.SERVER_PATH),"assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var inst_47506 = module$node_modules$axios$dist$browser$axios_cjs.get(inst_47505);
var inst_47507 = (function (){return (function (resp){
var c__46456__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46457__auto__ = (function (){var switch__46382__auto__ = (function (state_47521){
var state_val_47522 = (state_47521[(1)]);
if((state_val_47522 === (1))){
var inst_47516 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(resp,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_47517 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_47516);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47521__$1,(2),chan,inst_47517);
} else {
if((state_val_47522 === (2))){
var inst_47519 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47521__$1,inst_47519);
} else {
return null;
}
}
});
return (function() {
var app$utils$fetch_asset_$_state_machine__46383__auto__ = null;
var app$utils$fetch_asset_$_state_machine__46383__auto____0 = (function (){
var statearr_47533 = [null,null,null,null,null,null,null];
(statearr_47533[(0)] = app$utils$fetch_asset_$_state_machine__46383__auto__);

(statearr_47533[(1)] = (1));

return statearr_47533;
});
var app$utils$fetch_asset_$_state_machine__46383__auto____1 = (function (state_47521){
while(true){
var ret_value__46384__auto__ = (function (){try{while(true){
var result__46385__auto__ = switch__46382__auto__(state_47521);
if(cljs.core.keyword_identical_QMARK_(result__46385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46385__auto__;
}
break;
}
}catch (e47539){var ex__46386__auto__ = e47539;
var statearr_47540_47630 = state_47521;
(statearr_47540_47630[(2)] = ex__46386__auto__);


if(cljs.core.seq((state_47521[(4)]))){
var statearr_47541_47631 = state_47521;
(statearr_47541_47631[(1)] = cljs.core.first((state_47521[(4)])));

} else {
throw ex__46386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47632 = state_47521;
state_47521 = G__47632;
continue;
} else {
return ret_value__46384__auto__;
}
break;
}
});
app$utils$fetch_asset_$_state_machine__46383__auto__ = function(state_47521){
switch(arguments.length){
case 0:
return app$utils$fetch_asset_$_state_machine__46383__auto____0.call(this);
case 1:
return app$utils$fetch_asset_$_state_machine__46383__auto____1.call(this,state_47521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$utils$fetch_asset_$_state_machine__46383__auto__.cljs$core$IFn$_invoke$arity$0 = app$utils$fetch_asset_$_state_machine__46383__auto____0;
app$utils$fetch_asset_$_state_machine__46383__auto__.cljs$core$IFn$_invoke$arity$1 = app$utils$fetch_asset_$_state_machine__46383__auto____1;
return app$utils$fetch_asset_$_state_machine__46383__auto__;
})()
})();
var state__46458__auto__ = (function (){var statearr_47542 = f__46457__auto__();
(statearr_47542[(6)] = c__46456__auto____$1);

return statearr_47542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46458__auto__);
}));

return c__46456__auto____$1;
});
})();
var inst_47508 = inst_47506.then(inst_47507);
var inst_47509 = (function (){return (function (error){
var c__46456__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46457__auto__ = (function (){var switch__46382__auto__ = (function (state_47547){
var state_val_47548 = (state_47547[(1)]);
if((state_val_47548 === (1))){
var inst_47543 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252)], 0));
var state_47547__$1 = state_47547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47547__$1,(2),chan,inst_47543);
} else {
if((state_val_47548 === (2))){
var inst_47545 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47547__$1,inst_47545);
} else {
return null;
}
}
});
return (function() {
var app$utils$fetch_asset_$_state_machine__46383__auto__ = null;
var app$utils$fetch_asset_$_state_machine__46383__auto____0 = (function (){
var statearr_47549 = [null,null,null,null,null,null,null];
(statearr_47549[(0)] = app$utils$fetch_asset_$_state_machine__46383__auto__);

(statearr_47549[(1)] = (1));

return statearr_47549;
});
var app$utils$fetch_asset_$_state_machine__46383__auto____1 = (function (state_47547){
while(true){
var ret_value__46384__auto__ = (function (){try{while(true){
var result__46385__auto__ = switch__46382__auto__(state_47547);
if(cljs.core.keyword_identical_QMARK_(result__46385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46385__auto__;
}
break;
}
}catch (e47550){var ex__46386__auto__ = e47550;
var statearr_47551_47641 = state_47547;
(statearr_47551_47641[(2)] = ex__46386__auto__);


if(cljs.core.seq((state_47547[(4)]))){
var statearr_47552_47642 = state_47547;
(statearr_47552_47642[(1)] = cljs.core.first((state_47547[(4)])));

} else {
throw ex__46386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47643 = state_47547;
state_47547 = G__47643;
continue;
} else {
return ret_value__46384__auto__;
}
break;
}
});
app$utils$fetch_asset_$_state_machine__46383__auto__ = function(state_47547){
switch(arguments.length){
case 0:
return app$utils$fetch_asset_$_state_machine__46383__auto____0.call(this);
case 1:
return app$utils$fetch_asset_$_state_machine__46383__auto____1.call(this,state_47547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$utils$fetch_asset_$_state_machine__46383__auto__.cljs$core$IFn$_invoke$arity$0 = app$utils$fetch_asset_$_state_machine__46383__auto____0;
app$utils$fetch_asset_$_state_machine__46383__auto__.cljs$core$IFn$_invoke$arity$1 = app$utils$fetch_asset_$_state_machine__46383__auto____1;
return app$utils$fetch_asset_$_state_machine__46383__auto__;
})()
})();
var state__46458__auto__ = (function (){var statearr_47553 = f__46457__auto__();
(statearr_47553[(6)] = c__46456__auto____$1);

return statearr_47553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46458__auto__);
}));

return c__46456__auto____$1;
});
})();
var inst_47510 = inst_47508.catch(inst_47509);
var state_47514__$1 = (function (){var statearr_47554 = state_47514;
(statearr_47554[(7)] = inst_47510);

return statearr_47554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47514__$1,(2),chan);
} else {
if((state_val_47515 === (2))){
var inst_47512 = (state_47514[(2)]);
var state_47514__$1 = state_47514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47514__$1,inst_47512);
} else {
return null;
}
}
});
return (function() {
var app$utils$fetch_asset_$_state_machine__46383__auto__ = null;
var app$utils$fetch_asset_$_state_machine__46383__auto____0 = (function (){
var statearr_47555 = [null,null,null,null,null,null,null,null];
(statearr_47555[(0)] = app$utils$fetch_asset_$_state_machine__46383__auto__);

(statearr_47555[(1)] = (1));

return statearr_47555;
});
var app$utils$fetch_asset_$_state_machine__46383__auto____1 = (function (state_47514){
while(true){
var ret_value__46384__auto__ = (function (){try{while(true){
var result__46385__auto__ = switch__46382__auto__(state_47514);
if(cljs.core.keyword_identical_QMARK_(result__46385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46385__auto__;
}
break;
}
}catch (e47556){var ex__46386__auto__ = e47556;
var statearr_47557_47644 = state_47514;
(statearr_47557_47644[(2)] = ex__46386__auto__);


if(cljs.core.seq((state_47514[(4)]))){
var statearr_47558_47645 = state_47514;
(statearr_47558_47645[(1)] = cljs.core.first((state_47514[(4)])));

} else {
throw ex__46386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47646 = state_47514;
state_47514 = G__47646;
continue;
} else {
return ret_value__46384__auto__;
}
break;
}
});
app$utils$fetch_asset_$_state_machine__46383__auto__ = function(state_47514){
switch(arguments.length){
case 0:
return app$utils$fetch_asset_$_state_machine__46383__auto____0.call(this);
case 1:
return app$utils$fetch_asset_$_state_machine__46383__auto____1.call(this,state_47514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$utils$fetch_asset_$_state_machine__46383__auto__.cljs$core$IFn$_invoke$arity$0 = app$utils$fetch_asset_$_state_machine__46383__auto____0;
app$utils$fetch_asset_$_state_machine__46383__auto__.cljs$core$IFn$_invoke$arity$1 = app$utils$fetch_asset_$_state_machine__46383__auto____1;
return app$utils$fetch_asset_$_state_machine__46383__auto__;
})()
})();
var state__46458__auto__ = (function (){var statearr_47559 = f__46457__auto__();
(statearr_47559[(6)] = c__46456__auto__);

return statearr_47559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46458__auto__);
}));

return c__46456__auto__;
});
app.utils.use_asset = (function app$utils$use_asset(path){
var or__5025__auto__ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((globalThis[path]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var vec__47578 = uix.core.use_state(cljs.core.PersistentArrayMap.EMPTY);
var asset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47578,(0),null);
var set_asset_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47578,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var c__46456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46457__auto__ = (function (){var switch__46382__auto__ = (function (state_47602){
var state_val_47603 = (state_47602[(1)]);
if((state_val_47603 === (1))){
var inst_47597 = app.utils.fetch_asset(path);
var state_47602__$1 = state_47602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47602__$1,(2),inst_47597);
} else {
if((state_val_47603 === (2))){
var inst_47599 = (state_47602[(2)]);
var inst_47600 = (set_asset_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_asset_BANG_.cljs$core$IFn$_invoke$arity$1(inst_47599) : set_asset_BANG_.call(null,inst_47599));
var state_47602__$1 = state_47602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47602__$1,inst_47600);
} else {
return null;
}
}
});
return (function() {
var app$utils$use_asset_$_state_machine__46383__auto__ = null;
var app$utils$use_asset_$_state_machine__46383__auto____0 = (function (){
var statearr_47604 = [null,null,null,null,null,null,null];
(statearr_47604[(0)] = app$utils$use_asset_$_state_machine__46383__auto__);

(statearr_47604[(1)] = (1));

return statearr_47604;
});
var app$utils$use_asset_$_state_machine__46383__auto____1 = (function (state_47602){
while(true){
var ret_value__46384__auto__ = (function (){try{while(true){
var result__46385__auto__ = switch__46382__auto__(state_47602);
if(cljs.core.keyword_identical_QMARK_(result__46385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46385__auto__;
}
break;
}
}catch (e47605){var ex__46386__auto__ = e47605;
var statearr_47606_47647 = state_47602;
(statearr_47606_47647[(2)] = ex__46386__auto__);


if(cljs.core.seq((state_47602[(4)]))){
var statearr_47607_47648 = state_47602;
(statearr_47607_47648[(1)] = cljs.core.first((state_47602[(4)])));

} else {
throw ex__46386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47649 = state_47602;
state_47602 = G__47649;
continue;
} else {
return ret_value__46384__auto__;
}
break;
}
});
app$utils$use_asset_$_state_machine__46383__auto__ = function(state_47602){
switch(arguments.length){
case 0:
return app$utils$use_asset_$_state_machine__46383__auto____0.call(this);
case 1:
return app$utils$use_asset_$_state_machine__46383__auto____1.call(this,state_47602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$utils$use_asset_$_state_machine__46383__auto__.cljs$core$IFn$_invoke$arity$0 = app$utils$use_asset_$_state_machine__46383__auto____0;
app$utils$use_asset_$_state_machine__46383__auto__.cljs$core$IFn$_invoke$arity$1 = app$utils$use_asset_$_state_machine__46383__auto____1;
return app$utils$use_asset_$_state_machine__46383__auto__;
})()
})();
var state__46458__auto__ = (function (){var statearr_47608 = f__46457__auto__();
(statearr_47608[(6)] = c__46456__auto__);

return statearr_47608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46458__auto__);
}));

return c__46456__auto__;
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null))]);

return asset;
}
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
app.utils.cljs_env_QMARK_ = (function app$utils$cljs_env_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
app.utils.do_cljs_bindings = (function app$utils$do_cljs_bindings(bindings,body){
if(cljs.core.empty_QMARK_(bindings)){
return body;
} else {
var binding = cljs.core.first(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("uix.core","$","uix.core/$",-1139051715,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-Provider",".-Provider",779486627,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(binding),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,cljs.core.second(binding),null,(1),null)))))),null,(1),null)),((cljs.core.empty_QMARK_(cljs.core.rest(bindings)))?body:(new cljs.core.List(null,(function (){var G__47609 = cljs.core.rest(bindings);
var G__47610 = body;
return (app.utils.do_cljs_bindings.cljs$core$IFn$_invoke$arity$2 ? app.utils.do_cljs_bindings.cljs$core$IFn$_invoke$arity$2(G__47609,G__47610) : app.utils.do_cljs_bindings.call(null,G__47609,G__47610));
})(),null,(1),null)))], 0))));
}
});
app.utils.do_clj_bindings = (function app$utils$do_clj_bindings(bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","letfn","cljs.core/letfn",-874326064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__47611__auto__","wrap-fn__47611__auto__",1001083882,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f__47612__auto__","f__47612__auto__",-243383120,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__47613__auto__","args__47613__auto__",702574756,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"node__47614__auto__","node__47614__auto__",-2004564749,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hzip","hiccup-zip","hzip/hiccup-zip",-1644189562,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__47612__auto__","f__47612__auto__",-243383120,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__47613__auto__","args__47613__auto__",702574756,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","end?","clojure.zip/end?",381053413,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__47614__auto__","node__47614__auto__",-2004564749,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","root","clojure.zip/root",-1119588559,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__47614__auto__","node__47614__auto__",-2004564749,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__47614__auto__","node__47614__auto__",-2004564749,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","next","clojure.zip/next",-1526224397,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","replace","clojure.zip/replace",413367034,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__47614__auto__","node__47614__auto__",-2004564749,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__47614__auto__","node__47614__auto__",-2004564749,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__47611__auto__","wrap-fn__47611__auto__",1001083882,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__47614__auto__","node__47614__auto__",-2004564749,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","next","clojure.zip/next",-1526224397,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__47614__auto__","node__47614__auto__",-2004564749,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__47611__auto__","wrap-fn__47611__auto__",1001083882,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
});
app.utils.disposable__GT_function = (function app$utils$disposable__GT_function(disposable,listener,interval){
var disposable_instance = (new disposable(listener,interval));
return (function() { 
var G__47656__delegate = function (args){
return disposable_instance.fire.apply(disposable_instance,cljs.core.to_array(args));
};
var G__47656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47657__i = 0, G__47657__a = new Array(arguments.length -  0);
while (G__47657__i < G__47657__a.length) {G__47657__a[G__47657__i] = arguments[G__47657__i + 0]; ++G__47657__i;}
  args = new cljs.core.IndexedSeq(G__47657__a,0,null);
} 
return G__47656__delegate.call(this,args);};
G__47656.cljs$lang$maxFixedArity = 0;
G__47656.cljs$lang$applyTo = (function (arglist__47658){
var args = cljs.core.seq(arglist__47658);
return G__47656__delegate(args);
});
G__47656.cljs$core$IFn$_invoke$arity$variadic = G__47656__delegate;
return G__47656;
})()
;
});
app.utils.throttle = (function app$utils$throttle(listener,interval){
return app.utils.disposable__GT_function(app.utils.goog$module$goog$async$Throttle,listener,interval);
});
app.utils.debounce = (function app$utils$debounce(listener,interval){
return app.utils.disposable__GT_function(goog.async.Debouncer,listener,interval);
});
app.utils.recur_obj__GT_clj = (function app$utils$recur_obj__GT_clj(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47667 = arguments.length;
var i__5750__auto___47668 = (0);
while(true){
if((i__5750__auto___47668 < len__5749__auto___47667)){
args__5755__auto__.push((arguments[i__5750__auto___47668]));

var G__47669 = (i__5750__auto___47668 + (1));
i__5750__auto___47668 = G__47669;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (obj,p__47617){
var map__47618 = p__47617;
var map__47618__$1 = cljs.core.__destructure_map(map__47618);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47618__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var max_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47618__$1,new cljs.core.Keyword(null,"max-level","max-level",122449960));
if((((!((max_level == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_level,(0))))){
return obj;
} else {
if(cljs.core.truth_(Array.isArray(obj))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return app.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys,new cljs.core.Keyword(null,"max-level","max-level",122449960),(cljs.core.truth_(max_level)?(max_level - (1)):null)], 0));
}),obj));
} else {
if(cljs.core.truth_(goog.isObject(obj))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var v = app.utils.goog$module$goog$object.get(obj,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("function",goog.typeOf(v))){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,(cljs.core.truth_(keywordize_keys)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key):key),app.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys,new cljs.core.Keyword(null,"max-level","max-level",122449960),(cljs.core.truth_(max_level)?(max_level - (1)):null)], 0)));

}
}),cljs.core.PersistentArrayMap.EMPTY,app.utils.goog$module$goog$object.getKeys(obj)));
} else {
return obj;

}
}
}
}));

(app.utils.recur_obj__GT_clj.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.utils.recur_obj__GT_clj.cljs$lang$applyTo = (function (seq47615){
var G__47616 = cljs.core.first(seq47615);
var seq47615__$1 = cljs.core.next(seq47615);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47616,seq47615__$1);
}));

app.utils.obj__GT_clj = (function app$utils$obj__GT_clj(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47670 = arguments.length;
var i__5750__auto___47671 = (0);
while(true){
if((i__5750__auto___47671 < len__5749__auto___47670)){
args__5755__auto__.push((arguments[i__5750__auto___47671]));

var G__47672 = (i__5750__auto___47671 + (1));
i__5750__auto___47671 = G__47672;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (obj,p__47621){
var map__47622 = p__47621;
var map__47622__$1 = cljs.core.__destructure_map(map__47622);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47622__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return app.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-level","max-level",122449960),(1)], 0));
}));

(app.utils.obj__GT_clj.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.utils.obj__GT_clj.cljs$lang$applyTo = (function (seq47619){
var G__47620 = cljs.core.first(seq47619);
var seq47619__$1 = cljs.core.next(seq47619);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47620,seq47619__$1);
}));

app.utils.set_css_variable_BANG_ = (function app$utils$set_css_variable_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47673 = arguments.length;
var i__5750__auto___47674 = (0);
while(true){
if((i__5750__auto___47674 < len__5749__auto___47673)){
args__5755__auto__.push((arguments[i__5750__auto___47674]));

var G__47675 = (i__5750__auto___47674 + (1));
i__5750__auto___47674 = G__47675;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.utils.set_css_variable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.utils.set_css_variable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (var$,value,p__47626){
var vec__47627 = p__47626;
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47627,(0),null);
return (function (){var or__5025__auto__ = element;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return document;
}
})().documentElement.style.setProperty(var$,value);
}));

(app.utils.set_css_variable_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.utils.set_css_variable_BANG_.cljs$lang$applyTo = (function (seq47623){
var G__47624 = cljs.core.first(seq47623);
var seq47623__$1 = cljs.core.next(seq47623);
var G__47625 = cljs.core.first(seq47623__$1);
var seq47623__$2 = cljs.core.next(seq47623__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47624,G__47625,seq47623__$2);
}));


//# sourceMappingURL=app.utils.js.map
