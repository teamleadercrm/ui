'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = exports.Context = void 0);
var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  Context = (0, _react.createContext)();
exports.Context = Context;
var DocumentObjectProvider = function(r) {
    return (function(e) {
      function t() {
        return (
          (0, _classCallCheck2.default)(this, t),
          (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(t).apply(this, arguments))
        );
      }
      return (
        (0, _inherits2.default)(t, e),
        (0, _createClass2.default)(t, [
          {
            key: 'componentDidMount',
            value: function() {
              this.forceUpdate();
            },
          },
          {
            key: 'render',
            value: function() {
              var t = this;
              return this.documentRef
                ? _react.default.createElement(
                    Context.Provider,
                    { value: this.documentRef },
                    _react.default.createElement(r, this.props),
                  )
                : _react.default.createElement('span', {
                    style: { display: 'none' },
                    ref: function(e) {
                      e && (t.documentRef = e.ownerDocument);
                    },
                  });
            },
          },
        ]),
        t
      );
    })(_react.PureComponent);
  },
  _default = DocumentObjectProvider;
exports.default = _default;
