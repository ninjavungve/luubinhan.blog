webpackJsonp([30],{"./node_modules/json-loader/index.js!./.cache/json/2017-03-08-thoi-dai-cua-pixel-perfect-da-het-phan-3.json":function(n,s){n.exports={data:{markdownRemark:{html:'<!-- MarkdownTOC -->\n<ul>\n<li>UI kits</li>\n<li>Xuất file</li>\n<li>Element state</li>\n<li>Line-Height</li>\n<li>Font</li>\n<li>Kết</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1>UI kits</h1>\n<p>UI kit là tất cả những elment bạn đang sử dụng trong project, nếu là dân React có thể gọi là component. Sau này khi muốn maintenance sẽ dễ dàng hơn khi dự án ngày càng phình ra.</p>\n<p>Trong cái UI kit cần xác định những thành phần: bảng màu sử dụng, typography, các component như button, input, slider, hover, active state, cũng như người lập trình luôn tâm niệm nếu lập lại một đoạn code một lần thứ 2 trong đời thì cho nó ngay vào thư viện để tái sử dụng. Thường khi các bạn designer không có làm kiểu này thì trước sau gì cũng xảy ra trường hợp cùng một button mà chổ này khác chổ kia khác một chút, mà các bạn tester và khách hàng khác cái giao diện là đè đầu thằng developer ra chửi, trong khi cái đó nhiều khi bạn designer không cố ý mà vô tình quên mất mình đã format cái button đó ở đâu đó rồi.</p>\n<p>Bạn có thể sử dụng <a target="_blank" href="https://www.invisionapp.com/craft"> Craft</a> để làm thư viện UI</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*72sMv26eNctbPvOLKZt-Mw@2x.png"></p>\n<h1>Xuất file</h1>\n<p>Giúp ảnh developer, hãy sử dụng những công cụ sau</p>\n<ul>\n<li><a href="https://www.invisionapp.com/feature/inspect">Invision Inspect</a></li>\n<li><a href="https://zeplin.io/">Zeplin</a></li>\n<li><a href="https://zeplin.io/">Sympli</a></li>\n<li><a href="https://github.com/utom/sketch-measure">Sketch Measure</a> </li>\n</ul>\n<h1>Element state</h1>\n<p>Các bạn design hay chỉ làm mỗi cái trạng thái default mà quên rằng một element sẽ có rất nhiều state khác như, như active, hover, focus, visited</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*oK0YQWhM2Td5A6rqHWlYTA@2x.png"></p>\n<h1>Line-Height</h1>\n<p>Có thể khẳng định là 100% anh designer sẽ không để ý đến giá trị này, mà cứ đè ra đo độ cao chính xác từng pixel của element, trong khi không hề biết cái line-height sẽ ảnh hưởng đến độ cao này, đâm ra anh quên cộng vào, và khi anh developer set cái padding trong code là 13, 14 thì anh la làng là nó phải 20, trong khi nếu cộng vào cái line-height nữa nó sẽ ra là 20.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*HnnuoS89S6xCdFwWMG9Q2A@2x.png"></p>\n<p>Một ưu điềm khác khi sử dụng Sketch là lúc làm sẽ thấy ngay sự ảnh hưởng line-height, trong khi photoshop thì sẽ không thấy được</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Vqrt-1Vy2Ng1SqeNXG2P0g@2x.png"></p>\n<p>Giá trị line-height nên không nên thay đổi nhiều quá trên từng element mà thông nhất xài chung một kiểu</p>\n<h1>Font</h1>\n<p>Trước hết, xác định là: "LUÔN LUÔN sử dụng <a href="https://fonts.google.com/">Google Fonts</a>" nếu muốn xài một font không có sẵn trong máy, bạn developer sẽ không phải đi mò mẫm convert cái font chữ của bạn design chôm ở đâu đó, một công việc vốn quá nhiều rủi ro do vấn đề bản quyền, vấn đề lỗi convert có thể xảy ra, lỗi hiển thị trên các trình duyệt khác nhau.</p>\n<p>Cũng không bao giờ được xài nhiều hơn 2 font ngoài hệ thống, quá nhiều font phải load, làm ảnh hưởng tốc độ load site. Không sử dụng quá nhiều font style italic, bold, light, thin, ragular, một đóng hầm bà lằng, luôn nhớ trong đầu less is more</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*KeLj5M7QYKIKkgIneNbKnQ@2x.png"> </p>\n<h1>Kết</h1>\n<p>Thằng designer thì vốn không ưa thằng developer, chê thằng developer không thấy được sự sáng tạo của nó, còn thằng developer thì luôn chửi thằng designer, nó cứ chế biến mấy cái tào lào khó implement chết mịa luôn. Tất cả những vấn đề trên có thể giải quyết bằng một cách thôi: TRAO ĐỔI. Trao đổi càng sớm, trao đổi khi có vấn đề sẽ tránh cho ra kết quả mà nhìn vào không giám nhận là con của mình. Với tất cả những dự án dù lơn hay nhỏ thì luôn luôn bạn phải cân đối giữa kết quả mong muốn, thời gian và chi phí phải bỏ ra</p>',frontmatter:{date:"March 08, 2017",path:"/2017-03-08-thoi-dai-cua-pixel-perfect-da-het-phan-3",tags:["css","ux-ui"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu - Phần 3",desc:"UI kit là tất cả những elment bạn đang sử dụng trong project, nếu là dân React có thể gọi là component. Sau này khi muốn maintenance sẽ dễ dàng hơn khi dự án ngày càng phình ra."}}},pathContext:{prev:{excerpt:"Webpack là gì? Túm lại nếu bạn đang gặp những vấn đề sau: Loaders Webpack là gì? Lúc đầu Webpack được phát triển như một module bundler cho JavaScript, sau này nó phát triển lên như một trình quản lý toàn bộ front-end code Đoạn code trên khá quen, lý...",html:'<!-- MarkdownTOC -->\n<ul>\n<li>Webpack là gì?</li>\n<li>Túm lại nếu bạn đang gặp những vấn đề sau:</li>\n<li>Loaders</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1>Webpack là gì?</h1>\n<p>Lúc đầu Webpack được phát triển như một module bundler cho JavaScript, sau này nó phát triển lên như một trình quản lý toàn bộ front-end code</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/jquery.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/menu-widget.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/menu-widget--fancy-button.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/ad-widget.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/loading-bar.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/loading-bar.fancy.theme.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/social.sdk.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/analytics.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/analytics.seo.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Đoạn code trên khá quen, lý do cách làm cũ này không tốt</p>\n<ol>\n<li>Load quá nhiều JS, gởi nhiều network request -> Thời gian tải trang chậm hơn</li>\n<li>Nhiều thư viện phụ thuộc ngầm. menu-widget-fancy-button phụ thuộc menu-widget, menu-widget phụ thuộc jquery -> menu-widget-fancy-button phụ thuộc jquery. loading-bar có phụ thuộc thư viện nào không?</li>\n<li>main.js tuyệt đối phải để dưới cùng</li>\n<li>mọi thứ đều global</li>\n</ol>\n<p>Bằng cách combine toàn bộ js lại vào một file có thể giải quyết vấn đề số (1)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    entry<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">\'js/jquery.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/menu-widget.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/menu-widget--fancy-button.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/ad-widget.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/loading-bar.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/loading-bar.fancy.theme.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/social.sdk.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/analytics.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/analytics.seo.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/main.js\'</span>\n    <span class="token punctuation">]</span>\n    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'./dist\'</span><span class="token punctuation">,</span>\n        filename<span class="token punctuation">:</span> <span class="token string">\'output.js\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Gulp/Grunt cũng có thể sử lý những tác vụ <code>preprocess</code> và <code>transpile</code>, compile tất cả input source. Nhưng khi dự án phình ra, Gulp mắc phải vấn đề với bởi cách vận hành case-by-case</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*yBt2rFj2DbckFliGE0LEyg.png" alt="mô tả cách chạy của Gulp"></p>\n<p>Hình trên mô tả cách chạy của Gulp, còn hình dưới là cách chạy của Webpack</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*TOFfoH0cXTc8G3Y_F6j3Jg.png" alt="cách chạy của Webpack"></p>\n<h1>Túm lại nếu bạn đang gặp những vấn đề sau:</h1>\n<ol>\n<li>Rắc rối với việc load dependencies đúng thứ tự</li>\n<li>Phải include những đoạn css, js không dùng đến trên production</li>\n<li>Vô tình load trùng một thư viện nào đó</li>\n<li>Gặp issue với vấn đề <code>scoping</code> trong css và javascript</li>\n<li>Webpack cho phép sử dụng <code>require</code> hay <code>import</code> (ES6). </li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token string">\'Hello!\'</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Nếu câu "Hello!" là một đoạn code dài loằn ngoằn, chúng ta sẽ tách nó ra 2 file</p>\n<p><code>string.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>window<span class="token punctuation">.</span>string <span class="token operator">=</span> <span class="token string">\'asuperreallylongstring\'</span>\n</code></pre>\n      </div>\n<p><code>main.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">alert</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>string<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>include</code> cả 2 file này vào</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"js/string.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"js/main.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Thay vì <code>include</code> theo cách thông thường bằng HTML như vậy, ta sẽ viết bằng <code>require</code> trong file js</p>\n<p><code>string.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">\'asuperreallylongstring\'</span>\n</code></pre>\n      </div>\n<p><code>main.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./string.js\'</span><span class="token punctuation">)</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Như vậy chỉ còn cần <code>include</code> mỗi file <code>main.js</code> vào trong html</p>\n<p>Change lại file config vì bây giờ file nào phụ thuộc file nào được định nghĩa bằng <code>require</code> như vậy ta không cần <code>compile</code> tất cả file vào 1 file nữa, mỗi thứ cứ để webpack lo</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    entry<span class="token punctuation">:</span> <span class="token string">\'js/main.js\'</span><span class="token punctuation">,</span>\n    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'./dist\'</span><span class="token punctuation">,</span>\n        filename<span class="token punctuation">:</span> <span class="token string">\'output.js\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Loaders</h1>\n<p>Trong file <code>loading-bar.js</code>, có đoạn code giả vụ sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./js/jquery\'</span><span class="token punctuation">)</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.loading-bar\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">\'&lt;img src="/assets/loading-bar.png" />\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Đã có file loading-bar.png trong đúng thư mục <code>assets</code> trên server, vấn đề là viết kiểu này thì loading-bar.png đang là dạng implicit dependency, phải viết lại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./js/jquery\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./assets/loading-bar.png\'</span><span class="token punctuation">)</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.loading-bar\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">\'&lt;img src="\'</span> <span class="token operator">+</span> image <span class="token operator">+</span> <span class="token string">\'" />\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Thêm dấu chấm (.) để webpack hiểu là chúng ta muốn load một resource nằm relative với file đang mở.</p>\n<p>Mặc định webpack sẽ không đọc được những file khác ngoài file text thông thường, khi đó sẽ cần đến những loader, có thể xem như những plugin khi cần đến thì ta khai báo thêm vào.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    entry<span class="token punctuation">:</span> <span class="token string">\'loading-bar.js\'</span><span class="token punctuation">,</span>\n    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'./dist/\'</span><span class="token punctuation">,</span>\n        filename<span class="token punctuation">:</span> <span class="token string">\'output.js\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n            test<span class="token punctuation">:</span> <span class="token regex">/\\.png$/</span><span class="token punctuation">,</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Diễn giải đoạn config ở trên: với file có kiểu dạng .png, thì sử dùng loader là url-loader để thực thi.</p>\n<p>Tương tự với CSS framework, sẽ bao gồm css, image, font, js</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'loading-bar.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'./dist/\'</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'output.js\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.png$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'url\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'style-loader!css-loader\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.(ttf|svg|woff)$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'file-loader?hash=sha512&amp;digest=hex&amp;name=[hash].[ext]\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Trên file css ta không chỉ báo sử dụng một loader, mà đến 2 loader, mỗi loader phân cách bằng <code>!</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>loader<span class="token punctuation">:</span> <span class="token string">\'style-loader!css-loader\'</span>\n</code></pre>\n      </div>\n<p>css-loader sẽ được sử dụng trước sau đó là style-loader, theo chiều từ phải qua trái. Tại sao? với css cần làm 2 chuyện một là load nó bằng css-loader để chuyển nó thành một dạng dữ liệu mà javascript có thể hiểu, thứ 2, style-loader để chèn css đó vào trong DOM</p>\n<p>Còn một vấn đề nữa, khi dùng loader là data-url lúc này image sẽ được hiểu thành <code>DATA-URL</code>, mạng dạng string</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg<span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Red dot<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>Khi ảnh có kích thước lớn, thì việc nhúng hẳn một tấm ảnh dạng string thế này vào javascript không phải là cách tốt, với những asset khác, lưu nó vào một vị trí khác trên server là load về bằng file-loader.</p>\n<p>Nếu muốn tiếp tục nghiên cứu</p>\n<p><a href="https://webpack.js.org/configuration/Docs">https://webpack.js.org/configuration/Docs</a>\n<a href="https://github.com/petehunt/webpack-howto">https://github.com/petehunt/webpack-howto</a>\n<a href="https://github.com/webpack/webpack/tree/master/">https://github.com/webpack/webpack/tree/master/</a></p>',id:"C:/anluu/luckyluu/posts/2017-03-13-gioi-thieu-ve-webpack/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2017-03-13T13:35:13.234Z",path:"/2017-03-13-gioi-thieu-ve-webpack",tags:["javascript","react","webpack"],title:"Giới thiệu về Webpack"}},next:{excerpt:"Grid Responsive design Đừng sáng tạo ra cái có sẵn Hiệu ứng Grid Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như  Bootstrap Grid . Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm...",html:'<!-- MarkdownTOC -->\n<ul>\n<li>Grid</li>\n<li>Responsive design</li>\n<li>Đừng sáng tạo ra cái có sẵn</li>\n<li>Hiệu ứng</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1>Grid</h1>\n<p>Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như <a href="http://getbootstrap.com/css/#grid" target="_blank">Bootstrap Grid</a>. Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm trọng, nó giải quyết phần lớn các yêu cầu cơ bản về layout, thống nhất sử dụng ngay từ đầu sẽ giúp ít rất nhiều cho mấy anh developer. Quan trọng nhất nên lưu ý là hệ thống grid ngày nay sử dụng độ rộng tương đối (theo giá trị phần trăm của container) và khoảng cách padding cố định. Bạn có thể đọc <a href="https://medium.com/sketch-app-sources/fluid-grid-systems-in-sketch-3-9-2579133c6d08" target="_blank">bài viết sau</a> để hiểu cách xây dựng hệ thống grid trên Sketch</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*WLHweZ4cQQSK8hWOY96cbQ@2x.png"></p>\n<p>Khi sử dụng hệ thống grid như bootstrap bạn sẽ không bao giờ cần phải nói cho anh developer kích thước của từng cột là mấy, vì thực sự lúc này kích thước nó chỉ là một giá trị tương đối</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Q_qCy_5PPuR5bPciB5Vbeg@2x.png"></p>\n<h1>Responsive design</h1>\n<p>Bạn designer chỉ cần chỉ cho anh developer từng element nó sẽ như thế nào trên các kích thước màn hình khác nhau, luôn luôn nghĩ các element có một kích thước tương đối chứ không phải một giá trị cố định nào đó như 320 - 1024 -1920, vì giao diện responsive phải có khả năng thích nghi với nhiều dạng kích thước màn hình khác nhau nữa.</p>\n<p>Không chỉ vậy, một số hình có kích thước phụ thuộc vào container của nó, ví dụ trên desktop bạn cho một cái hình kích thước 200x200, nhưng trên điện thoại kích thước của màn hình sẽ là 375x667 đi, thì các hình này chắc chắn bể liền, thường thấy trên mấy cái thumbnail bài viết.</p>\n<p>Một lỗi thường thấy khác là quên rằng độ cao của một số element sẽ thay đổi theo <code>container</code></p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*0odC4Yn4aHanIatRPU7P5w.gif"></p>\n<p>Sử dụng những <code>breakpoint</code> căn bản: 320-375-768-1024-1280-1366-1920. Và tất nhiên tất cả các anh designer đều quên là giao diện đôi khi được xem trên màn hình lật ngang ra.</p>\n<p>Ví dụ bên dưới 2 cột hiển thị rất đẹp trên desktop nhưng do sự thay đổi độ cao trên mobile mà nó sẽ trở nên xấu xí</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*BWi61OpjqFEgHliraTHuLw@2x.png"></p>\n<h1>Đừng sáng tạo ra cái có sẵn</h1>\n<p>Nếu không có thời gian, hoặc không chắc có thể customize những component nhỏ xíu như cái dropdown theo kiểu "thích vẽ sau vẻ", hỏi anh developer xem anh có suggest cái thư viện nào có sẵn, thay vì làm lại cái người ta đã làm tốt lắm rồi. Một ví dụ kinh điển là cái datepicker. Rát nhiều designer nghĩ chỉ cần vẽ cái lịch với con số trên đó, mà quên rằng</p>\n<ul>\n<li>Hover effect trên từng ngày</li>\n<li>Trạng thái ngày hiện tại</li>\n<li>Làm sau đánh dấu ngày được chọn</li>\n<li>Làm sau thay đổi tháng, năm</li>\n<li>Ngày trước và sau của tháng hiện tại</li>\n</ul>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Cgndb4fH9aXPnrLIuyuE4Q@2x.png"></p>\n<p>Chúng ta đang sống trong cái thời đại mà mọi người đều cố xây dựng mọi thứ của riêng mình (style nhật bổn). Đôi khi, có một sản phẩm chạy dược cho khách hàng thì tốt hơn là lãng phí thời gian và tiền bạc cho một anh designer ngồi đó sáng tạo ra những thứ người ta đã có sẵn. Designer phải biết rằng anh có thể sử dụng những thư viện và component có sẵn  để hoàn tất project. Nó sẽ giảm đi effect không chỉ của designer mà còn cả developer ngồi đó tìm ra những giải pháp không thực sự cần thiết</p>\n<h1>Hiệu ứng</h1>\n<p>Thay vì ngồi viết note giải thích các trang flow đi như thế nào, viết docs như vậy thực sự méo cần thiết. Designer chỉ cần sử dụng những trang như InVision hay Axure để biểu diễn cái flow,  dụng Principle, Framer, Adobe After Effect để mô tả mấy hiệu chạy thế nào. Nó sẽ giảm đi những hiểu nhầm giữa designer và developer, khách hàng</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*yEMXAwVff__nrM_OCwLknw.gif"></p>\n<p>Phần 3 - UI kits, Export, Element State, Line-height, Fonts</p>',
id:"C:/anluu/luckyluu/posts/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-03-07T13:35:13.234Z",path:"/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2",tags:["css","ux-ui"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu - Phần 2"}}}}}});
//# sourceMappingURL=path---2017-03-08-thoi-dai-cua-pixel-perfect-da-het-phan-3-91ee04d21abd00e44dc7.js.map