webpackJsonp([0xfe6a3e3f7bad],{1222:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Trong Series này</p>\n<ol>\n<li><a href="/blog/2016-11-15-chuong-1-es6-can-ban">Nâng cấp cho Object</a></li>\n<li><a href="/blog/2016-11-16-chuong-2-es6-can-ban-arrow-function/">Arrow function</a></li>\n<li><a href="/blog/2016-11-17-phan-3-es6-can-ban-assignment-destructuring">Assignment Destruction</a></li>\n<li><a href="/blog/2016-11-18-phan-4-es6-can-ban-rest-parameters-va-spread-operator">Rest parameters và spread operator</a></li>\n<li><a href="/blog/2016-11-19-phan-5-es6-can-ban-template-literals">Template literals</a></li>\n<li><a href="/blog/2016-11-20-phan-6-es6-can-ban-khai-bao-let-const">Khai báo biến với let và const</a></li>\n<li><a href="/blog/2016-11-21-phan-7-es6-can-ban-classes">Căn bản class</a></li>\n</ol>\n<!-- MarkdownTOC -->\n<ul>\n<li>Khai báo</li>\n<li>Lexical scoping là gì</li>\n<li>Một số dạng khai báo</li>\n<li>Nên và không nên</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1 id="khai-báo"><a href="#khai-b%C3%A1o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khai báo</h1>\n<p>Trước đây để khai báo hàm trong javascript</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span>paramters<span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token comment">//body</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hoặc, tạo một hàm ẩn (anonymous function), sau đó gán hàm này cho biến, key của object</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">mystyle</span> <span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span>paramters<span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token comment">//body</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bắt đầu từ ES6 ta có thêm một cách để viết một hàm không có tên (hàm ẩn), có thể viết hàm trên bằng cách mới</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">mystyle</span> <span class="token operator">=</span> <span class="token punctuation">(</span>paramters<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n <span class="token comment">//body</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bỏ từ khóa <code class="language-text">function</code>, thêm vào <code class="language-text">=&gt;</code>  sau <code class="language-text">paramater</code>. Sự khác biệt của <em>arrow function</em> là nó <strong>không được phép đặt tên</strong> và là dạng <code class="language-text">lexical scoping</code></p>\n<h1 id="lexical-scoping-là-gì"><a href="#lexical-scoping-l%C3%A0-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lexical scoping là gì</h1>\n<p>Từ khóa <code class="language-text">this</code> và <code class="language-text">argument</code> điều trỏ về đối tượng cha bự nhất. Ví dụ cho dễ hiểu cái nha. Chúng ta có đối tượng <code class="language-text">timer</code> với biến đếm <code class="language-text">second</code> và phương thức <code class="language-text">start</code>. Khi chạy <code class="language-text">timer</code> một vài giây, log giá trị <code class="language-text">seconds</code> hiện tại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token punctuation">{</span>\n seconds<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>\n   <span class="token keyword">this</span><span class="token punctuation">.</span>seconds<span class="token operator">++</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\ntimer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">setTimer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer<span class="token punctuation">.</span>seconds<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3500</span><span class="token punctuation">)</span>\n<span class="token comment">// result -3</span></code></pre>\n      </div>\n<p>Nếu hàm truyền vào cho <code class="language-text">setInterval</code> là một hàm bình thường nó sẽ không hiểu <code class="language-text">this.second</code> là thằng nào, ta phải khai báo thêm <code class="language-text">self = this</code> ở trên <em>timer</em>, từ khóa this không còn đi theo ngữ cảnh hiện tại mà nó sẽ tham chiếu lên trên.</p>\n<h1 id="một-số-dạng-khai-báo"><a href="#m%E1%BB%99t-s%E1%BB%91-d%E1%BA%A1ng-khai-b%C3%A1o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Một số dạng khai báo</h1>\n<p>Nếu <em>arrow function</em> chỉ chứa một <em>parameter</em> duy nhất, bỏ luôn dấu `()<code class="language-text"></code> viết gì cho dễ đọc</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">double</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> value <span class="token operator">*</span> <span class="token number">2</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Với hàm mà return 1 dòng như vậy có thể rút ngắn lại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">double</span> <span class="token operator">=</span> value <span class="token operator">=></span> value <span class="token operator">*</span> <span class="token number">2</span></code></pre>\n      </div>\n<h1 id="nên-và-không-nên"><a href="#n%C3%AAn-v%C3%A0-kh%C3%B4ng-n%C3%AAn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nên và không nên</h1>\n<p>ES6 không có nghĩa là cái nào cũng tốt hơn ES5, <em>arrow function</em> có trường hợp không nên sử dụng. Ví dụ nếu hàm lớn với vài chục dòng code, thay thế bằng <em>arrow function</em> là điều không nên làm, nên nhớ <em>arrow function</em> không được phép có tên, trong mọi trường hợp hàm có tên đi kèm luôn dễ maintain hơn.</p>\n<p>Arrow function tuyệt vời khi cần một hàm không tên thực hiện một vài thao tác đơn giản. Thí dụ kết hợp với những hàm như .map, .filter, .reduce</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>value <span class="token operator">=></span> value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span> value <span class="token operator">=></span> value <span class="token operator">></span> <span class="token number">2</span> <span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> value <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> value <span class="token punctuation">)</span> <span class="token punctuation">)</span></code></pre>\n      </div>',timeToRead:3,excerpt:"Trong Series này Nâng cấp cho Object Arrow function Assignment Destruction Rest parameters và spread operator Template literals Khai báo…",frontmatter:{title:"Hồi 2: ES6 căn bản - Arrow Function",cover:"",date:"2016-11-16",category:"javascript",tags:["javascript"],desc:"Hồi 2 trong series ES6 căn bản, nói về Arrow Function"},fields:{slug:"/2016-11-16-chuong-2-es-6-can-ban-arrow-function"}}},pathContext:{slug:"/2016-11-16-chuong-2-es-6-can-ban-arrow-function",prev:{frontmatter:{title:"Hồi 3: ES6 căn bản - Truy cập phần tử",desc:"Hồi 3 trong series ES6 căn bản, nói về Assignment Destructuring",type:"post",category:"javascript",tags:["javascript"],date:"2016-11-17",cover:""},fields:{slug:"/2016-11-17-phan-3-es-6-can-ban-assignment-destructuring"}},next:{frontmatter:{title:"ES6 Căn bản (phần 1) - Những nâng cấp cho Object",desc:"Nếu bạn đã đọc bài FrontEnd Developer 2016 nên học gì? Chắc bạn đã rối không biết bắt đầu từ đâu nếu muốn dấn thân vào cuộc chơi nhiều cám dỗ này. Mình nghĩ cái đầu tiên cần học là ES6.",type:"post",category:"javascript",tags:["javascript"],date:"2016-11-15",cover:""},fields:{slug:"/2016-11-15-chuong-1-es-6-can-ban"}}}}}});
//# sourceMappingURL=path---2016-11-16-chuong-2-es-6-can-ban-arrow-function-57e9f2539e19fae373d7.js.map