import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import HeaderCell from './HeaderCell';
import Checkbox from '../checkbox';
import cx from 'classnames';
import theme from './theme.css';

class HeaderRow extends PureComponent {
  render() {
    const {
      className,
      children,
      sliceFrom,
      sliceTo,
      onSelectionChange,
      partiallySelected,
      selected,
      selectable,
      ...others
    } = this.props;

    const childrenArray = Array.isArray(children) ? children : [children];
    const childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
    const classNames = cx(theme['header-row'], className);

    return (
      <Row backgroundColor="neutral" className={classNames} data-teamleader-ui="datagrid-header-row" {...others}>
        {selectable && (
          <HeaderCell flex="min-width">
            <Checkbox
              checked={selected}
              onChange={onSelectionChange}
              size="large"
              partiallySelected={partiallySelected}
            />
          </HeaderCell>
        )}
        {childrenSliced}
      </Row>
    );
  }
}

HeaderRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onSelectionChange: PropTypes.func,
  partiallySelected: PropTypes.bool,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  sliceFrom: PropTypes.number,
  sliceTo: PropTypes.number,
};

export default HeaderRow;
