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

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _constants = require('../../constants');

var _theme = _interopRequireDefault(require('./theme.css'));

var Box =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Box, _PureComponent);

    function Box() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Box);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Box)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'boxNode', (0, _react.createRef)());
      return _this;
    }

    (0, _createClass2.default)(Box, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            alignContent = _this$props.alignContent,
            alignItems = _this$props.alignItems,
            alignSelf = _this$props.alignSelf,
            backgroundColor = _this$props.backgroundColor,
            backgroundTint = _this$props.backgroundTint,
            boxSizing = _this$props.boxSizing,
            children = _this$props.children,
            className = _this$props.className,
            display = _this$props.display,
            element = _this$props.element,
            flex = _this$props.flex,
            flexBasis = _this$props.flexBasis,
            flexDirection = _this$props.flexDirection,
            flexGrow = _this$props.flexGrow,
            flexShrink = _this$props.flexShrink,
            flexWrap = _this$props.flexWrap,
            justifyContent = _this$props.justifyContent,
            margin = _this$props.margin,
            _this$props$marginHor = _this$props.marginHorizontal,
            marginHorizontal = _this$props$marginHor === void 0 ? margin : _this$props$marginHor,
            _this$props$marginVer = _this$props.marginVertical,
            marginVertical = _this$props$marginVer === void 0 ? margin : _this$props$marginVer,
            _this$props$marginBot = _this$props.marginBottom,
            marginBottom = _this$props$marginBot === void 0 ? marginVertical : _this$props$marginBot,
            _this$props$marginLef = _this$props.marginLeft,
            marginLeft = _this$props$marginLef === void 0 ? marginHorizontal : _this$props$marginLef,
            _this$props$marginRig = _this$props.marginRight,
            marginRight = _this$props$marginRig === void 0 ? marginHorizontal : _this$props$marginRig,
            _this$props$marginTop = _this$props.marginTop,
            marginTop = _this$props$marginTop === void 0 ? marginVertical : _this$props$marginTop,
            order = _this$props.order,
            overflow = _this$props.overflow,
            overflowX = _this$props.overflowX,
            overflowY = _this$props.overflowY,
            padding = _this$props.padding,
            _this$props$paddingHo = _this$props.paddingHorizontal,
            paddingHorizontal = _this$props$paddingHo === void 0 ? padding : _this$props$paddingHo,
            _this$props$paddingVe = _this$props.paddingVertical,
            paddingVertical = _this$props$paddingVe === void 0 ? padding : _this$props$paddingVe,
            _this$props$paddingBo = _this$props.paddingBottom,
            paddingBottom = _this$props$paddingBo === void 0 ? paddingVertical : _this$props$paddingBo,
            _this$props$paddingLe = _this$props.paddingLeft,
            paddingLeft = _this$props$paddingLe === void 0 ? paddingHorizontal : _this$props$paddingLe,
            _this$props$paddingRi = _this$props.paddingRight,
            paddingRight = _this$props$paddingRi === void 0 ? paddingHorizontal : _this$props$paddingRi,
            _this$props$paddingTo = _this$props.paddingTop,
            paddingTop = _this$props$paddingTo === void 0 ? paddingVertical : _this$props$paddingTo,
            style = _this$props.style,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'alignContent',
              'alignItems',
              'alignSelf',
              'backgroundColor',
              'backgroundTint',
              'boxSizing',
              'children',
              'className',
              'display',
              'element',
              'flex',
              'flexBasis',
              'flexDirection',
              'flexGrow',
              'flexShrink',
              'flexWrap',
              'justifyContent',
              'margin',
              'marginHorizontal',
              'marginVertical',
              'marginBottom',
              'marginLeft',
              'marginRight',
              'marginTop',
              'order',
              'overflow',
              'overflowX',
              'overflowY',
              'padding',
              'paddingHorizontal',
              'paddingVertical',
              'paddingBottom',
              'paddingLeft',
              'paddingRight',
              'paddingTop',
              'style',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['box'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['align-content-'.concat(alignContent)], alignContent),
            (0, _defineProperty2.default)(_cx, _theme.default['align-items-'.concat(alignItems)], alignItems),
            (0, _defineProperty2.default)(_cx, _theme.default['align-self-'.concat(alignSelf)], alignSelf),
            (0, _defineProperty2.default)(
              _cx,
              _theme.default['background-color-'.concat(backgroundColor, '-').concat(backgroundTint)],
              backgroundColor && backgroundTint,
            ),
            (0, _defineProperty2.default)(
              _cx,
              _theme.default['background-color-'.concat(backgroundColor)],
              backgroundColor && (!backgroundTint || backgroundTint === 'normal'),
            ),
            (0, _defineProperty2.default)(_cx, _theme.default['display-'.concat(display)], display),
            (0, _defineProperty2.default)(_cx, _theme.default['flex-direction-'.concat(flexDirection)], flexDirection),
            (0, _defineProperty2.default)(_cx, _theme.default['flex-wrap-'.concat(flexWrap)], flexWrap),
            (0, _defineProperty2.default)(
              _cx,
              _theme.default['justify-content-'.concat(justifyContent)],
              justifyContent,
            ),
            (0, _defineProperty2.default)(_cx, _theme.default['margin-bottom-'.concat(marginBottom)], marginBottom > 0),
            (0, _defineProperty2.default)(_cx, _theme.default['margin-left-'.concat(marginLeft)], marginLeft > 0),
            (0, _defineProperty2.default)(_cx, _theme.default['margin-right-'.concat(marginRight)], marginRight > 0),
            (0, _defineProperty2.default)(_cx, _theme.default['margin-top-'.concat(marginTop)], marginTop > 0),
            (0, _defineProperty2.default)(
              _cx,
              _theme.default['padding-bottom-'.concat(paddingBottom)],
              paddingBottom > 0,
            ),
            (0, _defineProperty2.default)(_cx, _theme.default['padding-left-'.concat(paddingLeft)], paddingLeft > 0),
            (0, _defineProperty2.default)(_cx, _theme.default['padding-right-'.concat(paddingRight)], paddingRight > 0),
            (0, _defineProperty2.default)(_cx, _theme.default['padding-top-'.concat(paddingTop)], paddingTop > 0),
            _cx),
            className,
          );
          var elementStyles = (0, _objectSpread2.default)(
            {},
            boxSizing && {
              boxSizing: boxSizing,
            },
            flex && {
              flex: flex,
            },
            flexBasis && {
              flexBasis: flexBasis,
            },
            !isNaN(flexGrow)
              ? {
                  flexGrow: flexGrow,
                }
              : {},
            !isNaN(flexShrink)
              ? {
                  flexShrink: flexShrink,
                }
              : {},
            !isNaN(order)
              ? {
                  order: order,
                }
              : {},
            overflow && {
              overflow: overflow,
            },
            overflowX && {
              overflowX: overflowX,
            },
            overflowY && {
              overflowY: overflowY,
            },
            style,
          );
          var Element = element;
          return _react.default.createElement(
            Element,
            (0, _extends2.default)(
              {
                ref: this.boxNode,
                className: classNames,
                style: elementStyles,
              },
              others,
            ),
            children,
          );
        },
      },
    ]);
    return Box;
  })(_react.PureComponent);

Box.defaultProps = {
  element: 'div',
  margin: 0,
  padding: 0,
};
var _default = Box;
exports.default = _default;
