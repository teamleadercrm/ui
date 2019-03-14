import React from 'react';
import Box from '../box';
import { Heading4 } from '../typography';
import theme from './theme.css';

const MenuTitle = ({ children, ...others }) => (
  <Box
    {...others}
    alignItems="center"
    className={theme['title']}
    data-teamleader-ui="menu-title"
    display="flex"
    paddingHorizontal={3}
  >
    <Heading4 color="teal">{children}</Heading4>
  </Box>
);

export default MenuTitle;
