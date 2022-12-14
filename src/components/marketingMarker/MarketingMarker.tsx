import React, { ReactNode } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';

export interface MarketingMarkerProps extends Omit<BoxProps, 'ref'> {
  children?: ReactNode | string;
  className?: string;
}

const MarketingMarker: GenericComponent<MarketingMarkerProps> = ({ children, className, ...others }) => {
  const classNames = cx(theme['marker'], className);

  return (
    <Box
      data-teamleader-ui="marketing-marker"
      {...others}
      className={classNames}
      element="mark"
      paddingHorizontal={1}
      marginHorizontal={-1}
    >
      {children}
    </Box>
  );
};

export default MarketingMarker;
