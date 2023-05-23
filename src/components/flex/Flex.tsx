import cx from 'classnames';
import React, { forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { Box, BoxProps } from '../box';
import theme from './theme.css';

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface FlexProps extends Omit<BoxProps, 'ref' | 'flexDirection'> {
  children?: React.ReactNode;
  gap?: Gap;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** A class name for the flex element to give custom styles. */
  className?: string;
}

const Flex: GenericComponent<FlexProps> = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, direction = 'row', gap = 0, className, ...rest }, ref) => {
    const classNames = cx(
      {
        [theme[`gap-${gap}`]]: gap > 0,
      },
      className,
    );

    return (
      <Box display="flex" boxSizing="border-box" flexDirection={direction} className={classNames} ref={ref} {...rest}>
        {children}
      </Box>
    );
  },
);

Flex.displayName = 'Flex';

export default Flex;
