import{_ as n,o as s,c as a,e}from"./app.41291239.js";const p={},t=e(`<h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h2><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u8BF7\u6C42\u67D0\u4E2A\u57DF\u540D\u4E0B\u7684\u591A\u4E2A\u63A5\u53E3\uFF0C\u6211\u4EEC\u4E0D\u5E0C\u671B\u6BCF\u6B21\u53D1\u9001\u8BF7\u6C42\u90FD\u586B\u5199\u5B8C\u6574\u7684 url\uFF0C\u5E0C\u671B\u53EF\u4EE5\u914D\u7F6E\u4E00\u4E2A <code>baseURL</code>\uFF0C\u4E4B\u540E\u90FD\u53EF\u4EE5\u4F20\u76F8\u5BF9\u8DEF\u5F84\u3002\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/get&#39;</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/post&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u4E00\u65E6\u914D\u7F6E\u4E86 <code>baseURL</code>\uFF0C\u4E4B\u540E\u8BF7\u6C42\u4F20\u5165\u7684 <code>url</code> \u90FD\u4F1A\u548C\u6211\u4EEC\u7684 <code>baseURL</code> \u62FC\u63A5\u6210\u5B8C\u6574\u7684\u7EDD\u5BF9\u5730\u5740\uFF0C\u9664\u975E\u8BF7\u6C42\u4F20\u5165\u7684 <code>url</code> \u5DF2\u7ECF\u662F\u7EDD\u5BF9\u5730\u5740\u3002</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><p>\u9996\u5148\u4FEE\u6539\u4E00\u4E0B\u7C7B\u578B\u5B9A\u4E49\u3002</p><p><code>types/index.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  baseURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u5B9E\u73B0 2 \u4E2A\u8F85\u52A9\u51FD\u6570\u3002</p><p><code>helpers/url.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isAbsoluteURL</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">combineURL</span><span class="token punctuation">(</span>baseURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> relativeURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> relativeURL <span class="token operator">?</span> baseURL<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> relativeURL<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> baseURL
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u6211\u4EEC\u6765\u8C03\u7528\u8FD9\u4FE9\u4E2A\u8F85\u52A9\u51FD\u6570\u3002</p><p><code>core/dispatchRequest.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">transformURL</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> paramsSerializer<span class="token punctuation">,</span> baseURL <span class="token punctuation">}</span> <span class="token operator">=</span> config
  <span class="token keyword">if</span> <span class="token punctuation">(</span>baseURL <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isAbsoluteURL</span><span class="token punctuation">(</span>url<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    url <span class="token operator">=</span> <span class="token function">combineURL</span><span class="token punctuation">(</span>baseURL<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">buildURL</span><span class="token punctuation">(</span>url<span class="token operator">!</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> paramsSerializer<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#demo-\u7F16\u5199" aria-hidden="true">#</a> demo \u7F16\u5199</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://img.mukewang.com/&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;5cc01a7b0001a33718720632.jpg&#39;</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A demo \u975E\u5E38\u7B80\u5355\uFF0C\u6211\u4EEC\u8BF7\u6C42\u4E86\u6155\u8BFE\u7F51\u7684 2 \u5F20\u56FE\u7247\uFF0C\u6CE8\u610F\u5F53\u7B2C\u4E8C\u4E2A\u8BF7\u6C42 <code>url</code> \u5DF2\u7ECF\u662F\u7EDD\u5BF9\u5730\u5740\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E76\u4E0D\u4F1A\u518D\u53BB\u62FC\u63A5 <code>baseURL</code>\u3002</p><p>\u81F3\u6B64\uFF0C<code>ts-axios</code> \u5C31\u5B9E\u73B0\u4E86 <code>baseURL</code> \u7684\u914D\u7F6E\u529F\u80FD\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5B9E\u73B0 <code>ts-axios</code> \u7684\u9759\u6001\u65B9\u6CD5\u6269\u5C55\u3002</p>`,18),o=[t];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","baseURL.html.vue"]]);export{r as default};
