import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Banner } from '../../index';
import { COLORS } from '../../constants';

class Header extends PureComponent {
  render() {
    const { color, icon, onCloseClick, children, ...rest } = this.props;

    return (
      <Banner color={color} fullWidth icon={icon} onClose={onCloseClick} {...rest}>
        {children}
      </Banner>
    );
  }
}

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
