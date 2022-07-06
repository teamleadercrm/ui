import cx from 'classnames';
import React, { ForwardedRef, forwardRef, ReactNode } from 'react';

import { GenericComponent } from '../../@types/types';
import theme from './theme.css';

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type GridProps = Partial<{
  children: ReactNode;
  areas: string[];
  rows: string[];
  columns: string[];
  gap: Gap;
  columnGap: Gap;
  rowGap: Gap;
  ref: ForwardedRef<HTMLDivElement>;
}>;

const Grid: GenericComponent<GridProps> = forwardRef<HTMLDivElement, GridProps>(
  ({ children, areas, rows, columns, gap = 0, columnGap = 0, rowGap = 0 }, ref) => {
    const classNames = cx(theme['grid'], {
      [theme[`gap-${gap}`]]: gap > 0,
      [theme[`column-gap-${columnGap}`]]: columnGap > 0,
      [theme[`row-gap-${rowGap}`]]: rowGap > 0,
    });

    const gridStyles = {
      gridTemplateAreas: areas?.map((area) => `"${area}"`).join(' '),
      gridTemplateRows: rows?.join(' '),
      gridTemplateColumns: columns?.join(' '),
    };

    return (
      <div className={classNames} style={gridStyles} ref={ref}>
        {children}
      </div>
    );
  },
);

Grid.displayName = 'Grid';

export default Grid;
