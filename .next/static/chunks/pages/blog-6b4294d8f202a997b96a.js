_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"8xaw":function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"f",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return c})),e.d(n,"e",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"g",(function(){return s})),e.d(n,"q",(function(){return f})),e.d(n,"p",(function(){return p})),e.d(n,"o",(function(){return l})),e.d(n,"n",(function(){return d})),e.d(n,"l",(function(){return v})),e.d(n,"k",(function(){return g})),e.d(n,"j",(function(){return m})),e.d(n,"h",(function(){return b})),e.d(n,"m",(function(){return y})),e.d(n,"i",(function(){return w}));var r="RECEIVE_POSTS",o="UPDATE_POST",a="ADD_NEW_POST",c="ADD_NEW_PARAGRAPH",u="REMOVE_PARAGRAPH",i="CHANGE_EDIT_MODE";function s(t){return{type:i,edit_mode:t}}function f(t,n){return t.title=n,{type:o,new_post:t}}function p(t,n){return t.tags=n,{type:o,new_post:t}}function l(t,n){return t.public=n,{type:o,new_post:t}}function d(t,n){return t.content=n,{type:o,new_post:t}}function h(t){t.hasOwnProperty("posts")||(t={posts:t,current_page:1,total_pages:1});var n={};for(var e in t.posts){var o=t.posts[e];n[o._id]=o}return{type:r,posts:n,current_page:t.current_page,total_pages:t.total_pages,receivedAt:Date.now()}}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(n){var e="https://52.12.89.206/api/posts/public";t>0&&(e+="?skip="+t.toString()),fetch(e).then((function(t){return t.json()})).then((function(t){n(h(t))}))}}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(n){var e="https://52.12.89.206/api/posts/";t>0&&(e=e.slice(0,-1)+"?skip="+t.toString()),fetch(e).then((function(t){return t.json()})).then((function(t){return n(h(t))}))}}function m(t){return function(n){fetch("https://52.12.89.206/api/posts/"+t).then((function(t){return t.json()})).then((function(t){return n(h(t))}))}}function b(){return function(t){fetch("https://52.12.89.206/api/posts/add/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(t){return t.json()})).then((function(n){var e;t((e=n.post,{type:a,new_post:e})),t(s(!0))}))}}function y(t){var n="https://52.12.89.206/api/posts/update/"+t._id.toString();return function(e){fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return e(s(!1))}))}}function w(t){var n="https://52.12.89.206/api/posts/delete/"+t.toString();return function(t){fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(){return t(s(!1))}))}}},C9mO:function(t,n,e){"use strict";e.d(n,"e",(function(){return o})),e.d(n,"k",(function(){return a})),e.d(n,"a",(function(){return c})),e.d(n,"d",(function(){return u})),e.d(n,"j",(function(){return i})),e.d(n,"i",(function(){return s})),e.d(n,"f",(function(){return f})),e.d(n,"g",(function(){return p})),e.d(n,"h",(function(){return l})),e.d(n,"c",(function(){return d})),e.d(n,"l",(function(){return h})),e.d(n,"b",(function(){return v}));var r=e("KQm4");function o(t,n){return function(t,n){var e=Math.pow(10,n);return Math.round(t*e)/e}(t/1073741824,n)}function a(t){return t.split("_").map((function(t){return(n=t).charAt(0).toUpperCase()+n.slice(1);var n})).join(" ")}function c(t){return t=t.replace(/https:\/\/aaronbaebucket.s3.([^/]+)\//gi,"https://aaronbae.com/api/files/"),"<img src='".concat(t,"' class='aws-image' alt='Loaded from AWS'>")}function u(t){return"<br>"===t.content||""===t.content?"<div></div>":(t.content=t.content.replace(/https:\/\/aaronbae.com\/api\/files\//gi,"".concat("https://52.12.89.206/api/files/")),t.content)}function i(t){var n=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;return t.split(",").map((function(t){return t.trim().replace(n,"")}))}function s(t){return Object.values(t).sort((function(t,n){return t.createtime>=n.createtime?-1:1}))}function f(t,n){return 5*(Math.min(n,Math.max(1,t))-1)}function p(t,n){var e=Math.max(1,Math.min(t-2,n-4));return Object(r.a)(Array(5).keys()).map((function(t){return t+e}))}function l(t){var n=t.title.replace(/[^A-Za-z0-9\s]/g,"").toLowerCase();return n=n.split(" ").join("-"),"/blog/".concat(n,"-").concat(t._id)}function d(t){var n=new Date(t),e=new Date(n.getTime()-6e4*(new Date).getTimezoneOffset());return["Monday","Tueday","Wednesday","Thursday","Friday","Saturday","Sunday"][e.getDay()]+", "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}function h(t){return t.replace(/<div>|<\/div>|<br>|<img\s+.*>/gi," ").substring(0,200)+"..."}function v(t){var n=t.content.match(/https\:\/\/aaronbae.com([-a-zA-Z0-9()@:%_\+.~#?&//=]*).(png|jpg|jpeg)/gi);return n?n[0]:""}},JUhy:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e("YZWa")}])},KQm4:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,"a",(function(){return o}))},YFqc:function(t,n,e){t.exports=e("cTJO")},YZWa:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return g}));var r=e("q1tI"),o=e.n(r),a=e("nOHt"),c=e("/MKj"),u=e("8xaw"),i=e("YFqc"),s=e.n(i),f=e("C9mO"),p=(e("KDG7"),o.a.createElement);function l(t){var n=t.post,e=Object(f.c)(n.createtime),r=Object(f.l)(n.content),o=Object(f.h)(n);return p(s.a,{href:"/blog/[id]",as:o},p("div",{className:"post-preview"},p("div",{className:"preview-date"},e),p("div",{className:"preview-title"},""!==n.title?n.title:"(No Title)"),p("div",null,r),p("div",{className:"read-more"},"Read More")))}e("UQLi");var d=o.a.createElement;function h(){var t=Object(c.c)((function(t){return t.BlogReducer.total_pages})),n=Object(c.c)((function(t){return t.BlogReducer.current_page}));return d("div",{className:"pagination"},d(s.a,{href:{pathname:"/blog",query:{skip:Object(f.f)(1,t)}}},d("div",{className:"anchor-wrapper"},d("a",{className:"page"},"FIRST"))),Object(f.g)(n,t).map((function(e,r){return d(s.a,{key:r,href:{pathname:"/blog",query:{skip:Object(f.f)(e,t)}}},d("div",{className:n===e?"anchor-wrapper current":"anchor-wrapper"},d("a",{className:"page"},e)))})),d(s.a,{href:{pathname:"/blog",query:{skip:Object(f.f)(t,t)}}},d("div",{className:"anchor-wrapper"},d("a",{className:"page"},"LAST"))))}e("/O/d");var v=o.a.createElement;function g(){var t=Object(c.b)(),n=Object(a.useRouter)(),e=Object(r.useState)(!1),o=e[0],i=e[1],s=Object(c.c)((function(t){return t.BlogReducer.posts})),p=Object(c.c)((function(t){return t.AdminReducer.logged_in})),d=n.query.skip;Object(r.useEffect)((function(){if(o){i(!1);var t=Object(f.i)(s)[0]._id;n.push("/blog/[id]","/blog/".concat(t))}}),[s]),Object(r.useEffect)((function(){t(p?Object(u.k)(d):Object(u.l)(d))}),[d]);return v("div",{id:"blog-container"},v("div",{className:"card-wrapper"},v("div",{className:"card-title blog-whats-new"},v("span",null,"What's New?"),p&&v("span",{className:"blog-compose",onClick:function(n){i(!0),t(Object(u.h)())}},"Compose")),v("div",{className:"preview-wrapper"},s&&Object(f.i)(s).map((function(t,n){return v(l,{key:n,post:t})})),s&&v(h,null))))}},cTJO:function(t,n,e){"use strict";var r=e("J4zp"),o=e("284h");n.__esModule=!0,n.default=void 0;var a,c=o(e("q1tI")),u=e("g/15"),i=e("nOHt"),s=e("elyg");var f=new Map,p=window.IntersectionObserver,l={};var d=function(t,n){var e=a||(p?a=new p((function(t){t.forEach((function(t){if(f.has(t.target)){var n=f.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(t.target),f.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0);return e?(e.observe(t),f.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}f.delete(t)}):function(){}};function h(t,n,e,r){t.prefetch(n,e,r).catch((function(t){0})),l[n+"%"+e]=!0}function v(t,n,e,r,o,a,c){var i=t.currentTarget,s=i.nodeName,f=i.target;"A"===s&&(f&&"_self"!==f||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)||function(t){var n=(0,u.getLocationOrigin)();return new URL(t,n).origin===n}(e)&&(t.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](e,r,{shallow:a}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())})))}var g=function(t){var n=!1!==t.prefetch,e=c.default.useState(),o=r(e,2),a=o[0],u=o[1],f=(0,i.useRouter)(),g=f&&f.pathname||"/",m=c.default.useMemo((function(){var n=(0,s.resolveHref)(g,t.href);return{href:n,as:t.as?(0,s.resolveHref)(g,t.as):n}}),[g,t.href,t.as]),b=m.href,y=m.as;c.default.useEffect((function(){if(n&&p&&a&&a.tagName&&!l[b+"%"+y])return d(a,(function(){h(f,b,y)}))}),[n,a,b,y,f]);var w=t.children,O=t.replace,_=t.shallow,j=t.scroll;"string"===typeof w&&(w=c.default.createElement("a",null,w));var E=c.Children.only(w),N={ref:function(t){t&&u(t),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(t):"object"===typeof E.ref&&(E.ref.current=t))},onClick:function(t){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(t),t.defaultPrevented||v(t,f,b,y,O,_,j)}};return n&&(N.onMouseEnter=function(t){E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(t),h(f,b,y,{priority:!0})}),!t.passHref&&("a"!==E.type||"href"in E.props)||(N.href=(0,s.addBasePath)(y)),c.default.cloneElement(E,N)};n.default=g}},[["JUhy",0,1,3,4,2]]]);