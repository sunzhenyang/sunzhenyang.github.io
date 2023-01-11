const e=JSON.parse(`{"key":"v-b41dcbfa","path":"/technology/ts_axios/chapter12/build-deploy.html","title":"ts-axios 编译与发布","lang":"zh-CN","frontmatter":{"title":"ts-axios 编译与发布","icon":"article","category":["typescript"],"article":false,"tag":["typescript"],"copyright":"Copyright by ustbhuangyi","description":"需求分析 前面的章节我们完成 ts-axios 库的代码编写和单元测试。这一章我们希望把代码部署发布到公共 npm 上，供别人下载使用。但是并不是所有人都会使用 TypeScript 开发，仍然有大量的 JavaScript 用户，它们是不能直接引用 TypeScript 代码的，因此我们需要先对源码做编译和打包，然后再发布。 由于我们会把包发布到公共的 npm 源，如果你还没有 npm 账号，那么需要先去官网注册。注册完成后，可以去终端执行 npm login 登录。这个步骤非常重要，决定你最终能否发布成功。","head":[["meta",{"property":"og:url","content":"https://codemake.fun/technology/ts_axios/chapter12/build-deploy.html"}],["meta",{"property":"og:site_name","content":"Yang's Blog"}],["meta",{"property":"og:title","content":"ts-axios 编译与发布"}],["meta",{"property":"og:description","content":"需求分析 前面的章节我们完成 ts-axios 库的代码编写和单元测试。这一章我们希望把代码部署发布到公共 npm 上，供别人下载使用。但是并不是所有人都会使用 TypeScript 开发，仍然有大量的 JavaScript 用户，它们是不能直接引用 TypeScript 代码的，因此我们需要先对源码做编译和打包，然后再发布。 由于我们会把包发布到公共的 npm 源，如果你还没有 npm 账号，那么需要先去官网注册。注册完成后，可以去终端执行 npm login 登录。这个步骤非常重要，决定你最终能否发布成功。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T09:12:15.000Z"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:modified_time","content":"2023-01-11T09:12:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"ts-axios 编译与发布\\",\\"description\\":\\"需求分析 前面的章节我们完成 ts-axios 库的代码编写和单元测试。这一章我们希望把代码部署发布到公共 npm 上，供别人下载使用。但是并不是所有人都会使用 TypeScript 开发，仍然有大量的 JavaScript 用户，它们是不能直接引用 TypeScript 代码的，因此我们需要先对源码做编译和打包，然后再发布。 由于我们会把包发布到公共的 npm 源，如果你还没有 npm 账号，那么需要先去官网注册。注册完成后，可以去终端执行 npm login 登录。这个步骤非常重要，决定你最终能否发布成功。\\"}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"编译和打包","slug":"编译和打包","link":"#编译和打包","children":[{"level":3,"title":"修改 rollup.config.ts","slug":"修改-rollup-config-ts","link":"#修改-rollup-config-ts","children":[]},{"level":3,"title":"修改 package.json","slug":"修改-package-json","link":"#修改-package-json","children":[]}]},{"level":2,"title":"自动化部署","slug":"自动化部署","link":"#自动化部署","children":[{"level":3,"title":"修改 package.json","slug":"修改-package-json-1","link":"#修改-package-json-1","children":[]},{"level":3,"title":"编写部署脚本","slug":"编写部署脚本","link":"#编写部署脚本","children":[]}]},{"level":2,"title":"运行部署脚本","slug":"运行部署脚本","link":"#运行部署脚本","children":[]}],"git":{"createdTime":1673428335000,"updatedTime":1673428335000,"contributors":[{"name":"sunzhenyang","email":"874530670@qq.com","commits":1}]},"readingTime":{"minutes":7.19,"words":2157},"filePathRelative":"technology/ts_axios/chapter12/build-deploy.md","localizedDate":"2023年1月11日","excerpt":"<h2> 需求分析</h2>\\n<p>前面的章节我们完成 <code>ts-axios</code> 库的代码编写和单元测试。这一章我们希望把代码部署发布到公共 <code>npm</code> 上，供别人下载使用。但是并不是所有人都会使用 TypeScript 开发，仍然有大量的 JavaScript 用户，它们是不能直接引用 TypeScript 代码的，因此我们需要先对源码做编译和打包，然后再发布。</p>\\n<p>由于我们会把包发布到公共的 npm 源，如果你还没有 <code>npm</code> 账号，那么需要先去<a href=\\"https://www.npmjs.com/signup\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网注册</a>。注册完成后，可以去终端执行 <code>npm login</code> 登录。这个步骤非常重要，决定你最终能否发布成功。</p>","autoDesc":true}`);export{e as data};
