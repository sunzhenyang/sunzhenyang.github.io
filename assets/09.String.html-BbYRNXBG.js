import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as i,c as a,a as p,b as t,d as e,e as l,f as o}from"./app-BybQgHW9.js";const c={},d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},u=o(`<br><h2 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符"><span>转义字符</span></a></h2><table><thead><tr><th>Code</th><th>Output</th></tr></thead><tbody><tr><td><code>\\0</code></td><td>空字符</td></tr><tr><td><code>\\&#39;</code></td><td>单引号</td></tr><tr><td><code>\\&quot;</code></td><td>双引号</td></tr><tr><td><code>\\\\</code></td><td>反斜杠</td></tr><tr><td><code>\\n</code></td><td>换行</td></tr><tr><td><code>\\r</code></td><td>回车</td></tr><tr><td><code>\\v</code></td><td>垂直制表符</td></tr><tr><td><code>\\t</code></td><td>水平制表符</td></tr><tr><td><code>\\b</code></td><td>退格</td></tr><tr><td><code>\\f</code></td><td>换页</td></tr><tr><td><code>\\uXXXX</code></td><td>unicode 码</td></tr><tr><td><code>\\u{X} ... \\u{XXXXXX}</code></td><td>unicode codepoint</td></tr><tr><td><code>\\xXX</code></td><td>Latin-1 字符(x小写)</td></tr></tbody></table><br><h2 id="长字符串" tabindex="-1"><a class="header-anchor" href="#长字符串"><span>长字符串</span></a></h2><blockquote><p>代码可能含有很长的字符串，应写成多行，而不是让这一行无限延长或着被编辑器折叠</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 使用 + 运算符将多个字符串连接起来</span>
<span class="token keyword">let</span> longString <span class="token operator">=</span> <span class="token string">&quot;This is a very long string which needs &quot;</span> <span class="token operator">+</span>
                 <span class="token string">&quot;to wrap across multiple lines because &quot;</span> <span class="token operator">+</span>
                 <span class="token string">&quot;otherwise my code is unreadable.&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 每行末尾使用反斜杠字符（“\\”），以指示字符串将在下一行继续</span>
<span class="token comment">// 确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作</span>
<span class="token keyword">let</span> longString <span class="token operator">=</span> <span class="token string">&quot;This is a very long string which needs \\
to wrap across multiple lines because \\
otherwise my code is unreadable.&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="基本字符串和字符串对象" tabindex="-1"><a class="header-anchor" href="#基本字符串和字符串对象"><span>基本字符串和字符串对象</span></a></h2><ul><li><p>基本字符串：需要时，JavaScript会自动将基本字符串转换为字符串对象</p><ul><li>字符串字面量 (通过单引号或双引号定义)</li><li>直接调用 String 方法（没有通过 new 生成字符串对象实例）的字符串</li></ul></li><li><p>注意：当使用 eval 时，基本字符串和字符串对象也会产生不同的结果</p><ul><li>基本字符串 作为源代码处理</li><li>字符串对象 被看作对象处理, 返回对象</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>s1 <span class="token operator">=</span> <span class="token string">&quot;2 + 2&quot;</span><span class="token punctuation">;</span>               <span class="token comment">// creates a string primitive</span>
s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;2 + 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// creates a String object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// returns the number 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// returns the string &quot;2 + 2&quot;</span>

<span class="token comment">// 利用 valueOf 方法，我们可以将字符串对象转换为其对应的基本字符串</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns the number 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><br>`,13),h={id:"string-prototype-charat",tabindex:"-1"},g={class:"header-anchor",href:"#string-prototype-charat"},_={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt",target:"_blank",rel:"noopener noreferrer"},b=t("ul",null,[t("li",null,[t("p",null,"描述：从一个字符串中返回指定的字符")]),t("li",null,[t("p",null,[e("语法："),t("code",null,"str.charAt(index)")])]),t("li",null,[t("p",null,"参数"),t("ul",null,[t("li",null,"index：一个介于0 和字符串长度减1之间的整数。 (0~length-1)，如果没有提供索引，charAt() 将使用 0")])])],-1),m=t("br",null,null,-1),y={id:"string-prototype-charcodeat",tabindex:"-1"},f={class:"header-anchor",href:"#string-prototype-charcodeat"},v={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt",target:"_blank",rel:"noopener noreferrer"},S=t("ul",null,[t("li",null,[t("p",null,"描述：返回指定位置的字符的 Unicode 编码，这个返回值是 0 - 65535 之间的整数")]),t("li",null,[t("p",null,[e("语法："),t("code",null,"str.charCodeAt(index)")])]),t("li",null,[t("p",null,"参数"),t("ul",null,[t("li",null,"index：一个大于等于 0，小于字符串长度的整数，如果不是一个数值，则默认为 0")])])],-1),k=t("br",null,null,-1),x={id:"string-prototype-concat",tabindex:"-1"},z={class:"header-anchor",href:"#string-prototype-concat"},C={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat",target:"_blank",rel:"noopener noreferrer"},j=o("<ul><li>描述：将一个或多个字符串与原字符串连接合并</li><li>语法：<code>str.concat(str2, [, ...strN])</code></li><li>参数 <ul><li>str2 [, ...strN]：需要连接到 <code>str</code> 的字符串</li></ul></li><li>返回值：一个新的字符串，包含参数所提供的连接字符串**（不影响原字符串）**</li><li>注意：性能方面考虑，强烈建议使用赋值操作符（+, +=）代替 concat 方法</li></ul><br>",2),w={id:"string-prototype-startswith",tabindex:"-1"},O={class:"header-anchor",href:"#string-prototype-startswith"},N={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith",target:"_blank",rel:"noopener noreferrer"},R=t("ul",null,[t("li",null,"描述：判断当前字符串是否以另外一个给定的子字符串开头"),t("li",null,[e("语法："),t("code",null,"str.startsWith(searchString[, position])")]),t("li",null,[e("参数 "),t("ul",null,[t("li",null,"searchString：要搜索的子字符串"),t("li",null,"position：在 str 中搜索 searchString 的开始位置，默认值为 0")])])],-1),W=t("br",null,null,-1),J={id:"string-prototype-endswith",tabindex:"-1"},L={class:"header-anchor",href:"#string-prototype-endswith"},G={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith",target:"_blank",rel:"noopener noreferrer"},q=t("ul",null,[t("li",null,"描述：判断当前字符串是否是以另外一个给定的子字符串结尾"),t("li",null,[e("语法："),t("code",null,"str.endsWith(searchString[, length])")]),t("li",null,[e("参数 "),t("ul",null,[t("li",null,"searchString：要搜索的子字符串"),t("li",null,"length：作为 str 的长度。默认值为 str.length")])])],-1),I=t("br",null,null,-1),A={id:"string-prototype-includes",tabindex:"-1"},E={class:"header-anchor",href:"#string-prototype-includes"},V={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes",target:"_blank",rel:"noopener noreferrer"},X=t("ul",null,[t("li",null,"描述：判断一个字符串是否包含在另一个字符串中"),t("li",null,[e("语法："),t("code",null,"str.includes(searchString[, position])")]),t("li",null,[e("参数 "),t("ul",null,[t("li",null,"searchString：要搜索的子字符串"),t("li",null,"position：从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0")])])],-1),T=t("br",null,null,-1),U={id:"string-prototype-indexof",tabindex:"-1"},B={class:"header-anchor",href:"#string-prototype-indexof"},P={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",target:"_blank",rel:"noopener noreferrer"},D=o(`<ul><li><p>描述：返回调用它的 String 对象中第一次出现的指定值的索引</p></li><li><p>语法：<code>str.indexOf(searchValue [, fromIndex])</code></p></li><li><p>参数</p><ul><li>searchString：要搜索的子字符串 <ul><li>如果没有提供确切地提供字符串，searchValue 会被强制设置为 &quot;undefined&quot;， 然后在当前字符串中查找这个值</li></ul></li><li>fromIndex：从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0</li></ul></li><li><p>返回值：查找的字符串 <code>searchValue</code> 的第一次出现的索引，如果没有找到，则返回 <code>-1</code></p></li><li><p>注意</p><ul><li>如果 searchValue 是一个空字符串，则会返回 fromIndex</li><li>如果 fromIndex 值大于等于字符串的长度，将会直接返回字符串的长度（str.length）</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 统计一个字符串中某个字母出现的次数</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;To be, or not to be, that is the question.&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pos <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>pos <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token operator">++</span><span class="token punctuation">;</span>
  pos <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// displays 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,3),Y={id:"string-prototype-lastindexof",tabindex:"-1"},Z={class:"header-anchor",href:"#string-prototype-lastindexof"},F={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf",target:"_blank",rel:"noopener noreferrer"},H=o("<ul><li><p>描述：返回调用String 对象的指定值最后一次出现的索引</p></li><li><p>语法：<code>str.lastIndexOf(searchValue[, fromIndex])</code></p></li><li><p>参数</p><ul><li>searchString：要搜索的子字符串 <ul><li>如果没有提供确切地提供字符串，searchValue 会被强制设置为 &quot;undefined&quot;， 然后在当前字符串中查找这个值</li></ul></li><li>fromIndex：searchValue 的开头一位字符从 str 的第fromIndex位开始向左回向查找</li></ul></li><li><p>返回值：返回指定值最后一次出现的索引(该索引仍是以从左至右0开始记数的)，如果没找到则返回 -1</p></li><li><p>注意</p><ul><li>如果 searchValue 是一个空字符串，则会返回 fromIndex</li><li>fromIndex 默认值是 +Infinity</li><li>fromIndex &gt;= str.length ，则会搜索整个字符串</li><li>fromIndex &lt; 0 ，则等同于 fromIndex == 0</li></ul></li></ul><br>",2),K={id:"string-prototype-localecompare",tabindex:"-1"},M={class:"header-anchor",href:"#string-prototype-localecompare"},Q={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare",target:"_blank",rel:"noopener noreferrer"},$=o("<ul><li>描述：一个参考字符串是否在排序顺序前面或之后或与给定字符串相同</li><li>语法：<code>referenceStr.localeCompare(compareString[, locales[, options]])</code></li><li>参数 <ul><li>compareString：用来比较的字符串</li><li>locales（可选）：用来表示一种或多种语言或区域的一个符合 BCP 47 标准的字符串或一个字符串数组</li><li>options（可选）：比较选项</li></ul></li><li>返回值 <ul><li>如果引用字符存在于比较字符之前则为<strong>负数</strong></li><li>如果引用字符存在于比较字符之后则为<strong>正数</strong></li><li>相等的时候返回 <strong>0</strong></li></ul></li></ul><br>",2),tt={id:"string-prototype-match",tabindex:"-1"},et={class:"header-anchor",href:"#string-prototype-match"},nt={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match",target:"_blank",rel:"noopener noreferrer"},lt=o("<ul><li>描述：检索返回一个字符串匹配正则表达式的的结果</li><li>语法：<code>str.match(regexp)</code></li><li>参数 <ul><li>regexp：一个正则表达式对象 <ul><li>如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp</li><li>如果没有给出任何参数并直接使用match() 方法 ，会得到一 个包含空字符串的 Array ：[&quot;&quot;]</li></ul></li></ul></li><li>返回值 <ul><li>如果使用 g 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组</li><li>如果未使用 g 标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性 <ul><li>groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）</li><li>index: 匹配的结果的开始位置</li><li>input: 搜索的字符串.</li></ul></li></ul></li></ul><br>",2),ot={id:"string-prototype-matchall",tabindex:"-1"},rt={class:"header-anchor",href:"#string-prototype-matchall"},st={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll",target:"_blank",rel:"noopener noreferrer"},it=t("ul",null,[t("li",null,"描述：返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器"),t("li",null,[e("语法："),t("code",null,"str.matchAll(regexp)")]),t("li",null,[e("参数 "),t("ul",null,[t("li",null,[e("regexp：一个正则表达式对象 "),t("ul",null,[t("li",null,"如果所传参数不是一个正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp")])])])]),t("li",null,"返回值：一个迭代器（不可重用，结果耗尽需要再次调用方法，获取一个新的迭代器）")],-1),at=t("br",null,null,-1),pt={id:"string-prototype-padstart",tabindex:"-1"},ct={class:"header-anchor",href:"#string-prototype-padstart"},dt={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart",target:"_blank",rel:"noopener noreferrer"},ut=o("<ul><li>描述：另一个字符串填充当前字符串的开头(如果需要的话，会重复多次)</li><li>语法：<code>str.padStart(targetLength [, padString])</code></li><li>参数 <ul><li>targetLength：当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身</li><li>padString：填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断（<strong>截断的是填充的字符串部分</strong>）。此参数的缺省值为 &quot; &quot;</li></ul></li><li>返回值：在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串</li></ul><br>",2),ht={id:"string-prototype-padend",tabindex:"-1"},gt={class:"header-anchor",href:"#string-prototype-padend"},_t={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd",target:"_blank",rel:"noopener noreferrer"},bt=t("ul",null,[t("li",null,"描述：用一个字符串填充当前字符串的末尾（如果需要的话则重复填充）"),t("li",null,[e("语法："),t("code",null,"str.padEnd(targetLength [, padString])")]),t("li",null,[e("参数 "),t("ul",null,[t("li",null,"targetLength：当前字符串需要填充到的目标长度，如果这个数值小于当前字符串的长度，则返回当前字符串本身"),t("li",null,'padString：填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的缺省值为 " "')])]),t("li",null,"返回值：在原字符串末尾填充指定的填充字符串直到目标长度所形成的新字符串")],-1),mt=t("br",null,null,-1),yt={id:"string-prototype-repeat",tabindex:"-1"},ft={class:"header-anchor",href:"#string-prototype-repeat"},vt={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",target:"_blank",rel:"noopener noreferrer"},St=t("ul",null,[t("li",null,"描述：用一个字符串填充当前字符串的末尾（如果需要的话则重复填充）"),t("li",null,[e("语法："),t("code",null,"str.repeat(count)")]),t("li",null,[e("参数 "),t("ul",null,[t("li",null,"count：介于 0 和 +Infinity 之间的整数。表示在新构造的字符串中重复了多少遍原字符串")])]),t("li",null,"返回值：包含指定字符串的指定数量副本的新字符串")],-1),kt=t("br",null,null,-1),xt={id:"string-prototype-replace",tabindex:"-1"},zt={class:"header-anchor",href:"#string-prototype-replace"},Ct={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace",target:"_blank",rel:"noopener noreferrer"},jt=o("<ul><li>描述：返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串</li><li>语法：<code>str.replace(regexp|substr, newSubStr|function)</code></li><li>参数 <ul><li>regexp (pattern)：一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉</li><li>substr (pattern)：一个将被 newSubStr 替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。</li><li>newSubStr (replacement)：用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名</li><li>function (replacement)：一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果</li></ul></li><li>返回值：一个部分或全部匹配由替代模式所取代的新的字符串</li></ul><br>",2),wt={id:"string-prototype-search",tabindex:"-1"},Ot={class:"header-anchor",href:"#string-prototype-search"},Nt={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search",target:"_blank",rel:"noopener noreferrer"},Rt=o("<ul><li>描述：执行正则表达式和 String 对象之间的一个搜索匹配</li><li>语法：<code>str.search(regexp)</code></li><li>参数 <ul><li>regexp：一个正则表达式对象 <ul><li>如果传入一个非正则表达式对象，则会使用 new RegExp(regexp) 隐式地将其转换为正则表达式对象</li></ul></li></ul></li><li>返回值：如果匹配成功，则 <code>search()</code> 返回正则表达式在字符串中首次匹配项的索引;否则，返回 <code>-1</code></li></ul><br>",2),Wt={id:"string-prototype-slice",tabindex:"-1"},Jt={class:"header-anchor",href:"#string-prototype-slice"},Lt={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice",target:"_blank",rel:"noopener noreferrer"},Gt=o("<ul><li>描述：提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串</li><li>语法：<code>str.slice(beginIndex[, endIndex])</code></li><li>参数 <ul><li>beginIndex：从该索引（以 0 为基数）处开始提取原字符串中的字符 <ul><li>如果值为负数，会被当做 strLength + beginIndex 看待，这里的strLength 是字符串的长度</li></ul></li><li>endIndex（可选）：在该索引（以 0 为基数）处结束提取字符串 <ul><li>如果省略该参数，slice() 会一直提取到字符串末尾</li><li>如果该参数为负数，则被看作是 strLength + endIndex</li></ul></li></ul></li><li>返回值：返回一个从原字符串中提取出来的新字符串</li></ul><br>",2),qt={id:"string-prototype-split",tabindex:"-1"},It={class:"header-anchor",href:"#string-prototype-split"},At={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split",target:"_blank",rel:"noopener noreferrer"},Et=o("<ul><li>描述：使用指定的分隔符字符串将一个String对象分割成子字符串数组</li><li>语法：<code>str.split([separator[, limit]])</code></li><li>参数 <ul><li>separator：指定表示每个拆分应发生的点的字符串 <ul><li>可以是一个字符串或正则表达式</li><li>如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点</li></ul></li><li>limit（可选）：一个整数，限定返回的分割片段数量</li></ul></li><li>返回值：返回源字符串以分隔符出现位置分隔而成的一个 Array <ul><li>如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素</li><li>如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。</li></ul></li></ul><br>",2),Vt={id:"string-prototype-substring",tabindex:"-1"},Xt={class:"header-anchor",href:"#string-prototype-substring"},Tt={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring",target:"_blank",rel:"noopener noreferrer"},Ut=t("ul",null,[t("li",null,"描述：返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集"),t("li",null,[e("语法："),t("code",null,"str.substring(indexStart[, indexEnd])")]),t("li",null,[e("参数 "),t("ul",null,[t("li",null,"indexStart：需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母"),t("li",null,"indexEnd（可选）：一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内")])]),t("li",null,"返回值：包含给定字符串的指定部分的新字符串")],-1),Bt=t("br",null,null,-1),Pt={id:"string-prototype-tolowercase",tabindex:"-1"},Dt={class:"header-anchor",href:"#string-prototype-tolowercase"},Yt={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase",target:"_blank",rel:"noopener noreferrer"},Zt=t("ul",null,[t("li",null,"描述：将调用该方法的字符串值转为小写形式（如果调用该方法的值不是字符串类型会被强制转换）"),t("li",null,"语法：` str.toLowerCase()"),t("li",null,"返回值：一个新的字符串，表示为将调用该方法的字符串转为小写形式")],-1),Ft=t("br",null,null,-1),Ht={id:"string-prototype-touppercase",tabindex:"-1"},Kt={class:"header-anchor",href:"#string-prototype-touppercase"},Mt={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase",target:"_blank",rel:"noopener noreferrer"},Qt=t("ul",null,[t("li",null,"描述：将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）"),t("li",null,"语法：` str.toUpperCase()"),t("li",null,"返回值：一个新的字符串，表示为将调用该方法的字符串转为大写形式")],-1),$t=t("br",null,null,-1),te={id:"string-prototype-tolocalelowercase",tabindex:"-1"},ee={class:"header-anchor",href:"#string-prototype-tolocalelowercase"},ne={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase",target:"_blank",rel:"noopener noreferrer"},le=o("<ul><li>描述：根据本地主机语言环境把字符串转换为小写格式</li><li>语法：<code>str.toLocaleLowerCase([locale, locale, ...])</code></li><li>参数 <ul><li>locale（可选）：指明要转换成小写格式的特定语言区域。 <ul><li>如果以一个数组 Array形式给出多个locales, 最合适的地区将被选出来应用</li><li>默认的 locale 是主机环境的当前区域(locale)设置。</li></ul></li></ul></li><li>返回值：根据任何特定于语言环境的案例映射规则将被调用字串转换成小写格式的一个新字符串</li></ul><br>",2),oe={id:"string-prototype-tolocaleuppercase",tabindex:"-1"},re={class:"header-anchor",href:"#string-prototype-tolocaleuppercase"},se={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase",target:"_blank",rel:"noopener noreferrer"},ie=o("<ul><li>描述：根据本地主机语言环境把字符串转换为大写格式</li><li>语法：<code>str.toLocaleUpperCase([locale, locale, ...])</code></li><li>参数 <ul><li>locale（可选）：指明要转换成小写格式的特定语言区域。 <ul><li>如果以一个数组 Array形式给出多个locales, 最合适的地区将被选出来应用</li><li>默认的 locale 是主机环境的当前区域(locale)设置。</li></ul></li></ul></li><li>返回值：根据任何特定于语言环境的案例映射规则将被调用字串转换成大写格式的一个新字符串</li></ul><br>",2),ae={id:"string-prototype-tostring",tabindex:"-1"},pe={class:"header-anchor",href:"#string-prototype-tostring"},ce={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString",target:"_blank",rel:"noopener noreferrer"},de=t("ul",null,[t("li",null,"描述：返回指定对象的字符串形式"),t("li",null,[e("语法："),t("code",null,"str.toString()")]),t("li",null,"返回值：一个表示调用对象的字符串")],-1),ue=t("br",null,null,-1),he={id:"string-prototype-trim",tabindex:"-1"},ge={class:"header-anchor",href:"#string-prototype-trim"},_e={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim",target:"_blank",rel:"noopener noreferrer"},be=t("ul",null,[t("li",null,"描述：从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）"),t("li",null,[e("语法："),t("code",null,"str.trim()")]),t("li",null,"返回值：一个代表调用字符串两端去掉空白的新字符串")],-1),me=t("br",null,null,-1),ye={id:"string-prototype-trimstart",tabindex:"-1"},fe={class:"header-anchor",href:"#string-prototype-trimstart"},ve={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft",target:"_blank",rel:"noopener noreferrer"},Se=t("ul",null,[t("li",null,[e("描述：从一个字符串的末端移除空白字符。"),t("strong",null,"trimLeft()"),e(" 是这个方法的别名")]),t("li",null,[e("语法："),t("code",null,"str.trimStart() / str.trimLeft();")]),t("li",null,"返回值：一个新字符串，表示从其开头（左端）除去空格的调用字符串")],-1),ke=t("br",null,null,-1),xe={id:"string-prototype-trimend",tabindex:"-1"},ze={class:"header-anchor",href:"#string-prototype-trimend"},Ce={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight",target:"_blank",rel:"noopener noreferrer"},je=t("ul",null,[t("li",null,[e("描述：从字符串的开头删除空格。"),t("strong",null,"trimLeft()"),e(" 是此方法的别名")]),t("li",null,[e("语法："),t("code",null,"str.trimEnd() / str.trimRight();")]),t("li",null,"返回值：一个新字符串，表示从调用字串的末（右）端除去空白")],-1),we=t("br",null,null,-1),Oe={id:"string-prototype-valueof",tabindex:"-1"},Ne={class:"header-anchor",href:"#string-prototype-valueof"},Re={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf",target:"_blank",rel:"noopener noreferrer"},We=t("ul",null,[t("li",null,"描述：返回 String 对象的原始值"),t("li",null,[e("语法："),t("code",null,"str.valueOf()")])],-1);function Je(Le,Ge){const n=s("ExternalLinkIcon");return i(),a("div",null,[p(" more "),t("p",null,[t("a",d,[e("String"),l(n)])]),u,t("h2",h,[t("a",g,[t("span",null,[t("a",_,[e("String.prototype.charAt()"),l(n)])])])]),b,m,t("h2",y,[t("a",f,[t("span",null,[t("a",v,[e("String.prototype.charCodeAt()"),l(n)])])])]),S,k,t("h2",x,[t("a",z,[t("span",null,[t("a",C,[e("String.prototype.concat()"),l(n)])])])]),j,t("h2",w,[t("a",O,[t("span",null,[t("a",N,[e("String.prototype.startsWith()"),l(n)])])])]),R,W,t("h2",J,[t("a",L,[t("span",null,[t("a",G,[e("String.prototype.endsWith()"),l(n)])])])]),q,I,t("h2",A,[t("a",E,[t("span",null,[t("a",V,[e("String.prototype.includes()"),l(n)])])])]),X,T,t("h2",U,[t("a",B,[t("span",null,[t("a",P,[e("String.prototype.indexOf()"),l(n)])])])]),D,t("h2",Y,[t("a",Z,[t("span",null,[t("a",F,[e("String.prototype.lastIndexOf()"),l(n)])])])]),H,t("h2",K,[t("a",M,[t("span",null,[t("a",Q,[e("String.prototype.localeCompare()"),l(n)])])])]),$,t("h2",tt,[t("a",et,[t("span",null,[t("a",nt,[e("String.prototype.match()"),l(n)])])])]),lt,t("h2",ot,[t("a",rt,[t("span",null,[t("a",st,[e("String.prototype.matchAll()"),l(n)])])])]),it,at,t("h2",pt,[t("a",ct,[t("span",null,[t("a",dt,[e("String.prototype.padStart()"),l(n)])])])]),ut,t("h2",ht,[t("a",gt,[t("span",null,[t("a",_t,[e("String.prototype.padEnd()"),l(n)])])])]),bt,mt,t("h2",yt,[t("a",ft,[t("span",null,[t("a",vt,[e("String.prototype.repeat()"),l(n)])])])]),St,kt,t("h2",xt,[t("a",zt,[t("span",null,[t("a",Ct,[e("String.prototype.replace()"),l(n)])])])]),jt,t("h2",wt,[t("a",Ot,[t("span",null,[t("a",Nt,[e("String.prototype.search()"),l(n)])])])]),Rt,t("h2",Wt,[t("a",Jt,[t("span",null,[t("a",Lt,[e("String.prototype.slice()"),l(n)])])])]),Gt,t("h2",qt,[t("a",It,[t("span",null,[t("a",At,[e("String.prototype.split()"),l(n)])])])]),Et,t("h2",Vt,[t("a",Xt,[t("span",null,[t("a",Tt,[e("String.prototype.substring()"),l(n)])])])]),Ut,Bt,t("h2",Pt,[t("a",Dt,[t("span",null,[t("a",Yt,[e("String.prototype.toLowerCase()"),l(n)])])])]),Zt,Ft,t("h2",Ht,[t("a",Kt,[t("span",null,[t("a",Mt,[e("String.prototype.toUpperCase()"),l(n)])])])]),Qt,$t,t("h2",te,[t("a",ee,[t("span",null,[t("a",ne,[e("String.prototype.toLocaleLowerCase()"),l(n)])])])]),le,t("h2",oe,[t("a",re,[t("span",null,[t("a",se,[e("String.prototype.toLocaleUpperCase()"),l(n)])])])]),ie,t("h2",ae,[t("a",pe,[t("span",null,[t("a",ce,[e("String.prototype.toString()"),l(n)])])])]),de,ue,t("h2",he,[t("a",ge,[t("span",null,[t("a",_e,[e("String.prototype.trim()"),l(n)])])])]),be,me,t("h2",ye,[t("a",fe,[t("span",null,[t("a",ve,[e("String.prototype.trimStart()"),l(n)])])])]),Se,ke,t("h2",xe,[t("a",ze,[t("span",null,[t("a",Ce,[e("String.prototype.trimEnd()"),l(n)])])])]),je,we,t("h2",Oe,[t("a",Ne,[t("span",null,[t("a",Re,[e("String.prototype.valueOf()"),l(n)])])])]),We])}const Ae=r(c,[["render",Je],["__file","09.String.html.vue"]]),Ee=JSON.parse(`{"path":"/notes/javascript/built-in-objects/09.String.html","title":"String","lang":"zh-CN","frontmatter":{"title":"String","icon":"article","article":false,"sticky":20,"breadcrumb":false,"description":"String 转义字符 长字符串 代码可能含有很长的字符串，应写成多行，而不是让这一行无限延长或着被编辑器折叠 基本字符串和字符串对象 基本字符串：需要时，JavaScript会自动将基本字符串转换为字符串对象 字符串字面量 (通过单引号或双引号定义) 直接调用 String 方法（没有通过 new 生成字符串对象实例）的字符串 注意：当使用 eval...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/notes/javascript/built-in-objects/09.String.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"String"}],["meta",{"property":"og:description","content":"String 转义字符 长字符串 代码可能含有很长的字符串，应写成多行，而不是让这一行无限延长或着被编辑器折叠 基本字符串和字符串对象 基本字符串：需要时，JavaScript会自动将基本字符串转换为字符串对象 字符串字面量 (通过单引号或双引号定义) 直接调用 String 方法（没有通过 new 生成字符串对象实例）的字符串 注意：当使用 eval..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"String\\",\\"description\\":\\"String 转义字符 长字符串 代码可能含有很长的字符串，应写成多行，而不是让这一行无限延长或着被编辑器折叠 基本字符串和字符串对象 基本字符串：需要时，JavaScript会自动将基本字符串转换为字符串对象 字符串字面量 (通过单引号或双引号定义) 直接调用 String 方法（没有通过 new 生成字符串对象实例）的字符串 注意：当使用 eval...\\"}"]]},"headers":[{"level":2,"title":"转义字符","slug":"转义字符","link":"#转义字符","children":[]},{"level":2,"title":"长字符串","slug":"长字符串","link":"#长字符串","children":[]},{"level":2,"title":"基本字符串和字符串对象","slug":"基本字符串和字符串对象","link":"#基本字符串和字符串对象","children":[]},{"level":2,"title":"String.prototype.charAt()","slug":"string-prototype-charat","link":"#string-prototype-charat","children":[]},{"level":2,"title":"String.prototype.charCodeAt()","slug":"string-prototype-charcodeat","link":"#string-prototype-charcodeat","children":[]},{"level":2,"title":"String.prototype.concat()","slug":"string-prototype-concat","link":"#string-prototype-concat","children":[]},{"level":2,"title":"String.prototype.startsWith()","slug":"string-prototype-startswith","link":"#string-prototype-startswith","children":[]},{"level":2,"title":"String.prototype.endsWith()","slug":"string-prototype-endswith","link":"#string-prototype-endswith","children":[]},{"level":2,"title":"String.prototype.includes()","slug":"string-prototype-includes","link":"#string-prototype-includes","children":[]},{"level":2,"title":"String.prototype.indexOf()","slug":"string-prototype-indexof","link":"#string-prototype-indexof","children":[]},{"level":2,"title":"String.prototype.lastIndexOf()","slug":"string-prototype-lastindexof","link":"#string-prototype-lastindexof","children":[]},{"level":2,"title":"String.prototype.localeCompare()","slug":"string-prototype-localecompare","link":"#string-prototype-localecompare","children":[]},{"level":2,"title":"String.prototype.match()","slug":"string-prototype-match","link":"#string-prototype-match","children":[]},{"level":2,"title":"String.prototype.matchAll()","slug":"string-prototype-matchall","link":"#string-prototype-matchall","children":[]},{"level":2,"title":"String.prototype.padStart()","slug":"string-prototype-padstart","link":"#string-prototype-padstart","children":[]},{"level":2,"title":"String.prototype.padEnd()","slug":"string-prototype-padend","link":"#string-prototype-padend","children":[]},{"level":2,"title":"String.prototype.repeat()","slug":"string-prototype-repeat","link":"#string-prototype-repeat","children":[]},{"level":2,"title":"String.prototype.replace()","slug":"string-prototype-replace","link":"#string-prototype-replace","children":[]},{"level":2,"title":"String.prototype.search()","slug":"string-prototype-search","link":"#string-prototype-search","children":[]},{"level":2,"title":"String.prototype.slice()","slug":"string-prototype-slice","link":"#string-prototype-slice","children":[]},{"level":2,"title":"String.prototype.split()","slug":"string-prototype-split","link":"#string-prototype-split","children":[]},{"level":2,"title":"String.prototype.substring()","slug":"string-prototype-substring","link":"#string-prototype-substring","children":[]},{"level":2,"title":"String.prototype.toLowerCase()","slug":"string-prototype-tolowercase","link":"#string-prototype-tolowercase","children":[]},{"level":2,"title":"String.prototype.toUpperCase()","slug":"string-prototype-touppercase","link":"#string-prototype-touppercase","children":[]},{"level":2,"title":"String.prototype.toLocaleLowerCase()","slug":"string-prototype-tolocalelowercase","link":"#string-prototype-tolocalelowercase","children":[]},{"level":2,"title":"String.prototype.toLocaleUpperCase()","slug":"string-prototype-tolocaleuppercase","link":"#string-prototype-tolocaleuppercase","children":[]},{"level":2,"title":"String.prototype.toString()","slug":"string-prototype-tostring","link":"#string-prototype-tostring","children":[]},{"level":2,"title":"String.prototype.trim()","slug":"string-prototype-trim","link":"#string-prototype-trim","children":[]},{"level":2,"title":"String.prototype.trimStart()","slug":"string-prototype-trimstart","link":"#string-prototype-trimstart","children":[]},{"level":2,"title":"String.prototype.trimEnd()","slug":"string-prototype-trimend","link":"#string-prototype-trimend","children":[]},{"level":2,"title":"String.prototype.valueOf()","slug":"string-prototype-valueof","link":"#string-prototype-valueof","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":12.73,"words":3819},"filePathRelative":"notes/javascript/built-in-objects/09.String.md","localizedDate":"2023年1月11日","excerpt":"","autoDesc":true}`);export{Ae as comp,Ee as data};
