import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as n}from"./app-BybQgHW9.js";const d={},i=n(`<p>SSH 默认采用密码登录，这种方法有很多缺点，简单的密码不安全，复杂的密码不容易记忆，每次手动输入也很麻烦。密钥登录是比密码登录更好的解决方案。</p><h2 id="密钥是什么" tabindex="-1"><a class="header-anchor" href="#密钥是什么"><span>密钥是什么</span></a></h2><p>密钥（key）是一个非常大的数字，通过加密算法得到。对称加密只需要一个密钥，非对称加密需要两个密钥成对使用，分为公钥（public key）和私钥（private key）。</p><p>SSH 密钥登录采用的是非对称加密，每个用户通过自己的密钥登录。其中，私钥必须私密保存，不能泄漏；公钥则是公开的，可以对外发送。它们的关系是，公钥和私钥是一一对应的，每一个私钥都有且仅有一个对应的公钥，反之亦然。</p><p>如果数据使用公钥加密，那么只有使用对应的私钥才能解密，其他密钥都不行；反过来，如果使用私钥加密（这个过程一般称为“签名”），也只有使用对应的公钥解密。</p><h2 id="密钥登录的过程" tabindex="-1"><a class="header-anchor" href="#密钥登录的过程"><span>密钥登录的过程</span></a></h2><p>SSH 密钥登录分为以下的步骤。</p><p>预备步骤，客户端通过<code>ssh-keygen</code>生成自己的公钥和私钥。</p><p>第一步，手动将客户端的公钥放入远程服务器的指定位置。</p><p>第二步，客户端向服务器发起 SSH 登录的请求。</p><p>第三步，服务器收到用户 SSH 登录的请求，发送一些随机数据给用户，要求用户证明自己的身份。</p><p>第四步，客户端收到服务器发来的数据，使用私钥对数据进行签名，然后再发还给服务器。</p><p>第五步，服务器收到客户端发来的加密签名后，使用对应的公钥解密，然后跟原始数据比较。如果一致，就允许用户登录。</p><h2 id="ssh-keygen命令-生成密钥" tabindex="-1"><a class="header-anchor" href="#ssh-keygen命令-生成密钥"><span><code>ssh-keygen</code>命令：生成密钥</span></a></h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3><p>密钥登录时，首先需要生成公钥和私钥。OpenSSH 提供了一个工具程序<code>ssh-keygen</code>命令，用来生成密钥。</p><p>直接输入<code>ssh-keygen</code>，程序会询问一系列问题，然后生成密钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-keygen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通常做法是使用<code>-t</code>参数，指定密钥的加密算法。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> dsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例中，<code>-t</code>参数用来指定密钥的加密算法，一般会选择 DSA 算法或 RSA 算法。如果省略该参数，默认使用 RSA 算法。</p><p>输入上面的命令以后，<code>ssh-keygen</code>会要求用户回答一些问题。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> dsa
Generating public/private dsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/home/username/.ssh/id_dsa<span class="token punctuation">)</span>:  press ENTER
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>: ********
Enter same passphrase again: ********
Your identification has been saved <span class="token keyword">in</span> /home/username/.ssh/id_dsa.
Your public key has been saved <span class="token keyword">in</span> /home/username/.ssh/id_dsa.pub.
The key fingerprint is:
<span class="token number">14</span>:ba:06:98:a8:98:ad:27:b5:ce:55:85:ec:64:37:19 username@shell.isp.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，执行<code>ssh-keygen</code>命令以后，会出现第一个问题，询问密钥保存的文件名，默认是<code>~/.ssh/id_dsa</code>文件，这个是私钥的文件名，对应的公钥文件<code>~/.ssh/id_dsa.pub</code>是自动生成的。用户的密钥一般都放在主目录的<code>.ssh</code>目录里面。</p><p>如果选择<code>rsa</code>算法，生成的密钥文件默认就会是<code>~/.ssh/id_rsa</code>（私钥）和<code>~/.ssh/id_rsa.pub</code>（公钥）。</p><p>接着，就会是第二个问题，询问是否要为私钥文件设定密码保护（passphrase）。这样的话，即使入侵者拿到私钥，还是需要破解密码。如果为了方便，不想设定密码保护，可以直接按回车键，密码就会为空。后面还会让你再输入一次密码，两次输入必须一致。注意，这里“密码”的英文单词是 passphrase，这是为了避免与 Linux 账户的密码单词 password 混淆，表示这不是用户系统账户的密码。</p><p>最后，就会生成私钥和公钥，屏幕上还会给出公钥的指纹，以及当前的用户名和主机名作为注释，用来识别密钥的来源。</p><p>公钥文件和私钥文件都是文本文件，可以用文本编辑器看一下它们的内容。公钥文件的内容类似下面这样。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIEAvpB4lUbAaEbh9u6HLig7amsfywD4fqSZq2ikACIUBn3GyRPfeF93l/
weQh702ofXbDydZAKMcDvBJqRhUotQUwqV6HJxqoqPDlPGUUyo8RDIkLUIPRyq
ypZxmK9aCXokFiHoGCXfQ9imUP/w/jfqb9ByDtG97tUJF6nFMP5WzhM<span class="token operator">=</span> username@shell.isp.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，末尾的<code>username@shell.isp.com</code>是公钥的注释，用来识别不同的公钥，表示这是哪台主机（<code>shell.isp.com</code>）的哪个用户（<code>username</code>）的公钥，不是必需项。</p><p>注意，公钥只有一行。因为它太长了，所以上面分成三行显示。</p><p>下面的命令可以列出用户所有的公钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> ~/.ssh/id_*.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成密钥以后，建议修改它们的权限，防止其他人读取。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/id_rsa
$ <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h3><p><code>ssh-keygen</code>的命令行配置项，主要有下面这些。</p><p><strong>（1）<code>-b</code></strong></p><p><code>-b</code>参数指定密钥的二进制位数。这个参数值越大，密钥就越不容易破解，但是加密解密的计算开销也会加大。</p><p>一般来说，<code>-b</code>至少应该是<code>1024</code>，更安全一些可以设为<code>2048</code>或者更高。</p><p><strong>（2）<code>-C</code></strong></p><p><code>-C</code>参数可以为密钥文件指定新的注释，格式为<code>username@host</code>。</p><p>下面命令生成一个4096位 RSA 加密算法的密钥对，并且给出了用户名和主机名。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@domain.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（3）<code>-f</code></strong></p><p><code>-f</code>参数指定生成的私钥文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> dsa <span class="token parameter variable">-f</span> mykey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令会在当前目录生成私钥文件<code>mykey</code>和公钥文件<code>mykey.pub</code>。</p><p><strong>（4）<code>-F</code></strong></p><p><code>-F</code>参数检查某个主机名是否在<code>known_hosts</code>文件里面。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-F</span> example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（5）<code>-N</code></strong></p><p><code>-N</code>参数用于指定私钥的密码（passphrase）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> dsa <span class="token parameter variable">-N</span> secretword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（6）<code>-p</code></strong></p><p><code>-p</code>参数用于重新指定私钥的密码（passphrase）。它与<code>-N</code>的不同之处在于，新密码不在命令中指定，而是执行后再输入。ssh 先要求输入旧密码，然后要求输入两遍新密码。</p><p><strong>（7）<code>-R</code></strong></p><p><code>-R</code>参数将指定的主机公钥指纹移出<code>known_hosts</code>文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-R</span> example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（8）<code>-t</code></strong></p><p><code>-t</code>参数用于指定生成密钥的加密算法，一般为<code>dsa</code>或<code>rsa</code></p><h2 id="手动上传公钥" tabindex="-1"><a class="header-anchor" href="#手动上传公钥"><span>手动上传公钥</span></a></h2><p>生成密钥以后，公钥必须上传到服务器，才能使用公钥登录。</p><p>OpenSSH 规定，用户公钥保存在服务器的<code>~/.ssh/authorized_keys</code>文件。你要以哪个用户的身份登录到服务器，密钥就必须保存在该用户主目录的<code>~/.ssh/authorized_keys</code>文件。只要把公钥添加到这个文件之中，就相当于公钥上传到服务器了。每个公钥占据一行。如果该文件不存在，可以手动创建。</p><p>用户可以手动编辑该文件，把公钥粘贴进去，也可以在本机计算机上，执行下面的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.ssh/id_rsa.pub <span class="token operator">|</span> <span class="token function">ssh</span> user@host <span class="token string">&quot;mkdir -p ~/.ssh &amp;&amp; cat &gt;&gt; ~/.ssh/authorized_keys&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例中，<code>user@host</code>要替换成你所要登录的用户名和主机名。</p><p>注意，<code>authorized_keys</code>文件的权限要设为<code>644</code>，即只有文件所有者才能写。如果权限设置不对，SSH 服务器可能会拒绝读取该文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">chmod</span> <span class="token number">644</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只要公钥上传到服务器，下次登录时，OpenSSH 就会自动采用密钥登录，不再提示输入密码。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-l</span> username shell.isp.com
Enter passphrase <span class="token keyword">for</span> key <span class="token string">&#39;/home/you/.ssh/id_dsa&#39;</span><span class="token builtin class-name">:</span> ************
Last login: Mon Mar <span class="token number">24</span> 02:17:27 <span class="token number">2014</span> from ex.ample.com
shell.isp.com<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，SSH 客户端使用私钥之前，会要求用户输入密码（passphrase），用来解开私钥。</p><h2 id="ssh-copy-id-命令-自动上传公钥" tabindex="-1"><a class="header-anchor" href="#ssh-copy-id-命令-自动上传公钥"><span>ssh-copy-id 命令：自动上传公钥</span></a></h2><p>OpenSSH 自带一个<code>ssh-copy-id</code>命令，可以自动将公钥拷贝到远程服务器的<code>~/.ssh/authorized_keys</code>文件。如果<code>~/.ssh/authorized_keys</code>文件不存在，<code>ssh-copy-id</code>命令会自动创建该文件。</p><p>用户在本地计算机执行下面的命令，就可以把本地的公钥拷贝到服务器。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-copy-id <span class="token parameter variable">-i</span> key_file user@host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>-i</code>参数用来指定公钥文件，<code>user</code>是所要登录的账户名，<code>host</code>是服务器地址。如果省略用户名，默认为当前的本机用户名。执行完该命令，公钥就会拷贝到服务器。</p><p>注意，公钥文件可以不指定路径和<code>.pub</code>后缀名，<code>ssh-copy-id</code>会自动在<code>~/.ssh</code>目录里面寻找。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-copy-id <span class="token parameter variable">-i</span> id_rsa user@host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，公钥文件会自动匹配到<code>~/.ssh/id_rsa.pub</code>。</p><p><code>ssh-copy-id</code>会采用密码登录，系统会提示输入远程服务器的密码。</p><p>注意，<code>ssh-copy-id</code>是直接将公钥添加到<code>authorized_keys</code>文件的末尾。如果<code>authorized_keys</code>文件的末尾不是一个换行符，会导致新的公钥添加到前一个公钥的末尾，两个公钥连在一起，使得它们都无法生效。所以，如果<code>authorized_keys</code>文件已经存在，使用<code>ssh-copy-id</code>命令之前，务必保证<code>authorized_keys</code>文件的末尾是换行符（假设该文件已经存在）。</p><h2 id="ssh-agent-命令-ssh-add-命令" tabindex="-1"><a class="header-anchor" href="#ssh-agent-命令-ssh-add-命令"><span>ssh-agent 命令，ssh-add 命令</span></a></h2><h3 id="基本用法-1" tabindex="-1"><a class="header-anchor" href="#基本用法-1"><span>基本用法</span></a></h3><p>私钥设置了密码以后，每次使用都必须输入密码，有时让人感觉非常麻烦。比如，连续使用<code>scp</code>命令远程拷贝文件时，每次都要求输入密码。</p><p><code>ssh-agent</code>命令就是为了解决这个问题而设计的，它让用户在整个 Bash 对话（session）之中，只在第一次使用 SSH 命令时输入密码，然后将私钥保存在内存中，后面都不需要再输入私钥的密码了。</p><p>第一步，使用下面的命令新建一次命令行对话。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-agent <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，如果你使用的命令行环境不是 Bash，可以用其他的 Shell 命令代替。比如<code>zsh</code>和<code>fish</code>。</p><p>如果想在当前对话启用<code>ssh-agent</code>，可以使用下面的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">\`</span>ssh-agent<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>ssh-agent</code>会先自动在后台运行，并将需要设置的环境变量输出在屏幕上，类似下面这样。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-agent
<span class="token assign-left variable"><span class="token environment constant">SSH_AUTH_SOCK</span></span><span class="token operator">=</span>/tmp/ssh-barrett/ssh-22841-agent<span class="token punctuation">;</span> <span class="token builtin class-name">export</span> <span class="token environment constant">SSH_AUTH_SOCK</span><span class="token punctuation">;</span>
<span class="token assign-left variable">SSH_AGENT_PID</span><span class="token operator">=</span><span class="token number">22842</span><span class="token punctuation">;</span> <span class="token builtin class-name">export</span> SSH_AGENT_PID<span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> Agent pid <span class="token number">22842</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>eval</code>命令的作用，就是运行上面的<code>ssh-agent</code>命令的输出，设置环境变量。</p><p>第二步，在新建的 Shell 对话里面，使用<code>ssh-add</code>命令添加默认的私钥（比如<code>~/.ssh/id_rsa</code>，或<code>~/.ssh/id_dsa</code>，或<code>~/.ssh/id_ecdsa</code>，或<code>~/.ssh/id_ed25519</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-add
Enter passphrase <span class="token keyword">for</span> /home/you/.ssh/id_dsa: ********
Identity added: /home/you/.ssh/id_dsa <span class="token punctuation">(</span>/home/you/.ssh/id_dsa<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，添加私钥时，会要求输入密码。以后，在这个对话里面再使用密钥时，就不需要输入私钥的密码了，因为私钥已经加载到内存里面了。</p><p>如果添加的不是默认私钥，<code>ssh-add</code>命令需要显式指定私钥文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-add my-other-key-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令中，<code>my-other-key-file</code>就是用户指定的私钥文件。</p><p>第三步，使用 ssh 命令正常登录远程服务器。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> remoteHost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>remoteHost</code>是远程服务器的地址，ssh 使用的是默认的私钥。这时如果私钥设有密码，ssh 将不再询问密码，而是直接取出内存里面的私钥。</p><p>如果要使用其他私钥登录服务器，需要使用 ssh 命令的<code>-i</code>参数指定私钥文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> –i OpenSSHPrivateKey remoteHost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，如果要退出<code>ssh-agent</code>，可以直接退出子 Shell（按下 Ctrl + d），也可以使用下面的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-agent <span class="token parameter variable">-k</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ssh-add命令" tabindex="-1"><a class="header-anchor" href="#ssh-add命令"><span><code>ssh-add</code>命令</span></a></h3><p><code>ssh-add</code>命令用来将私钥加入<code>ssh-agent</code>，它有如下的参数。</p><p><strong>（1）<code>-d</code></strong></p><p><code>-d</code>参数从内存中删除指定的私钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-add <span class="token parameter variable">-d</span> name-of-key-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）<code>-D</code></strong></p><p><code>-D</code>参数从内存中删除所有已经添加的私钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-add <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（3）<code>-l</code></strong></p><p><code>-l</code>参数列出所有已经添加的私钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ssh-add <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关闭密码登录" tabindex="-1"><a class="header-anchor" href="#关闭密码登录"><span>关闭密码登录</span></a></h2><p>为了安全性，启用密钥登录之后，最好关闭服务器的密码登录。</p><p>对于 OpenSSH，具体方法就是打开服务器 sshd 的配置文件<code>/etc/ssh/sshd_config</code>，将<code>PasswordAuthentication</code>这一项设为<code>no</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PasswordAuthentication no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改配置文件以后，不要忘了重新启动 sshd，否则不会生效。</p>`,123),c=[i];function o(t,l){return s(),a("div",null,c)}const h=e(d,[["render",o],["__file","key.html.vue"]]),u=JSON.parse(`{"path":"/technology/ssh/key.html","title":"密钥登录","lang":"zh-CN","frontmatter":{"title":"密钥登录","icon":"article","category":"ssh","article":false,"tag":["ssh"],"copyright":"Copyright by 阮一峰","description":"SSH 默认采用密码登录，这种方法有很多缺点，简单的密码不安全，复杂的密码不容易记忆，每次手动输入也很麻烦。密钥登录是比密码登录更好的解决方案。 密钥是什么 密钥（key）是一个非常大的数字，通过加密算法得到。对称加密只需要一个密钥，非对称加密需要两个密钥成对使用，分为公钥（public key）和私钥（private key）。 SSH 密钥登录采用...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ssh/key.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"密钥登录"}],["meta",{"property":"og:description","content":"SSH 默认采用密码登录，这种方法有很多缺点，简单的密码不安全，复杂的密码不容易记忆，每次手动输入也很麻烦。密钥登录是比密码登录更好的解决方案。 密钥是什么 密钥（key）是一个非常大的数字，通过加密算法得到。对称加密只需要一个密钥，非对称加密需要两个密钥成对使用，分为公钥（public key）和私钥（private key）。 SSH 密钥登录采用..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"ssh"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"密钥登录\\",\\"description\\":\\"SSH 默认采用密码登录，这种方法有很多缺点，简单的密码不安全，复杂的密码不容易记忆，每次手动输入也很麻烦。密钥登录是比密码登录更好的解决方案。 密钥是什么 密钥（key）是一个非常大的数字，通过加密算法得到。对称加密只需要一个密钥，非对称加密需要两个密钥成对使用，分为公钥（public key）和私钥（private key）。 SSH 密钥登录采用...\\"}"]]},"headers":[{"level":2,"title":"密钥是什么","slug":"密钥是什么","link":"#密钥是什么","children":[]},{"level":2,"title":"密钥登录的过程","slug":"密钥登录的过程","link":"#密钥登录的过程","children":[]},{"level":2,"title":"ssh-keygen命令：生成密钥","slug":"ssh-keygen命令-生成密钥","link":"#ssh-keygen命令-生成密钥","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"配置项","slug":"配置项","link":"#配置项","children":[]}]},{"level":2,"title":"手动上传公钥","slug":"手动上传公钥","link":"#手动上传公钥","children":[]},{"level":2,"title":"ssh-copy-id 命令：自动上传公钥","slug":"ssh-copy-id-命令-自动上传公钥","link":"#ssh-copy-id-命令-自动上传公钥","children":[]},{"level":2,"title":"ssh-agent 命令，ssh-add 命令","slug":"ssh-agent-命令-ssh-add-命令","link":"#ssh-agent-命令-ssh-add-命令","children":[{"level":3,"title":"基本用法","slug":"基本用法-1","link":"#基本用法-1","children":[]},{"level":3,"title":"ssh-add命令","slug":"ssh-add命令","link":"#ssh-add命令","children":[]}]},{"level":2,"title":"关闭密码登录","slug":"关闭密码登录","link":"#关闭密码登录","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":10.13,"words":3038},"filePathRelative":"technology/ssh/key.md","localizedDate":"2023年1月11日","excerpt":"<p>SSH 默认采用密码登录，这种方法有很多缺点，简单的密码不安全，复杂的密码不容易记忆，每次手动输入也很麻烦。密钥登录是比密码登录更好的解决方案。</p>\\n<h2>密钥是什么</h2>\\n<p>密钥（key）是一个非常大的数字，通过加密算法得到。对称加密只需要一个密钥，非对称加密需要两个密钥成对使用，分为公钥（public key）和私钥（private key）。</p>\\n<p>SSH 密钥登录采用的是非对称加密，每个用户通过自己的密钥登录。其中，私钥必须私密保存，不能泄漏；公钥则是公开的，可以对外发送。它们的关系是，公钥和私钥是一一对应的，每一个私钥都有且仅有一个对应的公钥，反之亦然。</p>","autoDesc":true}`);export{h as comp,u as data};
