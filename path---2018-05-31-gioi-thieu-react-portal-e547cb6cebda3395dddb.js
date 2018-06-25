webpackJsonp([33],{"./node_modules/json-loader/index.js!./.cache/json/2018-05-31-gioi-thieu-react-portal.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Gọi là bản hổ trợ chính thức vì trước bản React 16 thì không có support, chúng ta phải dùng các thư viện bổ sung. Giờ thì nó official rồi nhé.</p>\n<h2>Vấn đề Portal giải quyết</h2>\n<p>Thông thường khi chúng ta có component cha là A, bên trong đó render component con là B, thì thằng B này sẽ luôn bị bọc lại bên trong A</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>component-c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>component-a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>component-b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Giờ nếu ta muốn khi viết thì vẫn viết component B bên trong component A, nhưng kết quả html ta có được thì component B lại nằm trong component C. Đó là lúc chúng ta cần đến Portal, ta sẽ bọc component B bằng hàm <code>createPortal</code>, để khi <code>render</code> B thì nó lại <code>render</code> ở C.</p>\n<h2>Cú pháp</h2>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Trong đó</p>\n<ul>\n<li><code>ReactDOM.createPortal</code> là hàm của <code>react-dom</code></li>\n<li>child là thằng B, thằng con đi lông nhông không thèm ở nhà với cha nó</li>\n<li>container là nhà thằng hàng xóm, nơi thằng con B hoang đàng sẽ ở ké.</li>\n</ul>\n<h2>Sử dụng</h2>\n<p>Để sử dụng Portal, chúng ta tạo ra một component mới, độc lập với B, rồi đẩy thằng B hay bất kỳ đứa nào muốn có cuộc sống du mục thành child component của component mới tạo này, đặt tên là <code>MyPortal</code> nha.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyPortal</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// tìm coi có đứa nào chịu chứa chấp nó không</span>\n    <span class="token keyword">const</span> haveTarget <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// không nơi chứa chấp thì ta ko render luôn</span>\n    <span class="token keyword">return</span> haveTarget <span class="token operator">?</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span>\n      haveTarget\n    <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">null</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nMyPortal<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// là id của html element ta sẽ append cái đứa con hoang đàng vô</span>\n  target<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> MyPortal<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Component A sẽ viết như thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token operator">...</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>component-a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        Hello An<span class="token punctuation">.</span>Luu\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyPortal</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>targetForB<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>component-b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                Em là B<span class="token operator">!</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyPortal</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n<span class="token operator">...</span>\n\n<span class="token comment" spellcheck="true">// trong đó, id có thể nằm ở bất kỳ component nào đó khác, thậm chí window khác luôn mới ghê</span>\n\n<span class="token comment" spellcheck="true">// ví dụ component C</span>\n<span class="token operator">...</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>component-c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        Em là C<span class="token operator">!</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>targetForB<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n<span class="token operator">...</span>\n</code></pre>\n      </div>\n<p>Đọc thêm </p>\n<ul>\n<li><a href="https://reactjs.org/docs/portals.html">https://reactjs.org/docs/portals.html</a> </li>\n<li><a href="https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202">https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202</a></li>\n</ul>',frontmatter:{date:"May 31, 2018",path:"/2018-05-31-gioi-thieu-react-portal",tags:["javascript","react"],title:"Giới thiệu React Portal",desc:"Tìm hiểu về Portals, bản hổ trợ chính thức của react-dom"}}},pathContext:{prev:!1,next:{excerpt:"Trong Series này Webpack là gì và tại sao ta phải xài nó Dùng Loaders, code slitting trong webpack Plugins, Development Server Trong khi loader sẽ tiến hành transform từng file một,  plugins  sẽ tiến hành xử lý trong từng đoạn code Giờ chúng ta đã...",html:'<h1>Trong Series này</h1>\n<ol>\n<li><a href="2018-05-25-viet-code-javascript-tot-hon-voi-webpack">Webpack là gì và tại sao ta phải xài nó</a></li>\n<li><a href="2018-05-27-huong-dan-webpack-4-cho-nguoi-moi-bat-dau">Dùng Loaders, code slitting trong webpack</a></li>\n<li><a href="2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3">Plugins, Development Server</a></li>\n</ol>\n<p>Trong khi loader sẽ tiến hành transform từng file một, <strong>plugins</strong> sẽ tiến hành xử lý trong từng đoạn code</p>\n<p>Giờ chúng ta đã biết cách  bundle code, cài thêm các module bổ sung cho webpack, cách thêm các static asset, file bundle chúng ta sẽ bự dần bự dần - không sớm thì muộn thôi. Plugins sẽ giúp chúng ta tách phần code một cách thông mình hơn, optimize hơn cho production</p>\n<p>Thật ra ma nói, khi sử dụng <code>mode</code> development/production trong webpack chúng ta đã sử dụng rất nhiều plugin mặc định trong webpack</p>\n<p><em>develoment</em></p>\n<ul>\n<li>lúc này giá trị biến <code>process.env.NODE_ENV</code> sẽ bằng \'development\'</li>\n<li>dùng NamedModulesPlugin</li>\n</ul>\n<p><em>production</em></p>\n<ul>\n<li><code>process.env.NODE_ENV</code> sẽ bằng \'production\'</li>\n<li>UglifyJsPlugin</li>\n<li>ModuleConcatenationPlugin</li>\n<li>NoEmitOnErrorsPlugin</li>\n</ul>\n<p>Trước khi thêm một số plugin khác, chúng ta sẽ tách file config ra thành 2, để sau này chúng ta apply các plugin khác nhau cho các mode chạy khác nhau</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code><span class="token deleted">- webpack.config.js</span>\n<span class="token inserted">+ webpack.common.js</span>\n<span class="token inserted">+ webpack.dev.js</span>\n<span class="token inserted">+ webpack.prod.js</span>\n</code></pre>\n      </div>\n<p>Cài thêm plugin là <code>webpack-merge</code> để trộn file <em>webpack.common.js</em> với một trong 2 file webpack.dev.js hoặc webpack.prod.js</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-merge\n</code></pre>\n      </div>\n<p><strong>webpack.dev.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack-merge\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./webpack.common.js\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>common<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'development\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><strong>webpack.prod.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack-merge\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./webpack.common.js\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>common<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'production\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>  "scripts": {\n<span class="token deleted">-    "develop": "webpack --watch --mode development",</span>\n<span class="token deleted">-    "build": "webpack --mode production"</span>\n<span class="token inserted">+    "develop": "webpack --watch --config webpack.dev.js",</span>\n<span class="token inserted">+    "build": "webpack --config webpack.prod.js"</span>\n   },\n</code></pre>\n      </div>\n<h2>Tách CSS</h2>\n<p>Chúng ta sẽ tách ra CSS khi chạy production bằng plugin là <code>ExtractTextWebpackPlugin</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev extract-text-webpack-plugin\n</code></pre>\n      </div>\n<p>Setup loader cho file .scss giữ nguyên cho development mode, chỉ thêm ExtractTextWebpackPlugin cho production</p>\n<p><strong>webpack.common.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code> ...\n  module.exports = {\n    ...\n    module: {\n      rules: [\n        ...\n<span class="token deleted">-       {</span>\n<span class="token deleted">-         test: /\\.scss$/,</span>\n<span class="token deleted">-         use: [</span>\n<span class="token deleted">-           {</span>\n<span class="token deleted">-             loader: \'style-loader\'</span>\n<span class="token deleted">-           }, {</span>\n<span class="token deleted">-             loader: \'css-loader\'</span>\n<span class="token deleted">-           }, {</span>\n<span class="token deleted">-             loader: \'sass-loader\'</span>\n<span class="token deleted">-           }</span>\n<span class="token deleted">-         ]</span>\n<span class="token deleted">-       },</span>\n        ...\n      ]\n    }\n  }\n</code></pre>\n      </div>\n<p><strong>webpack.dev.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>const merge = require(\'webpack-merge\')\n  const common = require(\'./webpack.common.js\')\n\n  module.exports = merge(common, {\n    mode: \'development\',\n<span class="token inserted">+   module: {</span>\n<span class="token inserted">+     rules: [</span>\n<span class="token inserted">+       {</span>\n<span class="token inserted">+         test: /\\.scss$/,</span>\n<span class="token inserted">+         use: [</span>\n<span class="token inserted">+           {</span>\n<span class="token inserted">+             loader: \'style-loader\'</span>\n<span class="token inserted">+           }, {</span>\n<span class="token inserted">+             loader: \'css-loader\'</span>\n<span class="token inserted">+           }, {</span>\n<span class="token inserted">+             loader: \'sass-loader\'</span>\n<span class="token inserted">+           }</span>\n<span class="token inserted">+         ]</span>\n<span class="token inserted">+       }</span>\n<span class="token inserted">+     ]</span>\n<span class="token inserted">+   }</span>\n  })\n</code></pre>\n      </div>\n<p><strong>webpack.prod.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>  const merge = require(\'webpack-merge\')\n<span class="token inserted">+ const ExtractTextPlugin = require(\'extract-text-webpack-plugin\')</span>\n  const common = require(\'./webpack.common.js\')\n\n  module.exports = merge(common, {\n    mode: \'production\',\n<span class="token inserted">+   module: {</span>\n<span class="token inserted">+     rules: [</span>\n<span class="token inserted">+       {</span>\n<span class="token inserted">+         test: /\\.scss$/,</span>\n<span class="token inserted">+         use: ExtractTextPlugin.extract({</span>\n<span class="token inserted">+           fallback: \'style-loader\',</span>\n<span class="token inserted">+           use: [\'css-loader\', \'sass-loader\']</span>\n<span class="token inserted">+         })</span>\n<span class="token inserted">+       }</span>\n<span class="token inserted">+     ]</span>\n<span class="token inserted">+   },</span>\n<span class="token inserted">+   plugins: [</span>\n<span class="token inserted">+     new ExtractTextPlugin(\'style.css\')</span>\n<span class="token inserted">+   ]</span>\n  })\n</code></pre>\n      </div>\n<p>Nếu chạy <code>npm run build</code>, chúng ta có 3 file</p>\n<ul>\n<li>chat.bundle.js</li>\n<li>app.bundle.js</li>\n<li>style.css</li>\n</ul>\n<h2>Cập nhập HTML tự động</h2>\n<p>Mỗi lần thay đổi chúng ta cứ phải tự tay chỉnh sửa file <code>index.html</code> thì hơi lười. Dùng <code>html-webpack-plugin</code> để tự động hóa quá trình này, đồng thời cần thêm <code>clean-webpack-plugin</code> để clear hết thư mục <code>dist</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> instal --save-dev html-webpack-plugin clean-webpack-plugin\n</code></pre>\n      </div>\n<p><strong>webpack.common.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>const path = require(\'path\')\n<span class="token inserted">+ const CleanWebpackPlugin = require(\'clean-webpack-plugin\');</span>\n<span class="token inserted">+ const HtmlWebpackPlugin = require(\'html-webpack-plugin\');</span>\n\n  module.exports = {\n    ...\n<span class="token inserted">+   plugins: [</span>\n<span class="token inserted">+     new CleanWebpackPlugin([\'dist\']),</span>\n<span class="token inserted">+     new HtmlWebpackPlugin({</span>\n<span class="token inserted">+       title: \'My killer app\'</span>\n<span class="token inserted">+     })</span>\n<span class="token inserted">+   ]</span>\n  }\n</code></pre>\n      </div>\n<p>Giờ mỗi lần build, chúng ta xóa hết thư mục dist luôn</p>\n<h2>Development Server</h2>\n<p>Với <code>webpack-dev-server</code> cung cấp cho chúng ta một web server đơn giản với tính năng live reload rất rất là hữu ích luôn mấy man</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-dev-server\n</code></pre>\n      </div>\n<p><strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>  {\n    ...\n    "scripts": {\n<span class="token deleted">-     "develop": "webpack --watch --config webpack.dev.js",</span>\n<span class="token inserted">+     "develop": "webpack-dev-server --config webpack.dev.js",</span>\n    }\n    ...\n  }\n</code></pre>\n      </div>\n<p>Giờ mà chạy <code>npm run develop</code> chúng ta sẽ có ngay server <a href="http://localhost:8080/">http://localhost:8080/</a></p>\n<h2>HotModuleReplacement</h2>\n<p>Plugin <code>HotModuleReplacement</code> sẽ nhỉnh hơn Live Reload một chút, thay vì live reload trình duyệt sẽ tự động refresh, chúng ta sẽ thấy nó load lại toàn bộ trang khi có thay đổi, còn HotModuleReplacement là nó swap nguyên cái module trong lúc đang chạy mà không cần refresh luôn. Nhanh như cái chớp mắt vậy. Nếu mà cấu hình đúng, chúng ta tiết kiệm được khối thời gian ngồi đợi load lại trang.</p>\n<p><strong>webpack.dev.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code><span class="token inserted">+ const webpack = require(\'webpack\')</span>\n  const merge = require(\'webpack-merge\')\n  const common = require(\'./webpack.common.js\')\n\n  module.exports = merge(common, {\n    mode: \'development\',\n<span class="token inserted">+   devServer: {</span>\n<span class="token inserted">+     hot: true</span>\n<span class="token inserted">+   },</span>\n<span class="token inserted">+   plugins: [</span>\n<span class="token inserted">+     new webpack.HotModuleReplacementPlugin()</span>\n<span class="token inserted">+   ],</span>\n    ...\n  }\n</code></pre>\n      </div>\n<p>Cho phép swap module trong app</p>\n<p><strong>src/app.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code><span class="token inserted">+ if (module.hot) {</span>\n<span class="token inserted">+   module.hot.accept()</span>\n<span class="token inserted">+ }</span>\n\n  ...\n</code></pre>\n      </div>\n<p><code>module.hot</code> sẽ có giá trị là <code>true</code> trong mode development và <code>false</code> trong production.</p>\n<p><a href="https://www.sitepoint.com/beginners-guide-webpack-module-bundling/">Link bài gốc</a>\nTác giả: Mark Brown</p>\n<p>Chỉnh sửa theo sự hiểu của mình một tí</p>',id:"E:/anluu/luckyluu/posts/2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2018-05-28T13:35:13.234Z",path:"/2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3",tags:["javascript","webpack"],title:"Hướng dẫn webpack 4 cho người mới bắt đầu - Phần 3"}}}}}});
//# sourceMappingURL=path---2018-05-31-gioi-thieu-react-portal-e547cb6cebda3395dddb.js.map