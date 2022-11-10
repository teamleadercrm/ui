import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';

export type GridItemProps = Partial<{ children: ReactNode; area: string }>;

const GridItem: GenericComponent<GridItemProps> = ({ children, area }) => {
  const gridItemStyles = { gridArea: area };

  return <div style={gridItemStyles}>{children}</div>;
};

export default GridItem;
