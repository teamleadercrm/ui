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

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _utils = require('../utils/utils');

var SIZES = {
  small: 3,
  medium: 4,
  large: 5,
};

var Section =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Section, _PureComponent);

    function Section() {
      (0, _classCallCheck2.default)(this, Section);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Section).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Section, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            dark = _this$props.dark,
            size = _this$props.size,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'color',
              'dark',
              'size',
            ]);
          var isDark = (0, _utils.elementIsDark)(color, dark);
          var classNames = (0, _classnames.default)(
            _theme.default['section'],
            className,
            _theme.default[color],
            (0, _defineProperty2.default)({}, _theme.default['dark'], isDark),
          );
          var rest = (0, _lodash.default)(others, ['dark']);
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'section',
                className: classNames,
                element: 'section',
                padding: SIZES[size],
              },
              rest,
            ),
            children,
          );
        },
      },
    ]);
    return Section;
  })(_react.PureComponent);

Section.defaultProps = {
  color: 'white',
  size: 'medium',
};
var _default = Section;
exports.default = _default;
