import{_ as a,P as l,Q as n,Z as s,$ as e,a0 as o,a1 as i,a2 as t,F as c}from"./framework-0028f3de.js";const d={},u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},p=t(`<br><blockquote><p>JavaScript 的 <strong><code>Number</code></strong> 对象是经过封装的能让你处理数字值的对象 <code>Number</code> 对象由 <code>Number()</code> 构造器创建。</p></blockquote><br><ul><li>参数 <ul><li><code>value</code>：被创建对象的数字值</li></ul></li><li>作用 <ul><li>如果参数无法被转换为数字，则返回 <code>NAN</code></li><li>在非构造器上下文中 (如：没有 <code>new</code> 操作符)，<code>Number</code> 能被用来执行类型转换。</li></ul></li></ul><br><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 示例</span>
<span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a === 123 is false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="number-max-safe-integer" tabindex="-1"><a class="header-anchor" href="#number-max-safe-integer" aria-hidden="true">#</a> Number.MAX_SAFE_INTEGER</h2><blockquote><p>JavaScript 中最大的安全整数 2^53 - 1</p></blockquote><h2 id="number-min-safe-integer" tabindex="-1"><a class="header-anchor" href="#number-min-safe-integer" aria-hidden="true">#</a> Number.MIN_SAFE_INTEGER</h2><blockquote><p>JavaScript 中最小的安全整数 - ( 2^53 - 1 )</p></blockquote><h2 id="number-max-value" tabindex="-1"><a class="header-anchor" href="#number-max-value" aria-hidden="true">#</a> Number.MAX_VALUE</h2><blockquote><p>能表示的最大正数<br>最小的负数是 <code>-MAX_VALUE</code></p></blockquote><h2 id="number-min-value" tabindex="-1"><a class="header-anchor" href="#number-min-value" aria-hidden="true">#</a> Number.MIN_VALUE</h2><blockquote><p>能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)<br>最大的负数是 <code>-MIN_VALUE</code></p></blockquote>`,15),b={id:"number-isnan",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#number-isnan","aria-hidden":"true"},"#",-1),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN",target:"_blank",rel:"noopener noreferrer"},m=t("<ul><li>描述：确定传的值是否是 <code>NaN</code>，是全局 <code>isNaN()</code> 的更稳妥的版本，不会自行将参数转换成数字，<strong>只有在参数是值为 NaN 的数字时，才会返回 true</strong>。</li><li>语法：<code>Number.isNaN(value)</code></li><li>参数： <ul><li>value：要检测是否为 <code>NaN</code> 的值</li></ul></li><li>返回值：一个布尔值，表示给定的值是否是 <code>NaN</code></li></ul><br>",2),N={id:"number-isfinite",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#number-isfinite","aria-hidden":"true"},"#",-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite",target:"_blank",rel:"noopener noreferrer"},v=t("<ul><li><p>描述：确定传递的值类型及本身是否是有限数，和全局的 isFinite() 函数相比，这个方法不会强制将一个非数值的参数转换成数值，这就意味着，<strong>只有数值类型的值，且是有穷的（finite），才返回 true</strong>。</p></li><li><p>语法：<code>Number.isFinite(value)</code></p></li><li><p>参数</p><ul><li>value：要被检测有穷性的值</li></ul></li><li><p>返回值：一个 布尔值，表示给定的值是否是一个有穷数</p></li></ul><br>",2),k={id:"number-isinteger",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#number-isinteger","aria-hidden":"true"},"#",-1),S={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger",target:"_blank",rel:"noopener noreferrer"},E=t("<ul><li><p>描述：确定传递的值类型是 <code>number</code>，且是整数</p></li><li><p>语法：<code>Number.isInteger(value)</code></p></li><li><p>参数</p><ul><li>value：要判断此参数是否为整数</li></ul></li><li><p>返回值：判断给定值是否是整数的 <code>Boolean</code> 值</p></li></ul><br>",2),z={id:"number-parsefloat",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#number-parsefloat","aria-hidden":"true"},"#",-1),j={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat",target:"_blank",rel:"noopener noreferrer"},O=t("<ul><li><p>描述：和全局对象 parseFloat() 一样，把一个字符串解析成浮点数</p></li><li><p>语法：<code>Number.parseFloat(string)</code></p></li><li><p>参数</p><ul><li>string：被解析的字符串</li></ul></li><li><p>返回值：给定值被解析成浮点数，如果无法被解析成浮点数，则返回 <code>NaN</code></p></li></ul><br>",2),R={id:"number-parseint",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#number-parseint","aria-hidden":"true"},"#",-1),F={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt",target:"_blank",rel:"noopener noreferrer"},I=t("<ul><li><p>描述：和全局对象 parseInt() 一样，把字符串 [ 参数 string 的值] 解析成整数</p></li><li><p>语法：<code>Number.parseInt(string[, radix])</code></p></li><li><p>参数</p><ul><li>string：要解析的值，如果此参数不是字符串，则使用ToString抽象操作将其转换为字符串，忽略此参数中的前导空格</li><li>radix：一个介于2到36之间的整数，代表字符串的基数(数学数字系统中的基)，小心-这并不是默认为10</li></ul></li><li><p>返回值：从给定字符串中解析的整数，如果基数小于11，且第一个非空白字符不能转换为数字，则返回 <code>NaN</code></p></li></ul><br>",2),C={id:"number-prototype-toexponential",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#number-prototype-toexponential","aria-hidden":"true"},"#",-1),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential",target:"_blank",rel:"noopener noreferrer"},q=t("<ul><li><p>描述：以指数表示法返回该数值字符串表示形式</p></li><li><p>语法：<code>numObj.toExponential(fractionDigits)</code></p></li><li><p>参数</p><ul><li>fractionDigits：可选。一个整数，用来指定小数点后有几位数字。默认情况下用尽可能多的位数来显示数字。</li></ul></li><li><p>返回值：一个用幂的形式 (科学记数法) 来表示Number 对象的字符串。小数点后以fractionDigits 提供的值来四舍五入。如果 fractionDigits 参数被忽略了，小数点后的将尽可能用最多的位数来表示该数值</p></li><li><p>注意</p><ul><li>对数值字面量使用 <code>toExponential()</code> 方法，且该数值没有小数点和指数时，应该在该数值与该方法之间隔开一个空格，以避免点号被解释为一个小数点。也可以使用两个点号调用该方法。</li><li>如果一个数值的小数位数多余 fractionDigits 参数所提供的，则该数值将会在 fractionDigits 指定的小数位数处四舍五入</li><li>如果一个数值的小数位数多余 fractionDigits 参数所提供的，则该数值将会在 fractionDigits 指定的小数位数处四舍五入。</li><li>如果 fractionDigits 太小或太大将会抛出该错误 <code> RangeError</code> 。介于 0 和 20（包括20）之间的值不会引起 <code>RangeError </code> ，执行环境也可以支持更大或更小范围</li><li>如果该方法在一个非数值类型对象上调用，会抛出 <code>TypeError</code>错误</li></ul></li></ul><br>",2),A={id:"number-prototype-tofixed",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#number-prototype-tofixed","aria-hidden":"true"},"#",-1),L={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",target:"_blank",rel:"noopener noreferrer"},V=t("<ul><li>描述：使用定点表示法来格式化一个数值</li><li>语法：<code>numObj.toFixed(digits)</code></li><li>参数 <ul><li>digits：小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0</li></ul></li><li>返回值：使用定点表示法表示给定数字的字符串</li><li>注意 <ul><li>如果 digits 参数太小或太大会引起 <code>RangeError</code>，0 到 20（包括）之间的值不会引起</li><li>如果该方法在一个非数值类型对象上调用，会抛出 <code>TypeError</code>错误</li></ul></li></ul><br>",2),w={id:"number-prototype-tolocalestring",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#number-prototype-tolocalestring","aria-hidden":"true"},"#",-1),T={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",target:"_blank",rel:"noopener noreferrer"},B=e("ul",null,[e("li",null,"描述：返回这个数字在特定语言环境下的表示字符串"),e("li",null,[o("语法："),e("code",null,"numObj.toLocaleString([locales [, options]])")])],-1),U=e("br",null,null,-1),X={id:"number-prototype-tostring",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#number-prototype-tostring","aria-hidden":"true"},"#",-1),Q={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString",target:"_blank",rel:"noopener noreferrer"},Z=t("<ul><li>描述：返回指定 Number 对象的字符串表示形式</li><li>语法：<code>numObj.toString([radix])</code></li><li>参数 <ul><li>radix：指定要用于数字到字符串的转换的基数(从2到36)。如果未指定 radix 参数，则默认值为 10</li></ul></li><li>注意 <ul><li>如果 toString() 的 radix 参数不在 2 到 36 之间，将会抛出一个 <code>RangeError</code></li></ul></li></ul><br>",2),$={id:"number-prototype-valueof",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#number-prototype-valueof","aria-hidden":"true"},"#",-1),K={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf",target:"_blank",rel:"noopener noreferrer"},Y=e("ul",null,[e("li",null,[o("描述：返回一个被 "),e("code",null,"Number "),o("对象包装的原始值")]),e("li",null,[o("语法："),e("code",null,"numObj.valueOf()")]),e("li",null,"注意：该方法通常是由 JavaScript 引擎在内部隐式调用的，而不是由用户在代码中显式调用的。")],-1);function ee(oe,re){const r=c("ExternalLinkIcon");return l(),n("div",null,[s(" more "),e("p",null,[e("a",u,[o("Number"),i(r)])]),p,e("h2",b,[h,o(),e("a",_,[o("Number.isNaN()"),i(r)])]),m,e("h2",N,[f,o(),e("a",g,[o("Number.isFinite()"),i(r)])]),v,e("h2",k,[x,o(),e("a",S,[o("Number.isInteger()"),i(r)])]),E,e("h2",z,[y,o(),e("a",j,[o("Number.parseFloat()"),i(r)])]),O,e("h2",R,[J,o(),e("a",F,[o("Number.parseInt()"),i(r)])]),I,e("h2",C,[G,o(),e("a",W,[o("Number.prototype.toExponential()"),i(r)])]),q,e("h2",A,[D,o(),e("a",L,[o("Number.prototype.toFixed()"),i(r)])]),V,e("h2",w,[M,o(),e("a",T,[o("Number.prototype.toLocaleString()"),i(r)])]),B,U,e("h2",X,[P,o(),e("a",Q,[o("Number.prototype.toString()"),i(r)])]),Z,e("h2",$,[H,o(),e("a",K,[o("Number.prototype.valueOf()"),i(r)])]),Y])}const te=a(d,[["render",ee],["__file","06.Number.html.vue"]]);export{te as default};
