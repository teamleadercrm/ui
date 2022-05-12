import React, { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Checkbox from '../checkbox';
import Row from './Row';
import cx from 'classnames';
import theme from './theme.css';

const BodyRow = ({
  className,
  children,
  forwardedRef,
  hovered,
  sliceFrom,
  sliceTo,
  onClick,
  onSelectionChange,
  selected,
  selectable,
  ...others
}) => {
  const handleClick = useCallback(
    (event) => {
      onClick && onClick(event);
    },
    [onClick],
  );

  const childrenArray = Array.isArray(children) ? children : [children];
  const childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
  const classNames = cx(
    theme['body-row'],
    {
      [theme['has-pointer-cursor']]: onClick,
    },
    className,
  );

  return (
    <Row
      backgroundColor={hovered ? 'neutral' : 'white'}
      className={classNames}
      data-teamleader-ui="datagrid-body-row"
      onClick={handleClick}
      ref={forwardedRef}
      {...others}
    >
      {selectable && (
        <Cell flex="checkbox-width" onClick={(event) => event.stopPropagation()} preventOverflow={false}>
          <Checkbox checked={selected} onChange={onSelectionChange} size="small" />
        </Cell>
      )}
      {childrenSliced}
    </Row>
  );
};

BodyRow.propTypes = {
  /** A class name for the row to give custom styles. */
  className: PropTypes.string,
  /** The cells to display inside the row. */
  children: PropTypes.any,
  /** If true, the row will show a hover state */
  hovered: PropTypes.bool,
  /** Callback function that is fired when the row is clicked */
  onClick: PropTypes.func,
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
const ForwardedBodyRow = forwardRef((props, ref) => <BodyRow {...props} forwardedRef={ref} />);

ForwardedBodyRow.displayName = 'BodyRow';

export default ForwardedBodyRow;
