import{_ as e,o as t,c as p,a as s,b as o,d as n,e as c,r as i}from"./app.41291239.js";const l={},u=n("JavaScript \u8BED\u8A00\u7684\u8BBE\u8BA1\u662F\u5355\u4E00\u7EE7\u627F\uFF0C\u5373\u5B50\u7C7B\u53EA\u80FD\u7EE7\u627F\u4E00\u4E2A\u7236\u7C7B\uFF0C\u4E0D\u5141\u8BB8\u7EE7\u627F\u591A\u4E2A\u7236\u7C7B\u3002\u8FD9\u79CD\u8BBE\u8BA1\u4FDD\u8BC1\u4E86\u5BF9\u8C61\u7EE7\u627F\u7684\u5C42\u6B21\u7ED3\u6784\u662F\u6811\u72B6\u7684\uFF0C\u800C\u4E0D\u662F\u590D\u6742\u7684"),r={href:"https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem",target:"_blank",rel:"noopener noreferrer"},d=n("\u7F51\u72B6\u7ED3\u6784"),k=n("\u3002"),v=c(`<p>\u4F46\u662F\uFF0C\u8FD9\u5927\u5927\u964D\u4F4E\u4E86\u7F16\u7A0B\u7684\u7075\u6D3B\u6027\u3002\u56E0\u4E3A\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6709\u65F6\u4E0D\u53EF\u907F\u514D\uFF0C\u5B50\u7C7B\u9700\u8981\u7EE7\u627F\u591A\u4E2A\u7236\u7C7B\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u201C\u732B\u201D\u53EF\u4EE5\u7EE7\u627F\u201C\u54FA\u4E73\u7C7B\u52A8\u7269\u201D\uFF0C\u4E5F\u53EF\u4EE5\u7EE7\u627F\u201C\u5BA0\u7269\u201D\u3002</p><p>\u5404\u79CD\u5355\u4E00\u7EE7\u627F\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u6709\u4E0D\u540C\u7684\u591A\u91CD\u7EE7\u627F\u89E3\u51B3\u65B9\u6848\u3002\u6BD4\u5982\uFF0CJava \u8BED\u8A00\u4E5F\u662F\u5B50\u7C7B\u53EA\u80FD\u7EE7\u627F\u4E00\u4E2A\u7236\u7C7B\uFF0C\u4F46\u662F\u8FD8\u5141\u8BB8\u7EE7\u627F\u591A\u4E2A\u754C\u9762\uFF08interface\uFF09\uFF0C\u8FD9\u6837\u5C31\u95F4\u63A5\u5B9E\u73B0\u4E86\u591A\u91CD\u7EE7\u627F\u3002Interface \u4E0E\u7236\u7C7B\u4E00\u6837\uFF0C\u4E5F\u662F\u4E00\u4E2A\u7C7B\uFF0C\u53EA\u4E0D\u8FC7\u5B83\u53EA\u5B9A\u4E49\u63A5\u53E3\uFF08method signature\uFF09\uFF0C\u4E0D\u5B9A\u4E49\u5B9E\u73B0\uFF0C\u56E0\u6B64\u53C8\u88AB\u79F0\u4E3A\u201C\u62BD\u8C61\u7C7B\u201D\u3002\u51E1\u662F\u7EE7\u627F\u4E8E Interface \u7684\u65B9\u6CD5\uFF0C\u90FD\u5FC5\u987B\u81EA\u5DF1\u5B9A\u4E49\u5B9E\u73B0\uFF0C\u5426\u5219\u5C31\u4F1A\u62A5\u9519\u3002\u8FD9\u6837\u5C31\u907F\u514D\u4E86\u591A\u91CD\u7EE7\u627F\u7684\u6700\u5927\u95EE\u9898\uFF1A\u591A\u4E2A\u7236\u7C7B\u7684\u540C\u540D\u65B9\u6CD5\u7684\u78B0\u649E\uFF08naming collision\uFF09\u3002</p><p>JavaScript \u8BED\u8A00\u6CA1\u6709\u91C7\u7528 Interface \u7684\u65B9\u6848\uFF0C\u800C\u662F\u901A\u8FC7\u4EE3\u7406\uFF08delegation\uFF09\u5B9E\u73B0\u4E86\u4ECE\u5176\u4ED6\u7C7B\u5F15\u5165\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Enumerable_first</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">first</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">Enumerable_first</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// explicit delegation</span>
list<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;foo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>list</code>\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u672C\u8EAB\u5E76\u6CA1\u6709<code>first</code>\u65B9\u6CD5\u3002\u901A\u8FC7<code>call</code>\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u628A<code>Enumerable_first</code>\u91CC\u9762\u7684\u65B9\u6CD5\uFF0C\u7ED1\u5B9A\u5230<code>list</code>\uFF0C\u4ECE\u800C<code>list</code>\u5C31\u5177\u6709<code>first</code>\u65B9\u6CD5\u3002\u8FD9\u5C31\u53EB\u505A\u201C\u4EE3\u7406\u201D\uFF08delegation\uFF09\uFF0C<code>list</code>\u5BF9\u8C61\u4EE3\u7406\u4E86<code>Enumerable_first</code>\u7684<code>first</code>\u65B9\u6CD5\u3002</p><h2 id="\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#\u542B\u4E49" aria-hidden="true">#</a> \u542B\u4E49</h2><p>Mixin \u8FD9\u4E2A\u540D\u5B57\u6765\u81EA\u4E8E\u51B0\u6DC7\u6DCB\uFF0C\u5728\u57FA\u672C\u53E3\u5473\u7684\u51B0\u6DC7\u6DCB\u4E0A\u9762\u6DF7\u5165\u5176\u4ED6\u53E3\u5473\uFF0C\u8FD9\u5C31\u53EB\u505A Mix-in\u3002</p><p>\u5B83\u5141\u8BB8\u5411\u4E00\u4E2A\u7C7B\u91CC\u9762\u6CE8\u5165\u4E00\u4E9B\u4EE3\u7801\uFF0C\u4F7F\u5F97\u4E00\u4E2A\u7C7B\u7684\u529F\u80FD\u80FD\u591F\u201C\u6DF7\u5165\u201D\u53E6\u4E00\u4E2A\u7C7B\u3002\u5B9E\u8D28\u4E0A\u662F\u591A\u91CD\u7EE7\u627F\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\uFF0C\u4F46\u662F\u907F\u514D\u4E86\u591A\u91CD\u7EE7\u627F\u7684\u590D\u6742\u6027\uFF0C\u800C\u4E14\u6709\u5229\u4E8E\u4EE3\u7801\u590D\u7528\u3002</p><p>Mixin \u5C31\u662F\u4E00\u4E2A\u6B63\u5E38\u7684\u7C7B\uFF0C\u4E0D\u4EC5\u5B9A\u4E49\u4E86\u63A5\u53E3\uFF0C\u8FD8\u5B9A\u4E49\u4E86\u63A5\u53E3\u7684\u5B9E\u73B0\u3002</p><p>\u5B50\u7C7B\u901A\u8FC7\u5728<code>this</code>\u5BF9\u8C61\u4E0A\u9762\u7ED1\u5B9A\u65B9\u6CD5\uFF0C\u8FBE\u5230\u591A\u91CD\u7EE7\u627F\u7684\u76EE\u7684\u3002</p><p>\u5F88\u591A\u5E93\u63D0\u4F9B\u4E86 Mixin \u529F\u80FD\u3002\u4E0B\u9762\u4EE5 Lodash \u4E3A\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">vowels</span><span class="token punctuation">(</span><span class="token parameter">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[aeiou]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
_<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">vowels</span><span class="token operator">:</span> vowels<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span><span class="token function">vowels</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u901A\u8FC7 Lodash \u5E93\u7684<code>_.mixin</code>\u65B9\u6CD5\uFF0C\u8BA9<code>obj</code>\u5BF9\u8C61\u7EE7\u627F\u4E86<code>vowels</code>\u65B9\u6CD5\u3002</p><p>Underscore \u7684\u7C7B\u4F3C\u65B9\u6CD5\u662F<code>_.extend</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fName<span class="token punctuation">,</span> lName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> fName<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> sam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Sam&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Lowry&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> NameMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">rename</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> last</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> first<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> last<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
_<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> NameMixin<span class="token punctuation">)</span><span class="token punctuation">;</span>
sam<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token string">&#39;Samwise&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Gamgee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sam<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Samwise Gamgee&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u901A\u8FC7<code>_.extend</code>\u65B9\u6CD5\uFF0C\u5728<code>sam</code>\u5BF9\u8C61\u4E0A\u9762\uFF08\u51C6\u786E\u8BF4\u662F\u5B83\u7684\u539F\u578B\u5BF9\u8C61<code>Person.prototype</code>\u4E0A\u9762\uFF09\uFF0C\u6DF7\u5165\u4E86<code>NameMixin</code>\u7C7B\u3002</p><p><code>extend</code>\u65B9\u6CD5\u7684\u5B9E\u73B0\u975E\u5E38\u7B80\u5355\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">destination<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      destination<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> destination<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5C06<code>source</code>\u5BF9\u8C61\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u6DFB\u52A0\u5230<code>destination</code>\u5BF9\u8C61\u3002</p><h2 id="trait" tabindex="-1"><a class="header-anchor" href="#trait" aria-hidden="true">#</a> Trait</h2><p>Trait \u662F\u53E6\u5916\u4E00\u79CD\u591A\u91CD\u7EE7\u627F\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5B83\u4E0E Mixin \u5F88\u76F8\u4F3C\uFF0C\u4F46\u662F\u6709\u4E00\u4E9B\u7EC6\u5FAE\u7684\u5DEE\u522B\u3002</p><ul><li>Mixin \u53EF\u4EE5\u5305\u542B\u72B6\u6001\uFF08state\uFF09\uFF0CTrait \u4E0D\u5305\u542B\uFF0C\u5373 Trait \u91CC\u9762\u7684\u65B9\u6CD5\u90FD\u662F\u4E92\u4E0D\u76F8\u5E72\uFF0C\u53EF\u4EE5\u7EBF\u6027\u5305\u542B\u7684\u3002\u6BD4\u5982\uFF0C<code>Trait1</code>\u5305\u542B\u65B9\u6CD5<code>A</code>\u548C<code>B</code>\uFF0C<code>Trait2</code>\u7EE7\u627F\u4E86<code>Trait1</code>\uFF0C\u540C\u65F6\u8FD8\u5305\u542B\u4E00\u4E2A\u81EA\u5DF1\u7684\u65B9\u6CD5<code>C</code>\uFF0C\u5B9E\u9645\u4E0A\u5C31\u7B49\u540C\u4E8E\u76F4\u63A5\u5305\u542B\u65B9\u6CD5<code>A</code>\u3001<code>B</code>\u3001<code>C</code>\u3002</li><li>\u5BF9\u4E8E\u540C\u540D\u65B9\u6CD5\u7684\u78B0\u649E\uFF0CMixin \u5305\u542B\u4E86\u89E3\u51B3\u89C4\u5219\uFF0CTrait \u5219\u662F\u62A5\u9519\u3002</li></ul>`,22);function m(b,f){const a=i("ExternalLinkIcon");return t(),p("div",null,[s("p",null,[u,s("a",r,[d,o(a)]),k]),v])}var g=e(l,[["render",m],["__file","mixin.html.vue"]]);export{g as default};
