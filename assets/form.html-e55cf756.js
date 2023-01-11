const a=JSON.parse(`{"key":"v-61fdc1ee","path":"/technology/javascript/bom/form.html","title":"表单，FormData 对象","lang":"zh-CN","frontmatter":{"title":"表单，FormData 对象","icon":"article","category":["javascript"],"article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"表单概述 表单（&lt;form&gt;）用来收集用户提交的数据，发送到服务器。比如，用户提交用户名和密码，让服务器验证，就要通过表单。表单提供多种控件，让开发者使用，具体的控件种类和用法请参考 HTML 语言的教程。本章主要介绍 JavaScript 与表单的交互。 &lt;form action=\\"/handling-page\\" method=\\"post\\"&gt; &lt;div&gt; &lt;label for=\\"name\\"&gt;用户名：&lt;/label&gt; &lt;input type=\\"text\\" id=\\"name\\" name=\\"user_name\\" /&gt; &lt;/div&gt; &lt;div&gt; &lt;label for=\\"passwd\\"&gt;密码：&lt;/label&gt; &lt;input type=\\"password\\" id=\\"passwd\\" name=\\"user_passwd\\" /&gt; &lt;/div&gt; &lt;div&gt; &lt;input type=\\"submit\\" id=\\"submit\\" name=\\"submit_button\\" value=\\"提交\\" /&gt; &lt;/div&gt; &lt;/form&gt;","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/bom/form.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"表单，FormData 对象"}],["meta",{"property":"og:description","content":"表单概述 表单（&lt;form&gt;）用来收集用户提交的数据，发送到服务器。比如，用户提交用户名和密码，让服务器验证，就要通过表单。表单提供多种控件，让开发者使用，具体的控件种类和用法请参考 HTML 语言的教程。本章主要介绍 JavaScript 与表单的交互。 &lt;form action=\\"/handling-page\\" method=\\"post\\"&gt; &lt;div&gt; &lt;label for=\\"name\\"&gt;用户名：&lt;/label&gt; &lt;input type=\\"text\\" id=\\"name\\" name=\\"user_name\\" /&gt; &lt;/div&gt; &lt;div&gt; &lt;label for=\\"passwd\\"&gt;密码：&lt;/label&gt; &lt;input type=\\"password\\" id=\\"passwd\\" name=\\"user_passwd\\" /&gt; &lt;/div&gt; &lt;div&gt; &lt;input type=\\"submit\\" id=\\"submit\\" name=\\"submit_button\\" value=\\"提交\\" /&gt; &lt;/div&gt; &lt;/form&gt;"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"表单，FormData 对象\\",\\"description\\":\\"表单概述 表单（&lt;form&gt;）用来收集用户提交的数据，发送到服务器。比如，用户提交用户名和密码，让服务器验证，就要通过表单。表单提供多种控件，让开发者使用，具体的控件种类和用法请参考 HTML 语言的教程。本章主要介绍 JavaScript 与表单的交互。 &lt;form action=\\\\\\"/handling-page\\\\\\" method=\\\\\\"post\\\\\\"&gt; &lt;div&gt; &lt;label for=\\\\\\"name\\\\\\"&gt;用户名：&lt;/label&gt; &lt;input type=\\\\\\"text\\\\\\" id=\\\\\\"name\\\\\\" name=\\\\\\"user_name\\\\\\" /&gt; &lt;/div&gt; &lt;div&gt; &lt;label for=\\\\\\"passwd\\\\\\"&gt;密码：&lt;/label&gt; &lt;input type=\\\\\\"password\\\\\\" id=\\\\\\"passwd\\\\\\" name=\\\\\\"user_passwd\\\\\\" /&gt; &lt;/div&gt; &lt;div&gt; &lt;input type=\\\\\\"submit\\\\\\" id=\\\\\\"submit\\\\\\" name=\\\\\\"submit_button\\\\\\" value=\\\\\\"提交\\\\\\" /&gt; &lt;/div&gt; &lt;/form&gt;\\"}"]]},"headers":[{"level":2,"title":"表单概述","slug":"表单概述","link":"#表单概述","children":[]},{"level":2,"title":"FormData 对象","slug":"formdata-对象","link":"#formdata-对象","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"实例方法","slug":"实例方法","link":"#实例方法","children":[]}]},{"level":2,"title":"表单的内置验证","slug":"表单的内置验证","link":"#表单的内置验证","children":[{"level":3,"title":"自动校验","slug":"自动校验","link":"#自动校验","children":[]},{"level":3,"title":"checkValidity()","slug":"checkvalidity","link":"#checkvalidity","children":[]},{"level":3,"title":"willValidate 属性","slug":"willvalidate-属性","link":"#willvalidate-属性","children":[]},{"level":3,"title":"validationMessage 属性","slug":"validationmessage-属性","link":"#validationmessage-属性","children":[]},{"level":3,"title":"setCustomValidity()","slug":"setcustomvalidity","link":"#setcustomvalidity","children":[]},{"level":3,"title":"validity 属性","slug":"validity-属性","link":"#validity-属性","children":[]},{"level":3,"title":"表单的 novalidate 属性","slug":"表单的-novalidate-属性","link":"#表单的-novalidate-属性","children":[]}]},{"level":2,"title":"enctype 属性","slug":"enctype-属性","link":"#enctype-属性","children":[]},{"level":2,"title":"文件上传","slug":"文件上传","link":"#文件上传","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":12.94,"words":3882},"filePathRelative":"technology/javascript/bom/form.md","localizedDate":"2023年1月11日","excerpt":"<h2> 表单概述</h2>\\n<p>表单（<code>&lt;form&gt;</code>）用来收集用户提交的数据，发送到服务器。比如，用户提交用户名和密码，让服务器验证，就要通过表单。表单提供多种控件，让开发者使用，具体的控件种类和用法请参考 HTML 语言的教程。本章主要介绍 JavaScript 与表单的交互。</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>form</span> <span class=\\"token attr-name\\">action</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>/handling-page<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">method</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>post<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>label</span> <span class=\\"token attr-name\\">for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>name<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>用户名：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>label</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>name<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>user_name<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>label</span> <span class=\\"token attr-name\\">for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>passwd<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>密码：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>label</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>password<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>passwd<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>user_passwd<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>submit<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>submit<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>submit_button<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>提交<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>form</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{a as data};
