'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

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

var _loadingSpinner = _interopRequireDefault(require('../loadingSpinner'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var Button =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Button, _PureComponent);

    function Button() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Button);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Button)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseUp', function(event) {
        _this.blur();

        if (_this.props.onMouseUp) {
          _this.props.onMouseUp(event);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseLeave', function(event) {
        _this.blur();

        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(Button, [
      {
        key: 'getSpinnerColor',
        value: function getSpinnerColor() {
          var _this$props = this.props,
            inverse = _this$props.inverse,
            level = _this$props.level;

          switch (level) {
            case 'secondary':
              return 'teal';

            case 'outline':
              return inverse ? 'neutral' : 'teal';

            case 'link':
              return inverse ? 'neutral' : 'aqua';

            default:
              return 'neutral';
          }
        },
      },
      {
        key: 'getSpinnerTint',
        value: function getSpinnerTint() {
          var _this$props2 = this.props,
            inverse = _this$props2.inverse,
            level = _this$props2.level;

          switch (level) {
            case 'secondary':
              return 'darkest';

            case 'outline':
              return inverse ? 'lightest' : 'darkest';

            case 'link':
              return inverse ? 'lightest' : 'dark';

            default:
              return 'lightest';
          }
        },
      },
      {
        key: 'blur',
        value: function blur() {
          if (this.buttonNode.blur) {
            this.buttonNode.blur();
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _cx,
            _this2 = this;

          var _this$props3 = this.props,
            children = _this$props3.children,
            className = _this$props3.className,
            level = _this$props3.level,
            disabled = _this$props3.disabled,
            element = _this$props3.element,
            active = _this$props3.active,
            fullWidth = _this$props3.fullWidth,
            icon = _this$props3.icon,
            iconPlacement = _this$props3.iconPlacement,
            inverse = _this$props3.inverse,
            label = _this$props3.label,
            size = _this$props3.size,
            type = _this$props3.type,
            processing = _this$props3.processing,
            others = (0, _objectWithoutProperties2.default)(_this$props3, [
              'children',
              'className',
              'level',
              'disabled',
              'element',
              'active',
              'fullWidth',
              'icon',
              'iconPlacement',
              'inverse',
              'label',
              'size',
              'type',
              'processing',
            ]);
          var classNames = (0, _classnames.default)(
            _uiUtilities.default['reset-box-sizing'],
            _uiUtilities.default['reset-font-smoothing'],
            _theme.default['button-base'],
            _theme.default['button'],
            _theme.default[level],
            ((_cx = {}),
            (0, _defineProperty2.default)(
              _cx,
              _theme.default['has-icon-only'],
              (!children && !label) || (Array.isArray(children) && !children[0] && !label),
            ),
            (0, _defineProperty2.default)(
              _cx,
              _theme.default['is-inverse'],
              inverse && (level === 'outline' || level === 'link'),
            ),
            (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
            (0, _defineProperty2.default)(_cx, _theme.default['is-full-width'], fullWidth),
            (0, _defineProperty2.default)(_cx, _theme.default['is-processing'], processing),
            (0, _defineProperty2.default)(_cx, _theme.default['is-active'], active),
            (0, _defineProperty2.default)(_cx, _theme.default[size], _theme.default[size]),
            _cx),
            className,
          );
          var props = (0, _objectSpread2.default)({}, others, {
            ref: function ref(node) {
              _this2.buttonNode = node;
            },
            className: classNames,
            disabled: element === 'button' ? disabled : null,
            onMouseUp: this.handleMouseUp,
            onMouseLeave: this.handleMouseLeave,
            type: element === 'button' ? type : null,
            'data-teamleader-ui': 'button',
          });
          return _react.default.createElement(
            element,
            props,
            icon && iconPlacement === 'left' && icon,
            (label || children) && _react.default.createElement('span', null, label, children),
            icon && iconPlacement === 'right' && icon,
            processing &&
              _react.default.createElement(_loadingSpinner.default, {
                className: _theme.default['spinner'],
                color: this.getSpinnerColor(),
                size: size === 'small' ? 'small' : 'medium',
                tint: this.getSpinnerTint(),
              }),
          );
        },
      },
    ]);
    return Button;
  })(_react.PureComponent);

Button.defaultProps = {
  className: '',
  element: 'button',
  fullWidth: false,
  level: 'secondary',
  iconPlacement: 'left',
  inverse: false,
  processing: false,
  size: 'medium',
  type: 'button',
};
var _default = Button;
exports.default = _default;
