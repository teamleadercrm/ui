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

var _box = _interopRequireDefault(require('../box'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Icon =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Icon, _PureComponent);

    function Icon() {
      (0, _classCallCheck2.default)(this, Icon);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
    }

    (0, _createClass2.default)(Icon, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            tint = _this$props.tint,
            opacity = _this$props.opacity,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'color',
              'tint',
              'opacity',
            ]);
          var classNames = (0, _classnames.default)(_theme.default[color], _theme.default[tint], className);
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
                alignItems: 'center',
                'data-teamleader-ui': 'icon',
                display: 'flex',
                element: 'span',
              },
              others,
            ),
            _react.default.Children.map(children, function(child) {
              // Check if child is an actual React component
              // if so, pass the needed props. If not, just render it.
              if (!child.type) {
                return child;
              }

              return _react.default.cloneElement(child, {
                opacity: opacity,
              });
            }),
          );
        },
      },
    ]);
    return Icon;
  })(_react.PureComponent);

Icon.defaultProps = {
  color: 'teal',
  tint: 'normal',
  opacity: 0.84,
};
var _default = Icon;
exports.default = _default;
