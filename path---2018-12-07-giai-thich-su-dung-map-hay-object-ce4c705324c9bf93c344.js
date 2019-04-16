webpackJsonp([0xdf091afe91c6],{1383:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#key">key</a></li>\n<li><a href="#th%E1%BB%A9-t%E1%BB%B1-c%C3%A1c-element">Thứ tự các element</a></li>\n<li><a href="#kh%E1%BB%9Fi-t%E1%BA%A1o">Khởi tạo</a></li>\n<li><a href="#l%E1%BA%A5y-gi%C3%A1-tr%E1%BB%8B">Lấy giá trị</a></li>\n<li><a href="#th%C3%AAm-m%E1%BB%99t-element">Thêm một element</a></li>\n<li><a href="#x%C3%B3a-element">Xóa element</a></li>\n<li><a href="#l%E1%BA%A5y-size-hay-length">Lấy <code class="language-text">size</code> (hay length)</a></li>\n<li><a href="#loop">Loop</a></li>\n<li><a href="#khi-n%C3%A0o-d%C3%B9ng-map-khi-n%C3%A0o-d%C3%B9ng-object">Khi nào dùng <code class="language-text">Map</code>, khi nào dùng <code class="language-text">Object</code></a></li>\n</ul>\n<!-- /TOC -->\n<blockquote>\n<p>Căn bản nhất thì có thể xem <code class="language-text">Map</code> là con đẻ của <code class="language-text">Object</code>, nó kế thừa và bổ sung một số thứ ko có trong Object, đồng thời cũng có cắt bỏ một số thứ.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\n\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Map</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></code></pre>\n      </div>\n<p>Map cũng là kiểu dữ liệu dạng collection, mỗi item trong Map được lưu theo cặp <code class="language-text">key:value</code>, các giá trị <code class="language-text">key</code> này cũng là duy nhất trong Map, không có trường hợp được lặp lại. Giống Object thôi, phần khác nhau sẽ được đề cặp ở dưới.</p>\n<p>Tại sao lại đặt là Map? Vì mang các đặc điểm rất giống với World Map, Street Map. Chữ <code class="language-text">Map</code> được dùng trong các trường hợp cần tìm nhanh dữ liệu, vì các giá trị trên Map là duy nhất.</p>\n<p>Ví dụ bản đồ TP.HCM thì tất cả các con đường là khác nhau (do hết tên anh hùng nên nhiều khi đặt trùng trên một số quận, vụ này không tính nhé), bản đồ thế giới thì mỗi nước là duy nhất trên bản đồ.</p>\n<h2 id="key"><a href="#key" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>key</h2>\n<p>Nếu key của <code class="language-text">Object</code> chỉ có thể là <code class="language-text">String</code> hoặc <code class="language-text">Integer</code>, thì key trong <code class="language-text">Map</code> có thể là một <code class="language-text">Object</code>, <code class="language-text">Array</code>, <code class="language-text">Function</code>, nói chung không giới hạn</p>\n<h2 id="thứ-tự-các-element"><a href="#th%E1%BB%A9-t%E1%BB%B1-c%C3%A1c-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thứ tự các element</h2>\n<p>Trong Map thứ tự các element là cố định, ngược lại so với Object</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n    z<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token string">\'@\'</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    b<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    <span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token number">5</span><span class="token punctuation">:</span> <span class="token number">5</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myObject<span class="token punctuation">)</span> <span class="token comment">// Object {1: 4, 5: 5, z: 1, @: 2, b: 3}</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> myObject<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// 5</span>\n<span class="token comment">// z</span>\n<span class="token comment">// @</span>\n<span class="token comment">// b</span></code></pre>\n      </div>\n<p>Vì thứ tự các item trong object không được khai báo cụ thể, nên khi <code class="language-text">for...in</code> qua các element trên object, mỗi trình duyệt có rule khác nhau để chạy</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmyObject<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">\'z\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmyObject<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">\'@\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmyObject<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> myObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n<span class="token comment">// z 1</span>\n<span class="token comment">// @ 2</span>\n<span class="token comment">// b 3</span></code></pre>\n      </div>\n<p>Thứ tự khi gọi qua <code class="language-text">for...of</code> trên Map luôn đúng theo thứ tự đã add</p>\n<h2 id="khởi-tạo"><a href="#kh%E1%BB%9Fi-t%E1%BA%A1o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khởi tạo</h2>\n<p>Với Oject ta có một số cách để khởi tạo</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//Empty object</span>\n<span class="token comment">// bằng constructor</span>\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Empty Object</span>\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">;</span> <span class="token comment">// cùng kết quả như trên</span>\n<span class="token comment">// dùng Object.prototype.create</span>\n<span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Empty Object</span></code></pre>\n      </div>\n<blockquote>\n<p>Hay dùng <code class="language-text">Object.create</code> để tạo object mới kế thừa từ một object khác.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> Vehicle <span class="token operator">=</span> <span class="token punctuation">{</span>\ntype<span class="token punctuation">:</span> <span class="token string">"General"</span><span class="token punctuation">,</span>\n<span class="token function-variable function">display</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Car sẽ kế thừa các property của Vehicle</span>\n<span class="token keyword">var</span> Car <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Vehicle<span class="token punctuation">)</span><span class="token punctuation">;</span>\nCar<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"Car"</span><span class="token punctuation">;</span> <span class="token comment">// overwrite lại giá trị type</span>\nCar<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Car"</span>\n\nVehicle<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// vẫn là "General"</span></code></pre>\n      </div>\n<p>Cũng tương tự như Array, chúng ta không dùng constructor nhiều vì nó tốn xíu performance, lười gõ, dễ gây confuse</p>\n<p>Với <code class="language-text">Map</code> chúng ta sẽ chỉ có duy nhất một cách để khởi tạo bằng constructor <code class="language-text">new Map</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Empty Map</span>\n<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// map = {1=>2, 2=>3}</span></code></pre>\n      </div>\n<h2 id="lấy-giá-trị"><a href="#l%E1%BA%A5y-gi%C3%A1-tr%E1%BB%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lấy giá trị</h2>\n<p>Lấy một giá trị trong Map thông qua <code class="language-text">Map.prototype.get(key)</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keyName<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Object thì cũng có vài đường</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">obj<span class="token punctuation">.</span>keyName\nobj<span class="token punctuation">[</span><span class="token string">\'keyName\'</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Kiểm tra element có tồn tại trong Map dễ hơn chút so với Object</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Map</span>\nmap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>keyName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// object</span>\n<span class="token keyword">var</span> isExist <span class="token operator">=</span> obj<span class="token punctuation">.</span>keyName <span class="token operator">===</span> <span class="token keyword">undefined</span>\n<span class="token comment">// hoặc</span>\n<span class="token keyword">var</span> isExist <span class="token operator">=</span> <span class="token string">\'keyName\'</span> <span class="token keyword">in</span> obj<span class="token punctuation">;</span>\n<span class="token comment">// kiểm tra property trường hợp ko phải kế thừa từ object cha</span>\nobj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>keyName<span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="thêm-một-element"><a href="#th%C3%AAm-m%E1%BB%99t-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thêm một element</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Map</span>\n\nmap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cặp giá trị key, value</span>\n\n<span class="token comment">// Object</span>\nobj<span class="token punctuation">[</span><span class="token string">\'gender\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'female\'</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">\'male\'</span><span class="token punctuation">;</span> </code></pre>\n      </div>\n<h2 id="xóa-element"><a href="#x%C3%B3a-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xóa element</h2>\n<p>Object không có phương thức để xóa một element, chúng ta dùng operator <code class="language-text">delete</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">delete</span> obj<span class="token punctuation">.</span>keyName<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Chỗ này cũng sẽ có nhiều tranh luận quanh vấn đề performance, một số quan điểm cho là làm như bên dưới tốt hơn</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">obj<span class="token punctuation">.</span>keyName <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nhưng đây rõ ràng là 2 cách làm khác nhau, nếu <code class="language-text">delete</code> là xóa hẳn, thì cách sau là gán <code class="language-text">key</code> đó với giá trị <code class="language-text">undefined</code>, đồng nghĩa với việc khi <code class="language-text">for..in</code> nó vẫn chạy qua element đó.</p>\n<p>Map thì có các hàm sẵn để làm chuyện xóa element</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// trả về true/false</span>\n<span class="token keyword">var</span> isDeleteSuccessed <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>keyName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// xóa sạch</span>\nmap<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {}</span></code></pre>\n      </div>\n<h2 id="lấy-code-classlanguage-textsizecode-hay-length"><a href="#l%E1%BA%A5y-code-classlanguage-textsizecode-hay-length" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lấy <code class="language-text">size</code> (hay length)</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Object không có trực tiếp mà phải gọi hàm keys</span>\nObject<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token comment">// Map, rất đơn giản</span>\nmap<span class="token punctuation">.</span>size<span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="loop"><a href="#loop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loop</h2>\n<p>Một trong những khác biệt đáng chú ý nhất mà bạn nên cân nhắc dùng <code class="language-text">Map</code> thay vì <code class="language-text">Object</code></p>\n<p>Kiểm tra xem kiểu dữ liệu có là dạng <code class="language-text">iterable</code> (loop được)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">// > undefined</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> map<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">// > function</span></code></pre>\n      </div>\n<p>Nghĩa là chúng ta có thể dùng <code class="language-text">for...of</code> trên <code class="language-text">Map</code>, <code class="language-text">Object</code> chỉ có thể <code class="language-text">for...in</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">//For map: { 2=>3, 4=>5}</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> map<span class="token punctuation">)</span><span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">// Array[2,3]</span>\n<span class="token comment">// Array[4,5]</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span>value<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span><span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`key: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//key: 2, value: 3</span>\n<span class="token comment">//key: 4, value: 5</span></code></pre>\n      </div>\n<p>Hoặc <code class="language-text">forEach</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">map<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`key: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// key: 2, value: 3</span>\n<span class="token comment">// key: 4, value: 5</span></code></pre>\n      </div>\n<p>Trong Object thậm chí là khi ta dùng <code class="language-text">for..in</code> cũng không thể dùng trực tiếp <code class="language-text">value</code> mà phải viết <code class="language-text">obj[key]</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">"test"</span><span class="token punctuation">}</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`key: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// key: id, value: 1</span>\n<span class="token comment">// key: name, value: test</span></code></pre>\n      </div>\n<h2 id="khi-nào-dùng-code-classlanguage-textmapcode-khi-nào-dùng-code-classlanguage-textobjectcode"><a href="#khi-n%C3%A0o-d%C3%B9ng-code-classlanguage-textmapcode-khi-n%C3%A0o-d%C3%B9ng-code-classlanguage-textobjectcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khi nào dùng <code class="language-text">Map</code>, khi nào dùng <code class="language-text">Object</code></h2>\n<p>Mặc dù nãy giờ đọc thì bạn sẽ thấy <code class="language-text">Map</code> quá ư thần thánh, vậy tại sao ta không dẹp mẹ luôn Object?</p>\n<ul>\n<li>\n<p>Trường hợp mà các giá trị key của chúng ta nó chỉ là integer, string, truy xuất một element trong object bằng key là <strong>nhanh nhất</strong>, trong khi <code class="language-text">Map.prototype.get</code> là một function thì ai cũng biết là nó phải tốn chút tính toán</p>\n</li>\n<li>\n<p>Hoặc trường hợp chúng ta có các element phụ thuộc lẫn nhau như bên dưới</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> \n    name<span class="token punctuation">:</span> <span class="token string">"It\'s Me!"</span><span class="token punctuation">,</span> \n    <span class="token function-variable function">print</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n         <span class="token template-string"><span class="token string">`Object Id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, with Name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Với <code class="language-text">Map</code>? đơn giản là hổng làm được.</p>\n<ul>\n<li>JSON bản thân đã hỗ trợ Object, xài luôn Object chứ không cần chuyển.</li>\n</ul>\n<p><a target="_blank" rel="noopener noreferrer" href="https://medium.com/front-end-hacking/es6-map-vs-object-what-and-when-b80621932373">ES6 — Map vs Object — What and when?</a></p>',
timeToRead:6,excerpt:"key Thứ tự các element Khởi tạo Lấy giá trị Thêm một element Xóa element Lấy   (hay length) Loop Khi nào dùng  , khi nào dùng  Căn bản nhất…",frontmatter:{title:"Map và Object trong Javascript",cover:"",date:"2018-12-07",category:null,tags:["javascript","mobile-web-specialist"],desc:"Hôm rồi lên đọc document về kiểu Map trên MDN, mình khá lúng túng vì thấy nó khá giống với một Object. Viết lại cho những ai cũng đang gặp thắc mắc như mình"},fields:{slug:"/2018-12-07-giai-thich-su-dung-map-hay-object"}}},pathContext:{slug:"/2018-12-07-giai-thich-su-dung-map-hay-object",prev:{frontmatter:{title:"this.setState trong React chạy như thế nào",desc:"Giải đáp thắc mắc vì sao this.setState có thể update DOM, chạy được trên mobile, chạy được trên bất kỳ môi trường nào",type:"post",category:null,tags:["react"],date:"2018-12-12",cover:""},fields:{slug:"/2018-12-12-setstate-chay-nhu-the-nao"}},next:{frontmatter:{title:"Authentication với Vue và Vuex",desc:"Khi bắt đầu một dự án, việc chúng ta làm đầu tiên, luôn là trang đăng ký đăng nhập, hoặc gọi là xử lý luồng authen cho ngầu.",type:"post",category:null,tags:["vuejs"],date:"2018-12-06",cover:""},fields:{slug:"/2018-12-06-huong-dan-xu-ly-authentication-voi-vue-vuex"}}}}}});
//# sourceMappingURL=path---2018-12-07-giai-thich-su-dung-map-hay-object-ce4c705324c9bf93c344.js.map