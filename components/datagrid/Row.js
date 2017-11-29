import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Checkbox from '../checkbox';
import cx from 'classnames';
import theme from './theme.css';

class Row extends PureComponent {
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
      <div className={classNames} data-teamleader-ui="datagrid-row">
        {selectable && (
          <Cell flex="min-width">
            <Checkbox checked={selected} onChange={onSelectionChange} />
          </Cell>
        )}
        {children}
      </div>
    );
  }
}

export default Row;
