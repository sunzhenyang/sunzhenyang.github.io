import{_ as a,o as t,c as e,a as n,b as p,e as o,d as c,r as l}from"./app.41291239.js";const i={},u=o(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><blockquote><p>\u7531\u4E00\u4E2A\u53EF\u9009\u7684\u5B57\u7B26\u4E32 <code>type</code>\uFF08\u901A\u5E38\u662F MIME \u7C7B\u578B\uFF09\u548C <code>blobParts</code> \u7EC4\u6210\u7684\u4E00\u7CFB\u5217\u5176\u4ED6 <code>Blob</code> \u5BF9\u8C61\uFF0C\u5B57\u7B26\u4E32\u548C <code>BufferSource</code></p></blockquote><ul><li><code>blobParts</code> \u662F <code>Blob</code>/<code>BufferSource</code>/<code>String</code> \u7C7B\u578B\u7684\u503C\u7684 <strong>\u6570\u7EC4</strong></li><li><code>options</code> \u53EF\u9009\u5BF9\u8C61\uFF1A <ul><li><code>type</code>\uFF1A<code>Blob</code> \u7C7B\u578B\uFF0C\u901A\u5E38\u662F MIME \u7C7B\u578B\uFF0C\u4F8B\u5982 <code>image/png</code>\uFF0C</li><li><code>endings</code>\uFF1A\u662F\u5426\u8F6C\u6362\u6362\u884C\u7B26\uFF0C\u4F7F <code>Blob</code> \u5BF9\u5E94\u4E8E\u5F53\u524D\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6362\u884C\u7B26\uFF08<code>\\r\\n</code> \u6216 <code>\\n</code>\uFF09\u3002\u9ED8\u8BA4\u4E3A <code>&quot;transparent&quot;</code>\uFF08\u5565\u4E5F\u4E0D\u505A\uFF09\uFF0C\u4E0D\u8FC7\u4E5F\u53EF\u4EE5\u662F <code>&quot;native&quot;</code>\uFF08\u8F6C\u6362\uFF09\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4ECE\u5B57\u7B26\u4E32\u521B\u5EFA Blob</span>
<span class="token keyword">let</span> blob1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;ABCDEFG&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
blob1<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4ECE\u7C7B\u578B\u5316\u6570\u7EC4\uFF08typed array\uFF09\u548C\u5B57\u7B26\u4E32\u521B\u5EFA Blob</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E8C\u8FDB\u5236\u683C\u5F0F\u7684 &quot;hello&quot;</span>
<span class="token keyword">let</span> blob2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>hello<span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
blob2<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53EF\u4EE5\u4F7F\u7528 <code>clice</code> \u65B9\u6CD5\u6765\u63D0\u53D6 <code>Blob</code>\uFF0C\u65E0\u6CD5\u76F4\u63A5\u5728 <code>Blob</code> \u4E2D\u66F4\u6539\u6570\u636E\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7 <code>slice</code> \u83B7\u5F97 <code>Blob</code> \u7684\u591A\u4E2A\u90E8\u5206\uFF0C\u4ECE\u8FD9\u4E9B\u90E8\u5206\u521B\u5EFA\u65B0\u7684 <code>Blob</code> \u5BF9\u8C61\uFF0C\u5C06\u5B83\u4EEC\u7EC4\u6210\u65B0\u7684 <code>Blob</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>blob<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">[</span>byteStart<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>byteEnd<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>contentType<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>byteStart</code>\uFF1A\u8D77\u59CB\u5B57\u8282\uFF0C\u9ED8\u8BA4\u4E3A 0</li><li><code>byteEnd</code>\uFF1A\u6700\u540E\u4E00\u4E2A\u5B57\u8282\uFF08\u4E13\u6709\uFF0C\u9ED8\u8BA4\u4E3A\u6700\u540E\uFF09</li><li><code>contentType</code>\uFF1A\u65B0 blob \u7684 <code>type</code>\uFF0C\u9ED8\u8BA4\u4E0E\u6E90 blob \u76F8\u540C</li></ul><h2 id="blob-\u7528\u4F5C-url" tabindex="-1"><a class="header-anchor" href="#blob-\u7528\u4F5C-url" aria-hidden="true">#</a> Blob \u7528\u4F5C URL</h2><ul><li><code>URL.createObjectURL(blob)</code>\uFF1A \u751F\u6210\u7684 URL \u5B58\u50A8\u4E86\u4E00\u4E2A URL \u2192 <code>Blob</code> \u6620\u5C04\u3002\u56E0\u6B64\uFF0C\u6B64\u7C7B URL \u5F88\u77ED\uFF0C\u4F46\u53EF\u4EE5\u8BBF\u95EE <code>Blob</code><ul><li>\u751F\u6210\u6837\u5F0F\uFF1A<code>blob:http://localhost/3c532c62-832b-4023-9a56-5d8ff17bf805</code></li></ul></li><li><code>URL.revokeObjectURL(url)</code>\uFF1A\u4ECE\u5185\u90E8\u6620\u5C04\u4E2D\u79FB\u9664\u5F15\u7528\uFF0C\u56E0\u6B64\u5141\u8BB8 <code>Blob</code> \u88AB\u5220\u9664\uFF08\u5982\u679C\u6CA1\u6709\u5176\u4ED6\u5F15\u7528\u7684\u8BDD\uFF09\uFF0C\u5E76\u91CA\u653E\u5185\u5B58</li><li>\u5982\u679C\u4ECB\u610F\u5185\u5B58\uFF0C\u6211\u4EEC\u9700\u8981\u64A4\u9500\uFF08revoke\uFF09\u5B83\u4EEC</li><li>\u76F4\u63A5\u8BBF\u95EE <code>Blob</code>\uFF0C\u65E0\u9700\u201C\u7F16\u7801/\u89E3\u7801\u201D</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
link<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;hello.txt&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blob-\u8F6C-base64" tabindex="-1"><a class="header-anchor" href="#blob-\u8F6C-base64" aria-hidden="true">#</a> Blob \u8F6C Base64</h2><blockquote><p><code>data-url</code> \u7684\u5F62\u5F0F\u4E3A <code>data:[&lt;mediatype&gt;][;base64],&lt;data&gt;</code></p></blockquote><ul><li>\u56FE\u7247\u751F\u6210\u6837\u5F0F\uFF1A<code>&lt;img src=&quot;data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7&quot;&gt;</code></li><li>\u65E0\u9700\u64A4\u9500\uFF08revoke\uFF09\u4EFB\u4F55\u64CD\u4F5C</li><li>\u5BF9\u5927\u7684 <code>Blob</code> \u8FDB\u884C\u7F16\u7801\u65F6\uFF0C\u6027\u80FD\u548C\u5185\u5B58\u4F1A\u6709\u635F\u8017\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
link<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;hello.txt&#39;</span>
<span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span> <span class="token comment">// \u5C06 Blob \u8F6C\u6362\u4E3A base64 \u5E76\u8C03\u7528 onload</span>
reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>result<span class="token punctuation">)</span>
  link<span class="token punctuation">.</span>href <span class="token operator">=</span> reader<span class="token punctuation">.</span>result <span class="token comment">// data url</span>
  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56FE\u7247-\u8F6C-blob" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247-\u8F6C-blob" aria-hidden="true">#</a> \u56FE\u7247 \u8F6C Blob</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u4EFB\u4F55\u56FE\u50CF</span>
<span class="token keyword">let</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u751F\u6210\u540C\u5C3A\u5BF8\u7684 &lt;canvas&gt;</span>
<span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> img<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> img<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>

<span class="token keyword">let</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5411\u5176\u4E2D\u590D\u5236\u56FE\u50CF\uFF08\u6B64\u65B9\u6CD5\u5141\u8BB8\u526A\u88C1\u56FE\u50CF\uFF09</span>
context<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u53EF\u4EE5\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u6BD4\u5982\u65CB\u8F6C context.rotate()\uFF0C\u5E76\u5728 canvas \u4E0A\u505A\u5F88\u591A\u5176\u4ED6\u4E8B\u60C5</span>

<span class="token comment">// toBlob \u662F\u5F02\u6B65\u64CD\u4F5C\uFF0C\u7ED3\u675F\u540E\u4F1A\u8C03\u7528 callback</span>
canvas<span class="token punctuation">.</span><span class="token function">toBlob</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">blob</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// blob \u521B\u5EFA\u5B8C\u6210\uFF0C\u4E0B\u8F7D\u5B83</span>
  <span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  link<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;example.png&#39;</span><span class="token punctuation">;</span>

  link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5220\u9664\u5185\u90E8 blob \u5F15\u7528\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u53EF\u4EE5\u4ECE\u5185\u5B58\u4E2D\u5C06\u5176\u6E05\u9664</span>
  <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// async/await \u65B9\u5F0F</span>
<span class="token comment">// let blob = await new Promise(resolve =&gt; canvasElem.toBlob(resolve, &#39;image/png&#39;));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blob-\u8F6C-stream" tabindex="-1"><a class="header-anchor" href="#blob-\u8F6C-stream" aria-hidden="true">#</a> Blob \u8F6C Stream</h2>`,17),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Streams_API",target:"_blank",rel:"noopener noreferrer"},k=c("\u3010\u76F8\u5173\u6587\u6863\u3011");function d(b,v){const s=l("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[k,p(s)])])])}var g=a(i,[["render",d],["__file","02.Blob.html.vue"]]);export{g as default};
