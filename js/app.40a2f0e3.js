(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],h=0,p=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},r={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Vinicio_Samayoa/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var v=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:t.toolbarColor,"elevate-on-scroll":"",light:"lime darken-1"==t.toolbarColor}},[this.$vuetify.theme.dark?t._e():a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("kbd",[t._v(t._s(t.shortName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e(),this.globalWidth>=470?a("kbd",[t._v(t._s(t.myName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e()]),this.$vuetify.theme.dark?a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("code",[t._v(t._s(t.shortName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e(),this.globalWidth>=470?a("code",[t._v(t._s(t.myName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e()]):t._e(),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("div",[a("v-btn",{attrs:{text:"",to:"Inicio",link:""}},[t._v("\n        Inicio\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Acerca",link:""}},[t._v("\n        Acerca de mi\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Proyectos",link:""}},[t._v("\n        Proyectos\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Contacto",link:""}},[t._v("\n        Contacto\n      ")])],1):t._e(),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{icon:""},on:{click:t.themeSwap}},[a("v-icon",[t._v(t._s(this.iconString))])],1),t.$vuetify.breakpoint.smAndDown?a("v-menu",{attrs:{left:"",bottom:"",transition:"scale-transition",origin:"top right"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[a("v-list",{attrs:{color:this.$accentColor,light:""}},[a("v-list-item",{attrs:{link:"",to:"Inicio"}},[a("v-list-item-title",[t._v("Inicio")])],1),a("v-list-item",{attrs:{to:"Acerca",link:""}},[a("v-list-item-title",[t._v("Acerca de mi")])],1),a("v-list-item",{attrs:{to:"Proyectos",link:""}},[a("v-list-item-title",[t._v("Proyectos")])],1),a("v-list-item",{attrs:{to:"Contacto",link:""}},[a("v-list-item-title",[t._v("Contacto")])],1)],1)],1):t._e()],1),a("v-content",{staticClass:"pa-0 ma-0"},[a("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("transition",{attrs:{name:"scroll-x-transition",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},n=[],o={name:"App",data:function(){return{globalWidth:window.innerWidth,myName:"Vinicio Samayoa",shortName:"V.S.",toolbarColor:"transparent",isDark:!0,iconString:""}},methods:{onScroll:function(){window.scrollY>20?this.isDark?this.toolbarColor="dark":this.toolbarColor="white":this.toolbarColor="transparent"},themeSwap:function(){this.isDark=!this.isDark,this.isDark?(this.iconString="mdi-brightness-7",window.scrollY>20?this.toolbarColor="dark":this.toolbarColor="transparent"):(this.iconString="mdi-brightness-6",window.scrollY>20?this.toolbarColor="white":this.toolbarColor="transparent"),this.$vuetify.theme.dark=this.isDark}},mounted:function(){var t=this;this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6",window.onresize=function(){t.globalWidth=window.innerWidth}},beforeCreate:function(){this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6"}},s=o,l=(a("e14f"),a("2877")),c=a("6544"),v=a.n(c),h=a("7496"),p=a("40dc"),d=a("8336"),u=a("a523"),f=a("a75b"),m=a("132d"),b=a("8860"),g=a("da13"),y=a("5d23"),_=a("e449"),C=a("2fa4"),k=a("2a7f"),w=a("269a"),V=a.n(w),S=a("f977"),x=Object(l["a"])(s,r,n,!1,null,"3acb3992",null),$=x.exports;v()(x,{VApp:h["a"],VAppBar:p["a"],VBtn:d["a"],VContainer:u["a"],VContent:f["a"],VIcon:m["a"],VList:b["a"],VListItem:g["a"],VListItemTitle:y["a"],VMenu:_["a"],VSpacer:C["a"],VToolbarTitle:k["a"]}),V()(x,{Scroll:S["b"]});var A=a("f309");i["a"].use(A["a"]);var j=new A["a"]({}),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-img",{attrs:{"lazy-src":a("de2b"),src:a("de2b"),gradient:t.$vuetify.theme.dark?"to top, rgba(30, 30, 30, 0.75), rgba(30, 30, 30, 0.75)":"to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)",position:"center center",transition:"fade-transition",height:t.$vuetify.breakpoint.smAndUp?"70vh":"100vh"}},[i("v-container",{class:[t.$vuetify.breakpoint.smAndUp?"px-12 fill-height":"fill-height"],attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("h1",{class:[t.$vuetify.breakpoint.smAndUp?"text-uppercase font-weight-bold mb-4 display-3 text--color-black":"text-uppercase font-weight-bold mb-4 display-1"]},[t._v("Hola, soy Vinicio Samayoa")]),i("div",{class:[t.$vuetify.breakpoint.smAndUp?"mb-4 display-2 font-weight-light":"mb-4 headline"]},[t._v("Soy desarrollador de software")]),i("v-responsive",{staticClass:"mb5",attrs:{"max-width":"600"}},[t._v("\n              Vivir el momento y disfrutar es mejor que guardarlo en un dispositivo móvil y alimentar tu apariencia social.\n            ")]),i("br"),i("v-btn",{attrs:{color:this.$accentColor,light:"",to:"Contacto",link:""}},[t._v("Contratar")])],1)],1)],1)],1),i("v-row",{staticClass:"pt-10 ma-0"}),i("v-sheet",{attrs:{"min-height":t.$vuetify.breakpoint.smAndUp?"200px":"100px",height:"5vh"}},[i("v-container",{staticClass:"fill-height"},[i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("h1",{class:[t.$vuetify.breakpoint.smAndUp?"display-1 text-center":"headline text-center"]},[t._v("Mejores proyectos")])])],1)],1)],1),i("v-row",{staticClass:"pa-0 ma-0"},[i("v-tabs",{attrs:{centered:"",color:this.$accentColor}},[i("v-tab",[t._v("Web")]),i("v-tab",[t._v("Escritorio")]),i("v-tab",[t._v("Híbrido")])],1)],1)],1)},P=[],D={name:"Start",data:function(){return{}}},I=D,W=a("62ad"),T=a("adda"),M=a("6b53"),N=a("0fd9"),U=a("8dd9"),E=a("71a3"),R=a("fe57"),B=Object(l["a"])(I,O,P,!1,null,"1af77349",null),L=B.exports;v()(B,{VApp:h["a"],VBtn:d["a"],VCol:W["a"],VContainer:u["a"],VImg:T["a"],VResponsive:M["a"],VRow:N["a"],VSheet:U["a"],VTab:E["a"],VTabs:R["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Acerca de mi")])])],1)],1)],1)],1)},z=[],H={},J=H,q=Object(l["a"])(J,Y,z,!1,null,"0b288716",null),F=q.exports;v()(q,{VApp:h["a"],VCol:W["a"],VContainer:u["a"],VRow:N["a"],VSheet:U["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Mis proyectos")])])],1)],1)],1)],1)},K=[],Q={},X=Q,Z=Object(l["a"])(X,G,K,!1,null,"ca683c44",null),tt=Z.exports;v()(Z,{VApp:h["a"],VCol:W["a"],VContainer:u["a"],VRow:N["a"],VSheet:U["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Contacto")])])],1)],1)],1)],1)},at=[],it={},rt=it,nt=Object(l["a"])(rt,et,at,!1,null,"2c0dd669",null),ot=nt.exports;v()(nt,{VApp:h["a"],VCol:W["a"],VContainer:u["a"],VRow:N["a"],VSheet:U["a"]});var st=a("8c4f");i["a"].config.productionTip=!1,i["a"].use(st["a"]);var lt=new st["a"]({base:"/",routes:[{path:"/",redirect:"Inicio"},{path:"/Inicio",component:L,name:"Inicio"},{path:"/Acerca",component:F,name:"Acerca"},{path:"/Proyectos",component:tt,name:"Proyectos"},{path:"/Contacto",component:ot,name:"Contacto"}]});new i["a"]({vuetify:j,router:lt,render:function(t){return t($)},beforeCreate:function(){this.$vuetify.theme.dark=!1,i["a"].prototype.$accentColor="amber lighten-1"}}).$mount("#app")},c9ef:function(t,e,a){},de2b:function(t,e,a){t.exports=a.p+"img/hola.490cabea.jpg"},e14f:function(t,e,a){"use strict";var i=a("c9ef"),r=a.n(i);r.a}});
//# sourceMappingURL=app.40a2f0e3.js.map