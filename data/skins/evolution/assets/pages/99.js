(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1788:function(t,e,a){"use strict";a.r(e);var n=a(3897),s=a(2356);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a(3405);var r=a(0),o=a(3407),l=a.n(o),c=Object(r.a)(s.default,n.a,n.b,!1,null,null,null);"function"==typeof l.a&&l()(c),e.default=c.exports},2356:function(t,e,a){"use strict";a.r(e);var n=a(2357),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e.default=s.a},2357:function(t,e,a){"use strict";a(10),a(6),a(8),a(11);var n=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(a(2));a(13),a(15),a(5),a(27),a(55),a(34),a(96),a(7);var i=a(2358);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){(0,s.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={data:function(){return{allDomains:!0,backupOptions:["domain","subdomain","email","email_data","emailsettings","forwarder","autoresponder","vacation","list","ftp","ftpsettings","database","database_data","trash"],domains:[]}},computed:{disabledEntries:function(){var t=this,e=function(e,a){return!t.backupOptions.includes(e)&&a};return[e("email","email_data"),e("database","database_data")].filter(Boolean)},domainList:function(){var t=this;return this.$state.app.tokens.DOMAIN_LIST.reduce((function(e,a){return o(o({},e),{},(0,s.default)({},a,t.$p6e.toU(a)))}),{})},selectedDomainsString:function(){var t=this;if(this.allSelected)return this.$gettext("All domains selected");var e=function(e){return e.map(t.$p6e.toU).join(",")};return this.domains.length>5?this.$gettextInterpolate(this.$gettext("%{domains} and %{n} more domains"),{domains:e(this.domains.slice(0,3)),n:this.domains.length-3}):e(this.domains)},allSelected:function(){return this.domains.length===Object.keys(this.domainList).length},requestDomains:function(){return this.allDomains||this.allSelected?null:this.domains}},watch:{backupOptions:function(t,e){e.includes("database")&&!t.includes("database")&&(this.backupOptions=t.filter((function(t){return"database_data"!==t}))),e.includes("email")&&!t.includes("email")&&(this.backupOptions=t.filter((function(t){return"email_data"!==t})))}},methods:{createBackup:function(){(0,i.createBackup)({select:this.backupOptions,domains:this.requestDomains})},openDialog:function(){this.allDomains=!1,this.$dialog("SELECT_DOMAINS_DIALOG").open()}}};e.default=l},2358:function(t,e,a){"use strict";a(7),a(10),a(5),a(6),a(8),a(11);var n=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.restoreBackup=e.getBackup=e.createBackup=e.getBackups=void 0;var s=n(a(2)),i=n(a(78));function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){(0,s.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={url:"/CMD_SITE_BACKUP",domain:!0},c=i.default.get(o(o({},l),{},{id:"SITE_BACKUPS",domain:!0,response:[]}));e.getBackups=c;var u=i.default.select(o(o({},l),{},{params:{action:"backup",form_version:"4"}}));e.createBackup=u;var d=i.default.post(o(o({id:"SITE_BACKUP"},l),{},{params:{action:"view"},schema:{file:i.default.REQUIRED_STRING},response:[],notifySuccess:!1}));e.getBackup=d;var p=i.default.select(o(o({},l),{},{params:{action:"restore",form_version:"3"},schema:{file:i.default.REQUIRED_STRING}}));e.restoreBackup=p},3048:function(t,e,a){var n=a(3406);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4).default)("39e75251",n,!0,{})},3405:function(t,e,a){"use strict";a(3048)},3406:function(t,e,a){},3407:function(t,e){},3897:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",{staticClass:"backup",attrs:{actions:[{label:t.$gettext("Restore Backup"),name:"user/backup/restore",icon:"#extract",theme:"primary"}]}},[a("template",{slot:"header:buttons"},[a("ui-button-link",{attrs:{theme:"primary",name:"user/backup/restore"}},[a("translate",[t._v("Restore Backup")])],1)],1),t._v(" "),a("app-page-section"),t._v(" "),a("app-page-section",{staticClass:"backup-create"},[a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Include\n            ")]),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("input-radio",{attrs:{value:!0},model:{value:t.allDomains,callback:function(e){t.allDomains=e},expression:"allDomains"}},[a("translate",[t._v("All Domains")])],1),t._v(" "),a("input-radio",{attrs:{value:!1},on:{change:t.openDialog},model:{value:t.allDomains,callback:function(e){t.allDomains=e},expression:"allDomains"}},[a("ui-link",{on:{click:t.openDialog}},[a("translate",[t._v("Selected Domains")])],1),t._v(" "),0!==t.domains.length?a("ui-tooltip",{attrs:{theme:"primary"}},[a("span",{domProps:{textContent:t._s(t.selectedDomainsString)}})]):t._e()],1)],1)],1),t._v(" "),a("input-select-multiple",{staticClass:"backup-options",attrs:{options:{website:{label:t.$gettext("Website Data"),entries:{domain:t.$gettext("Domains Directory: Backs up all user files for all domains"),subdomain:t.$gettext("Subdomains Lists: Backs up the list of subdomains for each domain")}},email:{label:t.$gettext("E-mail"),entries:{email:t.$gettext("E-mail Accounts List for all domains (names and passwords)"),email_data:t.$gettext("E-mail Data: Includes the messages from the Inbox, IMAP Folders, and webmail data."),emailsettings:t.$gettext("E-mail Settings: Includes the filters and the catchall address."),forwarder:t.$gettext("Forwarders: Includes all forwarding addresses."),autoresponder:t.$gettext("Autoresponders: Includes all autoresponders and messages."),vacation:t.$gettext("Vacation Messages: Includes all vacation messages and times."),list:t.$gettext("Mailing Lists: Includes all mailing lists.")}},ftp:{label:t.$gettext("FTP"),entries:{ftp:t.$gettext("FTP Accounts"),ftpsettings:t.$gettext("FTP Settings")}},database:{label:t.$gettext("Database"),entries:{database:t.$gettext("Database Settings: Backs up all DB Users and DB Settings"),database_data:t.$gettext("Database Data")}},trash:{label:t.$gettext("Trash"),entries:{trash:t.$gettext("Deleted Trash Data")}}},"disabled-entries":t.disabledEntries,"max-items-visible":1/0,"hide-header":"","no-highlight":""},model:{value:t.backupOptions,callback:function(e){t.backupOptions=e},expression:"backupOptions"}}),t._v(" "),a("template",{slot:"footer:buttons"},[a("ui-button",{attrs:{theme:"safe"},on:{click:t.createBackup}},[a("translate",[t._v("Create Backup")])],1)],1)],2),t._v(" "),a("ui-dialog",{attrs:{id:"SELECT_DOMAINS_DIALOG",size:"normal","no-close-btn":""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n            Select domains to backup\n        ")]),t._v(" "),a("input-select-multiple",{attrs:{slot:"content",options:t.domainList,"max-items-visible":1/0},slot:"content",model:{value:t.domains,callback:function(e){t.domains=e},expression:"domains"}})],1)],2)},s=[]}}]);