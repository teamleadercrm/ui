import React, { ReactNode, forwardRef } from 'react';
import OverviewPageBody, { OverviewPageBodyProps } from './OverviewPageBody';
import OverviewPageHeader, { OverviewPageHeaderProps } from './OverviewPageHeader';
import Box from '../box';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface OverviewPageProps extends Omit<BoxProps, 'children' | 'ref'> {
  children: ReactNode;
}

interface OverviewPageComponent extends GenericComponent<OverviewPageProps> {
  Body: GenericComponent<OverviewPageBodyProps>;
  Header: GenericComponent<OverviewPageHeaderProps>;
}

const OverviewPage: GenericComponent<OverviewPageProps> = forwardRef<HTMLElement, OverviewPageProps>(
  ({ children, ...others }, ref) => {
    return (
      <Box data-teamleader-ui="overview-page" {...others} ref={ref}>
        {children}
      </Box>
    );
  },
);

OverviewPage.displayName = 'OverviewPage';

// It has to be written like this, since `forwardRef` return component without sub-components and that doesn't match with our typing
const OverviewPageWithSubComponents = OverviewPage as OverviewPageComponent;

OverviewPageWithSubComponents.Body = OverviewPageBody;
OverviewPageWithSubComponents.Header = OverviewPageHeader;

export default OverviewPageWithSubComponents;
