import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Heading5 } from '../typography';

class Label extends PureComponent {
  render() {
    const { children, inline, ...others } = this.props;

    return (
      <Heading5
        color="teal"
        flex={inline ? '0 0 40%' : 1}
        marginBottom={inline ? 0 : 1}
        marginRight={inline ? 2 : 0}
        maxLines={2}
        paddingVertical={1}
        {...others}
      >
        {children}
      </Heading5>
    );
  }
}

Label.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
};

export default Label;
