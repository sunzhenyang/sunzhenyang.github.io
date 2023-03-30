const e=JSON.parse(`{"key":"v-1d70a7b6","path":"/technology/bash/archives/file-operation.html","title":"文件操作","lang":"zh-CN","frontmatter":{"title":"文件操作","icon":"article","category":"bash","article":false,"tag":["bash"],"copyright":"Copyright by wangdoc","description":"cp cp命令用于将文件（或目录）拷贝到目的地。 # 拷贝单个文件 $ cp source dest # 拷贝多个文件 $ cp source1 source2 source3 dest # -i 目的地有同名文件时会提示确认 $ cp -i file1 file2 # -r 递归拷贝，将dir1拷贝到dir2，完成后dir2生成一个子目录dir1 # dir2如果不存在，将被创建 # 拷贝目录时，该参数是必需的 $ cp -r dir1 dir2 # -u --update 只拷贝目的地没有的文件，或者比目的地同名文件更新的文件 $ cp -u *.html destination","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/bash/archives/file-operation.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"文件操作"}],["meta",{"property":"og:description","content":"cp cp命令用于将文件（或目录）拷贝到目的地。 # 拷贝单个文件 $ cp source dest # 拷贝多个文件 $ cp source1 source2 source3 dest # -i 目的地有同名文件时会提示确认 $ cp -i file1 file2 # -r 递归拷贝，将dir1拷贝到dir2，完成后dir2生成一个子目录dir1 # dir2如果不存在，将被创建 # 拷贝目录时，该参数是必需的 $ cp -r dir1 dir2 # -u --update 只拷贝目的地没有的文件，或者比目的地同名文件更新的文件 $ cp -u *.html destination"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"文件操作\\",\\"description\\":\\"cp cp命令用于将文件（或目录）拷贝到目的地。 # 拷贝单个文件 $ cp source dest # 拷贝多个文件 $ cp source1 source2 source3 dest # -i 目的地有同名文件时会提示确认 $ cp -i file1 file2 # -r 递归拷贝，将dir1拷贝到dir2，完成后dir2生成一个子目录dir1 # dir2如果不存在，将被创建 # 拷贝目录时，该参数是必需的 $ cp -r dir1 dir2 # -u --update 只拷贝目的地没有的文件，或者比目的地同名文件更新的文件 $ cp -u *.html destination\\"}"]]},"headers":[{"level":2,"title":"cp","slug":"cp","link":"#cp","children":[]},{"level":2,"title":"mkdir","slug":"mkdir","link":"#mkdir","children":[]},{"level":2,"title":"mv","slug":"mv","link":"#mv","children":[]},{"level":2,"title":"rm","slug":"rm","link":"#rm","children":[]},{"level":2,"title":"ln","slug":"ln","link":"#ln","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.36,"words":407},"filePathRelative":"technology/bash/archives/file-operation.md","localizedDate":"2023年1月11日","excerpt":"<h2> cp</h2>\\n<p><code>cp</code>命令用于将文件（或目录）拷贝到目的地。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 拷贝单个文件</span>\\n$ <span class=\\"token function\\">cp</span> <span class=\\"token builtin class-name\\">source</span> dest\\n\\n<span class=\\"token comment\\"># 拷贝多个文件</span>\\n$ <span class=\\"token function\\">cp</span> source1 source2 source3 dest\\n\\n<span class=\\"token comment\\"># -i 目的地有同名文件时会提示确认</span>\\n$ <span class=\\"token function\\">cp</span> <span class=\\"token parameter variable\\">-i</span> file1 file2\\n\\n<span class=\\"token comment\\"># -r 递归拷贝，将dir1拷贝到dir2，完成后dir2生成一个子目录dir1</span>\\n<span class=\\"token comment\\"># dir2如果不存在，将被创建</span>\\n<span class=\\"token comment\\"># 拷贝目录时，该参数是必需的</span>\\n$ <span class=\\"token function\\">cp</span> <span class=\\"token parameter variable\\">-r</span> dir1 dir2\\n\\n<span class=\\"token comment\\"># -u --update 只拷贝目的地没有的文件，或者比目的地同名文件更新的文件</span>\\n$ <span class=\\"token function\\">cp</span> <span class=\\"token parameter variable\\">-u</span> *.html destination\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
