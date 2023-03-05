const e=JSON.parse(`{"key":"v-1b1e091d","path":"/technology/javascript/bom/location.html","title":"Location 对象，URL 对象，URLSearchParams 对象","lang":"zh-CN","frontmatter":{"title":"Location 对象，URL 对象，URLSearchParams 对象","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"URL 是互联网的基础设施之一。浏览器提供了一些原生对象，用来管理 URL。 Location 对象 Location对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。通过window.location和document.location属性，可以拿到这个对象。 属性 Location对象提供以下属性。 Location.href：整个 URL。 Location.protocol：当前 URL 的协议，包括冒号（:）。 Location.host：主机。如果端口不是协议默认的80和433，则还会包括冒号（:）和端口。 Location.hostname：主机名，不包括端口。 Location.port：端口号。 Location.pathname：URL 的路径部分，从根路径/开始。 Location.search：查询字符串部分，从问号?开始。 Location.hash：片段字符串部分，从#开始。 Location.username：域名前面的用户名。 Location.password：域名前面的密码。 Location.origin：URL 的协议、主机名和端口。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/bom/location.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Location 对象，URL 对象，URLSearchParams 对象"}],["meta",{"property":"og:description","content":"URL 是互联网的基础设施之一。浏览器提供了一些原生对象，用来管理 URL。 Location 对象 Location对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。通过window.location和document.location属性，可以拿到这个对象。 属性 Location对象提供以下属性。 Location.href：整个 URL。 Location.protocol：当前 URL 的协议，包括冒号（:）。 Location.host：主机。如果端口不是协议默认的80和433，则还会包括冒号（:）和端口。 Location.hostname：主机名，不包括端口。 Location.port：端口号。 Location.pathname：URL 的路径部分，从根路径/开始。 Location.search：查询字符串部分，从问号?开始。 Location.hash：片段字符串部分，从#开始。 Location.username：域名前面的用户名。 Location.password：域名前面的密码。 Location.origin：URL 的协议、主机名和端口。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Location 对象，URL 对象，URLSearchParams 对象\\",\\"description\\":\\"URL 是互联网的基础设施之一。浏览器提供了一些原生对象，用来管理 URL。 Location 对象 Location对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。通过window.location和document.location属性，可以拿到这个对象。 属性 Location对象提供以下属性。 Location.href：整个 URL。 Location.protocol：当前 URL 的协议，包括冒号（:）。 Location.host：主机。如果端口不是协议默认的80和433，则还会包括冒号（:）和端口。 Location.hostname：主机名，不包括端口。 Location.port：端口号。 Location.pathname：URL 的路径部分，从根路径/开始。 Location.search：查询字符串部分，从问号?开始。 Location.hash：片段字符串部分，从#开始。 Location.username：域名前面的用户名。 Location.password：域名前面的密码。 Location.origin：URL 的协议、主机名和端口。\\"}"]]},"headers":[{"level":2,"title":"Location 对象","slug":"location-对象","link":"#location-对象","children":[{"level":3,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[]}]},{"level":2,"title":"URL 的编码和解码","slug":"url-的编码和解码","link":"#url-的编码和解码","children":[{"level":3,"title":"encodeURI()","slug":"encodeuri","link":"#encodeuri","children":[]},{"level":3,"title":"encodeURIComponent()","slug":"encodeuricomponent","link":"#encodeuricomponent","children":[]},{"level":3,"title":"decodeURI()","slug":"decodeuri","link":"#decodeuri","children":[]},{"level":3,"title":"decodeURIComponent()","slug":"decodeuricomponent","link":"#decodeuricomponent","children":[]}]},{"level":2,"title":"URL 接口","slug":"url-接口","link":"#url-接口","children":[{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"实例属性","slug":"实例属性","link":"#实例属性","children":[]},{"level":3,"title":"静态方法","slug":"静态方法","link":"#静态方法","children":[]}]},{"level":2,"title":"URLSearchParams 对象","slug":"urlsearchparams-对象","link":"#urlsearchparams-对象","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"URLSearchParams.toString()","slug":"urlsearchparams-tostring","link":"#urlsearchparams-tostring","children":[]},{"level":3,"title":"URLSearchParams.append()","slug":"urlsearchparams-append","link":"#urlsearchparams-append","children":[]},{"level":3,"title":"URLSearchParams.delete()","slug":"urlsearchparams-delete","link":"#urlsearchparams-delete","children":[]},{"level":3,"title":"URLSearchParams.has()","slug":"urlsearchparams-has","link":"#urlsearchparams-has","children":[]},{"level":3,"title":"URLSearchParams.set()","slug":"urlsearchparams-set","link":"#urlsearchparams-set","children":[]},{"level":3,"title":"URLSearchParams.get()，URLSearchParams.getAll()","slug":"urlsearchparams-get-urlsearchparams-getall","link":"#urlsearchparams-get-urlsearchparams-getall","children":[]},{"level":3,"title":"URLSearchParams.sort()","slug":"urlsearchparams-sort","link":"#urlsearchparams-sort","children":[]},{"level":3,"title":"URLSearchParams.keys()，URLSearchParams.values()，URLSearchParams.entries()","slug":"urlsearchparams-keys-urlsearchparams-values-urlsearchparams-entries","link":"#urlsearchparams-keys-urlsearchparams-values-urlsearchparams-entries","children":[]}]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":12.49,"words":3748},"filePathRelative":"technology/javascript/bom/location.md","localizedDate":"2023年1月11日","excerpt":"<p>URL 是互联网的基础设施之一。浏览器提供了一些原生对象，用来管理 URL。</p>\\n<h2> Location 对象</h2>\\n<p><code>Location</code>对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。通过<code>window.location</code>和<code>document.location</code>属性，可以拿到这个对象。</p>\\n<h3> 属性</h3>\\n<p><code>Location</code>对象提供以下属性。</p>\\n<ul>\\n<li><code>Location.href</code>：整个 URL。</li>\\n<li><code>Location.protocol</code>：当前 URL 的协议，包括冒号（<code>:</code>）。</li>\\n<li><code>Location.host</code>：主机。如果端口不是协议默认的<code>80</code>和<code>433</code>，则还会包括冒号（<code>:</code>）和端口。</li>\\n<li><code>Location.hostname</code>：主机名，不包括端口。</li>\\n<li><code>Location.port</code>：端口号。</li>\\n<li><code>Location.pathname</code>：URL 的路径部分，从根路径<code>/</code>开始。</li>\\n<li><code>Location.search</code>：查询字符串部分，从问号<code>?</code>开始。</li>\\n<li><code>Location.hash</code>：片段字符串部分，从<code>#</code>开始。</li>\\n<li><code>Location.username</code>：域名前面的用户名。</li>\\n<li><code>Location.password</code>：域名前面的密码。</li>\\n<li><code>Location.origin</code>：URL 的协议、主机名和端口。</li>\\n</ul>","autoDesc":true}`);export{e as data};
