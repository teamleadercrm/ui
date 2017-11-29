import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Cell extends PureComponent {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    children: PropTypes.any,
    className: PropTypes.string,
    flex: PropTypes.oneOf(['fit-content', 'min-width', '1', '2', '3', '4']),
    soft: PropTypes.bool,
    strong: PropTypes.bool,
  };

  static defaultProps = {
    align: 'left',
    flex: '1',
    soft: false,
    strong: false,
  };

  render() {
    const { align, children, className, flex, soft, strong, ...others } = this.props;

    const classNames = cx(
      theme['cell'],
      theme[`align-${align}`],
      theme[`flex-${flex}`],
      {
        [theme['is-soft']]: soft,
        [theme['is-strong']]: strong,
      },
      className,
    );

    return (
      <div className={classNames} data-teamleader-ui="datagrid-cell" {...others}>
        {children}
      </div>
    );
  }
}

export default Cell;
