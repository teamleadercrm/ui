import React, { ReactNode, forwardRef } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';

export interface MarketingHeadingProps extends Omit<BoxProps, 'ref'> {
  children?: ReactNode | string;
  className?: string;
}

const MarketingHeading1: GenericComponent<MarketingHeadingProps> = forwardRef<
  HTMLHeadingElement,
  MarketingHeadingProps
>(({ children, className, ...others }, ref) => {
  const classNames = cx(theme['heading-1'], className);

  return (
    <Box data-teamleader-ui="marketing-heading-1" {...others} className={classNames} element="h1" ref={ref}>
      {children}
    </Box>
  );
});

MarketingHeading1.displayName = 'MarketingHeading1';

export default MarketingHeading1;
