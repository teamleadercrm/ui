import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from '../container';

class DetailPageBody extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return (
      <Container {...others} fixed paddingTop={6} paddingBottom={8}>
        {children}
      </Container>
    );
  }
}

DetailPageBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailPageBody;
