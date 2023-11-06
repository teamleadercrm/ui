import React, { forwardRef } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { GenericComponent } from '../../@types/types';
import { MarketingHeadingProps } from './MarketingHeading1';

const MarketingHeading2: GenericComponent<MarketingHeadingProps> = forwardRef<
  HTMLHeadingElement,
  MarketingHeadingProps
>(({ children, className, ...others }, ref) => {
  const classNames = cx(theme['heading-2'], className);

  return (
    <Box data-teamleader-ui="marketing-heading-2" {...others} className={classNames} element="h2" ref={ref}>
      {children}
    </Box>
  );
});

MarketingHeading2.displayName = 'MarketingHeading2';

export default MarketingHeading2;
