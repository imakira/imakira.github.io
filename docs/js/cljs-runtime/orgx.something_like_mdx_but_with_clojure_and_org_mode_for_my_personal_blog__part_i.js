import "./cljs_env.js";
import "./cljs.core.js";
import "./uix.core.js";
import "./net.coruscation.cerulean.utils.js";
import "./net.coruscation.cerulean.common.components.js";
import "./cljs.pprint.js";
goog.provide('orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i');
orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$orgx_example(props__41395__auto__){
var props62003 = uix.core.glue_args(props__41395__auto__);
var props = props62003;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62003);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62200 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62200)){
var f__41310__auto___62201 = temp__5825__auto___62200;
(f__41310__auto___62201.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62201.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62201.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgabcc67c"}], ...["#+ORGX: true\n\n/*Hello* from @@orgx:($ :span \"OrgX\")@@/\n\n#+begin_orgx\n($ :div (str \"Hello\" \" World!\"))\n#+end_orgx\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62006 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62007 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62007);

try{if(((cljs.core.map_QMARK_(props62003)) || ((props62003 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62003)))+"\n"+"(clojure.core/or (clojure.core/map? props62003) (clojure.core/nil? props62003))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62006);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/orgx-example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62202 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62202.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62202.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,"",null,null) : sig__41319__auto___62202.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example.fast_refresh_signature = sig__41319__auto___62202);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$orgx_cljc(props__41395__auto__){
var props62017 = uix.core.glue_args(props__41395__auto__);
var props = props62017;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62017);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62203 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62203)){
var f__41310__auto___62204 = temp__5825__auto___62203;
(f__41310__auto___62204.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62204.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62204.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-src-container")}], ...["\n",uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-highlighted")}], ...[uix.compiler.alpha.create_element_STAR_("code", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"lang-clojure")}], ...["(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["ns"])])," orgx.example\n  (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":require"])," [uix.core ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":as"])," uix ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":refer"]),"\n             [defui use-state use-effect use-context $]]))\n\n(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," _comp [post-props]\n  ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":<>"]),"\n     ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":p"])," {} ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":i"])," {}\n                 ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":b"])," {} ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"Hello\""]),")\n                 ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\" from \""]),"\n                 ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":span"])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"OrgX\""]),")))\n     ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":div"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["str"])])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"Hello\""])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\" World!\""]),"))))\n\n(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," component [props]\n  ($ _comp (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["merge"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["quote"])])," {#_",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"default properties\""]),"}) props)))\n"])]),"\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62026 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62027 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62027);

try{if(((cljs.core.map_QMARK_(props62017)) || ((props62017 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62017)))+"\n"+"(clojure.core/or (clojure.core/map? props62017) (clojure.core/nil? props62017))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62026);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/orgx-cljc");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62205 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62205.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62205.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,"",null,null) : sig__41319__auto___62205.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc.fast_refresh_signature = sig__41319__auto___62205);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$my_button(props__41395__auto__){
var props62029 = uix.core.glue_args(props__41395__auto__);
var map__62030 = props62029;
var map__62030__$1 = cljs.core.__destructure_map(map__62030);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62030__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62029);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62206 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62206)){
var f__41310__auto___62207 = temp__5825__auto___62206;
(f__41310__auto___62207.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62207.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62207.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg"),'onClick':(function() { 
var G__62208__delegate = function (_){
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
};
var G__62208 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__62209__i = 0, G__62209__a = new Array(arguments.length -  0);
while (G__62209__i < G__62209__a.length) {G__62209__a[G__62209__i] = arguments[G__62209__i + 0]; ++G__62209__i;}
  _ = new cljs.core.IndexedSeq(G__62209__a,0,null);
} 
return G__62208__delegate.call(this,_);};
G__62208.cljs$lang$maxFixedArity = 0;
G__62208.cljs$lang$applyTo = (function (arglist__62210){
var _ = cljs.core.seq(arglist__62210);
return G__62208__delegate(_);
});
G__62208.cljs$core$IFn$_invoke$arity$variadic = G__62208__delegate;
return G__62208;
})()
}],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62031 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62032 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62032);

try{if(((cljs.core.map_QMARK_(props62029)) || ((props62029 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62029)))+"\n"+"(clojure.core/or (clojure.core/map? props62029) (clojure.core/nil? props62029))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62031);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/my-button");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62211 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62211.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62211.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,"",null,null) : sig__41319__auto___62211.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button.fast_refresh_signature = sig__41319__auto___62211);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$mybutton_example(props__41395__auto__){
var props62034 = uix.core.glue_args(props__41395__auto__);
var props = props62034;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62034);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62212 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62212)){
var f__41310__auto___62213 = temp__5825__auto___62212;
(f__41310__auto___62213.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62213.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62213.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgd18407f"}], ...["Inline OrgX block:\n@@orgx:($ my-button {:callback (fn [] #?(:cljs (js/alert \"Hello From inline OrgX\")))} \"From inline OrgX\")@@\n#+begin_orgx\n($ :div \"We can also use it in a orgx block\"\n    ($ my-button {:callback (fn [] #?(:cljs (js/alert \"Hello from OrgX block!\")))}\n         \"From OrgX block\"))\n#+end_orgx\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62035 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62036 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62036);

try{if(((cljs.core.map_QMARK_(props62034)) || ((props62034 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62034)))+"\n"+"(clojure.core/or (clojure.core/map? props62034) (clojure.core/nil? props62034))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62035);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/mybutton_example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62214 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62214.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62214.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,"",null,null) : sig__41319__auto___62214.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example.fast_refresh_signature = sig__41319__auto___62214);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$mybutton_result(props__41395__auto__){
var props62040 = uix.core.glue_args(props__41395__auto__);
var props = props62040;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62040);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62215 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62215)){
var f__41310__auto___62216 = temp__5825__auto___62215;
(f__41310__auto___62216.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62216.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62216.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("p",[null],["\nInline OrgX block:\n",uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return alert("Hello From inline OrgX");
})], null)],["From inline OrgX"]),"\n"])],["\n",uix.compiler.aot._GT_el("div",[null,"We can also use it in a orgx block"],[uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return alert("Hello from OrgX block!");
})], null)],["From OrgX block"])]),"\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62041 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62042 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62042);

try{if(((cljs.core.map_QMARK_(props62040)) || ((props62040 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62040)))+"\n"+"(clojure.core/or (clojure.core/map? props62040) (clojure.core/nil? props62040))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62041);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/mybutton_result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62217 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62217.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62217.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,"",null,null) : sig__41319__auto___62217.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result.fast_refresh_signature = sig__41319__auto___62217);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$metadata_example(props__41395__auto__){
var props62044 = uix.core.glue_args(props__41395__auto__);
var props = props62044;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62044);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62218 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62218)){
var f__41310__auto___62219 = temp__5825__auto___62218;
(f__41310__auto___62219.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62219.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62219.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgce2a6bb"}], ...["($ :pre\n  (binding [*print-namespace-maps* true]\n    (with-out-str (pprint/pprint post-props))))\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62045 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62046 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62046);

try{if(((cljs.core.map_QMARK_(props62044)) || ((props62044 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62044)))+"\n"+"(clojure.core/or (clojure.core/map? props62044) (clojure.core/nil? props62044))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62045);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/metadata-example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62220 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62220.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62220.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,"",null,null) : sig__41319__auto___62220.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example.fast_refresh_signature = sig__41319__auto___62220);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$orgx_syntax_example(props__41395__auto__){
var props62050 = uix.core.glue_args(props__41395__auto__);
var props = props62050;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62050);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62221 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62221)){
var f__41310__auto___62222 = temp__5825__auto___62221;
(f__41310__auto___62222.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62222.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62222.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orga58ef81"}], ...["#+begin_orgx_note\nThis is a note\n\n+ /Normal/ Org markups *can* be used inside it\n\n@@orgx:($ :span \"You can even nest OrgX syntax in it\")@@\n#+end_orgx_note\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62051 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62052 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62052);

try{if(((cljs.core.map_QMARK_(props62050)) || ((props62050 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62050)))+"\n"+"(clojure.core/or (clojure.core/map? props62050) (clojure.core/nil? props62050))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62051);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/orgx_syntax_example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62223 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62223.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62223.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,"",null,null) : sig__41319__auto___62223.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example.fast_refresh_signature = sig__41319__auto___62223);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$orgx_syntax_result(props__41395__auto__){
var props62056 = uix.core.glue_args(props__41395__auto__);
var props = props62056;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62056);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62224 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62224)){
var f__41310__auto___62225 = temp__5825__auto___62224;
(f__41310__auto___62225.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62225.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62225.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is a note\n"])],["\n\n",uix.compiler.alpha.create_element_STAR_("ul", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-ul")}], ...["\n",uix.compiler.alpha.create_element_STAR_("li", ...[null], ...[uix.compiler.alpha.create_element_STAR_("i", ...[null], ...["Normal"])," Org markups ",uix.compiler.alpha.create_element_STAR_("b", ...[null], ...["can"])," be used inside it"]),"\n"]),"\n\n",uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\n",uix.compiler.alpha.create_element_STAR_("span", ...[null,"You can even nest OrgX syntax in it"], ...[]),"\n"]),"\n\n"])])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62061 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62062 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62062);

try{if(((cljs.core.map_QMARK_(props62056)) || ((props62056 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62056)))+"\n"+"(clojure.core/or (clojure.core/map? props62056) (clojure.core/nil? props62056))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62061);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/orgx_syntax_result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62226 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62226.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62226.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,"",null,null) : sig__41319__auto___62226.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result.fast_refresh_signature = sig__41319__auto___62226);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$my_note(props__41395__auto__){
var props62066 = uix.core.glue_args(props__41395__auto__);
var props = props62066;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62066);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62227 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62227)){
var f__41310__auto___62228 = temp__5825__auto___62227;
(f__41310__auto___62228.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62228.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62228.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("p",[null],["\n",uix.compiler.aot._GT_el("b",[null],[(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"note-text","note-text",1656768379).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Tip";
}
})()]),"\n"])],["\n",new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props),"\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62069 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62070 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62070);

try{if(((cljs.core.map_QMARK_(props62066)) || ((props62066 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62066)))+"\n"+"(clojure.core/or (clojure.core/map? props62066) (clojure.core/nil? props62066))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62069);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/my-note");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62229 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62229.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62229.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,"",null,null) : sig__41319__auto___62229.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note.fast_refresh_signature = sig__41319__auto___62229);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$my_note_example(props__41395__auto__){
var props62076 = uix.core.glue_args(props__41395__auto__);
var props = props62076;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62076);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62230 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62230)){
var f__41310__auto___62231 = temp__5825__auto___62230;
(f__41310__auto___62231.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62231.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62231.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgdfdc295"}], ...["#+begin_orgx_my-note\nThis is a note!\n#+end_orgx_my-note\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62077 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62078 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62078);

try{if(((cljs.core.map_QMARK_(props62076)) || ((props62076 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62076)))+"\n"+"(clojure.core/or (clojure.core/map? props62076) (clojure.core/nil? props62076))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62077);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/my-note-example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62232 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62232.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62232.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,"",null,null) : sig__41319__auto___62232.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example.fast_refresh_signature = sig__41319__auto___62232);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$my_note_result(props__41395__auto__){
var props62080 = uix.core.glue_args(props__41395__auto__);
var props = props62080;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62080);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62233 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62233)){
var f__41310__auto___62234 = temp__5825__auto___62233;
(f__41310__auto___62234.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62234.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62234.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is a note!\n"])],["\n\n"])])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62081 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62082 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62082);

try{if(((cljs.core.map_QMARK_(props62080)) || ((props62080 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62080)))+"\n"+"(clojure.core/or (clojure.core/map? props62080) (clojure.core/nil? props62080))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62081);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/my-note-result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62235 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62235.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62235.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,"",null,null) : sig__41319__auto___62235.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result.fast_refresh_signature = sig__41319__auto___62235);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$macro_example(props__41395__auto__){
var props62084 = uix.core.glue_args(props__41395__auto__);
var props = props62084;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62084);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62236 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62236)){
var f__41310__auto___62237 = temp__5825__auto___62236;
(f__41310__auto___62237.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62237.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62237.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWe can define a macro like:\n"])],["\n",uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orge758dac"}], ...["#+MACRO: my-button @@orgx:($ my-button {:callback (or $2 nil)} $1)@@\n"]),"\n\n\n",uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAnd then use it with:\n"]),"\n",uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orga54a514"}], ...["{{{my-button(\"Using Macro\", #?(:cljs (fn [] (js/alert \"Hello From Macro!\"))))}}}\n"]),"\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62085 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62086 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62086);

try{if(((cljs.core.map_QMARK_(props62084)) || ((props62084 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62084)))+"\n"+"(clojure.core/or (clojure.core/map? props62084) (clojure.core/nil? props62084))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62085);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/macro-example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62238 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62238.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62238.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,"",null,null) : sig__41319__auto___62238.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example.fast_refresh_signature = sig__41319__auto___62238);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$macro_result(props__41395__auto__){
var props62088 = uix.core.glue_args(props__41395__auto__);
var props = props62088;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62088);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62239 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62239)){
var f__41310__auto___62240 = temp__5825__auto___62239;
(f__41310__auto___62240.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62240.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62240.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("p",[null],["\n",uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_button,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){var or__5142__auto__ = (function (){
return alert("Hello From Macro!");
});
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return null;
}
})()], null)],["Using Macro"]),"\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62089 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62090 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62090);

try{if(((cljs.core.map_QMARK_(props62088)) || ((props62088 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62088)))+"\n"+"(clojure.core/or (clojure.core/map? props62088) (clojure.core/nil? props62088))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62089);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/macro-result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62241 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62241.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62241.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,"",null,null) : sig__41319__auto___62241.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result.fast_refresh_signature = sig__41319__auto___62241);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$remarks_example(props__41395__auto__){
var props62094 = uix.core.glue_args(props__41395__auto__);
var props = props62094;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62094);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62242 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62242)){
var f__41310__auto___62243 = temp__5825__auto___62242;
(f__41310__auto___62243.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62243.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62243.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org0e0d2e9"}], ...["#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62098 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62099 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62099);

try{if(((cljs.core.map_QMARK_(props62094)) || ((props62094 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62094)))+"\n"+"(clojure.core/or (clojure.core/map? props62094) (clojure.core/nil? props62094))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62098);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/remarks_example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62244 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62244.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62244.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,"",null,null) : sig__41319__auto___62244.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example.fast_refresh_signature = sig__41319__auto___62244);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$remarks_result(props__41395__auto__){
var props62104 = uix.core.glue_args(props__41395__auto__);
var props = props62104;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62104);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62245 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62245)){
var f__41310__auto___62246 = temp__5825__auto___62245;
(f__41310__auto___62246.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62246.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62246.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.info,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is an info\n"])],["\n\n"])])],["\n",uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is a note\n"])],["\n\n"])]),"\n",uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.warn,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is a warn\n"])],["\n\n"])]),"\n",uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.error,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThis is an error\n"])],["\n\n"])]),"\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62107 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62108 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62108);

try{if(((cljs.core.map_QMARK_(props62104)) || ((props62104 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62104)))+"\n"+"(clojure.core/or (clojure.core/map? props62104) (clojure.core/nil? props62104))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62107);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/remarks_result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62247 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62247.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62247.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,"",null,null) : sig__41319__auto___62247.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result.fast_refresh_signature = sig__41319__auto___62247);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$code_tabs(props__41395__auto__){
var props62114 = uix.core.glue_args(props__41395__auto__);
var props = props62114;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62114);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62248 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62248)){
var f__41310__auto___62249 = temp__5825__auto___62248;
(f__41310__auto___62249.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62249.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62249.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-src-container")}], ...["\n",uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-highlighted")}], ...[uix.compiler.alpha.create_element_STAR_("code", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"lang-clojure")}], ...["(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," tabs [{",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":keys"])," [tab-list default-table class]}]\n  (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["let"])])," [[selected-tab set-selected-tab!] (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["use-state"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["or"])])," default-table\n                                                        (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":name"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["first"])])," tab-list))))]\n    ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":div.my-4.relative.border-sky-300.border-l-2.border-l-neutral-100"])," {",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":class"])," class}\n       ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":div.my-0.flex.relative.bg-neutral-100"]),"\n          (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["map"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," [{",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":keys"])," [name]}]\n                 ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":button.font-medium.text-neutral-700.bg-neutral-50.py-1.px-2.border-t-2.border-neutral-50.min-w-28.bg-neutral-50.border-t-neutral-100"]),"\n                    {",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":key"])," name\n                     ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":class"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["when"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["="])])," name selected-tab)\n                              ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\" text-sky-800 border-sky-400 bg-sky-100 border-t-sky-400\""]),")\n                     ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":on-click"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," []\n                                 #?(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":cljs"]),"\n                                    (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["set-selected-tab!"])," name)))}\n                    name))\n               tab-list))\n       ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":div.my-0.bg-neutral-50.overflow-hidden.px-2.h-full"]),"\n          (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":content"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["first"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["filter"])])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," [{",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":keys"])," [name]}]\n                                     (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["="])])," name selected-tab))\n                                   tab-list)))))))\n"])]),"\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62115 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62116 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62116);

try{if(((cljs.core.map_QMARK_(props62114)) || ((props62114 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62114)))+"\n"+"(clojure.core/or (clojure.core/map? props62114) (clojure.core/nil? props62114))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62115);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/code_tabs");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62250 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62250.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62250.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,"",null,null) : sig__41319__auto___62250.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs.fast_refresh_signature = sig__41319__auto___62250);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$tabs_example(props__41395__auto__){
var props62118 = uix.core.glue_args(props__41395__auto__);
var props = props62118;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62118);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62251 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62251)){
var f__41310__auto___62252 = temp__5825__auto___62251;
(f__41310__auto___62252.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62252.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62252.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgb0b48ff"}], ...["#+begin_orgx\n($ tabs {:tab-list [{:name \"tabs.clj\" :content ($ code_tabs)}\n                    {:name \"tabs usage\" :content ($ tabs_example)}]})\n#+end_orgx\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62119 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62120 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62120);

try{if(((cljs.core.map_QMARK_(props62118)) || ((props62118 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62118)))+"\n"+"(clojure.core/or (clojure.core/map? props62118) (clojure.core/nil? props62118))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62119);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/tabs_example");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62253 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62253.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62253.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,"",null,null) : sig__41319__auto___62253.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example.fast_refresh_signature = sig__41319__auto___62253);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$tabs_result(props__41395__auto__){
var props62123 = uix.core.glue_args(props__41395__auto__);
var props = props62123;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62123);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62254 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62254)){
var f__41310__auto___62255 = temp__5825__auto___62254;
(f__41310__auto___62255.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62255.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62255.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs.clj",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.code_tabs,[null],[])], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs usage",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,[null],[])], null)], null)], null)],[])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62125 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62126 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62126);

try{if(((cljs.core.map_QMARK_(props62123)) || ((props62123 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62123)))+"\n"+"(clojure.core/or (clojure.core/map? props62123) (clojure.core/nil? props62123))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62125);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/tabs_result");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62256 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62256.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62256.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,"",null,null) : sig__41319__auto___62256.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result.fast_refresh_signature = sig__41319__auto___62256);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1 = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$split_1(props__41395__auto__){
var props62128 = uix.core.glue_args(props__41395__auto__);
var props = props62128;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62128);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62257 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62257)){
var f__41310__auto___62258 = temp__5825__auto___62257;
(f__41310__auto___62258.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62258.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62258.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-src-container")}], ...["\n",uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-highlighted")}], ...[uix.compiler.alpha.create_element_STAR_("code", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"lang-clojure")}], ...["($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":button"])," {",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":class"])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\""]),"\n            ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":on-click"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," [& _]\n                        #?(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":cljs"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["js/alert"])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"clicked!\""]),")))}\n   ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"Click Me\""]),")\n"])]),"\n"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62129 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62130 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62130);

try{if(((cljs.core.map_QMARK_(props62128)) || ((props62128 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62128)))+"\n"+"(clojure.core/or (clojure.core/map? props62128) (clojure.core/nil? props62128))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62129);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/split_1");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62259 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62259.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62259.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,"",null,null) : sig__41319__auto___62259.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1.fast_refresh_signature = sig__41319__auto___62259);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2 = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$split_2(props__41395__auto__){
var props62132 = uix.core.glue_args(props__41395__auto__);
var props = props62132;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62132);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62260 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62260)){
var f__41310__auto___62261 = temp__5825__auto___62260;
(f__41310__auto___62261.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62261.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62261.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg"),'onClick':(function() { 
var G__62262__delegate = function (_){
return alert("clicked!");
};
var G__62262 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__62263__i = 0, G__62263__a = new Array(arguments.length -  0);
while (G__62263__i < G__62263__a.length) {G__62263__a[G__62263__i] = arguments[G__62263__i + 0]; ++G__62263__i;}
  _ = new cljs.core.IndexedSeq(G__62263__a,0,null);
} 
return G__62262__delegate.call(this,_);};
G__62262.cljs$lang$maxFixedArity = 0;
G__62262.cljs$lang$applyTo = (function (arglist__62264){
var _ = cljs.core.seq(arglist__62264);
return G__62262__delegate(_);
});
G__62262.cljs$core$IFn$_invoke$arity$variadic = G__62262__delegate;
return G__62262;
})()
}],["Click Me"])],["\n\n"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62133 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62134 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62134);

try{if(((cljs.core.map_QMARK_(props62132)) || ((props62132 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62132)))+"\n"+"(clojure.core/or (clojure.core/map? props62132) (clojure.core/nil? props62132))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62133);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/split_2");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62265 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62265.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62265.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,"",null,null) : sig__41319__auto___62265.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2.fast_refresh_signature = sig__41319__auto___62265);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$_comp(props__41395__auto__){
var props62177 = uix.core.glue_args(props__41395__auto__);
var post_props = props62177;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62177);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62266 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62266)){
var f__41310__auto___62267 = temp__5825__auto___62266;
(f__41310__auto___62267.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62267.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62267.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://mdxjs.com/"}], ...["MDX"])," is a tool lets you write JavaScript and JSX in a Markdown file. It will then compile the Markdown file into a JavaScript file, so that we can use it from other JavaScript code. I always wanted something similar for my personal blog. For some background, the blogging program is written in Clojure/ClojureScript. The blogging program runs on the JVM, it works by statically generating all the HTML and other files so that the result could be hosted on platforms like Github Pages. Posts of my blog are written in ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://orgmode.org"}], ...["org-mode"]),". As the blog program runs on the JVM, directly using MDX is theoratically possible, but probably would create a lot of frictions.\n"])],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nTherefore I took some time to implement something similar. Albeit it is not fully tested, the result is quite satisfactory: I can embed Clojure code directly in an Org file, or use React components defined in Clojure code with native Org syntax. The Org file can then be converted into a Cljc file and used from other Clojure code.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIn the following sections I will call it ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["OrgX"]),".\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.info,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\n",uix.compiler.alpha.create_element_STAR_("i", ...[null], ...["This is part ",uix.compiler.alpha.create_element_STAR_("b", ...[null], ...["one"])," of the series, in this post I will show the features and in the next post I will describe the process of implementing it"]),"\n"])],["\n\n"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-how-orgx-works"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#how-orgx-works"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"how-orgx-works"}], ...["How OrgX Works"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-how-orgx-works"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSimilar to MDX, OrgX works by compiling the OrgX file into a ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://clojure.org/guides/reader_conditionals"}], ...["Cljc"])," file. A basic OrgX file would look like this:\n"]),null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"example.org",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIt will be converted into something similar to the following Clojure snippet.\n"]),null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"orgx/example.cljc",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_cljc,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe blogging program uses ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://github.com/pitch-io/uix?tab=readme-ov-file"}], ...["uix"])," as its React wrapper, thus the generated Clojure code is using uix. Some uix functions like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["$"])," are also imported by default. \n"])],["\n\n"])]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAs you can see from this example:\n"]),uix.compiler.alpha.create_element_STAR_("ul", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-ul")}], ...[uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["We can ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["@@orgx:@@"])," for inline Clojure code and ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+begin_orgx"])," for Clojure blocks."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["The embedded Clojure code are put in a component called ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["_comp"]),", along with other contents in the Org file."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["The outer ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["component"])," wraps the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["_comp"])," component, its provides some metadata about this post related to the blogging program. More about this on the following sections."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["We can use the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["component"])," component from other Clojure code."])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-basic-usage"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#basic-usage"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"basic-usage"}], ...["Basic Usage"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-basic-usage"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAs we have seen from the earily example, ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+begin_orgx"])," and ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["@@orgx:@@"])," are the most basic structure for standalone and inline Clojure code, respectively.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWe can have a clickable button with the following code.\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org6f14ccd"}], ...["#+begin_orgx\n  ;; you can style it using tailwindcss\n  ($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\"\n     :on-click (fn [& _]\n                   #?(:cljs (js/alert \"clicked!\")))}\n  \"click me\")\n#+end_orgx\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThat will be rendered as:\n"]),uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"my-2 bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg"),'onClick':(function() { 
var G__62268__delegate = function (_){
return alert("clicked!");
};
var G__62268 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__62269__i = 0, G__62269__a = new Array(arguments.length -  0);
while (G__62269__i < G__62269__a.length) {G__62269__a[G__62269__i] = arguments[G__62269__i + 0]; ++G__62269__i;}
  _ = new cljs.core.IndexedSeq(G__62269__a,0,null);
} 
return G__62268__delegate.call(this,_);};
G__62268.cljs$lang$maxFixedArity = 0;
G__62268.cljs$lang$applyTo = (function (arglist__62270){
var _ = cljs.core.seq(arglist__62270);
return G__62268__delegate(_);
});
G__62268.cljs$core$IFn$_invoke$arity$variadic = G__62268__delegate;
return G__62268;
})()
}],["Click Me"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nNotice the ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"https://clojure.org/guides/reader_conditionals"}], ...["reader conditional macro"])," ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#?(:cljs)"]),"  . The generated Clojure code is in a Cljc file, therefore it pairs well with the server side rendering or static generation. However, it also means we need to put the platform specified code in the corresponding reader conditionals.\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orgda39a06"}], ...["We can also use the button inline this way: @@orgx:($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\" :on-click (fn [& _] #?(:cljs (js/alert \"clicked!\")))} \"Click Me\")@@\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe above snippet will be rendered as:\n"]),uix.compiler.aot._GT_el("p",[null],["\nWe can also use the button inline this way: ",uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg"),'onClick':(function() { 
var G__62271__delegate = function (_){
return alert("clicked!");
};
var G__62271 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__62272__i = 0, G__62272__a = new Array(arguments.length -  0);
while (G__62272__i < G__62272__a.length) {G__62272__a[G__62272__i] = arguments[G__62272__i + 0]; ++G__62272__i;}
  _ = new cljs.core.IndexedSeq(G__62272__a,0,null);
} 
return G__62271__delegate.call(this,_);};
G__62271.cljs$lang$maxFixedArity = 0;
G__62271.cljs$lang$applyTo = (function (arglist__62273){
var _ = cljs.core.seq(arglist__62273);
return G__62271__delegate(_);
});
G__62271.cljs$core$IFn$_invoke$arity$variadic = G__62271__delegate;
return G__62271;
})()
}],["Click Me"])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-toplevel-clojure-code"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#toplevel-clojure-code"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"toplevel-clojure-code"}], ...["Toplevel Clojure Code"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-toplevel-clojure-code"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nYou may have noticed that, all the Clojure code being put in a component means that we can't use Clojure code that only works on the top level like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["defn"])," or ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["require"]),". To solve this, we can use ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+attr_orgx_toplevel: true"])," to mark a OrgX block and make its contents appear in toplevel of the generated Clojure file.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nLet's go back to the button example, we can define a ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["my-button"])," component with the following code:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org0a8065a"}], ...["#+attr_orgx_toplevel: true\n#+begin_orgx\n(defui my-button [{:keys [children callback]}]\n    ($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\"\n       :on-click (fn [& _]\n                   (if callback (callback)))}\n    children))\n#+end_orgx\n"]),null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["defui"])," will be put on the top level in the generated Clojure code, along side something like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["_comp"]),":\n"]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-src-container")}], ...[uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-highlighted")}], ...[uix.compiler.alpha.create_element_STAR_("code", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"lang-clojure")}], ...["(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["ns"])])," ...)\n(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," my-button [{",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":keys"])," [children callback]}]\n  ($ ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":button"])," {",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":class"])," ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-string")}], ...["\"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\""]),"\n              ",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":on-click"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...[uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-built_in")}], ...["fn"])])," [& _]\n                          #?(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-symbol")}], ...[":cljs"])," (",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["callback"]),")))}\n     children))\n\n(",uix.compiler.alpha.create_element_STAR_("span", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"hljs-name")}], ...["defui"])," _comp ...)\n"])])]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWe can then easily use the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["my-button"])," component with either inline or standalone OrgX block.\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Example Usage",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.mybutton_result,[null],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-import-modules"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#import-modules"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"import-modules"}], ...["Import Modules"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-import-modules"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIn MDX, we can import modules with normal ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["import"])," statements. In OrgX, we can do something similar with toplevel OrgX block and the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["require"])," function.\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org8941ab1"}], ...["#+attr_orgx_toplevel: true\n#+begin_orgx\n(require '[clojure.string :as string])\n#+end_orgx\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWe can also do this with keyword metadata at the beginning of an Org file.\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org44fadc2"}], ...["#+ORGX_REQUIRE: [[clojure.string :as string]]\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSettings in keyword metadata currently doesn't support reader macros.\n"])],["\n\n"])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-access-component-properties"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#access-component-properties"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"access-component-properties"}], ...["Access Component Properties"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-access-component-properties"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSimilar to MDX, we can access the component's properties with the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["post-props"])," variable. Some metadata are also provided in the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["post-props"])," variable.\n"]),null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe following metadata are provided by default:\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Example",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.metadata_example,[null],[])], null)], null)], null)],[]),uix.compiler.aot._GT_el("pre",uix.compiler.attributes.interpret_attrs((function (){var _STAR_print_namespace_maps_STAR__orig_val__62184 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__62185 = true;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62185);

try{var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62186_62274 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62187_62275 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62188_62276 = true;
var _STAR_print_fn_STAR__temp_val__62189_62277 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62188_62276);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62189_62277);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(post_props);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62187_62275);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62186_62274);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62184);
}})(),["pre",null,null,false],false),[])])])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-use-other-orgx-files-as-components"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#use-other-orgx-files-as-components"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"use-other-orgx-files-as-components"}], ...["Use Other OrgX Files as Components"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-use-other-orgx-files-as-components"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nBy default, OrgX files are compiled as Cljc files and will be put in the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["orgx"])," namespace. You can import them as described in ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#import-modules"}], ...["Import Modules"]),".\n"])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-use-orgx-with-native-org-syntax"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#use-orgx-with-native-org-syntax"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"use-orgx-with-native-org-syntax"}], ...["Use OrgX With Native Org Syntax"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-use-orgx-with-native-org-syntax"}], ...[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-use-components"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#use-components"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"use-components"}], ...["Use Components"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-use-components"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWriting ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+begin_orgx"])," and Clojure code must be very tedious every time we want to use a simple component, like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["note"])," or ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["warning"])," notice blocks.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nTo solve this problem, a new syntax ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+orgx_{comp-name}"])," has been introduced.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nFor example:\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Use Component With Org Syntax",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.orgx_syntax_result,[null],[])]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIt works by passing the rendered content to the component ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["note"])," as ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["children"]),". All other Org markups or structures that can be used in an Org environment can also be used here. You can also nested other OrgX structures in it, except for top level Clojure definition and component building, which are not supported.\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.note,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nCurrently we can't pass other properties to the component using this syntax, but that might change in the future.\n"])],["\n\n"])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-build-components"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#build-components"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"build-components"}], ...["Build Components"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-build-components"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSomething we may want to build a React component out of some Org blocks. Like we may want to pass two Org mode source blocks as arguments to a ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["tabs"])," components.\nTo do this, we just need to add an annotation to the existing ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["#+begin_orgx_{comp-name}"])," syntax:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"orge1e1059"}], ...["#+attr_orgx_defui: true\n#+begin_orgx_my-note\n*@@orgx:(or (:note-text props) \"Tip\")@@*\n#+begin_orgx\n(:children props)\n#+end_orgx\n#+end_orgx_my-note\n"]),null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAs shown in the example, we can use normal Org syntax along with OrgX snippets. We can also access the properties with the ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["props"])," variable.\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIn the above example we have defined a ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["my-note"])," component, we can then use it with any aforementioned methods.\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Example Usage",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.my_note_result,[null],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-inline-orgx-with-macros"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#inline-orgx-with-macros"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"inline-orgx-with-macros"}], ...["Inline OrgX with Macros"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-inline-orgx-with-macros"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nCurrently no similar syntax for inline OrgX is supported, however, it is fairly easy to make life easier with macros. Let's go back to use ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["my-button"])," as the example.\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering",new cljs.core.Keyword(null,"class","class",-2030961996),"lg:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)]"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Inline OrgX with Macro",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.macro_result,[null],[])])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-builtin-components"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#builtin-components"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"builtin-components"}], ...["Builtin Components"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-builtin-components"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nThe blogging program provides several builtin components, I will briefly describe their features.\n"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-simple-remarks"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#simple-remarks"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"simple-remarks"}], ...["Simple Notice Blocks"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-simple-remarks"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nIt provides most commons blocks like ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["info"]),", ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["note"]),", ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["warn"])," and ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["error"]),".\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Remarks",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.remarks_result,[null],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-tabs"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#tabs"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"tabs"}], ...["Tabs"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-tabs"}],[null,null,null,uix.compiler.alpha.create_element_STAR_("p", ...[null], ...[uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["tabs"])," is like tabs in a browser or a text editor.\n"]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.showcase,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showcase-name","showcase-name",147602067),"Rendering"], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs usage",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_example,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.tabs_result,[null],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-split-layout"}],[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#split-layout"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"split-layout"}], ...["Split Layout"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-split-layout"}],[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nSplit layout lets you show two things side by side:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org59c1165"}], ...["#+attr_orgx_defui: true\n#+begin_orgx_split_1\n#+begin_src clojure\n  ($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\"\n              :on-click (fn [& _]\n                          #?(:cljs (js/alert \"clicked!\")))}\n     \"Click Me\")\n#+end_src\n#+end_orgx_split_1\n\n#+attr_orgx_defui: true\n#+begin_orgx_split_2\n#+begin_orgx\n  ($ :button {:class \"bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg\"\n              :on-click (fn [& _]\n                          #?(:cljs (js/alert \"clicked!\")))}\n     \"Click Me\")\n#+end_orgx\n#+end_orgx_split_2\n\n#+begin_orgx\n($ split-layout\n($ tabs {:tab-list [{:name \"button\" :content ($ split_1)}]})\n($ tabs {:tab-list [{:name \"showcase\" :content ($ split_2)}]}))\n#+end_orgx\n"]),uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nWill be rendered as:\n"]),null,null,uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.split_layout,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"button",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_1,[null],[])], null)], null)], null)],[]),uix.compiler.alpha.component_element(net.coruscation.cerulean.common.components.tabs,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"showcase",new cljs.core.Keyword(null,"content","content",15833224),uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.split_2,[null],[])], null)], null)], null)],[])])])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-showcase"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#showcase"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"showcase"}], ...["Showcase"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-showcase"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nShowcase is a simple wrapper over ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["split-layout"])," and ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["tabs"]),". The ",uix.compiler.alpha.create_element_STAR_("code", ...[null], ...["showcase"])," component is used extensive in this post, such as the example in ",uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#simple-remarks"}], ...["Simple Notice Blocks"])," is coded as:\n"]),uix.compiler.alpha.create_element_STAR_("pre", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"example"),'id':"org9129375"}], ...["#+attr_orgx_defui: true\n#+begin_orgx_remarks_example\n#+begin_example\n#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n\n#+end_example\n#+end_orgx_remarks_example\n\n#+attr_orgx_defui: true\n#+begin_orgx_remarks_result\n#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n#+end_orgx_remarks_result\n\n#+begin_orgx\n($ showcase {:showcase-name \"Rendering\"}\n  ($ tabs {:tab-list [{:name \"Remarks\" :content ($ remarks_example)}]})\n  ($ remarks_result))\n#+end_orgx\n"])])])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-2"),'id':"outline-container-conclusions"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#conclusions"}], ...[uix.compiler.alpha.create_element_STAR_("h2", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"conclusions"}], ...["Conclusions"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-2"),'id':"text-conclusions"}], ...[]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-caveats"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#caveats"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"caveats"}], ...["Caveats"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-caveats"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nAlthough I have extensively used it in this demostration and will definitely use it in the future, there are some notably deficiency with the current implementation.\n"]),uix.compiler.alpha.create_element_STAR_("ul", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"org-ul")}], ...[uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["You need to read the logging to understand the problem if anything goes wrong. If you want to do SSR or SSG, the fact that the same code must be run on the JVM and the browser and produce the same result adds complexity."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["The syntax still feels cumbersome in many cases, but that might be improved in the future."]),uix.compiler.alpha.create_element_STAR_("li", ...[null], ...["The current implementation requires Emacs itself to convert the Org files into HTML, and Clojure code will then process the HTML. The most notably advantage of this method is that we can use the (basically) the full power of Org mode. However, it is also a lot of moving parts."])])])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-3"),'id':"outline-container-future-plans"}], ...[uix.compiler.alpha.create_element_STAR_("a", ...[{'href':"#future-plans"}], ...[uix.compiler.alpha.create_element_STAR_("h3", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cr-self-reference "),'id':"future-plans"}], ...["Future Plans"])]),uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"outline-text-3"),'id':"text-future-plans"}], ...[uix.compiler.alpha.create_element_STAR_("p", ...[null], ...["\nI will describe the process of implement it in the next post of this series. Current the code is still coupled with my blogging program. I'm planning on make it a separate library in the future.\n"])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62194 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62195 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62195);

try{if(((cljs.core.map_QMARK_(props62177)) || ((props62177 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62177)))+"\n"+"(clojure.core/or (clojure.core/map? props62177) (clojure.core/nil? props62177))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62194);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/_comp");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62278 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62278.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62278.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,"",null,null) : sig__41319__auto___62278.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp.fast_refresh_signature = sig__41319__auto___62278);
} else {
}
} else {
}

orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component = (function orgx$something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i$component(props__41395__auto__){
var props62197 = uix.core.glue_args(props__41395__auto__);
var props = props62197;
var ___41394__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props62197);
var f__41396__auto__ = (function (){

if(goog.DEBUG){
var temp__5825__auto___62279 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___62279)){
var f__41310__auto___62280 = temp__5825__auto___62279;
(f__41310__auto___62280.cljs$core$IFn$_invoke$arity$0 ? f__41310__auto___62280.cljs$core$IFn$_invoke$arity$0() : f__41310__auto___62280.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i._comp,uix.compiler.attributes.interpret_props(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("blog","orgx","blog/orgx",-1430261758),new cljs.core.Keyword("blog","tags","blog/tags",1766286535),new cljs.core.Keyword("blog","unlisted","blog/unlisted",-268124729),new cljs.core.Keyword("blog","title","blog/title",629301577),new cljs.core.Keyword("blog","show-toc?","blog/show-toc?",-1011924183),new cljs.core.Keyword("blog","file-path","blog/file-path",-2012853524),new cljs.core.Keyword("blog","author","blog/author",2110519182),new cljs.core.Keyword("blog","email","blog/email",1419146704),new cljs.core.Keyword("blog","description","blog/description",-1430014670),new cljs.core.Keyword("blog","id","blog/id",-1385637198),new cljs.core.Keyword("blog","category","blog/category",-596578574),new cljs.core.Keyword("blog","language","blog/language",-1598263178),new cljs.core.Keyword("blog","published-date","blog/published-date",1156678198),new cljs.core.Keyword("blog","content","blog/content",12798170),new cljs.core.Keyword("blog","orgx-require","blog/orgx-require",-1673054916),new cljs.core.Keyword("blog","modified-date","blog/modified-date",-216271460)],[true,cljs.core.PersistentVector.EMPTY,false,"Something Like MDX but with Clojure and Org-Mode for My Personal Blog: Part I",true,"/home/void/Projects/cerulean/workspace/blogs/some-like-mdx-but-with-clojure-and-org-mode.org",null,null,"MDX  is a tool lets you write JavaScript and JSX in a Markdown file. It will then compile the Markdown file into a JavaScript file, so that we can use it f...","something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i","Coding","en_US","2026-01-03T01:47:09+08:00","<p>\n<a href=\"https://mdxjs.com/\">MDX</a> is a tool lets you write JavaScript and JSX in a Markdown file. It will then compile the Markdown file into a JavaScript file, so that we can use it from other JavaScript code. I always wanted something similar for my personal blog. For some background, the blogging program is written in Clojure/ClojureScript. The blogging program runs on the JVM, it works by statically generating all the HTML and other files so that the result could be hosted on platforms like Github Pages. Posts of my blog are written in <a href=\"https://orgmode.org\">org-mode</a>. As the blog program runs on the JVM, directly using MDX is theoratically possible, but probably would create a lot of frictions.\n</p>\n\n<p>\nTherefore I took some time to implement something similar. Albeit it is not fully tested, the result is quite satisfactory: I can embed Clojure code directly in an Org file, or use React components defined in Clojure code with native Org syntax. The Org file can then be converted into a Cljc file and used from other Clojure code.\n</p>\n\n<p>\nIn the following sections I will call it <code>OrgX</code>.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"info\"><p>\n<i>This is part <b>one</b> of the series, in this post I will show the features and in the next post I will describe the process of implementing it</i>\n</p>\n\n</pre>\n<div id=\"outline-container-how-orgx-works\" class=\"outline-2\">\n<a href=\"#how-orgx-works\"><h2 id=\"how-orgx-works\" class=\"cr-self-reference \">How OrgX Works</h2></a>\n<div class=\"outline-text-2\" id=\"text-how-orgx-works\">\n<p>\nSimilar to MDX, OrgX works by compiling the OrgX file into a <a href=\"https://clojure.org/guides/reader_conditionals\">Cljc</a> file. A basic OrgX file would look like this:\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"orgx-example\"><pre class=\"example\" id=\"orgabcc67c\">#+ORGX: true\n\n/*Hello* from @@orgx:($ :span &quot;OrgX&quot;)@@/\n\n#+begin_orgx\n($ :div (str &quot;Hello&quot; &quot; World!&quot;))\n#+end_orgx\n</pre>\n\n</pre>\n\n\n<pre class=\"orgx\">($ tabs {:tab-list [{:name &quot;example.org&quot; :content ($ orgx-example)}]})\n\n</pre>\n\n\n<p>\nIt will be converted into something similar to the following Clojure snippet.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"orgx-cljc\"><div class=\"org-src-container\">\n<pre class=\"cr-highlighted\"><code class=\"lang-clojure\"><html><head></head><body>(<span class=\"hljs-name\"><span class=\"hljs-built_in\">ns</span></span> orgx.example\n  (<span class=\"hljs-symbol\">:require</span> [uix.core <span class=\"hljs-symbol\">:as</span> uix <span class=\"hljs-symbol\">:refer</span>\n             [defui use-state use-effect use-context $]]))\n\n(<span class=\"hljs-name\">defui</span> _comp [post-props]\n  ($ <span class=\"hljs-symbol\">:&lt;&gt;</span>\n     ($ <span class=\"hljs-symbol\">:p</span> {} ($ <span class=\"hljs-symbol\">:i</span> {}\n                 ($ <span class=\"hljs-symbol\">:b</span> {} <span class=\"hljs-string\">&quot;Hello&quot;</span>)\n                 <span class=\"hljs-string\">&quot; from &quot;</span>\n                 ($ <span class=\"hljs-symbol\">:span</span> <span class=\"hljs-string\">&quot;OrgX&quot;</span>)))\n     ($ <span class=\"hljs-symbol\">:div</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">str</span></span> <span class=\"hljs-string\">&quot;Hello&quot;</span> <span class=\"hljs-string\">&quot; World!&quot;</span>))))\n\n(<span class=\"hljs-name\">defui</span> component [props]\n  ($ _comp (<span class=\"hljs-name\"><span class=\"hljs-built_in\">merge</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">quote</span></span> {#_<span class=\"hljs-string\">&quot;default properties&quot;</span>}) props)))\n</body></html></code></pre>\n</div>\n\n</pre>\n\n<pre class=\"orgx\">($ tabs {:tab-list [{:name &quot;orgx/example.cljc&quot; :content ($ orgx-cljc)}]})\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nThe blogging program uses <a href=\"https://github.com/pitch-io/uix?tab=readme-ov-file\">uix</a> as its React wrapper, thus the generated Clojure code is using uix. Some uix functions like <code>$</code> are also imported by default. \n</p>\n\n</pre>\n\n<p>\nAs you can see from this example:\n</p>\n\n<ul class=\"org-ul\">\n<li>We can <code>@@orgx:@@</code> for inline Clojure code and <code>#+begin_orgx</code> for Clojure blocks.</li>\n<li>The embedded Clojure code are put in a component called <code>_comp</code>, along with other contents in the Org file.</li>\n<li>The outer <code>component</code> wraps the <code>_comp</code> component, its provides some metadata about this post related to the blogging program. More about this on the following sections.</li>\n<li>We can use the <code>component</code> component from other Clojure code.</li>\n</ul>\n</div>\n</div>\n<div id=\"outline-container-basic-usage\" class=\"outline-2\">\n<a href=\"#basic-usage\"><h2 id=\"basic-usage\" class=\"cr-self-reference \">Basic Usage</h2></a>\n<div class=\"outline-text-2\" id=\"text-basic-usage\">\n<p>\nAs we have seen from the earily example, <code>#+begin_orgx</code> and <code>@@orgx:@@</code> are the most basic structure for standalone and inline Clojure code, respectively.\n</p>\n\n<p>\nWe can have a clickable button with the following code.\n</p>\n\n<pre class=\"example\" id=\"org6f14ccd\">#+begin_orgx\n  ;; you can style it using tailwindcss\n  ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n     :on-click (fn [&amp; _]\n                   #?(:cljs (js/alert &quot;clicked!&quot;)))}\n  &quot;click me&quot;)\n#+end_orgx\n</pre>\n\n<p>\nThat will be rendered as:\n</p>\n\n<pre class=\"orgx\">  ($ :button {:class &quot;my-2 bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot; :on-click (fn [&amp; _] #?(:cljs (js/alert &quot;clicked!&quot;)))} &quot;Click Me&quot;)\n\n</pre>\n\n<p>\nNotice the <a href=\"https://clojure.org/guides/reader_conditionals\">reader conditional macro</a> <code>#?(:cljs)</code>  . The generated Clojure code is in a Cljc file, therefore it pairs well with the server side rendering or static generation. However, it also means we need to put the platform specified code in the corresponding reader conditionals.\n</p>\n\n<pre class=\"example\" id=\"orgda39a06\">We can also use the button inline this way: @@orgx:($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot; :on-click (fn [&amp; _] #?(:cljs (js/alert &quot;clicked!&quot;)))} &quot;Click Me&quot;)@@\n</pre>\n\n<p>\nThe above snippet will be rendered as:\n</p>\n\n<p>\nWe can also use the button inline this way: <code class=\"orgx\">\n($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot; :on-click (fn [&amp; _] #?(:cljs (js/alert &quot;clicked!&quot;)))} &quot;Click Me&quot;)\n</code>\n</p>\n</div>\n<div id=\"outline-container-toplevel-clojure-code\" class=\"outline-3\">\n<a href=\"#toplevel-clojure-code\"><h3 id=\"toplevel-clojure-code\" class=\"cr-self-reference \">Toplevel Clojure Code</h3></a>\n<div class=\"outline-text-3\" id=\"text-toplevel-clojure-code\">\n<p>\nYou may have noticed that, all the Clojure code being put in a component means that we can't use Clojure code that only works on the top level like <code>defn</code> or <code>require</code>. To solve this, we can use <code>#+attr_orgx_toplevel: true</code> to mark a OrgX block and make its contents appear in toplevel of the generated Clojure file.\n</p>\n\n<p>\nLet's go back to the button example, we can define a <code>my-button</code> component with the following code:\n</p>\n\n<pre class=\"example\" id=\"org0a8065a\">#+attr_orgx_toplevel: true\n#+begin_orgx\n(defui my-button [{:keys [children callback]}]\n    ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n       :on-click (fn [&amp; _]\n                   (if callback (callback)))}\n    children))\n#+end_orgx\n</pre>\n\n<pre class=\"orgx\" data-toplevel=\"\">  (defui my-button [{:keys [children callback]}]\n      ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n         :on-click (fn [&amp; _]\n                     (if callback (callback)))}\n      children))\n\n</pre>\n\n<p>\nThe <code>defui</code> will be put on the top level in the generated Clojure code, along side something like <code>_comp</code>:\n</p>\n\n<div class=\"org-src-container\">\n<pre class=\"cr-highlighted\"><code class=\"lang-clojure\"><html><head></head><body>(<span class=\"hljs-name\"><span class=\"hljs-built_in\">ns</span></span> ...)\n(<span class=\"hljs-name\">defui</span> my-button [{<span class=\"hljs-symbol\">:keys</span> [children callback]}]\n  ($ <span class=\"hljs-symbol\">:button</span> {<span class=\"hljs-symbol\">:class</span> <span class=\"hljs-string\">&quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;</span>\n              <span class=\"hljs-symbol\">:on-click</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> [&amp; _]\n                          #?(<span class=\"hljs-symbol\">:cljs</span> (<span class=\"hljs-name\">callback</span>)))}\n     children))\n\n(<span class=\"hljs-name\">defui</span> _comp ...)\n</body></html></code></pre>\n</div>\n\n<p>\nWe can then easily use the <code>my-button</code> component with either inline or standalone OrgX block.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"mybutton_example\"><pre class=\"example\" id=\"orgd18407f\">Inline OrgX block:\n@@orgx:($ my-button {:callback (fn [] #?(:cljs (js/alert &quot;Hello From inline OrgX&quot;)))} &quot;From inline OrgX&quot;)@@\n#+begin_orgx\n($ :div &quot;We can also use it in a orgx block&quot;\n    ($ my-button {:callback (fn [] #?(:cljs (js/alert &quot;Hello from OrgX block!&quot;)))}\n         &quot;From OrgX block&quot;))\n#+end_orgx\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"mybutton_result\"><p>\nInline OrgX block:\n<code class=\"orgx\">\n($ my-button {:callback (fn [] #?(:cljs (js/alert &quot;Hello From inline OrgX&quot;)))} &quot;From inline OrgX&quot;)\n</code>\n</p>\n<pre class=\"orgx\">($ :div &quot;We can also use it in a orgx block&quot;\n    ($ my-button {:callback (fn [] #?(:cljs (js/alert &quot;Hello from OrgX block!&quot;)))}\n         &quot;From OrgX block&quot;))\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Example Usage&quot; :content ($ mybutton_example)}]})\n  ($ mybutton_result))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-import-modules\" class=\"outline-3\">\n<a href=\"#import-modules\"><h3 id=\"import-modules\" class=\"cr-self-reference \">Import Modules</h3></a>\n<div class=\"outline-text-3\" id=\"text-import-modules\">\n<p>\nIn MDX, we can import modules with normal <code>import</code> statements. In OrgX, we can do something similar with toplevel OrgX block and the <code>require</code> function.\n</p>\n\n<pre class=\"example\" id=\"org8941ab1\">#+attr_orgx_toplevel: true\n#+begin_orgx\n(require '[clojure.string :as string])\n#+end_orgx\n</pre>\n\n<p>\nWe can also do this with keyword metadata at the beginning of an Org file.\n</p>\n\n<pre class=\"example\" id=\"org44fadc2\">#+ORGX_REQUIRE: [[clojure.string :as string]]\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nSettings in keyword metadata currently doesn't support reader macros.\n</p>\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-access-component-properties\" class=\"outline-3\">\n<a href=\"#access-component-properties\"><h3 id=\"access-component-properties\" class=\"cr-self-reference \">Access Component Properties</h3></a>\n<div class=\"outline-text-3\" id=\"text-access-component-properties\">\n<p>\nSimilar to MDX, we can access the component's properties with the <code>post-props</code> variable. Some metadata are also provided in the <code>post-props</code> variable.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"metadata-example\"><pre class=\"example\" id=\"orgce2a6bb\">($ :pre\n  (binding [*print-namespace-maps* true]\n    (with-out-str (pprint/pprint post-props))))\n</pre>\n\n</pre>\n\n<p>\nThe following metadata are provided by default:\n</p>\n\n<pre class=\"orgx\">($ showcase ($ tabs {:tab-list [{:name &quot;Example&quot; :content ($ metadata-example)}]}) ($ :pre (binding [*print-namespace-maps* true] (with-out-str (pprint/pprint post-props)))))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-use-other-orgx-files-as-components\" class=\"outline-3\">\n<a href=\"#use-other-orgx-files-as-components\"><h3 id=\"use-other-orgx-files-as-components\" class=\"cr-self-reference \">Use Other OrgX Files as Components</h3></a>\n<div class=\"outline-text-3\" id=\"text-use-other-orgx-files-as-components\">\n<p>\nBy default, OrgX files are compiled as Cljc files and will be put in the <code>orgx</code> namespace. You can import them as described in <a href=\"#import-modules\">Import Modules</a>.\n</p>\n</div>\n</div>\n</div>\n<div id=\"outline-container-use-orgx-with-native-org-syntax\" class=\"outline-2\">\n<a href=\"#use-orgx-with-native-org-syntax\"><h2 id=\"use-orgx-with-native-org-syntax\" class=\"cr-self-reference \">Use OrgX With Native Org Syntax</h2></a>\n<div class=\"outline-text-2\" id=\"text-use-orgx-with-native-org-syntax\">\n</div>\n<div id=\"outline-container-use-components\" class=\"outline-3\">\n<a href=\"#use-components\"><h3 id=\"use-components\" class=\"cr-self-reference \">Use Components</h3></a>\n<div class=\"outline-text-3\" id=\"text-use-components\">\n<p>\nWriting <code>#+begin_orgx</code> and Clojure code must be very tedious every time we want to use a simple component, like <code>note</code> or <code>warning</code> notice blocks.\n</p>\n\n<p>\nTo solve this problem, a new syntax <code>#+orgx_{comp-name}</code> has been introduced.\n</p>\n\n<p>\nFor example:\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"orgx_syntax_example\"><pre class=\"example\" id=\"orga58ef81\">#+begin_orgx_note\nThis is a note\n\n+ /Normal/ Org markups *can* be used inside it\n\n@@orgx:($ :span &quot;You can even nest OrgX syntax in it&quot;)@@\n#+end_orgx_note\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"orgx_syntax_result\"><pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nThis is a note\n</p>\n\n<ul class=\"org-ul\">\n<li><i>Normal</i> Org markups <b>can</b> be used inside it</li>\n</ul>\n\n<p>\n<code class=\"orgx\">\n($ :span &quot;You can even nest OrgX syntax in it&quot;)\n</code>\n</p>\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Use Component With Org Syntax&quot; :content ($  orgx_syntax_example)}]})\n  ($ orgx_syntax_result))\n\n</pre>\n\n<p>\nIt works by passing the rendered content to the component <code>note</code> as <code>children</code>. All other Org markups or structures that can be used in an Org environment can also be used here. You can also nested other OrgX structures in it, except for top level Clojure definition and component building, which are not supported.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nCurrently we can't pass other properties to the component using this syntax, but that might change in the future.\n</p>\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-build-components\" class=\"outline-3\">\n<a href=\"#build-components\"><h3 id=\"build-components\" class=\"cr-self-reference \">Build Components</h3></a>\n<div class=\"outline-text-3\" id=\"text-build-components\">\n<p>\nSomething we may want to build a React component out of some Org blocks. Like we may want to pass two Org mode source blocks as arguments to a <code>tabs</code> components.\nTo do this, we just need to add an annotation to the existing <code>#+begin_orgx_{comp-name}</code> syntax:\n</p>\n\n<pre class=\"example\" id=\"orge1e1059\">#+attr_orgx_defui: true\n#+begin_orgx_my-note\n*@@orgx:(or (:note-text props) &quot;Tip&quot;)@@*\n#+begin_orgx\n(:children props)\n#+end_orgx\n#+end_orgx_my-note\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"my-note\"><p>\n<b><code class=\"orgx\">\n(or (:note-text props) &quot;Tip&quot;)\n</code></b>\n</p>\n<pre class=\"orgx\">(:children props)\n\n</pre>\n\n</pre>\n\n\n<p>\nAs shown in the example, we can use normal Org syntax along with OrgX snippets. We can also access the properties with the <code>props</code> variable.\n</p>\n\n<p>\nIn the above example we have defined a <code>my-note</code> component, we can then use it with any aforementioned methods.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"my-note-example\"><pre class=\"example\" id=\"orgdfdc295\">#+begin_orgx_my-note\nThis is a note!\n#+end_orgx_my-note\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"my-note-result\"><pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"my-note\"><p>\nThis is a note!\n</p>\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Example Usage&quot; :content ($ my-note-example)}]})\n  ($ my-note-result))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-inline-orgx-with-macros\" class=\"outline-3\">\n<a href=\"#inline-orgx-with-macros\"><h3 id=\"inline-orgx-with-macros\" class=\"cr-self-reference \">Inline OrgX with Macros</h3></a>\n<div class=\"outline-text-3\" id=\"text-inline-orgx-with-macros\">\n<p>\nCurrently no similar syntax for inline OrgX is supported, however, it is fairly easy to make life easier with macros. Let's go back to use <code>my-button</code> as the example.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"macro-example\"><p>\nWe can define a macro like:\n</p>\n<pre class=\"example\" id=\"orge758dac\">#+MACRO: my-button @@orgx:($ my-button {:callback (or $2 nil)} $1)@@\n</pre>\n\n\n<p>\nAnd then use it with:\n</p>\n<pre class=\"example\" id=\"orga54a514\">{{{my-button(&quot;Using Macro&quot;, #?(:cljs (fn [] (js/alert &quot;Hello From Macro!&quot;))))}}}\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"macro-result\"><p>\n<code class=\"orgx\">\n($ my-button {:callback (or  #?(:cljs (fn [] (js/alert &quot;Hello From Macro!&quot;))) nil)} &quot;Using Macro&quot;)\n</code>\n</p>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot; :class &quot;lg:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)]&quot;}\n  ($ tabs {:tab-list [{:name &quot;Inline OrgX with Macro&quot; :content ($ macro-example)}]})\n  ($ macro-result))\n\n</pre>\n</div>\n</div>\n</div>\n<div id=\"outline-container-builtin-components\" class=\"outline-2\">\n<a href=\"#builtin-components\"><h2 id=\"builtin-components\" class=\"cr-self-reference \">Builtin Components</h2></a>\n<div class=\"outline-text-2\" id=\"text-builtin-components\">\n<p>\nThe blogging program provides several builtin components, I will briefly describe their features.\n</p>\n</div>\n<div id=\"outline-container-simple-remarks\" class=\"outline-3\">\n<a href=\"#simple-remarks\"><h3 id=\"simple-remarks\" class=\"cr-self-reference \">Simple Notice Blocks</h3></a>\n<div class=\"outline-text-3\" id=\"text-simple-remarks\">\n<p>\nIt provides most commons blocks like <code>info</code>, <code>note</code>, <code>warn</code> and <code>error</code>.\n</p>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"remarks_example\"><pre class=\"example\" id=\"org0e0d2e9\">#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"remarks_result\"><pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"info\"><p>\nThis is an info\n</p>\n\n</pre>\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"note\"><p>\nThis is a note\n</p>\n\n</pre>\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"warn\"><p>\nThis is a warn\n</p>\n\n</pre>\n<pre class=\"orgx\" data-wrapper=\"use-comp\" data-wrapper-data=\"error\"><p>\nThis is an error\n</p>\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Remarks&quot; :content ($ remarks_example)}]})\n  ($ remarks_result))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-tabs\" class=\"outline-3\">\n<a href=\"#tabs\"><h3 id=\"tabs\" class=\"cr-self-reference \">Tabs</h3></a>\n<div class=\"outline-text-3\" id=\"text-tabs\">\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"code_tabs\"><div class=\"org-src-container\">\n<pre class=\"cr-highlighted\"><code class=\"lang-clojure\"><html><head></head><body>(<span class=\"hljs-name\">defui</span> tabs [{<span class=\"hljs-symbol\">:keys</span> [tab-list default-table class]}]\n  (<span class=\"hljs-name\"><span class=\"hljs-built_in\">let</span></span> [[selected-tab set-selected-tab!] (<span class=\"hljs-name\">use-state</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">or</span></span> default-table\n                                                        (<span class=\"hljs-symbol\">:name</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">first</span></span> tab-list))))]\n    ($ <span class=\"hljs-symbol\">:div.my-4.relative.border-sky-300.border-l-2.border-l-neutral-100</span> {<span class=\"hljs-symbol\">:class</span> class}\n       ($ <span class=\"hljs-symbol\">:div.my-0.flex.relative.bg-neutral-100</span>\n          (<span class=\"hljs-name\"><span class=\"hljs-built_in\">map</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> [{<span class=\"hljs-symbol\">:keys</span> [name]}]\n                 ($ <span class=\"hljs-symbol\">:button.font-medium.text-neutral-700.bg-neutral-50.py-1.px-2.border-t-2.border-neutral-50.min-w-28.bg-neutral-50.border-t-neutral-100</span>\n                    {<span class=\"hljs-symbol\">:key</span> name\n                     <span class=\"hljs-symbol\">:class</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">when</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">=</span></span> name selected-tab)\n                              <span class=\"hljs-string\">&quot; text-sky-800 border-sky-400 bg-sky-100 border-t-sky-400&quot;</span>)\n                     <span class=\"hljs-symbol\">:on-click</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> []\n                                 #?(<span class=\"hljs-symbol\">:cljs</span>\n                                    (<span class=\"hljs-name\">set-selected-tab!</span> name)))}\n                    name))\n               tab-list))\n       ($ <span class=\"hljs-symbol\">:div.my-0.bg-neutral-50.overflow-hidden.px-2.h-full</span>\n          (<span class=\"hljs-symbol\">:content</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">first</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">filter</span></span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> [{<span class=\"hljs-symbol\">:keys</span> [name]}]\n                                     (<span class=\"hljs-name\"><span class=\"hljs-built_in\">=</span></span> name selected-tab))\n                                   tab-list)))))))\n</body></html></code></pre>\n</div>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"tabs_example\"><pre class=\"example\" id=\"orgb0b48ff\">#+begin_orgx\n($ tabs {:tab-list [{:name &quot;tabs.clj&quot; :content ($ code_tabs)}\n                    {:name &quot;tabs usage&quot; :content ($ tabs_example)}]})\n#+end_orgx\n</pre>\n\n</pre>\n\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"tabs_result\"><pre class=\"orgx\">($ tabs {:tab-list [{:name &quot;tabs.clj&quot; :content ($ code_tabs)}\n                      {:name &quot;tabs usage&quot; :content ($ tabs_example)}]})\n\n</pre>\n\n</pre>\n\n<p>\n<code>tabs</code> is like tabs in a browser or a text editor.\n</p>\n<pre class=\"orgx\">($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;tabs usage&quot; :content ($ tabs_example)}]})\n  ($ tabs_result))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-split-layout\" class=\"outline-3\">\n<a href=\"#split-layout\"><h3 id=\"split-layout\" class=\"cr-self-reference \">Split Layout</h3></a>\n<div class=\"outline-text-3\" id=\"text-split-layout\">\n<p>\nSplit layout lets you show two things side by side:\n</p>\n\n<pre class=\"example\" id=\"org59c1165\">#+attr_orgx_defui: true\n#+begin_orgx_split_1\n#+begin_src clojure\n  ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n              :on-click (fn [&amp; _]\n                          #?(:cljs (js/alert &quot;clicked!&quot;)))}\n     &quot;Click Me&quot;)\n#+end_src\n#+end_orgx_split_1\n\n#+attr_orgx_defui: true\n#+begin_orgx_split_2\n#+begin_orgx\n  ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n              :on-click (fn [&amp; _]\n                          #?(:cljs (js/alert &quot;clicked!&quot;)))}\n     &quot;Click Me&quot;)\n#+end_orgx\n#+end_orgx_split_2\n\n#+begin_orgx\n($ split-layout\n($ tabs {:tab-list [{:name &quot;button&quot; :content ($ split_1)}]})\n($ tabs {:tab-list [{:name &quot;showcase&quot; :content ($ split_2)}]}))\n#+end_orgx\n</pre>\n\n<p>\nWill be rendered as:\n</p>\n\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"split_1\"><div class=\"org-src-container\">\n<pre class=\"cr-highlighted\"><code class=\"lang-clojure\"><html><head></head><body>($ <span class=\"hljs-symbol\">:button</span> {<span class=\"hljs-symbol\">:class</span> <span class=\"hljs-string\">&quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;</span>\n            <span class=\"hljs-symbol\">:on-click</span> (<span class=\"hljs-name\"><span class=\"hljs-built_in\">fn</span></span> [&amp; _]\n                        #?(<span class=\"hljs-symbol\">:cljs</span> (<span class=\"hljs-name\">js/alert</span> <span class=\"hljs-string\">&quot;clicked!&quot;</span>)))}\n   <span class=\"hljs-string\">&quot;Click Me&quot;</span>)\n</body></html></code></pre>\n</div>\n\n</pre>\n\n<pre class=\"orgx\" data-wrapper=\"use-defui\" data-wrapper-data=\"split_2\"><pre class=\"orgx\">  ($ :button {:class &quot;bg-sky-600 text-neutral-50 py-1 px-2 rounded-lg&quot;\n              :on-click (fn [&amp; _]\n                          #?(:cljs (js/alert &quot;clicked!&quot;)))}\n     &quot;Click Me&quot;)\n\n</pre>\n\n</pre>\n\n<pre class=\"orgx\">($ split-layout\n($ tabs {:tab-list [{:name &quot;button&quot; :content ($ split_1)}]})\n($ tabs {:tab-list [{:name &quot;showcase&quot; :content ($ split_2)}]}))\n\n</pre>\n</div>\n</div>\n<div id=\"outline-container-showcase\" class=\"outline-3\">\n<a href=\"#showcase\"><h3 id=\"showcase\" class=\"cr-self-reference \">Showcase</h3></a>\n<div class=\"outline-text-3\" id=\"text-showcase\">\n<p>\nShowcase is a simple wrapper over <code>split-layout</code> and <code>tabs</code>. The <code>showcase</code> component is used extensive in this post, such as the example in <a href=\"#simple-remarks\">Simple Notice Blocks</a> is coded as:\n</p>\n\n<pre class=\"example\" id=\"org9129375\">#+attr_orgx_defui: true\n#+begin_orgx_remarks_example\n#+begin_example\n#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n\n#+end_example\n#+end_orgx_remarks_example\n\n#+attr_orgx_defui: true\n#+begin_orgx_remarks_result\n#+begin_orgx_info\nThis is an info\n#+end_orgx_info\n#+begin_orgx_note\nThis is a note\n#+end_orgx_note\n#+begin_orgx_warn\nThis is a warn\n#+end_orgx_warn\n#+begin_orgx_error\nThis is an error\n#+end_orgx_error\n#+end_orgx_remarks_result\n\n#+begin_orgx\n($ showcase {:showcase-name &quot;Rendering&quot;}\n  ($ tabs {:tab-list [{:name &quot;Remarks&quot; :content ($ remarks_example)}]})\n  ($ remarks_result))\n#+end_orgx\n</pre>\n</div>\n</div>\n</div>\n<div id=\"outline-container-conclusions\" class=\"outline-2\">\n<a href=\"#conclusions\"><h2 id=\"conclusions\" class=\"cr-self-reference \">Conclusions</h2></a>\n<div class=\"outline-text-2\" id=\"text-conclusions\">\n</div>\n<div id=\"outline-container-caveats\" class=\"outline-3\">\n<a href=\"#caveats\"><h3 id=\"caveats\" class=\"cr-self-reference \">Caveats</h3></a>\n<div class=\"outline-text-3\" id=\"text-caveats\">\n<p>\nAlthough I have extensively used it in this demostration and will definitely use it in the future, there are some notably deficiency with the current implementation.\n</p>\n\n<ul class=\"org-ul\">\n<li>You need to read the logging to understand the problem if anything goes wrong. If you want to do SSR or SSG, the fact that the same code must be run on the JVM and the browser and produce the same result adds complexity.</li>\n<li>The syntax still feels cumbersome in many cases, but that might be improved in the future.</li>\n<li>The current implementation requires Emacs itself to convert the Org files into HTML, and Clojure code will then process the HTML. The most notably advantage of this method is that we can use the (basically) the full power of Org mode. However, it is also a lot of moving parts.</li>\n</ul>\n</div>\n</div>\n<div id=\"outline-container-future-plans\" class=\"outline-3\">\n<a href=\"#future-plans\"><h3 id=\"future-plans\" class=\"cr-self-reference \">Future Plans</h3></a>\n<div class=\"outline-text-3\" id=\"text-future-plans\">\n<p>\nI will describe the process of implement it in the next post of this series. Current the code is still coupled with my blogging program. I'm planning on make it a separate library in the future.\n</p>\n</div>\n</div>\n</div>\n",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clojure.pprint","clojure.pprint",-547379114,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"pprint","pprint",-1434237374,null)], null)], null),"2026-01-03T15:10:59+08:00"]),props], 0))),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__62198 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__62199 = orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__62199);

try{if(((cljs.core.map_QMARK_(props62197)) || ((props62197 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props62197)))+"\n"+"(clojure.core/or (clojure.core/map? props62197) (clojure.core/nil? props62197))")));
}

return f__41396__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__62198);
}} else {
return f__41396__auto__();
}
});

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component,"orgx.something-like-mdx-but-with-clojure-and-org-mode-for-my-personal-blog--part-i/component");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__41319__auto___62281 = globalThis.uix.dev.signature_BANG_();
(sig__41319__auto___62281.cljs$core$IFn$_invoke$arity$4 ? sig__41319__auto___62281.cljs$core$IFn$_invoke$arity$4(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component,"",null,null) : sig__41319__auto___62281.call(null,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component,orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component.displayName);

(orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.component.fast_refresh_signature = sig__41319__auto___62281);
} else {
}
} else {
}


//# sourceMappingURL=orgx.something_like_mdx_but_with_clojure_and_org_mode_for_my_personal_blog__part_i.js.map
