(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1843:function(e,t,s){"use strict";s.r(t);var a=s(3951),n=s(2687);for(var r in n)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(r);var i=s(0),o=s(3697),l=s.n(o),u=Object(i.a)(n.default,a.a,a.b,!1,null,null,null);"function"==typeof l.a&&l()(u),t.default=u.exports},1999:function(e,t,s){"use strict";s(7),s(10),s(6),s(8),s(11);var a=s(1);Object.defineProperty(t,"__esModule",{value:!0}),t.markRead=t.saveSystemOptions=t.getSystemOptions=t.getClearOptions=t.clearSystem=t.deleteMessages=t.getMessage=t.postReply=t.getTicket=t.getTickets=t.getMessages=void 0,s(5);var n=a(s(2)),r=a(s(78)),i=a(s(711));function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){(0,n.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u="/CMD_TICKET",c=r.default.get({id:"MESSAGES",url:u,params:{type:"message"},pagination:!0,schema:{sort:l(l({},r.default.SORT),{},{default:[{key:3,order:"DESC"}]})},after:function(e){return e.flow(e.project({rows:"messages"}),e.processTableInfo("rows"),e.mapProp("rows",e.flow(e.mapArray(e.moveProp("message","id")),e.mapArrayProps({new:e.convert.toAppBoolean,last_message:e.convert.toAppDate,subject:e.convert.toAppHtml}))))}});t.getMessages=c;var d=r.default.get({id:"TICKETS",url:u,params:{type:"ticket"},pagination:!0,schema:{sort:r.default.SORT,show_closed:{type:Boolean,required:!1,default:!0}},after:function(e){return e.flow(e.getProp("tickets"),e.toTable(e.mapArrayProps({subject:e.convert.toAppString,last_message:e.convert.toAppDate,new:e.convert.toAppBoolean})))}});t.getTickets=d;var f=r.default.get({id:"TICKET",url:u,response:[],params:{action:"view",type:"ticket"},schema:{number:r.default.REQUIRED_STRING},after:function(e){return e.flow(e.deleteProp("info"),e.toArray,(function(e){return e.reverse()}),e.mapArrayProps({message:e.convert.toAppHtml,time:function(t){return(0,i.default)(Date.now(),e.convert.toAppDate(t))}}))}});t.getTicket=f;var p=r.default.post({url:u,params:{action:"reply",type:"reply",user:"creator",subject:"none",priority:"0"},schema:{message:r.default.REQUIRED_STRING,number:r.default.REQUIRED_STRING}});t.postReply=p;var m=r.default.get({id:"MESSAGE",url:u,params:{action:"view",type:"message"},schema:{number:r.default.REQUIRED_STRING},after:function(e){return e.flow(e.getProp("0"),e.moveProp("message","content"),e.mapProps({priority:e.convert.toAppNumber,content:e.convert.toAppHtml,time:e.convert.toAppDate}))}});t.getMessage=m;var g=r.default.select({url:u,params:{action:"multiple",delete:!0,type:"message"}});t.deleteMessages=g;var v=r.default.post({url:u,params:{action:"clear"},schema:{subject:r.default.REQUIRED_STRING,when:r.default.REQUIRED_STRING,delete_messages_days:r.default.OPTIONAL_STRING}});t.clearSystem=v;var b=r.default.get({id:"CLEAR_MESSAGES_OPTIONS",url:u,after:function(e){return e.flow(e.project({subjects:"clear_messages.SUBJECT_SELECT",periods:"clear_messages.WHEN_SELECT"}),e.mapProps({subjects:e.flow(e.toArray,e.mapArray(e.getProp("text")),e.filter(e.flow(e.isEqual("-- anything --"),e.not))),periods:e.transformObject((function(e){var t=e.text,s=e.value;return(0,n.default)({},s,t)}))}))}});t.getClearOptions=b;var _=r.default.get({id:"MESSAGES_SYSTEM_OPTIONS",url:u,after:function(e){return e.flow(e.getProp("settings"),e.project({"days.messages":"DELETE_MESSAGES_DAYS","days.tickets":"DELETE_TICKETS_DAYS",email:"EMAIL",send:"EMAILCHECKED"}),e.mapProp("send",e.isEqual("checked")))}});t.getSystemOptions=_;var h=r.default.post({url:u,params:{action:"email",save:!0},schema:{email:r.default.REQUIRED_STRING,ON:r.default.REQUIRED_BOOL,delete_tickets_days:r.default.REQUIRED_STRING,delete_messages_days:r.default.REQUIRED_STRING},notifySuccess:!1});t.saveSystemOptions=h;var y=r.default.select({url:u,params:{action:"multiple",read:!0,type:"message"}});t.markRead=y},2687:function(e,t,s){"use strict";s.r(t);var a=s(2688),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=n.a},2688:function(e,t,s){"use strict";s(7),s(10),s(5),s(6),s(8),s(11),s(16),s(14),s(23),s(25),s(18);var a=s(1),n=s(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(s(36)),i=a(s(37)),o=a(s(2)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var s=m(t);if(s&&s.has(e))return s.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,s&&s.set(e,a);return a}(s(1999)),u=s(12),c=a(s(3688)),d=a(s(3689)),f=a(s(3690)),p=a(s(3693));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(m=function(e){return e?s:t})(e)}function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function v(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(Object(s),!0).forEach((function(t){(0,o.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var b,_,h,y={components:{TicketsTable:a(s(3696)).default,ViewMessageDialog:c.default,ClearMessageSystemDialog:d.default,MessageSystemOptionsDialog:f.default,ViewTicketDialog:p.default},preload:[l.getMessages,l.getTickets,l.getClearOptions],commands:l,data:function(){return{select:[]}},computed:v(v({},(0,u.mapTokens)({newMessages:"NEWMESSAGES"})),{},{tab:{get:function(){return"/user/messages"===this.$route.path?"messages":"tickets"},set:function(e){this.$route.path!=="/user/".concat(e)&&this.$router.push({path:"messages"===e?"/user/messages":"/user/tickets",query:this.$route.query})}},page:function(){return this.$route.query.page||"1"},ipp:function(){return this.$route.query.ipp||"20"}}),watch:{newMessages:function(){this.$refs.table&&this.$refs.table.reloadTable()}},created:function(){this.$route.query.id&&this.openMessageDialog(this.$route.query.id),this.$route.query.ticket&&(this.tab="tickets")},methods:{openMessageDialog:(h=(0,i.default)(r.default.mark((function e(t){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getMessage({number:t});case 2:e.sent?(this.$dialog("VIEW_MESSAGE_DIALOG").open(),this.$store.dispatch("app/GET_TOKENS")):this.$notifications.error({title:this.$gettext("Cannot execute your request"),content:this.$gettext("Message #".concat(t," is not appears in your message system"))});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)}),deleteMessages:(_=(0,i.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.deleteMessages(this.$get("select"));case 2:this.$reset(),this.$store.dispatch("app/GET_TOKENS"),this.$refs.table.reloadTable();case 5:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)}),markAsRead:function(){l.markRead({select:this.select}).then(this.$reset).then(this.$reloadApiTable)},openOptionsDialog:(b=(0,i.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getSystemOptions();case 2:this.$dialog("MESSAGE_SYSTEM_OPTIONS_DIALOG").open();case 3:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})}};t.default=y},2689:function(e,t,s){"use strict";s.r(t);var a=s(2690),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=n.a},2690:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={api:[{command:s(1999).getMessage,bind:{"response.content":"content","response.time":"time","response.subject":"subject"}}]};t.default=a},2691:function(e,t,s){"use strict";s.r(t);var a=s(2692),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=n.a},2692:function(e,t,s){"use strict";var a=s(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(s(36)),i=a(s(37)),o=s(1999),l={data:function(){return{subject:"",when:"all",days:"1",deleteEverything:!1}},api:[{command:o.getClearOptions,bind:"options"}],computed:{subjects:function(){return this.$api.options.subjects},periods:function(){return this.$api.options.periods}},methods:{clearMessageSystem:(n=(0,i.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.clearSystem)({delete_messages_days:this.days,subject:this.deleteEverything?"":this.subject,subject_select:this.deleteEverything?"2":null,when:this.when});case 2:this.$store.dispatch("app/GET_TOKENS"),this.$emit("updateMessages");case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},watch:{when:function(e){"all"!==e||this.days||(this.days="1")}}};t.default=l},2693:function(e,t,s){"use strict";s.r(t);var a=s(2694),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=n.a},2694:function(e,t,s){"use strict";var a=s(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(s(36)),i=a(s(37)),o=s(1999),l={data:function(){return{send:!1,email:"",days:{tickets:"0",messages:"0"},deleteTickets:!1,deleteMessages:!1}},api:[{command:o.getSystemOptions,bind:"options"}],created:function(){this.initData()},methods:{save:(n=(0,i.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.saveSystemOptions)({delete_messages_days:this.deleteMessages?this.days.messages:"0",delete_tickets_days:this.deleteTickets?this.days.tickets:"0",ON:this.send,email:this.email});case 2:e.sent.success&&this.$notifications.success({title:"Options saved successfully"});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),initData:function(){this.$_initData(this.$api.options),this.deleteTickets="0"!==this.days.tickets,this.deleteMessages="0"!==this.days.messages}}};t.default=l},2695:function(e,t,s){"use strict";s.r(t);var a=s(2696),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=n.a},2696:function(e,t,s){"use strict";var a=s(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(s(36)),i=a(s(37)),o=s(1999),l={api:[{command:o.getTicket,bind:"messages"}],filters:{firstLetter:function(e){return e[0].toUpperCase()}},data:function(){return{message:""}},computed:{number:function(){return this.$state.commands.TICKET.params.number||""},messages:function(){return this.$api.messages}},methods:{postReply:(n=(0,i.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.postReply)(this.$get(["number","message"]));case 2:this.$reset(),(0,o.getTicket)(this.$get("number"));case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})}};t.default=l},2697:function(e,t,s){"use strict";s.r(t);var a=s(2698),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=n.a},2698:function(e,t,s){"use strict";var a=s(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(s(36)),r=a(s(37));s(17);var i,o=s(1999),l={data:function(){return{showClosed:!0}},computed:(0,s(12).mapTokens)({newTickets:"NEWTICKETS"}),commands:{getTickets:o.getTickets},watch:{newTickets:function(e,t){Number(e)>Number(t)&&this.$refs.table.reloadTable()}},created:function(){this.$route.query.ticket&&this.openTicket(this.$route.query.ticket)},methods:{openTicket:(i=(0,r.default)(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getTicket)({number:t});case 2:this.$dialog("VIEW_TICKET_DIALOG").open(),this.$store.dispatch("app/GET_TOKENS"),this.$reloadApiTable();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})}};t.default=l},3112:function(e,t,s){var a=s(3692);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(4).default)("1a5f4f85",a,!0,{})},3113:function(e,t,s){var a=s(3695);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(4).default)("50379c25",a,!0,{})},3688:function(e,t,s){"use strict";s.r(t);var a=s(4090),n=s(2689);for(var r in n)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(r);var i=s(0),o=Object(i.a)(n.default,a.a,a.b,!1,null,null,null);t.default=o.exports},3689:function(e,t,s){"use strict";s.r(t);var a=s(4091),n=s(2691);for(var r in n)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(r);var i=s(0),o=Object(i.a)(n.default,a.a,a.b,!1,null,null,null);t.default=o.exports},3690:function(e,t,s){"use strict";s.r(t);var a=s(4092),n=s(2693);for(var r in n)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(r);s(3691);var i=s(0),o=Object(i.a)(n.default,a.a,a.b,!1,null,null,null);t.default=o.exports},3691:function(e,t,s){"use strict";s(3112)},3692:function(e,t,s){},3693:function(e,t,s){"use strict";s.r(t);var a=s(4093),n=s(2695);for(var r in n)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(r);s(3694);var i=s(0),o=Object(i.a)(n.default,a.a,a.b,!1,null,null,null);t.default=o.exports},3694:function(e,t,s){"use strict";s(3113)},3695:function(e,t,s){},3696:function(e,t,s){"use strict";s.r(t);var a=s(4094),n=s(2697);for(var r in n)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(r);var i=s(0),o=Object(i.a)(n.default,a.a,a.b,!1,null,null,null);t.default=o.exports},3697:function(e,t){},3951:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-page",[s("app-page-section",[s("ui-tabs",{attrs:{tabs:[{id:"messages",label:e.$gettext("Messages")},"1"===e.$state.app.tokens.TICKET_SYSTEM_ENABLED?{id:"tickets",label:e.$gettext("Tickets")}:{}],"hide-single-tab":"",selected:e.tab,"force-horizontal":""},on:{"update:selected":function(t){e.tab=t}}},[s("ui-api-table",e._b({ref:"table",attrs:{slot:"tab:messages"},on:{"action:del":function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()},"action:read":e.markAsRead},slot:"tab:messages",scopedSlots:e._u([{key:"col:subject",fn:function(t){var a=t.id,n=t.new,r=t.subject;return s("ui-link",{on:{click:function(t){return e.openMessageDialog(a)}}},[n?s("div",[s("ui-round-badge",{attrs:{theme:"safe",size:6}}),e._v(" "),s("strong",{domProps:{innerHTML:e._s(r)}})],1):s("span",{domProps:{innerHTML:e._s(r)}})])}}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{command:e.$commands.getMessages,rowID:"id",columns:{subject:{label:e.$gettext("Subject"),grow:!0},last_message:{label:e.$gettext("Date"),filter:"date"}},actions:{read:e.$gettext("Mark as read"),del:e.$gettext("Delete")},updateOn:["DELETE_MESSAGES","CLEAR_MESSAGE_SYSTEM","GET_MESSAGE","MARK_MESSAGES_AS_READ"],initialSort:{key:"last_message",order:"DESC"},verticalLayout:e.$_Client.isPhone},!1)),e._v(" "),s("tickets-table",{attrs:{slot:"tab:tickets"},slot:"tab:tickets"})],1)],1),e._v(" "),s("ui-link",{attrs:{slot:"bottom:links",bullet:""},on:{click:function(t){e.$dialog("CLEAR_MESSAGE_SYSTEM_DIALOG").open()}},slot:"bottom:links"},[s("translate",[e._v("Clear Message System")])],1),e._v(" "),s("ui-link",{attrs:{slot:"bottom:links",bullet:""},on:{click:e.openOptionsDialog},slot:"bottom:links"},[s("translate",[e._v("Options")])],1),e._v(" "),"root"!==e.$state.app.tokens.USERCREATOR&&"1"===e.$state.app.tokens.TICKET_SYSTEM_ENABLED?s("ui-link",{attrs:{slot:"bottom:links",name:"user/create-ticket",bullet:""},slot:"bottom:links"},[s("translate",[e._v("Create Ticket")])],1):e._e(),e._v(" "),s("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("message","messages",e.select.length)},on:{"click:confirm":e.deleteMessages}}),e._v(" "),s("view-message-dialog"),e._v(" "),e.$state.commands.TICKET.isDone?s("view-ticket-dialog"):e._e(),e._v(" "),s("clear-message-system-dialog",{on:{updateMessages:this.$reloadApiTable}}),e._v(" "),s("message-system-options-dialog")],1)},n=[]},4090:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"VIEW_MESSAGE_DIALOG",size:"normal","no-close-btn":e.$api.isLoading},on:{"dialog:close":function(t){return e.$emit("close")}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Message\n    ")]),e._v(" "),e.$api.isLoading?e._e():s("header",{directives:[{name:"flex",rawName:"v-flex",value:{main:"between",cross:"baseline",wrap:!0},expression:"{\n            main: 'between',\n            cross:'baseline',\n            wrap: true\n        }"},{name:"gutter",rawName:"v-gutter",value:[1,2],expression:"[1, 2]"}],attrs:{slot:"content:header"},slot:"content:header"},[s("h2",{directives:[{name:"margin",rawName:"v-margin",value:0,expression:"0"}],staticClass:"overfl:hid toverfl:ellipsis",domProps:{textContent:e._s(e.$api.subject)}}),e._v(" "),s("time",[e._v(e._s(e._f("date")(e.$api.time)))])]),e._v(" "),s("ui-code-area",{attrs:{slot:"content",content:e.$api.content,"break-lines":""},slot:"content"})],1)},n=[]},4091:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"CLEAR_MESSAGE_SYSTEM_DIALOG",size:"normal"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Clear Message System")]),e._v(" "),s("template",{slot:"content"},[s("ui-form-element",{attrs:{group:"clearMessages"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Subject Contains")]),e._v(" "),s("input-autocomplete",{attrs:{slot:"content",values:e.subjects,disabled:e.deleteEverything},slot:"content",model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}},[s("input-checkbox-button",{attrs:{slot:"additions:right"},slot:"additions:right",model:{value:e.deleteEverything,callback:function(t){e.deleteEverything=t},expression:"deleteEverything"}},[s("translate",[e._v("Anything")])],1)],1),e._v(" "),s("translate",{attrs:{slot:"error:validateSubject"},slot:"error:validateSubject"},[e._v("\n                Required field\n            ")])],1),e._v(" "),s("ui-form-element",{attrs:{group:"clearMessages"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("When")]),e._v(" "),"all"===e.when?s("input-select",{attrs:{slot:"content",options:e.periods,disabled:e.deleteEverything,novalidate:""},slot:"content",model:{value:e.when,callback:function(t){e.when=t},expression:"when"}}):s("ui-input-group",{attrs:{slot:"content"},slot:"content"},[s("input-select",{attrs:{slot:"additions:left",options:e.periods},slot:"additions:left",model:{value:e.when,callback:function(t){e.when=t},expression:"when"}}),e._v(" "),s("input-text",{attrs:{slot:"input",number:""},slot:"input",model:{value:e.days,callback:function(t){e.days=t},expression:"days"}}),e._v(" "),s("ui-button",{attrs:{slot:"additions:right",disabled:""},slot:"additions:right"},[s("translate",{attrs:{"translate-n":Number(e.days)||1,"translate-plural":"Days"}},[e._v("\n                        Day\n                    ")])],1)],1)],1)],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"danger",disabled:!(e.deleteEverything||e.subject)||!e.days},on:{click:e.clearMessageSystem},slot:"buttons"},[s("translate",[e._v("Clear")])],1)],2)},n=[]},4092:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"MESSAGE_SYSTEM_OPTIONS_DIALOG"},on:{"dialog:open":e.initData}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Options\n    ")]),e._v(" "),s("template",{slot:"content"},[s("ui-form-element",{attrs:{vertical:"",group:"messageOptions",validators:{required:e.send}}},[s("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.send,callback:function(t){e.send=t},expression:"send"}},[s("translate",[e._v("E-mail a copy of all messages")])],1),e._v(" "),s("input-text",{attrs:{slot:"content",disabled:!e.send},slot:"content",model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),s("translate",{attrs:{slot:"error:regex"},slot:"error:regex"},[e._v("\n                Should be valid email\n            ")])],1),e._v(" "),s("ui-form-element",{attrs:{vertical:"",group:"messageOptions",validators:{required:!0}}},[s("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.deleteTickets,callback:function(t){e.deleteTickets=t},expression:"deleteTickets"}},[s("translate",[e._v("Automatically delete tickets")])],1),e._v(" "),e.deleteTickets?s("input-text",{attrs:{slot:"content",number:""},slot:"content",model:{value:e.days.tickets,callback:function(t){e.$set(e.days,"tickets",t)},expression:"days.tickets"}},[s("ui-button",{attrs:{slot:"additions:left",disabled:""},slot:"additions:left"},[s("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        Older than\n                    ")])],1),e._v(" "),s("ui-button",{attrs:{slot:"additions:right",disabled:""},slot:"additions:right"},[s("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        Days\n                    ")])],1)],1):e._e()],1),e._v(" "),s("ui-form-element",{attrs:{group:"messageOptions",vertical:"",validators:{required:!0}}},[s("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.deleteMessages,callback:function(t){e.deleteMessages=t},expression:"deleteMessages"}},[s("translate",[e._v("Automatically delete messages")])],1),e._v(" "),e.deleteMessages?s("input-text",{attrs:{slot:"content",number:""},slot:"content",model:{value:e.days.messages,callback:function(t){e.$set(e.days,"messages",t)},expression:"days.messages"}},[s("ui-button",{attrs:{slot:"additions:left",disabled:""},slot:"additions:left"},[s("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        Older than\n                    ")])],1),e._v(" "),s("ui-button",{attrs:{slot:"additions:right",disabled:""},slot:"additions:right"},[s("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        days\n                    ")])],1)],1):e._e()],1)],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons","validate-group":"messageOptions",theme:"primary"},on:{click:e.save},slot:"buttons"},[s("translate",[e._v("Save")])],1)],2)},n=[]},4093:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"VIEW_TICKET_DIALOG",size:"normal","no-close-btn":""}},[s("translate",{attrs:{slot:"title","translate-params":{number:e.number}},slot:"title"},[e._v("\n        View Ticket: #%{ number }\n    ")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("ui-form-element",{staticClass:"pos:rel",attrs:{vertical:"",validators:{required:!0},group:"ticketReply"}},[s("input-textarea",{attrs:{slot:"content",rows:"5",placeholder:e.$gettext("Type your reply here...")},slot:"content",model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),s("ui-button",{staticClass:"replyButton",attrs:{slot:"content",theme:"safe",size:"normal","validate-group":"ticketReply"},on:{click:e.postReply},slot:"content"},[s("translate",[e._v("Post Reply")])],1)],1),e._v(" "),s("ui-table",{attrs:{items:e.messages,"hide-headers":""}},[s("ui-column",{attrs:{id:"avatar",fit:""},scopedSlots:e._u([{key:"default",fn:function(t){return[s("ui-round-badge",{staticClass:"messageAvatar",attrs:{theme:e.$state.app.user.name===t.from?"safe":"primary",size:48}},[e._v("\n                        "+e._s(e._f("firstLetter")(t.from))+"\n                    ")])]}}])}),e._v(" "),s("ui-column",{attrs:{id:"message"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("ui-grid",{attrs:{slot:"col:message",column:""},slot:"col:message"},[s("ui-grid",{attrs:{cross:"center"}},[s("span",{staticClass:"userName"},[e._v("\n                                "+e._s({admin:e.$gettext("Admin"),reseller:e.$gettext("Reseller"),user:e.$gettext("User")}[t.level])+":\n                                "+e._s(t.name)+"\n                            ")]),e._v(" "),s("span",{staticClass:"c:txt:neutral"},[e._v("\n                                ("+e._s(t.time)+")\n                            ")])]),e._v(" "),s("p",{domProps:{innerHTML:e._s(t.message)}})],1)]}}])})],1)],1)],1)},n=[]},4094:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-api-table",e._b({ref:"table",attrs:{"disable-select":""},scopedSlots:e._u([{key:"col:subject",fn:function(t){var a=t.new,n=t.priority,r=t.subject,i=t.ticket;return s("ui-link",{class:{"txt:bold":a},on:{click:function(t){return e.openTicket(i)}}},[s("ui-round-badge",{attrs:{theme:{0:"safe",10:"safe",20:"primary",30:"danger"}[n],size:12}}),e._v("\n        "+e._s(r)+"\n    ")],1)}},{key:"col:status",fn:function(t){var a=t.status;return s("ui-badge",{attrs:{theme:{open:"safe",closed:"neutral"}[a]}},[e._v("\n        "+e._s(e._f("capitalize")(a))+"\n    ")])}}])},"ui-api-table",{command:e.$commands.getTickets,rowID:"ticket",columns:{ticket:e.$gettext("Ticket #"),subject:e.$gettext("Subject"),replies:e.$gettext("Replies"),status:e.$gettext("Status"),last_message:{label:e.$gettext("Last Message"),filter:"date"}},verticalLayout:e.$_Client.isPhone,requestData:{show_closed:e.showClosed}},!1),[s("input-checkbox",{attrs:{slot:"buttons:before"},slot:"buttons:before",model:{value:e.showClosed,callback:function(t){e.showClosed=t},expression:"showClosed"}},[s("translate",[e._v("Show closed")])],1)],1)},n=[]}}]);