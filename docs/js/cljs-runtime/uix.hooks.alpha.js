import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$react$index.js";
import "./module$node_modules$scheduler$index.js";
goog.provide('uix.hooks.alpha');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$scheduler$index=shadow.js.require("module$node_modules$scheduler$index", {});
uix.hooks.alpha.choose_value = (function uix$hooks$alpha$choose_value(nv,cv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nv,cv)){
return cv;
} else {
return nv;
}
});
/**
 * Replicates React's behaviour when updating state with identical JS value,
 *   but using Clojure's value equality here
 */
uix.hooks.alpha.use_clojure_aware_updater = (function uix$hooks$alpha$use_clojure_aware_updater(updater){
return module$node_modules$react$index.useCallback((function() { 
var G__75159__delegate = function (v,args){
var G__74941 = (function (cv){
if(cljs.core.fn_QMARK_(v)){
return uix.hooks.alpha.choose_value(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v,cv,args),cv);
} else {
return uix.hooks.alpha.choose_value(v,cv);
}
});
return (updater.cljs$core$IFn$_invoke$arity$1 ? updater.cljs$core$IFn$_invoke$arity$1(G__74941) : updater.call(null,G__74941));
};
var G__75159 = function (v,var_args){
var args = null;
if (arguments.length > 1) {
var G__75160__i = 0, G__75160__a = new Array(arguments.length -  1);
while (G__75160__i < G__75160__a.length) {G__75160__a[G__75160__i] = arguments[G__75160__i + 1]; ++G__75160__i;}
  args = new cljs.core.IndexedSeq(G__75160__a,0,null);
} 
return G__75159__delegate.call(this,v,args);};
G__75159.cljs$lang$maxFixedArity = 1;
G__75159.cljs$lang$applyTo = (function (arglist__75161){
var v = cljs.core.first(arglist__75161);
var args = cljs.core.rest(arglist__75161);
return G__75159__delegate(v,args);
});
G__75159.cljs$core$IFn$_invoke$arity$variadic = G__75159__delegate;
return G__75159;
})()
,[updater]);
});
uix.hooks.alpha.use_state = (function uix$hooks$alpha$use_state(value){
var vec__74948 = module$node_modules$react$index.useState(value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74948,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74948,(1),null);
var set_state__$1 = uix.hooks.alpha.use_clojure_aware_updater(set_state);
return [state,set_state__$1];
});
/**
 * Same as `use-clojure-primitive-aware-updater` but for `use-reducer`
 */
uix.hooks.alpha.clojure_aware_reducer_updater = (function uix$hooks$alpha$clojure_aware_reducer_updater(f){
return (function (state,action){
return uix.hooks.alpha.choose_value((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state,action) : f.call(null,state,action)),state);
});
});
uix.hooks.alpha.use_reducer = (function uix$hooks$alpha$use_reducer(var_args){
var G__74952 = arguments.length;
switch (G__74952) {
case 2:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (f,value){
var updater = uix.hooks.alpha.clojure_aware_reducer_updater(f);
return module$node_modules$react$index.useReducer(updater,value);
}));

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (f,value,init_state){
var updater = uix.hooks.alpha.clojure_aware_reducer_updater(f);
return module$node_modules$react$index.useReducer(updater,value,init_state);
}));

(uix.hooks.alpha.use_reducer.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_ref = (function uix$hooks$alpha$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
uix.hooks.alpha.with_return_value_check = (function uix$hooks$alpha$with_return_value_check(f){
return (function (){
var ret = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret)){
return ret;
} else {
return undefined;
}
});
});
uix.hooks.alpha.use_clj_deps = (function uix$hooks$alpha$use_clj_deps(deps){
var ref = module$node_modules$react$index.useRef(deps);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref.current,deps)){
(ref.current = deps);
} else {
}

return ref.current;
});
uix.hooks.alpha.use_effect = (function uix$hooks$alpha$use_effect(var_args){
var G__74965 = arguments.length;
switch (G__74965) {
case 1:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return module$node_modules$react$index.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return module$node_modules$react$index.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_layout_effect = (function uix$hooks$alpha$use_layout_effect(var_args){
var G__74971 = arguments.length;
switch (G__74971) {
case 1:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return module$node_modules$react$index.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return module$node_modules$react$index.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_layout_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_insertion_effect = (function uix$hooks$alpha$use_insertion_effect(var_args){
var G__74976 = arguments.length;
switch (G__74976) {
case 1:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f));
}));

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f),deps);
}));

(uix.hooks.alpha.use_insertion_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_callback = (function uix$hooks$alpha$use_callback(f,deps){
return module$node_modules$react$index.useCallback(f,deps);
});
uix.hooks.alpha.use_memo = (function uix$hooks$alpha$use_memo(f,deps){
return module$node_modules$react$index.useMemo(f,deps);
});
uix.hooks.alpha.use_context = (function uix$hooks$alpha$use_context(v){
return module$node_modules$react$index.useContext(v);
});
uix.hooks.alpha.use_imperative_handle = (function uix$hooks$alpha$use_imperative_handle(var_args){
var G__74991 = arguments.length;
switch (G__74991) {
case 2:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2 = (function (ref,create_handle){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3 = (function (ref,create_handle,deps){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle,deps);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_debug = (function uix$hooks$alpha$use_debug(var_args){
var G__75014 = arguments.length;
switch (G__75014) {
case 1:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1 = (function (v){
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2 = (function (v,fmt){
return module$node_modules$react$index.useDebugValue(v,fmt);
}));

(uix.hooks.alpha.use_debug.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_deferred_value = (function uix$hooks$alpha$use_deferred_value(var_args){
var G__75016 = arguments.length;
switch (G__75016) {
case 1:
return uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$1 = (function (v){
return module$node_modules$react$index.useDeferredValue(uix.hooks.alpha.use_clj_deps(v));
}));

(uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$2 = (function (v,initial){
return module$node_modules$react$index.useDeferredValue(uix.hooks.alpha.use_clj_deps(v),initial);
}));

(uix.hooks.alpha.use_deferred_value.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_transition = (function uix$hooks$alpha$use_transition(){
return module$node_modules$react$index.useTransition();
});
uix.hooks.alpha.use_id = (function uix$hooks$alpha$use_id(){
return module$node_modules$react$index.useId();
});
var did_warn_QMARK__75178 = cljs.core.volatile_BANG_(false);
var snapshot_changed_QMARK__75179 = (function (value,get_snapshot){
try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(get_snapshot.cljs$core$IFn$_invoke$arity$0 ? get_snapshot.cljs$core$IFn$_invoke$arity$0() : get_snapshot.call(null)));
}catch (e75034){var e = e75034;
return true;
}});
uix.hooks.alpha.use_sync_external_store_STAR_ = (function uix$hooks$alpha$use_sync_external_store_STAR_(subscribe,get_snapshot,get_server_snapshot){
if((typeof module$node_modules$react$index !== 'undefined') && (typeof module$node_modules$react$index.useSyncExternalStore !== 'undefined')){
return module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot,get_server_snapshot);
} else {
var value = (get_snapshot.cljs$core$IFn$_invoke$arity$0 ? get_snapshot.cljs$core$IFn$_invoke$arity$0() : get_snapshot.call(null));
var vec__75042 = uix.hooks.alpha.use_state(({"inst": ({"value": value, "getSnapshot": get_snapshot})}));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75042,(0),null);
var force_update = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75042,(1),null);
if(goog.DEBUG){
if(cljs.core.truth_(cljs.core.deref(did_warn_QMARK__75178))){
} else {
var cached_value_75180 = (get_snapshot.cljs$core$IFn$_invoke$arity$0 ? get_snapshot.cljs$core$IFn$_invoke$arity$0() : get_snapshot.call(null));
if((cached_value_75180 === value)){
} else {
cljs.core.vreset_BANG_(did_warn_QMARK__75178,true);

console.error("The result of getSnapshot should be cached to avoid an infinite loop");
}
}
} else {
}

uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2((function (){
(state.inst.value = value);

(state.inst.getSnapshot = get_snapshot);

if(snapshot_changed_QMARK__75179(state.inst.value,state.inst.getSnapshot)){
var G__75048 = ({"inst": state.inst});
return (force_update.cljs$core$IFn$_invoke$arity$1 ? force_update.cljs$core$IFn$_invoke$arity$1(G__75048) : force_update.call(null,G__75048));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [subscribe,value,get_snapshot], null));

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var handle_store_change = (function (){
if(snapshot_changed_QMARK__75179(state.inst.value,state.inst.getSnapshot)){
var G__75054 = ({"inst": state.inst});
return (force_update.cljs$core$IFn$_invoke$arity$1 ? force_update.cljs$core$IFn$_invoke$arity$1(G__75054) : force_update.call(null,G__75054));
} else {
return null;
}
});
handle_store_change();

return (subscribe.cljs$core$IFn$_invoke$arity$1 ? subscribe.cljs$core$IFn$_invoke$arity$1(handle_store_change) : subscribe.call(null,handle_store_change));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [subscribe], null));

uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1(value);

return value;
}
});
uix.hooks.alpha.use_sync_external_store_with_selector = (function uix$hooks$alpha$use_sync_external_store_with_selector(subscribe,get_snapshot,get_server_snapshot,selector){
var ref = uix.hooks.alpha.use_ref(null);
var inst = (function (){var or__5141__auto__ = ref.current;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return ({"hasValue": false, "value": null});
}
})();
var _ = (ref.current = inst);
var vec__75056 = uix.hooks.alpha.use_memo((function (){
var memo_QMARK_ = cljs.core.volatile_BANG_(false);
var snapshot = cljs.core.volatile_BANG_(null);
var selection = cljs.core.volatile_BANG_(null);
var selector__$1 = (function (next_snapshot){
if(cljs.core.not(cljs.core.deref(memo_QMARK_))){
var next_selection = (selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(next_snapshot) : selector.call(null,next_snapshot));
cljs.core.vreset_BANG_(memo_QMARK_,true);

cljs.core.vreset_BANG_(snapshot,next_snapshot);

if(cljs.core.truth_((function (){var and__5139__auto__ = inst.hasValue;
if(cljs.core.truth_(and__5139__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst.value,next_selection);
} else {
return and__5139__auto__;
}
})())){
return cljs.core.vreset_BANG_(selection,inst.value);
} else {
return cljs.core.vreset_BANG_(selection,next_selection);
}
} else {
var prev_snapshot = cljs.core.deref(snapshot);
var prev_selection = cljs.core.deref(selection);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_snapshot,next_snapshot)){
return prev_selection;
} else {
var next_selection = (selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(next_snapshot) : selector.call(null,next_snapshot));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_selection,next_selection)){
cljs.core.vreset_BANG_(snapshot,next_snapshot);

return prev_selection;
} else {
cljs.core.vreset_BANG_(snapshot,next_snapshot);

return cljs.core.vreset_BANG_(selection,next_selection);
}
}
}
});
var get_snapshot_with_selector = (function (){
return selector__$1((get_snapshot.cljs$core$IFn$_invoke$arity$0 ? get_snapshot.cljs$core$IFn$_invoke$arity$0() : get_snapshot.call(null)));
});
var get_server_snapshot_with_selector = (cljs.core.truth_(get_server_snapshot)?(function (){
return selector__$1((get_server_snapshot.cljs$core$IFn$_invoke$arity$0 ? get_server_snapshot.cljs$core$IFn$_invoke$arity$0() : get_server_snapshot.call(null)));
}):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [get_snapshot_with_selector,get_server_snapshot_with_selector], null);
}),[get_snapshot,get_server_snapshot,selector]);
var get_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75056,(0),null);
var get_server_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75056,(1),null);
var value = uix.hooks.alpha.use_sync_external_store_STAR_(subscribe,get_selection,get_server_selection);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
(inst.hasValue = true);

return (inst.value = value);
}),[value]);

uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1(value);

return value;
});
uix.hooks.alpha.use_sync_external_store = (function uix$hooks$alpha$use_sync_external_store(var_args){
var G__75094 = arguments.length;
switch (G__75094) {
case 2:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2 = (function (subscribe,get_snapshot){
return uix.hooks.alpha.use_sync_external_store_STAR_(subscribe,get_snapshot,undefined);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3 = (function (subscribe,get_snapshot,get_server_snapshot){
return uix.hooks.alpha.use_sync_external_store_STAR_(subscribe,get_snapshot,get_server_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$4 = (function (subscribe,get_snapshot,get_server_snapshot,selector){
return uix.hooks.alpha.use_sync_external_store_with_selector(subscribe,get_snapshot,get_server_snapshot,selector);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$lang$maxFixedArity = 4);

uix.hooks.alpha.use_optimistic = (function uix$hooks$alpha$use_optimistic(state,update_fn){
return module$node_modules$react$index.useOptimistic(state,update_fn);
});
uix.hooks.alpha.use_action_state = (function uix$hooks$alpha$use_action_state(var_args){
var G__75121 = arguments.length;
switch (G__75121) {
case 2:
return uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$2 = (function (f,state){
return module$node_modules$react$index.useActionState(f,state);
}));

(uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$3 = (function (f,state,permalink){
return module$node_modules$react$index.useActionState(f,state,permalink);
}));

(uix.hooks.alpha.use_action_state.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use = (function uix$hooks$alpha$use(resource){
return module$node_modules$react$index.use(resource);
});
/**
 * Takes an atom-like ref type and returns a function
 *   that adds change listeners to the ref
 */
uix.hooks.alpha.use_batched_subscribe = (function uix$hooks$alpha$use_batched_subscribe(ref){
return uix.hooks.alpha.use_callback((function (listener){
var listeners_75186 = (function (){var or__5141__auto__ = ref.react_listeners;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
})();
(ref.react_listeners = listeners_75186);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_75186,cljs.core.conj,listener);

cljs.core._add_watch(ref,new cljs.core.Keyword("uix.hooks.alpha","listener","uix.hooks.alpha/listener",1528737442),(function (k,r,o,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o,n)){
return module$node_modules$scheduler$index.unstable_scheduleCallback(module$node_modules$scheduler$index.unstable_ImmediatePriority,(function (){
var seq__75133 = cljs.core.seq(cljs.core.deref(listeners_75186));
var chunk__75134 = null;
var count__75135 = (0);
var i__75136 = (0);
while(true){
if((i__75136 < count__75135)){
var listener__$1 = chunk__75134.cljs$core$IIndexed$_nth$arity$2(null,i__75136);
(listener__$1.cljs$core$IFn$_invoke$arity$0 ? listener__$1.cljs$core$IFn$_invoke$arity$0() : listener__$1.call(null));


var G__75187 = seq__75133;
var G__75188 = chunk__75134;
var G__75189 = count__75135;
var G__75190 = (i__75136 + (1));
seq__75133 = G__75187;
chunk__75134 = G__75188;
count__75135 = G__75189;
i__75136 = G__75190;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__75133);
if(temp__5823__auto__){
var seq__75133__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75133__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__75133__$1);
var G__75191 = cljs.core.chunk_rest(seq__75133__$1);
var G__75192 = c__5672__auto__;
var G__75193 = cljs.core.count(c__5672__auto__);
var G__75194 = (0);
seq__75133 = G__75191;
chunk__75134 = G__75192;
count__75135 = G__75193;
i__75136 = G__75194;
continue;
} else {
var listener__$1 = cljs.core.first(seq__75133__$1);
(listener__$1.cljs$core$IFn$_invoke$arity$0 ? listener__$1.cljs$core$IFn$_invoke$arity$0() : listener__$1.call(null));


var G__75195 = cljs.core.next(seq__75133__$1);
var G__75196 = null;
var G__75197 = (0);
var G__75198 = (0);
seq__75133 = G__75195;
chunk__75134 = G__75196;
count__75135 = G__75197;
i__75136 = G__75198;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
}));

return (function (){
var listeners = ref.react_listeners;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.disj,listener);

if(cljs.core.empty_QMARK_(cljs.core.deref(listeners))){
(ref.react_listeners = null);

return cljs.core._remove_watch(ref,new cljs.core.Keyword("uix.hooks.alpha","listener","uix.hooks.alpha/listener",1528737442));
} else {
return null;
}
});
}),[ref]);
});

//# sourceMappingURL=uix.hooks.alpha.js.map
