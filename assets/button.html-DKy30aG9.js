import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as c,c as l,b as t,d as e,e as p,f as n}from"./app-DdwQwFQ1.js";const d={},u=n(`<p><code>&lt;button&gt;</code>元素继承了<code>HTMLButtonElement</code>接口。它有以下的实例属性。</p><p><strong>（1）HTMLButtonElement.accessKey</strong></p><p><code>HTMLButtonElement.accessKey</code>属性返回一个字符串，表示键盘上对应的键，通过<code>Alt + 这个键</code>可以让按钮获得焦点。该属性可读写。</p><p><strong>（2）HTMLButtonElement.autofocus</strong></p><p><code>HTMLButtonElement.autofocus</code>属性是一个布尔值，表示页面加载过程中，按钮是否会自动获得焦点。该属性可读写。</p><p><strong>（3）HTMLButtonElement.disabled</strong></p><p><code>HTMLButtonElement.disabled</code>属性是一个布尔值，表示该按钮是否禁止点击。该属性可读写。</p><p><strong>（4）HTMLButtonElement.form</strong></p><p><code>HTMLButtonElement.form</code>属性是一个表单元素，返回该按钮所在的表单。该属性只读。如果按钮不属于任何表单，该属性返回<code>null</code>。</p><p><strong>（5）HTMLButtonElement.formAction</strong></p><p><code>HTMLButtonElement.formAction</code>返回一个字符串，表示表单提交的 URL。该属性可读写，一旦设置了值，点击按钮就会提交到该属性指定的 URL，而不是<code>&lt;form&gt;</code>元素指定的 URL。</p><p><strong>（6）HTMLButtonElement.formEnctype</strong></p><p><code>HTMLButtonElement.formEnctype</code>属性是一个字符串，表示数据提交到服务器的编码类型。该属性可读写，一旦设置了值，点击按钮会按照该属性指定的编码方式，而不是<code>&lt;form&gt;</code>元素指定的编码方式。</p><p>该属性可以取以下的值。</p><ul><li><code>application/x-www-form-urlencoded</code>（默认值）</li><li><code>multipart/form-data</code>（上传文件的编码方式）</li><li><code>text/plain</code></li></ul><p><strong>（7）HTMLButtonElement.formMethod</strong></p><p><code>HTMLButtonElement.formMethod</code>属性是一个字符串，表示浏览器提交表单的 HTTP 方法。该属性可读写，一旦设置了值，点击后就会采用该属性指定的 HTTP 方法，而不是<code>&lt;form&gt;</code>元素指定的编码方法。</p><p><strong>（8）HTMLButtonElement.formNoValidate</strong></p><p><code>HTMLButtonElement.formNoValidate</code>属性是一个布尔值，表示点击按钮提交表单时，是否要跳过表单校验的步骤。该属性可读写，一旦设置会覆盖<code>&lt;form&gt;</code>元素的<code>novalidate</code>属性。</p><p><strong>（9）HTMLButtonElement.formTarget</strong></p><p><code>HTMLButtonElement.formTarget</code>属性是一个字符串，指定了提交了表单以后，哪个窗口展示服务器返回的内容。该属性可读写，一旦设置会覆盖<code>&lt;form&gt;</code>元素的<code>target</code>属性。</p><p><strong>（10）HTMLButtonElement.labels</strong></p><p><code>HTMLButtonElement.labels</code>返回<code>NodeList</code>实例，表示那些绑定按钮的<code>&lt;label&gt;</code>元素。该属性只读。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* HTML 代码如下
  &lt;label id=&quot;label1&quot; for=&quot;test&quot;&gt;Label 1&lt;/label&gt;
  &lt;button id=&quot;test&quot;&gt;Button&lt;/button&gt;
  &lt;label id=&quot;label2&quot; for=&quot;test&quot;&gt;Label 2&lt;/label&gt;
*/</span>

<span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> button<span class="token punctuation">.</span>labels<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>button<span class="token punctuation">.</span>labels<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// &quot;Label 1&quot;</span>
<span class="token comment">// &quot;Label 2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，两个<code>&lt;label&gt;</code>元素绑定<code>&lt;button&gt;</code>元素。<code>button.labels</code>返回这两个<code>&lt;label&gt;</code>元素。</p>`,25),r={href:"http://HTMLButtonElement.name",target:"_blank",rel:"noopener noreferrer"},i=n("<p><code>HTMLButtonElement.name</code>属性是一个字符串，表示按钮元素的<code>name</code>属性。如果没有设置<code>name</code>属性，则返回空字符串。该属性可读写。</p><p><strong>（12）HTMLButtonElement.tabIndex</strong></p><p><code>HTMLButtonElement.tabIndex</code>是一个整数，代表按钮元素的 Tab 键顺序。该属性可读写。</p><p><strong>（13）HTMLButtonElement.type</strong></p><p><code>HTMLButtonElement.type</code>属性是一个字符串，表示按钮的行为。该属性可读写，可能取以下的值。</p><ul><li><code>submit</code>：默认值，表示提交表单。</li><li><code>reset</code>：重置表单。</li><li><code>button</code>：没有任何默认行为。</li></ul><p><strong>（14）HTMLButtonElement.validationMessage</strong></p><p><code>HTMLButtonElement.validationMessage</code>属性是一个字符串，表示没有通过校验时显示的提示信息。该属性只读。</p><p><strong>（15）HTMLButtonElement.validity</strong></p><p><code>HTMLButtonElement.validity</code>属性返回该按钮的校验状态（<code>ValidityState</code>）。该属性只读。</p><p><strong>（16）HTMLButtonElement.value</strong></p><p><code>HTMLButtonElement.value</code>属性返回该按钮绑定的值。该属性可读写。</p><p><strong>（17）HTMLButtonElement.willValidate</strong></p><p><code>HTMLButtonElement.willValidate</code>属性是一个布尔值，表示该按钮提交表单时是否将被校验，默认为<code>false</code>。该属性只读。</p>",14);function m(g,b){const o=s("ExternalLinkIcon");return c(),l("div",null,[u,t("p",null,[t("strong",null,[e("（11）"),t("a",r,[e("HTMLButtonElement.name"),p(o)])])]),i])}const B=a(d,[["render",m],["__file","button.html.vue"]]),E=JSON.parse(`{"path":"/technology/javascript/elements/button.html","title":"<button>","lang":"zh-CN","frontmatter":{"title":"<button>","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"<button>元素继承了HTMLButtonElement接口。它有以下的实例属性。 （1）HTMLButtonElement.accessKey HTMLButtonElement.accessKey属性返回一个字符串，表示键盘上对应的键，通过Alt + 这个键可以让按钮获得焦点。该属性可读写。 （2）HTMLButtonElement.autof...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/elements/button.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"<button>"}],["meta",{"property":"og:description","content":"<button>元素继承了HTMLButtonElement接口。它有以下的实例属性。 （1）HTMLButtonElement.accessKey HTMLButtonElement.accessKey属性返回一个字符串，表示键盘上对应的键，通过Alt + 这个键可以让按钮获得焦点。该属性可读写。 （2）HTMLButtonElement.autof..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"<button>\\",\\"description\\":\\"<button>元素继承了HTMLButtonElement接口。它有以下的实例属性。 （1）HTMLButtonElement.accessKey HTMLButtonElement.accessKey属性返回一个字符串，表示键盘上对应的键，通过Alt + 这个键可以让按钮获得焦点。该属性可读写。 （2）HTMLButtonElement.autof...\\"}"]]},"headers":[],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":2.81,"words":843},"filePathRelative":"technology/javascript/elements/button.md","localizedDate":"2023年1月11日","excerpt":"<p><code>&lt;button&gt;</code>元素继承了<code>HTMLButtonElement</code>接口。它有以下的实例属性。</p>\\n<p><strong>（1）HTMLButtonElement.accessKey</strong></p>\\n<p><code>HTMLButtonElement.accessKey</code>属性返回一个字符串，表示键盘上对应的键，通过<code>Alt + 这个键</code>可以让按钮获得焦点。该属性可读写。</p>\\n<p><strong>（2）HTMLButtonElement.autofocus</strong></p>","autoDesc":true}`);export{B as comp,E as data};