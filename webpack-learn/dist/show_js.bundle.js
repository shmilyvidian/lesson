/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["show_js"],{

/***/ "./show.js":
/*!*****************!*\
  !*** ./show.js ***!
  \*****************/
/***/ ((module) => {

eval("// 操作 DOM 元素，把 content 显示到网页上\nfunction show(content) {\n    window.document.getElementById('app').innerText = 'Hello,' + content;\n  }\n  \n  // 通过 CommonJS 规范导出 show 函数\n  module.exports = show;\n\n//# sourceURL=webpack:///./show.js?");

/***/ })

}]);