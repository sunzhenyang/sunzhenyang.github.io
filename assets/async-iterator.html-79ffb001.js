const n=JSON.parse(`{"key":"v-261d0dee","path":"/technology/es6/async-iterator.html","title":"异步遍历器","lang":"zh-CN","frontmatter":{"title":"异步遍历器","icon":"article","category":"javascript","article":false,"tag":["es6"],"copyright":"Copyright by 阮一峰","description":"同步遍历器的问题 《遍历器》一章说过，Iterator 接口是一种数据遍历的协议，只要调用遍历器对象的next方法，就会得到一个对象，表示当前遍历指针所在的那个位置的信息。next方法返回的对象的结构是{value, done}，其中value表示当前的数据的值，done是一个布尔值，表示遍历是否结束。 function idMaker() { let index = 0; return { next: function() { return { value: index++, done: false }; } }; } const it = idMaker(); it.next().value // 0 it.next().value // 1 it.next().value // 2 // ...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/es6/async-iterator.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"异步遍历器"}],["meta",{"property":"og:description","content":"同步遍历器的问题 《遍历器》一章说过，Iterator 接口是一种数据遍历的协议，只要调用遍历器对象的next方法，就会得到一个对象，表示当前遍历指针所在的那个位置的信息。next方法返回的对象的结构是{value, done}，其中value表示当前的数据的值，done是一个布尔值，表示遍历是否结束。 function idMaker() { let index = 0; return { next: function() { return { value: index++, done: false }; } }; } const it = idMaker(); it.next().value // 0 it.next().value // 1 it.next().value // 2 // ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"异步遍历器\\",\\"description\\":\\"同步遍历器的问题 《遍历器》一章说过，Iterator 接口是一种数据遍历的协议，只要调用遍历器对象的next方法，就会得到一个对象，表示当前遍历指针所在的那个位置的信息。next方法返回的对象的结构是{value, done}，其中value表示当前的数据的值，done是一个布尔值，表示遍历是否结束。 function idMaker() { let index = 0; return { next: function() { return { value: index++, done: false }; } }; } const it = idMaker(); it.next().value // 0 it.next().value // 1 it.next().value // 2 // ...\\"}"]]},"headers":[{"level":2,"title":"同步遍历器的问题","slug":"同步遍历器的问题","link":"#同步遍历器的问题","children":[]},{"level":2,"title":"异步遍历的接口","slug":"异步遍历的接口","link":"#异步遍历的接口","children":[]},{"level":2,"title":"for await...of","slug":"for-await-of","link":"#for-await-of","children":[]},{"level":2,"title":"异步 Generator 函数","slug":"异步-generator-函数","link":"#异步-generator-函数","children":[]},{"level":2,"title":"yield* 语句","slug":"yield-语句","link":"#yield-语句","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":10.79,"words":3237},"filePathRelative":"technology/es6/async-iterator.md","localizedDate":"2023年1月11日","excerpt":"<h2> 同步遍历器的问题</h2>\\n<p>《遍历器》一章说过，Iterator 接口是一种数据遍历的协议，只要调用遍历器对象的<code>next</code>方法，就会得到一个对象，表示当前遍历指针所在的那个位置的信息。<code>next</code>方法返回的对象的结构是<code>{value, done}</code>，其中<code>value</code>表示当前的数据的值，<code>done</code>是一个布尔值，表示遍历是否结束。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">idMaker</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> index <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function-variable function\\">next</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> index<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">done</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> it <span class=\\"token operator\\">=</span> <span class=\\"token function\\">idMaker</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nit<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>value <span class=\\"token comment\\">// 0</span>\\nit<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>value <span class=\\"token comment\\">// 1</span>\\nit<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>value <span class=\\"token comment\\">// 2</span>\\n<span class=\\"token comment\\">// ...</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
