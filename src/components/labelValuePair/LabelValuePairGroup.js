import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { Heading4 } from '../typography';

/** @type {React.ComponentType<any>} */
class LabelValuePairGroup extends PureComponent {
  render() {
    const { children, title, ...others } = this.props;

    return (
      <Box {...others}>
        <Heading4 color="neutral" marginBottom={2}>
          {title}
        </Heading4>
        {children}
      </Box>
    );
  }
}

LabelValuePairGroup.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default LabelValuePairGroup;
