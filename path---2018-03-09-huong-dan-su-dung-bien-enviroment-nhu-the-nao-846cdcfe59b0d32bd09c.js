webpackJsonp([0xcc4bfcf542de],{1261:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Khi nhắc đến thuật ngữ "Environment Variable" là nghĩ ngay tới việc thiết đặt biến này cho thư mục Java Home trong windows</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*NWeRct1eJ16rAmEaabKV7A.png"></p>\n<p>Thật ra không liên quan gì đâu nhá</p>\n<p>Trong Node, biến Environment là một biến global, thường được sử dụng để chỉ định <code class="language-text">process</code> nào muốn chạy. Ví dụ, khi chạy một ứng dụng web, ta sẽ có các biến <strong>Environment</strong> sau:</p>\n<ul>\n<li>Port</li>\n<li>Database connection string</li>\n</ul>\n<p>Nếu đã từng làm việc với .Net, chắc sẽ biết tới file <code class="language-text">web.config</code>. Biến Environment làm việc i như các thiết đặt trong <code class="language-text">web.config</code></p>\n<p>Ảnh vui nha</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*v9l07sac43rmP-FAXxmwkw.png"></p>\n<h1 id="set-giá-trị-bằng-terminal"><a href="#set-gi%C3%A1-tr%E1%BB%8B-b%E1%BA%B1ng-terminal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set giá trị bằng terminal</h1>\n<p>Thí dụ ta set giá trị của <code class="language-text">PORT</code> </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">PORT=6060 NODE_ENV=production webpack</code></pre>\n      </div>\n<p>Giờ lúc code, ta gọi cái biến này ra bằng cách</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> port <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span></code></pre>\n      </div>\n<p>Không phải lúc nào set giá trị của biến <code class="language-text">env</code> bằng terminal, ví dụ connection string thì không ai đưa vào bằng terminal</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">PORT=65534 DB_CONN=&quot;mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:19373/?ssl=true&amp;replicaSet=globaldb&quot; SECRET_KEY=b6264fca-8adf-457f-a94f-5a4b0d1ca2b9</code></pre>\n      </div>\n<h1 id="set-giá-trị-bằng-file-code-classlanguage-textenvcode"><a href="#set-gi%C3%A1-tr%E1%BB%8B-b%E1%BA%B1ng-file-code-classlanguage-textenvcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set giá trị bằng file <code class="language-text">.env</code></h1>\n<p>Tạo ra một cái file <code class="language-text">.env</code> trong cùng thư mục project, khai báo mớ biến environment ở đây</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">PORT=65534\n\nDB_CONN=&quot;mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:10255/?ssl=true&amp;replicaSet=globaldb&quot;\n\nSECRET_KEY=&quot;b6264fca-8adf-457f-a94f-5a4b0d1ca2b9&quot;</code></pre>\n      </div>\n<p>Để đọc được giá trị này, có rất nhiều cách, mà cách nào thì cũng phải cái thêm package!, dùng package dễ nhất là <code class="language-text">dotenv</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install dotenv --save</code></pre>\n      </div>\n<p>Việc sử dụng hết sức đơn giản như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'dotenv\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'môngdb\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>\n\nMongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_CONN</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> db<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"We are connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<blockquote>\n<p>Lưu ý đừng check in file <code class="language-text">.env</code> này lên github, nếu checkin lên Github sẽ báo ngay tới email là việc làm này hết sức nguy hại tới sự \'riêng tư\'!</p>\n</blockquote>\n<h1 id="extension-của-vscode"><a href="#extension-c%E1%BB%A7a-vscode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extension của VSCode</h1>\n<p>Nếu đang dùng VSCode, một số extension này sẽ hữu ích</p>\n<p>DotENV extension: mang màu sắc đến với cuộc sống</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*K5PBHyeMSrND58ycVyw3YA.png"></p>',timeToRead:2,excerpt:'Khi nhắc đến thuật ngữ "Environment Variable" là nghĩ ngay tới việc thiết đặt biến này cho thư mục Java Home trong windows Thật ra không…',frontmatter:{title:"Sử dụng biến Node Environment",cover:"",date:"2018-03-09",category:"javascript",tags:["javascript","webpack"],desc:"Biến environment là một phần cơ bản cần biết khi làm việc với Node"},fields:{slug:"/2018-03-09-huong-dan-su-dung-bien-enviroment-nhu-the-nao"}}},pathContext:{slug:"/2018-03-09-huong-dan-su-dung-bien-enviroment-nhu-the-nao",prev:{frontmatter:{title:"Authentication với JWT",desc:"Giới thiệu JSON Web Tokens (JWT) và cách hiện thực",type:"post",category:null,tags:["javascript","react","security"],date:"2018-03-14",cover:""},fields:{slug:"/2018-03-14-huong-dan-react-authentication-voi-jwt-redux"}},next:{frontmatter:{title:"Redux vận hành như thế nào",desc:"Actions, reducers, action creators, middleware, pure functions, immutability,... những ngoại ngữ làm rối bất kỳ ai nếu chưa biết redux",type:"post",category:"react",tags:["react","javascript","redux"],date:"2018-03-06",cover:""},fields:{slug:"/2018-03-06-huong-dan-redux-van-hanh-nhu-the-nao-kem-vi-du"}}}}}});
//# sourceMappingURL=path---2018-03-09-huong-dan-su-dung-bien-enviroment-nhu-the-nao-846cdcfe59b0d32bd09c.js.map