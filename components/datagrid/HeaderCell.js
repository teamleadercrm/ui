import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Cell from './Cell';
import cx from 'classnames';
import { IconSortSmallOutline } from '@teamleader/ui-icons';

const HeaderCell = ({ children, className, onClick, ...others }) => {
  return (
    <Cell className={cx(theme['header-cell'], className)} onClick={onClick} {...others}>
      {children}
      {onClick && <IconSortSmallOutline />}
    </Cell>
  );
};

HeaderCell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default HeaderCell;
