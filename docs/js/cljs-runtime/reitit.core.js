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

var reitit$core$Expand$expand$dyn_77937 = (function (this$,opts){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.expand[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5498__auto__.call(null,this$,opts));
} else {
var m__5496__auto__ = (reitit.core.expand["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5496__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_77937(this$,opts);
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

var reitit$core$Router$router_name$dyn_77942 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.router_name[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (reitit.core.router_name["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_77942(this$);
}
});

var reitit$core$Router$routes$dyn_77944 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.routes[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (reitit.core.routes["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_77944(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_77945 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_77945(this$);
}
});

var reitit$core$Router$options$dyn_77946 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.options[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (reitit.core.options["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_77946(this$);
}
});

var reitit$core$Router$route_names$dyn_77947 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.route_names[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (reitit.core.route_names["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_77947(this$);
}
});

var reitit$core$Router$match_by_path$dyn_77948 = (function (this$,path){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.match_by_path[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5498__auto__.call(null,this$,path));
} else {
var m__5496__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5496__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_77948(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_77949 = (function() {
var G__77950 = null;
var G__77950__2 = (function (this$,name){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5498__auto__.call(null,this$,name));
} else {
var m__5496__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5496__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__77950__3 = (function (this$,name,path_params){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__5498__auto__.call(null,this$,name,path_params));
} else {
var m__5496__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__5496__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
G__77950 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__77950__2.call(this,this$,name);
case 3:
return G__77950__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__77950.cljs$core$IFn$_invoke$arity$2 = G__77950__2;
G__77950.cljs$core$IFn$_invoke$arity$3 = G__77950__3;
return G__77950;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__77313 = arguments.length;
switch (G__77313) {
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
return reitit$core$Router$match_by_name$dyn_77949(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_77949(this$,name,path_params);
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
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k77322,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__77338 = k77322;
var G__77338__$1 = (((G__77338 instanceof cljs.core.Keyword))?G__77338.fqn:null);
switch (G__77338__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77322,else__5450__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__77343){
var vec__77346 = p__77343;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77346,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77346,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#reitit.core.Match{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77321){
var self__ = this;
var G__77321__$1 = this;
return (new cljs.core.RecordIter((0),G__77321__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77323,other77324){
var self__ = this;
var this77323__$1 = this;
return (((!((other77324 == null)))) && ((((this77323__$1.constructor === other77324.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77323__$1.template,other77324.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77323__$1.data,other77324.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77323__$1.result,other77324.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77323__$1.path_params,other77324.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77323__$1.path,other77324.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77323__$1.__extmap,other77324.__extmap)))))))))))))));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k77322){
var self__ = this;
var this__5454__auto____$1 = this;
var G__77392 = k77322;
var G__77392__$1 = (((G__77392 instanceof cljs.core.Keyword))?G__77392.fqn:null);
switch (G__77392__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77322);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__77321){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__77395 = cljs.core.keyword_identical_QMARK_;
var expr__77396 = k__5456__auto__;
if(cljs.core.truth_((pred__77395.cljs$core$IFn$_invoke$arity$2 ? pred__77395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__77396) : pred__77395.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__77396)))){
return (new reitit.core.Match(G__77321,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77395.cljs$core$IFn$_invoke$arity$2 ? pred__77395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__77396) : pred__77395.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__77396)))){
return (new reitit.core.Match(self__.template,G__77321,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77395.cljs$core$IFn$_invoke$arity$2 ? pred__77395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__77396) : pred__77395.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__77396)))){
return (new reitit.core.Match(self__.template,self__.data,G__77321,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77395.cljs$core$IFn$_invoke$arity$2 ? pred__77395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__77396) : pred__77395.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__77396)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__77321,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77395.cljs$core$IFn$_invoke$arity$2 ? pred__77395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__77396) : pred__77395.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__77396)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__77321,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__77321),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__77321){
var self__ = this;
var this__5446__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__77321,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"reitit.core/Match");
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
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__77334){
var extmap__5489__auto__ = (function (){var G__77409 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77334,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__77334)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77409);
} else {
return G__77409;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__77334),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__77334),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__77334),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__77334),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__77334),null,cljs.core.not_empty(extmap__5489__auto__),null));
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
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k77413,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__77424 = k77413;
var G__77424__$1 = (((G__77424 instanceof cljs.core.Keyword))?G__77424.fqn:null);
switch (G__77424__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77413,else__5450__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__77426){
var vec__77428 = p__77426;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77428,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77428,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#reitit.core.PartialMatch{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77412){
var self__ = this;
var G__77412__$1 = this;
return (new cljs.core.RecordIter((0),G__77412__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77414,other77415){
var self__ = this;
var this77414__$1 = this;
return (((!((other77415 == null)))) && ((((this77414__$1.constructor === other77415.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77414__$1.template,other77415.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77414__$1.data,other77415.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77414__$1.result,other77415.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77414__$1.path_params,other77415.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77414__$1.required,other77415.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77414__$1.__extmap,other77415.__extmap)))))))))))))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k77413){
var self__ = this;
var this__5454__auto____$1 = this;
var G__77464 = k77413;
var G__77464__$1 = (((G__77464 instanceof cljs.core.Keyword))?G__77464.fqn:null);
switch (G__77464__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77413);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__77412){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__77466 = cljs.core.keyword_identical_QMARK_;
var expr__77467 = k__5456__auto__;
if(cljs.core.truth_((pred__77466.cljs$core$IFn$_invoke$arity$2 ? pred__77466.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__77467) : pred__77466.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__77467)))){
return (new reitit.core.PartialMatch(G__77412,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77466.cljs$core$IFn$_invoke$arity$2 ? pred__77466.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__77467) : pred__77466.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__77467)))){
return (new reitit.core.PartialMatch(self__.template,G__77412,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77466.cljs$core$IFn$_invoke$arity$2 ? pred__77466.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__77467) : pred__77466.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__77467)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__77412,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77466.cljs$core$IFn$_invoke$arity$2 ? pred__77466.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__77467) : pred__77466.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__77467)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__77412,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77466.cljs$core$IFn$_invoke$arity$2 ? pred__77466.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__77467) : pred__77466.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__77467)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__77412,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__77412),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__77412){
var self__ = this;
var this__5446__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__77412,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"reitit.core/PartialMatch");
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
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__77421){
var extmap__5489__auto__ = (function (){var G__77507 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77421,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__77421)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77507);
} else {
return G__77507;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__77421),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__77421),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__77421),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__77421),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__77421),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__77516 = arguments.length;
switch (G__77516) {
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
var temp__5821__auto__ = reitit.core.match_by_name(this$,name,path_params);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
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
var G__77537 = arguments.length;
switch (G__77537) {
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
var G__77545 = match;
var G__77545__$1 = (((G__77545 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__77545));
if((G__77545__$1 == null)){
return null;
} else {
var G__77550 = G__77545__$1;
if(cljs.core.seq(query_params)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77550)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string(query_params)));
} else {
return G__77550;
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
reitit.core.t_reitit$core77586 = (function (matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,vec__77563,meta77587){
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
this.vec__77563 = vec__77563;
this.meta77587 = meta77587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77588,meta77587__$1){
var self__ = this;
var _77588__$1 = this;
return (new reitit.core.t_reitit$core77586(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,self__.vec__77563,meta77587__$1));
}));

(reitit.core.t_reitit$core77586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77588){
var self__ = this;
var _77588__$1 = this;
return self__.meta77587;
}));

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5821__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5821__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77586.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5821__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
var G__77617 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__77617) : match.call(null,G__77617));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__77563","vec__77563",-1282283202,null),new cljs.core.Symbol(null,"meta77587","meta77587",2125993532,null)], null);
}));

(reitit.core.t_reitit$core77586.cljs$lang$type = true);

(reitit.core.t_reitit$core77586.cljs$lang$ctorStr = "reitit.core/t_reitit$core77586");

(reitit.core.t_reitit$core77586.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"reitit.core/t_reitit$core77586");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77586.
 */
reitit.core.__GT_t_reitit$core77586 = (function reitit$core$__GT_t_reitit$core77586(matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,vec__77563,meta77587){
return (new reitit.core.t_reitit$core77586(matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,vec__77563,meta77587));
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
var G__77559 = arguments.length;
switch (G__77559) {
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
var vec__77563 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__77566,p__77567){
var vec__77569 = p__77566;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77569,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77569,(1),null);
var vec__77572 = p__77567;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77572,(0),null);
var map__77575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77572,(1),null);
var map__77575__$1 = cljs.core.__destructure_map(map__77575);
var data = map__77575__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77575__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77572,(2),null);
var map__77578 = reitit.impl.parse(p,opts);
var map__77578__$1 = cljs.core.__destructure_map(map__77578);
var route = map__77578__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77578__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__77556_SHARP_){
var temp__5821__auto__ = reitit.impl.path_for(route,p1__77556_SHARP_);
if(cljs.core.truth_(temp__5821__auto__)){
var path = temp__5821__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__77556_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__77556_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77563,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77563,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core77586(matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,vec__77563,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77660 = (function (names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__77641,meta77661){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.vec__77641 = vec__77641;
this.meta77661 = meta77661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77662,meta77661__$1){
var self__ = this;
var _77662__$1 = this;
return (new reitit.core.t_reitit$core77660(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,self__.vec__77641,meta77661__$1));
}));

(reitit.core.t_reitit$core77660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77662){
var self__ = this;
var _77662__$1 = this;
return self__.meta77661;
}));

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5821__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77660.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5821__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
var G__77673 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__77673) : match.call(null,G__77673));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__77641","vec__77641",840816861,null),new cljs.core.Symbol(null,"meta77661","meta77661",2017576454,null)], null);
}));

(reitit.core.t_reitit$core77660.cljs$lang$type = true);

(reitit.core.t_reitit$core77660.cljs$lang$ctorStr = "reitit.core/t_reitit$core77660");

(reitit.core.t_reitit$core77660.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"reitit.core/t_reitit$core77660");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77660.
 */
reitit.core.__GT_t_reitit$core77660 = (function reitit$core$__GT_t_reitit$core77660(names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__77641,meta77661){
return (new reitit.core.t_reitit$core77660(names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__77641,meta77661));
});


/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__77638 = arguments.length;
switch (G__77638) {
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
var temp__5823__auto___78035 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5823__auto___78035){
var wilds_78040 = temp__5823__auto___78035;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((""+"can't create :lookup-router with wildcard routes: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_78040)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_78040,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__77641 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__77645,p__77646){
var vec__77647 = p__77645;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77647,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77647,(1),null);
var vec__77650 = p__77646;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77650,(0),null);
var map__77653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77650,(1),null);
var map__77653__$1 = cljs.core.__destructure_map(map__77653);
var data = map__77653__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77650,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__77633_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__77633_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77641,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77641,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core77660(names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__77641,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77716 = (function (matcher,names,compiled_routes,routes,lookup,pl,vec__77694,nl,match_by_path,compiler,opts,meta77717){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.vec__77694 = vec__77694;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta77717 = meta77717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77718,meta77717__$1){
var self__ = this;
var _77718__$1 = this;
return (new reitit.core.t_reitit$core77716(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.vec__77694,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta77717__$1));
}));

(reitit.core.t_reitit$core77716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77718){
var self__ = this;
var _77718__$1 = this;
return self__.meta77717;
}));

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
}));

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5821__auto__ = (function (){var and__5139__auto__ = self__.match_by_path;
if(cljs.core.truth_(and__5139__auto__)){
return (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
} else {
return and__5139__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5821__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77716.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5821__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
var G__77750 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__77750) : match.call(null,G__77750));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"vec__77694","vec__77694",-603273801,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta77717","meta77717",-1824798677,null)], null);
}));

(reitit.core.t_reitit$core77716.cljs$lang$type = true);

(reitit.core.t_reitit$core77716.cljs$lang$ctorStr = "reitit.core/t_reitit$core77716");

(reitit.core.t_reitit$core77716.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"reitit.core/t_reitit$core77716");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77716.
 */
reitit.core.__GT_t_reitit$core77716 = (function reitit$core$__GT_t_reitit$core77716(matcher,names,compiled_routes,routes,lookup,pl,vec__77694,nl,match_by_path,compiler,opts,meta77717){
return (new reitit.core.t_reitit$core77716(matcher,names,compiled_routes,routes,lookup,pl,vec__77694,nl,match_by_path,compiler,opts,meta77717));
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
var G__77688 = arguments.length;
switch (G__77688) {
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
var vec__77694 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__77697,p__77698){
var vec__77700 = p__77697;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77700,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77700,(1),null);
var vec__77703 = p__77698;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77703,(0),null);
var map__77706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77703,(1),null);
var map__77706__$1 = cljs.core.__destructure_map(map__77706);
var data = map__77706__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77706__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77703,(2),null);
var map__77708 = reitit.impl.parse(p,opts);
var map__77708__$1 = cljs.core.__destructure_map(map__77708);
var route = map__77708__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77708__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__77686_SHARP_){
var temp__5821__auto__ = reitit.impl.path_for(route,p1__77686_SHARP_);
if(cljs.core.truth_(temp__5821__auto__)){
var path = temp__5821__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__77686_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__77686_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77694,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77694,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = (cljs.core.truth_(matcher)?reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler):null);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core77716(matcher,names,compiled_routes,routes,lookup,pl,vec__77694,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77808 = (function (p,names,match,data,compiled_routes,routes,vec__77802,vec__77799,n,vec__77805,result,opts,meta77809){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__77802 = vec__77802;
this.vec__77799 = vec__77799;
this.n = n;
this.vec__77805 = vec__77805;
this.result = result;
this.opts = opts;
this.meta77809 = meta77809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77810,meta77809__$1){
var self__ = this;
var _77810__$1 = this;
return (new reitit.core.t_reitit$core77808(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__77802,self__.vec__77799,self__.n,self__.vec__77805,self__.result,self__.opts,meta77809__$1));
}));

(reitit.core.t_reitit$core77808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77810){
var self__ = this;
var _77810__$1 = this;
return self__.meta77809;
}));

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core77808.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__77802","vec__77802",-1816134134,null),new cljs.core.Symbol(null,"vec__77799","vec__77799",375360268,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__77805","vec__77805",-408588684,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta77809","meta77809",-1033161053,null)], null);
}));

(reitit.core.t_reitit$core77808.cljs$lang$type = true);

(reitit.core.t_reitit$core77808.cljs$lang$ctorStr = "reitit.core/t_reitit$core77808");

(reitit.core.t_reitit$core77808.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"reitit.core/t_reitit$core77808");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77808.
 */
reitit.core.__GT_t_reitit$core77808 = (function reitit$core$__GT_t_reitit$core77808(p,names,match,data,compiled_routes,routes,vec__77802,vec__77799,n,vec__77805,result,opts,meta77809){
return (new reitit.core.t_reitit$core77808(p,names,match,data,compiled_routes,routes,vec__77802,vec__77799,n,vec__77805,result,opts,meta77809));
});


/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__77778 = arguments.length;
switch (G__77778) {
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
if(cljs.core.truth_((function (){var or__5141__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__5141__auto__){
return or__5141__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((""+":single-static-path-router requires exactly 1 static route: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__77799 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77799,(0),null);
var names = vec__77799;
var vec__77802 = compiled_routes;
var vec__77805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77802,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77805,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77805,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77805,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core77808(p__$1,names,match,data,compiled_routes,routes,vec__77802,vec__77799,n,vec__77805,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77841 = (function (names,compiled_routes,map__77838,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta77842){
this.names = names;
this.compiled_routes = compiled_routes;
this.map__77838 = map__77838;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta77842 = meta77842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77843,meta77842__$1){
var self__ = this;
var _77843__$1 = this;
return (new reitit.core.t_reitit$core77841(self__.names,self__.compiled_routes,self__.map__77838,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta77842__$1));
}));

(reitit.core.t_reitit$core77841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77843){
var self__ = this;
var _77843__$1 = this;
return self__.meta77842;
}));

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5141__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5141__auto__ = reitit.core.match_by_name(self__.static_router,name);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core77841.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__5141__auto__ = reitit.core.match_by_name(self__.static_router,name,path_params);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core77841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"map__77838","map__77838",-1442918840,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta77842","meta77842",1492346164,null)], null);
}));

(reitit.core.t_reitit$core77841.cljs$lang$type = true);

(reitit.core.t_reitit$core77841.cljs$lang$ctorStr = "reitit.core/t_reitit$core77841");

(reitit.core.t_reitit$core77841.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"reitit.core/t_reitit$core77841");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77841.
 */
reitit.core.__GT_t_reitit$core77841 = (function reitit$core$__GT_t_reitit$core77841(names,compiled_routes,map__77838,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta77842){
return (new reitit.core.t_reitit$core77841(names,compiled_routes,map__77838,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta77842));
});


/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__77835 = arguments.length;
switch (G__77835) {
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
var map__77838 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__77838__$1 = cljs.core.__destructure_map(map__77838);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77838__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77838__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core77841(names,compiled_routes,map__77838__$1,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77881 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,map__77874,conflicting_QMARK_,mixed_router,linear_router,opts,meta77882){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.map__77874 = map__77874;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta77882 = meta77882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77883,meta77882__$1){
var self__ = this;
var _77883__$1 = this;
return (new reitit.core.t_reitit$core77881(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.map__77874,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta77882__$1));
}));

(reitit.core.t_reitit$core77881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77883){
var self__ = this;
var _77883__$1 = this;
return self__.meta77882;
}));

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5141__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5141__auto__ = reitit.core.match_by_name(self__.mixed_router,name);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core77881.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__5141__auto__ = reitit.core.match_by_name(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core77881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"map__77874","map__77874",467985386,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta77882","meta77882",1093994344,null)], null);
}));

(reitit.core.t_reitit$core77881.cljs$lang$type = true);

(reitit.core.t_reitit$core77881.cljs$lang$ctorStr = "reitit.core/t_reitit$core77881");

(reitit.core.t_reitit$core77881.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"reitit.core/t_reitit$core77881");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77881.
 */
reitit.core.__GT_t_reitit$core77881 = (function reitit$core$__GT_t_reitit$core77881(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,map__77874,conflicting_QMARK_,mixed_router,linear_router,opts,meta77882){
return (new reitit.core.t_reitit$core77881(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,map__77874,conflicting_QMARK_,mixed_router,linear_router,opts,meta77882));
});


/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__77871 = arguments.length;
switch (G__77871) {
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
var conflicting_paths = reitit.impl.conflicting_paths((function (){var or__5141__auto__ = new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return reitit.impl.path_conflicting_routes(compiled_routes,opts);
}
})());
var conflicting_QMARK_ = (function (p1__77867_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__77867_SHARP_));
});
var map__77874 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__77874__$1 = cljs.core.__destructure_map(map__77874);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77874__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77874__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core77881(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,map__77874__$1,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__77897,_){
var vec__77898 = p__77897;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77898,(0),null);
var map__77901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77898,(1),null);
var map__77901__$1 = cljs.core.__destructure_map(map__77901);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__77904,_){
var vec__77905 = p__77904;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77905,(0),null);
var map__77908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77905,(1),null);
var map__77908__$1 = cljs.core.__destructure_map(map__77908);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77908__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
var G__77910 = arguments.length;
switch (G__77910) {
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
var map__77915 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__77915__$1 = cljs.core.__destructure_map(map__77915);
var opts__$1 = map__77915__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77915__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var conflicts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77915__$1,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816));
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = ((cljs.core.not((function (){var and__5139__auto__ = router;
if(cljs.core.truth_(and__5139__auto__)){
return cljs.core.not(conflicts);
} else {
return and__5139__auto__;
}
})()))?reitit.impl.path_conflicting_routes(routes,opts__$1):null);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5823__auto___78144 = (function (){var and__5139__auto__ = conflicts;
if(cljs.core.truth_(and__5139__auto__)){
return reitit.impl.unresolved_conflicts(path_conflicting);
} else {
return and__5139__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto___78144)){
var conflict_report_78145 = temp__5823__auto___78144;
(conflicts.cljs$core$IFn$_invoke$arity$1 ? conflicts.cljs$core$IFn$_invoke$arity$1(conflict_report_78145) : conflicts.call(null,conflict_report_78145));
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5823__auto___78146 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5823__auto___78146)){
var validate_78147 = temp__5823__auto___78146;
(validate_78147.cljs$core$IFn$_invoke$arity$2 ? validate_78147.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_78147.call(null,compiled_routes,opts__$1));
} else {
}

var G__77924 = compiled_routes;
var G__77925 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429),path_conflicting);
return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(G__77924,G__77925) : router__$1.call(null,G__77924,G__77925));
}catch (e77917){if((e77917 instanceof Error)){
var e = e77917;
throw (function (){var fexpr__77918 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity);
return (fexpr__77918.cljs$core$IFn$_invoke$arity$1 ? fexpr__77918.cljs$core$IFn$_invoke$arity$1(e) : fexpr__77918.call(null,e));
})();
} else {
throw e77917;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.core.js.map
