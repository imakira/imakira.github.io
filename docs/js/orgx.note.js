
import "./default.js";
import "./cljs-runtime/shadow.module.orgx.note.prepend.js";
SHADOW_ENV.setLoaded("shadow.module.orgx.note.prepend.js");
import "./cljs-runtime/orgx.note.js";
SHADOW_ENV.setLoaded("orgx.note.js");
import "./cljs-runtime/shadow.module.orgx.note.append.js";
SHADOW_ENV.setLoaded("shadow.module.orgx.note.append.js");
export default orgx.note.component;
export let component = orgx.note.component;

shadow.cljs.devtools.client.env.module_loaded("orgx.note");