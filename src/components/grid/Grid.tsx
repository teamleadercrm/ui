import React, { ReactNode } from 'react';
import cx from 'classnames';

import theme from './theme.css';

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type GridProps = Partial<{ children: ReactNode; areas: string[]; rows: string[]; columns: string[]; gap: Gap }>;

const Grid = ({ children, areas, rows, columns, gap = 0 }: GridProps) => {
  const classNames = cx(theme['grid'], {
    [theme[`gap-${gap}`]]: gap > 0,
  });

  const gridStyles = {
    gridTemplateAreas: areas?.map((area) => `"${area}"`).join(' '),
    gridTemplateRows: rows?.join(' '),
    gridTemplateColumns: columns?.join(' '),
  };

  return (
    <div className={classNames} style={gridStyles}>
      {children}
    </div>
  );
};

export default Grid;
