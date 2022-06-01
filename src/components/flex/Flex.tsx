import React, { ReactNode } from 'react';
import cx from 'classnames';
import theme from './theme.css';

const gaps = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
export type Gap = typeof gaps[number];

type FlexProps = Partial<{
  children: ReactNode;
  direction: 'row' | 'column';
  gap: Gap;
  alignItems: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
}>;

const Flex = ({ children, direction = 'row', gap = 0, alignItems, justifyContent }: FlexProps) => {
  const classNames = cx(theme['flex'], theme[`${direction}`], {
    [theme[`gap-${gap}`]]: gap > 0,
    [theme[`align-items-${alignItems}`]]: alignItems,
    [theme[`justify-content-${justifyContent}`]]: justifyContent,
  });

  return <div className={classNames}>{children}</div>;
};

Flex.displayName = 'Flex';

export default Flex;
