'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _ErrorText = _interopRequireDefault(require('./ErrorText')),
  _HelpText = _interopRequireDefault(require('./HelpText')),
  _SuccessText = _interopRequireDefault(require('./SuccessText')),
  _WarningText = _interopRequireDefault(require('./WarningText')),
  ValidationText = (function(e) {
    function r() {
      return (
        (0, _classCallCheck2.default)(this, r),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(r).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(r, e),
      (0, _createClass2.default)(r, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              r = e.error,
              t = e.inverse,
              u = e.help,
              i = e.success,
              l = e.warning;
            return r
              ? _react.default.createElement(_ErrorText.default, { inverse: t }, r)
              : l
                ? _react.default.createElement(_WarningText.default, { inverse: t }, l)
                : i
                  ? _react.default.createElement(_SuccessText.default, { inverse: t }, i)
                  : u
                    ? _react.default.createElement(_HelpText.default, { inverse: t }, u)
                    : null;
          },
        },
      ]),
      r
    );
  })(_react.PureComponent),
  _default = ValidationText;
exports.default = _default;
