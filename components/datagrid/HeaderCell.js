import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Cell from './Cell';
import cx from 'classnames';
import { IconChevronDownSmallOutline, IconChevronUpSmallOutline } from '@teamleader/ui-icons';

class HeaderCell extends PureComponent {
  render() {
    const { children, className, onClick, sorted, ...others } = this.props;

    const classNames = cx(
      theme['header-cell'],
      {
        [theme['is-sortable']]: onClick,
        [theme['is-sorted']]: sorted !== 'none',
      },
      className,
    );

    return (
      <Cell className={classNames} onClick={onClick} {...others}>
        {children}
        {sorted !== 'none' ? sorted === 'asc' ? <IconChevronUpSmallOutline /> : <IconChevronDownSmallOutline /> : null}
      </Cell>
    );
  }
}

HeaderCell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  sorted: PropTypes.oneOf(['none', 'asc', 'desc']),
};

HeaderCell.defaultProps = {
  sorted: 'none',
};

export default HeaderCell;
