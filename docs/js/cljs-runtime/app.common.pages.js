goog.provide('app.common.pages');
var module$node_modules$$js_joda$locale_en_us$dist$index=shadow.js.require("module$node_modules$$js_joda$locale_en_us$dist$index", {});
app.common.pages.date_time_to_readable_string = (function app$common$pages$date_time_to_readable_string(zoned_date_time){
return zoned_date_time.format(cljc.java_time.format.date_time_formatter.with_locale(cljc.java_time.format.date_time_formatter.of_pattern.cljs$core$IFn$_invoke$arity$1("LLL dd, yyyy"),module$node_modules$$js_joda$locale_en_us$dist$index.Locale.US));
});
app.common.pages.icons = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"github","github",567794498),uix_fontawesome.brands._github,new cljs.core.Keyword(null,"hackernews","hackernews",-1486194573),uix_fontawesome.brands._square_hacker_news,new cljs.core.Keyword(null,"linkedin","linkedin",-1733650847),uix_fontawesome.brands._linkedin,new cljs.core.Keyword(null,"rss","rss",-1401556502),uix_fontawesome.solid._square_rss,new cljs.core.Keyword(null,"reddit","reddit",-1323650081),uix_fontawesome.brands._reddit], null);
app.common.pages.header_to_level = (function app$common$pages$header_to_level(tag){
var G__63582 = tag;
var G__63582__$1 = (((G__63582 instanceof cljs.core.Keyword))?G__63582.fqn:null);
switch (G__63582__$1) {
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," isn't suported"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
});
app.common.pages.generate_toc_from_element = (function app$common$pages$generate_toc_from_element(element){
var headers = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(element.querySelectorAll("h2,h3,h4,h5"));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5503__auto__ = (function app$common$pages$generate_toc_from_element_$_iter__63583(s__63584){
return (new cljs.core.LazySeq(null,(function (){
var s__63584__$1 = s__63584;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__63584__$1);
if(temp__5823__auto__){
var s__63584__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63584__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__63584__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__63586 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__63585 = (0);
while(true){
if((i__63585 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__63585);
cljs.core.chunk_append(b__63586,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),app.common.pages.header_to_level(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(header.tagName))),new cljs.core.Keyword(null,"content","content",15833224),header.innerText,new cljs.core.Keyword(null,"id","id",-1388402092),header.id], null));

var G__63769 = (i__63585 + (1));
i__63585 = G__63769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63586),app$common$pages$generate_toc_from_element_$_iter__63583(cljs.core.chunk_rest(s__63584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63586),null);
}
} else {
var header = cljs.core.first(s__63584__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),app.common.pages.header_to_level(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(header.tagName))),new cljs.core.Keyword(null,"content","content",15833224),header.innerText,new cljs.core.Keyword(null,"id","id",-1388402092),header.id], null),app$common$pages$generate_toc_from_element_$_iter__63583(cljs.core.rest(s__63584__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})());
});
app.common.pages.toc_mobile = (function app$common$pages$toc_mobile(props__31932__auto__){
var props63615 = uix.core.glue_args(props__31932__auto__);
var vec__63616 = [props63615];
var map__63619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63616,(0),null);
var map__63619__$1 = cljs.core.__destructure_map(map__63619);
var toc_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63619__$1,new cljs.core.Keyword(null,"toc-content","toc-content",-200693439));
var current_header_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63619__$1,new cljs.core.Keyword(null,"current-header-id","current-header-id",-413814486));
var ___31931__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props63615);
var f__31933__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___63770 = app.common.pages.toc_mobile.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63770)){
var f__31844__auto___63771 = temp__5823__auto___63770;
(f__31844__auto___63771.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63771.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63771.call(null));
} else {
}
} else {
}

var toc_item_active_classes = "text-[#0260B3]";
var toc_header_ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var toc_mobile_control = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var toc_mobile_content = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var toc_mobile_label = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var vec__63620 = uix.core.use_state(false);
var toc_stuck_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63620,(0),null);
var set_toc_stuck_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63620,(1),null);
var current_header_index = (cljs.core.truth_((function (){var and__5023__auto__ = current_header_id;
if(cljs.core.truth_(and__5023__auto__)){
return toc_content;
} else {
return and__5023__auto__;
}
})())?app.common.commons.index_by((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_header_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
}),toc_content):null);
var escape_string = (function (s){
return ["\"",clojure.string.replace(clojure.string.replace(s,"\\","\\\\"),"\"","\\\""),"\""].join('');
});
var vec__63623 = uix.core.use_state(false);
var toc_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63623,(0),null);
var set_toc_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63623,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var callback = (function (p__63631){
var vec__63632 = p__63631;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63632,(0),null);
var G__63635 = cljs.core.not(e.isIntersecting);
return (set_toc_stuck_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_toc_stuck_BANG_.cljs$core$IFn$_invoke$arity$1(G__63635) : set_toc_stuck_BANG_.call(null,G__63635));
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
app.utils.set_css_variable_BANG_("--toc-mobile-offset",["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * ((1) + current_header_index))),"rem"].join(''));
} else {
}

return (function (){
return app.utils.set_css_variable_BANG_("--toc-mobile-offset","initial");
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
if(cljs.core.truth_((function (){var and__5023__auto__ = toc_open_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.deref(toc_mobile_content);
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = cljs.core.deref(toc_mobile_label);
if(cljs.core.truth_(and__5023__auto____$2)){
return ((cljs.core.not(cljs.core.deref(toc_mobile_label).contains(e.srcElement))) && (cljs.core.not(cljs.core.deref(toc_mobile_content).contains(e.srcElement))));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
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

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.aot._GT_el("div",[{'ref':uix.compiler.attributes.keyword__GT_string(toc_header_ref)}],[]),[],false),[uix.compiler.aot.create_uix_input("input",[{'className':"hidden",'type':"checkbox",'id':"toc-mobile-control",'ref':uix.compiler.attributes.keyword__GT_string(toc_mobile_control)}],[]),uix.compiler.aot._GT_el("label",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,[" toc-header cursor-pointer select-none block text-sky-700 border-1 pl-2 "," flex justify-between items-center mt-3 bg-white sticky top-0 h-8 pr-1 "," md:hidden ml-[1px] relative "].join('')),'htmlFor':"toc-mobile-control",'onClick':(function (e){
e.preventDefault();

var G__63636 = cljs.core.not(toc_open_QMARK_);
return (set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__63636) : set_toc_open_BANG_.call(null,G__63636));
}),'ref':uix.compiler.attributes.keyword__GT_string(toc_mobile_label)}],[uix.compiler.aot._GT_el("div",[{'className':"relative h-full w-full overflow-hidden"}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("text-lg toc-header-text relative"," w-full transition-all ")}],[uix.compiler.aot._GT_el("div",[{'className':"h-8 w-96",'key':"TOC"}],["Table Of Content"]),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (toc_item){
return uix.compiler.aot._GT_el("div",[{'className':"h-8 w-96",'key':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(toc_item)}],[new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(toc_item)]);
}),toc_content)])]),uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("keyboard_arrow_down",["span",null,"material-symbols-outlined checked:rotate-180 transition-all dropdown-icon",false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':"toc-mobile-wrapper2 h-1 sticky top-8"}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("grid toc-mobile-wrapper transition-all border-neutral-400 border-l-1 bg-white","md:hidden ml-[1px] ")}],[uix.compiler.aot._GT_el("ul",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("toc-mobile-content","text-[1.05rem] 2xl:text-lg "),'ref':uix.compiler.attributes.keyword__GT_string(toc_mobile_content)}],[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63637){
var map__63638 = p__63637;
var map__63638__$1 = cljs.core.__destructure_map(map__63638);
var toc_item = map__63638__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"content","content",15833224));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return uix.compiler.aot._GT_el("li",[{'className':"my-1 list-inside text-neutral-600",'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.alpha.component_element(app.components.btn_wrapper,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("div",[{'className':"group w-full h-full"}],[uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("h-12 transition-all w-full h-full inline-block flex flex-col justify-center",["group-hover:text-[#0260B3] ",["pl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((4) * level))].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_header_id,id))?[" ",toc_item_active_classes].join(''):"")].join('')),'href':["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),'onClick':(function (_){
return (set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_toc_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_toc_open_BANG_.call(null,false));
})}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(content,["span",null,null,false],false),[])])])])]);
}),toc_content)])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63639 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63640 = app.common.pages.toc_mobile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63640);

try{if(((cljs.core.map_QMARK_(props63615)) || ((props63615 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props63615)].join(''),"\n","(clojure.core/or (clojure.core/map? props63615) (clojure.core/nil? props63615))"].join('')));
}

return f__31933__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63639);
}} else {
return f__31933__auto__();
}
});

(app.common.pages.toc_mobile.uix_component_QMARK_ = true);

uix.core.set_display_name(app.common.pages.toc_mobile,"app.common.pages/toc-mobile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63772 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63772.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63772.cljs$core$IFn$_invoke$arity$4(app.common.pages.toc_mobile,"(use-ref nil)(use-ref nil)(use-ref nil)(use-ref nil)(use-state false)(use-state false)(use-effect (fn [] (let [callback (fn [[e]] (set-toc-stuck! (not (.-isIntersecting e)))) observer (js/IntersectionObserver. callback {:rootMargin \"-1px 0px 0px 0px\", :threshold [1]})] (if (clojure.core/deref toc-header-ref) (.observe observer (clojure.core/deref toc-header-ref))) (fn [] (if (clojure.core/deref toc-header-ref) (.unobserve observer (clojure.core/deref toc-header-ref)))))) [])(use-effect (fn [] (if toc-stuck? (utils/set-css-variable! \"--toc-mobile-offset\" (str \"-\" (* 2 (+ 1 current-header-index)) \"rem\"))) (fn [] (utils/set-css-variable! \"--toc-mobile-offset\" \"initial\"))) [current-header-index toc-stuck?])(use-effect (fn [] (if (clojure.core/deref toc-mobile-control) (set! (.-checked (clojure.core/deref toc-mobile-control)) toc-open?)) (fn [])) [toc-open?])(use-effect (fn [] (let [callback (fn [e] (if (and toc-open? (clojure.core/deref toc-mobile-content) (clojure.core/deref toc-mobile-label) (not (.contains (clojure.core/deref toc-mobile-label) (.-srcElement e))) (not (.contains (clojure.core/deref toc-mobile-content) (.-srcElement e)))) (set-toc-open! false)))] (js/addEventListener \"click\" callback) (fn [] (js/removeEventListener \"click\" callback)))) [toc-open?])",null,null) : sig__31853__auto___63772.call(null,app.common.pages.toc_mobile,"(use-ref nil)(use-ref nil)(use-ref nil)(use-ref nil)(use-state false)(use-state false)(use-effect (fn [] (let [callback (fn [[e]] (set-toc-stuck! (not (.-isIntersecting e)))) observer (js/IntersectionObserver. callback {:rootMargin \"-1px 0px 0px 0px\", :threshold [1]})] (if (clojure.core/deref toc-header-ref) (.observe observer (clojure.core/deref toc-header-ref))) (fn [] (if (clojure.core/deref toc-header-ref) (.unobserve observer (clojure.core/deref toc-header-ref)))))) [])(use-effect (fn [] (if toc-stuck? (utils/set-css-variable! \"--toc-mobile-offset\" (str \"-\" (* 2 (+ 1 current-header-index)) \"rem\"))) (fn [] (utils/set-css-variable! \"--toc-mobile-offset\" \"initial\"))) [current-header-index toc-stuck?])(use-effect (fn [] (if (clojure.core/deref toc-mobile-control) (set! (.-checked (clojure.core/deref toc-mobile-control)) toc-open?)) (fn [])) [toc-open?])(use-effect (fn [] (let [callback (fn [e] (if (and toc-open? (clojure.core/deref toc-mobile-content) (clojure.core/deref toc-mobile-label) (not (.contains (clojure.core/deref toc-mobile-label) (.-srcElement e))) (not (.contains (clojure.core/deref toc-mobile-content) (.-srcElement e)))) (set-toc-open! false)))] (js/addEventListener \"click\" callback) (fn [] (js/removeEventListener \"click\" callback)))) [toc-open?])",null,null));

window.uix.dev.register_BANG_(app.common.pages.toc_mobile,app.common.pages.toc_mobile.displayName);

(app.common.pages.toc_mobile.fast_refresh_signature = sig__31853__auto___63772);
} else {
}
} else {
}

app.common.pages.toc = (function app$common$pages$toc(props__31932__auto__){
var props63648 = uix.core.glue_args(props__31932__auto__);
var vec__63649 = [props63648];
var map__63652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63649,(0),null);
var map__63652__$1 = cljs.core.__destructure_map(map__63652);
var toc_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"toc-content","toc-content",-200693439));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var current_header_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"current-header-id","current-header-id",-413814486));
var ___31931__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props63648);
var f__31933__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___63773 = app.common.pages.toc.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63773)){
var f__31844__auto___63774 = temp__5823__auto___63773;
(f__31844__auto___63774.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63774.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63774.call(null));
} else {
}
} else {
}

var toc_item_active_classes = "text-[#0260B3]";
return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("border-neutral-400 border-l-2",["text-[1.05rem] 2xl:text-lg ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''))}],[uix.compiler.aot._GT_el("ul",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63653){
var map__63654 = p__63653;
var map__63654__$1 = cljs.core.__destructure_map(map__63654);
var toc_item = map__63654__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"content","content",15833224));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return uix.compiler.aot._GT_el("li",[{'className':"my-1 list-inside text-neutral-600",'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.alpha.component_element(app.components.btn_wrapper,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("div",[{'className':"group w-full h-full"}],[uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("h-12 transition-all w-full h-full inline-block flex flex-col justify-center",["group-hover:text-[#0260B3] ",["pl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((4) * level))].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_header_id,id))?[" ",toc_item_active_classes].join(''):"")].join('')),'href':["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(content,["span",null,null,false],false),[])])])])]);
}),toc_content),["ul",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63655 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63656 = app.common.pages.toc;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63656);

try{if(((cljs.core.map_QMARK_(props63648)) || ((props63648 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props63648)].join(''),"\n","(clojure.core/or (clojure.core/map? props63648) (clojure.core/nil? props63648))"].join('')));
}

return f__31933__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63655);
}} else {
return f__31933__auto__();
}
});

(app.common.pages.toc.uix_component_QMARK_ = true);

uix.core.set_display_name(app.common.pages.toc,"app.common.pages/toc");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63775 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63775.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63775.cljs$core$IFn$_invoke$arity$4(app.common.pages.toc,"",null,null) : sig__31853__auto___63775.call(null,app.common.pages.toc,"",null,null));

window.uix.dev.register_BANG_(app.common.pages.toc,app.common.pages.toc.displayName);

(app.common.pages.toc.fast_refresh_signature = sig__31853__auto___63775);
} else {
}
} else {
}

app.common.pages.blog = (function app$common$pages$blog(props__31932__auto__){
var props63666 = uix.core.glue_args(props__31932__auto__);
var vec__63667 = [props63666];
var map__63670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63667,(0),null);
var map__63670__$1 = cljs.core.__destructure_map(map__63670);
var data = map__63670__$1;
var map__63671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63670__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var map__63671__$1 = cljs.core.__destructure_map(map__63671);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___31931__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props63666);
var f__31933__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___63776 = app.common.pages.blog.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63776)){
var f__31844__auto___63777 = temp__5823__auto___63776;
(f__31844__auto___63777.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63777.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63777.call(null));
} else {
}
} else {
}

var map__63672 = app.utils.use_asset(["blog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var map__63672__$1 = cljs.core.__destructure_map(map__63672);
var blog_asset = map__63672__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63672__$1,new cljs.core.Keyword(null,"content","content",15833224));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63672__$1,new cljs.core.Keyword(null,"title","title",636505583));
var show_toc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63672__$1,new cljs.core.Keyword(null,"show-toc?","show-toc?",-1019669809));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63672__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63672__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var modified_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63672__$1,new cljs.core.Keyword(null,"modified-date","modified-date",-227695430));
var published_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63672__$1,new cljs.core.Keyword(null,"published-date","published-date",1159549772));
var toc_content = uix.hooks.alpha.use_memo((function (){
if(cljs.core.truth_(show_toc_QMARK_)){
var dummy = document.createElement("html");
(dummy.innerHTML = content);

return app.common.pages.generate_toc_from_element(dummy);
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,show_toc_QMARK_], null))]);
var doc_ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var vec__63673 = uix.core.use_state(null);
var current_header_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63673,(0),null);
var set_current_header_id_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63673,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var scroll_event = (function (_){
var headers = cljs.core.deref(doc_ref).querySelectorAll("h1,h2,h3,h4,h5");
var current_header = (function (){var or__5025__auto__ = (function (){var G__63678 = headers;
var G__63678__$1 = (((G__63678 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (header){
return (header.getBoundingClientRect().top < (2));
}),G__63678));
if((G__63678__$1 == null)){
return null;
} else {
return cljs.core.last(G__63678__$1);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.first(headers);
}
})();
if(cljs.core.truth_(current_header)){
var G__63679 = current_header.id;
return (set_current_header_id_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_header_id_BANG_.cljs$core$IFn$_invoke$arity$1(G__63679) : set_current_header_id_BANG_.call(null,G__63679));
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
return uix.compiler.aot._GT_el("div",[{'className':"px-4 relative"}],[uix.compiler.aot._GT_el("div",[null],[uix.compiler.aot._GT_el("h1",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("font-medium text-neutral-700 leading-tight","text-2xl sm:text-[2rem]")}],[title]),uix.compiler.aot._GT_el("hr",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("border-t-1 border-slate-500 w-full","my-3")}],[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("text-base grid items-center text-gray-700","pl-[1px] grid-cols-[7rem_1fr]")}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(category),["div",null,"text-sky-700 border-l-2 pl-2 text-lg",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(app.common.pages.date_time_to_readable_string(app.common.commons.parse_iso8601(modified_date)),["div",null,"text-base",false],false),[])])]),(cljs.core.truth_(show_toc_QMARK_)?uix.compiler.alpha.component_element(app.common.pages.toc_mobile,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"",new cljs.core.Keyword(null,"toc-content","toc-content",-200693439),toc_content,new cljs.core.Keyword(null,"current-header-id","current-header-id",-413814486),current_header_id], null)],[]):null),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("gap-8 w-full h-full",["md:grid md:grid-cols-[minmax(0px,7fr)_minmax(17rem,17rem)] ","2xl:grid-cols-[minmax(0px,7fr)_minmax(20rem,20rem)]"].join(''))}],[uix.compiler.aot._GT_el("div",[{'className':"cr-document",'ref':uix.compiler.attributes.keyword__GT_string(doc_ref),'dangerouslySetInnerHTML':{'__html':content}}],[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((cljs.core.truth_(show_toc_QMARK_)?uix.compiler.alpha.component_element(app.common.pages.toc,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-78 fixed right-0 top-[13.5rem] z-200 max-h-[80vh] ","overflow-y-auto select-none hidden md:block xl:top-36  ","2xl:w-96"].join(''),new cljs.core.Keyword(null,"toc-content","toc-content",-200693439),toc_content,new cljs.core.Keyword(null,"current-header-id","current-header-id",-413814486),current_header_id], null)],[]):null),["div",null,"mt-4",false],false),[])])]);
} else {
return null;
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63680 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63681 = app.common.pages.blog;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63681);

try{if(((cljs.core.map_QMARK_(props63666)) || ((props63666 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props63666)].join(''),"\n","(clojure.core/or (clojure.core/map? props63666) (clojure.core/nil? props63666))"].join('')));
}

return f__31933__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63680);
}} else {
return f__31933__auto__();
}
});

(app.common.pages.blog.uix_component_QMARK_ = true);

uix.core.set_display_name(app.common.pages.blog,"app.common.pages/blog");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63778 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63778.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63778.cljs$core$IFn$_invoke$arity$4(app.common.pages.blog,"(use-asset (str \"blog/\" id))(use-memo (fn [] (if show-toc? (let [dummy (.createElement js/document \"html\")] (set! (.-innerHTML dummy) content) (generate-toc-from-element dummy)) nil)) [content show-toc?])(use-ref nil)(use-state nil)(use-effect (fn [] (let [scroll-event (fn [_] (let [headers (.querySelectorAll (clojure.core/deref doc-ref) \"h1,h2,h3,h4,h5\") current-header (or (some->> headers (take-while (fn [header] (< (.-top (.getBoundingClientRect header)) 2))) last) (first headers))] (when current-header (set-current-header-id! (.-id current-header)))))] (js/addEventListener \"scroll\" scroll-event) (fn [] (js/removeEventListener \"scroll\" scroll-event)))) [])",null,null) : sig__31853__auto___63778.call(null,app.common.pages.blog,"(use-asset (str \"blog/\" id))(use-memo (fn [] (if show-toc? (let [dummy (.createElement js/document \"html\")] (set! (.-innerHTML dummy) content) (generate-toc-from-element dummy)) nil)) [content show-toc?])(use-ref nil)(use-state nil)(use-effect (fn [] (let [scroll-event (fn [_] (let [headers (.querySelectorAll (clojure.core/deref doc-ref) \"h1,h2,h3,h4,h5\") current-header (or (some->> headers (take-while (fn [header] (< (.-top (.getBoundingClientRect header)) 2))) last) (first headers))] (when current-header (set-current-header-id! (.-id current-header)))))] (js/addEventListener \"scroll\" scroll-event) (fn [] (js/removeEventListener \"scroll\" scroll-event)))) [])",null,null));

window.uix.dev.register_BANG_(app.common.pages.blog,app.common.pages.blog.displayName);

(app.common.pages.blog.fast_refresh_signature = sig__31853__auto___63778);
} else {
}
} else {
}

app.common.pages.blog_item = (function app$common$pages$blog_item(props__31932__auto__){
var props63684 = uix.core.glue_args(props__31932__auto__);
var vec__63685 = [props63684];
var map__63688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63685,(0),null);
var map__63688__$1 = cljs.core.__destructure_map(map__63688);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var onclick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"onclick","onclick",1297553739));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var ___31931__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props63684);
var f__31933__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___63779 = app.common.pages.blog_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63779)){
var f__31844__auto___63780 = temp__5823__auto___63779;
(f__31844__auto___63780.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63780.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63780.call(null));
} else {
}
} else {
}

var map__63689 = preview;
var map__63689__$1 = cljs.core.__destructure_map(map__63689);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"title","title",636505583));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var published_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"published-date","published-date",1159549772));
var modified_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"modified-date","modified-date",-227695430));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63689__$1,new cljs.core.Keyword(null,"category","category",-593092832));
return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("blog-item",class$)}],[uix.compiler.aot._GT_el("div",[{'className':"relative group"}],[uix.compiler.aot._GT_el("div",[null],[uix.compiler.aot._GT_el("div",[null],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(app.common.pages.date_time_to_readable_string(app.common.commons.parse_iso8601(published_date)),["span",null,"text-lg text-slate-600",false],false),[]),uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(" / ",["span",null,null,false],false),[]),uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(category,["span",null,"text-lg text-slate-600",false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"")}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["blogs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".html"].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl xl:text-3xl text-sky-950 hover:text-[#0260B3] transition-all duration-300"], null)],[uix.compiler.aot._GT_el("h1",uix.compiler.attributes.interpret_attrs(title,["h1",null,null,false],false),[])])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63690 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63691 = app.common.pages.blog_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63691);

try{if(((cljs.core.map_QMARK_(props63684)) || ((props63684 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props63684)].join(''),"\n","(clojure.core/or (clojure.core/map? props63684) (clojure.core/nil? props63684))"].join('')));
}

return f__31933__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63690);
}} else {
return f__31933__auto__();
}
});

(app.common.pages.blog_item.uix_component_QMARK_ = true);

uix.core.set_display_name(app.common.pages.blog_item,"app.common.pages/blog-item");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63781 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63781.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63781.cljs$core$IFn$_invoke$arity$4(app.common.pages.blog_item,"",null,null) : sig__31853__auto___63781.call(null,app.common.pages.blog_item,"",null,null));

window.uix.dev.register_BANG_(app.common.pages.blog_item,app.common.pages.blog_item.displayName);

(app.common.pages.blog_item.fast_refresh_signature = sig__31853__auto___63781);
} else {
}
} else {
}

app.common.pages.home = (function app$common$pages$home(props__31932__auto__){
var props63699 = uix.core.glue_args(props__31932__auto__);
var vec__63700 = [props63699];
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63700,(0),null);
var ___31931__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props63699);
var f__31933__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___63782 = app.common.pages.home.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63782)){
var f__31844__auto___63783 = temp__5823__auto___63782;
(f__31844__auto___63783.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63783.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63783.call(null));
} else {
}
} else {
}

var blogs = app.utils.use_asset("blogs");
var landscape_ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var scroll_listener = (function (___$1){
var map__63704 = app.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(landscape_ref).getBoundingClientRect(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__63704__$1 = cljs.core.__destructure_map(map__63704);
var rect = map__63704__$1;
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63704__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
return null;
});
addEventListener("scroll",scroll_listener);

return (function (){
return removeEventListener("scroll",scroll_listener);
});
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("flex flex-col justify-center items-center","xl:w-[1100px]")}],[uix.compiler.aot._GT_el("div",[{'className':"w-full"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (blog){
return uix.compiler.aot._GT_el("div",[{'className':"w-full",'key':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(blog)}],[uix.compiler.alpha.component_element(app.common.pages.blog_item,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"preview","preview",451279890),blog,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(blog),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null)],[]),uix.compiler.aot._GT_el("hr",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"mt-2 border-gray-500")}],[])]);
}),blogs),["div",null,"flex justify-center flex-col gap-2 bg-opacity-100 w-full",false],false),[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63705 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63706 = app.common.pages.home;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63706);

try{if(((cljs.core.map_QMARK_(props63699)) || ((props63699 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props63699)].join(''),"\n","(clojure.core/or (clojure.core/map? props63699) (clojure.core/nil? props63699))"].join('')));
}

return f__31933__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63705);
}} else {
return f__31933__auto__();
}
});

(app.common.pages.home.uix_component_QMARK_ = true);

uix.core.set_display_name(app.common.pages.home,"app.common.pages/home");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63784 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63784.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63784.cljs$core$IFn$_invoke$arity$4(app.common.pages.home,"(use-asset \"blogs\")(use-ref nil)(use-effect (fn [] (let [scroll-listener (fn [_] (let [{:keys [bottom], :as rect} (obj->clj (.getBoundingClientRect (clojure.core/deref landscape-ref)) :keywordize-keys true)]))] (js/addEventListener \"scroll\" scroll-listener) (fn [] (js/removeEventListener \"scroll\" scroll-listener)))) [])",null,null) : sig__31853__auto___63784.call(null,app.common.pages.home,"(use-asset \"blogs\")(use-ref nil)(use-effect (fn [] (let [scroll-listener (fn [_] (let [{:keys [bottom], :as rect} (obj->clj (.getBoundingClientRect (clojure.core/deref landscape-ref)) :keywordize-keys true)]))] (js/addEventListener \"scroll\" scroll-listener) (fn [] (js/removeEventListener \"scroll\" scroll-listener)))) [])",null,null));

window.uix.dev.register_BANG_(app.common.pages.home,app.common.pages.home.displayName);

(app.common.pages.home.fast_refresh_signature = sig__31853__auto___63784);
} else {
}
} else {
}

app.common.pages.header = (function app$common$pages$header(){
var f__31925__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___63785 = app.common.pages.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63785)){
var f__31844__auto___63786 = temp__5823__auto___63785;
(f__31844__auto___63786.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63786.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63786.call(null));
} else {
}
} else {
}

var map__63731 = uix.core.use_context(app.router._STAR_router_STAR_);
var map__63731__$1 = cljs.core.__destructure_map(map__63731);
var ctx = map__63731__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63731__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var home_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,app.common.pages.home);
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("bg-opacity-100 px-4 relative",["bg-[#0260B3] sm:flex sm:justify-between block gap-4 ",((home_page_QMARK_)?"md:grid md:grid-cols-[2fr_3fr] md:h-dvh md:fixed md:w-[20rem]":"xl:grid xl:grid-cols-[2fr_3fr] xl:h-dvh xl:fixed xl:w-[20rem]")].join(''))}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center block"], null)],[uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("text-3xl text-cyan-50 pt-4",["sm:py-6 ",((home_page_QMARK_)?"md:sideways-lr md:text-6xl md:pb-8":"xl:sideways-lr xl:text-6xl xl:pb-8")].join(''))}],[app.user_config.title])]),uix.compiler.aot._GT_el("div",[{'className':"flex justify-center"}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("flex flex-col items-center justify-end py-1 relative",["left-[0.275rem] sm:items-end ",((home_page_QMARK_)?"md:justify-between":"xl:justify-between")].join(''))}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("navigator-bar gap-3 text-base text-slate-50 opacity-80 flex px-5 my-2",((home_page_QMARK_)?"md:text-2xl md:flex-col md:pt-6":"xl:text-2xl xl:flex-col xl:pt-6"))}],[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63732){
var vec__63733 = p__63732;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63733,(0),null);
var map__63736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63733,(1),null);
var map__63736__$1 = cljs.core.__destructure_map(map__63736);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63736__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63736__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return uix.compiler.alpha.component_element(app.components.btn_wrapper,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"bg-class","bg-class",-817462195),"group-hover:bg-yellow-400"], null)],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("px-1 group-hover:text-cyan-50","text-lg"),'key':uix.compiler.attributes.keyword__GT_string(href)}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null)],[text])])]);
}),app.user_config.navigation)]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("justify-center w-full mb-8 relative hidden",((home_page_QMARK_)?"md:flex":"xl:flex"))}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63737){
var vec__63738 = p__63737;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63738,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63738,(1),null);
return uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rss","rss",-1401556502),key))?"/atom.xml":value),new cljs.core.Keyword(null,"key","key",-1516042587),key], null)],[uix.compiler.alpha.component_element((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(app.common.pages.icons) : key.call(null,app.common.pages.icons)),[null],[])]);
}),app.user_config.links),["div",null,"flex relative",false],false),[])])])])]),[],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63741 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63742 = app.common.pages.header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63742);

try{return f__31925__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63741);
}} else {
return f__31925__auto__();
}
});

(app.common.pages.header.uix_component_QMARK_ = true);

uix.core.set_display_name(app.common.pages.header,"app.common.pages/header");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63787 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63787.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63787.cljs$core$IFn$_invoke$arity$4(app.common.pages.header,"(use-context router/*router*)",null,null) : sig__31853__auto___63787.call(null,app.common.pages.header,"(use-context router/*router*)",null,null));

window.uix.dev.register_BANG_(app.common.pages.header,app.common.pages.header.displayName);

(app.common.pages.header.fast_refresh_signature = sig__31853__auto___63787);
} else {
}
} else {
}

app.common.pages.routes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.identity,new cljs.core.Keyword(null,"start","start",-355208981),(function (_){
return null;
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (_){
return null;
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/index.html",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),app.common.pages.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/home.html",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),app.common.pages.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),app.common.pages.home,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.identity,new cljs.core.Keyword(null,"start","start",-355208981),(function (p__63743){
var map__63744 = p__63743;
var map__63744__$1 = cljs.core.__destructure_map(map__63744);
var map__63745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63744__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__63745__$1 = cljs.core.__destructure_map(map__63745);
var data = map__63745__$1;
var routing_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63745__$1,new cljs.core.Keyword(null,"routing-state","routing-state",1886805218));
var set_routing_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63745__$1,new cljs.core.Keyword(null,"set-routing-state!","set-routing-state!",1954874108));
var G__63746_63788 = cljs.core.assoc_in(routing_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home-page?","home-page?",-1002831724)], null),true);
(set_routing_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_routing_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__63746_63788) : set_routing_state_BANG_.call(null,G__63746_63788));

return cljs.core.tap_GT_("called");
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (p__63747){
var map__63748 = p__63747;
var map__63748__$1 = cljs.core.__destructure_map(map__63748);
var map__63749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63748__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__63749__$1 = cljs.core.__destructure_map(map__63749);
var routing_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63749__$1,new cljs.core.Keyword(null,"routing-state","routing-state",1886805218));
var set_routing_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63749__$1,new cljs.core.Keyword(null,"set-routing-state!","set-routing-state!",1954874108));
var G__63750 = cljs.core.assoc_in(routing_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home-page?","home-page?",-1002831724)], null),false);
return (set_routing_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_routing_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__63750) : set_routing_state_BANG_.call(null,G__63750));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/blogs/{id}.html",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),app.common.pages.blog,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.common.pages","blog","app.common.pages/blog",-1587027318),new cljs.core.Keyword(null,"depends","depends",-1216840417),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about.html",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),app.common.pages.blog,new cljs.core.Keyword(null,"extra-data","extra-data",915012813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"about.html"], null)], null)], null)], null)], null);
app.common.pages.main = (function app$common$pages$main(props__31932__auto__){
var props63753 = uix.core.glue_args(props__31932__auto__);
var vec__63754 = [props63753];
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63754,(0),null);
var ___31931__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props63753);
var f__31933__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___63789 = app.common.pages.main.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63789)){
var f__31844__auto___63790 = temp__5823__auto___63789;
(f__31844__auto___63790.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63790.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63790.call(null));
} else {
}
} else {
}

var map__63757 = uix.core.use_context(app.router._STAR_router_STAR_);
var map__63757__$1 = cljs.core.__destructure_map(map__63757);
var ctx = map__63757__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63757__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var home_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,app.common.pages.home);
return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("app h-dvh w-full",((home_page_QMARK_)?"md:grid md:grid-cols-[20rem_9fr]":"xl:grid xl:grid-cols-[20rem_9fr]"))}],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.aot._GT_el("div",[{'className':"transition-all"}],[uix.compiler.alpha.component_element(app.common.pages.header,[null],[])]),[],false),[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("pt-5 px-2","sm:px-4 xl:pt-7 xl:px-8")}],[uix.compiler.alpha.component_element(app.router.router_outlet,[null],[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63758 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63759 = app.common.pages.main;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63759);

try{if(((cljs.core.map_QMARK_(props63753)) || ((props63753 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props63753)].join(''),"\n","(clojure.core/or (clojure.core/map? props63753) (clojure.core/nil? props63753))"].join('')));
}

return f__31933__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63758);
}} else {
return f__31933__auto__();
}
});

(app.common.pages.main.uix_component_QMARK_ = true);

uix.core.set_display_name(app.common.pages.main,"app.common.pages/main");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63791 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63791.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63791.cljs$core$IFn$_invoke$arity$4(app.common.pages.main,"(use-context router/*router*)",null,null) : sig__31853__auto___63791.call(null,app.common.pages.main,"(use-context router/*router*)",null,null));

window.uix.dev.register_BANG_(app.common.pages.main,app.common.pages.main.displayName);

(app.common.pages.main.fast_refresh_signature = sig__31853__auto___63791);
} else {
}
} else {
}

app.common.pages.app = (function app$common$pages$app(props__31932__auto__){
var props63761 = uix.core.glue_args(props__31932__auto__);
var vec__63762 = [props63761];
var map__63765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63762,(0),null);
var map__63765__$1 = cljs.core.__destructure_map(map__63765);
var initial_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63765__$1,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808));
var ___31931__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props63761);
var f__31933__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___63792 = app.common.pages.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63792)){
var f__31844__auto___63793 = temp__5823__auto___63792;
(f__31844__auto___63793.cljs$core$IFn$_invoke$arity$0 ? f__31844__auto___63793.cljs$core$IFn$_invoke$arity$0() : f__31844__auto___63793.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.router.router,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),app.common.pages.routes,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),initial_route], null)],[uix.compiler.alpha.component_element(app.common.pages.main,[cljs.core.PersistentArrayMap.EMPTY],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63766 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63767 = app.common.pages.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63767);

try{if(((cljs.core.map_QMARK_(props63761)) || ((props63761 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props63761)].join(''),"\n","(clojure.core/or (clojure.core/map? props63761) (clojure.core/nil? props63761))"].join('')));
}

return f__31933__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63766);
}} else {
return f__31933__auto__();
}
});

(app.common.pages.app.uix_component_QMARK_ = true);

uix.core.set_display_name(app.common.pages.app,"app.common.pages/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__31853__auto___63794 = window.uix.dev.signature_BANG_();
(sig__31853__auto___63794.cljs$core$IFn$_invoke$arity$4 ? sig__31853__auto___63794.cljs$core$IFn$_invoke$arity$4(app.common.pages.app,"",null,null) : sig__31853__auto___63794.call(null,app.common.pages.app,"",null,null));

window.uix.dev.register_BANG_(app.common.pages.app,app.common.pages.app.displayName);

(app.common.pages.app.fast_refresh_signature = sig__31853__auto___63794);
} else {
}
} else {
}


//# sourceMappingURL=app.common.pages.js.map
