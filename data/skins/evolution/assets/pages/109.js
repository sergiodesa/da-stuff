(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1840:function(e,t,r){"use strict";r.r(t);var n=r(3948),a=r(2677);for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r(3677);var s=r(0),l=r(3679),u=r.n(l),i=Object(s.a)(a.default,n.a,n.b,!1,null,"8181848c",null);"function"==typeof u.a&&u()(i),t.default=i.exports},2022:function(e,t,r){"use strict";r(7),r(10),r(6),r(8),r(11);var n=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.getUsageLog=t.resetUses=t.deleteKeys=t.getKey=t.getKeyDefaults=t.modifyKey=t.createUrl=t.createKey=t.getKeys=void 0,r(34),r(5),r(55),r(21),r(40);var a=n(r(2)),o=n(r(78));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u="/CMD_LOGIN_KEYS",i=o.default.get({id:"LOGIN_KEYS",url:u,pagination:!0,after:function(e){return e.flow(e.moveProp("login_keys","rows"),e.processTableInfo("rows"),e.mapProp("rows",e.flow(e.toArray,e.mapArrayProps({expiry:function(t){return"0"!==t?e.convert.toAppDate(t):"never"},uses:e.mapProps({max_uses:e.convert.toAppNumber,uses:e.convert.toAppNumber}),log:e.convert.toAppBoolean}))))}});t.getKeys=i;var c=o.default.post({url:u,schema:{keyname:o.default.REQUIRED_STRING,key:o.default.REQUIRED_STRING,key2:o.default.REQUIRED_STRING,never_expires:o.default.REQUIRED_BOOL,hour:o.default.REQUIRED_STRING,minute:o.default.REQUIRED_STRING,month:o.default.REQUIRED_STRING,day:o.default.REQUIRED_STRING,year:o.default.REQUIRED_STRING,max_uses:o.default.REQUIRED_STRING,clear_key:o.default.REQUIRED_BOOL,allow_htm:o.default.REQUIRED_BOOL,select_allow:o.default.ROWS,select_deny:o.default.ROWS,ips:o.default.OPTIONAL_STRING,passwd:o.default.REQUIRED_STRING}}),f=c.extend({params:{action:"create",type:"key"}});t.createKey=f;var d=o.default.post({url:u,params:{action:"create",type:"one_time_url"},schema:{max_uses:o.default.REQUIRED_STRING,clear_key:o.default.REQUIRED_BOOL,allow_htm:o.default.REQUIRED_BOOL,select_allow:o.default.ROWS,select_deny:o.default.ROWS,ips:o.default.OPTIONAL_STRING,passwd:o.default.REQUIRED_STRING},notifySuccess:!1});t.createUrl=d;var y=c.extend({params:{action:"modify"}});t.modifyKey=y;var p=o.default.get({id:"LOGIN_KEY_DEFAULTS",url:u,params:{action:"show_create"},after:function(e){return e.flow((function(t){return l(l({},t),{},{commands:e.flow(e.toArray,(function(e){return e.map((function(e){return e.allow}))}),(function(e){return e.filter((function(e){return e}))}))(t.allow_table)})}),e.mapProps({allow_table:e.flow(e.toArray,(function(e){return e.filter((function(e){return"unchecked"!==e.checkbox&&e.allow}))}),(function(e){return e.map((function(e){return e.allow}))})),deny_table:e.flow(e.toArray,(function(e){return e.filter((function(e){return"unchecked"!==e.checkbox&&e.deny}))}),(function(e){return e.map((function(e){return e.deny}))})),expiry:e.mapProps({day:e.toSelect,hour:e.toSelect,minute:e.toSelect,month:e.toSelect,year:e.toSelect})}))}});t.getKeyDefaults=p;var m=o.default.get({id:"LOGIN_KEY",url:u,params:{action:"show_modify"},schema:{keyname:o.default.REQUIRED_STRING},after:function(e){return e.flow((function(t){return{values:{allow_htm:e.convert.toAppBoolean(t.data.allow_htm),clear_key:e.convert.toAppBoolean(t.data.clear_key),never_expires:"0"===t.data.expiry,max_uses:t.data.max_uses,allow:e.flow(e.toArray,(function(e){return e.filter((function(e){return"unchecked"!==e.checkbox&&e.allow}))}),(function(e){return e.map((function(e){return e.allow}))}))(t.allow_table),deny:e.flow(e.toArray,(function(e){return e.filter((function(e){return"unchecked"!==e.checkbox&&e.deny}))}),(function(e){return e.map((function(e){return e.deny}))}))(t.deny_table),hour:e.toSelect(t.expiry.hour).value,minute:e.toSelect(t.expiry.minute).value,day:e.toSelect(t.expiry.day).value,month:e.toSelect(t.expiry.month).value,year:e.toSelect(t.expiry.year).value,ips:t.ips.join("\r\n")},commands:e.flow(e.toArray,(function(e){return e.map((function(e){return e.allow}))}),(function(e){return e.filter((function(e){return e}))}))(t.allow_table),expiry:{hour:e.toSelect(t.expiry.hour).options,minute:e.toSelect(t.expiry.minute).options,day:e.toSelect(t.expiry.day).options,month:e.toSelect(t.expiry.month).options,year:e.toSelect(t.expiry.year).options}}}))}});t.getKey=m;var _=o.default.select({url:u,params:{delete:!0}});t.deleteKeys=_;var v=o.default.select({url:u,params:{reset:!0}});t.resetUses=v;var g=o.default.get({id:"LOGIN_KEY_USAGE_LOG",url:u,params:{action:"log"},schema:{keyname:o.default.REQUIRED_STRING},after:function(e){return e.flow(e.toArray,e.mapArrayProps({command:function(e){return e.replace("/","")},timestamp:e.convert.toAppDate}))}});t.getUsageLog=g},2677:function(e,t,r){"use strict";r.r(t);var n=r(2678),a=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t.default=a.a},2678:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2022),a={preload:n.getKeys,commands:{getKeys:n.getKeys},data:function(){return{select:[]}},methods:{deleteKeys:function(){(0,n.deleteKeys)({select:this.select}).then(n.getKeys).then(this.$reset)},resetUses:function(){(0,n.resetUses)({select:this.select}).then(n.getKeys).then(this.$reset)}}};t.default=a},3109:function(e,t,r){var n=r(3678);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(4).default)("241c4471",n,!0,{})},3677:function(e,t,r){"use strict";r(3109)},3678:function(e,t,r){},3679:function(e,t){},3948:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-page",{attrs:{actions:[{label:e.$gettext("Create"),name:"user/login-keys/create",icon:"#plus-fill"}]}},[r("template",{slot:"header:buttons"},[r("ui-button-link",{attrs:{theme:"primary",name:"user/login-keys/create"}},[r("translate",[e._v("Create")])],1)],1),e._v(" "),r("template",{slot:"bottom:links"},[r("ui-link",{attrs:{bullet:"",name:"user/password"}},[r("translate",[e._v("Password Management")])],1)],1),e._v(" "),r("template",{slot:"details"},[r("ui-infobar-item",{attrs:{title:e.$gettext("Details")}},[r("p",[r("translate",[e._v("Login keys allow you to create extra passwords for your account.")]),r("br"),e._v(" "),r("translate",[e._v("However, these passwords have attributes, such as the ability to expire, usage limit, and can be limited to certain functions.")]),r("br"),e._v(" "),r("translate",[e._v("Note that the Login Keys are one-way encrypted, just like passwords. They cannot be retrieved if you forget them.")]),r("br"),e._v(" "),r("translate",[e._v("The login username used will still be your normal DA username.")])],1)])],1),e._v(" "),r("app-page-section",[r("ui-api-table",e._b({on:{"action:reset":e.resetUses,"action:del":function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}},scopedSlots:e._u([{key:"col:name",fn:function(t){var n=t.name;return r("ui-link",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{\n                    cross: 'center',\n                }"}],attrs:{name:"user/login-keys/modify",params:{keyname:n}}},[e._v("\n                "+e._s(n)+"\n\n                "),"rootauth"===n?r("ui-tooltip",{directives:[{name:"margin",rawName:"v-margin:left",value:1,expression:"1",arg:"left"}],attrs:{theme:"primary"}},[r("translate",[e._v("This login key is used by administrator or software running on the server to do automatic actions in your account.")])],1):e._e()],1)}},{key:"col:expiry",fn:function(t){var n=t.expiry;return["never"===n?r("translate",[e._v("\n                    Never\n                ")]):[e._v("\n                    "+e._s(e._f("date")(n))+"\n                ")]]}},{key:"col:uses",fn:function(t){var n=t.uses;return[n.uses||0===n.uses?[e._v("\n                    "+e._s(n.uses)+" / "+e._s(n.max_uses?n.max_uses:e.$gettext("Unlimited"))+"\n                ")]:n.max_uses?e._e():r("translate",[e._v("\n                    Unlimited\n                ")])]}},{key:"col:allow",fn:function(e){var t=e.allow;return[t.length?r("ui-list",{attrs:{items:t,"max-items-visible":5}}):r("span")]}},{key:"col:deny",fn:function(e){var t=e.deny;return[t.length?r("ui-list",{attrs:{items:t,"max-items-visible":5}}):r("span")]}},{key:"col:ips",fn:function(t){var n=t.ips;return r("ul",{},e._l(n,(function(t){return r("li",{key:t,domProps:{textContent:e._s(t)}})})),0)}},{key:"row:actions",fn:function(t){var n=t.item;return n.log?r("ui-button-link",{attrs:{theme:"light",size:"small",name:"user/login-keys/log",params:{keyname:n.name}}},[r("translate",[e._v("Log")])],1):e._e()}}],null,!0),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{command:e.$commands.getKeys,rowID:"name",columns:{name:{label:e.$gettext("Key Name"),grow:!0},expiry:e.$gettext("Expiry"),uses:e.$gettext("Uses"),allow:e.$gettext("Allow"),deny:e.$gettext("Deny"),ips:e.$gettext("IPs")},actions:{reset:e.$gettext("Reset Uses"),del:e.$gettext("Delete")},updateOn:["RESET_LOGIN_KEYS_USES","DELETE_LOGIN_KEYS"],verticalLayout:e.$_Client.isPhone},!1))],1),e._v(" "),r("p",{attrs:{slot:"footer:text"},slot:"footer:text"},[r("translate",[e._v("Login keys allow you to create extra passwords for your account.")]),r("br"),e._v(" "),r("translate",[e._v("However, these passwords have attributes, such as the ability to expire, usage limit, and can be limited to certain functions.")]),r("br"),e._v(" "),r("translate",[e._v("Note that the Login Keys are one-way encrypted, just like passwords. They cannot be retrieved if you forget them.")]),r("br"),e._v(" "),r("translate",[e._v("The login username used will still be your normal DA username.")])],1),e._v(" "),r("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("key","keys",e.select.length)},on:{"click:confirm":e.deleteKeys}})],2)},a=[]}}]);