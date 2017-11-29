import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class TabGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    inverted: PropTypes.bool,
  };

  static defaultProps = {
    inverted: false,
  };

  render() {
    const { children, className, inverted, ...others } = this.props;

    const classNames = cx(
      {
        [theme['inverted']]: inverted,
      },
      className,
    );

    return (
      <Box data-teamleader-ui="tab-group" className={classNames} {...others}>
        {children}
      </Box>
    );
  }
}

export default TabGroup;
