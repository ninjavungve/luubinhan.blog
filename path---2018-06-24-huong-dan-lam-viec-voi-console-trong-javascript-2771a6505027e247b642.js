webpackJsonp([0xb591739fbc4f],{1315:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#consolelog-consoleerror-consolewarn-v%C3%A0-consoleinfo">console.log, console.error, console.warn và console.info</a></li>\n<li><a href="#consolegroup">console.group</a></li>\n<li><a href="#consoletable">console.table</a></li>\n<li><a href="#consolecount-consoletime-consoletimeend">console.count, console.time, console.timeEnd</a></li>\n<li><a href="#consoletrace-v%C3%A0-consoleassert">console.trace và console.assert</a></li>\n<li><a href="#x%C3%B3a-h%E1%BA%BFt-console">Xóa hết console</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="consolelog-consoleerror-consolewarn-và-consoleinfo"><a href="#consolelog-consoleerror-consolewarn-v%C3%A0-consoleinfo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>console.log, console.error, console.warn và console.info</h1>\n<p>Đây là những phương thức được sử dụng nhiều nhất. Có thể truyền vào 1 hoặc nhiều parameter, mỗi parameter trường vào sẽ được hiển thị về kết quả ở dạng string và cách nhau bằng khoảng trắng, trong trường hợp là object hay array thì nó hiện thị dạng cây</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*1Zh9s1-XCx27o6FAKGb5Hg.png"></p>\n<h1 id="consolegroup"><a href="#consolegroup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>console.group</h1>\n<p>Phương thức này cho phép nhóm các câu <code class="language-text">console.log</code> vào trong một group có thể collapse. Syntax rất đơn giản, đặt các câu console.log  vào giữa cặp <code class="language-text">console.group(&#39;ten-group&#39;)</code> và <code class="language-text">console.groupEnd()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">\'doSomething Proifle\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> _data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'evauating data: \'</span><span class="token punctuation">,</span> _data<span class="token punctuation">)</span>\n  <span class="token keyword">const</span> _fullName <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'fullName: \'</span><span class="token punctuation">,</span> _fullName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> _id <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'id: \'</span><span class="token punctuation">,</span> _id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">{</span>firstName<span class="token punctuation">:</span> <span class="token string">\'An\'</span><span class="token punctuation">,</span> <span class="token string">\'lastName\'</span><span class="token punctuation">:</span> <span class="token string">\'Luu\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Kết quả</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*PWOoWRhG9lWjhU4z6qFCOQ.png"></p>\n<h1 id="consoletable"><a href="#consoletable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>console.table</h1>\n<p>Từ khi biết đến <code class="language-text">console.table</code> cuộc đời tui bước sang trang mới! Hiển thị JSON bên trong console.log thì kinh dị lắm, với <code class="language-text">console.table</code> sẽ hiển thị mảng dữ liệu trong table cực dể dòm</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> typeOfConsole <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">\'log\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'standard\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">\'info\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'standard\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">\'table\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'WOW\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>typeOfConsole<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> mySocial <span class="token operator">=</span> <span class="token punctuation">{</span>\n  facebook<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  linkedIn<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  flickr<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  instagram<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  VKontaktebadoo<span class="token punctuation">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>mySocial<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'Socials\'</span><span class="token punctuation">,</span> <span class="token string">\'I an account\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Thế này thì sao</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*Fb2VQtATz3uCH2hw6yVB-w.png"></p>\n<h1 id="consolecount-consoletime-consoletimeend"><a href="#consolecount-consoletime-consoletimeend" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>console.count, console.time, console.timeEnd</h1>\n<p>Vũ khí cần thiết để debug, <code class="language-text">console.count</code> trả về số lần và thời gian hàm <code class="language-text">count()</code> đượcg gọi.</p>\n<p>Truyền vào tên cho <code class="language-text">console.time</code>, gọi <code class="language-text">console.timeEnd</code> để dừng thời gian và hiển thị kết quả, đặt đoạn code cần đo thời gian chạy giữa 2 hàm này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">\'total\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">\'init arr\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">\'init arr\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> _type <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">\'even\'</span> <span class="token punctuation">:</span> <span class="token string">\'odd\'</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>_type <span class="token operator">+</span> <span class="token string">\'added\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">\'total\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Kết quả</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*Fc8jI1oaCE57aB-baawGaw.png"></p>\n<h1 id="consoletrace-và-consoleassert"><a href="#consoletrace-v%C3%A0-consoleassert" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>console.trace và console.assert</h1>\n<p>Cả hai hàm này sẽ in ra một đoạn thông báo kèm với dòng code thứ mấy trong file. Tưởng tượng chúng ta tạo một thư viện js và muốn thông báo đến user lỗi xuất hiện ở đâu. Khác biệt của <code class="language-text">console.assert</code> khác với <code class="language-text">console.trace</code> là nó chỉ in kết quả nếu điều kiện để kiểm tra trả về <code class="language-text">false</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">lesserThan</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span> a <span class="token operator">&lt;</span> b<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">\'message\'</span><span class="token punctuation">:</span> <span class="token string">\'a is not lesser than b\'</span><span class="token punctuation">,</span>  <span class="token string">\'a\'</span><span class="token punctuation">:</span> a<span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">:</span> b<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n<span class="token function">lesserThan</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">\'End\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*oeGhwHWJ0JALyKZMJq_inw.png"></p>\n<h1 id="xóa-hết-console"><a href="#x%C3%B3a-h%E1%BA%BFt-console" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xóa hết console</h1>\n<p>Nếu chúng đang sử dụng webpack, nếu muốn xóa hết toàn bộ các chổ có console trong lúc build production thì dễ ợt, dùng uglifyjs-webpack-plugin</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'uglifyjs-webpack-plugin\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> debug <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">"production"</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\noptimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        minimizer<span class="token punctuation">:</span> <span class="token operator">!</span>debug <span class="token operator">?</span> <span class="token punctuation">[</span>\n            <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                <span class="token comment">// Compression specific options</span>\n                uglifyOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    <span class="token comment">// Eliminate comments</span>\n                    comments<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                    compress<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                       <span class="token comment">// remove warnings</span>\n                       warnings<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                       <span class="token comment">// Drop console statements</span>\n                       drop_console<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span>\n           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Cảm ơn bạn đã đọc hết bài viết</p>\n<p><a href="https://medium.freecodecamp.org/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472">Link bài viết gốc của tác giả Riccardo Canella</a></p>',timeToRead:3,excerpt:"console.log, console.error, console.warn và console.info console.group console.table console.count, console.time, console.timeEnd console…",frontmatter:{title:"Làm việc với console trong javascript",cover:"",date:"2018-06-24",category:"javascript",tags:["javascript"],desc:"Một web developer chân chính là người biết sử dụng console.log :D. Tuy nhiên cũng nên biết rằng console nó còn rất nhiều phương thức khác nữa"},fields:{slug:"/2018-06-24-huong-dan-lam-viec-voi-console-trong-javascript"}}},pathContext:{slug:"/2018-06-24-huong-dan-lam-viec-voi-console-trong-javascript",prev:{frontmatter:{title:"Thay componentWillReceiveProps với getDerivedStateFromProps",desc:"Từ bản release React 16.3, các phương thức lifecycle có thay chút ít, một số không còn được khuyến khích sử dụng và thay thế bằng một phương thức khác",type:"post",category:"react",tags:["react","javascript"]},fields:{slug:"/2018-06-28-huong-dan-thay-component-will-receive-props"}},next:{frontmatter:{title:"Một số ứng dụng của middleware",desc:"Tiếp theo bài trước về middleware, ứng dụng với các trường hợp thực tế",type:"post",category:"react",tags:["react","redux","javascript","middleware"]},fields:{slug:"/2018-06-21-huong-dan-mot-so-ung-dung-cua-middleware"}}}}}});
//# sourceMappingURL=path---2018-06-24-huong-dan-lam-viec-voi-console-trong-javascript-2771a6505027e247b642.js.map