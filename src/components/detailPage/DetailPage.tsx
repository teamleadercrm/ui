import React, { ReactNode, forwardRef } from 'react';
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

const DetailPage: DetailPageComponent = forwardRef<HTMLElement, DetailPageProps>(({ children, ...others }, ref) => {
  return (
    <Box data-teamleader-ui="detail-page" {...others} ref={ref}>
      {children}
    </Box>
  );
});

DetailPage.displayName = 'DetailPage';

DetailPage.Body = DetailPageBody;
DetailPage.Header = DetailPageHeader;

export default DetailPage;
