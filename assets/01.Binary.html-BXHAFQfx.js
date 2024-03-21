import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as p,a as r,b as n,d as a,e as l,f as s}from"./app-BybQgHW9.js";const i={},u=s(`<h2 id="arraybuffer" tabindex="-1"><a class="header-anchor" href="#arraybuffer"><span>ArrayBuffer</span></a></h2><blockquote><p>基本的二进制对象，<strong>对固定长度的连续内存空间的引用</strong>，与其他语言相比，JavaScript 中的二进制数据是以非标准方式实现的</p></blockquote><ul><li>它会分配一个固定字节数的连续内存空间，并用 0 进行预填充</li><li>注意：<code>ArrayBuffer</code> <strong>不是某种东西的数组</strong><ul><li>长度是固定的，无法增加或减少它的长度</li><li>正好占用了内存中的那么多空间</li><li>要访问单个字节，需要另一个“视图”对象，而不是 <code>buffer[index]</code></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// 创建一个长度为 16 的 buffer</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buffer<span class="token punctuation">.</span>byteLength<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="视图对象" tabindex="-1"><a class="header-anchor" href="#视图对象"><span>视图对象</span></a></h2>`,5),d=n("p",null,[a("视图对象本身并不存储任何东西，用于解释存储在 "),n("code",null,"ArrayBuffer"),a(" 中的字节")],-1),m={href:"https://zh.javascript.info/arraybuffer-binary-arrays",target:"_blank",rel:"noopener noreferrer"},k=s(`<ul><li><code>Uint8Array</code>：将 <code>ArrayBuffer</code> 中的每个字节视为 0 到 255 之间的单个数字（每个字节是 8 位，因此只能容纳那么多）。这称为 “8 位无符号整数”</li><li><code>Uint16Array</code>：将每 2 个字节视为一个 0 到 65535 之间的整数。这称为 “16 位无符号整数”</li><li><code>Uint32Array</code>：将每 4 个字节视为一个 0 到 4294967295 之间的整数。这称为 “32 位无符号整数”</li><li><code>Float64Array</code>：将每 8 个字节视为一个 <code>5.0x10-324</code> 到 <code>1.8x10308</code> 之间的浮点数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个长度为 16 的 buffer</span>
<span class="token keyword">let</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint32Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 buffer 视为一个 32 位整数的序列</span>
<span class="token function">alert</span><span class="token punctuation">(</span>Uint32Array<span class="token punctuation">.</span><span class="token constant">BYTES_PER_ELEMENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每个整数 4 个字节</span>
<span class="token function">alert</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4，它存储了 4 个整数</span>
<span class="token function">alert</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span>byteLength<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16，字节中的大小</span>

<span class="token comment">// 写入一个值</span>
view<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">123456</span><span class="token punctuation">;</span> <span class="token comment">// 溢出时会在 0 ~ n 之间循环</span>

<span class="token comment">// 遍历值</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> view<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123456，然后 0，0，0（一共 4 个值）</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(v,y){const e=o("ExternalLinkIcon");return c(),p("div",null,[r(" more "),u,n("blockquote",null,[d,n("p",null,[n("a",m,[a("【相关文章】"),l(e)])])]),k])}const g=t(i,[["render",f],["__file","01.Binary.html.vue"]]),_=JSON.parse(`{"path":"/notes/javascript/other/01.Binary.html","title":"二进制数据、文件","lang":"zh-CN","frontmatter":{"title":"二进制数据、文件","icon":"article","article":false,"sticky":20,"breadcrumb":false,"description":"ArrayBuffer 基本的二进制对象，对固定长度的连续内存空间的引用，与其他语言相比，JavaScript 中的二进制数据是以非标准方式实现的 它会分配一个固定字节数的连续内存空间，并用 0 进行预填充 注意：ArrayBuffer 不是某种东西的数组 长度是固定的，无法增加或减少它的长度 正好占用了内存中的那么多空间 要访问单个字节，需要另一个“...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/notes/javascript/other/01.Binary.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"二进制数据、文件"}],["meta",{"property":"og:description","content":"ArrayBuffer 基本的二进制对象，对固定长度的连续内存空间的引用，与其他语言相比，JavaScript 中的二进制数据是以非标准方式实现的 它会分配一个固定字节数的连续内存空间，并用 0 进行预填充 注意：ArrayBuffer 不是某种东西的数组 长度是固定的，无法增加或减少它的长度 正好占用了内存中的那么多空间 要访问单个字节，需要另一个“..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"二进制数据、文件\\",\\"description\\":\\"ArrayBuffer 基本的二进制对象，对固定长度的连续内存空间的引用，与其他语言相比，JavaScript 中的二进制数据是以非标准方式实现的 它会分配一个固定字节数的连续内存空间，并用 0 进行预填充 注意：ArrayBuffer 不是某种东西的数组 长度是固定的，无法增加或减少它的长度 正好占用了内存中的那么多空间 要访问单个字节，需要另一个“...\\"}"]]},"headers":[{"level":2,"title":"ArrayBuffer","slug":"arraybuffer","link":"#arraybuffer","children":[]},{"level":2,"title":"视图对象","slug":"视图对象","link":"#视图对象","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":1.51,"words":452},"filePathRelative":"notes/javascript/other/01.Binary.md","localizedDate":"2023年1月11日","excerpt":"","autoDesc":true}`);export{g as comp,_ as data};
