import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t,f as e}from"./app-BybQgHW9.js";const p={},o=e(`<h2 id="普通-html-中使用" tabindex="-1"><a class="header-anchor" href="#普通-html-中使用"><span>普通 HTML 中使用</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// WebSocket 测试</span>
      <span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;ws://websocket.org&#39;</span><span class="token punctuation">)</span>

      <span class="token keyword">switch</span> <span class="token punctuation">(</span>ws<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CONNECTING</span><span class="token operator">:</span>
          <span class="token comment">// 值为 0，表示正在连接</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">OPEN</span><span class="token operator">:</span>
          <span class="token comment">// 值为 1，表示连接成功，可以进行通信了</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CLOSING</span><span class="token operator">:</span>
          <span class="token comment">// 值为 2，表示连接正在关闭</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CLOSED</span><span class="token operator">:</span>
          <span class="token comment">// 值为 3，表示链接已关闭，或者打开连接失败</span>
          <span class="token keyword">break</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token comment">// 不存在其他情况</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 用于指定连接成功后的回调函数</span>
      ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 发送数据</span>
        ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Server!&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 发送数据</span>
        ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Server!&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 用于指定连接关闭后的回调函数</span>
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

      <span class="token comment">// 用于指定收到服务器数据后的回调函数</span>
      ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span>
      ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 用于指定报错时的回调函数</span>
      ws<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 错误处理</span>
      <span class="token punctuation">}</span>
      ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 判断发送是否结束</span>
      <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">10000000</span><span class="token punctuation">)</span>
      wx<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>wx<span class="token punctuation">.</span>bufferedAmount <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 发送完毕</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 发送还没有结束</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-中使用" tabindex="-1"><a class="header-anchor" href="#vue-中使用"><span>Vue 中使用</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
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
      <span class="token comment">//初始化weosocket</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;ws://websocket.org&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>onmessage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonmessage
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>onopen <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonopen
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonerror
      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>onclose <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketclose
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketonopen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//连接建立之后执行send方法发送数据</span>
      <span class="token comment">// setInterval(() =&gt; {</span>
      <span class="token comment">//   let actions = { test: &#39;12345&#39; }</span>
      <span class="token comment">//   this.websocketsend(JSON.stringify(actions))</span>
      <span class="token comment">// }, 2000)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketonerror</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//连接建立失败重连</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketonmessage</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//数据接收</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketsend</span><span class="token punctuation">(</span><span class="token parameter">Data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//数据发送</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>Data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">websocketclose</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//关闭</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;断开连接&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//离开路由之后断开websocket连接</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function c(l,i){return s(),a("div",null,[t(" more "),o])}const r=n(p,[["render",c],["__file","09.WebSocket 使用.html.vue"]]),d=JSON.parse(`{"path":"/fe/javascript/knowledge/09.WebSocket%20%E4%BD%BF%E7%94%A8.html","title":"Websocket 使用","lang":"zh-CN","frontmatter":{"title":"Websocket 使用","icon":"article","category":["JavaScript"],"description":"普通 HTML 中使用 Vue 中使用","head":[["meta",{"property":"og:url","content":"https://codemake.fun/fe/javascript/knowledge/09.WebSocket%20%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Websocket 使用"}],["meta",{"property":"og:description","content":"普通 HTML 中使用 Vue 中使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Websocket 使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-11T09:12:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Yang\\",\\"url\\":\\"https://codemake.fun/\\",\\"email\\":\\"874530670@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"普通 HTML 中使用","slug":"普通-html-中使用","link":"#普通-html-中使用","children":[]},{"level":2,"title":"Vue 中使用","slug":"vue-中使用","link":"#vue-中使用","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"fe/javascript/knowledge/09.WebSocket 使用.md","localizedDate":"2023年1月11日","excerpt":"","autoDesc":true}`);export{r as comp,d as data};
