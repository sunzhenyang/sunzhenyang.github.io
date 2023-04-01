const t=JSON.parse(`{"key":"v-43631f4a","path":"/technology/html/iframe.html","title":"iframe","lang":"zh-CN","frontmatter":{"title":"iframe","icon":"article","category":"HTML","article":false,"tag":["html"],"copyright":"Copyright by 阮一峰","description":"&lt;iframe&gt;标签用于在网页里面嵌入其他网页。 基本用法 &lt;iframe&gt;标签生成一个指定区域，在该区域中嵌入其他网页。它是一个容器元素，如果浏览器不支持&lt;iframe&gt;，就会显示内部的子元素。 &lt;iframe src=\\"https://www.example.com\\" width=\\"100%\\" height=\\"500\\" frameborder=\\"0\\" allowfullscreen sandbox&gt; &lt;p&gt;&lt;a href=\\"https://www.example.com\\"&gt;点击打开嵌入页面&lt;/a&gt;&lt;/p&gt; &lt;/iframe&gt;","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/html/iframe.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"iframe"}],["meta",{"property":"og:description","content":"&lt;iframe&gt;标签用于在网页里面嵌入其他网页。 基本用法 &lt;iframe&gt;标签生成一个指定区域，在该区域中嵌入其他网页。它是一个容器元素，如果浏览器不支持&lt;iframe&gt;，就会显示内部的子元素。 &lt;iframe src=\\"https://www.example.com\\" width=\\"100%\\" height=\\"500\\" frameborder=\\"0\\" allowfullscreen sandbox&gt; &lt;p&gt;&lt;a href=\\"https://www.example.com\\"&gt;点击打开嵌入页面&lt;/a&gt;&lt;/p&gt; &lt;/iframe&gt;"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"iframe\\",\\"description\\":\\"&lt;iframe&gt;标签用于在网页里面嵌入其他网页。 基本用法 &lt;iframe&gt;标签生成一个指定区域，在该区域中嵌入其他网页。它是一个容器元素，如果浏览器不支持&lt;iframe&gt;，就会显示内部的子元素。 &lt;iframe src=\\\\\\"https://www.example.com\\\\\\" width=\\\\\\"100%\\\\\\" height=\\\\\\"500\\\\\\" frameborder=\\\\\\"0\\\\\\" allowfullscreen sandbox&gt; &lt;p&gt;&lt;a href=\\\\\\"https://www.example.com\\\\\\"&gt;点击打开嵌入页面&lt;/a&gt;&lt;/p&gt; &lt;/iframe&gt;\\"}"]]},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"sandbox 属性","slug":"sandbox-属性","link":"#sandbox-属性","children":[]},{"level":2,"title":"loading 属性","slug":"loading-属性","link":"#loading-属性","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":3.82,"words":1146},"filePathRelative":"technology/html/iframe.md","localizedDate":"2023年1月11日","excerpt":"<p><code>&lt;iframe&gt;</code>标签用于在网页里面嵌入其他网页。</p>\\n<h2> 基本用法</h2>\\n<p><code>&lt;iframe&gt;</code>标签生成一个指定区域，在该区域中嵌入其他网页。它是一个容器元素，如果浏览器不支持<code>&lt;iframe&gt;</code>，就会显示内部的子元素。</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>iframe</span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>https://www.example.com<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">width</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>100%<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">height</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>500<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">frameborder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>0<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">allowfullscreen</span> <span class=\\"token attr-name\\">sandbox</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>a</span> <span class=\\"token attr-name\\">href</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>https://www.example.com<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>点击打开嵌入页面<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>a</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>iframe</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};