const e=JSON.parse(`{"key":"v-d5651fb2","path":"/technology/javascript/dom/text.html","title":"Text 节点和 DocumentFragment 节点","lang":"zh-CN","frontmatter":{"title":"Text 节点和 DocumentFragment 节点","icon":"article","category":["javascript"],"article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"Text 节点的概念 文本节点（Text）代表元素节点（Element）和属性节点（Attribute）的文本内容。如果一个节点只包含一段文本，那么它就有一个文本子节点，代表该节点的文本内容。 通常我们使用父节点的firstChild、nextSibling等属性获取文本节点，或者使用Document节点的createTextNode方法创造一个文本节点。 // 获取文本节点 var textNode = document.querySelector('p').firstChild; // 创造文本节点 var textNode = document.createTextNode('Hi'); document.querySelector('div').appendChild(textNode);","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/dom/text.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Text 节点和 DocumentFragment 节点"}],["meta",{"property":"og:description","content":"Text 节点的概念 文本节点（Text）代表元素节点（Element）和属性节点（Attribute）的文本内容。如果一个节点只包含一段文本，那么它就有一个文本子节点，代表该节点的文本内容。 通常我们使用父节点的firstChild、nextSibling等属性获取文本节点，或者使用Document节点的createTextNode方法创造一个文本节点。 // 获取文本节点 var textNode = document.querySelector('p').firstChild; // 创造文本节点 var textNode = document.createTextNode('Hi'); document.querySelector('div').appendChild(textNode);"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Text 节点和 DocumentFragment 节点\\",\\"description\\":\\"Text 节点的概念 文本节点（Text）代表元素节点（Element）和属性节点（Attribute）的文本内容。如果一个节点只包含一段文本，那么它就有一个文本子节点，代表该节点的文本内容。 通常我们使用父节点的firstChild、nextSibling等属性获取文本节点，或者使用Document节点的createTextNode方法创造一个文本节点。 // 获取文本节点 var textNode = document.querySelector('p').firstChild; // 创造文本节点 var textNode = document.createTextNode('Hi'); document.querySelector('div').appendChild(textNode);\\"}"]]},"headers":[{"level":2,"title":"Text 节点的概念","slug":"text-节点的概念","link":"#text-节点的概念","children":[]},{"level":2,"title":"Text 节点的属性","slug":"text-节点的属性","link":"#text-节点的属性","children":[{"level":3,"title":"data","slug":"data","link":"#data","children":[]},{"level":3,"title":"wholeText","slug":"wholetext","link":"#wholetext","children":[]},{"level":3,"title":"length","slug":"length","link":"#length","children":[]},{"level":3,"title":"nextElementSibling，previousElementSibling","slug":"nextelementsibling-previouselementsibling","link":"#nextelementsibling-previouselementsibling","children":[]}]},{"level":2,"title":"Text 节点的方法","slug":"text-节点的方法","link":"#text-节点的方法","children":[{"level":3,"title":"appendData()，deleteData()，insertData()，replaceData()，subStringData()","slug":"appenddata-deletedata-insertdata-replacedata-substringdata","link":"#appenddata-deletedata-insertdata-replacedata-substringdata","children":[]},{"level":3,"title":"remove()","slug":"remove","link":"#remove","children":[]},{"level":3,"title":"splitText()","slug":"splittext","link":"#splittext","children":[]}]},{"level":2,"title":"DocumentFragment 节点","slug":"documentfragment-节点","link":"#documentfragment-节点","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":5.62,"words":1687},"filePathRelative":"technology/javascript/dom/text.md","localizedDate":"2023年1月11日","excerpt":"<h2> Text 节点的概念</h2>\\n<p>文本节点（<code>Text</code>）代表元素节点（<code>Element</code>）和属性节点（<code>Attribute</code>）的文本内容。如果一个节点只包含一段文本，那么它就有一个文本子节点，代表该节点的文本内容。</p>\\n<p>通常我们使用父节点的<code>firstChild</code>、<code>nextSibling</code>等属性获取文本节点，或者使用<code>Document</code>节点的<code>createTextNode</code>方法创造一个文本节点。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 获取文本节点</span>\\n<span class=\\"token keyword\\">var</span> textNode <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'p'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>firstChild<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 创造文本节点</span>\\n<span class=\\"token keyword\\">var</span> textNode <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createTextNode</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Hi'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\ndocument<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'div'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">appendChild</span><span class=\\"token punctuation\\">(</span>textNode<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
