webpackJsonp([65],{"./node_modules/json-loader/index.js!./.cache/json/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2.json":function(n,t){n.exports={data:{markdownRemark:{html:'<!-- MarkdownTOC -->\n<ul>\n<li>Grid</li>\n<li>Responsive design</li>\n<li>Đừng sáng tạo ra cái có sẵn</li>\n<li>Hiệu ứng</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1>Grid</h1>\n<p>Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như <a href="http://getbootstrap.com/css/#grid" target="_blank">Bootstrap Grid</a>. Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm trọng, nó giải quyết phần lớn các yêu cầu cơ bản về layout, thống nhất sử dụng ngay từ đầu sẽ giúp ít rất nhiều cho mấy anh developer. Quan trọng nhất nên lưu ý là hệ thống grid ngày nay sử dụng độ rộng tương đối (theo giá trị phần trăm của container) và khoảng cách padding cố định. Bạn có thể đọc <a href="https://medium.com/sketch-app-sources/fluid-grid-systems-in-sketch-3-9-2579133c6d08" target="_blank">bài viết sau</a> để hiểu cách xây dựng hệ thống grid trên Sketch</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*WLHweZ4cQQSK8hWOY96cbQ@2x.png"></p>\n<p>Khi sử dụng hệ thống grid như bootstrap bạn sẽ không bao giờ cần phải nói cho anh developer kích thước của từng cột là mấy, vì thực sự lúc này kích thước nó chỉ là một giá trị tương đối</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Q_qCy_5PPuR5bPciB5Vbeg@2x.png"></p>\n<h1>Responsive design</h1>\n<p>Bạn designer chỉ cần chỉ cho anh developer từng element nó sẽ như thế nào trên các kích thước màn hình khác nhau, luôn luôn nghĩ các element có một kích thước tương đối chứ không phải một giá trị cố định nào đó như 320 - 1024 -1920, vì giao diện responsive phải có khả năng thích nghi với nhiều dạng kích thước màn hình khác nhau nữa.</p>\n<p>Không chỉ vậy, một số hình có kích thước phụ thuộc vào container của nó, ví dụ trên desktop bạn cho một cái hình kích thước 200x200, nhưng trên điện thoại kích thước của màn hình sẽ là 375x667 đi, thì các hình này chắc chắn bể liền, thường thấy trên mấy cái thumbnail bài viết.</p>\n<p>Một lỗi thường thấy khác là quên rằng độ cao của một số element sẽ thay đổi theo <code>container</code></p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*0odC4Yn4aHanIatRPU7P5w.gif"></p>\n<p>Sử dụng những <code>breakpoint</code> căn bản: 320-375-768-1024-1280-1366-1920. Và tất nhiên tất cả các anh designer đều quên là giao diện đôi khi được xem trên màn hình lật ngang ra.</p>\n<p>Ví dụ bên dưới 2 cột hiển thị rất đẹp trên desktop nhưng do sự thay đổi độ cao trên mobile mà nó sẽ trở nên xấu xí</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*BWi61OpjqFEgHliraTHuLw@2x.png"></p>\n<h1>Đừng sáng tạo ra cái có sẵn</h1>\n<p>Nếu không có thời gian, hoặc không chắc có thể customize những component nhỏ xíu như cái dropdown theo kiểu "thích vẽ sau vẻ", hỏi anh developer xem anh có suggest cái thư viện nào có sẵn, thay vì làm lại cái người ta đã làm tốt lắm rồi. Một ví dụ kinh điển là cái datepicker. Rát nhiều designer nghĩ chỉ cần vẽ cái lịch với con số trên đó, mà quên rằng</p>\n<ul>\n<li>Hover effect trên từng ngày</li>\n<li>Trạng thái ngày hiện tại</li>\n<li>Làm sau đánh dấu ngày được chọn</li>\n<li>Làm sau thay đổi tháng, năm</li>\n<li>Ngày trước và sau của tháng hiện tại</li>\n</ul>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Cgndb4fH9aXPnrLIuyuE4Q@2x.png"></p>\n<p>Chúng ta đang sống trong cái thời đại mà mọi người đều cố xây dựng mọi thứ của riêng mình (style nhật bổn). Đôi khi, có một sản phẩm chạy dược cho khách hàng thì tốt hơn là lãng phí thời gian và tiền bạc cho một anh designer ngồi đó sáng tạo ra những thứ người ta đã có sẵn. Designer phải biết rằng anh có thể sử dụng những thư viện và component có sẵn  để hoàn tất project. Nó sẽ giảm đi effect không chỉ của designer mà còn cả developer ngồi đó tìm ra những giải pháp không thực sự cần thiết</p>\n<h1>Hiệu ứng</h1>\n<p>Thay vì ngồi viết note giải thích các trang flow đi như thế nào, viết docs như vậy thực sự méo cần thiết. Designer chỉ cần sử dụng những trang như InVision hay Axure để biểu diễn cái flow,  dụng Principle, Framer, Adobe After Effect để mô tả mấy hiệu chạy thế nào. Nó sẽ giảm đi những hiểu nhầm giữa designer và developer, khách hàng</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*yEMXAwVff__nrM_OCwLknw.gif"></p>\n<p>Phần 3 - UI kits, Export, Element State, Line-height, Fonts</p>',frontmatter:{date:"March 07, 2017",path:"/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2",tags:["css","ux-ui"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu - Phần 2",desc:"Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như Bootstrap Grid. Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm trọng..."}}},pathContext:{prev:{excerpt:"UI kits Xuất file Element state Line-Height Font Kết UI kits UI kit là tất cả những elment bạn đang sử dụng trong project, nếu là dân React có thể gọi là component. Sau này khi muốn maintenance sẽ dễ dàng hơn khi dự án ngày càng phình ra. Trong cái...",html:'<!-- MarkdownTOC -->\n<ul>\n<li>UI kits</li>\n<li>Xuất file</li>\n<li>Element state</li>\n<li>Line-Height</li>\n<li>Font</li>\n<li>Kết</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1>UI kits</h1>\n<p>UI kit là tất cả những elment bạn đang sử dụng trong project, nếu là dân React có thể gọi là component. Sau này khi muốn maintenance sẽ dễ dàng hơn khi dự án ngày càng phình ra.</p>\n<p>Trong cái UI kit cần xác định những thành phần: bảng màu sử dụng, typography, các component như button, input, slider, hover, active state, cũng như người lập trình luôn tâm niệm nếu lập lại một đoạn code một lần thứ 2 trong đời thì cho nó ngay vào thư viện để tái sử dụng. Thường khi các bạn designer không có làm kiểu này thì trước sau gì cũng xảy ra trường hợp cùng một button mà chổ này khác chổ kia khác một chút, mà các bạn tester và khách hàng khác cái giao diện là đè đầu thằng developer ra chửi, trong khi cái đó nhiều khi bạn designer không cố ý mà vô tình quên mất mình đã format cái button đó ở đâu đó rồi.</p>\n<p>Bạn có thể sử dụng <a target="_blank" href="https://www.invisionapp.com/craft"> Craft</a> để làm thư viện UI</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*72sMv26eNctbPvOLKZt-Mw@2x.png"></p>\n<h1>Xuất file</h1>\n<p>Giúp ảnh developer, hãy sử dụng những công cụ sau</p>\n<ul>\n<li><a href="https://www.invisionapp.com/feature/inspect">Invision Inspect</a></li>\n<li><a href="https://zeplin.io/">Zeplin</a></li>\n<li><a href="https://zeplin.io/">Sympli</a></li>\n<li><a href="https://github.com/utom/sketch-measure">Sketch Measure</a> </li>\n</ul>\n<h1>Element state</h1>\n<p>Các bạn design hay chỉ làm mỗi cái trạng thái default mà quên rằng một element sẽ có rất nhiều state khác như, như active, hover, focus, visited</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*oK0YQWhM2Td5A6rqHWlYTA@2x.png"></p>\n<h1>Line-Height</h1>\n<p>Có thể khẳng định là 100% anh designer sẽ không để ý đến giá trị này, mà cứ đè ra đo độ cao chính xác từng pixel của element, trong khi không hề biết cái line-height sẽ ảnh hưởng đến độ cao này, đâm ra anh quên cộng vào, và khi anh developer set cái padding trong code là 13, 14 thì anh la làng là nó phải 20, trong khi nếu cộng vào cái line-height nữa nó sẽ ra là 20.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*HnnuoS89S6xCdFwWMG9Q2A@2x.png"></p>\n<p>Một ưu điềm khác khi sử dụng Sketch là lúc làm sẽ thấy ngay sự ảnh hưởng line-height, trong khi photoshop thì sẽ không thấy được</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Vqrt-1Vy2Ng1SqeNXG2P0g@2x.png"></p>\n<p>Giá trị line-height nên không nên thay đổi nhiều quá trên từng element mà thông nhất xài chung một kiểu</p>\n<h1>Font</h1>\n<p>Trước hết, xác định là: "LUÔN LUÔN sử dụng <a href="https://fonts.google.com/">Google Fonts</a>" nếu muốn xài một font không có sẵn trong máy, bạn developer sẽ không phải đi mò mẫm convert cái font chữ của bạn design chôm ở đâu đó, một công việc vốn quá nhiều rủi ro do vấn đề bản quyền, vấn đề lỗi convert có thể xảy ra, lỗi hiển thị trên các trình duyệt khác nhau.</p>\n<p>Cũng không bao giờ được xài nhiều hơn 2 font ngoài hệ thống, quá nhiều font phải load, làm ảnh hưởng tốc độ load site. Không sử dụng quá nhiều font style italic, bold, light, thin, ragular, một đóng hầm bà lằng, luôn nhớ trong đầu less is more</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*KeLj5M7QYKIKkgIneNbKnQ@2x.png"> </p>\n<h1>Kết</h1>\n<p>Thằng designer thì vốn không ưa thằng developer, chê thằng developer không thấy được sự sáng tạo của nó, còn thằng developer thì luôn chửi thằng designer, nó cứ chế biến mấy cái tào lào khó implement chết mịa luôn. Tất cả những vấn đề trên có thể giải quyết bằng một cách thôi: TRAO ĐỔI. Trao đổi càng sớm, trao đổi khi có vấn đề sẽ tránh cho ra kết quả mà nhìn vào không giám nhận là con của mình. Với tất cả những dự án dù lơn hay nhỏ thì luôn luôn bạn phải cân đối giữa kết quả mong muốn, thời gian và chi phí phải bỏ ra</p>',id:"E:/anluu/luckyluu/posts/2017-03-08-thoi-dai-cua-pixel-perfect-da-het-phan-3/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-03-08T13:35:13.234Z",path:"/2017-03-08-thoi-dai-cua-pixel-perfect-da-het-phan-3",tags:["css","ux-ui"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu - Phần 3"}},next:{excerpt:"Làm front end được kha khá năm, đứng trung gian giữa anh developer và anh designer, được tiếp xúc với rất nhiều designer từ cao cấp tới mới ra trường, mình có thể khẳng định là những ảnh designer dù là tự học hay được đào tạo bài bảng qua trường lớp...",html:'<p>Làm front end được kha khá năm, đứng trung gian giữa anh developer và anh designer, được tiếp xúc với rất nhiều designer từ cao cấp tới mới ra trường, mình có thể khẳng định là những ảnh designer dù là tự học hay được đào tạo bài bảng qua trường lớp, mỗi anh điều có một kiểu làm việc rất riêng, trong giới designer, đặc biệt là web design, sẽ chẳng anh nào đi theo một cái guide chung nào cả, khác hẳng với developer, nơi mà mọi thứ luôn được chuẩn hóa từng ngày, một anh developer mới vào công ty được thẩy vô trong một cái dự án bự tổ chảng, sau vài ngày training những "luật lệ" được đề ra từ lớp người đi trước là ảnh có thể follow theo và bắt đầu làm việc với một cách mượt mà. Ở góc độ của một người đứng giữa, mình luôn cho rằng anh developer luôn luôn là người nên đặt ra các luật lệ mà anh designer phải tuân theo, chứ không phải ngược lại.</p>',id:"E:/anluu/luckyluu/posts/2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-03-06T13:35:13.234Z",path:"/2017-03-06-thoi-dai-cua-pixel-effect-design-da-het-tu-lau",tags:["css","ux-ui"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu"}}}}}});
//# sourceMappingURL=path---2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2-364b7882272f2403ce17.js.map