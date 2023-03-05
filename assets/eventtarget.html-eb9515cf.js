const e=JSON.parse(`{"key":"v-3d21bfa8","path":"/technology/javascript/events/eventtarget.html","title":"EventTarget 接口","lang":"zh-CN","frontmatter":{"title":"EventTarget 接口","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。 介绍具体的事件之前，先来看看如何让 DOM 节点监听事件。 概述 DOM 节点的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/events/eventtarget.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"EventTarget 接口"}],["meta",{"property":"og:description","content":"事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。 介绍具体的事件之前，先来看看如何让 DOM 节点监听事件。 概述 DOM 节点的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"EventTarget 接口\\",\\"description\\":\\"事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。 介绍具体的事件之前，先来看看如何让 DOM 节点监听事件。 概述 DOM 节点的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。\\"}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"EventTarget.addEventListener()","slug":"eventtarget-addeventlistener","link":"#eventtarget-addeventlistener","children":[]},{"level":2,"title":"EventTarget.removeEventListener()","slug":"eventtarget-removeeventlistener","link":"#eventtarget-removeeventlistener","children":[]},{"level":2,"title":"EventTarget.dispatchEvent()","slug":"eventtarget-dispatchevent","link":"#eventtarget-dispatchevent","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":4.63,"words":1388},"filePathRelative":"technology/javascript/events/eventtarget.md","localizedDate":"2023年1月11日","excerpt":"<p>事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。</p>\\n<p>介绍具体的事件之前，先来看看如何让 DOM 节点监听事件。</p>\\n<h2> 概述</h2>\\n<p>DOM 节点的事件操作（监听和触发），都定义在<code>EventTarget</code>接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，<code>XMLHttpRequest</code>、<code>AudioNode</code>、<code>AudioContext</code>）也部署了这个接口。</p>","autoDesc":true}`);export{e as data};
