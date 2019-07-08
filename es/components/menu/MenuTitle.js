import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { Heading4 } from '../typography';
import theme from './theme.css';

var MenuTitle = function MenuTitle(_ref) {
  var children = _ref.children,
    others = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    Box,
    _extends({}, others, {
      alignItems: 'center',
      className: theme['title'],
      'data-teamleader-ui': 'menu-title',
      display: 'flex',
      paddingHorizontal: 3,
    }),
    React.createElement(
      Heading4,
      {
        color: 'teal',
      },
      children,
    ),
  );
};

export default MenuTitle;
