import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as t,a as n,b as e,d as l,e as i,f as a}from"./app-d18dfe82.js";const h={},s=a('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><blockquote><p><code>display: flex</code>： 意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性</p></blockquote><blockquote><p><code>display: inline-flex</code>： 创建一个弹性容器，行为类似于 <code>inline-block</code> 元素。它会跟其他行内元素一起流式排列，但不会自动增长到 100%的 宽度。内部的弹性子元素跟使用 display: flex 创建的 Flexbox 里的弹性子元素行为 一样。在实际开发时，很少用到 display: inline-flex。</p></blockquote><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><ul><li>消除块级元素特性（之后所有设置的 <code>display: block;</code> 都是无效的）</li><li>设为 <code>flex</code> 布局以后，子元素的 <code>float</code> 、<code>clear</code> 和 <code>vertical-align</code> 等属性将失效</li><li>采用 <code>flex</code> 布局的元素，称为 flex 容器，简称 <strong>容器</strong>，所有子元素自动成为容器成员，称为 flex 项目，简称 <strong>项目</strong></li><li>容器默认存在两根轴，水平的主轴和与其垂直的交叉轴</li></ul><h3 id="空间" tabindex="-1"><a class="header-anchor" href="#空间" aria-hidden="true">#</a> 空间</h3><ul><li>主轴的开始位置（与边框的交叉点）叫做 <code>main start</code>，结束位置叫做 <code>main end</code></li><li>交叉轴的开始位置叫做 <code>cross start</code>，结束位置叫做 <code>cross end</code></li><li>项目默认沿主轴排列</li><li>单个项目占据的主轴空间叫做 <code>main size</code>，占据的交叉轴空间叫做 <code>cross size</code></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/sunzhenyang/blog-vuepress-img/img/20210426210125.png" alt="bg2015071004" tabindex="0" loading="lazy"><figcaption>bg2015071004</figcaption></figure><h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h2><h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3><ul><li>定义主轴的方向（即项目的排列方向） <ul><li><code>row</code>（默认值）：主轴水平方向，起点在左端</li><li><code>row-reverse</code>：主轴为水平方向，起点在右端</li><li><code>column</code>：主轴为垂直方向，起点在上沿</li><li><code>column-reverse</code>：主轴为垂直方向，起点在下沿</li></ul></li></ul><h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3><ul><li>定义如果一条轴线排不下，如何换行（项目默认都排在一条线轴线上） <ul><li><code>nowrap</code>（默认）：不换行（子元素按比例平均分配）</li><li><code>wrap</code>：换行，第一行在上方</li><li><code>swrap-reverse</code>：换行，第一行在下方(只是行的顺序变化，元素在行内的顺序不变)</li></ul></li></ul><h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3><ul><li><code>flex-direction</code> 属性和 <code>flex-wrap</code> 属性的简写形式 <ul><li>默认值为 <code>row nowrap</code></li><li>写法：<code>flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;</code></li></ul></li></ul><h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3><ul><li>定义项目在主轴上的对齐方式 <ul><li><code>flex-start</code>（默认值）：向主轴起点方向对齐</li><li><code>flex-end</code>：向主轴终点方向对齐</li><li><code>center</code>： 向主轴居中对齐</li><li><code>space-between</code>：由主轴两端对齐，项目之间的间隔都相等</li><li><code>space-around</code>：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍</li></ul></li></ul><h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3><ul><li>定义项目在交叉轴上如何对齐 <ul><li><code>flex-start</code>：向交叉轴起点方向对齐</li><li><code>flex-end</code>：向交叉轴终点方向对齐</li><li><code>center</code>：向交叉轴的中点对齐</li><li><code>baseline</code>: 项目的第一行文字的基线对齐</li><li><code>stretch</code>（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度</li></ul></li></ul><h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3><ul><li>定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 <ul><li><code>flex-start</code>：向交叉轴起点方向对齐</li><li><code>flex-end</code>：向交叉轴终点方向对齐</li><li><code>center</code>：向交叉轴的中点对齐</li><li><code>space-between</code>：与交叉轴两端对齐，轴线之间的间隔平均分布</li><li><code>space-around</code>：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍</li><li><code>stretch</code>（默认值）：轴线占满整个交叉轴</li></ul></li></ul><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> Order</h3><ul><li>定义项目的排列顺序。数值越小，排列越靠前</li><li>默认为0（可为负值）</li></ul><h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3><ul><li>定义项目的放大比例 <ul><li>默认为 <code>0</code>，即如果存在剩余空间，也不放大</li><li>如果所有项目的 <code>flex-grow</code> 属性都为 <code>1</code>，则它们将等分<strong>剩余空间</strong>（如果有的话）</li><li>如果一个项目的 <code>flex-grow</code> 属性为 <code>2</code>，其他项目都为 <code>1</code>，则前者占据的<strong>剩余空间</strong>将比其他项多一倍</li></ul></li></ul><h3 id="flex-shrin" tabindex="-1"><a class="header-anchor" href="#flex-shrin" aria-hidden="true">#</a> flex-shrin</h3><ul><li>定义了项目的缩小比例 <ul><li>默认为 <code>1</code>，即如果空间不足，该项目将缩小（无负值）</li><li>如果所有项目的 <code>flex-shrink</code> 属性都为 <code>1</code>，当空间不足时，都将等比例缩小</li><li>如果一个项目的 <code>flex-shrink</code> 属性为 <code>0</code>，其他项目都为 <code>1</code>，则空间不足时，前者不缩小</li></ul></li></ul><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3><ul><li>定义了在分配多余空间之前，项目占据的主轴空间（main size） <ul><li>浏览器根据这个属性，计算主轴是否有多余空间</li><li>默认值为 <code>auto</code>，即项目的本来大小</li><li>它可以设为跟 <code>width</code> 或 <code>height</code> 属性一样的值（比如350px），则项目将占据固定空间</li></ul></li></ul><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><ul><li>是 <code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code> 的简写 <ul><li>默认值为 <code>0 1 auto</code>，后两个属性可选</li><li>该属性有两个快捷值：<code>auto (1 1 auto)</code> 和 <code>none (0 0 auto)</code></li><li>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值</li></ul></li></ul><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3><ul><li>允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性 <ul><li>默认值为 <code>auto</code>，表示继承父元素的 <code>align-items</code> 属性，如果没有父元素，则等同于 <code>stretch</code></li><li>写法：<code>align-self: auto | flex-start | flex-end | center | baseline | stretch</code></li><li>该属性可能取 6 个值，除了 <code>auto</code>，其他都与 <code>align-items</code> 属性完全一致</li></ul></li></ul><br><h2 id="其他布局方式" tabindex="-1"><a class="header-anchor" href="#其他布局方式" aria-hidden="true">#</a> 其他布局方式</h2><h3 id="flex-布局教程-语法篇" tabindex="-1"><a class="header-anchor" href="#flex-布局教程-语法篇" aria-hidden="true">#</a> Flex 布局教程：语法篇</h3>',37),u={href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"css-grid-网格布局教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#css-grid-网格布局教程","aria-hidden":"true"},"#"),l(" CSS Grid 网格布局教程")],-1),x={href:"http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"只要一行代码-实现五种-css-经典布局",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#只要一行代码-实现五种-css-经典布局","aria-hidden":"true"},"#"),l(" 只要一行代码，实现五种 CSS 经典布局")],-1),b={href:"http://www.ruanyifeng.com/blog/2020/08/five-css-layouts-in-one-line.html",target:"_blank",rel:"noopener noreferrer"},p=a("<ul><li>空间居中布局 <blockquote><p>不管容器的大小，项目总是占据中心点</p></blockquote></li><li>并列式布局 <blockquote><p>多个项目并列，如果宽度不够，放不下的项目就自动折行</p></blockquote></li><li>两栏式布局 <blockquote><p>一个边栏，一个主栏。边栏始终存在，主栏根据设备宽度，变宽或者变窄</p></blockquote></li><li>三明治布局 <blockquote><p>页面在垂直方向上，分成三部分：页眉、内容区、页脚。</p></blockquote></li><li>圣杯布局 <blockquote><p>最常用的布局，所以被比喻为圣杯。它将页面分成五个部分，除了页眉和页脚，内容区分成左边栏、主栏、右边栏。</p></blockquote></li></ul><blockquote><p>参考</p></blockquote>",2),m={href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.ituring.com.cn/book/2583",target:"_blank",rel:"noopener noreferrer"};function _(k,y){const o=c("ExternalLinkIcon");return r(),t("div",null,[n(" more "),s,e("p",null,[e("a",u,[l("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),i(o)])]),f,e("p",null,[e("a",x,[l("http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"),i(o)])]),g,e("p",null,[e("a",b,[l("http://www.ruanyifeng.com/blog/2020/08/five-css-layouts-in-one-line.html"),i(o)])]),p,e("ul",null,[e("li",null,[e("a",m,[l("Flex 布局教程：语法篇"),i(o)])]),e("li",null,[e("a",w,[l("《深入解析CSS》"),i(o)])])])])}const S=d(h,[["render",_],["__file","02.Flex 布局.html.vue"]]);export{S as default};
