import{_ as n,o as s,c as a,e}from"./app.28262187.js";const p={},t=e(`<h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h2><p>\u6211\u4EEC\u4E0A\u8282\u8BFE\u9057\u7559\u4E86\u4E00\u4E2A\u95EE\u9898\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/post&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u505A\u4E86\u8BF7\u6C42\u6570\u636E\u7684\u5904\u7406\uFF0C\u628A <code>data</code> \u8F6C\u6362\u6210\u4E86 JSON \u5B57\u7B26\u4E32\uFF0C\u4F46\u662F\u6570\u636E\u53D1\u9001\u5230\u670D\u52A1\u7AEF\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u5E76\u4E0D\u80FD\u6B63\u5E38\u89E3\u6790\u6211\u4EEC\u53D1\u9001\u7684\u6570\u636E\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5E76\u6CA1\u6709\u7ED9\u8BF7\u6C42 <code>header</code> \u8BBE\u7F6E\u6B63\u786E\u7684 <code>Content-Type </code>\u3002</p><p>\u6240\u4EE5\u9996\u5148\u6211\u4EEC\u8981\u652F\u6301\u53D1\u9001\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u652F\u6301\u914D\u7F6E <code>headers</code> \u5C5E\u6027\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/post&#39;</span><span class="token punctuation">,</span>
  headers<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json;charset=utf-8&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u4E14\u5728\u5F53\u6211\u4EEC\u4F20\u5165\u7684 <code>data</code> \u4E3A\u666E\u901A\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C<code>headers</code> \u5982\u679C\u6CA1\u6709\u914D\u7F6E <code>Content-Type</code> \u5C5E\u6027\uFF0C\u9700\u8981\u81EA\u52A8\u8BBE\u7F6E\u8BF7\u6C42 <code>header</code> \u7684 <code>Content-Type</code> \u5B57\u6BB5\u4E3A\uFF1A<code>application/json;charset=utf-8</code>\u3002</p><h2 id="processheaders-\u51FD\u6570\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#processheaders-\u51FD\u6570\u5B9E\u73B0" aria-hidden="true">#</a> processHeaders \u51FD\u6570\u5B9E\u73B0</h2><p>\u6839\u636E\u9700\u6C42\u5206\u6790\uFF0C\u6211\u4EEC\u8981\u5B9E\u73B0\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\uFF0C\u5BF9 request \u4E2D\u7684 <code>headers</code> \u505A\u4E00\u5C42\u52A0\u5DE5\u3002\u6211\u4EEC\u5728 <code>helpers</code> \u76EE\u5F55\u65B0\u5EFA <code>headers.ts</code> \u6587\u4EF6\u3002</p><p><code>helpers/headers.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isPlainObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./util&#39;</span>

<span class="token keyword">function</span> <span class="token function">normalizeHeaderName</span> <span class="token punctuation">(</span>headers<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> normalizedName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>name <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> normalizedName <span class="token operator">&amp;&amp;</span> name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> normalizedName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      headers<span class="token punctuation">[</span>normalizedName<span class="token punctuation">]</span> <span class="token operator">=</span> headers<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
      <span class="token keyword">delete</span> headers<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">processHeaders</span> <span class="token punctuation">(</span>headers<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token function">normalizeHeaderName</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">)</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>headers <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/json;charset=utf-8&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> headers
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6709\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u70B9\uFF0C\u56E0\u4E3A\u8BF7\u6C42 <code>header</code> \u5C5E\u6027\u662F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\uFF0C\u6BD4\u5982\u6211\u4EEC\u4E4B\u524D\u7684\u4F8B\u5B50\u4F20\u5165 <code>header</code> \u7684\u5C5E\u6027\u540D <code>content-type</code> \u5C31\u662F\u5168\u5C0F\u5199\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5148\u8981\u628A\u4E00\u4E9B <code>header</code> \u5C5E\u6027\u540D\u89C4\u8303\u5316\u3002</p><h2 id="\u5B9E\u73B0\u8BF7\u6C42-header-\u5904\u7406\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u8BF7\u6C42-header-\u5904\u7406\u903B\u8F91" aria-hidden="true">#</a> \u5B9E\u73B0\u8BF7\u6C42 header \u5904\u7406\u903B\u8F91</h2><p>\u5728\u8FD9\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u4FEE\u6539\u4E00\u4E0B <code>AxiosRequestConfig</code> \u63A5\u53E3\u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u6DFB\u52A0 <code>headers</code> \u8FD9\u4E2A\u53EF\u9009\u5C5E\u6027\uFF1A</p><p><code>types/index.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span>
  method<span class="token operator">?</span><span class="token operator">:</span> Method
  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  params<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">processConfig</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token function">transformURL</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  config<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token function">transformHeaders</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  config<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformRequestData</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">transformHeaders</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> config
  <span class="token keyword">return</span> <span class="token function">processHeaders</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u6211\u4EEC\u5904\u7406 <code>header</code> \u7684\u65F6\u5019\u4F9D\u8D56\u4E86 <code>data</code>\uFF0C\u6240\u4EE5\u8981\u5728\u5904\u7406\u8BF7\u6C42 <code>body</code> \u6570\u636E\u4E4B\u524D\u5904\u7406\u8BF7\u6C42 <code>header</code>\u3002</p><p><code>xhr.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">xhr</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> headers <span class="token punctuation">}</span> <span class="token operator">=</span> config

  <span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;content-type&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> headers<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> headers<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u8981\u989D\u5916\u5224\u65AD\u4E00\u4E2A\u903B\u8F91\uFF0C\u5F53\u6211\u4EEC\u4F20\u5165\u7684 <code>data</code> \u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u8BF7\u6C42 <code>header</code> \u914D\u7F6E <code>Content-Type</code> \u662F\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u4E8E\u662F\u6211\u4EEC\u628A\u5B83\u5220\u9664\u3002</p><h2 id="demo-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#demo-\u7F16\u5199" aria-hidden="true">#</a> demo \u7F16\u5199</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/post&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/post&#39;</span><span class="token punctuation">,</span>
  headers<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> paramsString <span class="token operator">=</span> <span class="token string">&#39;q=URLUtils.searchParams&amp;topic=api&#39;</span>
<span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>paramsString<span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/post&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> searchParams
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 demo \u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u6211\u4EEC\u8BF7\u6C42\u7684\u6570\u636E\u662F\u666E\u901A\u5BF9\u8C61\u5E76\u4E14\u6CA1\u6709\u914D\u7F6E <code>headers</code> \u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u4E3A\u5176\u6DFB\u52A0 <code>Content-Type:application/json;charset=utf-8</code>\uFF1B\u540C\u65F6\u6211\u4EEC\u53D1\u73B0\u5F53 data \u662F\u67D0\u4E9B\u7C7B\u578B\u5982 <code>URLSearchParams</code> \u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u4E3A\u8BF7\u6C42 <code>header</code>\u52A0\u4E0A\u5408\u9002\u7684 <code>Content-Type</code>\u3002</p><p>\u81F3\u6B64\u6211\u4EEC\u5BF9\u4E8E\u8BF7\u6C42\u7684\u5904\u7406\u903B\u8F91\u6682\u65F6\u544A\u4E00\u6BB5\u843D\u3002\u76EE\u524D\u6211\u4EEC\u7684\u8BF7\u6C42\u4ECE\u7F51\u7EDC\u5C42\u9762\u662F\u53EF\u4EE5\u6536\u5230\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\u7684\uFF0C\u4E0B\u4E00\u8282\u8BFE\u6211\u4EEC\u5C31\u4ECE\u4EE3\u7801\u5C42\u9762\u6765\u5904\u7406\u670D\u52A1\u7AEF\u54CD\u5E94\uFF0C\u5E76\u4E14\u8BA9\u8C03\u7528\u65B9\u53EF\u4EE5\u62FF\u5230\u4ECE\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u3002</p>`,26),o=[t];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","header.html.vue"]]);export{r as default};