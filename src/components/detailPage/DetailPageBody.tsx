import React from 'react';
import Container from '../container';
import { ContainerProps } from '../container/Container';

const DetailPageBody = ({ children, ...others }: Omit<ContainerProps, 'fixed' | 'paddingTop' | 'paddingBottom'>) => {
  return (
    <Container {...others} fixed paddingTop={6} paddingBottom={8}>
      {children}
    </Container>
  );
};

DetailPageBody.displayName = 'DetailPage.Body';

export default DetailPageBody;
