(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1741:function(e,t,a){"use strict";a.r(t);var n=a(3852),s=a(2159);for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a(3251);var r=a(0),o=a(3253),l=a.n(o),u=Object(r.a)(s.default,n.a,n.b,!1,null,null,null);"function"==typeof l.a&&l()(u),t.default=u.exports},2159:function(e,t,a){"use strict";a.r(t);var n=a(2160),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t.default=s.a},2160:function(e,t,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var n=a(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var s={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(s,o,l):s[o]=e[o]}s.default=e,a&&a.set(e,s);return s}(a(3250));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var r={preload:s.getData,api:[{command:s.getData,bind:"data"}],commands:s,data:function(){return{select:[],safeMode:!1,openBaseDir:!1,filter:{column:"domain",value:"",type:"equals"}}},computed:{settings:function(){return this.$api.data}},created:function(){this.safeMode=this.settings.safemode,this.openBaseDir=this.settings.open_basedir},methods:{enableBasedir:function(){s.enableBasedir({select:this.select}).then(this.$reloadApiTable)},disableBasedir:function(){s.disableBasedir({select:this.select}).then(this.$reloadApiTable)},saveSettings:function(){s.safeDefaults({enabled:this.safeMode?"ON":"OFF",obdenabled:this.openBaseDir?"ON":"OFF"})}}};t.default=r},3017:function(e,t,a){var n=a(3252);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(4).default)("4329c855",n,!0,{})},3250:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.safeDefaults=t.disableBasedir=t.enableBasedir=t.getData=void 0;var s=n(a(78)),i=(a(32),"/CMD_PHP_SAFE_MODE"),r=s.default.get({id:"PHP_SAFE_MODE_DATA",url:i,params:{sort1:2},pagination:!0,after:function(e){return e.flow(e.processTableInfo("domains"),e.moveProp("domains","rows"),e.mapProps({rows:e.flow(e.toArray,e.mapArray(e.flow(e.mapProps({php:e.isEqual("ON"),open_basedir:e.isEqual("ON")})))),have_openbasedir:e.isEqual("1"),have_safemode:e.isEqual("1"),open_basedir:e.isEqual("ON"),safemode:e.isEqual("ON")}))}});t.getData=r;var o=s.default.select({url:i,params:{action:"set",enable_obd:!0}});t.enableBasedir=o;var l=s.default.select({url:i,params:{action:"set",disable_obd:!0}});t.disableBasedir=l;var u=s.default.post({url:i,params:{action:"enabled"},schema:{enabled:s.default.REQUIRED_STRING,obdenabled:s.default.REQUIRED_STRING}});t.safeDefaults=u},3251:function(e,t,a){"use strict";a(3017)},3252:function(e,t,a){},3253:function(e,t){},3852:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{attrs:{id:"php-safe-mode"}},[a("app-page-section",[a("ui-form-element",{attrs:{underline:!1}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Show Domains that\n            ")]),e._v(" "),a("ui-input-group",{attrs:{slot:"content"},slot:"content"},[a("input-select",{staticClass:"search-type-select",attrs:{slot:"additions:left",options:{startswith:e.$gettext("Starts With"),contains:e.$gettext("Contains"),equals:e.$gettext("Equals")}},slot:"additions:left",model:{value:e.filter.type,callback:function(t){e.$set(e.filter,"type",t)},expression:"filter.type"}}),e._v(" "),a("input-text",{attrs:{slot:"input"},slot:"input",model:{value:e.filter.value,callback:function(t){e.$set(e.filter,"value",t)},expression:"filter.value"}}),e._v(" "),a("ui-button",{attrs:{slot:"additions:right",theme:"light",size:"normal",icon:"close",title:e.$gettext("Clear Search")},on:{click:function(t){e.filter.value=""}},slot:"additions:right"})],1)],1)],1),e._v(" "),a("app-page-section",[a("ui-api-table",e._b({on:{"action:enable":e.enableBasedir,"action:disable":e.disableBasedir},scopedSlots:e._u([{key:"col:domain",fn:function(t){var n=t.domain;return[void 0===t.checkbox?a("ui-tooltip",[a("strong",{attrs:{slot:"trigger"},slot:"trigger"},[e._v(e._s(e._f("p6eUnicode")(n)))]),e._v(" "),a("translate",[e._v("This domain is controlled by the main domain for this User.")])],1):a("strong",[e._v(e._s(e._f("p6eUnicode")(n)))])]}},{key:"col:user",fn:function(t){var n=t.user;return a("ui-link",{attrs:{name:"reseller/users/view",params:{user:n}}},[e._v("\n                "+e._s(n)+"\n            ")])}},{key:"col:php",fn:function(t){var n=t.php,s=t.open_basedir;return e.settings.have_safemode?a("ui-badge",{attrs:{theme:n?"safe":"danger",title:s?e.$gettext("Enabled"):e.$gettext("Disabled")}},[a("translate",[e._v("PHP")])],1):e._e()}},{key:"col:open_basedir",fn:function(t){var n=t.open_basedir;return e.settings.have_openbasedir?a("ui-badge",{attrs:{theme:n?"safe":"danger",title:n?e.$gettext("Enabled"):e.$gettext("Disabled")}},[a("translate",[e._v("Open BaseDir")])],1):e._e()}}],null,!0),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{command:e.$commands.getData,rowID:"domain",columns:{domain:{label:e.$gettext("Domain"),grow:!0},user:e.$gettext("User"),open_basedir:{label:e.$gettext("Open Basedir"),visible:e.settings.have_openbasedir},php:{label:e.$gettext("PHP"),visible:e.settings.have_safemode}},actions:{enable:e.$gettext("Enable Open Basedir"),disable:e.$gettext("Disable Open Basedir")},filters:[e.filter],disableSelectFor:function(e){return void 0===e.checkbox},editable:!1},!1))],1),e._v(" "),a("app-page-section",[a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Defaults for new domains\n            ")]),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[a("input-checkbox",{model:{value:e.safeMode,callback:function(t){e.safeMode=t},expression:"safeMode"}},[a("translate",[e._v("Safe Mode")])],1),e._v(" "),a("input-checkbox",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[ 0, 1 ]"}],model:{value:e.openBaseDir,callback:function(t){e.openBaseDir=t},expression:"openBaseDir"}},[a("translate",[e._v("Open BaseDir")])],1)],1)],1)],1),e._v(" "),a("ui-button",{attrs:{slot:"footer:buttons",theme:"safe"},on:{click:e.saveSettings},slot:"footer:buttons"},[a("translate",[e._v("Save")])],1)],1)},s=[]}}]);