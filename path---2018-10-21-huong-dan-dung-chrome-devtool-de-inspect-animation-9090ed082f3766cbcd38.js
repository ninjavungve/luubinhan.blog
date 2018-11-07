webpackJsonp([0xf6afa1e715ac],{1312:function(t,n){t.exports={data:{markdownRemark:{html:'<p>Ấn <code class="language-text">Ctrl + Shift + I</code> để mở Chrome DevTools. Nhìn lên góc phải, chỗ có 3 dấu chấm, chọn vào <strong>More tools</strong> > <strong>Animations</strong></p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/activateInDevTools.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<p>F5 lại trang để bắt đầu xem phân tích animation</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/afterRefresh.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<p>Di chuyển nút tròn màu đỏ (gọi là playhead) trên timeline đến vị trí tương ứng với thời gian của animation</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/animationGraphs.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<p>Mỗi element đang chạy animate sẽ được đại diện bằng một màu line khác nhau. Trên mỗi line này sẽ có các keyframe</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/calculateKeyframePercentage.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<h1 id="delay-và-duration"><a href="#delay-v%C3%A0-duration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Delay và Duration</h1>\n<p>2 thay đổi này sẽ update lại css trên tab <strong>Styles</strong></p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/delayAnimation.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<p>Để thay đổi delay, rê chuột lên đường line đến khi nào nhìn thấy trỏ chuột chuyển thành hình bàn tay, kéo rê qua lại để thấy giá trị css được update</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/lengthenAnimation.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<p>Tăng duration của animation, rê chuột lên trên keyframe cuối cùng đến khi thấy chuyển thành mũi tên 2 đầu, kéo rê qua lại để tăng hoặc giảm thời gian.</p>\n<h1 id="cubic-bezier"><a href="#cubic-bezier" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cubic bezier</h1>\n<p>Inspect đến element có animation, phía trước thuộc tính animation, có một ô vuông nhỏ màu tím, click vào để mở popup chỉnh cubic bezier.</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/openCurveEditor.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<p>Có thể chọn theo preset có sẵn, hoặc dùng chuột kéo theo ý thích, sau đó copy lại css đã được thay đổi</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/curveEditorPanel.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<h1 id="xoay-layer"><a href="#xoay-layer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xoay layer</h1>\n<p>Một tính năng cũng khá hay khác là visualize các layer được sử dụng, bao gồm tùy chọn xoay và xem trên nhiều góc độ để hiểu rõ hơn cách mọi thứ chạy</p>\n<p>Để mở bảng Layer, vào **More Tools > Layers **</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/openLayers.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<p>Dùng công cụ này để xoay các layer theo góc độ mong muốn</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/rotateMode.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate">\n<img src="https://cms-assets.tutsplus.com/uploads/users/53/posts/31505/image/rotatedLayers.png" alt="Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate"></p>\n<p><a href="https://webdesign.tutsplus.com/articles/quick-tip-chrome-animation-dev-tools--cms-31505">https://webdesign.tutsplus.com/articles/quick-tip-chrome-animation-dev-tools--cms-31505</a></p>\n<p>Đọc thêm <a href="https://webdesign.tutsplus.com/courses/10-css3-projects-ui-and-layout">10 CSS3 Projects: UI and Layout</a></p>\n<p><a href="http://webdesign.tutsplus.com/courses/easing-in-to-cubic-bezier-functions">Cubic bezier</a></p>',timeToRead:2,excerpt:"Ấn   để mở Chrome DevTools. Nhìn lên góc phải, chỗ có 3 dấu chấm, chọn vào  More tools  >  Animations F5 lại trang để bắt đầu xem phân tích…",frontmatter:{title:"Hướng dẫn inspect animation với Chrome DevTools",cover:"",date:"2018-10-21",category:null,tags:["chrome","animation"],desc:"Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate."},fields:{slug:"/2018-10-21-huong-dan-dung-chrome-devtool-de-inspect-animation"}}},pathContext:{slug:"/2018-10-21-huong-dan-dung-chrome-devtool-de-inspect-animation",prev:{frontmatter:{title:"Sử dụng border-radius để vẽ custom shape",desc:"Trick hay trong CSS sử dụng border-radius để vẽ hình",type:"post",category:null,tags:["css"],date:"2018-10-22",cover:"https://9elements.com/io/images/border-radius-7.png"},fields:{slug:"/2018-10-22-huong-dan-dung-border-radius-ve-custom-shape"}},next:{frontmatter:{title:"Sử dụng localStorage trên website như thế nào",desc:"Kiến thức căn bản sử dụng localStorage để lưu thông tin cần thiết xuống trình duyệt",type:"post",category:null,tags:["javascript"],date:"2018-10-21",cover:""},fields:{slug:"/2018-10-21-huong-dan-su-dung-local-storage"}}}}}});
//# sourceMappingURL=path---2018-10-21-huong-dan-dung-chrome-devtool-de-inspect-animation-9090ed082f3766cbcd38.js.map