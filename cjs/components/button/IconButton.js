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

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var IconButton =
  /*#__PURE__*/
  (function(_Component) {
    (0, _inherits2.default)(IconButton, _Component);

    function IconButton() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, IconButton);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IconButton)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
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

    (0, _createClass2.default)(IconButton, [
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

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            disabled = _this$props.disabled,
            element = _this$props.element,
            icon = _this$props.icon,
            size = _this$props.size,
            color = _this$props.color,
            type = _this$props.type,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'disabled',
              'element',
              'icon',
              'size',
              'color',
              'type',
            ]);
          var classNames = (0, _classnames.default)(
            _uiUtilities.default['reset-box-sizing'],
            _uiUtilities.default['reset-font-smoothing'],
            _theme.default['button-base'],
            _theme.default['button'],
            _theme.default['icon-button'],
            _theme.default[color],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
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
          return _react.default.createElement(element, props, icon, children);
        },
      },
    ]);
    return IconButton;
  })(_react.Component);

IconButton.defaultProps = {
  className: '',
  element: 'button',
  size: 'medium',
  color: 'neutral',
  type: 'button',
};
var _default = IconButton;
exports.default = _default;
