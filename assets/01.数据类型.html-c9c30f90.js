import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as t,f as e}from"./app-d18dfe82.js";const l={},o=e(`<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><ul><li>分类 <ul><li>基本数据类型： <ul><li><code>Undefined</code>、</li><li><code>Null</code>、</li><li><code>Boolean</code>、</li><li><code>Number</code>、</li><li><code>BigInt</code></li><li><code>String</code>、</li><li><code>Symbol</code></li></ul></li><li>复杂数据类型： <ul><li><code>Object</code></li></ul></li></ul></li></ul><h3 id="undefined-类型" tabindex="-1"><a class="header-anchor" href="#undefined-类型" aria-hidden="true">#</a> Undefined 类型</h3><ul><li>Undefined 类型只有一个值，即 undefined</li><li>使用 <code>var</code> 声明变量但未初始化时，值为 undefined</li><li>对未声明的变量 <code>typeof</code> 时，也会返回 undefined</li><li>相等性检查 == 中，undefined 只与 null 相等</li></ul><h3 id="null-类型" tabindex="-1"><a class="header-anchor" href="#null-类型" aria-hidden="true">#</a> Null 类型</h3><ul><li>Null 类型只有一个值，即 null</li><li>从逻辑角度看，null 表示空对象指针</li><li>console.log(typeof null); // object</li><li>undefined 值派生自 null 值 <ul><li>console.log(null==undefined); // true</li></ul></li></ul><div style="color:#f00;">**undefined** 和 **null** 在相等性检查 \`==\` 中不会进行任何类型转换，除非你非常清楚自己在做什么，否则永远不要使用 <code>&gt;= &gt; &lt; &lt;=</code> 去比较一个可能为 \`null/undefined\` 的变量。对于取值可能是 \`null/undefined\` 的变量，请按需要分别检查它的取值情况</div><h3 id="boolean-类型" tabindex="-1"><a class="header-anchor" href="#boolean-类型" aria-hidden="true">#</a> Boolean 类型</h3><ul><li>该类型只有两个值： <code>true</code>、<code>false</code>，并且区分大小写</li><li>一个值要转化为 Boolean 值，可以调用 Boolean()</li></ul><h4 id="其他类型转化为布尔值的规则" tabindex="-1"><a class="header-anchor" href="#其他类型转化为布尔值的规则" aria-hidden="true">#</a> 其他类型转化为布尔值的规则</h4><table><thead><tr><th>数据类型</th><th>转化为 true 的值</th><th>转化为 false 的值</th></tr></thead><tbody><tr><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>String</td><td>任何非空字符串</td><td>空字符串</td></tr><tr><td>Number</td><td>任何非零数字值(包括无穷大)</td><td>0 和 NaN</td></tr><tr><td>Object</td><td>任何对象</td><td>null</td></tr><tr><td>Undefined</td><td>不存在</td><td>undefined</td></tr></tbody></table><h3 id="number-类型" tabindex="-1"><a class="header-anchor" href="#number-类型" aria-hidden="true">#</a> Number 类型</h3><ul><li>使用 IEEE754 格式来表示整数和浮点数值(双精度数值)</li><li>十进制</li><li>八进制 <ul><li>以 8 为基数</li><li>第一位必须是 0，后面为八进制数字序列（0~7）</li><li>如果字面值的数值超出范围，则前导 0 被忽略，后面的数被当做十进制数值</li><li>八进制字面量在严格模式下无效，会报错</li></ul></li><li>十六进制 <ul><li>以 16 为基数</li><li>前两位必须是 0x，后面为十六进制数字序列（0-9 及 A~F），不区分大小写</li></ul></li><li>在进行算数计算时，所有的八进制和十六进制表示的数值都将被换成十进制数值</li><li>NaN，即非数值，是一个特殊的数值 <ul><li>表示一个本来要返回数值的操作数未返回数值的情况（不会抛出错误）</li><li>任何数值除以 0 都会返回 NaN，不会影响其它代码执行</li><li>任何涉及 NaN 的操作（例如 NaN/10）都会返回 NaN</li><li>NaN 与任何值都不相等，包括其本身 <ul><li>console.log(NaN==Nan); // false</li></ul></li><li>isNaN() 接受一个任意类型参数，判断这个参数是否 “不是数值”（尝试转化为数值），并返回布尔值 <ul><li>不能被转化为数值的值返回 true</li><li>能转化为数值的值返回 false</li></ul></li></ul></li><li>注意： <ul><li>浮点数精度问题 <ul><li>0.1+0.2=0.30000000000000004（不要测试某个特定的浮点数值）</li></ul></li><li>数值范围 <ul><li>最小数值 Number.MIN_VALUE，大多数浏览器中，这个值是 5e-324</li><li>最大数值 Number.MAX_VALUE，大多数浏览器中，这个值是 1.7976931348623157e+308</li><li>如果计算超出了这个数值范围，这个数值将被自动转换成特殊的 Infinity 值 <ul><li>-Infinity 负无穷</li><li>Infinity 正无穷</li></ul></li></ul></li></ul></li><li>三个将非数值转化为数值的函数：Number()、parseInt()、parseFloat()</li></ul><h4 id="number-函数转换规则" tabindex="-1"><a class="header-anchor" href="#number-函数转换规则" aria-hidden="true">#</a> Number() 函数转换规则</h4><ul><li>如果是布尔值，true 和 false 将分别被转换为 1 和 0</li><li>如果是数字值，只是简单的传入和返回</li><li>如果是 null 值，返回 0</li><li>如果是 undefined ，返回 NaN</li><li>如果是字符串，遵循下列规则 <ul><li>如果字符串中只包含数字（包括前面带正号或符号的情况），则将其转换为十进制数值（会忽略前导 0）</li><li>如果字符串包含有效的浮点格式，则将其转换为对应的浮点数值（会忽略前导 0）</li><li>如果字符串包含有效的十六进制格式，则将其转换为对应的十进制整数值</li><li>如果字符串是空的（不包含任何字符），则将其转换为 0</li><li>如果字符串包含上述格式以外的字符，则将其转换为 NaN</li><li>如果是对象，则调用对象的 valueOf() 方法，然后依照前面的规则转换反悔的值。如果转换的结果是 NaN，则调用对象的 toString() 方法，然后再次依照前面的规则转换反悔的字符串值</li></ul></li><li>一元加操作符的操作与 Number() 函数相同</li></ul><h4 id="parseint-函数转换规则" tabindex="-1"><a class="header-anchor" href="#parseint-函数转换规则" aria-hidden="true">#</a> parseInt() 函数转换规则</h4><ul><li>空字符串，返回 NaN</li><li>忽略字符串前的空格，直至找到第一个非空字符串</li><li>如果第一个字符不是数字或者正负号，返回 NaN</li><li>如果第一个字符是数字字符，则会继续解析后续字符直至遇到一个非数字字符</li><li>遇到小数点也会停止，因为小数点不是有效的数字字符</li><li>能识别出其他进制数字字符，转化为十进制返回</li><li>八进制的字面量字符串存在分歧，可以携带第二个参数，表示转化是使用的基数（即进制） <ul><li>console.log(parseInt(&quot;0xAF&quot;,16)); // 175 (可以省略 0x)</li></ul></li></ul><h4 id="parsefloat-函数转换规则" tabindex="-1"><a class="header-anchor" href="#parsefloat-函数转换规则" aria-hidden="true">#</a> parseFloat() 函数转换规则</h4><ul><li>parseFloat() 与 parseInt() 函数类似</li><li>解析过程成遇到的第一个小数点有效，第二个小数点无效</li><li>只解析十进制，没有第二个参数</li><li>十六进制字符串始终会被转换成 0</li><li>如果字符串包含的是一个可解析为整数的数（没有小数点，或小数点后面都是 0），则函数会返回整数</li></ul><h3 id="string-类型" tabindex="-1"><a class="header-anchor" href="#string-类型" aria-hidden="true">#</a> String 类型</h3><ul><li>两个将一个值转化为一个字符串的函数：toString()、String()</li></ul><h4 id="tostring-函数转换规则" tabindex="-1"><a class="header-anchor" href="#tostring-函数转换规则" aria-hidden="true">#</a> toString() 函数转换规则</h4><ul><li>数值、布尔值、对象和字符串都有 toString() 方法，该方法返回字符串的一个副本</li><li>null 和 undefined 值没有这个方法</li><li>多数情况下，toString() 方法不用传递参数</li><li>调用数值的 toString() 方法时，可以传递一个参数，表示输出数值的基数（进制，默认为 10）</li></ul><h4 id="string-函数转换规则" tabindex="-1"><a class="header-anchor" href="#string-函数转换规则" aria-hidden="true">#</a> String() 函数转换规则</h4><ul><li>在不知道要转换的值是不是 null 或 undefined 的情况下可以使用，可以将任何类型的值转换为字符串</li><li>如果值有 toString() 方法，则调用该方法（没有参数）并返回相应结果</li><li>如果值是 null ，则返回 “null”</li><li>如果值是 undefined ，则返回 “unfined”</li></ul><h3 id="object-类型" tabindex="-1"><a class="header-anchor" href="#object-类型" aria-hidden="true">#</a> Object 类型</h3><ul><li>一组数据和功能的集合</li><li>Object 类型所具有的任何属性和方法也同样存在于更具体的对象中</li></ul><h4 id="object-的每个实例都具有以下属性和方法" tabindex="-1"><a class="header-anchor" href="#object-的每个实例都具有以下属性和方法" aria-hidden="true">#</a> Object 的每个实例都具有以下属性和方法</h4><ul><li>Constructor：保存着用于创建当前对象的函数</li><li>hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在 <ul><li>作为参数的属性名(propertyName)必须以字符串形式指定 <ul><li>例如：o.hasOwnProperty(&quot;name&quot;)</li></ul></li></ul></li><li>isPrototypeOf(object)：用于检查传入的对象是否是另一个对象的原型</li><li>propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用 for-in 语句来枚举。 <ul><li>作为参数的属性名(propertyName)必须以字符串形式指定</li></ul></li><li>toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应</li><li>toString()：返回对象的字符串表示</li><li>valueOf()：返回对象的字符串、数值或布尔值表示。通常与 toString() 方法的返回值相同</li></ul><h2 id="类型判断" tabindex="-1"><a class="header-anchor" href="#类型判断" aria-hidden="true">#</a> 类型判断</h2><h3 id="typeof-操作符" tabindex="-1"><a class="header-anchor" href="#typeof-操作符" aria-hidden="true">#</a> typeof 操作符</h3><blockquote><p>是确定一个变量是 字符串、数值、布尔值还是 undefined 的最佳工具<br>如果值是一个对象或 null ，结果返回 object<br>如果值是函数，该操作符会返回 function<br>如果值是正则表达式，则可能返回 function 或 object （浏览器差异）</p></blockquote><ul><li>语法：<code>typeof x</code> 或 <code>typeof(x)</code></li><li>返回变量数据类型的字符串，返回结果如下 <ul><li><code>undefined</code>：值 未定义</li><li><code>boolean</code>：值为 布尔值</li><li><code>string</code>：值为 字符串</li><li><code>number</code>：值为 数值</li><li><code>bigint</code>：值为特大的数值</li><li><code>object</code>：值为 对象或 null</li><li><code>function</code>：值为 函数</li><li><code>symbol</code>：值位 symbol</li></ul></li></ul><h3 id="instanceof-操作符" tabindex="-1"><a class="header-anchor" href="#instanceof-操作符" aria-hidden="true">#</a> instanceof 操作符</h3><ul><li>语法：<code>result = variable instanceof constructor</code></li><li>如果变量是给定引用类型（根据原型链识别）的实例则返回 true <ul><li>所有引用类型都是 <code>Object</code> 的实例，在检测一个应用类型值和 <code>Object</code> 构造函数时，<code>instanceof</code> 操作符始终会返回 <code>true</code></li><li>如果使用 <code>instanceof</code> 操作符检测基本数据类型的值，该操作符始终返回 <code>false</code> ，因为基本类型不是对象</li></ul></li></ul><h3 id="比-typeof-运算符更准确的类型判断" tabindex="-1"><a class="header-anchor" href="#比-typeof-运算符更准确的类型判断" aria-hidden="true">#</a> 比 typeof 运算符更准确的类型判断</h3><p>不同数据类型的<code>Object.prototype.toString</code>方法返回值如下。</p><ul><li>数值：返回<code>[object Number]</code>。</li><li>字符串：返回<code>[object String]</code>。</li><li>布尔值：返回<code>[object Boolean]</code>。</li><li>undefined：返回<code>[object Undefined]</code>。</li><li>null：返回<code>[object Null]</code>。</li><li>数组：返回<code>[object Array]</code>。</li><li>arguments 对象：返回<code>[object Arguments]</code>。</li><li>函数：返回<code>[object Function]</code>。</li><li>Error 对象：返回<code>[object Error]</code>。</li><li>Date 对象：返回<code>[object Date]</code>。</li><li>RegExp 对象：返回<code>[object RegExp]</code>。</li><li>其他对象：返回<code>[object Object]</code>。</li></ul><p>这就是说，<code>Object.prototype.toString</code>可以看出一个值到底是什么类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Number]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object String]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Boolean]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Undefined]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Null]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Math<span class="token punctuation">)</span> <span class="token comment">// &quot;[object Math]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Array]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这个特性，可以写出一个比<code>typeof</code>运算符更准确的类型判断函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object (.*?)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;object&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;array&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;null&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;undefined&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abcd</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// &quot;regex&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &quot;date&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这个<code>type</code>函数的基础上，还可以加上专门判断某种类型数据的方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object (.*?)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">;</span><span class="token punctuation">[</span>
  <span class="token string">&#39;Null&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Undefined&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Object&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Array&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Number&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Function&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;RegExp&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  type<span class="token punctuation">[</span><span class="token string">&#39;is&#39;</span> <span class="token operator">+</span> t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">type</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">===</span> t<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

type<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
type<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
type<span class="token punctuation">.</span><span class="token function">isRegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abc</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44);function i(p,c){return a(),s("div",null,[t(" more "),o])}const r=n(l,[["render",i],["__file","01.数据类型.html.vue"]]);export{r as default};
