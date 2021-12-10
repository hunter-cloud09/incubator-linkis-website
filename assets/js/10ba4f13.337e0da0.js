"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7346],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return O}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),s=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return o.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(t),O=n,d=h["".concat(p,".").concat(O)]||h[O]||u[O]||a;return t?o.createElement(d,i(i({ref:r},l),{},{components:t})):o.createElement(d,i({ref:r},l))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=h;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6517:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],c={},p="Orchestrator-Operation\u67b6\u6784\u8bbe\u8ba1",s={unversionedId:"architecture/orchestrator/orchestrator_operation_architecture_doc",id:"architecture/orchestrator/orchestrator_operation_architecture_doc",isDocsHomePage:!1,title:"Orchestrator-Operation\u67b6\u6784\u8bbe\u8ba1",description:"\u4e00. Operation\u6982\u5ff5",source:"@site/docs/architecture/orchestrator/orchestrator_operation_architecture_doc.md",sourceDirName:"architecture/orchestrator",slug:"/architecture/orchestrator/orchestrator_operation_architecture_doc",permalink:"/docs/next/architecture/orchestrator/orchestrator_operation_architecture_doc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/orchestrator/orchestrator_operation_architecture_doc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Orchestrator-Execution\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/next/architecture/orchestrator/orchestrator_execution_architecture_doc"},next:{title:"orchestrator_reheater_architecture",permalink:"/docs/next/architecture/orchestrator/orchestrator_reheater_architecture"}},l=[{value:"\u4e00. Operation\u6982\u5ff5",id:"\u4e00-operation\u6982\u5ff5",children:[]},{value:"\u4e8c. Operation\u7c7b\u56fe",id:"\u4e8c-operation\u7c7b\u56fe",children:[]},{value:"\u4e09. Operation\u4f7f\u7528",id:"\u4e09-operation\u4f7f\u7528",children:[]},{value:"\u56db. Operation\u4f8b\u5b50",id:"\u56db-operation\u4f8b\u5b50",children:[]}],u={toc:l};function h(e){var r=e.components,c=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,c,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"orchestrator-operation\u67b6\u6784\u8bbe\u8ba1"},"Orchestrator-Operation\u67b6\u6784\u8bbe\u8ba1"),(0,a.kt)("h2",{id:"\u4e00-operation\u6982\u5ff5"},"\u4e00. Operation\u6982\u5ff5"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Operation\u64cd\u4f5c\u662f\u7528\u4e8e\u6269\u5c55\u5f02\u6b65\u6267\u884c\u671f\u95f4\u5bf9\u4efb\u52a1\u7684\u989d\u5916\u64cd\u4f5c\uff0c\u5728\u8c03\u7528Orchestration\u7684\u5f02\u6b65\u6267\u884c\u540e\uff0c\u8c03\u7528\u8005\u83b7\u53d6\u5230\u7684\u662fOrchestrationFuture\uff0c\u8be5\u63a5\u53e3\u91cc\u9762\u53ea\u63d0\u4f9b\u4e86cancel\u3001waitForCompleted\u3001getResponse\u7b49\u64cd\u4f5c\u4efb\u52a1\u7684\u65b9\u6cd5\u3002\u4f46\u662f\u5f53\u6211\u4eec\u9700\u8981\u83b7\u53d6\u4efb\u52a1\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u6682\u505c\u4efb\u52a1\u65f6\u6ca1\u6709\u8c03\u7528\u4eba\u53e3\uff0c\u8fd9\u4e5f\u662fOperation\u5b9a\u4e49\u7684\u521d\u8877\uff0c\u7528\u4e8e\u5bf9\u5916\u6269\u5c55\u66f4\u591a\u5bf9\u5f02\u6b65\u8fd0\u884c\u7684\u4efb\u52a1\u7684\u989d\u5916\u80fd\u529b\u3002\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("h2",{id:"\u4e8c-operation\u7c7b\u56fe"},"\u4e8c. Operation\u7c7b\u56fe"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Operation\u91c7\u7528\u7684\u662f\u7528\u6237\u6269\u5c55\u7684\u65b9\u5f0f\uff0c\u7528\u6237\u9700\u8981\u6269\u5c55\u64cd\u4f5c\u65f6\uff0c\u53ea\u9700\u8981\u6309\u7167\u6211\u4eec\u7684Operation\u63a5\u53e3\u5b9e\u73b0\u5bf9\u5e94\u7684\u7c7b\uff0c\u7136\u540e\u6ce8\u518c\u5230Orchestrator\uff0c\u4e0d\u9700\u8981\u6539\u52a8\u5e95\u5c42\u4ee3\u7801\u5373\u53ef\u4ee5\u62e5\u6709\u5bf9\u5e94\u7684\u64cd\u4f5c\u3002\u6574\u4f53\u7c7b\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"operation_class",src:t(9150).Z})),(0,a.kt)("h2",{id:"\u4e09-operation\u4f7f\u7528"},"\u4e09. Operation\u4f7f\u7528"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Operation\u7684\u4f7f\u7528\u4e3b\u8981\u5206\u4e3a\u4e24\u6b65\uff0c\u9996\u5148\u662fOperation\u6ce8\u518c\uff0c\u7136\u540e\u662fOperation\u8c03\u7528\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u65b9\u5f0f\uff0c\u9996\u5148\u662f\u6309\u7167\u7b2c\u4e8c\u7ae0\u7684Operation\u63a5\u53e3\u5b9e\u73b0\u5bf9\u5e94\u7684Operation\u5b9e\u73b0\u7c7b\uff0c\u7136\u540e\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"OrchestratorSessionBuilder"),"\u5b8c\u6210Operation\u7684\u6ce8\u518c\uff0c\u8fd9\u6837\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"OrchestratorSessionBuilder"),"\u521b\u5efa\u51fa\u6765\u7684OrchestratorSession\u4e2d\u7684SessionState\u662f\u6301\u6709Operation\u7684\uff1b"),(0,a.kt)("li",{parentName:"ol"},"Operation\u7684\u4f7f\u7528\u9700\u8981\u5728\u4f7f\u7528\u901a\u8fc7OrchestratorSession\u5b8c\u6210\u7f16\u6392\u540e\uff0c\u8c03\u7528Orchestration\u7684\u5f02\u6b65\u6267\u884c\u65b9\u6cd5asyncExecute\u83b7\u53d6OrchestrationFuture\u624d\u53ef\u4ee5\u8fdb\u884c\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u7740\u901a\u8fc7Operation\u64cd\u4f5cname\uff0c\u5982\u201cLOG\u201d\u65e5\u5fd7\uff0c\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"li"},'OrchestrationFuture.operate("LOG")')," \u8fdb\u884c\u64cd\u4f5c\u83b7\u53d6\u5bf9\u5e94Operation\u7684\u8fd4\u56de\u5bf9\u8c61\uff0c")),(0,a.kt)("h2",{id:"\u56db-operation\u4f8b\u5b50"},"\u56db. Operation\u4f8b\u5b50"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u4ee5\u4e0b\u901a\u8fc7\u65e5\u5fd7\u64cd\u4f5c\u6765\u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\uff0cLogOperation\u7684\u5b9a\u4e49\u5728\u7b2c\u4e8c\u7ae0\u6709\u8bf4\u660e\uff0cLogOperation\u901a\u8fc7\u5b9e\u73b0Operation\u548cTaskLogListener\u4e24\u4e2a\u63a5\u53e3\u3002\u6574\u4f53\u65e5\u5fd7\u83b7\u53d6\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f53Orchestrator\u63a5\u6536\u5230\u4efb\u52a1\u65e5\u5fd7\u540e\uff0c\u4f1a\u901a\u8fc7listenerBus\u63a8\u9001event\u7ed9\u5230LogOperation\u8fdb\u884c\u6d88\u8d39\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5f53LogOperation\u83b7\u53d6\u5230\u65e5\u5fd7\u540e\uff0c\u4f1a\u8c03\u7528\u65e5\u5fd7\u5904\u7406\u5668LogProcessor\u8fdb\u884c\u5199\u65e5\u5fd7\uff08writeLog\uff09\uff0c\u8be5LogProcessor\u4f1a\u901a\u8fc7\u8c03\u7528\u65b9\u8c03\u7528\u65b9\u6cd5",(0,a.kt)("inlineCode",{parentName:"li"},'OrchestrationFuture.operate("LOG")'),"\u83b7\u53d6\u5230\uff1b"),(0,a.kt)("li",{parentName:"ol"},"LogProcessor\u6709\u4e24\u79cd\u7ed9\u5230\u5916\u90e8\u83b7\u53d6\u65e5\u5fd7\u7684\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u901a\u77e5\u6a21\u5f0f\uff0c\u5916\u90e8\u8c03\u7528\u65b9\u53ef\u4ee5\u6ce8\u518c\u65e5\u5fd7listener\u65b9\u6cd5\u7ed9\u5230\u65e5\u5fd7\u5904\u7406\u5668\uff0c\u5f53\u65e5\u5fd7\u5904\u7406\u5668\u7684writeLog\u65b9\u6cd5\u88ab\u8c03\u7528\u540e\u540e\u4f1a\u8c03\u7528\u6240\u6709\u7684listener\u8fdb\u884c\u901a\u77e5"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u79cd\u662f\u4e3b\u52a8\u62c9\u53d6\u6a21\u5f0f\uff0c\u901a\u8fc7\u8c03\u7528LogProcessor\u7684getLog\u65b9\u6cd5\u4e3b\u52a8\u83b7\u53d6\u65e5\u5fd7")))}h.isMDXComponent=!0},9150:function(e,r,t){r.Z=t.p+"assets/images/operation_class-20ce84ccd3456ce698781fda26b7e210.png"}}]);