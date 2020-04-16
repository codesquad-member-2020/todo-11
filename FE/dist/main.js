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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/reset.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0-modified | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n\\n/* make sure to set some focus styles for accessibility */\\n:focus {\\n    outline: 0;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\n\\nbody {\\n\\tline-height: 1;\\n}\\n\\nol, ul {\\n\\tlist-style: none;\\n}\\n\\nblockquote, q {\\n\\tquotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\n\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\n\\ninput[type=search]::-webkit-search-cancel-button,\\ninput[type=search]::-webkit-search-decoration,\\ninput[type=search]::-webkit-search-results-button,\\ninput[type=search]::-webkit-search-results-decoration {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n}\\n\\ninput[type=search] {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n    -webkit-box-sizing: content-box;\\n    -moz-box-sizing: content-box;\\n    box-sizing: content-box;\\n}\\n\\ntextarea {\\n    overflow: auto;\\n    vertical-align: top;\\n    resize: vertical;\\n}\\n\\n/**\\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\\n */\\n\\naudio,\\ncanvas,\\nvideo {\\n    display: inline-block;\\n    *display: inline;\\n    *zoom: 1;\\n    max-width: 100%;\\n}\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\n\\naudio:not([controls]) {\\n    display: none;\\n    height: 0;\\n}\\n\\n/**\\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\\n * Known issue: no IE 6 support.\\n */\\n\\n[hidden] {\\n    display: none;\\n}\\n\\n/**\\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\\n *    `em` units.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\n\\nhtml {\\n    font-size: 100%; /* 1 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n    -ms-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/**\\n * Address `outline` inconsistency between Chrome and other browsers.\\n */\\n\\na {\\n    text-decoration: none;\\n    color: inherit;\\n}\\n\\na:focus {\\n    outline: thin dotted;\\n}\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\n\\na:active,\\na:hover {\\n    outline: 0;\\n}\\n\\n/**\\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\\n * 2. Improve image quality when scaled in IE 7.\\n */\\n\\nimg {\\n    border: 0; /* 1 */\\n    -ms-interpolation-mode: bicubic; /* 2 */\\n}\\n\\n/**\\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\\n */\\n\\nfigure {\\n    margin: 0;\\n}\\n\\n/**\\n * Correct margin displayed oddly in IE 6/7.\\n */\\n\\nform {\\n    margin: 0;\\n}\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\n\\nfieldset {\\n    border: 1px solid #c0c0c0;\\n    margin: 0 2px;\\n    padding: 0.35em 0.625em 0.75em;\\n}\\n\\n/**\\n * 1. Correct color not being inherited in IE 6/7/8/9.\\n * 2. Correct text not wrapping in Firefox 3.\\n * 3. Correct alignment displayed oddly in IE 6/7.\\n */\\n\\nlegend {\\n    border: 0; /* 1 */\\n    padding: 0;\\n    white-space: normal; /* 2 */\\n    *margin-left: -7px; /* 3 */\\n}\\n\\n/**\\n * 1. Correct font size not being inherited in all browsers.\\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\\n *    and Chrome.\\n * 3. Improve appearance and consistency in all browsers.\\n */\\n\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n    font-size: 100%; /* 1 */\\n    margin: 0; /* 2 */\\n    vertical-align: baseline; /* 3 */\\n    *vertical-align: middle; /* 3 */\\n}\\n\\n/**\\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\n\\nbutton,\\ninput {\\n    line-height: normal;\\n}\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\\n * Correct `select` style inheritance in Firefox 4+ and Opera.\\n */\\n\\nbutton,\\nselect {\\n    text-transform: none;\\n}\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\\n *    Known issue: inner spacing remains in IE 6.\\n */\\n\\nbutton,\\nhtml input[type=\\\"button\\\"], /* 1 */\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n    -webkit-appearance: button; /* 2 */\\n    cursor: pointer; /* 3 */\\n    *overflow: visible;  /* 4 */\\n}\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\n\\nbutton[disabled],\\nhtml input[disabled] {\\n    cursor: default;\\n}\\n\\n/**\\n * 1. Address box sizing set to content-box in IE 8/9.\\n * 2. Remove excess padding in IE 8/9.\\n * 3. Remove excess padding in IE 7.\\n *    Known issue: excess padding remains in IE 6.\\n */\\n\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n    *height: 13px; /* 3 */\\n    *width: 13px; /* 3 */\\n}\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\\n *    (include `-moz` to future-proof).\\n */\\n\\ninput[type=\\\"search\\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    -moz-box-sizing: content-box;\\n    -webkit-box-sizing: content-box; /* 2 */\\n    box-sizing: content-box;\\n}\\n\\n/**\\n * Remove inner padding and search cancel button in Safari 5 and Chrome\\n * on OS X.\\n */\\n\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n}\\n\\n/**\\n * Remove inner padding and border in Firefox 3+.\\n */\\n\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n    border: 0;\\n    padding: 0;\\n}\\n\\n/**\\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\\n * 2. Improve readability and alignment in all browsers.\\n */\\n\\ntextarea {\\n    overflow: auto; /* 1 */\\n    vertical-align: top; /* 2 */\\n}\\n\\n/**\\n * Remove most spacing between table cells.\\n */\\n\\ntable {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n}\\n\\nhtml,\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n    color: #222;\\n}\\n\\n\\n::-moz-selection {\\n    background: #b3d4fc;\\n    text-shadow: none;\\n}\\n\\n::selection {\\n    background: #b3d4fc;\\n    text-shadow: none;\\n}\\n\\nimg {\\n    vertical-align: middle;\\n}\\n\\nfieldset {\\n    border: 0;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\ntextarea {\\n    resize: vertical;\\n}\\n\\n.chromeframe {\\n    margin: 0.2em 0;\\n    background: #ccc;\\n    color: #000;\\n    padding: 0.2em 0;\\n}\\n\\nbutton {\\n  background: none;\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./css/reset.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\n    box-sizing: border-box;\\n  }\\n\\n.header {\\n    box-sizing: border-box;\\n    display: flex;\\n    background-color: black;\\n    color: white;\\n    padding: 10px 20px;\\n    font-size: large;\\n    justify-content: space-between;\\n    width: 100%;\\n}\\n\\n.header .menu {\\n    color: white;\\n}\\n\\n.category-wrap {\\n    display: -webkit-box;\\n    overflow-x: scroll;\\n}\\n\\n.category {\\n    height: 650px;\\n    margin: 10px;\\n    width: 350px;\\n    border-radius: 10px;\\n    padding: 10px;\\n    background-color: #F0F1F3;\\n    overflow-y: scroll;\\n}\\n\\n.category-menu {\\n    display: flex;\\n    width: 100%;\\n    height: 30px;\\n    font-weight: bold;\\n    justify-content: space-between;\\n}\\n\\n.category-menu_count {\\n    display: inline-block;\\n    border-radius: 50%;\\n    width: 20px;\\n    height: 20px;\\n    line-height: 22px;\\n    text-align: center;\\n    background-color: #D1D2D4;\\n}\\n\\n.category-menu_right {\\n    color: #818890;\\n    font-size: 25px;\\n}\\n\\n.category-menu_addBtn:hover {\\n    color: #0166D6;\\n}\\n\\n.category-menu_menu {\\n    bottom: 5px;\\n    position: relative;\\n}\\n\\n.add-category {\\n    width: 350px;\\n    height: 100px;\\n    margin: 10px;\\n    border-radius: 10px;\\n    border: dashed 1px #B0B6BB;\\n    color: #596069;\\n}\\n\\n.add-note_input {\\n    box-sizing: border-box;\\n    display: inline;\\n    width: 100%;\\n    height: 70px;\\n    padding: 10px;\\n    margin: 5px 0;\\n    border: none;\\n    border-radius: 10px;\\n    overflow: scroll;\\n    word-break: break-all;\\n}\\n\\n.add-note {\\n    display: none;\\n}\\n\\n.add-note > button {\\n    border-radius: 7px;\\n    width: 48%;\\n    height: 30px;\\n}\\n\\n.add-note_addBtn {\\n    margin-right: 1%;\\n    border: solid 1px #276736;\\n    background-color: #2CBB4D;\\n    color: #FFFFFF;\\n}\\n\\n.add-note_addBtn:disabled {\\n    border: solid 1px #7BAE89;\\n    background-color: #94D3A2;\\n    color: #D5EEDB;\\n}\\n\\n.add-note_cancleBtn {\\n    border: solid 1px #C9CDCF;\\n    background-color: #F4F7F9;\\n}\\n\\n.note {\\n    display: flex;\\n    background-color: white;\\n    border-radius: 10px;\\n    padding: 10px;\\n    margin: 10px 0;\\n    position: relative;\\n}\\n\\n.note-icon {\\n    color: #818890;\\n    margin-right: 5px;\\n}\\n\\n.note-content {\\n    margin: 15px 0;\\n}\\n\\n.note-main {\\n    margin-top: 1px;\\n}\\n\\n.note-author {\\n    font-size: small;\\n}\\n\\n.note-author_msg {\\n    color: #818890;\\n}\\n\\n.note-removeBtn {\\n    color: #818890;\\n    font-weight: bold;\\n    position: absolute;\\n    right: 10px;\\n    top: 8px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/constants/url.js":
/*!******************************!*\
  !*** ./src/constants/url.js ***!
  \******************************/
/*! exports provided: URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL\", function() { return URL; });\nconst URL = {\n    PROD: {\n        GET_CATEGORY_API: 'http://15.165.223.140:8080/api/category',\n        DELETE_NOTE_API: 'http://15.165.223.140:80/api/notes?id=',\n        CREATE_NOTE_API: 'http://15.165.223.140:80/api/notes',\n        GET_SPECIFIC_CATEGORY_NOTE_API: 'http://15.165.223.140:8080/api/notes/category?categoryId='\n    },\n\n    DEV: {\n        GET_ALL_NOTES_API: 'http://15.165.223.140:8080/dev-api/note'\n        // GET_ALL_NOTES_API: 'http://15.165.223.140:8080/api/notes/category?categoryName=%ED%95%B4%EC%95%BC%ED%95%A0%EC%9D%BC'\n        // GET_ALL_NOTES_API: 'http://15.165.223.140:8080/api/notes/category?categoryName=해야할일'\n    }\n}\n\n//# sourceURL=webpack:///./src/constants/url.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/dom.js */ \"./src/util/dom.js\");\n/* harmony import */ var _server_todoListState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/todoListState.js */ \"./src/server/todoListState.js\");\n\n\n\n// import { addBtnEventHandler, addContent } from './eventController/addEvent.js'\n\nwindow.addEventListener('DOMContentLoaded', async () => {\n  await Object(_server_todoListState_js__WEBPACK_IMPORTED_MODULE_2__[\"todoListRender\"])();\n\n  // addBtnEventHandler();\n  // addContent();\n\n  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.category-menu_addBtn').addEventListener('click', () => {\n    const addNote = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.add-note');\n    const addNoteDisplay = addNote.style.display;\n    switch (addNoteDisplay) {\n      case 'block': Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"hide\"])(addNote);\n        break;\n      case \"\": Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"show\"])(addNote);\n        break;\n      case 'none': Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"show\"])(addNote);\n        break;\n    }\n  })\n\n  // eventListner를 forEach로 돌면서 category 마다 달아줘야지\n  let inputBox = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.add-note_input');\n  inputBox.addEventListener('keydown', () => {\n    if (inputBox.innerHTML) inputBox.closest('.add-note_addBtn').disabled = \"false\";\n    else inputBox.closest('.add-note_addBtn').disabled = \"disabled\";\n  })\n\n\n  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.add-note_addBtn').addEventListener('click', () => {\n\n  })\n\n\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/server/todoListState.js":
/*!*************************************!*\
  !*** ./src/server/todoListState.js ***!
  \*************************************/
/*! exports provided: todoListRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListRender\", function() { return todoListRender; });\n/* harmony import */ var _constants_url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/url.js */ \"./src/constants/url.js\");\n/* harmony import */ var _templates_category_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/category.js */ \"./templates/category.js\");\n/* harmony import */ var _templates_note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../templates/note.js */ \"./templates/note.js\");\n\n\n\n\nconst todoListRender = async () => {\n  const categoryState = await fetchJSON_GET(_constants_url_js__WEBPACK_IMPORTED_MODULE_0__[\"URL\"].PROD.GET_CATEGORY_API);\n  Object(_templates_category_js__WEBPACK_IMPORTED_MODULE_1__[\"drawCategorySection\"])(categoryState);\n\n  categoryState.contents.category.forEach(async (category) => {\n    const noteState = await fetchJSON_GET(_constants_url_js__WEBPACK_IMPORTED_MODULE_0__[\"URL\"].PROD.GET_SPECIFIC_CATEGORY_NOTE_API + category.id);\n    Object(_templates_note_js__WEBPACK_IMPORTED_MODULE_2__[\"drawNoteSection\"])(noteState, category);\n  });\n}\n\n// export const todoListRender = async () => {\n//   const categoryState = categoryRender();\n//   noteRender(categoryState);\n// }\n\n// const categoryRender = async () => {\n//   const categoryState = await fetchJSON_GET(URL.DEV.GET_COLUMNS_API);\n//   drawCategorySection(categoryState);\n//   return categoryState;\n// }\n\n// const noteRender = async (categoryState) => {\n//   categoryState.contents.categorys.forEach(async (category) => {\n//     const noteState = await fetchJSON_GET(URL.DEV.GET_SPECIFIC_COLUMN_NOTES_API + category);\n//     drawNoteSection(noteState, category);\n//   });\n// }\n\n// export const addNote = async (noteContent) => {\n//   await fetchJSON_POST(URL.DEV.CREATE_NOTE_API, noteContent);\n// }\n\n// export const removeNote = async (noteIndex) => {\n//   await fetchJSON_DELETE(URL.DEV.DELETE_NOTE_API + noteIndex);\n// }\n\nconst fetchJSON_GET = (url) => {\n  return fetch(url, {\n    method: 'GET',\n    headers: { \"Accept\": \"*/*\" }\n  }).then(response => {\n    return response.json();\n  });\n}\n\nconst fetchJSON_POST = (url, noteContent) => {\n  return fetch(url, {\n    method: 'POST',\n    headers: { \"Accept\": \"*/*\" },\n    body: noteContent\n  }).then(response => {\n    return response.json();\n  });\n}\n\nconst fetchJSON_DELETE = (url) => {\n  return fetch(url, {\n    method: 'DELETE',\n    headers: { \"Accept\": \"*/*\" },\n  }).then(response => {\n    return response.json();\n  });\n}\n\n//# sourceURL=webpack:///./src/server/todoListState.js?");

/***/ }),

/***/ "./src/util/dom.js":
/*!*************************!*\
  !*** ./src/util/dom.js ***!
  \*************************/
/*! exports provided: getElement, getElements, addClass, removeClass, hasClass, show, hide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElements\", function() { return getElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hide\", function() { return hide; });\nfunction getElement(target) {\n  return document.querySelector(target);\n}\n\nfunction getElements(target) {\n  return document.querySelectorAll(target);\n}\n\nfunction addClass(target, className) {\n  return target.classList.add(className);\n}\n\nfunction removeClass(target, className) {\n  return target.classList.remove(className);\n}\n\nfunction hasClass(target, className) {\n  return target.classList.contains(className);\n}\n\nfunction show(target) {\n  target.style.display = 'block';\n}\n\nfunction hide(target) {\n  target.style.display = 'none';\n}\n\n\n//# sourceURL=webpack:///./src/util/dom.js?");

/***/ }),

/***/ "./templates/category.js":
/*!*******************************!*\
  !*** ./templates/category.js ***!
  \*******************************/
/*! exports provided: drawCategorySection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawCategorySection\", function() { return drawCategorySection; });\n/* harmony import */ var _src_util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/util/dom.js */ \"./src/util/dom.js\");\n\n\nconst stateRender = (categoryState) => {\n    let categoryHTML = '';\n\n    categoryState.contents.category.forEach((category) => {\n        categoryHTML += `\n            <div class=\"category ${category.name}\">\n                <div class=\"category-menu\">\n                    <div class=\"category-menu_left\">\n                        <span class=\"category-menu_count\"></span>\n                        <span class=\"category-menu_title\">${category.name}</span>\n                    </div>\n                    <div class=\"category-menu_right\">\n                        <button class=\"category-menu_addBtn\">+</button>\n                        <button class=\"category-menu_menu\">&hellip;</button>\n                    </div>\n                </div>\n                <div class=\"add-note\">\n                    <input class=\"add-note_input\" type=\"text\" placeholder=\"Enter a note\">\n                    <button class=\"add-note_addBtn\" disabled=\"disabled\">Add</button>\n                    <button class=\"add-note_cancleBtn\">Cancle</button>\n                </div>\n                <div class=\"note-wrap\"></div>\n            </div>\n        `\n    })\n\n    return categoryHTML + '<button class=\"add-category\">+Add category</button>';\n}\n\nconst drawCategorySection = (categoryState) => {\n    Object(_src_util_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.category-wrap').innerHTML = stateRender(categoryState);\n}\n\n//# sourceURL=webpack:///./templates/category.js?");

/***/ }),

/***/ "./templates/note.js":
/*!***************************!*\
  !*** ./templates/note.js ***!
  \***************************/
/*! exports provided: drawNoteSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawNoteSection\", function() { return drawNoteSection; });\n/* harmony import */ var _src_util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/util/dom.js */ \"./src/util/dom.js\");\n\n\nconst stateRender = (noteState) => {\n    let noteHTML = '';\n\n    noteState.contents.notes.forEach((note, category) => {\n        // getElement(`.${category} > .category-menu_count`).innerHTML++;\n\n        const noteContents = note.content.split('\\n');\n        const noteTitle = noteContents[0];\n        noteContents.splice(0, 1);\n        //const noteContent = noteContents.join('');\n        let noteContentsHTML = '';\n        noteContents.forEach((content) => {\n            noteContentsHTML += `${content}<br>`;\n        })\n\n        noteHTML += `\n            <div class=\"note\" value=\"${note.id}\">\n                <span class=\"note-icon\"><i class=\"far fa-comment-alt\"></i></span>\n                <span class=\"note-main\">\n                    <div class=\"note-title\">${noteTitle}</div>\n                    <div class=\"note-content\">${noteContentsHTML}</div>\n                    <div class=\"note-author\">\n                        <span class=\"note-author_msg\">Added by</span>\n                        <span class=\"note-author_name\">${note.user}</span>\n                    </div>\n                </span>\n                <button class=\"note-removeBtn\">X</button>\n            </div>\n        `\n    })\n\n    return noteHTML;\n}\n\nconst drawNoteSection = (noteState, category) => {\n    Object(_src_util_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(`.${category.name} > .note-wrap`).innerHTML = stateRender(noteState, category);\n    // getElement(`.${category.name} > .category-menu_count`).innerText = noteState.contents.notes.length;\n}\n\n//# sourceURL=webpack:///./templates/note.js?");

/***/ })

/******/ });