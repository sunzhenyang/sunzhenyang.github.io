import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as s,a,b as e,d as l,e as o,f as r}from"./app-BybQgHW9.js";const b={},p={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"},d=r("<br><p>在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Objet.prototype继承属性和方法。Object 构造函数为给定值创建一个对象包装器，当以非构造函数形式被调用时，Object 的行为等同于 <code>new Object()</code></p><ul><li>Object 构造函数，会根据给定的参数创建对象 <ul><li>如果给定值是 <code>null</code> 或 <code>undefined</code>，将会创建并返回一个空对象</li><li>如果传进去的是一个基本类型的值，则会构造其包装类型的对象</li><li>如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址</li></ul></li></ul><br>",4),u={id:"object-create",tabindex:"-1"},h={class:"header-anchor",href:"#object-create"},j={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create",target:"_blank",rel:"noopener noreferrer"},_=r("<ul><li>描述：创建一个新对象，使用现有的对象来提供新创建的对象的 <code>__proto__</code></li><li>语法：<code>Object.create(proto[, propertiesObject])</code></li><li>参数 <ul><li>proto：新创建对象的原型对象</li><li>propertiesObject：如果没有指定为 undefined，则是要添加到新创建对象的不可枚举（默认）属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。</li></ul></li><li>返回值：一个新对象，带着指定的原型对象和属性</li><li>注意 <ul><li>如果propertiesObject参数是 null 或非原始包装对象，则抛出一个 TypeError 异常</li></ul></li></ul><br>",2),f={id:"object-assign",tabindex:"-1"},O={class:"header-anchor",href:"#object-assign"},g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"},y=r("<ul><li><p>描述：用于将所有可枚举属性的值从一个或多个源对象复制到目标对象</p></li><li><p>语法：<code>Object.assign(target, ...sources)</code></p></li><li><p>参数</p><ul><li>target：目标对象</li><li>sources：源对象</li></ul></li><li><p>返回值：目标对象</p></li><li><p>注意</p><ul><li>如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖</li><li>后面的源对象的属性将类似地覆盖前面的源对象的属性</li><li>只会拷贝源对象自身的并且可枚举的属性到目标对象（<strong>浅拷贝</strong>）</li></ul></li></ul><br>",2),m={id:"object-defineproperty",tabindex:"-1"},v={class:"header-anchor",href:"#object-defineproperty"},z={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"},k=r("<ul><li>描述：直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象</li><li>语法：<code>Object.defineProperty(obj, prop, descriptor)</code></li><li>参数 <ul><li>obj：在其上定义或修改属性的对象</li><li>props：要定义或修改的属性的名称或 Symbol</li><li>descriptor：要定义或修改的属性描述符 <ul><li>共享 <ul><li><code>configurable</code>：当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除 <strong>默认为</strong> <strong><code>false</code></strong></li><li><code>enumerable</code>：当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中 <strong>默认为</strong> <strong><code>false</code></strong></li></ul></li><li>数据描述符（数据属性） <ul><li><code>value</code>：该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）<strong>默认为 <code>undefined</code></strong></li><li><code>writable</code>：当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变 <strong>默认为 <code>false</code></strong></li></ul></li><li>存取描述符（访问器属性） <ul><li><code>get</code>：属性的 getter 函数 <ul><li>如果没有 getter，则为 <code>undefined</code>。当访问该属性时，会调用此函数。</li><li>执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值 <strong>默认为 <code>undefined</code></strong></li></ul></li><li><code>set</code>：属性的 setter 函数 <ul><li>如果没有 setter，则为 <code>undefined</code>。当属性值被修改时，会调用此函数</li><li>该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 <code>this</code> 对象。<br><strong>默认为 <code>undefined</code></strong>。</li></ul></li></ul></li></ul></li></ul></li><li>返回值：被传递给函数的对象</li></ul><br>",2),S={id:"object-defineproperties",tabindex:"-1"},N={class:"header-anchor",href:"#object-defineproperties"},w={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties",target:"_blank",rel:"noopener noreferrer"},x=e("ul",null,[e("li",null,"描述：直接在一个对象上定义新的属性或修改现有属性，并返回该对象"),e("li",null,[l("语法："),e("code",null,"Object.defineProperties(obj, props)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：在其上定义或修改属性的对象"),e("li",null,[l("props：源要定义其可枚举属性或修改的属性描述符的对象，参阅上方 "),e("code",null,"Object.defineProperty()")])])]),e("li",null,"返回值：传递给函数的对象")],-1),P=e("br",null,null,-1),J={id:"object-getownpropertydescriptor",tabindex:"-1"},C={class:"header-anchor",href:"#object-getownpropertydescriptor"},R={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor",target:"_blank",rel:"noopener noreferrer"},W=e("ul",null,[e("li",null,"描述：返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）"),e("li",null,[l("语法："),e("code",null,"Object.getOwnPropertyDescriptor(obj, prop)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：需要查找的目标对象"),e("li",null,"props：目标对象内属性名称")])]),e("li",null,"返回值：如果指定的属性存在于对象上，则返回其属性描述符对象，否则返回 undefined。")],-1),E=e("br",null,null,-1),G={id:"object-getownpropertydescriptors",tabindex:"-1"},D={class:"header-anchor",href:"#object-getownpropertydescriptors"},T={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors",target:"_blank",rel:"noopener noreferrer"},B=e("ul",null,[e("li",null,"描述：获取一个对象的所有自身属性的描述符"),e("li",null,[l("语法："),e("code",null,"Object.getOwnPropertyDescriptors(obj)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：需要查找的目标对象")])]),e("li",null,"返回值：所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象")],-1),I=e("br",null,null,-1),q={id:"object-getownpropertynames",tabindex:"-1"},M={class:"header-anchor",href:"#object-getownpropertynames"},V={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",target:"_blank",rel:"noopener noreferrer"},F=e("ul",null,[e("li",null,"描述：返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组"),e("li",null,[l("语法："),e("code",null,"Object.getOwnPropertyNames(obj)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：一个对象，其自身的可枚举和不可枚举属性的名称被返回")])]),e("li",null,"返回值：在给定对象上找到的自身属性对应的字符串数组")],-1),L=e("br",null,null,-1),Y={id:"object-getownpropertysymbols",tabindex:"-1"},Z={class:"header-anchor",href:"#object-getownpropertysymbols"},A={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols",target:"_blank",rel:"noopener noreferrer"},H=e("ul",null,[e("li",null,"描述：返回一个给定对象自身的所有 Symbol 属性的数组"),e("li",null,[l("语法："),e("code",null,"Object.getOwnPropertySymbols(obj)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：要返回 Symbol 属性的对象")])]),e("li",null,"返回值：在给定对象自身上找到的所有 Symbol 属性的数组")],-1),K=e("br",null,null,-1),Q={id:"object-getprototypeof",tabindex:"-1"},U={class:"header-anchor",href:"#object-getprototypeof"},X={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf",target:"_blank",rel:"noopener noreferrer"},$=e("ul",null,[e("li",null,[l("描述：返回指定对象的原型（内部 "),e("code",null,"[[Prototype]]"),l(" 属性的值）")]),e("li",null,[l("语法："),e("code",null,"Object.getPrototypeOf(object)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：要返回其原型的对象")])]),e("li",null,"返回值：给定对象的原型。如果没有继承属性，则返回 null")],-1),ee=e("br",null,null,-1),le={id:"object-entries",tabindex:"-1"},te={class:"header-anchor",href:"#object-entries"},oe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",target:"_blank",rel:"noopener noreferrer"},re=e("ul",null,[e("li",null,"描述：返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）"),e("li",null,[l("语法："),e("code",null,"Object.entries(obj)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：可以返回其可枚举属性的键值对的对象")])]),e("li",null,"返回值：给定对象自身可枚举属性的键值对数组，若没有这返回空数组")],-1),ne=e("br",null,null,-1),ie={id:"object-keys",tabindex:"-1"},ce={class:"header-anchor",href:"#object-keys"},se={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",target:"_blank",rel:"noopener noreferrer"},ae=e("ul",null,[e("li",null,"描述：返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致"),e("li",null,[l("语法："),e("code",null,"Object.keys(obj)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：要返回其枚举自身属性的对象")])]),e("li",null,"返回值：一个表示给定对象的所有可枚举属性的字符串数组")],-1),be=e("br",null,null,-1),pe={id:"object-values",tabindex:"-1"},de={class:"header-anchor",href:"#object-values"},ue={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values",target:"_blank",rel:"noopener noreferrer"},he=e("ul",null,[e("li",null,"描述：返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )"),e("li",null,[l("语法："),e("code",null,"Object.values(obj)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：要返回其枚举自身属性的对象")])]),e("li",null,"返回值：一个表示给定对象的所有可枚举属性的字符串数组")],-1),je=e("br",null,null,-1),_e={id:"object-fromentries",tabindex:"-1"},fe={class:"header-anchor",href:"#object-fromentries"},Oe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries",target:"_blank",rel:"noopener noreferrer"},ge=e("ul",null,[e("li",null,"描述：把键值对列表转换为一个对象"),e("li",null,[l("语法："),e("code",null,"Object.fromEntries(iterable)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"iterable：类似 Array 、 Map 或者其它实现了可迭代协议的可迭代对象")])]),e("li",null,"返回值：一个由该迭代对象条目提供对应属性的新对象")],-1),ye=e("br",null,null,-1),me={id:"object-is",tabindex:"-1"},ve={class:"header-anchor",href:"#object-is"},ze={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is",target:"_blank",rel:"noopener noreferrer"},ke=r("<ul><li><p>描述：判断两个值是否为同一个值</p><ul><li>都是 undefined</li><li>都是 null</li><li>都是 true 或 false</li><li>都是相同长度的字符串且相同字符按相同顺序排列</li><li>都是相同对象（意味着每个对象有同一个引用）</li><li>都是数字且 <ul><li>都是 +0</li><li>都是 -0</li><li>都是 NaN</li><li>或都是非零而且非 NaN 且为同一个值</li></ul></li></ul></li><li><p>语法：<code>Object.is(value1, value2)</code></p></li><li><p>参数</p><ul><li>value1：被比较的第一个值</li><li>value2：被比较的第二个值</li></ul></li><li><p>返回值：一个 Boolean 类型标示两个参数是否是同一个值</p></li><li><p>注意</p><ul><li>与== 运算不同。 == 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 &quot;&quot; == false 判断为 true), 而 Object.is不会强制转换两边的值</li><li>与=== 运算也不相同。 === 运算符 (也包括 == 运算符) 将数字 -0 和 +0 视为相等 ，而将Number.NaN 与NaN视为不相等</li></ul></li></ul><br>",2),Se={id:"object-preventextensions",tabindex:"-1"},Ne={class:"header-anchor",href:"#object-preventextensions"},we={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions",target:"_blank",rel:"noopener noreferrer"},xe=r("<ul><li>描述：让一个对象变的不可扩展，也就是永远不能再添加新的属性</li><li>语法：<code>Object.preventExtensions(obj)</code></li><li>参数 <ul><li>obj：将要变得不可扩展的对象</li></ul></li><li>返回值：已经不可扩展的对象</li><li>注意 <ul><li>不可扩展对象的属性可能仍然可被删除。尝试将新属性添加到不可扩展对象将静默失败或抛出TypeError</li><li>仅阻止添加自身的属性。但其对象类型的原型依然可以添加新的属性</li><li>一旦将对象变为不可扩展的对象，就再也不能使其可扩展</li></ul></li></ul><br>",2),Pe={id:"object-isextensible",tabindex:"-1"},Je={class:"header-anchor",href:"#object-isextensible"},Ce={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible",target:"_blank",rel:"noopener noreferrer"},Re=r("<ul><li>描述：判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）</li><li>语法：<code>Object.isExtensible(obj)</code></li><li>参数 <ul><li>obj：需要检测的对象</li></ul></li><li>返回值：表示给定对象是否可扩展的一个Boolean</li><li>注意：<code>Object.preventExtensions</code>，<code>Object.seal</code> 或 <code>Object.freeze </code>方法都可以标记一个对象为不可扩展</li></ul><br>",2),We={id:"object-freeze",tabindex:"-1"},Ee={class:"header-anchor",href:"#object-freeze"},Ge={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",target:"_blank",rel:"noopener noreferrer"},De=r("<ul><li>描述：冻结一个对象 <ul><li>不能向这个对象添加新的属性</li><li>不能删除已有属性</li><li>不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值</li><li>冻结一个对象后该对象的原型也不能被修改</li><li>如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象</li><li>数组作为一种对象，被冻结，其元素不能被修改。没有数组元素可以被添加或移除</li></ul></li><li>语法：<code>Object.freeze(obj)</code></li><li>参数 <ul><li>obj：要被冻结的对象</li></ul></li><li>返回值：返回传递的对象，而不是创建一个被冻结的副本</li></ul><br>",2),Te={id:"object-isfrozen",tabindex:"-1"},Be={class:"header-anchor",href:"#object-isfrozen"},Ie={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen",target:"_blank",rel:"noopener noreferrer"},qe=e("ul",null,[e("li",null,"描述：判断一个对象是否被冻结"),e("li",null,[l("语法："),e("code",null,"Object.isFrozen(obj)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：需要检测的对象")])]),e("li",null,"返回值：表示给定对象是否被冻结的Boolean"),e("li",null,"注意：一个对象是冻结的是指它不可扩展，所有属性都是不可配置的，且所有数据属性（即没有getter或setter组件的访问器的属性）都是不可写的")],-1),Me=e("br",null,null,-1),Ve={id:"object-seal",tabindex:"-1"},Fe={class:"header-anchor",href:"#object-seal"},Le={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal",target:"_blank",rel:"noopener noreferrer"},Ye=e("ul",null,[e("li",null,"描述：封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变"),e("li",null,[l("语法："),e("code",null,"Object.seal(obj)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"obj：将要被密封的对")])]),e("li",null,"返回值：如果这个对象是密封的，则返回 true，否则返回 false"),e("li",null,"注意：密封对象是指那些不可 扩展 的，且所有自身属性都不可配置且因此不可删除（但不一定是不可写）的对象")],-1),Ze=e("br",null,null,-1),Ae={id:"object-issealed",tabindex:"-1"},He={class:"header-anchor",href:"#object-issealed"},Ke={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed",target:"_blank",rel:"noopener noreferrer"},Qe=r("<ul><li>描述：判断一个对象是否被密封</li><li>语法：<code>Object.isSealed(obj)</code></li><li>参数 <ul><li>obj：需要检测的对象的引用</li></ul></li><li>返回值：被密封的对象</li><li>注意 <ul><li>密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置</li><li>属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。但属性的值仍然可以修改</li><li>尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换成访问器属性，结果会静默失败或抛出TypeError</li><li>不会影响从原型链上继承的属性。但<code>__proto__()</code>属性的值也会不能修改</li></ul></li></ul><br>",2),Ue={id:"object-prototype-hasownproperty",tabindex:"-1"},Xe={class:"header-anchor",href:"#object-prototype-hasownproperty"},$e={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",target:"_blank",rel:"noopener noreferrer"},el=r("<ul><li>描述：会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）</li><li>语法：<code>obj.hasOwnProperty(prop)</code></li><li>参数 <ul><li>prop：要检测的属性的 String 字符串形式表示的名称，或者 Symbol</li></ul></li><li>返回值：用来判断某个对象是否含有指定的属性的布尔值 Boolean</li><li>注意 <ul><li>和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性</li><li>即使属性的值是 <code>null</code> 或 <code>undefined</code>，只要属性存在，<code>hasOwnProperty</code> 依旧会返回 <code>true</code></li></ul></li></ul><br>",2),ll={id:"object-prototype-isprototypeof",tabindex:"-1"},tl={class:"header-anchor",href:"#object-prototype-isprototypeof"},ol={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf",target:"_blank",rel:"noopener noreferrer"},rl=e("ul",null,[e("li",null,"描述：测试一个对象是否存在于另一个对象的原型链上"),e("li",null,[l("语法："),e("code",null,"prototypeObj.isPrototypeOf(object)")]),e("li",null,[l("参数 "),e("ul",null,[e("li",null,"object：在该对象的原型链上搜寻")])]),e("li",null,"返回值：Boolean，表示调用对象是否在另一个对象的原型链上"),e("li",null,"注意：如果 prototypeObj 为 undefined 或 null，会抛出 TypeError")],-1),nl=e("br",null,null,-1),il={id:"object-prototype-propertyisenumerable",tabindex:"-1"},cl={class:"header-anchor",href:"#object-prototype-propertyisenumerable"},sl={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable",target:"_blank",rel:"noopener noreferrer"},al=r("<ul><li>描述：返回一个布尔值，表示指定的属性是否可枚举</li><li>语法：<code>obj.propertyIsEnumerable(prop)</code></li><li>参数 <ul><li>prop：需要测试的属性名</li></ul></li><li>返回值：用来表示指定的属性名是否可枚举的布尔值</li><li>注意 <ul><li>如果 prototypeObj 为 undefined 或 null，会抛出 TypeError</li><li>此方法可以确定对象中指定的属性是否可以被 for...in 循环枚举，但是通过原型链继承的属性除外。如果对象没有指定的属性，则此方法返回 false。</li></ul></li></ul><br>",2),bl={id:"object-prototype-tostring",tabindex:"-1"},pl={class:"header-anchor",href:"#object-prototype-tostring"},dl={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",target:"_blank",rel:"noopener noreferrer"},ul=e("ul",null,[e("li",null,[l("描述：返回一个表示该对象的字符串 "),e("ul",null,[e("li",null,"每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用"),e("li",null,"默认情况下，toString() 方法被每个 Object 对象继承"),e("li",null,'如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型')])]),e("li",null,[l("语法："),e("code",null,"obj.toString()")]),e("li",null,"返回值：一个表示该对象的字符串")],-1);function hl(jl,_l){const t=i("ExternalLinkIcon");return c(),s("div",null,[a(" more "),e("blockquote",null,[e("p",null,[e("a",p,[l("【MDN文档】"),o(t)])])]),d,e("h2",u,[e("a",h,[e("span",null,[e("a",j,[l("Object.create()"),o(t)])])])]),_,e("h2",f,[e("a",O,[e("span",null,[e("a",g,[l("Object.assign()"),o(t)])])])]),y,e("h2",m,[e("a",v,[e("span",null,[e("a",z,[l("Object.defineProperty()"),o(t)])])])]),k,e("h2",S,[e("a",N,[e("span",null,[e("a",w,[l("Object.defineProperties()"),o(t)])])])]),x,P,e("h2",J,[e("a",C,[e("span",null,[e("a",R,[l("Object.getOwnPropertyDescriptor()"),o(t)])])])]),W,E,e("h2",G,[e("a",D,[e("span",null,[e("a",T,[l("Object.getOwnPropertyDescriptors()"),o(t)])])])]),B,I,e("h2",q,[e("a",M,[e("span",null,[e("a",V,[l("Object.getOwnPropertyNames()"),o(t)])])])]),F,L,e("h2",Y,[e("a",Z,[e("span",null,[e("a",A,[l("Object.getOwnPropertySymbols()"),o(t)])])])]),H,K,e("h2",Q,[e("a",U,[e("span",null,[e("a",X,[l("Object.getPrototypeOf()"),o(t)])])])]),$,ee,e("h2",le,[e("a",te,[e("span",null,[e("a",oe,[l("Object.entries()"),o(t)])])])]),re,ne,e("h2",ie,[e("a",ce,[e("span",null,[e("a",se,[l("Object.keys()"),o(t)])])])]),ae,be,e("h2",pe,[e("a",de,[e("span",null,[e("a",ue,[l("Object.values()"),o(t)])])])]),he,je,e("h2",_e,[e("a",fe,[e("span",null,[e("a",Oe,[l("Object.fromEntries()"),o(t)])])])]),ge,ye,e("h2",me,[e("a",ve,[e("span",null,[e("a",ze,[l("Object.is()"),o(t)])])])]),ke,e("h2",Se,[e("a",Ne,[e("span",null,[e("a",we,[l("Object.preventExtensions()"),o(t)])])])]),xe,e("h2",Pe,[e("a",Je,[e("span",null,[e("a",Ce,[l("Object.isExtensible()"),o(t)])])])]),Re,e("h2",We,[e("a",Ee,[e("span",null,[e("a",Ge,[l("Object.freeze()"),o(t)])])])]),De,e("h2",Te,[e("a",Be,[e("span",null,[e("a",Ie,[l("Object.isFrozen()"),o(t)])])])]),qe,Me,e("h2",Ve,[e("a",Fe,[e("span",null,[e("a",Le,[l("Object.seal()"),o(t)])])])]),Ye,Ze,e("h2",Ae,[e("a",He,[e("span",null,[e("a",Ke,[l("Object.isSealed()"),o(t)])])])]),Qe,e("h2",Ue,[e("a",Xe,[e("span",null,[e("a",$e,[l("Object.prototype.hasOwnProperty()"),o(t)])])])]),el,e("h2",ll,[e("a",tl,[e("span",null,[e("a",ol,[l("Object.prototype.isPrototypeOf()"),o(t)])])])]),rl,nl,e("h2",il,[e("a",cl,[e("span",null,[e("a",sl,[l("Object.prototype.propertyIsEnumerable()"),o(t)])])])]),al,e("h2",bl,[e("a",pl,[e("span",null,[e("a",dl,[l("Object.prototype.toString()"),o(t)])])])]),ul])}const gl=n(b,[["render",hl],["__file","03.Object.html.vue"]]),yl=JSON.parse(`{"path":"/notes/javascript/built-in-objects/03.Object.html","title":"Object","lang":"zh-CN","frontmatter":{"title":"Object","icon":"article","article":false,"sticky":20,"breadcrumb":false,"description":"【MDN文档】 在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Objet.prototype继承属性和方法。Object 构造函数为给定值创建一个对象包装器，当以非构造函数形式被调用时，Object 的行为等同于 new Object() Object 构造函数，会根据给定的参数创建对象 如果给定值是 null 或 un...","head":[["meta",{"property":"og:url","content":"https://codemake.fun/notes/javascript/built-in-objects/03.Object.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Object"}],["meta",{"property":"og:description","content":"【MDN文档】 在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Objet.prototype继承属性和方法。Object 构造函数为给定值创建一个对象包装器，当以非构造函数形式被调用时，Object 的行为等同于 new Object() Object 构造函数，会根据给定的参数创建对象 如果给定值是 null 或 un..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Object\\",\\"description\\":\\"【MDN文档】 在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Objet.prototype继承属性和方法。Object 构造函数为给定值创建一个对象包装器，当以非构造函数形式被调用时，Object 的行为等同于 new Object() Object 构造函数，会根据给定的参数创建对象 如果给定值是 null 或 un...\\"}"]]},"headers":[{"level":2,"title":"Object.create()","slug":"object-create","link":"#object-create","children":[]},{"level":2,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[]},{"level":2,"title":"Object.defineProperty()","slug":"object-defineproperty","link":"#object-defineproperty","children":[]},{"level":2,"title":"Object.defineProperties()","slug":"object-defineproperties","link":"#object-defineproperties","children":[]},{"level":2,"title":"Object.getOwnPropertyDescriptor()","slug":"object-getownpropertydescriptor","link":"#object-getownpropertydescriptor","children":[]},{"level":2,"title":"Object.getOwnPropertyDescriptors()","slug":"object-getownpropertydescriptors","link":"#object-getownpropertydescriptors","children":[]},{"level":2,"title":"Object.getOwnPropertyNames()","slug":"object-getownpropertynames","link":"#object-getownpropertynames","children":[]},{"level":2,"title":"Object.getOwnPropertySymbols()","slug":"object-getownpropertysymbols","link":"#object-getownpropertysymbols","children":[]},{"level":2,"title":"Object.getPrototypeOf()","slug":"object-getprototypeof","link":"#object-getprototypeof","children":[]},{"level":2,"title":"Object.entries()","slug":"object-entries","link":"#object-entries","children":[]},{"level":2,"title":"Object.keys()","slug":"object-keys","link":"#object-keys","children":[]},{"level":2,"title":"Object.values()","slug":"object-values","link":"#object-values","children":[]},{"level":2,"title":"Object.fromEntries()","slug":"object-fromentries","link":"#object-fromentries","children":[]},{"level":2,"title":"Object.is()","slug":"object-is","link":"#object-is","children":[]},{"level":2,"title":"Object.preventExtensions()","slug":"object-preventextensions","link":"#object-preventextensions","children":[]},{"level":2,"title":"Object.isExtensible()","slug":"object-isextensible","link":"#object-isextensible","children":[]},{"level":2,"title":"Object.freeze()","slug":"object-freeze","link":"#object-freeze","children":[]},{"level":2,"title":"Object.isFrozen()","slug":"object-isfrozen","link":"#object-isfrozen","children":[]},{"level":2,"title":"Object.seal()","slug":"object-seal","link":"#object-seal","children":[]},{"level":2,"title":"Object.isSealed()","slug":"object-issealed","link":"#object-issealed","children":[]},{"level":2,"title":"Object.prototype.hasOwnProperty()","slug":"object-prototype-hasownproperty","link":"#object-prototype-hasownproperty","children":[]},{"level":2,"title":"Object.prototype.isPrototypeOf()","slug":"object-prototype-isprototypeof","link":"#object-prototype-isprototypeof","children":[]},{"level":2,"title":"Object.prototype.propertyIsEnumerable()","slug":"object-prototype-propertyisenumerable","link":"#object-prototype-propertyisenumerable","children":[]},{"level":2,"title":"Object.prototype.toString()","slug":"object-prototype-tostring","link":"#object-prototype-tostring","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":11.65,"words":3496},"filePathRelative":"notes/javascript/built-in-objects/03.Object.md","localizedDate":"2023年1月11日","excerpt":"","autoDesc":true}`);export{gl as comp,yl as data};
