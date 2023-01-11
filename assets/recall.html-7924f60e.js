import{_ as a,P as n,Q as e,a2 as s}from"./framework-0028f3de.js";const i={},t=s(`<p>在任何一个阶段，您都有可能想要撤消某些操作。这里，我们将会学习几个撤消您所做修改的基本工具。注 意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个 地方之一。</p><p>有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以运行带有 <code>--amend</code> 选 项的提交命令来重新提交:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会将暂存区中的文件提交。如果自上次提交以来您还未做任何修改(例如，在上次提交后马上执行了 此命令)， 那么快照会保持不变，而您所修改的只是提交信息。</p><p>文本编辑器启动后，可以看到之前的提交信息。编辑后保存会覆盖原来的提交信息。</p><p>例如，您提交后发现忘记了暂存某些需要的修改，可以像下面这样操作:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;initial commit&#39;</span>
<span class="token function">git</span> <span class="token function">add</span> forgotten_file
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终您只会有一个提交——第二次提交将代替第一次提交的结果。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当您在修补最后的提交时，并不是通过用改进后的提交 原位替换 掉旧有提交的方式来修复 的， 理解这一点非常重要。从效果上来说，就像是旧有的提交从未存在过一样，它并不会出 现在仓库的历史中。</p><p>修补提交最明显的价值是可以稍微改进您最后的提交，而不会让“啊，忘了添加一个文件”或 者 “小修补，修正笔误”这种提交信息弄乱您的仓库历史。</p></div>`,9),c=[t];function l(p,o){return n(),e("div",null,c)}const r=a(i,[["render",l],["__file","recall.html.vue"]]);export{r as default};
