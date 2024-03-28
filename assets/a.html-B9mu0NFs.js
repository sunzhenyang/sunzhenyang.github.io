import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,b as n,d as e,e as p,f as a}from"./app-DdwQwFQ1.js";const i={},d=a(`<p><code>&lt;a&gt;</code>元素用来设置链接。除了网页元素的通用接口（<code>Node</code>接口、<code>Element</code>接口、<code>HTMLElement</code>接口），它还继承了<code>HTMLAnchorElement</code>接口和<code>HTMLHyperlinkElementUtils</code>接口。</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><h3 id="url-相关属性" tabindex="-1"><a class="header-anchor" href="#url-相关属性"><span>URL 相关属性</span></a></h3><p><code>&lt;a&gt;</code>元素有一系列 URL 相关属性，可以用来操作链接地址。这些属性的含义，可以参见<code>Location</code>对象的实例属性。</p><ul><li>hash：片段识别符（以<code>#</code>开头）</li><li>host：主机和端口（默认端口80和443会省略）</li><li>hostname：主机名</li><li>href：完整的 URL</li><li>origin：协议、域名和端口</li><li>password：主机名前的密码</li><li>pathname：路径（以<code>/</code>开头）</li><li>port：端口</li><li>protocol：协议（包含尾部的冒号<code>:</code>）</li><li>search：查询字符串（以<code>?</code>开头）</li><li>username：主机名前的用户名</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;http://user:passwd@example.com:8081/index.html?bar=1#foo&quot;&gt;test&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>hash <span class="token comment">// &quot;#foo&quot;</span>
a<span class="token punctuation">.</span>host <span class="token comment">// &quot;example.com:8081&quot;</span>
a<span class="token punctuation">.</span>hostname <span class="token comment">// &quot;example.com&quot;</span>
a<span class="token punctuation">.</span>href <span class="token comment">// &quot;http://user:passed@example.com:8081/index.html?bar=1#foo&quot;</span>
a<span class="token punctuation">.</span>origin <span class="token comment">// &quot;http://example.com:8081&quot;</span>
a<span class="token punctuation">.</span>password <span class="token comment">// &quot;passwd&quot;</span>
a<span class="token punctuation">.</span>pathname <span class="token comment">// &quot;/index.html&quot;</span>
a<span class="token punctuation">.</span>port <span class="token comment">// &quot;8081&quot;</span>
a<span class="token punctuation">.</span>protocol <span class="token comment">// &quot;http:&quot;</span>
a<span class="token punctuation">.</span>search <span class="token comment">// &quot;?bar=1&quot;</span>
a<span class="token punctuation">.</span>username <span class="token comment">// &quot;user&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了<code>origin</code>属性是只读的，上面这些属性都是可读写的。</p><h3 id="accesskey-属性" tabindex="-1"><a class="header-anchor" href="#accesskey-属性"><span>accessKey 属性</span></a></h3><p><code>accessKey</code>属性用来读写<code>&lt;a&gt;</code>元素的快捷键。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;http://example.com&quot;&gt;test&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>accessKey <span class="token operator">=</span> <span class="token string">&#39;k&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码设置<code>&lt;a&gt;</code>元素的快捷键为<code>k</code>，以后只要按下这个快捷键，浏览器就会跳转到<code>example.com</code>。</p>`,11),r={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"Alt + k",-1),m=n("code",null,"example.com",-1),v=a(`<h3 id="download-属性" tabindex="-1"><a class="header-anchor" href="#download-属性"><span>download 属性</span></a></h3><p><code>download</code>属性表示当前链接不是用来浏览，而是用来下载的。它的值是一个字符串，表示用户下载得到的文件名。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;foo.jpg&quot;&gt;下载&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;bar.jpg&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>&lt;a&gt;</code>元素是一个图片链接，默认情况下，点击后图片会在当前窗口加载。设置了<code>download</code>属性以后，再点击这个链接，就会下载对话框，询问用户保存位置，而且下载的文件名为<code>bar.jpg</code>。</p><h3 id="hreflang-属性" tabindex="-1"><a class="header-anchor" href="#hreflang-属性"><span>hreflang 属性</span></a></h3><p><code>hreflang</code>属性用来读写<code>&lt;a&gt;</code>元素的 HTML 属性<code>hreflang</code>，表示链接指向的资源的语言，比如<code>hreflang=&quot;en&quot;</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;https://example.com&quot; hreflang=&quot;en&quot;&gt;test&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>hreflang <span class="token comment">// &quot;en&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="referrerpolicy-属性" tabindex="-1"><a class="header-anchor" href="#referrerpolicy-属性"><span>referrerPolicy 属性</span></a></h3><p><code>referrerPolicy</code>属性用来读写<code>&lt;a&gt;</code>元素的 HTML 属性<code>referrerPolicy</code>，指定当用户点击链接时，如何发送 HTTP 头信息的<code>referer</code>字段。</p><p>HTTP 头信息的<code>referer</code>字段，表示当前请求是从哪里来的。它的格式可以由<code>&lt;a&gt;</code>元素的<code>referrerPolicy</code>属性指定，共有三个值可以选择。</p><ul><li><code>no-referrer</code>：不发送<code>referer</code>字段。</li><li><code>origin</code>：<code>referer</code>字段的值是<code>&lt;a&gt;</code>元素的<code>origin</code>属性，即协议 + 主机名 + 端口。</li><li><code>unsafe-url</code>：<code>referer</code>字段的值是<code>origin</code>属性再加上路径，但不包含<code>#</code>片段。这种格式提供的信息最详细，可能存在信息泄漏的风险。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;https://example.com&quot; referrerpolicy=&quot;no-referrer&quot;&gt;test&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>referrerPolicy <span class="token comment">// &quot;no-referrer&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rel-属性" tabindex="-1"><a class="header-anchor" href="#rel-属性"><span>rel 属性</span></a></h3><p><code>rel</code>属性用来读写<code>&lt;a&gt;</code>元素的 HTML 属性<code>rel</code>，表示链接与当前文档的关系。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;https://example.com&quot; rel=&quot;license&quot;&gt;license.html&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>rel <span class="token comment">// &quot;license&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tabindex-属性" tabindex="-1"><a class="header-anchor" href="#tabindex-属性"><span>tabIndex 属性</span></a></h3><p><code>tabIndex</code>属性的值是一个整数，用来读写当前<code>&lt;a&gt;</code>元素在文档里面的 Tab 键遍历顺序。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;https://example.com&quot;&gt;test&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>tabIndex <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="target-属性" tabindex="-1"><a class="header-anchor" href="#target-属性"><span>target 属性</span></a></h3><p><code>target</code>属性用来读写<code>&lt;a&gt;</code>元素的 HTML 属性<code>target</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;https://example.com&quot; target=&quot;_blank&quot;&gt;test&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>target <span class="token comment">// &quot;_blank&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="text-属性" tabindex="-1"><a class="header-anchor" href="#text-属性"><span>text 属性</span></a></h3><p><code>text</code>属性用来读写<code>&lt;a&gt;</code>元素的链接文本，等同于当前节点的<code>textContent</code>属性。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; href=&quot;https://example.com&quot;&gt;test&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>text <span class="token comment">// &quot;test&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-属性" tabindex="-1"><a class="header-anchor" href="#type-属性"><span>type 属性</span></a></h3><p><code>type</code>属性用来读写<code>&lt;a&gt;</code>元素的 HTML 属性<code>type</code>，表示链接目标的 MIME 类型。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;a id=&quot;test&quot; type=&quot;video/mp4&quot; href=&quot;example.mp4&quot;&gt;video&lt;/a&gt;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>type <span class="token comment">// &quot;video/mp4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><p><code>&lt;a&gt;</code>元素的方法都是继承的，主要有以下三个。</p><ul><li><code>blur()</code>：从当前元素移除键盘焦点，详见<code>HTMLElement</code>接口的介绍。</li><li><code>focus()</code>：当前元素得到键盘焦点，详见<code>HTMLElement</code>接口的介绍。</li><li><code>toString()</code>：返回当前<code>&lt;a&gt;</code>元素的 HTML 属性<code>href</code>。</li></ul>`,30);function k(h,g){const s=o("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[e("注意，不同的浏览器在不同的操作系统下，唤起快捷键的功能键组合是"),n("a",r,[e("不一样"),p(s)]),e("的。比如，Chrome 浏览器在 Linux 系统下，需要按下"),u,e("，才会跳转到"),m,e("。")]),v])}const f=t(i,[["render",k],["__file","a.html.vue"]]),y=JSON.parse(`{"path":"/technology/javascript/elements/a.html","title":"<a>","lang":"zh-CN","frontmatter":{"title":"<a>","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"<a>元素用来设置链接。除了网页元素的通用接口（Node接口、Element接口、HTMLElement接口），它还继承了HTMLAnchorElement接口和HTMLHyperlinkElementUtils接口。 属性 URL 相关属性 <a>元素有一系列 URL 相关属性，可以用来操作链接地址。这些属性的含义，可以参见Location对象的实例...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/elements/a.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"<a>"}],["meta",{"property":"og:description","content":"<a>元素用来设置链接。除了网页元素的通用接口（Node接口、Element接口、HTMLElement接口），它还继承了HTMLAnchorElement接口和HTMLHyperlinkElementUtils接口。 属性 URL 相关属性 <a>元素有一系列 URL 相关属性，可以用来操作链接地址。这些属性的含义，可以参见Location对象的实例..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"<a>\\",\\"description\\":\\"<a>元素用来设置链接。除了网页元素的通用接口（Node接口、Element接口、HTMLElement接口），它还继承了HTMLAnchorElement接口和HTMLHyperlinkElementUtils接口。 属性 URL 相关属性 <a>元素有一系列 URL 相关属性，可以用来操作链接地址。这些属性的含义，可以参见Location对象的实例...\\"}"]]},"headers":[{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"URL 相关属性","slug":"url-相关属性","link":"#url-相关属性","children":[]},{"level":3,"title":"accessKey 属性","slug":"accesskey-属性","link":"#accesskey-属性","children":[]},{"level":3,"title":"download 属性","slug":"download-属性","link":"#download-属性","children":[]},{"level":3,"title":"hreflang 属性","slug":"hreflang-属性","link":"#hreflang-属性","children":[]},{"level":3,"title":"referrerPolicy 属性","slug":"referrerpolicy-属性","link":"#referrerpolicy-属性","children":[]},{"level":3,"title":"rel 属性","slug":"rel-属性","link":"#rel-属性","children":[]},{"level":3,"title":"tabIndex 属性","slug":"tabindex-属性","link":"#tabindex-属性","children":[]},{"level":3,"title":"target 属性","slug":"target-属性","link":"#target-属性","children":[]},{"level":3,"title":"text 属性","slug":"text-属性","link":"#text-属性","children":[]},{"level":3,"title":"type 属性","slug":"type-属性","link":"#type-属性","children":[]}]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":3.78,"words":1133},"filePathRelative":"technology/javascript/elements/a.md","localizedDate":"2023年1月11日","excerpt":"<p><code>&lt;a&gt;</code>元素用来设置链接。除了网页元素的通用接口（<code>Node</code>接口、<code>Element</code>接口、<code>HTMLElement</code>接口），它还继承了<code>HTMLAnchorElement</code>接口和<code>HTMLHyperlinkElementUtils</code>接口。</p>\\n<h2>属性</h2>\\n<h3>URL 相关属性</h3>\\n<p><code>&lt;a&gt;</code>元素有一系列 URL 相关属性，可以用来操作链接地址。这些属性的含义，可以参见<code>Location</code>对象的实例属性。</p>","autoDesc":true}`);export{f as comp,y as data};