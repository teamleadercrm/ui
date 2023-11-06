import React, { ReactNode, forwardRef } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface ContainerProps extends Omit<BoxProps, 'ref'> {
  children: ReactNode;
  className?: string;
  fixed?: boolean;
}

const Container: GenericComponent<ContainerProps> = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className, fixed, ...others }, ref) => {
    const classNames = cx(
      theme['container'],
      {
        [theme['is-fixed']]: fixed,
      },
      className,
    );

    return (
      <Box data-teamleader-ui="container" {...others} boxSizing="content-box" className={classNames} ref={ref}>
        {children}
      </Box>
    );
  },
);

Container.displayName = 'Container';

export default Container;
