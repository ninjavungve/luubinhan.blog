webpackJsonp([0x6fb1811a3b7b],{1327:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#nh%E1%BB%AFng-kh%C3%A1i-ni%E1%BB%87m-ch%C3%ADnh-c%E1%BA%A7n-hi%E1%BB%83u-khi-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-rxjs">Những khái niệm chính cần hiểu khi làm việc với RxJS</a></li>\n<li>\n<p><a href="#kh%E1%BB%9Fi-t%E1%BA%A1o-observable">Khởi tạo <code class="language-text">Observable</code></a></p>\n<ul>\n<li><a href="#m%E1%BB%99t-ho%E1%BA%B7c-nhi%E1%BB%81u-gi%C3%A1-tr%E1%BB%8B">một hoặc nhiều giá trị</a></li>\n<li><a href="#t%E1%BB%AB-m%E1%BB%99t-s%E1%BB%B1-ki%E1%BB%87n">Từ một sự kiện</a></li>\n<li><a href="#t%E1%BB%AB-m%E1%BB%99t-promise">Từ một promise</a></li>\n</ul>\n</li>\n<li><a href="#mergemap--alias-l%C3%A0-flatmap">mergeMap ( alias là flatMap)</a></li>\n<li><a href="#redux-observable">Redux-Observable</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="những-khái-niệm-chính-cần-hiểu-khi-làm-việc-với-rxjs"><a href="#nh%E1%BB%AFng-kh%C3%A1i-ni%E1%BB%87m-ch%C3%ADnh-c%E1%BA%A7n-hi%E1%BB%83u-khi-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-rxjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Những khái niệm chính cần hiểu khi làm việc với RxJS</h2>\n<ul>\n<li><strong>Observable</strong> một interface sẽ lắng nghe những notification trong <em>một khoản thời gian</em> và push cho những interface khác sẽ làm gì đó khi có notification này.</li>\n<li><strong>Subscription</strong> Khi <em>observable</em> bắt đầu được thực thi, ví dụ như lắng nghe sự kiện, và push</li>\n<li><strong>Observer</strong> một interface sẽ làm gì đó với data được push từ <em>observable</em></li>\n<li><strong>Operators</strong> các phương thức được sử dụng để tương tác với output của <em>Observable</em></li>\n</ul>\n<p>Ví dụ đăng ký listen lên một sự kiện nào đó</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbutton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Clicked\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Trong RxJS chúng ta viết như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nRx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Clicked!\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="khởi-tạo-code-classlanguage-textobservablecode"><a href="#kh%E1%BB%9Fi-t%E1%BA%A1o-code-classlanguage-textobservablecode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khởi tạo <code class="language-text">Observable</code></h2>\n<p>Chúng ta có thể tạo observable bằng cách convert từ</p>\n<h3 id="một-hoặc-nhiều-giá-trị"><a href="#m%E1%BB%99t-ho%E1%BA%B7c-nhi%E1%BB%81u-gi%C3%A1-tr%E1%BB%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>một hoặc nhiều giá trị</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="từ-một-sự-kiện"><a href="#t%E1%BB%AB-m%E1%BB%99t-s%E1%BB%B1-ki%E1%BB%87n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Từ một sự kiện</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="từ-một-promise"><a href="#t%E1%BB%AB-m%E1%BB%99t-promise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Từ một promise</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromPromise</span><span class="token punctuation">(</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'/users\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Chúng ta cũng có thể tạo observable sử dụng <code class="language-text">Observable.create</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> foo <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  observer<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfoo<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Để ý là <code class="language-text">observer</code> có phương thức <code class="language-text">next</code> và <code class="language-text">complete</code>.</p>\n<h2 id="mergemap--alias-là-flatmap"><a href="#mergemap--alias-l%C3%A0-flatmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mergeMap ( alias là flatMap)</h2>\n<p>Phương thức phổ biến nhất cho phép transform output của observable.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>input1<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>input2<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Combined value: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Nếu chúng ta muốn <code class="language-text">subscribe</code> lên sự kiện user input giá trị vô <code class="language-text">&lt;input/&gt;</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> input1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#input1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> input2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#input2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> span <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'span\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> obs1 <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input1<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>event <span class="token operator">=></span> span<span class="token punctuation">.</span>textContext <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> obs2 <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input2<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>event <span class="token operator">=></span> span<span class="token punctuation">.</span>textContext <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Giá trị span sẽ thay đổi khi ta nhập giá trị cho 1 trong 2 input, tuy nhiên nó sẽ override giá trị cũ. Nếu muốn có một kết quả combine từ cả 2 giá trị nhập vào từ input, ta <code class="language-text">mergeMap</code> 2 observable lại.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> obs1 <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input1<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> obs2 <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input2<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nobs1<span class="token punctuation">.</span><span class="token function">mergeMap</span><span class="token punctuation">(</span>\n  event1 <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> obs2<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>event2 <span class="token operator">=></span> event1<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> event2<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>\n  combineValue <span class="token operator">=></span> span<span class="token punctuation">.</span>textContext <span class="token operator">=</span> combineValue\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="redux-observable"><a href="#redux-observable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Redux-Observable</h2>\n<p>Redux-Observable cho phép chúng ta đưa các khái niệm của RxJS vào trong Redux. Nó sẽ tạo ra các Observable lắng nghe <code class="language-text">action</code>, xào nấu trước khi <code class="language-text">dispatch</code> một action khác đến <code class="language-text">reducer</code>. Nó được gọi một cái tên chảnh chó là <strong>Epic</strong> (mình gọi nó là chảnh chó vì mình thấy nó méo có gì để được gọi là epic cả)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> ajax <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rxjs/observable/dom/ajax\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Action creators</span>\n<span class="token keyword">const</span> <span class="token function-variable function">fetchUser</span> <span class="token operator">=</span> username <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'FETCH_USER\'</span><span class="token punctuation">,</span> payload<span class="token punctuation">:</span> username <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">fetchUserFulfilled</span> <span class="token operator">=</span> payload <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'FETCH_USER_FULFILLED\'</span><span class="token punctuation">,</span> payload <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Epic</span>\n<span class="token keyword">const</span> <span class="token function-variable function">fetchUserEpic</span> <span class="token operator">=</span> action$ <span class="token operator">=></span>\n  action$<span class="token punctuation">.</span><span class="token function">ofType</span><span class="token punctuation">(</span><span class="token string">\'FETCH_USER\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">mergeMap</span><span class="token punctuation">(</span>action <span class="token operator">=></span>\n      ajax<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`https://api.github.com/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>action<span class="token punctuation">.</span>payload<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>response <span class="token operator">=></span> <span class="token function">fetchUserFulfilled</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Dispatch FETCH_USER action</span>\n<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token string">\'torvalds\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Khi action type <code class="language-text">FETCH_USER</code> được dispatch ra, <code class="language-text">fetchUserEpic</code> lắng nghe tất cả sự kiện, nếu type là <code class="language-text">FETCH_USER</code>, nó không đưa ngay xuống <code class="language-text">reducer</code> của redux mà dừng lại và gọi ajax, sau khi có kết quả ajax, nó lại dispatch ra một sự kiện khác với type là <code class="language-text">FETCH_USER_FULFILLED</code>, rồi trả về cho <code class="language-text">reducer</code></p>\n<p><a href="https://medium.com/@johnvoon/understanding-rxjs-and-redux-observable-93d953d436c6">Link bài gốc</a>\n<a href="http://www.hay16.com/videob59tcUwfpWU/mergemaprxjs-tutorial-watch.html">Video giải thích mergeMap</a></p>',timeToRead:5,excerpt:"Những khái niệm chính cần hiểu khi làm việc với RxJS Khởi tạo  một hoặc nhiều giá trị Từ một sự kiện Từ một promise mergeMap ( alias là…",frontmatter:{title:"Giới thiệu RxJS và Redux Observer",cover:"",date:"2018-07-18",category:null,tags:["react","javascript"],desc:"Một middleware mạnh hơn redux-thunk, ít phức tạp hơn redux-saga. Chúng ta sẽ điểm qua những khái niệm chính để bắt đầu với middleware này"},fields:{slug:"/2018-07-18-huong-dan-gioi-thieu-ve-redux-observer"}}},pathContext:{slug:"/2018-07-18-huong-dan-gioi-thieu-ve-redux-observer",prev:{frontmatter:{title:"Tạo một animation cho component trong React",desc:"Sử dụng React, styled-components, react-flip-toolkit để tạo animation giống như mên trên trang chủ của Stripe",type:"post",category:null,tags:["react","javascript","css"],date:"2018-07-20",cover:""},fields:{slug:"/2018-07-20-huong-dan-tao-animation-cho-component-voi-react"}},next:{frontmatter:{title:"Giải thích Javascript Reactivity",desc:"Rất nhiều thư viện Javascript như Angular, React, Vue sử dụng Reactivity, hiểu được reactivity là gì và cách nó chạy sẽ giúp nâng cao kỹ năng lập trình",type:"post",category:null,tags:["javascript"],date:"2018-07-17",cover:""},fields:{slug:"/2018-07-17-huong-dan-giai-thich-javascript-reactivity"}}}}}});
//# sourceMappingURL=path---2018-07-18-huong-dan-gioi-thieu-ve-redux-observer-6522d96c0c2740526cc3.js.map