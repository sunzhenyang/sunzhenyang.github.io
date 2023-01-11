const e=JSON.parse(`{"key":"v-66286c3d","path":"/technology/bash/script.html","title":"脚本入门","lang":"zh-CN","frontmatter":{"title":"脚本入门","icon":"article","category":["bash"],"article":false,"tag":["bash"],"copyright":"Copyright by 阮一峰","description":"脚本（script）就是包含一系列命令的一个文本文件。Shell 读取这个文件，依次执行里面的所有命令，就好像这些命令直接输入到命令行一样。所有能够在命令行完成的任务，都能够用脚本完成。 脚本的好处是可以重复使用，也可以指定在特定场合自动调用，比如系统启动或关闭时自动执行脚本。 Shebang 行 脚本的第一行通常是指定解释器，即这个脚本必须通过什么解释器执行。这一行以#!字符开头，这个字符称为 Shebang，所以这一行就叫做 Shebang 行。 #!后面就是脚本解释器的位置，Bash 脚本的解释器一般是/bin/sh或/bin/bash。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/bash/script.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"脚本入门"}],["meta",{"property":"og:description","content":"脚本（script）就是包含一系列命令的一个文本文件。Shell 读取这个文件，依次执行里面的所有命令，就好像这些命令直接输入到命令行一样。所有能够在命令行完成的任务，都能够用脚本完成。 脚本的好处是可以重复使用，也可以指定在特定场合自动调用，比如系统启动或关闭时自动执行脚本。 Shebang 行 脚本的第一行通常是指定解释器，即这个脚本必须通过什么解释器执行。这一行以#!字符开头，这个字符称为 Shebang，所以这一行就叫做 Shebang 行。 #!后面就是脚本解释器的位置，Bash 脚本的解释器一般是/bin/sh或/bin/bash。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"脚本入门\\",\\"description\\":\\"脚本（script）就是包含一系列命令的一个文本文件。Shell 读取这个文件，依次执行里面的所有命令，就好像这些命令直接输入到命令行一样。所有能够在命令行完成的任务，都能够用脚本完成。 脚本的好处是可以重复使用，也可以指定在特定场合自动调用，比如系统启动或关闭时自动执行脚本。 Shebang 行 脚本的第一行通常是指定解释器，即这个脚本必须通过什么解释器执行。这一行以#!字符开头，这个字符称为 Shebang，所以这一行就叫做 Shebang 行。 #!后面就是脚本解释器的位置，Bash 脚本的解释器一般是/bin/sh或/bin/bash。\\"}"]]},"headers":[{"level":2,"title":"Shebang 行","slug":"shebang-行","link":"#shebang-行","children":[]},{"level":2,"title":"执行权限和路径","slug":"执行权限和路径","link":"#执行权限和路径","children":[]},{"level":2,"title":"env 命令","slug":"env-命令","link":"#env-命令","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"脚本参数","slug":"脚本参数","link":"#脚本参数","children":[]},{"level":2,"title":"shift 命令","slug":"shift-命令","link":"#shift-命令","children":[]},{"level":2,"title":"getopts 命令","slug":"getopts-命令","link":"#getopts-命令","children":[]},{"level":2,"title":"配置项参数终止符 --","slug":"配置项参数终止符","link":"#配置项参数终止符","children":[]},{"level":2,"title":"exit 命令","slug":"exit-命令","link":"#exit-命令","children":[]},{"level":2,"title":"命令执行结果","slug":"命令执行结果","link":"#命令执行结果","children":[]},{"level":2,"title":"source 命令","slug":"source-命令","link":"#source-命令","children":[]},{"level":2,"title":"别名，alias 命令","slug":"别名-alias-命令","link":"#别名-alias-命令","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":13.33,"words":3999},"filePathRelative":"technology/bash/script.md","localizedDate":"2023年1月11日","excerpt":"<p>脚本（script）就是包含一系列命令的一个文本文件。Shell 读取这个文件，依次执行里面的所有命令，就好像这些命令直接输入到命令行一样。所有能够在命令行完成的任务，都能够用脚本完成。</p>\\n<p>脚本的好处是可以重复使用，也可以指定在特定场合自动调用，比如系统启动或关闭时自动执行脚本。</p>\\n<h2> Shebang 行</h2>\\n<p>脚本的第一行通常是指定解释器，即这个脚本必须通过什么解释器执行。这一行以<code>#!</code>字符开头，这个字符称为 Shebang，所以这一行就叫做 Shebang 行。</p>\\n<p><code>#!</code>后面就是脚本解释器的位置，Bash 脚本的解释器一般是<code>/bin/sh</code>或<code>/bin/bash</code>。</p>","autoDesc":true}`);export{e as data};
