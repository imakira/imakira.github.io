import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.spec.alpha.js";
import "./goog.string.string.js";
import "./goog.string.stringformat.js";
goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56344){
var map__56349 = p__56344;
var map__56349__$1 = cljs.core.__destructure_map(map__56349);
var m = map__56349__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56378_56653 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56380_56654 = null;
var count__56381_56655 = (0);
var i__56382_56656 = (0);
while(true){
if((i__56382_56656 < count__56381_56655)){
var f_56657 = chunk__56380_56654.cljs$core$IIndexed$_nth$arity$2(null,i__56382_56656);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56657], 0));


var G__56658 = seq__56378_56653;
var G__56659 = chunk__56380_56654;
var G__56660 = count__56381_56655;
var G__56661 = (i__56382_56656 + (1));
seq__56378_56653 = G__56658;
chunk__56380_56654 = G__56659;
count__56381_56655 = G__56660;
i__56382_56656 = G__56661;
continue;
} else {
var temp__5825__auto___56662 = cljs.core.seq(seq__56378_56653);
if(temp__5825__auto___56662){
var seq__56378_56663__$1 = temp__5825__auto___56662;
if(cljs.core.chunked_seq_QMARK_(seq__56378_56663__$1)){
var c__5673__auto___56664 = cljs.core.chunk_first(seq__56378_56663__$1);
var G__56665 = cljs.core.chunk_rest(seq__56378_56663__$1);
var G__56672 = c__5673__auto___56664;
var G__56673 = cljs.core.count(c__5673__auto___56664);
var G__56674 = (0);
seq__56378_56653 = G__56665;
chunk__56380_56654 = G__56672;
count__56381_56655 = G__56673;
i__56382_56656 = G__56674;
continue;
} else {
var f_56675 = cljs.core.first(seq__56378_56663__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56675], 0));


var G__56676 = cljs.core.next(seq__56378_56663__$1);
var G__56677 = null;
var G__56678 = (0);
var G__56679 = (0);
seq__56378_56653 = G__56676;
chunk__56380_56654 = G__56677;
count__56381_56655 = G__56678;
i__56382_56656 = G__56679;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56680 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56680], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56680)))?cljs.core.second(arglists_56680):arglists_56680)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
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
var seq__56420_56684 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56421_56685 = null;
var count__56422_56686 = (0);
var i__56423_56687 = (0);
while(true){
if((i__56423_56687 < count__56422_56686)){
var vec__56470_56688 = chunk__56421_56685.cljs$core$IIndexed$_nth$arity$2(null,i__56423_56687);
var name_56689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56470_56688,(0),null);
var map__56473_56690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56470_56688,(1),null);
var map__56473_56691__$1 = cljs.core.__destructure_map(map__56473_56690);
var doc_56692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56473_56691__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56473_56691__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56689], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56693], 0));

if(cljs.core.truth_(doc_56692)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56692], 0));
} else {
}


var G__56694 = seq__56420_56684;
var G__56695 = chunk__56421_56685;
var G__56696 = count__56422_56686;
var G__56697 = (i__56423_56687 + (1));
seq__56420_56684 = G__56694;
chunk__56421_56685 = G__56695;
count__56422_56686 = G__56696;
i__56423_56687 = G__56697;
continue;
} else {
var temp__5825__auto___56698 = cljs.core.seq(seq__56420_56684);
if(temp__5825__auto___56698){
var seq__56420_56699__$1 = temp__5825__auto___56698;
if(cljs.core.chunked_seq_QMARK_(seq__56420_56699__$1)){
var c__5673__auto___56700 = cljs.core.chunk_first(seq__56420_56699__$1);
var G__56701 = cljs.core.chunk_rest(seq__56420_56699__$1);
var G__56702 = c__5673__auto___56700;
var G__56703 = cljs.core.count(c__5673__auto___56700);
var G__56704 = (0);
seq__56420_56684 = G__56701;
chunk__56421_56685 = G__56702;
count__56422_56686 = G__56703;
i__56423_56687 = G__56704;
continue;
} else {
var vec__56494_56705 = cljs.core.first(seq__56420_56699__$1);
var name_56706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56494_56705,(0),null);
var map__56497_56707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56494_56705,(1),null);
var map__56497_56708__$1 = cljs.core.__destructure_map(map__56497_56707);
var doc_56709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56497_56708__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56497_56708__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56706], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56710], 0));

if(cljs.core.truth_(doc_56709)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56709], 0));
} else {
}


var G__56711 = cljs.core.next(seq__56420_56699__$1);
var G__56712 = null;
var G__56713 = (0);
var G__56714 = (0);
seq__56420_56684 = G__56711;
chunk__56421_56685 = G__56712;
count__56422_56686 = G__56713;
i__56423_56687 = G__56714;
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
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56504 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56505 = null;
var count__56506 = (0);
var i__56507 = (0);
while(true){
if((i__56507 < count__56506)){
var role = chunk__56505.cljs$core$IIndexed$_nth$arity$2(null,i__56507);
var temp__5825__auto___56715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___56715__$1)){
var spec_56717 = temp__5825__auto___56715__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_56717)], 0));
} else {
}


var G__56721 = seq__56504;
var G__56722 = chunk__56505;
var G__56723 = count__56506;
var G__56724 = (i__56507 + (1));
seq__56504 = G__56721;
chunk__56505 = G__56722;
count__56506 = G__56723;
i__56507 = G__56724;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__56504);
if(temp__5825__auto____$1){
var seq__56504__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56504__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__56504__$1);
var G__56725 = cljs.core.chunk_rest(seq__56504__$1);
var G__56726 = c__5673__auto__;
var G__56727 = cljs.core.count(c__5673__auto__);
var G__56728 = (0);
seq__56504 = G__56725;
chunk__56505 = G__56726;
count__56506 = G__56727;
i__56507 = G__56728;
continue;
} else {
var role = cljs.core.first(seq__56504__$1);
var temp__5825__auto___56729__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___56729__$2)){
var spec_56730 = temp__5825__auto___56729__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_56730)], 0));
} else {
}


var G__56731 = cljs.core.next(seq__56504__$1);
var G__56732 = null;
var G__56733 = (0);
var G__56734 = (0);
seq__56504 = G__56731;
chunk__56505 = G__56732;
count__56506 = G__56733;
i__56507 = G__56734;
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
var map__56556 = datafied_throwable;
var map__56556__$1 = cljs.core.__destructure_map(map__56556);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56556__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56556__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56556__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56557 = cljs.core.last(via);
var map__56557__$1 = cljs.core.__destructure_map(map__56557);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56557__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56557__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56557__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56558 = data;
var map__56558__$1 = cljs.core.__destructure_map(map__56558);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56559 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56559__$1 = cljs.core.__destructure_map(map__56559);
var top_data = map__56559__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56560 = phase;
var G__56560__$1 = (((G__56560 instanceof cljs.core.Keyword))?G__56560.fqn:null);
switch (G__56560__$1) {
case "read-source":
var map__56561 = data;
var map__56561__$1 = cljs.core.__destructure_map(map__56561);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56562 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56562__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56562,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56562);
var G__56562__$2 = (cljs.core.truth_((function (){var fexpr__56563 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56563.cljs$core$IFn$_invoke$arity$1 ? fexpr__56563.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56563.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56562__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56562__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56562__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56562__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56564 = top_data;
var G__56564__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56564,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56564);
var G__56564__$2 = (cljs.core.truth_((function (){var fexpr__56566 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56566.cljs$core$IFn$_invoke$arity$1 ? fexpr__56566.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56566.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56564__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56564__$1);
var G__56564__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56564__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56564__$2);
var G__56564__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56564__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56564__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56564__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56564__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56589 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(3),null);
var G__56592 = top_data;
var G__56592__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56592,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56592);
var G__56592__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56592__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56592__$1);
var G__56592__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56592__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56592__$2);
var G__56592__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56592__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56592__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56592__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56592__$4;
}

break;
case "execution":
var vec__56593 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56593,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56593,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56593,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56593,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56549_SHARP_){
var or__5142__auto__ = (p1__56549_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__56596 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56596.cljs$core$IFn$_invoke$arity$1 ? fexpr__56596.cljs$core$IFn$_invoke$arity$1(p1__56549_SHARP_) : fexpr__56596.call(null,p1__56549_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__56597 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56597__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56597,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56597);
var G__56597__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56597__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56597__$1);
var G__56597__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56597__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56597__$2);
var G__56597__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56597__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56597__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56597__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56597__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56560__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56603){
var map__56604 = p__56603;
var map__56604__$1 = cljs.core.__destructure_map(map__56604);
var triage_data = map__56604__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__56605 = phase;
var G__56605__$1 = (((G__56605 instanceof cljs.core.Keyword))?G__56605.fqn:null);
switch (G__56605__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56606 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56607 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__56608 = loc;
var G__56609 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56610_56743 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56611_56744 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56612_56745 = true;
var _STAR_print_fn_STAR__temp_val__56613_56746 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56612_56745);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56613_56746);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56601_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56601_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56611_56744);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56610_56743);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56606,G__56607,G__56608,G__56609) : format.call(null,G__56606,G__56607,G__56608,G__56609));

break;
case "macroexpansion":
var G__56616 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56617 = cause_type;
var G__56618 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__56619 = loc;
var G__56620 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56616,G__56617,G__56618,G__56619,G__56620) : format.call(null,G__56616,G__56617,G__56618,G__56619,G__56620));

break;
case "compile-syntax-check":
var G__56621 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56622 = cause_type;
var G__56623 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__56624 = loc;
var G__56625 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56621,G__56622,G__56623,G__56624,G__56625) : format.call(null,G__56621,G__56622,G__56623,G__56624,G__56625));

break;
case "compilation":
var G__56626 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56627 = cause_type;
var G__56628 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__56629 = loc;
var G__56630 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56626,G__56627,G__56628,G__56629,G__56630) : format.call(null,G__56626,G__56627,G__56628,G__56629,G__56630));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56633 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56634 = symbol;
var G__56635 = loc;
var G__56636 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56637_56747 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56638_56748 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56639_56749 = true;
var _STAR_print_fn_STAR__temp_val__56640_56750 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56639_56749);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56640_56750);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56602_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56602_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56638_56748);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56637_56747);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56633,G__56634,G__56635,G__56636) : format.call(null,G__56633,G__56634,G__56635,G__56636));
} else {
var G__56641 = "Execution error%s at %s(%s).\n%s\n";
var G__56642 = cause_type;
var G__56643 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__56644 = loc;
var G__56645 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56641,G__56642,G__56643,G__56644,G__56645) : format.call(null,G__56641,G__56642,G__56643,G__56644,G__56645));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56605__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
