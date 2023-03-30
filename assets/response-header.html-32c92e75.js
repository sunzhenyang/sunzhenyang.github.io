const e=JSON.parse(`{"key":"v-a4d70d4e","path":"/technology/ts_axios/chapter4/response-header.html","title":"处理响应 header","lang":"zh-CN","frontmatter":{"title":"处理响应 header","icon":"article","category":"typescript","article":false,"tag":["typescript"],"copyright":"Copyright by ustbhuangyi","description":"需求分析 我们通过 XMLHttpRequest 对象的 getAllResponseHeaders 方法获取到的值是如下一段字符串： date: Fri, 05 Apr 2019 12:40:49 GMT etag: W/\\"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k\\" connection: keep-alive x-powered-by: Express content-length: 13 content-type: application/json; charset=utf-8","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ts_axios/chapter4/response-header.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"处理响应 header"}],["meta",{"property":"og:description","content":"需求分析 我们通过 XMLHttpRequest 对象的 getAllResponseHeaders 方法获取到的值是如下一段字符串： date: Fri, 05 Apr 2019 12:40:49 GMT etag: W/\\"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k\\" connection: keep-alive x-powered-by: Express content-length: 13 content-type: application/json; charset=utf-8"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"处理响应 header\\",\\"description\\":\\"需求分析 我们通过 XMLHttpRequest 对象的 getAllResponseHeaders 方法获取到的值是如下一段字符串： date: Fri, 05 Apr 2019 12:40:49 GMT etag: W/\\\\\\"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k\\\\\\" connection: keep-alive x-powered-by: Express content-length: 13 content-type: application/json; charset=utf-8\\"}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"parseHeaders 函数实现及应用","slug":"parseheaders-函数实现及应用","link":"#parseheaders-函数实现及应用","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.03,"words":309},"filePathRelative":"technology/ts_axios/chapter4/response-header.md","localizedDate":"2023年1月11日","excerpt":"<h2> 需求分析</h2>\\n<p>我们通过 <code>XMLHttpRequest</code> 对象的 <code>getAllResponseHeaders</code> 方法获取到的值是如下一段字符串：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>date: Fri, 05 Apr 2019 12:40:49 GMT\\netag: W/\\"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k\\"\\nconnection: keep-alive\\nx-powered-by: Express\\ncontent-length: 13\\ncontent-type: application/json; charset=utf-8\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
