import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';
import { IconLockSmallFilled } from '@teamleader/ui-icons';

/** @type {React.ComponentType<any>} */
class MarketingLockBadge extends Component {
  render() {
    const { className, size, ...others } = this.props;

    const classNames = cx(theme['wrapper'], theme[`is-${size}`], className);

    return (
      <Box
        {...others}
        alignItems="center"
        borderRadius="rounded"
        display="flex"
        justifyContent="center"
        className={classNames}
      >
        <Icon className={theme['icon']}>
          <IconLockSmallFilled />
        </Icon>
      </Box>
    );
  }
}

MarketingLockBadge.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
};

MarketingLockBadge.defaultProps = {
  size: 'medium',
};

export default MarketingLockBadge;
