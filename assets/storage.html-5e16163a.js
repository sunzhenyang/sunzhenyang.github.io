import{_ as t,P as o,Q as p,$ as n,a0 as a,a1 as e,a2 as c,F as i}from"./framework-0028f3de.js";const l={},r=c(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Storage 接口用于脚本在浏览器保存数据。两个对象部署了这个接口：<code>window.sessionStorage</code>和<code>window.localStorage</code>。</p><p><code>sessionStorage</code>保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空；<code>localStorage</code>保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。</p><p>保存的数据都以“键值对”的形式存在。也就是说，每一项数据都有一个键名和对应的值。所有的数据都是以文本格式保存。</p><p>这个接口很像 Cookie 的强化版，能够使用大得多的存储空间。目前，每个域名的存储上限视浏览器而定，Chrome 是 2.5MB，Firefox 和 Opera 是 5MB，IE 是 10MB。其中，Firefox 的存储空间由一级域名决定，而其他浏览器没有这个限制。也就是说，Firefox 中，<code>a.example.com</code>和<code>b.example.com</code>共享 5MB 的存储空间。另外，与 Cookie 一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取，如果跨域操作会报错。</p><h2 id="属性和方法" tabindex="-1"><a class="header-anchor" href="#属性和方法" aria-hidden="true">#</a> 属性和方法</h2><p>Storage 接口只有一个属性。</p><ul><li><code>Storage.length</code>：返回保存的数据项个数。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该接口提供5个方法。</p><h3 id="storage-setitem" tabindex="-1"><a class="header-anchor" href="#storage-setitem" aria-hidden="true">#</a> Storage.setItem()</h3><p><code>Storage.setItem()</code>方法用于存入数据。它接受两个参数，第一个是键名，第二个是保存的数据。如果键名已经存在，该方法会更新已有的键值。该方法没有返回值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>Storage.setItem()</code>两个参数都是字符串。如果不是字符串，会自动转成字符串，再存入浏览器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>setItem</code>方法的两个参数都不是字符串，但是存入的值都是字符串。</p><p>如果储存空间已满，该方法会抛错。</p><p>写入不一定要用这个方法，直接赋值也是可以的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 下面三种写法等价</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="storage-getitem" tabindex="-1"><a class="header-anchor" href="#storage-getitem" aria-hidden="true">#</a> Storage.getItem()</h3><p><code>Storage.getItem()</code>方法用于读取数据。它只有一个参数，就是键名。如果键名不存在，该方法返回<code>null</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>键名应该是一个字符串，否则会被自动转为字符串。</p><h3 id="storage-removeitem" tabindex="-1"><a class="header-anchor" href="#storage-removeitem" aria-hidden="true">#</a> Storage.removeItem()</h3><p><code>Storage.removeItem()</code>方法用于清除某个键名对应的键值。它接受键名作为参数，如果键名不存在，该方法不会做任何事情。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="storage-clear" tabindex="-1"><a class="header-anchor" href="#storage-clear" aria-hidden="true">#</a> Storage.clear()</h3><p><code>Storage.clear()</code>方法用于清除所有保存的数据。该方法的返回值是<code>undefined</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="storage-key" tabindex="-1"><a class="header-anchor" href="#storage-key" aria-hidden="true">#</a> Storage.key()</h3><p><code>Storage.key()</code>方法接受一个整数作为参数（从零开始），返回该位置对应的键名。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// &quot;key&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结合使用<code>Storage.length</code>属性和<code>Storage.key()</code>方法，可以遍历所有的键。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="storage-事件" tabindex="-1"><a class="header-anchor" href="#storage-事件" aria-hidden="true">#</a> storage 事件</h2><p>Storage 接口储存的数据发生变化时，会触发 storage 事件，可以指定这个事件的监听函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;storage&#39;</span><span class="token punctuation">,</span> onStorageChange<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监听函数接受一个<code>event</code>实例对象作为参数。这个实例对象继承了 StorageEvent 接口，有几个特有的属性，都是只读属性。</p><ul><li><code>StorageEvent.key</code>：字符串，表示发生变动的键名。如果 storage 事件是由<code>clear()</code>方法引起，该属性返回<code>null</code>。</li><li><code>StorageEvent.newValue</code>：字符串，表示新的键值。如果 storage 事件是由<code>clear()</code>方法或删除该键值对引发的，该属性返回<code>null</code>。</li><li><code>StorageEvent.oldValue</code>：字符串，表示旧的键值。如果该键值对是新增的，该属性返回<code>null</code>。</li><li><code>StorageEvent.storageArea</code>：对象，返回键值对所在的整个对象。也说是说，可以从这个属性上面拿到当前域名储存的所有键值对。</li><li><code>StorageEvent.url</code>：字符串，表示原始触发 storage 事件的那个网页的网址。</li></ul><p>下面是<code>StorageEvent.key</code>属性的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onStorageChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;storage&#39;</span><span class="token punctuation">,</span> onStorageChange<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，该事件有一个很特别的地方，就是它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发。也就是说，如果浏览器只打开一个窗口，可能观察不到这个事件。比如同时打开多个窗口，当其中的一个窗口导致储存的数据发生改变时，只有在其他窗口才能观察到监听函数的执行。可以通过这种机制，实现多个窗口之间的通信。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,43),u={href:"http://www.adobe.com/devnet/html5/articles/html5-storage-apis.html",target:"_blank",rel:"noopener noreferrer"},d={href:"http://codular.com/localstorage",target:"_blank",rel:"noopener noreferrer"},k={href:"http://feross.org/fill-disk/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://bens.me.uk/2013/localstorage-inter-window-messaging",target:"_blank",rel:"noopener noreferrer"},v={href:"http://stackoverflow.com/questions/18265556/why-does-internet-explorer-fire-the-window-storage-event-on-the-window-that-st",target:"_blank",rel:"noopener noreferrer"},m={href:"https://stackoverflow.com/questions/5370784/localstorage-eventlistener-is-not-called",target:"_blank",rel:"noopener noreferrer"};function h(b,w){const s=i("ExternalLinkIcon");return o(),p("div",null,[r,n("ul",null,[n("li",null,[a("Ryan Stewart，"),n("a",u,[a("Introducing the HTML5 storage APIs"),e(s)])]),n("li",null,[n("a",d,[a("Getting Started with LocalStorage"),e(s)])]),n("li",null,[a("Feross Aboukhadijeh, "),n("a",k,[a("Introducing the HTML5 Hard Disk Filler™ API"),e(s)])]),n("li",null,[a("Ben Summers, "),n("a",g,[a("Inter-window messaging using localStorage"),e(s)])]),n("li",null,[a("Stack Overflow, "),n("a",v,[a("Why does Internet Explorer fire the window “storage” event on the window that stored the data?"),e(s)])]),n("li",null,[a("Stack Overflow, "),n("a",m,[a("localStorage eventListener is not called"),e(s)])])])])}const S=t(l,[["render",h],["__file","storage.html.vue"]]);export{S as default};
