(function(t){function e(e){for(var i,r,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",height:"100"}},[a("v-avatar",{staticClass:"mr-3",attrs:{color:"grey lighten-5",size:"70"}},[a("v-img",{attrs:{contain:"","max-height":"70%",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"}})],1),a("v-toolbar-title",{staticClass:"font-weight-black headline"},[t._v(" VUETIFY ")])],1),a("v-content",[a("section",{attrs:{id:"hero"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"}},[a("v-theme-provider",{attrs:{dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[a("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" WELCOME TO ")]),a("br"),a("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" VUETIFY ")])]),a("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[a("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),a("section",{attrs:{id:"about-me"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("ABOUT ME")]),a("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v(" Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components. ")]),a("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1),a("div"),a("v-btn",{attrs:{color:"grey",href:"https://vuetifyjs.com",outlined:"",large:""}},[a("span",{staticClass:"grey--text text--darken-1 font-weight-bold"},[t._v(" Vuetify Documentation ")])])],1),a("div",{staticClass:"py-12"})],1),a("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("VUETIFY FEATURES")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.features,(function(e,i){var s=e.icon,o=e.title,r=e.text;return a("v-col",{key:i,attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[a("v-theme-provider",{attrs:{dark:""}},[a("div",[a("v-avatar",{attrs:{color:"primary",size:"88"}},[a("v-icon",{attrs:{large:""},domProps:{textContent:t._s(s)}})],1)],1)]),a("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(o)}}),a("v-card-text",{staticClass:"subtitle-1",domProps:{textContent:t._s(r)}})],1)],1)})),1)],1),a("div",{staticClass:"py-12"})],1),a("section",{attrs:{id:"stats"}},[a("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:500,src:"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"mx-auto"},t._l(t.stats,(function(e){var i=e[0],s=e[1];return a("v-col",{key:s,attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"display-3 font-weight-black mb-4",domProps:{textContent:t._s(i)}}),a("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(s)}})])])})),1)],1)],1)],1),a("section",{attrs:{id:"blog"}},[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Blog")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.articles,(function(e,i){var s=e.src,o=e.text,r=e.title;return a("v-col",{key:i,attrs:{cols:"12",md:"4"}},[a("v-img",{staticClass:"mb-4",attrs:{src:s,height:"275","max-width":"100%"}}),a("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(r)}}),a("div",{staticClass:"title font-weight-light mb-5",domProps:{textContent:t._s(o)}}),a("v-btn",{staticClass:"ml-n4 font-weight-black",attrs:{text:""}},[t._v(" Continue Reading ")])],1)})),1)],1),a("div",{staticClass:"py-12"})],1),a("v-sheet",{attrs:{id:"contact",color:"#333333",dark:"",tag:"section",tile:""}},[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contact Me")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-theme-provider",{attrs:{light:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Name*",solo:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Email*",solo:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Subject*",solo:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{flat:"",label:"Message*",solo:""}})],1),a("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"accent","x-large":""}},[t._v(" Submit ")])],1)],1)],1)],1),a("div",{staticClass:"py-12"})],1)],1),a("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[a("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — Vuetify, LLC — Made with 💜 by John Leider ")])])],1)},o=[],r={name:"App",components:{},data:function(){return{}}},n=r,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),p=a("40dc"),v=a("8212"),m=a("8336"),h=a("b0af"),f=a("99d9"),g=a("62ad"),b=a("a523"),x=a("a75b"),y=a("ce7e"),C=a("553a"),w=a("132d"),V=a("adda"),_=a("8b9c"),j=a("6b53"),k=a("0fd9"),T=a("8dd9"),O=a("8654"),q=a("a844"),M=a("480e"),P=a("2a7f"),S=Object(l["a"])(n,s,o,!1,null,null,null),E=S.exports;u()(S,{VApp:d["a"],VAppBar:p["a"],VAvatar:v["a"],VBtn:m["a"],VCard:h["a"],VCardText:f["a"],VCardTitle:f["b"],VCol:g["a"],VContainer:b["a"],VContent:x["a"],VDivider:y["a"],VFooter:C["a"],VIcon:w["a"],VImg:V["a"],VParallax:_["a"],VResponsive:j["a"],VRow:k["a"],VSheet:T["a"],VTextField:O["a"],VTextarea:q["a"],VThemeProvider:M["a"],VToolbarTitle:P["a"]});var D=a("f309");i["a"].use(D["a"]);var A=new D["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:A,render:function(t){return t(E)},data:function(){return{articles:[{src:"https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",title:"Mobile first & Responsive",text:"Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."},{src:"https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",title:"Think outside the box",text:"Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."},{src:"https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",title:"Small changes, big difference",text:"Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."}],features:[{icon:"mdi-account-group-outline",title:"Vibrant Community",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"},{icon:"mdi-update",title:"Frequent Updates",text:"Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."},{icon:"mdi-shield-outline",title:"Long-term Support",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"}],stats:[["24k","Github Stars"],["330+","Releases"],["1m","Downloads/mo"],["5m","Total Downloads"]]}}}).$mount("#app")}});
//# sourceMappingURL=app.d30d6e35.js.map