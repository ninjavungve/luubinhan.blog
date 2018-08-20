webpackJsonp([0xecdd7a760eaa],{1305:function(n,e){n.exports={data:{markdownRemark:{html:'<h1 id="trong-series-này"><a href="#trong-series-n%C3%A0y" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Trong Series này</h1>\n<ol>\n<li><a href="2018-05-25-viet-code-javascript-tot-hon-voi-webpack">Webpack là gì và tại sao ta phải xài nó</a></li>\n<li><a href="2018-05-27-huong-dan-webpack-4-cho-nguoi-moi-bat-dau">Dùng Loaders, code slitting trong webpack</a></li>\n<li><a href="2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3">Plugins, Development Server</a></li>\n</ol>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#trong-series-n%C3%A0y">Trong Series này</a></p>\n<ul>\n<li><a href="#t%C3%A1ch-css">Tách CSS</a></li>\n<li><a href="#c%E1%BA%ADp-nh%E1%BA%ADp-html-t%E1%BB%B1-%C4%91%E1%BB%99ng">Cập nhập HTML tự động</a></li>\n<li><a href="#development-server">Development Server</a></li>\n<li><a href="#hotmodulereplacement">HotModuleReplacement</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<p>Trong khi loader sẽ tiến hành transform từng file một, <strong>plugins</strong> sẽ tiến hành xử lý trong từng đoạn code</p>\n<p>Giờ chúng ta đã biết cách  bundle code, cài thêm các module bổ sung cho webpack, cách thêm các static asset, file bundle chúng ta sẽ bự dần bự dần - không sớm thì muộn thôi. Plugins sẽ giúp chúng ta tách phần code một cách thông mình hơn, optimize hơn cho production</p>\n<p>Thật ra ma nói, khi sử dụng <code class="language-text">mode</code> development/production trong webpack chúng ta đã sử dụng rất nhiều plugin mặc định trong webpack</p>\n<p><em>develoment</em></p>\n<ul>\n<li>lúc này giá trị biến <code class="language-text">process.env.NODE_ENV</code> sẽ bằng \'development\'</li>\n<li>dùng NamedModulesPlugin</li>\n</ul>\n<p><em>production</em></p>\n<ul>\n<li><code class="language-text">process.env.NODE_ENV</code> sẽ bằng \'production\'</li>\n<li>UglifyJsPlugin</li>\n<li>ModuleConcatenationPlugin</li>\n<li>NoEmitOnErrorsPlugin</li>\n</ul>\n<p>Trước khi thêm một số plugin khác, chúng ta sẽ tách file config ra thành 2, để sau này chúng ta apply các plugin khác nhau cho các mode chạy khác nhau</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff"><span class="token deleted">- webpack.config.js</span>\n<span class="token inserted">+ webpack.common.js</span>\n<span class="token inserted">+ webpack.dev.js</span>\n<span class="token inserted">+ webpack.prod.js</span></code></pre>\n      </div>\n<p>Cài thêm plugin là <code class="language-text">webpack-merge</code> để trộn file <em>webpack.common.js</em> với một trong 2 file webpack.dev.js hoặc webpack.prod.js</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-merge</code></pre>\n      </div>\n<p><strong>webpack.dev.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack-merge\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./webpack.common.js\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>common<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'development\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><strong>webpack.prod.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack-merge\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./webpack.common.js\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>common<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'production\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">  "scripts": {\n<span class="token deleted">-    "develop": "webpack --watch --mode development",</span>\n<span class="token deleted">-    "build": "webpack --mode production"</span>\n<span class="token inserted">+    "develop": "webpack --watch --config webpack.dev.js",</span>\n<span class="token inserted">+    "build": "webpack --config webpack.prod.js"</span>\n   },</code></pre>\n      </div>\n<h2 id="tách-css"><a href="#t%C3%A1ch-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tách CSS</h2>\n<p>Chúng ta sẽ tách ra CSS khi chạy production bằng plugin là <code class="language-text">ExtractTextWebpackPlugin</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev extract-text-webpack-plugin</code></pre>\n      </div>\n<p>Setup loader cho file .scss giữ nguyên cho development mode, chỉ thêm ExtractTextWebpackPlugin cho production</p>\n<p><strong>webpack.common.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff"> ...\n  module.exports = {\n    ...\n    module: {\n      rules: [\n        ...\n<span class="token deleted">-       {</span>\n<span class="token deleted">-         test: /\\.scss$/,</span>\n<span class="token deleted">-         use: [</span>\n<span class="token deleted">-           {</span>\n<span class="token deleted">-             loader: \'style-loader\'</span>\n<span class="token deleted">-           }, {</span>\n<span class="token deleted">-             loader: \'css-loader\'</span>\n<span class="token deleted">-           }, {</span>\n<span class="token deleted">-             loader: \'sass-loader\'</span>\n<span class="token deleted">-           }</span>\n<span class="token deleted">-         ]</span>\n<span class="token deleted">-       },</span>\n        ...\n      ]\n    }\n  }</code></pre>\n      </div>\n<p><strong>webpack.dev.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">const merge = require(\'webpack-merge\')\n  const common = require(\'./webpack.common.js\')\n\n  module.exports = merge(common, {\n    mode: \'development\',\n<span class="token inserted">+   module: {</span>\n<span class="token inserted">+     rules: [</span>\n<span class="token inserted">+       {</span>\n<span class="token inserted">+         test: /\\.scss$/,</span>\n<span class="token inserted">+         use: [</span>\n<span class="token inserted">+           {</span>\n<span class="token inserted">+             loader: \'style-loader\'</span>\n<span class="token inserted">+           }, {</span>\n<span class="token inserted">+             loader: \'css-loader\'</span>\n<span class="token inserted">+           }, {</span>\n<span class="token inserted">+             loader: \'sass-loader\'</span>\n<span class="token inserted">+           }</span>\n<span class="token inserted">+         ]</span>\n<span class="token inserted">+       }</span>\n<span class="token inserted">+     ]</span>\n<span class="token inserted">+   }</span>\n  })</code></pre>\n      </div>\n<p><strong>webpack.prod.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">  const merge = require(\'webpack-merge\')\n<span class="token inserted">+ const ExtractTextPlugin = require(\'extract-text-webpack-plugin\')</span>\n  const common = require(\'./webpack.common.js\')\n\n  module.exports = merge(common, {\n    mode: \'production\',\n<span class="token inserted">+   module: {</span>\n<span class="token inserted">+     rules: [</span>\n<span class="token inserted">+       {</span>\n<span class="token inserted">+         test: /\\.scss$/,</span>\n<span class="token inserted">+         use: ExtractTextPlugin.extract({</span>\n<span class="token inserted">+           fallback: \'style-loader\',</span>\n<span class="token inserted">+           use: [\'css-loader\', \'sass-loader\']</span>\n<span class="token inserted">+         })</span>\n<span class="token inserted">+       }</span>\n<span class="token inserted">+     ]</span>\n<span class="token inserted">+   },</span>\n<span class="token inserted">+   plugins: [</span>\n<span class="token inserted">+     new ExtractTextPlugin(\'style.css\')</span>\n<span class="token inserted">+   ]</span>\n  })</code></pre>\n      </div>\n<p>Nếu chạy <code class="language-text">npm run build</code>, chúng ta có 3 file</p>\n<ul>\n<li>chat.bundle.js</li>\n<li>app.bundle.js</li>\n<li>style.css</li>\n</ul>\n<h2 id="cập-nhập-html-tự-động"><a href="#c%E1%BA%ADp-nh%E1%BA%ADp-html-t%E1%BB%B1-%C4%91%E1%BB%99ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cập nhập HTML tự động</h2>\n<p>Mỗi lần thay đổi chúng ta cứ phải tự tay chỉnh sửa file <code class="language-text">index.html</code> thì hơi lười. Dùng <code class="language-text">html-webpack-plugin</code> để tự động hóa quá trình này, đồng thời cần thêm <code class="language-text">clean-webpack-plugin</code> để clear hết thư mục <code class="language-text">dist</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> instal --save-dev html-webpack-plugin clean-webpack-plugin</code></pre>\n      </div>\n<p><strong>webpack.common.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">const path = require(\'path\')\n<span class="token inserted">+ const CleanWebpackPlugin = require(\'clean-webpack-plugin\');</span>\n<span class="token inserted">+ const HtmlWebpackPlugin = require(\'html-webpack-plugin\');</span>\n\n  module.exports = {\n    ...\n<span class="token inserted">+   plugins: [</span>\n<span class="token inserted">+     new CleanWebpackPlugin([\'dist\']),</span>\n<span class="token inserted">+     new HtmlWebpackPlugin({</span>\n<span class="token inserted">+       title: \'My killer app\'</span>\n<span class="token inserted">+     })</span>\n<span class="token inserted">+   ]</span>\n  }</code></pre>\n      </div>\n<p>Giờ mỗi lần build, chúng ta xóa hết thư mục dist luôn</p>\n<h2 id="development-server"><a href="#development-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development Server</h2>\n<p>Với <code class="language-text">webpack-dev-server</code> cung cấp cho chúng ta một web server đơn giản với tính năng live reload rất rất là hữu ích luôn mấy man</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-dev-server</code></pre>\n      </div>\n<p><strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">  {\n    ...\n    "scripts": {\n<span class="token deleted">-     "develop": "webpack --watch --config webpack.dev.js",</span>\n<span class="token inserted">+     "develop": "webpack-dev-server --config webpack.dev.js",</span>\n    }\n    ...\n  }</code></pre>\n      </div>\n<p>Giờ mà chạy <code class="language-text">npm run develop</code> chúng ta sẽ có ngay server <a href="http://localhost:8080/">http://localhost:8080/</a></p>\n<h2 id="hotmodulereplacement"><a href="#hotmodulereplacement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HotModuleReplacement</h2>\n<p>Plugin <code class="language-text">HotModuleReplacement</code> sẽ nhỉnh hơn Live Reload một chút, thay vì live reload trình duyệt sẽ tự động refresh, chúng ta sẽ thấy nó load lại toàn bộ trang khi có thay đổi, còn HotModuleReplacement là nó swap nguyên cái module trong lúc đang chạy mà không cần refresh luôn. Nhanh như cái chớp mắt vậy. Nếu mà cấu hình đúng, chúng ta tiết kiệm được khối thời gian ngồi đợi load lại trang.</p>\n<p><strong>webpack.dev.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff"><span class="token inserted">+ const webpack = require(\'webpack\')</span>\n  const merge = require(\'webpack-merge\')\n  const common = require(\'./webpack.common.js\')\n\n  module.exports = merge(common, {\n    mode: \'development\',\n<span class="token inserted">+   devServer: {</span>\n<span class="token inserted">+     hot: true</span>\n<span class="token inserted">+   },</span>\n<span class="token inserted">+   plugins: [</span>\n<span class="token inserted">+     new webpack.HotModuleReplacementPlugin()</span>\n<span class="token inserted">+   ],</span>\n    ...\n  }</code></pre>\n      </div>\n<p>Cho phép swap module trong app</p>\n<p><strong>src/app.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff"><span class="token inserted">+ if (module.hot) {</span>\n<span class="token inserted">+   module.hot.accept()</span>\n<span class="token inserted">+ }</span>\n\n  ...</code></pre>\n      </div>\n<p><code class="language-text">module.hot</code> sẽ có giá trị là <code class="language-text">true</code> trong mode development và <code class="language-text">false</code> trong production.</p>\n<p><a href="https://www.sitepoint.com/beginners-guide-webpack-module-bundling/">Link bài gốc</a>\nTác giả: Mark Brown</p>\n<p>Chỉnh sửa theo sự hiểu của mình một tí</p>',timeToRead:5,excerpt:"Trong Series này Webpack là gì và tại sao ta phải xài nó Dùng Loaders, code slitting trong webpack Plugins, Development Server Trong Series…",frontmatter:{title:"Hướng dẫn webpack 4 cho người mới bắt đầu - Phần 3",cover:"",date:"2018-05-28",category:"javascript",tags:["javascript","webpack"],desc:"Bài này sẽ nói Plugins, Development, HotModuleReplacement trong Webpack"},fields:{slug:"/2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3"}}},pathContext:{slug:"/2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3",prev:{frontmatter:{title:"Làm việc với CSS Modules trong React",desc:"Sau rất nhiều năm kiếm cơm với CSS, và hiện tại vẫn thế, CSS vẫn luôn là niềm hứng thú của cá nhân mình. Ngày nảy ngày nay để làm việc với Component của React, chúng ta sẽ có nhiều lựa chọn hơn khi 'CSS trong JS' đang là lựa chọn hàng đầu. Trong thời đại của component phủ sóng khắp các mặt trận, CSS Modules hứa hiện là món ngon",type:"post",category:"react",tags:["react","javascript"]},fields:{slug:"/2018-06-15-huong-dan-lam-viec-voi-css-module"}},next:{frontmatter:{title:"Async Await giải thích và ví dụ",desc:"Hướng dẫn các bạn nắm vững asyn await trong javascript, kèm ví dụ cụ thể",type:"post",category:null,tags:["javascript"]},fields:{slug:"/2018-05-07-huong-dan-async-await-giai-thich-vi-du"}}}}}});
//# sourceMappingURL=path---2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3-480a6408482617261095.js.map