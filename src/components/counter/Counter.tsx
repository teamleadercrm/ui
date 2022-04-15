import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import Monospaced from '../typography/Monospaced';

class Counter extends PureComponent {
  render() {
    const { children, className, color, count, maxCount, size, borderColor, borderTint, ...others } = this.props;

    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['counter'],
      theme[color],
      theme[size],
      {
        [theme[`border-${borderColor}-${borderTint}`]]: borderColor && borderTint,
        [theme[`border-${borderColor}`]]: borderColor && !borderTint,
      },
      className,
    );

    return (
      <Box className={classNames} element="span" {...others} data-teamleader-ui="counter">
        <Monospaced>{count > maxCount ? `${maxCount}+` : count}</Monospaced> {children}
      </Box>
    );
  }
}

Counter.propTypes = {
  /** A border color to give to the counter */
  borderColor: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** A border tint to give to the counter */
  borderTint: PropTypes.oneOf(['darkest', 'dark', 'light', 'lightest']),
  /** The content to display inside the Counter */
  children: PropTypes.any,
  /** A class name for the counter to give custom styles */
  className: PropTypes.string,
  /** The color theme you want to style the counter in */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** The value of the counter. */
  count: PropTypes.number.isRequired,
  /** The max value of the counter. */
  maxCount: PropTypes.number,
  /** The size of the counter */
  size: PropTypes.oneOf(['small', 'medium']),
};

Counter.defaultProps = {
  color: 'neutral',
  size: 'medium',
};

export default Counter;
