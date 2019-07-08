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

var _button = _interopRequireWildcard(require('../button'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiIcons = require('@teamleader/ui-icons');

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var Tag =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Tag, _PureComponent);

    function Tag() {
      (0, _classCallCheck2.default)(this, Tag);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tag).apply(this, arguments));
    }

    (0, _createClass2.default)(Tag, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            inverse = _this$props.inverse,
            onLabelClick = _this$props.onLabelClick,
            onRemoveClick = _this$props.onRemoveClick,
            size = _this$props.size,
            color = _this$props.color,
            disabled = _this$props.disabled,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'inverse',
              'onLabelClick',
              'onRemoveClick',
              'size',
              'color',
              'disabled',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['tag'],
            _theme.default['is-'.concat(size)],
            _theme.default[color],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-removable'], onRemoveClick),
            (0, _defineProperty2.default)(_cx, _theme.default['is-inverse'], inverse),
            (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
            _cx),
            className,
          );
          var closeButtonColor = inverse ? 'white' : 'neutral';

          var closeButtonIcon = _react.default.createElement(_uiIcons.IconCloseSmallOutline, null);

          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
                'data-teamleader-ui': 'tag',
              },
              others,
            ),
            onLabelClick
              ? _react.default.createElement(
                  _button.default,
                  {
                    className: _theme.default['label-button'],
                    onClick: onLabelClick,
                    level: 'outline',
                    inverse: inverse,
                    disabled: disabled,
                  },
                  children,
                )
              : _react.default.createElement(
                  'span',
                  {
                    className: (0, _classnames.default)(
                      _uiUtilities.default['reset-font-smoothing'],
                      _theme.default['label'],
                    ),
                  },
                  children,
                ),
            onRemoveClick &&
              _react.default.createElement(_button.IconButton, {
                className: _theme.default['remove-button'],
                color: closeButtonColor,
                icon: closeButtonIcon,
                onClick: onRemoveClick,
                size: 'small',
                disabled: disabled,
              }),
          );
        },
      },
    ]);
    return Tag;
  })(_react.PureComponent);

Tag.defaultProps = {
  inverse: false,
  size: 'medium',
  color: 'neutral',
};
var _default = Tag;
exports.default = _default;
