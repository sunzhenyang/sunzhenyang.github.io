import{_ as e,o as s,c as n,e as a}from"./app.41291239.js";const d={},c=a(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>Bash \u5185\u7F6E\u4E86 Readline \u5E93\uFF0C\u5177\u6709\u8FD9\u4E2A\u5E93\u63D0\u4F9B\u7684\u5F88\u591A\u201C\u884C\u64CD\u4F5C\u201D\u529F\u80FD\uFF0C\u6BD4\u5982\u547D\u4EE4\u7684\u81EA\u52A8\u8865\u5168\uFF0C\u53EF\u4EE5\u5927\u5927\u52A0\u5FEB\u64CD\u4F5C\u901F\u5EA6\u3002</p><p>\u8FD9\u4E2A\u5E93\u9ED8\u8BA4\u91C7\u7528 Emacs \u5FEB\u6377\u952E\uFF0C\u4E5F\u53EF\u4EE5\u6539\u6210 Vi \u5FEB\u6377\u952E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> -o <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u6539\u56DE Emacs \u5FEB\u6377\u952E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> -o emacs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u6C38\u4E45\u6027\u66F4\u6539\u7F16\u8F91\u6A21\u5F0F\uFF08Emacs / Vi\uFF09\uFF0C\u53EF\u4EE5\u5C06\u547D\u4EE4\u5199\u5728<code>~/.inputrc</code>\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u662F Readline \u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> editing-mode <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u672C\u7AE0\u4ECB\u7ECD\u7684\u5FEB\u6377\u952E\u90FD\u5C5E\u4E8E Emacs \u6A21\u5F0F\u3002Vi \u6A21\u5F0F\u7684\u5FEB\u6377\u952E\uFF0C\u8BFB\u8005\u53EF\u4EE5\u53C2\u8003 Vi \u7F16\u8F91\u5668\u7684\u6559\u7A0B\u3002</p><p>Bash \u9ED8\u8BA4\u5F00\u542F\u8FD9\u4E2A\u5E93\uFF0C\u4F46\u662F\u5141\u8BB8\u5173\u95ED\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> --noediting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>--noediting</code>\u53C2\u6570\u5173\u95ED\u4E86 Readline \u5E93\uFF0C\u542F\u52A8\u7684 Bash \u5C31\u4E0D\u5E26\u6709\u884C\u64CD\u4F5C\u529F\u80FD\u3002</p><h2 id="\u5149\u6807\u79FB\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5149\u6807\u79FB\u52A8" aria-hidden="true">#</a> \u5149\u6807\u79FB\u52A8</h2><p>Readline \u63D0\u4F9B\u5FEB\u901F\u79FB\u52A8\u5149\u6807\u7684\u5FEB\u6377\u952E\u3002</p><ul><li><code>Ctrl + a</code>\uFF1A\u79FB\u5230\u884C\u9996\u3002</li><li><code>Ctrl + b</code>\uFF1A\u5411\u884C\u9996\u79FB\u52A8\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4E0E\u5DE6\u7BAD\u5934\u4F5C\u7528\u76F8\u540C\u3002</li><li><code>Ctrl + e</code>\uFF1A\u79FB\u5230\u884C\u5C3E\u3002</li><li><code>Ctrl + f</code>\uFF1A\u5411\u884C\u5C3E\u79FB\u52A8\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4E0E\u53F3\u7BAD\u5934\u4F5C\u7528\u76F8\u540C\u3002</li><li><code>Alt + f</code>\uFF1A\u79FB\u52A8\u5230\u5F53\u524D\u5355\u8BCD\u7684\u8BCD\u5C3E\u3002</li><li><code>Alt + b</code>\uFF1A\u79FB\u52A8\u5230\u5F53\u524D\u5355\u8BCD\u7684\u8BCD\u9996\u3002</li></ul><p>\u4E0A\u9762\u5FEB\u6377\u952E\u7684 Alt \u952E\uFF0C\u4E5F\u53EF\u4EE5\u7528 ESC \u952E\u4EE3\u66FF\u3002</p><h2 id="\u6E05\u9664\u5C4F\u5E55" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u5C4F\u5E55" aria-hidden="true">#</a> \u6E05\u9664\u5C4F\u5E55</h2><p><code>Ctrl + l</code>\u5FEB\u6377\u952E\u53EF\u4EE5\u6E05\u9664\u5C4F\u5E55\uFF0C\u5373\u5C06\u5F53\u524D\u884C\u79FB\u5230\u5C4F\u5E55\u7684\u7B2C\u4E00\u884C\uFF0C\u4E0E<code>clear</code>\u547D\u4EE4\u4F5C\u7528\u76F8\u540C\u3002</p><h2 id="\u7F16\u8F91\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u64CD\u4F5C" aria-hidden="true">#</a> \u7F16\u8F91\u64CD\u4F5C</h2><p>\u4E0B\u9762\u7684\u5FEB\u6377\u952E\u53EF\u4EE5\u7F16\u8F91\u547D\u4EE4\u884C\u5185\u5BB9\u3002</p><ul><li><code>Ctrl + d</code>\uFF1A\u5220\u9664\u5149\u6807\u4F4D\u7F6E\u7684\u5B57\u7B26\uFF08delete\uFF09\u3002</li><li><code>Ctrl + w</code>\uFF1A\u5220\u9664\u5149\u6807\u524D\u9762\u7684\u5355\u8BCD\u3002</li><li><code>Ctrl + t</code>\uFF1A\u5149\u6807\u4F4D\u7F6E\u7684\u5B57\u7B26\u4E0E\u5B83\u524D\u9762\u4E00\u4F4D\u7684\u5B57\u7B26\u4EA4\u6362\u4F4D\u7F6E\uFF08transpose\uFF09\u3002</li><li><code>Alt + t</code>\uFF1A\u5149\u6807\u4F4D\u7F6E\u7684\u8BCD\u4E0E\u5B83\u524D\u9762\u4E00\u4F4D\u7684\u8BCD\u4EA4\u6362\u4F4D\u7F6E\uFF08transpose\uFF09\u3002</li><li><code>Alt + l</code>\uFF1A\u5C06\u5149\u6807\u4F4D\u7F6E\u81F3\u8BCD\u5C3E\u8F6C\u4E3A\u5C0F\u5199\uFF08lowercase\uFF09\u3002</li><li><code>Alt + u</code>\uFF1A\u5C06\u5149\u6807\u4F4D\u7F6E\u81F3\u8BCD\u5C3E\u8F6C\u4E3A\u5927\u5199\uFF08uppercase\uFF09\u3002</li></ul><p>\u4F7F\u7528<code>Ctrl + d</code>\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5F53\u524D\u884C\u6CA1\u6709\u4EFB\u4F55\u5B57\u7B26\uFF0C\u4F1A\u5BFC\u81F4\u9000\u51FA\u5F53\u524D Shell\uFF0C\u6240\u4EE5\u8981\u5C0F\u5FC3\u3002</p><p>\u526A\u5207\u548C\u7C98\u8D34\u5FEB\u6377\u952E\u5982\u4E0B\u3002</p><ul><li><code>Ctrl + k</code>\uFF1A\u526A\u5207\u5149\u6807\u4F4D\u7F6E\u5230\u884C\u5C3E\u7684\u6587\u672C\u3002</li><li><code>Ctrl + u</code>\uFF1A\u526A\u5207\u5149\u6807\u4F4D\u7F6E\u5230\u884C\u9996\u7684\u6587\u672C\u3002</li><li><code>Alt + d</code>\uFF1A\u526A\u5207\u5149\u6807\u4F4D\u7F6E\u5230\u8BCD\u5C3E\u7684\u6587\u672C\u3002</li><li><code>Alt + Backspace</code>\uFF1A\u526A\u5207\u5149\u6807\u4F4D\u7F6E\u5230\u8BCD\u9996\u7684\u6587\u672C\u3002</li><li><code>Ctrl + y</code>\uFF1A\u5728\u5149\u6807\u4F4D\u7F6E\u7C98\u8D34\u6587\u672C\u3002</li></ul><p>\u540C\u6837\u5730\uFF0CAlt \u952E\u53EF\u4EE5\u7528 Esc \u952E\u4EE3\u66FF\u3002</p><h2 id="\u81EA\u52A8\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u8865\u5168" aria-hidden="true">#</a> \u81EA\u52A8\u8865\u5168</h2><p>\u547D\u4EE4\u8F93\u5165\u5230\u4E00\u534A\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6309\u4E00\u4E0B Tab \u952E\uFF0CReadline \u4F1A\u81EA\u52A8\u8865\u5168\u547D\u4EE4\u6216\u8DEF\u5F84\u3002\u6BD4\u5982\uFF0C\u8F93\u5165<code>cle</code>\uFF0C\u518D\u6309\u4E0B Tab \u952E\uFF0CBash \u4F1A\u81EA\u52A8\u5C06\u8FD9\u4E2A\u547D\u4EE4\u8865\u5168\u4E3A<code>clear</code>\u3002</p><p>\u5982\u679C\u7B26\u5408\u6761\u4EF6\u7684\u547D\u4EE4\u6216\u8DEF\u5F84\u6709\u591A\u4E2A\uFF0C\u5C31\u9700\u8981\u8FDE\u7EED\u6309\u4E24\u6B21 Tab \u952E\uFF0CBash \u4F1A\u63D0\u793A\u6240\u6709\u7B26\u5408\u6761\u4EF6\u7684\u547D\u4EE4\u6216\u8DEF\u5F84\u3002</p><p>\u9664\u4E86\u547D\u4EE4\u6216\u8DEF\u5F84\uFF0CTab \u8FD8\u53EF\u4EE5\u8865\u5168\u5176\u4ED6\u503C\u3002\u5982\u679C\u4E00\u4E2A\u503C\u4EE5<code>$</code>\u5F00\u5934\uFF0C\u5219\u6309\u4E0B Tab \u952E\u4F1A\u8865\u5168\u53D8\u91CF\uFF1B\u5982\u679C\u4EE5<code>~</code>\u5F00\u5934\uFF0C\u5219\u8865\u5168\u7528\u6237\u540D\uFF1B\u5982\u679C\u4EE5<code>@</code>\u5F00\u5934\uFF0C\u5219\u8865\u5168\u4E3B\u673A\u540D\uFF08hostname\uFF09\uFF0C\u4E3B\u673A\u540D\u4EE5\u5217\u5728<code>/etc/hosts</code>\u6587\u4EF6\u91CC\u9762\u7684\u4E3B\u673A\u4E3A\u51C6\u3002</p><p>\u81EA\u52A8\u8865\u5168\u76F8\u5173\u7684\u5FEB\u6377\u952E\u5982\u4E0B\u3002</p><ul><li>Tab\uFF1A\u5B8C\u6210\u81EA\u52A8\u8865\u5168\u3002</li><li><code>Alt + ?</code>\uFF1A\u5217\u51FA\u53EF\u80FD\u7684\u8865\u5168\uFF0C\u4E0E\u8FDE\u6309\u4E24\u6B21 Tab \u952E\u4F5C\u7528\u76F8\u540C\u3002</li><li><code>Alt + /</code>\uFF1A\u5C1D\u8BD5\u6587\u4EF6\u8DEF\u5F84\u8865\u5168\u3002</li><li><code>Ctrl + x /</code>\uFF1A\u5148\u6309<code>Ctrl + x</code>\uFF0C\u518D\u6309<code>/</code>\uFF0C\u7B49\u540C\u4E8E<code>Alt + ?</code>\uFF0C\u5217\u51FA\u53EF\u80FD\u7684\u6587\u4EF6\u8DEF\u5F84\u8865\u5168\u3002</li><li><code>Alt + !</code>\uFF1A\u547D\u4EE4\u8865\u5168\u3002</li><li><code>Ctrl + x !</code>\uFF1A\u5148\u6309<code>Ctrl + x</code>\uFF0C\u518D\u6309<code>!</code>\uFF0C\u7B49\u540C\u4E8E<code>Alt + !</code>\uFF0C\u547D\u4EE4\u8865\u5168\u3002</li><li><code>Alt + ~</code>\uFF1A\u7528\u6237\u540D\u8865\u5168\u3002</li><li><code>Ctrl + x ~</code>\uFF1A\u5148\u6309<code>Ctrl + x</code>\uFF0C\u518D\u6309<code>~</code>\uFF0C\u7B49\u540C\u4E8E<code>Alt + ~</code>\uFF0C\u7528\u6237\u540D\u8865\u5168\u3002</li><li><code>Alt + $</code>\uFF1A\u53D8\u91CF\u540D\u8865\u5168\u3002</li><li><code>Ctrl + x $</code>\uFF1A\u5148\u6309<code>Ctrl + x</code>\uFF0C\u518D\u6309<code>$</code>\uFF0C\u7B49\u540C\u4E8E<code>Alt + $</code>\uFF0C\u53D8\u91CF\u540D\u8865\u5168\u3002</li><li><code>Alt + @</code>\uFF1A\u4E3B\u673A\u540D\u8865\u5168\u3002</li><li><code>Ctrl + x @</code>\uFF1A\u5148\u6309<code>Ctrl + x</code>\uFF0C\u518D\u6309<code>@</code>\uFF0C\u7B49\u540C\u4E8E<code>Alt + @</code>\uFF0C\u4E3B\u673A\u540D\u8865\u5168\u3002</li><li><code>Alt + *</code>\uFF1A\u5728\u547D\u4EE4\u884C\u4E00\u6B21\u6027\u63D2\u5165\u6240\u6709\u53EF\u80FD\u7684\u8865\u5168\u3002</li><li><code>Alt + Tab</code>\uFF1A\u5C1D\u8BD5\u7528<code>.bash_history</code>\u91CC\u9762\u4EE5\u524D\u6267\u884C\u547D\u4EE4\uFF0C\u8FDB\u884C\u8865\u5168\u3002</li></ul><p>\u4E0A\u9762\u7684<code>Alt</code>\u952E\u4E5F\u53EF\u4EE5\u7528 ESC \u952E\u4EE3\u66FF\u3002</p><h2 id="\u64CD\u4F5C\u5386\u53F2" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u5386\u53F2" aria-hidden="true">#</a> \u64CD\u4F5C\u5386\u53F2</h2><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h3><p>Bash \u4F1A\u4FDD\u7559\u7528\u6237\u7684\u64CD\u4F5C\u5386\u53F2\uFF0C\u5373\u7528\u6237\u8F93\u5165\u7684\u6BCF\u4E00\u6761\u547D\u4EE4\u90FD\u4F1A\u8BB0\u5F55\u3002\u6709\u4E86\u64CD\u4F5C\u5386\u53F2\u4EE5\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u65B9\u5411\u952E\u7684<code>\u2191</code>\u548C<code>\u2193</code>\uFF0C\u5FEB\u901F\u6D4F\u89C8\u4E0A\u4E00\u6761\u548C\u4E0B\u4E00\u6761\u547D\u4EE4\u3002</p><p>\u9000\u51FA\u5F53\u524D Shell \u7684\u65F6\u5019\uFF0CBash \u4F1A\u5C06\u7528\u6237\u5728\u5F53\u524D Shell \u7684\u64CD\u4F5C\u5386\u53F2\u5199\u5165<code>~/.bash_history</code>\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u9ED8\u8BA4\u50A8\u5B58500\u4E2A\u64CD\u4F5C\u3002</p><p>\u73AF\u5883\u53D8\u91CF<code>HISTFILE</code>\u603B\u662F\u6307\u5411\u8FD9\u4E2A\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$HISTFILE</span>
/home/me/.bash_history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>history</code>\u547D\u4EE4\u4F1A\u8F93\u51FA\u8FD9\u4E2A\u6587\u4EF6\u7684\u5168\u90E8\u5185\u5BB9\u3002\u7528\u6237\u53EF\u4EE5\u770B\u5230\u6700\u8FD1\u6267\u884C\u8FC7\u7684\u6240\u6709\u547D\u4EE4\uFF0C\u6BCF\u6761\u547D\u4EE4\u4E4B\u524D\u90FD\u6709\u884C\u53F7\u3002\u8D8A\u8FD1\u7684\u547D\u4EE4\uFF0C\u6392\u5728\u8D8A\u540E\u9762\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">history</span>
<span class="token punctuation">..</span>.
<span class="token number">498</span> <span class="token builtin class-name">echo</span> Goodbye
<span class="token number">499</span> <span class="token function">ls</span> ~
<span class="token number">500</span> <span class="token builtin class-name">cd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u5165\u547D\u4EE4\u65F6\uFF0C\u6309\u4E0B<code>Ctrl + r</code>\u5FEB\u6377\u952E\uFF0C\u5C31\u53EF\u4EE5\u641C\u7D22\u64CD\u4F5C\u5386\u53F2\uFF0C\u9009\u62E9\u4EE5\u524D\u6267\u884C\u8FC7\u7684\u547D\u4EE4\u3002\u8FD9\u65F6\u952E\u5165\u547D\u4EE4\u7684\u5F00\u5934\u90E8\u5206\uFF0CShell \u5C31\u4F1A\u81EA\u52A8\u5728\u5386\u53F2\u6587\u4EF6\u4E2D\uFF0C\u67E5\u8BE2\u5E76\u663E\u793A\u6700\u8FD1\u4E00\u6761\u5339\u914D\u7684\u7ED3\u679C\uFF0C\u8FD9\u65F6\u6309\u4E0B\u56DE\u8F66\u952E\uFF0C\u5C31\u4F1A\u6267\u884C\u90A3\u6761\u547D\u4EE4\u3002</p><p>\u4E0B\u9762\u7684\u65B9\u6CD5\u53EF\u4EE5\u5FEB\u901F\u6267\u884C\u4EE5\u524D\u6267\u884C\u8FC7\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> Hello World
Hello World

$ <span class="token builtin class-name">echo</span> Goodbye
Goodbye

$ <span class="token operator">!</span>e
<span class="token builtin class-name">echo</span> Goodbye
Goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>!e</code>\u8868\u793A\u627E\u51FA\u64CD\u4F5C\u5386\u53F2\u4E4B\u4E2D\uFF0C\u6700\u8FD1\u7684\u90A3\u4E00\u6761\u4EE5<code>e</code>\u5F00\u5934\u7684\u547D\u4EE4\u5E76\u6267\u884C\u3002Bash \u4F1A\u5148\u8F93\u51FA\u90A3\u4E00\u6761\u547D\u4EE4<code>echo Goodbye</code>\uFF0C\u7136\u540E\u76F4\u63A5\u6267\u884C\u3002</p><p>\u540C\u7406\uFF0C<code>!echo</code>\u4E5F\u4F1A\u6267\u884C\u6700\u8FD1\u4E00\u6761\u4EE5<code>echo</code>\u5F00\u5934\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token operator">!</span>echo
<span class="token builtin class-name">echo</span> Goodbye
Goodbye

$ <span class="token operator">!</span>echo H
<span class="token builtin class-name">echo</span> Goodbye H
Goodbye H

$ <span class="token operator">!</span>echo H G
<span class="token builtin class-name">echo</span> Goodbye H G
Goodbye H G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C<code>!string</code>\u8BED\u6CD5\u53EA\u4F1A\u5339\u914D\u547D\u4EE4\uFF0C\u4E0D\u4F1A\u5339\u914D\u53C2\u6570\u3002\u6240\u4EE5<code>!echo H</code>\u4E0D\u4F1A\u6267\u884C<code>echo Hello World</code>\uFF0C\u800C\u662F\u4F1A\u6267\u884C<code>echo Goodbye</code>\uFF0C\u5E76\u628A\u53C2\u6570<code>H</code>\u9644\u52A0\u5728\u8FD9\u6761\u547D\u4EE4\u4E4B\u540E\u3002\u540C\u7406\uFF0C<code>!echo H G</code>\u4E5F\u662F\u7B49\u540C\u4E8E<code>echo Goodbye</code>\u547D\u4EE4\u4E4B\u540E\u9644\u52A0<code>H G</code>\u3002</p><p>\u7531\u4E8E<code>!string</code>\u8BED\u6CD5\u4F1A\u6269\u5C55\u6210\u4EE5\u524D\u6267\u884C\u8FC7\u7684\u547D\u4EE4\uFF0C\u6240\u4EE5\u542B\u6709<code>!</code>\u7684\u5B57\u7B26\u4E32\u653E\u5728\u53CC\u5F15\u53F7\u91CC\u9762\uFF0C\u5FC5\u987B\u975E\u5E38\u5C0F\u5FC3\uFF0C\u5982\u679C\u5B83\u540E\u9762\u6709\u975E\u7A7A\u683C\u7684\u5B57\u7B26\uFF0C\u5C31\u5F88\u6709\u53EF\u80FD\u62A5\u9519\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;I say:<span class="token entity" title="\\&quot;">\\&quot;</span>hello!<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
bash: <span class="token operator">!</span><span class="token punctuation">\\</span>: event not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u4F1A\u62A5\u9519\uFF0C\u539F\u56E0\u662F\u611F\u53F9\u53F7\u540E\u9762\u662F\u4E00\u4E2A\u53CD\u659C\u6760\uFF0CBash \u4F1A\u5C1D\u8BD5\u5BFB\u627E\uFF0C\u4EE5\u524D\u662F\u5426\u6267\u884C\u8FC7\u53CD\u659C\u6760\u5F00\u5934\u7684\u547D\u4EE4\uFF0C\u4E00\u65E6\u627E\u4E0D\u5230\u5C31\u4F1A\u62A5\u9519\u3002\u89E3\u51B3\u65B9\u6CD5\u5C31\u662F\u5728\u611F\u53F9\u53F7\u524D\u9762\uFF0C\u4E5F\u52A0\u4E0A\u53CD\u659C\u6760\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;I say:<span class="token entity" title="\\&quot;">\\&quot;</span>hello\\!<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
I say:<span class="token string">&quot;hello\\!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="history-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#history-\u547D\u4EE4" aria-hidden="true">#</a> history \u547D\u4EE4</h3><p>\u524D\u9762\u8BF4\u8FC7\uFF0C<code>history</code>\u547D\u4EE4\u80FD\u663E\u793A\u64CD\u4F5C\u5386\u53F2\uFF0C\u5373<code>.bash_history</code>\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">history</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u8BE5\u547D\u4EE4\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u8BFB\u53D6<code>.bash_history</code>\u6587\u4EF6\u7684\u597D\u5904\u662F\uFF0C\u5B83\u4F1A\u5728\u6240\u6709\u7684\u64CD\u4F5C\u524D\u52A0\u4E0A\u884C\u53F7\uFF0C\u6700\u8FD1\u7684\u64CD\u4F5C\u5728\u6700\u540E\u9762\uFF0C\u884C\u53F7\u6700\u5927\u3002</p><p>\u901A\u8FC7\u5B9A\u5236\u73AF\u5883\u53D8\u91CF<code>HISTTIMEFORMAT</code>\uFF0C\u53EF\u4EE5\u663E\u793A\u6BCF\u4E2A\u64CD\u4F5C\u7684\u65F6\u95F4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">HISTTIMEFORMAT</span><span class="token operator">=</span><span class="token string">&#39;%F %T  &#39;</span>
$ <span class="token function">history</span>
<span class="token number">1</span>  <span class="token number">2013</span>-06-09 <span class="token number">10</span>:40:12   <span class="token function">cat</span> /etc/issue
<span class="token number">2</span>  <span class="token number">2013</span>-06-09 <span class="token number">10</span>:40:12   <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>%F</code>\u76F8\u5F53\u4E8E<code>%Y - %m - %d</code>\uFF0C<code>%T</code>\u76F8\u5F53\u4E8E<code> %H : %M : %S</code>\u3002</p><p>\u53EA\u8981\u8BBE\u7F6E<code>HISTTIMEFORMAT</code>\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u5C31\u4F1A\u5728<code>.bash_history</code>\u6587\u4EF6\u4FDD\u5B58\u547D\u4EE4\u7684\u6267\u884C\u65F6\u95F4\u6233\u3002\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u5C31\u4E0D\u4F1A\u4FDD\u5B58\u65F6\u95F4\u6233\u3002</p><p>\u73AF\u5883\u53D8\u91CF<code>HISTSIZE</code>\u8BBE\u7F6E\u4FDD\u5B58\u5386\u53F2\u64CD\u4F5C\u7684\u6570\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u8BBE\u7F6E\u4FDD\u5B58\u8FC7\u53BB10000\u6761\u64CD\u4F5C\u5386\u53F2\u3002</p><p>\u5982\u679C\u4E0D\u5E0C\u671B\u4FDD\u5B58\u672C\u6B21\u64CD\u4F5C\u7684\u5386\u53F2\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>HISTSIZE</code>\u7B49\u4E8E0\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C<code>HISTSIZE=0</code>\u5199\u5165\u7528\u6237\u4E3B\u76EE\u5F55\u7684<code>~/.bashrc</code>\u6587\u4EF6\uFF0C\u90A3\u4E48\u5C31\u4E0D\u4F1A\u4FDD\u7559\u8BE5\u7528\u6237\u7684\u64CD\u4F5C\u5386\u53F2\u3002\u5982\u679C\u5199\u5165<code>/etc/profile</code>\uFF0C\u6574\u4E2A\u7CFB\u7EDF\u90FD\u4E0D\u4F1A\u4FDD\u7559\u64CD\u4F5C\u5386\u53F2\u3002</p><p>\u73AF\u5883\u53D8\u91CF<code>HISTIGNORE</code>\u53EF\u4EE5\u8BBE\u7F6E\u54EA\u4E9B\u547D\u4EE4\u4E0D\u5199\u5165\u64CD\u4F5C\u5386\u53F2\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HISTIGNORE</span><span class="token operator">=</span><span class="token string">&#39;pwd:ls:exit&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u8BBE\u7F6E\uFF0C<code>pwd</code>\u3001<code>ls</code>\u3001<code>exit</code>\u8FD9\u4E09\u4E2A\u547D\u4EE4\u4E0D\u5199\u5165\u64CD\u4F5C\u5386\u53F2\u3002</p><p>\u5982\u679C\u60F3\u641C\u7D22\u67D0\u4E2A\u4EE5\u524D\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u914D\u5408<code>grep</code>\u547D\u4EE4\u641C\u7D22\u64CD\u4F5C\u5386\u53F2\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">history</span> <span class="token operator">|</span> <span class="token function">grep</span> /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u8FD4\u56DE<code>.bash_history</code>\u6587\u4EF6\u91CC\u9762\uFF0C\u90A3\u4E9B\u5305\u542B<code>/usr/bin</code>\u7684\u547D\u4EE4\u3002</p><p>\u64CD\u4F5C\u5386\u53F2\u7684\u6BCF\u4E00\u6761\u8BB0\u5F55\u90FD\u6709\u7F16\u53F7\u3002\u77E5\u9053\u4E86\u547D\u4EE4\u7684\u7F16\u53F7\u4EE5\u540E\uFF0C\u53EF\u4EE5\u7528<code>\u611F\u53F9\u53F7 + \u7F16\u53F7</code>\u6267\u884C\u8BE5\u547D\u4EE4\u3002\u5982\u679C\u60F3\u8981\u6267\u884C<code>.bash_history</code>\u91CC\u9762\u7684\u7B2C8\u6761\u547D\u4EE4\uFF0C\u53EF\u4EE5\u50CF\u4E0B\u9762\u8FD9\u6837\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token operator">!</span><span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>history</code>\u547D\u4EE4\u7684<code>-c</code>\u53C2\u6570\u53EF\u4EE5\u6E05\u9664\u64CD\u4F5C\u5386\u53F2\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">history</span> -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u76F8\u5173\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u76F8\u5173\u5FEB\u6377\u952E</h3><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u4E0E\u64CD\u4F5C\u5386\u53F2\u76F8\u5173\u7684\u5FEB\u6377\u952E\u3002</p><ul><li><code>Ctrl + p</code>\uFF1A\u663E\u793A\u4E0A\u4E00\u4E2A\u547D\u4EE4\uFF0C\u4E0E\u5411\u4E0A\u7BAD\u5934\u6548\u679C\u76F8\u540C\uFF08previous\uFF09\u3002</li><li><code>Ctrl + n</code>\uFF1A\u663E\u793A\u4E0B\u4E00\u4E2A\u547D\u4EE4\uFF0C\u4E0E\u5411\u4E0B\u7BAD\u5934\u6548\u679C\u76F8\u540C\uFF08next\uFF09\u3002</li><li><code>Alt + &lt;</code>\uFF1A\u663E\u793A\u7B2C\u4E00\u4E2A\u547D\u4EE4\u3002</li><li><code>Alt + &gt;</code>\uFF1A\u663E\u793A\u6700\u540E\u4E00\u4E2A\u547D\u4EE4\uFF0C\u5373\u5F53\u524D\u7684\u547D\u4EE4\u3002</li><li><code>Ctrl + o</code>\uFF1A\u6267\u884C\u5386\u53F2\u6587\u4EF6\u91CC\u9762\u7684\u5F53\u524D\u6761\u76EE\uFF0C\u5E76\u81EA\u52A8\u663E\u793A\u4E0B\u4E00\u6761\u547D\u4EE4\u3002\u8FD9\u5BF9\u91CD\u590D\u6267\u884C\u67D0\u4E2A\u5E8F\u5217\u7684\u547D\u4EE4\u5F88\u6709\u5E2E\u52A9\u3002</li></ul><p>\u611F\u53F9\u53F7<code>!</code>\u7684\u5FEB\u6377\u952E\u5982\u4E0B\u3002</p><ul><li><code>!!</code>\uFF1A\u6267\u884C\u4E0A\u4E00\u4E2A\u547D\u4EE4\u3002</li><li><code>!n</code>\uFF1A<code>n</code>\u4E3A\u6570\u5B57\uFF0C\u6267\u884C\u5386\u53F2\u6587\u4EF6\u91CC\u9762\u884C\u53F7\u4E3A<code>n</code>\u7684\u547D\u4EE4\u3002</li><li><code>!-n</code>\uFF1A\u6267\u884C\u5F53\u524D\u547D\u4EE4\u4E4B\u524D<code>n</code>\u6761\u7684\u547D\u4EE4\u3002</li><li><code>!string</code>\uFF1A\u6267\u884C\u6700\u8FD1\u4E00\u4E2A\u4EE5\u6307\u5B9A\u5B57\u7B26\u4E32<code>string</code>\u5F00\u5934\u7684\u547D\u4EE4\u3002</li><li><code>!?string</code>\uFF1A\u6267\u884C\u6700\u8FD1\u4E00\u6761\u5305\u542B\u5B57\u7B26\u4E32<code>string</code>\u7684\u547D\u4EE4\u3002</li><li><code>!$</code>\uFF1A\u4EE3\u8868\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002</li><li><code>!*</code>\uFF1A\u4EE3\u8868\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684\u6240\u6709\u53C2\u6570\uFF0C\u5373\u9664\u4E86\u547D\u4EE4\u4EE5\u5916\u7684\u6240\u6709\u90E8\u5206\u3002</li><li><code>^string1^string2</code>\uFF1A\u6267\u884C\u6700\u8FD1\u4E00\u6761\u5305\u542B<code>string1</code>\u7684\u547D\u4EE4\uFF0C\u5C06\u5176\u66FF\u6362\u6210<code>string2</code>\u3002</li></ul><p>\u4E0B\u9762\u662F<code>!$</code>\u548C<code>!*</code>\u7684\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cp</span> a.txt b.txt
$ <span class="token builtin class-name">echo</span> <span class="token operator">!</span>$
b.txt

$ <span class="token function">cp</span> a.txt b.txt
$ <span class="token builtin class-name">echo</span> <span class="token operator">!</span>*
a.txt b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>!$</code>\u4EE3\u8868\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\uFF08<code>b.txt</code>\uFF09\uFF0C<code>!*</code>\u4EE3\u8868\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684\u6240\u6709\u53C2\u6570\uFF08<code>a.txt b.txt</code>\uFF09\u3002</p><p>\u4E0B\u9762\u662F<code>^string1^string2</code>\u7684\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">rm</span> /var/log/httpd/error.log
$ ^error^access
<span class="token function">rm</span> /var/log/httpd/access.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>^error^access</code>\u5C06\u6700\u8FD1\u4E00\u6761\u542B\u6709<code>error</code>\u7684\u547D\u4EE4\u91CC\u9762\u7684<code>error</code>\uFF0C\u66FF\u6362\u6210<code>access</code>\u3002</p><p>\u5982\u679C\u5E0C\u671B\u786E\u5B9A\u662F\u4EC0\u4E48\u547D\u4EE4\uFF0C\u7136\u540E\u518D\u6267\u884C\uFF0C\u53EF\u4EE5\u6253\u5F00<code>histverify</code>\u9009\u9879\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u4F7F\u7528<code>!</code>\u5FEB\u6377\u952E\u6240\u4EA7\u751F\u7684\u547D\u4EE4\uFF0C\u4F1A\u5148\u6253\u5370\u51FA\u6765\uFF0C\u7B49\u5230\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u952E\u540E\u518D\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> -s histverify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u5176\u4ED6\u5FEB\u6377\u952E</h2><ul><li><code>Ctrl + j</code>\uFF1A\u7B49\u540C\u4E8E\u56DE\u8F66\u952E\uFF08LINEFEED\uFF09\u3002</li><li><code>Ctrl + m</code>\uFF1A\u7B49\u540C\u4E8E\u56DE\u8F66\u952E\uFF08CARRIAGE RETURN\uFF09\u3002</li><li><code>Ctrl + o</code>\uFF1A\u7B49\u540C\u4E8E\u56DE\u8F66\u952E\uFF0C\u5E76\u5C55\u793A\u64CD\u4F5C\u5386\u53F2\u7684\u4E0B\u4E00\u4E2A\u547D\u4EE4\u3002</li><li><code>Ctrl + v</code>\uFF1A\u5C06\u4E0B\u4E00\u4E2A\u8F93\u5165\u7684\u7279\u6B8A\u5B57\u7B26\u53D8\u6210\u5B57\u9762\u91CF\uFF0C\u6BD4\u5982\u56DE\u8F66\u53D8\u6210<code>^M</code>\u3002</li><li><code>Ctrl + [</code>\uFF1A\u7B49\u540C\u4E8E ESC\u3002</li><li><code>Alt + .</code>\uFF1A\u63D2\u5165\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684\u6700\u540E\u4E00\u4E2A\u8BCD\u3002</li><li><code>Alt + _</code>\uFF1A\u7B49\u540C\u4E8E<code>Alt + .</code>\u3002</li></ul><p>\u4E0A\u9762\u7684<code>Alt + .</code>\u5FEB\u6377\u952E\uFF0C\u5BF9\u4E8E\u5F88\u957F\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u6709\u65F6\u4F1A\u975E\u5E38\u65B9\u4FBF\u3002\u56E0\u4E3A Unix \u547D\u4EE4\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u901A\u5E38\u662F\u6587\u4EF6\u8DEF\u5F84\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> foo_bar
$ <span class="token builtin class-name">cd</span> <span class="token comment">#\u6309\u4E0B Alt + .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5728<code>cd</code>\u547D\u4EE4\u540E\u6309\u4E0B<code>Alt + .</code>\uFF0C\u5C31\u4F1A\u81EA\u52A8\u63D2\u5165<code>foo_bar</code>\u3002</p>`,93),o=[c];function l(i,t){return s(),n("div",null,o)}var p=e(d,[["render",l],["__file","readline.html.vue"]]);export{p as default};
