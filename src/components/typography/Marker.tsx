import cx from 'classnames';
import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

export interface MarkerProps extends BoxProps {
  children?: ReactNode;
  className?: string;
}

const Marker: GenericComponent<MarkerProps> = forwardRef<HTMLElement, MarkerProps>(
  ({ children, className, ...others }, ref) => {
    const classNames = cx(theme['marker'], className);

    return (
      <Box
        data-teamleader-ui="marker"
        {...others}
        className={classNames}
        element="mark"
        paddingHorizontal={1}
        marginHorizontal={-1}
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

Marker.displayName = 'Marker';

export default Marker;
