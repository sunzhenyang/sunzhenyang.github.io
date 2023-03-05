const e=JSON.parse(`{"key":"v-fb9442de","path":"/technology/webapi/websocket.html","title":"WebSocket","lang":"zh-CN","frontmatter":{"title":"WebSocket","icon":"article","category":"Web API","article":false,"tag":["Web API"],"copyright":"Copyright by 阮一峰","description":"WebSocket 是一种网络通信协议，很多高级功能都需要它。 初次接触 WebSocket 的人，都会问同样的问题：我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？ 答案很简单，因为 HTTP 协议有一个缺陷：通信只能由客户端发起。举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。HTTP 协议的这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用“轮询”：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/webapi/websocket.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"WebSocket"}],["meta",{"property":"og:description","content":"WebSocket 是一种网络通信协议，很多高级功能都需要它。 初次接触 WebSocket 的人，都会问同样的问题：我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？ 答案很简单，因为 HTTP 协议有一个缺陷：通信只能由客户端发起。举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。HTTP 协议的这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用“轮询”：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"Web API"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"WebSocket\\",\\"description\\":\\"WebSocket 是一种网络通信协议，很多高级功能都需要它。 初次接触 WebSocket 的人，都会问同样的问题：我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？ 答案很简单，因为 HTTP 协议有一个缺陷：通信只能由客户端发起。举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。HTTP 协议的这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用“轮询”：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。\\"}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"WebSocket 握手","slug":"websocket-握手","link":"#websocket-握手","children":[]},{"level":2,"title":"客户端的简单示例","slug":"客户端的简单示例","link":"#客户端的简单示例","children":[]},{"level":2,"title":"客户端 API","slug":"客户端-api","link":"#客户端-api","children":[{"level":3,"title":"构造函数 WebSocket","slug":"构造函数-websocket","link":"#构造函数-websocket","children":[]},{"level":3,"title":"webSocket.readyState","slug":"websocket-readystate","link":"#websocket-readystate","children":[]},{"level":3,"title":"webSocket.onopen","slug":"websocket-onopen","link":"#websocket-onopen","children":[]},{"level":3,"title":"webSocket.onclose","slug":"websocket-onclose","link":"#websocket-onclose","children":[]},{"level":3,"title":"webSocket.onmessage","slug":"websocket-onmessage","link":"#websocket-onmessage","children":[]},{"level":3,"title":"webSocket.send()","slug":"websocket-send","link":"#websocket-send","children":[]},{"level":3,"title":"webSocket.bufferedAmount","slug":"websocket-bufferedamount","link":"#websocket-bufferedamount","children":[]},{"level":3,"title":"webSocket.onerror","slug":"websocket-onerror","link":"#websocket-onerror","children":[]}]},{"level":2,"title":"WebSocket 服务器","slug":"websocket-服务器","link":"#websocket-服务器","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":6.65,"words":1996},"filePathRelative":"technology/webapi/websocket.md","localizedDate":"2023年1月11日","excerpt":"<p>WebSocket 是一种网络通信协议，很多高级功能都需要它。</p>\\n<p>初次接触 WebSocket 的人，都会问同样的问题：我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？</p>\\n<p>答案很简单，因为 HTTP 协议有一个缺陷：通信只能由客户端发起。举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。HTTP 协议的这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用“轮询”：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。</p>","autoDesc":true}`);export{e as data};
