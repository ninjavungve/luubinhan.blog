webpackJsonp([0xa0df84c4e987],{540:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="trong-series-này"><a href="#trong-series-n%C3%A0y" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Trong Series này</h1>\n<ol>\n<li><a href="2018-05-25-viet-code-javascript-tot-hon-voi-webpack">Webpack là gì và tại sao ta phải xài nó</a></li>\n<li><a href="2018-05-27-huong-dan-webpack-4-cho-nguoi-moi-bat-dau">Dùng Loaders, code slitting trong webpack</a></li>\n<li><a href="2018-05-28-huong-dan-webpack-4-cho-nguoi-moi-bat-dau-phan-3">Plugins, Development Server</a></li>\n</ol>\n<h2 id="vấn-đề"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề</h2>\n<p>Viết code client-side nếu không có các công cụ hỗ trợ thì trước sau vì cũng giống như đống hỗn độn trên desktop, để maintain và người khác có thể vào đọc hiểu được thì việc code được tổ chức tốt là điều ai cũng biết, lý thuyết là thế, nhưng nếu cứ làm việc theo kiểu cũ cứ quăng script tràng lan bằng thẻ <code class="language-text">&lt;script&gt;</code> sẽ chẳng dễ gì sắp xếp và nhớ nổi cái nào là cái nào nếu, add thêm cỡ chục files, <em>best practice</em> khuyên rằng hạn chế số lượng file script càng ít càng tốt, tốt nhất là 1 file duy nhất.</p>\n<p>Trước đây có nhiều giải pháp cho vấn đề như là Gulp, dùng để bunch toàn bộ javascript thành 1 file. Nhưng chưa đủ. Với Gulp chúng ta đã đẩy các dependency ngang hàng nhau, và phụ thuộc vào biến global để chia sẽ dữ liệu giữa các files.</p>\n<h3 id="cách-tốt-hơn"><a href="#c%C3%A1ch-t%E1%BB%91t-h%C6%A1n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cách tốt hơn</h3>\n<p>Nếu trước đây chưa từng sử dụng mấy cái tool để quản lý asset ở frontend, tốt nhất là học luôn Webpack, bỏ qua Gulp, Gruntjs luôn. Còn nếu nếu đã từng dùng mấy task runner kiểu Gulp, Gruntjs, thì chuyển qua dùng webpack cũng không khó khăn lắm, chỉ là khác nhau cách tổ chức và quản lý dependency.</p>\n<h2 id="webpack-vs-gulp"><a href="#webpack-vs-gulp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Webpack vs. Gulp</h2>\n<p>Chắc đã từng nghe tới câu này: <strong>Gulp là task runner, Webpack là module bundler</strong>, ý nhĩa thật sự sau câu này là gì?</p>\n<p>Gulp là công cụ tự động hóa tốt, cho phép chúng ta setup một mớ các tiến trình phức tạp cần thực hiện (một cách tự động) bằng javascript, rồi chạy nó bằng một lệnh duy nhất. Vấn đề với Gulp là nếu code file A depend vào code ở file B, bạn cần báo cáo với Gulp để nó include file A trước, và khi bạn thêm càng lúc càng nhiều file depend chồng chéo kiểu này, cây dependency là lớn dần, và sẽ gần như không thể maintain được nữa, vì chúng ta phải config bằng tay, nếu sử dụng file manifest với plugin <code class="language-text">asset-builder</code> cũng không thể cứu vãn.</p>\n<p><img src="https://res.cloudinary.com/forestry-demo/image/fetch/c_limit,dpr_auto,f_auto,q_80,w_674/https://forestry.io/uploads/2018/03/webpack_fighter_of_the_gulpstack_champion_of_the_bundle.png"></p>\n<p>Bài toán dependency này đã được Webpack giải quyết triệt để. Những gì bạn cần làm là báo với Webpack file <strong>entry</strong> point mình cần bundle là gì, chuyện bạn <em>import module</em> lúc code sẽ do webpack đảm nhiệm chuyện dựng lên dependency graph, webpack sẽ bundle cho bạn 1 file duy nhất bạn cần. Chúng ta khỏi phải báo cáo với webpack thứ tự các file nào cần trước hay sau, để đó Webpack lo!</p>\n<p>Ngắn gọn là: với Gulp dependency bị giới hạn vì nó yêu cầu mình tự chỉ định sự phụ thuộc, Webpack thì nó dùng logic để tính toán rồi bundle đúng thứ tự.</p>\n<h2 id="viết-code-module"><a href="#vi%E1%BA%BFt-code-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Viết code Module</h2>\n<p>Để Webpack hoạt động như phép màu như vậy, chúng ta chỉ cần viết javascript của mình dạng <em>module</em>. Viết module trong javascript là tách các file ra thành nhiều file, việc sử dụng code giữa các file sẽ thực hiện bằng <strong>export</strong> và <strong>import</strong></p>\n<p>Webpack hổ trợ 2 chuẩn module hóa hiện giờ là <strong>EcmaScript</strong> và  <strong>CommonJS</strong>. Ví dụ bên dưới để hình dung cách viết module trong file <code class="language-text">hello.js</code> rồi <strong>import</strong> vào trong file <code class="language-text">app.js</code> bằng cả 2 kiểu viết EcmaScript và CommonJS</p>\n<p>Viết kiểu <strong>EcmaScript</strong></p>\n<p><strong>hello.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Hello Binh An!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>app.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>hello<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./hello\'</span>\n<span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Viết kiểu <strong>CommonJS</strong></p>\n<p><strong>hello.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Hello Bình An!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>app.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="cấu-hình-webpack"><a href="#c%E1%BA%A5u-h%C3%ACnh-webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cấu hình Webpack</h2>\n<p>Một điểm hay của webpack là nếu có ai đó đã config rồi thì những người sau không cần phải vào file config để hiểu cách tổ chức code, chỉ cần hiểu được cách tổ chức code của project.</p>\n<p>Giờ thử config đơn giản nhất để hiểu một số thành phần quan trọng nhất của webpack</p>\n<p>Tổ chức project như vầy</p>\n<div class="gatsby-highlight">\n      <pre class="language-basic"><code class="language-basic">src<span class="token operator">/</span>\n    app.js\nwebpack.config.js</code></pre>\n      </div>\n<p>Mặt định Webpack sẽ tìm file config với tên là <strong>webpack.config.js</strong>. Tiếp chúng ta cần cài <strong>webpack</strong> và <strong>webpack-cli</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> init -y\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack webpack-cli</code></pre>\n      </div>\n<p>Trong file <strong>webpack.config.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    entry<span class="token punctuation">:</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">,</span>\n    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>2 phần quan trọng nhất mà phải biết là <strong>entry</strong> - file source nằm ở đâu và <strong>output</strong> - file sẽ bundle ở đâu. Sử dụng module <code class="language-text">path</code> để biết vị trí thực tế lúc chạy.</p>\n<p>Chạy CLI để bundle</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">./node_modules/webpack-cli/bin/webpack.js</code></pre>\n      </div>\n<p>Nó sẽ đọc source trong file <code class="language-text">src/app.js</code> rồi compile vào <code class="language-text">dist/bundle.js</code>. Thư mục sau khi chạy xong sẽ có</p>\n<div class="gatsby-highlight">\n      <pre class="language-basic"><code class="language-basic">dist<span class="token operator">/</span>\n    bundle.js\nsrc<span class="token operator">/</span>\n    app.js\npackage.json\nwebpack.config.js</code></pre>\n      </div>\n<p>Để rút chạy đoạn CLI dài ngoằn <code class="language-text">./node_modules/webpack-cli/bin/webpack.js</code> có thể thêm một custom script trong file <strong>package.json</strong>. Bạn có thể chạy nó bằng <code class="language-text">npm run SCRIPT_NAME</code></p>\n<p>Thêm vào trong <strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>    \n    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \\"Error: no test specified\\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>\n        <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"./node_modules/webpack-cli/bin/webpack.js"</span><span class="token punctuation">,</span>\n        <span class="token property">"watch"</span><span class="token operator">:</span> <span class="token string">"./node_modules/webpack-cli/bin/webpack.js --watch"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Giờ chúng ta có thể chạy bằng lệnh <code class="language-text">npm run build</code>, ở trên chúng ta cũng vừa thêm đoạn <code class="language-text">npm run watch</code>, thêm option <code class="language-text">--watch</code> để khi có bất kỳ thay đổi nào nó sẽ tự động detect và compile lại.</p>\n<p>!!!! CUNG HỶ !!!!!</p>\n<p>Bạn đã chạm được vào cánh cửa đầu tiên của webpack, webpack còn nhiều khả năng nữa, tuy nhiên module bundle là core feature, bài tiếp theo chúng ta sẽ khám phá nhiều hơn như loaders, plugins, development server.</p>\n<p><a href="2017-10-18-import-va-export-trong-javascript">Tìm hiểu thêm về import và export</a></p>\n<p><a href="https://forestry.io/blog/write-better-javascript-with-webpack/">Link bài gốc</a></p>\n<p>Tác giả: DJ Walker</p>',timeToRead:5,excerpt:"Trong Series này Webpack là gì và tại sao ta phải xài nó Dùng Loaders, code slitting trong webpack Plugins, Development Server Vấn đề Viết…",frontmatter:{title:"Webpack là gì và tại sao ta phải xài nó",cover:"",date:"2018-05-25",category:null,tags:["javascript","webpack"],desc:"Bài này sẽ nói rõ tại sao Webpack là sự lựa chọn sáng suốt cho bundle javascript"},fields:{slug:"/2018-05-25-viet-code-javascript-tot-hon-voi-webpack"}}},pathContext:{slug:"/2018-05-25-viet-code-javascript-tot-hon-voi-webpack"}}}});
//# sourceMappingURL=path---2018-05-25-viet-code-javascript-tot-hon-voi-webpack-f651d24c02955a9c790d.js.map