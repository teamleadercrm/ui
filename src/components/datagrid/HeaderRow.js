import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import HeaderCell from './HeaderCell';
import Checkbox from '../checkbox';
import cx from 'classnames';
import theme from './theme.css';

const HeaderRow = ({
  className,
  children,
  forwardedRef,
  sliceFrom,
  sliceTo,
  onSelectionChange,
  selected,
  selectable,
  ...others
}) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
  const classNames = cx(theme['header-row'], className);

  return (
    <Row
      backgroundColor="neutral"
      className={classNames}
      data-teamleader-ui="datagrid-header-row"
      ref={forwardedRef}
      {...others}
    >
      {selectable && (
        <HeaderCell flex="checkbox-width" sortable={false}>
          <Checkbox checked={selected} onChange={onSelectionChange} size="small" />
        </HeaderCell>
      )}
      {childrenSliced}
    </Row>
  );
};

HeaderRow.propTypes = {
  /** A class name for the row to give custom styles. */
  className: PropTypes.string,
  /** The cells to display inside the row. */
  children: PropTypes.any,
  /** Callback function that is fired when the checkbox on the left side has changed. */
  onSelectionChange: PropTypes.func,
  /** If true, checkboxes will be rendered on the left side of each row. */
  selectable: PropTypes.bool,
  /** If true, the checkbox on the left side of the row will be checked. */
  selected: PropTypes.bool,
  /** Amount of cells that will be sliced off, starting from left. */
  sliceFrom: PropTypes.number,
  /** Amount of cells that will be sliced off, starting from right. */
  sliceTo: PropTypes.number,
};

/** @type {any} */
const ForwardedHeaderRow = forwardRef((props, ref) => <HeaderRow {...props} forwardedRef={ref} />);

ForwardedHeaderRow.displayName = 'HeaderRow';

export default ForwardedHeaderRow;
