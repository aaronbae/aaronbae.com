_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var s=p[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?i=!1:(f.add(l),r[s]=f)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}h.rewind=function(){};var y=h;e.default=y},"8xaw":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"q",(function(){return l})),n.d(e,"p",(function(){return f})),n.d(e,"o",(function(){return p})),n.d(e,"n",(function(){return d})),n.d(e,"l",(function(){return y})),n.d(e,"k",(function(){return b})),n.d(e,"j",(function(){return m})),n.d(e,"h",(function(){return g})),n.d(e,"m",(function(){return v})),n.d(e,"i",(function(){return w}));var r="RECEIVE_POSTS",o="UPDATE_POST",i="ADD_NEW_POST",a="ADD_NEW_PARAGRAPH",c="REMOVE_PARAGRAPH",u="CHANGE_EDIT_MODE";function s(t){return{type:u,edit_mode:t}}function l(t,e){return t.title=e,{type:o,new_post:t}}function f(t,e){return t.tags=e,{type:o,new_post:t}}function p(t,e){return t.public=e,{type:o,new_post:t}}function d(t,e){return t.content=e,{type:o,new_post:t}}function h(t){t.hasOwnProperty("posts")||(t={posts:t,current_page:1,total_pages:1});var e={};for(var n in t.posts){var o=t.posts[n];e[o._id]=o}return{type:r,posts:e,current_page:t.current_page,total_pages:t.total_pages,receivedAt:Date.now()}}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){var n="https://52.12.89.206/api/posts/public";t>0&&(n+="?skip="+t.toString()),fetch(n).then((function(t){return t.json()})).then((function(t){e(h(t))}))}}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){var n="https://52.12.89.206/api/posts/";t>0&&(n=n.slice(0,-1)+"?skip="+t.toString()),fetch(n).then((function(t){return t.json()})).then((function(t){return e(h(t))}))}}function m(t){return function(e){fetch("https://52.12.89.206/api/posts/"+t).then((function(t){return t.json()})).then((function(t){return e(h(t))}))}}function g(){return function(t){fetch("https://52.12.89.206/api/posts/add/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(t){return t.json()})).then((function(e){var n;t((n=e.post,{type:i,new_post:n})),t(s(!0))}))}}function v(t){var e="https://52.12.89.206/api/posts/update/"+t._id.toString();return function(n){fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return n(s(!1))}))}}function w(t){var e="https://52.12.89.206/api/posts/delete/"+t.toString();return function(t){fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(){return t(s(!1))}))}}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},C9mO:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"k",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"l",(function(){return h})),n.d(e,"b",(function(){return y}));var r=n("KQm4");function o(t,e){return function(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}(t/1073741824,e)}function i(t){return t.split("_").map((function(t){return(e=t).charAt(0).toUpperCase()+e.slice(1);var e})).join(" ")}function a(t){return t=t.replace(/https:\/\/aaronbaebucket.s3.([^/]+)\//gi,"https://aaronbae.com/api/files/"),"<img src='".concat(t,"' class='aws-image' alt='Loaded from AWS'>")}function c(t){return"<br>"===t.content||""===t.content?"<div></div>":(t.content=t.content.replace(/https:\/\/aaronbae.com\/api\/files\//gi,"".concat("https://52.12.89.206/api/files/")),t.content)}function u(t){var e=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;return t.split(",").map((function(t){return t.trim().replace(e,"")}))}function s(t){return Object.values(t).sort((function(t,e){return t.createtime>=e.createtime?-1:1}))}function l(t,e){return 5*(Math.min(e,Math.max(1,t))-1)}function f(t,e){var n=Math.max(1,Math.min(t-2,e-4));return Object(r.a)(Array(5).keys()).map((function(t){return t+n}))}function p(t){var e=t.title.replace(/[^A-Za-z0-9\s]/g,"").toLowerCase();return e=e.split(" ").join("-"),"/blog/".concat(e,"-").concat(t._id)}function d(t){var e=new Date(t),n=new Date(e.getTime()-6e4*(new Date).getTimezoneOffset());return["Monday","Tueday","Wednesday","Thursday","Friday","Saturday","Sunday"][n.getDay()]+", "+["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]+" "+n.getDate()+", "+n.getFullYear()}function h(t){return t.replace(/<div>|<\/div>|<br>|<img\s+.*>/gi," ").substring(0,200)+"..."}function y(t){var e=t.content.match(/https\:\/\/aaronbae.com([-a-zA-Z0-9()@:%_\+.~#?&//=]*).(png|jpg|jpeg)/gi);return e?e[0]:""}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},KQm4:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},WGO1:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return V}));var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),c=n("/MKj"),u=n("C9mO"),s=n("8xaw"),l=(n("hOiE"),o.a.createElement);function f(t){var e=t.post_id,n=Object(c.b)(),r=Object(c.c)((function(t){return t.BlogReducer.posts[e]})),o=Object(c.c)((function(t){return t.BlogReducer.edit_mode}));return l("div",null,l("div",{className:"post-header"},l("div",null,Object(u.c)(r.createtime)),l("div",{className:"post-tags"},l("span",null,"Tags : "),l("div",{className:"post-tag-editor",contentEditable:o,"data-placeholder":"example-tag",suppressContentEditableWarning:!0,onKeyUp:function(t){n(Object(s.p)(r,Object(u.j)(t.target.innerText)))}},r.tags.join(", ")))),l("div",{className:"post-title",contentEditable:o,suppressContentEditableWarning:!0,"data-placeholder":"hello",onKeyUp:function(t){n(Object(s.q)(r,t.target.innerText))}},r.title))}n("Gs8D");var p=o.a.createElement;function d(t){var e=t.checked,n=t.click_behavior,o=t.width,i=t.className,a=Object(r.useState)(e),c=a[0],u=a[1],s={width:parseInt(o.slice(0,-2))*.8.toString()+"px",height:(o/1.7).toString()+"px"};return p("div",{className:"toggle-container "+i},p("label",{className:"toggle-switch",style:s},p("input",{type:"checkbox",checked:c,onChange:function(t){u(!c),n(t)}}),p("span",{className:"toggle-slider"})))}n("my3i");var h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return h(e,t),e}(Error);function b(t,e){if(!t)throw new y(e)}function m(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],n=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(n))}));return e.length>0?"?"+e.join("&"):""}var g=n("TSYQ"),v=n.n(g),w=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),O=function(){return(O=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},_=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function c(t){try{u(r.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))},j=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},k=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},S=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},C=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},M=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};var A=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=void 0===a?"windowCenter":a,u=n.windowWidth,s=void 0===u?550:u;!function(t,e,n){var r=e.height,o=e.width,i=k(e,["height","width"]),a=O({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(t,"",Object.keys(a).map((function(t){return t+"="+a[t]})).join(", "));if(n)var u=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(u),n(c))}catch(t){console.error(t)}}),1e3)}(t,O({height:i,width:s},"windowCenter"===c?C(s,i):M(s,i)),r)},e.handleClick=function(t){return _(e,void 0,void 0,(function(){var e,n,r,o,i,a,c,u,s,l;return j(this,(function(f){switch(f.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,c=e.openShareDialogOnClick,u=e.opts,s=o(a,u),r?[2]:(t.preventDefault(),n?(l=n(),S(l)?[4,l]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(s),i&&i(t,s),[2]}}))}))},e}return w(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,i=t.disabledStyle,a=t.forwardedRef,c=(t.networkLink,t.networkName),u=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),s=t.style,l=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,k(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=v()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=O(O(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&i);return o.a.createElement("button",O({},l,{"aria-label":l["aria-label"]||c,className:f,onClick:this.handleClick,ref:a,style:p}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(r.Component),E=function(){return(E=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var x=function(t,e,n,i){function a(r,a){var c=n(r),u=E({},r);return Object.keys(c).forEach((function(t){delete u[t]})),o.a.createElement(A,E({},i,u,{forwardedRef:a,networkName:t,networkLink:e,opts:n(r)}))}return a.displayName="ShareButton-"+t,Object(r.forwardRef)(a)};var P=x("facebook",(function(t,e){var n=e.quote,r=e.hashtag;return b(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+m({u:t,quote:n,hashtag:r})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),N=function(){return(N=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},T=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function I(t){var e=function(e){var n=e.bgStyle,r=e.borderRadius,i=e.iconFillColor,a=e.round,c=e.size,u=T(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",N({viewBox:"0 0 64 64",width:c,height:c},u),a?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:n}):o.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:t.color,style:n}),o.a.createElement("path",{d:t.path,fill:i}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var R=I({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var D=x("linkedin",(function(t,e){var n=e.title,r=e.summary,o=e.source;return b(t,"linkedin.url"),"https://linkedin.com/shareArticle"+m({url:t,mini:"true",title:n,summary:r,source:o})}),(function(t){return{title:t.title,summary:t.summary,source:t.source}}),{windowWidth:750,windowHeight:600}),H=I({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var W=x("twitter",(function(t,e){var n=e.title,r=e.via,o=e.hashtags,i=void 0===o?[]:o,a=e.related,c=void 0===a?[]:a;return b(t,"twitter.url"),b(Array.isArray(i),"twitter.hashtags is not an array"),b(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+m({url:t,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400}),B=I({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"}),L=o.a.createElement;function z(t){var e=t.post_id,n=Object(c.b)(),r=Object(c.c)((function(t){return t.BlogReducer.edit_mode})),o=Object(c.c)((function(t){return t.BlogReducer.posts[e]})),i="".concat("https://aaronbae.com").concat(Object(u.h)(o)),a=Object(u.l)(o.content),l=Object(c.c)((function(t){return t.AdminReducer.logged_in}));return L("div",{className:"post-controls"},L(P,{url:i,quote:o.title+" from aaronbae.com",className:"media-button"},L(R,{size:25,round:!0,bgStyle:{fill:"#696867"}})),L(D,{url:i,title:o.title+" from aaronbae.com",summary:a,source:"aaronbae.com",className:"media-button"},L(H,{size:25,round:!0,bgStyle:{fill:"#696867"}})),L(W,{url:i,title:o.title,className:"media-button"},L(B,{size:25,round:!0,bgStyle:{fill:"#696867"}})),!r&&l&&L("button",{className:"edit-button post-control-right",onClick:function(t){n(Object(s.g)(!0))}},"Edit Post"),r&&l&&L("span",{className:"post-control-right"},L("span",null,"Public :"),L("span",null,L(d,{checked:o.public,width:"50px",click_behavior:function(t){n(Object(s.o)(o,!o.public))}}))))}n("JxLA");var q=o.a.createElement;function J(t){var e=t.post_id,n=Object(c.b)(),o=Object(c.c)((function(t){return t.BlogReducer.posts[e]})),i=Object(c.c)((function(t){return t.BlogReducer.edit_mode})),a=Object(r.useRef)(null),l=Object(r.useRef)(null),f=function(){var t=window.getSelection();return t.rangeCount?t.getRangeAt(0).commonAncestorContainer:null},p=function(){l.current.classList.remove("show")},d=function(){var t=f();i&&t&&1===t.nodeType&&t.childElementCount<=1?(a.current.style.top=t.offsetTop+"px",a.current.style.left=t.offsetLeft-130+"px",l.current.classList.add("show")):p()};return q("div",{className:"post-content"},q("div",{id:"post-tooltip-wrapper",ref:a},q("input",{type:"file",name:"file",id:"post-image-input",onChange:function(t){var e=t.target.files[0],r=function(){for(var t=document.getElementById("post-content-editor").children,e=0;e<t.length;e++)if("<insert_imag_here></insert_imag_here>"===t[e].innerHTML)return t[e];return null}(),i=document.getElementById("post-content-editor");if(r&&e&&/^.*(png|jpg|jpeg)$/i.test(e.type)){var a=new FormData;a.append("file",e),fetch("https://52.12.89.206/api/files/upload",{method:"POST",body:a}).then((function(t){return t.json()})).then((function(t){r.innerHTML=Object(u.a)(t.url),n(Object(s.n)(o,i.innerHTML))}))}}}),q("label",{ref:l,htmlFor:"post-image-input",onMouseDown:function(){var t=f();t&&(t.innerHTML="<insert_imag_here></insert_imag_here>"),document.getElementById("post-image-input").click()},className:"post-tooltip"},"Add Image")),q("div",{id:"post-content-editor",contentEditable:i,suppressContentEditableWarning:!0,"data-placeholder":"What's on your mind?",onKeyDown:function(t){t.target.innerText.length<=1&&"Backspace"===t.key&&(t.target.innerHTML="<div></div>",t.preventDefault())},onKeyUp:function(t){d(),n(Object(s.n)(o,t.target.innerHTML))},onClick:d,onBlur:p,dangerouslySetInnerHTML:{__html:Object(u.d)(o)}}))}var F=n("nOHt"),K=(n("3nrG"),o.a.createElement);function U(t){var e=t.post_id,n=Object(c.b)(),r=Object(F.useRouter)(),o=Object(c.c)((function(t){return t.BlogReducer.posts[e]}));return K("div",{className:"post-edit-controls"},K("div",{className:"card-section-break"}),K("button",{className:"post-edit-save",type:"button",onClick:function(t){n(Object(s.m)(o))}},"Save"),K("button",{className:"post-edit-delete",type:"button",onClick:function(t){n(Object(s.i)(e)),r.push("/blog")}},"Delete"),K("button",{className:"post-edit-cancel",type:"button",onClick:function(t){n(Object(s.g)(!1)),n(Object(s.j)(e))}},"Cancel"))}n("C2iO");var G=o.a.createElement;var V=!0;e.default=function(t){var e=t.post_id,n=Object(c.c)((function(t){return t.BlogReducer.posts[e]})),r=Object(c.c)((function(t){return t.BlogReducer.edit_mode})),o=Object(u.l)(n.content),i="https://aaronbae.com"+Object(u.h)(n),s=Object(u.b)(n);return G("div",{className:"post-id"},G(a.a,null,G("title",null,n.title),G("meta",{key:"title",name:"title",content:n.title}),G("meta",{key:"description",name:"description",content:o}),G("meta",{key:"og:url",property:"og:url",content:i}),G("meta",{key:"og:type",property:"og:type",content:"article"}),G("meta",{key:"og:title",property:"og:title",content:n.title}),G("meta",{key:"og:description",property:"og:description",content:o}),""!==s&&G("meta",{key:"og:image",property:"og:image",content:s})),n&&G("div",{className:"card-wrapper"},G(f,{post_id:n._id}),G(z,{post_id:n._id}),G(J,{post_id:n._id}),r&&G(U,{post_id:n._id})))}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=n("PJYZ"),c=n("7W2i"),u=n("a1gu"),s=n("Nsbk");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=!1,d=function(t){c(n,t);var e=l(n);function n(t){var i;return o(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,p&&i._hasHeadManager&&(i.props.headManager.mountedInstances.add(a(i)),i.emitChange()),i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=d},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},zJrC:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return n("WGO1")}])}},[["zJrC",0,1,3,4,2]]]);