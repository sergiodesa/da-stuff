(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1742:function(t,a,n){"use strict";n.r(a);var e=n(3853),i=n(2161);for(var l in i)["default"].indexOf(l)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(l);var r=n(0),s=n(3254),u=n.n(s),o=Object(r.a)(i.default,e.a,e.b,!1,null,null,null);"function"==typeof u.a&&u()(o),a.default=o.exports},2161:function(t,a,n){"use strict";n.r(a);var e=n(2162),i=n.n(e);for(var l in e)["default"].indexOf(l)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(l);a.default=i.a},2162:function(t,a,n){"use strict";var e=n(1);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n(36)),l=e(n(2)),r=e(n(37));n(57),n(26);var s,u,o,c,d=n(508),p={preload:d.getPluginsList,api:[{command:d.getPluginsList,bind:"plugins"}],data:function(){return{addPluginData:{method:"url",url:"",file:null,passwd:"",install:!0},currentActionData:{action:"",id:""}}},computed:{plugins:function(){return this.$api.plugins}},methods:{getPluginName:function(t){var a=this.plugins.find((function(a){return a.id===t}));return a?a.name:""},addPlugin:(c=(0,r.default)(i.default.mark((function t(){var a;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={url:d.installPlugin,file:d.uploadPlugin}[this.addPluginData.method],t.prev=1,t.next=4,a(this.addPluginData);case 4:this.reloadPlugins(),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:return t.prev=9,(0,d.getPluginsList)(),t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,7,9,12]])}))),function(){return c.apply(this,arguments)}),pluginAction:(o=(0,r.default)(i.default.mark((function t(a,n){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.currentActionData={action:a,id:n},this.$dialog("CONFIRMATION_DIALOG").open();case 2:case"end":return t.stop()}}),t,this)}))),function(t,a){return o.apply(this,arguments)}),reloadPlugins:(u=(0,r.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.commit("navigation/RESET_PLUGINS"),this.$store.dispatch("navigation/LOAD_PLUGINS",{level:this.$state.app.user.accessLevel});case 2:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)}),doAction:(s=(0,r.default)(i.default.mark((function t(){var a,n,e,r;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.currentActionData,e=n.action,r=n.id,t.next=3,(0,d.pluginAction)((a={},(0,l.default)(a,e,!0),(0,l.default)(a,"select",[r]),(0,l.default)(a,"passwd",this.addPluginData.passwd),a));case 3:t.sent&&(this.reloadPlugins(),this.currentActionData={id:"",action:""},(0,d.getPluginsList)());case 5:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})}};a.default=p},3254:function(t,a){},3853:function(t,a,n){"use strict";n.d(a,"a",(function(){return e})),n.d(a,"b",(function(){return i}));var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("app-page",{attrs:{actions:[{handler:t.$dialog("ADD_PLUGIN_DIALOG").open,label:t.$gettext("Add Plugin"),icon:"#plus-fill"}]}},[n("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(a){t.$dialog("ADD_PLUGIN_DIALOG").open()}},slot:"header:buttons"},[n("translate",[t._v("Add")])],1),t._v(" "),n("app-page-section",[n("ui-r-table",{attrs:{"is-checkable":!1,rows:t.plugins,columns:[{id:"name",label:t.$gettext("Plugin"),grow:!0,editable:!1},{id:"version",label:t.$gettext("Version")},{id:"available_version",label:t.$gettext("Available Version")},{id:"active",label:t.$gettext("Active")},{id:"can_update",label:t.$gettext("Can Update")},{id:"installed",label:t.$gettext("Installed")},{id:"author",label:t.$gettext("Author"),grow:!0}],"vertical-layout":t.$_Client.isPhone,"disable-pagination":""},scopedSlots:t._u([{key:"col:name",fn:function(a){var e=a.name,i=a.id;return n("ui-grid",{attrs:{cross:"center"}},[n("span",{domProps:{textContent:t._s(e||i)}}),t._v(" "),e?t._e():n("ui-tooltip",{attrs:{theme:"danger"}},[n("translate",[t._v("Corrupted Plugin")])],1)],1)}},{key:"col:active",fn:function(a){var e=a.active;return n("ui-badge",{attrs:{theme:e?"safe":"danger",size:"small"}},[t._v("\n                "+t._s(e?t.$gettext("Yes"):t.$gettext("No"))+"\n            ")])}},{key:"col:can_update",fn:function(a){var e=a.available_version;return n("ui-badge",{attrs:{theme:e?"safe":"danger",size:"small"}},[t._v("\n                "+t._s(e?t.$gettext("Yes"):t.$gettext("No"))+"\n            ")])}},{key:"col:installed",fn:function(a){var e=a.installed;return n("ui-badge",{attrs:{theme:e?"safe":"danger",size:"small"}},[t._v("\n                "+t._s(e?t.$gettext("Yes"):t.$gettext("No"))+"\n            ")])}},{key:"row:actions",fn:function(a){var e=a.name,i=a.id,l=a.active,r=a.available_version,s=a.installed;return n("ui-actions",{attrs:{position:"left"}},[s?[l?n("ui-link",{key:"deactivate-link",on:{click:function(a){return t.pluginAction("deactivate",i)}}},[n("translate",[t._v("Deactivate")])],1):n("ui-link",{key:"activate-link",on:{click:function(a){return t.pluginAction("activate",i)}}},[n("translate",[t._v("Activate")])],1)]:t._e(),t._v(" "),r?n("ui-link",{key:"update-link",on:{click:function(a){return t.pluginAction("update",i)}}},[n("translate",[t._v("Update")])],1):t._e(),t._v(" "),!s&&e?n("ui-link",{key:"install-link",on:{click:function(a){return t.pluginAction("install",i)}}},[n("translate",[t._v("Install")])],1):n("ui-link",{key:"uninstall-link",on:{click:function(a){return t.pluginAction("uninstall",i)}}},[n("translate",[t._v("Un-Install")])],1),t._v(" "),n("ui-link",{key:"delete-link",on:{click:function(a){return t.pluginAction("delete",i)}}},[n("translate",[t._v("Delete")])],1)],2)}}])})],1),t._v(" "),n("ui-dialog",{attrs:{id:"ADD_PLUGIN_DIALOG"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n            Add Plugin\n        ")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                    Upload Method:\n                ")]),t._v(" "),n("template",{slot:"content"},[n("input-radio",{attrs:{value:"url"},model:{value:t.addPluginData.method,callback:function(a){t.$set(t.addPluginData,"method",a)},expression:"addPluginData.method"}},[n("translate",[t._v("URL")])],1),t._v(" "),n("input-radio",{attrs:{value:"file"},model:{value:t.addPluginData.method,callback:function(a){t.$set(t.addPluginData,"method",a)},expression:"addPluginData.method"}},[n("translate",[t._v("File")])],1)],1)],2),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},["url"===t.addPluginData.method?n("ui-form-element",{key:"url",attrs:{vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        URL\n                    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.addPluginData.url,expression:"addPluginData.url"}],attrs:{slot:"content",type:"text"},domProps:{value:t.addPluginData.url},on:{input:function(a){a.target.composing||t.$set(t.addPluginData,"url",a.target.value)}},slot:"content"})],1):n("ui-form-element",{key:"file",attrs:{vertical:""}},[n("translate",{attrs:{slot:"title",vertical:""},slot:"title"},[t._v("\n                        File\n                    ")]),t._v(" "),n("input-dropzone",{attrs:{slot:"content",accept:["application/gzip"]},slot:"content",model:{value:t.addPluginData.file,callback:function(a){t.$set(t.addPluginData,"file",a)},expression:"addPluginData.file"}})],1)],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                    Password\n                ")]),t._v(" "),n("input-password",{attrs:{slot:"content"},slot:"content",model:{value:t.addPluginData.passwd,callback:function(a){t.$set(t.addPluginData,"passwd",a)},expression:"addPluginData.passwd"}})],1),t._v(" "),n("ui-form-element",[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.addPluginData.install,callback:function(a){t.$set(t.addPluginData,"install",a)},expression:"addPluginData.install"}},[n("translate",[t._v("Install after upload")])],1)],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:t.addPlugin},slot:"buttons"},["url"===t.addPluginData.method?n("translate",[t._v("\n                Install\n            ")]):n("translate",[t._v("\n                Upload\n            ")])],1)],1),t._v(" "),n("ui-dialog-confirm",{attrs:{id:"CONFIRMATION_DIALOG"},on:{"click:confirm":t.doAction,"dialog:close":function(a){t.addPluginData.passwd=""}}},["deactivate"===t.currentActionData.action?n("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v("\n            Are you sure you want to deactivate “%{ name }” plugin?\n        ")]):"activate"===t.currentActionData.action?n("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v("\n            Are you sure you want to activate “%{ name }” plugin?\n        ")]):"update"===t.currentActionData.action?n("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v("\n            Are you sure you want to update “%{ name }” plugin?\n        ")]):"install"===t.currentActionData.action?n("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v("\n            Are you sure you want to install “%{ name }” plugin?\n        ")]):"uninstall"===t.currentActionData.action?n("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v("\n            Are you sure you want to uninstall “%{ name }” plugin?\n        ")]):n("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v("\n            Are you sure you want to delete “%{ name }” plugin?\n        ")]),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Password\n            ")]),t._v(" "),n("input-password",{attrs:{slot:"content"},slot:"content",model:{value:t.addPluginData.passwd,callback:function(a){t.$set(t.addPluginData,"passwd",a)},expression:"addPluginData.passwd"}})],1)],1)],1)},i=[]}}]);