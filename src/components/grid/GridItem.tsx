import React, { ReactNode } from 'react';

type GridItemProps = Partial<{ children: ReactNode; area: string }>;

const GridItem = ({ children, area }: GridItemProps) => {
  const gridItemStyles = { gridArea: area };

  return <div style={gridItemStyles}>{children}</div>;
};

export default GridItem;
