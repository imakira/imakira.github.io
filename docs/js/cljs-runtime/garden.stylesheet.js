goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__5755__auto__ = [];
var len__5749__auto___104605 = arguments.length;
var i__5750__auto___104606 = (0);
while(true){
if((i__5750__auto___104606 < len__5749__auto___104605)){
args__5755__auto__.push((arguments[i__5750__auto___104606]));

var G__104608 = (i__5750__auto___104606 + (1));
i__5750__auto___104606 = G__104608;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__104612__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__104612 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__104613__i = 0, G__104613__a = new Array(arguments.length -  0);
while (G__104613__i < G__104613__a.length) {G__104613__a[G__104613__i] = arguments[G__104613__i + 0]; ++G__104613__i;}
  children = new cljs.core.IndexedSeq(G__104613__a,0,null);
} 
return G__104612__delegate.call(this,children);};
G__104612.cljs$lang$maxFixedArity = 0;
G__104612.cljs$lang$applyTo = (function (arglist__104614){
var children = cljs.core.seq(arglist__104614);
return G__104612__delegate(children);
});
G__104612.cljs$core$IFn$_invoke$arity$variadic = G__104612__delegate;
return G__104612;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq104571){
var G__104572 = cljs.core.first(seq104571);
var seq104571__$1 = cljs.core.next(seq104571);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104572,seq104571__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__104615__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__104615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104616__i = 0, G__104616__a = new Array(arguments.length -  0);
while (G__104616__i < G__104616__a.length) {G__104616__a[G__104616__i] = arguments[G__104616__i + 0]; ++G__104616__i;}
  args = new cljs.core.IndexedSeq(G__104616__a,0,null);
} 
return G__104615__delegate.call(this,args);};
G__104615.cljs$lang$maxFixedArity = 0;
G__104615.cljs$lang$applyTo = (function (arglist__104617){
var args = cljs.core.seq(arglist__104617);
return G__104615__delegate(args);
});
G__104615.cljs$core$IFn$_invoke$arity$variadic = G__104615__delegate;
return G__104615;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__5755__auto__ = [];
var len__5749__auto___104618 = arguments.length;
var i__5750__auto___104619 = (0);
while(true){
if((i__5750__auto___104619 < len__5749__auto___104618)){
args__5755__auto__.push((arguments[i__5750__auto___104619]));

var G__104620 = (i__5750__auto___104619 + (1));
i__5750__auto___104619 = G__104620;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq104579){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq104579));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__104587 = arguments.length;
switch (G__104587) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___104622 = arguments.length;
var i__5750__auto___104623 = (0);
while(true){
if((i__5750__auto___104623 < len__5749__auto___104622)){
args_arr__5774__auto__.push((arguments[i__5750__auto___104623]));

var G__104624 = (i__5750__auto___104623 + (1));
i__5750__auto___104623 = G__104624;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq104585){
var G__104586 = cljs.core.first(seq104585);
var seq104585__$1 = cljs.core.next(seq104585);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104586,seq104585__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__5755__auto__ = [];
var len__5749__auto___104627 = arguments.length;
var i__5750__auto___104628 = (0);
while(true){
if((i__5750__auto___104628 < len__5749__auto___104627)){
args__5755__auto__.push((arguments[i__5750__auto___104628]));

var G__104629 = (i__5750__auto___104628 + (1));
i__5750__auto___104628 = G__104629;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq104590){
var G__104591 = cljs.core.first(seq104590);
var seq104590__$1 = cljs.core.next(seq104590);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104591,seq104590__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__5755__auto__ = [];
var len__5749__auto___104642 = arguments.length;
var i__5750__auto___104643 = (0);
while(true){
if((i__5750__auto___104643 < len__5749__auto___104642)){
args__5755__auto__.push((arguments[i__5750__auto___104643]));

var G__104644 = (i__5750__auto___104643 + (1));
i__5750__auto___104643 = G__104644;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq104597){
var G__104598 = cljs.core.first(seq104597);
var seq104597__$1 = cljs.core.next(seq104597);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104598,seq104597__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__5755__auto__ = [];
var len__5749__auto___104647 = arguments.length;
var i__5750__auto___104648 = (0);
while(true){
if((i__5750__auto___104648 < len__5749__auto___104647)){
args__5755__auto__.push((arguments[i__5750__auto___104648]));

var G__104649 = (i__5750__auto___104648 + (1));
i__5750__auto___104648 = G__104649;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq104600){
var G__104601 = cljs.core.first(seq104600);
var seq104600__$1 = cljs.core.next(seq104600);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104601,seq104600__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
