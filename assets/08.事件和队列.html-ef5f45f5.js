import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as a,a as t,f as r}from"./app-d18dfe82.js";const n={},h=r('<blockquote><p>浏览器维护着一个事件队列，在幕后，浏览器不断的从这个队列中取出事件，并调用相应的事件处理程序来处理他们</p></blockquote><ul><li>浏览器遍历队列，按先后顺序 <strong>逐个处理事件</strong></li></ul><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><h3 id="onload" tabindex="-1"><a class="header-anchor" href="#onload" aria-hidden="true">#</a> onload</h3><blockquote><p>浏览器加载网页完毕后触发</p></blockquote><h3 id="onunload" tabindex="-1"><a class="header-anchor" href="#onunload" aria-hidden="true">#</a> onunload</h3><blockquote><p>用户关闭浏览器窗口或切换到其他网页时触发</p></blockquote><h3 id="onresize" tabindex="-1"><a class="header-anchor" href="#onresize" aria-hidden="true">#</a> onresize</h3><blockquote><p>用户调整浏览器窗口大小时触发</p></blockquote><h3 id="dragstart" tabindex="-1"><a class="header-anchor" href="#dragstart" aria-hidden="true">#</a> dragstart</h3><blockquote><p>用户拖曳网页中元素时触发</p></blockquote><h3 id="drop" tabindex="-1"><a class="header-anchor" href="#drop" aria-hidden="true">#</a> drop</h3><blockquote><p>用户放下拖曳的元素时触发</p></blockquote><h3 id="onclick" tabindex="-1"><a class="header-anchor" href="#onclick" aria-hidden="true">#</a> onclick</h3><blockquote><p>元素单击时触发</p></blockquote><h3 id="onmousemove" tabindex="-1"><a class="header-anchor" href="#onmousemove" aria-hidden="true">#</a> onmousemove</h3><blockquote><p>当鼠标在特定元素上移动时触发</p></blockquote><h3 id="onmouseover" tabindex="-1"><a class="header-anchor" href="#onmouseover" aria-hidden="true">#</a> onmouseover</h3><blockquote><p>当鼠标移入指定元素时触发</p></blockquote><h3 id="onmouseout" tabindex="-1"><a class="header-anchor" href="#onmouseout" aria-hidden="true">#</a> onmouseout</h3><blockquote><p>当鼠标移除指定元素时触发</p></blockquote><h3 id="ontouchstart" tabindex="-1"><a class="header-anchor" href="#ontouchstart" aria-hidden="true">#</a> ontouchstart</h3><blockquote><p>在触摸设备上，用户触摸并按住元素时触发</p></blockquote><h3 id="ontouchend" tabindex="-1"><a class="header-anchor" href="#ontouchend" aria-hidden="true">#</a> ontouchend</h3><blockquote><p>在触摸设备上，用户停止触摸时触发</p></blockquote><h3 id="ontouchstart-1" tabindex="-1"><a class="header-anchor" href="#ontouchstart-1" aria-hidden="true">#</a> ontouchstart</h3><blockquote><p>在触摸设备上，用户触摸并按住元素时触发</p></blockquote><h3 id="onkeyup" tabindex="-1"><a class="header-anchor" href="#onkeyup" aria-hidden="true">#</a> onkeyup</h3><blockquote><p>用户放开任何先前按下的键时触发</p></blockquote><h3 id="onkeydown" tabindex="-1"><a class="header-anchor" href="#onkeydown" aria-hidden="true">#</a> onkeydown</h3><blockquote><p>用户按下任何键（包括系统按钮，如箭头键和功能键）时触发</p></blockquote><h3 id="onkeypress" tabindex="-1"><a class="header-anchor" href="#onkeypress" aria-hidden="true">#</a> onkeypress</h3><blockquote><p>用户按下并放开任何字母数字键时触发，系统按钮（例如，箭头键和功能键）无法识别</p></blockquote><h3 id="onplay" tabindex="-1"><a class="header-anchor" href="#onplay" aria-hidden="true">#</a> onplay</h3><blockquote><p>用户单击网页中 video 元素的播放按钮时触发</p></blockquote><h3 id="pause" tabindex="-1"><a class="header-anchor" href="#pause" aria-hidden="true">#</a> Pause</h3><blockquote><p>用户单击网页中 video 元素的暂停按钮时触发</p></blockquote><h2 id="鼠标位置" tabindex="-1"><a class="header-anchor" href="#鼠标位置" aria-hidden="true">#</a> 鼠标位置</h2><h3 id="pagex" tabindex="-1"><a class="header-anchor" href="#pagex" aria-hidden="true">#</a> pageX</h3><blockquote><p>鼠标位置相对于网页左边缘的距离（像素），会被滚动条影响变化</p></blockquote><h3 id="pagey" tabindex="-1"><a class="header-anchor" href="#pagey" aria-hidden="true">#</a> pageY</h3><blockquote><p>鼠标位置相对于网页上边缘的距离（像素）</p></blockquote><h3 id="clientx" tabindex="-1"><a class="header-anchor" href="#clientx" aria-hidden="true">#</a> clientX</h3><blockquote><p>鼠标位置相对于浏览器窗口左边缘的距离（像素）</p></blockquote><h3 id="clienty" tabindex="-1"><a class="header-anchor" href="#clienty" aria-hidden="true">#</a> clientY</h3><blockquote><p>鼠标位置相对于浏览器窗口上边缘的距离（像素）</p></blockquote><h3 id="screenx" tabindex="-1"><a class="header-anchor" href="#screenx" aria-hidden="true">#</a> screenX</h3><blockquote><p>鼠标位置相对于设备屏幕左边缘的距离（像素）</p></blockquote><h3 id="screeny" tabindex="-1"><a class="header-anchor" href="#screeny" aria-hidden="true">#</a> screenY</h3><blockquote><p>鼠标位置相对于设备屏幕上边缘的距离（像素）</p></blockquote><h3 id="movementx" tabindex="-1"><a class="header-anchor" href="#movementx" aria-hidden="true">#</a> movementX</h3><blockquote><p>当前事件和上一个 <code>mousemove</code> 事件之间鼠标在水平方向上的移动值</p></blockquote><h3 id="movementy" tabindex="-1"><a class="header-anchor" href="#movementy" aria-hidden="true">#</a> movementY</h3><blockquote><p>当前事件和上一个 <code>mousemove</code> 事件之间鼠标在垂直方向上的移动值</p></blockquote><h2 id="元素距离" tabindex="-1"><a class="header-anchor" href="#元素距离" aria-hidden="true">#</a> 元素距离</h2><p>offsetTop / offsetLeft ( 元素与父级 定位元素/table/td/th/body 的距离 )</p><p>clientTop / clientLeft ( 元素边框宽度 )</p><p>scrollTop / scrollLeft ( 元素滚动距离 )</p><p>window.scrollY / window.scrollX ( 文档/页面 滚动距离 ) window.pageYOffset / window.pageXOffset ( 另一种写法 -跨浏览器兼容- )</p><p>window.screenTop / window.screenLeft ( 浏览器边界到操作系统桌面的距离 ) window.screenY / window.screenX ( 另一种写法 )</p><p>---------------- / ---------------</p><p>offsetWidth / offsetHeight ( 元素的布局宽高度 -整数-)</p><p>clientWidth / clientHeight ( 元素的 内部/视口 宽高度 -整数-)</p><p>scrollWidth / scrollHeight ( 元素的内部宽高度 -整数-)</p><p>window.innerWidth / window.innerHeight ( 窗口的内部宽高度 )</p><p>window.outerWidth / window.outerHeight ( 窗口整体宽高度 )</p><p>screen.width / screen.height ( 屏幕宽高度 )</p><p>screen.availwidth / screen.availheight ( 浏览器在屏幕中能占用的最大宽高度 )</p><p>---------------- / ---------------</p><p>getBoundingClientRect( ) ( 元素的大小及其相对于视口的各种距离的集合)</p><p>innerWidth innerHeight</p>',71);function d(i,c){return o(),a("div",null,[t(" more "),h])}const u=e(n,[["render",d],["__file","08.事件和队列.html.vue"]]);export{u as default};
