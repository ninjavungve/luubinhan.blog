webpackJsonp([19729385208018],{1310:function(n,t){n.exports={data:{markdownRemark:{html:'<h1 id="cung-cấp-kích-thước-ảnh-trên-code-classlanguage-textsrcsetcode"><a href="#cung-c%E1%BA%A5p-k%C3%ADch-th%C6%B0%E1%BB%9Bc-%E1%BA%A3nh-tr%C3%AAn-code-classlanguage-textsrcsetcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cung cấp kích thước ảnh trên <code class="language-text">srcset</code></h1>\n<p>Thay vì fix luôn 1 kích thước hình cụ thể, trên thuộc tính <code class="language-text">srcset</code> chúng ta báo kích thước của hình tương ứng, cho phép trình duyệt tính toán với viewport hiện tại và download hình thích hợp</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small.jpg<span class="token punctuation">"</span></span>\n  <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium.jpg 1000w, large.jpg 2000w<span class="token punctuation">"</span></span>\n  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>luckyluu blog | Viết tuts cho thế hệ trẻ<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Thử xem trình duyệt đã tính toán thế nào. Thí dụ kích thước thiết bị là <em>320px</em>, 1x (không phải retina), chúng ta có 3 hình</p>\n<ul>\n<li>small.jpg: 500px wide</li>\n<li>medium.jpg: 1000px wide</li>\n<li>large.jpg: 2000px wide</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">500 / 320 = 1.5625\n1000 / 320 = 3.125\n2000 / 320 = 6.25</code></pre>\n      </div>\n<p><em>Trình duyệt</em> - màn hình của mày là 1x, 1.5625 là tỉ lệ gần nhất với 1, tuy hơi cao nhưng tốt hơn mấy thằng kia. Tao load thằng <code class="language-text">small.jpg</code></p>\n<p>Nếu là màn hình 2x, trình duyệt sẽ chọn 3.125 vì nó gần với giá trị 2 nhất.</p>\n<h1 id="breakpoint"><a href="#breakpoint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breakpoint</h1>\n<p>Hầu như khi layout thay đổi theo breakpoint, hình cũng sẽ thay đổi kích thước. Ví dụ, trên điện thoại, bạn thường cho hình full hết viewport, trên màn hình lớn như desktop, bạn chỉ để hình float bên trái thôi.</p>\n<p>Với thuộc tính <code class="language-text">sizes</code>, nếu không xác định mặc định sẽ là 100 viewport width</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small.jpg<span class="token punctuation">"</span></span>\n  <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium.jpg 1000w, large.jpg 2000w<span class="token punctuation">"</span></span>\n  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>luckyluu blog | Viết tuts cho thế hệ trẻ<span class="token punctuation">"</span></span>\n  <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100vw<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Để ý ta không dùng thuộc tính <code class="language-text">sizes</code>. Trình duyệt ngầm hiểu chúng ta muốn render ảnh ở độ rộng 100vw.</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1531489586/640-version_txwye1.png" alt="Tầm quan trọng của thuộc tính sizes trong thẻ img"></p>\n<p>Để báo với trình duyệt cần render theo breakpoint, chúng ta khai báo thuộc tính <code class="language-text">sizes</code> như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\n  food-big.jpg 640w,\n  foot-medium.jpg 320w,\n  food-small.jpg 160w<span class="token punctuation">"</span></span>\n \n  <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(min-width: 600px) 160px, 320px<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Đoạn trên nếu dịch ra thì sẽ là: ê trình duyệt, render kích thước 160px khi viewport > 600px, còn lại cứ dùng kích thước 320px</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1531489882/320-version_afwzxa.png" alt="Tầm quan trọng của thuộc tính sizes trong thẻ img"></p>\n<p>Kích thước trên mobile</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1531490069/640-version-mobile_l15ira.png" alt="Tầm quan trọng của thuộc tính sizes trong thẻ img"></p>\n<p><a href="https://css-tricks.com/sometimes-sizes-is-quite-important/">css-tricks.com/sometimes-sizes-is-quite-important</a></p>\n<p><a href="https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/">Responsive Images: If you’re just changing resolutions, use srcset.</a></p>',timeToRead:2,excerpt:"Cung cấp kích thước ảnh trên  Thay vì fix luôn 1 kích thước hình cụ thể, trên thuộc tính   chúng ta báo kích thước của hình tương ứng, cho…",frontmatter:{title:"Tầm quan trọng của thuộc tính sizes trong thẻ img",cover:"",date:"2018-07-30",category:null,tags:["css","mobile-web-specialist"],desc:"Một tình huống cơ bản product slider images, trên điện thoại, chúng ta có mỗi slide một ảnh với chiều ngang 320px, trên desktop chúng ta có 6 ảnh/slide, ảnh rộng 160px, tức là kích thước ảnh trên desktop nhỏ hơn trên di động, dùng srcset giải quyết vấn đề này như thế nào"},fields:{slug:"/2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img"}}},pathContext:{slug:"/2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img",prev:{frontmatter:{title:"Những điều có thể làm với pointer-events",desc:"Một vài ứng dụng khác của pointer-events",type:"post",category:null,tags:["css"],date:"2018-08-01",cover:""},fields:{slug:"/2018-08-01-huong-dan-pointer-events-nhung-dieu-ban-co-the-lam"}},next:{frontmatter:{title:"Làm việc với date trong javascript",desc:"Làm việc với kiểu ngày tháng trong javascript không phức tạp lắm, nhưng rất thường xài",type:"post",category:null,tags:["javascript"],date:"2018-07-29",cover:"https://flaviocopes.com/javascript-dates/Screen%20Shot%202018-07-06%20at%2007.20.58.png"},fields:{slug:"/2018-07-29-huong-dan-javascript-date-lam-viet-voi-javascript-date"}}}}}});
//# sourceMappingURL=path---2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img-478664aec8e6bfce3e2b.js.map