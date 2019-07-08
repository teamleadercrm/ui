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

var _ErrorText = _interopRequireDefault(require('./ErrorText'));

var _HelpText = _interopRequireDefault(require('./HelpText'));

var _SuccessText = _interopRequireDefault(require('./SuccessText'));

var _WarningText = _interopRequireDefault(require('./WarningText'));

var ValidationText =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(ValidationText, _PureComponent);

    function ValidationText() {
      (0, _classCallCheck2.default)(this, ValidationText);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(ValidationText).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(ValidationText, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            error = _this$props.error,
            inverse = _this$props.inverse,
            help = _this$props.help,
            success = _this$props.success,
            warning = _this$props.warning;

          if (error && typeof error !== 'boolean') {
            return _react.default.createElement(
              _ErrorText.default,
              {
                inverse: inverse,
              },
              error,
            );
          }

          if (warning && typeof warning !== 'boolean') {
            return _react.default.createElement(
              _WarningText.default,
              {
                inverse: inverse,
              },
              warning,
            );
          }

          if (success && typeof success !== 'boolean') {
            return _react.default.createElement(
              _SuccessText.default,
              {
                inverse: inverse,
              },
              success,
            );
          }

          if (help) {
            return _react.default.createElement(
              _HelpText.default,
              {
                inverse: inverse,
              },
              help,
            );
          }

          return null;
        },
      },
    ]);
    return ValidationText;
  })(_react.PureComponent);

var _default = ValidationText;
exports.default = _default;
