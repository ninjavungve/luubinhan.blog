webpackJsonp([29],{"./node_modules/json-loader/index.js!./.cache/json/2018-03-29-query-string-voi-react-router.json":function(n,t){n.exports={data:{markdownRemark:{html:'<p>Khi làm web, nếu chúng ta muốn truyền một thông tin gì đó quá URL, ta sẽ sử dụng query string, cái này ai làm web chắc cũng biết</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>http://luubinhan.github.io/list?sortBy=date&sortOrder=desc</code></pre>\n      </div>\n<p>Cái đoạn sau dấu chấm hỏi gọi là query string <code>sortBy=date&#x26;sortOrder=desc</code></p>\n<p>Để tạo ra một đoạn <em>query string</em> như vậy ta sẽ sử dụng component <code>Link</code> của <em>react-router</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">let</span> queryParameters <span class="token operator">=</span> <span class="token punctuation">{</span>\n    sortBy<span class="token punctuation">:</span> <span class="token string">\'date\'</span><span class="token punctuation">,</span>\n    sortOrder<span class="token punctuation">:</span> <span class="token string">\'desc\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span>\n      <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        pathname<span class="token punctuation">:</span> <span class="token string">\'/list\'</span><span class="token punctuation">,</span>\n        query<span class="token punctuation">:</span> queryParameters\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    CLICK ME<span class="token operator">!</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Nếu ta thiết đặt Route cho đường path <code>list</code> đến <code>ListComponent</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ListComponent<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>thì bên trong <code>ListComponent</code> ta có thể truy xuất đến giá trị của query string này bằng <code>props.location</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>location<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// { sortBy: \'date\', sortOrder: \'desc\' }</span>\n</code></pre>\n      </div>',frontmatter:{date:"March 29, 2018",path:"/2018-03-29-query-string-voi-react-router",tags:["javascript","react"],title:"Query String với React Router",desc:"Cách sử dụng query string với React Router siêu căn bản"}}},pathContext:{prev:!1,next:{excerpt:"Kéo thả các Element Bên trong tab Elements có thể kéo các element HTML và thả nó vào vị trí mới Reference đến element đang chọn trong console Để reference đến 1 element đang được chọn, gõ  , nếu đang load jquery thì có thể dùng  Gọi lại giá trị tính...",html:'<h2>Kéo thả các Element</h2>\n<p>Bên trong tab Elements có thể kéo các element HTML và thả nó vào vị trí mới</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/drag-and-drop.gif" alt="Kéo thả các Element"></p>\n<h2>Reference đến element đang chọn trong console</h2>\n<p>Để reference đến 1 element đang được chọn, gõ <code>$0</code>, nếu đang load jquery thì có thể dùng <code>$($0)</code></p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/reference-elements.gif" alt="Reference đến element đang chọn trong console"></p>\n<h2>Gọi lại giá trị tính toán lần trước trong console</h2>\n<p><code>$_</code> để gọi lại giá trị tính toán lần trước</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>3 + 4\n// = 7\n$_ * 2\n// = 14</code></pre>\n      </div>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/use-last-result.gif" alt="Gọi lại giá trị tính toán lần trước trong console"></p>\n<h2>Xác định đoạn CSS được định nghĩa ở đâu</h2>\n<p><code>cmd-click</code> (<code>ctrl-click</code> trong windows) vào property CSS trong tab Elements để nhảy ngay tới chổ định nghĩa</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/find-where-css-defined.gif" alt="Xác định đoạn CSS được định nghĩa ở đâu"></p>\n<h2>screenshot một element</h2>\n<p>Chọn element + nhấn <code>cmd+shift+p</code> (<code>ctrl+shift+p</code> trong windows) để mở menu Command và chọn <strong>Capture node screenshot</strong></p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/screenshot-node.gif" alt="screenshot một element"></p>\n<h2>Tìm element sử dụng CSS selectors</h2>\n<p><code>ctrl+f</code> (<code>cmd+f</code> trong Mac) mở ô search, gõ đoạn css selector ở đây</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/find-elements-css-selectors.gif" alt="Tìm element sử dụng CSS selectors"></p>\n<h2>Shift-Enter trong console</h2>\n<p>Để gõ đoạn code trên nhiều dòng trong console, ấn phím <code>shift-enter</code></p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/multiple-lines-commands.gif" alt="Shift-Enter trong console"></p>\n<h2>Clear console</h2>\n<p>Để clear console thường ta sẽ nhấn nút Clear ở trên cùng, hoặc bằng gõ <code>ctrl+l</code> (<code>cmd+k</code>)</p>\n<h2><code>Go to</code> như trong sumblime text hay VSCode</h2>\n<p>Trong tab Source</p>\n<ul>\n<li><code>ctrl+o</code> (cmd+o) để hiển thị tất cả file đang load</li>\n<li><code>ctrl+shift+o</code> (cmd+shift+o) để hiển thị biểu tượng property, function hay là class trong file hiện tại</li>\n<li><code>ctrl+g</code> để nhảy đến dòng</li>\n</ul>\n<h2>Watch Expression</h2>\n<p>Thay vì phải viết đi viết lại biến hoặc expression trong lúc debug, thêm nó vào trong Watch Expression</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/watch-expressions.gif" alt="Watch Expression"></p>\n<h2>XHR/Fetch debugging</h2>\n<p>Chỉ định khi nào dừng nếu send đi một XHR/Fetch request trong XHR/Fetch breakpoint panel</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/xhr-fetch-breakpoints.png"></p>\n<h2>Debug khi DOM bị thay đổi</h2>\n<p>Right click vào element -> chọn <strong>enable Break on Subtree Modifications</strong>, khi có đoạn script nào thay đổi element, debugger sẽ stop ngay lập tức</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/break-subtree-modifications.png" alt="Debug khi DOM bị thay đổi"></p>',id:"E:/anluu/luckyluu/posts/2018-03-28-mot-vai-tip-su-dung-chrome-dev-tools/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2018-03-28T13:35:13.234Z",path:"/2018-03-28-mot-vai-tip-su-dung-chrome-dev-tools",tags:["javascript"],title:"Một vài tip sử dụng Chrome Dev Tools"}}}}}});
//# sourceMappingURL=path---2018-03-29-query-string-voi-react-router-e457da2dfcd7c920b34f.js.map