webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./utils/blog_types.js":
/*!*****************************!*\
  !*** ./utils/blog_types.js ***!
  \*****************************/
/*! exports provided: getTpValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTpValue", function() { return getTpValue; });
var tps = [{
  label: "笔记",
  value: 1
}, {
  label: "原创",
  value: 3
}, {
  label: "小感想",
  value: 2
}];
var getTpValue = function getTpValue(tp) {
  var finded = tps.find(function (item) {
    return item.value == tp;
  });

  if (finded) {
    return finded.label;
  }

  return "";
};

/***/ })

})
//# sourceMappingURL=detail.js.b312ca9f5b5e170b2921.hot-update.js.map