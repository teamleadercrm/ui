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

var TabGroup =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(TabGroup, _PureComponent);

    function TabGroup() {
      (0, _classCallCheck2.default)(this, TabGroup);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(TabGroup).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(TabGroup, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            inverted = _this$props.inverted,
            size = _this$props.size,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['children', 'className', 'inverted', 'size']);
          var classNames = (0, _classnames.default)(
            _theme.default['tab-group'],
            (0, _defineProperty2.default)({}, _theme.default['inverted'], inverted),
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'tab-group',
                className: classNames,
              },
              others,
            ),
            _react.default.Children.map(children, function(child) {
              return _react.default.cloneElement(child, {
                size: size,
              });
            }),
          );
        },
      },
    ]);
    return TabGroup;
  })(_react.PureComponent);

TabGroup.defaultProps = {
  inverted: false,
};
var _default = TabGroup;
exports.default = _default;
