webpackJsonp([0x77fc3274992a],{1247:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#export">Export</a></p>\n<ul>\n<li><a href="#c%C3%BA-ph%C3%A1p">Cú pháp</a></li>\n<li><a href="#gi%E1%BA%A3i-th%C3%ADch">Giải thích</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#import">Import</a></p>\n<ul>\n<li><a href="#c%C3%BA-ph%C3%A1p-1">Cú pháp</a></li>\n<li><a href="#gi%E1%BA%A3i-th%C3%ADch-1">Giải thích</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<p>Ở đây mình sẽ nói cách import và export với webpack, mới đây, thiên hạ đang đề nghị hỗ trợ <a href="/2018-07-02-huong-dan-javascript-modules-tren-web">import và export với native javascript</a></p>\n<p>Một <strong>giá trị</strong>, <strong>hàm</strong>, <strong>object</strong> có thể được <code class="language-text">export</code> từ một file này và dùng câu lệnh <code class="language-text">import</code> để sử dụng bên trong file khác.</p>\n<h1 id="export"><a href="#export" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Export</h1>\n<h2 id="cú-pháp"><a href="#c%C3%BA-ph%C3%A1p" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cú pháp</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token punctuation">{</span>name1<span class="token punctuation">,</span> name2<span class="token punctuation">,</span> name3<span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">,</span> nameN<span class="token punctuation">}</span>\n\n<span class="token comment">// export sử dụng alias</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span>name1 <span class="token keyword">as</span> differentName1<span class="token punctuation">,</span> name2 <span class="token keyword">as</span> differentName2<span class="token punctuation">}</span>\n\n<span class="token comment">// export một biến hoặc hằng số</span>\n<span class="token keyword">export</span> <span class="token keyword">let</span> name1<span class="token punctuation">,</span> <span class="token keyword">const</span> name2<span class="token punctuation">,</span> <span class="token keyword">var</span> name3\n<span class="token keyword">export</span> <span class="token keyword">let</span> name1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token keyword">var</span> name3 <span class="token operator">=</span> <span class="token number">30</span>\n\n<span class="token comment">// export một class hoặc function</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> expression<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">name1</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="giải-thích"><a href="#gi%E1%BA%A3i-th%C3%ADch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải thích</h2>\n<p>Có 2 kiểu <code class="language-text">export</code></p>\n<ol>\n<li>Export 1 function đã được khai báo hoặc một giá trị: <strong>export có định danh</strong></li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// exports hàm đã khai báo trước đó</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> myFunction <span class="token punctuation">}</span><span class="token punctuation">;</span> \n\n<span class="token comment">// exports một hằng số</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> foo <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ol start="2">\n<li><strong>Default Export</strong> cho một hàm hoặc class</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Khi export có định danh thì khi import cũng phải gọi đúng tên đã export, còn nếu sử dụng <em>default export</em> thì khi import đặt tên là gì cũng được.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> k <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">// test.js</span>\n\n<span class="token keyword">import</span> m <span class="token keyword">from</span> <span class="token string">\'./test\'</span> \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// log 12</span></code></pre>\n      </div>\n<p>Trên một file chỉ có thể có một default export, câu lệnh sau không phải là default export</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token operator">...</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="import"><a href="#import" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Import</h1>\n<h2 id="cú-pháp-1"><a href="#c%C3%BA-ph%C3%A1p-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cú pháp</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> defaultExport <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> name <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">export</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">export</span> <span class="token keyword">as</span> alias <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> export1 <span class="token punctuation">,</span> export2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> export1 <span class="token punctuation">,</span> export2 <span class="token keyword">as</span> alias2 <span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> defaultExport<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">export</span> <span class="token punctuation">[</span> <span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> defaultExport<span class="token punctuation">,</span> <span class="token operator">*</span> <span class="token keyword">as</span> name <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="giải-thích-1"><a href="#gi%E1%BA%A3i-th%C3%ADch-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải thích</h2>\n<p>Module export có tên quá dài, có thể đặt alias trong câu <code class="language-text">import</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>reallyReallyLongModuleExportName <span class="token keyword">as</span> shortName<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'/modules/my-module.js\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Import tất cả các giá trị, hàm, object,... đã export trong một file khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> myModule <span class="token keyword">from</span> <span class="token string">\'another.file\'</span></code></pre>\n      </div>\n<p>Import chỉ định một số hàm, object, giá trị trong file</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>funcA<span class="token punctuation">,</span> objB<span class="token punctuation">,</span> constC<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'another.file\'</span></code></pre>\n      </div>',timeToRead:3,excerpt:"Export Cú pháp Giải thích Import Cú pháp Giải thích Ở đây mình sẽ nói cách import và export với webpack, mới đây, thiên hạ đang đề nghị hỗ…",frontmatter:{title:"Import và Export trong Javascript bằng Webpack",cover:"",date:"2017-10-18",category:"javascript",tags:["javascript","webpack"],desc:"Bàn về các kiểu import và export module trong javascript với Webpack"},fields:{slug:"/2017-10-18-import-va-export-trong-javascript"}}},pathContext:{slug:"/2017-10-18-import-va-export-trong-javascript",prev:{frontmatter:{title:"Sort trong javascript",desc:"Nếu nghĩ đã hiểu rõ hàm Array.sort() trong javascript, hãy nghĩ lại!",type:"post",category:"javascript",tags:["javascript"],date:"2017-10-19",cover:""},fields:{slug:"/2017-10-19-sort-trong-javascript"}},next:{frontmatter:{title:"Nắm vững Promise trong javascript",desc:"Cùng tìm hiểu Promise của javascript, tự tạo một Promise",type:"post",category:"javascript",tags:["javascript"],date:"2017-10-12",cover:""},fields:{slug:"/2017-10-12-javascript-promise"}}}}}});
//# sourceMappingURL=path---2017-10-18-import-va-export-trong-javascript-32aade6acc3227d436a9.js.map