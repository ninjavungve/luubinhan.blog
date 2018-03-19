webpackJsonp([57],{"./node_modules/json-loader/index.js!./.cache/json/2016-11-20-phan-6-es-6-can-ban-khai-bao-let-const.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p><code>let</code> dùng để khai báo một biến như <code>var</code>, khác nhau ở phạm vi hoạt động (scoping), ví dụ với khai báo <code>var</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">isItTwo</span><span class="token punctuation">(</span> value <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> two <span class="token operator">=</span> <span class="token boolean">true</span>\n <span class="token punctuation">}</span>\n <span class="token keyword">return</span> two\n<span class="token punctuation">}</span>\n<span class="token function">isItTwo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// result: true</span>\n<span class="token function">isItTwo</span><span class="token punctuation">(</span><span class="token string">\'two\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// result: undefined</span>\n</code></pre>\n      </div>\n<p>Đoạn khai báo <code>var two = true</code> nằm trong điều kiện <code>if</code> nhưng vẫn hoạt động, vì khai báo biến bằng từ khóa <code>var</code> phạm vi ngầm hiểu là trong cả một <code>function</code>, nó giống như viết như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">isItTwo</span><span class="token punctuation">(</span> value <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">var</span> two\n <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  two <span class="token operator">=</span> <span class="token boolean">true</span>\n <span class="token punctuation">}</span>\n <span class="token keyword">return</span> two\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Khai báo biến bằng từ khóa <code>var</code> dễ rối so với các ngôn ngữ khác như <code>php</code>, khi biến được khai báo thì nó có phạm vi hoạt động <em>"block-scoped"</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n <span class="token comment" spellcheck="true">// 0,1</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// result: i is not defined</span>\n</code></pre>\n      </div>\n<p>Khai báo biến bằng từ khóa <code>let</code> hay <code>const</code> có phạm vi <em>block-scoped</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">16</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>\n  <span class="token comment" spellcheck="true">// 16</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// 3.1415</span>\n</code></pre>\n      </div>\n<p>Khi khai báo bằng từ khóa <code>const</code> phải có giá trị khởi tạo, không được phép để rỗng như <code>let</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415</span>\n<span class="token keyword">const</span> e<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// SyntaxError</span>\n</code></pre>\n      </div>\n<p>Nếu dùng <code>const</code> để khai báo biến thì giá trị nó sẽ không được gán mới hoặc khởi tạo lại, nhưng có thể push thêm giá trị vào</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> people <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'An\'</span><span class="token punctuation">,</span><span class="token string">\'Luu\'</span><span class="token punctuation">]</span>\npeople <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// Result: [\'An\',\'Luu\']</span>\npeople<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'Binh\'</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// Result[\'An\',\'Luu\',\'Binh\']</span>\n</code></pre>\n      </div>',frontmatter:{date:"November 20, 2016",path:"/2016-11-20-phan-6-es6-can-ban-khai-bao-let-const",tags:["javascript"],title:"Hồi 6: ES6 căn bản - Khai báo biến với let và const",desc:"Hồi 6 trong series ES6 căn bản, nói về khai báo biến với let và const"}}},pathContext:{prev:{excerpt:"Javascript vốn là ngôn ngữ  ,   không phải là cái gì đó mới mẻ trong javascript, chỉ là trước đây có cách khai báo và tên gọi khác prototype thì giờ có cách khai báo mới cho những ai đã quen với những ngôn ngữ khác có thể tiếp cận dễ dàng. Khai báo...",html:'<p>Javascript vốn là ngôn ngữ <code>prototype</code>, <code>class</code> không phải là cái gì đó mới mẻ trong javascript, chỉ là trước đây có cách khai báo và tên gọi khác prototype thì giờ có cách khai báo mới cho những ai đã quen với những ngôn ngữ khác có thể tiếp cận dễ dàng.</p>\n<h2>Khai báo</h2>\n<p>Đây là cách khai báo trước đây, khai báo <code>fruit</code> sử dụng <code>function contstructor</code>, thêm một số phương thức cho nó bằng khai báo thêm <code>prototype</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">Fruit</span><span class="token punctuation">(</span> name<span class="token punctuation">,</span> calories <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">=</span> calories\n <span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\nFruit<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>chop <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">this</span><span class="token punctuation">.</span>pieces<span class="token operator">++</span>\n<span class="token punctuation">}</span>\nFruit<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bite <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">&amp;</span>amp<span class="token punctuation">;</span>amp<span class="token punctuation">;</span>lt<span class="token punctuation">;</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span>\n <span class="token punctuation">}</span>\n <span class="token keyword">const</span> calories <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span> calories <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pieces\n person<span class="token punctuation">.</span>satiety <span class="token operator">+</span><span class="token operator">=</span> calories\n <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">-</span><span class="token operator">=</span> calories\n <span class="token keyword">this</span><span class="token punctuation">.</span>pieces<span class="token operator">--</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Với ES6 viết theo khai báo <code>class</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>\n constructor <span class="token punctuation">(</span> name<span class="token punctuation">,</span> calories <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n  <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">=</span> calories\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">=</span> <span class="token number">1</span>\n <span class="token punctuation">}</span>\n chop <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pieces<span class="token operator">++</span>\n <span class="token punctuation">}</span>\n bite <span class="token punctuation">(</span> person <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">&amp;</span>amp<span class="token punctuation">;</span>amp<span class="token punctuation">;</span>lt<span class="token punctuation">;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n   <span class="token keyword">return</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> calories <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pieces\n  person<span class="token punctuation">.</span>satiety <span class="token operator">+</span><span class="token operator">=</span> calories\n  <span class="token keyword">this</span><span class="token punctuation">.</span>calories <span class="token operator">-</span><span class="token operator">=</span> calories\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pieces<span class="token operator">--</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Lưu ý là với khai báo <code>class</code>, mình không cần thêm dấu <code>,</code> giữa các hàm, phân biệt với <code>object literal</code>, giữa mỗi <code>function</code> phải được phân cách bằng <code>,</code></p>\n<p>Không giống như khi khai báo function, nếu khái báo <code>class</code> bên dưới câu gọi nó, nó sẽ không hiểu, <code>function</code> thì viết ở đâu gọi cũng hiểu</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Result: referenceError: Person is not defined</span>\n<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Phương thức và Properties trong Classes</h2>\n<p><code>constructor</code> không bắt buộc khai báo</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Đoạn code ví dụ bên dưới, tạo một <code>class</code> với <code>property</code> là <code>count</code> hàm phương thức get next sẽ trả về giá trị <code>count</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>\n    constructor <span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> start\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> next <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Vận dụng, viết một class để lưu dữ liệu nhận về từ JSON, đọc thêm về <code>Window.localStorage</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">LocalStorage</span> <span class="token punctuation">{</span>\n    constructor <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> data <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">set</span> data <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span> JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> ls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LocalStorage</span><span class="token punctuation">(</span><span class="token string">\'groceries\'</span><span class="token punctuation">)</span>\nls<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'apple\'</span><span class="token punctuation">,</span><span class="token string">\'bananas\'</span><span class="token punctuation">,</span> <span class="token string">\'grapes\'</span><span class="token punctuation">]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ls<span class="token punctuation">.</span>data<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// Result: [\'apple\', \'bananas\',\'grapes\']</span>\n</code></pre>\n      </div>\n<p>tạo một phương thức <code>static</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MathHelper</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> a <span class="token operator">+</span> b <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MathHelper<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// Result: 15</span>\n</code></pre>\n      </div>\n<h2>Class Extends</h2>\n<p>Trước đây gặp trường hợp này phải xài tới "thuốc" thì mới tạo được <code>sub-class</code>, mà cũng khá lằn ngoằn, giờ có cách chính quy. lưu ý là khi muốn viết lại hàm constructor bên trong sub-class thì phải gọi từ khóa super để gọi làm phương thức constructor từ class extend</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">Banana</span> <span class="token keyword">extends</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>\n constructor <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">\'banana\'</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span>\n <span class="token punctuation">}</span>\n slice <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pieces <span class="token operator">=</span> <span class="token number">12</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',id:"E:/anluu/luckyluu/posts/2016-11-21-phan-7-es6-can-ban-classes/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-11-21T13:35:13.234Z",path:"/2016-11-21-phan-7-es6-can-ban-classes",tags:["javascript"],title:"Hồi 7: ES6 căn bản - Classes"}},next:{excerpt:"Khai báo một kiểu  , đặt giữa dấu  Với template literals, mình có thể chèn giữa chuỗi đó một đoạn  code javascript Các biến số sử dụng trong phải template literal phải được khai báo trước template literal. Thêm một ví dụ khác Mình có thể lồng code...",html:'<p>Khai báo một kiểu <code>template literal</code>, đặt giữa dấu <code><code></code></code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> text  <span class="token operator">=</span> <span class="token template-string"><span class="token string">`First template literal`</span></span>\n</code></pre>\n      </div>\n<p>Với template literals, mình có thể chèn giữa chuỗi đó một đoạn <em>code javascript</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> name  <span class="token operator">=</span> <span class="token template-string"><span class="token string">`AnLuu`</span></span>\n<span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token operator">&lt;</span>code<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!&lt;/code>`</span></span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// result: Hello, AnLuu</span>\n</code></pre>\n      </div>\n<p>Các biến số sử dụng trong phải template literal phải được khai báo trước template literal. Thêm một ví dụ khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token template-string"><span class="token string">`The time and date is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocalString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n<span class="token template-string"><span class="token string">`The result of 2+3 equals </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n</code></pre>\n      </div>\n<p>Mình có thể lồng code trong code</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token template-string"><span class="token string">`This a template literal ${ `</span></span><span class="token keyword">with</span> another <span class="token operator">%</span><span class="token punctuation">{</span> <span class="token string">\'one\'</span> <span class="token punctuation">}</span> embeded inside it<span class="token template-string"><span class="token string">`}`</span></span>\n</code></pre>\n      </div>\n<p>Multiline Srring</p>\n<p>Để có nhiều dòng trong javascript string, trước ES6 có mấy cách làm như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n    <span class="token string">\'The first line\\n\\\n    A second line\\n\\\n    Then a third line\'</span>\n\n<span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n    <span class="token string">\'The first line\\n\'</span> <span class="token operator">+</span>\n    \'A second line\\n <span class="token operator">+</span>\n    <span class="token string">\'Then a third line\'</span>\n\n<span class="token keyword">var</span> multilineString <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">\'The first line\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'A second line\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Then a third line\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">.</span>join<span class="token punctuation">[</span><span class="token string">\'\\n\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Với ES6, đơn giản là mình gõ Enter như bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n<span class="token template-string"><span class="token string">`The first line\nThe second line\nThen a third line`</span></span>\n</code></pre>\n      </div>\n<p>Cực kỳ hữu ích khi cần phải chèn một đoạn HTML như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Module ES6\'</span><span class="token punctuation">,</span>\n    excerpt<span class="token punctuation">:</span> <span class="token string">\'Here goes some properly sanitized HTML\'</span><span class="token punctuation">,</span>\n    tags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'es6\'</span><span class="token punctuation">,</span><span class="token string">\'template-literals\'</span><span class="token punctuation">,</span><span class="token string">\'es6-in-depth\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token string">`&lt;article>\n    &lt;header>\n        &lt;h1></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> book<span class="token punctuation">.</span>title <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1>\n    &lt;/header>\n    &lt;section> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> book<span class="token punctuation">.</span>excerpt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/section>\n    &lt;footer>\n&lt;ul>\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>\nbook<span class="token punctuation">.</span>tags<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> tag <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>code<span class="token operator">></span>\n    <span class="token operator">&lt;</span>li<span class="token operator">></span> $<span class="token punctuation">{</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li>\n&lt;/code>)\n.join(\'\\n\')\n}&lt;/ul>\n&lt;/footer>\n&lt;/article>`</span></span>\n</code></pre>\n      </div>\n<p>Tagged templates</p>\n<p>Bình thường sau ký tự <code>\\</code> là một ký tự đặc biệt nào đó, ví dụ \\n để thêm dòng mới, nếu không muốn có giá kết quả này mà chỉ muốn xuất ra đúng ký tự \\n, dùng hàm String.raw</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> text <span class="token operator">=</span> String<span class="token punctuation">.</span>raw<span class="token template-string"><span class="token string">`The "\\n" new line won\'t result in a new line. It\'ll be escapted`</span></span>\n</code></pre>\n      </div>\n<p>Với một template literal như Hello, ${ name }. I am ${ emotion } to meet you! ,  tương tự như khi viết bằng tagged template</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">tag</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'Hello,\'</span><span class="token punctuation">,</span><span class="token string">\'. I am\'</span><span class="token punctuation">,</span> <span class="token string">\'to meet you!\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">\'Maurice\'</span><span class="token punctuation">,</span><span class="token string">\'thrilled\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>',id:"E:/anluu/luckyluu/posts/2016-11-19-phan-5-es6-can-ban-template-literals/index.md absPath of file >>> MarkdownRemark",
timeToRead:2,frontmatter:{date:"2016-11-19T13:35:13.234Z",path:"/2016-11-19-phan-5-es6-can-ban-template-literals",tags:["javascript"],title:"Hồi 5: ES6 căn bản - Template literals"}}}}}});
//# sourceMappingURL=path---2016-11-20-phan-6-es-6-can-ban-khai-bao-let-const-0837c113da37fe1ed215.js.map