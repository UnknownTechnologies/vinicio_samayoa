(function(t){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Vinicio_Samayoa/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d7e":function(t,e,a){"use strict";var n=a("d2f1"),s=a.n(n);s.a},3564:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:t.toolbarColor,"elevate-on-scroll":""}},[this.$vuetify.theme.dark?t._e():a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("kbd",[t._v(t._s(t.shortName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e(),this.globalWidth>=470?a("kbd",[t._v(t._s(t.myName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e()]),this.$vuetify.theme.dark?a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("code",[t._v(t._s(t.shortName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e(),this.globalWidth>=470?a("code",[t._v(t._s(t.myName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e()]):t._e(),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("div",[a("v-btn",{attrs:{text:"",to:"Inicio",link:""}},[t._v("\n        Inicio\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Acerca",link:""}},[t._v("\n        Sobre mí\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Proyectos",link:""}},[t._v("\n        Proyectos\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Contacto",link:""}},[t._v("\n        Contacto\n      ")])],1):t._e(),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{icon:""},on:{click:t.themeSwap}},[a("v-icon",[t._v(t._s(this.iconString))])],1),t.$vuetify.breakpoint.smAndDown?a("v-menu",{attrs:{left:"",bottom:"",transition:"scale-transition",origin:"top right"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:""}},n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[a("v-list",{attrs:{color:this.getColor(),light:t.$vuetify.theme.dark,dark:!t.$vuetify.theme.dark}},[a("v-list-item",{attrs:{link:"",to:"Inicio"}},[a("v-list-item-title",[t._v("Inicio")])],1),a("v-list-item",{attrs:{to:"Acerca",link:""}},[a("v-list-item-title",[t._v("Sobre mí")])],1),a("v-list-item",{attrs:{to:"Proyectos",link:""}},[a("v-list-item-title",[t._v("Proyectos")])],1),a("v-list-item",{attrs:{to:"Contacto",link:""}},[a("v-list-item-title",[t._v("Contacto")])],1)],1)],1):t._e()],1),a("v-content",{staticClass:"pa-0 ma-0"},[a("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("transition",{attrs:{name:"scroll-x-transition",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},o=[],i=n["a"].observable({accentColor:"amber lighten-1"}),r={accentColor:function(){return i.accentColor}},l={setAccentColor:function(t){return i.accentColor=t}},c={name:"App",data:function(){return{globalWidth:window.innerWidth,myName:"Vinicio Samayoa",shortName:"V.S.",toolbarColor:"transparent",isDark:!0,iconString:""}},methods:{getColor:r.accentColor,setColor:l.setAccentColor,onScroll:function(){window.scrollY>20?this.isDark?this.toolbarColor="dark":this.toolbarColor="white":this.toolbarColor="transparent"},themeSwap:function(){this.isDark=!this.isDark,this.isDark?(this.setColor("amber lighten-1"),this.iconString="mdi-brightness-7",window.scrollY>20?this.toolbarColor="dark":this.toolbarColor="transparent"):(this.setColor("orange darken-3"),this.iconString="mdi-brightness-6",window.scrollY>20?this.toolbarColor="white":this.toolbarColor="transparent"),this.$vuetify.theme.dark=this.isDark}},mounted:function(){var t=this;this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6",window.onresize=function(){t.globalWidth=window.innerWidth}},beforeCreate:function(){this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6"}},p=c,u=(a("8732"),a("2877")),m=a("6544"),g=a.n(m),d=a("7496"),h=a("40dc"),v=a("8336"),b=a("a523"),f=a("a75b"),k=a("132d"),y=a("8860"),w=a("da13"),_=a("5d23"),C=a("e449"),V=a("2fa4"),S=a("2a7f"),x=a("269a"),j=a.n(x),A=a("f977"),P=Object(u["a"])(p,s,o,!1,null,"670b7d86",null),$=P.exports;g()(P,{VApp:d["a"],VAppBar:h["a"],VBtn:v["a"],VContainer:b["a"],VContent:f["a"],VIcon:k["a"],VList:y["a"],VListItem:w["a"],VListItemTitle:_["c"],VMenu:C["a"],VSpacer:V["a"],VToolbarTitle:S["a"]}),j()(P,{Scroll:A["b"]});var L=a("f309");n["a"].use(L["a"]);var N=new L["a"]({}),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-img",{attrs:{"lazy-src":a("de2b"),src:a("de2b"),gradient:t.$vuetify.theme.dark?"to top, rgba(30, 30, 30, 0.75), rgba(30, 30, 30, 0.75)":"to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)",position:"center center",transition:"fade-transition",height:t.$vuetify.breakpoint.smAndUp?"70vh":"100vh"}},[n("v-container",{class:[t.$vuetify.breakpoint.smAndUp?"px-12 fill-height":"fill-height"],attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h1",{class:[t.$vuetify.breakpoint.smAndUp?"text-uppercase font-weight-bold mb-4 display-3 text--color-black":"text-uppercase font-weight-bold mb-4 display-1"]},[t._v("Hola, soy Vinicio Samayoa")]),n("div",{class:[t.$vuetify.breakpoint.smAndUp?"mb-4 display-2 font-weight-light":"mb-4 headline"]},[t._v("Soy desarrollador de software")]),n("v-responsive",{staticClass:"mb5",attrs:{"max-width":"600"}},[t._v("\n              Vivir el momento y disfrutar es mejor que guardarlo en un dispositivo móvil y alimentar tu apariencia social.\n            ")]),n("br"),n("v-btn",{attrs:{color:this.getColor(),light:t.$vuetify.theme.dark,dark:!t.$vuetify.theme.dark,to:"Contacto",link:""}},[t._v("Contratar")])],1)],1)],1)],1),n("section",[n("v-sheet",{attrs:{"min-height":t.$vuetify.breakpoint.smAndUp?"200px":"100px",height:"5vh"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{class:[t.$vuetify.breakpoint.smAndUp?"display-1 text-center":"headline text-center"]},[t._v("Mejores proyectos")])])],1)],1)],1),n("ProjectsTabs",{attrs:{all:!1}})],1)],1)},D=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-tabs",{attrs:{centered:"",color:this.getColor()},model:{value:t.projectsTabs,callback:function(e){t.projectsTabs=e},expression:"projectsTabs"}},[a("v-tab",{key:"web"},[t._v("Web")]),a("v-tab",{key:"destop"},[t._v("Escritorio")]),a("v-tab",{key:"mobile"},[t._v("Móvil")])],1),a("v-tabs-items",{style:t.$vuetify.theme.dark?"background-color:#121212":"",model:{value:t.projectsTabs,callback:function(e){t.projectsTabs=e},expression:"projectsTabs"}},[a("v-tab-item",{key:"web"},[a("Web",{attrs:{all:t.all}})],1),a("v-tab-item",{key:"desktop"},[a("Desktop",{attrs:{all:t.all}})],1),a("v-tab-item",{key:"mobile"},[a("Mobile",{attrs:{all:t.all}})],1)],1)],1)},F=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},t._l(t.arrayApps,(function(e,n){return null!=t.all&&(t.all?t.all:e.best)?a("v-col",{key:n,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:e}})],1):t._e()})),1)],1)},q=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto rounded-10",attrs:{"max-width":"400",elevation:"5"}},[a("v-dialog",{attrs:{fullscreen:"",transition:"scale-transition"},model:{value:t.imgDialog,callback:function(e){t.imgDialog=e},expression:"imgDialog"}},[a("v-card",{staticClass:"overlay-card"},[a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"end"}},[a("v-btn",{attrs:{icon:"","x-large":"",dark:""},on:{click:function(e){t.imgDialog=!1}}},[a("v-icon",[t._v("\n                        clear\n                    ")])],1)],1),a("v-carousel",{staticClass:"pt-5",attrs:{height:"90vh"}},t._l(t.app.screens,(function(e,n){return a("v-carousel-item",{key:n},[a("div",{attrs:{align:"center"}},[a("v-img",{staticClass:"hola",attrs:{src:e,contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"white"}})],1)]},proxy:!0}],null,!0)})],1)])})),1)],1)],1),a("v-carousel",{staticClass:"pt-5",attrs:{cycle:"",height:"200","show-arrows-on-hover":"","hide-delimiters":"",progress:"","progress-color":this.getColor()}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"see-screens",attrs:{icon:"",light:!t.$vuetify.theme.dark},on:{click:function(e){return t.imgClicked()}}},n),[a("v-icon",[t._v("\n                        collections\n                    ")])],1)]}}])},[a("span",[t._v("\n                Ver imágenes\n            ")])]),t._l(t.app.screens,(function(e,n){return a("v-carousel-item",{key:n},[a("div",{attrs:{align:"center"}},[a("v-img",{staticClass:"carousel-imgs",attrs:{src:e,contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)]},proxy:!0}],null,!0)})],1)])}))],2),a("v-card-title",[t._v(t._s(t.app.softwareName))]),a("v-card-text",[t._v("\n        "+t._s(t.app.description)+"\n        "),null!=t.app.externalURL?a("div",[a("a",{attrs:{href:t.app.externalURL,target:"Starfall"}},[t._v(t._s(t.app.hyperlinkText))])]):t._e()]),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"max-width":"250px",absolute:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[a("v-btn",t._g({attrs:{small:"",color:t.getColor(),light:t.$vuetify.theme.dark,dark:!t.$vuetify.theme.dark}},n),[t._v("\n                Ver info. de desarrollo\n                ")])],1)]}}]),model:{value:t.developmentInfoPopup,callback:function(e){t.developmentInfoPopup=e},expression:"developmentInfoPopup"}},[a("v-card",{attrs:{color:this.getColor(),light:t.$vuetify.theme.dark,dark:!t.$vuetify.theme.dark}},[a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"10"}},[a("v-card-title",{staticClass:"pb-0 pr-0"},[t._v("\n                            "+t._s(t.app.softwareName)+"\n                        ")])],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){t.developmentInfoPopup=!1}}},[a("v-icon",[t._v("\n                                clear\n                            ")])],1)],1)],1),a("v-card-text",{staticClass:"pb-0 pt-0"},[a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0"},[a("p",{staticClass:"title ma-0"},[t._v("Front-end")])]),a("v-col",{staticClass:"pa-0"},[a("p",{staticClass:"title ma-0"},[t._v("Back-end")])])],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Framework")]),a("v-list-item-subtitle",[t._v(t._s(t.app.frontendFramework))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Lenguaje")]),a("v-list-item-subtitle",[t._v(t._s(null==t.app.frontendLanguage?"Ninguno":t.app.frontendLanguage))])],1)],1)],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Framework")]),a("v-list-item-subtitle",[t._v(t._s(null==t.app.backendFramework?"Ninguno":t.app.backendFramework))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Lenguaje")]),a("v-list-item-subtitle",[t._v(t._s(null==t.app.backendLanguage?"Ninguno":t.app.backendLanguage))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Database")]),a("v-list-item-subtitle",[t._v(t._s(null==t.app.backendDB?"Ninguno":t.app.backendDB))])],1)],1)],1)],1)],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold"})],1)],1)],1)],1)},O=[],U={props:{app:Object},data:function(){return{selectedImg:String,imgDialog:!1,developmentInfoPopup:!1}},methods:{imgClicked:function(){this.imgDialog=!0},setColor:l.setAccentColor,getColor:r.accentColor}},R=U,B=(a("0d7e"),a("b0af")),G=a("99d9"),z=a("5e66"),J=a("3e35"),W=a("62ad"),X=a("169a"),Y=a("adda"),Q=a("490a"),H=a("0fd9"),K=a("3a2f"),Z=Object(u["a"])(R,E,O,!1,null,"e87f2552",null),tt=Z.exports;g()(Z,{VBtn:v["a"],VCard:B["a"],VCardText:G["b"],VCardTitle:G["c"],VCarousel:z["a"],VCarouselItem:J["a"],VCol:W["a"],VDialog:X["a"],VIcon:k["a"],VImg:Y["a"],VListItem:w["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VMenu:C["a"],VProgressCircular:Q["a"],VRow:H["a"],VTooltip:K["a"]});var et={components:{ProjectCard:tt},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web5.png"],softwareName:"Chefbooking",description:"Chefbooking es un sitio web que recibe la descripción del hotel en lenguaje natural, se le aplica NLP y se procede a buscar hoteles mediante web scraping en la página de booking.com.",externalURL:null,hyperlinkText:null,frontendFramework:"Angular 6",frontendLanguage:"Typescript",backendFramework:".NET Framework",backendLanguage:"C#",backendDB:"Sql Server"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web5.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web6.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web7.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web8.png"],softwareName:"Proyecto seminario",description:"Proyecto seminario es una aplicación que sirve para gestionar un flujo de procesos basado en plantillas que incluye pasos, campos de info. y usuarios.",externalURL:null,hyperlinkText:null,frontendFramework:"Vue.js",frontendLanguage:"Javascript",backendFramework:".NET Core",backendLanguage:"C#",backendDB:"Oracle DB"},{best:!1,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web5.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web6.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web7.png"],softwareName:"Alquier de vehículos",description:"Alquiler de vehículos es una aplicación para manejar el flujo completo de un negocio de alquier de vehículos, este maneja facturas, registro de salida de vehículo y retorno de vehículo.",externalURL:null,hyperlinkText:null,frontendFramework:"Bootstrap 3",frontendLanguage:"Javascript",backendFramework:"Java Servlets",backendLanguage:"Java",backendDB:"Oracle DB"}]}}},at=et,nt=Object(u["a"])(at,M,q,!1,null,"966b76b2",null),st=nt.exports;g()(nt,{VCol:W["a"],VContainer:b["a"],VRow:H["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},t._l(t.arrayApps,(function(e,n){return null!=t.all&&(t.all?t.all:e.best)?a("v-col",{key:n,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:e}})],1):t._e()})),1)],1)},it=[],rt={components:{ProjectCard:tt},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop3.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop4.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop5.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop6.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop7.png"],softwareName:"ContabilidadFX",description:"ContabilidadFX es un programa que realiza los libros contables diarios, mayores y balance general, mediante una nomenclatura.",externalURL:null,hyperlinkText:null,frontendFramework:"JavaFX",frontendLanguage:"Java",backendFramework:null,backendLanguage:null,backendDB:"MySql"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop3.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop4.PNG"],softwareName:"Sopa de letras",description:"Sopa de letras es un programa que permite jugar a sopa de letras, cuenta con niveles y animaciones para una mejor experiencia de usuario. Al completar una palabra se muestra su significado.",externalURL:null,hyperlinkText:null,frontendFramework:"JavaFX",frontendLanguage:"Java",backendFramework:null,backendLanguage:null,backendDB:".txt"},{best:!1,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-printServer-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-printServer-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-printServer-imgs/desktop3.PNG"],softwareName:"ChefPrintings",description:"ChefPrintings es un servidor de impresiones y en este se puede limitar el número de impresiones a los clientes. Los clientes pueden imprimir, escanear, enviar a correo electrónico o enviar a dropbox.",externalURL:null,hyperlinkText:null,frontendFramework:"Qt Creator",frontendLanguage:"C++",backendFramework:null,backendLanguage:null,backendDB:null}]}}},lt=rt,ct=Object(u["a"])(lt,ot,it,!1,null,"7e8b8c51",null),pt=ct.exports;g()(ct,{VCol:W["a"],VContainer:b["a"],VRow:H["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},t._l(t.arrayApps,(function(e,n){return null!=t.all&&(t.all?t.all:e.best)?a("v-col",{key:n,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:e}})],1):t._e()})),1)],1)},mt=[],gt={components:{ProjectCard:tt},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/EliminatorApp/assets/screen-1.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-2.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-3.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-4.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-5.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-6.png"],softwareName:"Eliminator",description:"Eliminator es una aplicación móvil que ayuda a las personas a eliminar toda la información de su celular mediante un mensaje de texto remoto.",externalURL:"https://unknowntechnologies.github.io/EliminatorApp",hyperlinkText:"Ver página web de la aplicación",frontendFramework:"Flutter",frontendLanguage:"Dart"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-1.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-2.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-3.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-4.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-5.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-6.jpg"],softwareName:"Cliente Notas",description:"Cliente Notas es una aplicación mejorada para poder ver las notas de la Mariano Gálvez, es ajena a la Universidad. Es una aplicación no oficial.",externalURL:"https://play.google.com/store/apps/details?id=com.undefined_constant.notas_cliente",hyperlinkText:"Ver aplicación en la Play Store",frontendFramework:"Flutter",frontendLanguage:"Dart"}]}}},dt=gt,ht=(a("e1bf"),Object(u["a"])(dt,ut,mt,!1,null,"f91c46f4",null)),vt=ht.exports;g()(ht,{VCol:W["a"],VContainer:b["a"],VRow:H["a"]});var bt={components:{Web:st,Desktop:pt,Mobile:vt},props:{all:Boolean},data:function(){return{projectsTabs:null}},methods:{getColor:r.accentColor,setColor:l.setAccentColor}},ft=bt,kt=a("71a3"),yt=a("c671"),wt=a("fe57"),_t=a("aac8"),Ct=Object(u["a"])(ft,I,F,!1,null,"6d14dd2b",null),Vt=Ct.exports;g()(Ct,{VTab:kt["a"],VTabItem:yt["a"],VTabs:wt["a"],VTabsItems:_t["a"]});var St={name:"Start",components:{ProjectsTabs:Vt},data:function(){return{projectsTabs:null}},methods:{getColor:r.accentColor,setColor:l.setAccentColor}},xt=St,jt=a("6b53"),At=a("8dd9"),Pt=Object(u["a"])(xt,T,D,!1,null,"5a0cadec",null),$t=Pt.exports;g()(Pt,{VApp:d["a"],VBtn:v["a"],VCol:W["a"],VContainer:b["a"],VImg:Y["a"],VResponsive:jt["a"],VRow:H["a"],VSheet:At["a"]});var Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"display-2 text-center"},[t._v("Sobre mí")])])],1)],1)],1),n("section",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("h2",{class:t.$vuetify.breakpoint.smAndUp?"mb-4 display-1":"mb-4 headline"},[t._v("Mi nombre es Pierre Marco Vinicio Samayoa Morales.")]),n("p",{staticClass:"subtitle-1"},[t._v("Soy estudiante de Ingeniería en sistemas, tengo \n                        pénsum cerrado de la carrera y actualmente estoy \n                        cursando maestría en seguridad informática, tengo en mis planes graduarme como Ingeniero y también obtener título de master.\n                    ")]),n("p",{staticClass:"mb-5"},[t._v("La programación para mi es un hobbie no un trabajo, es algo que me gusta demasiado y disfruto hacer.\n                            Aunque hay momentos en los que algo parece no tener solución, con un poco de esfuerzo y autodidactismo casí todo se puede lograr.\n                            "),n("br"),n("br"),t._v("\n                            Profundizando más en mi forma de ser, soy proactivo, me gusta ser autodidacta y siempre priorizo \n                            ofrecer funcionalidades más atractivas visualmente, eficientes y fáciles de usar.\n                            Soy un entusiasta del sistema de diseño Material de Google (Material Design).\n                            "),n("br"),n("br"),t._v("\n                            La programación es vida.\n                    ")])]),n("v-col",{attrs:{cols:"12",sm:"12",md:"5","offset-md":"1"}},[n("v-card",{attrs:{ripple:""}},[n("v-img",{attrs:{src:a("a46c")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)],1)],1),n("v-sheet",{attrs:{"min-height":"200px",height:"10vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{class:t.$vuetify.breakpoint.smAndUp?"display-1 text-center":"headline text-center"},[t._v("\n                        Conocimientos y habilidades\n                    ")])])],1)],1)],1),n("section",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[t._v("Servicio y mantenimiento Azure")]),n("v-card-subtitle",{staticClass:"pt-3"},[t._v("\n                            Creación, utilización y mantenimiento de servicios Azure \n                            que son esenciales para cualquier infraestructura tecnológica.\n                        ")])],1)],1),n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[t._v("Diseño y programación")]),n("v-card-subtitle",{staticClass:"pt-3"},[t._v("\n                            Programación de software de alto nivel, aplicando patrones de diseño \n                            para una mejor mantenibilidad y escalabilidad. Diseño de interfaces de usuario\n                            intuitivas y modernas para la mejor experiencia de usuario.\n                            Abstracción de lógica de negocio para generación de Bases de datos eficientes.\n                        ")])],1)],1),n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[t._v("Gestión de proyectos")]),n("v-card-subtitle",{staticClass:"pt-3"},[t._v("\n                            Gestión de proyectos reponsable, equitativa y eficiente basada en metodologías de \n                            desarrollo de software como Rational Unified Process (RUP), SCRUM o Extreme programming (XP) \n                            en casos de alta urgencia.\n                        ")])],1)],1),n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[t._v("Análisis de sistemas")]),n("v-card-subtitle",{staticClass:"pt-3"},[t._v("\n                            Análisis de sistemas para una mejor implementación de soluciones, reduciendo el costo \n                            a favor de tiempo/dinero haciéndolos más eficientes.\n                        ")])],1)],1)],1)],1)],1),n("v-container",[n("v-row",t._l(t.frameworks_languages,(function(e,a){return n("v-col",{key:a,staticClass:"mb-10",attrs:{cols:"6",md:"3",sm:"4",xs:"6"}},[n("v-img",{staticClass:"mb-4",attrs:{src:e.img,height:"60",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1)]},proxy:!0}],null,!0)}),n("v-row",{attrs:{justify:"center"}},[n("p",{staticClass:"display-2 font-weight-bold mb-2"},[t._v(t._s(e.score))])]),n("v-row",{attrs:{justify:"center"}},[n("p",{staticClass:"text-uppercase"},[t._v(t._s(e.name))])])],1)})),1)],1)],1)},Nt=[],Tt={data:function(){return{frameworks_languages:[{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/flutter.svg",name:"Flutter",score:100},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/angular.png",name:"Angular",score:80},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/vuejs.png",name:"Vuejs",score:90},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/ionic.png",name:"Ionic",score:80},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/java.png",name:"Java",score:80},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/net.png",name:".net (c#)",score:80},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/php.png",name:"Php",score:70},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/qt_creator.svg",name:"Qt Creator (c++)",score:70}]}}},Dt=Tt,It=(a("ea41"),Object(u["a"])(Dt,Lt,Nt,!1,null,null,null)),Ft=It.exports;g()(It,{VApp:d["a"],VCard:B["a"],VCardSubtitle:G["a"],VCardTitle:G["c"],VCol:W["a"],VContainer:b["a"],VImg:Y["a"],VProgressCircular:Q["a"],VRow:H["a"],VSheet:At["a"]});var Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Mis proyectos")])])],1)],1)],1),a("section",[a("ProjectsTabs",{attrs:{all:!0}})],1)],1)},qt=[],Et={components:{ProjectsTabs:Vt}},Ot=Et,Ut=Object(u["a"])(Ot,Mt,qt,!1,null,"cf91538a",null),Rt=Ut.exports;g()(Ut,{VApp:d["a"],VCol:W["a"],VContainer:b["a"],VRow:H["a"],VSheet:At["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Contacto")])])],1)],1)],1),a("section",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-row",{staticClass:"mb-5 mx-0",attrs:{justify:"center"}},[a("v-icon",{attrs:{size:"100"}},[t._v("\n                            email\n                        ")])],1),a("v-row",{attrs:{justify:"center"}},[a("p",{staticClass:"headline"},[t._v("\n                            vinicio00097@gmail.com\n                        ")])])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-row",{staticClass:"mb-5 mx-0",attrs:{justify:"center"}},[a("v-icon",{attrs:{size:"100"}},[t._v("\n                            phone\n                        ")])],1),a("v-row",{attrs:{justify:"center"}},[a("p",{staticClass:"headline"},[t._v("\n                            4607 6292\n                        ")])])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-row",{staticClass:"mb-5 mx-0",attrs:{justify:"center"}},[a("v-icon",{attrs:{size:"100"}},[t._v("\n                            add_ic_call\n                        ")])],1),a("v-row",{attrs:{justify:"center"}},[a("p",{staticClass:"headline"},[t._v("\n                            5273 9233\n                        ")])])],1)],1)],1)],1)],1)},Gt=[],zt={},Jt=zt,Wt=Object(u["a"])(Jt,Bt,Gt,!1,null,"559f1f71",null),Xt=Wt.exports;g()(Wt,{VApp:d["a"],VCol:W["a"],VContainer:b["a"],VIcon:k["a"],VRow:H["a"],VSheet:At["a"]});var Yt=a("8c4f");n["a"].config.productionTip=!1,n["a"].use(Yt["a"]);var Qt=new Yt["a"]({base:"/",routes:[{path:"/",redirect:"Inicio"},{path:"/Inicio",component:$t,name:"Inicio"},{path:"/Acerca",component:Ft,name:"Acerca"},{path:"/Proyectos",component:Rt,name:"Proyectos"},{path:"/Contacto",component:Xt,name:"Contacto"}]});new n["a"]({vuetify:N,router:Qt,render:function(t){return t($)},beforeCreate:function(){this.$vuetify.theme.dark=!0,n["a"].prototype.$accentColor="amber lighten-1"}}).$mount("#app")},6266:function(t,e,a){},8732:function(t,e,a){"use strict";var n=a("3564"),s=a.n(n);s.a},a46c:function(t,e,a){t.exports=a.p+"img/about.69dbbf5d.jpg"},ac6d:function(t,e,a){},d2f1:function(t,e,a){},de2b:function(t,e,a){t.exports=a.p+"img/hola.5d224e93.jpg"},e1bf:function(t,e,a){"use strict";var n=a("6266"),s=a.n(n);s.a},ea41:function(t,e,a){"use strict";var n=a("ac6d"),s=a.n(n);s.a}});
//# sourceMappingURL=app.5d64d21c.js.map