import React, { ReactNode } from 'react';
import cx from 'classnames';

import theme from './theme.css';

export type GridProps = Partial<{ children: ReactNode; areas: string[]; rows: string[] }>;

const Grid = ({ children, areas, rows }: GridProps) => {
  const classNames = cx(theme['grid']);

  const gridStyles = {
    gridTemplateAreas: areas?.map((area) => `"${area}"`).join(' '),
    gridTemplateRows: rows?.join(' '),
  };

  return (
    <div className={classNames} style={gridStyles}>
      {children}
    </div>
  );
};

export default Grid;
