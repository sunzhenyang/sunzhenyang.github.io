import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as i,b as n,d as s,e as t,f as a}from"./app-DdwQwFQ1.js";const l={},u=a(`<h2 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析"><span>需求分析</span></a></h2><p>在前面的章节中，我们发送的请求都可以从网络层面接收到服务端返回的数据，但是代码层面并没有做任何关于返回数据的处理。我们希望能处理服务端响应的数据，并支持 Promise 链式调用的方式，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/post&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以拿到 <code>res</code> 对象，并且我们希望该对象包括：服务端返回的数据 <code>data</code>，HTTP 状态码<code>status</code>，状态消息 <code>statusText</code>，响应头 <code>headers</code>、请求配置对象 <code>config</code> 以及请求的 <code>XMLHttpRequest</code> 对象实例 <code>request</code>。</p><h2 id="定义接口类型" tabindex="-1"><a class="header-anchor" href="#定义接口类型"><span>定义接口类型</span></a></h2><p>根据需求，我们可以定义一个 <code>AxiosResponse</code> 接口类型，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosResponse</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token builtin">any</span>
  status<span class="token operator">:</span> <span class="token builtin">number</span>
  statusText<span class="token operator">:</span> <span class="token builtin">string</span>
  headers<span class="token operator">:</span> <span class="token builtin">any</span>
  config<span class="token operator">:</span> AxiosRequestConfig
  request<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，<code>axios</code> 函数返回的是一个 <code>Promise</code> 对象，我们可以定义一个 <code>AxiosPromise</code> 接口，它继承于 <code>Promise&lt;AxiosResponse&gt;</code> 这个泛型接口：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosPromise</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的话，当 <code>axios</code> 返回的是 <code>AxiosPromise</code> 类型，那么 <code>resolve</code> 函数中的参数就是一个 <code>AxiosResponse</code> 类型。</p>`,10),r=n("code",null,"response",-1),d=n("code",null,"XMLHttpRequest",-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"responseType",-1),m=n("code",null,"AxiosRequestConfig",-1),b=a(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  responseType<span class="token operator">?</span><span class="token operator">:</span> XMLHttpRequestResponseType
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>responseType</code> 的类型是一个 <code>XMLHttpRequestResponseType</code> 类型，它的定义是 <code>&quot;&quot; | &quot;arraybuffer&quot; | &quot;blob&quot; | &quot;document&quot; | &quot;json&quot; | &quot;text&quot;</code> 字符串字面量类型。</p><h2 id="实现获取响应数据逻辑" tabindex="-1"><a class="header-anchor" href="#实现获取响应数据逻辑"><span>实现获取响应数据逻辑</span></a></h2>`,3),g=n("code",null,"xhr",-1),h={href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"onreadystatechange",-1),f=n("code",null,"xhr",-1),x=n("code",null,"AxiosPromise",-1),_=a(`<p><code>xhr.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">xhr</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> headers<span class="token punctuation">,</span> responseType <span class="token punctuation">}</span> <span class="token operator">=</span> config

    <span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>responseType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span>responseType <span class="token operator">=</span> responseType
    <span class="token punctuation">}</span>

    request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

    request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">handleLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> responseHeaders <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getAllResponseHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> responseData <span class="token operator">=</span> responseType <span class="token operator">&amp;&amp;</span> responseType <span class="token operator">!==</span> <span class="token string">&#39;text&#39;</span> <span class="token operator">?</span> request<span class="token punctuation">.</span>response <span class="token operator">:</span> request<span class="token punctuation">.</span>responseText
      <span class="token keyword">const</span> response<span class="token operator">:</span> AxiosResponse <span class="token operator">=</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> responseData<span class="token punctuation">,</span>
        status<span class="token operator">:</span> request<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
        statusText<span class="token operator">:</span> request<span class="token punctuation">.</span>statusText<span class="token punctuation">,</span>
        headers<span class="token operator">:</span> responseHeaders<span class="token punctuation">,</span>
        config<span class="token punctuation">,</span>
        request
      <span class="token punctuation">}</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;content-type&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">delete</span> headers<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        request<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> headers<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，我们这里还判断了如果 <code>config</code> 中配置了 <code>responseType</code>，我们把它设置到 <code>request.responseType</code> 中。在 <code>onreadystatechange</code> 事件函数中，我们构造了 <code>AxiosResponse</code> 类型的 <code>reponse</code> 对象，并把它 <code>resolve</code> 出去。</p><p>修改了 <code>xhr</code> 函数，我们同样也要对应修改 <code>axios</code> 函数：</p><p><code>index.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">axios</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise <span class="token punctuation">{</span>
  <span class="token function">processConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">xhr</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就实现了 <code>axios</code> 函数的 Promise 化。</p><h2 id="demo-编写" tabindex="-1"><a class="header-anchor" href="#demo-编写"><span>demo 编写</span></a></h2><p>我们在 <code>examples/base/app.ts</code> 文件中添加 2 段代码：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/post&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/post&#39;</span><span class="token punctuation">,</span>
  responseType<span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">4</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们打开浏览器运行 demo，看一下结果，发现我们可以正常 log 出这个 <code>res</code> 变量，它包含 <code>AxiosResponse</code> 类型中定义的那些属性，不过我们发现 2 个小问题：第一个是 <code>headers</code> 属性是一个字符串，我们需要把它解析成对象类型；第二个是在第一个请求中，得到的数据是一个 JSON 字符串，我们也需要把它转换成对象类型。</p><p>那么下一小节，我们将来解决第一个问题，对于响应的 <code>header</code> 做处理。</p>`,12);function q(T,w){const e=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[s("对于一个 AJAX 请求的 "),r,s("，我们是可以指定它的响应的数据类型的，通过设置 "),d,s(" 对象的 "),n("a",k,[v,t(e)]),s(" 属性，于是我们可以给 "),m,s(" 类型添加一个可选属性：")]),b,n("p",null,[s("首先我们要在 "),g,s(" 函数添加 "),n("a",h,[y,t(e)]),s(" 事件处理函数，并且让 "),f,s(" 函数返回的是 "),x,s(" 类型。")]),_])}const P=p(l,[["render",q],["__file","response.html.vue"]]),H=JSON.parse(`{"path":"/technology/ts_axios/chapter4/response.html","title":"获取响应数据","lang":"zh-CN","frontmatter":{"title":"获取响应数据","icon":"article","category":"typescript","article":false,"tag":["typescript"],"copyright":"Copyright by ustbhuangyi","description":"需求分析 在前面的章节中，我们发送的请求都可以从网络层面接收到服务端返回的数据，但是代码层面并没有做任何关于返回数据的处理。我们希望能处理服务端响应的数据，并支持 Promise 链式调用的方式，如下： 我们可以拿到 res 对象，并且我们希望该对象包括：服务端返回的数据 data，HTTP 状态码status，状态消息 statusText，响应头 ...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ts_axios/chapter4/response.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"获取响应数据"}],["meta",{"property":"og:description","content":"需求分析 在前面的章节中，我们发送的请求都可以从网络层面接收到服务端返回的数据，但是代码层面并没有做任何关于返回数据的处理。我们希望能处理服务端响应的数据，并支持 Promise 链式调用的方式，如下： 我们可以拿到 res 对象，并且我们希望该对象包括：服务端返回的数据 data，HTTP 状态码status，状态消息 statusText，响应头 ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"获取响应数据\\",\\"description\\":\\"需求分析 在前面的章节中，我们发送的请求都可以从网络层面接收到服务端返回的数据，但是代码层面并没有做任何关于返回数据的处理。我们希望能处理服务端响应的数据，并支持 Promise 链式调用的方式，如下： 我们可以拿到 res 对象，并且我们希望该对象包括：服务端返回的数据 data，HTTP 状态码status，状态消息 statusText，响应头 ...\\"}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"定义接口类型","slug":"定义接口类型","link":"#定义接口类型","children":[]},{"level":2,"title":"实现获取响应数据逻辑","slug":"实现获取响应数据逻辑","link":"#实现获取响应数据逻辑","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":2.69,"words":807},"filePathRelative":"technology/ts_axios/chapter4/response.md","localizedDate":"2023年1月11日","excerpt":"<h2>需求分析</h2>\\n<p>在前面的章节中，我们发送的请求都可以从网络层面接收到服务端返回的数据，但是代码层面并没有做任何关于返回数据的处理。我们希望能处理服务端响应的数据，并支持 Promise 链式调用的方式，如下：</p>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token function\\">axios</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  method<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'post'</span><span class=\\"token punctuation\\">,</span>\\n  url<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'/base/post'</span><span class=\\"token punctuation\\">,</span>\\n  data<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    a<span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n    b<span class=\\"token operator\\">:</span> <span class=\\"token number\\">2</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">then</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>res<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>res<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}`);export{P as comp,H as data};