import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Bullet extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    color: 'neutral',
    size: 'medium',
  };

  render() {
    const { className, color, size, ...others } = this.props;
    const classNames = cx(theme['bullet'], theme[color], theme[size], className);

    return (
      <Box data-teamleader-ui="bullet" className={classNames} {...others}/>
    );
  }
}

export default Bullet;
