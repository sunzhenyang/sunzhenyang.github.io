import{_ as n,P as t,Q as a,Z as i,$ as e,a0 as r,a1 as l,a2 as s,C as c}from"./framework-f3782457.js";const d={},_={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error",target:"_blank",rel:"noopener noreferrer"},h=s("<br><blockquote><p>错误对象是一种特殊的基本对象。它们拥有基本的 Error 类型，同时也有多种具体的错误类型</p></blockquote><ul><li><p>描述：通过 <strong>Error</strong> 的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出</p></li><li><p>语法：<code>new Error([message[, fileName[,lineNumber]]])</code></p></li><li><p>参数</p><ul><li>message：人类可阅读的错误描述信息</li><li>fileName：被创建的 Error 对象的 fileName 属性值。默认是调用Error构造器代码所在的文件的名字</li><li>lineNumber：被创建的Error对象的lineNumber属性值。默认是调用Error构造器代码所在的文件的行号</li></ul></li><li><p>属性</p><ul><li><code>EvalError.prototype.message</code>：人类可阅读的错误描述信息</li><li><code>EvalError.prototype.fileName</code>：引发错误的文件路径</li><li><code>EvalError.prototype.lineNumber</code>：引发错误所在行</li><li><code>EvalError.prototype.columnNumber</code>：引发错误所在的列</li><li><code>EvalError.prototype.stack</code>：堆栈</li></ul></li></ul><br>",4),u={id:"evalerror",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#evalerror","aria-hidden":"true"},"#",-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError",target:"_blank",rel:"noopener noreferrer"},f=e("ul",null,[e("li",null,"描述：代表了一个关于 eval 函数的错误，此异常不再会被 JavaScript 抛出，但是EvalError对象仍然保持兼容性"),e("li",null,[r("语法："),e("code",null,"new EvalError([message[, fileName[, lineNumber]]])")])],-1),m=e("br",null,null,-1),E={id:"rangeerror",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#rangeerror","aria-hidden":"true"},"#",-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError",target:"_blank",rel:"noopener noreferrer"},v=e("ul",null,[e("li",null,"描述：标明一个错误，当一个值不在其所允许的范围或者集合中"),e("li",null,[r("语法："),e("code",null,"new RangeError([message[, fileName[, lineNumber]]])")])],-1),x=e("br",null,null,-1),R={id:"referenceerror",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#referenceerror","aria-hidden":"true"},"#",-1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError",target:"_blank",rel:"noopener noreferrer"},z=e("ul",null,[e("li",null,"描述：代表当一个不存在的变量被引用时发生的错误"),e("li",null,[r("语法："),e("code",null,"new ReferenceError([message[, fileName[, lineNumber]]])")])],-1),S=e("br",null,null,-1),C={id:"syntaxerror",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#syntaxerror","aria-hidden":"true"},"#",-1),j={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError",target:"_blank",rel:"noopener noreferrer"},w=e("ul",null,[e("li",null,"描述：代表尝试解析语法上不合法的代码的错误"),e("li",null,[r("语法："),e("code",null,"new SyntaxError([message[, fileName[, lineNumber]]])")])],-1),G=e("br",null,null,-1),O={id:"typeerror",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#typeerror","aria-hidden":"true"},"#",-1),I={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError",target:"_blank",rel:"noopener noreferrer"},V=e("ul",null,[e("li",null,"描述：代表尝试解析语法上不合法的代码的错误"),e("li",null,[r("语法："),e("code",null,"new TypeError([message[, fileName[, lineNumber]]])")])],-1),T=e("br",null,null,-1),U={id:"urierror",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#urierror","aria-hidden":"true"},"#",-1),q={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError",target:"_blank",rel:"noopener noreferrer"},L=e("ul",null,[e("li",null,"描述：表示以一种错误的方式使用全局URI处理函数而产生的错误"),e("li",null,[r("语法："),e("code",null,"new URIError([message[, fileName[, lineNumber]]])")])],-1);function P(Q,Z){const o=c("ExternalLinkIcon");return t(),a("div",null,[i(" more "),e("p",null,[e("a",_,[r("Error"),l(o)])]),h,e("h2",u,[p,r(),e("a",b,[r("EvalError"),l(o)])]),f,m,e("h2",E,[N,r(),e("a",g,[r("RangeError"),l(o)])]),v,x,e("h2",R,[y,r(),e("a",k,[r("ReferenceError"),l(o)])]),z,S,e("h2",C,[J,r(),e("a",j,[r("SyntaxError"),l(o)])]),w,G,e("h2",O,[W,r(),e("a",I,[r("TypeError"),l(o)])]),V,T,e("h2",U,[B,r(),e("a",q,[r("URIError"),l(o)])]),L])}const A=n(d,[["render",P],["__file","18.Error.html.vue"]]);export{A as default};
