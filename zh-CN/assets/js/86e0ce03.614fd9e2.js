"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9136],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),v=l(n),f=c,b=v["".concat(o,".").concat(f)]||v[f]||p[f]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,s=new Array(i);s[0]=v;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3732:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return v}});var r=n(7462),c=n(3366),i=(n(7294),n(3905)),s=["components"],a={},o=void 0,l={unversionedId:"architecture/public_enhancement_services/context_service/context_service_listener",id:"architecture/public_enhancement_services/context_service/context_service_listener",isDocsHomePage:!1,title:"context_service_listener",description:"Listener\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public_enhancement_services/context_service/context_service_listener.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/context_service_listener",permalink:"/zh-CN/docs/next/architecture/public_enhancement_services/context_service/context_service_listener",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public_enhancement_services/context_service/context_service_listener.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"context_service_highavailable",permalink:"/zh-CN/docs/next/architecture/public_enhancement_services/context_service/context_service_highavailable"},next:{title:"context_service_persistence",permalink:"/zh-CN/docs/next/architecture/public_enhancement_services/context_service/context_service_persistence"}},u=[{value:"<strong>Listener\u67b6\u6784</strong>",id:"listener\u67b6\u6784",children:[{value:"<strong>\u5ba2\u6237\u7aef \u6ce8\u518c\u81ea\u5df1\u3001\u6ce8\u518cCSKey\u53ca\u66f4\u65b0CSKey\u8fc7\u7a0b</strong>",id:"\u5ba2\u6237\u7aef-\u6ce8\u518c\u81ea\u5df1\u6ce8\u518ccskey\u53ca\u66f4\u65b0cskey\u8fc7\u7a0b",children:[]},{value:"<strong>Listener UM\u7c7b\u56fe</strong>",id:"listener-um\u7c7b\u56fe",children:[]}]},{value:"<strong>Listener callbackengine\u65f6\u5e8f\u56fe</strong>",id:"listener-callbackengine\u65f6\u5e8f\u56fe",children:[]}],p={toc:u};function v(e){var t=e.components,a=(0,c.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"listener\u67b6\u6784"},(0,i.kt)("strong",{parentName:"h2"},"Listener\u67b6\u6784")),(0,i.kt)("p",null,"\u5728DSS\u4e2d\uff0c\u5f53\u67d0\u4e2a\u8282\u70b9\u66f4\u6539\u4e86\u5b83\u7684\u5143\u6570\u636e\u4fe1\u606f\u540e\uff0c\u5219\u6574\u4e2a\u5de5\u4f5c\u6d41\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u5c31\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u6211\u4eec\u671f\u671b\u6240\u6709\u7684\u8282\u70b9\u90fd\u80fd\u611f\u77e5\u5230\u53d8\u5316\uff0c\u5e76\u81ea\u52a8\u8fdb\u884c\u5143\u6570\u636e\u66f4\u65b0\u3002\u6211\u4eec\u91c7\u7528\u76d1\u542c\u6a21\u5f0f\u6765\u5b9e\u73b0\uff0c\u5e76\u4f7f\u7528\u5fc3\u8df3\u673a\u5236\u8fdb\u884c\u8f6e\u8be2\uff0c\u4fdd\u6301\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u5143\u6570\u636e\u4e00\u81f4\u6027\u3002"),(0,i.kt)("h3",{id:"\u5ba2\u6237\u7aef-\u6ce8\u518c\u81ea\u5df1\u6ce8\u518ccskey\u53ca\u66f4\u65b0cskey\u8fc7\u7a0b"},(0,i.kt)("strong",{parentName:"h3"},"\u5ba2\u6237\u7aef \u6ce8\u518c\u81ea\u5df1\u3001\u6ce8\u518cCSKey\u53ca\u66f4\u65b0CSKey\u8fc7\u7a0b")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4348).Z})),(0,i.kt)("p",null,"\u4e3b\u8981\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"1\u3001\u6ce8\u518c\u64cd\u4f5c\uff1a\u5ba2\u6237\u7aefclient1\u3001client2\u3001client3\u3001client4\u901a\u8fc7HTPP\u8bf7\u6c42\u5206\u522b\u5411csserver\u6ce8\u518c\u81ea\u5df1\u4ee5\u53ca\u60f3\u8981\u76d1\u542c\u7684CSKey\uff0cService\u670d\u52a1\u901a\u8fc7\u5bf9\u5916\u63a5\u53e3\u83b7\u53d6\u5230callback\u5f15\u64ce\u5b9e\u4f8b\uff0c\u6ce8\u518c\u5ba2\u6237\u7aef\u53ca\u5176\u5bf9\u5e94\u7684CSKeys\u3002"),(0,i.kt)("p",null,"2\u3001\u66f4\u65b0\u64cd\u4f5c\uff1a\u5982ClientX\u8282\u70b9\u66f4\u65b0\u4e86CSKey\u5185\u5bb9\uff0cService\u670d\u52a1\u5219\u66f4\u65b0ContextCache\u7f13\u5b58\u7684CSKey\uff0cContextCache\u5c06\u66f4\u65b0\u64cd\u4f5c\u6295\u9012\u7ed9ListenerBus\uff0cListenerBus\u901a\u77e5\u5177\u4f53\u7684listener\u8fdb\u884c\u6d88\u8d39\uff08\u5373ContextKeyCallbackEngine\u53bb\u66f4\u65b0Client\u5bf9\u5e94\u7684CSKeys\uff09\uff0c\u8d85\u65f6\u672a\u6d88\u8d39\u7684\u4e8b\u4ef6\uff0c\u4f1a\u88ab\u81ea\u52a8\u79fb\u9664\u3002"),(0,i.kt)("p",null,"3\u3001\u5fc3\u8df3\u673a\u5236\uff1a"),(0,i.kt)("p",null,"\u6240\u6709Client\u901a\u8fc7\u5fc3\u8df3\u4fe1\u606f\u63a2\u6d4bContextKeyCallbackEngine\u4e2dCSKeys\u7684\u503c\u662f\u5426\u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,i.kt)("p",null,"ContextKeyCallbackEngine\u901a\u8fc7\u5fc3\u8df3\u673a\u5236\u8fd4\u56de\u66f4\u65b0\u7684CSKeys\u503c\u7ed9\u6240\u6709\u5df2\u6ce8\u518c\u7684\u5ba2\u6237\u7aef\u3002\u5982\u679c\u6709\u5ba2\u6237\u7aef\u5fc3\u8df3\u8d85\u65f6\uff0c\u5219\u79fb\u9664\u8be5\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("h3",{id:"listener-um\u7c7b\u56fe"},(0,i.kt)("strong",{parentName:"h3"},"Listener UM\u7c7b\u56fe")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8470).Z})),(0,i.kt)("p",null,"\u63a5\u53e3\uff1aListenerManager"),(0,i.kt)("p",null,"\u5bf9\u5916\uff1a\u63d0\u4f9bListenerBus\uff0c\u7528\u4e8e\u6295\u9012\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,"\u5bf9\u5185\uff1a\u63d0\u4f9b callback\u5f15\u64ce\uff0c\u8fdb\u884c\u4e8b\u4ef6\u7684\u5177\u4f53\u6ce8\u518c\u3001\u8bbf\u95ee\u3001\u66f4\u65b0\uff0c\u53ca\u5fc3\u8df3\u5904\u7406\u7b49\u903b\u8f91"),(0,i.kt)("h2",{id:"listener-callbackengine\u65f6\u5e8f\u56fe"},(0,i.kt)("strong",{parentName:"h2"},"Listener callbackengine\u65f6\u5e8f\u56fe")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5799).Z})))}v.isMDXComponent=!0},4348:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-listener-01-d41e51ef682bb347b4a5a86b0a33b6b6.png"},8470:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-search-02-df8a3c16218931cb0e9161035fb31d1a.png"},5799:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-search-03-4ef57654ae4c3015fc6af457288f2b6b.png"}}]);