webpackJsonp([0x9c478643f5b0],{1317:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Đây là cái chúng ta sẽ tạo</p>\n<p><img src="https://blog.bam.tech/hs-fs/hubfs/slider.gif?t=1537455804760&#x26;width=1122&#x26;name=slider.gif"></p>\n<p>Phân tích một chút, chúng ta có thể chọn 1 trong 2 cách</p>\n<ul>\n<li>Xử lý gesture bằng React Native Gesture Responder System</li>\n<li>Xử lý gesture mằng một thư viện native khác, cho phép chúng ta can thiệp nhiều dạng gesture phức tạp hơn như xoay, chụm ngón tay (pinch), nhấn và dữ lâu.</li>\n</ul>\n<p>Với các marker như hình trên, chúng ta chỉ cần dùng React-Native Gesture Responder là đủ.</p>\n<p>Nếu muốn dùng thư viện, bạn có thể tìm hiểu <a href="https://kmagiera.github.io/react-native-gesture-handler/">React Native Gesture Handler</a></p>\n<h1 id="dựng-static-ui"><a href="#d%E1%BB%B1ng-static-ui" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dựng static UI</h1>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n\ntype StateType <span class="token operator">=</span> <span class="token punctuation">{</span>\n  barHeight<span class="token punctuation">:</span> number <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  deltaValue<span class="token punctuation">:</span> number<span class="token punctuation">,</span>\n  value<span class="token punctuation">:</span> number\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> initialValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">CIRCLE_DIAMETER</span> <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Slider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> StateType<span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageContainer</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Value</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Value</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Container</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BarContainer</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">onLayout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onBarLayout<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Circile</span> <span class="token attr-name">bottomOffset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BarContainer</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Container</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PageContainer</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> PageContainer <span class="token operator">=</span> styled<span class="token punctuation">.</span>View<span class="token template-string"><span class="token string">`\n  background-color: black;\n  flex-grow: 1;\n  align-self: stretch;\n  align-items: center;\n  padding-vertical: 20;\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>View<span class="token template-string"><span class="token string">`\n  flex-grow: 1;\n  align-self: stretch;\n  justify-content: center;\n  flex-direction: row;\n`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Value <span class="token operator">=</span> styled<span class="token punctuation">.</span>Text<span class="token template-string"><span class="token string">`\n  color: white;\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> BarContainer <span class="token operator">=</span> styled<span class="token punctuation">.</span>View<span class="token template-string"><span class="token string">`\n  width: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">CIRCLE_DIAMETER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  align-items: center;\n  padding-vertical: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">CIRCLE_DIAMETER</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  margin-horizontal: 20;\n`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Bar <span class="token operator">=</span> styled<span class="token punctuation">.</span>View<span class="token template-string"><span class="token string">`\n  width: 2;\n  background-color: white;\n  flex-grow: 1;\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Circle <span class="token operator">=</span> styled<span class="token punctuation">.</span>View<span class="token template-string"><span class="token string">`\n  border-radius: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">CIRCLE_DIAMETER</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  width: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">CIRCLE_DIAMETER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  height: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">CIRCLE_DIAMETER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  background-color: white;\n  position: absolute;\n  bottom: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props <span class="token operator">=></span> props<span class="token punctuation">.</span>bottomOffset<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Kết quả</p>\n<p><img src="https://blog.bam.tech/hs-fs/hubfs/image2.png?t=1537535876886&#x26;width=1098&#x26;name=image2.png"></p>\n<p>Chúng ta muốn lấy được giá trị và đặt cái nút tròn đúng vị trí theo giá trị này. Hàm <code class="language-text">getBottomOffsetFromValue</code> sẽ đảm nhiệm chuyển đổi giá trị offset bottom sang giá trị tương ứng.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">//...</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Slider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> StateType<span class="token operator">></span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    barHeight<span class="token punctuation">:</span> <span class="token keyword">null</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onBarLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">:</span> LayoutChangeEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>height<span class="token punctuation">:</span> barHeight<span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>layout<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> barHeight <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">getBottomOffsetValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span>\n    value<span class="token punctuation">:</span> number<span class="token punctuation">,</span>\n    rangeMin<span class="token punctuation">:</span> number<span class="token punctuation">,</span>\n    rangeMax<span class="token punctuation">:</span> number<span class="token punctuation">,</span>\n    barHeight<span class="token punctuation">:</span> number <span class="token operator">|</span> <span class="token keyword">null</span>\n  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>barHeight <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> valueOffset <span class="token operator">=</span> value <span class="token operator">-</span> rangeMin<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> totalRange <span class="token operator">=</span> rangeMax <span class="token operator">-</span> rangeMin<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> percentage <span class="token operator">=</span> valueOffset <span class="token operator">/</span>  totalRange<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> barHeight <span class="token operator">*</span>  percentage<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>barHeight<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> bottomOffset <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBottomOffsetFromValue</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">,</span> barHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token comment">// ...</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">onLayout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onBarLayout<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Circle</span> <span class="token attr-name">bottomOffset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>bottomOffset<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token comment">// ...</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//...</span></code></pre>\n      </div>\n<p>Để cái marker có thể di chuyển được, chúng ta dùng <code class="language-text">PanResponder</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  LayoutChangeEvent<span class="token punctuation">,</span>\n  PanResponder<span class="token punctuation">,</span>\n  PanResponderGestureState\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ....</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Slider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> StateType<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    barHeight<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    defaultValue<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> initialValue\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ....</span>\n  panResponder <span class="token operator">=</span> PanResponder<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    onMoveShouldSetPanResponderCapture<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    onPanResponderMove<span class="token punctuation">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> gestureState<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onMove</span><span class="token punctuation">(</span>gestureState<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    onPanResponderRelease<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onEndMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">onMove</span><span class="token punctuation">(</span>gestureState<span class="token punctuation">:</span> PanResponderGestureState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>barHeight<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> newDeltaValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getValueFromBottomOffset</span><span class="token punctuation">(</span>\n      <span class="token operator">-</span>gestureState<span class="token punctuation">.</span>dy<span class="token punctuation">,</span>\n      barHeight<span class="token punctuation">,</span>\n      min<span class="token punctuation">,</span>\n      max\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      deltaValue<span class="token punctuation">:</span> newDeltaValue\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">onEndMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>value<span class="token punctuation">,</span> deltaValue<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">:</span> value <span class="token operator">+</span> deltaValue<span class="token punctuation">,</span> deltaValue<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">capValueWithinRange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> number<span class="token punctuation">,</span> range<span class="token punctuation">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> range<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> range<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">></span> range<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> range<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>value<span class="token punctuation">,</span> deltaValue<span class="token punctuation">,</span> barHeight<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> cappedValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">capValueWithinRange</span><span class="token punctuation">(</span>value <span class="token operator">+</span> deltaValue<span class="token punctuation">,</span> <span class="token punctuation">[</span>min<span class="token punctuation">,</span> max<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> bottomOffset <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBottomOffsetFromValue</span><span class="token punctuation">(</span>\n      cappedValue<span class="token punctuation">,</span>\n      min<span class="token punctuation">,</span>\n      max<span class="token punctuation">,</span>\n      barHeight\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token comment">//...</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Circle</span>\n        <span class="token attr-name">bottomOffset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>bottomOffset<span class="token punctuation">}</span></span>\n        <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">panResponder</span><span class="token punctuation">.</span><span class="token attr-value">panHandlers</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token comment">//...</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hàm <code class="language-text">capValueWithinRange</code> được dùng để lấy giá trị của cái nút tròn so với độ cao của slider</p>\n<p>Khi di chuyển marker, callback truyền cho <code class="language-text">onPanResponderMove</code> sẽ được gọi, nó nhận vào 2 giá trị</p>\n<ul>\n<li>native event: chứa những thuộc tính như vị trí user đã touch,...</li>\n<li>gestureState: đây là cái chúng ta đang dùng để truyền cho hàm <code class="language-text">onMove</code></li>\n</ul>\n<p>Tất cả giá trị của gestureState</p>\n<p><img src="https://blog.bam.tech/hs-fs/hubfs/image1.png?t=1537535876886&#x26;width=1640&#x26;name=image1.png"></p>\n<p>Khi user buông tay ra, dừng sự kiện <strong>kéo rê</strong>, thì callback truyền cho hàm <code class="language-text">onPanResponderRelease</code> sẽ được gọi, cũng nhận tương tự 2 giá trị như trên: native event và gesture state</p>\n<p>Xong, chủ yếu để làm cái này chúng ta chỉ cần nắm cách làm việc với <code class="language-text">PanResponder</code> trong react-native</p>\n<p><a href="https://gist.github.com/jfaverie/d98d8f60a510e3b68abeffb43a77d47a">Toàn bộ source code</a></p>\n<p><a href="https://blog.bam.tech/developper-news/create-vertical-slider-with-react-native-panresponder">Link bài gốc</a></p>',timeToRead:4,excerpt:"Đây là cái chúng ta sẽ tạo Phân tích một chút, chúng ta có thể chọn 1 trong 2 cách Xử lý gesture bằng React Native Gesture Responder System…",frontmatter:{title:"Tạo slider component trong React Native bằng PanResponder",cover:"",date:"2018-09-21",category:null,tags:["javascript","react-native"],desc:"Tuts này sẽ hướng dẫn các bạn tạo một slider component đơn giản trong React Native bằng PanResponder"},fields:{slug:"/2018-09-21-huong-dan-react-native-dung-mot-slider-dung-voi-react-native"}}},pathContext:{slug:"/2018-09-21-huong-dan-react-native-dung-mot-slider-dung-voi-react-native",prev:{frontmatter:{title:"Chỉ dẫn để thiết kế React Component",desc:"Tốt hơn, tốt nữa, tốt mãi, luôn là điều mình muốn, ngoài chuyện viết cho nó chạy đúng, viết thế nào tốt nhất nên là mục tiêu khi làm việc",type:"post",category:null,tags:["javascript","react"],date:"2018-09-25",cover:""},fields:{slug:"/2018-09-25-huong-dan-thiet-ke-react-component-tot"}},next:{frontmatter:{title:"Giới thiệu React Profiler",desc:"Từ version React 16.5 bổ sung thêm một plugin DevTool profiler. Plugin này được dùng để thu thập các thông tin về thời gian render một component, xác định nguyên nhân làm trì trệ performance.",type:"post",category:null,tags:["react","performance"],date:"2018-09-19",cover:""},fields:{slug:"/2018-09-19-huong-dan-react-profiler-dev-tool"}}}}}});
//# sourceMappingURL=path---2018-09-21-huong-dan-react-native-dung-mot-slider-dung-voi-react-native-566317d1c07d52aa9742.js.map