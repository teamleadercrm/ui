import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class ButtonGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    segmented: PropTypes.bool,
  };

  render() {
    const { children, className, segmented, ...others } = this.props;

    const classNames = cx(
      theme['group'],
      {
        [theme['segmented']]: segmented,
      },
      className,
    );

    return (
      <Box data-teamleader-ui="button-group" className={classNames} {...others}>
        {children}
      </Box>
    );
  }
}

export default ButtonGroup;
