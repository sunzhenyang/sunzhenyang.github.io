import{_ as n,o as s,c as a,e as p}from"./app.41291239.js";const t={},e=p(`<h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h2><p>\u5728\u4E4B\u524D\u7684\u7AE0\u8282\uFF0C\u6211\u4EEC\u5BF9\u8BF7\u6C42\u7684 url \u53C2\u6570\u505A\u4E86\u5904\u7406\uFF0C\u6211\u4EEC\u4F1A\u89E3\u6790\u4F20\u5165\u7684 params \u5BF9\u8C61\uFF0C\u6839\u636E\u4E00\u5B9A\u7684\u89C4\u5219\u628A\u5B83\u89E3\u6790\u6210\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u6DFB\u52A0\u5728 url \u540E\u9762\u3002\u5728\u89E3\u6790\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u5BF9\u5B57\u7B26\u4E32 encode\uFF0C\u4F46\u662F\u5BF9\u4E8E\u4E00\u4E9B\u7279\u6B8A\u5B57\u7B26\u6BD4\u5982 <code>@</code>\u3001<code>+</code> \u7B49\u5374\u4E0D\u8F6C\u4E49\uFF0C\u8FD9\u662F axios \u5E93\u7684\u9ED8\u8BA4\u89E3\u6790\u89C4\u5219\u3002\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u5E0C\u671B\u81EA\u5DF1\u5B9A\u4E49\u89E3\u6790\u89C4\u5219\uFF0C\u4E8E\u662F\u6211\u4EEC\u5E0C\u671B <code>ts-axios</code> \u80FD\u5728\u8BF7\u6C42\u914D\u7F6E\u4E2D\u5141\u8BB8\u6211\u4EEC\u914D\u7F6E\u4E00\u4E2A <code>paramsSerializer</code> \u51FD\u6570\u6765\u81EA\u5B9A\u4E49\u53C2\u6570\u7684\u89E3\u6790\u89C4\u5219\uFF0C\u8BE5\u51FD\u6570\u63A5\u53D7 <code>params</code> \u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\u4F5C\u4E3A\u89E3\u6790\u540E\u7684\u7ED3\u679C\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/more/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    c<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">paramsSerializer</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span> arrayFormat<span class="token operator">:</span> <span class="token string">&#39;brackets&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><p>\u9996\u5148\u4FEE\u6539\u4E00\u4E0B\u7C7B\u578B\u5B9A\u4E49\u3002</p><p><code>types/index.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  paramsSerializer<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u4FEE\u6539 <code>buildURL</code> \u51FD\u6570\u7684\u5B9E\u73B0\u3002</p><p><code>helpers/url.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">buildURL</span><span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  params<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  paramsSerializer<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> url
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> serializedParams

  <span class="token keyword">if</span> <span class="token punctuation">(</span>paramsSerializer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    serializedParams <span class="token operator">=</span> <span class="token function">paramsSerializer</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isURLSearchParams</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    serializedParams <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> parts<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>key <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> val <span class="token operator">=</span> params<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        values <span class="token operator">=</span> val
        key <span class="token operator">+=</span> <span class="token string">&#39;[]&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        values <span class="token operator">=</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      values<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>val <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDate</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          val <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          val <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        parts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encode</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    serializedParams <span class="token operator">=</span> parts<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>serializedParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> markIndex <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>markIndex <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      url <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> markIndex<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    url <span class="token operator">+=</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&#39;?&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> serializedParams
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> url
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u7ED9 <code>buildURL</code> \u51FD\u6570\u65B0\u589E\u4E86 <code>paramsSerializer</code> \u53EF\u9009\u53C2\u6570\uFF0C\u53E6\u5916\u6211\u4EEC\u8FD8\u65B0\u589E\u4E86\u5BF9 <code>params</code> \u7C7B\u578B\u5224\u65AD\uFF0C\u5982\u679C\u5B83\u662F\u4E00\u4E2A <code>URLSearchParams</code> \u5BF9\u8C61\u5B9E\u4F8B\u7684\u8BDD\uFF0C\u6211\u4EEC\u76F4\u63A5\u8FD4\u56DE\u5B83 <code>toString</code> \u540E\u7684\u7ED3\u679C\u3002</p><p><code>helpers/util.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isURLSearchParams</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> URLSearchParams <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> val <span class="token keyword">instanceof</span> <span class="token class-name">URLSearchParams</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u6211\u4EEC\u8981\u4FEE\u6539 <code>buildURL</code> \u8C03\u7528\u7684\u903B\u8F91\u3002</p><p><code>core/dispatchRequest.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">transformURL</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> paramsSerializer <span class="token punctuation">}</span> <span class="token operator">=</span> config
  <span class="token keyword">return</span> <span class="token function">buildURL</span><span class="token punctuation">(</span>url<span class="token operator">!</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> paramsSerializer<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#demo-\u7F16\u5199" aria-hidden="true">#</a> demo \u7F16\u5199</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/more/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token string">&#39;a=b&amp;c=d&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/more/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    c<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">paramsSerializer</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span> arrayFormat<span class="token operator">:</span> <span class="token string">&#39;brackets&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/more/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    c<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u7F16\u5199\u4E86 3 \u79CD\u60C5\u51B5\u7684\u8BF7\u6C42\uFF0C\u7B2C\u4E00\u79CD\u6EE1\u8DB3\u8BF7\u6C42\u7684 params \u53C2\u6570\u662F <code>URLSearchParams</code> \u5BF9\u8C61\u7C7B\u578B\u7684\u3002\u540E\u4E24\u79CD\u8BF7\u6C42\u7684\u7ED3\u679C\u4E3B\u8981\u533A\u522B\u5728\u4E8E\u524D\u8005\u5E76\u6CA1\u6709\u5BF9 <code>[]</code> \u8F6C\u4E49\uFF0C\u800C\u540E\u8005\u4F1A\u8F6C\u4E49\u3002</p><p>\u81F3\u6B64\uFF0C<code>ts-axios</code> \u5B9E\u73B0\u4E86\u81EA\u5B9A\u4E49\u53C2\u6570\u5E8F\u5217\u5316\u529F\u80FD\uFF0C\u7528\u6237\u53EF\u4EE5\u914D\u7F6E <code>paramsSerializer</code> \u81EA\u5B9A\u4E49\u53C2\u6570\u5E8F\u5217\u5316\u89C4\u5219\u3002\u4E0B\u4E00\u8282\u8BFE\u6211\u4EEC\u6765\u5B9E\u73B0 <code>ts-axios</code> \u5BF9 <code>baseURL</code> \u7684\u652F\u6301\u3002</p>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","paramsSerializer.html.vue"]]);export{r as default};
