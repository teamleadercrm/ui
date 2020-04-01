import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';

class Page extends PureComponent {
  render() {
    const { children, color, ...others } = this.props;

    return (
      <Box
        flex={1}
        paddingBottom={8}
        {...others}
        backgroundColor="neutral"
        backgroundTint={color === 'white' ? 'lightest' : 'light'}
      >
        {children}
      </Box>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
  /** The background color for our page */
  color: PropTypes.oneOf(['neutral', 'white']),
};

Page.defaultProps = {
  color: 'white',
};

export default Page;
