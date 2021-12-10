"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9267],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return p}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),v=u(t),p=i,m=v["".concat(s,".").concat(p)]||v[p]||l[p]||o;return t?n.createElement(m,c(c({ref:r},d),{},{components:t})):n.createElement(m,c({ref:r},d))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=v;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8754:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return v}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),c=["components"],a={title:"Overview",sidebar_position:1},s=void 0,u={unversionedId:"architecture/microservice_governance_services/overview",id:"version-1.0.2/architecture/microservice_governance_services/overview",isDocsHomePage:!1,title:"Overview",description:"Background",source:"@site/versioned_docs/version-1.0.2/architecture/microservice_governance_services/overview.md",sourceDirName:"architecture/microservice_governance_services",slug:"/architecture/microservice_governance_services/overview",permalink:"/docs/architecture/microservice_governance_services/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/architecture/microservice_governance_services/overview.md",tags:[],version:"1.0.2",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"CS Search Architecture",permalink:"/docs/architecture/public_enhancement_services/context_service/context_service_search"},next:{title:"Gateway Design",permalink:"/docs/architecture/microservice_governance_services/gateway"}},d=[{value:"<strong>Background</strong>",id:"background",children:[]},{value:"<strong>Architecture diagram</strong>",id:"architecture-diagram",children:[]},{value:"<strong>Architecture Introduction</strong>",id:"architecture-introduction",children:[]}],l={toc:d};function v(e){var r=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},(0,o.kt)("strong",{parentName:"h2"},"Background")),(0,o.kt)("p",null,"Microservice governance includes three main microservices: Gateway, Eureka and Open Feign.\nIt is used to solve Linkis's service discovery and registration, unified gateway, request forwarding, inter-service communication, load balancing and other issues.\nAt the same time, Linkis 1.0 will also provide the supporting for Nacos; the entire Linkis is a complete microservice architecture and each business progress requires multiple microservices to complete."),(0,o.kt)("h2",{id:"architecture-diagram"},(0,o.kt)("strong",{parentName:"h2"},"Architecture diagram")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(8518).Z})),(0,o.kt)("h2",{id:"architecture-introduction"},(0,o.kt)("strong",{parentName:"h2"},"Architecture Introduction")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Linkis Gateway",(0,o.kt)("br",{parentName:"p"}),"\n","As the gateway entrance of Linkis, Linkis Gateway is mainly responsible for request forwarding, user access authentication and WebSocket communication.\nThe Gateway of Linkis 1.0 also added Label-based routing and forwarding capabilities.\nA WebSocket routing and forwarder is implemented by Spring Cloud Gateway in Linkis, it is used to establish a WebSocket connection with the client.\nAfter the connection is established, it will automatically analyze the client's WebSocket request and determine which backend microservice the request should be forward to through the rules,\nthen the request is forwarded to the corresponding backend microservice instance.",(0,o.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0",(0,o.kt)("a",{parentName:"p",href:"Gateway.md"},"Linkis Gateway"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Linkis Eureka",(0,o.kt)("br",{parentName:"p"}),"\n","Mainly responsible for service registration and discovery. Eureka consists of multiple instances(service instances). These service instances can be divided into two types: Eureka Server and Eureka Client.\nFor ease of understanding, we divide Eureka Client into Service Provider and Service Consumer. Eureka Server provides service registration and discovery.\nThe Service Provider registers its own service with Eureka, so that service consumers can find it.\nThe Service Consumer obtains a listed of registered services from Eureka, so that they can consume services.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Linkis has implemented a set of its own underlying RPC communication schema based on Feign. As the underlying communication solution, Linkis RPC integrates the SDK into the microservices in need.\nA microservice can be both the request caller and the request receiver.\nAs the request caller, the Receiver of the target microservice will be requested through the Sender.\nAs the request receiver, the Receiver will be provided to process the request sent by the Sender in order to complete the synchronous response or asynchronous response."),(0,o.kt)("p",{parentName:"li"},"   ",(0,o.kt)("img",{src:t(5665).Z})))))}v.isMDXComponent=!0},8518:function(e,r,t){r.Z=t.p+"assets/images/linkis-microservice-gov-01-d3e20452a2cdccbd3aeb4d414b74fbee.png"},5665:function(e,r,t){r.Z=t.p+"assets/images/linkis-microservice-gov-03-6da92a57bfdd5592c24efd65f8d79f58.png"}}]);