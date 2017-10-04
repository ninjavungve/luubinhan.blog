webpackJsonp([29],{"./node_modules/json-loader/index.js!./.cache/json/2017-03-13-gioi-thieu-ve-webpack.json":function(n,s){n.exports={data:{markdownRemark:{html:'<!-- MarkdownTOC -->\n<ul>\n<li>Webpack là gì?</li>\n<li>Túm lại nếu bạn đang gặp những vấn đề sau:</li>\n<li>Loaders</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1>Webpack là gì?</h1>\n<p>Lúc đầu Webpack được phát triển như một module bundler cho JavaScript, sau này nó phát triển lên như một trình quản lý toàn bộ front-end code</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/jquery.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/menu-widget.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/menu-widget--fancy-button.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/ad-widget.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/loading-bar.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/loading-bar.fancy.theme.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/social.sdk.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/analytics.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/analytics.seo.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Đoạn code trên khá quen, lý do cách làm cũ này không tốt</p>\n<ol>\n<li>Load quá nhiều JS, gởi nhiều network request -> Thời gian tải trang chậm hơn</li>\n<li>Nhiều thư viện phụ thuộc ngầm. menu-widget-fancy-button phụ thuộc menu-widget, menu-widget phụ thuộc jquery -> menu-widget-fancy-button phụ thuộc jquery. loading-bar có phụ thuộc thư viện nào không?</li>\n<li>main.js tuyệt đối phải để dưới cùng</li>\n<li>mọi thứ đều global</li>\n</ol>\n<p>Bằng cách combine toàn bộ js lại vào một file có thể giải quyết vấn đề số (1)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    entry<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">\'js/jquery.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/menu-widget.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/menu-widget--fancy-button.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/ad-widget.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/loading-bar.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/loading-bar.fancy.theme.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/social.sdk.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/analytics.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/analytics.seo.js\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'js/main.js\'</span>\n    <span class="token punctuation">]</span>\n    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'./dist\'</span><span class="token punctuation">,</span>\n        filename<span class="token punctuation">:</span> <span class="token string">\'output.js\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Gulp/Grunt cũng có thể sử lý những tác vụ <code>preprocess</code> và <code>transpile</code>, compile tất cả input source. Nhưng khi dự án phình ra, Gulp mắc phải vấn đề với bởi cách vận hành case-by-case</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*yBt2rFj2DbckFliGE0LEyg.png" alt="mô tả cách chạy của Gulp"></p>\n<p>Hình trên mô tả cách chạy của Gulp, còn hình dưới là cách chạy của Webpack</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*TOFfoH0cXTc8G3Y_F6j3Jg.png" alt="cách chạy của Webpack"></p>\n<h1>Túm lại nếu bạn đang gặp những vấn đề sau:</h1>\n<ol>\n<li>Rắc rối với việc load dependencies đúng thứ tự</li>\n<li>Phải include những đoạn css, js không dùng đến trên production</li>\n<li>Vô tình load trùng một thư viện nào đó</li>\n<li>Gặp issue với vấn đề <code>scoping</code> trong css và javascript</li>\n<li>Webpack cho phép sử dụng <code>require</code> hay <code>import</code> (ES6). </li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token string">\'Hello!\'</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Nếu câu "Hello!" là một đoạn code dài loằn ngoằn, chúng ta sẽ tách nó ra 2 file</p>\n<p><code>string.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>window<span class="token punctuation">.</span>string <span class="token operator">=</span> <span class="token string">\'asuperreallylongstring\'</span>\n</code></pre>\n      </div>\n<p><code>main.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">alert</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>string<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>include</code> cả 2 file này vào</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"js/string.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"js/main.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Thay vì <code>include</code> theo cách thông thường bằng HTML như vậy, ta sẽ viết bằng <code>require</code> trong file js</p>\n<p><code>string.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">\'asuperreallylongstring\'</span>\n</code></pre>\n      </div>\n<p><code>main.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./string.js\'</span><span class="token punctuation">)</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Như vậy chỉ còn cần <code>include</code> mỗi file <code>main.js</code> vào trong html</p>\n<p>Change lại file config vì bây giờ file nào phụ thuộc file nào được định nghĩa bằng <code>require</code> như vậy ta không cần <code>compile</code> tất cả file vào 1 file nữa, mỗi thứ cứ để webpack lo</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    entry<span class="token punctuation">:</span> <span class="token string">\'js/main.js\'</span><span class="token punctuation">,</span>\n    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'./dist\'</span><span class="token punctuation">,</span>\n        filename<span class="token punctuation">:</span> <span class="token string">\'output.js\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Loaders</h1>\n<p>Trong file <code>loading-bar.js</code>, có đoạn code giả vụ sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./js/jquery\'</span><span class="token punctuation">)</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.loading-bar\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">\'&lt;img src="/assets/loading-bar.png" />\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Đã có file loading-bar.png trong đúng thư mục <code>assets</code> trên server, vấn đề là viết kiểu này thì loading-bar.png đang là dạng implicit dependency, phải viết lại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./js/jquery\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./assets/loading-bar.png\'</span><span class="token punctuation">)</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.loading-bar\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">\'&lt;img src="\'</span> <span class="token operator">+</span> image <span class="token operator">+</span> <span class="token string">\'" />\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Thêm dấu chấm (.) để webpack hiểu là chúng ta muốn load một resource nằm relative với file đang mở.</p>\n<p>Mặc định webpack sẽ không đọc được những file khác ngoài file text thông thường, khi đó sẽ cần đến những loader, có thể xem như những plugin khi cần đến thì ta khai báo thêm vào.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    entry<span class="token punctuation">:</span> <span class="token string">\'loading-bar.js\'</span><span class="token punctuation">,</span>\n    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'./dist/\'</span><span class="token punctuation">,</span>\n        filename<span class="token punctuation">:</span> <span class="token string">\'output.js\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n            test<span class="token punctuation">:</span> <span class="token regex">/\\.png$/</span><span class="token punctuation">,</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Diễn giải đoạn config ở trên: với file có kiểu dạng .png, thì sử dùng loader là url-loader để thực thi.</p>\n<p>Tương tự với CSS framework, sẽ bao gồm css, image, font, js</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'loading-bar.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'./dist/\'</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'output.js\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.png$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'url\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'style-loader!css-loader\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.(ttf|svg|woff)$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'file-loader?hash=sha512&amp;digest=hex&amp;name=[hash].[ext]\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Trên file css ta không chỉ báo sử dụng một loader, mà đến 2 loader, mỗi loader phân cách bằng <code>!</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>loader<span class="token punctuation">:</span> <span class="token string">\'style-loader!css-loader\'</span>\n</code></pre>\n      </div>\n<p>css-loader sẽ được sử dụng trước sau đó là style-loader, theo chiều từ phải qua trái. Tại sao? với css cần làm 2 chuyện một là load nó bằng css-loader để chuyển nó thành một dạng dữ liệu mà javascript có thể hiểu, thứ 2, style-loader để chèn css đó vào trong DOM</p>\n<p>Còn một vấn đề nữa, khi dùng loader là data-url lúc này image sẽ được hiểu thành <code>DATA-URL</code>, mạng dạng string</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg<span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Red dot<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>Khi ảnh có kích thước lớn, thì việc nhúng hẳn một tấm ảnh dạng string thế này vào javascript không phải là cách tốt, với những asset khác, lưu nó vào một vị trí khác trên server là load về bằng file-loader.</p>\n<p>Nếu muốn tiếp tục nghiên cứu</p>\n<p><a href="https://webpack.js.org/configuration/Docs">https://webpack.js.org/configuration/Docs</a>\n<a href="https://github.com/petehunt/webpack-howto">https://github.com/petehunt/webpack-howto</a>\n<a href="https://github.com/webpack/webpack/tree/master/">https://github.com/webpack/webpack/tree/master/</a></p>',frontmatter:{date:"March 13, 2017",path:"/2017-03-13-gioi-thieu-ve-webpack",tags:["javascript","react","webpack"],title:"Giới thiệu về Webpack",desc:"Ở thời điểm hiện tại webpack đang là module bundler phổ biến nhất, khi mới tiếp cận với nó sẽ thấy hơi khó vì nó không giống như Gulp, file config khá phức tạp, nếu chỉ copy paste mà không hiểu cách thức hoạt động của nó thì khó mà thuần thuật và giải quyết khi phát sinh lỗi."}}},pathContext:{prev:{excerpt:"Mục Lục Chuyện gì xảy ra khi gọi   ? Sự khác nhau giữa Element và Component trong React? Khi nào thì sử dụng Class Component và Functional Component  trong React dùng để làm gì Keys trong React là gì Sự khác nhau giữa controlled component và...",html:'<p>Mục Lục</p>\n<!-- MarkdownTOC -->\n<ul>\n<li>Chuyện gì xảy ra khi gọi <code>setSate</code> ?</li>\n<li>Sự khác nhau giữa Element và Component trong React?</li>\n<li>Khi nào thì sử dụng Class Component và Functional Component</li>\n<li><code>Refs</code> trong React dùng để làm gì</li>\n<li>Keys trong React là gì</li>\n<li>\n<p>Sự khác nhau giữa controlled component và uncontrolled component</p>\n<ul>\n<li>Controlled Component</li>\n<li>Uncontrolled Component</li>\n</ul>\n</li>\n<li>Để gọi AJAX, sự dụng sự kiện nào của lifecycle?</li>\n<li><code>shouldComponentUpdate</code> dùng để làm gì</li>\n<li>Build Product bằng cách nào?</li>\n<li>Tại sao nên sử dụng <code>React.Children.map\\(\\)</code> thay vì <code>props.children.map\\(\\)</code></li>\n<li>Events được xử lý trong React như thế nào?</li>\n<li>Sự khác nhau giữa <code>createElement</code> và <code>cloneElement</code></li>\n<li>Argument thứ 2 của <code>setState</code> dùng để làm gì</li>\n<li>Đoạn code sau sai ở chổ nào</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h2>Chuyện gì xảy ra khi gọi <code>setSate</code> ?</h2>\n<p>Đầu tiên, object được truyền trong <code>setState</code> sẽ được merge với state hiện tại của component, dựa trên sự thay đổi của object này, UI được update với state mới. Để làm được chuyện này, React sẽ dựng một cây React Element mới, so sánh sự khác nhau của cây element mới và cây element trước đó, React biết được chính xác chỉ cần update phần UI nào đã bị thay đổi.</p>\n<h2>Sự khác nhau giữa Element và Component trong React?</h2>\n<p>React Element ám chỉ những gì thấy trên màn hình.</p>\n<p>React component là một function hoặc class có hoặc không có input và sẽ trả về một React element.</p>\n<h2>Khi nào thì sử dụng Class Component và Functional Component</h2>\n<p>Nếu component có state và các phương thức của lifecycle, sử dụng <strong>Class Component</strong>, ngược lại dùng <strong>functional component</strong></p>\n<h2><code>Refs</code> trong React dùng để làm gì</h2>\n<p>Refs cho phép access trực tiếp đến DOM element hoặc một instance của component</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> this.input = input} />\n</code></pre>\n      </div>\n<h2>Keys trong React là gì</h2>\n<p>Keys giúp React theo dõi sự thay đổi của một item trong list</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>todoItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>task<span class="token punctuation">,</span> uid<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span>\n    <span class="token operator">&lt;</span>ul<span class="token operator">></span>\n      <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token punctuation">{</span>task<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Sự khác nhau giữa controlled component và uncontrolled component</h2>\n<p>Controlled component là component React control dữ liệu dựa trên state và props, uncontrolled component là component mà dữ liệu được handle bởi DOM</p>\n<h4>Controlled Component</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>{this.state.username}</span> <span class="token attr-name">onChange</span><span class="token attr-value"><span class="token punctuation">=</span>{this.updateUsername}</span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h4>Uncontrolled Component</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code>&lt;input type=\'text\' ref={(input) => this.input = input} />\n</code></pre>\n      </div>\n<h2>Để gọi AJAX, sự dụng sự kiện nào của lifecycle?</h2>\n<p><code>componentDidMount</code> , lý do ko sử dụng <code>componentWillMount</code> vì React  có thể gọi componentWillMount nhiều lần nếu cần thiết, thứ 2 không thể chắc chắn AJAX luôn gọi thành công, nếu gơi vào trường hợp đó câu lệnh <code>setState</code> sẽ chạy trên unmounted component.</p>\n<h2><code>shouldComponentUpdate</code> dùng để làm gì</h2>\n<p><code>shouldComponentUpdate</code> cho phép can thiệp quá trình update UI của component và các component con của nó.</p>\n<h2>Build Product bằng cách nào?</h2>\n<p>Sử dụng phương thức DefinePlugin của Webpack để set <code>NODE_ENV = production</code>. Quá trình build production sẽ bỏ hết những đoạn như validate propType, cảnh báo này nọ, minify code, remove comments.</p>\n<h2>Tại sao nên sử dụng <code>React.Children.map()</code> thay vì <code>props.children.map()</code></h2>\n<p><code>props.children</code> chưa chắc lúc nào cũng là array. Ví dụ</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Parent</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Nếu sử dụng <code>props.children.map</code> trong Parent sẽ bị lỗi vì <code>props.children</code> là một object không phải array.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>props.children will now be an array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Parent</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><code>React.Children.map</code> cho phép <code>props.children</code> là array hoặc object đều được.</p>\n<h2>Events được xử lý trong React như thế nào?</h2>\n<p>Các hàm xử lý event trong React sẽ được truyền vào một instance của <code>SyntheticEvent</code>, <code>SyntheticEvent</code> cũng giống như những native event bình thường của Browser trừ việc nó có thể làm việc trên tất cả các trình duyệt.</p>\n<p>React không attach event vô các child node, mà sẽ lắng nghe tất cả các event sử dụng 1 event listener duy nhất, Với mục đích là để tăng performance và React không cần phải update lại event listener khi update DOM.</p>\n<h2>Sự khác nhau giữa <code>createElement</code> và <code>cloneElement</code></h2>\n<p><code>createElement</code> là để tạo element, <code>cloneElement</code> copy element và đưa vào các props mới.</p>\n<h2>Argument thứ 2 của <code>setState</code> dùng để làm gì</h2>\n<p>callback function, function sẽ chạy sau khi <code>component</code> được <code>render</code> lại với state mới.</p>\n<p><code>setState</code> là một phương thức bất đồng bộ (asynchronous)</p>\n<h2>Đoạn code sau sai ở chổ nào</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prevState<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> <span class="token punctuation">{</span> streak<span class="token punctuation">:</span> prevState<span class="token punctuation">.</span>streak <span class="token operator">+</span> props<span class="token punctuation">.</span>count <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Không sai gì cả, ít người biết rằng khi <code>setState</code> có thể truyền vào <code>previous state</code>.</p>\n<p>Nguồn</p>\n<p><a href="https://tylermcginnis.com/react-interview-questions/">https://tylermcginnis.com/react-interview-questions/</a></p>',
id:"C:/anluu/luckyluu/posts/2017-07-17-interview-react-developer-thi-hoi-gi/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-07-17T13:35:13.234Z",path:"/2017-07-17-interview-react-developer-thi-hoi-gi",tags:["javascript","react"],title:"Interview React Developer thì hỏi gì?"}},next:{excerpt:"UI kits Xuất file Element state Line-Height Font Kết UI kits UI kit là tất cả những elment bạn đang sử dụng trong project, nếu là dân React có thể gọi là component. Sau này khi muốn maintenance sẽ dễ dàng hơn khi dự án ngày càng phình ra. Trong cái...",html:'<!-- MarkdownTOC -->\n<ul>\n<li>UI kits</li>\n<li>Xuất file</li>\n<li>Element state</li>\n<li>Line-Height</li>\n<li>Font</li>\n<li>Kết</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h1>UI kits</h1>\n<p>UI kit là tất cả những elment bạn đang sử dụng trong project, nếu là dân React có thể gọi là component. Sau này khi muốn maintenance sẽ dễ dàng hơn khi dự án ngày càng phình ra.</p>\n<p>Trong cái UI kit cần xác định những thành phần: bảng màu sử dụng, typography, các component như button, input, slider, hover, active state, cũng như người lập trình luôn tâm niệm nếu lập lại một đoạn code một lần thứ 2 trong đời thì cho nó ngay vào thư viện để tái sử dụng. Thường khi các bạn designer không có làm kiểu này thì trước sau gì cũng xảy ra trường hợp cùng một button mà chổ này khác chổ kia khác một chút, mà các bạn tester và khách hàng khác cái giao diện là đè đầu thằng developer ra chửi, trong khi cái đó nhiều khi bạn designer không cố ý mà vô tình quên mất mình đã format cái button đó ở đâu đó rồi.</p>\n<p>Bạn có thể sử dụng <a target="_blank" href="https://www.invisionapp.com/craft"> Craft</a> để làm thư viện UI</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*72sMv26eNctbPvOLKZt-Mw@2x.png"></p>\n<h1>Xuất file</h1>\n<p>Giúp ảnh developer, hãy sử dụng những công cụ sau</p>\n<ul>\n<li><a href="https://www.invisionapp.com/feature/inspect">Invision Inspect</a></li>\n<li><a href="https://zeplin.io/">Zeplin</a></li>\n<li><a href="https://zeplin.io/">Sympli</a></li>\n<li><a href="https://github.com/utom/sketch-measure">Sketch Measure</a> </li>\n</ul>\n<h1>Element state</h1>\n<p>Các bạn design hay chỉ làm mỗi cái trạng thái default mà quên rằng một element sẽ có rất nhiều state khác như, như active, hover, focus, visited</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*oK0YQWhM2Td5A6rqHWlYTA@2x.png"></p>\n<h1>Line-Height</h1>\n<p>Có thể khẳng định là 100% anh designer sẽ không để ý đến giá trị này, mà cứ đè ra đo độ cao chính xác từng pixel của element, trong khi không hề biết cái line-height sẽ ảnh hưởng đến độ cao này, đâm ra anh quên cộng vào, và khi anh developer set cái padding trong code là 13, 14 thì anh la làng là nó phải 20, trong khi nếu cộng vào cái line-height nữa nó sẽ ra là 20.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*HnnuoS89S6xCdFwWMG9Q2A@2x.png"></p>\n<p>Một ưu điềm khác khi sử dụng Sketch là lúc làm sẽ thấy ngay sự ảnh hưởng line-height, trong khi photoshop thì sẽ không thấy được</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Vqrt-1Vy2Ng1SqeNXG2P0g@2x.png"></p>\n<p>Giá trị line-height nên không nên thay đổi nhiều quá trên từng element mà thông nhất xài chung một kiểu</p>\n<h1>Font</h1>\n<p>Trước hết, xác định là: "LUÔN LUÔN sử dụng <a href="https://fonts.google.com/">Google Fonts</a>" nếu muốn xài một font không có sẵn trong máy, bạn developer sẽ không phải đi mò mẫm convert cái font chữ của bạn design chôm ở đâu đó, một công việc vốn quá nhiều rủi ro do vấn đề bản quyền, vấn đề lỗi convert có thể xảy ra, lỗi hiển thị trên các trình duyệt khác nhau.</p>\n<p>Cũng không bao giờ được xài nhiều hơn 2 font ngoài hệ thống, quá nhiều font phải load, làm ảnh hưởng tốc độ load site. Không sử dụng quá nhiều font style italic, bold, light, thin, ragular, một đóng hầm bà lằng, luôn nhớ trong đầu less is more</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*KeLj5M7QYKIKkgIneNbKnQ@2x.png"> </p>\n<h1>Kết</h1>\n<p>Thằng designer thì vốn không ưa thằng developer, chê thằng developer không thấy được sự sáng tạo của nó, còn thằng developer thì luôn chửi thằng designer, nó cứ chế biến mấy cái tào lào khó implement chết mịa luôn. Tất cả những vấn đề trên có thể giải quyết bằng một cách thôi: TRAO ĐỔI. Trao đổi càng sớm, trao đổi khi có vấn đề sẽ tránh cho ra kết quả mà nhìn vào không giám nhận là con của mình. Với tất cả những dự án dù lơn hay nhỏ thì luôn luôn bạn phải cân đối giữa kết quả mong muốn, thời gian và chi phí phải bỏ ra</p>',id:"C:/anluu/luckyluu/posts/2017-03-08-thoi-dai-cua-pixel-perfect-da-het-phan-3/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-03-08T13:35:13.234Z",path:"/2017-03-08-thoi-dai-cua-pixel-perfect-da-het-phan-3",tags:["css","ux-ui"],title:"Thời đại của Pixel Perfect Design đã hết từ lâu - Phần 3"}}}}}});
//# sourceMappingURL=path---2017-03-13-gioi-thieu-ve-webpack-5c7e06898133a6cb9e7c.js.map