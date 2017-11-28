import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Cell from './Cell';
import { Heading4 } from '../typography';
import { IconSortSmallOutline } from '@teamleader/ui-icons';

const HeaderCell = ({ children, onClick }) => {
  return (
    <Cell className={theme['header-cell']} onClick={onClick}>
      <Heading4 color="neutral">
        {children}
        {onClick && <IconSortSmallOutline />}
      </Heading4>
    </Cell>
  );
};

HeaderCell.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default HeaderCell;
