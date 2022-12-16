import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import Container from '../container';
import { Heading1 } from '../typography';

export interface OverviewPageHeaderProps extends Omit<BoxProps, 'children'> {
  children?: ReactNode;
  title: ReactNode;
}

const OverviewPageHeader: GenericComponent<OverviewPageHeaderProps> = ({ children, title, ...others }) => {
  return (
    <Container
      data-teamleader-ui="overview-page-header"
      {...others}
      display="flex"
      marginBottom={5}
      paddingTop={7}
      justifyContent="space-between"
    >
      <Heading1 color="teal">{title}</Heading1>
      {children && <Box>{children}</Box>}
    </Container>
  );
};

export default OverviewPageHeader;
