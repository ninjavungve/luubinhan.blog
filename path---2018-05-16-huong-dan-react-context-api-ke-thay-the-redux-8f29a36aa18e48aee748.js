webpackJsonp([99650798010405],{1271:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#context-api-l%C3%A0-c%C3%A1i-g%C3%AC">Context API là cái gì</a></li>\n<li><a href="#s%E1%BB%AD-d%E1%BB%A5ng-react-context-api-nh%C6%B0-th%E1%BA%BF-n%C3%A0o">Sử dụng React Context API như thế nào</a></li>\n<li><a href="#khi-n%C3%A0o-th%C3%AC-n%C3%AAn-s%E1%BB%AD-d%E1%BB%A5ng-context-api">Khi nào thì nên sử dụng Context API</a></li>\n</ul>\n<!-- /TOC -->\n<p>Bản React 16.3.0 được giới thiệu với khá nhiều khái niệm và tính năng mới của React, trong đó được nhiều quan tâm hơn cả là Context API. Chúng ta sẽ cùng tìm hiểu</p>\n<ul>\n<li>Context API là cái gì</li>\n<li>Thay thể Redux bằng Context API bằng cách nào</li>\n<li>Khi nào thì nên sử dụng Context API</li>\n</ul>\n<h2 id="context-api-là-cái-gì"><a href="#context-api-l%C3%A0-c%C3%A1i-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Context API là cái gì</h2>\n<p>Định nghĩa official từ React docs</p>\n<blockquote>\n<p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>\n</blockquote>\n<p>Khái niệm về Context thì không phải là mới, mà nó đã có từ trước, cũng tương tự như Redux, giúp chúng ta truyền dữ liệu từ trên xuống theo <em>đường tắt</em>, tức không theo một thứ tự từ 1->2->3->4.</p>\n<p>Cái khác từ phiên bản React 16.3.0 có lẽ là ở chổ mọi thử được implement một cách rõ ràng hơn, dễ hình dung hơn, thay vì trước đây việc sử dụng Context API không được khuyến khích vì nó còn đang trong giai đoạn phát triển, chưa hoàn thiện nên để tránh sự cố có thể xảy ra, trên tài liệu chính thức của React luôn nói rõ không nên xài trong thời điểm đó.</p>\n<h2 id="sử-dụng-react-context-api-như-thế-nào"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-react-context-api-nh%C6%B0-th%E1%BA%BF-n%C3%A0o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng React Context API như thế nào</h2>\n<p>Sẽ bao gồm 3 bước</p>\n<ol>\n<li>Khởi tạo giá trị ban đầu cho context api bằng <code class="language-text">React.createContext</code>, hàm này trả về một object bao gồm là <code class="language-text">Provider</code> và <code class="language-text">Consumer</code></li>\n<li>Sử dụng <code class="language-text">Provider</code> này trên component trên cùng, truyền vào giá trị qua prop <code class="language-text">value</code></li>\n<li>Component <code class="language-text">Consumer</code> có thể sử dụng ở bất cứ đâu bên dưới <code class="language-text">Provider</code>, <code class="language-text">Consumer</code> có thể get được giá trị của prop <code class="language-text">value</code> của <code class="language-text">Provider</code> thông qua prop <code class="language-text">children</code></li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token constant">DEFAULT_STATE</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    allChar<span class="token punctuation">:</span> Char<span class="token punctuation">,</span>\n    searchTerm<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_STATE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Provider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token constant">DEFAULT_STATE</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">searchTermChanged</span> <span class="token operator">=</span> searchTerm <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>searchTerm<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThemeContext.Provider</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span>\n          searchTermChanged<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>searchTermChanged<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ThemeContext.Provider</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta tạo ra một component <code class="language-text">Provider</code>, component này sẽ trả về context Provider, bên trong context Provider chúng ta đưa tất tật state của component vào trong trong prop <code class="language-text">value</code> và các hàm sử lý state luôn. Sau đó chúng ta có thể dùng component <code class="language-text">Provider</code> mới build này như một root component (component nằm trên cùng)</p>\n<p>Chúng ta tạo thêm một component <code class="language-text">Consumer</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>ThemeContext<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./Provider\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThemeContext.Consumer</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span>allChar<span class="token punctuation">,</span> searchTerm<span class="token punctuation">,</span> searchTermChanged<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> char <span class="token operator">=</span> searchTerm\n            <span class="token operator">?</span> allChar<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n                char <span class="token operator">=></span>\n                  char<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchTerm<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span>\n              <span class="token punctuation">)</span>\n            <span class="token punctuation">:</span> allChar<span class="token punctuation">;</span>\n\n          <span class="token keyword">return</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> child <span class="token operator">=></span>\n            React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              char<span class="token punctuation">,</span>\n              searchTerm<span class="token punctuation">,</span>\n              searchTermChanged<span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n          <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ThemeContext.Consumer</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bên trong component <code class="language-text">Comsumer</code> thực ra ta trả về context <code class="language-text">Consumer</code> từ context đã tạo trước đó. Sau đó ta sử dụng cặp <code class="language-text">React.Children.map</code> và <code class="language-text">React.cloneElement</code> để đưa toàn bộ các state vào trong prop</p>\n<p>Chúng ta sử dụng 2 component mới này để bọc lấy component <code class="language-text">App</code> là xong</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Provider <span class="token keyword">from</span> <span class="token string">\'./Provider\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Consumer <span class="token keyword">from</span> <span class="token string">\'./Consumer\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./App\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Consumer</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Consumer</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="khi-nào-thì-nên-sử-dụng-context-api"><a href="#khi-n%C3%A0o-th%C3%AC-n%C3%AAn-s%E1%BB%AD-d%E1%BB%A5ng-context-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khi nào thì nên sử dụng Context API</h2>\n<p>Mỗi app mỗi khác, tùy theo nhu cầu và <strong>tình hình</strong> của từng app, câu trả lời đúng nhất chắc là phải để thực nhiệm sử dụng trên nhiều dự án. Có thể nói là react context API implement đơn giản hơn nhiều so với Redux hay MobX. Theo cá nhân mình thấy Context API sẽ chưa thay thể được Redux, nếu bạn đã và đang sử dụng Redux và chưa có gì phàn nàn về nó thì cứ xài tiếp thôi.</p>\n<p>Full Source Code: <a href="https://github.com/rajatgeekyants/superhero">https://github.com/rajatgeekyants/superhero</a></p>\n<p>Tác giả: Rajat S</p>\n<p>Link bài gốc: <a href="https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3">https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3</a></p>',timeToRead:4,excerpt:"Context API là cái gì Sử dụng React Context API như thế nào Khi nào thì nên sử dụng Context API Bản React 16.3.0 được giới thiệu với khá…",frontmatter:{title:"React Context API - có phải sẽ thay thế Redux",cover:"",date:"2018-05-16",category:null,tags:["javascript","react"],desc:"Thử sử dụng React Context API để thay thể Redux cho State Management"},fields:{slug:"/2018-05-16-huong-dan-react-context-api-ke-thay-the-redux"}}},pathContext:{slug:"/2018-05-16-huong-dan-react-context-api-ke-thay-the-redux",prev:{frontmatter:{title:"Hướng dẫn sử dụng thuộc tính counter-reset và counter-increment",desc:"Nếu muốn đánh số tự động trong css, ta thường sử dụng đến kiểu display list-style, bài này giới thiệu một thuộc tính khác ít ai biết tới",type:"post",category:null,tags:["css"],date:"2018-05-21",cover:""},fields:{slug:"/2018-05-21-huong-dan-thuoc-tinh-counter-increment-va-counter-reset"}},next:{frontmatter:{title:"Giải thích async/await của javascript",desc:"Hướng dẫn các bạn nắm vững async/await trong javascript, kèm ví dụ cụ thể",type:"post",category:null,tags:["javascript"],date:"2018-05-07",cover:""},fields:{slug:"/2018-05-07-huong-dan-async-await-giai-thich-vi-du"}}}}}});
//# sourceMappingURL=path---2018-05-16-huong-dan-react-context-api-ke-thay-the-redux-8f29a36aa18e48aee748.js.map