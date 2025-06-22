goog.provide('uix.dom.server');
var module$node_modules$react_dom$server_browser=shadow.js.require("module$node_modules$react_dom$server_browser", {});
/**
 * Same as https://react.dev/reference/react-dom/server/renderToString
 */
uix.dom.server.render_to_string = (function uix$dom$server$render_to_string(element){
return module$node_modules$react_dom$server_browser.renderToString(element);
});
/**
 * Same as https://react.dev/reference/react-dom/server/renderToStaticMarkup
 */
uix.dom.server.render_to_static_markup = (function uix$dom$server$render_to_static_markup(element){
return module$node_modules$react_dom$server_browser.renderToStaticMarkup(element);
});
/**
 * Same as https://react.dev/reference/react-dom/server/renderToStaticNodeStream
 */
uix.dom.server.render_to_static_node_stream = (function uix$dom$server$render_to_static_node_stream(element){
return module$node_modules$react_dom$server_browser.renderToStaticNodeStream(element);
});
/**
 * Same as https://react.dev/reference/react-dom/server/renderToPipeableStream
 */
uix.dom.server.render_to_pipeable_stream = (function uix$dom$server$render_to_pipeable_stream(var_args){
var G__101099 = arguments.length;
switch (G__101099) {
case 1:
return uix.dom.server.render_to_pipeable_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.dom.server.render_to_pipeable_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.dom.server.render_to_pipeable_stream.cljs$core$IFn$_invoke$arity$1 = (function (element){
return module$node_modules$react_dom$server_browser.renderToPipeableStream(element);
}));

(uix.dom.server.render_to_pipeable_stream.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
return module$node_modules$react_dom$server_browser.renderToPipeableStream(element,opts);
}));

(uix.dom.server.render_to_pipeable_stream.cljs$lang$maxFixedArity = 2);

/**
 * Same as https://react.dev/reference/react-dom/server/renderToReadableStream
 */
uix.dom.server.render_to_readable_stream = (function uix$dom$server$render_to_readable_stream(var_args){
var G__101102 = arguments.length;
switch (G__101102) {
case 1:
return uix.dom.server.render_to_readable_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.dom.server.render_to_readable_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.dom.server.render_to_readable_stream.cljs$core$IFn$_invoke$arity$1 = (function (element){
return module$node_modules$react_dom$server_browser.renderToReadableStream(element);
}));

(uix.dom.server.render_to_readable_stream.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
return module$node_modules$react_dom$server_browser.renderToReadableStream(element,opts);
}));

(uix.dom.server.render_to_readable_stream.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=uix.dom.server.js.map
