import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import theme from './theme.css';
import cx from 'classnames';

class WidgetFooter extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return (
      <Box padding={4} className={cx(theme['widget-footer'])} {...others}>
        {children}
      </Box>
    );
  }
}

WidgetFooter.propTypes = {
  /** The content to display inside the widget footer. */
  children: PropTypes.any,
};

export default WidgetFooter;
