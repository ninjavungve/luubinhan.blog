webpackJsonp([0x9a7b7d856721],{1335:function(n,t){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#global-execution-context">Global Execution Context</a></li>\n<li><a href="#function-execution-context">Function Execution Context</a></li>\n</ul>\n<!-- /TOC -->\n<p>Sau khi nắm được nó chúng ta có thể giải thích những vấn đề <em>cao siêu</em> như <strong>hoisting</strong>, <strong>scope chain</strong>, <strong>closure</strong>.</p>\n<p>Để hiểu Execution Context, ngẫm lại cách chúng ta viết code: chúng ta tách nó ra thành những phần nhỏ riêng biệt. Những “phần nhỏ” này có các tên gọi như function, module, package, tất cả là để chia nhỏ, dễ quản lý một mớ code vừa to vừa phức tạp.</p>\n<p>Nếu Javascript là một người thực thi các đoạn code này, nó cũng dùng cách tương tự, thực thi từng phần code một, được gọi là Execution Context</p>\n<div class="note">Mỗi Execution Context sẽ có 2 phase, **Creation phase** và **Execution phase**</div>\n<p>Có 2 loại Execution Context: </p>\n<ol>\n<li>Global Execution Context</li>\n<li>Function Execution Context</li>\n</ol>\n<h2 id="global-execution-context"><a href="#global-execution-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Global Execution Context</h2>\n<p>Được tạo khi javascript chạy code của chúng ta, bình thường nó sẽ tạo ra 2 thứ: 1 global object và một biến gọi là <code class="language-text">this</code>. <code class="language-text">this</code> sẽ trỏ tới global object là window nếu chạy trên trình duyệt, trỏ tới <code class="language-text">global</code> nếu chạy trên Node</p>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/no-code.png" alt="Execution context, Hoisting, Scopes, Closures trong Javascript"></p>\n<p>Khi chúng ta khai báo thêm biến</p>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/global-variables-in-creation-phase.png" alt="Execution context, Hoisting, Scopes, Closures trong Javascript">\n<img src="https://tylermcginnis.com/images/posts/advanced-javascript/global-variables-in-execution-phase.png" alt="Execution context, Hoisting, Scopes, Closures trong Javascript"></p>\n<p>Creation phase của Global Execution context sẽ có các bước</p>\n<ol>\n<li>Tạo global object</li>\n<li>Tạo object tên là <code class="language-text">this</code></li>\n<li>Setup vùng nhớ tạm thời cho biến và function</li>\n<li>Gắn giá trị <code class="language-text">undefined</code> cho biến, trỏ từng function đến vùng nhớ.</li>\n</ol>\n<p>Thử log giá trị sau creation phase và trước execution phase</p>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/global-execution-context-gif.gif" alt="Thử log giá trị sau creation phase và trước execution phase"></p>\n<p>Trước khi javascript thực sự chạy các dòng code, <em>creation phase</em> xảy ra trước, nên giá trị log ra sẽ là <code class="language-text">undefined</code>, function sẽ trỏ tới một vùng nhớ.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'name: \'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token comment">// name: undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'handle: \'</span><span class="token punctuation">,</span> handle<span class="token punctuation">)</span> <span class="token comment">// handle: undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'getUser :\'</span><span class="token punctuation">,</span> getUser<span class="token punctuation">)</span> <span class="token comment">// getUser: ƒ getUser () {}</span>\n\n<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">\'Tyler\'</span>\n<span class="token keyword">var</span> handle <span class="token operator">=</span> <span class="token string">\'@tylermcginnis\'</span>\n\n<span class="token keyword">function</span> <span class="token function">getUser</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>\n    handle<span class="token punctuation">:</span> handle\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="note">Trong creation phase, quá trình gắn các biến được khai báo vào giá trị `undefined` được gọi là **hoisting**.</div>\n<h2 id="function-execution-context"><a href="#function-execution-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Function Execution Context</h2>\n<p>Được tạo ra khi thực thi hàm, cơ bản nó cũng giống với Global execution context, khác ở chỗ nó bỏ bước #1</p>\n<ol>\n<li><del>Tạo global object</del></li>\n<li>Tạo một object tên <code class="language-text">arguments</code></li>\n<li>Tạo object tên là <code class="language-text">this</code></li>\n<li>Setup vùng nhớ tạm thời cho biến và function</li>\n<li>Gắn giá trị <code class="language-text">undefined</code> cho biến, trỏ từng function đến vùng nhớ.</li>\n</ol>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/function-execution-context-gif.gif" alt="Function execution context"></p>\n<p>Bạn có thấy cái ô màu hồng hồng trên hình nó xuất hiện khi function được thực thi, sau đó bị remove sau khi chạy xong. Khi tạo một execution context, javascript đưa vào một hàng đợi gọi là <strong>Call Stack</strong>, sau khi đã chạy xong 2 phase nó remove khỏi Call Stack</p>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/javascript-execution-stack.gif" alt="sau khi đã chạy xong 2 phase nó remove khỏi Call Stack\n"></p>\n<p><a href="https://goo.gl/vjmnTa">Chạy thử</a></p>\n<p>Với một function có khai báo biến bên trong</p>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/local-variables.gif" alt="Với một function có khai báo biến bên trong"></p>\n<p>Quá hiển nhiên là biến <code class="language-text">handle</code> nằm trong Global Execution Context, nên bên trong function chúng ta có thể access đến nó, trong khi biến <code class="language-text">twitterURL</code> được khởi tạo ở trong function, nó chỉ có trong Function Execution Context khi hàm được thực thi. Đây chính là nền tảng của khái niệm <strong>SCOPE</strong></p>\n<p>Chúng ta đã biết scope ám chỉ việc biến có thể truy xuất ở đâu. Trên MDN nó định nghĩa scope</p>\n<blockquote>\n<p>Scope: The current context of execution.</p>\n</blockquote>\n<p>Giờ bạn nghĩ xem, cái gì sẽ được log ra sau khi chạy hàm</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">first</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">\'Jordyn\'</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">second</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">\'Jake\'</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">\'Tyler\'</span>\n<span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></code></pre>\n      </div>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/unique-scopes.gif" alt="Execution context, Hoisting, Scopes, Closures"></p>\n<p>Chúng ta sẽ có thứ tự log ra: <code class="language-text">undefined</code>, <code class="language-text">Jordyn</code>, <code class="language-text">Jake</code>, <code class="language-text">Tyler</code></p>\n<p>Trong trường hợp biến không tồn tại trong execution context của function, liệu nó sẽ log ra cái gì, hay ngừng chạy?</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">\'Tyler\'</span>\n\n<span class="token keyword">function</span> <span class="token function">logName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">logName</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/parent-lookup.gif" alt="Trong trường hợp biến không tồn tại trong execution context của function"></p>\n<p>Kết quả log ra là "Tyler", dù bên trong execution context của hàm không có biến, nó sẽ tìm đến thằng context cha xem có giá trị của biến này chưa, cho đến khi global execution context nó sẽ dừng.</p>\n<div class="note">Đặc điểm này trọng javascript được gọi là Scope chain</div>\n<p><img src="https://tylermcginnis.com/images/posts/advanced-javascript/closure-scope.gif" alt="Đặc điểm này trọng javascript được gọi là Scope chain"></p>\n<div class="note">Khi chúng ta lồng một function bên trong 1 function như vậy, nó sẽ tạo ra một cái gọi là <b>Closure Scope</b></div>\n<p>Tham khảo thêm</p>\n<p>Mình đã viết bài này trên MDN <a href="https://developer.mozilla.org/vi/docs/Web/JavaScript/Closures" target="_blank" rel="noopener noreferrer">Closures</a></p>\n<p><a href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/" target="_blank" rel="noopener noreferrer">The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript</a></p>\n<p><a href="https://tylermcginnis.com/javascript-visualizer/" target="_blank" rel="noopener noreferrer">Diễn giải các khái niệm bằng công cụ do tác giả build </a></p>',timeToRead:4,excerpt:"Global Execution Context Function Execution Context Sau khi nắm được nó chúng ta có thể giải thích những vấn đề  cao siêu  như  hoisting…",frontmatter:{title:"Tìm hiểu Execution context trong Javascript",cover:"",date:"2018-11-09",category:null,tags:["javascript"],desc:"Theo quan điểm của mình, khái niệm căn bản và quan trọng bật nhất của javascript là hiểu được Execution Context,"},fields:{slug:"/2018-11-09-gioi-thieu-execution-context-trong-javascript-kien-thuc-can-biet"}}},pathContext:{slug:"/2018-11-09-gioi-thieu-execution-context-trong-javascript-kien-thuc-can-biet",prev:{frontmatter:{title:"Kinh nghiệm tổ chức Vuex cho ứng dụng lớn",desc:"Nếu bạn đã sử dụng thông thạo Vuex để tạo các ứng dụng be bé như ToDo list, Shopping Cart, hãy nâng trình của mình lên bằng các ứng dụng có nhiều dữ liệu hơn.",type:"post",category:null,tags:["vuejs"],date:"2018-11-10",cover:""},fields:{slug:"/2018-11-10-huong-dan-to-chuc-vuex-store-tren-du-an-lon"}},next:{frontmatter:{title:"Giới thiệu Vuex cho người mới bắt đầu",desc:"Mình không giới thiệu cụ thể từng phần trong Vuex, các bạn cần nắm redux store của React để hiểu được bài này, các khái niệm và nguyên tắc gần như là giống nhau, khác cách đặt tên thôi.",type:"post",category:null,tags:["vuejs"],date:"2018-11-08",cover:""},fields:{slug:"/2018-11-08-gioi-thieu-vuex-cho-nguoi-moi-bat-dau"}}}}}});
//# sourceMappingURL=path---2018-11-09-gioi-thieu-execution-context-trong-javascript-kien-thuc-can-biet-f8a73cae7effe03e89af.js.map