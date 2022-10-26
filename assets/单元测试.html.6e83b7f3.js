import{_ as n,o as s,c as a,e as t}from"./app.41291239.js";const p={},e=t(`<h2 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h2><blockquote><p>\u662F\u6307\u5BF9\u8F6F\u4EF6\u4E2D\u7684\u6700\u5C0F\u53EF\u6D4B\u8BD5\u5355\u5143\u8FDB\u884C\u68C0\u67E5\u548C\u9A8C\u8BC1</p></blockquote><h2 id="\u6D4B\u8BD5\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7528\u4F8B" aria-hidden="true">#</a> \u6D4B\u8BD5\u7528\u4F8B</h2><blockquote><p>\u662F\u6307\u7F16\u5199\u4E00\u6BB5\u4EE3\u7801\u5BF9\u5DF2\u6709\u529F\u80FD\uFF08\u65B9\u6CD5\uFF09\u8FDB\u884C\u6821\u9A8C</p></blockquote><h2 id="junit" tabindex="-1"><a class="header-anchor" href="#junit" aria-hidden="true">#</a> JUnit</h2><blockquote><p>\u662F Java \u4E2D\u6700\u8457\u540D\u7684\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u4E3B\u6D41 IDE \u5185\u7F6E\u652F\u6301</p></blockquote><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h3><ul><li>\u5F15\u5165 <code>JUnit Jar</code> \u5305\u6216\u589E\u52A0 <code>Maven</code> \u4F9D\u8D56</li><li>\u7F16\u5199\u6D4B\u8BD5\u7528\u4F8B\u9A8C\u8BC1\u76EE\u6807\u65B9\u6CD5\u662F\u5426\u6B63\u786E\u8FD0\u884C</li><li>\u5728\u6D4B\u8BD5\u7528\u4F8B\u4E0A\u589E\u52A0 <code>@Test</code> \u6CE8\u89E3\u5F00\u59CB\u5355\u5143\u6D4B\u8BD5</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u793A\u4F8B</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>imooc<span class="token punctuation">.</span>junit</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u52A0\u6CD5\u8FD0\u7B97</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u51CF\u6CD5\u8FD0\u7B97</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u4E58\u6CD5\u8FD0\u7B97</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u9664\u6CD5\u8FD0\u7B97</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArithmeticException</span><span class="token punctuation">(</span><span class="token string">&quot;\u9664\u6570\u4E0D\u80FD\u4E3A0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">*</span> <span class="token number">1f</span><span class="token punctuation">)</span> <span class="token operator">/</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6D4B\u8BD5\u7528\u4F8B</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>imooc<span class="token punctuation">.</span>junit</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Calculator</span> cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.\u4E0E\u539F\u65B9\u6CD5\u4FDD\u6301\u4E00\u81F4</span>
    <span class="token comment">//2. \u5728\u539F\u65B9\u6CD5\u524D\u589E\u52A0test\u524D\u7F00</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> cal<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSubtract</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> cal<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMultiply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> cal<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDivide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">float</span> result <span class="token operator">=</span> cal<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDivide1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">float</span> result <span class="token operator">=</span> cal<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[e];function o(l,i){return s(),a("div",null,c)}var k=n(p,[["render",o],["__file","\u5355\u5143\u6D4B\u8BD5.html.vue"]]);export{k as default};
