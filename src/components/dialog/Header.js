import React from 'react';
import PropTypes from 'prop-types';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

import Section from '../section';
import IconButton from '../iconButton';
import Icon from '../icon';

import theme from './theme.css';

/** @type {any} */
const Header = ({ icon, onCloseClick, children, ...rest }) => {
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

Header.propTypes = {
  /** The content to display inside the dialog. */
  children: PropTypes.any,
  /** The icon in the banner. */
  icon: PropTypes.element,
  /** Callback function that is fired when the close icon clicked. */
  onCloseClick: PropTypes.func,
};

export default Header;
