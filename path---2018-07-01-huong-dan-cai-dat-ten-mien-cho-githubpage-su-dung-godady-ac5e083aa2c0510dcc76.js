webpackJsonp([29],{"./node_modules/json-loader/index.js!./.cache/json/2018-07-01-huong-dan-cai-dat-ten-mien-cho-githubpage-su-dung-godady.json":function(n,t){n.exports={data:{markdownRemark:{html:'<p>Đăng nhập vào Goddady, mở tab My Products, chọn nút <strong>Manage</strong></p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Y9e7HtJvVv7jshINs46mTA.png"></p>\n<p>Cuộn xuống ở dưới cuối trang, click link <strong>Manage DNS</strong></p>\n<ul>\n<li>Hàng type <strong>A</strong>, nhập vào IP của Github Server: 185.199.108.153, lên đây xem <a href="https://help.github.com/articles/setting-up-an-apex-domain/">https://help.github.com/articles/setting-up-an-apex-domain/</a></li>\n<li>Hàng CNAME với Name "www" nhập địa chỉ url trang github page muốn trỏ tới, ví dụ như luubinhan.github.io/blog/</li>\n</ul>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*vL7RX_AyXRsSfO27NYF5iA.png"></p>\n<p>Bên trong thư mục public của site, tạo thêm file tên CNAME, mở file này lên, nhập nội dung là tên miền</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*zJsdMXE8aiHEuu6ObDu7ow.png"></p>\n<p>Xong, dễ cực. Cảm ơn bạn đã đọc hết bài viết</p>',frontmatter:{date:"July 01, 2018",path:"/2018-07-01-huong-dan-cai-dat-ten-mien-cho-githubpage-su-dung-godady",tags:["web","dns","githubpage"],title:"Hướng dẫn setup tên miền GoDaddy với Github Page",desc:"Hướng dẫn cầu hình tên miền trên GoDaddy để sử dụng với Github page"}}},pathContext:{prev:!1,next:{excerpt:"Cụ thể   sẽ được dùng để thay cho  , giờ nó cũng đã trở thành  Hàm   là một phương thức   sẽ chạy khi component nhận được  props  và đã được khởi tạo. Bởi vì nó là một phương thức   nên không thể sử dụng   bên trong phương thức này hoặc truy cập tới...",html:'<p>Cụ thể <code>getDerivedStateFromProps</code> sẽ được dùng để thay cho <code>componentWillReceiveProps</code>, giờ nó cũng đã trở thành <code>UNSAFE_componentWillReceiveProps</code></p>\n<p>Hàm <code>getDerivedStateFromProps</code> là một phương thức <code>static</code> sẽ chạy khi component nhận được <em>props</em> và đã được khởi tạo. Bởi vì nó là một phương thức <code>static</code> nên không thể sử dụng <code>this</code> bên trong phương thức này hoặc truy cập tới các phương thức khác. Không giống với <code>componentWillReceiveProps</code> chúng ta không dùng được <code>this.setState</code>, nếu muốn cập nhập lại <code>state</code> nào đó ta trả về một object hoặc <code>null</code> nếu không muốn update state nào cả</p>\n<p>Code sử dụng <code>componentWillReceiveProps</code> trước đây</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">.</span>someValue <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>someValue<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">//Perform some operation</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>someState<span class="token punctuation">:</span> someValue <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Giờ code lại bằng <code>getDerivedStateFromProps</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment" spellcheck="true">// mục tiêu xử lý ở hàm này là những return giá trị state sẽ bị thay đổi khi prop thay đổi</span>\n<span class="token keyword">static</span> <span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> prevState<span class="token punctuation">)</span><span class="token punctuation">{</span>\n   <span class="token keyword">if</span> <span class="token punctuation">(</span>nextProps<span class="token punctuation">.</span>path <span class="token operator">!==</span> prevState<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">{</span>\n     <span class="token keyword">return</span> <span class="token punctuation">{</span> path<span class="token punctuation">:</span> nextProps<span class="token punctuation">.</span>path <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// ở đây chúng ta sẽ set state</span>\n<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> prevState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevState<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Thục hiện update state</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Hàm <code>getDerivedStateFromProps</code> sẽ nhận vào 2 params <code>nextProps</code> và <code>prevState</code>. Chúng ta cần lưu giá trị của <em>props</em> <code>path</code> vào <em>state</em> là <code>path</code>, thực hiện kiểm tra ở đây nếu thấy khác nhau thì return lại object <code>{path: nextProps.path}</code>, khi đó ở <code>componentDidUpdate</code> giá trị của <code>prevState.path</code> sẽ khác với giá trị <code>this.state.path</code> ví <code>this.state.path</code> đã được set lại ở <code>getDerivedStateFromProps</code> trước đó</p>\n<p>Cảm ơn bạn đã đọc hết bài viết</p>\n<p><a href="https://hackernoon.com/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607">Link bài viết của tác giả Amanshu Kataria</a></p>',id:"C:/xampp/htdocs/luckyluu/posts/2018-06-28-thay-component-will-receive-props/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2018-06-28T13:35:13.234Z",path:"/2018-06-28-thay-component-will-receive-props",tags:["react","javascript"],title:"Thay componentWillReceiveProps với getDerivedStateFromProps"}}}}}});
//# sourceMappingURL=path---2018-07-01-huong-dan-cai-dat-ten-mien-cho-githubpage-su-dung-godady-ac5e083aa2c0510dcc76.js.map