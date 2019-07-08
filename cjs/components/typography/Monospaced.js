'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Monospaced =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Monospaced, _PureComponent);

    function Monospaced() {
      (0, _classCallCheck2.default)(this, Monospaced);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Monospaced).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Monospaced, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            element = _this$props.element;
          var classNames = (0, _classnames.default)(_theme.default['monospaced'], className);
          var Element = element;
          return _react.default.createElement(
            Element,
            {
              'data-teamleader-ui': 'monospaced',
              className: classNames,
            },
            children,
          );
        },
      },
    ]);
    return Monospaced;
  })(_react.PureComponent);

Monospaced.defaultProps = {
  element: 'span',
};
var _default = Monospaced;
exports.default = _default;
