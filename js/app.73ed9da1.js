(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],p=0,g=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&g.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(g.length)g.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Vinicio_Samayoa/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"14ca":function(e,t,a){e.exports=a.p+"img/about2.3fab0c9a.jpg"},1570:function(e,t,a){},2164:function(e,t,a){},"21d8":function(e,t,a){"use strict";var n=a("67f4"),o=a.n(n);o.a},"56d4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:e.toolbarColor,"elevate-on-scroll":""}},[this.$vuetify.theme.dark?e._e():a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("kbd",[e._v(e._s(e.shortName)),a("div",{staticClass:"animate-flicker"},[e._v("▂")])]):e._e(),this.globalWidth>=470?a("kbd",[e._v(e._s(e.myName)),a("div",{staticClass:"animate-flicker"},[e._v("▂")])]):e._e()]),this.$vuetify.theme.dark?a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("code",[e._v(e._s(e.shortName)),a("div",{staticClass:"animate-flicker"},[e._v("▂")])]):e._e(),this.globalWidth>=470?a("code",[e._v(e._s(e.myName)),a("div",{staticClass:"animate-flicker"},[e._v("▂")])]):e._e()]):e._e(),a("v-spacer"),e.$vuetify.breakpoint.mdAndUp?a("div",[a("v-btn",{attrs:{text:"",to:"Inicio",link:""}},[e._v("\n        Inicio\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Acerca",link:""}},[e._v("\n        Sobre mí\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Proyectos",link:""}},[e._v("\n        Proyectos\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Contacto",link:""}},[e._v("\n        Contacto\n      ")])],1):e._e(),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{icon:""},on:{click:e.themeSwap}},[a("v-icon",[e._v(e._s(this.iconString))])],1),e.$vuetify.breakpoint.smAndDown?a("v-menu",{attrs:{left:"",bottom:"",transition:"scale-transition",origin:"top right"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{icon:""}},n),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[a("v-list",{attrs:{color:this.getColor(),light:e.$vuetify.theme.dark,dark:!e.$vuetify.theme.dark}},[a("v-list-item",{attrs:{link:"",to:"Inicio"}},[a("v-list-item-title",[e._v("Inicio")])],1),a("v-list-item",{attrs:{to:"Acerca",link:""}},[a("v-list-item-title",[e._v("Sobre mí")])],1),a("v-list-item",{attrs:{to:"Proyectos",link:""}},[a("v-list-item-title",[e._v("Proyectos")])],1),a("v-list-item",{attrs:{to:"Contacto",link:""}},[a("v-list-item-title",[e._v("Contacto")])],1)],1)],1):e._e()],1),a("v-content",{staticClass:"pa-0 ma-0"},[a("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}],staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("transition",{attrs:{name:"scroll-x-transition",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},i=[],s=n["a"].observable({accentColor:"amber lighten-1"}),r={accentColor:function(){return s.accentColor}},l={setAccentColor:function(e){return s.accentColor=e}},c={name:"App",data:function(){return{globalWidth:window.innerWidth,myName:"Vinicio Samayoa",shortName:"V.S.",toolbarColor:"transparent",isDark:!0,iconString:""}},methods:{getColor:r.accentColor,setColor:l.setAccentColor,onScroll:function(){window.scrollY>20?this.isDark?this.toolbarColor="dark":this.toolbarColor="white":this.toolbarColor="transparent"},themeSwap:function(){this.isDark=!this.isDark,this.isDark?(this.setColor("amber lighten-1"),this.iconString="mdi-brightness-7",window.scrollY>20?this.toolbarColor="dark":this.toolbarColor="transparent"):(this.setColor("orange darken-3"),this.iconString="mdi-brightness-6",window.scrollY>20?this.toolbarColor="white":this.toolbarColor="transparent"),this.$vuetify.theme.dark=this.isDark}},mounted:function(){var e=this;this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6",window.onresize=function(){e.globalWidth=window.innerWidth}},beforeCreate:function(){this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6"}},u=c,p=(a("8626"),a("2877")),g=a("6544"),m=a.n(g),d=a("7496"),h=a("40dc"),v=a("8336"),b=a("a523"),k=a("a75b"),f=a("132d"),w=a("8860"),y=a("da13"),_=a("5d23"),C=a("e449"),V=a("2fa4"),S=a("2a7f"),x=a("269a"),j=a.n(x),A=a("f977"),P=Object(p["a"])(u,o,i,!1,null,"7958da88",null),L=P.exports;m()(P,{VApp:d["a"],VAppBar:h["a"],VBtn:v["a"],VContainer:b["a"],VContent:k["a"],VIcon:f["a"],VList:w["a"],VListItem:y["a"],VListItemTitle:_["c"],VMenu:C["a"],VSpacer:V["a"],VToolbarTitle:S["a"]}),j()(P,{Scroll:A["b"]});var D=a("f309");n["a"].use(D["a"]);var N=new D["a"]({}),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{class:e.$vuetify.theme.dark?"dark":"light",style:e.$vuetify.breakpoint.smAndUp?"height:70vh":"height:100vh"},[a("v-container",{class:[e.$vuetify.breakpoint.smAndUp?"px-12 fill-height":"fill-height"],attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h1",{class:[e.$vuetify.breakpoint.smAndUp?"text-uppercase font-weight-bold mb-4 display-3 text--color-black":"text-uppercase font-weight-bold mb-4 display-1"]},[e._v("Hola, soy Vinicio Samayoa")]),a("div",{class:[e.$vuetify.breakpoint.smAndUp?"mb-4 display-2 font-weight-light":"mb-4 headline"]},[e._v("Soy Ingeniero en Sistemas")]),a("v-responsive",{staticClass:"mb5",attrs:{"max-width":"600"}},[e._v("\n              Vivir el momento y disfrutar es mejor que alimentar tu apariencia de redes sociales.\n            ")]),a("br"),a("v-btn",{attrs:{color:this.getColor(),light:e.$vuetify.theme.dark,dark:!e.$vuetify.theme.dark,to:"Contacto",link:"",outlined:""}},[e._v("Contactar")])],1)],1)],1)],1),a("section",[a("v-sheet",{attrs:{"min-height":e.$vuetify.breakpoint.smAndUp?"200px":"100px",height:"5vh"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{class:[e.$vuetify.breakpoint.smAndUp?"display-1 text-center":"headline text-center"]},[e._v("Mejores proyectos")])])],1)],1)],1),a("ProjectsTabs",{attrs:{all:!1}})],1)])},$=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-tabs",{attrs:{centered:"",color:this.getColor()},model:{value:e.projectsTabs,callback:function(t){e.projectsTabs=t},expression:"projectsTabs"}},[a("v-tab",{key:"web"},[e._v("Web")]),a("v-tab",{key:"destop"},[e._v("Escritorio")]),a("v-tab",{key:"mobile"},[e._v("Móvil")])],1),a("v-tabs-items",{style:e.$vuetify.theme.dark?"background-color:#121212":"",model:{value:e.projectsTabs,callback:function(t){e.projectsTabs=t},expression:"projectsTabs"}},[a("v-tab-item",{key:"web"},[a("Web",{attrs:{all:e.all}})],1),a("v-tab-item",{key:"desktop"},[a("Desktop",{attrs:{all:e.all}})],1),a("v-tab-item",{key:"mobile"},[a("Mobile",{attrs:{all:e.all}})],1)],1)],1)},q=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},e._l(e.arrayApps,(function(t,n){return null!=e.all&&(e.all?e.all:t.best)?a("v-col",{key:n,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:t}})],1):e._e()})),1)],1)},I=[],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto rounded-10",attrs:{height:"525","max-width":"400",elevation:"5"}},[a("v-dialog",{attrs:{fullscreen:"",transition:"scale-transition"},model:{value:e.imgDialog,callback:function(t){e.imgDialog=t},expression:"imgDialog"}},[a("v-card",{staticClass:"overlay-card"},[a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"end"}},[a("v-btn",{attrs:{icon:"","x-large":"",dark:""},on:{click:function(t){e.imgDialog=!1}}},[a("v-icon",[e._v("\n                        clear\n                    ")])],1)],1),a("v-carousel",{staticClass:"pt-5",attrs:{height:"90vh"}},e._l(e.app.screens,(function(t,n){return a("v-carousel-item",{key:n},[a("div",{attrs:{align:"center"}},[a("v-img",{staticClass:"hola",attrs:{src:t,contain:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"white"}})],1)]},proxy:!0}],null,!0)})],1)])})),1)],1)],1),a("v-carousel",{staticClass:"pt-5",attrs:{cycle:"",height:"200","show-arrows-on-hover":"","hide-delimiters":"",progress:"","progress-color":this.getColor()}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"see-screens",attrs:{icon:"",light:!e.$vuetify.theme.dark},on:{click:function(t){return e.imgClicked()}}},n),[a("v-icon",[e._v("\n                        collections\n                    ")])],1)]}}])},[a("span",[e._v("\n                Ver imágenes\n            ")])]),e._l(e.app.screens,(function(t,n){return a("v-carousel-item",{key:n},[a("div",{attrs:{align:"center"}},[a("v-img",{staticClass:"carousel-imgs",attrs:{src:t,contain:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)]},proxy:!0}],null,!0)})],1)])}))],2),a("v-card-title",[e._v(e._s(e.app.softwareName))]),a("v-card-text",[e._v("\n        "+e._s(e.app.description)+"\n        "),null!=e.app.externalURL?a("div",[a("a",{attrs:{href:e.app.externalURL,target:"Starfall"}},[e._v(e._s(e.app.hyperlinkText))])]):e._e()]),a("v-card-actions",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"max-width":"250px",absolute:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[a("v-btn",e._g({attrs:{small:"",color:e.getColor(),light:e.$vuetify.theme.dark,dark:!e.$vuetify.theme.dark}},n),[e._v("\n                    Ver info. de desarrollo\n                    ")])],1)]}}]),model:{value:e.developmentInfoPopup,callback:function(t){e.developmentInfoPopup=t},expression:"developmentInfoPopup"}},[a("v-card",{attrs:{color:this.getColor(),light:e.$vuetify.theme.dark,dark:!e.$vuetify.theme.dark}},[a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"10"}},[a("v-card-title",{staticClass:"pb-0 pr-0"},[e._v("\n                                "+e._s(e.app.softwareName)+"\n                            ")])],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:"",large:""},on:{click:function(t){e.developmentInfoPopup=!1}}},[a("v-icon",[e._v("\n                                    clear\n                                ")])],1)],1)],1),a("v-card-text",{staticClass:"pb-0 pt-0"},[a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0"},[a("p",{staticClass:"title ma-0"},[e._v("Front-end")])]),a("v-col",{staticClass:"pa-0"},[a("p",{staticClass:"title ma-0"},[e._v("Back-end")])])],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Framework")]),a("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(e._s(e.app.frontendFramework))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Lenguaje")]),a("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(e._s(null==e.app.frontendLanguage?"Ninguno":e.app.frontendLanguage))])],1)],1)],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Framework")]),a("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(e._s(null==e.app.backendFramework?"Ninguno":e.app.backendFramework))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Lenguaje")]),a("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(e._s(null==e.app.backendLanguage?"Ninguno":e.app.backendLanguage))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Database")]),a("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(e._s(null==e.app.backendDB?"Ninguno":e.app.backendDB))])],1)],1)],1)],1)],1)],1)],1),a("br")],1)},U=[],E={props:{app:Object},data:function(){return{selectedImg:String,imgDialog:!1,developmentInfoPopup:!1}},methods:{imgClicked:function(){this.imgDialog=!0},setColor:l.setAccentColor,getColor:r.accentColor}},B=E,O=(a("21d8"),a("b0af")),G=a("99d9"),J=a("5e66"),z=a("3e35"),W=a("62ad"),X=a("169a"),H=a("adda"),Y=a("490a"),K=a("0fd9"),Q=a("3a2f"),Z=Object(p["a"])(B,M,U,!1,null,"77e0982b",null),ee=Z.exports;m()(Z,{VBtn:v["a"],VCard:O["a"],VCardActions:G["a"],VCardText:G["c"],VCardTitle:G["d"],VCarousel:J["a"],VCarouselItem:z["a"],VCol:W["a"],VDialog:X["a"],VIcon:f["a"],VImg:H["a"],VListItem:y["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VMenu:C["a"],VProgressCircular:Y["a"],VRow:K["a"],VTooltip:Q["a"]});var te={components:{ProjectCard:ee},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/5.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/6.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/7.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/8.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/9.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/10.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/11.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/12.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/13.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/14.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-kairos-college/15.png"],softwareName:"Plataforma Digital Kairos",description:"Plataforma Digital Kairos es un sistema que permite la administración estudiantil, docencial y administrativa de un colegio, agregando 3 modulos diferentes para cada aspecto..",externalURL:null,hyperlinkText:null,frontendFramework:"VueJS + Vuetify + Vuex",frontendLanguage:"Javascript",backendFramework:".NET Core",backendLanguage:"C#",backendDB:"Sql Server"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-launchpad-propellant/1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-launchpad-propellant/2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-launchpad-propellant/3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-launchpad-propellant/4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-launchpad-propellant/5.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-launchpad-propellant/6.png"],softwareName:"Launchpad - Rocket Deliveries",description:"Launchpad Rocket Deliveries es un sistema que permite la creación de pedidos de recolección y entregas, y administración de fondos para creación de pedidos, desde la perspectiva de cliente.",externalURL:null,hyperlinkText:null,frontendFramework:"ReactJS + MUI Core + Redux",frontendLanguage:"Javascript",backendFramework:".NET Core",backendLanguage:"C#",backendDB:"Sql Server"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-houston-propellant/1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-houston-propellant/2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-houston-propellant/3.png"],softwareName:"Houston - Rocket Deliveries",description:"Houston Rocket Deliveries es un sistema que permite la administración de pedidos, rutas y pilotos de Rocket deliveries, desde la creación de rutas y nuevos pedidos, hasta la asignación de pedidos a rutas, y asignación de rutas a pilotos.",externalURL:null,hyperlinkText:null,frontendFramework:"ReactJS + MUI Core + Redux",frontendLanguage:"Javascript",backendFramework:".NET Core",backendLanguage:"C#",backendDB:"Sql Server"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web5.png"],softwareName:"Chefbooking",description:"Chefbooking es un sitio web que recibe la descripción del hotel en lenguaje natural, se le aplica NLP y se procede a buscar hoteles mediante web scraping en la página de booking.com.",externalURL:null,hyperlinkText:null,frontendFramework:"Angular 6",frontendLanguage:"Typescript",backendFramework:".NET Framework",backendLanguage:"C#",backendDB:"Sql Server"},{best:!1,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web5.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web6.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web7.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-processManager-imgs/web8.png"],softwareName:"Proyecto seminario",description:"Proyecto seminario es una aplicación que sirve para gestionar un flujo de procesos basado en plantillas que incluye pasos, campos de info. y usuarios.",externalURL:null,hyperlinkText:null,frontendFramework:"Vue.js",frontendLanguage:"Javascript",backendFramework:".NET Core",backendLanguage:"C#",backendDB:"Oracle DB"},{best:!1,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web5.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web6.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-alquilerAutos_imgs/web7.png"],softwareName:"Alquiler de vehículos",description:"Alquiler de vehículos es una aplicación para manejar el flujo completo de un negocio de alquier de vehículos, este maneja facturas, registro de salida de vehículo y retorno de vehículo.",externalURL:null,hyperlinkText:null,frontendFramework:"Bootstrap 3",frontendLanguage:"Javascript",backendFramework:"Java Servlets",backendLanguage:"Java",backendDB:"Oracle DB"}]}}},ae=te,ne=Object(p["a"])(ae,R,I,!1,null,"66af350a",null),oe=ne.exports;m()(ne,{VCol:W["a"],VContainer:b["a"],VRow:K["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},e._l(e.arrayApps,(function(t,n){return null!=e.all&&(e.all?e.all:t.best)?a("v-col",{key:n,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:t}})],1):e._e()})),1)],1)},se=[],re={components:{ProjectCard:ee},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop3.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop4.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop5.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop6.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop7.png"],softwareName:"ContabilidadFX",description:"ContabilidadFX es un programa que realiza los libros contables diarios, mayores y balance general, mediante una nomenclatura.",externalURL:null,hyperlinkText:null,frontendFramework:"JavaFX",frontendLanguage:"Java",backendFramework:null,backendLanguage:null,backendDB:"MySql"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop3.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop4.PNG"],softwareName:"Sopa de letras",description:"Sopa de letras es un programa que permite jugar a sopa de letras, cuenta con niveles y animaciones para una mejor experiencia de usuario. Al completar una palabra se muestra su significado.",externalURL:null,hyperlinkText:null,frontendFramework:"JavaFX",frontendLanguage:"Java",backendFramework:null,backendLanguage:null,backendDB:".txt"},{best:!1,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-printServer-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-printServer-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-printServer-imgs/desktop3.PNG"],softwareName:"ChefPrintings",description:"ChefPrintings es un servidor de impresiones y en este se puede limitar el número de impresiones a los clientes. Los clientes pueden imprimir, escanear, enviar a correo electrónico o enviar a dropbox.",externalURL:null,hyperlinkText:null,frontendFramework:"Qt Creator",frontendLanguage:"C++",backendFramework:null,backendLanguage:null,backendDB:null}]}}},le=re,ce=Object(p["a"])(le,ie,se,!1,null,"7e8b8c51",null),ue=ce.exports;m()(ce,{VCol:W["a"],VContainer:b["a"],VRow:K["a"]});var pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},e._l(e.arrayApps,(function(t,n){return null!=e.all&&(e.all?e.all:t.best)?a("v-col",{key:n,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:t}})],1):e._e()})),1)],1)},ge=[],me={components:{ProjectCard:ee},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/EliminatorApp/assets/screen-1.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-2.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-3.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-4.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-5.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-6.png"],softwareName:"Eliminator",description:"Eliminator es una aplicación móvil que ayuda a las personas a eliminar toda la información de su celular mediante un mensaje de texto remoto.",externalURL:"https://unknowntechnologies.github.io/EliminatorApp",hyperlinkText:"Ver página web de la aplicación",frontendFramework:"Flutter",frontendLanguage:"Dart"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-1.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-2.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-3.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-4.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-5.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-6.jpg"],softwareName:"Cliente Notas",description:"Cliente Notas es una aplicación mejorada para poder ver las notas de la Mariano Gálvez, es ajena a la Universidad. Es una aplicación no oficial.",externalURL:"https://play.google.com/store/apps/details?id=com.undefined_constant.notas_cliente",hyperlinkText:"Ver aplicación en la Play Store",frontendFramework:"Flutter",frontendLanguage:"Dart"},{best:!1,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/mobile-adminColleges/1.jpg"],softwareName:"Administración de colegios",description:"Administración de colegios es una aplicación que permite la administración de cada colegio que usa el LMS creado por mi.",externalURL:null,hyperlinkText:null,frontendFramework:"Flutter",frontendLanguage:"Dart",backendFramework:".NET Core",backendLanguage:"C#",backendDB:"Sql Server"}]}}},de=me,he=(a("ad73"),Object(p["a"])(de,pe,ge,!1,null,"ebd90b18",null)),ve=he.exports;m()(he,{VCol:W["a"],VContainer:b["a"],VRow:K["a"]});var be={components:{Web:oe,Desktop:ue,Mobile:ve},props:{all:Boolean},data:function(){return{projectsTabs:null}},methods:{getColor:r.accentColor,setColor:l.setAccentColor}},ke=be,fe=a("71a3"),we=a("c671"),ye=a("fe57"),_e=a("aac8"),Ce=Object(p["a"])(ke,F,q,!1,null,"6d14dd2b",null),Ve=Ce.exports;m()(Ce,{VTab:fe["a"],VTabItem:we["a"],VTabs:ye["a"],VTabsItems:_e["a"]});var Se={name:"Start",components:{ProjectsTabs:Ve},data:function(){return{projectsTabs:null}},methods:{getColor:r.accentColor,setColor:l.setAccentColor}},xe=Se,je=(a("76f2"),a("6b53")),Ae=a("8dd9"),Pe=Object(p["a"])(xe,T,$,!1,null,"7aaa4e3c",null),Le=Pe.exports;m()(Pe,{VApp:d["a"],VBtn:v["a"],VCol:W["a"],VContainer:b["a"],VResponsive:je["a"],VRow:K["a"],VSheet:Ae["a"]});var De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:e.$vuetify.theme.dark?"":"grey lighten-3"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"display-2 text-center"},[e._v("Sobre mí")])])],1)],1)],1),n("section",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("h2",{class:e.$vuetify.breakpoint.smAndUp?"mb-4 display-1":"mb-4 headline"},[e._v("Mi nombre es Pierre Marco Vinicio Samayoa Morales.")]),n("p",{staticClass:"subtitle-1"},[e._v("Soy Ingeniero en Sistemas, tengo la carrera a fín \n                        y actualmente estoy en constante actualización sobre el mundo de la tecnología, estoy en proceso de obtención de mi título de master en Seguridad Informática.\n                    ")]),n("p",{staticClass:"mb-5"},[e._v("La programación es arte, es algo que me gusta demasiado y disfruto hacer.\n                            Aunque hay momentos en los que algo parece no tener solución, con un poco de esfuerzo y autodidactismo casi todo se puede lograr.\n                            "),n("br"),n("br"),e._v("\n                            Al momento de trabajar soy proactivo, me gusta ser autodidacta y siempre priorizo \n                            ofrecer funcionalidades más atractivas visualmente, eficientes y fáciles de usar.\n                            Soy un entusiasta del sistema de diseño Material de Google (Material Design).\n                            "),n("br"),n("br"),e._v("\n                            Profundizando más en mi forma de ser, soy carismático, amigable, positivo, con valores y responsable.\n                            Me gusta diversificar mis actividades y trato de realizar al menos 2 que sean fuera del mundo de la tecnología.\n                            "),n("br"),n("br"),e._v("\n                            La programación es vida.\n                            "),n("br")])]),n("v-col",{attrs:{cols:"12",sm:"12",md:"5","offset-md":"1"}},[n("v-row",{attrs:{justify:"center"}},[n("v-card",{attrs:{ripple:"","max-width":"450"}},[n("v-img",{attrs:{src:a("14ca"),"max-height":"500",contain:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)],1)],1)],1),n("v-sheet",{attrs:{"min-height":"200px",height:"10vh",color:e.$vuetify.theme.dark?"":"grey lighten-3"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{class:e.$vuetify.breakpoint.smAndUp?"display-1 text-center":"headline text-center"},[e._v("\n                        Conocimientos y habilidades\n                    ")])])],1)],1)],1),n("section",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[e._v("Servicio y mantenimiento Azure")]),n("v-card-subtitle",{staticClass:"pt-3"},[e._v("\n                            Creación, utilización y mantenimiento de servicios Azure \n                            que son esenciales para cualquier infraestructura tecnológica.\n                        ")])],1)],1),n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[e._v("Diseño y programación")]),n("v-card-subtitle",{staticClass:"pt-3"},[e._v("\n                            Programación de software de alto nivel, aplicando patrones de diseño \n                            para una mejor mantenibilidad y escalabilidad. Diseño de interfaces de usuario\n                            intuitivas y modernas para la mejor experiencia de usuario.\n                            Abstracción de lógica de negocio para generación de Bases de datos eficientes.\n                        ")])],1)],1),n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[e._v("Gestión de proyectos")]),n("v-card-subtitle",{staticClass:"pt-3"},[e._v("\n                            Gestión de proyectos responsable, equitativa y eficiente basada en metodologías de \n                            desarrollo de software como Rational Unified Process (RUP), SCRUM o Extreme programming (XP) \n                            en casos de alta urgencia.\n                        ")])],1)],1),n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[e._v("Análisis de sistemas")]),n("v-card-subtitle",{staticClass:"pt-3"},[e._v("\n                            Análisis de sistemas para una mejor implementación de soluciones, reduciendo el costo \n                            a favor de tiempo/dinero haciéndolos más eficientes.\n                        ")])],1)],1)],1)],1)],1),n("v-container",[n("v-row",e._l(e.frameworks_languages,(function(t,a){return n("v-col",{key:a,staticClass:"mb-10",attrs:{cols:"6",md:"3",sm:"4",xs:"6"}},[n("v-img",{staticClass:"mb-4",attrs:{src:t.img,height:"60",contain:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1)]},proxy:!0}],null,!0)}),n("v-row",{attrs:{justify:"center"}},[n("p",{staticClass:"display-2 font-weight-bold mb-2"},[e._v(e._s(t.score))])]),n("v-row",{attrs:{justify:"center"}},[n("p",{staticClass:"text-uppercase"},[e._v(e._s(t.name))])])],1)})),1)],1)],1)},Ne=[],Te={data:function(){return{frameworks_languages:[{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/flutter.svg",name:"Flutter",score:"80%"},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/angular.png",name:"Angular",score:"80%"},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/vuejs.png",name:"Vuejs",score:"90%"},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/reactjs.png",name:"Reactjs",score:"80%"},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/ionic.png",name:"Ionic",score:"80%"},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/java.png",name:"Java",score:"80%"},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/net.png",name:".net (c#)",score:"80%"},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/php.png",name:"Php",score:"70%"},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/qt_creator.svg",name:"Qt Creator (c++)",score:"70%"}]}}},$e=Te,Fe=(a("ea41"),Object(p["a"])($e,De,Ne,!1,null,null,null)),qe=Fe.exports;m()(Fe,{VApp:d["a"],VCard:O["a"],VCardSubtitle:G["b"],VCardTitle:G["d"],VCol:W["a"],VContainer:b["a"],VImg:H["a"],VProgressCircular:Y["a"],VRow:K["a"],VSheet:Ae["a"]});var Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:e.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[e._v("Mis proyectos")])])],1)],1)],1),a("section",[a("ProjectsTabs",{attrs:{all:!0}})],1)],1)},Ie=[],Me={components:{ProjectsTabs:Ve}},Ue=Me,Ee=Object(p["a"])(Ue,Re,Ie,!1,null,"cf91538a",null),Be=Ee.exports;m()(Ee,{VApp:d["a"],VCol:W["a"],VContainer:b["a"],VRow:K["a"],VSheet:Ae["a"]});var Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:e.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[e._v("Contacto")])])],1)],1)],1),a("section",[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-row",{staticClass:"mb-5 mx-0",attrs:{justify:"center"}},[a("v-icon",{attrs:{size:"100"}},[e._v("\n                            email\n                        ")])],1),a("v-row",{attrs:{justify:"center"}},[a("p",{staticClass:"headline"},[e._v("\n                            vinicio00097@gmail.com\n                        ")])])],1)],1)],1)],1)],1)},Ge=[],Je={},ze=Je,We=Object(p["a"])(ze,Oe,Ge,!1,null,"248ae1b4",null),Xe=We.exports;m()(We,{VApp:d["a"],VCol:W["a"],VContainer:b["a"],VIcon:f["a"],VRow:K["a"],VSheet:Ae["a"]});var He=a("8c4f");n["a"].config.productionTip=!1,n["a"].use(He["a"]);var Ye=new He["a"]({base:"/",routes:[{path:"/",redirect:"Inicio"},{path:"/Inicio",component:Le,name:"Inicio"},{path:"/Acerca",component:qe,name:"Acerca"},{path:"/Proyectos",component:Be,name:"Proyectos"},{path:"/Contacto",component:Xe,name:"Contacto"}]});new n["a"]({vuetify:N,router:Ye,render:function(e){return e(L)},beforeCreate:function(){this.$vuetify.theme.dark=!0,n["a"].prototype.$accentColor="amber lighten-1"}}).$mount("#app")},"67f4":function(e,t,a){},"76f2":function(e,t,a){"use strict";var n=a("1570"),o=a.n(n);o.a},8626:function(e,t,a){"use strict";var n=a("2164"),o=a.n(n);o.a},ac6d:function(e,t,a){},ad73:function(e,t,a){"use strict";var n=a("56d4"),o=a.n(n);o.a},ea41:function(e,t,a){"use strict";var n=a("ac6d"),o=a.n(n);o.a}});
//# sourceMappingURL=app.73ed9da1.js.map