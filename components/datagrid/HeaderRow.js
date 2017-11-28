import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HeaderCell from './HeaderCell';
import Checkbox from '../checkbox';
import cx from 'classnames';
import theme from './theme.css';

class HeaderRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onSelectionChange: PropTypes.func,
    selectable: PropTypes.bool,
    selected: PropTypes.bool,
  };

  render() {
    const { className, children, onSelectionChange, selected, selectable } = this.props;

    const classNames = cx(theme['row'], className);

    return (
      <div className={classNames} data-teamleader-ui="datagrid-header-row">
        {selectable && (
          <HeaderCell className={theme['flex-fit-content']}>
            <Checkbox checked={selected} onChange={onSelectionChange} />
          </HeaderCell>
        )}
        {children}
      </div>
    );
  }
}

export default HeaderRow;
