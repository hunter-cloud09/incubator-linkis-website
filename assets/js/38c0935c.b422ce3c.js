"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8375],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},333:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"EngineConnManager Design",sidebar_position:3},c=void 0,s={unversionedId:"architecture/computation_governance_services/engine/engine_conn_manager",id:"architecture/computation_governance_services/engine/engine_conn_manager",isDocsHomePage:!1,title:"EngineConnManager Design",description:"EngineConnManager architecture design",source:"@site/docs/architecture/computation_governance_services/engine/engine_conn_manager.md",sourceDirName:"architecture/computation_governance_services/engine",slug:"/architecture/computation_governance_services/engine/engine_conn_manager",permalink:"/docs/next/architecture/computation_governance_services/engine/engine_conn_manager",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/computation_governance_services/engine/engine_conn_manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"EngineConnManager Design",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EngineConn Design",permalink:"/docs/next/architecture/computation_governance_services/engine/engine_conn"},next:{title:"EngineConnPlugin (ECP) Design",permalink:"/docs/next/architecture/computation_governance_services/engine/engine_conn_plugin"}},u=[{value:"EngineConnManager architecture design",id:"engineconnmanager-architecture-design",children:[{value:"ECM architecture",id:"ecm-architecture",children:[]},{value:"Introduction to the second-level module",id:"introduction-to-the-second-level-module",children:[]}]}],g={toc:u};function p(e){var n=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"engineconnmanager-architecture-design"},"EngineConnManager architecture design"),(0,i.kt)("p",null,"EngineConnManager (ECM): EngineConn's manager, provides engine lifecycle management, and reports load information and its own health status to RM."),(0,i.kt)("h3",{id:"ecm-architecture"},"ECM architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(290).Z})),(0,i.kt)("h3",{id:"introduction-to-the-second-level-module"},"Introduction to the second-level module"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linkis-engineconn-linux-launch")),(0,i.kt)("p",null,"The engine launcher, whose core class is LinuxProcessEngineConnLauch, is used to provide instructions for executing commands."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linkis-engineconn-manager-core")),(0,i.kt)("p",null,"The core module of ECM includes the top-level interface of ECM health report and EngineConn health report function, defines the relevant indicators of ECM service, and the core method of constructing EngineConn process."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core top-level interface/class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineConn"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the properties of EngineConn, including methods and parameters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnLaunch"),(0,i.kt)("td",{parentName:"tr",align:null},"Define the start method and stop method of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECMEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"ECM related events are defined")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECMEventListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Defined ECM related event listeners")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECMEventListenerBus"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the listener bus of ECM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECMMetrics"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the indicator information of ECM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECMHealthReport"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the health report information of ECM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NodeHealthReport"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the health report information of the node")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linkis-engineconn-manager-server")),(0,i.kt)("p",null,"The server side of ECM defines top-level interfaces and implementation classes such as ECM health information processing service, ECM indicator information processing service, ECM registration service, EngineConn start service, EngineConn stop service, EngineConn callback service, etc., which are mainly used for ECM to itself and EngineConn Life cycle management, health information reporting, heartbeat sending, etc.\nCore Service and Features module are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core service"),(0,i.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnLaunchService"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains core methods for generating EngineConn and starting the process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BmlResourceLocallizationService"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to download BML engine related resources and generate localized file directory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECMHealthService"),(0,i.kt)("td",{parentName:"tr",align:null},"Report your own healthy heartbeat to AM regularly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECMMetricsService"),(0,i.kt)("td",{parentName:"tr",align:null},"Report your own indicator status to AM regularly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnKillSerivce"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides related functions to stop the engine")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnListService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide caching and management engine related functions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnCallBackService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the function of the callback engine")))))}p.isMDXComponent=!0},290:function(e,n,t){n.Z=t.p+"assets/images/ECM-01-ce0cee2e82cc8824797b05bca5f23d1a.png"}}]);