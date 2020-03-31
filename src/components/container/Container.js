import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Container extends PureComponent {
  render() {
    const { children, className, fixed, ...others } = this.props;

    const classNames = cx(
      theme['container'],
      {
        [theme['is-fixed']]: fixed,
      },
      className,
    );

    return (
      <Box {...others} className={classNames}>
        {children}
      </Box>
    );
  }
}

Container.propTypes = {
  fixed: PropTypes.bool,
};

export default Container;
