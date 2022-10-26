const e=JSON.parse(`{"key":"v-5d4cd26d","path":"/notes/MyBatis.html","title":"MyBatis","lang":"zh-CN","frontmatter":{"title":"MyBatis","icon":"article","article":false,"summary":"\\" ORM \u6846\u67B6\uFF0C\u7528\u4E8E\u7B80\u5316\u6570\u636E\u5E93\u64CD\u4F5C\\" \u6846\u67B6\u662F\u53EF\u88AB\u5E94\u7528\u5F00\u53D1\u8005\u5B9A\u5236\u7684\u5E94\u7528\u9AA8\u67B6; \u662F\u4E00\u79CD\u89C4\u5219\uFF0C\u4FDD\u8BC1\u5F00\u53D1\u8005\u9075\u5FAA\u76F8\u540C\u7684\u65B9\u5F0F\u5F00\u53D1\u7A0B\u5E8F; \u63D0\u5021 \u4E0D\u8981\u91CD\u590D\u9020\u8F6E\u5B50 \uFF0C\u5BF9\u57FA\u7840\u529F\u80FD\u8FDB\u884C\u5C01\u88C5; \u6781\u5927\u4ED6\u641E\u4E86\u5F00\u53D1\u6548\u7387; \u7EDF\u4E00\u7684\u7F16\u7801\u89C4\u5219\uFF0C\u5229\u4E8E\u56E2\u961F\u7BA1\u7406; \u7075\u6D3B\u914D\u7F6E\u7684\u5E94\u7528\uFF0C\u62E5\u6709\u66F4\u597D\u7684\u7EF4\u62A4\u6027; SSM\uFF1Aspring + spring mvc + mybatis; \\" MyBatis \u662F\u4F18\u79C0\u7684","head":[["meta",{"property":"og:url","content":"https://sunzhenyang.github.io/notes/MyBatis.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"MyBatis"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-17T09:01:52.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-17T09:01:52.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u5F00\u53D1\u6D41\u7A0B","slug":"\u5F00\u53D1\u6D41\u7A0B","children":[]},{"level":2,"title":"\u73AF\u5883\u914D\u7F6E","slug":"\u73AF\u5883\u914D\u7F6E","children":[]},{"level":2,"title":"SqlSessionFactory","slug":"sqlsessionfactory","children":[{"level":3,"title":"SqlSession","slug":"sqlsession","children":[]}]},{"level":2,"title":"MyBatisUtils","slug":"mybatisutils","children":[]},{"level":2,"title":"\u6570\u636E\u67E5\u8BE2","slug":"\u6570\u636E\u67E5\u8BE2","children":[{"level":3,"title":"\u64CD\u4F5C\u6D41\u7A0B","slug":"\u64CD\u4F5C\u6D41\u7A0B","children":[]},{"level":3,"title":"\u5E26\u53C2\u6570\u67E5\u8BE2","slug":"\u5E26\u53C2\u6570\u67E5\u8BE2","children":[]},{"level":3,"title":"\u591A\u8868\u5173\u8054\u67E5\u8BE2","slug":"\u591A\u8868\u5173\u8054\u67E5\u8BE2","children":[]},{"level":3,"title":"ResultMap \u7ED3\u679C\u6620\u5C04","slug":"resultmap-\u7ED3\u679C\u6620\u5C04","children":[]}]},{"level":2,"title":"\u6570\u636E\u5199\u5165","slug":"\u6570\u636E\u5199\u5165","children":[{"level":3,"title":"\u63D2\u5165(insert)","slug":"\u63D2\u5165-insert","children":[]},{"level":3,"title":"\u66F4\u65B0(update)","slug":"\u66F4\u65B0-update","children":[]},{"level":3,"title":"\u5220\u9664(delete)","slug":"\u5220\u9664-delete","children":[]}]},{"level":2,"title":"\u52A8\u6001 SQL","slug":"\u52A8\u6001-sql","children":[]},{"level":2,"title":"\u4E8C\u7EA7\u7F13\u5B58","slug":"\u4E8C\u7EA7\u7F13\u5B58","children":[{"level":3,"title":"\u7F13\u5B58\u8303\u56F4","slug":"\u7F13\u5B58\u8303\u56F4","children":[]},{"level":3,"title":"\u8FD0\u884C\u89C4\u5219","slug":"\u8FD0\u884C\u89C4\u5219","children":[]}]},{"level":2,"title":"\u591A\u8868\u7EA7\u8054\u67E5\u8BE2","slug":"\u591A\u8868\u7EA7\u8054\u67E5\u8BE2","children":[{"level":3,"title":"\u4E00\u5BF9\u591A","slug":"\u4E00\u5BF9\u591A","children":[]},{"level":3,"title":"\u591A\u5BF9\u4E00","slug":"\u591A\u5BF9\u4E00","children":[]}]},{"level":2,"title":"\u5206\u9875\u63D2\u4EF6 PageHelper","slug":"\u5206\u9875\u63D2\u4EF6-pagehelper","children":[{"level":3,"title":"\u4F7F\u7528\u6D41\u7A0B","slug":"\u4F7F\u7528\u6D41\u7A0B","children":[]}]},{"level":2,"title":"\u9884\u9632 SQL \u6CE8\u5165\u653B\u51FB","slug":"\u9884\u9632-sql-\u6CE8\u5165\u653B\u51FB","children":[{"level":3,"title":"\u4F20\u503C\u65B9\u5F0F\uFF08MyBatis\uFF09","slug":"\u4F20\u503C\u65B9\u5F0F-mybatis","children":[]}]},{"level":2,"title":"\u65E5\u5FD7\u7BA1\u7406","slug":"\u65E5\u5FD7\u7BA1\u7406","children":[{"level":3,"title":"\u65E5\u5FD7\u95E8\u9762","slug":"\u65E5\u5FD7\u95E8\u9762","children":[]},{"level":3,"title":"\u65E5\u5FD7\u5B9E\u73B0","slug":"\u65E5\u5FD7\u5B9E\u73B0","children":[]}]},{"level":2,"title":"\u4E0D\u540C\u6570\u636E\u5E93\u7684\u5206\u9875","slug":"\u4E0D\u540C\u6570\u636E\u5E93\u7684\u5206\u9875","children":[{"level":3,"title":"MySQL","slug":"mysql","children":[]},{"level":3,"title":"Oracle","slug":"oracle","children":[]},{"level":3,"title":"SQL Server 2000","slug":"sql-server-2000","children":[]},{"level":3,"title":"SQL Server 2012+","slug":"sql-server-2012","children":[]}]},{"level":2,"title":"\u6574\u5408 C3P0 \u8FDE\u63A5\u6C60","slug":"\u6574\u5408-c3p0-\u8FDE\u63A5\u6C60","children":[]},{"level":2,"title":"\u6279\u5904\u7406","slug":"\u6279\u5904\u7406","children":[{"level":3,"title":"\u63D2\u5165","slug":"\u63D2\u5165","children":[]},{"level":3,"title":"\u5220\u9664","slug":"\u5220\u9664","children":[]}]},{"level":2,"title":"\u6CE8\u89E3\u5F00\u53D1","slug":"\u6CE8\u89E3\u5F00\u53D1","children":[{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E-1","children":[]},{"level":3,"title":"\u67E5\u8BE2","slug":"\u67E5\u8BE2","children":[]},{"level":3,"title":"\u63D2\u5165","slug":"\u63D2\u5165-1","children":[]},{"level":3,"title":"\u7ED3\u679C\u6620\u5C04","slug":"\u7ED3\u679C\u6620\u5C04","children":[]}]},{"level":2,"title":"xml \u5B9E\u73B0 mapper \u63A5\u53E3","slug":"xml-\u5B9E\u73B0-mapper-\u63A5\u53E3","children":[]},{"level":2,"title":"\u5355\u5143\u6D4B\u8BD5","slug":"\u5355\u5143\u6D4B\u8BD5","children":[{"level":3,"title":"JUnit4","slug":"junit4","children":[]}]}],"git":{"createdTime":1665738722000,"updatedTime":1665997312000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":2}]},"readingTime":{"minutes":16.77,"words":5030},"filePathRelative":"notes/MyBatis.md","localizedDate":"2022\u5E7410\u670814\u65E5"}`);export{e as data};
