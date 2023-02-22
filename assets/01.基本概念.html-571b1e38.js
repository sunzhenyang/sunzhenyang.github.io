import{_ as a,P as e,Q as n,Z as s,a2 as i}from"./framework-f3782457.js";const l={},d=i(`<h2 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h2><ul><li>Java 虚拟机，全称：Java Virtual Machine</li><li>JVM 是 Java 平台无关性实现的关键</li></ul><h2 id="jre" tabindex="-1"><a class="header-anchor" href="#jre" aria-hidden="true">#</a> JRE</h2><ul><li>Java 运行时环境，全称：Java Runtime Environment</li><li>包括 Java 虚拟机(JVM)、Java 核心类库和支持文件</li><li>和 JDK 的区别 <ul><li>如果只需要运行 Java 程序, 下载并安装 JRE 即可</li><li>如果要开发 Java 软件，需要下载 JDK</li></ul></li><li>面向使用人员</li></ul><h2 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h2><ul><li>Java 语言的软件开发工具包，全称：Java Development Kit</li><li>两个主要组件 <ul><li>javac：编译器，将源程序转成字节码</li><li>java：运行编译后的 java 程序( .class 后缀的 )</li></ul></li><li>JDK 中 附带有 JRE</li><li>面向开发人员</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/sunzhenyang/blog-img/img/QQ截图20201210232749.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="java-平台" tabindex="-1"><a class="header-anchor" href="#java-平台" aria-hidden="true">#</a> Java 平台</h2><ul><li>Java ME：Java 微型版，主要用于开发移动设备</li><li>Java SE：Java 标准版，主要用于开发桌面程序</li><li>Java EE：Java 企业版，主要用于 Web 程序</li></ul><h2 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h2><ul><li>解释执行的过程由虚拟机完成</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/sunzhenyang/blog-img/img/QQ截图20201210231245.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h3><ul><li>右键 <code>计算机</code> -&gt; <code>属性</code> -&gt; <code>高级系统设置</code> -&gt; <code>环境变量</code><ul><li><code>系统变量</code> 中添加变量 <code>JAVA_HOME</code>，值为 <code>jdk</code> 安装路径，例如 <code>E:\\Develop\\java\\jdk1.8.0_311</code></li><li><code>系统变量</code> -&gt; <code>Path</code> 中添加一行 <code>%JAVA_HOME%\\bin</code></li></ul></li></ul><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macos</h3><ul><li>修改命令行配置文件（ <code>.zshrc </code> 或 <code>.bash_profile</code> ），添加如下代码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Java</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/Library/Java/JavaVirtualMachines/jdk1.8.0_341.jdk/Contents/Home
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>:.
<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:.
<span class="token builtin class-name">export</span> JAVA_HOME
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>
<span class="token builtin class-name">export</span> CLASSPATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>刷新命令行配置文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> .zshrc
<span class="token comment"># 或</span>
<span class="token builtin class-name">source</span> .bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成文档</span>
javadoc <span class="token parameter variable">-d</span> doc test.java

<span class="token comment"># 编译</span>
javac HelloWorld.java

<span class="token comment"># 运行</span>
<span class="token function">java</span> HelloWorld<span class="token punctuation">(</span>.class<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function c(r,o){return e(),n("div",null,[s(" more "),d])}const v=a(l,[["render",c],["__file","01.基本概念.html.vue"]]);export{v as default};
