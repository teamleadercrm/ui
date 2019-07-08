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

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _theme = _interopRequireDefault(require('./theme.css'));

var LoadingBar =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(LoadingBar, _PureComponent);

    function LoadingBar() {
      (0, _classCallCheck2.default)(this, LoadingBar);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(LoadingBar).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(LoadingBar, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            color = _this$props.color,
            size = _this$props.size,
            tint = _this$props.tint,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['className', 'color', 'size', 'tint']);
          var classNames = (0, _classnames.default)(
            _theme.default['loading-bar'],
            _theme.default['is-'.concat(color)],
            _theme.default['is-'.concat(size)],
            _theme.default['is-'.concat(tint)],
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'loading-bar',
                className: classNames,
              },
              others,
            ),
            _react.default.createElement('div', {
              className: _theme.default['loading-bar-indicator'],
            }),
          );
        },
      },
    ]);
    return LoadingBar;
  })(_react.PureComponent);

LoadingBar.defaultProps = {
  color: 'mint',
  size: 'small',
  tint: 'normal',
};
var _default = LoadingBar;
exports.default = _default;
