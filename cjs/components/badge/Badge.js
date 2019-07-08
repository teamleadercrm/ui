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

var _constants = require('../../constants');

var _typography = require('../typography');

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Badge =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Badge, _PureComponent);

    function Badge() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Badge);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Badge)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'badgeNode', (0, _react.createRef)());
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseUp', function(event) {
        _this.badgeNode.current.boxNode.current.blur();

        if (_this.props.onMouseUp) {
          _this.props.onMouseUp(event);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseLeave', function(event) {
        _this.badgeNode.current.boxNode.current.blur();

        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderIcon', function() {
        var _this$props = _this.props,
          color = _this$props.color,
          icon = _this$props.icon,
          inverse = _this$props.inverse;
        return _react.default.createElement(
          _icon.default,
          {
            className: _theme.default['icon'],
            color: color === 'neutral' ? 'teal' : color,
            tint: inverse ? 'lightest' : 'darkest',
          },
          icon,
        );
      });
      return _this;
    }

    (0, _createClass2.default)(Badge, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            disabled = _this$props2.disabled,
            element = _this$props2.element,
            icon = _this$props2.icon,
            iconPlacement = _this$props2.iconPlacement,
            inherit = _this$props2.inherit,
            inverse = _this$props2.inverse,
            color = _this$props2.color,
            others = (0, _objectWithoutProperties2.default)(_this$props2, [
              'children',
              'className',
              'disabled',
              'element',
              'icon',
              'iconPlacement',
              'inherit',
              'inverse',
              'color',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['badge'],
            _theme.default[color],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
            (0, _defineProperty2.default)(_cx, _theme.default['is-inherit'], inherit),
            (0, _defineProperty2.default)(_cx, _theme.default['is-inverse'], inverse),
            _cx),
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
                'data-teamleader-ui': 'badge',
                element: element,
                ref: this.badgeNode,
                onMouseUp: this.handleMouseUp,
                onMouseLeave: this.handleMouseLeave,
                paddingHorizontal: 2,
                paddingVertical: 1,
              },
              others,
            ),
            icon && iconPlacement === 'left' && this.renderIcon(),
            inherit
              ? _react.default.createElement(
                  'span',
                  {
                    className: _theme.default['label'],
                  },
                  children,
                )
              : _react.default.createElement(
                  _typography.TextBody,
                  {
                    className: _theme.default['label'],
                    element: 'span',
                  },
                  children,
                ),
            icon && iconPlacement === 'right' && this.renderIcon(),
          );
        },
      },
    ]);
    return Badge;
  })(_react.PureComponent);

Badge.defaultProps = {
  disabled: false,
  element: 'button',
  iconPlacement: 'left',
  inherit: true,
  inverse: false,
  color: 'neutral',
};
var _default = Badge;
exports.default = _default;
