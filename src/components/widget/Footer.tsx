import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';

class Footer extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return <Island {...others}>{children}</Island>;
  }
}

Footer.propTypes = {
  /** The content to display inside the widget footer. */
  children: PropTypes.any,
};

export default Footer;
