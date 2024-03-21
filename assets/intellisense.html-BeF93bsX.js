import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as p,b as s,d as n,e as c,f as l}from"./app-BybQgHW9.js";const r="/assets/intellisense-DnJIyR-h.gif",i="/assets/context-menu-BziYAYKp.gif",u="/assets/goto-definition-DM7Dkf8x.gif",d="/assets/rename-h3zf9BBa.gif",k="/assets/replace-TDY_DvJu.png",m={},g=l('<p>使用 <code>Ctrl + Space</code> 触发智能提示组件。</p><figure><img src="'+r+'" alt="智能提示组件" tabindex="0" loading="lazy"><figcaption>智能提示组件</figcaption></figure><p>您可以查看可用的方法，参数提示，简短文档等。</p><h2 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转"><span>跳转</span></a></h2><p>选择一个符号然后输入 <code>Alt + F12</code>，您就可以使用上下文菜单了。</p><figure><img src="'+i+'" alt="上下文菜单" tabindex="0" loading="lazy"><figcaption>上下文菜单</figcaption></figure><h2 id="跳转到定义" tabindex="-1"><a class="header-anchor" href="#跳转到定义"><span>跳转到定义</span></a></h2><p>选择一个符号然后输入 <code>F12</code>，您也可以使用上下文菜单或 <code>Ctrl + Click</code></p><figure><img src="'+u+'" alt="跳转到定义" tabindex="0" loading="lazy"><figcaption>跳转到定义</figcaption></figure><p>您可以使用 <strong>转到 &gt; 返回</strong> 命令或快捷键 <code>Alt + ←</code> 来返回您的上个位置。</p><h2 id="跳转到引用" tabindex="-1"><a class="header-anchor" href="#跳转到引用"><span>跳转到引用</span></a></h2><p>选择一个符号输入 <code>Shift + F12</code>，即可打开上下文菜单查看所有引用。</p><h2 id="查看所有引用" tabindex="-1"><a class="header-anchor" href="#查看所有引用"><span>查看所有引用</span></a></h2><p>选择一个符号，然后按 <code>Shift + Alt + F12</code> 打开 <strong>引用</strong> 视图，在专用视图中显示文件的所有符号。</p><h2 id="重命名符号" tabindex="-1"><a class="header-anchor" href="#重命名符号"><span>重命名符号</span></a></h2><p>选择一个符号，然后按下 <code>F2</code>。或者，您可以使用上下文菜单。</p><figure><img src="'+d+'" alt="重命名符号" tabindex="0" loading="lazy"><figcaption>重命名符号</figcaption></figure><h2 id="搜索和修改" tabindex="-1"><a class="header-anchor" href="#搜索和修改"><span>搜索和修改</span></a></h2><p>除了搜索和替换表达式之外，您还可以使用带有捕获组的正则表达式搜索和重用匹配的部分。通过单击 <strong>使用正则表达式</strong> <code>.*</code> 按钮(<code>Alt + R</code>)在搜索框中启用正则表达式，然后编写正则表达式并使用括号定义组。然后，您可以在替换字段使用 <code>$1</code>，<code>$2</code> 等来输入每个组中匹配的内容。</p><figure><img src="'+k+`" alt="搜索和修改" tabindex="0" loading="lazy"><figcaption>搜索和修改</figcaption></figure><h2 id="eslintrc-json" tabindex="-1"><a class="header-anchor" href="#eslintrc-json"><span>.eslintrc.json</span></a></h2><p>安装 ESLint 扩展，并根据您的需要配置。请查阅 ESLint 规范以获取有关其格式化规则和选项的详细信息。</p><p>这是使用 ES6 的配置。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commonjs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ecmaFeatures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;classes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;defaultParams&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;no-const-assign&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-extra-semi&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-fallthrough&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-empty&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-mixed-spaces-and-tabs&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-redeclare&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-this-before-super&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-undef&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-unreachable&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;constructor-super&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;curly&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eqeqeq&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;func-names&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;valid-typeof&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json"><span>package.json</span></a></h2><p>IntelliSense 会为 package.json 文件提供智能提示。</p><h2 id="emmet-语法" tabindex="-1"><a class="header-anchor" href="#emmet-语法"><span>Emmet 语法</span></a></h2>`,27),v={href:"https://mrhope.site/code/website/emmet/",target:"_blank",rel:"noopener noreferrer"};function h(b,f){const a=t("ExternalLinkIcon");return o(),p("div",null,[g,s("p",null,[n("支持 "),s("a",v,[n("Emmet 语法"),c(a)]),n("。")])])}const _=e(m,[["render",h],["__file","intellisense.html.vue"]]),x=JSON.parse(`{"path":"/software/vscode/guide/intellisense.html","title":"智能提示","lang":"zh-CN","frontmatter":{"title":"智能提示","icon":"creative","category":"VS Code","article":false,"tag":["VS Code","软件"],"description":"使用 Ctrl + Space 触发智能提示组件。 智能提示组件智能提示组件 您可以查看可用的方法，参数提示，简短文档等。 跳转 选择一个符号然后输入 Alt + F12，您就可以使用上下文菜单了。 上下文菜单上下文菜单 跳转到定义 选择一个符号然后输入 F12，您也可以使用上下文菜单或 Ctrl + Click 跳转到定义跳转到定义 您可以使用 转到...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/software/vscode/guide/intellisense.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"智能提示"}],["meta",{"property":"og:description","content":"使用 Ctrl + Space 触发智能提示组件。 智能提示组件智能提示组件 您可以查看可用的方法，参数提示，简短文档等。 跳转 选择一个符号然后输入 Alt + F12，您就可以使用上下文菜单了。 上下文菜单上下文菜单 跳转到定义 选择一个符号然后输入 F12，您也可以使用上下文菜单或 Ctrl + Click 跳转到定义跳转到定义 您可以使用 转到..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"VS Code"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"智能提示\\",\\"description\\":\\"使用 Ctrl + Space 触发智能提示组件。 智能提示组件智能提示组件 您可以查看可用的方法，参数提示，简短文档等。 跳转 选择一个符号然后输入 Alt + F12，您就可以使用上下文菜单了。 上下文菜单上下文菜单 跳转到定义 选择一个符号然后输入 F12，您也可以使用上下文菜单或 Ctrl + Click 跳转到定义跳转到定义 您可以使用 转到...\\"}"]]},"headers":[{"level":2,"title":"跳转","slug":"跳转","link":"#跳转","children":[]},{"level":2,"title":"跳转到定义","slug":"跳转到定义","link":"#跳转到定义","children":[]},{"level":2,"title":"跳转到引用","slug":"跳转到引用","link":"#跳转到引用","children":[]},{"level":2,"title":"查看所有引用","slug":"查看所有引用","link":"#查看所有引用","children":[]},{"level":2,"title":"重命名符号","slug":"重命名符号","link":"#重命名符号","children":[]},{"level":2,"title":"搜索和修改","slug":"搜索和修改","link":"#搜索和修改","children":[]},{"level":2,"title":".eslintrc.json","slug":"eslintrc-json","link":"#eslintrc-json","children":[]},{"level":2,"title":"package.json","slug":"package-json","link":"#package-json","children":[]},{"level":2,"title":"Emmet 语法","slug":"emmet-语法","link":"#emmet-语法","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.74,"words":523},"filePathRelative":"software/vscode/guide/intellisense.md","localizedDate":"2023年1月11日","excerpt":"<p>使用 <code>Ctrl + Space</code> 触发智能提示组件。</p>\\n<figure><figcaption>智能提示组件</figcaption></figure>\\n<p>您可以查看可用的方法，参数提示，简短文档等。</p>\\n<h2>跳转</h2>\\n<p>选择一个符号然后输入 <code>Alt + F12</code>，您就可以使用上下文菜单了。</p>\\n<figure><figcaption>上下文菜单</figcaption></figure>\\n<h2>跳转到定义</h2>\\n<p>选择一个符号然后输入 <code>F12</code>，您也可以使用上下文菜单或 <code>Ctrl + Click</code></p>","autoDesc":true}`);export{_ as comp,x as data};
