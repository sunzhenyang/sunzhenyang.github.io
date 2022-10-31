import{_ as n,o as s,c as a,e as t}from"./app.e3aff15b.js";const p={},e=t(`<h2 id="\u666E\u901A-html-\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A-html-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u666E\u901A HTML \u4E2D\u4F7F\u7528</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// WebSocket \u6D4B\u8BD5</span>
      <span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;ws://websocket.org&#39;</span><span class="token punctuation">)</span>

      <span class="token keyword">switch</span> <span class="token punctuation">(</span>ws<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CONNECTING</span><span class="token operator">:</span>
          <span class="token comment">// \u503C\u4E3A 0\uFF0C\u8868\u793A\u6B63\u5728\u8FDE\u63A5</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">OPEN</span><span class="token operator">:</span>
          <span class="token comment">// \u503C\u4E3A 1\uFF0C\u8868\u793A\u8FDE\u63A5\u6210\u529F\uFF0C\u53EF\u4EE5\u8FDB\u884C\u901A\u4FE1\u4E86</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CLOSING</span><span class="token operator">:</span>
          <span class="token comment">// \u503C\u4E3A 2\uFF0C\u8868\u793A\u8FDE\u63A5\u6B63\u5728\u5173\u95ED</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CLOSED</span><span class="token operator">:</span>
          <span class="token comment">// \u503C\u4E3A 3\uFF0C\u8868\u793A\u94FE\u63A5\u5DF2\u5173\u95ED\uFF0C\u6216\u8005\u6253\u5F00\u8FDE\u63A5\u5931\u8D25</span>
          <span class="token keyword">break</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token comment">// \u4E0D\u5B58\u5728\u5176\u4ED6\u60C5\u51B5</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u7528\u4E8E\u6307\u5B9A\u8FDE\u63A5\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570</span>
      ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D1\u9001\u6570\u636E</span>
        ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Server!&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D1\u9001\u6570\u636E</span>
        ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Server!&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// \u7528\u4E8E\u6307\u5B9A\u8FDE\u63A5\u5173\u95ED\u540E\u7684\u56DE\u8C03\u51FD\u6570</span>
      ws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> code <span class="token operator">=</span> event<span class="token punctuation">.</span>code
        <span class="token keyword">var</span> reason <span class="token operator">=</span> event<span class="token punctuation">.</span>reason
        <span class="token keyword">var</span> wasClean <span class="token operator">=</span> event<span class="token punctuation">.</span>wasClean
      <span class="token punctuation">}</span>
      ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> code <span class="token operator">=</span> event<span class="token punctuation">.</span>code
        <span class="token keyword">var</span> reason <span class="token operator">=</span> event<span class="token punctuation">.</span>reason
        <span class="token keyword">var</span> wasClean <span class="token operator">=</span> event<span class="token punctuation">.</span>wasClean
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// \u7528\u4E8E\u6307\u5B9A\u6536\u5230\u670D\u52A1\u5668\u6570\u636E\u540E\u7684\u56DE\u8C03\u51FD\u6570</span>
      ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span>
      ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// \u7528\u4E8E\u6307\u5B9A\u62A5\u9519\u65F6\u7684\u56DE\u8C03\u51FD\u6570</span>
      ws<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9519\u8BEF\u5904\u7406</span>
      <span class="token punctuation">}</span>
      ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// \u5224\u65AD\u53D1\u9001\u662F\u5426\u7ED3\u675F</span>
      <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">10000000</span><span class="token punctuation">)</span>
      wx<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>wx<span class="token punctuation">.</span>bufferedAmount <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D1\u9001\u5B8C\u6BD5</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D1\u9001\u8FD8\u6CA1\u6709\u7ED3\u675F</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vue-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> Vue \u4E2D\u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;userCenter&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">websocket</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u521D\u59CB\u5316weosocket</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;ws://websocket.org&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>onmessage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonmessage
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>onopen <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonopen
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonerror
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>onclose <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketclose
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketonopen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u8FDE\u63A5\u5EFA\u7ACB\u4E4B\u540E\u6267\u884Csend\u65B9\u6CD5\u53D1\u9001\u6570\u636E</span>
      <span class="token comment">// setInterval(() =&gt; {</span>
      <span class="token comment">//   let actions = { test: &#39;12345&#39; }</span>
      <span class="token comment">//   this.websocketsend(JSON.stringify(actions))</span>
      <span class="token comment">// }, 2000)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketonerror</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u8FDE\u63A5\u5EFA\u7ACB\u5931\u8D25\u91CD\u8FDE</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketonmessage</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u6570\u636E\u63A5\u6536</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketsend</span><span class="token punctuation">(</span><span class="token parameter">Data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u6570\u636E\u53D1\u9001</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>Data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketclose</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5173\u95ED</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u65AD\u5F00\u8FDE\u63A5&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u79BB\u5F00\u8DEF\u7531\u4E4B\u540E\u65AD\u5F00websocket\u8FDE\u63A5</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","09.WebSocket \u4F7F\u7528.html.vue"]]);export{k as default};
