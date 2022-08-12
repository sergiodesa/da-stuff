(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1811:function(e,t,o){"use strict";o.r(t);var n=o(3919),r=o(2541);for(var s in r)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(s);o(3565);var a=o(0),i=o(3567),l=o.n(i),u=Object(a.a)(r.default,n.a,n.b,!1,null,null,null);"function"==typeof l.a&&l()(u),t.default=u.exports},2019:function(e,t,o){"use strict";var n=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.getAutoresponderDefaults=t.getAutoresponder=t.modifyAutoresponder=t.createAutoresponder=t.deleteAutoresponders=t.getAutoresponders=void 0,o(13);var r=n(o(78)),s=function(e){return e.mapProps({custom_reply_headers:e.isEqual("1"),reply_content_types:e.toSelect,reply_encodings:e.toSelect,reply_once_select:e.toSelect})},a=r.default.get({id:"AUTORESPONDERS",url:"/CMD_EMAIL_AUTORESPONDER",domain:!0,after:function(e){return e.flow(e.mapValues((function(e,t){return{name:t,cc:e}})),e.toArray)}});t.getAutoresponders=a;var i=r.default.select({url:"/CMD_EMAIL_AUTORESPONDER",params:{action:"delete"},domain:!0});t.deleteAutoresponders=i;var l=r.default.post({url:"/CMD_EMAIL_AUTORESPONDER",params:{action:"create"},domain:!0,schema:{user:r.default.REQUIRED_STRING,text:r.default.REQUIRED_STRING,cc:{type:String,required:!0,validator:function(e){return["ON","OFF"].includes(e)}},email:r.default.OPTIONAL_STRING}});t.createAutoresponder=l;var u=l.extend({params:{action:"modify"}});t.modifyAutoresponder=u;var c=r.default.get({id:"AUTORESPONDER",url:"/CMD_EMAIL_AUTORESPONDER_MODIFY",domain:!0,schema:{user:r.default.REQUIRED_STRING},after:function(e){return e.mapProps({text:e.flow(e.convert.toAppString,e.convert.toAppText),email:e.setDefault(""),cc:e.feedWith(1,e.flow(e.getProp("email"),e.notEmpty)),headers:s(e)})}});t.getAutoresponder=c;var d=r.default.get({id:"AUTORESPONDER_DEFAULTS",url:"/CMD_EMAIL_AUTORESPONDER_CREATE",domain:!0,after:function(e){return e.flow(e.getProp("headers"),s(e))}});t.getAutoresponderDefaults=d},2541:function(e,t,o){"use strict";o.r(t);var n=o(2542),r=o.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t.default=r.a},2542:function(e,t,o){"use strict";var n=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o(24);var r,s=n(o(36)),a=n(o(37)),i=o(2019),l={preload:i.getAutoresponder,api:[{command:i.getAutoresponder,bind:"autoresponder"}],props:{user:{type:String,required:!0}},data:function(){return{text:"",cc:!1,email:"",subjectPrefix:"",encoding:"",onceSelect:"",contentType:""}},created:function(){this.text=this.$api.autoresponder.text,this.cc=this.$api.autoresponder.cc,this.email=this.$p6e.email2unicode(this.$api.autoresponder.email),this.$api.autoresponder.headers.custom_reply_headers&&(this.subjectPrefix=this.$api.autoresponder.headers.subject_prefix,this.encoding=this.$api.autoresponder.headers.reply_encodings.value,this.contentType=this.$api.autoresponder.headers.reply_content_types.value,this.onceSelect=this.$api.autoresponder.headers.reply_once_select.value)},methods:{modifyAutoresponder:(r=(0,a.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.modifyAutoresponder)({user:this.user,subject:this.subjectPrefix,reply_encoding:this.encoding,reply_content_type:this.contentType,reply_once_time:this.onceSelect,text:this.text,cc:this.cc?"ON":"OFF",email:this.$p6e.email2ascii(this.email)});case 2:e.sent&&this.$router.back();case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),validateCC:function(e){return e!=="".concat(this.user,"@").concat(this.$domainUnicode)}}};t.default=l},3085:function(e,t,o){var n=o(3566);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,o(4).default)("bb8dd8ca",n,!0,{})},3565:function(e,t,o){"use strict";o(3085)},3566:function(e,t,o){},3567:function(e,t){},3919:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r}));var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("app-page",{attrs:{id:"modify-autoresponder"}},[o("app-page-section",[o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Responder Address:\n            ")]),e._v(" "),o("input-text",{attrs:{slot:"content",disabled:"",value:e.user+"@"+e.$domainUnicode},slot:"content"})],1),e._v(" "),e.$api.autoresponder.headers.custom_reply_headers?[o("ui-form-element",{attrs:{group:"autoresponder",validators:{required:!0}}},[o("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Subject Prefix\n                ")]),e._v(" "),o("input-text",{staticClass:"input-1px",attrs:{slot:"content",suffix:e.$gettext(": original subject")},slot:"content",model:{value:e.subjectPrefix,callback:function(t){e.subjectPrefix=t},expression:"subjectPrefix"}})],1),e._v(" "),o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Content-Type\n                ")]),e._v(" "),o("input-select",{attrs:{slot:"content",options:e.$api.autoresponder.headers.reply_content_types.options},slot:"content",model:{value:e.contentType,callback:function(t){e.contentType=t},expression:"contentType"}})],1),e._v(" "),o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Reply Frequency\n                ")]),e._v(" "),o("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                    Minimum time before a repeated reply\n                ")]),e._v(" "),o("input-select",{attrs:{slot:"content",options:e.$api.autoresponder.headers.reply_once_select.options},slot:"content",model:{value:e.onceSelect,callback:function(t){e.onceSelect=t},expression:"onceSelect"}})],1)]:e._e(),e._v(" "),o("ui-form-element",{attrs:{group:"autoresponder",validators:{required:!0}}},[o("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Responder Message:\n            ")]),e._v(" "),o("input-textarea",{attrs:{slot:"content"},slot:"content",model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),o("translate",{attrs:{slot:"error:validateCC"},slot:"error:validateCC"},[e._v("\n                CC should not be equal to Autoresponder address\n            ")])],1),e._v(" "),e.cc?o("ui-form-element",{key:"cc-enabled",attrs:{group:"autoresponder",validators:{required:!0,validateCC:e.validateCC}}},[o("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.cc,callback:function(t){e.cc=t},expression:"cc"}},[o("translate",[e._v("Send a CC to:")])],1),e._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),o("translate",{attrs:{slot:"error:validateCC"},slot:"error:validateCC"},[e._v("\n                CC should not be equal to Autoresponder address\n            ")])],1):o("ui-form-element",{key:"cc-disabled",attrs:{group:"autoresponder"}},[o("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.cc,callback:function(t){e.cc=t},expression:"cc"}},[o("translate",[e._v("Send a CC to:")])],1),e._v(" "),o("input-text",{attrs:{slot:"content",value:e.email,disabled:""},slot:"content"})],1)],2),e._v(" "),o("ui-button",{attrs:{slot:"footer:buttons",theme:"safe",disabled:!e.$valid("autoresponder")},on:{click:e.modifyAutoresponder},slot:"footer:buttons"},[o("translate",[e._v("Save")])],1)],1)},r=[]}}]);