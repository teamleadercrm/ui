import React, { ReactNode } from 'react';
import cx from 'classnames';
import theme from './theme.css';

interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'column';
}

const Flex = ({ children, direction = 'row', ...otherProps }: FlexProps) => {
  const classNames = cx(theme['flex'], theme[`${direction}`]);

  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

export default Flex;
