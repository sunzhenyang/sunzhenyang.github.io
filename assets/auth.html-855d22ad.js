import{_ as e,P as t,Q as p,$ as s,a0 as n,a1 as o,a2 as c,F as i}from"./framework-0028f3de.js";const l={},u=s("h2",{id:"需求分析",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#需求分析","aria-hidden":"true"},"#"),n(" 需求分析")],-1),r={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization",target:"_blank",rel:"noopener noreferrer"},d=c(`<p>axios 库也允许你在请求配置中配置 <code>auth</code> 属性，<code>auth</code> 是一个对象结构，包含 <code>username</code> 和 <code>password</code> 2 个属性。一旦用户在请求的时候配置这俩属性，我们就会自动往 HTTP 的 请求 header 中添加 <code>Authorization</code> 属性，它的值为 <code>Basic 加密串</code>。 这里的加密串是 <code>username:password</code> base64 加密后的结果。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/more/post&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  auth<span class="token operator">:</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token string">&#39;Yee&#39;</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>首先修改一下类型定义。</p><p><code>types/index.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  auth<span class="token operator">?</span><span class="token operator">:</span> AxiosBasicCredentials
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosBasicCredentials</span> <span class="token punctuation">{</span>
  username<span class="token operator">:</span> <span class="token builtin">string</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着修改合并规则，因为 auth 也是一个对象格式，所以它的合并规则是 <code>deepMergeStrat</code>。</p><p><code>core/mergeConfig.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> stratKeysDeepMerge <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;auth&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后修改发送请求前的逻辑。</p><p><code>core/xhr.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token comment">/*...*/</span>
  auth
<span class="token punctuation">}</span> <span class="token operator">=</span> config

<span class="token keyword">if</span> <span class="token punctuation">(</span>auth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  headers<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Basic &#39;</span> <span class="token operator">+</span> <span class="token function">btoa</span><span class="token punctuation">(</span>auth<span class="token punctuation">.</span>username <span class="token operator">+</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">+</span> auth<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo-编写" tabindex="-1"><a class="header-anchor" href="#demo-编写" aria-hidden="true">#</a> demo 编写</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/more/post&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  auth<span class="token operator">:</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token string">&#39;Yee&#39;</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，我们在 <code>server.js</code> 中对于这个路由接口写了一段小逻辑：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/more/post&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> auth <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization
  <span class="token keyword">const</span> <span class="token punctuation">[</span>type<span class="token punctuation">,</span> credentials<span class="token punctuation">]</span> <span class="token operator">=</span> auth<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">atob</span><span class="token punctuation">(</span>credentials<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>username<span class="token punctuation">,</span> password<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>credentials<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;Basic&#39;</span> <span class="token operator">&amp;&amp;</span> username <span class="token operator">===</span> <span class="token string">&#39;Yee&#39;</span> <span class="token operator">&amp;&amp;</span> password <span class="token operator">===</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;UnAuthorization&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这里我们需要安装第三方库 <code>atob</code> 实现 base64 串的解码。</p><p>至此，<code>ts-axios</code> 支持了 HTTP 授权功能，用户可以通过配置 auth 对象实现自动在请求 header 中添加 <code>Authorization</code> 属性。下一节课我们来实现自定义合法状态码功能。</p>`,18);function k(v,m){const a=i("ExternalLinkIcon");return t(),p("div",null,[u,s("p",null,[n("HTTP 协议中的 "),s("a",r,[n("Authorization"),o(a)]),n(" 请求 header 会包含服务器用于验证用户代理身份的凭证，通常会在服务器返回 401 Unauthorized 状态码以及 WWW-Authenticate 消息头之后在后续请求中发送此消息头。")]),d])}const h=e(l,[["render",k],["__file","auth.html.vue"]]);export{h as default};
