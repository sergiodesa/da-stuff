(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1801:function(t,e,n){"use strict";n.r(e);var a=n(3909),s=n(2501);for(var o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(o);var r=n(0),i=n(3541),u=n.n(i),l=Object(r.a)(s.default,a.a,a.b,!1,null,null,null);"function"==typeof u.a&&u()(l),e.default=l.exports},2501:function(t,e,n){"use strict";n.r(e);var a=n(2502),s=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e.default=s.a},2502:function(t,e,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var a=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(n(36)),o=a(n(37)),r=a(n(2));n(16),n(14),n(18),n(34);var i=n(3538),u=a(n(3539));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,r.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d,p={preload:function(t){var e=t.dom,n=t.pointer;return(0,i.getData)({ptr:n||null,domain:e||void 0})},components:{ZoneKey:a(n(3540)).default,ConfirmDialog:u.default},api:[{command:i.getData,bind:{"response.keys":"keys","response.status":"status","response.zone":"zone",isDone:"dataLoaded"}}],props:{dom:{type:String,required:!1,default:function(){return this.$domain}}},data:function(){return{action:null}},computed:{keysRows:function(){return this.$api.status.keys?{zone:{id:this.$gettext("Zone-Signing Key"),data:this.$api.keys.zone},key:{id:this.$gettext("Key-Signing Key"),data:this.$api.keys.key}}:{}},zoneRows:function(){return[{label:this.$gettext("Signed"),value:this.$api.zone.signedDate},{label:this.$gettext("Expiry"),value:this.$api.zone.expiryDate},{label:this.$gettext("DS Record"),value:this.$api.zone.DS},{label:this.$gettext("DLV Record"),value:this.$api.zone.DLV}].map((function(t){return c(c({},t),{},{date:t.value instanceof Date})}))},ptr:function(){return this.$route.query.pointer||null}},watch:{$domain:"updateData"},methods:{updateData:function(){(0,i.getData)({domain:this.dom,ptr:this.ptr})},generateKeys:function(){(0,i.generateKeys)({ptr:this.ptr,domain:this.dom}).then(this.updateData)},signZone:function(){(0,i.signZone)({ptr:this.ptr,domain:this.dom}).then(this.updateData)},clearZone:function(){(0,i.clearZone)({ptr:this.ptr,domain:this.dom}).then(this.updateData)},requestConfirmation:function(t){var e=this;return function(){e.action=t,e.$dialog("CONFIRM_DNSSEC_DIALOG").open()}},doAction:(d=(0,o.default)(s.default.mark((function t(){return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"function"==typeof this.action&&this.action.call(this),this.action=null;case 2:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),cancelAction:function(){this.action=null}}};e.default=p},2503:function(t,e,n){"use strict";n.r(e);var a=n(2504),s=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e.default=s.a},2504:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={}},2505:function(t,e,n){"use strict";n.r(e);var a=n(2506),s=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e.default=s.a},2506:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{id:String,created:Date,published:Date,activated:Date,value:String}};e.default=a},3538:function(t,e,n){"use strict";var a=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.clearZone=e.getData=e.signZone=e.generateKeys=void 0,n(13),n(15),n(21),n(40);var s=a(n(2)),o=a(n(78)),r=n(28),i=n(31),u=function(){var t,e=(t={},(0,s.default)(t,i.USER_LEVEL.ADMIN,"/CMD_DNS_ADMIN"),(0,s.default)(t,i.USER_LEVEL.USER,"/CMD_DNS_CONTROL"),t),n=(0,r.State)("app.route.path");return n?n.includes("".concat(i.USER_LEVEL.ADMIN,"/"))?e[i.USER_LEVEL.ADMIN]:e[i.USER_LEVEL.USER]:e[(0,r.State)("app.user.accessLevel")]},l=o.default.post({url:u,params:{action:"dnssec"},domain:!0}),c=l.extend({params:{generate_keys:!0}});e.generateKeys=c;var d=l.extend({params:{sign_zone:!0}});e.signZone=d;var p=function(t){return t?new Date(t.replace(/.*\((.*)\)/,"$1")):""},f=function(t,e){return{keys:!!t.ksk_id,zone:"no"!==t.DNS_DS,zoneOutdated:!(!t.signed_on||!t.ksk_created)&&e.convert.toAppDate(t.signed_on)<p(t.ksk_created)}},v=function(t,e){return e.flow(e.project({expiryDate:"expiry",signedDate:"signed_on",DLV:"DLV",DS:"DS"}),e.mapProps({expiryDate:e.convert.toAppDate,signedDate:e.convert.toAppDate,DLV:e.convert.toAppHtml,DS:e.convert.toAppHtml}))(t)},_=function(t,e){return e.flow(e.project({"zone.published":"zsk_publish","zone.id":"zsk_id","zone.created":"zsk_created","zone.activated":"zsk_activate","zone.key":"zsk_DNSKEY","key.published":"ksk_publish","key.id":"ksk_id","key.created":"ksk_created","key.activated":"ksk_activate","key.key":"ksk_DNSKEY"}),e.mapProps({zone:e.mapProps({published:p,created:p,activated:p}),key:e.mapProps({published:p,created:p,activated:p})}))(t)},y=o.default.post({url:u,id:"DNSSEC",params:{action:"dnssec",value:"get_keys"},domain:!0,response:{keys:!1,zone:!1},notifySuccess:!1,after:function(t){return function(e){return{status:f(e,t),zone:v(e,t),keys:_(e,t)}}}});e.getData=y;var g=o.default.post({url:u,params:{action:"dnssec",remove_dnssec:!0},schema:{ptr:o.default.OPTIONAL_STRING,domain:o.default.REQUIRED_STRING},domain:!0});e.clearZone=g},3539:function(t,e,n){"use strict";n.r(e);var a=n(4049),s=n(2503);for(var o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(o);var r=n(0),i=Object(r.a)(s.default,a.a,a.b,!1,null,null,null);e.default=i.exports},3540:function(t,e,n){"use strict";n.r(e);var a=n(4050),s=n(2505);for(var o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(o);var r=n(0),i=Object(r.a)(s.default,a.a,a.b,!1,null,null,null);e.default=i.exports},3541:function(t,e){},3909:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{actions:[{label:t.$gettext("Re-sign your zone"),visible:t.$api.status.zone&&t.$api.status.zoneOutdated,handler:t.signZone,icon:"#console"},{label:t.$gettext("Sign your Zone"),visible:t.$api.status.keys&&!t.$api.status.zone,handler:t.signZone,icon:"#console"},{label:t.$gettext("Clear Zone"),visible:t.$api.status.zone||t.$api.status.keys,handler:t.requestConfirmation(t.clearZone),icon:"#cancel"},{label:t.$gettext("Generate Keys"),handler:t.requestConfirmation(t.generateKeys),icon:"#plus-fill"}]}},[n("template",{slot:"header:buttons"},[t.$api.status.zone&&t.$api.status.zoneOutdated?n("ui-button",{attrs:{theme:"primary"},on:{click:t.signZone}},[n("translate",[t._v("Re-sign your zone")])],1):t._e(),t._v(" "),t.$api.status.keys&&!t.$api.status.zone?n("ui-button",{attrs:{theme:"primary"},on:{click:t.signZone}},[n("translate",[t._v("Sign your zone")])],1):t._e(),t._v(" "),t.$api.status.zone||t.$api.status.keys?n("ui-tooltip",[n("ui-button",{attrs:{slot:"trigger",theme:"danger"},on:{click:t.clearZone},slot:"trigger"},[n("translate",[t._v("Clear zone")])],1),t._v(" "),n("translate",[t._v("This action will delete all keys and revert to non-signed zone")])],1):t._e(),t._v(" "),n("ui-button",{attrs:{theme:"safe"},on:{click:t.generateKeys}},[n("translate",[t._v("Generate Keys")])],1)],1),t._v(" "),t.$api.status.zone?n("app-page-section",[n("ui-grid",{attrs:{slot:"section:title",cross:"center"},slot:"section:title"},[n("translate",[t._v("Zone Signing")]),t._v(" "),t.$api.status.zoneOutdated?n("ui-badge",{attrs:{theme:"danger"}},[n("translate",[t._v("Zone keys are newer than the Zone Signing.")])],1):t._e()],1),t._v(" "),t._l(t.zoneRows,(function(e){return n("ui-form-element",{key:e.label,attrs:{vertical:t.$_Client.isPhone}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))]),t._v(" "),n("template",{slot:"content"},[e.date?n("span",[t._v(t._s(t._f("date")(e.value)))]):n("ui-code-area",{attrs:{"break-lines":"",content:e.value}})],1)],2)}))],2):t._e(),t._v(" "),t.$api.status.keys?n("app-page-section",[n("translate",{attrs:{slot:"section:title"},slot:"section:title"},[t._v("\n            Zone Keys\n        ")]),t._v(" "),n("table",[n("tr",[n("translate",{attrs:{tag:"th"}},[t._v("\n                    Key\n                ")]),t._v(" "),n("translate",{attrs:{tag:"th"}},[t._v("\n                    ID\n                ")]),t._v(" "),n("translate",{attrs:{tag:"th"}},[t._v("\n                    Created\n                ")]),t._v(" "),n("translate",{attrs:{tag:"th"}},[t._v("\n                    Published\n                ")]),t._v(" "),n("translate",{attrs:{tag:"th"}},[t._v("\n                    Activated\n                ")])],1),t._v(" "),t._l(t.keysRows,(function(e){return[n("tr",{key:e.id+"-first"},[n("td",{staticClass:"txt:bold"},[t._v("\n                        "+t._s(e.id)+"\n                    ")]),t._v(" "),n("td",[t._v(t._s(e.data.id))]),t._v(" "),n("td",[t._v(t._s(t._f("date")(e.data.created)))]),t._v(" "),n("td",[t._v(t._s(t._f("date")(e.data.published)))]),t._v(" "),n("td",[t._v(t._s(t._f("date")(e.data.activated)))])]),t._v(" "),n("tr",{key:e.id+"-second"},[n("td",{attrs:{colspan:"5"}},[n("ui-code-area",{attrs:{"break-lines":"",content:e.data.key}})],1)])]}))],2),t._v(" "),n("ui-tabs",{attrs:{tabs:[{id:"zone",label:this.$gettext("Zone-Signing Key")},{id:"key",label:this.$gettext("Key-Signing Key")}]}},[n("zone-key",t._b({attrs:{slot:"tab:zone",value:t.$api.keys.zone.key},slot:"tab:zone"},"zone-key",t.$api.keys.zone,!1)),t._v(" "),n("zone-key",t._b({attrs:{slot:"tab:key",value:t.$api.keys.key.key},slot:"tab:key"},"zone-key",t.$api.keys.key,!1))],1)],1):t._e(),t._v(" "),t.$api.status.keys?t._e():n("app-page-section",[n("translate",{staticClass:"c:txt:danger"},[t._v("\n            Keys not yet generated.\n        ")])],1),t._v(" "),n("confirm-dialog",{on:{confirm:t.doAction,cancel:t.cancelAction}})],2)},s=[]},4049:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-dialog",{attrs:{id:"CONFIRM_DNSSEC_DIALOG",theme:"danger","no-close-btn":""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n        DNSSEC\n    ")]),t._v(" "),n("translate",{attrs:{slot:"content",tag:"div"},slot:"content"},[t._v("\n        This action could cause domain resolution problems and cannot be undone. Are you sure you want to proceed?\n    ")]),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"danger"},on:{click:function(e){return t.$emit("confirm")}},slot:"buttons"},[n("translate",[t._v("Confirm")])],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"neutral"},on:{click:function(e){return t.$emit("cancel")}},slot:"buttons"},[n("translate",[t._v("Cancel")])],1)],1)},s=[]},4050:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zone-key"},[n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("ID")]),t._v(" "),n("span",{attrs:{slot:"content"},domProps:{textContent:t._s(t.id)},slot:"content"})],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Created")]),t._v(" "),n("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t._f("date")(t.created)))])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Published")]),t._v(" "),n("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t._f("date")(t.published)))])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Activated")]),t._v(" "),n("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t._f("date")(t.activated)))])],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("ui-code-area",{attrs:{slot:"content",breakLines:"",content:t.value},slot:"content"})],1)],1)},s=[]}}]);