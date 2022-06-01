import React, { ReactNode } from 'react';
import cx from 'classnames';

import theme from './theme.css';

export type GridProps = Partial<{ children: ReactNode }>;

const Grid = ({ children }: GridProps) => {
  const classNames = cx(theme['grid']);

  return <div className={classNames}>{children}</div>;
};

export default Grid;
