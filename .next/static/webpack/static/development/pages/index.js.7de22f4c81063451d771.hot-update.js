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
/* harmony import */ var _proto_resp_pb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../proto/resp_pb */ "./proto/resp_pb.js");
/* harmony import */ var _proto_resp_pb__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_proto_resp_pb__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









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
        var res, data, message;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_13__["apiHost"], "/v1/client/blog/list?tp=").concat(tp), {
                  responseType: 'blob'
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_15__["default"])(res.data);

              case 5:
                data = _context.sent;
                message = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_16___default.a.blogList.deserializeBinary(data);
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
          lineNumber: 37
        },
        __self: this
      }, blogList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-2617870180" + " " + "right_item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, item.cover && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          className: "jsx-2617870180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: item.cover,
          className: "jsx-2617870180" + " " + "coverimg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
          className: "jsx-2617870180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
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
            lineNumber: 42
          },
          __self: this
        }, item.name)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-2617870180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, item.preface));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2617870180",
        __self: this
      }, ".blogname.jsx-2617870180:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;color:#555;}.coverimg.jsx-2617870180{float:right;clear:right;width:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;}.coverimg.jsx-2617870180:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);-webkit-transform:scale(1.2);}.right_item.jsx-2617870180 p.jsx-2617870180{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-2617870180 h3.jsx-2617870180{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-2617870180 i.jsx-2617870180{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-2617870180{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RvQixBQUd1QyxBQUtkLEFBU1MsQUFJSCxBQVNILEFBT0gsQUFRcUIsWUFwQ3JCLEFBNkJFLEdBUEcsR0FUQSxNQVpOLEVBNkJNLE1BUFksQ0FjaEIsRUFuQ2UsQUFZWixRQWlCQSxHQU9BLEtBdkJPLFFBaUJYLENBckNHLENBNkJELENBZUEsQ0FwQ1csUUE4QlIsR0FqQlcsQ0FwQmpCLEFBYWtCLEFBZ0JyQixDQWVXLFFBZHJCLEVBN0JBLEVBT3NCLEFBOEJ0QixPQU9pQixPQXhCSyxFQVB0QixNQWdDQSxZQXhCdUIsY0FiTixPQWNqQixRQWJBIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHRwcyBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuaW1wb3J0IHthcGlIb3N0fSBmcm9tICcuLi91dGlscy9jb25maWcnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcmVhZFN0cmVhbSBmcm9tICcuLi91dGlscy91dGlsJ1xuaW1wb3J0IHByb3RvYnVmIGZyb20gXCIuLi9wcm90by9yZXNwX3BiXCI7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vdXRpbHMvZW1pdGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBibG9nTGlzdDpbXSxcbiAgICAgIGxlZnRIZWlnaHQ6MFxuICB9XG5cbiAgYXN5bmMgbG9hZExpc3QodHApe1xuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvY2xpZW50L2Jsb2cvbGlzdD90cD0ke3RwfWAse1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICB9KVxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVhZFN0cmVhbShyZXMuZGF0YSk7XG4gICAgbGV0IG1lc3NhZ2UgPSBwcm90b2J1Zi5ibG9nTGlzdC5kZXNlcmlhbGl6ZUJpbmFyeShkYXRhKTtcbiAgICBkYXRhID0gbWVzc2FnZS50b09iamVjdCgpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgdGhpcy5zZXRTdGF0ZSh7YmxvZ0xpc3Q6ZGF0YS5saXN0TGlzdH0pXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGF3YWl0IHRoaXMubG9hZExpc3QoLTEpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtibG9nTGlzdCxsZWZ0SGVpZ2h0fSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtcbiAgICAgICAgICBibG9nTGlzdC5tYXAoKGl0ZW0sayk9PihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfaXRlbVwiIGtleT17a30+XG4gICAgICAgICAgICAgIHtpdGVtLmNvdmVyICYmIDxpPjxpbWcgY2xhc3NOYW1lPVwiY292ZXJpbWdcIiBzcmM9e2l0ZW0uY292ZXJ9IC8+PC9pPn1cbiAgICAgICAgICAgICAgPGgzPntpdGVtLnJlY29tbWVuZGVkID09IDEgJiYgXCJbIOmhtiBdXCJ9IDxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjMjIyXCJ9fSBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2RldGFpbD9pZD0ke2l0ZW0uaWR9YFxuICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJibG9nbmFtZVwiPntpdGVtLm5hbWV9PC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgIDxwPntpdGVtLnByZWZhY2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJsb2duYW1lOmhvdmVye1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvdmVyaW1ne1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY2xlYXI6IHJpZ2h0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY292ZXJpbWc6aG92ZXJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gcCB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAjRkZGIDFweCAxcHggMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNkZTQ5NDk7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gaXtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVte1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogIzc5N2I3YztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD4gICAgXG4gICAgICAgIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/pages/index.js */"));
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



/***/ }),

/***/ "./proto/blogArticle_pb.js":
/*!*********************************!*\
  !*** ./proto/blogArticle_pb.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_article', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_article = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_article, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_article.displayName = 'proto.blog_article';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_article.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_article.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_article} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_article.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      cover: jspb.Message.getFieldWithDefault(msg, 2, ""),
      goodNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
      view: jspb.Message.getFieldWithDefault(msg, 4, 0),
      recommended: jspb.Message.getFieldWithDefault(msg, 5, 0),
      type: jspb.Message.getFieldWithDefault(msg, 6, 0),
      preface: jspb.Message.getFieldWithDefault(msg, 7, ""),
      htmlTxtUrl: jspb.Message.getFieldWithDefault(msg, 8, ""),
      name: jspb.Message.getFieldWithDefault(msg, 9, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 10, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 11, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_article}
 */


proto.blog_article.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_article();
  return proto.blog_article.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_article} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_article}
 */


proto.blog_article.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCover(value);
        break;

      case 3:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setGoodNum(value);
        break;

      case 4:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setView(value);
        break;

      case 5:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setRecommended(value);
        break;

      case 6:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setType(value);
        break;

      case 7:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setPreface(value);
        break;

      case 8:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setHtmlTxtUrl(value);
        break;

      case 9:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 10:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 11:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_article.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_article.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_article} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_article.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getCover();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getGoodNum();

  if (f !== 0) {
    writer.writeInt64(3, f);
  }

  f = message.getView();

  if (f !== 0) {
    writer.writeInt64(4, f);
  }

  f = message.getRecommended();

  if (f !== 0) {
    writer.writeInt64(5, f);
  }

  f = message.getType();

  if (f !== 0) {
    writer.writeInt64(6, f);
  }

  f = message.getPreface();

  if (f.length > 0) {
    writer.writeString(7, f);
  }

  f = message.getHtmlTxtUrl();

  if (f.length > 0) {
    writer.writeString(8, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(9, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(10, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(11, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_article.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional string cover = 2;
 * @return {string}
 */


proto.blog_article.prototype.getCover = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setCover = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional int64 good_num = 3;
 * @return {number}
 */


proto.blog_article.prototype.getGoodNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setGoodNum = function (value) {
  jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * optional int64 view = 4;
 * @return {number}
 */


proto.blog_article.prototype.getView = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setView = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};
/**
 * optional int64 recommended = 5;
 * @return {number}
 */


proto.blog_article.prototype.getRecommended = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 5, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setRecommended = function (value) {
  jspb.Message.setProto3IntField(this, 5, value);
};
/**
 * optional int64 type = 6;
 * @return {number}
 */


proto.blog_article.prototype.getType = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 6, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setType = function (value) {
  jspb.Message.setProto3IntField(this, 6, value);
};
/**
 * optional string preface = 7;
 * @return {string}
 */


proto.blog_article.prototype.getPreface = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 7, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setPreface = function (value) {
  jspb.Message.setProto3StringField(this, 7, value);
};
/**
 * optional string html_txt_url = 8;
 * @return {string}
 */


proto.blog_article.prototype.getHtmlTxtUrl = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 8, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setHtmlTxtUrl = function (value) {
  jspb.Message.setProto3StringField(this, 8, value);
};
/**
 * optional string name = 9;
 * @return {string}
 */


proto.blog_article.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 9, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 9, value);
};
/**
 * optional string create_time = 10;
 * @return {string}
 */


proto.blog_article.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 10, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 10, value);
};
/**
 * optional string update_time = 11;
 * @return {string}
 */


proto.blog_article.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 11, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 11, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blogComment_pb.js":
/*!*********************************!*\
  !*** ./proto/blogComment_pb.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_comment', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_comment = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_comment, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_comment.displayName = 'proto.blog_comment';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_comment.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_comment.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_comment} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_comment.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      blogId: jspb.Message.getFieldWithDefault(msg, 2, 0),
      content: jspb.Message.getFieldWithDefault(msg, 3, ""),
      name: jspb.Message.getFieldWithDefault(msg, 4, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 6, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_comment}
 */


proto.blog_comment.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_comment();
  return proto.blog_comment.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_comment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_comment}
 */


proto.blog_comment.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogId(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setContent(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 6:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_comment.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_comment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_comment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_comment.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getBlogId();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getContent();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(6, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_comment.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_comment.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 blog_id = 2;
 * @return {number}
 */


proto.blog_comment.prototype.getBlogId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blog_comment.prototype.setBlogId = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string content = 3;
 * @return {string}
 */


proto.blog_comment.prototype.getContent = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setContent = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string name = 4;
 * @return {string}
 */


proto.blog_comment.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string create_time = 5;
 * @return {string}
 */


proto.blog_comment.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};
/**
 * optional string update_time = 6;
 * @return {string}
 */


proto.blog_comment.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 6, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 6, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blogType_pb.js":
/*!******************************!*\
  !*** ./proto/blogType_pb.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_type', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_type = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_type, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_type.displayName = 'proto.blog_type';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_type.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_type.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_type} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_type.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      blogNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
      lable: jspb.Message.getFieldWithDefault(msg, 3, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 5, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_type}
 */


proto.blog_type.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_type();
  return proto.blog_type.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_type} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_type}
 */


proto.blog_type.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogNum(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setLable(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_type.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_type.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_type} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_type.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getBlogNum();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getLable();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_type.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_type.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 blog_num = 2;
 * @return {number}
 */


proto.blog_type.prototype.getBlogNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blog_type.prototype.setBlogNum = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string lable = 3;
 * @return {string}
 */


proto.blog_type.prototype.getLable = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setLable = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string create_time = 4;
 * @return {string}
 */


proto.blog_type.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string update_time = 5;
 * @return {string}
 */


proto.blog_type.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/errors_pb.js":
/*!****************************!*\
  !*** ./proto/errors_pb.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.error_codes', null, global);
goog.exportSymbol('proto.resp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.resp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.resp, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.resp.displayName = 'proto.resp';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.resp.prototype.toObject = function (opt_includeInstance) {
    return proto.resp.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.resp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.resp.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resp}
 */


proto.resp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resp();
  return proto.resp.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resp}
 */


proto.resp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.resp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.resp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.resp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.resp.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.resp.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.resp.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.resp.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * @enum {number}
 */


proto.error_codes = {
  F: 0,
  OK: 200,
  NOCONTENT: 204,
  INVALID_PARAMS: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  ERROR: 500
};
goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/resp_pb.js":
/*!**************************!*\
  !*** ./proto/resp_pb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");

var goog = jspb;
var global = Function('return this')();

var blogArticle_pb = __webpack_require__(/*! ./blogArticle_pb.js */ "./proto/blogArticle_pb.js");

var errors_pb = __webpack_require__(/*! ./errors_pb.js */ "./proto/errors_pb.js");

var blogType_pb = __webpack_require__(/*! ./blogType_pb.js */ "./proto/blogType_pb.js");

var blogComment_pb = __webpack_require__(/*! ./blogComment_pb.js */ "./proto/blogComment_pb.js");

goog.exportSymbol('proto.blog_comments', null, global);
goog.exportSymbol('proto.blog_detail', null, global);
goog.exportSymbol('proto.blog_list', null, global);
goog.exportSymbol('proto.blog_types', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_list = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_list.repeatedFields_, null);
};

goog.inherits(proto.blog_list, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_list.displayName = 'proto.blog_list';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_list.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_list.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_list.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_list} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_list.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogArticleListList: jspb.Message.toObjectList(msg.getBlogArticleListList(), blogArticle_pb.blog_article.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_list}
 */


proto.blog_list.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_list();
  return proto.blog_list.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_list} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_list}
 */


proto.blog_list.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.addBlogArticleList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_list.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_list.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_list} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_list.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogArticleListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_list.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_list.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_list.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_list.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_article blog_article_list = 3;
 * @return {!Array.<!proto.blog_article>}
 */


proto.blog_list.prototype.getBlogArticleListList = function () {
  return (
    /** @type{!Array.<!proto.blog_article>} */
    jspb.Message.getRepeatedWrapperField(this, blogArticle_pb.blog_article, 3)
  );
};
/** @param {!Array.<!proto.blog_article>} value */


proto.blog_list.prototype.setBlogArticleListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_article=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_article}
 */


proto.blog_list.prototype.addBlogArticleList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_article, opt_index);
};

proto.blog_list.prototype.clearBlogArticleListList = function () {
  this.setBlogArticleListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_detail = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_detail, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_detail.displayName = 'proto.blog_detail';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_detail.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_detail.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_detail} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_detail.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      currentArticle: (f = msg.getCurrentArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f),
      nextArticle: (f = msg.getNextArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f),
      prevArticle: (f = msg.getPrevArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_detail}
 */


proto.blog_detail.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_detail();
  return proto.blog_detail.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_detail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_detail}
 */


proto.blog_detail.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setCurrentArticle(value);
        break;

      case 4:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setNextArticle(value);
        break;

      case 5:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setPrevArticle(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_detail.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_detail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_detail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_detail.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getCurrentArticle();

  if (f != null) {
    writer.writeMessage(3, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }

  f = message.getNextArticle();

  if (f != null) {
    writer.writeMessage(4, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }

  f = message.getPrevArticle();

  if (f != null) {
    writer.writeMessage(5, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_detail.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_detail.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_detail.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_detail.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional blog_article current_article = 3;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getCurrentArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 3)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setCurrentArticle = function (value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.blog_detail.prototype.clearCurrentArticle = function () {
  this.setCurrentArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasCurrentArticle = function () {
  return jspb.Message.getField(this, 3) != null;
};
/**
 * optional blog_article next_article = 4;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getNextArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 4)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setNextArticle = function (value) {
  jspb.Message.setWrapperField(this, 4, value);
};

proto.blog_detail.prototype.clearNextArticle = function () {
  this.setNextArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasNextArticle = function () {
  return jspb.Message.getField(this, 4) != null;
};
/**
 * optional blog_article prev_article = 5;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getPrevArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 5)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setPrevArticle = function (value) {
  jspb.Message.setWrapperField(this, 5, value);
};

proto.blog_detail.prototype.clearPrevArticle = function () {
  this.setPrevArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasPrevArticle = function () {
  return jspb.Message.getField(this, 5) != null;
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_types = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_types.repeatedFields_, null);
};

goog.inherits(proto.blog_types, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_types.displayName = 'proto.blog_types';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_types.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_types.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_types.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_types} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_types.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogTypeListList: jspb.Message.toObjectList(msg.getBlogTypeListList(), blogType_pb.blog_type.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_types}
 */


proto.blog_types.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_types();
  return proto.blog_types.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_types} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_types}
 */


proto.blog_types.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogType_pb.blog_type();
        reader.readMessage(value, blogType_pb.blog_type.deserializeBinaryFromReader);
        msg.addBlogTypeList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_types.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_types.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_types} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_types.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogTypeListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogType_pb.blog_type.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_types.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_types.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_types.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_types.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_type blog_type_list = 3;
 * @return {!Array.<!proto.blog_type>}
 */


proto.blog_types.prototype.getBlogTypeListList = function () {
  return (
    /** @type{!Array.<!proto.blog_type>} */
    jspb.Message.getRepeatedWrapperField(this, blogType_pb.blog_type, 3)
  );
};
/** @param {!Array.<!proto.blog_type>} value */


proto.blog_types.prototype.setBlogTypeListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_type=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_type}
 */


proto.blog_types.prototype.addBlogTypeList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_type, opt_index);
};

proto.blog_types.prototype.clearBlogTypeListList = function () {
  this.setBlogTypeListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_comments = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_comments.repeatedFields_, null);
};

goog.inherits(proto.blog_comments, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_comments.displayName = 'proto.blog_comments';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_comments.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_comments.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_comments.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_comments} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_comments.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogCommentListList: jspb.Message.toObjectList(msg.getBlogCommentListList(), blogComment_pb.blog_comment.toObject, includeInstance),
      total: jspb.Message.getFieldWithDefault(msg, 4, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_comments}
 */


proto.blog_comments.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_comments();
  return proto.blog_comments.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_comments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_comments}
 */


proto.blog_comments.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogComment_pb.blog_comment();
        reader.readMessage(value, blogComment_pb.blog_comment.deserializeBinaryFromReader);
        msg.addBlogCommentList(value);
        break;

      case 4:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setTotal(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_comments.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_comments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_comments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_comments.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogCommentListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogComment_pb.blog_comment.serializeBinaryToWriter);
  }

  f = message.getTotal();

  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_comments.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_comments.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_comments.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_comments.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_comment blog_comment_list = 3;
 * @return {!Array.<!proto.blog_comment>}
 */


proto.blog_comments.prototype.getBlogCommentListList = function () {
  return (
    /** @type{!Array.<!proto.blog_comment>} */
    jspb.Message.getRepeatedWrapperField(this, blogComment_pb.blog_comment, 3)
  );
};
/** @param {!Array.<!proto.blog_comment>} value */


proto.blog_comments.prototype.setBlogCommentListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_comment}
 */


proto.blog_comments.prototype.addBlogCommentList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_comment, opt_index);
};

proto.blog_comments.prototype.clearBlogCommentListList = function () {
  this.setBlogCommentListList([]);
};
/**
 * optional int32 total = 4;
 * @return {number}
 */


proto.blog_comments.prototype.getTotal = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};
/** @param {number} value */


proto.blog_comments.prototype.setTotal = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};

goog.object.extend(exports, proto);

/***/ })

})
//# sourceMappingURL=index.js.7de22f4c81063451d771.hot-update.js.map