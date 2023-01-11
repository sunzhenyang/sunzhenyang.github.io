import{_ as n,P as o,Q as d,$ as e,a0 as a,a1 as c,a2 as l,F as r}from"./framework-0028f3de.js";const t={},i=l(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>SSH 除了登录服务器，还有一大用途，就是作为加密通信的中介，充当两台服务器之间的通信加密跳板，使得原本不加密的通信变成加密通信。这个功能称为端口转发（port forwarding），又称 SSH 隧道（tunnel）。</p><p>端口转发有两个主要作用：</p><p>（1）将不加密的数据放在 SSH 安全连接里面传输，使得原本不安全的网络服务增加了安全性，比如通过端口转发访问 Telnet、FTP 等明文服务，数据传输就都会加密。</p><p>（2）作为数据通信的加密跳板，绕过网络防火墙。</p><p>端口转发有三种使用方法：动态转发，本地转发，远程转发。下面逐一介绍。</p><h2 id="动态转发" tabindex="-1"><a class="header-anchor" href="#动态转发" aria-hidden="true">#</a> 动态转发</h2><p>动态转发指的是，本机与 SSH 服务器之间创建了一个加密连接，然后本机内部针对某个端口的通信，都通过这个加密连接转发。它的一个使用场景就是，访问所有外部网站，都通过 SSH 转发。</p><p>动态转发需要把本地端口绑定到 SSH 服务器。至于 SSH 服务器要去访问哪一个网站，完全是动态的，取决于原始通信，所以叫做动态转发。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-D</span> local-port tunnel-host <span class="token parameter variable">-N</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>-D</code>表示动态转发，<code>local-port</code>是本地端口，<code>tunnel-host</code>是 SSH 服务器，<code>-N</code>表示这个 SSH 连接只进行端口转发，不登录远程 Shell，不能执行远程命令，只能充当隧道。</p><p>举例来说，如果本地端口是<code>2121</code>，那么动态转发的命令就是下面这样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-D</span> <span class="token number">2121</span> tunnel-host <span class="token parameter variable">-N</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，这种转发采用了 SOCKS5 协议。访问外部网站时，需要把 HTTP 请求转成 SOCKS5 协议，才能把本地端口的请求转发出去。</p><p>下面是 SSH 隧道建立后的一个使用实例。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-x</span> socks5://localhost:2121 http://www.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，curl 的<code>-x</code>参数指定代理服务器，即通过 SOCKS5 协议的本地<code>2121</code>端口，访问<code>http://www.example.com</code>。</p><p>如果经常使用动态转发，可以将设置写入 SSH 客户端的用户个人配置文件（<code>~/.ssh/config</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DynamicForward tunnel-host:local-port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="本地转发" tabindex="-1"><a class="header-anchor" href="#本地转发" aria-hidden="true">#</a> 本地转发</h2><p>本地转发（local forwarding）指的是，SSH 服务器作为中介的跳板机，建立本地计算机与特定目标网站之间的加密连接。本地转发是在本地计算机的 SSH 客户端建立的转发规则。</p><p>它会指定一个本地端口（local-port），所有发向那个端口的请求，都会转发到 SSH 跳板机（tunnel-host），然后 SSH 跳板机作为中介，将收到的请求发到目标服务器（target-host）的目标端口（target-port）。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>$ ssh -L local-port:target-host:target-port tunnel-host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>-L</code>参数表示本地转发，<code>local-port</code>是本地端口，<code>target-host</code>是你想要访问的目标服务器，<code>target-port</code>是目标服务器的端口，<code>tunnel-host</code>是 SSH 跳板机。</p><p>举例来说，现在有一台 SSH 跳板机<code>tunnel-host</code>，我们想要通过这台机器，在本地<code>2121</code>端口与目标网站<code>www.example.com</code>的80端口之间建立 SSH 隧道，就可以写成下面这样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">2121</span>:www.example.com:80 tunnel-host <span class="token parameter variable">-N</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，访问本机的<code>2121</code>端口，就是访问<code>www.example.com</code>的80端口。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> http://localhost:2121
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，本地端口转发采用 HTTP 协议，不用转成 SOCKS5 协议。</p><p>另一个例子是加密访问邮件获取协议 POP3。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">1100</span>:mail.example.com:110 mail.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令将本机的1100端口，绑定邮件服务器<code>mail.example.com</code>的110端口（POP3 协议的默认端口）。端口转发建立以后，POP3 邮件客户端只需要访问本机的1100端口，请求就会通过 SSH 跳板机（这里是<code>mail.example.com</code>），自动转发到<code>mail.example.com</code>的110端口。</p><p>上面这种情况有一个前提条件，就是<code>mail.example.com</code>必须运行 SSH 服务器。否则，就必须通过另一台 SSH 服务器中介，执行的命令要改成下面这样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">1100</span>:mail.example.com:110 other.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，本机的1100端口还是绑定<code>mail.example.com</code>的110端口，但是由于<code>mail.example.com</code>没有运行 SSH 服务器，所以必须通过<code>other.example.com</code>中介。本机的 POP3 请求通过1100端口，先发给<code>other.example.com</code>的22端口（sshd 默认端口），再由后者转给<code>mail.example.com</code>，得到数据以后再原路返回。</p><p>注意，采用上面的中介方式，只有本机到<code>other.example.com</code>的这一段是加密的，<code>other.example.com</code>到<code>mail.example.com</code>的这一段并不加密。</p><p>这个命令最好加上<code>-N</code>参数，表示不在 SSH 跳板机执行远程命令，让 SSH 只充当隧道。另外还有一个<code>-f</code>参数表示 SSH 连接在后台运行。</p><p>如果经常使用本地转发，可以将设置写入 SSH 客户端的用户个人配置文件（<code>~/.ssh/config</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Host test.example.com
LocalForward client-IP:client-port server-IP:server-port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程转发" tabindex="-1"><a class="header-anchor" href="#远程转发" aria-hidden="true">#</a> 远程转发</h2><p>远程转发指的是在远程 SSH 服务器建立的转发规则。</p><p>它跟本地转发正好反过来。建立本地计算机到远程计算机的 SSH 隧道以后，本地转发是通过本地计算机访问远程计算机，而远程转发则是通过远程计算机访问本地计算机。它的命令格式如下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-R</span> remote-port:target-host:target-port <span class="token parameter variable">-N</span> remotehost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>-R</code>参数表示远程端口转发，<code>remote-port</code>是远程计算机的端口，<code>target-host</code>和<code>target-port</code>是目标服务器及其端口，<code>remotehost</code>是远程计算机。</p><p>远程转发主要针对内网的情况。下面举两个例子。</p><p>第一个例子是内网某台服务器<code>localhost</code>在 80 端口开了一个服务，可以通过远程转发将这个 80 端口，映射到具有公网 IP 地址的<code>my.public.server</code>服务器的 8080 端口，使得访问<code>my.public.server:8080</code>这个地址，就可以访问到那台内网服务器的 80 端口。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-R</span> <span class="token number">8080</span>:localhost:80 <span class="token parameter variable">-N</span> my.public.server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令是在内网<code>localhost</code>服务器上执行，建立从<code>localhost</code>到<code>my.public.server</code>的 SSH 隧道。运行以后，用户访问<code>my.public.server:8080</code>，就会自动映射到<code>localhost:80</code>。</p><p>第二个例子是本地计算机<code>local</code>在外网，SSH 跳板机和目标服务器<code>my.private.server</code>都在内网，必须通过 SSH 跳板机才能访问目标服务器。但是，本地计算机<code>local</code>无法访问内网之中的 SSH 跳板机，而 SSH 跳板机可以访问本机计算机。</p><p>由于本机无法访问内网 SSH 跳板机，就无法从外网发起 SSH 隧道，建立端口转发。必须反过来，从 SSH 跳板机发起隧道，建立端口转发，这时就形成了远程端口转发。跳板机执行下面的命令，绑定本地计算机<code>local</code>的<code>2121</code>端口，去访问<code>my.private.server:80</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-R</span> <span class="token number">2121</span>:my.private.server:80 <span class="token parameter variable">-N</span> <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令是在 SSH 跳板机上执行的，建立跳板机到<code>local</code>的隧道，并且这条隧道的出口映射到<code>my.private.server:80</code>。</p><p>显然，远程转发要求本地计算机<code>local</code>也安装了 SSH 服务器，这样才能接受 SSH 跳板机的远程登录。</p><p>执行上面的命令以后，跳板机到<code>local</code>的隧道已经建立了。然后，就可以从本地计算机访问目标服务器了，即在本机执行下面的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> http://localhost:2121
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本机执行上面的命令以后，就会输出服务器<code>my.private.server</code>的 80 端口返回的内容。</p><p>如果经常执行远程端口转发，可以将设置写入 SSH 客户端的用户个人配置文件（<code>~/.ssh/config</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Host remote-forward
  HostName test.example.com
  RemoteForward remote-port target-host:target-port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成上面的设置后，执行下面的命令就会建立远程转发。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-N</span> remote-forward

<span class="token comment"># 等同于</span>
$ <span class="token function">ssh</span> <span class="token parameter variable">-R</span> remote-port:target-host:target-port <span class="token parameter variable">-N</span> test.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><p>下面看两个端口转发的实例。</p><h3 id="简易-vpn" tabindex="-1"><a class="header-anchor" href="#简易-vpn" aria-hidden="true">#</a> 简易 VPN</h3><p>VPN 用来在外网与内网之间建立一条加密通道。内网的服务器不能从外网直接访问，必须通过一个跳板机，如果本机可以访问跳板机，就可以使用 SSH 本地转发，简单实现一个 VPN。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">2080</span>:corp-server:80 <span class="token parameter variable">-L</span> <span class="token number">2443</span>:corp-server:443 tunnel-host <span class="token parameter variable">-N</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令通过 SSH 跳板机，将本机的<code>2080</code>端口绑定内网服务器的<code>80</code>端口，本机的<code>2443</code>端口绑定内网服务器的<code>443</code>端口。</p><h3 id="两级跳板" tabindex="-1"><a class="header-anchor" href="#两级跳板" aria-hidden="true">#</a> 两级跳板</h3><p>端口转发可以有多级，比如新建两个 SSH 隧道，第一个隧道转发给第二个隧道，第二个隧道才能访问目标服务器。</p><p>首先，在本机新建第一级隧道。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">7999</span>:localhost:2999 tunnel1-host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令在本地<code>7999</code>端口与<code>tunnel1-host</code>之间建立一条隧道，隧道的出口是<code>tunnel1-host</code>的<code>localhost:2999</code>，也就是<code>tunnel1-host</code>收到本机的请求以后，转发给自己的<code>2999</code>端口。</p><p>然后，在第一台跳板机（<code>tunnel1-host</code>）执行下面的命令，新建第二级隧道。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">2999</span>:target-host:7999 tunnel2-host <span class="token parameter variable">-N</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令将第一台跳板机<code>tunnel1-host</code>的<code>2999</code>端口，通过第二台跳板机<code>tunnel2-host</code>，连接到目标服务器<code>target-host</code>的<code>7999</code>端口。</p><p>最终效果就是，访问本机的<code>7999</code>端口，就会转发到<code>target-host</code>的<code>7999</code>端口。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,76),p={href:"https://solitum.net/posts/an-illustrated-guide-to-ssh-tunnels/",target:"_blank",rel:"noopener noreferrer"};function m(h,u){const s=r("ExternalLinkIcon");return o(),d("div",null,[i,e("ul",null,[e("li",null,[e("a",p,[a("An Illustrated Guide to SSH Tunnels"),c(s)]),a(", Scott Wiersdorf")])])])}const b=n(t,[["render",m],["__file","port-forwarding.html.vue"]]);export{b as default};
