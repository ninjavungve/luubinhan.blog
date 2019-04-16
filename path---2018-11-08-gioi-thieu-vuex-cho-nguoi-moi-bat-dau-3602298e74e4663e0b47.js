webpackJsonp([0xda34206ba46],{1367:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#state">state</a></li>\n<li><a href="#mutations">mutations</a></li>\n<li><a href="#actions">actions</a></li>\n<li><a href="#getters">getters</a></li>\n<li><a href="#modules">modules</a></li>\n</ul>\n<!-- /TOC -->\n<p>Vuex là một cái store cho Vue, nó giống hệt như redux store của React, cũng giải quyết những vấn đề như redux, nên nếu bạn ko biết tại sao nó lại cần thì có thể đọc lại <a href="/blog/2018-02-14-huong-dan-redux-la-gi-tai-sao-phai-dung">Redux là gì và tại sao phải dùng</a>.</p>\n<p>Một số khái niệm chính của Vuex, các khái niệm này gần như là tương đồng với redux</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/2028/posts/32354/image/vueccvuex.png" alt="Giới thiệu Vuex cho người mới bắt đầu"></p>\n<p>Trong store có</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Vue<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  state<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  mutations<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  actions<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  getters<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  modules<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="state"><a href="#state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>state</h2>\n<p>Tất cả dữ liệu mà store nắm giữ</p>\n<h2 id="mutations"><a href="#mutations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mutations</h2>\n<p><code class="language-text">mutations</code> được config trong store (nó như reducer của redux) là tập những phương thức được dùng để update state. Chúng ta không update state trực tiếp, không gọi đến các hàm mutation trực tiếp, chúng ta gọi <code class="language-text">this.$store.commit(&#39;ten-phuong-thuc&#39;, payload)</code> để gọi các phương thức này.</p>\n<div class="note">Mutation là những phương thức synchronous</div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// gọi mutation</span>\nmethods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token function">unregister</span><span class="token punctuation">(</span><span class="token parameter">registration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'unregister\'</span><span class="token punctuation">,</span>\n      userId<span class="token punctuation">:</span> registration<span class="token punctuation">.</span>userId\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token comment">// khai báo mutation trong lúc tạo store</span>\nmutations<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    state<span class="token punctuation">.</span>registrations<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="actions"><a href="#actions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>actions</h2>\n<div class="note">Sự khác biệt lớn nhất giữa action và mutation là trong action có thể return promise, nó có thể thực hiện các thao tác asynchronous</div>\n<p>Nếu trong redux bạn cần một middleware để xử lý các thao tác asynchronous, thì action trong vue store chính là các hàm bạn dùng để làm chuyện này.\nChúng ta cũng không gọi trực tiếp đến các hàm của <code class="language-text">actions</code> mà phải gọi qua dispatch. Mục đích cuối cùng của action cũng là commit một mutation, nó cũng không chỉnh sửa gì state.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// gọi một action ở component, map nó vô phương thức</span>\nmethods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token function">registerUser</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'register\'</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// khai báo action trong store</span>\nactions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// vẫn commit lên mutation                </span>\n      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">\'register\'</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="getters"><a href="#getters" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>getters</h2>\n<p>Trong store chúng ta khai báo các phương thức gọi chung là <code class="language-text">getters</code>, nó giống như các <code class="language-text">computed property</code> của store.</p>\n<div class=\'note\'>Các hàm `getters` luôn trả về giá trị</div>\n<p>Nếu bạn chưa biết computed property là gì, mình quote lại ngắn gọn cho các bạn nhớ</p>\n<div class="note">Computed property là những giá trị cần tính lại khi một biến nó phụ thuộc thay đổi giá trị.</div>\n<p>Ví dụ, giỏ hàng, tổng tiền là computed property được tính lại khi trên tất cả sản phẩm có trong giỏ hàng.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">getters<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment">// == computed properties</span>\n  <span class="token function">availableProducts</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> state<span class="token punctuation">.</span>products<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">product</span> <span class="token operator">=></span> product<span class="token punctuation">.</span>inventory <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">cartTotals</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> cartTotal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> state<span class="token punctuation">.</span>cart<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      cartTotal <span class="token operator">+=</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>price <span class="token operator">*</span> item<span class="token punctuation">.</span>quantity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> cartTotal<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<h2 id="modules"><a href="#modules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>modules</h2>\n<p>Khi ứng dụng của chúng ta lớn lên, để hết mọi quản lý ở một chỗ như vậy sẽ rất mệt. Modules giúp chúng ta tách cái store ra theo từng feature</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>\n  state<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  mutations<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  actions<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  getters<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> moduleB <span class="token operator">=</span> <span class="token punctuation">{</span>\n  state<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  mutations<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  actions<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  modules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    a<span class="token punctuation">:</span> moduleA<span class="token punctuation">,</span>\n    b<span class="token punctuation">:</span> moduleB\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nstore<span class="token punctuation">.</span>state<span class="token punctuation">.</span>a <span class="token comment">// -> `moduleA`\'s state</span>\nstore<span class="token punctuation">.</span>state<span class="token punctuation">.</span>b <span class="token comment">// -> `moduleB`\'s state</span></code></pre>\n      </div>\n<p>Các phần còn lại: getters, actions, mutations truy cập trực tiếp như bình thường, KHÔNG cần thông qua store.actions.moduleName. Nó sẽ được lồng vào trong module name khi chúng ta bật <code class="language-text">namespaced: true</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  modules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    account<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      namespaced<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token comment">// module assets</span>\n      state<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> \n      getters<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token function">isAdmin</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -> getters[\'account/isAdmin\']</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      actions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token function">login</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -> dispatch(\'account/login\')</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      mutations<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token function">login</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -> commit(\'account/login\')</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// nested modules</span>\n      modules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// kế thừa namespace từ module cha</span>\n        myPage<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          state<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          getters<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token function">profile</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -> getters[\'account/profile\']</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        posts<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          namespaced<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          state<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          getters<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token function">popular</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -> getters[\'account/posts/popular\']</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>',timeToRead:3,excerpt:"state mutations actions getters modules Vuex là một cái store cho Vue, nó giống hệt như redux store của React, cũng giải quyết những vấn đề…",frontmatter:{title:"Giới thiệu Vuex cho người mới bắt đầu",cover:"",date:"2018-11-08",category:null,tags:["vuejs"],desc:"Mình không giới thiệu cụ thể từng phần trong Vuex, các bạn cần nắm redux store của React để hiểu được bài này, các khái niệm và nguyên tắc gần như là giống nhau, khác cách đặt tên thôi."},fields:{slug:"/2018-11-08-gioi-thieu-vuex-cho-nguoi-moi-bat-dau"}}},pathContext:{slug:"/2018-11-08-gioi-thieu-vuex-cho-nguoi-moi-bat-dau",prev:{frontmatter:{title:"Tìm hiểu Execution context trong Javascript",desc:"Theo quan điểm của mình, khái niệm căn bản và quan trọng bật nhất của javascript là hiểu được Execution Context,",type:"post",category:null,tags:["javascript"],date:"2018-11-09",cover:""},fields:{slug:"/2018-11-09-gioi-thieu-execution-context-trong-javascript-kien-thuc-can-biet"}},next:{frontmatter:{title:"Giới thiệu lifecycle hook của Vue JS",desc:"Giới thiệu nhanh gọn lẹ cho bạn nào chưa biết",type:"post",category:null,tags:["vuejs"],date:"2018-11-07",cover:""},fields:{slug:"/2018-11-07-gioi-thieu-lifecycle-method-vuejs"}}}}}});
//# sourceMappingURL=path---2018-11-08-gioi-thieu-vuex-cho-nguoi-moi-bat-dau-3602298e74e4663e0b47.js.map