import{_ as n,o as s,c as a,e}from"./app.05e84ac7.js";const t={},p=e(`<h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h2><p>\u5728\u6211\u4EEC\u4E0D\u53BB\u8BBE\u7F6E <code>responseType</code> \u7684\u60C5\u51B5\u4E0B\uFF0C\u5F53\u670D\u52A1\u7AEF\u8FD4\u56DE\u7ED9\u6211\u4EEC\u7684\u6570\u636E\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u53BB\u628A\u5B83\u8F6C\u6362\u6210\u4E00\u4E2A JSON \u5BF9\u8C61\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>data: &quot;{&quot;a&quot;:1,&quot;b&quot;:2}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u628A\u5B83\u8F6C\u6362\u6210\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>data<span class="token operator">:</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transformresponse-\u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#transformresponse-\u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528" aria-hidden="true">#</a> transformResponse \u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528</h2><p>\u6839\u636E\u9700\u6C42\u5206\u6790\uFF0C\u6211\u4EEC\u8981\u5B9E\u73B0\u4E00\u4E2A <code>transformResponse</code> \u5DE5\u5177\u51FD\u6570\u3002</p><p><code>helpers/data.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">transformResponse</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// do nothing</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> data
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">axios</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise <span class="token punctuation">{</span>
  <span class="token function">processConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">xhr</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">transformResponseData</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">transformResponseData</span><span class="token punctuation">(</span>res<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span><span class="token operator">:</span> AxiosResponse <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformResponse</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u6211\u4EEC\u518D\u53BB\u770B\u521A\u624D\u7684 demo\uFF0C\u53D1\u73B0\u6211\u4EEC\u5DF2\u7ECF\u628A\u54CD\u5E94\u7684 <code>data</code> \u5B57\u6BB5\u4ECE\u5B57\u7B26\u4E32\u89E3\u6790\u6210 JSON \u5BF9\u8C61\u7ED3\u6784\u4E86\u3002</p><p>\u90A3\u4E48\u81F3\u6B64\uFF0C\u6211\u4EEC\u7684 <code>ts-axios</code> \u7684\u57FA\u7840\u529F\u80FD\u5DF2\u7ECF\u5B9E\u73B0\u5B8C\u6BD5\u3002\u4E0D\u8FC7\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u90FD\u4EC5\u4EC5\u5B9E\u73B0\u7684\u662F\u6B63\u5E38\u60C5\u51B5\u7684\u903B\u8F91\uFF0C\u4E0B\u9762\u4E00\u7AE0\u6211\u4EEC\u8981\u5904\u7406\u5404\u79CD\u5F02\u5E38\u60C5\u51B5\u7684\u903B\u8F91\u3002</p>`,13),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","response-data.html.vue"]]);export{r as default};