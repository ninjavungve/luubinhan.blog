webpackJsonp([0x9ed64e11ef8e],{1361:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#controlled-component-vs-uncontrolled-component">controlled component vs. uncontrolled component</a></li>\n<li><a href="#d%E1%BB%B1ng-form">Dựng Form</a></li>\n</ul>\n<!-- /TOC -->\n<p><img src=""></p>\n<h2 id="controlled-component-vs-uncontrolled-component"><a href="#controlled-component-vs-uncontrolled-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>controlled component vs. uncontrolled component</h2>\n<p>Không giống các element DOM, element FORM sẽ làm việc hơi khác trong React. Data của form sẽ được xử lý bởi component, không phải bởi DOM, thông thường chúng ta sử dụng controlled component, data của form sẽ được đưa vô component <code class="language-text">state</code> như hình bên dưới</p>\n<p><img src="https://process.filestackapi.com/cache=expiry:max/Qb7pi8kTzenybAUcijaB"></p>\n<p>Data từ <code class="language-text">dump components</code> sẽ được gởi vô hàm callback, nơi chúng ta lưu lại các thay đổi</p>\n<p>Nếu sử dụng uncontrolled component, tương tự như HTML form truyền thống, dữ liệu sẽ nằm trong DOM, không nằm trong component state, các component <code class="language-text">&lt;input /&gt;</code> hay <code class="language-text">&lt;textarea/&gt;</code> sẽ tự quản lý state của nó và tự động thay đổi khi user nhập dữ liệu, nếu cần dữ liệu này, chúng ta query tới DOM đó để lấy giá trị bằng <code class="language-text">ref</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">UncontrolledComponentForm</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'The value is: \'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>\n          Name<span class="token punctuation">:</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> input <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Submit<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đa số các trường hợp mình thường sử dụng controlled component để làm form, nhìn vào trực quan hơn và mình có thể validate được dữ liệu lúc nhập vào luôn.</p>\n<h2 id="dựng-form"><a href="#d%E1%BB%B1ng-form" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dựng Form</h2>\n<p>Sẽ có khá nhiều thư viện có sẵn để làm việc với form, nhưng với cá nhân mình, mình vẫn thích tự build hơn vì nếu mình muốn thêm validate đặc biệt hay tùy biến behavior của nó cũng đơn giản hơn, đồng thời giúp chúng ta nắm rõ hơn về React Form luôn.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>  \n\n<span class="token comment">/* Import Components */</span>\n<span class="token keyword">import</span> CheckBox <span class="token keyword">from</span> <span class="token string">\'../components/CheckBox\'</span><span class="token punctuation">;</span>  \n<span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">\'../components/Input\'</span><span class="token punctuation">;</span>  \n<span class="token keyword">import</span> TextArea <span class="token keyword">from</span> <span class="token string">\'../components/TextArea\'</span><span class="token punctuation">;</span>  \n<span class="token keyword">import</span> Select <span class="token keyword">from</span> <span class="token string">\'../components/Select\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'../components/Button\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">FormContainer</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>  \n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      newUser<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        name<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n        email<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n        age<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n        gender<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n        expertise<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n        about<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      genderOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Male\'</span><span class="token punctuation">,</span> <span class="token string">\'Female\'</span><span class="token punctuation">,</span> <span class="token string">\'Others\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      skillOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Programming\'</span><span class="token punctuation">,</span> <span class="token string">\'Development\'</span><span class="token punctuation">,</span> <span class="token string">\'Design\'</span><span class="token punctuation">,</span> <span class="token string">\'Testing\'</span><span class="token punctuation">]</span>\n\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">/* This life cycle hook gets executed when the component mounts */</span>\n\n  <span class="token function-variable function">handleFormSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Form submission logic</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">handleClearForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Logic for resetting the form</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">changeValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">//update state</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleFormSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">{</span><span class="token comment">/* Name of the user */</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">{</span><span class="token comment">/* Input for Age */</span><span class="token punctuation">}</span> \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">{</span><span class="token comment">/* Gender Selection */</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckBox</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">{</span><span class="token comment">/* List of Skills (eg. Programmer, developer) */</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextArea</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">{</span><span class="token comment">/* About you */</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleFormSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Submit\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClearForm<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Reset\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> FormContainer<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Mình sẽ không đi sâu vào các component <code class="language-text">Input</code>, <code class="language-text">Select</code>, <code class="language-text">Checkbox</code>, <code class="language-text">TextArea</code>, các bạn có thể sử dụng một UI library React bất kỳ, hoặc tự build nếu thích, đa phần các library này sẽ cho phép sử dụng cả 2 kiểu controlled/uncontrolled</p>\n<p>Hàm <code class="language-text">handleClearForm</code> sẽ reset toàn bộ state</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function-variable function">handleClearForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> \n    newUser<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      age<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      gender<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      skills<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      about<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bên trong hàm <code class="language-text">handleFormSubmit</code> ta có thể lấy giá trị của form và thực hiện một xử lý như <code class="language-text">dispatch</code> ra một action</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function-variable function">handleFormSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> userData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>newUser<span class="token punctuation">;</span>\n\n    <span class="token comment">// nếu connect FormContainer vào Redux, ta có thể dùng dispatch ở đây</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">someFunction</span><span class="token punctuation">(</span>userData<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>   </code></pre>\n      </div>\n<p>Bài này tác giả chưa đề cập những vấn đề sâu hơn như validate, bài sau mình sẽ bổ sung thêm.</p>\n<p><a href="https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y">Link bài gốc</a></p>\n<p>Tác giả: Manjunath</p>',timeToRead:3,excerpt:"controlled component vs. uncontrolled component Dựng Form controlled component vs. uncontrolled component Không giống các element DOM…",frontmatter:{title:"Làm việc với Form trong React",cover:"",date:"2018-05-22",category:null,tags:["javascript","react"],desc:"Xử lý form trong React, căn bản nhất"},fields:{slug:"/2018-05-22-huong-dan-lam-viec-voi-form-trong-react"}}},pathContext:{slug:"/2018-05-22-huong-dan-lam-viec-voi-form-trong-react",prev:{frontmatter:{title:"Webpack là gì và tại sao ta phải xài nó",desc:"Bài này sẽ nói rõ tại sao Webpack là sự lựa chọn sáng suốt cho bundle javascript",type:"post",category:null,tags:["javascript","webpack"],date:"2018-05-25",cover:""},fields:{slug:"/2018-05-25-huong-dan-viet-code-javascript-tot-hon-voi-webpack"}},next:{frontmatter:{title:"Hướng dẫn sử dụng thuộc tính counter-reset và counter-increment",desc:"Nếu muốn đánh số tự động trong css, ta thường sử dụng đến kiểu display list-style, bài này giới thiệu một thuộc tính khác ít ai biết tới",type:"post",category:null,tags:["css"],date:"2018-05-21",cover:""},fields:{slug:"/2018-05-21-huong-dan-thuoc-tinh-counter-increment-va-counter-reset"}}}}}});
//# sourceMappingURL=path---2018-05-22-huong-dan-lam-viec-voi-form-trong-react-a2fb8d474e1c18476445.js.map