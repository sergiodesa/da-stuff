(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1835:function(e,t,n){"use strict";n.r(t);var a=n(3943),r=n(2662);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);var i=n(0),o=n(3663),d=n.n(o),l=Object(i.a)(r.default,a.a,a.b,!1,null,null,null);"function"==typeof d.a&&d()(l),t.default=l.exports},2661:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.deleteHandlerExtension=t.deleteHandlers=t.createHandler=t.getSystemHandlers=t.getHandlers=void 0;var r=a(n(78)),s=r.default.get({id:"HANDLERS",url:"/CMD_HANDLERS",domain:!0,pagination:!0,after:function(e){return e.flow((function(e){return{rows:e}}),e.processTableInfo("rows"),e.mapProps({rows:e.toArray}))}});t.getHandlers=s;var i=s.extend({id:"SYSTEM_HANDLERS",params:{action:"system"}});t.getSystemHandlers=i;var o=r.default.post({url:"/CMD_HANDLERS",params:{action:"add"},domain:!0,schema:{name:r.default.REQUIRED_STRING,extension:r.default.REQUIRED_STRING}});t.createHandler=o;var d=r.default.select({url:"/CMD_HANDLERS",params:{action:"multiple",button:"type"},domain:!0});t.deleteHandlers=d;var l=d.extend({params:{button:"extension"},schema:{extension:r.default.REQUIRED_STRING}});t.deleteHandlerExtension=l},2662:function(e,t,n){"use strict";n.r(t);var a=n(2663),r=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t.default=r.a},2663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2661),r={preload:a.getSystemHandlers,commands:{getSystemHandlers:a.getSystemHandlers}};t.default=r},3663:function(e,t){},3943:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(){var e=this.$createElement,t=this._self._c||e;return t("app-page",[t("app-page-section",[t("ui-api-table",this._b({attrs:{"equal-width-layout":"","disable-select":""}},"ui-api-table",{command:this.$commands.getSystemHandlers,columns:{handler:this.$gettext("Hander"),extensions:this.$gettext("Extensions")},verticalLayout:this.$_Client.isPhone},!1))],1)],1)},r=[]}}]);