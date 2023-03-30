const e=JSON.parse(`{"key":"v-2ae13e22","path":"/technology/bash/condition.html","title":"条件判断","lang":"zh-CN","frontmatter":{"title":"条件判断","icon":"article","category":"bash","article":false,"tag":["bash"],"copyright":"Copyright by 阮一峰","description":"本章介绍 Bash 脚本的条件判断语法。 if 结构 if是最常用的条件判断结构，只有符合给定条件时，才会执行指定的命令。它的语法如下。 if commands; then commands [elif commands; then commands...] [else commands] fi","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/bash/condition.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"条件判断"}],["meta",{"property":"og:description","content":"本章介绍 Bash 脚本的条件判断语法。 if 结构 if是最常用的条件判断结构，只有符合给定条件时，才会执行指定的命令。它的语法如下。 if commands; then commands [elif commands; then commands...] [else commands] fi"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"条件判断\\",\\"description\\":\\"本章介绍 Bash 脚本的条件判断语法。 if 结构 if是最常用的条件判断结构，只有符合给定条件时，才会执行指定的命令。它的语法如下。 if commands; then commands [elif commands; then commands...] [else commands] fi\\"}"]]},"headers":[{"level":2,"title":"if 结构","slug":"if-结构","link":"#if-结构","children":[]},{"level":2,"title":"test 命令","slug":"test-命令","link":"#test-命令","children":[]},{"level":2,"title":"判断表达式","slug":"判断表达式","link":"#判断表达式","children":[{"level":3,"title":"文件判断","slug":"文件判断","link":"#文件判断","children":[]},{"level":3,"title":"字符串判断","slug":"字符串判断","link":"#字符串判断","children":[]},{"level":3,"title":"整数判断","slug":"整数判断","link":"#整数判断","children":[]},{"level":3,"title":"正则判断","slug":"正则判断","link":"#正则判断","children":[]},{"level":3,"title":"test 判断的逻辑运算","slug":"test-判断的逻辑运算","link":"#test-判断的逻辑运算","children":[]},{"level":3,"title":"算术判断","slug":"算术判断","link":"#算术判断","children":[]},{"level":3,"title":"普通命令的逻辑运算","slug":"普通命令的逻辑运算","link":"#普通命令的逻辑运算","children":[]}]},{"level":2,"title":"case 结构","slug":"case-结构","link":"#case-结构","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":13.8,"words":4139},"filePathRelative":"technology/bash/condition.md","localizedDate":"2023年1月11日","excerpt":"<p>本章介绍 Bash 脚本的条件判断语法。</p>\\n<h2> if 结构</h2>\\n<p><code>if</code>是最常用的条件判断结构，只有符合给定条件时，才会执行指定的命令。它的语法如下。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token keyword\\">if</span> commands<span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n  commands\\n<span class=\\"token punctuation\\">[</span>elif commands<span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n  commands<span class=\\"token punctuation\\">..</span>.<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">[</span>else\\n  commands<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">fi</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
