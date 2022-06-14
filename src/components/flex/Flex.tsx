import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import cx from 'classnames';
import theme from './theme.css';

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type FlexProps = Partial<{
  children: ReactNode;
  direction: 'row' | 'column';
  gap: Gap;
  // Ideally CSSProperties should be used as the type.
  // However because of the two-value sytnax of these properties the type includes (string & {}) which is not suitable for us.
  // The library can be fixed with template literal types.
  alignItems: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
}>;

const Flex = forwardRef(
  (
    { children, direction = 'row', gap = 0, alignItems, justifyContent }: FlexProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const classNames = cx(theme['flex'], theme[`${direction}`], {
      [theme[`gap-${gap}`]]: gap > 0,
    });

    const flexStyles = { alignItems, justifyContent };

    return (
      <div className={classNames} style={flexStyles} ref={ref}>
        {children}
      </div>
    );
  },
);

Flex.displayName = 'Flex';

export default Flex;
