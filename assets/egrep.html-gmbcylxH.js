import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,f as a}from"./app-BybQgHW9.js";const s={},i=a(`<p><code>egrep</code>命令用于显示匹配正则模式的行，与<code>grep -E</code>命令等价。</p><p>下面是<code>example.txt</code>文件的内容。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Lorem ipsum
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>egrep</code>命令显示包括<code>Lorem</code>或<code>dolor</code>的行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">egrep</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
<span class="token comment"># 或者</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
Lorem ipsum
dolor sit amet,
et dolore magna
duo dolores et ea
sanctus est Lorem
ipsum dolor sit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[i];function r(d,l){return t(),n("div",null,o)}const p=e(s,[["render",r],["__file","egrep.html.vue"]]),u=JSON.parse(`{"path":"/technology/bash/archives/commands/egrep.html","title":"egrep","lang":"zh-CN","frontmatter":{"title":"egrep","icon":"article","category":"bash","article":false,"tag":["bash"],"copyright":"Copyright by wangdoc","description":"egrep命令用于显示匹配正则模式的行，与grep -E命令等价。 下面是example.txt文件的内容。 egrep命令显示包括Lorem或dolor的行。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/bash/archives/commands/egrep.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"egrep"}],["meta",{"property":"og:description","content":"egrep命令用于显示匹配正则模式的行，与grep -E命令等价。 下面是example.txt文件的内容。 egrep命令显示包括Lorem或dolor的行。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"egrep\\",\\"description\\":\\"egrep命令用于显示匹配正则模式的行，与grep -E命令等价。 下面是example.txt文件的内容。 egrep命令显示包括Lorem或dolor的行。\\"}"]]},"headers":[],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"technology/bash/archives/commands/egrep.md","localizedDate":"2023年1月11日","excerpt":"<p><code>egrep</code>命令用于显示匹配正则模式的行，与<code>grep -E</code>命令等价。</p>\\n<p>下面是<code>example.txt</code>文件的内容。</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>Lorem ipsum\\ndolor sit amet, \\nconsetetur\\nsadipscing elitr,\\nsed diam nonumy\\neirmod tempor\\ninvidunt ut labore\\net dolore magna\\naliquyam erat, sed\\ndiam voluptua. At\\nvero eos et\\naccusam et justo\\nduo dolores et ea\\nrebum. Stet clita\\nkasd gubergren,\\nno sea takimata\\nsanctus est Lorem\\nipsum dolor sit\\namet.\\n</code></pre></div>","autoDesc":true}`);export{p as comp,u as data};
