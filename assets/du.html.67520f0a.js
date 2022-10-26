import{_ as e,o as s,c as n,e as a}from"./app.41291239.js";const c={},d=a(`<p><code>du</code>\u547D\u4EE4\u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u78C1\u76D8\u4F7F\u7528\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">du</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-h</code>\u53C2\u6570\u5C06\u8FD4\u56DE\u7684\u5927\u5C0F\u663E\u793A\u4E3A\u4EBA\u7C7B\u53EF\u8BFB\u7684\u683C\u5F0F\uFF0C\u5373\u663E\u793A\u5355\u4F4D\u4E3A K\u3001M\u3001G \u7B49\u3002</p><p><code>-s</code>\u53C2\u6570\u8868\u793A\u603B\u7ED3\uFF08summarize\uFF09\u3002</p><p><code>-x</code>\u53C2\u6570\u8868\u793A\u4E0D\u663E\u793A\u4E0D\u5728\u5F53\u524D\u5206\u533A\u7684\u76EE\u5F55\uFF0C\u901A\u5E38\u4F1A\u5FFD\u7565<code>/dev</code>\u3001<code>/proc</code>\u3001<code>/sys</code>\u7B49\u76EE\u5F55\u3002</p><p><code>-c</code>\u53C2\u6570\u8868\u793A\u663E\u793A\u5F53\u524D\u76EE\u5F55\u603B\u5171\u5360\u7528\u7684\u7A7A\u95F4\u5927\u5C0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6839\u76EE\u5F55\u4E0B\u5404\u7EA7\u76EE\u5F55\u5360\u7528\u7684\u7A7A\u95F4\u5927\u5C0F</span>
$ <span class="token function">sudo</span> <span class="token function">du</span> -shxc /*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--exclude</code>\u53C2\u6570\u7528\u4E8E\u6392\u9664\u67D0\u4E9B\u76EE\u5F55\u6216\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">du</span> -shxc /* --exclude<span class="token operator">=</span>proc
$ <span class="token function">sudo</span> <span class="token function">du</span> -sh --exclude<span class="token operator">=</span>*.iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--max-depth</code>\u53C2\u6570\u7528\u4E8E\u8BBE\u5B9A\u76EE\u5F55\u5927\u5C0F\u7EDF\u8BA1\u5230\u7B2C\u51E0\u5C42\u3002\u5982\u679C\u8BBE\u4E3A<code>-\u2013max-depth=0</code>\uFF0C\u90A3\u4E48\u7B49\u540C\u4E8E<code>-s</code>\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">du</span> /home/ -hc --max-depth<span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),o=[d];function i(l,p){return s(),n("div",null,o)}var u=e(c,[["render",i],["__file","du.html.vue"]]);export{u as default};
