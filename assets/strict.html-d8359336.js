const e=JSON.parse(`{"key":"v-21dc1cce","path":"/technology/javascript/oop/strict.html","title":"严格模式","lang":"zh-CN","frontmatter":{"title":"严格模式","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"除了正常的运行模式，JavaScript 还有第二种运行模式：严格模式（strict mode）。顾名思义，这种模式采用更加严格的 JavaScript 语法。 同样的代码，在正常模式和严格模式中，可能会有不一样的运行结果。一些在正常模式下可以运行的语句，在严格模式下将不能运行。 设计目的 早期的 JavaScript 语言有很多设计不合理的地方，但是为了兼容以前的代码，又不能改变老的语法，只能不断添加新的语法，引导程序员使用新语法。 严格模式是从 ES5 进入标准的，主要目的有以下几个。 明确禁止一些不合理、不严谨的语法，减少 JavaScript 语言的一些怪异行为。 增加更多报错的场合，消除代码运行的一些不安全之处，保证代码运行的安全。 提高编译器效率，增加运行速度。 为未来新版本的 JavaScript 语法做好铺垫。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/oop/strict.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"严格模式"}],["meta",{"property":"og:description","content":"除了正常的运行模式，JavaScript 还有第二种运行模式：严格模式（strict mode）。顾名思义，这种模式采用更加严格的 JavaScript 语法。 同样的代码，在正常模式和严格模式中，可能会有不一样的运行结果。一些在正常模式下可以运行的语句，在严格模式下将不能运行。 设计目的 早期的 JavaScript 语言有很多设计不合理的地方，但是为了兼容以前的代码，又不能改变老的语法，只能不断添加新的语法，引导程序员使用新语法。 严格模式是从 ES5 进入标准的，主要目的有以下几个。 明确禁止一些不合理、不严谨的语法，减少 JavaScript 语言的一些怪异行为。 增加更多报错的场合，消除代码运行的一些不安全之处，保证代码运行的安全。 提高编译器效率，增加运行速度。 为未来新版本的 JavaScript 语法做好铺垫。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"严格模式\\",\\"description\\":\\"除了正常的运行模式，JavaScript 还有第二种运行模式：严格模式（strict mode）。顾名思义，这种模式采用更加严格的 JavaScript 语法。 同样的代码，在正常模式和严格模式中，可能会有不一样的运行结果。一些在正常模式下可以运行的语句，在严格模式下将不能运行。 设计目的 早期的 JavaScript 语言有很多设计不合理的地方，但是为了兼容以前的代码，又不能改变老的语法，只能不断添加新的语法，引导程序员使用新语法。 严格模式是从 ES5 进入标准的，主要目的有以下几个。 明确禁止一些不合理、不严谨的语法，减少 JavaScript 语言的一些怪异行为。 增加更多报错的场合，消除代码运行的一些不安全之处，保证代码运行的安全。 提高编译器效率，增加运行速度。 为未来新版本的 JavaScript 语法做好铺垫。\\"}"]]},"headers":[{"level":2,"title":"设计目的","slug":"设计目的","link":"#设计目的","children":[]},{"level":2,"title":"启用方法","slug":"启用方法","link":"#启用方法","children":[]},{"level":2,"title":"显式报错","slug":"显式报错","link":"#显式报错","children":[{"level":3,"title":"只读属性不可写","slug":"只读属性不可写","link":"#只读属性不可写","children":[]},{"level":3,"title":"只设置了取值器的属性不可写","slug":"只设置了取值器的属性不可写","link":"#只设置了取值器的属性不可写","children":[]},{"level":3,"title":"禁止扩展的对象不可扩展","slug":"禁止扩展的对象不可扩展","link":"#禁止扩展的对象不可扩展","children":[]},{"level":3,"title":"eval、arguments 不可用作标识名","slug":"eval、arguments-不可用作标识名","link":"#eval、arguments-不可用作标识名","children":[]},{"level":3,"title":"函数不能有重名的参数","slug":"函数不能有重名的参数","link":"#函数不能有重名的参数","children":[]},{"level":3,"title":"禁止八进制的前缀0表示法","slug":"禁止八进制的前缀0表示法","link":"#禁止八进制的前缀0表示法","children":[]}]},{"level":2,"title":"增强的安全措施","slug":"增强的安全措施","link":"#增强的安全措施","children":[{"level":3,"title":"全局变量显式声明","slug":"全局变量显式声明","link":"#全局变量显式声明","children":[]},{"level":3,"title":"禁止 this 关键字指向全局对象","slug":"禁止-this-关键字指向全局对象","link":"#禁止-this-关键字指向全局对象","children":[]},{"level":3,"title":"禁止使用 fn.callee、fn.caller","slug":"禁止使用-fn-callee、fn-caller","link":"#禁止使用-fn-callee、fn-caller","children":[]},{"level":3,"title":"禁止使用 arguments.callee、arguments.caller","slug":"禁止使用-arguments-callee、arguments-caller","link":"#禁止使用-arguments-callee、arguments-caller","children":[]},{"level":3,"title":"禁止删除变量","slug":"禁止删除变量","link":"#禁止删除变量","children":[]}]},{"level":2,"title":"静态绑定","slug":"静态绑定","link":"#静态绑定","children":[{"level":3,"title":"禁止使用 with 语句","slug":"禁止使用-with-语句","link":"#禁止使用-with-语句","children":[]},{"level":3,"title":"创设 eval 作用域","slug":"创设-eval-作用域","link":"#创设-eval-作用域","children":[]},{"level":3,"title":"arguments 不再追踪参数的变化","slug":"arguments-不再追踪参数的变化","link":"#arguments-不再追踪参数的变化","children":[]}]},{"level":2,"title":"向下一个版本的 JavaScript 过渡","slug":"向下一个版本的-javascript-过渡","link":"#向下一个版本的-javascript-过渡","children":[{"level":3,"title":"非函数代码块不得声明函数","slug":"非函数代码块不得声明函数","link":"#非函数代码块不得声明函数","children":[]},{"level":3,"title":"保留字","slug":"保留字","link":"#保留字","children":[]}]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":10.35,"words":3104},"filePathRelative":"technology/javascript/oop/strict.md","localizedDate":"2023年1月11日","excerpt":"<p>除了正常的运行模式，JavaScript 还有第二种运行模式：严格模式（strict mode）。顾名思义，这种模式采用更加严格的 JavaScript 语法。</p>\\n<p>同样的代码，在正常模式和严格模式中，可能会有不一样的运行结果。一些在正常模式下可以运行的语句，在严格模式下将不能运行。</p>\\n<h2> 设计目的</h2>\\n<p>早期的 JavaScript 语言有很多设计不合理的地方，但是为了兼容以前的代码，又不能改变老的语法，只能不断添加新的语法，引导程序员使用新语法。</p>\\n<p>严格模式是从 ES5 进入标准的，主要目的有以下几个。</p>\\n<ul>\\n<li>明确禁止一些不合理、不严谨的语法，减少 JavaScript 语言的一些怪异行为。</li>\\n<li>增加更多报错的场合，消除代码运行的一些不安全之处，保证代码运行的安全。</li>\\n<li>提高编译器效率，增加运行速度。</li>\\n<li>为未来新版本的 JavaScript 语法做好铺垫。</li>\\n</ul>","autoDesc":true}`);export{e as data};