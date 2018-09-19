webpackJsonp([45510163150066],{1307:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Ngày xưa chúng ta viết javascript sử dụng <code class="language-text">callback</code>, nó sinh ra chuyện quá nhiều <code class="language-text">callback</code> lồng nhau, tiến bộ hộ, javascript cập nhập khái niệm <code class="language-text">promise</code>, những vẫn vướn phải nhiều <code class="language-text">promise</code> lồng nhau, và giờ javascript đẻ thêm khái niệm <code class="language-text">asyn/await</code> để khử <code class="language-text">promise</code> lồng nhau.</p>\n<p>Bản thân promise là bất đồng bộ. Trước đây chúng ta sẽ lồng <code class="language-text">promise</code> tiếp theo sau hàm <code class="language-text">then</code>, để thực hiện nhiều <code class="language-text">promise</code> đồng bộ, chúng ta phải cho phép nó đợi lẫn nhau, nói một cách khác nếu khi chúng ta muốn thực thi một tác vụ bất đồng bộ và tác vụ này lại đợi một tác vụ bất đồng bộ khác chạy xong.</p>\n<p>Chúng ta sẽ sử dụng từ khóa <code class="language-text">async</code> gắn vào vào trước hàm trả về 1 <code class="language-text">promise</code>. Nên nhớ là hàm <code class="language-text">async</code> trả về <code class="language-text">promise</code>. Mọi thao tác bên trong hàm <code class="language-text">async</code> sẽ chạy bất đồng bộ. </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'TEST\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// hàm asyncF này = với hàm f ở trên</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'TEST\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tương tự hàm <code class="language-text">async</code> sẽ throw một exception giống như rejecting của promise</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'Error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// asyncF = f</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token string">\'Error\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bên trong hàm <code class="language-text">async</code> ta có thể sử dụng thêm từ khóa là <code class="language-text">await</code>, và chỉ có thể sử dụng <code class="language-text">await</code> trong hàm <code class="language-text">async</code> thôi nhé, nó sẽ cho phép ta chỉ định một tác vụ phải chạy đồng bộ, phải đợi cái <code class="language-text">promise</code> trả về.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// sau khi promise được resolved, kết quả đó sẽ dược đưa về cho response</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// bên ngoài hàm async ta phải dùng then chứ không thể gọi await, nhớ là hàm f trả về promise</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Finished\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Thay vì lổng nhiều <code class="language-text">promise</code> trong <code class="language-text">then</code>, chúng ta có thể viết</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// đưa nó vô hàm async</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// đợi và print kết quả</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// chạy bất đồng bộ 2 đứa này</span>\n    <span class="token keyword">const</span> call2Promise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> call3Promise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// đợi khi cả 2 thằng trên chạy xong và được resolve</span>\n    <span class="token keyword">const</span> response2 <span class="token operator">=</span> <span class="token keyword">await</span> call2Promise<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> response3 <span class="token operator">=</span> <span class="token keyword">await</span> call3Promise<span class="token punctuation">;</span>\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// gọi hàm async</span>\n<span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Finished\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Tức là ở đây chúng ta cho 2 hàm send đi 1 request chạy song song, nhưng ta phải đợi cả 2 hàm này có kết quả rồi ta mới chạy tiếp. Nó sẽ tương tự như cách sử dụng <code class="language-text">Promise.all(...).then(...)</code> chỉ là ta viết khác đi cho nó dễ hiểu, đỡ rối.</p>\n<p>Trong ví dụ trên chúng ta đã mặc định là 2 hàm <code class="language-text">call2Promise</code> và <code class="language-text">call3Promise</code> luôn thành công, nếu lỡ thằng nào chết chúng ta phải <code class="language-text">try/catch</code> để bắt lỗi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> promiseResult <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'Error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu không handle lỗi trong hàm <code class="language-text">async</code>, thì nó sẽ trả về rejected promise khi có bug</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Success\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Như vậy <code class="language-text">async/await</code> không hẳn là kẻ thay thế cho <code class="language-text">promise</code>, nó chỉ là bổ sung thêm cho <code class="language-text">promise</code> một tính năng đồng bộ cho nhiều tao tác bất đồng bộ! Chúng ta sẽ vẫn viết <code class="language-text">promise</code> thuần cho những tác vụ chỉ cần những đặc tính của <code class="language-text">promise</code></p>\n<p>Tác Giả: IKOLAY GROZEV\nLink Bài Gốc: <a href="http://nikgrozev.com/2017/10/01/async-await/">http://nikgrozev.com/2017/10/01/async-await/</a></p>',timeToRead:3,excerpt:"Ngày xưa chúng ta viết javascript sử dụng  , nó sinh ra chuyện quá nhiều   lồng nhau, tiến bộ hộ, javascript cập nhập khái niệm  , những vẫn…",frontmatter:{title:"Async Await giải thích và ví dụ",cover:"",date:"2018-05-07",category:null,tags:["javascript"],desc:"Hướng dẫn các bạn nắm vững asyn await trong javascript, kèm ví dụ cụ thể"},fields:{slug:"/2018-05-07-huong-dan-async-await-giai-thich-vi-du"}}},pathContext:{slug:"/2018-05-07-huong-dan-async-await-giai-thich-vi-du",prev:{frontmatter:{title:"React Context API - có phải sẽ thay thế Redux",desc:"Thử sử dụng React Context API để thay thể Redux cho State Management",type:"post",category:null,tags:["javascript","react"],date:"2018-05-16",cover:""},fields:{slug:"/2018-05-16-huong-dan-react-context-api-ke-thay-the-redux"}},next:{frontmatter:{title:"Transition trong React Native với React Navigation",desc:"Hướng dẫn làm transition trong React Native với react navigation",type:"post",category:null,tags:["javascript","react","react-native"],date:"2018-05-02",cover:""},fields:{slug:"/2018-05-02-huong-dan-transition-voi-react-navigation"}}}}}});
//# sourceMappingURL=path---2018-05-07-huong-dan-async-await-giai-thich-vi-du-9783c36f564609deaf54.js.map