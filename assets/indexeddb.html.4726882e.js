const e=JSON.parse(`{"key":"v-5db94551","path":"/technology/javascript/bom/indexeddb.html","title":"IndexedDB API","lang":"zh-CN","frontmatter":{"title":"IndexedDB API","icon":"article","category":["javascript"],"article":false,"tag":["javascript"],"copyright":"Copyright by \u962E\u4E00\u5CF0","summary":"\u6982\u8FF0 \u968F\u7740\u6D4F\u89C8\u5668\u7684\u529F\u80FD\u4E0D\u65AD\u589E\u5F3A\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u7F51\u7AD9\u5F00\u59CB\u8003\u8651\uFF0C\u5C06\u5927\u91CF\u6570\u636E\u50A8\u5B58\u5728\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C11\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E\uFF0C\u76F4\u63A5\u4ECE\u672C\u5730\u83B7\u53D6\u6570\u636E\u3002 \u73B0\u6709\u7684\u6D4F\u89C8\u5668\u6570\u636E\u50A8\u5B58\u65B9\u6848\uFF0C\u90FD\u4E0D\u9002\u5408\u50A8\u5B58\u5927\u91CF\u6570\u636E\uFF1ACookie \u7684\u5927\u5C0F\u4E0D\u8D85\u8FC7 4KB\uFF0C\u4E14\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u53D1\u9001\u56DE\u670D\u52A1\u5668\uFF1BLocalStorage \u5728 2.5MB \u5230 10MB \u4E4B\u95F4\uFF08\u5404\u5BB6\u6D4F\u89C8\u5668\u4E0D\u540C\uFF09\uFF0C\u800C\u4E14\u4E0D\u63D0\u4F9B\u641C\u7D22\u529F\u80FD\uFF0C\u4E0D\u80FD\u5EFA\u7ACB\u81EA\u5B9A\u4E49\u7684","head":[["meta",{"property":"og:url","content":"https://sunzhenyang.github.io/technology/javascript/bom/indexeddb.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"IndexedDB API"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-14T09:12:02.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2022-10-14T09:12:02.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u6982\u8FF0","slug":"\u6982\u8FF0","children":[]},{"level":2,"title":"\u57FA\u672C\u6982\u5FF5","slug":"\u57FA\u672C\u6982\u5FF5","children":[]},{"level":2,"title":"\u64CD\u4F5C\u6D41\u7A0B","slug":"\u64CD\u4F5C\u6D41\u7A0B","children":[{"level":3,"title":"\u6253\u5F00\u6570\u636E\u5E93","slug":"\u6253\u5F00\u6570\u636E\u5E93","children":[]},{"level":3,"title":"\u65B0\u5EFA\u6570\u636E\u5E93","slug":"\u65B0\u5EFA\u6570\u636E\u5E93","children":[]},{"level":3,"title":"\u65B0\u589E\u6570\u636E","slug":"\u65B0\u589E\u6570\u636E","children":[]},{"level":3,"title":"\u8BFB\u53D6\u6570\u636E","slug":"\u8BFB\u53D6\u6570\u636E","children":[]},{"level":3,"title":"\u904D\u5386\u6570\u636E","slug":"\u904D\u5386\u6570\u636E","children":[]},{"level":3,"title":"\u66F4\u65B0\u6570\u636E","slug":"\u66F4\u65B0\u6570\u636E","children":[]},{"level":3,"title":"\u5220\u9664\u6570\u636E","slug":"\u5220\u9664\u6570\u636E","children":[]},{"level":3,"title":"\u4F7F\u7528\u7D22\u5F15","slug":"\u4F7F\u7528\u7D22\u5F15","children":[]}]},{"level":2,"title":"indexedDB \u5BF9\u8C61","slug":"indexeddb-\u5BF9\u8C61","children":[{"level":3,"title":"indexedDB.open()","slug":"indexeddb-open","children":[]},{"level":3,"title":"indexedDB.deleteDatabase()","slug":"indexeddb-deletedatabase","children":[]},{"level":3,"title":"indexedDB.cmp()","slug":"indexeddb-cmp","children":[]}]},{"level":2,"title":"IDBRequest \u5BF9\u8C61","slug":"idbrequest-\u5BF9\u8C61","children":[]},{"level":2,"title":"IDBDatabase \u5BF9\u8C61","slug":"idbdatabase-\u5BF9\u8C61","children":[{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027","children":[]},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","children":[]}]},{"level":2,"title":"IDBObjectStore \u5BF9\u8C61","slug":"idbobjectstore-\u5BF9\u8C61","children":[{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027-1","children":[]},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5-1","children":[]}]},{"level":2,"title":"IDBTransaction \u5BF9\u8C61","slug":"idbtransaction-\u5BF9\u8C61","children":[]},{"level":2,"title":"IDBIndex \u5BF9\u8C61","slug":"idbindex-\u5BF9\u8C61","children":[]},{"level":2,"title":"IDBCursor \u5BF9\u8C61","slug":"idbcursor-\u5BF9\u8C61","children":[]},{"level":2,"title":"IDBKeyRange \u5BF9\u8C61","slug":"idbkeyrange-\u5BF9\u8C61","children":[]},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5","children":[]}],"git":{"createdTime":1665738722000,"updatedTime":1665738722000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":26.23,"words":7868},"filePathRelative":"technology/javascript/bom/indexeddb.md","localizedDate":"2022\u5E7410\u670814\u65E5"}`);export{e as data};
