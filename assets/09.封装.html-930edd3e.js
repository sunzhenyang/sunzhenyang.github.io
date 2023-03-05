import{_ as n,Q as s,S as a,$ as t,a3 as e}from"./framework-3ab2aaf6.js";const p={},o=e(`<blockquote><p>将类的某些信息隐藏在类内部，不允许外部程序直接访问</p></blockquote><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><ul><li>隐藏对象的信息，留出访问的接口，只能通过规定的方法访问和操作数据</li><li>隐藏类的实例细节，方便修改和实现</li></ul><h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h2><ul><li><code>private</code>：私有的，只允许在本类中进行访问</li><li><code>默认</code>：允许在当前类、同包子类/同包非子类访问，跨包子类/跨包非子类不允许访问</li><li><code>protected</code>：受保护的， 允许在本类、同包子类/同包非子类、跨包子类进行访问，跨包非子类不允许</li><li><code>public</code>：共有的，允许在任意位置访问</li></ul><table><thead><tr><th>访问修饰符</th><th style="text-align:center;">本类</th><th style="text-align:center;">同包</th><th style="text-align:center;">子类</th><th style="text-align:center;">其他</th></tr></thead><tbody><tr><td><code>private</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td><code>默认</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td><code>protected</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td><code>public</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr></tbody></table><h2 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h2><ol><li><p>修改属性的可见性（访问修饰符）</p></li><li><p>创建 <code>getter/setter</code> 方法（设为 public 用于属性的读写）</p></li><li><p>在 <code>getter/setter</code> 方法中加入属性控制语句（对属性值的合法性进行判断）</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Book.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
    <span class="token comment">//私有属性：书名、作者、出版社、价格</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bookName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> publisher<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> price<span class="token punctuation">;</span>

    <span class="token comment">//通过构造方法实现属性赋值</span>
    <span class="token keyword">public</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token class-name">String</span> bookName<span class="token punctuation">,</span> <span class="token class-name">String</span> author<span class="token punctuation">,</span> <span class="token class-name">String</span> publisher<span class="token punctuation">,</span> <span class="token keyword">float</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bookName <span class="token operator">=</span> bookName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>author <span class="token operator">=</span> author<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setPublisher</span><span class="token punctuation">(</span>publisher<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 通过公有的get/set方法实现属性的访问，其中：
     * 1、限定图书价格必须大于10，如果无效需进行提示，并强制赋值为10
     * 2、限定作者、书名均为只读属性
     */</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBookName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bookName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> author<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPublisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> publisher<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPublisher</span><span class="token punctuation">(</span><span class="token class-name">String</span> publisher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>publisher <span class="token operator">=</span> publisher<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">float</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>price <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            price <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;图书价格最低10元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//信息介绍方法，描述图书所有信息</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;书名：&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBookName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;坐着：&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出版社：&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPublisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;价格：&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// BookTest.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookTest</span> <span class="token punctuation">{</span>
    <span class="token comment">// 测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//实例化对象，调用相关方法实现运行效果</span>
        <span class="token class-name">Book</span> book1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;红楼梦&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;曹雪芹&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;人民文学出版社&quot;</span><span class="token punctuation">,</span><span class="token number">10.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> book2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;小李飞刀&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;古龙&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;人民长安出版社&quot;</span><span class="token punctuation">,</span><span class="token number">55.5f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book1<span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book2<span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function c(l,i){return s(),a("div",null,[t(" more "),o])}const k=n(p,[["render",c],["__file","09.封装.html.vue"]]);export{k as default};
