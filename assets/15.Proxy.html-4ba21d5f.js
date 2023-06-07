import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c as n,a as c,b as e,d as l,e as o,f as i}from"./app-d18dfe82.js";const s={},h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},p=i('<br><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><ul><li><p>描述：用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等</p></li><li><p>语法：<code>const p = new Proxy(target, handler)</code></p></li><li><p>参数</p><ul><li>target：被 Proxy 包装的目标对象，可以是任何类型的对象，包括原生数组，函数，甚至另一个代理</li><li>handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理的行为</li></ul></li></ul><br>',4),_={id:"proxy-revocable",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#proxy-revocable","aria-hidden":"true"},"#",-1),y={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable",target:"_blank",rel:"noopener noreferrer"},f=i("<ul><li>描述：创建一个可撤销的代理对象</li><li>语法：<code>Proxy.revocable(target, handler)</code></li><li>参数 <ul><li>target：将用 Proxy 封装的目标对象。可以是任何类型的对象，包括原生数组，函数，甚至可以是另外一个代理对象</li><li>handler：一个对象，其属性是一批可选的函数，这些函数定义了对应的操作被执行时代理的行为</li></ul></li><li>返回值：一个包含了代理对象本身和它的撤销方法的可撤销 Proxy 对象 <ul><li>proxy：表示新生成的代理对象本身，和用一般方式 <code>new Proxy(target, handler)</code> 创建的代理对象没什么不同，只是它可以被撤销掉</li><li>revoke：撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象</li></ul></li><li>注意：一旦某个代理对象被撤销，它将变得几乎完全不可调用，在它身上执行任何的可代理操作都会抛出 TypeError 异常（注意，可代理操作一共有 14 种，执行这 14 种操作以外的操作不会抛出异常）</li></ul><br>",2),b={id:"handler-get",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#handler-get","aria-hidden":"true"},"#",-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get",target:"_blank",rel:"noopener noreferrer"},P=i("<ul><li>描述：拦截对象读取属性的操作</li><li>参数 <ul><li>target：目标对象</li><li>property：被获取的属性名</li><li>property：Proxy 或者继承 Proxy 的对象</li></ul></li><li>返回值：可以返回任何值</li><li>拦截操作 <ul><li>访问属性</li><li>访问原型链上的属性</li><li><code>Reflect.get()</code></li></ul></li><li>注意：如果违背了以下的约束，proxy 会抛出 TypeError <ul><li>如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同</li><li>如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined</li></ul></li></ul><br>",2),v={id:"handler-set",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#handler-set","aria-hidden":"true"},"#",-1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set",target:"_blank",rel:"noopener noreferrer"},z=i("<ul><li>描述：拦截对象设置属性值的操作</li><li>参数 <ul><li>target：目标对象</li><li>property：将被设置的属性名或 Symbol</li><li>value：新属性值</li><li>property：Proxy 或者继承 Proxy 的对象</li></ul></li><li>返回值：返回一个布尔值 <ul><li>返回 true 代表属性设置成功</li><li>在严格模式下，如果 set() 方法返回 false，那么会抛出一个 TypeError 异常</li></ul></li><li>拦截操作 <ul><li>设置属性值</li><li>设置原型链上的属性值</li><li><code>Reflect.set()</code></li></ul></li><li>注意：如果违背了以下的约束，proxy 会抛出 TypeError <ul><li>若目标属性是一个不可写及不可配置的数据属性，则不能改变它的值</li><li>如果目标属性没有配置存储方法，即 [[Set]] 属性的是 undefined，则不能设置它的值</li><li>在严格模式下，如果 set() 方法返回 false，那么也会抛出一个 TypeError 异常</li></ul></li></ul><br>",2),O={id:"handler-has",tabindex:"-1"},R=e("a",{class:"header-anchor",href:"#handler-has","aria-hidden":"true"},"#",-1),w={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has",target:"_blank",rel:"noopener noreferrer"},j=i("<ul><li>描述：针对 <code>in</code> 操作符的代理方法</li><li>参数 <ul><li>target：目标对象</li><li>prop：需要检查是否存在的属性</li></ul></li><li>返回值：返回一个 boolean 属性的值</li><li>拦截操作 <ul><li>属性查询: <code>foo in proxy</code></li><li>继承属性查询: <code>foo in Object.create(proxy)</code></li><li>with 检查 <code>with(proxy) { (foo); }</code></li><li><code>Reflect.has()</code></li></ul></li><li>注意：如果违背了以下的约束，proxy 会抛出 TypeError <ul><li>如果目标对象的某一属性本身不可被配置，则该属性不能够被代理隐藏</li><li>如果目标对象为不可扩展对象，则该对象的属性不能够被代理隐藏</li></ul></li></ul><br>",2),N={id:"handler-ownkeys",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#handler-ownkeys","aria-hidden":"true"},"#",-1),E={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys",target:"_blank",rel:"noopener noreferrer"},T=i("<ul><li>描述：用于拦截 <code>Reflect.ownKeys()</code></li><li>参数 <ul><li>target：目标对象</li></ul></li><li>返回值：必须返回一个可枚举对象</li><li>拦截操作 <ul><li><code>Object.getOwnPropertyNames()</code></li><li><code> Object.getOwnPropertySymbols()</code></li><li><code>Object.keys()</code></li><li><code>Reflect.ownKeys()</code></li></ul></li><li>注意：如果违背了以下的约束，proxy 会抛出 TypeError <ul><li><code>ownKeys</code> 的结果必须是一个数组</li><li>数组的元素类型要么是一个 String ，要么是一个 Symbol</li><li>结果列表必须包含目标对象的所有不可配置（non-configurable ）、自有（own）属性的key</li><li>如果目标对象不可扩展，那么结果列表必须包含目标对象的所有自有（own）属性的key，不能有其它值</li></ul></li></ul><br>",2),C={id:"handler-defineproperty",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#handler-defineproperty","aria-hidden":"true"},"#",-1),J={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty",target:"_blank",rel:"noopener noreferrer"},W=i("<ul><li>描述：用于拦截对对象的 <code>Object.defineProperty()</code>操作</li><li>参数 <ul><li>target：目标对象</li><li>property：待检索其描述的属性名</li><li>descriptor：待定义或修改的属性的描述符</li></ul></li><li>返回值：必须以一个 Boolean 返回，表示定义该属性的操作成功与否</li><li>拦截操作 <ul><li><code>Object.defineProperty()</code></li><li><code> Reflect.defineProperty()</code></li></ul></li><li>注意：如果违背了以下的约束，proxy 会抛出 TypeError <ul><li>如果目标对象不可扩展， 将不能添加属性</li><li>不能添加或者修改一个属性为不可配置的，如果它不作为一个目标对象的不可配置的属性存在的话</li><li>如果目标对象存在一个对应的可配置属性，这个属性可能不会是不可配置的</li><li>如果一个属性在目标对象中存在对应的属性，那么 <code>Object.defineProperty(target, prop, descriptor)</code> 将不会抛出异常</li><li>在严格模式下， false 作为 <code>handler.defineProperty</code> 方法的返回值的话将会抛出 TypeError 异常</li></ul></li></ul><br>",2),B={id:"handler-deleteproperty",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#handler-deleteproperty","aria-hidden":"true"},"#",-1),V={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty",target:"_blank",rel:"noopener noreferrer"},L=i("<ul><li>描述：用于拦截对对象属性的 <code>delete</code> 操作</li><li>参数 <ul><li>target：目标对象</li><li>property：待删除的属性名</li></ul></li><li>返回值：必须返回一个 <code>Boolean</code> 类型的值，表示了该属性是否被成功删除</li><li>拦截操作 <ul><li>删除属性 <code>delete proxy[foo]</code> 和 <code>delete proxy.foo</code></li><li><code> Reflect.deleteProperty()</code></li></ul></li><li>注意：如果违背了以下的约束，proxy 会抛出 TypeError <ul><li>如果目标对象的属性是不可配置的，那么该属性不能被删除</li></ul></li></ul><br>",2),F={id:"handler-apply",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#handler-apply","aria-hidden":"true"},"#",-1),A={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply",target:"_blank",rel:"noopener noreferrer"},q=i("<ul><li>描述：用于拦截函数的调用</li><li>参数 <ul><li>target：目标对象（函数）</li><li>thisArg：被调用时的上下文对象</li><li>argumentsList：被调用时的参数数组</li></ul></li><li>返回值：可以返回任何值</li><li>拦截操作 <ul><li><code>proxy(...args)</code></li><li><code> Function.prototype.apply()</code> 和 <code> Function.prototype.call()</code></li><li><code> Reflect.apply()</code></li></ul></li><li>注意：如果违背了以下的约束，proxy 会抛出 TypeError <ul><li>target必须是可被调用的。也就是说，它必须是一个函数对象</li></ul></li></ul><br>",2),D={id:"handler-construct",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#handler-construct","aria-hidden":"true"},"#",-1),M={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct",target:"_blank",rel:"noopener noreferrer"},Q=i("<ul><li>描述：用于拦截 <code> new</code> 操作符</li><li>参数 <ul><li>target：目标对象（函数）</li><li>argumentsList：constructor 的参数列表</li><li>newTarget：最初被调用的构造函数</li></ul></li><li>返回值：必须返回一个对象</li><li>拦截操作 <ul><li><code>new proxy(...args)</code></li><li><code>Reflect.construct()</code></li></ul></li><li>注意：如果违背了以下的约束，proxy 会抛出 TypeError <ul><li>必须返回一个对象</li></ul></li></ul>",1);function U(X,Y){const r=a("ExternalLinkIcon");return d(),n("div",null,[c(" more "),e("p",null,[e("a",h,[l("Proxy"),o(r)])]),p,e("h2",_,[u,l(),e("a",y,[l("Proxy.revocable()"),o(r)])]),f,e("h2",b,[x,l(),e("a",g,[l("handler.get()"),o(r)])]),P,e("h2",v,[m,l(),e("a",k,[l("handler.set()"),o(r)])]),z,e("h2",O,[R,l(),e("a",w,[l("handler.has()"),o(r)])]),j,e("h2",N,[S,l(),e("a",E,[l("handler.ownKeys()"),o(r)])]),T,e("h2",C,[G,l(),e("a",J,[l("handler.defineProperty()"),o(r)])]),W,e("h2",B,[K,l(),e("a",V,[l("handler.deleteProperty()"),o(r)])]),L,e("h2",F,[I,l(),e("a",A,[l("handler.apply()"),o(r)])]),q,e("h2",D,[H,l(),e("a",M,[l("handler.construct()"),o(r)])]),Q])}const ee=t(s,[["render",U],["__file","15.Proxy.html.vue"]]);export{ee as default};
