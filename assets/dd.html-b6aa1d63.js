import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as i,b as a,d as s,e as l,f as t}from"./app-a7d5173b.js";const p={},c=t(`<p><code>dd</code>命令用于复制磁盘或文件系统。</p><h2 id="复制磁盘" tabindex="-1"><a class="header-anchor" href="#复制磁盘" aria-hidden="true">#</a> 复制磁盘</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令表示将<code>/dev/sda</code>磁盘复制到<code>/dev/sdb</code>设备。参数<code>if</code>表示来源地，<code>of</code>表示目的地。</p><p>除了复制，<code>dd</code>还允许将磁盘做成一个镜像文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/home/username/sdadisk.img
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>dd</code>还可以复制单个分区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda2 <span class="token assign-left variable">of</span><span class="token operator">=</span>/home/username/partition2.img <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，参数<code>bs</code>表示单次拷贝的字节数（bytes）。</p><p>要将镜像文件复原，也很简单。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>sdadisk.img <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="清除数据" tabindex="-1"><a class="header-anchor" href="#清除数据" aria-hidden="true">#</a> 清除数据</h2><p><code>dd</code>也可以用于清除磁盘数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 磁盘数据写满 0</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1

<span class="token comment"># 磁盘数据写满随机字符</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/urandom <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监控进展" tabindex="-1"><a class="header-anchor" href="#监控进展" aria-hidden="true">#</a> 监控进展</h2><p>磁盘的复制通常需要很久，为了监控进展，可以使用 Pipe Viewer 工具软件。如果没有安装这个软件，可以使用下面的命令安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">pv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，来源地和目的地之间插入广告，就可以看到进展了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/urandom <span class="token operator">|</span> <span class="token function">pv</span> <span class="token operator">|</span> <span class="token function">dd</span> <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1
<span class="token number">4</span>,14MB <span class="token number">0</span>:00:05 <span class="token punctuation">[</span> 98kB/s<span class="token punctuation">]</span> <span class="token punctuation">[</span>      <span class="token operator">&lt;=</span><span class="token operator">&gt;</span>                  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,20),r={href:"https://opensource.com/article/18/7/how-use-dd-linux",target:"_blank",rel:"noopener noreferrer"};function u(v,b){const n=o("ExternalLinkIcon");return d(),i("div",null,[c,a("ul",null,[a("li",null,[s("David Clinton, "),a("a",r,[s("How to use dd in Linux without destroying your disk"),l(n)])])])])}const m=e(p,[["render",u],["__file","dd.html.vue"]]);export{m as default};