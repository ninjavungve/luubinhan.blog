webpackJsonp([45],{"./node_modules/json-loader/index.js!./.cache/json/2017-12-19-react-context-types.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>Khi build một component chúng ta thường khai báo <code>props</code> và <code>state</code> cho nó, nó trực quan dễ kiểm soát. Trong một số trường hợp đặc biệt, nếu muốn truyền dữ liệu từ trên xuống dưới mà không cần phải đi truyền tuần tự từng component một, có thể sử dụng <code>context</code></p>\n<h2>Tại sao không nên sử dụng <code>context</code></h2>\n<p>Trong tương lai không xa <code>context</code> sẽ được gỡ bỏ khỏi React, trên thực tế cho thấy việc sử dụng <code>context</code> khiến việc maintain ứng dụng rất vất vả vì không biết được giá trị context từ đâu mà có. Khuyến cáo sử dụng Redux hoặc Mobx để quản lý state cho các component</p>\n<h2>Sử dụng sao</h2>\n<p>Ví dụ có 3 component: OngNoi, Cha, Con</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Con</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Cha</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Con</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Con</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">OngNoi</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cha</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Props <em>color</em> được truyền từ OngNoi > Cha > Con, nếu sử dụng context có thể truyền thẳng từ OngNoi > Con</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Con</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nCon<span class="token punctuation">.</span>contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Cha</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Con</span><span class="token punctuation">></span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Con</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">OngNoi</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>color<span class="token punctuation">:</span> <span class="token string">"purple"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cha</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nOngNoi<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Bằng cách thêm kai báo cho component OngNoi <code>childContextTypes</code> và hàm <code>getChildContext</code>, thằng <em>Con</em> sẽ có thể truy cập đến <em>color</em> bằng <code>contextTypes</code></p>\n<h2>Ứng dụng</h2>\n<p>Trong React Router 4, component <em>Router</em> có khai báo context này, nến khi truyền các prop cho component <em>Router</em>, các component Route và Link bên trong có thể truy cập đến prop của Router</p>\n<h2>Lifecycle Methods</h2>\n<p>Khi có xuất hiện khai báo <code>contextTypes</code> trong component, các phương thức sau sẽ tiếp nhận thêm tham số <code>context</code></p>\n<ul>\n<li>constructor(props, context)</li>\n<li>componentWillReceiveProps(nextProps, nextContext)</li>\n<li>shouldComponentUpdate(nextProps, nextState, nextContext)</li>\n<li>componentWillUpdate(nextProps, nextState, nextContext)</li>\n</ul>',frontmatter:{date:"December 19, 2017",path:"/2017-12-19-react-context-types",tags:["react","javascript"],title:"React Context Types",desc:"Khi bắt đầu học React, thường chúng ta chỉ quan tâm tới prop và state, nhưng lại không để ý đến context"}}},pathContext:{prev:{excerpt:"ĐỌC Sách hay nên đọc Eloquent JavaScript JavaScript: The Good Parts JavaScript: The Definitive Guide You Don’t Know JS Secrets of the JavaScript Ninja JavaScript and jQuery Speaking JavaScript JavaScript for Web Designers 2 cuốn JavaScript and jQuery...",html:'<h2>ĐỌC</h2>\n<h3>Sách hay nên đọc</h3>\n<ul>\n<li><a href="https://eloquentjavascript.net/">Eloquent JavaScript</a></li>\n<li><a href="https://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb">JavaScript: The Good Parts</a></li>\n<li><a href="https://www.amazon.com/JavaScript-Definitive-Guide-Activate-Guides/dp/0596805527">JavaScript: The Definitive Guide</a></li>\n<li><a href="https://github.com/getify/You-Dont-Know-JS">You Don’t Know JS</a></li>\n<li><a href="https://www.manning.com/books/secrets-of-the-javascript-ninja">Secrets of the JavaScript Ninja</a></li>\n<li><a href="http://javascriptbook.com/">JavaScript and jQuery</a></li>\n<li><a href="http://speakingjs.com/">Speaking JavaScript</a></li>\n<li><a href="https://abookapart.com/products/javascript-for-web-designers">JavaScript for Web Designers</a></li>\n</ul>\n<p>2 cuốn JavaScript and jQuery, JavaScript for Web Designers căn bản nhất, không đề cập các vấn đề chuyên sâu lắm</p>\n<h3>Blog nên theo dõi</h3>\n<p>Có hàng trăm hàng tá blog luận bàn javascript, nếu các bạn có cái này muốn bổ sung thì cứ tự nhiên, dưới đây là những trang nổi tiếng nhất</p>\n<ul>\n<li><a href="CSS-Tricks">CSS-Tricks</a></li>\n<li><a href="https://medium.freecodecamp.org/tagged/web-development">freeCodeCamp’s dev category</a></li>\n<li><a href="https://dev.to/t/javascript">dev.to’s JavaScript tag</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN’s JavaScript docs</a></li>\n</ul>\n<h3>Newsletter</h3>\n<ul>\n<li><a href="http://javascriptweekly.com/">JavaScript Weekly</a></li>\n<li><a href="https://www.sitepoint.com/versioning/">Versioning</a></li>\n</ul>\n<p>Newsletter không cần subcribe nhiều vì nội dung cũng na ná giống nhau, chỉ cần đăng ký vài trang tiêu biểu nhất là có ngay những thông tin mới được cập nhập hằng ngày qua email</p>\n<h1>Xem</h1>\n<p>Nếu thích học bằng Video, vốn có nhiều ưu điểm hơn việc đọc, dĩ nhiên là bạn phải nghe tốt tiếng anh, chứ video tiếng việt thì chắc không có mấy ai làm tốt. Các video thì có 2 dạng, loại trả phí rồi down về học, hoặc những tuts nhỏ nhỏ miễn phí trên youtube, một vài series có thể tham khảo</p>\n<ul>\n<li><a href="https://es6.io">ES6 for Everyone</a> by Wes Bos</li>\n<li><a href="https://javascript30.com">JavaScript 30</a> by Wes Bos</li>\n<li><a href="https://www.codeschool.com/learn/javascript">Code School’s JavaScript path</a></li>\n<li><a href="https://frontendmasters.com/courses/javascript-basics/">Introduction to JavaScript Programming</a> by Kyle Simpson</li>\n<li><a href="https://frontendmasters.com/courses/good-parts-javascript-web/">The Good Parts of JavaScript and the Web</a> by Douglas Crockford</li>\n<li><a href="https://frontendmasters.com/courses/debugging-javascript/">Debugging and Fixing Common JavaScript Errors</a> by Todd Gardner</li>\n<li><a href="https://frontendmasters.com/courses/data-structures-algorithms/">Data Structures and Algorithms in JavaScript</a> by Bianca Gandolfo </li>\n<li><a href="http://thecodingtrain.com">The Coding Train</a> by Daniel Shiffman</li>\n<li><a href="https://m.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q">Fun Fun Function</a> by Mattias Petter Johansson</li>\n<li><a href="https://m.youtube.com/learncodeacademy/?uid=VTlvUkGslCV_h-nSAId8Sw">LearnCode.academy</a></li>\n<li><a href="https://m.youtube.com/user/jsconfeu">JSConf YouTube Channel</a></li>\n</ul>\n<p>Còn nếu bạn thuộc hàng dữ dội hơn nữa, có thể nghe mấy thánh chém gió đủ kiểu thì các podcasts sau sẽ có ích</p>\n<ul>\n<li><a href="http://shoptalkshow.com">ShopTalk Show</a></li>\n<li><a href="https://syntax.fm">Syntax</a></li>\n<li><a href="https://www.codenewbie.org/podcast">CodeNewbie</a></li>\n<li><a href="http://www.toolsday.io">Toolsday</a></li>\n</ul>',id:"E:/anluu/luckyluu/posts/2018-01-01-mot-so-resource-de-hoc-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2018-01-01T13:35:13.234Z",path:"/2018-01-01-mot-so-resource-de-hoc-javascript",tags:["javascript"],title:"Một số nguồn để luyện công phu"}},next:{excerpt:"Accessibility không chỉ là trách nhiệm của Developer Tình huống như thế này, bạn nhận một website thiết kế one page được approve từ khách hàng, sếp yêu cầu bạn code xong trang này trong 1 tuần, trong đó bao gồm 2 ngày làm việc với bên QA để mọi thứ...",html:'<h2>Accessibility không chỉ là trách nhiệm của Developer</h2>\n<p>Tình huống như thế này, bạn nhận một website thiết kế one page được approve từ khách hàng, sếp yêu cầu bạn code xong trang này trong 1 tuần, trong đó bao gồm 2 ngày làm việc với bên QA để mọi thứ perfect trước khi tới tay khách hàng. Khi nhìn vào thiết kế này, bạn nhìn ra vấn đề là trên các thiết bị nào nhỏ nhỏ xíu, mấy cái chữ nằm đè trên background này có thể gây khó đọc.</p>\n<p>Developer sẽ có một vài lựa chọn sau:</p>\n<ol>\n<li>Im lặng mặc dù nó biết như thế nó sẽ ảnh hưởng đến accessibility</li>\n<li>Kệ, làm luôn mặc dù hơi khác thiết kế chút, cứ làm xong rồi giải thích sau.</li>\n<li>Gởi một bản gợi ý những thay đổi nên làm tới anh designer hoặc khách hàng trước khi làm.</li>\n</ol>\n<p>Cái tình huống này gặp như cơm bữa, every project luôn, bạn có thể quánh giá mình thoải mái, nhưng mình sẽ chọn lựa chọn 1. Im lặng.</p>\n<p>Nếu chọn cách làm thứ 2, vâng bạn sẽ dính phải hàng tá chỉ trích từ khách hàng, từ sếp, sau không làm đúng hợp đồng, đúng yêu cầu ban đầu, và lựa chọn thứ 3 cũng tương tự. Nếu bạn là người làm việc có \'tâm\' và thứ làm cách 3 đi và xem bạn nhận được gì. Khách hàng chưa hẳn đồng ý với điều bạn nói, sếp không hài lòng vì bạn dành thời gian để đưa ra những ý kiến ko đem đến tiền, thử nghĩ nếu bạn làm cách 1, sau đó khách hàng thấy sai, kếu sửa, vậy là sếp lại có cớ đòi thêm tiền.</p>\n<p>Vâng còn một lựa chọn thứ 4 nữa, là lựa chọn mình đang làm, đi phổ cập kiến thức accessibility cho những anh designer.</p>\n<h2>Accessibility cho dân ngoại đạo</h2>\n<p>Bạn đem share kiến thức về accessibility cho bất kể là ai: UI Designer, content provider, project managers, khách hàng,... để mọi người biết và quan tâm đến nó, biết sự tồn tại và cần thiết của nó, để mọi người bỏ ngay cái suy nghĩ "đẹp là được"</p>\n<h3>Đừng quá chú trọng đến Animations</h3>\n<p>Với khả năng của css, js, những thư viện hiện có sẵn đầy rẫy được share miễn phí, trang web bây giờ có thể nhìn như một cái slide powerpoint với những animation chim bay, cò bay, tuyết rơi, đèn pha lấp lánh. Ở gốc độ người sử dụng, lần đầu tiên bạn vào trang web chắc hẳn họ sẽ thốt lên "WOW, cool ghê", nhưng tưởng tượng bạn làm một website với mục tiêu người sử dụng truy cập hàng tuần, hàng ngày thì những animation chỉ có vứt đi.</p>\n<h3>Độ tương phản cần thiết để đọc</h3>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1508961153/low-contrast-text_twvimd.jpg"></p>\n<p>Màu chữ và màu nền không đủ độ tương phản làm rất khó đọc.</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1508961159/low-contrast-text-sunshine_ugzxpt.jpg"></p>\n<p>Tương tự, bạn sẽ lướt qua và không để ý đến sự tồn tại của dòng caption bên dưới "Sunshine sue"</p>\n<p>Giải pháp? Test màu nền và màu chữ bằng công cụ sau <a href="https://webaim.org/resources/contrastchecker/">https://webaim.org/resources/contrastchecker/</a></p>\n<h3>Thận trọng khi đặt chữ đè lên hình</h3>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1511044772/burberry-fix_mqdy7i.jpg"></p>\n<p>Đố đọc được mấy chữ màu trắng</p>\n<h3>Kiểm trả kích thước font chữ, độ đậm của chữ</h3>\n<p>Xu hướng bây giờ mấy bạn thường cứ thích dùng font chữ mỏng lét, font weight 200 thậm chí 100, nếu lướt ngang thì nhìn UI rất là elegant những mà muốn đọc thì phải nhìn thật kỹ</p>\n<p><img src="https://notlaura.com/wp-content/uploads/2017/10/typography-improvements-1200x408.jpg"></p>\n<h3>Link mở trang mới, cảnh báo người dùng</h3>\n<p>Khi gắn link mở ra một tab mới, gắn một icon để thông báo cho người ta biết "Link này mở tab mới đó nha"</p>\n<h3>Phân biệt giữa các icon social media</h3>\n<p>Nếu nhìn thấy một button với icon Facebook trên đó, bạn nghĩ nó là gì? dẫn đến trang profile!. Nếu icon đó là một thao tác như share thì cần phân định rõ với lại một icon dẫn đến profile</p>\n<h3>Đừng tin tưởng tuyệt đối vào icon và màu sắc để truyền tải nội dung</h3>\n<p>Đại đa số người sử dụng web nhiều đều biết icon hamburger để mở ra menu chính của trang, nhưng đừng gom đũa cả nắm như thế mà bỏ hết chữ nghĩa, dồn hết vào menu hamburgerd - cho gọn.</p>\n<p>Các bạn trên vnexpress nghĩ sẽ rất là cool nếu trên menu mỗi chuyên mục sẽ có màu sắc khác nhau, nhưng thực tế phủ phàng rằng, sự phân định màu sắc theo quan điểm cá nhân này của bạn thiết kế không đem đến lợi ích vì cho người đọc, ai nói mục màu xanh dương thì đại diện cho các bài viết thuộc chuyên mục gia đình, xanh lá là cho thể thao.</p>\n<h3>Sẽ ra sau nếu không có tương tác</h3>\n<p>Lỗi dể thấy trên các trang bán hàng nếu đặt giá hoặc nút mua sản phẩm ẩn đi, chỉ xuất hiện khi có chuột hover lên, và nếu không có hover lên thì sao? người dùng chẳng thấy gì cả, trên điện thoại người ta cũng không rảnh đâu mà đưa tay lên để xem giá từng sản phẩm.</p>\n<p>Còn nhiều nào rãnh viết tiếp</p>',id:"E:/anluu/luckyluu/posts/2017-11-29-goc-nhin-ve-accessible-ui-web/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-11-29T13:35:13.234Z",path:"/2017-11-29-goc-nhin-ve-accessible-ui-web",tags:["ux-ui"],title:"Góc nhìn về Accessible UI"}}}}}});
//# sourceMappingURL=path---2017-12-19-react-context-types-96649004a3a1f031f1dc.js.map