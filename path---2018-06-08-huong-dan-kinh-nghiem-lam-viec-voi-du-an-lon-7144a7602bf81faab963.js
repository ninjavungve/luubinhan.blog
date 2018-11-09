webpackJsonp([0xe81f2a448689],{1259:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#th%C6%B0-m%E1%BB%A5c">Thư mục</a></p>\n<ul>\n<li><a href="#api">/api</a></li>\n<li><a href="#assets">/assets</a></li>\n<li><a href="#components">components</a></li>\n<li><a href="#lang">/lang</a></li>\n<li><a href="#lib">/lib</a></li>\n<li><a href="#store">/store</a></li>\n<li><a href="#styles">/styles</a></li>\n<li><a href="#view">/view</a></li>\n</ul>\n</li>\n<li><a href="#cu%E1%BB%99c-chi%E1%BA%BFn-v%E1%BB%9Bi-css">Cuộc chiến với CSS</a></li>\n<li><a href="#m%E1%BB%99t-s%E1%BB%91-th%C6%B0-vi%E1%BB%87n-th%C6%B0%E1%BB%9Dng-s%E1%BB%AD-d%E1%BB%A5ng">Một số thư viện thường sử dụng</a></li>\n</ul>\n<!-- /TOC -->\n<p>Cách tổ chức project thì không phải là rule, mỗi người mỗi kiểu, chỉ là một vài cân nhắc để quản lý code tốt hơn.</p>\n<h2 id="thư-mục"><a href="#th%C6%B0-m%E1%BB%A5c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thư mục</h2>\n<p>Đây là thư mục project hiện tại của tác giả bài viết này</p>\n<p><img src="https://cdn-images-1.medium.com/max/600/1*vStBUv5egjAAb1XNWeVSRA.png"></p>\n<p>Giải thích của tác giả về cách tổ chức này</p>\n<h3 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>/api</h3>\n<p>Nơi chứa những functions đảm nhiệm chuyện gọi API</p>\n<h3 id="assets"><a href="#assets" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>/assets</h3>\n<p>Nơi chứa external resource</p>\n<h3 id="components"><a href="#components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>components</h3>\n<p>Tất cả component được sử dụng từ 2 lần trở lên sẽ nằm ở đây. Mỗi component là một thư mục bao gồm <code class="language-text">index.js</code> để export, <code class="language-text">styles.module.scss</code> stylesheet kèm theo của component, ở đây quan điểm của mình là nên có một file là <code class="language-text">ExampleComponent.js</code>, lý do để lúc code mình có thể trỏ ngay đến tên file theo cách đặt tên component = tên file như vậy, nếu component nào cũng <code class="language-text">index.js</code> thì mở chừng chục file <code class="language-text">index.js</code> như vậy trên VSCode sẽ chẳng thể biết đang sửa thằng nào.</p>\n<h3 id="lang"><a href="#lang" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>/lang</h3>\n<p>Thư mục này chỉ có khi ứng dụng của mình hỗ trợ đa ngôn ngữ. Tác giả đang sử dụng i18n-js cho đa ngôn ngữ, vì nó dễ xài</p>\n<p>File <code class="language-text">index.js</code> của lang</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">\'i18n-js\'</span>\n\n<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">\'./locales/en\'</span>\n<span class="token keyword">import</span> es <span class="token keyword">from</span> <span class="token string">\'./locales/es\'</span>\n<span class="token keyword">import</span> pt <span class="token keyword">from</span> <span class="token string">\'./locales/pt\'</span>\n\ni18n<span class="token punctuation">.</span>translations <span class="token operator">=</span> <span class="token punctuation">{</span>\n  en<span class="token punctuation">,</span>\n  es<span class="token punctuation">,</span>\n  pt<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\ni18n<span class="token punctuation">.</span>fallbacks <span class="token operator">=</span> <span class="token boolean">true</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> i18n<span class="token punctuation">.</span>t\n\n<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">\'./locales/keys\'</span></code></pre>\n      </div>\n<p><img src="https://cdn-images-1.medium.com/max/600/1*vStBUv5egjAAb1XNWeVSRA.png" alt="Giống hình trên thôi, đỡ phải scroll lên"></p>\n<h3 id="lib"><a href="#lib" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>/lib</h3>\n<p>Chứa những file helper, utils, validation,...</p>\n<h3 id="store"><a href="#store" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>/store</h3>\n<p>Dành cho người xài Redux, chưa sử dụng MobX nhiều, có thể sẽ khác. Bên trong này sẽ có những thư mục con</p>\n<ul>\n<li><strong>/actions</strong> chứa action creators</li>\n<li><strong>/definitions</strong> hay <strong>/actionTypes</strong></li>\n<li><strong>/reducers</strong> trong đây mỗi reducer sẽ là 1 file riêng biệt, file index.js sẽ combine tất cả export lại. Hoặc <strong>/sagas</strong> nếu dùng redux saga</li>\n</ul>\n<p>File <code class="language-text">index.js</code> của thư mục store</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux\'</span>\n\n<span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">\'redux-saga\'</span>\n<span class="token keyword">import</span> loggerMiddleware <span class="token keyword">from</span> <span class="token string">\'redux-logger\'</span>\n\n<span class="token keyword">import</span> combinedReducer <span class="token keyword">from</span> <span class="token string">\'src/store/reducers\'</span>\n<span class="token keyword">import</span> rootSaga <span class="token keyword">from</span> <span class="token string">\'src/store/sagas\'</span>\n\n<span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nsagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>rootSaga<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>\n  combinedReducer<span class="token punctuation">,</span>\n  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>\n    sagaMiddleware<span class="token punctuation">,</span>\n    loggerMiddleware<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<h3 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>/styles</h3>\n<p>Chứa common style</p>\n<h3 id="view"><a href="#view" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>/view</h3>\n<p>Trong component thì ta để mấy component để hiển thị, pure component, thư mục view này thì chứa container component.</p>\n<p>File <code class="language-text">index.js</code> của thư mục này chúng ta sẽ export toàn bộ mấy cái view để ta đưa nó vô <code class="language-text">router</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  BrowserRouter<span class="token punctuation">,</span>\n  Route<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span>\n\n<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">\'./Home\'</span>\n<span class="token keyword">import</span> Settings <span class="token keyword">from</span> <span class="token string">\'./Settings\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BrowserRouter</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/settings<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Settings<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BrowserRouter</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="cuộc-chiến-với-css"><a href="#cu%E1%BB%99c-chi%E1%BA%BFn-v%E1%BB%9Bi-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cuộc chiến với CSS</h2>\n<p>Có tới cả trăm bài viết và tranh luận xung quanh sử dụng CSS trong React. Tác giả bài viết này thích CSS module, chưa thấy được lý do tại sao dùng Styled Components.</p>\n<p>Lý do thích CSS module? Tuy không phải lúc nào cũng giải quyết được mọi vấn đề với CSS module, nên việc sử dụng kết hợp giữa CSS module và global import style là sự lựa chọn của tác giả</p>\n<p>Đây là cách config SASS trong webpack</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/(?&lt;!\\.module)\\.scss$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'style-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'css-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        importLoaders<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'postcss-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Necessary for external CSS imports to work</span>\n        <span class="token comment">// https://github.com/facebookincubator/create-react-app/issues/2677</span>\n        ident<span class="token punctuation">:</span> <span class="token string">\'postcss\'</span><span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>\n          <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-flexbugs-fixes\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            browsers<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n              <span class="token string">\'>1%\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'last 4 versions\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'Firefox ESR\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'not ie &lt; 9\'</span><span class="token punctuation">,</span> <span class="token comment">// React doesn\'t support IE8 anyway</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            flexbox<span class="token punctuation">:</span> <span class="token string">\'no-2009\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'sass-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.module\\.scss$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'style-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'css-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        importLoaders<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        modules<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        localIdentName<span class="token punctuation">:</span> <span class="token string">\'[local]__[hash:base64:5]\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'postcss-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Necessary for external CSS imports to work</span>\n        <span class="token comment">// https://github.com/facebookincubator/create-react-app/issues/2677</span>\n        ident<span class="token punctuation">:</span> <span class="token string">\'postcss\'</span><span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>\n          <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-flexbugs-fixes\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            browsers<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n              <span class="token string">\'>1%\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'last 4 versions\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'Firefox ESR\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'not ie &lt; 9\'</span><span class="token punctuation">,</span> <span class="token comment">// React doesn\'t support IE8 anyway</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            flexbox<span class="token punctuation">:</span> <span class="token string">\'no-2009\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'sass-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>Sử dụng css module trong component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> classNames <span class="token keyword">from</span> <span class="token string">\'classnames\'</span>\n\n<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./styles.module.scss\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> negative <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> surname <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n    <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">classNames</span><span class="token punctuation">(</span>\n      styles<span class="token punctuation">[</span><span class="token string">\'name-container\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      negative <span class="token operator">&amp;&amp;</span> styles<span class="token punctuation">[</span><span class="token string">\'name-negative\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">\'name-content\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Or should <span class="token constant">I</span> refer to you by <span class="token punctuation">{</span>surname<span class="token punctuation">}</span><span class="token operator">?</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Để tìm hiểu thêm về CSS Module trong React, <a href="https://blog.pusher.com/css-modules-react/">đọc bài này</a></p>\n<h2 id="một-số-thư-viện-thường-sử-dụng"><a href="#m%E1%BB%99t-s%E1%BB%91-th%C6%B0-vi%E1%BB%87n-th%C6%B0%E1%BB%9Dng-s%E1%BB%AD-d%E1%BB%A5ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Một số thư viện thường sử dụng</h2>\n<ul>\n<li>Luôn sử dụng <strong>react</strong>, <strong>react-dom</strong> mới nhất</li>\n<li><code class="language-text">classnames</code> để join <code class="language-text">className</code> theo điều kiện</li>\n<li><code class="language-text">i18n-js</code> để làm đa ngôn ngữ</li>\n<li><code class="language-text">lodash</code>, một số utility function sử lý chuổi, object này nọ</li>\n<li><code class="language-text">ramda</code> thay cho <code class="language-text">lodash</code> nếu bạn khoái pure function, và <code class="language-text">recompose</code> nếu đã thích <code class="language-text">ramda</code></li>\n<li><code class="language-text">dinero.js</code> để hiện thị và sử lý tiền</li>\n<li><code class="language-text">moment</code> để làm việc với date time</li>\n<li><code class="language-text">react-helmet</code> để thay đổi tag <code class="language-text">&lt;head&gt;</code> cho từng component</li>\n<li><code class="language-text">react-table</code> và <code class="language-text">react-virtualized</code> cho hiển thị dữ liệu kiểu table</li>\n<li><code class="language-text">react-redux</code> <code class="language-text">redux</code> <code class="language-text">redux-saga</code> và <code class="language-text">redux-logger</code> để quản lý state tập trung</li>\n<li><code class="language-text">react-router-dom</code> nếu làm web, và <code class="language-text">react-navigation</code> nếu là react native</li>\n</ul>\n<p>Cảm ơn bạn đã đọc hết bài viết</p>\n<p><a href="https://hackernoon.com/tips-on-react-for-large-scale-projects-3f9ece85983d">Link bài gốc: Tips on React for large scale projects</a>\nTác giả: Luis Felipe Zaguini</p>',timeToRead:6,excerpt:"Thư mục /api /assets components /lang /lib /store /styles /view Cuộc chiến với CSS Một số thư viện thường sử dụng Cách tổ chức project thì…",frontmatter:{title:"Kinh nghiệm tổ chức file và thư mục React project",cover:"",date:"2018-06-08",category:"react",tags:["react"],desc:"Có bao giờ cảm thấy lạc lối trong đóng code ngày càng lúc bự ra, một vài tip từ người có kinh nghiệm"},fields:{slug:"/2018-06-08-huong-dan-kinh-nghiem-lam-viec-voi-du-an-lon"}}},pathContext:{slug:"/2018-06-08-huong-dan-kinh-nghiem-lam-viec-voi-du-an-lon",prev:{frontmatter:{title:"Làm việc với CSS Modules trong React",desc:"Sau rất nhiều năm kiếm cơm với CSS, và hiện tại vẫn thế, CSS vẫn luôn là niềm hứng thú của cá nhân mình. Ngày nảy ngày nay để làm việc với Component của React, chúng ta sẽ có nhiều lựa chọn hơn khi 'CSS trong JS' đang là lựa chọn hàng đầu. Trong thời đại của component phủ sóng khắp các mặt trận, CSS Modules hứa hiện là món ngon",type:"post",category:"react",
tags:["react","javascript"],date:"2018-06-15",cover:""},fields:{slug:"/2018-06-15-huong-dan-lam-viec-voi-css-module"}},next:{frontmatter:{title:"Giới thiệu React Portal",desc:"Tìm hiểu về Portals, bản hỗ trợ chính thức của react-dom",type:"post",category:"react",tags:["javascript","react"],date:"2018-05-31",cover:""},fields:{slug:"/2018-05-31-huong-dan-gioi-thieu-react-portal"}}}}}});
//# sourceMappingURL=path---2018-06-08-huong-dan-kinh-nghiem-lam-viec-voi-du-an-lon-7144a7602bf81faab963.js.map