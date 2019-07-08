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

var _uiIcons = require('@teamleader/ui-icons');

var _typography = require('../typography');

var _box = _interopRequireDefault(require('../box'));

var _icon = _interopRequireDefault(require('../icon'));

var WarningText =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(WarningText, _PureComponent);

    function WarningText() {
      (0, _classCallCheck2.default)(this, WarningText);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(WarningText).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(WarningText, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            inverse = _this$props.inverse,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['children', 'className', 'inverse']);
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: className,
                alignItems: 'center',
                'data-teamleader-ui': 'warning-text',
                display: 'flex',
                marginTop: 2,
              },
              others,
            ),
            _react.default.createElement(
              _icon.default,
              {
                color: 'gold',
                tint: inverse ? 'light' : 'dark',
              },
              _react.default.createElement(_uiIcons.IconWarningBadgedSmallFilled, null),
            ),
            _react.default.createElement(
              _typography.TextSmall,
              {
                color: 'gold',
                element: 'span',
                marginLeft: 1,
                tint: inverse ? 'light' : 'dark',
              },
              children,
            ),
          );
        },
      },
    ]);
    return WarningText;
  })(_react.PureComponent);

exports.default = WarningText;
WarningText.defaultProps = {
  children: 'This is the warning text',
  inverse: false,
};
