import{_ as p,o,c as r,a as n,b as t,d as s,e,r as l}from"./app.5b67e1df.js";const i={},c=n("h2",{id:"eslint",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint","aria-hidden":"true"},"#"),s(" ESLint")],-1),u=s("\u4EE3\u7801\u683C\u5F0F\u68C0\u6D4B\u5DE5\u5177"),k={href:"https://eslint.bootcss.com/docs/user-guide/configuring",target:"_blank",rel:"noopener noreferrer"},d=s("\u3010\u4E2D\u6587\u914D\u7F6E\u6587\u6863\u3011"),v=e(`<p>\u9ED8\u8BA4\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>

<span class="token comment">// ESLint \u914D\u7F6E\u6587\u4EF6\u9075\u5FAA commonJS \u7684\u5BFC\u51FA\u89C4\u5219\uFF0C\u6240\u5BFC\u51FA\u7684\u5BF9\u8C61\u5C31\u662F ESLint \u7684\u914D\u7F6E\u5BF9\u8C61</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  
  <span class="token comment">// \u8868\u793A\u5F53\u524D\u76EE\u5F55\u5373\u4E3A\u6839\u76EE\u5F55\uFF0CESLint \u89C4\u5219\u5C06\u88AB\u9650\u5236\u5230\u8BE5\u76EE\u5F55\u4E0B</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// env \u8868\u793A\u542F\u7528 ESLint \u68C0\u6D4B\u7684\u73AF\u5883</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728 node \u73AF\u5883\u4E0B\u542F\u52A8 ESLint \u68C0\u6D4B</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// ESLint \u4E2D\u57FA\u7840\u914D\u7F6E\u9700\u8981\u7EE7\u627F\u7684\u914D\u7F6E</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@vue/standard&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  
  <span class="token comment">// \u89E3\u6790\u5668</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// \u9700\u8981\u4FEE\u6539\u7684\u542F\u7528\u89C4\u5219\u53CA\u5176\u5404\u81EA\u7684\u9519\u8BEF\u7EA7\u522B</span>
  <span class="token doc-comment comment">/**
   * \u9519\u8BEF\u7EA7\u522B\u5206\u4E3A\u4E09\u79CD\uFF1A
   * &quot;off&quot; \u6216 0 - \u5173\u95ED\u89C4\u5219
   * &quot;warn&quot; \u6216 1 - \u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u8B66\u544A\u7EA7\u522B\u7684\u9519\u8BEF\uFF1Awarn (\u4E0D\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u9000\u51FA)
   * &quot;error&quot; \u6216 2 - \u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u9519\u8BEF\u7EA7\u522B\u7684\u9519\u8BEF\uFF1Aerror (\u5F53\u88AB\u89E6\u53D1\u7684\u65F6\u5019\uFF0C\u7A0B\u5E8F\u4F1A\u9000\u51FA)
   */</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;warn&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-debugger&quot;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;warn&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">vars</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token string">&quot;after-used&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">ignoreRestSiblings</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2>`,3),m=s("\u4EE3\u7801\u683C\u5F0F\u5316\u63D2\u4EF6"),q={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},b=s("\u3010\u5B98\u65B9\u7F51\u7AD9\u3011"),y=s(),g={href:"http://events.jianshu.io/p/18999f6e1668",target:"_blank",rel:"noopener noreferrer"},f=s("\u3010\u76F8\u5173\u6587\u7AE0\u3011"),h=e(`<p>\u5E38\u7528\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .prettierrc</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;proseWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;eslintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;jsxBracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;stylelintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;tslintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> VSCode</h2><p>\u5E38\u7528\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u7F16\u8F91\u5668\u914D\u7F6E
   */</span>
  <span class="token comment">// \u7F16\u8F91\u5668\u5B57\u4F53\u5927\u5C0F</span>
  <span class="token string-property property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-icons&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[css]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;security.workspace.trust.untrustedFiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;emmet.preferences&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;html.format.contentUnformatted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.inlineSuggest.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;github.copilot.enable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;yaml&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;plaintext&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;markdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;vsicons.dontShowNewVersionMessage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;terminal.integrated.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;terminal.integrated.fontWeightBold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.maxTokenizationLineLength&quot;</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.semanticTokenColorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    
  <span class="token string-property property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u7F29\u8FDB\u7A7A\u683C\u6570</span>
  <span class="token string-property property">&quot;prettier.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u7F29\u8FDB\u4E0D\u4F7F\u7528tab\uFF0C\u4F7F\u7528\u7A7A\u683C</span>
  <span class="token string-property property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u53E5\u5C3E\u6DFB\u52A0\u5206\u53F7</span>
  <span class="token string-property property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528\u5355\u5F15\u53F7\u4EE3\u66FF\u53CC\u5F15\u53F7</span>
  <span class="token string-property property">&quot;prettier.proseWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u3002\u56E0\u4E3A\u4F7F\u7528\u4E86\u4E00\u4E9B\u6298\u884C\u654F\u611F\u578B\u7684\u6E32\u67D3\u5668\uFF08\u5982GitHub comment\uFF09\u800C\u6309\u7167markdown\u6587\u672C\u6837\u5F0F\u8FDB\u884C\u6298\u884C</span>
  <span class="token string-property property">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span> <span class="token comment">//  (x) =&gt; {} \u7BAD\u5934\u51FD\u6570\u53C2\u6570\u53EA\u6709\u4E00\u4E2A\u65F6\u662F\u5426\u8981\u6709\u5C0F\u62EC\u53F7\u3002avoid\uFF1A\u7701\u7565\u62EC\u53F7</span>
  <span class="token string-property property">&quot;prettier.bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5728\u5BF9\u8C61\uFF0C\u6570\u7EC4\u62EC\u53F7\u4E0E\u6587\u5B57\u4E4B\u95F4\u52A0\u7A7A\u683C &quot;{ foo: bar }&quot;</span>
  <span class="token comment">// &quot;prettier.disableLanguages&quot;: [&quot;vue&quot;], // \u4E0D\u683C\u5F0F\u5316vue\u6587\u4EF6\uFF0Cvue\u6587\u4EF6\u7684\u683C\u5F0F\u5316\u5355\u72EC\u8BBE\u7F6E</span>
  <span class="token string-property property">&quot;prettier.endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u7ED3\u5C3E\u662F \\n \\r \\n\\r auto</span>
  <span class="token comment">// &quot;prettier.eslintIntegration&quot;: false, //\u4E0D\u8BA9prettier\u4F7F\u7528eslint\u7684\u4EE3\u7801\u683C\u5F0F\u8FDB\u884C\u6821\u9A8C</span>
  <span class="token string-property property">&quot;prettier.htmlWhitespaceSensitivity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u5305\u88F9\u6587\u5B57\u65F6\u5019\u7ED3\u675F\u6807\u7B7E\u7684\u7ED3\u5C3E\u5C16\u62EC\u53F7\u6389\u5230\u4E86\u4E0B\u4E00\u884C</span>
  <span class="token string-property property">&quot;prettier.ignorePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.prettierignore&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u4F7F\u7528prettier\u683C\u5F0F\u5316\u7684\u6587\u4EF6\u586B\u5199\u5728\u9879\u76EE\u7684.prettierignore\u6587\u4EF6\u4E2D</span>
  <span class="token comment">// &quot;prettier.jsxBracketSameLine&quot;: false, // \u5728jsx\u4E2D\u628A&#39;&gt;&#39; \u662F\u5426\u5355\u72EC\u653E\u4E00\u884C</span>
  <span class="token string-property property">&quot;prettier.bracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5728jsx\u4E2D\u628A&#39;&gt;&#39; \u662F\u5426\u5355\u72EC\u653E\u4E00\u884C</span>
  <span class="token string-property property">&quot;prettier.jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5728jsx\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u4EE3\u66FF\u53CC\u5F15\u53F7</span>
  <span class="token comment">// &quot;prettier.parser&quot;: &quot;babylon&quot;, // \u683C\u5F0F\u5316\u7684\u89E3\u6790\u5668\uFF0C\u9ED8\u8BA4\u662Fbabylon</span>
  <span class="token string-property property">&quot;prettier.requireConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Require a &#39;prettierconfig&#39; to format prettier</span>
  <span class="token comment">// &quot;prettier.stylelintIntegration&quot;: false, //\u4E0D\u8BA9prettier\u4F7F\u7528stylelint\u7684\u4EE3\u7801\u683C\u5F0F\u8FDB\u884C\u6821\u9A8C</span>
  <span class="token string-property property">&quot;prettier.trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u4F18\u5316CPU\u5360\u7528\u7387\u9AD8\u7684\u95EE\u9898</span>
  <span class="token string-property property">&quot;search.followSymlinks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;**/.git&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/.svn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/.hg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/CVS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/.DS_Store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/tmp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/node_modules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/bower_components&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/dist&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files.watcherExclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;**/.git/objects/**&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/.git/subtree-cache/**&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/node_modules/**&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/tmp/**&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/bower_components/**&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;**/dist/**&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function _(S,x){const a=l("ExternalLinkIcon");return o(),r("div",null,[c,n("blockquote",null,[n("p",null,[u,n("a",k,[d,t(a)])])]),v,n("blockquote",null,[n("p",null,[m,n("a",q,[b,t(a)]),y,n("a",g,[f,t(a)])])]),h])}var w=p(i,[["render",_],["__file","standard.html.vue"]]);export{w as default};
