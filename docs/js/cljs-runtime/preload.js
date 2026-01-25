import "./cljs_env.js";
import "./cljs.core.js";
import "./uix.dev.js";
goog.provide('preload');
uix.dev.init_fast_refresh_BANG_();
preload.refresh = (function preload$refresh(){
return uix.dev.refresh_BANG_();
});

//# sourceMappingURL=preload.js.map
