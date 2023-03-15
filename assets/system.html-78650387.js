import{_ as n,Q as e,S as s,a3 as a}from"./framework-2ed98ecf.js";const c={},i=a(`<h2 id="uname" tabindex="-1"><a class="header-anchor" href="#uname" aria-hidden="true">#</a> uname</h2><p><code>uname</code>命令返回当前机器的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内核的版本</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-r</span>
<span class="token number">3.2</span>.0-24-virtual

<span class="token comment"># CPU 架构</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-m</span>
x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要了解操作系统的版本，可以查看<code>/etc/issue</code>文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/issue
Debian GNU/Linux <span class="token number">9</span> <span class="token punctuation">\\</span>n <span class="token punctuation">\\</span>l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h2><p><code>service</code>命令可以查看当前正在运行的服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">service</span> --status-all
 <span class="token punctuation">[</span> + <span class="token punctuation">]</span>  apache2
 <span class="token punctuation">[</span> ? <span class="token punctuation">]</span>  atd
 <span class="token punctuation">[</span> - <span class="token punctuation">]</span>  bootlogd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>+</code>表示正在运行，<code>-</code>表示已经停止，<code>?</code>表示<code>service</code>命令不了解相关信息。</p>`,9),d=[i];function t(l,o){return e(),s("div",null,d)}const u=n(c,[["render",t],["__file","system.html.vue"]]);export{u as default};
