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

var _classnames = _interopRequireDefault(require('classnames'));

var _constants = require('../../../constants');

var withTheme = function withTheme(theme) {
  return function(WrappedComponent) {
    var WithTheme =
      /*#__PURE__*/
      (function(_PureComponent) {
        (0, _inherits2.default)(WithTheme, _PureComponent);

        function WithTheme() {
          (0, _classCallCheck2.default)(this, WithTheme);
          return (0, _possibleConstructorReturn2.default)(
            this,
            (0, _getPrototypeOf2.default)(WithTheme).apply(this, arguments),
          );
        }

        (0, _createClass2.default)(WithTheme, [
          {
            key: 'render',
            value: function render() {
              var _this$props = this.props,
                color = _this$props.color,
                size = _this$props.size,
                tint = _this$props.tint,
                className = _this$props.className,
                others = (0, _objectWithoutProperties2.default)(_this$props, ['color', 'size', 'tint', 'className']);
              var classNames = (0, _classnames.default)(
                theme['is-'.concat(color)],
                theme['is-'.concat(size)],
                theme['is-'.concat(tint)],
                className,
              );
              return _react.default.createElement(
                WrappedComponent,
                (0, _extends2.default)(
                  {
                    className: classNames,
                  },
                  others,
                ),
              );
            },
          },
        ]);
        return WithTheme;
      })(_react.PureComponent);

    WithTheme.defaultProps = {
      color: 'neutral',
      size: 'medium',
      tint: 'normal',
    };
    WithTheme.displayName = 'WithTheme('.concat(
      WrappedComponent.displayName || WrappedComponent.name || 'Component',
      ')',
    );
    return WithTheme;
  };
};

var _default = withTheme;
exports.default = _default;
