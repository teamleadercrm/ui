import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';

var Body =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Body, _PureComponent);

    function Body() {
      _classCallCheck(this, Body);

      return _possibleConstructorReturn(this, _getPrototypeOf(Body).apply(this, arguments));
    }

    _createClass(Body, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            others = _objectWithoutProperties(_this$props, ['children']);

          return React.createElement(
            Island,
            _extends(
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
  })(PureComponent);

export default Body;
