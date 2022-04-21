import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from '../container';

/** @type {React.ComponentType<any>} */
class OverviewPageBody extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return (
      <Container paddingBottom={8} {...others}>
        {children}
      </Container>
    );
  }
}

OverviewPageBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OverviewPageBody;
