webpackJsonp([5],{"./src/components/Badge/Badge.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("./node_modules/react/react.js"),c=r(i),u=n("./node_modules/prop-types/index.js"),d=r(u);n("./src/components/Badge/Badge.scss");var f=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onClick=function(e){null!==n.props.onItemClick&&void 0!==n.props.onItemClick&&n.props.onItemClick(e,n.props.id)},n}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props.type;return c.default.createElement("div",{className:"badge badge-"+e.trim().toLowerCase().replace(" ","-"),onClick:this._onClick},this.props.children)}}]),t}(i.Component);f.propTypes={onItemClick:d.default.func,type:d.default.string,id:d.default.string},t.default=f,e.exports=t.default},"./src/components/Badge/Badge.scss":function(e,t){},"./src/components/Badge/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Badge/Badge.jsx"),a=r(o);t.default=a.default,e.exports=t.default},"./src/components/CardPortfolio/CardPortfolio.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("./node_modules/react/react.js"),c=r(i),u=n("./node_modules/prop-types/index.js"),d=r(u),f=n("./src/components/PostMeta/index.js"),p=r(f);n("./src/components/CardPortfolio/CardPortfolio.scss");var m=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.desc,r=e.imgUrl,o=e.href,a=e.tags;return c.default.createElement("div",{className:"grid__item "},c.default.createElement("div",{className:"grid__link"},""!==r&&c.default.createElement("img",{className:"grid__img",src:r,alt:t+"-"+n,title:n}),c.default.createElement("div",{className:"card-portfolio-body"},""!==t&&c.default.createElement("header",{className:"card-portfolio-title"},c.default.createElement("a",{href:o,target:"_blank"},t,c.default.createElement("i",{className:"ion-android-open"}))),""!==n&&c.default.createElement("div",{className:"card-portfolio-desc"},n),this.props.children),c.default.createElement("footer",{className:"card-portfolio-footer clearfix"},c.default.createElement(p.default,{tags:a}))))}}]),t}(i.Component);m.propTypes={title:d.default.string,desc:d.default.string,imgUrl:d.default.string,href:d.default.string,tags:d.default.array,className:d.default.string},m.defaultProps={title:"",desc:"",imgUrl:"",tags:[],href:""},t.default=m,e.exports=t.default},"./src/components/CardPortfolio/CardPortfolio.scss":function(e,t){},"./src/components/CardPortfolio/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/CardPortfolio/CardPortfolio.jsx"),a=r(o);t.default=a.default,e.exports=t.default},"./src/components/PageHero/PageHero.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("./node_modules/react/react.js"),c=r(i),u=n("./node_modules/prop-types/index.js"),d=r(u),f=n("./node_modules/gatsby-link/index.js");r(f);n("./src/components/PageHero/PageHero.scss");var p=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.desc;return c.default.createElement("div",{className:"page-hero hero-"+t},""!==t&&c.default.createElement("h3",{className:"hero-title"},c.default.createElement("span",null,t)),this.props.children,""!==n&&c.default.createElement("div",{className:"hero-description"},n))}}]),t}(i.Component);p.propTypes={title:d.default.string,desc:d.default.string},p.defaultProps={title:"",desc:""},t.default=p,e.exports=t.default},"./src/components/PageHero/PageHero.scss":function(e,t){},"./src/components/PageHero/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/PageHero/PageHero.jsx"),a=r(o);t.default=a.default,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"presets":["C:/anluu/luckyluu/node_modules/babel-preset-es2015/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-react/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-stage-2/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-env/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-stage-0/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-react/lib/index.js"],"plugins":["C:/anluu/luckyluu/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/anluu/luckyluu/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/anluu/luckyluu/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/anluu/luckyluu/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/portfolio.jsx':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),u=r(c),d=n("./node_modules/prop-types/index.js"),f=(r(d),n("./node_modules/react-helmet/lib/Helmet.js")),p=r(f),m=n("./src/components/PageHero/index.js"),b=(r(m),n("./src/components/CardPortfolio/index.js")),g=r(b),h=n("./src/data/index.js"),y=n("./src/pages/images/logo.png"),_=r(y),v=n("./src/components/Navigation/index.js"),j=(r(v),n("./src/components/Header/index.js")),w=r(j),x=n("./src/components/Badge/index.js"),P=r(x);n("./node_modules/animate.css/animate.css");var E=[{id:1,name:"Play Sai Gon",imgUrl:"http://placehold.it/550x320",desc:"",href:"#",tags:["html","wordpress","web"]},{id:2,name:"Glow Bar",imgUrl:"http://placehold.it/550x320",desc:"",href:"#",tags:["html","wordpress","web"]},{id:3,name:"Ensure",imgUrl:"http://placehold.it/550x320",desc:"",href:"#",tags:["html","wordpress","web","2016"]},{id:4,name:"7 Up Vintage",imgUrl:"http://placehold.it/550x320",desc:"",href:"#",tags:["html","wordpress","web","2015"]},{id:5,name:"Sting Tet 2017",imgUrl:"http://placehold.it/550x320",desc:"",href:"#",tags:["html","wordpress","web","2014"]},{id:6,name:"Pepsi",imgUrl:"http://placehold.it/550x320",desc:"",href:"#",tags:["html","wordpress","web","2013"]}],C=[{src:"https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",async:!0},{src:"/imagesloaded.pkgd.min.js",async:!0},{src:"/masonry.pkgd.min.js",async:!0},{src:"/main.js",async:!0}],k=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={allFilters:[{slug:"wordpress",name:"Wordpress",selected:!1},{slug:"html",name:"HTML-CSS-Javascript",selected:!1},{slug:"website",name:"Website",selected:!1},{slug:"mobile",name:"Mobile App",selected:!1},{slug:"2013",name:"2013",selected:!1}],allPortfolio:E},n._onFilterClick=n._onFilterClick.bind(n),n}return s(t,e),i(t,[{key:"componentDidMount",value:function(){for(var e=0,t=C.length;e<t;e++){var n=document.createElement("script");n.src=C[e].src,n.async=C[e].async,document.head.insertBefore(n,document.head.firstChild)}}},{key:"componentDidUpdate",value:function(e,t){}},{key:"_onFilterClick",value:function(e,t){var n=E.filter(function(e){return e.tags.indexOf(t)!==-1});this.setState({allPortfolio:n})}},{key:"render",value:function(){var e=this,t=h.PRIMARY_NAVIGATION.map(function(e){return"/portfolio"===e.href&&(e.isActive=!0),e}),n=this.state,r=n.allFilters,a=n.allPortfolio;return u.default.createElement("div",{className:"page-portfolio"},u.default.createElement("div",{className:"inner"},u.default.createElement(p.default,{title:"Portfolio | FrontEnd Developer live in Ho Chi Minh City",meta:[{name:"description",content:"luckyluu FrontEnd Developer live in Ho Chi Minh City"},{name:"keywords",content:"frontend,developer,wordpress,react,hochiminh,web-developer,javascript,html,css,responsive,design"}]}),u.default.createElement(w.default,{logo:_.default,navigationList:t}),u.default.createElement("div",{className:"master"},u.default.createElement("div",{className:"master-inner"},u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"sweat-logan"},"My blood-sweat-tears and cheers"),u.default.createElement("div",{className:"filter-block"},r.map(function(t,n){return u.default.createElement(P.default,{key:n,id:t.slug,onItemClick:e._onFilterClick,type:"filter"},t.name)})),u.default.createElement("div",{className:"portfolio-list"},0!==a.length?u.default.createElement("div",null,u.default.createElement("div",{className:"grid"},u.default.createElement("div",{className:"grid__sizer"}),a.map(function(e){var t;return u.default.createElement(g.default,(t={key:e.id},o(t,"key",e.id),o(t,"title",e.name),o(t,"imgUrl",e.imgUrl),o(t,"href",e.href),o(t,"tags",e.tags),t))})),u.default.createElement("div",{className:"align-center"},u.default.createElement("span",{className:"btn btn-primary"},"Load More"))):u.default.createElement("div",{className:"not-found-container"},u.default.createElement("div",{className:"not-found-block"},u.default.createElement("div",null,"...maybe in the feature..."),u.default.createElement("i",{className:"ion-happy-outline"})))))))))}}]),t}(c.Component);t.default=k,e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-portfolio-jsx-ce9ec2663dede0d32b11.js.map