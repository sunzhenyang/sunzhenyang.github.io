import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as d,a as c,b as a,d as e,e as t,f as n}from"./app-a7d5173b.js";const o={},p=n(`<h2 id="全局方式" tabindex="-1"><a class="header-anchor" href="#全局方式" aria-hidden="true">#</a> 全局方式</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 TypeScript 版本</span>
tsc <span class="token parameter variable">-V</span>
tsc <span class="token parameter variable">-version</span>
tsc <span class="token parameter variable">--version</span>

<span class="token comment"># 编译为 JavaScript</span>
tsc 文件名
ts

<span class="token comment"># 查看帮助</span>
tec <span class="token parameter variable">-h</span>

<span class="token comment"># 新建 tsconfig.json</span>
tsc <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="局部方式" tabindex="-1"><a class="header-anchor" href="#局部方式" aria-hidden="true">#</a> 局部方式</h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="命令-1" tabindex="-1"><a class="header-anchor" href="#命令-1" aria-hidden="true">#</a> 命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 TypeScript 版本</span>
npx tsc <span class="token parameter variable">-V</span>
npx tsc <span class="token parameter variable">-version</span>
npx tsc <span class="token parameter variable">--version</span>

<span class="token comment"># 编译为 JavaScript</span>
npx tsc 文件名

<span class="token comment"># 查看帮助</span>
npx tsc <span class="token parameter variable">-h</span>

<span class="token comment"># 新建 tsconfig.json</span>
npx tsc <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><h3 id="ts-node" tabindex="-1"><a class="header-anchor" href="#ts-node" aria-hidden="true">#</a> ts-node</h3>`,12),v={href:"https://www.npmjs.com/package/ts-node",target:"_blank",rel:"noopener noreferrer"},m=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> ts-node

<span class="token comment"># 运行 TS 文件</span>
ts-node test.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function u(b,h){const s=r("ExternalLinkIcon");return l(),d("div",null,[c(" more "),p,a("blockquote",null,[a("p",null,[e("直接运行 TypeScript 文件 "),a("a",v,[e("【文档地址】"),t(s)])])]),m])}const g=i(o,[["render",u],["__file","install.html.vue"]]);export{g as default};
