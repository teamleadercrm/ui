'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Row =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Row, _PureComponent);

    function Row() {
      (0, _classCallCheck2.default)(this, Row);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
    }

    (0, _createClass2.default)(Row, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            backgroundColor = _this$props.backgroundColor,
            className = _this$props.className,
            children = _this$props.children,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['backgroundColor', 'className', 'children']);
          var classNames = (0, _classnames.default)(
            _theme.default['row'],
            _theme.default['has-background-'.concat(backgroundColor)],
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
              },
              others,
            ),
            children,
          );
        },
      },
    ]);
    return Row;
  })(_react.PureComponent);

Row.defaultProps = {
  backgroundColor: 'white',
};
var _default = Row;
exports.default = _default;
