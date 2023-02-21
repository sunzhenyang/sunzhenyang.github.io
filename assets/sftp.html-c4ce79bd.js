import{_ as e,Q as s,S as n,a3 as i}from"./framework-9339b303.js";const c={},o=i(`<p><code>sftp</code>是 SSH 提供的一个客户端应用程序，主要用来安全地访问 FTP。因为 FTP 是不加密协议，很不安全，<code>sftp</code>就相当于将 FTP 放入了 SSH。</p><p>下面的命令连接 FTP 主机。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sftp</span> username@hostname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面的命令，会要求输入 FTP 的密码。密码验证成功以后，就会出现 FTP 的提示符<code>sftp&gt; </code>，下面是一个例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sftp</span> <span class="token environment constant">USER</span>@penguin.example.com
<span class="token environment constant">USER</span>@penguin.example.com&#39;s password:
Connected to penguin.example.com.
sftp<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FTP 的提示符下面，就可以输入各种 FTP 命令了，这部分完全跟传统的 FTP 用法完全一样。</p><ul><li><code>ls [directory]</code>：列出一个远程目录的内容。如果没有指定目标目录，则默认列出当前目录。</li><li><code>cd directory</code>：从当前目录改到指定目录。</li><li><code>mkdir directory</code>：创建一个远程目录。</li><li><code>rmdir path</code>：删除一个远程目录。</li><li><code>put localfile [remotefile]</code>：本地文件传输到远程主机。</li><li><code>get remotefile [localfile]</code>：远程文件传输到本地。</li><li><code>help</code>：显示帮助信息。</li><li><code>bye</code>：退出 sftp。</li><li><code>quit</code>：退出 sftp。</li><li><code>exit</code>：退出 sftp。</li></ul>`,7),l=[o];function d(a,t){return s(),n("div",null,l)}const r=e(c,[["render",d],["__file","sftp.html.vue"]]);export{r as default};