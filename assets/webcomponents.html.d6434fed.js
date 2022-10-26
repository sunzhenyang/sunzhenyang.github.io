const e=JSON.parse(`{"key":"v-3bb0a964","path":"/technology/webapi/webcomponents.html","title":"Web Components","lang":"zh-CN","frontmatter":{"title":"Web Components","icon":"article","category":["Web API"],"article":false,"tag":["Web API"],"copyright":"Copyright by \u962E\u4E00\u5CF0","summary":"\u6982\u8FF0 \u5404\u79CD\u7F51\u7AD9\u5F80\u5F80\u9700\u8981\u4E00\u4E9B\u76F8\u540C\u7684\u6A21\u5757\uFF0C\u6BD4\u5982\u65E5\u5386\u3001\u8C03\u8272\u677F\u7B49\u7B49\uFF0C\u8FD9\u79CD\u6A21\u5757\u5C31\u88AB\u79F0\u4E3A\u201C\u7EC4\u4EF6\u201D\uFF08component\uFF09\u3002Web Components \u5C31\u662F\u6D4F\u89C8\u5668\u539F\u751F\u7684\u7EC4\u4EF6\u89C4\u8303\u3002 \u91C7\u7528\u7EC4\u4EF6\u5F00\u53D1\uFF0C\u6709\u5F88\u591A\u4F18\u70B9\u3002 \uFF081\uFF09\u6709\u5229\u4E8E\u4EE3\u7801\u590D\u7528\u3002\u7EC4\u4EF6\u662F\u6A21\u5757\u5316\u7F16\u7A0B\u601D\u60F3\u7684\u4F53\u73B0\uFF0C\u53EF\u4EE5\u8DE8\u5E73\u53F0\u3001\u8DE8\u6846\u67B6\u4F7F\u7528\uFF0C\u6784\u5EFA\u3001\u90E8\u7F72\u548C\u4E0E\u5176\u4ED6 UI \u5143\u7D20\u4E92\u52A8\u90FD\u6709\u7EDF\u4E00\u505A\u6CD5\u3002 \uFF082\uFF09\u4F7F\u7528\u975E\u5E38\u5BB9\u6613\u3002\u52A0\u8F7D\u6216\u5378\u8F7D\u7EC4\u4EF6\uFF0C\u53EA\u8981\u6DFB","head":[["meta",{"property":"og:url","content":"https://sunzhenyang.github.io/technology/webapi/webcomponents.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"Web Components"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-14T09:12:02.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Web API"}],["meta",{"property":"article:modified_time","content":"2022-10-14T09:12:02.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u6982\u8FF0","slug":"\u6982\u8FF0","children":[]},{"level":2,"title":"Custom Element","slug":"custom-element","children":[{"level":3,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB","children":[]},{"level":3,"title":"\u751F\u547D\u5468\u671F\u65B9\u6CD5","slug":"\u751F\u547D\u5468\u671F\u65B9\u6CD5","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"\u81EA\u5B9A\u4E49\u5C5E\u6027\u548C\u65B9\u6CD5","children":[]},{"level":3,"title":"window.customElements.whenDefined()","slug":"window-customelements-whendefined","children":[]},{"level":3,"title":"\u56DE\u8C03\u51FD\u6570","slug":"\u56DE\u8C03\u51FD\u6570","children":[]},{"level":3,"title":"Custom Element \u7684\u5B50\u5143\u7D20","slug":"custom-element-\u7684\u5B50\u5143\u7D20","children":[]}]},{"level":2,"title":"<template>\u6807\u7B7E","slug":"template-\u6807\u7B7E","children":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","children":[]},{"level":3,"title":"document.importNode()","slug":"document-importnode","children":[]}]},{"level":2,"title":"Shadow DOM","slug":"shadow-dom","children":[]},{"level":2,"title":"HTML Import","slug":"html-import","children":[{"level":3,"title":"\u57FA\u672C\u64CD\u4F5C","slug":"\u57FA\u672C\u64CD\u4F5C","children":[]},{"level":3,"title":"\u811A\u672C\u7684\u6267\u884C","slug":"\u811A\u672C\u7684\u6267\u884C","children":[]},{"level":3,"title":"Web Component\u7684\u5C01\u88C5","slug":"web-component\u7684\u5C01\u88C5","children":[]}]},{"level":2,"title":"Polymer.js","slug":"polymer-js","children":[{"level":3,"title":"\u76F4\u63A5\u4F7F\u7528\u7684\u7EC4\u4EF6","slug":"\u76F4\u63A5\u4F7F\u7528\u7684\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6","slug":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5","slug":"\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5","children":[]}]},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5","children":[]}],"git":{"createdTime":1665738722000,"updatedTime":1665738722000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":17.79,"words":5338},"filePathRelative":"technology/webapi/webcomponents.md","localizedDate":"2022\u5E7410\u670814\u65E5"}`);export{e as data};
