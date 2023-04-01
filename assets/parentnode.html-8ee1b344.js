const e=JSON.parse(`{"key":"v-fc592a70","path":"/technology/javascript/dom/parentnode.html","title":"ParentNode 接口，ChildNode 接口","lang":"zh-CN","frontmatter":{"title":"ParentNode 接口，ChildNode 接口","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"节点对象除了继承 Node 接口以外，还拥有其他接口。ParentNode接口表示当前节点是一个父节点，提供一些处理子节点的方法。ChildNode接口表示当前节点是一个子节点，提供一些相关方法。 ParentNode 接口 如果当前节点是父节点，就会混入了（mixin）ParentNode接口。由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有ParentNode接口。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/dom/parentnode.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"ParentNode 接口，ChildNode 接口"}],["meta",{"property":"og:description","content":"节点对象除了继承 Node 接口以外，还拥有其他接口。ParentNode接口表示当前节点是一个父节点，提供一些处理子节点的方法。ChildNode接口表示当前节点是一个子节点，提供一些相关方法。 ParentNode 接口 如果当前节点是父节点，就会混入了（mixin）ParentNode接口。由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有ParentNode接口。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"ParentNode 接口，ChildNode 接口\\",\\"description\\":\\"节点对象除了继承 Node 接口以外，还拥有其他接口。ParentNode接口表示当前节点是一个父节点，提供一些处理子节点的方法。ChildNode接口表示当前节点是一个子节点，提供一些相关方法。 ParentNode 接口 如果当前节点是父节点，就会混入了（mixin）ParentNode接口。由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有ParentNode接口。\\"}"]]},"headers":[{"level":2,"title":"ParentNode 接口","slug":"parentnode-接口","link":"#parentnode-接口","children":[{"level":3,"title":"ParentNode.children","slug":"parentnode-children","link":"#parentnode-children","children":[]},{"level":3,"title":"ParentNode.firstElementChild","slug":"parentnode-firstelementchild","link":"#parentnode-firstelementchild","children":[]},{"level":3,"title":"ParentNode.lastElementChild","slug":"parentnode-lastelementchild","link":"#parentnode-lastelementchild","children":[]},{"level":3,"title":"ParentNode.childElementCount","slug":"parentnode-childelementcount","link":"#parentnode-childelementcount","children":[]},{"level":3,"title":"ParentNode.append()，ParentNode.prepend()","slug":"parentnode-append-parentnode-prepend","link":"#parentnode-append-parentnode-prepend","children":[]}]},{"level":2,"title":"ChildNode 接口","slug":"childnode-接口","link":"#childnode-接口","children":[{"level":3,"title":"ChildNode.remove()","slug":"childnode-remove","link":"#childnode-remove","children":[]},{"level":3,"title":"ChildNode.before()，ChildNode.after()","slug":"childnode-before-childnode-after","link":"#childnode-before-childnode-after","children":[]},{"level":3,"title":"ChildNode.replaceWith()","slug":"childnode-replacewith","link":"#childnode-replacewith","children":[]}]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":3.45,"words":1036},"filePathRelative":"technology/javascript/dom/parentnode.md","localizedDate":"2023年1月11日","excerpt":"<p>节点对象除了继承 Node 接口以外，还拥有其他接口。<code>ParentNode</code>接口表示当前节点是一个父节点，提供一些处理子节点的方法。<code>ChildNode</code>接口表示当前节点是一个子节点，提供一些相关方法。</p>\\n<h2> ParentNode 接口</h2>\\n<p>如果当前节点是父节点，就会混入了（mixin）<code>ParentNode</code>接口。由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有<code>ParentNode</code>接口。</p>","autoDesc":true}`);export{e as data};