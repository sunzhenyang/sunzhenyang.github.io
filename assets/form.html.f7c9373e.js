import{_ as n,o as e,c as a,e as s}from"./app.05e84ac7.js";const o={},c=s(`<p><code>&lt;form&gt;</code>\u5143\u7D20\u4EE3\u8868\u4E86\u8868\u5355\uFF0C\u7EE7\u627F\u4E86 HTMLFormElement \u63A5\u53E3\u3002</p><h2 id="htmlformelement-\u7684\u5B9E\u4F8B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#htmlformelement-\u7684\u5B9E\u4F8B\u5C5E\u6027" aria-hidden="true">#</a> HTMLFormElement \u7684\u5B9E\u4F8B\u5C5E\u6027</h2><ul><li><code>elements</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u6210\u5458\u662F\u5C5E\u4E8E\u8BE5\u8868\u5355\u7684\u6240\u6709\u63A7\u4EF6\u5143\u7D20\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li><code>length</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\uFF0C\u8868\u793A\u5C5E\u4E8E\u8BE5\u8868\u5355\u7684\u63A7\u4EF6\u6570\u91CF\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li><code>name</code>\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u8BE5\u8868\u5355\u7684\u540D\u79F0\u3002</li><li><code>method</code>\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u63D0\u4EA4\u7ED9\u670D\u52A1\u5668\u65F6\u6240\u4F7F\u7528\u7684 HTTP \u65B9\u6CD5\u3002</li><li><code>target</code>\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u8868\u5355\u63D0\u4EA4\u540E\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u636E\u7684\u5C55\u793A\u4F4D\u7F6E\u3002</li><li><code>action</code>\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u8868\u5355\u63D0\u4EA4\u6570\u636E\u7684 URL\u3002</li><li><code>enctype</code>\uFF08\u6216<code>encoding</code>\uFF09\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u8868\u5355\u63D0\u4EA4\u6570\u636E\u7684\u7F16\u7801\u65B9\u6CD5\uFF0C\u53EF\u80FD\u7684\u503C\u6709<code>application/x-www-form-urlencoded</code>\u3001<code>multipart/form-data</code>\u548C<code>text/plain</code>\u3002</li><li><code>acceptCharset</code>\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u670D\u52A1\u5668\u6240\u80FD\u63A5\u53D7\u7684\u5B57\u7B26\u7F16\u7801\uFF0C\u591A\u4E2A\u7F16\u7801\u683C\u5F0F\u4E4B\u95F4\u4F7F\u7528\u9017\u53F7\u6216\u7A7A\u683C\u5206\u9694\u3002</li><li><code>autocomplete</code>\uFF1A\u5B57\u7B26\u4E32<code>on</code>\u6216<code>off</code>\uFF0C\u8868\u793A\u6D4F\u89C8\u5668\u662F\u5426\u8981\u5BF9<code>&lt;input&gt;</code>\u63A7\u4EF6\u63D0\u4F9B\u81EA\u52A8\u8865\u5168\u3002</li><li><code>noValidate</code>\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u5173\u95ED\u8868\u5355\u7684\u81EA\u52A8\u6821\u9A8C\u3002</li></ul><h2 id="htmlformelement-\u7684\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#htmlformelement-\u7684\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> HTMLFormElement \u7684\u5B9E\u4F8B\u65B9\u6CD5</h2><ul><li><code>submit()</code>\uFF1A\u63D0\u4EA4\u8868\u5355\uFF0C\u4F46\u662F\u4E0D\u4F1A\u89E6\u53D1<code>submit</code>\u4E8B\u4EF6\u548C\u8868\u5355\u7684\u81EA\u52A8\u6821\u9A8C\u3002</li><li><code>reset()</code>\uFF1A\u91CD\u7F6E\u8868\u5355\u63A7\u4EF6\u7684\u503C\u4E3A\u9ED8\u8BA4\u503C\u3002</li><li><code>checkValidity()</code>\uFF1A\u5982\u679C\u63A7\u4EF6\u80FD\u591F\u901A\u8FC7\u81EA\u52A8\u6821\u9A8C\uFF0C\u8FD4\u56DE<code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE<code>false</code>\uFF0C\u540C\u65F6\u89E6\u53D1<code>invalid</code>\u4E8B\u4EF6\u3002</li></ul><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u521B\u5EFA\u8868\u5355\u5E76\u63D0\u4EA4\u7684\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> f <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>action <span class="token operator">=</span> <span class="token string">&#39;/cgi-bin/some.cgi&#39;</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[c];function l(i,d){return e(),a("div",null,t)}var u=n(o,[["render",l],["__file","form.html.vue"]]);export{u as default};