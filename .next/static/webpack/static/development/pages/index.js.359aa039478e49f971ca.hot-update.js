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
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _proto_resp_pb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../proto/resp_pb */ "./proto/resp_pb.js");
/* harmony import */ var _proto_resp_pb__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_proto_resp_pb__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");
/* harmony import */ var _apis_blog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../apis/blog */ "./apis/blog.js");









var _jsxFileName = "/Users/justin/Desktop/my/client-pc/pages/index.js";










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
      blogList: [],
      leftHeight: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "loadList",
    value: function () {
      var _loadList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tp) {
        var data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_17__["GetBlogList"](tp);

              case 2:
                data = _context.sent;
                this.setState({
                  blogList: data.blogArticleListList
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadList(_x) {
        return _loadList.apply(this, arguments);
      }

      return loadList;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loadList(-1);

              case 2:
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
    key: "render",
    value: function render() {
      var _this$state = this.state,
          blogList = _this$state.blogList,
          leftHeight = _this$state.leftHeight;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, blogList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-2617870180" + " " + "right_item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, item.cover && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          className: "jsx-2617870180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: item.cover,
          className: "jsx-2617870180" + " " + "coverimg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
          className: "jsx-2617870180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, item.recommended == 1 && "[ 顶 ]", " ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#222"
          },
          onClick: function onClick() {
            location.href = "/detail?id=".concat(item.id);
          },
          className: "jsx-2617870180" + " " + "blogname",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, item.name)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-2617870180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, item.preface));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2617870180",
        __self: this
      }, ".blogname.jsx-2617870180:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;color:#555;}.coverimg.jsx-2617870180{float:right;clear:right;width:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;}.coverimg.jsx-2617870180:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);-webkit-transform:scale(1.2);}.right_item.jsx-2617870180 p.jsx-2617870180{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-2617870180 h3.jsx-2617870180{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-2617870180 i.jsx-2617870180{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-2617870180{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENvQixBQUd1QyxBQUtkLEFBU1MsQUFJSCxBQVNILEFBT0gsQUFRcUIsWUFwQ3JCLEFBNkJFLEdBUEcsR0FUQSxNQVpOLEVBNkJNLE1BUFksQ0FjaEIsRUFuQ2UsQUFZWixRQWlCQSxHQU9BLEtBdkJPLFFBaUJYLENBckNHLENBNkJELENBZUEsQ0FwQ1csUUE4QlIsR0FqQlcsQ0FwQmpCLEFBYWtCLEFBZ0JyQixDQWVXLFFBZHJCLEVBN0JBLEVBT3NCLEFBOEJ0QixPQU9pQixPQXhCSyxFQVB0QixNQWdDQSxZQXhCdUIsY0FiTixPQWNqQixRQWJBIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHRwcyBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuaW1wb3J0IHthcGlIb3N0fSBmcm9tICcuLi91dGlscy9jb25maWcnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL3Jlc3BfcGJcIjtcbmltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9lbWl0ZXInO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYmxvZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgYmxvZ0xpc3Q6W10sXG4gICAgICBsZWZ0SGVpZ2h0OjBcbiAgfVxuXG4gIGFzeW5jIGxvYWRMaXN0KHRwKXtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGFwaS5HZXRCbG9nTGlzdCh0cClcbiAgICB0aGlzLnNldFN0YXRlKHtibG9nTGlzdDpkYXRhLmJsb2dBcnRpY2xlTGlzdExpc3R9KVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBhd2FpdCB0aGlzLmxvYWRMaXN0KC0xKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7YmxvZ0xpc3QsbGVmdEhlaWdodH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7XG4gICAgICAgICAgYmxvZ0xpc3QubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X2l0ZW1cIiBrZXk9e2t9PlxuICAgICAgICAgICAgICB7aXRlbS5jb3ZlciAmJiA8aT48aW1nIGNsYXNzTmFtZT1cImNvdmVyaW1nXCIgc3JjPXtpdGVtLmNvdmVyfSAvPjwvaT59XG4gICAgICAgICAgICAgIDxoMz57aXRlbS5yZWNvbW1lbmRlZCA9PSAxICYmIFwiWyDpobYgXVwifSA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzIyMlwifX0gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9kZXRhaWw/aWQ9JHtpdGVtLmlkfWBcbiAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiYmxvZ25hbWVcIj57aXRlbS5uYW1lfTwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICA8cD57aXRlbS5wcmVmYWNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5ibG9nbmFtZTpob3ZlcntcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb3ZlcmltZ3tcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNsZWFyOiByaWdodDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvdmVyaW1nOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogI0ZGRiAxcHggMXB4IDFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZGU0OTQ5O1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGl7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgY29sb3I6ICM3OTdiN2M7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+ICAgIFxuICAgICAgICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context3.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.359aa039478e49f971ca.hot-update.js.map