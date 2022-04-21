import React, { forwardRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Row extends PureComponent {
  render() {
    const { backgroundColor, className, children, forwardedRef, ...others } = this.props;

    const classNames = cx(theme['row'], theme[`has-background-${backgroundColor}`], className);

    return (
      <Box className={classNames} ref={forwardedRef} {...others}>
        {children}
      </Box>
    );
  }
}

Row.propTypes = {
  backgroundColor: PropTypes.oneOf(['white', 'neutral']),
  className: PropTypes.string,
  children: PropTypes.any,
};

Row.defaultProps = {
  backgroundColor: 'white',
};

/** @type {any} */
const ForwardedRow = forwardRef((props, ref) => <Row {...props} forwardedRef={ref} />);

ForwardedRow.displayName = 'Row';

export default ForwardedRow;
