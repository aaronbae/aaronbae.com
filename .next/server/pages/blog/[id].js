module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WGO1");


/***/ }),

/***/ "3nrG":
/***/ (function(module, exports) {



/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5+fn":
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ "8xaw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RECEIVE_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_NEW_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_NEW_PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_EDIT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return change_edit_mode; });
/* unused harmony export add_new_post */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return update_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return update_tags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return update_public; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return update_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return fetch_public_posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fetch_posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fetch_post_by_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return create_new_post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return save_local_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return delete_post; });
const RECEIVE_POSTS = "RECEIVE_POSTS";
const UPDATE_POST = "UPDATE_POST";
const ADD_NEW_POST = "ADD_NEW_POST";
const ADD_NEW_PARAGRAPH = "ADD_NEW_PARAGRAPH";
const REMOVE_PARAGRAPH = "REMOVE_PARAGRAPH";
const CHANGE_EDIT_MODE = "CHANGE_EDIT_MODE"; // TERMINALS

function change_edit_mode(boolean_value) {
  return {
    type: CHANGE_EDIT_MODE,
    edit_mode: boolean_value
  };
}
function add_new_post(new_post) {
  return {
    type: ADD_NEW_POST,
    new_post: new_post
  };
}
function update_title(new_post, title) {
  new_post.title = title;
  return {
    type: UPDATE_POST,
    new_post: new_post
  };
}
function update_tags(new_post, tags) {
  new_post.tags = tags;
  return {
    type: UPDATE_POST,
    new_post: new_post
  };
}
function update_public(new_post, public_boolean) {
  new_post.public = public_boolean;
  return {
    type: UPDATE_POST,
    new_post: new_post
  };
}
function update_content(new_post, content) {
  new_post.content = content;
  return {
    type: UPDATE_POST,
    new_post: new_post
  };
}

function receive_posts(res) {
  // TEMPORARY
  if (!res.hasOwnProperty('posts')) {
    res = {
      posts: res,
      current_page: 1,
      total_pages: 1
    };
  }

  const posts = {};

  for (var index in res.posts) {
    let p = res.posts[index];
    posts[p._id] = p;
  }

  return {
    type: RECEIVE_POSTS,
    posts: posts,
    current_page: res.current_page,
    total_pages: res.total_pages,
    receivedAt: Date.now()
  };
} // FETCHERS


function fetch_public_posts(skip = 0) {
  return dispatch => {
    let url = "https://52.12.89.206/api/posts/" + "public";

    if (skip > 0) {
      url += "?skip=" + skip.toString();
    }

    fetch(url).then(res => res.json()).then(res => {
      dispatch(receive_posts(res));
    });
  };
}
function fetch_posts(skip = 0) {
  return dispatch => {
    let url = "https://52.12.89.206/api/posts/";

    if (skip > 0) {
      url = url.slice(0, -1) + "?skip=" + skip.toString();
    }

    fetch(url).then(res => res.json()).then(res => dispatch(receive_posts(res)));
  };
}
function fetch_post_by_id(post_id) {
  return dispatch => {
    fetch("https://52.12.89.206/api/posts/" + post_id).then(res => res.json()).then(res => dispatch(receive_posts(res)));
  };
}
function create_new_post() {
  return dispatch => {
    var url = "https://52.12.89.206/api/posts/" + "add/";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(res => res.json()).then(res => {
      dispatch(add_new_post(res.post));
      dispatch(change_edit_mode(true));
    });
  };
}
function save_local_changes(post) {
  var url = "https://52.12.89.206/api/posts/" + "update/" + post._id.toString();

  return dispatch => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => dispatch(change_edit_mode(false)));
  };
}
function delete_post(post_id) {
  var url = "https://52.12.89.206/api/posts/" + "delete/" + post_id.toString();
  return dispatch => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(() => dispatch(change_edit_mode(false)));
  };
}

/***/ }),

/***/ "C2iO":
/***/ (function(module, exports) {



/***/ }),

/***/ "C9mO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export round */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return format_to_gb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return snake_case_to_normal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create_img_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return format_post_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return raw_tags_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return posts_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return page_to_skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pagination_array; });
/* unused harmony export query_param_string_to_objects */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return post_to_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return url_to_post_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return format_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return summarize_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return find_image_from_post; });
function round(value, float_digits) {
  const rounder = Math.pow(10, float_digits);
  return Math.round(value * rounder) / rounder;
}
function format_to_gb(integer_value, floating_points) {
  return round(integer_value / 1073741824, floating_points);
}
function snake_case_to_normal(string) {
  function upper_case(shit) {
    return shit.charAt(0).toUpperCase() + shit.slice(1);
  }

  return string.split("_").map(x => upper_case(x)).join(" ");
}
function create_img_element(url) {
  url = url.replace(/https:\/\/aaronbaebucket.s3.([^/]+)\//gi, `${"https://52.12.89.206/api/files/"}`);
  return `<img src='${url}' class='aws-image' alt='Loaded from AWS'>`;
}
function format_post_content(post) {
  if (post.content === "<br>" || post.content === "") {
    return "<div></div>";
  } // Temporary stop gap


  post.content = post.content.replace(/https:\/\/aaronbae.com\/api\/files\//gi, `${"https://52.12.89.206/api/files/"}`);
  return post.content;
}
function raw_tags_to_array(raw_tags_input) {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  return raw_tags_input.split(",").map(s => s.trim().replace(punctuation, ''));
}
function posts_to_array(posts) {
  const sorted_array = Object.values(posts).sort(function (a, b) {
    if (a.createtime >= b.createtime) {
      return -1;
    }

    return 1;
  });
  return sorted_array;
}
function page_to_skip(page, total_pages) {
  return 5 * (Math.min(total_pages, Math.max(1, page)) - 1);
}
function pagination_array(current_page, total_pages) {
  const start = Math.max(1, Math.min(current_page - 2, total_pages - 4));
  return [...Array(5).keys()].map(x => x + start);
}
function query_param_string_to_objects(query_string) {
  let result = {};

  for (const p of query_string.toLowerCase().replace("?", "").split("&")) {
    let p_split = p.toString().split("=");
    result[p_split[0]] = p_split[1];
  }

  return result;
}
function post_to_url(post) {
  let modified_title = post.title.replace(/[^A-Za-z0-9\s]/g, "").toLowerCase();
  modified_title = modified_title.split(" ").join("-");
  return `/blog/${modified_title}-${post._id}`;
}
function url_to_post_id(url) {
  let splitted = url.split("-");
  return splitted[splitted.length - 1];
}
function format_date(date_string) {
  var given_date = new Date(date_string);
  var corrected_d = new Date(given_date.getTime() - new Date().getTimezoneOffset() * 60000);
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var result = days[corrected_d.getDay()] + ", " + month[corrected_d.getMonth()] + " " + corrected_d.getDate() + ", " + corrected_d.getFullYear();
  return result;
}
function summarize_content(content) {
  return content.replace(/<div>|<\/div>|<br>|<img\s+.*>/gi, " ").substring(0, 200) + "...";
}
function find_image_from_post(post) {
  const matches = post.content.match(/https\:\/\/aaronbae.com([-a-zA-Z0-9()@:%_\+.~#?&//=]*).(png|jpg|jpeg)/gi);
  return matches ? matches[0] : "";
}

/***/ }),

/***/ "Gs8D":
/***/ (function(module, exports) {



/***/ }),

/***/ "JxLA":
/***/ (function(module, exports) {



/***/ }),

/***/ "WGO1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/library/format.js
var format = __webpack_require__("C9mO");

// EXTERNAL MODULE: ./src/redux/BlogActions.js
var BlogActions = __webpack_require__("8xaw");

// EXTERNAL MODULE: ./src/styles/Blog/post-information.css
var post_information = __webpack_require__("hOiE");

// CONCATENATED MODULE: ./src/components/Blog/PostInformation.js

var __jsx = external_react_default.a.createElement;




function PostInformation({
  post_id
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const post = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.posts[post_id]);
  const edit_mode = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.edit_mode);

  const change_tags = e => {
    dispatch(Object(BlogActions["p" /* update_tags */])(post, Object(format["j" /* raw_tags_to_array */])(e.target.innerText)));
  };

  const change_title = e => {
    dispatch(Object(BlogActions["q" /* update_title */])(post, e.target.innerText));
  };

  return __jsx("div", null, __jsx("div", {
    className: "post-header"
  }, __jsx("div", null, Object(format["c" /* format_date */])(post.createtime)), __jsx("div", {
    className: "post-tags"
  }, __jsx("span", null, "Tags : "), __jsx("div", {
    className: "post-tag-editor",
    contentEditable: edit_mode,
    "data-placeholder": "example-tag",
    suppressContentEditableWarning: true,
    onKeyUp: change_tags
  }, post.tags.join(", ")))), __jsx("div", {
    className: "post-title",
    contentEditable: edit_mode,
    suppressContentEditableWarning: true,
    "data-placeholder": "hello",
    onKeyUp: change_title
  }, post.title));
}
// EXTERNAL MODULE: ./src/styles/Utility/toggle.css
var toggle = __webpack_require__("Gs8D");

// CONCATENATED MODULE: ./src/components/Utility/Toggle.js

var Toggle_jsx = external_react_default.a.createElement;


function Toggle({
  checked,
  click_behavior,
  width,
  className
}) {
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])(checked);
  const switch_style = {
    width: parseInt(width.slice(0, -2)) * 0.8.toString() + "px",
    height: (width / 1.7).toString() + "px"
  };

  const change_wrapper = e => {
    setStatus(!status);
    click_behavior(e);
  };

  return Toggle_jsx("div", {
    className: "toggle-container " + className
  }, Toggle_jsx("label", {
    className: "toggle-switch",
    style: switch_style
  }, Toggle_jsx("input", {
    type: "checkbox",
    checked: status,
    onChange: change_wrapper
  }), Toggle_jsx("span", {
    className: "toggle-slider"
  })));
}
// EXTERNAL MODULE: ./src/styles/Blog/post-controls.css
var post_controls = __webpack_require__("my3i");

// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__("5+fn");

// CONCATENATED MODULE: ./src/components/Blog/PostControls.js

var PostControls_jsx = external_react_default.a.createElement;






function PostControls({
  post_id
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const edit_mode = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.edit_mode);
  const post = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.posts[post_id]);
  const url = `${"https://aaronbae.com"}${Object(format["h" /* post_to_url */])(post)}`;
  const summary = Object(format["l" /* summarize_content */])(post.content);
  const logged_in = Object(external_react_redux_["useSelector"])(store => store.AdminReducer.logged_in);

  const edit_post_click = e => {
    dispatch(Object(BlogActions["g" /* change_edit_mode */])(true));
  };

  const handle_switch = e => {
    dispatch(Object(BlogActions["o" /* update_public */])(post, !post.public));
  };

  return PostControls_jsx("div", {
    className: "post-controls"
  }, PostControls_jsx(external_react_share_["FacebookShareButton"], {
    url: url,
    quote: post.title + " from aaronbae.com",
    className: "media-button"
  }, PostControls_jsx(external_react_share_["FacebookIcon"], {
    size: 25,
    round: true,
    bgStyle: {
      fill: "#696867"
    }
  })), PostControls_jsx(external_react_share_["LinkedinShareButton"], {
    url: url,
    title: post.title + " from aaronbae.com",
    summary: summary,
    source: "aaronbae.com",
    className: "media-button"
  }, PostControls_jsx(external_react_share_["LinkedinIcon"], {
    size: 25,
    round: true,
    bgStyle: {
      fill: "#696867"
    }
  })), PostControls_jsx(external_react_share_["TwitterShareButton"], {
    url: url,
    title: post.title,
    className: "media-button"
  }, PostControls_jsx(external_react_share_["TwitterIcon"], {
    size: 25,
    round: true,
    bgStyle: {
      fill: "#696867"
    }
  })), !edit_mode && logged_in && PostControls_jsx("button", {
    className: "edit-button post-control-right",
    onClick: edit_post_click
  }, "Edit Post"), edit_mode && logged_in && PostControls_jsx("span", {
    className: "post-control-right"
  }, PostControls_jsx("span", null, "Public :"), PostControls_jsx("span", null, PostControls_jsx(Toggle, {
    checked: post.public,
    width: "50px",
    click_behavior: handle_switch
  }))));
}
// EXTERNAL MODULE: ./src/styles/Blog/post-content.css
var post_content = __webpack_require__("JxLA");

// CONCATENATED MODULE: ./src/components/Blog/PostContent.js

var PostContent_jsx = external_react_default.a.createElement;





function PostContent({
  post_id
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const post = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.posts[post_id]);
  const edit_mode = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.edit_mode);
  const wrapper = Object(external_react_["useRef"])(null);
  const tooltip = Object(external_react_["useRef"])(null);

  const get_caret_element = () => {
    const selection = window.getSelection();

    if (selection.rangeCount) {
      return selection.getRangeAt(0).commonAncestorContainer;
    }

    return null;
  };

  const hide_tooltip = () => {
    tooltip.current.classList.remove("show");
  };

  const update_caret_div = () => {
    const element = get_caret_element();

    if (edit_mode && element && element.nodeType === 1 && element.childElementCount <= 1) {
      wrapper.current.style.top = element.offsetTop + "px";
      wrapper.current.style.left = element.offsetLeft - 130 + "px";
      tooltip.current.classList.add("show");
    } else {
      hide_tooltip();
    }
  };

  const remote_trigger = () => {
    // remote trigger, because actual input is invisible
    const element = get_caret_element();

    if (element) {
      element.innerHTML = "<insert_imag_here></insert_imag_here>";
    }

    document.getElementById("post-image-input").click();
  };

  const find_image_marker = () => {
    const editor = document.getElementById("post-content-editor");
    const children = editor.children;

    for (let i = 0; i < children.length; i++) {
      if (children[i].innerHTML === "<insert_imag_here></insert_imag_here>") {
        return children[i];
      }
    }

    return null;
  };

  const add_new_image = e => {
    let f = e.target.files[0];
    let element = find_image_marker();
    const editor = document.getElementById("post-content-editor");

    if (element && f && /^.*(png|jpg|jpeg)$/i.test(f.type)) {
      const data = new FormData();
      data.append('file', f);
      fetch("https://52.12.89.206/api/files/" + 'upload', {
        method: 'POST',
        body: data
      }).then(res => res.json()).then(res => {
        element.innerHTML = Object(format["a" /* create_img_element */])(res.url);
        dispatch(Object(BlogActions["n" /* update_content */])(post, editor.innerHTML));
      });
    }
  };

  const default_to_divs = e => {
    // Empty content defaults to emtpy divs
    if (e.target.innerText.length <= 1 && e.key === "Backspace") {
      e.target.innerHTML = "<div></div>";
      e.preventDefault();
    }
  };

  const change_content = e => {
    update_caret_div();
    dispatch(Object(BlogActions["n" /* update_content */])(post, e.target.innerHTML));
  };

  return PostContent_jsx("div", {
    className: "post-content"
  }, PostContent_jsx("div", {
    id: "post-tooltip-wrapper",
    ref: wrapper
  }, PostContent_jsx("input", {
    type: "file",
    name: "file",
    id: "post-image-input",
    onChange: add_new_image
  }), PostContent_jsx("label", {
    ref: tooltip,
    htmlFor: "post-image-input",
    onMouseDown: remote_trigger,
    className: "post-tooltip"
  }, "Add Image")), PostContent_jsx("div", {
    id: "post-content-editor",
    contentEditable: edit_mode,
    suppressContentEditableWarning: true,
    "data-placeholder": "What's on your mind?",
    onKeyDown: default_to_divs,
    onKeyUp: change_content,
    onClick: update_caret_div,
    onBlur: hide_tooltip,
    dangerouslySetInnerHTML: {
      __html: Object(format["d" /* format_post_content */])(post)
    }
  }));
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/styles/Blog/post-edit-controls.css
var post_edit_controls = __webpack_require__("3nrG");

// CONCATENATED MODULE: ./src/components/Blog/PostEditControls.js

var PostEditControls_jsx = external_react_default.a.createElement;




function PostEditControls({
  post_id
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const post = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.posts[post_id]);

  const save_changes = e => {
    dispatch(Object(BlogActions["m" /* save_local_changes */])(post));
  };

  const cancel_changes = e => {
    dispatch(Object(BlogActions["g" /* change_edit_mode */])(false));
    dispatch(Object(BlogActions["j" /* fetch_post_by_id */])(post_id));
  };

  const delete_curr_post = e => {
    dispatch(Object(BlogActions["i" /* delete_post */])(post_id));
    router.push("/blog");
  };

  return PostEditControls_jsx("div", {
    className: "post-edit-controls"
  }, PostEditControls_jsx("div", {
    className: "card-section-break"
  }), PostEditControls_jsx("button", {
    className: "post-edit-save",
    type: "button",
    onClick: save_changes
  }, "Save"), PostEditControls_jsx("button", {
    className: "post-edit-delete",
    type: "button",
    onClick: delete_curr_post
  }, "Delete"), PostEditControls_jsx("button", {
    className: "post-edit-cancel",
    type: "button",
    onClick: cancel_changes
  }, "Cancel"));
}
// EXTERNAL MODULE: ./src/styles/Blog/id.css
var id = __webpack_require__("C2iO");

// CONCATENATED MODULE: ./src/pages/blog/[id].js

var _id_jsx = external_react_default.a.createElement;









function PostViewer({
  post_id
}) {
  const post = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.posts[post_id]);
  const edit_mode = Object(external_react_redux_["useSelector"])(store => store.BlogReducer.edit_mode);
  const description = Object(format["l" /* summarize_content */])(post.content);
  const url = "https://aaronbae.com" + Object(format["h" /* post_to_url */])(post);
  const img = Object(format["b" /* find_image_from_post */])(post);
  return _id_jsx("div", {
    className: "post-id"
  }, _id_jsx(head_default.a, null, _id_jsx("title", null, post.title), _id_jsx("meta", {
    key: "title",
    name: "title",
    content: post.title
  }), _id_jsx("meta", {
    key: "description",
    name: "description",
    content: description
  }), _id_jsx("meta", {
    key: "og:url",
    property: "og:url",
    content: url
  }), _id_jsx("meta", {
    key: "og:type",
    property: "og:type",
    content: "article"
  }), _id_jsx("meta", {
    key: "og:title",
    property: "og:title",
    content: post.title
  }), _id_jsx("meta", {
    key: "og:description",
    property: "og:description",
    content: description
  }), img !== "" && _id_jsx("meta", {
    key: "og:image",
    property: "og:image",
    content: img
  })), post && _id_jsx("div", {
    className: "card-wrapper"
  }, _id_jsx(PostInformation, {
    post_id: post._id
  }), _id_jsx(PostControls, {
    post_id: post._id
  }), _id_jsx(PostContent, {
    post_id: post._id
  }), edit_mode && _id_jsx(PostEditControls, {
    post_id: post._id
  })));
}

async function getServerSideProps(context) {
  const raw = await fetch("https://52.12.89.206/api/posts/" + Object(format["m" /* url_to_post_id */])(context.query.id));
  const res = await raw.json();
  const post = res.posts[0];
  return {
    props: {
      post_id: post._id,
      initialReduxState: {
        BlogReducer: {
          posts: {
            [post._id]: post
          }
        }
      }
    }
  };
}
/* harmony default export */ var _id_ = __webpack_exports__["default"] = (PostViewer);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hOiE":
/***/ (function(module, exports) {



/***/ }),

/***/ "my3i":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });