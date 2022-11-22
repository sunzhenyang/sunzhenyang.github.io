import{_ as n,o as s,c as a,e as t}from"./app.28262187.js";const p={},e=t(`<h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h2><p>\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u7684 axios \u90FD\u662F\u4E00\u4E2A\u5355\u4F8B\uFF0C\u4E00\u65E6\u6211\u4EEC\u4FEE\u6539\u4E86 axios \u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u4F1A\u5F71\u54CD\u6240\u6709\u7684\u8BF7\u6C42\u3002\u6211\u4EEC\u5E0C\u671B\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>axios.create</code> \u7684\u9759\u6001\u63A5\u53E3\u5141\u8BB8\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>axios</code> \u5B9E\u4F8B\uFF0C\u540C\u65F6\u5141\u8BB8\u6211\u4EEC\u4F20\u5165\u65B0\u7684\u914D\u7F6E\u548C\u9ED8\u8BA4\u914D\u7F6E\u5408\u5E76\uFF0C\u5E76\u505A\u4E3A\u65B0\u7684\u9ED8\u8BA4\u914D\u7F6E\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  transformRequest<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>transformRequest <span class="token keyword">as</span> AxiosTransformer<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  transformResponse<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>transformResponse <span class="token keyword">as</span> AxiosTransformer<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/config/post&#39;</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9759\u6001\u65B9\u6CD5\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5\u6269\u5C55" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5\u6269\u5C55</h2><p>\u7531\u4E8E <code>axios</code> \u6269\u5C55\u4E86\u4E00\u4E2A\u9759\u6001\u63A5\u53E3\uFF0C\u56E0\u6B64\u6211\u4EEC\u5148\u6765\u4FEE\u6539\u63A5\u53E3\u7C7B\u578B\u5B9A\u4E49\u3002</p><p><code>types/index.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosStatic</span> <span class="token keyword">extends</span> <span class="token class-name">AxiosInstance</span><span class="token punctuation">{</span>
  <span class="token function">create</span><span class="token punctuation">(</span>config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosInstance
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>create</code> \u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A <code>AxiosRequestConfig</code> \u7C7B\u578B\u7684\u914D\u7F6E\uFF0C\u4F5C\u4E3A\u9ED8\u8BA4\u914D\u7F6E\u7684\u6269\u5C55\uFF0C\u4E5F\u53EF\u4EE5\u63A5\u53D7\u4E0D\u4F20\u53C2\u6570\u3002</p><p>\u63A5\u7740\u6211\u4EEC\u6765\u5B9E\u73B0 <code>axios.create</code> \u9759\u6001\u65B9\u6CD5\u3002</p><p><code>axios.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosStatic <span class="token punctuation">{</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Axios</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token keyword">const</span> instance <span class="token operator">=</span> Axios<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>

  <span class="token function">extend</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> context<span class="token punctuation">)</span>

  <span class="token keyword">return</span> instance <span class="token keyword">as</span> AxiosStatic
<span class="token punctuation">}</span>
axios<span class="token punctuation">.</span><span class="token function-variable function">create</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createInstance</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5185\u90E8\u8C03\u7528\u4E86 <code>createInstance</code> \u51FD\u6570\uFF0C\u5E76\u4E14\u628A\u53C2\u6570 <code>config</code> \u4E0E <code>defaults</code> \u5408\u5E76\uFF0C\u4F5C\u4E3A\u65B0\u7684\u9ED8\u8BA4\u914D\u7F6E\u3002\u6CE8\u610F\u8FD9\u91CC\u6211\u4EEC\u9700\u8981 <code>createInstance</code> \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3A <code>AxiosStatic</code>\u3002</p><h2 id="demo-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#demo-\u7F16\u5199" aria-hidden="true">#</a> demo \u7F16\u5199</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  transformRequest<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>transformRequest <span class="token keyword">as</span> AxiosTransformer<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  transformResponse<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>transformResponse <span class="token keyword">as</span> AxiosTransformer<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/config/post&#39;</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5BF9\u4E0A\u8282\u8BFE\u7684\u793A\u4F8B\u505A\u4E86\u5C0F\u5C0F\u7684\u4FEE\u6539\uFF0C\u901A\u8FC7 <code>axios.create</code> \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B9E\u4F8B <code>instance</code>\uFF0C\u5E76\u4F20\u5165\u4E86 <code>transformRequest</code> \u548C <code>transformResponse</code> \u7684\u914D\u7F6E\u4FEE\u6539\u4E86\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u7136\u540E\u901A\u8FC7 <code>instance</code> \u53D1\u9001\u8BF7\u6C42\uFF0C\u6548\u679C\u548C\u4E4B\u524D\u662F\u4E00\u6837\u7684\u3002</p><p>\u81F3\u6B64\u6211\u4EEC\u5B9E\u73B0\u4E86 <code>axios.create</code> \u9759\u6001\u63A5\u53E3\u7684\u6269\u5C55\uFF0C\u6574\u4E2A <code>ts-axios</code> \u7684\u914D\u7F6E\u5316\u4E5F\u544A\u4E00\u6BB5\u843D\u3002\u5B98\u65B9 axios \u5E93\u8FD8\u652F\u6301\u4E86\u5BF9\u8BF7\u6C42\u53D6\u6D88\u7684\u80FD\u529B\uFF0C\u5728\u53D1\u9001\u8BF7\u6C42\u524D\u4EE5\u53CA\u8BF7\u6C42\u53D1\u9001\u51FA\u53BB\u672A\u54CD\u5E94\u524D\u90FD\u53EF\u4EE5\u53D6\u6D88\u8BE5\u8BF7\u6C42\u3002\u4E0B\u4E00\u7AE0\u6211\u4EEC\u5C31\u6765\u5B9E\u73B0\u8FD9\u4E2A feature\u3002</p>`,17),o=[e];function c(i,u){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","create.html.vue"]]);export{r as default};