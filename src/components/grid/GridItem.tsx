import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';

export type GridItemProps = Partial<{ children: ReactNode; area: string }>;

const GridItem: GenericComponent<GridItemProps> = forwardRef<HTMLDivElement, GridItemProps>(({ children, area }) => {
  const gridItemStyles = { gridArea: area };

  return <div style={gridItemStyles}>{children}</div>;
});

GridItem.displayName = 'Grid';

export default GridItem;
