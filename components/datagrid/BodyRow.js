import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Checkbox from '../checkbox';
import Row from './Row';
import cx from 'classnames';
import theme from './theme.css';

class BodyRow extends PureComponent {
  render() {
    const {
      className,
      checkboxSize,
      children,
      sliceFrom,
      sliceTo,
      onSelectionChange,
      selected,
      selectable,
      ...others
    } = this.props;

    const childrenArray = Array.isArray(children) ? children : [children];
    const childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
    const classNames = cx(theme['body-row'], className);

    return (
      <Row className={classNames} data-teamleader-ui="datagrid-body-row" {...others}>
        {selectable && (
          <Cell flex="min-width">
            <Checkbox checked={selected} onChange={onSelectionChange} size={checkboxSize} />
          </Cell>
        )}
        {childrenSliced}
      </Row>
    );
  }
}

BodyRow.propTypes = {
  checkboxSize: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  children: PropTypes.any,
  onSelectionChange: PropTypes.func,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  sliceFrom: PropTypes.number,
  sliceTo: PropTypes.number,
};

export default BodyRow;
