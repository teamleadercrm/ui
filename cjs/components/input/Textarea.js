'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

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

var _InputBase = _interopRequireDefault(require('./InputBase'));

var _box = _interopRequireWildcard(require('../box'));

var _validationText = _interopRequireDefault(require('../validationText'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Textarea =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Textarea, _PureComponent);

    function Textarea() {
      (0, _classCallCheck2.default)(this, Textarea);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Textarea).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Textarea, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            className = _this$props.className,
            error = _this$props.error,
            helpText = _this$props.helpText,
            inverse = _this$props.inverse,
            success = _this$props.success,
            warning = _this$props.warning,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'error',
              'helpText',
              'inverse',
              'success',
              'warning',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['wrapper'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['has-error'], error),
            (0, _defineProperty2.default)(_cx, _theme.default['has-success'], success),
            (0, _defineProperty2.default)(_cx, _theme.default['has-warning'], warning),
            _cx),
            className,
          );
          var boxProps = (0, _box.pickBoxProps)(others);
          var inputProps = (0, _objectSpread2.default)(
            {
              inverse: inverse,
            },
            (0, _box.omitBoxProps)(others),
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
              },
              boxProps,
            ),
            _react.default.createElement(
              _InputBase.default,
              (0, _extends2.default)(
                {
                  className: _theme.default['textarea'],
                  element: 'textarea',
                },
                inputProps,
              ),
            ),
            _react.default.createElement(_validationText.default, {
              error: error,
              help: helpText,
              inverse: inverse,
              success: success,
              warning: warning,
            }),
          );
        },
      },
    ]);
    return Textarea;
  })(_react.PureComponent);

Textarea.defaultProps = {
  inverse: false,
};
var _default = Textarea;
exports.default = _default;
