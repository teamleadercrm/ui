import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class Heading2 extends PureComponent {
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
      theme['heading-2'],
      theme[color],
      {
        [theme['soft']]: isSoft,
      },
      className,
    );

    const Element = element || 'h2';

    const rest = omit(others, ['soft']);

    return (
      <Box className={classNames} data-teamleader-ui="heading-2" element={Element} {...rest}>
        {children}
      </Box>
    );
  }
}

Heading2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua']),
  element: PropTypes.node,
  soft: PropTypes.bool,
};

Heading2.defaultProps = {
  element: null,
  soft: false,
};

export default Heading2;
