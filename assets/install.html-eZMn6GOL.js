import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as r,b as i,d as t,e as n,w as c,f as s}from"./app-BybQgHW9.js";const g="/assets/install1-CA_7Sh-N.png",d="/assets/install2-DvK43m_O.png",u="/assets/install3-IDWrNVFt.png",f="/assets/install4-Bg7fG38I.png",h="/assets/install5-2jm5z81x.png",m="/assets/install6-C1S8ByOx.png",_="/assets/install7-IGhEcabx.png",b="/assets/install8-DYXZsPz7.png",G="/assets/install9--l8VL0zp.png",v="/assets/install10-D9EI1SXV.png",S="/assets/install11-SqTSbvSr.png",y="/assets/install12-D9-tSmB0.png",x="/assets/install13-B0keP984.png",k="/assets/install14-hQ4zG--P.png",z="/assets/shell-C5IizDO0.png",C="/assets/github-DX7jOaOe.png",L="/assets/githubSSH-DItkPdsg.png",V={},B=i("h2",{id:"git-下载",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#git-下载"},[i("span",null,"Git 下载")])],-1),w={href:"https://git-scm.com/downloads/",target:"_blank",rel:"noopener noreferrer"},H=s('<h2 id="git-的安装" tabindex="-1"><a class="header-anchor" href="#git-的安装"><span>Git 的安装</span></a></h2><ol><li><p>同意协议并选择安装位置 (不建议更改安装位置)</p><figure><img src="'+g+'" alt="安装协议" tabindex="0" loading="lazy"><figcaption>安装协议</figcaption></figure><figure><img src="'+d+'" alt="安装位置" tabindex="0" loading="lazy"><figcaption>安装位置</figcaption></figure></li><li><p>启用 LFS 支持，其他随意 (影响不大)</p><figure><img src="'+u+'" alt="组件选择" tabindex="0" loading="lazy"><figcaption>组件选择</figcaption></figure></li><li><p>自行决定是否创建启动菜单</p><figure><img src="'+f+'" alt="是否创建启动菜" tabindex="0" loading="lazy"><figcaption>是否创建启动菜</figcaption></figure></li><li><p>选择使用 VS Code 作为 git 的默认编辑器。</p><figure><img src="'+h+'" alt="设置默认编辑器" tabindex="0" loading="lazy"><figcaption>设置默认编辑器</figcaption></figure></li><li><p>选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。</p><figure><img src="'+m+'" alt="设置默认分支名称" tabindex="0" loading="lazy"><figcaption>设置默认分支名称</figcaption></figure><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。</p></div></li><li><p>选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。</p><figure><img src="'+_+'" alt="Git 命令行" tabindex="0" loading="lazy"><figcaption>Git 命令行</figcaption></figure></li><li><p>使用 OpenSSL Library</p><figure><img src="'+b+'" alt="Git SSL" tabindex="0" loading="lazy"><figcaption>Git SSL</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。</p></div></li><li><p>务必选择最后一项 “原样检出与提交”</p><figure><img src="'+G+'" alt="Git 行尾设置" tabindex="0" loading="lazy"><figcaption>Git 行尾设置</figcaption></figure></li><li><p>选择 Git 终端</p><figure><img src="'+v+'" alt="Git 终端" tabindex="0" loading="lazy"><figcaption>Git 终端</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。</p></div></li><li><p>选择 <code>git pull</code> 的默认行为，保持默认不要改动</p><figure><img src="'+S+'" alt="Git Pull Action" tabindex="0" loading="lazy"><figcaption>Git Pull Action</figcaption></figure></li><li><p>选择凭据储存管理器，请选择第一个跨平台管理器</p><figure><img src="'+y+'" alt="凭据储存管理器设置" tabindex="0" loading="lazy"><figcaption>凭据储存管理器设置</figcaption></figure></li><li><p>额外的选项确认，均勾选即可</p><figure><img src="'+x+'" alt="额外选项" tabindex="0" loading="lazy"><figcaption>额外选项</figcaption></figure></li><li><p>一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定</p><figure><img src="'+k+'" alt="实验性功能" tabindex="0" loading="lazy"><figcaption>实验性功能</figcaption></figure></li></ol><h2 id="git-bash" tabindex="-1"><a class="header-anchor" href="#git-bash"><span>Git Bash</span></a></h2><p>安装完成后，您可以通过搜索找到“Git Bash” (Mac 上叫 Git Shell)，这是一个 Git 提供的命令窗口，您可以在这里运行 Git 命令。</p><figure><img src="'+z+'" alt="Git Bash" tabindex="0" loading="lazy"><figcaption>Git Bash</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您对 VS Code 和 PowerShell 还不熟悉，您可以在接下来的学习与操作中使用 Git Bash。</p></div><h2 id="git-的初次配置" tabindex="-1"><a class="header-anchor" href="#git-的初次配置"><span>Git 的初次配置</span></a></h2>',7),q=s(`<li><p>为 Git 全局配置用户名和邮箱。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将上方的字符串换成您自己的名字和邮箱。</p><p>如:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Mr.Hope&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;mister-hope@outlook.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于 Git 是一个多人协作的版本控制系统，首先您应当设置您的身份。</p></div></li><li><p>创建 SSH Key。打开 Shell (Windows 下打开 cmd)，创建 SSH Key:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;youremail@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您需要把邮件地址换成您自己的邮件地址，然后一路回车，使用默认值即可，由于这个 Key 也不是用于军事目的，所以也无需设置密码。</p><p>如果一切顺利的话，可以在用户主目录里找到 .ssh 目录，里面有 id_rsa 和 id_rsa.pub 两个文件，这两个就是 SSH Key 的秘钥对，id_rsa 是私钥，不能泄露出去，id_rsa.pub 是公钥，可以放心地告诉任何人。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>ssh-keygen 用来生成一堆密钥，作为您的身份识别信息，您可以放心的把公钥交给别人，留下自己的私钥。</p></li><li><p><code>.ssh</code> 目录是默认隐藏的</p></li></ul></div><div class="hint-container info"><p class="hint-container-title">RSA</p><p>RSA 是一种不对称加密，公钥的加密只能通过私钥解开，反之私钥的加密只能由公钥解开。也就是说当您给别人自己的公钥的时候，他们也无法冒充您。</p></div></li>`,2),P={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},T=i("figure",null,[i("img",{src:C,alt:"GitHub 界面简介",tabindex:"0",loading:"lazy"}),i("figcaption",null,"GitHub 界面简介")],-1),A=i("p",null,"登陆 GitHub 后，点击右上角头像，进入设置。",-1),D=i("p",null,'进入 "安全设置" 下的 "SSH 公钥" 界面。',-1),N=i("figure",null,[i("img",{src:L,alt:"GitHub 界面简介",tabindex:"0",loading:"lazy"}),i("figcaption",null,"GitHub 界面简介")],-1),I=i("p",null,"在标题中填写公钥的备注名称，把 id_rsa.pub 文件的内容粘贴到底下的输入框中，设置一个标识此电脑的备注。",-1);function O(F,Y){const l=e("RouteLink"),a=e("ExternalLinkIcon");return p(),r("div",null,[B,i("p",null,[t("官网在国外，网速较慢。在安装 Git 前推荐安装好 "),n(l,{to:"/software/vscode/"},{default:c(()=>[t("VS Code")]),_:1}),t("。")]),i("ul",null,[i("li",null,[i("a",w,[t("官网下载"),n(a)])])]),H,i("ol",null,[q,i("li",null,[i("p",null,[t("打开 "),i("a",P,[t("GitHub"),n(a)]),t(' 并选择 "Sign in" 注册自己的账号。')]),T,A,D,N,I])])])}const R=o(V,[["render",O],["__file","install.html.vue"]]),W=JSON.parse(`{"path":"/technology/git/install.html","title":"安装与配置","lang":"zh-CN","frontmatter":{"title":"安装与配置","icon":"install","category":"Git","article":false,"tag":["Git","软件","安装"],"description":"Git 下载 官网在国外，网速较慢。在安装 Git 前推荐安装好 。 官网下载 Git 的安装 同意协议并选择安装位置 (不建议更改安装位置) 安装协议安装协议 安装位置安装位置 启用 LFS 支持，其他随意 (影响不大) 组件选择组件选择 自行决定是否创建启动菜单 是否创建启动菜是否创建启动菜 选择使用 VS Code 作为 git 的默认编辑器。 ...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/git/install.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"安装与配置"}],["meta",{"property":"og:description","content":"Git 下载 官网在国外，网速较慢。在安装 Git 前推荐安装好 。 官网下载 Git 的安装 同意协议并选择安装位置 (不建议更改安装位置) 安装协议安装协议 安装位置安装位置 启用 LFS 支持，其他随意 (影响不大) 组件选择组件选择 自行决定是否创建启动菜单 是否创建启动菜是否创建启动菜 选择使用 VS Code 作为 git 的默认编辑器。 ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:tag","content":"安装"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"安装与配置\\",\\"description\\":\\"Git 下载 官网在国外，网速较慢。在安装 Git 前推荐安装好 。 官网下载 Git 的安装 同意协议并选择安装位置 (不建议更改安装位置) 安装协议安装协议 安装位置安装位置 启用 LFS 支持，其他随意 (影响不大) 组件选择组件选择 自行决定是否创建启动菜单 是否创建启动菜是否创建启动菜 选择使用 VS Code 作为 git 的默认编辑器。 ...\\"}"]]},"headers":[{"level":2,"title":"Git 下载","slug":"git-下载","link":"#git-下载","children":[]},{"level":2,"title":"Git 的安装","slug":"git-的安装","link":"#git-的安装","children":[]},{"level":2,"title":"Git Bash","slug":"git-bash","link":"#git-bash","children":[]},{"level":2,"title":"Git 的初次配置","slug":"git-的初次配置","link":"#git-的初次配置","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"technology/git/install.md","localizedDate":"2023年1月11日","excerpt":"<h2>Git 下载</h2>\\n<p>官网在国外，网速较慢。在安装 Git 前推荐安装好 <a href=\\"/software/vscode/\\" target=\\"_blank\\">VS Code</a>。</p>\\n<ul>\\n<li><a href=\\"https://git-scm.com/downloads/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网下载</a></li>\\n</ul>\\n<h2>Git 的安装</h2>\\n<ol>\\n<li>\\n<p>同意协议并选择安装位置 (不建议更改安装位置)</p>\\n<figure><figcaption>安装协议</figcaption></figure>\\n<figure><figcaption>安装位置</figcaption></figure>\\n</li>\\n<li>\\n<p>启用 LFS 支持，其他随意 (影响不大)</p>\\n<figure><figcaption>组件选择</figcaption></figure>\\n</li>\\n<li>\\n<p>自行决定是否创建启动菜单</p>\\n<figure><figcaption>是否创建启动菜</figcaption></figure>\\n</li>\\n<li>\\n<p>选择使用 VS Code 作为 git 的默认编辑器。</p>\\n<figure><figcaption>设置默认编辑器</figcaption></figure>\\n</li>\\n<li>\\n<p>选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。</p>\\n<figure><figcaption>设置默认分支名称</figcaption></figure>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。</p>\\n</div>\\n</li>\\n<li>\\n<p>选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。</p>\\n<figure><figcaption>Git 命令行</figcaption></figure>\\n</li>\\n<li>\\n<p>使用 OpenSSL Library</p>\\n<figure><figcaption>Git SSL</figcaption></figure>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。</p>\\n</div>\\n</li>\\n<li>\\n<p>务必选择最后一项 “原样检出与提交”</p>\\n<figure><figcaption>Git 行尾设置</figcaption></figure>\\n</li>\\n<li>\\n<p>选择 Git 终端</p>\\n<figure><figcaption>Git 终端</figcaption></figure>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。</p>\\n</div>\\n</li>\\n<li>\\n<p>选择 <code>git pull</code> 的默认行为，保持默认不要改动</p>\\n<figure><figcaption>Git Pull Action</figcaption></figure>\\n</li>\\n<li>\\n<p>选择凭据储存管理器，请选择第一个跨平台管理器</p>\\n<figure><figcaption>凭据储存管理器设置</figcaption></figure>\\n</li>\\n<li>\\n<p>额外的选项确认，均勾选即可</p>\\n<figure><figcaption>额外选项</figcaption></figure>\\n</li>\\n<li>\\n<p>一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定</p>\\n<figure><figcaption>实验性功能</figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}`);export{R as comp,W as data};
