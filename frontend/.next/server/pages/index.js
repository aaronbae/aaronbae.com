module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Home/Education.js":
/*!******************************************!*\
  !*** ./src/components/Home/Education.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Education; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_education_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home/education.css */ "./src/styles/Home/education.css");
/* harmony import */ var _styles_Home_education_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_education_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\frontend\\src\\components\\Home\\Education.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Education() {
  return __jsx("div", {
    className: "card-wrapper education-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Education"), __jsx("div", {
    className: "education-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://uci.edu/about/index.php",
    className: "education-img-wrapper",
    title: "More about University of California, Irvine",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "education-img",
    src: "/uci_seal_200.png",
    alt: "University of California Irvine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "degree",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Masters in Computer Science"), ",", __jsx("a", {
    href: "https://uci.edu/about/index.php",
    className: "university-link",
    title: "More about University of California, Irvine",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "University of California - Irvine"), __jsx("ul", {
    className: "education-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Started attending since September 2019."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Focus in natural language processing using transformer based models."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Participating in Center for Machine Learning and Intelligent Systems."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Looking for full time software engineering or data scientist role after graduation")))), __jsx("div", {
    className: "education-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.washington.edu/about/",
    className: "education-img-wrapper",
    title: "More about University of Washington",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "education-img",
    src: "/uw_seal_200.jpg",
    alt: "University of Washington",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "degree",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Bachelor of Science in Mathematics"), __jsx("a", {
    href: "https://www.washington.edu/about/",
    className: "university-link",
    title: "More about University of Washington",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "University of Washington"), __jsx("ul", {
    className: "education-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Attended from September 2015 until June 2019"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Applicable Mathematics classes such as Matrix Algebra, Differential Equations, and Mathematical Reasoning "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Applicable Data Science classes such as Database Management, Data Structures and Algorithms, and Artificial Intelligence "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Efficient in Python, Java, JavaScript, MySQL, AWS, D3, NodeJS, React, AJAX, Ruby, Sparks"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Abundant research experience from Washington Experimental Mathematics Lab (WXML) and assistantship to graduate researcher at Foster School of Business."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Member of the Sigma Nu Fraternity Gamma Chi Chapter.")))));
}

/***/ }),

/***/ "./src/components/Home/Introduction.js":
/*!*********************************************!*\
  !*** ./src/components/Home/Introduction.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Introduction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_introduction_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home/introduction.css */ "./src/styles/Home/introduction.css");
/* harmony import */ var _styles_Home_introduction_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_introduction_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\frontend\\src\\components\\Home\\Introduction.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Introduction() {
  return __jsx("div", {
    className: "card-wrapper introduction-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("img", {
    id: "profile-img",
    src: "profile-small.jpg",
    alt: "profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx("ul", {
    id: "bio-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Aaron Beomjun Bae"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Masters in Computer Science"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "UC Irvine Class of 2021"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Focus on Natural Language Processing"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Bachelor of Science in Mathematics"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "University of Washington Class of 2019"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "downloadables/resume.pdf",
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Download a copy of my resume"))), __jsx("div", {
    className: "card-section-break",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "intro-link-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://github.com/aaronbae",
    target: "_blank",
    title: "GitHub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/github.png",
    alt: "GitHub",
    className: "intro-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/aaron-bae/",
    target: "_blank",
    title: "LinkedIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/linkedin.png",
    alt: "LinkedIn",
    className: "intro-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "mailto:aaron@aaronbae.com",
    title: "email",
    target: "popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/gmail.png",
    alt: "Email",
    className: "intro-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/Home/TechnicalExperienceEntry.js":
/*!*********************************************************!*\
  !*** ./src/components/Home/TechnicalExperienceEntry.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TechincalExperienceEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_technical_experience_entry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home/technical-experience-entry.css */ "./src/styles/Home/technical-experience-entry.css");
/* harmony import */ var _styles_Home_technical_experience_entry_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_technical_experience_entry_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\frontend\\src\\components\\Home\\TechnicalExperienceEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function TechincalExperienceEntry(props) {
  // TODO: info validation
  return __jsx("div", {
    className: "individual-experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: props.url,
    target: "_blank",
    title: "More About Washington Experimental Mathematics Lab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "company-logo",
    src: props.logo,
    alt: props.logo_alt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "company-info-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "position-title-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, props.position), __jsx("span", {
    className: "time-worked-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, props.date_formatted), __jsx("a", {
    href: props.url,
    target: "_blank",
    className: "te-company-link",
    title: "More about the Company",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "company-name-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, props.company))), props.children);
}

/***/ }),

/***/ "./src/components/Home/TechnicalExperiences.js":
/*!*****************************************************!*\
  !*** ./src/components/Home/TechnicalExperiences.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TechincalExperiences; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_technical_experiences_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home/technical-experiences.css */ "./src/styles/Home/technical-experiences.css");
/* harmony import */ var _styles_Home_technical_experiences_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_technical_experiences_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TechnicalExperienceEntry */ "./src/components/Home/TechnicalExperienceEntry.js");
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\frontend\\src\\components\\Home\\TechnicalExperiences.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TechincalExperiences() {
  return __jsx("div", {
    className: "card-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "card-title techincal-experience-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Technical Experiences"), __jsx("div", {
    className: "tech-experience-entry-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(_TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logo: "/icons/uci.png",
    logo_alt: "university of california, irvine logo",
    position: "Computer Science Researcher",
    company: "University of California, Irvine",
    date_formatted: "March 2020 - Present",
    url: "https://uci.edu/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "role-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.ics.uci.edu/~smyth/",
    className: "experience-external-links",
    target: "_blank",
    title: "More About Professor Smyth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Professor Padhraic Smyth Research:")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "As a graduate researcher for Professor Padhraic Smyth, I am working on ways to analyze dialogue dataset. Datasets like Switchboard Corpus and ICSI Meeting Recording Corpus contains turn-by-turn transcripts from a conversation along with a few semantic annotations. The goal of the project is to analyze this conversational dataset to develop a method to quantify the quality of information exchange."))), __jsx("div", {
    className: "card-section-break",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logo: "/icons/uw_logo.png",
    logo_alt: "university of washington logo",
    position: "Computer Science Researcher",
    company: "University of Washington",
    date_formatted: "Jun 2018 - Jun 2019",
    url: "https://www.washington.edu/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "role-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://math.washington.edu/events/series/washington-experimental-mathematics-lab",
    className: "experience-external-links",
    target: "_blank",
    title: "More About Washington Experimental Mathematics Lab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "Washington Experimental Mathematics Lab:")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "I was invited to work with Professor Christopher Hoffman to participate on his Mathematics in Gerrymandering Project. He works to analyze search the state space for the ways to draw out the districts. We used C++ and Python as the engine of the project, and built NodeJS servers to distribute, visualize, and explain the political data we mined.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "role-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Assitantship to Emisa Nateigh, Ph.D:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "As a lab assistant to Emisa Nateigh, a Ph.D student at the University of Washington Foster School of business, I helped to create a machine learning system to perform Multi-Tasking Gaussian Process learning algorithm on the collected medical data. Mainly, used Python and NumPy to carry out the statistical process. Used MatplotLib and D3.js to visualize the information."))), __jsx("div", {
    className: "card-section-break",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx(_TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logo: "/icons/dapper.jpg",
    logo_alt: "dapper company logo",
    position: "Backend Software Engineer",
    company: "Dapper Grooming",
    date_formatted: "Jun 2018 - August 2019",
    url: "https://dappergrooming.co/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "role-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://dappergrooming.co/",
    className: "experience-external-links",
    target: "_blank",
    title: "More About Dapper Grooming - Seattle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "Backend Development Team:")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "Continuing my intersets in backend web development, I worked with a University of Washington alumn who was starting a company called Dapper. The company needed a basic web based platform to launch their project, and I helped them by creating an AWS server to handle their client traffic."))), __jsx("div", {
    className: "card-section-break",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), __jsx(_TechnicalExperienceEntry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logo: "/icons/crowdcow.jpg",
    logo_alt: "crowd cow company logo",
    position: "Software Engineering Intern",
    company: "Crowd Cow",
    date_formatted: "Jun 2017 - August 2017",
    url: "https://www.crowdcow.com/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "role-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.crowdcow.com/",
    className: "experience-external-links",
    target: "_blank",
    title: "More About Crowd Cow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, "Frontend Developer:")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "As a frontend developer, I worked on improving CrowdCow's private e-commerce platform by changing the client purchase UI pipeline. Also, worked on various features like in-house data visualization dashboard that displays company statistics.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "role-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.crowdcow.com/",
    className: "experience-external-links",
    target: "_blank",
    title: "More About Crowd Cow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Backend Developer:")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "As a backend developer, I worked on middlman the information between the database and the client servers. Main technologies that I used were MySQL, Ruby on Rails, Git, Bundler, RuboCop, Stripe, and Puma.")))));
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Introduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Introduction */ "./src/components/Home/Introduction.js");
/* harmony import */ var _components_Home_Education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Education */ "./src/components/Home/Education.js");
/* harmony import */ var _components_Home_TechnicalExperiences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/TechnicalExperiences */ "./src/components/Home/TechnicalExperiences.js");
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_home_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\aaronbae.com\\frontend\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  return __jsx("div", {
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "home-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_components_Home_Introduction__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "home-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_components_Home_Education__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(_components_Home_TechnicalExperiences__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/Home/education.css":
/*!***************************************!*\
  !*** ./src/styles/Home/education.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Home/introduction.css":
/*!******************************************!*\
  !*** ./src/styles/Home/introduction.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Home/technical-experience-entry.css":
/*!********************************************************!*\
  !*** ./src/styles/Home/technical-experience-entry.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Home/technical-experiences.css":
/*!***************************************************!*\
  !*** ./src/styles/Home/technical-experiences.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9FZHVjYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9JbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9UZWNobmljYWxFeHBlcmllbmNlRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9UZWNobmljYWxFeHBlcmllbmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJFZHVjYXRpb24iLCJJbnRyb2R1Y3Rpb24iLCJUZWNoaW5jYWxFeHBlcmllbmNlRW50cnkiLCJwcm9wcyIsInVybCIsImxvZ28iLCJsb2dvX2FsdCIsInBvc2l0aW9uIiwiZGF0ZV9mb3JtYXR0ZWQiLCJjb21wYW55IiwiY2hpbGRyZW4iLCJUZWNoaW5jYWxFeHBlcmllbmNlcyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1C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QTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtTkFSRixDQXZCRixDQXhGRixDQUZGLENBREY7QUFvSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQ0U7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUMsV0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKRixDQURGO0FBV0Q7O0FBQ2NBLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvSG9tZS9lZHVjYXRpb24uY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWR1Y2F0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtd3JhcHBlciBlZHVjYXRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5FZHVjYXRpb248L3A+IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdWNpLmVkdS9hYm91dC9pbmRleC5waHBcIiBjbGFzc05hbWU9XCJlZHVjYXRpb24taW1nLXdyYXBwZXJcIiBcclxuICAgICAgICAgIHRpdGxlPVwiTW9yZSBhYm91dCBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEsIElydmluZVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJlZHVjYXRpb24taW1nXCIgc3JjPVwiL3VjaV9zZWFsXzIwMC5wbmdcIiBhbHQ9XCJVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEgSXJ2aW5lXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlZ3JlZVwiPk1hc3RlcnMgaW4gQ29tcHV0ZXIgU2NpZW5jZTwvc3Bhbj4sIFxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdWNpLmVkdS9hYm91dC9pbmRleC5waHBcIiAgY2xhc3NOYW1lPVwidW5pdmVyc2l0eS1saW5rXCIgXHJcbiAgICAgICAgICAgIHRpdGxlPVwiTW9yZSBhYm91dCBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEsIElydmluZVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEgLSBJcnZpbmVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJlZHVjYXRpb24tYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICA8bGk+U3RhcnRlZCBhdHRlbmRpbmcgc2luY2UgU2VwdGVtYmVyIDIwMTkuPC9saT5cclxuICAgICAgICAgICAgPGxpPkZvY3VzIGluIG5hdHVyYWwgbGFuZ3VhZ2UgcHJvY2Vzc2luZyB1c2luZyB0cmFuc2Zvcm1lciBiYXNlZCBtb2RlbHMuPC9saT5cclxuICAgICAgICAgICAgPGxpPlBhcnRpY2lwYXRpbmcgaW4gQ2VudGVyIGZvciBNYWNoaW5lIExlYXJuaW5nIGFuZCBJbnRlbGxpZ2VudCBTeXN0ZW1zLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Mb29raW5nIGZvciBmdWxsIHRpbWUgc29mdHdhcmUgZW5naW5lZXJpbmcgb3IgZGF0YSBzY2llbnRpc3Qgcm9sZSBhZnRlciBncmFkdWF0aW9uPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lndhc2hpbmd0b24uZWR1L2Fib3V0L1wiIGNsYXNzTmFtZT1cImVkdWNhdGlvbi1pbWctd3JhcHBlclwiIFxyXG4gICAgICAgICAgdGl0bGU9XCJNb3JlIGFib3V0IFVuaXZlcnNpdHkgb2YgV2FzaGluZ3RvblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJlZHVjYXRpb24taW1nXCIgc3JjPVwiL3V3X3NlYWxfMjAwLmpwZ1wiIGFsdD1cIlVuaXZlcnNpdHkgb2YgV2FzaGluZ3RvblwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWdyZWVcIj5CYWNoZWxvciBvZiBTY2llbmNlIGluIE1hdGhlbWF0aWNzPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lndhc2hpbmd0b24uZWR1L2Fib3V0L1wiIGNsYXNzTmFtZT1cInVuaXZlcnNpdHktbGlua1wiIFxyXG4gICAgICAgICAgICB0aXRsZT1cIk1vcmUgYWJvdXQgVW5pdmVyc2l0eSBvZiBXYXNoaW5ndG9uXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIFVuaXZlcnNpdHkgb2YgV2FzaGluZ3RvblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImVkdWNhdGlvbi1idWxsZXRzXCI+XHJcbiAgICAgICAgICAgIDxsaT5BdHRlbmRlZCBmcm9tIFNlcHRlbWJlciAyMDE1IHVudGlsIEp1bmUgMjAxOTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5BcHBsaWNhYmxlIE1hdGhlbWF0aWNzIGNsYXNzZXMgc3VjaCBhcyBNYXRyaXggQWxnZWJyYSwgRGlmZmVyZW50aWFsIEVxdWF0aW9ucywgYW5kIE1hdGhlbWF0aWNhbCBSZWFzb25pbmcgPC9saT5cclxuICAgICAgICAgICAgPGxpPkFwcGxpY2FibGUgRGF0YSBTY2llbmNlIGNsYXNzZXMgc3VjaCBhcyBEYXRhYmFzZSBNYW5hZ2VtZW50LCBEYXRhIFN0cnVjdHVyZXMgYW5kIEFsZ29yaXRobXMsIGFuZCBBcnRpZmljaWFsIEludGVsbGlnZW5jZSA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+RWZmaWNpZW50IGluIFB5dGhvbiwgSmF2YSwgSmF2YVNjcmlwdCwgTXlTUUwsIEFXUywgRDMsIE5vZGVKUywgUmVhY3QsIEFKQVgsIFJ1YnksIFNwYXJrczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5BYnVuZGFudCByZXNlYXJjaCBleHBlcmllbmNlIGZyb20gV2FzaGluZ3RvbiBFeHBlcmltZW50YWwgTWF0aGVtYXRpY3MgTGFiIChXWE1MKSBhbmQgYXNzaXN0YW50c2hpcCB0byBncmFkdWF0ZSByZXNlYXJjaGVyIGF0IEZvc3RlciBTY2hvb2wgb2YgQnVzaW5lc3MuPC9saT5cclxuICAgICAgICAgICAgPGxpPk1lbWJlciBvZiB0aGUgU2lnbWEgTnUgRnJhdGVybml0eSBHYW1tYSBDaGkgQ2hhcHRlci48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9Ib21lL2ludHJvZHVjdGlvbi5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC13cmFwcGVyIGludHJvZHVjdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIGlkPSdwcm9maWxlLWltZycgc3JjPVwicHJvZmlsZS1zbWFsbC5qcGdcIiBhbHQ9XCJwcm9maWxlXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBpZD1cImJpby1pbmZvXCI+XHJcbiAgICAgICAgPGxpID5BYXJvbiBCZW9tanVuIEJhZTwvbGk+XHJcbiAgICAgICAgPGxpID5NYXN0ZXJzIGluIENvbXB1dGVyIFNjaWVuY2U8L2xpPlxyXG4gICAgICAgIDxsaSA+VUMgSXJ2aW5lIENsYXNzIG9mIDIwMjE8L2xpPlxyXG4gICAgICAgIDxsaSA+Rm9jdXMgb24gTmF0dXJhbCBMYW5ndWFnZSBQcm9jZXNzaW5nPC9saT5cclxuICAgICAgICA8bGkgPkJhY2hlbG9yIG9mIFNjaWVuY2UgaW4gTWF0aGVtYXRpY3M8L2xpPlxyXG4gICAgICAgIDxsaSA+VW5pdmVyc2l0eSBvZiBXYXNoaW5ndG9uIENsYXNzIG9mIDIwMTk8L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiZG93bmxvYWRhYmxlcy9yZXN1bWUucGRmXCIgZG93bmxvYWQ+RG93bmxvYWQgYSBjb3B5IG9mIG15IHJlc3VtZTwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2VjdGlvbi1icmVha1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tbGluay13cmFwcGVyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hYXJvbmJhZVwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiR2l0SHViXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9naXRodWIucG5nXCIgYWx0PVwiR2l0SHViXCIgY2xhc3NOYW1lPSdpbnRyby1pY29uJyAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Fhcm9uLWJhZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkxpbmtlZEluXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9saW5rZWRpbi5wbmdcIiBhbHQ9XCJMaW5rZWRJblwiIGNsYXNzTmFtZT0naW50cm8taWNvbicgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzphYXJvbkBhYXJvbmJhZS5jb21cIiB0aXRsZT1cImVtYWlsXCIgdGFyZ2V0PVwicG9wdXBcIiA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9nbWFpbC5wbmdcIiBhbHQ9XCJFbWFpbFwiIGNsYXNzTmFtZT0naW50cm8taWNvbicgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvSG9tZS90ZWNobmljYWwtZXhwZXJpZW5jZS1lbnRyeS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWNoaW5jYWxFeHBlcmllbmNlRW50cnkocHJvcHMpIHtcclxuICAvLyBUT0RPOiBpbmZvIHZhbGlkYXRpb25cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpdmlkdWFsLWV4cGVyaWVuY2VcIj5cclxuICAgICAgPGEgaHJlZj17cHJvcHMudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIk1vcmUgQWJvdXQgV2FzaGluZ3RvbiBFeHBlcmltZW50YWwgTWF0aGVtYXRpY3MgTGFiXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjb21wYW55LWxvZ29cIiBzcmM9e3Byb3BzLmxvZ299IGFsdD17cHJvcHMubG9nb19hbHR9IC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55LWluZm8td3JhcHBlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uLXRpdGxlLXNwYW5cIj57cHJvcHMucG9zaXRpb259PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtd29ya2VkLXNwYW5cIj57cHJvcHMuZGF0ZV9mb3JtYXR0ZWR9PC9zcGFuPlxyXG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwidGUtY29tcGFueS1saW5rXCJcclxuICAgICAgICAgIHRpdGxlPVwiTW9yZSBhYm91dCB0aGUgQ29tcGFueVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tcGFueS1uYW1lLXNwYW5cIj57cHJvcHMuY29tcGFueX08L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvSG9tZS90ZWNobmljYWwtZXhwZXJpZW5jZXMuY3NzJ1xyXG5pbXBvcnQgVGVjaG5pY2FsRXhwZXJpZW5jZUVudHJ5IGZyb20gJy4vVGVjaG5pY2FsRXhwZXJpZW5jZUVudHJ5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlY2hpbmNhbEV4cGVyaWVuY2VzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtd3JhcHBlclwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRlY2hpbmNhbC1leHBlcmllbmNlLXRpdGxlXCI+VGVjaG5pY2FsIEV4cGVyaWVuY2VzPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtZXhwZXJpZW5jZS1lbnRyeS1jb250YWluZXJcIj5cclxuICAgICAgICA8VGVjaG5pY2FsRXhwZXJpZW5jZUVudHJ5IFxyXG4gICAgICAgICAgbG9nbz1cIi9pY29ucy91Y2kucG5nXCJcclxuICAgICAgICAgIGxvZ29fYWx0PVwidW5pdmVyc2l0eSBvZiBjYWxpZm9ybmlhLCBpcnZpbmUgbG9nb1wiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cIkNvbXB1dGVyIFNjaWVuY2UgUmVzZWFyY2hlclwiXHJcbiAgICAgICAgICBjb21wYW55PVwiVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLCBJcnZpbmVcIlxyXG4gICAgICAgICAgZGF0ZV9mb3JtYXR0ZWQ9XCJNYXJjaCAyMDIwIC0gUHJlc2VudFwiXHJcbiAgICAgICAgICB1cmw9XCJodHRwczovL3VjaS5lZHUvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb2xlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmljcy51Y2kuZWR1L35zbXl0aC9cIiBjbGFzc05hbWU9XCJleHBlcmllbmNlLWV4dGVybmFsLWxpbmtzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJNb3JlIEFib3V0IFByb2Zlc3NvciBTbXl0aFwiPlxyXG4gICAgICAgICAgICAgICAgUHJvZmVzc29yIFBhZGhyYWljIFNteXRoIFJlc2VhcmNoOlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBBcyBhIGdyYWR1YXRlIHJlc2VhcmNoZXIgZm9yIFByb2Zlc3NvciBQYWRocmFpYyBTbXl0aCwgSSBhbSB3b3JraW5nIFxyXG4gICAgICAgICAgICAgIG9uIHdheXMgdG8gYW5hbHl6ZSBkaWFsb2d1ZSBkYXRhc2V0LiBEYXRhc2V0cyBsaWtlIFN3aXRjaGJvYXJkIENvcnB1cyBhbmQgSUNTSSBcclxuICAgICAgICAgICAgICBNZWV0aW5nIFJlY29yZGluZyBDb3JwdXMgY29udGFpbnMgdHVybi1ieS10dXJuIHRyYW5zY3JpcHRzIGZyb20gYSBjb252ZXJzYXRpb24gXHJcbiAgICAgICAgICAgICAgYWxvbmcgd2l0aCBhIGZldyBzZW1hbnRpYyBhbm5vdGF0aW9ucy4gVGhlIGdvYWwgb2YgdGhlIHByb2plY3QgaXMgdG8gYW5hbHl6ZSB0aGlzXHJcbiAgICAgICAgICAgICAgY29udmVyc2F0aW9uYWwgZGF0YXNldCB0byBkZXZlbG9wIGEgbWV0aG9kIHRvIHF1YW50aWZ5IHRoZSBxdWFsaXR5IG9mIGluZm9ybWF0aW9uIFxyXG4gICAgICAgICAgICAgIGV4Y2hhbmdlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RlY2huaWNhbEV4cGVyaWVuY2VFbnRyeT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2VjdGlvbi1icmVha1wiIC8+XHJcbiAgICAgICAgPFRlY2huaWNhbEV4cGVyaWVuY2VFbnRyeSBcclxuICAgICAgICAgIGxvZ289XCIvaWNvbnMvdXdfbG9nby5wbmdcIlxyXG4gICAgICAgICAgbG9nb19hbHQ9XCJ1bml2ZXJzaXR5IG9mIHdhc2hpbmd0b24gbG9nb1wiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cIkNvbXB1dGVyIFNjaWVuY2UgUmVzZWFyY2hlclwiXHJcbiAgICAgICAgICBjb21wYW55PVwiVW5pdmVyc2l0eSBvZiBXYXNoaW5ndG9uXCJcclxuICAgICAgICAgIGRhdGVfZm9ybWF0dGVkPVwiSnVuIDIwMTggLSBKdW4gMjAxOVwiXHJcbiAgICAgICAgICB1cmw9XCJodHRwczovL3d3dy53YXNoaW5ndG9uLmVkdS9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJvbGUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXRoLndhc2hpbmd0b24uZWR1L2V2ZW50cy9zZXJpZXMvd2FzaGluZ3Rvbi1leHBlcmltZW50YWwtbWF0aGVtYXRpY3MtbGFiXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlLWV4dGVybmFsLWxpbmtzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk1vcmUgQWJvdXQgV2FzaGluZ3RvbiBFeHBlcmltZW50YWwgTWF0aGVtYXRpY3MgTGFiXCI+XHJcbiAgICAgICAgICAgICAgICBXYXNoaW5ndG9uIEV4cGVyaW1lbnRhbCBNYXRoZW1hdGljcyBMYWI6XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEkgd2FzIGludml0ZWQgdG8gd29yayB3aXRoIFByb2Zlc3NvciBDaHJpc3RvcGhlciBIb2ZmbWFuIHRvIFxyXG4gICAgICAgICAgICAgIHBhcnRpY2lwYXRlIG9uIGhpcyBNYXRoZW1hdGljcyBpbiBHZXJyeW1hbmRlcmluZyBQcm9qZWN0LiBIZSB3b3JrcyB0byBhbmFseXplIFxyXG4gICAgICAgICAgICAgIHNlYXJjaCB0aGUgc3RhdGUgc3BhY2UgZm9yIHRoZSB3YXlzIHRvIGRyYXcgb3V0IHRoZSBkaXN0cmljdHMuIFdlIHVzZWQgQysrIGFuZCAgXHJcbiAgICAgICAgICAgICAgUHl0aG9uIGFzIHRoZSBlbmdpbmUgb2YgdGhlIHByb2plY3QsIGFuZCBidWlsdCBOb2RlSlMgc2VydmVycyB0byBkaXN0cmlidXRlLCBcclxuICAgICAgICAgICAgICB2aXN1YWxpemUsIGFuZCBleHBsYWluIHRoZSBwb2xpdGljYWwgZGF0YSB3ZSBtaW5lZC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb2xlLXRpdGxlXCI+QXNzaXRhbnRzaGlwIHRvIEVtaXNhIE5hdGVpZ2gsIFBoLkQ6PC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBBcyBhIGxhYiBhc3Npc3RhbnQgdG8gRW1pc2EgTmF0ZWlnaCwgYSBQaC5EIHN0dWRlbnQgYXQgdGhlIFxyXG4gICAgICAgICAgICAgIFVuaXZlcnNpdHkgb2YgV2FzaGluZ3RvbiBGb3N0ZXIgU2Nob29sIG9mIGJ1c2luZXNzLCBJIGhlbHBlZCB0byBjcmVhdGUgYSBcclxuICAgICAgICAgICAgICBtYWNoaW5lIGxlYXJuaW5nIHN5c3RlbSB0byBwZXJmb3JtIE11bHRpLVRhc2tpbmcgR2F1c3NpYW4gUHJvY2VzcyBsZWFybmluZyBcclxuICAgICAgICAgICAgICBhbGdvcml0aG0gb24gdGhlIGNvbGxlY3RlZCBtZWRpY2FsIGRhdGEuIE1haW5seSwgdXNlZCBQeXRob24gYW5kIE51bVB5IHRvIFxyXG4gICAgICAgICAgICAgIGNhcnJ5IG91dCB0aGUgc3RhdGlzdGljYWwgcHJvY2Vzcy4gVXNlZCBNYXRwbG90TGliIGFuZCBEMy5qcyB0byB2aXN1YWxpemUgdGhlXHJcbiAgICAgICAgICAgICAgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGVjaG5pY2FsRXhwZXJpZW5jZUVudHJ5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zZWN0aW9uLWJyZWFrXCIgLz5cclxuICAgICAgICA8VGVjaG5pY2FsRXhwZXJpZW5jZUVudHJ5IFxyXG4gICAgICAgICAgbG9nbz1cIi9pY29ucy9kYXBwZXIuanBnXCJcclxuICAgICAgICAgIGxvZ29fYWx0PVwiZGFwcGVyIGNvbXBhbnkgbG9nb1wiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cIkJhY2tlbmQgU29mdHdhcmUgRW5naW5lZXJcIlxyXG4gICAgICAgICAgY29tcGFueT1cIkRhcHBlciBHcm9vbWluZ1wiXHJcbiAgICAgICAgICBkYXRlX2Zvcm1hdHRlZD1cIkp1biAyMDE4IC0gQXVndXN0IDIwMTlcIlxyXG4gICAgICAgICAgdXJsPVwiaHR0cHM6Ly9kYXBwZXJncm9vbWluZy5jby9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJvbGUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kYXBwZXJncm9vbWluZy5jby9cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2UtZXh0ZXJuYWwtbGlua3NcIiB0YXJnZXQ9XCJfYmxhbmtcIiBcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTW9yZSBBYm91dCBEYXBwZXIgR3Jvb21pbmcgLSBTZWF0dGxlXCI+XHJcbiAgICAgICAgICAgICAgICBCYWNrZW5kIERldmVsb3BtZW50IFRlYW06XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIENvbnRpbnVpbmcgbXkgaW50ZXJzZXRzIGluIGJhY2tlbmQgd2ViIGRldmVsb3BtZW50LCBJIHdvcmtlZCB3aXRoIGEgXHJcbiAgICAgICAgICAgICAgVW5pdmVyc2l0eSBvZiBXYXNoaW5ndG9uIGFsdW1uIHdobyB3YXMgc3RhcnRpbmcgYSBjb21wYW55IGNhbGxlZCBEYXBwZXIuIFRoZSBcclxuICAgICAgICAgICAgICBjb21wYW55IG5lZWRlZCBhIGJhc2ljIHdlYiBiYXNlZCBwbGF0Zm9ybSB0byBsYXVuY2ggdGhlaXIgcHJvamVjdCwgYW5kIEkgaGVscGVkXHJcbiAgICAgICAgICAgICAgdGhlbSBieSBjcmVhdGluZyBhbiBBV1Mgc2VydmVyIHRvIGhhbmRsZSB0aGVpciBjbGllbnQgdHJhZmZpYy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UZWNobmljYWxFeHBlcmllbmNlRW50cnk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNlY3Rpb24tYnJlYWtcIiAvPlxyXG4gICAgICAgIDxUZWNobmljYWxFeHBlcmllbmNlRW50cnkgXHJcbiAgICAgICAgICBsb2dvPVwiL2ljb25zL2Nyb3dkY293LmpwZ1wiXHJcbiAgICAgICAgICBsb2dvX2FsdD1cImNyb3dkIGNvdyBjb21wYW55IGxvZ29cIlxyXG4gICAgICAgICAgcG9zaXRpb249XCJTb2Z0d2FyZSBFbmdpbmVlcmluZyBJbnRlcm5cIlxyXG4gICAgICAgICAgY29tcGFueT1cIkNyb3dkIENvd1wiXHJcbiAgICAgICAgICBkYXRlX2Zvcm1hdHRlZD1cIkp1biAyMDE3IC0gQXVndXN0IDIwMTdcIlxyXG4gICAgICAgICAgdXJsPVwiaHR0cHM6Ly93d3cuY3Jvd2Rjb3cuY29tL1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm9sZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jcm93ZGNvdy5jb20vXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlLWV4dGVybmFsLWxpbmtzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk1vcmUgQWJvdXQgQ3Jvd2QgQ293XCI+XHJcbiAgICAgICAgICAgICAgICBGcm9udGVuZCBEZXZlbG9wZXI6XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEFzIGEgZnJvbnRlbmQgZGV2ZWxvcGVyLCBJIHdvcmtlZCBvbiBpbXByb3ZpbmcgQ3Jvd2RDb3cncyBwcml2YXRlXHJcbiAgICAgICAgICAgICAgZS1jb21tZXJjZSBwbGF0Zm9ybSBieSBjaGFuZ2luZyB0aGUgY2xpZW50IHB1cmNoYXNlIFVJIHBpcGVsaW5lLiBBbHNvLCBcclxuICAgICAgICAgICAgICB3b3JrZWQgb24gdmFyaW91cyBmZWF0dXJlcyBsaWtlIGluLWhvdXNlIGRhdGEgdmlzdWFsaXphdGlvbiBkYXNoYm9hcmQgdGhhdCBcclxuICAgICAgICAgICAgICBkaXNwbGF5cyBjb21wYW55IHN0YXRpc3RpY3MuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm9sZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jcm93ZGNvdy5jb20vXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlLWV4dGVybmFsLWxpbmtzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk1vcmUgQWJvdXQgQ3Jvd2QgQ293XCI+XHJcbiAgICAgICAgICAgICAgICBCYWNrZW5kIERldmVsb3BlcjpcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgQXMgYSBiYWNrZW5kIGRldmVsb3BlciwgSSB3b3JrZWQgb24gbWlkZGxtYW4gdGhlIGluZm9ybWF0aW9uIFxyXG4gICAgICAgICAgICAgIGJldHdlZW4gdGhlIGRhdGFiYXNlIGFuZCB0aGUgY2xpZW50IHNlcnZlcnMuIE1haW4gdGVjaG5vbG9naWVzIHRoYXQgSSB1c2VkIFxyXG4gICAgICAgICAgICAgIHdlcmUgTXlTUUwsIFJ1Ynkgb24gUmFpbHMsIEdpdCwgQnVuZGxlciwgUnVib0NvcCwgU3RyaXBlLCBhbmQgUHVtYS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UZWNobmljYWxFeHBlcmllbmNlRW50cnk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvSW50cm9kdWN0aW9uJ1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9FZHVjYXRpb24nXHJcbmltcG9ydCBUZWNobmljYWxFeHBlcmllbmNlcyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvVGVjaG5pY2FsRXhwZXJpZW5jZXMnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2hvbWUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdiBpZD1cImhvbWUtc2lkZVwiPlxyXG4gICAgICAgIDxJbnRyb2R1Y3Rpb24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJob21lLW1haW5cIj5cclxuICAgICAgICA8RWR1Y2F0aW9uIC8+XHJcbiAgICAgICAgPFRlY2huaWNhbEV4cGVyaWVuY2VzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9