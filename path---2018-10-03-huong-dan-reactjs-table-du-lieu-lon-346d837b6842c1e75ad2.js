webpackJsonp([25486605638859],{1333:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Chúng ta có component như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">ParentComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">item</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Khi mà <code class="language-text">ParentComponent</code> nhận được <code class="language-text">props.items</code>, trước hết nó sẽ đổ tất cả dữ liệu vào trong virtual DOM, sau đó kiểm tra xem phần nào của real DOM cần cập nhập, rồi cập nhập toàn bộ trong <strong>một lần</strong>. Đó là lý do chúng ta bị <strong>delay</strong>, nó tốn thời gian cho việc tạo ra một số lượng virtual DOM rất lớn trước khi update real DOM, giả dụ có hơn 40.000 dòng dữ liệu, nó đợi tạo 40.000 cái virtual DOM trước khi đẩy hết xuống real DOM.</p>\n<p>Chúng ta muốn render <code class="language-text">ParentComponent</code> sớm nhất có thể, và sau đó thêm các item từ từ. Chúng ta muốn hiển thị các item vừa có trong virtual DOM, rồi lại render tiếp. </p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    items<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token comment">//...</span>\n    <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> item <span class="token operator">=></span> \n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">item</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Giải pháp ở đây là đưa toàn bộ <code class="language-text">item</code> vào trong <code class="language-text">state</code>, sau đó <code class="language-text">render()</code> theo <code class="language-text">state.items</code>. Việc cần làm là update lại <code class="language-text">state.items</code> và chèn thêm item một cách từ từ. Với cách này, hàm <code class="language-text">render</code> sẽ gọi khá thường xuyên, nhưng được cái nó hiển thị liền</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function-variable function">recursive</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> hasMore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      items<span class="token punctuation">:</span> props<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> prev<span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasMore<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">recursive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hàm đệ quy trên nó sẽ chạy đến khi <strong>length</strong> bằng nhau. Trên mỗi lần lặp lại nó thêm một element vào mảng <code class="language-text">state.items</code>. Dùng <code class="language-text">setTimeout</code> để đưa thứ tự ưu tiên của nó xuống thấp nhất.</p>\n<p>Nếu thắc mắc tại sao lại gọi hàm <code class="language-text">setState()</code> bên trong một hàm đệ quy</p>\n<ul>\n<li>Buộc phải dùng <code class="language-text">setState</code> nếu muốn update real DOM, <code class="language-text">setState</code> nó có cách xử lý riêng khi chúng ta gọi nhiều lần</li>\n<li>Ví dụ trên đang thêm 1 item một lần gọi, tùy theo nhu cầu, số lượng item có thế nhiều hơn.</li>\n<li><code class="language-text">setTimeout</code> có thứ tự ưu tiên chạy cuối cùng, nên, nếu user tương tác với component đã được render, tương tác này sẽ được ưu tiên cao hơn việc render các item còn lại. User có thể bắt đầu tương tác với các item đã render mà không đợi nó show hết</li>\n<li>Nếu đã có sẵn toàn bộ các item thì ok, nếu phải đi <code class="language-text">fetch</code>, dùng cách khác</li>\n<li>Nếu dùng HOC sẽ không hề làm side effect với cách này</li>\n<li>Bạn cứ test performance để kiểm tra thử nó làm nhanh hay chậm app để xác nhận</li>\n</ul>\n<p>Gọi hàm đệ quy trong <code class="language-text">componentDidMount</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">recursive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Ghi chú</strong></p>\n<p>Cách này đã kiểm tra khi render khoảng 10 đến 1500 element, thời gian tốn khoảng 2 đến 3ms.</p>\n<p>Nếu muốn tìm một giải pháp của người ta build sẵn thì dùng <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a></p>\n<p><a href="https://itnext.io/handling-large-lists-and-tables-in-react-238397854625">Link bài viết gốc</a></p>',timeToRead:2,excerpt:"Chúng ta có component như sau Khi mà   nhận được  , trước hết nó sẽ đổ tất cả dữ liệu vào trong virtual DOM, sau đó kiểm tra xem phần nào…",frontmatter:{title:"Xử lý tập dữ liệu lớn trong React",cover:"",date:"2018-10-03",category:null,tags:["javascript","react","performance"],desc:"Tình huống: bạn có một table với rất nhiều dữ liệu đổ vào, nếu bạn thấy component đó render chậm trên màn hình, đó là lúc cần tái cấu trúc"},fields:{slug:"/2018-10-03-huong-dan-reactjs-table-du-lieu-lon"}}},pathContext:{slug:"/2018-10-03-huong-dan-reactjs-table-du-lieu-lon",prev:{frontmatter:{title:"Làm việc với Redux trong ứng dụng lớn",desc:"Cùng thảo luận xung quanh vấn đề ứng dụng thiên về dữ liệu lớn, rất lớn",type:"post",category:null,tags:["javascript","react","performance"],date:"2018-10-04",cover:""},fields:{slug:"/2018-10-04-huong-dan-redux-voi-ung-dung-lon"}},next:{frontmatter:{title:"Sử dụng tabindex",desc:"Mặc định thứ tự tab theo vị trí của DOM rất hữu dụng, tuy nhiên có trường hợp chúng ta sẽ muốn thay đổi thứ tự tab này. Cùng nghiên cứu attribute tabindex để set thứ tự tab",type:"post",category:null,tags:["ux-ui"],date:"2018-10-02",cover:""},fields:{slug:"/2018-10-02-huong-dan-su-dung-tabindex-de-di-chuyen"}}}}}});
//# sourceMappingURL=path---2018-10-03-huong-dan-reactjs-table-du-lieu-lon-346d837b6842c1e75ad2.js.map