'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

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

var AvatarStack =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(AvatarStack, _PureComponent);

    function AvatarStack() {
      (0, _classCallCheck2.default)(this, AvatarStack);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(AvatarStack).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(AvatarStack, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            direction = _this$props.direction,
            displayMax = _this$props.displayMax,
            inverse = _this$props.inverse,
            onOverflowClick = _this$props.onOverflowClick,
            size = _this$props.size,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'direction',
              'displayMax',
              'inverse',
              'onOverflowClick',
              'size',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['stack'],
            _theme.default[direction],
            _theme.default['is-'.concat(size)],
            inverse ? [_theme.default['light']] : [_theme.default['dark']],
            className,
          );
          var childrenToDisplay = displayMax > 0 ? children.slice(0, displayMax) : children;
          var overflowAmount = children.length - displayMax;
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'avatar-stack',
                className: classNames,
              },
              others,
            ),
            overflowAmount > 0 &&
              _react.default.createElement(
                'div',
                {
                  className: (0, _classnames.default)(
                    _uiUtilities.default['reset-font-smoothing'],
                    _theme.default['overflow'],
                  ),
                  onClick: onOverflowClick,
                },
                '+'.concat(overflowAmount),
              ),
            childrenToDisplay.map(function(child, index) {
              return (0, _react.cloneElement)(
                child,
                (0, _objectSpread2.default)(
                  {
                    key: index,
                  },
                  child.props,
                  {
                    size: size,
                  },
                ),
              );
            }),
          );
        },
      },
    ]);
    return AvatarStack;
  })(_react.PureComponent);

AvatarStack.defaultProps = {
  direction: 'horizontal',
  displayMax: 0,
  inverse: false,
  size: 'medium',
};
var _default = AvatarStack;
exports.default = _default;
