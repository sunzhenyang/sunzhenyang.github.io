const e=JSON.parse(`{"key":"v-bae9167a","path":"/technology/ts_axios/chapter4/url.html","title":"处理请求 url 参数","lang":"zh-CN","frontmatter":{"title":"处理请求 url 参数","icon":"article","category":"typescript","article":false,"tag":["typescript"],"copyright":"Copyright by ustbhuangyi","description":"需求分析 还记得我们上节课遗留了一个问题，再来看这个例子： axios({ method: 'get', url: '/base/get', params: { a: 1, b: 2 } })","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ts_axios/chapter4/url.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"处理请求 url 参数"}],["meta",{"property":"og:description","content":"需求分析 还记得我们上节课遗留了一个问题，再来看这个例子： axios({ method: 'get', url: '/base/get', params: { a: 1, b: 2 } })"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"处理请求 url 参数\\",\\"description\\":\\"需求分析 还记得我们上节课遗留了一个问题，再来看这个例子： axios({ method: 'get', url: '/base/get', params: { a: 1, b: 2 } })\\"}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[{"level":3,"title":"参数值为数组","slug":"参数值为数组","link":"#参数值为数组","children":[]},{"level":3,"title":"参数值为对象","slug":"参数值为对象","link":"#参数值为对象","children":[]},{"level":3,"title":"参数值为 Date 类型","slug":"参数值为-date-类型","link":"#参数值为-date-类型","children":[]},{"level":3,"title":"特殊字符支持","slug":"特殊字符支持","link":"#特殊字符支持","children":[]},{"level":3,"title":"空值忽略","slug":"空值忽略","link":"#空值忽略","children":[]},{"level":3,"title":"丢弃 url 中的哈希标记","slug":"丢弃-url-中的哈希标记","link":"#丢弃-url-中的哈希标记","children":[]},{"level":3,"title":"保留 url 中已存在的参数","slug":"保留-url-中已存在的参数","link":"#保留-url-中已存在的参数","children":[]}]},{"level":2,"title":"buildURL 函数实现","slug":"buildurl-函数实现","link":"#buildurl-函数实现","children":[]},{"level":2,"title":"实现 url 参数处理逻辑","slug":"实现-url-参数处理逻辑","link":"#实现-url-参数处理逻辑","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":3.94,"words":1182},"filePathRelative":"technology/ts_axios/chapter4/url.md","localizedDate":"2023年1月11日","excerpt":"<h2> 需求分析</h2>\\n<p>还记得我们上节课遗留了一个问题，再来看这个例子：</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token function\\">axios</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  method<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'get'</span><span class=\\"token punctuation\\">,</span>\\n  url<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'/base/get'</span><span class=\\"token punctuation\\">,</span>\\n  params<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    a<span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n    b<span class=\\"token operator\\">:</span> <span class=\\"token number\\">2</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
