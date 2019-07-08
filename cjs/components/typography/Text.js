'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.textFactory = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _box = _interopRequireDefault(require('../box'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _constants = require('../../constants');

var _theme = _interopRequireDefault(require('./theme.css'));

var factory = function factory(baseType, type, defaultElement) {
  var Text =
    /*#__PURE__*/
    (function(_PureComponent) {
      (0, _inherits2.default)(Text, _PureComponent);

      function Text() {
        (0, _classCallCheck2.default)(this, Text);
        return (0, _possibleConstructorReturn2.default)(
          this,
          (0, _getPrototypeOf2.default)(Text).apply(this, arguments),
        );
      }

      (0, _createClass2.default)(Text, [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              children = _this$props.children,
              className = _this$props.className,
              color = _this$props.color,
              element = _this$props.element,
              tint = _this$props.tint,
              others = (0, _objectWithoutProperties2.default)(_this$props, [
                'children',
                'className',
                'color',
                'element',
                'tint',
              ]);
            var classNames = (0, _classnames.default)(
              _theme.default[baseType],
              _theme.default[type],
              _theme.default[color],
              _theme.default[tint],
              className,
            );
            var Element = element || defaultElement;
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  className: classNames,
                  'data-teamleader-ui': baseType,
                  element: Element,
                },
                others,
              ),
              children,
            );
          },
        },
      ]);
      return Text;
    })(_react.PureComponent);

  Text.defaultProps = {
    element: null,
    tint: 'darkest',
  };
  return Text;
};

exports.textFactory = factory;
