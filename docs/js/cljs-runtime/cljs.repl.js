goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__100317){
var map__100318 = p__100317;
var map__100318__$1 = cljs.core.__destructure_map(map__100318);
var m = map__100318__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100318__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__100319_100555 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__100320_100556 = null;
var count__100321_100557 = (0);
var i__100322_100558 = (0);
while(true){
if((i__100322_100558 < count__100321_100557)){
var f_100559 = chunk__100320_100556.cljs$core$IIndexed$_nth$arity$2(null,i__100322_100558);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_100559], 0));


var G__100562 = seq__100319_100555;
var G__100563 = chunk__100320_100556;
var G__100564 = count__100321_100557;
var G__100565 = (i__100322_100558 + (1));
seq__100319_100555 = G__100562;
chunk__100320_100556 = G__100563;
count__100321_100557 = G__100564;
i__100322_100558 = G__100565;
continue;
} else {
var temp__5823__auto___100568 = cljs.core.seq(seq__100319_100555);
if(temp__5823__auto___100568){
var seq__100319_100569__$1 = temp__5823__auto___100568;
if(cljs.core.chunked_seq_QMARK_(seq__100319_100569__$1)){
var c__5548__auto___100570 = cljs.core.chunk_first(seq__100319_100569__$1);
var G__100571 = cljs.core.chunk_rest(seq__100319_100569__$1);
var G__100572 = c__5548__auto___100570;
var G__100573 = cljs.core.count(c__5548__auto___100570);
var G__100574 = (0);
seq__100319_100555 = G__100571;
chunk__100320_100556 = G__100572;
count__100321_100557 = G__100573;
i__100322_100558 = G__100574;
continue;
} else {
var f_100575 = cljs.core.first(seq__100319_100569__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_100575], 0));


var G__100576 = cljs.core.next(seq__100319_100569__$1);
var G__100577 = null;
var G__100578 = (0);
var G__100579 = (0);
seq__100319_100555 = G__100576;
chunk__100320_100556 = G__100577;
count__100321_100557 = G__100578;
i__100322_100558 = G__100579;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_100580 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_100580], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_100580)))?cljs.core.second(arglists_100580):arglists_100580)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__100329_100582 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__100330_100583 = null;
var count__100331_100584 = (0);
var i__100332_100585 = (0);
while(true){
if((i__100332_100585 < count__100331_100584)){
var vec__100342_100586 = chunk__100330_100583.cljs$core$IIndexed$_nth$arity$2(null,i__100332_100585);
var name_100587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100342_100586,(0),null);
var map__100345_100588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100342_100586,(1),null);
var map__100345_100589__$1 = cljs.core.__destructure_map(map__100345_100588);
var doc_100590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100345_100589__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_100591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100345_100589__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_100587], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_100591], 0));

if(cljs.core.truth_(doc_100590)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_100590], 0));
} else {
}


var G__100592 = seq__100329_100582;
var G__100593 = chunk__100330_100583;
var G__100594 = count__100331_100584;
var G__100595 = (i__100332_100585 + (1));
seq__100329_100582 = G__100592;
chunk__100330_100583 = G__100593;
count__100331_100584 = G__100594;
i__100332_100585 = G__100595;
continue;
} else {
var temp__5823__auto___100596 = cljs.core.seq(seq__100329_100582);
if(temp__5823__auto___100596){
var seq__100329_100597__$1 = temp__5823__auto___100596;
if(cljs.core.chunked_seq_QMARK_(seq__100329_100597__$1)){
var c__5548__auto___100598 = cljs.core.chunk_first(seq__100329_100597__$1);
var G__100599 = cljs.core.chunk_rest(seq__100329_100597__$1);
var G__100600 = c__5548__auto___100598;
var G__100601 = cljs.core.count(c__5548__auto___100598);
var G__100602 = (0);
seq__100329_100582 = G__100599;
chunk__100330_100583 = G__100600;
count__100331_100584 = G__100601;
i__100332_100585 = G__100602;
continue;
} else {
var vec__100348_100603 = cljs.core.first(seq__100329_100597__$1);
var name_100604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100348_100603,(0),null);
var map__100351_100605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100348_100603,(1),null);
var map__100351_100606__$1 = cljs.core.__destructure_map(map__100351_100605);
var doc_100607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100351_100606__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_100608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100351_100606__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_100604], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_100608], 0));

if(cljs.core.truth_(doc_100607)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_100607], 0));
} else {
}


var G__100609 = cljs.core.next(seq__100329_100597__$1);
var G__100610 = null;
var G__100611 = (0);
var G__100612 = (0);
seq__100329_100582 = G__100609;
chunk__100330_100583 = G__100610;
count__100331_100584 = G__100611;
i__100332_100585 = G__100612;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__100358 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__100359 = null;
var count__100360 = (0);
var i__100361 = (0);
while(true){
if((i__100361 < count__100360)){
var role = chunk__100359.cljs$core$IIndexed$_nth$arity$2(null,i__100361);
var temp__5823__auto___100613__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___100613__$1)){
var spec_100614 = temp__5823__auto___100613__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_100614)], 0));
} else {
}


var G__100615 = seq__100358;
var G__100616 = chunk__100359;
var G__100617 = count__100360;
var G__100618 = (i__100361 + (1));
seq__100358 = G__100615;
chunk__100359 = G__100616;
count__100360 = G__100617;
i__100361 = G__100618;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__100358);
if(temp__5823__auto____$1){
var seq__100358__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__100358__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__100358__$1);
var G__100619 = cljs.core.chunk_rest(seq__100358__$1);
var G__100620 = c__5548__auto__;
var G__100621 = cljs.core.count(c__5548__auto__);
var G__100622 = (0);
seq__100358 = G__100619;
chunk__100359 = G__100620;
count__100360 = G__100621;
i__100361 = G__100622;
continue;
} else {
var role = cljs.core.first(seq__100358__$1);
var temp__5823__auto___100623__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___100623__$2)){
var spec_100624 = temp__5823__auto___100623__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_100624)], 0));
} else {
}


var G__100625 = cljs.core.next(seq__100358__$1);
var G__100626 = null;
var G__100627 = (0);
var G__100628 = (0);
seq__100358 = G__100625;
chunk__100359 = G__100626;
count__100360 = G__100627;
i__100361 = G__100628;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__100388 = datafied_throwable;
var map__100388__$1 = cljs.core.__destructure_map(map__100388);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100388__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100388__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__100388__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__100389 = cljs.core.last(via);
var map__100389__$1 = cljs.core.__destructure_map(map__100389);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100389__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100389__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100389__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__100390 = data;
var map__100390__$1 = cljs.core.__destructure_map(map__100390);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100390__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100390__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100390__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__100391 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__100391__$1 = cljs.core.__destructure_map(map__100391);
var top_data = map__100391__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100391__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__100399 = phase;
var G__100399__$1 = (((G__100399 instanceof cljs.core.Keyword))?G__100399.fqn:null);
switch (G__100399__$1) {
case "read-source":
var map__100400 = data;
var map__100400__$1 = cljs.core.__destructure_map(map__100400);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100400__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100400__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__100407 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__100407__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100407,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__100407);
var G__100407__$2 = (cljs.core.truth_((function (){var fexpr__100417 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__100417.cljs$core$IFn$_invoke$arity$1 ? fexpr__100417.cljs$core$IFn$_invoke$arity$1(source) : fexpr__100417.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__100407__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__100407__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100407__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__100407__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__100423 = top_data;
var G__100423__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100423,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__100423);
var G__100423__$2 = (cljs.core.truth_((function (){var fexpr__100432 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__100432.cljs$core$IFn$_invoke$arity$1 ? fexpr__100432.cljs$core$IFn$_invoke$arity$1(source) : fexpr__100432.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__100423__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__100423__$1);
var G__100423__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100423__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__100423__$2);
var G__100423__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100423__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__100423__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100423__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__100423__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__100447 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100447,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100447,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100447,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100447,(3),null);
var G__100450 = top_data;
var G__100450__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100450,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__100450);
var G__100450__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100450__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__100450__$1);
var G__100450__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100450__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__100450__$2);
var G__100450__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100450__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__100450__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100450__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__100450__$4;
}

break;
case "execution":
var vec__100472 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100472,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100472,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100472,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100472,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__100387_SHARP_){
var or__5025__auto__ = (p1__100387_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__100479 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__100479.cljs$core$IFn$_invoke$arity$1 ? fexpr__100479.cljs$core$IFn$_invoke$arity$1(p1__100387_SHARP_) : fexpr__100479.call(null,p1__100387_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__100485 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__100485__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100485,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__100485);
var G__100485__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100485__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__100485__$1);
var G__100485__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100485__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__100485__$2);
var G__100485__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100485__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__100485__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100485__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__100485__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__100399__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__100499){
var map__100500 = p__100499;
var map__100500__$1 = cljs.core.__destructure_map(map__100500);
var triage_data = map__100500__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100500__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100500__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100500__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100500__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100500__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100500__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100500__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__100506 = phase;
var G__100506__$1 = (((G__100506 instanceof cljs.core.Keyword))?G__100506.fqn:null);
switch (G__100506__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__100507 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__100508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__100509 = loc;
var G__100510 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__100512_100680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__100513_100681 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__100514_100682 = true;
var _STAR_print_fn_STAR__temp_val__100515_100683 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__100514_100682);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__100515_100683);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__100496_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__100496_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__100513_100681);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__100512_100680);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__100507,G__100508,G__100509,G__100510) : format.call(null,G__100507,G__100508,G__100509,G__100510));

break;
case "macroexpansion":
var G__100517 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__100518 = cause_type;
var G__100519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__100520 = loc;
var G__100521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__100517,G__100518,G__100519,G__100520,G__100521) : format.call(null,G__100517,G__100518,G__100519,G__100520,G__100521));

break;
case "compile-syntax-check":
var G__100523 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__100524 = cause_type;
var G__100525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__100526 = loc;
var G__100527 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__100523,G__100524,G__100525,G__100526,G__100527) : format.call(null,G__100523,G__100524,G__100525,G__100526,G__100527));

break;
case "compilation":
var G__100528 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__100529 = cause_type;
var G__100530 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__100531 = loc;
var G__100532 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__100528,G__100529,G__100530,G__100531,G__100532) : format.call(null,G__100528,G__100529,G__100530,G__100531,G__100532));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__100533 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__100534 = symbol;
var G__100535 = loc;
var G__100536 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__100537_100697 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__100538_100698 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__100539_100699 = true;
var _STAR_print_fn_STAR__temp_val__100540_100700 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__100539_100699);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__100540_100700);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__100497_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__100497_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__100538_100698);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__100537_100697);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__100533,G__100534,G__100535,G__100536) : format.call(null,G__100533,G__100534,G__100535,G__100536));
} else {
var G__100542 = "Execution error%s at %s(%s).\n%s\n";
var G__100543 = cause_type;
var G__100544 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__100545 = loc;
var G__100546 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__100542,G__100543,G__100544,G__100545,G__100546) : format.call(null,G__100542,G__100543,G__100544,G__100545,G__100546));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__100506__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
