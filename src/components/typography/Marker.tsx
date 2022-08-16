import cx from 'classnames';
import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

export interface MarkerProps extends BoxProps {
  children?: ReactNode;
  className?: string;
}

const Marker: GenericComponent<MarkerProps> = ({ children, className, ...others }) => {
  const classNames = cx(theme['marker'], className);

  return (
    <Box {...others} className={classNames} element="mark" paddingHorizontal={1} marginHorizontal={-1}>
      {children}
    </Box>
  );
};

export default Marker;
