import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

var Avatar =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Avatar, _PureComponent);

    function Avatar() {
      _classCallCheck(this, Avatar);

      return _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
    }

    _createClass(Avatar, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            image = _this$props.image,
            imageAlt = _this$props.imageAlt,
            imageClassName = _this$props.imageClassName,
            shape = _this$props.shape,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'image',
              'imageAlt',
              'imageClassName',
              'shape',
              'size',
            ]);

          var avatarClassNames = cx(theme['avatar'], theme['is-'.concat(shape)], theme['is-'.concat(size)], className);
          return React.createElement(
            Box,
            _extends(
              {
                className: avatarClassNames,
              },
              others,
              {
                'data-teamleader-ui': 'avatar',
              },
            ),
            React.createElement('img', {
              alt: imageAlt,
              src: image,
              className: cx(theme['image'], imageClassName),
            }),
            children &&
              React.createElement(
                'div',
                {
                  className: theme['children'],
                },
                children,
              ),
          );
        },
      },
    ]);

    return Avatar;
  })(PureComponent);

Avatar.defaultProps = {
  shape: 'circle',
  size: 'medium',
};
export default Avatar;
