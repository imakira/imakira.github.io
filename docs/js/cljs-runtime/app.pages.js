goog.provide('app.pages');
app.pages._STAR_header_context_STAR_ = uix.core.create_context.cljs$core$IFn$_invoke$arity$1(null);
app.pages.blog = (function app$pages$blog(props__38405__auto__){
var clj_props__38406__auto__ = uix.core.glue_args(props__38405__auto__);
var vec__63098 = [clj_props__38406__auto__];
var map__63101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63098,(0),null);
var map__63101__$1 = cljs.core.__destructure_map(map__63101);
var routing_data = map__63101__$1;
var map__63102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63101__$1,new cljs.core.Keyword(null,"routing-data","routing-data",-1393758098));
var map__63102__$1 = cljs.core.__destructure_map(map__63102);
var map__63103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63102__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var map__63103__$1 = cljs.core.__destructure_map(map__63103);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63103__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var f__38407__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___63161 = app.pages.blog.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63161)){
var f__38345__auto___63162 = temp__5823__auto___63161;
(f__38345__auto___63162.cljs$core$IFn$_invoke$arity$0 ? f__38345__auto___63162.cljs$core$IFn$_invoke$arity$0() : f__38345__auto___63162.call(null, ));
} else {
}
} else {
}

var map__63104 = app.utils.use_asset(["blog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var map__63104__$1 = cljs.core.__destructure_map(map__63104);
var blog_asset = map__63104__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63104__$1,new cljs.core.Keyword(null,"content","content",15833224));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63104__$1,new cljs.core.Keyword(null,"title","title",636505583));
return uix.compiler.aot._GT_el("div",[{'className':"mt-20 pt-4 flex flex-col items-center"}],[uix.compiler.aot._GT_el("h1",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("text-5xl","w-7/12")}],[title]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("cr-document","w-7/12"),'dangerouslySetInnerHTML':{'__html':new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(blog_asset)}}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63105 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63106 = app.pages.blog;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63106);

try{if(((cljs.core.map_QMARK_(clj_props__38406__auto__)) || ((clj_props__38406__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38406__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38406__auto__) (clojure.core/nil? clj-props__38406__auto__))"].join('')));
}

return f__38407__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63105);
}} else {
return f__38407__auto__();
}
});

(app.pages.blog.uix_component_QMARK_ = true);

(app.pages.blog.displayName = "app.pages/blog");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38354__auto___63163 = window.uix.dev.signature_BANG_();
(sig__38354__auto___63163.cljs$core$IFn$_invoke$arity$4 ? sig__38354__auto___63163.cljs$core$IFn$_invoke$arity$4(app.pages.blog,"(use-asset (str \"blog/\" id))",null,null) : sig__38354__auto___63163.call(null, app.pages.blog,"(use-asset (str \"blog/\" id))",null,null));

window.uix.dev.register_BANG_(app.pages.blog,app.pages.blog.displayName);

(app.pages.blog.fast_refresh_signature = sig__38354__auto___63163);
} else {
}
} else {
}
app.pages.blog_item = (function app$pages$blog_item(props__38405__auto__){
var clj_props__38406__auto__ = uix.core.glue_args(props__38405__auto__);
var vec__63107 = [clj_props__38406__auto__];
var map__63110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63107,(0),null);
var map__63110__$1 = cljs.core.__destructure_map(map__63110);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63110__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var onclick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63110__$1,new cljs.core.Keyword(null,"onclick","onclick",1297553739));
var f__38407__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___63164 = app.pages.blog_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63164)){
var f__38345__auto___63165 = temp__5823__auto___63164;
(f__38345__auto___63165.cljs$core$IFn$_invoke$arity$0 ? f__38345__auto___63165.cljs$core$IFn$_invoke$arity$0() : f__38345__auto___63165.call(null, ));
} else {
}
} else {
}

var map__63111 = preview;
var map__63111__$1 = cljs.core.__destructure_map(map__63111);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63111__$1,new cljs.core.Keyword(null,"title","title",636505583));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63111__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63111__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var published_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63111__$1,new cljs.core.Keyword(null,"published-date","published-date",1159549772));
var modified_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63111__$1,new cljs.core.Keyword(null,"modified-date","modified-date",-227695430));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63111__$1,new cljs.core.Keyword(null,"author","author",2111686192));
return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("blog-item","")}],[uix.compiler.aot._GT_el("div",[{'className':"relative group"}],[uix.compiler.alpha.component_element(app.components.btn_wrapper,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("div",[{'className':"flex items-center gap-4 p-4"}],[uix.compiler.aot._GT_el("div",[({})],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("Mar 5",["span",null,"text-xl text-slate-600",false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"")}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["blogs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"text-3xl text-sky-950"], null)],[uix.compiler.aot._GT_el("h1",uix.compiler.attributes.interpret_attrs(title,["h1",null,null,false],false),[])])])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63114 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63115 = app.pages.blog_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63115);

try{if(((cljs.core.map_QMARK_(clj_props__38406__auto__)) || ((clj_props__38406__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38406__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38406__auto__) (clojure.core/nil? clj-props__38406__auto__))"].join('')));
}

return f__38407__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63114);
}} else {
return f__38407__auto__();
}
});

(app.pages.blog_item.uix_component_QMARK_ = true);

(app.pages.blog_item.displayName = "app.pages/blog-item");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38354__auto___63166 = window.uix.dev.signature_BANG_();
(sig__38354__auto___63166.cljs$core$IFn$_invoke$arity$4 ? sig__38354__auto___63166.cljs$core$IFn$_invoke$arity$4(app.pages.blog_item,"",null,null) : sig__38354__auto___63166.call(null, app.pages.blog_item,"",null,null));

window.uix.dev.register_BANG_(app.pages.blog_item,app.pages.blog_item.displayName);

(app.pages.blog_item.fast_refresh_signature = sig__38354__auto___63166);
} else {
}
} else {
}
app.pages.temp_links = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"text","text",-1790561697),"HOME"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/about",new cljs.core.Keyword(null,"text","text",-1790561697),"ABOUT"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/projects",new cljs.core.Keyword(null,"text","text",-1790561697),"PROJECTS"], null)], null);
app.pages.header = (function app$pages$header(){
var f__38403__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___63167 = app.pages.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63167)){
var f__38345__auto___63168 = temp__5823__auto___63167;
(f__38345__auto___63168.cljs$core$IFn$_invoke$arity$0 ? f__38345__auto___63168.cljs$core$IFn$_invoke$arity$0() : f__38345__auto___63168.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("w-full h-full bg-opacity-100 flex justify-between items-center px-4","bg-[#0260B3]")}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null)],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Coruscation",["div",null,"text-5xl text-cyan-50 opacity-80 relative -top-1",false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':"flex items-end flex-col"}],[uix.compiler.aot._GT_el("div",[{'className':"navigator-bar flex gap-3 text-xl text-slate-50 opacity-80"}],[(function (){var iter__5480__auto__ = (function app$pages$header_$_iter__63116(s__63117){
return (new cljs.core.LazySeq(null,(function (){
var s__63117__$1 = s__63117;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__63117__$1);
if(temp__5823__auto__){
var s__63117__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63117__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__63117__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__63119 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__63118 = (0);
while(true){
if((i__63118 < size__5479__auto__)){
var map__63120 = cljs.core._nth(c__5478__auto__,i__63118);
var map__63120__$1 = cljs.core.__destructure_map(map__63120);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63120__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63120__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append(b__63119,uix.compiler.alpha.component_element(app.components.btn_wrapper,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),href,new cljs.core.Keyword(null,"bg-class","bg-class",-817462195),"group-hover:bg-yellow-400"], null)],[uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(href),'className':"px-1 group-hover:text-cyan-50"}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null)],[text])])]));

var G__63169 = (i__63118 + (1));
i__63118 = G__63169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63119),app$pages$header_$_iter__63116(cljs.core.chunk_rest(s__63117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63119),null);
}
} else {
var map__63121 = cljs.core.first(s__63117__$2);
var map__63121__$1 = cljs.core.__destructure_map(map__63121);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63121__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63121__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons(uix.compiler.alpha.component_element(app.components.btn_wrapper,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),href,new cljs.core.Keyword(null,"bg-class","bg-class",-817462195),"group-hover:bg-yellow-400"], null)],[uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(href),'className':"px-1 group-hover:text-cyan-50"}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null)],[text])])]),app$pages$header_$_iter__63116(cljs.core.rest(s__63117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(app.pages.temp_links);
})()])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63122 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63123 = app.pages.header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63123);

try{return f__38403__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63122);
}} else {
return f__38403__auto__();
}
});

(app.pages.header.uix_component_QMARK_ = true);

(app.pages.header.displayName = "app.pages/header");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38354__auto___63170 = window.uix.dev.signature_BANG_();
(sig__38354__auto___63170.cljs$core$IFn$_invoke$arity$4 ? sig__38354__auto___63170.cljs$core$IFn$_invoke$arity$4(app.pages.header,"",null,null) : sig__38354__auto___63170.call(null, app.pages.header,"",null,null));

window.uix.dev.register_BANG_(app.pages.header,app.pages.header.displayName);

(app.pages.header.fast_refresh_signature = sig__38354__auto___63170);
} else {
}
} else {
}
app.pages.home = (function app$pages$home(props__38405__auto__){
var clj_props__38406__auto__ = uix.core.glue_args(props__38405__auto__);
var vec__63124 = [clj_props__38406__auto__];
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63124,(0),null);
var f__38407__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___63171 = app.pages.home.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63171)){
var f__38345__auto___63172 = temp__5823__auto___63171;
(f__38345__auto___63172.cljs$core$IFn$_invoke$arity$0 ? f__38345__auto___63172.cljs$core$IFn$_invoke$arity$0() : f__38345__auto___63172.call(null, ));
} else {
}
} else {
}

var blogs = app.utils.use_asset("blogs");
var vec__63127 = uix.core.use_context(app.pages._STAR_header_context_STAR_);
var show_header_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63127,(0),null);
var set_header_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63127,(1),null);
var landscape_ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var scroll_listener = (function (___$1){
var map__63131 = app.utils.obj__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(landscape_ref).getBoundingClientRect(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__63131__$1 = cljs.core.__destructure_map(map__63131);
var rect = map__63131__$1;
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63131__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
if((((4) * (16)) > bottom)){
return (set_header_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_header_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_header_BANG_.call(null, true));
} else {
return (set_header_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_header_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_header_BANG_.call(null, false));
}
});
addEventListener("scroll",scroll_listener);

return (function (){
return removeEventListener("scroll",scroll_listener);
});
}),uix.core.jsfy_deps([set_header_BANG_]));

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-col justify-center items-center"}],[uix.compiler.aot._GT_el("div",[{'ref':uix.compiler.attributes.keyword__GT_string(landscape_ref),'className':"py-14 w-full flex justify-center items-center relative cr-landscape h-96"}],[uix.compiler.aot._GT_el("div",[({})],[uix.compiler.aot._GT_el("div",[{'className':"title text-9xl text-cyan-50 text-opacity-80 relative"}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("Coruscation",["span",null,null,false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':"flex items-end flex-col mt-3"}],[uix.compiler.aot._GT_el("div",[{'className':"navigator-bar flex gap-3 text-xl text-sky-900"}],[(function (){var iter__5480__auto__ = (function app$pages$home_$_iter__63134(s__63135){
return (new cljs.core.LazySeq(null,(function (){
var s__63135__$1 = s__63135;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__63135__$1);
if(temp__5823__auto__){
var s__63135__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63135__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__63135__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__63137 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__63136 = (0);
while(true){
if((i__63136 < size__5479__auto__)){
var map__63138 = cljs.core._nth(c__5478__auto__,i__63136);
var map__63138__$1 = cljs.core.__destructure_map(map__63138);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63138__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63138__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append(b__63137,uix.compiler.alpha.component_element(app.components.btn_wrapper,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),href], null)],[uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(href),'className':"px-1"}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null)],[text])])]));

var G__63173 = (i__63136 + (1));
i__63136 = G__63173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63137),app$pages$home_$_iter__63134(cljs.core.chunk_rest(s__63135__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63137),null);
}
} else {
var map__63139 = cljs.core.first(s__63135__$2);
var map__63139__$1 = cljs.core.__destructure_map(map__63139);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63139__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63139__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons(uix.compiler.alpha.component_element(app.components.btn_wrapper,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),href], null)],[uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(href),'className':"px-1"}],[uix.compiler.alpha.component_element(app.router.link,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null)],[text])])]),app$pages$home_$_iter__63134(cljs.core.rest(s__63135__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(app.pages.temp_links);
})()])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("flex flex-col justify-center items-center","w-7/12")}],[uix.compiler.aot._GT_el("div",[({})],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("mb-8","px-3.5")}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("Latest Articles",["span",null,"text-4xl",false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':"flex justify-center flex-col gap-2 bg-opacity-100"}],[(function (){var iter__5480__auto__ = (function app$pages$home_$_iter__63142(s__63143){
return (new cljs.core.LazySeq(null,(function (){
var s__63143__$1 = s__63143;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__63143__$1);
if(temp__5823__auto__){
var s__63143__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63143__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__63143__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__63145 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__63144 = (0);
while(true){
if((i__63144 < size__5479__auto__)){
var blog = cljs.core._nth(c__5478__auto__,i__63144);
cljs.core.chunk_append(b__63145,uix.compiler.alpha.component_element(app.pages.blog_item,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preview","preview",451279890),blog,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(blog)], null)],[]));

var G__63174 = (i__63144 + (1));
i__63144 = G__63174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63145),app$pages$home_$_iter__63142(cljs.core.chunk_rest(s__63143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63145),null);
}
} else {
var blog = cljs.core.first(s__63143__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.pages.blog_item,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preview","preview",451279890),blog,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(blog)], null)],[]),app$pages$home_$_iter__63142(cljs.core.rest(s__63143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(blogs);
})()])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63146 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63147 = app.pages.home;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63147);

try{if(((cljs.core.map_QMARK_(clj_props__38406__auto__)) || ((clj_props__38406__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38406__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38406__auto__) (clojure.core/nil? clj-props__38406__auto__))"].join('')));
}

return f__38407__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63146);
}} else {
return f__38407__auto__();
}
});

(app.pages.home.uix_component_QMARK_ = true);

(app.pages.home.displayName = "app.pages/home");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38354__auto___63175 = window.uix.dev.signature_BANG_();
(sig__38354__auto___63175.cljs$core$IFn$_invoke$arity$4 ? sig__38354__auto___63175.cljs$core$IFn$_invoke$arity$4(app.pages.home,"(use-asset \"blogs\")(use-context *header-context*)(use-ref nil)(use-effect (fn [] (let [scroll-listener (fn [_] (let [{:keys [bottom], :as rect} (obj->clj (.getBoundingClientRect (clojure.core/deref landscape-ref)) :keywordize-keys true)] (if (> (* 4 16) bottom) (set-header! true) (set-header! false))))] (js/addEventListener \"scroll\" scroll-listener) (fn [] (js/removeEventListener \"scroll\" scroll-listener)))) [set-header!])",null,null) : sig__38354__auto___63175.call(null, app.pages.home,"(use-asset \"blogs\")(use-context *header-context*)(use-ref nil)(use-effect (fn [] (let [scroll-listener (fn [_] (let [{:keys [bottom], :as rect} (obj->clj (.getBoundingClientRect (clojure.core/deref landscape-ref)) :keywordize-keys true)] (if (> (* 4 16) bottom) (set-header! true) (set-header! false))))] (js/addEventListener \"scroll\" scroll-listener) (fn [] (js/removeEventListener \"scroll\" scroll-listener)))) [set-header!])",null,null));

window.uix.dev.register_BANG_(app.pages.home,app.pages.home.displayName);

(app.pages.home.fast_refresh_signature = sig__38354__auto___63175);
} else {
}
} else {
}
app.pages.routes = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (_){
return cljs.core.tap_GT_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),_], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (_){
return cljs.core.tap_GT_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/index.html",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),app.pages.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/home.html",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),app.pages.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),app.pages.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/template.html",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),app.pages.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/blogs/:id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),app.pages.blog], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about"], null)], null);
app.pages.app = (function app$pages$app(props__38405__auto__){
var clj_props__38406__auto__ = uix.core.glue_args(props__38405__auto__);
var vec__63148 = [clj_props__38406__auto__];
var map__63151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63148,(0),null);
var map__63151__$1 = cljs.core.__destructure_map(map__63151);
var initial_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63151__$1,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808));
var f__38407__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___63176 = app.pages.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___63176)){
var f__38345__auto___63177 = temp__5823__auto___63176;
(f__38345__auto___63177.cljs$core$IFn$_invoke$arity$0 ? f__38345__auto___63177.cljs$core$IFn$_invoke$arity$0() : f__38345__auto___63177.call(null, ));
} else {
}
} else {
}

var vec__63152 = uix.core.use_state(false);
var show_header_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63152,(0),null);
var set_header_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63152,(1),null);
return uix.compiler.alpha.component_element(app.pages._STAR_header_context_STAR_.Provider,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [show_header_QMARK_,set_header_BANG_], null)], null)],[uix.compiler.aot._GT_el("div",[{'className':"app h-full w-full"}],[uix.compiler.aot._GT_el("div",[{'className':"w-screen h-screen fixed -z-50 bg-cyan-50 fixed"}],[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2("w-screen h-20 z-50 fixed transition-all",(cljs.core.truth_(show_header_QMARK_)?"top-0":"-top-20"))}],[uix.compiler.alpha.component_element(app.pages.header,[null],[])]),uix.compiler.alpha.component_element(app.router.router,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),app.pages.routes,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),initial_route], null)],[(function (){var map__63155 = uix.core.use_context(app.router._STAR_router_STAR_);
var map__63155__$1 = cljs.core.__destructure_map(map__63155);
var ctx = map__63155__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63155__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return uix.compiler.alpha.component_element(app.router.router_outlet,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hook","hook",750265408),(function (){
var map__63156 = uix.core.use_context(app.router._STAR_router_STAR_);
var map__63156__$1 = cljs.core.__destructure_map(map__63156);
var router = map__63156__$1;
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63156__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var G__63158 = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component__$1,app.pages.home)));
return (set_header_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_header_BANG_.cljs$core$IFn$_invoke$arity$1(G__63158) : set_header_BANG_.call(null, G__63158));
}),uix.core.jsfy_deps([component__$1]));
})], null)],[]);
})()])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__63159 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__63160 = app.pages.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__63160);

try{if(((cljs.core.map_QMARK_(clj_props__38406__auto__)) || ((clj_props__38406__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38406__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38406__auto__) (clojure.core/nil? clj-props__38406__auto__))"].join('')));
}

return f__38407__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__63159);
}} else {
return f__38407__auto__();
}
});

(app.pages.app.uix_component_QMARK_ = true);

(app.pages.app.displayName = "app.pages/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38354__auto___63178 = window.uix.dev.signature_BANG_();
(sig__38354__auto___63178.cljs$core$IFn$_invoke$arity$4 ? sig__38354__auto___63178.cljs$core$IFn$_invoke$arity$4(app.pages.app,"(use-state false)(use-context router/*router*)(use-context router/*router*)(use-effect (fn [] (set-header! (not (= component home)))) [component])",null,null) : sig__38354__auto___63178.call(null, app.pages.app,"(use-state false)(use-context router/*router*)(use-context router/*router*)(use-effect (fn [] (set-header! (not (= component home)))) [component])",null,null));

window.uix.dev.register_BANG_(app.pages.app,app.pages.app.displayName);

(app.pages.app.fast_refresh_signature = sig__38354__auto___63178);
} else {
}
} else {
}

//# sourceMappingURL=app.pages.js.map
