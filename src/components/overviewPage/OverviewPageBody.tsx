import React, { ReactNode } from 'react';
import Container from '../container';

interface OverviewPageBodyProps {
  children: ReactNode;
}

const OverviewPageBody = ({ children, ...others }: OverviewPageBodyProps) => {
  return (
    <Container paddingBottom={8} {...others}>
      {children}
    </Container>
  );
};

export default OverviewPageBody;
