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

var _theme = _interopRequireDefault(require('./theme.css'));

var _classnames = _interopRequireDefault(require('classnames'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _box = _interopRequireWildcard(require('../box'));

var _typography = require('../typography');

var _uiIcons = require('@teamleader/ui-icons');

var Checkbox =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Checkbox, _PureComponent);

    function Checkbox() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Checkbox);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'inputNode', (0, _react.createRef)());
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleToggle', function(event) {
        var _this$props = _this.props,
          disabled = _this$props.disabled,
          checked = _this$props.checked,
          onChange = _this$props.onChange;

        if (event.pageX !== 0 && event.pageY !== 0) {
          _this.blur();
        }

        if (!disabled && onChange) {
          onChange(!checked, event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(Checkbox, [
      {
        key: 'blur',
        value: function blur() {
          if (this.inputNode.current) {
            this.inputNode.current.blur();
          }
        },
      },
      {
        key: 'focus',
        value: function focus() {
          if (this.inputNode.current) {
            this.inputNode.current.focus();
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props2 = this.props,
            checked = _this$props2.checked,
            disabled = _this$props2.disabled,
            className = _this$props2.className,
            size = _this$props2.size,
            label = _this$props2.label,
            children = _this$props2.children,
            indeterminate = _this$props2.indeterminate,
            others = (0, _objectWithoutProperties2.default)(_this$props2, [
              'checked',
              'disabled',
              'className',
              'size',
              'label',
              'children',
              'indeterminate',
            ]);
          var TextElement =
            size === 'small'
              ? _typography.TextSmall
              : size === 'medium'
              ? _typography.TextBody
              : _typography.TextDisplay;
          var IconCheckmark =
            size === 'large' ? _uiIcons.IconCheckmarkMediumOutline : _uiIcons.IconCheckmarkSmallOutline;
          var restProps = (0, _lodash.default)(others, ['onChange']);
          var boxProps = (0, _box.pickBoxProps)(restProps);
          var inputProps = (0, _box.omitBoxProps)(restProps);
          var classNames = (0, _classnames.default)(
            _theme.default['checkbox'],
            _theme.default['is-'.concat(size)],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-checked'], checked || indeterminate),
            (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
            _cx),
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                element: 'label',
                'data-teamleader-ui': 'checkbox',
                className: classNames,
              },
              boxProps,
            ),
            _react.default.createElement(
              'input',
              (0, _extends2.default)(
                {
                  className: _theme.default['input'],
                  type: 'checkbox',
                  checked: checked,
                  disabled: disabled,
                  onClick: this.handleToggle,
                  ref: this.inputNode,
                  readOnly: true,
                },
                inputProps,
              ),
            ),
            _react.default.createElement(
              'span',
              {
                className: _theme.default['shape'],
              },
              checked
                ? _react.default.createElement(IconCheckmark, {
                    className: _theme.default['icon'],
                  })
                : _react.default.createElement(_uiIcons.IconMinusSmallOutline, {
                    className: _theme.default['icon'],
                  }),
            ),
            (label || children) &&
              _react.default.createElement(
                'span',
                {
                  className: _theme.default['label'],
                },
                label &&
                  _react.default.createElement(
                    TextElement,
                    {
                      element: 'span',
                      color: disabled ? 'neutral' : 'teal',
                    },
                    label,
                  ),
                children,
              ),
          );
        },
      },
    ]);
    return Checkbox;
  })(_react.PureComponent);

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  size: 'medium',
};
var _default = Checkbox;
exports.default = _default;
