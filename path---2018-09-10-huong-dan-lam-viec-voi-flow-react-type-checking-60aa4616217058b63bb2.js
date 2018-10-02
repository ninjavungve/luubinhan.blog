webpackJsonp([0xac4f97aeb02f],{1350:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#static-vs-dynamic-typing">Static vs Dynamic Typing</a></li>\n<li><a href="#t%E1%BA%A1i-sao-ch%E1%BB%8Dn-flow">Tại sao chọn Flow</a></li>\n<li><a href="#setup-flow-v%E1%BB%9Bi-react">Setup Flow với React</a></li>\n<li><a href="#define-type-check-cho-prop-v%C3%A0-state-c%E1%BB%A7a-cho-react-component">Define type check cho Prop và State của cho React Component</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="static-vs-dynamic-typing"><a href="#static-vs-dynamic-typing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Static vs Dynamic Typing</h1>\n<p>Để bắt đầu chúng ta phải hiểu cách javascript handle type</p>\n<p>Một cách ngắn gọn nhất ngôn ngữ statically-typed thì type của biến có thể xác định lúc <strong>compile</strong> (trước khi chạy), ngôn ngữ dynamically-typed thì chỉ biết được type của biến lúc <strong>runttime</strong></p>\n<p>Như vậy với ngôn ngữ dạng statically-typed, lỗi sẽ được báo ngay khi build hoặc trên editor khi chúng ta sử dụng type không đúng. Nhưng với những ngôn ngữ kiểu dynamically-typed như Javascript nó sẽ khác chút. Xem xét đoạn code sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n  prop1<span class="token punctuation">:</span> <span class="token string">\'Some text here\'</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myObject<span class="token punctuation">.</span><span class="token function">prop1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">prop1</code> được định nghĩ là một <strong>string</strong> nhưng chúng ta lại gọi <code class="language-text">myObject.prop1()</code> như một <strong>function</strong>. Nếu chúng ta chạy đoạn code này chúng ta sẽ nhận được lỗi trên trình duyệt</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">TypeError: myObject.prop1 is not a function</code></pre>\n      </div>\n<p>Những trường hợp <strong>quên mất</strong> kiểu của biến như vậy rất dễ gặp trong lúc code. Việc sử dụng static type check sẽ giúp phát hiện lỗi sớm hơn, mà phát hiện lỗi sớm hơn thì sẽ tốt hơn, right?</p>\n<p>Trong javascript chúng ta cũng có thể thay đổi type của biến như vầy</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myNumber <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myNumber<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>\nmyNumber <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myNumber<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// boolean</span></code></pre>\n      </div>\n<p>Để ngăn chặn những người khác hoặc chỉnh bản thân làm những chuyện sằn bậy như vậy, chúng ta phải đặt ràng buộc về type cho những biến này</p>\n<h1 id="tại-sao-chọn-flow"><a href="#t%E1%BA%A1i-sao-ch%E1%BB%8Dn-flow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tại sao chọn Flow</h1>\n<p>Để đặt ràng buộc type trong Javascript hay React chúng có những 3 tên tuổi nổi bật Typescript, PropTypes, Flow.</p>\n<p>Flow là thư viện của Facebook, hỗ trợ tốt nhất cho React, đứng trên góc độ của người làm sell, nếu nói chúng ta sử dụng Flow từ Facebook sẽ ngon hơn, Typescript là superset của javascript, việc dùng Typescript cũng thay đổi khá nhiều thứ khác trong project, mình cảm thấy nó tiêu tốn khá nhiều thời gian hơn trong lúc dev, PropTpyes đã ko còn được quan tâm nhiều như trước nữa từ sau khi có Flow</p>\n<p>Còn theo như phát biểu từ những người tạo ra Flow (những developer trong Facebook)</p>\n<p>"Chúng tôi built Flow vì thấy TypeScript đang đi không theo hướng mà công động mong đợi. Ví dụ, TypeScript cố tính không muốn đi theo hướng tập trung vào vấn đề type checking như một type system, không cung cấp việc generate ra document cho API với type đã định nghĩa. Nếu bạn muốn TypeScript làm cái gì bạn cũng phải bảo nó hết, ko hoàn toàn tự động. Mặc dù từ TypeScript 2.0 họ bắt đầu để ý chuyện này, tuy nhiên còn phải rất lâu mới bắt kịp Flow nhé"</p>\n<h1 id="setup-flow-với-react"><a href="#setup-flow-v%E1%BB%9Bi-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup Flow với React</h1>\n<p>Theo hướng dẫn trên tài liệu chính thức <a href="https://flow.org/en/docs/react/">https://flow.org/en/docs/react/</a></p>\n<p>Nếu khởi tạo project bằng Create-React-App thì chỉ việc instal Flow và tạo file <code class="language-text">.flowconfig</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">npm i flow-bin --save-dev</code></pre>\n      </div>\n<p>Bên trong file package.json, add thêm đoạn script để chạy flow</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"flow"</span><span class="token operator">:</span> <span class="token string">"flow"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Để init file <code class="language-text">.flowconfig</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">npm run flow init</code></pre>\n      </div>\n<p>Sau khi chạy lệnh này xong chúng ta sẽ có file <code class="language-text">.flowconfig</code> với nội dung sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">[ignore]\n[include]\n[libs]\n[lints]\n[options]\n[strict]</code></pre>\n      </div>\n<p>Để thêm type check của từng component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">//@flow</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Props</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>app<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu dùng cách viết thêm <code class="language-text">//@flow</code> vào mỗi file như vậy hơi chuối, chúng ta thay đổi config một chút trong file <code class="language-text">.flowconfig</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">[ignore] // file nào ko check bỏ vào đây\n.*/node_modules/.* // bỏ qua file trong thư mục node_modules\n.*/src/registerServiceWWorker\\.js\n.*/src/index\\.js\n.*\\.test\\.js\n\n[options]\nall=true // check tất cả file, gồm cả node_modules</code></pre>\n      </div>\n<h1 id="define-type-check-cho-prop-và-state-của-cho-react-component"><a href="#define-type-check-cho-prop-v%C3%A0-state-c%E1%BB%A7a-cho-react-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Define type check cho Prop và State của cho React Component</h1>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\ntype Props <span class="token operator">=</span> <span class="token punctuation">{</span>\n  strType<span class="token punctuation">:</span> string<span class="token punctuation">,</span>\n  numberType<span class="token operator">?</span><span class="token punctuation">:</span> number\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Props</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>strType<span class="token punctuation">,</span> numberType<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>app<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>String <span class="token punctuation">{</span>strType<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Number <span class="token punctuation">{</span>numberType<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://www.lullabot.com/articles/flow-for-static-type-checking-javascript">Link bài gốc</a></p>',timeToRead:4,excerpt:"Static vs Dynamic Typing Tại sao chọn Flow Setup Flow với React Define type check cho Prop và State của cho React Component Static vs…",frontmatter:{title:"Tại sao sử dụng Flow, và sử dụng Flow như thế nào trong React",cover:"",date:"2018-09-10",category:null,tags:["react","javascript"],desc:"Tại sao chúng ta cần type checking trong javascript, tại sao Flow lại là lựa chọn của nhiều developer hiện nay"},fields:{slug:"/2018-09-10-huong-dan-lam-viec-voi-flow-react-type-checking"}}},pathContext:{slug:"/2018-09-10-huong-dan-lam-viec-voi-flow-react-type-checking",prev:{frontmatter:{title:"Dependency injection trong Javascript",desc:"Dependency injection là một khái niệm hay gặp không chỉ trong Angular mà còn ở nhiều ngôn ngữ lập trình khác, Dependency injection không có gì ghê gớm cả, chỉ do cách dùng từ có vẻ to lớn vậy thôi",type:"post",category:null,tags:["javascript"],date:"2018-09-11",cover:""},fields:{slug:"/2018-09-11-huong-dan-giai-thich-dependency-injection-cho-nguoi-moi-bat-dau-khong-biet-gi"}},next:{frontmatter:{title:"Cách sử dụng refs trong React",desc:"Refs dùng để truy cập trực tiếp đến DOM trong React, nó sẽ rất hữu dụng ví dụ trong trường hợp chúng ta muốn thay đổi value của input mà ko muốn ử dụng props hoặc re-render lại toàn bộ component",type:"post",category:null,tags:["react","javascript"],date:"2018-08-24",cover:""},fields:{slug:"/2018-08-24-huong-dan-su-dung-refs-trong-react"}}}}}});
//# sourceMappingURL=path---2018-09-10-huong-dan-lam-viec-voi-flow-react-type-checking-60aa4616217058b63bb2.js.map