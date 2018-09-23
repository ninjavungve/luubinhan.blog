webpackJsonp([0xb1a9179162e4],{1314:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="trong-series-này"><a href="#trong-series-n%C3%A0y" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Trong Series này</h1>\n<ol>\n<li><a href="2018-05-25-viet-code-javascript-tot-hon-voi-webpack">Webpack là gì và tại sao ta phải xài nó</a></li>\n<li><a href="2018-05-27-huong-dan-webpack-4-cho-nguoi-moi-bat-dau">Dùng Loaders, code slitting trong webpack</a></li>\n<li><a href="2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3">Plugins, Development Server</a></li>\n</ol>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#trong-series-n%C3%A0y">Trong Series này</a></p>\n<ul>\n<li><a href="#loaders">Loaders</a></li>\n<li><a href="#babel-loader">Babel Loader</a></li>\n<li><a href="#sass-loader">SASS Loader</a></li>\n<li><a href="#image">Image</a></li>\n<li><a href="#code-splitting">Code splitting</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<p>Chúng ta mở lại file <strong>package.json</strong>, sửa lại chút</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">{\n    ...\n    "scripts": {\n<span class="token inserted">+     "develop": "webpack --mode development --watch",</span>\n<span class="token inserted">+     "build": "webpack --mode production"</span>\n    },\n    ...\n}</code></pre>\n      </div>\n<p>Với cách setup này, chỉ cần chạy <code class="language-text">npm run develop</code> chúng ta sẽ chạy webpack ở development mode và bật tính năng detect thay đổi để chạy lại.</p>\n<p>Khi chạy <code class="language-text">npm run build</code> chúng ta sẽ chạy webpack ở mode production, khi chạy ở mode này code sẽ được minified lại bằng Uglify JS, size nhỏ hơn khi chạy dev mode.</p>\n<h2 id="loaders"><a href="#loaders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loaders</h2>\n<p>Loaders là gì? loaders là những thư viện sẽ can thiệp trước lúc chúng ta import file, nó cho phép webpack mở rộng khả năng không chỉ còn là bundle javascript thôi, mà cả những static resource khác, như css, image, svg, ...</p>\n<h3 id="babel-loader"><a href="#babel-loader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Babel Loader</h3>\n<p>Thời điểm hiện tại chắc ai cũng viết JS kiểu mới, để transpile cái ES6 mà ta viết, chúng ta sẽ cần <code class="language-text">babel-loader</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-loader  @babel/core @babel/preset-env</code></pre>\n      </div>\n<p>Mở lại file <strong>webpack.config.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">const path = require(\'path\')\n\n  module.exports = {\n    entry: \'./src/index.js\',\n    output: {\n      filename: \'bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    },\n<span class="token inserted">+   module: {</span>\n<span class="token inserted">+     rules: [</span>\n<span class="token inserted">+       {</span>\n<span class="token inserted">+         test: /\\.js$/,</span>\n<span class="token inserted">+         exclude: /(node_modules|bower_components)/,</span>\n<span class="token inserted">+         use: {</span>\n<span class="token inserted">+           loader: \'babel-loader\',</span>\n<span class="token inserted">+         }</span>\n<span class="token inserted">+       }</span>\n<span class="token inserted">+     ]</span>\n<span class="token inserted">+   }</span>\n  }</code></pre>\n      </div>\n<p>Để cấu hình cách transpile của babel, chúng ta add thêm file <code class="language-text">.babelrc</code> vào cùng thư mục với <strong>webpack.config.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"@babel/env"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token property">"modules"</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"syntax-dynamic-import"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đoạn trên chúng ta đang cấu hình để khi Babel transpile, nó không đổi câu <code class="language-text">import</code> và <code class="language-text">export</code> về ES5 và cho phép import linh động, sau này dùng đến trong phần slitting code</p>\n<p>Giờ thì cứ vô tư viết ES6 nhé, vì khi bundle, webpack sẽ transpile code của chúng về thành ES5</p>\n<h2 id="sass-loader"><a href="#sass-loader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SASS Loader</h2>\n<p>Trước tiên cài một số package để làm việc với SASS</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev style-loader css-loader sass-loader node-sass</code></pre>\n      </div>\n<p><strong>webpack.config.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff"> module.exports = {\n    ...\n    module: {\n      rules: [\n        ...\n<span class="token inserted">+       {</span>\n<span class="token inserted">+         test: /\\.scss$/,</span>\n<span class="token inserted">+         use: [{</span>\n<span class="token inserted">+           loader: \'style-loader\'</span>\n<span class="token inserted">+         }, {</span>\n<span class="token inserted">+           loader: \'css-loader\'</span>\n<span class="token inserted">+         }, {</span>\n<span class="token inserted">+           loader: \'sass-loader\'</span>\n<span class="token inserted">+         }]</span>\n<span class="token inserted">+       }</span>\n      ]\n    }\n  }</code></pre>\n      </div>\n<p>Mấy cái loader này sẽ được thực hiện theo thứ tự</p>\n<ul>\n<li><code class="language-text">sass-loader</code> transforms Sass thành CSS.</li>\n<li><code class="language-text">css-loader</code> parses CSS vào JavaScript và resolve dependencies.</li>\n<li><code class="language-text">style-loader</code> chèn CSS vào bên trong thẻ <code class="language-text">&lt;style&gt;</code></li>\n</ul>\n<p>Có thể hình dung nó như một function với callback là một function khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">styleLoader</span><span class="token punctuation">(</span><span class="token function">cssLoader</span><span class="token punctuation">(</span><span class="token function">sassLoader</span><span class="token punctuation">(</span><span class="token string">"source"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Sau khi cấu hình như vậy chúng ta có thể import file  <code class="language-text">.scss</code> bên trong file javascript</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">import { groupBy } from \'lodash-es\'\nimport people from \'./people\'\n\n<span class="token inserted">+ import \'./style.scss\'</span>\n\n  ...</code></pre>\n      </div>\n<p>Tại sao chúng ta lại đi import CSS vào trong file js? Nếu bạn thời kỳ trước việc chèn hầm bà lằng kiểu này là cực kỳ bị lên án, nhưng bây giờ thời thế khác, một số lý do để trọn CSS vào trong js trong development</p>\n<ul>\n<li>Một component javascript sẽ có thể phụ thuộc vào CSS, images, SVG. Nếu được đóng gói thành 1 cục, chúng ta dễ mang nó sử dụng ở nơi khác hơn</li>\n<li>Nếu chúng ta không sử dụng component, đoạn css import trong component cũng sẽ không được import luôn, tránh những việc load css ở tất cả</li>\n<li>Trước đây nếu dùng OOP trong CSS, việc chỉnh sửa một đoạn css sẽ dễ bị side effect, ảnh hướng đến những chổ ta không mong muốn. CSS module để CSS chỉ hoạt động local thôi</li>\n<li>Giảm số lượng HTTP request xuống</li>\n</ul>\n<h3 id="image"><a href="#image" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Image</h3>\n<p>Dùng <code class="language-text">file-loader</code> để đọc file image. Với HTML chuẩn, image được sử dụng bằng 2 cách là dùng tag <code class="language-text">img</code> hoặc thuộc tính <code class="language-text">background-image</code>. Với Webpack, chúng ta có thể optimize cho trường hợp dung lượng image với kích thước nhỏ thành dạng <code class="language-text">string</code> bên trong javascript luôn. Lúc này trình duyệt không cần load riêng file image nữa</p>\n<p>Cài cái loader</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">nmp <span class="token function">install</span> --save-dev file-loader</code></pre>\n      </div>\n<p>webpack.config.js</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff"> module.exports = {\n    ...\n    module: {\n      rules: [\n        ...\n<span class="token inserted">+       {</span>\n<span class="token inserted">+         test: /\\.(png|svg|jpg|gif)$/,</span>\n<span class="token inserted">+         use: [</span>\n<span class="token inserted">+           {</span>\n<span class="token inserted">+             loader: \'file-loader\'</span>\n<span class="token inserted">+           }</span>\n<span class="token inserted">+         ]</span>\n<span class="token inserted">+       }</span>\n      ]\n    }\n  }</code></pre>\n      </div>\n<p>Trong lúc code chúng ta vẫn viết bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> codeURL <span class="token keyword">from</span> <span class="token string">\'./code.png\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>codeURL<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token operator">...</span></code></pre>\n      </div>\n<p>Kết quả bundle</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>data:image/png;base64,iVBO...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Có thể đọc thêm trên docs của <code class="language-text">file-loader</code> để xem cách chỉnh kích thước nào thì chuyển nội dung ảnh thành data URI. File loader còn thể thể xử lý trên một số dạng file khác nữa, chứ không chỉ là hình thôi không.</p>\n<h2 id="code-splitting"><a href="#code-splitting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code splitting</h2>\n<p>Trích từ trang chủ webpack</p>\n<blockquote>\n<p>Code splitting là một trong những tính năng hấp dẫn nhất của Webpack. Tính năng này cho phép bạn tách code ra thành nhiều file bundle để load khi cần thiết hoặc load xong xong. Cái này có thể dùng để giảm kích thước file bundle và kiểm soát được load resource hợp lý hơn, nếu sử dụng đúng cách, sẽ giảm đảng kể thời gian load trang</p>\n</blockquote>\n<p>Trước giờ chúng ta chỉ setup để bundle ra 1 file duy nhất từ <code class="language-text">src/index.js</code> ra file <code class="language-text">dist/bundle.js</code>. Khi ứng dúng phình ra, chúng ta cần tách code ra thành nhiều file, toàn bộ code đầu cần phải load hết ngay từ đầu đâu nhỉ? Dùng <a href="https://webpack.js.org/guides/code-splitting/">Code Slitting</a> và <a href="https://webpack.js.org/guides/lazy-loading/">Lazy Loading</a> để chỉ load khi cần.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">   const path = require(\'path\')\n\n  module.exports = {\n<span class="token deleted">-   entry: \'./src/index.js\',</span>\n<span class="token inserted">+   entry: {</span>\n<span class="token inserted">+     app: \'./src/app.js\'</span>\n<span class="token inserted">+   },</span>\n    output: {\n<span class="token deleted">-     filename: \'bundle.js\',</span>\n<span class="token inserted">+     filename: \'[name].bundle.js\',</span>\n      path: path.resolve(__dirname, \'dist\')\n    },\n    ...\n  }</code></pre>\n      </div>\n<p>Với setup như thế này, nếu chúng ta có 2 file trong thư mục <code class="language-text">src</code> là <code class="language-text">app.js</code> và <code class="language-text">chat.js</code>, webpack sẽ bundle ra 2 file <code class="language-text">chat.bundle.js</code>, <code class="language-text">app.bundle.js</code></p>\n<p>Bài sau nói tiếp plugins nhé, kết thúc với loaders ở đây</p>\n<p><a href="https://www.sitepoint.com/beginners-guide-webpack-module-bundling/">Link bài gốc</a>\nTác giả: Mark Brown</p>\n<p>Chỉnh sửa theo sự hiểu của mình một tí</p>',timeToRead:5,excerpt:"Trong Series này Webpack là gì và tại sao ta phải xài nó Dùng Loaders, code slitting trong webpack Plugins, Development Server Trong Series…",frontmatter:{title:"Hướng dẫn webpack 4 cho người mới bắt đầu - Phần 2",cover:"",date:"2018-05-27",category:"javascript",tags:["javascript","webpack"],desc:"Phần 2 trong series về webpack, mình sẽ nói về code slitting, loaders"},fields:{slug:"/2018-05-27-huong-dan-webpack-4-cho-nguoi-moi-bat-dau"}}},pathContext:{slug:"/2018-05-27-huong-dan-webpack-4-cho-nguoi-moi-bat-dau",prev:{frontmatter:{title:"Hướng dẫn webpack 4 cho người mới bắt đầu - Phần 3",desc:"Bài này sẽ nói Plugins, Development, HotModuleReplacement trong Webpack",type:"post",category:"javascript",tags:["javascript","webpack"],date:"2018-05-28",cover:""},fields:{slug:"/2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3"}},next:{frontmatter:{title:"Webpack là gì và tại sao ta phải xài nó",desc:"Bài này sẽ nói rõ tại sao Webpack là sự lựa chọn sáng suốt cho bundle javascript",type:"post",category:null,tags:["javascript","webpack"],date:"2018-05-25",cover:""},fields:{slug:"/2018-05-25-huong-dan-viet-code-javascript-tot-hon-voi-webpack"}}}}}});
//# sourceMappingURL=path---2018-05-27-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-f61c37082015474c2d2b.js.map