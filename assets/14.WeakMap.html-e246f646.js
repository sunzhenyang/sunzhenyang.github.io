import{_ as r,Q as n,S as i,$ as s,a0 as e,a1 as a,a2 as t,a3 as o,C as p}from"./framework-3ab2aaf6.js";const d={},c={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",target:"_blank",rel:"noopener noreferrer"},h=o('<br><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><ul><li><p>WeakMap 对象是一组键/值对的集合，其中的键是弱引用的</p></li><li><p>其<strong>键必须是对象</strong>，而值可以是任意的</p></li><li><p>语法：<code>new WeakMap([iterable])</code></p></li><li><p>参数</p><ul><li>iterable：Iterable 是一个数组（二元数组）或者其他可迭代的且其元素是键值对的对象。每个键值对会被加到新的 WeakMap 里。null 会被当做 undefined</li></ul></li></ul><br><h2 id="weakmap-length" tabindex="-1"><a class="header-anchor" href="#weakmap-length" aria-hidden="true">#</a> WeakMap.length</h2><blockquote><p>值为 0</p></blockquote><br>',7),_={id:"weakmap-prototype-set",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#weakmap-prototype-set","aria-hidden":"true"},"#",-1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set",target:"_blank",rel:"noopener noreferrer"},b=o("<ul><li>描述：根据指定的 key 和 value 在 WeakMap 对象中添加新/更新元素</li><li>语法：<code>wm.set(key, value)</code></li><li>参数 <ul><li>key：<strong>必须是对象</strong>，是要在WeakMap 对象中添加元素的 key 部分</li><li>value：任意的值，是要在 WeakMap 对象中添加/元素的 value 部分。</li></ul></li><li>返回值：该WeakMap对象</li></ul><br>",2),f={id:"weakmap-prototype-get",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#weakmap-prototype-get","aria-hidden":"true"},"#",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get",target:"_blank",rel:"noopener noreferrer"},M=e("ul",null,[e("li",null,"描述：返回 WeakMap 指定的元素"),e("li",null,[a("语法："),e("code",null,"wm.get(key)")]),e("li",null,[a("参数 "),e("ul",null,[e("li",null,"key：要从 WeakMap 获取的元素的键")])]),e("li",null,"返回值：返回与指定键相关联的值，如果 WeakMap 对象找不到这个键则返回 undefined")],-1),y=e("br",null,null,-1),g={id:"weakmap-prototype-has",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#weakmap-prototype-has","aria-hidden":"true"},"#",-1),w={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has",target:"_blank",rel:"noopener noreferrer"},x=e("ul",null,[e("li",null,"描述：根据WeakMap对象的元素中是否存在 key 键返回一个boolean值"),e("li",null,[a("语法："),e("code",null,"wm.has(key)")]),e("li",null,[a("参数 "),e("ul",null,[e("li",null,"key：用来检测 WeakMap对象中是否存在元素的键为 key")])]),e("li",null,"返回值：如果指定的 key 存在于某个元素中则返回 true，否则返回flase")],-1),z=e("br",null,null,-1),N={id:"weakmap-prototype-delete",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#weakmap-prototype-delete","aria-hidden":"true"},"#",-1),S={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete",target:"_blank",rel:"noopener noreferrer"},j=e("ul",null,[e("li",null,"描述：移除 WeakMap 对象中指定的元素"),e("li",null,[a("语法："),e("code",null,"myMap.delete(key)")]),e("li",null,[a("参数 "),e("ul",null,[e("li",null,"key：需要删除的元素的键")])]),e("li",null,"返回值：如果成功删除，返回 true，否则返回 false")],-1);function G(J,O){const l=p("ExternalLinkIcon");return n(),i("div",null,[s(" more "),e("p",null,[e("a",c,[a("WeakMap"),t(l)])]),h,e("h2",_,[u,a(),e("a",k,[a("WeakMap.prototype.set()"),t(l)])]),b,e("h2",f,[W,a(),e("a",m,[a("WeakMap.prototype.get()"),t(l)])]),M,y,e("h2",g,[v,a(),e("a",w,[a("WeakMap.prototype.has()"),t(l)])]),x,z,e("h2",N,[C,a(),e("a",S,[a("WeakMap.prototype.delete()"),t(l)])]),j])}const V=r(d,[["render",G],["__file","14.WeakMap.html.vue"]]);export{V as default};
