import "./cljs_env.js";
import "./cljs.core.js";
import "./uix.core.js";
import "./net.coruscation.cerulean.utils.js";
import "./net.coruscation.cerulean.common.components.js";
goog.provide('orgx.note');
orgx.note._comp = (function orgx$note$_comp(props__39433__auto__){
var props101812 = uix.core.glue_args(props__39433__auto__);
var post_props = props101812;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101812);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101821 = orgx.note._comp.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101821)){
var f__39348__auto___101822 = temp__5823__auto___101821;
(f__39348__auto___101822.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101822.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101822.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[null,uix.compiler.aot._GT_el("div",[null],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"bg-stone-50 pl-4 py-2 border-l-3 border-rose-500")}],[uix.compiler.alpha.create_element_STAR_("div", ...[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"font-semibold mb-1 text-neutral-600")}], ...["TIP"]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(post_props),["div",null,null,false],false),[])])])],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101815 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101816 = orgx.note._comp;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101816);

try{if(((cljs.core.map_QMARK_(props101812)) || ((props101812 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101812)))+"\n"+"(clojure.core/or (clojure.core/map? props101812) (clojure.core/nil? props101812))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101815);
}} else {
return f__39434__auto__();
}
});

(orgx.note._comp.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.note._comp,"orgx.note/_comp");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101823 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101823.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101823.cljs$core$IFn$_invoke$arity$4(orgx.note._comp,"",null,null) : sig__39357__auto___101823.call(null,orgx.note._comp,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.note._comp,orgx.note._comp.displayName);

(orgx.note._comp.fast_refresh_signature = sig__39357__auto___101823);
} else {
}
} else {
}

orgx.note.component = (function orgx$note$component(props__39433__auto__){
var props101818 = uix.core.glue_args(props__39433__auto__);
var props = props101818;
var ___39432__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(props101818);
var f__39434__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___101824 = orgx.note.component.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___101824)){
var f__39348__auto___101826 = temp__5823__auto___101824;
(f__39348__auto___101826.cljs$core$IFn$_invoke$arity$0 ? f__39348__auto___101826.cljs$core$IFn$_invoke$arity$0() : f__39348__auto___101826.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(orgx.note._comp,uix.compiler.attributes.interpret_props(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("blog","orgx","blog/orgx",-1430261758),new cljs.core.Keyword("blog","tags","blog/tags",1766286535),new cljs.core.Keyword("blog","unlisted","blog/unlisted",-268124729),new cljs.core.Keyword("blog","title","blog/title",629301577),new cljs.core.Keyword("blog","show-toc?","blog/show-toc?",-1011924183),new cljs.core.Keyword("blog","file-path","blog/file-path",-2012853524),new cljs.core.Keyword("blog","author","blog/author",2110519182),new cljs.core.Keyword("blog","email","blog/email",1419146704),new cljs.core.Keyword("blog","description","blog/description",-1430014670),new cljs.core.Keyword("blog","id","blog/id",-1385637198),new cljs.core.Keyword("blog","category","blog/category",-596578574),new cljs.core.Keyword("blog","language","blog/language",-1598263178),new cljs.core.Keyword("blog","published-date","blog/published-date",1156678198),new cljs.core.Keyword("blog","content","blog/content",12798170),new cljs.core.Keyword("blog","orgx-require","blog/orgx-require",-1673054916),new cljs.core.Keyword("blog","modified-date","blog/modified-date",-216271460)],[true,cljs.core.PersistentVector.EMPTY,true,null,true,"/home/void/Projects/imakira.github.io/blogs/note.org",null,null,"($ :div\n    ($ :div {:class \"bg-stone-50 pl-4 py-2 border-l-3 border-rose-500\"}\n      ($ :div {:class \"font-semibold mb-1 text-neutral-600\"} \"TIP\")\n      (...","note",null,"en_US","2026-01-01T13:16:48+08:00","<pre class=\"orgx\">($ :div\n    ($ :div {:class &quot;bg-stone-50 pl-4 py-2 border-l-3 border-rose-500&quot;}\n      ($ :div {:class &quot;font-semibold mb-1 text-neutral-600&quot;} &quot;TIP&quot;)\n      ($ :div (:children post-props))))\n\n</pre>\n",null,"2026-01-01T13:16:48+08:00"]),props], 0))),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__101819 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__101820 = orgx.note.component;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__101820);

try{if(((cljs.core.map_QMARK_(props101818)) || ((props101818 == null)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"UIx component expects a map of props, but instead got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(props101818)))+"\n"+"(clojure.core/or (clojure.core/map? props101818) (clojure.core/nil? props101818))")));
}

return f__39434__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__101819);
}} else {
return f__39434__auto__();
}
});

(orgx.note.component.uix_component_QMARK_ = true);

uix.core.set_display_name(orgx.note.component,"orgx.note/component");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__39357__auto___101828 = globalThis.uix.dev.signature_BANG_();
(sig__39357__auto___101828.cljs$core$IFn$_invoke$arity$4 ? sig__39357__auto___101828.cljs$core$IFn$_invoke$arity$4(orgx.note.component,"",null,null) : sig__39357__auto___101828.call(null,orgx.note.component,"",null,null));

globalThis.uix.dev.register_BANG_(orgx.note.component,orgx.note.component.displayName);

(orgx.note.component.fast_refresh_signature = sig__39357__auto___101828);
} else {
}
} else {
}


//# sourceMappingURL=orgx.note.js.map
