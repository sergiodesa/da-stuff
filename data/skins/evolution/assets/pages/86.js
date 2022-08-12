(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1725:function(t,e,n){"use strict";n.r(e);var o=n(3836),a=n(2081);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n(3175);var f=n(0),u=n(3177),p=n.n(u),s=Object(f.a)(a.default,o.a,o.b,!1,null,"66defed3",null);"function"==typeof p.a&&p()(s),e.default=s.exports},1923:function(t,e,n){"use strict";n(7),n(10),n(6),n(8),n(11);var o=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.getDiff=e.savePhpFpmTokens=e.getPhpFpmTokens=e.getPhpFpmConfiguration=e.saveDomainCustomization=e.getDomainCustomization=e.getDomainConfig=e.rewriteConfs=e.getDomains=void 0;var a=o(n(2)),r=o(n(38));n(57),n(5),n(13),n(15),n(21),n(79),n(40);var f=o(n(78)),u=n(32);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var i=u.fp.flow(u.fp.convert.toAppString,u.fp.convert.toLines),l=u.fp.flow((function(t){return t||""}),u.fp.convert.toAppString,u.fp.convert.toAppText),c="/CMD_CUSTOM_HTTPD",m=f.default.get({id:"CUSTOM_HTTPD_DOMAINS",url:c,pagination:!0,after:function(){return u.fp.flow(u.fp.mapProp("domains",u.fp.toTable()),u.fp.mapProp("file",u.fp.feedWith(1,(function(t){return["nginx","nginx_proxy","openlitespeed","httpd"].find((function(e){return"1"===t["have_".concat(e)]}))||"httpd"}))))}});e.getDomains=m;var d=f.default.post({url:c,params:{action:"all",rewrite_confs:!0}});e.rewriteConfs=d;var O=f.default.get({url:c,id:"CH_DOMAIN_CONFIG",schema:{domain:f.default.REQUIRED_STRING,proxy:f.default.OPTIONAL_BOOL},after:function(){return u.fp.flow((function(t){return{tokens:t.AVAILABLE_TOKENS,error:t.CONFIG_ERROR,test:t.CONFIG_TEST,data:t.HTTPD,templates:t}}),u.fp.mapProps({error:u.fp.isEqual("1"),nginx:u.fp.isEqual("1"),data:i,test:l,templates:u.fp.flow(u.fp.filter((function(t,e){return e.includes("VH")})),u.fp.filter(u.fp.getProp("data")),u.fp.toArray,u.fp.mapArrayProps({data:i,custom:u.fp.isEqual("1")})),tokens:u.fp.flow(u.fp.mapValues((function(t,e){return{token:e,value:t}})),u.fp.toArray)}))}});e.getDomainConfig=O;var _=f.default.get({url:c,id:"CH_DOMAIN_CUSTOMIZATION_VALUES",schema:{domain:f.default.REQUIRED_STRING,proxy:f.default.OPTIONAL_BOOL},after:function(){return u.fp.flow(u.fp.project({config:"CONFIG",custom1:"CUSTOM1",custom2:"CUSTOM2",custom3:"CUSTOM3",custom4:"CUSTOM4",custom5:"CUSTOM5",custom6:"CUSTOM6",custom7:"CUSTOM7",custom8:"CUSTOM8",tokens:"AVAILABLE_TOKENS",appendix:"VH1.custom_global_pre_post",tokensCount:"NUM_CUSTOM_TOKENS"}),u.fp.mapProps({config:l,custom1:l,custom2:l,custom3:l,custom4:l,custom5:l,custom6:l,custom7:l,custom8:l,nginx:u.fp.convert.toAppBoolean,tokensCount:u.fp.convert.toAppNumber,tokens:u.fp.flow(u.fp.mapValues((function(t,e){return{token:e,value:t}})),u.fp.toArray),appendix:u.fp.flow(u.fp.setDefault({}),u.fp.filter((function(t,e){return e.includes("CUSTOM")})),u.fp.mapValues(l),u.fp.transformObject((function(t,e){var n=e.match(/^.*(CUSTOM.*)$/),o=(0,r.default)(n,2)[1];return(0,a.default)({},o,{data:t,name:e})})))}))}});e.getDomainCustomization=_;var T=f.default.post({url:c,schema:{proxy:f.default.OPTIONAL_STRING,domain:f.default.REQUIRED_STRING,config:f.default.OPTIONAL_STRING,custom1:f.default.OPTIONAL_STRING,custom2:f.default.OPTIONAL_STRING,custom3:f.default.OPTIONAL_STRING,custom4:f.default.OPTIONAL_STRING,custom5:f.default.OPTIONAL_STRING,custom6:f.default.OPTIONAL_STRING,custom7:f.default.OPTIONAL_STRING,custom8:f.default.OPTIONAL_STRING}});e.saveDomainCustomization=T;var P=f.default.get({url:c,id:"CH_PHP_FPM_CONFIGURATION",schema:{user:f.default.REQUIRED_STRING,"php-fpm":f.default.REQUIRED_STRING},after:function(){return u.fp.flow(u.fp.project({error:"CONFIG_ERROR",test:"CONFIG_TEST",custom1:"CUSTOM1",custom2:"CUSTOM2",global_custom1:"GLOBAL_CUSTOM1",global_custom2:"GLOBAL_CUSTOM2","config.data":"FPM_CONFIG","config.file":"FPM_CONFIG_FILE","config.version":"FPM_VER","template.custom":"PHP_FPM_IS_CUSTOM_TEMPLATE","template.data":"PHP_FPM_TEMPLATE","template.name":"PHP_FPM_TEMPLATE_NAME","template.short":"PHP_FPM_TEMPLATE_NAME_SHORT"}),u.fp.mapProps({error:u.fp.isEqual("1"),test:l,custom1:l,custom2:l,config:u.fp.mapProp("data",i),template:u.fp.mapProps({custom:u.fp.isEqual("1"),data:i})}))}});e.getPhpFpmConfiguration=P;var I=f.default.get({id:"CH_PHP_FPM_TOKENS",url:c,schema:{user:f.default.REQUIRED_STRING,"php-fpm":f.default.REQUIRED_STRING},after:function(){return u.fp.flow(u.fp.getProp("AVAILABLE_TOKENS"),u.fp.mapValues((function(t,e){return{token:e,value:t}})),u.fp.toArray)}});e.getPhpFpmTokens=I;var N=f.default.post({url:c,schema:{user:f.default.REQUIRED_STRING,"php-fpm":f.default.REQUIRED_STRING,custom1:f.default.OPTIONAL_STRING,custom2:f.default.OPTIONAL_STRING,all_php_versions:f.default.OPTIONAL_BOOL}});e.savePhpFpmTokens=N;var g=f.default.get({id:"CH_DIFF",url:"/CMD_TEMPLATE_DIFF",schema:{name:f.default.REQUIRED_STRING},after:function(){return u.fp.flow(u.fp.deleteProp("lines"),u.fp.mapValues((function(t,e){return s(s({},t),{},{number:e})})),u.fp.toArray,u.fp.mapArray(u.fp.moveProp("line","content")),u.fp.mapArrayProps({number:u.fp.convert.toAppNumber,content:function(t){return t?t.replace(/\t/g,"    "):""}}),u.fp.sortBy("number"))}});e.getDiff=g},2081:function(t,e,n){"use strict";n.r(e);var o=n(2082),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=a.a},2082:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(1923),a={preload:o.getDiff,api:[{command:o.getDiff,bind:"diff"}],props:{name:{type:String,required:!0}}};e.default=a},2860:function(t,e,n){var o=n(3176);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4).default)("4b8d554b",o,!0,{})},3175:function(t,e,n){"use strict";n(2860)},3176:function(t,e,n){},3177:function(t,e){},3836:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{id:"template-diff"}},[n("translate",{attrs:{slot:"page:title","translate-params":{name:t.name}},slot:"page:title"},[t._v("\n        Template Diff: %{ name }\n    ")]),t._v(" "),n("app-page-section",{staticClass:"diff-wrapper"},[n("table",{staticClass:"diff-table"},t._l(t.$api.diff,(function(e,o){return n("tr",{key:o,class:["diff-line",e.type]},["header"===e.type?[n("td",{attrs:{colspan:"2"}},[n("pre",{staticClass:"diff-line-content",domProps:{textContent:t._s(e.content)}})])]:[n("td",{staticClass:"sign"},["minus"===e.type?[t._v("\n                            -\n                        ")]:"plus"===e.type?[t._v("\n                            +\n                        ")]:t._e()],2),t._v(" "),n("td",[n("pre",{staticClass:"diff-line-content",domProps:{textContent:t._s(e.content)}})])]],2)})),0)])],1)},a=[]}}]);