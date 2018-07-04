webpackJsonp([22],{"./node_modules/json-loader/index.js!./.cache/json/2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>Làm front end được kha khá năm, đứng trung gian giữa anh developer và anh designer, được tiếp xúc với rất nhiều designer từ cao cấp tới mới ra trường, mình có thể khẳng định là những ảnh designer dù là tự học hay được đào tạo bài bảng qua trường lớp, mỗi anh điều có một kiểu làm việc rất riêng, trong giới designer, đặc biệt là web design, sẽ chẳng anh nào đi theo một cái guide chung nào cả, khác hẳng với developer, nơi mà mọi thứ luôn được chuẩn hóa từng ngày, một anh developer mới vào công ty được thẩy vô trong một cái dự án bự tổ chảng, sau vài ngày training những "luật lệ" được đề ra từ lớp người đi trước là ảnh có thể follow theo và bắt đầu làm việc với một cách mượt mà. Ở góc độ của một người đứng giữa, mình luôn cho rằng anh developer luôn luôn là người nên đặt ra các luật lệ mà anh designer phải tuân theo, chứ không phải ngược lại.</p>',frontmatter:{date:"March 06, 2017",path:"/2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau",tags:["javascript"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu",desc:"Làm front end được kha khá năm, đứng trung gian giữa anh developer và anh designer, được tiếp xúc với rất nhiều designer từ cao cấp tới mới ra trường, mình có thể khẳng định là những ảnh designer dù là tự học hay được đào tạo bài bảng qua trường lớp"}}},pathContext:{prev:{excerpt:"Chuyện gì xảy ra khi gọi setSate? Đầu tiên, object được truyền trong  setState  sẽ được merge với state hiện tại của component, dựa trên sự thay đổi của object này, UI được update với state mới. Để làm được chuyện này, React sẽ dựng một cây React...",html:'<h2>Chuyện gì xảy ra khi gọi setSate?</h2>\n<p>Đầu tiên, object được truyền trong <code>setState</code> sẽ được merge với state hiện tại của component, dựa trên sự thay đổi của object này, UI được update với state mới. Để làm được chuyện này, React sẽ dựng một cây React Element mới, so sánh sự khác nhau của cây element mới và cây element trước đó, React biết được chính xác chỉ cần update phần UI nào đã bị thay đổi.</p>\n<h2>Sự khác nhau giữa Element và Component trong React?</h2>\n<p>React Element ám chỉ những gì thấy trên màn hình.</p>\n<p>React component là một function hoặc class có hoặc không có input và sẽ trả về một React element.</p>\n<h2>Khi nào thì sử dụng Class Component và Functional Component</h2>\n<p>Nếu component có state và các phương thức của lifecycle, sử dụng <strong>Class Component</strong>, ngược lại dùng <strong>functional component</strong></p>\n<h2>Refs trong React dùng để làm gì</h2>\n<p>Refs cho phép access trực tiếp đến DOM element hoặc một instance của component</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> this.input = input} />\n</code></pre>\n      </div>\n<h2>Keys trong React là gì</h2>\n<p>Keys giúp React theo dõi sự thay đổi của một item trong list</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>todoItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>task<span class="token punctuation">,</span> uid<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span>\n    <span class="token operator">&lt;</span>ul<span class="token operator">></span>\n      <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token punctuation">{</span>task<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Sự khác nhau giữa controlled component và uncontrolled component</h2>\n<p>Controlled component là component React control dữ liệu dựa trên state và props, uncontrolled component là component mà dữ liệu được handle bởi DOM</p>\n<h4>Controlled Component</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>{this.state.username}</span> <span class="token attr-name">onChange</span><span class="token attr-value"><span class="token punctuation">=</span>{this.updateUsername}</span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h4>Uncontrolled Component</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code>&lt;input type=\'text\' ref={(input) => this.input = input} />\n</code></pre>\n      </div>\n<h2>Để gọi AJAX, sự dụng sự kiện nào của lifecycle?</h2>\n<p><code>componentDidMount</code> , lý do ko sử dụng <code>componentWillMount</code> vì React  có thể gọi componentWillMount nhiều lần nếu cần thiết, thứ 2 không thể chắc chắn AJAX luôn gọi thành công, nếu gơi vào trường hợp đó câu lệnh <code>setState</code> sẽ chạy trên unmounted component.</p>\n<h2>shouldComponentUpdate dùng để làm gì</h2>\n<p><code>shouldComponentUpdate</code> cho phép can thiệp quá trình update UI của component và các component con của nó.</p>\n<h2>Build Product bằng cách nào?</h2>\n<p>Sử dụng phương thức DefinePlugin của Webpack để set <code>NODE_ENV = production</code>. Quá trình build production sẽ bỏ hết những đoạn như validate propType, cảnh báo này nọ, minify code, remove comments.</p>\n<h2>Tại sao nên sử dụng React.Children.map() thay vì props.children.map()</h2>\n<p>props.children chưa chắc lúc nào cũng là array. Ví dụ</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Parent</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Nếu sử dụng props.children.map trong Parent sẽ bị lỗi vì props.children là một object không phải array.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>props.children will now be an array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Parent</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>React.Children.map cho phép props.children là array hoặc object đều được.</p>\n<h2>Events được xử lý trong React như thế nào?</h2>\n<p>Các hàm xử lý event trong React sẽ được truyền vào một instance của SyntheticEvent, SyntheticEvent cũng giống như những native event bình thường của Browser trừ việc nó có thể làm việc trên tất cả các trình duyệt.</p>\n<p>React không attach event vô các child node, mà sẽ lắng nghe tất cả các event sử dụng 1 event listener duy nhất, Với mục đích là để tăng performance và React không cần phải update lại event listener khi update DOM.</p>\n<h2>Sự khác nhau giữa createElement và cloneElement</h2>\n<p><code>createElement</code> là để tạo element, <code>cloneElement</code> copy element và đưa vào các props mới.</p>\n<h2>Argument thứ 2 của setState dùng để làm gì</h2>\n<p>callback function, function sẽ chạy sau khi <code>component</code> được <code>render</code> lại với state mới.</p>\n<p>setState là một phương thức bất đồng bộ (asynchronous)</p>\n<h2>Đoạn code sau sai ở chổ nào</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prevState<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\n <span class="token keyword">return</span> <span class="token punctuation">{</span> streak<span class="token punctuation">:</span> prevState<span class="token punctuation">.</span>streak <span class="token operator">+</span> props<span class="token punctuation">.</span>count <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Không sai gì cả, ít người biết rằng khi setState có thể truyền vào previous state.</p>\n<p>Nguồn</p>\n<blockquote>\n<blockquote>\n<p><a href="https://tylermcginnis.com/react-interview-questions/">https://tylermcginnis.com/react-interview-questions/</a></p>\n</blockquote>\n</blockquote>',id:"C:/xampp/htdocs/luckyluu/posts/2017-07-17-interview-react-developer-thi-hoi-gi/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-07-17T13:35:13.234Z",path:"/2017-07-17-interview-react-developer-thi-hoi-gi",tags:["javascript","react"],title:"Interview React Developer thì hỏi gì?"}},next:{excerpt:"Sạo vậy thôi chứ làm gì mà trở thành master ngay lập tức được, lý lẽ bình thường muốn master bất cứ thứ gì cũng cần mồ hôi và nước mắt. Hiểu được 5 khái niệm được cho là căn cơ nhất này sẽ giúp bạn dễ xa lầy hơn. Component JSX Props & State Component...",html:'<p>Sạo vậy thôi chứ làm gì mà trở thành master ngay lập tức được, lý lẽ bình thường muốn master bất cứ thứ gì cũng cần mồ hôi và nước mắt. Hiểu được 5 khái niệm được cho là căn cơ nhất này sẽ giúp bạn dễ xa lầy hơn.</p>\n<ol>\n<li>Component</li>\n<li>JSX</li>\n<li>Props &#x26; State</li>\n<li>Component API</li>\n<li>Component Type</li>\n</ol>\n<h1>Khái niệm #1: React component hoạt động ra sau</h1>\n<p>Điều đầu tiên cần nằm lòng là tất cả những gì React xây dựng điều xoay quanh component. Thế thì component là gì. Ví dụ tuyệt vời nhất là select HTML element, select có thể xem như một component được định nghĩa sẵn với kiểu hiện thị riêng của nó (màu xám, có label, nút tam giác nằm ở góc phải) và tự nó xử lý tác vụ đóng mở mấy cái option</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/800/1*dPxDcCmCItzEyQuPpHOS3Q/RS/w704.gif"></p>\n<p>Giờ tưởng tượng là chúng ta sẽ tự build ra một cái component tương tự như select với giao diện và event chúng ta tự kiểm soát</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/800/1*AZ2IbiM4WskvgvIyhq6qPA/RS/w704.gif"></p>\n<p>Đó là những gì React giúp chúng ta làm, xây dựng một đối tượng không chỉ output ra một HTML templete thông thường,  chúng ta sẽ viết ra những function để control những event trên cái template đó</p>\n<p>Để tạo ra một React component căn bản nhất</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>component</span> <span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Hello World<span class="token operator">!</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Khái niệm #2: JSX chạy thế nào</h1>\n<p>Có thể thấy là với cách tạo ra một component như React thì javascript và HTML sống chung một nhà. Vũ khí bí mật của React để làm được chuyện "what-the-heck" đó là JSX language.</p>\n<p>Ngày xưa, đi học được dạy phải tách biệt HTML ra một file và JS ra một file, thời gian sau này anh em làm frontend thấy làm gom như vậy làm thấy nhanh hơn, mà cũng không quá evil như mấy ông thầy dạy</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>component</span> <span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\nreturnToday is<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Để ý cái cách ta chèn code javascript ở trong HTML bằng cách đưa nào vào bên trong dấu {}, đó là cách viết JSX</p>\n<h1>Khái niệm 3: Props và State</h1>\n<p>Bạn chắc chắn biết đến attribute href cho thẻ a , chưa biết? về lại w3com học nhé. Với một component của React những attribute như vậy được gọi là props . Props là cách mà các component tương tác lẫn nhau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">ParentComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChildComponent message<span class="token operator">=</span><span class="token string">"Hello World"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">ChildComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> And then I said<span class="token punctuation">,</span> <span class="token string">"{this.props.message}"</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Dữ liệu trong component có thể truyền từ cha xuống con và không có ngược lại</p>\n<p>Đôi khi dữ liệu sẽ không phải được truyền từ cha xuống con, mà nó chỉ là một dữ liệu tạm thời nào đó, ví dụ như giá trị input của user chẳng hạn, lúc đó nó được gọi là state</p>\n<p>Cho dễ hình dung, nếu xem cái bảng nam châm là một component thì props là nút gạt xóa, state là những gì viết trên bảng</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/1000/1*aYxNrkwkAPwIoGc0-3k_Ug/RS/w704.jpeg"></p>\n<p>Bên trong một component, state được quản lý bằng hàm setState thường được viết lòng trong một hàm xử lý sự kiện</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n handleClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>setState <span class="token punctuation">(</span><span class="token punctuation">{</span>clicked<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span> Click Me<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Khái niệm #4: Component API</h1>\n<p>Những hàm như render và setState là một phần của component API, ngoài ra nó còn một số hàm hữu ích khác nữa như constructor để khởi tạo state và kích hoạt các phương thức, một số hàm trigger trước khi component được load, sau khi load, sau khi unmounting. vâng vâng.</p>\n<p>Thật ra việc master được React phần nhiều là master được việc lập trình và khái niệm để kiến trúc ra một component hơn là một loạt các API được hỗ trợ sẵn, vậy nên phần này kết thúc ở đây.</p>\n<h1>Khái niệm 5: Component Type</h1>\n<p>Mấy ví dụ trên, định nghĩa một component được khai báo dạng class</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Giờ thì hãy quên cách viết này đi! Bây giờ ai cũng viết một component ở dạng function component</p>\n<p>Một functional component là một function nhận một props object như tham số truyền vào và trả về một đống HTML lằn xà ngoằn. Y hệt như cách viết template kinh điển, khác biệt cơ bản là ở chổ mình có thể xài JavaScript bất cứ chổ nào khi cần</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> myComponent <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Hello <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span> Today is <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Viết cách này có một hậu quả là mình không thể access được phương thức của component, trên thực tế việc này không ảnh hưởng gì làm vì phần lớn trường hợp ta không dùng tới.</p>\n<p>Và như vậy component này sẽ không có phương thức setState , không có state luôn, người ta còn gọi là stateless functional component.</p>\n<p>Cách viết này rất là gọn gàng, phù hợp cho những trường component đơn giản, nên áp dụng khi có thể.</p>\n<p>Nguồn</p>\n<blockquote>\n<blockquote>\n<p><a href="https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3">https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3</a></p>\n</blockquote>\n</blockquote>',id:"C:/xampp/htdocs/luckyluu/posts/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-01-10T13:35:13.234Z",path:"/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react",tags:["javascript","react"],title:"Nắm vững 5 khái niệm sau, xem như master React"}}}}}});
//# sourceMappingURL=path---2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau-d8056d50ed46127668d1.js.map