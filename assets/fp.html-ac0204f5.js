const n=JSON.parse(`{"key":"v-77e3d23e","path":"/technology/es6/fp.html","title":"函数式编程","lang":"zh-CN","frontmatter":{"title":"函数式编程","icon":"article","category":["javascript"],"article":false,"tag":["es6"],"copyright":"Copyright by 阮一峰","description":"JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，你可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。 ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。 柯里化 柯里化（currying）指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数（unary）。 function add (a, b) { return a + b; } add(1, 1) // 2","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/es6/fp.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"函数式编程"}],["meta",{"property":"og:description","content":"JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，你可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。 ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。 柯里化 柯里化（currying）指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数（unary）。 function add (a, b) { return a + b; } add(1, 1) // 2"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"函数式编程\\",\\"description\\":\\"JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，你可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。 ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。 柯里化 柯里化（currying）指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数（unary）。 function add (a, b) { return a + b; } add(1, 1) // 2\\"}"]]},"headers":[{"level":2,"title":"柯里化","slug":"柯里化","link":"#柯里化","children":[]},{"level":2,"title":"函数合成","slug":"函数合成","link":"#函数合成","children":[]},{"level":2,"title":"参数倒置","slug":"参数倒置","link":"#参数倒置","children":[]},{"level":2,"title":"执行边界","slug":"执行边界","link":"#执行边界","children":[]},{"level":2,"title":"队列操作","slug":"队列操作","link":"#队列操作","children":[]},{"level":2,"title":"合并操作","slug":"合并操作","link":"#合并操作","children":[]},{"level":2,"title":"配对操作","slug":"配对操作","link":"#配对操作","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":4.31,"words":1292},"filePathRelative":"technology/es6/fp.md","localizedDate":"2023年1月11日","excerpt":"<p>JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，你可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。</p>\\n<p>ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。</p>\\n<h2> 柯里化</h2>\\n<p>柯里化（currying）指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数（unary）。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">add</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">a<span class=\\"token punctuation\\">,</span> b</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> a <span class=\\"token operator\\">+</span> b<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 2</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
