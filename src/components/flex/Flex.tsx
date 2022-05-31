import React, { ReactNode } from 'react';
import cx from 'classnames';
import theme from './theme.css';

interface FlexProps {
  children: ReactNode;
}

const Flex = ({ children, ...otherProps }: FlexProps) => {
  const classNames = cx(theme['flex']);

  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

export default Flex;
