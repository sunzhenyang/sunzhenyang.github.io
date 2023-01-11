const e=JSON.parse(`{"key":"v-65cfcc7c","path":"/technology/webapi/canvas.html","title":"Canvas API","lang":"zh-CN","frontmatter":{"title":"Canvas API","icon":"article","category":["Web API"],"article":false,"tag":["Web API"],"copyright":"Copyright by 阮一峰","description":"概述 &lt;canvas&gt;元素用于生成图像。它本身就像一个画布，JavaScript 通过操作它的 API，在上面生成图像。它的底层是一个个像素，基本上&lt;canvas&gt;是一个可以用 JavaScript 操作的位图（bitmap）。 它与 SVG 图像的区别在于，&lt;canvas&gt;是脚本调用各种方法生成图像，SVG 则是一个 XML 文件，通过各种子元素生成图像。 使用 Canvas API 之前，需要在网页里面新建一个&lt;canvas&gt;元素。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/webapi/canvas.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Canvas API"}],["meta",{"property":"og:description","content":"概述 &lt;canvas&gt;元素用于生成图像。它本身就像一个画布，JavaScript 通过操作它的 API，在上面生成图像。它的底层是一个个像素，基本上&lt;canvas&gt;是一个可以用 JavaScript 操作的位图（bitmap）。 它与 SVG 图像的区别在于，&lt;canvas&gt;是脚本调用各种方法生成图像，SVG 则是一个 XML 文件，通过各种子元素生成图像。 使用 Canvas API 之前，需要在网页里面新建一个&lt;canvas&gt;元素。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"Web API"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Canvas API\\",\\"description\\":\\"概述 &lt;canvas&gt;元素用于生成图像。它本身就像一个画布，JavaScript 通过操作它的 API，在上面生成图像。它的底层是一个个像素，基本上&lt;canvas&gt;是一个可以用 JavaScript 操作的位图（bitmap）。 它与 SVG 图像的区别在于，&lt;canvas&gt;是脚本调用各种方法生成图像，SVG 则是一个 XML 文件，通过各种子元素生成图像。 使用 Canvas API 之前，需要在网页里面新建一个&lt;canvas&gt;元素。\\"}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"Canvas API：绘制图形","slug":"canvas-api-绘制图形","link":"#canvas-api-绘制图形","children":[{"level":3,"title":"路径","slug":"路径","link":"#路径","children":[]},{"level":3,"title":"线型","slug":"线型","link":"#线型","children":[]},{"level":3,"title":"矩形","slug":"矩形","link":"#矩形","children":[]},{"level":3,"title":"弧线","slug":"弧线","link":"#弧线","children":[]},{"level":3,"title":"文本","slug":"文本","link":"#文本","children":[]},{"level":3,"title":"渐变色和图像填充","slug":"渐变色和图像填充","link":"#渐变色和图像填充","children":[]},{"level":3,"title":"阴影","slug":"阴影","link":"#阴影","children":[]}]},{"level":2,"title":"Canvas API：图像处理","slug":"canvas-api-图像处理","link":"#canvas-api-图像处理","children":[{"level":3,"title":"CanvasRenderingContext2D.drawImage()","slug":"canvasrenderingcontext2d-drawimage","link":"#canvasrenderingcontext2d-drawimage","children":[]},{"level":3,"title":"像素读写","slug":"像素读写","link":"#像素读写","children":[]},{"level":3,"title":"CanvasRenderingContext2D.save()，CanvasRenderingContext2D.restore()","slug":"canvasrenderingcontext2d-save-canvasrenderingcontext2d-restore","link":"#canvasrenderingcontext2d-save-canvasrenderingcontext2d-restore","children":[]},{"level":3,"title":"CanvasRenderingContext2D.canvas","slug":"canvasrenderingcontext2d-canvas","link":"#canvasrenderingcontext2d-canvas","children":[]},{"level":3,"title":"图像变换","slug":"图像变换","link":"#图像变换","children":[]}]},{"level":2,"title":"<canvas> 元素的方法","slug":"canvas-元素的方法","link":"#canvas-元素的方法","children":[{"level":3,"title":"HTMLCanvasElement.toDataURL()","slug":"htmlcanvaselement-todataurl","link":"#htmlcanvaselement-todataurl","children":[]},{"level":3,"title":"HTMLCanvasElement.toBlob()","slug":"htmlcanvaselement-toblob","link":"#htmlcanvaselement-toblob","children":[]}]},{"level":2,"title":"Canvas 使用实例","slug":"canvas-使用实例","link":"#canvas-使用实例","children":[{"level":3,"title":"动画效果","slug":"动画效果","link":"#动画效果","children":[]},{"level":3,"title":"像素处理","slug":"像素处理","link":"#像素处理","children":[]}]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":23.5,"words":7050},"filePathRelative":"technology/webapi/canvas.md","localizedDate":"2023年1月11日","excerpt":"<h2> 概述</h2>\\n<p><code>&lt;canvas&gt;</code>元素用于生成图像。它本身就像一个画布，JavaScript 通过操作它的 API，在上面生成图像。它的底层是一个个像素，基本上<code>&lt;canvas&gt;</code>是一个可以用 JavaScript 操作的位图（bitmap）。</p>\\n<p>它与 SVG 图像的区别在于，<code>&lt;canvas&gt;</code>是脚本调用各种方法生成图像，SVG 则是一个 XML 文件，通过各种子元素生成图像。</p>\\n<p>使用 Canvas API 之前，需要在网页里面新建一个<code>&lt;canvas&gt;</code>元素。</p>","autoDesc":true}`);export{e as data};
