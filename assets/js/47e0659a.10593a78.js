"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1904],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,c=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),g=l(r),f=c,h=g["".concat(u,".").concat(f)]||g[f]||s[f]||i;return r?t.createElement(h,o(o({ref:n},p),{},{components:r})):t.createElement(h,o({ref:n},p))}));function f(e,n){var r=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=g;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6584:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return g}});var t=r(7462),c=r(3366),i=(r(7294),r(3905)),o=["components"],a={},u=void 0,l={unversionedId:"architecture/orchestrator/orchestrator_ecmp_architecture",id:"architecture/orchestrator/orchestrator_ecmp_architecture",isDocsHomePage:!1,title:"orchestrator_ecmp_architecture",description:"EngineConnPlugin\u67b6\u6784\u8bbe\u8ba1",source:"@site/docs/architecture/orchestrator/orchestrator_ecmp_architecture.md",sourceDirName:"architecture/orchestrator",slug:"/architecture/orchestrator/orchestrator_ecmp_architecture",permalink:"/docs/next/architecture/orchestrator/orchestrator_ecmp_architecture",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/docs/architecture/orchestrator/orchestrator_ecmp_architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CheckRuler\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/next/architecture/orchestrator/orchestrator_checkruler"},next:{title:"Orchestrator-Execution\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/next/architecture/orchestrator/orchestrator_execution_architecture_doc"}},p=[{value:"EngineConnPlugin\u67b6\u6784\u8bbe\u8ba1",id:"engineconnplugin\u67b6\u6784\u8bbe\u8ba1",children:[{value:"EngineConnPlugin \u67b6\u6784\u5b9e\u73b0",id:"engineconnplugin-\u67b6\u6784\u5b9e\u73b0",children:[]},{value:"EngineConnPlugin\u4ea4\u4e92\u6d41\u7a0b",id:"engineconnplugin\u4ea4\u4e92\u6d41\u7a0b",children:[]}]}],s={toc:p};function g(e){var n=e.components,a=(0,c.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"engineconnplugin\u67b6\u6784\u8bbe\u8ba1"},"EngineConnPlugin\u67b6\u6784\u8bbe\u8ba1"),(0,i.kt)("p",null,"EngineConnPlugin\u7528\u4e8e\u5c06\u539f\u672c\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce\uff0c\u9700\u8981\u5b9e\u73b0\u7684\u76f8\u5173\u63a5\u53e3\u548c\u7c7b\uff0c\u4ee5\u53ca\u9700\u8981\u62c6\u5206\u7684Entrance-EngineManager-Engine\u4e09\u5c42\u6a21\u5757\u4f53\u7cfb\uff0c\u878d\u5408\u5230\u4e86\u4e00\u4e2a\u63a5\u53e3\u4e4b\u4e2d\uff0c\u7b80\u5316\u7528\u6237\u5b9e\u73b0\u65b0\u5f15\u64ce\u7684\u6d41\u7a0b\u548c\u4ee3\u7801\uff0c\u771f\u6b63\u505a\u5230\u53ea\u8981\u5b9e\u73b0\u4e00\u4e2a\u7c7b\uff0c\u5c31\u80fd\u63a5\u5165\u4e00\u4e2a\u65b0\u5f15\u64ce\u3002"),(0,i.kt)("h3",{id:"engineconnplugin-\u67b6\u6784\u5b9e\u73b0"},"EngineConnPlugin \u67b6\u6784\u5b9e\u73b0"),(0,i.kt)("p",null,"1\u3001Linkis 0.X\u7248\u672c\u75db\u70b9\u4e0e\u601d\u8003"),(0,i.kt)("p",null,"Linkis\n0.X\u7248\u672c\u6ca1\u6709Plugin\u7684\u6982\u5ff5\uff0c\u7528\u6237\u65b0\u589e\u4e00\u4e2a\u5f15\u64ce\uff0c\u9700\u8981\u540c\u65f6\u5b9e\u73b0Entrance\u3001EngineManager\u3001Engine\u76f8\u5173\u63a5\u53e3\uff0c\u5f00\u53d1\u5de5\u4f5c\u91cf\u548c\u7ef4\u62a4\u5de5\u4f5c\u91cf\u90fd\u8f83\u5927\uff0c\u4fee\u6539\u4e5f\u6bd4\u8f83\u590d\u6742\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u7528\u6237Linkis0.X\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce\u9700\u8981\u5b9e\u73b0\u7684\u76f8\u5173\u63a5\u53e3\u548c\u7c7b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(621).Z})),(0,i.kt)("p",null,"2\u3001\u65b0\u7248\u672c\u7684\u6539\u8fdb"),(0,i.kt)("p",null,"Linkis\n1.0\u7248\u672c\u91cd\u6784\u4e86\u5f15\u64ce\u4ece\u521b\u5efa\u5230\u4efb\u52a1\u6267\u884c\u7684\u6574\u4e2a\u903b\u8f91\uff0c\u5c06Entrance\u7b80\u5316\u4e3a\u4e00\u4e2a\u670d\u52a1\uff0c\u901a\u8fc7\u6807\u7b7e\u6765\u5bf9\u63a5\u4e0d\u540c\u7684Engine\u3001EngineManager\u4e5f\u4f1a\u7b80\u5316\u4e3a\u4e00\u4e2a\u3002Engine\u5b9a\u4e49\u4e3aEngineConn\u8fde\u63a5\u5668+Executor\u6267\u884c\u5668\uff0c\u5e76\u4e14\u62bd\u8c61\u6210\u591a\u4e2a\u670d\u52a1\u548c\u6a21\u5757\uff0c\u7531\u7528\u6237\u6839\u636e\u9700\u8981\u7075\u6d3b\u9009\u53d6\u9700\u8981\u7684\u670d\u52a1\u548c\u6a21\u5757\u3002\u8fd9\u6837\u5927\u5927\u51cf\u5c11\u4e86\u65b0\u589e\u5f15\u64ce\u7684\u5f00\u53d1\u548c\u7ef4\u62a4\u5de5\u4f5c\u91cf\u3002\u5e76\u4e14plugin\u4f1a\u5c06\u5f15\u64ce\u7684lib\u548cconf\u52a8\u6001\u6dfb\u52a0\u5230bml\u8fdb\u884c\u7248\u672c\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u4e3aLinkis1.0.0\uff0c\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce\uff0c\u7528\u6237\u9700\u5b9e\u73b0\u7684\u63a5\u53e3\u548c\u7c7b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3436).Z})),(0,i.kt)("p",null,"\u5176\u4e2dEngineConnResourceFactory\u548cEngineLaunchBuilder\u4e3a\u975e\u5fc5\u9700\u5b9e\u73b0\u63a5\u53e3\uff0c\u53ea\u6709EngineConnFactory\u4e3a\u5fc5\u9700\u5b9e\u73b0\u63a5\u53e3\u3002"),(0,i.kt)("h3",{id:"engineconnplugin\u4ea4\u4e92\u6d41\u7a0b"},"EngineConnPlugin\u4ea4\u4e92\u6d41\u7a0b"),(0,i.kt)("p",null,"EngineConnPlugin\u63d0\u4f9b\u4e86Server\u670d\u52a1\uff0c\u7528\u4e8e\u542f\u52a8\u548c\u52a0\u8f7d\u6240\u6709\u7684\u5f15\u64ce\u63d2\u4ef6\uff0c\u4ee5\u4e0b\u7ed9\u51fa\u4e86\u4e00\u4e2a\u65b0\u5f15\u64ce\u542f\u52a8\uff0c\u8bbf\u95ee\u4e86EngineConnPlugin-Server\u7684\u5168\u90e8\u6d41\u7a0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(516).Z})))}g.isMDXComponent=!0},3436:function(e,n,r){n.Z=r.p+"assets/images/1.0\u4e2d\u7528\u6237\u9700\u5b9e\u73b0\u7684\u63a5\u53e3\u548c\u7c7b-e8c3a54563c47a6a6fa8be686aad9fe9.png"},516:function(e,n,r){n.Z=r.p+"assets/images/\u4ea4\u4e92\u6d41\u7a0b-a2a41415425ac849de410c77771bbb95.png"},621:function(e,n,r){n.Z=r.p+"assets/images/\u76f8\u5173\u63a5\u53e3\u548c\u7c7b-98ea0253fc57a5b39f786c5d335ecd7f.png"}}]);