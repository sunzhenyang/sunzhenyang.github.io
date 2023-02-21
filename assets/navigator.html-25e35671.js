import{_ as n,Q as a,S as s,a3 as e}from"./framework-9339b303.js";const o={},t=e(`<p><code>window.navigator</code>属性指向一个包含浏览器和系统信息的 Navigator 对象。脚本通过这个属性了解用户的环境信息。</p><h2 id="navigator-对象的属性" tabindex="-1"><a class="header-anchor" href="#navigator-对象的属性" aria-hidden="true">#</a> Navigator 对象的属性</h2><h3 id="navigator-useragent" tabindex="-1"><a class="header-anchor" href="#navigator-useragent" aria-hidden="true">#</a> Navigator.userAgent</h3><p><code>navigator.userAgent</code>属性返回浏览器的 User Agent 字符串，表示用户设备信息，包含了浏览器的厂商、版本、操作系统等信息。</p><p>下面是 Chrome 浏览器的<code>userAgent</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>userAgent
<span class="token comment">// &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>userAgent</code>属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且用户可以改变这个字符串。这个字符串的格式并无统一规定，也无法保证未来的适用性，各种上网设备层出不穷，难以穷尽。所以，现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。</p><p>不过，通过<code>userAgent</code>可以大致准确地识别手机浏览器，方法就是测试是否包含<code>mobi</code>字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> ua <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">mobi</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 手机浏览器</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 非手机浏览器</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">mobi|android|touch|mini</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="navigator-plugins" tabindex="-1"><a class="header-anchor" href="#navigator-plugins" aria-hidden="true">#</a> Navigator.plugins</h3><p><code>Navigator.plugins</code>属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，比如 Flash、ActiveX 等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> pluginsLength <span class="token operator">=</span> navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pluginsLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator-platform" tabindex="-1"><a class="header-anchor" href="#navigator-platform" aria-hidden="true">#</a> Navigator.platform</h3><p><code>Navigator.platform</code>属性返回用户的操作系统信息，比如<code>MacIntel</code>、<code>Win32</code>、<code>Linux x86_64</code>等 。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>platform
<span class="token comment">// &quot;Linux x86_64&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator-online" tabindex="-1"><a class="header-anchor" href="#navigator-online" aria-hidden="true">#</a> Navigator.onLine</h3><p><code>navigator.onLine</code>属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>onLine <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的<code>onLine</code>属性会返回<code>true</code>，所以不能假定只要是<code>true</code>，用户就一定能访问互联网。不过，如果是<code>false</code>，可以断定用户一定离线。</p><p>用户变成在线会触发<code>online</code>事件，变成离线会触发<code>offline</code>事件，可以通过<code>window.ononline</code>和<code>window.onoffline</code>指定这两个事件的回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;offline&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;offline&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;online&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;online&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator-language-navigator-languages" tabindex="-1"><a class="header-anchor" href="#navigator-language-navigator-languages" aria-hidden="true">#</a> Navigator.language，Navigator.languages</h3><p><code>Navigator.language</code>属性返回一个字符串，表示浏览器的首选语言。该属性只读。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>language <span class="token comment">// &quot;en&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Navigator.languages</code>属性返回一个数组，表示用户可以接受的语言。<code>Navigator.language</code>总是这个数组的第一个成员。HTTP 请求头信息的<code>Accept-Language</code>字段，就来自这个数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>languages  <span class="token comment">// [&quot;en-US&quot;, &quot;en&quot;, &quot;zh-CN&quot;, &quot;zh&quot;, &quot;zh-TW&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果这个属性发生变化，就会在<code>window</code>对象上触发<code>languagechange</code>事件。</p><h3 id="navigator-geolocation" tabindex="-1"><a class="header-anchor" href="#navigator-geolocation" aria-hidden="true">#</a> Navigator.geolocation</h3><p><code>Navigator.geolocation</code>属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。</p><p>Geolocation 对象提供下面三个方法。</p><ul><li>Geolocation.getCurrentPosition()：得到用户的当前位置</li><li>Geolocation.watchPosition()：监听用户位置变化</li><li>Geolocation.clearWatch()：取消<code>watchPosition()</code>方法指定的监听函数</li></ul><p>注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。</p><h3 id="navigator-cookieenabled" tabindex="-1"><a class="header-anchor" href="#navigator-cookieenabled" aria-hidden="true">#</a> Navigator.cookieEnabled</h3><p><code>navigator.cookieEnabled</code>属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>cookieEnabled <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，这个属性反映的是浏览器总的特性，与是否储存某个具体的网站的 Cookie 无关。用户可以设置某个网站不得储存 Cookie，这时<code>cookieEnabled</code>返回的还是<code>true</code>。</p><h2 id="navigator-对象的方法" tabindex="-1"><a class="header-anchor" href="#navigator-对象的方法" aria-hidden="true">#</a> Navigator 对象的方法</h2><h3 id="navigator-javaenabled" tabindex="-1"><a class="header-anchor" href="#navigator-javaenabled" aria-hidden="true">#</a> Navigator.javaEnabled()</h3><p><code>navigator.javaEnabled()</code>方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span><span class="token function">javaEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="navigator-sendbeacon" tabindex="-1"><a class="header-anchor" href="#navigator-sendbeacon" aria-hidden="true">#</a> Navigator.sendBeacon()</h3><p><code>Navigator.sendBeacon()</code>方法用于向服务器异步发送数据，详见《XMLHttpRequest 对象》一章。</p><h2 id="navigator-的实验性属性" tabindex="-1"><a class="header-anchor" href="#navigator-的实验性属性" aria-hidden="true">#</a> Navigator 的实验性属性</h2><p>Navigator 对象有一些实验性属性，在部分浏览器可用。</p><h3 id="navigator-devicememory" tabindex="-1"><a class="header-anchor" href="#navigator-devicememory" aria-hidden="true">#</a> Navigator.deviceMemory</h3><p><code>navigator.deviceMemory</code>属性返回当前计算机的内存数量（单位为 GB）。该属性只读，只在 HTTPS 环境下可用。</p><p>它的返回值是一个近似值，四舍五入到最接近的2的幂，通常是 0.25、0.5、1、2、4、8。实际内存超过 8GB，也返回<code>8</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>deviceMemory <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./costly-module.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，只有当前内存大于 1GB，才加载大型的脚本。</p><h3 id="navigator-hardwareconcurrency" tabindex="-1"><a class="header-anchor" href="#navigator-hardwareconcurrency" aria-hidden="true">#</a> Navigator.hardwareConcurrency</h3><p><code>navigator.hardwareConcurrency</code>属性返回用户计算机上可用的逻辑处理器的数量。该属性只读。</p><p>现代计算机的 CPU 有多个物理核心，每个物理核心有时支持一次运行多个线程。因此，四核 CPU 可以提供八个逻辑处理器核心。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>hardwareConcurrency <span class="token operator">&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./costly-module.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，可用的逻辑处理器大于4，才会加载大型脚本。</p><p>该属性通过用于创建 Web Worker，每个可用的逻辑处理器都创建一个 Worker。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> workerList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>hardwareConcurrency<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newWorker <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">worker</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">&#39;cpuworker.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inUse</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  workerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newWorker<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，有多少个可用的逻辑处理器，就创建多少个 Web Worker。</p><h3 id="navigator-connection" tabindex="-1"><a class="header-anchor" href="#navigator-connection" aria-hidden="true">#</a> Navigator.connection</h3><p><code>navigator.connection</code>属性返回一个对象，包含当前网络连接的相关信息。</p><ul><li>downlink：有效带宽估计值（单位：兆比特/秒，Mbps），四舍五入到每秒 25KB 的最接近倍数。</li><li>downlinkMax：当前连接的最大下行链路速度（单位：兆比特每秒，Mbps）。</li><li>effectiveType：返回连接的等效类型，可能的值为<code>slow-2g</code>、<code>2g</code>、<code>3g</code>、<code>4g</code>。</li><li>rtt：当前连接的估计有效往返时间，四舍五入到最接近的25毫秒的倍数。</li><li>saveData：用户是否设置了浏览器的减少数据使用量选项（比如不加载图片），返回<code>true</code>或者<code>false</code>。</li><li>type：当前连接的介质类型，可能的值为<code>bluetooth</code>、<code>cellular</code>、<code>ethernet</code>、<code>none</code>、<code>wifi</code>、<code>wimax</code>、<code>other</code>、<code>unknown</code>。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>effectiveType <span class="token operator">===</span> <span class="token string">&#39;4g&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./costly-module.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，如果网络连接是 4G，则加载大型脚本。</p><h2 id="screen-对象" tabindex="-1"><a class="header-anchor" href="#screen-对象" aria-hidden="true">#</a> Screen 对象</h2><p>Screen 对象表示当前窗口所在的屏幕，提供显示设备的信息。<code>window.screen</code>属性指向这个对象。</p><p>该对象有下面的属性。</p><ul><li><code>Screen.height</code>：浏览器窗口所在的屏幕的高度（单位像素）。除非调整显示器的分辨率，否则这个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。</li><li><code>Screen.width</code>：浏览器窗口所在的屏幕的宽度（单位像素）。</li><li><code>Screen.availHeight</code>：浏览器窗口可用的屏幕高度（单位像素）。因为部分空间可能不可用，比如系统的任务栏或者 Mac 系统屏幕底部的 Dock 区，这个属性等于<code>height</code>减去那些被系统组件的高度。</li><li><code>Screen.availWidth</code>：浏览器窗口可用的屏幕宽度（单位像素）。</li><li><code>Screen.pixelDepth</code>：整数，表示屏幕的色彩位数，比如<code>24</code>表示屏幕提供24位色彩。</li><li><code>Screen.colorDepth</code>：<code>Screen.pixelDepth</code>的别名。严格地说，colorDepth 表示应用程序的颜色深度，pixelDepth 表示屏幕的颜色深度，绝大多数情况下，它们都是同一件事。</li><li><code>Screen.orientation</code>：返回一个对象，表示屏幕的方向。该对象的<code>type</code>属性是一个字符串，表示屏幕的具体方向，<code>landscape-primary</code>表示横放，<code>landscape-secondary</code>表示颠倒的横放，<code>portrait-primary</code>表示竖放，<code>portrait-secondary</code>表示颠倒的竖放。</li></ul><p>下面是<code>Screen.orientation</code>的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>orientation
<span class="token comment">// { angle: 0, type: &quot;landscape-primary&quot;, onchange: null }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子保证屏幕分辨率大于 1024 x 768。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">&gt;=</span> <span class="token number">1024</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">&gt;=</span> <span class="token number">768</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 分辨率不低于 1024x768</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是根据屏幕的宽度，将用户导向不同网页的代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>width <span class="token operator">&lt;=</span> <span class="token number">800</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>screen<span class="token punctuation">.</span>height <span class="token operator">&lt;=</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;small.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;wide.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),p=[t];function c(i,l){return a(),s("div",null,p)}const r=n(o,[["render",c],["__file","navigator.html.vue"]]);export{r as default};