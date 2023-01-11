import{_ as n,P as a,Q as s,Z as t,a2 as e}from"./framework-0028f3de.js";const p={},o=e(`<h2 id="transitionend" tabindex="-1"><a class="header-anchor" href="#transitionend" aria-hidden="true">#</a> transitionend</h2><blockquote><p>当一个 CSS 动画完成时触发，每一个改变的属性都会分别触发一次</p><p>用于在动画结束后执行某种操作，也可以用它来串联动画</p></blockquote><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><p><code>event.propertyName</code>：当前完成动画的属性，这在我们同时为多个属性加上动画时会很有用</p><p><code>event.elapsedTime</code>：动画完成的时间（按秒计算），不包括 <code>transition-delay</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitioned&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>propertyName<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transitionstart" tabindex="-1"><a class="header-anchor" href="#transitionstart" aria-hidden="true">#</a> transitionstart</h2><h2 id="transitionrun" tabindex="-1"><a class="header-anchor" href="#transitionrun" aria-hidden="true">#</a> transitionrun</h2><blockquote><p>早于 <code>transitionstart</code></p></blockquote><h2 id="transitioncancel" tabindex="-1"><a class="header-anchor" href="#transitioncancel" aria-hidden="true">#</a> transitioncancel</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">,</span> <span class="token string">&#39;transitionstart&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionrun&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">,</span> <span class="token string">&#39;transitionrun&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionend&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">,</span> <span class="token string">&#39;transitionend&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitioncancel&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">,</span> <span class="token string">&#39;transitioncancel&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function c(i,u){return a(),s("div",null,[t(" more "),o])}const r=n(p,[["render",c],["__file","09.CSS事件.html.vue"]]);export{r as default};
