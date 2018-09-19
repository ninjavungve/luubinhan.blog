webpackJsonp([19729385208018],{1331:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Với thuộc tính <code class="language-text">srcset</code> chúng ta sẽ sử dụng những version khác nhau của cùng 1 ảnh cho các độ phận giải khác nhau, trình duyệt tự xác định hình nào tốt nhất.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small.jpg<span class="token punctuation">"</span></span>\n  <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium.jpg 1000w, large.jpg 2000w<span class="token punctuation">"</span></span>\n  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yah<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Thử xem trình duyệt đã tính toán thế nào. Thí dụ kích thước thiết bị là <em>320px</em>, 1x (không phải retina), chúng ta có 3 hình</p>\n<ul>\n<li>small.jpg: 500px wide</li>\n<li>medium.jpg: 1000px wide</li>\n<li>large.jpg: 2000px wide</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">500 / 320 = 1.5625\n1000 / 320 = 3.125\n2000 / 320 = 6.25</code></pre>\n      </div>\n<p>Trình duyệt: Ok, tao thấy mày đang dạng màn hình 1x, 1.5625 là tỉ lệ gần nhất với 1, tuy hơi cao nhưng tốt hơn mấy thằng kia.</p>\n<p>Nếu là màn hình 2x, trình duyệt sẽ chọn 3.125 vì nó gần với giá trị 2 nhất.</p>\n<p><code class="language-text">srcset</code> giống như là số lựa chọn khác, kèm thông tin thêm, giúp trình duyệt chọn lựa.</p>\n<p>Thế còn <code class="language-text">sizes</code> ? Nếu không xác định mặc định sẽ là 100 viewport width</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small.jpg<span class="token punctuation">"</span></span>\n  <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium.jpg 1000w, large.jpg 2000w<span class="token punctuation">"</span></span>\n  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yah<span class="token punctuation">"</span></span>\n  <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100vw<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Quay lại với câu hỏi ban đầu</p>\n<p data-height="265" data-theme-id="0" data-slug-hash="QBbQeR" data-default-tab="html,result" data-user="chriscoyier" data-pen-title="Responsive Images Slider" class="codepen">See the Pen <a href="https://codepen.io/chriscoyier/pen/QBbQeR/">Responsive Images Slider</a> by Chris Coyier  (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\n  food-big.jpg 640w,\n  foot-medium.jpg 320w,\n  food-small.jpg 160w<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Để ý ta không dùng thuộc tính <code class="language-text">sizes</code>. Trình duyệt ngầm hiểu chúng ta muốn render ảnh ở độ rộng 100vw, và trình duyệt sẽ download kích thước file lớn hơn file nó cần, điều này ko thông minh</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1531489586/640-version_txwye1.png"></p>\n<p>Để trình duyệt có sự lựa chọn sáng suốt hơn khi download file trong trường hợp này, ta sử dụng <code class="language-text">sizes</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\n  food-big.jpg 640w,\n  foot-medium.jpg 320w,\n  food-small.jpg 160w<span class="token punctuation">"</span></span>\n \n  <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(min-width: 600px) 160px, 320px<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Đoạn trên nếu dịch ra thì sẽ là: ê trình duyệt render kích thước 160px trên window > 600px, còn lại cứ dùng kích thước 320px</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1531489882/320-version_afwzxa.png"></p>\n<p>Kích thước trên mobile</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1531490069/640-version-mobile_l15ira.png"></p>\n<p><a href="https://css-tricks.com/sometimes-sizes-is-quite-important/">Link bài gốc</a></p>\n<p><a href="https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/">Responsive Images: If you’re just changing resolutions, use srcset.</a></p>',timeToRead:2,excerpt:"Với thuộc tính   chúng ta sẽ sử dụng những version khác nhau của cùng 1 ảnh cho các độ phận giải khác nhau, trình duyệt tự xác định hình nào…",frontmatter:{title:"Tầm quan trọng của thuộc tính sizes trong thẻ img",cover:"",date:"2018-07-30",category:null,tags:["css"],desc:"Một tình huống cơ bản product slider images, trên điện thoại, chúng ta có mỗi slide một ảnh với chiều ngang 320px, trên desktop chúng ta có 6 ảnh/slide, ảnh rộng 160px, tức là kích thước ảnh trên desktop nhỏ hơn trên di động, dùng srcset giải quyết vấn đề này như thế nào"},fields:{slug:"/2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img"}}},pathContext:{slug:"/2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img",prev:{frontmatter:{title:"Những điều có thể làm với pointer-events",desc:"Một vài ứng dụng khác của pointer-events",type:"post",category:null,tags:["css"],date:"2018-08-01",cover:""},fields:{slug:"/2018-08-01-huong-dan-pointer-events-nhung-dieu-ban-co-the-lam"}},next:{frontmatter:{title:"Làm việc với date trong javascript",desc:"Làm việc với kiểu ngày tháng trong javascript không phức tạp lắm, nhưng rất thường xài",type:"post",category:null,tags:["javascript"],date:"2018-07-29",cover:"https://flaviocopes.com/javascript-dates/Screen%20Shot%202018-07-06%20at%2007.20.58.png"},fields:{slug:"/2018-07-29-huong-dan-javascript-date-lam-viet-voi-javascript-date"}}}}}});
//# sourceMappingURL=path---2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img-aec895dd43976f01057e.js.map