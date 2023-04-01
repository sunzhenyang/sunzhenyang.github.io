const e=JSON.parse(`{"key":"v-6cc74cee","path":"/technology/webapi/page-lifecycle.html","title":"Page Lifecycle API","lang":"zh-CN","frontmatter":{"title":"Page Lifecycle API","icon":"article","category":"Web API","article":false,"tag":["Web API"],"copyright":"Copyright by 阮一峰","description":"Android、iOS 和最新的 Windows 系统可以随时自主地停止后台进程，及时释放系统资源。也就是说，网页可能随时被系统丢弃掉。以前的浏览器 API 完全没有考虑到这种情况，导致开发者根本没有办法监听到系统丢弃页面。 为了解决这个问题，W3C 新制定了一个 Page Lifecycle API，统一了网页从诞生到卸载的行为模式，并且定义了新的事件，允许开发者响应网页状态的各种转换。 有了这个 API，开发者就可以预测网页下一步的状态，从而进行各种针对性的处理。Chrome 68 支持这个 API，对于老式浏览器可以使用谷歌开发的兼容库 PageLifecycle.js。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/webapi/page-lifecycle.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Page Lifecycle API"}],["meta",{"property":"og:description","content":"Android、iOS 和最新的 Windows 系统可以随时自主地停止后台进程，及时释放系统资源。也就是说，网页可能随时被系统丢弃掉。以前的浏览器 API 完全没有考虑到这种情况，导致开发者根本没有办法监听到系统丢弃页面。 为了解决这个问题，W3C 新制定了一个 Page Lifecycle API，统一了网页从诞生到卸载的行为模式，并且定义了新的事件，允许开发者响应网页状态的各种转换。 有了这个 API，开发者就可以预测网页下一步的状态，从而进行各种针对性的处理。Chrome 68 支持这个 API，对于老式浏览器可以使用谷歌开发的兼容库 PageLifecycle.js。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"Web API"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Page Lifecycle API\\",\\"description\\":\\"Android、iOS 和最新的 Windows 系统可以随时自主地停止后台进程，及时释放系统资源。也就是说，网页可能随时被系统丢弃掉。以前的浏览器 API 完全没有考虑到这种情况，导致开发者根本没有办法监听到系统丢弃页面。 为了解决这个问题，W3C 新制定了一个 Page Lifecycle API，统一了网页从诞生到卸载的行为模式，并且定义了新的事件，允许开发者响应网页状态的各种转换。 有了这个 API，开发者就可以预测网页下一步的状态，从而进行各种针对性的处理。Chrome 68 支持这个 API，对于老式浏览器可以使用谷歌开发的兼容库 PageLifecycle.js。\\"}"]]},"headers":[{"level":2,"title":"生命周期阶段","slug":"生命周期阶段","link":"#生命周期阶段","children":[]},{"level":2,"title":"常见场景","slug":"常见场景","link":"#常见场景","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[{"level":3,"title":"focus 事件","slug":"focus-事件","link":"#focus-事件","children":[]},{"level":3,"title":"blur 事件","slug":"blur-事件","link":"#blur-事件","children":[]},{"level":3,"title":"visibilitychange 事件","slug":"visibilitychange-事件","link":"#visibilitychange-事件","children":[]},{"level":3,"title":"freeze 事件","slug":"freeze-事件","link":"#freeze-事件","children":[]},{"level":3,"title":"resume 事件","slug":"resume-事件","link":"#resume-事件","children":[]},{"level":3,"title":"pageshow 事件","slug":"pageshow-事件","link":"#pageshow-事件","children":[]},{"level":3,"title":"pagehide 事件","slug":"pagehide-事件","link":"#pagehide-事件","children":[]},{"level":3,"title":"beforeunload 事件","slug":"beforeunload-事件","link":"#beforeunload-事件","children":[]},{"level":3,"title":"unload 事件","slug":"unload-事件","link":"#unload-事件","children":[]}]},{"level":2,"title":"获取当前阶段","slug":"获取当前阶段","link":"#获取当前阶段","children":[]},{"level":2,"title":"document.wasDiscarded","slug":"document-wasdiscarded","link":"#document-wasdiscarded","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":7.23,"words":2170},"filePathRelative":"technology/webapi/page-lifecycle.md","localizedDate":"2023年1月11日","excerpt":"<p>Android、iOS 和最新的 Windows 系统可以随时自主地停止后台进程，及时释放系统资源。也就是说，网页可能随时被系统丢弃掉。以前的浏览器 API 完全没有考虑到这种情况，导致开发者根本没有办法监听到系统丢弃页面。</p>\\n<p>为了解决这个问题，W3C 新制定了一个 Page Lifecycle API，统一了网页从诞生到卸载的行为模式，并且定义了新的事件，允许开发者响应网页状态的各种转换。</p>\\n<p>有了这个 API，开发者就可以预测网页下一步的状态，从而进行各种针对性的处理。Chrome 68 支持这个 API，对于老式浏览器可以使用谷歌开发的兼容库 <a href=\\"https://github.com/GoogleChromeLabs/page-lifecycle\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PageLifecycle.js</a>。</p>","autoDesc":true}`);export{e as data};