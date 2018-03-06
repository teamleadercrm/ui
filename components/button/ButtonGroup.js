import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class ButtonGroup extends PureComponent {
  static propTypes = {
    /** The content to display inside the button group. */
    children: PropTypes.node,
    /** A class name for the wrapper to give custom styles. */
    className: PropTypes.string,
    /** If true, child components will be displayed segmented. */
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
