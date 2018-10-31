import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class AvatarStack extends PureComponent {
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

AvatarStack.propTypes = {
  /** The avatars to display in a stack. */
  children: PropTypes.node,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The direction in which the avatars will be rendered. */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  /** The maximum amount of avatars to render. */
  displayMax: PropTypes.number,
  /** If true, component will be rendered in inverse mode. */
  inverse: PropTypes.bool,
  /** Callback function that is fired when the overflow circle is clicked. */
  onOverflowClick: PropTypes.func,
  /** The size of the avatar stack. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),
};

AvatarStack.defaultProps = {
  direction: 'horizontal',
  displayMax: 0,
  inverse: false,
  size: 'medium',
};

export default AvatarStack;
