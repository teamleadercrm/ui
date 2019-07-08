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

var Bullet =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Bullet, _PureComponent);

    function Bullet() {
      (0, _classCallCheck2.default)(this, Bullet);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Bullet).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Bullet, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            className = _this$props.className,
            color = _this$props.color,
            size = _this$props.size,
            borderColor = _this$props.borderColor,
            borderTint = _this$props.borderTint,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'color',
              'size',
              'borderColor',
              'borderTint',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['bullet'],
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
                'data-teamleader-ui': 'bullet',
                className: classNames,
                element: 'span',
              },
              others,
            ),
          );
        },
      },
    ]);
    return Bullet;
  })(_react.PureComponent);

Bullet.defaultProps = {
  color: 'neutral',
  size: 'medium',
};
var _default = Bullet;
exports.default = _default;
