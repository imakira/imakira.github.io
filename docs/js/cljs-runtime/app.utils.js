goog.provide('app.utils');
goog.scope(function(){
  app.utils.goog$module$goog$object = goog.module.get('goog.object');
  app.utils.goog$module$goog$async$Throttle = goog.module.get('goog.async.Throttle');
});
var module$node_modules$axios$dist$browser$axios_cjs=shadow.js.require("module$node_modules$axios$dist$browser$axios_cjs", {});
app.utils.SERVER_PATH = window.__server_path;
app.utils.fetch_asset = (function app$utils$fetch_asset(path){
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__62300__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62301__auto__ = (function (){var switch__62226__auto__ = (function (state_63392){
var state_val_63393 = (state_63392[(1)]);
if((state_val_63393 === (1))){
var inst_63383 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.utils.SERVER_PATH),"assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var inst_63384 = module$node_modules$axios$dist$browser$axios_cjs.get(inst_63383);
var inst_63385 = (function (){return (function (resp){
var c__62300__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62301__auto__ = (function (){var switch__62226__auto__ = (function (state_63417){
var state_val_63418 = (state_63417[(1)]);
if((state_val_63418 === (1))){
var inst_63411 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(resp,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_63412 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_63411);
var state_63417__$1 = state_63417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63417__$1,(2),chan,inst_63412);
} else {
if((state_val_63418 === (2))){
var inst_63414 = (state_63417[(2)]);
var state_63417__$1 = state_63417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63417__$1,inst_63414);
} else {
return null;
}
}
});
return (function() {
var app$utils$fetch_asset_$_state_machine__62227__auto__ = null;
var app$utils$fetch_asset_$_state_machine__62227__auto____0 = (function (){
var statearr_63423 = [null,null,null,null,null,null,null];
(statearr_63423[(0)] = app$utils$fetch_asset_$_state_machine__62227__auto__);

(statearr_63423[(1)] = (1));

return statearr_63423;
});
var app$utils$fetch_asset_$_state_machine__62227__auto____1 = (function (state_63417){
while(true){
var ret_value__62228__auto__ = (function (){try{while(true){
var result__62229__auto__ = switch__62226__auto__(state_63417);
if(cljs.core.keyword_identical_QMARK_(result__62229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62229__auto__;
}
break;
}
}catch (e63424){var ex__62230__auto__ = e63424;
var statearr_63425_63501 = state_63417;
(statearr_63425_63501[(2)] = ex__62230__auto__);


if(cljs.core.seq((state_63417[(4)]))){
var statearr_63426_63502 = state_63417;
(statearr_63426_63502[(1)] = cljs.core.first((state_63417[(4)])));

} else {
throw ex__62230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63503 = state_63417;
state_63417 = G__63503;
continue;
} else {
return ret_value__62228__auto__;
}
break;
}
});
app$utils$fetch_asset_$_state_machine__62227__auto__ = function(state_63417){
switch(arguments.length){
case 0:
return app$utils$fetch_asset_$_state_machine__62227__auto____0.call(this);
case 1:
return app$utils$fetch_asset_$_state_machine__62227__auto____1.call(this,state_63417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$utils$fetch_asset_$_state_machine__62227__auto__.cljs$core$IFn$_invoke$arity$0 = app$utils$fetch_asset_$_state_machine__62227__auto____0;
app$utils$fetch_asset_$_state_machine__62227__auto__.cljs$core$IFn$_invoke$arity$1 = app$utils$fetch_asset_$_state_machine__62227__auto____1;
return app$utils$fetch_asset_$_state_machine__62227__auto__;
})()
})();
var state__62302__auto__ = (function (){var statearr_63427 = f__62301__auto__();
(statearr_63427[(6)] = c__62300__auto____$1);

return statearr_63427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62302__auto__);
}));

return c__62300__auto____$1;
});
})();
var inst_63386 = inst_63384.then(inst_63385);
var inst_63387 = (function (){return (function (error){
var c__62300__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62301__auto__ = (function (){var switch__62226__auto__ = (function (state_63432){
var state_val_63433 = (state_63432[(1)]);
if((state_val_63433 === (1))){
var inst_63428 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252)], 0));
var state_63432__$1 = state_63432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63432__$1,(2),chan,inst_63428);
} else {
if((state_val_63433 === (2))){
var inst_63430 = (state_63432[(2)]);
var state_63432__$1 = state_63432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63432__$1,inst_63430);
} else {
return null;
}
}
});
return (function() {
var app$utils$fetch_asset_$_state_machine__62227__auto__ = null;
var app$utils$fetch_asset_$_state_machine__62227__auto____0 = (function (){
var statearr_63434 = [null,null,null,null,null,null,null];
(statearr_63434[(0)] = app$utils$fetch_asset_$_state_machine__62227__auto__);

(statearr_63434[(1)] = (1));

return statearr_63434;
});
var app$utils$fetch_asset_$_state_machine__62227__auto____1 = (function (state_63432){
while(true){
var ret_value__62228__auto__ = (function (){try{while(true){
var result__62229__auto__ = switch__62226__auto__(state_63432);
if(cljs.core.keyword_identical_QMARK_(result__62229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62229__auto__;
}
break;
}
}catch (e63435){var ex__62230__auto__ = e63435;
var statearr_63436_63504 = state_63432;
(statearr_63436_63504[(2)] = ex__62230__auto__);


if(cljs.core.seq((state_63432[(4)]))){
var statearr_63437_63505 = state_63432;
(statearr_63437_63505[(1)] = cljs.core.first((state_63432[(4)])));

} else {
throw ex__62230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63506 = state_63432;
state_63432 = G__63506;
continue;
} else {
return ret_value__62228__auto__;
}
break;
}
});
app$utils$fetch_asset_$_state_machine__62227__auto__ = function(state_63432){
switch(arguments.length){
case 0:
return app$utils$fetch_asset_$_state_machine__62227__auto____0.call(this);
case 1:
return app$utils$fetch_asset_$_state_machine__62227__auto____1.call(this,state_63432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$utils$fetch_asset_$_state_machine__62227__auto__.cljs$core$IFn$_invoke$arity$0 = app$utils$fetch_asset_$_state_machine__62227__auto____0;
app$utils$fetch_asset_$_state_machine__62227__auto__.cljs$core$IFn$_invoke$arity$1 = app$utils$fetch_asset_$_state_machine__62227__auto____1;
return app$utils$fetch_asset_$_state_machine__62227__auto__;
})()
})();
var state__62302__auto__ = (function (){var statearr_63438 = f__62301__auto__();
(statearr_63438[(6)] = c__62300__auto____$1);

return statearr_63438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62302__auto__);
}));

return c__62300__auto____$1;
});
})();
var inst_63388 = inst_63386.catch(inst_63387);
var state_63392__$1 = (function (){var statearr_63439 = state_63392;
(statearr_63439[(7)] = inst_63388);

return statearr_63439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63392__$1,(2),chan);
} else {
if((state_val_63393 === (2))){
var inst_63390 = (state_63392[(2)]);
var state_63392__$1 = state_63392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63392__$1,inst_63390);
} else {
return null;
}
}
});
return (function() {
var app$utils$fetch_asset_$_state_machine__62227__auto__ = null;
var app$utils$fetch_asset_$_state_machine__62227__auto____0 = (function (){
var statearr_63440 = [null,null,null,null,null,null,null,null];
(statearr_63440[(0)] = app$utils$fetch_asset_$_state_machine__62227__auto__);

(statearr_63440[(1)] = (1));

return statearr_63440;
});
var app$utils$fetch_asset_$_state_machine__62227__auto____1 = (function (state_63392){
while(true){
var ret_value__62228__auto__ = (function (){try{while(true){
var result__62229__auto__ = switch__62226__auto__(state_63392);
if(cljs.core.keyword_identical_QMARK_(result__62229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62229__auto__;
}
break;
}
}catch (e63441){var ex__62230__auto__ = e63441;
var statearr_63442_63507 = state_63392;
(statearr_63442_63507[(2)] = ex__62230__auto__);


if(cljs.core.seq((state_63392[(4)]))){
var statearr_63443_63508 = state_63392;
(statearr_63443_63508[(1)] = cljs.core.first((state_63392[(4)])));

} else {
throw ex__62230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63509 = state_63392;
state_63392 = G__63509;
continue;
} else {
return ret_value__62228__auto__;
}
break;
}
});
app$utils$fetch_asset_$_state_machine__62227__auto__ = function(state_63392){
switch(arguments.length){
case 0:
return app$utils$fetch_asset_$_state_machine__62227__auto____0.call(this);
case 1:
return app$utils$fetch_asset_$_state_machine__62227__auto____1.call(this,state_63392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$utils$fetch_asset_$_state_machine__62227__auto__.cljs$core$IFn$_invoke$arity$0 = app$utils$fetch_asset_$_state_machine__62227__auto____0;
app$utils$fetch_asset_$_state_machine__62227__auto__.cljs$core$IFn$_invoke$arity$1 = app$utils$fetch_asset_$_state_machine__62227__auto____1;
return app$utils$fetch_asset_$_state_machine__62227__auto__;
})()
})();
var state__62302__auto__ = (function (){var statearr_63444 = f__62301__auto__();
(statearr_63444[(6)] = c__62300__auto__);

return statearr_63444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62302__auto__);
}));

return c__62300__auto__;
});
app.utils.use_asset = (function app$utils$use_asset(path){
var or__5025__auto__ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((globalThis[path]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var vec__63445 = uix.core.use_state(cljs.core.PersistentArrayMap.EMPTY);
var asset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63445,(0),null);
var set_asset_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63445,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var c__62300__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62301__auto__ = (function (){var switch__62226__auto__ = (function (state_63465){
var state_val_63466 = (state_63465[(1)]);
if((state_val_63466 === (1))){
var inst_63460 = app.utils.fetch_asset(path);
var state_63465__$1 = state_63465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63465__$1,(2),inst_63460);
} else {
if((state_val_63466 === (2))){
var inst_63462 = (state_63465[(2)]);
var inst_63463 = (set_asset_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_asset_BANG_.cljs$core$IFn$_invoke$arity$1(inst_63462) : set_asset_BANG_.call(null,inst_63462));
var state_63465__$1 = state_63465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63465__$1,inst_63463);
} else {
return null;
}
}
});
return (function() {
var app$utils$use_asset_$_state_machine__62227__auto__ = null;
var app$utils$use_asset_$_state_machine__62227__auto____0 = (function (){
var statearr_63467 = [null,null,null,null,null,null,null];
(statearr_63467[(0)] = app$utils$use_asset_$_state_machine__62227__auto__);

(statearr_63467[(1)] = (1));

return statearr_63467;
});
var app$utils$use_asset_$_state_machine__62227__auto____1 = (function (state_63465){
while(true){
var ret_value__62228__auto__ = (function (){try{while(true){
var result__62229__auto__ = switch__62226__auto__(state_63465);
if(cljs.core.keyword_identical_QMARK_(result__62229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62229__auto__;
}
break;
}
}catch (e63468){var ex__62230__auto__ = e63468;
var statearr_63469_63510 = state_63465;
(statearr_63469_63510[(2)] = ex__62230__auto__);


if(cljs.core.seq((state_63465[(4)]))){
var statearr_63470_63511 = state_63465;
(statearr_63470_63511[(1)] = cljs.core.first((state_63465[(4)])));

} else {
throw ex__62230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63512 = state_63465;
state_63465 = G__63512;
continue;
} else {
return ret_value__62228__auto__;
}
break;
}
});
app$utils$use_asset_$_state_machine__62227__auto__ = function(state_63465){
switch(arguments.length){
case 0:
return app$utils$use_asset_$_state_machine__62227__auto____0.call(this);
case 1:
return app$utils$use_asset_$_state_machine__62227__auto____1.call(this,state_63465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$utils$use_asset_$_state_machine__62227__auto__.cljs$core$IFn$_invoke$arity$0 = app$utils$use_asset_$_state_machine__62227__auto____0;
app$utils$use_asset_$_state_machine__62227__auto__.cljs$core$IFn$_invoke$arity$1 = app$utils$use_asset_$_state_machine__62227__auto____1;
return app$utils$use_asset_$_state_machine__62227__auto__;
})()
})();
var state__62302__auto__ = (function (){var statearr_63471 = f__62301__auto__();
(statearr_63471[(6)] = c__62300__auto__);

return statearr_63471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62302__auto__);
}));

return c__62300__auto__;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("uix.core","$","uix.core/$",-1139051715,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-Provider",".-Provider",779486627,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(binding),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,cljs.core.second(binding),null,(1),null)))))),null,(1),null)),((cljs.core.empty_QMARK_(cljs.core.rest(bindings)))?body:(new cljs.core.List(null,(function (){var G__63472 = cljs.core.rest(bindings);
var G__63473 = body;
return (app.utils.do_cljs_bindings.cljs$core$IFn$_invoke$arity$2 ? app.utils.do_cljs_bindings.cljs$core$IFn$_invoke$arity$2(G__63472,G__63473) : app.utils.do_cljs_bindings.call(null,G__63472,G__63473));
})(),null,(1),null)))], 0))));
}
});
app.utils.do_clj_bindings = (function app$utils$do_clj_bindings(bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","letfn","cljs.core/letfn",-874326064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__63474__auto__","wrap-fn__63474__auto__",-2106588729,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f__63475__auto__","f__63475__auto__",262286571,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__63476__auto__","args__63476__auto__",1037242562,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"node__63477__auto__","node__63477__auto__",-1424970515,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hzip","hiccup-zip","hzip/hiccup-zip",-1644189562,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__63475__auto__","f__63475__auto__",262286571,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__63476__auto__","args__63476__auto__",1037242562,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","end?","clojure.zip/end?",381053413,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__63477__auto__","node__63477__auto__",-1424970515,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","root","clojure.zip/root",-1119588559,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__63477__auto__","node__63477__auto__",-1424970515,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__63477__auto__","node__63477__auto__",-1424970515,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","next","clojure.zip/next",-1526224397,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","replace","clojure.zip/replace",413367034,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__63477__auto__","node__63477__auto__",-1424970515,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__63477__auto__","node__63477__auto__",-1424970515,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__63474__auto__","wrap-fn__63474__auto__",-2106588729,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__63477__auto__","node__63477__auto__",-1424970515,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","next","clojure.zip/next",-1526224397,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__63477__auto__","node__63477__auto__",-1424970515,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__63474__auto__","wrap-fn__63474__auto__",-2106588729,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
});
app.utils.disposable__GT_function = (function app$utils$disposable__GT_function(disposable,listener,interval){
var disposable_instance = (new disposable(listener,interval));
return (function() { 
var G__63527__delegate = function (args){
return disposable_instance.fire.apply(disposable_instance,cljs.core.to_array(args));
};
var G__63527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63528__i = 0, G__63528__a = new Array(arguments.length -  0);
while (G__63528__i < G__63528__a.length) {G__63528__a[G__63528__i] = arguments[G__63528__i + 0]; ++G__63528__i;}
  args = new cljs.core.IndexedSeq(G__63528__a,0,null);
} 
return G__63527__delegate.call(this,args);};
G__63527.cljs$lang$maxFixedArity = 0;
G__63527.cljs$lang$applyTo = (function (arglist__63529){
var args = cljs.core.seq(arglist__63529);
return G__63527__delegate(args);
});
G__63527.cljs$core$IFn$_invoke$arity$variadic = G__63527__delegate;
return G__63527;
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
var len__5749__auto___63530 = arguments.length;
var i__5750__auto___63531 = (0);
while(true){
if((i__5750__auto___63531 < len__5749__auto___63530)){
args__5755__auto__.push((arguments[i__5750__auto___63531]));

var G__63532 = (i__5750__auto___63531 + (1));
i__5750__auto___63531 = G__63532;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (obj,p__63480){
var map__63481 = p__63480;
var map__63481__$1 = cljs.core.__destructure_map(map__63481);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63481__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var max_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63481__$1,new cljs.core.Keyword(null,"max-level","max-level",122449960));
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
(app.utils.recur_obj__GT_clj.cljs$lang$applyTo = (function (seq63478){
var G__63479 = cljs.core.first(seq63478);
var seq63478__$1 = cljs.core.next(seq63478);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63479,seq63478__$1);
}));

app.utils.obj__GT_clj = (function app$utils$obj__GT_clj(var_args){
var args__5755__auto__ = [];
var len__5749__auto___63533 = arguments.length;
var i__5750__auto___63534 = (0);
while(true){
if((i__5750__auto___63534 < len__5749__auto___63533)){
args__5755__auto__.push((arguments[i__5750__auto___63534]));

var G__63535 = (i__5750__auto___63534 + (1));
i__5750__auto___63534 = G__63535;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (obj,p__63484){
var map__63485 = p__63484;
var map__63485__$1 = cljs.core.__destructure_map(map__63485);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63485__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return app.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-level","max-level",122449960),(1)], 0));
}));

(app.utils.obj__GT_clj.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.utils.obj__GT_clj.cljs$lang$applyTo = (function (seq63482){
var G__63483 = cljs.core.first(seq63482);
var seq63482__$1 = cljs.core.next(seq63482);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63483,seq63482__$1);
}));

app.utils.set_css_variable_BANG_ = (function app$utils$set_css_variable_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___63538 = arguments.length;
var i__5750__auto___63539 = (0);
while(true){
if((i__5750__auto___63539 < len__5749__auto___63538)){
args__5755__auto__.push((arguments[i__5750__auto___63539]));

var G__63540 = (i__5750__auto___63539 + (1));
i__5750__auto___63539 = G__63540;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.utils.set_css_variable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.utils.set_css_variable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (var$,value,p__63489){
var vec__63490 = p__63489;
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63490,(0),null);
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
(app.utils.set_css_variable_BANG_.cljs$lang$applyTo = (function (seq63486){
var G__63487 = cljs.core.first(seq63486);
var seq63486__$1 = cljs.core.next(seq63486);
var G__63488 = cljs.core.first(seq63486__$1);
var seq63486__$2 = cljs.core.next(seq63486__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63487,G__63488,seq63486__$2);
}));


//# sourceMappingURL=app.utils.js.map
