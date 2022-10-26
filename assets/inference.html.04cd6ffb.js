import{_ as n,o as s,c as a,e}from"./app.41291239.js";const p={},t=e(`<p>\u8FD9\u8282\u4ECB\u7ECD TypeScript \u91CC\u7684\u7C7B\u578B\u63A8\u65AD\u3002\u5373\uFF0C\u7C7B\u578B\u662F\u5728\u54EA\u91CC\u5982\u4F55\u88AB\u63A8\u65AD\u7684\u3002</p><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><p>TypeScript \u91CC\uFF0C\u5728\u6709\u4E9B\u6CA1\u6709\u660E\u786E\u6307\u51FA\u7C7B\u578B\u7684\u5730\u65B9\uFF0C\u7C7B\u578B\u63A8\u65AD\u4F1A\u5E2E\u52A9\u63D0\u4F9B\u7C7B\u578B\u3002\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53D8\u91CF <code>x</code> \u7684\u7C7B\u578B\u88AB\u63A8\u65AD\u4E3A\u6570\u5B57\u3002 \u8FD9\u79CD\u63A8\u65AD\u53D1\u751F\u5728\u521D\u59CB\u5316\u53D8\u91CF\u548C\u6210\u5458\uFF0C\u8BBE\u7F6E\u9ED8\u8BA4\u53C2\u6570\u503C\u548C\u51B3\u5B9A\u51FD\u6570\u8FD4\u56DE\u503C\u65F6\u3002</p><p>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u7C7B\u578B\u63A8\u65AD\u662F\u76F4\u622A\u4E86\u5F53\u5730\u3002\u540E\u9762\u7684\u5C0F\u8282\uFF0C\u6211\u4EEC\u4F1A\u6D4F\u89C8\u7C7B\u578B\u63A8\u65AD\u65F6\u7684\u7EC6\u5FAE\u5DEE\u522B\u3002</p><h2 id="\u6700\u4F73\u901A\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u901A\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u6700\u4F73\u901A\u7528\u7C7B\u578B</h2><p>\u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u9700\u8981\u4ECE\u51E0\u4E2A\u8868\u8FBE\u5F0F\u4E2D\u63A8\u65AD\u7C7B\u578B\uFF0C\u4F1A\u4F7F\u7528\u8FD9\u4E9B\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u6765\u63A8\u65AD\u51FA\u4E00\u4E2A\u6700\u5408\u9002\u7684\u901A\u7528\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u63A8\u65AD <code>x</code> \u7684\u7C7B\u578B\uFF0C\u6211\u4EEC\u5FC5\u987B\u8003\u8651\u6240\u6709\u5143\u7D20\u7684\u7C7B\u578B\u3002 \u8FD9\u91CC\u6709\u4E24\u79CD\u9009\u62E9\uFF1A<code>number</code> \u548C <code>null</code>\u3002 \u8BA1\u7B97\u901A\u7528\u7C7B\u578B\u7B97\u6CD5\u4F1A\u8003\u8651\u6240\u6709\u7684\u5019\u9009\u7C7B\u578B\uFF0C\u5E76\u7ED9\u51FA\u4E00\u4E2A\u517C\u5BB9\u6240\u6709\u5019\u9009\u7C7B\u578B\u7684\u7C7B\u578B\u3002</p><p>\u7531\u4E8E\u6700\u7EC8\u7684\u901A\u7528\u7C7B\u578B\u53D6\u81EA\u5019\u9009\u7C7B\u578B\uFF0C\u6709\u4E9B\u65F6\u5019\u5019\u9009\u7C7B\u578B\u5171\u4EAB\u4E00\u4E2A\u516C\u5171\u7ED3\u6784\uFF0C\u4F46\u662F\u5374\u6CA1\u6709\u4E00\u4E2A\u7C7B\u578B\u80FD\u505A\u4E3A\u6240\u6709\u5019\u9009\u7C7B\u578B\u7684\u8D85\u7EA7\u7C7B\u578B\u3002\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  numLegs<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bee</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Lion</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> zoo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Bee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Lion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\uFF0C\u6211\u4EEC\u60F3\u8BA9 <code>zoo</code> \u88AB\u63A8\u65AD\u4E3A <code>Animal[]</code> \u7C7B\u578B\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6570\u7EC4\u91CC\u6CA1\u6709\u5BF9\u8C61\u662F <code>Animal</code> \u7C7B\u578B\u7684\uFF0C\u56E0\u6B64\u4E0D\u80FD\u63A8\u65AD\u51FA\u8FD9\u4E2A\u7ED3\u679C\u3002 \u4E3A\u4E86\u66F4\u6B63\uFF0C\u6211\u4EEC\u53EF\u4EE5\u660E\u786E\u7684\u58F0\u660E\u6211\u4EEC\u671F\u671B\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> zoo<span class="token operator">:</span> Animal<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Bee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Lion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709\u627E\u5230\u6700\u4F73\u901A\u7528\u7C7B\u578B\u7684\u8BDD\uFF0C\u7C7B\u578B\u63A8\u65AD\u7684\u7ED3\u679C\u4E3A\u8054\u5408\u6570\u7EC4\u7C7B\u578B\uFF0C<code>(Bee | Lion)[]</code></p><h2 id="\u4E0A\u4E0B\u6587\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u6587\u7C7B\u578B" aria-hidden="true">#</a> \u4E0A\u4E0B\u6587\u7C7B\u578B</h2><p>\u6709\u4E9B\u65F6\u5019\uFF0CTypeScript \u7C7B\u578B\u63A8\u65AD\u4F1A\u6309\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6211\u4EEC\u79F0\u4F5C\u201C\u4E0A\u4E0B\u6587\u7C7B\u578B\u201D\uFF1B\u4E0A\u4E0B\u6587\u7C7B\u578B\u7684\u51FA\u73B0\u548C\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u4EE5\u53CA\u6240\u5904\u7684\u4F4D\u7F6E\u76F8\u5173\u3002\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>mouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mouseEvent<span class="token punctuation">.</span>clickTime<span class="token punctuation">)</span>  <span class="token comment">// Error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u4F8B\u5B50\u4F1A\u5F97\u5230\u4E00\u4E2A\u7C7B\u578B\u9519\u8BEF\uFF0CTypeScript \u7C7B\u578B\u68C0\u67E5\u5668\u4F7F\u7528 <code>window.onmousedown</code> \u51FD\u6570\u7684\u7C7B\u578B\u6765\u63A8\u65AD\u53F3\u8FB9\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u3002 \u56E0\u6B64\uFF0C\u5C31\u80FD\u63A8\u65AD\u51FA <code>mouseEvent</code> \u53C2\u6570\u7684\u7C7B\u578B\u4E86\uFF0C\u6240\u4EE5 <code>mouseEvent</code> \u8BBF\u95EE\u4E86\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\uFF0C\u5C31\u62A5\u9519\u4E86\u3002</p><p>\u5982\u679C\u4E0A\u4E0B\u6587\u7C7B\u578B\u8868\u8FBE\u5F0F\u5305\u542B\u4E86\u660E\u786E\u7684\u7C7B\u578B\u4FE1\u606F\uFF0C\u4E0A\u4E0B\u6587\u7684\u7C7B\u578B\u88AB\u5FFD\u7565\u3002\u91CD\u5199\u4E0A\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>mouseEvent<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mouseEvent<span class="token punctuation">.</span>clickTime<span class="token punctuation">)</span>  <span class="token comment">// OK</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u51FD\u6570\u8868\u8FBE\u5F0F\u6709\u660E\u786E\u7684\u53C2\u6570\u7C7B\u578B\u6CE8\u89E3\uFF0C\u4E0A\u4E0B\u6587\u7C7B\u578B\u88AB\u5FFD\u7565\u3002\u8FD9\u6837\u7684\u8BDD\u5C31\u4E0D\u62A5\u9519\u4E86\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4E0D\u4F1A\u4F7F\u7528\u5230\u4E0A\u4E0B\u6587\u7C7B\u578B\u3002</p><p>\u4E0A\u4E0B\u6587\u7C7B\u578B\u4F1A\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u4F7F\u7528\u5230\u3002\u901A\u5E38\u5305\u542B\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u8D4B\u503C\u8868\u8FBE\u5F0F\u7684\u53F3\u8FB9\uFF0C\u7C7B\u578B\u65AD\u8A00\uFF0C\u5BF9\u8C61\u6210\u5458\uFF0C\u6570\u7EC4\u5B57\u9762\u91CF\u548C\u8FD4\u56DE\u503C\u8BED\u53E5\u3002\u4E0A\u4E0B\u6587\u7C7B\u578B\u4E5F\u4F1A\u505A\u4E3A\u6700\u4F73\u901A\u7528\u7C7B\u578B\u7684\u5019\u9009\u7C7B\u578B\u3002\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createZoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Animal<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Bee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Lion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> zoo <span class="token operator">=</span> <span class="token function">createZoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u6700\u4F73\u901A\u7528\u7C7B\u578B\u6709 <code>3</code> \u4E2A\u5019\u9009\u8005\uFF1A<code>Animal</code>\uFF0C<code>Bee</code> \u548C <code>Lion</code>\u3002 \u5176\u4E2D\uFF0C<code>Animal</code> \u4F1A\u88AB\u505A\u4E3A\u6700\u4F73\u901A\u7528\u7C7B\u578B\u3002</p>`,25),o=[t];function c(i,l){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","inference.html.vue"]]);export{d as default};
