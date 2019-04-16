webpackJsonp([0x8ca9fad6744a],{1259:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#callback-function">Callback function</a></li>\n<li><a href="#function-nh%C6%B0-m%E1%BB%99t-gi%C3%A1-tr%E1%BB%8B-tr%E1%BA%A3-v%E1%BB%81">Function như một giá trị trả về</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="callback-function"><a href="#callback-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Callback function</h1>\n<p>Javascript xem một function như một dạng object, function có thể trở thành giá trị của một biến, có thể dùng như một đối số hoặc giá trị return như một object.</p>\n<p>Javscript là ngôn ngữ single-threaded, nghĩa là một lần nó chỉ chạy một tính toán tuần tự. Nếu đã từng viết javascript nhiều bạn sẽ thấy việc sử dụng <code class="language-text">callback</code> trong javascript rất nhiều, function A được truyền vào cho function B, sau khi thực hiện các đoạn code trong function B, nó sẽ gọi lại function A và chạy các đoạn code trong function A</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>clicker<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'clicker\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Hoac viet</span>\n\n<span class="token keyword">var</span> <span class="token function-variable function">proveIt</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'clicker\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> proveIt<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Lưu ý là mình pass vào <code class="language-text">proveIt</code> chứ không phải <code class="language-text">proveIt()</code>, mình đang truyền vào proveIt như một <em>object</em> chứ nếu truyền <code class="language-text">proveIt()</code> là mình sẽ truyền vào kết quả xử lý của hàm <em>proveIt</em></p>\n<p>Với cái khả năng đơn giản như đang giỡn là truyền vào một cái inline function như vậy với một function được định danh đâu đó mở ra muôn vàng kiểu viết biến hóa. Chúng ta có thể xây dựng những function rất rất nhỏ để xử dụng ở nhiều nơi, nhiều chổ, nhiều project khác nhau nếu chúng ta áp dụng nguyên tác viết pure function ( nếu cùng một giá trị truyền vào, luôn luôn trả về cùng kết quả).</p>\n<h1 id="function-như-một-giá-trị-trả-về"><a href="#function-nh%C6%B0-m%E1%BB%99t-gi%C3%A1-tr%E1%BB%8B-tr%E1%BA%A3-v%E1%BB%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Function như một giá trị trả về</h1>\n<p>Ví dụ ta có một hàm để thay thể chuỗi "Millennials" thành "Snake People"</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">snakify</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/millenials/ig</span><span class="token punctuation">,</span> <span class="token string">"Snake People"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">snakify</span><span class="token punctuation">(</span><span class="token string">"The Millenials are always up to something."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// The Snake People are always up to something.</span></code></pre>\n      </div>\n<p>Rồi ta lại có thêm một hàm thay thể chuổi "Baby Boomers" thành "Aging Hippies"</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">hippify</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/baby boomers/ig</span><span class="token punctuation">,</span> <span class="token string">"Aging Hippies"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hippify</span><span class="token punctuation">(</span><span class="token string">"The Baby Boomers just look the other way."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// The Aging Hippies just look the other way.</span></code></pre>\n      </div>\n<p>Chúng ta có viết lại 2 hàm này một cách thông minh và phức tạp hơn chút</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">attitude</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">original<span class="token punctuation">,</span> replacement<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> replacement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> snakify <span class="token operator">=</span> <span class="token function">attitude</span><span class="token punctuation">(</span><span class="token regex">/millenials/ig</span><span class="token punctuation">,</span> <span class="token string">"Snake People"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> hippify <span class="token operator">=</span> <span class="token function">attitude</span><span class="token punctuation">(</span><span class="token regex">/baby boomers/ig</span><span class="token punctuation">,</span> <span class="token string">"Aging Hippies"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">snakify</span><span class="token punctuation">(</span><span class="token string">"The Millenials are always up to something."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// The Snake People are always up to something.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hippify</span><span class="token punctuation">(</span><span class="token string">"The Baby Boomers just look the other way."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// The Aging Hippies just look the other way.</span></code></pre>\n      </div>\n<p>Bằng việc khai báo 1 function mới (snakify, hippyfy) reference tới function <code class="language-text">attitude</code> chỉ đưa vào 2 tham số đầu tiên, cho phép function mới này nhận bất kỳ giá trị truyền vào nào trở thành tham số truyền vào thứ 3 của function <code class="language-text">attitude</code>.</p>\n<p>Javascript cho phép truyền vào một function số lượng argument ít hơn số lượng được khai báo, khi đó những argument ko được truyền vào thì xem như undefined. Thứ 2 nữa là function có thể nhận vào thêm argument sau khi nó được gọi bằng cách viết như trên, snakify trỏ đến attitude, khi gọi snakify thì argument truyền vào của snakify trở thành argument còn thiếu trong attitude</p>\n<p>Đọc thêm phần closures ở đây \'<a href="https://luubinhan.github.io/blog/2017-09-25-10-khai-niem-javascript-can-biet">https://luubinhan.github.io/blog/2017-09-25-10-khai-niem-javascript-can-biet</a>\'</p>',timeToRead:3,excerpt:"Callback function Function như một giá trị trả về Callback function Javascript xem một function như một dạng object, function có thể trở…",frontmatter:{title:"Higher-Order function trong javascript",cover:"",date:"2017-11-09",category:"javascript",tags:["javascript"],desc:"Một trong những đặc thù của Javascript khiến nó rất phù hợp với function programming là cho phép viết function higher-order, kiểu function cho phép nhận một function khác như một argument hoặc trả về một function"},fields:{slug:"/2017-11-09-higher-order-function-trong-javascript"}}},pathContext:{slug:"/2017-11-09-higher-order-function-trong-javascript",prev:{frontmatter:{title:"Góc nhìn về Accessible UI",desc:"Thuật ngữ Accessibility đang hot trong thời gian gần đây, đã đến lúc thiết kế với tư duy sản phẩm cho mọi người.",type:"post",category:"ux-ui",tags:["ux-ui"],date:"2017-11-29",cover:""},fields:{slug:"/2017-11-29-goc-nhin-ve-accessible-ui-web"}},next:{frontmatter:{title:"Một vài cải tiến của Google Calendar",desc:"Cách đây hơn một tuần Google Calendar vừa có nâng cấp lên bản mới, cùng nhìn thử giao diện có gì thay đổi",type:"post",category:"ux-ui",tags:["ux-ui"],date:"2017-11-02",cover:""},fields:{slug:"/2017-11-02-mot-vai-cai-tien-google-calendar"}}}}}});
//# sourceMappingURL=path---2017-11-09-higher-order-function-trong-javascript-d8de864975c64816d2a2.js.map