'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

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

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var Counter =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Counter, _PureComponent);

    function Counter() {
      (0, _classCallCheck2.default)(this, Counter);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Counter).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Counter, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            count = _this$props.count,
            maxCount = _this$props.maxCount,
            size = _this$props.size,
            borderColor = _this$props.borderColor,
            borderTint = _this$props.borderTint,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'color',
              'count',
              'maxCount',
              'size',
              'borderColor',
              'borderTint',
            ]);
          var classNames = (0, _classnames.default)(
            _uiUtilities.default['reset-font-smoothing'],
            _theme.default['counter'],
            _theme.default[color],
            _theme.default[size],
            ((_cx = {}),
            (0, _defineProperty2.default)(
              _cx,
              _theme.default['border-'.concat(borderColor, '-').concat(borderTint)],
              borderColor && borderTint,
            ),
            (0, _defineProperty2.default)(
              _cx,
              _theme.default['border-'.concat(borderColor)],
              borderColor && !borderTint,
            ),
            _cx),
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
                element: 'span',
              },
              others,
              {
                'data-teamleader-ui': 'counter',
              },
            ),
            count > maxCount ? ''.concat(maxCount, '+') : count,
            ' ',
            children,
          );
        },
      },
    ]);
    return Counter;
  })(_react.PureComponent);

Counter.defaultProps = {
  color: 'neutral',
  size: 'medium',
};
var _default = Counter;
exports.default = _default;
