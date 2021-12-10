"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2686],{3905:function(e,n,a){a.d(n,{Zo:function(){return k},kt:function(){return u}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},k=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,m=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return a?t.createElement(m,p(p({ref:n},k),{},{components:a})):t.createElement(m,p({ref:n},k))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1508:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return k},default:function(){return d}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),p=["components"],l={title:"\u7f16\u8bd1\u6253\u5305",sidebar_position:1},o=void 0,s={unversionedId:"development/linkis_compile_and_package",id:"version-1.0.2/development/linkis_compile_and_package",isDocsHomePage:!1,title:"\u7f16\u8bd1\u6253\u5305",description:"\u76ee\u5f55",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/development/linkis_compile_and_package.md",sourceDirName:"development",slug:"/development/linkis_compile_and_package",permalink:"/zh-CN/docs/development/linkis_compile_and_package",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/development/linkis_compile_and_package.md",tags:[],version:"1.0.2",sidebarPosition:1,frontMatter:{title:"\u7f16\u8bd1\u6253\u5305",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"EngineConn\u65b0\u589e\u6d41\u7a0b",permalink:"/zh-CN/docs/architecture/add_an_engine_conn"},next:{title:"\u524d\u7aef\u7ba1\u7406\u53f0",permalink:"/zh-CN/docs/development/web_build"}},k=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"1.\u5168\u91cf\u7f16\u8bd1 Linkis",id:"1\u5168\u91cf\u7f16\u8bd1-linkis",children:[]},{value:"2.\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757",id:"2\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757",children:[]},{value:"3. \u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce",id:"3-\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce",children:[]},{value:"4. \u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c",id:"4-\u5982\u4f55\u4fee\u6539linkis\u7684\u4f9d\u8d56\u7684hadoophivespark\u7248\u672c",children:[]}],c={toc:k};function d(e){var n=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#1%E5%85%A8%E9%87%8F%E7%BC%96%E8%AF%91-linkis"},"1. \u5168\u91cf\u7f16\u8bd1 Linkis"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#2%E7%BC%96%E8%AF%91%E5%8D%95%E4%B8%AA%E6%A8%A1%E5%9D%97"},"2. \u7f16\u8bd1\u5355\u4e2a\u6a21\u5757"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#3-%E7%BC%96%E8%AF%91%E6%9F%90%E4%B8%AA%E5%BC%95%E6%93%8E"},"3. \u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#4-%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9linkis%E7%9A%84%E4%BE%9D%E8%B5%96%E7%9A%84hadoophivespark%E7%89%88%E6%9C%AC"},"4. \u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/zh_CN/Development_Documents/Web/Build.md"},"5. \u7f16\u8bd1\u524d\u7aef\u7ba1\u7406\u53f0")))),(0,i.kt)("h2",{id:"1\u5168\u91cf\u7f16\u8bd1-linkis"},"1.\u5168\u91cf\u7f16\u8bd1 Linkis"),(0,i.kt)("p",null,"   ",(0,i.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u73af\u5883\u8981\u6c42\uff1a"),"  \u5fc5\u987b ",(0,i.kt)("strong",{parentName:"p"},"JDK8")," \u4ee5\u4e0a\uff0c",(0,i.kt)("strong",{parentName:"p"},"Oracle/Sun")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"OpenJDK"),"\u90fd\u652f\u6301\u3002"),(0,i.kt)("p",null,"   \u4ece git \u83b7\u53d6\u9879\u76ee\u4ee3\u7801\u540e\uff0c\u4f7f\u7528 maven \u7f16\u8bd1\u9879\u76ee\u5b89\u88c5\u5305\u3002  "),(0,i.kt)("p",null,"   ",(0,i.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f"),"\uff1a\u5b98\u65b9\u63a8\u8350\u4f7f\u7528 Hadoop-2.7.2\u3001Hive-1.2.1\u3001Spark-2.4.3 \u548c Scala-2.11.8 \u5bf9 Linkis \u8fdb\u884c\u7f16\u8bd1\u3002"),(0,i.kt)("p",null,"   \u5982\u679c\u60a8\u60f3\u4f7f\u7528 Hadoop\u3001Hive\u3001Spark \u7684\u5176\u4ed6\u7248\u672c\u5bf9 Linkis \u8fdb\u884c\u7f16\u8bd1\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"#4-%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9linkis%E7%9A%84%E4%BE%9D%E8%B5%96%E7%9A%84hadoophivespark%E7%89%88%E6%9C%AC"},"\u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c")),(0,i.kt)("p",null,"   (1) ",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u7f16\u8bd1\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x\n    mvn -N  install\n")),(0,i.kt)("p",null,"   (2) \u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x\n    mvn clean install\n")),(0,i.kt)("p",null,"   (3) \u83b7\u53d6\u5b89\u88c5\u5305\uff0c\u5728\u5de5\u7a0b\u7684assembly->target\u76ee\u5f55\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    ls wedatasphere-linkis-x.x.x/assembly/target/wedatasphere-linkis-x.x.x-dist.tar.gz\n")),(0,i.kt)("h2",{id:"2\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757"},"2.\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757"),(0,i.kt)("p",null,"   \u4ece git \u83b7\u53d6\u9879\u76ee\u4ee3\u7801\u540e\uff0c\u4f7f\u7528 maven \u6253\u5305\u9879\u76ee\u5b89\u88c5\u5305\u3002"),(0,i.kt)("p",null,"\uff081\uff09 ",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x\n    mvn -N  install\n")),(0,i.kt)("p",null,"\uff082\uff09 \u8df3\u8f6c\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1\uff0c\u6bd4\u5982\u60f3\u91cd\u65b0\u7f16\u8bd1 Entrance\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x/linkis-computation-governance/linkis-entrance\n    mvn clean install\n")),(0,i.kt)("p",null,"\uff083\uff09 \u83b7\u53d6\u5b89\u88c5\u5305\uff0c\u5728\u5bf9\u5e94\u6a21\u5757\u7684->target\u76ee\u5f55\u4e0b\u4f1a\u6709\u7f16\u8bd1\u597d\u7684\u5305\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    ls wedatasphere-linkis-x.x.x/linkis-computation-governance/linkis-entrance/target/linkis-entrance.x.x.x.jar\n")),(0,i.kt)("h2",{id:"3-\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce"},"3. \u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce"),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ee5\u7f16\u8bd1 Linkis \u7684 Spark \u5f15\u64ce\u4e3a\u4f8b\uff1a"),(0,i.kt)("p",null,"\uff081\uff09 ",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x\n    mvn -N  install\n")),(0,i.kt)("p",null,"\uff082\uff09 \u8df3\u8f6c\u5230 Spark \u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark\n    mvn clean install\n")),(0,i.kt)("p",null,"\uff083\uff09 \u83b7\u53d6\u5b89\u88c5\u5305\uff0c\u5728\u5bf9\u5e94\u6a21\u5757\u7684->target\u76ee\u5f55\u4e0b\u4f1a\u6709\u7f16\u8bd1\u597d\u7684\u5305\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    ls wedatasphere-linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark/target/linkis-engineplugin-spark-x.x.x.zip\n")),(0,i.kt)("p",null,"\u5982\u4f55\u5355\u72ec\u5b89\u88c5 Spark \u5f15\u64ce\uff1f \u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"../deployment/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3.md"},"Linkis \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5\u6587\u6863")),(0,i.kt)("h2",{id:"4-\u5982\u4f55\u4fee\u6539linkis\u7684\u4f9d\u8d56\u7684hadoophivespark\u7248\u672c"},"4. \u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff1aHadoop \u4f5c\u4e3a\u5927\u6570\u636e\u57fa\u7840\u670d\u52a1\uff0cLinkis \u5fc5\u987b\u4f9d\u8d56 Hadoop \u8fdb\u884c\u7f16\u8bd1\uff1b\n\u800c Spark\u3001Hive\u7b49\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u5219\u4e0d\u7136\uff0c\u5982\u679c\u60a8\u4e0d\u60f3\u4f7f\u7528\u67d0\u4e2a\u5f15\u64ce\uff0c\u53ef\u4ee5\u65e0\u9700\u8bbe\u7f6e\u8be5\u5f15\u64ce\u7684\u7248\u672c\uff0c\u65e0\u9700\u7f16\u8bd1\u8be5\u5f15\u64ce\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u800c\u8a00\uff0c\u4fee\u6539 Hadoop \u7684\u7248\u672c\u4e0e Spark\u3001Hive \u7b49\u8ba1\u7b97\u5f15\u64ce\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\uff1a"),(0,i.kt)("h4",{id:"\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-hadoop-\u7248\u672c"},"\u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Hadoop \u7248\u672c\uff1f"),(0,i.kt)("p",null,"\u8fdb\u5165 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684 Hadoop \u7248\u672c\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x\n    vim pom.xml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n      \n        <hadoop.version>2.7.2</hadoop.version> \x3c!--\x3e \u5728\u8fd9\u91cc\u4fee\u6539Hadoop\u7248\u672c\u53f7 <--\x3e\n              \n        <scala.version>2.11.8</scala.version>\n        <jdk.compile.version>1.8</jdk.compile.version>\n              \n    </properties>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u7684hadoop\u7248\u672c\u662fhadoop3\uff0c\u9700\u8981\u4fee\u6539linkis-hadoop-common\u7684pom\u6587\u4ef6"),"\n\u56e0\u4e3a\u5728hadoop2.8\u4ee5\u4e0b\u7684\u65f6\u5019\uff0chdfs\u76f8\u5173\u7684class\u662f\u5728hadoop-hdfs\u6a21\u5757\u4e2d\u7684\uff0c\u4f46\u662f\u5728hadoop 3.X\u4e2d\u5c06\u5bf9\u5e94\u7684class\u79fb\u52a8\u5230\u4e86\u6a21\u5757hadoop-hdfs-client\u5f53\u4e2d\uff0c\u60a8\u9700\u8981\u4fee\u6539\u4e0b\u8fd9\u4e2a\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pom:Linkis/linkis-commons/linkis-hadoop-common/pom.xml\n\u4fee\u6539\u4f9d\u8d56hadoop-hdfs\u4e3ahadoop-hdfs-client\uff1a\n <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-hdfs</artifactId>  \x3c!-- \u53ea\u9700\u8981\u5c06\u8be5\u884c\u66ff\u6362\u5373\u53ef\uff0c\u66ff\u6362\u4e3a <artifactId>hadoop-hdfs-client</artifactId>--\x3e\n            <version>${hadoop.version}</version>\n            ...\n \u5c06hadoop-hdfs\u4fee\u6539\u4e3a\uff1a\n  <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-hdfs-client</artifactId>\n            <version>${hadoop.version}</version>\n            ...\n")),(0,i.kt)("h4",{id:"\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-sparkhive-\u7248\u672c"},"\u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Spark\u3001Hive \u7248\u672c\uff1f"),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ee5\u4fee\u6539 Spark \u7684\u7248\u672c\u4e3a\u4f8b\u8fdb\u884c\u4ecb\u7ecd\u3002\u8fdb\u5165 Spark \u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684 Spark \u7248\u672c\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark\n    vim pom.xml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n      \n        <spark.version>2.4.3</spark.version>  \x3c!--\x3e \u5728\u8fd9\u91cc\u4fee\u6539Spark\u7248\u672c\u53f7 <--\x3e\n              \n    </properties>\n")),(0,i.kt)("p",null,"\u4fee\u6539\u5176\u4ed6\u5f15\u64ce\u7684\u7248\u672c\u4e0e\u4fee\u6539 Spark \u7248\u672c\u7c7b\u4f3c\uff0c\u5148\u8fdb\u5165\u76f8\u5173\u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684\u5f15\u64ce\u7248\u672c\u4fe1\u606f\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"#3-%E7%BC%96%E8%AF%91%E6%9F%90%E4%B8%AA%E5%BC%95%E6%93%8E"},"\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce")))}d.isMDXComponent=!0}}]);