webpackJsonp([0x6152444dea40],{1283:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Cụ thể <code class="language-text">getDerivedStateFromProps</code> sẽ được dùng để thay cho <code class="language-text">componentWillReceiveProps</code>, giờ nó cũng đã trở thành <code class="language-text">UNSAFE_componentWillReceiveProps</code></p>\n<p>Hàm <code class="language-text">getDerivedStateFromProps</code> là một phương thức <code class="language-text">static</code> sẽ chạy khi component nhận được <em>props</em> và đã được khởi tạo. Bởi vì nó là một phương thức <code class="language-text">static</code> nên không thể sử dụng <code class="language-text">this</code> bên trong phương thức này hoặc truy cập tới các phương thức khác. Không giống với <code class="language-text">componentWillReceiveProps</code> chúng ta không dùng được <code class="language-text">this.setState</code>, nếu muốn cập nhập lại <code class="language-text">state</code> nào đó ta trả về một object hoặc <code class="language-text">null</code> nếu không muốn update state nào cả</p>\n<p>Code sử dụng <code class="language-text">componentWillReceiveProps</code> trước đây</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">.</span>someValue <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>someValue<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">//Perform some operation</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>someState<span class="token punctuation">:</span> someValue <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Giờ code lại bằng <code class="language-text">getDerivedStateFromProps</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// mục tiêu xử lý ở hàm này là những return giá trị state sẽ bị thay đổi khi prop thay đổi</span>\n<span class="token keyword">static</span> <span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> prevState<span class="token punctuation">)</span><span class="token punctuation">{</span>\n   <span class="token keyword">if</span> <span class="token punctuation">(</span>nextProps<span class="token punctuation">.</span>path <span class="token operator">!==</span> prevState<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">{</span>\n     <span class="token keyword">return</span> <span class="token punctuation">{</span> path<span class="token punctuation">:</span> nextProps<span class="token punctuation">.</span>path <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ở đây chúng ta sẽ set state</span>\n<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> prevState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevState<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Thục hiện update state</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hàm <code class="language-text">getDerivedStateFromProps</code> sẽ nhận vào 2 params <code class="language-text">nextProps</code> và <code class="language-text">prevState</code>. Chúng ta cần lưu giá trị của <em>props</em> <code class="language-text">path</code> vào <em>state</em> là <code class="language-text">path</code>, thực hiện kiểm tra ở đây nếu thấy khác nhau thì return lại object <code class="language-text">{path: nextProps.path}</code>, khi đó ở <code class="language-text">componentDidUpdate</code> giá trị của <code class="language-text">prevState.path</code> sẽ khác với giá trị <code class="language-text">this.state.path</code> ví <code class="language-text">this.state.path</code> đã được set lại ở <code class="language-text">getDerivedStateFromProps</code> trước đó</p>\n<p>Cảm ơn bạn đã đọc hết bài viết</p>\n<p><a href="https://hackernoon.com/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607">Link bài viết của tác giả Amanshu Kataria</a></p>',timeToRead:2,excerpt:"Cụ thể   sẽ được dùng để thay cho  , giờ nó cũng đã trở thành  Hàm   là một phương thức   sẽ chạy khi component nhận được  props  và đã được…",frontmatter:{title:"Thay componentWillReceiveProps với getDerivedStateFromProps",cover:"",date:"2018-06-28",category:"react",tags:["react","javascript"],desc:"Từ bản release React 16.3, các phương thức lifecycle có thay chút ít, một số không còn được khuyến khích sử dụng và thay thế bằng một phương thức khác"},fields:{slug:"/2018-06-28-huong-dan-thay-component-will-receive-props"}}},pathContext:{slug:"/2018-06-28-huong-dan-thay-component-will-receive-props",prev:{frontmatter:{title:"Hướng dẫn setup tên miền GoDaddy với Github Page",desc:"Hướng dẫn cầu hình tên miền trên GoDaddy để sử dụng với Github page",type:"post",category:null,tags:["web","dns","githubpage"],date:"2018-07-01",cover:""},fields:{slug:"/2018-07-01-huong-dan-cai-dat-ten-mien-cho-githubpage-su-dung-godady"}},next:{frontmatter:{title:"Làm việc với console trong javascript",desc:"Một web developer chân chính là người biết sử dụng console.log :D. Tuy nhiên cũng nên biết rằng console nó còn rất nhiều phương thức khác nữa",type:"post",category:"javascript",tags:["javascript"],date:"2018-06-24",cover:""},fields:{slug:"/2018-06-24-huong-dan-lam-viec-voi-console-trong-javascript"}}}}}});
//# sourceMappingURL=path---2018-06-28-huong-dan-thay-component-will-receive-props-e10e93d4d357686c6899.js.map