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

var _Body = _interopRequireDefault(require('./Body'));

var _Footer = _interopRequireDefault(require('./Footer'));

var _Header = _interopRequireDefault(require('./Header'));

var _island = require('../island');

var PADDINGS = {
  small: 3,
  medium: 4,
  large: 5,
};

var Widget =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Widget, _PureComponent);

    function Widget() {
      (0, _classCallCheck2.default)(this, Widget);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Widget).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Widget, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            size = _this$props.size,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['children', 'size']);
          return _react.default.createElement(
            _island.IslandGroup,
            (0, _extends2.default)(
              {
                direction: 'vertical',
              },
              others,
            ),
            _react.default.Children.map(children, function(child) {
              return _react.default.cloneElement(
                child,
                (0, _objectSpread2.default)(
                  {
                    padding: PADDINGS[size],
                  },
                  child.props,
                ),
              );
            }),
          );
        },
      },
    ]);
    return Widget;
  })(_react.PureComponent);

Widget.defaultProps = {
  size: 'medium',
};
Widget.Body = _Body.default;
Widget.Footer = _Footer.default;
Widget.Header = _Header.default;
var _default = Widget;
exports.default = _default;
