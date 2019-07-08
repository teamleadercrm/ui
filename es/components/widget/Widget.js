import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { IslandGroup } from '../island';
var PADDINGS = {
  small: 3,
  medium: 4,
  large: 5,
};

var Widget =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Widget, _PureComponent);

    function Widget() {
      _classCallCheck(this, Widget);

      return _possibleConstructorReturn(this, _getPrototypeOf(Widget).apply(this, arguments));
    }

    _createClass(Widget, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, ['children', 'size']);

          return React.createElement(
            IslandGroup,
            _extends(
              {
                direction: 'vertical',
              },
              others,
            ),
            React.Children.map(children, function(child) {
              return React.cloneElement(
                child,
                _objectSpread(
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
  })(PureComponent);

Widget.defaultProps = {
  size: 'medium',
};
Widget.Body = Body;
Widget.Footer = Footer;
Widget.Header = Header;
export default Widget;
