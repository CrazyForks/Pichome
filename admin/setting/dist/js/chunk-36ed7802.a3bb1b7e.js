(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36ed7802"],{5154:function(t,e,a){},"863c":function(t,e,a){"use strict";var l=a("5154"),o=a.n(l);o.a},bea2:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.buttonLoad,expression:"buttonLoad"}],staticClass:"page-content"},[a("div",{staticClass:"top-title color-border"},[t._v(" "+t._s(t.$t("lefttext5"))+" "),a("span",{staticClass:"line"}),a("span",{staticClass:"text color-color-important",staticStyle:{"margin-right":"20px"}},[t._v(t._s(t.$t("set")))]),a("span",{staticClass:"text",on:{click:t.router_mailcheck}},[t._v(t._s(t.$t("detection")))])]),a("el-scrollbar",{staticClass:"page-component__scroll"},[a("el-form",{ref:"form",staticStyle:{padding:"35px 50px"},attrs:{"label-position":t.IfIpad?"top":"rigth","label-width":"225px"}},[a("el-form-item",{attrs:{label:t.$t("administrator_email")+":"}},[a("el-input",{staticClass:"max-width",attrs:{placeholder:""},model:{value:t.formdata.adminemail,callback:function(e){t.$set(t.formdata,"adminemail",e)},expression:"formdata.adminemail"}}),a("span",{staticClass:"help-inline"},[t._v(t._s(t.$t("administrator_email_state")))])],1),a("el-form-item",{attrs:{label:t.$t("mail_way_send")+":"}},[a("el-radio",{staticStyle:{"margin-left":"0","margin-bottom":"10px"},attrs:{border:"",label:"1"},model:{value:t.formdata.mail.mailsend,callback:function(e){t.$set(t.formdata.mail,"mailsend",e)},expression:"formdata.mail.mailsend"}},[t._v(t._s(t.$t("mail_way_send1")))]),a("el-radio",{staticStyle:{"margin-left":"0","margin-bottom":"10px"},attrs:{border:"",label:"2"},model:{value:t.formdata.mail.mailsend,callback:function(e){t.$set(t.formdata.mail,"mailsend",e)},expression:"formdata.mail.mailsend"}},[t._v(t._s(t.$t("mail_way_send2")))]),a("el-radio",{staticStyle:{"margin-left":"0","margin-bottom":"10px"},attrs:{border:"",label:"3"},model:{value:t.formdata.mail.mailsend,callback:function(e){t.$set(t.formdata.mail,"mailsend",e)},expression:"formdata.mail.mailsend"}},[t._v(t._s(t.$t("mail_way_send3")))])],1),2==t.formdata.mail.mailsend?a("el-form-item",{staticStyle:{"margin-top":"-22px"},attrs:{label:""}},[a("el-table",{attrs:{data:t.formdata.mail.esmtp,border:"","max-height":"400"}},[a("el-table-column",{attrs:{prop:"delete",label:t.$t("delete"),width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"text-align":"center"}},[a("el-checkbox",{model:{value:e.row.delete,callback:function(a){t.$set(e.row,"delete",a)},expression:"scope.row.delete"}})],1)]}}],null,!1,4265454225)}),a("el-table-column",{attrs:{prop:"server",label:t.$t("mail_way_send2_server")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.server,callback:function(a){t.$set(e.row,"server",a)},expression:"scope.row.server"}})]}}],null,!1,1076692812)}),a("el-table-column",{attrs:{prop:"port",width:"150",label:t.$t("mail_way_send2_port")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.port,callback:function(a){t.$set(e.row,"port",a)},expression:"scope.row.port"}})]}}],null,!1,4017621584)}),a("el-table-column",{attrs:{type:"selection1",prop:"auth",label:t.$t("mail_way_send2_verification"),width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"text-align":"center"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.row.auth,callback:function(a){t.$set(e.row,"auth",a)},expression:"scope.row.auth"}})],1)]}}],null,!1,1268541531)}),a("el-table-column",{attrs:{prop:"from",label:t.$t("mail_way_send2_address")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.from,callback:function(a){t.$set(e.row,"from",a)},expression:"scope.row.from"}})]}}],null,!1,1179441759)}),a("el-table-column",{attrs:{prop:"auth_username",label:t.$t("mail_way_send2_username")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.auth_username,callback:function(a){t.$set(e.row,"auth_username",a)},expression:"scope.row.auth_username"}})]}}],null,!1,803466536)}),a("el-table-column",{attrs:{prop:"auth_password",label:t.$t("mail_way_send2_password")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.auth_password,callback:function(a){t.$set(e.row,"auth_password",a)},expression:"scope.row.auth_password"}})]}}],null,!1,3954408481)})],1),a("el-button",{staticClass:"table-bottom-operation",on:{click:t.AddSCOCKET}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "+t._s(t.$t("add_SMTP_server"))+" ")])],1):3==t.formdata.mail.mailsend?a("el-form-item",{staticStyle:{"margin-top":"-22px"},attrs:{label:""}},[a("el-table",{attrs:{data:t.formdata.mail.smtp,border:"","max-height":"400"}},[a("el-table-column",{attrs:{prop:"delete",label:t.$t("delete"),width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"text-align":"center"}},[a("el-checkbox",{model:{value:e.row.delete,callback:function(a){t.$set(e.row,"delete",a)},expression:"scope.row.delete"}})],1)]}}])}),a("el-table-column",{attrs:{prop:"server",label:t.$t("mail_way_send2_server")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.server,callback:function(a){t.$set(e.row,"server",a)},expression:"scope.row.server"}})]}}])}),a("el-table-column",{attrs:{prop:"port",width:"150",label:t.$t("mail_way_send2_port")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.port,callback:function(a){t.$set(e.row,"port",a)},expression:"scope.row.port"}})]}}])})],1),a("el-button",{staticClass:"table-bottom-operation",on:{click:t.AddPHP}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "+t._s(t.$t("add_SMTP_server"))+" ")])],1):t._e(),a("el-form-item",{attrs:{label:t.$t("email_header_separator")+":"}},[a("el-checkbox-group",{attrs:{max:1},model:{value:t.formdata.mail.maildelimiter,callback:function(e){t.$set(t.formdata.mail,"maildelimiter",e)},expression:"formdata.mail.maildelimiter"}},t._l(t.maildelimiterVal,(function(e){return a("el-checkbox",{key:e.val,staticStyle:{"margin-left":"0","margin-bottom":"10px"},attrs:{label:e.val,border:""}},[t._v(t._s(e.text))])})),1),a("span",{staticClass:"help-inline"},[t._v(t._s(t.$t("email_header_separator4")))])],1),a("el-form-item",{attrs:{label:t.$t("recipients_user")+":"}},[a("div",{staticClass:"max-width",staticStyle:{display:"inline-block"}},[a("el-radio",{staticStyle:{"margin-left":"0","margin-bottom":"10px"},attrs:{border:"",label:"1"},model:{value:t.formdata.mail.mailusername,callback:function(e){t.$set(t.formdata.mail,"mailusername",e)},expression:"formdata.mail.mailusername"}},[t._v(t._s(t.$t("yes")))]),a("el-radio",{staticStyle:{"margin-left":"0","margin-bottom":"10px"},attrs:{border:"",label:"0"},model:{value:t.formdata.mail.mailusername,callback:function(e){t.$set(t.formdata.mail,"mailusername",e)},expression:"formdata.mail.mailusername"}},[t._v(t._s(t.$t("no")))])],1)]),a("el-form-item",{attrs:{label:t.$t("shield_email_error")+":"}},[a("div",{staticClass:"max-width",staticStyle:{display:"inline-block"}},[a("el-radio",{staticStyle:{"margin-left":"0","margin-bottom":"10px"},attrs:{border:"",label:"1"},model:{value:t.formdata.mail.sendmail_silent,callback:function(e){t.$set(t.formdata.mail,"sendmail_silent",e)},expression:"formdata.mail.sendmail_silent"}},[t._v(t._s(t.$t("yes")))]),a("el-radio",{staticStyle:{"margin-left":"0","margin-bottom":"10px"},attrs:{border:"",label:"0"},model:{value:t.formdata.mail.sendmail_silent,callback:function(e){t.$set(t.formdata.mail,"sendmail_silent",e)},expression:"formdata.mail.sendmail_silent"}},[t._v(t._s(t.$t("no")))])],1)]),a("el-form-item",{staticStyle:{"padding-top":"15px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.SubmitDatalist}},[t._v(t._s(t.$t("save_changes")))])],1)],1)],1)],1)},o=[],r={props:["IfuserAgent","formdata","buttonLoad","maildelimiterVal"],data:function(){return{}},created:function(){},methods:{AddSCOCKET:function(){this.$emit("AddSCOCKET")},AddPHP:function(){this.$emit("AddPHP")},SubmitDatalist:function(){this.$emit("formSubmit")},router_mailcheck:function(){this.$router.push({path:"/mailcheck"})}}},i=r,s=(a("863c"),a("2877")),n=Object(s["a"])(i,l,o,!1,null,"697d8682",null);e["default"]=n.exports}}]);