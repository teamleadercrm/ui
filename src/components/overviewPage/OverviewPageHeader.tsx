import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import Container from '../container';
import { Heading1 } from '../typography';

export interface OverviewPageHeaderProps extends Omit<BoxProps, 'children'> {
  children?: ReactNode;
  title: ReactNode;
}

const OverviewPageHeader: GenericComponent<OverviewPageHeaderProps> = forwardRef<HTMLElement, OverviewPageHeaderProps>(
  ({ children, title, ...others }, ref) => {
    return (
      <Container
        data-teamleader-ui="overview-page-header"
        {...others}
        display="flex"
        marginBottom={5}
        paddingTop={7}
        justifyContent="space-between"
        ref={ref}
      >
        <Heading1 color="teal">{title}</Heading1>
        {children && <Box>{children}</Box>}
      </Container>
    );
  },
);

OverviewPageHeader.displayName = 'OverviewPage.Header';

export default OverviewPageHeader;
