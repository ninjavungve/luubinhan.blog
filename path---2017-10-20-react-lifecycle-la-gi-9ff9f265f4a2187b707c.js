webpackJsonp([41],{"./node_modules/json-loader/index.js!./.cache/json/2017-10-20-react-lifecycle-la-gi.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://cdn-images-1.medium.com/max/1600/1*u8hTumGAPQMYZIvfgQMfPA.jpeg"></p>\n<p>Để thực sự trở thành một master React, việc hiểu lifecycle của component là bắt buộc, vòng đời của một component được tính từ lúc nó được chèn vào trong DOM (tức là không kể giai đoạn <code>componentWillMount</code> - có thể xem là giai đoạn thai nghén) đến lúc nó được remove ra khỏi DOM.</p>\n<p>Các phương thức của lifecycle là một dạng <code>hook</code> (giống như khái niệm <code>hook</code> trong wordpress), cho phép người lập trình can thiệp vào quá trình cập nhập UI với những thay đổi của <code>state</code> hoặc <code>props</code>.</p>\n<p>Những phương thức bắt đầu với <code>componentWill</code> tức là cái <code>hook</code> này được đặt trước những xử lý của React, còn bắt đầu với <code>componentDid</code> thì chạy sau khi thực hiện các đoạn code xử lý của React.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">componentEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    componentWill<span class="token operator">...</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// hook</span>\n\n    <span class="token comment" spellcheck="true">// React handle something</span>\n    \n    componentDid<span class="token operator">...</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// hook</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>constructor</h2>\n<p>Phương thức này sẽ được gọi khi component được khởi tạo, trước khi nó được <em>mount</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Clicker</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n       clicks<span class="token punctuation">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> \n      clicks<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>clicks <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment" spellcheck="true">//...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>componentWillMount</h2>\n<p>Chạy sau <code>constructor</code> trước khi component mount vô DOM bằng hàm <code>render</code></p>\n<p>Lưu ý không nên gọi bất kỳ hàm nào có gọi <code>setState</code> trong <code>componentWillMount</code> vì chưa có DOM nào để tương tác.</p>\n<h2>componentDidMount</h2>\n<p>Component đã hiện hình, là lúc mà ta gọi AJAX, thêm sự kiện có tương tác với DOM, gọi <code>setState</code> ở đây sẽ trigger sự kiện re-render.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">componetDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'https://gitconnected.com\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        user<span class="token punctuation">:</span> res<span class="token punctuation">.</span>user\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>componentWillReceiveProps</h2>\n<p>Chạy khi component nhận được <code>props</code> mới từ component cha. Thời điểm thích hợp để kiểm tra và reset lại <code>state</code> có phụ thuộc vào giá trị <code>props</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>id <span class="token operator">!==</span> nextProps<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      feedContent<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>shouldComponentUpdate</h2>\n<p>Có phương thức này để cải thiện performance của React, vì đôi lúc có những sự thay đổi <code>state</code> hoặc <code>props</code> nếu không muốn cập nhập lại UI có thể cho hàm này return và <code>false</code> (mặc định là return <code>true</code>), khi return <code>false</code> các hàm <code>componentWillUpdate</code>, <code>render</code>, <code>componentDidUpdate</code> sẽ không được gọi.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>clicks <span class="token operator">!==</span> nextProps<span class="token punctuation">.</span>clicks<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>componentWillUpdate</h2>\n<p>Không có nhiều trường hợp sử dụng hook này, <strong>KHÔNG</strong> gọi <code>setState</code> ở đây, phần lớn các trường hợp điều có thể handle ở <code>componentWillReceiveProps</code></p>\n<h2>componentDidUpdate</h2>\n<p>Sau khi React cập nhập lại UI, hook này sẽ được gọi, nếu muốn chạy một animation gì đó cần tương tác với DOM thì đây chính là lúc thực thi</p>\n<h2>componentWillUnmount</h2>\n<p>Có thể sử dụng để remove các listener đã được add cho DOM</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">\'resize\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resizeEventHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>componentDidCatch</h2>\n<p>Cái này mới được add vào từ React 16, nếu một component nào đó bị lỗi nó sẽ không chết nguyên cái app nữa mà sẽ quăn lỗi ở đây, sử dụng để hiển thị lỗi lên UI</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> hasError<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Display fallback UI</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hasError<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// You can also log the error to an error reporting service</span>\n    <span class="token function">logErrorToMyService</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// You can render any custom fallback UI</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Something went wrong<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyWidget</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>',frontmatter:{date:"October 20, 2017",path:"/2017-10-20-react-lifecycle-la-gi",tags:["javascript","react"],title:"Giải thích React Lifecycle",desc:"Tìm hiểu vòng đời luẩn quẩn của một component react, khi nào và sử dụng ra sao"}}},pathContext:{prev:{excerpt:"Hãy nghĩ ngay tới cặp đôi   và   khi cần truyền   từ component cha xuống các component con mà  KHÔNG cần gọi render component bên trong component cha Hơi mâu thuẫn vì không   component con vậy sao nó hiển thị, ví dụ đi 2 component con ở đây là   và...",html:'<p>Hãy nghĩ ngay tới cặp đôi <code>React.Children.map</code> và <code>React.cloneElement</code> khi cần truyền <code>props</code> từ component cha xuống các component con mà <strong>KHÔNG cần gọi render component bên trong component cha</strong></p>\n<p>Hơi mâu thuẫn vì không <code>render</code> component con vậy sao nó hiển thị, ví dụ đi</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> ComponentChaChu <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n     <span class="token punctuation">{</span>\n        React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> child <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                style<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    backgroundColor<span class="token punctuation">:</span> <span class="token string">\'green\'</span><span class="token punctuation">,</span>\n                    color<span class="token punctuation">:</span> <span class="token string">\'white\'</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span>\n     <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n<span class="token keyword">const</span> Luckyluu <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>title<span class="token punctuation">,</span> posts<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentChaChu</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComponentChaChu</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n            posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>post <span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Post</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentChaChu</span><span class="token punctuation">></span></span>\n                        <span class="token operator">&lt;</span>PostHeader <span class="token punctuation">{</span><span class="token operator">...</span>post<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> \n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComponentChaChu</span><span class="token punctuation">></span></span>\n                    <span class="token operator">&lt;</span>PostBody <span class="token punctuation">{</span><span class="token operator">...</span>post<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Post</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>2 component con ở đây là <code>PostHeader</code> và <code>NavBar</code> có thể sử dụng ở bất kỳ đâu, còn <code>ComponentChaChu</code> có thể có bất kỳ đứa con nào, không cần biết sau này con nó là ai thì nó sẽ truyền hết tài sản là <code>backgroundColor</code> và <code>color</code> cho đứa con yêu dấu đó</p>\n<p>Sẵn tiện thì nói luôn một số <em>function</em> khác của <code>React.Children</code> luôn</p>\n<h2><code>React.Children.forEach</code></h2>\n<p>Giống như <code>React.Children.map</code> nhưng không trả về gì hết</p>\n<h2><code>React.Children.count</code></h2>\n<p>Nhà có nhiêu đứa con ?</p>\n<h2><code>React.Children.toArray(children)</code></h2>\n<p>Convert component con về <code>array</code></p>\n<h2><code>React.Children.only</code></h2>\n<p>Để áp dụng chương trình kế hoạch hóa gia đình, mỗi component cha chỉ có <strong>1</strong> và phải có 1 con duy nhất, quăng cái thông báo nếu không đáp ứng yêu cầu này.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">BaBa</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Nếu bắt buộc con thằng <code>BaBa</code> phải là <code>function</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>BaBa<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    children<span class="token punctuation">:</span> React<span class="token punctuation">.</span>propTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Nó log ra thông báo lỗi khi truyền vào con không phải là <code>function</code>, dev lười biến có thể \'cho qua\' thông báo này. Nhưng khi mình bắt buộc kiểu này</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">BaBa</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Nếu không có con là app chết luôn, cho các anh dev không còn lười biếng, giống kiểu mấy người xưa ko có con là không có được vây. ;)</p>',id:"E:/anluu/luckyluu/posts/2017-10-27-react-children-react-clone-element/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2017-10-27T13:35:13.234Z",path:"/2017-10-27-react-children-react-clone-element",tags:["javascript","react"],title:"React Children và React cloneElement"}},next:{excerpt:"Dù cho đang ở level nào của javascript thì trước sau, ít nhiều cũng đụng tới vấn để sort một mảng trong javascript, tài liệu trên mozila có câu này hết sức nguy hiểm  sort is not necessarily stable. , giờ thử xem tại sao gọi là không  stable Vâng...",html:'<p>Dù cho đang ở level nào của javascript thì trước sau, ít nhiều cũng đụng tới vấn để sort một mảng trong javascript, tài liệu trên mozila có câu này hết sức nguy hiểm <strong>sort is not necessarily stable.</strong>, giờ thử xem tại sao gọi là không <strong>stable</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\nmyArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// [ 2, 25, 33, 4, 98 ]</span>\n</code></pre>\n      </div>\n<p>Vâng, <strong>25 > 33 > 4</strong> </p>\n<p>Mảng số ngày sẽ được javascript sort theo thứ tự alphabet, mỗi giá trị số được đưa về <code>string</code> để so sánh.</p>\n<p>Hàm <code>sort</code> có thể số truyền vào là <code>function</code> dùng để so sánh, nếu bạn không đưa hàm này vào, mặc định nó sẽ convert giá trị cần so sánh về <code>string</code> và so sánh mã unicode của này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>\nnumbers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// [80, 9]</span>\n\n<span class="token keyword">const</span> strings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'80\'</span><span class="token punctuation">,</span> <span class="token string">\'9\'</span><span class="token punctuation">]</span>\nstrings<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// [\'80\', \'9\']</span>\n</code></pre>\n      </div>\n<p>Như vậy thì viết như thế này cũng hoàn toàn hợp lệ</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> emojis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"😍"</span><span class="token punctuation">,</span><span class="token string">"😂"</span><span class="token punctuation">,</span><span class="token string">"😰"</span><span class="token punctuation">]</span>\nemojis<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// ["😂", "😍", "😰"]</span>\n\n<span class="token keyword">const</span> wtfJavaScript <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">390</span><span class="token punctuation">,</span> <span class="token string">"😂"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"2325"</span><span class="token punctuation">]</span>  \nwtfJavaScript<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// [1, "2325", 390, "😂"]</span>\n</code></pre>\n      </div>\n<h2>Vậy muốn <code>sort</code> mảng số làm sao ?</h2>\n<p>Như đã đề cập, cần đưa một hàm dùng để so sánh, hàm này đặc điểm như sau</p>\n<ul>\n<li>Nếu giá trị trả về của hàm <code>compareFunction(a,b)</code> &#x3C; 0, giá trị a sẽ đứng trước b</li>\n<li>Nếu giá trị trả về = 0, a và b bằng nhau</li>\n<li>Giá trị trả về > 0, a đứng sau b</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\nmyArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// [ 2, 4, 25, 33, 98 ]</span>\n</code></pre>\n      </div>\n<h2>Và hơn thế nữa</h2>\n<p>ECMAScript không đưa ra chuẩn mực nào về thuật toán cho cách <code>sort</code>, nghĩa là Javascript engine muốn apply thuật toán nào thì tùy nó, Google\'s V8 (Javascript engine của Chrome) và NodeJS sử dụng thuật toán <code>quick sort</code> và kết quả thì không hẳn là chính xác 100%. Do đó nên nhớ là <code>sort</code> trên những trình duyệt khác nhau cũng có khả năng cho kết quả khác nhau nếu nó dùng khác Javascript Engine.</p>\n<p>Nếu rảnh, và có trình, thì nên tự implement một sort function để xài, một số thuật toán sort có thể nghiên cứu như <code>InsertionSort</code>, <code>MergeSort</code>, <code>QuickSort</code></p>',id:"E:/anluu/luckyluu/posts/2017-10-19-sort-trong-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2017-10-19T13:35:13.234Z",path:"/2017-10-19-sort-trong-javascript",tags:["javascript"],title:"Sort trong javascript"}}}}}});
//# sourceMappingURL=path---2017-10-20-react-lifecycle-la-gi-9ff9f265f4a2187b707c.js.map