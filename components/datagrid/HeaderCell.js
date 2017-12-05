import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Cell from './Cell';
import cx from 'classnames';
import { IconChevronTinyDownSmallOutline, IconChevronTinyUpSmallOutline } from '@teamleader/ui-icons';

class HeaderCell extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    sorted: PropTypes.oneOf(['none', 'asc', 'desc']),
  };

  static defaultProps = {
    sorted: 'none',
  };

  render() {
    const { children, className, onClick, sorted, ...others } = this.props;

    const classNames = cx(
      theme['header-cell'],
      {
        [theme['is-sortable']]: onClick,
      },
      className,
    );

    return (
      <Cell className={classNames} onClick={onClick} {...others}>
        {children}
        {sorted !== 'none' ? (
          sorted === 'asc' ? (
            <IconChevronTinyUpSmallOutline />
          ) : (
            <IconChevronTinyDownSmallOutline />
          )
        ) : null}
      </Cell>
    );
  }
}

export default HeaderCell;
