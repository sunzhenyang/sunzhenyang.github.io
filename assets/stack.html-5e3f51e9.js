import{_ as e,P as n,Q as s,a2 as a}from"./framework-0028f3de.js";const d={},c=a(`<p>为了方便用户在不同目录之间切换，Bash 提供了目录堆栈功能。</p><h2 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd -</h2><p>Bash 可以记忆用户进入过的目录。默认情况下，只记忆前一次所在的目录，<code>cd -</code>命令可以返回前一次的目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前目录是 /path/to/foo</span>
$ <span class="token builtin class-name">cd</span> bar

<span class="token comment"># 重新回到 /path/to/foo</span>
$ <span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，用户原来所在的目录是<code>/path/to/foo</code>，进入子目录<code>bar</code>以后，使用<code>cd -</code>可以回到原来的目录。</p><h2 id="pushd-popd" tabindex="-1"><a class="header-anchor" href="#pushd-popd" aria-hidden="true">#</a> pushd，popd</h2><p>如果希望记忆多重目录，可以使用<code>pushd</code>命令和<code>popd</code>命令。它们用来操作目录堆栈。</p><p><code>pushd</code>命令的用法类似<code>cd</code>命令，可以进入指定的目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">pushd</span> <span class="token function">dirname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令会进入目录<code>dirname</code>，并将该目录放入堆栈。</p><p>第一次使用<code>pushd</code>命令时，会将当前目录先放入堆栈，然后将所要进入的目录也放入堆栈，位置在前一个记录的上方。以后每次使用<code>pushd</code>命令，都会将所要进入的目录，放在堆栈的顶部。</p><p><code>popd</code>命令不带有参数时，会移除堆栈的顶部记录，并进入新的栈顶目录（即原来的第二条目录）。</p><p>下面是一个例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前处在主目录，堆栈为空</span>
$ <span class="token builtin class-name">pwd</span>
/home/me

<span class="token comment"># 进入 /home/me/foo</span>
<span class="token comment"># 当前堆栈为 /home/me/foo /home/me</span>
$ <span class="token function">pushd</span> ~/foo

<span class="token comment"># 进入 /etc</span>
<span class="token comment"># 当前堆栈为 /etc /home/me/foo /home/me</span>
$ <span class="token function">pushd</span> /etc

<span class="token comment"># 进入 /home/me/foo</span>
<span class="token comment"># 当前堆栈为 /home/me/foo /home/me</span>
$ <span class="token function">popd</span>

<span class="token comment"># 进入 /home/me</span>
<span class="token comment"># 当前堆栈为 /home/me</span>
$ <span class="token function">popd</span>

<span class="token comment"># 目录不变，当前堆栈为空</span>
$ <span class="token function">popd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个命令的参数如下。</p><p><strong>（1）-n 参数</strong></p><p><code>-n</code>的参数表示仅操作堆栈，不改变目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">popd</span> <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令仅删除堆栈顶部的记录，不改变目录，执行完成后还停留在当前目录。</p><p><strong>（2）整数参数</strong></p><p>这两个命令还可以接受一个整数作为参数，该整数表示堆栈中指定位置的记录（从0开始）。<code>pushd</code>命令会把这条记录移动到栈顶，同时切换到该目录；<code>popd</code>则从堆栈中删除这条记录，不会切换目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将从栈顶算起的3号目录（从0开始）移动到栈顶，同时切换到该目录</span>
$ <span class="token function">pushd</span> +3

<span class="token comment"># 将从栈底算起的3号目录（从0开始）移动到栈顶，同时切换到该目录</span>
$ <span class="token function">pushd</span> <span class="token parameter variable">-3</span>

<span class="token comment"># 删除从栈顶算起的3号目录（从0开始），不改变当前目录</span>
$ <span class="token function">popd</span> +3

<span class="token comment"># 删除从栈底算起的3号目录（从0开始），不改变当前目录</span>
$ <span class="token function">popd</span> <span class="token parameter variable">-3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子的整数编号都是从0开始计算，<code>popd +0</code>是删除第一个目录，<code>popd +1</code>是删除第二个，<code>popd -0</code>是删除最后一个目录，<code>popd -1</code>是删除倒数第二个。</p><p><strong>（3）目录参数</strong></p><p><code>pushd</code>可以接受一个目录作为参数，表示将该目录放到堆栈顶部，并进入该目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">pushd</span> <span class="token function">dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>popd</code>没有这个参数。</p><h2 id="dirs-命令" tabindex="-1"><a class="header-anchor" href="#dirs-命令" aria-hidden="true">#</a> dirs 命令</h2><p><code>dirs</code>命令可以显示目录堆栈的内容，一般用来查看<code>pushd</code>和<code>popd</code>操作后的结果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dirs</span>
~/foo/bar ~/foo ~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该命令会输出一行文本，列出目录堆栈，目录之间使用空格分隔。栈顶（最晚入栈的目录）在最左边，栈底（最早入栈的目录）在最右边。</p><p>它有以下参数。</p><ul><li><code>-c</code>：清空目录栈。</li><li><code>-l</code>：用户主目录不显示波浪号前缀，而打印完整的目录。</li><li><code>-p</code>：每行一个条目打印目录栈，默认是打印在一行。</li><li><code>-v</code>：每行一个条目，每个条目之前显示位置编号（从0开始）。</li><li><code>+N</code>：<code>N</code>为整数，表示显示堆顶算起的第 N 个目录，从零开始。</li><li><code>-N</code>：<code>N</code>为整数，表示显示堆底算起的第 N 个目录，从零开始。</li></ul>`,33),i=[c];function o(l,p){return n(),s("div",null,i)}const t=e(d,[["render",o],["__file","stack.html.vue"]]);export{t as default};