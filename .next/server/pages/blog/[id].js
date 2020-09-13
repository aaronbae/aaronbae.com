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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/blog/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Blog/PostContent.js":
/*!********************************************!*\
  !*** ./src/components/Blog/PostContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/format */ "./src/library/format.js");
/* harmony import */ var _redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/BlogActions */ "./src/redux/BlogActions.js");
/* harmony import */ var _styles_Blog_post_content_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Blog/post-content.css */ "./src/styles/Blog/post-content.css");
/* harmony import */ var _styles_Blog_post_content_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_post_content_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\src\\components\\Blog\\PostContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function PostContent({
  post_id
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(store => store.BlogReducer.posts[post_id]);
  const edit_mode = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(store => store.BlogReducer.edit_mode);
  const wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const tooltip = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

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
      fetch("http://localhost:4000/api/files/" + 'upload', {
        method: 'POST',
        body: data
      }).then(res => res.json()).then(res => {
        element.innerHTML = Object(_library_format__WEBPACK_IMPORTED_MODULE_2__["create_img_element"])(res.url);
        dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["update_content"])(post, editor.innerHTML));
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
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["update_content"])(post, e.target.innerHTML));
  };

  return __jsx("div", {
    className: "post-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "post-tooltip-wrapper",
    ref: wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    name: "file",
    id: "post-image-input",
    onChange: add_new_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("label", {
    ref: tooltip,
    htmlFor: "post-image-input",
    onMouseDown: remote_trigger,
    className: "post-tooltip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Add Image")), __jsx("div", {
    id: "post-content-editor",
    contentEditable: edit_mode,
    suppressContentEditableWarning: true,
    "data-placeholder": "What's on your mind?",
    onKeyDown: default_to_divs,
    onKeyUp: change_content,
    onClick: update_caret_div,
    onBlur: hide_tooltip,
    dangerouslySetInnerHTML: {
      __html: Object(_library_format__WEBPACK_IMPORTED_MODULE_2__["format_post_content"])(post)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/Blog/PostControls.js":
/*!*********************************************!*\
  !*** ./src/components/Blog/PostControls.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostControls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/format */ "./src/library/format.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/BlogActions */ "./src/redux/BlogActions.js");
/* harmony import */ var _Utility_Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utility/Toggle */ "./src/components/Utility/Toggle.js");
/* harmony import */ var _styles_Blog_post_controls_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Blog/post-controls.css */ "./src/styles/Blog/post-controls.css");
/* harmony import */ var _styles_Blog_post_controls_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_post_controls_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-share */ "react-share");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\src\\components\\Blog\\PostControls.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function PostControls({
  post_id
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const edit_mode = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.BlogReducer.edit_mode);
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.BlogReducer.posts[post_id]);
  const url = `${"https://aaronbae.com"}${Object(_library_format__WEBPACK_IMPORTED_MODULE_1__["post_to_url"])(post)}`;
  const summary = Object(_library_format__WEBPACK_IMPORTED_MODULE_1__["summarize_content"])(post.content);
  const logged_in = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.AdminReducer.logged_in);

  const edit_post_click = e => {
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["change_edit_mode"])(true));
  };

  const handle_switch = e => {
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["update_public"])(post, !post.public));
  };

  return __jsx("div", {
    className: "post-controls",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["FacebookShareButton"], {
    url: url,
    quote: post.title + " from aaronbae.com",
    className: "media-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["FacebookIcon"], {
    size: 25,
    round: true,
    bgStyle: {
      fill: "#696867"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["LinkedinShareButton"], {
    url: url,
    title: post.title + " from aaronbae.com",
    summary: summary,
    source: "aaronbae.com",
    className: "media-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["LinkedinIcon"], {
    size: 25,
    round: true,
    bgStyle: {
      fill: "#696867"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["TwitterShareButton"], {
    url: url,
    title: post.title,
    className: "media-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["TwitterIcon"], {
    size: 25,
    round: true,
    bgStyle: {
      fill: "#696867"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), !edit_mode && logged_in && __jsx("button", {
    className: "edit-button post-control-right",
    onClick: edit_post_click,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Edit Post"), edit_mode && logged_in && __jsx("span", {
    className: "post-control-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Public :"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_Utility_Toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: post.public,
    width: "50px",
    click_behavior: handle_switch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }))));
}

/***/ }),

/***/ "./src/components/Blog/PostEditControls.js":
/*!*************************************************!*\
  !*** ./src/components/Blog/PostEditControls.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostEditControls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/BlogActions */ "./src/redux/BlogActions.js");
/* harmony import */ var _styles_Blog_post_edit_controls_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Blog/post-edit-controls.css */ "./src/styles/Blog/post-edit-controls.css");
/* harmony import */ var _styles_Blog_post_edit_controls_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_post_edit_controls_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\src\\components\\Blog\\PostEditControls.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PostEditControls({
  post_id
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(store => store.BlogReducer.posts[post_id]);

  const save_changes = e => {
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["save_local_changes"])(post));
  };

  const cancel_changes = e => {
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["change_edit_mode"])(false));
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["fetch_post_by_id"])(post_id));
  };

  const delete_curr_post = e => {
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["delete_post"])(post_id));
    router.push("/blog");
  };

  return __jsx("div", {
    className: "post-edit-controls",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card-section-break",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("button", {
    className: "post-edit-save",
    type: "button",
    onClick: save_changes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Save"), __jsx("button", {
    className: "post-edit-delete",
    type: "button",
    onClick: delete_curr_post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Delete"), __jsx("button", {
    className: "post-edit-cancel",
    type: "button",
    onClick: cancel_changes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Cancel"));
}

/***/ }),

/***/ "./src/components/Blog/PostInformation.js":
/*!************************************************!*\
  !*** ./src/components/Blog/PostInformation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostInformation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/format */ "./src/library/format.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/BlogActions */ "./src/redux/BlogActions.js");
/* harmony import */ var _styles_Blog_post_information_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Blog/post-information.css */ "./src/styles/Blog/post-information.css");
/* harmony import */ var _styles_Blog_post_information_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_post_information_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\src\\components\\Blog\\PostInformation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PostInformation({
  post_id
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.BlogReducer.posts[post_id]);
  const edit_mode = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.BlogReducer.edit_mode);

  const change_tags = e => {
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["update_tags"])(post, Object(_library_format__WEBPACK_IMPORTED_MODULE_1__["raw_tags_to_array"])(e.target.innerText)));
  };

  const change_title = e => {
    dispatch(Object(_redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__["update_title"])(post, e.target.innerText));
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "post-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, Object(_library_format__WEBPACK_IMPORTED_MODULE_1__["format_date"])(post.createtime)), __jsx("div", {
    className: "post-tags",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Tags : "), __jsx("div", {
    className: "post-tag-editor",
    contentEditable: edit_mode,
    "data-placeholder": "example-tag",
    suppressContentEditableWarning: true,
    onKeyUp: change_tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, post.tags.join(", ")))), __jsx("div", {
    className: "post-title",
    contentEditable: edit_mode,
    suppressContentEditableWarning: true,
    "data-placeholder": "hello",
    onKeyUp: change_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, post.title));
}

/***/ }),

/***/ "./src/components/Utility/Toggle.js":
/*!******************************************!*\
  !*** ./src/components/Utility/Toggle.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Utility_toggle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Utility/toggle.css */ "./src/styles/Utility/toggle.css");
/* harmony import */ var _styles_Utility_toggle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Utility_toggle_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\src\\components\\Utility\\Toggle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Toggle({
  checked,
  click_behavior,
  width,
  className
}) {
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(checked);
  const switch_style = {
    width: parseInt(width.slice(0, -2)) * 0.8.toString() + "px",
    height: (width / 1.7).toString() + "px"
  };

  const change_wrapper = e => {
    setStatus(!status);
    click_behavior(e);
  };

  return __jsx("div", {
    className: "toggle-container " + className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("label", {
    className: "toggle-switch",
    style: switch_style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "checkbox",
    checked: status,
    onChange: change_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "toggle-slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/library/format.js":
/*!*******************************!*\
  !*** ./src/library/format.js ***!
  \*******************************/
/*! exports provided: round, format_to_gb, snake_case_to_normal, create_img_element, format_post_content, raw_tags_to_array, posts_to_array, page_to_skip, pagination_array, query_param_string_to_objects, post_to_url, url_to_post_id, format_date, summarize_content, find_image_from_post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format_to_gb", function() { return format_to_gb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snake_case_to_normal", function() { return snake_case_to_normal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_img_element", function() { return create_img_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format_post_content", function() { return format_post_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_tags_to_array", function() { return raw_tags_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts_to_array", function() { return posts_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page_to_skip", function() { return page_to_skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagination_array", function() { return pagination_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query_param_string_to_objects", function() { return query_param_string_to_objects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_to_url", function() { return post_to_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url_to_post_id", function() { return url_to_post_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format_date", function() { return format_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summarize_content", function() { return summarize_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find_image_from_post", function() { return find_image_from_post; });
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
  url = url.replace(/https:\/\/aaronbaebucket.s3.([^/]+)\//gi, "https://aaronbae.com/api/files/");
  return `<img src='${url}' class='aws-image' alt='Loaded from AWS'>`;
}
function format_post_content(post) {
  if (post.content === "<br>" || post.content === "") {
    return "<div></div>";
  } // Temporary stop gap


  post.content = post.content.replace(/https:\/\/aaronbae.com\/api\/files\//gi, `${"http://localhost:4000/api/files/"}`);
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

/***/ "./src/pages/blog/[id].js":
/*!********************************!*\
  !*** ./src/pages/blog/[id].js ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Blog_PostInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Blog/PostInformation */ "./src/components/Blog/PostInformation.js");
/* harmony import */ var _components_Blog_PostControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Blog/PostControls */ "./src/components/Blog/PostControls.js");
/* harmony import */ var _components_Blog_PostContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Blog/PostContent */ "./src/components/Blog/PostContent.js");
/* harmony import */ var _components_Blog_PostEditControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Blog/PostEditControls */ "./src/components/Blog/PostEditControls.js");
/* harmony import */ var _library_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/format */ "./src/library/format.js");
/* harmony import */ var _styles_Blog_id_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Blog/id.css */ "./src/styles/Blog/id.css");
/* harmony import */ var _styles_Blog_id_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_id_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\src\\pages\\blog\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function PostViewer({
  post_id
}) {
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.BlogReducer.posts[post_id]);
  const edit_mode = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.BlogReducer.edit_mode);
  const description = Object(_library_format__WEBPACK_IMPORTED_MODULE_7__["summarize_content"])(post.content);
  const url = "https://aaronbae.com" + Object(_library_format__WEBPACK_IMPORTED_MODULE_7__["post_to_url"])(post);
  const img = Object(_library_format__WEBPACK_IMPORTED_MODULE_7__["find_image_from_post"])(post);
  return __jsx("div", {
    className: "post-id",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, post.title), __jsx("meta", {
    key: "title",
    name: "title",
    content: post.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "description",
    name: "description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "og:url",
    property: "og:url",
    content: url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "og:type",
    property: "og:type",
    content: "article",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "og:title",
    property: "og:title",
    content: post.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "og:description",
    property: "og:description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), img !== "" && __jsx("meta", {
    key: "og:image",
    property: "og:image",
    content: img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 24
    }
  })), post && __jsx("div", {
    className: "card-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_components_Blog_PostInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post_id: post._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx(_components_Blog_PostControls__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post_id: post._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx(_components_Blog_PostContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post_id: post._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), edit_mode && __jsx(_components_Blog_PostEditControls__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post_id: post._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })));
}

async function getServerSideProps(context) {
  const raw = await fetch("http://localhost:4000/api/posts/" + Object(_library_format__WEBPACK_IMPORTED_MODULE_7__["url_to_post_id"])(context.query.id));
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
/* harmony default export */ __webpack_exports__["default"] = (PostViewer);

/***/ }),

/***/ "./src/redux/BlogActions.js":
/*!**********************************!*\
  !*** ./src/redux/BlogActions.js ***!
  \**********************************/
/*! exports provided: RECEIVE_POSTS, UPDATE_POST, ADD_NEW_POST, ADD_NEW_PARAGRAPH, REMOVE_PARAGRAPH, CHANGE_EDIT_MODE, change_edit_mode, add_new_post, update_title, update_tags, update_public, update_content, fetch_public_posts, fetch_posts, fetch_post_by_id, create_new_post, save_local_changes, delete_post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_POSTS", function() { return RECEIVE_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_POST", function() { return ADD_NEW_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_PARAGRAPH", function() { return ADD_NEW_PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PARAGRAPH", function() { return REMOVE_PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_EDIT_MODE", function() { return CHANGE_EDIT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change_edit_mode", function() { return change_edit_mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_new_post", function() { return add_new_post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_title", function() { return update_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_tags", function() { return update_tags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_public", function() { return update_public; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_content", function() { return update_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_public_posts", function() { return fetch_public_posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_posts", function() { return fetch_posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_post_by_id", function() { return fetch_post_by_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_new_post", function() { return create_new_post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save_local_changes", function() { return save_local_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_post", function() { return delete_post; });
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
    let url = "http://localhost:4000/api/posts/" + "public";

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
    let url = "http://localhost:4000/api/posts/";

    if (skip > 0) {
      url = url.slice(0, -1) + "?skip=" + skip.toString();
    }

    fetch(url).then(res => res.json()).then(res => dispatch(receive_posts(res)));
  };
}
function fetch_post_by_id(post_id) {
  return dispatch => {
    fetch("http://localhost:4000/api/posts/" + post_id).then(res => res.json()).then(res => dispatch(receive_posts(res)));
  };
}
function create_new_post() {
  return dispatch => {
    var url = "http://localhost:4000/api/posts/" + "add/";
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
  var url = "http://localhost:4000/api/posts/" + "update/" + post._id.toString();

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
  var url = "http://localhost:4000/api/posts/" + "delete/" + post_id.toString();
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

/***/ "./src/styles/Blog/id.css":
/*!********************************!*\
  !*** ./src/styles/Blog/id.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Blog/post-content.css":
/*!******************************************!*\
  !*** ./src/styles/Blog/post-content.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Blog/post-controls.css":
/*!*******************************************!*\
  !*** ./src/styles/Blog/post-controls.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Blog/post-edit-controls.css":
/*!************************************************!*\
  !*** ./src/styles/Blog/post-edit-controls.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Blog/post-information.css":
/*!**********************************************!*\
  !*** ./src/styles/Blog/post-information.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Utility/toggle.css":
/*!***************************************!*\
  !*** ./src/styles/Utility/toggle.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmxvZy9Qb3N0Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nL1Bvc3RDb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nL1Bvc3RFZGl0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmxvZy9Qb3N0SW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXRpbGl0eS9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnJhcnkvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ibG9nLy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvQmxvZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2hhcmVcIiJdLCJuYW1lcyI6WyJQb3N0Q29udGVudCIsInBvc3RfaWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RvcmUiLCJCbG9nUmVkdWNlciIsInBvc3RzIiwiZWRpdF9tb2RlIiwid3JhcHBlciIsInVzZVJlZiIsInRvb2x0aXAiLCJnZXRfY2FyZXRfZWxlbWVudCIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0IiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJoaWRlX3Rvb2x0aXAiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidXBkYXRlX2NhcmV0X2RpdiIsImVsZW1lbnQiLCJub2RlVHlwZSIsImNoaWxkRWxlbWVudENvdW50Iiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsImFkZCIsInJlbW90ZV90cmlnZ2VyIiwiaW5uZXJIVE1MIiwicHJvY2VzcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsImZpbmRfaW1hZ2VfbWFya2VyIiwiZWRpdG9yIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwiYWRkX25ld19pbWFnZSIsImUiLCJmIiwidGFyZ2V0IiwiZmlsZXMiLCJ0ZXN0IiwidHlwZSIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyZXMiLCJqc29uIiwiY3JlYXRlX2ltZ19lbGVtZW50IiwidXJsIiwidXBkYXRlX2NvbnRlbnQiLCJkZWZhdWx0X3RvX2RpdnMiLCJpbm5lclRleHQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZV9jb250ZW50IiwiX19odG1sIiwiZm9ybWF0X3Bvc3RfY29udGVudCIsIlBvc3RDb250cm9scyIsInBvc3RfdG9fdXJsIiwic3VtbWFyeSIsInN1bW1hcml6ZV9jb250ZW50IiwiY29udGVudCIsImxvZ2dlZF9pbiIsIkFkbWluUmVkdWNlciIsImVkaXRfcG9zdF9jbGljayIsImNoYW5nZV9lZGl0X21vZGUiLCJoYW5kbGVfc3dpdGNoIiwidXBkYXRlX3B1YmxpYyIsInB1YmxpYyIsInRpdGxlIiwiZmlsbCIsIlBvc3RFZGl0Q29udHJvbHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzYXZlX2NoYW5nZXMiLCJzYXZlX2xvY2FsX2NoYW5nZXMiLCJjYW5jZWxfY2hhbmdlcyIsImZldGNoX3Bvc3RfYnlfaWQiLCJkZWxldGVfY3Vycl9wb3N0IiwiZGVsZXRlX3Bvc3QiLCJwdXNoIiwiUG9zdEluZm9ybWF0aW9uIiwiY2hhbmdlX3RhZ3MiLCJ1cGRhdGVfdGFncyIsInJhd190YWdzX3RvX2FycmF5IiwiY2hhbmdlX3RpdGxlIiwidXBkYXRlX3RpdGxlIiwiZm9ybWF0X2RhdGUiLCJjcmVhdGV0aW1lIiwidGFncyIsImpvaW4iLCJUb2dnbGUiLCJjaGVja2VkIiwiY2xpY2tfYmVoYXZpb3IiLCJ3aWR0aCIsImNsYXNzTmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInVzZVN0YXRlIiwic3dpdGNoX3N0eWxlIiwicGFyc2VJbnQiLCJzbGljZSIsInRvU3RyaW5nIiwiaGVpZ2h0IiwiY2hhbmdlX3dyYXBwZXIiLCJyb3VuZCIsInZhbHVlIiwiZmxvYXRfZGlnaXRzIiwicm91bmRlciIsIk1hdGgiLCJwb3ciLCJmb3JtYXRfdG9fZ2IiLCJpbnRlZ2VyX3ZhbHVlIiwiZmxvYXRpbmdfcG9pbnRzIiwic25ha2VfY2FzZV90b19ub3JtYWwiLCJzdHJpbmciLCJ1cHBlcl9jYXNlIiwic2hpdCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJtYXAiLCJ4IiwicmVwbGFjZSIsInJhd190YWdzX2lucHV0IiwicHVuY3R1YXRpb24iLCJzIiwidHJpbSIsInBvc3RzX3RvX2FycmF5Iiwic29ydGVkX2FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwicGFnZV90b19za2lwIiwicGFnZSIsInRvdGFsX3BhZ2VzIiwibWluIiwibWF4IiwicGFnaW5hdGlvbl9hcnJheSIsImN1cnJlbnRfcGFnZSIsInN0YXJ0IiwiQXJyYXkiLCJrZXlzIiwicXVlcnlfcGFyYW1fc3RyaW5nX3RvX29iamVjdHMiLCJxdWVyeV9zdHJpbmciLCJyZXN1bHQiLCJwIiwidG9Mb3dlckNhc2UiLCJwX3NwbGl0IiwibW9kaWZpZWRfdGl0bGUiLCJfaWQiLCJ1cmxfdG9fcG9zdF9pZCIsInNwbGl0dGVkIiwiZGF0ZV9zdHJpbmciLCJnaXZlbl9kYXRlIiwiRGF0ZSIsImNvcnJlY3RlZF9kIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0IiwibW9udGgiLCJkYXlzIiwiZ2V0RGF5IiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJzdWJzdHJpbmciLCJmaW5kX2ltYWdlX2Zyb21fcG9zdCIsIm1hdGNoZXMiLCJtYXRjaCIsIlBvc3RWaWV3ZXIiLCJkZXNjcmlwdGlvbiIsImltZyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyYXciLCJxdWVyeSIsImlkIiwicHJvcHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsIlJFQ0VJVkVfUE9TVFMiLCJVUERBVEVfUE9TVCIsIkFERF9ORVdfUE9TVCIsIkFERF9ORVdfUEFSQUdSQVBIIiwiUkVNT1ZFX1BBUkFHUkFQSCIsIkNIQU5HRV9FRElUX01PREUiLCJib29sZWFuX3ZhbHVlIiwiYWRkX25ld19wb3N0IiwibmV3X3Bvc3QiLCJwdWJsaWNfYm9vbGVhbiIsInJlY2VpdmVfcG9zdHMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4IiwicmVjZWl2ZWRBdCIsIm5vdyIsImZldGNoX3B1YmxpY19wb3N0cyIsInNraXAiLCJmZXRjaF9wb3N0cyIsImNyZWF0ZV9uZXdfcG9zdCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdI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QSxTQUFPbEgsUUFBUSxJQUFJO0FBQ2pCcUQsU0FBSyxDQUFDTyxHQUFELEVBQU07QUFDVE4sWUFBTSxFQUFFLEtBREM7QUFFVDhKLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBRkEsS0FBTixDQUFMLENBS0c1SixJQUxILENBS1FDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBTGYsRUFNQ0YsSUFORCxDQU1NLE1BQU14RCxRQUFRLENBQUM2RSxnQkFBZ0IsQ0FBQyxLQUFELENBQWpCLENBTnBCO0FBT0QsR0FSRDtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpELHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2Jsb2cvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2Jsb2cvW2lkXS5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZm9ybWF0X3Bvc3RfY29udGVudCwgY3JlYXRlX2ltZ19lbGVtZW50IH0gZnJvbSAnLi4vLi4vbGlicmFyeS9mb3JtYXQnXHJcbmltcG9ydCB7IHVwZGF0ZV9jb250ZW50IH0gZnJvbSAnLi4vLi4vcmVkdXgvQmxvZ0FjdGlvbnMnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL0Jsb2cvcG9zdC1jb250ZW50LmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb250ZW50KHtwb3N0X2lkfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHBvc3QgPSB1c2VTZWxlY3RvcihzdG9yZSA9PiBzdG9yZS5CbG9nUmVkdWNlci5wb3N0c1twb3N0X2lkXSlcclxuICBjb25zdCBlZGl0X21vZGUgPSB1c2VTZWxlY3RvcihzdG9yZSA9PiBzdG9yZS5CbG9nUmVkdWNlci5lZGl0X21vZGUpXHJcbiAgY29uc3Qgd3JhcHBlciA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHRvb2x0aXAgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3QgZ2V0X2NhcmV0X2VsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcclxuICAgIGlmKHNlbGVjdGlvbi5yYW5nZUNvdW50KXtcclxuICAgICAgcmV0dXJuIHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXHJcbiAgICB9IFxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgY29uc3QgaGlkZV90b29sdGlwID0gKCkgPT4ge1xyXG4gICAgdG9vbHRpcC5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpXHJcbiAgfVxyXG4gIGNvbnN0IHVwZGF0ZV9jYXJldF9kaXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0X2NhcmV0X2VsZW1lbnQoKVxyXG4gICAgaWYoZWRpdF9tb2RlICYmIGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiBlbGVtZW50LmNoaWxkRWxlbWVudENvdW50IDw9IDEpe1xyXG4gICAgICB3cmFwcGVyLmN1cnJlbnQuc3R5bGUudG9wID0gZWxlbWVudC5vZmZzZXRUb3ArXCJweFwiXHJcbiAgICAgIHdyYXBwZXIuY3VycmVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0LTEzMCtcInB4XCJcclxuICAgICAgdG9vbHRpcC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoaWRlX3Rvb2x0aXAoKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCByZW1vdGVfdHJpZ2dlciA9ICgpID0+IHtcclxuICAgIC8vIHJlbW90ZSB0cmlnZ2VyLCBiZWNhdXNlIGFjdHVhbCBpbnB1dCBpcyBpbnZpc2libGVcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRfY2FyZXRfZWxlbWVudCgpXHJcbiAgICBpZihlbGVtZW50KXtcclxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTUFHRV9NQVJLRVJcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdC1pbWFnZS1pbnB1dFwiKS5jbGljaygpXHJcbiAgfVxyXG4gIGNvbnN0IGZpbmRfaW1hZ2VfbWFya2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LWNvbnRlbnQtZWRpdG9yXCIpXHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVkaXRvci5jaGlsZHJlblxyXG4gICAgZm9yKGxldCBpPTA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGlmKGNoaWxkcmVuW2ldLmlubmVySFRNTD09PXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFX01BUktFUil7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGNvbnN0IGFkZF9uZXdfaW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGYgPSBlLnRhcmdldC5maWxlc1swXVxyXG4gICAgbGV0IGVsZW1lbnQgPSBmaW5kX2ltYWdlX21hcmtlcigpXHJcbiAgICBjb25zdCBlZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3QtY29udGVudC1lZGl0b3JcIilcclxuICAgIGlmKGVsZW1lbnQgJiYgZiAmJiAvXi4qKHBuZ3xqcGd8anBlZykkL2kudGVzdChmLnR5cGUpKXtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpIFxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGYpXHJcbiAgICAgIGZldGNoKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJTEVfVVJMICsgJ3VwbG9hZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBkYXRhXHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjcmVhdGVfaW1nX2VsZW1lbnQocmVzLnVybClcclxuICAgICAgICBkaXNwYXRjaCh1cGRhdGVfY29udGVudChwb3N0LCBlZGl0b3IuaW5uZXJIVE1MKSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgZGVmYXVsdF90b19kaXZzID0gKGUpID0+IHtcclxuICAgIC8vIEVtcHR5IGNvbnRlbnQgZGVmYXVsdHMgdG8gZW10cHkgZGl2c1xyXG4gICAgaWYoZS50YXJnZXQuaW5uZXJUZXh0Lmxlbmd0aDw9MSAmJiBlLmtleT09PVwiQmFja3NwYWNlXCIpe1xyXG4gICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIjxkaXY+PC9kaXY+XCJcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZV9jb250ZW50ID0gKGUpID0+IHtcclxuICAgIHVwZGF0ZV9jYXJldF9kaXYoKVxyXG4gICAgZGlzcGF0Y2godXBkYXRlX2NvbnRlbnQocG9zdCwgZS50YXJnZXQuaW5uZXJIVE1MKSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJwb3N0LXRvb2x0aXAtd3JhcHBlclwiIHJlZj17d3JhcHBlcn0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBpZD1cInBvc3QtaW1hZ2UtaW5wdXRcIiBvbkNoYW5nZT17YWRkX25ld19pbWFnZX0vPlxyXG4gICAgICAgIDxsYWJlbCByZWY9e3Rvb2x0aXB9IGh0bWxGb3I9XCJwb3N0LWltYWdlLWlucHV0XCIgb25Nb3VzZURvd249e3JlbW90ZV90cmlnZ2VyfSBjbGFzc05hbWU9XCJwb3N0LXRvb2x0aXBcIj5cclxuICAgICAgICAgIEFkZCBJbWFnZVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwicG9zdC1jb250ZW50LWVkaXRvclwiXHJcbiAgICAgICAgY29udGVudEVkaXRhYmxlPXtlZGl0X21vZGV9XHJcbiAgICAgICAgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nPXt0cnVlfVxyXG4gICAgICAgIGRhdGEtcGxhY2Vob2xkZXI9e1wiV2hhdCdzIG9uIHlvdXIgbWluZD9cIn1cclxuICAgICAgICBvbktleURvd249e2RlZmF1bHRfdG9fZGl2c31cclxuICAgICAgICBvbktleVVwPXtjaGFuZ2VfY29udGVudH1cclxuICAgICAgICBvbkNsaWNrPXt1cGRhdGVfY2FyZXRfZGl2fVxyXG4gICAgICAgIG9uQmx1cj17aGlkZV90b29sdGlwfVxyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICBfX2h0bWw6IGZvcm1hdF9wb3N0X2NvbnRlbnQocG9zdClcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgcG9zdF90b191cmwsIHN1bW1hcml6ZV9jb250ZW50IH0gZnJvbSAnLi4vLi4vbGlicmFyeS9mb3JtYXQnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjaGFuZ2VfZWRpdF9tb2RlLCB1cGRhdGVfcHVibGljIH0gZnJvbSAnLi4vLi4vcmVkdXgvQmxvZ0FjdGlvbnMnXHJcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi4vVXRpbGl0eS9Ub2dnbGUnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL0Jsb2cvcG9zdC1jb250cm9scy5jc3MnXHJcblxyXG5pbXBvcnQge1xyXG4gIEZhY2Vib29rU2hhcmVCdXR0b24sXHJcbiAgRmFjZWJvb2tJY29uLFxyXG4gIExpbmtlZGluU2hhcmVCdXR0b24sXHJcbiAgTGlua2VkaW5JY29uLFxyXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcclxuICBUd2l0dGVySWNvbixcclxufSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb250cm9scyh7cG9zdF9pZH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBlZGl0X21vZGUgPSB1c2VTZWxlY3RvcihzdG9yZSA9PiBzdG9yZS5CbG9nUmVkdWNlci5lZGl0X21vZGUpXHJcbiAgY29uc3QgcG9zdCA9IHVzZVNlbGVjdG9yKHN0b3JlID0+IHN0b3JlLkJsb2dSZWR1Y2VyLnBvc3RzW3Bvc3RfaWRdKVxyXG4gIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH0ke3Bvc3RfdG9fdXJsKHBvc3QpfWBcclxuICBjb25zdCBzdW1tYXJ5ID0gc3VtbWFyaXplX2NvbnRlbnQocG9zdC5jb250ZW50KVxyXG5cclxuICBjb25zdCBsb2dnZWRfaW4gPSB1c2VTZWxlY3RvcihzdG9yZSA9PiBzdG9yZS5BZG1pblJlZHVjZXIubG9nZ2VkX2luKVxyXG4gIGNvbnN0IGVkaXRfcG9zdF9jbGljayA9IChlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjaGFuZ2VfZWRpdF9tb2RlKHRydWUpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVfc3dpdGNoID0gKGUpID0+IHtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZV9wdWJsaWMocG9zdCwgIXBvc3QucHVibGljKSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250cm9sc1wiPlxyXG4gICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiBcclxuICAgICAgICB1cmw9e3VybH1cclxuICAgICAgICBxdW90ZT17cG9zdC50aXRsZSArIFwiIGZyb20gYWFyb25iYWUuY29tXCJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtYnV0dG9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17MjV9IHJvdW5kPXt0cnVlfSBiZ1N0eWxlPXt7ZmlsbDogXCIjNjk2ODY3XCJ9fS8+XHJcbiAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cclxuICAgICAgPExpbmtlZGluU2hhcmVCdXR0b24gXHJcbiAgICAgICAgdXJsPXt1cmx9XHJcbiAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGUgKyBcIiBmcm9tIGFhcm9uYmFlLmNvbVwifSBcclxuICAgICAgICBzdW1tYXJ5PXtzdW1tYXJ5fVxyXG4gICAgICAgIHNvdXJjZT1cImFhcm9uYmFlLmNvbVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPExpbmtlZGluSWNvbiBzaXplPXsyNX0gcm91bmQ9e3RydWV9IGJnU3R5bGU9e3tmaWxsOiBcIiM2OTY4NjdcIn19Lz5cclxuICAgICAgPC9MaW5rZWRpblNoYXJlQnV0dG9uPlxyXG4gICAgICA8VHdpdHRlclNoYXJlQnV0dG9uIFxyXG4gICAgICAgIHVybD17dXJsfVxyXG4gICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhLWJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxUd2l0dGVySWNvbiBzaXplPXsyNX0gcm91bmQ9e3RydWV9IGJnU3R5bGU9e3tmaWxsOiBcIiM2OTY4NjdcIn19Lz5cclxuICAgICAgPC9Ud2l0dGVyU2hhcmVCdXR0b24+XHJcbiAgICAgIHshZWRpdF9tb2RlICYmIGxvZ2dlZF9pbiAmJlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZWRpdC1idXR0b24gcG9zdC1jb250cm9sLXJpZ2h0XCIgb25DbGljaz17ZWRpdF9wb3N0X2NsaWNrfT5FZGl0IFBvc3Q8L2J1dHRvbj5cclxuICAgICAgfVxyXG4gICAgICB7ZWRpdF9tb2RlICYmIGxvZ2dlZF9pbiAmJlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3QtY29udHJvbC1yaWdodFwiPlxyXG4gICAgICAgICAgPHNwYW4+UHVibGljIDo8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPFRvZ2dsZSBjaGVja2VkPXtwb3N0LnB1YmxpY30gd2lkdGg9XCI1MHB4XCIgY2xpY2tfYmVoYXZpb3I9e2hhbmRsZV9zd2l0Y2h9Lz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIH1cclxuICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFxyXG4gIGNoYW5nZV9lZGl0X21vZGUsIFxyXG4gIGZldGNoX3Bvc3RfYnlfaWQsIFxyXG4gIHNhdmVfbG9jYWxfY2hhbmdlcyxcclxuICBkZWxldGVfcG9zdFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L0Jsb2dBY3Rpb25zJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9CbG9nL3Bvc3QtZWRpdC1jb250cm9scy5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0RWRpdENvbnRyb2xzKHtwb3N0X2lkfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcG9zdCA9IHVzZVNlbGVjdG9yKHN0b3JlID0+IHN0b3JlLkJsb2dSZWR1Y2VyLnBvc3RzW3Bvc3RfaWRdKVxyXG4gIFxyXG4gIGNvbnN0IHNhdmVfY2hhbmdlcyA9IChlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzYXZlX2xvY2FsX2NoYW5nZXMocG9zdCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjYW5jZWxfY2hhbmdlcyA9IChlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjaGFuZ2VfZWRpdF9tb2RlKGZhbHNlKSlcclxuICAgIGRpc3BhdGNoKGZldGNoX3Bvc3RfYnlfaWQocG9zdF9pZCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVfY3Vycl9wb3N0ID0gKGUpID0+IHtcclxuICAgIGRpc3BhdGNoKGRlbGV0ZV9wb3N0KHBvc3RfaWQpKVxyXG4gICAgcm91dGVyLnB1c2goXCIvYmxvZ1wiKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWVkaXQtY29udHJvbHNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNlY3Rpb24tYnJlYWtcIiAvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvc3QtZWRpdC1zYXZlXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3NhdmVfY2hhbmdlc30+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvc3QtZWRpdC1kZWxldGVcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ZGVsZXRlX2N1cnJfcG9zdH0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9zdC1lZGl0LWNhbmNlbFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjYW5jZWxfY2hhbmdlc30+Q2FuY2VsPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBmb3JtYXRfZGF0ZSwgcmF3X3RhZ3NfdG9fYXJyYXkgfSBmcm9tICcuLi8uLi9saWJyYXJ5L2Zvcm1hdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVwZGF0ZV90aXRsZSwgdXBkYXRlX3RhZ3MgfSBmcm9tICcuLi8uLi9yZWR1eC9CbG9nQWN0aW9ucydcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvQmxvZy9wb3N0LWluZm9ybWF0aW9uLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RJbmZvcm1hdGlvbih7cG9zdF9pZH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBwb3N0ID0gdXNlU2VsZWN0b3Ioc3RvcmUgPT4gc3RvcmUuQmxvZ1JlZHVjZXIucG9zdHNbcG9zdF9pZF0pXHJcbiAgY29uc3QgZWRpdF9tb2RlID0gdXNlU2VsZWN0b3Ioc3RvcmUgPT4gc3RvcmUuQmxvZ1JlZHVjZXIuZWRpdF9tb2RlKVxyXG5cclxuICBjb25zdCBjaGFuZ2VfdGFncyA9IChlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVfdGFncyhwb3N0LCByYXdfdGFnc190b19hcnJheShlLnRhcmdldC5pbm5lclRleHQpKSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlX3RpdGxlID0gKGUpID0+IHtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZV90aXRsZShwb3N0LCBlLnRhcmdldC5pbm5lclRleHQpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2Zvcm1hdF9kYXRlKHBvc3QuY3JlYXRldGltZSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXRhZ3NcIj5cclxuICAgICAgICAgIDxzcGFuPlRhZ3MgOiA8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdGFnLWVkaXRvclwiXHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdF9tb2RlfSBcclxuICAgICAgICAgICAgZGF0YS1wbGFjZWhvbGRlcj17XCJleGFtcGxlLXRhZ1wifVxyXG4gICAgICAgICAgICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9XHJcbiAgICAgICAgICAgIG9uS2V5VXA9e2NoYW5nZV90YWdzfVxyXG4gICAgICAgICAgPiBcclxuICAgICAgICAgICAge3Bvc3QudGFncy5qb2luKFwiLCBcIil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiIFxyXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdF9tb2RlfSBcclxuICAgICAgICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9XHJcbiAgICAgICAgZGF0YS1wbGFjZWhvbGRlcj17XCJoZWxsb1wifVxyXG4gICAgICAgIG9uS2V5VXA9e2NoYW5nZV90aXRsZX0gXHJcbiAgICAgICAgPlxyXG4gICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL1V0aWxpdHkvdG9nZ2xlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZ2dsZSh7Y2hlY2tlZCwgY2xpY2tfYmVoYXZpb3IsIHdpZHRoLCBjbGFzc05hbWV9KSB7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGNoZWNrZWQpXHJcbiAgY29uc3Qgc3dpdGNoX3N0eWxlID0ge1xyXG4gICAgd2lkdGg6IHBhcnNlSW50KHdpZHRoLnNsaWNlKDAsIC0yKSkgKiAwLjgudG9TdHJpbmcoKSArIFwicHhcIixcclxuICAgIGhlaWdodDogKHdpZHRoLzEuNykudG9TdHJpbmcoKSArIFwicHhcIixcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlX3dyYXBwZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdHVzKCFzdGF0dXMpXHJcbiAgICBjbGlja19iZWhhdmlvcihlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1widG9nZ2xlLWNvbnRhaW5lciBcIiArIGNsYXNzTmFtZX0+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoXCIgc3R5bGU9e3N3aXRjaF9zdHlsZX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3N0YXR1c30gb25DaGFuZ2U9e2NoYW5nZV93cmFwcGVyfS8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlLXNsaWRlclwiPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiByb3VuZCh2YWx1ZSwgZmxvYXRfZGlnaXRzKSB7XHJcbiAgY29uc3Qgcm91bmRlciA9IE1hdGgucG93KDEwLCBmbG9hdF9kaWdpdHMpXHJcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUqcm91bmRlcikgLyByb3VuZGVyXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0X3RvX2diKGludGVnZXJfdmFsdWUsIGZsb2F0aW5nX3BvaW50cykge1xyXG4gIHJldHVybiByb3VuZChpbnRlZ2VyX3ZhbHVlLzEwNzM3NDE4MjQsIGZsb2F0aW5nX3BvaW50cylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNuYWtlX2Nhc2VfdG9fbm9ybWFsKHN0cmluZykge1xyXG4gIGZ1bmN0aW9uIHVwcGVyX2Nhc2Uoc2hpdCkge1xyXG4gICAgcmV0dXJuIHNoaXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzaGl0LnNsaWNlKDEpXHJcbiAgfVxyXG4gIHJldHVybiBzdHJpbmcuc3BsaXQoXCJfXCIpLm1hcCh4PT51cHBlcl9jYXNlKHgpKS5qb2luKFwiIFwiKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2ltZ19lbGVtZW50KHVybCkge1xyXG4gIHVybCA9IHVybC5yZXBsYWNlKC9odHRwczpcXC9cXC9hYXJvbmJhZWJ1Y2tldC5zMy4oW14vXSspXFwvL2dpLCBcImh0dHBzOi8vYWFyb25iYWUuY29tL2FwaS9maWxlcy9cIilcclxuICByZXR1cm4gYDxpbWcgc3JjPScke3VybH0nIGNsYXNzPSdhd3MtaW1hZ2UnIGFsdD0nTG9hZGVkIGZyb20gQVdTJz5gXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdF9wb3N0X2NvbnRlbnQocG9zdCkge1xyXG4gIGlmKHBvc3QuY29udGVudCA9PT0gXCI8YnI+XCIgfHwgcG9zdC5jb250ZW50PT09XCJcIil7XHJcbiAgICByZXR1cm4gXCI8ZGl2PjwvZGl2PlwiXHJcbiAgfVxyXG4gIC8vIFRlbXBvcmFyeSBzdG9wIGdhcFxyXG4gIHBvc3QuY29udGVudCA9IHBvc3QuY29udGVudC5yZXBsYWNlKC9odHRwczpcXC9cXC9hYXJvbmJhZS5jb21cXC9hcGlcXC9maWxlc1xcLy9naSwgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklMRV9VUkx9YClcclxuICByZXR1cm4gcG9zdC5jb250ZW50XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhd190YWdzX3RvX2FycmF5KHJhd190YWdzX2lucHV0KSB7XHJcbiAgY29uc3QgcHVuY3R1YXRpb24gPSAvWyFcIiMkJSYnKCkqKywtLi86Ozw9Pj9AW1xcXV5fYHt8fX5dL2dcclxuICByZXR1cm4gcmF3X3RhZ3NfaW5wdXQuc3BsaXQoXCIsXCIpLm1hcChzID0+IHMudHJpbSgpLnJlcGxhY2UocHVuY3R1YXRpb24sICcnKSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcG9zdHNfdG9fYXJyYXkocG9zdHMpIHtcclxuICBjb25zdCBzb3J0ZWRfYXJyYXkgPSBPYmplY3QudmFsdWVzKHBvc3RzKS5zb3J0KGZ1bmN0aW9uKGEsYikge1xyXG4gICAgaWYoYS5jcmVhdGV0aW1lID49IGIuY3JlYXRldGltZSl7XHJcbiAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDFcclxuICB9KVxyXG4gIHJldHVybiBzb3J0ZWRfYXJyYXlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VfdG9fc2tpcChwYWdlLCB0b3RhbF9wYWdlcykge1xyXG4gIHJldHVybiA1ICogKE1hdGgubWluKHRvdGFsX3BhZ2VzLCBNYXRoLm1heCgxLCBwYWdlKSkgLSAxKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0aW9uX2FycmF5KGN1cnJlbnRfcGFnZSwgdG90YWxfcGFnZXMpIHtcclxuICBjb25zdCBzdGFydCA9IE1hdGgubWF4KDEsIE1hdGgubWluKGN1cnJlbnRfcGFnZSAtIDIsIHRvdGFsX3BhZ2VzLTQpKVxyXG4gIHJldHVybiBbLi4uQXJyYXkoNSkua2V5cygpXS5tYXAoeCA9PiB4K3N0YXJ0KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5X3BhcmFtX3N0cmluZ190b19vYmplY3RzKHF1ZXJ5X3N0cmluZyl7XHJcbiAgbGV0IHJlc3VsdCA9IHt9XHJcbiAgZm9yKGNvbnN0IHAgb2YgIHF1ZXJ5X3N0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCI/XCIsIFwiXCIpLnNwbGl0KFwiJlwiKSl7XHJcbiAgICBsZXQgcF9zcGxpdCA9IHAudG9TdHJpbmcoKS5zcGxpdChcIj1cIilcclxuICAgIHJlc3VsdFtwX3NwbGl0WzBdXSA9IHBfc3BsaXRbMV1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zdF90b191cmwocG9zdCkge1xyXG4gIGxldCBtb2RpZmllZF90aXRsZSA9IHBvc3QudGl0bGUucmVwbGFjZSgvW15BLVphLXowLTlcXHNdL2csXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gIG1vZGlmaWVkX3RpdGxlID0gbW9kaWZpZWRfdGl0bGUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpXHJcbiAgcmV0dXJuIGAvYmxvZy8ke21vZGlmaWVkX3RpdGxlfS0ke3Bvc3QuX2lkfWBcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXJsX3RvX3Bvc3RfaWQodXJsKSB7XHJcbiAgbGV0IHNwbGl0dGVkID0gdXJsLnNwbGl0KFwiLVwiKTtcclxuICByZXR1cm4gc3BsaXR0ZWRbc3BsaXR0ZWQubGVuZ3RoIC0gMV1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdF9kYXRlKGRhdGVfc3RyaW5nKSB7XHJcbiAgdmFyIGdpdmVuX2RhdGUgPSBuZXcgRGF0ZShkYXRlX3N0cmluZylcclxuICB2YXIgY29ycmVjdGVkX2QgPSBuZXcgRGF0ZShnaXZlbl9kYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKVxyXG4gIHZhciBtb250aCA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdXHJcbiAgdmFyIGRheXMgPSBbXCJNb25kYXlcIiwgXCJUdWVkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCJdXHJcbiAgdmFyIHJlc3VsdCA9IGRheXNbY29ycmVjdGVkX2QuZ2V0RGF5KCldICsgXCIsIFwiICsgbW9udGhbY29ycmVjdGVkX2QuZ2V0TW9udGgoKV0gKyBcIiBcIiArIGNvcnJlY3RlZF9kLmdldERhdGUoKSArIFwiLCBcIiArIGNvcnJlY3RlZF9kLmdldEZ1bGxZZWFyKClcclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1tYXJpemVfY29udGVudChjb250ZW50KSB7XHJcbiAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvPGRpdj58PFxcL2Rpdj58PGJyPnw8aW1nXFxzKy4qPi9naSwgXCIgXCIpLnN1YnN0cmluZygwLCAyMDApICsgXCIuLi5cIlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZF9pbWFnZV9mcm9tX3Bvc3QocG9zdCl7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IHBvc3QuY29udGVudC5tYXRjaCgvaHR0cHNcXDpcXC9cXC9hYXJvbmJhZS5jb20oWy1hLXpBLVowLTkoKUA6JV9cXCsufiM/Ji8vPV0qKS4ocG5nfGpwZ3xqcGVnKS9naSlcclxuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXNbMF0gOiBcIlwiXHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUG9zdEluZm9ybWF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvZy9Qb3N0SW5mb3JtYXRpb24nXHJcbmltcG9ydCBQb3N0Q29udHJvbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9nL1Bvc3RDb250cm9scydcclxuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvZy9Qb3N0Q29udGVudCdcclxuaW1wb3J0IFBvc3RFZGl0Q29udHJvbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9nL1Bvc3RFZGl0Q29udHJvbHMnXHJcbmltcG9ydCB7IFxyXG4gIHVybF90b19wb3N0X2lkLCBcclxuICBzdW1tYXJpemVfY29udGVudCxcclxuICBwb3N0X3RvX3VybCxcclxuICBmaW5kX2ltYWdlX2Zyb21fcG9zdFxyXG59IGZyb20gJy4uLy4uL2xpYnJhcnkvZm9ybWF0J1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9CbG9nL2lkLmNzcydcclxuXHJcbmZ1bmN0aW9uIFBvc3RWaWV3ZXIoe3Bvc3RfaWR9KSB7XHJcbiAgY29uc3QgcG9zdCA9IHVzZVNlbGVjdG9yKHN0b3JlID0+IHN0b3JlLkJsb2dSZWR1Y2VyLnBvc3RzW3Bvc3RfaWRdKVxyXG4gIGNvbnN0IGVkaXRfbW9kZSA9IHVzZVNlbGVjdG9yKHN0b3JlID0+IHN0b3JlLkJsb2dSZWR1Y2VyLmVkaXRfbW9kZSlcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1bW1hcml6ZV9jb250ZW50KHBvc3QuY29udGVudClcclxuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkwgKyBwb3N0X3RvX3VybChwb3N0KVxyXG4gIGNvbnN0IGltZyA9IGZpbmRfaW1hZ2VfZnJvbV9wb3N0KHBvc3QpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaWRcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEga2V5PVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtwb3N0LnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIGtleT1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEga2V5PVwib2c6dXJsXCIgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEga2V5PVwib2c6dHlwZVwiIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz5cclxuICAgICAgICA8bWV0YSBrZXk9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwb3N0LnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIGtleT1cIm9nOmRlc2NyaXB0aW9uXCIgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIHtpbWcgIT09IFwiXCIgJiYgPG1ldGEga2V5PVwib2c6aW1hZ2VcIiBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1nfSAvPn1cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7cG9zdCAmJiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtd3JhcHBlclwiPiBcclxuICAgICAgICAgIDxQb3N0SW5mb3JtYXRpb24gcG9zdF9pZD17cG9zdC5faWR9Lz5cclxuICAgICAgICAgIDxQb3N0Q29udHJvbHMgcG9zdF9pZD17cG9zdC5faWR9Lz5cclxuICAgICAgICAgIDxQb3N0Q29udGVudCBwb3N0X2lkPXtwb3N0Ll9pZH0vPlxyXG4gICAgICAgICAge2VkaXRfbW9kZSAmJiBcclxuICAgICAgICAgICAgPFBvc3RFZGl0Q29udHJvbHMgcG9zdF9pZD17cG9zdC5faWR9IC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmF3ID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9TVF9VUkwrdXJsX3RvX3Bvc3RfaWQoY29udGV4dC5xdWVyeS5pZCkpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgcmF3Lmpzb24oKVxyXG4gIGNvbnN0IHBvc3QgPSByZXMucG9zdHNbMF1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdF9pZDogcG9zdC5faWQsXHJcbiAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiB7XHJcbiAgICAgICAgQmxvZ1JlZHVjZXI6IHtcclxuICAgICAgICAgIHBvc3RzOiB7XHJcbiAgICAgICAgICAgIFtwb3N0Ll9pZF0gOiBwb3N0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFZpZXdlcjsiLCJleHBvcnQgY29uc3QgUkVDRUlWRV9QT1NUUyA9IFwiUkVDRUlWRV9QT1NUU1wiO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1QgPSBcIlVQREFURV9QT1NUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfTkVXX1BPU1QgPSBcIkFERF9ORVdfUE9TVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX05FV19QQVJBR1JBUEggPSBcIkFERF9ORVdfUEFSQUdSQVBIXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUEFSQUdSQVBIID0gXCJSRU1PVkVfUEFSQUdSQVBIXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9NT0RFID0gXCJDSEFOR0VfRURJVF9NT0RFXCI7XHJcblxyXG4vLyBURVJNSU5BTFNcclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZV9lZGl0X21vZGUoYm9vbGVhbl92YWx1ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDSEFOR0VfRURJVF9NT0RFLCBcclxuICAgIGVkaXRfbW9kZTogYm9vbGVhbl92YWx1ZVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkX25ld19wb3N0KG5ld19wb3N0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9ORVdfUE9TVCxcclxuICAgIG5ld19wb3N0OiBuZXdfcG9zdFxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3RpdGxlKG5ld19wb3N0LCB0aXRsZSkge1xyXG4gIG5ld19wb3N0LnRpdGxlID0gdGl0bGVcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX1BPU1QsXHJcbiAgICBuZXdfcG9zdDogbmV3X3Bvc3RcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV90YWdzKG5ld19wb3N0LCB0YWdzKSB7XHJcbiAgbmV3X3Bvc3QudGFncyA9IHRhZ3NcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX1BPU1QsXHJcbiAgICBuZXdfcG9zdDogbmV3X3Bvc3RcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9wdWJsaWMobmV3X3Bvc3QsIHB1YmxpY19ib29sZWFuKSB7XHJcbiAgbmV3X3Bvc3QucHVibGljID0gcHVibGljX2Jvb2xlYW5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX1BPU1QsXHJcbiAgICBuZXdfcG9zdDogbmV3X3Bvc3RcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9jb250ZW50KG5ld19wb3N0LCBjb250ZW50KSB7XHJcbiAgbmV3X3Bvc3QuY29udGVudCA9IGNvbnRlbnRcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX1BPU1QsIFxyXG4gICAgbmV3X3Bvc3Q6IG5ld19wb3N0XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlY2VpdmVfcG9zdHMocmVzKSB7XHJcbiAgLy8gVEVNUE9SQVJZXHJcbiAgaWYoIXJlcy5oYXNPd25Qcm9wZXJ0eSgncG9zdHMnKSkge1xyXG4gICAgcmVzID0ge1xyXG4gICAgICBwb3N0czogcmVzLFxyXG4gICAgICBjdXJyZW50X3BhZ2U6IDEsXHJcbiAgICAgIHRvdGFsX3BhZ2VzOiAxXHJcbiAgICB9XHJcbiAgfSBcclxuICBjb25zdCBwb3N0cyA9IHt9XHJcbiAgZm9yKCB2YXIgaW5kZXggaW4gcmVzLnBvc3RzICkge1xyXG4gICAgbGV0IHAgPSByZXMucG9zdHNbaW5kZXhdXHJcbiAgICBwb3N0c1twLl9pZF0gPSBwXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBSRUNFSVZFX1BPU1RTLFxyXG4gICAgcG9zdHM6IHBvc3RzLFxyXG4gICAgY3VycmVudF9wYWdlOiByZXMuY3VycmVudF9wYWdlLFxyXG4gICAgdG90YWxfcGFnZXM6IHJlcy50b3RhbF9wYWdlcyxcclxuICAgIHJlY2VpdmVkQXQ6IERhdGUubm93KClcclxuICB9XHJcbn1cclxuXHJcbi8vIEZFVENIRVJTXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaF9wdWJsaWNfcG9zdHMoc2tpcCA9IDApIHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgbGV0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPU1RfVVJMK1wicHVibGljXCJcclxuICAgIGlmKHNraXAgPiAwKXtcclxuICAgICAgdXJsICs9IFwiP3NraXA9XCIrc2tpcC50b1N0cmluZygpXHJcbiAgICB9IFxyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZWNlaXZlX3Bvc3RzKHJlcykpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hfcG9zdHMoc2tpcCA9IDApIHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgbGV0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPU1RfVVJMXHJcbiAgICBpZihza2lwID4gMCl7XHJcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSkgKyBcIj9za2lwPVwiK3NraXAudG9TdHJpbmcoKVxyXG4gICAgfSBcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKHJlcyA9PiBkaXNwYXRjaChyZWNlaXZlX3Bvc3RzKHJlcykpKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoX3Bvc3RfYnlfaWQocG9zdF9pZCkge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QT1NUX1VSTCtwb3N0X2lkKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzID0+IGRpc3BhdGNoKHJlY2VpdmVfcG9zdHMocmVzKSkpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX25ld19wb3N0KCkge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICB2YXIgdXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9TVF9VUkwgKyBcImFkZC9cIlxyXG4gICAgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7fSlcclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChhZGRfbmV3X3Bvc3QocmVzLnBvc3QpKVxyXG4gICAgICBkaXNwYXRjaChjaGFuZ2VfZWRpdF9tb2RlKHRydWUpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVfbG9jYWxfY2hhbmdlcyhwb3N0KSB7XHJcbiAgdmFyIHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPU1RfVVJMICsgXCJ1cGRhdGUvXCIgKyBwb3N0Ll9pZC50b1N0cmluZygpXHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgIH0pLnRoZW4ocmVzID0+IGRpc3BhdGNoKGNoYW5nZV9lZGl0X21vZGUoZmFsc2UpKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVfcG9zdChwb3N0X2lkKSB7XHJcbiAgdmFyIHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPU1RfVVJMICsgXCJkZWxldGUvXCIgK3Bvc3RfaWQudG9TdHJpbmcoKVxyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGNoYW5nZV9lZGl0X21vZGUoZmFsc2UpKSlcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2hhcmVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==