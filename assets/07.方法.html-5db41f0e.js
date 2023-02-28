import{_ as e,Q as p,S as o,$ as c,a0 as n,a1 as s,a2 as l,a3 as a,C as i}from"./framework-3ab2aaf6.js";const u={},k=a(`<blockquote><p>方法是用来解决一类问题的代码的有序组合，是一个功能模块</p></blockquote><ul><li><p>语法格式：<strong><code>访问修饰符 返回类型 方法名(参数列表){ 方法体 }</code></strong></p></li><li><p><code>main</code>：特殊的方法，程序执行的入口</p></li></ul><h2 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符" aria-hidden="true">#</a> 访问修饰符</h2><blockquote><p>方法允许被访问的权限范围，分类如下，详细描述在 <code>面向对象 - 封装</code> 笔记文件里</p></blockquote><ul><li>不写修饰符</li><li><code>public</code>：公开的</li><li><code>protected</code>：受保护的</li><li><code>private</code>：私有的</li></ul><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><blockquote><p>根据方法是否带参数、是否返回值，分为四类</p></blockquote><h3 id="无参无返回" tabindex="-1"><a class="header-anchor" href="#无参无返回" aria-hidden="true">#</a> 无参无返回</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 打印星号分隔符</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestDemo</span> testDemo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        testDemo<span class="token punctuation">.</span><span class="token function">printStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无参带返回" tabindex="-1"><a class="header-anchor" href="#无参带返回" aria-hidden="true">#</a> 无参带返回</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 获取当前时间</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestDemo</span> testDemo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>testDemo<span class="token punctuation">.</span><span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 年-月-日 时-分-秒</span>
        <span class="token class-name">String</span> dateStr <span class="token operator">=</span> sdf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateStr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带参无返回" tabindex="-1"><a class="header-anchor" href="#带参无返回" aria-hidden="true">#</a> 带参无返回</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 打印矩形面积</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestDemo</span> testDemo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        testDemo<span class="token punctuation">.</span><span class="token function">printArea</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printArea</span><span class="token punctuation">(</span><span class="token keyword">float</span> x<span class="token punctuation">,</span> <span class="token keyword">float</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;矩形的面积为：&quot;</span> <span class="token operator">+</span> x <span class="token operator">*</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带参带返回" tabindex="-1"><a class="header-anchor" href="#带参带返回" aria-hidden="true">#</a> 带参带返回</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 获取矩形面积</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestDemo</span> testDemo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">float</span> area <span class="token operator">=</span> testDemo<span class="token punctuation">.</span><span class="token function">getRectArea</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;矩形的面积为：&quot;</span> <span class="token operator">+</span> area<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getRectArea</span><span class="token punctuation">(</span><span class="token keyword">float</span> x<span class="token punctuation">,</span> <span class="token keyword">float</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><h3 id="传参类型" tabindex="-1"><a class="header-anchor" href="#传参类型" aria-hidden="true">#</a> 传参类型</h3>`,17),d=n("li",null,"当参数是基本数据类型时，方法不能修改实际参数的值",-1),r=n("code",null,"java",-1),m=n("code",null,"基本类型",-1),v=n("code",null,"引用类型",-1),b=n("strong",null,"方法中对某个传递过来的参数进行赋值操作的时候，均不会影响原来的值",-1),h={href:"https://zhuanlan.zhihu.com/p/388486387",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,[s("对于引用类型，直接在方法中修改了它的具体属性，外部会发生改变的原因是在 "),n("code",null,"java"),s(" 中引用类型的值是地址，在方法调用过程中，传递的是一份地址的拷贝，但是原引用和拷贝的引用依旧指向的是堆中的同一份值，因此，这份值做了改变，原来的对象本身就发生了变化")],-1),w=a(`<h3 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数" aria-hidden="true">#</a> 可变参数</h3><blockquote><p>允许在调用方法时传入不定长度的参数</p><p>实际上是 Java 的一个语法糖，本质上还是基于数组的实现</p></blockquote><ul><li>多个参数时，可变参数要放在参数列表的最后（一个方法中只能有一个可变参数）</li><li>当可变参数作为方法参数，方法调用时可以传入0个或多个参数，传入数组也可以。数组作为方法参数，方法调用时只能传入数组</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 求不定数量整数的和</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">TestDemo</span> testDemo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    testDemo<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    testDemo<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    testDemo<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重载" tabindex="-1"><a class="header-anchor" href="#重载" aria-hidden="true">#</a> 重载</h2><blockquote><p>方法名相同，参数列表不同的方法</p></blockquote><ul><li>同一个作用域下，并且函数名称相同</li><li>函数参数 <strong>类型不同</strong> 或者 <strong>个数不同</strong> 或者 <strong>顺序不同</strong>，与方法参数名无关</li><li>可变参数作为参数的重载方法不会被优先调用</li></ul><h2 id="重写" tabindex="-1"><a class="header-anchor" href="#重写" aria-hidden="true">#</a> 重写</h2><ul><li>在子类中定义，重写父类中的方法</li><li>方法名，参数列表（类型、个数、顺序）与父类完全一致，与方法参数名无关</li><li>方法的返回值和访问修饰符是允许有变化的 <ul><li>如果父类方法的返回值是 <code>void</code> 或 基本数据类型，则要求子类方法重写时返回类型与父类完全一致</li><li>如果父类方法的返回值是引用类型，则要求子类方法重写时返回类型与父类一致或为父类类型的子类</li><li>访问修饰符：子类重写方法的访问修饰符访问范围要大于等与父类的访问范围</li></ul></li><li><code>final</code> 修饰的方法不允许被重写</li><li><code>static</code> 修饰的方法 <ul><li>加了 <code>@Override</code> 后不允许被重写，不加则被视为子类的静态方法</li></ul></li></ul>`,9);function f(g,_){const t=i("ExternalLinkIcon");return p(),o("div",null,[c(" more "),k,n("ul",null,[d,n("li",null,[s("当参数是引用类型时，方法通过地址引用改变了实际参数对象的内容 "),n("ul",null,[n("li",null,[r,s(" 中只存在值传递，对于 "),m,s("、"),v,s(" 均是如此，因此"),b,s(),n("a",h,[s("【参考文章】"),l(t)])]),y])])]),w])}const x=e(u,[["render",f],["__file","07.方法.html.vue"]]);export{x as default};
