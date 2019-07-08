'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.Context = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var Context = (0, _react.createContext)();
exports.Context = Context;

var DocumentObjectProvider = function DocumentObjectProvider(WrappedComponent) {
  return (
    /*#__PURE__*/
    (function(_PureComponent) {
      (0, _inherits2.default)(_class, _PureComponent);

      function _class() {
        (0, _classCallCheck2.default)(this, _class);
        return (0, _possibleConstructorReturn2.default)(
          this,
          (0, _getPrototypeOf2.default)(_class).apply(this, arguments),
        );
      }

      (0, _createClass2.default)(_class, [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            this.forceUpdate(); // force a re-render because we have the document ref now
          },
        },
        {
          key: 'render',
          value: function render() {
            var _this = this;

            if (!this.documentRef) {
              return _react.default.createElement('span', {
                style: {
                  display: 'none',
                },
                ref: function ref(node) {
                  if (!node) {
                    return;
                  }

                  _this.documentRef = node.ownerDocument;
                },
              });
            }

            return _react.default.createElement(
              Context.Provider,
              {
                value: this.documentRef,
              },
              _react.default.createElement(WrappedComponent, this.props),
            );
          },
        },
      ]);
      return _class;
    })(_react.PureComponent)
  );
};

var _default = DocumentObjectProvider;
exports.default = _default;
