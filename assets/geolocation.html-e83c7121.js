const o=JSON.parse(`{"key":"v-6dd5201c","path":"/technology/webapi/geolocation.html","title":"Geolocation API","lang":"zh-CN","frontmatter":{"title":"Geolocation API","icon":"article","category":["Web API"],"article":false,"tag":["Web API"],"copyright":"Copyright by 阮一峰","description":"Geolocation API 用于获取用户的地理位置。 由于该功能涉及用户隐私，所以浏览器会提示用户，是否同意给出地理位置，用户可能会拒绝。另外，这个 API 只能在 HTTPS 环境使用。 浏览器通过navigator.geolocation属性提供该 API。 Geolocation 对象 navigator.geolocation属性返回一个 Geolocation 对象。该对象具有以下三个方法。 Geolocation.getCurrentPosition()：返回一个 Position 对象，表示用户的当前位置。 Geolocation.watchPosition()：指定一个监听函数，每当用户的位置发生变化，就执行该监听函数。 Geolocation.clearWatch()：取消watchPosition()方法指定的监听函数。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/webapi/geolocation.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Geolocation API"}],["meta",{"property":"og:description","content":"Geolocation API 用于获取用户的地理位置。 由于该功能涉及用户隐私，所以浏览器会提示用户，是否同意给出地理位置，用户可能会拒绝。另外，这个 API 只能在 HTTPS 环境使用。 浏览器通过navigator.geolocation属性提供该 API。 Geolocation 对象 navigator.geolocation属性返回一个 Geolocation 对象。该对象具有以下三个方法。 Geolocation.getCurrentPosition()：返回一个 Position 对象，表示用户的当前位置。 Geolocation.watchPosition()：指定一个监听函数，每当用户的位置发生变化，就执行该监听函数。 Geolocation.clearWatch()：取消watchPosition()方法指定的监听函数。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"Web API"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Geolocation API\\",\\"description\\":\\"Geolocation API 用于获取用户的地理位置。 由于该功能涉及用户隐私，所以浏览器会提示用户，是否同意给出地理位置，用户可能会拒绝。另外，这个 API 只能在 HTTPS 环境使用。 浏览器通过navigator.geolocation属性提供该 API。 Geolocation 对象 navigator.geolocation属性返回一个 Geolocation 对象。该对象具有以下三个方法。 Geolocation.getCurrentPosition()：返回一个 Position 对象，表示用户的当前位置。 Geolocation.watchPosition()：指定一个监听函数，每当用户的位置发生变化，就执行该监听函数。 Geolocation.clearWatch()：取消watchPosition()方法指定的监听函数。\\"}"]]},"headers":[{"level":2,"title":"Geolocation 对象","slug":"geolocation-对象","link":"#geolocation-对象","children":[{"level":3,"title":"Geolocation.getCurrentPosition()","slug":"geolocation-getcurrentposition","link":"#geolocation-getcurrentposition","children":[]},{"level":3,"title":"Geolocation.watchPosition()","slug":"geolocation-watchposition","link":"#geolocation-watchposition","children":[]},{"level":3,"title":"Geolocation.clearWatch()","slug":"geolocation-clearwatch","link":"#geolocation-clearwatch","children":[]}]},{"level":2,"title":"Coordinates 对象","slug":"coordinates-对象","link":"#coordinates-对象","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":3.65,"words":1096},"filePathRelative":"technology/webapi/geolocation.md","localizedDate":"2023年1月11日","excerpt":"<p>Geolocation API 用于获取用户的地理位置。</p>\\n<p>由于该功能涉及用户隐私，所以浏览器会提示用户，是否同意给出地理位置，用户可能会拒绝。另外，这个 API 只能在 HTTPS 环境使用。</p>\\n<p>浏览器通过<code>navigator.geolocation</code>属性提供该 API。</p>\\n<h2> Geolocation 对象</h2>\\n<p><code>navigator.geolocation</code>属性返回一个 Geolocation 对象。该对象具有以下三个方法。</p>\\n<ul>\\n<li><code>Geolocation.getCurrentPosition()</code>：返回一个 Position 对象，表示用户的当前位置。</li>\\n<li><code>Geolocation.watchPosition()</code>：指定一个监听函数，每当用户的位置发生变化，就执行该监听函数。</li>\\n<li><code>Geolocation.clearWatch()</code>：取消<code>watchPosition()</code>方法指定的监听函数。</li>\\n</ul>","autoDesc":true}`);export{o as data};
