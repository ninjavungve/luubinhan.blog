webpackJsonp([0xe3b164023d19],{1251:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#s%E1%BB%AD-d%E1%BB%A5ng-reactcreateclass">Sử dụng <code class="language-text">React.createClass</code></a></li>\n<li><a href="#bind-trong-l%C3%BAc-render">Bind trong lúc render</a></li>\n<li><a href="#s%E1%BB%AD-d%E1%BB%A5ng-arrow-function">Sử dụng Arrow function</a></li>\n<li><a href="#bind-trong-cunstructor">Bind trong cunstructor</a></li>\n<li><a href="#s%E1%BB%AD--d%E1%BB%A5ng-arrow-function-trong-thu%E1%BB%99c-t%C3%ADnh-c%E1%BB%A7a-class">Sử  dụng <code class="language-text">Arrow Function</code> trong thuộc tính của class</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="sử-dụng-code-classlanguage-textreactcreateclasscode"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-code-classlanguage-textreactcreateclasscode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng <code class="language-text">React.createClass</code></h1>\n<p>Nếu sử dụng <code class="language-text">React.createClass</code> react tự động <strong>bind toàn bộ</strong> từ khóa <code class="language-text">this</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> Contacts <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Tuy nhiên từ khi ES6 có hỗ trợ <code class="language-text">class</code>, React.createClass có thể bị tách ra các release trong tương lai.</p>\n<h1 id="bind-trong-lúc-render"><a href="#bind-trong-l%C3%BAc-render" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bind trong lúc render</h1>\n<p>Nếu khai báo một component React bằng cách <code class="language-text">extends React.Component</code>, <code class="language-text">this</code> sẽ không được tự động bind như đã nói ở trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Contacts</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Cách này tuy là sạch sẽ gọn ràng dễ hiểu, tuy nhiên lại ảnh hưởng nhiều tới performance vì mỗi function sẽ <em>reallocated</em> lúc render. <strong>Kinh nghiệm không bind bằng cách này</strong></p>\n<h1 id="sử-dụng-arrow-function"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-arrow-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng Arrow function</h1>\n<p>Tương tự như cách trên, sử dụng <strong>arrow function</strong> để không thay đổi giá trị của <code class="language-text">this</code> lúc render</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Contacts</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>handChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Cách này cũng không nên làm vì ảnh hương tới performance luôn</p>\n<h1 id="bind-trong-cunstructor"><a href="#bind-trong-cunstructor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bind trong cunstructor</h1>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đây là cách được khuyến cáo sử dụng, nếu thật sự quan tâm tới performance thì nên sử dụng cách này khi muốn bind từ khóa <code class="language-text">this</code>.</p>\n<h1 id="sử--dụng-code-classlanguage-textarrow-functioncode-trong-thuộc-tính-của-class"><a href="#s%E1%BB%AD--d%E1%BB%A5ng-code-classlanguage-textarrow-functioncode-trong-thu%E1%BB%99c-t%C3%ADnh-c%E1%BB%A7a-class" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử  dụng <code class="language-text">Arrow Function</code> trong thuộc tính của class</h1>\n<p>Muốn sử dụng cách này, phải bật tính năng <em>transform-class-properties</em> trong Babel, xem thêm package này tại <a href="http://babeljs.io/docs/plugins/transform-class-properties">http://babeljs.io/docs/plugins/transform-class-properties</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// call this function from render </span>\n  <span class="token comment">// and this.whatever in here works fine.</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Đây cũng là cách mà mình thường sử dụng nhất vì vừa sạch vừa tốt cho performance</p>',timeToRead:2,excerpt:"Sử dụng  Bind trong lúc render Sử dụng Arrow function Bind trong cunstructor Sử  dụng   trong thuộc tính của class Sử dụng  Nếu sử dụng…",frontmatter:{title:"React Bind Pattern: 5 cách chỉ định tham chiếu this",cover:"",date:"2017-10-11",category:"react",tags:["react","javascript"],desc:"Để thay đổi ngữ cảnh của chữ this trong javascript, sử dụng ở đâu và như thế nào cho hợp lý nhất"},fields:{slug:"/2017-10-11-react-bind-pattern-5-cach-tham-chieu-this"}}},pathContext:{slug:"/2017-10-11-react-bind-pattern-5-cach-tham-chieu-this",prev:{frontmatter:{title:"Nắm vững Promise trong javascript",desc:"Cùng tìm hiểu Promise của javascript, tự tạo một Promise",type:"post",category:"javascript",tags:["javascript"],date:"2017-10-12",cover:""},fields:{slug:"/2017-10-12-javascript-promise"}},next:{frontmatter:{title:"Thiết kế tuyệt đẹp vs. Thực tế: bài học từ Facebook",desc:"Bài viết dịch lại của một anh làm product design cho facebook đăng tải trên medium",type:"post",category:"ux-ui",tags:["ux-ui","design","web"],date:"2017-10-03",cover:""},fields:{slug:"/2017-10-03-thiet-ke-an-tuong-vs-thiet-ke-thuc-te-bai-hoc-thuc-te"}}}}}});
//# sourceMappingURL=path---2017-10-11-react-bind-pattern-5-cach-tham-chieu-this-f57fa507fb1ec064f26c.js.map