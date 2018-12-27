import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Cell from './Cell';
import Icon from '../icon';
import cx from 'classnames';
import { IconChevronDownSmallOutline, IconChevronUpSmallOutline, IconSortSmallOutline } from '@teamleader/ui-icons';

class HeaderCell extends PureComponent {
  renderSortedIndicators = () => {
    const { sorted } = this.props;

    if (sorted === 'asc') {
      return <IconChevronUpSmallOutline />;
    }

    if (sorted === 'desc') {
      return <IconChevronDownSmallOutline />;
    }

    if (!sorted) {
      return <IconSortSmallOutline />;
    }

    return null;
  };

  render() {
    const { children, className, onClick, sorted, ...others } = this.props;

    const classNames = cx(
      theme['header-cell'],
      {
        [theme['is-sortable']]: onClick,
        [theme['is-sorted']]: sorted === 'asc' || sorted === 'desc',
      },
      className,
    );

    return (
      <Cell className={classNames} onClick={onClick} {...others} preventOverflow={false}>
        <span className={theme['has-overflow-prevention']}>{children}</span>
        <Icon>{this.renderSortedIndicators()}</Icon>
      </Cell>
    );
  }
}

HeaderCell.propTypes = {
  /** The content to display inside the cell. */
  children: PropTypes.any,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Callback function that is fired when clicking on the cell. */
  onClick: PropTypes.func,
  /** The order in which the grid rows will be sorted. */
  sorted: PropTypes.oneOf(['none', false, 'asc', 'desc']),
};

HeaderCell.defaultProps = {
  sorted: 'none',
};

export default HeaderCell;
