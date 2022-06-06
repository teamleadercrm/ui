import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import cx from 'classnames';

import theme from './theme.css';

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type GridProps = Partial<{
  children: ReactNode;
  areas: string[];
  rows: string[];
  columns: string[];
  gap: Gap;
  ref: ForwardedRef<HTMLDivElement>;
}>;

const Grid = forwardRef(({ children, areas, rows, columns, gap = 0, ref }: GridProps) => {
  const classNames = cx(theme['grid'], {
    [theme[`gap-${gap}`]]: gap > 0,
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
});

Grid.displayName = 'Grid';

export default Grid;
