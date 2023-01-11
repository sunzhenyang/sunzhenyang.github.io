import{_ as n,P as s,Q as a,a2 as e}from"./framework-0028f3de.js";const t={},p=e(`<h2 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h2><p>在我们不去设置 <code>responseType</code> 的情况下，当服务端返回给我们的数据是字符串类型，我们可以尝试去把它转换成一个 JSON 对象。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data: &quot;{&quot;a&quot;:1,&quot;b&quot;:2}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们把它转换成：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>data<span class="token operator">:</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transformresponse-函数实现及应用" tabindex="-1"><a class="header-anchor" href="#transformresponse-函数实现及应用" aria-hidden="true">#</a> transformResponse 函数实现及应用</h2><p>根据需求分析，我们要实现一个 <code>transformResponse</code> 工具函数。</p><p><code>helpers/data.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">transformResponse</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// do nothing</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> data
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">axios</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise <span class="token punctuation">{</span>
  <span class="token function">processConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">xhr</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">transformResponseData</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">transformResponseData</span><span class="token punctuation">(</span>res<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span><span class="token operator">:</span> AxiosResponse <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformResponse</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着我们再去看刚才的 demo，发现我们已经把响应的 <code>data</code> 字段从字符串解析成 JSON 对象结构了。</p><p>那么至此，我们的 <code>ts-axios</code> 的基础功能已经实现完毕。不过到目前为止，我们都仅仅实现的是正常情况的逻辑，下面一章我们要处理各种异常情况的逻辑。</p>`,13),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","response-data.html.vue"]]);export{r as default};
