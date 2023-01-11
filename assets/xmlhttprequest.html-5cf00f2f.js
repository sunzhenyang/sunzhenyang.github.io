const e=JSON.parse(`{"key":"v-375d333c","path":"/technology/javascript/bom/xmlhttprequest.html","title":"XMLHttpRequest 对象","lang":"zh-CN","frontmatter":{"title":"XMLHttpRequest 对象","icon":"article","category":["javascript"],"article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"简介 浏览器与服务器之间，采用 HTTP 协议通信。用户在浏览器地址栏键入一个网址，或者通过网页表单向服务器提交内容，这时浏览器就会向服务器发出 HTTP 请求。 1999年，微软公司发布 IE 浏览器5.0版，第一次引入新功能：允许 JavaScript 脚本向服务器发起 HTTP 请求。这个功能当时并没有引起注意，直到2004年 Gmail 发布和2005年 Google Map 发布，才引起广泛重视。2005年2月，AJAX 这个词第一次正式提出，它是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。后来，AJAX 这个词就成为 JavaScript 脚本发起 HTTP 通信的代名词，也就是说，只要用脚本发起通信，就可以叫做 AJAX 通信。W3C 也在2006年发布了它的国际标准。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/bom/xmlhttprequest.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"XMLHttpRequest 对象"}],["meta",{"property":"og:description","content":"简介 浏览器与服务器之间，采用 HTTP 协议通信。用户在浏览器地址栏键入一个网址，或者通过网页表单向服务器提交内容，这时浏览器就会向服务器发出 HTTP 请求。 1999年，微软公司发布 IE 浏览器5.0版，第一次引入新功能：允许 JavaScript 脚本向服务器发起 HTTP 请求。这个功能当时并没有引起注意，直到2004年 Gmail 发布和2005年 Google Map 发布，才引起广泛重视。2005年2月，AJAX 这个词第一次正式提出，它是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。后来，AJAX 这个词就成为 JavaScript 脚本发起 HTTP 通信的代名词，也就是说，只要用脚本发起通信，就可以叫做 AJAX 通信。W3C 也在2006年发布了它的国际标准。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"XMLHttpRequest 对象\\",\\"description\\":\\"简介 浏览器与服务器之间，采用 HTTP 协议通信。用户在浏览器地址栏键入一个网址，或者通过网页表单向服务器提交内容，这时浏览器就会向服务器发出 HTTP 请求。 1999年，微软公司发布 IE 浏览器5.0版，第一次引入新功能：允许 JavaScript 脚本向服务器发起 HTTP 请求。这个功能当时并没有引起注意，直到2004年 Gmail 发布和2005年 Google Map 发布，才引起广泛重视。2005年2月，AJAX 这个词第一次正式提出，它是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。后来，AJAX 这个词就成为 JavaScript 脚本发起 HTTP 通信的代名词，也就是说，只要用脚本发起通信，就可以叫做 AJAX 通信。W3C 也在2006年发布了它的国际标准。\\"}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"XMLHttpRequest 的实例属性","slug":"xmlhttprequest-的实例属性","link":"#xmlhttprequest-的实例属性","children":[{"level":3,"title":"XMLHttpRequest.readyState","slug":"xmlhttprequest-readystate","link":"#xmlhttprequest-readystate","children":[]},{"level":3,"title":"XMLHttpRequest.onreadystatechange","slug":"xmlhttprequest-onreadystatechange","link":"#xmlhttprequest-onreadystatechange","children":[]},{"level":3,"title":"XMLHttpRequest.response","slug":"xmlhttprequest-response","link":"#xmlhttprequest-response","children":[]},{"level":3,"title":"XMLHttpRequest.responseType","slug":"xmlhttprequest-responsetype","link":"#xmlhttprequest-responsetype","children":[]},{"level":3,"title":"XMLHttpRequest.responseText","slug":"xmlhttprequest-responsetext","link":"#xmlhttprequest-responsetext","children":[]},{"level":3,"title":"XMLHttpRequest.responseXML","slug":"xmlhttprequest-responsexml","link":"#xmlhttprequest-responsexml","children":[]},{"level":3,"title":"XMLHttpRequest.responseURL","slug":"xmlhttprequest-responseurl","link":"#xmlhttprequest-responseurl","children":[]},{"level":3,"title":"XMLHttpRequest.status，XMLHttpRequest.statusText","slug":"xmlhttprequest-status-xmlhttprequest-statustext","link":"#xmlhttprequest-status-xmlhttprequest-statustext","children":[]},{"level":3,"title":"XMLHttpRequest.timeout，XMLHttpRequestEventTarget.ontimeout","slug":"xmlhttprequest-timeout-xmlhttprequesteventtarget-ontimeout","link":"#xmlhttprequest-timeout-xmlhttprequesteventtarget-ontimeout","children":[]},{"level":3,"title":"事件监听属性","slug":"事件监听属性","link":"#事件监听属性","children":[]},{"level":3,"title":"XMLHttpRequest.withCredentials","slug":"xmlhttprequest-withcredentials","link":"#xmlhttprequest-withcredentials","children":[]},{"level":3,"title":"XMLHttpRequest.upload","slug":"xmlhttprequest-upload","link":"#xmlhttprequest-upload","children":[]}]},{"level":2,"title":"XMLHttpRequest 的实例方法","slug":"xmlhttprequest-的实例方法","link":"#xmlhttprequest-的实例方法","children":[{"level":3,"title":"XMLHttpRequest.open()","slug":"xmlhttprequest-open","link":"#xmlhttprequest-open","children":[]},{"level":3,"title":"XMLHttpRequest.send()","slug":"xmlhttprequest-send","link":"#xmlhttprequest-send","children":[]},{"level":3,"title":"XMLHttpRequest.setRequestHeader()","slug":"xmlhttprequest-setrequestheader","link":"#xmlhttprequest-setrequestheader","children":[]},{"level":3,"title":"XMLHttpRequest.overrideMimeType()","slug":"xmlhttprequest-overridemimetype","link":"#xmlhttprequest-overridemimetype","children":[]},{"level":3,"title":"XMLHttpRequest.getResponseHeader()","slug":"xmlhttprequest-getresponseheader","link":"#xmlhttprequest-getresponseheader","children":[]},{"level":3,"title":"XMLHttpRequest.getAllResponseHeaders()","slug":"xmlhttprequest-getallresponseheaders","link":"#xmlhttprequest-getallresponseheaders","children":[]},{"level":3,"title":"XMLHttpRequest.abort()","slug":"xmlhttprequest-abort","link":"#xmlhttprequest-abort","children":[]}]},{"level":2,"title":"XMLHttpRequest 实例的事件","slug":"xmlhttprequest-实例的事件","link":"#xmlhttprequest-实例的事件","children":[{"level":3,"title":"readyStateChange 事件","slug":"readystatechange-事件","link":"#readystatechange-事件","children":[]},{"level":3,"title":"progress 事件","slug":"progress-事件","link":"#progress-事件","children":[]},{"level":3,"title":"load 事件、error 事件、abort 事件","slug":"load-事件、error-事件、abort-事件","link":"#load-事件、error-事件、abort-事件","children":[]},{"level":3,"title":"loadend 事件","slug":"loadend-事件","link":"#loadend-事件","children":[]},{"level":3,"title":"timeout 事件","slug":"timeout-事件","link":"#timeout-事件","children":[]}]},{"level":2,"title":"Navigator.sendBeacon()","slug":"navigator-sendbeacon","link":"#navigator-sendbeacon","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":20.71,"words":6213},"filePathRelative":"technology/javascript/bom/xmlhttprequest.md","localizedDate":"2023年1月11日","excerpt":"<h2> 简介</h2>\\n<p>浏览器与服务器之间，采用 HTTP 协议通信。用户在浏览器地址栏键入一个网址，或者通过网页表单向服务器提交内容，这时浏览器就会向服务器发出 HTTP 请求。</p>\\n<p>1999年，微软公司发布 IE 浏览器5.0版，第一次引入新功能：允许 JavaScript 脚本向服务器发起 HTTP 请求。这个功能当时并没有引起注意，直到2004年 Gmail 发布和2005年 Google Map 发布，才引起广泛重视。2005年2月，AJAX 这个词第一次正式提出，它是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。后来，AJAX 这个词就成为 JavaScript 脚本发起 HTTP 通信的代名词，也就是说，只要用脚本发起通信，就可以叫做 AJAX 通信。W3C 也在2006年发布了它的国际标准。</p>","autoDesc":true}`);export{e as data};
