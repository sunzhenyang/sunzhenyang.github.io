const n=JSON.parse(`{"key":"v-3c10818e","path":"/technology/es6/async.html","title":"async 函数","lang":"zh-CN","frontmatter":{"title":"async 函数","icon":"article","category":"javascript","article":false,"tag":["es6"],"copyright":"Copyright by 阮一峰","description":"含义 ES2017 标准引入了 async 函数，使得异步操作变得更加方便。 async 函数是什么？一句话，它就是 Generator 函数的语法糖。 前文有一个 Generator 函数，依次读取两个文件。 const fs = require('fs'); const readFile = function (fileName) { return new Promise(function (resolve, reject) { fs.readFile(fileName, function(error, data) { if (error) return reject(error); resolve(data); }); }); }; const gen = function* () { const f1 = yield readFile('/etc/fstab'); const f2 = yield readFile('/etc/shells'); console.log(f1.toString()); console.log(f2.toString()); };","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/es6/async.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"async 函数"}],["meta",{"property":"og:description","content":"含义 ES2017 标准引入了 async 函数，使得异步操作变得更加方便。 async 函数是什么？一句话，它就是 Generator 函数的语法糖。 前文有一个 Generator 函数，依次读取两个文件。 const fs = require('fs'); const readFile = function (fileName) { return new Promise(function (resolve, reject) { fs.readFile(fileName, function(error, data) { if (error) return reject(error); resolve(data); }); }); }; const gen = function* () { const f1 = yield readFile('/etc/fstab'); const f2 = yield readFile('/etc/shells'); console.log(f1.toString()); console.log(f2.toString()); };"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"async 函数\\",\\"description\\":\\"含义 ES2017 标准引入了 async 函数，使得异步操作变得更加方便。 async 函数是什么？一句话，它就是 Generator 函数的语法糖。 前文有一个 Generator 函数，依次读取两个文件。 const fs = require('fs'); const readFile = function (fileName) { return new Promise(function (resolve, reject) { fs.readFile(fileName, function(error, data) { if (error) return reject(error); resolve(data); }); }); }; const gen = function* () { const f1 = yield readFile('/etc/fstab'); const f2 = yield readFile('/etc/shells'); console.log(f1.toString()); console.log(f2.toString()); };\\"}"]]},"headers":[{"level":2,"title":"含义","slug":"含义","link":"#含义","children":[]},{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[{"level":3,"title":"返回 Promise 对象","slug":"返回-promise-对象","link":"#返回-promise-对象","children":[]},{"level":3,"title":"Promise 对象的状态变化","slug":"promise-对象的状态变化","link":"#promise-对象的状态变化","children":[]},{"level":3,"title":"await 命令","slug":"await-命令","link":"#await-命令","children":[]},{"level":3,"title":"错误处理","slug":"错误处理","link":"#错误处理","children":[]},{"level":3,"title":"使用注意点","slug":"使用注意点","link":"#使用注意点","children":[]}]},{"level":2,"title":"async 函数的实现原理","slug":"async-函数的实现原理","link":"#async-函数的实现原理","children":[]},{"level":2,"title":"与其他异步处理方法的比较","slug":"与其他异步处理方法的比较","link":"#与其他异步处理方法的比较","children":[]},{"level":2,"title":"实例：按顺序完成异步操作","slug":"实例-按顺序完成异步操作","link":"#实例-按顺序完成异步操作","children":[]},{"level":2,"title":"顶层 await","slug":"顶层-await","link":"#顶层-await","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":17.62,"words":5287},"filePathRelative":"technology/es6/async.md","localizedDate":"2023年1月11日","excerpt":"<h2> 含义</h2>\\n<p>ES2017 标准引入了 async 函数，使得异步操作变得更加方便。</p>\\n<p>async 函数是什么？一句话，它就是 Generator 函数的语法糖。</p>\\n<p>前文有一个 Generator 函数，依次读取两个文件。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> fs <span class=\\"token operator\\">=</span> <span class=\\"token function\\">require</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'fs'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">readFile</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">fileName</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Promise</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">resolve<span class=\\"token punctuation\\">,</span> reject</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    fs<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">readFile</span><span class=\\"token punctuation\\">(</span>fileName<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">error<span class=\\"token punctuation\\">,</span> data</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">reject</span><span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token function\\">resolve</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">gen</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token operator\\">*</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> f1 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">yield</span> <span class=\\"token function\\">readFile</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/etc/fstab'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">const</span> f2 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">yield</span> <span class=\\"token function\\">readFile</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/etc/shells'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>f1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>f2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
