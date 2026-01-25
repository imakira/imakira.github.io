import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./reitit.exception.js";
goog.provide('reitit.trie');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
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
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k74465,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__74485 = k74465;
var G__74485__$1 = (((G__74485 instanceof cljs.core.Keyword))?G__74485.fqn:null);
switch (G__74485__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74465,else__5451__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__74493){
var vec__74494 = p__74493;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74494,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74494,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#reitit.trie.Wild{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74464){
var self__ = this;
var G__74464__$1 = this;
return (new cljs.core.RecordIter((0),G__74464__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74466,other74467){
var self__ = this;
var this74466__$1 = this;
return (((!((other74467 == null)))) && ((((this74466__$1.constructor === other74467.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74466__$1.value,other74467.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74466__$1.__extmap,other74467.__extmap)))))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k74465){
var self__ = this;
var this__5455__auto____$1 = this;
var G__74522 = k74465;
var G__74522__$1 = (((G__74522 instanceof cljs.core.Keyword))?G__74522.fqn:null);
switch (G__74522__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74465);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__74464){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__74525 = cljs.core.keyword_identical_QMARK_;
var expr__74526 = k__5457__auto__;
if(cljs.core.truth_((pred__74525.cljs$core$IFn$_invoke$arity$2 ? pred__74525.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__74526) : pred__74525.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__74526)))){
return (new reitit.trie.Wild(G__74464,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__74464),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__74464){
var self__ = this;
var this__5447__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__74464,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__74471){
var extmap__5490__auto__ = (function (){var G__74578 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__74471,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__74471)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74578);
} else {
return G__74578;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__74471),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k74585,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__74597 = k74585;
var G__74597__$1 = (((G__74597 instanceof cljs.core.Keyword))?G__74597.fqn:null);
switch (G__74597__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74585,else__5451__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__74602){
var vec__74603 = p__74602;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74603,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74603,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#reitit.trie.CatchAll{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74584){
var self__ = this;
var G__74584__$1 = this;
return (new cljs.core.RecordIter((0),G__74584__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74586,other74587){
var self__ = this;
var this74586__$1 = this;
return (((!((other74587 == null)))) && ((((this74586__$1.constructor === other74587.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74586__$1.value,other74587.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74586__$1.__extmap,other74587.__extmap)))))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k74585){
var self__ = this;
var this__5455__auto____$1 = this;
var G__74698 = k74585;
var G__74698__$1 = (((G__74698 instanceof cljs.core.Keyword))?G__74698.fqn:null);
switch (G__74698__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74585);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__74584){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__74706 = cljs.core.keyword_identical_QMARK_;
var expr__74707 = k__5457__auto__;
if(cljs.core.truth_((pred__74706.cljs$core$IFn$_invoke$arity$2 ? pred__74706.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__74707) : pred__74706.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__74707)))){
return (new reitit.trie.CatchAll(G__74584,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__74584),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__74584){
var self__ = this;
var this__5447__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__74584,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__74590){
var extmap__5490__auto__ = (function (){var G__74716 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__74590,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__74590)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74716);
} else {
return G__74716;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__74590),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k74725,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__74735 = k74725;
var G__74735__$1 = (((G__74735 instanceof cljs.core.Keyword))?G__74735.fqn:null);
switch (G__74735__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74725,else__5451__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__74741){
var vec__74743 = p__74741;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74743,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74743,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#reitit.trie.Match{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74724){
var self__ = this;
var G__74724__$1 = this;
return (new cljs.core.RecordIter((0),G__74724__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74726,other74727){
var self__ = this;
var this74726__$1 = this;
return (((!((other74727 == null)))) && ((((this74726__$1.constructor === other74727.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74726__$1.params,other74727.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74726__$1.data,other74727.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74726__$1.__extmap,other74727.__extmap)))))))));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k74725){
var self__ = this;
var this__5455__auto____$1 = this;
var G__74759 = k74725;
var G__74759__$1 = (((G__74759 instanceof cljs.core.Keyword))?G__74759.fqn:null);
switch (G__74759__$1) {
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74725);

}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__74724){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__74763 = cljs.core.keyword_identical_QMARK_;
var expr__74764 = k__5457__auto__;
if(cljs.core.truth_((pred__74763.cljs$core$IFn$_invoke$arity$2 ? pred__74763.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__74764) : pred__74763.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__74764)))){
return (new reitit.trie.Match(G__74724,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74763.cljs$core$IFn$_invoke$arity$2 ? pred__74763.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__74764) : pred__74763.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__74764)))){
return (new reitit.trie.Match(self__.params,G__74724,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__74724),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__74724){
var self__ = this;
var this__5447__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__74724,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__74729){
var extmap__5490__auto__ = (function (){var G__74776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74729,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__74729)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74776);
} else {
return G__74776;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__74729),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__74729),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k74788,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__74808 = k74788;
var G__74808__$1 = (((G__74808 instanceof cljs.core.Keyword))?G__74808.fqn:null);
switch (G__74808__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74788,else__5451__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__74816){
var vec__74817 = p__74816;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74817,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74817,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#reitit.trie.Node{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74787){
var self__ = this;
var G__74787__$1 = this;
return (new cljs.core.RecordIter((0),G__74787__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74789,other74790){
var self__ = this;
var this74789__$1 = this;
return (((!((other74790 == null)))) && ((((this74789__$1.constructor === other74790.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74789__$1.children,other74790.children)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74789__$1.wilds,other74790.wilds)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74789__$1.catch_all,other74790.catch_all)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74789__$1.params,other74790.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74789__$1.data,other74790.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74789__$1.__extmap,other74790.__extmap)))))))))))))));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k74788){
var self__ = this;
var this__5455__auto____$1 = this;
var G__74891 = k74788;
var G__74891__$1 = (((G__74891 instanceof cljs.core.Keyword))?G__74891.fqn:null);
switch (G__74891__$1) {
case "children":
case "wilds":
case "catch-all":
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74788);

}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__74787){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__74898 = cljs.core.keyword_identical_QMARK_;
var expr__74899 = k__5457__auto__;
if(cljs.core.truth_((pred__74898.cljs$core$IFn$_invoke$arity$2 ? pred__74898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__74899) : pred__74898.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__74899)))){
return (new reitit.trie.Node(G__74787,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74898.cljs$core$IFn$_invoke$arity$2 ? pred__74898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__74899) : pred__74898.call(null,new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__74899)))){
return (new reitit.trie.Node(self__.children,G__74787,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74898.cljs$core$IFn$_invoke$arity$2 ? pred__74898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__74899) : pred__74898.call(null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__74899)))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__74787,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74898.cljs$core$IFn$_invoke$arity$2 ? pred__74898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__74899) : pred__74898.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__74899)))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__74787,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74898.cljs$core$IFn$_invoke$arity$2 ? pred__74898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__74899) : pred__74898.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__74899)))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__74787,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__74787),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__74787){
var self__ = this;
var this__5447__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__74787,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__74794){
var extmap__5490__auto__ = (function (){var G__74938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74794,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__74794)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74938);
} else {
return G__74938;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__74794),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__74794),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__74794),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__74794),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__74794),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_76024 = (function (this$,i,max,path){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.match[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__5499__auto__.call(null,this$,i,max,path));
} else {
var m__5497__auto__ = (reitit.trie.match["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__5497__auto__.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_76024(this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_76035 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.view[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.trie.view["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_76035(this$);
}
});

var reitit$trie$Matcher$depth$dyn_76039 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.depth[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.trie.depth["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_76039(this$);
}
});

var reitit$trie$Matcher$length$dyn_76044 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.length[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.trie.length["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_76044(this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_76049 = (function (this$,params,data){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__5499__auto__.call(null,this$,params,data));
} else {
var m__5497__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__5497__auto__.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_76049(this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_76055 = (function (this$,path,matcher){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__5499__auto__.call(null,this$,path,matcher));
} else {
var m__5497__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__5497__auto__.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_76055(this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_76063 = (function (this$,key,end,matcher){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__5499__auto__.call(null,this$,key,end,matcher));
} else {
var m__5497__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__5497__auto__.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_76063(this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_76071 = (function (this$,key,params,data){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__5499__auto__.call(null,this$,key,params,data));
} else {
var m__5497__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__5497__auto__.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_76071(this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_76080 = (function (this$,matchers,ordered_QMARK_){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__5499__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__5497__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__5497__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_76080(this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_76082 = (function (this$,matcher){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie._pretty[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5499__auto__.call(null,this$,matcher));
} else {
var m__5497__auto__ = (reitit.trie._pretty["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5497__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_76082(this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_76091 = (function (this$,matcher){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5499__auto__.call(null,this$,matcher));
} else {
var m__5497__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5497__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_76091(this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s1),cljs.core.count(s2));
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__76098 = (i + (1));
i = G__76098;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5823__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5823__auto__)){
var i = temp__5823__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__75230){
var map__75231 = p__75230;
var map__75231__$1 = cljs.core.__destructure_map(map__75231);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75231__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__5140__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__5140__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__5142__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__76121 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__76122 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__76123 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__76121;
from = G__76122;
to = G__76123;
continue;
} else {
var G__76125 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__76126 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__76127 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__76125;
from = G__76126;
to = G__76127;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__5140__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__5142__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__76136 = ss;
var G__76137 = from;
var G__76138 = (to + (1));
ss = G__76136;
from = G__76137;
to = G__76138;
continue;
} else {
var G__76140 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__76141 = cljs.core.long$(to_SINGLEQUOTE_);
var G__76142 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__76140;
from = G__76141;
to = G__76142;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__5140__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__76144 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__76145 = cljs.core.long$(to_SINGLEQUOTE_);
var G__76146 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__76144;
from = G__76145;
to = G__76146;
continue;
} else {
var G__76148 = ss;
var G__76149 = from;
var G__76150 = (to + (1));
ss = G__76148;
from = G__76149;
to = G__76150;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?(""+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value)),(1)))+"}"):(((x instanceof reitit.trie.CatchAll))?(""+"{*"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value)),(1)))+"}"):null)))));
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__75254,p__75255){
var vec__75256 = p__75254;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75256,(0),null);
var p1s = vec__75256;
var vec__75259 = p__75255;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75259,(0),null);
var p2s = vec__75259;
var _split = (function (p){
var temp__5823__auto__ = (function (){var and__5140__auto__ = p;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var i = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__75262){
var vec__75263 = p__75262;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75263,(0),null);
var pps = vec__75263;
var i = (function (){var and__5140__auto__ = p;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = i;
if(cljs.core.truth_(and__5140__auto__)){
return (i > (0));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__75266){
var vec__75267 = p__75266;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75267,(0),null);
var ps = vec__75267;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5823__auto__ = (function (){var and__5140__auto__ = typeof p1 === 'string';
if(and__5140__auto__){
var and__5140__auto____$1 = typeof p2 === 'string';
if(and__5140__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var cp = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__75273 = reitit.trie._slice_start(parts1,parts2);
var vec__75276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75273,(0),null);
var seq__75277 = cljs.core.seq(vec__75276);
var first__75278 = cljs.core.first(seq__75277);
var seq__75277__$1 = cljs.core.next(seq__75277);
var s1 = first__75278;
var ss1 = seq__75277__$1;
var vec__75279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75273,(1),null);
var seq__75280 = cljs.core.seq(vec__75279);
var first__75281 = cljs.core.first(seq__75280);
var seq__75280__$1 = cljs.core.next(seq__75280);
var s2 = first__75281;
var ss2 = seq__75280__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__76177 = reitit.trie._slice_end(s1,ss1);
var G__76178 = reitit.trie._slice_end(s2,ss2);
parts1 = G__76177;
parts2 = G__76178;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__76179 = ss1;
var G__76180 = ss2;
parts1 = G__76179;
parts2 = G__76180;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_(reitit.trie.split_path(path1,opts),reitit.trie.split_path(path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__75291,fp,params,data){
var vec__75292 = p__75291;
var seq__75293 = cljs.core.seq(vec__75292);
var first__75294 = cljs.core.first(seq__75293);
var seq__75293__$1 = cljs.core.next(seq__75293);
var path = first__75294;
var ps = seq__75293__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"data","data",-232669377),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
var G__75300 = (function (){var or__5142__auto__ = n;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__75301 = ps;
var G__75302 = fp;
var G__75303 = params;
var G__75304 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__75300,G__75301,G__75302,G__75303,G__75304) : reitit.trie._insert.call(null,G__75300,G__75301,G__75302,G__75303,G__75304));
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((cljs.core.empty_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__5142__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__75309){
var vec__75310 = p__75309;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75310,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75310,(1),null);
var temp__5823__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5823__auto__)){
var cp = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__75321 = n;
var G__75322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__75323 = fp;
var G__75324 = params;
var G__75325 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__75321,G__75322,G__75323,G__75324,G__75325) : reitit.trie._insert.call(null,G__75321,G__75322,G__75323,G__75324,G__75325));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,((cp).length));
var n_SINGLEQUOTE_ = (function (){var G__75338 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__75339 = ps;
var G__75340 = fp;
var G__75341 = params;
var G__75342 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__75338,G__75339,G__75340,G__75341,G__75342) : reitit.trie._insert.call(null,G__75338,G__75339,G__75340,G__75341,G__75342));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__75343 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__75344 = null;
var G__75345 = null;
var G__75346 = null;
var G__75347 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__75343,G__75344,G__75345,G__75346,G__75347) : reitit.trie._insert.call(null,G__75343,G__75344,G__75345,G__75346,G__75347));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),(function (){var G__75352 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__75353 = ps;
var G__75354 = fp;
var G__75355 = params;
var G__75356 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__75352,G__75353,G__75354,G__75355,G__75356) : reitit.trie._insert.call(null,G__75352,G__75353,G__75354,G__75355,G__75356));
})());
}
})()
))));
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child], 0)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie75399 = (function (meta75382,_,params,data,match,meta75400){
this.meta75382 = meta75382;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta75400 = meta75400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie75399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75401,meta75400__$1){
var self__ = this;
var _75401__$1 = this;
return (new reitit.trie.t_reitit$trie75399(self__.meta75382,self__._,self__.params,self__.data,self__.match,meta75400__$1));
}));

(reitit.trie.t_reitit$trie75399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75401){
var self__ = this;
var _75401__$1 = this;
return self__.meta75400;
}));

(reitit.trie.t_reitit$trie75399.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie75399.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie75399.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie75399.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie75399.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie75399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta75382","meta75382",-1662750713,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie75381","reitit.trie/t_reitit$trie75381",-1517311895,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta75400","meta75400",645783872,null)], null);
}));

(reitit.trie.t_reitit$trie75399.cljs$lang$type = true);

(reitit.trie.t_reitit$trie75399.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie75399");

(reitit.trie.t_reitit$trie75399.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.trie/t_reitit$trie75399");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie75399.
 */
reitit.trie.__GT_t_reitit$trie75399 = (function reitit$trie$__GT_t_reitit$trie75399(meta75382,_,params,data,match,meta75400){
return (new reitit.trie.t_reitit$trie75399(meta75382,_,params,data,match,meta75400));
});



/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie75436 = (function (meta75382,_,path,matcher,size,meta75437){
this.meta75382 = meta75382;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta75437 = meta75437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie75436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75438,meta75437__$1){
var self__ = this;
var _75438__$1 = this;
return (new reitit.trie.t_reitit$trie75436(self__.meta75382,self__._,self__.path,self__.matcher,self__.size,meta75437__$1));
}));

(reitit.trie.t_reitit$trie75436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75438){
var self__ = this;
var _75438__$1 = this;
return self__.meta75437;
}));

(reitit.trie.t_reitit$trie75436.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie75436.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__76251 = (j + (1));
j = G__76251;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie75436.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie75436.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie75436.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
}));

(reitit.trie.t_reitit$trie75436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta75382","meta75382",-1662750713,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie75381","reitit.trie/t_reitit$trie75381",-1517311895,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta75437","meta75437",-1762703653,null)], null);
}));

(reitit.trie.t_reitit$trie75436.cljs$lang$type = true);

(reitit.trie.t_reitit$trie75436.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie75436");

(reitit.trie.t_reitit$trie75436.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.trie/t_reitit$trie75436");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie75436.
 */
reitit.trie.__GT_t_reitit$trie75436 = (function reitit$trie$__GT_t_reitit$trie75436(meta75382,_,path,matcher,size,meta75437){
return (new reitit.trie.t_reitit$trie75436(meta75382,_,path,matcher,size,meta75437));
});



/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie75484 = (function (meta75382,_,key,end,matcher,meta75485){
this.meta75382 = meta75382;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta75485 = meta75485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie75484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75486,meta75485__$1){
var self__ = this;
var _75486__$1 = this;
return (new reitit.trie.t_reitit$trie75484(self__.meta75382,self__._,self__.key,self__.end,self__.matcher,meta75485__$1));
}));

(reitit.trie.t_reitit$trie75484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75486){
var self__ = this;
var _75486__$1 = this;
return self__.meta75485;
}));

(reitit.trie.t_reitit$trie75484.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie75484.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5823__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__75533 = cljs.core._EQ_;
var expr__75534 = c;
if(cljs.core.truth_((pred__75533.cljs$core$IFn$_invoke$arity$2 ? pred__75533.cljs$core$IFn$_invoke$arity$2(self__.end,expr__75534) : pred__75533.call(null,self__.end,expr__75534)))){
var temp__5823__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__75543 = "%";
var G__75544 = expr__75534;
return (pred__75533.cljs$core$IFn$_invoke$arity$2 ? pred__75533.cljs$core$IFn$_invoke$arity$2(G__75543,G__75544) : pred__75533.call(null,G__75543,G__75544));
})())){
var G__76258 = true;
var G__76259 = (j + (1));
percent_QMARK_ = G__76258;
j = G__76259;
continue;
} else {
var G__76260 = percent_QMARK_;
var G__76261 = (j + (1));
percent_QMARK_ = G__76260;
j = G__76261;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie75484.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie75484.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie75484.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie75484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta75382","meta75382",-1662750713,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie75381","reitit.trie/t_reitit$trie75381",-1517311895,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta75485","meta75485",-875463741,null)], null);
}));

(reitit.trie.t_reitit$trie75484.cljs$lang$type = true);

(reitit.trie.t_reitit$trie75484.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie75484");

(reitit.trie.t_reitit$trie75484.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.trie/t_reitit$trie75484");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie75484.
 */
reitit.trie.__GT_t_reitit$trie75484 = (function reitit$trie$__GT_t_reitit$trie75484(meta75382,_,key,end,matcher,meta75485){
return (new reitit.trie.t_reitit$trie75484(meta75382,_,key,end,matcher,meta75485));
});



/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie75568 = (function (meta75382,_,key,params,data,match,meta75569){
this.meta75382 = meta75382;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta75569 = meta75569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie75568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75570,meta75569__$1){
var self__ = this;
var _75570__$1 = this;
return (new reitit.trie.t_reitit$trie75568(self__.meta75382,self__._,self__.key,self__.params,self__.data,self__.match,meta75569__$1));
}));

(reitit.trie.t_reitit$trie75568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75570){
var self__ = this;
var _75570__$1 = this;
return self__.meta75569;
}));

(reitit.trie.t_reitit$trie75568.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie75568.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie75568.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie75568.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie75568.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie75568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta75382","meta75382",-1662750713,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie75381","reitit.trie/t_reitit$trie75381",-1517311895,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta75569","meta75569",1690726432,null)], null);
}));

(reitit.trie.t_reitit$trie75568.cljs$lang$type = true);

(reitit.trie.t_reitit$trie75568.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie75568");

(reitit.trie.t_reitit$trie75568.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.trie/t_reitit$trie75568");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie75568.
 */
reitit.trie.__GT_t_reitit$trie75568 = (function reitit$trie$__GT_t_reitit$trie75568(meta75382,_,key,params,data,match,meta75569){
return (new reitit.trie.t_reitit$trie75568(meta75382,_,key,params,data,match,meta75569));
});



/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie75608 = (function (meta75382,_,matchers,ordered_QMARK_,size,meta75609){
this.meta75382 = meta75382;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta75609 = meta75609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie75608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75610,meta75609__$1){
var self__ = this;
var _75610__$1 = this;
return (new reitit.trie.t_reitit$trie75608(self__.meta75382,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta75609__$1));
}));

(reitit.trie.t_reitit$trie75608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75610){
var self__ = this;
var _75610__$1 = this;
return self__.meta75609;
}));

(reitit.trie.t_reitit$trie75608.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie75608.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__5142__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__76269 = (j + (1));
j = G__76269;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie75608.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie75608.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie75608.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie75608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta75382","meta75382",-1662750713,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie75381","reitit.trie/t_reitit$trie75381",-1517311895,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta75609","meta75609",-1507362673,null)], null);
}));

(reitit.trie.t_reitit$trie75608.cljs$lang$type = true);

(reitit.trie.t_reitit$trie75608.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie75608");

(reitit.trie.t_reitit$trie75608.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.trie/t_reitit$trie75608");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie75608.
 */
reitit.trie.__GT_t_reitit$trie75608 = (function reitit$trie$__GT_t_reitit$trie75608(meta75382,_,matchers,ordered_QMARK_,size,meta75609){
return (new reitit.trie.t_reitit$trie75608(meta75382,_,matchers,ordered_QMARK_,size,meta75609));
});



/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie75381 = (function (meta75382){
this.meta75382 = meta75382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie75381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75383,meta75382__$1){
var self__ = this;
var _75383__$1 = this;
return (new reitit.trie.t_reitit$trie75381(meta75382__$1));
}));

(reitit.trie.t_reitit$trie75381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75383){
var self__ = this;
var _75383__$1 = this;
return self__.meta75382;
}));

(reitit.trie.t_reitit$trie75381.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie75381.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
return (new reitit.trie.t_reitit$trie75399(self__.meta75382,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie75381.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
return (new reitit.trie.t_reitit$trie75436(self__.meta75382,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie75381.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
return (new reitit.trie.t_reitit$trie75484(self__.meta75382,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie75381.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
return (new reitit.trie.t_reitit$trie75568(self__.meta75382,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie75381.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
return (new reitit.trie.t_reitit$trie75608(self__.meta75382,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie75381.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
}));

(reitit.trie.t_reitit$trie75381.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5823__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return reitit.trie.__GT_Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie75381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta75382","meta75382",-1662750713,null)], null);
}));

(reitit.trie.t_reitit$trie75381.cljs$lang$type = true);

(reitit.trie.t_reitit$trie75381.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie75381");

(reitit.trie.t_reitit$trie75381.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.trie/t_reitit$trie75381");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie75381.
 */
reitit.trie.__GT_t_reitit$trie75381 = (function reitit$trie$__GT_t_reitit$trie75381(meta75382){
return (new reitit.trie.t_reitit$trie75381(meta75382));
});


reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
return (new reitit.trie.t_reitit$trie75381(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__75658 = arguments.length;
switch (G__75658) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__75663){
var vec__75665 = p__75663;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75665,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75665,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__75669){
var map__75670 = p__75669;
var map__75670__$1 = cljs.core.__destructure_map(map__75670);
var opts = map__75670__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75670__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__75671 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__75671) : parameters.call(null,G__75671));
})();
return reitit.trie._insert((function (){var or__5142__auto__ = node;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__75677 = arguments.length;
switch (G__75677) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__75687,compiler,cp){
var map__75692 = p__75687;
var map__75692__$1 = cljs.core.__destructure_map(map__75692);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75692__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75692__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75692__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75692__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__75702){
var map__75704 = p__75702;
var map__75704__$1 = cljs.core.__destructure_map(map__75704);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__5142__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__75717 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__75717,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__75717;
}
})(),(function (){var iter__5628__auto__ = (function reitit$trie$iter__75720(s__75721){
return (new cljs.core.LazySeq(null,(function (){
var s__75721__$1 = s__75721;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__75721__$1);
if(temp__5825__auto__){
var s__75721__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75721__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__75721__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__75723 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__75722 = (0);
while(true){
if((i__75722 < size__5627__auto__)){
var vec__75727 = cljs.core._nth(c__5626__auto__,i__75722);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75727,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75727,(1),null);
cljs.core.chunk_append(b__75723,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__76282 = (i__75722 + (1));
i__75722 = G__76282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75723),reitit$trie$iter__75720(cljs.core.chunk_rest(s__75721__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75723),null);
}
} else {
var vec__75732 = cljs.core.first(s__75721__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75732,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75732,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__75720(cljs.core.rest(s__75721__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(children);
})()),(function (){var iter__5628__auto__ = (function reitit$trie$iter__75738(s__75739){
return (new cljs.core.LazySeq(null,(function (){
var s__75739__$1 = s__75739;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__75739__$1);
if(temp__5825__auto__){
var s__75739__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75739__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__75739__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__75741 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__75740 = (0);
while(true){
if((i__75740 < size__5627__auto__)){
var vec__75744 = cljs.core._nth(c__5626__auto__,i__75740);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75744,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75744,(1),null);
cljs.core.chunk_append(b__75741,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__76290 = (i__75740 + (1));
i__75740 = G__76290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75741),reitit$trie$iter__75738(cljs.core.chunk_rest(s__75739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75741),null);
}
} else {
var vec__75750 = cljs.core.first(s__75739__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75750,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75750,(1),null);
return cljs.core.cons((function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__75738(cljs.core.rest(s__75739__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(wilds);
})()),(function (){var iter__5628__auto__ = (function reitit$trie$iter__75755(s__75756){
return (new cljs.core.LazySeq(null,(function (){
var s__75756__$1 = s__75756;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__75756__$1);
if(temp__5825__auto__){
var s__75756__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75756__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__75756__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__75758 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__75757 = (0);
while(true){
if((i__75757 < size__5627__auto__)){
var vec__75767 = cljs.core._nth(c__5626__auto__,i__75757);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75767,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75767,(1),null);
cljs.core.chunk_append(b__75758,reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__76296 = (i__75757 + (1));
i__75757 = G__76296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75758),reitit$trie$iter__75755(cljs.core.chunk_rest(s__75756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75758),null);
}
} else {
var vec__75772 = cljs.core.first(s__75756__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75772,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75772,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__75755(cljs.core.rest(s__75756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return null;
}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__75786 = arguments.length;
switch (G__75786) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__75797 = arguments.length;
switch (G__75797) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.trie.js.map
