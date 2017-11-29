import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Cell extends PureComponent {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    backgroundColor: PropTypes.oneOf(['transparent', 'white', 'neutral']),
    children: PropTypes.any,
    className: PropTypes.string,
    flex: PropTypes.oneOf(['fit-content', 'min-width', '1', '2', '3', '4']),
    soft: PropTypes.bool,
    strong: PropTypes.bool,
  };

  static defaultProps = {
    align: 'left',
    backgroundColor: 'transparent',
    flex: '1',
    soft: false,
    strong: false,
  };

  render() {
    const { align, backgroundColor, children, className, flex, soft, strong, ...others } = this.props;

    const classNames = cx(
      theme['cell'],
      theme[`align-${align}`],
      theme[`flex-${flex}`],
      theme[`has-background-${backgroundColor}`],
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
