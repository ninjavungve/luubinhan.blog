webpackJsonp([55],{"./node_modules/json-loader/index.js!./.cache/json/2018-04-04-danh-sach-doi-choi-voi-react-native.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>đồ chơi Development</h2>\n<h3>SDK</h3>\n<p>Chưa ai qua mặt được <a href="https://expo.io/">Expo</a>. Expo cho phép dựng app mà ko cần Android Studio hay Xcode.</p>\n<p>Workflow để làm việc với Expo</p>\n<ol>\n<li>Tạo project mới sử dụng <a href="https://github.com/react-community/create-react-native-app">create-react-native-app</a></li>\n<li>Code, code và code...</li>\n<li>Chạy thử bằng Expo app có thể tìm thấy trong app store, google play</li>\n</ol>\n<p>Không cần kết nối điện thoại với máy tính, chỉ cần điện thoại kết nối cùng mạng với localhost đang chạy, điện thoại có cài Expo app, scan đoạn QR code trên command line là được.</p>\n<p>Điều hạn chế của Expo là nó ko cho phép cài thêm một số package khác nữa ngoài những package đã được cài sẵn của Expo như Camera, Facebook, Map. Trường hợp cần những package này, sử dụng <code>react-native init</code>, lúc đó bạn phải handle mọi thứ, phức tạp hơn dùng Expo.</p>\n<h3>Check code chuẩn</h3>\n<p>Nếu bị nghiện code cho chuẩn như lê duẩn, ESLint là người bạn đồng hành, mình hay sử dụng bộ style guide cấu hình sẵn của <a href="https://github.com/airbnb/javascript">Airbnb\'s Javascript Style Guide</a>.</p>\n<p>Nếu sử dụng ESLint thì mình nghĩ bạn nên dùng thêm một số plugin của VSCode hay Atom, một số plugin của Sublime text mình cài về thì chạy không như ý lắm.</p>\n<h3>Debugging</h3>\n<p>Ứng dụng chạy trên desktop <a href="https://infinite.red/reactotron">Reactotron</a> cho phép debug React và React Native với những tính năng như: inspecting, mofifying, subscribing, tracking HTTP, đo performance ứng dụng, track error...</p>\n<h2>Boilerplate và UI Frameworks</h2>\n<p><a href="https://github.com/bartonhammond/snowflake">Snowflake</a> bao gồm cả Frontend đến Back-End code của ứng dụng, một lựa chọn tốt để bắt đầu dự án mới nhanh nhất.</p>\n<p>React Native có sẵn một số components UI cơ bản, nếu muốn custome style thì chúng ta phải viết thêm CSS, còn không, nếu muốn nhiều hơn những component đã được viết sẵn, màu mè hoa lá hẹ hết rồi thì có thể dùng <a href="https://nativebase.io/">NativeBase</a> tương đối kế thừa khái niệm của Bootstrap, hoặc React Native Kittens có một số components cũng hay ho.</p>\n<h2>Thư viện và components</h2>\n<p>Làm navigation thì nghĩ ngày đến <a href="https://reactnavigation.org/">React navigatio</a> của chính facebook luôn.</p>\n<p>Quản lý state thì dùng <a href="http://mobx.js.org/">Mobx</a> hoặc <a href="http://redux.js.org/">Redux</a>, redux thì thường cho những dữ liệu nhiều và lớn, năm 2018 chúng ta sẽ vẫn sử dụng Redux nhé, đừng tưởng là nó đã cũ và có cái khác thay thế.</p>\n<p><a href="https://github.com/oblador/react-native-animatable">Animatable</a> rất có ích khi muốn làm animation cho layout hay mấy cái micro animation trên component.</p>\n<p>Một số UI Components khác có thể tham khảo</p>\n<ul>\n<a href="https://github.com/christopherdro/react-native-calendar" rel="external" target="_blank"><strong>react-native-calendar</strong></a></li>\n<li>\n<a href="https://github.com/xgfe/react-native-datepicker" target="_self"><strong>react-native-</strong></a><a href="https://github.com/xgfe/react-native-datepicker" target="_self"><strong>datepicker</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-progress" rel="external" target="_blank"><strong>react-native-progress</strong></a></li>\n<li>\n<a href="https://github.com/maxs15/react-native-spinkit" rel="external" target="_blank"><strong>react-native-spinkit</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-vector-icons" rel="external" target="_blank"><strong>Vector Icons</strong></a></li>\n<li>\n<a href="https://github.com/leecade/react-native-swiper" rel="external" target="_blank"><strong>react-native-swiper</strong></a></li>\n<li>\n<a href="https://github.com/skv-headless/react-native-scrollable-tab-view" rel="external" target="_blank"><strong>react-native-scrollable-tab-view</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-lightbox" rel="external" target="_blank"><strong>react-native-lightbox</strong></a></li>\n<li>\n<a href="https://github.com/airbnb/react-native-maps" rel="external" target="_blank"><strong>react-native-maps</strong></a></li>\n<li>\n<a href="https://github.com/sghiassy/react-native-sglistview" rel="external" target="_blank"><strong>SGListView</strong></a></li>\n<li>\n<a href="https://github.com/jaredpalmer/formik" rel="external" target="_blank"><strong>Formik</strong></a></li>\n<li>\n<a href="https://github.com/AlexanderZaytsev/react-native-i18n" rel="external" target="_blank"><strong>react-native-i18n</strong></a></li>\n<li>\n<a href="https://github.com/zo0r/react-native-push-notification" rel="external" target="_blank"><strong>react-native-push-notification</strong></a></li>\n<li>\n<strong><a href="https://community.algolia.com/react-instantsearch/" rel="external" target="_blank">InstantSearch</a></strong></li>\n<li>\n<a href="https://github.com/itinance/react-native-fs" rel="external" target="_blank"><strong>react-native-fs</strong></a></li>\n<li>\n<strong><a href="https://github.com/lwansbrough/react-native-camera" rel="external" target="_blank">react-native-camera</a></strong></li>\n<li>\n<strong><a href="https://github.com/react-native-community/react-native-video" rel="external" target="_blank">react-native-video</a></strong></li>\n<li>\n<strong><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">react-native-</a><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">sqlite</a><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">-storage</a></strong></li>\n<li>\n<a href="https://github.com/thewei/react-native-store" rel="external" target="_blank"><strong>react-native-store</strong></a></li>\n<li>\n<strong><a href="https://github.com/oney/react-native-webrtc" rel="external" target="_blank">react-native-</a><a href="https://github.com/oney/react-native-webrtc" rel="external" target="_blank">webrtc</a></strong></li>\n</ul>\n<h2>Web Services</h2>\n<h3>Database</h3>\n<p><a href="https://realm.io/">Realm</a> real-time database chuyên cho mobile app, bào gồm các tính năng như two-way data sync, offline-first, data push.</p>\n<p>Nếu Realm có quá nhiều tính năng ko dùng đến, thì có thể sử dụng <a href="https://facebook.github.io/react-native/docs/asyncstorage.html">AsyncStorage</a> đi kèm React Native</p>\n<h3>Analytics</h3>\n<p><a href="https://get.fabric.io/">Fabric</a> bộ công cụ tất cả trong một hoặc nếu thích Google Analytics thì có nhiều <a href="https://github.com/idehub/react-native-google-analytics-bridge">thư viện khác</a> hổ trợ</p>\n<h3>Push Notifications</h3>\n<p>Cái này thì ko có nhiều service lắm, nói cách khác <a href="https://firebase.google.com/docs/cloud-messaging/">Firebase Cloud Messaging</a> (trước đây là Google Cloud Messaging) gần như thống trị, để sử dụng FCM chúng ta sẽ cần tới <a href="https://github.com/evollu/react-native-fcm">react-native-fcm package</a></p>\n<h3>Code update</h3>\n<p><a href="https://microsoft.github.io/code-push/">CodePush</a> cho phép deploy code mới nhất trực tiếp đến device của user, nó giống như kho trung tâm, nơi chúng ta quăng hết HTML, CSS, Javascript, assets lên đó hết. Thông qua CodePush chúng ta không cần upload những thay đổi lên app store và đợi user chọn update ứng dụng. Sử dụng với đống <a href="https://github.com/Microsoft/react-native-code-push">thư viện này</a> </p>',frontmatter:{date:"April 04, 2018",path:"/2018-04-04-danh-sach-doi-choi-voi-react-native",tags:["javascript","react","react-native"],title:"Danh sách đồ chơi để bắt đầu với React Native",desc:"Để bắt đầu và đào sâu vọc vạch với React Native, bạn sẽ cần đụng tới những món đồ chơi sau"}}},pathContext:{prev:{excerpt:"Ngày xưa khi Firefox ra đời đánh dấu sự tàn lụi của IE6, với những tính năng siêu ngầu như: cho phép user cài thêm  extensions , thay  theme  như thay áo. Ai cũng khoái. Vài năm sau, dân chơi thứ thiệt bước vào cuộc đấu, cái tên ai cũng biết là ai...",html:'<p><img src="https://cdn-images-1.medium.com/max/1000/1*Gd9wkMJQxrCi8UNZWRgx-Q.png"></p>\n<p>Ngày xưa khi Firefox ra đời đánh dấu sự tàn lụi của IE6, với những tính năng siêu ngầu như: cho phép user cài thêm <strong>extensions</strong>, thay <strong>theme</strong> như thay áo. Ai cũng khoái.</p>\n<p>Vài năm sau, dân chơi thứ thiệt bước vào cuộc đấu, cái tên ai cũng biết là ai đấy - <strong>Chrome</strong>. Khi vừa xuất hiện thực sự Chrome trở thành cơn địa chấn, số lượng người dùng lúc ban đầu nhiều không tưởng, và không ngừng tăng, bởi vì nó được chống lưng bởi Google, con ác chủ bài để Google có thể chiếm hết thị phần trình duyệt. Chắc chắn bạn cũng đang dùng Chrome để đọc blog này!</p>\n<p>Web <em>bây giờ</em> khác xưa nhiều rồi, công nghệ tân thời tốn điện hơn xưa, à ko, tốn RAM và CPU hơn, web ko còn là những trang tin đơn giản, nó còn là những ứng dụng phức tạp chạy trên trình duyệt bằng những công nghệ, ngôn ngữ không ngừng thay đổi để <strong>thõa mãn</strong> thú tính của người sử dụng, chúng ta đấy.</p>\n<blockquote>\n<p>Tui một developer chạy con Macbook Pro cấu hình cao nhất, mới nhất. Khi bắt đầu lập trình và bật Chrome DevTools lên, pin tụt nhanh như chó phóng qua hàng rào</p>\n</blockquote>\n<p>Và nếu bạn cũng là developer như tui, chắc bạn cũng sẽ bật Task manager lên và kiểm tra, a đù, sao Chrome mày ăn RAM tao kinh dị vạy.</p>\n<p>Rồi bạn nghe đâu với bản <a href="https://blog.mozilla.org/blog/2017/11/14/introducing-firefox-quantum/?utm_source=twitter&#x26;utm_medium=social&#x26;utm_campaign=quantum-launch-2017&#x26;utm_content=launch-blog">Firefox Quantum</a> mới bọn dev của mozila đã ngồi fix hơn 7 triệu dòng code để Firefox cạnh tranh về tốc độ với Google! Quảng cáo ngầu ghê!</p>\n<p>Năm 2017 Quantum chạy chính thức trên Android, Linux, iOS, Mac, Windows, nói chung chạy tuốt, phải hơn sau 10 năm từ ngày phiên bản đầu tiên, phiên bản đã giết chết IE mới có một cập nhập thực sự đáng đồng tiền bát cháo.</p>\n<p><img src="https://www.mozilla.org/media/img/firefox/home/hero-laptop.cd8ad96e2fbc.png"></p>\n<p>Bên cạnh giao diện cool mới, nó load web nhanh hơn gấp đôi so với phiên bản Firefox 6, sử dụng ít hơn 30% RAM so với Chrome.</p>\n<p>Sau 10 năm lăn lộn trên chiến trường, Mozilla đã hiểu được rằng để cạnh tranh được với đối thủ bây giờ thì không chỉ cần một vài cải tiến nhỏ là được, mọi thứ phải thực sự <strong>AWSOME</strong>.</p>\n<p>Có thể những tính năng được đưa vào Firefox Quantum bạn cũng có thể tìm thấy trên Chrome, nhưng điều gì khiến tui vẫn thích Firefox và luôn muốn mình sử dụng Firefox khi có thể?</p>\n<p>Các công ty lớn điều sẽ muốn người sử dụng sản phẩm từ một nhà cung cấp khác quay lưng và sử dụng sản phẩm của mình, công ty sẽ cung cấp những tính năng chỉ-có-thể-tìm-thấy trên sản phẩm của họ để cầm chân người dùng trong ecosymtem của công ty.</p>\n<p>Lấy ví dụ như Apple Keynote chỉ có thể sử dụng với Safari, iMessage chỉ có trên iOS, bạn phải say-good-bye khi chuyển qua Android, trang update của Microsoft chỉ có thể sự dụng trên IE, Edge, để chép nhạc vào iphone bạn phải cài iTune,... ngược lại Firefox có thể nói là kẻ phá đám đứng ngoài khu vườn thượng uyển đó, là đối thủ cạnh tranh để chống lại sự độc quyền và khiến việc các công ty lớn bắt chúng ta phụ thuộc ngày càng nhiều vào các công ty này trở nên khó hơn, khiến họ phải dè chừng và không ngừng cái tiến sản phẩm. Như câu nói nghe suốt "Có cạnh tranh thì mới có phát triển", như khi Grab đã loại đi Uber rồi và khi chúng ta sẽ ra sau, Youtube của google một khi đã giết hết tất cả đối thủ trong mảng Video trực tuyến, chúng ta ăn quảng cáo còn hơn cả trên truyền hình, xem một clip 10 phút là đã có quảng cáo, vừa vào xem đã phải xem quảng cáo trước.</p>\n<p>Bonus: từ hàng triệu yêu cầu từ user, Firefox đã có tính năng tắt hết cái <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1368744">Push-Notify</a>, một trong những yêu cầu hết sực bực mình khi các trang web bây giờ đều đòi cấp phép cho nó quăng thông báo quảng cáo qua trình duyệt dù mình không đang truy cập nó.</p>\n<p>Fanboy Firefox cho hay :D</p>\n<p>Dịch từ đâu quên nguồn</p>',id:"C:/xampp/htdocs/luckyluu/posts/2018-04-05-tai-sao-tui-van-thich-firefox/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2018-04-05T13:35:13.234Z",path:"/2018-04-05-tai-sao-tui-van-thich-firefox",tags:["ux-ui"],title:"Chém gió: Tại sao tui vẫn thích Firefox"}},next:{excerpt:"Xéeeeeeeeeet cái hàm sau Gọi một hàm A hàm A trả về Promise, thì hàm A là dạng hàm blocking hàm   là một hàm  . Dòng  A  sẽ đợi đến khi chạy xong hàm  . Hàm gọi là  blocking  khi mà khi chạy hàm này mấy thằng khác không chạy đồng thời với nó, ngược...",html:'<p>Xéeeeeeeeeet cái hàm sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// kết quả in ra</span>\n<span class="token comment" spellcheck="true">// Result: DONE</span>\n</code></pre>\n      </div>\n<h2>Gọi một hàm A hàm A trả về Promise, thì hàm A là dạng hàm blocking</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">asynFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// A</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// tương tự như</span>\n    <span class="token comment" spellcheck="true">// asyncFunc().then(x => console.log(\'Result: \' + x))</span>\n<span class="token punctuation">}</span>\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>hàm <code>main</code> là một hàm <code>async</code>. Dòng <em>A</em> sẽ đợi đến khi chạy xong hàm <code>asyncFunc()</code>.</p>\n<p>Hàm gọi là <em>blocking</em> khi mà khi chạy hàm này mấy thằng khác không chạy đồng thời với nó, ngược lại <em>non-blocking</em> là hàm mà không can thiệp việc các hàm khác chạy cùng lúc với nó</p>\n<h2><code>Promise</code> là một container để cưu mang giá trị trả về từ một <code>asynchronously</code></h2>\n<p>Nếu hàm trả về <code>Promise</code> thì cái <code>Promise</code> này giống như một cái thùng chứa, hàm thực thi bên trong sẽ quăng kết quả trả về vào đó. Mô phỏng việc này bằng một <code>Array</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> blank <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> blank<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> blank<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> blank <span class="token operator">=</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// đợi đến khi giá trị trả về được fill</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> x <span class="token operator">=</span> blank<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">//A</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Tất nhiên với một <code>Promise</code> thực thụ không thể truy cập giá trị như dòng <em>A</em> (blank[0]), mà chúng ta sử dụng hàm <code>then()</code> và một <em>callback</em></p>\n<h2><code>Promise</code> là một đối tượng tạo ra sự kiện</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> eventEmitter <span class="token operator">=</span> <span class="token punctuation">{</span> success<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">//A</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> handler <span class="token keyword">of</span> eventEmitter<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">handler</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> eventEmitter<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>success<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">//B</span>\n</code></pre>\n      </div>\n<p>Dòng <em>B</em> đăng ký lắng nghe sự kiện sau khi gọi hàm <code>asyncFunc()</code>. Kết quả trả về của <code>Promise</code> sẽ là một chuỗi event sau khi thực thi kèm với giá trị gì đấy ứng với từng event.</p>',id:"C:/xampp/htdocs/luckyluu/posts/2018-04-03-ba-cach-de-hieu-promise/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2018-04-03T13:35:13.234Z",path:"/2018-04-03-ba-cach-de-hieu-promise",tags:["javascript","react"],title:"Ba cách để hiểu Promise"}}}}}});
//# sourceMappingURL=path---2018-04-04-danh-sach-doi-choi-voi-react-native-f453bc915ab859d68db4.js.map