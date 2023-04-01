const t=JSON.parse(`{"key":"v-51b76f76","path":"/technology/es6/module-loader.html","title":"Module 的加载实现","lang":"zh-CN","frontmatter":{"title":"Module 的加载实现","icon":"article","category":"javascript","article":false,"tag":["es6"],"copyright":"Copyright by 阮一峰","description":"上一章介绍了模块的语法，本章介绍如何在浏览器和 Node.js 之中加载 ES6 模块，以及实际开发中经常遇到的一些问题（比如循环加载）。 浏览器加载 传统方法 HTML 网页中，浏览器通过&lt;script&gt;标签加载 JavaScript 脚本。 &lt;!-- 页面内嵌的脚本 --&gt; &lt;script type=\\"application/javascript\\"&gt; // module code &lt;/script&gt; &lt;!-- 外部脚本 --&gt; &lt;script type=\\"application/javascript\\" src=\\"path/to/myModule.js\\"&gt; &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/es6/module-loader.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Module 的加载实现"}],["meta",{"property":"og:description","content":"上一章介绍了模块的语法，本章介绍如何在浏览器和 Node.js 之中加载 ES6 模块，以及实际开发中经常遇到的一些问题（比如循环加载）。 浏览器加载 传统方法 HTML 网页中，浏览器通过&lt;script&gt;标签加载 JavaScript 脚本。 &lt;!-- 页面内嵌的脚本 --&gt; &lt;script type=\\"application/javascript\\"&gt; // module code &lt;/script&gt; &lt;!-- 外部脚本 --&gt; &lt;script type=\\"application/javascript\\" src=\\"path/to/myModule.js\\"&gt; &lt;/script&gt;"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Module 的加载实现\\",\\"description\\":\\"上一章介绍了模块的语法，本章介绍如何在浏览器和 Node.js 之中加载 ES6 模块，以及实际开发中经常遇到的一些问题（比如循环加载）。 浏览器加载 传统方法 HTML 网页中，浏览器通过&lt;script&gt;标签加载 JavaScript 脚本。 &lt;!-- 页面内嵌的脚本 --&gt; &lt;script type=\\\\\\"application/javascript\\\\\\"&gt; // module code &lt;/script&gt; &lt;!-- 外部脚本 --&gt; &lt;script type=\\\\\\"application/javascript\\\\\\" src=\\\\\\"path/to/myModule.js\\\\\\"&gt; &lt;/script&gt;\\"}"]]},"headers":[{"level":2,"title":"浏览器加载","slug":"浏览器加载","link":"#浏览器加载","children":[{"level":3,"title":"传统方法","slug":"传统方法","link":"#传统方法","children":[]},{"level":3,"title":"加载规则","slug":"加载规则","link":"#加载规则","children":[]}]},{"level":2,"title":"ES6 模块与 CommonJS 模块的差异","slug":"es6-模块与-commonjs-模块的差异","link":"#es6-模块与-commonjs-模块的差异","children":[]},{"level":2,"title":"Node.js 的模块加载方法","slug":"node-js-的模块加载方法","link":"#node-js-的模块加载方法","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"package.json 的 main 字段","slug":"package-json-的-main-字段","link":"#package-json-的-main-字段","children":[]},{"level":3,"title":"package.json 的 exports 字段","slug":"package-json-的-exports-字段","link":"#package-json-的-exports-字段","children":[]},{"level":3,"title":"CommonJS 模块加载 ES6 模块","slug":"commonjs-模块加载-es6-模块","link":"#commonjs-模块加载-es6-模块","children":[]},{"level":3,"title":"ES6 模块加载 CommonJS 模块","slug":"es6-模块加载-commonjs-模块","link":"#es6-模块加载-commonjs-模块","children":[]},{"level":3,"title":"同时支持两种格式的模块","slug":"同时支持两种格式的模块","link":"#同时支持两种格式的模块","children":[]},{"level":3,"title":"Node.js 的内置模块","slug":"node-js-的内置模块","link":"#node-js-的内置模块","children":[]},{"level":3,"title":"加载路径","slug":"加载路径","link":"#加载路径","children":[]},{"level":3,"title":"内部变量","slug":"内部变量","link":"#内部变量","children":[]}]},{"level":2,"title":"循环加载","slug":"循环加载","link":"#循环加载","children":[{"level":3,"title":"CommonJS 模块的加载原理","slug":"commonjs-模块的加载原理","link":"#commonjs-模块的加载原理","children":[]},{"level":3,"title":"CommonJS 模块的循环加载","slug":"commonjs-模块的循环加载","link":"#commonjs-模块的循环加载","children":[]},{"level":3,"title":"ES6 模块的循环加载","slug":"es6-模块的循环加载","link":"#es6-模块的循环加载","children":[]}]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":21.06,"words":6317},"filePathRelative":"technology/es6/module-loader.md","localizedDate":"2023年1月11日","excerpt":"<p>上一章介绍了模块的语法，本章介绍如何在浏览器和 Node.js 之中加载 ES6 模块，以及实际开发中经常遇到的一些问题（比如循环加载）。</p>\\n<h2> 浏览器加载</h2>\\n<h3> 传统方法</h3>\\n<p>HTML 网页中，浏览器通过<code>&lt;script&gt;</code>标签加载 JavaScript 脚本。</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token comment\\">&lt;!-- 页面内嵌的脚本 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>application/javascript<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n  <span class=\\"token comment\\">// module code</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token comment\\">&lt;!-- 外部脚本 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>application/javascript<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>path/to/myModule.js<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};