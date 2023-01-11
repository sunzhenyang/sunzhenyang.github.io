const e=JSON.parse(`{"key":"v-a124eeb6","path":"/technology/javascript/bom/cors.html","title":"CORS 通信","lang":"zh-CN","frontmatter":{"title":"CORS 通信","icon":"article","category":["javascript"],"article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"CORS 是一个 W3C 标准，全称是“跨域资源共享”（Cross-origin resource sharing）。它允许浏览器向跨域的服务器，发出XMLHttpRequest请求，从而克服了 AJAX 只能同源使用的限制。 简介 CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。 整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨域通信。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/bom/cors.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"CORS 通信"}],["meta",{"property":"og:description","content":"CORS 是一个 W3C 标准，全称是“跨域资源共享”（Cross-origin resource sharing）。它允许浏览器向跨域的服务器，发出XMLHttpRequest请求，从而克服了 AJAX 只能同源使用的限制。 简介 CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。 整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨域通信。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"CORS 通信\\",\\"description\\":\\"CORS 是一个 W3C 标准，全称是“跨域资源共享”（Cross-origin resource sharing）。它允许浏览器向跨域的服务器，发出XMLHttpRequest请求，从而克服了 AJAX 只能同源使用的限制。 简介 CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。 整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨域通信。\\"}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"两种请求","slug":"两种请求","link":"#两种请求","children":[]},{"level":2,"title":"简单请求","slug":"简单请求","link":"#简单请求","children":[{"level":3,"title":"基本流程","slug":"基本流程","link":"#基本流程","children":[]},{"level":3,"title":"withCredentials 属性","slug":"withcredentials-属性","link":"#withcredentials-属性","children":[]}]},{"level":2,"title":"非简单请求","slug":"非简单请求","link":"#非简单请求","children":[{"level":3,"title":"预检请求","slug":"预检请求","link":"#预检请求","children":[]},{"level":3,"title":"预检请求的回应","slug":"预检请求的回应","link":"#预检请求的回应","children":[]},{"level":3,"title":"浏览器的正常请求和回应","slug":"浏览器的正常请求和回应","link":"#浏览器的正常请求和回应","children":[]}]},{"level":2,"title":"与 JSONP 的比较","slug":"与-jsonp-的比较","link":"#与-jsonp-的比较","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":9.34,"words":2802},"filePathRelative":"technology/javascript/bom/cors.md","localizedDate":"2023年1月11日","excerpt":"<p>CORS 是一个 W3C 标准，全称是“跨域资源共享”（Cross-origin resource sharing）。它允许浏览器向跨域的服务器，发出<code>XMLHttpRequest</code>请求，从而克服了 AJAX 只能同源使用的限制。</p>\\n<h2> 简介</h2>\\n<p>CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。</p>\\n<p>整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨域通信。</p>","autoDesc":true}`);export{e as data};
