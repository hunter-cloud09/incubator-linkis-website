"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9647],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},383:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"\u5e76\u53d1\u89c4\u8303",sidebar_position:1},p=void 0,l={unversionedId:"development/development_specification/concurrent",id:"development/development_specification/concurrent",isDocsHomePage:!1,title:"\u5e76\u53d1\u89c4\u8303",description:"1.\t\u3010\u5f3a\u5236\u3011\u83b7\u53d6\u5355\u4f8b\u5bf9\u8c61\u8981\u7ebf\u7a0b\u5b89\u5168\u3002\u5728\u5355\u4f8b\u5bf9\u8c61\u91cc\u9762\u505a\u64cd\u4f5c\u4e5f\u8981\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development_specification/concurrent.md",sourceDirName:"development/development_specification",slug:"/development/development_specification/concurrent",permalink:"/zh-CN/docs/next/development/development_specification/concurrent",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development_specification/concurrent.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5e76\u53d1\u89c4\u8303",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u63a5\u53e3\u89c4\u8303",permalink:"/zh-CN/docs/next/development/development_specification/api"},next:{title:"\u5f02\u5e38\u5904\u7406\u89c4\u8303",permalink:"/zh-CN/docs/next/development/development_specification/exception_catch"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u83b7\u53d6\u5355\u4f8b\u5bf9\u8c61\u8981\u7ebf\u7a0b\u5b89\u5168\u3002\u5728\u5355\u4f8b\u5bf9\u8c61\u91cc\u9762\u505a\u64cd\u4f5c\u4e5f\u8981\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u7ebf\u7a0b\u8d44\u6e90\u5fc5\u987b\u901a\u8fc7\u7ebf\u7a0b\u6c60\u63d0\u4f9b\uff0c\u4e0d\u5141\u8bb8\u5728\u5e94\u7528\u4e2d\u81ea\u884c\u663e\u5f0f\u521b\u5efa\u7ebf\u7a0b\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"SimpleDateFormat \u662f\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u7c7b\uff0c\u5efa\u8bae\u4f7f\u7528\u4f7f\u7528DateUtils\u5de5\u5177\u7c7b\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u9ad8\u5e76\u53d1\u65f6\uff0c\u540c\u6b65\u8c03\u7528\u5e94\u8be5\u53bb\u8003\u91cf\u9501\u7684\u6027\u80fd\u635f\u8017\u3002\u80fd\u7528\u65e0\u9501\u6570\u636e\u7ed3\u6784\uff0c\u5c31\u4e0d\u8981\u7528\u9501\uff1b\u80fd\u9501\u533a\u5757\uff0c\u5c31\u4e0d\u8981\u9501\u6574\u4e2a\u65b9\u6cd5\u4f53\uff1b\u80fd\u7528\u5bf9\u8c61\u9501\uff0c\u5c31\u4e0d\u8981\u7528\u7c7b\u9501\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011ThreadLocal\u5c3d\u91cf\u5c11\u7528\uff0c\u7528\u7684\u65f6\u5019\u5982\u679c\u5b58\u5165\u7684\u662f\u4e00\u4e2a\u9700\u8981close\u7684\u5bf9\u8c61\uff0c\u8bb0\u5f97\u53ca\u65f6close\u91ca\u653e\u6389\u3002"))))}m.isMDXComponent=!0}}]);