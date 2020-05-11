import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

class Value extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return (
      <Box display="flex" flex={1} overflow="hidden" paddingVertical={1} {...others}>
        {children}
      </Box>
    );
  }
}

Value.propTypes = {
  children: PropTypes.node,
};

export default Value;
