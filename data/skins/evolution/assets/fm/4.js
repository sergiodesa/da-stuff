(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0d53":function(t,e,a){},3550:function(t,e,a){"use strict";var i=a("0d53"),s=a.n(i);s.a},"39d5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"edit-route",attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-white text-primary q-pa-sm no-margin no-padding",attrs:{reveal:""}},[a("q-toolbar",{staticClass:"bg-secondary text-white no-padding"},[a("q-btn",{staticClass:"col",attrs:{flat:"",stretch:"",color:"white",icon:"create",label:t.savePath,align:"left",disable:t.progressLoad||t.progressSave},on:{click:function(e){t.showSaveDialog=!0}}},[a("ui-tooltip",[a("translate",{staticClass:"text-no-wrap"},[t._v("Change filename / path")])],1)],1),a("q-separator",{attrs:{color:"white",vertical:""}}),a("q-btn",{attrs:{flat:"",stretch:"",color:"white",icon:"close"},on:{click:t.closeEditor}},[a("ui-tooltip",[a("translate",{staticClass:"text-no-wrap"},[t._v("Close Editor")])],1)],1),a("q-separator",{attrs:{color:"white",vertical:""}}),a("q-btn",{attrs:{flat:"",stretch:"",color:"white",icon:"refresh",disable:t.progressSave,loading:t.progressLoad},on:{click:t.loadFile}},[a("ui-tooltip",[a("translate",{staticClass:"text-no-wrap"},[t._v("Reload file")])],1)],1),a("q-separator",{attrs:{color:"white",vertical:""}}),a("q-btn",{attrs:{flat:"",stretch:"",color:"white",icon:"save",disable:t.progressLoad,loading:t.progressSave},on:{click:t.save}},[a("ui-tooltip",[a("translate",{staticClass:"text-no-wrap"},[t._v("Save file")])],1)],1)],1)],1),a("q-page-container",[a("q-page",{staticClass:"column"},[a("text-editor",{staticClass:"col",attrs:{value:t.value,mode:t.mode,theme:t.theme,"line-numbers":t.lineNumbers,"line-wrap":t.lineWrap},on:{"update:value":function(e){t.value=e}}}),a("q-toolbar",{staticClass:"bg-grey-8 no-padding",staticStyle:{"min-height":"30px","max-height":"30px"},attrs:{inset:""}},[a("q-btn",{attrs:{flat:"",stretch:"",icon:"info",size:"sm",label:t.$gettext("Shortcuts"),color:"white"}},[a("q-tooltip",{attrs:{"content-style":"background: transparent;"}},[a("q-card",{staticStyle:{"min-width":"600px"}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-primary"},[t._v("Keyboard Shortcuts")])]),a("q-card-section",[a("q-list",[a("q-item",[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Ctrl-F")]),a("q-item-label",{attrs:{overline:""}},[t._v("Cmd-F")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[a("translate",{staticClass:"text-body1 text-primary"},[t._v("Start searching")])],1)],1)],1),a("q-separator"),a("q-item",[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Ctrl-G")]),a("q-item-label",{attrs:{overline:""}},[t._v("Cmd-G")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[a("translate",{staticClass:"text-body1 text-primary"},[t._v("Find next")])],1)],1)],1),a("q-separator"),a("q-item",[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Shift-Ctrl-G")]),a("q-item-label",{attrs:{overline:""}},[t._v("Shift-Cmd-G")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[a("translate",{staticClass:"text-body1 text-primary"},[t._v("Find previous")])],1)],1)],1),a("q-separator"),a("q-item",[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Shift-Ctrl-F")]),a("q-item-label",{attrs:{overline:""}},[t._v("Cmd-Option-F")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[a("translate",{staticClass:"text-body1 text-primary"},[t._v("Replace")])],1)],1)],1),a("q-separator"),a("q-item",[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Shift-Ctrl-R")]),a("q-item-label",{attrs:{overline:""}},[t._v("Shift-Cmd-Option-F")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[a("translate",{staticClass:"text-body1 text-primary"},[t._v("Replace all")])],1)],1)],1),a("q-separator"),a("q-item",[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Alt-F")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[a("translate",{staticClass:"text-body1 text-primary"},[t._v("Persistent search")])],1)],1)],1),a("q-separator"),a("q-item",[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[t._v("Alt-G")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[a("translate",{staticClass:"text-body1 text-primary"},[t._v("Jump to line")])],1)],1)],1)],1)],1)],1)],1)],1),a("q-space"),a("q-btn",{attrs:{size:"sm",icon:"code",flat:"",stretch:"",color:"white"}},[a("ui-tooltip",[a("translate",{attrs:{"translate-params":{mode:t.mode}}},[t._v("Mode: %{mode}")])],1),a("q-menu",[a("q-list",{attrs:{dense:""}},t._l(t.modes,(function(e){return a("q-item",{key:e,attrs:{dense:"",tag:"label",clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-radio",{attrs:{val:e},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e))])],1)],1)})),1)],1)],1),a("q-separator",{attrs:{color:"white",vertical:""}}),a("q-btn",{attrs:{size:"sm",icon:"palette",flat:"",stretch:"",color:"white"}},[a("ui-tooltip",[a("translate",{attrs:{"translate-params":{theme:t.theme}}},[t._v("\n              Theme: %{theme}\n            ")])],1),a("q-menu",[a("q-list",{attrs:{dense:""}},t._l(t.themes,(function(e){return a("q-item",{key:e,attrs:{dense:"",tag:"label",clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-radio",{attrs:{val:e},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e))])],1)],1)})),1)],1)],1),a("q-separator",{attrs:{color:"white",vertical:""}}),a("q-btn",{attrs:{flat:"",stretch:"",size:"sm",color:t.lineNumbers?"white":"grey-6",icon:"format_list_numbered"},on:{click:function(e){t.lineNumbers=!t.lineNumbers}}},[a("ui-tooltip",[a("span",{staticClass:"text-no-wrap"},[t._v("\n              "+t._s(t.lineNumbers?t.$gettext("Line Numbers: Enabled"):t.$gettext("Line Numbers: Disabled"))+"\n            ")])])],1),a("q-separator",{attrs:{color:"white",vertical:""}}),a("q-btn",{attrs:{flat:"",stretch:"",size:"sm",color:t.lineWrap?"white":"grey-6",icon:"wrap_text"},on:{click:function(e){t.lineWrap=!t.lineWrap}}},[a("ui-tooltip",[a("span",{staticClass:"text-no-wrap"},[t._v("\n              "+t._s(t.lineWrap?t.$gettext("Line Wrap: Enabled"):t.$gettext("Line Wrap: Disabled"))+"\n            ")])])],1)],1)],1)],1),a("q-dialog",{model:{value:t.showSaveDialog,callback:function(e){t.showSaveDialog=e},expression:"showSaveDialog"}},[a("q-card",{staticStyle:{"min-width":"400px"}},[a("q-card-section",{staticClass:"no-padding"},[a("q-toolbar",{staticClass:"no-padding"},[a("translate",{staticClass:"q-pl-md text-weight-medium"},[t._v("\n            Save File As...\n          ")]),a("q-space"),a("q-btn",{attrs:{flat:"",stretch:"",color:"primary",icon:"close"},on:{click:function(e){t.showSaveDialog=!1}}})],1)],1),a("q-separator"),a("q-card-section",{staticClass:"q-gutter-y-md"},[a("ui-label",{attrs:{text:t.$gettext("Path")}},[a("input-path-select",{attrs:{path:t.target},on:{"update:path":function(e){t.target=e}}})],1),a("ui-label",{attrs:{text:t.$gettext("Name")}},[a("q-input",{attrs:{outlined:"",rules:[function(e){return!!e||t.$gettext("Field is required")}]},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.showSaveDialog=!1}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)],1)],1)],1)},s=[],r=a("967e"),n=a.n(r),o=(a("6762"),a("2fdb"),a("96cf"),a("fa84")),l=a.n(o),c=(a("7f7f"),a("a76e")),m=a("6705"),d={name:"FileEdit",beforeRouteLeave:function(t,e,a){this.isChanged?this.$q.dialog({title:this.$gettext("Confirm closing"),message:this.$gettext("Discard unsaved changes?"),cancel:!0,persistent:!0}).onOk((function(){a(!0)})).onCancel((function(){a(!1)})):a()},components:{TextEditor:c["a"]},computed:{themes:function(){return c["d"]},modes:function(){return c["c"]},payload:function(){return{filename:this.name,path:this.target,text:this.value}},savePath:function(){return this.progressLoad?this.$route.query.path:"/"===this.target?"/".concat(this.name):"".concat(this.target,"/").concat(this.name)}},data:function(){return{name:"",target:"",value:"",mode:"text",theme:"default",showSaveDialog:!1,progressSave:!1,progressLoad:!1,isChanged:!1,lineWrap:!1,lineNumbers:!0}},created:function(){var t=this;return l()(n.a.mark((function e(){var a;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadFile();case 2:t.$store.dispatch("tree/LOAD_TREE",t.target),t.mode=Object(c["b"])(t.$route.query.path),a=window.localStorage.getItem("evolution:fm/editor-theme"),t.theme=t.themes.includes(a)?a:"default";case 6:case"end":return e.stop()}}),e)})))()},watch:{value:function(){this.isChanged=!0},theme:function(t){window.localStorage.setItem("evolution:fm/editor-theme",t)}},methods:{loadFile:function(){var t=this;return l()(n.a.mark((function e(){var a;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.progressLoad=!0,e.next=3,Object(m["a"])(t.$route.query.path);case 3:a=e.sent,t.value=a.text,t.name=a.filename,t.target=a.directory,t.progressLoad=!1,t.$nextTick((function(){t.isChanged=!1}));case 9:case"end":return e.stop()}}),e)})))()},save:function(){var t=this;return l()(n.a.mark((function e(){return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showSaveDialog=!1,t.progressSave=!0,e.next=4,Object(m["b"])(t.payload);case 4:t.progressSave=!1,t.isChanged=!1;case 6:case"end":return e.stop()}}),e)})))()},closeEditor:function(){this.$router.push({name:"files",query:{path:this.target}})}}},u=d,p=(a("3550"),a("2877")),h=a("4d5a"),q=a("e359"),v=a("65c6"),b=a("9c40"),f=a("eb85"),g=a("09e3"),x=a("9989"),w=a("05c0"),C=a("f09f"),_=a("a370"),y=a("1c1c"),S=a("66e5"),k=a("4074"),Q=a("0170"),$=a("2c91"),L=a("4e73"),F=a("3786"),D=a("24e8"),E=a("27f9"),N=a("eebe"),O=a.n(N),R=Object(p["a"])(u,i,s,!1,null,null,null);e["default"]=R.exports;O()(R,"components",{QLayout:h["a"],QHeader:q["a"],QToolbar:v["a"],QBtn:b["a"],QSeparator:f["a"],QPageContainer:g["a"],QPage:x["a"],QTooltip:w["a"],QCard:C["a"],QCardSection:_["a"],QList:y["a"],QItem:S["a"],QItemSection:k["a"],QItemLabel:Q["a"],QSpace:$["a"],QMenu:L["a"],QRadio:F["a"],QDialog:D["a"],QInput:E["a"]})}}]);