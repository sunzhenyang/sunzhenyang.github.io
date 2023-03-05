const e=JSON.parse(`{"key":"v-e17dc7fc","path":"/technology/javascript/bom/window.html","title":"window 对象","lang":"zh-CN","frontmatter":{"title":"window 对象","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"概述 浏览器里面，window对象（注意，w为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。 a = 1; window.a // 1","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/bom/window.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"window 对象"}],["meta",{"property":"og:description","content":"概述 浏览器里面，window对象（注意，w为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。 a = 1; window.a // 1"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"window 对象\\",\\"description\\":\\"概述 浏览器里面，window对象（注意，w为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。 a = 1; window.a // 1\\"}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"window 对象的属性","slug":"window-对象的属性","link":"#window-对象的属性","children":[{"level":3,"title":"window.name","slug":"window-name","link":"#window-name","children":[]},{"level":3,"title":"window.closed，window.opener","slug":"window-closed-window-opener","link":"#window-closed-window-opener","children":[]},{"level":3,"title":"window.self，window.window","slug":"window-self-window-window","link":"#window-self-window-window","children":[]},{"level":3,"title":"window.frames，window.length","slug":"window-frames-window-length","link":"#window-frames-window-length","children":[]},{"level":3,"title":"window.frameElement","slug":"window-frameelement","link":"#window-frameelement","children":[]},{"level":3,"title":"window.top，window.parent","slug":"window-top-window-parent","link":"#window-top-window-parent","children":[]},{"level":3,"title":"window.status","slug":"window-status","link":"#window-status","children":[]},{"level":3,"title":"window.devicePixelRatio","slug":"window-devicepixelratio","link":"#window-devicepixelratio","children":[]},{"level":3,"title":"位置大小属性","slug":"位置大小属性","link":"#位置大小属性","children":[]},{"level":3,"title":"组件属性","slug":"组件属性","link":"#组件属性","children":[]},{"level":3,"title":"全局对象属性","slug":"全局对象属性","link":"#全局对象属性","children":[]},{"level":3,"title":"window.isSecureContext","slug":"window-issecurecontext","link":"#window-issecurecontext","children":[]}]},{"level":2,"title":"window 对象的方法","slug":"window-对象的方法","link":"#window-对象的方法","children":[{"level":3,"title":"window.alert()，window.prompt()，window.confirm()","slug":"window-alert-window-prompt-window-confirm","link":"#window-alert-window-prompt-window-confirm","children":[]},{"level":3,"title":"window.open(), window.close()，window.stop()","slug":"window-open-window-close-window-stop","link":"#window-open-window-close-window-stop","children":[]},{"level":3,"title":"window.moveTo()，window.moveBy()","slug":"window-moveto-window-moveby","link":"#window-moveto-window-moveby","children":[]},{"level":3,"title":"window.resizeTo()，window.resizeBy()","slug":"window-resizeto-window-resizeby","link":"#window-resizeto-window-resizeby","children":[]},{"level":3,"title":"window.scrollTo()，window.scroll()，window.scrollBy()","slug":"window-scrollto-window-scroll-window-scrollby","link":"#window-scrollto-window-scroll-window-scrollby","children":[]},{"level":3,"title":"window.print()","slug":"window-print","link":"#window-print","children":[]},{"level":3,"title":"window.focus()，window.blur()","slug":"window-focus-window-blur","link":"#window-focus-window-blur","children":[]},{"level":3,"title":"window.getSelection()","slug":"window-getselection","link":"#window-getselection","children":[]},{"level":3,"title":"window.getComputedStyle()，window.matchMedia()","slug":"window-getcomputedstyle-window-matchmedia","link":"#window-getcomputedstyle-window-matchmedia","children":[]},{"level":3,"title":"window.requestAnimationFrame()","slug":"window-requestanimationframe","link":"#window-requestanimationframe","children":[]},{"level":3,"title":"window.requestIdleCallback()","slug":"window-requestidlecallback","link":"#window-requestidlecallback","children":[]}]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[{"level":3,"title":"load 事件和 onload 属性","slug":"load-事件和-onload-属性","link":"#load-事件和-onload-属性","children":[]},{"level":3,"title":"error 事件和 onerror 属性","slug":"error-事件和-onerror-属性","link":"#error-事件和-onerror-属性","children":[]},{"level":3,"title":"window 对象的事件监听属性","slug":"window-对象的事件监听属性","link":"#window-对象的事件监听属性","children":[]}]},{"level":2,"title":"多窗口操作","slug":"多窗口操作","link":"#多窗口操作","children":[{"level":3,"title":"窗口的引用","slug":"窗口的引用","link":"#窗口的引用","children":[]},{"level":3,"title":"iframe 元素","slug":"iframe-元素","link":"#iframe-元素","children":[]},{"level":3,"title":"window.frames 属性","slug":"window-frames-属性","link":"#window-frames-属性","children":[]}]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":26.08,"words":7824},"filePathRelative":"technology/javascript/bom/window.md","localizedDate":"2023年1月11日","excerpt":"<h2> 概述</h2>\\n<p>浏览器里面，<code>window</code>对象（注意，<code>w</code>为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\nwindow<span class=\\"token punctuation\\">.</span>a <span class=\\"token comment\\">// 1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
