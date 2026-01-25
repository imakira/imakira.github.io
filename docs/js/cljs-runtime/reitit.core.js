import "./cljs_env.js";
import "./cljs.core.js";
import "./reitit.exception.js";
import "./reitit.impl.js";
import "./reitit.trie.js";
goog.provide('reitit.core');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_76792 = (function (this$,opts){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.expand[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5499__auto__.call(null,this$,opts));
} else {
var m__5497__auto__ = (reitit.core.expand["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5497__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_76792(this$,opts);
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(reitit.core.Expand["function"] = true);

(reitit.core.expand["function"] = (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

(cljs.core.Var.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$__$1], null);
}));

(reitit.core.Expand["null"] = true);

(reitit.core.expand["null"] = (function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

var reitit$core$Router$router_name$dyn_76798 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.router_name[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.core.router_name["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_76798(this$);
}
});

var reitit$core$Router$routes$dyn_76800 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.routes[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.core.routes["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_76800(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_76801 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_76801(this$);
}
});

var reitit$core$Router$options$dyn_76802 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.options[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.core.options["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_76802(this$);
}
});

var reitit$core$Router$route_names$dyn_76803 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.route_names[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (reitit.core.route_names["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_76803(this$);
}
});

var reitit$core$Router$match_by_path$dyn_76804 = (function (this$,path){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.match_by_path[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5499__auto__.call(null,this$,path));
} else {
var m__5497__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5497__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_76804(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_76805 = (function() {
var G__76806 = null;
var G__76806__2 = (function (this$,name){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5499__auto__.call(null,this$,name));
} else {
var m__5497__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5497__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__76806__3 = (function (this$,name,path_params){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__5499__auto__.call(null,this$,name,path_params));
} else {
var m__5497__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__5497__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
G__76806 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__76806__2.call(this,this$,name);
case 3:
return G__76806__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__76806.cljs$core$IFn$_invoke$arity$2 = G__76806__2;
G__76806.cljs$core$IFn$_invoke$arity$3 = G__76806__3;
return G__76806;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__76364 = arguments.length;
switch (G__76364) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
return reitit$core$Router$match_by_name$dyn_76805(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_76805(this$,name,path_params);
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 3);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k76370,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__76379 = k76370;
var G__76379__$1 = (((G__76379 instanceof cljs.core.Keyword))?G__76379.fqn:null);
switch (G__76379__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k76370,else__5451__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__76380){
var vec__76381 = p__76380;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76381,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76381,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#reitit.core.Match{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__76369){
var self__ = this;
var G__76369__$1 = this;
return (new cljs.core.RecordIter((0),G__76369__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this76371,other76372){
var self__ = this;
var this76371__$1 = this;
return (((!((other76372 == null)))) && ((((this76371__$1.constructor === other76372.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76371__$1.template,other76372.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76371__$1.data,other76372.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76371__$1.result,other76372.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76371__$1.path_params,other76372.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76371__$1.path,other76372.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76371__$1.__extmap,other76372.__extmap)))))))))))))));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k76370){
var self__ = this;
var this__5455__auto____$1 = this;
var G__76391 = k76370;
var G__76391__$1 = (((G__76391 instanceof cljs.core.Keyword))?G__76391.fqn:null);
switch (G__76391__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k76370);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__76369){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__76395 = cljs.core.keyword_identical_QMARK_;
var expr__76396 = k__5457__auto__;
if(cljs.core.truth_((pred__76395.cljs$core$IFn$_invoke$arity$2 ? pred__76395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__76396) : pred__76395.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__76396)))){
return (new reitit.core.Match(G__76369,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76395.cljs$core$IFn$_invoke$arity$2 ? pred__76395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__76396) : pred__76395.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__76396)))){
return (new reitit.core.Match(self__.template,G__76369,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76395.cljs$core$IFn$_invoke$arity$2 ? pred__76395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__76396) : pred__76395.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__76396)))){
return (new reitit.core.Match(self__.template,self__.data,G__76369,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76395.cljs$core$IFn$_invoke$arity$2 ? pred__76395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__76396) : pred__76395.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__76396)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__76369,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76395.cljs$core$IFn$_invoke$arity$2 ? pred__76395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__76396) : pred__76395.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__76396)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__76369,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__76369),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__76369){
var self__ = this;
var this__5447__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__76369,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__76377){
var extmap__5490__auto__ = (function (){var G__76402 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__76377,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__76377)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__76402);
} else {
return G__76402;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__76377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__76377),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__76377),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__76377),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__76377),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k76404,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__76410 = k76404;
var G__76410__$1 = (((G__76410 instanceof cljs.core.Keyword))?G__76410.fqn:null);
switch (G__76410__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k76404,else__5451__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__76411){
var vec__76412 = p__76411;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76412,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76412,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#reitit.core.PartialMatch{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__76403){
var self__ = this;
var G__76403__$1 = this;
return (new cljs.core.RecordIter((0),G__76403__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this76405,other76406){
var self__ = this;
var this76405__$1 = this;
return (((!((other76406 == null)))) && ((((this76405__$1.constructor === other76406.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76405__$1.template,other76406.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76405__$1.data,other76406.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76405__$1.result,other76406.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76405__$1.path_params,other76406.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76405__$1.required,other76406.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76405__$1.__extmap,other76406.__extmap)))))))))))))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k76404){
var self__ = this;
var this__5455__auto____$1 = this;
var G__76432 = k76404;
var G__76432__$1 = (((G__76432 instanceof cljs.core.Keyword))?G__76432.fqn:null);
switch (G__76432__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k76404);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__76403){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__76435 = cljs.core.keyword_identical_QMARK_;
var expr__76436 = k__5457__auto__;
if(cljs.core.truth_((pred__76435.cljs$core$IFn$_invoke$arity$2 ? pred__76435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__76436) : pred__76435.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__76436)))){
return (new reitit.core.PartialMatch(G__76403,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76435.cljs$core$IFn$_invoke$arity$2 ? pred__76435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__76436) : pred__76435.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__76436)))){
return (new reitit.core.PartialMatch(self__.template,G__76403,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76435.cljs$core$IFn$_invoke$arity$2 ? pred__76435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__76436) : pred__76435.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__76436)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__76403,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76435.cljs$core$IFn$_invoke$arity$2 ? pred__76435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__76436) : pred__76435.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__76436)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__76403,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76435.cljs$core$IFn$_invoke$arity$2 ? pred__76435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__76436) : pred__76435.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__76436)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__76403,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__76403),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__76403){
var self__ = this;
var this__5447__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__76403,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__76407){
var extmap__5490__auto__ = (function (){var G__76441 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__76407,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__76407)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__76441);
} else {
return G__76441;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__76407),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__76407),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__76407),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__76407),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__76407),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__76444 = arguments.length;
switch (G__76444) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5823__auto__ = reitit.core.match_by_name(this$,name,path_params);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Create routing path from given match and optional query-parameters map.
 */
reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__76448 = arguments.length;
switch (G__76448) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__76449 = match;
var G__76449__$1 = (((G__76449 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__76449));
if((G__76449__$1 == null)){
return null;
} else {
var G__76450 = G__76449__$1;
if(cljs.core.seq(query_params)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76450)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string(query_params)));
} else {
return G__76450;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core76470 = (function (vec__76456,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta76471){
this.vec__76456 = vec__76456;
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta76471 = meta76471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core76470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76472,meta76471__$1){
var self__ = this;
var _76472__$1 = this;
return (new reitit.core.t_reitit$core76470(self__.vec__76456,self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta76471__$1));
}));

(reitit.core.t_reitit$core76470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76472){
var self__ = this;
var _76472__$1 = this;
return self__.meta76471;
}));

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core76470.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
var G__76476 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__76476) : match.call(null,G__76476));
} else {
return null;
}
}));

(reitit.core.t_reitit$core76470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__76456","vec__76456",385650880,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta76471","meta76471",639779534,null)], null);
}));

(reitit.core.t_reitit$core76470.cljs$lang$type = true);

(reitit.core.t_reitit$core76470.cljs$lang$ctorStr = "reitit.core/t_reitit$core76470");

(reitit.core.t_reitit$core76470.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.core/t_reitit$core76470");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core76470.
 */
reitit.core.__GT_t_reitit$core76470 = (function reitit$core$__GT_t_reitit$core76470(vec__76456,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta76471){
return (new reitit.core.t_reitit$core76470(vec__76456,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta76471));
});


/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__76454 = arguments.length;
switch (G__76454) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__76456 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__76459,p__76460){
var vec__76461 = p__76459;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76461,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76461,(1),null);
var vec__76464 = p__76460;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76464,(0),null);
var map__76467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76464,(1),null);
var map__76467__$1 = cljs.core.__destructure_map(map__76467);
var data = map__76467__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76464,(2),null);
var map__76468 = reitit.impl.parse(p,opts);
var map__76468__$1 = cljs.core.__destructure_map(map__76468);
var route = map__76468__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76468__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__76452_SHARP_){
var temp__5823__auto__ = reitit.impl.path_for(route,p1__76452_SHARP_);
if(cljs.core.truth_(temp__5823__auto__)){
var path = temp__5823__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__76452_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__76452_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76456,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76456,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core76470(vec__76456,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core76496 = (function (names,vec__76483,data,compiled_routes,routes,lookup,pl,nl,opts,meta76497){
this.names = names;
this.vec__76483 = vec__76483;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta76497 = meta76497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core76496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76498,meta76497__$1){
var self__ = this;
var _76498__$1 = this;
return (new reitit.core.t_reitit$core76496(self__.names,self__.vec__76483,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,meta76497__$1));
}));

(reitit.core.t_reitit$core76496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76498){
var self__ = this;
var _76498__$1 = this;
return self__.meta76497;
}));

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core76496.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
var G__76501 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__76501) : match.call(null,G__76501));
} else {
return null;
}
}));

(reitit.core.t_reitit$core76496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__76483","vec__76483",1291155814,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta76497","meta76497",-300900619,null)], null);
}));

(reitit.core.t_reitit$core76496.cljs$lang$type = true);

(reitit.core.t_reitit$core76496.cljs$lang$ctorStr = "reitit.core/t_reitit$core76496");

(reitit.core.t_reitit$core76496.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.core/t_reitit$core76496");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core76496.
 */
reitit.core.__GT_t_reitit$core76496 = (function reitit$core$__GT_t_reitit$core76496(names,vec__76483,data,compiled_routes,routes,lookup,pl,nl,opts,meta76497){
return (new reitit.core.t_reitit$core76496(names,vec__76483,data,compiled_routes,routes,lookup,pl,nl,opts,meta76497));
});


/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__76481 = arguments.length;
switch (G__76481) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5825__auto___76904 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5825__auto___76904){
var wilds_76905 = temp__5825__auto___76904;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((""+"can't create :lookup-router with wildcard routes: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_76905)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_76905,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__76483 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__76486,p__76487){
var vec__76488 = p__76486;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76488,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76488,(1),null);
var vec__76491 = p__76487;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76491,(0),null);
var map__76494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76491,(1),null);
var map__76494__$1 = cljs.core.__destructure_map(map__76494);
var data = map__76494__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76491,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__76479_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__76479_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76483,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76483,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core76496(names,vec__76483,data,compiled_routes,routes,lookup,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core76521 = (function (matcher,names,compiled_routes,routes,lookup,vec__76507,pl,nl,match_by_path,compiler,opts,meta76522){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__76507 = vec__76507;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta76522 = meta76522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core76521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76523,meta76522__$1){
var self__ = this;
var _76523__$1 = this;
return (new reitit.core.t_reitit$core76521(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__76507,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta76522__$1));
}));

(reitit.core.t_reitit$core76521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76523){
var self__ = this;
var _76523__$1 = this;
return self__.meta76522;
}));

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
}));

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = (function (){var and__5140__auto__ = self__.match_by_path;
if(cljs.core.truth_(and__5140__auto__)){
return (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core76521.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
var G__76527 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__76527) : match.call(null,G__76527));
} else {
return null;
}
}));

(reitit.core.t_reitit$core76521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__76507","vec__76507",156961042,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta76522","meta76522",-1494443534,null)], null);
}));

(reitit.core.t_reitit$core76521.cljs$lang$type = true);

(reitit.core.t_reitit$core76521.cljs$lang$ctorStr = "reitit.core/t_reitit$core76521");

(reitit.core.t_reitit$core76521.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.core/t_reitit$core76521");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core76521.
 */
reitit.core.__GT_t_reitit$core76521 = (function reitit$core$__GT_t_reitit$core76521(matcher,names,compiled_routes,routes,lookup,vec__76507,pl,nl,match_by_path,compiler,opts,meta76522){
return (new reitit.core.t_reitit$core76521(matcher,names,compiled_routes,routes,lookup,vec__76507,pl,nl,match_by_path,compiler,opts,meta76522));
});


/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__76505 = arguments.length;
switch (G__76505) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__76507 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__76510,p__76511){
var vec__76512 = p__76510;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76512,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76512,(1),null);
var vec__76515 = p__76511;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76515,(0),null);
var map__76518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76515,(1),null);
var map__76518__$1 = cljs.core.__destructure_map(map__76518);
var data = map__76518__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76515,(2),null);
var map__76519 = reitit.impl.parse(p,opts);
var map__76519__$1 = cljs.core.__destructure_map(map__76519);
var route = map__76519__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76519__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__76503_SHARP_){
var temp__5823__auto__ = reitit.impl.path_for(route,p1__76503_SHARP_);
if(cljs.core.truth_(temp__5823__auto__)){
var path = temp__5823__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__76503_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__76503_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76507,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76507,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = (cljs.core.truth_(matcher)?reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler):null);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core76521(matcher,names,compiled_routes,routes,lookup,vec__76507,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core76547 = (function (p,names,match,data,compiled_routes,routes,vec__76536,n,vec__76542,vec__76539,result,opts,meta76548){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__76536 = vec__76536;
this.n = n;
this.vec__76542 = vec__76542;
this.vec__76539 = vec__76539;
this.result = result;
this.opts = opts;
this.meta76548 = meta76548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core76547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76549,meta76548__$1){
var self__ = this;
var _76549__$1 = this;
return (new reitit.core.t_reitit$core76547(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__76536,self__.n,self__.vec__76542,self__.vec__76539,self__.result,self__.opts,meta76548__$1));
}));

(reitit.core.t_reitit$core76547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76549){
var self__ = this;
var _76549__$1 = this;
return self__.meta76548;
}));

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core76547.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core76547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__76536","vec__76536",1842550635,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__76542","vec__76542",-55557391,null),new cljs.core.Symbol(null,"vec__76539","vec__76539",-666889997,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta76548","meta76548",-1849541161,null)], null);
}));

(reitit.core.t_reitit$core76547.cljs$lang$type = true);

(reitit.core.t_reitit$core76547.cljs$lang$ctorStr = "reitit.core/t_reitit$core76547");

(reitit.core.t_reitit$core76547.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.core/t_reitit$core76547");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core76547.
 */
reitit.core.__GT_t_reitit$core76547 = (function reitit$core$__GT_t_reitit$core76547(p,names,match,data,compiled_routes,routes,vec__76536,n,vec__76542,vec__76539,result,opts,meta76548){
return (new reitit.core.t_reitit$core76547(p,names,match,data,compiled_routes,routes,vec__76536,n,vec__76542,vec__76539,result,opts,meta76548));
});


/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__76534 = arguments.length;
switch (G__76534) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((""+":single-static-path-router requires exactly 1 static route: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__76536 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76536,(0),null);
var names = vec__76536;
var vec__76539 = compiled_routes;
var vec__76542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76539,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76542,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76542,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76542,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core76547(p__$1,names,match,data,compiled_routes,routes,vec__76536,n,vec__76542,vec__76539,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core76576 = (function (names,compiled_routes,map__76571,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta76577){
this.names = names;
this.compiled_routes = compiled_routes;
this.map__76571 = map__76571;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta76577 = meta76577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core76576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76578,meta76577__$1){
var self__ = this;
var _76578__$1 = this;
return (new reitit.core.t_reitit$core76576(self__.names,self__.compiled_routes,self__.map__76571,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta76577__$1));
}));

(reitit.core.t_reitit$core76576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76578){
var self__ = this;
var _76578__$1 = this;
return self__.meta76577;
}));

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5142__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5142__auto__ = reitit.core.match_by_name(self__.static_router,name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core76576.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__5142__auto__ = reitit.core.match_by_name(self__.static_router,name,path_params);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core76576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"map__76571","map__76571",-1244379322,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta76577","meta76577",-180751470,null)], null);
}));

(reitit.core.t_reitit$core76576.cljs$lang$type = true);

(reitit.core.t_reitit$core76576.cljs$lang$ctorStr = "reitit.core/t_reitit$core76576");

(reitit.core.t_reitit$core76576.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.core/t_reitit$core76576");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core76576.
 */
reitit.core.__GT_t_reitit$core76576 = (function reitit$core$__GT_t_reitit$core76576(names,compiled_routes,map__76571,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta76577){
return (new reitit.core.t_reitit$core76576(names,compiled_routes,map__76571,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta76577));
});


/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__76566 = arguments.length;
switch (G__76566) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__76571 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__76571__$1 = cljs.core.__destructure_map(map__76571);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76571__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76571__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core76576(names,compiled_routes,map__76571__$1,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core76654 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,map__76646,opts,meta76655){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.map__76646 = map__76646;
this.opts = opts;
this.meta76655 = meta76655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core76654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76656,meta76655__$1){
var self__ = this;
var _76656__$1 = this;
return (new reitit.core.t_reitit$core76654(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.map__76646,self__.opts,meta76655__$1));
}));

(reitit.core.t_reitit$core76654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76656){
var self__ = this;
var _76656__$1 = this;
return self__.meta76655;
}));

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5142__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5142__auto__ = reitit.core.match_by_name(self__.mixed_router,name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core76654.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__5142__auto__ = reitit.core.match_by_name(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core76654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"map__76646","map__76646",703469628,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta76655","meta76655",732108877,null)], null);
}));

(reitit.core.t_reitit$core76654.cljs$lang$type = true);

(reitit.core.t_reitit$core76654.cljs$lang$ctorStr = "reitit.core/t_reitit$core76654");

(reitit.core.t_reitit$core76654.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"reitit.core/t_reitit$core76654");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core76654.
 */
reitit.core.__GT_t_reitit$core76654 = (function reitit$core$__GT_t_reitit$core76654(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,map__76646,opts,meta76655){
return (new reitit.core.t_reitit$core76654(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,map__76646,opts,meta76655));
});


/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__76636 = arguments.length;
switch (G__76636) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths((function (){var or__5142__auto__ = new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reitit.impl.path_conflicting_routes(compiled_routes,opts);
}
})());
var conflicting_QMARK_ = (function (p1__76628_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__76628_SHARP_));
});
var map__76646 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__76646__$1 = cljs.core.__destructure_map(map__76646);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76646__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76646__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core76654(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,map__76646__$1,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__76709,_){
var vec__76713 = p__76709;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76713,(0),null);
var map__76716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76713,(1),null);
var map__76716__$1 = cljs.core.__destructure_map(map__76716);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__76724,_){
var vec__76728 = p__76724;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76728,(0),null);
var map__76731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76728,(1),null);
var map__76731__$1 = cljs.core.__destructure_map(map__76731);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76731__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"update-paths","update-paths",-813404599),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.any_QMARK_], null),reitit.impl.accumulate], null)], null),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key             | description
 *   | ----------------|-------------
 *   | `:path`         | Base-path for routes
 *   | `:routes`       | Initial resolved routes (default `[]`)
 *   | `:data`         | Initial route data (default `{}`)
 *   | `:spec`         | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`       | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`       | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`       | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`      | Function of `route opts => result` to compile a route handler
 *   | `:validate`     | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts`    | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception`    | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:meta-merge`   | Function of `left right => merged` to merge route-data (default `meta-merge.core/meta-merge`)
 *   | `:update-paths` | Sequence of Vectors with elements `update-path` and `function`, used to preprocess route data
 *   | `:router`       | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__76751 = arguments.length;
switch (G__76751) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__76760 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__76760__$1 = cljs.core.__destructure_map(map__76760);
var opts__$1 = map__76760__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76760__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var conflicts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76760__$1,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816));
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = ((cljs.core.not((function (){var and__5140__auto__ = router;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(conflicts);
} else {
return and__5140__auto__;
}
})()))?reitit.impl.path_conflicting_routes(routes,opts__$1):null);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5825__auto___76995 = (function (){var and__5140__auto__ = conflicts;
if(cljs.core.truth_(and__5140__auto__)){
return reitit.impl.unresolved_conflicts(path_conflicting);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___76995)){
var conflict_report_76997 = temp__5825__auto___76995;
(conflicts.cljs$core$IFn$_invoke$arity$1 ? conflicts.cljs$core$IFn$_invoke$arity$1(conflict_report_76997) : conflicts.call(null,conflict_report_76997));
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5825__auto___76998 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5825__auto___76998)){
var validate_77000 = temp__5825__auto___76998;
(validate_77000.cljs$core$IFn$_invoke$arity$2 ? validate_77000.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_77000.call(null,compiled_routes,opts__$1));
} else {
}

var G__76786 = compiled_routes;
var G__76787 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429),path_conflicting);
return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(G__76786,G__76787) : router__$1.call(null,G__76786,G__76787));
}catch (e76767){if((e76767 instanceof Error)){
var e = e76767;
throw (function (){var fexpr__76770 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity);
return (fexpr__76770.cljs$core$IFn$_invoke$arity$1 ? fexpr__76770.cljs$core$IFn$_invoke$arity$1(e) : fexpr__76770.call(null,e));
})();
} else {
throw e76767;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.core.js.map
