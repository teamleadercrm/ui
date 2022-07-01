import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import { Heading4 } from '../typography';
import theme from './theme.css';

interface MenuTitleProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
}

const MenuTitle: GenericComponent<MenuTitleProps> = ({ children, ...others }) => (
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
