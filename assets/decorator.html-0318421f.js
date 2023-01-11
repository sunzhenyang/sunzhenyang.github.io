const e=JSON.parse(`{"key":"v-1116caaf","path":"/technology/es6/decorator.html","title":"装饰器","lang":"zh-CN","frontmatter":{"title":"装饰器","icon":"article","category":["javascript"],"article":false,"tag":["es6"],"copyright":"Copyright by 阮一峰","description":"[说明] Decorator 提案经历了重大的语法变化，目前处于第三阶段，定案之前不知道是否还有变化。本章现在属于草稿阶段，凡是标注“新语法”的章节，都是基于当前的语法，不过没有详细整理，只是一些原始材料；未标注“新语法”的章节基于以前的语法，是过去遗留的稿子。之所以保留以前的内容，有两个原因，一是 TypeScript 装饰器会用到这些语法，二是里面包含不少有价值的内容。等到标准完全定案，本章将彻底重写：删去过时内容，补充材料，增加解释。（2022年6月） 装饰器（Decorator）用来增强 JavaScript 类（class）的功能，许多面向对象的语言都有这种语法，目前有一个提案将其引入了 ECMAScript。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/es6/decorator.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"装饰器"}],["meta",{"property":"og:description","content":"[说明] Decorator 提案经历了重大的语法变化，目前处于第三阶段，定案之前不知道是否还有变化。本章现在属于草稿阶段，凡是标注“新语法”的章节，都是基于当前的语法，不过没有详细整理，只是一些原始材料；未标注“新语法”的章节基于以前的语法，是过去遗留的稿子。之所以保留以前的内容，有两个原因，一是 TypeScript 装饰器会用到这些语法，二是里面包含不少有价值的内容。等到标准完全定案，本章将彻底重写：删去过时内容，补充材料，增加解释。（2022年6月） 装饰器（Decorator）用来增强 JavaScript 类（class）的功能，许多面向对象的语言都有这种语法，目前有一个提案将其引入了 ECMAScript。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"装饰器\\",\\"description\\":\\"[说明] Decorator 提案经历了重大的语法变化，目前处于第三阶段，定案之前不知道是否还有变化。本章现在属于草稿阶段，凡是标注“新语法”的章节，都是基于当前的语法，不过没有详细整理，只是一些原始材料；未标注“新语法”的章节基于以前的语法，是过去遗留的稿子。之所以保留以前的内容，有两个原因，一是 TypeScript 装饰器会用到这些语法，二是里面包含不少有价值的内容。等到标准完全定案，本章将彻底重写：删去过时内容，补充材料，增加解释。（2022年6月） 装饰器（Decorator）用来增强 JavaScript 类（class）的功能，许多面向对象的语言都有这种语法，目前有一个提案将其引入了 ECMAScript。\\"}"]]},"headers":[{"level":2,"title":"装饰器的种类（新语法）","slug":"装饰器的种类-新语法","link":"#装饰器的种类-新语法","children":[]},{"level":2,"title":"装饰器 API（新语法）","slug":"装饰器-api-新语法","link":"#装饰器-api-新语法","children":[]},{"level":2,"title":"类的装饰","slug":"类的装饰","link":"#类的装饰","children":[]},{"level":2,"title":"类装饰器（新语法）","slug":"类装饰器-新语法","link":"#类装饰器-新语法","children":[]},{"level":2,"title":"方法装饰器（新语法）","slug":"方法装饰器-新语法","link":"#方法装饰器-新语法","children":[]},{"level":2,"title":"方法的装饰","slug":"方法的装饰","link":"#方法的装饰","children":[]},{"level":2,"title":"为什么装饰器不能用于函数？","slug":"为什么装饰器不能用于函数","link":"#为什么装饰器不能用于函数","children":[]},{"level":2,"title":"存取器装饰器（新语法）","slug":"存取器装饰器-新语法","link":"#存取器装饰器-新语法","children":[]},{"level":2,"title":"属性装饰器（新语法）","slug":"属性装饰器-新语法","link":"#属性装饰器-新语法","children":[]},{"level":2,"title":"accessor 命令（新语法）","slug":"accessor-命令-新语法","link":"#accessor-命令-新语法","children":[]},{"level":2,"title":"addInitializer() 方法（新语法）","slug":"addinitializer-方法-新语法","link":"#addinitializer-方法-新语法","children":[]},{"level":2,"title":"core-decorators.js","slug":"core-decorators-js","link":"#core-decorators-js","children":[]},{"level":2,"title":"使用装饰器实现自动发布事件","slug":"使用装饰器实现自动发布事件","link":"#使用装饰器实现自动发布事件","children":[]},{"level":2,"title":"Mixin","slug":"mixin","link":"#mixin","children":[]},{"level":2,"title":"Trait","slug":"trait","link":"#trait","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":19.01,"words":5703},"filePathRelative":"technology/es6/decorator.md","localizedDate":"2023年1月11日","excerpt":"<p>[说明] Decorator 提案经历了重大的语法变化，目前处于第三阶段，定案之前不知道是否还有变化。本章现在属于草稿阶段，凡是标注“新语法”的章节，都是基于当前的语法，不过没有详细整理，只是一些原始材料；未标注“新语法”的章节基于以前的语法，是过去遗留的稿子。之所以保留以前的内容，有两个原因，一是 TypeScript 装饰器会用到这些语法，二是里面包含不少有价值的内容。等到标准完全定案，本章将彻底重写：删去过时内容，补充材料，增加解释。（2022年6月）</p>\\n<p>装饰器（Decorator）用来增强 JavaScript 类（class）的功能，许多面向对象的语言都有这种语法，目前有一个<a href=\\"https://github.com/tc39/proposal-decorators\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">提案</a>将其引入了 ECMAScript。</p>","autoDesc":true}`);export{e as data};
