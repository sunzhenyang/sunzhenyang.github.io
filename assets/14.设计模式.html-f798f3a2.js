import{_ as a,P as e,Q as i,Z as h,a2 as r}from"./framework-0028f3de.js";const d={},l=r('<h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h2><h3 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h3><ul><li>设计：按照一种思路或者标准来实现功能</li><li>功能相同，可以有不同的设计方案来实现</li><li>伴随着需求增加，设计的作用才能体现出来</li></ul><h3 id="《unix-linux-设计哲学》准则" tabindex="-1"><a class="header-anchor" href="#《unix-linux-设计哲学》准则" aria-hidden="true">#</a> 《UNIX/LINUX 设计哲学》准则</h3><ul><li>准则 1：小即是美</li><li>准则 2：让每个程序只做好一件事</li><li>准则 3：快速建立原型</li><li>准则 4：舍弃高效率而取可移植性</li><li>准则 5：采用纯文本来存储数据</li><li>准则 6：充分利用软件的杠杆效应（软件复用）</li><li>准则 7：使用 shell 脚本来提高杠杆效应和可以执行</li><li>准则 8：避免强制性的用户界面</li><li>准则 9：让每个程序都成为过滤器 <ul><li><code>ls | grep *.json</code></li></ul></li><li>小准则 <ul><li>允许用户定制环境</li><li>尽量使操作系统内核小而轻量化</li><li>使用小写字母并尽量简短</li><li>沉默是金</li><li>寻求 90% 的解决方案</li></ul></li></ul><h3 id="五大设计原则" tabindex="-1"><a class="header-anchor" href="#五大设计原则" aria-hidden="true">#</a> 五大设计原则</h3><h4 id="单一职责原则-s" tabindex="-1"><a class="header-anchor" href="#单一职责原则-s" aria-hidden="true">#</a> 单一职责原则（ S ）</h4><ul><li>一个程序只做好一件事</li><li>如果功能过于复杂就拆分开，每个部分保持独立</li></ul><h4 id="开放封闭原则-o" tabindex="-1"><a class="header-anchor" href="#开放封闭原则-o" aria-hidden="true">#</a> 开放封闭原则（ O ）</h4><ul><li>对扩展开放，对修改封闭</li><li>增加需求时，扩展新代码，而非修改已有代码</li></ul><h4 id="李式置换原则-l" tabindex="-1"><a class="header-anchor" href="#李式置换原则-l" aria-hidden="true">#</a> 李式置换原则（ L ）</h4><ul><li>子类能覆盖父类</li><li>父类能出现的地方，子类就能出现</li><li>JS 中使用较少（ 弱类型 &amp; 继承使用较少 ）</li></ul><h4 id="接口独立原则-i" tabindex="-1"><a class="header-anchor" href="#接口独立原则-i" aria-hidden="true">#</a> 接口独立原则（ I ）</h4><ul><li>保持接口的单一独立，避免出现&quot;胖接口&quot;</li><li>JS 中没有接口（ typescript 除外 ），使用较少</li><li>类似于单一职责原则，这里更关注接口</li></ul><h4 id="依赖倒置原则-d" tabindex="-1"><a class="header-anchor" href="#依赖倒置原则-d" aria-hidden="true">#</a> 依赖倒置原则（ D ）</h4><ul><li>面向接口编程，依赖于抽象而不依赖于具体</li><li>使用方只关注接口而不关注具体类的实现</li><li>JS 中使用较少（ 没有接口 &amp; 弱类型 ）</li></ul><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h2><h3 id="创建型" tabindex="-1"><a class="header-anchor" href="#创建型" aria-hidden="true">#</a> 创建型</h3><blockquote><p>关注 <strong>如何创建对象</strong>，主要特点是将对象的创建和使用分离。一般抽象了对象实例化的过程，用来帮助创建对象的实例</p></blockquote><h4 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h4><blockquote><p>保证一个类只有一个实例，并提供一个访问它的全局访问点</p></blockquote><h4 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h4><blockquote><p>根据输入的不同返回不同类的实例，一般用来创建同一类对象</p></blockquote><h4 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h4><blockquote><p>通过对类的工厂抽象，使其业务用于对产品类簇的创建</p></blockquote><h4 id="建造者模式" tabindex="-1"><a class="header-anchor" href="#建造者模式" aria-hidden="true">#</a> 建造者模式</h4><blockquote><p>分步构建一个复杂对象，使得同样的构建过程可以采用不同的表示</p></blockquote><h3 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式" aria-hidden="true">#</a> 结构型模式</h3><blockquote><p>关注如何 <strong>将对象按某种布局组成更大的结构</strong></p></blockquote><h4 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h4><blockquote><p>为目标对象创造一个代理对象，以控制对目标对象的访问</p></blockquote><h4 id="享元模式" tabindex="-1"><a class="header-anchor" href="#享元模式" aria-hidden="true">#</a> 享元模式</h4><blockquote><p>运用共享技术来有效地支持大量细粒度对象的复用，减少创建的对象的数量</p></blockquote><h4 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h4><blockquote><p>解决两个软件实体间接口不兼容的问题</p></blockquote><h4 id="装饰者模式" tabindex="-1"><a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a> 装饰者模式</h4><blockquote><p>向一个现有的对象添加新的功能，同时又不改变其结构</p></blockquote><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><h4 id="外观模式" tabindex="-1"><a class="header-anchor" href="#外观模式" aria-hidden="true">#</a> 外观模式</h4><blockquote><p>为多个复杂的子系统提供一个一致的接口，使这些子系统更加容易被访问</p></blockquote><h4 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式" aria-hidden="true">#</a> 组合模式</h4><blockquote><p>用小的子对象构建更大的对象，使得对单个对象和组合对象具有一致的访问性</p></blockquote><h4 id="桥接模式" tabindex="-1"><a class="header-anchor" href="#桥接模式" aria-hidden="true">#</a> 桥接模式</h4><blockquote><p>将类的抽象部分与实现部分分离，使它们可以独立地变化</p></blockquote><h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h4><h3 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式" aria-hidden="true">#</a> 行为型模式</h3><blockquote><p>行为型模式关注<strong>对象之间的通信</strong>，描述对象之间怎样相互协作，以及怎样分配职责</p></blockquote><h4 id="发布-订阅模式" tabindex="-1"><a class="header-anchor" href="#发布-订阅模式" aria-hidden="true">#</a> 发布 - 订阅模式</h4><blockquote><p>多个对象间存在一对多关系，当一个对象发生改变时，把这种改变通知给其他多个对象，从而影响其他对象的行为</p></blockquote><h4 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h4><blockquote><p>定义了一系列算法，并将每个算法封装起来，使它们可以相互替换</p></blockquote><h4 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式" aria-hidden="true">#</a> 状态模式</h4><blockquote><p>允许一个对象在其内部状态发生改变时改变其行为能力</p></blockquote><h4 id="模板方法模式" tabindex="-1"><a class="header-anchor" href="#模板方法模式" aria-hidden="true">#</a> 模板方法模式</h4><blockquote><p>定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤</p></blockquote><h4 id="迭代器模式" tabindex="-1"><a class="header-anchor" href="#迭代器模式" aria-hidden="true">#</a> 迭代器模式</h4><blockquote><p>提供一种方法来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示</p></blockquote><h4 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h4><blockquote><p>将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开</p></blockquote><h4 id="职责链模式" tabindex="-1"><a class="header-anchor" href="#职责链模式" aria-hidden="true">#</a> 职责链模式</h4><blockquote><p>把请求从链中的一个对象传到下一个对象，直到请求被响应为止</p></blockquote><h4 id="中介者模式" tabindex="-1"><a class="header-anchor" href="#中介者模式" aria-hidden="true">#</a> 中介者模式</h4><blockquote><p>定义一个中介对象来简化原有对象之间的复杂耦合关系</p></blockquote><h4 id="备忘录模式" tabindex="-1"><a class="header-anchor" href="#备忘录模式" aria-hidden="true">#</a> 备忘录模式</h4><h4 id="访问者模式" tabindex="-1"><a class="header-anchor" href="#访问者模式" aria-hidden="true">#</a> 访问者模式</h4><h4 id="解释器模式" tabindex="-1"><a class="header-anchor" href="#解释器模式" aria-hidden="true">#</a> 解释器模式</h4><h4 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h4><h3 id="其他模式" tabindex="-1"><a class="header-anchor" href="#其他模式" aria-hidden="true">#</a> 其他模式</h3><ul><li><code>MVC</code>、<code>MVP</code>、<code>MVVM</code>： 用于系统分层，降低层间耦合</li><li>模块模式： 将内部的属性和方法隐藏，仅暴露需要暴露的部分</li><li>链模式： 通过在对象方法中将当前对象返回，实现对同一个对象的多个方法的链式调用</li><li>中间件： 处于操作系统和应用程序之间的软件，来完成对任何数据的预处理和后处理</li></ul>',69);function o(t,c){return e(),i("div",null,[h(" more "),l])}const u=a(d,[["render",o],["__file","14.设计模式.html.vue"]]);export{u as default};
