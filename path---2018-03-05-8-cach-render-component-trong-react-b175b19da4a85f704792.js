webpackJsonp([52],{"./node_modules/json-loader/index.js!./.cache/json/2018-03-05-8-cach-render-component-trong-react.json":function(n,s){n.exports={data:{markdownRemark:{html:'<ul>\n<li>If/else</li>\n<li>Không render với null</li>\n<li>Đặt biến cho element</li>\n<li>Câu điều kiện rút gọn</li>\n<li>Short-circuit operator (&#x26;&#x26;)</li>\n<li>Immediately-Invoked Function Expressions (IIFE)</li>\n<li>Subcomponents</li>\n<li>High Order Components (HOCs)</li>\n</ul>\n<h1>If/Else</h1>\n<p>Dễ nhất và căn bản nhất</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Ko render với <code>null</code></h1>\n<p>Nếu không muốn render một component, trong hàm return trả về giá trị <code>null</code>, lưu ý khi return null nhưng hàm render vẫn được gọi.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token keyword">null</span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Đặt biến cho element</h1>\n<p>Giờ nếu không muốn thêm câu <code>else</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> input<span class="token punctuation">;</span>\n    \n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">!==</span> <span class="token string">\'view\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      input <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n      \n    <span class="token keyword">return</span> input<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Câu điều kiện rút gọn</h1>\n<p>Thay gì if/else, có thể dùng câu điều kiện rút gọn để render luôn</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>điều kiện ? nếu true : nếu false</code></pre>\n      </div>\n<p>Sử dụng với ví dụ trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span> <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Gọn gàn sạch sẽ hơn, tuy nhiên cũng đừng lạm dụng quá, có anh bạn làm chung với mình, lạm dụng cách này quá lố, đến nổi mỗi lần đọc code của anh ấy là cơn ác mộng, mặc dù không sai, nhưng thằng nào code sau mở lên đọc tội nó lắm.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span> condition1\n      <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component1</span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">:</span> <span class="token punctuation">(</span> condition2\n        <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component2</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">:</span> <span class="token punctuation">(</span> condition3\n          <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component3</span> <span class="token punctuation">/></span></span>\n          <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">4</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h1>Short-circuit operator (&#x26;&#x26;)</h1>\n<p>Trong trường hợp trên, rõ ràng việc trả về <code>null</code> thật sự cũng hơi dư thừa, có thể sự dụng ngắn-hơn-cả-ngắn với cú pháp <code>&#x26;&#x26;</code>. Cũng như câu điều kiện rút gọn, tuy nhiên nó sẽ chỉ render nếu <code>true</code>, con <code>false</code> nó sẽ không làm gì cả</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span> <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Immediately-invoked function expressions (IIFE)</h1>\n<p>IIFE như tên gọi nó đã nói lên tất cả, hàm sẽ thực thi ngay khi nó được định nghĩa.</p>\n<p>Bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span>\n<span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Để biến nó thành IIFE, convert nó qua thành một expression</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token comment" spellcheck="true">/* tham số*/</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span> <span class="token comment" spellcheck="true">/* tham số*/</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// viêt như vầy cũng được nha</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token comment" spellcheck="true">/* tham số*/</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span> <span class="token comment" spellcheck="true">/* tham số*/</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// hoặc bỏ luôn tên</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token comment" spellcheck="true">/* tham số*/</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span> <span class="token comment" spellcheck="true">/* tham số*/</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// hoặc dùng luôn arrow function cho máu</span>\n<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token comment" spellcheck="true">/* tham số*/</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span> <span class="token comment" spellcheck="true">/* tham số*/</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Giờ thì dùng IIFE với component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>\n              <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                <span class="token keyword">const</span> handler <span class="token operator">=</span> view \n                    <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleEdit \n                    <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleSave<span class="token punctuation">;</span>\n                <span class="token keyword">const</span> label <span class="token operator">=</span> view <span class="token operator">?</span> <span class="token string">\'Edit\'</span> <span class="token punctuation">:</span> <span class="token string">\'Save\'</span><span class="token punctuation">;</span>\n              \n                <span class="token keyword">return</span> <span class="token punctuation">(</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    <span class="token punctuation">{</span>label<span class="token punctuation">}</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n                <span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>  \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Subcomponents</h1>\n<p>Nếu thấy dùng IFEE có vẻ hơi khó chịu, chúng ta đang làm React, tất cả hãy đưa về component, tách phần logic của component và phần render cái view ra luôn là đều được khuyến cáo, declarative vs. imperative programing</p>\n<p>Vậy nên chuyển các điều kiện này sang một sub component để render dựa trên <code>props</code> luôn là ý hay.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>\n              view\n                <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EditComponent</span> <span class="token attr-name">handleEdit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleEdit<span class="token punctuation">}</span></span>  <span class="token punctuation">/></span></span>\n                <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SaveComponent</span> \n                   <span class="token attr-name">handleChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>\n                   <span class="token attr-name">handleSave</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSave<span class="token punctuation">}</span></span>\n                   <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputText<span class="token punctuation">}</span></span>\n                 <span class="token punctuation">/></span></span>\n                <span class="token punctuation">)</span>\n            <span class="token punctuation">}</span> \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Hoặc trọng React-Router 4 mỗi route là một <code>If component</code> với cách thức vận hành như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>If</span>\n    <span class="token attr-name">condition</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span> view <span class="token punctuation">}</span></span>\n    <span class="token attr-name">then</span><span class="token attr-value"><span class="token punctuation">=</span> {</span> <span class="token attr-name">editComponent</span> <span class="token attr-name">}</span>\n    <span class="token attr-name">else</span><span class="token attr-value"><span class="token punctuation">=</span> {</span> <span class="token attr-name">editComponent</span> <span class="token attr-name">}</span>\n<span class="token punctuation">/></span></span>\n\n<span class="token comment" spellcheck="true">// Component Route trong React-Router</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>/<span class="token punctuation">\'</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>Đọc thêm về <a href="https://luubinhan.github.io/blog/2018-01-12-react-router-dom-gioi-thieu-react-router-4">React-Router-4</a></p>\n<h1>Higher-order components</h1>\n<p>Sử dụng HOC để truyền xuống một <code>props</code> dựa trên kiểm tra logic</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">higherOrderComponent</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">EnhancedComponent</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>AnotherComponent <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>AnotherComponent <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Đọc thêm về <a href="https://luubinhan.github.io/blog/2018-03-02-gioi-thieu-higher-order-component-trong-react">HOCs tại đây</a></p>',frontmatter:{date:"March 05, 2018",path:"/2018-03-05-8-cach-render-component-trong-react",tags:["react","javascript"],title:"8 câu điều kiện khi render trong React",desc:"Tutorial này sẽ cover những câu điều kiện dùng để render component phổ biến nhất"}}},pathContext:{prev:!1,next:{excerpt:"Nghe khá trừa tượng và cao siêu. Tuy nhiên đây là một kỹ thuật hay (architectural pattern), một vài người cũng vạch ra được điểm khó chịu khi làm HOCs, tuy nhiên thích thì học thôi, trong vài trường hợp sẽ hữu dụng. Tổng quan Để đọc hiểu bài này dĩ...",html:'<p>Nghe khá trừa tượng và cao siêu. Tuy nhiên đây là một kỹ thuật hay (architectural pattern), một vài người cũng vạch ra được điểm khó chịu khi làm HOCs, tuy nhiên thích thì học thôi, trong vài trường hợp sẽ hữu dụng.</p>\n<h2>Tổng quan</h2>\n<p>Để đọc hiểu bài này dĩ nhiên cần nắm cơ bản ES6, hiểu cà-ri function là thế nào (Currying Functional Programming)</p>\n<p>Cà-ri function là cách viết tách một function nhận một đống arguments, "băm" function đó ra thành nhiều function con, mỗi function nhận 1 argument. Ví dụ</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// một hàm sum thông thường</span>\n<span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// cà-ri function</span>\n<span class="token keyword">const</span> curriedSum <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">// viết hàm cà-ri bằng arrow function</span>\n<span class="token keyword">const</span> curriedSum <span class="token operator">=</span> a <span class="token operator">=</span><span class="token operator">></span> b <span class="token operator">=</span><span class="token operator">></span> a <span class="token operator">+</span> b\n\n<span class="token comment" spellcheck="true">//gọi hàm cà-ri</span>\n<span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Một số cách viết khác của ES6 tìm lại mấy bài cũ của mình đã chia sẽ.</p>\n<h2>Higher-Order Functions</h2>\n<p>Cái này không mới, trước đây trong javascript vẫn thường viết kiểu truyền một anonymous function (callback) như một argument cho 1 function khác, vì function trong javascript là object nên làm được chuyện này, hay 1 function trả về một kết quả trả về của function khác. Xét ví dụ</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> calculator <span class="token operator">=</span> <span class="token punctuation">(</span>inputFunction<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> resultValue <span class="token operator">=</span> <span class="token function">inputFunction</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> resultValue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>all<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> all<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> multiply <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>all<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> all<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> a<span class="token operator">*</span>b<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Ta có thể sử dụng hàm <code>calculator</code> như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">calculator</span><span class="token punctuation">(</span>mutiply<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">//return 8</span>\n<span class="token comment" spellcheck="true">//</span>\n<span class="token function">calculator</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">//return 63</span>\n</code></pre>\n      </div>\n<p>Các hàm như <code>add</code>, <code>multiply</code> chấp nhận số lượng input không giới hạn, hàm <code>calculator</code> sử dụng như một container, extend thêm một số xử lý trước khi gọi hàm <code>add</code>, <code>multiply</code></p>\n<h2>Higher-Order Components</h2>\n<p>Một higher-order component là một một function nhận vào một <code>component</code> như một argument và trả về "phiên bản mở rộng" của component đó.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token punctuation">(</span>InputComponent<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> ExtendedComponent\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// hoặc</span>\nInputComponent <span class="token operator">=</span><span class="token operator">></span> ExtendedComponent\n</code></pre>\n      </div>\n<p><code>ExtendedComponent</code> là một component container, nó trả về <code>InputComponent</code> với một số extend</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/30094/image/Introduction-To-Higher-Order-Components-in-React-Overview.jpg"></p>\n<p>Giờ implement cái khái niệm này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> withGreyBg <span class="token operator">=</span> WrappedComponent <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">class</span> <span class="token class-name">NewComponent</span> extedns Component <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> bgStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'grey\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">\'wrapper\'</span> style<span class="token operator">=</span><span class="token punctuation">{</span>bgStyle<span class="token punctuation">}</span><span class="token operator">></span>\n                <span class="token operator">&lt;</span>WrappedComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> SmallCardWithGreyBg <span class="token operator">=</span> <span class="token function">withGreyBg</span><span class="token punctuation">(</span>SmallCard<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> BigCardWithGreyBg <span class="token operator">=</span> <span class="token function">withGreyBg</span><span class="token punctuation">(</span>BigCard<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> HugeCardWithGreyBg <span class="token operator">=</span> <span class="token function">withGreyBg</span><span class="token punctuation">(</span>HugeCard<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">CardsDemo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">&lt;</span>SmallCardWithGreyBg <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>BigCardWithGreyBg <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>HugeCardWithGreyBg <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/30094/image/Introduction-To-Higher-Order-Components-in-React-An-Example-HOC.jpg"></p>',
id:"E:/anluu/luckyluu/posts/2018-03-02-gioi-thieu-higher-order-component/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2018-03-02T13:35:13.234Z",path:"/2018-03-02-gioi-thieu-higher-order-component-trong-react",tags:["react","javascript"],title:"Giới thiệu Higher-Order Components trong React"}}}}}});
//# sourceMappingURL=path---2018-03-05-8-cach-render-component-trong-react-b175b19da4a85f704792.js.map