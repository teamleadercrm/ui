import React, { ReactNode } from 'react';
import Box from '../box';
import Container from '../container';
import { Heading1 } from '../typography';

interface OverviewPageHeaderProps {
  children?: ReactNode;
  title: string | ReactNode;
}

const OverviewPageHeader = ({ children, title, ...others }: OverviewPageHeaderProps) => {
  return (
    <Container {...others} display="flex" marginBottom={5} paddingTop={7} justifyContent="space-between">
      <Heading1 color="teal">{title}</Heading1>
      {children && <Box>{children}</Box>}
    </Container>
  );
};

export default OverviewPageHeader;
