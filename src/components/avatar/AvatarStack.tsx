import React, { cloneElement } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import AvatarStackOverflow from './AvatarStackOverflow';
import { Direction } from './types';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';

const OVERLAP_SPACINGS = {
  tiny: -6,
  small: -6,
  medium: -18,
  large: -24,
  hero: -48,
};

const SPACING = 6;

interface AvatarStackProps extends Omit<BoxProps, 'size' | 'ref'> {
  /** The avatars to display in a stack. */
  children: React.ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The direction in which the avatars will be rendered. */
  direction?: Direction;
  /** The maximum amount of avatars to render. */
  displayMax?: number;
  /** If true, component will be rendered in inverse mode. */
  inverse?: boolean;
  /** Function to get the names overflow label that is displayed in the tooltip when it overflows. It get's the overflow amount as a parameter. */
  getNamesOverflowLabel?: (overflowAmount: number) => string;
  /** Callback function that is fired when the overflow circle is clicked. */
  onOverflowClick?: () => void;
  /** If true, avatars will not be overlapping each other and will become interactive. */
  selectable?: boolean;
  /** The size of the avatar stack. */
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest'>;
  /** If true, the names will be shown in a tooltip on hover. */
  tooltip?: boolean;
}

const AvatarStack: GenericComponent<AvatarStackProps> = ({
  children,
  className,
  direction = 'horizontal',
  displayMax = 99,
  inverse = false,
  onOverflowClick,
  selectable = false,
  size = 'medium',
  getNamesOverflowLabel,
  tooltip = false,
  ...others
}) => {
  const childrenArray = React.Children.toArray(children);
  const childrenToDisplay = childrenArray.length > displayMax ? childrenArray.slice(0, displayMax) : childrenArray;
  const overflowAmount = childrenArray.length - displayMax;
  const hasOverflow = overflowAmount > 0;

  const classNames = cx(
    theme[direction],
    theme[`is-${size}`],
    inverse ? [theme['light']] : [theme['dark']],
    {
      [theme['has-overflow']]: hasOverflow,
      [theme['has-overlapping-avatars']]: !selectable,
    },
    className,
  );

  const spacingStyles = {
    ...(direction === 'horizontal' && { marginRight: selectable ? SPACING : OVERLAP_SPACINGS[size] }),
    ...(direction === 'vertical' && { marginBottom: selectable ? SPACING : OVERLAP_SPACINGS[size] }),
  };

  const wrapperPaddingStyles = {
    ...(direction === 'horizontal' && { paddingRight: Math.abs(OVERLAP_SPACINGS[size]) }),
    ...(direction === 'vertical' && { paddingBottom: Math.abs(OVERLAP_SPACINGS[size]) }),
  };

  return (
    <Box
      {...others}
      data-teamleader-ui="avatar-stack"
      className={classNames}
      alignItems="center"
      display="flex"
      flexDirection={direction === 'horizontal' ? 'row' : 'column'}
      style={!selectable && !hasOverflow ? wrapperPaddingStyles : undefined}
    >
      {React.Children.map(childrenToDisplay, (child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        return cloneElement(child, {
          key: index,
          ...child.props,
          selectable,
          size,
          tooltip,
          style: {
            ...spacingStyles,
            zIndex: childrenArray.length - index,
            ...child.props.style,
          },
        });
      })}
      {hasOverflow && (
        <AvatarStackOverflow
          displayMax={displayMax}
          overflowAmount={overflowAmount}
          onOverflowClick={onOverflowClick}
          overflowChildren={childrenArray.slice(displayMax)}
          getNamesOverflowLabel={getNamesOverflowLabel}
          tooltip={tooltip}
        />
      )}
    </Box>
  );
};

export default AvatarStack;
