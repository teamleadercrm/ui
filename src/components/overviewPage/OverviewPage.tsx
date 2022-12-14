import React, { ReactNode } from 'react';
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

const OverviewPage: OverviewPageComponent = ({ children, ...others }) => {
  return (
    <Box data-teamleader-ui="overview-page" {...others}>
      {children}
    </Box>
  );
};

OverviewPage.Body = OverviewPageBody;
OverviewPage.Body.displayName = 'OverviewPage.Body';
OverviewPage.Header = OverviewPageHeader;
OverviewPage.Header.displayName = 'OverviewPage.Header';

export default OverviewPage;
