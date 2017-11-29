import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import HeaderCell from './HeaderCell';
import Checkbox from '../checkbox';

class HeaderRow extends PureComponent {
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
      <Row backgroundColor="neutral" className={className} data-teamleader-ui="datagrid-header-row" {...others}>
        {selectable && (
          <HeaderCell flex="min-width">
            <Checkbox checked={selected} onChange={onSelectionChange} />
          </HeaderCell>
        )}
        {children}
      </Row>
    );
  }
}

export default HeaderRow;
