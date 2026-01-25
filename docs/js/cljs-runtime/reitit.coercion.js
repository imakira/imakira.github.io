import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.walk.js";
import "./reitit.core.js";
import "./reitit.impl.js";
goog.provide('reitit.coercion');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

var reitit$coercion$Coercion$_get_name$dyn_77135 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._get_name[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.coercion._get_name["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-name",this$);
}
}
});
/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_name$dyn_77135(this$);
}
});

var reitit$coercion$Coercion$_get_options$dyn_77151 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._get_options[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.coercion._get_options["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-options",this$);
}
}
});
/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_options$dyn_77151(this$);
}
});

var reitit$coercion$Coercion$_get_apidocs$dyn_77158 = (function (this$,specification,data){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__5499__auto__.call(null,this$,specification,data));
} else {
var m__5497__auto__ = (reitit.coercion._get_apidocs["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__5497__auto__.call(null,this$,specification,data));
} else {
throw cljs.core.missing_protocol("Coercion.-get-apidocs",this$);
}
}
});
/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
return reitit$coercion$Coercion$_get_apidocs$dyn_77158(this$,specification,data);
}
});

var reitit$coercion$Coercion$_get_model_apidocs$dyn_77162 = (function (this$,specification,model,options){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._get_model_apidocs[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(this$,specification,model,options) : m__5499__auto__.call(null,this$,specification,model,options));
} else {
var m__5497__auto__ = (reitit.coercion._get_model_apidocs["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(this$,specification,model,options) : m__5497__auto__.call(null,this$,specification,model,options));
} else {
throw cljs.core.missing_protocol("Coercion.-get-model-apidocs",this$);
}
}
});
/**
 * Convert model into a format that can be used in api docs
 */
reitit.coercion._get_model_apidocs = (function reitit$coercion$_get_model_apidocs(this$,specification,model,options){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_model_apidocs$arity$4 == null)))))){
return this$.reitit$coercion$Coercion$_get_model_apidocs$arity$4(this$,specification,model,options);
} else {
return reitit$coercion$Coercion$_get_model_apidocs$dyn_77162(this$,specification,model,options);
}
});

var reitit$coercion$Coercion$_compile_model$dyn_77165 = (function (this$,model,name){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__5499__auto__.call(null,this$,model,name));
} else {
var m__5497__auto__ = (reitit.coercion._compile_model["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__5497__auto__.call(null,this$,model,name));
} else {
throw cljs.core.missing_protocol("Coercion.-compile-model",this$);
}
}
});
/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
return reitit$coercion$Coercion$_compile_model$dyn_77165(this$,model,name);
}
});

var reitit$coercion$Coercion$_open_model$dyn_77178 = (function (this$,model){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._open_model[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5499__auto__.call(null,this$,model));
} else {
var m__5497__auto__ = (reitit.coercion._open_model["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5497__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-open-model",this$);
}
}
});
/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_open_model$dyn_77178(this$,model);
}
});

var reitit$coercion$Coercion$_encode_error$dyn_77180 = (function (this$,error){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__5499__auto__.call(null,this$,error));
} else {
var m__5497__auto__ = (reitit.coercion._encode_error["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__5497__auto__.call(null,this$,error));
} else {
throw cljs.core.missing_protocol("Coercion.-encode-error",this$);
}
}
});
/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
return reitit$coercion$Coercion$_encode_error$dyn_77180(this$,error);
}
});

var reitit$coercion$Coercion$_request_coercer$dyn_77190 = (function (this$,type,model){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__5499__auto__.call(null,this$,type,model));
} else {
var m__5497__auto__ = (reitit.coercion._request_coercer["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__5497__auto__.call(null,this$,type,model));
} else {
throw cljs.core.missing_protocol("Coercion.-request-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
return reitit$coercion$Coercion$_request_coercer$dyn_77190(this$,type,model);
}
});

var reitit$coercion$Coercion$_response_coercer$dyn_77192 = (function (this$,model){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5499__auto__.call(null,this$,model));
} else {
var m__5497__auto__ = (reitit.coercion._response_coercer["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5497__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-response-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_response_coercer$dyn_77192(this$,model);
}
});

var reitit$coercion$Coercion$_query_string_coercer$dyn_77193 = (function (this$,model){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.coercion._query_string_coercer[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5499__auto__.call(null,this$,model));
} else {
var m__5497__auto__ = (reitit.coercion._query_string_coercer["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5497__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-query-string-coercer",this$);
}
}
});
/**
 * Returns a `value => value` query string coercion function
 */
reitit.coercion._query_string_coercer = (function reitit$coercion$_query_string_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_query_string_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_query_string_coercer$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_query_string_coercer$dyn_77193(this$,model);
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
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k76865,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__76886 = k76865;
switch (G__76886) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k76865,else__5451__auto__);

}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__76887){
var vec__76889 = p__76887;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76889,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76889,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__76864){
var self__ = this;
var G__76864__$1 = this;
return (new cljs.core.RecordIter((0),G__76864__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this76866,other76867){
var self__ = this;
var this76866__$1 = this;
return (((!((other76867 == null)))) && ((((this76866__$1.constructor === other76867.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76866__$1.__extmap,other76867.__extmap)))));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k76865){
var self__ = this;
var this__5455__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k76865);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__76864){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__76914 = cljs.core.keyword_identical_QMARK_;
var expr__76915 = k__5457__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__76864),null));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__76864){
var self__ = this;
var this__5447__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__76864,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(reitit.coercion.CoercionError.cljs$lang$type = true);

(reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
}));

(reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"reitit.coercion/CoercionError");
}));

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__76872){
var extmap__5490__auto__ = (function (){var G__76927 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__76872);
if(cljs.core.record_QMARK_(G__76872)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__76927);
} else {
return G__76927;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty(extmap__5490__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
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
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k76933,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__76950 = k76933;
var G__76950__$1 = (((G__76950 instanceof cljs.core.Keyword))?G__76950.fqn:null);
switch (G__76950__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k76933,else__5451__auto__);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__76954){
var vec__76956 = p__76954;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76956,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76956,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__76932){
var self__ = this;
var G__76932__$1 = this;
return (new cljs.core.RecordIter((0),G__76932__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this76937,other76938){
var self__ = this;
var this76937__$1 = this;
return (((!((other76938 == null)))) && ((((this76937__$1.constructor === other76938.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76937__$1.in,other76938.in)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76937__$1.style,other76938.style)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76937__$1.keywordize_QMARK_,other76938.keywordize_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76937__$1.open_QMARK_,other76938.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76937__$1.__extmap,other76938.__extmap)))))))))))));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k76933){
var self__ = this;
var this__5455__auto____$1 = this;
var G__76976 = k76933;
var G__76976__$1 = (((G__76976 instanceof cljs.core.Keyword))?G__76976.fqn:null);
switch (G__76976__$1) {
case "in":
case "style":
case "keywordize?":
case "open?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k76933);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__76932){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__76980 = cljs.core.keyword_identical_QMARK_;
var expr__76981 = k__5457__auto__;
if(cljs.core.truth_((pred__76980.cljs$core$IFn$_invoke$arity$2 ? pred__76980.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__76981) : pred__76980.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__76981)))){
return (new reitit.coercion.ParameterCoercion(G__76932,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76980.cljs$core$IFn$_invoke$arity$2 ? pred__76980.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),expr__76981) : pred__76980.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__76981)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__76932,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76980.cljs$core$IFn$_invoke$arity$2 ? pred__76980.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__76981) : pred__76980.call(null,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__76981)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__76932,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76980.cljs$core$IFn$_invoke$arity$2 ? pred__76980.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open?","open?",1238443125),expr__76981) : pred__76980.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__76981)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__76932,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__76932),null));
}
}
}
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__76932){
var self__ = this;
var this__5447__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__76932,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"keywordize?","keywordize?",1406224615,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
}));

(reitit.coercion.ParameterCoercion.cljs$lang$type = true);

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
}));

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"reitit.coercion/ParameterCoercion");
}));

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__76940){
var extmap__5490__auto__ = (function (){var G__77003 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__76940,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], 0));
if(cljs.core.record_QMARK_(G__76940)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77003);
} else {
return G__77003;
}
})();
return (new reitit.coercion.ParameterCoercion(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__76940),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__76940),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912).cljs$core$IFn$_invoke$arity$1(G__76940),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__76940),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"body","body",-2049205669),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"body-params","body-params",-369749490),new cljs.core.Keyword(null,"body","body",-2049205669),false,false),new cljs.core.Keyword(null,"form","form",-1624062471),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"header","header",119441134),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"path","path",-188191168),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"fragment","fragment",826775688),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"string","string",-1989541586),true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(serialize_failed_result)?(""+"Request coercion failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)))):"Request coercion failed"),cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var $ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,$,result);
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","request-coercion","reitit.coercion/request-coercion",47377205)),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),in$], null)),new cljs.core.Keyword(null,"request","request",1772954723),request)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response,serialize_failed_result){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(serialize_failed_result)?(""+"Response coercion failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)))):"Response coercion failed"),cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var $ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,$,result);
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","response-coercion","reitit.coercion/response-coercion",-1532049609)),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669)], null)),new cljs.core.Keyword(null,"request","request",1772954723),request),new cljs.core.Keyword(null,"response","response",-1068424192),response)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","request","muuntaja/request",-1616403792).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion._identity_coercer = (function reitit$coercion$_identity_coercer(value,_format){
return value;
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__77018){
var map__77020 = p__77018;
var map__77020__$1 = cljs.core.__destructure_map(map__77020);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77020__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77020__$1,new cljs.core.Keyword("reitit.coercion","parameter-coercion","reitit.coercion/parameter-coercion",-1825124100),reitit.coercion.default_parameter_coercion);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77020__$1,new cljs.core.Keyword("reitit.coercion","serialize-failed-result","reitit.coercion/serialize-failed-result",786287704));
var skip = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77020__$1,new cljs.core.Keyword("reitit.coercion","skip","reitit.coercion/skip",-2123160930),cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(coercion)){
var temp__5825__auto__ = (parameter_coercion.cljs$core$IFn$_invoke$arity$1 ? parameter_coercion.cljs$core$IFn$_invoke$arity$1(type) : parameter_coercion.call(null,type));
if(cljs.core.truth_(temp__5825__auto__)){
var map__77024 = temp__5825__auto__;
var map__77024__$1 = cljs.core.__destructure_map(map__77024);
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77024__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77024__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77024__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77024__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_((skip.cljs$core$IFn$_invoke$arity$1 ? skip.cljs$core$IFn$_invoke$arity$1(style) : skip.call(null,style)))){
return null;
} else {
var transform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var __GT_open = (cljs.core.truth_(open_QMARK_)?(function (p1__77016_SHARP_){
return reitit.coercion._open_model(coercion,p1__77016_SHARP_);
}):cljs.core.identity);
var coercer = reitit.coercion._request_coercer(coercion,style,(__GT_open.cljs$core$IFn$_invoke$arity$1 ? __GT_open.cljs$core$IFn$_invoke$arity$1(model) : __GT_open.call(null,model)));
if(cljs.core.truth_(coercer)){
return (function (request){
var value = transform(request);
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.get_default = (function reitit$coercion$get_default(request_or_response){
var or__5142__auto__ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(request_or_response));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__77025 = request_or_response;
var G__77025__$1 = (((G__77025 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__77025));
if((G__77025__$1 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"schema","schema",-1582001791),G__77025__$1);
}
}
});
reitit.coercion.content_request_coercer = (function reitit$coercion$content_request_coercer(coercion,p__77028,p__77029){
var map__77030 = p__77028;
var map__77030__$1 = cljs.core.__destructure_map(map__77030);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77030__$1,new cljs.core.Keyword(null,"content","content",15833224));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77030__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__77032 = p__77029;
var map__77032__$1 = cljs.core.__destructure_map(map__77032);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77032__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77032__$1,new cljs.core.Keyword("reitit.coercion","serialize-failed-result","reitit.coercion/serialize-failed-result",786287704));
if(cljs.core.truth_(coercion)){
var in$ = new cljs.core.Keyword(null,"body-params","body-params",-369749490);
var format__GT_coercer = (function (){var G__77034 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),body)], null)], null):null),(function (){var iter__5628__auto__ = (function reitit$coercion$content_request_coercer_$_iter__77035(s__77036){
return (new cljs.core.LazySeq(null,(function (){
var s__77036__$1 = s__77036;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__77036__$1);
if(temp__5825__auto__){
var s__77036__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77036__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__77036__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__77038 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__77037 = (0);
while(true){
if((i__77037 < size__5627__auto__)){
var vec__77041 = cljs.core._nth(c__5626__auto__,i__77037);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77041,(0),null);
var map__77044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77041,(1),null);
var map__77044__$1 = cljs.core.__destructure_map(map__77044);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77044__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
cljs.core.chunk_append(b__77038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),schema)], null));

var G__77271 = (i__77037 + (1));
i__77037 = G__77271;
continue;
} else {
var G__77272 = (i__77037 + (1));
i__77037 = G__77272;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77038),reitit$coercion$content_request_coercer_$_iter__77035(cljs.core.chunk_rest(s__77036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77038),null);
}
} else {
var vec__77046 = cljs.core.first(s__77036__$2);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77046,(0),null);
var map__77049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77046,(1),null);
var map__77049__$1 = cljs.core.__destructure_map(map__77049);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77049__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),schema)], null),reitit$coercion$content_request_coercer_$_iter__77035(cljs.core.rest(s__77036__$2)));
} else {
var G__77275 = cljs.core.rest(s__77036__$2);
s__77036__$1 = G__77275;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(content);
})());
var G__77034__$1 = (((G__77034 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__77034));
var G__77034__$2 = (((G__77034__$1 == null))?null:cljs.core.seq(G__77034__$1));
if((G__77034__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77034__$2);
}
})();
if(cljs.core.truth_(format__GT_coercer)){
return (function (request){
var value = in$.cljs$core$IFn$_invoke$arity$1(request);
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var coercer = (function (){var or__5142__auto__ = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(format) : format__GT_coercer.call(null,format));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : format__GT_coercer.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return reitit.coercion._identity_coercer;
}
}
})();
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error(new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response","response",-1068424192)], 0)),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv((function (acc,k,coercer){
return reitit.impl.fast_assoc(acc,k,(coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(request) : coercer.call(null,request)));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(var_args){
var G__77054 = arguments.length;
switch (G__77054) {
case 3:
return reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3 = (function (coercion,parameters,opts){
var G__77057 = (function (){var iter__5628__auto__ = (function reitit$coercion$iter__77060(s__77061){
return (new cljs.core.LazySeq(null,(function (){
var s__77061__$1 = s__77061;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__77061__$1);
if(temp__5825__auto__){
var s__77061__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77061__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__77061__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__77063 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__77062 = (0);
while(true){
if((i__77062 < size__5627__auto__)){
var vec__77064 = cljs.core._nth(c__5626__auto__,i__77062);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77064,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__77063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null));

var G__77295 = (i__77062 + (1));
i__77062 = G__77295;
continue;
} else {
var G__77297 = (i__77062 + (1));
i__77062 = G__77297;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77063),reitit$coercion$iter__77060(cljs.core.chunk_rest(s__77061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77063),null);
}
} else {
var vec__77067 = cljs.core.first(s__77061__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77067,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null),reitit$coercion$iter__77060(cljs.core.rest(s__77061__$2)));
} else {
var G__77300 = cljs.core.rest(s__77061__$2);
s__77061__$1 = G__77300;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(parameters);
})();
var G__77057__$1 = (((G__77057 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__77057));
var G__77057__$2 = (((G__77057__$1 == null))?null:cljs.core.seq(G__77057__$1));
if((G__77057__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77057__$2);
}
}));

(reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$4 = (function (coercion,parameters,route_request,opts){
var crc = (cljs.core.truth_(route_request)?(function (){var G__77071 = reitit.coercion.content_request_coercer(coercion,route_request,opts);
if((G__77071 == null)){
return null;
} else {
return (new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"request","request",1772954723),G__77071],null));
}
})():null);
var rcs = reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3(coercion,parameters,(function (){var G__77073 = opts;
if(cljs.core.truth_(route_request)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77073,new cljs.core.Keyword("reitit.coercion","skip","reitit.coercion/skip",-2123160930),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null));
} else {
return G__77073;
}
})());
if(cljs.core.truth_((function (){var and__5140__auto__ = crc;
if(cljs.core.truth_(and__5140__auto__)){
return rcs;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(crc,cljs.core.vec(rcs));
} else {
var or__5142__auto__ = crc;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return rcs;
}
}
}));

(reitit.coercion.request_coercers.cljs$lang$maxFixedArity = 4);

reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,response){
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("muuntaja","content-type","muuntaja/content-type",-1482055333).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","response","muuntaja/response",-1772248613).cljs$core$IFn$_invoke$arity$1(request));
}
}
});
reitit.coercion._format__GT_coercer = (function reitit$coercion$_format__GT_coercer(coercion,p__77079,_opts){
var map__77080 = p__77079;
var map__77080__$1 = cljs.core.__destructure_map(map__77080);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77080__$1,new cljs.core.Keyword(null,"content","content",15833224));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77080__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion._response_coercer(coercion,body)], null)], null):null),(function (){var iter__5628__auto__ = (function reitit$coercion$_format__GT_coercer_$_iter__77083(s__77084){
return (new cljs.core.LazySeq(null,(function (){
var s__77084__$1 = s__77084;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__77084__$1);
if(temp__5825__auto__){
var s__77084__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77084__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__77084__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__77086 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__77085 = (0);
while(true){
if((i__77085 < size__5627__auto__)){
var vec__77087 = cljs.core._nth(c__5626__auto__,i__77085);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77087,(0),null);
var map__77090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77087,(1),null);
var map__77090__$1 = cljs.core.__destructure_map(map__77090);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77090__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
cljs.core.chunk_append(b__77086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._response_coercer(coercion,schema)], null));

var G__77315 = (i__77085 + (1));
i__77085 = G__77315;
continue;
} else {
var G__77316 = (i__77085 + (1));
i__77085 = G__77316;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77086),reitit$coercion$_format__GT_coercer_$_iter__77083(cljs.core.chunk_rest(s__77084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77086),null);
}
} else {
var vec__77091 = cljs.core.first(s__77084__$2);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77091,(0),null);
var map__77094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77091,(1),null);
var map__77094__$1 = cljs.core.__destructure_map(map__77094);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77094__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._response_coercer(coercion,schema)], null),reitit$coercion$_format__GT_coercer_$_iter__77083(cljs.core.rest(s__77084__$2)));
} else {
var G__77323 = cljs.core.rest(s__77084__$2);
s__77084__$1 = G__77323;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(content);
})())));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,responses,p__77096){
var map__77097 = p__77096;
var map__77097__$1 = cljs.core.__destructure_map(map__77097);
var opts = map__77097__$1;
var extract_response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77097__$1,new cljs.core.Keyword(null,"extract-response-format","extract-response-format",-303544140),reitit.coercion.extract_response_format_default);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77097__$1,new cljs.core.Keyword(null,"serialize-failed-result","serialize-failed-result",391398953));
if(cljs.core.truth_(coercion)){
var status__GT_format__GT_coercer = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function reitit$coercion$response_coercer_$_iter__77099(s__77100){
return (new cljs.core.LazySeq(null,(function (){
var s__77100__$1 = s__77100;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__77100__$1);
if(temp__5825__auto__){
var s__77100__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77100__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__77100__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__77102 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__77101 = (0);
while(true){
if((i__77101 < size__5627__auto__)){
var vec__77103 = cljs.core._nth(c__5626__auto__,i__77101);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77103,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77103,(1),null);
cljs.core.chunk_append(b__77102,(function (){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),status)) || (cljs.core.int_QMARK_(status)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response status must be int or :default",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion._format__GT_coercer(coercion,model,opts)], null);
})()
);

var G__77326 = (i__77101 + (1));
i__77101 = G__77326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77102),reitit$coercion$response_coercer_$_iter__77099(cljs.core.chunk_rest(s__77100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77102),null);
}
} else {
var vec__77107 = cljs.core.first(s__77100__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77107,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77107,(1),null);
return cljs.core.cons((function (){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),status)) || (cljs.core.int_QMARK_(status)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response status must be int or :default",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion._format__GT_coercer(coercion,model,opts)], null);
})()
,reitit$coercion$response_coercer_$_iter__77099(cljs.core.rest(s__77100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(responses);
})());
if(cljs.core.every_QMARK_(cljs.core.empty_QMARK_,cljs.core.vals(status__GT_format__GT_coercer))){
return null;
} else {
return (function (request,response){
var format__GT_coercer = (function (){var or__5142__auto__ = (function (){var G__77111 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
return (status__GT_format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? status__GT_format__GT_coercer.cljs$core$IFn$_invoke$arity$1(G__77111) : status__GT_format__GT_coercer.call(null,G__77111));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (status__GT_format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? status__GT_format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : status__GT_format__GT_coercer.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
}
})();
var format = (extract_response_format.cljs$core$IFn$_invoke$arity$2 ? extract_response_format.cljs$core$IFn$_invoke$arity$2(request,response) : extract_response_format.call(null,request,response));
var coercer = (cljs.core.truth_(format__GT_coercer)?(function (){var or__5142__auto__ = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(format) : format__GT_coercer.call(null,format));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : format__GT_coercer.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
}
})():null);
if(cljs.core.not(coercer)){
return response;
} else {
var value = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var coerced = (function (){var G__77112 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var G__77113 = format;
return (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(G__77112,G__77113) : coercer.call(null,G__77112,G__77113));
})();
var result = ((reitit.coercion.error_QMARK_(coerced))?reitit.coercion.response_coercion_failed_BANG_(coerced,coercion,value,request,response,serialize_failed_result):coerced);
return reitit.impl.fast_assoc(response,new cljs.core.Keyword(null,"body","body",-2049205669),result);
}
});
}
} else {
return null;
}
});
reitit.coercion._compile_parameters = (function reitit$coercion$_compile_parameters(data,coercion){
return reitit.impl.path_update(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.any_QMARK_], null),(function (p1__77115_SHARP_){
return reitit.coercion._compile_model(coercion,p1__77115_SHARP_,null);
})], null)], null));
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to both compile the schemas and create compiled coercers
 *   into Match under `:result with the following keys:
 * 
 * | key       | description
 * | ----------|-------------
 * | `:data`   | data with compiled schemas
 * | `:coerce` | function of `Match -> coerced parameters` to coerce parameters
 * 
 *   A pre-requisite to use [[coerce!]].
 * 
 *   NOTE: this is not needed with ring/http, where the coercion compilation is
 *   managed in the request coercion middleware/interceptors.
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__77119,opts){
var vec__77120 = p__77119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77120,(0),null);
var map__77123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77120,(1),null);
var map__77123__$1 = cljs.core.__destructure_map(map__77123);
var data = map__77123__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77123__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77123__$1,new cljs.core.Keyword(null,"coercion","coercion",904067157));
if(cljs.core.truth_((function (){var and__5140__auto__ = parameters;
if(cljs.core.truth_(and__5140__auto__)){
return coercion;
} else {
return and__5140__auto__;
}
})())){
var map__77125 = reitit.coercion._compile_parameters(data,coercion);
var map__77125__$1 = cljs.core.__destructure_map(map__77125);
var data__$1 = map__77125__$1;
var parameters__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77125__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504),reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3(coercion,parameters__$1,opts)], null);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled coercers in `Match`
 *   under path `[:result :coerce]` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced. If coercion or parameters
 *   are not defined, returns `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5823__auto__ = new cljs.core.Keyword(null,"coerce","coerce",1917884504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(match));
if(cljs.core.truth_(temp__5823__auto__)){
var coercers = temp__5823__auto__;
return reitit.coercion.coerce_request(coercers,match);
} else {
return null;
}
});
/**
 * Uses an input schema and coercion implementation from the given match to
 *   encode query-parameters map.
 * 
 *   If no match, no input schema or coercion implementation, just returns the
 *   original parameters map.
 */
reitit.coercion.coerce_query_params = (function reitit$coercion$coerce_query_params(match,query_params){
if(cljs.core.truth_(query_params)){
var coercion = new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var schema = (cljs.core.truth_(coercion)?reitit.coercion._compile_model(coercion,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match))),null):null);
var coercer = (cljs.core.truth_((function (){var and__5140__auto__ = schema;
if(cljs.core.truth_(and__5140__auto__)){
return coercion;
} else {
return and__5140__auto__;
}
})())?reitit.coercion._query_string_coercer(coercion,schema):null);
if(cljs.core.truth_(coercer)){
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(query_params,new cljs.core.Keyword(null,"default","default",-1987822328)) : coercer.call(null,query_params,new cljs.core.Keyword(null,"default","default",-1987822328)));
if(reitit.coercion.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Query parameters coercion failed",result);
} else {
return result;
}
} else {
return query_params;
}
} else {
return null;
}
});
/**
 * Create routing path from given match and optional query-parameters map.
 * 
 *   Query-parameters are encoded using the input schema and coercion implementation.
 */
reitit.coercion.match__GT_path = (function reitit$coercion$match__GT_path(var_args){
var G__77131 = arguments.length;
switch (G__77131) {
case 1:
return reitit.coercion.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.coercion.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.coercion.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1(match);
}));

(reitit.coercion.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,reitit.coercion.coerce_query_params(match,query_params));
}));

(reitit.coercion.match__GT_path.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.coercion.js.map
