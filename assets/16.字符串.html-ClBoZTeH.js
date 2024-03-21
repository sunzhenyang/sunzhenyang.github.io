import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,a,f as s}from"./app-BybQgHW9.js";const o={},c=s(`<ul><li><code>String</code>：具有不可变性 <ul><li>对象一旦被创建，则不能修改，是不可变的</li><li>所谓修改其实是创建了新的对象，所指向的内存空间不变</li></ul></li><li><code>StringBuilder</code>：可变，当频繁操作字符串时，建议使用</li><li><code>StringBuffer</code>：和 <code>StringBuilder</code> 基本一致，<code>StringBuffer</code> 是线程安全的，<code>StringBuilder</code> 则没有，所以 <code>StringBuilder</code> 性能略高</li></ul><h2 id="创建方法" tabindex="-1"><a class="header-anchor" href="#创建方法"><span>创建方法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;imooc&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;imooc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;i&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;o&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;o&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/sunzhenyang/blog-img/img/image-20210317222221814.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法"><span>常用方法</span></a></h2><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>int <code>length()</code></td><td>返回当前字符串的长度</td></tr><tr><td>int <code>indexOf(int ch)</code></td><td>查找 ch 字符在该字符串中第一次出现的位置</td></tr><tr><td>int <code>indexOf(String str)</code></td><td>查找 str 子字符串在该字符串中第一次出现的位置</td></tr><tr><td>int <code>lastIndexOf(int ch)</code></td><td>查找 ch 字符在该字符串中最后一次出现的位置</td></tr><tr><td>int <code>lastIndexOf(String str)</code></td><td>查找 str 子字符串在该字符串中最后一次出现的位置</td></tr><tr><td>String <code>substring(int beginIndex)</code></td><td>获取从 beginIndex 位置开始到结束的子字符串</td></tr><tr><td>String <code>substring(int beginIndex, int endIndex)</code></td><td>获取从 beginIndex 位置开始到 endIndex 位置的子字符串（不包括 endIndex 位置字符串）</td></tr><tr><td>String <code>trim()</code></td><td>返回去除了前后空格的字符串</td></tr><tr><td>boolean <code>equals(Object obj)</code></td><td>将该字符串与指定对象比较，返回 true 或 false</td></tr><tr><td>String <code>toLowerCase()</code></td><td>将字符串转换为小写</td></tr><tr><td>String <code>toUpperCase()</code></td><td>将字符串转换为大写</td></tr><tr><td>char <code>charAt(int index)</code></td><td>获取字符串中指定位置的字符</td></tr><tr><td>String[] <code>split(String regex, int limit)</code></td><td>将字符串分割为子字符串，返回字符串数组</td></tr><tr><td>byte[] <code>getBytes()</code></td><td>将该字符串转换为 byte 数组</td></tr></tbody></table><h2 id="equals-和-的区别" tabindex="-1"><a class="header-anchor" href="#equals-和-的区别"><span><code>equals</code> 和 <code>==</code> 的区别</span></a></h2><ul><li><code>equals</code> 是判断两个变量或者实例指向同一个内存空间的值是不是相同 <ul><li>常用于 <code>String</code> 类型数据比较</li><li>两个对象是否在意义上相等</li></ul></li><li><code>==</code><ul><li>对于基本数据类型而言，<code>==</code> 比较的是变量里存储的值</li><li>对于引用数据类型而言，<code>==</code> 比较的是对象的内存地址（<code>String</code> 为引用类型）</li></ul></li></ul>`,8);function i(r,d){return n(),e("div",null,[a(" more "),c])}const u=t(o,[["render",i],["__file","16.字符串.html.vue"]]),g=JSON.parse(`{"path":"/notes/java/Java%E8%BF%9B%E9%98%B6/16.%E5%AD%97%E7%AC%A6%E4%B8%B2.html","title":"字符串","lang":"zh-CN","frontmatter":{"title":"字符串","icon":"java","article":true,"breadcrumb":false,"date":"2023-02-24T00:00:00.000Z","category":["Java"],"tag":["Java基础"],"description":"String：具有不可变性 对象一旦被创建，则不能修改，是不可变的 所谓修改其实是创建了新的对象，所指向的内存空间不变 StringBuilder：可变，当频繁操作字符串时，建议使用 StringBuffer：和 StringBuilder 基本一致，StringBuffer 是线程安全的，StringBuilder 则没有，所以 StringBuil...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/notes/java/Java%E8%BF%9B%E9%98%B6/16.%E5%AD%97%E7%AC%A6%E4%B8%B2.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"字符串"}],["meta",{"property":"og:description","content":"String：具有不可变性 对象一旦被创建，则不能修改，是不可变的 所谓修改其实是创建了新的对象，所指向的内存空间不变 StringBuilder：可变，当频繁操作字符串时，建议使用 StringBuffer：和 StringBuilder 基本一致，StringBuffer 是线程安全的，StringBuilder 则没有，所以 StringBuil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/sunzhenyang/blog-img/img/image-20210317222221814.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T07:30:25.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:published_time","content":"2023-02-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-10T07:30:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/sunzhenyang/blog-img/img/image-20210317222221814.png\\"],\\"datePublished\\":\\"2023-02-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-10T07:30:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Yang\\",\\"url\\":\\"https://codemake.fun/\\",\\"email\\":\\"874530670@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"创建方法","slug":"创建方法","link":"#创建方法","children":[]},{"level":2,"title":"常用方法","slug":"常用方法","link":"#常用方法","children":[]},{"level":2,"title":"equals 和 == 的区别","slug":"equals-和-的区别","link":"#equals-和-的区别","children":[]}],"git":{"createdTime":1680324050000,"updatedTime":1681111825000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":3}]},"readingTime":{"minutes":1.78,"words":535},"filePathRelative":"notes/java/Java进阶/16.字符串.md","localizedDate":"2023年2月24日","excerpt":"","autoDesc":true}`);export{u as comp,g as data};
