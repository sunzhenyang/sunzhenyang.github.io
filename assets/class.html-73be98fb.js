const e=JSON.parse(`{"key":"v-51a3495c","path":"/technology/ts_axios/chapter2/class.html","title":"类","lang":"zh-CN","frontmatter":{"title":"类","icon":"article","category":["typescript"],"article":false,"tag":["typescript"],"copyright":"Copyright by ustbhuangyi","description":"对于传统的 JavaScript 程序我们会使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。 基本示例 下面看一个使用类的例子： class Greeter { greeting: string constructor(message: string) { this.greeting = message } greet() { return 'Hello, ' + this.greeting } } let greeter = new Greeter('world')","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ts_axios/chapter2/class.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"类"}],["meta",{"property":"og:description","content":"对于传统的 JavaScript 程序我们会使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。 基本示例 下面看一个使用类的例子： class Greeter { greeting: string constructor(message: string) { this.greeting = message } greet() { return 'Hello, ' + this.greeting } } let greeter = new Greeter('world')"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"类\\",\\"description\\":\\"对于传统的 JavaScript 程序我们会使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。 基本示例 下面看一个使用类的例子： class Greeter { greeting: string constructor(message: string) { this.greeting = message } greet() { return 'Hello, ' + this.greeting } } let greeter = new Greeter('world')\\"}"]]},"headers":[{"level":2,"title":"基本示例","slug":"基本示例","link":"#基本示例","children":[]},{"level":2,"title":"继承","slug":"继承","link":"#继承","children":[]},{"level":2,"title":"公共，私有与受保护的修饰符","slug":"公共-私有与受保护的修饰符","link":"#公共-私有与受保护的修饰符","children":[{"level":3,"title":"默认为 public","slug":"默认为-public","link":"#默认为-public","children":[]},{"level":3,"title":"理解 private","slug":"理解-private","link":"#理解-private","children":[]},{"level":3,"title":"理解 protected","slug":"理解-protected","link":"#理解-protected","children":[]}]},{"level":2,"title":"readonly 修饰符","slug":"readonly-修饰符","link":"#readonly-修饰符","children":[{"level":3,"title":"参数属性","slug":"参数属性","link":"#参数属性","children":[]}]},{"level":2,"title":"存取器","slug":"存取器","link":"#存取器","children":[]},{"level":2,"title":"静态属性","slug":"静态属性","link":"#静态属性","children":[]},{"level":2,"title":"抽象类","slug":"抽象类","link":"#抽象类","children":[]},{"level":2,"title":"高级技巧","slug":"高级技巧","link":"#高级技巧","children":[{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"把类当做接口使用","slug":"把类当做接口使用","link":"#把类当做接口使用","children":[]}]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":11.92,"words":3576},"filePathRelative":"technology/ts_axios/chapter2/class.md","localizedDate":"2023年1月11日","excerpt":"<p>对于传统的 JavaScript 程序我们会使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。</p>\\n<h2> 基本示例</h2>\\n<p>下面看一个使用类的例子：</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Greeter</span> <span class=\\"token punctuation\\">{</span>\\n  greeting<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span>\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span>message<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>greeting <span class=\\"token operator\\">=</span> message\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token function\\">greet</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">'Hello, '</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>greeting\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">let</span> greeter <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Greeter</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'world'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
