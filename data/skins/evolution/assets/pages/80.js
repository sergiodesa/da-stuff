(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1810:function(e,t,a){"use strict";a.r(t);var r=a(3918),n=a(2539);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a(3562);var s=a(0),i=a(3564),l=a.n(i),u=Object(s.a)(n.default,r.a,r.b,!1,null,null,null);"function"==typeof l.a&&l()(u),t.default=u.exports},1877:function(e,t,a){"use strict";var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.validateIPRangeList=t.validateDomain=t.validatePassword=t.validateSubdomain=t.validateUsername=t.validateDBUser=t.validateDatabase=t.validateDNSName=t.validateMXValue=t.validateDNSValue=t.validateFTP=t.validateEmail=t.validateForwarder=void 0;var n=r(a(78)),o=r(a(98)),s=r(a(1878)),i=n.default.get({url:"/CMD_JSON_VALIDATE",schema:{value:n.default.REQUIRED_STRING},response:{valid:!0,message:""},mapResponse:{valid:s.default.isValid,message:s.default.getMessage}}),l=i.extend({id:"VALIDATE_FORWARDER",params:{type:"forwarder",ignore_system_default:!0}});t.validateForwarder=l;var u=i.extend({id:"VALIDATE_EMAIL",params:{type:"email",check_mailing_list:!0},schema:{check_exists:{type:Boolean,required:!1,default:!0}}});t.validateEmail=u;var d=i.extend({id:"VALIDATE_FTP",params:{type:"ftp"},domain:!0});t.validateFTP=d;var c=i.extend({params:{type:"dns"},domain:!0,schema:{record:n.default.REQUIRED_STRING}}),p=c.extend({id:"VALIDATE_DNS_VALUE",params:{check:"value",name:!0},domain:!0,schema:{value:n.default.REQUIRED_STRING}});t.validateDNSValue=p;var f=p.extend({id:"VALIDATE_MX_VALUE",params:{record:"MX"},before:function(e){return{value:"10",mx_value:e.value}}});t.validateMXValue=f;var v=c.extend({id:"VALIDATE_DNS_NAME",params:{check:"name",value:!0,mx_value:!0},schema:{name:n.default.REQUIRED_STRING,value:null}});t.validateDNSName=v;var m=i.extend({id:"VALIDATE_DATABASE",params:{type:"dbname"}});t.validateDatabase=m;var _=i.extend({id:"VALIDATE_DATABASE_USER",params:{type:"dbusername"}});t.validateDBUser=_;var A=i.extend({id:"VALIDATE_USERNAME",params:{type:"username"}});t.validateUsername=A;var E=i.extend({id:"VALIDATE_SUBDOMAIN",domain:!0,params:{type:"subdomain"}});t.validateSubdomain=E;var x=i.extend({id:"VALIDATE_PASSWORD",params:{type:"password"}});t.validatePassword=x;var D=i.extend({id:"VALIDATE_DOMAIN",params:{type:"domain"},before:function(e){var t=e.value;return{value:o.default.toASCII(t)}}});t.validateDomain=D;var y=i.extend({id:"VALIDATE_IP_RANGE_LIST",params:{type:"ip_range_list"}});t.validateIPRangeList=y},1878:function(e,t,a){"use strict";a.r(t);var r=a(97);t.default={isValid:function(e){return void 0===e.error},getMessage:function(e){return Object(r.toAppHtml)(e.error||"")}}},2019:function(e,t,a){"use strict";var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.getAutoresponderDefaults=t.getAutoresponder=t.modifyAutoresponder=t.createAutoresponder=t.deleteAutoresponders=t.getAutoresponders=void 0,a(13);var n=r(a(78)),o=function(e){return e.mapProps({custom_reply_headers:e.isEqual("1"),reply_content_types:e.toSelect,reply_encodings:e.toSelect,reply_once_select:e.toSelect})},s=n.default.get({id:"AUTORESPONDERS",url:"/CMD_EMAIL_AUTORESPONDER",domain:!0,after:function(e){return e.flow(e.mapValues((function(e,t){return{name:t,cc:e}})),e.toArray)}});t.getAutoresponders=s;var i=n.default.select({url:"/CMD_EMAIL_AUTORESPONDER",params:{action:"delete"},domain:!0});t.deleteAutoresponders=i;var l=n.default.post({url:"/CMD_EMAIL_AUTORESPONDER",params:{action:"create"},domain:!0,schema:{user:n.default.REQUIRED_STRING,text:n.default.REQUIRED_STRING,cc:{type:String,required:!0,validator:function(e){return["ON","OFF"].includes(e)}},email:n.default.OPTIONAL_STRING}});t.createAutoresponder=l;var u=l.extend({params:{action:"modify"}});t.modifyAutoresponder=u;var d=n.default.get({id:"AUTORESPONDER",url:"/CMD_EMAIL_AUTORESPONDER_MODIFY",domain:!0,schema:{user:n.default.REQUIRED_STRING},after:function(e){return e.mapProps({text:e.flow(e.convert.toAppString,e.convert.toAppText),email:e.setDefault(""),cc:e.feedWith(1,e.flow(e.getProp("email"),e.notEmpty)),headers:o(e)})}});t.getAutoresponder=d;var c=n.default.get({id:"AUTORESPONDER_DEFAULTS",url:"/CMD_EMAIL_AUTORESPONDER_CREATE",domain:!0,after:function(e){return e.flow(e.getProp("headers"),o(e))}});t.getAutoresponderDefaults=c},2539:function(e,t,a){"use strict";a.r(t);var r=a(2540),n=a.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);t.default=n.a},2540:function(e,t,a){"use strict";var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(24);var n,o,s=r(a(36)),i=r(a(37)),l=a(2019),u=a(1877),d={preload:l.getAutoresponderDefaults,api:[{command:l.getAutoresponderDefaults,bind:"defaults"},{command:u.validateEmail,bind:"emailValidation"}],data:function(){return{user:"",text:"",cc:!1,email:"",subjectPrefix:"",encoding:"",onceSelect:"",contentType:""}},created:function(){this.subjectPrefix=this.$api.defaults.subject_prefix,this.encoding=this.$api.defaults.reply_encodings.value,this.contentType=this.$api.defaults.reply_content_types.value,this.onceSelect=this.$api.defaults.reply_once_select.value},methods:{createAutoresponder:(o=(0,i.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.createAutoresponder)({user:this.user,subject:this.subjectPrefix,reply_encoding:this.encoding,reply_content_type:this.contentType,reply_once_time:this.onceSelect,text:this.text,cc:this.cc?"ON":"OFF",email:this.$p6e.email2ascii(this.email)});case 2:e.sent&&this.$router.back();case 4:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),validateCC:function(e){return e!=="".concat(this.user,"@").concat(this.$domainUnicode)},validateAddress:(n=(0,i.default)(s.default.mark((function e(t){var a,r;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,(0,u.validateEmail)({value:"".concat(t,"@").concat(this.$domain),check_exists:!1});case 4:return a=e.sent,r=a.valid,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})}};t.default=d},3084:function(e,t,a){var r=a(3563);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(4).default)("3d62039f",r,!0,{})},3562:function(e,t,a){"use strict";a(3084)},3563:function(e,t,a){},3564:function(e,t){},3918:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{attrs:{id:"create-autoresponder"}},[a("app-page-section",[a("ui-form-element",{attrs:{group:"autoresponder",validators:{required:!0,validateAddress:e.validateAddress}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Responder Address:\n            ")]),e._v(" "),a("input-text",{attrs:{slot:"content",suffix:"@"+e.$domainUnicode},slot:"content",model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._v(" "),a("span",{attrs:{slot:"error:validateAddress"},slot:"error:validateAddress"},[e._v(e._s(e.$api.emailValidation.message))])],1),e._v(" "),e.$api.defaults.custom_reply_headers?[a("ui-form-element",{attrs:{group:"autoresponder",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Subject Prefix\n                ")]),e._v(" "),a("input-text",{staticClass:"input-1px",attrs:{slot:"content",suffix:e.$gettext(": original subject")},slot:"content",model:{value:e.subjectPrefix,callback:function(t){e.subjectPrefix=t},expression:"subjectPrefix"}})],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Content-Type\n                ")]),e._v(" "),a("input-select",{attrs:{slot:"content",options:e.$api.defaults.reply_content_types.options},slot:"content",model:{value:e.contentType,callback:function(t){e.contentType=t},expression:"contentType"}})],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Reply Frequency\n                ")]),e._v(" "),a("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                    Minimum time before a repeated reply\n                ")]),e._v(" "),a("input-select",{attrs:{slot:"content",options:e.$api.defaults.reply_once_select.options},slot:"content",model:{value:e.onceSelect,callback:function(t){e.onceSelect=t},expression:"onceSelect"}})],1)]:e._e(),e._v(" "),a("ui-form-element",{attrs:{group:"autoresponder",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Responder Message:\n            ")]),e._v(" "),a("input-textarea",{attrs:{slot:"content"},slot:"content",model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),e.cc?a("ui-form-element",{key:"cc-enabled",attrs:{group:"autoresponder",validators:{required:!0,validateCC:e.validateCC}}},[a("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.cc,callback:function(t){e.cc=t},expression:"cc"}},[a("translate",[e._v("Send a CC to:")])],1),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("translate",{attrs:{slot:"error:validateCC"},slot:"error:validateCC"},[e._v("\n                CC should not be equal to Autoresponder address\n            ")])],1):a("ui-form-element",{key:"cc-disabled",attrs:{group:"autoresponder"}},[a("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.cc,callback:function(t){e.cc=t},expression:"cc"}},[a("translate",[e._v("Send a CC to:")])],1),e._v(" "),a("input-text",{attrs:{slot:"content",value:e.email,disabled:""},slot:"content"})],1)],2),e._v(" "),a("ui-button",{attrs:{slot:"footer:buttons",theme:"safe","validate-group":"autoresponder"},on:{click:e.createAutoresponder},slot:"footer:buttons"},[e._v("\n        Save\n    ")])],1)},n=[]}}]);