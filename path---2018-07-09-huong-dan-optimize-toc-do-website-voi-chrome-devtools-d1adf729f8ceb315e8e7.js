webpackJsonp([0xe1f1c5f8b3f4],{1300:function(e,n){e.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#b%C6%B0%E1%BB%9Bc-1-ki%E1%BB%83m-tra-trang-web-hi%E1%BB%87n-t%E1%BA%A1i-audits">Bước 1: Kiểm tra trang web hiện tại (Audits)</a></p>\n<ul>\n<li><a href="#x%C3%A1c-%C4%91%E1%BB%8Bnh-baseline">Xác định baseline</a></li>\n<li><a href="#%C4%91%E1%BB%8Dc-hi%E1%BB%83u-report">Đọc hiểu report</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#b%C6%B0%E1%BB%9Bc-2-th%E1%BB%AD-nghi%E1%BB%87m">Bước 2: Thử nghiệm</a></p>\n<ul>\n<li><a href="#b%E1%BA%ADt-text-compression">Bật text compression</a></li>\n<li><a href="#gi%E1%BA%A3m-k%C3%ADch-th%C6%B0%E1%BB%9Bc-%E1%BA%A3nh">Giảm kích thước ảnh</a></li>\n<li><a href="#b%E1%BB%8F-h%E1%BA%BFt-nh%E1%BB%AFng-resource-n%C3%A0o-block-vi%E1%BB%87c-render">Bỏ hết những resource nào block việc render</a></li>\n<li><a href="#h%E1%BA%A1n-ch%E1%BA%BF-t%E1%BB%91i-%C4%91a-c%C3%A1c-x%E1%BB%AD-l%C3%BD-%E1%BB%9F-main-threat">Hạn chế tối đa các xử lý ở main threat</a></li>\n</ul>\n</li>\n<li><a href="#t%E1%BB%95ng-k%E1%BA%BFt">Tổng kết</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="bước-1-kiểm-tra-trang-web-hiện-tại-audits"><a href="#b%C6%B0%E1%BB%9Bc-1-ki%E1%BB%83m-tra-trang-web-hi%E1%BB%87n-t%E1%BA%A1i-audits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bước 1: Kiểm tra trang web hiện tại (Audits)</h1>\n<p>Bước đầu tiên này có 2 công dụng chính</p>\n<ol>\n<li>Làm thước đo cho các thay đổi đã áp dụng</li>\n<li>Gợi ý những thay đổi nào thực sự ảnh hưởng nhiều tới tốc độ</li>\n</ol>\n<p>Trong bài này tác giả sẽ sử dụng trang <a href="https://glitch.com/edit/#!/tony?path=server.js:1:0">https://glitch.com/edit/#!/tony?path=server.js:1:0</a> để làm demo</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/editor.png"></p>\n<h2 id="xác-định-baseline"><a href="#x%C3%A1c-%C4%91%E1%BB%8Bnh-baseline" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xác định baseline</h2>\n<p>Mở Chrome DevTools, chuyển qua tab <strong>Audits</strong>, nó có thể bị ẩn sau nút <strong>More Panels</strong>, có hình cái hải đăng</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/audits.png" alt="Thiết đặt chính cho baseline"></p>\n<p>Thiết đặt như hình trên, sau đó click <strong>Run Audits</strong>, đợi nó chạy một tí sẽ có 1 cái report performance của site</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/report.png"></p>\n<p>Nếu thấy bất kỳ lỗi nào trên report, thử chạy trong 1 tab ẩn danh mới</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/error.png"></p>\n<h2 id="đọc-hiểu-report"><a href="#%C4%91%E1%BB%8Dc-hi%E1%BB%83u-report" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đọc hiểu report</h2>\n<p>Cái số ở trên cùng là thang điểm tổng hợp, càng cao càng tốt</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/overall.png"></p>\n<p>Ở mục <strong>Metrics</strong> cho kết quả các cách đánh giá, ví dụ như <strong>First Contentful Paint</strong> cho biết thời gian khi màn hình bắt đầu xuất hiện nội dung cho user, một milestone quan trọng để làm hài lòng user, <strong>First CPU Idle</strong> là thời điểm mà user có thể tương tác với site như click hay input gì đó, lúc này CPU của user đã có có thể xử lý yêu cầu</p>\n<p>Hover lên mỗi metric để hiển thị phần description của nó, và click <strong>Learn More</strong> để đọc document.</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/fmp.png"></p>\n<p>Bên dưới Metric là một số hình screenshoot trên từng thời gian khác nhau</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/screenshots.png"></p>\n<p><strong>Opportunities</strong> sẽ đưa ra những tips để improve page load</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/opportunities.png"></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/compression.png"></p>\n<p><strong>Diagnostics</strong> cung cấp thêm thông tin các nhân tố tác động lên tốc độ load</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/diagnostics.png"></p>\n<p><strong>Passed Audits</strong> là những điều trang hiện tại làm tốt</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/passed.png"></p>\n<h1 id="bước-2-thử-nghiệm"><a href="#b%C6%B0%E1%BB%9Bc-2-th%E1%BB%AD-nghi%E1%BB%87m" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bước 2: Thử nghiệm</h1>\n<p>Trong mục <strong>Oppourtunities</strong> của audit report cung cấp gợi ý để improve performance, chúng ta sẽ làm theo những gợi ý này</p>\n<h2 id="bật-text-compression"><a href="#b%E1%BA%ADt-text-compression" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bật text compression</h2>\n<p>Top trong những điều có thể làm để improve, reduce, compress kích thước của file xuống trước khi send, giống như chúng ta zip file lại trước khi quăng vô email</p>\n<p>Check cái file dạng text này trong tab <strong>Network</strong></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/network.png"></p>\n<p>Click <strong>use large request rows</strong> <img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/large-resource-rows-button.png"> để hiển thị nhiều thông tin hơn.</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/largerows.png"></p>\n<p>Tren cột <strong>Size</strong> sẽ có 2 giá trị. Giá trị ở trên là kích thước download, bên dưới là kích thước đã giải nén, nếu 2 giá trị này bằng nhau thì hiển nhiên là resource đó chưa compress trước khi gởi.</p>\n<p>Xem giá trị của <code class="language-text">content-encoding</code> trong HTTP header cũng sẽ biết được resource này đã compress chưa</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/headers.png"></p>\n<p>Như file <code class="language-text">bundle.js</code> chúng ta không thấy <code class="language-text">content-encoding</code> trong Response Headers, nghĩa là file chưa compress, thường giá compress cho nó sẽ là <code class="language-text">gzip</code>, <code class="language-text">deflate</code>, hay <code class="language-text">br</code>. Xem thêm về các <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding#Directives">kiểu compress này</a></p>\n<p>Giải thích đủ rồi giờ ta đi compress thôi. Mở trang ví dụ của tác giả ra</p>\n<p>File <code class="language-text">server.js</code></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/server.png"></p>\n<p>Thêm đoạn code sau vào <code class="language-text">server.js</code>. Dùng <code class="language-text">app.use(compression())</code> trước <code class="language-text">app.use(express.static(&#39;build&#39;))</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> compression <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'compression\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">compression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">\'build\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Đợi Glitch deploy một tí. Quay lại trang demo và reload.</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/requests.png"></p>\n<p>File <code class="language-text">bundle.js</code> lúc này đã compress</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/gzip.png"></p>\n<p>Chúng ta quay lại tab <strong>Audits</strong> để đánh giá kết quả, click <strong>Perform an audit</strong>, dùng các thiết đặt như trước, rồi chạy <strong>Run Audit</strong></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/report2.png"></p>\n<h2 id="giảm-kích-thước-ảnh"><a href="#gi%E1%BA%A3m-k%C3%ADch-th%C6%B0%E1%BB%9Bc-%E1%BA%A3nh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giảm kích thước ảnh</h2>\n<p>Nếu user đang xài điện thoại có kích thước màn hình chỉ 500px chiều ngang thì việc load một cái hình rộng 1500px là ko thông minh lắm.</p>\n<p>Trên trang report, click <strong>Properly size images</strong> để xem những hình nào nên resize, ví dụ bên dưới có 4 hình có thể tối ưu</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/resize.png"></p>\n<p>Tốt nhất</p>\n<ul>\n<li>Resize lại toàn bộ ảnh trong lúc build</li>\n<li>Tạo nhiều kích thước file khác nhau trong lúc build và sử dụng <code class="language-text">srcset</code> của thẻ <code class="language-text">img</code>, như vậy lúc hiển thị, trình duyệt sẽ đảm nhiệm chọn file nào để phù hợp với thiết bị đang xem. <a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive/images#relative_sized_images">Xem thêm</a></li>\n<li>Sử dụng image CDN để tự động thay đổi kích thước của hình khi request</li>\n<li>Xem thêm <a href="https://images.guide/">một số gợi ý này</a></li>\n</ul>\n<h2 id="bỏ-hết-những-resource-nào-block-việc-render"><a href="#b%E1%BB%8F-h%E1%BA%BFt-nh%E1%BB%AFng-resource-n%C3%A0o-block-vi%E1%BB%87c-render" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bỏ hết những resource nào block việc render</h2>\n<p><strong>render-blocking resource</strong> là những file javascript hoặc CSS báo với trình duyệt rằng tụi tao file được load xong xui thì mày hả render nội dung trang web.</p>\n<p>Trước tiên tìm xem những resource nào có thể được load mà ko cần chạy lúc page load.</p>\n<ol>\n<li>Click <strong>Eliminate render-blocking resources</strong> để xem các resources, ví dụ ở đây là <code class="language-text">lodash.js</code> và <code class="language-text">jquery.js</code></li>\n<li>Ấn Control+Shift+P để mở Command Menu, gõ vào <code class="language-text">Coverage</code> sau đó chọn <code class="language-text">Show Coverage</code></li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/commandmenu.png"></p>\n<p>Một tab mới Coverage sẽ mở ra</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/coverage.png"></p>\n<ol start="3">\n<li>Click <strong>Reload</strong>. Trong tab Coverage sẽ cung cấp thông tin tổng quát về việc các đoạn code trong <code class="language-text">bundle.js</code>, <code class="language-text">jquery.js</code>, <code class="language-text">lodash.js</code> trong lúc page load thì nó sẽ được sử dụng bao nhiêu. Kết quả bên dưới cho thấy có 76% code jQuery và 30% của Lodash ko được sử dụng</li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/coveragereport.png"></p>\n<ol start="4">\n<li>Click vào <code class="language-text">jQuery</code>. DevTools sẽ mở ra tab Source Panel, những đoạn code nào chạy lúc page sẽ có màu xanh, màu đỏ là phần code không chạy</li>\n</ol>\n<p>Để xem chuyện gì sẽ xảy ra nếu ta không load jQuery và Lodash</p>\n<ol>\n<li>Mở tab Network</li>\n<li>Ấn Control+Shift+P</li>\n<li>Nhập <code class="language-text">blocking</code> sau đó chọn <code class="language-text">Show Request Blocking</code></li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/blocking.png"></p>\n<ol start="4">\n<li>Click <code class="language-text">Add pattern</code> <img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/addpattern.png">, nhập <code class="language-text">/libs/*</code> sau đó <code class="language-text">Enter</code> để confirm</li>\n<li>Reload lại trang. File jQuery và Lodash sẽ được đánh dấu đỏ vì chúng ta ko load nó</li>\n</ol>\n<p>Xem thử kết quả trên Audit khi chúng ta xóa hẳn 2 file này</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/report4.png"></p>\n<h2 id="hạn-chế-tối-đa-các-xử-lý-ở-main-threat"><a href="#h%E1%BA%A1n-ch%E1%BA%BF-t%E1%BB%91i-%C4%91a-c%C3%A1c-x%E1%BB%AD-l%C3%BD-%E1%BB%9F-main-threat" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hạn chế tối đa các xử lý ở main threat</h2>\n<p>Main threat là thời điểm mà trình duyệt xử lý trước tiên để hiển thị nội dung trang, chẳng hạn như parsing, executing HTML, CSS, Javascript.</p>\n<p>Mục tiêu ta sẽ dùng <strong>Performance</strong> panel để analyze những xử lý gì đang xảy ra ở main threat, tìm cách để defer hoặc bỏ hẳn</p>\n<ol>\n<li>Click <strong>Performance</strong> tab</li>\n<li>Chọn <strong>Capture Settings</strong> <img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/capture.png"></li>\n<li>Thiết đặt <strong>Network</strong> ở <strong>Slow 3G</strong> và <strong>CPU</strong> xuống 6x slowdown để giả lập trang web được load ở nơi mạng chậm rì và thiết bị cùi mía.</li>\n<li>Click <strong>Reload</strong> <img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/reload.png"></li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/performance.png"></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/overview.png"></p>\n<p>Expand mục <strong>User Timing</strong>, dựa trên kết quả này để đánh giá, ở đây site Tony này đăng chạy React Development mode nên tiêu tốn khá nhiều thời gian</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/usertiming.png"></p>\n<p>Expand mục <strong>Main</strong>, kéo xuống ở dưới cùng, do đang xử dụng framework nên những gì xảy ra ở trên thuộc về framework chúng ta sẽ không can thiệp gì được. Kết quả bên dưới cho thấy hàm <code class="language-text">App</code> gọi khá nhiều lần đến <code class="language-text">mineBitcoin</code></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/mine.png"></p>\n<p>Mở mục <strong>Bottom-Up</strong> để xem nhưng xử lý nào tiêu tốn nhiều thời gian nhất</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/bottomup.png"></p>\n<p>Cột <strong>Self Time</strong> hiển thị bao nhiều thời gian cho việc thực thi function. Ví dụ trên cho thấy 57% thời gian tiêu tốn ở main threat là chon function <code class="language-text">maineBitcoin</code></p>\n<p>Thay đổi một tí trong source code, chuyển qua mode production, xóa hàm mineBitcoin rồi chạy lại xem kết quả</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/speed/imgs/report6.png"></p>\n<h1 id="tổng-kết"><a href="#t%E1%BB%95ng-k%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tổng kết</h1>\n<ul>\n<li>Luôn bắt đầu với <strong>Audit</strong>, xác lập baseline trước khi thực hiện tối ưu</li>\n<li>Mỗi lần thay đổi một thứ thôi, sau đó chạy lại Audit để ghi nhận kết quả của thay đổi</li>\n</ul>\n<p><a href="https://developers.google.com/web/tools/chrome-devtools/speed/get-started">Link bài gốc</a></p>',timeToRead:8,excerpt:"Bước 1: Kiểm tra trang web hiện tại (Audits) Xác định baseline Đọc hiểu report Bước 2: Thử nghiệm Bật text compression Giảm kích thước ảnh…",frontmatter:{title:"Nâng cao tốc độ website với Chrome DevTools",cover:"",date:"2018-07-09",category:null,tags:["chrome","performance"],desc:"Hướng dẫn sử dụng Chrome DevTools để phân tích và tối ưu hóa tốc độ website"},fields:{slug:"/2018-07-09-huong-dan-optimize-toc-do-website-voi-chrome-devtools"}}},pathContext:{slug:"/2018-07-09-huong-dan-optimize-toc-do-website-voi-chrome-devtools",prev:{frontmatter:{title:"Giải thích Javascript Reactivity",desc:"Rất nhiều thư viện Javascript như Angular, React, Vue sử dụng Reactivity, hiểu được reactivity là gì và cách nó chạy sẽ giúp nâng cao kỹ năng lập trình",type:"post",category:null,tags:["javascript"],date:"2018-07-17",cover:""},fields:{slug:"/2018-07-17-huong-dan-giai-thich-javascript-reactivity"}},next:{frontmatter:{title:"Tổng quát về canh lề với Flexbox display",desc:"Nếu giờ chưa nắm vững về flexbox và cách canh lề trong flexbox thì thật là thiếu xót trong thời đại 2018, chúng ta đã qua thời xài float, clearfix vốn được giới thiệu từ 2004",type:"post",category:null,tags:["css","mobile-web-specialist"],date:"2018-07-04",cover:""},fields:{slug:"/2018-07-04-huong-dan-tong-hop-canh-le-voi-flexbox-alignment"}}}}}});
//# sourceMappingURL=path---2018-07-09-huong-dan-optimize-toc-do-website-voi-chrome-devtools-d1adf729f8ceb315e8e7.js.map