import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Container from '../container';
import { ContainerProps } from '../container/Container';

export interface DetailPageBodyProps extends Omit<ContainerProps, 'fixed' | 'paddingTop' | 'paddingBottom'> {
  children: ReactNode;
}

const DetailPageBody: GenericComponent<DetailPageBodyProps> = ({ children, ...others }) => {
  return (
    <Container {...others} fixed paddingTop={6} paddingBottom={8}>
      {children}
    </Container>
  );
};

DetailPageBody.displayName = 'DetailPage.Body';

export default DetailPageBody;
