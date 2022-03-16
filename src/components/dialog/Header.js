import React from 'react';
import PropTypes from 'prop-types';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

import { COLORS } from '../../constants';
import Section from '../section';
import IconButton from '../iconButton';

const Header = ({ color, icon, onCloseClick, children, ...rest }) => {
  return (
    <Section display="flex" alignItems="center" color={color} {...rest}>
      {icon}
      {children}
      {onCloseClick && <IconButton icon={<IconCloseMediumOutline />} onClick={onCloseClick} />}
    </Section>
  );
};

Header.propTypes = {
  /** The content to display inside the dialog. */
  children: PropTypes.any,
  /** The color of the banner */
  color: PropTypes.oneOf(COLORS),
  /** The icon in the banner. */
  icon: PropTypes.element,
  /** Callback function that is fired when the close icon clicked. */
  onCloseClick: PropTypes.func,
};

export default Header;
