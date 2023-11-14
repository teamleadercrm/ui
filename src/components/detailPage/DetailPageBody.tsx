import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import Container from '../container';
import { ContainerProps } from '../container/Container';

export interface DetailPageBodyProps extends Omit<ContainerProps, 'fixed' | 'paddingTop' | 'paddingBottom'> {
  children: ReactNode;
}

const DetailPageBody: GenericComponent<DetailPageBodyProps> = forwardRef<HTMLElement, DetailPageBodyProps>(
  ({ children, ...others }, ref) => {
    return (
      <Container data-teamleader-ui="detail-page-body" {...others} fixed paddingTop={6} paddingBottom={8} ref={ref}>
        {children}
      </Container>
    );
  },
);

DetailPageBody.displayName = 'DetailPage.Body';

export default DetailPageBody;
