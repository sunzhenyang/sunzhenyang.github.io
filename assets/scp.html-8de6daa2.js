import{_ as e,P as s,Q as a,a2 as n}from"./framework-0028f3de.js";const c={},i=n(`<p><code>scp</code>是 SSH 提供的一个客户端程序，用来在两台主机之间加密传送文件（即复制文件）。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>scp</code>是 secure copy 的缩写，相当于<code>cp</code>命令 + SSH。它的底层是 SSH 协议，默认端口是22，相当于先使用<code>ssh</code>命令登录远程主机，然后再执行拷贝操作。</p><p><code>scp</code>主要用于以下三种复制操作。</p><ul><li>本地复制到远程。</li><li>远程复制到本地。</li><li>两个远程系统之间的复制。</li></ul><p>使用<code>scp</code>传输数据时，文件和密码都是加密的，不会泄漏敏感信息。</p><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2><p><code>scp</code>的语法类似<code>cp</code>的语法。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token builtin class-name">source</span> destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>source</code>是文件当前的位置，<code>destination</code>是文件所要复制到的位置。它们都可以包含用户名和主机名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> user@host:foo.txt bar.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令将远程主机（<code>user@host</code>）用户主目录下的<code>foo.txt</code>，复制为本机当前目录的<code>bar.txt</code>。可以看到，主机与文件之间要使用冒号（<code>:</code>）分隔。</p><p><code>scp</code>会先用 SSH 登录到远程主机，然后在加密连接之中复制文件。客户端发起连接后，会提示用户输入密码，这部分是跟 SSH 的用法一致的。</p><p>用户名和主机名都是可以省略的。用户名的默认值是本机的当前用户名，主机名默认为当前主机。注意，<code>scp</code>会使用 SSH 客户端的配置文件<code>.ssh/config</code>，如果配置文件里面定义了主机的别名，这里也可以使用别名连接。</p><p><code>scp</code>支持一次复制多个文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> source1 source2 destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令会将<code>source1</code>和<code>source2</code>两个文件，复制到<code>destination</code>。</p><p>注意，如果所要复制的文件，在目标位置已经存在同名文件，<code>scp</code>会在没有警告的情况下覆盖同名文件。</p><h2 id="用法示例" tabindex="-1"><a class="header-anchor" href="#用法示例" aria-hidden="true">#</a> 用法示例</h2><p><strong>（1）本地文件复制到远程</strong></p><p>复制本机文件到远程系统的用法如下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
$ <span class="token function">scp</span> SourceFile user@host:directory/TargetFile

<span class="token comment"># 示例</span>
$ <span class="token function">scp</span> file.txt remote_username@10.10.0.2:/remote/directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是复制整个目录的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将本机的 documents 目录拷贝到远程主机，</span>
<span class="token comment"># 会在远程主机创建 documents 目录</span>
$ <span class="token function">scp</span> <span class="token parameter variable">-r</span> documents username@server_ip:/path_to_remote_directory

<span class="token comment"># 将本机整个目录拷贝到远程目录下</span>
$ <span class="token function">scp</span> <span class="token parameter variable">-r</span> localmachine/path_to_the_directory username@server_ip:/path_to_remote_directory/

<span class="token comment"># 将本机目录下的所有内容拷贝到远程目录下</span>
$ <span class="token function">scp</span> <span class="token parameter variable">-r</span> localmachine/path_to_the_directory/* username@server_ip:/path_to_remote_directory/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）远程文件复制到本地</strong></p><p>从远程主机复制文件到本地的用法如下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
$ <span class="token function">scp</span> user@host:directory/SourceFile TargetFile

<span class="token comment"># 示例</span>
$ <span class="token function">scp</span> remote_username@10.10.0.2:/remote/file.txt /local/directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是复制整个目录的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拷贝一个远程目录到本机目录下</span>
$ <span class="token function">scp</span> <span class="token parameter variable">-r</span> username@server_ip:/path_to_remote_directory local-machine/path_to_the_directory/

<span class="token comment"># 拷贝远程目录下的所有内容，到本机目录下</span>
$ <span class="token function">scp</span> <span class="token parameter variable">-r</span> username@server_ip:/path_to_remote_directory/* local-machine/path_to_the_directory/
$ <span class="token function">scp</span> <span class="token parameter variable">-r</span> user@host:directory/SourceFolder TargetFolder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）两个远程系统之间的复制</strong></p><p>本机发出指令，从远程主机 A 拷贝到远程主机 B 的用法如下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
$ <span class="token function">scp</span> user@host1:directory/SourceFile user@host2:directory/SourceFile

<span class="token comment"># 示例</span>
$ <span class="token function">scp</span> user1@host1.com:/files/file.txt user2@host2.com:/files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系统将提示你输入两个远程帐户的密码。数据将直接从一个远程主机传输到另一个远程主机。</p><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><p><strong>（1）<code>-c</code></strong></p><p><code>-c</code>参数用来指定文件拷贝数据传输的加密算法。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-c</span> blowfish some_file your_username@remotehost.edu:~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码指定加密算法为<code>blowfish</code>。</p><p><strong>（2）<code>-C</code></strong></p><p><code>-C</code>参数表示是否在传输时压缩文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-c</span> blowfish <span class="token parameter variable">-C</span> local_file your_username@remotehost.edu:~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（3）<code>-F</code></strong></p><p><code>-F</code>参数用来指定 ssh_config 文件，供 ssh 使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-F</span> /home/pungki/proxy_ssh_config Label.pdf root@172.20.10.8:/root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（4）<code>-i</code></strong></p><p><code>-i</code>参数用来指定密钥。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-vCq</span> <span class="token parameter variable">-i</span> private_key.pem ~/test.txt root@192.168.1.3:/some/path/test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（5）<code>-l</code></strong></p><p><code>-l</code>参数用来限制传输数据的带宽速率，单位是 Kbit/sec。对于多人分享的带宽，这个参数可以留出一部分带宽供其他人使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-l</span> <span class="token number">80</span> yourusername@yourserver:/home/yourusername/* <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code>scp</code>命令占用的带宽限制为每秒 80K 比特位，即每秒 10K 字节。</p><p><strong>（6）<code>-p</code></strong></p><p><code>-p</code>参数用来保留修改时间（modification time）、访问时间（access time）、文件状态（mode）等原始文件的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-p</span> ~/test.txt root@192.168.1.3:/some/path/test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（7）<code>-P</code></strong></p><p><code>-P</code>参数用来指定远程主机的 SSH 端口。如果远程主机使用默认端口22，可以不用指定，否则需要用<code>-P</code>参数在命令中指定。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">2222</span> user@host:directory/SourceFile TargetFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（8）<code>-q</code></strong></p><p><code>-q</code>参数用来关闭显示拷贝的进度条。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-q</span> Label.pdf mrarianto@202.x.x.x:.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（9）<code>-r</code></strong></p><p><code>-r</code>参数表示是否以递归方式复制目录。</p><p><strong>（10）<code>-v</code></strong></p><p><code>-v</code>参数用来显示详细的输出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">scp</span> <span class="token parameter variable">-v</span> ~/test.txt root@192.168.1.3:/root/help2356.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,65),d=[i];function o(r,t){return s(),a("div",null,d)}const p=e(c,[["render",o],["__file","scp.html.vue"]]);export{p as default};
