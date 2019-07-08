import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../constants';
import theme from './theme.css';

var Box =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Box, _PureComponent);

    function Box() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Box);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Box)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'boxNode', createRef());

      return _this;
    }

    _createClass(Box, [
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
            others = _objectWithoutProperties(_this$props, [
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

          var classNames = cx(
            theme['box'],
            ((_cx = {}),
            _defineProperty(_cx, theme['align-content-'.concat(alignContent)], alignContent),
            _defineProperty(_cx, theme['align-items-'.concat(alignItems)], alignItems),
            _defineProperty(_cx, theme['align-self-'.concat(alignSelf)], alignSelf),
            _defineProperty(
              _cx,
              theme['background-color-'.concat(backgroundColor, '-').concat(backgroundTint)],
              backgroundColor && backgroundTint,
            ),
            _defineProperty(
              _cx,
              theme['background-color-'.concat(backgroundColor)],
              backgroundColor && (!backgroundTint || backgroundTint === 'normal'),
            ),
            _defineProperty(_cx, theme['display-'.concat(display)], display),
            _defineProperty(_cx, theme['flex-direction-'.concat(flexDirection)], flexDirection),
            _defineProperty(_cx, theme['flex-wrap-'.concat(flexWrap)], flexWrap),
            _defineProperty(_cx, theme['justify-content-'.concat(justifyContent)], justifyContent),
            _defineProperty(_cx, theme['margin-bottom-'.concat(marginBottom)], marginBottom > 0),
            _defineProperty(_cx, theme['margin-left-'.concat(marginLeft)], marginLeft > 0),
            _defineProperty(_cx, theme['margin-right-'.concat(marginRight)], marginRight > 0),
            _defineProperty(_cx, theme['margin-top-'.concat(marginTop)], marginTop > 0),
            _defineProperty(_cx, theme['padding-bottom-'.concat(paddingBottom)], paddingBottom > 0),
            _defineProperty(_cx, theme['padding-left-'.concat(paddingLeft)], paddingLeft > 0),
            _defineProperty(_cx, theme['padding-right-'.concat(paddingRight)], paddingRight > 0),
            _defineProperty(_cx, theme['padding-top-'.concat(paddingTop)], paddingTop > 0),
            _cx),
            className,
          );

          var elementStyles = _objectSpread(
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
          return React.createElement(
            Element,
            _extends(
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
  })(PureComponent);

Box.defaultProps = {
  element: 'div',
  margin: 0,
  padding: 0,
};
export default Box;
