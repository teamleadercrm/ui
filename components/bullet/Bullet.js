import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Bullet extends PureComponent {
  static propTypes = {
    /** A class name for the wrapper to give custom styles. */
    className: PropTypes.string,
    /** The color of the bullet. */
    color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
    /** The size of the bullet. */
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    color: 'neutral',
    size: 'medium',
  };

  render() {
    const { className, color, size, ...others } = this.props;
    const classNames = cx(theme['bullet'], theme[color], theme[size], className);

    return <Box data-teamleader-ui="bullet" className={classNames} element="span" {...others} />;
  }
}

export default Bullet;
