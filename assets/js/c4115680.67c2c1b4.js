"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9807],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),p=l,g=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return t?i.createElement(g,r(r({ref:n},c),{},{components:t})):i.createElement(g,r({ref:n},c))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var u=2;u<o;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7863:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=t(7462),l=t(3366),o=(t(7294),t(3905)),r=["components"],a={title:"Shell Engine Usage",sidebar_position:2},s="Shell engine usage document",u={unversionedId:"engine_usage/shell",id:"engine_usage/shell",isDocsHomePage:!1,title:"Shell Engine Usage",description:"This article mainly introduces the configuration, deployment and use of Shell engine in Linkis1.0",source:"@site/docs/engine_usage/shell.md",sourceDirName:"engine_usage",slug:"/engine_usage/shell",permalink:"/docs/next/engine_usage/shell",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/engine_usage/shell.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Shell Engine Usage",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Python Engine Usage",permalink:"/docs/next/engine_usage/python"},next:{title:"Spark Engine Usage",permalink:"/docs/next/engine_usage/spark"}},c=[{value:"1. The environment configuration before using the Shell engine",id:"1-the-environment-configuration-before-using-the-shell-engine",children:[]},{value:"2. Shell engine configuration and deployment",id:"2-shell-engine-configuration-and-deployment",children:[{value:"2.1 Shell version selection and compilation",id:"21-shell-version-selection-and-compilation",children:[]},{value:"2.2 shell engineConn deployment and loading",id:"22-shell-engineconn-deployment-and-loading",children:[]},{value:"2.3 Labels of the shell engine",id:"23-labels-of-the-shell-engine",children:[]}]},{value:"3. Use of Shell Engine",id:"3-use-of-shell-engine",children:[{value:"Ready to operate",id:"ready-to-operate",children:[]},{value:"3.1 How to use Scriptis",id:"31-how-to-use-scriptis",children:[]},{value:"3.2 How to use workflow",id:"32-how-to-use-workflow",children:[]},{value:"3.3 How to use Linkis Client",id:"33-how-to-use-linkis-client",children:[]}]},{value:"4. Shell engine user settings",id:"4-shell-engine-user-settings",children:[]}],h={toc:c};function d(e){var n=e.components,a=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shell-engine-usage-document"},"Shell engine usage document"),(0,o.kt)("p",null,"This article mainly introduces the configuration, deployment and use of Shell engine in Linkis1.0"),(0,o.kt)("h2",{id:"1-the-environment-configuration-before-using-the-shell-engine"},"1. The environment configuration before using the Shell engine"),(0,o.kt)("p",null,"If you want to use the shell engine on your server, you need to ensure that the user's PATH has the bash execution directory and execution permissions."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,o.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,o.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sh execution environment"),(0,o.kt)("td",{parentName:"tr",align:null},"bash environment variables"),(0,o.kt)("td",{parentName:"tr",align:null},"bash is recommended")))),(0,o.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,o.kt)("h2",{id:"2-shell-engine-configuration-and-deployment"},"2. Shell engine configuration and deployment"),(0,o.kt)("h3",{id:"21-shell-version-selection-and-compilation"},"2.1 Shell version selection and compilation"),(0,o.kt)("p",null,"The shell engine does not need to be compiled by the user, and the compiled shell engine plug-in package can be used directly."),(0,o.kt)("h3",{id:"22-shell-engineconn-deployment-and-loading"},"2.2 shell engineConn deployment and loading"),(0,o.kt)("p",null,"Here you can use the default loading method to be used normally."),(0,o.kt)("h3",{id:"23-labels-of-the-shell-engine"},"2.3 Labels of the shell engine"),(0,o.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,o.kt)("h2",{id:"3-use-of-shell-engine"},"3. Use of Shell Engine"),(0,o.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,o.kt)("p",null,"Before submitting the shell on linkis, you only need to ensure that there is the path of the shell in your user's $PATH."),(0,o.kt)("h3",{id:"31-how-to-use-scriptis"},"3.1 How to use Scriptis"),(0,o.kt)("p",null,"The use of Scriptis is the simplest. You can directly enter Scriptis, right-click the directory and create a new shell script, write shell code and click Execute."),(0,o.kt)("p",null,"The execution principle of the shell is that the shell engine starts a system process to execute through the ProcessBuilder that comes with java, and redirects the output of the process to the engine and writes it to the log."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(9247).Z})),(0,o.kt)("p",null,"Figure 3-1 Screenshot of shell execution effect"),(0,o.kt)("h3",{id:"32-how-to-use-workflow"},"3.2 How to use workflow"),(0,o.kt)("p",null,"The DSS workflow also has a shell node. You can drag in the workflow node, then double-click to enter and edit the code, and then execute it in the form of a workflow."),(0,o.kt)("p",null,"Shell execution needs to pay attention to one point. If the workflow is executed in multiple lines, the success of the workflow node is determined by the last command. For example, the first two lines are wrong, but the shell return value of the last line is 0, then this node Is successful."),(0,o.kt)("h3",{id:"33-how-to-use-linkis-client"},"3.3 How to use Linkis Client"),(0,o.kt)("p",null,"Linkis also provides a client method to call the shell task, the calling method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to <",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4"},"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4")," %BD%BF%E7%94%A8%E6%96%87%E6%A1%A3>."),(0,o.kt)("h2",{id:"4-shell-engine-user-settings"},"4. Shell engine user settings"),(0,o.kt)("p",null,"The shell engine can generally set the maximum memory of the engine JVM."))}d.isMDXComponent=!0},9247:function(e,n,t){n.Z=t.p+"assets/images/shell-run-1948a5fed5d410d18fb17ae3cf7c9d95.png"}}]);