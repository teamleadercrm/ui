import React, { cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

class AvatarStack extends PureComponent {
  render() {
    const { children, className, direction, displayMax, inverse, onOverflowClick, size, ...others } = this.props;

    const childrenToDisplay = displayMax > 0 ? children.slice(0, displayMax) : children;
    const overflowAmount = children.length - displayMax;
    const hasOverflow = overflowAmount > 0;

    const classNames = cx(
      theme[direction],
      theme[`is-${size}`],
      inverse ? [theme['light']] : [theme['dark']],
      {
        [theme['has-overflow']]: hasOverflow,
      },
      className,
    );
    return (
      <Box data-teamleader-ui="avatar-stack" className={classNames} {...others} alignItems="center" display="flex">
        {childrenToDisplay.map((child, index) => cloneElement(child, { key: index, ...child.props, size }))}
        {hasOverflow && (
          <Box
            alignItems="center"
            className={cx(uiUtilities['reset-font-smoothing'], theme['overflow'])}
            display="flex"
            justifyContent="center"
            onClick={onOverflowClick}
          >
            {`+${overflowAmount}`}
          </Box>
        )}
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
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

AvatarStack.defaultProps = {
  direction: 'horizontal',
  displayMax: 0,
  inverse: false,
  size: 'medium',
};

export default AvatarStack;
