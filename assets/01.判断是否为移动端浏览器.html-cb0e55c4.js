import{_ as n,Q as s,S as a,$ as e,a3 as t}from"./framework-ef386a32.js";const o={},c=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> flag <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 移动端</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// PC端</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function i(p,l){return s(),a("div",null,[e(" more "),c])}const d=n(o,[["render",i],["__file","01.判断是否为移动端浏览器.html.vue"]]);export{d as default};
