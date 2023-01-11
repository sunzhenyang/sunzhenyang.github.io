const e=JSON.parse(`{"key":"v-b4a580b0","path":"/technology/webapi/page-visibility.html","title":"Page Visibility API","lang":"zh-CN","frontmatter":{"title":"Page Visibility API","icon":"article","category":["Web API"],"article":false,"tag":["Web API"],"copyright":"Copyright by 阮一峰","description":"简介 有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件。 pagehide beforeunload unload 但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。 用户点击了一条系统通知，切换到另一个 App。 用户进入任务切换窗口，切换到另一个 App。 用户点击了 Home 按钮，切换回主屏幕。 操作系统自动切换到另一个 App（比如，收到一个电话）。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/webapi/page-visibility.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Page Visibility API"}],["meta",{"property":"og:description","content":"简介 有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件。 pagehide beforeunload unload 但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。 用户点击了一条系统通知，切换到另一个 App。 用户进入任务切换窗口，切换到另一个 App。 用户点击了 Home 按钮，切换回主屏幕。 操作系统自动切换到另一个 App（比如，收到一个电话）。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"Web API"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Page Visibility API\\",\\"description\\":\\"简介 有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件。 pagehide beforeunload unload 但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。 用户点击了一条系统通知，切换到另一个 App。 用户进入任务切换窗口，切换到另一个 App。 用户点击了 Home 按钮，切换回主屏幕。 操作系统自动切换到另一个 App（比如，收到一个电话）。\\"}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"document.visibilityState","slug":"document-visibilitystate","link":"#document-visibilitystate","children":[]},{"level":2,"title":"document.hidden","slug":"document-hidden","link":"#document-hidden","children":[]},{"level":2,"title":"visibilitychange 事件","slug":"visibilitychange-事件","link":"#visibilitychange-事件","children":[]},{"level":2,"title":"页面卸载","slug":"页面卸载","link":"#页面卸载","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":4.9,"words":1471},"filePathRelative":"technology/webapi/page-visibility.md","localizedDate":"2023年1月11日","excerpt":"<h2> 简介</h2>\\n<p>有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件。</p>\\n<blockquote>\\n<ul>\\n<li><code>pagehide</code></li>\\n<li><code>beforeunload</code></li>\\n<li><code>unload</code></li>\\n</ul>\\n</blockquote>\\n<p>但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。</p>\\n<blockquote>\\n<ul>\\n<li>用户点击了一条系统通知，切换到另一个 App。</li>\\n<li>用户进入任务切换窗口，切换到另一个 App。</li>\\n<li>用户点击了 Home 按钮，切换回主屏幕。</li>\\n<li>操作系统自动切换到另一个 App（比如，收到一个电话）。</li>\\n</ul>\\n</blockquote>","autoDesc":true}`);export{e as data};