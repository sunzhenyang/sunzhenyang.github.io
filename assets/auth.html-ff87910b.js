const e=JSON.parse(`{"key":"v-20b3053f","path":"/technology/ts_axios/chapter10/auth.html","title":"HTTP 授权","lang":"zh-CN","frontmatter":{"title":"HTTP 授权","icon":"article","category":"typescript","article":false,"tag":["typescript"],"copyright":"Copyright by ustbhuangyi","description":"需求分析 HTTP 协议中的 Authorization 请求 header 会包含服务器用于验证用户代理身份的凭证，通常会在服务器返回 401 Unauthorized 状态码以及 WWW-Authenticate 消息头之后在后续请求中发送此消息头。 axios 库也允许你在请求配置中配置 auth 属性，auth 是一个对象结构，包含 username 和 password 2 个属性。一旦用户在请求的时候配置这俩属性，我们就会自动往 HTTP 的 请求 header 中添加 Authorization 属性，它的值为 Basic 加密串。 这里的加密串是 username:password base64 加密后的结果。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ts_axios/chapter10/auth.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"HTTP 授权"}],["meta",{"property":"og:description","content":"需求分析 HTTP 协议中的 Authorization 请求 header 会包含服务器用于验证用户代理身份的凭证，通常会在服务器返回 401 Unauthorized 状态码以及 WWW-Authenticate 消息头之后在后续请求中发送此消息头。 axios 库也允许你在请求配置中配置 auth 属性，auth 是一个对象结构，包含 username 和 password 2 个属性。一旦用户在请求的时候配置这俩属性，我们就会自动往 HTTP 的 请求 header 中添加 Authorization 属性，它的值为 Basic 加密串。 这里的加密串是 username:password base64 加密后的结果。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"HTTP 授权\\",\\"description\\":\\"需求分析 HTTP 协议中的 Authorization 请求 header 会包含服务器用于验证用户代理身份的凭证，通常会在服务器返回 401 Unauthorized 状态码以及 WWW-Authenticate 消息头之后在后续请求中发送此消息头。 axios 库也允许你在请求配置中配置 auth 属性，auth 是一个对象结构，包含 username 和 password 2 个属性。一旦用户在请求的时候配置这俩属性，我们就会自动往 HTTP 的 请求 header 中添加 Authorization 属性，它的值为 Basic 加密串。 这里的加密串是 username:password base64 加密后的结果。\\"}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.51,"words":453},"filePathRelative":"technology/ts_axios/chapter10/auth.md","localizedDate":"2023年1月11日","excerpt":"<h2> 需求分析</h2>\\n<p>HTTP 协议中的 <a href=\\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Authorization</a> 请求 header 会包含服务器用于验证用户代理身份的凭证，通常会在服务器返回 401 Unauthorized 状态码以及 WWW-Authenticate 消息头之后在后续请求中发送此消息头。</p>\\n<p>axios 库也允许你在请求配置中配置 <code>auth</code> 属性，<code>auth</code> 是一个对象结构，包含 <code>username</code> 和 <code>password</code> 2 个属性。一旦用户在请求的时候配置这俩属性，我们就会自动往 HTTP 的 请求 header 中添加 <code>Authorization</code> 属性，它的值为 <code>Basic 加密串</code>。\\n这里的加密串是 <code>username:password</code> base64 加密后的结果。</p>","autoDesc":true}`);export{e as data};
