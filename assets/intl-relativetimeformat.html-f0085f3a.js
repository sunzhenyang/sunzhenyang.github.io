const n=JSON.parse(`{"key":"v-44b5ad10","path":"/technology/webapi/intl-relativetimeformat.html","title":"Intl.RelativeTimeFormat","lang":"zh-CN","frontmatter":{"title":"Intl.RelativeTimeFormat","icon":"article","category":["Web API"],"article":false,"tag":["Web API"],"copyright":"Copyright by 阮一峰","description":"很多日期库支持显示相对时间，比如“昨天”、“五分钟前”、“两个月之前”等等。由于不同的语言，日期显示的格式和相关词语都不同，造成这些库的体积非常大。 现在，浏览器提供内置的 Intl.RelativeTimeFormat API，可以不使用这些库，直接显示相对时间。 基本用法 Intl.RelativeTimeFormat()是一个构造函数，接受一个语言代码作为参数，返回一个相对时间的实例对象。如果省略参数，则默认传入当前运行时的语言代码。 const rtf = new Intl.RelativeTimeFormat('en'); rtf.format(3.14, 'second') // \\"in 3.14 seconds\\" rtf.format(-15, 'minute') // \\"15 minutes ago\\" rtf.format(8, 'hour') // \\"in 8 hours\\" rtf.format(-2, 'day') // \\"2 days ago\\" rtf.format(3, 'week') // \\"in 3 weeks\\" rtf.format(-5, 'month') // \\"5 months ago\\" rtf.format(2, 'quarter') // \\"in 2 quarters\\" rtf.format(-42, 'year') // \\"42 years ago\\"","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/webapi/intl-relativetimeformat.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Intl.RelativeTimeFormat"}],["meta",{"property":"og:description","content":"很多日期库支持显示相对时间，比如“昨天”、“五分钟前”、“两个月之前”等等。由于不同的语言，日期显示的格式和相关词语都不同，造成这些库的体积非常大。 现在，浏览器提供内置的 Intl.RelativeTimeFormat API，可以不使用这些库，直接显示相对时间。 基本用法 Intl.RelativeTimeFormat()是一个构造函数，接受一个语言代码作为参数，返回一个相对时间的实例对象。如果省略参数，则默认传入当前运行时的语言代码。 const rtf = new Intl.RelativeTimeFormat('en'); rtf.format(3.14, 'second') // \\"in 3.14 seconds\\" rtf.format(-15, 'minute') // \\"15 minutes ago\\" rtf.format(8, 'hour') // \\"in 8 hours\\" rtf.format(-2, 'day') // \\"2 days ago\\" rtf.format(3, 'week') // \\"in 3 weeks\\" rtf.format(-5, 'month') // \\"5 months ago\\" rtf.format(2, 'quarter') // \\"in 2 quarters\\" rtf.format(-42, 'year') // \\"42 years ago\\""}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"Web API"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Intl.RelativeTimeFormat\\",\\"description\\":\\"很多日期库支持显示相对时间，比如“昨天”、“五分钟前”、“两个月之前”等等。由于不同的语言，日期显示的格式和相关词语都不同，造成这些库的体积非常大。 现在，浏览器提供内置的 Intl.RelativeTimeFormat API，可以不使用这些库，直接显示相对时间。 基本用法 Intl.RelativeTimeFormat()是一个构造函数，接受一个语言代码作为参数，返回一个相对时间的实例对象。如果省略参数，则默认传入当前运行时的语言代码。 const rtf = new Intl.RelativeTimeFormat('en'); rtf.format(3.14, 'second') // \\\\\\"in 3.14 seconds\\\\\\" rtf.format(-15, 'minute') // \\\\\\"15 minutes ago\\\\\\" rtf.format(8, 'hour') // \\\\\\"in 8 hours\\\\\\" rtf.format(-2, 'day') // \\\\\\"2 days ago\\\\\\" rtf.format(3, 'week') // \\\\\\"in 3 weeks\\\\\\" rtf.format(-5, 'month') // \\\\\\"5 months ago\\\\\\" rtf.format(2, 'quarter') // \\\\\\"in 2 quarters\\\\\\" rtf.format(-42, 'year') // \\\\\\"42 years ago\\\\\\"\\"}"]]},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"Intl.RelativeTimeFormat.prototype.format()","slug":"intl-relativetimeformat-prototype-format","link":"#intl-relativetimeformat-prototype-format","children":[]},{"level":2,"title":"Intl.RelativeTimeFormat.prototype.formatToParts()","slug":"intl-relativetimeformat-prototype-formattoparts","link":"#intl-relativetimeformat-prototype-formattoparts","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":3.2,"words":961},"filePathRelative":"technology/webapi/intl-relativetimeformat.md","localizedDate":"2023年1月11日","excerpt":"<p>很多日期库支持显示相对时间，比如“昨天”、“五分钟前”、“两个月之前”等等。由于不同的语言，日期显示的格式和相关词语都不同，造成这些库的体积非常大。</p>\\n<p>现在，浏览器提供内置的 Intl.RelativeTimeFormat API，可以不使用这些库，直接显示相对时间。</p>\\n<h2> 基本用法</h2>\\n<p><code>Intl.RelativeTimeFormat()</code>是一个构造函数，接受一个语言代码作为参数，返回一个相对时间的实例对象。如果省略参数，则默认传入当前运行时的语言代码。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> rtf <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Intl<span class=\\"token punctuation\\">.</span>RelativeTimeFormat</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'en'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nrtf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3.14</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'second'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// \\"in 3.14 seconds\\"</span>\\nrtf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">15</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'minute'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// \\"15 minutes ago\\"</span>\\nrtf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'hour'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// \\"in 8 hours\\"</span>\\nrtf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'day'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// \\"2 days ago\\"</span>\\nrtf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'week'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// \\"in 3 weeks\\"</span>\\nrtf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'month'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// \\"5 months ago\\"</span>\\nrtf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'quarter'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// \\"in 2 quarters\\"</span>\\nrtf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">42</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'year'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// \\"42 years ago\\"</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
