import{_ as i,P as r,Q as t,Z as d,$ as e,a0 as a,a1 as c,a2 as s,F as l}from"./framework-6c45d443.js";const o={},p=s(`<h2 id="全局安装" tabindex="-1"><a class="header-anchor" href="#全局安装" aria-hidden="true">#</a> 全局安装</h2><p>命令行运行如下命令，全局安装 TypeScript：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><h3 id="查看-typescript-版本" tabindex="-1"><a class="header-anchor" href="#查看-typescript-版本" aria-hidden="true">#</a> 查看 TypeScript 版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">-V</span>
tsc <span class="token parameter variable">-version</span>
tsc <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译为-javascript" tabindex="-1"><a class="header-anchor" href="#编译为-javascript" aria-hidden="true">#</a> 编译为 JavaScript</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc test.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><h3 id="ts-node" tabindex="-1"><a class="header-anchor" href="#ts-node" aria-hidden="true">#</a> ts-node</h3>`,10),h={href:"https://www.npmjs.com/package/ts-node",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> ts-node

<span class="token comment"># 运行 TS 文件</span>
ts-node test.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function u(m,b){const n=l("ExternalLinkIcon");return r(),t("div",null,[d(" more "),p,e("blockquote",null,[e("p",null,[a("直接运行 TypeScript 文件 "),e("a",h,[a("【文档地址】"),c(n)])])]),v])}const g=i(o,[["render",u],["__file","install.html.vue"]]);export{g as default};