const e=JSON.parse(`{"key":"v-b0aae794","path":"/technology/javascript/bom/file.html","title":"File 对象，FileList 对象，FileReader 对象","lang":"zh-CN","frontmatter":{"title":"File 对象，FileList 对象，FileReader 对象","icon":"article","category":["javascript"],"article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"File 对象 File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象，或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。 最常见的使用场合是表单的文件上传控件（&lt;input type=\\"file\\"&gt;），用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。 // HTML 代码如下 // &lt;input id=\\"fileItem\\" type=\\"file\\"&gt; var file = document.getElementById('fileItem').files[0]; file instanceof File // true","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/bom/file.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"File 对象，FileList 对象，FileReader 对象"}],["meta",{"property":"og:description","content":"File 对象 File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象，或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。 最常见的使用场合是表单的文件上传控件（&lt;input type=\\"file\\"&gt;），用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。 // HTML 代码如下 // &lt;input id=\\"fileItem\\" type=\\"file\\"&gt; var file = document.getElementById('fileItem').files[0]; file instanceof File // true"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"File 对象，FileList 对象，FileReader 对象\\",\\"description\\":\\"File 对象 File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象，或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。 最常见的使用场合是表单的文件上传控件（&lt;input type=\\\\\\"file\\\\\\"&gt;），用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。 // HTML 代码如下 // &lt;input id=\\\\\\"fileItem\\\\\\" type=\\\\\\"file\\\\\\"&gt; var file = document.getElementById('fileItem').files[0]; file instanceof File // true\\"}"]]},"headers":[{"level":2,"title":"File 对象","slug":"file-对象","link":"#file-对象","children":[{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"实例属性和实例方法","slug":"实例属性和实例方法","link":"#实例属性和实例方法","children":[]}]},{"level":2,"title":"FileList 对象","slug":"filelist-对象","link":"#filelist-对象","children":[]},{"level":2,"title":"FileReader 对象","slug":"filereader-对象","link":"#filereader-对象","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":4.73,"words":1418},"filePathRelative":"technology/javascript/bom/file.md","localizedDate":"2023年1月11日","excerpt":"<h2> File 对象</h2>\\n<p>File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象，或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。</p>\\n<p>最常见的使用场合是表单的文件上传控件（<code>&lt;input type=\\"file\\"&gt;</code>），用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// HTML 代码如下</span>\\n<span class=\\"token comment\\">// &lt;input id=\\"fileItem\\" type=\\"file\\"&gt;</span>\\n<span class=\\"token keyword\\">var</span> file <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'fileItem'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>files<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\nfile <span class=\\"token keyword\\">instanceof</span> <span class=\\"token class-name\\">File</span> <span class=\\"token comment\\">// true</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
