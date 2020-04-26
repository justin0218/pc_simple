webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _apis_blog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../apis/blog */ "./apis/blog.js");









var _jsxFileName = "/Users/justin/Desktop/my/client-pc/pages/detail.js";











var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      blogDtail: "",
      detailData: {},
      commentsList: [],
      commentTotal: 0,
      saytext: "",
      submitDisb: false,
      submitTxt: "提交"
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "getComments",
    value: function () {
      var _getComments = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, commentMessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.query.id;
                _context.next = 3;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_18__["GetBlogComments"](id);

              case 3:
                commentMessage = _context.sent;
                this.setState({
                  commentsList: commentMessage.blogCommentListList,
                  commentTotal: commentMessage.total
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getComments() {
        return _getComments.apply(this, arguments);
      }

      return getComments;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var id, res, data, fileContent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.props.query.id;
                _context2.next = 3;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_18__["GetBlogDetail"](id);

              case 3:
                res = _context2.sent;
                data = res.currentArticle;
                _context2.next = 7;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_18__["ReadNetFile"](data.htmlTxtUrl);

              case 7:
                fileContent = _context2.sent;
                _context2.next = 10;
                return this.getComments();

              case 10:
                this.setState({
                  blogDtail: fileContent.txt,
                  detailData: data
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "subMitComment",
    value: function () {
      var _subMitComment = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var saytext, id, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                saytext = this.state.saytext;
                id = this.props.query.id;
                this.setState({
                  submitDisb: true,
                  submitTxt: "提交中"
                });
                _context3.next = 5;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_18__["SubMitComment"](saytext, id);

              case 5:
                res = _context3.sent;

                if (!(res.code != 0)) {
                  _context3.next = 10;
                  break;
                }

                alert(res.msg);
                _context3.next = 12;
                break;

              case 10:
                _context3.next = 12;
                return this.getComments();

              case 12:
                this.setState({
                  submitDisb: false,
                  submitTxt: "提交",
                  saytext: ""
                });

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function subMitComment() {
        return _subMitComment.apply(this, arguments);
      }

      return subMitComment;
    }()
  }, {
    key: "makeGood",
    value: function () {
      var _makeGood = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var detailData, id, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                detailData = this.state.detailData;
                id = this.props.query.id;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/client/blog/good/make?blog_id=").concat(id));

              case 4:
                res = _context4.sent;
                detailData.goodNum++;
                this.setState({
                  detailData: detailData
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function makeGood() {
        return _makeGood.apply(this, arguments);
      }

      return makeGood;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          blogDtail = _this$state.blogDtail,
          detailData = _this$state.detailData,
          commentsList = _this$state.commentsList,
          submitDisb = _this$state.submitDisb,
          submitTxt = _this$state.submitTxt,
          saytext = _this$state.saytext,
          commentTotal = _this$state.commentTotal;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-3300475911" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, detailData.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3300475911" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3300475911" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3300475911" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(detailData.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3300475911" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(detailData.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3300475911" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, detailData.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3300475911" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "\u7B80\u4ECB"), " ", detailData.preface), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: blogDtail
        },
        previewcontainer: "true",
        style: {
          width: "auto"
        },
        className: "jsx-3300475911" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-3300475911" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        onClick: this.makeGood.bind(this),
        className: "jsx-3300475911" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, detailData.goodNum), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3300475911" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, detailData.prev ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/detail?id=".concat(detailData.prev.id),
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, detailData.prev.name)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u56DE\u5230\u5217\u8868")), detailData.next ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/detail?id=".concat(detailData.next.id),
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, detailData.next.name)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u56DE\u5230\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "news_pl",
        className: "jsx-3300475911" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3300475911" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-3300475911" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          style: {
            background: "url(".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"][item.id % _utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"].length], ") no-repeat top 14px left 10px")
          },
          className: "jsx-3300475911",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-3300475911",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3300475911" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-3300475911",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3300475911" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: commentsList.length == 0 ? {
          marginTop: 8
        } : {},
        className: "jsx-3300475911" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\u5171\u6709", commentTotal, "\u6761\u8BC4\u8BBA")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        value: saytext,
        onChange: function onChange(e) {
          _this2.setState({
            saytext: e.target.value
          });
        },
        rows: "6",
        id: "saytext",
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "imageField",
        type: "submit",
        onClick: this.subMitComment.bind(this),
        disabled: submitDisb,
        value: submitTxt,
        style: {
          outline: "none",
          cursor: "pointer"
        },
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3300475911",
        __self: this
      }, ".nextinfo.jsx-3300475911 a.jsx-3300475911{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-3300475911 a.jsx-3300475911:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-3300475911{margin:10px 10px 10px 0;}#plpost.jsx-3300475911 input[type=\"submit\"].jsx-3300475911{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-3300475911{width:618px;outline:none;resize:none;}.saying.jsx-3300475911 span.jsx-3300475911{float:right;}.saying.jsx-3300475911{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-3300475911 h2.jsx-3300475911{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-3300475911{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-3300475911 span.jsx-3300475911{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-3300475911{color:#000;}p.fbinfo.jsx-3300475911{margin:10px 0;word-wrap:break-word;}.fb.jsx-3300475911 ul.jsx-3300475911{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background-size:47px 47px;}.news_pl.jsx-3300475911{margin:10px 0 20px 0;width:100%;overflow:hidden;}.nextinfo.jsx-3300475911{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-3300475911>p.jsx-3300475911{padding:4px 10px;border-radius:5px;}.diggit.jsx-3300475911{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}.news_about.jsx-3300475911{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-3300475911{width:100%;overflow:hidden;}.news_title.jsx-3300475911{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-3300475911 li.jsx-3300475911{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIc0IsQUFHa0MsQUFJSyxBQUlBLEFBR1osQUFhQSxBQUtFLEFBR0MsQUFLWSxBQU9qQixBQVFBLEFBUUQsQUFHRyxBQUlHLEFBTUksQUFLSixBQU1BLEFBSUwsQUFhTSxBQVFMLEFBSU0sQUFPSixXQTNEaEIsQUFpRG1CLEFBV0ksQ0FoR1AsQUFLakIsQUFlYSxBQVFBLEFBb0NDLEVBN0VPLEFBb0RFLEFBc0NRLENBWU4sRUFqRlQsQUFtQ2MsQUFXakIsQUFNTyxJQVhQLEVBNUJJLEFBUUEsQ0E3Q2pCLEFBaUZxQixDQWhFTCxFQXFGZCxDQS9CZ0IsQ0ExQ0MsQUFvRkcsRUF4RkYsQ0F5Q0YsQ0E5REwsQ0FzR1EsQ0FsRHBCLEFBcUJBLEVBM0RELENBb0JhLEFBUUEsQ0FnRE0sSUFaTixDQTdFRixBQW1FSyxDQVprQixBQXNEaEMsQ0FwRmUsRUFxQ2hCLENBekNBLEFBYWlCLEFBUUEsQUE0REQsQ0FuSEosRUF1R29CLENBekZkLENBNkV5QixJQVYzQyxFQTdFVyxBQWdIRSxDQW5IZCxBQXNDb0IsSUFTQyxBQVFBLElBNkRuQixDQXRHZSxDQVZqQixNQWdFNEIsRUE3QmYsQUFnRVUsS0F2RHRCLEFBUUEsQ0F6Q21CLEtBeUJuQixNQW1EbUIsQUFhcUIsT0F4RjNCLEFBcURiLFdBdUJrQixDQTNFRSxnQkE0RUQsQUFZbEIsR0F2RmdCLGVBNEVELENBM0VDLGNBNEVILEVBM0VmLFdBNEVnQixjQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0VHBWYWx1ZX0gZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHthcGlIb3N0LGF2YXRhcnN9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ibG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIGJsb2dEdGFpbDpcIlwiLFxuICAgICAgZGV0YWlsRGF0YTp7fSxcbiAgICAgIGNvbW1lbnRzTGlzdDpbXSxcbiAgICAgIGNvbW1lbnRUb3RhbDowLFxuICAgICAgc2F5dGV4dDpcIlwiLFxuICAgICAgc3VibWl0RGlzYjpmYWxzZSxcbiAgICAgIHN1Ym1pdFR4dDpcIuaPkOS6pFwiXG4gIH1cblxuICBhc3luYyBnZXRDb21tZW50cygpe1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgbGV0IGNvbW1lbnRNZXNzYWdlID0gYXdhaXQgYXBpLkdldEJsb2dDb21tZW50cyhpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHNMaXN0OmNvbW1lbnRNZXNzYWdlLmJsb2dDb21tZW50TGlzdExpc3QsY29tbWVudFRvdGFsOmNvbW1lbnRNZXNzYWdlLnRvdGFsfSlcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5HZXRCbG9nRGV0YWlsKGlkKTtcbiAgICAgIGxldCBkYXRhID0gcmVzLmN1cnJlbnRBcnRpY2xlO1xuICAgICAgbGV0IGZpbGVDb250ZW50ID0gYXdhaXQgYXBpLlJlYWROZXRGaWxlKGRhdGEuaHRtbFR4dFVybClcbiAgICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2dEdGFpbDpmaWxlQ29udGVudC50eHQsZGV0YWlsRGF0YTpkYXRhfSlcbiAgfVxuXG4gIGFzeW5jIHN1Yk1pdENvbW1lbnQoKXtcbiAgICBjb25zdCB7c2F5dGV4dH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0RGlzYjp0cnVlLHN1Ym1pdFR4dDpcIuaPkOS6pOS4rVwifSlcbiAgICBsZXQgcmVzID0gYXdhaXQgYXBpLlN1Yk1pdENvbW1lbnQoc2F5dGV4dCxpZCk7XG4gICAgaWYgKHJlcy5jb2RlICE9IDApe1xuICAgICAgYWxlcnQocmVzLm1zZyk7XG4gICAgfWVsc2V7XG4gICAgICBhd2FpdCB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdERpc2I6ZmFsc2Usc3VibWl0VHh0Olwi5o+Q5LqkXCIsc2F5dGV4dDpcIlwifSlcbiAgfVxuXG4gIGFzeW5jIG1ha2VHb29kKCl7XG4gICAgbGV0IHtkZXRhaWxEYXRhfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHMucXVlcnk7XG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpSG9zdH0vdjEvY2xpZW50L2Jsb2cvZ29vZC9tYWtlP2Jsb2dfaWQ9JHtpZH1gKVxuICAgIGRldGFpbERhdGEuZ29vZE51bSsrXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsRGF0YX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Jsb2dEdGFpbCxkZXRhaWxEYXRhLGNvbW1lbnRzTGlzdCxzdWJtaXREaXNiLHN1Ym1pdFR4dCxzYXl0ZXh0LGNvbW1lbnRUb3RhbH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjZmZmXCIscGFkZGluZzogXCIwIDMwcHhcIn19PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5ld3NfdGl0bGVcIj57ZGV0YWlsRGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dpbmZvXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXV0aG9yXCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG1uYW1lXCI+e2dldFRwVmFsdWUoZGV0YWlsRGF0YS50eXBlKX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lclwiPnttb21lbnQoZGV0YWlsRGF0YS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpZXdcIj57ZGV0YWlsRGF0YS52aWV3fSDkurrlt7LpmIXor7s8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6J2JvdGgnfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfYWJvdXRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz7nroDku4s8L3N0cm9uZz4ge2RldGFpbERhdGEucHJlZmFjZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYmxvZ0R0YWlsfX0gY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keSBlZGl0b3JtZC1wcmV2aWV3LWNvbnRhaW5lclwiIHByZXZpZXdjb250YWluZXI9XCJ0cnVlXCIgc3R5bGU9e3t3aWR0aDpcImF1dG9cIn19PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZVwiIHN0eWxlPXt7cGFkZGluZzogXCIyMHB4XCJ9fT5cbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRpZ2dpdFwiIG9uQ2xpY2s9e3RoaXMubWFrZUdvb2QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICA8YT7lvojotZ7lk6bvvIE8L2E+KDxiPntkZXRhaWxEYXRhLmdvb2ROdW19PC9iPilcbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0aW5mb1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGV0YWlsRGF0YS5wcmV2ID8gPHA+5LiK5LiA56+H77yaPGEgaHJlZj17YC9kZXRhaWw/aWQ9JHtkZXRhaWxEYXRhLnByZXYuaWR9YH0+e2RldGFpbERhdGEucHJldi5uYW1lfTwvYT48L3A+OjxwPuS4iuS4gOevh++8mjxhIGhyZWY9e2AvYXJ0aWNsZWB9PuWbnuWIsOWIl+ihqDwvYT48L3A+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRldGFpbERhdGEubmV4dCA/IDxwPuS4i+S4gOevh++8mjxhIGhyZWY9e2AvZGV0YWlsP2lkPSR7ZGV0YWlsRGF0YS5uZXh0LmlkfWB9PntkZXRhaWxEYXRhLm5leHQubmFtZX08L2E+PC9wPjo8cD7kuIvkuIDnr4fvvJo8YSBocmVmPXtgL2FydGljbGVgfT7lm57liLDliJfooag8L2E+PC9wPlxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcGxcIiBpZD1cIm5ld3NfcGxcIj5cbiAgICAgICAgICAgICAgICA8aDI+5paH56ug6K+E6K66PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdia29cIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudHNMaXN0Lm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9XCJmYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7YmFja2dyb3VuZDogYHVybCgke2F2YXRhcnNbaXRlbS5pZCVhdmF0YXJzLmxlbmd0aF19KSBuby1yZXBlYXQgdG9wIDE0cHggbGVmdCAxMHB4YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzAwMFwifX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZidGltZVwiPjxzcGFuPnttb21lbnQoaXRlbS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZiaW5mb1wiPntpdGVtLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbHBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2F5aW5nXCIgc3R5bGU9e2NvbW1lbnRzTGlzdC5sZW5ndGggPT0gMCA/IHttYXJnaW5Ub3A6IDh9Ont9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsY29sb3I6IFwiI2RlMTUxM1wifX0+5YWx5pyJe2NvbW1lbnRUb3RhbH3mnaHor4Torro8L2E+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIOadpeivtOS4pOWPpeWQpy4uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwic2F5dGV4dFwiIHZhbHVlPXtzYXl0ZXh0fSBvbkNoYW5nZT17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2F5dGV4dDplLnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgICAgICAgICAgIH19IHJvd3M9XCI2XCIgaWQ9XCJzYXl0ZXh0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZUZpZWxkXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc3ViTWl0Q29tbWVudC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17c3VibWl0RGlzYn0gdmFsdWU9e3N1Ym1pdFR4dH0gc3R5bGU9e3tvdXRsaW5lOiBcIm5vbmVcIixjdXJzb3I6IFwicG9pbnRlclwifX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5leHRpbmZvIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5leHRpbmZvIGE6aG92ZXJ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC55em0ge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwbHBvc3QgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2F5dGV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MThweDtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2F5aW5nIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgIC5zYXlpbmd7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYTlhNmE2O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICB9IFxuICAgICAgICAgICAubmV3c19wbCBoMntcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICMwMDAgMnB4IHNvbGlkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJ0aW1le1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYnRpbWUgc3BhbntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY3cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwLmZidGltZXtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAuZmJpbmZve1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZiIHVse1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA3MHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogI2VjZWNlYyAxcHggc29saWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ3cHggNDdweDtcbiAgICAgICAgICAgfSAgXG4gICAgICAgICAgIC5uZXdzX3Bse1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mb3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5leHRpbmZvID4gcHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5kaWdnaXR7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTI1MjNBO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCAwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV3c19hYm91dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCAwIDAgI0Y2RjZGNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NfdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+ICAgICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/pages/detail.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context5.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=detail.js.4980d7eb27aa49aa71bd.hot-update.js.map