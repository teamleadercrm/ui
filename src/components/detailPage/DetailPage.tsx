import React from 'react';
import PropTypes from 'prop-types';
import DetailPageBody from './DetailPageBody';
import DetailPageHeader from './DetailPageHeader';
import Box from '../box';
import { BoxProps } from '../box/Box';

const DetailPage = ({ children, ...others }: Omit<BoxProps, 'ref'>) => {
  return <Box {...others}>{children}</Box>;
};

DetailPage.propTypes = {
  children: PropTypes.node.isRequired,
};

DetailPage.Body = DetailPageBody;
DetailPage.Header = DetailPageHeader;

export default DetailPage;
