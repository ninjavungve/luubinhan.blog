webpackJsonp([78221653429307],{512:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#t%E1%BA%A1i-sao">Tại sao?</a></li>\n<li><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-l%C3%A0-data-flow-lu%E1%BB%93ng-d%E1%BB%AF-li%E1%BB%87u">Vấn đề là: Data Flow (Luồng dữ liệu)</a></li>\n<li><a href="#k%E1%BA%BFt-n%E1%BB%91i-tr%E1%BB%B1c-ti%E1%BA%BFp-%C4%91%E1%BA%BFn-d%E1%BB%AF-li%E1%BB%87u-v%E1%BB%9Bi-redux">Kết nối trực tiếp đến dữ liệu với Redux</a></li>\n<li><a href="#khi-n%C3%A0o-s%E1%BB%AD-d%E1%BB%A5ng-redux">Khi nào sử dụng Redux</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="tại-sao"><a href="#t%E1%BA%A1i-sao" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tại sao?</h2>\n<p>Câu hỏi đâu tiên cần trả lời: Tại sao chúng ta cần Redux?</p>\n<p>Dĩ nhiên câu trả lời không phải là bởi vì ai trên mạng cũng bảo thế nên em phải xài nó.</p>\n<p>Redux được sử dụng rộng rãi vì nó giải quyết <strong>vấn đề</strong> mà chúng ta thường gặp khi làm Single Page App.</p>\n<p>Vấn đề "State management"? Không hề, bản thân React đã giải quyết State management rồi, Redux giúp quản lý <code class="language-text">state</code>, nhưng nó không phải là <strong>vấn đề</strong> mấu chốt.</p>\n<h2 id="vấn-đề-là-data-flow-luồng-dữ-liệu"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-l%C3%A0-data-flow-lu%E1%BB%93ng-d%E1%BB%AF-li%E1%BB%87u" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề là: Data Flow (Luồng dữ liệu)</h2>\n<p>Nếu sử dụng React một thời gian, chúng ta thấy ngay <code class="language-text">props</code> trong React là dữ liệu đi xuống theo 1 chiều từ trên xuống. Dữ liệu truyền xuống qua <code class="language-text">props</code>.</p>\n<p>Ví dụ với <em>component</em> <code class="language-text">Couter</code> như sau</p>\n<p><img src="https://daveceddia.com/images/counter-component.png"></p>\n<p>Giá trị <code class="language-text">count</code> lưu trong <em>state</em> của component <code class="language-text">App</code>, được truyền xuống qua <em>props</em></p>\n<p><img src="https://daveceddia.com/images/passing-props-down.png"></p>\n<p>Để dữ liệu đi ngược lên trên, có phải chúng ta sẽ có 1 hàm <em>callback</em>, hàm <em>callback</em> này được truyền xuống cho <strong>tất cả</strong> các component con, khi dữ liệu <code class="language-text">count</code> thay đổi, chúng ta gọi lại hàm <em>callback</em> này để \'báo\' cho <code class="language-text">App</code> biết giá trị <code class="language-text">count</code> đã thay đổi.</p>\n<p><img src="https://daveceddia.com/images/passing-callbacks-down.png"></p>\n<p>Hình dung như thế này, dữ liệu như là nguồn điện ở nhà, muốn có điện từ nhà máy tới từng hộ dân ta cần đường dây điện được nối xuyên suốt từ nhà máy đến từng hộ dân, vì điện không thể truyền qua không khí như sóng điện thoại. Đó là cách React đưa dữ liệu đến các <em>component</em> con, với Redux chúng ta sẽ hổ trợ dữ liệu đi qua đường sóng điện thoại.</p>\n<p>Sớm hay muộn gì bạn cũng rơi vào tình huống như trên, container ở trên cùng có một vài dữ liệu mà components bên dưới nó cũng cần dữ liệu tương tự. Lấy ví dụ như thông tin user trên trang Twitter</p>\n<p><img src="https://daveceddia.com/images/twitter-user-data.png"></p>\n<p>Để đưa dữ liệu từ <code class="language-text">App</code> xuống các <code class="language-text">Avatar</code> components, bạn phải truyền dữ liệu này qua những component không cần thiết.</p>\n<p><img src="https://daveceddia.com/images/twitter-hierarchy.png"></p>\n<h2 id="kết-nối-trực-tiếp-đến-dữ-liệu-với-redux"><a href="#k%E1%BA%BFt-n%E1%BB%91i-tr%E1%BB%B1c-ti%E1%BA%BFp-%C4%91%E1%BA%BFn-d%E1%BB%AF-li%E1%BB%87u-v%E1%BB%9Bi-redux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết nối trực tiếp đến dữ liệu với Redux</h2>\n<p>Sử dụng hàm <code class="language-text">connect</code> trong Redux sẽ cho phép chúng ta kết nối bất kỳ <em>component</em> nào đến trung tâm của mọi dữ liệu, thích cái gì thì <em>map</em> nó vô component</p>\n<p><img src="https://daveceddia.com/images/redux-connected-twitter.png"></p>\n<p>Bên cạnh đó nó còn có một số tính năng khác đi kèm, như giúp debug dễ hơn với Redux DevTools cho phép kiểm tra mỗi khi state thay đổi, time-travel debug cho phép roll back lại state trước đó</p>\n<p>Cách connect một component với Redux store</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Avatar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>avatar<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  user<span class="token punctuation">:</span> state<span class="token punctuation">.</span>user\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token punctuation">{</span> Avatar <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Avatar<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Bản thân component <em>Avatar</em> không có gì khác biệt với component khác, nó sẽ nhận <code class="language-text">props</code> và <code class="language-text">render</code> ra như bình thường, hàm <code class="language-text">connect</code> sẽ làm chuyện <em>map</em> cái state ở trong Redux store về thành <code class="language-text">props</code>.</p>\n<h2 id="khi-nào-sử-dụng-redux"><a href="#khi-n%C3%A0o-s%E1%BB%AD-d%E1%BB%A5ng-redux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khi nào sử dụng Redux</h2>\n<ul>\n<li>Nếu các <em>component</em> được tổ chức theo cây như ví dụ ở trên</li>\n<li>Nếu cần lưu dữ liệu tạm thời giữa các view, thí dụ load dữ liệu ở trang list xong vô trang detail load dự liệu trang detail, rồi khi quay lại trang list không cần phải load dữ liệu lại lần nữa.</li>\n<li>Nếu ứng dụng lớn, quản lý dữ liệu nhiều.</li>\n</ul>',timeToRead:4,excerpt:"Tại sao? Vấn đề là: Data Flow (Luồng dữ liệu) Kết nối trực tiếp đến dữ liệu với Redux Khi nào sử dụng Redux Tại sao? Câu hỏi đâu tiên cần…",frontmatter:{title:"Redux là gì và tại sao phải dùng?",cover:"",date:"2018-02-14",category:"react",tags:["react","javascript","redux"],desc:"Nếu đã đụng tới React thì sớm muộn gì bạn cũng sẽ nghe đến Redux"},fields:{slug:"/2018-02-14-redux-la-gi-tai-sao-phai-dung"}}},pathContext:{slug:"/2018-02-14-redux-la-gi-tai-sao-phai-dung"}}}});
//# sourceMappingURL=path---2018-02-14-redux-la-gi-tai-sao-phai-dung-7f507d5ad7e766829513.js.map