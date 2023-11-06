import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import Container from '../container';

export interface OverviewPageBodyProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
}

const OverviewPageBody: GenericComponent<OverviewPageBodyProps> = forwardRef<HTMLElement, OverviewPageBodyProps>(
  ({ children, ...others }, ref) => {
    return (
      <Container data-teamleader-ui="overview-page-body" paddingBottom={8} {...others} ref={ref}>
        {children}
      </Container>
    );
  },
);

OverviewPageBody.displayName = 'OverviewPage.Body';

export default OverviewPageBody;
