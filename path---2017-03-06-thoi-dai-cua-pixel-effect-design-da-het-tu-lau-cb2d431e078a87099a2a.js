webpackJsonp([26],{"./node_modules/json-loader/index.js!./.cache/json/2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau.json":function(n,t){n.exports={data:{markdownRemark:{html:'<p>Làm front end được kha khá năm, đứng trung gian giữa anh developer và anh designer, được tiếp xúc với rất nhiều designer từ cao cấp tới mới ra trường, mình có thể khẳng định là những ảnh designer dù là tự học hay được đào tạo bài bảng qua trường lớp, mỗi anh điều có một kiểu làm việc rất riêng, trong giới designer, đặc biệt là web design, sẽ chẳng anh nào đi theo một cái guide chung nào cả, khác hẳng với developer, nơi mà mọi thứ luôn được chuẩn hóa từng ngày, một anh developer mới vào công ty được thẩy vô trong một cái dự án bự tổ chảng, sau vài ngày training những "luật lệ" được đề ra từ lớp người đi trước là ảnh có thể follow theo và bắt đầu làm việc với một cách mượt mà. Ở góc độ của một người đứng giữa, mình luôn cho rằng anh developer luôn luôn là người nên đặt ra các luật lệ mà anh designer phải tuân theo, chứ không phải ngược lại.</p>',frontmatter:{date:"March 06, 2017",path:"/2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau",tags:["css","ux-ui"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu",desc:"Làm front end được kha khá năm, đứng trung gian giữa anh developer và anh designer, được tiếp xúc với rất nhiều designer từ cao cấp tới mới ra trường, mình có thể khẳng định là những ảnh designer dù là tự học hay được đào tạo bài bảng qua trường lớp"}}},pathContext:{prev:{excerpt:"Grid Responsive design Đừng sáng tạo ra cái có sẵn Hiệu ứng Grid Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như  Bootstrap Grid . Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm...",html:'<!-- MarkdownTOC -->\n<ul>\n<li>Grid</li>\n<li>Responsive design</li>\n<li>Đừng sáng tạo ra cái có sẵn</li>\n<li>Hiệu ứng</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1>Grid</h1>\n<p>Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như <a href="http://getbootstrap.com/css/#grid" target="_blank">Bootstrap Grid</a>. Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm trọng, nó giải quyết phần lớn các yêu cầu cơ bản về layout, thống nhất sử dụng ngay từ đầu sẽ giúp ít rất nhiều cho mấy anh developer. Quan trọng nhất nên lưu ý là hệ thống grid ngày nay sử dụng độ rộng tương đối (theo giá trị phần trăm của container) và khoảng cách padding cố định. Bạn có thể đọc <a href="https://medium.com/sketch-app-sources/fluid-grid-systems-in-sketch-3-9-2579133c6d08" target="_blank">bài viết sau</a> để hiểu cách xây dựng hệ thống grid trên Sketch</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*WLHweZ4cQQSK8hWOY96cbQ@2x.png"></p>\n<p>Khi sử dụng hệ thống grid như bootstrap bạn sẽ không bao giờ cần phải nói cho anh developer kích thước của từng cột là mấy, vì thực sự lúc này kích thước nó chỉ là một giá trị tương đối</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Q_qCy_5PPuR5bPciB5Vbeg@2x.png"></p>\n<h1>Responsive design</h1>\n<p>Bạn designer chỉ cần chỉ cho anh developer từng element nó sẽ như thế nào trên các kích thước màn hình khác nhau, luôn luôn nghĩ các element có một kích thước tương đối chứ không phải một giá trị cố định nào đó như 320 - 1024 -1920, vì giao diện responsive phải có khả năng thích nghi với nhiều dạng kích thước màn hình khác nhau nữa.</p>\n<p>Không chỉ vậy, một số hình có kích thước phụ thuộc vào container của nó, ví dụ trên desktop bạn cho một cái hình kích thước 200x200, nhưng trên điện thoại kích thước của màn hình sẽ là 375x667 đi, thì các hình này chắc chắn bể liền, thường thấy trên mấy cái thumbnail bài viết.</p>\n<p>Một lỗi thường thấy khác là quên rằng độ cao của một số element sẽ thay đổi theo <code>container</code></p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*0odC4Yn4aHanIatRPU7P5w.gif"></p>\n<p>Sử dụng những <code>breakpoint</code> căn bản: 320-375-768-1024-1280-1366-1920. Và tất nhiên tất cả các anh designer đều quên là giao diện đôi khi được xem trên màn hình lật ngang ra.</p>\n<p>Ví dụ bên dưới 2 cột hiển thị rất đẹp trên desktop nhưng do sự thay đổi độ cao trên mobile mà nó sẽ trở nên xấu xí</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*BWi61OpjqFEgHliraTHuLw@2x.png"></p>\n<h1>Đừng sáng tạo ra cái có sẵn</h1>\n<p>Nếu không có thời gian, hoặc không chắc có thể customize những component nhỏ xíu như cái dropdown theo kiểu "thích vẽ sau vẻ", hỏi anh developer xem anh có suggest cái thư viện nào có sẵn, thay vì làm lại cái người ta đã làm tốt lắm rồi. Một ví dụ kinh điển là cái datepicker. Rát nhiều designer nghĩ chỉ cần vẽ cái lịch với con số trên đó, mà quên rằng</p>\n<ul>\n<li>Hover effect trên từng ngày</li>\n<li>Trạng thái ngày hiện tại</li>\n<li>Làm sau đánh dấu ngày được chọn</li>\n<li>Làm sau thay đổi tháng, năm</li>\n<li>Ngày trước và sau của tháng hiện tại</li>\n</ul>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Cgndb4fH9aXPnrLIuyuE4Q@2x.png"></p>\n<p>Chúng ta đang sống trong cái thời đại mà mọi người đều cố xây dựng mọi thứ của riêng mình (style nhật bổn). Đôi khi, có một sản phẩm chạy dược cho khách hàng thì tốt hơn là lãng phí thời gian và tiền bạc cho một anh designer ngồi đó sáng tạo ra những thứ người ta đã có sẵn. Designer phải biết rằng anh có thể sử dụng những thư viện và component có sẵn  để hoàn tất project. Nó sẽ giảm đi effect không chỉ của designer mà còn cả developer ngồi đó tìm ra những giải pháp không thực sự cần thiết</p>\n<h1>Hiệu ứng</h1>\n<p>Thay vì ngồi viết note giải thích các trang flow đi như thế nào, viết docs như vậy thực sự méo cần thiết. Designer chỉ cần sử dụng những trang như InVision hay Axure để biểu diễn cái flow,  dụng Principle, Framer, Adobe After Effect để mô tả mấy hiệu chạy thế nào. Nó sẽ giảm đi những hiểu nhầm giữa designer và developer, khách hàng</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*yEMXAwVff__nrM_OCwLknw.gif"></p>\n<p>Phần 3 - UI kits, Export, Element State, Line-height, Fonts</p>',id:"C:/anluu/luckyluu/posts/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-03-07T13:35:13.234Z",path:"/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2",tags:["css","ux-ui"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu - Phần 2"}},next:{excerpt:"Sạo vậy thôi chứ làm gì mà trở thành master ngay lập tức được, lý lẽ bình thường muốn master bất cứ thứ gì cũng cần mồ hôi và nước mắt. Hiểu được 5 khái niệm được cho là căn cơ nhất này sẽ giúp bạn dễ xa lầy hơn. Component JSX Props & State Component...",html:'<p>Sạo vậy thôi chứ làm gì mà trở thành master ngay lập tức được, lý lẽ bình thường muốn master bất cứ thứ gì cũng cần mồ hôi và nước mắt. Hiểu được 5 khái niệm được cho là căn cơ nhất này sẽ giúp bạn dễ xa lầy hơn.</p>\n<ol>\n<li>Component</li>\n<li>JSX</li>\n<li>Props &#x26; State</li>\n<li>Component API</li>\n<li>Component Type</li>\n</ol>\n<h1>Khái niệm #1: React component hoạt động ra sau</h1>\n<p>Điều đầu tiên cần nằm lòng là tất cả những gì React xây dựng điều xoay quanh component. Thế thì component là gì. Ví dụ tuyệt vời nhất là select HTML element, select có thể xem như một component được định nghĩa sẵn với kiểu hiện thị riêng của nó (màu xám, có label, nút tam giác nằm ở góc phải) và tự nó xử lý tác vụ đóng mở mấy cái option</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/800/1*dPxDcCmCItzEyQuPpHOS3Q/RS/w704.gif"></p>\n<p>Giờ tưởng tượng là chúng ta sẽ tự build ra một cái component tương tự như select với giao diện và event chúng ta tự kiểm soát</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/800/1*AZ2IbiM4WskvgvIyhq6qPA/RS/w704.gif"></p>\n<p>Đó là những gì React giúp chúng ta làm, xây dựng một đối tượng không chỉ output ra một HTML templete thông thường,  chúng ta sẽ viết ra những function để control những event trên cái template đó</p>\n<p>Để tạo ra một React component căn bản nhất</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>component</span> <span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Hello World<span class="token operator">!</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Khái niệm #2: JSX chạy thế nào</h1>\n<p>Có thể thấy là với cách tạo ra một component như React thì javascript và HTML sống chung một nhà. Vũ khí bí mật của React để làm được chuyện "what-the-heck" đó là JSX language.</p>\n<p>Ngày xưa, đi học được dạy phải tách biệt HTML ra một file và JS ra một file, thời gian sau này anh em làm frontend thấy làm gom như vậy làm thấy nhanh hơn, mà cũng không quá evil như mấy ông thầy dạy</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>component</span> <span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\nreturnToday is<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Để ý cái cách ta chèn code javascript ở trong HTML bằng cách đưa nào vào bên trong dấu {}, đó là cách viết JSX</p>\n<h1>Khái niệm 3: Props và State</h1>\n<p>Bạn chắc chắn biết đến attribute href cho thẻ a , chưa biết? về lại w3com học nhé. Với một component của React những attribute như vậy được gọi là props . Props là cách mà các component tương tác lẫn nhau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">ParentComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChildComponent message<span class="token operator">=</span><span class="token string">"Hello World"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">ChildComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> And then I said<span class="token punctuation">,</span> <span class="token string">"{this.props.message}"</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Dữ liệu trong component có thể truyền từ cha xuống con và không có ngược lại</p>\n<p>Đôi khi dữ liệu sẽ không phải được truyền từ cha xuống con, mà nó chỉ là một dữ liệu tạm thời nào đó, ví dụ như giá trị input của user chẳng hạn, lúc đó nó được gọi là state</p>\n<p>Cho dễ hình dung, nếu xem cái bảng nam châm là một component thì props là nút gạt xóa, state là những gì viết trên bảng</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/1000/1*aYxNrkwkAPwIoGc0-3k_Ug/RS/w704.jpeg"></p>\n<p>Bên trong một component, state được quản lý bằng hàm setState thường được viết lòng trong một hàm xử lý sự kiện</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n handleClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>setState <span class="token punctuation">(</span><span class="token punctuation">{</span>clicked<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span> Click Me<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Khái niệm #4: Component API</h1>\n<p>Những hàm như render và setState là một phần của component API, ngoài ra nó còn một số hàm hữu ích khác nữa như constructor để khởi tạo state và kích hoạt các phương thức, một số hàm trigger trước khi component được load, sau khi load, sau khi unmounting. vâng vâng.</p>\n<p>Thật ra việc master được React phần nhiều là master được việc lập trình và khái niệm để kiến trúc ra một component hơn là một loạt các API được hỗ trợ sẵn, vậy nên phần này kết thúc ở đây.</p>\n<h1>Khái niệm 5: Component Type</h1>\n<p>Mấy ví dụ trên, định nghĩa một component được khai báo dạng class</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Giờ thì hãy quên cách viết này đi! Bây giờ ai cũng viết một component ở dạng function component</p>\n<p>Một functional component là một function nhận một props object như tham số truyền vào và trả về một đống HTML lằn xà ngoằn. Y hệt như cách viết template kinh điển, khác biệt cơ bản là ở chổ mình có thể xài JavaScript bất cứ chổ nào khi cần</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> myComponent <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Hello <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span> Today is <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Viết cách này có một hậu quả là mình không thể access được phương thức của component, trên thực tế việc này không ảnh hưởng gì làm vì phần lớn trường hợp ta không dùng tới.</p>\n<p>Và như vậy component này sẽ không có phương thức setState , không có state luôn, người ta còn gọi là stateless functional component.</p>\n<p>Cách viết này rất là gọn gàng, phù hợp cho những trường component đơn giản, nên áp dụng khi có thể.</p>\n<p>Nguồn</p>\n<blockquote>\n<blockquote>\n<p><a href="https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3">https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3</a></p>\n</blockquote>\n</blockquote>',id:"C:/anluu/luckyluu/posts/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-01-10T13:35:13.234Z",path:"/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react",tags:["javascript","react"],title:"Nắm vững 5 khái niệm sau, xem như master React"}}}}}});
//# sourceMappingURL=path---2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau-cb2d431e078a87099a2a.js.map