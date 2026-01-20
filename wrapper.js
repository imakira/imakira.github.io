const hljs = require("./highlight.js");
const language_alias = {
    "emacs-lisp": "lisp",
    "racket": "lisp",
    "fennel": "lisp",
    "cljs":  "clojure",
    "cljc": "clojure",
}
const language_alias_wrapper = (alias, code) =>{
    hljs.registerLanguage(alias,  require(`./highlight.js/lib/languages/${code}`));
};
const highlight_wrapper = (code, lang) =>{
    return hljs.highlight(code, {language: lang}).value;
};
for(let k of Object.keys(language_alias)){
    language_alias_wrapper(k,language_alias[k]);
}
module.exports = {
    language_alias_wrapper: language_alias_wrapper,
    highlight_wrapper: highlight_wrapper
};
