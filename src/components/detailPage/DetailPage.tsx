import React, { ReactNode } from 'react';
import DetailPageBody, { DetailPageBodyProps } from './DetailPageBody';
import DetailPageHeader, { DetailPageHeaderProps } from './DetailPageHeader';
import Box from '../box';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface DetailPageProps extends Omit<BoxProps, 'ref'> {
  children: ReactNode;
}

interface DetailPageComponent extends GenericComponent<DetailPageProps> {
  Body: GenericComponent<DetailPageBodyProps>;
  Header: GenericComponent<DetailPageHeaderProps>;
}

const DetailPage: DetailPageComponent = ({ children, ...others }) => {
  return (
    <Box data-teamleader-ui="detail-page" {...others}>
      {children}
    </Box>
  );
};

DetailPage.Body = DetailPageBody;
DetailPage.Header = DetailPageHeader;

export default DetailPage;
