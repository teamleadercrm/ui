import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Cell from './Cell';
import Icon from '../icon';
import { UITextBody } from '../typography';
import cx from 'classnames';
import { IconArrowDownSmallOutline, IconArrowUpSmallOutline } from '@teamleader/ui-icons';

class HeaderCell extends PureComponent {
  renderSortedIndicators = () => {
    const { sortable, sorted } = this.props;

    if (sorted === 'asc' || (!sorted && sortable)) {
      return <IconArrowUpSmallOutline />;
    }

    if (sorted === 'desc') {
      return <IconArrowDownSmallOutline />;
    }

    return null;
  };

  render() {
    const { align, children, className, onClick, sortable, sorted, ...others } = this.props;

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
        {sortable && align === 'right' && <Icon marginRight={1}>{this.renderSortedIndicators()}</Icon>}
        <UITextBody element="span" maxLines={1}>
          {children}
        </UITextBody>
        {sortable && align === 'left' && <Icon marginLeft={1}>{this.renderSortedIndicators()}</Icon>}
      </Cell>
    );
  }
}

HeaderCell.propTypes = {
  /** The horizontal alignment of the text inside the cell. */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** The content to display inside the cell. */
  children: PropTypes.any,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Callback function that is fired when clicking on the cell. */
  onClick: PropTypes.func,
  /** If true, sorting arrows will appear next to the text */
  sortable: PropTypes.bool,
  /** The order in which the grid rows will be sorted. */
  sorted: PropTypes.oneOf(['asc', 'desc']),
};

HeaderCell.defaultProps = {
  align: 'left',
};

export default HeaderCell;
