import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,b as n,d as s,e,f as i}from"./app-DdwQwFQ1.js";const l={},u=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述"},[n("span",null,"概述")])],-1),r=n("p",null,"Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。",-1),d={href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://es6.ruanyifeng.com/#docs/promise",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>首先，Promise 是一个对象，也是一个构造函数。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步代码...</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Promise</code>构造函数接受一个回调函数<code>f1</code>作为参数，<code>f1</code>里面是异步操作的代码。然后，返回的<code>p1</code>就是一个 Promise 实例。</p><p>Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。Promise 实例有一个<code>then</code>方法，用来指定下一步的回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>f1</code>的异步操作执行完成，就会执行<code>f2</code>。</p><p>传统的写法可能需要把<code>f2</code>作为回调函数传入<code>f1</code>，比如写成<code>f1(f2)</code>，异步操作完成后，在<code>f1</code>内部调用<code>f2</code>。Promise 使得<code>f1</code>和<code>f2</code>变成了链式写法。不仅改善了可读性，而且对于多层嵌套的回调函数尤其方便。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 传统写法</span>
<span class="token function">step1</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">step2</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">step3</span><span class="token punctuation">(</span>value2<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">step4</span><span class="token punctuation">(</span>value3<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Promise 的写法</span>
<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>step1<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step2<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step3<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面代码可以看到，采用 Promises 以后，程序流程变得非常清楚，十分易读。注意，为了便于理解，上面代码的<code>Promise</code>实例的生成格式，做了简化，真正的语法请参照下文。</p><p>总的来说，传统的回调函数写法使得代码混成一团，变得横向发展而不是向下发展。Promise 就是解决这个问题，使得异步流程可以写成同步流程。</p><p>Promise 原本只是社区提出的一个构想，一些函数库率先实现了这个功能。ECMAScript 6 将其写入语言标准，目前 JavaScript 原生支持 Promise 对象。</p><h2 id="promise-对象的状态" tabindex="-1"><a class="header-anchor" href="#promise-对象的状态"><span>Promise 对象的状态</span></a></h2><p>Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。</p><ul><li>异步操作未完成（pending）</li><li>异步操作成功（fulfilled）</li><li>异步操作失败（rejected）</li></ul><p>上面三种状态里面，<code>fulfilled</code>和<code>rejected</code>合在一起称为<code>resolved</code>（已定型）。</p><p>这三种的状态的变化途径只有两种。</p><ul><li>从“未完成”到“成功”</li><li>从“未完成”到“失败”</li></ul><p>一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，它的英语意思是“承诺”，一旦承诺成效，就不得再改变了。这也意味着，Promise 实例的状态变化只可能发生一次。</p><p>因此，Promise 的最终结果只有两种。</p><ul><li>异步操作成功，Promise 实例传回一个值（value），状态变为<code>fulfilled</code>。</li><li>异步操作失败，Promise 实例抛出一个错误（error），状态变为<code>rejected</code>。</li></ul><h2 id="promise-构造函数" tabindex="-1"><a class="header-anchor" href="#promise-构造函数"><span>Promise 构造函数</span></a></h2><p>JavaScript 提供原生的<code>Promise</code>构造函数，用来生成 Promise 实例。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token comment">/* 异步操作成功 */</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">/* 异步操作失败 */</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Promise</code>构造函数接受一个函数作为参数，该函数的两个参数分别是<code>resolve</code>和<code>reject</code>。它们是两个函数，由 JavaScript 引擎提供，不用自己实现。</p><p><code>resolve</code>函数的作用是，将<code>Promise</code>实例的状态从“未完成”变为“成功”（即从<code>pending</code>变为<code>fulfilled</code>），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。<code>reject</code>函数的作用是，将<code>Promise</code>实例的状态从“未完成”变为“失败”（即从<code>pending</code>变为<code>rejected</code>），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。</p><p>下面是一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">,</span> <span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>timeout(100)</code>返回一个 Promise 实例。100毫秒以后，该实例的状态会变为<code>fulfilled</code>。</p><h2 id="promise-prototype-then" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then"><span>Promise.prototype.then()</span></a></h2><p>Promise 实例的<code>then</code>方法，用来添加回调函数。</p><p><code>then</code>方法可以接受两个回调函数，第一个是异步操作成功时（变为<code>fulfilled</code>状态）的回调函数，第二个是异步操作失败（变为<code>rejected</code>）时的回调函数（该参数可以省略）。一旦状态改变，就调用相应的回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">,</span> console<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;成功&quot;</span>

<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p2<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">,</span> console<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Error: 失败</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>p1</code>和<code>p2</code>都是Promise 实例，它们的<code>then</code>方法绑定两个回调函数：成功时的回调函数<code>console.log</code>，失败时的回调函数<code>console.error</code>（可以省略）。<code>p1</code>的状态变为成功，<code>p2</code>的状态变为失败，对应的回调函数会收到异步操作传回的值，然后在控制台输出。</p><p><code>then</code>方法可以链式使用。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>p1
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step1<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step2<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step3<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    console<span class="token punctuation">.</span>log<span class="token punctuation">,</span>
    console<span class="token punctuation">.</span>error
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>p1</code>后面有四个<code>then</code>，意味依次有四个回调函数。只要前一步的状态变为<code>fulfilled</code>，就会依次执行紧跟在后面的回调函数。</p><p>最后一个<code>then</code>方法，回调函数是<code>console.log</code>和<code>console.error</code>，用法上有一点重要的区别。<code>console.log</code>只显示<code>step3</code>的返回值，而<code>console.error</code>可以显示<code>p1</code>、<code>step1</code>、<code>step2</code>、<code>step3</code>之中任意一个发生的错误。举例来说，如果<code>step1</code>的状态变为<code>rejected</code>，那么<code>step2</code>和<code>step3</code>都不会执行了（因为它们是<code>resolved</code>的回调函数）。Promise 开始寻找，接下来第一个为<code>rejected</code>的回调函数，在上面代码中是<code>console.error</code>。这就是说，Promise 对象的报错具有传递性。</p><h2 id="then-用法辨析" tabindex="-1"><a class="header-anchor" href="#then-用法辨析"><span>then() 用法辨析</span></a></h2><p>Promise 的用法，简单说就是一句话：使用<code>then</code>方法添加回调函数。但是，不同的写法有一些细微的差别，请看下面四种写法，它们的差别在哪里？</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 写法一</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 写法二</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 写法三</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 写法四</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了便于讲解，下面这四种写法都再用<code>then</code>方法接一个回调函数<code>f3</code>。写法一的<code>f3</code>回调函数的参数，是<code>f2</code>函数的运行结果。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>f3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写法二的<code>f3</code>回调函数的参数是<code>undefined</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>f3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写法三的<code>f3</code>回调函数的参数，是<code>f2</code>函数返回的函数的运行结果。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>f3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>写法四与写法一只有一个差别，那就是<code>f2</code>会接收到<code>f1()</code>返回的结果。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>f3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例-图片加载" tabindex="-1"><a class="header-anchor" href="#实例-图片加载"><span>实例：图片加载</span></a></h2><p>下面是使用 Promise 完成图片的加载。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">preloadImage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    image<span class="token punctuation">.</span>onload  <span class="token operator">=</span> resolve<span class="token punctuation">;</span>
    image<span class="token punctuation">.</span>onerror <span class="token operator">=</span> reject<span class="token punctuation">;</span>
    image<span class="token punctuation">.</span>src <span class="token operator">=</span> path<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>image</code>是一个图片对象的实例。它有两个事件监听属性，<code>onload</code>属性在图片加载成功后调用，<code>onerror</code>属性在加载失败调用。</p><p>上面的<code>preloadImage()</code>函数用法如下。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">preloadImage</span><span class="token punctuation">(</span><span class="token string">&#39;https://example.com/my.jpg&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;加载成功&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，图片加载成功以后，<code>onload</code>属性会返回一个事件对象，因此第一个<code>then()</code>方法的回调函数，会接收到这个事件对象。该对象的<code>target</code>属性就是图片加载后生成的 DOM 节点。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>Promise 的优点在于，让回调函数变成了规范的链式写法，程序流程可以看得很清楚。它有一整套接口，可以实现许多强大的功能，比如同时执行多个异步操作，等到它们的状态都改变以后，再执行一个回调函数；再比如，为多个回调函数中抛出的错误，统一指定处理方法等等。</p><p>而且，Promise 还有一个传统写法没有的好处：它的状态一旦改变，无论何时查询，都能得到这个状态。这意味着，无论何时为 Promise 实例添加回调函数，该函数都能正确执行。所以，你不用担心是否错过了某个事件或信号。如果是传统写法，通过监听事件来执行回调函数，一旦错过了事件，再添加回调函数是不会执行的。</p><p>Promise 的缺点是，编写的难度比传统写法高，而且阅读代码也不是一眼可以看懂。你只会看到一堆<code>then</code>，必须自己在<code>then</code>的回调函数里面理清逻辑。</p><h2 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务"><span>微任务</span></a></h2><p>Promise 的回调函数属于异步任务，会在同步任务之后执行。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会先输出2，再输出1。因为<code>console.log(2)</code>是同步任务，而<code>then</code>的回调函数属于异步任务，一定晚于同步任务执行。</p><p>但是，Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。这意味着，微任务的执行时间一定早于正常任务。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
<span class="token comment">// 2</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的输出结果是<code>321</code>。这说明<code>then</code>的回调函数的执行时间，早于<code>setTimeout(fn, 0)</code>。因为<code>then</code>是本轮事件循环执行，<code>setTimeout(fn, 0)</code>在下一轮事件循环开始时执行。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>`,67),v={href:"https://sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://modernjavascript.blogspot.com/2013/08/promisesa-understanding-by-doing.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://blogs.msdn.com/b/ie/archive/2011/09/11/asynchronous-programming-in-javascript-with-promises.aspx",target:"_blank",rel:"noopener noreferrer"},f={href:"https://gist.github.com//wavded/5692344",target:"_blank",rel:"noopener noreferrer"},g={href:"http://blog.parse.com/2013/01/29/whats-so-great-about-javascript-promises/",target:"_blank",rel:"noopener noreferrer"},j={href:"http://www.html5rocks.com/en/tutorials/es6/promises/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://book.mixu.net/node/ch7.html",target:"_blank",rel:"noopener noreferrer"};function P(w,_){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[s("注意，本章只是 Promise 对象的简单介绍。为了避免与后续教程的重复，更完整的介绍请看"),n("a",d,[s("《ES6 标准入门》"),e(a)]),s("的"),n("a",k,[s("《Promise 对象》"),e(a)]),s("一章。")]),m,n("ul",null,[n("li",null,[s("Sebastian Porto, "),n("a",v,[s("Asynchronous JS: Callbacks, Listeners, Control Flow Libs and Promises"),e(a)])]),n("li",null,[s("Rhys Brett-Bowen, "),n("a",h,[s("Promises/A+ - understanding the spec through implementation"),e(a)])]),n("li",null,[s("Matt Podwysocki, Amanda Silver, "),n("a",b,[s("Asynchronous Programming in JavaScript with “Promises”"),e(a)])]),n("li",null,[s("Marc Harter, "),n("a",f,[s("Promise A+ Implementation"),e(a)])]),n("li",null,[s("Bryan Klimt, "),n("a",g,[s("What’s so great about JavaScript Promises?"),e(a)])]),n("li",null,[s("Jake Archibald, "),n("a",j,[s("JavaScript Promises There and back again"),e(a)])]),n("li",null,[s("Mikito Takada, "),n("a",y,[s("7. Control flow, Mixu's Node book"),e(a)])])])])}const J=t(l,[["render",P],["__file","promise.html.vue"]]),T=JSON.parse(`{"path":"/technology/javascript/async/promise.html","title":"Promise 对象","lang":"zh-CN","frontmatter":{"title":"Promise 对象","icon":"article","category":"javascript","article":false,"tag":["javascript"],"copyright":"Copyright by 阮一峰","description":"概述 Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。 注意，本章只是 Promise 对象的简单介绍。为了避免与后续教程的重...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/javascript/async/promise.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Promise 对象"}],["meta",{"property":"og:description","content":"概述 Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。 注意，本章只是 Promise 对象的简单介绍。为了避免与后续教程的重..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Promise 对象\\",\\"description\\":\\"概述 Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。 注意，本章只是 Promise 对象的简单介绍。为了避免与后续教程的重...\\"}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"Promise 对象的状态","slug":"promise-对象的状态","link":"#promise-对象的状态","children":[]},{"level":2,"title":"Promise 构造函数","slug":"promise-构造函数","link":"#promise-构造函数","children":[]},{"level":2,"title":"Promise.prototype.then()","slug":"promise-prototype-then","link":"#promise-prototype-then","children":[]},{"level":2,"title":"then() 用法辨析","slug":"then-用法辨析","link":"#then-用法辨析","children":[]},{"level":2,"title":"实例：图片加载","slug":"实例-图片加载","link":"#实例-图片加载","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"微任务","slug":"微任务","link":"#微任务","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":8.57,"words":2571},"filePathRelative":"technology/javascript/async/promise.md","localizedDate":"2023年1月11日","excerpt":"<h2>概述</h2>\\n<p>Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。</p>\\n<p>注意，本章只是 Promise 对象的简单介绍。为了避免与后续教程的重复，更完整的介绍请看<a href=\\"http://es6.ruanyifeng.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《ES6 标准入门》</a>的<a href=\\"http://es6.ruanyifeng.com/#docs/promise\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《Promise 对象》</a>一章。</p>","autoDesc":true}`);export{J as comp,T as data};