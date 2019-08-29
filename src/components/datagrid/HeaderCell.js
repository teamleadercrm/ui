import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Cell from './Cell';
import Icon from '../icon';
import cx from 'classnames';
import { IconArrowDownSmallOutline, IconArrowUpSmallOutline } from '@teamleader/ui-icons';

class HeaderCell extends PureComponent {
  renderSortedIndicators = () => {
    const { onClick, sorted } = this.props;

    if (sorted === 'asc' || (!sorted && onClick)) {
      return <IconArrowDownSmallOutline />;
    }

    if (sorted === 'desc') {
      return <IconArrowUpSmallOutline />;
    }

    return null;
  };

  render() {
    const { align, children, className, onClick, sorted, ...others } = this.props;

    const classNames = cx(
      theme['header-cell'],
      {
        [theme['is-sortable']]: onClick,
        [theme['is-sorted']]: sorted === 'asc' || sorted === 'desc',
      },
      className,
    );

    return (
      <Cell align={align} className={classNames} onClick={onClick} {...others} preventOverflow={false}>
        {align === 'right' && <Icon marginRight={1}>{this.renderSortedIndicators()}</Icon>}
        <span className={theme['has-overflow-prevention']}>{children}</span>
        {align === 'left' && <Icon marginLeft={1}>{this.renderSortedIndicators()}</Icon>}
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
  /** The order in which the grid rows will be sorted. */
  sorted: PropTypes.oneOf(['asc', 'desc']),
};

HeaderCell.defaultProps = {
  align: 'left',
};

export default HeaderCell;
