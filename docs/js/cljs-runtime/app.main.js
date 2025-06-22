goog.provide('app.main');
var module$node_modules$axios$dist$browser$axios_cjs=shadow.js.require("module$node_modules$axios$dist$browser$axios_cjs", {});
app.main.SERVER_PATH = "http://localhost:3001/";
app.main.fetch_asset = (function app$main$fetch_asset(path){
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__39522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39523__auto__ = (function (){var switch__39401__auto__ = (function (state_53206){
var state_val_53207 = (state_53206[(1)]);
if((state_val_53207 === (1))){
var inst_53197 = [app.main.SERVER_PATH,"assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var inst_53198 = module$node_modules$axios$dist$browser$axios_cjs.get(inst_53197);
var inst_53199 = (function (){return (function (resp){
var c__39522__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39523__auto__ = (function (){var switch__39401__auto__ = (function (state_53213){
var state_val_53214 = (state_53213[(1)]);
if((state_val_53214 === (1))){
var inst_53208 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(resp,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_53209 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_53208);
var state_53213__$1 = state_53213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53213__$1,(2),chan,inst_53209);
} else {
if((state_val_53214 === (2))){
var inst_53211 = (state_53213[(2)]);
var state_53213__$1 = state_53213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53213__$1,inst_53211);
} else {
return null;
}
}
});
return (function() {
var app$main$fetch_asset_$_state_machine__39402__auto__ = null;
var app$main$fetch_asset_$_state_machine__39402__auto____0 = (function (){
var statearr_53215 = [null,null,null,null,null,null,null];
(statearr_53215[(0)] = app$main$fetch_asset_$_state_machine__39402__auto__);

(statearr_53215[(1)] = (1));

return statearr_53215;
});
var app$main$fetch_asset_$_state_machine__39402__auto____1 = (function (state_53213){
while(true){
var ret_value__39403__auto__ = (function (){try{while(true){
var result__39404__auto__ = switch__39401__auto__(state_53213);
if(cljs.core.keyword_identical_QMARK_(result__39404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39404__auto__;
}
break;
}
}catch (e53216){var ex__39405__auto__ = e53216;
var statearr_53217_53264 = state_53213;
(statearr_53217_53264[(2)] = ex__39405__auto__);


if(cljs.core.seq((state_53213[(4)]))){
var statearr_53218_53265 = state_53213;
(statearr_53218_53265[(1)] = cljs.core.first((state_53213[(4)])));

} else {
throw ex__39405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53266 = state_53213;
state_53213 = G__53266;
continue;
} else {
return ret_value__39403__auto__;
}
break;
}
});
app$main$fetch_asset_$_state_machine__39402__auto__ = function(state_53213){
switch(arguments.length){
case 0:
return app$main$fetch_asset_$_state_machine__39402__auto____0.call(this);
case 1:
return app$main$fetch_asset_$_state_machine__39402__auto____1.call(this,state_53213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$fetch_asset_$_state_machine__39402__auto__.cljs$core$IFn$_invoke$arity$0 = app$main$fetch_asset_$_state_machine__39402__auto____0;
app$main$fetch_asset_$_state_machine__39402__auto__.cljs$core$IFn$_invoke$arity$1 = app$main$fetch_asset_$_state_machine__39402__auto____1;
return app$main$fetch_asset_$_state_machine__39402__auto__;
})()
})();
var state__39524__auto__ = (function (){var statearr_53219 = f__39523__auto__();
(statearr_53219[(6)] = c__39522__auto____$1);

return statearr_53219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39524__auto__);
}));

return c__39522__auto____$1;
});
})();
var inst_53200 = inst_53198.then(inst_53199);
var inst_53201 = (function (){return (function (error){
var c__39522__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39523__auto__ = (function (){var switch__39401__auto__ = (function (state_53224){
var state_val_53225 = (state_53224[(1)]);
if((state_val_53225 === (1))){
var inst_53220 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252)], 0));
var state_53224__$1 = state_53224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53224__$1,(2),chan,inst_53220);
} else {
if((state_val_53225 === (2))){
var inst_53222 = (state_53224[(2)]);
var state_53224__$1 = state_53224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53224__$1,inst_53222);
} else {
return null;
}
}
});
return (function() {
var app$main$fetch_asset_$_state_machine__39402__auto__ = null;
var app$main$fetch_asset_$_state_machine__39402__auto____0 = (function (){
var statearr_53226 = [null,null,null,null,null,null,null];
(statearr_53226[(0)] = app$main$fetch_asset_$_state_machine__39402__auto__);

(statearr_53226[(1)] = (1));

return statearr_53226;
});
var app$main$fetch_asset_$_state_machine__39402__auto____1 = (function (state_53224){
while(true){
var ret_value__39403__auto__ = (function (){try{while(true){
var result__39404__auto__ = switch__39401__auto__(state_53224);
if(cljs.core.keyword_identical_QMARK_(result__39404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39404__auto__;
}
break;
}
}catch (e53227){var ex__39405__auto__ = e53227;
var statearr_53228_53267 = state_53224;
(statearr_53228_53267[(2)] = ex__39405__auto__);


if(cljs.core.seq((state_53224[(4)]))){
var statearr_53229_53268 = state_53224;
(statearr_53229_53268[(1)] = cljs.core.first((state_53224[(4)])));

} else {
throw ex__39405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53269 = state_53224;
state_53224 = G__53269;
continue;
} else {
return ret_value__39403__auto__;
}
break;
}
});
app$main$fetch_asset_$_state_machine__39402__auto__ = function(state_53224){
switch(arguments.length){
case 0:
return app$main$fetch_asset_$_state_machine__39402__auto____0.call(this);
case 1:
return app$main$fetch_asset_$_state_machine__39402__auto____1.call(this,state_53224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$fetch_asset_$_state_machine__39402__auto__.cljs$core$IFn$_invoke$arity$0 = app$main$fetch_asset_$_state_machine__39402__auto____0;
app$main$fetch_asset_$_state_machine__39402__auto__.cljs$core$IFn$_invoke$arity$1 = app$main$fetch_asset_$_state_machine__39402__auto____1;
return app$main$fetch_asset_$_state_machine__39402__auto__;
})()
})();
var state__39524__auto__ = (function (){var statearr_53230 = f__39523__auto__();
(statearr_53230[(6)] = c__39522__auto____$1);

return statearr_53230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39524__auto__);
}));

return c__39522__auto____$1;
});
})();
var inst_53202 = inst_53200.catch(inst_53201);
var state_53206__$1 = (function (){var statearr_53231 = state_53206;
(statearr_53231[(7)] = inst_53202);

return statearr_53231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53206__$1,(2),chan);
} else {
if((state_val_53207 === (2))){
var inst_53204 = (state_53206[(2)]);
var state_53206__$1 = state_53206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53206__$1,inst_53204);
} else {
return null;
}
}
});
return (function() {
var app$main$fetch_asset_$_state_machine__39402__auto__ = null;
var app$main$fetch_asset_$_state_machine__39402__auto____0 = (function (){
var statearr_53232 = [null,null,null,null,null,null,null,null];
(statearr_53232[(0)] = app$main$fetch_asset_$_state_machine__39402__auto__);

(statearr_53232[(1)] = (1));

return statearr_53232;
});
var app$main$fetch_asset_$_state_machine__39402__auto____1 = (function (state_53206){
while(true){
var ret_value__39403__auto__ = (function (){try{while(true){
var result__39404__auto__ = switch__39401__auto__(state_53206);
if(cljs.core.keyword_identical_QMARK_(result__39404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39404__auto__;
}
break;
}
}catch (e53233){var ex__39405__auto__ = e53233;
var statearr_53234_53270 = state_53206;
(statearr_53234_53270[(2)] = ex__39405__auto__);


if(cljs.core.seq((state_53206[(4)]))){
var statearr_53235_53271 = state_53206;
(statearr_53235_53271[(1)] = cljs.core.first((state_53206[(4)])));

} else {
throw ex__39405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53272 = state_53206;
state_53206 = G__53272;
continue;
} else {
return ret_value__39403__auto__;
}
break;
}
});
app$main$fetch_asset_$_state_machine__39402__auto__ = function(state_53206){
switch(arguments.length){
case 0:
return app$main$fetch_asset_$_state_machine__39402__auto____0.call(this);
case 1:
return app$main$fetch_asset_$_state_machine__39402__auto____1.call(this,state_53206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$fetch_asset_$_state_machine__39402__auto__.cljs$core$IFn$_invoke$arity$0 = app$main$fetch_asset_$_state_machine__39402__auto____0;
app$main$fetch_asset_$_state_machine__39402__auto__.cljs$core$IFn$_invoke$arity$1 = app$main$fetch_asset_$_state_machine__39402__auto____1;
return app$main$fetch_asset_$_state_machine__39402__auto__;
})()
})();
var state__39524__auto__ = (function (){var statearr_53236 = f__39523__auto__();
(statearr_53236[(6)] = c__39522__auto__);

return statearr_53236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39524__auto__);
}));

return c__39522__auto__;
});
app.main.use_asset = (function app$main$use_asset(path){
var vec__53237 = uix.core.use_state(null,cljs.core.PersistentVector.EMPTY);
var asset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53237,(0),null);
var set_asset_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53237,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var c__39522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39523__auto__ = (function (){var switch__39401__auto__ = (function (state_53257){
var state_val_53258 = (state_53257[(1)]);
if((state_val_53258 === (1))){
var inst_53252 = app.main.fetch_asset(path);
var state_53257__$1 = state_53257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53257__$1,(2),inst_53252);
} else {
if((state_val_53258 === (2))){
var inst_53254 = (state_53257[(2)]);
var inst_53255 = (set_asset_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_asset_BANG_.cljs$core$IFn$_invoke$arity$1(inst_53254) : set_asset_BANG_.call(null, inst_53254));
var state_53257__$1 = state_53257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53257__$1,inst_53255);
} else {
return null;
}
}
});
return (function() {
var app$main$use_asset_$_state_machine__39402__auto__ = null;
var app$main$use_asset_$_state_machine__39402__auto____0 = (function (){
var statearr_53259 = [null,null,null,null,null,null,null];
(statearr_53259[(0)] = app$main$use_asset_$_state_machine__39402__auto__);

(statearr_53259[(1)] = (1));

return statearr_53259;
});
var app$main$use_asset_$_state_machine__39402__auto____1 = (function (state_53257){
while(true){
var ret_value__39403__auto__ = (function (){try{while(true){
var result__39404__auto__ = switch__39401__auto__(state_53257);
if(cljs.core.keyword_identical_QMARK_(result__39404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39404__auto__;
}
break;
}
}catch (e53260){var ex__39405__auto__ = e53260;
var statearr_53261_53273 = state_53257;
(statearr_53261_53273[(2)] = ex__39405__auto__);


if(cljs.core.seq((state_53257[(4)]))){
var statearr_53262_53274 = state_53257;
(statearr_53262_53274[(1)] = cljs.core.first((state_53257[(4)])));

} else {
throw ex__39405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53275 = state_53257;
state_53257 = G__53275;
continue;
} else {
return ret_value__39403__auto__;
}
break;
}
});
app$main$use_asset_$_state_machine__39402__auto__ = function(state_53257){
switch(arguments.length){
case 0:
return app$main$use_asset_$_state_machine__39402__auto____0.call(this);
case 1:
return app$main$use_asset_$_state_machine__39402__auto____1.call(this,state_53257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$use_asset_$_state_machine__39402__auto__.cljs$core$IFn$_invoke$arity$0 = app$main$use_asset_$_state_machine__39402__auto____0;
app$main$use_asset_$_state_machine__39402__auto__.cljs$core$IFn$_invoke$arity$1 = app$main$use_asset_$_state_machine__39402__auto____1;
return app$main$use_asset_$_state_machine__39402__auto__;
})()
})();
var state__39524__auto__ = (function (){var statearr_53263 = f__39523__auto__();
(statearr_53263[(6)] = c__39522__auto__);

return statearr_53263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39524__auto__);
}));

return c__39522__auto__;
}),uix.core.jsfy_deps([]));

return asset;
});

//# sourceMappingURL=app.main.js.map
