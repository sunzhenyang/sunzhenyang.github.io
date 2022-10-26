import{_ as t,o as p,c as o,a as n,b as i,e as s,d as a,r as l}from"./app.41291239.js";const c={},u=s(`<h2 id="file-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#file-\u5BF9\u8C61" aria-hidden="true">#</a> File \u5BF9\u8C61</h2><p>File \u5BF9\u8C61\u4EE3\u8868\u4E00\u4E2A\u6587\u4EF6\uFF0C\u7528\u6765\u8BFB\u5199\u6587\u4EF6\u4FE1\u606F\u3002\u5B83\u7EE7\u627F\u4E86 Blob \u5BF9\u8C61\uFF0C\u6216\u8005\u8BF4\u662F\u4E00\u79CD\u7279\u6B8A\u7684 Blob \u5BF9\u8C61\uFF0C\u6240\u6709\u53EF\u4EE5\u4F7F\u7528 Blob \u5BF9\u8C61\u7684\u573A\u5408\u90FD\u53EF\u4EE5\u4F7F\u7528\u5B83\u3002</p><p>\u6700\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u5408\u662F\u8868\u5355\u7684\u6587\u4EF6\u4E0A\u4F20\u63A7\u4EF6\uFF08<code>&lt;input type=&quot;file&quot;&gt;</code>\uFF09\uFF0C\u7528\u6237\u9009\u4E2D\u6587\u4EF6\u4EE5\u540E\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u751F\u6210\u4E00\u4E2A\u6570\u7EC4\uFF0C\u91CC\u9762\u662F\u6BCF\u4E00\u4E2A\u7528\u6237\u9009\u4E2D\u7684\u6587\u4EF6\uFF0C\u5B83\u4EEC\u90FD\u662F File \u5B9E\u4F8B\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;input id=&quot;fileItem&quot; type=&quot;file&quot;&gt;</span>
<span class="token keyword">var</span> file <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;fileItem&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
file <span class="token keyword">instanceof</span> <span class="token class-name">File</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>file</code>\u662F\u7528\u6237\u9009\u4E2D\u7684\u7B2C\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5B83\u662F File \u7684\u5B9E\u4F8B\u3002</p><h3 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h3><p>\u6D4F\u89C8\u5668\u539F\u751F\u63D0\u4F9B\u4E00\u4E2A<code>File()</code>\u6784\u9020\u51FD\u6570\uFF0C\u7528\u6765\u751F\u6210 File \u5B9E\u4F8B\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> name <span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>File()</code>\u6784\u9020\u51FD\u6570\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\u3002</p><ul><li>array\uFF1A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u53EF\u4EE5\u662F\u4E8C\u8FDB\u5236\u5BF9\u8C61\u6216\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u6587\u4EF6\u7684\u5185\u5BB9\u3002</li><li>name\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u6587\u4EF6\u540D\u6216\u6587\u4EF6\u8DEF\u5F84\u3002</li><li>options\uFF1A\u914D\u7F6E\u5BF9\u8C61\uFF0C\u8BBE\u7F6E\u5B9E\u4F8B\u7684\u5C5E\u6027\u3002\u8BE5\u53C2\u6570\u53EF\u9009\u3002</li></ul><p>\u7B2C\u4E09\u4E2A\u53C2\u6570\u914D\u7F6E\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E24\u4E2A\u5C5E\u6027\u3002</p><ul><li>type\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u5B9E\u4F8B\u5BF9\u8C61\u7684 MIME \u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002</li><li>lastModified\uFF1A\u65F6\u95F4\u6233\uFF0C\u8868\u793A\u4E0A\u6B21\u4FEE\u6539\u7684\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A<code>Date.now()</code>\u3002</li></ul><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&#39;foo.txt&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u4F8B\u5C5E\u6027\u548C\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5C5E\u6027\u548C\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u5C5E\u6027\u548C\u5B9E\u4F8B\u65B9\u6CD5</h3><p>File \u5BF9\u8C61\u6709\u4EE5\u4E0B\u5B9E\u4F8B\u5C5E\u6027\u3002</p>`,16),d=n("li",null,"File.lastModified\uFF1A\u6700\u540E\u4FEE\u6539\u65F6\u95F4",-1),r={href:"http://File.name",target:"_blank",rel:"noopener noreferrer"},k=a("File.name"),v=a("\uFF1A\u6587\u4EF6\u540D\u6216\u6587\u4EF6\u8DEF\u5F84"),m=n("li",null,"File.size\uFF1A\u6587\u4EF6\u5927\u5C0F\uFF08\u5355\u4F4D\u5B57\u8282\uFF09",-1),b=n("li",null,"File.type\uFF1A\u6587\u4EF6\u7684 MIME \u7C7B\u578B",-1),f=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;file.bin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lastModified</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myFile<span class="token punctuation">.</span>lastModified <span class="token comment">// 1517414400000</span>
myFile<span class="token punctuation">.</span>name <span class="token comment">// &quot;file.bin&quot;</span>
myFile<span class="token punctuation">.</span>size <span class="token comment">// 0</span>
myFile<span class="token punctuation">.</span>type <span class="token comment">// &quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E<code>myFile</code>\u7684\u5185\u5BB9\u4E3A\u7A7A\uFF0C\u4E5F\u6CA1\u6709\u8BBE\u7F6E MIME \u7C7B\u578B\uFF0C\u6240\u4EE5<code>size</code>\u5C5E\u6027\u7B49\u4E8E0\uFF0C<code>type</code>\u5C5E\u6027\u7B49\u4E8E\u7A7A\u5B57\u7B26\u4E32\u3002</p><p>File \u5BF9\u8C61\u6CA1\u6709\u81EA\u5DF1\u7684\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u7531\u4E8E\u7EE7\u627F\u4E86 Blob \u5BF9\u8C61\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528 Blob \u7684\u5B9E\u4F8B\u65B9\u6CD5<code>slice()</code>\u3002</p><h2 id="filelist-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#filelist-\u5BF9\u8C61" aria-hidden="true">#</a> FileList \u5BF9\u8C61</h2><p><code>FileList</code>\u5BF9\u8C61\u662F\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u4EE3\u8868\u4E00\u7EC4\u9009\u4E2D\u7684\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6210\u5458\u90FD\u662F\u4E00\u4E2A File \u5B9E\u4F8B\u3002\u5B83\u4E3B\u8981\u51FA\u73B0\u5728\u4E24\u4E2A\u573A\u5408\u3002</p><ul><li>\u6587\u4EF6\u63A7\u4EF6\u8282\u70B9\uFF08<code>&lt;input type=&quot;file&quot;&gt;</code>\uFF09\u7684<code>files</code>\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A FileList \u5B9E\u4F8B\u3002</li><li>\u62D6\u62C9\u4E00\u7EC4\u6587\u4EF6\u65F6\uFF0C\u76EE\u6807\u533A\u7684<code>DataTransfer.files</code>\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A FileList \u5B9E\u4F8B\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;input id=&quot;fileItem&quot; type=&quot;file&quot;&gt;</span>
<span class="token keyword">var</span> files <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;fileItem&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">;</span>
files <span class="token keyword">instanceof</span> <span class="token class-name">FileList</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6587\u4EF6\u63A7\u4EF6\u7684<code>files</code>\u5C5E\u6027\u662F\u4E00\u4E2A FileList \u5B9E\u4F8B\u3002</p><p>FileList \u7684\u5B9E\u4F8B\u5C5E\u6027\u4E3B\u8981\u662F<code>length</code>\uFF0C\u8868\u793A\u5305\u542B\u591A\u5C11\u4E2A\u6587\u4EF6\u3002</p><p>FileList \u7684\u5B9E\u4F8B\u65B9\u6CD5\u4E3B\u8981\u662F<code>item()</code>\uFF0C\u7528\u6765\u8FD4\u56DE\u6307\u5B9A\u4F4D\u7F6E\u7684\u5B9E\u4F8B\u3002\u5B83\u63A5\u53D7\u4E00\u4E2A\u6574\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8868\u793A\u4F4D\u7F6E\u7684\u5E8F\u53F7\uFF08\u4ECE\u96F6\u5F00\u59CB\uFF09\u3002\u4F46\u662F\uFF0C\u7531\u4E8E FileList \u7684\u5B9E\u4F8B\u662F\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u65B9\u62EC\u53F7\u8FD0\u7B97\u7B26\uFF0C\u5373<code>myFileList[0]</code>\u7B49\u540C\u4E8E<code>myFileList.item(0)</code>\uFF0C\u6240\u4EE5\u4E00\u822C\u7528\u4E0D\u5230<code>item()</code>\u65B9\u6CD5\u3002</p><h2 id="filereader-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#filereader-\u5BF9\u8C61" aria-hidden="true">#</a> FileReader \u5BF9\u8C61</h2><p>FileReader \u5BF9\u8C61\u7528\u4E8E\u8BFB\u53D6 File \u5BF9\u8C61\u6216 Blob \u5BF9\u8C61\u6240\u5305\u542B\u7684\u6587\u4EF6\u5185\u5BB9\u3002</p><p>\u6D4F\u89C8\u5668\u539F\u751F\u63D0\u4F9B\u4E00\u4E2A<code>FileReader</code>\u6784\u9020\u51FD\u6570\uFF0C\u7528\u6765\u751F\u6210 FileReader \u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>FileReader \u6709\u4EE5\u4E0B\u7684\u5B9E\u4F8B\u5C5E\u6027\u3002</p><ul><li>FileReader.error\uFF1A\u8BFB\u53D6\u6587\u4EF6\u65F6\u4EA7\u751F\u7684\u9519\u8BEF\u5BF9\u8C61</li><li>FileReader.readyState\uFF1A\u6574\u6570\uFF0C\u8868\u793A\u8BFB\u53D6\u6587\u4EF6\u65F6\u7684\u5F53\u524D\u72B6\u6001\u3002\u4E00\u5171\u6709\u4E09\u79CD\u53EF\u80FD\u7684\u72B6\u6001\uFF0C<code>0</code>\u8868\u793A\u5C1A\u672A\u52A0\u8F7D\u4EFB\u4F55\u6570\u636E\uFF0C<code>1</code>\u8868\u793A\u6570\u636E\u6B63\u5728\u52A0\u8F7D\uFF0C<code>2</code>\u8868\u793A\u52A0\u8F7D\u5B8C\u6210\u3002</li><li>FileReader.result\uFF1A\u8BFB\u53D6\u5B8C\u6210\u540E\u7684\u6587\u4EF6\u5185\u5BB9\uFF0C\u6709\u53EF\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u80FD\u662F\u4E00\u4E2A ArrayBuffer \u5B9E\u4F8B\u3002</li><li>FileReader.onabort\uFF1A<code>abort</code>\u4E8B\u4EF6\uFF08\u7528\u6237\u7EC8\u6B62\u8BFB\u53D6\u64CD\u4F5C\uFF09\u7684\u76D1\u542C\u51FD\u6570\u3002</li><li>FileReader.onerror\uFF1A<code>error</code>\u4E8B\u4EF6\uFF08\u8BFB\u53D6\u9519\u8BEF\uFF09\u7684\u76D1\u542C\u51FD\u6570\u3002</li><li>FileReader.onload\uFF1A<code>load</code>\u4E8B\u4EF6\uFF08\u8BFB\u53D6\u64CD\u4F5C\u5B8C\u6210\uFF09\u7684\u76D1\u542C\u51FD\u6570\uFF0C\u901A\u5E38\u5728\u8FD9\u4E2A\u51FD\u6570\u91CC\u9762\u4F7F\u7528<code>result</code>\u5C5E\u6027\uFF0C\u62FF\u5230\u6587\u4EF6\u5185\u5BB9\u3002</li><li>FileReader.onloadstart\uFF1A<code>loadstart</code>\u4E8B\u4EF6\uFF08\u8BFB\u53D6\u64CD\u4F5C\u5F00\u59CB\uFF09\u7684\u76D1\u542C\u51FD\u6570\u3002</li><li>FileReader.onloadend\uFF1A<code>loadend</code>\u4E8B\u4EF6\uFF08\u8BFB\u53D6\u64CD\u4F5C\u7ED3\u675F\uFF09\u7684\u76D1\u542C\u51FD\u6570\u3002</li><li>FileReader.onprogress\uFF1A<code>progress</code>\u4E8B\u4EF6\uFF08\u8BFB\u53D6\u64CD\u4F5C\u8FDB\u884C\u4E2D\uFF09\u7684\u76D1\u542C\u51FD\u6570\u3002</li></ul><p>\u4E0B\u9762\u662F\u76D1\u542C<code>load</code>\u4E8B\u4EF6\u7684\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;input type=&quot;file&quot; onchange=&quot;onChange(event)&quot;&gt;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> file <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  reader<span class="token punctuation">.</span><span class="token function">readAsText</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6BCF\u5F53\u6587\u4EF6\u63A7\u4EF6\u53D1\u751F\u53D8\u5316\uFF0C\u5C31\u5C1D\u8BD5\u8BFB\u53D6\u7B2C\u4E00\u4E2A\u6587\u4EF6\u3002\u5982\u679C\u8BFB\u53D6\u6210\u529F\uFF08<code>load</code>\u4E8B\u4EF6\u53D1\u751F\uFF09\uFF0C\u5C31\u6253\u5370\u51FA\u6587\u4EF6\u5185\u5BB9\u3002</p><p>FileReader \u6709\u4EE5\u4E0B\u5B9E\u4F8B\u65B9\u6CD5\u3002</p><ul><li>FileReader.abort()\uFF1A\u7EC8\u6B62\u8BFB\u53D6\u64CD\u4F5C\uFF0C<code>readyState</code>\u5C5E\u6027\u5C06\u53D8\u6210<code>2</code>\u3002</li><li>FileReader.readAsArrayBuffer()\uFF1A\u4EE5 ArrayBuffer \u7684\u683C\u5F0F\u8BFB\u53D6\u6587\u4EF6\uFF0C\u8BFB\u53D6\u5B8C\u6210\u540E<code>result</code>\u5C5E\u6027\u5C06\u8FD4\u56DE\u4E00\u4E2A ArrayBuffer \u5B9E\u4F8B\u3002</li><li>FileReader.readAsBinaryString()\uFF1A\u8BFB\u53D6\u5B8C\u6210\u540E\uFF0C<code>result</code>\u5C5E\u6027\u5C06\u8FD4\u56DE\u539F\u59CB\u7684\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u3002</li><li>FileReader.readAsDataURL()\uFF1A\u8BFB\u53D6\u5B8C\u6210\u540E\uFF0C<code>result</code>\u5C5E\u6027\u5C06\u8FD4\u56DE\u4E00\u4E2A Data URL \u683C\u5F0F\uFF08Base64 \u7F16\u7801\uFF09\u7684\u5B57\u7B26\u4E32\uFF0C\u4EE3\u8868\u6587\u4EF6\u5185\u5BB9\u3002\u5BF9\u4E8E\u56FE\u7247\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u5B57\u7B26\u4E32\u53EF\u4EE5\u7528\u4E8E<code>&lt;img&gt;</code>\u5143\u7D20\u7684<code>src</code>\u5C5E\u6027\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u5B57\u7B26\u4E32\u4E0D\u80FD\u76F4\u63A5\u8FDB\u884C Base64 \u89E3\u7801\uFF0C\u5FC5\u987B\u628A\u524D\u7F00<code>data:*/*;base64,</code>\u4ECE\u5B57\u7B26\u4E32\u91CC\u5220\u9664\u4EE5\u540E\uFF0C\u518D\u8FDB\u884C\u89E3\u7801\u3002</li><li>FileReader.readAsText()\uFF1A\u8BFB\u53D6\u5B8C\u6210\u540E\uFF0C<code>result</code>\u5C5E\u6027\u5C06\u8FD4\u56DE\u6587\u4EF6\u5185\u5BB9\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002\u8BE5\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4EE3\u8868\u6587\u4EF6\u7684 Blob \u5B9E\u4F8B\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u53EF\u9009\u7684\uFF0C\u8868\u793A\u6587\u672C\u7F16\u7801\uFF0C\u9ED8\u8BA4\u4E3A UTF-8\u3002</li></ul><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* HTML \u4EE3\u7801\u5982\u4E0B
  &lt;input type=&quot;file&quot; onchange=&quot;previewFile()&quot;&gt;
  &lt;img src=&quot;&quot; height=&quot;200&quot;&gt;
*/</span>

<span class="token keyword">function</span> <span class="token function">previewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> preview <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> file    <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input[type=file]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> reader  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  reader<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    preview<span class="token punctuation">.</span>src <span class="token operator">=</span> reader<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7528\u6237\u9009\u4E2D\u56FE\u7247\u6587\u4EF6\u4EE5\u540E\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF0C\u7136\u540E\u4F5C\u4E3A\u4E00\u4E2A Data URL \u8D4B\u503C\u7ED9<code>&lt;img&gt;</code>\u5143\u7D20\u7684<code>src</code>\u5C5E\u6027\uFF0C\u4ECE\u800C\u628A\u56FE\u7247\u5C55\u793A\u51FA\u6765\u3002</p>`,24);function g(F,y){const e=l("ExternalLinkIcon");return p(),o("div",null,[u,n("ul",null,[d,n("li",null,[n("a",r,[k,i(e)]),v]),m,b]),f])}var w=t(c,[["render",g],["__file","file.html.vue"]]);export{w as default};
