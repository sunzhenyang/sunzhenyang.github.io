const n=JSON.parse('{"key":"v-92abb3aa","path":"/fe/react/01.%E5%B8%B8%E7%94%A8%E5%86%99%E6%B3%95.html","title":"React 常用写法","lang":"zh-CN","frontmatter":{"title":"React 常用写法","icon":"article","article":false,"date":"2023-02-22T00:00:00.000Z","category":["react"],"tag":["react"],"description":"新建组件 新建文件 import React from \'react\' interface RobotProps { id: number name: string email: string } const Robot: React.FC&lt;RobotProps&gt; = ({ id, name, email }) =&gt; { return ( &lt;&gt; &lt;img src={`https://robohash.org/${id}`} alt={name} /&gt; &lt;h2&gt;{name}&lt;/h2&gt; &lt;div&gt;{email}&lt;/div&gt; &lt;/&gt; ) } export default Robot","head":[["meta",{"property":"og:url","content":"https://codemake.fun/fe/react/01.%E5%B8%B8%E7%94%A8%E5%86%99%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"Yang\'s Blog"}],["meta",{"property":"og:title","content":"React 常用写法"}],["meta",{"property":"og:description","content":"新建组件 新建文件 import React from \'react\' interface RobotProps { id: number name: string email: string } const Robot: React.FC&lt;RobotProps&gt; = ({ id, name, email }) =&gt; { return ( &lt;&gt; &lt;img src={`https://robohash.org/${id}`} alt={name} /&gt; &lt;h2&gt;{name}&lt;/h2&gt; &lt;div&gt;{email}&lt;/div&gt; &lt;/&gt; ) } export default Robot"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T08:31:10.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"react"}],["meta",{"property":"article:published_time","content":"2023-02-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T08:31:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"React 常用写法\\",\\"description\\":\\"新建组件 新建文件 import React from \'react\' interface RobotProps { id: number name: string email: string } const Robot: React.FC&lt;RobotProps&gt; = ({ id, name, email }) =&gt; { return ( &lt;&gt; &lt;img src={`https://robohash.org/${id}`} alt={name} /&gt; &lt;h2&gt;{name}&lt;/h2&gt; &lt;div&gt;{email}&lt;/div&gt; &lt;/&gt; ) } export default Robot\\"}"]]},"headers":[{"level":2,"title":"新建组件","slug":"新建组件","link":"#新建组件","children":[]},{"level":2,"title":"CSS 模块化","slug":"css-模块化","link":"#css-模块化","children":[]}],"git":{"createdTime":1682999759000,"updatedTime":1684312270000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":2}]},"readingTime":{"minutes":1.2,"words":359},"filePathRelative":"fe/react/01.常用写法.md","localizedDate":"2023年2月22日","excerpt":"<h2> 新建组件</h2>\\n<blockquote>\\n<p>新建文件</p>\\n</blockquote>\\n<div class=\\"language-tsx line-numbers-mode\\" data-ext=\\"tsx\\"><pre class=\\"language-tsx\\"><code><span class=\\"token keyword\\">import</span> React <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'react\'</span>\\n\\n<span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">RobotProps</span> <span class=\\"token punctuation\\">{</span>\\n  id<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span>\\n  email<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> Robot<span class=\\"token operator\\">:</span> React<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">FC</span><span class=\\"token operator\\">&lt;</span>RobotProps<span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> id<span class=\\"token punctuation\\">,</span> name<span class=\\"token punctuation\\">,</span> email <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>img</span> <span class=\\"token attr-name\\">src</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">https://robohash.org/</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>id<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">}</span></span> <span class=\\"token attr-name\\">alt</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>name<span class=\\"token punctuation\\">}</span></span> <span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h2</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">{</span>name<span class=\\"token punctuation\\">}</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h2</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">{</span>email<span class=\\"token punctuation\\">}</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> Robot\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
