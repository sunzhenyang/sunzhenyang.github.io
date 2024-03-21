import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,a as o,f as a}from"./app-BybQgHW9.js";const s={},l=a(`<h2 id="offsetparent" tabindex="-1"><a class="header-anchor" href="#offsetparent"><span>offsetParent</span></a></h2><blockquote><p>获取最接近的祖先元素，在浏览器渲染期间，它被用于计算坐标</p><p>当我们创建了一个元素，但尚未将其插入文档中，或者它（或它的祖先）具有 <code>display:none</code> 时，<code>offsetParent</code> 为 <code>null</code>，并且 <code>offsetWidth</code> 和 <code>offsetHeight</code> 为 <code>0</code></p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> oSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oSpan<span class="token punctuation">.</span>offsetParent<span class="token punctuation">)</span> <span class="token comment">// &lt;div id=&quot;div&quot; style=&quot;position: relative;&quot;&gt;…&lt;/div&gt;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>最近的祖先元素为下列之一</p><ul><li>CSS 定位的 <code>position</code> 为 <code>relative</code>、<code>absolute</code>、 <code>fixed</code></li><li>或 <code>&lt;body&gt;</code></li><li>或 <code>&lt;table&gt;</code>、<code>&lt;th&gt;</code>、 <code>&lt;td&gt;</code></li></ul></li><li><p>以下几种情况，<code>offsetParent</code> 的值为 <code>null</code></p><ul><li>对于未显示的元素（<code>display:none</code> 或者不在文档中）</li><li>对于 <code>&lt;body&gt;</code> 与 <code>&lt;html&gt;</code></li><li>对于带有 <code>position:fixed</code> 的元素</li></ul></li></ul><h2 id="offsetleft" tabindex="-1"><a class="header-anchor" href="#offsetleft"><span>offsetLeft</span></a></h2><blockquote><p>相对于 <code>offsetParent</code> 元素左上角的 <code>x</code> 坐标</p></blockquote><h2 id="offsettop" tabindex="-1"><a class="header-anchor" href="#offsettop"><span>offsetTop</span></a></h2><blockquote><p>相对于 <code>offsetParent</code> 元素左上角的 <code>y</code> 坐标</p></blockquote><h2 id="offsetwidth" tabindex="-1"><a class="header-anchor" href="#offsetwidth"><span>offsetWidth</span></a></h2><blockquote><p>表示元素本身的宽度 = boder + padding + width</p></blockquote><h2 id="offsetheight" tabindex="-1"><a class="header-anchor" href="#offsetheight"><span>offsetHeight</span></a></h2><blockquote><p>表示元素本身的高度 = border + padding + height</p></blockquote><h2 id="clientleft" tabindex="-1"><a class="header-anchor" href="#clientleft"><span>clientLeft</span></a></h2><blockquote><p>表示内侧与外侧的相对的 <code>x</code> 坐标（边框加滚动条宽度）</p></blockquote><h2 id="clienttop" tabindex="-1"><a class="header-anchor" href="#clienttop"><span>clientTop</span></a></h2><blockquote><p>表示内侧与外侧的相对的 <code>y</code> 坐标（边框加滚动条宽度）</p></blockquote><h2 id="clientwidth" tabindex="-1"><a class="header-anchor" href="#clientwidth"><span>clientWidth</span></a></h2><blockquote><p>元素边框内区域的宽度 = content width + padding （不包括滚动条宽度）</p></blockquote><h2 id="clientheight" tabindex="-1"><a class="header-anchor" href="#clientheight"><span>clientHeight</span></a></h2><blockquote><p>元素边框内区域的宽度 = content height + padding （不包括滚动条高度）</p></blockquote><h2 id="scrollwidth" tabindex="-1"><a class="header-anchor" href="#scrollwidth"><span>scrollWidth</span></a></h2><blockquote><p>元素完整内部宽度，包括滚动出的部分（不包括滚动条宽度）</p></blockquote><h2 id="scrollheight" tabindex="-1"><a class="header-anchor" href="#scrollheight"><span>scrollHeight</span></a></h2><blockquote><p>元素区域的完整内部高度，包括滚动出的部分（不包括滚动条高度）</p></blockquote><h2 id="scrollleft" tabindex="-1"><a class="header-anchor" href="#scrollleft"><span>scrollLeft</span></a></h2><blockquote><p>元素水平方向滚动距离，是可修改的，并且浏览器会滚动该元素</p></blockquote><h2 id="scrolltop" tabindex="-1"><a class="header-anchor" href="#scrolltop"><span>scrollTop</span></a></h2><blockquote><p>元素垂直方向滚动距离，是可修改的，并且浏览器会滚动该元素</p></blockquote><h2 id="getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#getboundingclientrect"><span>getBoundingClientRect()</span></a></h2><blockquote><p>返回最小矩形的窗口坐标，该矩形将 elem 作为内建 <code>DOMRect</code> 类的对象，返回属性如下</p></blockquote><ul><li><code>x</code>：矩形原点相对于窗口的 X 坐标</li><li><code>y</code>：矩形原点相对于窗口的 Y 坐标</li><li><code>width</code>：矩形的宽度（可以为负）</li><li><code>height</code>：矩形的高度（可以为负）</li><li><code>top</code>：矩形顶部的 Y 坐标</li><li><code>bottom</code>：矩形底部的 Y 坐标</li><li><code>left</code>：矩形左边缘的 X 坐标</li><li><code>right</code>：矩形右边缘的 X 坐标</li></ul><blockquote><p>注意</p></blockquote><ul><li>坐标可能是小数</li><li>坐标可能是负数。例如滚动页面，使 <code>elem</code> 现在位于窗口的上方，则 <code>elem.getBoundingClientRect().top</code> 为负数</li><li>负的 <code>width/height</code> 值表示矩形从其右下角开始，然后向左上方“增长”</li><li>由于历史原因，IE 浏览器不支持 <code>x/y</code> 属性</li></ul><h2 id="css-width-与-clientwidth-的不同点" tabindex="-1"><a class="header-anchor" href="#css-width-与-clientwidth-的不同点"><span>CSS width 与 clientWidth 的不同点</span></a></h2><blockquote><p><code>getComputedStyle(elem).width</code> 与 <code>elem.clientWidth</code></p></blockquote><ol><li><code>clientWidth</code> 值是数值，而 <code>getComputedStyle(elem).width</code> 返回一个以 <code>px</code> 作为后缀的字符串。</li><li><code>getComputedStyle</code> 可能会返回非数值的 width，例如内联（inline）元素的 <code>&quot;auto&quot;</code>。</li><li><code>clientWidth</code> 是元素的内部内容区域加上 padding，而 CSS width（具有标准的 <code>box-sizing</code>）是内部内容区域，<strong>不包括 padding</strong>。</li><li>如果有滚动条，并且浏览器为其保留了空间，那么某些浏览器会从 CSS width 中减去该空间（因为它不再可用于内容），而有些则不会这样做。<code>clientWidth</code> 属性总是相同的：如果为滚动条保留了空间，那么将减去滚动条的大小。</li></ol>`,36);function c(i,p){return t(),n("div",null,[o(" more "),l])}const h=e(s,[["render",c],["__file","04.元素的大小和滚动.html.vue"]]),u=JSON.parse(`{"path":"/notes/javascript/web-api/document/04.%E5%85%83%E7%B4%A0%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%92%8C%E6%BB%9A%E5%8A%A8.html","title":"元素的大小和滚动","lang":"zh-CN","frontmatter":{"title":"元素的大小和滚动","icon":"article","article":false,"sticky":20,"breadcrumb":false,"description":"offsetParent 获取最接近的祖先元素，在浏览器渲染期间，它被用于计算坐标 当我们创建了一个元素，但尚未将其插入文档中，或者它（或它的祖先）具有 display:none 时，offsetParent 为 null，并且 offsetWidth 和 offsetHeight 为 0 最近的祖先元素为下列之一 CSS 定位的 position 为...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/notes/javascript/web-api/document/04.%E5%85%83%E7%B4%A0%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%92%8C%E6%BB%9A%E5%8A%A8.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"元素的大小和滚动"}],["meta",{"property":"og:description","content":"offsetParent 获取最接近的祖先元素，在浏览器渲染期间，它被用于计算坐标 当我们创建了一个元素，但尚未将其插入文档中，或者它（或它的祖先）具有 display:none 时，offsetParent 为 null，并且 offsetWidth 和 offsetHeight 为 0 最近的祖先元素为下列之一 CSS 定位的 position 为..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"元素的大小和滚动\\",\\"description\\":\\"offsetParent 获取最接近的祖先元素，在浏览器渲染期间，它被用于计算坐标 当我们创建了一个元素，但尚未将其插入文档中，或者它（或它的祖先）具有 display:none 时，offsetParent 为 null，并且 offsetWidth 和 offsetHeight 为 0 最近的祖先元素为下列之一 CSS 定位的 position 为...\\"}"]]},"headers":[{"level":2,"title":"offsetParent","slug":"offsetparent","link":"#offsetparent","children":[]},{"level":2,"title":"offsetLeft","slug":"offsetleft","link":"#offsetleft","children":[]},{"level":2,"title":"offsetTop","slug":"offsettop","link":"#offsettop","children":[]},{"level":2,"title":"offsetWidth","slug":"offsetwidth","link":"#offsetwidth","children":[]},{"level":2,"title":"offsetHeight","slug":"offsetheight","link":"#offsetheight","children":[]},{"level":2,"title":"clientLeft","slug":"clientleft","link":"#clientleft","children":[]},{"level":2,"title":"clientTop","slug":"clienttop","link":"#clienttop","children":[]},{"level":2,"title":"clientWidth","slug":"clientwidth","link":"#clientwidth","children":[]},{"level":2,"title":"clientHeight","slug":"clientheight","link":"#clientheight","children":[]},{"level":2,"title":"scrollWidth","slug":"scrollwidth","link":"#scrollwidth","children":[]},{"level":2,"title":"scrollHeight","slug":"scrollheight","link":"#scrollheight","children":[]},{"level":2,"title":"scrollLeft","slug":"scrollleft","link":"#scrollleft","children":[]},{"level":2,"title":"scrollTop","slug":"scrolltop","link":"#scrolltop","children":[]},{"level":2,"title":"getBoundingClientRect()","slug":"getboundingclientrect","link":"#getboundingclientrect","children":[]},{"level":2,"title":"CSS width 与 clientWidth 的不同点","slug":"css-width-与-clientwidth-的不同点","link":"#css-width-与-clientwidth-的不同点","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":2.71,"words":812},"filePathRelative":"notes/javascript/web-api/document/04.元素的大小和滚动.md","localizedDate":"2023年1月11日","excerpt":"","autoDesc":true}`);export{h as comp,u as data};
