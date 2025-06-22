goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_101574 = (function (this$,type){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5374__auto__.call(null,this$,type));
} else {
var m__5372__auto__ = (malli.registry._schema["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5372__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_101574(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_101579 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schemas[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (malli.registry._schemas["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_101579(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry101276 = (function (m,fm,meta101277){
this.m = m;
this.fm = fm;
this.meta101277 = meta101277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry101276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101278,meta101277__$1){
var self__ = this;
var _101278__$1 = this;
return (new malli.registry.t_malli$registry101276(self__.m,self__.fm,meta101277__$1));
}));

(malli.registry.t_malli$registry101276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101278){
var self__ = this;
var _101278__$1 = this;
return self__.meta101277;
}));

(malli.registry.t_malli$registry101276.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry101276.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry101276.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry101276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta101277","meta101277",-307963014,null)], null);
}));

(malli.registry.t_malli$registry101276.cljs$lang$type = true);

(malli.registry.t_malli$registry101276.cljs$lang$ctorStr = "malli.registry/t_malli$registry101276");

(malli.registry.t_malli$registry101276.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry101276");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry101276.
 */
malli.registry.__GT_t_malli$registry101276 = (function malli$registry$__GT_t_malli$registry101276(m,fm,meta101277){
return (new malli.registry.t_malli$registry101276(m,fm,meta101277));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry101276(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry101284 = (function (m,meta101285){
this.m = m;
this.meta101285 = meta101285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry101284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101286,meta101285__$1){
var self__ = this;
var _101286__$1 = this;
return (new malli.registry.t_malli$registry101284(self__.m,meta101285__$1));
}));

(malli.registry.t_malli$registry101284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101286){
var self__ = this;
var _101286__$1 = this;
return self__.meta101285;
}));

(malli.registry.t_malli$registry101284.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry101284.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry101284.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry101284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta101285","meta101285",-2132185548,null)], null);
}));

(malli.registry.t_malli$registry101284.cljs$lang$type = true);

(malli.registry.t_malli$registry101284.cljs$lang$ctorStr = "malli.registry/t_malli$registry101284");

(malli.registry.t_malli$registry101284.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry101284");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry101284.
 */
malli.registry.__GT_t_malli$registry101284 = (function malli$registry$__GT_t_malli$registry101284(m,meta101285){
return (new malli.registry.t_malli$registry101284(m,meta101285));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry101284(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry101324 = (function (meta101325){
this.meta101325 = meta101325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry101324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101326,meta101325__$1){
var self__ = this;
var _101326__$1 = this;
return (new malli.registry.t_malli$registry101324(meta101325__$1));
}));

(malli.registry.t_malli$registry101324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101326){
var self__ = this;
var _101326__$1 = this;
return self__.meta101325;
}));

(malli.registry.t_malli$registry101324.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry101324.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry101324.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry101324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta101325","meta101325",849942783,null)], null);
}));

(malli.registry.t_malli$registry101324.cljs$lang$type = true);

(malli.registry.t_malli$registry101324.cljs$lang$ctorStr = "malli.registry/t_malli$registry101324");

(malli.registry.t_malli$registry101324.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry101324");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry101324.
 */
malli.registry.__GT_t_malli$registry101324 = (function malli$registry$__GT_t_malli$registry101324(meta101325){
return (new malli.registry.t_malli$registry101324(meta101325));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry101324(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry101359 = (function (_QMARK_registries,registries,meta101360){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta101360 = meta101360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry101359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101361,meta101360__$1){
var self__ = this;
var _101361__$1 = this;
return (new malli.registry.t_malli$registry101359(self__._QMARK_registries,self__.registries,meta101360__$1));
}));

(malli.registry.t_malli$registry101359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101361){
var self__ = this;
var _101361__$1 = this;
return self__.meta101360;
}));

(malli.registry.t_malli$registry101359.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry101359.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__101347_SHARP_){
return malli.registry._schema(p1__101347_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry101359.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry101359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta101360","meta101360",421413648,null)], null);
}));

(malli.registry.t_malli$registry101359.cljs$lang$type = true);

(malli.registry.t_malli$registry101359.cljs$lang$ctorStr = "malli.registry/t_malli$registry101359");

(malli.registry.t_malli$registry101359.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry101359");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry101359.
 */
malli.registry.__GT_t_malli$registry101359 = (function malli$registry$__GT_t_malli$registry101359(_QMARK_registries,registries,meta101360){
return (new malli.registry.t_malli$registry101359(_QMARK_registries,registries,meta101360));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___101610 = arguments.length;
var i__5750__auto___101611 = (0);
while(true){
if((i__5750__auto___101611 < len__5749__auto___101610)){
args__5755__auto__.push((arguments[i__5750__auto___101611]));

var G__101612 = (i__5750__auto___101611 + (1));
i__5750__auto___101611 = G__101612;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry101359(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq101351){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101351));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry101417 = (function (db,meta101418){
this.db = db;
this.meta101418 = meta101418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry101417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101419,meta101418__$1){
var self__ = this;
var _101419__$1 = this;
return (new malli.registry.t_malli$registry101417(self__.db,meta101418__$1));
}));

(malli.registry.t_malli$registry101417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101419){
var self__ = this;
var _101419__$1 = this;
return self__.meta101418;
}));

(malli.registry.t_malli$registry101417.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry101417.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry101417.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry101417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta101418","meta101418",-1176501378,null)], null);
}));

(malli.registry.t_malli$registry101417.cljs$lang$type = true);

(malli.registry.t_malli$registry101417.cljs$lang$ctorStr = "malli.registry/t_malli$registry101417");

(malli.registry.t_malli$registry101417.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry101417");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry101417.
 */
malli.registry.__GT_t_malli$registry101417 = (function malli$registry$__GT_t_malli$registry101417(db,meta101418){
return (new malli.registry.t_malli$registry101417(db,meta101418));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry101417(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry101468 = (function (meta101469){
this.meta101469 = meta101469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry101468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101470,meta101469__$1){
var self__ = this;
var _101470__$1 = this;
return (new malli.registry.t_malli$registry101468(meta101469__$1));
}));

(malli.registry.t_malli$registry101468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101470){
var self__ = this;
var _101470__$1 = this;
return self__.meta101469;
}));

(malli.registry.t_malli$registry101468.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry101468.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry101468.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry101468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta101469","meta101469",510486352,null)], null);
}));

(malli.registry.t_malli$registry101468.cljs$lang$type = true);

(malli.registry.t_malli$registry101468.cljs$lang$ctorStr = "malli.registry/t_malli$registry101468");

(malli.registry.t_malli$registry101468.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry101468");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry101468.
 */
malli.registry.__GT_t_malli$registry101468 = (function malli$registry$__GT_t_malli$registry101468(meta101469){
return (new malli.registry.t_malli$registry101468(meta101469));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry101468(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry101496 = (function (meta101497){
this.meta101497 = meta101497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry101496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101498,meta101497__$1){
var self__ = this;
var _101498__$1 = this;
return (new malli.registry.t_malli$registry101496(meta101497__$1));
}));

(malli.registry.t_malli$registry101496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101498){
var self__ = this;
var _101498__$1 = this;
return self__.meta101497;
}));

(malli.registry.t_malli$registry101496.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry101496.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry101496.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry101496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta101497","meta101497",689176331,null)], null);
}));

(malli.registry.t_malli$registry101496.cljs$lang$type = true);

(malli.registry.t_malli$registry101496.cljs$lang$ctorStr = "malli.registry/t_malli$registry101496");

(malli.registry.t_malli$registry101496.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry101496");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry101496.
 */
malli.registry.__GT_t_malli$registry101496 = (function malli$registry$__GT_t_malli$registry101496(meta101497){
return (new malli.registry.t_malli$registry101496(meta101497));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry101496(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry101514 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta101515){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta101515 = meta101515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry101514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101516,meta101515__$1){
var self__ = this;
var _101516__$1 = this;
return (new malli.registry.t_malli$registry101514(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta101515__$1));
}));

(malli.registry.t_malli$registry101514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101516){
var self__ = this;
var _101516__$1 = this;
return self__.meta101515;
}));

(malli.registry.t_malli$registry101514.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry101514.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__101527 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__101527.cljs$core$IFn$_invoke$arity$1 ? fexpr__101527.cljs$core$IFn$_invoke$arity$1(name) : fexpr__101527.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5823__auto__ = (function (){var G__101528 = name;
var G__101529 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__101528,G__101529) : self__.provider.call(null,G__101528,G__101529));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var schema = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry101514.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry101514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta101515","meta101515",1554361589,null)], null);
}));

(malli.registry.t_malli$registry101514.cljs$lang$type = true);

(malli.registry.t_malli$registry101514.cljs$lang$ctorStr = "malli.registry/t_malli$registry101514");

(malli.registry.t_malli$registry101514.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry101514");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry101514.
 */
malli.registry.__GT_t_malli$registry101514 = (function malli$registry$__GT_t_malli$registry101514(default_registry,provider,cache_STAR_,registry_STAR_,meta101515){
return (new malli.registry.t_malli$registry101514(default_registry,provider,cache_STAR_,registry_STAR_,meta101515));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry101514(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
