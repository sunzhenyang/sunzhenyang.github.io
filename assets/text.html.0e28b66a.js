import{_ as n,o as s,c as a,e}from"./app.41291239.js";const t={},c=e(`<h2 id="text-\u8282\u70B9\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#text-\u8282\u70B9\u7684\u6982\u5FF5" aria-hidden="true">#</a> Text \u8282\u70B9\u7684\u6982\u5FF5</h2><p>\u6587\u672C\u8282\u70B9\uFF08<code>Text</code>\uFF09\u4EE3\u8868\u5143\u7D20\u8282\u70B9\uFF08<code>Element</code>\uFF09\u548C\u5C5E\u6027\u8282\u70B9\uFF08<code>Attribute</code>\uFF09\u7684\u6587\u672C\u5185\u5BB9\u3002\u5982\u679C\u4E00\u4E2A\u8282\u70B9\u53EA\u5305\u542B\u4E00\u6BB5\u6587\u672C\uFF0C\u90A3\u4E48\u5B83\u5C31\u6709\u4E00\u4E2A\u6587\u672C\u5B50\u8282\u70B9\uFF0C\u4EE3\u8868\u8BE5\u8282\u70B9\u7684\u6587\u672C\u5185\u5BB9\u3002</p><p>\u901A\u5E38\u6211\u4EEC\u4F7F\u7528\u7236\u8282\u70B9\u7684<code>firstChild</code>\u3001<code>nextSibling</code>\u7B49\u5C5E\u6027\u83B7\u53D6\u6587\u672C\u8282\u70B9\uFF0C\u6216\u8005\u4F7F\u7528<code>Document</code>\u8282\u70B9\u7684<code>createTextNode</code>\u65B9\u6CD5\u521B\u9020\u4E00\u4E2A\u6587\u672C\u8282\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u6587\u672C\u8282\u70B9</span>
<span class="token keyword">var</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>

<span class="token comment">// \u521B\u9020\u6587\u672C\u8282\u70B9</span>
<span class="token keyword">var</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">&#39;Hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>textNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4F\u89C8\u5668\u539F\u751F\u63D0\u4F9B\u4E00\u4E2A<code>Text</code>\u6784\u9020\u51FD\u6570\u3002\u5B83\u8FD4\u56DE\u4E00\u4E2A\u6587\u672C\u8282\u70B9\u5B9E\u4F8B\u3002\u5B83\u7684\u53C2\u6570\u5C31\u662F\u8BE5\u6587\u672C\u8282\u70B9\u7684\u6587\u672C\u5185\u5BB9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7A7A\u5B57\u7B26\u4E32</span>
<span class="token keyword">var</span> text1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u975E\u7A7A\u5B57\u7B26\u4E32</span>
<span class="token keyword">var</span> text2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string">&#39;This is a text node&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u7531\u4E8E\u7A7A\u683C\u4E5F\u662F\u4E00\u4E2A\u5B57\u7B26\uFF0C\u6240\u4EE5\u54EA\u6015\u53EA\u6709\u4E00\u4E2A\u7A7A\u683C\uFF0C\u4E5F\u4F1A\u5F62\u6210\u6587\u672C\u8282\u70B9\u3002\u6BD4\u5982\uFF0C<code>&lt;p&gt; &lt;/p&gt;</code>\u5305\u542B\u4E00\u4E2A\u7A7A\u683C\uFF0C\u5B83\u7684\u5B50\u8282\u70B9\u5C31\u662F\u4E00\u4E2A\u6587\u672C\u8282\u70B9\u3002</p><p>\u6587\u672C\u8282\u70B9\u9664\u4E86\u7EE7\u627F<code>Node</code>\u63A5\u53E3\uFF0C\u8FD8\u7EE7\u627F\u4E86<code>CharacterData</code>\u63A5\u53E3\u3002<code>Node</code>\u63A5\u53E3\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u8BF7\u53C2\u8003\u300ANode \u63A5\u53E3\u300B\u4E00\u7AE0\uFF0C\u8FD9\u91CC\u4E0D\u518D\u91CD\u590D\u4ECB\u7ECD\u4E86\uFF0C\u4EE5\u4E0B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u5927\u90E8\u5206\u6765\u81EA<code>CharacterData</code>\u63A5\u53E3\u3002</p><h2 id="text-\u8282\u70B9\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#text-\u8282\u70B9\u7684\u5C5E\u6027" aria-hidden="true">#</a> Text \u8282\u70B9\u7684\u5C5E\u6027</h2><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><p><code>data</code>\u5C5E\u6027\u7B49\u540C\u4E8E<code>nodeValue</code>\u5C5E\u6027\uFF0C\u7528\u6765\u8BBE\u7F6E\u6216\u8BFB\u53D6\u6587\u672C\u8282\u70B9\u7684\u5185\u5BB9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BFB\u53D6\u6587\u672C\u5185\u5BB9</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>data
<span class="token comment">// \u7B49\u540C\u4E8E</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>nodeValue

<span class="token comment">// \u8BBE\u7F6E\u6587\u672C\u5185\u5BB9</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wholetext" tabindex="-1"><a class="header-anchor" href="#wholetext" aria-hidden="true">#</a> wholeText</h3><p><code>wholeText</code>\u5C5E\u6027\u5C06\u5F53\u524D\u6587\u672C\u8282\u70B9\u4E0E\u6BD7\u90BB\u7684\u6587\u672C\u8282\u70B9\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u6574\u4F53\u8FD4\u56DE\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C<code>wholeText</code>\u5C5E\u6027\u7684\u8FD4\u56DE\u503C\uFF0C\u4E0E<code>data</code>\u5C5E\u6027\u548C<code>textContent</code>\u5C5E\u6027\u76F8\u540C\u3002\u4F46\u662F\uFF0C\u67D0\u4E9B\u7279\u6B8A\u60C5\u51B5\u4F1A\u6709\u5DEE\u5F02\u3002</p><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0CHTML \u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>para<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span> C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u65F6\uFF0C\u6587\u672C\u8282\u70B9\u7684<code>wholeText</code>\u5C5E\u6027\u548C<code>data</code>\u5C5E\u6027\uFF0C\u8FD4\u56DE\u503C\u76F8\u540C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;para&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
el<span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>wholeText <span class="token comment">// &quot;A &quot;</span>
el<span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>data <span class="token comment">// &quot;A &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u4E00\u65E6\u79FB\u9664<code>&lt;em&gt;</code>\u8282\u70B9\uFF0C<code>wholeText</code>\u5C5E\u6027\u4E0E<code>data</code>\u5C5E\u6027\u5C31\u4F1A\u6709\u5DEE\u5F02\uFF0C\u56E0\u4E3A\u8FD9\u65F6\u5176\u5B9E<code>&lt;p&gt;</code>\u8282\u70B9\u4E0B\u9762\u5305\u542B\u4E86\u4E24\u4E2A\u6BD7\u90BB\u7684\u6587\u672C\u8282\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>el<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>para<span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
el<span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>wholeText <span class="token comment">// &quot;A C&quot;</span>
el<span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>data <span class="token comment">// &quot;A &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="length" tabindex="-1"><a class="header-anchor" href="#length" aria-hidden="true">#</a> length</h3><p><code>length</code>\u5C5E\u6027\u8FD4\u56DE\u5F53\u524D\u6587\u672C\u8282\u70B9\u7684\u6587\u672C\u957F\u5EA6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nextelementsibling-previouselementsibling" tabindex="-1"><a class="header-anchor" href="#nextelementsibling-previouselementsibling" aria-hidden="true">#</a> nextElementSibling\uFF0CpreviousElementSibling</h3><p><code>nextElementSibling</code>\u5C5E\u6027\u8FD4\u56DE\u7D27\u8DDF\u5728\u5F53\u524D\u6587\u672C\u8282\u70B9\u540E\u9762\u7684\u90A3\u4E2A\u540C\u7EA7\u5143\u7D20\u8282\u70B9\u3002\u5982\u679C\u53D6\u4E0D\u5230\u5143\u7D20\u8282\u70B9\uFF0C\u5219\u8FD4\u56DE<code>null</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4E3A</span>
<span class="token comment">// &lt;div&gt;Hello &lt;em&gt;World&lt;/em&gt;&lt;/div&gt;</span>
<span class="token keyword">var</span> tn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>
tn<span class="token punctuation">.</span>nextElementSibling
<span class="token comment">// &lt;em&gt;World&lt;/em&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>previousElementSibling</code>\u5C5E\u6027\u8FD4\u56DE\u5F53\u524D\u6587\u672C\u8282\u70B9\u524D\u9762\u6700\u8FD1\u7684\u540C\u7EA7\u5143\u7D20\u8282\u70B9\u3002\u5982\u679C\u53D6\u4E0D\u5230\u5143\u7D20\u8282\u70B9\uFF0C\u5219\u8FD4\u56DE<code>null\uFF1A</code>\u3002</p><h2 id="text-\u8282\u70B9\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#text-\u8282\u70B9\u7684\u65B9\u6CD5" aria-hidden="true">#</a> Text \u8282\u70B9\u7684\u65B9\u6CD5</h2><h3 id="appenddata-deletedata-insertdata-replacedata-substringdata" tabindex="-1"><a class="header-anchor" href="#appenddata-deletedata-insertdata-replacedata-substringdata" aria-hidden="true">#</a> appendData()\uFF0CdeleteData()\uFF0CinsertData()\uFF0CreplaceData()\uFF0CsubStringData()</h3><p>\u4EE5\u4E0B5\u4E2A\u65B9\u6CD5\u90FD\u662F\u7F16\u8F91<code>Text</code>\u8282\u70B9\u6587\u672C\u5185\u5BB9\u7684\u65B9\u6CD5\u3002</p><ul><li><code>appendData()</code>\uFF1A\u5728<code>Text</code>\u8282\u70B9\u5C3E\u90E8\u8FFD\u52A0\u5B57\u7B26\u4E32\u3002</li><li><code>deleteData()</code>\uFF1A\u5220\u9664<code>Text</code>\u8282\u70B9\u5185\u90E8\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5B50\u5B57\u7B26\u4E32\u5F00\u59CB\u4F4D\u7F6E\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u5B50\u5B57\u7B26\u4E32\u957F\u5EA6\u3002</li><li><code>insertData()</code>\uFF1A\u5728<code>Text</code>\u8282\u70B9\u63D2\u5165\u5B57\u7B26\u4E32\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u63D2\u5165\u4F4D\u7F6E\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u63D2\u5165\u7684\u5B50\u5B57\u7B26\u4E32\u3002</li><li><code>replaceData()</code>\uFF1A\u7528\u4E8E\u66FF\u6362\u6587\u672C\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u66FF\u6362\u5F00\u59CB\u4F4D\u7F6E\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u9700\u8981\u88AB\u66FF\u6362\u6389\u7684\u957F\u5EA6\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u4E3A\u65B0\u52A0\u5165\u7684\u5B57\u7B26\u4E32\u3002</li><li><code>subStringData()</code>\uFF1A\u7528\u4E8E\u83B7\u53D6\u5B50\u5B57\u7B26\u4E32\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5B50\u5B57\u7B26\u4E32\u5728<code>Text</code>\u8282\u70B9\u4E2D\u7684\u5F00\u59CB\u4F4D\u7F6E\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u5B50\u5B57\u7B26\u4E32\u957F\u5EA6\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u4E3A</span>
<span class="token comment">// &lt;p&gt;Hello World&lt;/p&gt;</span>
<span class="token keyword">var</span> pElementText <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>

pElementText<span class="token punctuation">.</span><span class="token function">appendData</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u9875\u9762\u663E\u793A Hello World!</span>
pElementText<span class="token punctuation">.</span><span class="token function">deleteData</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u9875\u9762\u663E\u793A Hello W</span>
pElementText<span class="token punctuation">.</span><span class="token function">insertData</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u9875\u9762\u663E\u793A Hello WHello</span>
pElementText<span class="token punctuation">.</span><span class="token function">replaceData</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u9875\u9762\u663E\u793A Hello WWorld</span>
pElementText<span class="token punctuation">.</span><span class="token function">substringData</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u9875\u9762\u663E\u793A\u4E0D\u53D8\uFF0C\u8FD4\u56DE&quot;World &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove()</h3><p><code>remove</code>\u65B9\u6CD5\u7528\u4E8E\u79FB\u9664\u5F53\u524D<code>Text</code>\u8282\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u4E3A</span>
<span class="token comment">// &lt;p&gt;Hello World&lt;/p&gt;</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u73B0\u5728 HTML \u4EE3\u7801\u4E3A</span>
<span class="token comment">// &lt;p&gt;&lt;/p&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="splittext" tabindex="-1"><a class="header-anchor" href="#splittext" aria-hidden="true">#</a> splitText()</h3><p><code>splitText</code>\u65B9\u6CD5\u5C06<code>Text</code>\u8282\u70B9\u4E00\u5206\u4E3A\u4E8C\uFF0C\u53D8\u6210\u4E24\u4E2A\u6BD7\u90BB\u7684<code>Text</code>\u8282\u70B9\u3002\u5B83\u7684\u53C2\u6570\u5C31\u662F\u5206\u5272\u4F4D\u7F6E\uFF08\u4ECE\u96F6\u5F00\u59CB\uFF09\uFF0C\u5206\u5272\u5230\u8BE5\u4F4D\u7F6E\u7684\u5B57\u7B26\u524D\u7ED3\u675F\u3002\u5982\u679C\u5206\u5272\u4F4D\u7F6E\u4E0D\u5B58\u5728\uFF0C\u5C06\u62A5\u9519\u3002</p><p>\u5206\u5272\u540E\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u5206\u5272\u4F4D\u7F6E\u540E\u65B9\u7684\u5B57\u7B26\u4E32\uFF0C\u800C\u539F<code>Text</code>\u8282\u70B9\u53D8\u6210\u53EA\u5305\u542B\u5206\u5272\u4F4D\u7F6E\u524D\u65B9\u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// html \u4EE3\u7801\u4E3A &lt;p id=&quot;p&quot;&gt;foobar&lt;/p&gt;</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> textnode <span class="token operator">=</span> p<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>

<span class="token keyword">var</span> newText <span class="token operator">=</span> textnode<span class="token punctuation">.</span><span class="token function">splitText</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
newText <span class="token comment">// &quot;bar&quot;</span>
textnode <span class="token comment">// &quot;foo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7236\u5143\u7D20\u8282\u70B9\u7684<code>normalize</code>\u65B9\u6CD5\u53EF\u4EE5\u5C06\u6BD7\u90BB\u7684\u4E24\u4E2A<code>Text</code>\u8282\u70B9\u5408\u5E76\u3002</p><p>\u63A5\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u6587\u672C\u8282\u70B9\u7684<code>splitText</code>\u65B9\u6CD5\u5C06\u4E00\u4E2A<code>Text</code>\u8282\u70B9\u5206\u5272\u6210\u4E24\u4E2A\uFF0C\u7236\u5143\u7D20\u7684<code>normalize</code>\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u9006\u64CD\u4F5C\uFF0C\u5C06\u5B83\u4EEC\u5408\u5E76\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>p<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length <span class="token comment">// 2</span>

<span class="token comment">// \u5C06\u6BD7\u90BB\u7684\u4E24\u4E2A Text \u8282\u70B9\u5408\u5E76</span>
p<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documentfragment-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#documentfragment-\u8282\u70B9" aria-hidden="true">#</a> DocumentFragment \u8282\u70B9</h2><p><code>DocumentFragment</code>\u8282\u70B9\u4EE3\u8868\u4E00\u4E2A\u6587\u6863\u7684\u7247\u6BB5\uFF0C\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684 DOM \u6811\u5F62\u7ED3\u6784\u3002\u5B83\u6CA1\u6709\u7236\u8282\u70B9\uFF0C<code>parentNode</code>\u8FD4\u56DE<code>null</code>\uFF0C\u4F46\u662F\u53EF\u4EE5\u63D2\u5165\u4EFB\u610F\u6570\u91CF\u7684\u5B50\u8282\u70B9\u3002\u5B83\u4E0D\u5C5E\u4E8E\u5F53\u524D\u6587\u6863\uFF0C\u64CD\u4F5C<code>DocumentFragment</code>\u8282\u70B9\uFF0C\u8981\u6BD4\u76F4\u63A5\u64CD\u4F5C DOM \u6811\u5FEB\u5F97\u591A\u3002</p><p>\u5B83\u4E00\u822C\u7528\u4E8E\u6784\u5EFA\u4E00\u4E2A DOM \u7ED3\u6784\uFF0C\u7136\u540E\u63D2\u5165\u5F53\u524D\u6587\u6863\u3002<code>document.createDocumentFragment</code>\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u6D4F\u89C8\u5668\u539F\u751F\u7684<code>DocumentFragment</code>\u6784\u9020\u51FD\u6570\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684<code>DocumentFragment</code>\u8282\u70B9\u3002\u7136\u540E\u518D\u4F7F\u7528\u5176\u4ED6 DOM \u65B9\u6CD5\uFF0C\u5411\u5176\u6DFB\u52A0\u5B50\u8282\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> docFrag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">var</span> docFrag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
li<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
docFrag<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>docFrag<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u521B\u5EFA\u4E86\u4E00\u4E2A<code>DocumentFragment</code>\u8282\u70B9\uFF0C\u7136\u540E\u5C06\u4E00\u4E2A<code>li</code>\u8282\u70B9\u6DFB\u52A0\u5728\u5B83\u91CC\u9762\uFF0C\u6700\u540E\u5C06<code>DocumentFragment</code>\u8282\u70B9\u79FB\u52A8\u5230\u539F\u6587\u6863\u3002</p><p>\u6CE8\u610F\uFF0C<code>DocumentFragment</code>\u8282\u70B9\u672C\u8EAB\u4E0D\u80FD\u88AB\u63D2\u5165\u5F53\u524D\u6587\u6863\u3002\u5F53\u5B83\u4F5C\u4E3A<code>appendChild()</code>\u3001<code>insertBefore()</code>\u3001<code>replaceChild()</code>\u7B49\u65B9\u6CD5\u7684\u53C2\u6570\u65F6\uFF0C\u662F\u5B83\u7684\u6240\u6709\u5B50\u8282\u70B9\u63D2\u5165\u5F53\u524D\u6587\u6863\uFF0C\u800C\u4E0D\u662F\u5B83\u81EA\u8EAB\u3002\u4E00\u65E6<code>DocumentFragment</code>\u8282\u70B9\u88AB\u6DFB\u52A0\u8FDB\u5F53\u524D\u6587\u6863\uFF0C\u5B83\u81EA\u8EAB\u5C31\u53D8\u6210\u4E86\u7A7A\u8282\u70B9\uFF08<code>textContent</code>\u5C5E\u6027\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF09\uFF0C\u53EF\u4EE5\u88AB\u518D\u6B21\u4F7F\u7528\u3002\u5982\u679C\u60F3\u8981\u4FDD\u5B58<code>DocumentFragment</code>\u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>cloneNode</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document
  <span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>docFrag<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8FD9\u6837\u6DFB\u52A0<code>DocumentFragment</code>\u8282\u70B9\u8FDB\u5165\u5F53\u524D\u6587\u6863\uFF0C\u4E0D\u4F1A\u6E05\u7A7A<code>DocumentFragment</code>\u8282\u70B9\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u4F7F\u7528<code>DocumentFragment</code>\u53CD\u8F6C\u4E00\u4E2A\u6307\u5B9A\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u7684\u987A\u5E8F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> f <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>lastChild<span class="token punctuation">)</span> f<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>lastChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
  n<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>DocumentFragment</code>\u8282\u70B9\u5BF9\u8C61\u6CA1\u6709\u81EA\u5DF1\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5168\u90E8\u7EE7\u627F\u81EA<code>Node</code>\u8282\u70B9\u548C<code>ParentNode</code>\u63A5\u53E3\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>DocumentFragment</code>\u8282\u70B9\u6BD4<code>Node</code>\u8282\u70B9\u591A\u51FA\u4EE5\u4E0B\u56DB\u4E2A\u5C5E\u6027\u3002</p><ul><li><code>children</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u52A8\u6001\u7684<code>HTMLCollection</code>\u96C6\u5408\u5BF9\u8C61\uFF0C\u5305\u62EC\u5F53\u524D<code>DocumentFragment</code>\u5BF9\u8C61\u7684\u6240\u6709\u5B50\u5143\u7D20\u8282\u70B9\u3002</li><li><code>firstElementChild</code>\uFF1A\u8FD4\u56DE\u5F53\u524D<code>DocumentFragment</code>\u5BF9\u8C61\u7684\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u8282\u70B9\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u8FD4\u56DE<code>null</code>\u3002</li><li><code>lastElementChild</code>\uFF1A\u8FD4\u56DE\u5F53\u524D<code>DocumentFragment</code>\u5BF9\u8C61\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u8282\u70B9\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u8FD4\u56DE<code>null</code>\u3002</li><li><code>childElementCount</code>\uFF1A\u8FD4\u56DE\u5F53\u524D<code>DocumentFragment</code>\u5BF9\u8C61\u7684\u6240\u6709\u5B50\u5143\u7D20\u6570\u91CF\u3002</li></ul>`,54),p=[c];function o(l,i){return s(),a("div",null,p)}var d=n(t,[["render",o],["__file","text.html.vue"]]);export{d as default};
