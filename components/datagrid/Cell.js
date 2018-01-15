import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Cell extends PureComponent {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    backgroundColor: PropTypes.oneOf(['white', 'neutral']),
    border: PropTypes.oneOf(['none', 'around', 'left', 'right']),
    bordered: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    flex: PropTypes.oneOf(['min-width', '1', '2', '3', '4']),
    soft: PropTypes.bool,
    strong: PropTypes.bool,
  };

  static defaultProps = {
    align: 'left',
    border: 'none',
    flex: '1',
    soft: false,
    strong: false,
  };

  render() {
    const { align, backgroundColor, border, children, className, flex, soft, strong, ...others } = this.props;

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
      <div className={classNames} data-teamleader-ui="datagrid-cell" {...others}>
        <div className={theme['has-overflow-prevention']}>{children}</div>
      </div>
    );
  }
}

export default Cell;
