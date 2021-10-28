import{o as n,c as l,b as e,e as t,r as o,l as a,u as s}from"./vendor.1180558b.js";var i="/assets/Linkis1.0_combined_eureka.dad2589e.png";const u={class:"markdown-body"},r=[e("h1",null,"Linkis1.0 Deployment document",-1),e("h2",null,"Notes",-1),e("p",null,[t("If you are new to Linkis, you can ignore this chapter, however, if you are already a Linkis user, we recommend you reading the following article before installing or upgrading: "),e("a",{href:"/#/docs/architecture/difference"},"Brief introduction of the difference between Linkis1.0 and Linkis0.X"),t(".")],-1),e("p",null,[t("Please note: Apart from the four EngineConnPlugins included in the Linkis1.0 installation package by default: Python/Shell/Hive/Spark. You can manually install other types of engines such as JDBC depending on your own needs. For details, please refer to EngineConnPlugin installation documents "),e("a",{href:"/#/docs/deploy/engins"},"EngineConnPlugin installation documents"),t(".")],-1),e("p",null,"Engines that Linkis1.0 has adapted by default are listed below:",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Engine Type"),e("th",null,"Adaptation Situation"),e("th",null,"Included in official installation package")])]),e("tbody",null,[e("tr",null,[e("td",null,"Python"),e("td",null,"Adapted in 1.0"),e("td",null,"Included")]),e("tr",null,[e("td",null,"JDBC"),e("td",null,"Adapted in 1.0"),e("td",null,[e("strong",null,"Not Included")])]),e("tr",null,[e("td",null,"Shell"),e("td",null,"Adapted in 1.0"),e("td",null,"Included")]),e("tr",null,[e("td",null,"Hive"),e("td",null,"Adapted in 1.0"),e("td",null,"Included")]),e("tr",null,[e("td",null,"Spark"),e("td",null,"Adapted in 1.0"),e("td",null,"Included")]),e("tr",null,[e("td",null,"Pipeline"),e("td",null,"Adapted in 1.0"),e("td",null,[e("strong",null,"Not Included")])]),e("tr",null,[e("td",null,"Presto"),e("td",null,[e("strong",null,"Not adapted in 1.0")]),e("td",null,[e("strong",null,"Not Included")])]),e("tr",null,[e("td",null,"ElasticSearch"),e("td",null,[e("strong",null,"Not adapted in 1.0")]),e("td",null,[e("strong",null,"Not Included")])]),e("tr",null,[e("td",null,"Impala"),e("td",null,[e("strong",null,"Not adapted in 1.0")]),e("td",null,[e("strong",null,"Not Included")])]),e("tr",null,[e("td",null,"MLSQL"),e("td",null,[e("strong",null,"Not adapted in 1.0")]),e("td",null,[e("strong",null,"Not Included")])]),e("tr",null,[e("td",null,"TiSpark"),e("td",null,[e("strong",null,"Not adapted in 1.0")]),e("td",null,[e("strong",null,"Not Included")])])])],-1),e("h2",null,"1. Determine your installation environment",-1),e("p",null,"The following is the dependency information for each engine.",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Engine Type"),e("th",null,"Dependency"),e("th",null,"Special Instructions")])]),e("tbody",null,[e("tr",null,[e("td",null,"Python"),e("td",null,"Python Environment"),e("td",null,"If the path of logs and result sets are configured as hdfs://, then the HDFS environment is needed.")]),e("tr",null,[e("td",null,"JDBC"),e("td",null,"No dependency"),e("td",null,"If the path of logs and result sets are configured as hdfs://, then the HDFS environment is needed.")]),e("tr",null,[e("td",null,"Shell"),e("td",null,"No dependency"),e("td",null,"If the path of logs and result sets are configured as hdfs://, then the HDFS environment is needed.")]),e("tr",null,[e("td",null,"Hive"),e("td",null,"Hadoop and Hive Environment"),e("td")]),e("tr",null,[e("td",null,"Spark"),e("td",null,"Hadoop/Hive/Spark"),e("td")])])],-1),e("p",null,"**Requirement: At least 3G memory is required to install Linkis. **",-1),e("p",null,[t("The default JVM heap memory of each microservice is 512M, and the heap memory of each microservice can be adjusted uniformly by modifying "),e("code",null,"SERVER_HEAP_SIZE"),t(".If your computer resources are small, we suggest to modify this parameter to 128M. as follows:")],-1),e("pre",null,[e("code",{class:"language-bash"},"    vim ${LINKIS_HOME}/config/linkis-env.sh\n")],-1),e("pre",null,[e("code",{class:"language-bash"},'    # java application default jvm memory.\n    export SERVER_HEAP_SIZE="128M"\n')],-1),e("hr",null,null,-1),e("h2",null,"2. Linkis environment preparation",-1),e("h3",null,"a. Fundamental software installation",-1),e("p",null,"The following softwares must be installed:",-1),e("ul",null,[e("li",null,"MySQL (5.5+), How to install MySQL"),e("li",null,"JDK (1.8.0_141 or higher) How to install JDK")],-1),e("h3",null,"b. Create user",-1),e("p",null,[t("For example: "),e("strong",null,"The deploy user is hadoop"),t(".")],-1),e("ol",null,[e("li",null,"Create a deploy user on the machine for installation.")],-1),e("pre",null,[e("code",{class:"language-bash"},"    sudo useradd hadoop  \n")],-1),e("ol",{start:"2"},[e("li",null,"Since the services of Linkis use sudo -u {linux-user} to switch engines to execute jobs, the deploy user should have sudo permission and do not need to enter the password.")],-1),e("pre",null,[e("code",{class:"language-bash"},"    vi /etc/sudoers\n")],-1),e("pre",null,[e("code",{class:"language-text"},"    hadoop  ALL=(ALL)       NOPASSWD: NOPASSWD: ALL\n")],-1),e("ol",{start:"3"},[e("li",null,[e("p",null,[e("strong",null,"Set the following global environment variables on each installation node so that Linkis can use Hadoop, Hive and Spark.")]),e("p",null,"Modify the .bash_rc of the deploy user, the command is as follows:")])],-1),e("pre",null,[e("code",{class:"language-bash"},"    vim /home/hadoop/.bash_rc ##Take the deploy user hadoop as an example.\n")],-1),e("p",null,"​ The following is an example of setting environment variables:",-1),e("pre",null,[e("code",{class:"language-bash"},"    #JDK\n    export JAVA_HOME=/nemo/jdk1.8.0_141\n\n    ##If you do not use Hive, Spark or other engines and do not rely on Hadoop as \t\t\twell,then there is no need to modify the following environment variables.\n    #HADOOP  \n    export HADOOP_HOME=/appcom/Install/hadoop\n    export HADOOP_CONF_DIR=/appcom/config/hadoop-config\n    #Hive\n    export HIVE_HOME=/appcom/Install/hive\n    export HIVE_CONF_DIR=/appcom/config/hive-config\n    #Spark\n    export SPARK_HOME=/appcom/Install/spark\n    export SPARK_CONF_DIR=/appcom/config/spark-config/spark-submit\n    export PYSPARK_ALLOW_INSECURE_GATEWAY=1  # Parameters must be added to Pyspark\n")],-1),e("ol",{start:"4"},[e("li",null,[e("strong",null,"If you want to equip your Pyspark and Python with drawing functions, you need to install the drawing module on each installation node"),t(". The command is as follows:")])],-1),e("pre",null,[e("code",{class:"language-bash"},"    python -m pip install matplotlib\n")],-1),e("h3",null,"c. Preparing installation package",-1),e("p",null,[t("Download the latest installation package from the Linkis release. ("),e("a",{href:"https://github.com/apache/incubator-linkis/releases"},"Click here to enter the download page"),t(")")],-1),e("p",null,"Decompress the installation package to the installation directory and modify the configuration of the decompressed file.",-1),e("pre",null,[e("code",{class:"language-bash"},"    tar -xvf  wedatasphere-linkis-x.x.x-combined-package-dist.tar.gz\n")],-1),e("h3",null,"d. Basic configuration modification(Do not rely on HDFS)",-1),e("pre",null,[e("code",{class:"language-bash"},"    vi config/linkis-env.sh\n")],-1),e("pre",null,[e("code",{class:"language-properties"},"\n    #SSH_PORT=22        #Specify SSH port. No need to configuer if the stand-alone version is installed\n    deployUser=hadoop      #Specify deploy user\n    LINKIS_INSTALL_HOME=/appcom/Install/Linkis    # Specify installation directory.\n    WORKSPACE_USER_ROOT_PATH=file:///tmp/hadoop    # Specify user root directory. Generally used to store user's script and log files, it's user's workspace. \n    RESULT_SET_ROOT_PATH=file:///tmp/linkis   # The result set file path, used to store the result set files of the Job.\n\tENGINECONN_ROOT_PATH=/appcom/tmp #Store the installation path of ECP. A local directory where deploy user has write permission.\n    ENTRANCE_CONFIG_LOG_PATH=file:///tmp/linkis/  #Entrance's log path\n\n    ## LDAP configuration. Linkis only supports deploy user login by default, you need to configure the following parameters to support multi-user login.\n    #LDAP_URL=ldap://localhost:1389/ \n    #LDAP_BASEDN=dc=webank,dc=com\n")],-1),e("h3",null,"e. Basic configuration modification(Rely on HDFS/Hive/Spark)",-1),e("pre",null,[e("code",{class:"language-bash"},"     vi config/linkis-env.sh\n")],-1),e("pre",null,[e("code",{class:"language-properties"},"    SSH_PORT=22       #Specify SSH port. No need to configuer if the stand-alone version is installed\n    deployUser=hadoop      #Specify deploy user\n    WORKSPACE_USER_ROOT_PATH=file:///tmp/hadoop     #Specify user root directory. Generally used to store user's script and log files, it's user's workspace.\n    RESULT_SET_ROOT_PATH=hdfs:///tmp/linkis   # The result set file path, used to store the result set files of the Job.\n\tENGINECONN_ROOT_PATH=/appcom/tmp #Store the installation path of ECP. A local directory where deploy user has write permission.\n    ENTRANCE_CONFIG_LOG_PATH=hdfs:///tmp/linkis/  #Entrance's log path\n\n    #1.0 supports multi-Yarn clusters, therefore, YARN_RESTFUL_URL must be configured\n \tYARN_RESTFUL_URL=http://127.0.0.1:8088  #URL of Yarn's ResourceManager\n\n    # If you want to use it with Scriptis, for CDH version of hive, you need to set the following parameters.(For the community version of Hive, you can leave out the following configuration.)\n    HIVE_META_URL=jdbc://...   #URL of Hive metadata database\n    HIVE_META_USER=   # username of the Hive metadata database \n    HIVE_META_PASSWORD=    # password of the Hive metadata database\n    \n    # set the conf directory of hadoop/hive/spark\n    HADOOP_CONF_DIR=/appcom/config/hadoop-config  #hadoop's conf directory\n    HIVE_CONF_DIR=/appcom/config/hive-config   #hive's conf directory\n    SPARK_CONF_DIR=/appcom/config/spark-config #spark's conf directory\n\n    ## LDAP configuration. Linkis only supports deploy user login by default, you need to configure the following parameters to support multi-user login.\n    #LDAP_URL=ldap://localhost:1389/ \n    #LDAP_BASEDN=dc=webank,dc=com\n    \n    ##If your spark version is not 2.4.3, you need to modify the following parameter：\n    #SPARK_VERSION=3.1.1\n\n    ##：If your hive version is not 1.2.1, you need to modify the following parameter：\n    #HIVE_VERSION=2.3.3\n")],-1),e("h3",null,"f. Modify the database configuration",-1),e("pre",null,[e("code",{class:"language-bash"},"    vi config/db.sh \n")],-1),e("pre",null,[e("code",{class:"language-properties"},"\n    # set the connection information of the database\n    # including ip address, database's name, username and port\n    # Mainly used to store user's customized variables, configuration parameters, UDFs, and samll functions, and to provide underlying storage of the JobHistory.\n    MYSQL_HOST=\n    MYSQL_PORT=\n    MYSQL_DB=\n    MYSQL_USER=\n    MYSQL_PASSWORD=\n")],-1),e("h2",null,"3. Installation and Startup",-1),e("h3",null,"1. Execute the installation script:",-1),e("pre",null,[e("code",{class:"language-bash"},"    sh bin/install.sh\n")],-1),e("h3",null,"2. Installation steps",-1),e("ul",null,[e("li",null,"The install.sh script will ask you whether to initialize the database and import the metadata.")],-1),e("p",null,"It is possible that a user might repeatedly run the install.sh script and results in clearing all data in databases. Therefore, each time the install.sh is executed, user will be asked if they need to initialize the database and import the metadata.",-1),e("p",null,[t("Please select yes on the "),e("strong",null,"first installation"),t(".")],-1),e("p",null,[e("strong",null,"Please note: If you are upgrading the existing environment of Linkis from 0.X to 1.0, please do not choose yes directly, refer to Linkis1.0 Upgrade Guide first.")],-1),e("h3",null,"3. Whether install successfully",-1),e("p",null,"You can check whether the installation is successful or not by viewing the logs printed on the console.",-1),e("p",null,"If there is an error message, check the specific reason for that error or refer to FAQ for help.",-1),e("h3",null,"4. Linkis quick startup",-1),e("p",null,"(1). Start services",-1),e("p",null,"Run the following commands on the installation directory to start all services.",-1),e("pre",null,[e("code",{class:"language-bash"},"  sh sbin/linkis-start-all.sh\n")],-1),e("p",null,"(2). Check if start successfully",-1),e("p",null,"You can check the startup status of the services on the Eureka, here is the way to check:",-1),e("p",null,[t("Open "),e("a",{href:"http://$"},"http://$"),t("{EUREKA_INSTALL_IP}:${EUREKA_PORT} on the browser and check if services have registered successfully.")],-1),e("p",null,[t("If you have not specified EUREKA_INSTALL_IP and EUREKA_INSTALL_IP in config.sh, then the HTTP address is "),e("a",{href:"http://127.0.0.1:20303"},"http://127.0.0.1:20303")],-1),e("p",null,"As shown in the figure below, if all of the following micro-services are registered on theEureka, it means that they’ve started successfully and are able to work.",-1),e("p",null,[e("img",{src:i,alt:"Linkis1.0_Eureka"})],-1)],d={setup:(e,{expose:t})=>(t({frontmatter:{}}),(e,t)=>(n(),l("div",u,r)))},p={class:"markdown-body"},h=[e("h2",null,"注意事项",-1),e("p",null,[t("        "),e("strong",null,[t("如果您是首次接触并使用Linkis，您可以忽略该章节；如果您已经是 Linkis 的使用用户，安装或升级前建议先阅读："),e("a",{href:"/#/docs/architecture/difference"},"Linkis1.0 与 Linkis0.X 的区别简述")]),t("。")],-1),e("p",null,[t("        请注意：除了 Linkis1.0 安装包默认已经包含的：Python/Shell/Hive/Spark四个EngineConnPlugin以外，如果大家有需要，可以手动安装如 JDBC 引擎等类型的其他引擎，具体请参考 "),e("a",{href:"/#/docs/deploy/engins"},"EngineConnPlugin引擎插件安装文档"),t("。")],-1),e("p",null,[e("strong",null,"Linkis Docker镜像"),e("br"),e("a",{href:"https://hub.docker.com/repository/docker/wedatasphere/linkis"},"Linkis 0.10.0 Docker")],-1),e("p",null,"Linkis1.0 默认已适配的引擎列表如下：",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"引擎类型"),e("th",null,"适配情况"),e("th",null,"官方安装包是否包含")])]),e("tbody",null,[e("tr",null,[e("td",null,"Python"),e("td",null,"1.0已适配"),e("td",null,"包含")]),e("tr",null,[e("td",null,"JDBC"),e("td",null,"1.0已适配"),e("td",null,[e("strong",null,"不包含")])]),e("tr",null,[e("td",null,"Shell"),e("td",null,"1.0已适配"),e("td",null,"包含")]),e("tr",null,[e("td",null,"Hive"),e("td",null,"1.0已适配"),e("td",null,"包含")]),e("tr",null,[e("td",null,"Spark"),e("td",null,"1.0已适配"),e("td",null,"包含")]),e("tr",null,[e("td",null,"Pipeline"),e("td",null,"1.0已适配"),e("td",null,[e("strong",null,"不包含")])]),e("tr",null,[e("td",null,"Presto"),e("td",null,[e("strong",null,"1.0未适配")]),e("td",null,[e("strong",null,"不包含")])]),e("tr",null,[e("td",null,"ElasticSearch"),e("td",null,[e("strong",null,"1.0未适配")]),e("td",null,[e("strong",null,"不包含")])]),e("tr",null,[e("td",null,"Impala"),e("td",null,[e("strong",null,"1.0未适配")]),e("td",null,[e("strong",null,"不包含")])]),e("tr",null,[e("td",null,"MLSQL"),e("td",null,[e("strong",null,"1.0未适配")]),e("td",null,[e("strong",null,"不包含")])]),e("tr",null,[e("td",null,"TiSpark"),e("td",null,[e("strong",null,"1.0未适配")]),e("td",null,[e("strong",null,"不包含")])])])],-1),e("h2",null,"一、确定您的安装环境",-1),e("p",null,"        这里给出每个引擎的依赖信息列表：",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"引擎类型"),e("th",null,"依赖环境"),e("th",null,"特殊说明")])]),e("tbody",null,[e("tr",null,[e("td",null,"Python"),e("td",null,"Python环境"),e("td",null,"日志和结果集如果配置hdfs://则依赖HDFS环境")]),e("tr",null,[e("td",null,"JDBC"),e("td",null,"可以无依赖"),e("td",null,"日志和结果集路径如果配置hdfs://则依赖HDFS环境")]),e("tr",null,[e("td",null,"Shell"),e("td",null,"可以无依赖"),e("td",null,"日志和结果集路径如果配置hdfs://则依赖HDFS环境")]),e("tr",null,[e("td",null,"Hive"),e("td",null,"依赖Hadoop和Hive环境"),e("td")]),e("tr",null,[e("td",null,"Spark"),e("td",null,"依赖Hadoop/Hive/Spark"),e("td")])])],-1),e("p",null,[e("strong",null,"要求：安装Linkis需要至少3G内存。")],-1),e("p",null,[t("默认每个微服务JVM堆内存为512M，可以通过修改"),e("code",null,"SERVER_HEAP_SIZE"),t("来统一调整每个微服务的堆内存，如果您的服务器资源较少，我们建议修改该参数为128M。如下：")],-1),e("pre",null,[e("code",{class:"language-bash"},"    vim ${LINKIS_HOME}/config/linkis-env.sh\n")],-1),e("pre",null,[e("code",{class:"language-bash"},'    # java application default jvm memory.\n    export SERVER_HEAP_SIZE="128M"\n')],-1),e("hr",null,null,-1),e("h2",null,"二、Linkis环境准备",-1),e("h3",null,"a. 基础软件安装",-1),e("p",null,"        下面的软件必装：",-1),e("ul",null,[e("li",null,[t("MySQL (5.5+)，"),e("a",{href:"https://www.runoob.com/mysql/mysql-install.html"},"如何安装MySQL")]),e("li",null,[t("JDK (1.8.0_141以上)，"),e("a",{href:"https://www.runoob.com/java/java-environment-setup.html"},"如何安装JDK")])],-1),e("h3",null,"b. 创建用户",-1),e("p",null,[t("        例如: "),e("strong",null,"部署用户是hadoop账号")],-1),e("ol",null,[e("li",null,"在部署机器上创建部署用户，用于安装")],-1),e("pre",null,[e("code",{class:"language-bash"},"    sudo useradd hadoop  \n")],-1),e("ol",{start:"2"},[e("li",null,"因为Linkis的服务是以 sudo -u ${linux-user} 方式来切换引擎，从而执行作业，所以部署用户需要有 sudo 权限，而且是免密的。")],-1),e("pre",null,[e("code",{class:"language-bash"},"    vi /etc/sudoers\n")],-1),e("pre",null,[e("code",{class:"language-text"},"    hadoop  ALL=(ALL)       NOPASSWD: NOPASSWD: ALL\n")],-1),e("ol",{start:"3"},[e("li",null,[e("p",null,[e("strong",null,"在每台安装节点设置如下的全局环境变量，以便Linkis能正常使用Hadoop、Hive和Spark"),t("。")]),e("p",null,"修改安装用户的.bash_rc，命令如下：")])],-1),e("pre",null,[e("code",{class:"language-bash"},"    vim /home/hadoop/.bash_rc ##以部署用户Hadoop为例\n")],-1),e("p",null,"下方为环境变量示例：",-1),e("pre",null,[e("code",{class:"language-bash"},"    #JDK\n    export JAVA_HOME=/nemo/jdk1.8.0_141\n\n    ##如果不使用Hive、Spark等引擎且不依赖Hadoop，则不需要修改以下环境变量\n    #HADOOP  \n    export HADOOP_HOME=/appcom/Install/hadoop\n    export HADOOP_CONF_DIR=/appcom/config/hadoop-config\n    #Hive\n    export HIVE_HOME=/appcom/Install/hive\n    export HIVE_CONF_DIR=/appcom/config/hive-config\n    #Spark\n    export SPARK_HOME=/appcom/Install/spark\n    export SPARK_CONF_DIR=/appcom/config/spark-config/\n    export PYSPARK_ALLOW_INSECURE_GATEWAY=1  # Pyspark必须加的参数\n")],-1),e("ol",{start:"4"},[e("li",null,[e("strong",null,"如果您的Pyspark和Python想拥有画图功能，则还需在所有安装节点，安装画图模块"),t("。命令如下：")])],-1),e("pre",null,[e("code",{class:"language-bash"},"    python -m pip install matplotlib\n")],-1),e("h3",null,"c. 安装包准备",-1),e("p",null,[t("        从Linkis已发布的release中（"),e("a",{href:"https://github.com/apache/incubator-linkis/releases"},"点击这里进入下载页面"),t("），下载最新安装包。")],-1),e("p",null,"        先解压安装包到安装目录，并对解压后的文件进行配置修改。",-1),e("pre",null,[e("code",{class:"language-bash"},"    tar -xvf  wedatasphere-linkis-x.x.x-combined-package-dist.tar.gz\n")],-1),e("h3",null,"d. 不依赖HDFS的基础配置修改",-1),e("pre",null,[e("code",{class:"language-bash"},"    vi config/linkis-env.sh\n")],-1),e("pre",null,[e("code",{class:"language-properties"},"\n    #SSH_PORT=22        #指定SSH端口，如果单机版本安装可以不配置\n    deployUser=hadoop      #指定部署用户\n    LINKIS_INSTALL_HOME=/appcom/Install/Linkis    # 指定安装目录\n    WORKSPACE_USER_ROOT_PATH=file:///tmp/hadoop    # 指定用户根目录，一般用于存储用户的脚本文件和日志文件等，是用户的工作空间。\n    RESULT_SET_ROOT_PATH=file:///tmp/linkis   # 结果集文件路径，用于存储Job的结果集文件\n    ENGINECONN_ROOT_PATH=/appcom/tmp #存放ECP的安装路径，需要部署用户有写权限的本地目录\n    ENTRANCE_CONFIG_LOG_PATH=file:///tmp/linkis/  #ENTRANCE的日志路径\n    ## LDAP配置，默认Linkis只支持部署用户登录，如果需要支持多用户登录可以使用LDAP，需要配置以下参数：\n    #LDAP_URL=ldap://localhost:1389/ \n    #LDAP_BASEDN=dc=webank,dc=com\n")],-1),e("h3",null,"e. 依赖HDFS/Hive/Spark的基础配置修改",-1),e("pre",null,[e("code",{class:"language-bash"},"     vi config/linkis-env.sh\n")],-1),e("pre",null,[e("code",{class:"language-properties"},"    SSH_PORT=22        #指定SSH端口，如果单机版本安装可以不配置\n    deployUser=hadoop      #指定部署用户\n    WORKSPACE_USER_ROOT_PATH=file:///tmp/hadoop    # 指定用户根目录，一般用于存储用户的脚本文件和日志文件等，是用户的工作空间。\n    RESULT_SET_ROOT_PATH=hdfs:///tmp/linkis   # 结果集文件路径，用于存储Job的结果集文件\n    ENGINECONN_ROOT_PATH=/appcom/tmp #存放ECP的安装路径，需要部署用户有写权限的本地目录\n    ENTRANCE_CONFIG_LOG_PATH=hdfs:///tmp/linkis/  #ENTRANCE的日志路径\n\n    #因为1.0支持多Yarn集群，使用到Yarn队列资源的一定需要配置YARN_RESTFUL_URL\n    YARN_RESTFUL_URL=http://127.0.0.1:8088  #Yarn的ResourceManager的地址\n\n    # 如果您想配合Scriptis一起使用，CDH版的Hive，还需要配置如下参数（社区版Hive可忽略该配置）\n    HIVE_META_URL=jdbc://...   # HiveMeta元数据库的URL\n    HIVE_META_USER=   # HiveMeta元数据库的用户\n    HIVE_META_PASSWORD=    # HiveMeta元数据库的密码\n    \n    # 配置hadoop/hive/spark的配置目录 \n    HADOOP_CONF_DIR=/appcom/config/hadoop-config  #hadoop的conf目录\n    HIVE_CONF_DIR=/appcom/config/hive-config   #hive的conf目录\n    SPARK_CONF_DIR=/appcom/config/spark-config #spark的conf目录\n\n    ## LDAP配置，默认Linkis只支持部署用户登录，如果需要支持多用户登录可以使用LDAP，需要配置以下参数：\n    #LDAP_URL=ldap://localhost:1389/ \n    #LDAP_BASEDN=dc=webank,dc=com\n    \n    ##如果spark不是2.4.3的版本需要修改参数：\n    #SPARK_VERSION=3.1.1\n\n    ##如果hive不是1.2.1的版本需要修改参数：\n    #HIVE_VERSION=2.3.3\n")],-1),e("h3",null,"f. 修改数据库配置",-1),e("pre",null,[e("code",{class:"language-bash"},"    vi config/db.sh \n")],-1),e("pre",null,[e("code",{class:"language-properties"},"\n    # 设置数据库的连接信息\n    # 包括IP地址、数据库名称、用户名、端口\n    # 主要用于存储用户的自定义变量、配置参数、UDF和小函数，以及提供JobHistory的底层存储\n    MYSQL_HOST=\n    MYSQL_PORT=\n    MYSQL_DB=\n    MYSQL_USER=\n    MYSQL_PASSWORD=\n")],-1),e("h2",null,"三、安装和启动",-1),e("h3",null,"1. 执行安装脚本：",-1),e("pre",null,[e("code",{class:"language-bash"},"    sh bin/install.sh\n")],-1),e("h3",null,"2. 安装步骤",-1),e("ul",null,[e("li",null,"install.sh脚本会询问您是否需要初始化数据库并导入元数据。")],-1),e("p",null,"     因为担心用户重复执行install.sh脚本，把数据库中的用户数据清空，所以在install.sh执行时，会询问用户是否需要初始化数据库并导入元数据。",-1),e("p",null,[t("     "),e("strong",null,"第一次安装"),t("必须选是。")],-1),e("p",null,[t("     "),e("strong",null,[t("请注意：如果您是升级已有环境的 Linkis0.X 到 Linkis1.0，请不要直接选是，请先参考 "),e("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/zh_CN/Upgrade_Documents/Linkis%E4%BB%8E0.X%E5%8D%87%E7%BA%A7%E5%88%B01.0%E6%8C%87%E5%8D%97.md"},"Linkis1.0升级指南")]),t("。")],-1),e("p",null,[t("     "),e("strong",null,[t("请注意：如果您是升级已有环境的 Linkis0.X 到 Linkis1.0，请不要直接选是，请先参考 "),e("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/zh_CN/Upgrade_Documents/Linkis%E4%BB%8E0.X%E5%8D%87%E7%BA%A7%E5%88%B01.0%E6%8C%87%E5%8D%97.md"},"Linkis1.0升级指南")]),t("。")],-1),e("p",null,[t("     "),e("strong",null,[t("请注意：如果您是升级已有环境的 Linkis0.X 到 Linkis1.0，请不要直接选是，请先参考 "),e("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/zh_CN/Upgrade_Documents/Linkis%E4%BB%8E0.X%E5%8D%87%E7%BA%A7%E5%88%B01.0%E6%8C%87%E5%8D%97.md"},"Linkis1.0升级指南")]),t("。")],-1),e("h3",null,"3. 是否安装成功：",-1),e("p",null,"        通过查看控制台打印的日志信息查看是否安装成功。",-1),e("p",null,"        如果有错误信息，可以查看具体报错原因。",-1),e("p",null,[t("        您也可以通过查看我们的"),e("a",{href:"https://docs.qq.com/doc/DSGZhdnpMV3lTUUxq"},"常见问题"),t("，获取问题的解答。")],-1),e("h3",null,"4. 快速启动Linkis",-1),e("h4",null,"(1)、启动服务：",-1),e("p",null,"在安装目录执行以下命令，启动所有服务：",-1),e("pre",null,[e("code",{class:"language-bash"},"  sh sbin/linkis-start-all.sh\n")],-1),e("h4",null,"(2)、查看是否启动成功",-1),e("p",null,"可以在Eureka界面查看服务启动成功情况，查看方法：",-1),e("p",null,"使用http://${EUREKA_INSTALL_IP}:${EUREKA_PORT}, 在浏览器中打开，查看服务是否注册成功。",-1),e("p",null,[t("如果您没有在config.sh指定EUREKA_INSTALL_IP和EUREKA_INSTALL_IP，则HTTP地址为："),e("a",{href:"http://127.0.0.1:20303"},"http://127.0.0.1:20303")],-1),e("p",null,"如下图，如您的Eureka主页出现以下微服务，则表示服务都启动成功，可以正常对外提供服务了：",-1),e("p",null,"默认会启动8个Linkis微服务，其中图下linkis-cg-engineconn服务为运行任务才会启动",-1),e("p",null,[e("img",{src:i,alt:"Linkis1.0_Eureka"})],-1),e("h4",null,"(3)、查看服务是否正常",-1),e("ol",null,[e("li",null,[t("服务启动成功后您可以通过，安装前端管理台，来检验服务的正常性，"),e("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/zh_CN/Deployment_Documents/%E5%89%8D%E7%AB%AF%E7%AE%A1%E7%90%86%E5%8F%B0%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3.md"},"点击跳转管理台安装文档")]),e("li",null,[t("您也可以通过Linkis用户手册来测试Linis是否能正常运行任务，"),e("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/zh_CN/User_Manual/README.md"},"点击跳转用户手册")])],-1)],c={setup:(e,{expose:t})=>(t({frontmatter:{}}),(e,t)=>(n(),l("div",p,h)))},g={setup(l){const e=o(localStorage.getItem("locale")||"en");return(l,t)=>"en"===e.value?(n(),a(s(d),{key:0})):(n(),a(s(c),{key:1}))}};export{g as default};
