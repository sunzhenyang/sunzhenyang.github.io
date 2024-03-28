import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,f as o}from"./app-DdwQwFQ1.js";const a={},l=o(`<p><code>&lt;option&gt;</code>元素表示下拉框（<code>&lt;select&gt;</code>，<code>&lt;optgroup&gt;</code>或<code>&lt;datalist&gt;</code>）里面的一个选项。它是 HTMLOptionElement 接口的实例。</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><p>除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。</p><ul><li><code>disabled</code>：布尔值，表示该项是否可选择。</li><li><code>defaultSelected</code>：布尔值，表示该项是否默认选中。一旦设为<code>true</code>，该项的值就是<code>&lt;select&gt;</code>的默认值。</li><li><code>form</code>：返回<code>&lt;option&gt;</code>所在的表单元素。如果不属于任何表单，则返回<code>null</code>。该属性只读。</li><li><code>index</code>：整数，表示该选项在整个下拉列表里面的位置。该属性只读。</li><li><code>label</code>：字符串，表示对该选项的说明。如果该属性未设置，则返回该选项的文本内容。</li><li><code>selected</code>：布尔值，表示该选项是否选中。</li><li><code>text</code>：字符串，该选项的文本内容。</li><li><code>value</code>：字符串，该选项的值。表单提交时，上传的就是选中项的这个属性。</li></ul><h2 id="option-构造函数" tabindex="-1"><a class="header-anchor" href="#option-构造函数"><span>Option() 构造函数</span></a></h2><p>浏览器原生提供<code>Option()</code>构造函数，用来生成 HTMLOptionElement 实例。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Option</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> value<span class="token punctuation">,</span> defaultSelected<span class="token punctuation">,</span> selected<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它接受四个参数，都是可选的。</p><ul><li>text：字符串，表示该选项的文本内容。如果省略，返回空字符串。</li><li>value：字符串，表示该选项的值。如果省略，默认返回<code>text</code>属性的值。</li><li>defaultSelected：布尔值，表示该项是否默认选中，默认为<code>false</code>。注意，即使设为<code>true</code>，也不代表该项的<code>selected</code>属性为<code>true</code>。</li><li>selected：布尔值，表示该项是否选中，默认为<code>false</code>。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> newOption <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Option</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

newOption<span class="token punctuation">.</span>text <span class="token comment">// &quot;hello&quot;</span>
newOption<span class="token punctuation">.</span>value <span class="token comment">// &quot;world&quot;</span>
newOption<span class="token punctuation">.</span>defaultSelected <span class="token comment">// true</span>
newOption<span class="token punctuation">.</span>selected <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>newOption</code>的<code>defaultSelected</code>属性为<code>true</code>，但是它没有被选中（即<code>selected</code>属性为<code>false</code>）。</p>`,11),c=[l];function s(i,d){return t(),n("div",null,c)}const u=e(a,[["render",s],["__file","option.html.vue"]]),m=JSON.parse(`{"path":"/technology/javascript/elements/option.html","title":"<option>","lang":"zh-CN","frontmatter":{"title":"<option>","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"<option>元素表示下拉框（<select>，<optgroup>或<datalist>）里面的一个选项。它是 HTMLOptionElement 接口的实例。 属性 除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。 disabled：布尔值，表示该项是否可选择。 defaultSelec...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/elements/option.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"<option>"}],["meta",{"property":"og:description","content":"<option>元素表示下拉框（<select>，<optgroup>或<datalist>）里面的一个选项。它是 HTMLOptionElement 接口的实例。 属性 除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。 disabled：布尔值，表示该项是否可选择。 defaultSelec..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"<option>\\",\\"description\\":\\"<option>元素表示下拉框（<select>，<optgroup>或<datalist>）里面的一个选项。它是 HTMLOptionElement 接口的实例。 属性 除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。 disabled：布尔值，表示该项是否可选择。 defaultSelec...\\"}"]]},"headers":[{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"Option() 构造函数","slug":"option-构造函数","link":"#option-构造函数","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"technology/javascript/elements/option.md","localizedDate":"2023年1月11日","excerpt":"<p><code>&lt;option&gt;</code>元素表示下拉框（<code>&lt;select&gt;</code>，<code>&lt;optgroup&gt;</code>或<code>&lt;datalist&gt;</code>）里面的一个选项。它是 HTMLOptionElement 接口的实例。</p>\\n<h2>属性</h2>\\n<p>除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。</p>\\n<ul>\\n<li><code>disabled</code>：布尔值，表示该项是否可选择。</li>\\n<li><code>defaultSelected</code>：布尔值，表示该项是否默认选中。一旦设为<code>true</code>，该项的值就是<code>&lt;select&gt;</code>的默认值。</li>\\n<li><code>form</code>：返回<code>&lt;option&gt;</code>所在的表单元素。如果不属于任何表单，则返回<code>null</code>。该属性只读。</li>\\n<li><code>index</code>：整数，表示该选项在整个下拉列表里面的位置。该属性只读。</li>\\n<li><code>label</code>：字符串，表示对该选项的说明。如果该属性未设置，则返回该选项的文本内容。</li>\\n<li><code>selected</code>：布尔值，表示该选项是否选中。</li>\\n<li><code>text</code>：字符串，该选项的文本内容。</li>\\n<li><code>value</code>：字符串，该选项的值。表单提交时，上传的就是选中项的这个属性。</li>\\n</ul>","autoDesc":true}`);export{u as comp,m as data};