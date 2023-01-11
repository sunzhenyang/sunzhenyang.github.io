import{_ as e,P as n,Q as s,a2 as i}from"./framework-0028f3de.js";const a={},d=i(`<p><code>egrep</code>命令用于显示匹配正则模式的行，与<code>grep -E</code>命令等价。</p><p>下面是<code>example.txt</code>文件的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Lorem ipsum
dolor sit amet, 
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>egrep</code>命令显示包括<code>Lorem</code>或<code>dolor</code>的行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">egrep</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
<span class="token comment"># 或者</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
Lorem ipsum
dolor sit amet,
et dolore magna
duo dolores et ea
sanctus est Lorem
ipsum dolor sit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[d];function r(o,c){return n(),s("div",null,l)}const m=e(a,[["render",r],["__file","egrep.html.vue"]]);export{m as default};
