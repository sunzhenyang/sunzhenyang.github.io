import{_ as n,P as a,Q as s,Z as t,a2 as e}from"./framework-0028f3de.js";const p={},o=e(`<h2 id="层次结构" tabindex="-1"><a class="header-anchor" href="#层次结构" aria-hidden="true">#</a> 层次结构</h2><figure><img src="https://cdn.jsdelivr.net/gh/sunzhenyang/blog-img@main/img/image-20220819135542343.png" alt="image-20220819135542343" tabindex="0" loading="lazy"><figcaption>image-20220819135542343</figcaption></figure><h3 id="eventtarget" tabindex="-1"><a class="header-anchor" href="#eventtarget" aria-hidden="true">#</a> EventTarget</h3><blockquote><p>是一切的根“抽象（abstract）”类</p></blockquote><p>该类的对象从未被创建。它作为一个基础，以便让所有 DOM 节点都支持所谓的“事件（event）”</p><h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h3><blockquote><p>是一个“抽象”类，充当 DOM 节点的基础</p></blockquote><p>它提供了树的核心功能：<code>parentNode</code>，<code>nextSibling</code>，<code>childNodes</code> 等（它们都是 getter）</p><p><code>Node</code> 类的对象从未被创建。但是还有一些继承自它的其他类（因此继承了 <code>Node</code> 的功能）</p><h3 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> Document</h3><blockquote><p>由于历史原因通常被 <code>HTMLDocument</code> 继承（尽管最新的规范没有规定），是一个整体的文档</p><p>全局变量 <code>document</code> 就是属于这个类。它作为 DOM 的入口，是 <code>HTMLDocument</code> 类的一个实例</p></blockquote><h3 id="characterdata" tabindex="-1"><a class="header-anchor" href="#characterdata" aria-hidden="true">#</a> CharacterData</h3><blockquote><p>一个“抽象”类，被下述类继承</p></blockquote><ul><li><p><strong>Text</strong>：对应于元素内部文本的类，例如 <code>&lt;p&gt;Hello&lt;/p&gt;</code> 中的 <code>Hello</code></p></li><li><p><strong>Comment</strong>：注释类。它们不会被展示出来，但每个注释都会成为 DOM 中的一员</p></li></ul><h3 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h3><blockquote><p>是 DOM 元素的基础类</p></blockquote><ul><li><p>提供了元素级导航 <code>nextElementSibling</code>，<code>children</code>以及搜索方法，如 <code>getElementsByTagName</code> 和 <code>querySelector</code></p></li><li><p>浏览器不仅支持 HTML，还支持 XML 和 SVG。因此，<code>Element</code> 类充当的是更具体的类的基础：<code>SVGElement</code>，<code>XMLElement</code>和 <code>HTMLElement</code></p></li></ul><h3 id="htmlelement" tabindex="-1"><a class="header-anchor" href="#htmlelement" aria-hidden="true">#</a> HTMLElement</h3><blockquote><p>是所有 HTML 元素的基础类</p></blockquote><ul><li><strong>HTMLInputElement</strong>：<code>&lt;input&gt;</code> 元素的类</li><li><strong>HTMLBodyElement</strong>：<code>&lt;body&gt;</code> 元素的类</li><li><strong>HTMAnchorElement</strong>：<code>&lt;a&gt;</code> 元素的类</li><li>...等</li></ul><h3 id="归纳" tabindex="-1"><a class="header-anchor" href="#归纳" aria-hidden="true">#</a> 归纳</h3><blockquote><p>很多其他标签具有自己的类，可能还具有特定的属性和方法，而一些元素，如 <code>&lt;span&gt;</code>、<code>&lt;section&gt;</code>、<code>&lt;article&gt;</code> 等，没有任何特定的属性，所以它们是 <code>HTMLElement</code> 类的实例</p></blockquote><ul><li><strong>给定节点的全部属性和方法都是继承链的结果</strong></li></ul><p>例如，<code>&lt;input&gt;</code> 元素的 DOM 对象，属于 <code>HTMLInputElement</code> 类，获取属性和方法，并将其作为下列类（按继承顺序列出）的叠加：</p><ul><li><code>HTMLInputElement</code> —— 该类提供特定于输入的属性，</li><li><code>HTMLElement</code> —— 它提供了通用（common）的 HTML 元素方法（以及 getter 和 setter）</li><li><code>Element</code> —— 提供通用（generic）元素方法，</li><li><code>Node</code> —— 提供通用 DOM 节点属性，</li><li><code>EventTarget</code> —— 为事件（包括事件本身）提供支持，</li><li>……最后，它继承自 <code>Object</code>，因为像 <code>hasOwnProperty</code> 这样的“普通对象”方法也是可用的</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 类型测试</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">)</span>           <span class="token comment">// HTMLBodyElement</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                 <span class="token comment">// [object HTMLBodyElement]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body <span class="token keyword">instanceof</span> <span class="token class-name">HTMLBodyElement</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span>     <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body <span class="token keyword">instanceof</span> <span class="token class-name">Element</span><span class="token punctuation">)</span>         <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body <span class="token keyword">instanceof</span> <span class="token class-name">Node</span><span class="token punctuation">)</span>            <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body <span class="token keyword">instanceof</span> <span class="token class-name">EventTarget</span><span class="token punctuation">)</span>     <span class="token comment">// true</span>

<span class="token comment">// 探索属性</span>
<span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span> <span class="token comment">// 显示元素的 DOM 树</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span> <span class="token comment">// 将元素显示为 DOM 对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节点属性" tabindex="-1"><a class="header-anchor" href="#节点属性" aria-hidden="true">#</a> 节点属性</h2><h3 id="nodetype" tabindex="-1"><a class="header-anchor" href="#nodetype" aria-hidden="true">#</a> nodeType</h3><blockquote><p>（只读）提供了一种“过时的”用来获取 DOM 节点类型的方法</p></blockquote><ul><li>返回数值类型，如下 <ul><li><code>1</code>：元素节点</li><li><code>3</code>：文本节点</li><li><code>9</code>：document 对象</li></ul></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  Test
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token comment">// 1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token comment">// 3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token comment">// 1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token comment">// 9</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tagname" tabindex="-1"><a class="header-anchor" href="#tagname" aria-hidden="true">#</a> tagName</h3><blockquote><p>（只读）读取节点标签名，仅支持元素节点，非元素节点返回 <code>undefined</code></p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  Test
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span> <span class="token comment">// SPAN</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nodename" tabindex="-1"><a class="header-anchor" href="#nodename" aria-hidden="true">#</a> nodeName</h3><blockquote><p>（只读）读取节点标签名，适用于任意 <code>Node</code> 节点</p><p>对于其他非元素类型节点（text，comment 等），它拥有一个对应节点类型的字符串</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  Test
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>nodeName<span class="token punctuation">)</span>        <span class="token comment">// #text</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">.</span>nodeName<span class="token punctuation">)</span> <span class="token comment">// SPAN</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="innerhtml" tabindex="-1"><a class="header-anchor" href="#innerhtml" aria-hidden="true">#</a> innerHTML</h3><blockquote><p>将元素中的 HTML 获取为字符串形式，也可以进行修改</p></blockquote><ul><li>插入无效的 HTML，浏览器会自动修复错误</li><li><code>innerHTML += str</code> 的操作会进行完全重写，而非附加</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token comment">// &lt;span&gt;Text&lt;/span&gt; 如果存在文本节点也会打印出来</span>

  <span class="token comment">// 插入无效的 HTML，浏览器会自动修复错误</span>
  dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&lt;b&gt;Test&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>  <span class="token comment">// &lt;b&gt;Test&lt;/b&gt;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="outerhtml" tabindex="-1"><a class="header-anchor" href="#outerhtml" aria-hidden="true">#</a> outerHTML</h3><blockquote><p>属性包含了元素的完整 HTML，和 <code>innerHTML</code> 加上元素本身一样，也可以进行修改</p></blockquote><ul><li>赋值不会修改 DOM 元素，而是将其从 DOM 中删除并在其位置插入新的 HTML</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>outerHTML<span class="token punctuation">)</span> <span class="token comment">// &lt;div&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/div&gt;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nodevalue-data" tabindex="-1"><a class="header-anchor" href="#nodevalue-data" aria-hidden="true">#</a> nodeValue/data</h3><blockquote><p>返回文本节点内容，一般使用 <code>data</code>，因为它更简洁</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Text<span class="token comment">&lt;!--Comment Text--&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> oText<span class="token operator">=</span> oDiv<span class="token punctuation">.</span>firstChild
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oText<span class="token punctuation">.</span>nodeValue<span class="token punctuation">)</span> <span class="token comment">// Text</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oText<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token comment">// Text</span>
  <span class="token keyword">var</span> oComment <span class="token operator">=</span> oText<span class="token punctuation">.</span>nextSibling
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oComment<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token comment">// Comment Text</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="textcontent" tabindex="-1"><a class="header-anchor" href="#textcontent" aria-hidden="true">#</a> textContent</h3><blockquote><p>提供了对元素内文本的访问权限：仅文本，不包括注释，并去掉所有 <code>&lt;tags&gt;</code></p></blockquote><ul><li>实际开发中读取文本场景较少，但是写入文本场景较多，因为 <code>textContent</code>，会将写入数据“作为文本”插入，所有符号均按字面意义处理，不带 HTML 标签</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>news<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Headline!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--Comment Text--&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> Martians attack people!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>news<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// Headline! Martians attack people!</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> hidden</h3><blockquote><p>指定元素是否可见，<code>hidden</code> 与 <code>style=&quot;display:none&quot;</code> 做的是相同的事，但 <code>hidden</code> 写法更简洁</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>显示/隐藏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span><span class="token property">line-height</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">var</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> oBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span>
	oBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		oDiv<span class="token punctuation">.</span>hidden <span class="token operator">=</span> <span class="token operator">!</span>oDiv<span class="token punctuation">.</span>hidden
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> attributes</h3><blockquote><p>读取所有节点属性</p><p>返回一个集合，是可迭代对象，该对象将所有元素的特性（标准和非标准的）作为 <code>name</code> 和 <code>value</code> 属性存储在对象中。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>attributes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="属性设置方法" tabindex="-1"><a class="header-anchor" href="#属性设置方法" aria-hidden="true">#</a> 属性设置方法</h2><h3 id="hasattribute-name" tabindex="-1"><a class="header-anchor" href="#hasattribute-name" aria-hidden="true">#</a> hasAttribute(name)</h3><blockquote><p>检查属性是否存在</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>elem<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="getattribute-name" tabindex="-1"><a class="header-anchor" href="#getattribute-name" aria-hidden="true">#</a> getAttribute(name)</h3><blockquote><p>获取属性值</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>elem<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="setattribute-name-value" tabindex="-1"><a class="header-anchor" href="#setattribute-name-value" aria-hidden="true">#</a> setAttribute(name, value)</h3><blockquote><p>设置属性值</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>elem<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="removeattribute-name" tabindex="-1"><a class="header-anchor" href="#removeattribute-name" aria-hidden="true">#</a> removeAttribute(name)</h3><blockquote><p>移除属性值</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>elem<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,71);function c(l,i){return a(),s("div",null,[t(" more "),o])}const d=n(p,[["render",c],["__file","02.节点属性.html.vue"]]);export{d as default};
