/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/bricolage-grotesque-v1-latin-regular.woff2 */ "./src/fonts/bricolage-grotesque-v1-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/bricolage-grotesque-v1-latin-600.woff2 */ "./src/fonts/bricolage-grotesque-v1-latin-600.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/bricolage-grotesque-v1-latin-800.woff2 */ "./src/fonts/bricolage-grotesque-v1-latin-800.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* bricolage-grotesque-regular - latin */
@font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Bricolage Grotesque';
    font-style: normal;
    font-weight: 400;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* bricolage-grotesque-600 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Bricolage Grotesque';
    font-style: normal;
    font-weight: 600;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* bricolage-grotesque-800 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Bricolage Grotesque';
    font-style: normal;
    font-weight: 800;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

/* ======== BASE ======== */

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: var(--body-font);
    color: var(--neutral-color);
    scroll-behavior: smooth;
    background-color: var(--first-color);

}

body {

}

button {
    cursor: pointer;
}

a {
    display: block;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

img {
    max-width: 100%;
    height: auto;
}

/* ======== COLORS & FONTS ======== */
:root {
        --first-color: #f1f5f9;
        --second-color: #a11111;
        --font-color: #161515;
        --body-font: 'Bricolage Grotesque';
        --big-font-size: 4rem;
        --h1-font-size: 1.7rem;
        --h2-font-size: 1.5rem;
        --h3-font-size: 1.2rem;
        --normal-font-size: 1rem;
        --small-font-size: .8rem;
        --font-regular: 500;
        --font-medium: 600;
        --font-bold: 800;
    }


/* 
********************************************
*/

.strip {
    background-color: var(--second-color);
    height: 20px;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
}

#content {
    background-color: var(--first-color);
    color: var(--font-color);
    position: relative;
}

header {
    background-color: transparent;
    justify-content: center;
    color: var(--second-color);
}



ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-weight: 600;
    font-size: var(--h3-font-size);
}

li {
    padding: 20px;
}

li a:hover {
    color: var(--first-color);
    background-color: var(--second-color);
    transition: 0.3s;
}

.active {
    color: var(--first-color);
    background-color: var(--second-color);
}

.main-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;
    display: grid;
    gap: 12px;
    grid-template-rows: 1fr 1 1fr 2fr;
    grid-template-columns: 1fr 1fr 1fr;
}

.title {
    grid-area: 1 / 1 / 3 / 3;
    font-size: 200px;
    color: var(--second-color);
    font-weight: 900;
    z-index: 10;
    padding-left: 1rem;
}

.text {
    grid-area: 3 / 1 / 4 / 2;
    padding-left: 1.2rem;
}

.img-home {
    grid-area: 2 / 2 / 4 / 4;
    max-height: 500px;
    justify-self: end;
}

.img-menu {
    grid-area: 2 / 2 / 4 / 3;
    max-height: 300px;
    justify-self: end;
}


.h3-menu {
    font-size: 30px;
    color: var(--second-color);
    font-weight: 900;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pizza-container {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    justify-items: stratch;
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;
    row-gap: 40px;
    column-gap: 80px;
}

.card {
    color: var(--font-color);
    flex-direction: column;
    gap: 10px;
}

.first-line {
    display: flex;
    justify-content: space-between;
}

.img-contact {
    grid-area: 2 / 2 / 4 / 4;
    max-height: 500px;
    justify-self: end;
}

.open {
    white-space: pre;
    grid-area: 3 / 1 / 4 / 2;
    padding-left: 1.2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,wCAAwC;AACxC;IACI,kBAAkB,EAAE,sGAAsG;IAC1H,kCAAkC;IAClC,kBAAkB;IAClB,gBAAgB;IAChB,4DAA8E,EAAE,4DAA4D;EAC9I;EACA,oCAAoC;EACpC;IACE,kBAAkB,EAAE,sGAAsG;IAC1H,kCAAkC;IAClC,kBAAkB;IAClB,gBAAgB;IAChB,4DAA0E,EAAE,4DAA4D;EAC1I;EACA,oCAAoC;EACpC;IACE,kBAAkB,EAAE,sGAAsG;IAC1H,kCAAkC;IAClC,kBAAkB;IAClB,gBAAgB;IAChB,4DAA0E,EAAE,4DAA4D;EAC1I;;AAEF,2BAA2B;;AAE3B;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,2BAA2B;IAC3B,uBAAuB;IACvB,oCAAoC;;AAExC;;AAEA;;AAEA;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA,qCAAqC;AACrC;QACQ,sBAAsB;QACtB,uBAAuB;QACvB,qBAAqB;QACrB,kCAAkC;QAClC,qBAAqB;QACrB,sBAAsB;QACtB,sBAAsB;QACtB,sBAAsB;QACtB,wBAAwB;QACxB,wBAAwB;QACxB,mBAAmB;QACnB,kBAAkB;QAClB,gBAAgB;IACpB;;;AAGJ;;CAEC;;AAED;IACI,qCAAqC;IACrC,YAAY;IACZ,SAAS;IACT,MAAM;IACN,OAAO;IACP,WAAW;AACf;;AAEA;IACI,oCAAoC;IACpC,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,0BAA0B;AAC9B;;;;AAIA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,gBAAgB;IAChB,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,iCAAiC;IACjC,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,0BAA0B;IAC1B,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,iBAAiB;AACrB;;;AAGA;IACI,eAAe;IACf,0BAA0B;IAC1B,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;IAClC,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,oBAAoB;AACxB","sourcesContent":["/* bricolage-grotesque-regular - latin */\n@font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Bricolage Grotesque';\n    font-style: normal;\n    font-weight: 400;\n    src: url('./fonts/bricolage-grotesque-v1-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  /* bricolage-grotesque-600 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Bricolage Grotesque';\n    font-style: normal;\n    font-weight: 600;\n    src: url('./fonts/bricolage-grotesque-v1-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  /* bricolage-grotesque-800 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Bricolage Grotesque';\n    font-style: normal;\n    font-weight: 800;\n    src: url('./fonts/bricolage-grotesque-v1-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n\n/* ======== BASE ======== */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: var(--body-font);\n    color: var(--neutral-color);\n    scroll-behavior: smooth;\n    background-color: var(--first-color);\n\n}\n\nbody {\n\n}\n\nbutton {\n    cursor: pointer;\n}\n\na {\n    display: block;\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n\n/* ======== COLORS & FONTS ======== */\n:root {\n        --first-color: #f1f5f9;\n        --second-color: #a11111;\n        --font-color: #161515;\n        --body-font: 'Bricolage Grotesque';\n        --big-font-size: 4rem;\n        --h1-font-size: 1.7rem;\n        --h2-font-size: 1.5rem;\n        --h3-font-size: 1.2rem;\n        --normal-font-size: 1rem;\n        --small-font-size: .8rem;\n        --font-regular: 500;\n        --font-medium: 600;\n        --font-bold: 800;\n    }\n\n\n/* \n********************************************\n*/\n\n.strip {\n    background-color: var(--second-color);\n    height: 20px;\n    margin: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n#content {\n    background-color: var(--first-color);\n    color: var(--font-color);\n    position: relative;\n}\n\nheader {\n    background-color: transparent;\n    justify-content: center;\n    color: var(--second-color);\n}\n\n\n\nul {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    font-weight: 600;\n    font-size: var(--h3-font-size);\n}\n\nli {\n    padding: 20px;\n}\n\nli a:hover {\n    color: var(--first-color);\n    background-color: var(--second-color);\n    transition: 0.3s;\n}\n\n.active {\n    color: var(--first-color);\n    background-color: var(--second-color);\n}\n\n.main-container {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 1250px;\n    display: grid;\n    gap: 12px;\n    grid-template-rows: 1fr 1 1fr 2fr;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.title {\n    grid-area: 1 / 1 / 3 / 3;\n    font-size: 200px;\n    color: var(--second-color);\n    font-weight: 900;\n    z-index: 10;\n    padding-left: 1rem;\n}\n\n.text {\n    grid-area: 3 / 1 / 4 / 2;\n    padding-left: 1.2rem;\n}\n\n.img-home {\n    grid-area: 2 / 2 / 4 / 4;\n    max-height: 500px;\n    justify-self: end;\n}\n\n.img-menu {\n    grid-area: 2 / 2 / 4 / 3;\n    max-height: 300px;\n    justify-self: end;\n}\n\n\n.h3-menu {\n    font-size: 30px;\n    color: var(--second-color);\n    font-weight: 900;\n    margin-top: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.pizza-container {\n    margin-top: 30px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(4, 1fr);\n    justify-items: stratch;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 1250px;\n    row-gap: 40px;\n    column-gap: 80px;\n}\n\n.card {\n    color: var(--font-color);\n    flex-direction: column;\n    gap: 10px;\n}\n\n.first-line {\n    display: flex;\n    justify-content: space-between;\n}\n\n.img-contact {\n    grid-area: 2 / 2 / 4 / 4;\n    max-height: 500px;\n    justify-self: end;\n}\n\n.open {\n    white-space: pre;\n    grid-area: 3 / 1 / 4 / 2;\n    padding-left: 1.2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/load-contact.js":
/*!*****************************!*\
  !*** ./src/load-contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContact() {
    const activeMenu = document.getElementById('CONTACT')
    activeMenu.classList = 'active'
    const mainDiv = document.getElementById("content")

    const mainContainer = document.createElement('div')
    mainContainer.className = 'main-container'

    const title = document.createElement('h1')
    title.textContent = 'Contact'
    title.className = 'title'
    mainContainer.appendChild(title)

    const img = new Image()
    img.src = "../src/img/map1.png"
    img.classList = 'img-contact'
    mainContainer.appendChild(img)

    const text = document.createElement('p')
    text.className = 'open'
    text.textContent = 'Via Roma, 1\r\nRome, Italy\r\nTel. 123 456 78 90\r\n \r\n \r\nOpen: 18:30 - 23:30\r\nMonday CLOSED'
    mainContainer.appendChild(text)

    mainDiv.appendChild(mainContainer)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/load-header.js":
/*!****************************!*\
  !*** ./src/load-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHeader() {
    console.log('the header is loaded')
    const mainDiv = document.getElementById("content")

    mainDiv.innerHTML = ''
    
    const strip = document.createElement('div')
    strip.className = 'strip'
    mainDiv.appendChild(strip)

    const header = document.createElement('header')
    const menuContainer = document.createElement('ul')
    menuContainer.className = 'menu-container'
    menuContainer.appendChild(createMenuItem('HOME'))
    menuContainer.appendChild(createMenuItem('MENU'))
    menuContainer.appendChild(createMenuItem('CONTACT'))
    header.appendChild(menuContainer)

    mainDiv.appendChild(header)

    document.body.appendChild(mainDiv)
}

function createMenuItem(name) {
    const menuItem = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = `${name}`
    a.id = name
    menuItem.appendChild(a)
    return menuItem
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);


/***/ }),

/***/ "./src/load-home.js":
/*!**************************!*\
  !*** ./src/load-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHome() {
    console.log('the home is loaded')
    const activeMenu = document.getElementById('HOME')
    activeMenu.classList = 'active'
    const mainDiv = document.getElementById("content")

    const mainContainer = document.createElement('div')
    mainContainer.className = 'main-container'

    const title = document.createElement('h1')
    title.textContent = 'Pizzeria'
    title.className = 'title'
    mainContainer.appendChild(title)

    const img = new Image()
    img.src = "../src/img/pizza.jpg"
    img.classList = 'img-home'
    mainContainer.appendChild(img)

    const text = document.createElement('p')
    text.className = 'text'
    text.textContent = 'A place tied to traditions, simple and unmistakable flavors, and the authentic colors of this land. Our pizzas are the result of a long leavening process. We use only carefully selected ingredients, sourced from small traditional producers and "Slow Food" presidia, mainly from Southern Italy. This way, we enhance the regions and revive ancient crafts and flavors.'
    mainContainer.appendChild(text)

    mainDiv.appendChild(mainContainer)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/load-menu.js":
/*!**************************!*\
  !*** ./src/load-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenu() {
    console.log('the menu is loaded')
    const activeMenu = document.getElementById('MENU')
    activeMenu.classList = 'active'
    const mainDiv = document.getElementById("content")

    const mainContainer = document.createElement('div')
    mainContainer.className = 'main-container'

    const title = document.createElement('h1')
    title.textContent = 'Menu'
    title.className = 'title'
    mainContainer.appendChild(title)

    const img = new Image()
    img.src = "../src/img/menu.jpg"
    img.classList = 'img-menu'
    mainContainer.appendChild(img)

    mainDiv.appendChild(mainContainer)

    const menuContainer = document.createElement('div')
    menuContainer.classList = 'pizza-container'

    const titleMenu = document.createElement('h3')
    titleMenu.className = 'h3-menu'
    titleMenu.textContent = 'PIZZE'
    mainDiv.appendChild(titleMenu)

    const marinara = new Pizza(
        'Marinara',
        'Pomodoro - Aglio - Basilico Fresco - Origano',
        '5,50'
    );
    menuContainer.appendChild(marinara.createCard())

    const margherita = new Pizza(
        'Margherita',
        'Pomodoro - Mozzarella - Basilico Fresco - Olio EVO',
        '6,50'
    );
    menuContainer.appendChild(margherita.createCard())

    const diavola = new Pizza(
        'Diavola',
        'Pomodoro - Mozzarella - Spianata Piccante - Basilico Fresco',
        '7,50'
    );
    menuContainer.appendChild(diavola.createCard())

    const cotto = new Pizza(
        'Cotto e Funghi',
        'Pomodoro - Mozzarella - Funghi - Prosciutto Cotto al Naturale',
        '8,00'
    );
    menuContainer.appendChild(cotto.createCard())

    const pomodorini = new Pizza(
        'Pomodorini Rucola e Grana',
        'Pomodoro - Mozzarella - Pomodorini - Rucola Selvatica - Grana a scaglie',
        '8,50'
    );
    menuContainer.appendChild(pomodorini.createCard())
    
    const speck = new Pizza(
        'Speck e Brie',
        'Pomodoro - Mozzarella - Brie - Speck',
        '8,50'
    );
    menuContainer.appendChild(speck.createCard())
    
    mainDiv.appendChild(menuContainer)
    
}

class Pizza {
    constructor(name, ingredients, price){
        this.name = name;
        this.ingredients = ingredients;
        this.price = price
    }

    createCard() {
        const card = document.createElement('div')
        card.classList = 'card'

        const firstLine = document.createElement('div')
        firstLine.classList = 'first-line'

        const nameTag = document.createElement('h3')
        nameTag.textContent = this.name
        nameTag.classList = 'pizza-name'
        
        const priceTag = document.createElement('p')
        priceTag.textContent = this.price
        priceTag.classList = 'price-tag'

        firstLine.appendChild(nameTag)
        firstLine.appendChild(priceTag)

        const ingredientsTag = document.createElement('p')
        ingredientsTag.textContent = this.ingredients
        ingredientsTag.classList = 'ingredients-tag'

        card.appendChild(firstLine)
        card.appendChild(ingredientsTag)
        
        return card
    }

    // create a createCard method
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/fonts/bricolage-grotesque-v1-latin-600.woff2":
/*!**********************************************************!*\
  !*** ./src/fonts/bricolage-grotesque-v1-latin-600.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77b4925e91af5af2d922.woff2";

/***/ }),

/***/ "./src/fonts/bricolage-grotesque-v1-latin-800.woff2":
/*!**********************************************************!*\
  !*** ./src/fonts/bricolage-grotesque-v1-latin-800.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd0b0a9bcbaea7f58799.woff2";

/***/ }),

/***/ "./src/fonts/bricolage-grotesque-v1-latin-regular.woff2":
/*!**************************************************************!*\
  !*** ./src/fonts/bricolage-grotesque-v1-latin-regular.woff2 ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efef00fd65ce380bb215.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _load_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-home */ "./src/load-home.js");
/* harmony import */ var _load_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-menu */ "./src/load-menu.js");
/* harmony import */ var _load_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-contact */ "./src/load-contact.js");
/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-header */ "./src/load-header.js");






// initilization
(0,_load_header__WEBPACK_IMPORTED_MODULE_4__["default"])()
;(0,_load_home__WEBPACK_IMPORTED_MODULE_1__["default"])()

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'a') {
        let targetBtn = event.target.id
        if (targetBtn === 'HOME') {
            (0,_load_header__WEBPACK_IMPORTED_MODULE_4__["default"])()
            ;(0,_load_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
        } else if (targetBtn === 'MENU') {
            (0,_load_header__WEBPACK_IMPORTED_MODULE_4__["default"])()
            ;(0,_load_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
        } else if (targetBtn === 'CONTACT') {
            (0,_load_header__WEBPACK_IMPORTED_MODULE_4__["default"])()
            ;(0,_load_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
        } 
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7QUFDQTtBQUNNO0FBQ0Y7O0FBRXZDO0FBQ0Esd0RBQVU7QUFDVix1REFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQVU7QUFDdEIsWUFBWSx1REFBUTtBQUNwQixVQUFVO0FBQ1YsWUFBWSx3REFBVTtBQUN0QixZQUFZLHVEQUFRO0FBQ3BCLFVBQVU7QUFDVixZQUFZLHdEQUFVO0FBQ3RCLFlBQVksMERBQVc7QUFDdkI7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9sb2FkLWNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9sb2FkLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xvYWQtaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xvYWQtbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvYnJpY29sYWdlLWdyb3Rlc3F1ZS12MS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9icmljb2xhZ2UtZ3JvdGVzcXVlLXYxLWxhdGluLTYwMC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvYnJpY29sYWdlLWdyb3Rlc3F1ZS12MS1sYXRpbi04MDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogYnJpY29sYWdlLWdyb3Rlc3F1ZS1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xuICAgIGZvbnQtZmFtaWx5OiAnQnJpY29sYWdlIEdyb3Rlc3F1ZSc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXG4gIH1cbiAgLyogYnJpY29sYWdlLWdyb3Rlc3F1ZS02MDAgLSBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cbiAgICBmb250LWZhbWlseTogJ0JyaWNvbGFnZSBHcm90ZXNxdWUnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xuICB9XG4gIC8qIGJyaWNvbGFnZS1ncm90ZXNxdWUtODAwIC0gbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXG4gICAgZm9udC1mYW1pbHk6ICdCcmljb2xhZ2UgR3JvdGVzcXVlJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3dvZmYyJyk7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cbiAgfVxuXG4vKiA9PT09PT09PSBCQVNFID09PT09PT09ICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XG4gICAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3IpO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcblxufVxuXG5ib2R5IHtcblxufVxuXG5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiA9PT09PT09PSBDT0xPUlMgJiBGT05UUyA9PT09PT09PSAqL1xuOnJvb3Qge1xuICAgICAgICAtLWZpcnN0LWNvbG9yOiAjZjFmNWY5O1xuICAgICAgICAtLXNlY29uZC1jb2xvcjogI2ExMTExMTtcbiAgICAgICAgLS1mb250LWNvbG9yOiAjMTYxNTE1O1xuICAgICAgICAtLWJvZHktZm9udDogJ0JyaWNvbGFnZSBHcm90ZXNxdWUnO1xuICAgICAgICAtLWJpZy1mb250LXNpemU6IDRyZW07XG4gICAgICAgIC0taDEtZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgIC0taDItZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIC0taDMtZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIC0tbm9ybWFsLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgLS1zbWFsbC1mb250LXNpemU6IC44cmVtO1xuICAgICAgICAtLWZvbnQtcmVndWxhcjogNTAwO1xuICAgICAgICAtLWZvbnQtbWVkaXVtOiA2MDA7XG4gICAgICAgIC0tZm9udC1ib2xkOiA4MDA7XG4gICAgfVxuXG5cbi8qIFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG5cbi5zdHJpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG59XG5cblxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpO1xufVxuXG5saSB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxubGkgYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEycHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMSAxZnIgMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG59XG5cbi50aXRsZSB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAzO1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi50ZXh0IHtcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJyZW07XG59XG5cbi5pbWctaG9tZSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDQgLyA0O1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uaW1nLW1lbnUge1xuICAgIGdyaWQtYXJlYTogMiAvIDIgLyA0IC8gMztcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuXG4uaDMtbWVudSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5waXp6YS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJhdGNoO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICByb3ctZ2FwOiA0MHB4O1xuICAgIGNvbHVtbi1nYXA6IDgwcHg7XG59XG5cbi5jYXJkIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5maXJzdC1saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmltZy1jb250YWN0IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNCAvIDQ7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5vcGVuIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksa0JBQWtCLEVBQUUsc0dBQXNHO0lBQzFILGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDREQUE4RSxFQUFFLDREQUE0RDtFQUM5STtFQUNBLG9DQUFvQztFQUNwQztJQUNFLGtCQUFrQixFQUFFLHNHQUFzRztJQUMxSCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0REFBMEUsRUFBRSw0REFBNEQ7RUFDMUk7RUFDQSxvQ0FBb0M7RUFDcEM7SUFDRSxrQkFBa0IsRUFBRSxzR0FBc0c7SUFDMUgsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNERBQTBFLEVBQUUsNERBQTREO0VBQzFJOztBQUVGLDJCQUEyQjs7QUFFM0I7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsb0NBQW9DOztBQUV4Qzs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUEscUNBQXFDO0FBQ3JDO1FBQ1Esc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOzs7QUFHSjs7Q0FFQzs7QUFFRDtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtBQUM5Qjs7OztBQUlBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBicmljb2xhZ2UtZ3JvdGVzcXVlLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gICAgZm9udC1mYW1pbHk6ICdCcmljb2xhZ2UgR3JvdGVzcXVlJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9icmljb2xhZ2UtZ3JvdGVzcXVlLXYxLWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cXG4gIH1cXG4gIC8qIGJyaWNvbGFnZS1ncm90ZXNxdWUtNjAwIC0gbGF0aW4gKi9cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gICAgZm9udC1mYW1pbHk6ICdCcmljb2xhZ2UgR3JvdGVzcXVlJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9icmljb2xhZ2UtZ3JvdGVzcXVlLXYxLWxhdGluLTYwMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xcbiAgfVxcbiAgLyogYnJpY29sYWdlLWdyb3Rlc3F1ZS04MDAgLSBsYXRpbiAqL1xcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgICBmb250LWZhbWlseTogJ0JyaWNvbGFnZSBHcm90ZXNxdWUnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL2JyaWNvbGFnZS1ncm90ZXNxdWUtdjEtbGF0aW4tODAwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXFxuICB9XFxuXFxuLyogPT09PT09PT0gQkFTRSA9PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxuICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yKTtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG5cXG59XFxuXFxuYm9keSB7XFxuXFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiA9PT09PT09PSBDT0xPUlMgJiBGT05UUyA9PT09PT09PSAqL1xcbjpyb290IHtcXG4gICAgICAgIC0tZmlyc3QtY29sb3I6ICNmMWY1Zjk7XFxuICAgICAgICAtLXNlY29uZC1jb2xvcjogI2ExMTExMTtcXG4gICAgICAgIC0tZm9udC1jb2xvcjogIzE2MTUxNTtcXG4gICAgICAgIC0tYm9keS1mb250OiAnQnJpY29sYWdlIEdyb3Rlc3F1ZSc7XFxuICAgICAgICAtLWJpZy1mb250LXNpemU6IDRyZW07XFxuICAgICAgICAtLWgxLWZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICAgICAgLS1oMi1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIC0taDMtZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICAtLW5vcm1hbC1mb250LXNpemU6IDFyZW07XFxuICAgICAgICAtLXNtYWxsLWZvbnQtc2l6ZTogLjhyZW07XFxuICAgICAgICAtLWZvbnQtcmVndWxhcjogNTAwO1xcbiAgICAgICAgLS1mb250LW1lZGl1bTogNjAwO1xcbiAgICAgICAgLS1mb250LWJvbGQ6IDgwMDtcXG4gICAgfVxcblxcblxcbi8qIFxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuKi9cXG5cXG4uc3RyaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG5cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcXG59XFxuXFxubGkge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5saSBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTI1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEgMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAzO1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnRleHQge1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuICAgIHBhZGRpbmctbGVmdDogMS4ycmVtO1xcbn1cXG5cXG4uaW1nLWhvbWUge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNCAvIDQ7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmltZy1tZW51IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDQgLyAzO1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcblxcbi5oMy1tZW51IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5waXp6YS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmF0Y2g7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTI1MHB4O1xcbiAgICByb3ctZ2FwOiA0MHB4O1xcbiAgICBjb2x1bW4tZ2FwOiA4MHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZmlyc3QtbGluZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmltZy1jb250YWN0IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDQgLyA0O1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5vcGVuIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBhY3RpdmVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NPTlRBQ1QnKVxuICAgIGFjdGl2ZU1lbnUuY2xhc3NMaXN0ID0gJ2FjdGl2ZSdcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJ1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWcvbWFwMS5wbmdcIlxuICAgIGltZy5jbGFzc0xpc3QgPSAnaW1nLWNvbnRhY3QnXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGV4dC5jbGFzc05hbWUgPSAnb3BlbidcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ1ZpYSBSb21hLCAxXFxyXFxuUm9tZSwgSXRhbHlcXHJcXG5UZWwuIDEyMyA0NTYgNzggOTBcXHJcXG4gXFxyXFxuIFxcclxcbk9wZW46IDE4OjMwIC0gMjM6MzBcXHJcXG5Nb25kYXkgQ0xPU0VEJ1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dClcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3QiLCJmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGUgaGVhZGVyIGlzIGxvYWRlZCcpXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuXG4gICAgbWFpbkRpdi5pbm5lckhUTUwgPSAnJ1xuICAgIFxuICAgIGNvbnN0IHN0cmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzdHJpcC5jbGFzc05hbWUgPSAnc3RyaXAnXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChzdHJpcClcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51LWNvbnRhaW5lcidcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdIT01FJykpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnTUVOVScpKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0NPTlRBQ1QnKSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGEudGV4dENvbnRlbnQgPSBgJHtuYW1lfWBcbiAgICBhLmlkID0gbmFtZVxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGEpXG4gICAgcmV0dXJuIG1lbnVJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIZWFkZXJcbiIsImZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGUgaG9tZSBpcyBsb2FkZWQnKVxuICAgIGNvbnN0IGFjdGl2ZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSE9NRScpXG4gICAgYWN0aXZlTWVudS5jbGFzc0xpc3QgPSAnYWN0aXZlJ1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250YWluZXIuY2xhc3NOYW1lID0gJ21haW4tY29udGFpbmVyJ1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUGl6emVyaWEnXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJ1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWcvcGl6emEuanBnXCJcbiAgICBpbWcuY2xhc3NMaXN0ID0gJ2ltZy1ob21lJ1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRleHQuY2xhc3NOYW1lID0gJ3RleHQnXG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdBIHBsYWNlIHRpZWQgdG8gdHJhZGl0aW9ucywgc2ltcGxlIGFuZCB1bm1pc3Rha2FibGUgZmxhdm9ycywgYW5kIHRoZSBhdXRoZW50aWMgY29sb3JzIG9mIHRoaXMgbGFuZC4gT3VyIHBpenphcyBhcmUgdGhlIHJlc3VsdCBvZiBhIGxvbmcgbGVhdmVuaW5nIHByb2Nlc3MuIFdlIHVzZSBvbmx5IGNhcmVmdWxseSBzZWxlY3RlZCBpbmdyZWRpZW50cywgc291cmNlZCBmcm9tIHNtYWxsIHRyYWRpdGlvbmFsIHByb2R1Y2VycyBhbmQgXCJTbG93IEZvb2RcIiBwcmVzaWRpYSwgbWFpbmx5IGZyb20gU291dGhlcm4gSXRhbHkuIFRoaXMgd2F5LCB3ZSBlbmhhbmNlIHRoZSByZWdpb25zIGFuZCByZXZpdmUgYW5jaWVudCBjcmFmdHMgYW5kIGZsYXZvcnMuJ1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dClcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWUiLCJmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zb2xlLmxvZygndGhlIG1lbnUgaXMgbG9hZGVkJylcbiAgICBjb25zdCBhY3RpdmVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01FTlUnKVxuICAgIGFjdGl2ZU1lbnUuY2xhc3NMaXN0ID0gJ2FjdGl2ZSdcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJ1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWcvbWVudS5qcGdcIlxuICAgIGltZy5jbGFzc0xpc3QgPSAnaW1nLW1lbnUnXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpXG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdwaXp6YS1jb250YWluZXInXG5cbiAgICBjb25zdCB0aXRsZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgdGl0bGVNZW51LmNsYXNzTmFtZSA9ICdoMy1tZW51J1xuICAgIHRpdGxlTWVudS50ZXh0Q29udGVudCA9ICdQSVpaRSdcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRpdGxlTWVudSlcblxuICAgIGNvbnN0IG1hcmluYXJhID0gbmV3IFBpenphKFxuICAgICAgICAnTWFyaW5hcmEnLFxuICAgICAgICAnUG9tb2Rvcm8gLSBBZ2xpbyAtIEJhc2lsaWNvIEZyZXNjbyAtIE9yaWdhbm8nLFxuICAgICAgICAnNSw1MCdcbiAgICApO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFyaW5hcmEuY3JlYXRlQ2FyZCgpKVxuXG4gICAgY29uc3QgbWFyZ2hlcml0YSA9IG5ldyBQaXp6YShcbiAgICAgICAgJ01hcmdoZXJpdGEnLFxuICAgICAgICAnUG9tb2Rvcm8gLSBNb3p6YXJlbGxhIC0gQmFzaWxpY28gRnJlc2NvIC0gT2xpbyBFVk8nLFxuICAgICAgICAnNiw1MCdcbiAgICApO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFyZ2hlcml0YS5jcmVhdGVDYXJkKCkpXG5cbiAgICBjb25zdCBkaWF2b2xhID0gbmV3IFBpenphKFxuICAgICAgICAnRGlhdm9sYScsXG4gICAgICAgICdQb21vZG9ybyAtIE1venphcmVsbGEgLSBTcGlhbmF0YSBQaWNjYW50ZSAtIEJhc2lsaWNvIEZyZXNjbycsXG4gICAgICAgICc3LDUwJ1xuICAgICk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWF2b2xhLmNyZWF0ZUNhcmQoKSlcblxuICAgIGNvbnN0IGNvdHRvID0gbmV3IFBpenphKFxuICAgICAgICAnQ290dG8gZSBGdW5naGknLFxuICAgICAgICAnUG9tb2Rvcm8gLSBNb3p6YXJlbGxhIC0gRnVuZ2hpIC0gUHJvc2NpdXR0byBDb3R0byBhbCBOYXR1cmFsZScsXG4gICAgICAgICc4LDAwJ1xuICAgICk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3R0by5jcmVhdGVDYXJkKCkpXG5cbiAgICBjb25zdCBwb21vZG9yaW5pID0gbmV3IFBpenphKFxuICAgICAgICAnUG9tb2RvcmluaSBSdWNvbGEgZSBHcmFuYScsXG4gICAgICAgICdQb21vZG9ybyAtIE1venphcmVsbGEgLSBQb21vZG9yaW5pIC0gUnVjb2xhIFNlbHZhdGljYSAtIEdyYW5hIGEgc2NhZ2xpZScsXG4gICAgICAgICc4LDUwJ1xuICAgICk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwb21vZG9yaW5pLmNyZWF0ZUNhcmQoKSlcbiAgICBcbiAgICBjb25zdCBzcGVjayA9IG5ldyBQaXp6YShcbiAgICAgICAgJ1NwZWNrIGUgQnJpZScsXG4gICAgICAgICdQb21vZG9ybyAtIE1venphcmVsbGEgLSBCcmllIC0gU3BlY2snLFxuICAgICAgICAnOCw1MCdcbiAgICApO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BlY2suY3JlYXRlQ2FyZCgpKVxuICAgIFxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcbiAgICBcbn1cblxuY2xhc3MgUGl6emEge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlXG4gICAgfVxuXG4gICAgY3JlYXRlQ2FyZCgpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0ID0gJ2NhcmQnXG5cbiAgICAgICAgY29uc3QgZmlyc3RMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZmlyc3RMaW5lLmNsYXNzTGlzdCA9ICdmaXJzdC1saW5lJ1xuXG4gICAgICAgIGNvbnN0IG5hbWVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIG5hbWVUYWcudGV4dENvbnRlbnQgPSB0aGlzLm5hbWVcbiAgICAgICAgbmFtZVRhZy5jbGFzc0xpc3QgPSAncGl6emEtbmFtZSdcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaWNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHByaWNlVGFnLnRleHRDb250ZW50ID0gdGhpcy5wcmljZVxuICAgICAgICBwcmljZVRhZy5jbGFzc0xpc3QgPSAncHJpY2UtdGFnJ1xuXG4gICAgICAgIGZpcnN0TGluZS5hcHBlbmRDaGlsZChuYW1lVGFnKVxuICAgICAgICBmaXJzdExpbmUuYXBwZW5kQ2hpbGQocHJpY2VUYWcpXG5cbiAgICAgICAgY29uc3QgaW5ncmVkaWVudHNUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgaW5ncmVkaWVudHNUYWcudGV4dENvbnRlbnQgPSB0aGlzLmluZ3JlZGllbnRzXG4gICAgICAgIGluZ3JlZGllbnRzVGFnLmNsYXNzTGlzdCA9ICdpbmdyZWRpZW50cy10YWcnXG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChmaXJzdExpbmUpXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNUYWcpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY2FyZFxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIGNyZWF0ZUNhcmQgbWV0aG9kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2xvYWQtaG9tZSc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9sb2FkLW1lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vbG9hZC1jb250YWN0JztcbmltcG9ydCBsb2FkSGVhZGVyIGZyb20gJy4vbG9hZC1oZWFkZXInO1xuXG4vLyBpbml0aWxpemF0aW9uXG5sb2FkSGVhZGVyKClcbmxvYWRIb21lKClcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSB7XG4gICAgICAgIGxldCB0YXJnZXRCdG4gPSBldmVudC50YXJnZXQuaWRcbiAgICAgICAgaWYgKHRhcmdldEJ0biA9PT0gJ0hPTUUnKSB7XG4gICAgICAgICAgICBsb2FkSGVhZGVyKClcbiAgICAgICAgICAgIGxvYWRIb21lKClcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRCdG4gPT09ICdNRU5VJykge1xuICAgICAgICAgICAgbG9hZEhlYWRlcigpXG4gICAgICAgICAgICBsb2FkTWVudSgpXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0QnRuID09PSAnQ09OVEFDVCcpIHtcbiAgICAgICAgICAgIGxvYWRIZWFkZXIoKVxuICAgICAgICAgICAgbG9hZENvbnRhY3QoKVxuICAgICAgICB9IFxuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9