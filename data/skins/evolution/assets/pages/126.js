(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1832:function(e,t,a){"use strict";a.r(t);var n=a(3940),s=a(2655);for(var r in s)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(r);var o=a(0),i=a(3660),d=a.n(i),u=Object(o.a)(s.default,n.a,n.b,!1,null,null,null);"function"==typeof d.a&&d()(u),t.default=u.exports},1877:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.validateIPRangeList=t.validateDomain=t.validatePassword=t.validateSubdomain=t.validateUsername=t.validateDBUser=t.validateDatabase=t.validateDNSName=t.validateMXValue=t.validateDNSValue=t.validateFTP=t.validateEmail=t.validateForwarder=void 0;var s=n(a(78)),r=n(a(98)),o=n(a(1878)),i=s.default.get({url:"/CMD_JSON_VALIDATE",schema:{value:s.default.REQUIRED_STRING},response:{valid:!0,message:""},mapResponse:{valid:o.default.isValid,message:o.default.getMessage}}),d=i.extend({id:"VALIDATE_FORWARDER",params:{type:"forwarder",ignore_system_default:!0}});t.validateForwarder=d;var u=i.extend({id:"VALIDATE_EMAIL",params:{type:"email",check_mailing_list:!0},schema:{check_exists:{type:Boolean,required:!1,default:!0}}});t.validateEmail=u;var c=i.extend({id:"VALIDATE_FTP",params:{type:"ftp"},domain:!0});t.validateFTP=c;var l=i.extend({params:{type:"dns"},domain:!0,schema:{record:s.default.REQUIRED_STRING}}),p=l.extend({id:"VALIDATE_DNS_VALUE",params:{check:"value",name:!0},domain:!0,schema:{value:s.default.REQUIRED_STRING}});t.validateDNSValue=p;var m=p.extend({id:"VALIDATE_MX_VALUE",params:{record:"MX"},before:function(e){return{value:"10",mx_value:e.value}}});t.validateMXValue=m;var f=l.extend({id:"VALIDATE_DNS_NAME",params:{check:"name",value:!0,mx_value:!0},schema:{name:s.default.REQUIRED_STRING,value:null}});t.validateDNSName=f;var v=i.extend({id:"VALIDATE_DATABASE",params:{type:"dbname"}});t.validateDatabase=v;var _=i.extend({id:"VALIDATE_DATABASE_USER",params:{type:"dbusername"}});t.validateDBUser=_;var A=i.extend({id:"VALIDATE_USERNAME",params:{type:"username"}});t.validateUsername=A;var h=i.extend({id:"VALIDATE_SUBDOMAIN",domain:!0,params:{type:"subdomain"}});t.validateSubdomain=h;var y=i.extend({id:"VALIDATE_PASSWORD",params:{type:"password"}});t.validatePassword=y;var D=i.extend({id:"VALIDATE_DOMAIN",params:{type:"domain"},before:function(e){var t=e.value;return{value:r.default.toASCII(t)}}});t.validateDomain=D;var E=i.extend({id:"VALIDATE_IP_RANGE_LIST",params:{type:"ip_range_list"}});t.validateIPRangeList=E},1878:function(e,t,a){"use strict";a.r(t);var n=a(97);t.default={isValid:function(e){return void 0===e.error},getMessage:function(e){return Object(n.toAppHtml)(e.error||"")}}},1941:function(e,t,a){"use strict";a(7),a(10),a(5),a(6),a(8),a(11);var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.changePassword=t.updateSettings=t.getSettings=t.deleteAccounts=t.unsuspendAccounts=t.suspendAccounts=t.updateAccount=t.createAccount=t.getAccounts=t.getAccount=void 0;var s=n(a(2)),r=n(a(78));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var i=r.default.get({id:"FTP_ACCOUNT",url:"/CMD_FTP_SHOW",domain:!0,schema:{user:r.default.REQUIRED_STRING}});t.getAccount=i;var d=r.default.get({id:"FTP_ACCOUNTS",url:"/CMD_FTP",response:[],params:{full_json:!0},domain:!0,after:function(e){return e.flow(e.project({accounts:"users",anonLogin:"ANONLOGIN"}),e.mapProp("accounts",e.flow(e.mapValues((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,s.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({login:t},e)})),e.toArray,e.mapArrayProps({suspended:e.convert.toAppBoolean}))))}});t.getAccounts=d;var u=r.default.post({url:"/CMD_FTP",params:{action:"create"},domain:!0,schema:{user:r.default.REQUIRED_STRING,passwd:r.default.REQUIRED_STRING,passwd2:r.default.REQUIRED_STRING,type:r.default.REQUIRED_STRING,custom_val:r.default.OPTIONAL_STRING},notifySuccess:!1});t.createAccount=u;var c=u.extend({params:{action:"modify"},schema:{passwd:r.default.OPTIONAL_STRING,passwd2:r.default.OPTIONAL_STRING}});t.updateAccount=c;var l=r.default.select({url:"/CMD_FTP",domain:!0,params:{action:"delete"},notifySuccess:!1,notifyError:!1}),p=l.extend({params:{suspend:!0}});t.suspendAccounts=p;var m=l.extend({params:{unsuspend:!0}});t.unsuspendAccounts=m;var f=l.extend({params:{delete:!0}});t.deleteAccounts=f;var v=r.default.get({id:"FTP_SETTINGS",url:"/CMD_FTP_SETTINGS",domain:!0,after:function(e){return function(t){return{access:e.convert.toAppBoolean(t.Anonymous),upload:e.convert.toAppBoolean(t.AnonymousUpload),message:e.flow(e.convert.toAppString,e.convert.toAppText)(t.message)}}}});t.getSettings=v;var _=r.default.post({url:"/CMD_FTP_SETTINGS",params:{action:"modify"},domain:!0,schema:{anon:r.default.REQUIRED_BOOL,anonup:r.default.REQUIRED_BOOL,message:r.default.REQUIRED_STRING}});t.updateSettings=_;var A=r.default.post({url:"/CMD_CHANGE_FTP_PASSWORD",schema:{ftp:r.default.REQUIRED_STRING,password1:r.default.REQUIRED_STRING,password2:r.default.REQUIRED_STRING}});t.changePassword=A},2655:function(e,t,a){"use strict";a.r(t);var n=a(2656),s=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t.default=s.a},2656:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,r=n(a(36)),o=n(a(37)),i=a(1877),d=a(1941),u={preload:d.getAccount,api:[{command:d.getAccount,bind:"account"}],commands:{validatePassword:i.validatePassword},props:{user:{type:String,required:!0}},data:function(){return{password:"",type:"domain",customDir:""}},computed:{ftpOptions:function(){return[{id:"domain",label:this.$gettext("Domain"),desc:this.$gettext("FTP account with the root directory in the domains home directory (one up from the public_html)")},{id:"ftp",label:this.$gettext("FTP"),desc:this.$gettext("FTP account with the root directory in the domains public_ftp directory")},{id:"user",label:this.$gettext("User"),desc:this.$gettext("FTP account with the root directory as the users name in the public_html directory")},{id:"custom",label:this.$gettext("Custom"),desc:this.$gettext("Please provide custom directory in the field below")}]}},created:function(){this.type=this.$api.account.type,this.customDir=this.$api.account.path},methods:{modifyFtpAccount:(s=(0,o.default)(r.default.mark((function e(){var t;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.updateAccount)({user:this.user,passwd:this.password,passwd2:this.password,type:this.type,custom_val:this.customDir});case 2:(t=e.sent)&&"0"===t.error&&(this.$notify({theme:"safe",title:this.$gettext("Account modified")}),this.$router.push({name:"user/ftp-accounts"}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)}),copyPassword:function(){var e=this,t=document.createElement("textarea");t.style.position="fixed",t.style.bottom=0,t.style.right=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=this.password,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy")&&this.$nextTick((function(){e.$notifications.success({title:"Password copied!"}),document.body.removeChild(t)}))}}};t.default=u},3660:function(e,t){},3940:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",[a("ui-button",{attrs:{slot:"footer:buttons",theme:"safe","validate-group":"editFtpAccount"},on:{click:e.modifyFtpAccount},slot:"footer:buttons"},[a("translate",[e._v("Modify")])],1),e._v(" "),a("app-page-section",[a("ui-form-element",{attrs:{vertical:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                FTP Username:\n            ")]),e._v(" "),a("input-text",{attrs:{slot:"content",value:e.$api.account.fulluser,disabled:""},slot:"content"})],1),e._v(" "),a("ui-form-element",{attrs:{group:"editFtpAccount",validators:{api:e.$commands.validatePassword},vertical:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Enter Password\n            ")]),e._v(" "),a("input-password",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}],ref:"password",attrs:{slot:"content","show-generator":""},slot:"content",model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("ui-tabs",{attrs:{radio:"",tabs:e.ftpOptions,selected:e.type},on:{"update:selected":function(t){e.type=t}}},[a("ui-form-element",{attrs:{slot:"tab:custom",underline:!e.$_Client.isPhone},slot:"tab:custom"},[e.$_Client.isPhone?e._e():a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Directory\n                ")]),e._v(" "),a("input-text",{attrs:{slot:"content",type:"text"},slot:"content",model:{value:e.customDir,callback:function(t){e.customDir=t},expression:"customDir"}})],1)],1)],1)],1)},s=[]}}]);