"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9748],{3905:function(e,n,i){i.d(n,{Zo:function(){return u},kt:function(){return m}});var a=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=a.createContext({}),l=function(e){var n=a.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(i),m=t,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||r;return i?a.createElement(d,o(o({ref:n},u),{},{components:i})):a.createElement(d,o({ref:n},u))}));function m(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=i.length,o=new Array(r);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},6904:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=i(7462),t=i(3366),r=(i(7294),i(3905)),o=["components"],c={title:"Overview",sidebar_position:1},s="LinkisManager Architecture Design",l={unversionedId:"architecture/computation_governance_services/linkis_manager/overview",id:"architecture/computation_governance_services/linkis_manager/overview",isDocsHomePage:!1,title:"Overview",description:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an independent microservice of Linkis, LinkisManager provides AppManager (application management), ResourceManager (resource management), and LabelManager (label management) capabilities. It can support multi-active deployment and has the characteristics of high availability and easy expansion.",source:"@site/docs/architecture/computation_governance_services/linkis_manager/overview.md",sourceDirName:"architecture/computation_governance_services/linkis_manager",slug:"/architecture/computation_governance_services/linkis_manager/overview",permalink:"/docs/next/architecture/computation_governance_services/linkis_manager/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/docs/architecture/computation_governance_services/linkis_manager/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EngineConnPlugin (ECP) Design",permalink:"/docs/next/architecture/computation_governance_services/engine/engine_conn_plugin"},next:{title:"App Manager",permalink:"/docs/next/architecture/computation_governance_services/linkis_manager/app_manager"}},u=[{value:"1. Architecture Diagram",id:"1-architecture-diagram",children:[{value:"Noun explanation",id:"noun-explanation",children:[]}]},{value:"2. Introduction to the second-level module",id:"2-introduction-to-the-second-level-module",children:[{value:"2.1. Application management module linkis-application-manager",id:"21-application-management-module-linkis-application-manager",children:[]},{value:"2. Label management module linkis-label-manager",id:"2-label-management-module-linkis-label-manager",children:[]},{value:"4. Monitoring module linkis-manager-monitor",id:"4-monitoring-module-linkis-manager-monitor",children:[]}]}],g={toc:u};function p(e){var n=e.components,c=(0,t.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},g,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkismanager-architecture-design"},"LinkisManager Architecture Design"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As an independent microservice of Linkis, LinkisManager provides AppManager (application management), ResourceManager (resource management), and LabelManager (label management) capabilities. It can support multi-active deployment and has the characteristics of high availability and easy expansion.  "),(0,r.kt)("h2",{id:"1-architecture-diagram"},"1. Architecture Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture Diagram",src:i(9315).Z}),"  "),(0,r.kt)("h3",{id:"noun-explanation"},"Noun explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EngineConnManager (ECM): Engine Manager, used to start and manage engines."),(0,r.kt)("li",{parentName:"ul"},"EngineConn (EC): Engine connector, used to connect the underlying computing engine."),(0,r.kt)("li",{parentName:"ul"},"ResourceManager (RM): Resource Manager, used to manage node resources.")),(0,r.kt)("h2",{id:"2-introduction-to-the-second-level-module"},"2. Introduction to the second-level module"),(0,r.kt)("h3",{id:"21-application-management-module-linkis-application-manager"},"2.1. Application management module linkis-application-manager"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","AppManager is used for unified scheduling and management of engines:",(0,r.kt)("br",{parentName:"p"}),"\n","| Core Interface/Class | Main Function |\n|------------|--------|\n|EMInfoService | Defines EngineConnManager information query and modification functions |\n|EMRegisterService| Defines EngineConnManager registration function |\n|EMEngineService | Defines EngineConnManager's creation, query, and closing functions of EngineConn |\n|EngineAskEngineService | Defines the function of querying EngineConn |\n|EngineConnStatusCallbackService | Defines the function of processing EngineConn status callbacks |\n|EngineCreateService | Defines the function of creating EngineConn |\n|EngineInfoService | Defines EngineConn query function |\n|EngineKillService | Defines the stop function of EngineConn |\n|EngineRecycleService | Defines the recycling function of EngineConn |\n|EngineReuseService | Defines the reuse function of EngineConn |\n|EngineStopService | Defines the self-destruct function of EngineConn |\n|EngineSwitchService | Defines the engine switching function |\n|AMHeartbeatService | Provides EngineConnManager and EngineConn node heartbeat processing functions |"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The process of applying for an engine through AppManager is as follows:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"AppManager",src:i(334).Z}),"  "),(0,r.kt)("h3",{id:"2-label-management-module-linkis-label-manager"},"2. Label management module linkis-label-manager"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","LabelManager provides label management and analysis capabilities.",(0,r.kt)("br",{parentName:"p"}),"\n","| Core Interface/Class | Main Function |\n|------------|--------|\n|LabelService | Provides the function of adding, deleting, modifying and checking labels |\n|ResourceLabelService | Provides resource label management functions |\n|UserLabelService | Provides user label management functions |",(0,r.kt)("br",{parentName:"p"}),"\n","The LabelManager architecture diagram is as follows:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"ResourceManager",src:i(1916).Z}),"  "),(0,r.kt)("h3",{id:"4-monitoring-module-linkis-manager-monitor"},"4. Monitoring module linkis-manager-monitor"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Monitor provides the function of node status monitoring."))}p.isMDXComponent=!0},334:function(e,n,i){n.Z=i.p+"assets/images/AppManager-01-b3e8fc5e41d7bdca31d42da47ccacbcd.png"},9315:function(e,n,i){n.Z=i.p+"assets/images/LinkisManager-01-41eca880a2b8e34825a070f14b145dba.png"},1916:function(e,n,i){n.Z=i.p+"assets/images/ResourceManager-01-8248d7a32c20780dcae31297ef3ace52.png"}}]);