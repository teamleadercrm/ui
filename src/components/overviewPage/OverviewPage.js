import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OverviewPageBody from './OverviewPageBody';
import OverviewPageHeader from './OverviewPageHeader';
import Box from '../box';

/** @type {React.ComponentType<any>} */
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
OverviewPage.Body.displayName = 'OverviewPage.Body';
OverviewPage.Header = OverviewPageHeader;
OverviewPage.Header.displayName = 'OverviewPage.Header';

export default OverviewPage;
