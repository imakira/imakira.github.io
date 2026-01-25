import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$axios$dist$browser$axios_cjs.js";
import "./uix.core.js";
import "./goog.object.object.js";
import "./shadow.esm.js";
import "./cljs.core.async.js";
import "./clojure.edn.js";
import "./clojure.string.js";
import "./clojure.zip.js";
import "./net.coruscation.cerulean.orgx.orgx_commons.js";
import "./net.coruscation.cerulean.render.context_commons.js";
import "./goog.async.debouncer.js";
import "./goog.async.throttle.js";
goog.provide('net.coruscation.cerulean.utils');
goog.scope(function(){
  net.coruscation.cerulean.utils.goog$module$goog$object = goog.module.get('goog.object');
  net.coruscation.cerulean.utils.goog$module$goog$async$Throttle = goog.module.get('goog.async.Throttle');
});
var module$node_modules$axios$dist$browser$axios_cjs=shadow.js.require("module$node_modules$axios$dist$browser$axios_cjs", {});
net.coruscation.cerulean.utils.SERVER_PATH = window.__server_path;
net.coruscation.cerulean.utils.fetch_asset = (function net$coruscation$cerulean$utils$fetch_asset(path){
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__55266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55267__auto__ = (function (){var switch__55145__auto__ = (function (state_134026){
var state_val_134027 = (state_134026[(1)]);
if((state_val_134027 === (1))){
var inst_134017 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.utils.SERVER_PATH)+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
var inst_134018 = module$node_modules$axios$dist$browser$axios_cjs.get(inst_134017);
var inst_134019 = (function (){return (function (resp){
var c__55266__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55267__auto__ = (function (){var switch__55145__auto__ = (function (state_134033){
var state_val_134034 = (state_134033[(1)]);
if((state_val_134034 === (1))){
var inst_134028 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(resp,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_134029 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_134028);
var state_134033__$1 = state_134033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_134033__$1,(2),chan,inst_134029);
} else {
if((state_val_134034 === (2))){
var inst_134031 = (state_134033[(2)]);
var state_134033__$1 = state_134033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_134033__$1,inst_134031);
} else {
return null;
}
}
});
return (function() {
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__ = null;
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0 = (function (){
var statearr_134035 = [null,null,null,null,null,null,null];
(statearr_134035[(0)] = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__);

(statearr_134035[(1)] = (1));

return statearr_134035;
});
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1 = (function (state_134033){
while(true){
var ret_value__55147__auto__ = (function (){try{while(true){
var result__55148__auto__ = switch__55145__auto__(state_134033);
if(cljs.core.keyword_identical_QMARK_(result__55148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55148__auto__;
}
break;
}
}catch (e134036){var ex__55149__auto__ = e134036;
var statearr_134037_134110 = state_134033;
(statearr_134037_134110[(2)] = ex__55149__auto__);


if(cljs.core.seq((state_134033[(4)]))){
var statearr_134038_134111 = state_134033;
(statearr_134038_134111[(1)] = cljs.core.first((state_134033[(4)])));

} else {
throw ex__55149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134112 = state_134033;
state_134033 = G__134112;
continue;
} else {
return ret_value__55147__auto__;
}
break;
}
});
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__ = function(state_134033){
switch(arguments.length){
case 0:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0.call(this);
case 1:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1.call(this,state_134033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__.cljs$core$IFn$_invoke$arity$0 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0;
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__.cljs$core$IFn$_invoke$arity$1 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1;
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__;
})()
})();
var state__55268__auto__ = (function (){var statearr_134039 = f__55267__auto__();
(statearr_134039[(6)] = c__55266__auto____$1);

return statearr_134039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55268__auto__);
}));

return c__55266__auto____$1;
});
})();
var inst_134020 = inst_134018.then(inst_134019);
var inst_134021 = (function (){return (function (error){
var c__55266__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55267__auto__ = (function (){var switch__55145__auto__ = (function (state_134044){
var state_val_134045 = (state_134044[(1)]);
if((state_val_134045 === (1))){
var inst_134040 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252)], 0));
var state_134044__$1 = state_134044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_134044__$1,(2),chan,inst_134040);
} else {
if((state_val_134045 === (2))){
var inst_134042 = (state_134044[(2)]);
var state_134044__$1 = state_134044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_134044__$1,inst_134042);
} else {
return null;
}
}
});
return (function() {
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__ = null;
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0 = (function (){
var statearr_134046 = [null,null,null,null,null,null,null];
(statearr_134046[(0)] = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__);

(statearr_134046[(1)] = (1));

return statearr_134046;
});
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1 = (function (state_134044){
while(true){
var ret_value__55147__auto__ = (function (){try{while(true){
var result__55148__auto__ = switch__55145__auto__(state_134044);
if(cljs.core.keyword_identical_QMARK_(result__55148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55148__auto__;
}
break;
}
}catch (e134047){var ex__55149__auto__ = e134047;
var statearr_134048_134113 = state_134044;
(statearr_134048_134113[(2)] = ex__55149__auto__);


if(cljs.core.seq((state_134044[(4)]))){
var statearr_134049_134114 = state_134044;
(statearr_134049_134114[(1)] = cljs.core.first((state_134044[(4)])));

} else {
throw ex__55149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134115 = state_134044;
state_134044 = G__134115;
continue;
} else {
return ret_value__55147__auto__;
}
break;
}
});
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__ = function(state_134044){
switch(arguments.length){
case 0:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0.call(this);
case 1:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1.call(this,state_134044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__.cljs$core$IFn$_invoke$arity$0 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0;
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__.cljs$core$IFn$_invoke$arity$1 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1;
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__;
})()
})();
var state__55268__auto__ = (function (){var statearr_134050 = f__55267__auto__();
(statearr_134050[(6)] = c__55266__auto____$1);

return statearr_134050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55268__auto__);
}));

return c__55266__auto____$1;
});
})();
var inst_134022 = inst_134020.catch(inst_134021);
var state_134026__$1 = (function (){var statearr_134051 = state_134026;
(statearr_134051[(7)] = inst_134022);

return statearr_134051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_134026__$1,(2),chan);
} else {
if((state_val_134027 === (2))){
var inst_134024 = (state_134026[(2)]);
var state_134026__$1 = state_134026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_134026__$1,inst_134024);
} else {
return null;
}
}
});
return (function() {
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__ = null;
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0 = (function (){
var statearr_134052 = [null,null,null,null,null,null,null,null];
(statearr_134052[(0)] = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__);

(statearr_134052[(1)] = (1));

return statearr_134052;
});
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1 = (function (state_134026){
while(true){
var ret_value__55147__auto__ = (function (){try{while(true){
var result__55148__auto__ = switch__55145__auto__(state_134026);
if(cljs.core.keyword_identical_QMARK_(result__55148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55148__auto__;
}
break;
}
}catch (e134053){var ex__55149__auto__ = e134053;
var statearr_134054_134116 = state_134026;
(statearr_134054_134116[(2)] = ex__55149__auto__);


if(cljs.core.seq((state_134026[(4)]))){
var statearr_134055_134117 = state_134026;
(statearr_134055_134117[(1)] = cljs.core.first((state_134026[(4)])));

} else {
throw ex__55149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134118 = state_134026;
state_134026 = G__134118;
continue;
} else {
return ret_value__55147__auto__;
}
break;
}
});
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__ = function(state_134026){
switch(arguments.length){
case 0:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0.call(this);
case 1:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1.call(this,state_134026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__.cljs$core$IFn$_invoke$arity$0 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____0;
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__.cljs$core$IFn$_invoke$arity$1 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto____1;
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__55146__auto__;
})()
})();
var state__55268__auto__ = (function (){var statearr_134056 = f__55267__auto__();
(statearr_134056[(6)] = c__55266__auto__);

return statearr_134056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55268__auto__);
}));

return c__55266__auto__;
});
net.coruscation.cerulean.utils.use_asset = (function net$coruscation$cerulean$utils$use_asset(path){
var vec__134057 = uix.core.use_state(null);
var asset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134057,(0),null);
var set_asset_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134057,(1),null);
var saved = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((globalThis[path]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.not(saved)){
var c__55266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55267__auto__ = (function (){var switch__55145__auto__ = (function (state_134077){
var state_val_134078 = (state_134077[(1)]);
if((state_val_134078 === (1))){
var inst_134072 = net.coruscation.cerulean.utils.fetch_asset(path);
var state_134077__$1 = state_134077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_134077__$1,(2),inst_134072);
} else {
if((state_val_134078 === (2))){
var inst_134074 = (state_134077[(2)]);
var inst_134075 = (set_asset_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_asset_BANG_.cljs$core$IFn$_invoke$arity$1(inst_134074) : set_asset_BANG_.call(null,inst_134074));
var state_134077__$1 = state_134077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_134077__$1,inst_134075);
} else {
return null;
}
}
});
return (function() {
var net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto__ = null;
var net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto____0 = (function (){
var statearr_134079 = [null,null,null,null,null,null,null];
(statearr_134079[(0)] = net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto__);

(statearr_134079[(1)] = (1));

return statearr_134079;
});
var net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto____1 = (function (state_134077){
while(true){
var ret_value__55147__auto__ = (function (){try{while(true){
var result__55148__auto__ = switch__55145__auto__(state_134077);
if(cljs.core.keyword_identical_QMARK_(result__55148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55148__auto__;
}
break;
}
}catch (e134080){var ex__55149__auto__ = e134080;
var statearr_134081_134131 = state_134077;
(statearr_134081_134131[(2)] = ex__55149__auto__);


if(cljs.core.seq((state_134077[(4)]))){
var statearr_134082_134132 = state_134077;
(statearr_134082_134132[(1)] = cljs.core.first((state_134077[(4)])));

} else {
throw ex__55149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134133 = state_134077;
state_134077 = G__134133;
continue;
} else {
return ret_value__55147__auto__;
}
break;
}
});
net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto__ = function(state_134077){
switch(arguments.length){
case 0:
return net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto____0.call(this);
case 1:
return net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto____1.call(this,state_134077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto__.cljs$core$IFn$_invoke$arity$0 = net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto____0;
net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto__.cljs$core$IFn$_invoke$arity$1 = net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto____1;
return net$coruscation$cerulean$utils$use_asset_$_state_machine__55146__auto__;
})()
})();
var state__55268__auto__ = (function (){var statearr_134083 = f__55267__auto__();
(statearr_134083[(6)] = c__55266__auto__);

return statearr_134083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55268__auto__);
}));

return c__55266__auto__;
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,saved], null))]);

var or__5142__auto__ = saved;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset;
}
});
net.coruscation.cerulean.utils.use_module = (function net$coruscation$cerulean$utils$use_module(module_name,use_QMARK_){
var vec__134084 = uix.core.use_state(null);
var module__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134084,(0),null);
var set_module_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134084,(1),null);
var saved = (function (){var and__5140__auto__ = use_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (window[net.coruscation.cerulean.render.context_commons.extra_script_global_this_name(module_name)]);
} else {
return and__5140__auto__;
}
})();
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = use_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(module_name);
} else {
return and__5140__auto__;
}
})())){
return shadow.esm.dynamic_import((""+"/js/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)+".js")).then((function (m){
return (set_module_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_module_BANG_.cljs$core$IFn$_invoke$arity$1(m) : set_module_BANG_.call(null,m));
}));
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [saved,module_name,use_QMARK_], null))]);

var and__5140__auto__ = use_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = saved;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return module__$1;
}
} else {
return and__5140__auto__;
}
});
net.coruscation.cerulean.utils.use_orgx = (function net$coruscation$cerulean$utils$use_orgx(id,orgx_QMARK_){
var qualified_name = (""+"orgx."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
var module__$1 = net.coruscation.cerulean.utils.use_module(qualified_name,orgx_QMARK_);
if(cljs.core.truth_(module__$1)){
return (module__$1[net.coruscation.cerulean.orgx.orgx_commons.orgx_default_component_name]);
} else {
return null;
}
});
net.coruscation.cerulean.utils.use_user_config = (function net$coruscation$cerulean$utils$use_user_config(config_id){
var config = net.coruscation.cerulean.utils.use_asset("user-config");
return (config_id.cljs$core$IFn$_invoke$arity$1 ? config_id.cljs$core$IFn$_invoke$arity$1(config) : config_id.call(null,config));
});
net.coruscation.cerulean.utils.set_title_BANG_ = (function net$coruscation$cerulean$utils$set_title_BANG_(title){
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
(document.title = title);

return (function (){
return null;
});
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null))]);
});
net.coruscation.cerulean.utils.set_description_BANG_ = (function net$coruscation$cerulean$utils$set_description_BANG_(description){
return null;
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
net.coruscation.cerulean.utils.cljs_env_QMARK_ = (function net$coruscation$cerulean$utils$cljs_env_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
net.coruscation.cerulean.utils.do_cljs_bindings = (function net$coruscation$cerulean$utils$do_cljs_bindings(bindings,body){
if(cljs.core.empty_QMARK_(bindings)){
return body;
} else {
var binding = cljs.core.first(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("uix.core","$","uix.core/$",-1139051715,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-Provider",".-Provider",779486627,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(binding),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,cljs.core.second(binding),null,(1),null)))))),null,(1),null)),((cljs.core.empty_QMARK_(cljs.core.rest(bindings)))?body:(new cljs.core.List(null,(function (){var G__134087 = cljs.core.rest(bindings);
var G__134088 = body;
return (net.coruscation.cerulean.utils.do_cljs_bindings.cljs$core$IFn$_invoke$arity$2 ? net.coruscation.cerulean.utils.do_cljs_bindings.cljs$core$IFn$_invoke$arity$2(G__134087,G__134088) : net.coruscation.cerulean.utils.do_cljs_bindings.call(null,G__134087,G__134088));
})(),null,(1),null)))], 0))));
}
});
net.coruscation.cerulean.utils.do_clj_bindings = (function net$coruscation$cerulean$utils$do_clj_bindings(bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","letfn","cljs.core/letfn",-874326064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__134089__auto__","wrap-fn__134089__auto__",-1246177320,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f__134090__auto__","f__134090__auto__",462739824,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__134091__auto__","args__134091__auto__",-1350486291,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"node__134092__auto__","node__134092__auto__",-6782565,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hzip","hiccup-zip","hzip/hiccup-zip",-1644189562,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__134090__auto__","f__134090__auto__",462739824,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__134091__auto__","args__134091__auto__",-1350486291,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","end?","clojure.zip/end?",381053413,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__134092__auto__","node__134092__auto__",-6782565,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","root","clojure.zip/root",-1119588559,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__134092__auto__","node__134092__auto__",-6782565,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__134092__auto__","node__134092__auto__",-6782565,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","next","clojure.zip/next",-1526224397,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","replace","clojure.zip/replace",413367034,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__134092__auto__","node__134092__auto__",-6782565,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__134092__auto__","node__134092__auto__",-6782565,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__134089__auto__","wrap-fn__134089__auto__",-1246177320,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__134092__auto__","node__134092__auto__",-6782565,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","next","clojure.zip/next",-1526224397,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__134092__auto__","node__134092__auto__",-6782565,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__134089__auto__","wrap-fn__134089__auto__",-1246177320,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
});
net.coruscation.cerulean.utils.disposable__GT_function = (function net$coruscation$cerulean$utils$disposable__GT_function(disposable,listener,interval){
var disposable_instance = (new disposable(listener,interval));
return (function() { 
var G__134138__delegate = function (args){
return disposable_instance.fire.apply(disposable_instance,cljs.core.to_array(args));
};
var G__134138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__134139__i = 0, G__134139__a = new Array(arguments.length -  0);
while (G__134139__i < G__134139__a.length) {G__134139__a[G__134139__i] = arguments[G__134139__i + 0]; ++G__134139__i;}
  args = new cljs.core.IndexedSeq(G__134139__a,0,null);
} 
return G__134138__delegate.call(this,args);};
G__134138.cljs$lang$maxFixedArity = 0;
G__134138.cljs$lang$applyTo = (function (arglist__134140){
var args = cljs.core.seq(arglist__134140);
return G__134138__delegate(args);
});
G__134138.cljs$core$IFn$_invoke$arity$variadic = G__134138__delegate;
return G__134138;
})()
;
});
net.coruscation.cerulean.utils.throttle = (function net$coruscation$cerulean$utils$throttle(listener,interval){
return net.coruscation.cerulean.utils.disposable__GT_function(net.coruscation.cerulean.utils.goog$module$goog$async$Throttle,listener,interval);
});
net.coruscation.cerulean.utils.debounce = (function net$coruscation$cerulean$utils$debounce(listener,interval){
return net.coruscation.cerulean.utils.disposable__GT_function(goog.async.Debouncer,listener,interval);
});
net.coruscation.cerulean.utils.recur_obj__GT_clj = (function net$coruscation$cerulean$utils$recur_obj__GT_clj(var_args){
var args__5882__auto__ = [];
var len__5876__auto___134141 = arguments.length;
var i__5877__auto___134142 = (0);
while(true){
if((i__5877__auto___134142 < len__5876__auto___134141)){
args__5882__auto__.push((arguments[i__5877__auto___134142]));

var G__134143 = (i__5877__auto___134142 + (1));
i__5877__auto___134142 = G__134143;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (obj,p__134095){
var map__134096 = p__134095;
var map__134096__$1 = cljs.core.__destructure_map(map__134096);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__134096__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var max_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__134096__$1,new cljs.core.Keyword(null,"max-level","max-level",122449960));
if((((!((max_level == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_level,(0))))){
return obj;
} else {
if(cljs.core.truth_(Array.isArray(obj))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys,new cljs.core.Keyword(null,"max-level","max-level",122449960),(cljs.core.truth_(max_level)?(max_level - (1)):null)], 0));
}),obj));
} else {
if(cljs.core.truth_(goog.isObject(obj))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var v = net.coruscation.cerulean.utils.goog$module$goog$object.get(obj,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("function",goog.typeOf(v))){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,(cljs.core.truth_(keywordize_keys)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key):key),net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys,new cljs.core.Keyword(null,"max-level","max-level",122449960),(cljs.core.truth_(max_level)?(max_level - (1)):null)], 0)));

}
}),cljs.core.PersistentArrayMap.EMPTY,net.coruscation.cerulean.utils.goog$module$goog$object.getKeys(obj)));
} else {
return obj;

}
}
}
}));

(net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$lang$applyTo = (function (seq134093){
var G__134094 = cljs.core.first(seq134093);
var seq134093__$1 = cljs.core.next(seq134093);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__134094,seq134093__$1);
}));

net.coruscation.cerulean.utils.obj__GT_clj = (function net$coruscation$cerulean$utils$obj__GT_clj(var_args){
var args__5882__auto__ = [];
var len__5876__auto___134148 = arguments.length;
var i__5877__auto___134149 = (0);
while(true){
if((i__5877__auto___134149 < len__5876__auto___134148)){
args__5882__auto__.push((arguments[i__5877__auto___134149]));

var G__134150 = (i__5877__auto___134149 + (1));
i__5877__auto___134149 = G__134150;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return net.coruscation.cerulean.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(net.coruscation.cerulean.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (obj,p__134099){
var map__134100 = p__134099;
var map__134100__$1 = cljs.core.__destructure_map(map__134100);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__134100__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-level","max-level",122449960),(1)], 0));
}));

(net.coruscation.cerulean.utils.obj__GT_clj.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(net.coruscation.cerulean.utils.obj__GT_clj.cljs$lang$applyTo = (function (seq134097){
var G__134098 = cljs.core.first(seq134097);
var seq134097__$1 = cljs.core.next(seq134097);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__134098,seq134097__$1);
}));

net.coruscation.cerulean.utils.set_css_variable_BANG_ = (function net$coruscation$cerulean$utils$set_css_variable_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___134151 = arguments.length;
var i__5877__auto___134152 = (0);
while(true){
if((i__5877__auto___134152 < len__5876__auto___134151)){
args__5882__auto__.push((arguments[i__5877__auto___134152]));

var G__134153 = (i__5877__auto___134152 + (1));
i__5877__auto___134152 = G__134153;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return net.coruscation.cerulean.utils.set_css_variable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(net.coruscation.cerulean.utils.set_css_variable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (var$,value,p__134104){
var vec__134105 = p__134104;
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__134105,(0),null);
return (function (){var or__5142__auto__ = element;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return document;
}
})().documentElement.style.setProperty(var$,value);
}));

(net.coruscation.cerulean.utils.set_css_variable_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(net.coruscation.cerulean.utils.set_css_variable_BANG_.cljs$lang$applyTo = (function (seq134101){
var G__134102 = cljs.core.first(seq134101);
var seq134101__$1 = cljs.core.next(seq134101);
var G__134103 = cljs.core.first(seq134101__$1);
var seq134101__$2 = cljs.core.next(seq134101__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__134102,G__134103,seq134101__$2);
}));


//# sourceMappingURL=net.coruscation.cerulean.utils.js.map
