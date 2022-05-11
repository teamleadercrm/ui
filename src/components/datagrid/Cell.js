import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

const Cell = ({
  align = 'left',
  backgroundColor,
  border,
  children,
  className,
  flex = '1',
  preventOverflow = true,
  soft = false,
  strong = false,
  ...others
}) => {
  const classNames = cx(
    uiUtilities['reset-font-smoothing'],
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
};

Cell.propTypes = {
  /** The horizontal alignment of the text inside the cell. */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** The background color the cell should have. */
  backgroundColor: PropTypes.oneOf(['white', 'neutral']),
  /** The border style the cell should have. */
  border: PropTypes.oneOf(['around', 'left', 'right']),
  /** The cells to display inside the cell. */
  children: PropTypes.any,
  /** A class name for the cell to give custom styles. */
  className: PropTypes.string,
  /** The width proportion of the cell against the others. */
  flex: PropTypes.oneOf(['checkbox-width', 'min-width', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  /** If true, an ellipsis will be shown when the cell content is too long. */
  preventOverflow: PropTypes.bool,
  /** If true, the text inside the cell will be bold */
  soft: PropTypes.bool,
  /** If true, the color of the text inside the cell will be neutral darkest */
  strong: PropTypes.bool,
};

export default Cell;
