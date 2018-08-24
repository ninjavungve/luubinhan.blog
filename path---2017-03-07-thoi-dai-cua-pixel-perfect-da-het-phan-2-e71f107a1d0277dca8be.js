webpackJsonp([0xadd2b5e87aed],{1259:function(n,h){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#grid">Grid</a></li>\n<li><a href="#responsive-design">Responsive design</a></li>\n<li><a href="#%C4%91%E1%BB%ABng-s%C3%A1ng-t%E1%BA%A1o-ra-c%C3%A1i-c%C3%B3-s%E1%BA%B5n">Đừng sáng tạo ra cái có sẵn</a></li>\n<li><a href="#hi%E1%BB%87u-%E1%BB%A9ng">Hiệu ứng</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="grid"><a href="#grid" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Grid</h1>\n<p>Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như <a href="http://getbootstrap.com/css/#grid" target="_blank">Bootstrap Grid</a>. Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm trọng, nó giải quyết phần lớn các yêu cầu cơ bản về layout, thống nhất sử dụng ngay từ đầu sẽ giúp ít rất nhiều cho mấy anh developer. Quan trọng nhất nên lưu ý là hệ thống grid ngày nay sử dụng độ rộng tương đối (theo giá trị phần trăm của container) và khoảng cách padding cố định. Bạn có thể đọc <a href="https://medium.com/sketch-app-sources/fluid-grid-systems-in-sketch-3-9-2579133c6d08" target="_blank">bài viết sau</a> để hiểu cách xây dựng hệ thống grid trên Sketch</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*WLHweZ4cQQSK8hWOY96cbQ@2x.png"></p>\n<p>Khi sử dụng hệ thống grid như bootstrap bạn sẽ không bao giờ cần phải nói cho anh developer kích thước của từng cột là mấy, vì thực sự lúc này kích thước nó chỉ là một giá trị tương đối</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Q_qCy_5PPuR5bPciB5Vbeg@2x.png"></p>\n<h1 id="responsive-design"><a href="#responsive-design" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Responsive design</h1>\n<p>Bạn designer chỉ cần chỉ cho anh developer từng element nó sẽ như thế nào trên các kích thước màn hình khác nhau, luôn luôn nghĩ các element có một kích thước tương đối chứ không phải một giá trị cố định nào đó như 320 - 1024 -1920, vì giao diện responsive phải có khả năng thích nghi với nhiều dạng kích thước màn hình khác nhau nữa.</p>\n<p>Không chỉ vậy, một số hình có kích thước phụ thuộc vào container của nó, ví dụ trên desktop bạn cho một cái hình kích thước 200x200, nhưng trên điện thoại kích thước của màn hình sẽ là 375x667 đi, thì các hình này chắc chắn bể liền, thường thấy trên mấy cái thumbnail bài viết.</p>\n<p>Một lỗi thường thấy khác là quên rằng độ cao của một số element sẽ thay đổi theo <code class="language-text">container</code></p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*0odC4Yn4aHanIatRPU7P5w.gif"></p>\n<p>Sử dụng những <code class="language-text">breakpoint</code> căn bản: 320-375-768-1024-1280-1366-1920. Và tất nhiên tất cả các anh designer đều quên là giao diện đôi khi được xem trên màn hình lật ngang ra.</p>\n<p>Ví dụ bên dưới 2 cột hiển thị rất đẹp trên desktop nhưng do sự thay đổi độ cao trên mobile mà nó sẽ trở nên xấu xí</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*BWi61OpjqFEgHliraTHuLw@2x.png"></p>\n<h1 id="Đừng-sáng-tạo-ra-cái-có-sẵn"><a href="#%C4%90%E1%BB%ABng-s%C3%A1ng-t%E1%BA%A1o-ra-c%C3%A1i-c%C3%B3-s%E1%BA%B5n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đừng sáng tạo ra cái có sẵn</h1>\n<p>Nếu không có thời gian, hoặc không chắc có thể customize những component nhỏ xíu như cái dropdown theo kiểu "thích vẽ sau vẻ", hỏi anh developer xem anh có suggest cái thư viện nào có sẵn, thay vì làm lại cái người ta đã làm tốt lắm rồi. Một ví dụ kinh điển là cái datepicker. Rát nhiều designer nghĩ chỉ cần vẽ cái lịch với con số trên đó, mà quên rằng</p>\n<ul>\n<li>Hover effect trên từng ngày</li>\n<li>Trạng thái ngày hiện tại</li>\n<li>Làm sau đánh dấu ngày được chọn</li>\n<li>Làm sau thay đổi tháng, năm</li>\n<li>Ngày trước và sau của tháng hiện tại</li>\n</ul>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Cgndb4fH9aXPnrLIuyuE4Q@2x.png"></p>\n<p>Chúng ta đang sống trong cái thời đại mà mọi người đều cố xây dựng mọi thứ của riêng mình (style nhật bổn). Đôi khi, có một sản phẩm chạy dược cho khách hàng thì tốt hơn là lãng phí thời gian và tiền bạc cho một anh designer ngồi đó sáng tạo ra những thứ người ta đã có sẵn. Designer phải biết rằng anh có thể sử dụng những thư viện và component có sẵn  để hoàn tất project. Nó sẽ giảm đi effect không chỉ của designer mà còn cả developer ngồi đó tìm ra những giải pháp không thực sự cần thiết</p>\n<h1 id="hiệu-ứng"><a href="#hi%E1%BB%87u-%E1%BB%A9ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hiệu ứng</h1>\n<p>Thay vì ngồi viết note giải thích các trang flow đi như thế nào, viết docs như vậy thực sự méo cần thiết. Designer chỉ cần sử dụng những trang như InVision hay Axure để biểu diễn cái flow,  dụng Principle, Framer, Adobe After Effect để mô tả mấy hiệu chạy thế nào. Nó sẽ giảm đi những hiểu nhầm giữa designer và developer, khách hàng</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*yEMXAwVff__nrM_OCwLknw.gif"></p>\n<p>Phần 3 - UI kits, Export, Element State, Line-height, Fonts</p>',timeToRead:3,excerpt:"Grid Responsive design Đừng sáng tạo ra cái có sẵn Hiệu ứng Grid Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến…",frontmatter:{title:"Thời đại của Pixel Perfect Design đã hết từ lâu - Phần 2",cover:"",date:"2017-03-07",category:"javascript",tags:["css","ux-ui"],desc:"Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như Bootstrap Grid. Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm trọng..."},fields:{slug:"/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2"}}},pathContext:{slug:"/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2",prev:{frontmatter:{title:"Thời đại của Pixel Perfect Design đã hết từ lâu - Phần 3",desc:"UI kit là tất cả những elment bạn đang sử dụng trong project, nếu là dân React có thể gọi là component. Sau này khi muốn maintenance sẽ dễ dàng hơn khi dự án ngày càng phình ra.",type:"post",category:"javascript",tags:["css","ux-ui"]},fields:{slug:"/2017-03-08-thoi-dai-cua-pixel-perfect-da-het-phan-3"}},next:{frontmatter:{title:"Thời đại của Pixel Perfect Design đã hết từ lâu",desc:"Làm front end được kha khá năm, đứng trung gian giữa anh developer và anh designer, được tiếp xúc với rất nhiều designer từ cao cấp tới mới ra trường, mình có thể khẳng định là những ảnh designer dù là tự học hay được đào tạo bài bảng qua trường lớp",type:"post",category:"ux-ui",tags:["css","ux-ui"]},fields:{slug:"/2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau"}}}}}});
//# sourceMappingURL=path---2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2-e71f107a1d0277dca8be.js.map