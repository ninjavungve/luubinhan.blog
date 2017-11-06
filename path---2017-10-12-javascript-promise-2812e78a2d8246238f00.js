webpackJsonp([29],{"./node_modules/json-loader/index.js!./.cache/json/2017-10-12-javascript-promise.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Bạn sẽ gặp đoạn code sau rất nhiều</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'/user/1\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> user <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">/* run after API return */</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Đoạn code nằm bên trong <code>.then</code> sẽ chạy sau khi nhận dữ liệu trả về từ server trước khi chạy tiếp. <code>Promise</code> thực chất là một <em>object</em> cũ xì trong javascript, điều khác biệt là nó có những phương thức cho phép chạy đồng bộ (synchronously)</p>\n<p>Nếu không tin bạn thử check kiểu của Promise sẽ thấy</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'object\'</span> <span class="token comment" spellcheck="true">// true</span>\n</code></pre>\n      </div>\n<p>Để mình nhắc lại lần nữa để bạn không bị cái tên hoa mĩ <em>Promise</em> lừa tình, <strong>Promise chỉ đơn thuần là một object</strong>. Để có thể đợi trả về từ server, trước khi thực hiện chạy đoạn code trong <code>.then()</code>, function của bạn <strong>BUỘC PHẢI</strong> trả về một <em>Promise</em>. Function <code>fetch</code> được viết như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>cost fetch <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> apiResponse<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token function">resolve</span><span class="token punctuation">(</span>apiResponse<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Giờ tới phần quan trọng, viết lại khai báo Promise (gọi là SimplePromise để tránh trùng tên) để xem cách làm của Promise</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">SimplePromise</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>executionFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>promiseChain <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>handleError <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>onResolve <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onResolve<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>onReject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onReject<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n\n        <span class="token function">executionFunction</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onResolve<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onReject<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">then</span><span class="token punctuation">(</span>onResolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>promiseChain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onResolve<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">catch</span><span class="token punctuation">(</span>handleError<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>handleError <span class="token operator">=</span> handleError<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">onResolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> storedValue <span class="token operator">=</span> value<span class="token punctuation">;</span>\n\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>promiseChain<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> nextFunction <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                storedValue <span class="token operator">=</span> <span class="token function">nextFunction</span><span class="token punctuation">(</span>storedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>promiseChain <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onReject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">onReject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Khi khởi tạo một Promise <code>new Promise((resolve, reject) =>{...} )</code> chúng ta truyền vào một callback function, function này sẽ nhận 2 tham số truyền vào là 2 function internal của Promise <code>onResolve</code> và <code>onReject</code></p>\n<p>Bên trong constructor đồng thời khởi tạo mảng <code>promiseChain</code> và hàm <code>handleError</code>, khi thêm một hoặc một mớ <code>.then()</code>, các hàm này sẽ được tuần tự đưa vào mảng <code>promiseChain</code>, hàm <code>.catch()</code> thì được map với hàm <code>handleError</code> trong Promise.</p>\n<blockquote>\n<p>Lưu ý, cái này là ví dụ, Promise thực tế thì 2 hàm <code>then</code> và <code>catch</code> sẽ trả về new Promise, cái này làm cho đơn giản trả về <code>this</code> thôi.</p>\n</blockquote>\n<p>Khi một hàm bất đồng bộ (async) được gọi <code>resolve(apiResponse)</code>, object promise bắt đầu chạy <code>onResolve(apiResponse)</code> nó sẽ loop qua <em>tuần tự</em> mảng <em>promiseChain</em>, thực thi các xử lý trong hàm từ đầu tiên trong mảng, đến hàm thứ 2, 3, 4..., mỗi lần như vậy nó sẽ nhận giá trị <code>storedValue</code> đồng thời cập nhập lại <code>storedValue</code> này. </p>',frontmatter:{date:"October 12, 2017",path:"/2017-10-12-javascript-promise",tags:["javascript"],title:"Promise trong javascript",desc:"Để hiểu rõ hơn promise, thử build một promise từ scratch"}}},pathContext:{prev:{excerpt:"Một  giá trị ,  hàm ,  object  có thể được   từ một file này và dùng câu lệnh   để sử dụng bên trong file khác. Export Cú pháp Giải thích Có 2 kiểu  Export 1 function đã được được khai báo hoặc một giá trị: export có định danh Default Export cho một...",html:'<p>Một <strong>giá trị</strong>, <strong>hàm</strong>, <strong>object</strong> có thể được <code>export</code> từ một file này và dùng câu lệnh <code>import</code> để sử dụng bên trong file khác.</p>\n<h1>Export</h1>\n<h2>Cú pháp</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">export</span> <span class="token punctuation">{</span>name1<span class="token punctuation">,</span> name2<span class="token punctuation">,</span> name3<span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">,</span> nameN<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// export su dung alias</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span>name1 <span class="token keyword">as</span> differentName1<span class="token punctuation">,</span> name2 <span class="token keyword">as</span> differentName2<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// export mot khai bao bien so hoac hang so</span>\n<span class="token keyword">export</span> <span class="token keyword">let</span> name1<span class="token punctuation">,</span> <span class="token keyword">const</span> name2<span class="token punctuation">,</span> <span class="token keyword">var</span> name3\n<span class="token keyword">export</span> <span class="token keyword">let</span> name1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token keyword">var</span> name3 <span class="token operator">=</span> <span class="token number">30</span>\n\n<span class="token comment" spellcheck="true">// export mot class hoac function</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> expression<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">name1</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Giải thích</h2>\n<p>Có 2 kiểu <code>export</code></p>\n<ol>\n<li>Export 1 function đã được được khai báo hoặc một giá trị: export có định danh</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// exports a function declared earlier</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> myFunction <span class="token punctuation">}</span><span class="token punctuation">;</span> \n\n<span class="token comment" spellcheck="true">// exports a constant</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> foo <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ol start="2">\n<li>Default Export cho một hàm hoặc class</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Khi export có định danh thì khi import cũng phải gọi đúng tên đã export, trong khi sử dụng default export thì khi import đặt tên là gì cũng được.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">export</span> <span class="token keyword">default</span> k <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// test.js</span>\n\n<span class="token keyword">import</span> m <span class="token keyword">from</span> <span class="token string">\'./test\'</span> \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment" spellcheck="true">// log 12</span>\n</code></pre>\n      </div>\n<p>Trên một file chỉ có thể có một default export, câu lệnh sau không phải là default export</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token operator">...</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h1>Import</h1>\n<h2>Cú pháp</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> defaultExport <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> name <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">export</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">export</span> <span class="token keyword">as</span> alias <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> export1 <span class="token punctuation">,</span> export2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> export1 <span class="token punctuation">,</span> export2 <span class="token keyword">as</span> alias2 <span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> defaultExport<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">export</span> <span class="token punctuation">[</span> <span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> defaultExport<span class="token punctuation">,</span> <span class="token operator">*</span> <span class="token keyword">as</span> name <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Giải thích</h2>\n<p>Module export có tên quá dài, có thể đặt alias trong câu <code>import</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>reallyReallyLongModuleExportName <span class="token keyword">as</span> shortName<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'/modules/my-module.js\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Import tất cả các giá trị, hàm, object,... đã export trong một file khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> myModule <span class="token keyword">from</span> <span class="token string">\'another.file\'</span>\n</code></pre>\n      </div>\n<p>Import chỉ định một số hàm, object, giá trị trong file</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>funcA<span class="token punctuation">,</span> objB<span class="token punctuation">,</span> constC<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'another.file\'</span>\n</code></pre>\n      </div>',id:"E:/anluu/luckyluu/posts/2017-10-18-import-va-export-trong-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2017-10-18T13:35:13.234Z",path:"/2017-10-18-import-va-export-trong-javascript",tags:["javascript"],title:"Import và Export trong Javascript"}},next:{excerpt:"Sử dụng  Nếu sử dụng   react tự động bind toàn bộ từ khóa  Tuy nhiên từ khi ES6 có hổ trợ  , React.createClass có thể bị tách ra các release trong tương lai. Bind trong lúc Render Nếu khai báo một component React bằng cách extends React.Component...",html:'<h1>Sử dụng <code>React.createClass</code></h1>\n<p>Nếu sử dụng <code>React.createClass</code> react tự động bind toàn bộ từ khóa <code>this</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> Contacts <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Tuy nhiên từ khi ES6 có hổ trợ <code>class</code>, React.createClass có thể bị tách ra các release trong tương lai.</p>\n<h1>Bind trong lúc Render</h1>\n<p>Nếu khai báo một component React bằng cách extends React.Component, <code>this</code> sẽ không được tự động bind như đã nói ở trên, thay vào đó bind lúc render</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">Contacts</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Cách này tuy là sạch sẽ gọn ràng dễ hiểu, tuy nhiên lại ảnh hưởng nhiều tới performance vì mỗi function sẽ reallocated lúc render. <strong>Kinh nghiệm không bind bằng cách này</strong></p>\n<h1>Sử dụng Arrow function</h1>\n<p>Tương tự như cách trên, sử dụng arrow function để không thay đổi giá trị của <code>this</code> lúc render</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token template-string"><span class="token string">``</span></span>`js\n<span class="token keyword">class</span> <span class="token class-name">Contacts</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>handChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Cách này cũng không nên làm vì ảnh hương tới performance luôn</p>\n<h1>Bind trong cunstructor</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Đây là cách được khuyến cáo sử dụng, nếu thật sự quan tâm tới performance thì nên sử dụng cách này khi muốn bind từ khóa <code>this</code>.</p>\n<h1>Sử  dụng <code>Arrow Function</code> trong thuộc tính của class</h1>\n<p>Muốn sử dụng cách này, phải bật tính năng <em>transform-class-properties</em> trong Babel, xem thêm package này tại <a href="http://babeljs.io/docs/plugins/transform-class-properties">http://babeljs.io/docs/plugins/transform-class-properties</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>handleChange <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// call this function from render </span>\n  <span class="token comment" spellcheck="true">// and this.whatever in here works fine.</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Đây cũng là cách mà mình thường sử dụng nhất vì vừa sạch vừa tốt cho performance</p>',id:"E:/anluu/luckyluu/posts/2017-10-11-react-bind-pattern-5-cach-handle-this/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-10-11T13:35:13.234Z",path:"/2017-10-11-react-bind-pattern-5-cach-tham-chieu-this",tags:["react","javascript"],title:"React Bind Pattern: 5 cách chỉ định tham chiếu this"}}}}}});
//# sourceMappingURL=path---2017-10-12-javascript-promise-2812e78a2d8246238f00.js.map