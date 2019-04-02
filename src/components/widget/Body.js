import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';

class Body extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return (
      <Island padding={4} {...others}>
        {children}
      </Island>
    );
  }
}

Body.propTypes = {
  /** The content to display inside the widget body. */
  children: PropTypes.any,
};

export default Body;
