(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Vinicio_Samayoa/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0667":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:t.toolbarColor,"elevate-on-scroll":""}},[this.$vuetify.theme.dark?t._e():a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("kbd",[t._v(t._s(t.shortName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e(),this.globalWidth>=470?a("kbd",[t._v(t._s(t.myName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e()]),this.$vuetify.theme.dark?a("v-toolbar-title",{staticClass:"display-1"},[this.globalWidth<470?a("code",[t._v(t._s(t.shortName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e(),this.globalWidth>=470?a("code",[t._v(t._s(t.myName)),a("div",{staticClass:"animate-flicker"},[t._v("▂")])]):t._e()]):t._e(),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("div",[a("v-btn",{attrs:{text:"",to:"Inicio",link:""}},[t._v("\n        Inicio\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Acerca",link:""}},[t._v("\n        Acerca de mi\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Proyectos",link:""}},[t._v("\n        Proyectos\n      ")]),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{text:"",to:"Contacto",link:""}},[t._v("\n        Contacto\n      ")])],1):t._e(),a("div",{staticClass:"pr-2",staticStyle:{display:"inline"}}),a("v-btn",{attrs:{icon:""},on:{click:t.themeSwap}},[a("v-icon",[t._v(t._s(this.iconString))])],1),t.$vuetify.breakpoint.smAndDown?a("v-menu",{attrs:{left:"",bottom:"",transition:"scale-transition",origin:"top right"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[a("v-list",{attrs:{color:this.$accentColor,light:""}},[a("v-list-item",{attrs:{link:"",to:"Inicio"}},[a("v-list-item-title",[t._v("Inicio")])],1),a("v-list-item",{attrs:{to:"Acerca",link:""}},[a("v-list-item-title",[t._v("Acerca de mi")])],1),a("v-list-item",{attrs:{to:"Proyectos",link:""}},[a("v-list-item-title",[t._v("Proyectos")])],1),a("v-list-item",{attrs:{to:"Contacto",link:""}},[a("v-list-item-title",[t._v("Contacto")])],1)],1)],1):t._e()],1),a("v-content",{staticClass:"pa-0 ma-0"},[a("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("transition",{attrs:{name:"scroll-x-transition",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},s=[],o={name:"App",data:function(){return{globalWidth:window.innerWidth,myName:"Vinicio Samayoa",shortName:"V.S.",toolbarColor:"transparent",isDark:!0,iconString:""}},methods:{onScroll:function(){window.scrollY>20?this.isDark?this.toolbarColor="dark":this.toolbarColor="white":this.toolbarColor="transparent"},themeSwap:function(){this.isDark=!this.isDark,this.isDark?(this.iconString="mdi-brightness-7",window.scrollY>20?this.toolbarColor="dark":this.toolbarColor="transparent"):(this.iconString="mdi-brightness-6",window.scrollY>20?this.toolbarColor="white":this.toolbarColor="transparent"),this.$vuetify.theme.dark=this.isDark}},mounted:function(){var t=this;this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6",window.onresize=function(){t.globalWidth=window.innerWidth}},beforeCreate:function(){this.isDark=this.$vuetify.theme.dark,this.isDark?this.iconString="mdi-brightness-7":this.iconString="mdi-brightness-6"}},r=o,l=(a("71cf"),a("2877")),c=a("6544"),p=a.n(c),d=a("7496"),u=a("40dc"),v=a("8336"),h=a("a523"),m=a("a75b"),g=a("132d"),b=a("8860"),f=a("da13"),k=a("5d23"),y=a("e449"),w=a("2fa4"),_=a("2a7f"),C=a("269a"),V=a.n(C),x=a("f977"),S=Object(l["a"])(r,n,s,!1,null,"09038f16",null),j=S.exports;p()(S,{VApp:d["a"],VAppBar:u["a"],VBtn:v["a"],VContainer:h["a"],VContent:m["a"],VIcon:g["a"],VList:b["a"],VListItem:f["a"],VListItemTitle:k["c"],VMenu:y["a"],VSpacer:w["a"],VToolbarTitle:_["a"]}),V()(S,{Scroll:x["b"]});var L=a("f309");i["a"].use(L["a"]);var $=new L["a"]({}),T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-img",{attrs:{"lazy-src":a("de2b"),src:a("de2b"),gradient:t.$vuetify.theme.dark?"to top, rgba(30, 30, 30, 0.75), rgba(30, 30, 30, 0.75)":"to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)",position:"center center",transition:"fade-transition",height:t.$vuetify.breakpoint.smAndUp?"70vh":"100vh"}},[i("v-container",{class:[t.$vuetify.breakpoint.smAndUp?"px-12 fill-height":"fill-height"],attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("h1",{class:[t.$vuetify.breakpoint.smAndUp?"text-uppercase font-weight-bold mb-4 display-3 text--color-black":"text-uppercase font-weight-bold mb-4 display-1"]},[t._v("Hola, soy Vinicio Samayoa")]),i("div",{class:[t.$vuetify.breakpoint.smAndUp?"mb-4 display-2 font-weight-light":"mb-4 headline"]},[t._v("Soy desarrollador de software")]),i("v-responsive",{staticClass:"mb5",attrs:{"max-width":"600"}},[t._v("\n              Vivir el momento y disfrutar es mejor que guardarlo en un dispositivo móvil y alimentar tu apariencia social.\n            ")]),i("br"),i("v-btn",{attrs:{color:this.$accentColor,light:"",to:"Contacto",link:""}},[t._v("Contratar")])],1)],1)],1)],1),i("v-row",{staticClass:"pt-10 ma-0"}),i("v-sheet",{attrs:{"min-height":t.$vuetify.breakpoint.smAndUp?"200px":"100px",height:"5vh"}},[i("v-container",{staticClass:"fill-height"},[i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("h1",{class:[t.$vuetify.breakpoint.smAndUp?"display-1 text-center":"headline text-center"]},[t._v("Mejores proyectos")])])],1)],1)],1),i("v-tabs",{attrs:{centered:"",color:this.$accentColor},model:{value:t.projectsTabs,callback:function(e){t.projectsTabs=e},expression:"projectsTabs"}},[i("v-tab",{key:"web"},[t._v("Web")]),i("v-tab",{key:"destop"},[t._v("Escritorio")]),i("v-tab",{key:"mobile"},[t._v("Móvil")])],1),i("v-tabs-items",{style:t.$vuetify.theme.dark?"background-color:#121212":"",model:{value:t.projectsTabs,callback:function(e){t.projectsTabs=e},expression:"projectsTabs"}},[i("v-tab-item",{key:"web"},[i("Web")],1),i("v-tab-item",{key:"desktop"},[i("Desktop")],1),i("v-tab-item",{key:"mobile"},[i("Mobile")],1)],1)],1)},N=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},[a("v-col",{attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("v-card",{staticClass:"mx-auto rounded-0",attrs:{"max-width":"400",elevation:"4",hover:""}},[a("v-carousel",{attrs:{cycle:"",height:"200","hide-delimiters":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,i){return a("v-carousel-item",{key:i},[a("v-sheet",{attrs:{color:t.colors[i],height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"display-3"},[t._v(t._s(e)+" Slide")])])],1)],1)})),1),a("v-card-title",[t._v("Hola titulo")]),a("v-card-subtitle",[t._v("Hola subtitulo")]),a("v-card-text",[t._v("holaaa este es un texto")])],1)],1)],1)],1)},F=[],P={data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]}}},D=P,R=a("b0af"),E=a("99d9"),O=a("5e66"),U=a("3e35"),I=a("62ad"),M=a("0fd9"),B=a("8dd9"),W=Object(l["a"])(D,A,F,!1,null,"59468bfc",null),G=W.exports;p()(W,{VCard:R["a"],VCardSubtitle:E["a"],VCardText:E["b"],VCardTitle:E["c"],VCarousel:O["a"],VCarouselItem:U["a"],VCol:I["a"],VContainer:h["a"],VRow:M["a"],VSheet:B["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},[a("v-col",{attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{screens:t.app1.screens,softwareName:t.app1.softwareName,description:t.app1.description,externalURL:t.app1.externalURL,hyperlinkText:t.app1.hyperlinkText,frontendFramework:t.app1.frontendFramework,frontendLanguage:t.app1.frontendLanguage,backendDB:t.app1.backendDB}})],1)],1)],1)},z=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto rounded-10",attrs:{"max-width":"400",elevation:"5"}},[a("v-carousel",{staticClass:"pt-5",attrs:{cycle:"",height:"200","show-arrows-on-hover":"","hide-delimiters":""}},t._l(t.screens,(function(t,e){return a("v-carousel-item",{key:e},[a("div",{attrs:{align:"center"}},[a("img",{staticClass:"carousel-imgs",attrs:{src:t}})])])})),1),a("v-card-title",[t._v(t._s(t.softwareName))]),a("v-card-text",[t._v("\n        "+t._s(t.description)+"\n        "),null!=t.externalURL?a("div",[a("a",{attrs:{href:t.externalURL,target:"Starfall"}},[t._v(t._s(t.hyperlinkText))])]):t._e()]),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"max-width":"300px",absolute:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[a("v-btn",t._g({attrs:{small:"",color:t.$accentColor,light:""}},i),[t._v("\n                Ver info. de desarrollo\n                ")])],1)]}}])},[a("v-card",{attrs:{color:t.$accentColor,light:""}},[a("v-card-title",[t._v("\n                "+t._s(t.softwareName)+"\n            ")]),a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"title ma-0"},[t._v("Front-end")])]),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Framework")]),a("v-list-item-subtitle",[t._v(t._s(t.frontendFramework))])],1)],1)],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Lenguaje")]),a("v-list-item-subtitle",[t._v(t._s(t.frontendLanguage))])],1)],1)],1)],1),a("v-card-text",{staticClass:"pb-0 pt-0"},[a("p",{staticClass:"title ma-0"},[t._v("Back-end")])]),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Framework")]),a("v-list-item-subtitle",[t._v(t._s(null==t.backendFramework?"Ninguno":t.backendFramework))])],1)],1)],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Lenguaje")]),a("v-list-item-subtitle",[t._v(t._s(null==t.backendLanguage?"Ninguno":t.backendLanguage))])],1)],1)],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("DB")]),a("v-list-item-subtitle",[t._v(t._s(null==t.backendDB?"Ninguna":t.backendDB))])],1)],1)],1)],1)],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold"})],1)],1)],1)],1)},H=[],X={props:{screens:[],softwareName:String,description:String,externalURL:String,hyperlinkText:String,frontendFramework:String,frontendLanguage:String,backendFramework:String,backendLanguage:String,backendDB:String}},Y=X,K=(a("9c3b"),Object(l["a"])(Y,J,H,!1,null,"19f643e6",null)),Q=K.exports;p()(K,{VBtn:v["a"],VCard:R["a"],VCardText:E["b"],VCardTitle:E["c"],VCarousel:O["a"],VCarouselItem:U["a"],VCol:I["a"],VListItem:f["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMenu:y["a"],VRow:M["a"]});var Z={components:{ProjectCard:Q},data:function(){return{app1:{screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop1.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop2.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop3.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop4.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop5.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop6.PNG","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/desktop-contabilidad-imgs/desktop7.png"],softwareName:"ContabilidadFX",description:"ContabilidadFX es un programa que realiza los libros contables diarios, mayores y balance general, mediante una nomenclatura.",externalURL:null,hyperlinkText:null,frontendFramework:"JavaFX",frontendLanguage:"Java",backendFramework:null,backendLanguage:null,backendDB:"MySql"}}}},tt=Z,et=Object(l["a"])(tt,q,z,!1,null,"56767ae0",null),at=et.exports;p()(et,{VCol:I["a"],VContainer:h["a"],VRow:M["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},[a("v-col",{attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{screens:t.app1.screens,softwareName:t.app1.softwareName,description:t.app1.description,externalURL:t.app1.externalURL,hyperlinkText:t.app1.hyperlinkText,frontendFramework:t.app1.frontendFramework,frontendLanguage:t.app1.frontendLanguage}})],1),a("v-col",{attrs:{xs:"12",sm:"6",md:"4",lg:"3",xl:"2",cols:"12"}},[a("ProjectCard",{attrs:{screens:t.app2.screens,softwareName:t.app2.softwareName,description:t.app2.description,externalURL:t.app2.externalURL,hyperlinkText:t.app2.hyperlinkText,frontendFramework:t.app2.frontendFramework,frontendLanguage:t.app2.frontendLanguage}})],1)],1)],1)},nt=[],st={components:{ProjectCard:Q},data:function(){return{app1:{screens:["https://unknowntechnologies.github.io/EliminatorApp/assets/screen-1.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-2.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-3.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-4.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-5.png","https://unknowntechnologies.github.io/EliminatorApp/assets/screen-6.png"],softwareName:"Eliminator",description:"Eliminator es una aplicación móvil que ayuda a las personas a eliminar toda la información de su celular mediante un mensaje de texto.",externalURL:"https://unknowntechnologies.github.io/EliminatorApp",hyperlinkText:"Ver página web de la aplicación",frontendFramework:"Flutter",frontendLanguage:"Dart"},app2:{screens:["https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-1.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-2.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-3.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-4.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-5.jpg","https://unknowntechnologies.github.io/Vinicio_Samayoa/assets/notas-app-imgs/notas-6.jpg"],softwareName:"Cliente Notas",description:"Cliente Notas es una aplicación mejorada para poder ver las notas de la Mariano Galvez, es ajena a la Universidad. Es una aplicación no oficial.",externalURL:"https://play.google.com/store/apps/details?id=com.undefined_constant.notas_cliente",hyperlinkText:"Ver aplicación en la Play Store",frontendFramework:"Flutter",frontendLanguage:"Dart"}}}},ot=st,rt=(a("bcb4"),Object(l["a"])(ot,it,nt,!1,null,"cd3cfff8",null)),lt=rt.exports;p()(rt,{VCol:I["a"],VContainer:h["a"],VRow:M["a"]});var ct={name:"Start",components:{Web:G,Desktop:at,Mobile:lt},data:function(){return{projectsTabs:null}}},pt=ct,dt=a("adda"),ut=a("6b53"),vt=a("71a3"),ht=a("c671"),mt=a("fe57"),gt=a("aac8"),bt=Object(l["a"])(pt,T,N,!1,null,"4e8122ec",null),ft=bt.exports;p()(bt,{VApp:d["a"],VBtn:v["a"],VCol:I["a"],VContainer:h["a"],VImg:dt["a"],VResponsive:ut["a"],VRow:M["a"],VSheet:B["a"],VTab:vt["a"],VTabItem:ht["a"],VTabs:mt["a"],VTabsItems:gt["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Acerca de mi")])])],1)],1)],1)],1)},yt=[],wt={},_t=wt,Ct=Object(l["a"])(_t,kt,yt,!1,null,"0b288716",null),Vt=Ct.exports;p()(Ct,{VApp:d["a"],VCol:I["a"],VContainer:h["a"],VRow:M["a"],VSheet:B["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Mis proyectos")])])],1)],1)],1)],1)},St=[],jt={},Lt=jt,$t=Object(l["a"])(Lt,xt,St,!1,null,"ca683c44",null),Tt=$t.exports;p()($t,{VApp:d["a"],VCol:I["a"],VContainer:h["a"],VRow:M["a"],VSheet:B["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-sheet",{attrs:{"min-height":"300px",height:"25vh",color:t.$vuetify.theme.dark?"":"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 text-center"},[t._v("Contacto")])])],1)],1)],1)],1)},At=[],Ft={},Pt=Ft,Dt=Object(l["a"])(Pt,Nt,At,!1,null,"2c0dd669",null),Rt=Dt.exports;p()(Dt,{VApp:d["a"],VCol:I["a"],VContainer:h["a"],VRow:M["a"],VSheet:B["a"]});var Et=a("8c4f");i["a"].config.productionTip=!1,i["a"].use(Et["a"]);var Ot=new Et["a"]({base:"/",routes:[{path:"/",redirect:"Inicio"},{path:"/Inicio",component:ft,name:"Inicio"},{path:"/Acerca",component:Vt,name:"Acerca"},{path:"/Proyectos",component:Tt,name:"Proyectos"},{path:"/Contacto",component:Rt,name:"Contacto"}]});new i["a"]({vuetify:$,router:Ot,render:function(t){return t(j)},beforeCreate:function(){this.$vuetify.theme.dark=!0,i["a"].prototype.$accentColor="amber lighten-1"}}).$mount("#app")},"71cf":function(t,e,a){"use strict";var i=a("0667"),n=a.n(i);n.a},"9aa4":function(t,e,a){},"9c3b":function(t,e,a){"use strict";var i=a("9aa4"),n=a.n(i);n.a},bcb4:function(t,e,a){"use strict";var i=a("f0da"),n=a.n(i);n.a},de2b:function(t,e,a){t.exports=a.p+"img/hola.5d224e93.jpg"},f0da:function(t,e,a){}});
//# sourceMappingURL=app.b3ddb412.js.map