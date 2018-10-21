webpackJsonp([0x8f4390ebb9c1],{1260:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Khi làm web, nếu chúng ta muốn truyền một thông tin gì đó quá URL, ta sẽ sử dụng query string, cái này ai làm web chắc cũng biết</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">http://luubinhan.github.io/list?sortBy=date&amp;sortOrder=desc</code></pre>\n      </div>\n<p>Cái đoạn sau dấu chấm hỏi gọi là query string <code class="language-text">sortBy=date&amp;sortOrder=desc</code></p>\n<p>Để tạo ra một đoạn <em>query string</em> như vậy ta sẽ sử dụng component <code class="language-text">Link</code> của <em>react-router</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">let</span> queryParameters <span class="token operator">=</span> <span class="token punctuation">{</span>\n    sortBy<span class="token punctuation">:</span> <span class="token string">\'date\'</span><span class="token punctuation">,</span>\n    sortOrder<span class="token punctuation">:</span> <span class="token string">\'desc\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span>\n      <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        pathname<span class="token punctuation">:</span> <span class="token string">\'/list\'</span><span class="token punctuation">,</span>\n        query<span class="token punctuation">:</span> queryParameters\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token constant">CLICK</span> <span class="token constant">ME</span><span class="token operator">!</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu ta thiết đặt Route cho đường path <code class="language-text">list</code> đến <code class="language-text">ListComponent</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ListComponent<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>thì bên trong <code class="language-text">ListComponent</code> ta có thể truy xuất đến giá trị của query string này bằng <code class="language-text">props.location</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token punctuation">{</span>location<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span>\n<span class="token comment">// { sortBy: \'date\', sortOrder: \'desc\' }</span></code></pre>\n      </div>',timeToRead:1,excerpt:"Khi làm web, nếu chúng ta muốn truyền một thông tin gì đó quá URL, ta sẽ sử dụng query string, cái này ai làm web chắc cũng biết Cái đoạn…",frontmatter:{title:"Query String với React Router",cover:"",date:"2018-03-29",category:null,tags:["javascript","react"],desc:"Cách sử dụng query string với React Router siêu căn bản"},fields:{slug:"/2018-03-29-huong-dan-query-string-voi-react-router"}}},pathContext:{slug:"/2018-03-29-huong-dan-query-string-voi-react-router",prev:{frontmatter:{title:"Ba cách để hiểu Promise",desc:"3 cách để thẩm thấu được Promise trong javascript",type:"post",category:null,tags:["javascript","react"],date:"2018-04-03",cover:""},fields:{slug:"/2018-04-03-huong-dan-ba-cach-de-hieu-promise"}},next:{frontmatter:{title:"Một vài tip sử dụng Chrome Dev Tools",desc:"Chrome DevTools càng ngày càng mạnh mấy bạn, bạn nào làm frontend cũng phải biết xài, một vài tip cóp nhặt có thể bạn chưa biết",type:"post",category:null,tags:["chrome"],date:"2018-03-28",cover:""},fields:{slug:"/2018-03-28-huong-dan-mot-vai-tip-su-dung-chrome-dev-tools"}}}}}});
//# sourceMappingURL=path---2018-03-29-huong-dan-query-string-voi-react-router-d86c3e5241e0c2f0b725.js.map