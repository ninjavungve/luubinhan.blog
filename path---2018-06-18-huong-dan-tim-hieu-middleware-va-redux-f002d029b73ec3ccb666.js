webpackJsonp([0x8372a2fa04e0],{1291:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#middleware-l%C3%A0-g%C3%AC">Middleware là gì</a></li>\n<li><a href="#t%E1%BA%A1i-sao-v%C3%A0-t%E1%BA%A1i-sao">Tại sao và tại sao</a></li>\n<li>\n<p><a href="#m%E1%BB%99t-s%E1%BB%91-%E1%BB%A9ng-d%E1%BB%A5ng-c%E1%BB%A7a-middleware">Một số ứng dụng của Middleware</a></p>\n<ul>\n<li><a href="#loging">Loging</a></li>\n<li><a href="#%C4%91%E1%BB%A3i-user-confirm">Đợi user confirm</a></li>\n</ul>\n</li>\n<li><a href="#m%E1%BB%99t-s%E1%BB%91-l%E1%BB%B1a-ch%E1%BB%8Dn">Một số lựa chọn</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="middleware-là-gì"><a href="#middleware-l%C3%A0-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Middleware là gì</h2>\n<p>Nghe tên thì hơi phức tạp nhưng thực sự nó đơn giản lắm, nó là một hàm sẽ modify và được gọi trước khi action được dispatch.</p>\n<p>Mô phỏng quá trình hoạt động không có middleware</p>\n<p><img src="https://viblo.asia/uploads/5c72ff3e-859a-457a-ae11-e1392baa90af.gif"></p>\n<p>và khi áp dụng middleware</p>\n<p><img src="https://viblo.asia/uploads/8ff8bd43-308a-47da-b382-891adae237d2.gif"></p>\n<h2 id="tại-sao-và-tại-sao"><a href="#t%E1%BA%A1i-sao-v%C3%A0-t%E1%BA%A1i-sao" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tại sao và tại sao</h2>\n<p>Trong thế giới của Rect, Redux là lựa chọn được ưa chuộng để có một container chứa chỉ chứa state. Ý tưởng chính của redux là tất cả những logic của app thì đưa vào <strong>reducers</strong>, là những function nhận vào 1 <code class="language-text">state</code>, 1 <code class="language-text">action</code> và trả về <code class="language-text">state</code> mới. <strong>Reducers</strong> buộc phải là <em>pure function</em> không phụ thuộc và chỉnh sửa global state, để mà dễ test, dể refactor, performance tốt hơn.</p>\n<p>Thí dụ 1 redux store lưu giá trị counter</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> redux <span class="token keyword">from</span> <span class="token string">\'redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">counter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">case</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu để ý chúng ta có thể thấy redux có 2 ràng buộc</p>\n<ol>\n<li><strong>Reducers</strong> PHẢI là hàm sync, trả về <code class="language-text">state</code> mới</li>\n<li>Do không được thay đổi global state, reducers không được sử dụng những hàm như <code class="language-text">setInterval()</code></li>\n</ol>\n<p>Thí dụ chúng ta làm một cái app để bấm thời gian, sau khi user bấm stop hiển thị giá trị thời gian đã chạy và sau đó lưu lại trên server bằng HTTP request. Chuyện gì sẽ xảy ra khi ta đang muốn quăng một hàm chạy async?</p>\n<p>Reducer của chúng ta cần listen 3 actions:</p>\n<ol>\n<li><code class="language-text">START_TIMER</code>, khi bắt đầu tính thời gian</li>\n<li><code class="language-text">STICK</code>, khi ta thay đổi giá trị hiện tại</li>\n<li><code class="language-text">STOP_TIMER</code> khi chúng ta không nhận được action <code class="language-text">TICK</code> nào nữa</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">stopWatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">case</span> <span class="token string">\'START_TIMMER\'</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>startTime<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime<span class="token punctuation">,</span> elapsed<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token keyword">case</span> <span class="token string">\'TICK\'</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>elapsed<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime <span class="token operator">-</span> state<span class="token punctuation">.</span>startTime<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">case</span> <span class="token string">\'STOP_TIMER\'</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>stopWatch<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Khi user click button start, chúng ta dispatch event <code class="language-text">START_TIMER</code>, khi user click stop, ta dispatch <code class="language-text">STOP_TIMMER</code></p>\n<p>Vấn đề là làm sao dispatch <code class="language-text">TICK</code>, nếu chúng ta gọi <code class="language-text">setInterval()</code> trong <code class="language-text">START_TIMER</code> thì lúc đó chúng ta đã thay đổi global state và vi phạm best practices của redux. Chổ thích hợp nhất để dispatch <code class="language-text">TICK</code> là ở middleware</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">timerMiddleware</span> <span class="token operator">=</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'START_TIMER\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        action<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'TICK\'</span><span class="token punctuation">,</span> currentTime<span class="token punctuation">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'STOP_TIMER\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">clearInterval</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token function-variable function">stopWatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'START_TIMER\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        startTime<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime<span class="token punctuation">,</span>\n        elapsed<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        interval<span class="token punctuation">:</span> action<span class="token punctuation">.</span>interval\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'TICK\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> elapsed<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime <span class="token operator">-</span> state<span class="token punctuation">.</span>startTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'STOP_TIMER\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> interval<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> middleware <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>timerMiddleware<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>stopWatch<span class="token punctuation">,</span> middleware<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Syntax của redux middleware là điều cần phải bàn tới: 1 middleware function là 1 function return 1 function return 1 function. Nhất đầu ghê chưa. Thật ra đang dùng currying function trong javascript (<a href="https://luubinhan.github.io/blog/2018-03-02-gioi-thieu-higher-order-component-trong-react">đọc cà-ri function ở đây</a>). Function đầu tiên nhận vào <code class="language-text">store</code> làm parameter, function thứ 2 sẽ nhận function <code class="language-text">next</code> làm parameter, và function thứ 3 nhận dispatch <code class="language-text">action</code> làm parameter. <code class="language-text">store</code> và <code class="language-text">action</code> là giá trị store và dispatch action hiện tại. Chiếc đũa thuần kỳ ở đây chính là function <code class="language-text">next</code>, bạn có thể gọi nó là "sau khi middleware chạy xong, truyền cái cái action này cho middleware kế tiếp". Nói cách khác, middleware có thể là hàm async.</p>\n<p>Tiếp theo chúng ta sẽ lưu giá trị sau khi user click stop lên server.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">promiseMiddleware</span> <span class="token operator">=</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// kiểm tra payload nếu là promise thì đợi nó resolve</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>payload <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n            res <span class="token operator">=></span> <span class="token punctuation">{</span> action<span class="token punctuation">.</span>payload <span class="token operator">=</span> res<span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            err <span class="token operator">=></span> <span class="token punctuation">{</span> action<span class="token punctuation">.</span>error <span class="token operator">=</span> err<span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> middleware <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>timerMiddleware<span class="token punctuation">,</span> promiseMiddleware<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>stopWatch<span class="token punctuation">,</span> middleware<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Khi gởi lên một HTTP request, chúng ta sẽ gởi request này ở dạng <code class="language-text">promise</code>, <code class="language-text">promiseMiddelware</code> sẽ đứng đợi promise này có giá trị trả về thì mới gọi <code class="language-text">next(action)</code></p>\n<p>Ta sẽ gởi lên server bằng <code class="language-text">axios</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">\'axios\'</span><span class="token punctuation">;</span>\n\nstore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'SAVE_TIME\'</span><span class="token punctuation">,</span> payload<span class="token punctuation">:</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">\'/save\'</span><span class="token punctuation">,</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Reducer listen <code class="language-text">SAVE_TIME</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">stopwatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'START_TIMER\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        startTime<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime<span class="token punctuation">,</span>\n        elapsed<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        interval<span class="token punctuation">:</span> action<span class="token punctuation">.</span>interval\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'TICK\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> elapsed<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime <span class="token operator">-</span> state<span class="token punctuation">.</span>startTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'STOP_TIMER\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> interval<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'SAVE_TIME\'</span><span class="token punctuation">:</span>\n      <span class="token comment">// If there was an error, set the error property on the state</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> error<span class="token punctuation">:</span> action<span class="token punctuation">.</span>error <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">// Otherwise, clear all the timer state</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> startTime<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> error<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="một-số-ứng-dụng-của-middleware"><a href="#m%E1%BB%99t-s%E1%BB%91-%E1%BB%A9ng-d%E1%BB%A5ng-c%E1%BB%A7a-middleware" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Một số ứng dụng của Middleware</h2>\n<h3 id="loging"><a href="#loging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loging</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">loggerMiddleware</span> <span class="token operator">=</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="Đợi-user-confirm"><a href="#%C4%90%E1%BB%A3i-user-confirm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đợi user confirm</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">confirmationMiddleware</span> <span class="token operator">=</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>shouldConfirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">\'Are you sure?\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="một-số-lựa-chọn"><a href="#m%E1%BB%99t-s%E1%BB%91-l%E1%BB%B1a-ch%E1%BB%8Dn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Một số lựa chọn</h2>\n<p>Một số thư viện để làm việc với middleware cho Redux rất phổ biến có thể tham khảo là <code class="language-text">redux-thunk</code>, <code class="language-text">redux-saga</code>, <code class="language-text">redux-observable</code></p>\n<p><a href="https://www.codementor.io/vkarpov/beginner-s-guide-to-redux-middleware-du107uyud">Link bài gốc của tác giả Vkarpov</a></p>\n<p>Tham khảo thêm:</p>\n<ul>\n<li><a href="https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/middleware.js">Realworld example sử dụng redux, middleware</a></li>\n<li><a href="https://medium.com/@meagle/understanding-87566abcfb7a">Tìm hiểu Middleware của tác giả Mark</a></li>\n<li><a href="https://redux.js.org/api-reference/applymiddleware">applyMiddleware</a></li>\n</ul>',
timeToRead:6,excerpt:"Middleware là gì Tại sao và tại sao Một số ứng dụng của Middleware Loging Đợi user confirm Một số lựa chọn Middleware là gì Nghe tên thì hơi…",frontmatter:{title:"Sử dụng Middleware với Redux dành cho người mới bắt đầu",cover:"",date:"2018-06-18",category:"react",tags:["react","redux","javascript","middleware"],desc:"Nếu đã nắm rõ redux, bước tiếp theo phải tìm hiểu là middleware"},fields:{slug:"/2018-06-18-huong-dan-tim-hieu-middleware-va-redux"}}},pathContext:{slug:"/2018-06-18-huong-dan-tim-hieu-middleware-va-redux",prev:{frontmatter:{title:"Tiếp tục luận bàn về cách tổ chức thư mục, đặt tên component trong React",desc:"Hổm đã viết về vấn đề này rồi, giờ lại viết tiếp, vì bản thân React cũng không ra bất cứ rule nào về việc này, bạn tự do tổ chức sao mà mình thấy hợp lý, bài trước là của tác giả đó thấy vậy là hay, bài này thì tác giả thích tổ chức thế này",type:"post",category:"react",tags:["react","javascript"],date:"2018-06-18",cover:""},fields:{slug:"/2018-06-18-huong-dan-luan-ban-ve-cach-to-chuc-thu-muc-dat-ten"}},next:{frontmatter:{title:"Làm việc với CSS Modules trong React",desc:"Sau rất nhiều năm kiếm cơm với CSS, và hiện tại vẫn thế, CSS vẫn luôn là niềm hứng thú của cá nhân mình. Ngày nảy ngày nay để làm việc với Component của React, chúng ta sẽ có nhiều lựa chọn hơn khi 'CSS trong JS' đang là lựa chọn hàng đầu. Trong thời đại của component phủ sóng khắp các mặt trận, CSS Modules hứa hiện là món ngon",type:"post",category:"react",tags:["react","javascript"],date:"2018-06-15",cover:""},fields:{slug:"/2018-06-15-huong-dan-lam-viec-voi-css-module"}}}}}});
//# sourceMappingURL=path---2018-06-18-huong-dan-tim-hieu-middleware-va-redux-f002d029b73ec3ccb666.js.map