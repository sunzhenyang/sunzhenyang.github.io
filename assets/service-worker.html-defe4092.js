const e=JSON.parse(`{"key":"v-6eb67978","path":"/technology/webapi/service-worker.html","title":"Service Worker","lang":"zh-CN","frontmatter":{"title":"Service Worker","icon":"article","category":["Web API"],"article":false,"tag":["Web API"],"copyright":"Copyright by 阮一峰","description":"含义 Service Worker 首先是一个运行在后台的 Worker 线程，然后它会长期运行，充当一个服务，很适合那些不需要网页或用户互动的功能。它的最常见用途就是拦截和处理网络请求。 Service Worker 是一个后台运行的脚本，充当一个代理服务器，拦截用户发出的网络请求，比如加载脚本和图片。Service Worker 可以修改用户的请求，或者直接向用户发出回应，不用联系服务器，这使得用户可以在离线情况下使用网络应用。它还可以在本地缓存资源文件，直接从缓存加载文件，因此可以加快访问速度。 if ('serviceWorker' in navigator) { window.addEventListener('load', function() { navigator.serviceWorker.register('/service-worker.js'); }); }","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/webapi/service-worker.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Service Worker"}],["meta",{"property":"og:description","content":"含义 Service Worker 首先是一个运行在后台的 Worker 线程，然后它会长期运行，充当一个服务，很适合那些不需要网页或用户互动的功能。它的最常见用途就是拦截和处理网络请求。 Service Worker 是一个后台运行的脚本，充当一个代理服务器，拦截用户发出的网络请求，比如加载脚本和图片。Service Worker 可以修改用户的请求，或者直接向用户发出回应，不用联系服务器，这使得用户可以在离线情况下使用网络应用。它还可以在本地缓存资源文件，直接从缓存加载文件，因此可以加快访问速度。 if ('serviceWorker' in navigator) { window.addEventListener('load', function() { navigator.serviceWorker.register('/service-worker.js'); }); }"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"Web API"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Service Worker\\",\\"description\\":\\"含义 Service Worker 首先是一个运行在后台的 Worker 线程，然后它会长期运行，充当一个服务，很适合那些不需要网页或用户互动的功能。它的最常见用途就是拦截和处理网络请求。 Service Worker 是一个后台运行的脚本，充当一个代理服务器，拦截用户发出的网络请求，比如加载脚本和图片。Service Worker 可以修改用户的请求，或者直接向用户发出回应，不用联系服务器，这使得用户可以在离线情况下使用网络应用。它还可以在本地缓存资源文件，直接从缓存加载文件，因此可以加快访问速度。 if ('serviceWorker' in navigator) { window.addEventListener('load', function() { navigator.serviceWorker.register('/service-worker.js'); }); }\\"}"]]},"headers":[{"level":2,"title":"含义","slug":"含义","link":"#含义","children":[]},{"level":2,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[{"level":3,"title":"登记","slug":"登记","link":"#登记","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"激活","slug":"激活","link":"#激活","children":[]}]},{"level":2,"title":"Service Worker 与网页的通信","slug":"service-worker-与网页的通信","link":"#service-worker-与网页的通信","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":2.47,"words":741},"filePathRelative":"technology/webapi/service-worker.md","localizedDate":"2023年1月11日","excerpt":"<h2> 含义</h2>\\n<p>Service Worker 首先是一个运行在后台的 Worker 线程，然后它会长期运行，充当一个服务，很适合那些不需要网页或用户互动的功能。它的最常见用途就是拦截和处理网络请求。</p>\\n<p>Service Worker 是一个后台运行的脚本，充当一个代理服务器，拦截用户发出的网络请求，比如加载脚本和图片。Service Worker 可以修改用户的请求，或者直接向用户发出回应，不用联系服务器，这使得用户可以在离线情况下使用网络应用。它还可以在本地缓存资源文件，直接从缓存加载文件，因此可以加快访问速度。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'serviceWorker'</span> <span class=\\"token keyword\\">in</span> navigator<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  window<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addEventListener</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'load'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    navigator<span class=\\"token punctuation\\">.</span>serviceWorker<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">register</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/service-worker.js'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
