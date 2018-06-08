webpackJsonp([27],{"./node_modules/json-loader/index.js!./.cache/json/2018-06-08-kinh-nghiem-lam-viec-voi-du-an-lon.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Cách tổ chức project thì không phải là rule, mỗi người mỗi kiểu, chỉ là một vài cân nhắc để quản lý code tốt hơn.</p>\n<h2>Thư mục</h2>\n<p>Đây là thư mục project hiện tại của tác giả bài viết này</p>\n<p><img src="https://cdn-images-1.medium.com/max/600/1*vStBUv5egjAAb1XNWeVSRA.png"></p>\n<p>Giải thích của tác giả về cách tổ chức này</p>\n<h3>/api</h3>\n<p>Nơi chứa những functions đảm nhiệm chuyện gọi API</p>\n<h3>/assets</h3>\n<p>Nơi chứa external resource</p>\n<h3>components</h3>\n<p>Tất cả component được sử dụng từ 2 lần trở lên sẽ nằm ở đây. Mỗi component là một thư mục bao gồm <code>index.js</code> để export, <code>styles.module.scss</code> stylesheet kèm theo của component, ở đây quan điểm của mình là nên có một file là <code>ExampleComponent.js</code>, lý do để lúc code mình có thể trỏ ngay đến tên file theo cách đặt tên component = tên file như vậy, nếu component nào cũng <code>index.js</code> thì mở chừng chục file <code>index.js</code> như vậy trên VSCode sẽ chẳng thể biết đang sửa thằng nào.</p>\n<h3>/lang</h3>\n<p>Thư mục này chỉ có khi ứng dụng của mình hỗ trợ đa ngôn ngữ. Tác giả đang sử dụng i18n-js cho đa ngôn ngữ, vì nó dễ xài</p>\n<p>File <code>index.js</code> của lang</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">\'i18n-js\'</span>\n\n<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">\'./locales/en\'</span>\n<span class="token keyword">import</span> es <span class="token keyword">from</span> <span class="token string">\'./locales/es\'</span>\n<span class="token keyword">import</span> pt <span class="token keyword">from</span> <span class="token string">\'./locales/pt\'</span>\n\ni18n<span class="token punctuation">.</span>translations <span class="token operator">=</span> <span class="token punctuation">{</span>\n  en<span class="token punctuation">,</span>\n  es<span class="token punctuation">,</span>\n  pt<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\ni18n<span class="token punctuation">.</span>fallbacks <span class="token operator">=</span> <span class="token boolean">true</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> i18n<span class="token punctuation">.</span>t\n\n<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">\'./locales/keys\'</span>\n</code></pre>\n      </div>\n<p><img src="https://cdn-images-1.medium.com/max/600/1*vStBUv5egjAAb1XNWeVSRA.png" alt="Giống hình trên thôi, đỡ phải scroll lên"></p>\n<h3>/lib</h3>\n<p>Chứa những file helper, utils, validation,...</p>\n<h3>/store</h3>\n<p>Dành cho người xài Redux, chưa sử dụng MobX nhiều, có thể sẽ khác. Bên trong này sẽ có những thư mục con</p>\n<ul>\n<li><strong>/actions</strong> chứa action creators</li>\n<li><strong>/definitions</strong> hay <strong>/actionTypes</strong></li>\n<li><strong>/reducers</strong> trong đây mỗi reducer sẽ là 1 file riêng biệt, file index.js sẽ combine tất cả export lại. Hoặc <strong>/sagas</strong> nếu dùng redux saga</li>\n</ul>\n<p>File <code>index.js</code> của thư mục store</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux\'</span>\n\n<span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">\'redux-saga\'</span>\n<span class="token keyword">import</span> loggerMiddleware <span class="token keyword">from</span> <span class="token string">\'redux-logger\'</span>\n\n<span class="token keyword">import</span> combinedReducer <span class="token keyword">from</span> <span class="token string">\'src/store/reducers\'</span>\n<span class="token keyword">import</span> rootSaga <span class="token keyword">from</span> <span class="token string">\'src/store/sagas\'</span>\n\n<span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nsagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>rootSaga<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>\n  combinedReducer<span class="token punctuation">,</span>\n  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>\n    sagaMiddleware<span class="token punctuation">,</span>\n    loggerMiddleware<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3>/styles</h3>\n<p>Chứa common style</p>\n<h3>/view</h3>\n<p>Trong component thì ta để mấy component để hiển thị, pure component, thư mục view này thì chứa container component.</p>\n<p>File <code>index.js</code> của thư mục này chúng ta sẽ export toàn bộ mấy cái view để ta đưa nó vô <code>router</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  BrowserRouter<span class="token punctuation">,</span>\n  Route<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span>\n\n<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">\'./Home\'</span>\n<span class="token keyword">import</span> Settings <span class="token keyword">from</span> <span class="token string">\'./Settings\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BrowserRouter</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/settings<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Settings<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BrowserRouter</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Cuộc chiến với CSS</h2>\n<p>Có tới cả trăm bài viết và tranh luận xung quanh sử dụng CSS trong React. Tác giả bài viết này thích CSS module, chưa thấy được lý do tại sao dùng Styled Components.</p>\n<p>Lý do thích CSS module? Tuy không phải lúc nào cũng giải quyết được mọi vấn đề với CSS module, nên việc sử dụng kết hợp giữa CSS module và global import style là sự lựa chọn của tác giả</p>\n<p>Đây là cách config SASS trong webpack</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/(?&lt;!\\.module)\\.scss$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'style-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'css-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        importLoaders<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'postcss-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// Necessary for external CSS imports to work</span>\n        <span class="token comment" spellcheck="true">// https://github.com/facebookincubator/create-react-app/issues/2677</span>\n        ident<span class="token punctuation">:</span> <span class="token string">\'postcss\'</span><span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n          <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-flexbugs-fixes\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            browsers<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n              <span class="token string">\'>1%\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'last 4 versions\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'Firefox ESR\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'not ie &lt; 9\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// React doesn\'t support IE8 anyway</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            flexbox<span class="token punctuation">:</span> <span class="token string">\'no-2009\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'sass-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.module\\.scss$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'style-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'css-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        importLoaders<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        modules<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        localIdentName<span class="token punctuation">:</span> <span class="token string">\'[local]__[hash:base64:5]\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'postcss-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// Necessary for external CSS imports to work</span>\n        <span class="token comment" spellcheck="true">// https://github.com/facebookincubator/create-react-app/issues/2677</span>\n        ident<span class="token punctuation">:</span> <span class="token string">\'postcss\'</span><span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n          <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-flexbugs-fixes\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            browsers<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n              <span class="token string">\'>1%\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'last 4 versions\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'Firefox ESR\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'not ie &lt; 9\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// React doesn\'t support IE8 anyway</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            flexbox<span class="token punctuation">:</span> <span class="token string">\'no-2009\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'sass-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>Sử dụng css module trong component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> classNames <span class="token keyword">from</span> <span class="token string">\'classnames\'</span>\n\n<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./styles.module.scss\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> negative <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> surname <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n    <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">classNames</span><span class="token punctuation">(</span>\n      styles<span class="token punctuation">[</span><span class="token string">\'name-container\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      negative <span class="token operator">&amp;&amp;</span> styles<span class="token punctuation">[</span><span class="token string">\'name-negative\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">\'name-content\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Or should I refer to you by <span class="token punctuation">{</span>surname<span class="token punctuation">}</span><span class="token operator">?</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Để tìm hiểu thêm về CSS Module trong React, <a href="https://blog.pusher.com/css-modules-react/">đọc bài này</a></p>\n<p><a href="https://hackernoon.com/tips-on-react-for-large-scale-projects-3f9ece85983d">Link bài gốc: Tips on React for large scale projects</a>\nTác giả: Luis Felipe Zaguini</p>',frontmatter:{date:"June 08, 2018",path:"/2018-06-08-kinh-nghiem-lam-viec-voi-du-an-lon",tags:["react"],title:"Kinh nghiệm tổ chức React project lớn",desc:"Có bao giờ cảm thấy lạc lối trong đóng code ngày càng lúc bự ra, một vài tip từ người có kinh nghiệm"}}},pathContext:{prev:!1,next:{excerpt:"Sự thật không thể chối cãi là ứng dụng chạy trên nên web đã có chổ đứng rất vững chắc bên cạnh những ứng dụng chạy trên desktop. Những gì chúng user cần để sử dụng là trình duyệt, một tài khoản email để đăng ký, khi user ngày càng thích thú các ứng...",html:'<p>Sự thật không thể chối cãi là ứng dụng chạy trên nên web đã có chổ đứng rất vững chắc bên cạnh những ứng dụng chạy trên desktop. Những gì chúng user cần để sử dụng là trình duyệt, một tài khoản email để đăng ký, khi user ngày càng thích thú các ứng dụng web, nhu cầu tăng lên, user đòi hỏi những ứng dụng sẽ làm được những thứ phức tạp hơn là việc chỉ show thông tin đơn thuần.</p>\n<p>MPA (Multi-page app) và SPA (Single Page app) là 2 kiểu ứng dụng phổ biến trong web, mõi thằng sẽ có ưu nhược khác nhau.</p>\n<p>Để trả lời cho câu hỏi kiểu ứng dụng nào là phù hợp, chúng ta phải trả lời kha khá câu hỏi, ưu tiên nội dung lên hàng đầu, trãi nghiệm người dùng lên trên hết, kiểu dữ liệu gì sẽ được đưa đến user, loại nội dung gì mà user sẽ quan tâm nhất</p>\n<h2>SPA</h2>\n<p>SPA là gì ? là ứng dụng web mà trình duyệt request lần đầu tiên, các lần request sau sẽ là gọi ajax (chạy ngầm bên dưới trình duyệt), việc tất cả các request sau đều load bằng ajax, user sẽ không bị <em>reload</em> khi thực thi một thao tác nào đó. Ứng dụng SPA nối tiếng nhất, đình đám nhất mà ai cũng xài tới là GMAIL, ngoài ra còn có Google Maps, Facebook, Github. SPA là để phục vụ user có trãi nghiệm <em>tự nhiên</em> nhất với web, không gián đoạn, không reload trang, cảm giác như không hề có sự chờ đợi nào (vì sự thật là có chờ mà user méo biết).</p>\n<p>Làm được chuyện đó là nhờ những Javascript frameworks như AngularJS, Ember, Meteor, Knockout, React,... Nhân tiện React vừa tròn sinh nhật 4 tuổi, nên ở thời điểm hiện tại nếu dev nào ở Việt Nam nào vỗ ngực xưng tên 4 năm kinh nghiệm React thì xin bái phục.</p>\n<h3>Ưu điểm</h3>\n<ol>\n<li>Trãi nghiệm người dùng tốt, vì nó sinh ra là để phục vụ user khó chịu</li>\n<li>Ở thời điểm hiện tại, quy trình phát triễn dã khá rõ ràng, nhiều thư viện hổ trợ hơn so với trước đây.</li>\n<li>Sử dụng cùng một backend để chạy, vì SPA cũng tương tự như mobile app nó sẽ chỉ lấy dữ liệu từ RESTFUL hoặc GRAPHQL</li>\n<li>Chạy offline, một cánh cửa mới của SPA sau khi các trình duyệt bắt đầu hổ trợ mạnh mẽ Service Worker</li>\n</ol>\n<h3>Nhược</h3>\n<ul>\n<li>Bảo mật kém hơn, hiện tại đang có nhiều giải pháp cho vấn đề này.</li>\n<li>Sử dụng phụ thuộc vào javascript rất nhiều, nếu sử dụng trong thời gian dài, code viết không tốt là trình duyệt sẽ nuốt ram như uống nước</li>\n</ul>\n<h2>MPA</h2>\n<p><a href="https://www.amberbit.com/blog/2017/9/20/why-you-should-not-build-your-startup-as-spa/">https://www.amberbit.com/blog/2017/9/20/why-you-should-not-build-your-startup-as-spa/</a></p>\n<p><a href="https://blog.angular-university.io/why-a-single-page-application-what-are-the-benefits-what-is-a-spa/">https://blog.angular-university.io/why-a-single-page-application-what-are-the-benefits-what-is-a-spa/</a></p>\n<p><a href="https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58">https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58</a></p>\n<p>Neoteric</p>',id:"E:/anluu/luckyluu/posts/2018-06-02-tai-sao-chung-ta-lam-single-page-app/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2018-06-02T13:35:13.234Z",path:"/2018-06-02-tai-sao-chung-ta-lam-single-page-app",tags:["javascript","UX"],title:"Sự cần thiết của Single Page App - SPA"}}}}}});
//# sourceMappingURL=path---2018-06-08-kinh-nghiem-lam-viec-voi-du-an-lon-db4ec097e1587555c618.js.map