(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1786:function(e,t,a){"use strict";a.r(t);var n=a(3895),s=a(2332);for(var r in s)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(r);a(3385);var i=a(0),u=a(3387),o=a.n(u),l=Object(i.a)(s.default,n.a,n.b,!1,null,"4b0b5cb3",null);"function"==typeof o.a&&o()(l),t.default=l.exports},1884:function(e,t,a){"use strict";a(10),a(6),a(8),a(11),a(16),a(14),a(23),a(25),a(18);var n=a(1),s=a(20);Object.defineProperty(t,"__esModule",{value:!0}),t.getUsersCreatedDate=t.getModifyUserData=t.getUser=t.getUsers=void 0,a(26),a(57),a(50),a(27),a(5),a(7);var r=n(a(2)),i=n(a(78)),u=c(a(1968)),o=c(a(9));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(l=function(e){return e?a:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var a=l(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=r?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=i.default.get({id:"USERS",url:"/CMD_USER_SHOW",params:{bytes:!0},pagination:!0,mapResponse:u.getUsers});t.getUsers=f;var m=i.default.get({id:"USER_DATA",url:"/CMD_SHOW_USER",params:{bytes:!0},schema:{user:i.default.REQUIRED_STRING},mapResponse:u.getUser});t.getUser=m;var _=i.default.get({id:"USER_MODIFY_DATA",url:"/CMD_MODIFY_USER",params:{bytes:!0},schema:{user:i.default.REQUIRED_STRING},after:function(e){return e.flow(e.deleteProp("additional_bandwidth"),e.wrap("data"),e.moveProp({"data.have_inode":"have_inode","data.ips":"ips","data.multi_ip_enabled":"multi_ip_enabled","data.multi_ip_select":"multi_ip_select","data.multi_ip_table":"multi_ip_table","data.multiple_ips":"multiple_ips","data.ns1":"ns1","data.ns2":"ns2","data.skin":"skin","data.packages":"packages","data.custom_items":"customItems","data.feature_sets":"featureSets","data.plugins":"pluginRules","data.cgroup":"cgroup"}),(function(e){return p(p({},e),{},{cgroup:e.cgroup||{}})}),e.mapProps({customItems:e.flow(e.toArray,e.mapArray((function(t){var a={type:t.type,description:t.desc,label:t.string,name:t.name};switch(t.type){case"checkbox":return p(p({},a),{},{value:"yes"===t.checked});case"text":return p(p({},a),{},{value:t.value});case"listbox":return p(p({},a),{},{type:"select",value:Object.values(t.select).find((function(e){return e.selected})).value,options:e.reduce((function(e,t){return p(p({},e),{},(0,r.default)({},t.value,t.text))}))(t.select)});default:return!1}})),(function(e){return e.filter((function(e){return!!e}))})),have_inode:e.convert.toAppBoolean,multiple_ips:e.convert.toAppBoolean,multi_ip_enabled:e.isEqual("1"),multi_ip_select:e.toSelect,skin:e.toSelect,ips:e.toSelect,packages:e.toSelect,multi_ip_table:e.flow(e.deleteProp("info"),e.toArray),features:e.feedWith(1,e.flow(e.getProp("data"),e.filter(e.flow(e.getProp("type"),e.isEqual("checkbox"))),e.mapValues(e.flow(e.getProp("checked"),e.convert.toAppBoolean)))),limits:e.feedWith(1,e.flow(e.getProp("data"),e.filter(e.flow(e.getProp("type"),e.isEqual("unlimited"))),e.mapValues((function(t){var a=e.convert.toAppLimit(t.value)===1/0;return{value:a?"":t.value,unlimited:a}})))),featureSets:function(t){return{options:e.mapValues(e.getProp("name"))(t),values:e.flow(e.filter((function(e){return"yes"===e.checked})),Object.keys)(t)}},cgroup:function(e){return o.values(o.merge(e.options||{},e.saved||{}))}}),e.deleteProp("data"))}});t.getModifyUserData=_;var v=i.default.get({id:"ALL_USERS_DATE_CREATED",url:"/CMD_API_SHOW_USERS",noQueryArg:!0,params:{get_variable:"date_created",json:null},accept:"plain",response:{},after:function(e){return function(e){return o.pipe(o.split("&"),o.map(o.pipe(o.split("="),o.map(o.pipe(window.decodeURIComponent,o.trim)))),o.fromPairs,o.map((function(e){return new Date(e)})))(e)}}});t.getUsersCreatedDate=v},1892:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.modifyUserCustomize=t.deleteMultiIPs=t.modifyMultiIP=t.saveIP=t.savePackage=t.savePerUserLimit=t.saveNameservers=t.saveName=t.saveEmail=t.saveLanguage=t.saveSkin=t.increaseBandwidth=t.sendWelcomeEmail=t.saveComments=t.createUser=t.changeIp=t.changePackage=t.deleteUsers=t.unsuspendUsers=t.suspendUsers=void 0;var s=n(a(78)),r=s.default.post({url:"/CMD_SELECT_USERS",notifySuccess:!0,params:{location:"CMD_USER_SHOW"},schema:{select:s.default.ROWS},blocking:!0}),i=r.extend({params:{dosuspend:!0},schema:{reason:s.default.REQUIRED_STRING}});t.suspendUsers=i;var u=r.extend({params:{dounsuspend:!0}});t.unsuspendUsers=u;var o=r.extend({params:{delete:!0,confirmed:!0},schema:{leave_dns:s.default.OPTIONAL_BOOL}});t.deleteUsers=o;var l=r.extend({params:{dopackage:!0},schema:{package:s.default.OPTIONAL_STRING}});t.changePackage=l;var c=r.extend({params:{doip:!0},schema:{ip:s.default.OPTIONAL_STRING}});t.changeIp=c;var d=s.default.post({url:"/CMD_ACCOUNT_USER",params:{add:!0,action:"create"},schema:{username:s.default.REQUIRED_STRING,email:s.default.REQUIRED_STRING,passwd:s.default.REQUIRED_STRING,passwd2:s.default.REQUIRED_STRING,domain:s.default.REQUIRED_STRING,package:s.default.OPTIONAL_STRING,ip:s.default.REQUIRED_STRING,notify:s.default.REQUIRED_BOOL}});t.createUser=d;var p=s.default.post({url:"/CMD_COMMENTS",params:{location:"CMD_USER_SHOW"},schema:{user:s.default.REQUIRED_STRING,comments:s.default.REQUIRED_STRING}});t.saveComments=p;var f=s.default.post({url:"/CMD_RESEND_EMAIL",schema:{user:s.default.REQUIRED_STRING,email:s.default.REQUIRED_STRING,newpass:s.default.REQUIRED_BOOL}});t.sendWelcomeEmail=f;var m=s.default.post({url:"/CMD_MODIFY_USER",params:{additional_bw:!0,action:"single",json:null},schema:{user:s.default.REQUIRED_STRING,additional_bandwidth:s.default.REQUIRED_STRING}});t.increaseBandwidth=m;var _=s.default.post({url:"/CMD_MODIFY_USER",params:{json:!0,action:"single"},schema:{user:s.default.REQUIRED_STRING}}),v=_.extend({params:{skin:!0},schema:{skinvalue:s.default.REQUIRED_STRING}});t.saveSkin=v;var g=_.extend({params:{language:!0},schema:{lvalue:s.default.REQUIRED_STRING}});t.saveLanguage=g;var O=_.extend({params:{email:!0},schema:{evalue:s.default.REQUIRED_STRING}});t.saveEmail=O;var I=_.extend({params:{name:!0},schema:{nvalue:s.default.REQUIRED_STRING}});t.saveName=I;var h=_.extend({params:{ns:!0},schema:{ns1:s.default.REQUIRED_STRING,ns2:s.default.REQUIRED_STRING}});t.saveNameservers=h;var R=_.extend({params:{max_per_email_send_limit:!0},schema:{max_per_email_send_limit_value:s.default.REQUIRED_STRING}});t.savePerUserLimit=R;var b=s.default.post({url:"/CMD_MODIFY_USER",params:{action:"package"},schema:{user:s.default.REQUIRED_STRING,package:s.default.REQUIRED_STRING}});t.savePackage=b;var N=s.default.post({url:"/CMD_MODIFY_USER",params:{action:"ip"},schema:{user:s.default.REQUIRED_STRING,ip:s.default.REQUIRED_STRING}});t.saveIP=N;var P=s.default.post({url:"/CMD_MODIFY_USER",params:{action:"multi_ip"},schema:{user:s.default.REQUIRED_STRING,extra_ip:s.default.REQUIRED_STRING}});t.modifyMultiIP=P;var S=s.default.select({url:"/CMD_MODIFY_USER",params:{action:"multi_ip_delete",delete:!0},schema:{user:s.default.REQUIRED_STRING,removedns:s.default.REQUIRED_BOOL}});t.deleteMultiIPs=S;var T=s.default.post({url:"/CMD_MODIFY_USER",params:{action:"customize",bytes:!0},body:{user:s.default.REQUIRED_STRING,bandwidth:s.default.OPTIONAL_STRING,ubandwidth:s.default.OPTIONAL_BOOL,quota:s.default.OPTIONAL_STRING,uquota:s.default.OPTIONAL_BOOL,inode:s.default.OPTIONAL_STRING,uinode:s.default.OPTIONAL_BOOL,vdomains:s.default.OPTIONAL_STRING,uvdomains:s.default.OPTIONAL_BOOL,nsubdomains:s.default.OPTIONAL_STRING,unsubdomains:s.default.OPTIONAL_BOOL,nemails:s.default.OPTIONAL_STRING,unemails:s.default.OPTIONAL_BOOL,nemailf:s.default.OPTIONAL_STRING,unemailf:s.default.OPTIONAL_BOOL,nemailml:s.default.OPTIONAL_STRING,unemailml:s.default.OPTIONAL_BOOL,nemailr:s.default.OPTIONAL_STRING,unemailr:s.default.OPTIONAL_BOOL,mysql:s.default.OPTIONAL_STRING,umysql:s.default.OPTIONAL_BOOL,domainptr:s.default.OPTIONAL_STRING,udomainptr:s.default.OPTIONAL_BOOL,ftp:s.default.OPTIONAL_STRING,uftp:s.default.OPTIONAL_BOOL,aftp:s.default.OPTIONAL_STRING,cgi:s.default.OPTIONAL_STRING,php:s.default.OPTIONAL_STRING,spam:s.default.OPTIONAL_STRING,catchall:s.default.OPTIONAL_STRING,ssl:s.default.OPTIONAL_STRING,ssh:s.default.OPTIONAL_STRING,cron:s.default.OPTIONAL_STRING,sysinfo:s.default.OPTIONAL_STRING,login_keys:s.default.OPTIONAL_STRING,dnscontrol:s.default.OPTIONAL_STRING,suspend_at_limit:s.default.OPTIONAL_STRING,skin:s.default.OPTIONAL_STRING,ns1:s.default.REQUIRED_STRING,ns2:s.default.REQUIRED_STRING}});t.modifyUserCustomize=T},1968:function(e,t,a){"use strict";a.r(t),a.d(t,"processUserRow",(function(){return p})),a.d(t,"getUsers",(function(){return f})),a.d(t,"getUserDomains",(function(){return m})),a.d(t,"getUserComments",(function(){return _})),a.d(t,"getTodayUsage",(function(){return v})),a.d(t,"getSkinInfo",(function(){return g})),a.d(t,"getFeatures",(function(){return I})),a.d(t,"getUsage",(function(){return R})),a.d(t,"getUserData",(function(){return b})),a.d(t,"getCustomItems",(function(){return N})),a.d(t,"getEmailLimit",(function(){return P})),a.d(t,"getUser",(function(){return S}));var n=a(9),s=a(97),r=a(141),i=a(47),u=a(72),o=a(947),l=a(135),c=a(713),d=function(){return(d=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},p=function(e){var t,a,i,u,o="string"==typeof e.bandwidth||!e.bandwidth.usage,c={usage:0,limit:1/0,status:r.a.Normal};return{username:e.username,corrupted:o,pending:o&&"string"!=typeof e.bandwidth,suspended:!o&&Object(s.toBoolean)(e.suspended.value),reason:o?"none":e.suspended.reason||"none",bandwidth:o?c:Object(s.toUsage)(e.bandwidth),quota:o?c:Object(s.toUsage)(e.quota),vdomains:o?c:Object(s.toUsage)(e.vdomains),domains:e.domains,ip:e.ip.length?e.ip:"",package:e.package||"",date_created:e.date_created?Object(l.toAppDate)(e.date_created):"",mysql:e.mysql?(t=e.mysql,a=t.split("/").map(n.trim),i=a[0],u=a[1],Object(s.toUsage)({usage:i,limit:u})):""}},f={users:n.pipe(n.omit(["reasons","packages","ips"]),Object(s.toTable)(p)),packages:n.pipe(n.prop("packages"),n.defaultTo([]),o.toSelect),ips:n.pipe(n.prop("ips"),n.defaultTo([]),o.toSelect),reasons:n.pipe(n.prop("reasons"),o.toSelect)},m=n.pipe(n.prop("domains"),Object(s.toTable)(n.pipe((function(e){return d(d({},e),{pointers:e.settings.domainptr||{}})}),n.evolve({bandwidth:n.evolve({usage:s.toNumber}),quota:n.evolve({usage:s.toNumber}),log_usage:s.toNumber,nsubdomains:s.toNumber,suspended:s.toBoolean,settings:n.mapObjIndexed(s.toBoolean),pointers:function(e){return Object.entries(e).map((function(e){return{ptr:e[0],type:e[1].type}}))}})))),_=n.pipe(n.prop("comments"),s.toAppText),v=function(e){var t=i.Maybe.Some(e).map(n.prop("stats")).map(n.values).flatMap((function(e){return i.Maybe.fromNull(n.find(n.propEq("setting","email_deliveries_outgoing_today"),e))})).map(n.prop("usage")).map(s.toNumber).orSome(0);return{canReset:"1"===e.reseller_can_reset_email_count,sent:t}},g=function(e){return{custom:"1"===e.is_reseller_skin,path:e.reseller_skin||"",owner:e.reseller_skin_owner||""}},O=function(e){var t=e.usage;return n.contains(t,["ON","OFF"])},I=n.pipe(n.prop("stats"),n.values,Object(u.mergeTransduce)([Object(u.filterReducer)(O),Object(u.mapReducer)((function(e){var t,a=e.usage;return(t={})[e.setting]=Object(s.toBoolean)(a),t}))])),h=function(e){var t=e.setting;e.usage;return n.contains(t,["bandwidth","quota","email_quota","db_quota","inode","vdomains","nsubdomains","nemails","nemailf","nemailml","nemailr","email_deliveries_outgoing","email_deliveries_incoming","mysql","domainptr","ftp"])},R=n.pipe(n.prop("stats"),n.values,Object(u.mergeTransduce)([Object(u.filterReducer)(n.prop("usage")),Object(u.filterReducer)(h),Object(u.mapReducer)((function(e){var t,a=e.setting,n=e.usage,r=e.max_usage;return(t={})[a]=Object(s.toUsage)({usage:n,limit:"unlimited"===r?1/0:r}),t}))])),b=function(e){var t=e.stats;return n.pipe(n.concat([{setting:"create_user_home_override_error",usage:i.Maybe.fromNull(t.create_user_home_override).map(n.prop("max_usage")).orSome(""),max_usage:""},{setting:"email_deliveries_outgoing_today",usage:"0",max_usage:"0"}]),Object(u.mergeTransduce)([Object(u.filterReducer)(n.prop("usage")),Object(u.filterReducer)(n.complement(h)),Object(u.filterReducer)(n.complement(O)),Object(u.mapReducer)((function(e){return"suspended_reason"===e.setting?d(d({},e),{extra:e.extra||{details:""}}):e})),Object(u.mapReducer)((function(e){var t;return(t={})[e.setting]=e.extra?{value:e.usage,extra:e.extra}:e.usage,t}))]),n.evolve({suspended:s.toBoolean,skin:o.toSelect,language:o.toSelect,suspend_date:l.toAppDate}))(n.values(t))},N=function(e){var t=e.custom_items,a=void 0===t?{}:t;return n.map(c.fromObject,a)},P=function(e){var t=Object.values(e.stats).find((function(e){return"max_per_email_send_limit"===e.setting}));return t?{value:t.usage,email_limit:t.max_usage}:{value:"",email_limit:""}},S={domains:m,comments:_,todayUsage:v,skinInfo:g,stats:{features:I,usage:R,userData:b},email:function(e){return e.user_email},customItems:N,emailLimit:P,cgroup:function(e){return e.cgroup&&e.cgroup.saved||{}}}},2332:function(e,t,a){"use strict";a.r(t);var n=a(2333),s=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t.default=s.a},2333:function(e,t,a){"use strict";a(10),a(5),a(6),a(8),a(11);var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(36)),r=n(a(2)),i=n(a(37)),u=n(a(38));a(26),a(7),a(34);var o=a(28),l=a(1884),c=a(1892);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f,m,_,v,g,O,I={preload:function(){return(0,l.getModifyUserData)({user:(0,o.State)("app.user.name")})},components:{UserPackage:n(a(2017)).default},api:[{command:l.getModifyUserData,bind:"data"}],data:function(){return{loading:!1,packageName:"",ip:"",extraIP:"",checkedRows:[],ns1:"",ns2:"",packageData:{},removedns:!1}},computed:{user:function(){return this.$state.app.user.name},showExtraIP:function(){if(this.$api.data.multi_ip_enabled){var e=Object.keys(this.$api.data.multi_ip_select.options);return!!(0,u.default)(e,1)[0]}return!1},deleteIPActionDisabled:function(){var e=this.$api.data.multi_ip_table;return e.length<2||e.length===this.checkedRows.length},checkedIPs:function(){return this.checkedRows.map((function(e){return e.current_ip}))}},created:function(){this.package=this.$api.data.packages.value,this.ip=this.$api.data.ips.value,this.extraIP=this.$api.data.multi_ip_select.value,this.ns1=this.$p6e.toU(this.$api.data.ns1),this.ns2=this.$p6e.toU(this.$api.data.ns2)},methods:{loadUserData:(O=(0,i.default)(s.default.mark((function e(){var t,a=this;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,(0,l.getModifyUserData)({user:this.user});case 3:return t=e.sent,this.$nextTick((function(){a.loading=!1})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)}))),function(){return O.apply(this,arguments)}),savePackage:(g=(0,i.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.savePackage)({user:this.user,package:this.packageName});case 2:this.user===this.$state.app.user.name&&this.$store.dispatch("app/GET_TOKENS");case 3:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)}),saveIP:(v=(0,i.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.saveIP)({user:this.user,ip:this.ip});case 2:(0,l.getModifyUserData)({user:this.user});case 3:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)}),deleteIP:(_=(0,i.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.deleteMultiIPs)({user:this.user,select:this.checkedIPs,removedns:this.removedns});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:return e.prev=7,(0,l.getModifyUserData)({user:this.user}),this.checkedRows=[],e.finish(7);case 11:case"end":return e.stop()}}),e,this,[[0,5,7,11]])}))),function(){return _.apply(this,arguments)}),saveAdditionalIP:(m=(0,i.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.modifyMultiIP)({user:this.user,extra_ip:this.extraIP});case 2:(0,l.getModifyUserData)({user:this.user});case 3:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)}),savePackageData:(f=(0,i.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.modifyUserCustomize)(p(p({user:this.user},this.packageData),{},{bandwidth:"".concat(this.packageData.bandwidth," MB"),quota:"".concat(this.packageData.quota," MB"),ns1:this.$p6e.toA(this.ns1),ns2:this.$p6e.toA(this.ns2)}));case 2:this.user===this.$state.app.user.name&&this.$store.dispatch("app/GET_TOKENS");case 3:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})}};t.default=I},3043:function(e,t,a){var n=a(3386);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(4).default)("37d28554",n,!0,{})},3385:function(e,t,a){"use strict";a(3043)},3386:function(e,t,a){},3387:function(e,t){},3895:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{attrs:{id:"modify-user"}},[a("app-page-section",[a("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n            Change Package\n        ")]),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Set Package to\n            ")]),e._v(" "),a("template",{slot:"content"},[a("input-select",{attrs:{options:e.$api.data.packages.options,disabled:!Object.values(e.$api.data.packages.options).length},model:{value:e.packageName,callback:function(t){e.packageName=t},expression:"packageName"}},[a("ui-button",{attrs:{slot:"additions:right",theme:"safe",size:"normal",disabled:!e.packageName},on:{click:e.savePackage},slot:"additions:right"},[a("translate",[e._v("Save")])],1)],1)],1)],2)],1),e._v(" "),a("app-page-section",[a("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n            Change IP\n        ")]),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Set IP To\n            ")]),e._v(" "),a("ui-input-group",{attrs:{slot:"content"},slot:"content"},[a("input-select",{attrs:{slot:"input",options:e.$api.data.ips.options},slot:"input",model:{value:e.ip,callback:function(t){e.ip=t},expression:"ip"}}),e._v(" "),a("ui-button",{attrs:{slot:"additions:right",theme:"safe"},on:{click:e.saveIP},slot:"additions:right"},[a("translate",[e._v("Save")])],1)],1)],1),e._v(" "),e.showExtraIP?a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Add Additional IP\n            ")]),e._v(" "),a("input-select",{attrs:{slot:"content",options:e.$api.data.multi_ip_select.options},slot:"content",model:{value:e.extraIP,callback:function(t){e.extraIP=t},expression:"extraIP"}},[a("ui-button",{attrs:{slot:"additions:right",theme:"safe"},on:{click:e.saveAdditionalIP},slot:"additions:right"},[a("translate",[e._v("Save")])],1)],1)],1):e._e(),e._v(" "),e.$api.data.multi_ip_enabled?a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Current IPs\n            ")]),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("ui-r-table",e._b({attrs:{"checked-rows":e.checkedRows,"vertical-layout":e.$_Client.isPhone,"hide-before-controls":""},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}}},"ui-r-table",{rows:e.$api.data.multi_ip_table,columns:[{id:"current_ip",label:e.$gettext("IP")},{id:"type",label:e.$gettext("Type")}]},!1),[a("ui-table-action",{attrs:{slot:"table:actions",disabled:e.deleteIPActionDisabled},on:{click:function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}},slot:"table:actions"},[a("translate",[e._v("Delete")])],1)],1)],1)],1):e._e()],1),e._v(" "),a("app-page-section",[a("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n            Manually Change Settings\n        ")]),e._v(" "),a("user-package",{attrs:{"initial-data":e.$api.data},on:{update:function(t){e.packageData=t}}}),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                NS1\n            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.ns1,callback:function(t){e.ns1=t},expression:"ns1"}})],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                NS2\n            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.ns2,callback:function(t){e.ns2=t},expression:"ns2"}})],1),e._v(" "),a("ui-button",{attrs:{slot:"footer:buttons",theme:"safe"},on:{click:e.savePackageData},slot:"footer:buttons"},[a("translate",[e._v("Save")])],1)],1),e._v(" "),a("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("IP","IPs",e.checkedRows.length)},on:{"click:confirm":e.deleteIP}},[a("input-checkbox",{model:{value:e.removedns,callback:function(t){e.removedns=t},expression:"removedns"}},[a("translate",{attrs:{"translate-n":e.checkedRows.length,"translate-plural":"Remove DNS records for IPs"}},[e._v("\n                Remove DNS records for IP\n            ")])],1)],1)],1)},s=[]}}]);