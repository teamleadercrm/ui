import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { Heading4 } from '../typography';

var AvatarInitials =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(AvatarInitials, _PureComponent);

    function AvatarInitials() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, AvatarInitials);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(AvatarInitials)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'getInitials', function() {
        var name = _this.props.name;
        var splitName = name.split(' ');
        var firstLetter = splitName[0].charAt(0);

        if (splitName.length > 1) {
          var lastLetter = splitName[splitName.length - 1].charAt(0);
          return ''.concat(firstLetter).concat(lastLetter);
        }

        return firstLetter;
      });

      return _this;
    }

    _createClass(AvatarInitials, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            color = _this$props.color,
            shape = _this$props.shape,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, ['className', 'color', 'shape', 'size']);

          var avatarClassNames = cx(
            theme['avatar-initials'],
            theme['is-'.concat(size)],
            theme['is-'.concat(shape)],
            theme[color],
            className,
          );
          var boxProps = pickBoxProps(others);
          return React.createElement(
            Box,
            _extends(
              {
                className: avatarClassNames,
              },
              boxProps,
              {
                'data-teamleader-ui': 'avatar-initials',
              },
            ),
            React.createElement(
              Heading4,
              {
                className: theme['content'],
              },
              this.getInitials(),
            ),
          );
        },
      },
    ]);

    return AvatarInitials;
  })(PureComponent);

AvatarInitials.defaultProps = {
  shape: 'circle',
  size: 'medium',
  name: 'Michael Scott',
};
export default AvatarInitials;
