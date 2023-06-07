import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as o,a as i,f as t}from"./app-d18dfe82.js";const r={},c=t('<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><blockquote><p>可以声明包、类、属性、方法、局部变量、方法参数等的前面</p><p>用来对这些元素进行说明、注释</p></blockquote><ul><li>按运行机制分类 <ul><li>源码注解：只在源码阶段保留，在编译阶段会被丢弃 <ul><li><strong><code>@Override</code></strong>：标注重写父类方法</li></ul></li><li>编译时注解：在编译时期保留，在加载 class 文件时会被丢弃 <ul><li><strong><code>@NotNull</code></strong>：空值检查</li></ul></li><li>运行时注解：在运行阶段还起作用，甚至会影响运行逻辑的注解 <ul><li><strong><code>@Autowired</code></strong>：依赖注入，自动将外部传入的数据加载进去</li></ul></li></ul></li><li>按来源分类 <ul><li>来自 JDK 的注解</li><li>来自第三方的注解</li><li>自定义的注解</li></ul></li></ul><h3 id="元注解" tabindex="-1"><a class="header-anchor" href="#元注解" aria-hidden="true">#</a> 元注解</h3><blockquote><p>定义注解的注解，对注解进行标注</p></blockquote><ul><li><code>@target：限定注解可以用于哪些地方</code></li></ul>',6);function a(d,u){return e(),o("div",null,[i(" more "),c])}const h=l(r,[["render",a],["__file","注解.html.vue"]]);export{h as default};
