import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OverviewPageBody from './OverviewPageBody';
import OverviewPageHeader from './OverviewPageHeader';
import Box from '../box';

class OverviewPage extends PureComponent {
  render() {
    const { children, className, ...others } = this.props;

    return <Box {...others}>{children}</Box>;
  }
}

OverviewPage.propTypes = {
  children: PropTypes.node.isRequired,
};

OverviewPage.Body = OverviewPageBody;
OverviewPage.Header = OverviewPageHeader;

export default OverviewPage;
