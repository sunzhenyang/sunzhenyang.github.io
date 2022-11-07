import{_ as n,o as e,c as s,e as a}from"./app.031bf402.js";const c={},i=a(`<h2 id="uname" tabindex="-1"><a class="header-anchor" href="#uname" aria-hidden="true">#</a> uname</h2><p><code>uname</code>\u547D\u4EE4\u8FD4\u56DE\u5F53\u524D\u673A\u5668\u7684\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5185\u6838\u7684\u7248\u672C</span>
$ <span class="token function">uname</span> -r
<span class="token number">3.2</span>.0-24-virtual

<span class="token comment"># CPU \u67B6\u6784</span>
$ <span class="token function">uname</span> -m
x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u4E86\u89E3\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7248\u672C\uFF0C\u53EF\u4EE5\u67E5\u770B<code>/etc/issue</code>\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/issue
Debian GNU/Linux <span class="token number">9</span> <span class="token punctuation">\\</span>n <span class="token punctuation">\\</span>l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h2><p><code>service</code>\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> --status-all
 <span class="token punctuation">[</span> + <span class="token punctuation">]</span>  apache2
 <span class="token punctuation">[</span> ? <span class="token punctuation">]</span>  atd
 <span class="token punctuation">[</span> - <span class="token punctuation">]</span>  bootlogd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>+</code>\u8868\u793A\u6B63\u5728\u8FD0\u884C\uFF0C<code>-</code>\u8868\u793A\u5DF2\u7ECF\u505C\u6B62\uFF0C<code>?</code>\u8868\u793A<code>service</code>\u547D\u4EE4\u4E0D\u4E86\u89E3\u76F8\u5173\u4FE1\u606F\u3002</p>`,9),d=[i];function l(t,o){return e(),s("div",null,d)}var r=n(c,[["render",l],["__file","system.html.vue"]]);export{r as default};
