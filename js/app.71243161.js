(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Vinicio_Samayoa/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"50e3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:t.toolbarColor,"elevate-on-scroll":""}},[this.$vuetify.theme.dark?t._e():a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("kbd",[t._v(t._s(t.shortName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e(),this.globalWidth>=470?a("kbd",[t._v(t._s(t.myName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e()]),this.$vuetify.theme.dark?a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("code",[t._v(t._s(t.shortName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e(),this.globalWidth>=470?a("code",[t._v(t._s(t.myName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e()]):t._e(),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("div",[a("v-btn",{attrs:{text:"",to:"Inicio",link:""}},[t._v("\n        Inicio\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Acerca",link:""}},[t._v("\n        Sobre mí\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Proyectos",link:""}},[t._v("\n        Proyectos\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Contacto",link:""}},[t._v("\n        Contacto\n      ")])],1):t._e(),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{icon:""},on:{click:t.themeSwap}},[a("v-icon",[t._v(t._s(this.iconString))])],1),t.$vuetify.breakpoint.smAndDown?a("v-menu",{attrs:{left:"",bottom:"",transition:"scale-transition",origin:"top right"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{icon:""}},s),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[a("v-list",{attrs:{color:this.$accentColor,light:""}},[a("v-list-item",{attrs:{link:"",to:"Inicio"}},[a("v-list-item-title",[t._v("Inicio")])],1),a("v-list-item",{attrs:{to:"Acerca",link:""}},[a("v-list-item-title",[t._v("Sobre mí")])],1),a("v-list-item",{attrs:{to:"Proyectos",link:""}},[a("v-list-item-title",[t._v("Proyectos")])],1),a("v-list-item",{attrs:{to:"Contacto",link:""}},[a("v-list-item-title",[t._v("Contacto")])],1)],1)],1):t._e()],1),a("v-content",{staticClass:"pa-0 ma-0"},[a("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("transition",{attrs:{name:"scroll-x-transition",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},i=[],o={name:"App",data:function(){return{globalWidth:window.innerWidth,myName:"Vinicio Samayoa",shortName:"V.S.",toolbarColor:"transparent",isDark:!0,iconString:""}},methods:{onScroll:function(){window.scrollY>20?this.isDark?this.toolbarColor="dark":this.toolbarColor="white":this.toolbarColor="transparent"},themeSwap:function(){this.isDark=!this.isDark,this.isDark?(this.iconString="mdi-brightness-7",window.scrollY>20?this.toolbarColor="dark":this.toolbarColor="transparent"):(this.iconString="mdi-brightness-6",window.scrollY>20?this.toolbarColor="white":this.toolbarColor="transparent"),this.$vuetify.theme.dark=this.isDark}},mounted:function(){var t=this;this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6",window.onresize=function(){t.globalWidth=window.innerWidth}},beforeCreate:function(){this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6"}},r=o,l=(a("e42c"),a("2877")),c=a("6544"),p=a.n(c),u=a("7496"),m=a("40dc"),d=a("8336"),v=a("a523"),g=a("a75b"),h=a("132d"),b=a("8860"),f=a("da13"),k=a("5d23"),y=a("e449"),_=a("2fa4"),w=a("2a7f"),C=a("269a"),V=a.n(C),x=a("f977"),S=Object(l["a"])(r,n,i,!1,null,"d02fb094",null),j=S.exports;p()(S,{VApp:u["a"],VAppBar:m["a"],VBtn:d["a"],VContainer:v["a"],VContent:g["a"],VIcon:h["a"],VList:b["a"],VListItem:f["a"],VListItemTitle:k["c"],VMenu:y["a"],VSpacer:_["a"],VToolbarTitle:w["a"]}),V()(S,{Scroll:x["b"]});var P=a("f309");s["a"].use(P["a"]);var A=new P["a"]({}),$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-img",{attrs:{"lazy-src":a("de2b"),src:a("de2b"),gradient:t.$vuetify.theme.dark?"to top, rgba(30, 30, 30, 0.75), rgba(30, 30, 30, 0.75)":"to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)",position:"center center",transition:"fade-transition",height:t.$vuetify.breakpoint.smAndUp?"70vh":"100vh"}},[s("v-container",{class:[t.$vuetify.breakpoint.smAndUp?"px-12 fill-height":"fill-height"],attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("h1",{class:[t.$vuetify.breakpoint.smAndUp?"text-uppercase font-weight-bold mb-4 display-3 text--color-black":"text-uppercase font-weight-bold mb-4 display-1"]},[t._v("Hola, soy Vinicio Samayoa")]),s("div",{class:[t.$vuetify.breakpoint.smAndUp?"mb-4 display-2 font-weight-light":"mb-4 headline"]},[t._v("Soy desarrollador de software")]),s("v-responsive",{staticClass:"mb5",attrs:{"max-width":"600"}},[t._v("\n              Vivir el momento y disfrutar es mejor que guardarlo en un dispositivo móvil y alimentar tu apariencia social.\n            ")]),s("br"),s("v-btn",{attrs:{color:this.$accentColor,light:"",to:"Contacto",link:""}},[t._v("Contratar")])],1)],1)],1)],1),s("section",[s("v-sheet",{attrs:{"min-height":t.$vuetify.breakpoint.smAndUp?"200px":"100px",height:"5vh"}},[s("v-container",{staticClass:"fill-height"},[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("h1",{class:[t.$vuetify.breakpoint.smAndUp?"display-1 text-center":"headline text-center"]},[t._v("Mejores proyectos")])])],1)],1)],1),s("ProjectsTabs",{attrs:{all:!1}})],1)],1)},T=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-tabs",{attrs:{centered:"",color:this.$accentColor},model:{value:t.projectsTabs,callback:function(e){t.projectsTabs=e},expression:"projectsTabs"}},[a("v-tab",{key:"web"},[t._v("Web")]),a("v-tab",{key:"destop"},[t._v("Escritorio")]),a("v-tab",{key:"mobile"},[t._v("Móvil")])],1),a("v-tabs-items",{style:t.$vuetify.theme.dark?"background-color:#121212":"",model:{value:t.projectsTabs,callback:function(e){t.projectsTabs=e},expression:"projectsTabs"}},[a("v-tab-item",{key:"web"},[a("Web",{attrs:{all:t.all}})],1),a("v-tab-item",{key:"desktop"},[a("Desktop",{attrs:{all:t.all}})],1),a("v-tab-item",{key:"mobile"},[a("Mobile",{attrs:{all:t.all}})],1)],1)],1)},N=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},t._l(t.arrayApps,(function(e,s){return null!=t.all&&(t.all?t.all:e.best)?a("v-col",{key:s,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:e}})],1):t._e()})),1)],1)},L=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto rounded-10",attrs:{"max-width":"400",elevation:"5"}},[a("v-dialog",{attrs:{"max-width":"1000","overlay-opacity":"0.9","overlay-color":"black"},model:{value:t.imgDialog,callback:function(e){t.imgDialog=e},expression:"imgDialog"}},[a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"end"}},[a("v-btn",{attrs:{icon:"","x-large":"",dark:""},on:{click:function(e){t.imgDialog=!1}}},[a("v-icon",[t._v("\n                    clear\n                ")])],1)],1),a("v-carousel",{staticClass:"pt-5 hola"},t._l(t.app.screens,(function(e,s){return a("v-carousel-item",{key:s},[a("div",{attrs:{align:"center"}},[a("v-img",{staticClass:"hola",attrs:{src:e,contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"white"}})],1)]},proxy:!0}],null,!0)})],1)])})),1)],1),a("v-carousel",{staticClass:"pt-5",attrs:{cycle:"",height:"200","show-arrows-on-hover":"","hide-delimiters":"",progress:"","progress-color":t.$accentColor}},t._l(t.app.screens,(function(e,s){return a("v-carousel-item",{key:s},[a("div",{attrs:{align:"center"}},[a("v-img",{staticClass:"carousel-imgs",attrs:{src:e,contain:""},on:{click:function(a){return t.imgClicked(e)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)]},proxy:!0}],null,!0)})],1)])})),1),a("v-card-title",[t._v(t._s(t.app.softwareName))]),a("v-card-text",[t._v("\n        "+t._s(t.app.description)+"\n        "),null!=t.app.externalURL?a("div",[a("a",{attrs:{href:t.app.externalURL,target:"Starfall"}},[t._v(t._s(t.app.hyperlinkText))])]):t._e()]),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"max-width":"250px",absolute:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[a("v-btn",t._g({attrs:{small:"",color:t.$accentColor,light:""}},s),[t._v("\n                Ver info. de desarrollo\n                ")])],1)]}}]),model:{value:t.developmentInfoPopup,callback:function(e){t.developmentInfoPopup=e},expression:"developmentInfoPopup"}},[a("v-card",{attrs:{color:t.$accentColor,light:""}},[a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"10"}},[a("v-card-title",{staticClass:"pb-0 pr-0"},[t._v("\n                            "+t._s(t.app.softwareName)+"\n                        ")])],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){t.developmentInfoPopup=!1}}},[a("v-icon",[t._v("\n                                clear\n                            ")])],1)],1)],1),a("v-card-text",{staticClass:"pb-0 pt-0"},[a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0"},[a("p",{staticClass:"title ma-0"},[t._v("Front-end")])]),a("v-col",{staticClass:"pa-0"},[a("p",{staticClass:"title ma-0"},[t._v("Back-end")])])],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Framework")]),a("v-list-item-subtitle",[t._v(t._s(t.app.frontendFramework))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Lenguaje")]),a("v-list-item-subtitle",[t._v(t._s(null==t.app.frontendLanguage?"Ninguno":t.app.frontendLanguage))])],1)],1)],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Framework")]),a("v-list-item-subtitle",[t._v(t._s(null==t.app.backendFramework?"Ninguno":t.app.backendFramework))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Lenguaje")]),a("v-list-item-subtitle",[t._v(t._s(null==t.app.backendLanguage?"Ninguno":t.app.backendLanguage))])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Database")]),a("v-list-item-subtitle",[t._v(t._s(null==t.app.backendDB?"Ninguno":t.app.backendDB))])],1)],1)],1)],1)],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold"})],1)],1)],1)],1)},F=[],O={props:{app:Object},data:function(){return{selectedImg:String,imgDialog:!1,developmentInfoPopup:!1}},methods:{imgClicked:function(t){this.selectedImg=t,this.imgDialog=!0}}},U=O,M=(a("7ca5"),a("b0af")),R=a("99d9"),B=a("5e66"),q=a("3e35"),G=a("62ad"),z=a("169a"),W=a("adda"),J=a("490a"),X=a("0fd9"),Y=Object(l["a"])(U,E,F,!1,null,"70fd0f5e",null),H=Y.exports;p()(Y,{VBtn:d["a"],VCard:M["a"],VCardText:R["b"],VCardTitle:R["c"],VCarousel:B["a"],VCarouselItem:q["a"],VCol:G["a"],VDialog:z["a"],VIcon:h["a"],VImg:W["a"],VListItem:f["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMenu:y["a"],VProgressCircular:J["a"],VRow:X["a"]});var Q={components:{ProjectCard:H},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web1.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web2.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web3.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web4.png","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/web-chefbooking-imgs/web5.png"],softwareName:"Chefbooking",description:"Chefbooking es un sitio web que recibe la descripción del hotel en lenguaje natural, se le aplica NLP y se procede a buscar hoteles mediante web scraping en la página de booking.com.",externalURL:null,hyperlinkText:null,frontendFramework:"Angular 6",frontendLanguage:"Typescript",backendFramework:".NET Framework",backendLanguage:"C#",backendDB:"Sql Server"}]}}},K=Q,Z=Object(l["a"])(K,D,L,!1,null,"52fa45d9",null),tt=Z.exports;p()(Z,{VCol:G["a"],VContainer:v["a"],VRow:X["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},t._l(t.arrayApps,(function(e,s){return null!=t.all&&(t.all?t.all:e.best)?a("v-col",{key:s,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:e}})],1):t._e()})),1)],1)},at=[],st={components:{ProjectCard:H},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop3.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop4.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop5.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop6.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop7.png"],softwareName:"ContabilidadFX",description:"ContabilidadFX es un programa que realiza los libros contables diarios, mayores y balance general, mediante una nomenclatura.",externalURL:null,hyperlinkText:null,frontendFramework:"JavaFX",frontendLanguage:"Java",backendFramework:null,backendLanguage:null,backendDB:"MySql"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop3.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-game-imgs/desktop4.PNG"],softwareName:"Sopa de letras",description:"Sopa de letras es un programa que permite jugar a sopa de letras, cuenta con niveles y animaciones para una mejor experiencia de usuario. Al completar una palabra se muestra su significado.",externalURL:null,hyperlinkText:null,frontendFramework:"JavaFX",frontendLanguage:"Java",backendFramework:null,backendLanguage:null,backendDB:".txt"}]}}},nt=st,it=Object(l["a"])(nt,et,at,!1,null,"6ad41047",null),ot=it.exports;p()(it,{VCol:G["a"],VContainer:v["a"],VRow:X["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},t._l(t.arrayApps,(function(e,s){return null!=t.all&&(t.all?t.all:e.best)?a("v-col",{key:s,attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{app:e}})],1):t._e()})),1)],1)},lt=[],ct={components:{ProjectCard:H},props:{all:Boolean},data:function(){return{arrayApps:[{best:!0,screens:["https://unknowntechnologies.github.io/EliminatorApp/assets/screen-1.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-2.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-3.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-4.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-5.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-6.png"],softwareName:"Eliminator",description:"Eliminator es una aplicación móvil que ayuda a las personas a eliminar toda la información de su celular mediante un mensaje de texto remoto.",externalURL:"https://unknowntechnologies.github.io/EliminatorApp",hyperlinkText:"Ver página web de la aplicación",frontendFramework:"Flutter",frontendLanguage:"Dart"},{best:!0,screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-1.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-2.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-3.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-4.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-5.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-6.jpg"],softwareName:"Cliente Notas",description:"Cliente Notas es una aplicación mejorada para poder ver las notas de la Mariano Galvez, es ajena a la Universidad. Es una aplicación no oficial.",externalURL:"https://play.google.com/store/apps/details?id=com.undefined_constant.notas_cliente",hyperlinkText:"Ver aplicación en la Play Store",frontendFramework:"Flutter",frontendLanguage:"Dart"}]}}},pt=ct,ut=(a("f39b"),Object(l["a"])(pt,rt,lt,!1,null,"1f4d3c06",null)),mt=ut.exports;p()(ut,{VCol:G["a"],VContainer:v["a"],VRow:X["a"]});var dt={components:{Web:tt,Desktop:ot,Mobile:mt},props:{all:Boolean},data:function(){return{projectsTabs:null}}},vt=dt,gt=a("71a3"),ht=a("c671"),bt=a("fe57"),ft=a("aac8"),kt=Object(l["a"])(vt,I,N,!1,null,"5e4516fe",null),yt=kt.exports;p()(kt,{VTab:gt["a"],VTabItem:ht["a"],VTabs:bt["a"],VTabsItems:ft["a"]});var _t={name:"Start",components:{ProjectsTabs:yt},data:function(){return{projectsTabs:null}}},wt=_t,Ct=a("6b53"),Vt=a("8dd9"),xt=Object(l["a"])(wt,$,T,!1,null,"7bca49d0",null),St=xt.exports;p()(xt,{VApp:u["a"],VBtn:d["a"],VCol:G["a"],VContainer:v["a"],VImg:W["a"],VResponsive:Ct["a"],VRow:X["a"],VSheet:Vt["a"]});var jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[s("v-container",{staticClass:"fill-height"},[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"display-2 text-center"},[t._v("Sobre mí")])])],1)],1)],1),s("section",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[s("h2",{class:t.$vuetify.breakpoint.smAndUp?"mb-4 display-1":"mb-4 headline"},[t._v("Mi nombre es Pierre Marco Vinicio Samayoa Morales.")]),s("p",{staticClass:"subtitle-1"},[t._v("Soy estudiante de Ingeniería en sistemas, tengo \n                        pénsum cerrado de la carrera y actualmente estoy \n                        cursando maestría en seguridad informática, tengo en mis planes graduarme como Ingeniero y también obtener título de master.\n                    ")]),s("p",{staticClass:"mb-5"},[t._v("La programación para mi es un hobbie no un trabajo, es algo que me gusta demasiado y disfruto hacer.\n                            Aunque hay momentos en los que algo parece no tener solución, con un poco de esfuerzo y autodidactismo casí todo se puede lograr.\n                            "),s("br"),s("br"),t._v("\n                            Profundizando más en mi forma de ser, soy proactivo, me gusta ser autodidacta y siempre priorizo \n                            ofrecer funcionalidades más atractivas visualmente, eficientes y fáciles de usar.\n                            Soy un entusiasta del sistema de diseño de Material de Google (Material Design).\n                            "),s("br"),s("br"),t._v("\n                            La programación es vida.\n                    ")])]),s("v-col",{attrs:{cols:"12",sm:"12",md:"5","offset-md":"1"}},[s("v-card",{attrs:{ripple:""}},[s("v-img",{attrs:{src:a("a46c")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[s("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[s("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)],1)],1),s("v-sheet",{attrs:{"min-height":"200px",height:"10vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[s("v-container",{staticClass:"fill-height"},[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("h1",{class:t.$vuetify.breakpoint.smAndUp?"display-1 text-center":"headline text-center"},[t._v("\n                        Conocimientos y habilidades\n                    ")])])],1)],1)],1),s("section",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[s("v-card",{attrs:{flat:"",color:"transparent"}},[s("v-card-title",[t._v("Servicio y mantenimiento Azure")]),s("v-card-subtitle",{staticClass:"pt-3"},[t._v("\n                            Creación, utilización y mantenimiento de servicios Azure \n                            que son esenciales para cualquier infraestructura tecnológica.\n                        ")])],1)],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[s("v-card",{attrs:{flat:"",color:"transparent"}},[s("v-card-title",[t._v("Diseño y programación")]),s("v-card-subtitle",{staticClass:"pt-3"},[t._v("\n                            Programación de software de alto nivel, aplicando patrones de diseño \n                            para una mejor mantenibilidad y escalabilidad. Diseño de interfaces de usuario\n                            intuitivas y modernas para la mejor experiencia de usuario.\n                            Abstracción de lógica de negocio para generación de Bases de datos eficientes.\n                        ")])],1)],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[s("v-card",{attrs:{flat:"",color:"transparent"}},[s("v-card-title",[t._v("Gestión de proyectos")]),s("v-card-subtitle",{staticClass:"pt-3"},[t._v("\n                            Gestión de proyectos reponsable, equitativa y eficiente basada en metodologías de \n                            desarrollo de software como Rational Unified Process (RUP), SCRUM o Extreme programming (XP) \n                            en casos de alta urgencia.\n                        ")])],1)],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[s("v-card",{attrs:{flat:"",color:"transparent"}},[s("v-card-title",[t._v("Análisis de sistemas")]),s("v-card-subtitle",{staticClass:"pt-3"},[t._v("\n                            Análisis de sistemas para una mejor implementación de soluciones, reduciendo el costo \n                            a favor de tiempo/dinero haciéndolos más eficientes.\n                        ")])],1)],1)],1)],1)],1),s("v-container",[s("v-row",t._l(t.frameworks_languages,(function(e,a){return s("v-col",{key:a,staticClass:"mb-10",attrs:{cols:"6",md:"3",sm:"4",xs:"6"}},[s("v-img",{staticClass:"mb-4",attrs:{src:e.img,height:"60",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[s("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)]},proxy:!0}],null,!0)}),s("v-row",{attrs:{justify:"center"}},[s("p",{staticClass:"display-2 font-weight-bold mb-2"},[t._v(t._s(e.score))])]),s("v-row",{attrs:{justify:"center"}},[s("p",{staticClass:"text-uppercase"},[t._v(t._s(e.name))])])],1)})),1)],1)],1)},Pt=[],At={data:function(){return{frameworks_languages:[{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/flutter.svg",name:"Flutter",score:100},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/angular.png",name:"Angular",score:80},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/vuejs.png",name:"Vuejs",score:90},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/ionic.png",name:"Ionic",score:80},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/java.png",name:"Java",score:80},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/net.png",name:".net (c#)",score:80},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/php.png",name:"Php",score:70},{img:"https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/frameworks-languages-imgs/qt_creator.svg",name:"Qt Creator (c++)",score:70}]}}},$t=At,Tt=(a("ea41"),Object(l["a"])($t,jt,Pt,!1,null,null,null)),It=Tt.exports;p()(Tt,{VApp:u["a"],VCard:M["a"],VCardSubtitle:R["a"],VCardTitle:R["c"],VCol:G["a"],VContainer:v["a"],VImg:W["a"],VProgressCircular:J["a"],VRow:X["a"],VSheet:Vt["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Mis proyectos")])])],1)],1)],1),a("section",[a("ProjectsTabs",{attrs:{all:!0}})],1)],1)},Dt=[],Lt={components:{ProjectsTabs:yt}},Et=Lt,Ft=Object(l["a"])(Et,Nt,Dt,!1,null,"cf91538a",null),Ot=Ft.exports;p()(Ft,{VApp:u["a"],VCol:G["a"],VContainer:v["a"],VRow:X["a"],VSheet:Vt["a"]});var Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Contacto")])])],1)],1)],1),a("section",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-row",{staticClass:"mb-5 mx-0",attrs:{justify:"center"}},[a("v-icon",{attrs:{size:"100"}},[t._v("\n                            email\n                        ")])],1),a("v-row",{attrs:{justify:"center"}},[a("p",{staticClass:"headline"},[t._v("\n                            vinicio00097@gmail.com\n                        ")])])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-row",{staticClass:"mb-5 mx-0",attrs:{justify:"center"}},[a("v-icon",{attrs:{size:"100"}},[t._v("\n                            phone\n                        ")])],1),a("v-row",{attrs:{justify:"center"}},[a("p",{staticClass:"headline"},[t._v("\n                            4607 6292\n                        ")])])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-row",{staticClass:"mb-5 mx-0",attrs:{justify:"center"}},[a("v-icon",{attrs:{size:"100"}},[t._v("\n                            add_ic_call\n                        ")])],1),a("v-row",{attrs:{justify:"center"}},[a("p",{staticClass:"headline"},[t._v("\n                            5273 9233\n                        ")])])],1)],1)],1)],1)],1)},Mt=[],Rt={},Bt=Rt,qt=Object(l["a"])(Bt,Ut,Mt,!1,null,"559f1f71",null),Gt=qt.exports;p()(qt,{VApp:u["a"],VCol:G["a"],VContainer:v["a"],VIcon:h["a"],VRow:X["a"],VSheet:Vt["a"]});var zt=a("8c4f");s["a"].config.productionTip=!1,s["a"].use(zt["a"]);var Wt=new zt["a"]({base:"/",routes:[{path:"/",redirect:"Inicio"},{path:"/Inicio",component:St,name:"Inicio"},{path:"/Acerca",component:It,name:"Acerca"},{path:"/Proyectos",component:Ot,name:"Proyectos"},{path:"/Contacto",component:Gt,name:"Contacto"}]});new s["a"]({vuetify:A,router:Wt,render:function(t){return t(j)},beforeCreate:function(){this.$vuetify.theme.dark=!0,s["a"].prototype.$accentColor="amber lighten-1"}}).$mount("#app")},"7ca5":function(t,e,a){"use strict";var s=a("50e3"),n=a.n(s);n.a},a46c:function(t,e,a){t.exports=a.p+"img/about.69dbbf5d.jpg"},a54f:function(t,e,a){},ac6d:function(t,e,a){},de2b:function(t,e,a){t.exports=a.p+"img/hola.5d224e93.jpg"},e42c:function(t,e,a){"use strict";var s=a("f1fb"),n=a.n(s);n.a},ea41:function(t,e,a){"use strict";var s=a("ac6d"),n=a.n(s);n.a},f1fb:function(t,e,a){},f39b:function(t,e,a){"use strict";var s=a("a54f"),n=a.n(s);n.a}});
//# sourceMappingURL=app.71243161.js.map