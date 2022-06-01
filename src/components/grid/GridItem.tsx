import React, { ReactNode } from 'react';

type GridItemProps = Partial<{ children: ReactNode }>;

const GridItem = ({ children }: GridItemProps) => {
  return <div>{children}</div>;
};

export default GridItem;
