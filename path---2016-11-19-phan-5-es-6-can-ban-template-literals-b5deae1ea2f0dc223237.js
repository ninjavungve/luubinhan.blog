webpackJsonp([72627379616066],{1224:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Trong Series này</p>\n<ol>\n<li><a href="/blog/2016-11-15-chuong-1-es6-can-ban">Nâng cấp cho Object</a></li>\n<li><a href="/blog/2016-11-16-chuong-2-es6-can-ban-arrow-function/">Arrow function</a></li>\n<li><a href="/blog/2016-11-17-phan-3-es6-can-ban-assignment-destructuring">Assignment Destruction</a></li>\n<li><a href="/blog/2016-11-18-phan-4-es6-can-ban-rest-parameters-va-spread-operator">Rest parameters và spread operator</a></li>\n<li><a href="/blog/2016-11-19-phan-5-es6-can-ban-template-literals">Template literals</a></li>\n<li><a href="/blog/2016-11-20-phan-6-es6-can-ban-khai-bao-let-const">Khai báo biến với let và const</a></li>\n<li><a href="/blog/2016-11-21-phan-7-es6-can-ban-classes">Căn bản class</a></li>\n</ol>\n<!-- TOC -->\n<ul>\n<li><a href="#c%C3%BA-ph%C3%A1p">Cú pháp</a></li>\n<li>[Lưu ý về dấu backslash <code class="language-text">\\</code>](#lưu-ý-về-dấu-backslash-)</li>\n<li><a href="#l%E1%BB%93ng-nhau">Lồng nhau</a></li>\n<li><a href="#multi-line-string">Multi-line String</a></li>\n<li><a href="#tagged-templates">Tagged templates</a></li>\n</ul>\n<!-- /TOC -->\n<p>Template literal là một <code class="language-text">string</code> <strong>đặc biệt</strong>, mình có thể nhúng <strong>expression</strong> vào trong đó.</p>\n<h1 id="cú-pháp"><a href="#c%C3%BA-ph%C3%A1p" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cú pháp</h1>\n<p>Đặt <code class="language-text">string</code> giữa dấu <code><code class="language-text"></code></code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> text  <span class="token operator">=</span> <span class="token template-string"><span class="token string">`First template literal`</span></span></code></pre>\n      </div>\n<p>Chèn giữa <code class="language-text">string</code> đó một đoạn <em>code javascript</em> (expression)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> name  <span class="token operator">=</span> <span class="token template-string"><span class="token string">`AnLuu`</span></span>\n<span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token operator">&lt;</span>code<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!&lt;/code>`</span></span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>\n<span class="token comment">// result: Hello, AnLuu</span></code></pre>\n      </div>\n<p>Biến sử dụng trong expression phải được khai báo trước</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token template-string"><span class="token string">`The time and date is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocalString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n<span class="token template-string"><span class="token string">`The result of 2+3 equals </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span></code></pre>\n      </div>\n<h1 id="lưu-ý-về-dấu-backslash-code-classlanguage-textcode"><a href="#l%C6%B0u-%C3%BD-v%E1%BB%81-d%E1%BA%A5u-backslash-code-classlanguage-textcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lưu ý về dấu backslash <code class="language-text">\\</code></h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token template-string"><span class="token string">`\\``</span></span> <span class="token operator">===</span> <span class="token string">\'`\'</span> <span class="token comment">// --> true</span></code></pre>\n      </div>\n<p>Bình thường sau ký tự <code class="language-text">\\</code> là một ký tự đặc biệt nào đó, ví dụ \\n để thêm dòng mới, nếu không muốn có kết quả này, mà chỉ muốn render ra đúng ký tự \\n, dùng hàm <code class="language-text">String.raw</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> text <span class="token operator">=</span> String<span class="token punctuation">.</span>raw<span class="token template-string"><span class="token string">`The "\\n" new line won\'t result in a new line. It\'ll be escapted`</span></span></code></pre>\n      </div>\n<h1 id="lồng-nhau"><a href="#l%E1%BB%93ng-nhau" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lồng nhau</h1>\n<p>Mình có thể lồng code trong code</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token template-string"><span class="token string">`This a template literal </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> `<span class="token keyword">with</span> another <span class="token operator">%</span><span class="token punctuation">{</span> <span class="token string">\'one\'</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> embeded inside it`</span></span><span class="token punctuation">}</span><span class="token template-string"><span class="token string">`\n\n// Ví dụ khác\n\nconst classes = `</span></span>header $<span class="token punctuation">{</span> <span class="token function">isLargeScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">\'\'</span> <span class="token punctuation">:</span>\n <span class="token template-string"><span class="token string">`icon-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>isCollapsed <span class="token operator">?</span> <span class="token string">\'expander\'</span> <span class="token punctuation">:</span> <span class="token string">\'collapser\'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span> <span class="token punctuation">}</span>`<span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="multi-line-string"><a href="#multi-line-string" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Multi-line String</h1>\n<p>Để có nhiều dòng trong javascript string, trước ES6 có mấy cách làm như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n    <span class="token string">\'The first line\\n\\\n    A second line\\n\\\n    Then a third line\'</span>\n\n<span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n    <span class="token string">\'The first line\\n\'</span> <span class="token operator">+</span>\n    \'<span class="token constant">A</span> second line\\n <span class="token operator">+</span>\n    <span class="token string">\'Then a third line\'</span>\n\n<span class="token keyword">var</span> multilineString <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">\'The first line\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'A second line\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Then a third line\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">.</span>join<span class="token punctuation">[</span><span class="token string">\'\\n\'</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Với ES6, đơn giản là mình gõ Enter như bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n<span class="token template-string"><span class="token string">`The first line\nThe second line\nThen a third line`</span></span></code></pre>\n      </div>\n<p>Cực kỳ hữu ích khi cần phải chèn một đoạn HTML như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Module ES6\'</span><span class="token punctuation">,</span>\n    excerpt<span class="token punctuation">:</span> <span class="token string">\'Here goes some properly sanitized HTML\'</span><span class="token punctuation">,</span>\n    tags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'es6\'</span><span class="token punctuation">,</span><span class="token string">\'template-literals\'</span><span class="token punctuation">,</span><span class="token string">\'es6-in-depth\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token string">`&lt;article>\n    &lt;header>\n        &lt;h1></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> book<span class="token punctuation">.</span>title <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1>\n    &lt;/header>\n    &lt;section> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> book<span class="token punctuation">.</span>excerpt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/section>\n    &lt;footer>\n&lt;ul>\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>\nbook<span class="token punctuation">.</span>tags<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> tag <span class="token operator">=></span> <span class="token operator">&lt;</span>code<span class="token operator">></span>\n    <span class="token operator">&lt;</span>li<span class="token operator">></span> $<span class="token punctuation">{</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li>\n&lt;/code>)\n.join(\'\\n\')\n}&lt;/ul>\n&lt;/footer>\n&lt;/article>`</span></span></code></pre>\n      </div>\n<h1 id="tagged-templates"><a href="#tagged-templates" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tagged templates</h1>\n<p>Với một template literal như... </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token template-string"><span class="token string">`Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. I am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> emotion <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to meet you!`</span></span></code></pre>\n      </div>\n<p>...viết bằng tagged template</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">    <span class="token function">tag</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'Hello,\'</span><span class="token punctuation">,</span><span class="token string">\'. I am\'</span><span class="token punctuation">,</span> <span class="token string">\'to meet you!\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">\'Maurice\'</span><span class="token punctuation">,</span><span class="token string">\'thrilled\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Tagged template là một dạng <strong>cao siêu</strong> của template literal, tham số đầu tiên của nó là một mảng các string, các tham số sau đó, lần lượt được chèn vào giữa các phần tử của mảng.</p>\n<p><code class="language-text">tag</code> ở đây có thể là một hàm tự mình viết luôn</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token string">\'Mike\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">28</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">myTag</span><span class="token punctuation">(</span>strings<span class="token punctuation">,</span> personExp<span class="token punctuation">,</span> ageExp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> str0 <span class="token operator">=</span> strings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// "That "</span>\n  <span class="token keyword">var</span> str1 <span class="token operator">=</span> strings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// " is a "</span>\n\n  <span class="token keyword">var</span> ageStr<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>ageExp <span class="token operator">></span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    ageStr <span class="token operator">=</span> <span class="token string">\'centenarian\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    ageStr <span class="token operator">=</span> <span class="token string">\'youngster\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str0<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>personExp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ageStr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> output <span class="token operator">=</span> myTag<span class="token template-string"><span class="token string">`That </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> person <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is a </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> age <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// That Mike is a youngster</span></code></pre>\n      </div>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">Tham khảo</a></p>',timeToRead:4,excerpt:"Trong Series này Nâng cấp cho Object Arrow function Assignment Destruction Rest parameters và spread operator Template literals Khai báo…",frontmatter:{title:"Hồi 5: ES6 căn bản - Template literals",cover:"",date:"2016-11-19",category:"javascript",tags:["javascript"],desc:"Hồi 5 trong series ES6 căn bản, nói về Template literals, một nâng cấp lớn cho string"},fields:{slug:"/2016-11-19-phan-5-es-6-can-ban-template-literals"}}},pathContext:{slug:"/2016-11-19-phan-5-es-6-can-ban-template-literals",prev:{frontmatter:{title:"Hồi 6: ES6 căn bản - Khai báo biến với let và const",desc:"Hồi 6 trong series ES6 căn bản, nói về khai báo biến với let và const",type:"post",category:"javascript",tags:["javascript"],date:"2016-11-20",cover:""},fields:{slug:"/2016-11-20-phan-6-es-6-can-ban-khai-bao-let-const"}},next:{frontmatter:{title:"Hồi 4: ES6 căn bản - Rest Parameters và Spread Operator",desc:"Hồi 4 trong series ES6 căn bản, nói về Rest Parameters và Spread Operator",type:"post",category:"javascript",tags:["javascript"],date:"2016-11-18",cover:""},fields:{slug:"/2016-11-18-phan-4-es-6-can-ban-rest-parameters-va-spread-operator"}}}}}});
//# sourceMappingURL=path---2016-11-19-phan-5-es-6-can-ban-template-literals-b5deae1ea2f0dc223237.js.map