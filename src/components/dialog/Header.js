import React from 'react';
import PropTypes from 'prop-types';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

import Section from '../section';
import IconButton from '../iconButton';
import Icon from '../icon';

import theme from './theme.css';

const Header = ({ color, icon, onCloseClick, children, ...rest }) => {
  return (
    <Section display="flex" alignItems="center" color={color} {...rest}>
      <Icon color="teal" tint="darkest" marginRight={3}>
        {icon}
      </Icon>
      {children}
      {onCloseClick && (
        <IconButton
          icon={<IconCloseMediumOutline />}
          onClick={onCloseClick}
          marginLeft={4}
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
  /** The color of the banner */
  color: PropTypes.oneOf(['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
  /** The icon in the banner. */
  icon: PropTypes.element,
  /** Callback function that is fired when the close icon clicked. */
  onCloseClick: PropTypes.func,
};

export default Header;
