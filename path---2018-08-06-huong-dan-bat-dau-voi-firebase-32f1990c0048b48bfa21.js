webpackJsonp([0x635caf7519bb],{1327:function(e,a){e.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#firebase-analytics">Firebase Analytics</a></li>\n<li><a href="#realtime-database">Realtime Database</a></li>\n<li><a href="#authentication">Authentication</a></li>\n<li><a href="#crash-reporting">Crash Reporting</a></li>\n<li><a href="#cloud-messaging">Cloud Messaging</a></li>\n<li><a href="#remote-config">Remote Config</a></li>\n<li><a href="#app-indexing">App Indexing</a></li>\n<li><a href="#invites">Invites</a></li>\n<li><a href="#admob">AdMob</a></li>\n</ul>\n<!-- /TOC -->\n<p>Firebase cung cấp những tính năng chúng ta cần ở server, thêm vào đó là realtime database, storage, hosting, authentications, analytics, notifications, crash report,...</p>\n<h1 id="firebase-analytics"><a href="#firebase-analytics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Firebase Analytics</h1>\n<p>Firebase Analytics cho phép bạn analyse các thao tác của user trên app, miễn phí cho 500 sự kiện khác nhau.</p>\n<p>Với kết quả analyse này chúng ta có thể biết được người dùng cần gì, sử dụng app ra sau, chúng ta nên nâng cấp những tính năng nào</p>\n<h1 id="realtime-database"><a href="#realtime-database" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Realtime Database</h1>\n<p>Firebase cung cấp NoSQL realtime cloud database. Lưu trữ dữ liệu ở dạng JSON và cho phép đồng bộ với client</p>\n<p>Khi kết nối Realtime Database với Android, iOS, Javascript SDK, một realtime database sẽ được tạo ra và dùng chung cho tất cả user. Tất cả client sẽ nhận được update khi có sự thay đổi của dữ liệu</p>\n<h1 id="authentication"><a href="#authentication" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Authentication</h1>\n<p>Sử dụng Firebase Authentication user sẽ xác thực tài khoản bằng nhiều cách, email, Facebook, Twitter, Google hay Github.</p>\n<p>Firebase Authentication  cho phép tạo một user mới lưu xác thực của user xuống Firebase Database, không còn cực khổ đi config ở phía server</p>\n<p>Thậm chí chúng ta còn có thể gởi confirm email sau khi đăng ký và forget password.</p>\n<h1 id="crash-reporting"><a href="#crash-reporting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Crash Reporting</h1>\n<p>Một tính năng hữu ích cho mội developer, với Firebase Crash Reporting chúng ta sẽ có tất tần tật log từ thông tin OS đến chi tiết lỗi nếu xảy ra</p>\n<h1 id="cloud-messaging"><a href="#cloud-messaging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cloud Messaging</h1>\n<p>Với Firebase Cloud Messaging(FCM) chúng ta có thể tương tác với user theo một khoảng thời gian chỉ định, notify user những thay đổi đã xảy ra.</p>\n<p>Sử dụng FCM để chạy quảng cáo, khuyến mãi, miễn là nó dưới 4KB</p>\n<h1 id="remote-config"><a href="#remote-config" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Remote Config</h1>\n<p>Remote config theo các developer là tính năng xịn nhất của Firebase, cho phép thực hiện những thay đổi mà không cần chạy lại build. User sẽ có được những thay đổi đổi mới nhất mà không cần update lại app (thiệt ko ta?)</p>\n<h1 id="app-indexing"><a href="#app-indexing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>App Indexing</h1>\n<p>Nếu google tìm thấy bất kỳ từ khóa tìm kiếm nào khớp với app của chúng ta và nếu app được cài rồi, user sẽ ngay lập tức thấy kết quả có app của chúng ta</p>\n<h1 id="invites"><a href="#invites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Invites</h1>\n<p>Nếu app có nội dung tốt, được nhiều người thích thú, user có thể share nó với người khác sử dụng Firebase Invites</p>\n<h1 id="admob"><a href="#admob" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AdMob</h1>\n<p>Sau tất cả cố gắng để build app, chúng ta cần đến AdMob để kiếm chút đỉnh từ quảng cáo.</p>\n<p><a href="http://www.androidgig.com/getting-started-with-firebase-android/">Link bài gốc</a></p>',timeToRead:2,excerpt:"Firebase Analytics Realtime Database Authentication Crash Reporting Cloud Messaging Remote Config App Indexing Invites AdMob Firebase cung…",frontmatter:{title:"Những tính năng cở bản của Firebase",cover:"https://i2.wp.com/www.androidgig.com/wp-content/uploads/2017/01/firebase.png?w=888",date:"2018-08-06",category:null,tags:["javascript"],desc:"Năm 2016 google giới thiệu Firebase. Khi bắt đầu phát triển ứng dụng điện thoại, bạn sẽ cần đến server và một developer để làm việc với server"},fields:{slug:"/2018-08-06-huong-dan-bat-dau-voi-firebase"}}},pathContext:{slug:"/2018-08-06-huong-dan-bat-dau-voi-firebase",prev:{frontmatter:{title:"Sử dụng Firebase Realtime với React Native",desc:"Những tính năng của Firebase có thể đáp ứng nhu cầu của ứng dụng nhỏ, đơn giản, không cần đến server.",type:"post",category:null,tags:["react-native"]},fields:{slug:"/2018-08-07-huong-dan-su-dung-firebase-realtime-voi-react-native"}},next:{frontmatter:{title:"Hướng dẫn cơ bản để làm việc với Javascript regular expression",desc:"Những khái niệm quan trọng nhất kèm ví dụ dễ hiểu nhất để bạn không còn sợ mỗi khi đụng vô regular expression",type:"post",category:null,tags:["javascript"]},fields:{slug:"/2018-08-05-huong-dan-lam-viec-voi-javascript-regular-expressions"}}}}}});
//# sourceMappingURL=path---2018-08-06-huong-dan-bat-dau-voi-firebase-32f1990c0048b48bfa21.js.map