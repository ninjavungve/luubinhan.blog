webpackJsonp([71159775068857],{1327:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#setup">Setup</a></li>\n<li><a href="#ghi-d%E1%BB%AF-li%E1%BB%87u">Ghi dữ liệu</a></li>\n<li><a href="#%C4%91%E1%BB%8Dc-d%E1%BB%AF-li%E1%BB%87u">Đọc dữ liệu</a></li>\n<li><a href="#c%E1%BA%ADp-nh%E1%BA%ADp-database">Cập nhập database</a></li>\n<li><a href="#x%C3%B3a-d%E1%BB%AF-li%E1%BB%87u">Xóa dữ liệu</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h1>\n<p>Trước khi đọc bài này bạn nên đọc trước bài <a href="http://www.androidgig.com/getting-started-with-firebase-android/">Bắt đầu với Firebase</a> để biết những tính năng có trong Firebase</p>\n<p>Bài này chúng ta sẽ bàn về cách sử dụng Firebase realtime với React Native. Trước khi bắt đầu ta cần tạo một project trên <a href="https://console.firebase.google.com/">Firebase Console</a></p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*lPogJSrLiNKRjIGwrUBalA.png" alt="Sử dụng Firebase Realtime Database Với React Native"></p>\n<p>Sau khi nhập tên project, khu vực, chúng ta đến màn hình welcome\n<img src="https://cdn-images-1.medium.com/max/1600/1*YqSdnt-L5BN8CxEId8jWuA.png" alt="Sử dụng Firebase Realtime Database Với React Native"></p>\n<p>Chọn <strong>Add Firebase to your web app</strong>, copy mấy thông tin này lại lưu ở đâu để dành dùng sau này</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*VUN6hQdArAdLy2yZ44msTA.jpeg" alt="Sử dụng Firebase Realtime Database Với React Native"></p>\n<p>Cài firebase thôi</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install firebase --save</code></pre>\n      </div>\n<p>Khởi tạo firebase object để bắt đầu sử dụng, trong file <code class="language-text">app.js</code> hoặc <code class="language-text">index.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n    databaseURL<span class="token punctuation">:</span> <span class="token string">"&lt;database-url>"</span><span class="token punctuation">,</span>\n    projectId<span class="token punctuation">:</span> <span class="token string">"&lt;project-id>"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nfirebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Khả năng cao là sẽ gặp lỗi sau <strong>Firebase app named ‘[DEFAULT]’ already exists (app/duplicate-app)</strong></p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*qHXMIrUPR0lhWXdm3M5BWg.png" alt="Sử dụng Firebase Realtime Database Với React Native"></p>\n<p>Để fix lỗi này, chỉ cần kiểm tra xem có bao nhiêu instance đang sử dụng <code class="language-text">firebase.apps</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>firebase<span class="token punctuation">.</span>apps<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Vậy là chúng ta có thể bắt đầu sử dụng Firebase realtime, hay bắt đầu với một thao tác đọc/ghi dữ liệu đơn giản</p>\n<h1 id="ghi-dữ-liệu"><a href="#ghi-d%E1%BB%AF-li%E1%BB%87u" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ghi dữ liệu</h1>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">writeUserData</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> fname<span class="token punctuation">,</span> lname<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">\'Users/\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    email<span class="token punctuation">,</span>\n    fname<span class="token punctuation">,</span>\n    lname\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'data\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Kết quả khi thành công</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*Vc2fHUmnfNPcLsYAQ5pPeg.png" alt="Sử dụng Firebase Realtime Database Với React Native"></p>\n<p>Để push vào một array</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">writeUserData</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span>fname<span class="token punctuation">,</span>lname<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">\'UsersList/\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        email<span class="token punctuation">,</span>\n        fname<span class="token punctuation">,</span>\n        lname\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'data \'</span> <span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'error \'</span> <span class="token punctuation">,</span> error<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*kCplR2waJQe5m7-G-AEuKg.png" alt="Sử dụng Firebase Realtime Database Với React Native"></p>\n<h1 id="Đọc-dữ-liệu"><a href="#%C4%90%E1%BB%8Dc-d%E1%BB%AF-li%E1%BB%87u" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đọc dữ liệu</h1>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">readUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">\'Users/\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">\'value\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu muốn lấy data khi có 1 thay đổi xảy ra, ta dùng hàm <code class="language-text">on</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">readUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">\'Users/\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'value\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="cập-nhập-database"><a href="#c%E1%BA%ADp-nh%E1%BA%ADp-database" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cập nhập database</h1>\n<p>Nếu muốn cập nhập data của một object, tạo một reference tới nó và sử dụng hàm <code class="language-text">update()</code> với dữ liệu muốn thay đổi</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">updateSingleData</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">\'Users/\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    email<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="xóa-dữ-liệu"><a href="#x%C3%B3a-d%E1%BB%AF-li%E1%BB%87u" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xóa dữ liệu</h1>\n<p>Dùng hàm <code class="language-text">remove()</code> hoặc là <code class="language-text">set</code>, <code class="language-text">update</code> giá trị về <code class="language-text">null</code>, nó sẽ tự động xóa</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">deleteData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  firebase<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">\'Users/\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://medium.com/mindorks/firebase-realtime-database-with-react-native-5f357c6ee13b">Link bài gốc</a></p>',timeToRead:3,excerpt:"Setup Ghi dữ liệu Đọc dữ liệu Cập nhập database Xóa dữ liệu Setup Trước khi đọc bài này bạn nên đọc trước bài  Bắt đầu với Firebase  để biết…",frontmatter:{title:"Sử dụng Firebase Realtime với React Native",cover:"",date:"2018-08-07",category:null,tags:["react-native"],desc:"Những tính năng của Firebase có thể đáp ứng nhu cầu của ứng dụng nhỏ, đơn giản, không cần đến server."},fields:{slug:"/2018-08-07-huong-dan-su-dung-firebase-realtime-voi-react-native"}}},pathContext:{slug:"/2018-08-07-huong-dan-su-dung-firebase-realtime-voi-react-native",prev:{frontmatter:{title:"Flow sử lý trong modern JS - từ callback đến promise, đến Async/Await",desc:"Cùng nhìn lại quá trình tiến hóa của javascript trong cách sử lý flow",type:"post",category:null,tags:["react-native"]},fields:{slug:"/2018-08-14-huong-dan-flow-xy-ly-trong-modern-js-callback-promise-async-await"}},next:{frontmatter:{title:"Con đường để trở thành React Native developer ( phiên bản 2018)",desc:"Tiếp theo bài trước mình sẽ dịch thêm một bài để các bạn bắt đầu học lập trình React Native",type:"post",category:null,tags:["react","javascript","react-native"]},fields:{slug:"/2018-08-13-huong-dan-con-dong-hoc-lap-trinh-react-native"}}}}}});
//# sourceMappingURL=path---2018-08-07-huong-dan-su-dung-firebase-realtime-voi-react-native-a676a7d175db42333421.js.map