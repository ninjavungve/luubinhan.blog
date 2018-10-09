webpackJsonp([0xa586da2accbc],{1217:function(n,t){n.exports={data:{markdownRemark:{html:'<!-- MarkdownTOC -->\n<ul>\n<li>Google Accelerated Mobile Pages - Nó là gì?</li>\n<li>Ưu điểm của Google AMP</li>\n<li>Cài đặt Google AMP for Wordpress</li>\n</ul>\n<!-- /MarkdownTOC -->\n<p>Trong giới làm web ai cũng biết một điều "Speed is King". Dân tình thích mưa một gói hàng trên mạng và phải được giao ngay lập tức, ít nhất là trong 24g, chậm trễ vài ngày là thấy hông vui, thích post tấm hình lên facebook có triệu triệu lượt người like ngay lập tức.</p>\n<p>Kết quả <a href="https://blogs.akamai.com/2015/06/performance-matters-more-than-ever.html" target="_blank">thống kê</a> cảm nhận người dùng</p>\n<ul>\n<li>Với những trang bán hàng, 30% người dùng mong muốn trang web phải load xong trong 1 giây.</li>\n<li>Phân nữa khách hàng sẽ không quay lại mua sắm trực tuyến nếu thủ tục checkout rườm ra lâu lắc</li>\n<li>90% người mua hàng sử dụng điện thoại để tham khảo thông tin trước khi mua sắm</li>\n<li>74% người dùng sẽ đóng ngay trang web nếu nó load quá 5 giây</li>\n</ul>\n<p>Túm lại phải optimize tối đa cho trang web load sau thật nhanh. Một cách mới nếu muốn tối ưu cho người dùng điện thoại là dùng Google Accelerated Mobile Pages</p>\n<h2 id="google-accelerated-mobile-pages---nó-là-gì"><a href="#google-accelerated-mobile-pages---n%C3%B3-l%C3%A0-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Google Accelerated Mobile Pages - Nó là gì?</h2>\n<p>Gọi tắt là Google AMP là một dịch vụ của google cho phép lưu một phiên bản của trang trên google host, ưu điểm là khi truy cập vào trang này trên mobile thì nó gần như được load ngay lập tức thông qua trang tìm kiếm.</p>\n<p>Lúc search trên điện thoại bản sẽ thấy kết quá trả về một số trang có ký hiệu tia sét phía trước</p>\n<p><img src="https://luckyluu.files.wordpress.com/2016/11/amp-example1.png" alt="Lúc search trên điện thoại bản sẽ thấy kết quá trả về một số trang có ký hiệu tia sét phai trước"></p>\n<p>Tất nhiêu để làm được chuyện này thì phiên bản lưu trên google đã cắt bớt một số thành phần không cần thiết trên trang</p>\n<h2 id="Ưu-điểm-của-google-amp"><a href="#%C6%AFu-%C4%91i%E1%BB%83m-c%E1%BB%A7a-google-amp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ưu điểm của Google AMP</h2>\n<p>Một vài ưu điểm chính dễ thấy</p>\n<ul>\n<li>Có cơ hội được hiển thị trên top bài viết trên trang kết quả tìm kiếm (thanh cuộn ngang)</li>\n<li>Trãi nghiệm người dùng tốt hơn</li>\n<li>Được google rank cao hơn, google đánh giá dựa trên tốc độ trang web load trên điện thoại</li>\n<li>Setup đơn gian giản chưa tới 20 giây</li>\n<li>Hiển thị ads trên phiên bản AMP khác với bình thường</li>\n</ul>\n<h2 id="cài-đặt-google-amp-for-wordpress"><a href="#c%C3%A0i-%C4%91%E1%BA%B7t-google-amp-for-wordpress" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cài đặt Google AMP for Wordpress</h2>\n<p><a href="https://wordpress.org/plugins/amp/">Plugin dành cho wordpress có thể tìm tại đây</a></p>\n<p>Nói chung cài xong, active lên là chạy không cần setup gì hết. Sao khi chạy thành công trên mỗi bài viết thêm vào phía sao đường dẫn "/amp" để kiểm tra nó có hoạt dộng chưa</p>\n<p><em>Ghi chú</em></p>\n<ul>\n<li>Plugin này chỉ chạy trên Post không chạy cho page</li>\n<li>Không hổ trợ ads và thiết đặt một số thuộc tính riêng của trang AMP</li>\n<li>Không thay đổi cách hiện thị của trang AMP</li>\n</ul>\n<p>Một số plugin khác có thể sử dụng</p>\n<p><a href="https://wordpress.org/plugins/custom-amp-accelerated-mobile-pages/">Custom AMP</a></p>\n<p><a href="https://wordpress.org/plugins/accelerated-mobile-pages/">AMP for WP</a></p>\n<p>Dịch và chỉnh sửa từ <a href="http://wplift.com/google-amp">http://wplift.com/google-amp</a></p>',timeToRead:3,excerpt:"Google Accelerated Mobile Pages - Nó là gì? Ưu điểm của Google AMP Cài đặt Google AMP for Wordpress Trong giới làm web ai cũng biết một điều…",frontmatter:{title:"Wordpress và Google Accelerated Mobile Pages (AMP): Tất cả những gì bạn cần biết",cover:"",date:"2016-11-07",category:"wordpress",tags:["wordpress","SEO"],desc:"Trong giới làm web ai cũng biết một điều Speed is King. Dân tình thích mua một gói hàng trên mạng và phải được giao ngay lập tức, ít nhất là trong 24g, chậm trễ vài ngày là thấy hông vui, thích post tấm hình lên facebook có triệu triệu lượt người like ngay lập tức."},fields:{slug:"/2016-11-07-wordpress-va-google-accelerated-mobile-pages-amp-tat-ca-nhung-gi-ban-can-biet"}}},pathContext:{slug:"/2016-11-07-wordpress-va-google-accelerated-mobile-pages-amp-tat-ca-nhung-gi-ban-can-biet",prev:{frontmatter:{title:"ES6 Căn bản (phần 1) - Những nâng cấp cho Object",desc:"Nếu bạn đã đọc bài FrontEnd Developer 2016 nên học gì? Chắc bạn đã rối không biết bắt đầu từ đâu nếu muốn dấn thân vào cuộc chơi nhiều cám dỗ này. Mình nghĩ cái đầu tiên cần học là ES6.",type:"post",category:"javascript",tags:["javascript"],date:"2016-11-15",cover:""},fields:{slug:"/2016-11-15-chuong-1-es-6-can-ban"}},next:{frontmatter:{title:"FrontEnd Developer 2016 thì nên học cái gì?",desc:"Hey mình có dự án mới về web, không code web lâu quá rồi, không biết bây giờ viết web thì nên làm bằng gì? Mình chỉ là frontend developer, nhưng bạn đã tìm đúng người rồi đó, mình làm web cũng đã lâu, mình có thể chỉ bạn biết cần học gì để tạo web apps",type:"post",category:"javascript",tags:["javascript","css"],date:"2016-04-12",cover:""},fields:{slug:"/2016-04-12-front-end-developer-2016-nen-hoc-gi"}}}}}});
//# sourceMappingURL=path---2016-11-07-wordpress-va-google-accelerated-mobile-pages-amp-tat-ca-nhung-gi-ban-can-biet-f64f1b15d1ca3919be2c.js.map