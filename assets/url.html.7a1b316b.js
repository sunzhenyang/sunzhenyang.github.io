import{_ as e,o as a,c as o,e as c}from"./app.28262187.js";const d={},n=c(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>URL \u662F\u201C\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26\u201D\uFF08Uniform Resource Locator\uFF09\u7684\u9996\u5B57\u6BCD\u7F29\u5199\uFF0C\u4E2D\u6587\u8BD1\u4E3A\u201C\u7F51\u5740\u201D\uFF0C\u8868\u793A\u5404\u79CD\u8D44\u6E90\u7684\u4E92\u8054\u7F51\u5730\u5740\u3002\u4E0B\u9762\u5C31\u662F\u4E00\u4E2A\u5178\u578B\u7684 URL\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>https://www.example.com/path/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6240\u8C13\u8D44\u6E90\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u6210\u5404\u79CD\u53EF\u4EE5\u901A\u8FC7\u4E92\u8054\u7F51\u8BBF\u95EE\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982\u7F51\u9875\u3001\u56FE\u50CF\u3001\u97F3\u9891\u3001\u89C6\u9891\u3001JavaScript \u811A\u672C\u7B49\u7B49\u3002\u53EA\u6709\u77E5\u9053\u4E86\u5B83\u4EEC\u7684 URL\uFF0C\u624D\u80FD\u5728\u4E92\u8054\u7F51\u4E0A\u83B7\u53D6\u5B83\u4EEC\u3002</p><p>\u53EA\u8981\u8D44\u6E90\u53EF\u4EE5\u901A\u8FC7\u4E92\u8054\u7F51\u8BBF\u95EE\uFF0C\u5B83\u5C31\u5FC5\u7136\u6709\u5BF9\u5E94\u7684 URL\u3002\u4E00\u4E2A URL \u5BF9\u5E94\u4E00\u4E2A\u8D44\u6E90\uFF0C\u4F46\u662F\u540C\u4E00\u4E2A\u8D44\u6E90\u53EF\u80FD\u5BF9\u5E94\u591A\u4E2A URL\u3002</p><p>URL \u662F\u4E92\u8054\u7F51\u7684\u57FA\u7840\u3002\u4E92\u8054\u7F51\u4E4B\u6240\u4EE5\u201C\u4E92\u8054\u201D\uFF0C\u5C31\u662F\u56E0\u4E3A\u7F51\u9875\u53EF\u4EE5\u901A\u8FC7\u201C\u94FE\u63A5\u201D\uFF08link\uFF09\uFF0C\u5305\u542B\u5176\u4ED6 URL\u3002\u7528\u6237\u53EA\u8981\u70B9\u51FB\uFF0C\u5C31\u53EF\u4EE5\u4ECE\u4E00\u4E2A URL \u8DF3\u8F6C\u5230\u53E6\u4E00\u4E2A URL\uFF0C\u524D\u5F80\u4E0D\u540C\u7684\u7F51\u7AD9\u3002</p><h2 id="\u7F51\u5740\u7684\u7EC4\u6210\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u7F51\u5740\u7684\u7EC4\u6210\u90E8\u5206" aria-hidden="true">#</a> \u7F51\u5740\u7684\u7EC4\u6210\u90E8\u5206</h2><p>URL \u7531\u591A\u4E2A\u90E8\u5206\u7EC4\u6210\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u6BD4\u8F83\u590D\u6742\u7684 URL\uFF0C\u5B9E\u9645\u7684 URL \u901A\u5E38\u4E0D\u4F1A\u6709\u8FD9\u4E48\u591A\u90E8\u5206\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>https://www.example.com:80/path/to/myfile.html?key1=value1&amp;key2=value2#anchor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u770B\u770B\uFF0C\u8FD9\u4E2A URL \u7684\u5404\u4E2A\u90E8\u5206\u3002</p><h3 id="\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE" aria-hidden="true">#</a> \u534F\u8BAE</h3><p>\u534F\u8BAE\uFF08scheme\uFF09\u662F\u6D4F\u89C8\u5668\u8BF7\u6C42\u670D\u52A1\u5668\u8D44\u6E90\u7684\u65B9\u6CD5\uFF0C\u4E0A\u4F8B\u662F<code>https://</code>\u7684\u90E8\u5206\uFF0C\u8868\u793A\u4F7F\u7528 HTTPS \u534F\u8BAE\u3002</p><p>\u4E92\u8054\u7F51\u652F\u6301\u591A\u79CD\u534F\u8BAE\uFF0C\u5FC5\u987B\u6307\u660E\u7F51\u5740\u4F7F\u7528\u54EA\u4E00\u79CD\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u662F HTTP \u534F\u8BAE\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u7701\u7565\u534F\u8BAE\uFF0C\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165<code>www.example.com</code>\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4F1A\u8BBF\u95EE<code>http://www.example.com</code>\u3002HTTPS \u662F HTTP \u7684\u52A0\u5BC6\u7248\u672C\uFF0C\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u7F51\u7AD9\u4F7F\u7528\u8FD9\u4E2A\u534F\u8BAE\u3002</p><p>HTTP \u548C HTTPS \u7684\u534F\u8BAE\u540D\u79F0\u540E\u9762\uFF0C\u7D27\u8DDF\u7740\u4E00\u4E2A\u5192\u53F7\u548C\u4E24\u4E2A\u659C\u6760\uFF08<code>://</code>\uFF09\u3002\u5176\u4ED6\u534F\u8BAE\u4E0D\u4E00\u5B9A\u5982\u6B64\uFF0C\u90AE\u4EF6\u5730\u5740\u534F\u8BAE<code>mailto:</code>\u7684\u534F\u8BAE\u540D\u540E\u9762\u53EA\u6709\u4E00\u4E2A\u5192\u53F7\uFF0C\u6BD4\u5982<code>mailto:foo@example.com</code>\u3002</p><h3 id="\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u673A" aria-hidden="true">#</a> \u4E3B\u673A</h3><p>\u4E3B\u673A\uFF08host\uFF09\u662F\u8D44\u6E90\u6240\u5728\u7684\u7F51\u7AD9\u540D\u6216\u670D\u52A1\u5668\u7684\u540D\u5B57\uFF0C\u53C8\u79F0\u4E3A\u57DF\u540D\u3002\u4E0A\u4F8B\u7684\u4E3B\u673A\u662F<code>www.example.com</code>\u3002</p><p>\u6709\u4E9B\u4E3B\u673A\u6CA1\u6709\u57DF\u540D\uFF0C\u53EA\u6709 IP \u5730\u5740\uFF0C\u6BD4\u5982<code>192.168.2.15</code>\u3002\u8FD9\u79CD\u60C5\u51B5\u5E38\u5E38\u51FA\u73B0\u5728\u5C40\u57DF\u7F51\u3002</p><h3 id="\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7AEF\u53E3" aria-hidden="true">#</a> \u7AEF\u53E3</h3><p>\u540C\u4E00\u4E2A\u57DF\u540D\u4E0B\u9762\u53EF\u80FD\u540C\u65F6\u5305\u542B\u591A\u4E2A\u7F51\u7AD9\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u901A\u8FC7\u7AEF\u53E3\uFF08port\uFF09\u533A\u5206\u3002\u201C\u7AEF\u53E3\u201D\u5C31\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u6210\uFF0C\u8BBF\u95EE\u8005\u544A\u8BC9\u670D\u52A1\u5668\uFF0C\u60F3\u8981\u8BBF\u95EE\u54EA\u4E00\u4E2A\u7F51\u7AD9\u3002HTTP \u534F\u8BAE\u7684\u9ED8\u8BA4\u7AEF\u53E3\u662F80\uFF0C\u5982\u679C\u7701\u7565\u4E86\u8FD9\u4E2A\u53C2\u6570\uFF0C\u670D\u52A1\u5668\u5C31\u4F1A\u8FD4\u56DE80\u7AEF\u53E3\u7684\u7F51\u7AD9\u3002</p><p>\u7AEF\u53E3\u7D27\u8DDF\u5728\u57DF\u540D\u540E\u9762\uFF0C\u4E24\u8005\u4E4B\u95F4\u4F7F\u7528\u5192\u53F7\u5206\u9694\uFF0C\u6BD4\u5982<code>www.example.com:80</code>\u3002</p><h3 id="\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u5F84" aria-hidden="true">#</a> \u8DEF\u5F84</h3><p>\u8DEF\u5F84\uFF08path\uFF09\u662F\u8D44\u6E90\u5728\u7F51\u7AD9\u7684\u4F4D\u7F6E\u3002\u6BD4\u5982\uFF0C<code>/path/index.html</code>\u8FD9\u4E2A\u8DEF\u5F84\uFF0C\u6307\u5411\u7F51\u7AD9\u7684<code>/path</code>\u5B50\u76EE\u5F55\u4E0B\u9762\u7684\u7F51\u9875\u6587\u4EF6<code>index.html</code>\u3002</p><p>\u4E92\u8054\u7F51\u7684\u65E9\u671F\uFF0C\u8DEF\u5F84\u662F\u771F\u5B9E\u5B58\u5728\u7684\u7269\u7406\u4F4D\u7F6E\u3002\u73B0\u5728\u7531\u4E8E\u670D\u52A1\u5668\u53EF\u4EE5\u6A21\u62DF\u8FD9\u4E9B\u4F4D\u7F6E\uFF0C\u6240\u4EE5\u8DEF\u5F84\u53EA\u662F\u865A\u62DF\u4F4D\u7F6E\u3002</p><p>\u8DEF\u5F84\u53EF\u80FD\u53EA\u5305\u542B\u76EE\u5F55\uFF0C\u4E0D\u5305\u542B\u6587\u4EF6\u540D\uFF0C\u6BD4\u5982<code>/foo/</code>\uFF0C\u751A\u81F3\u7ED3\u5C3E\u7684\u659C\u6760\u90FD\u53EF\u4EE5\u7701\u7565\u3002\u8FD9\u65F6\uFF0C\u670D\u52A1\u5668\u901A\u5E38\u4F1A\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u8BE5\u76EE\u5F55\u91CC\u9762\u7684<code>index.html</code>\u6587\u4EF6\uFF08\u5373\u7B49\u540C\u4E8E\u8BF7\u6C42<code>/foo/index.html</code>\uFF09\uFF0C\u4F46\u4E5F\u53EF\u80FD\u6709\u5176\u4ED6\u7684\u5904\u7406\uFF08\u6BD4\u5982\u5217\u51FA\u76EE\u5F55\u91CC\u9762\u7684\u6240\u6709\u6587\u4EF6\uFF09\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u670D\u52A1\u5668\u7684\u8BBE\u7F6E\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u8BBF\u95EE<code>www.example.com</code>\u8FD9\u4E2A\u7F51\u5740\uFF0C\u5F88\u53EF\u80FD\u8FD4\u56DE\u7684\u662F\u7F51\u9875\u6587\u4EF6<code>www.example.com/index.html</code>\u3002</p><h3 id="\u67E5\u8BE2\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u53C2\u6570" aria-hidden="true">#</a> \u67E5\u8BE2\u53C2\u6570</h3><p>\u67E5\u8BE2\u53C2\u6570\uFF08parameter\uFF09\u662F\u63D0\u4F9B\u7ED9\u670D\u52A1\u5668\u7684\u989D\u5916\u4FE1\u606F\u3002\u53C2\u6570\u7684\u4F4D\u7F6E\u662F\u5728\u8DEF\u5F84\u540E\u9762\uFF0C\u4E24\u8005\u4E4B\u95F4\u4F7F\u7528<code>?</code>\u5206\u9694\uFF0C\u4E0A\u4F8B\u662F<code>?key1=value1&amp;key2=value2</code>\u3002</p><p>\u67E5\u8BE2\u53C2\u6570\u53EF\u4EE5\u6709\u4E00\u7EC4\u6216\u591A\u7EC4\u3002\u6BCF\u7EC4\u53C2\u6570\u90FD\u662F\u952E\u503C\u5BF9\uFF08key-value pair\uFF09\u7684\u5F62\u5F0F\uFF0C\u540C\u65F6\u5177\u6709\u952E\u540D(key)\u548C\u952E\u503C(value)\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u4F7F\u7528\u7B49\u53F7\uFF08<code>=</code>\uFF09\u8FDE\u63A5\u3002\u6BD4\u5982\uFF0C<code>key1=value</code>\u5C31\u662F\u4E00\u4E2A\u952E\u503C\u5BF9\uFF0C<code>key1</code>\u662F\u952E\u540D\uFF0C<code>value1</code>\u662F\u952E\u503C\u3002</p><p>\u591A\u7EC4\u53C2\u6570\u4E4B\u95F4\u4F7F\u7528<code>&amp;</code>\u8FDE\u63A5\uFF0C\u6BD4\u5982<code>key1=value1&amp;key2=value2</code>\u3002</p><h3 id="\u951A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u951A\u70B9" aria-hidden="true">#</a> \u951A\u70B9</h3><p>\u951A\u70B9\uFF08anchor\uFF09\u662F\u7F51\u9875\u5185\u90E8\u7684\u5B9A\u4F4D\u70B9\uFF0C\u4F7F\u7528<code>#</code>\u52A0\u4E0A\u951A\u70B9\u540D\u79F0\uFF0C\u653E\u5728\u7F51\u5740\u7684\u6700\u540E\uFF0C\u6BD4\u5982<code>#anchor</code>\u3002\u6D4F\u89C8\u5668\u52A0\u8F7D\u9875\u9762\u4EE5\u540E\uFF0C\u4F1A\u81EA\u52A8\u6EDA\u52A8\u5230\u951A\u70B9\u6240\u5728\u7684\u4F4D\u7F6E\u3002</p><p>\u951A\u70B9\u540D\u79F0\u901A\u8FC7\u7F51\u9875\u5143\u7D20\u7684<code>id</code>\u5C5E\u6027\u547D\u540D\uFF0C\u8BE6\u89C1\u300A\u5143\u7D20\u7684\u5C5E\u6027\u300B\u4E00\u7AE0\u3002</p><h2 id="url-\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#url-\u5B57\u7B26" aria-hidden="true">#</a> URL \u5B57\u7B26</h2><p>URL \u7684\u5404\u4E2A\u7EC4\u6210\u90E8\u5206\uFF0C\u53EA\u80FD\u4F7F\u7528\u4EE5\u4E0B\u8FD9\u4E9B\u5B57\u7B26\u3002</p><ul><li>26\u4E2A\u82F1\u8BED\u5B57\u6BCD\uFF08\u5305\u62EC\u5927\u5199\u548C\u5C0F\u5199\uFF09</li><li>10\u4E2A\u963F\u62C9\u4F2F\u6570\u5B57</li><li>\u8FDE\u8BCD\u53F7\uFF08<code>-</code>\uFF09</li><li>\u53E5\u70B9\uFF08<code>.</code>\uFF09</li><li>\u4E0B\u5212\u7EBF\uFF08<code>_</code>\uFF09</li></ul><p>\u6B64\u5916\uFF0C\u8FD8\u670918\u4E2A\u5B57\u7B26\u5C5E\u4E8E URL \u7684\u4FDD\u7559\u5B57\u7B26\uFF0C\u53EA\u80FD\u5728\u7ED9\u5B9A\u7684\u4F4D\u7F6E\u51FA\u73B0\u3002\u6BD4\u5982\uFF0C\u67E5\u8BE2\u53C2\u6570\u7684\u5F00\u5934\u662F\u95EE\u53F7\uFF08<code>?</code>\uFF09\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u95EE\u53F7\u53EA\u80FD\u51FA\u73B0\u67E5\u8BE2\u53C2\u6570\u7684\u5F00\u5934\uFF0C\u51FA\u73B0\u5728\u5176\u4ED6\u4F4D\u7F6E\u5C31\u662F\u975E\u6CD5\u7684\uFF0C\u4F1A\u5BFC\u81F4\u7F51\u5740\u89E3\u6790\u9519\u8BEF\u3002\u7F51\u5740\u7684\u5176\u4ED6\u90E8\u5206\u5982\u679C\u8981\u4F7F\u7528\u8FD9\u4E9B\u4FDD\u7559\u5B57\u7B26\uFF0C\u5FC5\u987B\u4F7F\u7528\u5B83\u4EEC\u7684\u8F6C\u4E49\u5F62\u5F0F\u3002</p><p>URL \u5B57\u7B26\u8F6C\u4E49\u7684\u65B9\u6CD5\u662F\uFF0C\u5728\u8FD9\u4E9B\u5B57\u7B26\u7684\u5341\u516D\u8FDB\u5236 ASCII \u7801\u524D\u9762\u52A0\u4E0A\u767E\u5206\u53F7\uFF08<code>%</code>\uFF09\u3002\u4E0B\u9762\u662F\u8FD918\u4E2A\u5B57\u7B26\u53CA\u5176\u8F6C\u4E49\u5F62\u5F0F\u3002</p><ul><li><code>!</code>\uFF1A%21</li><li><code>#</code>\uFF1A%23</li><li><code>$</code>\uFF1A%24</li><li><code>&amp;</code>\uFF1A%26</li><li><code>&#39;</code>\uFF1A%27</li><li><code>(</code>\uFF1A%28</li><li><code>)</code>\uFF1A%29</li><li><code>*</code>\uFF1A%2A</li><li><code>+</code>\uFF1A%2B</li><li><code>,</code>\uFF1A%2C</li><li><code>/</code>\uFF1A%2F</li><li><code>:</code>\uFF1A%3A</li><li><code>;</code>\uFF1A%3B</li><li><code>=</code>\uFF1A%3D</li><li><code>?</code>\uFF1A%3F</li><li><code>@</code>\uFF1A%40</li><li><code>[</code>\uFF1A%5B</li><li><code>]</code>\uFF1A%5D</li></ul><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u6709\u4E00\u4E2A\u7F51\u9875\u7684 URL \u662F<code>foo?bar.html</code>\uFF0C\u5373\u6587\u4EF6\u91CC\u9762\u5305\u542B\u4E00\u4E2A\u95EE\u53F7\uFF0C\u90A3\u4E48\u9700\u8981\u5199\u6210<code>foo%3Fbar.html</code>\u3002</p><p>URL \u7684\u5408\u6CD5\u5B57\u7B26\uFF0C\u5176\u5B9E\u4E5F\u53EF\u4EE5\u91C7\u7528\u8FD9\u79CD\u8F6C\u4E49\u65B9\u6CD5\uFF0C\u4F46\u662F\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002\u6BD4\u5982\uFF0C\u5B57\u6BCD<code>a</code>\u7684\u5341\u516D\u8FDB\u5236 ASCII \u7801\u662F<code>61</code>\uFF0C\u8F6C\u4E49\u5F62\u5F0F\u540E\u5C31\u662F<code>%61</code>\u3002\u56E0\u6B64\uFF0C<code>www.apple.com</code>\u53C8\u53EF\u4EE5\u5199\u6210<code>www.%61pple.com</code>\uFF0C\u6D4F\u89C8\u5668\u4E00\u6837\u8BC6\u522B\u3002</p><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u7A7A\u683C\u7684\u8F6C\u4E49\u5F62\u5F0F\u662F<code>%20</code>\u3002\u5BF9\u4E8E\u90A3\u4E9B\u5305\u542B\u7A7A\u683C\u7684\u6587\u4EF6\u540D\uFF0C\u8FD9\u4E2A\u8F6C\u4E49\u662F\u5FC5\u987B\u7684\u3002</p><p>\u65E2\u4E0D\u5C5E\u4E8E\u5408\u6CD5\u5B57\u7B26\u3001\u4E5F\u4E0D\u5C5E\u4E8E\u4FDD\u7559\u5B57\u7B26\u7684\u5176\u4ED6\u5B57\u7B26\uFF08\u6BD4\u5982\u6C49\u5B57\uFF09\uFF0C\u7406\u8BBA\u4E0A\u4E0D\u9700\u8981\u624B\u52A8\u8F6C\u4E49\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5199\u5728 URL \u91CC\u9762\uFF0C\u6BD4\u5982<code>www.example.com/\u4E2D\u56FD.html</code>\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u5C06\u5B83\u4EEC\u8F6C\u4E49\uFF0C\u53D1\u7ED9\u670D\u52A1\u5668\u3002\u8F6C\u4E49\u65B9\u6CD5\u662F\u4F7F\u7528\u8FD9\u4E9B\u5B57\u7B26\u7684\u5341\u516D\u8FDB\u5236 UTF-8 \u7F16\u7801\uFF0C\u6BCF\u4E24\u4F4D\u7B97\u4F5C\u4E00\u7EC4\uFF0C\u7136\u540E\u6BCF\u7EC4\u5934\u90E8\u6DFB\u52A0\u767E\u5206\u53F7\uFF08<code>%</code>\uFF09\u3002</p><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u6C49\u5B57<code>\u4E2D</code>\u7684 UTF-8 \u5341\u516D\u8FDB\u5236\u7F16\u7801\u662F<code>e4b8ad</code>\uFF0C\u6BCF\u4E24\u4E2A\u5B57\u7B26\u4E00\u7EC4\uFF0CURL \u8F6C\u4E49\u540E\u5C31\u4E3A<code>%e4%b8%ad</code>\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0CURL \u91CC\u9762\u51E1\u662F\u6709\u6C49\u5B57<code>\u4E2D</code>\u7684\u5730\u65B9\uFF0C\u90FD\u8981\u5199\u6210<code>%e4%b8%ad</code>\u3002\u56E0\u6B64\uFF0C\u8BBF\u95EE<code>www.example.com/\u4E2D\u56FD.html</code>\u8FD9\u4E2A\u7F51\u5740\uFF0C\u9700\u8981\u5199\u6210\u4E0B\u9762\u7684\u6837\u5B50\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>www.example.com/%e4%b8%ad%e5%9b%bd.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>\u4E2D</code>\u7684\u8F6C\u4E49\u5F62\u5F0F\u662F<code>%e4%b8%ad</code>\uFF0C<code>\u56FD</code>\u662F<code>%e5%9b%bd</code>\u3002</p><h2 id="\u7EDD\u5BF9-url-\u548C\u76F8\u5BF9-url" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9-url-\u548C\u76F8\u5BF9-url" aria-hidden="true">#</a> \u7EDD\u5BF9 URL \u548C\u76F8\u5BF9 URL</h2><p>URL \u5206\u6210\u4E24\u79CD\uFF1A\u7EDD\u5BF9 URL \u548C\u76F8\u5BF9 URL\u3002</p><p>\u7EDD\u5BF9 URL \u6307\u7684\u662F\uFF0C\u53EA\u9760 URL \u672C\u8EAB\u5C31\u80FD\u786E\u5B9A\u8D44\u6E90\u7684\u4F4D\u7F6E\u3002\u8FD9\u610F\u5473\u7740\uFF0CURL \u5FC5\u987B\u5E26\u6709\u8D44\u6E90\u7684\u5B8C\u6574\u4FE1\u606F\uFF0C\u5305\u542B\u534F\u8BAE\u3001\u4E3B\u673A\u3001\u8DEF\u5F84\u7B49\u90E8\u5206\u3002\u524D\u9762\u7684\u4F8B\u5B50\u90FD\u662F\u7EDD\u5BF9 URL\u3002</p><p>\u76F8\u5BF9 URL \u6307\u7684\u662F\uFF0CURL \u4E0D\u5305\u542B\u8D44\u6E90\u4F4D\u7F6E\u7684\u5168\u90E8\u4FE1\u606F\uFF0C\u5FC5\u987B\u7ED3\u5408\u5F53\u524D\u7F51\u9875\u7684\u4F4D\u7F6E\uFF0C\u624D\u80FD\u5B9A\u4F4D\u8D44\u6E90\u3002\u6BD4\u5982\uFF0C\u5F53\u524D\u7F51\u9875\u7684 URL \u662F<code>https://www.example.com/path/index.html</code>\uFF0C\u8BE5\u7F51\u9875\u4E0A\u9762\u6709\u4E00\u4E2A\u8D44\u6E90\uFF0CURL \u6307\u5411<code>a.html</code>\uFF0C\u8FD9\u4E2A\u5C31\u662F\u76F8\u5BF9 URL\u3002\u56E0\u4E3A\u53EA\u77E5\u9053<code>a.html</code>\uFF0C\u5E76\u4E0D\u80FD\u5B9A\u4F4D\u8D44\u6E90\u3002\u6D4F\u89C8\u5668\u5047\u5B9A\uFF0C<code>a.html</code>\u4E0E\u5F53\u524D\u7F51\u5740\u5728\u540C\u4E00\u4E2A\u5B50\u76EE\u5F55\u4E0B\u9762\uFF0C\u4ECE\u800C\u5F97\u5230\u7EDD\u5BF9 URL <code>https://www.example.com/path/a.html</code>\u3002</p><p>\u76F8\u5BF9 URL \u5982\u679C\u4EE5\u659C\u6760\uFF08<code>/</code>\uFF09\u5F00\u5934\uFF0C\u5C31\u8868\u793A\u7F51\u7AD9\u7684\u6839\u76EE\u5F55\u3002\u5426\u5219\uFF0C\u5FC5\u987B\u4EE5\u5F53\u524D\u76EE\u5F55\u4E3A\u8D77\u70B9\uFF0C\u63A8\u7B97\u8D44\u6E90\u7684\u4F4D\u7F6E\u3002\u6BD4\u5982\uFF0C\u76F8\u5BF9 URL <code>/foo/bar.html</code>\u8868\u793A\u7F51\u7AD9\u6839\u76EE\u5F55\u7684\u5B50\u76EE\u5F55<code>foo</code>\uFF0C<code>foo/bar.html</code>\u8868\u793A\u5728\u5F53\u524D\u76EE\u5F55\u7684<code>foo</code>\u5B50\u76EE\u5F55\u3002</p><p>URL \u8FD8\u53EF\u4EE5\u4F7F\u7528\u4E24\u4E2A\u7279\u6B8A\u7B80\u5199\uFF0C\u8868\u793A\u7279\u5B9A\u4F4D\u7F6E\u3002</p><ul><li><code>.</code>\uFF1A\u8868\u793A\u5F53\u524D\u76EE\u5F55\uFF0C\u6BD4\u5982<code>./a.html</code>\uFF08\u5F53\u524D\u76EE\u5F55\u4E0B\u7684<code>a.html</code>\u6587\u4EF6\uFF09</li><li><code>..</code>\uFF1A\u8868\u793A\u4E0A\u7EA7\u76EE\u5F55\uFF0C\u6BD4\u5982<code>../a.html</code>\uFF08\u4E0A\u7EA7\u76EE\u5F55\u4E0B\u7684<code>a.html</code>\u6587\u4EF6\uFF09</li></ul><p>\u8FD9\u4E24\u79CD\u7B80\u5199\u53EF\u4EE5\u591A\u4E2A\u8FDE\u7528\uFF0C\u6BD4\u5982<code>../../</code>\u8868\u793A\u4E0A\u4E24\u7EA7\u76EE\u5F55\u3002</p><p>\u7EDD\u5BF9 URL \u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E24\u4E2A\u7B80\u5199\uFF0C\u6BD4\u5982<code>www.example.com/./index.html</code>\u7B49\u540C\u4E8E<code>www.example.com/index.html</code>\uFF0C\u8FD9\u65F6<code>.</code>\u76F8\u5F53\u4E8E\u6839\u76EE\u5F55\u7684\u5F53\u524D\u76EE\u5F55\uFF0C\u5373\u6839\u76EE\u5F55\u672C\u8EAB\u3002</p><h2 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> <code>&lt;base&gt;</code></h2><p><code>&lt;base&gt;</code>\u6807\u7B7E\u6307\u5B9A\u7F51\u9875\u5185\u90E8\u7684\u6240\u6709\u76F8\u5BF9 URL \u7684\u8BA1\u7B97\u57FA\u51C6\u3002\u6574\u5F20\u7F51\u9875\u53EA\u80FD\u6709\u4E00\u4E2A<code>&lt;base&gt;</code>\u6807\u7B7E\uFF0C\u800C\u4E14\u53EA\u80FD\u653E\u5728<code>&lt;head&gt;</code>\u91CC\u9762\u3002\u5B83\u662F\u5355\u72EC\u4F7F\u7528\u7684\u6807\u7B7E\uFF0C\u6CA1\u6709\u95ED\u5408\u6807\u7B7E\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.example.com/files/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;base&gt;</code>\u6807\u7B7E\u7684<code>href</code>\u5C5E\u6027\u7ED9\u51FA\u8BA1\u7B97\u7684\u57FA\u51C6\u7F51\u5740\uFF0C<code>target</code>\u5C5E\u6027\u7ED9\u51FA\u5982\u4F55\u6253\u5F00\u94FE\u63A5\u7684\u8BF4\u660E\uFF08\u53C2\u89C1\u300A\u94FE\u63A5\u300B\u4E00\u7AE0\uFF09\u3002\u5DF2\u77E5\u8BA1\u7B97\u57FA\u51C6\u662F<code>https://www.example.com/files/</code>\uFF0C\u90A3\u4E48\u76F8\u5BF9 URL <code>foo.html</code>\uFF0C\u5C31\u53EF\u4EE5\u8F6C\u6210\u7EDD\u5BF9 URL <code>https://www.example.com/files/foo.html</code>\u3002</p><p>\u6CE8\u610F\uFF0C<code>&lt;base&gt;</code>\u6807\u7B7E\u5FC5\u987B\u81F3\u5C11\u5177\u6709<code>href</code>\u5C5E\u6027\u6216<code>target</code>\u5C5E\u6027\u4E4B\u4E00\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://foo.com/app/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u65E6\u8BBE\u7F6E\u4E86<code>&lt;base&gt;</code>\uFF0C\u5C31\u5BF9\u6574\u4E2A\u7F51\u9875\u90FD\u6709\u6548\u3002\u5982\u679C\u8981\u6539\u53D8\u67D0\u4E2A\u94FE\u63A5\u7684\u884C\u4E3A\uFF0C\u53EA\u80FD\u7528\u7EDD\u5BF9\u94FE\u63A5\u66FF\u4EE3\u76F8\u5BF9\u94FE\u63A5\u3002\u5C24\u5176\u9700\u8981\u6CE8\u610F\u951A\u70B9\uFF0C\u8FD9\u65F6\u951A\u70B9\u4E5F\u662F\u9488\u5BF9<code>&lt;base&gt;</code>\u8BA1\u7B97\u7684\uFF0C\u800C\u4E0D\u662F\u9488\u5BF9\u5F53\u524D\u7F51\u9875\u7684 URL\u3002</p>`,60),t=[n];function s(l,p){return a(),o("div",null,t)}var r=e(d,[["render",s],["__file","url.html.vue"]]);export{r as default};