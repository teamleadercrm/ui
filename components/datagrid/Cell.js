import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

const Cell = props => {
  const { align, children, className, flex, soft, strong, ...others } = props;

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
};

Cell.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.any,
  className: PropTypes.string,
  flex: PropTypes.oneOf(['fit-content', 'min-width', '1', '2', '3', '4']),
  soft: PropTypes.bool,
  strong: PropTypes.bool,
};

export default Cell;
