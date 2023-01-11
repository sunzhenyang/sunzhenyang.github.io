const n=JSON.parse(`{"key":"v-17969779","path":"/technology/es6/set-map.html","title":"Set 和 Map 数据结构","lang":"zh-CN","frontmatter":{"title":"Set 和 Map 数据结构","icon":"article","category":["javascript"],"article":false,"tag":["es6"],"copyright":"Copyright by 阮一峰","description":"Set 基本用法 ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。 Set本身是一个构造函数，用来生成 Set 数据结构。 const s = new Set(); [2, 3, 5, 4, 5, 2, 2].forEach(x =&gt; s.add(x)); for (let i of s) { console.log(i); } // 2 3 5 4","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/es6/set-map.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Set 和 Map 数据结构"}],["meta",{"property":"og:description","content":"Set 基本用法 ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。 Set本身是一个构造函数，用来生成 Set 数据结构。 const s = new Set(); [2, 3, 5, 4, 5, 2, 2].forEach(x =&gt; s.add(x)); for (let i of s) { console.log(i); } // 2 3 5 4"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Set 和 Map 数据结构\\",\\"description\\":\\"Set 基本用法 ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。 Set本身是一个构造函数，用来生成 Set 数据结构。 const s = new Set(); [2, 3, 5, 4, 5, 2, 2].forEach(x =&gt; s.add(x)); for (let i of s) { console.log(i); } // 2 3 5 4\\"}"]]},"headers":[{"level":2,"title":"Set","slug":"set","link":"#set","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"Set 实例的属性和方法","slug":"set-实例的属性和方法","link":"#set-实例的属性和方法","children":[]},{"level":3,"title":"遍历操作","slug":"遍历操作","link":"#遍历操作","children":[]}]},{"level":2,"title":"WeakSet","slug":"weakset","link":"#weakset","children":[{"level":3,"title":"含义","slug":"含义","link":"#含义","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]}]},{"level":2,"title":"Map","slug":"map","link":"#map","children":[{"level":3,"title":"含义和基本用法","slug":"含义和基本用法","link":"#含义和基本用法","children":[]},{"level":3,"title":"实例的属性和操作方法","slug":"实例的属性和操作方法","link":"#实例的属性和操作方法","children":[]},{"level":3,"title":"遍历方法","slug":"遍历方法","link":"#遍历方法","children":[]},{"level":3,"title":"与其他数据结构的互相转换","slug":"与其他数据结构的互相转换","link":"#与其他数据结构的互相转换","children":[]}]},{"level":2,"title":"WeakMap","slug":"weakmap","link":"#weakmap","children":[{"level":3,"title":"含义","slug":"含义-1","link":"#含义-1","children":[]},{"level":3,"title":"WeakMap 的语法","slug":"weakmap-的语法","link":"#weakmap-的语法","children":[]},{"level":3,"title":"WeakMap 的示例","slug":"weakmap-的示例","link":"#weakmap-的示例","children":[]},{"level":3,"title":"WeakMap 的用途","slug":"weakmap-的用途","link":"#weakmap-的用途","children":[]}]},{"level":2,"title":"WeakRef","slug":"weakref","link":"#weakref","children":[]},{"level":2,"title":"FinalizationRegistry","slug":"finalizationregistry","link":"#finalizationregistry","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":28.17,"words":8452},"filePathRelative":"technology/es6/set-map.md","localizedDate":"2023年1月11日","excerpt":"<h2> Set</h2>\\n<h3> 基本用法</h3>\\n<p>ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</p>\\n<p><code>Set</code>本身是一个构造函数，用来生成 Set 数据结构。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> s <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Set</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x</span> <span class=\\"token operator\\">=&gt;</span> s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token keyword\\">of</span> s<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// 2 3 5 4</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
