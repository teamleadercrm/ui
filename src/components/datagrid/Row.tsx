import React, { forwardRef, ReactNode } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';

export interface RowProps extends Omit<BoxProps, 'ref'> {
  /** The background color the row should have. */
  backgroundColor?: 'white' | 'neutral';
  /** A class name for the row to give custom styles. */
  className?: string;
  /** The cells to display inside the row. */
  children: ReactNode;
}

const Row = forwardRef<HTMLElement, RowProps>(({ backgroundColor = 'white', className, children, ...others }, ref) => {
  const classNames = cx(theme['row'], theme[`has-background-${backgroundColor}`], className);

  return (
    <Box className={classNames} ref={ref} {...others}>
      {children}
    </Box>
  );
});

Row.displayName = 'Row';

export default Row;
