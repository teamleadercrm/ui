import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

const Cell = props => {
  const { children, className, flex, soft, strong } = props;

  const cellClassNames = cx(
    theme['cell'],
    theme[`flex-${flex}`],
    {
      [theme['is-soft']]: soft,
      [theme['is-strong']]: strong,
    },
    className,
  );

  return (
    <div className={cellClassNames} data-teamleader-ui="datagrid-cell">
      {children}
    </div>
  );
};

Cell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  flex: PropTypes.oneOf(['fit-content', 'min-width', '1', '2', '3', '4']),
  soft: PropTypes.bool,
  strong: PropTypes.bool,
};

export default Cell;
