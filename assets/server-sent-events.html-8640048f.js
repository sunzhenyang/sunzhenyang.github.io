import{_ as o,P as p,Q as c,$ as n,a0 as s,a1 as e,a2 as t,F as i}from"./framework-0028f3de.js";const l={},r=t(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>服务器向客户端推送数据，有很多解决方案。除了“轮询” 和 WebSocket，HTML 5 还提供了 Server-Sent Events（以下简称 SSE）。</p><p>一般来说，HTTP 协议只能客户端向服务器发起请求，服务器不能主动向客户端推送。但是有一种特殊情况，就是服务器向客户端声明，接下来要发送的是流信息（streaming）。也就是说，发送的不是一次性的数据包，而是一个数据流，会连续不断地发送过来。这时，客户端不会关闭连接，会一直等着服务器发过来的新的数据流。本质上，这种通信就是以流信息的方式，完成一次用时很长的下载。</p><p>SSE 就是利用这种机制，使用流信息向浏览器推送信息。它基于 HTTP 协议，目前除了 IE/Edge，其他浏览器都支持。</p><h2 id="与-websocket-的比较" tabindex="-1"><a class="header-anchor" href="#与-websocket-的比较" aria-hidden="true">#</a> 与 WebSocket 的比较</h2><p>SSE 与 WebSocket 作用相似，都是建立浏览器与服务器之间的通信渠道，然后服务器向浏览器推送信息。</p><p>总体来说，WebSocket 更强大和灵活。因为它是全双工通道，可以双向通信；SSE 是单向通道，只能服务器向浏览器发送，因为 streaming 本质上就是下载。如果浏览器向服务器发送信息，就变成了另一次 HTTP 请求。</p><p>但是，SSE 也有自己的优点。</p><ul><li>SSE 使用 HTTP 协议，现有的服务器软件都支持。WebSocket 是一个独立协议。</li><li>SSE 属于轻量级，使用简单；WebSocket 协议相对复杂。</li><li>SSE 默认支持断线重连，WebSocket 需要自己实现断线重连。</li><li>SSE 一般只用来传送文本，二进制数据需要编码后传送，WebSocket 默认支持传送二进制数据。</li><li>SSE 支持自定义发送的消息类型。</li></ul><p>因此，两者各有特点，适合不同的场合。</p><h2 id="客户端-api" tabindex="-1"><a class="header-anchor" href="#客户端-api" aria-hidden="true">#</a> 客户端 API</h2><h3 id="eventsource-对象" tabindex="-1"><a class="header-anchor" href="#eventsource-对象" aria-hidden="true">#</a> EventSource 对象</h3><p>SSE 的客户端 API 部署在<code>EventSource</code>对象上。下面的代码可以检测浏览器是否支持 SSE。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;EventSource&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 SSE 时，浏览器首先生成一个<code>EventSource</code>实例，向服务器发起连接。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的<code>url</code>可以与当前网址同域，也可以跨域。跨域时，可以指定第二个参数，打开<code>withCredentials</code>属性，表示是否一起发送 Cookie。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="readystate-属性" tabindex="-1"><a class="header-anchor" href="#readystate-属性" aria-hidden="true">#</a> readyState 属性</h3><p><code>EventSource</code>实例的<code>readyState</code>属性，表明连接的当前状态。该属性只读，可以取以下值。</p><ul><li>0：相当于常量<code>EventSource.CONNECTING</code>，表示连接还未建立，或者断线正在重连。</li><li>1：相当于常量<code>EventSource.OPEN</code>，表示连接已经建立，可以接受数据。</li><li>2：相当于常量<code>EventSource.CLOSED</code>，表示连接已断，且不会重连。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url-属性" tabindex="-1"><a class="header-anchor" href="#url-属性" aria-hidden="true">#</a> url 属性</h3><p><code>EventSource</code>实例的<code>url</code>属性返回连接的网址，该属性只读。</p><h3 id="withcredentials-属性" tabindex="-1"><a class="header-anchor" href="#withcredentials-属性" aria-hidden="true">#</a> withCredentials 属性</h3><p><code>EventSource</code>实例的<code>withCredentials</code>属性返回一个布尔值，表示当前实例是否开启 CORS 的<code>withCredentials</code>。该属性只读，默认是<code>false</code>。</p><h3 id="onopen-属性" tabindex="-1"><a class="header-anchor" href="#onopen-属性" aria-hidden="true">#</a> onopen 属性</h3><p>连接一旦建立，就会触发<code>open</code>事件，可以在<code>onopen</code>属性定义回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 另一种写法</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onmessage-属性" tabindex="-1"><a class="header-anchor" href="#onmessage-属性" aria-hidden="true">#</a> onmessage 属性</h3><p>客户端收到服务器发来的数据，就会触发<code>message</code>事件，可以在<code>onmessage</code>属性定义回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 另一种写法</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，参数对象<code>event</code>有如下属性。</p><ul><li><code>data</code>：服务器端传回的数据（文本格式）。</li><li><code>origin</code>： 服务器 URL 的域名部分，即协议、域名和端口，表示消息的来源。</li><li><code>lastEventId</code>：数据的编号，由服务器端发送。如果没有编号，这个属性为空。</li></ul><h3 id="onerror-属性" tabindex="-1"><a class="header-anchor" href="#onerror-属性" aria-hidden="true">#</a> onerror 属性</h3><p>如果发生通信错误（比如连接中断），就会触发<code>error</code>事件，可以在<code>onerror</code>属性定义回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle error event</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 另一种写法</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle error event</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h3><p>默认情况下，服务器发来的数据，总是触发浏览器<code>EventSource</code>实例的<code>message</code>事件。开发者还可以自定义 SSE 事件，这种情况下，发送回来的数据不会触发<code>message</code>事件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，浏览器对 SSE 的<code>foo</code>事件进行监听。如何实现服务器发送<code>foo</code>事件，请看下文。</p><h3 id="close-方法" tabindex="-1"><a class="header-anchor" href="#close-方法" aria-hidden="true">#</a> close() 方法</h3><p><code>close</code>方法用于关闭 SSE 连接。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="服务器实现" tabindex="-1"><a class="header-anchor" href="#服务器实现" aria-hidden="true">#</a> 服务器实现</h2><h3 id="数据格式" tabindex="-1"><a class="header-anchor" href="#数据格式" aria-hidden="true">#</a> 数据格式</h3><p>服务器向浏览器发送的 SSE 数据，必须是 UTF-8 编码的文本，具有如下的 HTTP 头信息。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面三行之中，第一行的<code>Content-Type</code>必须指定 MIME 类型为<code>event-steam</code>。</p><p>每一次发送的信息，由若干个<code>message</code>组成，每个<code>message</code>之间用<code>\\n\\n</code>分隔。每个<code>message</code>内部由若干行组成，每一行都是如下格式。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>[field]: value\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的<code>field</code>可以取四个值。</p><ul><li>data</li><li>event</li><li>id</li><li>retry</li></ul><p>此外，还可以有冒号开头的行，表示注释。通常，服务器每隔一段时间就会向浏览器发送一个注释，保持连接不中断。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>: This is a comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是一个例子。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>: this is a test stream\\n\\n

data: some text\\n\\n

data: another message\\n
data: with two lines \\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-字段" tabindex="-1"><a class="header-anchor" href="#data-字段" aria-hidden="true">#</a> data 字段</h3><p>数据内容用<code>data</code>字段表示。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>data:  message\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果数据很长，可以分成多行，最后一行用<code>\\n\\n</code>结尾，前面行都用<code>\\n</code>结尾。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>data: begin message\\n
data: continue message\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个发送 JSON 数据的例子。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>data: {\\n
data: &quot;foo&quot;: &quot;bar&quot;,\\n
data: &quot;baz&quot;, 555\\n
data: }\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id-字段" tabindex="-1"><a class="header-anchor" href="#id-字段" aria-hidden="true">#</a> id 字段</h3><p>数据标识符用<code>id</code>字段表示，相当于每一条数据的编号。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>id: msg1\\n
data: message\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器用<code>lastEventId</code>属性读取这个值。一旦连接断线，浏览器会发送一个 HTTP 头，里面包含一个特殊的<code>Last-Event-ID</code>头信息，将这个值发送回来，用来帮助服务器端重建连接。因此，这个头信息可以被视为一种同步机制。</p><h3 id="event-字段" tabindex="-1"><a class="header-anchor" href="#event-字段" aria-hidden="true">#</a> event 字段</h3><p><code>event</code>字段表示自定义的事件类型，默认是<code>message</code>事件。浏览器可以用<code>addEventListener()</code>监听该事件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>event: foo\\n
data: a foo event\\n\\n

data: an unnamed event\\n\\n

event: bar\\n
data: a bar event\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创造了三条信息。第一条的名字是<code>foo</code>，触发浏览器的<code>foo</code>事件；第二条未取名，表示默认类型，触发浏览器的<code>message</code>事件；第三条是<code>bar</code>，触发浏览器的<code>bar</code>事件。</p><p>下面是另一个例子。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>event: userconnect
data: {&quot;username&quot;: &quot;bobby&quot;, &quot;time&quot;: &quot;02:33:48&quot;}

event: usermessage
data: {&quot;username&quot;: &quot;bobby&quot;, &quot;time&quot;: &quot;02:34:11&quot;, &quot;text&quot;: &quot;Hi everyone.&quot;}

event: userdisconnect
data: {&quot;username&quot;: &quot;bobby&quot;, &quot;time&quot;: &quot;02:34:23&quot;}

event: usermessage
data: {&quot;username&quot;: &quot;sean&quot;, &quot;time&quot;: &quot;02:34:36&quot;, &quot;text&quot;: &quot;Bye, bobby.&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="retry-字段" tabindex="-1"><a class="header-anchor" href="#retry-字段" aria-hidden="true">#</a> retry 字段</h3><p>服务器可以用<code>retry</code>字段，指定浏览器重新发起连接的时间间隔。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>retry: 10000\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>两种情况会导致浏览器重新发起连接：一种是时间间隔到期，二是由于网络错误等原因，导致连接出错。</p><h2 id="node-服务器实例" tabindex="-1"><a class="header-anchor" href="#node-服务器实例" aria-hidden="true">#</a> Node 服务器实例</h2><p>SSE 要求服务器与浏览器保持连接。对于不同的服务器软件来说，所消耗的资源是不一样的。Apache 服务器，每个连接就是一个线程，如果要维持大量连接，势必要消耗大量资源。Node 则是所有连接都使用同一个线程，因此消耗的资源会小得多，但是这要求每个连接不能包含很耗时的操作，比如磁盘的 IO 读写。</p>`,80),u={href:"http://cjihrig.com/blog/server-sent-events-in-node-js/",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> fileName <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>url<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName <span class="token operator">===</span> <span class="token string">&quot;./stream&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text/event-stream&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Cache-Control&quot;</span><span class="token operator">:</span><span class="token string">&quot;no-cache&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Connection&quot;</span><span class="token operator">:</span><span class="token string">&quot;keep-alive&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Access-Control-Allow-Origin&quot;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;retry: 10000\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;event: connecttime\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    req<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8844</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,2),v={href:"http://jspro.com/apis/implementing-push-technology-using-server-sent-events/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://cjihrig.com/blog/the-server-side-of-server-sent-events/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.html5rocks.com/en/tutorials/eventsource/basics/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events",target:"_blank",rel:"noopener noreferrer"},b={href:"http://Segment.io",target:"_blank",rel:"noopener noreferrer"},g={href:"https://segment.io/blog/2014-04-03-server-sent-events-the-simplest-realtime-browser-spec/",target:"_blank",rel:"noopener noreferrer"};function f(q,S){const a=i("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[s("下面是 Node 的 SSE 服务器"),n("a",u,[s("实例"),e(a)]),s("。")]),d,n("ul",null,[n("li",null,[s("Colin Ihrig, "),n("a",v,[s("Implementing Push Technology Using Server-Sent Events"),e(a)])]),n("li",null,[s("Colin Ihrig，"),n("a",k,[s("The Server Side of Server-Sent Events"),e(a)])]),n("li",null,[s("Eric Bidelman, "),n("a",m,[s("Stream Updates with Server-Sent Events"),e(a)])]),n("li",null,[s("MDN，"),n("a",h,[s("Using server-sent events"),e(a)])]),n("li",null,[n("a",b,[s("Segment.io"),e(a)]),s(", "),n("a",g,[s("Server-Sent Events: The simplest realtime browser spec"),e(a)])])])])}const w=o(l,[["render",f],["__file","server-sent-events.html.vue"]]);export{w as default};
