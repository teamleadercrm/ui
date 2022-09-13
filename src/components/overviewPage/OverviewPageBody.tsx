import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import Container from '../container';

export interface OverviewPageBodyProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
}

const OverviewPageBody: GenericComponent<OverviewPageBodyProps> = ({ children, ...others }) => {
  return (
    <Container paddingBottom={8} {...others}>
      {children}
    </Container>
  );
};

export default OverviewPageBody;
