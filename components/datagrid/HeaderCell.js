import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Cell from './Cell';
import cx from 'classnames';
import { IconSortSmallOutline } from '@teamleader/ui-icons';

class HeaderCell extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    const { children, className, onClick, ...others } = this.props;

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
        {onClick && <IconSortSmallOutline />}
      </Cell>
    );
  }
}

export default HeaderCell;
