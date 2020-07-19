/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_Redux_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Redux/Store */ \"./src/Redux/Store.js\");\n/* harmony import */ var _src_Common_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/Common/Main */ \"./src/Common/Main.js\");\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3000;\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // All other asset requests\n\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static('./build')); // HTTP requests\n\napp.get('*', (req, res) => {\n  const main = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: _src_Redux_Store__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_Common_Main__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null))));\n  console.log(\"Serving out \" + req.url);\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${main}</div>`));\n  });\n});\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/Admin/AdminBlog.js":
/*!********************************!*\
  !*** ./src/Admin/AdminBlog.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Redux/BlogActions */ \"./src/Redux/BlogActions.js\");\n/* harmony import */ var _Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Redux/AdminActions */ \"./src/Redux/AdminActions.js\");\n/* harmony import */ var _AdminPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdminPost */ \"./src/Admin/AdminPost.js\");\n/* harmony import */ var _PostEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostEditor */ \"./src/Admin/PostEditor.js\");\n/* harmony import */ var _AdminBlog_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdminBlog.scss */ \"./src/Admin/AdminBlog.scss\");\n/* harmony import */ var _AdminBlog_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AdminBlog_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n // Redux handlers\n\n\n\n\n // components \n\n\n\n\n\nclass AdminBlog extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.handleNewPostButton = this.handleNewPostButton.bind(this);\n  }\n\n  handleNewPostButton(e) {\n    e.stopPropagation();\n    const {\n      dispatch\n    } = this.props;\n    dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__[\"create_new_post\"])());\n  }\n\n  componentDidMount() {\n    const {\n      dispatch\n    } = this.props;\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"fetch_posts\"])());\n  }\n\n  renderRedirect() {\n    const {\n      logged_in\n    } = this.props;\n\n    if (!logged_in) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n        to: \"/login\"\n      });\n    }\n  }\n\n  render() {\n    const {\n      posts,\n      logged_in\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row admin-blog-container\"\n    }, this.renderRedirect(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"blog-column\",\n      className: \"col-12 col-sm-3 post-column\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row center post-column-title\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"h4\"\n    }, \"Recent Posts\"), logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"new-post-button h3\",\n      type: \"button\",\n      onClick: this.handleNewPostButton\n    }, \"+\")), posts.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminPost__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: index,\n      post_id: index\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-12 col-sm-9\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostEditor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n  }\n\n}\n\nAdminBlog.propTypes = {\n  logged_in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  posts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n\nfunction mapStateToProps(state) {\n  return {\n    logged_in: state.AdminReducer.logged_in,\n    posts: state.BlogReducer.posts\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(AdminBlog));\n\n//# sourceURL=webpack:///./src/Admin/AdminBlog.js?");

/***/ }),

/***/ "./src/Admin/AdminBlog.scss":
/*!**********************************!*\
  !*** ./src/Admin/AdminBlog.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Admin/AdminBlog.scss?");

/***/ }),

/***/ "./src/Admin/AdminPost.js":
/*!********************************!*\
  !*** ./src/Admin/AdminPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/HelperFunctions */ \"./src/Utils/HelperFunctions.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Redux/AdminActions */ \"./src/Redux/AdminActions.js\");\n/* harmony import */ var _AdminPost_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdminPost.scss */ \"./src/Admin/AdminPost.scss\");\n/* harmony import */ var _AdminPost_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AdminPost_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n // Redux handlers\n\n\n\n\n\n\nclass AdminPost extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      post_id: props.post_id\n    };\n    this.handlePostClick = this.handlePostClick.bind(this);\n  }\n\n  handlePostClick(e) {\n    e.stopPropagation();\n    const {\n      dispatch,\n      edit_mode\n    } = this.props;\n\n    if (edit_mode) {// TODO: remind user that a post is selected already\n    } else {\n      dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__[\"viewpost\"])(this.state.post_id));\n      window.scrollTo(0, 0);\n    }\n  }\n\n  render() {\n    const {\n      title,\n      date,\n      summarized_content,\n      public_flag\n    } = this.props;\n    const formatted_date = Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"format_date\"])(date);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: public_flag ? \"row admin-post-container public\" : \"row admin-post-container\",\n      onClick: this.handlePostClick\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"individual-post\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"offset-1 col-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row date\"\n    }, formatted_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row title\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"h5\"\n    }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, summarized_content))));\n  }\n\n}\n\nAdminPost.propTypes = {\n  edit_mode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,\n  selected_post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  summarized_content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  public_flag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired\n};\n\nfunction mapStateToProps(state, ownProps) {\n  const {\n    edit_mode,\n    selected_post\n  } = state.AdminReducer;\n  const {\n    posts\n  } = state.BlogReducer;\n  let this_post = posts[ownProps.post_id];\n  let summary = this_post.content.filter(x => !Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"isMyImageURL\"])(x)).join(\" \").substring(0, 100) + \"...\";\n  return {\n    edit_mode: edit_mode,\n    selected_post: selected_post,\n    title: this_post.title.substring(0, 61) + (this_post.title.length > 61 ? \"...\" : \"\"),\n    date: this_post.createtime,\n    summarized_content: summary,\n    public_flag: this_post.public\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps)(AdminPost)));\n\n//# sourceURL=webpack:///./src/Admin/AdminPost.js?");

/***/ }),

/***/ "./src/Admin/AdminPost.scss":
/*!**********************************!*\
  !*** ./src/Admin/AdminPost.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Admin/AdminPost.scss?");

/***/ }),

/***/ "./src/Admin/ContentEditor.js":
/*!************************************!*\
  !*** ./src/Admin/ContentEditor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/HelperFunctions */ \"./src/Utils/HelperFunctions.js\");\n/* harmony import */ var _Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Redux/BlogActions */ \"./src/Redux/BlogActions.js\");\n/* harmony import */ var _Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Redux/AdminActions */ \"./src/Redux/AdminActions.js\");\n/* harmony import */ var _ContentEditor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentEditor.scss */ \"./src/Admin/ContentEditor.scss\");\n/* harmony import */ var _ContentEditor_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ContentEditor_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nclass ContentEditor extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.update_content = this.update_content.bind(this);\n    this.key_down = this.key_down.bind(this);\n    this.handle_focus = this.handle_focus.bind(this);\n    this.handle_blur = this.handle_blur.bind(this);\n    this.handle_add_image_button = this.handle_add_image_button.bind(this);\n    this.image_key_down = this.image_key_down.bind(this);\n    this.state = {\n      focus_index: -1,\n      image_div_show: false,\n      image_div_y: 0,\n      post_update_focus_paragraph_index: 0,\n      post_update_focus_character_index: 0\n    };\n  }\n\n  focus(paragraph, character) {\n    let needs_focus = document.getElementsByClassName(\"post-editor-paragraph\")[paragraph];\n    needs_focus.focus();\n\n    if (needs_focus.nodeName === \"TEXTAREA\") {\n      character = Math.min(character, needs_focus.innerHTML.length);\n      needs_focus.setSelectionRange(character, character);\n    }\n  }\n\n  componentDidUpdate(prevProps) {\n    const {\n      posts,\n      index,\n      edit_mode\n    } = this.props;\n    let prev_posts = prevProps.posts; // Resize title and content input\n\n    Array.from(document.getElementsByClassName(\"resize-required\")).forEach(e => {\n      e.style.height = \"0px\";\n      e.style.height = e.scrollHeight + 1 + \"px\";\n    }); // re-focus after paragraph creation or deletion\n\n    if (edit_mode && index !== -1 && prev_posts.length > 0 && posts[index].content.length !== prev_posts[index].content.length) {\n      this.focus(this.state.post_update_focus_paragraph_index, this.state.post_update_focus_character_index);\n    }\n  }\n\n  image_key_down(e) {\n    const {\n      posts,\n      dispatch,\n      index\n    } = this.props;\n    let num_paragraphs = parseInt(posts[index].content.length);\n    let paragraph_index = parseInt(e.target.getAttribute(\"index\"));\n\n    if (e.key === \"Enter\") {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"add_new_paragraph\"])(index, paragraph_index, \"\"));\n      this.setState({\n        post_update_focus_paragraph_index: paragraph_index + 1,\n        post_update_focus_character_index: 0\n      });\n    } else if (e.key === \"Backspace\" || e.key === \"Delete\") {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"remove_paragraph\"])(index, paragraph_index));\n      this.setState({\n        post_update_focus_paragraph_index: paragraph_index < num_paragraphs ? paragraph_index : Math.max(0, paragraph_index - 1),\n        post_update_focus_character_index: 0\n      });\n    } else if (e.key === \"ArrowUp\" && paragraph_index > 0) {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      this.focus(paragraph_index - 1, 0);\n    } else if (e.key === \"ArrowDown\" && paragraph_index < num_paragraphs - 1) {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      this.focus(paragraph_index + 1, 0);\n    }\n  }\n\n  key_down(e) {\n    const {\n      posts,\n      dispatch,\n      index\n    } = this.props;\n    let num_paragraphs = parseInt(posts[index].content.length);\n    let paragraph_index = parseInt(e.target.getAttribute(\"index\"));\n    let current_paragraph = e.target.value;\n    let cursor_index = parseInt(e.target.selectionStart);\n\n    if (e.key === \"Enter\") {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      let staying_content = [...posts[index].content];\n      staying_content[paragraph_index] = current_paragraph.substring(0, cursor_index);\n      let created_content = current_paragraph.substring(cursor_index);\n      dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"update_post\"])({ ...posts[index],\n        content: staying_content\n      }, index));\n      dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"add_new_paragraph\"])(index, paragraph_index, created_content));\n      this.setState({\n        post_update_focus_paragraph_index: paragraph_index + 1,\n        post_update_focus_character_index: 0\n      });\n    } else if (e.key === \"Backspace\" && cursor_index === 0 && paragraph_index > 0) {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      let merged_content = [...posts[index].content];\n      merged_content[paragraph_index - 1] = merged_content[paragraph_index - 1] + current_paragraph;\n      dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"update_post\"])({ ...posts[index],\n        content: merged_content\n      }, index));\n      dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"remove_paragraph\"])(index, paragraph_index));\n      this.setState({\n        post_update_focus_paragraph_index: paragraph_index - 1,\n        post_update_focus_character_index: merged_content[paragraph_index - 1].length - current_paragraph.length\n      });\n    } else if (e.key === \"Delete\" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1) {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      let merged_content = [...posts[index].content];\n      merged_content[paragraph_index] = current_paragraph + merged_content[paragraph_index + 1];\n      dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"update_post\"])({ ...posts[index],\n        content: merged_content\n      }, index));\n      dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"remove_paragraph\"])(index, paragraph_index + 1));\n      this.setState({\n        post_update_focus_paragraph_index: paragraph_index,\n        post_update_focus_character_index: current_paragraph.length\n      });\n    } else if (e.key === \"ArrowUp\" && cursor_index === 0 && paragraph_index > 0) {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      this.focus(paragraph_index - 1, cursor_index);\n    } else if (e.key === \"ArrowDown\" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1) {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      this.focus(paragraph_index + 1, cursor_index);\n    } else if (e.key === \"ArrowLeft\" && cursor_index === 0 && paragraph_index > 0) {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      this.focus(paragraph_index - 1, Number.MAX_VALUE);\n    } else if (e.key === \"ArrowRight\" && cursor_index === current_paragraph.length && paragraph_index < num_paragraphs - 1) {\n      e.stopPropagation();\n      e.preventDefault(); // this prevents update_content\n\n      this.focus(paragraph_index + 1, 0);\n    }\n  }\n\n  handle_blur(e) {\n    this.setState({\n      image_div_show: false\n    });\n  }\n\n  handle_focus(e) {\n    // check to show image tooltip\n    if (e.target.nodeName === \"TEXTAREA\") {\n      this.setState({\n        focus_index: e.target.getAttribute(\"index\"),\n        image_div_show: e.target.value.length === 0,\n        image_div_y: e.target.offsetTop\n      });\n    } else {\n      // Don't show when focus is set on image\n      this.setState({\n        image_div_show: false\n      });\n    }\n  }\n\n  handle_add_image_button(e) {\n    const {\n      posts,\n      index,\n      dispatch\n    } = this.props;\n    let f = e.target.files[0];\n\n    if (f.type.startsWith(\"image\")) {\n      dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__[\"upload_image\"])(f, posts[index], index, this.state.focus_index));\n    }\n  }\n\n  update_content(e) {\n    e.stopPropagation();\n    const {\n      dispatch,\n      posts,\n      index\n    } = this.props;\n    var new_content = [...posts[index].content];\n    new_content[e.target.getAttribute(\"index\")] = e.target.value;\n    this.setState({\n      image_div_show: e.target.value.length === 0\n    });\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"update_post\"])({ ...posts[index],\n      content: new_content\n    }, index));\n  }\n\n  render() {\n    const {\n      index,\n      posts\n    } = this.props;\n    let post = index !== -1 ? posts[index] : {\n      content: []\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row content-editor-container content-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"add-image-div\",\n      style: {\n        top: this.state.image_div_y + \"px\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"file\",\n      name: \"file\",\n      className: \"file-selector\",\n      id: \"file-selector\",\n      onChange: this.handle_add_image_button\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"file-selector\",\n      className: this.state.image_div_show ? \"add-file-label show\" : \"add-file-label\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"add-file-img\",\n      src: \"/assets/icons/plus-sign.png\",\n      alt: \"Add Button\"\n    }))), post.content.map((i, key) => {\n      if (Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_3__[\"isMyImageURL\"])(i)) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: key,\n          index: key,\n          tabIndex: key,\n          className: \"post-editor-paragraph\",\n          onKeyDown: this.image_key_down,\n          onBlur: this.handle_blur,\n          onFocus: this.handle_focus\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          className: \"aws-image \",\n          src: Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_3__[\"convertMyImageURL\"])(i),\n          alt: \"Loaded from AWS\"\n        }));\n      } else {\n        // post-editor-paragrph : used to manage focusing\n        // content-paragraph    : used to match style with paragraphs in PostEditor\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n          key: key,\n          index: key,\n          tabIndex: key,\n          className: \"content-editor-text-area resize-required post-editor-paragraph content-paragraph\",\n          value: i,\n          onChange: this.update_content,\n          onKeyDown: this.key_down,\n          onFocus: this.handle_focus,\n          onBlur: this.handle_blur,\n          placeholder: key === 0 ? \"What's on your Mind?\" : \"\"\n        });\n      }\n    }));\n  }\n\n}\n\nContentEditor.propTypes = {\n  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n  edit_mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired\n};\n\nfunction mapStateToProps(state) {\n  const {\n    selected_post,\n    edit_mode\n  } = state.AdminReducer;\n  const {\n    posts\n  } = state.BlogReducer;\n  return {\n    index: selected_post,\n    posts: posts,\n    edit_mode: edit_mode\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(ContentEditor));\n\n//# sourceURL=webpack:///./src/Admin/ContentEditor.js?");

/***/ }),

/***/ "./src/Admin/ContentEditor.scss":
/*!**************************************!*\
  !*** ./src/Admin/ContentEditor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Admin/ContentEditor.scss?");

/***/ }),

/***/ "./src/Admin/LogInPage.js":
/*!********************************!*\
  !*** ./src/Admin/LogInPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Redux_AdminActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Redux/AdminActions */ \"./src/Redux/AdminActions.js\");\n/* harmony import */ var _LogInPage_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogInPage.scss */ \"./src/Admin/LogInPage.scss\");\n/* harmony import */ var _LogInPage_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LogInPage_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n // Redux handlers\n\n\n\n // components \n\n\n\nclass LogInPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.handleSignInButton = this.handleSignInButton.bind(this);\n  }\n\n  componentDidUpdate() {\n    const {\n      logged_in\n    } = this.props;\n\n    if (logged_in) {\n      this.props.history.push(\"/admin\");\n    }\n  }\n\n  handleSignInButton(e) {\n    e.stopPropagation();\n    var both_inputs = document.getElementsByClassName(\"text-input\");\n    const {\n      dispatch\n    } = this.props;\n    dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_4__[\"check_account\"])(both_inputs[0].value, both_inputs[1].value));\n  }\n\n  render() {\n    const {\n      failed_attempt\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row all-signin-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"main-column col-10 col-sm-5 col-md-4 \"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-unit card-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row admin-title-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Admin Access\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row form-item-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: failed_attempt ? \"incorrect text-input\" : \"text-input\",\n      type: \"text\",\n      placeholder: \"Admin Id\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row form-item-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: failed_attempt ? \"incorrect text-input\" : \"text-input\",\n      type: \"password\",\n      placeholder: \"Admin Password\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row buttons-row form-item-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"sign-in-button\",\n      onClick: this.handleSignInButton\n    }, \"Sign In\")))));\n  }\n\n}\n\nLogInPage.propTypes = {\n  logged_in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  failed_attempt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired\n};\n\nfunction mapStateToProps(state) {\n  return {\n    logged_in: state.AdminReducer.logged_in,\n    failed_attempt: state.AdminReducer.failed_attempt\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(LogInPage)));\n\n//# sourceURL=webpack:///./src/Admin/LogInPage.js?");

/***/ }),

/***/ "./src/Admin/LogInPage.scss":
/*!**********************************!*\
  !*** ./src/Admin/LogInPage.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Admin/LogInPage.scss?");

/***/ }),

/***/ "./src/Admin/PostEditor.js":
/*!*********************************!*\
  !*** ./src/Admin/PostEditor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/HelperFunctions */ \"./src/Utils/HelperFunctions.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Redux/BlogActions */ \"./src/Redux/BlogActions.js\");\n/* harmony import */ var _Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Redux/AdminActions */ \"./src/Redux/AdminActions.js\");\n/* harmony import */ var _PublicToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PublicToggle */ \"./src/Admin/PublicToggle.js\");\n/* harmony import */ var _ContentEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentEditor */ \"./src/Admin/ContentEditor.js\");\n/* harmony import */ var _PostEditor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostEditor.scss */ \"./src/Admin/PostEditor.scss\");\n/* harmony import */ var _PostEditor_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PostEditor_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n // Redux handlers\n\n\n\n\n\n\n\n\n\n\nclass PostEditor extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.enterEditMode = this.enterEditMode.bind(this);\n    this.update_title = this.update_title.bind(this);\n    this.update_tags = this.update_tags.bind(this);\n    this.save_changes = this.save_changes.bind(this);\n    this.cancel_changes = this.cancel_changes.bind(this);\n    this.handle_delete_button = this.handle_delete_button.bind(this);\n    this.title_input_ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n  }\n\n  componentDidMount() {\n    window.scrollTo(0, 0); // Need to scroll to top if coming from /blog\n  }\n\n  componentDidUpdate() {\n    // Resize title\n    let dom = this.title_input_ref.current;\n\n    if (dom) {\n      dom.style.height = \"0px\";\n      dom.style.height = dom.scrollHeight + 1 + \"px\";\n    }\n  }\n\n  enterEditMode(e) {\n    e.stopPropagation();\n    const {\n      dispatch\n    } = this.props;\n    dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__[\"change_edit_mode\"])(true));\n  }\n\n  update_title(e) {\n    e.stopPropagation();\n    const {\n      dispatch,\n      posts,\n      index\n    } = this.props;\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"update_post\"])({ ...posts[index],\n      title: e.target.value\n    }, index));\n  }\n\n  update_tags(e) {\n    e.stopPropagation();\n    const {\n      dispatch,\n      posts,\n      index\n    } = this.props;\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"update_post\"])({ ...posts[index],\n      tags: e.target.value.split(',')\n    }, index));\n  }\n\n  save_changes(e) {\n    e.stopPropagation();\n    const {\n      dispatch,\n      posts,\n      index\n    } = this.props;\n    dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__[\"save_local_changes\"])(posts[index]));\n  }\n\n  cancel_changes(e) {\n    e.stopPropagation();\n    const {\n      dispatch\n    } = this.props;\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"fetch_posts\"])());\n    dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__[\"change_edit_mode\"])(false));\n  }\n\n  handle_delete_button(e) {\n    e.stopPropagation();\n    const {\n      dispatch,\n      posts,\n      index\n    } = this.props;\n    dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_5__[\"delete_post\"])(posts[index]['_id']));\n  }\n\n  render() {\n    const {\n      edit_mode,\n      logged_in,\n      index,\n      posts\n    } = this.props;\n    let formatted_date = \"\";\n    let post = {};\n\n    if (index !== -1) {\n      post = posts[index];\n      formatted_date = Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"format_date\"])(post.createtime);\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row post-editor-container\"\n    }, index > -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: edit_mode ? \"col post-editor-main-col hidden\" : \"col post-editor-main-col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row title-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"plain-title\"\n    }, post.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row information-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-5 no-padding\"\n    }, formatted_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-7 no-padding\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"float-right\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"tags-label\"\n    }, \"Tags : \"), post.tags.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      key: index,\n      className: \"tag \" + item\n    }, item + \", \")), logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"edit-button\",\n      onClick: this.enterEditMode\n    }, \"Edit Post\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row content-row\"\n    }, post.content.map((i, key) => {\n      if (Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"isMyImageURL\"])(i)) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          key: key,\n          className: \"aws-image\",\n          src: Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"convertMyImageURL\"])(i),\n          alt: \"Loaded from AWS\"\n        });\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"plain-content content-paragraph\",\n          key: key\n        }, i);\n      }\n    }))), index > -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: edit_mode ? \"col post-editor-main-col\" : \"col post-editor-main-col hidden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row title-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n      ref: this.title_input_ref,\n      value: post.title,\n      onChange: this.update_title,\n      placeholder: \"Your Title...\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row information-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-sm-12 col-md-5 no-padding\"\n    }, formatted_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-sm-12 col-md-7 no-padding\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-sm-12 offset-lg-3 col-lg-9 offset-xl-5 col-xl-7\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"tags-label \"\n    }, \"Tags : \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"tags-input\",\n      type: \"text\",\n      value: post.tags,\n      onChange: this.update_tags,\n      placeholder: \"tag, tag, ...\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"toggle-label\"\n    }, \"Public: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PublicToggle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentEditor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row button-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"save-button\",\n      type: \"button\",\n      onClick: this.save_changes\n    }, \"Save\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"delete-button\",\n      type: \"button\",\n      onClick: this.handle_delete_button\n    }, \"Delete\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"cancel-button\",\n      type: \"button\",\n      onClick: this.cancel_changes\n    }, \"Cancel\")))));\n  }\n\n}\n\nPostEditor.propTypes = {\n  logged_in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  edit_mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  posts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,\n  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired\n};\n\nfunction mapStateToProps(state) {\n  const {\n    edit_mode,\n    selected_post\n  } = state.AdminReducer;\n  const {\n    posts\n  } = state.BlogReducer;\n  return {\n    logged_in: state.AdminReducer.logged_in,\n    edit_mode: edit_mode,\n    posts: posts,\n    index: selected_post\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(PostEditor));\n\n//# sourceURL=webpack:///./src/Admin/PostEditor.js?");

/***/ }),

/***/ "./src/Admin/PostEditor.scss":
/*!***********************************!*\
  !*** ./src/Admin/PostEditor.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Admin/PostEditor.scss?");

/***/ }),

/***/ "./src/Admin/PublicToggle.js":
/*!***********************************!*\
  !*** ./src/Admin/PublicToggle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/BlogActions */ \"./src/Redux/BlogActions.js\");\n/* harmony import */ var _Utils_Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/Toggle */ \"./src/Utils/Toggle.js\");\n\n\n\n\n\n\nclass PublicToggle extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.update_public = this.update_public.bind(this);\n  }\n\n  update_public(e) {\n    e.stopPropagation();\n    const {\n      dispatch,\n      posts,\n      index\n    } = this.props;\n    let post = posts[index];\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__[\"update_post\"])({ ...post,\n      public: !post.public\n    }, index));\n  }\n\n  render() {\n    const {\n      posts,\n      index\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Toggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      checked: posts[index].public,\n      width: \"50px\",\n      click_behavior: this.update_public\n    });\n  }\n\n}\n\nPublicToggle.propTypes = {\n  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired\n};\n\nfunction mapStateToProps(state) {\n  const {\n    selected_post\n  } = state.AdminReducer;\n  const {\n    posts\n  } = state.BlogReducer;\n  return {\n    posts: posts,\n    index: selected_post\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(PublicToggle));\n\n//# sourceURL=webpack:///./src/Admin/PublicToggle.js?");

/***/ }),

/***/ "./src/Blog/MainBlogPage.js":
/*!**********************************!*\
  !*** ./src/Blog/MainBlogPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/BlogActions */ \"./src/Redux/BlogActions.js\");\n/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostCard */ \"./src/Blog/PostCard.js\");\n/* harmony import */ var _MainBlogPage_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainBlogPage.scss */ \"./src/Blog/MainBlogPage.scss\");\n/* harmony import */ var _MainBlogPage_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MainBlogPage_scss__WEBPACK_IMPORTED_MODULE_5__);\n // Redux handlers\n\n\n\n // components \n\n\n\n\nclass MainBlogPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  componentDidMount() {\n    const {\n      dispatch\n    } = this.props;\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_3__[\"fetch_public_posts\"])());\n  }\n\n  render() {\n    const {\n      posts\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row all-blog-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"offset-1 col-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 card-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row whats-new-container\"\n    }, \"What's New?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-title-break\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row post-container\"\n    }, posts.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: index,\n      post_id: item._id\n    })))));\n  }\n\n}\n\nMainBlogPage.propTypes = {\n  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nfunction mapStateToProps(state) {\n  return {\n    posts: state.BlogReducer.posts,\n    logged_in: state.AdminReducer.logged_in\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(MainBlogPage));\n\n//# sourceURL=webpack:///./src/Blog/MainBlogPage.js?");

/***/ }),

/***/ "./src/Blog/MainBlogPage.scss":
/*!************************************!*\
  !*** ./src/Blog/MainBlogPage.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Blog/MainBlogPage.scss?");

/***/ }),

/***/ "./src/Blog/PostCard.js":
/*!******************************!*\
  !*** ./src/Blog/PostCard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/HelperFunctions */ \"./src/Utils/HelperFunctions.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _PostCard_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostCard.scss */ \"./src/Blog/PostCard.scss\");\n/* harmony import */ var _PostCard_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PostCard_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n // Redux handlers\n\n\n\n\n\nclass PostCard extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      post_id: props.post_id\n    };\n    this.handlePostClick = this.handlePostClick.bind(this);\n  }\n\n  handlePostClick(e) {\n    e.stopPropagation();\n    this.props.history.push(\"/blog/\" + this.props.post_id);\n  }\n\n  render() {\n    const {\n      title,\n      date,\n      summarized_content\n    } = this.props;\n    const formatted_date = Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"format_date\"])(date);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"individual-post-container col-12\",\n      onClick: this.handlePostClick\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row individual-post\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row date\"\n    }, formatted_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row title\"\n    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, summarized_content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row read-more\"\n    }, \"Read More\"))));\n  }\n\n}\n\nPostCard.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  summarized_content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired\n};\n\nfunction mapStateToProps(state, ownProps) {\n  const {\n    posts,\n    id2index\n  } = state.BlogReducer;\n  let this_post = posts[id2index[ownProps.post_id]];\n  return {\n    title: this_post.title.substring(0, 61) + (this_post.title.length > 61 ? \"...\" : \"\"),\n    date: this_post.createtime,\n    summarized_content: this_post.content.join(\" \").substring(0, 200) + \"...\"\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps)(PostCard)));\n\n//# sourceURL=webpack:///./src/Blog/PostCard.js?");

/***/ }),

/***/ "./src/Blog/PostCard.scss":
/*!********************************!*\
  !*** ./src/Blog/PostCard.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Blog/PostCard.scss?");

/***/ }),

/***/ "./src/Blog/PostViewer.js":
/*!********************************!*\
  !*** ./src/Blog/PostViewer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/HelperFunctions */ \"./src/Utils/HelperFunctions.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Redux/BlogActions */ \"./src/Redux/BlogActions.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-document-meta */ \"react-document-meta\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_document_meta__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-share */ \"react-share\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _PostViewer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostViewer.scss */ \"./src/Blog/PostViewer.scss\");\n/* harmony import */ var _PostViewer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PostViewer_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n // Redux handlers\n\n\n\n\n\n\n\n\n\nclass PostViewer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  componentDidMount() {\n    const {\n      dispatch\n    } = this.props;\n    let post_id = this.props.match.params[\"id\"];\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_4__[\"fetch_post_by_id\"])(post_id));\n    window.scrollTo(0, 0); // Need to scroll to top if coming from /blog\n  }\n\n  render() {\n    const {\n      posts\n    } = this.props;\n    let post_id = this.props.match.params[\"id\"];\n    let isPostFetched = posts.length > 0;\n    let meta = {}; // TOOD: Remember that we don't have spinner div developed yet\n\n    if (isPostFetched) {\n      var id2index = this.props.id2index;\n      var thisPost = posts[id2index[post_id]];\n      meta = {\n        title: thisPost.title,\n        description: 'A Post Written by Aaron',\n        canonical: \"https://www.aaronbae.com\" + this.props.location.pathname\n      };\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row post-viewer-container \"\n    }, isPostFetched && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_document_meta__WEBPACK_IMPORTED_MODULE_5___default.a, meta, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-11 offset-md-2 col-md-8 offset-xl-3 col-xl-6 post-viewer-main-col card-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row viewer-information-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-5 no-padding\"\n    }, Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"format_date\"])(thisPost.createtime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-7 no-padding\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"float-right\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"tags-label\"\n    }, \"Tags : \"), thisPost.tags.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      key: index,\n      className: \"tag \" + item\n    }, item + \", \"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row viewer-title-row\"\n    }, thisPost.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row viewer-media-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_6__[\"FacebookShareButton\"], {\n      url: \"https://www.aaronbae.com\" + this.props.location.pathname,\n      quote: thisPost.title + \" from aaronbae.com\",\n      className: \"media-button\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_6__[\"FacebookIcon\"], {\n      size: 20,\n      round: true,\n      bgStyle: {\n        fill: \"#696867\"\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_6__[\"LinkedinShareButton\"], {\n      url: \"https://www.aaronbae.com\" + this.props.location.pathname,\n      title: thisPost.title + \" from aaronbae.com\",\n      summary: thisPost.content.join(\" \").substring(0, 100),\n      source: \"aaronbae.com\",\n      className: \"media-button\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_6__[\"LinkedinIcon\"], {\n      size: 20,\n      round: true,\n      bgStyle: {\n        fill: \"#696867\"\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_6__[\"TwitterShareButton\"], {\n      url: \"https://www.aaronbae.com\" + this.props.location.pathname,\n      title: thisPost.title,\n      className: \"media-button\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_6__[\"TwitterIcon\"], {\n      size: 20,\n      round: true,\n      bgStyle: {\n        fill: \"#696867\"\n      }\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row viewer-content-row\"\n    }, thisPost.content.map((i, key) => {\n      if (Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"isMyImageURL\"])(i)) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          key: key,\n          className: \"aws-image\",\n          src: Object(_Utils_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"convertMyImageURL\"])(i),\n          alt: \"Loaded from AWS\"\n        });\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"content-paragraph\",\n          key: key\n        }, i);\n      }\n    })))));\n  }\n\n}\n\nPostViewer.propTypes = {\n  id2index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  posts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n\nfunction mapStateToProps(state) {\n  const {\n    posts,\n    id2index\n  } = state.BlogReducer;\n  return {\n    id2index: id2index,\n    posts: posts\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(PostViewer));\n\n//# sourceURL=webpack:///./src/Blog/PostViewer.js?");

/***/ }),

/***/ "./src/Blog/PostViewer.scss":
/*!**********************************!*\
  !*** ./src/Blog/PostViewer.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Blog/PostViewer.scss?");

/***/ }),

/***/ "./src/Common/Footer.js":
/*!******************************!*\
  !*** ./src/Common/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.scss */ \"./src/Common/Footer.scss\");\n/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row footer\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"https://github.com/aaronbae\",\n      title: \"GitHub\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"/assets/icons/github.png\",\n      alt: \"GitHub\",\n      className: \"footer-link-icon\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"https://www.linkedin.com/in/aaron-bae/\",\n      title: \"LinkedIn\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"/assets/icons/linkedin.png\",\n      alt: \"LinkedIn\",\n      className: \"footer-link-icon\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"mailto:aaronbae@uw.edu\",\n      title: \"email\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"/assets/icons/gmail.png\",\n      alt: \"Email\",\n      className: \"footer-link-icon\"\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Designed and Built by Aaron Bae\"))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/Common/Footer.js?");

/***/ }),

/***/ "./src/Common/Footer.scss":
/*!********************************!*\
  !*** ./src/Common/Footer.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Common/Footer.scss?");

/***/ }),

/***/ "./src/Common/Header.js":
/*!******************************!*\
  !*** ./src/Common/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Redux_AdminActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Redux/AdminActions */ \"./src/Redux/AdminActions.js\");\n/* harmony import */ var _Redux_BlogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Redux/BlogActions */ \"./src/Redux/BlogActions.js\");\n/* harmony import */ var _Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/RedirectButton */ \"./src/Utils/RedirectButton.js\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.scss */ \"./src/Common/Header.scss\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n // Redux\n\n\n\n\n\n\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.handleLogOut = this.handleLogOut.bind(this);\n  }\n\n  handleLogOut(e) {\n    e.stopPropagation(); // TODO: give a warning\n    // TODO: clear cache\n\n    const {\n      dispatch\n    } = this.props;\n    dispatch(Object(_Redux_AdminActions__WEBPACK_IMPORTED_MODULE_4__[\"sign_out\"])());\n    dispatch(Object(_Redux_BlogActions__WEBPACK_IMPORTED_MODULE_5__[\"clear_posts\"])());\n    this.props.history.push(\"/login\");\n  }\n\n  render() {\n    const {\n      logged_in\n    } = this.props;\n    const path = this.props.history.location.pathname;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"header-container d-flex row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"offset-md-2 col-12 col-md-8 header-inner-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"navbrand\",\n      message: \"Aaron Bae\",\n      route: \"/\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"d-none d-sm-block collapsable\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: path === \"/\" ? \"tab active\" : \"tab\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"navlink\",\n      message: \"Home\",\n      route: \"/\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tab line\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: path.startsWith(\"/blog\") || path.startsWith(\"/admin\") ? \"tab active\" : \"tab\"\n    }, logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"navlink\",\n      message: \"Blog\",\n      route: \"/admin\"\n    }), !logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"navlink\",\n      message: \"Blog\",\n      route: \"/blog\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: path === \"/login\" ? \"tab admin-container active\" : \"admin-container\"\n    }, logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"navlink adminButton\",\n      onClick: this.handleLogOut\n    }, \"Sign Out\"), !logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"navlink adminButton\",\n      message: \"Admin\",\n      route: \"/login\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"d-block d-sm-none dropdown-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"dropdown\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      type: \"button\",\n      \"data-toggle\": \"dropdown\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"menu-icon\",\n      src: \"/assets/icons/hamburger_icon.png\",\n      alt: \"menu\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"dropdown-menu dropdown-menu-right\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"dropdown-item\",\n      message: \"Home\",\n      route: \"/\"\n    }), logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"dropdown-item\",\n      message: \"Blog\",\n      route: \"/admin\"\n    }), !logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"dropdown-item\",\n      message: \"Blog\",\n      route: \"/blog\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"dropdown-divider\"\n    }), logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"dropdown-item\",\n      onClick: this.handleLogOut\n    }, \"Sign Out\"), !logged_in && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_RedirectButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addClasses: \"dropdown-item\",\n      message: \"Admin\",\n      route: \"/login\"\n    })))))));\n  }\n\n}\n\nHeader.propTypes = {\n  logged_in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired\n};\n\nfunction mapStateToProps(state) {\n  return {\n    logged_in: state.AdminReducer.logged_in\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Header)));\n\n//# sourceURL=webpack:///./src/Common/Header.js?");

/***/ }),

/***/ "./src/Common/Header.scss":
/*!********************************!*\
  !*** ./src/Common/Header.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Common/Header.scss?");

/***/ }),

/***/ "./src/Common/Main.js":
/*!****************************!*\
  !*** ./src/Common/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-document-meta */ \"react-document-meta\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_document_meta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./src/Common/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ \"./src/Common/Footer.js\");\n/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Home/Home */ \"./src/Home/Home.js\");\n/* harmony import */ var _Blog_MainBlogPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Blog/MainBlogPage */ \"./src/Blog/MainBlogPage.js\");\n/* harmony import */ var _Blog_PostViewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Blog/PostViewer */ \"./src/Blog/PostViewer.js\");\n/* harmony import */ var _Admin_LogInPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Admin/LogInPage */ \"./src/Admin/LogInPage.js\");\n/* harmony import */ var _Admin_AdminBlog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Admin/AdminBlog */ \"./src/Admin/AdminBlog.js\");\n/* harmony import */ var _Testing_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Testing/Main */ \"./src/Testing/Main.js\");\n/* harmony import */ var _Warnings_NonExistentRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Warnings/NonExistentRoute */ \"./src/Warnings/NonExistentRoute.js\");\n/* harmony import */ var _Main_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Main.scss */ \"./src/Common/Main.scss\");\n/* harmony import */ var _Main_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Main_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _Redux_Store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Redux/Store */ \"./src/Redux/Store.js\");\n/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sentry/react */ \"@sentry/react\");\n/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sentry_react__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n //import NotReady from '../Warnings/NotReady';\n\n\n // Other \n\n\n\n_sentry_react__WEBPACK_IMPORTED_MODULE_15__[\"init\"]({\n  dsn: \"https://eafc03ce34b94dd98b03f1fc08903681@o418535.ingest.sentry.io/5321569\"\n});\n\nclass Main extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  // NOTE THAT path=\"/api/\" is already reserved for backend\n  render() {\n    let meta = {\n      title: \"Aaron Bae | The Software Engineer\",\n      description: 'A Website Built by Aaron',\n      canonical: \"https://www.aaronbae.com/\",\n      meta: {\n        charsset: 'utf-8'\n      }\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n      store: _Redux_Store__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_document_meta__WEBPACK_IMPORTED_MODULE_3___default.a, meta, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container-fluid base_container main-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/\",\n      component: _Home_Home__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/blog\",\n      component: _Blog_MainBlogPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/blog/:id\",\n      component: _Blog_PostViewer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/admin\",\n      component: _Admin_AdminBlog__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/admin\",\n      component: _Admin_AdminBlog__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/login\",\n      component: _Admin_LogInPage__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/test\",\n      component: _Testing_Main__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      component: _Warnings_NonExistentRoute__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/Common/Main.js?");

/***/ }),

/***/ "./src/Common/Main.scss":
/*!******************************!*\
  !*** ./src/Common/Main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Common/Main.scss?");

/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nconst prod = {\n  url: {\n    FILE_URL: \"https://aaronbae.com/api/files/\",\n    POST_URL: \"https://aaronbae.com/api/posts/\",\n    USER_URL: \"https://aaronbae.com/api/users/\"\n  }\n};\nconst dev = {\n  url: {\n    FILE_URL: \"http://localhost:4000/files/\",\n    POST_URL: \"http://localhost:4000/posts/\",\n    USER_URL: \"http://localhost:4000/users/\"\n  }\n};\nconst config =  true ? dev : undefined;\n\n//# sourceURL=webpack:///./src/Constants.js?");

/***/ }),

/***/ "./src/Home/Education.js":
/*!*******************************!*\
  !*** ./src/Home/Education.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Education_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Education.scss */ \"./src/Home/Education.scss\");\n/* harmony import */ var _Education_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Education_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Intro extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row total-section\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row title-section\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"col h3\"\n    }, \"Education\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row card-title-break\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"education-total-content-section\",\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row content-section\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-12 col-lg-3 center education-img-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"education-img\",\n      src: \"/assets/uci_seal_200.png\",\n      alt: \"University of California Irvine\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-12 col-lg-9\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"h6\"\n    }, \"Masters in Computer Science\"), \", \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"University of California - Irvine\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"education-bullets\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Started attending since September 2019.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Focus in natural language processing using transformer based models.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Participating in Center for Machine Learning and Intelligent Systems.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Looking for full time software engineering or data scientist role after graduation\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row content-section\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-12 col-lg-3 center education-img-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"education-img\",\n      src: \"/assets/uw_seal_200.jpg\",\n      alt: \"University of Washington\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-12 col-lg-9\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"h6\"\n    }, \"Bachelor of Science in Mathematics\"), \", \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"University of Washington\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"education-bullets\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Attended from September 2015 until June 2019\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Applicable Mathematics classes such as Matrix Algebra, Differential Equations, and Mathematical Reasoning \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Applicable Data Science classes such as Database Management, Data Structures and Algorithms, and Artificial Intelligence \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Efficient in Python, Java, JavaScript, MySQL, AWS, D3, NodeJS, React, AJAX, Ruby, Sparks\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Abundant research experience from Washington Experimental Mathematics Lab (WXML) and assistantship to graduate researcher at Foster School of Business.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Member of the Sigma Nu Fraternity Gamma Chi Chapter.\"))))))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);\n\n//# sourceURL=webpack:///./src/Home/Education.js?");

/***/ }),

/***/ "./src/Home/Education.scss":
/*!*********************************!*\
  !*** ./src/Home/Education.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Home/Education.scss?");

/***/ }),

/***/ "./src/Home/Home.js":
/*!**************************!*\
  !*** ./src/Home/Home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro */ \"./src/Home/Intro.js\");\n/* harmony import */ var _Education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Education */ \"./src/Home/Education.js\");\n/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.scss */ \"./src/Home/Home.scss\");\n/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TechnicalExperiences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TechnicalExperiences */ \"./src/Home/TechnicalExperiences.js\");\n\n\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row home-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"introduction-container\",\n      className: \"center col-md-12 col-lg-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md 12 col-lg-8\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Education__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TechnicalExperiences__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/Home/Home.js?");

/***/ }),

/***/ "./src/Home/Home.scss":
/*!****************************!*\
  !*** ./src/Home/Home.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Home/Home.scss?");

/***/ }),

/***/ "./src/Home/Intro.js":
/*!***************************!*\
  !*** ./src/Home/Intro.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Intro_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro.scss */ \"./src/Home/Intro.scss\");\n/* harmony import */ var _Intro_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Intro_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Intro extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row introduction-content-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"round profile-img\",\n      src: \"assets/profile2.jpg\",\n      alt: \"profile\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row introduction-content-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      id: \"bio-info\",\n      className: \"col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"row name-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"h2 my-name\"\n    }, \"Aaron Beomjun Bae\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"row bio-one-liner\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Masters in Computer Science\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"row bio-one-liner\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"UC Irvine Class of 2021\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"row bio-one-liner\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Focus on Natural Language Processing\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"row bio-one-liner\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Bachelor of Science in Mathematics\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"row bio-one-liner\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"University of Washington Class of 2019\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"row bio-one-liner\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"/assets/downloadables/resume.pdf\",\n      download: true\n    }, \"Download a copy of my resume\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-section-break\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row introduction-content-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"link-info\",\n      className: \"col-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"https://github.com/aaronbae\",\n      title: \"GitHub\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"/assets/icons/github.png\",\n      alt: \"GitHub\",\n      className: \"external-link-icon\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"https://www.linkedin.com/in/aaron-bae/\",\n      title: \"LinkedIn\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"/assets/icons/linkedin.png\",\n      alt: \"LinkedIn\",\n      className: \"external-link-icon\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"mailto:aaronbae@uw.edu\",\n      title: \"email\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"/assets/icons/gmail.png\",\n      alt: \"Email\",\n      className: \"external-link-icon\"\n    })))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);\n\n//# sourceURL=webpack:///./src/Home/Intro.js?");

/***/ }),

/***/ "./src/Home/Intro.scss":
/*!*****************************!*\
  !*** ./src/Home/Intro.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Home/Intro.scss?");

/***/ }),

/***/ "./src/Home/TechnicalExperienceEntry.js":
/*!**********************************************!*\
  !*** ./src/Home/TechnicalExperienceEntry.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TechnicalExperienceEntry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TechnicalExperienceEntry.scss */ \"./src/Home/TechnicalExperienceEntry.scss\");\n/* harmony import */ var _TechnicalExperienceEntry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TechnicalExperienceEntry_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass TechnicalExperienceEntry extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      logo: props.logo,\n      logo_alt: props.logo_alt,\n      position: props.position,\n      company: props.company,\n      date_formatted: props.date_formatted,\n      roles: props.roles\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row individual-experience\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row experience-title\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"company-logo\",\n      src: this.state.logo,\n      alt: this.state.logo_alt\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"company-info-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"h5 position-title-span\"\n    }, this.state.position), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"time-worked-span\"\n    }, this.state.date_formatted), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"company-name-span\"\n    }, this.state.company))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row experience-description\"\n    }, this.state.roles.map((item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"role-title\"\n      }, item.title, \":\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.description));\n    }))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TechnicalExperienceEntry);\n\n//# sourceURL=webpack:///./src/Home/TechnicalExperienceEntry.js?");

/***/ }),

/***/ "./src/Home/TechnicalExperienceEntry.scss":
/*!************************************************!*\
  !*** ./src/Home/TechnicalExperienceEntry.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Home/TechnicalExperienceEntry.scss?");

/***/ }),

/***/ "./src/Home/TechnicalExperiences.js":
/*!******************************************!*\
  !*** ./src/Home/TechnicalExperiences.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TechnicalExperienceEntry */ \"./src/Home/TechnicalExperienceEntry.js\");\n/* harmony import */ var _TechnicalExperiences_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TechnicalExperiences.scss */ \"./src/Home/TechnicalExperiences.scss\");\n/* harmony import */ var _TechnicalExperiences_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TechnicalExperiences_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass TechnicalExperiences extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row total-section\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row title-section\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"col h3\"\n    }, \"Technical Experiences\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row card-title-break\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row content-section\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      logo: \"/assets/icons/uci.png\",\n      logo_alt: \"university of california, irvine logo\",\n      position: \"Graduate Student Researcher\",\n      company: \"University of California, Irvine\",\n      date_formatted: \"March 2020 - Present\",\n      roles: [{\n        title: \"Professor Padhraic Smyth Research Team\",\n        description: \"As a graduate researcher for Professor Padhraic Smyth, I am working \" + \"on ways to analyze dialogue dataset. Datasets like Switchboard Corpus and ICSI \" + \"Meeting Recording Corpus contains a turn-by-turn grouped utterances along with \" + \"semantic annotations. The goal of the project is to analyze this conversational\" + \"dataset to identify questions in any group conversations and possibly classify\" + \"person-to-person dynamics like leadership qualities.\"\n      }]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row card-section-break\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      logo: \"/assets/icons/uw_logo.png\",\n      logo_alt: \"university of washington logo\",\n      position: \"Undergraduate Researcher\",\n      company: \"University of Washington\",\n      date_formatted: \"Jun 2018 - Jun 2019\",\n      roles: [{\n        title: \"Washington Experimental Mathematics Lab\",\n        description: \"I was invited to work with Professor Christopher Hoffman to \" + \"participate on his Mathematics in Gerrymandering Project. He works to analyze \" + \"search the state space for the ways to draw out the districts. We used C++ and \" + \"Python as the engine of the project, and built NodeJS servers to distribute, \" + \"visualize, and explain the political data we mined.\"\n      }, {\n        title: \"Assitantship to Emisa Nateigh, Ph.D\",\n        description: \"As a lab assistant to Emisa Nateigh, a Ph.D student at the \" + \"University of Washington Foster School of business, I helped to create a \" + \"machine learning system to perform Multi-Tasking Gaussian Process learning \" + \"algorithm on the collected medical data. Mainly, used Python and NumPy to \" + \"carry out the statistical process. Used MatplotLib and D3.js to visualize the\" + \"information.\"\n      }]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row card-section-break\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      logo: \"/assets/icons/dapper.jpg\",\n      logo_alt: \"dapper company logo\",\n      position: \"Backend Software Engineer\",\n      company: \"Dapper Grooming\",\n      date_formatted: \"Jun 2018 - August 2019\",\n      roles: [{\n        title: \"Backend Server Development Team\",\n        description: \"Continuing my intersets in backend web development, I worked with a \" + \"University of Washington alumn who was starting a company called Dapper. The \" + \"company needed a basic web based platform to launch their project, and I helped\" + \"them by creating an AWS server to handle their client traffic.\"\n      }]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row card-section-break\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      logo: \"/assets/icons/crowdcow.jpg\",\n      logo_alt: \"crowd cow company logo\",\n      position: \"Software Engineering Intern\",\n      company: \"Crowd Cow\",\n      date_formatted: \"Jun 2017 - August 2017\",\n      roles: [{\n        title: \"Frontend Developer\",\n        description: \"As a frontend developer, I worked on improving CrowdCow's private\" + \" e-commerce platform by changing the client purchase UI pipeline. Also, \" + \"worked on various features like in-house data visualization dashboard that \" + \"displays company statistics.\"\n      }, {\n        title: \"Backend Developer\",\n        description: \"As a backend developer, I worked on middlman the information \" + \"between the database and the client servers. Main technologies that I used \" + \"were MySQL, Ruby on Rails, Git, Budler, RuboCop, Stripe, and Puma.\"\n      }]\n    })))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TechnicalExperiences);\n\n//# sourceURL=webpack:///./src/Home/TechnicalExperiences.js?");

/***/ }),

/***/ "./src/Home/TechnicalExperiences.scss":
/*!********************************************!*\
  !*** ./src/Home/TechnicalExperiences.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Home/TechnicalExperiences.scss?");

/***/ }),

/***/ "./src/Redux/AdminActions.js":
/*!***********************************!*\
  !*** ./src/Redux/AdminActions.js ***!
  \***********************************/
/*! exports provided: SIGN_OUT, FAILED_ADMIN_PASSWORD, SUCCEEDED_ADMIN_PASSWORD, CHANGE_EDIT_MODE, VIEWPOST, sign_out, check_account, change_edit_mode, viewpost, upload_image, create_new_post, save_local_changes, delete_post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT\", function() { return SIGN_OUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FAILED_ADMIN_PASSWORD\", function() { return FAILED_ADMIN_PASSWORD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUCCEEDED_ADMIN_PASSWORD\", function() { return SUCCEEDED_ADMIN_PASSWORD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_EDIT_MODE\", function() { return CHANGE_EDIT_MODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VIEWPOST\", function() { return VIEWPOST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sign_out\", function() { return sign_out; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"check_account\", function() { return check_account; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"change_edit_mode\", function() { return change_edit_mode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewpost\", function() { return viewpost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"upload_image\", function() { return upload_image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create_new_post\", function() { return create_new_post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"save_local_changes\", function() { return save_local_changes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delete_post\", function() { return delete_post; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/Constants.js\");\n/* harmony import */ var _BlogActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogActions */ \"./src/Redux/BlogActions.js\");\n\n\nconst SIGN_OUT = \"SIGN_OUT\";\nconst FAILED_ADMIN_PASSWORD = \"FAILED_ADMIN_PASSWORD\";\nconst SUCCEEDED_ADMIN_PASSWORD = \"SUCCEEDED_ADMIN_PASSWORD\";\nconst CHANGE_EDIT_MODE = \"CHANGE_EDIT_MODE\";\nconst VIEWPOST = \"VIEW_POST\"; // Admin Actions\n\nfunction sign_out() {\n  return {\n    type: SIGN_OUT,\n    receivedAt: Date.now()\n  };\n}\n\nfunction receive_account_results(res) {\n  if (res.status === 400) {\n    return {\n      type: FAILED_ADMIN_PASSWORD,\n      receivedAt: Date.now()\n    };\n  }\n\n  return {\n    type: SUCCEEDED_ADMIN_PASSWORD,\n    receivedAt: Date.now()\n  };\n}\n\nfunction check_account(id, password) {\n  let data = {\n    login_id: id,\n    login_password: password\n  };\n  return dispatch => {\n    var url = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.USER_URL + \"login\";\n    fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    }).then(res => dispatch(receive_account_results(res)));\n  };\n} // UI Changing Actions\n\nfunction change_edit_mode(boolean_value) {\n  return {\n    type: CHANGE_EDIT_MODE,\n    edit_mode: boolean_value\n  };\n}\nfunction viewpost(post_id) {\n  return {\n    type: VIEWPOST,\n    post_id: post_id\n  };\n} // Data Manipulating Actions\n\nfunction upload_image(file, post, index, paragraph_index) {\n  return dispatch => {\n    var url = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.FILE_URL + 'upload';\n    const data = new FormData();\n    data.append('file', file);\n    fetch(url, {\n      method: 'POST',\n      body: data\n    }).then(res => res.json()).then(res => {\n      let new_content = [...post.content];\n      new_content[paragraph_index] = res.url;\n      let new_post = { ...post,\n        content: [...new_content]\n      };\n      dispatch(Object(_BlogActions__WEBPACK_IMPORTED_MODULE_1__[\"update_post\"])(new_post, index));\n    });\n  };\n}\nfunction create_new_post() {\n  return dispatch => {\n    var url = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.POST_URL + \"add/\";\n    fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({})\n    }).then(res => res.json()).then(res => {\n      dispatch(Object(_BlogActions__WEBPACK_IMPORTED_MODULE_1__[\"add_new_post\"])(res.post));\n      dispatch(viewpost(0));\n      dispatch(change_edit_mode(true));\n    });\n  };\n}\nfunction save_local_changes(post) {\n  var url = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.POST_URL + \"update/\" + post._id.toString();\n\n  return dispatch => {\n    fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(post)\n    }).then(res => dispatch(change_edit_mode(false)));\n  };\n}\nfunction delete_post(post_id) {\n  var url = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.POST_URL + \"delete/\" + post_id.toString();\n  return dispatch => {\n    fetch(url, {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(res => res.json()).then(() => dispatch(Object(_BlogActions__WEBPACK_IMPORTED_MODULE_1__[\"fetch_posts\"])())).then(() => dispatch(change_edit_mode(false)));\n  };\n}\n\n//# sourceURL=webpack:///./src/Redux/AdminActions.js?");

/***/ }),

/***/ "./src/Redux/AdminReducer.js":
/*!***********************************!*\
  !*** ./src/Redux/AdminReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AdminActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminActions */ \"./src/Redux/AdminActions.js\");\n // The initial application state\n\nlet initialState = {\n  failed_attempt: false,\n  logged_in: false,\n  edit_mode: false,\n  selected_post: -1\n}; // Takes care of changing the application state\n\nfunction AdminReducer(state = initialState, action) {\n  switch (action.type) {\n    case _AdminActions__WEBPACK_IMPORTED_MODULE_0__[\"VIEWPOST\"]:\n      return { ...state,\n        selected_post: action.post_id\n      };\n\n    case _AdminActions__WEBPACK_IMPORTED_MODULE_0__[\"SIGN_OUT\"]:\n      return { ...state,\n        logged_in: false\n      };\n\n    case _AdminActions__WEBPACK_IMPORTED_MODULE_0__[\"FAILED_ADMIN_PASSWORD\"]:\n      return { ...state,\n        failed_attempt: true\n      };\n\n    case _AdminActions__WEBPACK_IMPORTED_MODULE_0__[\"SUCCEEDED_ADMIN_PASSWORD\"]:\n      return { ...state,\n        failed_attempt: false,\n        logged_in: true\n      };\n\n    case _AdminActions__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_EDIT_MODE\"]:\n      return { ...state,\n        edit_mode: action.edit_mode\n      };\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminReducer);\n\n//# sourceURL=webpack:///./src/Redux/AdminReducer.js?");

/***/ }),

/***/ "./src/Redux/BlogActions.js":
/*!**********************************!*\
  !*** ./src/Redux/BlogActions.js ***!
  \**********************************/
/*! exports provided: RECEIVE_POSTS, UPDATE_POST, CLEAR_POSTS, ADD_NEW_POST, ADD_NEW_PARAGRAPH, REMOVE_PARAGRAPH, remove_paragraph, add_new_paragraph, add_new_post, update_post, clear_posts, fetch_public_posts, fetch_posts, fetch_post_by_id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_POSTS\", function() { return RECEIVE_POSTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_POST\", function() { return UPDATE_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_POSTS\", function() { return CLEAR_POSTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_NEW_POST\", function() { return ADD_NEW_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_NEW_PARAGRAPH\", function() { return ADD_NEW_PARAGRAPH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_PARAGRAPH\", function() { return REMOVE_PARAGRAPH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove_paragraph\", function() { return remove_paragraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add_new_paragraph\", function() { return add_new_paragraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add_new_post\", function() { return add_new_post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update_post\", function() { return update_post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear_posts\", function() { return clear_posts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch_public_posts\", function() { return fetch_public_posts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch_posts\", function() { return fetch_posts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch_post_by_id\", function() { return fetch_post_by_id; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/Constants.js\");\n\nconst RECEIVE_POSTS = \"RECEIVE_POSTS\";\nconst UPDATE_POST = \"UPDATE_POST\";\nconst CLEAR_POSTS = \"CLEAR_POSTS\";\nconst ADD_NEW_POST = \"ADD_NEW_POST\";\nconst ADD_NEW_PARAGRAPH = \"ADD_NEW_PARAGRAPH\";\nconst REMOVE_PARAGRAPH = \"REMOVE_PARAGRAPH\"; // TERMINALS\n\nfunction remove_paragraph(post_index, paragraph_index) {\n  return {\n    type: REMOVE_PARAGRAPH,\n    post_index: post_index,\n    paragraph_index: paragraph_index\n  };\n}\nfunction add_new_paragraph(post_index, paragraph_index, initial_content) {\n  return {\n    type: ADD_NEW_PARAGRAPH,\n    post_index: post_index,\n    paragraph_index: paragraph_index,\n    initial_content: initial_content\n  };\n}\nfunction add_new_post(new_post) {\n  return {\n    type: ADD_NEW_POST,\n    new_post: new_post\n  };\n}\nfunction update_post(new_post, index) {\n  return {\n    type: UPDATE_POST,\n    new_post: new_post,\n    index: index\n  };\n}\nfunction clear_posts() {\n  return {\n    type: CLEAR_POSTS,\n    posts: [],\n    id2index: {}\n  };\n}\n\nfunction receive_posts(res) {\n  var id2index = {};\n\n  if (!Array.isArray(res)) {\n    res = [res];\n  }\n\n  for (var index in res) {\n    id2index[res[index]._id] = index;\n  }\n\n  return {\n    type: RECEIVE_POSTS,\n    posts: res,\n    id2index: id2index,\n    receivedAt: Date.now()\n  };\n} // PROCESSORS\n\n\nfunction fetch_public_posts() {\n  return dispatch => {\n    fetch(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.POST_URL + \"public\").then(res => res.json()).then(res => dispatch(receive_posts(res)));\n  };\n}\nfunction fetch_posts() {\n  return dispatch => {\n    fetch(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.POST_URL).then(res => res.json()).then(res => dispatch(receive_posts(res)));\n  };\n}\nfunction fetch_post_by_id(post_id) {\n  return dispatch => {\n    fetch(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.POST_URL + post_id).then(res => res.json()).then(res => dispatch(receive_posts(res)));\n  };\n}\n\n//# sourceURL=webpack:///./src/Redux/BlogActions.js?");

/***/ }),

/***/ "./src/Redux/BlogReducer.js":
/*!**********************************!*\
  !*** ./src/Redux/BlogReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BlogActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogActions */ \"./src/Redux/BlogActions.js\");\n // The initial application state\n\nlet initialState = {\n  id2index: {},\n  posts: []\n}; // Takes care of changing the application state\n\nfunction BlogReducer(state = initialState, action) {\n  var new_posts = [...state.posts];\n\n  switch (action.type) {\n    case _BlogActions__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_PARAGRAPH\"]:\n      new_posts[action.post_index].content.splice(action.paragraph_index, 1);\n      return { ...state,\n        posts: new_posts\n      };\n\n    case _BlogActions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_NEW_PARAGRAPH\"]:\n      new_posts[action.post_index].content.splice(parseInt(action.paragraph_index) + 1, 0, action.initial_content);\n      return { ...state,\n        posts: new_posts\n      };\n\n    case _BlogActions__WEBPACK_IMPORTED_MODULE_0__[\"CLEAR_POSTS\"]:\n      return { ...state,\n        posts: action.posts,\n        id2index: action.id2index\n      };\n\n    case _BlogActions__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_POST\"]:\n      new_posts[action.index] = action.new_post;\n      return { ...state,\n        posts: new_posts\n      };\n\n    case _BlogActions__WEBPACK_IMPORTED_MODULE_0__[\"RECEIVE_POSTS\"]:\n      return { ...state,\n        posts: action.posts,\n        id2index: action.id2index\n      };\n\n    case _BlogActions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_NEW_POST\"]:\n      new_posts.unshift(action.new_post);\n      return { ...state,\n        posts: new_posts\n      };\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogReducer);\n\n//# sourceURL=webpack:///./src/Redux/BlogReducer.js?");

/***/ }),

/***/ "./src/Redux/Store.js":
/*!****************************!*\
  !*** ./src/Redux/Store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BlogReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogReducer */ \"./src/Redux/BlogReducer.js\");\n/* harmony import */ var _AdminReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminReducer */ \"./src/Redux/AdminReducer.js\");\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  BlogReducer: _BlogReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  AdminReducer: _AdminReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(rootReducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/Redux/Store.js?");

/***/ }),

/***/ "./src/Testing/Editable.js":
/*!*********************************!*\
  !*** ./src/Testing/Editable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Editable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editable.scss */ \"./src/Testing/Editable.scss\");\n/* harmony import */ var _Editable_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Editable_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Editable extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      rows: [\"\"],\n      index: 0\n    };\n    this.clickHandler = this.clickHandler.bind(this);\n    this.keyDownHandler = this.keyDownHandler.bind(this);\n  }\n\n  clickHandler(event) {\n    this.setState({\n      index: event.target.tabIndex\n    });\n  }\n\n  keyDownHandler(event) {\n    event.preventDefault();\n    var original = this.state.rows;\n    var index = this.state.index;\n\n    if (event.key.length === 1) {\n      original[index] += event.key;\n    } else if (event.key === \"Enter\") {\n      original.splice(index + 1, 0, \"\"); // Shift focus\n\n      index += 1;\n    } else if (event.key === \"Backspace\") {\n      if (original[index] === \"\") {\n        original.splice(index, 1);\n        index -= 1;\n      } else {\n        original[index] = original[index].slice(0, -1);\n      }\n    }\n\n    this.setState({\n      rows: original,\n      index: index\n    });\n  }\n\n  render() {\n    const {\n      rows\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\",\n      id: \"editable-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"row \",\n      contentEditable: true\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"row \",\n      contentEditable: true\n    }), rows.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index,\n      tabIndex: index,\n      className: \"row editable\",\n      onClick: this.clickHandler,\n      onKeyDown: this.keyDownHandler\n    }, item))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editable);\n\n//# sourceURL=webpack:///./src/Testing/Editable.js?");

/***/ }),

/***/ "./src/Testing/Editable.scss":
/*!***********************************!*\
  !*** ./src/Testing/Editable.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Testing/Editable.scss?");

/***/ }),

/***/ "./src/Testing/FileSender.js":
/*!***********************************!*\
  !*** ./src/Testing/FileSender.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass FileSender extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      selectedFile: null\n    };\n    this.onChangeHandler = this.onChangeHandler.bind(this);\n    this.onClickHandler = this.onClickHandler.bind(this);\n  }\n\n  onChangeHandler(event) {\n    this.setState({\n      selectedFile: event.target.files[0],\n      loaded: 0\n    });\n  }\n\n  onClickHandler() {\n    const data = new FormData();\n    data.append('file', this.state.selectedFile);\n    fetch(\"http://localhost:4000/files/upload\", {\n      method: 'POST',\n      body: data\n    }).then(function (res) {\n      console.log(res);\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row sender-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"file\",\n      id: \"file\",\n      name: \"file\",\n      onChange: this.onChangeHandler,\n      style: {\n        border: \"solid 1px black\",\n        width: \"100%\",\n        marginBottom: \"2px\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"file\"\n    }, \"SHIT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      className: \"btn btn-success btn-block\",\n      onClick: this.onClickHandler\n    }, \"Upload\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileSender);\n\n//# sourceURL=webpack:///./src/Testing/FileSender.js?");

/***/ }),

/***/ "./src/Testing/Main.js":
/*!*****************************!*\
  !*** ./src/Testing/Main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Editable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editable */ \"./src/Testing/Editable.js\");\n/* harmony import */ var _FileSender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileSender */ \"./src/Testing/FileSender.js\");\n\n\n\n\nclass Main extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\",\n      style: {\n        minHeight: \"80vh\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Editable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FileSender__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/Testing/Main.js?");

/***/ }),

/***/ "./src/Utils/HelperFunctions.js":
/*!**************************************!*\
  !*** ./src/Utils/HelperFunctions.js ***!
  \**************************************/
/*! exports provided: format_date, isMyImageURL, convertMyImageURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"format_date\", function() { return format_date; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMyImageURL\", function() { return isMyImageURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertMyImageURL\", function() { return convertMyImageURL; });\nfunction format_date(date_string) {\n  var given_date = new Date(date_string);\n  var corrected_d = new Date(given_date.getTime() - new Date().getTimezoneOffset() * 60000);\n  var month = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  var days = [\"Monday\", \"Tueday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\", \"Sunday\"];\n  var result = days[corrected_d.getDay()] + \", \" + month[corrected_d.getMonth()] + \" \" + corrected_d.getDate() + \", \" + corrected_d.getFullYear();\n  return result;\n}\nfunction isMyImageURL(str) {\n  if (!str) return false;\n  str = str.toLowerCase();\n  return str.startsWith(\"https://aaronbaebucket.s3\") && (str.endsWith(\"jpg\") || str.endsWith(\"png\"));\n}\nfunction convertMyImageURL(str) {\n  let re = new RegExp('https://aaronbaebucket.s3..*/');\n  return str.replace(re, \"https://www.aaronbae.com/api/files/\");\n}\n\n//# sourceURL=webpack:///./src/Utils/HelperFunctions.js?");

/***/ }),

/***/ "./src/Utils/RedirectButton.js":
/*!*************************************!*\
  !*** ./src/Utils/RedirectButton.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RedirectButton_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedirectButton.scss */ \"./src/Utils/RedirectButton.scss\");\n/* harmony import */ var _RedirectButton_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RedirectButton_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass RedirectButton extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      addClasses: props.addClasses + \" link-button\",\n      message: props.message,\n      route: props.route\n    };\n    this.handleRedirect = this.handleRedirect.bind(this);\n  }\n\n  handleRedirect(route) {\n    this.props.history.push(route);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: this.state.addClasses,\n      onClick: this.handleRedirect.bind(this, this.state.route)\n    }, this.state.message);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(RedirectButton));\n\n//# sourceURL=webpack:///./src/Utils/RedirectButton.js?");

/***/ }),

/***/ "./src/Utils/RedirectButton.scss":
/*!***************************************!*\
  !*** ./src/Utils/RedirectButton.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Utils/RedirectButton.scss?");

/***/ }),

/***/ "./src/Utils/Toggle.js":
/*!*****************************!*\
  !*** ./src/Utils/Toggle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle.scss */ \"./src/Utils/Toggle.scss\");\n/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Toggle extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props); // calculate height\n\n    var width = parseInt(props.width.slice(0, -2)) * 0.8;\n    var height = (width / 1.7).toString() + \"px\";\n    this.state = {\n      checked: props.checked,\n      click_behavior: props.click_behavior,\n      style_object: {\n        width: width.toString() + \"px\",\n        height: height\n      }\n    };\n  }\n\n  componentDidUpdate(prevProps) {\n    if (prevProps.checked !== this.props.checked) {\n      this.setState({\n        checked: this.props.checked\n      });\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"public-toggle-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"switch\",\n      style: this.state.style_object\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"checkbox\",\n      checked: this.state.checked,\n      onChange: this.state.click_behavior\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"slider round\"\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\n\n//# sourceURL=webpack:///./src/Utils/Toggle.js?");

/***/ }),

/***/ "./src/Utils/Toggle.scss":
/*!*******************************!*\
  !*** ./src/Utils/Toggle.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Utils/Toggle.scss?");

/***/ }),

/***/ "./src/Warnings/NonExistentRoute.js":
/*!******************************************!*\
  !*** ./src/Warnings/NonExistentRoute.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotReady_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotReady.scss */ \"./src/Warnings/NotReady.scss\");\n/* harmony import */ var _NotReady_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NotReady_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass NonExistentRoute extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row all-notready-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"jumbotron\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"display-4\"\n    }, \"This Page Doesn't Exist...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"lead\"\n    }, \"Looks like you are trying to reach a page that does not exist. Check your URL one more time! Meanwhile, here is a cool link below!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      className: \"btn btn-primary btn-lg\",\n      href: \"https://www.youtube.com/watch?v=DNWWi8RYzhM\",\n      role: \"button\"\n    }, \"Surprise Link\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NonExistentRoute);\n\n//# sourceURL=webpack:///./src/Warnings/NonExistentRoute.js?");

/***/ }),

/***/ "./src/Warnings/NotReady.scss":
/*!************************************!*\
  !*** ./src/Warnings/NotReady.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Warnings/NotReady.scss?");

/***/ }),

/***/ "@sentry/react":
/*!********************************!*\
  !*** external "@sentry/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sentry/react\");\n\n//# sourceURL=webpack:///external_%22@sentry/react%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-document-meta":
/*!**************************************!*\
  !*** external "react-document-meta" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-document-meta\");\n\n//# sourceURL=webpack:///external_%22react-document-meta%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-share\");\n\n//# sourceURL=webpack:///external_%22react-share%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });