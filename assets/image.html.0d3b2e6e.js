import{_ as n,o as e,c as s,e as a}from"./app.41291239.js";const t={},c=a(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p><code>&lt;img&gt;</code>\u5143\u7D20\u7528\u4E8E\u63D2\u5165\u56FE\u7247\uFF0C\u4E3B\u8981\u7EE7\u627F\u4E86 HTMLImageElement \u63A5\u53E3\u3002</p><p>\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E00\u4E2A\u539F\u751F\u6784\u9020\u51FD\u6570<code>Image</code>\uFF0C\u7528\u4E8E\u751F\u6210<code>HTMLImageElement</code>\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img <span class="token keyword">instanceof</span> <span class="token class-name">Image</span> <span class="token comment">// true</span>
img <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Image</code>\u6784\u9020\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E24\u4E2A\u6574\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5206\u522B\u8868\u793A<code>&lt;img&gt;</code>\u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BED\u6CD5</span>
<span class="token function">Image</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span>

<span class="token comment">// \u7528\u6CD5</span>
<span class="token keyword">var</span> myImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;img&gt;</code>\u5B9E\u4F8B\u7684<code>src</code>\u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u56FE\u50CF\u7684\u7F51\u5740\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;picture.jpg&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u751F\u6210\u7684<code>&lt;img&gt;</code>\u5B9E\u4F8B\u5E76\u4E0D\u5C5E\u4E8E\u6587\u6863\u7684\u4E00\u90E8\u5206\u3002\u5982\u679C\u60F3\u8BA9\u5B83\u663E\u793A\u5728\u6587\u6863\u4E2D\uFF0C\u5FC5\u987B\u624B\u52A8\u63D2\u5165\u6587\u6863\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;image1.png&#39;</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u4F7F\u7528<code>Image</code>\u6784\u9020\uFF0C\u4E0B\u9762\u7684\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u5F97\u5230<code>HTMLImageElement</code>\u5B9E\u4F8B\u3002</p><ul><li><code>document.images</code>\u7684\u6210\u5458</li><li>\u8282\u70B9\u9009\u53D6\u65B9\u6CD5\uFF08\u6BD4\u5982<code>document.getElementById</code>\uFF09\u5F97\u5230\u7684<code>&lt;img&gt;</code>\u8282\u70B9</li><li><code>document.createElement(&#39;img&#39;)</code>\u751F\u6210\u7684<code>&lt;img&gt;</code>\u8282\u70B9</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span>
<span class="token comment">// true</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myImg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span>
<span class="token comment">// true</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>HTMLImageElement</code>\u5B9E\u4F8B\u9664\u4E86\u5177\u6709 Node\u3001Element\u3001HTMLElement \u63A5\u53E3\u4EE5\u5916\uFF0C\u8FD8\u62E5\u6709\u4E00\u4E9B\u72EC\u6709\u7684\u5C5E\u6027\u3002\u8FD9\u4E2A\u63A5\u53E3\u6CA1\u6709\u5B9A\u4E49\u81EA\u5DF1\u7684\u65B9\u6CD5\u3002</p><h2 id="\u7279\u6027\u76F8\u5173\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027\u76F8\u5173\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u7279\u6027\u76F8\u5173\u7684\u5C5E\u6027</h2><p><strong>\uFF081\uFF09HTMLImageElement.src</strong></p><p><code>HTMLImageElement.src</code>\u5C5E\u6027\u8FD4\u56DE\u56FE\u50CF\u7684\u5B8C\u6574\u7F51\u5740\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;img width=&quot;300&quot; height=&quot;400&quot; id=&quot;myImg&quot; src=&quot;http://example.com/pic.jpg&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token comment">// http://example.com/pic.jpg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uFF082\uFF09HTMLImageElement.currentSrc</strong></p><p><code>HTMLImageElement.currentSrc</code>\u5C5E\u6027\u8FD4\u56DE\u5F53\u524D\u6B63\u5728\u5C55\u793A\u7684\u56FE\u50CF\u7684\u7F51\u5740\u3002JavaScript \u548C CSS \u7684 mediaQuery \u90FD\u53EF\u80FD\u6539\u53D8\u6B63\u5728\u5C55\u793A\u7684\u56FE\u50CF\u3002</p><p><strong>\uFF083\uFF09HTMLImageElement.alt</strong></p><p><code>HTMLImageElement.alt</code>\u5C5E\u6027\u53EF\u4EE5\u8BFB\u5199<code>&lt;img&gt;</code>\u7684 HTML \u5C5E\u6027<code>alt</code>\uFF0C\u8868\u793A\u5BF9\u56FE\u7247\u7684\u6587\u5B57\u8BF4\u660E\u3002</p><p><strong>\uFF084\uFF09HTMLImageElement.isMap\uFF0CHTMLImageElement.useMap</strong></p><p><code>HTMLImageElement.isMap</code>\u5C5E\u6027\u5BF9\u5E94<code>&lt;img&gt;</code>\u5143\u7D20\u7684 HTML \u5C5E\u6027<code>ismap</code>\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u56FE\u50CF\u662F\u5426\u4E3A\u670D\u52A1\u5668\u7AEF\u7684\u56FE\u50CF\u6620\u5C04\u7684\u4E00\u90E8\u5206\u3002</p><p><code>HTMLImageElement.useMap</code>\u5C5E\u6027\u5BF9\u5E94<code>&lt;img&gt;</code>\u5143\u7D20\u7684 HTML \u5C5E\u6027<code>usemap</code>\uFF0C\u8868\u793A\u5F53\u524D\u56FE\u50CF\u5BF9\u5E94\u7684<code>&lt;map&gt;</code>\u5143\u7D20\u3002</p><p><strong>\uFF085\uFF09HTMLImageElement.srcset\uFF0CHTMLImageElement.sizes</strong></p><p><code>HTMLImageElement.srcset</code>\u5C5E\u6027\u548C<code>HTMLImageElement.sizes</code>\u5C5E\u6027\uFF0C\u5206\u522B\u7528\u4E8E\u8BFB\u5199<code>&lt;img&gt;</code>\u5143\u7D20\u7684<code>srcset</code>\u5C5E\u6027\u548C<code>sizes</code>\u5C5E\u6027\u3002\u5B83\u4EEC\u7528\u4E8E<code>&lt;img&gt;</code>\u5143\u7D20\u7684\u54CD\u5E94\u5F0F\u52A0\u8F7D\u3002<code>srcset</code>\u5C5E\u6027\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4F46\u662F<code>sizes</code>\u5C5E\u6027\u5FC5\u987B\u4E0E<code>srcset</code>\u5C5E\u6027\u540C\u65F6\u4F7F\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;img srcset=&quot;example-320w.jpg 320w,</span>
<span class="token comment">//              example-480w.jpg 480w,</span>
<span class="token comment">//              example-800w.jpg 800w&quot;</span>
<span class="token comment">//      sizes=&quot;(max-width: 320px) 280px,</span>
<span class="token comment">//             (max-width: 480px) 440px,</span>
<span class="token comment">//             800px&quot;</span>
<span class="token comment">//      id=&quot;myImg&quot;</span>
<span class="token comment">//      src=&quot;example-800w.jpg&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myImg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>srcset
<span class="token comment">// &quot;example-320w.jpg 320w,</span>
<span class="token comment">//  example-480w.jpg 480w,</span>
<span class="token comment">//  example-800w.jpg 800w&quot;</span>

img<span class="token punctuation">.</span>sizes
<span class="token comment">// &quot;(max-width: 320px) 280px,</span>
<span class="token comment">//  (max-width: 480px) 440px,</span>
<span class="token comment">//  800px&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>sizes</code>\u5C5E\u6027\u6307\u5B9A\uFF0C\u5BF9\u4E8E\u5C0F\u4E8E<code>320px</code>\u7684\u5C4F\u5E55\uFF0C\u56FE\u50CF\u7684\u5BBD\u5EA6\u4E3A<code>280px</code>\uFF1B\u5BF9\u4E8E\u5C0F\u4E8E<code>480px</code>\u7684\u5C4F\u5E55\uFF0C\u56FE\u50CF\u5BBD\u5EA6\u4E3A<code>440px</code>\uFF1B\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u56FE\u50CF\u5BBD\u5EA6\u4E3A<code>800px</code>\u3002\u7136\u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6839\u636E\u5F53\u524D\u5C4F\u5E55\u4E0B\u7684\u56FE\u50CF\u5BBD\u5EA6\uFF0C\u5230<code>srcset</code>\u5C5E\u6027\u52A0\u8F7D\u5BBD\u5EA6\u6700\u63A5\u8FD1\u7684\u56FE\u50CF\u3002</p><h2 id="htmlimageelement-width-htmlimageelement-height" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-width-htmlimageelement-height" aria-hidden="true">#</a> HTMLImageElement.width\uFF0CHTMLImageElement.height</h2><p><code>width</code>\u5C5E\u6027\u8868\u793A<code>&lt;img&gt;</code>\u7684 HTML \u5BBD\u5EA6\uFF0C<code>height</code>\u5C5E\u6027\u8868\u793A\u9AD8\u5EA6\u3002\u8FD9\u4E24\u4E2A\u5C5E\u6027\u8FD4\u56DE\u7684\u90FD\u662F\u6574\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;img width=&quot;300&quot; height=&quot;400&quot; id=&quot;myImg&quot; src=&quot;pic.jpg&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>width <span class="token comment">// 300</span>
img<span class="token punctuation">.</span>height <span class="token comment">// 400</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u56FE\u50CF\u8FD8\u6CA1\u6709\u52A0\u8F7D\uFF0C\u8FD9\u4E24\u4E2A\u5C5E\u6027\u8FD4\u56DE\u7684\u90FD\u662F<code>0</code>\u3002</p><p>\u5982\u679C HTML \u4EE3\u7801\u6CA1\u6709\u8BBE\u7F6E<code>width</code>\u548C<code>height</code>\u5C5E\u6027\uFF0C\u5219\u5B83\u4EEC\u8FD4\u56DE\u7684\u662F\u56FE\u50CF\u7684\u5B9E\u9645\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5373<code>HTMLImageElement.naturalWidth</code>\u5C5E\u6027\u548C<code>HTMLImageElement.naturalHeight</code>\u5C5E\u6027\u3002</p><h2 id="htmlimageelement-naturalwidth-htmlimageelement-naturalheight" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-naturalwidth-htmlimageelement-naturalheight" aria-hidden="true">#</a> HTMLImageElement.naturalWidth\uFF0CHTMLImageElement.naturalHeight</h2><p><code>HTMLImageElement.naturalWidth</code>\u5C5E\u6027\u8868\u793A\u56FE\u50CF\u7684\u5B9E\u9645\u5BBD\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\uFF0C<code>HTMLImageElement.naturalHeight</code>\u5C5E\u6027\u8868\u793A\u5B9E\u9645\u9AD8\u5EA6\u3002\u8FD9\u4E24\u4E2A\u5C5E\u6027\u8FD4\u56DE\u7684\u90FD\u662F\u6574\u6570\u3002</p><p>\u5982\u679C\u56FE\u50CF\u8FD8\u6CA1\u6709\u6307\u5B9A\u6216\u4E0D\u53EF\u5F97\uFF0C\u8FD9\u4E24\u4E2A\u5C5E\u6027\u90FD\u7B49\u4E8E<code>0</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>img<span class="token punctuation">.</span>naturalHeight <span class="token operator">&gt;</span> img<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;portrait&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5982\u679C\u56FE\u7247\u7684\u9AD8\u5EA6\u5927\u4E8E\u5BBD\u5EA6\uFF0C\u5219\u8BBE\u4E3A<code>portrait</code>\u6A21\u5F0F\u3002</p><h2 id="htmlimageelement-complete" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-complete" aria-hidden="true">#</a> HTMLImageElement.complete</h2><p><code>HTMLImageElement.complete</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u56FE\u8868\u662F\u5426\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6210\u3002\u5982\u679C<code>&lt;img&gt;</code>\u5143\u7D20\u6CA1\u6709<code>src</code>\u5C5E\u6027\uFF0C\u4E5F\u4F1A\u8FD4\u56DE<code>true</code>\u3002</p><h2 id="htmlimageelement-crossorigin" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-crossorigin" aria-hidden="true">#</a> HTMLImageElement.crossOrigin</h2><p><code>HTMLImageElement.crossOrigin</code>\u5C5E\u6027\u7528\u4E8E\u8BFB\u5199<code>&lt;img&gt;</code>\u5143\u7D20\u7684<code>crossorigin</code>\u5C5E\u6027\uFF0C\u8868\u793A\u8DE8\u57DF\u8BBE\u7F6E\u3002</p><p>\u8FD9\u4E2A\u5C5E\u6027\u6709\u4E24\u4E2A\u53EF\u80FD\u7684\u503C\u3002</p><ul><li><code>anonymous</code>\uFF1A\u8DE8\u57DF\u8BF7\u6C42\u4E0D\u8981\u6C42\u7528\u6237\u8EAB\u4EFD\uFF08credentials\uFF09\uFF0C\u8FD9\u662F\u9ED8\u8BA4\u503C\u3002</li><li><code>use-credentials</code>\uFF1A\u8DE8\u57DF\u8BF7\u6C42\u8981\u6C42\u7528\u6237\u8EAB\u4EFD\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;img crossorigin=&quot;anonymous&quot; id=&quot;myImg&quot; src=&quot;pic.jpg&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>crossOrigin <span class="token comment">// &quot;anonymous&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="htmlimageelement-referrerpolicy" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-referrerpolicy" aria-hidden="true">#</a> HTMLImageElement.referrerPolicy</h2><p><code>HTMLImageElement.referrerPolicy</code>\u7528\u6765\u8BFB\u5199<code>&lt;img&gt;</code>\u5143\u7D20\u7684 HTML \u5C5E\u6027<code>referrerpolicy</code>\uFF0C\u8868\u793A\u8BF7\u6C42\u56FE\u50CF\u8D44\u6E90\u65F6\uFF0C\u5982\u4F55\u5904\u7406 HTTP \u8BF7\u6C42\u7684<code>referrer</code>\u5B57\u6BB5\u3002</p><p>\u5B83\u6709\u4E94\u4E2A\u53EF\u80FD\u7684\u503C\u3002</p><ul><li><code>no-referrer</code>\uFF1A\u4E0D\u5E26\u6709<code>referrer</code>\u5B57\u6BB5\u3002</li><li><code>no-referrer-when-downgrade</code>\uFF1A\u5982\u679C\u8BF7\u6C42\u7684\u5730\u5740\u4E0D\u662F HTTPS \u534F\u8BAE\uFF0C\u5C31\u4E0D\u5E26\u6709<code>referrer</code>\u5B57\u6BB5\uFF0C\u8FD9\u662F\u9ED8\u8BA4\u503C\u3002</li><li><code>origin</code>\uFF1A<code>referrer</code>\u5B57\u6BB5\u662F\u5F53\u524D\u7F51\u9875\u7684\u5730\u5740\uFF0C\u5305\u542B\u534F\u8BAE\u3001\u57DF\u540D\u548C\u7AEF\u53E3\u3002</li><li><code>origin-when-cross-origin</code>\uFF1A\u5982\u679C\u8BF7\u6C42\u7684\u5730\u5740\u4E0E\u5F53\u524D\u7F51\u9875\u662F\u540C\u6E90\u5173\u7CFB\uFF0C\u90A3\u4E48<code>referrer</code>\u5B57\u6BB5\u5C06\u5E26\u6709\u5B8C\u6574\u8DEF\u5F84\uFF0C\u5426\u5219\u5C06\u53EA\u5305\u542B\u534F\u8BAE\u3001\u57DF\u540D\u548C\u7AEF\u53E3\u3002</li><li><code>unsafe-url</code>\uFF1A<code>referrer</code>\u5B57\u6BB5\u5305\u542B\u5F53\u524D\u7F51\u9875\u7684\u5730\u5740\uFF0C\u9664\u4E86\u534F\u8BAE\u3001\u57DF\u540D\u548C\u7AEF\u53E3\u4EE5\u5916\uFF0C\u8FD8\u5305\u62EC\u8DEF\u5F84\u3002\u8FD9\u4E2A\u8BBE\u7F6E\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u56E0\u4E3A\u4F1A\u6CC4\u6F0F\u8DEF\u5F84\u4FE1\u606F\u3002</li></ul><h2 id="htmlimageelement-x-htmlimageelement-y" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-x-htmlimageelement-y" aria-hidden="true">#</a> HTMLImageElement.x\uFF0CHTMLImageElement.y</h2><p><code>HTMLImageElement.x</code>\u5C5E\u6027\u8FD4\u56DE\u56FE\u50CF\u5DE6\u4E0A\u89D2\u76F8\u5BF9\u4E8E\u9875\u9762\u5DE6\u4E0A\u89D2\u7684\u6A2A\u5750\u6807\uFF0C<code>HTMLImageElement.y</code>\u5C5E\u6027\u8FD4\u56DE\u7EB5\u5750\u6807\u3002</p><h2 id="\u4E8B\u4EF6\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5C5E\u6027" aria-hidden="true">#</a> \u4E8B\u4EF6\u5C5E\u6027</h2><p>\u56FE\u50CF\u52A0\u8F7D\u5B8C\u6210\uFF0C\u4F1A\u89E6\u53D1<code>onload</code>\u5C5E\u6027\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u4E3A &lt;img src=&quot;example.jpg&quot; onload=&quot;loadImage()&quot;&gt;</span>
<span class="token keyword">function</span> <span class="token function">loadImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Image is loaded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56FE\u50CF\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\uFF0C\u4F1A\u89E6\u53D1<code>onerror</code>\u5C5E\u6027\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u4E3A &lt;img src=&quot;image.gif&quot; onerror=&quot;myFunction()&quot;&gt;</span>
<span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;There is something wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),o=[c];function p(i,l){return e(),s("div",null,o)}var m=n(t,[["render",p],["__file","image.html.vue"]]);export{m as default};
