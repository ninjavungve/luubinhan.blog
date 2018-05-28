webpackJsonp([31],{"./node_modules/json-loader/index.js!./.cache/json/2018-05-07-asyn-await-giai-thich-vi-du.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Ngày xưa chúng ta viết javascript sử dụng <code>callback</code>, nó sinh ra chuyện quá nhiều <code>callback</code> lồng nhau, tiến bộ hộ, javascript cập nhập khái niệm <code>promise</code>, những vẫn vướn phải nhiều <code>promise</code> lồng nhau, và giờ javascript đẻ thêm khái niệm <code>asyn/await</code> để khử <code>promise</code> lồng nhau.</p>\n<p>Bản thân promise là bất đồng bộ. Trước đây chúng ta sẽ lồng <code>promise</code> tiếp theo sau hàm <code>then</code>, để thực hiện nhiều <code>promise</code> đồng bộ, chúng ta phải cho phép nó đợi lẫn nhau, nói một cách khác nếu khi chúng ta muốn thực thi một tác vụ bất đồng bộ và tác vụ này lại đợi một tác vụ bất đồng bộ khác chạy xong.</p>\n<p>Chúng ta sẽ sử dụng từ khóa <code>async</code> gắn vào vào trước hàm trả về 1 <code>promise</code>. Nên nhớ là hàm <code>async</code> trả về <code>promise</code>. Mọi thao tác bên trong hàm <code>async</code> sẽ chạy bất đồng bộ. </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'TEST\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// hàm asyncF này = với hàm f ở trên</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'TEST\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Tương tự hàm <code>async</code> sẽ throw một exception giống như rejecting của promise</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'Error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// asyncF = f</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token string">\'Error\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Bên trong hàm <code>async</code> ta có thể sử dụng thêm từ khóa là <code>await</code>, và chỉ có thể sử dụng <code>await</code> trong hàm <code>async</code> thôi nhé, nó sẽ cho phép ta chỉ định một tác vụ phải chạy đồng bộ, phải đợi cái <code>promise</code> trả về.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// sau khi promise được resolved, kết quả đó sẽ dược đưa về cho response</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// bên ngoài hàm async ta phải dùng then chứ không thể gọi await, nhớ là hàm f trả về promise</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Finished\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Thay vì lổng nhiều <code>promise</code> trong <code>then</code>, chúng ta có thể viết</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// đưa nó vô hàm async</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// đợi và print kết quả</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">// chạy bất đồng bộ 2 đứa này</span>\n    <span class="token keyword">const</span> call2Promise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> call3Promise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">// đợi khi cả 2 thằng trên chạy xong và được resolve</span>\n    <span class="token keyword">const</span> response2 <span class="token operator">=</span> <span class="token keyword">await</span> call2Promise<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> response3 <span class="token operator">=</span> <span class="token keyword">await</span> call3Promise<span class="token punctuation">;</span>\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// gọi hàm async</span>\n<span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Finished\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Tức là ở đây chúng ta cho 2 hàm send đi 1 request chạy song song, nhưng ta phải đợi cả 2 hàm này có kết quả rồi ta mới chạy tiếp. Nó sẽ tương tự như cách sử dụng <code>Promise.all(...).then(...)</code> chỉ là ta viết khác đi cho nó dễ hiểu, đỡ rối.</p>\n<p>Trong ví dụ trên chúng ta đã mặc định là 2 hàm <code>call2Promise</code> và <code>call3Promise</code> luôn thành công, nếu lỡ thằng nào chết chúng ta phải <code>try/catch</code> để bắt lỗi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> promiseResult <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'Error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Nếu không handle lỗi trong hàm <code>async</code>, thì nó sẽ trả về rejected promise khi có bug</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">//...</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Success\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Như vậy <code>async/await</code> không hẳn là kẻ thay thế cho <code>promise</code>, nó chỉ là bổ sung thêm cho <code>promise</code> một tính năng đồng bộ cho nhiều tao tác bất đồng bộ! Chúng ta sẽ vẫn viết <code>promise</code> thuần cho những tác vụ chỉ cần những đặc tính của <code>promise</code></p>\n<p>Tác Giả: IKOLAY GROZEV\nLink Bài Gốc: <a href="http://nikgrozev.com/2017/10/01/async-await/">http://nikgrozev.com/2017/10/01/async-await/</a></p>',frontmatter:{date:"May 07, 2018",path:"/2018-05-07-asyn-await-giai-thich-vi-du",tags:["javascript"],title:"Async Await giải thích và ví dụ",desc:"Hướng dẫn các bạn nắm vững asyn await trong javascript, kèm ví dụ cụ thể"}}},pathContext:{prev:!1,next:{excerpt:"Chúng ta sẽ build những màn hình đầu tiên khi mới vào app: on-boarding screen, mấy cái màn hình kiểu chào hỏi khi mới vừa cài app xong, mở app lên, giới thiệu đôi ba nét rồi kêu người ta sign in/sign up. Chúng ta sẽ setup 2 screen,  ,  , nhét...",html:'<p>Chúng ta sẽ build những màn hình đầu tiên khi mới vào app: on-boarding screen, mấy cái màn hình kiểu chào hỏi khi mới vừa cài app xong, mở app lên, giới thiệu đôi ba nét rồi kêu người ta sign in/sign up.</p>\n<p>Chúng ta sẽ setup 2 screen, <code>Screen1</code>, <code>Screen2</code>, nhét 2 screens này vào trong <code>StackNavigator</code> component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>Text<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Image<span class="token punctuation">,</span> StyleSheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>StackNavigator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-navigation\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> LogoImage <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">source</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>uri<span class="token punctuation">:</span> <span class="token string">\'https://picsum.photos/100/100?image=56\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>style<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Screen1</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogoImage</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>largeLogo<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>paragraph<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    Welcome<span class="token operator">!</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>Next<span class="token punctuation">\'</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">\'Screen2\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Screen2</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogoImage</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>smallLogo<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>paragraph<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>fontWeight<span class="token punctuation">:</span><span class="token string">\'normal\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    Now you should have a basic understanding <span class="token keyword">of</span> how <span class="token keyword">this</span> app works<span class="token punctuation">.</span> \n                    Please sign up and take part <span class="token keyword">in</span> <span class="token keyword">this</span> fantastic user experience<span class="token operator">!</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>  \n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>paragraph<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    This is the last page <span class="token keyword">of</span> the onboarding<span class="token punctuation">.</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>  \n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Back<span class="token punctuation">"</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> Navigator <span class="token operator">=</span> <span class="token function">StackNavigator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    screen1<span class="token punctuation">:</span> <span class="token punctuation">{</span>screen<span class="token punctuation">:</span> Screen1<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    screen2<span class="token punctuation">:</span> <span class="token punctuation">{</span>screen<span class="token punctuation">:</span> Screen2<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Navigator</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  container<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    justifyContent<span class="token punctuation">:</span> <span class="token string">\'space-around\'</span><span class="token punctuation">,</span>\n    backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ecf0f1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  largeLogo<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    width<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n    borderRadius<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  smallLogo<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    width<span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n    borderRadius<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  paragraph<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    margin<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span>\n    fontSize<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>\n    fontWeight<span class="token punctuation">:</span> <span class="token string">\'bold\'</span><span class="token punctuation">,</span>\n    textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#34495e\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Thêm transition</h2>\n<p>Chúng ta sẽ sử dụng thêm một thư viện <code>react-navigation-fluid-transitions</code> để thêm transition khi chuyển từ <code>Screen1</code> qua <code>Screen2</code>, logo ở <code>Screen1</code> sẽ nhỏ dần nhỏ dần thành logo ở <code>Screen2</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm i react-navigation-fluid-transitions --save</code></pre>\n      </div>\n<p>Thay vì sử dụng <code>StackNavigator</code>, ta chuyển sang dùng <code>FluidNavigator</code> của thư viện mới</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FluidNavigator<span class="token punctuation">,</span> Transition <span class="token punctuation">}</span> <span class="token keyword">from</span> react<span class="token operator">-</span>navigation<span class="token operator">-</span>fluid<span class="token operator">-</span>transitions’<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Navigator <span class="token operator">=</span> <span class="token function">FluidNavigator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n screen1<span class="token punctuation">:</span> <span class="token punctuation">{</span>screen<span class="token punctuation">:</span> Screen1<span class="token punctuation">}</span><span class="token punctuation">,</span>\n screen2<span class="token punctuation">:</span> <span class="token punctuation">{</span>screen<span class="token punctuation">:</span> Screen2<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Ở đây chúng ta muốn cái Logo sẽ <em>biến hình</em> nên bọc nó vào <code>Transition</code> với cùng một giá trị <em>prop</em> <code>shared</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span> <span class="token attr-name">shared</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>logo<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogoImage</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>largeLogo<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span> <span class="token attr-name">shared</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>logo<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogoImage</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>smallLogo<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Kết quả có được</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Pg-22BI0Z_vG1mMxe9Scjg.gif"></p>\n<p>Nếu để ý ta sẽ thấy phần text sẽ không có áp dụng transition lên nên nó đơn giản là ẩn/hiện khi chuyển qua lại giữa 2 màn hình, chúng ta sẽ thêm transition luôn cho phần text này bằng component <code>Transition</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span> <span class="token attr-name">appear</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>horizontal<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>paragraph<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    Welcome<span class="token operator">!</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*Da1RpwEKtsKL4fwp0oZ8Iw.gif"></p>\n<p>Thư viện React Navigation Fluid Transition hổ trợ sẵn một số transition có thể dùng mì-ăn-liền như <code>appear</code> ở trên, một số hiệu ứng có sẵn khác, đọc thêm tại <a href="https://github.com/fram-x/FluidTransitions/blob/develop/README.md">document ở đây</a></p>\n<p>Tác Giả: Christian Falch\nLink Bài Gốc: <a href="https://medium.com/@christian.falch/fluid-transitions-with-react-navigation-a049d2f71494">https://medium.com/@christian.falch/fluid-transitions-with-react-navigation-a049d2f71494</a></p>',
id:"E:/anluu/luckyluu/posts/2018-05-02-transition-voi-react-navigation/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2018-05-02T13:35:13.234Z",path:"/2018-05-02-transition-voi-react-navigation",tags:["javascript","react","react-native"],title:"Transition trong React Native với React Navigation"}}}}}});
//# sourceMappingURL=path---2018-05-07-asyn-await-giai-thich-vi-du-1c6a9f458437d9401e00.js.map