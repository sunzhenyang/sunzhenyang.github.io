const e=JSON.parse(`{"key":"v-ce3bbc20","path":"/technology/javascript/events/common.html","title":"其他常见事件","lang":"zh-CN","frontmatter":{"title":"其他常见事件","icon":"article","category":["javascript"],"article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"资源事件 beforeunload 事件 beforeunload事件在窗口、文档、各种资源将要卸载前触发。它可以用来防止用户不小心卸载资源。 如果该事件对象的returnValue属性是一个非空字符串，那么浏览器就会弹出一个对话框，询问用户是否要卸载该资源。但是，用户指定的字符串可能无法显示，浏览器会展示预定义的字符串。如果用户点击“取消”按钮，资源就不会卸载。 window.addEventListener('beforeunload', function (event) { event.returnValue = '你确定离开吗？'; });","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/events/common.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"其他常见事件"}],["meta",{"property":"og:description","content":"资源事件 beforeunload 事件 beforeunload事件在窗口、文档、各种资源将要卸载前触发。它可以用来防止用户不小心卸载资源。 如果该事件对象的returnValue属性是一个非空字符串，那么浏览器就会弹出一个对话框，询问用户是否要卸载该资源。但是，用户指定的字符串可能无法显示，浏览器会展示预定义的字符串。如果用户点击“取消”按钮，资源就不会卸载。 window.addEventListener('beforeunload', function (event) { event.returnValue = '你确定离开吗？'; });"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"其他常见事件\\",\\"description\\":\\"资源事件 beforeunload 事件 beforeunload事件在窗口、文档、各种资源将要卸载前触发。它可以用来防止用户不小心卸载资源。 如果该事件对象的returnValue属性是一个非空字符串，那么浏览器就会弹出一个对话框，询问用户是否要卸载该资源。但是，用户指定的字符串可能无法显示，浏览器会展示预定义的字符串。如果用户点击“取消”按钮，资源就不会卸载。 window.addEventListener('beforeunload', function (event) { event.returnValue = '你确定离开吗？'; });\\"}"]]},"headers":[{"level":2,"title":"资源事件","slug":"资源事件","link":"#资源事件","children":[{"level":3,"title":"beforeunload 事件","slug":"beforeunload-事件","link":"#beforeunload-事件","children":[]},{"level":3,"title":"unload 事件","slug":"unload-事件","link":"#unload-事件","children":[]},{"level":3,"title":"load 事件，error 事件","slug":"load-事件-error-事件","link":"#load-事件-error-事件","children":[]}]},{"level":2,"title":"session 历史事件","slug":"session-历史事件","link":"#session-历史事件","children":[{"level":3,"title":"pageshow 事件，pagehide 事件","slug":"pageshow-事件-pagehide-事件","link":"#pageshow-事件-pagehide-事件","children":[]},{"level":3,"title":"popstate 事件","slug":"popstate-事件","link":"#popstate-事件","children":[]},{"level":3,"title":"hashchange 事件","slug":"hashchange-事件","link":"#hashchange-事件","children":[]}]},{"level":2,"title":"网页状态事件","slug":"网页状态事件","link":"#网页状态事件","children":[{"level":3,"title":"DOMContentLoaded 事件","slug":"domcontentloaded-事件","link":"#domcontentloaded-事件","children":[]},{"level":3,"title":"readystatechange 事件","slug":"readystatechange-事件","link":"#readystatechange-事件","children":[]}]},{"level":2,"title":"窗口事件","slug":"窗口事件","link":"#窗口事件","children":[{"level":3,"title":"scroll 事件","slug":"scroll-事件","link":"#scroll-事件","children":[]},{"level":3,"title":"resize 事件","slug":"resize-事件","link":"#resize-事件","children":[]},{"level":3,"title":"fullscreenchange 事件，fullscreenerror 事件","slug":"fullscreenchange-事件-fullscreenerror-事件","link":"#fullscreenchange-事件-fullscreenerror-事件","children":[]}]},{"level":2,"title":"剪贴板事件","slug":"剪贴板事件","link":"#剪贴板事件","children":[]},{"level":2,"title":"焦点事件","slug":"焦点事件","link":"#焦点事件","children":[]},{"level":2,"title":"CustomEvent 接口","slug":"customevent-接口","link":"#customevent-接口","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":12.26,"words":3677},"filePathRelative":"technology/javascript/events/common.md","localizedDate":"2023年1月11日","excerpt":"<h2> 资源事件</h2>\\n<h3> beforeunload 事件</h3>\\n<p><code>beforeunload</code>事件在窗口、文档、各种资源将要卸载前触发。它可以用来防止用户不小心卸载资源。</p>\\n<p>如果该事件对象的<code>returnValue</code>属性是一个非空字符串，那么浏览器就会弹出一个对话框，询问用户是否要卸载该资源。但是，用户指定的字符串可能无法显示，浏览器会展示预定义的字符串。如果用户点击“取消”按钮，资源就不会卸载。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>window<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addEventListener</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'beforeunload'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">event</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  event<span class=\\"token punctuation\\">.</span>returnValue <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'你确定离开吗？'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};