import{_ as n,P as s,Q as a,a2 as e}from"./framework-0028f3de.js";const t={},p=e(`<h2 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h2><p>有些时候，我们会请求某个域名下的多个接口，我们不希望每次发送请求都填写完整的 url，希望可以配置一个 <code>baseURL</code>，之后都可以传相对路径。如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/get&#39;</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/post&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们一旦配置了 <code>baseURL</code>，之后请求传入的 <code>url</code> 都会和我们的 <code>baseURL</code> 拼接成完整的绝对地址，除非请求传入的 <code>url</code> 已经是绝对地址。</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>首先修改一下类型定义。</p><p><code>types/index.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  baseURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现 2 个辅助函数。</p><p><code>helpers/url.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isAbsoluteURL</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">combineURL</span><span class="token punctuation">(</span>baseURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> relativeURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> relativeURL <span class="token operator">?</span> baseURL<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> relativeURL<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> baseURL
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们来调用这俩个辅助函数。</p><p><code>core/dispatchRequest.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">transformURL</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> paramsSerializer<span class="token punctuation">,</span> baseURL <span class="token punctuation">}</span> <span class="token operator">=</span> config
  <span class="token keyword">if</span> <span class="token punctuation">(</span>baseURL <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isAbsoluteURL</span><span class="token punctuation">(</span>url<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    url <span class="token operator">=</span> <span class="token function">combineURL</span><span class="token punctuation">(</span>baseURL<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">buildURL</span><span class="token punctuation">(</span>url<span class="token operator">!</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> paramsSerializer<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo-编写" tabindex="-1"><a class="header-anchor" href="#demo-编写" aria-hidden="true">#</a> demo 编写</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://img.mukewang.com/&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;5cc01a7b0001a33718720632.jpg&#39;</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 demo 非常简单，我们请求了慕课网的 2 张图片，注意当第二个请求 <code>url</code> 已经是绝对地址的时候，我们并不会再去拼接 <code>baseURL</code>。</p><p>至此，<code>ts-axios</code> 就实现了 <code>baseURL</code> 的配置功能，接下来我们来实现 <code>ts-axios</code> 的静态方法扩展。</p>`,18),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","baseURL.html.vue"]]);export{r as default};
