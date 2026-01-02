import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
goog.provide('net.coruscation.cerulean.user_config');
net.coruscation.cerulean.user_config.remove_tailing_slash = (function net$coruscation$cerulean$user_config$remove_tailing_slash(str){
if(clojure.string.ends_with_QMARK_(str,"/")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(str,(0),(cljs.core.count(str) - (1)));
} else {
return str;
}
});
net.coruscation.cerulean.user_config.config = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Coruscation.net",new cljs.core.Keyword(null,"cname","cname",-619147179),"coruscation.net",new cljs.core.Keyword(null,"root-url","root-url",-1322760038),"https://coruscation.net",new cljs.core.Keyword(null,"author","author",2111686192),"imakira",new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/atom.xml",new cljs.core.Keyword(null,"external?","external?",579765478),true], null),new cljs.core.Keyword(null,"github","github",567794498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/imakira/cerulean"], null)], null),new cljs.core.Keyword(null,"navigation","navigation",369417),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"HOME",new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"ABOUT",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/imakira"], null),new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"PROJECTS",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/imakira"], null)], null),new cljs.core.Keyword(null,"special-pages","special-pages",-1180179584),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about"], null)], null);
net.coruscation.cerulean.user_config.title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.config);
net.coruscation.cerulean.user_config.root_url = net.coruscation.cerulean.user_config.remove_tailing_slash(new cljs.core.Keyword(null,"root-url","root-url",-1322760038).cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.config));
net.coruscation.cerulean.user_config.author = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.config);
net.coruscation.cerulean.user_config.links = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.config);
net.coruscation.cerulean.user_config.navigation = new cljs.core.Keyword(null,"navigation","navigation",369417).cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.config);
net.coruscation.cerulean.user_config.special_pages = new cljs.core.Keyword(null,"special-pages","special-pages",-1180179584).cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.config);
net.coruscation.cerulean.user_config.cname = new cljs.core.Keyword(null,"cname","cname",-619147179).cljs$core$IFn$_invoke$arity$1(net.coruscation.cerulean.user_config.config);

//# sourceMappingURL=net.coruscation.cerulean.user_config.js.map
