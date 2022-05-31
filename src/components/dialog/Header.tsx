import React, { ReactNode } from 'react';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

import Section from '../section';
import IconButton from '../iconButton';
import Icon from '../icon';

import theme from './theme.css';

export interface HeaderProps {
  /** The content to display inside the dialog. */
  children?: ReactNode;
  /** The icon in the banner. */
  icon?: ReactNode;
  /** Callback function that is fired when the close icon clicked. */
  onCloseClick?: () => void;
}

const Header = ({ icon, onCloseClick, children, ...rest }: HeaderProps) => {
  return (
    <Section display="flex" alignItems="center" color="neutral" {...rest}>
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
    </Section>
  );
};

Header.displayName = 'Header';

export default Header;