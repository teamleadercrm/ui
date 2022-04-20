import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

/** @type {React.ComponentType<any>} */
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
      <Box {...others} boxSizing="content-box" className={classNames}>
        {children}
      </Box>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
};

export default Container;
