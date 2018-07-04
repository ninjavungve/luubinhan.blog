webpackJsonp([30],{"./node_modules/json-loader/index.js!./.cache/json/2018-07-02-javascript-modules-tren-web.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>Lưu ý quan trọng JS modules được hổ trợ bởi các trình duyệt XỊN, hàng cùi mía của Microsoft thì chưa support</p>\n<h2>JS Modules là gì</h2>\n<p>JS modules hay còn gọi là ES modules, ECMAcript modules là một tính năng quan trọng mới của của javascript, trước đây chúng ta sử dụng CommonJS trong Node.js hay AMD để có thể sử dụng tính năng này trước thời đại. Các thư viện này nó làm gì? nó cho phép chúng ta <code>import</code> và <code>export</code> cái chúng ta muốn</p>\n<p>Và giờ javascript trong tương lai không xa chúng ta sẽ không cần những thư viện này nữa vì có hổ trợ sẵn.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// file lib.mjs</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> repeat <span class="token operator">=</span> string <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>string<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>string<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shout</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>string<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Chúng ta <code>import</code> nó từ file khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// file main.mjs</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>repeat<span class="token punctuation">,</span> shout<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./lib.mjs\'</span><span class="token punctuation">;</span>\n<span class="token function">repeat</span><span class="token punctuation">(</span><span class="token string">\'hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// -> \'hello hello\'</span>\n\n<span class="token function">shout</span><span class="token punctuation">(</span><span class="token string">\'Modules in action\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// -> \'MODULES IN ACTIONS!\'</span>\n</code></pre>\n      </div>\n<p>Module file như vậy sẽ có một vài điểm cần lưu ý</p>\n<ul>\n<li><code>strict mode</code> bật mặt định</li>\n<li>Kiểu viết comment như trong HTML không sử dụng được</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// Không sử dụng được đâu</span>\n<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> TODO<span class="token punctuation">:</span> Rename x to y<span class="token punctuation">.</span>\n<span class="token comment" spellcheck="true">// Viêt comment bình thường thôi</span>\n<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// TODO: Rename x to y.</span>\n</code></pre>\n      </div>\n<ul>\n<li>lexical top-level scope, nghĩa là nếu khởi tạo biến <code>var foo = 28</code> bên trong module không tạo một biến global tên <code>foo</code>, chúng ta không access được <code>window.foo</code></li>\n<li>Chỉ có thể sử dụng <code>import</code> và <code>export</code> trong file <code>.mjs</code>, file thường ko xài được.</li>\n</ul>\n<h2>Sử dụng trên trình duyệt</h2>\n<p>Để <strong>báo</strong> với trình duyệt chúng ta đang load 1 file module js</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">scr</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>main.mjs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">nomodule</span> <span class="token attr-name">scr</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fallback.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Ở đây ngoài việc biết được trình duyệt đang mở có hổ trợ module ko, chúng ta cũng có thể đoán được là nó có hổ trợ js mới không như arrow function, async - await</p>\n<p>Một điều tuyệt vời khác của <code>type="module"</code> là mặc dù chúng ta add thêm bao nhiêu tag tùy thích nhưng nó sẽ chỉ load 1 file nếu giống nhau, ngược lại với js thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>classic.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>classic.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token comment" spellcheck="true">&lt;!-- classic.js executes multiple times. --></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module.mjs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module.mjs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"><span class="token keyword">import</span> <span class="token string">\'./module.mjs\'</span><span class="token punctuation">;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token comment" spellcheck="true">&lt;!-- module.mjs executes only once. --></span>\n</code></pre>\n      </div>\n<h2>Lưu ý về extention</h2>\n<p>Ở trên chúng ta sử dụng file extention là <code>.mjs</code>, đây chỉ là một quy ước để dễ phân biệt, trên web nếu javascript được served bằng MIME type \'text/javascript\' thì gần như là như nhau, sự phân biệt thực sự được đánh dấu bằng <code>type="module"</code> trên thẻ <code>script</code></p>\n<h2>Module mặc định là load defer</h2>\n<p>JS bình thường sẽ block HTML parser khi nó chưa load xong, trừ khi chúng ta thêm attribute là <code>defer</code> trên tag script, khi là module, tính năng <code>defer</code> là mặc định <code>true</code></p>\n<p><a href="https://developers.google.com/web/fundamentals/primers/modules">Link bài gốc</a></p>',frontmatter:{date:"July 02, 2018",path:"/2018-07-02-javascript-modules-tren-web",tags:["javascript"],title:"Sử dụng javascript modules trên web",desc:"Giới thiệu module trong ECMAcript"}}},pathContext:{prev:{excerpt:"Cần nắm Khi sử dụng   các element con trong nó chúng ta sẽ canh theo 2 phương, gọi là phương ngang và phương đứng nhé. flex-direction  sẽ có 4 giá trị để ta set : element con xếp theo từng hàng, chỉ xuống hàng khi set  , hoặc viết tắt 2 thuộc tính...",html:'<h2>Cần nắm</h2>\n<p>Khi sử dụng <code>display: flex</code> các element con trong nó chúng ta sẽ canh theo 2 phương, gọi là phương ngang và phương đứng nhé.</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/30183/image/axes.png"></p>\n<h2>flex-direction</h2>\n<p><code>flex-direction</code> sẽ có 4 giá trị để ta set</p>\n<ol>\n<li><code>flex-direction: row</code>: element con xếp theo từng hàng, chỉ xuống hàng khi set <code>flex-wrap: wrap</code>, hoặc viết tắt 2 thuộc tính này lại thành <code>flex-flow: row wrap</code></li>\n<li><code>flex-direction: row-reserve</code>: element con xếp thèo hàng đi từ phải qua trái</li>\n<li><code>flex-direction: column</code>: element con xếp theo cột từ trên xuống dưới</li>\n<li><code>flex-direction: column-reserve</code>: element con xếp theo cột từ dưới lên trên</li>\n</ol>\n<p><img src="http://codropspz.tympanus.netdna-cdn.com/codrops/wp-content/uploads/2015/02/flex-direction-illustration.jpg"></p>\n<h2>justify-content</h2>\n<p>Với <code>justify-content</code> sẽ ảnh hưởng tới phương ngang của các element con, nếu <code>.container</code> chúng ta xếp các element theo dạng row (mặc định khi set <code>display: flex</code>), chúng ta can thịp chiều xếp đống element con trong row này bằng <code>justify-content</code></p>\n<ol>\n<li><code>flex-start</code> : elements từ trái qua phải trong 1 row</li>\n<li><code>flex-end</code>: elements từ phải qua trái trong 1 row</li>\n<li><code>center</code>: dàn các element từ giữa ra 2 bên</li>\n<li><code>space-between</code>: dàn các element đều hết 1 row, chỉ chừa khoảng trống giữa 2 element, không chừa khoảng trống 2 element cuối</li>\n<li><code>space-around</code>: tương tự như <code>space-around</code> nhưng chừa luôn khoảng trống 2 element cuối</li>\n</ol>\n<p><img src="https://uploads.toptal.io/blog/image/122559/toptal-blog-image-1490181185089.2_newsletter_copy_11-ac07811eeed0c992b21c660cd6119ca8.jpg"></p>\n<h2>align-items và align-self</h2>\n<p>Thuộc tính <code>align-items</code> sẽ ảnh hưởng đến phương đứng của element con, nếu <code>align-items</code> dùng để set ở <code>.container</code> thì <code>align-self</code> sẽ set ở element con để override lại giá trị trên từng thằng con</p>\n<p>Cả 2 thằng này đều có thể có những giá trị sau</p>\n<ol>\n<li><code>auto</code> giá trị <code>align-self</code> kế thừa từ <code>align-items</code>, mặc định của <code>align-self</code></li>\n<li><code>flex-start</code>: align từ trên xuống</li>\n<li><code>flex-end</code>: align từ dưới lên</li>\n<li><code>center</code>: align từ giữa ra trên dưới</li>\n<li><code>baseline</code>: align theo baseline của các element nằm ngang nhau</li>\n<li><code>stretch</code>: kéo độ cao của element để phủ hết chiều đứng của <code>.container</code></li>\n</ol>\n<p><img src="https://image.slidesharecdn.com/css3-layoutinctrlpdf-130218082731-phpapp01/95/slide-53-1024.jpg"></p>',id:"C:/xampp/htdocs/luckyluu/posts/2018-07-04-tong-hop-canh-le-voi-flexbox-alignment/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2018-07-04T13:35:13.234Z",path:"/2018-07-04-tong-hop-canh-le-voi-flexbox-alignment",tags:["css"],title:"Tổng quát về canh lề với Flexbox display"}},next:{excerpt:"Đăng nhập vào Goddady, mở tab My Products, chọn nút  Manage Cuộn xuống ở dưới cuối trang, click link  Manage DNS Hàng type  A , nhập vào IP của Github Server: 185.199.108.153, lên đây xem  https://help.github.com/articles/setting-up-an-apex-domain/...",html:'<p>Đăng nhập vào Goddady, mở tab My Products, chọn nút <strong>Manage</strong></p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Y9e7HtJvVv7jshINs46mTA.png"></p>\n<p>Cuộn xuống ở dưới cuối trang, click link <strong>Manage DNS</strong></p>\n<ul>\n<li>Hàng type <strong>A</strong>, nhập vào IP của Github Server: 185.199.108.153, lên đây xem <a href="https://help.github.com/articles/setting-up-an-apex-domain/">https://help.github.com/articles/setting-up-an-apex-domain/</a></li>\n<li>Hàng CNAME với Name "www" nhập địa chỉ url trang github page muốn trỏ tới, ví dụ như luubinhan.github.io/blog/</li>\n</ul>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*vL7RX_AyXRsSfO27NYF5iA.png"></p>\n<p>Bên trong thư mục public của site, tạo thêm file tên CNAME, mở file này lên, nhập nội dung là tên miền</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*zJsdMXE8aiHEuu6ObDu7ow.png"></p>\n<p>Xong, dễ cực. Cảm ơn bạn đã đọc hết bài viết</p>',id:"C:/xampp/htdocs/luckyluu/posts/2018-07-01-huong-dan-cai-dat-ten-mien-cho-githubpage-su-dung-godady/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2018-07-01T13:35:13.234Z",path:"/2018-07-01-huong-dan-cai-dat-ten-mien-cho-githubpage-su-dung-godady",tags:["web","dns","githubpage"],title:"Hướng dẫn setup tên miền GoDaddy với Github Page"}}}}}});
//# sourceMappingURL=path---2018-07-02-javascript-modules-tren-web-06d12b216517f120b204.js.map