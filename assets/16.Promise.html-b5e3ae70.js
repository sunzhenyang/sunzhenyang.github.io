import{_ as s,P as t,Q as n,Z as a,$ as e,a0 as l,a1 as r,a2 as i,F as c}from"./framework-0028f3de.js";const d={},h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},p=i('<br><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><ul><li><p>Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值</p></li><li><p>语法：<code>new Promise( function(resolve, reject) {...} /* executor */ );</code></p></li><li><p>参数</p><ul><li>executor：是带有 <code>resolve</code> 和 <code>reject</code> 两个参数的函数</li></ul></li></ul><br><h2 id="promise-length" tabindex="-1"><a class="header-anchor" href="#promise-length" aria-hidden="true">#</a> Promise.length</h2><blockquote><p>值总是为 1 (构造器参数的数目)</p></blockquote><br>',7),m={id:"promise-resolve",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#promise-resolve","aria-hidden":"true"},"#",-1),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve",target:"_blank",rel:"noopener noreferrer"},b=i("<ul><li>描述：返回一个以给定值解析后的 Promise 对象</li><li>语法：<code>Promise.resolve(reason)</code></li><li>参数 <ul><li>value：将被<code>Promise</code>对象解析的参数，也可以是一个<code>Promise</code>对象，或者是一个 thenable</li></ul></li><li>返回值：返回一个带着给定值解析过的Promise对象，如果参数本身就是一个Promise对象，则直接返回这个Promise对象</li></ul><br>",2),f={id:"promise-reject",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#promise-reject","aria-hidden":"true"},"#",-1),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject",target:"_blank",rel:"noopener noreferrer"},j=e("ul",null,[e("li",null,"描述：返回一个带有拒绝原因的 Promise 对象"),e("li",null,[l("语法："),e("code",null,"Promise.reject(reason)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,[l("reason：表示 "),e("code",null,"Promise"),l(" 被拒绝的原因")])])]),e("li",null,"返回值：一个给定原因了的被拒绝的 Promise")],-1),g=e("br",null,null,-1),x={id:"promise-race",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#promise-race","aria-hidden":"true"},"#",-1),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race",target:"_blank",rel:"noopener noreferrer"},k=e("ul",null,[e("li",null,"描述：返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝"),e("li",null,[l("语法："),e("code",null,"Promise.race(iterable)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"iterable：可迭代对象，类似Array")])]),e("li",null,"返回值：一个待定的 Promise 只要给定的迭代中的一个 promise 解决或拒绝，就采用第一个 promise 的值作为它的值")],-1),N=e("br",null,null,-1),S={id:"promise-all",tabindex:"-1"},R=e("a",{class:"header-anchor",href:"#promise-all","aria-hidden":"true"},"#",-1),C={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",target:"_blank",rel:"noopener noreferrer"},G=i("<ul><li><p>描述：方法返回一个 Promise 实例</p><ul><li>此实例在 <code>iterable</code> 参数内所有的 <code>promise</code> 都“完成（resolved）”或参数中不包含 <code>promise</code> 时回调完成（resolve）</li><li>如果参数中 <code>promise</code> 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 <code>promise</code> 的结果</li></ul></li><li><p>语法：<code>Promise.all(iterable)</code></p></li><li><p>参数</p><ul><li>iterable：一个可迭代对象，如 Array 或 String</li></ul></li><li><p>返回值</p><ul><li>如果传入的参数是一个空的可迭代对象，则返回一个已完成状态的 Promise</li><li>如果传入的参数不包含任何 promise，则返回一个异步完成 Promise。注意：Google Chrome 58 在这种情况下返回一个已完成（already resolved）状态的 Promise</li><li>其他情况下返回一个处理中（pending）的Promise，这个返回的 promise 之后会在所有的 promise 都完成或有一个 promise 失败时异步地变为完成或失败</li></ul></li><li><p>使用场景：通常在启动多个异步任务并发运行并为其结果创建承诺之后使用，以便人们可以等待所有任务完成。</p></li></ul><br>",2),J={id:"promise-allsettled",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#promise-allsettled","aria-hidden":"true"},"#",-1),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled",target:"_blank",rel:"noopener noreferrer"},F=i("<ul><li>描述：返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果</li><li>语法：<code>Promise.allSettled(iterable)</code></li><li>参数 <ul><li>iterable：一个可迭代的对象，例如Array，其中每个成员都是Promise</li></ul></li><li>返回值 <ul><li>一旦所指定的 promises 集合中每一个 promise 已经完成，无论是成功的达成或被拒绝，未决议的 Promise将被异步完成</li><li>返回的 promise 的处理器将传入一个数组作为输入，该数组包含原始 promises 集中每个 promise 的结果</li><li>每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value，果值为 <code>rejected</code>，则存在一个 <code>reason</code> 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值</li></ul></li><li>使用场景：当有多个彼此不依赖的异步任务成功完成时，或者总是想知道每个promise的结果时，通常使用它</li></ul><br>",2),V={id:"promise-prototype-then",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#promise-prototype-then","aria-hidden":"true"},"#",-1),B={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then",target:"_blank",rel:"noopener noreferrer"},E=e("ul",null,[e("li",null,"描述：返回一个 Promise"),e("li",null,[l("语法："),e("code",null,"p.then(onFulfilled[, onRejected])")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"onFulfilled：当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果，如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数"),e("li",null,'onRejected：当 Promise 变成拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因（rejection reason）。 如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数')])])],-1),q=e("br",null,null,-1),w={id:"promise-prototype-catch",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#promise-prototype-catch","aria-hidden":"true"},"#",-1),L={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch",target:"_blank",rel:"noopener noreferrer"},T=e("ul",null,[e("li",null,"描述：返回一个Promise，并且处理拒绝的情况"),e("li",null,[l("语法："),e("code",null,"p.catch(onRejected)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,[l("onRejected：当Promise 被rejected时,被调用的一个Function。 该函数拥有一个参数 "),e("ul",null,[e("li",null,"reason：rejection 的原因")])])])])],-1),Q=e("br",null,null,-1),Z={id:"promise-prototype-finally",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#promise-prototype-finally","aria-hidden":"true"},"#",-1),D={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally",target:"_blank",rel:"noopener noreferrer"},H=e("ul",null,[e("li",null,"描述：返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。避免了同样的语句需要在then()和catch()中各写一次的情况"),e("li",null,[l("语法："),e("code",null,"p.finally(onFinally)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"onFinally：Promise 结束后调用的Function")])])],-1);function K(M,U){const o=c("ExternalLinkIcon");return t(),n("div",null,[a(" more "),e("p",null,[e("a",h,[l("Promise"),r(o)])]),p,e("h2",m,[u,l(),e("a",_,[l("Promise.resolve()"),r(o)])]),b,e("h2",f,[P,l(),e("a",v,[l("Promise.reject()"),r(o)])]),j,g,e("h2",x,[y,l(),e("a",z,[l("Promise.race()"),r(o)])]),k,N,e("h2",S,[R,l(),e("a",C,[l("Promise.all()"),r(o)])]),G,e("h2",J,[O,l(),e("a",W,[l("Promise.allSettled()"),r(o)])]),F,e("h2",V,[A,l(),e("a",B,[l("Promise.prototype.then()"),r(o)])]),E,q,e("h2",w,[I,l(),e("a",L,[l("Promise.prototype.catch()"),r(o)])]),T,Q,e("h2",Z,[$,l(),e("a",D,[l("Promise.prototype.finally()"),r(o)])]),H])}const Y=s(d,[["render",K],["__file","16.Promise.html.vue"]]);export{Y as default};
