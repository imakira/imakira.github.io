goog.provide('app.client');
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.root !== 'undefined')){
} else {
app.client.root = (new cljs.core.Delay((function (){
return uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("root"));
}),null));
}
app.client.render = (function app$client$render(){
return uix.dom.render_root(uix.compiler.alpha.component_element(app.common.pages.app,[null],[]),cljs.core.deref(app.client.root));
});
app.client.init = (function app$client$init(){
if(cljs.core.truth_(window.__cerulean_rehydrate)){
return uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$2(document.getElementById("root"),uix.compiler.alpha.component_element(app.common.pages.app,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),location.pathname], null)],[]));
} else {
return app.client.render();
}
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
