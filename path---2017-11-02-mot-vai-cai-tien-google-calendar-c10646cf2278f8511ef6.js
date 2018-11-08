webpackJsonp([36538256002433],{1219:function(n,h){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#gi%E1%BB%9Bi-thi%E1%BB%87u-t%C3%ADnh-n%C4%83ng-m%E1%BB%9Bi">Giới thiệu tính năng mới</a></li>\n<li><a href="#t%C3%A1ch-2-m%C3%A0n-h%C3%ACnh-xem-v%C3%A0-edit">Tách 2 màn hình xem và edit</a></li>\n<li><a href="#design-pattern">Design Pattern</a></li>\n</ul>\n<!-- /TOC -->\n<p>Cùng nhìn thử cách Google làm với:</p>\n<ol>\n<li>Giới thiệu một tính năng mới của sản phẩm</li>\n<li>Quyết định tách 2 tác vụ là <strong>xem</strong> và <strong>edit</strong> ra 2 màn hình khác nhau</li>\n<li>Áp dụng Google Material Design Pattern</li>\n</ol>\n<h2 id="giới-thiệu-tính-năng-mới"><a href="#gi%E1%BB%9Bi-thi%E1%BB%87u-t%C3%ADnh-n%C4%83ng-m%E1%BB%9Bi" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giới thiệu tính năng mới</h2>\n<p>Khi có một thay đổi về giao diện, hoặc tính năng sản phẩm sẽ có 2 mặt: người sử dụng sẽ cảm thấy rất hứng thú và một vài người thì rất sợ những thay đổi này, vì vốn đã quá quen với cách làm việc của hệ thống cũ. Giới thiệu và guide người sử dụng những thay đổi này để họ biết và chấp nhận nó là cần thiết.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*jedZ6ACXCLZTIXlA2SAw3w.png"></p>\n<p>Không ép buộc người sử dụng cập nhập tính năng mới ngay lập tức, Google hiển thị một thông báo nhỏ ở trên cùng để user biết có tính năng mới được cập nhập cho cái công cụ người dùng đã quá quen thuộc và sử dụng hàng ngày, kiểu như</p>\n<blockquote>\n<p>Cứ sử dụng Calendar như bình thường nhé, khi nào sẵn sàng thì cập nhập tính năng mới nè, vui lắm.</p>\n</blockquote>\n<p><a href="https://cdn-images-1.medium.com/max/2000/1*rxdA2Wzp4SmS6MleIHe7yw.png"></a></p>\n<p><a href="https://cdn-images-1.medium.com/max/2000/1*6aRa42RkpvmrokqUCXW9JQ.png"></a></p>\n<p>Như vậy với 3 cú click chuột cùng một vài câu thông báo ngắn gọn, user có thể cập nhập Calendar lên phiên bản mới, không những thế Google còn cho phép user quay lại phiên bạn cũ nếu thấy phiên bản mới khó sử dụng, khi đó một lời mời gởi feedback sẽ được gởi cho user trả lời cầu hỏi: Điều chi đã khiến em không thích phiên bản mới của anh. </p>\n<p>Việc phải duy trì 2 phiên bản đồng thời như vậy chứng tỏ Google rất giàu! Một chút chi phí đó để xây dựng lòng tin vào người sử dụng, người sử dụng bị cấy trong đầu ý nghĩ "Sản phẩm của Google thì nào cũng hướng tới tốt nhất cho người sử dụng"</p>\n<h2 id="tách-2-màn-hình-xem-và-edit"><a href="#t%C3%A1ch-2-m%C3%A0n-h%C3%ACnh-xem-v%C3%A0-edit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tách 2 màn hình xem và edit</h2>\n<p>Trước đây để xem những thông tin như địa điểm, mô tả, link phải chuyển tới một trang mới, bây giờ xem được trực tiếp trên một cửa sổ popup nhỏ ở ngay màn hình chính.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*VPdG6U1MRMrA0_vjMd0tyQ.png"></p>\n<p>Một ví dụ điển hình cho quyết định có nên tách trang để xem thông tin chi tiết và trang chỉnh sửa thông tin chi tiết, thường chúng ta xe gộp nó lại thành một. </p>\n<p>Nghe thì có vẻ là chuyện rất hiển nhiên thôi, nhưng các bạn sẽ nghe rất nhiều luồn ý kiến khác nhau từ những người làm trong team như "Tại sao không cho 2 trang thành 1 thôi, nơi user có thể có thể làm được mọi thứ, one stop solution". Nghe thì cũng rất hợp lý, nhưng khi thực hiện bạn sẽ bị một chuyện là quá nhiều control trên màn hình edit, trang nhìn sẽ vô cùng rối vì quá nhiều tính năng cần được show ra trên màn hình này, và khi có quá nhiều control trên một màn hình thì user chắc chắn bị rối. Đây là dựa trên lý thuyết JTBD - Job to be done, <a href="https://hbr.org/2016/09/know-your-customers-jobs-to-be-done">Xem thêm về JTBD</a></p>\n<p>Thử tưởng tượng, bạn ngồi xuống sắp xếp lịch công việc trong tháng tới, tuần tới, ngày tới, có phải bạn sẽ cần lướt qua những công việc được sắp xếp trước và sau để phân bố thời gian cho hợp lý.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*fW40s0zTUC1HtTK1O6SGbg.png"></p>\n<p>Với dạng tác vụ kiểu reminder hay event, user cần set thông tin giờ và địa điểm, một popup khác với chỉ 2 field quan trọng nhất này để user có thể chỉnh sửa ngay trên màn hình chính, nếu user muốn có nhiều thay đổi hơn nữa, có thể quyết định click "More option" để tới màn hình edit</p>\n<h2 id="design-pattern"><a href="#design-pattern" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Pattern</h2>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*s0wREfdCJb42NqMQlj6NTw.png" alt="Trang Settings cũ và mới"></p>\n<p>Trang Settings của Calendar giờ cũng được \'nâng cấp\' theo chuẩn Google\'s Material Design</p>\n<p>Nhìn vô là thấy liền Material Design giúp cho việc chuẩn hóa các sản phẩm của Google theo UX nhanh và hiệu quả như thế nào</p>\n<ul>\n<li>Những thông tin liên quan được group vào trong Card giúp dễ scan nội dung bên trong hơn</li>\n<li>Bên trong Card, các cụm control như Dropdown, Checkbox, Radio được gắn liền kề với phần mô tả, thay vì trước đây user phải hướng mắt theo đường zizag trái phải, trái phải, giờ nhìn từ trên xuống là thấy liền</li>\n<li>Nút Back nằm trên cùng giúp Web App và Mobile App gần như giống nhau về trải nghiệm</li>\n<li>Chữ nghĩa cũng được sắp xếp lại theo hướng kế thừa từ to tới nhỏ, tăng độ tương phản chứ không còn mờ mờ như hồi xưa.</li>\n</ul>',timeToRead:4,excerpt:"Giới thiệu tính năng mới Tách 2 màn hình xem và edit Design Pattern Cùng nhìn thử cách Google làm với: Giới thiệu một tính năng mới của sản…",frontmatter:{title:"Một vài cải tiến của Google Calendar",cover:"",date:"2017-11-02",category:"ux-ui",tags:["ux-ui"],desc:"Cách đây hơn một tuần Google Calendar vừa có nâng cấp lên bản mới, cùng nhìn thử giao diện có gì thay đổi"},fields:{slug:"/2017-11-02-mot-vai-cai-tien-google-calendar"}}},pathContext:{slug:"/2017-11-02-mot-vai-cai-tien-google-calendar",prev:{frontmatter:{title:"Higher-Order function trong javascript",desc:"Một trong những đặc thù của Javascript khiến nó rất phù hợp với function programming là cho phép viết function higher-order, kiểu function cho phép nhận một function khác như một argument hoặc trả về một function",type:"post",category:"javascript",tags:["javascript"],date:"2017-11-09",cover:""},fields:{slug:"/2017-11-09-higher-order-function-trong-javascript"}},next:{frontmatter:{title:"React Children và React cloneElement",desc:"Tìm hiểu cách sử dụng react Children và react cloneElement",type:"post",category:"react",tags:["javascript","react"],date:"2017-10-27",cover:""},fields:{slug:"/2017-10-27-react-children-react-clone-element"}}}}}});
//# sourceMappingURL=path---2017-11-02-mot-vai-cai-tien-google-calendar-c10646cf2278f8511ef6.js.map