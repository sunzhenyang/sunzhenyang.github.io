const e=JSON.parse(`{"key":"v-5e7ad1f0","path":"/technology/javascript/oop/new.html","title":"实例对象与 new 命令","lang":"zh-CN","frontmatter":{"title":"实例对象与 new 命令","icon":"article","category":["javascript"],"article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"JavaScript 语言具有很强的面向对象编程能力，本章介绍 JavaScript 面向对象编程的基础知识。 对象是什么 面向对象编程（Object Oriented Programming，缩写为 OOP）是目前主流的编程范式。它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。 每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/oop/new.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"实例对象与 new 命令"}],["meta",{"property":"og:description","content":"JavaScript 语言具有很强的面向对象编程能力，本章介绍 JavaScript 面向对象编程的基础知识。 对象是什么 面向对象编程（Object Oriented Programming，缩写为 OOP）是目前主流的编程范式。它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。 每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"实例对象与 new 命令\\",\\"description\\":\\"JavaScript 语言具有很强的面向对象编程能力，本章介绍 JavaScript 面向对象编程的基础知识。 对象是什么 面向对象编程（Object Oriented Programming，缩写为 OOP）是目前主流的编程范式。它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。 每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。\\"}"]]},"headers":[{"level":2,"title":"对象是什么","slug":"对象是什么","link":"#对象是什么","children":[]},{"level":2,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":2,"title":"new 命令","slug":"new-命令","link":"#new-命令","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"new 命令的原理","slug":"new-命令的原理","link":"#new-命令的原理","children":[]},{"level":3,"title":"new.target","slug":"new-target","link":"#new-target","children":[]}]},{"level":2,"title":"Object.create() 创建实例对象","slug":"object-create-创建实例对象","link":"#object-create-创建实例对象","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":8.09,"words":2427},"filePathRelative":"technology/javascript/oop/new.md","localizedDate":"2023年1月11日","excerpt":"<p>JavaScript 语言具有很强的面向对象编程能力，本章介绍 JavaScript 面向对象编程的基础知识。</p>\\n<h2> 对象是什么</h2>\\n<p>面向对象编程（Object Oriented Programming，缩写为 OOP）是目前主流的编程范式。它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。</p>\\n<p>每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。</p>","autoDesc":true}`);export{e as data};