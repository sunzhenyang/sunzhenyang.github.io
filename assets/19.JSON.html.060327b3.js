import{_ as o,o as a,c as s,a as e,b as l,d as t,e as i,r as n}from"./app.41291239.js";const c={},d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON",target:"_blank",rel:"noopener noreferrer"},_=t("JSON"),h=i('<br><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><blockquote><p>JSON \u662F\u4E00\u79CD\u8BED\u6CD5\uFF0C\u7528\u6765\u5E8F\u5217\u5316\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u6570\u503C\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\u548C null \u3002\u5B83\u57FA\u4E8E JavaScript \u8BED\u6CD5</p></blockquote><table><thead><tr><th>JavaScript\u7C7B\u578B</th><th>JSON \u7684\u4E0D\u540C\u70B9</th></tr></thead><tbody><tr><td>\u5BF9\u8C61\u548C\u6570\u7EC4</td><td>\u5C5E\u6027\u540D\u79F0\u5FC5\u987B\u662F\u53CC\u5F15\u53F7\u62EC\u8D77\u6765\u7684\u5B57\u7B26\u4E32\uFF1B\u6700\u540E\u4E00\u4E2A\u5C5E\u6027\u540E\u4E0D\u80FD\u6709\u9017\u53F7</td></tr><tr><td>\u6570\u503C</td><td>\u7981\u6B62\u51FA\u73B0\u524D\u5BFC\u96F6\uFF08 JSON.stringify \u65B9\u6CD5\u81EA\u52A8\u5FFD\u7565\u524D\u5BFC\u96F6\uFF0C\u800C\u5728 JSON.parse \u65B9\u6CD5\u4E2D\u5C06\u4F1A\u629B\u51FA SyntaxError\uFF09\uFF1B\u5982\u679C\u6709\u5C0F\u6570\u70B9, \u5219\u540E\u9762\u81F3\u5C11\u8DDF\u7740\u4E00\u4F4D\u6570\u5B57</td></tr><tr><td>\u5B57\u7B26\u4E32</td><td>\u53EA\u6709\u6709\u9650\u7684\u4E00\u4E9B\u5B57\u7B26\u53EF\u80FD\u4F1A\u88AB\u8F6C\u4E49\uFF1B\u7981\u6B62\u67D0\u4E9B\u63A7\u5236\u5B57\u7B26</td></tr></tbody></table><br>',5),p={id:"json-parse",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#json-parse","aria-hidden":"true"},"#",-1),u=t(),J={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"},N=t("JSON.parse()"),b=i("<ul><li>\u63CF\u8FF0\uFF1A\u89E3\u6790 JSON \u5B57\u7B26\u4E32</li><li>\u8BED\u6CD5\uFF1A<code>JSON.parse(text[, reviver])</code></li><li>\u53C2\u6570 <ul><li>text\uFF1A\u8981\u88AB\u89E3\u6790\u6210 JavaScript \u503C\u7684\u5B57\u7B26\u4E32</li><li>reviver\uFF1A\u8F6C\u6362\u5668, \u5982\u679C\u4F20\u5165\u8BE5\u53C2\u6570(\u51FD\u6570)\uFF0C\u53EF\u4EE5\u7528\u6765\u4FEE\u6539\u89E3\u6790\u751F\u6210\u7684\u539F\u59CB\u503C\uFF0C\u8C03\u7528\u65F6\u673A\u5728 parse \u51FD\u6570\u8FD4\u56DE\u4E4B\u524D</li></ul></li><li>\u8FD4\u56DE\u503C\uFF1A<code>Object</code> \u7C7B\u578B, \u5BF9\u5E94\u7ED9\u5B9A JSON \u6587\u672C\u7684\u5BF9\u8C61/\u503C</li><li>\u6CE8\u610F\uFF1A\u82E5\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u4E0D\u7B26\u5408 JSON \u89C4\u8303\uFF0C\u5219\u4F1A\u629B\u51FA <code>SyntaxError</code>\u5F02\u5E38</li></ul><br>",2),f={id:"json-stringify",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#json-stringify","aria-hidden":"true"},"#",-1),v=t(),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"},g=t("JSON.stringify()"),m=i("<ul><li>\u63CF\u8FF0\uFF1A\u5C06\u4E00\u4E2A JavaScript \u5BF9\u8C61\u6216\u503C\u8F6C\u6362\u4E3A JSON \u5B57\u7B26\u4E32</li><li>\u8BED\u6CD5\uFF1A<code>JSON.stringify(value[, replacer [, space]])</code></li><li>\u53C2\u6570 <ul><li>value\uFF1A\u5C06\u8981\u5E8F\u5217\u5316\u6210 \u4E00\u4E2A JSON \u5B57\u7B26\u4E32\u7684\u503C</li><li>replacer <ul><li>\u5982\u679C\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5219\u5728\u5E8F\u5217\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u88AB\u5E8F\u5217\u5316\u7684\u503C\u7684\u6BCF\u4E2A\u5C5E\u6027\u90FD\u4F1A\u7ECF\u8FC7\u8BE5\u51FD\u6570\u7684\u8F6C\u6362\u548C\u5904\u7406</li><li>\u5982\u679C\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5219\u53EA\u6709\u5305\u542B\u5728\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u7684\u5C5E\u6027\u540D\u624D\u4F1A\u88AB\u5E8F\u5217\u5316\u5230\u6700\u7EC8\u7684 JSON \u5B57\u7B26\u4E32\u4E2D</li><li>\u5982\u679C\u8BE5\u53C2\u6570\u4E3A null \u6216\u8005\u672A\u63D0\u4F9B\uFF0C\u5219\u5BF9\u8C61\u6240\u6709\u7684\u5C5E\u6027\u90FD\u4F1A\u88AB\u5E8F\u5217\u5316</li></ul></li><li>space\uFF1A\u6307\u5B9A\u7F29\u8FDB\u7528\u7684\u7A7A\u767D\u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u7F8E\u5316\u8F93\u51FA\u7C7B\u578B <ul><li>\u5982\u679C\u53C2\u6570\u662F\u4E2A\u6570\u5B57\uFF0C\u5B83\u4EE3\u8868\u6709\u591A\u5C11\u7684\u7A7A\u683C\uFF1B\u4E0A\u9650\u4E3A10\u3002\u8BE5\u503C\u82E5\u5C0F\u4E8E1\uFF0C\u5219\u610F\u5473\u7740\u6CA1\u6709\u7A7A\u683C</li><li>\u5982\u679C\u8BE5\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\uFF08\u5F53\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC710\u4E2A\u5B57\u6BCD\uFF0C\u53D6\u5176\u524D10\u4E2A\u5B57\u6BCD\uFF09\uFF0C\u8BE5\u5B57\u7B26\u4E32\u5C06\u88AB\u4F5C\u4E3A\u7A7A\u683C</li><li>\u5982\u679C\u8BE5\u53C2\u6570\u6CA1\u6709\u63D0\u4F9B\uFF08\u6216\u8005\u4E3A null\uFF09\uFF0C\u5C06\u6CA1\u6709\u7A7A\u683C</li></ul></li></ul></li><li>\u8FD4\u56DE\u503C\uFF1A\u4E00\u4E2A\u8868\u793A\u7ED9\u5B9A\u503C\u7684JSON\u5B57\u7B26\u4E32</li></ul>",1);function y(k,j){const r=n("ExternalLinkIcon");return a(),s("div",null,[e("p",null,[e("a",d,[_,l(r)])]),h,e("h2",p,[S,u,e("a",J,[N,l(r)])]),b,e("h2",f,[O,v,e("a",x,[g,l(r)])]),m])}var E=o(c,[["render",y],["__file","19.JSON.html.vue"]]);export{E as default};
