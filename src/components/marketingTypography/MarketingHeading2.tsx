import React from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { GenericComponent } from '../../@types/types';
import { MarketingHeadingProps } from './MarketingHeading1';

const MarketingHeading2: GenericComponent<MarketingHeadingProps> = ({ children, className, ...others }) => {
  const classNames = cx(theme['heading-2'], className);

  return (
    <Box {...others} className={classNames} element="h2">
      {children}
    </Box>
  );
};

export default MarketingHeading2;
