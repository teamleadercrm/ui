import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';

class Header extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return <Island {...others}>{children}</Island>;
  }
}

Header.propTypes = {
  /** The content to display inside the widget header. */
  children: PropTypes.any,
};

export default Header;
