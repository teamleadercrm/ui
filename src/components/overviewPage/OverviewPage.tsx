import React, { ReactNode } from 'react';
import OverviewPageBody from './OverviewPageBody';
import OverviewPageHeader from './OverviewPageHeader';
import Box from '../box';
import { BoxProps } from '../box/Box';

interface OverviewPageProps extends Omit<BoxProps, 'children' | 'className'> {
  children: ReactNode;
}

const OverviewPage = ({ children, ...others }: OverviewPageProps) => {
  return <Box {...others}>{children}</Box>;
};

OverviewPage.Body = OverviewPageBody;
OverviewPage.Body.displayName = 'OverviewPage.Body';
OverviewPage.Header = OverviewPageHeader;
OverviewPage.Header.displayName = 'OverviewPage.Header';

export default OverviewPage;
