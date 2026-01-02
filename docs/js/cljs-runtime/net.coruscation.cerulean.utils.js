import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$axios$dist$browser$axios_cjs.js";
import "./uix.core.js";
import "./goog.object.object.js";
import "./shadow.esm.js";
import "./cljs.core.async.js";
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
var c__65819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65820__auto__ = (function (){var switch__65745__auto__ = (function (state_71603){
var state_val_71604 = (state_71603[(1)]);
if((state_val_71604 === (1))){
var inst_71594 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.utils.SERVER_PATH)+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
var inst_71595 = module$node_modules$axios$dist$browser$axios_cjs.get(inst_71594);
var inst_71596 = (function (){return (function (resp){
var c__65819__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65820__auto__ = (function (){var switch__65745__auto__ = (function (state_71610){
var state_val_71611 = (state_71610[(1)]);
if((state_val_71611 === (1))){
var inst_71605 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(resp,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_71606 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_71605);
var state_71610__$1 = state_71610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71610__$1,(2),chan,inst_71606);
} else {
if((state_val_71611 === (2))){
var inst_71608 = (state_71610[(2)]);
var state_71610__$1 = state_71610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71610__$1,inst_71608);
} else {
return null;
}
}
});
return (function() {
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__ = null;
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0 = (function (){
var statearr_71612 = [null,null,null,null,null,null,null];
(statearr_71612[(0)] = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__);

(statearr_71612[(1)] = (1));

return statearr_71612;
});
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1 = (function (state_71610){
while(true){
var ret_value__65747__auto__ = (function (){try{while(true){
var result__65748__auto__ = switch__65745__auto__(state_71610);
if(cljs.core.keyword_identical_QMARK_(result__65748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65748__auto__;
}
break;
}
}catch (e71613){var ex__65749__auto__ = e71613;
var statearr_71614_71685 = state_71610;
(statearr_71614_71685[(2)] = ex__65749__auto__);


if(cljs.core.seq((state_71610[(4)]))){
var statearr_71615_71686 = state_71610;
(statearr_71615_71686[(1)] = cljs.core.first((state_71610[(4)])));

} else {
throw ex__65749__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71687 = state_71610;
state_71610 = G__71687;
continue;
} else {
return ret_value__65747__auto__;
}
break;
}
});
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__ = function(state_71610){
switch(arguments.length){
case 0:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0.call(this);
case 1:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1.call(this,state_71610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__.cljs$core$IFn$_invoke$arity$0 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0;
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__.cljs$core$IFn$_invoke$arity$1 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1;
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__;
})()
})();
var state__65821__auto__ = (function (){var statearr_71616 = f__65820__auto__();
(statearr_71616[(6)] = c__65819__auto____$1);

return statearr_71616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65821__auto__);
}));

return c__65819__auto____$1;
});
})();
var inst_71597 = inst_71595.then(inst_71596);
var inst_71598 = (function (){return (function (error){
var c__65819__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65820__auto__ = (function (){var switch__65745__auto__ = (function (state_71621){
var state_val_71622 = (state_71621[(1)]);
if((state_val_71622 === (1))){
var inst_71617 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252)], 0));
var state_71621__$1 = state_71621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71621__$1,(2),chan,inst_71617);
} else {
if((state_val_71622 === (2))){
var inst_71619 = (state_71621[(2)]);
var state_71621__$1 = state_71621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71621__$1,inst_71619);
} else {
return null;
}
}
});
return (function() {
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__ = null;
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0 = (function (){
var statearr_71623 = [null,null,null,null,null,null,null];
(statearr_71623[(0)] = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__);

(statearr_71623[(1)] = (1));

return statearr_71623;
});
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1 = (function (state_71621){
while(true){
var ret_value__65747__auto__ = (function (){try{while(true){
var result__65748__auto__ = switch__65745__auto__(state_71621);
if(cljs.core.keyword_identical_QMARK_(result__65748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65748__auto__;
}
break;
}
}catch (e71624){var ex__65749__auto__ = e71624;
var statearr_71625_71688 = state_71621;
(statearr_71625_71688[(2)] = ex__65749__auto__);


if(cljs.core.seq((state_71621[(4)]))){
var statearr_71626_71689 = state_71621;
(statearr_71626_71689[(1)] = cljs.core.first((state_71621[(4)])));

} else {
throw ex__65749__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71690 = state_71621;
state_71621 = G__71690;
continue;
} else {
return ret_value__65747__auto__;
}
break;
}
});
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__ = function(state_71621){
switch(arguments.length){
case 0:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0.call(this);
case 1:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1.call(this,state_71621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__.cljs$core$IFn$_invoke$arity$0 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0;
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__.cljs$core$IFn$_invoke$arity$1 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1;
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__;
})()
})();
var state__65821__auto__ = (function (){var statearr_71627 = f__65820__auto__();
(statearr_71627[(6)] = c__65819__auto____$1);

return statearr_71627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65821__auto__);
}));

return c__65819__auto____$1;
});
})();
var inst_71599 = inst_71597.catch(inst_71598);
var state_71603__$1 = (function (){var statearr_71628 = state_71603;
(statearr_71628[(7)] = inst_71599);

return statearr_71628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71603__$1,(2),chan);
} else {
if((state_val_71604 === (2))){
var inst_71601 = (state_71603[(2)]);
var state_71603__$1 = state_71603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71603__$1,inst_71601);
} else {
return null;
}
}
});
return (function() {
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__ = null;
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0 = (function (){
var statearr_71629 = [null,null,null,null,null,null,null,null];
(statearr_71629[(0)] = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__);

(statearr_71629[(1)] = (1));

return statearr_71629;
});
var net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1 = (function (state_71603){
while(true){
var ret_value__65747__auto__ = (function (){try{while(true){
var result__65748__auto__ = switch__65745__auto__(state_71603);
if(cljs.core.keyword_identical_QMARK_(result__65748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65748__auto__;
}
break;
}
}catch (e71630){var ex__65749__auto__ = e71630;
var statearr_71631_71691 = state_71603;
(statearr_71631_71691[(2)] = ex__65749__auto__);


if(cljs.core.seq((state_71603[(4)]))){
var statearr_71632_71692 = state_71603;
(statearr_71632_71692[(1)] = cljs.core.first((state_71603[(4)])));

} else {
throw ex__65749__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71693 = state_71603;
state_71603 = G__71693;
continue;
} else {
return ret_value__65747__auto__;
}
break;
}
});
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__ = function(state_71603){
switch(arguments.length){
case 0:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0.call(this);
case 1:
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1.call(this,state_71603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__.cljs$core$IFn$_invoke$arity$0 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____0;
net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__.cljs$core$IFn$_invoke$arity$1 = net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto____1;
return net$coruscation$cerulean$utils$fetch_asset_$_state_machine__65746__auto__;
})()
})();
var state__65821__auto__ = (function (){var statearr_71633 = f__65820__auto__();
(statearr_71633[(6)] = c__65819__auto__);

return statearr_71633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65821__auto__);
}));

return c__65819__auto__;
});
net.coruscation.cerulean.utils.use_asset = (function net$coruscation$cerulean$utils$use_asset(path){
var vec__71634 = uix.core.use_state(null);
var asset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71634,(0),null);
var set_asset_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71634,(1),null);
var saved = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((globalThis[path]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.not(saved)){
var c__65819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65820__auto__ = (function (){var switch__65745__auto__ = (function (state_71654){
var state_val_71655 = (state_71654[(1)]);
if((state_val_71655 === (1))){
var inst_71649 = net.coruscation.cerulean.utils.fetch_asset(path);
var state_71654__$1 = state_71654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71654__$1,(2),inst_71649);
} else {
if((state_val_71655 === (2))){
var inst_71651 = (state_71654[(2)]);
var inst_71652 = (set_asset_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_asset_BANG_.cljs$core$IFn$_invoke$arity$1(inst_71651) : set_asset_BANG_.call(null,inst_71651));
var state_71654__$1 = state_71654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71654__$1,inst_71652);
} else {
return null;
}
}
});
return (function() {
var net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto__ = null;
var net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto____0 = (function (){
var statearr_71656 = [null,null,null,null,null,null,null];
(statearr_71656[(0)] = net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto__);

(statearr_71656[(1)] = (1));

return statearr_71656;
});
var net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto____1 = (function (state_71654){
while(true){
var ret_value__65747__auto__ = (function (){try{while(true){
var result__65748__auto__ = switch__65745__auto__(state_71654);
if(cljs.core.keyword_identical_QMARK_(result__65748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65748__auto__;
}
break;
}
}catch (e71657){var ex__65749__auto__ = e71657;
var statearr_71658_71694 = state_71654;
(statearr_71658_71694[(2)] = ex__65749__auto__);


if(cljs.core.seq((state_71654[(4)]))){
var statearr_71659_71695 = state_71654;
(statearr_71659_71695[(1)] = cljs.core.first((state_71654[(4)])));

} else {
throw ex__65749__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71696 = state_71654;
state_71654 = G__71696;
continue;
} else {
return ret_value__65747__auto__;
}
break;
}
});
net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto__ = function(state_71654){
switch(arguments.length){
case 0:
return net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto____0.call(this);
case 1:
return net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto____1.call(this,state_71654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto__.cljs$core$IFn$_invoke$arity$0 = net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto____0;
net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto__.cljs$core$IFn$_invoke$arity$1 = net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto____1;
return net$coruscation$cerulean$utils$use_asset_$_state_machine__65746__auto__;
})()
})();
var state__65821__auto__ = (function (){var statearr_71660 = f__65820__auto__();
(statearr_71660[(6)] = c__65819__auto__);

return statearr_71660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65821__auto__);
}));

return c__65819__auto__;
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,saved], null))]);

var or__5141__auto__ = saved;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return asset;
}
});
net.coruscation.cerulean.utils.use_module = (function net$coruscation$cerulean$utils$use_module(module_name,use_QMARK_){
var vec__71661 = uix.core.use_state(null);
var module__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71661,(0),null);
var set_module_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71661,(1),null);
var saved = (function (){var and__5139__auto__ = use_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
return (window[net.coruscation.cerulean.render.context_commons.extra_script_global_this_name(module_name)]);
} else {
return and__5139__auto__;
}
})();
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__5139__auto__ = use_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
return cljs.core.seq(module_name);
} else {
return and__5139__auto__;
}
})())){
return shadow.esm.dynamic_import((""+"/js/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)+".js")).then((function (m){
return (set_module_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_module_BANG_.cljs$core$IFn$_invoke$arity$1(m) : set_module_BANG_.call(null,m));
}));
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [saved,module_name,use_QMARK_], null))]);

var and__5139__auto__ = use_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
var or__5141__auto__ = saved;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return module__$1;
}
} else {
return and__5139__auto__;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("uix.core","$","uix.core/$",-1139051715,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-Provider",".-Provider",779486627,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(binding),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,cljs.core.second(binding),null,(1),null)))))),null,(1),null)),((cljs.core.empty_QMARK_(cljs.core.rest(bindings)))?body:(new cljs.core.List(null,(function (){var G__71664 = cljs.core.rest(bindings);
var G__71665 = body;
return (net.coruscation.cerulean.utils.do_cljs_bindings.cljs$core$IFn$_invoke$arity$2 ? net.coruscation.cerulean.utils.do_cljs_bindings.cljs$core$IFn$_invoke$arity$2(G__71664,G__71665) : net.coruscation.cerulean.utils.do_cljs_bindings.call(null,G__71664,G__71665));
})(),null,(1),null)))], 0))));
}
});
net.coruscation.cerulean.utils.do_clj_bindings = (function net$coruscation$cerulean$utils$do_clj_bindings(bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","letfn","cljs.core/letfn",-874326064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__71666__auto__","wrap-fn__71666__auto__",1245457055,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f__71667__auto__","f__71667__auto__",1458997768,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__71668__auto__","args__71668__auto__",-1628343474,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"node__71669__auto__","node__71669__auto__",1817400085,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hzip","hiccup-zip","hzip/hiccup-zip",-1644189562,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__71667__auto__","f__71667__auto__",1458997768,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__71668__auto__","args__71668__auto__",-1628343474,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","end?","clojure.zip/end?",381053413,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__71669__auto__","node__71669__auto__",1817400085,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","root","clojure.zip/root",-1119588559,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__71669__auto__","node__71669__auto__",1817400085,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__71669__auto__","node__71669__auto__",1817400085,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","next","clojure.zip/next",-1526224397,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","replace","clojure.zip/replace",413367034,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__71669__auto__","node__71669__auto__",1817400085,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__71669__auto__","node__71669__auto__",1817400085,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__71666__auto__","wrap-fn__71666__auto__",1245457055,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","node","clojure.zip/node",-1345203614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__71669__auto__","node__71669__auto__",1817400085,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.zip","next","clojure.zip/next",-1526224397,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"node__71669__auto__","node__71669__auto__",1817400085,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"wrap-fn__71666__auto__","wrap-fn__71666__auto__",1245457055,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
});
net.coruscation.cerulean.utils.disposable__GT_function = (function net$coruscation$cerulean$utils$disposable__GT_function(disposable,listener,interval){
var disposable_instance = (new disposable(listener,interval));
return (function() { 
var G__71724__delegate = function (args){
return disposable_instance.fire.apply(disposable_instance,cljs.core.to_array(args));
};
var G__71724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71725__i = 0, G__71725__a = new Array(arguments.length -  0);
while (G__71725__i < G__71725__a.length) {G__71725__a[G__71725__i] = arguments[G__71725__i + 0]; ++G__71725__i;}
  args = new cljs.core.IndexedSeq(G__71725__a,0,null);
} 
return G__71724__delegate.call(this,args);};
G__71724.cljs$lang$maxFixedArity = 0;
G__71724.cljs$lang$applyTo = (function (arglist__71726){
var args = cljs.core.seq(arglist__71726);
return G__71724__delegate(args);
});
G__71724.cljs$core$IFn$_invoke$arity$variadic = G__71724__delegate;
return G__71724;
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
var args__5881__auto__ = [];
var len__5875__auto___71727 = arguments.length;
var i__5876__auto___71729 = (0);
while(true){
if((i__5876__auto___71729 < len__5875__auto___71727)){
args__5881__auto__.push((arguments[i__5876__auto___71729]));

var G__71732 = (i__5876__auto___71729 + (1));
i__5876__auto___71729 = G__71732;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (obj,p__71672){
var map__71673 = p__71672;
var map__71673__$1 = cljs.core.__destructure_map(map__71673);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71673__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var max_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71673__$1,new cljs.core.Keyword(null,"max-level","max-level",122449960));
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
(net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$lang$applyTo = (function (seq71670){
var G__71671 = cljs.core.first(seq71670);
var seq71670__$1 = cljs.core.next(seq71670);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71671,seq71670__$1);
}));

net.coruscation.cerulean.utils.obj__GT_clj = (function net$coruscation$cerulean$utils$obj__GT_clj(var_args){
var args__5881__auto__ = [];
var len__5875__auto___71747 = arguments.length;
var i__5876__auto___71748 = (0);
while(true){
if((i__5876__auto___71748 < len__5875__auto___71747)){
args__5881__auto__.push((arguments[i__5876__auto___71748]));

var G__71749 = (i__5876__auto___71748 + (1));
i__5876__auto___71748 = G__71749;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return net.coruscation.cerulean.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(net.coruscation.cerulean.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (obj,p__71676){
var map__71677 = p__71676;
var map__71677__$1 = cljs.core.__destructure_map(map__71677);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71677__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return net.coruscation.cerulean.utils.recur_obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-level","max-level",122449960),(1)], 0));
}));

(net.coruscation.cerulean.utils.obj__GT_clj.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(net.coruscation.cerulean.utils.obj__GT_clj.cljs$lang$applyTo = (function (seq71674){
var G__71675 = cljs.core.first(seq71674);
var seq71674__$1 = cljs.core.next(seq71674);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71675,seq71674__$1);
}));

net.coruscation.cerulean.utils.set_css_variable_BANG_ = (function net$coruscation$cerulean$utils$set_css_variable_BANG_(var_args){
var args__5881__auto__ = [];
var len__5875__auto___71754 = arguments.length;
var i__5876__auto___71755 = (0);
while(true){
if((i__5876__auto___71755 < len__5875__auto___71754)){
args__5881__auto__.push((arguments[i__5876__auto___71755]));

var G__71756 = (i__5876__auto___71755 + (1));
i__5876__auto___71755 = G__71756;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((2) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((2)),(0),null)):null);
return net.coruscation.cerulean.utils.set_css_variable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5882__auto__);
});

(net.coruscation.cerulean.utils.set_css_variable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (var$,value,p__71681){
var vec__71682 = p__71681;
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71682,(0),null);
return (function (){var or__5141__auto__ = element;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return document;
}
})().documentElement.style.setProperty(var$,value);
}));

(net.coruscation.cerulean.utils.set_css_variable_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(net.coruscation.cerulean.utils.set_css_variable_BANG_.cljs$lang$applyTo = (function (seq71678){
var G__71679 = cljs.core.first(seq71678);
var seq71678__$1 = cljs.core.next(seq71678);
var G__71680 = cljs.core.first(seq71678__$1);
var seq71678__$2 = cljs.core.next(seq71678__$1);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71679,G__71680,seq71678__$2);
}));


//# sourceMappingURL=net.coruscation.cerulean.utils.js.map
