webpackJsonp([0x932282d6b639],{1263:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Trong Series này</p>\n<ol>\n<li><a href="2016-11-15-chuong-1-es6-can-ban">Nâng cấp cho Object</a></li>\n<li><a href="2016-11-16-chuong-2-es6-can-ban-arrow-function/">Arrow function</a></li>\n<li><a href="2016-11-17-phan-3-es6-can-ban-assignment-destructuring">Assignment Destruction</a></li>\n<li><a href="2016-11-18-phan-4-es6-can-ban-rest-parameters-va-spread-operator">Rest parameters và spread operator</a></li>\n<li><a href="2016-11-19-phan-5-es6-can-ban-template-literals">Template literals</a></li>\n<li><a href="2016-11-20-phan-6-es6-can-ban-khai-bao-let-const">Khai báo biến với let và const</a></li>\n<li><a href="2016-11-21-phan-7-es6-can-ban-classes">Căn bản class</a></li>\n</ol>\n<p>Javascript vốn là ngôn ngữ <code class="language-text">prototype</code>, <code class="language-text">class</code> không phải là cái gì đó mới mẻ trong javascript, chỉ là trước đây có cách khai báo và tên gọi khác prototype thì giờ có cách khai báo mới cho những ai đã quen với những ngôn ngữ khác có thể tiếp cận dễ dàng.</p>\n<h2 id="khai-báo"><a href="#khai-b%C3%A1o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khai báo</h2>\n<p>Đây là cách khai báo trước đây, khai báo <code class="language-text">fruit</code> sử dụng <code class="language-text">function contstructor</code>, thêm một số phương thức cho nó bằng khai báo thêm <code class="language-text">prototype</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Fruit</span><span class="token punctuation">(</span> name<span class="token punctuation">,</span> calories <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">=</span> calories\n <span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\nFruit<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">chop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">this</span><span class="token punctuation">.</span>pieces<span class="token operator">++</span>\n<span class="token punctuation">}</span>\nFruit<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bite</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">&amp;</span>amp<span class="token punctuation">;</span>amp<span class="token punctuation">;</span>lt<span class="token punctuation">;</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span>\n <span class="token punctuation">}</span>\n <span class="token keyword">const</span> calories <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span> calories <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pieces\n person<span class="token punctuation">.</span>satiety <span class="token operator">+=</span> calories\n <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">-=</span> calories\n <span class="token keyword">this</span><span class="token punctuation">.</span>pieces<span class="token operator">--</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Với ES6 viết theo khai báo <code class="language-text">class</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>\n <span class="token function">constructor</span> <span class="token punctuation">(</span> name<span class="token punctuation">,</span> calories <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n  <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">=</span> calories\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">=</span> <span class="token number">1</span>\n <span class="token punctuation">}</span>\n <span class="token function">chop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pieces<span class="token operator">++</span>\n <span class="token punctuation">}</span>\n <span class="token function">bite</span> <span class="token punctuation">(</span> person <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">&amp;</span>amp<span class="token punctuation">;</span>amp<span class="token punctuation">;</span>lt<span class="token punctuation">;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n   <span class="token keyword">return</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> calories <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pieces\n  person<span class="token punctuation">.</span>satiety <span class="token operator">+=</span> calories\n  <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">-=</span> calories\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pieces<span class="token operator">--</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Lưu ý là với khai báo <code class="language-text">class</code>, mình không cần thêm dấu <code class="language-text">,</code> giữa các hàm, phân biệt với <code class="language-text">object literal</code>, giữa mỗi <code class="language-text">function</code> phải được phân cách bằng <code class="language-text">,</code></p>\n<p>Không giống như khi khai báo function, nếu khái báo <code class="language-text">class</code> bên dưới câu gọi nó, nó sẽ không hiểu, <code class="language-text">function</code> thì viết ở đâu gọi cũng hiểu</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Result: referenceError: Person is not defined</span>\n<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="phương-thức-và-properties-trong-classes"><a href="#ph%C6%B0%C6%A1ng-th%E1%BB%A9c-v%C3%A0-properties-trong-classes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phương thức và Properties trong Classes</h2>\n<p><code class="language-text">constructor</code> không bắt buộc khai báo</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đoạn code ví dụ bên dưới, tạo một <code class="language-text">class</code> với <code class="language-text">property</code> là <code class="language-text">count</code> hàm phương thức get next sẽ trả về giá trị <code class="language-text">count</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span> <span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> start\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> <span class="token function">next</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Vận dụng, viết một class để lưu dữ liệu nhận về từ JSON, đọc thêm về <code class="language-text">Window.localStorage</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">LocalStorage</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">set</span> <span class="token function">data</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> ls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LocalStorage</span><span class="token punctuation">(</span><span class="token string">\'groceries\'</span><span class="token punctuation">)</span>\nls<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'apple\'</span><span class="token punctuation">,</span><span class="token string">\'bananas\'</span><span class="token punctuation">,</span> <span class="token string">\'grapes\'</span><span class="token punctuation">]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ls<span class="token punctuation">.</span>data<span class="token punctuation">)</span>\n<span class="token comment">// Result: [\'apple\', \'bananas\',\'grapes\']</span></code></pre>\n      </div>\n<p>tạo một phương thức <code class="language-text">static</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MathHelper</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MathHelper<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>\n<span class="token comment">// Result: 15</span></code></pre>\n      </div>\n<h2 id="class-extends"><a href="#class-extends" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Class Extends</h2>\n<p>Trước đây gặp trường hợp này phải xài tới "thuốc" thì mới tạo được <code class="language-text">sub-class</code>, mà cũng khá lằn ngoằn, giờ có cách chính quy. lưu ý là khi muốn viết lại hàm constructor bên trong sub-class thì phải gọi từ khóa super để gọi làm phương thức constructor từ class extend</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Banana</span> <span class="token keyword">extends</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>\n <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">\'banana\'</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span>\n <span class="token punctuation">}</span>\n <span class="token function">slice</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">=</span> <span class="token number">12</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',timeToRead:3,excerpt:"Trong Series này Nâng cấp cho Object Arrow function Assignment Destruction Rest parameters và spread operator Template literals Khai báo…",frontmatter:{title:"Hồi 7: ES6 căn bản - Classes",cover:"",date:"2016-11-21",category:"javascript",tags:["javascript"],desc:"Hồi 7 trong series ES6 căn bản, Javascript vốn là ngôn ngữ prototype, class không phải là cái gì đó mới mẻ trong javascript"},fields:{slug:"/2016-11-21-phan-7-es-6-can-ban-classes"}}},pathContext:{slug:"/2016-11-21-phan-7-es-6-can-ban-classes",prev:{frontmatter:{title:"Nắm vững 5 khái niệm sau, xem như master React",desc:"Sạo vậy thôi chứ làm gì mà trở thành master ngay lập tức được, lý lẽ bình thường muốn master bất cứ thứ gì cũng cần mồ hôi và nước mắt. Hiểu được 5 khái niệm được cho là căn cơ nhất này sẽ giúp bạn dễ xa lầy hơn.",type:"post",category:"javascript",tags:["javascript","react"],date:"2017-01-10",cover:""},fields:{slug:"/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react"}},next:{frontmatter:{title:"Hồi 6: ES6 căn bản - Khai báo biến với let và const",desc:"Hồi 6 trong series ES6 căn bản, nói về khai báo biến với let và const",type:"post",category:"javascript",tags:["javascript"],date:"2016-11-20",cover:""},fields:{slug:"/2016-11-20-phan-6-es-6-can-ban-khai-bao-let-const"}}}}}});
//# sourceMappingURL=path---2016-11-21-phan-7-es-6-can-ban-classes-525512c52a91ab115f51.js.map