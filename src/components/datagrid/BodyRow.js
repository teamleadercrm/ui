import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Checkbox from '../checkbox';
import Row from './Row';
import cx from 'classnames';
import theme from './theme.css';

const allowedParentNodes = ['datagrid-body-row', 'datagrid-cell'];

class BodyRow extends PureComponent {
  handleClick = event => {
    if (allowedParentNodes.includes(event.target.parentNode.dataset.teamleaderUi)) {
      const { onClick } = this.props;
      onClick && onClick(event);
    }
  };

  render() {
    const {
      className,
      checkboxSize,
      children,
      hovered,
      sliceFrom,
      sliceTo,
      onClick,
      onSelectionChange,
      selected,
      selectable,
      ...others
    } = this.props;

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
        onClick={this.handleClick}
        {...others}
      >
        {selectable && (
          <Cell align="center" flex="min-width">
            <Checkbox checked={selected} onChange={onSelectionChange} size={checkboxSize} />
          </Cell>
        )}
        {childrenSliced}
      </Row>
    );
  }
}

BodyRow.propTypes = {
  /** The size of the checkbox rendered on the left side of the row. */
  checkboxSize: PropTypes.oneOf(['small', 'medium', 'large']),
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

export default BodyRow;
