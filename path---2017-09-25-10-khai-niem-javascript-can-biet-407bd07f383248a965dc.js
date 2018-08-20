webpackJsonp([0xdc5e7eab60a5],{1261:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#value-vs-reference">Value vs. Reference</a></li>\n<li><a href="#primitive">Primitive</a></li>\n<li><a href="#object">Object</a></li>\n<li><a href="#so-s%E1%BA%A3nh--v%C3%A0-">So sảnh <code class="language-text">==</code> và <code class="language-text">===</code></a></li>\n<li>\n<p><a href="#scope">Scope</a></p>\n<ul>\n<li><a href="#global-scope">Global Scope</a></li>\n<li><a href="#local-scope">Local scope</a></li>\n</ul>\n</li>\n<li><a href="#block-statement">Block Statement</a></li>\n<li><a href="#hoisting">Hoisting</a></li>\n<li><a href="#closures">Closures</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="value-vs-reference"><a href="#value-vs-reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Value vs. Reference</h1>\n<p>5 kiểu dữ liệu được lưu trữ ở dạng <strong>value</strong>: <code class="language-text">Boolean</code>, <code class="language-text">null</code>, <code class="language-text">undefined</code>, <code class="language-text">String</code>, <code class="language-text">Number</code>, còn được gọi với tên khác là <em>primitive types</em></p>\n<p>3 kiểu dữ liệu được lưu trữ ở dạng <strong>reference</strong>: <code class="language-text">Array</code>, <code class="language-text">Function</code>, <code class="language-text">Object</code>, có thể gọi chung là kiểu <em>Object</em></p>\n<h1 id="primitive"><a href="#primitive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Primitive</h1>\n<p>Kiểu <strong>primitive</strong> được lưu giữ cho một biến, khi copy value của biến này cho biến khác, 2 value này hoàn toàn độc lập không có liên hệ gì với nhau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> a <span class="token operator">=</span> x<span class="token punctuation">;</span>\n\na <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="object"><a href="#object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Object</h1>\n<p>Khi một biến được gán cho một kiểu Object, nó không mang giá trị của object mà chỉ <strong>reference</strong> đến dùng lưu trữ của object đó trong bộ nhớ.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> refArr <span class="token operator">=</span> arr<span class="token punctuation">;</span>\n\nrefArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> refArrr<span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="so-sảnh-code-classlanguage-textcode-và-code-classlanguage-textcode"><a href="#so-s%E1%BA%A3nh-code-classlanguage-textcode-v%C3%A0-code-classlanguage-textcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>So sảnh <code class="language-text">==</code> và <code class="language-text">===</code></h1>\n<p>Khi thực hiện so sánh <code class="language-text">=</code> trên biến kiểu reference, trả về <code class="language-text">true</code> khi cả 2 biến số cùng trỏ về một dùng nhớ chứ không phải so sảnh giá trị của 2 biến.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> arrRef <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Hi!\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> arrRef2 <span class="token operator">=</span> arrRef<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrRef <span class="token operator">===</span> arrRef2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> true</span>\n\n<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Hi!\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Hi!\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1 <span class="token operator">===</span> arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> false</span></code></pre>\n      </div>\n<h1 id="scope"><a href="#scope" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scope</h1>\n<h2 id="global-scope"><a href="#global-scope" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Global Scope</h2>\n<p>Biến toàn cục, trong javascript khi khai báo một biến không nằm trong một function nào cả, biến đó sẽ là biến toàn cục</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"binh an"</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// binh an</span>\n\n<span class="token keyword">function</span> <span class="token function">logName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n<span class="token function">logName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// binh an</span></code></pre>\n      </div>\n<h2 id="local-scope"><a href="#local-scope" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Local scope</h2>\n<p>Biến khai báo bên trong function chỉ có hiệu lực trong function đó</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Global Scope</span>\n<span class="token keyword">function</span> <span class="token function">someFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Local Scope #1</span>\n    <span class="token keyword">function</span> <span class="token function">someOtherFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Local Scope #2</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Global Scope</span>\n<span class="token keyword">function</span> <span class="token function">anotherFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Local Scope #3</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Global Scope</span></code></pre>\n      </div>\n<h1 id="block-statement"><a href="#block-statement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Block Statement</h1>\n<p>Những câu khai báo như <code class="language-text">if</code>, <code class="language-text">switch</code>, <code class="language-text">for</code>, <code class="language-text">while</code> không giống như function, biến bên trong các câu khai báo này có phạm vi hoạt động trong function chứa nó.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// câu lệnh điều kiện \'if\' không tạo ra một scope mới</span>\n    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">\'Hammad\'</span><span class="token punctuation">;</span> <span class="token comment">// name vẫn là global scope</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs \'Hammad\'</span></code></pre>\n      </div>\n<p>Trong ES6, để tránh sự nhầm nhằn này, có thể sự dụng khai báo biến bằng <code class="language-text">let</code>,<code class="language-text">const</code> để biến chỉ được hiểu bên trong các câu lệnh như <code class="language-text">if</code>,<code class="language-text">switch</code>,...</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// name = global scope</span>\n    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">\'Hammad\'</span><span class="token punctuation">;</span>\n    <span class="token comment">// likes = local scope</span>\n    <span class="token keyword">let</span> likes <span class="token operator">=</span> <span class="token string">\'Coding\'</span><span class="token punctuation">;</span>\n    <span class="token comment">// skills = local scope</span>\n    <span class="token keyword">const</span> skills <span class="token operator">=</span> <span class="token string">\'JavaScript and PHP\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'Hammad\'</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>likes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: likes is not defined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>skills<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: skills is not defined</span></code></pre>\n      </div>\n<h1 id="hoisting"><a href="#hoisting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hoisting</h1>\n<p>Cách javascript hoạt động đôi khi hơi điên điên, luôn đưa khai báo lên đầu. Đưa lên đầu nghĩa là sau, nghĩa là biến có thể được sử dụng trước khi khai báo! Viết như sau là hoàn toàn hợp lệ trong javascript</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// gán giá trị 5 cho biến x chưa được khai báo</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> x<span class="token punctuation">;</span> <span class="token comment">// khai báo biến x</span></code></pre>\n      </div>\n<p>Do đó luôn như khai báo biến local trước khi sử dụng, nếu không có thể xảy ra trường hợp sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">​<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Michael Jackson"</span><span class="token punctuation">;</span>\n​\n​<span class="token keyword">function</span> <span class="token function">showCelebrityName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n​\n​<span class="token keyword">function</span> <span class="token function">showOrdinaryPersonName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   \n    name <span class="token operator">=</span> <span class="token string">"Johnny Evers"</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">showCelebrityName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Michael Jackson​​</span>\n​\n<span class="token function">showOrdinaryPersonName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Johnny Evers​</span>\n​\n<span class="token comment">// biến toàn cục name giờ đây sẽ bị change giá trị thành Johnny Evers ​</span>\n<span class="token function">showCelebrityName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Johnny Evers​</span>\n​\n​<span class="token comment">// luôn nhớ khai báo biến bằng var,let,const</span>\n​<span class="token keyword">function</span> <span class="token function">showOrdinaryPersonName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   \n    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Johnny Evers"</span><span class="token punctuation">;</span> \n    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Thậm chí khi khai báo biến kèm giá trị cho nó mà không dùng từ khóa var, biến đó sẽ trở thành biến toàn cục</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">showAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    age <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">showAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 90</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment">// 90</span></code></pre>\n      </div>\n<h1 id="closures"><a href="#closures" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Closures</h1>\n<p>Closure là một function bên trong một function khác truy cập tới các biến của function ngoài</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">showName</span> <span class="token punctuation">(</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ​<span class="token keyword">var</span> nameIntro <span class="token operator">=</span> <span class="token string">"Your name is "</span><span class="token punctuation">;</span>        \n    ​<span class="token keyword">function</span> <span class="token function">makeFullName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        \n        ​<span class="token keyword">return</span> nameIntro <span class="token operator">+</span> firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>    \n    <span class="token punctuation">}</span>\n    ​\n    ​<span class="token keyword">return</span> <span class="token function">makeFullName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n​\n<span class="token function">showName</span> <span class="token punctuation">(</span><span class="token string">"Michael"</span><span class="token punctuation">,</span> <span class="token string">"Jackson"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Your name is Michael Jackson</span>\u2028</code></pre>\n      </div>\n<p>Function bên trong vẫn có thể truy cập đến giá trị của biến nằm ở function ngoài ngay cả khí function ngoài đã return giá trị.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">celebrityName</span><span class="token punctuation">(</span>firstName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> nameIntro <span class="token operator">=</span> <span class="token string">"This celebrity is "</span><span class="token punctuation">;</span>\n    <span class="token comment">// this inner function has access to the outer function\'s variables, including the parameter​</span>\n   <span class="token keyword">function</span> <span class="token function">lastName</span><span class="token punctuation">(</span>theLastName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> nameIntro <span class="token operator">+</span> firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> theLastName<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> lastName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n​\n​<span class="token keyword">var</span> mjName <span class="token operator">=</span> <span class="token function">celebrityName</span><span class="token punctuation">(</span><span class="token string">"Michael"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n​\n<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">mjName</span><span class="token punctuation">(</span><span class="token string">"Jackson"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This celebrity is Michael Jackson</span></code></pre>\n      </div>\n<p>Tận dụng đặc điểm này của closure function chỉ lưu tham chiếu đến biến của function ngoài mà không lưu giá trị, ta có thể viết một function như class thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">celebrityID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> celebrityID <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">{</span>\n        getID<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> celebrityID<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        setID<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>theNewID<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            celebrityID <span class="token operator">=</span> theNewID<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> myID <span class="token operator">=</span> <span class="token function">celebrityID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmyID<span class="token punctuation">.</span><span class="token function">getID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return 999</span>\nmyID<span class="token punctuation">.</span><span class="token function">setID</span><span class="token punctuation">(</span><span class="token number">567</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmyID<span class="token punctuation">.</span><span class="token function">getID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return 567</span></code></pre>\n      </div>',timeToRead:5,excerpt:"Value vs. Reference Primitive Object So sảnh   và  Scope Global Scope Local scope Block Statement Hoisting Closures Value vs. Reference 5…",frontmatter:{title:"7 khái niệm JavaScript cần biết",cover:"",date:"2017-09-25",category:"javascript",tags:["javascript","react"],desc:"Một vài khái niệm căn bản trong javascript cần nắm nếu là frontend developer"},fields:{slug:"/2017-09-25-10-khai-niem-javascript-can-biet"}}},pathContext:{slug:"/2017-09-25-10-khai-niem-javascript-can-biet",prev:{frontmatter:{title:"Sort trong javascript",desc:"Nếu nghĩ đã hiểu rõ hàm Array.sort() trong javascript, hãy nghĩ lại!",type:"post",category:"javascript",tags:["javascript"]},fields:{slug:"/2017-10-19-sort-trong-javascript"}},next:{frontmatter:{title:"Thiết kế tuyệt đẹp vs. Thực tế: bài học từ Facebook",desc:"Bài viết dịch lại của một anh làm product design cho facebook đăng tải trên medium",type:"post",category:"ux-ui",tags:["ux-ui","design","web"]},fields:{slug:"/2017-10-03-thiet-ke-an-tuong-vs-thiet-ke-thuc-te-bai-hoc-thuc-te"}}}}}});
//# sourceMappingURL=path---2017-09-25-10-khai-niem-javascript-can-biet-407bd07f383248a965dc.js.map