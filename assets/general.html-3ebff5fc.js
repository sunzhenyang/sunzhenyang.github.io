const t=JSON.parse(`{"key":"v-3b17d1bc","path":"/technology/javascript/async/general.html","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"单线程模型 单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。 注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。 JavaScript 之所以采用单线程，而不是多线程，跟历史有关系。JavaScript 从诞生起就是单线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。如果 JavaScript 同时有两个线程，一个线程在网页 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？是不是还要有锁机制？所以，为了避免复杂性，JavaScript 一开始就是单线程，这已经成了这门语言的核心特征，将来也不会改变。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/async/general.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"单线程模型 单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。 注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。 JavaScript 之所以采用单线程，而不是多线程，跟历史有关系。JavaScript 从诞生起就是单线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。如果 JavaScript 同时有两个线程，一个线程在网页 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？是不是还要有锁机制？所以，为了避免复杂性，JavaScript 一开始就是单线程，这已经成了这门语言的核心特征，将来也不会改变。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"概述\\",\\"description\\":\\"单线程模型 单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。 注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。 JavaScript 之所以采用单线程，而不是多线程，跟历史有关系。JavaScript 从诞生起就是单线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。如果 JavaScript 同时有两个线程，一个线程在网页 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？是不是还要有锁机制？所以，为了避免复杂性，JavaScript 一开始就是单线程，这已经成了这门语言的核心特征，将来也不会改变。\\"}"]]},"headers":[{"level":2,"title":"单线程模型","slug":"单线程模型","link":"#单线程模型","children":[]},{"level":2,"title":"同步任务和异步任务","slug":"同步任务和异步任务","link":"#同步任务和异步任务","children":[]},{"level":2,"title":"任务队列和事件循环","slug":"任务队列和事件循环","link":"#任务队列和事件循环","children":[]},{"level":2,"title":"异步操作的模式","slug":"异步操作的模式","link":"#异步操作的模式","children":[{"level":3,"title":"回调函数","slug":"回调函数","link":"#回调函数","children":[]},{"level":3,"title":"事件监听","slug":"事件监听","link":"#事件监听","children":[]},{"level":3,"title":"发布/订阅","slug":"发布-订阅","link":"#发布-订阅","children":[]}]},{"level":2,"title":"异步操作的流程控制","slug":"异步操作的流程控制","link":"#异步操作的流程控制","children":[{"level":3,"title":"串行执行","slug":"串行执行","link":"#串行执行","children":[]},{"level":3,"title":"并行执行","slug":"并行执行","link":"#并行执行","children":[]},{"level":3,"title":"并行与串行的结合","slug":"并行与串行的结合","link":"#并行与串行的结合","children":[]}]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":11.09,"words":3326},"filePathRelative":"technology/javascript/async/general.md","localizedDate":"2023年1月11日","excerpt":"<h2> 单线程模型</h2>\\n<p>单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。</p>\\n<p>注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。</p>\\n<p>JavaScript 之所以采用单线程，而不是多线程，跟历史有关系。JavaScript 从诞生起就是单线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。如果 JavaScript 同时有两个线程，一个线程在网页 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？是不是还要有锁机制？所以，为了避免复杂性，JavaScript 一开始就是单线程，这已经成了这门语言的核心特征，将来也不会改变。</p>","autoDesc":true}`);export{t as data};
