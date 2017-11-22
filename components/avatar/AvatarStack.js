import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class AvatarStack extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    displayMax: PropTypes.number,
    inverse: PropTypes.bool,
    onOverflowClick: PropTypes.func,
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  };

  static defaultProps = {
    direction: 'horizontal',
    displayMax: 0,
    inverse: false,
    size: 'medium',
  };

  render() {
    const { children, className, direction, displayMax, inverse, onOverflowClick, size, ...others } = this.props;

    const classNames = cx(
      theme['stack'],
      theme[direction],
      theme[size],
      inverse ? [theme['light']] : [theme['dark']],
      className,
    );

    const childrenToDisplay = displayMax > 0 ? children.slice(0, displayMax) : children;
    const overflowAmount = children.length - displayMax;

    return (
      <Box data-teamleader-ui="avatar-stack" className={classNames} {...others}>
        {overflowAmount !== children.length && (
          <div className={theme['overflow']} onClick={onOverflowClick}>{`+${overflowAmount}`}</div>
        )}
        {childrenToDisplay}
      </Box>
    );
  }
}

export default AvatarStack;
