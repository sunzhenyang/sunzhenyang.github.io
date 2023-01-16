import{_ as s,P as e,Q as a,a2 as n}from"./framework-6c45d443.js";const l={},t=n(`<p><code>tr</code>命令用于按照给定模式转换文本。</p><p>下面是<code>example.txt</code>文件的内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Hello World Foo Bar Baz<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>tr</code>命令可以将所有小写字母转换为大写字母。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;a-z&#39;</span> <span class="token string">&#39;A-Z&#39;</span>
HELLO WORLD FOO BAR BAZ<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>tr</code>命令还可以将所有空格转为换行符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39; &#39;</span> <span class="token string">&#39;\\n&#39;</span>
Hello
World
Foo
Bar
Baz<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function i(o,d){return e(),a("div",null,c)}const p=s(l,[["render",i],["__file","tr.html.vue"]]);export{p as default};
