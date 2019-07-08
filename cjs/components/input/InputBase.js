'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _box = require('../box');

var _theme = _interopRequireDefault(require('./theme.css'));

var InputBase =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(InputBase, _PureComponent);

    function InputBase() {
      (0, _classCallCheck2.default)(this, InputBase);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(InputBase).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(InputBase, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            bold = _this$props.bold,
            className = _this$props.className,
            element = _this$props.element,
            innerRef = _this$props.innerRef,
            inverse = _this$props.inverse,
            size = _this$props.size,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props, [
              'bold',
              'className',
              'element',
              'innerRef',
              'inverse',
              'size',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['input'],
            _theme.default['is-'.concat(size)],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-inverse'], inverse),
            (0, _defineProperty2.default)(_cx, _theme.default['is-bold'], bold),
            _cx),
            className,
          );
          var restProps = (0, _box.omitBoxProps)(otherProps);
          var props = (0, _objectSpread2.default)(
            {
              className: classNames,
              ref: innerRef,
            },
            restProps,
          );
          return _react.default.createElement(element, props);
        },
      },
    ]);
    return InputBase;
  })(_react.PureComponent);

InputBase.defaultProps = {
  inverse: false,
  disabled: false,
  element: 'input',
  readOnly: false,
  size: 'medium',
};
var _default = InputBase;
exports.default = _default;
