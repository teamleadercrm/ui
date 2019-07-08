import React from 'react';
import theme from './theme.css';

var MenuDivider = function MenuDivider() {
  return React.createElement('hr', {
    'data-teamleader-ui': 'menu-divider',
    className: theme['divider'],
  });
};

export default MenuDivider;
