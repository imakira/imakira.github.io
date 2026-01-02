import "./cljs_env.js";
import "./cljs.core.js";
import "./uix.core.js";
import "./net.coruscation.cerulean.utils.js";
import "./net.coruscation.cerulean.common.components.js";
import "./cljs.pprint.js";
goog.provide('orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i');
orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$orgx_example(props__39433__auto__){
var props101810 = uix.core.glue_args(props__39433__auto__);
var props = props101810;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101810);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101975 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101975)){
var f__39348__auto___101976 = temp__5823__auto___101975;
(f__39348__auto___101976.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101976.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101976.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org33e04c8"}], ...["#+ORGX: true\n\n/*Hello* from @@orgx:($ :span \"OrgX\")@@/\n\n#+begin_orgx\n($ :div (str \"Hello\" \" World!\"))\n#+end_orgx\n"])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101813 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101814 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101814);

try{if(((cljs.core.map_QMARK_(props101810)) || ((props101810 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101810)))+"\n"+"(clojure.core/or (clojure.core/map? props101810) (clojure.core/nil? props101810))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101813);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/orgx-example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101977 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101977.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101977.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,"",null,null) : sig__39357__auto___101977.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example.fast_refresh_signature = sig__39357__auto___101977);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$orgx_cljc(props__39433__auto__){
var props101827 = uix.core.glue_args(props__39433__auto__);
var props = props101827;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101827);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101978 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101978)){
var f__39348__auto___101979 = temp__5823__auto___101978;
(f__39348__auto___101979.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101979.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101979.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-src-container")}], ...[uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-highlighted")}], ...[uix.compiler.alpha.create_element_STAR_("code", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"lang-clojure")}], ...["(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["ns"])])," orgx.example\n  (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":require"])," [uix.core ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":as"])," uix ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":refer"]),"\n             [defui use-state use-effect use-context $]]))\n\n(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," _comp [post-props]\n  ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":<>"]),"\n     ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":p"])," {} ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":i"])," {}\n                 ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":b"])," {} ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"Hello\""]),")\n                 ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\" from \""]),"\n                 ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":span"])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"OrgX\""]),")))\n     ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":div"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["str"])])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"Hello\""])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\" World!\""]),"))))\n\n(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," component [props]\n  ($ _comp (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["merge"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["quote"])])," {#_",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"default properties\""]),"}) props)))\n"])])])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101833 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101834 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101834);

try{if(((cljs.core.map_QMARK_(props101827)) || ((props101827 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101827)))+"\n"+"(clojure.core/or (clojure.core/map? props101827) (clojure.core/nil? props101827))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101833);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/orgx-cljc");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101980 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101980.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101980.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,"",null,null) : sig__39357__auto___101980.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc.fast_refresh_signature = sig__39357__auto___101980);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$my_button(props__39433__auto__){
var props101836 = uix.core.glue_args(props__39433__auto__);
var map__101837 = props101836;
var map__101837__$1 = cljs.core.__destructure_map(map__101837);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101837__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101836);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101981 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101981)){
var f__39348__auto___101982 = temp__5823__auto___101981;
(f__39348__auto___101982.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101982.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101982.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg"),'onClick':(function() { 
var G__101983__delegate = function (_){
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
};
var G__101983 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__101984__i = 0, G__101984__a = new Array(arguments.length -  0);
while (G__101984__i < G__101984__a.length) {G__101984__a[G__101984__i] = arguments[G__101984__i + 0]; ++G__101984__i;}
  _ = new cljs.core.IndexedSeq(G__101984__a,0,null);
} 
return G__101983__delegate.call(this,_);};
G__101983.cljs$lang$maxFixedArity = 0;
G__101983.cljs$lang$applyTo = (function (arglist__101985){
var _ = cljs.core.seq(arglist__101985);
return G__101983__delegate(_);
});
G__101983.cljs$core$IFn$_invoke$arity$variadic = G__101983__delegate;
return G__101983;
})()
}],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101838 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101839 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101839);

try{if(((cljs.core.map_QMARK_(props101836)) || ((props101836 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101836)))+"\n"+"(clojure.core/or (clojure.core/map? props101836) (clojure.core/nil? props101836))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101838);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/my-button");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101986 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101986.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101986.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,"",null,null) : sig__39357__auto___101986.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button.fast_refresh_signature = sig__39357__auto___101986);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$mybutton_example(props__39433__auto__){
var props101841 = uix.core.glue_args(props__39433__auto__);
var props = props101841;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101841);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101987 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101987)){
var f__39348__auto___101988 = temp__5823__auto___101987;
(f__39348__auto___101988.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101988.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101988.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgc61eca7"}], ...["Inline OrgX block:\n@@orgx:($ my-button {:callback (fn [] #?(:cljs (js/alert \"Hello From inline OrgX\")))} \"From inline OrgX\")@@\n#+begin_orgx\n($ :div \"We can also use it in a orgx block\"\n    ($ my-button {:callback (fn [] #?(:cljs (js/alert \"Hello from OrgX block!\")))}\n         \"From OrgX block\"))\n#+end_orgx\n"])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101842 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101843 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101843);

try{if(((cljs.core.map_QMARK_(props101841)) || ((props101841 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101841)))+"\n"+"(clojure.core/or (clojure.core/map? props101841) (clojure.core/nil? props101841))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101842);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/mybutton_example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101989 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101989.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101989.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,"",null,null) : sig__39357__auto___101989.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example.fast_refresh_signature = sig__39357__auto___101989);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$mybutton_result(props__39433__auto__){
var props101847 = uix.core.glue_args(props__39433__auto__);
var props = props101847;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101847);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101990 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101990)){
var f__39348__auto___101991 = temp__5823__auto___101990;
(f__39348__auto___101991.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101991.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101991.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("p",[null],["\nInline OrgX block:\n",uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return alert("Hello From inline OrgX");
})], null)],["From inline OrgX"])])],[uix.compiler.aot._GT_el("div",[null,"We can also use it in a orgx block"],[uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return alert("Hello from OrgX block!");
})], null)],["From OrgX block"])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101848 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101849 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101849);

try{if(((cljs.core.map_QMARK_(props101847)) || ((props101847 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101847)))+"\n"+"(clojure.core/or (clojure.core/map? props101847) (clojure.core/nil? props101847))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101848);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/mybutton_result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101992 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101992.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101992.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,"",null,null) : sig__39357__auto___101992.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result.fast_refresh_signature = sig__39357__auto___101992);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$metadata_example(props__39433__auto__){
var props101851 = uix.core.glue_args(props__39433__auto__);
var props = props101851;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101851);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101993 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101993)){
var f__39348__auto___101994 = temp__5823__auto___101993;
(f__39348__auto___101994.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101994.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101994.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org5a996f6"}], ...["($ :pre\n  (with-out-str\n     (pprint/pprint post-props)))\n"])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101852 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101853 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101853);

try{if(((cljs.core.map_QMARK_(props101851)) || ((props101851 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101851)))+"\n"+"(clojure.core/or (clojure.core/map? props101851) (clojure.core/nil? props101851))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101852);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/metadata-example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101995 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101995.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101995.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,"",null,null) : sig__39357__auto___101995.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example.fast_refresh_signature = sig__39357__auto___101995);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$orgx_syntax_example(props__39433__auto__){
var props101857 = uix.core.glue_args(props__39433__auto__);
var props = props101857;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101857);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101996 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101996)){
var f__39348__auto___101997 = temp__5823__auto___101996;
(f__39348__auto___101997.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101997.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101997.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org48f6405"}], ...["#+begin_orgx_note\nThis is a note\n\n+ /Normal/ Org markups *can* be used inside it\n\n@@orgx:($ :span \"You can even nest OrgX syntax in it\")@@\n#+end_orgx_note\n"])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101858 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101859 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101859);

try{if(((cljs.core.map_QMARK_(props101857)) || ((props101857 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101857)))+"\n"+"(clojure.core/or (clojure.core/map? props101857) (clojure.core/nil? props101857))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101858);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/orgx_syntax_example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101998 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101998.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101998.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,"",null,null) : sig__39357__auto___101998.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example.fast_refresh_signature = sig__39357__auto___101998);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$orgx_syntax_result(props__39433__auto__){
var props101863 = uix.core.glue_args(props__39433__auto__);
var props = props101863;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101863);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101999 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101999)){
var f__39348__auto___102000 = temp__5823__auto___101999;
(f__39348__auto___102000.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102000.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102000.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is a note\n"])],[uix.compiler.alpha.create_element_STAR_("ul", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-ul")}], ...[uix.compiler.alpha.create_element_STAR_("li", ...[null], ...[uix.compiler.alpha.create_element_STAR_("i", ...[null], ...["Normal"])," Org markups ",uix.compiler.alpha.create_element_STAR_("b", ...[null], ...["can"])," be used inside it"])]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...[uix.compiler.alpha.create_element_STAR_("span", ...[null,"You can even nest OrgX syntax in it"], ...[])])])])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101864 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101865 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101865);

try{if(((cljs.core.map_QMARK_(props101863)) || ((props101863 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101863)))+"\n"+"(clojure.core/or (clojure.core/map? props101863) (clojure.core/nil? props101863))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101864);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/orgx_syntax_result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102001 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102001.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102001.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,"",null,null) : sig__39357__auto___102001.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result.fast_refresh_signature = sig__39357__auto___102001);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$my_note(props__39433__auto__){
var props101869 = uix.core.glue_args(props__39433__auto__);
var props = props101869;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101869);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102002 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102002)){
var f__39348__auto___102003 = temp__5823__auto___102002;
(f__39348__auto___102003.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102003.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102003.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("p",[null],[uix.compiler.aot._GT_el("b",[null],[(function (){var or__5141__auto__ = new cljs.core.Keyword(null,"note-text","note-text",1656768379).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return "Tip";
}
})()])])],[new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101872 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101873 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101873);

try{if(((cljs.core.map_QMARK_(props101869)) || ((props101869 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101869)))+"\n"+"(clojure.core/or (clojure.core/map? props101869) (clojure.core/nil? props101869))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101872);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/my-note");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102004 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102004.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102004.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,"",null,null) : sig__39357__auto___102004.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note.fast_refresh_signature = sig__39357__auto___102004);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$my_note_example(props__39433__auto__){
var props101877 = uix.core.glue_args(props__39433__auto__);
var props = props101877;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101877);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102005 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102005)){
var f__39348__auto___102006 = temp__5823__auto___102005;
(f__39348__auto___102006.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102006.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102006.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgdf1f9c4"}], ...["#+begin_orgx_my-note\nThis is a note!\n#+end_orgx_my-note\n"])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101880 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101881 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101881);

try{if(((cljs.core.map_QMARK_(props101877)) || ((props101877 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101877)))+"\n"+"(clojure.core/or (clojure.core/map? props101877) (clojure.core/nil? props101877))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101880);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/my-note-example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102007 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102007.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102007.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,"",null,null) : sig__39357__auto___102007.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example.fast_refresh_signature = sig__39357__auto___102007);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$my_note_result(props__39433__auto__){
var props101885 = uix.core.glue_args(props__39433__auto__);
var props = props101885;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101885);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102008 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102008)){
var f__39348__auto___102009 = temp__5823__auto___102008;
(f__39348__auto___102009.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102009.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102009.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is a note!\n"])],[])])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101886 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101887 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101887);

try{if(((cljs.core.map_QMARK_(props101885)) || ((props101885 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101885)))+"\n"+"(clojure.core/or (clojure.core/map? props101885) (clojure.core/nil? props101885))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101886);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/my-note-result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102010 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102010.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102010.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,"",null,null) : sig__39357__auto___102010.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result.fast_refresh_signature = sig__39357__auto___102010);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$macro_example(props__39433__auto__){
var props101889 = uix.core.glue_args(props__39433__auto__);
var props = props101889;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101889);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102011 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102011)){
var f__39348__auto___102012 = temp__5823__auto___102011;
(f__39348__auto___102012.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102012.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102012.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWe can define a macro like:\n"])],[uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgaa3881d"}], ...["#+MACRO: my-button @@orgx:($ my-button {:callback '(or $2 nil)} $1)@@\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAnd then use it with:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org6990884"}], ...["{{{my-button(\"Using Macro\", #?(:cljs (fn [] (js/alert \"Hello From Macro!\"))))}}}\n"])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101890 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101891 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101891);

try{if(((cljs.core.map_QMARK_(props101889)) || ((props101889 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101889)))+"\n"+"(clojure.core/or (clojure.core/map? props101889) (clojure.core/nil? props101889))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101890);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/macro-example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102013 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102013.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102013.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,"",null,null) : sig__39357__auto___102013.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example.fast_refresh_signature = sig__39357__auto___102013);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$macro_result(props__39433__auto__){
var props101893 = uix.core.glue_args(props__39433__auto__);
var props = props101893;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101893);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102014 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102014)){
var f__39348__auto___102015 = temp__5823__auto___102014;
(f__39348__auto___102015.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102015.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102015.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("p",[null],[uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("js","alert","js/alert",1068586668,null),"Hello From Macro!")),null)], null)],["Using Macro"])])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101894 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101895 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101895);

try{if(((cljs.core.map_QMARK_(props101893)) || ((props101893 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101893)))+"\n"+"(clojure.core/or (clojure.core/map? props101893) (clojure.core/nil? props101893))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101894);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/macro-result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102016 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102016.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102016.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,"",null,null) : sig__39357__auto___102016.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result.fast_refresh_signature = sig__39357__auto___102016);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$remarks_example(props__39433__auto__){
var props101897 = uix.core.glue_args(props__39433__auto__);
var props = props101897;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101897);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102017 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102017)){
var f__39348__auto___102018 = temp__5823__auto___102017;
(f__39348__auto___102018.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102018.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102018.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org349fda7"}], ...["#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n\n"])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101898 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101899 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101899);

try{if(((cljs.core.map_QMARK_(props101897)) || ((props101897 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101897)))+"\n"+"(clojure.core/or (clojure.core/map? props101897) (clojure.core/nil? props101897))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101898);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/remarks_example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102019 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102019.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102019.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,"",null,null) : sig__39357__auto___102019.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example.fast_refresh_signature = sig__39357__auto___102019);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$remarks_result(props__39433__auto__){
var props101901 = uix.core.glue_args(props__39433__auto__);
var props = props101901;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101901);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102020 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102020)){
var f__39348__auto___102021 = temp__5823__auto___102020;
(f__39348__auto___102021.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102021.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102021.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.info,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is an info\n"])],[])])],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is a note\n"])],[])]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.warn,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is a warn\n"])],[])]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.error,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is an error\n"])],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101902 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101903 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101903);

try{if(((cljs.core.map_QMARK_(props101901)) || ((props101901 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101901)))+"\n"+"(clojure.core/or (clojure.core/map? props101901) (clojure.core/nil? props101901))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101902);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/remarks_result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102022 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102022.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102022.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,"",null,null) : sig__39357__auto___102022.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result.fast_refresh_signature = sig__39357__auto___102022);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$code_tabs(props__39433__auto__){
var props101905 = uix.core.glue_args(props__39433__auto__);
var props = props101905;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101905);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102023 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102023)){
var f__39348__auto___102024 = temp__5823__auto___102023;
(f__39348__auto___102024.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102024.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102024.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-src-container")}], ...[uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-highlighted")}], ...[uix.compiler.alpha.create_element_STAR_("code", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"lang-clojure")}], ...["(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," tabs [{",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":keys"])," [tab-list default-table class]}]\n  (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["let"])])," [[selected-tab set-selected-tab!] (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["use-state"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["or"])])," default-table\n                                                        (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":name"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["first"])])," tab-list))))]\n    ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":div.my-4.relative.border-sky-300.border-l-2.border-l-neutral-100"])," {",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":class"])," class}\n       ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":div.my-0.flex.relative.bg-neutral-100"]),"\n          (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["map"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," [{",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":keys"])," [name]}]\n                 ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":button.font-medium.text-neutral-700.bg-neutral-50.py-1.px-2.border-t-2.border-neutral-50.min-w-28.bg-neutral-50.border-t-neutral-100"]),"\n                    {",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":key"])," name\n                     ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":class"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["when"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["="])])," name selected-tab)\n                              ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\" text-sky-800 border-sky-400 bg-sky-100 border-t-sky-400\""]),")\n                     ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":on-click"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," []\n                                 #?(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":cljs"]),"\n                                    (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["set-selected-tab!"])," name)))}\n                    name))\n               tab-list))\n       ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":div.my-0.bg-neutral-50.overflow-hidden.px-2.h-full"]),"\n          (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":content"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["first"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["filter"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," [{",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":keys"])," [name]}]\n                                     (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["="])])," name selected-tab))\n                                   tab-list)))))))\n"])])])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101906 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101907 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101907);

try{if(((cljs.core.map_QMARK_(props101905)) || ((props101905 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101905)))+"\n"+"(clojure.core/or (clojure.core/map? props101905) (clojure.core/nil? props101905))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101906);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/code_tabs");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102025 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102025.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102025.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,"",null,null) : sig__39357__auto___102025.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs.fast_refresh_signature = sig__39357__auto___102025);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$tabs_example(props__39433__auto__){
var props101909 = uix.core.glue_args(props__39433__auto__);
var props = props101909;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101909);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102026 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102026)){
var f__39348__auto___102027 = temp__5823__auto___102026;
(f__39348__auto___102027.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102027.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102027.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgebd9d6c"}], ...["#+begin_orgx\n($ tabs {:tab-list [{:name \"tabs.clj\" :content ($ code_tabs)}\n                    {:name \"tabs usage\" :content ($ tabs_example)}]})\n#+end_orgx\n"])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101910 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101911 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101911);

try{if(((cljs.core.map_QMARK_(props101909)) || ((props101909 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101909)))+"\n"+"(clojure.core/or (clojure.core/map? props101909) (clojure.core/nil? props101909))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101910);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/tabs_example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102028 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102028.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102028.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,"",null,null) : sig__39357__auto___102028.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example.fast_refresh_signature = sig__39357__auto___102028);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$tabs_result(props__39433__auto__){
var props101913 = uix.core.glue_args(props__39433__auto__);
var props = props101913;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101913);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102029 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102029)){
var f__39348__auto___102030 = temp__5823__auto___102029;
(f__39348__auto___102030.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102030.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102030.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs.clj",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,[null],[])], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs usage",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,[null],[])], null)], null)], null)],[])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101914 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101915 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101915);

try{if(((cljs.core.map_QMARK_(props101913)) || ((props101913 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101913)))+"\n"+"(clojure.core/or (clojure.core/map? props101913) (clojure.core/nil? props101913))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101914);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/tabs_result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102031 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102031.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102031.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,"",null,null) : sig__39357__auto___102031.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result.fast_refresh_signature = sig__39357__auto___102031);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1 = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$split_1(props__39433__auto__){
var props101917 = uix.core.glue_args(props__39433__auto__);
var props = props101917;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101917);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102032 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102032)){
var f__39348__auto___102033 = temp__5823__auto___102032;
(f__39348__auto___102033.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102033.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102033.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-src-container")}], ...[uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-highlighted")}], ...[uix.compiler.alpha.create_element_STAR_("code", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"lang-clojure")}], ...["($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":button"])," {",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":class"])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\""]),"\n            ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":on-click"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," [& _]\n                        #?(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":cljs"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["js/alert"])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"clicked!\""]),")))}\n   ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"Click Me\""]),")\n"])])])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101918 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101919 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101919);

try{if(((cljs.core.map_QMARK_(props101917)) || ((props101917 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101917)))+"\n"+"(clojure.core/or (clojure.core/map? props101917) (clojure.core/nil? props101917))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101918);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/split_1");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102034 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102034.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102034.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,"",null,null) : sig__39357__auto___102034.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1.fast_refresh_signature = sig__39357__auto___102034);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2 = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$split_2(props__39433__auto__){
var props101921 = uix.core.glue_args(props__39433__auto__);
var props = props101921;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101921);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102035 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102035)){
var f__39348__auto___102036 = temp__5823__auto___102035;
(f__39348__auto___102036.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102036.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102036.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg"),'onClick':(function() { 
var G__102037__delegate = function (_){
return alert("clicked!");
};
var G__102037 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__102038__i = 0, G__102038__a = new Array(arguments.length -  0);
while (G__102038__i < G__102038__a.length) {G__102038__a[G__102038__i] = arguments[G__102038__i + 0]; ++G__102038__i;}
  _ = new cljs.core.IndexedSeq(G__102038__a,0,null);
} 
return G__102037__delegate.call(this,_);};
G__102037.cljs$lang$maxFixedArity = 0;
G__102037.cljs$lang$applyTo = (function (arglist__102039){
var _ = cljs.core.seq(arglist__102039);
return G__102037__delegate(_);
});
G__102037.cljs$core$IFn$_invoke$arity$variadic = G__102037__delegate;
return G__102037;
})()
}],["Click Me"])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101922 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101923 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101923);

try{if(((cljs.core.map_QMARK_(props101921)) || ((props101921 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101921)))+"\n"+"(clojure.core/or (clojure.core/map? props101921) (clojure.core/nil? props101921))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101922);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/split_2");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102040 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102040.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102040.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,"",null,null) : sig__39357__auto___102040.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2.fast_refresh_signature = sig__39357__auto___102040);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$_comp(props__39433__auto__){
var props101933 = uix.core.glue_args(props__39433__auto__);
var post_props = props101933;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101933);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102041 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102041)){
var f__39348__auto___102042 = temp__5823__auto___102041;
(f__39348__auto___102042.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102042.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102042.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://mdxjs.com/"}], ...["MDX"])," is a tool lets you write JavaScript and JSX in a Markdown file. It will then compile the Markdown file into a JavaScript file, so that we can use it from other JavaScript code. I always wanted something similar for my personal blog. For some background, the blogging program is written in Clojure/ClojureScript. The blogging program runs on the JVM, it works by statically generating all the HTML and other files so that the result could be hosted on platforms like Github Pages. Posts of my blog are written in ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://orgmode.org"}], ...["org-mode"]),". As the blog program runs on the JVM, directly using MDX is theoratically possible, but probably would create a lot of frictions.\n"])],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nTherefore I took some time to implement something similar. Albeit it is not fully tested, the result is quite satisfactory: I can embed Clojure code directly in an Org file, or use React components defined in Clojure code with native Org syntax. The Org file can then be converted into a Cljc file and used from other Clojure code.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIn the following sections I will call it ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["OrgX"]),".\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.info,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...[uix.compiler.alpha.create_element_STAR_("i", ...[null], ...["This is part ",uix.compiler.alpha.create_element_STAR_("b", ...[null], ...["one"])," of the series, in this post I will show the features and in the next post I will describe the process of implementing it"])])],[])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-how-orgx-works"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#how-orgx-works"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"how-orgx-works"}], ...["How OrgX Works"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-how-orgx-works"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSimilar to MDX, OrgX works by compiling the OrgX file into a ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://clojure.org/guides/reader_conditionals"}], ...["Cljc"])," file. A basic OrgX file would look like this:\n"]),null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"example.org",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIt will be converted into something similar to the following Clojure snippet.\n"]),null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"orgx/example.cljc",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe blogging program uses ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://github.com/pitch-io/uix?tab=readme-ov-file"}], ...["uix"])," as its React wrapper, thus the generated Clojure code is using uix. Some uix functions like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["$"])," are also imported by default. \n"])],[])]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAs you can see from this example:\n"]),uix.compiler.alpha.create_element_STAR_("ul", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-ul")}], ...[uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["We can ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["@@orgx:@@"])," for inline Clojure code and ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+begin_orgx"])," for Clojure blocks."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["The embedded Clojure code are put in a component called ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["_comp"]),", along with other contents in the Org file."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["The outer ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["component"])," wraps the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["_comp"])," component, its provides some metadata about this post related to the blogging program. More about this on the following sections."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["We can use the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["component"])," component from other Clojure code."])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-basic-usage"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#basic-usage"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"basic-usage"}], ...["Basic Usage"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-basic-usage"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAs we have seen from the earily example, ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+begin_orgx"])," and ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["@@orgx:@@"])," are the most basic structure for standalone and inline Clojure code, respectively.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWe can have a clickable button with the following code.\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgb004ef1"}], ...["#+begin_orgx\n  ;; you can style it using tailwindcss\n  ($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\"\n     :on-click (fn [& _]\n                   #?(:cljs (js/alert \"clicked!\")))}\n  \"click me\")\n#+end_orgx\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThat will be rendered as:\n"]),uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"my-2 bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg"),'onClick':(function() { 
var G__102043__delegate = function (_){
return alert("clicked!");
};
var G__102043 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__102044__i = 0, G__102044__a = new Array(arguments.length -  0);
while (G__102044__i < G__102044__a.length) {G__102044__a[G__102044__i] = arguments[G__102044__i + 0]; ++G__102044__i;}
  _ = new cljs.core.IndexedSeq(G__102044__a,0,null);
} 
return G__102043__delegate.call(this,_);};
G__102043.cljs$lang$maxFixedArity = 0;
G__102043.cljs$lang$applyTo = (function (arglist__102045){
var _ = cljs.core.seq(arglist__102045);
return G__102043__delegate(_);
});
G__102043.cljs$core$IFn$_invoke$arity$variadic = G__102043__delegate;
return G__102043;
})()
}],["Click Me"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nNotice the ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://clojure.org/guides/reader_conditionals"}], ...["reader conditional macro"])," ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#?(:cljs)"]),"  . The generated Clojure code is in a Cljc file, therefore it pairs well with the server side rendering or static generation. However, it also means we need to put the platform specified code in the corresponding reader conditionals.\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org74aeb89"}], ...["We can also use the button inline this way: @@orgx:($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\" :on-click (fn [& _] #?(:cljs (js/alert \"clicked!\")))} \"Click Me\")@@\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe above snippet will be rendered as:\n"]),uix.compiler.aot._GT_el("p",[null],["\nWe can also use the button inline this way: ",uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg"),'onClick':(function() { 
var G__102046__delegate = function (_){
return alert("clicked!");
};
var G__102046 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__102047__i = 0, G__102047__a = new Array(arguments.length -  0);
while (G__102047__i < G__102047__a.length) {G__102047__a[G__102047__i] = arguments[G__102047__i + 0]; ++G__102047__i;}
  _ = new cljs.core.IndexedSeq(G__102047__a,0,null);
} 
return G__102046__delegate.call(this,_);};
G__102046.cljs$lang$maxFixedArity = 0;
G__102046.cljs$lang$applyTo = (function (arglist__102048){
var _ = cljs.core.seq(arglist__102048);
return G__102046__delegate(_);
});
G__102046.cljs$core$IFn$_invoke$arity$variadic = G__102046__delegate;
return G__102046;
})()
}],["Click Me"])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-toplevel-clojure-code"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#toplevel-clojure-code"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"toplevel-clojure-code"}], ...["Toplevel Clojure Code"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-toplevel-clojure-code"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nYou may have noticed that, all the Clojure code being put in a component means that we can't use Clojure code that only works on the top level like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["defn"])," or ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["require"]),". To solve this, we can use ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+attr_orgx_toplevel: true"])," to mark a OrgX block and make its contents appear in toplevel of the generated Clojure file.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nLet's go back to the button example, we can define a ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["my-button"])," component with the following code:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orge24b577"}], ...["#+attr_orgx_toplevel: true\n#+begin_orgx\n(defui my-button [{:keys [children callback]}]\n    ($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\"\n       :on-click (fn [& _]\n                   (if callback (callback)))}\n    children))\n#+end_orgx\n"]),null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["defui"])," will be put on the top level in the generated Clojure code, along side something like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["_comp"]),":\n"]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-src-container")}], ...[uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-highlighted")}], ...[uix.compiler.alpha.create_element_STAR_("code", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"lang-clojure")}], ...["(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["ns"])])," ...)\n(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," my-button [{",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":keys"])," [children callback]}]\n  ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":button"])," {",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":class"])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\""]),"\n              ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":on-click"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," [& _]\n                          #?(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":cljs"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["callback"]),")))}\n     children))\n\n(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," _comp ...)\n"])])]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWe can then easily use the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["my-button"])," component with either inline or standalone OrgX block.\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Example Usage",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,[null],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-import-modules"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#import-modules"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"import-modules"}], ...["Import Modules"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-import-modules"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIn MDX, we can import modules with normal ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["import"])," statements. In OrgX, we can do something similar with toplevel OrgX block and the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["require"])," function.\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org868c592"}], ...["#+attr_orgx_toplevel: true\n#+begin_orgx\n(require '[clojure.string :as string])\n#+end_orgx\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWe can also do this with keyword metadata at the beginning of an Org file.\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org2a7ca7c"}], ...["#+ORGX_REQUIRE: [[clojure.string :as string]]\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSettings in keyword metadata currently doesn't support reader macros.\n"])],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-access-component-properties"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#access-component-properties"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"access-component-properties"}], ...["Access Component Properties"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-access-component-properties"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSimilar to MDX, we can access the component's properties with the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["post-props"])," variable. Some metadata are also provided in the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["post-props"])," variable.\n"]),null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe following metadata are provided by default:\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Example",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,[null],[])], null)], null)], null)],[]),uix.compiler.aot._GT_el("pre",uix.compiler.attributes.interpret_attrs((function (){var sb__5794__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__101958_102049 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__101959_102050 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__101960_102051 = true;
var _STAR_print_fn_STAR__temp_val__101961_102052 = (function (x__5795__auto__){
return sb__5794__auto__.append(x__5795__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__101960_102051);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__101961_102052);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(post_props);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__101959_102050);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__101958_102049);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5794__auto__));
})(),["pre",null,null,false],false),[])])])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-use-other-orgx-files-as-components"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#use-other-orgx-files-as-components"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"use-other-orgx-files-as-components"}], ...["Use Other OrgX Files as Components"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-use-other-orgx-files-as-components"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nBy default, OrgX files are compiled as Cljc files and will be put in the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["orgx"])," namespace. You can import them as described in ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#import-modules"}], ...["Import Modules"]),".\n"])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-use-orgx-with-native-org-syntax"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#use-orgx-with-native-org-syntax"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"use-orgx-with-native-org-syntax"}], ...["Use OrgX With Native Org Syntax"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-use-orgx-with-native-org-syntax"}], ...[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-use-components"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#use-components"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"use-components"}], ...["Use Components"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-use-components"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWriting ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+begin_orgx"])," and Clojure code must be very tedious every time we want to use a simple component, like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["note"])," or ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["warning"])," notice blocks.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nTo solve this problem, a new syntax ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+orgx_{comp-name}"])," has been introduced.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nFor example:\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Use Component With Org Syntax",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,[null],[])]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIt works by passing the rendered content to the component ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["note"])," as ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["children"]),". All other Org markups or structures that can be used in an Org environment can also be used here. You can also nested other OrgX structures in it, except for top level Clojure definition and component building, which are not supported.\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nCurrently we can't pass other properties to the component using this syntax, but that might change in the future.\n"])],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-build-components"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#build-components"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"build-components"}], ...["Build Components"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-build-components"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSomething we may want to build a React component out of some Org blocks. Like we may want to pass two Org mode source blocks as arguments to a ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["tabs"])," components.\nTo do this, we just need to add an annotation to the existing ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+begin_orgx_{comp-name}"])," syntax:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org19a5431"}], ...["#+attr_orgx_defui: true\n#+begin_orgx_my-note\n*@@orgx:(or (:note-text props) \"Tip\")@@*\n#+begin_orgx\n(:children props)\n#+end_orgx\n#+end_orgx_my-note\n"]),null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAs shown in the example, we can use normal Org syntax along with OrgX snippets. We can also access the properties with the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["props"])," variable.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIn the above example we have defined a ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["my-note"])," component, we can then use it with any aforementioned methods.\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Example Usage",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,[null],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-inline-orgx-with-macros"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#inline-orgx-with-macros"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"inline-orgx-with-macros"}], ...["Inline OrgX with Macros"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-inline-orgx-with-macros"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nCurrently no similar syntax for inline OrgX is supported, however, it is fairly easy to make life easier with macros. Let's go back to use ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["my-button"])," as the example.\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering",new cljs.core.Keyword(null,"class","class",-2030961996),"lg:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)]"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Inline OrgX with Macro",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,[null],[])])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-builtin-components"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#builtin-components"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"builtin-components"}], ...["Builtin Components"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-builtin-components"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe blogging program provides several builtin components, I will briefly describe their features.\n"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-simple-remarks"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#simple-remarks"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"simple-remarks"}], ...["Simple Notice Blocks"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-simple-remarks"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIt provides most commons blocks like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["info"]),", ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["note"]),", ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["warn"])," and ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["error"]),".\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Remarks",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,[null],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-tabs"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#tabs"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"tabs"}], ...["Tabs"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-tabs"}],[null,null,null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...[uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["tabs"])," is like tabs in a browser or a text editor.\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs usage",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,[null],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-split-layout"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#split-layout"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"split-layout"}], ...["Split Layout"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-split-layout"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSplit layout lets you show two things side by side:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org795d51c"}], ...["#+attr_orgx_defui: true\n#+begin_orgx_split_1\n#+begin_src clojure\n  ($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\"\n              :on-click (fn [& _]\n                          #?(:cljs (js/alert \"clicked!\")))}\n     \"Click Me\")\n#+end_src\n#+end_orgx_split_1\n\n#+attr_orgx_defui: true\n#+begin_orgx_split_2\n#+begin_orgx\n  ($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\"\n              :on-click (fn [& _]\n                          #?(:cljs (js/alert \"clicked!\")))}\n     \"Click Me\")\n#+end_orgx\n#+end_orgx_split_2\n\n#+begin_orgx\n($ split-layout\n($ tabs {:tab-list [{:name \"button\" :content ($ split_1)}]})\n($ tabs {:tab-list [{:name \"showcase\" :content ($ split_2)}]}))\n#+end_orgx\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWill be rendered as:\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.split_layout,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"button",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"showcase",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,[null],[])], null)], null)], null)],[])])])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-showcase"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#showcase"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"showcase"}], ...["Showcase"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-showcase"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nShowcase is a simple wrapper over ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["split-layout"])," and ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["tabs"]),". The ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["showcase"])," component is used extensive in this post, such as the example in ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#simple-remarks"}], ...["Simple Notice Blocks"])," is coded as:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org963186f"}], ...["#+attr_orgx_defui: true\n#+begin_orgx_remarks_example\n#+begin_example\n#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n\n#+end_example\n#+end_orgx_remarks_example\n\n#+attr_orgx_defui: true\n#+begin_orgx_remarks_result\n#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n#+end_orgx_remarks_result\n\n#+begin_orgx\n($ showcase {:showcase-name \"Rendering\"}\n  ($ tabs {:tab-list [{:name \"Remarks\" :content ($ remarks_example)}]})\n  ($ remarks_result))\n#+end_orgx\n"])])])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-conclusions"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#conclusions"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"conclusions"}], ...["Conclusions"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-conclusions"}], ...[]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-caveats"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#caveats"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"caveats"}], ...["Caveats"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-caveats"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAlthough I have extensively used it in this demostration and will definitely use it in the future, there are some notably deficiency with the current implementation.\n"]),uix.compiler.alpha.create_element_STAR_("ul", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-ul")}], ...[uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["You need to read the logging to understand the problem if anything goes wrong. If you want to do SSR or SSG, the fact that the same code must be run on the JVM and the browser and produce the same result adds complexity."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["The syntax still feels cumbersome in many cases, but that might be improved in the future."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["The current implementation requires Emacs itself to convert the Org files into HTML, and Clojure code will then process the HTML. The most notably advantage of this method is that we can use the (basically) the full power of Org mode. However, it is also a lot of moving parts."])])])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-future-plans"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#future-plans"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"future-plans"}], ...["Future Plans"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-future-plans"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nI will describe the process of implement it in the next post of this series. Current the code is still coupled with my blogging program. I'm planning on make it a separate library in the future.\n"])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101965 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101966 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101966);

try{if(((cljs.core.map_QMARK_(props101933)) || ((props101933 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101933)))+"\n"+"(clojure.core/or (clojure.core/map? props101933) (clojure.core/nil? props101933))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101965);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/_comp");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102053 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102053.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102053.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,"",null,null) : sig__39357__auto___102053.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp.fast_refresh_signature = sig__39357__auto___102053);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$component(props__39433__auto__){
var props101972 = uix.core.glue_args(props__39433__auto__);
var props = props101972;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101972);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___102054 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___102054)){
var f__39348__auto___102055 = temp__5823__auto___102054;
(f__39348__auto___102055.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___102055.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___102055.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,uix.compiler.attributes.interpret_props(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("blog","orgx","blog/orgx",-1430261758),new cljs.core.Keyword("blog","tags","blog/tags",1766286535),new cljs.core.Keyword("blog","unlisted","blog/unlisted",-268124729),new cljs.core.Keyword("blog","title","blog/title",629301577),new cljs.core.Keyword("blog","show-toc?","blog/show-toc?",-1011924183),new cljs.core.Keyword("blog","file-path","blog/file-path",-2012853524),new cljs.core.Keyword("blog","author","blog/author",2110519182),new cljs.core.Keyword("blog","email","blog/email",1419146704),new cljs.core.Keyword("blog","description","blog/description",-1430014670),new cljs.core.Keyword("blog","id","blog/id",-1385637198),new cljs.core.Keyword("blog","category","blog/category",-596578574),new cljs.core.Keyword("blog","language","blog/language",-1598263178),new cljs.core.Keyword("blog","published-date","blog/published-date",1156678198),new cljs.core.Keyword("blog","content","blog/content",12798170),new cljs.core.Keyword("blog","orgx-require","blog/orgx-require",-1673054916),new cljs.core.Keyword("blog","modified-date","blog/modified-date",-216271460)],[true,cljs.core.PersistentVector.EMPTY,false,"Something Like MDX but with Clojure and Org-Mode for My Personal Blog: Part I",true,"/home/void/Projects/imakira.github.io/blogs/some-like-mdx-but-with-clojure-and-org-mode.org",null,null,"MDX  is a tool lets you write JavaScript and JSX in a Markdown file. It will then compile the Markdown file into a JavaScript file, so that we can use it f...","something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i","Coding","en_US","2026-01-03T01:44:38+08:00","<p>\n<a href=\"https://mdxjs.com/\">MDX</a> is a tool lets you write JavaScript and JSX in a Markdown file. It will then compile the Markdown file into a JavaScript file, so that we can use it from other JavaScript code. I always wanted something similar for my personal blog. For some background, the blogging program is written in Clojure/ClojureScript. The blogging program runs on the JVM, it works by statically generating all the HTML and other files so that the result could be hosted on platforms like Github Pages. Posts of my blog are written in <a href=\"https://orgmode.org\">org-mode</a>. As the blog program runs on the JVM, directly using MDX is theoratically possible, but probably would create a lot of frictions.\n</p>\n\n<p>\nTherefore I took some time to implement something similar. Albeit it is not fully tested, the result is quite satisfactory: I can embed Clojure code directly in an Org file, or use React components defined in Clojure code with native Org syntax. The Org file can then be converted into a Cljc file and used from other Clojure code.\n</p>\n\n<p>\nIn the following sections I will call it <code>OrgX</code>.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"info\"><p>\n<i>This is part <b>one</b> of the series, in this post I will show the features and in the next post I will describe the process of implementing it</i>\n</p>\n\n</pre>\n<div id=\"outline-container-how-orgx-works\" class=\"outline-2\">\n<a href=\"#how-orgx-works\"><h2 id=\"how-orgx-works\" class=\"cr-self-reference \">How OrgX Works</h2></a>\n<div class=\"outline-text-2\" id=\"text-how-orgx-works\">\n<p>\nSimilar to MDX, OrgX works by compiling the OrgX file into a <a href=\"https://clojure.org/guides/reader_conditionals\">Cljc</a> file. A basic OrgX file would look like this:\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"orgx-example\"><pre class=\"example\" id=\"org33e04c8\">#+ORGX: true\n\n/*Hello* from @@orgx:($ :span &quot;OrgX&quot;)@@/\n\n#+begin_orgx\n($ :div (str &quot;Hello&quot; &quot; World!&quot;))\n#+end_orgx\n</pre>\n\n</pre>\n\n\n<pre class=\"orgx\">($ tabs {:tab-list [{:name &quot;example.org&quot; :content ($ orgx-example)}]})\n\n</pre>\n\n\n<p>\nIt will be converted into something similar to the following Clojure snippet.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"orgx-cljc\"><div class=\"org-src-container\">\n<pre class=\"cr-highlighted\"><code class=\"lang-clojure\"><html><head></head><body>(<span class=\"hljs-name\"><span class=\"hljs-built_in\">ns</span></span> orgx.example\n  (<span class=\"hljs-symbol\">:require</span> [uix.core <span class=\"hljs-symbol\">:as</span> uix <span class=\"hljs-symbol\">:refer</span>\n             [defui use-state use-effect use-context $]]))\n\n(<span class=\"hljs-name\">defui</span> _comp [post-props]\n  ($ <span class=\"hljs-symbol\">:&lt;&gt;</span>\n     ($ <span class=\"hljs-symbol\">:p</span> {} ($ <span class=\"hljs-symbol\">:i</span> {}\n                 ($ <span class=\"hljs-symbol\">:b</span> {} <span class=\"hljs-string\">&quot;Hello&quot;</span>)\n                 <span class=\"hljs-string\">&quot; from &quot;</span>\n                 ($ <span class=\"hljs-symbol\">:span</span> <span class=\"hljs-string\">&quot;OrgX&quot;</span>)))\n     ($ <span class=\"hljs-symbol\">:div</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">str</span></span> <span class=\"hljs-string\">&quot;Hello&quot;</span> <span class=\"hljs-string\">&quot; World!&quot;</span>))))\n\n(<span class=\"hljs-name\">defui</span> component [props]\n  ($ _comp (<span class=\"hljs-name\"><span class=\"hljs-built_in\">merge</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">quote</span></span> {#_<span class=\"hljs-string\">&quot;default properties&quot;</span>}) props)))\n</body></html></code></pre>\n</div>\n\n</pre>\n\n<pre class=\"orgx\">($ tabs {:tab-list [{:name &quot;orgx/example.cljc&quot; :content ($ orgx-cljc)}]})\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nThe blogging program uses <a href=\"https://github.com/pitch-io/uix?tab=readme-ov-file\">uix</a> as its React wrapper, thus the generated Clojure code is using uix. Some uix functions like <code>$</code> are also imported by default. \n</p>\n\n</pre>\n\n<p>\nAs you can see from this example:\n</p>\n\n<ul class=\"org-ul\">\n<li>We can <code>@@orgx:@@</code> for inline Clojure code and <code>#+begin_orgx</code> for Clojure blocks.</li>\n<li>The embedded Clojure code are put in a component called <code>_comp</code>, along with other contents in the Org file.</li>\n<li>The outer <code>component</code> wraps the <code>_comp</code> component, its provides some metadata about this post related to the blogging program. More about this on the following sections.</li>\n<li>We can use the <code>component</code> component from other Clojure code.</li>\n</ul>\n</div>\n</div>\n<div id=\"outline-container-basic-usage\" class=\"outline-2\">\n<a href=\"#basic-usage\"><h2 id=\"basic-usage\" class=\"cr-self-reference \">Basic Usage</h2></a>\n<div class=\"outline-text-2\" id=\"text-basic-usage\">\n<p>\nAs we have seen from the earily example, <code>#+begin_orgx</code> and <code>@@orgx:@@</code> are the most basic structure for standalone and inline Clojure code, respectively.\n</p>\n\n<p>\nWe can have a clickable button with the following code.\n</p>\n\n<pre class=\"example\" id=\"orgb004ef1\">#+begin_orgx\n  ;; you can style it using tailwindcss\n  ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n     :on-click (fn [&amp; _]\n                   #?(:cljs (js/alert &quot;clicked!&quot;)))}\n  &quot;click me&quot;)\n#+end_orgx\n</pre>\n\n<p>\nThat will be rendered as:\n</p>\n\n<pre class=\"orgx\">  ($ :button {:class &quot;my-2 bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot; :on-click (fn [&amp; _] #?(:cljs (js/alert &quot;clicked!&quot;)))} &quot;Click Me&quot;)\n\n</pre>\n\n<p>\nNotice the <a href=\"https://clojure.org/guides/reader_conditionals\">reader conditional macro</a> <code>#?(:cljs)</code>  . The generated Clojure code is in a Cljc file, therefore it pairs well with the server side rendering or static generation. However, it also means we need to put the platform specified code in the corresponding reader conditionals.\n</p>\n\n<pre class=\"example\" id=\"org74aeb89\">We can also use the button inline this way: @@orgx:($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot; :on-click (fn [&amp; _] #?(:cljs (js/alert &quot;clicked!&quot;)))} &quot;Click Me&quot;)@@\n</pre>\n\n<p>\nThe above snippet will be rendered as:\n</p>\n\n<p>\nWe can also use the button inline this way: <code class=\"orgx\">\n($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot; :on-click (fn [&amp; _] #?(:cljs (js/alert &quot;clicked!&quot;)))} &quot;Click Me&quot;)\n</code>\n</p>\n</div>\n<div id=\"outline-container-toplevel-clojure-code\" class=\"outline-3\">\n<a href=\"#toplevel-clojure-code\"><h3 id=\"toplevel-clojure-code\" class=\"cr-self-reference \">Toplevel Clojure Code</h3></a>\n<div class=\"outline-text-3\" id=\"text-toplevel-clojure-code\">\n<p>\nYou may have noticed that, all the Clojure code being put in a component means that we can't use Clojure code that only works on the top level like <code>defn</code> or <code>require</code>. To solve this, we can use <code>#+attr_orgx_toplevel: true</code> to mark a OrgX block and make its contents appear in toplevel of the generated Clojure file.\n</p>\n\n<p>\nLet's go back to the button example, we can define a <code>my-button</code> component with the following code:\n</p>\n\n<pre class=\"example\" id=\"orge24b577\">#+attr_orgx_toplevel: true\n#+begin_orgx\n(defui my-button [{:keys [children callback]}]\n    ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n       :on-click (fn [&amp; _]\n                   (if callback (callback)))}\n    children))\n#+end_orgx\n</pre>\n\n<pre class=\"orgx\" data-toplevel=\"\">  (defui my-button [{:keys [children callback]}]\n      ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n         :on-click (fn [&amp; _]\n                     (if callback (callback)))}\n      children))\n\n</pre>\n\n<p>\nThe <code>defui</code> will be put on the top level in the generated Clojure code, along side something like <code>_comp</code>:\n</p>\n\n<div class=\"org-src-container\">\n<pre class=\"cr-highlighted\"><code class=\"lang-clojure\"><html><head></head><body>(<span class=\"hljs-name\"><span class=\"hljs-built_in\">ns</span></span> ...)\n(<span class=\"hljs-name\">defui</span> my-button [{<span class=\"hljs-symbol\">:keys</span> [children callback]}]\n  ($ <span class=\"hljs-symbol\">:button</span> {<span class=\"hljs-symbol\">:class</span> <span class=\"hljs-string\">&quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;</span>\n              <span class=\"hljs-symbol\">:on-click</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> [&amp; _]\n                          #?(<span class=\"hljs-symbol\">:cljs</span> (<span class=\"hljs-name\">callback</span>)))}\n     children))\n\n(<span class=\"hljs-name\">defui</span> _comp ...)\n</body></html></code></pre>\n</div>\n\n<p>\nWe can then easily use the <code>my-button</code> component with either inline or standalone OrgX block.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"mybutton_example\"><pre class=\"example\" id=\"orgc61eca7\">Inline OrgX block:\n@@orgx:($ my-button {:callback (fn [] #?(:cljs (js/alert &quot;Hello From inline OrgX&quot;)))} &quot;From inline OrgX&quot;)@@\n#+begin_orgx\n($ :div &quot;We can also use it in a orgx block&quot;\n    ($ my-button {:callback (fn [] #?(:cljs (js/alert &quot;Hello from OrgX block!&quot;)))}\n         &quot;From OrgX block&quot;))\n#+end_orgx\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"mybutton_result\"><p>\nInline OrgX block:\n<code class=\"orgx\">\n($ my-button {:callback (fn [] #?(:cljs (js/alert &quot;Hello From inline OrgX&quot;)))} &quot;From inline OrgX&quot;)\n</code>\n</p>\n<pre class=\"orgx\">($ :div &quot;We can also use it in a orgx block&quot;\n    ($ my-button {:callback (fn [] #?(:cljs (js/alert &quot;Hello from OrgX block!&quot;)))}\n         &quot;From OrgX block&quot;))\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Example Usage&quot; :content ($ mybutton_example)}]})\n  ($ mybutton_result))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-import-modules\" class=\"outline-3\">\n<a href=\"#import-modules\"><h3 id=\"import-modules\" class=\"cr-self-reference \">Import Modules</h3></a>\n<div class=\"outline-text-3\" id=\"text-import-modules\">\n<p>\nIn MDX, we can import modules with normal <code>import</code> statements. In OrgX, we can do something similar with toplevel OrgX block and the <code>require</code> function.\n</p>\n\n<pre class=\"example\" id=\"org868c592\">#+attr_orgx_toplevel: true\n#+begin_orgx\n(require '[clojure.string :as string])\n#+end_orgx\n</pre>\n\n<p>\nWe can also do this with keyword metadata at the beginning of an Org file.\n</p>\n\n<pre class=\"example\" id=\"org2a7ca7c\">#+ORGX_REQUIRE: [[clojure.string :as string]]\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nSettings in keyword metadata currently doesn't support reader macros.\n</p>\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-access-component-properties\" class=\"outline-3\">\n<a href=\"#access-component-properties\"><h3 id=\"access-component-properties\" class=\"cr-self-reference \">Access Component Properties</h3></a>\n<div class=\"outline-text-3\" id=\"text-access-component-properties\">\n<p>\nSimilar to MDX, we can access the component's properties with the <code>post-props</code> variable. Some metadata are also provided in the <code>post-props</code> variable.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"metadata-example\"><pre class=\"example\" id=\"org5a996f6\">($ :pre\n  (with-out-str\n     (pprint/pprint post-props)))\n</pre>\n\n</pre>\n\n<p>\nThe following metadata are provided by default:\n</p>\n\n<pre class=\"orgx\">($ showcase ($ tabs {:tab-list [{:name &quot;Example&quot; :content ($ metadata-example)}]}) ($ :pre (with-out-str (pprint/pprint post-props))))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-use-other-orgx-files-as-components\" class=\"outline-3\">\n<a href=\"#use-other-orgx-files-as-components\"><h3 id=\"use-other-orgx-files-as-components\" class=\"cr-self-reference \">Use Other OrgX Files as Components</h3></a>\n<div class=\"outline-text-3\" id=\"text-use-other-orgx-files-as-components\">\n<p>\nBy default, OrgX files are compiled as Cljc files and will be put in the <code>orgx</code> namespace. You can import them as described in <a href=\"#import-modules\">Import Modules</a>.\n</p>\n</div>\n</div>\n</div>\n<div id=\"outline-container-use-orgx-with-native-org-syntax\" class=\"outline-2\">\n<a href=\"#use-orgx-with-native-org-syntax\"><h2 id=\"use-orgx-with-native-org-syntax\" class=\"cr-self-reference \">Use OrgX With Native Org Syntax</h2></a>\n<div class=\"outline-text-2\" id=\"text-use-orgx-with-native-org-syntax\">\n</div>\n<div id=\"outline-container-use-components\" class=\"outline-3\">\n<a href=\"#use-components\"><h3 id=\"use-components\" class=\"cr-self-reference \">Use Components</h3></a>\n<div class=\"outline-text-3\" id=\"text-use-components\">\n<p>\nWriting <code>#+begin_orgx</code> and Clojure code must be very tedious every time we want to use a simple component, like <code>note</code> or <code>warning</code> notice blocks.\n</p>\n\n<p>\nTo solve this problem, a new syntax <code>#+orgx_{comp-name}</code> has been introduced.\n</p>\n\n<p>\nFor example:\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"orgx_syntax_example\"><pre class=\"example\" id=\"org48f6405\">#+begin_orgx_note\nThis is a note\n\n+ /Normal/ Org markups *can* be used inside it\n\n@@orgx:($ :span &quot;You can even nest OrgX syntax in it&quot;)@@\n#+end_orgx_note\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"orgx_syntax_result\"><pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nThis is a note\n</p>\n\n<ul class=\"org-ul\">\n<li><i>Normal</i> Org markups <b>can</b> be used inside it</li>\n</ul>\n\n<p>\n<code class=\"orgx\">\n($ :span &quot;You can even nest OrgX syntax in it&quot;)\n</code>\n</p>\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Use Component With Org Syntax&quot; :content ($  orgx_syntax_example)}]})\n  ($ orgx_syntax_result))\n\n</pre>\n\n<p>\nIt works by passing the rendered content to the component <code>note</code> as <code>children</code>. All other Org markups or structures that can be used in an Org environment can also be used here. You can also nested other OrgX structures in it, except for top level Clojure definition and component building, which are not supported.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nCurrently we can't pass other properties to the component using this syntax, but that might change in the future.\n</p>\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-build-components\" class=\"outline-3\">\n<a href=\"#build-components\"><h3 id=\"build-components\" class=\"cr-self-reference \">Build Components</h3></a>\n<div class=\"outline-text-3\" id=\"text-build-components\">\n<p>\nSomething we may want to build a React component out of some Org blocks. Like we may want to pass two Org mode source blocks as arguments to a <code>tabs</code> components.\nTo do this, we just need to add an annotation to the existing <code>#+begin_orgx_{comp-name}</code> syntax:\n</p>\n\n<pre class=\"example\" id=\"org19a5431\">#+attr_orgx_defui: true\n#+begin_orgx_my-note\n*@@orgx:(or (:note-text props) &quot;Tip&quot;)@@*\n#+begin_orgx\n(:children props)\n#+end_orgx\n#+end_orgx_my-note\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"my-note\"><p>\n<b><code class=\"orgx\">\n(or (:note-text props) &quot;Tip&quot;)\n</code></b>\n</p>\n<pre class=\"orgx\">(:children props)\n\n</pre>\n\n</pre>\n\n\n<p>\nAs shown in the example, we can use normal Org syntax along with OrgX snippets. We can also access the properties with the <code>props</code> variable.\n</p>\n\n<p>\nIn the above example we have defined a <code>my-note</code> component, we can then use it with any aforementioned methods.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"my-note-example\"><pre class=\"example\" id=\"orgdf1f9c4\">#+begin_orgx_my-note\nThis is a note!\n#+end_orgx_my-note\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"my-note-result\"><pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"my-note\"><p>\nThis is a note!\n</p>\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Example Usage&quot; :content ($ my-note-example)}]})\n  ($ my-note-result))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-inline-orgx-with-macros\" class=\"outline-3\">\n<a href=\"#inline-orgx-with-macros\"><h3 id=\"inline-orgx-with-macros\" class=\"cr-self-reference \">Inline OrgX with Macros</h3></a>\n<div class=\"outline-text-3\" id=\"text-inline-orgx-with-macros\">\n<p>\nCurrently no similar syntax for inline OrgX is supported, however, it is fairly easy to make life easier with macros. Let's go back to use <code>my-button</code> as the example.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"macro-example\"><p>\nWe can define a macro like:\n</p>\n<pre class=\"example\" id=\"orgaa3881d\">#+MACRO: my-button @@orgx:($ my-button {:callback '(or $2 nil)} $1)@@\n</pre>\n\n\n<p>\nAnd then use it with:\n</p>\n<pre class=\"example\" id=\"org6990884\">{{{my-button(&quot;Using Macro&quot;, #?(:cljs (fn [] (js/alert &quot;Hello From Macro!&quot;))))}}}\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"macro-result\"><p>\n<code class=\"orgx\">\n($ my-button {:callback '(or  #?(:cljs (fn [] (js/alert &quot;Hello From Macro!&quot;))) nil)} &quot;Using Macro&quot;)\n</code>\n</p>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot; :class &quot;lg:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)]&quot;}\n  ($ tabs {:tab-list [{:name &quot;Inline OrgX with Macro&quot; :content ($ macro-example)}]})\n  ($ macro-result))\n\n</pre>\n</div>\n</div>\n</div>\n<div id=\"outline-container-builtin-components\" class=\"outline-2\">\n<a href=\"#builtin-components\"><h2 id=\"builtin-components\" class=\"cr-self-reference \">Builtin Components</h2></a>\n<div class=\"outline-text-2\" id=\"text-builtin-components\">\n<p>\nThe blogging program provides several builtin components, I will briefly describe their features.\n</p>\n</div>\n<div id=\"outline-container-simple-remarks\" class=\"outline-3\">\n<a href=\"#simple-remarks\"><h3 id=\"simple-remarks\" class=\"cr-self-reference \">Simple Notice Blocks</h3></a>\n<div class=\"outline-text-3\" id=\"text-simple-remarks\">\n<p>\nIt provides most commons blocks like <code>info</code>, <code>note</code>, <code>warn</code> and <code>error</code>.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"remarks_example\"><pre class=\"example\" id=\"org349fda7\">#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"remarks_result\"><pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"info\"><p>\nThis is an info\n</p>\n\n</pre>\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nThis is a note\n</p>\n\n</pre>\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"warn\"><p>\nThis is a warn\n</p>\n\n</pre>\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"error\"><p>\nThis is an error\n</p>\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Remarks&quot; :content ($ remarks_example)}]})\n  ($ remarks_result))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-tabs\" class=\"outline-3\">\n<a href=\"#tabs\"><h3 id=\"tabs\" class=\"cr-self-reference \">Tabs</h3></a>\n<div class=\"outline-text-3\" id=\"text-tabs\">\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"code_tabs\"><div class=\"org-src-container\">\n<pre class=\"cr-highlighted\"><code class=\"lang-clojure\"><html><head></head><body>(<span class=\"hljs-name\">defui</span> tabs [{<span class=\"hljs-symbol\">:keys</span> [tab-list default-table class]}]\n  (<span class=\"hljs-name\"><span class=\"hljs-built_in\">let</span></span> [[selected-tab set-selected-tab!] (<span class=\"hljs-name\">use-state</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">or</span></span> default-table\n                                                        (<span class=\"hljs-symbol\">:name</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">first</span></span> tab-list))))]\n    ($ <span class=\"hljs-symbol\">:div.my-4.relative.border-sky-300.border-l-2.border-l-neutral-100</span> {<span class=\"hljs-symbol\">:class</span> class}\n       ($ <span class=\"hljs-symbol\">:div.my-0.flex.relative.bg-neutral-100</span>\n          (<span class=\"hljs-name\"><span class=\"hljs-built_in\">map</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> [{<span class=\"hljs-symbol\">:keys</span> [name]}]\n                 ($ <span class=\"hljs-symbol\">:button.font-medium.text-neutral-700.bg-neutral-50.py-1.px-2.border-t-2.border-neutral-50.min-w-28.bg-neutral-50.border-t-neutral-100</span>\n                    {<span class=\"hljs-symbol\">:key</span> name\n                     <span class=\"hljs-symbol\">:class</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">when</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">=</span></span> name selected-tab)\n                              <span class=\"hljs-string\">&quot; text-sky-800 border-sky-400 bg-sky-100 border-t-sky-400&quot;</span>)\n                     <span class=\"hljs-symbol\">:on-click</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> []\n                                 #?(<span class=\"hljs-symbol\">:cljs</span>\n                                    (<span class=\"hljs-name\">set-selected-tab!</span> name)))}\n                    name))\n               tab-list))\n       ($ <span class=\"hljs-symbol\">:div.my-0.bg-neutral-50.overflow-hidden.px-2.h-full</span>\n          (<span class=\"hljs-symbol\">:content</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">first</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">filter</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> [{<span class=\"hljs-symbol\">:keys</span> [name]}]\n                                     (<span class=\"hljs-name\"><span class=\"hljs-built_in\">=</span></span> name selected-tab))\n                                   tab-list)))))))\n</body></html></code></pre>\n</div>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"tabs_example\"><pre class=\"example\" id=\"orgebd9d6c\">#+begin_orgx\n($ tabs {:tab-list [{:name &quot;tabs.clj&quot; :content ($ code_tabs)}\n                    {:name &quot;tabs usage&quot; :content ($ tabs_example)}]})\n#+end_orgx\n</pre>\n\n</pre>\n\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"tabs_result\"><pre class=\"orgx\">($ tabs {:tab-list [{:name &quot;tabs.clj&quot; :content ($ code_tabs)}\n                      {:name &quot;tabs usage&quot; :content ($ tabs_example)}]})\n\n</pre>\n\n</pre>\n\n<p>\n<code>tabs</code> is like tabs in a browser or a text editor.\n</p>\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;tabs usage&quot; :content ($ tabs_example)}]})\n  ($ tabs_result))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-split-layout\" class=\"outline-3\">\n<a href=\"#split-layout\"><h3 id=\"split-layout\" class=\"cr-self-reference \">Split Layout</h3></a>\n<div class=\"outline-text-3\" id=\"text-split-layout\">\n<p>\nSplit layout lets you show two things side by side:\n</p>\n\n<pre class=\"example\" id=\"org795d51c\">#+attr_orgx_defui: true\n#+begin_orgx_split_1\n#+begin_src clojure\n  ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n              :on-click (fn [&amp; _]\n                          #?(:cljs (js/alert &quot;clicked!&quot;)))}\n     &quot;Click Me&quot;)\n#+end_src\n#+end_orgx_split_1\n\n#+attr_orgx_defui: true\n#+begin_orgx_split_2\n#+begin_orgx\n  ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n              :on-click (fn [&amp; _]\n                          #?(:cljs (js/alert &quot;clicked!&quot;)))}\n     &quot;Click Me&quot;)\n#+end_orgx\n#+end_orgx_split_2\n\n#+begin_orgx\n($ split-layout\n($ tabs {:tab-list [{:name &quot;button&quot; :content ($ split_1)}]})\n($ tabs {:tab-list [{:name &quot;showcase&quot; :content ($ split_2)}]}))\n#+end_orgx\n</pre>\n\n<p>\nWill be rendered as:\n</p>\n\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"split_1\"><div class=\"org-src-container\">\n<pre class=\"cr-highlighted\"><code class=\"lang-clojure\"><html><head></head><body>($ <span class=\"hljs-symbol\">:button</span> {<span class=\"hljs-symbol\">:class</span> <span class=\"hljs-string\">&quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;</span>\n            <span class=\"hljs-symbol\">:on-click</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> [&amp; _]\n                        #?(<span class=\"hljs-symbol\">:cljs</span> (<span class=\"hljs-name\">js/alert</span> <span class=\"hljs-string\">&quot;clicked!&quot;</span>)))}\n   <span class=\"hljs-string\">&quot;Click Me&quot;</span>)\n</body></html></code></pre>\n</div>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"split_2\"><pre class=\"orgx\">  ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n              :on-click (fn [&amp; _]\n                          #?(:cljs (js/alert &quot;clicked!&quot;)))}\n     &quot;Click Me&quot;)\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ split-layout\n($ tabs {:tab-list [{:name &quot;button&quot; :content ($ split_1)}]})\n($ tabs {:tab-list [{:name &quot;showcase&quot; :content ($ split_2)}]}))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-showcase\" class=\"outline-3\">\n<a href=\"#showcase\"><h3 id=\"showcase\" class=\"cr-self-reference \">Showcase</h3></a>\n<div class=\"outline-text-3\" id=\"text-showcase\">\n<p>\nShowcase is a simple wrapper over <code>split-layout</code> and <code>tabs</code>. The <code>showcase</code> component is used extensive in this post, such as the example in <a href=\"#simple-remarks\">Simple Notice Blocks</a> is coded as:\n</p>\n\n<pre class=\"example\" id=\"org963186f\">#+attr_orgx_defui: true\n#+begin_orgx_remarks_example\n#+begin_example\n#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n\n#+end_example\n#+end_orgx_remarks_example\n\n#+attr_orgx_defui: true\n#+begin_orgx_remarks_result\n#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n#+end_orgx_remarks_result\n\n#+begin_orgx\n($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Remarks&quot; :content ($ remarks_example)}]})\n  ($ remarks_result))\n#+end_orgx\n</pre>\n</div>\n</div>\n</div>\n<div id=\"outline-container-conclusions\" class=\"outline-2\">\n<a href=\"#conclusions\"><h2 id=\"conclusions\" class=\"cr-self-reference \">Conclusions</h2></a>\n<div class=\"outline-text-2\" id=\"text-conclusions\">\n</div>\n<div id=\"outline-container-caveats\" class=\"outline-3\">\n<a href=\"#caveats\"><h3 id=\"caveats\" class=\"cr-self-reference \">Caveats</h3></a>\n<div class=\"outline-text-3\" id=\"text-caveats\">\n<p>\nAlthough I have extensively used it in this demostration and will definitely use it in the future, there are some notably deficiency with the current implementation.\n</p>\n\n<ul class=\"org-ul\">\n<li>You need to read the logging to understand the problem if anything goes wrong. If you want to do SSR or SSG, the fact that the same code must be run on the JVM and the browser and produce the same result adds complexity.</li>\n<li>The syntax still feels cumbersome in many cases, but that might be improved in the future.</li>\n<li>The current implementation requires Emacs itself to convert the Org files into HTML, and Clojure code will then process the HTML. The most notably advantage of this method is that we can use the (basically) the full power of Org mode. However, it is also a lot of moving parts.</li>\n</ul>\n</div>\n</div>\n<div id=\"outline-container-future-plans\" class=\"outline-3\">\n<a href=\"#future-plans\"><h3 id=\"future-plans\" class=\"cr-self-reference \">Future Plans</h3></a>\n<div class=\"outline-text-3\" id=\"text-future-plans\">\n<p>\nI will describe the process of implement it in the next post of this series. Current the code is still coupled with my blogging program. I'm planning on make it a separate library in the future.\n</p>\n</div>\n</div>\n</div>\n",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clojure.pprint","clojure.pprint",-547379114,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"pprint","pprint",-1434237374,null)], null)], null),"2026-01-03T01:44:38+08:00"]),props], 0))),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101973 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101974 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101974);

try{if(((cljs.core.map_QMARK_(props101972)) || ((props101972 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101972)))+"\n"+"(clojure.core/or (clojure.core/map? props101972) (clojure.core/nil? props101972))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101973);
}} else {
return f__39434__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/component");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___102056 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___102056.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___102056.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component,"",null,null) : sig__39357__auto___102056.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component.fast_refresh_signature = sig__39357__auto___102056);
} else {
}
} else {
}


//# sourceMappingURL=orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.js.map
