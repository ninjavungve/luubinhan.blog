webpackJsonp([48],{"./node_modules/json-loader/index.js!./.cache/json/2017-11-02-mot-vai-cai-tien-google-calendar.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>Cùng nhìn thử cách Google làm với:</p>\n<ol>\n<li>Giới thiệu một tính năng mới của sản phẩm</li>\n<li>Quyết định tách 2 tác vụ là <strong>xem</strong> và <strong>edit</strong> ra 2 màn hình khác nhau</li>\n<li>Áp dụng Google Material Design Pattern</li>\n</ol>\n<h2>Giới thiệu tính năng mới</h2>\n<p>Khi có một thay đổi về giao diện, hoặc tính năng sản phẩm sẽ có 2 mặt: người sử dụng sẽ cảm thấy rất hứng thú và một vài người thì rất sợ những thay đổi này, vì vốn đã quá quen với cách làm việc của hệ thống cũ. Giới thiệu và guide người sử dụng những thay đổi này để họ biết và chấp nhận nó là cần thiết.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*jedZ6ACXCLZTIXlA2SAw3w.png"></p>\n<p>Không ép buộc người sử dụng cập nhập tính năng mới ngay lập tức, Google hiển thị một thông báo nhỏ ở trên cùng để user biết có tính năng mới được cập nhập cho cái công cụ người dùng đã quá quen thuộc và sử dụng hàng ngày, kiểu như</p>\n<blockquote>\n<p>Cứ sử dụng Calendar như bình thường nhé, khi nào sẵn sàng thì cập nhập tính năng mới nè, vui lắm.</p>\n</blockquote>\n<p><a href="https://cdn-images-1.medium.com/max/2000/1*rxdA2Wzp4SmS6MleIHe7yw.png"></a></p>\n<p><a href="https://cdn-images-1.medium.com/max/2000/1*6aRa42RkpvmrokqUCXW9JQ.png"></a></p>\n<p>Như vậy với 3 cú click chuột cùng một vài câu thông báo ngắn gọn, user có thể cập nhập Calendar lên phiên bản mới, không những thế Google còn cho phép user quay lại phiên bạn cũ nếu thấy phiên bản mới khó sử dụng, khi đó một lời mời gởi feedback sẽ được gởi cho user trả lời cầu hỏi: Điều chi đã khiến em không thích phiên bản mới của anh. </p>\n<p>Việc phải duy trì 2 phiên bản đồng thời như vậy chứng tỏ Google rất giàu! Một chút chi phí đó để xây dựng lòng tin vào người sử dụng, người sử dụng bị cấy trong đầu ý nghĩ "Sản phẩm của Google thì nào cũng hướng tới tốt nhất cho người sử dụng"</p>\n<h2>Tách 2 màn hình xem và edit</h2>\n<p>Trước đây để xem những thông tin như địa điểm, mô tả, link phải chuyển tới một trang mới, bây giờ xem được trực tiếp trên một cửa sổ popup nhỏ ở ngay màn hình chính.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*VPdG6U1MRMrA0_vjMd0tyQ.png"></p>\n<p>Một ví dụ điển hình cho quyết định có nên tách trang để xem thông tin chi tiết và trang chỉnh sửa thông tin chi tiết, thường chúng ta xe gộp nó lại thành một. </p>\n<p>Nghe thì có vẻ là chuyện rất hiển nhiên thôi, nhưng các bạn sẽ nghe rất nhiều luồn ý kiến khác nhau từ những người làm trong team như "Tại sao không cho 2 trang thành 1 thôi, nơi user có thể có thể làm được mọi thứ, one stop solution". Nghe thì cũng rất hợp lý, nhưng khi thực hiện bạn sẽ bị một chuyện là quá nhiều control trên màn hình edit, trang nhìn sẽ vô cùng rối vì quá nhiều tính năng cần được show ra trên màn hình này, và khi có quá nhiều control trên một màn hình thì user chắc chắn bị rối. Đây là dựa trên lý thuyết JTBD - Job to be done, <a href="https://hbr.org/2016/09/know-your-customers-jobs-to-be-done">Xem thêm về JTBD</a></p>\n<p>Thử tưởng tượng, bạn ngồi xuống sắp xếp lịch công việc trong tháng tới, tuần tới, ngày tới, có phải bạn sẽ cần lướt qua những công việc được sắp xếp trước và sau để phân bố thời gian cho hợp lý.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*fW40s0zTUC1HtTK1O6SGbg.png"></p>\n<p>Với dạng tác vụ kiểu reminder hay event, user cần set thông tin giờ và địa điểm, một popup khác với chỉ 2 field quan trọng nhất này để user có thể chỉnh sửa ngay trên màn hình chính, nếu user muốn có nhiều thay đổi hơn nữa, có thể quyết định click "More option" để tới màn hình edit</p>\n<h2>Design Pattern</h2>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*s0wREfdCJb42NqMQlj6NTw.png" alt="Trang Settings cũ và mới"></p>\n<p>Trang Settings của Calendar giờ cũng được \'nâng cấp\' theo chuẩn Google\'s Material Design</p>\n<p>Nhìn vô là thấy liền Material Design giúp cho việc chuẩn hóa các sản phẩm của Google theo UX nhanh và hiệu quả như thế nào</p>\n<ul>\n<li>Những thông tin liên quan được group vào trong Card giúp dễ scan nội dung bên trong hơn</li>\n<li>Bên trong Card, các cụm control như Dropdown, Checkbox, Radio được gắn liền kề với phần mô tả, thay vì trước đây user phải hướng mắt theo đường zizag trái phải, trái phải, giờ nhìn từ trên xuống là thấy liền</li>\n<li>Nút Back nằm trên cùng giúp Web App và Mobile App gần như giống nhau về trải nghiệm</li>\n<li>Chữ nghĩa cũng được sắp xếp lại theo hướng kế thừa từ to tới nhỏ, tăng độ tương phản chứ không còn mờ mờ như hồi xưa.</li>\n</ul>',frontmatter:{date:"November 02, 2017",path:"/2017-11-02-mot-vai-cai-tien-google-calendar",tags:["ux-ui"],title:"Một vài cải tiến của Google Calendar",desc:"Cách đây hơn một tuần Google Calendar vừa có nâng cấp lên bản mới, cùng nhìn thử giao diện có gì thay đổi"}}},pathContext:{prev:{excerpt:"Callback function Javascript xem một function như một dạng object, function có thể trở thành giá trị của một biến, có thể dùng như một đối số hoặc giá trị return như một object. Javscript là ngôn ngữ single-threaded, nghĩa là một lần nó chỉ chạy một...",html:'<h2>Callback function</h2>\n<p>Javascript xem một function như một dạng object, function có thể trở thành giá trị của một biến, có thể dùng như một đối số hoặc giá trị return như một object.</p>\n<p>Javscript là ngôn ngữ single-threaded, nghĩa là một lần nó chỉ chạy một tính toán tuần tự. Nếu đã từng viết javascript nhiều bạn sẽ thấy việc sử dụng <code>callback</code> trong javascript rất nhiều, function A được truyền vào cho function B, sau khi thực hiện các đoạn code trong function B, nó sẽ gọi lại function A và chạy các đoạn code trong function A</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"clicker"</span><span class="token operator">></span>Click Here<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'clicker\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Hoac viet</span>\n\n<span class="token keyword">var</span> proveIt <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'clicker\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> proveIt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Lưu ý là mình pass vào <code>proveIt</code> chứ không phải <code>proveIt()</code>, mình đang truyền vào proveIt như một <em>object</em> chứ nếu truyền <code>proveIt()</code> là mình sẽ truyền vào kết quả xử lý của hàm <em>proveIt</em></p>\n<p>Với cái khả năng đơn giản như đang giỡn là truyền vào một cái inline function như vậy với một function được định danh đâu đó mở ra muôn vàng kiểu viết biến hóa. Chúng ta có thể xây dựng những function rất rất nhỏ để xử dụng ở nhiều nơi, nhiều chổ, nhiều project khác nhau nếu chúng ta áp dụng nguyên tác viết pure function ( nếu cùng một giá trị truyền vào, luôn luôn trả về cùng kết quả).</p>\n<h1>Function như một giá trị trả về</h1>\n<p>Ví dụ ta có một hàm để thay thể chuỗi "Millennials" thành "Snake People"</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> snakify <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/millenials/ig</span><span class="token punctuation">,</span> <span class="token string">"Snake People"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">snakify</span><span class="token punctuation">(</span><span class="token string">"The Millenials are always up to something."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Snake People are always up to something.</span>\n</code></pre>\n      </div>\n<p>Rồi ta lại có thêm một hàm thay thể chuổi "Baby Boomers" thành "Aging Hippies"</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> hippify <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/baby boomers/ig</span><span class="token punctuation">,</span> <span class="token string">"Aging Hippies"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hippify</span><span class="token punctuation">(</span><span class="token string">"The Baby Boomers just look the other way."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Aging Hippies just look the other way.</span>\n</code></pre>\n      </div>\n<p>Chúng ta có viết lại 2 hàm này một cách thông minh và phức tạp hơn chút</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> attitude <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> replacement<span class="token punctuation">,</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> replacement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> snakify <span class="token operator">=</span> <span class="token function">attitude</span><span class="token punctuation">(</span><span class="token regex">/millenials/ig</span><span class="token punctuation">,</span> <span class="token string">"Snake People"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> hippify <span class="token operator">=</span> <span class="token function">attitude</span><span class="token punctuation">(</span><span class="token regex">/baby boomers/ig</span><span class="token punctuation">,</span> <span class="token string">"Aging Hippies"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">snakify</span><span class="token punctuation">(</span><span class="token string">"The Millenials are always up to something."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Snake People are always up to something.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hippify</span><span class="token punctuation">(</span><span class="token string">"The Baby Boomers just look the other way."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Aging Hippies just look the other way.</span>\n</code></pre>\n      </div>\n<p>Bằng việc khai báo 1 function mới (snakify, hippyfy) reference tới function <code>attitude</code> chỉ đưa vào 2 tham số đầu tiên, cho phép function mới này nhận bất kỳ giá trị truyền vào nào trở thành tham số truyền vào thứ 3 của function <code>attitude</code>.</p>\n<p>Javascript cho phép truyền vào một function số lượng argument ít hơn số lượng được khai báo, khi đó những argument ko được truyền vào thì xem như undefined. Thứ 2 nữa là function có thể nhận vào thêm argument sau khi nó được gọi bằng cách viết như trên, snakify trỏ đến attitude, khi gọi snakify thì argument truyền vào của snakify trở thành argument còn thiếu trong attitude</p>\n<p>Đọc thêm phần closures ở đây \'<a href="https://luubinhan.github.io/blog/2017-09-25-10-khai-niem-javascript-can-biet">https://luubinhan.github.io/blog/2017-09-25-10-khai-niem-javascript-can-biet</a>\'</p>',id:"E:/anluu/luckyluu/posts/2017-11-09-higher-order-function-trong-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-11-09T13:35:13.234Z",path:"/2017-11-09-higher-order-function-trong-javascript",tags:["javascript"],title:"Higher-Order function trong javascript"}},next:{excerpt:"Hãy nghĩ ngay tới cặp đôi   và   khi cần truyền   từ component cha xuống các component con mà  KHÔNG cần gọi render component bên trong component cha Hơi mâu thuẫn vì không   component con vậy sao nó hiển thị, ví dụ đi 2 component con ở đây là   và...",html:'<p>Hãy nghĩ ngay tới cặp đôi <code>React.Children.map</code> và <code>React.cloneElement</code> khi cần truyền <code>props</code> từ component cha xuống các component con mà <strong>KHÔNG cần gọi render component bên trong component cha</strong></p>\n<p>Hơi mâu thuẫn vì không <code>render</code> component con vậy sao nó hiển thị, ví dụ đi</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> ComponentChaChu <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n     <span class="token punctuation">{</span>\n        React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> child <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                style<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    backgroundColor<span class="token punctuation">:</span> <span class="token string">\'green\'</span><span class="token punctuation">,</span>\n                    color<span class="token punctuation">:</span> <span class="token string">\'white\'</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span>\n     <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n<span class="token keyword">const</span> Luckyluu <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>title<span class="token punctuation">,</span> posts<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentChaChu</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComponentChaChu</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n            posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>post <span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Post</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentChaChu</span><span class="token punctuation">></span></span>\n                        <span class="token operator">&lt;</span>PostHeader <span class="token punctuation">{</span><span class="token operator">...</span>post<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> \n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComponentChaChu</span><span class="token punctuation">></span></span>\n                    <span class="token operator">&lt;</span>PostBody <span class="token punctuation">{</span><span class="token operator">...</span>post<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Post</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>2 component con ở đây là <code>PostHeader</code> và <code>NavBar</code> có thể sử dụng ở bất kỳ đâu, còn <code>ComponentChaChu</code> có thể có bất kỳ đứa con nào, không cần biết sau này con nó là ai thì nó sẽ truyền hết tài sản là <code>backgroundColor</code> và <code>color</code> cho đứa con yêu dấu đó</p>\n<p>Sẵn tiện thì nói luôn một số <em>function</em> khác của <code>React.Children</code> luôn</p>\n<h2><code>React.Children.forEach</code></h2>\n<p>Giống như <code>React.Children.map</code> nhưng không trả về gì hết</p>\n<h2><code>React.Children.count</code></h2>\n<p>Nhà có nhiêu đứa con ?</p>\n<h2><code>React.Children.toArray(children)</code></h2>\n<p>Convert component con về <code>array</code></p>\n<h2><code>React.Children.only</code></h2>\n<p>Để áp dụng chương trình kế hoạch hóa gia đình, mỗi component cha chỉ có <strong>1</strong> và phải có 1 con duy nhất, quăng cái thông báo nếu không đáp ứng yêu cầu này.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">BaBa</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Nếu bắt buộc con thằng <code>BaBa</code> phải là <code>function</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>BaBa<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    children<span class="token punctuation">:</span> React<span class="token punctuation">.</span>propTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Nó log ra thông báo lỗi khi truyền vào con không phải là <code>function</code>, dev lười biến có thể \'cho qua\' thông báo này. Nhưng khi mình bắt buộc kiểu này</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">BaBa</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Nếu không có con là app chết luôn, cho các anh dev không còn lười biếng, giống kiểu mấy người xưa ko có con là không có được vây. ;)</p>',id:"E:/anluu/luckyluu/posts/2017-10-27-react-children-react-clone-element/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2017-10-27T13:35:13.234Z",path:"/2017-10-27-react-children-react-clone-element",tags:["javascript","react"],title:"React Children và React cloneElement"}}}}}});
//# sourceMappingURL=path---2017-11-02-mot-vai-cai-tien-google-calendar-760f2a0794a6048c6da8.js.map