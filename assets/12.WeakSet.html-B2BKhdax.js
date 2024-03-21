import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as s,c as i,a as c,b as e,d as t,e as l,f as o}from"./app-BybQgHW9.js";const p={},d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",target:"_blank",rel:"noopener noreferrer"},k=o('<br><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li>描述：WeakSet 对象允许将<strong>弱保持对象</strong>存储在一个集合中 <ul><li>与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值</li><li>WeakSet持弱引用：集合中对象的引用为弱引用 <ul><li>如果没有其他的对 WeakSet 中对象的引用，那么这些对象会被当成垃圾回收掉</li><li>WeakSet 中没有存储当前对象的列表，是<strong>不可枚举</strong>的</li></ul></li></ul></li><li>语法：<code>new WeakSet([iterable])</code></li><li>参数 <ul><li>iterable：如果传递了一个iterable对象，它的所有元素都将被添加到新的 WeakSet 中，null 被认为是 undefined</li></ul></li></ul><br><h2 id="weakset-length" tabindex="-1"><a class="header-anchor" href="#weakset-length"><span>WeakSet.length</span></a></h2><blockquote><p>值为 0</p></blockquote><br>',7),h={id:"weakset-prototype-add",tabindex:"-1"},u={class:"header-anchor",href:"#weakset-prototype-add"},S={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add",target:"_blank",rel:"noopener noreferrer"},W=e("ul",null,[e("li",null,"描述：在 WeakSet 对象的最后一个元素后添加新的对象"),e("li",null,[t("语法："),e("code",null,"ws.add(value)")]),e("li",null,[t("参数 "),e("ul",null,[e("li",null,"value：添加进 WeakSet 集合中的对象")])]),e("li",null,"返回值：WeakSet 对象")],-1),_=e("br",null,null,-1),m={id:"weakset-prototype-delete",tabindex:"-1"},b={class:"header-anchor",href:"#weakset-prototype-delete"},g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete",target:"_blank",rel:"noopener noreferrer"},f=o("<ul><li>描述：从 WeakSet 对象中移除指定的元素</li><li>语法：<code>ws.delete(value)</code></li><li>参数 <ul><li>value：从 WeakSet 对象中移除的对象</li></ul></li><li>返回值 <ul><li>如果在 WeakSet 对象中成功移除元素则返回 true</li><li>如果 key 没有在 WeakSet 中找到或者 key 不是一个对象，则返回 false</li></ul></li></ul><br>",2),y={id:"weakset-prototype-has",tabindex:"-1"},v={class:"header-anchor",href:"#weakset-prototype-has"},w={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has",target:"_blank",rel:"noopener noreferrer"},x=e("ul",null,[e("li",null,"描述：查询 WeakSet 是否存在相应对象"),e("li",null,[t("语法："),e("code",null,"ws.has(value)")]),e("li",null,[t("参数 "),e("ul",null,[e("li",null,"value：被查询的对象")])]),e("li",null,"返回值：如果 WeakSet 对象中存在指定的元素，返回 true。否则返回 false")],-1);function z(N,j){const a=r("ExternalLinkIcon");return s(),i("div",null,[c(" more "),e("p",null,[e("a",d,[t("WeakSet"),l(a)])]),k,e("h2",h,[e("a",u,[e("span",null,[e("a",S,[t("WeakSet.prototype.add()"),l(a)])])])]),W,_,e("h2",m,[e("a",b,[e("span",null,[e("a",g,[t("WeakSet.prototype.delete()"),l(a)])])])]),f,e("h2",y,[e("a",v,[e("span",null,[e("a",w,[t("WeakSet.prototype.has()"),l(a)])])])]),x])}const J=n(p,[["render",z],["__file","12.WeakSet.html.vue"]]),O=JSON.parse(`{"path":"/notes/javascript/built-in-objects/12.WeakSet.html","title":"WeakSet","lang":"zh-CN","frontmatter":{"title":"WeakSet","icon":"article","article":false,"sticky":20,"breadcrumb":false,"description":"WeakSet 概述 描述：WeakSet 对象允许将弱保持对象存储在一个集合中 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值 WeakSet持弱引用：集合中对象的引用为弱引用 如果没有其他的对 WeakSet 中对象的引用，那么这些对象会被当成垃圾回收掉 WeakSet 中没有存储当前对象的列表，是不可枚举的 语法：new...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/notes/javascript/built-in-objects/12.WeakSet.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"WeakSet"}],["meta",{"property":"og:description","content":"WeakSet 概述 描述：WeakSet 对象允许将弱保持对象存储在一个集合中 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值 WeakSet持弱引用：集合中对象的引用为弱引用 如果没有其他的对 WeakSet 中对象的引用，那么这些对象会被当成垃圾回收掉 WeakSet 中没有存储当前对象的列表，是不可枚举的 语法：new..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"WeakSet\\",\\"description\\":\\"WeakSet 概述 描述：WeakSet 对象允许将弱保持对象存储在一个集合中 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值 WeakSet持弱引用：集合中对象的引用为弱引用 如果没有其他的对 WeakSet 中对象的引用，那么这些对象会被当成垃圾回收掉 WeakSet 中没有存储当前对象的列表，是不可枚举的 语法：new...\\"}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"WeakSet.length","slug":"weakset-length","link":"#weakset-length","children":[]},{"level":2,"title":"WeakSet.prototype.add()","slug":"weakset-prototype-add","link":"#weakset-prototype-add","children":[]},{"level":2,"title":"WeakSet.prototype.delete()","slug":"weakset-prototype-delete","link":"#weakset-prototype-delete","children":[]},{"level":2,"title":"WeakSet.prototype.has()","slug":"weakset-prototype-has","link":"#weakset-prototype-has","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"notes/javascript/built-in-objects/12.WeakSet.md","localizedDate":"2023年1月11日","excerpt":"","autoDesc":true}`);export{J as comp,O as data};
