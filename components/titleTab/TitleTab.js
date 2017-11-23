import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class TitleTab extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { children, className, ...others } = this.props;
    const classNames = cx(theme['title-tab'], className);

    return (
      <Box data-teamleader-ui="title-tab" className={classNames} {...others}>
        {children}
      </Box>
    );
  }
}

export default TitleTab;
