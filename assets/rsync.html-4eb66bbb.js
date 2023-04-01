const e=JSON.parse(`{"key":"v-4fc457dd","path":"/technology/ssh/rsync.html","title":"rsync 命令","lang":"zh-CN","frontmatter":{"title":"rsync 命令","icon":"article","category":"ssh","article":false,"tag":["ssh"],"copyright":"Copyright by 阮一峰","description":"简介 rsync 是一个常用的 Linux 应用程序，用于文件同步。 它可以在本地计算机与远程计算机之间，或者两个本地目录之间同步文件（但不支持两台远程计算机之间的同步）。它也可以当作文件复制工具，替代cp和mv命令。 它名称里面的r指的是 remote，rsync 其实就是“远程同步”（remote sync）的意思。与其他文件传输工具（如 FTP 或 scp）不同，rsync 的最大特点是会检查发送方和接收方已有的文件，仅传输有变动的部分（默认规则是文件大小或修改时间有变动）。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ssh/rsync.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"rsync 命令"}],["meta",{"property":"og:description","content":"简介 rsync 是一个常用的 Linux 应用程序，用于文件同步。 它可以在本地计算机与远程计算机之间，或者两个本地目录之间同步文件（但不支持两台远程计算机之间的同步）。它也可以当作文件复制工具，替代cp和mv命令。 它名称里面的r指的是 remote，rsync 其实就是“远程同步”（remote sync）的意思。与其他文件传输工具（如 FTP 或 scp）不同，rsync 的最大特点是会检查发送方和接收方已有的文件，仅传输有变动的部分（默认规则是文件大小或修改时间有变动）。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"ssh"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"rsync 命令\\",\\"description\\":\\"简介 rsync 是一个常用的 Linux 应用程序，用于文件同步。 它可以在本地计算机与远程计算机之间，或者两个本地目录之间同步文件（但不支持两台远程计算机之间的同步）。它也可以当作文件复制工具，替代cp和mv命令。 它名称里面的r指的是 remote，rsync 其实就是“远程同步”（remote sync）的意思。与其他文件传输工具（如 FTP 或 scp）不同，rsync 的最大特点是会检查发送方和接收方已有的文件，仅传输有变动的部分（默认规则是文件大小或修改时间有变动）。\\"}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[{"level":3,"title":"-r参数","slug":"r参数","link":"#r参数","children":[]},{"level":3,"title":"-a参数","slug":"a参数","link":"#a参数","children":[]},{"level":3,"title":"-n参数","slug":"n参数","link":"#n参数","children":[]},{"level":3,"title":"--delete参数","slug":"delete参数","link":"#delete参数","children":[]}]},{"level":2,"title":"排除文件","slug":"排除文件","link":"#排除文件","children":[{"level":3,"title":"--exclude参数","slug":"exclude参数","link":"#exclude参数","children":[]},{"level":3,"title":"--include参数","slug":"include参数","link":"#include参数","children":[]}]},{"level":2,"title":"远程同步","slug":"远程同步","link":"#远程同步","children":[{"level":3,"title":"SSH 协议","slug":"ssh-协议","link":"#ssh-协议","children":[]},{"level":3,"title":"rsync 协议","slug":"rsync-协议","link":"#rsync-协议","children":[]}]},{"level":2,"title":"增量备份","slug":"增量备份","link":"#增量备份","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":10.52,"words":3156},"filePathRelative":"technology/ssh/rsync.md","localizedDate":"2023年1月11日","excerpt":"<h2> 简介</h2>\\n<p>rsync 是一个常用的 Linux 应用程序，用于文件同步。</p>\\n<p>它可以在本地计算机与远程计算机之间，或者两个本地目录之间同步文件（但不支持两台远程计算机之间的同步）。它也可以当作文件复制工具，替代<code>cp</code>和<code>mv</code>命令。</p>\\n<p>它名称里面的<code>r</code>指的是 remote，rsync 其实就是“远程同步”（remote sync）的意思。与其他文件传输工具（如 FTP 或 scp）不同，rsync 的最大特点是会检查发送方和接收方已有的文件，仅传输有变动的部分（默认规则是文件大小或修改时间有变动）。</p>","autoDesc":true}`);export{e as data};