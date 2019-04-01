import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import theme from './theme.css';
import cx from 'classnames';

class Footer extends PureComponent {
  render() {
    const { children, className, ...others } = this.props;

    return (
      <Box padding={4} className={cx(theme['widget-footer'], className)} {...others}>
        {children}
      </Box>
    );
  }
}

Footer.propTypes = {
  /** The content to display inside the widget footer. */
  children: PropTypes.any,
  /** The class passed to our widget footer. */
  className: PropTypes.string,
};

export default Footer;
