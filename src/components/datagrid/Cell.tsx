import React, { MouseEventHandler, ReactNode, forwardRef } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface CellProps extends Omit<BoxProps, 'backgroundColor'> {
  /** The horizontal alignment of the text inside the cell. */
  align?: 'left' | 'center' | 'right';
  /** The background color the cell should have. */
  backgroundColor?: 'white' | 'neutral';
  /** The border style the cell should have. */
  border?: 'around' | 'left' | 'right';
  /** The content to display inside the cell. */
  children?: ReactNode;
  /** A class name for the cell to give custom styles. */
  className?: string;
  /** The width proportion of the cell against the others. */
  flex?: 'checkbox-width' | 'min-width' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** If true, an ellipsis will be shown when the cell content is too long. */
  preventOverflow?: boolean;
  /** If true, the text inside the cell will be bold */
  soft?: boolean;
  /** If true, the color of the text inside the cell will be neutral darkest */
  strong?: boolean;
  /** Callback function that is fired when clicking on the cell. */
  onClick?: MouseEventHandler<HTMLElement>;
}

const Cell: GenericComponent<CellProps> = forwardRef<HTMLElement, CellProps>(
  (
    {
      align = 'left',
      backgroundColor,
      border,
      children,
      className,
      flex = 1,
      preventOverflow = true,
      soft = false,
      strong = false,
      ...others
    },
    ref,
  ) => {
    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['cell'],
      theme[`align-${align}`],
      theme[`flex-${flex}`],
      theme[`has-background-${backgroundColor}`],
      theme[`has-border-${border}`],
      {
        [theme['is-soft']]: soft,
        [theme['is-strong']]: strong,
      },
      className,
    );

    return (
      <Box className={classNames} data-teamleader-ui="datagrid-cell" boxSizing="content-box" {...others} ref={ref}>
        {preventOverflow ? <div className={theme['has-overflow-prevention']}>{children}</div> : children}
      </Box>
    );
  },
);
Cell.displayName = 'DataGrid.Cell';

export default Cell;
