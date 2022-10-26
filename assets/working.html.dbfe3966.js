import{_ as i,o as t,c as a,e}from"./app.41291239.js";var r="/assets/delta-based.3f7f76de.png",d="/assets/snapshot.27ad7482.png";const s={},G=e('<p>Git \u7A76\u7ADF\u662F\u600E\u6837\u7684\u4E00\u4E2A\u7CFB\u7EDF\u5462? \u5C3D\u7BA1 Git \u7528\u8D77\u6765\u4E0E\u5176\u5B83\u7684\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u975E\u5E38\u76F8\u4F3C\uFF0C\u4F46\u5B83\u5728\u5BF9\u4FE1\u606F\u7684\u5B58\u50A8\u548C\u8BA4\u77E5\u65B9\u5F0F\u4E0A\u5374\u6709\u5F88\u5927\u5DEE\u5F02\u3002</p><h2 id="\u76F4\u63A5\u8BB0\u5F55\u5FEB\u7167-\u800C\u975E\u5DEE\u5F02\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u8BB0\u5F55\u5FEB\u7167-\u800C\u975E\u5DEE\u5F02\u6BD4\u8F83" aria-hidden="true">#</a> \u76F4\u63A5\u8BB0\u5F55\u5FEB\u7167\uFF0C\u800C\u975E\u5DEE\u5F02\u6BD4\u8F83</h2><p>Git \u548C\u5176\u5B83\u7248\u672C\u63A7\u5236\u7CFB\u7EDF(\u5305\u62EC Subversion \u548C\u8FD1\u4F3C\u5DE5\u5177)\u7684\u4E3B\u8981\u5DEE\u522B\u5728\u4E8E Git \u5BF9\u5F85\u6570\u636E\u7684\u65B9\u6CD5\u3002\u4ECE\u6982\u5FF5\u4E0A\u6765\u8BF4\uFF0C\u5176\u5B83\u5927\u90E8\u5206\u7CFB\u7EDF\u4EE5\u6587\u4EF6\u53D8\u66F4\u5217\u8868\u7684\u65B9\u5F0F\u5B58\u50A8\u4FE1\u606F\uFF0C\u8FD9\u7C7B\u7CFB\u7EDF(CVS\u3001Subversion\u3001Perforce\u3001Bazaar \u7B49\u7B49)\u5C06\u5B83\u4EEC\u5B58\u50A8\u7684\u4FE1\u606F\u770B\u4F5C\u662F\u4E00\u7EC4\u57FA\u672C\u6587\u4EF6\u548C\u6BCF\u4E2A\u6587\u4EF6\u968F\u65F6\u95F4\u9010\u6B65\u7D2F\u79EF\u7684\u5DEE\u5F02 (\u5B83\u4EEC\u901A\u5E38\u79F0\u4F5C \u57FA\u4E8E\u5DEE\u5F02(delta-based) \u7684\u7248\u672C\u63A7\u5236)\u3002</p><p><img src="'+r+'" alt="\u57FA\u4E8E\u5DEE\u5F02" loading="lazy"></p><p>Git \u4E0D\u6309\u7167\u4EE5\u4E0A\u65B9\u5F0F\u5BF9\u5F85\u6216\u4FDD\u5B58\u6570\u636E\u3002\u53CD\u4E4B\uFF0CGit \u66F4\u50CF\u662F\u628A\u6570\u636E\u770B\u4F5C\u662F\u5BF9\u5C0F\u578B\u6587\u4EF6\u7CFB\u7EDF\u7684\u4E00\u7CFB\u5217\u5FEB\u7167\u3002\u5728 Git \u4E2D\uFF0C\u6BCF\u5F53\u60A8\u63D0\u4EA4\u66F4\u65B0\u6216\u4FDD\u5B58\u9879\u76EE\u72B6\u6001\u65F6\uFF0C\u5B83\u57FA\u672C\u4E0A\u5C31\u4F1A\u5BF9\u5F53\u65F6\u7684\u5168\u90E8\u6587\u4EF6\u521B\u5EFA\u4E00\u4E2A\u5FEB\u7167\u5E76\u4FDD\u5B58\u8FD9\u4E2A\u5FEB\u7167\u7684\u7D22\u5F15\u3002\u4E3A\u4E86\u6548\u7387\uFF0C\u5982\u679C\u6587\u4EF6\u6CA1\u6709\u4FEE\u6539\uFF0CGit \u4E0D\u518D\u91CD\u65B0\u5B58\u50A8\u8BE5\u6587\u4EF6\uFF0C\u800C\u662F\u53EA\u4FDD\u7559\u4E00\u4E2A\u94FE\u63A5\u6307\u5411\u4E4B\u524D\u5B58\u50A8\u7684\u6587\u4EF6\u3002Git \u5BF9\u5F85\u6570\u636E\u66F4\u50CF\u662F\u4E00\u4E2A <strong>\u5FEB\u7167\u6D41</strong>\u3002</p><p><img src="'+d+'" alt="\u57FA\u4E8E\u5FEB\u7167" loading="lazy"></p><h2 id="\u8FD1\u4E4E\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u672C\u5730\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u8FD1\u4E4E\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u672C\u5730\u6267\u884C" aria-hidden="true">#</a> \u8FD1\u4E4E\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u672C\u5730\u6267\u884C</h2><p>\u5728 Git \u4E2D\u7684\u7EDD\u5927\u591A\u6570\u64CD\u4F5C\u90FD\u53EA\u9700\u8981\u8BBF\u95EE\u672C\u5730\u6587\u4EF6\u548C\u8D44\u6E90\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u6765\u81EA\u7F51\u7EDC\u4E0A\u5176\u5B83\u8BA1\u7B97\u673A\u7684\u4FE1\u606F\u3002\u5982\u679C\u60A8\u4E60\u60EF\u4E8E\u6240\u6709\u64CD\u4F5C\u90FD\u6709\u7F51\u7EDC\u5EF6\u65F6\u5F00\u9500\u7684\u96C6\u4E2D\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF0CGit \u5728\u8FD9\u65B9\u9762\u4F1A\u8BA9\u60A8\u611F\u5230\u901F\u5EA6\u4E4B\u795E\u8D50\u7ED9\u4E86 Git \u8D85\u51E1\u7684\u80FD\u91CF\u3002\u56E0\u4E3A\u60A8\u5728\u672C\u5730\u78C1\u76D8\u4E0A\u5C31\u6709\u9879\u76EE\u7684\u5B8C\u6574\u5386\u53F2\uFF0C\u6240\u4EE5\u5927\u90E8\u5206\u64CD\u4F5C\u770B\u8D77\u6765\u77AC\u95F4\u5B8C\u6210\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u8981\u6D4F\u89C8\u9879\u76EE\u7684\u5386\u53F2\uFF0CGit \u4E0D\u9700\u5916\u8FDE\u5230\u670D\u52A1\u5668\u53BB\u83B7\u53D6\u5386\u53F2\uFF0C\u7136\u540E\u518D\u663E\u793A\u51FA\u6765\u2014\u2014\u5B83\u53EA\u9700\u76F4\u63A5\u4ECE\u672C\u5730\u6570\u636E\u5E93\u4E2D\u8BFB\u53D6\u3002\u60A8\u80FD\u7ACB\u5373\u770B\u5230\u9879\u76EE\u5386\u53F2\u3002\u5982\u679C\u60A8\u60F3\u67E5\u770B\u5F53\u524D\u7248\u672C\u4E0E\u4E00\u4E2A\u6708\u524D\u7684\u7248\u672C\u4E4B\u95F4\u5F15\u5165\u7684\u4FEE\u6539\uFF0C Git \u4F1A\u67E5\u627E\u5230\u4E00\u4E2A\u6708\u524D\u7684\u6587\u4EF6\u505A\u4E00\u6B21\u672C\u5730\u7684\u5DEE\u5F02\u8BA1\u7B97\uFF0C\u800C\u4E0D\u662F\u7531\u8FDC\u7A0B\u670D\u52A1\u5668\u5904\u7406\u6216\u4ECE\u8FDC\u7A0B\u670D\u52A1\u5668\u62C9\u56DE\u65E7\u7248\u672C\u6587\u4EF6\u518D\u6765\u672C\u5730\u5904\u7406\u3002</p><h2 id="git-\u4FDD\u8BC1\u5B8C\u6574\u6027" tabindex="-1"><a class="header-anchor" href="#git-\u4FDD\u8BC1\u5B8C\u6574\u6027" aria-hidden="true">#</a> Git \u4FDD\u8BC1\u5B8C\u6574\u6027</h2><p>Git \u4E2D\u6240\u6709\u7684\u6570\u636E\u5728\u5B58\u50A8\u524D\u90FD\u8BA1\u7B97\u6821\u9A8C\u548C\uFF0C\u7136\u540E\u4EE5\u6821\u9A8C\u548C\u6765\u5F15\u7528\u3002\u8FD9\u610F\u5473\u7740\u4E0D\u53EF\u80FD\u5728 Git \u4E0D\u77E5\u60C5\u65F6\u66F4\u6539\u4EFB\u4F55\u6587\u4EF6\u5185\u5BB9\u6216\u76EE\u5F55\u5185\u5BB9\u3002\u8FD9\u4E2A\u529F\u80FD\u5EFA\u6784\u5728 Git \u5E95\u5C42\uFF0C\u662F\u6784\u6210 Git \u54F2\u5B66\u4E0D\u53EF\u6216\u7F3A\u7684\u90E8\u5206\u3002\u82E5\u60A8\u5728\u4F20\u9001\u8FC7\u7A0B\u4E2D\u4E22\u5931\u4FE1\u606F\u6216\u635F\u574F\u6587\u4EF6\uFF0CGit \u5C31\u80FD\u53D1\u73B0\u3002</p><p>Git \u7528\u4EE5\u8BA1\u7B97\u6821\u9A8C\u548C\u7684\u673A\u5236\u53EB\u505A SHA-1 \u6563\u5217(hash\uFF0C\u54C8\u5E0C)\u3002\u8FD9\u662F\u4E00\u4E2A\u7531 40 \u4E2A\u5341\u516D\u8FDB\u5236\u5B57\u7B26(0-9 \u548C a-f)\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF0C\u57FA\u4E8E Git \u4E2D\u6587\u4EF6\u7684\u5185\u5BB9\u6216\u76EE\u5F55\u7ED3\u6784\u8BA1\u7B97\u51FA\u6765\u3002Git \u4E2D\u4F7F\u7528\u8FD9\u79CD\u54C8\u5E0C\u503C\u7684\u60C5\u51B5\u5F88\u591A\uFF0C\u60A8\u5C06\u7ECF\u5E38\u770B\u5230\u8FD9\u79CD\u54C8\u5E0C\u503C\u3002\u5B9E\u9645\u4E0A\uFF0CGit \u6570\u636E\u5E93\u4E2D\u4FDD\u5B58\u7684\u4FE1\u606F\u90FD\u662F\u4EE5\u6587\u4EF6\u5185\u5BB9\u7684\u54C8\u5E0C\u503C\u6765\u7D22\u5F15\uFF0C\u800C\u4E0D\u662F\u6587\u4EF6\u540D\u3002</p><h2 id="git-\u4E00\u822C\u53EA\u6DFB\u52A0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#git-\u4E00\u822C\u53EA\u6DFB\u52A0\u6570\u636E" aria-hidden="true">#</a> Git \u4E00\u822C\u53EA\u6DFB\u52A0\u6570\u636E</h2><p>\u60A8\u6267\u884C\u7684 Git \u64CD\u4F5C\uFF0C\u51E0\u4E4E\u53EA\u5F80 Git \u6570\u636E\u5E93\u4E2D \u6DFB\u52A0 \u6570\u636E\u3002\u60A8\u5F88\u96BE\u8BA9 Git \u6267\u884C\u4EFB\u4F55\u4E0D\u53EF\u9006\u64CD\u4F5C\uFF0C\u6216\u8005\u8BA9\u5B83\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u6E05\u9664\u6570\u636E\u3002\u540C\u522B\u7684 VCS \u4E00\u6837\uFF0C\u672A\u63D0\u4EA4\u66F4\u65B0\u65F6\u6709\u53EF\u80FD\u4E22\u5931\u6216\u5F04\u4E71\u4FEE\u6539\u7684\u5185\u5BB9\u3002\u4F46\u662F\u4E00\u65E6\u60A8\u63D0\u4EA4\u5FEB\u7167\u5230 Git \u4E2D\uFF0C \u5C31\u96BE\u4EE5\u518D\u4E22\u5931\u6570\u636E\uFF0C\u7279\u522B\u662F\u5982\u679C\u60A8\u5B9A\u671F\u7684\u63A8\u9001\u6570\u636E\u5E93\u5230\u5176\u5B83\u4ED3\u5E93\u7684\u8BDD\u3002</p><p>\u8FD9\u4F7F\u5F97\u6211\u4EEC\u4F7F\u7528 Git \u6210\u4E3A\u4E00\u4E2A\u5B89\u5FC3\u6109\u60A6\u7684\u8FC7\u7A0B\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6DF1\u77E5\u53EF\u4EE5\u5C3D\u60C5\u505A\u5404\u79CD\u5C1D\u8BD5\uFF0C\u800C\u6CA1\u6709\u628A\u4E8B\u60C5\u5F04\u7CDF\u7684\u5371\u9669\u3002</p><h2 id="\u4E09\u79CD\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u4E09\u79CD\u72B6\u6001" aria-hidden="true">#</a> \u4E09\u79CD\u72B6\u6001</h2><p>Git \u6709\u4E09\u79CD\u72B6\u6001\uFF0C\u60A8\u7684\u6587\u4EF6\u53EF\u80FD\u5904\u4E8E\u5176\u4E2D\u4E4B\u4E00: \u5DF2\u63D0\u4EA4(committed)\u3001\u5DF2\u4FEE\u6539(modified) \u548C \u5DF2\u6682\u5B58(staged)\u3002</p><ul><li>\u5DF2\u4FEE\u6539\u8868\u793A\u4FEE\u6539\u4E86\u6587\u4EF6\uFF0C\u4F46\u8FD8\u6CA1\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D\u3002</li><li>\u5DF2\u6682\u5B58\u8868\u793A\u5BF9\u4E00\u4E2A\u5DF2\u4FEE\u6539\u6587\u4EF6\u7684\u5F53\u524D\u7248\u672C\u505A\u4E86\u6807\u8BB0\uFF0C\u4F7F\u4E4B\u5305\u542B\u5728\u4E0B\u6B21\u63D0\u4EA4\u7684\u5FEB\u7167\u4E2D\u3002</li><li>\u5DF2\u63D0\u4EA4\u8868\u793A\u6570\u636E\u5DF2\u7ECF\u5B89\u5168\u5730\u4FDD\u5B58\u5728\u672C\u5730\u6570\u636E\u5E93\u4E2D\u3002</li></ul><p>\u8FD9\u4F1A\u8BA9\u6211\u4EEC\u7684 Git \u9879\u76EE\u62E5\u6709\u4E09\u4E2A\u9636\u6BB5: \u5DE5\u4F5C\u533A\u3001\u6682\u5B58\u533A\u4EE5\u53CA Git \u76EE\u5F55\u3002</p><p>\u5DE5\u4F5C\u533A\u662F\u5BF9\u9879\u76EE\u7684\u67D0\u4E2A\u7248\u672C\u72EC\u7ACB\u63D0\u53D6\u51FA\u6765\u7684\u5185\u5BB9\u3002\u8FD9\u4E9B\u4ECE Git \u4ED3\u5E93\u7684\u538B\u7F29\u6570\u636E\u5E93\u4E2D\u63D0\u53D6\u51FA\u6765\u7684\u6587\u4EF6\uFF0C\u653E\u5728\u78C1\u76D8\u4E0A\u4F9B\u60A8\u4F7F\u7528\u6216\u4FEE\u6539\u3002 \u6682\u5B58\u533A\u662F\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4FDD\u5B58\u4E86\u4E0B\u6B21\u5C06\u8981\u63D0\u4EA4\u7684\u6587\u4EF6\u5217\u8868\u4FE1\u606F\uFF0C\u4E00\u822C\u5728 Git \u4ED3\u5E93\u76EE\u5F55\u4E2D\u3002\u6309\u7167 Git \u7684\u672F\u8BED\u53EB\u505A\u201C\u7D22\u5F15\u201D\uFF0C\u4E0D\u8FC7\u4E00\u822C\u8BF4\u6CD5\u8FD8\u662F\u53EB\u201C\u6682\u5B58\u533A\u201D\u3002 Git \u4ED3\u5E93\u76EE\u5F55\u662F Git \u7528\u6765\u4FDD\u5B58\u9879\u76EE\u7684\u5143\u6570\u636E\u548C\u5BF9\u8C61\u6570\u636E\u5E93\u7684\u5730\u65B9\u3002\u8FD9\u662F Git \u4E2D\u6700\u91CD\u8981\u7684\u90E8\u5206\uFF0C\u4ECE\u5176\u5B83\u8BA1\u7B97\u673A\u514B\u9686\u4ED3\u5E93\u65F6\uFF0C\u590D\u5236\u7684\u5C31\u662F\u8FD9\u91CC\u7684\u6570\u636E\u3002 \u57FA\u672C\u7684 Git \u5DE5\u4F5C\u6D41\u7A0B\u5982\u4E0B:</p><ol><li>\u5728\u5DE5\u4F5C\u533A\u4E2D\u4FEE\u6539\u6587\u4EF6\u3002</li><li>\u5C06\u60A8\u60F3\u8981\u4E0B\u6B21\u63D0\u4EA4\u7684\u66F4\u6539\u9009\u62E9\u6027\u5730\u6682\u5B58\uFF0C\u8FD9\u6837\u53EA\u4F1A\u5C06\u66F4\u6539\u7684\u90E8\u5206\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u3002</li><li>\u63D0\u4EA4\u66F4\u65B0\uFF0C\u627E\u5230\u6682\u5B58\u533A\u7684\u6587\u4EF6\uFF0C\u5C06\u5FEB\u7167\u6C38\u4E45\u6027\u5B58\u50A8\u5230 Git \u76EE\u5F55\u3002</li></ol><p>\u5982\u679C Git \u76EE\u5F55\u4E2D\u4FDD\u5B58\u7740\u7279\u5B9A\u7248\u672C\u7684\u6587\u4EF6\uFF0C\u5C31\u5C5E\u4E8E \u5DF2\u63D0\u4EA4 \u72B6\u6001\u3002\u5982\u679C\u6587\u4EF6\u5DF2\u4FEE\u6539\u5E76\u653E\u5165\u6682\u5B58\u533A\uFF0C\u5C31\u5C5E\u4E8E \u5DF2\u6682\u5B58 \u72B6\u6001\u3002\u5982\u679C\u81EA\u4E0A\u6B21\u68C0\u51FA\u540E\uFF0C\u4F5C\u4E86\u4FEE\u6539\u4F46\u8FD8\u6CA1\u6709\u653E\u5230\u6682\u5B58\u533A\u57DF\uFF0C\u5C31\u662F \u5DF2\u4FEE\u6539 \u72B6\u6001\u3002</p>',21),h=[G];function l(n,p){return t(),a("div",null,h)}var c=i(s,[["render",l],["__file","working.html.vue"]]);export{c as default};
