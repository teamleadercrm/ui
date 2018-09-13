import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class Heading1 extends PureComponent {
  isSoft(color) {
    if (color !== 'white' && color !== 'teal') {
      return false;
    }

    return this.props.soft;
  }

  render() {
    const { children, className, color, element, ...others } = this.props;

    const isSoft = this.isSoft(color);

    const classNames = cx(
      theme['heading'],
      theme['heading-1'],
      theme[color],
      {
        [theme['soft']]: isSoft,
      },
      className,
    );

    const Element = element || 'h1';

    const rest = omit(others, ['soft']);

    return (
      <Box className={classNames} data-teamleader-ui="heading-1" element={Element} {...rest}>
        {children}
      </Box>
    );
  }
}

Heading1.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua']),
  element: PropTypes.node,
  soft: PropTypes.bool,
};

Heading1.defaultProps = {
  element: null,
  soft: false,
};

export default Heading1;
