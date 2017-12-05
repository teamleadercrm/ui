import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Checkbox from '../checkbox';
import Row from './Row';

class BodyRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onSelectionChange: PropTypes.func,
    selectable: PropTypes.bool,
    selected: PropTypes.bool,
  };

  render() {
    const { className, children, onSelectionChange, selected, selectable, ...others } = this.props;

    return (
      <Row className={className} data-teamleader-ui="datagrid-body-row" {...others}>
        {selectable && (
          <Cell flex="min-width">
            <Checkbox checked={selected} onChange={onSelectionChange} size="large" />
          </Cell>
        )}
        {children}
      </Row>
    );
  }
}

export default BodyRow;
