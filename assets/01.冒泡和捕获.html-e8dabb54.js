const e=JSON.parse(`{"key":"v-74bd5c0c","path":"/notes/javascript/web-api/event/01.%E5%86%92%E6%B3%A1%E5%92%8C%E6%8D%95%E8%8E%B7.html","title":"冒泡和捕获","lang":"zh-CN","frontmatter":{"title":"冒泡和捕获","icon":"article","article":false,"sticky":20,"breadcrumb":false,"description":"事件处理阶段 event.eventPhase 可以获取事件的阶段数（capturing=1，target=2，bubbling=3） 1. 捕获阶段：通过祖先链（从 Window 开始）向下到达元素 2. 目标阶段：事件到达目标元素 3. 冒泡阶段：事件从元素上开始冒泡，在途中调用处理程序 冒泡（bubbling） 当一个事件发生在一个元素上，会首先...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/notes/javascript/web-api/event/01.%E5%86%92%E6%B3%A1%E5%92%8C%E6%8D%95%E8%8E%B7.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"冒泡和捕获"}],["meta",{"property":"og:description","content":"事件处理阶段 event.eventPhase 可以获取事件的阶段数（capturing=1，target=2，bubbling=3） 1. 捕获阶段：通过祖先链（从 Window 开始）向下到达元素 2. 目标阶段：事件到达目标元素 3. 冒泡阶段：事件从元素上开始冒泡，在途中调用处理程序 冒泡（bubbling） 当一个事件发生在一个元素上，会首先..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"冒泡和捕获\\",\\"description\\":\\"事件处理阶段 event.eventPhase 可以获取事件的阶段数（capturing=1，target=2，bubbling=3） 1. 捕获阶段：通过祖先链（从 Window 开始）向下到达元素 2. 目标阶段：事件到达目标元素 3. 冒泡阶段：事件从元素上开始冒泡，在途中调用处理程序 冒泡（bubbling） 当一个事件发生在一个元素上，会首先...\\"}"]]},"headers":[{"level":2,"title":"事件处理阶段","slug":"事件处理阶段","link":"#事件处理阶段","children":[]},{"level":2,"title":"冒泡（bubbling）","slug":"冒泡-bubbling","link":"#冒泡-bubbling","children":[{"level":3,"title":"event.target","slug":"event-target","link":"#event-target","children":[]}]},{"level":2,"title":"停止冒泡","slug":"停止冒泡","link":"#停止冒泡","children":[{"level":3,"title":"event.stopPropagation()","slug":"event-stoppropagation","link":"#event-stoppropagation","children":[]},{"level":3,"title":"event.stopImmediatePropagation()","slug":"event-stopimmediatepropagation","link":"#event-stopimmediatepropagation","children":[]}]},{"level":2,"title":"捕获（capturing）","slug":"捕获-capturing","link":"#捕获-capturing","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.48,"words":444},"filePathRelative":"notes/javascript/web-api/event/01.冒泡和捕获.md","localizedDate":"2023年1月11日","excerpt":"","autoDesc":true}`);export{e as data};
