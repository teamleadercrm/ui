import React, { ReactNode } from 'react';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

import IconButton from '../iconButton';
import Icon from '../icon';

import theme from './theme.css';
import { GenericComponent } from '../../@types/types';
import Box from '../box';

export interface HeaderProps {
  /** The content to display inside the dialog. */
  children?: ReactNode;
  /** The icon in the banner. */
  icon?: ReactNode;
  /** Callback function that is fired when the close icon clicked. */
  onCloseClick?: () => void;
}

const Header: GenericComponent<HeaderProps> = ({ icon, onCloseClick, children, ...rest }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      padding={4}
      backgroundColor="neutral"
      backgroundTint="light"
      borderBottomWidth={1}
      borderTint="normal"
      {...rest}
    >
      {icon && (
        <Icon color="teal" tint="darkest" marginRight={3}>
          {icon}
        </Icon>
      )}
      {children}
      {onCloseClick && (
        <IconButton
          icon={<IconCloseMediumOutline />}
          onClick={onCloseClick}
          marginVertical={-1}
          className={theme['close-icon']}
        />
      )}
    </Box>
  );
};

Header.displayName = 'Header';

export default Header;
