"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7633],{3905:function(t,r,e){e.d(r,{Zo:function(){return p},kt:function(){return m}});var o=e(7294);function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){n(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function i(t,r){if(null==t)return{};var e,o,n=function(t,r){if(null==t)return{};var e,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],r.indexOf(e)>=0||(n[e]=t[e]);return n}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var u=o.createContext({}),s=function(t){var r=o.useContext(u),e=r;return t&&(e="function"==typeof t?t(r):c(c({},r),t)),e},p=function(t){var r=s(t.components);return o.createElement(u.Provider,{value:r},t.children)},h={inlineCode:"code",wrapper:function(t){var r=t.children;return o.createElement(o.Fragment,{},r)}},l=o.forwardRef((function(t,r){var e=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=s(e),m=n,f=l["".concat(u,".").concat(m)]||l[m]||h[m]||a;return e?o.createElement(f,c(c({ref:r},p),{},{components:e})):o.createElement(f,c({ref:r},p))}));function m(t,r){var e=arguments,n=r&&r.mdxType;if("string"==typeof t||n){var a=e.length,c=new Array(a);c[0]=l;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var s=2;s<a;s++)c[s]=e[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,e)}l.displayName="MDXCreateElement"},1271:function(t,r,e){e.r(r),e.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var o=e(7462),n=e(3366),a=(e(7294),e(3905)),c=["components"],i={},u=void 0,s={unversionedId:"architecture/orchestrator/computation_orchestrator_architecture",id:"architecture/orchestrator/computation_orchestrator_architecture",isDocsHomePage:!1,title:"computation_orchestrator_architecture",description:"Computation-Orchestrator\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/orchestrator/computation_orchestrator_architecture.md",sourceDirName:"architecture/orchestrator",slug:"/architecture/orchestrator/computation_orchestrator_architecture",permalink:"/zh-CN/docs/next/architecture/orchestrator/computation_orchestrator_architecture",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/orchestrator/computation_orchestrator_architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Job\u63d0\u4ea4\u51c6\u5907\u6267\u884c\u6d41\u7a0b",permalink:"/zh-CN/docs/next/architecture/job_submission_preparation_and_execution_process"},next:{title:"Orchestrator \u6574\u4f53\u67b6\u6784\u8bbe\u8ba1",permalink:"/zh-CN/docs/next/architecture/orchestrator/orchestrator_architecture_doc"}},p=[{value:"<strong>Computation-Orchestrator\u67b6\u6784</strong>",id:"computation-orchestrator\u67b6\u6784",children:[{value:"<strong>\u4e00. Computation-Orchestrator\u6982\u5ff5</strong>",id:"\u4e00-computation-orchestrator\u6982\u5ff5",children:[]},{value:"<strong>\u4e8c. Computation-Orchestrator\u67b6\u6784</strong>",id:"\u4e8c-computation-orchestrator\u67b6\u6784",children:[]},{value:"<strong>\u4e09. Computation-Orchestrator\u6267\u884c\u6d41\u7a0b</strong>",id:"\u4e09-computation-orchestrator\u6267\u884c\u6d41\u7a0b",children:[]}]}],h={toc:p};function l(t){var r=t.components,i=(0,n.Z)(t,c);return(0,a.kt)("wrapper",(0,o.Z)({},h,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"computation-orchestrator\u67b6\u6784"},(0,a.kt)("strong",{parentName:"h2"},"Computation-Orchestrator\u67b6\u6784")),(0,a.kt)("h3",{id:"\u4e00-computation-orchestrator\u6982\u5ff5"},(0,a.kt)("strong",{parentName:"h3"},"\u4e00. Computation-Orchestrator\u6982\u5ff5")),(0,a.kt)("p",null,"Computation-Orchestrator\u662fOrchestrator\u7684\u6807\u51c6\u5b9e\u73b0\uff0c\u652f\u6301\u4ea4\u4e92\u5f0f\u5f15\u64ce\u7684\u4efb\u52a1\u7f16\u6392\u3002Computation-Orchestrator\u63d0\u4f9b\u4e86Converter\u3001Parser\u3001Validator\u3001Planner\u3001Optimizer\u3001Execution\u3001Reheater\u7684\u5e38\u7528\u5b9e\u73b0\u65b9\u6cd5\u3002Computation-Orchestrator\u4e0eAM\u5bf9\u63a5\uff0c\u8d1f\u8d23\u4ea4\u4e92\u5f0f\u4efb\u52a1\u6267\u884c\uff0c\u53ef\u4ee5\u4e0eEntrance\u5bf9\u63a5\uff0c\u4e5f\u53ef\u4ee5\u4e0e\u5176\u5b83\u4efb\u52a1\u63d0\u4ea4\u7aef\u76f4\u63a5\u5bf9\u63a5\uff0c\u6bd4\u5982IOClient\u3002Computation-Orchestrator\u540c\u65f6\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u5e76\u4e14\u652f\u6301\u83b7\u53d6\u591a\u4e2aSession\u5b9e\u73b0\u9694\u79bb\uff0c"),(0,a.kt)("h3",{id:"\u4e8c-computation-orchestrator\u67b6\u6784"},(0,a.kt)("strong",{parentName:"h3"},"\u4e8c. Computation-Orchestrator\u67b6\u6784")),(0,a.kt)("p",null,"Entrance\u63d0\u4ea4\u4efb\u52a1\u5230Computation-Orchestrator\u6267\u884c\uff0c\u4f1a\u540c\u65f6\u6ce8\u518c\u65e5\u5fd7\u3001\u8fdb\u5ea6\u548c\u7ed3\u679c\u96c6\u7684Listener\u3002\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u6536\u5230\u4efb\u52a1\u65e5\u5fd7\u3001\u4efb\u52a1\u8fdb\u5ea6\uff0c\u90fd\u4f1a\u8c03\u7528\u5df2\u6ce8\u518c\u7684listener\uff0c\u5c06\u4efb\u52a1\u4fe1\u606f\u8fd4\u56de\u7ed9Entrance\u3002\u4efb\u52a1\u6267\u884c\u7ed3\u675f\u540e\uff0c\u4f1a\u751f\u6210\u7ed3\u679c\u96c6\u7684Response\uff0c\u5e76\u8c03\u7528\u7ed3\u679c\u96c6Listener\u3002\u5176\u4e2d\uff0cOrchestrator\u652f\u6301Entrance\u63d0\u4ea4\u7ed1\u5b9a\u5355\u4e2aEngineConn\u7684\u4efb\u52a1\uff0c\u901a\u8fc7\u4efb\u52a1\u4e2d\u6dfb\u52a0BindEngineLabel\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(4936).Z})),(0,a.kt)("h3",{id:"\u4e09-computation-orchestrator\u6267\u884c\u6d41\u7a0b"},(0,a.kt)("strong",{parentName:"h3"},"\u4e09. Computation-Orchestrator\u6267\u884c\u6d41\u7a0b")),(0,a.kt)("p",null,"Computation-Orchestrator\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(9016).Z})))}l.isMDXComponent=!0},4936:function(t,r,e){r.Z=e.p+"assets/images/linkis-computation-orchestrator-01-f61b80e9aa34a4b7ac72e2a37d8a0069.png"},9016:function(t,r,e){r.Z=e.p+"assets/images/linkis-computation-orchestrator-02-7f8d46b0a487c979d912ab8fc6ce49d6.png"}}]);