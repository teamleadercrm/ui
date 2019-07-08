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

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _icon = _interopRequireDefault(require('../icon'));

var _typography = require('../typography');

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var MenuItem =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(MenuItem, _PureComponent);

    function MenuItem() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, MenuItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleClick', function(event) {
        var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

        if (onClick && !disabled) {
          onClick(event, (0, _assertThisInitialized2.default)(_this));
        }
      });
      return _this;
    }

    (0, _createClass2.default)(MenuItem, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props2 = this.props,
            icon = _this$props2.icon,
            caption = _this$props2.caption,
            className = _this$props2.className,
            destructive = _this$props2.destructive,
            selected = _this$props2.selected,
            disabled = _this$props2.disabled,
            others = (0, _objectWithoutProperties2.default)(_this$props2, [
              'icon',
              'caption',
              'className',
              'destructive',
              'selected',
              'disabled',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['menu-item'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-selected'], selected),
            (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
            _cx),
            className,
          );
          var color = destructive ? 'ruby' : disabled ? 'neutral' : 'teal';
          var tint = disabled && destructive ? 'light' : disabled || destructive ? 'dark' : 'darkest';
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)({}, others, {
              alignItems: 'center',
              className: classNames,
              'data-teamleader-ui': 'menu-item',
              display: 'flex',
              element: 'li',
              onClick: this.handleClick,
              paddingHorizontal: 3,
            }),
            icon &&
              _react.default.createElement(
                _icon.default,
                {
                  color: color,
                  tint: tint,
                  marginRight: 3,
                },
                icon,
              ),
            _react.default.createElement(
              _typography.TextBody,
              {
                color: color,
                tint: tint,
                element: 'span',
              },
              caption,
            ),
          );
        },
      },
    ]);
    return MenuItem;
  })(_react.PureComponent);

MenuItem.defaultProps = {
  className: '',
  destructive: false,
  disabled: false,
  selected: false,
};
var _default = MenuItem;
exports.default = _default;
