import React from 'react';
import theme from './theme.css';
import Cell, { CellProps } from './Cell';
import Icon from '../icon';
import { UITextBody } from '../typography';
import cx from 'classnames';
import { IconArrowDownSmallOutline, IconArrowUpSmallOutline } from '@teamleader/ui-icons';
import { GenericComponent } from '../../@types/types';

export interface HeaderCellProps extends CellProps {
  /** If true, sorting arrows will appear next to the text */
  sortable?: boolean;
  /** The order in which the grid rows will be sorted. */
  sorted?: 'asc' | 'desc';
}

const HeaderCell: GenericComponent<HeaderCellProps> = ({
  align = 'left',
  children,
  className,
  onClick,
  sortable,
  sorted,
  ...others
}) => {
  const renderSortedIndicators = () => {
    if (sorted === 'asc' || (!sorted && sortable)) {
      return <IconArrowUpSmallOutline />;
    }

    if (sorted === 'desc') {
      return <IconArrowDownSmallOutline />;
    }

    return null;
  };

  const classNames = cx(
    theme['header-cell'],
    {
      [theme['is-sortable']]: sortable,
      [theme['is-sorted']]: sorted === 'asc' || sorted === 'desc',
    },
    className,
  );

  return (
    <Cell align={align} className={classNames} onClick={onClick} {...others} preventOverflow={false}>
      {sortable && align === 'right' && <Icon marginRight={1}>{renderSortedIndicators()}</Icon>}
      <UITextBody element="span" maxLines={1}>
        {children}
      </UITextBody>
      {sortable && align === 'left' && <Icon marginLeft={1}>{renderSortedIndicators()}</Icon>}
    </Cell>
  );
};
HeaderCell.displayName = 'DataGrid.HeaderCell';

export default HeaderCell;
