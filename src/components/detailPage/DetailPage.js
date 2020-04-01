import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DetailPageBody from './DetailPageBody';
import DetailPageHeader from './DetailPageHeader';
import Box from '../box';

class DetailPage extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return <Box {...others}>{children}</Box>;
  }
}

DetailPage.propTypes = {
  children: PropTypes.node.isRequired,
};

DetailPage.Body = DetailPageBody;
DetailPage.Header = DetailPageHeader;

export default DetailPage;
