import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,f as s}from"./app-a7325d6d.js";const t={},i=s(`<h2 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> useState</h2><blockquote><p>为函数组件引入可记忆的状态</p></blockquote><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useState } from &#39;react&#39;

const Home: React.FC = props =&gt; {
  const [count, setCount] = useState&lt;number&gt;(0)
  const handleClick = () =&gt; {
    setCount(count + 1)
  }
  return (
    &lt;&gt;
      &lt;h1&gt;Count：{count}&lt;/h1&gt;
      &lt;button onClick={handleClick}&gt;点击加一&lt;/button&gt;
    &lt;/&gt;
  )
}

export default Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h2><h2 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h2><h2 id="usecontext" tabindex="-1"><a class="header-anchor" href="#usecontext" aria-hidden="true">#</a> useContext</h2><h2 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h2><h2 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h2><h2 id="usereducer" tabindex="-1"><a class="header-anchor" href="#usereducer" aria-hidden="true">#</a> useReducer</h2><h2 id="自定义-hook" tabindex="-1"><a class="header-anchor" href="#自定义-hook" aria-hidden="true">#</a> 自定义 Hook</h2>`,10),d=[i];function r(c,l){return a(),n("div",null,d)}const h=e(t,[["render",r],["__file","02.Hooks.html.vue"]]);export{h as default};
