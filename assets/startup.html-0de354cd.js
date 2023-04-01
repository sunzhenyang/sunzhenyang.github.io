const e=JSON.parse(`{"key":"v-fd1f0de6","path":"/technology/bash/startup.html","title":"启动环境","lang":"zh-CN","frontmatter":{"title":"启动环境","icon":"article","category":"bash","article":false,"tag":["bash"],"copyright":"Copyright by 阮一峰","description":"Session 用户每次使用 Shell，都会开启一个与 Shell 的 Session（对话）。 Session 有两种类型：登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。 登录 Session 登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，通常需要用户输入用户名和密码进行登录。 登录 Session 一般进行整个系统环境的初始化，启动的初始化脚本依次如下。 /etc/profile：所有用户的全局配置脚本。 /etc/profile.d目录里面所有.sh文件 ~/.bash_profile：用户的个人配置脚本。如果该脚本存在，则执行完就不再往下执行。 ~/.bash_login：如果~/.bash_profile没找到，则尝试执行这个脚本（C shell 的初始化脚本）。如果该脚本存在，则执行完就不再往下执行。 ~/.profile：如果~/.bash_profile和~/.bash_login都没找到，则尝试读取这个脚本（Bourne shell 和 Korn shell 的初始化脚本）。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/bash/startup.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"启动环境"}],["meta",{"property":"og:description","content":"Session 用户每次使用 Shell，都会开启一个与 Shell 的 Session（对话）。 Session 有两种类型：登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。 登录 Session 登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，通常需要用户输入用户名和密码进行登录。 登录 Session 一般进行整个系统环境的初始化，启动的初始化脚本依次如下。 /etc/profile：所有用户的全局配置脚本。 /etc/profile.d目录里面所有.sh文件 ~/.bash_profile：用户的个人配置脚本。如果该脚本存在，则执行完就不再往下执行。 ~/.bash_login：如果~/.bash_profile没找到，则尝试执行这个脚本（C shell 的初始化脚本）。如果该脚本存在，则执行完就不再往下执行。 ~/.profile：如果~/.bash_profile和~/.bash_login都没找到，则尝试读取这个脚本（Bourne shell 和 Korn shell 的初始化脚本）。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"启动环境\\",\\"description\\":\\"Session 用户每次使用 Shell，都会开启一个与 Shell 的 Session（对话）。 Session 有两种类型：登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。 登录 Session 登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，通常需要用户输入用户名和密码进行登录。 登录 Session 一般进行整个系统环境的初始化，启动的初始化脚本依次如下。 /etc/profile：所有用户的全局配置脚本。 /etc/profile.d目录里面所有.sh文件 ~/.bash_profile：用户的个人配置脚本。如果该脚本存在，则执行完就不再往下执行。 ~/.bash_login：如果~/.bash_profile没找到，则尝试执行这个脚本（C shell 的初始化脚本）。如果该脚本存在，则执行完就不再往下执行。 ~/.profile：如果~/.bash_profile和~/.bash_login都没找到，则尝试读取这个脚本（Bourne shell 和 Korn shell 的初始化脚本）。\\"}"]]},"headers":[{"level":2,"title":"Session","slug":"session","link":"#session","children":[{"level":3,"title":"登录 Session","slug":"登录-session","link":"#登录-session","children":[]},{"level":3,"title":"非登录 Session","slug":"非登录-session","link":"#非登录-session","children":[]},{"level":3,"title":".bash_logout","slug":"bash-logout","link":"#bash-logout","children":[]}]},{"level":2,"title":"启动选项","slug":"启动选项","link":"#启动选项","children":[]},{"level":2,"title":"键盘绑定","slug":"键盘绑定","link":"#键盘绑定","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":3.24,"words":972},"filePathRelative":"technology/bash/startup.md","localizedDate":"2023年1月11日","excerpt":"<h2> Session</h2>\\n<p>用户每次使用 Shell，都会开启一个与 Shell 的 Session（对话）。</p>\\n<p>Session 有两种类型：登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。</p>\\n<h3> 登录 Session</h3>\\n<p>登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，通常需要用户输入用户名和密码进行登录。</p>\\n<p>登录 Session 一般进行整个系统环境的初始化，启动的初始化脚本依次如下。</p>\\n<ul>\\n<li><code>/etc/profile</code>：所有用户的全局配置脚本。</li>\\n<li><code>/etc/profile.d</code>目录里面所有<code>.sh</code>文件</li>\\n<li><code>~/.bash_profile</code>：用户的个人配置脚本。如果该脚本存在，则执行完就不再往下执行。</li>\\n<li><code>~/.bash_login</code>：如果<code>~/.bash_profile</code>没找到，则尝试执行这个脚本（C shell 的初始化脚本）。如果该脚本存在，则执行完就不再往下执行。</li>\\n<li><code>~/.profile</code>：如果<code>~/.bash_profile</code>和<code>~/.bash_login</code>都没找到，则尝试读取这个脚本（Bourne shell 和 Korn shell 的初始化脚本）。</li>\\n</ul>","autoDesc":true}`);export{e as data};