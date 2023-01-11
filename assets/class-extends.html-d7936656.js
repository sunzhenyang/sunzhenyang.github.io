const e=JSON.parse(`{"key":"v-149cf274","path":"/technology/es6/class-extends.html","title":"Class 的继承","lang":"zh-CN","frontmatter":{"title":"Class 的继承","icon":"article","category":["javascript"],"article":false,"tag":["es6"],"copyright":"Copyright by 阮一峰","description":"简介 Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。 class Point { } class ColorPoint extends Point { }","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/es6/class-extends.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Class 的继承"}],["meta",{"property":"og:description","content":"简介 Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。 class Point { } class ColorPoint extends Point { }"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Class 的继承\\",\\"description\\":\\"简介 Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。 class Point { } class ColorPoint extends Point { }\\"}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"私有属性和私有方法的继承","slug":"私有属性和私有方法的继承","link":"#私有属性和私有方法的继承","children":[]},{"level":2,"title":"静态属性和静态方法的继承","slug":"静态属性和静态方法的继承","link":"#静态属性和静态方法的继承","children":[]},{"level":2,"title":"Object.getPrototypeOf()","slug":"object-getprototypeof","link":"#object-getprototypeof","children":[]},{"level":2,"title":"super 关键字","slug":"super-关键字","link":"#super-关键字","children":[]},{"level":2,"title":"类的 prototype 属性和__proto__属性","slug":"类的-prototype-属性和-proto-属性","link":"#类的-prototype-属性和-proto-属性","children":[{"level":3,"title":"实例的 __proto__ 属性","slug":"实例的-proto-属性","link":"#实例的-proto-属性","children":[]}]},{"level":2,"title":"原生构造函数的继承","slug":"原生构造函数的继承","link":"#原生构造函数的继承","children":[]},{"level":2,"title":"Mixin 模式的实现","slug":"mixin-模式的实现","link":"#mixin-模式的实现","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":15.87,"words":4762},"filePathRelative":"technology/es6/class-extends.md","localizedDate":"2023年1月11日","excerpt":"<h2> 简介</h2>\\n<p>Class 可以通过<code>extends</code>关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Point</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ColorPoint</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Point</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
