import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$$js_joda$locale_en_us$dist$index.js";
import "./cljc.java_time.format.date_time_formatter.js";
import "./clojure.string.js";
import "./net.coruscation.cerulean.common.commons.js";
import "./net.coruscation.cerulean.components.js";
import "./net.coruscation.cerulean.router.js";
import "./net.coruscation.cerulean.user_config.js";
import "./net.coruscation.cerulean.utils.js";
import "./uix_fontawesome.brands.js";
import "./uix_fontawesome.solid.js";
import "./uix.core.js";
goog.provide('net.coruscation.cerulean.common.pages');
var module$node_modules$$js_joda$locale_en_us$dist$index=shadow.js.require("module$node_modules$$js_joda$locale_en_us$dist$index", {});
net.coruscation.cerulean.common.pages.date_time_to_readable_string = (function net$coruscation$cerulean$common$pages$date_time_to_readable_string(zoned_date_time){
return zoned_date_time.format(cljc.java_time.format.date_time_formatter.with_locale(cljc.java_time.format.date_time_formatter.of_pattern.cljs$core$IFn$_invoke$arity$1("LLL dd, yyyy"),module$node_modules$$js_joda$locale_en_us$dist$index.Locale.US));
});
net.coruscation.cerulean.common.pages.icons = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"github","github",567794498),uix_fontawesome.brands._github,new cljs.core.Keyword(null,"hackernews","hackernews",-1486194573),uix_fontawesome.brands._square_hacker_news,new cljs.core.Keyword(null,"linkedin","linkedin",-1733650847),uix_fontawesome.brands._linkedin,new cljs.core.Keyword(null,"rss","rss",-1401556502),uix_fontawesome.solid._square_rss,new cljs.core.Keyword(null,"reddit","reddit",-1323650081),uix_fontawesome.brands._reddit], null);
net.coruscation.cerulean.common.pages.header_to_level = (function net$coruscation$cerulean$common$pages$header_to_level(tag){
var G__71808 = tag;
var G__71808__$1 = (((G__71808 instanceof cljs.core.Keyword))?G__71808.fqn:null);
switch (G__71808__$1) {
case "h2":
return (1);

break;
case "h3":
return (2);

break;
case "h4":
return (3);

break;
case "h5":
return (4);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" isn't suported"),cljs.core.PersistentArrayMap.EMPTY);

}
});
net.coruscation.cerulean.common.pages.generate_toc_from_element = (function net$coruscation$cerulean$common$pages$generate_toc_from_element(element){
var headers = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(element.querySelectorAll("h2,h3,h4,h5"));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5627__auto__ = (function net$coruscation$cerulean$common$pages$generate_toc_from_element_$_iter__71816(s__71817){
return (new cljs.core.LazySeq(null,(function (){
var s__71817__$1 = s__71817;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__71817__$1);
if(temp__5823__auto__){
var s__71817__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71817__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__71817__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__71819 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__71818 = (0);
while(true){
if((i__71818 < size__5626__auto__)){
var header = cljs.core._nth(c__5625__auto__,i__71818);
cljs.core.chunk_append(b__71819,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),net.coruscation.cerulean.common.pages.header_to_level(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(header.tagName))),new cljs.core.Keyword(null,"content","content",15833224),header.innerText,new cljs.core.Keyword(null,"id","id",-1388402092),header.id], null));

var G__72085 = (i__71818 + (1));
i__71818 = G__72085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71819),net$coruscation$cerulean$common$pages$generate_toc_from_element_$_iter__71816(cljs.core.chunk_rest(s__71817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71819),null);
}
} else {
var header = cljs.core.first(s__71817__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),net.coruscation.cerulean.common.pages.header_to_level(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(header.tagName))),new cljs.core.Keyword(null,"content","content",15833224),header.innerText,new cljs.core.Keyword(null,"id","id",-1388402092),header.id], null),net$coruscation$cerulean$common$pages$generate_toc_from_element_$_iter__71816(cljs.core.rest(s__71817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(headers);
})());
});
net.coruscation.cerulean.common.pages.toc_mobile = (function net$coruscation$cerulean$common$pages$toc_mobile(props__39433__auto__){
var props71876 = uix.core.glue_args(props__39433__auto__);
var map__71877 = props71876;
var map__71877__$1 = cljs.core.__destructure_map(map__71877);
var toc_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71877__$1,new cljs.core.Keyword(null,"toc-content","toc-content",-200693439));
var current_header_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71877__$1,new cljs.core.Keyword(null,"current-header-id","current-header-id",-413814486));
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props71876);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___72087 = net.coruscation.cerulean.common.pages.toc_mobile.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___72087)){
var f__39348__auto___72089 = temp__5823__auto___72087;
(f__39348__auto___72089.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___72089.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___72089.call(null));
} else {
}
} else {
}

var toc_item_active_classes = "text-[#0260B3]";
var toc_header_ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var toc_mobile_control = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var toc_mobile_content = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var toc_mobile_label = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var vec__71878 = uix.core.use_state(false);
var toc_stuck_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71878,(0),null);
var set_toc_stuck_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71878,(1),null);
var current_header_index = (cljs.core.truth_((function (){var and__5139__auto__ = current_header_id;
if(cljs.core.truth_(and__5139__auto__)){
return toc_content;
} else {
return and__5139__auto__;
}
})())?net.coruscation.cerulean.common.commons.index_by((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_header_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
}),toc_content):null);
var escape_string = (function (s){
return (""+"\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.replace(s,"\\","\\\\"),"\"","\\\""))+"\"");
});
var vec__71881 = uix.core.use_state(false);
var toc_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71881,(0),null);
var set_toc_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71881,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var callback = (function (p__71889){
var vec__71890 = p__71889;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71890,(0),null);
var G__71893 = cljs.core.not(e.isIntersecting);
return (set_toc_stuck_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_toc_stuck_BANG_.cljs$core$IFn$_invoke$arity$1(G__71893) : set_toc_stuck_BANG_.call(null,G__71893));
});
var observer = (new IntersectionObserver(callback,({"rootMargin": "-1px 0px 0px 0px", "threshold": [(1)]})));
if(cljs.core.truth_(cljs.core.deref(toc_header_ref))){
observer.observe(cljs.core.deref(toc_header_ref));
} else {
}

return (function (){
if(cljs.core.truth_(cljs.core.deref(toc_header_ref))){
return observer.unobserve(cljs.core.deref(toc_header_ref));
} else {
return null;
}
});
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(toc_stuck_QMARK_)){
net.coruscation.cerulean.utils.set_css_variable_BANG_("--toc-mobile-offset",(""+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * ((1) + current_header_index)))+"rem"));
} else {
}

return (function (){
return net.coruscation.cerulean.utils.set_css_variable_BANG_("--toc-mobile-offset","initial");
});
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_header_index,toc_stuck_QMARK_], null))]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(cljs.core.deref(toc_mobile_control))){
(cljs.core.deref(toc_mobile_control).checked = toc_open_QMARK_);
} else {
}

return (function (){
return null;
});
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [toc_open_QMARK_], null))]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var callback = (function (e){
if(cljs.core.truth_((function (){var and__5139__auto__ = toc_open_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
var and__5139__auto____$1 = cljs.core.deref(toc_mobile_content);
if(cljs.core.truth_(and__5139__auto____$1)){
var and__5139__auto____$2 = cljs.core.deref(toc_mobile_label);
if(cljs.core.truth_(and__5139__auto____$2)){
return ((cljs.core.not(cljs.core.deref(toc_mobile_label).contains(e.srcElement))) && (cljs.core.not(cljs.core.deref(toc_mobile_content).contains(e.srcElement))));
} else {
return and__5139__auto____$2;
}
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
})())){
return (set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_toc_open_BANG_.call(null,false));
} else {
return null;
}
});
addEventListener("click",callback);

return (function (){
return removeEventListener("click",callback);
});
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [toc_open_QMARK_], null))]);

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("div",[{'ref':uix.compiler.attributes.keyword__GT_string(toc_header_ref)}],[])],[uix.compiler.aot.create_uix_input("input",[{'className':"hidden",'type':"checkbox",'id':"toc-mobile-control",'ref':uix.compiler.attributes.keyword__GT_string(toc_mobile_control)}],[]),uix.compiler.aot._GT_el("label",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,(""+" toc-header cursor-pointer select-none block text-sky-700 border-1 pl-2 "+" flex justify-between items-center mt-3 bg-white sticky top-0 h-8 pr-1 "+" md:hidden ml-[1px] relative ")),'htmlFor':"toc-mobile-control",'onClick':(function (e){
e.preventDefault();

var G__71900 = cljs.core.not(toc_open_QMARK_);
return (set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__71900) : set_toc_open_BANG_.call(null,G__71900));
}),'ref':uix.compiler.attributes.keyword__GT_string(toc_mobile_label)}],[uix.compiler.aot._GT_el("div",[{'className':"relative h-full w-full overflow-hidden"}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("text-lg toc-header-text relative",(""+" w-full transition-all "))}],[uix.compiler.alpha.create_element_STAR_("div", ...[{'className':"h-8 w-96",'key':"TOC"}], ...["Table Of Content"]),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (toc_item){
return uix.compiler.aot._GT_el("div",[{'className':"h-8 w-96 overflow-hidden",'key':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(toc_item)}],[new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(toc_item)]);
}),toc_content)])]),uix.compiler.alpha.create_element_STAR_("span", ...[uix.compiler.attributes.convert_props(cljs.core.PersistentArrayMap.EMPTY,["span",null,"material-symbols-outlined checked:rotate-180 transition-all dropdown-icon",false],false),"keyboard_arrow_down"], ...[])]),uix.compiler.aot._GT_el("div",[{'className':"toc-mobile-wrapper2 h-1 sticky top-8"}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("grid toc-mobile-wrapper transition-all border-neutral-400 border-l-1 bg-white","md:hidden ml-[1px] ")}],[uix.compiler.aot._GT_el("ul",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("toc-mobile-content","text-[1.05rem] 2xl:text-lg "),'ref':uix.compiler.attributes.keyword__GT_string(toc_mobile_content)}],[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71903){
var map__71906 = p__71903;
var map__71906__$1 = cljs.core.__destructure_map(map__71906);
var toc_item = map__71906__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71906__$1,new cljs.core.Keyword(null,"content","content",15833224));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71906__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71906__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return uix.compiler.aot._GT_el("li",[{'className':"my-1 list-inside text-neutral-600",'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.alpha.component_element(net.coruscation.cerulean.components.btn_wrapper,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("div",[{'className':"group w-full h-full"}],[uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("h-12 transition-all w-full h-full inline-block flex flex-col justify-center",(""+"group-hover:text-[#0260B3] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"pl-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((4) * level))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_header_id,id))?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(toc_item_active_classes)):"")))),'href':(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),'onClick':(function (_){
return (set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_toc_open_BANG_.call(null,false));
})}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(content,["span",null,null,false],false),[])])])])]);
}),toc_content)])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71907 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71908 = net.coruscation.cerulean.common.pages.toc_mobile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71908);

try{if(((cljs.core.map_QMARK_(props71876)) || ((props71876 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props71876)))+"\n"+"(clojure.core/or (clojure.core/map? props71876) (clojure.core/nil? props71876))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71907);
}} else {
return f__39434__auto__();
}
});

(net.coruscation.cerulean.common.pages.toc_mobile.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.common.pages.toc_mobile,"net.coruscation.cerulean.common.pages/toc-mobile");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___72101 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___72101.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___72101.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.common.pages.toc_mobile,"(use-ref nil)(use-ref nil)(use-ref nil)(use-ref nil)(use-state false)(use-state false)(use-effect (fn [] (let [callback (fn [[e]] (set-toc-stuck! (not (.-isIntersecting e)))) observer (js/IntersectionObserver. callback {:rootMargin \"-1px 0px 0px 0px\", :threshold [1]})] (if (clojure.core/deref toc-header-ref) (.observe observer (clojure.core/deref toc-header-ref))) (fn [] (if (clojure.core/deref toc-header-ref) (.unobserve observer (clojure.core/deref toc-header-ref)))))) [])(use-effect (fn [] (if toc-stuck? (utils/set-css-variable! \"--toc-mobile-offset\" (str \"-\" (* 2 (+ 1 current-header-index)) \"rem\"))) (fn [] (utils/set-css-variable! \"--toc-mobile-offset\" \"initial\"))) [current-header-index toc-stuck?])(use-effect (fn [] (if (clojure.core/deref toc-mobile-control) (set! (.-checked (clojure.core/deref toc-mobile-control)) toc-open?)) (fn [])) [toc-open?])(use-effect (fn [] (let [callback (fn [e] (if (and toc-open? (clojure.core/deref toc-mobile-content) (clojure.core/deref toc-mobile-label) (not (.contains (clojure.core/deref toc-mobile-label) (.-srcElement e))) (not (.contains (clojure.core/deref toc-mobile-content) (.-srcElement e)))) (set-toc-open! false)))] (js/addEventListener \"click\" callback) (fn [] (js/removeEventListener \"click\" callback)))) [toc-open?])",null,null) : sig__39357__auto___72101.call(null,net.coruscation.cerulean.common.pages.toc_mobile,"(use-ref nil)(use-ref nil)(use-ref nil)(use-ref nil)(use-state false)(use-state false)(use-effect (fn [] (let [callback (fn [[e]] (set-toc-stuck! (not (.-isIntersecting e)))) observer (js/IntersectionObserver. callback {:rootMargin \"-1px 0px 0px 0px\", :threshold [1]})] (if (clojure.core/deref toc-header-ref) (.observe observer (clojure.core/deref toc-header-ref))) (fn [] (if (clojure.core/deref toc-header-ref) (.unobserve observer (clojure.core/deref toc-header-ref)))))) [])(use-effect (fn [] (if toc-stuck? (utils/set-css-variable! \"--toc-mobile-offset\" (str \"-\" (* 2 (+ 1 current-header-index)) \"rem\"))) (fn [] (utils/set-css-variable! \"--toc-mobile-offset\" \"initial\"))) [current-header-index toc-stuck?])(use-effect (fn [] (if (clojure.core/deref toc-mobile-control) (set! (.-checked (clojure.core/deref toc-mobile-control)) toc-open?)) (fn [])) [toc-open?])(use-effect (fn [] (let [callback (fn [e] (if (and toc-open? (clojure.core/deref toc-mobile-content) (clojure.core/deref toc-mobile-label) (not (.contains (clojure.core/deref toc-mobile-label) (.-srcElement e))) (not (.contains (clojure.core/deref toc-mobile-content) (.-srcElement e)))) (set-toc-open! false)))] (js/addEventListener \"click\" callback) (fn [] (js/removeEventListener \"click\" callback)))) [toc-open?])",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.common.pages.toc_mobile,net.coruscation.cerulean.common.pages.toc_mobile.displayName);

(net.coruscation.cerulean.common.pages.toc_mobile.fast_refresh_signature = sig__39357__auto___72101);
} else {
}
} else {
}

net.coruscation.cerulean.common.pages.toc = (function net$coruscation$cerulean$common$pages$toc(props__39433__auto__){
var props71920 = uix.core.glue_args(props__39433__auto__);
var map__71921 = props71920;
var map__71921__$1 = cljs.core.__destructure_map(map__71921);
var toc_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71921__$1,new cljs.core.Keyword(null,"toc-content","toc-content",-200693439));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71921__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var current_header_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71921__$1,new cljs.core.Keyword(null,"current-header-id","current-header-id",-413814486));
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props71920);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___72104 = net.coruscation.cerulean.common.pages.toc.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___72104)){
var f__39348__auto___72105 = temp__5823__auto___72104;
(f__39348__auto___72105.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___72105.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___72105.call(null));
} else {
}
} else {
}

var toc_item_active_classes = "text-[#0260B3]";
return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("border-neutral-400 border-l-2",(""+"text-[1.05rem] 2xl:text-lg "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)))}],[uix.compiler.aot._GT_el("ul",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71924){
var map__71925 = p__71924;
var map__71925__$1 = cljs.core.__destructure_map(map__71925);
var toc_item = map__71925__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71925__$1,new cljs.core.Keyword(null,"content","content",15833224));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71925__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71925__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return uix.compiler.aot._GT_el("li",[{'className':"my-1 list-inside text-neutral-600",'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.alpha.component_element(net.coruscation.cerulean.components.btn_wrapper,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("div",[{'className':"group w-full h-full"}],[uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("h-12 transition-all w-full h-full inline-block flex flex-col justify-center",(""+"group-hover:text-[#0260B3] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"pl-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((4) * level))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_header_id,id))?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(toc_item_active_classes)):"")))),'href':(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(content,["span",null,null,false],false),[])])])])]);
}),toc_content),["ul",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71928 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71929 = net.coruscation.cerulean.common.pages.toc;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71929);

try{if(((cljs.core.map_QMARK_(props71920)) || ((props71920 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props71920)))+"\n"+"(clojure.core/or (clojure.core/map? props71920) (clojure.core/nil? props71920))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71928);
}} else {
return f__39434__auto__();
}
});

(net.coruscation.cerulean.common.pages.toc.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.common.pages.toc,"net.coruscation.cerulean.common.pages/toc");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___72110 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___72110.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___72110.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.common.pages.toc,"",null,null) : sig__39357__auto___72110.call(null,net.coruscation.cerulean.common.pages.toc,"",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.common.pages.toc,net.coruscation.cerulean.common.pages.toc.displayName);

(net.coruscation.cerulean.common.pages.toc.fast_refresh_signature = sig__39357__auto___72110);
} else {
}
} else {
}

net.coruscation.cerulean.common.pages.blog = (function net$coruscation$cerulean$common$pages$blog(props__39433__auto__){
var props71941 = uix.core.glue_args(props__39433__auto__);
var map__71942 = props71941;
var map__71942__$1 = cljs.core.__destructure_map(map__71942);
var data = map__71942__$1;
var map__71943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71942__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var map__71943__$1 = cljs.core.__destructure_map(map__71943);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71943__$1,new cljs.core.Keyword("blog","id","blog/id",-1385637198));
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props71941);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___72113 = net.coruscation.cerulean.common.pages.blog.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___72113)){
var f__39348__auto___72114 = temp__5823__auto___72113;
(f__39348__auto___72114.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___72114.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___72114.call(null));
} else {
}
} else {
}

var map__71944 = net.coruscation.cerulean.utils.use_asset((""+"blog/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
var map__71944__$1 = cljs.core.__destructure_map(map__71944);
var blog_asset = map__71944__$1;
var modified_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","modified-date","blog/modified-date",-216271460));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","category","blog/category",-596578574));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","description","blog/description",-1430014670));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","tags","blog/tags",1766286535));
var orgx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","orgx","blog/orgx",-1430261758));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","content","blog/content",12798170));
var published_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","published-date","blog/published-date",1156678198));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","title","blog/title",629301577));
var show_toc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71944__$1,new cljs.core.Keyword("blog","show-toc?","blog/show-toc?",-1011924183));
var orgx_comp = net.coruscation.cerulean.utils.use_orgx(id,orgx__$1);
var toc_content = uix.hooks.alpha.use_memo((function (){
if(cljs.core.truth_(show_toc_QMARK_)){
var dummy = document.createElement("html");
(dummy.innerHTML = content);

return net.coruscation.cerulean.common.pages.generate_toc_from_element(dummy);
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,show_toc_QMARK_], null))]);
var doc_ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var vec__71945 = uix.core.use_state(null);
var current_header_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71945,(0),null);
var set_current_header_id_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71945,(1),null);
net.coruscation.cerulean.utils.set_title_BANG_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)+" | "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.title)));

net.coruscation.cerulean.utils.set_description_BANG_(description);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var scroll_event = (function (_){
var headers = cljs.core.deref(doc_ref).querySelectorAll("h1,h2,h3,h4,h5");
var current_header = (function (){var or__5141__auto__ = (function (){var G__71954 = headers;
var G__71954__$1 = (((G__71954 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (header){
return (header.getBoundingClientRect().top < (2));
}),G__71954));
if((G__71954__$1 == null)){
return null;
} else {
return cljs.core.last(G__71954__$1);
}
})();
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.first(headers);
}
})();
if(cljs.core.truth_(current_header)){
var G__71955 = current_header.id;
return (set_current_header_id_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_header_id_BANG_.cljs$core$IFn$_invoke$arity$1(G__71955) : set_current_header_id_BANG_.call(null,G__71955));
} else {
return null;
}
});
addEventListener("scroll",scroll_event);

return (function (){
return removeEventListener("scroll",scroll_event);
});
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

if(cljs.core.seq(blog_asset)){
return uix.compiler.aot._GT_el("div",[{'className':"px-4 relative"}],[uix.compiler.aot._GT_el("div",[null],[uix.compiler.aot._GT_el("h1",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("font-medium text-neutral-700 leading-tight","text-2xl sm:text-[2rem]")}],[title]),uix.compiler.alpha.create_element_STAR_("hr", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("border-t-1 border-slate-500 w-full","my-3")}], ...[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("text-base grid items-center text-gray-700","pl-[1px] grid-cols-[7rem_1fr]")}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(category)),["div",null,"text-sky-700 border-l-2 pl-2 text-lg",false],false),[]),uix.compiler.aot._GT_el("span",[{'className':"flex items-center gap-4"}],[uix.compiler.aot._GT_el("span",[{'className':"flex items-center gap-2"}],[uix.compiler.alpha.create_element_STAR_("span", ...[uix.compiler.attributes.convert_props(cljs.core.PersistentArrayMap.EMPTY,["span",null,"text-gray-600",false],false),"Pub."], ...[]),uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(net.coruscation.cerulean.common.pages.date_time_to_readable_string(net.coruscation.cerulean.common.commons.parse_iso8601(published_date)),["span",null,"text-base text-gray-700",false],false),[])]),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(published_date,modified_date))))?uix.compiler.aot._GT_el("span",[{'className':"flex items-center gap-2"}],[uix.compiler.alpha.create_element_STAR_("span", ...[uix.compiler.attributes.convert_props(cljs.core.PersistentArrayMap.EMPTY,["span",null,"text-gray-600",false],false),"Upd."], ...[]),uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(net.coruscation.cerulean.common.pages.date_time_to_readable_string(net.coruscation.cerulean.common.commons.parse_iso8601(modified_date)),["span",null,"text-base text-gray-700",false],false),[])]):null)])])]),(cljs.core.truth_(show_toc_QMARK_)?uix.compiler.alpha.component_element(net.coruscation.cerulean.common.pages.toc_mobile,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"",new cljs.core.Keyword(null,"toc-content","toc-content",-200693439),toc_content,new cljs.core.Keyword(null,"current-header-id","current-header-id",-413814486),current_header_id], null)],[]):null),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("gap-8 w-full h-full",(""+"md:grid md:grid-cols-[minmax(0px,7fr)_minmax(17rem,17rem)] "+"2xl:grid-cols-[minmax(0px,7fr)_minmax(20rem,20rem)]"))}],[((cljs.core.not(orgx__$1))?uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("cr-document","md:mt-1"),'ref':uix.compiler.attributes.keyword__GT_string(doc_ref),'dangerouslySetInnerHTML':{'__html':content}}],[]):(cljs.core.truth_(orgx_comp)?uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("cr-document","md:mt-1"),'ref':uix.compiler.attributes.keyword__GT_string(doc_ref)}],[uix.compiler.alpha.component_element(orgx_comp,[null],[])]):null)),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((cljs.core.truth_(show_toc_QMARK_)?uix.compiler.alpha.component_element(net.coruscation.cerulean.common.pages.toc,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-78 fixed right-0 top-[13.5rem] z-200 max-h-[80vh] "+"overflow-y-auto select-none hidden md:block xl:top-36  "+"2xl:w-96"),new cljs.core.Keyword(null,"toc-content","toc-content",-200693439),toc_content,new cljs.core.Keyword(null,"current-header-id","current-header-id",-413814486),current_header_id], null)],[]):null),["div",null,"mt-4",false],false),[])])]);
} else {
return null;
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71956 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71957 = net.coruscation.cerulean.common.pages.blog;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71957);

try{if(((cljs.core.map_QMARK_(props71941)) || ((props71941 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props71941)))+"\n"+"(clojure.core/or (clojure.core/map? props71941) (clojure.core/nil? props71941))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71956);
}} else {
return f__39434__auto__();
}
});

(net.coruscation.cerulean.common.pages.blog.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.common.pages.blog,"net.coruscation.cerulean.common.pages/blog");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___72129 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___72129.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___72129.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.common.pages.blog,"(use-asset (str \"blog/\" id))(use-orgx id orgx)(use-memo (fn [] (if show-toc? (let [dummy (.createElement js/document \"html\")] (set! (.-innerHTML dummy) content) (generate-toc-from-element dummy)) nil)) [content show-toc?])(use-ref nil)(use-state nil)(use-effect (fn [] (let [scroll-event (fn [_] (let [headers (.querySelectorAll (clojure.core/deref doc-ref) \"h1,h2,h3,h4,h5\") current-header (or (some->> headers (take-while (fn [header] (< (.-top (.getBoundingClientRect header)) 2))) last) (first headers))] (when current-header (set-current-header-id! (.-id current-header)))))] (js/addEventListener \"scroll\" scroll-event) (fn [] (js/removeEventListener \"scroll\" scroll-event)))) [])",null,null) : sig__39357__auto___72129.call(null,net.coruscation.cerulean.common.pages.blog,"(use-asset (str \"blog/\" id))(use-orgx id orgx)(use-memo (fn [] (if show-toc? (let [dummy (.createElement js/document \"html\")] (set! (.-innerHTML dummy) content) (generate-toc-from-element dummy)) nil)) [content show-toc?])(use-ref nil)(use-state nil)(use-effect (fn [] (let [scroll-event (fn [_] (let [headers (.querySelectorAll (clojure.core/deref doc-ref) \"h1,h2,h3,h4,h5\") current-header (or (some->> headers (take-while (fn [header] (< (.-top (.getBoundingClientRect header)) 2))) last) (first headers))] (when current-header (set-current-header-id! (.-id current-header)))))] (js/addEventListener \"scroll\" scroll-event) (fn [] (js/removeEventListener \"scroll\" scroll-event)))) [])",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.common.pages.blog,net.coruscation.cerulean.common.pages.blog.displayName);

(net.coruscation.cerulean.common.pages.blog.fast_refresh_signature = sig__39357__auto___72129);
} else {
}
} else {
}

net.coruscation.cerulean.common.pages.blog_item = (function net$coruscation$cerulean$common$pages$blog_item(props__39433__auto__){
var props71960 = uix.core.glue_args(props__39433__auto__);
var map__71961 = props71960;
var map__71961__$1 = cljs.core.__destructure_map(map__71961);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71961__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var onclick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71961__$1,new cljs.core.Keyword(null,"onclick","onclick",1297553739));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71961__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props71960);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___72131 = net.coruscation.cerulean.common.pages.blog_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___72131)){
var f__39348__auto___72132 = temp__5823__auto___72131;
(f__39348__auto___72132.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___72132.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___72132.call(null));
} else {
}
} else {
}

var map__71962 = preview;
var map__71962__$1 = cljs.core.__destructure_map(map__71962);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71962__$1,new cljs.core.Keyword("blog","title","blog/title",629301577));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71962__$1,new cljs.core.Keyword("blog","id","blog/id",-1385637198));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71962__$1,new cljs.core.Keyword("blog","tags","blog/tags",1766286535));
var published_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71962__$1,new cljs.core.Keyword("blog","published-date","blog/published-date",1156678198));
var modified_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71962__$1,new cljs.core.Keyword("blog","modified-date","blog/modified-date",-216271460));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71962__$1,new cljs.core.Keyword("blog","author","blog/author",2110519182));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71962__$1,new cljs.core.Keyword("blog","category","blog/category",-596578574));
return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("blog-item",class$)}],[uix.compiler.aot._GT_el("div",[{'className':"relative group"}],[uix.compiler.aot._GT_el("div",[null],[uix.compiler.aot._GT_el("div",[null],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(net.coruscation.cerulean.common.pages.date_time_to_readable_string(net.coruscation.cerulean.common.commons.parse_iso8601(published_date)),["span",null,"text-lg text-slate-600",false],false),[]),uix.compiler.alpha.create_element_STAR_("span", ...[null," / "], ...[]),uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(category,["span",null,"text-lg text-slate-600",false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"")}],[uix.compiler.alpha.component_element(net.coruscation.cerulean.router.link,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"blogs/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".html"),new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl text-sky-950 hover:text-[#0260B3] transition-all duration-300"], null)],[uix.compiler.aot._GT_el("h1",uix.compiler.attributes.interpret_attrs(title,["h1",null,null,false],false),[])])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71963 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71964 = net.coruscation.cerulean.common.pages.blog_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71964);

try{if(((cljs.core.map_QMARK_(props71960)) || ((props71960 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props71960)))+"\n"+"(clojure.core/or (clojure.core/map? props71960) (clojure.core/nil? props71960))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71963);
}} else {
return f__39434__auto__();
}
});

(net.coruscation.cerulean.common.pages.blog_item.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.common.pages.blog_item,"net.coruscation.cerulean.common.pages/blog-item");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___72133 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___72133.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___72133.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.common.pages.blog_item,"",null,null) : sig__39357__auto___72133.call(null,net.coruscation.cerulean.common.pages.blog_item,"",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.common.pages.blog_item,net.coruscation.cerulean.common.pages.blog_item.displayName);

(net.coruscation.cerulean.common.pages.blog_item.fast_refresh_signature = sig__39357__auto___72133);
} else {
}
} else {
}

net.coruscation.cerulean.common.pages.home = (function net$coruscation$cerulean$common$pages$home(props__39433__auto__){
var props71974 = uix.core.glue_args(props__39433__auto__);
var _ = props71974;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props71974);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___72134 = net.coruscation.cerulean.common.pages.home.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___72134)){
var f__39348__auto___72135 = temp__5823__auto___72134;
(f__39348__auto___72135.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___72135.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___72135.call(null));
} else {
}
} else {
}

var blogs = net.coruscation.cerulean.utils.use_asset("blogs");
var landscape_ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var scroll_listener = (function (___$1){
var map__71976 = net.coruscation.cerulean.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(landscape_ref).getBoundingClientRect(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__71976__$1 = cljs.core.__destructure_map(map__71976);
var rect = map__71976__$1;
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71976__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
return null;
});
addEventListener("scroll",scroll_listener);

return (function (){
return removeEventListener("scroll",scroll_listener);
});
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

net.coruscation.cerulean.utils.set_title_BANG_((""+"HOME | "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.title)));

net.coruscation.cerulean.utils.set_description_BANG_("");

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("flex flex-col justify-center items-center","xl:w-[1100px]")}],[uix.compiler.aot._GT_el("div",[{'className':"w-full"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (blog){
return uix.compiler.aot._GT_el("div",[{'className':"w-full",'key':new cljs.core.Keyword("blog","id","blog/id",-1385637198).cljs$core$IFn$_invoke$arity$1(blog)}],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.pages.blog_item,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"preview","preview",451279890),blog,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("blog","id","blog/id",-1385637198).cljs$core$IFn$_invoke$arity$1(blog),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null)],[]),uix.compiler.alpha.create_element_STAR_("hr", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"mt-2 border-gray-500")}], ...[])]);
}),blogs),["div",null,"flex justify-center flex-col gap-6 bg-opacity-100 w-full",false],false),[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71977 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71978 = net.coruscation.cerulean.common.pages.home;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71978);

try{if(((cljs.core.map_QMARK_(props71974)) || ((props71974 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props71974)))+"\n"+"(clojure.core/or (clojure.core/map? props71974) (clojure.core/nil? props71974))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71977);
}} else {
return f__39434__auto__();
}
});

(net.coruscation.cerulean.common.pages.home.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.common.pages.home,"net.coruscation.cerulean.common.pages/home");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___72140 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___72140.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___72140.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.common.pages.home,"(use-asset \"blogs\")(use-ref nil)(use-effect (fn [] (let [scroll-listener (fn [_] (let [{:keys [bottom], :as rect} (obj->clj (.getBoundingClientRect (clojure.core/deref landscape-ref)) :keywordize-keys true)]))] (js/addEventListener \"scroll\" scroll-listener) (fn [] (js/removeEventListener \"scroll\" scroll-listener)))) [])",null,null) : sig__39357__auto___72140.call(null,net.coruscation.cerulean.common.pages.home,"(use-asset \"blogs\")(use-ref nil)(use-effect (fn [] (let [scroll-listener (fn [_] (let [{:keys [bottom], :as rect} (obj->clj (.getBoundingClientRect (clojure.core/deref landscape-ref)) :keywordize-keys true)]))] (js/addEventListener \"scroll\" scroll-listener) (fn [] (js/removeEventListener \"scroll\" scroll-listener)))) [])",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.common.pages.home,net.coruscation.cerulean.common.pages.home.displayName);

(net.coruscation.cerulean.common.pages.home.fast_refresh_signature = sig__39357__auto___72140);
} else {
}
} else {
}

net.coruscation.cerulean.common.pages.header = (function net$coruscation$cerulean$common$pages$header(){
var f__39424__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___72144 = net.coruscation.cerulean.common.pages.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___72144)){
var f__39348__auto___72145 = temp__5823__auto___72144;
(f__39348__auto___72145.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___72145.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___72145.call(null));
} else {
}
} else {
}

var map__72013 = uix.core.use_context(net.coruscation.cerulean.router._STAR_router_STAR_);
var map__72013__$1 = cljs.core.__destructure_map(map__72013);
var ctx = map__72013__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72013__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var home_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,net.coruscation.cerulean.common.pages.home);
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("bg-opacity-100 px-4 relative",(""+"bg-[#0260B3] sm:flex sm:justify-between block gap-4 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((home_page_QMARK_)?"md:grid md:grid-cols-[2fr_3fr] md:h-dvh md:fixed md:w-[20rem]":"xl:grid xl:grid-cols-[2fr_3fr] xl:h-dvh xl:fixed xl:w-[20rem]"))))}],[uix.compiler.alpha.component_element(net.coruscation.cerulean.router.link,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center block"], null)],[uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("text-3xl text-cyan-50 pt-4",(""+"sm:py-6 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((home_page_QMARK_)?"md:sideways-lr md:text-6xl md:pb-8":"xl:sideways-lr xl:text-6xl xl:pb-8"))))}],[net.coruscation.cerulean.user_config.title])]),uix.compiler.aot._GT_el("div",[{'className':"flex justify-center"}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("flex flex-col items-center justify-end py-1 relative",(""+"left-[0.275rem] sm:items-end "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((home_page_QMARK_)?"md:justify-between":"xl:justify-between"))))}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("navigator-bar gap-3 text-base text-slate-50 opacity-80 flex px-5 my-2",((home_page_QMARK_)?"md:text-2xl md:flex-col md:pt-6":"xl:text-2xl xl:flex-col xl:pt-6"))}],[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72016){
var vec__72017 = p__72016;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72017,(0),null);
var map__72020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72017,(1),null);
var map__72020__$1 = cljs.core.__destructure_map(map__72020);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72020__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72020__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return uix.compiler.alpha.component_element(net.coruscation.cerulean.components.btn_wrapper,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"bg-class","bg-class",-817462195),"group-hover:bg-yellow-400"], null)],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("px-1 group-hover:text-cyan-50","text-lg"),'key':uix.compiler.attributes.keyword__GT_string(href)}],[uix.compiler.alpha.component_element(net.coruscation.cerulean.router.link,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null)],[text])])]);
}),net.coruscation.cerulean.user_config.navigation)]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("justify-center w-full mb-8 relative hidden",((home_page_QMARK_)?"md:flex":"xl:flex"))}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72021){
var vec__72022 = p__72021;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72022,(0),null);
var map__72025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72022,(1),null);
var map__72025__$1 = cljs.core.__destructure_map(map__72025);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72025__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var external_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72025__$1,new cljs.core.Keyword(null,"external?","external?",579765478));
return uix.compiler.alpha.component_element(net.coruscation.cerulean.router.link,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"external?","external?",579765478),external_QMARK_], null)],[uix.compiler.alpha.component_element((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.common.pages.icons) : key.call(null,net.coruscation.cerulean.common.pages.icons)),[null],[])]);
}),net.coruscation.cerulean.user_config.links),["div",null,"flex relative",false],false),[])])])])])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__72026 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__72027 = net.coruscation.cerulean.common.pages.header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__72027);

try{return f__39424__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__72026);
}} else {
return f__39424__auto__();
}
});

(net.coruscation.cerulean.common.pages.header.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.common.pages.header,"net.coruscation.cerulean.common.pages/header");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___72153 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___72153.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___72153.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.common.pages.header,"(use-context router/*router*)",null,null) : sig__39357__auto___72153.call(null,net.coruscation.cerulean.common.pages.header,"(use-context router/*router*)",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.common.pages.header,net.coruscation.cerulean.common.pages.header.displayName);

(net.coruscation.cerulean.common.pages.header.fast_refresh_signature = sig__39357__auto___72153);
} else {
}
} else {
}

net.coruscation.cerulean.common.pages.routes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.identity,new cljs.core.Keyword(null,"start","start",-355208981),(function (_){
return null;
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (_){
return null;
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/index.html",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),net.coruscation.cerulean.common.pages.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/home.html",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),net.coruscation.cerulean.common.pages.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),net.coruscation.cerulean.common.pages.home,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.identity,new cljs.core.Keyword(null,"start","start",-355208981),(function (p__72030){
var map__72031 = p__72030;
var map__72031__$1 = cljs.core.__destructure_map(map__72031);
var map__72032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72031__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__72032__$1 = cljs.core.__destructure_map(map__72032);
var data = map__72032__$1;
var routing_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72032__$1,new cljs.core.Keyword(null,"routing-state","routing-state",1886805218));
var set_routing_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72032__$1,new cljs.core.Keyword(null,"set-routing-state!","set-routing-state!",1954874108));
var G__72033 = cljs.core.assoc_in(routing_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home-page?","home-page?",-1002831724)], null),true);
return (set_routing_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_routing_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72033) : set_routing_state_BANG_.call(null,G__72033));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (p__72035){
var map__72038 = p__72035;
var map__72038__$1 = cljs.core.__destructure_map(map__72038);
var map__72039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72038__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__72039__$1 = cljs.core.__destructure_map(map__72039);
var routing_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72039__$1,new cljs.core.Keyword(null,"routing-state","routing-state",1886805218));
var set_routing_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72039__$1,new cljs.core.Keyword(null,"set-routing-state!","set-routing-state!",1954874108));
var G__72040 = cljs.core.assoc_in(routing_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home-page?","home-page?",-1002831724)], null),false);
return (set_routing_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_routing_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72040) : set_routing_state_BANG_.call(null,G__72040));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/blogs/{blog/id}.html",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),net.coruscation.cerulean.common.pages.blog,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("net.coruscation.cerulean.common.pages","blog","net.coruscation.cerulean.common.pages/blog",2044988679),new cljs.core.Keyword(null,"depends","depends",-1216840417),null], null)], null)], null);
net.coruscation.cerulean.common.pages.main = (function net$coruscation$cerulean$common$pages$main(props__39433__auto__){
var props72045 = uix.core.glue_args(props__39433__auto__);
var _ = props72045;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props72045);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___72162 = net.coruscation.cerulean.common.pages.main.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___72162)){
var f__39348__auto___72163 = temp__5823__auto___72162;
(f__39348__auto___72163.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___72163.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___72163.call(null));
} else {
}
} else {
}

var map__72049 = uix.core.use_context(net.coruscation.cerulean.router._STAR_router_STAR_);
var map__72049__$1 = cljs.core.__destructure_map(map__72049);
var ctx = map__72049__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72049__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var home_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,net.coruscation.cerulean.common.pages.home);
return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("app h-dvh w-full",((home_page_QMARK_)?"md:grid md:grid-cols-[20rem_9fr]":"xl:grid xl:grid-cols-[20rem_9fr]"))}],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("div",[{'className':"transition-all"}],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.pages.header,[null],[])])],[uix.compiler.aot._GT_el("main",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("pt-5 px-2","sm:px-4 xl:pt-7 xl:px-8")}],[uix.compiler.alpha.component_element(net.coruscation.cerulean.router.router_outlet,[null],[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__72058 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__72059 = net.coruscation.cerulean.common.pages.main;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__72059);

try{if(((cljs.core.map_QMARK_(props72045)) || ((props72045 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props72045)))+"\n"+"(clojure.core/or (clojure.core/map? props72045) (clojure.core/nil? props72045))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__72058);
}} else {
return f__39434__auto__();
}
});

(net.coruscation.cerulean.common.pages.main.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.common.pages.main,"net.coruscation.cerulean.common.pages/main");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___72164 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___72164.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___72164.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.common.pages.main,"(use-context router/*router*)",null,null) : sig__39357__auto___72164.call(null,net.coruscation.cerulean.common.pages.main,"(use-context router/*router*)",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.common.pages.main,net.coruscation.cerulean.common.pages.main.displayName);

(net.coruscation.cerulean.common.pages.main.fast_refresh_signature = sig__39357__auto___72164);
} else {
}
} else {
}

net.coruscation.cerulean.common.pages.app = (function net$coruscation$cerulean$common$pages$app(props__39433__auto__){
var props72069 = uix.core.glue_args(props__39433__auto__);
var map__72070 = props72069;
var map__72070__$1 = cljs.core.__destructure_map(map__72070);
var initial_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72070__$1,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808));
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props72069);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___72165 = net.coruscation.cerulean.common.pages.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___72165)){
var f__39348__auto___72166 = temp__5823__auto___72165;
(f__39348__auto___72166.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___72166.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___72166.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(net.coruscation.cerulean.router.router,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),net.coruscation.cerulean.common.pages.routes,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),initial_route], null)],[uix.compiler.alpha.component_element(net.coruscation.cerulean.common.pages.main,[cljs.core.PersistentArrayMap.EMPTY],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__72071 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__72072 = net.coruscation.cerulean.common.pages.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__72072);

try{if(((cljs.core.map_QMARK_(props72069)) || ((props72069 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props72069)))+"\n"+"(clojure.core/or (clojure.core/map? props72069) (clojure.core/nil? props72069))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__72071);
}} else {
return f__39434__auto__();
}
});

(net.coruscation.cerulean.common.pages.app.uix_component_QMARK_ = true);

uix.core.set_display_name(net.coruscation.cerulean.common.pages.app,"net.coruscation.cerulean.common.pages/app");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___72167 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___72167.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___72167.cljs$core$IFn$_invoke$arity$4(net.coruscation.cerulean.common.pages.app,"",null,null) : sig__39357__auto___72167.call(null,net.coruscation.cerulean.common.pages.app,"",null,null));

globalThis.uix.dev.register_BANG_(net.coruscation.cerulean.common.pages.app,net.coruscation.cerulean.common.pages.app.displayName);

(net.coruscation.cerulean.common.pages.app.fast_refresh_signature = sig__39357__auto___72167);
} else {
}
} else {
}


//# sourceMappingURL=net.coruscation.cerulean.common.pages.js.map
