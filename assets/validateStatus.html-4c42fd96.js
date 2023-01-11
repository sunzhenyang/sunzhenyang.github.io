const t=JSON.parse(`{"key":"v-055ac682","path":"/technology/ts_axios/chapter10/validateStatus.html","title":"自定义合法状态码","lang":"zh-CN","frontmatter":{"title":"自定义合法状态码","icon":"article","category":["typescript"],"article":false,"tag":["typescript"],"copyright":"Copyright by ustbhuangyi","description":"需求分析 之前 ts-axios 在处理响应结果的时候，认为 HTTP status 在 200 和 300 之间是一个合法值，在这个区间之外则创建一个错误。有些时候我们想自定义这个规则，比如认为 304 也是一个合法的状态码，所以我们希望 ts-axios 能提供一个配置，允许我们自定义合法状态码规则。如下：","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ts_axios/chapter10/validateStatus.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"自定义合法状态码"}],["meta",{"property":"og:description","content":"需求分析 之前 ts-axios 在处理响应结果的时候，认为 HTTP status 在 200 和 300 之间是一个合法值，在这个区间之外则创建一个错误。有些时候我们想自定义这个规则，比如认为 304 也是一个合法的状态码，所以我们希望 ts-axios 能提供一个配置，允许我们自定义合法状态码规则。如下："}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"自定义合法状态码\\",\\"description\\":\\"需求分析 之前 ts-axios 在处理响应结果的时候，认为 HTTP status 在 200 和 300 之间是一个合法值，在这个区间之外则创建一个错误。有些时候我们想自定义这个规则，比如认为 304 也是一个合法的状态码，所以我们希望 ts-axios 能提供一个配置，允许我们自定义合法状态码规则。如下：\\"}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.87,"words":560},"filePathRelative":"technology/ts_axios/chapter10/validateStatus.md","localizedDate":"2023年1月11日","excerpt":"<h2> 需求分析</h2>\\n<p>之前 <code>ts-axios</code> 在处理响应结果的时候，认为 HTTP <a href=\\"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">status</a> 在 200 和 300 之间是一个合法值，在这个区间之外则创建一个错误。有些时候我们想自定义这个规则，比如认为 304 也是一个合法的状态码，所以我们希望 <code>ts-axios</code> 能提供一个配置，允许我们自定义合法状态码规则。如下：</p>","autoDesc":true}`);export{t as data};
