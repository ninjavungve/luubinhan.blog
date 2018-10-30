webpackJsonp([66474107084834],{1334:function(n,t){n.exports={data:{markdownRemark:{html:'<p>Nói đến focus là nói đến element nào (như input, button, link, checkbox, select) đang nhận input từ bàn phím, hoặc clipboard nếu user gọi paste</p>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/keyboard-focus.png" alt="Giới thiệu focus"></p>\n<p>Item đang có trạng thái focus sẽ được xác định bằng vòng focus ring, tùy theo mỗi trình duyệt mà cách hiển thị khác nhau.</p>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/sign-up.png" alt="Giới thiệu focus"></p>\n<p>Mình từng gặp tình huống là lướt web bằng smart tv không có bàn phím và chuột, thao tác bằng remote, hoặc một số người sử dụng máy tính chủ yếu bằng bàn phím, không thích xài chuột. Focus lúc này tất nhiên rất quan trọng.</p>\n<blockquote>\n<p>Luôn đảm bảo ứng dụng có thể thao tác bình thường dù không cần chuột, chỉ cần bàn phím</p>\n</blockquote>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/system-prefs2.png" alt="Giới thiệu focus"></p>\n<h1 id="focusable"><a href="#focusable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Focusable</h1>\n<p>Một số element của HTML như text field, button, select được gọi là <em>focusable</em>, nghĩa là mặc định nó đã được chèn vào thứ tự tab và sự kiện keyboard mà không cần viết thêm code gì cả </p>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/implicitly-focused.png" alt="Giới thiệu focus"></p>\n<p>Những element khác như <code class="language-text">&lt;p/&gt;</code>, <code class="language-text">&lt;div/&gt;</code> không focus khi chúng ta ấn tab, không cần phải focus vào những element mà mình không cần tương tác gì với nó</p>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/not-all-elements.png" alt="Giới thiệu focus"></p>\n<h1 id="thử"><a href="#th%E1%BB%AD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thử</h1>\n<p>Thử mở trang <a href="http://udacity.github.io/ud891/lesson2-focus/01-basic-form/">airline site mockup page</a> và tab thử qua các element, trên trang này đang tắt hết các sự kiện mouse input.</p>\n<p><a href="https://developers.google.com/web/fundamentals/accessibility/focus/">Link bài viết gốc</a></p>',timeToRead:1,excerpt:"Nói đến focus là nói đến element nào (như input, button, link, checkbox, select) đang nhận input từ bàn phím, hoặc clipboard nếu user gọi…",frontmatter:{title:"Giới thiệu focus",cover:"",date:"2018-10-05",category:null,tags:["javascript","ux-ui"],desc:"Chúng ta nói về focus và làm cách nào chúng ta sử dụng nó trong ứng dụng web"},fields:{slug:"/2018-10-05-gioi-thieu-focus"}}},pathContext:{slug:"/2018-10-05-gioi-thieu-focus",prev:{frontmatter:{title:"Nâng cao tốc độ Component",desc:"Bài viết của team làm Facebook Ads chia sẽ, cùng điểm qua các vấn đề căn bản để tối ưu component",type:"post",category:null,tags:["javascript","react","performance"],date:"2018-10-06",cover:""},fields:{slug:"/2018-10-06-huong-dan-thiet-ket-component-de-nang-cao-toc-do"}},next:{frontmatter:{title:"Làm việc với Redux trong ứng dụng lớn",desc:"Cùng thảo luận xung quanh vấn đề ứng dụng thiên về dữ liệu lớn, rất lớn",type:"post",category:null,tags:["javascript","react","performance"],date:"2018-10-04",cover:""},fields:{slug:"/2018-10-04-huong-dan-redux-voi-ung-dung-lon"}}}}}});
//# sourceMappingURL=path---2018-10-05-gioi-thieu-focus-3e5c24a66d0251bfe27b.js.map