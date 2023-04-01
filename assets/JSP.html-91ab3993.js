const e=JSON.parse(`{"key":"v-cc39f04e","path":"/notes/JSP.html","title":"JSP","lang":"zh-CN","frontmatter":{"title":"JSP","icon":"article","article":false,"description":"Java Server Pages：Java 服务器页面\\r是 J2EE 的功能模块，由 Web 服务器执行; \\rJSP 的作用就是降低动态网页开发难度; \\r使用简单，易于上手; \\r将 Java 代码与 HTML 分离，降低开发难度; \\rJSP 的本质就是 Servlet; 运行要求\\r可正常运行的 Tomcat; \\r所有的 JSP 页面扩展名必须是 .j...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/notes/JSP.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"JSP"}],["meta",{"property":"og:description","content":"Java Server Pages：Java 服务器页面\\r是 J2EE 的功能模块，由 Web 服务器执行; \\rJSP 的作用就是降低动态网页开发难度; \\r使用简单，易于上手; \\r将 Java 代码与 HTML 分离，降低开发难度; \\rJSP 的本质就是 Servlet; 运行要求\\r可正常运行的 Tomcat; \\r所有的 JSP 页面扩展名必须是 .j..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"JSP\\",\\"description\\":\\"Java Server Pages：Java 服务器页面\\\\r是 J2EE 的功能模块，由 Web 服务器执行; \\\\rJSP 的作用就是降低动态网页开发难度; \\\\r使用简单，易于上手; \\\\r将 Java 代码与 HTML 分离，降低开发难度; \\\\rJSP 的本质就是 Servlet; 运行要求\\\\r可正常运行的 Tomcat; \\\\r所有的 JSP 页面扩展名必须是 .j...\\"}"]]},"headers":[{"level":2,"title":"运行要求","slug":"运行要求","link":"#运行要求","children":[]},{"level":2,"title":"执行过程","slug":"执行过程","link":"#执行过程","children":[]},{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[{"level":3,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":3,"title":"代码块","slug":"代码块","link":"#代码块","children":[]},{"level":3,"title":"声明构造块","slug":"声明构造块","link":"#声明构造块","children":[]},{"level":3,"title":"指令 <%@ ... %>","slug":"指令","link":"#指令","children":[]},{"level":3,"title":"表达式 <%= ... %>","slug":"表达式","link":"#表达式","children":[]},{"level":3,"title":"JSP 声明 <%! ... %>","slug":"jsp-声明","link":"#jsp-声明","children":[]}]},{"level":2,"title":"动作","slug":"动作","link":"#动作","children":[{"level":3,"title":"jsp:useBean","slug":"jsp-usebean","link":"#jsp-usebean","children":[]},{"level":3,"title":"jsp:include","slug":"jsp-include","link":"#jsp-include","children":[]},{"level":3,"title":"jsp:param","slug":"jsp-param","link":"#jsp-param","children":[]},{"level":3,"title":"jsp:forward","slug":"jsp-forward","link":"#jsp-forward","children":[]}]},{"level":2,"title":"内置对象","slug":"内置对象","link":"#内置对象","children":[]},{"level":2,"title":"PageContext","slug":"pagecontext","link":"#pagecontext","children":[{"level":3,"title":"JspContext","slug":"jspcontext","link":"#jspcontext","children":[]},{"level":3,"title":"PageContext","slug":"pagecontext-1","link":"#pagecontext-1","children":[]}]},{"level":2,"title":"初始化参数","slug":"初始化参数","link":"#初始化参数","children":[{"level":3,"title":"设置参数","slug":"设置参数","link":"#设置参数","children":[]},{"level":3,"title":"获取参数","slug":"获取参数","link":"#获取参数","children":[]}]},{"level":2,"title":"禁止脚本元素","slug":"禁止脚本元素","link":"#禁止脚本元素","children":[]},{"level":2,"title":"忽略 EL 表达式","slug":"忽略-el-表达式","link":"#忽略-el-表达式","children":[]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"jspInit()","slug":"jspinit","link":"#jspinit","children":[]},{"level":3,"title":"jspDestory()","slug":"jspdestory","link":"#jspdestory","children":[]},{"level":3,"title":"jspService()","slug":"jspservice","link":"#jspservice","children":[]}]},{"level":2,"title":"EL 表达式","slug":"el-表达式","link":"#el-表达式","children":[{"level":3,"title":"作用域对象","slug":"作用域对象","link":"#作用域对象","children":[]},{"level":3,"title":"请求参数简化","slug":"请求参数简化","link":"#请求参数简化","children":[]},{"level":3,"title":"操作符","slug":"操作符","link":"#操作符","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]},{"level":2,"title":"JSTL 标签库","slug":"jstl-标签库","link":"#jstl-标签库","children":[{"level":3,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":3,"title":"标签库种类","slug":"标签库种类","link":"#标签库种类","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"引入","slug":"引入","link":"#引入","children":[]},{"level":3,"title":"使用","slug":"使用-1","link":"#使用-1","children":[]}]},{"level":2,"title":"模板引擎","slug":"模板引擎","link":"#模板引擎","children":[{"level":3,"title":"主流模板引擎","slug":"主流模板引擎","link":"#主流模板引擎","children":[]},{"level":3,"title":"Freemarker","slug":"freemarker","link":"#freemarker","children":[]}]},{"level":2,"title":"打包与发布","slug":"打包与发布","link":"#打包与发布","children":[{"level":3,"title":"去掉访问路径中的端口号","slug":"去掉访问路径中的端口号","link":"#去掉访问路径中的端口号","children":[]},{"level":3,"title":"去掉访问路径中的文件夹","slug":"去掉访问路径中的文件夹","link":"#去掉访问路径中的文件夹","children":[]}]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":14.89,"words":4466},"filePathRelative":"notes/JSP.md","localizedDate":"2023年1月11日","excerpt":"","autoDesc":true}`);export{e as data};
