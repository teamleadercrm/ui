import React, { ReactNode, forwardRef } from 'react';
import OverviewPageBody, { OverviewPageBodyProps } from './OverviewPageBody';
import OverviewPageHeader, { OverviewPageHeaderProps } from './OverviewPageHeader';
import Box from '../box';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface OverviewPageProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
}

interface OverviewPageComponent extends GenericComponent<OverviewPageProps> {
  Body: GenericComponent<OverviewPageBodyProps>;
  Header: GenericComponent<OverviewPageHeaderProps>;
}

const OverviewPage: OverviewPageComponent = forwardRef<HTMLElement, OverviewPageProps>(
  ({ children, ...others }, ref) => {
    return (
      <Box data-teamleader-ui="overview-page" {...others} ref={ref}>
        {children}
      </Box>
    );
  },
);

OverviewPage.displayName = 'OverviewPage';
OverviewPage.Body = OverviewPageBody;
OverviewPage.Header = OverviewPageHeader;

export default OverviewPage;
