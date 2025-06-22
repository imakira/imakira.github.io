goog.provide('app.core');
app.core.header = (function app$core$header(){
var f__38597__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___50861 = app.core.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___50861)){
var f__38539__auto___50862 = temp__5804__auto___50861;
(f__38539__auto___50862.cljs$core$IFn$_invoke$arity$0 ? f__38539__auto___50862.cljs$core$IFn$_invoke$arity$0() : f__38539__auto___50862.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("header",[{'className':"app-header"}],[uix.compiler.aot._GT_el("img",[{'src':"https://raw.githubusercontent.com/pitch-io/uix/master/logo.png",'width':(32)}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__50762 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__50763 = app.core.header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__50763);

try{return f__38597__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__50762);
}} else {
return f__38597__auto__();
}
});

(app.core.header.uix_component_QMARK_ = true);

(app.core.header.displayName = "app.core/header");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38548__auto___50863 = window.uix.dev.signature_BANG_();
(sig__38548__auto___50863.cljs$core$IFn$_invoke$arity$4 ? sig__38548__auto___50863.cljs$core$IFn$_invoke$arity$4(app.core.header,"",null,null) : sig__38548__auto___50863.call(null, app.core.header,"",null,null));

window.uix.dev.register_BANG_(app.core.header,app.core.header.displayName);

(app.core.header.fast_refresh_signature = sig__38548__auto___50863);
} else {
}
} else {
}
app.core.footer = (function app$core$footer(){
var f__38597__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___50864 = app.core.footer.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___50864)){
var f__38539__auto___50865 = temp__5804__auto___50864;
(f__38539__auto___50865.cljs$core$IFn$_invoke$arity$0 ? f__38539__auto___50865.cljs$core$IFn$_invoke$arity$0() : f__38539__auto___50865.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("footer",[{'className':"app-footer"}],[uix.compiler.aot._GT_el("small",uix.compiler.attributes.interpret_attrs("made with ",["small",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://github.com/pitch-io/uix"}],["UIx"])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__50764 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__50765 = app.core.footer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__50765);

try{return f__38597__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__50764);
}} else {
return f__38597__auto__();
}
});

(app.core.footer.uix_component_QMARK_ = true);

(app.core.footer.displayName = "app.core/footer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38548__auto___50866 = window.uix.dev.signature_BANG_();
(sig__38548__auto___50866.cljs$core$IFn$_invoke$arity$4 ? sig__38548__auto___50866.cljs$core$IFn$_invoke$arity$4(app.core.footer,"",null,null) : sig__38548__auto___50866.call(null, app.core.footer,"",null,null));

window.uix.dev.register_BANG_(app.core.footer,app.core.footer.displayName);

(app.core.footer.fast_refresh_signature = sig__38548__auto___50866);
} else {
}
} else {
}
app.core.text_field = (function app$core$text_field(props__38599__auto__){
var clj_props__38600__auto__ = uix.core.glue_args(props__38599__auto__);
var vec__50767 = [clj_props__38600__auto__];
var map__50770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50767,(0),null);
var map__50770__$1 = cljs.core.__destructure_map(map__50770);
var on_add_todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50770__$1,new cljs.core.Keyword(null,"on-add-todo","on-add-todo",-5337228));
var f__38601__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___50867 = app.core.text_field.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___50867)){
var f__38539__auto___50868 = temp__5804__auto___50867;
(f__38539__auto___50868.cljs$core$IFn$_invoke$arity$0 ? f__38539__auto___50868.cljs$core$IFn$_invoke$arity$0() : f__38539__auto___50868.call(null, ));
} else {
}
} else {
}

var vec__50771 = uix.core.use_state("");
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50771,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50771,(1),null);
return uix.compiler.aot.create_uix_input("input",[{'value':uix.compiler.attributes.keyword__GT_string(value),'placeholder':"Add a new todo and hit Enter to save",'onChange':(function (e){
var G__50774 = e.target.value;
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__50774) : set_value_BANG_.call(null, G__50774));
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_value_BANG_.call(null, ""));

var G__50775 = (function (p1__50766_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50766_SHARP_,Date.now(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),value,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unresolved","unresolved",833458441)], null));
});
return (on_add_todo.cljs$core$IFn$_invoke$arity$1 ? on_add_todo.cljs$core$IFn$_invoke$arity$1(G__50775) : on_add_todo.call(null, G__50775));
} else {
return null;
}
}),'className':"text-input"}],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__50776 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__50777 = app.core.text_field;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__50777);

try{if(((cljs.core.map_QMARK_(clj_props__38600__auto__)) || ((clj_props__38600__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38600__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38600__auto__) (clojure.core/nil? clj-props__38600__auto__))"].join('')));
}

return f__38601__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__50776);
}} else {
return f__38601__auto__();
}
});

(app.core.text_field.uix_component_QMARK_ = true);

(app.core.text_field.displayName = "app.core/text-field");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38548__auto___50869 = window.uix.dev.signature_BANG_();
(sig__38548__auto___50869.cljs$core$IFn$_invoke$arity$4 ? sig__38548__auto___50869.cljs$core$IFn$_invoke$arity$4(app.core.text_field,"(uix/use-state \"\")",null,null) : sig__38548__auto___50869.call(null, app.core.text_field,"(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(app.core.text_field,app.core.text_field.displayName);

(app.core.text_field.fast_refresh_signature = sig__38548__auto___50869);
} else {
}
} else {
}
app.core.editable_text = (function app$core$editable_text(props__38599__auto__){
var clj_props__38600__auto__ = uix.core.glue_args(props__38599__auto__);
var vec__50778 = [clj_props__38600__auto__];
var map__50781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50778,(0),null);
var map__50781__$1 = cljs.core.__destructure_map(map__50781);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50781__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50781__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var on_done_editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50781__$1,new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127));
var f__38601__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___50870 = app.core.editable_text.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___50870)){
var f__38539__auto___50871 = temp__5804__auto___50870;
(f__38539__auto___50871.cljs$core$IFn$_invoke$arity$0 ? f__38539__auto___50871.cljs$core$IFn$_invoke$arity$0() : f__38539__auto___50871.call(null, ));
} else {
}
} else {
}

var vec__50782 = uix.core.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50782,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50782,(1),null);
var vec__50785 = uix.core.use_state("");
var editing_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50785,(0),null);
var set_editing_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50785,(1),null);
if(cljs.core.truth_(editing_QMARK_)){
return uix.compiler.aot.create_uix_input("input",[{'value':uix.compiler.attributes.keyword__GT_string(editing_value),'autoFocus':true,'onChange':(function (e){
var G__50788 = e.target.value;
return (set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__50788) : set_editing_value_BANG_.call(null, G__50788));
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
(set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_editing_value_BANG_.call(null, ""));

(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null, false));

return (on_done_editing.cljs$core$IFn$_invoke$arity$1 ? on_done_editing.cljs$core$IFn$_invoke$arity$1(editing_value) : on_done_editing.call(null, editing_value));
} else {
return null;
}
}),'className':"todo-item-text-field"}],[]);
} else {
return uix.compiler.aot._GT_el("span",[{'style':uix.compiler.attributes.convert_props(text_style,[],true),'onClick':(function (_){
(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_editing_BANG_.call(null, true));

return (set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1(text) : set_editing_value_BANG_.call(null, text));
}),'className':"todo-item-text"}],[text]);
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__50789 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__50790 = app.core.editable_text;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__50790);

try{if(((cljs.core.map_QMARK_(clj_props__38600__auto__)) || ((clj_props__38600__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38600__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38600__auto__) (clojure.core/nil? clj-props__38600__auto__))"].join('')));
}

return f__38601__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__50789);
}} else {
return f__38601__auto__();
}
});

(app.core.editable_text.uix_component_QMARK_ = true);

(app.core.editable_text.displayName = "app.core/editable-text");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38548__auto___50872 = window.uix.dev.signature_BANG_();
(sig__38548__auto___50872.cljs$core$IFn$_invoke$arity$4 ? sig__38548__auto___50872.cljs$core$IFn$_invoke$arity$4(app.core.editable_text,"(uix/use-state false)(uix/use-state \"\")",null,null) : sig__38548__auto___50872.call(null, app.core.editable_text,"(uix/use-state false)(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(app.core.editable_text,app.core.editable_text.displayName);

(app.core.editable_text.fast_refresh_signature = sig__38548__auto___50872);
} else {
}
} else {
}
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","status","todo/status",-2085495639),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),"null",new cljs.core.Keyword(null,"resolved","resolved",968763567),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),null,new cljs.core.Keyword(null,"resolved","resolved",968763567),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","item","todo/item",253995720),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50791){
return cljs.core.map_QMARK_(G__50791);
}),(function (G__50791){
return cljs.core.contains_QMARK_(G__50791,new cljs.core.Keyword(null,"text","text",-1790561697));
}),(function (G__50791){
return cljs.core.contains_QMARK_(G__50791,new cljs.core.Keyword(null,"status","status",-1997798413));
})], null),(function (G__50791){
return ((cljs.core.map_QMARK_(G__50791)) && (((cljs.core.contains_QMARK_(G__50791,new cljs.core.Keyword(null,"text","text",-1790561697))) && (cljs.core.contains_QMARK_(G__50791,new cljs.core.Keyword(null,"status","status",-1997798413))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"text","text",-1790561697))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"status","status",-1997798413)))], null),null])));
app.core.todo_item = (function app$core$todo_item(props__38599__auto__){
var clj_props__38600__auto__ = uix.core.glue_args(props__38599__auto__);
var vec__50795 = [clj_props__38600__auto__];
var map__50798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50795,(0),null);
var map__50798__$1 = cljs.core.__destructure_map(map__50798);
var props = map__50798__$1;
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50798__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50798__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50798__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var on_update_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50798__$1,new cljs.core.Keyword(null,"on-update-todos","on-update-todos",104460067));
var f__38601__auto__ = (function (){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo","item","todo/item",253995720),props)){
} else {
throw (new Error("Assert failed: (s/valid? :todo/item props)"));
}

if(goog.DEBUG){
var temp__5804__auto___50873 = app.core.todo_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___50873)){
var f__38539__auto___50874 = temp__5804__auto___50873;
(f__38539__auto___50874.cljs$core$IFn$_invoke$arity$0 ? f__38539__auto___50874.cljs$core$IFn$_invoke$arity$0() : f__38539__auto___50874.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(created_at),'className':"todo-item"}],[uix.compiler.aot.create_uix_input("input",[{'type':"checkbox",'checked':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"resolved","resolved",968763567)),'onChange':(function (_){
var G__50799 = (function (p1__50792_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__50792_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [created_at,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),new cljs.core.Keyword(null,"resolved","resolved",968763567),new cljs.core.Keyword(null,"resolved","resolved",968763567),new cljs.core.Keyword(null,"unresolved","unresolved",833458441)], null));
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__50799) : on_update_todos.call(null, G__50799));
}),'className':"todo-item-control"}],[]),uix.compiler.alpha.component_element(app.core.editable_text,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolved","resolved",968763567),status))?new cljs.core.Keyword(null,"line-through","line-through",-250988971):null)], null),new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127),(function (value){
var G__50800 = (function (p1__50793_SHARP_){
return cljs.core.assoc_in(p1__50793_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [created_at,new cljs.core.Keyword(null,"text","text",-1790561697)], null),value);
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__50800) : on_update_todos.call(null, G__50800));
})], null)],[]),uix.compiler.aot._GT_el("button",[{'onClick':(function (_){
var G__50801 = (function (p1__50794_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50794_SHARP_,created_at);
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__50801) : on_update_todos.call(null, G__50801));
}),'className':"todo-item-delete-button"}],["\u00D7"])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__50802 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__50803 = app.core.todo_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__50803);

try{if(((cljs.core.map_QMARK_(clj_props__38600__auto__)) || ((clj_props__38600__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38600__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38600__auto__) (clojure.core/nil? clj-props__38600__auto__))"].join('')));
}

return f__38601__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__50802);
}} else {
return f__38601__auto__();
}
});

(app.core.todo_item.uix_component_QMARK_ = true);

(app.core.todo_item.displayName = "app.core/todo-item");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38548__auto___50875 = window.uix.dev.signature_BANG_();
(sig__38548__auto___50875.cljs$core$IFn$_invoke$arity$4 ? sig__38548__auto___50875.cljs$core$IFn$_invoke$arity$4(app.core.todo_item,"",null,null) : sig__38548__auto___50875.call(null, app.core.todo_item,"",null,null));

window.uix.dev.register_BANG_(app.core.todo_item,app.core.todo_item.displayName);

(app.core.todo_item.fast_refresh_signature = sig__38548__auto___50875);
} else {
}
} else {
}
/**
 * Loads initial state from local storage and persists every updated state value
 *   Returns a tuple of the current state value and an updater function
 */
app.core.use_persistent_state = (function app$core$use_persistent_state(store_key,initial_value){
var vec__50805 = uix.core.use_state(initial_value);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50805,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50805,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var value__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(store_key));
var G__50809 = (function (p1__50804_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__50804_SHARP_,value__$1);
});
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__50809) : set_value_BANG_.call(null, G__50809));
}),uix.core.jsfy_deps([store_key]));

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return localStorage.setItem(store_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}),uix.core.jsfy_deps([value,store_key]));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,set_value_BANG_], null);
});
app.core.blog_item = (function app$core$blog_item(props__38599__auto__){
var clj_props__38600__auto__ = uix.core.glue_args(props__38599__auto__);
var vec__50810 = [clj_props__38600__auto__];
var map__50813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50810,(0),null);
var map__50813__$1 = cljs.core.__destructure_map(map__50813);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50813__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var onclick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50813__$1,new cljs.core.Keyword(null,"onclick","onclick",1297553739));
var f__38601__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___50876 = app.core.blog_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___50876)){
var f__38539__auto___50877 = temp__5804__auto___50876;
(f__38539__auto___50877.cljs$core$IFn$_invoke$arity$0 ? f__38539__auto___50877.cljs$core$IFn$_invoke$arity$0() : f__38539__auto___50877.call(null, ));
} else {
}
} else {
}

var map__50814 = preview;
var map__50814__$1 = cljs.core.__destructure_map(map__50814);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"title","title",636505583));
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var preview__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var created_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"created-date","created-date",929108256));
var modified_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"modified-date","modified-date",-227695430));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"author","author",2111686192));
return uix.compiler.aot._GT_el("div",[{'className':"blog-item"}],[uix.compiler.aot._GT_el("div",[{'className':"top-annot"}],[uix.compiler.aot._GT_el("div",[({})],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(created_date,["span",null,"date",false],false),[])])]),uix.compiler.aot._GT_el("div",[{'className':"blog-title"}],[uix.compiler.aot._GT_el("a",[{'href':uix.compiler.attributes.keyword__GT_string(identifier)}],[uix.compiler.aot._GT_el("h1",uix.compiler.attributes.interpret_attrs(title,["h1",null,null,false],false),[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__50817 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__50818 = app.core.blog_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__50818);

try{if(((cljs.core.map_QMARK_(clj_props__38600__auto__)) || ((clj_props__38600__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38600__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38600__auto__) (clojure.core/nil? clj-props__38600__auto__))"].join('')));
}

return f__38601__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__50817);
}} else {
return f__38601__auto__();
}
});

(app.core.blog_item.uix_component_QMARK_ = true);

(app.core.blog_item.displayName = "app.core/blog-item");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38548__auto___50878 = window.uix.dev.signature_BANG_();
(sig__38548__auto___50878.cljs$core$IFn$_invoke$arity$4 ? sig__38548__auto___50878.cljs$core$IFn$_invoke$arity$4(app.core.blog_item,"",null,null) : sig__38548__auto___50878.call(null, app.core.blog_item,"",null,null));

window.uix.dev.register_BANG_(app.core.blog_item,app.core.blog_item.displayName);

(app.core.blog_item.fast_refresh_signature = sig__38548__auto___50878);
} else {
}
} else {
}
app.core.sample_blog_items = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Discours  sur l'origine et les fondements de l'in\u00E9galit\u00E9 parmi les hommes",new cljs.core.Keyword(null,"identifier","identifier",-805503498),"this_is_title",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["history","philosphy"], null),new cljs.core.Keyword(null,"preview","preview",451279890),"This is preview",new cljs.core.Keyword(null,"created-date","created-date",929108256),"1970.01.01",new cljs.core.Keyword(null,"modified-date","modified-date",-227695430),"1970/01/01",new cljs.core.Keyword(null,"author","author",2111686192),"akira"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"\u8BBA\u4EBA\u7C7B\u4E0D\u5E73\u7B49\u7684\u8D77\u6E90\u548C\u57FA\u7840",new cljs.core.Keyword(null,"identifier","identifier",-805503498),"this_is_title2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lisp","clojure"], null),new cljs.core.Keyword(null,"preview","preview",451279890),"This is preview",new cljs.core.Keyword(null,"created-date","created-date",929108256),"1970/01/01",new cljs.core.Keyword(null,"modified-date","modified-date",-227695430),"1970/01/01",new cljs.core.Keyword(null,"author","author",2111686192),"akira"], null)], null);
app.core.app = (function app$core$app(){
var f__38597__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___50879 = app.core.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___50879)){
var f__38539__auto___50880 = temp__5804__auto___50879;
(f__38539__auto___50880.cljs$core$IFn$_invoke$arity$0 ? f__38539__auto___50880.cljs$core$IFn$_invoke$arity$0() : f__38539__auto___50880.call(null, ));
} else {
}
} else {
}

var vec__50819 = app.core.use_persistent_state("uix-starter/todos",cljs.core.sorted_map_by(cljs.core._GT_));
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(0),null);
var set_todos_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(1),null);
var vec__50822 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var blogs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50822,(0),null);
var set_blogs_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50822,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var c__37697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37698__auto__ = (function (){var switch__37603__auto__ = (function (state_50847){
var state_val_50848 = (state_50847[(1)]);
if((state_val_50848 === (1))){
var inst_50841 = app.main.fetch_asset("blogs");
var state_50847__$1 = state_50847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50847__$1,(2),inst_50841);
} else {
if((state_val_50848 === (2))){
var inst_50843 = (state_50847[(2)]);
var inst_50844 = cljs.core.tap_GT_(inst_50843);
var inst_50845 = (set_blogs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_blogs_BANG_.cljs$core$IFn$_invoke$arity$1(inst_50843) : set_blogs_BANG_.call(null, inst_50843));
var state_50847__$1 = (function (){var statearr_50849 = state_50847;
(statearr_50849[(7)] = inst_50844);

return statearr_50849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50847__$1,inst_50845);
} else {
return null;
}
}
});
return (function() {
var app$core$app_$_state_machine__37604__auto__ = null;
var app$core$app_$_state_machine__37604__auto____0 = (function (){
var statearr_50850 = [null,null,null,null,null,null,null,null];
(statearr_50850[(0)] = app$core$app_$_state_machine__37604__auto__);

(statearr_50850[(1)] = (1));

return statearr_50850;
});
var app$core$app_$_state_machine__37604__auto____1 = (function (state_50847){
while(true){
var ret_value__37605__auto__ = (function (){try{while(true){
var result__37606__auto__ = switch__37603__auto__(state_50847);
if(cljs.core.keyword_identical_QMARK_(result__37606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37606__auto__;
}
break;
}
}catch (e50851){var ex__37607__auto__ = e50851;
var statearr_50852_50881 = state_50847;
(statearr_50852_50881[(2)] = ex__37607__auto__);


if(cljs.core.seq((state_50847[(4)]))){
var statearr_50853_50882 = state_50847;
(statearr_50853_50882[(1)] = cljs.core.first((state_50847[(4)])));

} else {
throw ex__37607__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50883 = state_50847;
state_50847 = G__50883;
continue;
} else {
return ret_value__37605__auto__;
}
break;
}
});
app$core$app_$_state_machine__37604__auto__ = function(state_50847){
switch(arguments.length){
case 0:
return app$core$app_$_state_machine__37604__auto____0.call(this);
case 1:
return app$core$app_$_state_machine__37604__auto____1.call(this,state_50847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$app_$_state_machine__37604__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$app_$_state_machine__37604__auto____0;
app$core$app_$_state_machine__37604__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$app_$_state_machine__37604__auto____1;
return app$core$app_$_state_machine__37604__auto__;
})()
})();
var state__37699__auto__ = (function (){var statearr_50854 = f__37698__auto__();
(statearr_50854[(6)] = c__37697__auto__);

return statearr_50854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37699__auto__);
}));

return c__37697__auto__;
}),uix.core.jsfy_deps([]));

return uix.compiler.aot._GT_el("div",[{'className':"app"}],[(function (){var iter__5523__auto__ = (function app$core$app_$_iter__50855(s__50856){
return (new cljs.core.LazySeq(null,(function (){
var s__50856__$1 = s__50856;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__50856__$1);
if(temp__5804__auto__){
var s__50856__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50856__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50856__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50858 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50857 = (0);
while(true){
if((i__50857 < size__5522__auto__)){
var blog = cljs.core._nth(c__5521__auto__,i__50857);
cljs.core.chunk_append(b__50858,uix.compiler.alpha.component_element(app.core.blog_item,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preview","preview",451279890),blog,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(blog)], null)],[]));

var G__50884 = (i__50857 + (1));
i__50857 = G__50884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50858),app$core$app_$_iter__50855(cljs.core.chunk_rest(s__50856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50858),null);
}
} else {
var blog = cljs.core.first(s__50856__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.blog_item,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preview","preview",451279890),blog,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(blog)], null)],[]),app$core$app_$_iter__50855(cljs.core.rest(s__50856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(blogs);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__50859 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__50860 = app.core.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__50860);

try{return f__38597__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__50859);
}} else {
return f__38597__auto__();
}
});

(app.core.app.uix_component_QMARK_ = true);

(app.core.app.displayName = "app.core/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38548__auto___50885 = window.uix.dev.signature_BANG_();
(sig__38548__auto___50885.cljs$core$IFn$_invoke$arity$4 ? sig__38548__auto___50885.cljs$core$IFn$_invoke$arity$4(app.core.app,"(use-persistent-state \"uix-starter/todos\" (sorted-map-by >))(use-state [])(use-effect (fn [] (a/go (set-blogs! (doto (a/<! (main/fetch-asset \"blogs\")) tap>)))) [])",null,null) : sig__38548__auto___50885.call(null, app.core.app,"(use-persistent-state \"uix-starter/todos\" (sorted-map-by >))(use-state [])(use-effect (fn [] (a/go (set-blogs! (doto (a/<! (main/fetch-asset \"blogs\")) tap>)))) [])",null,null));

window.uix.dev.register_BANG_(app.core.app,app.core.app.displayName);

(app.core.app.fast_refresh_signature = sig__38548__auto___50885);
} else {
}
} else {
}
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("root"));
}
app.core.render = (function app$core$render(){
return uix.dom.render_root(uix.compiler.alpha.component_element(app.core.app,[null],[]),app.core.root);
});
app.core.init = (function app$core$init(){
return console.log("123");
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
