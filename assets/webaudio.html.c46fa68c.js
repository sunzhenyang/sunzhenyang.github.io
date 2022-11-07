import{_ as n,o as s,c as a,e}from"./app.05e84ac7.js";const t={},p=e(`<p>Web Audio API \u7528\u4E8E\u64CD\u4F5C\u58F0\u97F3\u3002\u8FD9\u4E2A API \u53EF\u4EE5\u8BA9\u7F51\u9875\u53D1\u51FA\u58F0\u97F3\u3002</p><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><p>\u6D4F\u89C8\u5668\u539F\u751F\u63D0\u4F9B<code>AudioContext</code>\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7528\u4E8E\u751F\u6210\u4E00\u4E2A\u58F0\u97F3\u7684\u4E0A\u4E0B\u6587\uFF0C\u4E0E\u626C\u58F0\u5668\u76F8\u8FDE\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> audioContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AudioContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u83B7\u53D6\u97F3\u6E90\u6587\u4EF6\uFF0C\u5C06\u5176\u5728\u5185\u5B58\u4E2D\u89E3\u7801\uFF0C\u5C31\u53EF\u4EE5\u64AD\u653E\u58F0\u97F3\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AudioContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;sound.mp4&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">arrayBuffer</span> <span class="token operator">=&gt;</span> context<span class="token punctuation">.</span><span class="token function">decodeAudioData</span><span class="token punctuation">(</span>arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">audioBuffer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u64AD\u653E\u58F0\u97F3</span>
    <span class="token keyword">const</span> source <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createBufferSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    source<span class="token punctuation">.</span>buffer <span class="token operator">=</span> audioBuffer<span class="token punctuation">;</span>
    source<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
    source<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="context-createbuffer" tabindex="-1"><a class="header-anchor" href="#context-createbuffer" aria-hidden="true">#</a> context.createBuffer()</h2><p><code>context.createBuffer()</code>\u65B9\u6CD5\u751F\u6210\u4E00\u4E2A\u5185\u5B58\u7684\u64CD\u4F5C\u89C6\u56FE\uFF0C\u7528\u4E8E\u5B58\u653E\u6570\u636E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> buffer <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createBuffer</span><span class="token punctuation">(</span>channels<span class="token punctuation">,</span> signalLength<span class="token punctuation">,</span> sampleRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>createBuffer</code>\u65B9\u6CD5\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\u3002</p><ul><li>channels\uFF1A\u6574\u6570\uFF0C\u8868\u793A\u58F0\u9053\u3002\u521B\u5EFA\u5355\u58F0\u9053\u7684\u58F0\u97F3\uFF0C\u8BE5\u503C\u4E3A 1\u3002</li><li>signalLength\uFF1A\u6574\u6570\uFF0C\u8868\u793A\u58F0\u97F3\u6570\u7EC4\u7684\u957F\u5EA6\u3002</li><li>sampleRate\uFF1A\u6D6E\u70B9\u6570\uFF0C\u8868\u793A\u53D6\u6837\u7387\uFF0C\u5373\u4E00\u79D2\u53D6\u6837\u591A\u5C11\u6B21\u3002</li></ul><p><code>signalLength</code>\u548C<code>sampleRate</code>\u8FD9\u4E24\u4E2A\u53C2\u6570\u51B3\u5B9A\u4E86\u58F0\u97F3\u7684\u957F\u5EA6\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u53D6\u6837\u7387\u662F<code>1/3000</code>\uFF08\u6BCF\u79D2\u53D6\u68373000\u6B21\uFF09\uFF0C\u58F0\u97F3\u6570\u7EC4\u957F\u5EA6\u662F6000\uFF0C\u90A3\u4E48\u64AD\u653E\u7684\u58F0\u97F3\u662F2\u79D2\u957F\u5EA6\u3002</p><p>\u63A5\u7740\uFF0C\u4F7F\u7528<code>buffer.getChannelData</code>\u65B9\u6CD5\u53D6\u51FA\u4E00\u4E2A\u58F0\u9053\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> buffer<span class="token punctuation">.</span><span class="token function">getChannelData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>buffer.getChannelData</code>\u7684\u53C2\u6570<code>0</code>\u8868\u793A\u53D6\u51FA\u7B2C\u4E00\u4E2A\u58F0\u9053\u3002</p><p>\u4E0B\u4E00\u6B65\uFF0C\u5C06\u58F0\u97F3\u6570\u7EC4\u653E\u5165\u8FD9\u4E2A\u58F0\u9053\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> buffer<span class="token punctuation">.</span><span class="token function">getChannelData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// singal \u662F\u4E00\u4E2A\u58F0\u97F3\u6570\u7EC4</span>
<span class="token comment">// singalLengal \u662F\u8BE5\u6570\u7EC4\u7684\u957F\u5EA6</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> signalLength<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> signal<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\uFF0C\u4F7F\u7528<code>context.createBufferSource</code>\u65B9\u6CD5\u751F\u6210\u4E00\u4E2A\u58F0\u97F3\u8282\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u751F\u6210\u4E00\u4E2A\u58F0\u97F3\u8282\u70B9</span>
<span class="token keyword">const</span> node <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createBufferSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5C06\u58F0\u97F3\u6570\u7EC4\u7684\u5185\u5B58\u5BF9\u8C61\uFF0C\u653E\u5165\u8FD9\u4E2A\u8282\u70B9</span>
node<span class="token punctuation">.</span>buffer <span class="token operator">=</span> buffer<span class="token punctuation">;</span>
<span class="token comment">// \u5C06\u58F0\u97F3\u4E0A\u4E0B\u6587\u4E0E\u8282\u70B9\u8FDE\u63A5</span>
node<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>audioContext<span class="token punctuation">.</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F00\u59CB\u64AD\u653E\u58F0\u97F3</span>
node<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>audioContext<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u64AD\u653E\u4E00\u6B21\u540E\u5C31\u5C06\u505C\u6B62\u64AD\u653E\u3002\u5982\u679C\u9700\u8981\u5FAA\u73AF\u64AD\u653E\uFF0C\u53EF\u4EE5\u5C06\u8282\u70B9\u5BF9\u8C61\u7684<code>looping</code>\u5C5E\u6027\u8BBE\u4E3A<code>true</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>node<span class="token punctuation">.</span>looping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u8FC7\u6EE4\u5668</h2><p>Web Audio API \u539F\u751F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u8FC7\u6EE4\u5668\uFF08filter\uFF09\uFF0C\u7528\u6765\u5904\u7406\u58F0\u97F3\u3002</p><p>\u9996\u5148\uFF0C\u4F7F\u7528<code>context.createBiquadFilter</code>\u65B9\u6CD5\u5EFA\u7ACB\u8FC7\u6EE4\u5668\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> filter <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createBiquadFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u901A\u8FC7<code>filter.type</code>\u5C5E\u6027\u6307\u5B9A\u8FC7\u6EE4\u5668\u7684\u7C7B\u578B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>filter<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;lowpass&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76EE\u524D\uFF0C\u8FC7\u6EE4\u5668\u6709\u4EE5\u4E0B\u8FD9\u4E9B\u7C7B\u578B\u3002</p><ul><li>lowpass</li><li>highpass</li><li>bandpass</li><li>lowshelf</li><li>highshelf</li><li>peaking</li><li>notch</li><li>allpass</li></ul><p>\u7136\u540E\u6307\u5B9A\u8FC7\u6EE4\u5668\u7684\u9891\u7387\uFF08frequency\uFF09\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>filter<span class="token punctuation">.</span>frequency<span class="token punctuation">.</span>value <span class="token operator">=</span> frequency
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\uFF0C\u8FC7\u6EE4\u5668\u5B9E\u4F8B\u8FDE\u63A5\u8282\u70B9\u5B9E\u4F8B\uFF0C\u5C31\u53EF\u4EE5\u751F\u6548\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>sourceNode<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33),c=[p];function o(i,l){return s(),a("div",null,c)}var r=n(t,[["render",o],["__file","webaudio.html.vue"]]);export{r as default};