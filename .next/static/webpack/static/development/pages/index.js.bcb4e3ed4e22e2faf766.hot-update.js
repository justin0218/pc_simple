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
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_16__);









var _jsxFileName = "/Users/justin/Desktop/private/nextjs/pages/index.js";









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
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data, message;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_13__["apiHost"], "/v1/blog/list"), {
                  responseType: 'blob'
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_15__["default"])(res.data);

              case 5:
                data = _context.sent;
                message = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_16___default.a.blogListRes.deserializeBinary(data);
                data = message.toObject();
                console.log(data);
                this.setState({
                  blogList: data.listList
                });

              case 10:
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
      var _this$state = this.state,
          blogList = _this$state.blogList,
          leftHeight = _this$state.leftHeight;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, blogList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          onClick: function onClick() {
            location.href = "/detail?id=".concat(item.id);
          },
          className: "jsx-494573891" + " " + "right_item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, item.cover && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          className: "jsx-494573891",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: item.cover,
          className: "jsx-494573891",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
          className: "jsx-494573891",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, item.recommended == 1 && "[ 顶 ]", " ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#222"
          },
          className: "jsx-494573891",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, item.name)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-494573891",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, item.preface));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "494573891",
        __self: this
      }, ".right_item.jsx-494573891 p.jsx-494573891{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-494573891 h3.jsx-494573891{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-494573891 i.jsx-494573891{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-494573891{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ29CLEFBRytCLEFBU0gsQUFPSCxBQVFxQixZQVBuQixHQVBHLEdBVEEsUUFpQkEsTUFQWSxDQWNoQixFQXZCRyxRQWlCQSxHQU9BLEtBdkJPLFFBaUJYLEVBUkUsQ0FlQSxTQU5HLEdBakJXLENBU3BCLENBZVcsUUFkckIsSUFRQSxPQU9pQixPQXhCSyxRQXlCdEIsWUF4QnVCLHFCQUN2QiIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHRwcyBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuaW1wb3J0IHthcGlIb3N0fSBmcm9tICcuLi91dGlscy9jb25maWcnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcmVhZFN0cmVhbSBmcm9tICcuLi91dGlscy91dGlsJ1xuaW1wb3J0IHByb3RvYnVmIGZyb20gXCIuLi9wcm90by9ibG9nX3BiXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgYmxvZ0xpc3Q6W10sXG4gICAgICBsZWZ0SGVpZ2h0OjBcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlIb3N0fS92MS9ibG9nL2xpc3RgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0ocmVzLmRhdGEpO1xuICAgIGxldCBtZXNzYWdlID0gcHJvdG9idWYuYmxvZ0xpc3RSZXMuZGVzZXJpYWxpemVCaW5hcnkoZGF0YSk7XG4gICAgZGF0YSA9IG1lc3NhZ2UudG9PYmplY3QoKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2dMaXN0OmRhdGEubGlzdExpc3R9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7YmxvZ0xpc3QsbGVmdEhlaWdodH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7XG4gICAgICAgICAgYmxvZ0xpc3QubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X2l0ZW1cIiBrZXk9e2t9IG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9kZXRhaWw/aWQ9JHtpdGVtLmlkfWBcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7aXRlbS5jb3ZlciAmJiA8aT48aW1nIHNyYz17aXRlbS5jb3Zlcn0gLz48L2k+fVxuICAgICAgICAgICAgICA8aDM+e2l0ZW0ucmVjb21tZW5kZWQgPT0gMSAmJiBcIlsg6aG2IF1cIn0gPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMyMjJcIn19PntpdGVtLm5hbWV9PC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgIDxwPntpdGVtLnByZWZhY2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gcCB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAjRkZGIDFweCAxcHggMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNkZTQ5NDk7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gaXtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVte1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogIzc5N2I3YztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD4gICAgXG4gICAgICAgIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.bcb4e3ed4e22e2faf766.hot-update.js.map