import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Bullet extends PureComponent {
  render() {
    const { className, color, size, borderColor, borderTint, ...others } = this.props;
    const classNames = cx(
      theme['bullet'],
      theme[color],
      theme[size],
      {
        [theme[`border-${borderColor}-${borderTint}`]]: borderColor && borderTint,
        [theme[`border-${borderColor}`]]: borderColor && !borderTint,
      },
      className,
    );

    return <Box data-teamleader-ui="bullet" className={classNames} element="span" {...others} />;
  }
}

Bullet.propTypes = {
  /** A border color to give to the counter */
  borderColor: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** A border tint to give to the counter */
  borderTint: PropTypes.oneOf(['darkest', 'dark', 'light', 'lightest']),
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The color of the bullet. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** The size of the bullet. */
  size: PropTypes.oneOf(['small', 'medium']),
};

Bullet.defaultProps = {
  color: 'neutral',
  size: 'medium',
};

export default Bullet;
