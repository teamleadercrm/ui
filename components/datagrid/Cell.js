import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Cell extends PureComponent {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    backgroundColor: PropTypes.oneOf(['white', 'neutral']),
    border: PropTypes.oneOf(['around', 'left', 'right']),
    bordered: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    flex: PropTypes.oneOf(['min-width', '1', '2', '3', '4']),
    preventOverflow: PropTypes.bool,
    soft: PropTypes.bool,
    strong: PropTypes.bool,
  };

  static defaultProps = {
    align: 'left',
    flex: '1',
    preventOverflow: true,
    soft: false,
    strong: false,
  };

  render() {
    const {
      align,
      backgroundColor,
      border,
      children,
      className,
      flex,
      preventOverflow,
      soft,
      strong,
      ...others
    } = this.props;

    const classNames = cx(
      theme['cell'],
      theme[`align-${align}`],
      theme[`flex-${flex}`],
      theme[`has-background-${backgroundColor}`],
      theme[`has-border-${border}`],
      {
        [theme['is-soft']]: soft,
        [theme['is-strong']]: strong,
      },
      className,
    );

    return (
      <Box className={classNames} data-teamleader-ui="datagrid-cell" boxSizing="content-box" {...others}>
        {preventOverflow ? <div className={theme['has-overflow-prevention']}>{children}</div> : children}
      </Box>
    );
  }
}

export default Cell;
