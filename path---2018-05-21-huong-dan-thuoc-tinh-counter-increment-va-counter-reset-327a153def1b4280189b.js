webpackJsonp([89261140906867],{1257:function(t,n){t.exports={data:{markdownRemark:{html:'<p>Tương tự như <code class="language-text">&lt;ol&gt;</code>, để có thể đánh số thứ tự một cách tự động cho bất kể element nào, ta có thể dùng cặp thuộc tính <code class="language-text">counter-reset</code> và <code class="language-text">counter-increment</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">article</span> <span class="token punctuation">{</span>\n    <span class="token property">counter-reset</span><span class="token punctuation">:</span> section<span class="token punctuation">;</span> // section là một định danh bất kỳ, giá trị khởi tạo = 0\n<span class="token punctuation">}</span>\n<span class="token selector">section</span> <span class="token punctuation">{</span>\n    <span class="token property">counter-increment</span><span class="token punctuation">:</span> section<span class="token punctuation">;</span> // đặt cho đối tượng con, trên mỗi giá trị section nằm trong article, counter sẽ tăng lên 1\n<span class="token punctuation">}</span>\n\n<span class="token selector">section h2:before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>section<span class="token punctuation">)</span> <span class="token string">\'. \'</span><span class="token punctuation">;</span> // giá trị counter được truyền vào cho thuộc tính content\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu không thích kiểu đánh số mặc định là 1, 2, 3 ...., có thể chỉ định bằng cách</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">section:before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>section, upper-roman<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hoạt động tốt trên IE8+</p>\n<p>Một số áp dụng tìm trên codepen</p>\n<p data-height="265" data-theme-id="0" data-slug-hash="GdXyWo" data-default-tab="css,result" data-user="chriscoyier" data-embed-version="2" data-pen-title="Custom List Style 3" class="codepen">See the Pen <a href="https://codepen.io/chriscoyier/pen/GdXyWo/">Custom List Style 3</a> by Chris Coyier  (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<p data-height="265" data-theme-id="0" data-slug-hash="xjapNK" data-default-tab="css,result" data-user="chriscoyier" data-embed-version="2" data-pen-title="Wilto Counters" class="codepen">See the Pen <a href="https://codepen.io/chriscoyier/pen/xjapNK/">Wilto Counters</a> by Chris Coyier  (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<p data-height="265" data-theme-id="0" data-slug-hash="qYoLaq" data-default-tab="css,result" data-user="snookca" data-embed-version="2" data-pen-title="Timeline CSS with Counters" class="codepen">See the Pen <a href="https://codepen.io/snookca/pen/qYoLaq/">Timeline CSS with Counters</a> by Jonathan Snook (<a href="https://codepen.io/snookca">@snookca</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>',timeToRead:1,excerpt:"Tương tự như  , để có thể đánh số thứ tự một cách tự động cho bất kể element nào, ta có thể dùng cặp thuộc tính   và  Nếu không thích kiểu…",frontmatter:{title:"Hướng dẫn sử dụng thuộc tính counter-reset và counter-increment",cover:"",date:"2018-05-21",category:null,tags:["css"],desc:"Nếu muốn đánh số tự động trong css, ta thường sử dụng đến kiểu display list-style, bài này giới thiệu một thuộc tính khác ít ai biết tới"},fields:{slug:"/2018-05-21-huong-dan-thuoc-tinh-counter-increment-va-counter-reset"}}},pathContext:{slug:"/2018-05-21-huong-dan-thuoc-tinh-counter-increment-va-counter-reset",prev:{frontmatter:{title:"Làm việc với Form trong React",desc:"Xử lý form trong React, căn bản nhất",type:"post",category:null,tags:["javascript","react"],date:"2018-05-22",cover:""},fields:{slug:"/2018-05-22-huong-dan-lam-viec-voi-form-trong-react"}},next:{frontmatter:{title:"React Context API - có phải sẽ thay thế Redux",desc:"Thử sử dụng React Context API để thay thể Redux cho State Management",type:"post",category:null,tags:["javascript","react"],date:"2018-05-16",cover:""},fields:{slug:"/2018-05-16-huong-dan-react-context-api-ke-thay-the-redux"}}}}}});
//# sourceMappingURL=path---2018-05-21-huong-dan-thuoc-tinh-counter-increment-va-counter-reset-327a153def1b4280189b.js.map