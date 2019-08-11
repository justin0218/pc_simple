webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");










var _jsxFileName = "/Users/justin/Desktop/private/nextjs/pages/index.js";



 // import banner from '../images/banner'

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      blogList: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(this.props.jsonPageRes);
                _context.next = 3;
                return fetch("//momoman.cn/v1/blog/list?type=-1");

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                res = _context.sent;
                console.log(res);
                this.setState({
                  blogList: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(res.data), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(res.data))
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var blogList = this.state.blogList;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          width: "100%",
          height: 61,
          backgroundColor: "rgba(255,255,255,0.9)",
          position: "fixed",
          borderBottom: "1px solid #ddd",
          boxShadow: "0 1px 1px rgba(0,0,0,.04)",
          zIndex: 999
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          width: 1000,
          margin: "0 auto",
          height: "100%",
          lineHeight: "60px",
          fontSize: 22
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "\u80E1\u661F\u4E2A\u4EBA\u535A\u5BA2")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("article", {
        style: {
          width: 1000,
          margin: "0 auto"
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "left_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "left_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "\u5173\u4E8E"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: 12
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
        className: "jsx-446659187" + " " + "about_me_i",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "/static/images/me.jpeg",
        style: {
          width: 120,
          height: 120
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          lineHeight: "22px",
          "fontSize": 14,
          marginTop: -6
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u80E1\u661F"), "\uFF0C93\u5E74\u51FA\u751F\uFF0Cweb\u524D\u7AEF\u5DE5\u7A0B\u5E08 && \u670D\u52A1\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u6CA1\u4EC0\u4E48\u7279\u6B8A\u7231\u597D\uFF0C\u653E\u5047\u4E5F\u662F\u5B85\u5728\u5BB6\u91CC\uFF0C\u65E0\u804A\u7684\u65F6\u5019\u5199\u5199\u4EE3\u7801\uFF0C\u7814\u7A76\u7814\u7A76\u6280\u672F\u65B9\u9762\u7684\u4E1C\u897F\uFF0C\u5BF9\u8FD9\u79CD\u4E1C\u897F\u7B97\u4E00\u79CD\u70ED\u7231\u5427\uFF0C\u4F46\u662F\u6211\u8BA4\u4E3A\u5BF9\u4E8E\u6211\u6765\u8BF4\uFF0C \u53EA\u662F\u9009\u62E9\u4E86\u8FD9\u4E00\u6761\u8DEF\uFF0C\u9009\u62E9\u4E86\u5C31\u8981\u70ED\u7231\uFF0C\u5E72\u4E0A\u4E00\u884C\u5C31\u5F97\u7231\u4E0A\u4E00\u884C\uFF0C\u5982\u679C\u5F53\u521D\u7684\u9009\u62E9\u4E0D\u662F\u4E92\u8054\u7F51\uFF0C\u6211\u4E5F\u4F1A\u5F88\u70ED\u7231\u3002"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "left_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u76F8\u518C"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          padding: 10,
          overflow: "hidden",
          listStyle: "none",
          margin: 0
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "http://www.yangqq.com/skin/850/images/text02.jpg",
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "http://www.yangqq.com/skin/850/images/b02.jpg",
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "http://www.yangqq.com/d/file/news/s/2014-01-29/15e613795b6fe3ad00e917556b6b76c6.jpg",
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "http://www.yangqq.com/d/file/news/read/2014-05-28/f805e33f1266f2504739c740084faac7.jpg",
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "http://www.yangqq.com/d/file/news/s/2013-07-09/d353fb4c75965aef35182a7875186b79.jpg",
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "http://www.yangqq.com/d/file/news/s/2014-01-04/6bccfe64820d609bcd0ab7ca7a7fa5dd.jpg",
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginBottom: 20
        },
        className: "jsx-446659187" + " " + "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", (_React$createElement = {
        className: "keyboard",
        id: "keyboard",
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u8BCD",
        style: {
          color: "#000"
        },
        type: "text"
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_React$createElement, "className", "jsx-446659187" + " " + "input_text"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 58
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        className: "jsx-446659187" + " " + "input_submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\u641C\u7D22")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "left_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u5206\u7C7B"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: 10
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "cation_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u6587\u7AE0\uFF0813\uFF09"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "cation_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u76F8\u518C\uFF088\uFF09"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "left_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\u70B9\u51FB\u6392\u884C"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: 10
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "cation_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\u6587\u7AE0\uFF0813\uFF09"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "cation_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "\u76F8\u518C\uFF088\uFF09"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "left_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\u53CB\u60C5\u94FE\u63A5"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: 10
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "cation_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\u767E\u5EA6"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "left_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u5173\u6CE8\u6211"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: 10
        },
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        style: {
          width: "86%",
          background: "#fff",
          padding: 19
        },
        src: "/static/images/erweima.jpg",
        className: "jsx-446659187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-446659187" + " " + "right_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, blogList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: k,
          className: "jsx-446659187" + " " + "right_item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, item.cover && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
          className: "jsx-446659187",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
          src: item.cover,
          className: "jsx-446659187",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
          className: "jsx-446659187",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "[ \u9876 ] ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            color: "#222"
          },
          className: "jsx-446659187",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, item.name)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          className: "jsx-446659187",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, item.preface));
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1009193782",
        __self: this
      }, ".left_item.jsx-446659187 .cation_item.jsx-446659187{margin-bottom:10px;margin-left:10px;}.search.jsx-446659187{border:1px solid #000;background:#000;border-radius:0 5px 5px 0;position:relative;}.search.jsx-446659187 .input_submit.jsx-446659187{border:0;background:0;color:#fff;outline:none;position:absolute;top:10px;right:6%;}.search.jsx-446659187 input.input_text.jsx-446659187{border:0;line-height:36px;height:36px;width:72%;padding-left:10px;outline:none;}.right_item.jsx-446659187 p.jsx-446659187{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-446659187 h3.jsx-446659187{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-446659187 i.jsx-446659187{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-446659187{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;}.left_box.jsx-446659187{width:300px;float:left;}.left_item.jsx-446659187{background:rgba(255,255,255,0.5);margin-bottom:20px;overflow:hidden;}.left_item.jsx-446659187 ul.jsx-446659187 li.jsx-446659187{width:32%;overflow:hidden;float:left;height:80px;margin-bottom:2px;margin-right:2px;}.left_item.jsx-446659187 ul.jsx-446659187 li.jsx-446659187 img.jsx-446659187{width:100%;height:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;display:block;}.left_item.jsx-446659187 h2.jsx-446659187{color:#333;font-size:14px;line-height:30px;padding-left:20px;background:#fff;margin:0;}.right_box.jsx-446659187{width:680px;float:right;}.about_me_i.jsx-446659187{width:120px;float:left;clear:left;margin-right:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R29CLEFBRzhCLEFBSUcsQUFNVCxBQVNBLEFBUU8sQUFTSCxBQU9ILEFBUXFCLEFBT3RCLEFBSXNCLEFBS3ZCLEFBUUMsQUFRQSxBQVFBLEFBSUMsU0FwRkcsQUFTSSxDQWdESCxDQVFKLEFBUUcsQ0F4Q0QsQUFlSixBQWlDQyxBQUlBLEdBM0RNLEdBVEEsQ0EzQkYsR0FJRCxBQU9ELENBZ0RmLEFBaUI4QixBQW9CakIsQ0FKYixFQXhFZ0IsQUF3QkcsQUF3Qk4sQUFnQk0sTUEvQ1ksQ0F6QmQsQUF1Q0YsQUFXTSxDQW1DRCxDQXJFRixDQTNCcEIsQ0FvRWdCLENBaEVZLEFBZ0JaLEtBd0JJLEFBd0NFLEdBeEVFLEFBdUNKLEVBOUJJLENBZ0RGLEVBekNLLEFBZ0RFLENBZFQsQUFtQ0EsT0FwREosRUFSRSxBQWdERSxDQWpDRixFQS9DRSxBQVFMLEVBU0ksQ0FnREUsQ0FQbkIsQUFtQ0EsR0FwRG1CLEVBaENOLENBZWlCLENBU3BCLENBZVcsQUF3QkMsQ0FVdkIsRUFoRUMsR0FqQkYsQUFTRSxFQXdCQSxBQWdDQSxFQWdCQSxFQXhDQSxPQU9BLE9BeEJzQixvQkFDQyxFQStDUixjQUNmLEtBL0NBIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdHBzIGZyb20gJy4uL3V0aWxzL2Jsb2dfdHlwZXMnXG4vLyBpbXBvcnQgYmFubmVyIGZyb20gJy4uL2ltYWdlcy9iYW5uZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBibG9nTGlzdDpbXVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuanNvblBhZ2VSZXMpXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYC8vbW9tb21hbi5jbi92MS9ibG9nL2xpc3Q/dHlwZT0tMWApXG4gICAgICByZXMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2dMaXN0OlsuLi5yZXMuZGF0YSwuLi5yZXMuZGF0YV19KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7YmxvZ0xpc3R9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDo2MSxiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixwb3NpdGlvbjpcImZpeGVkXCIsYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkICNkZGRcIixib3hTaGFkb3c6XCIwIDFweCAxcHggcmdiYSgwLDAsMCwuMDQpXCIsekluZGV4Ojk5OX19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDoxMDAwLG1hcmdpbjpcIjAgYXV0b1wiLGhlaWdodDpcIjEwMCVcIixsaW5lSGVpZ2h0OlwiNjBweFwiLGZvbnRTaXplOjIyfX0+6IOh5pif5Liq5Lq65Y2a5a6iPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0Ojc1fX0+PC9kaXY+XG4gICAgICAgIDxhcnRpY2xlIHN0eWxlPXt7d2lkdGg6MTAwMCxtYXJnaW46XCIwIGF1dG9cIn19PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfYm94XCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxoMj7lhbPkuo48L2gyPlxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IDEyfX0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhYm91dF9tZV9pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbWUuanBlZ1wiIHN0eWxlPXt7d2lkdGg6MTIwLGhlaWdodDoxMjB9fSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIycHhcIixcImZvbnRTaXplXCI6IDE0LG1hcmdpblRvcDogLTZ9fT5cbiAgICAgICAgICAgICAgICAgICAgPGI+6IOh5pifPC9iPu+8jDkz5bm05Ye655Sf77yMd2Vi5YmN56uv5bel56iL5biIICYmIOacjeWKoeerr+W3peeoi+W4iO+8jOayoeS7gOS5iOeJueauiueIseWlve+8jOaUvuWBh+S5n+aYr+WuheWcqOWutumHjO+8jOaXoOiBiueahOaXtuWAmeWGmeWGmeS7o+egge+8jOeglOeptueglOeptuaKgOacr+aWuemdoueahOS4nOilv++8jOWvuei/meenjeS4nOilv+eul+S4gOenjeeDreeIseWQp++8jOS9huaYr+aIkeiupOS4uuWvueS6juaIkeadpeivtO+8jFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+q5piv6YCJ5oup5LqG6L+Z5LiA5p2h6Lev77yM6YCJ5oup5LqG5bCx6KaB54Ot54ix77yM5bmy5LiK5LiA6KGM5bCx5b6X54ix5LiK5LiA6KGM77yM5aaC5p6c5b2T5Yid55qE6YCJ5oup5LiN5piv5LqS6IGU572R77yM5oiR5Lmf5Lya5b6I54Ot54ix44CCXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgPGgyPuebuOWGjDwvaDI+XG4gICAgICAgICAgICAgICA8dWwgc3R5bGU9e3twYWRkaW5nOiAxMCxvdmVyZmxvdzogXCJoaWRkZW5cIixsaXN0U3R5bGU6XCJub25lXCIsbWFyZ2luOjB9fT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vd3d3LnlhbmdxcS5jb20vc2tpbi84NTAvaW1hZ2VzL3RleHQwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiaHR0cDovL3d3dy55YW5ncXEuY29tL3NraW4vODUwL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly93d3cueWFuZ3FxLmNvbS9kL2ZpbGUvbmV3cy9zLzIwMTQtMDEtMjkvMTVlNjEzNzk1YjZmZTNhZDAwZTkxNzU1NmI2Yjc2YzYuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly93d3cueWFuZ3FxLmNvbS9kL2ZpbGUvbmV3cy9yZWFkLzIwMTQtMDUtMjgvZjgwNWUzM2YxMjY2ZjI1MDQ3MzljNzQwMDg0ZmFhYzcuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly93d3cueWFuZ3FxLmNvbS9kL2ZpbGUvbmV3cy9zLzIwMTMtMDctMDkvZDM1M2ZiNGM3NTk2NWFlZjM1MTgyYTc4NzUxODZiNzkuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly93d3cueWFuZ3FxLmNvbS9kL2ZpbGUvbmV3cy9zLzIwMTQtMDEtMDQvNmJjY2ZlNjQ4MjBkNjA5YmNkMGFiN2NhN2E3ZmE1ZGQuanBnXCIgLz48L2xpPiAgICAgICAgXG4gICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIHsvKiDmkJzntKLmoYYgICovfVxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImtleWJvYXJkXCIgaWQ9XCJrZXlib2FyZFwiIGNsYXNzTmFtZT1cImlucHV0X3RleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWFs+mUruWtl+ivjVwiIHN0eWxlPXt7Y29sb3I6IFwiIzAwMFwifX0gIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0X3N1Ym1pdFwiPuaQnOe0ojwvYnV0dG9uPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIHsvKiDliIbnsbsgKi99XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxoMj7liIbnsbs8L2gyPlxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+5paH56ug77yIMTPvvIk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+55u45YaM77yIOO+8iTwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgey8qIOeCueWHu+aOkuihjCAqL31cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgPGgyPueCueWHu+aOkuihjDwvaDI+XG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIj7mlofnq6DvvIgxM++8iTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIj7nm7jlhozvvIg477yJPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICB7Lyog5Y+L5oOF6ZO+5o6lICovfVxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICA8aDI+5Y+L5oOF6ZO+5o6lPC9oMj5cbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiPueZvuW6pjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgey8qIOWFs+azqOaIkSAqL31cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgPGgyPuWFs+azqOaIkTwvaDI+XG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6IFwiODYlXCIsYmFja2dyb3VuZDogXCIjZmZmXCIscGFkZGluZzogMTl9fSBzcmM9XCIvc3RhdGljL2ltYWdlcy9lcndlaW1hLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfYm94XCI+XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgYmxvZ0xpc3QubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X2l0ZW1cIiBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb3ZlciAmJiA8aT48aW1nIHNyYz17aXRlbS5jb3Zlcn0gLz48L2k+fVxuICAgICAgICAgICAgICAgICAgICA8aDM+WyDpobYgXSA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzIyMlwifX0+e2l0ZW0ubmFtZX08L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ucHJlZmFjZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sZWZ0X2l0ZW0gLmNhdGlvbl9pdGVte1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2ggLmlucHV0X3N1Ym1pdCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogMDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICByaWdodDogNiU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2ggaW5wdXQuaW5wdXRfdGV4dCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDcyJTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBoM3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICNGRkYgMXB4IDFweCAxcHg7XG4gICAgICAgICAgICBjb2xvcjogI2RlNDk0OTtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBpe1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3YjdjO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfYm94e1xuICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVte1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW0gdWwgbGl7XG4gICAgICAgICAgICB3aWR0aDogMzIlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW0gdWwgbGkgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbSBoMntcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luOjBcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2JveHtcbiAgICAgICAgICAgIHdpZHRoOjY4MHB4O1xuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYm91dF9tZV9pe1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjbGVhcjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250OiAxNXB4IFwiTWljcm9zb2Z0IFlhSGVpXCI7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "3409905420",
        __self: this
      }, "body{font:15px \"Microsoft YaHei\";color:#555;background:#efefef;line-height:1.5;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTjJCLEFBR3lDLDRCQUNqQixXQUNRLG1CQUNILGdCQUNSLFNBQ0MsVUFDWCIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHRwcyBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuLy8gaW1wb3J0IGJhbm5lciBmcm9tICcuLi9pbWFnZXMvYmFubmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgYmxvZ0xpc3Q6W11cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmpzb25QYWdlUmVzKVxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGAvL21vbW9tYW4uY24vdjEvYmxvZy9saXN0P3R5cGU9LTFgKVxuICAgICAgcmVzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtibG9nTGlzdDpbLi4ucmVzLmRhdGEsLi4ucmVzLmRhdGFdfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2Jsb2dMaXN0fSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6NjEsYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIscG9zaXRpb246XCJmaXhlZFwiLGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjZGRkXCIsYm94U2hhZG93OlwiMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA0KVwiLHpJbmRleDo5OTl9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6MTAwMCxtYXJnaW46XCIwIGF1dG9cIixoZWlnaHQ6XCIxMDAlXCIsbGluZUhlaWdodDpcIjYwcHhcIixmb250U2l6ZToyMn19PuiDoeaYn+S4quS6uuWNmuWuojwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDo3NX19PjwvZGl2PlxuICAgICAgICA8YXJ0aWNsZSBzdHlsZT17e3dpZHRoOjEwMDAsbWFyZ2luOlwiMCBhdXRvXCJ9fT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2JveFwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICA8aDI+5YWz5LqOPC9oMj5cbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMn19PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYWJvdXRfbWVfaVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21lLmpwZWdcIiBzdHlsZT17e3dpZHRoOjEyMCxoZWlnaHQ6MTIwfX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bGluZUhlaWdodDogXCIyMnB4XCIsXCJmb250U2l6ZVwiOiAxNCxtYXJnaW5Ub3A6IC02fX0+XG4gICAgICAgICAgICAgICAgICAgIDxiPuiDoeaYnzwvYj7vvIw5M+W5tOWHuueUn++8jHdlYuWJjeerr+W3peeoi+W4iCAmJiDmnI3liqHnq6/lt6XnqIvluIjvvIzmsqHku4DkuYjnibnmrorniLHlpb3vvIzmlL7lgYfkuZ/mmK/lroXlnKjlrrbph4zvvIzml6DogYrnmoTml7blgJnlhpnlhpnku6PnoIHvvIznoJTnqbbnoJTnqbbmioDmnK/mlrnpnaLnmoTkuJzopb/vvIzlr7nov5nnp43kuJzopb/nrpfkuIDnp43ng63niLHlkKfvvIzkvYbmmK/miJHorqTkuLrlr7nkuo7miJHmnaXor7TvvIxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWPquaYr+mAieaLqeS6hui/meS4gOadoei3r++8jOmAieaLqeS6huWwseimgeeDreeIse+8jOW5suS4iuS4gOihjOWwseW+l+eIseS4iuS4gOihjO+8jOWmguaenOW9k+WIneeahOmAieaLqeS4jeaYr+S6kuiBlOe9ke+8jOaIkeS5n+S8muW+iOeDreeIseOAglxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxoMj7nm7jlhow8L2gyPlxuICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7cGFkZGluZzogMTAsb3ZlcmZsb3c6IFwiaGlkZGVuXCIsbGlzdFN0eWxlOlwibm9uZVwiLG1hcmdpbjowfX0+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiaHR0cDovL3d3dy55YW5ncXEuY29tL3NraW4vODUwL2ltYWdlcy90ZXh0MDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly93d3cueWFuZ3FxLmNvbS9za2luLzg1MC9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vd3d3LnlhbmdxcS5jb20vZC9maWxlL25ld3Mvcy8yMDE0LTAxLTI5LzE1ZTYxMzc5NWI2ZmUzYWQwMGU5MTc1NTZiNmI3NmM2LmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vd3d3LnlhbmdxcS5jb20vZC9maWxlL25ld3MvcmVhZC8yMDE0LTA1LTI4L2Y4MDVlMzNmMTI2NmYyNTA0NzM5Yzc0MDA4NGZhYWM3LmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vd3d3LnlhbmdxcS5jb20vZC9maWxlL25ld3Mvcy8yMDEzLTA3LTA5L2QzNTNmYjRjNzU5NjVhZWYzNTE4MmE3ODc1MTg2Yjc5LmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vd3d3LnlhbmdxcS5jb20vZC9maWxlL25ld3Mvcy8yMDE0LTAxLTA0LzZiY2NmZTY0ODIwZDYwOWJjZDBhYjdjYTdhN2ZhNWRkLmpwZ1wiIC8+PC9saT4gICAgICAgIFxuICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICB7Lyog5pCc57Si5qGGICAqL31cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJrZXlib2FyZFwiIGlkPVwia2V5Ym9hcmRcIiBjbGFzc05hbWU9XCJpbnB1dF90ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlhbPplK7lrZfor41cIiBzdHlsZT17e2NvbG9yOiBcIiMwMDBcIn19ICB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnB1dF9zdWJtaXRcIj7mkJzntKI8L2J1dHRvbj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICB7Lyog5YiG57G7ICovfVxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICA8aDI+5YiG57G7PC9oMj5cbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiPuaWh+eroO+8iDEz77yJPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiPuebuOWGjO+8iDjvvIk8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIHsvKiDngrnlh7vmjpLooYwgKi99XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxoMj7ngrnlh7vmjpLooYw8L2gyPlxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+5paH56ug77yIMTPvvIk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+55u45YaM77yIOO+8iTwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgey8qIOWPi+aDhemTvuaOpSAqL31cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgPGgyPuWPi+aDhemTvuaOpTwvaDI+XG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIj7nmb7luqY8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIHsvKiDlhbPms6jmiJEgKi99XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxoMj7lhbPms6jmiJE8L2gyPlxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjg2JVwiLGJhY2tncm91bmQ6IFwiI2ZmZlwiLHBhZGRpbmc6IDE5fX0gc3JjPVwiL3N0YXRpYy9pbWFnZXMvZXJ3ZWltYS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X2JveFwiPlxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGJsb2dMaXN0Lm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9pdGVtXCIga2V5PXtrfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY292ZXIgJiYgPGk+PGltZyBzcmM9e2l0ZW0uY292ZXJ9IC8+PC9pPn1cbiAgICAgICAgICAgICAgICAgICAgPGgzPlsg6aG2IF0gPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMyMjJcIn19PntpdGVtLm5hbWV9PC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnByZWZhY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGVmdF9pdGVtIC5jYXRpb25faXRlbXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2h7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoIC5pbnB1dF9zdWJtaXQge1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDYlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoIGlucHV0LmlucHV0X3RleHQge1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MiU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gcCB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAjRkZGIDFweCAxcHggMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNkZTQ5NDk7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gaXtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVte1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogIzc5N2I3YztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2JveHtcbiAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVtIHVsIGxpe1xuICAgICAgICAgICAgd2lkdGg6IDMyJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVtIHVsIGxpIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW0gaDJ7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbjowXG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9ib3h7XG4gICAgICAgICAgICB3aWR0aDo2ODBweDtcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJvdXRfbWVfaXtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udDogMTVweCBcIk1pY3Jvc29mdCBZYUhlaVwiO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context2.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.8069de03cd7fd9969a8d.hot-update.js.map