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

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _island = _interopRequireDefault(require('../island'));

var Body =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Body, _PureComponent);

    function Body() {
      (0, _classCallCheck2.default)(this, Body);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Body).apply(this, arguments));
    }

    (0, _createClass2.default)(Body, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['children']);
          return _react.default.createElement(
            _island.default,
            (0, _extends2.default)(
              {
                padding: 4,
              },
              others,
            ),
            children,
          );
        },
      },
    ]);
    return Body;
  })(_react.PureComponent);

var _default = Body;
exports.default = _default;
