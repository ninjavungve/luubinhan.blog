webpackJsonp([53003194133886],{1250:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#v%E1%BA%ADy-mu%E1%BB%91n-sort-m%E1%BA%A3ng-s%E1%BB%91-l%C3%A0m-sao-">Vậy muốn <code class="language-text">sort</code> mảng số làm sao ?</a></li>\n<li><a href="#v%C3%A0-h%C6%A1n-th%E1%BA%BF-n%E1%BB%AFa">Và hơn thế nữa</a></li>\n</ul>\n<!-- /TOC -->\n<p>Dù cho đang ở level nào của javascript thì trước sau, ít nhiều cũng đụng tới vấn để <strong>sort</strong> một mảng trong javascript, tài liệu trên mozila có câu này hết sức nguy hiểm <strong>sort is not necessarily stable.</strong>, giờ thử xem tại sao gọi là không <strong>stable</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\nmyArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [ 2, 25, 33, 4, 98 ]</span></code></pre>\n      </div>\n<p>Vâng, <strong>25 > 33 > 4</strong> </p>\n<p>Mảng số này sẽ được javascript sort theo thứ tự alphabet, mỗi giá trị số được đưa về <code class="language-text">string</code> để so sánh.</p>\n<p>Hàm <code class="language-text">sort</code> có thể số truyền vào là <code class="language-text">function</code> dùng để so sánh, nếu bạn không đưa hàm này vào, mặc định nó sẽ convert giá trị cần so sánh về <code class="language-text">string</code> và <strong>so sánh mã unicode</strong> của này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>\nnumbers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [80, 9]</span>\n\n<span class="token keyword">const</span> strings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'80\'</span><span class="token punctuation">,</span> <span class="token string">\'9\'</span><span class="token punctuation">]</span>\nstrings<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [\'80\', \'9\']</span></code></pre>\n      </div>\n<p>Như vậy thì viết như thế này cũng hoàn toàn hợp lệ</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> emojis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"😍"</span><span class="token punctuation">,</span><span class="token string">"😂"</span><span class="token punctuation">,</span><span class="token string">"😰"</span><span class="token punctuation">]</span>\nemojis<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// ["😂", "😍", "😰"]</span>\n\n<span class="token keyword">const</span> wtfJavaScript <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">390</span><span class="token punctuation">,</span> <span class="token string">"😂"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"2325"</span><span class="token punctuation">]</span>  \nwtfJavaScript<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [1, "2325", 390, "😂"]</span></code></pre>\n      </div>\n<h2 id="vậy-muốn-code-classlanguage-textsortcode-mảng-số-làm-sao-"><a href="#v%E1%BA%ADy-mu%E1%BB%91n-code-classlanguage-textsortcode-m%E1%BA%A3ng-s%E1%BB%91-l%C3%A0m-sao-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vậy muốn <code class="language-text">sort</code> mảng số làm sao ?</h2>\n<p>Như đã đề cập, cần đưa một hàm dùng để so sánh, hàm này đặc điểm như sau</p>\n<ul>\n<li>Nếu giá trị trả về của hàm <code class="language-text">compareFunction(a,b)</code> &#x3C; 0, giá trị a sẽ đứng trước b</li>\n<li>Nếu giá trị trả về = 0, a và b bằng nhau</li>\n<li>Giá trị trả về > 0, a đứng sau b</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\nmyArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token comment">// [ 2, 4, 25, 33, 98 ]</span></code></pre>\n      </div>\n<h2 id="và-hơn-thế-nữa"><a href="#v%C3%A0-h%C6%A1n-th%E1%BA%BF-n%E1%BB%AFa" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Và hơn thế nữa</h2>\n<p>ECMAScript không đưa ra chuẩn mực nào về thuật toán cho cách <code class="language-text">sort</code>, nghĩa là Javascript engine muốn áp dụng thuật toán nào thì tùy nó, Google\'s V8 (Javascript engine của Chrome) và NodeJS sử dụng thuật toán <code class="language-text">quick sort</code> và kết quả thì không hẳn là chính xác 100%. Do đó nên nhớ là <code class="language-text">sort</code> trên những trình duyệt khác nhau cũng có khả năng cho kết quả khác nhau nếu nó dùng khác Javascript Engine.</p>\n<p>Nếu rảnh, và có trình, thì nên tự implement một sort function để xài, một số thuật toán sort có thể nghiên cứu như <code class="language-text">InsertionSort</code>, <code class="language-text">MergeSort</code>, <code class="language-text">QuickSort</code></p>',timeToRead:2,excerpt:"Vậy muốn   mảng số làm sao ? Và hơn thế nữa Dù cho đang ở level nào của javascript thì trước sau, ít nhiều cũng đụng tới vấn để  sort  một…",frontmatter:{title:"Sort trong javascript",cover:"",date:"2017-10-19",category:"javascript",tags:["javascript"],desc:"Nếu nghĩ đã hiểu rõ hàm Array.sort() trong javascript, hãy nghĩ lại!"},fields:{slug:"/2017-10-19-sort-trong-javascript"}}},pathContext:{slug:"/2017-10-19-sort-trong-javascript",prev:{frontmatter:{title:"Giải thích React Component Lifecycle",desc:"Tìm hiểu vòng đời của một Component React, khi nào và sử dụng ra sao",type:"post",category:"react",tags:["javascript","react"],date:"2017-10-20",cover:"https://cdn-images-1.medium.com/max/1800/0*OoDfQ7pzAqg6yETH."},fields:{slug:"/2017-10-20-react-lifecycle-la-gi"}},next:{frontmatter:{title:"Import và Export trong Javascript bằng Webpack",desc:"Bàn về các kiểu import và export module trong javascript với Webpack",type:"post",category:"javascript",tags:["javascript","webpack"],date:"2017-10-18",cover:""},fields:{slug:"/2017-10-18-import-va-export-trong-javascript"}}}}}});
//# sourceMappingURL=path---2017-10-19-sort-trong-javascript-fe22fdaad279f31012bb.js.map