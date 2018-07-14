webpackJsonp([0xa3d7acc18d46],{488:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Trong Series này</p>\n<ol>\n<li><a href="2016-11-15-chuong-1-es6-can-ban">Nâng cấp cho Object</a></li>\n<li><a href="2016-11-16-chuong-2-es6-can-ban-arrow-function/">Arrow function</a></li>\n<li><a href="2016-11-17-phan-3-es6-can-ban-assignment-destructuring">Assignment Destruction</a></li>\n<li><a href="2016-11-18-phan-4-es6-can-ban-rest-parameters-va-spread-operator">Rest parameters và spread operator</a></li>\n<li><a href="2016-11-19-phan-5-es6-can-ban-template-literals">Template literals</a></li>\n<li><a href="2016-11-20-phan-6-es6-can-ban-khai-bao-let-const">Khai báo biến với let và const</a></li>\n<li><a href="2016-11-21-phan-7-es6-can-ban-classes">Căn bản class</a></li>\n</ol>\n<p>Mục lục</p>\n<!-- MarkdownTOC -->\n<ul>\n<li>Rest parameter</li>\n<li>Spread Operator</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h2 id="rest-parameter"><a href="#rest-parameter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rest parameter</h2>\n<p>Khi có số lượng tham số truyền vào cho một function không cố định, trước đây ta dùng <code class="language-text">arguments object</code>, sau đó sử dụng <code class="language-text">Array.prototype.slice.call</code> để chuyển nó thành một mảng</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">var</span> list <span class="token operator">=</span> Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">)</span>\n<span class="token comment">// -> [\'a\',\'b\',\'c\']</span></code></pre>\n      </div>\n<p>Kết quả tương tự với cách làm mới đơn giản hơn, thêm dấu "..." phía trước tham số</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">...</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">)</span>\n<span class="token comment">// -> [\'a\',\'b\',\'c\']</span></code></pre>\n      </div>\n<p>Nếu muốn truyền vào 1 tham số bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function">print</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span><span class="token operator">...</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">)</span>\n<span class="token comment">// -> \'a\'</span>\n<span class="token comment">// -> [\'b\',\'c\']</span></code></pre>\n      </div>\n<p>Nếu sử dụng <code class="language-text">Arrow function</code> thì buộc phải thêm dấu ngoặc kép <code class="language-text">()</code>, dù chỉ có một tham số</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">sumAll</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token operator">...</span>numbers <span class="token punctuation">)</span> <span class="token operator">=></span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span>next<span class="token punctuation">)</span> <span class="token operator">=></span> total <span class="token operator">+</span> next<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">sumAll</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// = 8</span></code></pre>\n      </div>\n<p>Nếu lúc trước ta phải viết</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">sumAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> numbers <span class="token operator">=</span> Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> a <span class="token operator">+</span> b\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// =8</span></code></pre>\n      </div>\n<h1 id="spread-operator"><a href="#spread-operator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Spread Operator</h1>\n<p>Xem ví dụ bên dưới, Spread operator giúp trả về một mảng</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">cast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token function">cast</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">)</span>\n<span class="token comment">// [\'a\',\'b\',\'c\']</span></code></pre>\n      </div>\n<p>Trong trường hợp phải combine nhiều mảng</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> all <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>all<span class="token punctuation">)</span>\n<span class="token comment">// [1,2,3,4,5,6,7]</span></code></pre>\n      </div>\n<p>Một ví dụ khác để thấy lợi ích của <em>spread operator</em> khi kết hợp với new một <code class="language-text">object</code> như <code class="language-text">Date</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2015</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>\n<span class="token comment">// Thu Dec 31 2015</span></code></pre>\n      </div>\n<p>Khi muốn lấy 1 hoặc 2 phần tử của mảng, cách vẫn thường làm là shift mấy phần tử này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token string">\'d\'</span> <span class="token punctuation">]</span>\n<span class="token keyword">var</span> first <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> second <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>\n<span class="token comment">// a</span></code></pre>\n      </div>\n<p>Cách viết mới</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token string">\'d\'</span><span class="token punctuation">,</span><span class="token string">\'e\'</span> <span class="token punctuation">]</span>\n<span class="token comment">// [\'c\',\'d\',\'e\']</span></code></pre>\n      </div>',timeToRead:2,excerpt:"Trong Series này Nâng cấp cho Object Arrow function Assignment Destruction Rest parameters và spread operator Template literals Khai báo…",frontmatter:{title:"Hồi 4: ES6 căn bản - Rest Parameters và Spread Operator",cover:"",date:"2016-11-18",category:"javascript",tags:["javascript"],desc:"Hồi 4 trong series ES6 căn bản, nói về Rest Parameters và Spread Operator"},fields:{slug:"/2016-11-18-phan-4-es-6-can-ban-rest-parameters-va-spread-operator"}}},pathContext:{slug:"/2016-11-18-phan-4-es-6-can-ban-rest-parameters-va-spread-operator"}}}});
//# sourceMappingURL=path---2016-11-18-phan-4-es-6-can-ban-rest-parameters-va-spread-operator-722141d6bd5091669287.js.map