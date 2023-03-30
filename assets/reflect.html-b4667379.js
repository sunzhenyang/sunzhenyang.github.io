const e=JSON.parse(`{"key":"v-624e85ad","path":"/technology/es6/reflect.html","title":"Reflect","lang":"zh-CN","frontmatter":{"title":"Reflect","icon":"article","category":"javascript","article":false,"tag":["es6"],"copyright":"Copyright by 阮一峰","description":"概述 Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。 （1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/es6/reflect.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Reflect"}],["meta",{"property":"og:description","content":"概述 Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。 （1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Reflect\\",\\"description\\":\\"概述 Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。 （1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。\\"}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"静态方法","slug":"静态方法","link":"#静态方法","children":[{"level":3,"title":"Reflect.get(target, name, receiver)","slug":"reflect-get-target-name-receiver","link":"#reflect-get-target-name-receiver","children":[]},{"level":3,"title":"Reflect.set(target, name, value, receiver)","slug":"reflect-set-target-name-value-receiver","link":"#reflect-set-target-name-value-receiver","children":[]},{"level":3,"title":"Reflect.has(obj, name)","slug":"reflect-has-obj-name","link":"#reflect-has-obj-name","children":[]},{"level":3,"title":"Reflect.deleteProperty(obj, name)","slug":"reflect-deleteproperty-obj-name","link":"#reflect-deleteproperty-obj-name","children":[]},{"level":3,"title":"Reflect.construct(target, args)","slug":"reflect-construct-target-args","link":"#reflect-construct-target-args","children":[]},{"level":3,"title":"Reflect.getPrototypeOf(obj)","slug":"reflect-getprototypeof-obj","link":"#reflect-getprototypeof-obj","children":[]},{"level":3,"title":"Reflect.setPrototypeOf(obj, newProto)","slug":"reflect-setprototypeof-obj-newproto","link":"#reflect-setprototypeof-obj-newproto","children":[]},{"level":3,"title":"Reflect.apply(func, thisArg, args)","slug":"reflect-apply-func-thisarg-args","link":"#reflect-apply-func-thisarg-args","children":[]},{"level":3,"title":"Reflect.defineProperty(target, propertyKey, attributes)","slug":"reflect-defineproperty-target-propertykey-attributes","link":"#reflect-defineproperty-target-propertykey-attributes","children":[]},{"level":3,"title":"Reflect.getOwnPropertyDescriptor(target, propertyKey)","slug":"reflect-getownpropertydescriptor-target-propertykey","link":"#reflect-getownpropertydescriptor-target-propertykey","children":[]},{"level":3,"title":"Reflect.isExtensible (target)","slug":"reflect-isextensible-target","link":"#reflect-isextensible-target","children":[]},{"level":3,"title":"Reflect.preventExtensions(target)","slug":"reflect-preventextensions-target","link":"#reflect-preventextensions-target","children":[]},{"level":3,"title":"Reflect.ownKeys (target)","slug":"reflect-ownkeys-target","link":"#reflect-ownkeys-target","children":[]}]},{"level":2,"title":"实例：使用 Proxy 实现观察者模式","slug":"实例-使用-proxy-实现观察者模式","link":"#实例-使用-proxy-实现观察者模式","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":8.93,"words":2678},"filePathRelative":"technology/es6/reflect.md","localizedDate":"2023年1月11日","excerpt":"<h2> 概述</h2>\\n<p><code>Reflect</code>对象与<code>Proxy</code>对象一样，也是 ES6 为了操作对象而提供的新 API。<code>Reflect</code>对象的设计目的有这样几个。</p>\\n<p>（1） 将<code>Object</code>对象的一些明显属于语言内部的方法（比如<code>Object.defineProperty</code>），放到<code>Reflect</code>对象上。现阶段，某些方法同时在<code>Object</code>和<code>Reflect</code>对象上部署，未来的新方法将只部署在<code>Reflect</code>对象上。也就是说，从<code>Reflect</code>对象上可以拿到语言内部的方法。</p>","autoDesc":true}`);export{e as data};
