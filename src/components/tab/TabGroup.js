import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class TabGroup extends PureComponent {
  render() {
    const { children, className, inverted, size, ...others } = this.props;

    const classNames = cx(theme['tab-group'], className);

    return (
      <Box data-teamleader-ui="tab-group" className={classNames} {...others}>
        {React.Children.map(children, (child) => React.cloneElement(child, { size }))}
      </Box>
    );
  }
}

TabGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
};

export default TabGroup;
