const e=JSON.parse(`{"key":"v-55b3c41f","path":"/technology/bash/archives/regex.html","title":"正则表达式","lang":"zh-CN","frontmatter":{"title":"正则表达式","icon":"article","category":"bash","article":false,"tag":["bash"],"copyright":"Copyright by wangdoc","description":"正则表达式是表达文本模式的方法。 .：匹配任何单个字符。 ?：上一项是可选的，最多匹配一次。 *：前一项将被匹配零次或多次。 +：前一项将被匹配一次或多次。 {N}：上一项完全匹配N次。 {N，}：前一项匹配N次或多次。 {N，M}：前一项至少匹配N次，但不超过M次。 --：表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。 ^：匹配行首的空字符串；也代表不在列表范围内的字符。 $：匹配行尾的空字符串。 \\\\b：匹配单词边缘的空字符串。 \\\\B：匹配空字符串，前提是它不在单词的边缘。 \\\\&lt;：匹配单词开头的空字符串。 \\\\&gt;：匹配单词末尾的空字符串。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/bash/archives/regex.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"正则表达式"}],["meta",{"property":"og:description","content":"正则表达式是表达文本模式的方法。 .：匹配任何单个字符。 ?：上一项是可选的，最多匹配一次。 *：前一项将被匹配零次或多次。 +：前一项将被匹配一次或多次。 {N}：上一项完全匹配N次。 {N，}：前一项匹配N次或多次。 {N，M}：前一项至少匹配N次，但不超过M次。 --：表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。 ^：匹配行首的空字符串；也代表不在列表范围内的字符。 $：匹配行尾的空字符串。 \\\\b：匹配单词边缘的空字符串。 \\\\B：匹配空字符串，前提是它不在单词的边缘。 \\\\&lt;：匹配单词开头的空字符串。 \\\\&gt;：匹配单词末尾的空字符串。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:author","content":"Yang"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"正则表达式\\",\\"description\\":\\"正则表达式是表达文本模式的方法。 .：匹配任何单个字符。 ?：上一项是可选的，最多匹配一次。 *：前一项将被匹配零次或多次。 +：前一项将被匹配一次或多次。 {N}：上一项完全匹配N次。 {N，}：前一项匹配N次或多次。 {N，M}：前一项至少匹配N次，但不超过M次。 --：表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。 ^：匹配行首的空字符串；也代表不在列表范围内的字符。 $：匹配行尾的空字符串。 \\\\\\\\b：匹配单词边缘的空字符串。 \\\\\\\\B：匹配空字符串，前提是它不在单词的边缘。 \\\\\\\\&lt;：匹配单词开头的空字符串。 \\\\\\\\&gt;：匹配单词末尾的空字符串。\\"}"]]},"headers":[{"level":2,"title":"元字符","slug":"元字符","link":"#元字符","children":[]},{"level":2,"title":"方括号","slug":"方括号","link":"#方括号","children":[]},{"level":2,"title":"预定义字符类","slug":"预定义字符类","link":"#预定义字符类","children":[]},{"level":2,"title":"选择","slug":"选择","link":"#选择","children":[]},{"level":2,"title":"量词操作符","slug":"量词操作符","link":"#量词操作符","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":4.55,"words":1366},"filePathRelative":"technology/bash/archives/regex.md","localizedDate":"2023年1月11日","excerpt":"<p><code>正则表达式</code>是表达文本模式的方法。</p>\\n<ul>\\n<li><code>.</code>：匹配任何单个字符。</li>\\n<li><code>?</code>：上一项是可选的，最多匹配一次。</li>\\n<li><code>*</code>：前一项将被匹配零次或多次。</li>\\n<li><code>+</code>：前一项将被匹配一次或多次。</li>\\n<li><code>{N}</code>：上一项完全匹配N次。</li>\\n<li><code>{N，}</code>：前一项匹配N次或多次。</li>\\n<li><code>{N，M}</code>：前一项至少匹配N次，但不超过M次。</li>\\n<li><code>--</code>：表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。</li>\\n<li><code>^</code>：匹配行首的空字符串；也代表不在列表范围内的字符。</li>\\n<li><code>$</code>：匹配行尾的空字符串。</li>\\n<li><code>\\\\b</code>：匹配单词边缘的空字符串。</li>\\n<li><code>\\\\B</code>：匹配空字符串，前提是它不在单词的边缘。</li>\\n<li><code>\\\\&lt;</code>：匹配单词开头的空字符串。</li>\\n<li><code>\\\\&gt;</code>：匹配单词末尾的空字符串。</li>\\n</ul>","autoDesc":true}`);export{e as data};
