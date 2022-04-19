import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Container from '../container';
import { Heading1 } from '../typography';

/** @type {React.ComponentType<any>} */
class OverviewPageHeader extends PureComponent {
  render() {
    const { children, title, ...others } = this.props;

    return (
      <Container {...others} display="flex" marginBottom={5} paddingTop={7} justifyContent="space-between">
        <Heading1 color="teal">{title}</Heading1>
        {children && <Box>{children}</Box>}
      </Container>
    );
  }
}

OverviewPageHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
};

export default OverviewPageHeader;
