(function(t){function a(a){for(var r,i,o=a[0],c=a[1],l=a[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(a);while(d.length)d.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(r=!1)}r&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},s={app:0},n=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var p=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2e7c":function(t,a,e){t.exports=e.p+"img/portret.05732583.jpg"},4758:function(t,a,e){t.exports=e.p+"img/DSCF3028.79e6cbaa.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),s=e("8c4f"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("TopBar"),e("v-content",[e("Hero"),e("AboutMe"),e("Shops"),e("Instagram")],1),e("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[e("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v("© "+t._s((new Date).getFullYear())+" — Wasyl Destroyer for SurpriseMe.pl with ♥")])])],1)},i=[],o=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-app-bar",{attrs:{dense:"","collapse-on-scroll":!0,app:"",color:"white",height:"100"}},[r("v-img",{attrs:{contain:"","max-height":"100%",src:e("d7dd")}})],1)},c=[],l={name:"TopBar"},p=l,u=e("2877"),d=e("6544"),m=e.n(d),v=e("40dc"),f=e("adda"),w=Object(u["a"])(p,o,c,!1,null,null,null),h=w.exports;m()(w,{VAppBar:v["a"],VImg:f["a"]});var g=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("section",{attrs:{id:"hero"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:e("4758")}},[r("v-theme-provider",{attrs:{dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"space-around"}},[r("v-col",[r("v-row",{attrs:{align:"center",justify:"space-around"}},[r("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[r("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v("Cześć")]),r("br"),r("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v("SurpriseMe")])]),r("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(a){return t.$vuetify.goTo("#about-me")}}},[r("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1),r("v-col")],1)],1)],1)],1)],1)],1)},b=[],y={name:"Hero"},z=y,x=e("8336"),C=e("62ad"),j=e("a523"),k=e("132d"),_=e("0fd9"),V=e("480e"),O=Object(u["a"])(z,g,b,!1,null,null,null),M=O.exports;m()(O,{VBtn:x["a"],VCol:C["a"],VContainer:j["a"],VIcon:k["a"],VImg:f["a"],VRow:_["a"],VThemeProvider:V["a"]});var S=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("section",{attrs:{id:"Shops"}},[r("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?1400:500,src:e("e1e6")}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{staticClass:"mx-auto"},t._l(t.shops,(function(t,a){return r("v-col",{key:a,attrs:{cols:"12",md:"3"}},[r("div",{staticClass:"text-center"},[r("a",{attrs:{href:t.link}},[r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"256"}},[r("v-img",{attrs:{size:"256",src:t.icon}})],1)],1)])])})),1)],1)],1)],1)},E=[],$={name:"Shops",data:function(){return{shops:[{icon:e("9624"),link:"https://artillo.pl/sklep/surpriseME.html"},{icon:e("6f7d"),link:"https://art-madam.pl/opinie/surprise-ME"},{icon:e("ea54"),link:"https://www.decobazaar.com/surprise-me"},{icon:e("654c"),link:"https://www.pakamera.pl"}]}}},A=$,I=e("8212"),T=e("8b9c"),B=Object(u["a"])(A,S,E,!1,null,null,null),D=B.exports;m()(B,{VAvatar:I["a"],VCol:C["a"],VContainer:j["a"],VImg:f["a"],VParallax:T["a"],VRow:_["a"]});var P=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("section",{attrs:{id:"about-me"}},[r("div",{staticClass:"py-12"}),r("v-container",{staticClass:"text-center"},[r("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Kim jestem?")]),r("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[r("v-divider",{staticClass:"mb-1"}),r("v-divider")],1),r("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v("Surprise ME to ja Martyna. Miło Cie poznać! Właśnie zaczynasz podróż do mojego skrawka Internetu. Miejsca, gdzie każda rzecz została stworzona własnoręcznie, a ceny odzwierciedlają czas pracy spędzony podczas nadawaniu jej kształtu. Tworząc markę postanowiłam zwracać szczególną uwagę właśnie na czas. Zanim zaczęłam szyć nie zdawałam sobie sprawy, ile pracy należy włożyć w wykonanie jednej rzeczy, która wisi u mnie w szafie. Właśnie z tego powodu, postanowiłam nie tylko sprzedawać wspaniałe rzeczy, ale i szczyptę wiedzy o procesie produkcji w moim domu. Nazwa każdego produktu to ilość godzin spędzonych podczas przygotowywania go dla Ciebie. Surprise ME to ubrania i akcesoria na miarę naszych czasów. Każde zaprojektowane tak, by dobrze wyglądało w różnych sytuacjach. To kanapowe ubrania, w których można wyjść na jogę czy skoczyć w góry. Surprise ME powstało z zamiłowania do etycznej mody, leżenia na kanapie i pracy własnych rąk.")]),r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[r("v-img",{attrs:{src:e("2e7c")}})],1),r("div"),r("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Bądź ze mną na bierząco")]),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("a",{attrs:{href:"https://www.facebook.com/surprisemeatelier/"}},[r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"300"}},[r("v-img",{attrs:{src:e("5e4f")}})],1)],1)]),r("v-col",[r("a",{attrs:{href:"https://www.instagram.com/surprisemeatelier/"}},[r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"300"}},[r("v-img",{attrs:{src:e("ce4a")}})],1)],1)])],1),r("div",{staticClass:"py-12"}),r("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Zamówienia możesz składać na")])],1)],1)},R=[],F={name:"AboutMe"},H=F,W=e("ce7e"),J=e("6b53"),K=Object(u["a"])(H,P,R,!1,null,null,null),Y=K.exports;m()(K,{VAvatar:I["a"],VCol:C["a"],VContainer:j["a"],VDivider:W["a"],VImg:f["a"],VResponsive:J["a"],VRow:_["a"]});var Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"blog"}},[e("div",{staticClass:"py-12"}),e("v-container",[e("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Instagram")]),e("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[e("v-divider",{staticClass:"mb-1"}),e("v-divider")],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{"d-flex":"",xs12:"",sm4:"","child-flex":""}},[e("instagram-embed",{attrs:{url:"https://www.instagram.com/p/B-Ez7pClcs1/","max-width":500}})],1),e("v-flex",{attrs:{"d-flex":"",xs12:"",sm4:"","child-flex":""}},[e("instagram-embed",{attrs:{url:"https://www.instagram.com/p/B_fCb2ODt9Y/","max-width":500}})],1),e("v-flex",{attrs:{"d-flex":"",xs12:"",sm4:"","child-flex":""}},[e("instagram-embed",{attrs:{url:"https://www.instagram.com/p/B-Ez7pClcs1/","max-width":500}})],1)],1)],1),e("div",{staticClass:"py-12"})],1)},L=[],N=e("e395"),q=e.n(N),G={name:"Instagram",components:{InstagramEmbed:q.a}},Q=G,U=e("0e8f"),X=e("a722"),tt=Object(u["a"])(Q,Z,L,!1,null,null,null),at=tt.exports;m()(tt,{VContainer:j["a"],VDivider:W["a"],VFlex:U["a"],VLayout:X["a"],VResponsive:J["a"]});var et={name:"App",components:{TopBar:h,Hero:M,Shops:D,AboutMe:Y,Instagram:at}},rt=et,st=e("7496"),nt=e("a75b"),it=e("553a"),ot=Object(u["a"])(rt,n,i,!1,null,null,null),ct=ot.exports;m()(ot,{VApp:st["a"],VContent:nt["a"],VFooter:it["a"]});var lt=e("f309");r["a"].use(lt["a"]);var pt=new lt["a"]({});r["a"].config.productionTip=!1;var ut=new s["a"]({base:"/surpriseme/",mode:"history"});new r["a"]({router:ut,vuetify:pt,render:function(t){return t(ct)}}).$mount("#app")},"5e4f":function(t,a,e){t.exports=e.p+"img/facebook.a2ffc803.png"},"654c":function(t,a,e){t.exports=e.p+"img/pakamera.4cc432b5.jpg"},"6f7d":function(t,a,e){t.exports=e.p+"img/art-madam.39e5a00e.jpg"},9624:function(t,a,e){t.exports=e.p+"img/artillo.07b072e6.jpg"},ce4a:function(t,a,e){t.exports=e.p+"img/insta.735dda68.png"},d7dd:function(t,a,e){t.exports=e.p+"img/surpriseme_color_bn.43acad6b.png"},e1e6:function(t,a,e){t.exports=e.p+"img/shop_bg.8d8054bc.jpg"},ea54:function(t,a,e){t.exports=e.p+"img/decobazaar.b3b61bda.jpg"}});
//# sourceMappingURL=app.8fac4b76.js.map