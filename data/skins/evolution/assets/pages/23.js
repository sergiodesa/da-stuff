(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1797:function(e,t,a){"use strict";a.r(t);var s=a(3905),r=a(2483);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);var i=a(0),o=a(3531),l=a.n(o),u=Object(i.a)(r.default,s.a,s.b,!1,null,null,null);"function"==typeof l.a&&l()(u),t.default=u.exports},1877:function(e,t,a){"use strict";var s=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.validateIPRangeList=t.validateDomain=t.validatePassword=t.validateSubdomain=t.validateUsername=t.validateDBUser=t.validateDatabase=t.validateDNSName=t.validateMXValue=t.validateDNSValue=t.validateFTP=t.validateEmail=t.validateForwarder=void 0;var r=s(a(78)),n=s(a(98)),i=s(a(1878)),o=r.default.get({url:"/CMD_JSON_VALIDATE",schema:{value:r.default.REQUIRED_STRING},response:{valid:!0,message:""},mapResponse:{valid:i.default.isValid,message:i.default.getMessage}}),l=o.extend({id:"VALIDATE_FORWARDER",params:{type:"forwarder",ignore_system_default:!0}});t.validateForwarder=l;var u=o.extend({id:"VALIDATE_EMAIL",params:{type:"email",check_mailing_list:!0},schema:{check_exists:{type:Boolean,required:!1,default:!0}}});t.validateEmail=u;var c=o.extend({id:"VALIDATE_FTP",params:{type:"ftp"},domain:!0});t.validateFTP=c;var d=o.extend({params:{type:"dns"},domain:!0,schema:{record:r.default.REQUIRED_STRING}}),p=d.extend({id:"VALIDATE_DNS_VALUE",params:{check:"value",name:!0},domain:!0,schema:{value:r.default.REQUIRED_STRING}});t.validateDNSValue=p;var v=p.extend({id:"VALIDATE_MX_VALUE",params:{record:"MX"},before:function(e){return{value:"10",mx_value:e.value}}});t.validateMXValue=v;var f=d.extend({id:"VALIDATE_DNS_NAME",params:{check:"name",value:!0,mx_value:!0},schema:{name:r.default.REQUIRED_STRING,value:null}});t.validateDNSName=f;var _=o.extend({id:"VALIDATE_DATABASE",params:{type:"dbname"}});t.validateDatabase=_;var m=o.extend({id:"VALIDATE_DATABASE_USER",params:{type:"dbusername"}});t.validateDBUser=m;var g=o.extend({id:"VALIDATE_USERNAME",params:{type:"username"}});t.validateUsername=g;var b=o.extend({id:"VALIDATE_SUBDOMAIN",domain:!0,params:{type:"subdomain"}});t.validateSubdomain=b;var h=o.extend({id:"VALIDATE_PASSWORD",params:{type:"password"}});t.validatePassword=h;var D=o.extend({id:"VALIDATE_DOMAIN",params:{type:"domain"},before:function(e){var t=e.value;return{value:n.default.toASCII(t)}}});t.validateDomain=D;var x=o.extend({id:"VALIDATE_IP_RANGE_LIST",params:{type:"ip_range_list"}});t.validateIPRangeList=x},1878:function(e,t,a){"use strict";a.r(t);var s=a(97);t.default={isValid:function(e){return void 0===e.error},getMessage:function(e){return Object(s.toAppHtml)(e.error||"")}}},1891:function(e,t,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var s=a(1),r=a(20);Object.defineProperty(t,"__esModule",{value:!0}),t.getLoginPMAStatus=t.globalLoginPMA=t.loginPMA=t.setUserPrivs=t.getUserPrivs=t.changeUserPassword=t.assignUser=t.addUser=t.deleteAccessHost=t.addAccessHost=t.deleteUsers=t.getDatabase=t.uploadBackup=t.deleteDatabase=t.optimizeDatabase=t.checkDatabase=t.repairDatabase=t.getDatabases=t.createDatabase=t.getUsers=void 0;var n=s(a(78)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(s,i,l):s[i]=e[i]}s.default=e,a&&a.set(e,s);return s}(a(9));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}var l=n.default.get({id:"DB_USERS",url:"/CMD_DB_CREATE",domain:!0,mapResponse:{users:i.pipe(i.omit(["MAX_DB_LENGTH","MAX_DB_USER_LENGTH"]),i.values,i.filter((function(e){return"..."!==e.text})),i.map((function(e){return{value:e.value,label:e.text}}))),max_db_length:i.prop("MAX_DB_LENGTH"),max_db_user_length:i.prop("MAX_DB_USER_LENGTH")}});t.getUsers=l;var u=n.default.post({url:"/CMD_DB",params:{action:"create"},domain:!0,schema:{name:n.default.REQUIRED_STRING,user:n.default.REQUIRED_STRING,passwd:n.default.OPTIONAL_STRING,passwd2:n.default.OPTIONAL_STRING,userlist:n.default.OPTIONAL_STRING},after:function(e){return e.mapProp("result",e.convert.toAppHtml)},updateTokens:!0});t.createDatabase=u;var c=n.default.get({id:"DATABASES",url:"/CMD_DB",domain:!0,pagination:!0,after:function(e){return e.mapProps({databases:e.toTable(e.mapArrayProps({nusers:e.convert.toAppNumber,size:e.convert.toAppNumber})),HAVE_ONE_CLICK_PMA_LOGIN:e.convert.toAppBoolean,total_usage:e.convert.toAppNumber,dbs_select:e.toSelect})}});t.getDatabases=c;var d=n.default.select({url:"/CMD_DB",domain:!0,params:{json:!0}}),p=d.extend({params:{repair:!0}});t.repairDatabase=p;var v=d.extend({params:{check:!0}});t.checkDatabase=v;var f=d.extend({params:{optimize:!0}});t.optimizeDatabase=f;var _=d.extend({params:{delete_db:!0},updateTokens:!0});t.deleteDatabase=_;var m=n.default.post({url:"/CMD_DB",params:{action:"restore",method:"default"},domain:!0,schema:{name:n.default.REQUIRED_STRING,dbuser:n.default.REQUIRED_STRING,dbpass:n.default.REQUIRED_STRING,file:{type:File,required:!0}},before:function(e){return{file1:e.file,file:null}},transport:FormData,continous:!0});t.uploadBackup=m;var g=n.default.get({id:"DB_VIEW",url:"/CMD_DB_VIEW",params:{page:1,ipp:9999},domain:!0,schema:{name:n.default.REQUIRED_STRING},after:function(e){return e.flow(e.project({hosts:"access_hosts",users:"db_users",pmaLogin:"HAVE_ONE_CLICK_PMA_LOGIN"}),e.mapProps({users:e.flow(e.deleteProp("info"),e.toArray,e.mapArray(e.getProp("User"))),hosts:e.flow(e.deleteProp("info"),e.toArray,e.mapArray(e.getProp("Access Hosts"))),pmaLogin:e.convert.toAppBoolean}))}});t.getDatabase=g;var b=n.default.post({url:"/CMD_DB",method:"POST",params:{action:"deleteuser",delete:!0,json:!0},domain:!0,schema:{name:n.default.REQUIRED_STRING,select:n.default.ROWS}});t.deleteUsers=b;var h=n.default.post({url:"/CMD_DB_ACCESS",domain:!0,params:{add:!0,json:!0},schema:{name:n.default.REQUIRED_STRING,host:n.default.REQUIRED_STRING}});t.addAccessHost=h;var D=n.default.select({url:"/CMD_DB_ACCESS",domain:!0,params:{delete:!0,json:!0},schema:{name:n.default.REQUIRED_STRING}});t.deleteAccessHost=D;var x=n.default.post({url:"/CMD_DB",domain:!0,params:{action:"createuser",json:!0},schema:{name:n.default.REQUIRED_STRING,passwd:n.default.REQUIRED_STRING,passwd2:n.default.REQUIRED_STRING}});t.addUser=x;var E=n.default.post({url:"/CMD_DB",domain:!0,params:{action:"createuser",json:!0,passwd:"*****",passwd2:"*****"},schema:{name:n.default.REQUIRED_STRING,userlist:n.default.REQUIRED_STRING}});t.assignUser=E;var w=n.default.post({url:"/CMD_DB",domain:!0,params:{action:"modifyuser",json:!0},schema:{name:n.default.REQUIRED_STRING,user:n.default.REQUIRED_STRING,passwd:n.default.REQUIRED_STRING,passwd2:n.default.REQUIRED_STRING}});t.changeUserPassword=w;var A=n.default.get({id:"DB_USER_PRIVS",url:"/CMD_DB_USER_PRIVS",domain:!0,schema:{name:n.default.REQUIRED_STRING,user:n.default.REQUIRED_STRING},after:function(e){return e.mapValues(e.isEqual("Y"))}});t.getUserPrivs=A;var R=n.default.post({url:"/CMD_DB_USER_PRIVS",domain:!0,params:{action:"save "},body:{name:n.default.REQUIRED_STRING,user:n.default.REQUIRED_STRING}});t.setUserPrivs=R;var k=n.default.post({url:"/CMD_PMA_LOGIN",domain:!0,params:{json:!0},notifySuccess:!1,notifyError:!1,schema:{name:n.default.REQUIRED_STRING}});t.loginPMA=k;var U=n.default.post({url:"/CMD_PMA_LOGIN",params:{json:!0,name:"all",domain:""},notifySuccess:!1,notifyError:!1});t.globalLoginPMA=U;var I=n.default.get({url:"/CMD_DB",response:!1,mapResponse:function(e){return"yes"===e.HAVE_ONE_CLICK_PMA_LOGIN},notifyError:!1});t.getLoginPMAStatus=I},2483:function(e,t,a){"use strict";a.r(t);var s=a(2484),r=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);t.default=r.a},2484:function(e,t,a){"use strict";var s=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(36)),n=s(a(37));a(34),a(26),a(13),a(15),a(24),a(5);var i,o,l,u,c,d=a(1891),p=s(a(3523)),v=s(a(3526)),f=s(a(3527)),_=s(a(3528)),m={preload:[function(e){var t=e.database;return(0,d.getDatabase)({name:t})},d.getUsers],api:[{command:d.getDatabase,bind:"db"},{command:d.getUsers,bind:{"response.users":"users"}}],components:{CreateDbUserDialog:p.default,ExistingDbUserDialog:v.default,ChangeDbUserPassDialog:f.default,ChangeDbUserPrivsDialog:_.default},props:{database:{type:String,required:!0}},data:function(){return{checkedUserRows:[],checkedHostRows:[],host:"",currentUser:""}},computed:{users:function(){return this.$api.db.users.map((function(e){return{user:e}}))},hosts:function(){return this.$api.db.hosts.map((function(e){return{host:e}}))},checkedUsers:function(){return this.checkedUserRows.map((function(e){return e.user}))},checkedHosts:function(){return this.checkedHostRows.map((function(e){return e.host}))},notAssignedUsers:function(){var e=this,t=this.$state.app.user.name;return this.$api.users.map((function(e){return e.value})).filter((function(a){return!e.$api.db.users.includes("".concat(t,"_").concat(a))}))}},watch:{$domain:function(){this.reload()}},methods:{deleteHosts:(c=(0,n.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.deleteAccessHost)({name:this.database,select:this.checkedHosts});case 2:e.sent&&(this.reload(),this.checkedHostRows=[]);case 4:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),deleteUsers:(u=(0,n.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.deleteUsers)({name:this.database,select:this.checkedUsers});case 2:e.sent&&(this.reload(),this.checkedUserRows=[]);case 4:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)}),addNewAccessHost:(l=(0,n.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.addAccessHost)({name:this.database,host:this.host});case 2:e.sent&&this.reload();case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),reload:function(){(0,d.getDatabase)({name:this.database})},changePasswordDialog:function(e){this.currentUser=e,this.$dialog("CHANGE_DB_USER_PASS_DIALOG").open()},changePrivilegesDialog:(o=(0,n.default)(r.default.mark((function e(t){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentUser=t,this.$dialog("CHANGE_DB_USER_PRIVS_DIALOG").open();case 2:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)}),loginPMA:(i=(0,n.default)(r.default.mark((function e(){var t,a,s;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.loginPMA)({name:this.database});case 2:"yes"===e.sent.success&&((t=window.document.createElement("form")).action="/CMD_PMA_LOGIN",t.method="POST",t.target="_blank",(a=window.document.createElement("input")).type="hidden",a.name="domain",a.value=this.$domainUnicode,t.appendChild(a),(s=window.document.createElement("input")).type="hidden",s.name="name",s.value=this.database,t.appendChild(s),window.document.body.appendChild(t),t.submit());case 4:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}};t.default=m},2485:function(e,t,a){"use strict";a.r(t);var s=a(2486),r=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);t.default=r.a},2486:function(e,t,a){"use strict";var s=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(36)),n=s(a(37));a(26);var i,o=a(1877),l=a(1891),u={commands:{validateDBUser:o.validateDBUser,validatePassword:o.validatePassword},props:{database:{type:String,required:!0}},data:function(){return{user:"",passwd:""}},computed:{prefix:function(){return"".concat(this.$state.app.user.name,"_")}},methods:{submit:(i=(0,n.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.addUser)({name:this.database,user:this.user,passwd:this.passwd,passwd2:this.passwd});case 2:e.sent&&this.$emit("userAdded");case 4:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}};t.default=u},2487:function(e,t,a){"use strict";a.r(t);var s=a(2488),r=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);t.default=r.a},2488:function(e,t,a){"use strict";var s=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=s(a(36)),i=s(a(37)),o=a(1891),l={props:{database:{type:String,required:!0},users:{type:Array,required:!0}},data:function(){return{user:""}},methods:{submit:(r=(0,i.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.assignUser)({name:this.database,userlist:this.user});case 2:e.sent&&this.$emit("userAssigned");case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})}};t.default=l},2489:function(e,t,a){"use strict";a.r(t);var s=a(2490),r=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);t.default=r.a},2490:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(1877),r=a(1891),n={commands:{validatePassword:s.validatePassword},props:{database:{type:String,required:!0},user:{type:String,required:!0}},data:function(){return{passwd:""}},methods:{submit:function(){(0,r.changeUserPassword)({name:this.database,user:this.user,passwd:this.passwd,passwd2:this.passwd})}}};t.default=n},2491:function(e,t,a){"use strict";a.r(t);var s=a(2492),r=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);t.default=r.a},2492:function(e,t,a){"use strict";a(7),a(10),a(5),a(6),a(8),a(11);var s=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(36));a(49);var n=s(a(37)),i=s(a(2)),o=a(32),l=a(1891);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}var c,d={props:{database:{type:String,required:!0},user:{type:String,required:!0}},data:function(){return{privileges:{alter:!1,alter_routine_priv:!1,create:!1,create_routine_priv:!1,create_view_priv:!1,delete:!1,drop:!1,event_priv:!1,execute_priv:!1,grant:!1,index:!1,insert:!1,lock_table:!1,reference:!1,select:!1,show_view_priv:!1,tmp_table:!1,trigger_priv:!1,update:!1}}},computed:{requestData:function(){var e=o._.mapValues(this.privileges,(function(e){return e?"Y":"N"}));return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,i.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({name:this.database,user:this.user},e)}},methods:{loadUserPrivs:(c=(0,n.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.t1=this.privileges,e.next=4,(0,l.getUserPrivs)({name:this.database,user:this.user});case 4:e.t2=e.sent,this.privileges=e.t0.assign.call(e.t0,e.t1,e.t2);case 6:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),submit:function(){(0,l.setUserPrivs)(this.requestData)}}};t.default=d},3080:function(e,t,a){var s=a(3525);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(4).default)("45d81856",s,!0,{})},3081:function(e,t,a){var s=a(3530);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(4).default)("7b010687",s,!0,{})},3523:function(e,t,a){"use strict";a.r(t);var s=a(4044),r=a(2485);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a(3524);var i=a(0),o=Object(i.a)(r.default,s.a,s.b,!1,null,"be916686",null);t.default=o.exports},3524:function(e,t,a){"use strict";a(3080)},3525:function(e,t,a){},3526:function(e,t,a){"use strict";a.r(t);var s=a(4045),r=a(2487);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);var i=a(0),o=Object(i.a)(r.default,s.a,s.b,!1,null,null,null);t.default=o.exports},3527:function(e,t,a){"use strict";a.r(t);var s=a(4046),r=a(2489);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);var i=a(0),o=Object(i.a)(r.default,s.a,s.b,!1,null,null,null);t.default=o.exports},3528:function(e,t,a){"use strict";a.r(t);var s=a(4047),r=a(2491);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a(3529);var i=a(0),o=Object(i.a)(r.default,s.a,s.b,!1,null,"3dabab98",null);t.default=o.exports},3529:function(e,t,a){"use strict";a(3081)},3530:function(e,t,a){},3531:function(e,t){},3905:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{attrs:{actions:e.$api.db.pmaLogin?[{handler:e.loginPMA,label:e.$gettext("Login to phpMyAdmin"),icon:"phpmyadmin"}]:[]}},[e.$api.db.pmaLogin?a("ui-button",{attrs:{slot:"header:buttons",theme:"light",size:"big",title:e.$gettext("Login to phpMyAdmin")},on:{click:e.loginPMA},slot:"header:buttons"},[a("img",{attrs:{src:e.$store.getters["themes/iconsPath"]+"#phpmyadmin",height:"50"}})]):e._e(),e._v(" "),a("app-page-section",[a("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n            Users\n        ")]),e._v(" "),a("ui-r-table",e._b({on:{"update:checkedRows":function(t){e.checkedUserRows=t}},scopedSlots:e._u([{key:"col:priv",fn:function(t){var s=t.user;return a("ui-link",{on:{click:function(t){return e.changePrivilegesDialog(s)}}},[e.$_Client.isPhone?a("translate",[e._v("\n                    Modify\n                ")]):a("translate",[e._v("\n                    Modify Privileges\n                ")])],1)}},{key:"col:password",fn:function(t){var s=t.user;return a("ui-link",{on:{click:function(t){return e.changePasswordDialog(s)}}},[e.$_Client.isPhone?a("translate",[e._v("\n                    Change\n                ")]):a("translate",[e._v("\n                    Change Password\n                ")])],1)}}])},"ui-r-table",{columns:[{id:"user",label:e.$gettext("User")},{id:"password",label:e.$gettext("Password")},{id:"priv",label:e.$gettext("Privileges")}],rows:e.users,checkedRows:e.checkedUserRows,verticalLayout:e.$_Client.isPhone,editable:!1},!1),[a("ui-table-action",{attrs:{slot:"table:actions"},on:{click:function(t){e.$dialog("DELETE_USERS_DIALOG").open()}},slot:"table:actions"},[a("translate",[e._v("Delete")])],1),e._v(" "),e._v(" "),e._v(" "),a("template",{slot:"buttons:before"},[a("ui-button",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}],attrs:{theme:"safe",size:"normal"},on:{click:function(t){e.$dialog("CREATE_DB_USER_DIALOG").open()}}},[a("translate",[e._v("Create New User")])],1),e._v(" "),e.notAssignedUsers.length?a("ui-button",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}],attrs:{theme:"primary",size:"normal"},on:{click:function(t){e.$dialog("ASSIGN_DB_USER_DIALOG").open()}}},[a("translate",[e._v("Add Existing User")])],1):e._e()],1)],2)],1),e._v(" "),a("app-page-section",[a("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n            Access Hosts\n        ")]),e._v(" "),a("ui-r-table",e._b({attrs:{"hide-before-controls":""},on:{"update:checkedRows":function(t){e.checkedHostRows=t}}},"ui-r-table",{rows:e.hosts,columns:[{id:"host",label:e.$gettext("Access Host")}],checkedRows:e.checkedHostRows,notCheckable:e.hosts.filter((function(e){return"localhost"===e.host}))},!1),[a("ui-table-action",{attrs:{slot:"table:actions"},on:{click:function(t){e.$dialog("DELETE_HOSTS_DIALOG").open()}},slot:"table:actions"},[a("translate",[e._v("Delete")])],1),e._v(" "),a("ui-input-group",{attrs:{slot:"buttons:after"},slot:"buttons:after"},[a("input-text",{attrs:{slot:"input",placeholder:e.$gettext("Access Host")},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addNewAccessHost.apply(null,arguments)}},slot:"input",model:{value:e.host,callback:function(t){e.host=t},expression:"host"}}),e._v(" "),a("ui-button",{attrs:{slot:"additions:right",theme:"safe"},on:{click:e.addNewAccessHost},slot:"additions:right"},[a("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        Add New\n                    ")])],1)],1)],1)],1),e._v(" "),a("create-db-user-dialog",e._b({on:{userAdded:e.reload}},"create-db-user-dialog",{database:e.database},!1)),e._v(" "),a("existing-db-user-dialog",e._b({on:{userAssigned:e.reload}},"existing-db-user-dialog",{database:e.database,users:e.notAssignedUsers},!1)),e._v(" "),a("ui-dialog-delete-items",{attrs:{id:"DELETE_HOSTS_DIALOG",subject:e.$ngettext("Access host","Access hosts",e.checkedHosts.length)},on:{"click:confirm":e.deleteHosts}}),e._v(" "),a("ui-dialog-delete-items",{attrs:{id:"DELETE_USERS_DIALOG",subject:e.$ngettext("user","users",e.checkedUsers.length)},on:{"click:confirm":e.deleteUsers}}),e._v(" "),a("change-db-user-pass-dialog",{attrs:{database:e.database,user:e.currentUser}}),e._v(" "),a("change-db-user-privs-dialog",{attrs:{database:e.database,user:e.currentUser}})],1)},r=[]},4044:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-dialog",{attrs:{id:"CREATE_DB_USER_DIALOG"}},[a("translate",{attrs:{slot:"title","translate-params":{database:e.database}},slot:"title"},[e._v("\n        Create New User for %{database}\n    ")]),e._v(" "),a("template",{slot:"content"},[a("ui-form-element",{attrs:{group:"createUser",validators:{required:!0,api:e.$commands.validateDBUser},vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Username:")]),e._v(" "),a("input-text",e._b({attrs:{slot:"content"},slot:"content",model:{value:e.user,callback:function(t){e.user=t},expression:"user"}},"input-text",{prefix:e.prefix},!1))],1),e._v(" "),a("ui-form-element",{attrs:{group:"createUser",validators:{required:!0,api:e.$commands.validatePassword},vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Password:")]),e._v(" "),a("input-password",{attrs:{slot:"content",showGenerator:""},slot:"content",model:{value:e.passwd,callback:function(t){e.passwd=t},expression:"passwd"}})],1)],1),e._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"primary",validateGroup:"createUser"},on:{click:e.submit},slot:"buttons"},[a("translate",[e._v("Create")])],1)],2)},r=[]},4045:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-dialog",{attrs:{id:"ASSIGN_DB_USER_DIALOG",size:"small"}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Assign Existing User to %{database}")]),e._v(" "),a("ui-form-element",{attrs:{slot:"content",vertical:""},slot:"content"},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Username:")]),e._v(" "),a("ui-input-group",{attrs:{slot:"content"},slot:"content"},[a("ui-button",{attrs:{slot:"additions:left",disabled:""},slot:"additions:left"},[e._v("\n                "+e._s(e.$state.app.user.name)+"_\n            ")]),e._v(" "),a("input-select",{attrs:{slot:"input",options:e.users},slot:"input",model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1)],1),e._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:e.submit},slot:"buttons"},[a("translate",[e._v("Assign")])],1)],1)},r=[]},4046:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-dialog",e._g({attrs:{id:"CHANGE_DB_USER_PASS_DIALOG"}},e.$listeners),[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Change password\n    ")]),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("ui-form-element",{attrs:{vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Username:\n            ")]),e._v(" "),a("input-text",{attrs:{slot:"content",value:e.user,disabled:""},slot:"content"})],1),e._v(" "),a("ui-form-element",{attrs:{group:"changePassword",validators:{required:!0,api:e.$commands.validatePassword},vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Password:\n            ")]),e._v(" "),a("input-password",{attrs:{slot:"content","show-generator":""},slot:"content",model:{value:e.passwd,callback:function(t){e.passwd=t},expression:"passwd"}})],1)],1),e._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"primary","validate-group":"changePassword"},on:{click:e.submit},slot:"buttons"},[a("translate",[e._v("Save")])],1)],1)},r=[]},4047:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-dialog",{attrs:{id:"CHANGE_DB_USER_PRIVS_DIALOG",size:"normal"},on:{"dialog:open":e.loadUserPrivs}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Change privileges\n    ")]),e._v(" "),a("template",{slot:"content"},[a("ui-form-element",{attrs:{vertical:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Username\n            ")]),e._v(" "),a("input-text",{attrs:{slot:"content",disabled:"",value:e.user},slot:"content"})],1),e._v(" "),a("ui-form-element",{attrs:{vertical:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Privileges:\n            ")]),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter:padding",value:1,expression:"1",arg:"padding"}],staticClass:"privs-flex",attrs:{slot:"content"},slot:"content"},[a("input-checkbox",{model:{value:e.privileges.select,callback:function(t){e.$set(e.privileges,"select",t)},expression:"privileges.select"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Select\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.insert,callback:function(t){e.$set(e.privileges,"insert",t)},expression:"privileges.insert"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Insert\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.update,callback:function(t){e.$set(e.privileges,"update",t)},expression:"privileges.update"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Update\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.delete,callback:function(t){e.$set(e.privileges,"delete",t)},expression:"privileges.delete"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Delete\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.create,callback:function(t){e.$set(e.privileges,"create",t)},expression:"privileges.create"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Create\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.drop,callback:function(t){e.$set(e.privileges,"drop",t)},expression:"privileges.drop"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Drop\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.alter,callback:function(t){e.$set(e.privileges,"alter",t)},expression:"privileges.alter"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Alter\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.index,callback:function(t){e.$set(e.privileges,"index",t)},expression:"privileges.index"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Index\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.grant,callback:function(t){e.$set(e.privileges,"grant",t)},expression:"privileges.grant"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Grant\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.reference,callback:function(t){e.$set(e.privileges,"reference",t)},expression:"privileges.reference"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Reference\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.tmp_table,callback:function(t){e.$set(e.privileges,"tmp_table",t)},expression:"privileges.tmp_table"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Create tmp tables\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.lock_table,callback:function(t){e.$set(e.privileges,"lock_table",t)},expression:"privileges.lock_table"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Lock Tables\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.show_view_priv,callback:function(t){e.$set(e.privileges,"show_view_priv",t)},expression:"privileges.show_view_priv"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Show View\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.create_routine_priv,callback:function(t){e.$set(e.privileges,"create_routine_priv",t)},expression:"privileges.create_routine_priv"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Create Routine\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.alter_routine_priv,callback:function(t){e.$set(e.privileges,"alter_routine_priv",t)},expression:"privileges.alter_routine_priv"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Alter Routine\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.execute_priv,callback:function(t){e.$set(e.privileges,"execute_priv",t)},expression:"privileges.execute_priv"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Execute\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.create_view_priv,callback:function(t){e.$set(e.privileges,"create_view_priv",t)},expression:"privileges.create_view_priv"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Create View\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.event_priv,callback:function(t){e.$set(e.privileges,"event_priv",t)},expression:"privileges.event_priv"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Event\n                    ")])],1),e._v(" "),a("input-checkbox",{model:{value:e.privileges.trigger_priv,callback:function(t){e.$set(e.privileges,"trigger_priv",t)},expression:"privileges.trigger_priv"}},[a("translate",{attrs:{"translate-context":"mysql_privs"}},[e._v("\n                        Trigger\n                    ")])],1)],1)],1)],1),e._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:e.submit},slot:"buttons"},[a("translate",[e._v("Save")])],1)],2)},r=[]}}]);