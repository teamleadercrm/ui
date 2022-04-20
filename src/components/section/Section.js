import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

const SIZES = {
  small: 3,
  medium: 4,
  large: 5,
};

/** @type {React.ComponentType<any>} */
class Section extends PureComponent {
  render() {
    const { children, className, color, size, ...rest } = this.props;

    const classNames = cx(theme['section'], className, theme[color]);

    return (
      <Box data-teamleader-ui="section" className={classNames} element="section" padding={SIZES[size]} {...rest}>
        {children}
      </Box>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

Section.defaultProps = {
  color: 'white',
  size: 'medium',
};

export default Section;
