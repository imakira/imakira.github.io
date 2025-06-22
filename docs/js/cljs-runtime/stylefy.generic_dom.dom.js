goog.provide('stylefy.generic_dom.dom');
stylefy.generic_dom.dom.styles_in_dom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.generic_dom.dom.styles_as_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.generic_dom.dom.keyframes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.generic_dom.dom.font_faces_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.generic_dom.dom.custom_tags_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.generic_dom.dom.custom_classes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.generic_dom.dom.style_by_hash = (function stylefy$generic_dom$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.generic_dom.dom.styles_as_css),style_hash);
} else {
return null;
}
});
stylefy.generic_dom.dom.update_style_tags_BANG_ = (function stylefy$generic_dom$dom$update_style_tags_BANG_(node_stylefy,node_stylefy_constant){
var styles_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),stylefy.generic_dom.dom.style_by_hash),cljs.core.keys(cljs.core.deref(stylefy.generic_dom.dom.styles_as_css)));
var keyframes_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.vals(cljs.core.deref(stylefy.generic_dom.dom.keyframes_in_use)));
var font_faces_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.generic_dom.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.generic_dom.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.generic_dom.dom.custom_classes_in_use));
var new_style_constant_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(font_faces_in_use,keyframes_in_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_tags_in_use,custom_classes_in_use], 0)));
var new_style_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,styles_in_css);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dommy.core.text(node_stylefy_constant),new_style_constant_css)){
} else {
dommy.core.set_text_BANG_(node_stylefy_constant,new_style_constant_css);
}

return dommy.core.set_text_BANG_(node_stylefy,new_style_css);
});
stylefy.generic_dom.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$generic_dom$dom$mark_all_styles_added_in_dom_BANG_(){
var seq__46851 = cljs.core.seq(cljs.core.keys(cljs.core.deref(stylefy.generic_dom.dom.styles_in_dom)));
var chunk__46852 = null;
var count__46853 = (0);
var i__46854 = (0);
while(true){
if((i__46854 < count__46853)){
var style_hash = chunk__46852.cljs$core$IIndexed$_nth$arity$2(null, i__46854);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.generic_dom.dom.styles_in_dom),style_hash),true);


var G__46972 = seq__46851;
var G__46973 = chunk__46852;
var G__46974 = count__46853;
var G__46975 = (i__46854 + (1));
seq__46851 = G__46972;
chunk__46852 = G__46973;
count__46853 = G__46974;
i__46854 = G__46975;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46851);
if(temp__5823__auto__){
var seq__46851__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46851__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46851__$1);
var G__46982 = cljs.core.chunk_rest(seq__46851__$1);
var G__46983 = c__5525__auto__;
var G__46984 = cljs.core.count(c__5525__auto__);
var G__46985 = (0);
seq__46851 = G__46982;
chunk__46852 = G__46983;
count__46853 = G__46984;
i__46854 = G__46985;
continue;
} else {
var style_hash = cljs.core.first(seq__46851__$1);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.generic_dom.dom.styles_in_dom),style_hash),true);


var G__46987 = cljs.core.next(seq__46851__$1);
var G__46988 = null;
var G__46989 = (0);
var G__46990 = (0);
seq__46851 = G__46987;
chunk__46852 = G__46988;
count__46853 = G__46989;
i__46854 = G__46990;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.generic_dom.dom.update_dom = (function stylefy$generic_dom$dom$update_dom(){
var node_stylefy = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
var node_stylefy_constant = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
if(cljs.core.truth_((function (){var and__5000__auto__ = node_stylefy;
if(cljs.core.truth_(and__5000__auto__)){
return node_stylefy_constant;
} else {
return and__5000__auto__;
}
})())){
stylefy.generic_dom.dom.update_style_tags_BANG_(node_stylefy,node_stylefy_constant);

try{stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.generic_dom.dom.styles_as_css),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
}catch (e46867){var e_46992 = e46867;
stylefy.impl.log.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46992)].join(''));

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.generic_dom.dom.mark_all_styles_added_in_dom_BANG_();
} else {
return stylefy.impl.log.error("stylefy is unable to find the required <style> tags!");
}
});
stylefy.generic_dom.dom.load_cache = (function stylefy$generic_dom$dom$load_cache(){
var temp__5823__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5823__auto__)){
var cached_styles = temp__5823__auto__;
cljs.core.reset_BANG_(stylefy.generic_dom.dom.styles_as_css,(function (){var or__5002__auto__ = cached_styles;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return cljs.core.reset_BANG_(stylefy.generic_dom.dom.styles_in_dom,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46868_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__46868_SHARP_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false)]);
}),cljs.core.keys(cached_styles))));
} else {
return null;
}
});
stylefy.generic_dom.dom.add_style = (function stylefy$generic_dom$dom$add_style(p__46869){
var map__46870 = p__46869;
var map__46870__$1 = cljs.core.__destructure_map(map__46870);
var _style = map__46870__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46870__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46870__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(css)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","css"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),css], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.generic_dom.dom.styles_as_css,cljs.core.assoc,hash,style_to_be_saved);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.generic_dom.dom.styles_in_dom,cljs.core.assoc,hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true));

return stylefy.generic_dom.dom.update_dom();
});
stylefy.generic_dom.dom.style_in_dom_QMARK_ = (function stylefy$generic_dom$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$(cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.generic_dom.dom.styles_in_dom),style_hash)));
});
stylefy.generic_dom.dom.add_keyframes = (function stylefy$generic_dom$dom$add_keyframes(identifier,keyframes_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.generic_dom.dom.keyframes_in_use,cljs.core.assoc,identifier,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),keyframes_as_css], null));

stylefy.generic_dom.dom.update_dom();

return null;
});
stylefy.generic_dom.dom.add_font_face = (function stylefy$generic_dom$dom$add_font_face(font_faces_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.generic_dom.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),font_faces_as_css], null));

stylefy.generic_dom.dom.update_dom();

return null;
});
stylefy.generic_dom.dom.add_tag = (function stylefy$generic_dom$dom$add_tag(tag_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.generic_dom.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),tag_css], null));

stylefy.generic_dom.dom.update_dom();

return null;
});
stylefy.generic_dom.dom.add_class = (function stylefy$generic_dom$dom$add_class(class_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.generic_dom.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),class_as_css], null));

stylefy.generic_dom.dom.update_dom();

return null;
});
stylefy.generic_dom.dom.load_uninitialised_styles = (function stylefy$generic_dom$dom$load_uninitialised_styles(uninitialised_styles){
var seq__46871_46993 = cljs.core.seq(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__46872_46994 = null;
var count__46873_46995 = (0);
var i__46874_46996 = (0);
while(true){
if((i__46874_46996 < count__46873_46995)){
var tag_46997 = chunk__46872_46994.cljs$core$IIndexed$_nth$arity$2(null, i__46874_46996);
stylefy.generic_dom.dom.add_tag(tag_46997);


var G__46998 = seq__46871_46993;
var G__46999 = chunk__46872_46994;
var G__47000 = count__46873_46995;
var G__47001 = (i__46874_46996 + (1));
seq__46871_46993 = G__46998;
chunk__46872_46994 = G__46999;
count__46873_46995 = G__47000;
i__46874_46996 = G__47001;
continue;
} else {
var temp__5823__auto___47002 = cljs.core.seq(seq__46871_46993);
if(temp__5823__auto___47002){
var seq__46871_47003__$1 = temp__5823__auto___47002;
if(cljs.core.chunked_seq_QMARK_(seq__46871_47003__$1)){
var c__5525__auto___47004 = cljs.core.chunk_first(seq__46871_47003__$1);
var G__47005 = cljs.core.chunk_rest(seq__46871_47003__$1);
var G__47006 = c__5525__auto___47004;
var G__47007 = cljs.core.count(c__5525__auto___47004);
var G__47008 = (0);
seq__46871_46993 = G__47005;
chunk__46872_46994 = G__47006;
count__46873_46995 = G__47007;
i__46874_46996 = G__47008;
continue;
} else {
var tag_47009 = cljs.core.first(seq__46871_47003__$1);
stylefy.generic_dom.dom.add_tag(tag_47009);


var G__47010 = cljs.core.next(seq__46871_47003__$1);
var G__47011 = null;
var G__47012 = (0);
var G__47013 = (0);
seq__46871_46993 = G__47010;
chunk__46872_46994 = G__47011;
count__46873_46995 = G__47012;
i__46874_46996 = G__47013;
continue;
}
} else {
}
}
break;
}

var seq__46875_47014 = cljs.core.seq(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__46876_47015 = null;
var count__46877_47016 = (0);
var i__46878_47017 = (0);
while(true){
if((i__46878_47017 < count__46877_47016)){
var class_47018 = chunk__46876_47015.cljs$core$IIndexed$_nth$arity$2(null, i__46878_47017);
stylefy.generic_dom.dom.add_class(class_47018);


var G__47019 = seq__46875_47014;
var G__47020 = chunk__46876_47015;
var G__47021 = count__46877_47016;
var G__47022 = (i__46878_47017 + (1));
seq__46875_47014 = G__47019;
chunk__46876_47015 = G__47020;
count__46877_47016 = G__47021;
i__46878_47017 = G__47022;
continue;
} else {
var temp__5823__auto___47023 = cljs.core.seq(seq__46875_47014);
if(temp__5823__auto___47023){
var seq__46875_47025__$1 = temp__5823__auto___47023;
if(cljs.core.chunked_seq_QMARK_(seq__46875_47025__$1)){
var c__5525__auto___47027 = cljs.core.chunk_first(seq__46875_47025__$1);
var G__47028 = cljs.core.chunk_rest(seq__46875_47025__$1);
var G__47029 = c__5525__auto___47027;
var G__47030 = cljs.core.count(c__5525__auto___47027);
var G__47031 = (0);
seq__46875_47014 = G__47028;
chunk__46876_47015 = G__47029;
count__46877_47016 = G__47030;
i__46878_47017 = G__47031;
continue;
} else {
var class_47032 = cljs.core.first(seq__46875_47025__$1);
stylefy.generic_dom.dom.add_class(class_47032);


var G__47033 = cljs.core.next(seq__46875_47025__$1);
var G__47034 = null;
var G__47035 = (0);
var G__47036 = (0);
seq__46875_47014 = G__47033;
chunk__46876_47015 = G__47034;
count__46877_47016 = G__47035;
i__46878_47017 = G__47036;
continue;
}
} else {
}
}
break;
}

var seq__46879_47037 = cljs.core.seq(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__46880_47038 = null;
var count__46881_47039 = (0);
var i__46882_47040 = (0);
while(true){
if((i__46882_47040 < count__46881_47039)){
var vec__46891_47041 = chunk__46880_47038.cljs$core$IIndexed$_nth$arity$2(null, i__46882_47040);
var identifier_47042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46891_47041,(0),null);
var keyframes_47043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46891_47041,(1),null);
stylefy.generic_dom.dom.add_keyframes(identifier_47042,keyframes_47043);


var G__47044 = seq__46879_47037;
var G__47045 = chunk__46880_47038;
var G__47046 = count__46881_47039;
var G__47047 = (i__46882_47040 + (1));
seq__46879_47037 = G__47044;
chunk__46880_47038 = G__47045;
count__46881_47039 = G__47046;
i__46882_47040 = G__47047;
continue;
} else {
var temp__5823__auto___47048 = cljs.core.seq(seq__46879_47037);
if(temp__5823__auto___47048){
var seq__46879_47049__$1 = temp__5823__auto___47048;
if(cljs.core.chunked_seq_QMARK_(seq__46879_47049__$1)){
var c__5525__auto___47050 = cljs.core.chunk_first(seq__46879_47049__$1);
var G__47051 = cljs.core.chunk_rest(seq__46879_47049__$1);
var G__47052 = c__5525__auto___47050;
var G__47053 = cljs.core.count(c__5525__auto___47050);
var G__47054 = (0);
seq__46879_47037 = G__47051;
chunk__46880_47038 = G__47052;
count__46881_47039 = G__47053;
i__46882_47040 = G__47054;
continue;
} else {
var vec__46896_47055 = cljs.core.first(seq__46879_47049__$1);
var identifier_47056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46896_47055,(0),null);
var keyframes_47057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46896_47055,(1),null);
stylefy.generic_dom.dom.add_keyframes(identifier_47056,keyframes_47057);


var G__47058 = cljs.core.next(seq__46879_47049__$1);
var G__47059 = null;
var G__47060 = (0);
var G__47061 = (0);
seq__46879_47037 = G__47058;
chunk__46880_47038 = G__47059;
count__46881_47039 = G__47060;
i__46882_47040 = G__47061;
continue;
}
} else {
}
}
break;
}

var seq__46899_47062 = cljs.core.seq(new cljs.core.Keyword(null,"font-face","font-face",-504453235).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__46900_47063 = null;
var count__46901_47064 = (0);
var i__46902_47065 = (0);
while(true){
if((i__46902_47065 < count__46901_47064)){
var font_face_47066 = chunk__46900_47063.cljs$core$IIndexed$_nth$arity$2(null, i__46902_47065);
stylefy.generic_dom.dom.add_font_face(font_face_47066);


var G__47067 = seq__46899_47062;
var G__47068 = chunk__46900_47063;
var G__47069 = count__46901_47064;
var G__47070 = (i__46902_47065 + (1));
seq__46899_47062 = G__47067;
chunk__46900_47063 = G__47068;
count__46901_47064 = G__47069;
i__46902_47065 = G__47070;
continue;
} else {
var temp__5823__auto___47071 = cljs.core.seq(seq__46899_47062);
if(temp__5823__auto___47071){
var seq__46899_47072__$1 = temp__5823__auto___47071;
if(cljs.core.chunked_seq_QMARK_(seq__46899_47072__$1)){
var c__5525__auto___47073 = cljs.core.chunk_first(seq__46899_47072__$1);
var G__47074 = cljs.core.chunk_rest(seq__46899_47072__$1);
var G__47075 = c__5525__auto___47073;
var G__47076 = cljs.core.count(c__5525__auto___47073);
var G__47077 = (0);
seq__46899_47062 = G__47074;
chunk__46900_47063 = G__47075;
count__46901_47064 = G__47076;
i__46902_47065 = G__47077;
continue;
} else {
var font_face_47078 = cljs.core.first(seq__46899_47072__$1);
stylefy.generic_dom.dom.add_font_face(font_face_47078);


var G__47079 = cljs.core.next(seq__46899_47072__$1);
var G__47080 = null;
var G__47081 = (0);
var G__47082 = (0);
seq__46899_47062 = G__47079;
chunk__46900_47063 = G__47080;
count__46901_47064 = G__47081;
i__46902_47065 = G__47082;
continue;
}
} else {
}
}
break;
}

var seq__46903 = cljs.core.seq(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__46904 = null;
var count__46905 = (0);
var i__46906 = (0);
while(true){
if((i__46906 < count__46905)){
var style = chunk__46904.cljs$core$IIndexed$_nth$arity$2(null, i__46906);
stylefy.generic_dom.dom.add_style(style);


var G__47083 = seq__46903;
var G__47084 = chunk__46904;
var G__47085 = count__46905;
var G__47086 = (i__46906 + (1));
seq__46903 = G__47083;
chunk__46904 = G__47084;
count__46905 = G__47085;
i__46906 = G__47086;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46903);
if(temp__5823__auto__){
var seq__46903__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46903__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46903__$1);
var G__47087 = cljs.core.chunk_rest(seq__46903__$1);
var G__47088 = c__5525__auto__;
var G__47089 = cljs.core.count(c__5525__auto__);
var G__47090 = (0);
seq__46903 = G__47087;
chunk__46904 = G__47088;
count__46905 = G__47089;
i__46906 = G__47090;
continue;
} else {
var style = cljs.core.first(seq__46903__$1);
stylefy.generic_dom.dom.add_style(style);


var G__47091 = cljs.core.next(seq__46903__$1);
var G__47092 = null;
var G__47093 = (0);
var G__47094 = (0);
seq__46903 = G__47091;
chunk__46904 = G__47092;
count__46905 = G__47093;
i__46906 = G__47094;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {stylefy.impl.dom.Dom}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
stylefy.generic_dom.dom.GenericDom = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k46916,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__46920 = k46916;
switch (G__46920) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46916,else__5303__auto__);

}
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__46921){
var vec__46922 = p__46921;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46922,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46922,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#stylefy.generic-dom.dom.GenericDom{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46915){
var self__ = this;
var G__46915__$1 = this;
return (new cljs.core.RecordIter((0),G__46915__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new stylefy.generic_dom.dom.GenericDom(self__.__meta,self__.__extmap,self__.__hash));
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-84313390 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46917,other46918){
var self__ = this;
var this46917__$1 = this;
return (((!((other46918 == null)))) && ((((this46917__$1.constructor === other46918.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46917__$1.__extmap,other46918.__extmap)))));
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$ = cljs.core.PROTOCOL_SENTINEL);

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$add_tag$arity$2 = (function (this$,tag_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.add_tag(tag_as_css);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$add_style$arity$2 = (function (this$,style){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.add_style(style);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.style_in_dom_QMARK_(style_hash);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$add_font_face$arity$2 = (function (this$,font_face_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.add_font_face(font_face_as_css);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$load_cache$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.load_cache();
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$add_keyframes$arity$3 = (function (this$,identifier,keyframes_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.add_keyframes(identifier,keyframes_as_css);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$update_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.update_dom();
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.update_dom();
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$load_uninitialised_styles$arity$2 = (function (this$,uninitialised_styles){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.load_uninitialised_styles(uninitialised_styles);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$style_by_hash$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.style_by_hash(style_hash);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.stylefy$impl$dom$Dom$add_class$arity$2 = (function (this$,class_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.generic_dom.dom.add_class(class_as_css);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new stylefy.generic_dom.dom.GenericDom(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k46916){
var self__ = this;
var this__5307__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k46916);
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__46915){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__46942 = cljs.core.keyword_identical_QMARK_;
var expr__46943 = k__5309__auto__;
return (new stylefy.generic_dom.dom.GenericDom(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__46915),null));
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__46915){
var self__ = this;
var this__5299__auto____$1 = this;
return (new stylefy.generic_dom.dom.GenericDom(G__46915,self__.__extmap,self__.__hash));
}));

(stylefy.generic_dom.dom.GenericDom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(stylefy.generic_dom.dom.GenericDom.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(stylefy.generic_dom.dom.GenericDom.cljs$lang$type = true);

(stylefy.generic_dom.dom.GenericDom.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"stylefy.generic-dom.dom/GenericDom",null,(1),null));
}));

(stylefy.generic_dom.dom.GenericDom.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"stylefy.generic-dom.dom/GenericDom");
}));

/**
 * Positional factory function for stylefy.generic-dom.dom/GenericDom.
 */
stylefy.generic_dom.dom.__GT_GenericDom = (function stylefy$generic_dom$dom$__GT_GenericDom(){
return (new stylefy.generic_dom.dom.GenericDom(null,null,null));
});

/**
 * Factory function for stylefy.generic-dom.dom/GenericDom, taking a map of keywords to field values.
 */
stylefy.generic_dom.dom.map__GT_GenericDom = (function stylefy$generic_dom$dom$map__GT_GenericDom(G__46919){
var extmap__5342__auto__ = (function (){var G__46947 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__46919);
if(cljs.core.record_QMARK_(G__46919)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46947);
} else {
return G__46947;
}
})();
return (new stylefy.generic_dom.dom.GenericDom(null,cljs.core.not_empty(extmap__5342__auto__),null));
});


//# sourceMappingURL=stylefy.generic_dom.dom.js.map
