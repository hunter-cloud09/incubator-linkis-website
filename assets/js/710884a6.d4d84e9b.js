"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[527],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(t),d=i,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5218:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],s={title:"Python Engine Usage",sidebar_position:2},l="Python engine usage documentation",u={unversionedId:"engine_usage/python",id:"engine_usage/python",isDocsHomePage:!1,title:"Python Engine Usage",description:"This article mainly introduces the configuration, deployment and use of the Python engine in Linkis1.0.",source:"@site/docs/engine_usage/python.md",sourceDirName:"engine_usage",slug:"/engine_usage/python",permalink:"/docs/next/engine_usage/python",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/engine_usage/python.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Python Engine Usage",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JDBC Engine Usage",permalink:"/docs/next/engine_usage/jdbc"},next:{title:"Shell Engine Usage",permalink:"/docs/next/engine_usage/shell"}},c=[{value:"1. Environment configuration before using Python engine",id:"1-environment-configuration-before-using-python-engine",children:[]},{value:"2. Python engine configuration and deployment",id:"2-python-engine-configuration-and-deployment",children:[{value:"2.1 Python version selection and compilation",id:"21-python-version-selection-and-compilation",children:[]},{value:"2.2 python engineConn deployment and loading",id:"22-python-engineconn-deployment-and-loading",children:[]},{value:"2.3 tags of python engine",id:"23-tags-of-python-engine",children:[]}]},{value:"3. Use of Python engine",id:"3-use-of-python-engine",children:[{value:"Ready to operate",id:"ready-to-operate",children:[]},{value:"3.1 How to use Scriptis",id:"31-how-to-use-scriptis",children:[]},{value:"3.2 How to use workflow",id:"32-how-to-use-workflow",children:[]},{value:"3.3 How to use Linkis Client",id:"33-how-to-use-linkis-client",children:[]}]},{value:"4. Python engine user settings",id:"4-python-engine-user-settings",children:[]}],p={toc:c};function h(e){var n=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-engine-usage-documentation"},"Python engine usage documentation"),(0,r.kt)("p",null,"This article mainly introduces the configuration, deployment and use of the Python engine in Linkis1.0."),(0,r.kt)("h2",{id:"1-environment-configuration-before-using-python-engine"},"1. Environment configuration before using Python engine"),(0,r.kt)("p",null,"If you want to use the python engine on your server, you need to ensure that the python execution directory and execution permissions are in the user's PATH."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python"),(0,r.kt)("td",{parentName:"tr",align:null},"python execution environment"),(0,r.kt)("td",{parentName:"tr",align:null},"Anaconda's python executor is recommended")))),(0,r.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,r.kt)("h2",{id:"2-python-engine-configuration-and-deployment"},"2. Python engine configuration and deployment"),(0,r.kt)("h3",{id:"21-python-version-selection-and-compilation"},"2.1 Python version selection and compilation"),(0,r.kt)("p",null,"Python supports python2 and\nFor python3, you can simply change the configuration to complete the Python version switch, without recompiling the python engine version."),(0,r.kt)("h3",{id:"22-python-engineconn-deployment-and-loading"},"2.2 python engineConn deployment and loading"),(0,r.kt)("p",null,"Here you can use the default loading method to be used normally."),(0,r.kt)("h3",{id:"23-tags-of-python-engine"},"2.3 tags of python engine"),(0,r.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,r.kt)("h2",{id:"3-use-of-python-engine"},"3. Use of Python engine"),(0,r.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,r.kt)("p",null,"Before submitting python on linkis, you only need to make sure that there is python path in your user's PATH."),(0,r.kt)("h3",{id:"31-how-to-use-scriptis"},"3.1 How to use Scriptis"),(0,r.kt)("p",null,"The way to use Scriptis is the simplest. You can directly enter Scriptis, right-click the directory and create a new python script, write python code and click Execute."),(0,r.kt)("p",null,"The execution logic of python is to start a python through Py4j\nGateway, and then the Python engine submits the code to the python executor for execution."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3050).Z})),(0,r.kt)("p",null,"Figure 3-1 Screenshot of the execution effect of python"),(0,r.kt)("h3",{id:"32-how-to-use-workflow"},"3.2 How to use workflow"),(0,r.kt)("p",null,"The DSS workflow also has a python node, you can drag into the workflow node, then double-click to enter and edit the code, and then execute it in the form of a workflow."),(0,r.kt)("h3",{id:"33-how-to-use-linkis-client"},"3.3 How to use Linkis Client"),(0,r.kt)("p",null,"Linkis also provides a client method to call spark tasks, the call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to <",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4"},"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4")," %BD%BF%E7%94%A8%E6%96%87%E6%A1%A3>."),(0,r.kt)("h2",{id:"4-python-engine-user-settings"},"4. Python engine user settings"),(0,r.kt)("p",null,"In addition to the above engine configuration, users can also make custom settings, such as the version of python and some modules that python needs to load."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3865).Z})),(0,r.kt)("p",null,"Figure 4-1 User-defined configuration management console of python"))}h.isMDXComponent=!0},3865:function(e,n,t){n.Z=t.p+"assets/images/jdbc-conf-fca524f6200e360db1f8b9740e1bddf6.png"},3050:function(e,n,t){n.Z=t.p+"assets/images/python-run-a442d0ab5e119eab2e0aebe935975dac.png"}}]);