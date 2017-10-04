webpackJsonp([7],{"./src/components/Footer/Footer.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n("./node_modules/react/react.js"),c=a(u),i=n("./node_modules/prop-types/index.js"),d=a(i),p=n("./node_modules/gatsby-link/index.js"),f=a(p);n("./src/components/Footer/Footer.scss");var m=function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.email,n=e.phone,a=e.companyName,o=e.showSiteMap,l=e.showContactInfo,r=new Date;return c.default.createElement("div",{id:"footer"},c.default.createElement("footer",{className:"footer"},c.default.createElement("section",{className:"footer-inner"},l&&c.default.createElement("div",{className:"copyright"},"Contact : ",c.default.createElement("a",{href:"tel:"+n},n)," - Email: ",c.default.createElement("a",{href:"mailto:"+t},t)),c.default.createElement("div",{className:"credit"},"© Copyright ",r.getFullYear()," ",a,o&&c.default.createElement("span",{className:"sitemap-link"}," | ",c.default.createElement(f.default,{to:"/sitemap"},"Sitemap")),c.default.createElement("div",null,"picture credit ",c.default.createElement("a",{href:"https://unsplash.com",target:"_blank"},"unsplash.com"))))))}}]),t}(u.Component);m.propTypes={email:d.default.string,phone:d.default.string,companyName:d.default.string,showSiteMap:d.default.bool,showContactInfo:d.default.bool},m.defaultProps={email:"",phone:"",companyName:"",showSiteMap:!0,showContactInfo:!1},t.default=m,e.exports=t.default},"./src/components/Footer/Footer.scss":function(e,t){},"./src/components/Footer/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Footer/Footer.js"),l=a(o);t.default=l.default,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"presets":["C:/anluu/luckyluu/node_modules/babel-preset-es2015/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-react/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-stage-2/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-env/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-stage-0/lib/index.js","C:/anluu/luckyluu/node_modules/babel-preset-react/lib/index.js"],"plugins":["C:/anluu/luckyluu/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/anluu/luckyluu/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/anluu/luckyluu/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/anluu/luckyluu/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n("./node_modules/react/react.js"),c=a(u),i=n("./node_modules/gatsby-link/index.js"),d=a(i),p=n("./node_modules/react-helmet/lib/Helmet.js"),f=a(p);n("./src/styles/main.scss");var m=n("./src/components/Header/index.js"),b=(a(m),n("./src/components/Footer/index.js")),y=a(b),h=n("./src/components/Navigation/index.js"),_=a(h),v=n("./src/data/index.js"),j=n("./src/pages/images/logo.png"),g=a(j),N=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={collapsed:!0},n._onClickNavbar=n._onClickNavbar.bind(n),n._handleNavClick=n._handleNavClick.bind(n),n}return r(t,e),s(t,[{key:"_onClickNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"_handleNavClick",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.state.collapsed,t=this.props,n=(t.location,t.children);return c.default.createElement("div",{className:"layout-blog"},c.default.createElement(f.default,{title:"About "+v.SITE_CONFIG.companyName+" | "+v.SITE_CONFIG.tagLine,meta:[{name:"description",content:v.SITE_CONFIG.companyName+" "+v.SITE_CONFIG.tagLine},{name:"keywords",content:"frontend,developer,wordpress,react,hochiminh,web-developer"}]}),c.default.createElement("div",{className:"sidebar"},c.default.createElement("div",{className:"inner"},c.default.createElement(d.default,{to:"/",className:"go-home"},c.default.createElement("img",{src:g.default,alt:v.SITE_CONFIG.companyName})),c.default.createElement("button",{type:"button",className:"navbar-toggle "+(e?"collapsed":""),onClick:this._onClickNavbar,"aria-expanded":"false"},c.default.createElement("div",{className:"hamburger hamburger-1"},c.default.createElement("span",{className:"line"}),c.default.createElement("span",{className:"line"}),c.default.createElement("span",{className:"line"}))),c.default.createElement(_.default,{handleClick:this._handleNavClick,items:v.PRIMARY_NAVIGATION,cssClass:"primary-menu "+(e?"collapsed":"")})),c.default.createElement(y.default,{email:v.SITE_CONFIG.email,phone:v.SITE_CONFIG.phone,companyName:v.SITE_CONFIG.companyName,showSiteMap:!1})),n())}}]),t}(c.default.Component);N.propTypes={location:c.default.PropTypes.object,route:c.default.PropTypes.object},t.default=N,e.exports=t.default},"./src/styles/main.scss":function(e,t){}});
//# sourceMappingURL=layout-component---index-c26953a5aaf209347906.js.map