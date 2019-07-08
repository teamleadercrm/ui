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

var _classnames = _interopRequireDefault(require('classnames'));

var _box = _interopRequireWildcard(require('../box'));

var _theme = _interopRequireDefault(require('./theme.css'));

var IslandGroup =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(IslandGroup, _PureComponent);

    function IslandGroup() {
      (0, _classCallCheck2.default)(this, IslandGroup);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(IslandGroup).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(IslandGroup, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            dark = _this$props.dark,
            direction = _this$props.direction,
            size = _this$props.size,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'color',
              'dark',
              'direction',
              'size',
            ]);
          var boxProps = (0, _box.pickBoxProps)(otherProps);
          var classNames = (0, _classnames.default)(
            _theme.default['direction-'.concat(direction)],
            _theme.default['island-group'],
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)({}, boxProps, {
              className: classNames,
            }),
            _react.default.Children.map(children, function(child) {
              return _react.default.cloneElement(
                child,
                (0, _objectSpread2.default)({}, child.props, {
                  color: color || child.props.color,
                  dark: dark || child.props.dark,
                  size: size || child.props.size,
                }),
              );
            }),
          );
        },
      },
    ]);
    return IslandGroup;
  })(_react.PureComponent);

IslandGroup.defaultProps = {
  direction: 'horizontal',
};
var _default = IslandGroup;
exports.default = _default;
