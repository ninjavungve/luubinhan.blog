webpackJsonp([79752974708534],{1311:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#shouldcomponentupdate-v%C3%A0-purecomponent"><code class="language-text">shouldComponentUpdate</code> và PureComponent</a></p>\n<ul>\n<li><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81">Vấn đề</a></li>\n<li><a href="#gi%E1%BA%A3i-ph%C3%A1p">Giải pháp</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#thay-%C4%91%E1%BB%95i-dom-qu%C3%A1-nhi%E1%BB%81u-l%E1%BA%A7n">Thay đổi DOM quá nhiều lần</a></p>\n<ul>\n<li><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-1">Vấn đề</a></li>\n<li><a href="#gi%E1%BA%A3i-ph%C3%A1p-1">Giải pháp</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#callback">Callback</a></p>\n<ul>\n<li><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-2">Vấn đề</a></li>\n<li><a href="#gi%E1%BA%A3i-ph%C3%A1p-2">Giải pháp</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<p>Chúng ta sẽ lượt qua các vấn đề sau</p>\n<ol>\n<li>Cách viết <code class="language-text">shouldComponentUpdate</code> không hợp lý và tại sao <code class="language-text">PureComponent</code> không phải vị cứu tinh</li>\n<li>Thay đổi <strong>DOM</strong> quá nhiều lần</li>\n<li>Sử dụng <strong>events</strong> và <strong>calbacks</strong></li>\n</ol>\n<h2 id="code-classlanguage-textshouldcomponentupdatecode-và-purecomponent"><a href="#code-classlanguage-textshouldcomponentupdatecode-v%C3%A0-purecomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">shouldComponentUpdate</code> và PureComponent</h2>\n<p>Để ngăn việc <em>render</em> không cần thiết chúng ta sẽ can thiệp bên trong hook <code class="language-text">shouldComponentUpdate</code>, nó nhận vào <code class="language-text">props</code> sẽ thay đổi và <code class="language-text">state</code> mới, nếu hàm này return <code class="language-text">true</code>, hàm <code class="language-text">render</code> sẽ được gọi, và ngược lại.</p>\n<h3 id="vấn-đề"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề</h3>\n<p>Hãy thử xem xét cách viết <code class="language-text">shouldComponentUpdate</code> thường thấy </p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">ShouldNotUpdate</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">!==</span> nextProps<span class="token punctuation">.</span>children<span class="token punctuation">;</span>    \n  <span class="token punctuation">}</span>\n  \n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`I should be rendered only 1 time. actual times rendered: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Kết quả trả về sẽ không phải counter = 1, nghĩa là hàm render thực sự sẽ chạy rất nhiều lần, tại sao lại vậy? bởi vì <code class="language-text">this.props.children !== nextProps.children</code> sẽ luôn luôn trả về <code class="language-text">true</code>, React sẽ tạo ra một instance mới, 1 <strong>ReactElement mới</strong> mỗi khi render</p>\n<p>Còn PureComponent thì sao, thay vì return boolean value trong <code class="language-text">shouldComponentUpdate</code>, nó sẽ return kết quả của so sánh <code class="language-text">props</code> và <code class="language-text">state</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">ShouldNotUpdate</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`I should be rendered only 1 time. actual times rendered: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Trong thực tế cho thấy PureComponent không mấy hữu dụng, không biết là tính năng hay là bug mà PureComponent sẽ không chặn việc render ở đây.</p>\n<h3 id="giải-pháp"><a href="#gi%E1%BA%A3i-ph%C3%A1p" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải pháp</h3>\n<p>Một giải pháp có thể nghĩ ngay tới là thực hiện một phép so sánh toàn diện, cái này thật ra là chạy, nhưng sẽ vướng 2 khuyết điểm</p>\n<ol>\n<li>So sánh toàn diện thì tốn nhiều thời gian code, ì ạch, thậm chí còn làm performance tệ hơn</li>\n<li>Phụ thuộc vào phiên bản React hiện tại đang sử dụng, nếu có release mới, khả năng là ko còn sử dụng được</li>\n</ol>\n<p>Theo quan điểm cá nhân, so sánh toàn diện không nên áp dụng.</p>\n<p>Evan You tác giả của Vue.js trong <a href="https://github.com/vuejs/vue/issues/4255#issuecomment-274143903">trả lời này</a> có đề cập việc sử dụng <code class="language-text">shouldComponentUpdate</code> có thể bỏ qua vì nó không mấy thực tế, có rất nhiều trường hợp có thể bị bỏ xót nếu để mặc cho React Element tự xác định state nào đã change trong component.</p>\n<p>Thay vì kiểm tra <code class="language-text">this.props.children !== nextProps.children</code>, sử dụng các <code class="language-text">props</code> khác nhau để xác định state change, khuyến khích dùng <em>string/numeric</em> để so sánh cho lẹ</p>\n<h2 id="thay-đổi-dom-quá-nhiều-lần"><a href="#thay-%C4%91%E1%BB%95i-dom-qu%C3%A1-nhi%E1%BB%81u-l%E1%BA%A7n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thay đổi DOM quá nhiều lần</h2>\n<p>Có bao giờ bạn từng sử dụng một <em>component</em> nhiều lần trong app, cảm thấy app hơi lag? Animation cảm giác chạy hơi khực khực?</p>\n<h3 id="vấn-đề-1"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề</h3>\n<p>Khi xây các component phức tạp, bạn sẽ phải xào nấo DOM một chút, khả năng sẽ vướng vào 2 issue sau</p>\n<ol>\n<li><a href="https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing">Trigger layout</a></li>\n<li><a href="https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing">Layout Thrashing</a></li>\n</ol>\n<p>Hãy chạy thử hiệu ứng đang làm cho một component <strong>Collapse</strong> với khoản vài chục cái instance, sau đó chọn 6x slowdown trên dev tool để thấy sự khác biệt, 6x slowdown là giá trị tương ứng với tốc độ khi xem trên điện thoại</p>\n<p><a href="https://cdn-images-1.medium.com/max/800/1*2xOju9iTPGs22U0joILHmQ.png"></a></p>\n<h3 id="giải-pháp-1"><a href="#gi%E1%BA%A3i-ph%C3%A1p-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải pháp</h3>\n<p>Mỗ sẽ một component <strong>Collapse</strong>, ta thường sẽ làm là thay đổi độ cao của nó</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">updateHeight</span><span class="token punctuation">(</span>isOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>isOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>containerEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>contentEl<span class="token punctuation">.</span>scrollHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>containerEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">\'0px\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Có 2 điểm cần lưu ý</p>\n<ol>\n<li>Chúng ta thay đổi <em>height</em>, là chúng ta trigger chuyện sắp xếp lại Layout. Nếu chúng ta thay đổi <code class="language-text">transform</code>, chúng ta chỉ sẽ trigger <strong>Composite</strong> và nhìn nó sẽ smooth hơn.</li>\n<li>Dòng <code class="language-text">this.containerEl.style.height = ${this.contentEl.scrollHeight}px;</code> là một ví dụ điển hình của <strong>Layout Thrashing</strong>, chúng ta đọc giá trị độ cao hiện tại, rồi lấy giá trị đó update cho một đối tượng DOM, nhân số lần này lên với số lượng component <strong>Collapse</strong> sẽ là một số lần đáng quan tâm. Sẽ tốt hơn nếu chúng ta chỉ đọc một lần rồi gán giá trị một lượt luôn.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">updateHeight</span><span class="token punctuation">(</span>isOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>lastRAF <span class="token operator">&amp;&amp;</span> <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lastRAF<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>isOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>lastRAF <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// đọc</span>\n      <span class="token keyword">const</span> height <span class="token operator">=</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>contentEl<span class="token punctuation">.</span>scrollHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px`</span></span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>lastRAF <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>lastRAF <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token comment">// gán giá trị</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>containerEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>lastRAF <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>containerEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">\'0px\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Có thể sử dụng thư viện <a href="https://github.com/wilsonpage/fastdom">Fastdom</a> thay vì tự viết</p>\n<h2 id="callback"><a href="#callback" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Callback</h2>\n<p>Khi attact một function vào bất kỳ event nào trên DOM, nếu có thêm <code class="language-text">debounced</code> hoặc <code class="language-text">throttled</code> sẽ tốt hơn, giảm tải số lần gọi đến function này đến mức thấp nhất.</p>\n<p>Cách viết rất thường thấy</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'resize\'</span><span class="token punctuation">,</span> _<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nhưng tại sao không sử dụng nó trong component callback</p>\n<h3 id="vấn-đề-2"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề</h3>\n<p>Xét component sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">UnleashedOne</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>onChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">onChange</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta đang lắng nghe tất tần tật mỗi khi có thay đổi trên <code class="language-text">input</code>, như vậy thực sự có cần thiết không?</p>\n<h3 id="giải-pháp-2"><a href="#gi%E1%BA%A3i-ph%C3%A1p-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải pháp</h3>\n<p>Để giải quyết vấn đề trên, có thểm viết lại component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LeashedOne</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>onChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>onChangeDebounce <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span>value <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">onChange</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChangeDebounce</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đợi user nhập xong đi rồi xử lý sự kiện, ở đây sử dụng <code class="language-text">_.debounce</code>, <code class="language-text">_.throttle</code> từ thư viện <strong>lodash</strong>, sự khác nhau của 2 thằng này thì đọc thểm trên docs của nó.</p>\n<p>Nếu bị nghiện performance, bạn có thể chia sẽ thêm một số tip với mình. Thanks You</p>\n<p>Tác Giả: Noam Elboim\nLink bài gốc: <a href="https://medium.com/myheritage-engineering/how-to-greatly-improve-your-react-app-performance-e70f7cbbb5f6">https://medium.com/myheritage-engineering/how-to-greatly-improve-your-react-app-performance-e70f7cbbb5f6</a></p>',timeToRead:7,excerpt:" và PureComponent Vấn đề Giải pháp Thay đổi DOM quá nhiều lần Vấn đề Giải pháp Callback Vấn đề Giải pháp Chúng ta sẽ lượt qua các vấn đề sau…",frontmatter:{title:"Cải thiện performance của React App",cover:"",date:"2018-05-01",category:null,tags:["javascript","react"],desc:"Series này mình sẽ đề cập các cách làm để cải thiện performance của React App"},fields:{slug:"/2018-05-01-huong-dan-cai-thien-performance-react-app"}}},pathContext:{slug:"/2018-05-01-huong-dan-cai-thien-performance-react-app",prev:{frontmatter:{title:"Transition trong React Native với React Navigation",desc:"Hướng dẫn làm transition trong React Native với react navigation",type:"post",category:null,tags:["javascript","react","react-native"],date:"2018-05-02",cover:""},fields:{slug:"/2018-05-02-huong-dan-transition-voi-react-navigation"}},next:{frontmatter:{title:"Redux vs Mobx chọn cái nào đây",desc:"Khi nhắc tới thư viện để quản lý state cho một app js, thì chúng sẽ hay rất phân vân giữa 2 lựa chọn Redux hay Mobx",type:"post",category:null,tags:["javascript","react"],date:"2018-04-28",cover:""},fields:{slug:"/2018-04-28-huong-dan-redux-vs-mobx-chon-cai-nao-day"}}}}}});
//# sourceMappingURL=path---2018-05-01-huong-dan-cai-thien-performance-react-app-7616809fdbee6b093731.js.map