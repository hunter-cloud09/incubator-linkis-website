import{o as e,c as n,m as t,b as i,e as o,r,l as s,u as l}from"./vendor.1180558b.js";const a={class:"markdown-body"},c=[t('<h2>Tuning and troubleshooting</h2><p>In the process of preparing for the release of a version, we will try our best to find deployment and installation problems in advance and then repair them. Because everyone has some differences in the deployment environments, we sometimes have no way to predict all the problems and solutions in advance. However, due to the existence of the community, many of your problems will overlap. Perhaps the installation and deployment problems you have encountered have already been discovered and solved by users. Therefore, for some problems that cannot be accurately located by themselves, the basic idea and priority of the recommended troubleshooting steps can be: <strong>Search keywords in the community issue catalog —&gt;Check the “Q&amp;A Problem Summary” document in the community—&gt;Locate system log—&gt;Community user group consultation and communication—&gt;Locate source code and do remote debug</strong></p><h3>Ⅰ. How to locate the exception log</h3><p>If an interface request reports an error, we can locate the problematic microservice based on the return of the interface. Under normal circumstances, we can **locate according to the URL specification. **URLs in the Linkis interface follow certain design specifications. That is, the format of <strong>/api/rest_j/v1/{applicationName}/.+</strong>, the application name can be located through applicationName. Some applications themselves are microservices. At this time, the application name is the same as the microservice name, and part of the application itself is a microservice, at this time, you should find the belonging microservice by the application name, and check the log under the corresponding microservice. The corresponding relationship between the microservice and the application name is given below.</p><table><thead><tr><th><strong>ApplicationName</strong></th><th><strong>Microservice</strong></th></tr></thead><tbody><tr><td>cg-linkismanager</td><td>cg-linkismanager</td></tr><tr><td>cg-engineplugin</td><td>cg-engineplugin</td></tr><tr><td>cg-engineconnmanager</td><td>cg-engineconnmanager</td></tr><tr><td>cg-entrance</td><td>cg-entrance</td></tr><tr><td>ps-bml</td><td>ps-bml</td></tr><tr><td>ps-cs</td><td>ps-cs</td></tr><tr><td>ps-datasource</td><td>ps-datasource</td></tr><tr><td>configuration</td><td></td></tr><tr><td>instance-label</td><td></td></tr><tr><td>jobhistory</td><td>ps-publicservice</td></tr><tr><td>variable</td><td></td></tr><tr><td>udf</td><td></td></tr></tbody></table><h3>Ⅱ. community issue column search keywords</h3><p>On the homepage of the github community, the issue column retains some of the problems and solutions encountered by community users, which is very suitable for quickly finding solutions after encountering problems, just search for keywords that report errors in the filter filter.</p><h3>Ⅲ. “Q&amp;A Question Summary”</h3><p>“Linkis 1.0 FAQ”, this document contains a summary of common problems and solutions during the installation and deployment process.</p><h3>Ⅳ. Locating system log</h3><p>Generally, errors can be divided into three stages: an error is reported when installing and executing install.sh, an error is reported when the microservice is started, and an error is reported when the engine is started.</p><ol><li><p><strong>An error occurred when executing install.sh</strong>, usually in the following situations</p><ol><li><p>Missing environment variables: For example, the environment of java/python/Hadoop/hive/spark needs to be configured under the standard version, and the corresponding verification operation will be performed when the script is installed. If you encounter this kind of problem, there will be a lot of problems. Clear prompts for missing environment variables, such as exception -bash spark-submit: command not found, etc.</p></li><li><p>The system version does not match: Linkis currently supports most versions of Linux. The compatibility of the os version is the best, and some system versions may have command incompatibility. For example, the poor compatibility of yum in ubantu may cause yum-related errors in the installation and deployment. In addition, it is also recommended not to use windows as much as possible. Deploying linkis, currently no script is fully compatible with the .bat command.</p></li><li><p>Missing configuration item: There are two configuration files that need to be modified in linkis1.0 version, linkis-env.sh and db.sh</p><p>The former contains the environment parameters that linkis needs to load during execution, and the latter is the database information that linkis itself needs to store related tables. Under normal circumstances, if the corresponding configuration is missing, the error message will show an exception related to the Key value. For example, when db.sh does not fill in the relevant database configuration, unknow will appear mysql server host ‘-P’ is abnormal, which is caused by missing host.</p></li></ol></li><li><p><strong>Report error when starting microservice</strong></p><p>Linkis puts the log files of all microservices into the logs directory. The log directory levels are as follows:</p><pre><code>├── linkis-computation-governance\n│ ├── linkis-cg-engineconnmanager\n│ ├── linkis-cg-engineplugin\n│ ├── linkis-cg-entrance\n│ └── linkis-cg-linkismanager\n├── linkis-public-enhancements\n│ ├── linkis-ps-bml\n│ ├── linkis-ps-cs\n│ ├── linkis-ps-datasource\n│ └── linkis-ps-publicservice\n└── linkis-spring-cloud-services\n│ ├── linkis-mg-eureka\n└─├── linkis-mg-gateway\n</code></pre><p>It includes three microservice modules: computing governance, public enhancement, and microservice management. Each microservice contains three logs, linkis-gc.log, linkis.log, and linkis.out, corresponding to the service’s GC log, service log, and service System.out log.</p><p>Under normal circumstances, when an error occurs when starting a microservice, you can cd to the corresponding service in the log directory to view the related log to troubleshoot the problem. Generally, the most frequently occurring problems can also be divided into three categories:</p><ol><li><p><strong>Port Occupation</strong>: Since the default port of Linkis microservices is mostly concentrated at 9000, it is necessary to check whether the port of each microservice is occupied by other microservices before starting. If it is occupied, you need to change conf/ The microservice port corresponding to the linkis-env.sh file</p></li><li><p><strong>Necessary configuration parameters are missing</strong>: For some microservices, certain user-defined parameters must be loaded before they can be started normally. For example, the linkis-cg-engineplugin microservice will load conf/ when it starts. For the configuration related to wds.linkis.engineconn.* in linkis.properties, if the user changes the Linkis path after installation, if the configuration does not correspond to the modification, an error will be reported when the linkis-cg-engineplugin microservice is started.</p></li><li><p><strong>System environment is not compatible</strong>: It is recommended that users refer to the recommended system and application versions in the official documents as much as possible when deploying and installing, and install necessary system plug-ins, such as expect, yum, etc. If the application version is not compatible, It may cause errors related to the application. For example, the incompatibility of SQL statements in the mysql5.7 version may cause errors in the linkis.ddl and linkis.dml files when initializing the db during the installation process. You need to refer to the “Q&amp;A Problem Summary” or the deployment documentation to make the corresponding settings.</p></li></ol></li><li><p><strong>Report error during microservice execution period</strong></p><p>The situation of error reporting during the execution of microservices is more complicated, and the situations encountered are also different depending on the environment, but the troubleshooting methods are basically the same. Starting from the corresponding microservice error catalog, we can roughly divide it into three situations:</p><ol><li><p><strong>Manually installed and deployed microservices report errors</strong>: The logs of this type of microservice are unified under the log/ directory. After locating the microservice, enter the corresponding directory to view it.</p></li><li><p><strong>engine start failure</strong>: insufficient resources, request engine failure: When this type of error occurs, it is not necessarily due to insufficient resources, because the front end will only grab the logs after the Spring project is started, for errors before the engine is started cannot be fetched well. There are three kinds of high-frequency problems found in the actual use process of internal test users:</p><p>a. <strong>The engine cannot be created because there is no engine directory permission</strong>: The log will be printed to the linkis.out file under the cg-engineconnmanager microservice. You need to enter the file to view the specific reason.</p><p>b. <strong>There is a dependency conflict in the engine lib package</strong>, **The server cannot start normally because of insufficient memory resources: **Since the engine directory has been created, the log will be printed to the stdout file under the engine, and the engine path can refer to c</p><p>c. <strong>Errors reported during engine execution</strong>: Each started engine is a microservice that is dynamically loaded and started during runtime. When the engine is started, if an error occurs, you need to find the corresponding log of the engine in the corresponding startup user directory. The corresponding root path is <strong>ENGINECONN_ROOT_PATH</strong> filled in <strong>linkis-env</strong> before installation. If you need to modify the path after installation, you need to modify wds.linkis.engineconn.root.dir in linkis.properties.</p></li></ol></li></ol><h3>Ⅴ. Community user group consultation and communication</h3><p>For problems that cannot be resolved according to the above process positioning during the installation and deployment process, you can send error messages in our community group. In order to facilitate community partners and developers to help solve them and improve efficiency, it is recommended that when you ask questions, You can describe the problem phenomenon, related log information, and the places that have been checked are sent out together. If you think it may be an environmental problem, you need to list the corresponding application version together**. We provide two online groups: WeChat group and QQ group. The communication channels and specific contact information can be found at the bottom of the Linkis github homepage.</p><h3>Ⅵ. locate the source code by remote debug</h3><p>Under normal circumstances, remote debugging of source code is the most effective way to locate problems, but compared to document review, users need to have a certain understanding of the source code structure. It is recommended that you check the <a href="https://github.com/WeBankFinTech/Linkis/wiki/Linkis%E6%BA%90%E7%A0%81%E5%B1%82%E7%BA%A7%E7%BB%93%E6%9E%84%E8%AF%A6%E8%A7%A3">Linkis source code level detailed structure</a> in the Linkis WIKI before remote debugging.After having a certain degree of familiarity to the the source code structure of the project, after a certain degree of familiarity, you can refer to <a href="https://github.com/WeBankFinTech/Linkis/wiki/Linkis%E5%92%8CDSS%E8%B0%83%E8%AF%95%E6%96%87%E6%A1%A3">How to Debug Linkis</a>.</p>',16)],u={setup:(t,{expose:i})=>(i({frontmatter:{}}),(t,i)=>(e(),n("div",a,c)))};const d={class:"markdown-body"},p=[i("h2",null,"调优排障",-1),i("p",null,[o("在版本发布的准备过程中，我们会尽力提前发现部署和安装方面的问题然后修复，由于每个人部署的环境都有一些差异，我们有时候也没有办法提前预知所有的出现的问题和解决方案。不过由于社区的存在，大家的很多问题都会重合，也许大家遇到的安装部署方面的问题已经有用户发现并解决过，所以对于一些无法自行精确定位的问题，建议的排查级基本思路优先级可以按照："),i("strong",null,"社区issue专栏搜索关键词—>在社区查阅《Q&A问题总结》文档—>定位系统日志—>社区用户群咨询交流—>定位源码远程debug")],-1),i("h3",null,"一、如何进行异常日志定位",-1),i("p",null,[o("如果某个接口请求报错，我们可以根据接口的返回加过中定位出现问题的微服务，一般情况下可以"),i("strong",null,[o("根据URL规范进行定位，"),i("strong",null,"Linkis接口中的URL都遵循着一定的设计规范，即"),o("/api/rest_j/v1/{applicationName}/.+的格式")]),o("，通过applicationName可以定位应用名，部分应用本身是一个微服务，这时候应用名和微服务名相同，部分应用归属于某个微服务，此时应该通过应用名查找归属的微服务，去对应的微服务下查看log日志，下面给出微服务和应用名的对应关系。")],-1),i("table",null,[i("thead",null,[i("tr",null,[i("th",null,[i("strong",null,"ApplicationName")]),i("th",null,[i("strong",null,"Microservice")])])]),i("tbody",null,[i("tr",null,[i("td",null,"cg-linkismanager"),i("td",null,"cg-linkismanager")]),i("tr",null,[i("td",null,"cg-engineplugin"),i("td",null,"cg-engineplugin")]),i("tr",null,[i("td",null,"cg-engineconnmanager"),i("td",null,"cg-engineconnmanager")]),i("tr",null,[i("td",null,"cg-entrance"),i("td",null,"cg-entrance")]),i("tr",null,[i("td",null,"ps-bml"),i("td",null,"ps-bml")]),i("tr",null,[i("td",null,"ps-cs"),i("td",null,"ps-cs")]),i("tr",null,[i("td",null,"ps-datasource"),i("td",null,"ps-datasource")]),i("tr",null,[i("td",null,"configuration"),i("td")]),i("tr",null,[i("td",null,"instance-label"),i("td")]),i("tr",null,[i("td",null,"jobhistory"),i("td",null,"ps-publicservice")]),i("tr",null,[i("td",null,"variable"),i("td")]),i("tr",null,[i("td",null,"udf"),i("td")])])],-1),i("h3",null,"二、社区issue专栏搜索关键词",-1),i("p",null,[o("在github社区首页，issue专栏留存了社区用户遇到的部分问题和解决方案，非常适合在遇到问题后快速寻找解决方案，在filter过滤器中搜索报错的关键词即可。"),i("img",{src:"/assets/searching_keywords.41a60149.png",alt:""})],-1),i("h3",null,"三、《Q&A问题总结》",-1),i("p",null,[o("在Linkis文档中，专门整理出一篇包含安装部署过程中常见问题汇总以及解决方案的文档《 "),i("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/zh_CN/Tuning_and_Troubleshooting/Q&A.md"},"Linkis 1.0常见问题"),o(" 》")],-1),i("h3",null,"四、定位系统日志",-1),i("p",null,"通常出现错误的情况可以分为三种阶段：安装执行install.sh时报错、启动微服务报错、启动引擎报错。",-1),i("ol",null,[i("li",null,[i("p",null,[i("strong",null,"执行install.sh时出现错误"),o("，通常有如下几种情况")]),i("ol",null,[i("li",null,[i("p",null,"环境变量缺失：例如java/python/Hadoop/hive/spark的环境在标准版下需要进行配置，在安装脚本的时候也会进行相应的校验操作，如果遇到这种问题一般都会有很明确的缺少环境变量的提示，例如异常-bash spark-submit:command not found等。")]),i("li",null,[i("p",null,"系统版本不匹配：目前Linkis支持Linux大部分版本，对cent os版本的兼容性最好，某些系统版本会存在命令不兼容的情况，例如ubantu中对yum的兼容较差，可能会导致安装部署是出现yum相关的报错，此外也建议尽量不要在windows下部署linkis，目前没有脚本完全兼容.bat命令。")]),i("li",null,[i("p",null,"配置项缺失：linkis1.0版本需要修改的配置文件有两个，linkis-env.sh和db.sh，"),i("p",null,"前者包含了linkis在执行期间需要加载的环境参数，后者是linkis自身需要存储相关表的数据库信息。通常情况下如果缺少对应的配置，报错信息会出现Key值相关的异常，例如db.sh没填写相关数据库配置时，会出现unknow mysql server host ‘-P’异常，这是由于host缺失导致的。")])])]),i("li",null,[i("p",null,[i("strong",null,"启动微服务报错")]),i("p",null,"Linkis将所有微服务的日志文件统一放入了logs目录，日志目录层级如下："),i("p",null,[o("├── linkis-computation-governance"),i("br"),o(" │ ├── linkis-cg-engineconnmanager"),i("br"),o(" │ ├── linkis-cg-engineplugin"),i("br"),o(" │ ├── linkis-cg-entrance"),i("br"),o(" │ └── linkis-cg-linkismanager"),i("br"),o(" ├── linkis-public-enhancements"),i("br"),o(" │ ├── linkis-ps-bml"),i("br"),o(" │ ├── linkis-ps-cs"),i("br"),o(" │ ├── linkis-ps-datasource"),i("br"),o(" │ └── linkis-ps-publicservice"),i("br"),o(" └── linkis-spring-cloud-services"),i("br"),o(" │ ├── linkis-mg-eureka"),i("br"),o(" └─├── linkis-mg-gateway")]),i("p",null,"包含计算治理、公共增强、微服务管理三大微服务模块。每个微服务下包含linkis-gc.log、linkis.log、linkis.out三个日志。分别对应服务的GC日志、服务日志、服务的System.out日志。"),i("p",null,"通常情况下，启动某个微服务出错时，可以cd到log目录的对应服务内查看相关日志排查问题，一般情况下出现频率最高的问题也可以分为三类："),i("ol",null,[i("li",null,[i("p",null,[i("strong",null,"端口占用"),o("：由于Linkis微服务的默认端口大多集中在9000，在启动前需要检查每个微服务的端口是否被其他微服务所占用，如果有占用的情况，需要更改conf/linkis-env.sh文件对应的微服务端口")])]),i("li",null,[i("p",null,[i("strong",null,"必要的配置参数缺失"),o("：对于某些微服务来说，在启动是必须要加载某些用户自定义参数才能正常启动，例如linkis-cg-engineplugin微服务在启动时会加载conf/linkis.properties中的wds.linkis.engineconn.*相关的配置，如果用户在安装后对Linkis的路径有更改，不对应修改该配置时，启动linkis-cg-engineplugin微服务就会报错。")])]),i("li",null,[i("p",null,[i("strong",null,"系统环境不兼容"),o("：建议用户在部署安装时尽量参考官方文档中建议的系统及应用版本，以及安装必要的系统插件，例如expect、yum等，对于应用版本如果不兼容时，可能会引发该应用相关的错误，例如mysql5.7版本中由于SQL语句不兼容可能会导致安装过程中初始化db时，linkis.ddl和linkis.dml文件报错，需要参考《Q&A问题汇总》或者部署文档进行相应的设置才能解决。")])])])]),i("li",null,[i("p",null,[i("strong",null,"微服务执行期报错")]),i("p",null,"微服务执行期报错的情况比较复杂，遇到的情况也都因环境而异，但排查的方式基本一致，从对应的微服务报错目录出发，我们大致可以分为三种情况："),i("ol",null,[i("li",null,[i("p",null,[i("strong",null,"手动安装部署的微服务报错"),o("：该类微服务日志统一放在log/目录下，定位到微服务之后，进入对应目录查看即可。")])]),i("li",null,[i("p",null,[i("strong",null,"动态启动引擎失败"),o("：资源不足，请求引擎失败：出现该类报错时，不一定是因为资源不足，由于前端只会抓取Spring项目启动后的日志，对于引擎启动前的错误无法很好的抓取。经过内测用户的实际使用过程中发现有三种高频问题：")]),i("p",null,[o("a. "),i("strong",null,[o("由于没有引擎目录权限无法创建引擎："),i("strong",null,"日志会打印到"),o("cg-engineconnmanager微服务下的linkis.out")]),o("文件中，需要进入该文件查看具体原因。")]),i("p",null,[o("b. "),i("strong",null,"引擎lib包中存在依赖冲突"),o("、**服务器内存资源不足无法正常启动：**由于已经创建了引擎目录，所以日志会打印到引擎下的stdout文件中，引擎路径可以参考c")]),i("p",null,[o("c. "),i("strong",null,"引擎执行期报错"),o("：每个被启动的引擎都是在运行期动态加载启动的微服务，当引擎启动后，出现报错则需要去对应启动用户目录下寻找该引擎对应日志，对应的根路径为安装前"),i("strong",null,"linkis-env"),o("中填写的"),i("strong",null,"ENGINECONN_ROOT_PATH"),o("，如果安装后需要修改该路径，则需要在linkis.properties中修改wds.linkis.engineconn.root.dir。")])])])])],-1),i("h3",null,"五、社区用户群咨询交流",-1),i("p",null,[o("对于安装部署过程中按照上述流程定位仍无法解决的问题，可以在我们的社区群中将报错信息发出来，为了方便社区伙伴和开发人员帮助解决，提升效率，"),i("strong",null,"建议您提问时，可以将问题现象、相关日志信息、已经排查过的地方一并发出，如果觉得可能是环境问题，则需要将对应的应用版本也一并列出"),o("，我们提供了微信群和QQ群两种线上交流渠道，具体联系方式可以在Linkis的github首页最下方看到。")],-1),i("h3",null,"六、定位源码远程debug",-1),i("p",null,[o("通常情况下，对源码远程debug是定位问题最有效的方式，但相对查阅文档来说，需要用户对源码结构有一定的了解，这里建议您在远程debug前查阅Linkis WIKI中的《 "),i("a",{href:"https://github.com/WeBankFinTech/Linkis/wiki/Linkis%E6%BA%90%E7%A0%81%E5%B1%82%E7%BA%A7%E7%BB%93%E6%9E%84%E8%AF%A6%E8%A7%A3"},"Linkis源码层级结构详解"),o(" 》,对项目的源码结构进行初步的了解，有一定程度上的熟悉之后，可以参考WIKI中的《 "),i("a",{href:"https://github.com/WeBankFinTech/Linkis/wiki/Linkis%E5%92%8CDSS%E8%B0%83%E8%AF%95%E6%96%87%E6%A1%A3"},"如何DebugLinkis"),o(" 》一文调试对应微服务下的代码。")],-1)],h={setup:(t,{expose:i})=>(i({frontmatter:{}}),(t,i)=>(e(),n("div",d,p)))},g={setup(n){const t=r(localStorage.getItem("locale")||"en");return(n,i)=>"en"===t.value?(e(),s(l(u),{key:0})):(e(),s(l(h),{key:1}))}};export{g as default};
